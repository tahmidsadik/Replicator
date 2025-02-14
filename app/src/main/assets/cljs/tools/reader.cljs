;;   Copyright (c) Nicola Mometto, Rich Hickey & contributors.
;;   The use and distribution terms for this software are covered by the
;;   Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
;;   which can be found in the file epl-v10.html at the root of this distribution.
;;   By using this software in any fashion, you are agreeing to be bound by
;;   the terms of this license.
;;   You must not remove this notice, or any other, from this software.

(ns ^{:doc "A clojure reader in clojure"
      :author "Bronsa"}
  cljs.tools.reader
  (:refer-clojure :exclude [read read-line read-string char
                            default-data-readers *default-data-reader-fn*
                            *data-readers* *suppress-read*])
  (:require-macros [cljs.tools.reader.reader-types :refer [log-source]])
  (:require [cljs.tools.reader.reader-types :refer
             [read-char reader-error unread peek-char indexing-reader?
              get-line-number get-column-number get-file-name
              string-push-back-reader]]
            [cljs.tools.reader.impl.utils :refer
             [char ex-info? whitespace? numeric? desugar-meta next-id munge
              ReaderConditional reader-conditional reader-conditional?]]
            [cljs.tools.reader.impl.commons :refer
             [number-literal? read-past match-number parse-symbol read-comment throwing-reader]]
            [clojure.string :as string]
            [goog.array :as garray]
            [goog.string :as gstring])
  (:import goog.string.StringBuffer))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; helpers
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(declare ^:private read*
         macros dispatch-macros
         ^:dynamic *data-readers*
         ^:dynamic *default-data-reader-fn*
         ^:dynamic *suppress-read*
         default-data-readers)

