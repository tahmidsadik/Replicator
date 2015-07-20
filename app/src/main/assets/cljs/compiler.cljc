;   Copyright (c) Rich Hickey. All rights reserved.
;   The use and distribution terms for this software are covered by the
;   Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
;   which can be found in the file epl-v10.html at the root of this distribution.
;   By using this software in any fashion, you are agreeing to be bound by
;   the terms of this license.
;   You must not remove this notice, or any other, from this software.

(ns cljs.compiler
  #?(:clj (:refer-clojure :exclude [munge macroexpand-1 ensure])
     :cljs (:refer-clojure :exclude [munge macroexpand-1 ensure js-reserved]))
  #?(:cljs (:require-macros [cljs.compiler.macros :refer [emit-wrap]]
                            [cljs.env.macros :refer [ensure]]))
  #?(:clj (:require [cljs.util :as util]
                    [clojure.java.io :as io]
                    [clojure.string :as string]
                    [clojure.tools.reader :as reader]
                    [cljs.env :as env :refer [ensure]]
                    [cljs.tagged-literals :as tags]
                    [cljs.analyzer :as ana]
                    [cljs.source-map :as sm]
                    [clojure.data.json :as json]
                    [cljs.js-deps :as deps])
     :cljs (:require [goog.string :as gstring]
                     [clojure.string :as string]
                     [cljs.tools.reader :as reader]
                     [cljs.env :as env]
                     [cljs.analyzer :as ana]
                     [cljs.source-map :as sm]))
  #?(:clj (:import java.lang.StringBuilder
                   java.io.File)
     :cljs (:import [goog.string StringBuffer])))

#?(:clj (set! *warn-on-reflection* true))

(def js-reserved ana/js-reserved)

(def ^:dynamic *dependents* nil)
(def ^:dynamic *inputs* nil)
(def ^:dynamic *source-map-data* nil)
(def ^:dynamic *lexical-renames* {})