(defn- ^boolean macro-terminating? [ch]
  (case ch
    (\" \; \@ \^ \` \~ \( \) \[ \] \{ \} \\) true
    false))

(def sb (StringBuffer.))

(defn- read-token
  "Read in a single logical token from the reader"
  [^not-native rdr initch]
  (if (nil? initch)
    (reader-error rdr "EOF while reading")
    (do
      (.clear sb)
      (loop [ch initch]
        (if (or (whitespace? ch)
                (macro-terminating? ch)
                (nil? ch))
          (do
            (when-not (nil? ch)
              (unread rdr ch))
            (.toString sb))
          (do
            (.append sb ch)
            (recur (read-char rdr))))))))

(declare read-tagged)

(defn- read-dispatch
  [^not-native rdr _ opts pending-forms]
  (if-let [ch (read-char rdr)]
    (if-let [dm (dispatch-macros ch)]
      (dm rdr ch opts pending-forms)
      (read-tagged (doto rdr (unread ch)) ch opts pending-forms)) ;; ctor reader is implemented as a tagged literal
    (reader-error rdr "EOF while reading character")))

(defn- read-unmatched-delimiter
  [rdr ch opts pending-forms]
  (reader-error rdr "Unmatched delimiter " ch))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; readers
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn read-regex
  [^not-native rdr ch opts pending-forms]
  (let [sb (StringBuffer.)]
    (loop [ch (read-char rdr)]
      (if (identical? \" ch)
        (re-pattern (str sb))
        (if (nil? ch)
          (reader-error rdr "EOF while reading regex")
          (do
            (.append sb ch )
            (when (identical? \\ ch)
              (let [ch (read-char rdr)]
                (if (nil? ch)
                  (reader-error rdr "EOF while reading regex"))
                (.append sb ch)))
            (recur (read-char rdr))))))))

(defn- char-code [ch base]
  (let [code (js/parseInt ch base)]
    (if (js/isNaN code)
      -1
      code)))

(defn- read-unicode-char
  ([token offset length base]
     (let [l (+ offset length)]
       (when-not (== (count token) l)
         (throw (ex-info. (str "Invalid unicode character: \\" token)
                          {:type :illegal-argument})))
       (loop [i offset uc 0]
         (if (== i l)
           (js/String.fromCharCode uc)
           (let [d (char-code (nth token i) base)]
             (if (== d -1)
               (throw (ex-info. (str "Invalid digit: " (nth token i))
                                {:type :illegal-argument}))
               (recur (inc i) (+ d (* uc base)))))))))

  ([^not-native rdr initch base length exact?]
     (loop [i 1 uc (char-code initch base)]
       (if (== uc -1)
         (throw (ex-info. (str "Invalid digit: " initch)
                          {:type :illegal-argument}))
         (if-not (== i length)
           (let [ch (peek-char rdr)]
             (if (or (whitespace? ch)
                     (macros ch)
                     (nil? ch))
               (if exact?
                 (throw (ex-info. (str "Invalid character length: " i ", should be: " length)
                                  {:type :illegal-argument}))
                 (js/String.fromCharCode uc))
               (let [d (char-code ch base)]
                 (read-char rdr)
                 (if (== d -1)
                   (throw (ex-info. (str "Invalid digit: " ch)
                                    {:type :illegal-argument}))
                   (recur (inc i) (+ d (* uc base)))))))
           (js/String.fromCharCode uc))))))

(def ^:private ^:const upper-limit (.charCodeAt \uD7ff 0))
(def ^:private ^:const lower-limit (.charCodeAt \uE000 0))

(defn- valid-octal? [token base]
  (<= (js/parseInt token base) 0377))

(defn- read-char*
  "Read in a character literal"
  [^not-native rdr backslash opts pending-forms]
  (let [ch (read-char rdr)]
    (if-not (nil? ch)
      (let [token (if (or (macro-terminating? ch)
                          (whitespace? ch))
                    (str ch)
                    (read-token rdr ch))
            token-len (. token -length)]
        (cond

         (== 1 token-len)  (.charAt token 0) ;;; no char type - so can't ensure/cache char

         (= token "newline") \newline
         (= token "space") \space
         (= token "tab") \tab
         (= token "backspace") \backspace
         (= token "formfeed") \formfeed
         (= token "return") \return

         (gstring/startsWith token "u")
         (let [c (read-unicode-char token 1 4 16)
               ic (.charCodeAt c 0)]
           (if (and (> ic upper-limit)
                    (< ic lower-limit))
             (reader-error rdr "Invalid character constant: \\u" c)
             c))

         (gstring/startsWith token "o")
         (let [len (dec token-len)]
           (if (> len 3)
             (reader-error rdr "Invalid octal escape sequence length: " len)
             (let [offset 1
                   base 8
                   uc (read-unicode-char token offset len base)]
               (if-not (valid-octal? (subs token offset) base)
                 (reader-error rdr "Octal escape sequence must be in range [0, 377]")
                 uc))))

         :else (reader-error rdr "Unsupported character: \\" token)))
      (reader-error rdr "EOF while reading character"))))

(defn- starting-line-col-info [^not-native rdr]
  (when (indexing-reader? rdr)
    [(get-line-number rdr) (int (dec (get-column-number rdr)))]))

(defn- ending-line-col-info [^not-native rdr]
  (when (indexing-reader? rdr)
    [(get-line-number rdr) (get-column-number rdr)]))

(defonce ^:private READ_EOF (js/Object.))
(defonce ^:private READ_FINISHED (js/Object.))

(def ^:dynamic *read-delim* false)

(defn- read-delimited-internal [delim rdr opts pending-forms]
  (let [[start-line start-column] (starting-line-col-info rdr)
        delim (char delim)]
    (loop [a (transient [])]
      (let [form (read* rdr false READ_EOF delim opts pending-forms)]
        (if (identical? form READ_FINISHED)
          (persistent! a)
          (if (identical? form READ_EOF)
            (reader-error rdr "EOF while reading"
              (when start-line
                (str ", starting at line " start-line " and column " start-column)))
            (recur (conj! a form))))))))

(defn- read-delimited
  "Reads and returns a collection ended with delim"
  [delim rdr opts pending-forms]
  (binding [*read-delim* true]
    (read-delimited-internal delim rdr opts pending-forms)))

(defn- read-list
  "Read in a list, including its location if the reader is an indexing reader"
  [rdr _ opts pending-forms]
  (let [[start-line start-column] (starting-line-col-info rdr)
        the-list (read-delimited \) rdr opts pending-forms)
        [end-line end-column] (ending-line-col-info rdr)]
    (with-meta (if (empty? the-list)
                 '()
                 (apply list the-list))
      (when start-line
        (merge
         (when-let [file (get-file-name rdr)]
           {:file file})
         {:line start-line
          :column start-column
          :end-line end-line
          :end-column end-column})))))

(defn- read-vector
  "Read in a vector, including its location if the reader is an indexing reader"
  [rdr _ opts pending-forms]
  (let [[start-line start-column] (starting-line-col-info rdr)
        the-vector (read-delimited \] rdr opts pending-forms)
        [end-line end-column] (ending-line-col-info rdr)]
    (with-meta the-vector
      (when start-line
        (merge
         (when-let [file (get-file-name rdr)]
           {:file file})
         {:line start-line
          :column start-column
          :end-line end-line
          :end-column end-column})))))

(defn- read-map
  "Read in a map, including its location if the reader is an indexing reader"
  [rdr _ opts pending-forms]
  (let [[start-line start-column] (starting-line-col-info rdr)
        the-map (read-delimited \} rdr opts pending-forms)
        map-count (count the-map)
        [end-line end-column] (ending-line-col-info rdr)]
    (when (odd? map-count)
      (reader-error rdr "Map literal must contain an even number of forms"))
    (with-meta
      (if (zero? map-count)
        {}
        (apply hash-map (to-array the-map)))
      (when start-line
        (merge
         (when-let [file (get-file-name rdr)]
           {:file file})
         {:line start-line
          :column start-column
          :end-line end-line
          :end-column end-column})))))

(defn- read-number
  [^not-native rdr initch]
  (loop [sb (doto (StringBuffer.) (.append initch))
         ch (read-char rdr)]
    (if (or (whitespace? ch) (macros ch) (nil? ch))
      (let [s (str sb)]
        (unread rdr ch)
        (or (match-number s)
            (reader-error rdr "Invalid number format [" s "]")))
      (recur (doto sb (.append ch)) (read-char rdr)))))

(defn- escape-char [sb ^not-native rdr]
  (let [ch (read-char rdr)]
    (case ch
      \t "\t"
      \r "\r"
      \n "\n"
      \\ "\\"
      \" "\""
      \b "\b"
      \f "\f"
      \u (let [ch (read-char rdr)]
           (if (== -1 (js/parseInt (int ch) 16))
             (reader-error rdr "Invalid unicode escape: \\u" ch)
             (read-unicode-char rdr ch 16 4 true)))
      (if (numeric? ch)
        (let [ch (read-unicode-char rdr ch 8 3 false)]
          (if (> (int ch) 0337)
            (reader-error rdr "Octal escape sequence must be in range [0, 377]")
            ch))
        (reader-error rdr "Unsupported escape character: \\" ch)))))

(defn- read-string*
  [^not-native reader _ opts pending-forms]
  (loop [sb (StringBuffer.)
         ch (read-char reader)]
    (if (nil? ch)
      (reader-error reader "EOF while reading string")
      (case ch
        \\ (recur (doto sb (.append (escape-char sb reader)))
             (read-char reader))
        \" (str sb)
        (recur (doto sb (.append ch)) (read-char reader))))))

(defn- loc-info [rdr line column]
  (when-not (nil? line)
    (let [file (get-file-name rdr)
          filem (when-not (nil? file) {:file file})
          [end-line end-column] (ending-line-col-info rdr)
          lcm {:line line
               :column column
               :end-line end-line
               :end-column end-column}]
      (merge filem lcm))))

(defn- read-symbol
  [rdr initch]
  (let [[line column] (starting-line-col-info rdr)
        token (read-token rdr initch)]
    (when-not (nil? token)
      (case token

        ;; special symbols
        "nil" nil
        "true" true
        "false" false
        "/" '/
        "NaN" js/Number.NaN
        "-Infinity" js/Number.NEGATIVE_INFINITY
        ("Infinity" "+Infinity") js/Number.POSITIVE_INFINITY

        (let [^not-native p (parse-symbol token)]
          (if-not (nil? p)
            (let [^not-native sym (symbol (-nth p 0) (-nth p 1))]
              (-with-meta sym (loc-info rdr line column)))
            (reader-error rdr "Invalid token: " token)))))))