(def cljs-reserved-file-names #{"deps.cljs"})

(defn ns-first-segments []
  (letfn [(get-first-ns-segment [ns] (first (string/split (str ns) #"\.")))]
    (map get-first-ns-segment (keys (::ana/namespaces @env/*compiler*)))))

; Helper fn
(defn shadow-depth [s]
  (let [{:keys [name info]} s]
    (loop [d 0, {:keys [shadow]} info]
      (cond
       shadow (recur (inc d) shadow)
       (some #{(str name)} (ns-first-segments)) (inc d)
       :else d))))

(declare munge)

(defn fn-self-name [{:keys [name info] :as name-var}]
  (let [name (string/replace (str name) ".." "_DOT__DOT_")
        {:keys [ns fn-scope]} info
        scoped-name (apply str
                      (interpose "_$_"
                        (concat (map (comp str :name) fn-scope) [name])))]
    (symbol
      (munge
        (str (string/replace (str ns) "." "$") "$" scoped-name)))))

(defn munge-reserved [reserved]
  (fn [s]
    (if-not (nil? (get reserved s))
      (str s "$")
      s)))

(defn munge
  ([s] (munge s js-reserved))
  ([s reserved]
   (if #?(:clj  (map? s)
          :cljs (ana/cljs-map? s))
     (let [name-var s
           name     (:name name-var)
           field    (:field name-var)
           info     (:info name-var)]
       (if-not (nil? (:fn-self-name info))
         (fn-self-name s)
         ;; Unshadowing
         (let [depth       (shadow-depth s)
               code        #?(:clj  (System/identityHashCode s)
                              :cljs (hash s))
               renamed     (get *lexical-renames* code)
               name        (cond
                             (true? field) (str "self__." name)
                             (not (nil? renamed)) renamed
                             :else name)
               munged-name (munge name reserved)]
           (if (or (true? field) (zero? depth))
             munged-name
             (symbol (str munged-name "__$" depth))))))
     ;; String munging
     (let [ss (string/replace (str s) ".." "_DOT__DOT_")
           ss (string/replace ss
                #?(:clj #"\/(.)" :cljs (js/RegExp. "\\/(.)")) ".$1") ; Division is special
           rf (munge-reserved reserved)
           ss (map rf (string/split ss #"\."))
           ss (string/join "." ss)
           ms #?(:clj (clojure.lang.Compiler/munge ss)
                 :cljs (cljs.core/munge ss))]
       (if (symbol? s)
         (symbol ms)
         ms)))))

(defn- comma-sep [xs]
  (interpose "," xs))

(defn- escape-char [^Character c]
  (let [cp #?(:clj (.hashCode c)
              :cljs (gstring/hashCode c))]
    (case cp
      ; Handle printable escapes before ASCII
      34 "\\\""
      92 "\\\\"
      ; Handle non-printable escapes
      8 "\\b"
      12 "\\f"
      10 "\\n"
      13 "\\r"
      9 "\\t"
      (if (< 31 cp 127)
        c ; Print simple ASCII characters
        #?(:clj (format "\\u%04X" cp)
           :cljs (str "\\u" (.toString cp 16))))))) ; Any other character is Unicode

(defn- escape-string [^CharSequence s]
  (let [sb #?(:clj (StringBuilder. (count s))
              :cljs (StringBuffer.))]
    (doseq [c s]
      (.append sb (escape-char c)))
    (.toString sb)))

(defn- wrap-in-double-quotes [x]
  (str \" x \"))

(defmulti emit* :op)

(defn emit [ast]
  (ensure
    (when *source-map-data*
      (let [{:keys [env]} ast]
        (when (:line env)
          (let [{:keys [line column]} env]
            (swap! *source-map-data*
              (fn [m]
                (let [minfo (cond-> {:gcol (:gen-col m)
                                     :gline (:gen-line m)}
                              (= (:op ast) :var)
                              (assoc :name (str (-> ast :info :name))))]
                  ; Dec the line/column numbers for 0-indexing.
                  ; tools.reader uses 1-indexed sources, chrome
                  ; expects 0-indexed source maps.
                  (update-in m [:source-map (dec line)]
                    (fnil (fn [line]
                            (update-in line [(if column (dec column) 0)]
                              (fnil (fn [column] (conj column minfo)) [])))
                      (sorted-map))))))))))
    (emit* ast)))

(defn emits [& xs]
  (doseq [x xs]
    (cond
     (nil? x) nil
     (map? x) (emit x)
     (seq? x) (apply emits x)
     (fn? x)  (x)
     :else (let [s (print-str x)]
             (when *source-map-data*
               (swap! *source-map-data*
                 update-in [:gen-col] #(+ % (count s))))
             (print s))))
  nil)

(defn emitln [& xs]
  (apply emits xs)
  (println)
  (when *source-map-data*
    (swap! *source-map-data*
      (fn [{:keys [gen-line] :as m}]
        (assoc m
          :gen-line (inc gen-line)
          :gen-col 0))))
  nil)

(defn ^String emit-str [expr]
  (with-out-str (emit expr)))

#?(:clj
   (defmulti emit-constant class)
   :cljs
   (defmulti emit-constant type))

(defmethod emit-constant nil [x] (emits "null"))

#?(:clj
   (defmethod emit-constant Long [x] (emits "(" x ")")))

#?(:clj
   (defmethod emit-constant Integer [x] (emits x))) ; reader puts Integers in metadata

#?(:clj
   (defmethod emit-constant Double [x] (emits x))
   :cljs
   (defmethod emit-constant js/Number [x] (emits x)))

#?(:clj
   (defmethod emit-constant BigDecimal [x] (emits (.doubleValue ^BigDecimal x))))

#?(:clj
   (defmethod emit-constant clojure.lang.BigInt [x] (emits (.doubleValue ^clojure.lang.BigInt x))))

(defmethod emit-constant #?(:clj String :cljs js/String) [x]
  (emits (wrap-in-double-quotes (escape-string x))))

(defmethod emit-constant #?(:clj Boolean :cljs js/Boolean) [x] (emits (if x "true" "false")))

#?(:clj
   (defmethod emit-constant Character [x]
     (emits (wrap-in-double-quotes (escape-char x)))))

(defmethod emit-constant #?(:clj java.util.regex.Pattern :cljs js/RegExp) [x]
  (if (= "" (str x))
    (emits "(new RegExp(\"\"))")
    (let [[_ flags pattern] (re-find #"^(?:\(\?([idmsux]*)\))?(.*)" (str x))]
      (emits \/
        #?(:clj (.replaceAll (re-matcher #"/" pattern) "\\\\/")
           :cljs (string/replace pattern #"/" "\\\\/"))
        \/ flags))))

(defn emits-keyword [kw]
  (let [ns   (namespace kw)
        name (name kw)]
    (emits "new cljs.core.Keyword(")
    (emit-constant ns)
    (emits ",")
    (emit-constant name)
    (emits ",")
    (emit-constant (if ns
                     (str ns "/" name)
                     name))
    (emits ",")
    (emit-constant (hash kw))
    (emits ")")))

(defmethod emit-constant #?(:clj clojure.lang.Keyword :cljs Keyword) [x]
  (if (-> @env/*compiler* :options :emit-constants)
    (let [value (-> @env/*compiler* ::ana/constant-table x)]
      (emits "cljs.core." value))
    (emits-keyword x)
    ))

(defmethod emit-constant #?(:clj clojure.lang.Symbol :cljs Symbol) [x]
  (let [ns     (namespace x)
        name   (name x)
        symstr (if-not (nil? ns)
                 (str ns "/" name)
                 name)]
    (emits "new cljs.core.Symbol(")
    (emit-constant ns)
    (emits ",")
    (emit-constant name)
    (emits ",")
    (emit-constant symstr)
    (emits ",")
    (emit-constant (hash x))
    (emits ",")
    (emit-constant nil)
    (emits ")")))

;; tagged literal support

(defmethod emit-constant #?(:clj java.util.Date :cljs js/Date) [^java.util.Date date]
  (emits "new Date(" (.getTime date) ")"))

(defmethod emit-constant #?(:clj java.util.UUID :cljs UUID) [^java.util.UUID uuid]
  (emits "new cljs.core.UUID(\"" (.toString uuid) "\")"))

#?(:clj
   (defmacro emit-wrap [env & body]
     `(let [env# ~env]
        (when (= :return (:context env#)) (emits "return "))
        ~@body
        (when-not (= :expr (:context env#)) (emitln ";")))))

(defmethod emit* :no-op [m])

(defmethod emit* :var
  [{:keys [info env form] :as arg}]
  (let [var-name (:name info)
        info (if (= (namespace var-name) "js")
               (let [js-module-name (get-in @env/*compiler* [:js-module-index (name var-name)])]
                 (or js-module-name (name var-name)))
               info)]
    ; We need a way to write bindings out to source maps and javascript
    ; without getting wrapped in an emit-wrap calls, otherwise we get
    ; e.g. (function greet(return x, return y) {}).
    (if (:binding-form? arg)
      ; Emit the arg map so shadowing is properly handled when munging
      ; (prevents duplicate fn-param-names)
      (emits (munge arg))
      (when-not (= :statement (:context env))
        (emit-wrap env
          (emits
            (cond-> info
              (not= form 'js/-Infinity) munge)))))))

(defmethod emit* :var-special
  [{:keys [env var sym meta] :as arg}]
  {:pre [(ana/ast? sym) (ana/ast? meta)]}
  (let [{:keys [name]} (:info var)]
    (emit-wrap env
      (emits "new cljs.core.Var(function(){return " (munge name) ";},"
        sym "," meta ")"))))

(defmethod emit* :meta
  [{:keys [expr meta env]}]
  (emit-wrap env
    (emits "cljs.core.with_meta(" expr "," meta ")")))

(def ^:private array-map-threshold 8)

(defn distinct-keys? [keys]
  (and (every? #(= (:op %) :constant) keys)
       (= (count (into #{} keys)) (count keys))))

(defmethod emit* :map
  [{:keys [env keys vals]}]
  (emit-wrap env
    (cond
      (zero? (count keys))
      (emits "cljs.core.PersistentArrayMap.EMPTY")

      (<= (count keys) array-map-threshold)
      (if (distinct-keys? keys)
        (emits "new cljs.core.PersistentArrayMap(null, " (count keys) ", ["
          (comma-sep (interleave keys vals))
          "], null)")
        (emits "new cljs.core.PersistentArrayMap.fromArray(["
          (comma-sep (interleave keys vals))
          "], true, false)"))

      :else
      (emits "cljs.core.PersistentHashMap.fromArrays(["
        (comma-sep keys)
        "],["
        (comma-sep vals)
        "])"))))

(defmethod emit* :list
  [{:keys [items env]}]
  (emit-wrap env
    (if (empty? items)
      (emits "cljs.core.List.EMPTY")
      (emits "cljs.core.list(" (comma-sep items) ")"))))

(defmethod emit* :vector
  [{:keys [items env]}]
  (emit-wrap env
    (if (empty? items)
      (emits "cljs.core.PersistentVector.EMPTY")
      (let [cnt (count items)]
        (if (< cnt 32)
          (emits "new cljs.core.PersistentVector(null, " cnt
            ", 5, cljs.core.PersistentVector.EMPTY_NODE, ["  (comma-sep items) "], null)")
          (emits "cljs.core.PersistentVector.fromArray([" (comma-sep items) "], true)"))))))

(defn distinct-constants? [items]
  (and (every? #(= (:op %) :constant) items)
       (= (count (into #{} items)) (count items))))

(defmethod emit* :set
  [{:keys [items env]}]
  (emit-wrap env
    (cond
      (empty? items)
      (emits "cljs.core.PersistentHashSet.EMPTY")

      (distinct-constants? items)
      (emits "new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, " (count items) ", ["
        (comma-sep (interleave items (repeat "null"))) "], null), null)")

      :else (emits "cljs.core.PersistentHashSet.fromArray([" (comma-sep items) "], true)"))))

(defmethod emit* :js-value
  [{:keys [items js-type env]}]
  (emit-wrap env
    (if (= js-type :object)
      (do
        (emits "{")
        (when-let [items (seq items)]
          (let [[[k v] & r] items]
            (emits "\"" (name k) "\": " v)
            (doseq [[k v] r]
              (emits ", \"" (name k) "\": " v))))
        (emits "}"))
      (emits "[" (comma-sep items) "]"))))

(defmethod emit* :constant
  [{:keys [form env]}]
  (when-not (= :statement (:context env))
    (emit-wrap env (emit-constant form))))

(defn truthy-constant? [{:keys [op form]}]
  (and (= op :constant)
       form
       (not (or (and (string? form) (= form ""))
                (and (number? form) (zero? form))))))

(defn falsey-constant? [{:keys [op form]}]
  (and (= op :constant)
       (or (false? form) (nil? form))))

(defn safe-test? [env e]
  (let [tag (ana/infer-tag env e)]
    (or (#{'boolean 'seq} tag) (truthy-constant? e))))

(defmethod emit* :if
  [{:keys [test then else env unchecked]}]
  (let [context (:context env)
        checked (not (or unchecked (safe-test? env test)))]
    (cond
      (truthy-constant? test) (emitln then)
      (falsey-constant? test) (emitln else)
      :else
      (if (= :expr context)
        (emits "(" (when checked "cljs.core.truth_") "(" test ")?" then ":" else ")")
        (do
          (if checked
            (emitln "if(cljs.core.truth_(" test ")){")
            (emitln "if(" test "){"))
          (emitln then "} else {")
          (emitln else "}"))))))

(defmethod emit* :case*
  [{:keys [v tests thens default env]}]
  (when (= (:context env) :expr)
    (emitln "(function(){"))
  (let [gs (gensym "caseval__")]
    (when (= :expr (:context env))
      (emitln "var " gs ";"))
    (emitln "switch (" v ") {")
    (doseq [[ts then] (partition 2 (interleave tests thens))]
      (doseq [test ts]
        (emitln "case " test ":"))
      (if (= :expr (:context env))
        (emitln gs "=" then)
        (emitln then))
      (emitln "break;"))
    (when default
      (emitln "default:")
      (if (= :expr (:context env))
        (emitln gs "=" default)
        (emitln default)))
    (emitln "}")
    (when (= :expr (:context env))
      (emitln "return " gs ";})()"))))

(defmethod emit* :throw
  [{:keys [throw env]}]
  (if (= :expr (:context env))
    (emits "(function(){throw " throw "})()")
    (emitln "throw " throw ";")))

(defn emit-comment
  "Emit a nicely formatted comment string."
  [doc jsdoc]
  (let [docs (when doc [doc])
        docs (if jsdoc (concat docs jsdoc) docs)
        docs (remove nil? docs)]
    (letfn [(print-comment-lines [e]
              (doseq [next-line (string/split-lines e)]
                (emitln " * " (string/trim next-line))))]
      (when (seq docs)
        (emitln "/**")
        (doseq [e docs]
          (when e
            (print-comment-lines e)))
        (emitln " */")))))

(defn valid-define-value? [x]
  (or (string? x)
      (true? x)
      (false? x)
      (number? x)))

(defn get-define [mname jsdoc]
  (let [opts (get @env/*compiler* :options)]
    (and (some #?(:clj #(.startsWith ^String % "@define")
                  :cljs #(gstring/startsWith % "@define"))
           jsdoc)
         opts
         (= (:optimizations opts) :none)
         (let [define (get-in opts [:closure-defines (str mname)])]
           (when (valid-define-value? define)
             (pr-str define))))))

(defmethod emit* :def
  [{:keys [name var init env doc jsdoc export test var-ast]}]
  (let [mname (munge name)]
    (when init
      (emit-comment doc (concat jsdoc (:jsdoc init)))
      (when (:def-emits-var env)
        (when (= :return (:context env))
          (emitln "return ("))
        (emitln "(function (){"))
      (emits var)
      (emits " = "
        (if-let [define (get-define mname jsdoc)]
          define
          init))
      (when (:def-emits-var env)
        (emitln "; return (")
        (emits (merge
                 {:op  :var-special
                  :env (assoc env :context :expr)}
                 var-ast))
        (emitln ");})()")
        (when (= :return (:context env))
          (emitln ")")))
      ;; NOTE: JavaScriptCore does not like this under advanced compilation
      ;; this change was primarily for REPL interactions - David
      ;(emits " = (typeof " mname " != 'undefined') ? " mname " : undefined")
      (when-not (= :expr (:context env)) (emitln ";"))
      (when export
        (emitln "goog.exportSymbol('" (munge export) "', " mname ");"))
      (when (and ana/*load-tests* test)
        (when (= :expr (:context env))
          (emitln ";"))
        (emitln var ".cljs$lang$test = " test ";")))))

(defn emit-apply-to
  [{:keys [name params env]}]
  (let [arglist (gensym "arglist__")
        delegate-name (str (munge name) "__delegate")]
    (emitln "(function (" arglist "){")
    (doseq [[i param] (map-indexed vector (drop-last 2 params))]
      (emits "var ")
      (emit param)
      (emits " = cljs.core.first(")
      (emitln arglist ");")
      (emitln arglist " = cljs.core.next(" arglist ");"))
    (if (< 1 (count params))
      (do
        (emits "var ")
        (emit (last (butlast params)))
        (emitln " = cljs.core.first(" arglist ");")
        (emits "var ")
        (emit (last params))
        (emitln " = cljs.core.rest(" arglist ");")
        (emits "return " delegate-name "(")
        (doseq [param params]
          (emit param)
          (when-not (= param (last params)) (emits ",")))
        (emitln ");"))
      (do
        (emits "var ")
        (emit (last params))
        (emitln " = cljs.core.seq(" arglist ");")
        (emits "return " delegate-name "(")
        (doseq [param params]
          (emit param)
          (when-not (= param (last params)) (emits ",")))
        (emitln ");")))
    (emits "})")))

(defn emit-fn-params [params]
  (doseq [param params]
    (emit param)
    ; Avoid extraneous comma (function greet(x, y, z,)
    (when-not (= param (last params))
      (emits ","))))

(defn emit-fn-method
  [{:keys [type name variadic params expr env recurs max-fixed-arity]}]
  (emit-wrap env
    (emits "(function " (munge name) "(")
    (emit-fn-params params)
    (emitln "){")
    (when type
      (emitln "var self__ = this;"))
    (when recurs (emitln "while(true){"))
    (emits expr)
    (when recurs
      (emitln "break;")
      (emitln "}"))
    (emits "})")))

(defn emit-arguments-to-array
  "Emit code that copies function arguments into an array starting at an index.
  Returns name of var holding the array."
  [startslice]
  (assert (and (>= startslice 0) (integer? startslice)))
  (let [mname (munge (gensym))
        i (str mname "__i")
        a (str mname "__a")]
    (emitln "var " i " = 0, "
                   a " = new Array(arguments.length -  " startslice ");")
    (emitln "while (" i " < " a ".length) {"
      a "[" i "] = arguments[" i " + " startslice "]; ++" i ";}")
    a))

(defn emit-variadic-fn-method
  [{:keys [type name variadic params expr env recurs max-fixed-arity] :as f}]
  (emit-wrap env
    (let [name (or name (gensym))
          mname (munge name)
          delegate-name (str mname "__delegate")]
      (emitln "(function() { ")
      (emits "var " delegate-name " = function (")
      (doseq [param params]
        (emit param)
        (when-not (= param (last params)) (emits ",")))
      (emitln "){")
      (when recurs (emitln "while(true){"))
      (emits expr)
      (when recurs
        (emitln "break;")
        (emitln "}"))
      (emitln "};")

      (emitln "var " mname " = function (" (comma-sep
                                             (if variadic
                                               (concat (butlast params) ['var_args])
                                               params)) "){")
      (when type
        (emitln "var self__ = this;"))
      (when variadic
        (emits "var ")
        (emit (last params))
        (emitln " = null;")
        (emitln "if (arguments.length > " (dec (count params)) ") {")
        (let [a (emit-arguments-to-array (dec (count params)))]
          (emitln "  " (last params) " = new cljs.core.IndexedSeq(" a ",0);"))
        (emitln "} "))
      (emits "return " delegate-name ".call(this,")
      (doseq [param params]
        (emit param)
        (when-not (= param (last params)) (emits ",")))
      (emits ");")
      (emitln "};")

      (emitln mname ".cljs$lang$maxFixedArity = " max-fixed-arity ";")
      (emits mname ".cljs$lang$applyTo = ")
      (emit-apply-to (assoc f :name name))
      (emitln ";")
      (emitln mname ".cljs$core$IFn$_invoke$arity$variadic = " delegate-name ";")
      (emitln "return " mname ";")
      (emitln "})()"))))

(defmethod emit* :fn
  [{:keys [name env methods max-fixed-arity variadic recur-frames loop-lets]}]
  ;;fn statements get erased, serve no purpose and can pollute scope if named
  (when-not (= :statement (:context env))
    (let [loop-locals (->> (concat (mapcat :params (filter #(and % @(:flag %)) recur-frames))
                                   (mapcat :params loop-lets))
                           (map munge)
                           seq)]
      (when loop-locals
        (when (= :return (:context env))
            (emits "return "))
        (emitln "((function (" (comma-sep (map munge loop-locals)) "){")
        (when-not (= :return (:context env))
            (emits "return ")))
      (if (= 1 (count methods))
        (if variadic
          (emit-variadic-fn-method (assoc (first methods) :name name))
          (emit-fn-method (assoc (first methods) :name name)))
        (let [name (or name (gensym))
              mname (munge name)
              maxparams (apply max-key count (map :params methods))
              mmap (into {}
                     (map (fn [method]
                            [(munge (symbol (str mname "__" (count (:params method)))))
                             method])
                          methods))
              ms (sort-by #(-> % second :params count) (seq mmap))]
          (when (= :return (:context env))
            (emits "return "))
          (emitln "(function() {")
          (emitln "var " mname " = null;")
          (doseq [[n meth] ms]
            (emits "var " n " = ")
            (if (:variadic meth)
              (emit-variadic-fn-method meth)
              (emit-fn-method meth))
            (emitln ";"))
            (emitln mname " = function(" (comma-sep (if variadic
                                                      (concat (butlast maxparams) ['var_args])
                                                      maxparams)) "){")
          (when variadic
            (emits "var ")
            (emit (last maxparams))
            (emitln " = var_args;"))
          (emitln "switch(arguments.length){")
          (doseq [[n meth] ms]
            (if (:variadic meth)
              (do (emitln "default:")
                  (let [restarg (munge (gensym))]
                    (emitln "var " restarg " = null;")
                    (emitln "if (arguments.length > " max-fixed-arity ") {")
                    (let [a (emit-arguments-to-array max-fixed-arity)]
                      (emitln restarg " = new cljs.core.IndexedSeq(" a ",0);"))
                    (emitln "}")
                    (emitln "return " n ".cljs$core$IFn$_invoke$arity$variadic("
                            (comma-sep (butlast maxparams))
                            (when (> (count maxparams) 1) ", ")
                            restarg ");")))
              (let [pcnt (count (:params meth))]
                (emitln "case " pcnt ":")
                (emitln "return " n ".call(this" (if (zero? pcnt) nil
                                                     (list "," (comma-sep (take pcnt maxparams)))) ");"))))
          (emitln "}")
          (emitln "throw(new Error('Invalid arity: ' + arguments.length));")
          (emitln "};")
          (when variadic
            (emitln mname ".cljs$lang$maxFixedArity = " max-fixed-arity ";")
            (emitln mname ".cljs$lang$applyTo = " (some #(let [[n m] %] (when (:variadic m) n)) ms) ".cljs$lang$applyTo;"))
          (doseq [[n meth] ms]
            (let [c (count (:params meth))]
              (if (:variadic meth)
                (emitln mname ".cljs$core$IFn$_invoke$arity$variadic = " n ".cljs$core$IFn$_invoke$arity$variadic;")
                (emitln mname ".cljs$core$IFn$_invoke$arity$" c " = " n ";"))))
          (emitln "return " mname ";")
          (emitln "})()")))
      (when loop-locals
        (emitln ";})(" (comma-sep loop-locals) "))")))))

(defmethod emit* :do
  [{:keys [statements ret env]}]
  (let [context (:context env)]
    (when (and statements (= :expr context)) (emitln "(function (){"))
    (doseq [s statements] (emitln s))
    (emit ret)
    (when (and statements (= :expr context)) (emitln "})()"))))

(defmethod emit* :try
  [{:keys [env try catch name finally]}]
  (let [context (:context env)]
    (if (or name finally)
      (do
        (when (= :expr context)
          (emits "(function (){"))
        (emits "try{" try "}")
        (when name
          (emits "catch (" (munge name) "){" catch "}"))
        (when finally
          (assert (not= :constant (:op finally)) "finally block cannot contain constant")
          (emits "finally {" finally "}"))
        (when (= :expr context)
          (emits "})()")))
      (emits try))))

(defn emit-let
  [{:keys [bindings expr env]} is-loop]
  (let [context (:context env)]
    (when (= :expr context) (emits "(function (){"))
    (binding [*lexical-renames*
              (into *lexical-renames*
                (when (= :statement context)
                  (map #(vector #?(:clj (System/identityHashCode %)
                                   :cljs (hash %))
                         (gensym (str (:name %) "-")))
                    bindings)))]
      (doseq [{:keys [init] :as binding} bindings]
        (emits "var ")
        (emit binding) ; Binding will be treated as a var
        (emitln " = " init ";"))
      (when is-loop (emitln "while(true){"))
      (emits expr)
      (when is-loop
        (emitln "break;")
        (emitln "}")))
    (when (= :expr context) (emits "})()"))))

(defmethod emit* :let [ast]
  (emit-let ast false))

(defmethod emit* :loop [ast]
  (emit-let ast true))

(defmethod emit* :recur
  [{:keys [frame exprs env]}]
  (let [temps (vec (take (count exprs) (repeatedly gensym)))
        params (:params frame)]
    (dotimes [i (count exprs)]
      (emitln "var " (temps i) " = " (exprs i) ";"))
    (dotimes [i (count exprs)]
      (emitln (munge (params i)) " = " (temps i) ";"))
    (emitln "continue;")))

(defmethod emit* :letfn
  [{:keys [bindings expr env]}]
  (let [context (:context env)]
    (when (= :expr context) (emits "(function (){"))
    (doseq [{:keys [init] :as binding} bindings]
      (emitln "var " (munge binding) " = " init ";"))
    (emits expr)
    (when (= :expr context) (emits "})()"))))

(defn protocol-prefix [psym]
  (symbol (str (-> (str psym) (.replace \. \$) (.replace \/ \$)) "$")))

(defmethod emit* :invoke
  [{:keys [f args env] :as expr}]
  (let [info (:info f)
        fn? (and ana/*cljs-static-fns*
                 (not (:dynamic info))
                 (:fn-var info))
        protocol (:protocol info)
        tag      (ana/infer-tag env (first (:args expr)))
        proto? (and protocol tag
                 (or (and ana/*cljs-static-fns* protocol (= tag 'not-native)) 
                     (and
                       (or ana/*cljs-static-fns*
                           (:protocol-inline env))
                       (or (= protocol tag)
                           ;; ignore new type hints for now - David
                           (and (not (set? tag))
                                (not ('#{any clj clj-or-nil} tag))
                                (when-let [ps (:protocols (ana/resolve-existing-var (dissoc env :locals) tag))]
                                  (ps protocol)))))))
        opt-not? (and (= (:name info) 'cljs.core/not)
                      (= (ana/infer-tag env (first (:args expr))) 'boolean))
        ns (:ns info)
        js? (or (= ns 'js) (= ns 'Math))
        goog? (when ns
                (or (= ns 'goog)
                    (when-let [ns-str (str ns)]
                      (= (get (string/split ns-str #"\.") 0 nil) "goog"))))
        keyword? (and (= (-> f :op) :constant)
                      (keyword? (-> f :form)))
        [f variadic-invoke]
        (if fn?
          (let [arity (count args)
                variadic? (:variadic info)
                mps (:method-params info)
                mfa (:max-fixed-arity info)]
            (cond
             ;; if only one method, no renaming needed
             (and (not variadic?)
                  (= (count mps) 1))
             [f nil]

             ;; direct dispatch to variadic case
             (and variadic? (> arity mfa))
             [(update-in f [:info]
                (fn [info]
                  (-> info
                    (assoc :name (symbol (str (munge info) ".cljs$core$IFn$_invoke$arity$variadic")))
                    ;; bypass local fn-self-name munging, we're emitting direct
                    ;; shadowing already applied
                    (update-in [:info]
                      #(-> % (dissoc :shadow) (dissoc :fn-self-name))))))
              {:max-fixed-arity mfa}]

             ;; direct dispatch to specific arity case
             :else
             (let [arities (map count mps)]
               (if (some #{arity} arities)
                 [(update-in f [:info]
                    (fn [info]
                      (-> info
                        (assoc :name (symbol (str (munge info) ".cljs$core$IFn$_invoke$arity$" arity)))
                        ;; bypass local fn-self-name munging, we're emitting direct
                        ;; shadowing already applied
                        (update-in [:info]
                          #(-> % (dissoc :shadow) (dissoc :fn-self-name)))))) nil]
                 [f nil]))))
          [f nil])]
    (emit-wrap env
      (cond
       opt-not?
       (emits "!(" (first args) ")")

       proto?
       (let [pimpl (str (munge (protocol-prefix protocol))
                        (munge (name (:name info))) "$arity$" (count args))]
         (emits (first args) "." pimpl "(" (comma-sep (cons "null" (rest args))) ")"))

       keyword?
       (emits f ".cljs$core$IFn$_invoke$arity$" (count args) "(" (comma-sep args) ")")
       
       variadic-invoke
       (let [mfa (:max-fixed-arity variadic-invoke)]
        (emits f "(" (comma-sep (take mfa args))
               (when-not (zero? mfa) ",")
               "cljs.core.array_seq([" (comma-sep (drop mfa args)) "], 0))"))
       
       (or fn? js? goog?)
       (emits f "(" (comma-sep args)  ")")
       
       :else
       (if (and ana/*cljs-static-fns* (= (:op f) :var))
         ;; higher order case, static information missing
         (let [fprop (str ".cljs$core$IFn$_invoke$arity$" (count args))]
           (emits "(" f fprop " ? " f fprop "(" (comma-sep args) ") : " f ".call(" (comma-sep (cons "null" args)) "))"))
         (emits f ".call(" (comma-sep (cons "null" args)) ")"))))))

(defmethod emit* :new
  [{:keys [ctor args env]}]
  (emit-wrap env
             (emits "(new " ctor "("
                    (comma-sep args)
                    "))")))

(defmethod emit* :set!
  [{:keys [target val env]}]
  (emit-wrap env (emits target " = " val)))

(defn load-libs
  [libs seen reloads]
  (let [loaded-libs (munge 'cljs.core.*loaded-libs*)
        loaded-libs-temp (munge (gensym 'cljs.core.*loaded-libs*))]
    (when (-> libs meta :reload-all)
      (emitln "if(!COMPILED) " loaded-libs-temp " = " loaded-libs " || cljs.core.set();")
      (emitln "if(!COMPILED) " loaded-libs " = cljs.core.set();"))
    (doseq [lib (remove (set (vals seen)) (distinct (vals libs)))]
      (cond
        #?@(:clj
            [(ana/foreign-dep? lib)
             (let [{:keys [target optimizations]} (get @env/*compiler* :options)]
               ;; we only load foreign libraries under optimizations :none
               (when (= :none optimizations)
                 (if (= :nodejs target)
                   ;; under node.js we load foreign libs globally
                   (let [{:keys [js-dependency-index options]} @env/*compiler*
                         ijs-url (get-in js-dependency-index [(name lib) :url])]
                     (emitln "cljs.core.load_file(\""
                       (str (io/file (util/output-directory options) (util/get-name ijs-url)))
                       "\");"))
                   (emitln "goog.require('" (munge lib) "');"))))])

        (or (-> libs meta :reload)
            (= (get reloads lib) :reload))
        (emitln "goog.require('" (munge lib) "', 'reload');")

        (or (-> libs meta :reload-all)
            (= (get reloads lib) :reload-all))
        (emitln "goog.require('" (munge lib) "', 'reload-all');")

        :else
        (emitln "goog.require('" (munge lib) "');")))
    (when (-> libs meta :reload-all)
      (emitln "if(!COMPILED) " loaded-libs " = cljs.core.into(" loaded-libs-temp ", " loaded-libs ");"))))

(defmethod emit* :ns
  [{:keys [name requires uses require-macros reloads env]}]
  (emitln "goog.provide('" (munge name) "');")
  (when-not (= name 'cljs.core)
    (emitln "goog.require('cljs.core');"))
  (load-libs requires nil (:require reloads))
  (load-libs uses requires (:use reloads)))

(defmethod emit* :deftype*
  [{:keys [t fields pmasks body]}]
  (let [fields (map munge fields)]
    (emitln "")
    (emitln "/**")
    (emitln "* @constructor")
    (emitln "*/")
    (emitln (munge t) " = (function (" (comma-sep fields) "){")
    (doseq [fld fields]
      (emitln "this." fld " = " fld ";"))
    (doseq [[pno pmask] pmasks]
      (emitln "this.cljs$lang$protocol_mask$partition" pno "$ = " pmask ";"))
    (emitln "})")
    (emit body)))

(defmethod emit* :defrecord*
  [{:keys [t fields pmasks body]}]
  (let [fields (concat (map munge fields) '[__meta __extmap __hash])]
    (emitln "")
    (emitln "/**")
    (emitln "* @constructor")
    (doseq [fld fields]
      (emitln "* @param {*} " fld))
    (emitln "* @param {*=} __meta ")
    (emitln "* @param {*=} __extmap")
    (emitln "* @param {number|null} __hash")
    (emitln "*/")
    (emitln (munge t) " = (function (" (comma-sep fields) "){")
    (doseq [fld fields]
      (emitln "this." fld " = " fld ";"))
    (doseq [[pno pmask] pmasks]
      (emitln "this.cljs$lang$protocol_mask$partition" pno "$ = " pmask ";"))
    (emitln "})")
    (emit body)))

(defmethod emit* :dot
  [{:keys [target field method args env]}]
  (emit-wrap env
    (if field
      (emits target "." (munge field #{}))
      (emits target "." (munge method #{}) "("
        (comma-sep args)
        ")"))))

(defmethod emit* :js
  [{:keys [env code segs args]}]
  (emit-wrap env
    (if code
      (emits code)
      (emits (interleave (concat segs (repeat nil))
               (concat args [nil]))))))

;; TODO: unify renaming helpers - this one was hard to find - David

#?(:clj
   (defn rename-to-js
     "Change the file extension from .cljs to .js. Takes a File or a
     String. Always returns a String."
     [^String file-str]
     (cond
       (.endsWith file-str ".cljs")
       (clojure.string/replace file-str #"\.cljs$" ".js")

       (.endsWith file-str ".cljc")
       (clojure.string/replace file-str #"\.cljc$" ".js")

       :else
       (throw (IllegalArgumentException.
                (str "Invalid source file extension " file-str))))))

#?(:clj
   (defn with-core-cljs
     "Ensure that core.cljs has been loaded."
     ([] (with-core-cljs nil))
     ([opts] (with-core-cljs opts (fn [])))
     ([opts body]
      {:pre [(or (nil? opts) (map? opts))
             (fn? body)]}
      (when-not (get-in @env/*compiler* [::ana/namespaces 'cljs.core :defs])
        (ana/analyze-file "cljs/core.cljs" opts))
      (body))))

#?(:clj
   (defn url-path [^File f]
     (.getPath (.toURL (.toURI f)))))

(defn- build-affecting-options [opts]
  (select-keys opts [:static-fns :optimize-constants :elide-asserts :target]))

#?(:clj
   (defn compiled-by-string
     ([] (compiled-by-string nil))
     ([opts]
      (str "// Compiled by ClojureScript "
        (util/clojurescript-version)
        (when opts
          (str " " (pr-str (build-affecting-options opts))))))))

#?(:clj
   (defn compile-file*
     ([src dest] (compile-file* src dest nil))
     ([src dest opts]
      (ensure
        (with-core-cljs opts
          (fn []
            (when (or ana/*verbose* (:verbose opts))
              (util/debug-prn "Compiling" (str src)))
            (let [ext (util/ext src)
                  {:keys [ns] :as ns-info} (ana/parse-ns src)]
              (if-let [cached (and (= (:optimizations opts) :none)
                                   (not= ext "cljc")
                                   (= ns 'cljs.core)
                                   (io/resource "cljs/core.aot.js"))]
               ;; no need to bother with analysis cache reading, handled by
               ;; with-core-cljs
               (do
                 (when (or ana/*verbose* (:verbose opts))
                   (util/debug-prn "Using cached cljs.core" (str src)))
                 (spit dest (slurp cached))
                 (when (true? (:source-map opts))
                   (spit (io/file (str dest ".map"))
                     (json/write-str
                       (assoc
                         (json/read-str (slurp (io/resource "cljs/core.aot.js.map")))
                         "file"
                         (str (io/file (util/output-directory opts) "cljs" "core.js"))))))
                 (ana/parse-ns src dest nil))
               (let [opts (if (or (= ext "clj")
                                  (and (= ns 'cljs.core) (= ext "cljc"))
                                  (:macros-ns opts))
                            (assoc opts :macros-ns true)
                            opts)]
                 (with-open [out ^java.io.Writer (io/make-writer dest {})]
                  (binding [*out* out
                            ana/*cljs-ns* 'cljs.user
                            ana/*cljs-file* (.getPath ^File src)
                            reader/*alias-map* (or reader/*alias-map* {})
                            ana/*cljs-static-fns* (or ana/*cljs-static-fns* (:static-fns opts))
                            *source-map-data* (when (:source-map opts)
                                                (atom
                                                  {:source-map (sorted-map)
                                                   :gen-col 0
                                                   :gen-line 0}))]
                    (emitln (compiled-by-string opts))
                    (with-open [rdr (io/reader src)]
                      (loop [forms (ana/forms-seq* rdr (util/path src))
                             ns-name nil
                             deps nil]
                        (if (seq forms)
                          (let [env (ana/empty-env)
                                ast (ana/analyze env (first forms) nil opts)]
                            (emit ast)
                            (if (= (:op ast) :ns)
                              (recur (rest forms) (:name ast) (merge (:uses ast) (:requires ast)))
                              (recur (rest forms) ns-name deps)))
                          (let [sm-data (when *source-map-data* @*source-map-data*)
                                ret (merge
                                      {:ns (or ns-name 'cljs.user)
                                       :macros-ns (:macros-ns opts)
                                       :provides [ns-name]
                                       :requires (if (= ns-name 'cljs.core)
                                                   (set (vals deps))
                                                   (cond-> (conj (set (vals deps)) 'cljs.core)
                                                     (get-in @env/*compiler* [:options :emit-constants])
                                                     (conj 'constants-table)))
                                       :file dest
                                       :source-file src}
                                      (when sm-data
                                        {:source-map (:source-map sm-data)}))]
                            (when (and sm-data (= (:optimizations opts) :none))
                              (let [sm-file (io/file (str (.getPath ^File dest) ".map"))]
                                (emits "\n//# sourceMappingURL="
                                  (or (:source-map-url opts) (.getName sm-file))
                                  (if (true? (:source-map-timestamp opts))
                                    (str "?rel=" (System/currentTimeMillis))
                                    ""))
                                (spit sm-file
                                  (sm/encode {(url-path src) (:source-map sm-data)}
                                    {:lines (+ (:gen-line sm-data) 2)
                                     :file (url-path dest)
                                     :source-map-timestamp (:source-map-timestamp opts)
                                     :source-map-pretty-print (:source-map-pretty-print opts)}))))
                            (let [path (.getPath (.toURL ^File dest))]
                              (swap! env/*compiler* assoc-in [::compiled-cljs path] ret))
                            (let [{:keys [output-dir cache-analysis]} opts]
                              (when (and (true? cache-analysis) output-dir)
                                (ana/write-analysis-cache ns-name
                                  (ana/cache-file src (ana/parse-ns src) output-dir :write)))
                              ret))))))))))))))))

#?(:clj
   (defn requires-compilation?
     "Return true if the src file requires compilation."
     ([src dest] (requires-compilation? src dest nil))
     ([^File src ^File dest opts]
      (let [{:keys [ns]} (ana/parse-ns src)]
        (ensure
          (or (not (.exists dest))
              (> (.lastModified src) (.lastModified dest))
              (let [version' (util/compiled-by-version dest)
                    version (util/clojurescript-version)]
                (and version (not= version version')))
              (and opts
                   (not (and (io/resource "cljs/core.aot.js") (= 'cljs.core ns)))
                   (not= (build-affecting-options opts)
                         (build-affecting-options (util/build-options dest))))
              (and opts (:source-map opts)
                (if (= (:optimizations opts) :none)
                  (not (.exists (io/file (str (.getPath dest) ".map"))))
                  (not (get-in @env/*compiler* [::compiled-cljs (.getAbsolutePath dest)]))))
              (let [{:keys [recompile visited]}
                    (and *dependents* @*dependents*)]
                (and (contains? recompile ns)
                     (not (contains? visited ns))))))))))

#?(:clj
   (defn compile-file
     "Compiles src to a file of the same name, but with a .js extension,
      in the src file's directory.

      With dest argument, write file to provided location. If the dest
      argument is a file outside the source tree, missing parent
      directories will be created. The src file will only be compiled if
      the dest file has an older modification time.

      Both src and dest may be either a String or a File.

      Returns a map containing {:ns .. :provides .. :requires .. :file ..}.
      If the file was not compiled returns only {:file ...}"
     ([src]
      (let [dest (rename-to-js src)]
        (compile-file src dest nil)))
     ([src dest]
      (compile-file src dest nil))
     ([src dest opts]
      {:post [map?]}
      (binding [ana/*file-defs* (atom #{})]
        (let [nses      (get @env/*compiler* ::ana/namespaces)
              src-file  (io/file src)
              dest-file (io/file dest)
              opts      (merge {:optimizations :none} opts)]
          (if (.exists src-file)
            (try
              (let [{ns :ns :as ns-info} (ana/parse-ns src-file dest-file opts)
                    opts (if (and (not= (util/ext src) "clj") ;; skip cljs.core macro-ns
                                  (= ns 'cljs.core)
                                  (not (false? (:static-fns opts))))
                           (assoc opts :static-fns true)
                           opts)]
                (if (or (requires-compilation? src-file dest-file opts)
                      (:force opts))
                  (do
                    (util/mkdirs dest-file)
                    (when (and (get-in nses [ns :defs])
                               (not= 'cljs.core ns)
                               (not= :interactive (:mode opts)))
                      (swap! env/*compiler* update-in [::ana/namespaces] dissoc ns))
                    (let [ret (compile-file* src-file dest-file opts)]
                      (when *dependents*
                        (swap! *dependents*
                          (fn [{:keys [recompile visited]}]
                            {:recompile (into recompile
                                          (ana/ns-dependents ns
                                            (merge *inputs* nses)))
                             :visited (conj visited ns)})))
                      ret))
                  (do
                    ;; populate compilation environment with analysis information
                    ;; when constants are optimized
                    (when (and (true? (:optimize-constants opts))
                               (nil? (get-in nses [ns :defs])))
                      (with-core-cljs opts (fn [] (ana/analyze-file src-file opts))))
                    ns-info)))
              (catch Exception e
                (throw (ex-info (str "failed compiling file:" src) {:file src} e))))
            (throw (java.io.FileNotFoundException. (str "The file " src " does not exist.")))))))))

#?(:clj
   (defn cljs-files-in
     "Return a sequence of all .cljs and .cljc files in the given directory."
     [dir]
     (filter
       #(let [name (.getName ^File %)]
         (and (or (.endsWith name ".cljs")
                (.endsWith name ".cljc"))
           (not= \. (first name))
           (not (contains? cljs-reserved-file-names name))))
       (file-seq dir))))

#?(:clj
   (defn compile-root
     "Looks recursively in src-dir for .cljs files and compiles them to
      .js files. If target-dir is provided, output will go into this
      directory mirroring the source directory structure. Returns a list
      of maps containing information about each file which was compiled
      in dependency order."
     ([src-dir]
      (compile-root src-dir "out"))
     ([src-dir target-dir]
      (compile-root src-dir target-dir nil))
     ([src-dir target-dir opts]
      (swap! env/*compiler* assoc :root src-dir)
      (let [src-dir-file (io/file src-dir)
            inputs (deps/dependency-order
                     (map #(ana/parse-ns %)
                       (cljs-files-in src-dir-file)))]
        (binding [*inputs* (zipmap (map :ns inputs) inputs)]
          (loop [inputs (seq inputs) compiled []]
            (if inputs
              (let [{:keys [source-file] :as ns-info} (first inputs)
                    output-file (util/to-target-file target-dir ns-info)
                    ijs (compile-file source-file output-file opts)]
                (recur
                  (next inputs)
                  (conj compiled
                    (assoc ijs :file-name (.getPath output-file)))))
              compiled)))))))

;; TODO: needs fixing, table will include other things than keywords - David

(defn emit-constants-table [table]
  (doseq [[keyword value] table]
    (let [ns   (namespace keyword)
          name (name keyword)]
      (emits "cljs.core." value " = ")
      (emits-keyword keyword)
      (emits ";\n"))))

#?(:clj
   (defn emit-constants-table-to-file [table dest]
     (io/make-parents dest)
     (with-open [out ^java.io.Writer (io/make-writer dest {})]
       (binding [*out* out]
         (emit-constants-table table)))))