(def ^:dynamic *alias-map*
  "Map from ns alias to ns, if non-nil, it will be used to resolve read-time
   ns aliases.

   Defaults to nil"
  nil)

(defn- resolve-ns [sym]
  (get *alias-map* sym sym))

(defn- read-keyword
  [^not-native reader initch opts pending-forms]
  (let [ch (read-char reader)]
    (if-not (whitespace? ch)
      (let [token (read-token reader ch)
            ^not-native s (parse-symbol token)]
        (if-not (nil? s)
          (let [ns (-nth s 0)
                name (-nth s 1)]
            (if (identical? \: (.charAt token 0))
              (if-not (nil? ns)
                (let [ns (resolve-ns (symbol (subs ns 1)))]
                  (if-not (nil? ns)
                    (keyword (str ns) name)
                    (reader-error reader "Invalid token: :" token)))
                (keyword (str *ns*) (subs name 1)))
              (keyword ns name)))
          (reader-error reader "Invalid token: :" token)))
      (reader-error reader "Invalid token: :"))))

(defn- wrapping-reader
  "Returns a function which wraps a reader in a call to sym"
  [sym]
  (fn [rdr _ opts pending-forms]
    (list sym (read* rdr true nil opts pending-forms))))

(defn- read-meta
  "Read metadata and return the following object with the metadata applied"
  [rdr _ opts pending-forms]
  (log-source rdr
    (let [[line column] (starting-line-col-info rdr)
          m (desugar-meta (read* rdr true nil opts pending-forms))]
      (when-not (map? m)
        (reader-error rdr "Metadata must be Symbol, Keyword, String or Map"))
      (let [o (read* rdr true nil opts pending-forms)]
        (if (implements? IMeta o)
          (let [m (if (and line (seq? o))
                    (assoc m :line line :column column)
                    m)]
            (if (implements? IWithMeta o)
              (with-meta o (merge (meta o) m))
              (reset-meta! o m)))
          (reader-error rdr "Metadata can only be applied to IMetas"))))))

(defn- read-set
  [rdr _ opts pending-forms]
  (let [[start-line start-column] (starting-line-col-info rdr)
        ;; subtract 1 from start-column so it includes the # in the leading #{
        start-column (if start-column (int (dec start-column)))
        the-set (set (read-delimited \} rdr opts pending-forms))
        [end-line end-column] (ending-line-col-info rdr)]
    (with-meta the-set
      (when start-line
        (merge
         (when-let [file (get-file-name rdr)]
           {:file file})
         {:line start-line
          :column start-column
          :end-line end-line
          :end-column end-column})))))

(defn- read-discard
  "Read and discard the first object from rdr"
  [rdr _ opts pending-forms]
  (doto rdr
    (read* true nil opts pending-forms)))

(def ^:private RESERVED_FEATURES #{:else :none})

(defn- has-feature?
  [rdr feature opts]
  (if (keyword? feature)
    (or (= :default feature) (contains? (get opts :features) feature))
    (reader-error rdr (str "Feature should be a keyword: " feature))))

(defn- check-eof-error
  [form rdr first-line]
  (when (identical? form READ_EOF)
    (if (< first-line 0)
      (reader-error rdr "EOF while reading")
      (reader-error rdr "EOF while reading, starting at line " first-line))))

(defn- check-reserved-features
  [rdr form]
  (when (get RESERVED_FEATURES form)
    (reader-error rdr (str "Feature name " form " is reserved"))))

(defn- check-invalid-read-cond
  [form rdr first-line]
  (when (identical? form READ_FINISHED)
    (if (< first-line 0)
      (reader-error rdr "read-cond requires an even number of forms")
      (reader-error rdr (str "read-cond starting on line " first-line " requires an even number of forms")))))

(defn- read-suppress
  "Read next form and suppress. Return nil or READ_FINISHED."
  [first-line rdr opts pending-forms]
  (binding [*suppress-read* true]
    (let [form (read* rdr false READ_EOF \) opts pending-forms)]
      (check-eof-error form rdr first-line)
      (when (identical? form READ_FINISHED)
        READ_FINISHED))))

(defn- match-feature
  "Read next feature. If matched, read next form and return.
   Otherwise, read and skip next form, returning READ_FINISHED or nil."
  [first-line rdr opts pending-forms]
  (let [feature (read* rdr false READ_EOF \) opts pending-forms)]
    (check-eof-error feature rdr first-line)
    (if (= feature READ_FINISHED)
      READ_FINISHED
      (do
        (check-reserved-features rdr feature)
        (if (has-feature? rdr feature opts)
          ;; feature matched, read selected form
          (doto (read* rdr false READ_EOF \) opts pending-forms)
            (check-eof-error rdr first-line)
            (check-invalid-read-cond rdr first-line))
          ;; feature not matched, ignore next form
          (read-suppress first-line rdr opts pending-forms))))))

(defn- read-cond-delimited
  [rdr splicing opts pending-forms]
  (let [first-line (if (indexing-reader? rdr) (get-line-number rdr) -1)
        result (loop [matched nil
                      finished nil]
                 (cond
                  ;; still looking for match, read feature+form
                  (nil? matched)
                  (let [match (match-feature first-line rdr opts pending-forms)]
                    (if (not (nil? match))
                      (when-not (identical? match READ_FINISHED)
                        (recur match nil))
                      (recur nil nil)))

                  ;; found match, just read and ignore the rest
                  (not (identical? finished READ_FINISHED))
                  (recur matched (read-suppress first-line rdr opts pending-forms))

                  :else
                  matched))]
    (if (nil? result)
      rdr
      (if splicing
        (do
          (if (implements? ISequential result)
            (do
              (garray/insertArrayAt pending-forms (to-array result) 0)
              rdr)
            (reader-error rdr "Spliced form list in read-cond-splicing must implement java.util.List.")))
        result))))

(defn- read-cond
  [^not-native rdr _ opts pending-forms]
  (when (not (and opts (#{:allow :preserve} (:read-cond opts))))
    (throw (ex-info "Conditional read not allowed"
                    {:type :runtime-exception})))
  (if-let [ch (read-char rdr)]
    (let [splicing (= ch \@)
          ch (if splicing (read-char rdr) ch)]
      (when splicing
        (when-not *read-delim*
          (reader-error rdr "cond-splice not in list")))
      (if-let [ch (if (whitespace? ch) (read-past whitespace? rdr) ch)]
        (if (not= ch \()
          (throw (ex-info "read-cond body must be a list"
                          {:type :runtime-exception}))
          (binding [*suppress-read* (or *suppress-read* (= :preserve (:read-cond opts)))]
            (if *suppress-read*
              (reader-conditional (read-list rdr ch opts pending-forms) splicing)
              (read-cond-delimited rdr splicing opts pending-forms))))
        (reader-error rdr "EOF while reading character")))
    (reader-error rdr "EOF while reading character")))

(def ^:private ^:dynamic arg-env nil)

(defn- garg
  "Get a symbol for an anonymous ?argument?"
  [n]
  (symbol (str (if (== -1 n) "rest" (str "p" n))
               "__" (next-id) "#")))

(defn- read-fn
  [rdr _ opts pending-forms]
  (if arg-env
    (throw (ex-info "Nested #()s are not allowed" {:type :illegal-state})))
  (binding [arg-env (sorted-map)]
    (let [form (read* (doto rdr (unread \()) true nil opts pending-forms) ;; this sets bindings
          rargs (rseq arg-env)
          args (if rargs
                 (let [higharg (key (first rargs))]
                   (let [args (loop [i 1 args (transient [])]
                                (if (> i higharg)
                                  (persistent! args)
                                  (recur (inc i) (conj! args (or (get arg-env i)
                                                                 (garg i))))))
                         args (if (arg-env -1)
                                (conj args '& (arg-env -1))
                                args)]
                     args))
                 [])]
      (list 'fn* args form))))

(defn- register-arg
  "Registers an argument to the arg-env"
  [n]
  (if arg-env
    (if-let [ret (arg-env n)]
      ret
      (let [g (garg n)]
        (set! arg-env (assoc arg-env n g))
        g))
    (throw (ex-info "Arg literal not in #()"
                    {:type :illegal-state})))) ;; should never hit this

(declare read-symbol)

(defn- read-arg
  [^not-native rdr pct opts pending-forms]
  (if (nil? arg-env)
    (read-symbol rdr pct)
    (let [ch (peek-char rdr)]
      (cond
       (or (whitespace? ch)
           (macro-terminating? ch)
           (nil? ch))
       (register-arg 1)

       (= ch \&)
       (do (read-char rdr)
           (register-arg -1))

       :else
       (let [n (read* rdr true nil opts pending-forms)]
         (if-not (integer? n)
           (throw (ex-info "Arg literal must be %, %& or %integer"
                           {:type :illegal-state}))
           (register-arg n)))))))

(def ^:private ^:dynamic gensym-env nil)

(defn- read-unquote
  [^not-native rdr comma opts pending-forms]
  (if-let [ch (peek-char rdr)]
    (if (= \@ ch)
      ((wrapping-reader 'clojure.core/unquote-splicing) (doto rdr read-char) \@ opts pending-forms)
      ((wrapping-reader 'clojure.core/unquote) rdr \~ opts pending-forms))))

(declare syntax-quote*)

(defn- unquote-splicing? [form]
  (and (seq? form)
       (= (first form) 'clojure.core/unquote-splicing)))

(defn- unquote? [form]
  (and (seq? form)
       (= (first form) 'clojure.core/unquote)))

(defn- expand-list
  "Expand a list by resolving its syntax quotes and unquotes"
  [s]
  (loop [s (seq s) r (transient [])]
    (if s
      (let [item (first s)
            ret (conj! r
                       (cond
                        (unquote? item)          (list 'clojure.core/list (second item))
                        (unquote-splicing? item) (second item)
                        :else                    (list 'clojure.core/list (syntax-quote* item))))]
        (recur (next s) ret))
      (seq (persistent! r)))))

(defn- flatten-map
  "Flatten a map into a seq of alternate keys and values"
  [form]
  (loop [s (seq form) key-vals (transient [])]
    (if s
      (let [e (first s)]
        (recur (next s) (-> key-vals
                          (conj! (key e))
                          (conj! (val e)))))
      (seq (persistent! key-vals)))))

(defn- register-gensym [sym]
  (if-not gensym-env
    (throw (ex-info "Gensym literal not in syntax-quote"
                    {:type :illegal-state})))
  (or (get gensym-env sym)
      (let [gs (symbol (str (subs (name sym)
                                  0 (dec (count (name sym))))
                            "__" (next-id) "__auto__"))]
        (set! gensym-env (assoc gensym-env sym gs))
        gs)))

(defn- add-meta [form ret]
  (if (and (implements? IWithMeta form)
           (seq (dissoc (meta form) :line :column :end-line :end-column :file :source)))
    (list 'cljs.core/with-meta ret (syntax-quote* (meta form)))
    ret))

(defn- syntax-quote-coll [type coll]
  (let [res (list 'cljs.core/sequence
                  (cons 'cljs.core/concat
                        (expand-list coll)))]
    (if type
      (list 'cljs.core/apply type res)
      res)))

(defn map-func
  "Decide which map type to use, array-map if less than 16 elements"
  [coll]
  (if (>= (count coll) 16)
    'cljs.core/hash-map
    'cljs.core/array-map))

(defn bool? [x]
  (or (instance? js/Boolean x)
      (true? x)
      (false? x)))

(defn ^:dynamic resolve-symbol
  "Resolve a symbol s into its fully qualified namespace version"
  [s]
  (if-let [ns-str (namespace s)]
    (let [ns (resolve-ns (symbol ns-str))]
      (symbol (name ns) (name s)))
    s))

(defn- syntax-quote* [form]
  (->>
   (cond
    (special-symbol? form) (list 'quote form)

    (symbol? form)
    (list 'quote
          (if (namespace form)
            (resolve-symbol form)
            (if (gstring/endsWith (name form) "#")
              (register-gensym form)
              form)))

    (unquote? form) (second form)
    (unquote-splicing? form) (throw (ex-info "unquote-splice not in list"
                                             {:type :illegal-state}))

    (coll? form)
    (cond

     (implements? IRecord form) form
     (map? form) (syntax-quote-coll (map-func form) (flatten-map form))
     (vector? form) (list 'cljs.core/vec (syntax-quote-coll nil form))
     (set? form) (syntax-quote-coll 'cljs.core/hash-set form)
     (or (seq? form) (list? form))
     (let [seq (seq form)]
       (if seq
         (syntax-quote-coll nil seq)
         '(cljs.core/list)))

     :else (throw (ex-info "Unknown Collection type"
                           {:type :unsupported-operation})))

    (or (keyword? form)
        (number? form)
        (string? form)
        (nil? form)
        (bool? form)
        (instance? js/RegExp form))
    form

    :else (list 'quote form))
   (add-meta form)))

(defn- read-syntax-quote
  [rdr backquote opts pending-forms]
  (binding [gensym-env {}]
    (-> (read* rdr true nil opts pending-forms)
      syntax-quote*)))

(defn- macros [ch]
  (case ch
    \" read-string*
    \: read-keyword
    \; read-comment
    \' (wrapping-reader 'quote)
    \@ (wrapping-reader 'clojure.core/deref)
    \^ read-meta
    \` read-syntax-quote
    \~ read-unquote
    \( read-list
    \) read-unmatched-delimiter
    \[ read-vector
    \] read-unmatched-delimiter
    \{ read-map
    \} read-unmatched-delimiter
    \\ read-char*
    \% read-arg
    \# read-dispatch
    nil))

(defn- dispatch-macros [ch]
  (case ch
    \^ read-meta                ;; deprecated
    \' (wrapping-reader 'var)
    \( read-fn
    \{ read-set
    \< (throwing-reader "Unreadable form")
    \" read-regex
    \! read-comment
    \_ read-discard
    \? read-cond
    nil))


(defn emit-ctor [type ns record val]
  (let [method (str ns "." (if (= :extended type) "map") "__GT_" (munge record))]
    (js* "(cljs.core.apply.call(null, eval(~{}), ~{}))" method val)))

(defn- read-ctor [^not-native rdr class-name opts pending-forms]
  (let [ns (namespace class-name)
        ns-parts (string/split class-name #"[\./]")
        record (if ns (name class-name) (last ns-parts))
        ns (or ns (string/join "." (butlast ns-parts)))
        ch (read-past whitespace? rdr)] ;; differs from clojure
    (if-let [[end-ch form] (case ch
                             \[ [\] :short]
                             \{ [\} :extended]
                             nil)]
      (let [entries (read-delimited end-ch rdr opts pending-forms)]
        (case form
          :short
          (emit-ctor :short ns record entries)
          :extended
          (let [vals (apply hash-map entries)]
            (loop [s (keys vals)]
              (if s
                (if-not (keyword? (first s))
                  (reader-error rdr "Unreadable ctor form: key must be of type cljs.core.Keyword")
                  (recur (next s)))))
            (emit-ctor :extended ns record [vals]))))
      (reader-error rdr "Invalid reader constructor form"))))

(defn- read-tagged [^not-native rdr initch opts pending-forms]
  (let [tag (read* rdr true nil opts pending-forms)]
    (if-not (symbol? tag)
      (reader-error rdr "Reader tag must be a symbol"))
    (if *suppress-read*
      (tagged-literal tag (read* rdr true nil opts pending-forms))
      (if-let [f (or (*data-readers* tag)
                     (default-data-readers tag))]
        (f (read* rdr true nil opts pending-forms))
        (if (> (.indexOf (name tag) ".") 1)
          (read-ctor rdr tag opts pending-forms)
          (if-let [f *default-data-reader-fn*]
            (f tag (read* rdr true nil opts pending-forms))
            (reader-error rdr "No reader function for tag " (name tag))))))))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Public API
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def ^:dynamic *data-readers*
  "Map from reader tag symbols to data reader Vars.
  Reader tags without namespace qualifiers are reserved for Clojure.
  This light version of tools.reader has no implementation for default
  reader tags such as #inst and #uuid."
  {})

(def ^:dynamic *default-data-reader-fn*
  "When no data reader is found for a tag and *default-data-reader-fn*
  is non-nil, it will be called with two arguments, the tag and the value.
  If *default-data-reader-fn* is nil (the default value), an exception
  will be thrown for the unknown tag."
  nil)

(def ^:dynamic *suppress-read* false)

(def default-data-readers
  "Default map of data reader functions provided by Clojure.
  May be overridden by binding *data-readers*"
  {})

(defn- read*-internal
  [^not-native reader ^boolean eof-error? sentinel return-on opts pending-forms]
  (loop []
    (log-source reader
      (if-not ^boolean (garray/isEmpty pending-forms)
        (let [form (aget pending-forms 0)]
          (garray/removeAt pending-forms 0)
          form)
        (let [ch (read-char reader)]
          (cond
            (whitespace? ch) (recur)
            (nil? ch) (if eof-error? (reader-error reader "EOF") sentinel)
            (identical? ch return-on) READ_FINISHED
            (number-literal? reader ch) (read-number reader ch)
            :else (let [f (macros ch)]
                    (if-not (nil? f)
                      (let [res (f reader ch opts pending-forms)]
                        (if (identical? res reader)
                          (recur)
                          res))
                      (read-symbol reader ch)))))))))

(defn- read*
  ([reader eof-error? sentinel opts pending-forms]
     (read* reader eof-error? sentinel nil opts pending-forms))
  ([^not-native reader eof-error? sentinel return-on opts pending-forms]
     (try
       (read*-internal reader eof-error? sentinel return-on opts pending-forms)
       (catch js/Error e
         (if (ex-info? e)
           (let [d (ex-data e)]
             (if (= :reader-exception (:type d))
               (throw e)
               (throw (ex-info (.-message e)
                               (merge {:type :reader-exception}
                                      d
                                      (if (indexing-reader? reader)
                                        {:line   (get-line-number reader)
                                         :column (get-column-number reader)
                                         :file   (get-file-name reader)}))
                               e))))
           (throw (ex-info (.-message e)
                           (merge {:type :reader-exception}
                                  (if (indexing-reader? reader)
                                    {:line   (get-line-number reader)
                                     :column (get-column-number reader)
                                     :file   (get-file-name reader)}))
                           e)))))))

(defn read
  "Reads the first object from an IPushbackReader or a java.io.PushbackReader.
   Returns the object read. If EOF, throws if eof-error? is true.
   Otherwise returns sentinel. If no stream is providen, *in* will be used.

   Opts is a persistent map with valid keys:
    :read-cond - :allow to process reader conditionals, or
                 :preserve to keep all branches
    :features - persistent set of feature keywords for reader conditionals
    :eof - on eof, return value unless :eofthrow, then throw.
           if not specified, will throw

   To read data structures only, use clojure.tools.reader.edn/read

   Note that the function signature of clojure.tools.reader/read and
   clojure.tools.reader.edn/read is not the same for eof-handling"
  {:arglists '([] [reader] [opts reader] [reader eof-error? eof-value])}
  ([reader] (read reader true nil))
  ([{eof :eof :as opts :or {eof :eofthrow}} reader] (read* reader (= eof :eofthrow) eof nil opts (to-array [])))
  ([reader eof-error? sentinel] (read* reader eof-error? sentinel nil {} (to-array []))))

(defn read-string
  "Reads one object from the string s.
   Returns nil when s is nil or empty.

   To read data structures only, use clojure.tools.reader.edn/read-string

   Note that the function signature of clojure.tools.reader/read-string and
   clojure.tools.reader.edn/read-string is not the same for eof-handling"
  ([s]
     (read-string {} s))
  ([opts s]
     (when (and s (not (identical? s "")))
       (read opts (string-push-back-reader s)))))
