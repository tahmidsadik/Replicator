// Compiled by ClojureScript 0.0-3464 {:static-fns true}
goog.provide('cljs.core$macros');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('cljs.compiler');
goog.require('cljs.env');
goog.require('cljs.core');
goog.require('cljs.analyzer');
/**
 * Threads the expr through the forms. Inserts x as the
 * second item in the first form, making a list of it if it is not a
 * list already. If there are more forms, inserts the first form as the
 * second item in second form, etc.
 */
cljs.core$macros.__GT_ = (function cljs$core$macros$__GT_(){
var args__5207__auto__ = [];
var len__5200__auto___12340 = arguments.length;
var i__5201__auto___12341 = (0);
while(true){
if((i__5201__auto___12341 < len__5200__auto___12340)){
args__5207__auto__.push((arguments[i__5201__auto___12341]));

var G__12342 = (i__5201__auto___12341 + (1));
i__5201__auto___12341 = G__12342;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((3) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((3)),(0))):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5208__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.first(form)),cljs.core._conj(cljs.core.List.EMPTY,x__$1),cljs.core.array_seq([cljs.core.next(form)], 0)))),cljs.core.meta(form)):cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,x__$1),form));
var G__12343 = threaded;
var G__12344 = cljs.core.next(forms__$1);
x__$1 = G__12343;
forms__$1 = G__12344;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq12336){
var G__12337 = cljs.core.first(seq12336);
var seq12336__$1 = cljs.core.next(seq12336);
var G__12338 = cljs.core.first(seq12336__$1);
var seq12336__$2 = cljs.core.next(seq12336__$1);
var G__12339 = cljs.core.first(seq12336__$2);
var seq12336__$3 = cljs.core.next(seq12336__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__12337,G__12338,G__12339,seq12336__$3);
});

cljs.core$macros.__GT_.cljs$lang$macro = true;
/**
 * Threads the expr through the forms. Inserts x as the
 * last item in the first form, making a list of it if it is not a
 * list already. If there are more forms, inserts the first form as the
 * last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(){
var args__5207__auto__ = [];
var len__5200__auto___12349 = arguments.length;
var i__5201__auto___12350 = (0);
while(true){
if((i__5201__auto___12350 < len__5200__auto___12349)){
args__5207__auto__.push((arguments[i__5201__auto___12350]));

var G__12351 = (i__5201__auto___12350 + (1));
i__5201__auto___12350 = G__12351;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((3) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((3)),(0))):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5208__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first(forms__$1);
var threaded = ((cljs.core.seq_QMARK_(form))?cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.first(form)),cljs.core.next(form),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,x__$1)], 0)))),cljs.core.meta(form)):cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,x__$1),form));
var G__12352 = threaded;
var G__12353 = cljs.core.next(forms__$1);
x__$1 = G__12352;
forms__$1 = G__12353;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq12345){
var G__12346 = cljs.core.first(seq12345);
var seq12345__$1 = cljs.core.next(seq12345);
var G__12347 = cljs.core.first(seq12345__$1);
var seq12345__$2 = cljs.core.next(seq12345__$1);
var G__12348 = cljs.core.first(seq12345__$2);
var seq12345__$3 = cljs.core.next(seq12345__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__12346,G__12347,G__12348,seq12345__$3);
});

cljs.core$macros.__GT__GT_.cljs$lang$macro = true;
/**
 * form => fieldName-symbol or (instanceMethodName-symbol args*)
 * 
 * Expands into a member access (.) of the first member on the first
 * argument, followed by the next member on the result, etc. For
 * instance:
 * 
 * (.. System (getProperties) (get "os.name"))
 * 
 * expands to:
 * 
 * (. (. System (getProperties)) (get "os.name"))
 * 
 * but is easier to write, read, and understand.
 */
cljs.core$macros._DOT__DOT_ = (function cljs$core$macros$_DOT__DOT_(){
var args12354 = [];
var len__5200__auto___12362 = arguments.length;
var i__5201__auto___12363 = (0);
while(true){
if((i__5201__auto___12363 < len__5200__auto___12362)){
args12354.push((arguments[i__5201__auto___12363]));

var G__12364 = (i__5201__auto___12363 + (1));
i__5201__auto___12363 = G__12364;
continue;
} else {
}
break;
}

var G__12361 = args12354.length;
switch (G__12361) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5219__auto__ = (new cljs.core.IndexedSeq(args12354.slice((4)),(0)));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5219__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,form)], 0))));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,form)], 0))))),cljs.core.array_seq([more], 0))));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq12355){
var G__12356 = cljs.core.first(seq12355);
var seq12355__$1 = cljs.core.next(seq12355);
var G__12357 = cljs.core.first(seq12355__$1);
var seq12355__$2 = cljs.core.next(seq12355__$1);
var G__12358 = cljs.core.first(seq12355__$2);
var seq12355__$3 = cljs.core.next(seq12355__$2);
var G__12359 = cljs.core.first(seq12355__$3);
var seq12355__$4 = cljs.core.next(seq12355__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__12356,G__12357,G__12358,G__12359,seq12355__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(){
var args__5207__auto__ = [];
var len__5200__auto___12369 = arguments.length;
var i__5201__auto___12370 = (0);
while(true){
if((i__5201__auto___12370 < len__5200__auto___12369)){
args__5207__auto__.push((arguments[i__5201__auto___12370]));

var G__12371 = (i__5201__auto___12370 + (1));
i__5201__auto___12370 = G__12371;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((2) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((2)),(0))):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5208__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq12366){
var G__12367 = cljs.core.first(seq12366);
var seq12366__$1 = cljs.core.next(seq12366);
var G__12368 = cljs.core.first(seq12366__$1);
var seq12366__$2 = cljs.core.next(seq12366__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__12367,G__12368,seq12366__$2);
});

cljs.core$macros.comment.cljs$lang$macro = true;
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 * time.  If a test returns logical true, cond evaluates and returns
 * the value of the corresponding expr and doesn't evaluate any of the
 * other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(){
var args__5207__auto__ = [];
var len__5200__auto___12375 = arguments.length;
var i__5201__auto___12376 = (0);
while(true){
if((i__5201__auto___12376 < len__5200__auto___12375)){
args__5207__auto__.push((arguments[i__5201__auto___12376]));

var G__12377 = (i__5201__auto___12376 + (1));
i__5201__auto___12376 = G__12377;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((2) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((2)),(0))):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5208__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.next(cljs.core.next(clauses)))),((cljs.core.next(clauses))?cljs.core.second(clauses):(function(){throw (new Error("cond requires an even number of forms"))})())),cljs.core.first(clauses)),new cljs.core.Symbol(null,"if","if",1181717262,null));
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq12372){
var G__12373 = cljs.core.first(seq12372);
var seq12372__$1 = cljs.core.next(seq12372);
var G__12374 = cljs.core.first(seq12372__$1);
var seq12372__$2 = cljs.core.next(seq12372__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__12373,G__12374,seq12372__$2);
});

cljs.core$macros.cond.cljs$lang$macro = true;
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(){
var args__5207__auto__ = [];
var len__5200__auto___12382 = arguments.length;
var i__5201__auto___12383 = (0);
while(true){
if((i__5201__auto___12383 < len__5200__auto___12382)){
args__5207__auto__.push((arguments[i__5201__auto___12383]));

var G__12384 = (i__5201__auto___12383 + (1));
i__5201__auto___12383 = G__12384;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((2) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((2)),(0))):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5208__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12378_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(p1__12378_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true)),new cljs.core.Symbol(null,"def","def",597100991,null));
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq12379){
var G__12380 = cljs.core.first(seq12379);
var seq12379__$1 = cljs.core.next(seq12379);
var G__12381 = cljs.core.first(seq12379__$1);
var seq12379__$2 = cljs.core.next(seq12379__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__12380,G__12381,seq12379__$2);
});

cljs.core$macros.declare.cljs$lang$macro = true;
/**
 * Evaluates x then calls all of the methods and functions with the
 * value of x supplied at the front of the given arguments.  The forms
 * are evaluated in order.  Returns x.
 * 
 * (doto (new java.util.HashMap) (.put "a" 1) (.put "b" 2))
 */
cljs.core$macros.doto = (function cljs$core$macros$doto(){
var args__5207__auto__ = [];
var len__5200__auto___12389 = arguments.length;
var i__5201__auto___12390 = (0);
while(true){
if((i__5201__auto___12390 < len__5200__auto___12389)){
args__5207__auto__.push((arguments[i__5201__auto___12390]));

var G__12391 = (i__5201__auto___12390 + (1));
i__5201__auto___12390 = G__12391;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((3) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((3)),(0))):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5208__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,gx),cljs.core._conj(cljs.core.List.EMPTY,x)))))),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_(f)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.first(f)),cljs.core._conj(cljs.core.List.EMPTY,gx),cljs.core.array_seq([cljs.core.next(f)], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,f),cljs.core._conj(cljs.core.List.EMPTY,gx))));
}
});})(gx))
,forms),cljs.core._conj(cljs.core.List.EMPTY,gx)], 0))));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq12385){
var G__12386 = cljs.core.first(seq12385);
var seq12385__$1 = cljs.core.next(seq12385);
var G__12387 = cljs.core.first(seq12385__$1);
var seq12385__$2 = cljs.core.next(seq12385__$1);
var G__12388 = cljs.core.first(seq12385__$2);
var seq12385__$3 = cljs.core.next(seq12385__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__12386,G__12387,G__12388,seq12385__$3);
});

cljs.core$macros.doto.cljs$lang$macro = true;
cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq(s)){
var G__12392 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.first(s),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s)));
var G__12393 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s));
ret = G__12392;
s = G__12393;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.emit_extend_protocol = (function cljs$core$macros$emit_extend_protocol(p,specs){
var impls = cljs.core$macros.parse_impls(specs);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (impls){
return (function (p__12396){
var vec__12397 = p__12396;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12397,(0),null);
var fs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12397,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),cljs.core._conj(cljs.core.List.EMPTY,t),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,p),fs], 0))));
});})(impls))
,impls))));
});
/**
 * Useful when you want to provide several implementations of the same
 * protocol all at once. Takes a single protocol and the implementation
 * of that protocol for one or more types. Expands into calls to
 * extend-type:
 * 
 * (extend-protocol Protocol
 * AType
 * (foo [x] ...)
 * (bar [x y] ...)
 * BType
 * (foo [x] ...)
 * (bar [x y] ...)
 * AClass
 * (foo [x] ...)
 * (bar [x y] ...)
 * nil
 * (foo [x] ...)
 * (bar [x y] ...))
 * 
 * expands into:
 * 
 * (do
 * (clojure.core/extend-type AType Protocol
 * (foo [x] ...)
 * (bar [x y] ...))
 * (clojure.core/extend-type BType Protocol
 * (foo [x] ...)
 * (bar [x y] ...))
 * (clojure.core/extend-type AClass Protocol
 * (foo [x] ...)
 * (bar [x y] ...))
 * (clojure.core/extend-type nil Protocol
 * (foo [x] ...)
 * (bar [x y] ...)))
 */
cljs.core$macros.extend_protocol = (function cljs$core$macros$extend_protocol(){
var args__5207__auto__ = [];
var len__5200__auto___12402 = arguments.length;
var i__5201__auto___12403 = (0);
while(true){
if((i__5201__auto___12403 < len__5200__auto___12402)){
args__5207__auto__.push((arguments[i__5201__auto___12403]));

var G__12404 = (i__5201__auto___12403 + (1));
i__5201__auto___12403 = G__12404;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((3) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((3)),(0))):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5208__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol(p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq12398){
var G__12399 = cljs.core.first(seq12398);
var seq12398__$1 = cljs.core.next(seq12398);
var G__12400 = cljs.core.first(seq12398__$1);
var seq12398__$2 = cljs.core.next(seq12398__$1);
var G__12401 = cljs.core.first(seq12398__$2);
var seq12398__$3 = cljs.core.next(seq12398__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__12399,G__12400,G__12401,seq12398__$3);
});

cljs.core$macros.extend_protocol.cljs$lang$macro = true;
cljs.core$macros.maybe_destructured = (function cljs$core$macros$maybe_destructured(params,body){
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,params)){
return cljs.core.cons(params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta(cljs.core.PersistentVector.EMPTY,cljs.core.meta(params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first(params__$1) instanceof cljs.core.Symbol)){
var G__12405 = cljs.core.next(params__$1);
var G__12406 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,cljs.core.first(params__$1));
var G__12407 = lets;
params__$1 = G__12405;
new_params = G__12406;
lets = G__12407;
continue;
} else {
var gparam = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("p__");
var G__12408 = cljs.core.next(params__$1);
var G__12409 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new_params,gparam);
var G__12410 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(lets,cljs.core.first(params__$1)),gparam);
params__$1 = G__12408;
new_params = G__12409;
lets = G__12410;
continue;
}
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new_params),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,lets),cljs.core.array_seq([body], 0))))))));
}
break;
}
}
});
/**
 * params => positional-params* , or positional-params* & next-param
 * positional-param => binding-form
 * next-param => binding-form
 * name => symbol
 * 
 * Defines a function
 */
cljs.core$macros.fn = (function cljs$core$macros$fn(){
var args__5207__auto__ = [];
var len__5200__auto___12415 = arguments.length;
var i__5201__auto___12416 = (0);
while(true){
if((i__5201__auto___12416 < len__5200__auto___12415)){
args__5207__auto__.push((arguments[i__5201__auto___12416]));

var G__12417 = (i__5201__auto___12416 + (1));
i__5201__auto___12416 = G__12417;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((2) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((2)),(0))):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5208__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first(sigs) instanceof cljs.core.Symbol))?cljs.core.first(sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next(sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_(cljs.core.first(sigs__$1)))?cljs.core._conj(cljs.core.List.EMPTY,sigs__$1):((cljs.core.seq_QMARK_(cljs.core.first(sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq(sigs__$1))?[cljs.core.str("Parameter declaration "),cljs.core.str(cljs.core.first(sigs__$1)),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Parameter declaration missing")].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_(sig))){
throw (new Error([cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join('')));
} else {
}

var vec__12414 = sig;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12414,(0),null);
var body = cljs.core.nthnext(vec__12414,(1));
var _ = ((!(cljs.core.vector_QMARK_(params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_(cljs.core.first(sigs__$2)))?[cljs.core.str("Parameter declaration "),cljs.core.str(params),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join(''))))})():null);
var conds = (((cljs.core.next(body)) && (cljs.core.map_QMARK_(cljs.core.first(body))))?cljs.core.first(body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next(body):body);
var conds__$1 = (function (){var or__4161__auto__ = conds;
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return cljs.core.meta(params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core._conj(cljs.core.List.EMPTY,((((1) < cljs.core.count(body__$1)))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body__$1))):cljs.core.first(body__$1)))))))),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__12414,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),cljs.core._conj(cljs.core.List.EMPTY,c))));
});})(vec__12414,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null))], 0)))))))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__12414,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),cljs.core._conj(cljs.core.List.EMPTY,c))));
});})(vec__12414,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured(params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(psig,sigs__$2);
return cljs.core.with_meta((cljs.core.truth_(name)?cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta(_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq12411){
var G__12412 = cljs.core.first(seq12411);
var seq12411__$1 = cljs.core.next(seq12411);
var G__12413 = cljs.core.first(seq12411__$1);
var seq12411__$2 = cljs.core.next(seq12411__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__12412,G__12413,seq12411__$2);
});

cljs.core$macros.fn.cljs$lang$macro = true;
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(){
var args__5207__auto__ = [];
var len__5200__auto___12422 = arguments.length;
var i__5201__auto___12423 = (0);
while(true){
if((i__5201__auto___12423 < len__5200__auto___12422)){
args__5207__auto__.push((arguments[i__5201__auto___12423]));

var G__12424 = (i__5201__auto___12423 + (1));
i__5201__auto___12423 = G__12424;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((3) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((3)),(0))):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5208__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),cljs.core.with_meta(name,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(name),new cljs.core.Keyword(null,"private","private",-558947994),true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq12418){
var G__12419 = cljs.core.first(seq12418);
var seq12418__$1 = cljs.core.next(seq12418);
var G__12420 = cljs.core.first(seq12418__$1);
var seq12418__$2 = cljs.core.next(seq12418__$1);
var G__12421 = cljs.core.first(seq12418__$2);
var seq12418__$3 = cljs.core.next(seq12418__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__12419,G__12420,G__12421,seq12418__$3);
});

cljs.core$macros.defn_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 * If test is true, evaluates then with binding-form bound to the value of
 * test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(){
var args12426 = [];
var len__5200__auto___12435 = arguments.length;
var i__5201__auto___12436 = (0);
while(true){
if((i__5201__auto___12436 < len__5200__auto___12435)){
args12426.push((arguments[i__5201__auto___12436]));

var G__12437 = (i__5201__auto___12436 + (1));
i__5201__auto___12436 = G__12437;
continue;
} else {
}
break;
}

var G__12434 = args12426.length;
switch (G__12434) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5219__auto__ = (new cljs.core.IndexedSeq(args12426.slice((5)),(0)));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5219__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),cljs.core._conj(cljs.core.List.EMPTY,bindings),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,then),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){







var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__12425__auto__","temp__12425__auto__",1175144637,null)),cljs.core._conj(cljs.core.List.EMPTY,tst)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__12425__auto__","temp__12425__auto__",1175144637,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,form),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__12425__auto__","temp__12425__auto__",1175144637,null))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,then)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,else$)], 0)))))], 0))));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq12427){
var G__12428 = cljs.core.first(seq12427);
var seq12427__$1 = cljs.core.next(seq12427);
var G__12429 = cljs.core.first(seq12427__$1);
var seq12427__$2 = cljs.core.next(seq12427__$1);
var G__12430 = cljs.core.first(seq12427__$2);
var seq12427__$3 = cljs.core.next(seq12427__$2);
var G__12431 = cljs.core.first(seq12427__$3);
var seq12427__$4 = cljs.core.next(seq12427__$3);
var G__12432 = cljs.core.first(seq12427__$4);
var seq12427__$5 = cljs.core.next(seq12427__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__12428,G__12429,G__12430,G__12431,G__12432,seq12427__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);

cljs.core$macros.if_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 * otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(){
var args12439 = [];
var len__5200__auto___12442 = arguments.length;
var i__5201__auto___12443 = (0);
while(true){
if((i__5201__auto___12443 < len__5200__auto___12442)){
args12439.push((arguments[i__5201__auto___12443]));

var G__12444 = (i__5201__auto___12443 + (1));
i__5201__auto___12443 = G__12444;
continue;
} else {
}
break;
}

var G__12441 = args12439.length;
switch (G__12441) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12439.length)].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),cljs.core._conj(cljs.core.List.EMPTY,test),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,then),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),cljs.core._conj(cljs.core.List.EMPTY,test))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,then),cljs.core._conj(cljs.core.List.EMPTY,else$)], 0))));
});

cljs.core$macros.if_not.cljs$lang$maxFixedArity = 5;

cljs.core$macros.if_not.cljs$lang$macro = true;
/**
 * fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
 * 
 * Takes a vector of function specs and a body, and generates a set of
 * bindings of functions to their names. All of the names are available
 * in all of the definitions of the functions, as well as the body.
 */
cljs.core$macros.letfn = (function cljs$core$macros$letfn(){
var args__5207__auto__ = [];
var len__5200__auto___12451 = arguments.length;
var i__5201__auto___12452 = (0);
while(true){
if((i__5201__auto___12452 < len__5200__auto___12451)){
args__5207__auto__.push((arguments[i__5201__auto___12452]));

var G__12453 = (i__5201__auto___12452 + (1));
i__5201__auto___12452 = G__12453;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((3) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((3)),(0))):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5208__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,fnspecs),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12446_SHARP_){
return cljs.core.cons(new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),p1__12446_SHARP_);
}),fnspecs)))),cljs.core.array_seq([body], 0))));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq12447){
var G__12448 = cljs.core.first(seq12447);
var seq12447__$1 = cljs.core.next(seq12447);
var G__12449 = cljs.core.first(seq12447__$1);
var seq12447__$2 = cljs.core.next(seq12447__$1);
var G__12450 = cljs.core.first(seq12447__$2);
var seq12447__$3 = cljs.core.next(seq12447__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__12448,G__12449,G__12450,seq12447__$3);
});

cljs.core$macros.letfn.cljs$lang$macro = true;
/**
 * Expands into code that creates a fn that expects to be passed an
 * object and any args and calls the named instance method on the
 * object passing the args. Use when you want to treat a Java method as
 * a first-class fn. name may be type-hinted with the method receiver's
 * type in order to avoid reflective calls.
 */
cljs.core$macros.memfn = (function cljs$core$macros$memfn(){
var args__5207__auto__ = [];
var len__5200__auto___12458 = arguments.length;
var i__5201__auto___12459 = (0);
while(true){
if((i__5201__auto___12459 < len__5200__auto___12458)){
args__5207__auto__.push((arguments[i__5201__auto___12459]));

var G__12460 = (i__5201__auto___12459 + (1));
i__5201__auto___12459 = G__12460;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((3) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((3)),(0))):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5208__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("target"),cljs.core.meta(name));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,t),args))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,t),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,name),args))))], 0)))))], 0))));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq12454){
var G__12455 = cljs.core.first(seq12454);
var seq12454__$1 = cljs.core.next(seq12454);
var G__12456 = cljs.core.first(seq12454__$1);
var seq12454__$2 = cljs.core.next(seq12454__$1);
var G__12457 = cljs.core.first(seq12454__$2);
var seq12454__$3 = cljs.core.next(seq12454__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__12455,G__12456,G__12457,seq12454__$3);
});

cljs.core$macros.memfn.cljs$lang$macro = true;
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(){
var args__5207__auto__ = [];
var len__5200__auto___12465 = arguments.length;
var i__5201__auto___12466 = (0);
while(true){
if((i__5201__auto___12466 < len__5200__auto___12465)){
args__5207__auto__.push((arguments[i__5201__auto___12466]));

var G__12467 = (i__5201__auto___12466 + (1));
i__5201__auto___12466 = G__12467;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((3) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((3)),(0))):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5208__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body)),test),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq12461){
var G__12462 = cljs.core.first(seq12461);
var seq12461__$1 = cljs.core.next(seq12461);
var G__12463 = cljs.core.first(seq12461__$1);
var seq12461__$2 = cljs.core.next(seq12461__$1);
var G__12464 = cljs.core.first(seq12461__$2);
var seq12461__$3 = cljs.core.next(seq12461__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__12462,G__12463,G__12464,seq12461__$3);
});

cljs.core$macros.when.cljs$lang$macro = true;
/**
 * bindings => x xs
 * 
 * Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(){
var args__5207__auto__ = [];
var len__5200__auto___12474 = arguments.length;
var i__5201__auto___12475 = (0);
while(true){
if((i__5201__auto___12475 < len__5200__auto___12474)){
args__5207__auto__.push((arguments[i__5201__auto___12475]));

var G__12476 = (i__5201__auto___12475 + (1));
i__5201__auto___12475 = G__12476;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((3) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((3)),(0))):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5208__auto__);
});

cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){





var vec__12473 = bindings;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12473,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12473,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__12468__auto__","xs__12468__auto__",-335736093,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj(cljs.core.List.EMPTY,xs)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__12468__auto__","xs__12468__auto__",-335736093,null))))))))))),cljs.core.array_seq([body], 0)))))], 0))));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq12469){
var G__12470 = cljs.core.first(seq12469);
var seq12469__$1 = cljs.core.next(seq12469);
var G__12471 = cljs.core.first(seq12469__$1);
var seq12469__$2 = cljs.core.next(seq12469__$1);
var G__12472 = cljs.core.first(seq12469__$2);
var seq12469__$3 = cljs.core.next(seq12469__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__12470,G__12471,G__12472,seq12469__$3);
});

cljs.core$macros.when_first.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 * When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(){
var args__5207__auto__ = [];
var len__5200__auto___12482 = arguments.length;
var i__5201__auto___12483 = (0);
while(true){
if((i__5201__auto___12483 < len__5200__auto___12482)){
args__5207__auto__.push((arguments[i__5201__auto___12483]));

var G__12484 = (i__5201__auto___12483 + (1));
i__5201__auto___12483 = G__12484;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((3) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((3)),(0))):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5208__auto__);
});

cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){





var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__12477__auto__","temp__12477__auto__",1791554055,null)),cljs.core._conj(cljs.core.List.EMPTY,tst)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__12477__auto__","temp__12477__auto__",1791554055,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,form),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__12477__auto__","temp__12477__auto__",1791554055,null))))))),cljs.core.array_seq([body], 0)))))], 0)))))], 0))));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq12478){
var G__12479 = cljs.core.first(seq12478);
var seq12478__$1 = cljs.core.next(seq12478);
var G__12480 = cljs.core.first(seq12478__$1);
var seq12478__$2 = cljs.core.next(seq12478__$1);
var G__12481 = cljs.core.first(seq12478__$2);
var seq12478__$3 = cljs.core.next(seq12478__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__12479,G__12480,G__12481,seq12478__$3);
});

cljs.core$macros.when_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(){
var args__5207__auto__ = [];
var len__5200__auto___12489 = arguments.length;
var i__5201__auto___12490 = (0);
while(true){
if((i__5201__auto___12490 < len__5200__auto___12489)){
args__5207__auto__.push((arguments[i__5201__auto___12490]));

var G__12491 = (i__5201__auto___12490 + (1));
i__5201__auto___12490 = G__12491;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((3) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((3)),(0))):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5208__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol(null,"do","do",1686842252,null),body)),null),test),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq12485){
var G__12486 = cljs.core.first(seq12485);
var seq12485__$1 = cljs.core.next(seq12485);
var G__12487 = cljs.core.first(seq12485__$1);
var seq12485__$2 = cljs.core.next(seq12485__$1);
var G__12488 = cljs.core.first(seq12485__$2);
var seq12485__$3 = cljs.core.next(seq12485__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__12486,G__12487,G__12488,seq12485__$3);
});

cljs.core$macros.when_not.cljs$lang$macro = true;
/**
 * Repeatedly executes body while test expression is true. Presumes
 * some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(){
var args__5207__auto__ = [];
var len__5200__auto___12496 = arguments.length;
var i__5201__auto___12497 = (0);
while(true){
if((i__5201__auto___12497 < len__5200__auto___12496)){
args__5207__auto__.push((arguments[i__5201__auto___12497]));

var G__12498 = (i__5201__auto___12497 + (1));
i__5201__auto___12497 = G__12498;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((3) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((3)),(0))):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5208__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj(cljs.core.List.EMPTY,test),cljs.core.array_seq([body,cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null))))))], 0)))))], 0))));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq12492){
var G__12493 = cljs.core.first(seq12492);
var seq12492__$1 = cljs.core.next(seq12492);
var G__12494 = cljs.core.first(seq12492__$1);
var seq12492__$2 = cljs.core.next(seq12492__$1);
var G__12495 = cljs.core.first(seq12492__$2);
var seq12492__$3 = cljs.core.next(seq12492__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__12493,G__12494,G__12495,seq12492__$3);
});

cljs.core$macros.while$.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 * through each form for which the corresponding test
 * expression is true. Note that, unlike cond branching, cond-> threading does
 * not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(){
var args__5207__auto__ = [];
var len__5200__auto___12505 = arguments.length;
var i__5201__auto___12506 = (0);
while(true){
if((i__5201__auto___12506 < len__5200__auto___12505)){
args__5207__auto__.push((arguments[i__5201__auto___12506]));

var G__12507 = (i__5201__auto___12506 + (1));
i__5201__auto___12506 = G__12507;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((3) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((3)),(0))):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5208__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_(cljs.core.count(clauses))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)))], 0)))].join('')));
}

var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var pstep = ((function (g){
return (function (p__12503){
var vec__12504 = p__12503;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12504,(0),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12504,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,test),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),cljs.core._conj(cljs.core.List.EMPTY,g),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,step)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,g)], 0))));
});})(g))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,g),cljs.core._conj(cljs.core.List.EMPTY,expr),cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.map.cljs$core$IFn$_invoke$arity$2(pstep,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses)))], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,g)], 0))));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq12499){
var G__12500 = cljs.core.first(seq12499);
var seq12499__$1 = cljs.core.next(seq12499);
var G__12501 = cljs.core.first(seq12499__$1);
var seq12499__$2 = cljs.core.next(seq12499__$1);
var G__12502 = cljs.core.first(seq12499__$2);
var seq12499__$3 = cljs.core.next(seq12499__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__12500,G__12501,G__12502,seq12499__$3);
});

cljs.core$macros.cond__GT_.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 * through each form for which the corresponding test expression
 * is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 * after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(){
var args__5207__auto__ = [];
var len__5200__auto___12514 = arguments.length;
var i__5201__auto___12515 = (0);
while(true){
if((i__5201__auto___12515 < len__5200__auto___12514)){
args__5207__auto__.push((arguments[i__5201__auto___12515]));

var G__12516 = (i__5201__auto___12515 + (1));
i__5201__auto___12515 = G__12516;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((3) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((3)),(0))):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5208__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_(cljs.core.count(clauses))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"clauses","clauses",-1199594528,null)))], 0)))].join('')));
}

var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var pstep = ((function (g){
return (function (p__12512){
var vec__12513 = p__12512;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12513,(0),null);
var step = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12513,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,test),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),cljs.core._conj(cljs.core.List.EMPTY,g),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,step)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,g)], 0))));
});})(g))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,g),cljs.core._conj(cljs.core.List.EMPTY,expr),cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.map.cljs$core$IFn$_invoke$arity$2(pstep,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses)))], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,g)], 0))));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq12508){
var G__12509 = cljs.core.first(seq12508);
var seq12508__$1 = cljs.core.next(seq12508);
var G__12510 = cljs.core.first(seq12508__$1);
var seq12508__$2 = cljs.core.next(seq12508__$1);
var G__12511 = cljs.core.first(seq12508__$2);
var seq12508__$3 = cljs.core.next(seq12508__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__12509,G__12510,G__12511,seq12508__$3);
});

cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;
/**
 * Binds name to expr, evaluates the first form in the lexical context
 * of that binding, then binds name to that result, repeating for each
 * successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(){
var args__5207__auto__ = [];
var len__5200__auto___12522 = arguments.length;
var i__5201__auto___12523 = (0);
while(true){
if((i__5201__auto___12523 < len__5200__auto___12522)){
args__5207__auto__.push((arguments[i__5201__auto___12523]));

var G__12524 = (i__5201__auto___12523 + (1));
i__5201__auto___12523 = G__12524;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((4) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((4)),(0))):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5208__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,name),cljs.core._conj(cljs.core.List.EMPTY,expr),cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(name),forms)], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,name)], 0))));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq12517){
var G__12518 = cljs.core.first(seq12517);
var seq12517__$1 = cljs.core.next(seq12517);
var G__12519 = cljs.core.first(seq12517__$1);
var seq12517__$2 = cljs.core.next(seq12517__$1);
var G__12520 = cljs.core.first(seq12517__$2);
var seq12517__$3 = cljs.core.next(seq12517__$2);
var G__12521 = cljs.core.first(seq12517__$3);
var seq12517__$4 = cljs.core.next(seq12517__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__12518,G__12519,G__12520,G__12521,seq12517__$4);
});

cljs.core$macros.as__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->),
 * and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(){
var args__5207__auto__ = [];
var len__5200__auto___12529 = arguments.length;
var i__5201__auto___12530 = (0);
while(true){
if((i__5201__auto___12530 < len__5200__auto___12529)){
args__5207__auto__.push((arguments[i__5201__auto___12530]));

var G__12531 = (i__5201__auto___12530 + (1));
i__5201__auto___12530 = G__12531;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((3) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((3)),(0))):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5208__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj(cljs.core.List.EMPTY,g))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),cljs.core._conj(cljs.core.List.EMPTY,g),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,step)], 0)))))], 0))));
});})(g))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,g),cljs.core._conj(cljs.core.List.EMPTY,expr),cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.map.cljs$core$IFn$_invoke$arity$2(pstep,forms))], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,g)], 0))));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq12525){
var G__12526 = cljs.core.first(seq12525);
var seq12525__$1 = cljs.core.next(seq12525);
var G__12527 = cljs.core.first(seq12525__$1);
var seq12525__$2 = cljs.core.next(seq12525__$1);
var G__12528 = cljs.core.first(seq12525__$2);
var seq12525__$3 = cljs.core.next(seq12525__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__12526,G__12527,G__12528,seq12525__$3);
});

cljs.core$macros.some__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->>),
 * and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(){
var args__5207__auto__ = [];
var len__5200__auto___12536 = arguments.length;
var i__5201__auto___12537 = (0);
while(true){
if((i__5201__auto___12537 < len__5200__auto___12536)){
args__5207__auto__.push((arguments[i__5201__auto___12537]));

var G__12538 = (i__5201__auto___12537 + (1));
i__5201__auto___12537 = G__12538;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((3) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((3)),(0))):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5208__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj(cljs.core.List.EMPTY,g))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),cljs.core._conj(cljs.core.List.EMPTY,g),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,step)], 0)))))], 0))));
});})(g))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,g),cljs.core._conj(cljs.core.List.EMPTY,expr),cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(g),cljs.core.map.cljs$core$IFn$_invoke$arity$2(pstep,forms))], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,g)], 0))));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq12532){
var G__12533 = cljs.core.first(seq12532);
var seq12532__$1 = cljs.core.next(seq12532);
var G__12534 = cljs.core.first(seq12532__$1);
var seq12532__$2 = cljs.core.next(seq12532__$1);
var G__12535 = cljs.core.first(seq12532__$2);
var seq12532__$3 = cljs.core.next(seq12532__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__12533,G__12534,G__12535,seq12532__$3);
});

cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 * If test is not nil, evaluates then with binding-form bound to the
 * value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(){
var args12540 = [];
var len__5200__auto___12549 = arguments.length;
var i__5201__auto___12550 = (0);
while(true){
if((i__5201__auto___12550 < len__5200__auto___12549)){
args12540.push((arguments[i__5201__auto___12550]));

var G__12551 = (i__5201__auto___12550 + (1));
i__5201__auto___12550 = G__12551;
continue;
} else {
}
break;
}

var G__12548 = args12540.length;
switch (G__12548) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5219__auto__ = (new cljs.core.IndexedSeq(args12540.slice((5)),(0)));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5219__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-some","cljs.core$macros/if-some",1405341529,null)),cljs.core._conj(cljs.core.List.EMPTY,bindings),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,then),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){







var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__12539__auto__","temp__12539__auto__",42734452,null)),cljs.core._conj(cljs.core.List.EMPTY,tst)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__12539__auto__","temp__12539__auto__",42734452,null)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,else$),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,form),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__12539__auto__","temp__12539__auto__",42734452,null))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,then)], 0)))))], 0)))))], 0))));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq12541){
var G__12542 = cljs.core.first(seq12541);
var seq12541__$1 = cljs.core.next(seq12541);
var G__12543 = cljs.core.first(seq12541__$1);
var seq12541__$2 = cljs.core.next(seq12541__$1);
var G__12544 = cljs.core.first(seq12541__$2);
var seq12541__$3 = cljs.core.next(seq12541__$2);
var G__12545 = cljs.core.first(seq12541__$3);
var seq12541__$4 = cljs.core.next(seq12541__$3);
var G__12546 = cljs.core.first(seq12541__$4);
var seq12541__$5 = cljs.core.next(seq12541__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__12542,G__12543,G__12544,G__12545,G__12546,seq12541__$5);
});

cljs.core$macros.if_some.cljs$lang$maxFixedArity = (5);

cljs.core$macros.if_some.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 * When test is not nil, evaluates body with binding-form bound to the
 * value of test
 */
cljs.core$macros.when_some = (function cljs$core$macros$when_some(){
var args__5207__auto__ = [];
var len__5200__auto___12558 = arguments.length;
var i__5201__auto___12559 = (0);
while(true){
if((i__5201__auto___12559 < len__5200__auto___12558)){
args__5207__auto__.push((arguments[i__5201__auto___12559]));

var G__12560 = (i__5201__auto___12559 + (1));
i__5201__auto___12559 = G__12560;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((3) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((3)),(0))):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5208__auto__);
});

cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){





var form = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((0)) : bindings.call(null,(0)));
var tst = (bindings.cljs$core$IFn$_invoke$arity$1 ? bindings.cljs$core$IFn$_invoke$arity$1((1)) : bindings.call(null,(1)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__12553__auto__","temp__12553__auto__",-2102070425,null)),cljs.core._conj(cljs.core.List.EMPTY,tst)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__12553__auto__","temp__12553__auto__",-2102070425,null)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,form),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__12553__auto__","temp__12553__auto__",-2102070425,null))))))),cljs.core.array_seq([body], 0)))))], 0)))))], 0))));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq12554){
var G__12555 = cljs.core.first(seq12554);
var seq12554__$1 = cljs.core.next(seq12554);
var G__12556 = cljs.core.first(seq12554__$1);
var seq12554__$2 = cljs.core.next(seq12554__$1);
var G__12557 = cljs.core.first(seq12554__$2);
var seq12554__$3 = cljs.core.next(seq12554__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__12555,G__12556,G__12557,seq12554__$3);
});

cljs.core$macros.when_some.cljs$lang$macro = true;
/**
 * A good fdecl looks like (([a] ...) ([a b] ...)) near the end of defn.
 */
cljs.core$macros.assert_valid_fdecl = (function cljs$core$macros$assert_valid_fdecl(fdecl){
if(cljs.core.empty_QMARK_(fdecl)){
throw (new Error("Parameter declaration missing"));
} else {
}

var argdecls = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12561_SHARP_){
if(cljs.core.seq_QMARK_(p1__12561_SHARP_)){
return cljs.core.first(p1__12561_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_(cljs.core.first(fdecl)))?[cljs.core.str("Invalid signature \""),cljs.core.str(p1__12561_SHARP_),cljs.core.str("\" should be a list")].join(''):[cljs.core.str("Parameter declaration \""),cljs.core.str(p1__12561_SHARP_),cljs.core.str("\" should be a vector")].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (argdecls){
return (function (p1__12562_SHARP_){
return cljs.core.vector_QMARK_(p1__12562_SHARP_);
});})(argdecls))
,argdecls));
if(bad_args){
throw (new Error([cljs.core.str("Parameter declaration \""),cljs.core.str(cljs.core.first(bad_args)),cljs.core.str("\" should be a vector")].join('')));
} else {
return null;
}
});
cljs.core$macros.sigs = (function cljs$core$macros$sigs(fdecl){
(cljs.core$macros.assert_valid_fdecl.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.assert_valid_fdecl.cljs$core$IFn$_invoke$arity$1(fdecl) : cljs.core$macros.assert_valid_fdecl.call(null,fdecl));

var asig = (function (fdecl__$1){
var arglist = cljs.core.first(fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.first(arglist)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(arglist,(2),cljs.core.count(arglist)):arglist);
var body = cljs.core.next(fdecl__$1);
if(cljs.core.map_QMARK_(cljs.core.first(body))){
if(cljs.core.next(body)){
return cljs.core.with_meta(arglist__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(arglist__$1))?cljs.core.meta(arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first(body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_(cljs.core.first(fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__12563 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,asig(cljs.core.first(fdecls)));
var G__12564 = cljs.core.next(fdecls);
ret = G__12563;
fdecls = G__12564;
continue;
} else {
return cljs.core.seq(ret);
}
break;
}
} else {
return cljs.core._conj(cljs.core.List.EMPTY,asig(fdecl));
}
});
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),cljs.core._conj(cljs.core.List.EMPTY,x))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,init)], 0)))))], 0))));
});

cljs.core$macros.defonce.cljs$lang$macro = true;
cljs.core$macros.assert_args = (function cljs$core$macros$assert_args(){
var args__5207__auto__ = [];
var len__5200__auto___12569 = arguments.length;
var i__5201__auto___12570 = (0);
while(true){
if((i__5201__auto___12570 < len__5200__auto___12569)){
args__5207__auto__.push((arguments[i__5201__auto___12570]));

var G__12571 = (i__5201__auto___12570 + (1));
i__5201__auto___12570 = G__12571;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((3) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((3)),(0))):null);
return cljs.core$macros.assert_args.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5208__auto__);
});

cljs.core$macros.assert_args.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnname,pairs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.first(pairs)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj(cljs.core.List.EMPTY,[cljs.core.str(fnname),cljs.core.str(" requires "),cljs.core.str(cljs.core.second(pairs))].join(''))))))))))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(function (){var more = cljs.core.nnext(pairs);
if(cljs.core.truth_(more)){
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol("cljs.core$macros","assert-args","cljs.core$macros/assert-args",-1297839583,null),fnname,more);
} else {
return null;
}
})())], 0))));
});

cljs.core$macros.assert_args.cljs$lang$maxFixedArity = (3);

cljs.core$macros.assert_args.cljs$lang$applyTo = (function (seq12565){
var G__12566 = cljs.core.first(seq12565);
var seq12565__$1 = cljs.core.next(seq12565);
var G__12567 = cljs.core.first(seq12565__$1);
var seq12565__$2 = cljs.core.next(seq12565__$1);
var G__12568 = cljs.core.first(seq12565__$2);
var seq12565__$3 = cljs.core.next(seq12565__$2);
return cljs.core$macros.assert_args.cljs$core$IFn$_invoke$arity$variadic(G__12566,G__12567,G__12568,seq12565__$3);
});

cljs.core$macros.assert_args.cljs$lang$macro = true;
cljs.core$macros.destructure = (function cljs$core$macros$destructure(bindings){
var bents = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings);
var pb = ((function (bents){
return (function cljs$core$macros$destructure_$_pb(bvec,b,v){
var pvec = ((function (bents){
return (function (bvec__$1,b__$1,val){
var gvec = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("vec__");
var ret = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec__$1,gvec),val);
var n = (0);
var bs = b__$1;
var seen_rest_QMARK_ = false;
while(true){
if(cljs.core.seq(bs)){
var firstb = cljs.core.first(bs);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(firstb,new cljs.core.Symbol(null,"&","&",-2144855648,null))){
var G__12601 = cljs$core$macros$destructure_$_pb(ret,cljs.core.second(bs),cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,n),gvec),new cljs.core.Symbol("cljs.core","nthnext","cljs.core/nthnext",-1690777327,null)));
var G__12602 = n;
var G__12603 = cljs.core.nnext(bs);
var G__12604 = true;
ret = G__12601;
n = G__12602;
bs = G__12603;
seen_rest_QMARK_ = G__12604;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb(ret,cljs.core.second(bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__12605 = cljs$core$macros$destructure_$_pb(ret,firstb,cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,null),n),gvec),new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null)));
var G__12606 = (n + (1));
var G__12607 = cljs.core.next(bs);
var G__12608 = seen_rest_QMARK_;
ret = G__12605;
n = G__12606;
bs = G__12607;
seen_rest_QMARK_ = G__12608;
continue;
}

}
}
} else {
return ret;
}
break;
}
});})(bents))
;
var pmap = ((function (pvec,bents){
return (function (bvec__$1,b__$1,v__$1){
var gmap = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("map__");
var defaults = new cljs.core.Keyword(null,"or","or",235744169).cljs$core$IFn$_invoke$arity$1(b__$1);
var ret = ((function (gmap,defaults,pvec,bents){
return (function (ret){
if(cljs.core.truth_(new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1),cljs.core.array_seq([gmap], 0));
} else {
return ret;
}
});})(gmap,defaults,pvec,bents))
.call(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq?","cljs.core/seq?",-1302056292,null)),cljs.core._conj(cljs.core.List.EMPTY,gmap))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,gmap)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,gmap)], 0))))));
var bes = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ret,gmap,defaults,pvec,bents){
return (function (bes,entry){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ret,gmap,defaults,pvec,bents){
return (function (p1__12572_SHARP_,p2__12573_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__12572_SHARP_,p2__12573_SHARP_,cljs.core.val(entry).call(null,p2__12573_SHARP_));
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(bes,cljs.core.key(entry)),cljs.core.key(entry).call(null,bes));
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(b__$1,new cljs.core.Keyword(null,"as","as",1148689641),cljs.core.array_seq([new cljs.core.Keyword(null,"or","or",235744169)], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keys","keys",1068423698),((function (ret,gmap,defaults,pvec,bents){
return (function (p1__12574_SHARP_){
if((p1__12574_SHARP_ instanceof cljs.core.Keyword)){
return p1__12574_SHARP_;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str(p1__12574_SHARP_)].join(''));
}
});})(ret,gmap,defaults,pvec,bents))
,new cljs.core.Keyword(null,"strs","strs",1175537277),cljs.core.str,new cljs.core.Keyword(null,"syms","syms",-1575891762),((function (ret,gmap,defaults,pvec,bents){
return (function (p1__12575_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__12575_SHARP_),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
});})(ret,gmap,defaults,pvec,bents))
], null));
while(true){
if(cljs.core.seq(bes)){
var bb = cljs.core.key(cljs.core.first(bes));
var bk = cljs.core.val(cljs.core.first(bes));
var has_default = cljs.core.contains_QMARK_(defaults,bb);
var G__12609 = cljs$core$macros$destructure_$_pb(ret,bb,((has_default)?cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(defaults.cljs$core$IFn$_invoke$arity$1 ? defaults.cljs$core$IFn$_invoke$arity$1(bb) : defaults.call(null,bb))),bk),gmap),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)):cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,bk),gmap),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null))));
var G__12610 = cljs.core.next(bes);
ret = G__12609;
bes = G__12610;
continue;
} else {
return ret;
}
break;
}
});})(pvec,bents))
;
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec,(cljs.core.truth_(cljs.core.namespace(b))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(b)):b)),v);
} else {
if((b instanceof cljs.core.Keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bvec,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(b))),v);
} else {
if(cljs.core.vector_QMARK_(b)){
return pvec(bvec,b,v);
} else {
if(cljs.core.map_QMARK_(b)){
return pmap(bvec,b,v);
} else {
throw (new Error([cljs.core.str("Unsupported binding form: "),cljs.core.str(b)].join('')));

}
}
}
}
});})(bents))
;
var process_entry = ((function (bents,pb){
return (function (bvec,b){
return pb(bvec,cljs.core.first(b),cljs.core.second(b));
});})(bents,pb))
;
if(cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,bents))){
return bindings;
} else {
var temp__4423__auto__ = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (bents,pb,process_entry){
return (function (p1__12576_SHARP_){
return (cljs.core.first(p1__12576_SHARP_) instanceof cljs.core.Keyword);
});})(bents,pb,process_entry))
,bents));
if(temp__4423__auto__){
var kwbs = temp__4423__auto__;
throw (new Error([cljs.core.str("Unsupported binding key: "),cljs.core.str(cljs.core.ffirst(kwbs))].join('')));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(process_entry,cljs.core.PersistentVector.EMPTY,bents);
}
}
});
/**
 * binding => binding-form init-expr
 * 
 * Evaluates the exprs in a lexical context in which the symbols in
 * the binding-forms are bound to their respective init-exprs or parts
 * therein.
 */
cljs.core$macros.let$ = (function cljs$core$macros$let(){
var args__5207__auto__ = [];
var len__5200__auto___12615 = arguments.length;
var i__5201__auto___12616 = (0);
while(true){
if((i__5201__auto___12616 < len__5200__auto___12615)){
args__5207__auto__.push((arguments[i__5201__auto___12616]));

var G__12617 = (i__5201__auto___12616 + (1));
i__5201__auto___12616 = G__12617;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((3) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((3)),(0))):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5208__auto__);
});

cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
cljs.core$macros.assert_args.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector_QMARK_(bindings),"a vector for its binding",cljs.core.even_QMARK_(cljs.core.count(bindings)),cljs.core.array_seq(["an even number of forms in binding vector"], 0));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"let*","let*",1920721458,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core$macros.destructure(bindings)),cljs.core.array_seq([body], 0))));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq12611){
var G__12612 = cljs.core.first(seq12611);
var seq12611__$1 = cljs.core.next(seq12611);
var G__12613 = cljs.core.first(seq12611__$1);
var seq12611__$2 = cljs.core.next(seq12611__$1);
var G__12614 = cljs.core.first(seq12611__$2);
var seq12611__$3 = cljs.core.next(seq12611__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__12612,G__12613,G__12614,seq12611__$3);
});

cljs.core$macros.let$.cljs$lang$macro = true;
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 * the binding-forms are bound to their respective init-exprs or parts
 * therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(){
var args__5207__auto__ = [];
var len__5200__auto___12624 = arguments.length;
var i__5201__auto___12625 = (0);
while(true){
if((i__5201__auto___12625 < len__5200__auto___12624)){
args__5207__auto__.push((arguments[i__5201__auto___12625]));

var G__12626 = (i__5201__auto___12625 + (1));
i__5201__auto___12625 = G__12626;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((3) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((3)),(0))):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5208__auto__);
});

cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
cljs.core$macros.assert_args.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector_QMARK_(bindings),"a vector for its binding",cljs.core.even_QMARK_(cljs.core.count(bindings)),cljs.core.array_seq(["an even number of forms in binding vector"], 0));

var db = cljs.core$macros.destructure(bindings);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(db,bindings)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),cljs.core._conj(cljs.core.List.EMPTY,bindings),cljs.core.array_seq([body], 0))));
} else {
var vs = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),bindings));
var bs = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
var gs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vs,bs,db){
return (function (b){
if((b instanceof cljs.core.Symbol)){
return b;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
});})(vs,bs,db))
,bs);
var bfs = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vs,bs,gs,db){
return (function (ret,p__12622){
var vec__12623 = p__12622;
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12623,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12623,(1),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12623,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,g,cljs.core.array_seq([v], 0));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(ret,g,cljs.core.array_seq([v,b,g], 0));
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,bfs),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(gs,gs))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(bs,gs))),cljs.core.array_seq([body], 0)))))], 0)))))], 0))));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq12618){
var G__12619 = cljs.core.first(seq12618);
var seq12618__$1 = cljs.core.next(seq12618);
var G__12620 = cljs.core.first(seq12618__$1);
var seq12618__$2 = cljs.core.next(seq12618__$1);
var G__12621 = cljs.core.first(seq12618__$2);
var seq12618__$3 = cljs.core.next(seq12618__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__12619,G__12620,G__12621,seq12618__$3);
});

cljs.core$macros.loop.cljs$lang$macro = true;
/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__12627_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core",[cljs.core.str(p1__12627_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null)], true)),cljs.core.iterate((function (p__12628){
var vec__12629 = p__12628;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12629,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12629,(1),null);
if(((2147483648) === b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(p + (1)),(1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,(b << (1))], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
/**
 * total number of partitions
 */
cljs.core$macros.fast_path_protocol_partitions_count = (function (){var c = cljs.core.count(cljs.core$macros.fast_path_protocols);
var m = cljs.core.mod(c,(32));
if((m === (0))){
return cljs.core.quot(c,(32));
} else {
return (cljs.core.quot(c,(32)) + (1));
}
})();
cljs.core$macros.str = (function cljs$core$macros$str(){
var args__5207__auto__ = [];
var len__5200__auto___12633 = arguments.length;
var i__5201__auto___12634 = (0);
while(true){
if((i__5201__auto___12634 < len__5200__auto___12633)){
args__5207__auto__.push((arguments[i__5201__auto___12634]));

var G__12635 = (i__5201__auto___12634 + (1));
i__5201__auto___12634 = G__12635;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((2) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((2)),(0))):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5208__auto__);
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var strs = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(xs),"cljs.core.str(~{})")));
return cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("["),cljs.core.str(strs),cljs.core.str("].join('')")].join(''),xs);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.str.cljs$lang$applyTo = (function (seq12630){
var G__12631 = cljs.core.first(seq12630);
var seq12630__$1 = cljs.core.next(seq12630);
var G__12632 = cljs.core.first(seq12630__$1);
var seq12630__$2 = cljs.core.next(seq12630__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__12631,G__12632,seq12630__$2);
});

cljs.core$macros.str.cljs$lang$macro = true;
cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null));
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__4149__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"constant","constant",-379609303),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),null,new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(and__4149__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,cljs.analyzer.infer_tag(env,ast));
} else {
return and__4149__auto__;
}
});
/**
 * Evaluates exprs one at a time, from left to right. If a form
 * returns logical false (nil or false), and returns that value and
 * doesn't evaluate any of the other expressions, otherwise it returns
 * the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(){
var args12639 = [];
var len__5200__auto___12646 = arguments.length;
var i__5201__auto___12647 = (0);
while(true){
if((i__5201__auto___12647 < len__5200__auto___12646)){
args12639.push((arguments[i__5201__auto___12647]));

var G__12648 = (i__5201__auto___12647 + (1));
i__5201__auto___12647 = G__12648;
continue;
} else {
}
break;
}

var G__12645 = args12639.length;
switch (G__12645) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__5219__auto__ = (new cljs.core.IndexedSeq(args12639.slice((3)),(0)));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5219__auto__);

}
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return true;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_(((function (forms){
return (function (p1__12636_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_(_AMPERSAND_env,p1__12636_SHARP_);
});})(forms))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (forms){
return (function (p1__12637_SHARP_){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__12637_SHARP_);
});})(forms))
,forms))){
var and_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" && ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(forms),"(~{})")));
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj(cljs.core.List.EMPTY,and_str),cljs.core.array_seq([forms], 0)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__12638__auto__","and__12638__auto__",244790010,null)),cljs.core._conj(cljs.core.List.EMPTY,x)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__12638__auto__","and__12638__auto__",244790010,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),next)))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__12638__auto__","and__12638__auto__",244790010,null))], 0)))))], 0))));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq12640){
var G__12641 = cljs.core.first(seq12640);
var seq12640__$1 = cljs.core.next(seq12640);
var G__12642 = cljs.core.first(seq12640__$1);
var seq12640__$2 = cljs.core.next(seq12640__$1);
var G__12643 = cljs.core.first(seq12640__$2);
var seq12640__$3 = cljs.core.next(seq12640__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__12641,G__12642,G__12643,seq12640__$3);
});

cljs.core$macros.and.cljs$lang$maxFixedArity = (3);

cljs.core$macros.and.cljs$lang$macro = true;
/**
 * Evaluates exprs one at a time, from left to right. If a form
 * returns a logical true value, or returns that value and doesn't
 * evaluate any of the other expressions, otherwise it returns the
 * value of the last expression. (or) returns nil.
 */
cljs.core$macros.or = (function cljs$core$macros$or(){
var args12653 = [];
var len__5200__auto___12660 = arguments.length;
var i__5201__auto___12661 = (0);
while(true){
if((i__5201__auto___12661 < len__5200__auto___12660)){
args12653.push((arguments[i__5201__auto___12661]));

var G__12662 = (i__5201__auto___12661 + (1));
i__5201__auto___12661 = G__12662;
continue;
} else {
}
break;
}

var G__12659 = args12653.length;
switch (G__12659) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__5219__auto__ = (new cljs.core.IndexedSeq(args12653.slice((3)),(0)));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5219__auto__);

}
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return null;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_(((function (forms){
return (function (p1__12650_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_(_AMPERSAND_env,p1__12650_SHARP_);
});})(forms))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (forms){
return (function (p1__12651_SHARP_){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__12651_SHARP_);
});})(forms))
,forms))){
var or_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" || ",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(forms),"(~{})")));
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj(cljs.core.List.EMPTY,or_str),cljs.core.array_seq([forms], 0)))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__12652__auto__","or__12652__auto__",-539027177,null)),cljs.core._conj(cljs.core.List.EMPTY,x)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__12652__auto__","or__12652__auto__",-539027177,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__12652__auto__","or__12652__auto__",-539027177,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),next))))], 0)))))], 0))));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq12654){
var G__12655 = cljs.core.first(seq12654);
var seq12654__$1 = cljs.core.next(seq12654);
var G__12656 = cljs.core.first(seq12654__$1);
var seq12654__$2 = cljs.core.next(seq12654__$1);
var G__12657 = cljs.core.first(seq12654__$2);
var seq12654__$3 = cljs.core.next(seq12654__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__12655,G__12656,G__12657,seq12654__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);

cljs.core$macros.or.cljs$lang$macro = true;
cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-=","cljs.core$macros/coercive-=",-1655776086,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;
cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,x),"(!~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not.cljs$lang$macro = true;
cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,y),x),"(~{} != ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,y),x),"(~{} == ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,x),"~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null));
});

cljs.core$macros.coercive_boolean.cljs$lang$macro = true;
cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("x is substituted twice"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("core","symbol?","core/symbol?",1819594398,null),new cljs.core.Symbol(null,"x","x",-555367584,null))], 0)))].join('')));
}

return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,x),x),"(~{} != null && ~{} !== false)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.truth_.cljs$lang$macro = true;
cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"arguments"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_arguments.cljs$lang$macro = true;
cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,key),obj),"delete ~{}[~{}]"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_delete.cljs$lang$macro = true;
cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,obj),key),"~{} in ~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_in.cljs$lang$macro = true;
/**
 * Emit JavaScript "debugger;" statement.
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"debugger;"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_debugger.cljs$lang$macro = true;
cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,x),"~{} === true"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.true_QMARK_.cljs$lang$macro = true;
cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,x),"~{} === false"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.false_QMARK_.cljs$lang$macro = true;
cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,x),"typeof ~{} === 'string'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.string_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(x,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true)),"typeof ~{} !== 'undefined'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,x),"(void 0 === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;
cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,b),a),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;
cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,t,o){
return cljs.core$macros.bool_expr(((cljs.core.symbol_QMARK_(t))?cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,t),o),"(~{} instanceof ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"t__12664__auto__","t__12664__auto__",-1890641342,null)),cljs.core._conj(cljs.core.List.EMPTY,t),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"o__12665__auto__","o__12665__auto__",1082140362,null)),cljs.core._conj(cljs.core.List.EMPTY,o)], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj(cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"o__12665__auto__","o__12665__auto__",1082140362,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"t__12664__auto__","t__12664__auto__",-1890641342,null))], 0)))))], 0))))));
});

cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;
cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,x),"typeof ~{} === 'number'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.number_QMARK_.cljs$lang$macro = true;
cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,x)], 0)))));
});

cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;
cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,x)], 0)))));
});

cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;
cljs.core$macros.aget = (function cljs$core$macros$aget(){
var args12666 = [];
var len__5200__auto___12674 = arguments.length;
var i__5201__auto___12675 = (0);
while(true){
if((i__5201__auto___12675 < len__5200__auto___12674)){
args12666.push((arguments[i__5201__auto___12675]));

var G__12676 = (i__5201__auto___12675 + (1));
i__5201__auto___12675 = G__12676;
continue;
} else {
}
break;
}

var G__12673 = args12666.length;
switch (G__12673) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5219__auto__ = (new cljs.core.IndexedSeq(args12666.slice((4)),(0)));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5219__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,i),a),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,idxs){
var astr = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(idxs),"[~{}]"));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj(cljs.core.List.EMPTY,[cljs.core.str("(~{}[~{}]"),cljs.core.str(astr),cljs.core.str(")")].join('')),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,a),cljs.core._conj(cljs.core.List.EMPTY,i),idxs], 0))));
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq12667){
var G__12668 = cljs.core.first(seq12667);
var seq12667__$1 = cljs.core.next(seq12667);
var G__12669 = cljs.core.first(seq12667__$1);
var seq12667__$2 = cljs.core.next(seq12667__$1);
var G__12670 = cljs.core.first(seq12667__$2);
var seq12667__$3 = cljs.core.next(seq12667__$2);
var G__12671 = cljs.core.first(seq12667__$3);
var seq12667__$4 = cljs.core.next(seq12667__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__12668,G__12669,G__12670,G__12671,seq12667__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);

cljs.core$macros.aget.cljs$lang$macro = true;
cljs.core$macros.aset = (function cljs$core$macros$aset(){
var args12678 = [];
var len__5200__auto___12687 = arguments.length;
var i__5201__auto___12688 = (0);
while(true){
if((i__5201__auto___12688 < len__5200__auto___12687)){
args12678.push((arguments[i__5201__auto___12688]));

var G__12689 = (i__5201__auto___12688 + (1));
i__5201__auto___12688 = G__12689;
continue;
} else {
}
break;
}

var G__12686 = args12678.length;
switch (G__12686) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__5219__auto__ = (new cljs.core.IndexedSeq(args12678.slice((5)),(0)));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5219__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,v){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,v),i),a),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,idx,idx2,idxv){
var n = (cljs.core.count(idxv) - (1));
var astr = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"[~{}]"));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj(cljs.core.List.EMPTY,[cljs.core.str("(~{}[~{}][~{}]"),cljs.core.str(astr),cljs.core.str(" = ~{})")].join('')),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,a),cljs.core._conj(cljs.core.List.EMPTY,idx),cljs.core._conj(cljs.core.List.EMPTY,idx2),idxv], 0))));
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq12679){
var G__12680 = cljs.core.first(seq12679);
var seq12679__$1 = cljs.core.next(seq12679);
var G__12681 = cljs.core.first(seq12679__$1);
var seq12679__$2 = cljs.core.next(seq12679__$1);
var G__12682 = cljs.core.first(seq12679__$2);
var seq12679__$3 = cljs.core.next(seq12679__$2);
var G__12683 = cljs.core.first(seq12679__$3);
var seq12679__$4 = cljs.core.next(seq12679__$3);
var G__12684 = cljs.core.first(seq12679__$4);
var seq12679__$5 = cljs.core.next(seq12679__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__12680,G__12681,G__12682,G__12683,G__12684,seq12679__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);

cljs.core$macros.aset.cljs$lang$macro = true;
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(){
var args12691 = [];
var len__5200__auto___12699 = arguments.length;
var i__5201__auto___12700 = (0);
while(true){
if((i__5201__auto___12700 < len__5200__auto___12699)){
args12691.push((arguments[i__5201__auto___12700]));

var G__12701 = (i__5201__auto___12700 + (1));
i__5201__auto___12700 = G__12701;
continue;
} else {
}
break;
}

var G__12698 = args12691.length;
switch (G__12698) {
case 2:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5219__auto__ = (new cljs.core.IndexedSeq(args12691.slice((4)),(0)));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5219__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,y),x),"(~{} + ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","+","cljs.core/+",-342754435,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,y)], 0))))),cljs.core.array_seq([more], 0))));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq12692){
var G__12693 = cljs.core.first(seq12692);
var seq12692__$1 = cljs.core.next(seq12692);
var G__12694 = cljs.core.first(seq12692__$1);
var seq12692__$2 = cljs.core.next(seq12692__$1);
var G__12695 = cljs.core.first(seq12692__$2);
var seq12692__$3 = cljs.core.next(seq12692__$2);
var G__12696 = cljs.core.first(seq12692__$3);
var seq12692__$4 = cljs.core.next(seq12692__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__12693,G__12694,G__12695,G__12696,seq12692__$4);
});

cljs.core$macros._PLUS_.cljs$lang$maxFixedArity = (4);

cljs.core$macros._PLUS_.cljs$lang$macro = true;
cljs.core$macros.byte$ = (function cljs$core$macros$byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.byte$.cljs$lang$macro = true;
cljs.core$macros.short$ = (function cljs$core$macros$short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.short$.cljs$lang$macro = true;
cljs.core$macros.float$ = (function cljs$core$macros$float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.float$.cljs$lang$macro = true;
cljs.core$macros.double$ = (function cljs$core$macros$double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.double$.cljs$lang$macro = true;
cljs.core$macros.unchecked_byte = (function cljs$core$macros$unchecked_byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_byte.cljs$lang$macro = true;
cljs.core$macros.unchecked_char = (function cljs$core$macros$unchecked_char(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_char.cljs$lang$macro = true;
cljs.core$macros.unchecked_short = (function cljs$core$macros$unchecked_short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_short.cljs$lang$macro = true;
cljs.core$macros.unchecked_float = (function cljs$core$macros$unchecked_float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_float.cljs$lang$macro = true;
cljs.core$macros.unchecked_double = (function cljs$core$macros$unchecked_double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_double.cljs$lang$macro = true;
cljs.core$macros.unchecked_add = (function cljs$core$macros$unchecked_add(){
var args__5207__auto__ = [];
var len__5200__auto___12706 = arguments.length;
var i__5201__auto___12707 = (0);
while(true){
if((i__5201__auto___12707 < len__5200__auto___12706)){
args__5207__auto__.push((arguments[i__5201__auto___12707]));

var G__12708 = (i__5201__auto___12707 + (1));
i__5201__auto___12707 = G__12708;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((2) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((2)),(0))):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5208__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq12703){
var G__12704 = cljs.core.first(seq12703);
var seq12703__$1 = cljs.core.next(seq12703);
var G__12705 = cljs.core.first(seq12703__$1);
var seq12703__$2 = cljs.core.next(seq12703__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__12704,G__12705,seq12703__$2);
});

cljs.core$macros.unchecked_add.cljs$lang$macro = true;
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(){
var args__5207__auto__ = [];
var len__5200__auto___12712 = arguments.length;
var i__5201__auto___12713 = (0);
while(true){
if((i__5201__auto___12713 < len__5200__auto___12712)){
args__5207__auto__.push((arguments[i__5201__auto___12713]));

var G__12714 = (i__5201__auto___12713 + (1));
i__5201__auto___12713 = G__12714;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((2) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((2)),(0))):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5208__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq12709){
var G__12710 = cljs.core.first(seq12709);
var seq12709__$1 = cljs.core.next(seq12709);
var G__12711 = cljs.core.first(seq12709__$1);
var seq12709__$2 = cljs.core.next(seq12709__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__12710,G__12711,seq12709__$2);
});

cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dec","cljs.core/dec",-443230268,null)),cljs.core._conj(cljs.core.List.EMPTY,x))));
});

cljs.core$macros.unchecked_dec.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dec","cljs.core/dec",-443230268,null)),cljs.core._conj(cljs.core.List.EMPTY,x))));
});

cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(){
var args__5207__auto__ = [];
var len__5200__auto___12718 = arguments.length;
var i__5201__auto___12719 = (0);
while(true){
if((i__5201__auto___12719 < len__5200__auto___12718)){
args__5207__auto__.push((arguments[i__5201__auto___12719]));

var G__12720 = (i__5201__auto___12719 + (1));
i__5201__auto___12719 = G__12720;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((2) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((2)),(0))):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5208__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","/","cljs.core//",-696756880,null)),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq12715){
var G__12716 = cljs.core.first(seq12715);
var seq12715__$1 = cljs.core.next(seq12715);
var G__12717 = cljs.core.first(seq12715__$1);
var seq12715__$2 = cljs.core.next(seq12715__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__12716,G__12717,seq12715__$2);
});

cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null)),cljs.core._conj(cljs.core.List.EMPTY,x))));
});

cljs.core$macros.unchecked_inc.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","inc","cljs.core/inc",-879172610,null)),cljs.core._conj(cljs.core.List.EMPTY,x))));
});

cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(){
var args__5207__auto__ = [];
var len__5200__auto___12724 = arguments.length;
var i__5201__auto___12725 = (0);
while(true){
if((i__5201__auto___12725 < len__5200__auto___12724)){
args__5207__auto__.push((arguments[i__5201__auto___12725]));

var G__12726 = (i__5201__auto___12725 + (1));
i__5201__auto___12725 = G__12726;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((2) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((2)),(0))):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5208__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*","cljs.core/*",-857794892,null)),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq12721){
var G__12722 = cljs.core.first(seq12721);
var seq12721__$1 = cljs.core.next(seq12721);
var G__12723 = cljs.core.first(seq12721__$1);
var seq12721__$2 = cljs.core.next(seq12721__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__12722,G__12723,seq12721__$2);
});

cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(){
var args__5207__auto__ = [];
var len__5200__auto___12730 = arguments.length;
var i__5201__auto___12731 = (0);
while(true){
if((i__5201__auto___12731 < len__5200__auto___12730)){
args__5207__auto__.push((arguments[i__5201__auto___12731]));

var G__12732 = (i__5201__auto___12731 + (1));
i__5201__auto___12731 = G__12732;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((2) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((2)),(0))):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5208__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*","cljs.core/*",-857794892,null)),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq12727){
var G__12728 = cljs.core.first(seq12727);
var seq12727__$1 = cljs.core.next(seq12727);
var G__12729 = cljs.core.first(seq12727__$1);
var seq12727__$2 = cljs.core.next(seq12727__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__12728,G__12729,seq12727__$2);
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null)),cljs.core._conj(cljs.core.List.EMPTY,x))));
});

cljs.core$macros.unchecked_negate.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null)),cljs.core._conj(cljs.core.List.EMPTY,x))));
});

cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","mod","cljs.core/mod",1925370196,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,n)], 0))));
});

cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(){
var args__5207__auto__ = [];
var len__5200__auto___12736 = arguments.length;
var i__5201__auto___12737 = (0);
while(true){
if((i__5201__auto___12737 < len__5200__auto___12736)){
args__5207__auto__.push((arguments[i__5201__auto___12737]));

var G__12738 = (i__5201__auto___12737 + (1));
i__5201__auto___12737 = G__12738;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((2) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((2)),(0))):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5208__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null)),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq12733){
var G__12734 = cljs.core.first(seq12733);
var seq12733__$1 = cljs.core.next(seq12733);
var G__12735 = cljs.core.first(seq12733__$1);
var seq12733__$2 = cljs.core.next(seq12733__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__12734,G__12735,seq12733__$2);
});

cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(){
var args__5207__auto__ = [];
var len__5200__auto___12742 = arguments.length;
var i__5201__auto___12743 = (0);
while(true){
if((i__5201__auto___12743 < len__5200__auto___12742)){
args__5207__auto__.push((arguments[i__5201__auto___12743]));

var G__12744 = (i__5201__auto___12743 + (1));
i__5201__auto___12743 = G__12744;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((2) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((2)),(0))):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5208__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null)),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq12739){
var G__12740 = cljs.core.first(seq12739);
var seq12739__$1 = cljs.core.next(seq12739);
var G__12741 = cljs.core.first(seq12739__$1);
var seq12739__$2 = cljs.core.next(seq12739__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__12740,G__12741,seq12739__$2);
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;
cljs.core$macros._ = (function cljs$core$macros$_(){
var args12745 = [];
var len__5200__auto___12753 = arguments.length;
var i__5201__auto___12754 = (0);
while(true){
if((i__5201__auto___12754 < len__5200__auto___12753)){
args12745.push((arguments[i__5201__auto___12754]));

var G__12755 = (i__5201__auto___12754 + (1));
i__5201__auto___12754 = G__12755;
continue;
} else {
}
break;
}

var G__12752 = args12745.length;
switch (G__12752) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5219__auto__ = (new cljs.core.IndexedSeq(args12745.slice((4)),(0)));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5219__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,x),"(- ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,y),x),"(~{} - ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-","cljs.core/-",187040141,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,y)], 0))))),cljs.core.array_seq([more], 0))));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq12746){
var G__12747 = cljs.core.first(seq12746);
var seq12746__$1 = cljs.core.next(seq12746);
var G__12748 = cljs.core.first(seq12746__$1);
var seq12746__$2 = cljs.core.next(seq12746__$1);
var G__12749 = cljs.core.first(seq12746__$2);
var seq12746__$3 = cljs.core.next(seq12746__$2);
var G__12750 = cljs.core.first(seq12746__$3);
var seq12746__$4 = cljs.core.next(seq12746__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__12747,G__12748,G__12749,G__12750,seq12746__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);

cljs.core$macros._.cljs$lang$macro = true;
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(){
var args12757 = [];
var len__5200__auto___12765 = arguments.length;
var i__5201__auto___12766 = (0);
while(true){
if((i__5201__auto___12766 < len__5200__auto___12765)){
args12757.push((arguments[i__5201__auto___12766]));

var G__12767 = (i__5201__auto___12766 + (1));
i__5201__auto___12766 = G__12767;
continue;
} else {
}
break;
}

var G__12764 = args12757.length;
switch (G__12764) {
case 2:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5219__auto__ = (new cljs.core.IndexedSeq(args12757.slice((4)),(0)));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5219__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,y),x),"(~{} * ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*","cljs.core/*",-857794892,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*","cljs.core/*",-857794892,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,y)], 0))))),cljs.core.array_seq([more], 0))));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq12758){
var G__12759 = cljs.core.first(seq12758);
var seq12758__$1 = cljs.core.next(seq12758);
var G__12760 = cljs.core.first(seq12758__$1);
var seq12758__$2 = cljs.core.next(seq12758__$1);
var G__12761 = cljs.core.first(seq12758__$2);
var seq12758__$3 = cljs.core.next(seq12758__$2);
var G__12762 = cljs.core.first(seq12758__$3);
var seq12758__$4 = cljs.core.next(seq12758__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__12759,G__12760,G__12761,G__12762,seq12758__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);

cljs.core$macros._STAR_.cljs$lang$macro = true;
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(){
var args12769 = [];
var len__5200__auto___12777 = arguments.length;
var i__5201__auto___12778 = (0);
while(true){
if((i__5201__auto___12778 < len__5200__auto___12777)){
args12769.push((arguments[i__5201__auto___12778]));

var G__12779 = (i__5201__auto___12778 + (1));
i__5201__auto___12778 = G__12779;
continue;
} else {
}
break;
}

var G__12776 = args12769.length;
switch (G__12776) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5219__auto__ = (new cljs.core.IndexedSeq(args12769.slice((4)),(0)));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5219__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","/","cljs.core//",-696756880,null)),cljs.core._conj(cljs.core.List.EMPTY,(1)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,x)], 0))));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,y),x),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","/","cljs.core//",-696756880,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","/","cljs.core//",-696756880,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,y)], 0))))),cljs.core.array_seq([more], 0))));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq12770){
var G__12771 = cljs.core.first(seq12770);
var seq12770__$1 = cljs.core.next(seq12770);
var G__12772 = cljs.core.first(seq12770__$1);
var seq12770__$2 = cljs.core.next(seq12770__$1);
var G__12773 = cljs.core.first(seq12770__$2);
var seq12770__$3 = cljs.core.next(seq12770__$2);
var G__12774 = cljs.core.first(seq12770__$3);
var seq12770__$4 = cljs.core.next(seq12770__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__12771,G__12772,G__12773,G__12774,seq12770__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);

cljs.core$macros._SLASH_.cljs$lang$macro = true;
cljs.core$macros.divide = (function cljs$core$macros$divide(){
var args12781 = [];
var len__5200__auto___12789 = arguments.length;
var i__5201__auto___12790 = (0);
while(true){
if((i__5201__auto___12790 < len__5200__auto___12789)){
args12781.push((arguments[i__5201__auto___12790]));

var G__12791 = (i__5201__auto___12790 + (1));
i__5201__auto___12790 = G__12791;
continue;
} else {
}
break;
}

var G__12788 = args12781.length;
switch (G__12788) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5219__auto__ = (new cljs.core.IndexedSeq(args12781.slice((4)),(0)));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5219__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj(cljs.core.List.EMPTY,(1)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,x)], 0))));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,y),x),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,y)], 0))))),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq12782){
var G__12783 = cljs.core.first(seq12782);
var seq12782__$1 = cljs.core.next(seq12782);
var G__12784 = cljs.core.first(seq12782__$1);
var seq12782__$2 = cljs.core.next(seq12782__$1);
var G__12785 = cljs.core.first(seq12782__$2);
var seq12782__$3 = cljs.core.next(seq12782__$2);
var G__12786 = cljs.core.first(seq12782__$3);
var seq12782__$4 = cljs.core.next(seq12782__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__12783,G__12784,G__12785,G__12786,seq12782__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);

cljs.core$macros.divide.cljs$lang$macro = true;
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(){
var args12793 = [];
var len__5200__auto___12801 = arguments.length;
var i__5201__auto___12802 = (0);
while(true){
if((i__5201__auto___12802 < len__5200__auto___12801)){
args12793.push((arguments[i__5201__auto___12802]));

var G__12803 = (i__5201__auto___12802 + (1));
i__5201__auto___12802 = G__12803;
continue;
} else {
}
break;
}

var G__12800 = args12793.length;
switch (G__12800) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5219__auto__ = (new cljs.core.IndexedSeq(args12793.slice((4)),(0)));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5219__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,y),x),"(~{} < ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,y)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<","cljs.core/<",1677496129,null)),cljs.core._conj(cljs.core.List.EMPTY,y),cljs.core.array_seq([more], 0)))))], 0))));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq12794){
var G__12795 = cljs.core.first(seq12794);
var seq12794__$1 = cljs.core.next(seq12794);
var G__12796 = cljs.core.first(seq12794__$1);
var seq12794__$2 = cljs.core.next(seq12794__$1);
var G__12797 = cljs.core.first(seq12794__$2);
var seq12794__$3 = cljs.core.next(seq12794__$2);
var G__12798 = cljs.core.first(seq12794__$3);
var seq12794__$4 = cljs.core.next(seq12794__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__12795,G__12796,G__12797,G__12798,seq12794__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros._LT_.cljs$lang$macro = true;
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(){
var args12805 = [];
var len__5200__auto___12813 = arguments.length;
var i__5201__auto___12814 = (0);
while(true){
if((i__5201__auto___12814 < len__5200__auto___12813)){
args12805.push((arguments[i__5201__auto___12814]));

var G__12815 = (i__5201__auto___12814 + (1));
i__5201__auto___12814 = G__12815;
continue;
} else {
}
break;
}

var G__12812 = args12805.length;
switch (G__12812) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5219__auto__ = (new cljs.core.IndexedSeq(args12805.slice((4)),(0)));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5219__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,y),x),"(~{} <= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,y)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null)),cljs.core._conj(cljs.core.List.EMPTY,y),cljs.core.array_seq([more], 0)))))], 0))));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq12806){
var G__12807 = cljs.core.first(seq12806);
var seq12806__$1 = cljs.core.next(seq12806);
var G__12808 = cljs.core.first(seq12806__$1);
var seq12806__$2 = cljs.core.next(seq12806__$1);
var G__12809 = cljs.core.first(seq12806__$2);
var seq12806__$3 = cljs.core.next(seq12806__$2);
var G__12810 = cljs.core.first(seq12806__$3);
var seq12806__$4 = cljs.core.next(seq12806__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__12807,G__12808,G__12809,G__12810,seq12806__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);

cljs.core$macros._LT__EQ_.cljs$lang$macro = true;
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(){
var args12817 = [];
var len__5200__auto___12825 = arguments.length;
var i__5201__auto___12826 = (0);
while(true){
if((i__5201__auto___12826 < len__5200__auto___12825)){
args12817.push((arguments[i__5201__auto___12826]));

var G__12827 = (i__5201__auto___12826 + (1));
i__5201__auto___12826 = G__12827;
continue;
} else {
}
break;
}

var G__12824 = args12817.length;
switch (G__12824) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5219__auto__ = (new cljs.core.IndexedSeq(args12817.slice((4)),(0)));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5219__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,y),x),"(~{} > ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,y)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core",">","cljs.core/>",2020535938,null)),cljs.core._conj(cljs.core.List.EMPTY,y),cljs.core.array_seq([more], 0)))))], 0))));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq12818){
var G__12819 = cljs.core.first(seq12818);
var seq12818__$1 = cljs.core.next(seq12818);
var G__12820 = cljs.core.first(seq12818__$1);
var seq12818__$2 = cljs.core.next(seq12818__$1);
var G__12821 = cljs.core.first(seq12818__$2);
var seq12818__$3 = cljs.core.next(seq12818__$2);
var G__12822 = cljs.core.first(seq12818__$3);
var seq12818__$4 = cljs.core.next(seq12818__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__12819,G__12820,G__12821,G__12822,seq12818__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros._GT_.cljs$lang$macro = true;
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(){
var args12829 = [];
var len__5200__auto___12837 = arguments.length;
var i__5201__auto___12838 = (0);
while(true){
if((i__5201__auto___12838 < len__5200__auto___12837)){
args12829.push((arguments[i__5201__auto___12838]));

var G__12839 = (i__5201__auto___12838 + (1));
i__5201__auto___12838 = G__12839;
continue;
} else {
}
break;
}

var G__12836 = args12829.length;
switch (G__12836) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5219__auto__ = (new cljs.core.IndexedSeq(args12829.slice((4)),(0)));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5219__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,y),x),"(~{} >= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core",">=","cljs.core/>=",350096541,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,y)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core",">=","cljs.core/>=",350096541,null)),cljs.core._conj(cljs.core.List.EMPTY,y),cljs.core.array_seq([more], 0)))))], 0))));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq12830){
var G__12831 = cljs.core.first(seq12830);
var seq12830__$1 = cljs.core.next(seq12830);
var G__12832 = cljs.core.first(seq12830__$1);
var seq12830__$2 = cljs.core.next(seq12830__$1);
var G__12833 = cljs.core.first(seq12830__$2);
var seq12830__$3 = cljs.core.next(seq12830__$2);
var G__12834 = cljs.core.first(seq12830__$3);
var seq12830__$4 = cljs.core.next(seq12830__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__12831,G__12832,G__12833,G__12834,seq12830__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);

cljs.core$macros._GT__EQ_.cljs$lang$macro = true;
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(){
var args12841 = [];
var len__5200__auto___12849 = arguments.length;
var i__5201__auto___12850 = (0);
while(true){
if((i__5201__auto___12850 < len__5200__auto___12849)){
args12841.push((arguments[i__5201__auto___12850]));

var G__12851 = (i__5201__auto___12850 + (1));
i__5201__auto___12850 = G__12851;
continue;
} else {
}
break;
}

var G__12848 = args12841.length;
switch (G__12848) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5219__auto__ = (new cljs.core.IndexedSeq(args12841.slice((4)),(0)));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5219__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,y),x),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,y)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","==","cljs.core/==",-632471488,null)),cljs.core._conj(cljs.core.List.EMPTY,y),cljs.core.array_seq([more], 0)))))], 0))));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq12842){
var G__12843 = cljs.core.first(seq12842);
var seq12842__$1 = cljs.core.next(seq12842);
var G__12844 = cljs.core.first(seq12842__$1);
var seq12842__$2 = cljs.core.next(seq12842__$1);
var G__12845 = cljs.core.first(seq12842__$2);
var seq12842__$3 = cljs.core.next(seq12842__$2);
var G__12846 = cljs.core.first(seq12842__$3);
var seq12842__$4 = cljs.core.next(seq12842__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__12843,G__12844,G__12845,G__12846,seq12842__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);

cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;
cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(1))], 0))));
});

cljs.core$macros.dec.cljs$lang$macro = true;
cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(1))], 0))));
});

cljs.core$macros.inc.cljs$lang$macro = true;
cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});

cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;
cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});

cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;
cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});

cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;
cljs.core$macros.max = (function cljs$core$macros$max(){
var args12855 = [];
var len__5200__auto___12863 = arguments.length;
var i__5201__auto___12864 = (0);
while(true){
if((i__5201__auto___12864 < len__5200__auto___12863)){
args12855.push((arguments[i__5201__auto___12864]));

var G__12865 = (i__5201__auto___12864 + (1));
i__5201__auto___12864 = G__12865;
continue;
} else {
}
break;
}

var G__12862 = args12855.length;
switch (G__12862) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5219__auto__ = (new cljs.core.IndexedSeq(args12855.slice((4)),(0)));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5219__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__12853__auto__","x__12853__auto__",-214233446,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__12854__auto__","y__12854__auto__",1257895287,null)),cljs.core._conj(cljs.core.List.EMPTY,y)], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj(cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__12853__auto__","x__12853__auto__",-214233446,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__12854__auto__","y__12854__auto__",1257895287,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__12853__auto__","x__12853__auto__",-214233446,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__12854__auto__","y__12854__auto__",1257895287,null))], 0)))))], 0))));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","max","cljs.core/max",1303529718,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","max","cljs.core/max",1303529718,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,y)], 0))))),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq12856){
var G__12857 = cljs.core.first(seq12856);
var seq12856__$1 = cljs.core.next(seq12856);
var G__12858 = cljs.core.first(seq12856__$1);
var seq12856__$2 = cljs.core.next(seq12856__$1);
var G__12859 = cljs.core.first(seq12856__$2);
var seq12856__$3 = cljs.core.next(seq12856__$2);
var G__12860 = cljs.core.first(seq12856__$3);
var seq12856__$4 = cljs.core.next(seq12856__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__12857,G__12858,G__12859,G__12860,seq12856__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);

cljs.core$macros.max.cljs$lang$macro = true;
cljs.core$macros.min = (function cljs$core$macros$min(){
var args12869 = [];
var len__5200__auto___12877 = arguments.length;
var i__5201__auto___12878 = (0);
while(true){
if((i__5201__auto___12878 < len__5200__auto___12877)){
args12869.push((arguments[i__5201__auto___12878]));

var G__12879 = (i__5201__auto___12878 + (1));
i__5201__auto___12878 = G__12879;
continue;
} else {
}
break;
}

var G__12876 = args12869.length;
switch (G__12876) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5219__auto__ = (new cljs.core.IndexedSeq(args12869.slice((4)),(0)));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5219__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__12867__auto__","x__12867__auto__",1251169208,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__12868__auto__","y__12868__auto__",1698028875,null)),cljs.core._conj(cljs.core.List.EMPTY,y)], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj(cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__12867__auto__","x__12867__auto__",1251169208,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__12868__auto__","y__12868__auto__",1698028875,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__12867__auto__","x__12867__auto__",1251169208,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__12868__auto__","y__12868__auto__",1698028875,null))], 0)))))], 0))));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","min","cljs.core/min",1166879476,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","min","cljs.core/min",1166879476,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,y)], 0))))),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq12870){
var G__12871 = cljs.core.first(seq12870);
var seq12870__$1 = cljs.core.next(seq12870);
var G__12872 = cljs.core.first(seq12870__$1);
var seq12870__$2 = cljs.core.next(seq12870__$1);
var G__12873 = cljs.core.first(seq12870__$2);
var seq12870__$3 = cljs.core.next(seq12870__$2);
var G__12874 = cljs.core.first(seq12870__$3);
var seq12870__$4 = cljs.core.next(seq12870__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__12871,G__12872,G__12873,G__12874,seq12870__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);

cljs.core$macros.min.cljs$lang$macro = true;
cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,div),num),"(~{} % ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_mod.cljs$lang$macro = true;
cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,x),"(~ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_not.cljs$lang$macro = true;
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(){
var args12881 = [];
var len__5200__auto___12889 = arguments.length;
var i__5201__auto___12890 = (0);
while(true){
if((i__5201__auto___12890 < len__5200__auto___12889)){
args12881.push((arguments[i__5201__auto___12890]));

var G__12891 = (i__5201__auto___12890 + (1));
i__5201__auto___12890 = G__12891;
continue;
} else {
}
break;
}

var G__12888 = args12881.length;
switch (G__12888) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5219__auto__ = (new cljs.core.IndexedSeq(args12881.slice((4)),(0)));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5219__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,y),x),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","bit-and","cljs.core/bit-and",-617818210,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","bit-and","cljs.core/bit-and",-617818210,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,y)], 0))))),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq12882){
var G__12883 = cljs.core.first(seq12882);
var seq12882__$1 = cljs.core.next(seq12882);
var G__12884 = cljs.core.first(seq12882__$1);
var seq12882__$2 = cljs.core.next(seq12882__$1);
var G__12885 = cljs.core.first(seq12882__$2);
var seq12882__$3 = cljs.core.next(seq12882__$2);
var G__12886 = cljs.core.first(seq12882__$3);
var seq12882__$4 = cljs.core.next(seq12882__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__12883,G__12884,G__12885,G__12886,seq12882__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);

cljs.core$macros.bit_and.cljs$lang$macro = true;
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(){
var args12893 = [];
var len__5200__auto___12901 = arguments.length;
var i__5201__auto___12902 = (0);
while(true){
if((i__5201__auto___12902 < len__5200__auto___12901)){
args12893.push((arguments[i__5201__auto___12902]));

var G__12903 = (i__5201__auto___12902 + (1));
i__5201__auto___12902 = G__12903;
continue;
} else {
}
break;
}

var G__12900 = args12893.length;
switch (G__12900) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5219__auto__ = (new cljs.core.IndexedSeq(args12893.slice((4)),(0)));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5219__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,y),x),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,y)], 0))))),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq12894){
var G__12895 = cljs.core.first(seq12894);
var seq12894__$1 = cljs.core.next(seq12894);
var G__12896 = cljs.core.first(seq12894__$1);
var seq12894__$2 = cljs.core.next(seq12894__$1);
var G__12897 = cljs.core.first(seq12894__$2);
var seq12894__$3 = cljs.core.next(seq12894__$2);
var G__12898 = cljs.core.first(seq12894__$3);
var seq12894__$4 = cljs.core.next(seq12894__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__12895,G__12896,G__12897,G__12898,seq12894__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);

cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(){
var args12905 = [];
var len__5200__auto___12913 = arguments.length;
var i__5201__auto___12914 = (0);
while(true){
if((i__5201__auto___12914 < len__5200__auto___12913)){
args12905.push((arguments[i__5201__auto___12914]));

var G__12915 = (i__5201__auto___12914 + (1));
i__5201__auto___12914 = G__12915;
continue;
} else {
}
break;
}

var G__12912 = args12905.length;
switch (G__12912) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5219__auto__ = (new cljs.core.IndexedSeq(args12905.slice((4)),(0)));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5219__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,y),x),"(~{} | ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","bit-or","cljs.core/bit-or",1134521392,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","bit-or","cljs.core/bit-or",1134521392,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,y)], 0))))),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq12906){
var G__12907 = cljs.core.first(seq12906);
var seq12906__$1 = cljs.core.next(seq12906);
var G__12908 = cljs.core.first(seq12906__$1);
var seq12906__$2 = cljs.core.next(seq12906__$1);
var G__12909 = cljs.core.first(seq12906__$2);
var seq12906__$3 = cljs.core.next(seq12906__$2);
var G__12910 = cljs.core.first(seq12906__$3);
var seq12906__$4 = cljs.core.next(seq12906__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__12907,G__12908,G__12909,G__12910,seq12906__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);

cljs.core$macros.bit_or.cljs$lang$macro = true;
cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))));
});

cljs.core$macros.int$.cljs$lang$macro = true;
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(){
var args12917 = [];
var len__5200__auto___12925 = arguments.length;
var i__5201__auto___12926 = (0);
while(true){
if((i__5201__auto___12926 < len__5200__auto___12925)){
args12917.push((arguments[i__5201__auto___12926]));

var G__12927 = (i__5201__auto___12926 + (1));
i__5201__auto___12926 = G__12927;
continue;
} else {
}
break;
}

var G__12924 = args12917.length;
switch (G__12924) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5219__auto__ = (new cljs.core.IndexedSeq(args12917.slice((4)),(0)));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5219__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,y),x),"(~{} ^ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","bit-xor","cljs.core/bit-xor",1480189292,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","bit-xor","cljs.core/bit-xor",1480189292,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,y)], 0))))),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq12918){
var G__12919 = cljs.core.first(seq12918);
var seq12918__$1 = cljs.core.next(seq12918);
var G__12920 = cljs.core.first(seq12918__$1);
var seq12918__$2 = cljs.core.next(seq12918__$1);
var G__12921 = cljs.core.first(seq12918__$2);
var seq12918__$3 = cljs.core.next(seq12918__$2);
var G__12922 = cljs.core.first(seq12918__$3);
var seq12918__$4 = cljs.core.next(seq12918__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__12919,G__12920,G__12921,G__12922,seq12918__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);

cljs.core$macros.bit_xor.cljs$lang$macro = true;
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(){
var args12929 = [];
var len__5200__auto___12937 = arguments.length;
var i__5201__auto___12938 = (0);
while(true){
if((i__5201__auto___12938 < len__5200__auto___12937)){
args12929.push((arguments[i__5201__auto___12938]));

var G__12939 = (i__5201__auto___12938 + (1));
i__5201__auto___12938 = G__12939;
continue;
} else {
}
break;
}

var G__12936 = args12929.length;
switch (G__12936) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__5219__auto__ = (new cljs.core.IndexedSeq(args12929.slice((4)),(0)));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5219__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,y),x),"(~{} & ~~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","bit-and-not","cljs.core/bit-and-not",-929778682,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","bit-and-not","cljs.core/bit-and-not",-929778682,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,y)], 0))))),cljs.core.array_seq([more], 0))));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq12930){
var G__12931 = cljs.core.first(seq12930);
var seq12930__$1 = cljs.core.next(seq12930);
var G__12932 = cljs.core.first(seq12930__$1);
var seq12930__$2 = cljs.core.next(seq12930__$1);
var G__12933 = cljs.core.first(seq12930__$2);
var seq12930__$3 = cljs.core.next(seq12930__$2);
var G__12934 = cljs.core.first(seq12930__$3);
var seq12930__$4 = cljs.core.next(seq12930__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__12931,G__12932,G__12933,G__12934,seq12930__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);

cljs.core$macros.bit_and_not.cljs$lang$macro = true;
cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,n),x),"(~{} & ~(1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_clear.cljs$lang$macro = true;
cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,n),x),"(~{} ^ (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_flip.cljs$lang$macro = true;
cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,n),x),"((~{} & (1 << ~{})) != 0)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.bit_test.cljs$lang$macro = true;
cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,n),x),"(~{} << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_left.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,n),x),"(~{} >> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,n),x),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;
cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,n),x),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,n),x),"(~{} | (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_set.cljs$lang$macro = true;
cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,shift),hash),"((~{} >>> ~{}) & 0x01f)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.mask.cljs$lang$macro = true;
cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mask","cljs.core$macros/mask",1575319768,null)),cljs.core._conj(cljs.core.List.EMPTY,hash),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,shift)], 0))))),"(1 << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bitpos.cljs$lang$macro = true;
cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if(cljs.core.symbol_QMARK_(hash_key)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("hash-key is substituted twice"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("clojure.core","symbol?","clojure.core/symbol?",1587987784,null),new cljs.core.Symbol(null,"hash-key","hash-key",1649875379,null))], 0)))].join('')));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__12941__auto__","h__12941__auto__",-981155133,null)),cljs.core._conj(cljs.core.List.EMPTY,hash_key)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__12941__auto__","h__12941__auto__",-981155133,null)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__12941__auto__","h__12941__auto__",-981155133,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__12941__auto__","h__12941__auto__",-981155133,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,hash_fn),cljs.core._conj(cljs.core.List.EMPTY,coll)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,hash_key),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__12941__auto__","h__12941__auto__",-981155133,null))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__12941__auto__","h__12941__auto__",-981155133,null))], 0)))))], 0)))))], 0))));
});

cljs.core$macros.caching_hash.cljs$lang$macro = true;
cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec(cljs.core.butlast(args));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),cljs.core._conj(cljs.core.List.EMPTY,name),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,doc),cljs.core._conj(cljs.core.List.EMPTY,meta),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cargs),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__12942__auto__","x__12942__auto__",1324079660,null))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,name),cargs,cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__12942__auto__","x__12942__auto__",1324079660,null))], 0)))))], 0))))))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,args),body))))], 0))));
});
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 * param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(){
var args__5207__auto__ = [];
var len__5200__auto___12950 = arguments.length;
var i__5201__auto___12951 = (0);
while(true){
if((i__5201__auto___12951 < len__5200__auto___12950)){
args__5207__auto__.push((arguments[i__5201__auto___12951]));

var G__12952 = (i__5201__auto___12951 + (1));
i__5201__auto___12951 = G__12952;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((6) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((6)),(0))):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__5208__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried(name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq12943){
var G__12944 = cljs.core.first(seq12943);
var seq12943__$1 = cljs.core.next(seq12943);
var G__12945 = cljs.core.first(seq12943__$1);
var seq12943__$2 = cljs.core.next(seq12943__$1);
var G__12946 = cljs.core.first(seq12943__$2);
var seq12943__$3 = cljs.core.next(seq12943__$2);
var G__12947 = cljs.core.first(seq12943__$3);
var seq12943__$4 = cljs.core.next(seq12943__$3);
var G__12948 = cljs.core.first(seq12943__$4);
var seq12943__$5 = cljs.core.next(seq12943__$4);
var G__12949 = cljs.core.first(seq12943__$5);
var seq12943__$6 = cljs.core.next(seq12943__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__12944,G__12945,G__12946,G__12947,G__12948,G__12949,seq12943__$6);
});

cljs.core$macros.defcurried.cljs$lang$macro = true;
cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,f1))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,clojure.walk.postwalk((function (p1__12953_SHARP_){
if(cljs.core.sequential_QMARK_(p1__12953_SHARP_)){
return ((cljs.core.vector_QMARK_(p1__12953_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.fromArray([k], true),p1__12953_SHARP_));
} else {
return p1__12953_SHARP_;
}
}),fkv)),cljs.core._conj(cljs.core.List.EMPTY,fkv)], 0))));
});
/**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__12954,fkv){
var vec__12956 = p__12954;
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12956,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12956,(1),null);
return cljs.core$macros.do_rfn(f1,k,fkv);
});

cljs.core$macros.rfn.cljs$lang$macro = true;
cljs.core$macros.protocol_prefix = (function cljs$core$macros$protocol_prefix(psym){
return [cljs.core.str([cljs.core.str(psym)].join('').replace(".","$").replace("/","$")),cljs.core.str("$")].join('');
});
cljs.core$macros.base_type = new cljs.core.PersistentArrayMap(null, 8, [null,"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"object",new cljs.core.Symbol(null,"string","string",-349010059,null),"string",new cljs.core.Symbol(null,"number","number",-1084057331,null),"number",new cljs.core.Symbol(null,"array","array",-440182315,null),"array",new cljs.core.Symbol(null,"function","function",-486723946,null),"function",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"boolean",new cljs.core.Symbol(null,"default","default",-347290801,null),"_"], null);
cljs.core$macros.js_base_type = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","Boolean","js/Boolean",1661145260,null),"boolean",new cljs.core.Symbol("js","String","js/String",-2070054036,null),"string",new cljs.core.Symbol("js","Array","js/Array",-423508366,null),"array",new cljs.core.Symbol("js","Object","js/Object",61215323,null),"object",new cljs.core.Symbol("js","Number","js/Number",-508133572,null),"number",new cljs.core.Symbol("js","Function","js/Function",-749892063,null),"function"], null);
/**
 * reify is a macro with the following structure:
 * 
 * (reify options* specs*)
 * 
 * Currently there are no options.
 * 
 * Each spec consists of the protocol name followed by zero
 * or more method bodies:
 * 
 * protocol
 * (methodName [args+] body)*
 * 
 * Methods should be supplied for all methods of the desired
 * protocol(s). You can also define overrides for Object methods. Note that
 * the first parameter must be supplied to correspond to the target object
 * ('this' in JavaScript parlance). Note also that recur calls
 * to the method head should *not* pass the target object, it will be supplied
 * automatically and can not be substituted.
 * 
 * recur works to method heads The method bodies of reify are lexical
 * closures, and can refer to the surrounding local scope:
 * 
 * (str (let [f "foo"]
 * (reify Object
 * (toString [this] f))))
 * == "foo"
 * 
 * (seq (let [f "foo"]
 * (reify ISeqable
 * (-seq [this] (-seq f)))))
 * == (\f \o \o))
 * 
 * reify always implements IMeta and IWithMeta and transfers meta
 * data of the form to the created object.
 * 
 * (meta ^{:k :v} (reify Object (toString [this] "foo")))
 * == {:k :v}
 */
cljs.core$macros.reify = (function cljs$core$macros$reify(){
var args__5207__auto__ = [];
var len__5200__auto___12960 = arguments.length;
var i__5201__auto___12961 = (0);
while(true){
if((i__5201__auto___12961 < len__5200__auto___12960)){
args__5207__auto__.push((arguments[i__5201__auto___12961]));

var G__12962 = (i__5201__auto___12961 + (1));
i__5201__auto___12961 = G__12962;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((2) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((2)),(0))):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5208__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("t"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
var meta_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("meta");
var this_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("_");
var locals = cljs.core.keys(new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(ns)].join(''),[cljs.core.str(t)].join(''))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","deftype","cljs.core$macros/deftype",1799045688,null)),cljs.core._conj(cljs.core.List.EMPTY,t),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(locals,cljs.core._conj(cljs.core.List.EMPTY,meta_sym)))))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",-1981666051,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,this_sym),cljs.core._conj(cljs.core.List.EMPTY,meta_sym)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj(cljs.core.List.EMPTY,t),cljs.core.array_seq([locals,cljs.core._conj(cljs.core.List.EMPTY,meta_sym)], 0)))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",-1459057517,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,this_sym)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,meta_sym)], 0))))),impls], 0)))))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj(cljs.core.List.EMPTY,t),cljs.core.array_seq([locals,cljs.core._conj(cljs.core.List.EMPTY,cljs.analyzer.elide_reader_meta(cljs.core.meta(_AMPERSAND_form)))], 0)))))], 0))));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq12957){
var G__12958 = cljs.core.first(seq12957);
var seq12957__$1 = cljs.core.next(seq12957);
var G__12959 = cljs.core.first(seq12957__$1);
var seq12957__$2 = cljs.core.next(seq12957__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__12958,G__12959,seq12957__$2);
});

cljs.core$macros.reify.cljs$lang$macro = true;
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(){
var args__5207__auto__ = [];
var len__5200__auto___12967 = arguments.length;
var i__5201__auto___12968 = (0);
while(true){
if((i__5201__auto___12968 < len__5200__auto___12967)){
args__5207__auto__.push((arguments[i__5201__auto___12968]));

var G__12969 = (i__5201__auto___12968 + (1));
i__5201__auto___12968 = G__12969;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((3) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((3)),(0))):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5208__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core._conj(cljs.core.List.EMPTY,expr)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([impls], 0))))),cljs.core._conj(cljs.core.List.EMPTY,x)], 0))));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq12963){
var G__12964 = cljs.core.first(seq12963);
var seq12963__$1 = cljs.core.next(seq12963);
var G__12965 = cljs.core.first(seq12963__$1);
var seq12963__$2 = cljs.core.next(seq12963__$1);
var G__12966 = cljs.core.first(seq12963__$2);
var seq12963__$3 = cljs.core.next(seq12963__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__12964,G__12965,G__12966,seq12963__$3);
});

cljs.core$macros.specify_BANG_.cljs$lang$macro = true;
/**
 * Identical to specify but does not mutate its first argument. The first
 * argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(){
var args__5207__auto__ = [];
var len__5200__auto___12974 = arguments.length;
var i__5201__auto___12975 = (0);
while(true){
if((i__5201__auto___12975 < len__5200__auto___12974)){
args__5207__auto__.push((arguments[i__5201__auto___12975]));

var G__12976 = (i__5201__auto___12975 + (1));
i__5201__auto___12975 = G__12976;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((3) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((3)),(0))):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5208__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clone","cljs.core/clone",1417120092,null)),cljs.core._conj(cljs.core.List.EMPTY,expr))))),cljs.core.array_seq([impls], 0))));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq12970){
var G__12971 = cljs.core.first(seq12970);
var seq12970__$1 = cljs.core.next(seq12970);
var G__12972 = cljs.core.first(seq12970__$1);
var seq12970__$2 = cljs.core.next(seq12970__$1);
var G__12973 = cljs.core.first(seq12970__$2);
var seq12970__$3 = cljs.core.next(seq12970__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__12971,G__12972,G__12973,seq12970__$3);
});

cljs.core$macros.specify.cljs$lang$macro = true;
cljs.core$macros.js_this = (function cljs$core$macros$js_this(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,"this"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_this.cljs$lang$macro = true;
/**
 * Defines a scope where JavaScript's implicit "this" is bound to the name provided.
 */
cljs.core$macros.this_as = (function cljs$core$macros$this_as(){
var args__5207__auto__ = [];
var len__5200__auto___12981 = arguments.length;
var i__5201__auto___12982 = (0);
while(true){
if((i__5201__auto___12982 < len__5200__auto___12981)){
args__5207__auto__.push((arguments[i__5201__auto___12982]));

var G__12983 = (i__5201__auto___12982 + (1));
i__5201__auto___12982 = G__12983;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((3) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((3)),(0))):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5208__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,name),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-this","cljs.core$macros/js-this",353597180,null))))))))))),cljs.core.array_seq([body], 0))));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq12977){
var G__12978 = cljs.core.first(seq12977);
var seq12977__$1 = cljs.core.next(seq12977);
var G__12979 = cljs.core.first(seq12977__$1);
var seq12977__$2 = cljs.core.next(seq12977__$1);
var G__12980 = cljs.core.first(seq12977__$2);
var seq12977__$3 = cljs.core.next(seq12977__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__12978,G__12979,G__12980,seq12977__$3);
});

cljs.core$macros.this_as.cljs$lang$macro = true;
cljs.core$macros.to_property = (function cljs$core$macros$to_property(sym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("-"),cljs.core.str(sym)].join(''));
});
cljs.core$macros.warn_and_update_protocol = (function cljs$core$macros$warn_and_update_protocol(p,type,env){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"Object","Object",61210754,null),p)){
return null;
} else {
var temp__4423__auto__ = cljs.analyzer.resolve_existing_var(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
if(cljs.core.truth_(temp__4423__auto__)){
var var$ = temp__4423__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
} else {
cljs.analyzer.warning(new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
}

if(cljs.core.truth_((function (){var and__4149__auto__ = new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__4149__auto__)){
var and__4149__auto____$1 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__4149__auto____$1)){
return cljs.core.not(new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p)));
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
})())){
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927)], null),((function (var$,temp__4423__auto__){
return (function (ns){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(ns,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p)),new cljs.core.Keyword(null,"impls","impls",-1314014853)], null),cljs.core.conj,type);
});})(var$,temp__4423__auto__))
);
} else {
return null;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"undeclared","undeclared",1446667347).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_))){
return cljs.analyzer.warning(new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
return null;
}
}
}
});
cljs.core$macros.resolve_var = (function cljs$core$macros$resolve_var(env,sym){
var ret = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),sym));
if(cljs.core.truth_(ret)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Can't resolve: "),cljs.core.str(sym)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"ret","ret",1172308713,null)], 0)))].join('')));
}

return ret;
});
cljs.core$macros.__GT_impl_map = (function cljs$core$macros$__GT_impl_map(impls){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = impls;
while(true){
if(cljs.core.seq(s)){
var G__12984 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret,cljs.core.first(s),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s)));
var G__12985 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(s));
ret = G__12984;
s = G__12985;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__12986){
var vec__12990 = p__12986;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12990,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12990,(1),null);
cljs.core$macros.warn_and_update_protocol(p,tsym,env);

var psym = (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(p) : resolve.call(null,p));
var pfn_prefix = cljs.core.subs.cljs$core$IFn$_invoke$arity$3([cljs.core.str(psym)].join(''),(0),cljs.core.inc([cljs.core.str(psym)].join('').indexOf("/")));
return cljs.core.cons(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj(cljs.core.List.EMPTY,psym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,type),cljs.core._conj(cljs.core.List.EMPTY,true)], 0)))),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (psym,pfn_prefix,vec__12990,p,sigs){
return (function (p__12991){
var vec__12992 = p__12991;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12992,(0),null);
var meths = cljs.core.nthnext(vec__12992,(1));
var form = vec__12992;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(pfn_prefix),cljs.core.str(f)].join(''))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,type),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths))),cljs.core.meta(form)))], 0))));
});})(psym,pfn_prefix,vec__12990,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__5055__auto__ = (function (){var G__12993 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12993) : cljs.core.atom.call(null,G__12993));
})();
var prefer_table__5056__auto__ = (function (){var G__12994 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12994) : cljs.core.atom.call(null,G__12994));
})();
var method_cache__5057__auto__ = (function (){var G__12995 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12995) : cljs.core.atom.call(null,G__12995));
})();
var cached_hierarchy__5058__auto__ = (function (){var G__12996 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12996) : cljs.core.atom.call(null,G__12996));
})();
var hierarchy__5059__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core$macros","extend-prefix"),((function (method_table__5055__auto__,prefer_table__5056__auto__,method_cache__5057__auto__,cached_hierarchy__5058__auto__,hierarchy__5059__auto__){
return (function (tsym,sym){
return new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tsym));
});})(method_table__5055__auto__,prefer_table__5056__auto__,method_cache__5057__auto__,cached_hierarchy__5058__auto__,hierarchy__5059__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5059__auto__,method_table__5055__auto__,prefer_table__5056__auto__,method_cache__5057__auto__,cached_hierarchy__5058__auto__));
})();
}
cljs.core$macros.extend_prefix.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"instance","instance",-2121349050),(function (tsym,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),cljs.core._conj(cljs.core.List.EMPTY,tsym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core$macros.to_property(sym))], 0))));
}));
cljs.core$macros.extend_prefix.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tsym,sym){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),cljs.core._conj(cljs.core.List.EMPTY,tsym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core$macros.to_property(sym))], 0))));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__12997){
var vec__13000 = p__12997;
var vec__13001 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13000,(0),null);
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13001,(0),null);
var args = cljs.core.nthnext(vec__13001,(1));
var sig = vec__13001;
var body = cljs.core.nthnext(vec__13000,(1));
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body)),cljs.core.vec(args));
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__13002){
var vec__13005 = p__13002;
var vec__13006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13005,(0),null);
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13006,(0),null);
var args = cljs.core.nthnext(vec__13006,(1));
var sig = vec__13006;
var body = cljs.core.nthnext(vec__13005,(1));
var self_sym = cljs.core.with_meta(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.cons(self_sym,args))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),cljs.core._conj(cljs.core.List.EMPTY,self_sym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,this$),cljs.core._conj(cljs.core.List.EMPTY,self_sym)))))),cljs.core.array_seq([body], 0)))))], 0))))))));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__13007){
var vec__13010 = p__13007;
var vec__13011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13010,(0),null);
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13011,(0),null);
var args = cljs.core.nthnext(vec__13011,(1));
var sig = vec__13011;
var body = cljs.core.nthnext(vec__13010,(1));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(args)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type)),cljs.core.array_seq([body], 0))))))));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__13012){
var vec__13015 = p__13012;
var vec__13016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13015,(0),null);
var this$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13016,(0),null);
var args = cljs.core.nthnext(vec__13016,(1));
var sig = vec__13016;
var body = cljs.core.nthnext(vec__13015,(1));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.cons(cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),args))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),cljs.core._conj(cljs.core.List.EMPTY,this$),cljs.core.array_seq([body], 0))))))));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13021){
var vec__13022 = p__13021;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13022,(0),null);
var meths = cljs.core.nthnext(vec__13022,(1));
var form = vec__13022;
var vec__13023 = ((cljs.core.vector_QMARK_(cljs.core.first(meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest(form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13023,(0),null);
var meths__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13023,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,(cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,f__$1) : cljs.core$macros.extend_prefix.call(null,type_sym,f__$1))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__13023,f__$1,meths__$1,vec__13022,f,meths,form){
return (function (p1__13017_SHARP_){
return cljs.core$macros.adapt_obj_params(type,p1__13017_SHARP_);
});})(vec__13023,f__$1,meths__$1,vec__13022,f,meths,form))
,meths__$1)))),cljs.core.meta(form)))], 0))));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__13025){
var vec__13029 = p__13025;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13029,(0),null);
var meths = cljs.core.nthnext(vec__13029,(1));
var form = vec__13029;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__13029,f,meths,form){
return (function (meth){
var arity = cljs.core.count(cljs.core.first(meth));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__13030 = type_sym;
var G__13031 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''));
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__13030,G__13031) : cljs.core$macros.extend_prefix.call(null,G__13030,G__13031));
})()),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core._conj(cljs.core.List.EMPTY,meth)))),cljs.core.meta(form)))], 0))));
});})(vec__13029,f,meths,form))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__13029,f,meths,form){
return (function (p1__13024_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params(type,p1__13024_SHARP_);
});})(vec__13029,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__13033){
var vec__13035 = p__13033;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13035,(0),null);
var meths = cljs.core.nthnext(vec__13035,(1));
var form = vec__13035;
var meths__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__13035,f,meths,form){
return (function (p1__13032_SHARP_){
return cljs.core$macros.adapt_ifn_params(type,p1__13032_SHARP_);
});})(vec__13035,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta(new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
var argsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("args");
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,(cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,new cljs.core.Symbol(null,"call","call",1120531661,null)) : cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"call","call",1120531661,null)))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths__$1))),cljs.core.meta(form)))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,(cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,new cljs.core.Symbol(null,"apply","apply",-1334050276,null)) : cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"apply","apply",-1334050276,null)))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),cljs.core._conj(cljs.core.List.EMPTY,this_sym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-call",".-call",1760541695,null)),cljs.core._conj(cljs.core.List.EMPTY,this_sym))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,this_sym),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".concat",".concat",1180408684,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","array","cljs.core/array",486685886,null)),cljs.core._conj(cljs.core.List.EMPTY,this_sym))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),cljs.core._conj(cljs.core.List.EMPTY,argsym)))))], 0)))))], 0)))))], 0)))))], 0)))),cljs.core.meta(form)))], 0))))], null),cljs.core$macros.ifn_invoke_methods(type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__13036){
var vec__13044 = p__13036;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13044,(0),null);
var meths = cljs.core.nthnext(vec__13044,(1));
var form = vec__13044;
var pf = [cljs.core.str(pprefix),cljs.core.str(f)].join('');
if(cljs.core.vector_QMARK_(cljs.core.first(meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__13045 = type_sym;
var G__13046 = [cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count(cljs.core.first(meth)))].join('');
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__13045,G__13046) : cljs.core$macros.extend_prefix.call(null,G__13045,G__13046));
})()),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core$macros.adapt_proto_params(type,meth)))),cljs.core.meta(form)))], 0))))], null);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (pf,vec__13044,f,meths,form){
return (function (p__13047){
var vec__13048 = p__13047;
var sig = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13048,(0),null);
var body = cljs.core.nthnext(vec__13048,(1));
var meth = vec__13048;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__13049 = type_sym;
var G__13050 = [cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count(sig))].join('');
return (cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(G__13049,G__13050) : cljs.core$macros.extend_prefix.call(null,G__13049,G__13050));
})()),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core$macros.adapt_proto_params(type,meth))))),cljs.core.meta(form)))], 0))));
});})(pf,vec__13044,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__13051){
var vec__13053 = p__13051;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13053,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13053,(1),null);
cljs.core$macros.warn_and_update_protocol(p,type,env);

var psym = (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(p) : resolve.call(null,p));
var pprefix = cljs.core$macros.protocol_prefix(psym);
var skip_flag = cljs.core.set(new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(type_sym)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods(type,type_sym,sigs);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_((skip_flag.cljs$core$IFn$_invoke$arity$1 ? skip_flag.cljs$core$IFn$_invoke$arity$1(psym) : skip_flag.call(null,psym)))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,(cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2 ? cljs.core$macros.extend_prefix.cljs$core$IFn$_invoke$arity$2(type_sym,pprefix) : cljs.core$macros.extend_prefix.call(null,type_sym,pprefix))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))], null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (psym,pprefix,skip_flag,vec__13053,p,sigs){
return (function (sig){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods(type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_(pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__13053,p,sigs))
,cljs.core.array_seq([sigs], 0)));
}
});
cljs.core$macros.validate_impl_sigs = (function cljs$core$macros$validate_impl_sigs(env,p,method){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return null;
} else {
var var$ = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
var minfo = new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843).cljs$core$IFn$_invoke$arity$1(var$));
var vec__13055 = ((cljs.core.vector_QMARK_(cljs.core.second(method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(method),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(method),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest(method))], null));
var fname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13055,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13055,(1),null);
var decmeths = cljs.core.get.cljs$core$IFn$_invoke$arity$3(minfo,fname,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

var sigs__$1 = sigs;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq(sigs__$1)){
var sig = cljs.core.first(sigs__$1);
var c = cljs.core.count(sig);
if(cljs.core.contains_QMARK_(seen,c)){
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname], null));
} else {
}

if((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))) && (cljs.core.not(cljs.core.some(cljs.core.PersistentHashSet.fromArray([c], true),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,decmeths))))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"invalid-arity","invalid-arity",1335461949),c], null));
} else {
}

var G__13056 = cljs.core.next(sigs__$1);
var G__13057 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,c);
sigs__$1 = G__13056;
seen = G__13057;
continue;
} else {
return null;
}
break;
}
}
});
cljs.core$macros.validate_impls = (function cljs$core$macros$validate_impls(env,impls){
var protos = cljs.core.PersistentHashSet.EMPTY;
var impls__$1 = impls;
while(true){
if(cljs.core.seq(impls__$1)){
var proto = cljs.core.first(impls__$1);
var methods$ = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(impls__$1));
var impls__$2 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(impls__$1));
if(cljs.core.contains_QMARK_(protos,proto)){
cljs.analyzer.warning(new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto], null));
} else {
}

var seen_13060 = cljs.core.PersistentHashSet.EMPTY;
var methods_13061__$1 = methods$;
while(true){
if(cljs.core.seq(methods_13061__$1)){
var vec__13059_13062 = cljs.core.first(methods_13061__$1);
var fname_13063 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13059_13062,(0),null);
var method_13064 = vec__13059_13062;
if(cljs.core.contains_QMARK_(seen_13060,fname_13063)){
cljs.analyzer.warning(new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_13063], null));
} else {
}

cljs.core$macros.validate_impl_sigs(env,proto,method_13064);

var G__13065 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen_13060,fname_13063);
var G__13066 = cljs.core.next(methods_13061__$1);
seen_13060 = G__13065;
methods_13061__$1 = G__13066;
continue;
} else {
}
break;
}

var G__13067 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(protos,proto);
var G__13068 = impls__$2;
protos = G__13067;
impls__$1 = G__13068;
continue;
} else {
return null;
}
break;
}
});
/**
 * Extend a type to a series of protocols. Useful when you are
 * supplying the definitions explicitly inline. Propagates the
 * type as a type hint on the first argument of all fns.
 * 
 * (extend-type MyType
 * ICounted
 * (-count [c] ...)
 * Foo
 * (bar [x y] ...)
 * (baz ([x] ...) ([x y & zs] ...))
 */
cljs.core$macros.extend_type = (function cljs$core$macros$extend_type(){
var args__5207__auto__ = [];
var len__5200__auto___13075 = arguments.length;
var i__5201__auto___13076 = (0);
while(true){
if((i__5201__auto___13076 < len__5200__auto___13075)){
args__5207__auto__.push((arguments[i__5201__auto___13076]));

var G__13077 = (i__5201__auto___13076 + (1));
i__5201__auto___13076 = G__13077;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((3) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((3)),(0))):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5208__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls(env,impls);
var resolve = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map(impls);
var vec__13074 = (function (){var temp__4423__auto__ = (cljs.core$macros.base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.base_type.call(null,type_sym));
if(cljs.core.truth_(temp__4423__auto__)){
var type = temp__4423__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(type_sym) : resolve.call(null,type_sym)),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13074,(0),null);
var assign_impls = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13074,(1),null);
if(cljs.core.truth_((function (){var and__4149__auto__ = new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__4149__auto__)){
return (cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.js_base_type.call(null,type_sym));
} else {
return and__4149__auto__;
}
})())){
cljs.analyzer.warning(new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075),type_sym,new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875),(cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.js_base_type.cljs$core$IFn$_invoke$arity$1(type_sym) : cljs.core$macros.js_base_type.call(null,type_sym))], null));
} else {
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (env,_,resolve,impl_map,vec__13074,type,assign_impls){
return (function (p1__13069_SHARP_){
return (assign_impls.cljs$core$IFn$_invoke$arity$5 ? assign_impls.cljs$core$IFn$_invoke$arity$5(env,resolve,type_sym,type,p1__13069_SHARP_) : assign_impls.call(null,env,resolve,type_sym,type,p1__13069_SHARP_));
});})(env,_,resolve,impl_map,vec__13074,type,assign_impls))
,cljs.core.array_seq([impl_map], 0)))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq13070){
var G__13071 = cljs.core.first(seq13070);
var seq13070__$1 = cljs.core.next(seq13070);
var G__13072 = cljs.core.first(seq13070__$1);
var seq13070__$2 = cljs.core.next(seq13070__$1);
var G__13073 = cljs.core.first(seq13070__$2);
var seq13070__$3 = cljs.core.next(seq13070__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__13071,G__13072,G__13073,seq13070__$3);
});

cljs.core$macros.extend_type.cljs$lang$macro = true;
cljs.core$macros.prepare_protocol_masks = (function cljs$core$macros$prepare_protocol_masks(env,impls){
var resolve = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map(impls);
var fpp_pbs = cljs.core.seq(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.fast_path_protocols,cljs.core.map.cljs$core$IFn$_invoke$arity$2(resolve,cljs.core.keys(impl_map))));
if(fpp_pbs){
var fpps = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.contains_QMARK_,cljs.core$macros.fast_path_protocols),cljs.core.map.cljs$core$IFn$_invoke$arity$2(resolve,cljs.core.keys(impl_map))));
var parts = (function (){var parts = cljs.core.group_by(cljs.core.first,fpp_pbs);
var parts__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,cljs.core.peek),cljs.core.val)),parts));
var parts__$2 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce,cljs.core.bit_or),cljs.core.val)),parts__$1));
return parts__$2;
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fpps,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (fpps,parts,resolve,impl_map,fpp_pbs){
return (function (ps,p){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(ps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(0)));
});})(fpps,parts,resolve,impl_map,fpp_pbs))
,parts,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core$macros.fast_path_protocol_partitions_count))], null);
} else {
return null;
}
});
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__13079){
var vec__13081 = p__13079;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13081,(0),null);
var sigs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13081,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(cljs.core.cons(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__13081,f,sigs){
return (function (p1__13078_SHARP_){
return cljs.core.cons(cljs.core.second(p1__13078_SHARP_),cljs.core.nnext(p1__13078_SHARP_));
});})(vec__13081,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(){
var args13082 = [];
var len__5200__auto___13085 = arguments.length;
var i__5201__auto___13086 = (0);
while(true){
if((i__5201__auto___13086 < len__5200__auto___13085)){
args13082.push((arguments[i__5201__auto___13086]));

var G__13087 = (i__5201__auto___13086 + (1));
i__5201__auto___13086 = G__13087;
continue;
} else {
}
break;
}

var G__13084 = args13082.length;
switch (G__13084) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13082.length)].join('')));

}
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3 = (function (type,specs,fields){
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4(type,specs,fields,false);
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4 = (function (type,specs,fields,inline){
var annots = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.analyzer","type","cljs.analyzer/type",478749742),type,new cljs.core.Keyword("cljs.analyzer","protocol-impl","cljs.analyzer/protocol-impl",-1523935409),true,new cljs.core.Keyword("cljs.analyzer","protocol-inline","cljs.analyzer/protocol-inline",-1611519026),inline], null);
var ret = cljs.core.PersistentVector.EMPTY;
var specs__$1 = specs;
while(true){
if(cljs.core.seq(specs__$1)){
var p = cljs.core.first(specs__$1);
var ret__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,p),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core$macros.annotate_specs,annots),cljs.core.PersistentVector.EMPTY,cljs.core.group_by(cljs.core.first,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(specs__$1)))));
var specs__$2 = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,cljs.core.next(specs__$1));
var G__13089 = ret__$1;
var G__13090 = specs__$2;
ret = G__13089;
specs__$1 = G__13090;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;
cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13091_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__13091_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(new cljs.core.Symbol(null,"->","->",-2139605430,null)),cljs.core.str(rsym)].join('')),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"positional","positional",-203580463)));
var field_values = (cljs.core.truth_(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(rsym)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(fields,null,cljs.core.array_seq([null,null], 0)):fields);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),cljs.core._conj(cljs.core.List.EMPTY,fn_name),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj(cljs.core.List.EMPTY,rname),cljs.core.array_seq([field_values], 0)))))], 0))));
});
cljs.core$macros.validate_fields = (function cljs$core$macros$validate_fields(case$,name,fields){
if(cljs.core.vector_QMARK_(fields)){
return null;
} else {
throw (new Error([cljs.core.str(case$),cljs.core.str(" "),cljs.core.str(name),cljs.core.str(", no fields vector given.")].join('')));
}
});
/**
 * (deftype name [fields*]  options* specs*)
 * 
 * Currently there are no options.
 * 
 * Each spec consists of a protocol or interface name followed by zero
 * or more method bodies:
 * 
 * protocol-or-Object
 * (methodName [args*] body)*
 * 
 * The type will have the (by default, immutable) fields named by
 * fields, which can have type hints. Protocols and methods
 * are optional. The only methods that can be supplied are those
 * declared in the protocols/interfaces.  Note that method bodies are
 * not closures, the local environment includes only the named fields,
 * and those fields can be accessed directly. Fields can be qualified
 * with the metadata :mutable true at which point (set! afield aval) will be
 * supported in method bodies. Note well that mutable fields are extremely
 * difficult to use correctly, and are present only to facilitate the building
 * of higherlevel constructs, such as ClojureScript's reference types, in
 * ClojureScript itself. They are for experts only - if the semantics and
 * implications of :mutable are not immediately apparent to you, you should not
 * be using them.
 * 
 * Method definitions take the form:
 * 
 * (methodname [args*] body)
 * 
 * The argument and return types can be hinted on the arg and
 * methodname symbols. If not supplied, they will be inferred, so type
 * hints should be reserved for disambiguation.
 * 
 * Methods should be supplied for all methods of the desired
 * protocol(s). You can also define overrides for methods of Object. Note that
 * a parameter must be supplied to correspond to the target object
 * ('this' in JavaScript parlance). Note also that recur calls to the method
 * head should *not* pass the target object, it will be supplied
 * automatically and can not be substituted.
 * 
 * In the method bodies, the (unqualified) name can be used to name the
 * class (for calls to new, instance? etc).
 * 
 * One constructor will be defined, taking the designated fields.  Note
 * that the field names __meta and __extmap are currently reserved and
 * should not be used when defining your own types.
 * 
 * Given (deftype TypeName ...), a factory function called ->TypeName
 * will be defined, taking positional parameters for the fields
 */
cljs.core$macros.deftype = (function cljs$core$macros$deftype(){
var args__5207__auto__ = [];
var len__5200__auto___13101 = arguments.length;
var i__5201__auto___13102 = (0);
while(true){
if((i__5201__auto___13102 < len__5200__auto___13101)){
args__5207__auto__.push((arguments[i__5201__auto___13102]));

var G__13103 = (i__5201__auto___13102 + (1));
i__5201__auto___13102 = G__13103;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((4) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((4)),(0))):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5208__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields("deftype",t,fields);

var env = _AMPERSAND_env;
var r = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),t));
var vec__13100 = cljs.core$macros.prepare_protocol_masks(env,impls);
var fpps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13100,(0),null);
var pmasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13100,(1),null);
var protocols = cljs.core$macros.collect_protocols(impls,env);
var t__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(t,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null)),cljs.core._conj(cljs.core.List.EMPTY,t__$1),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,fields),cljs.core._conj(cljs.core.List.EMPTY,pmasks),cljs.core._conj(cljs.core.List.EMPTY,((cljs.core.seq(impls))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),cljs.core._conj(cljs.core.List.EMPTY,t__$1),cljs.core.array_seq([cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3(t__$1,impls,fields)], 0)))):null))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),cljs.core._conj(cljs.core.List.EMPTY,t__$1))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields)))))))))], 0)))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),cljs.core._conj(cljs.core.List.EMPTY,t__$1))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null)),cljs.core._conj(cljs.core.List.EMPTY,t__$1))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,[cljs.core.str(r)].join(''))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),cljs.core._conj(cljs.core.List.EMPTY,t__$1))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__13092__auto__","this__13092__auto__",-1997293848,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__13093__auto__","writer__13093__auto__",-574375741,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__13094__auto__","opt__13094__auto__",1389789312,null))], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__13093__auto__","writer__13093__auto__",-574375741,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,[cljs.core.str(r)].join(''))], 0)))))], 0)))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core$macros.build_positional_factory(t__$1,r,fields)),cljs.core._conj(cljs.core.List.EMPTY,t__$1)], 0))));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq13095){
var G__13096 = cljs.core.first(seq13095);
var seq13095__$1 = cljs.core.next(seq13095);
var G__13097 = cljs.core.first(seq13095__$1);
var seq13095__$2 = cljs.core.next(seq13095__$1);
var G__13098 = cljs.core.first(seq13095__$2);
var seq13095__$3 = cljs.core.next(seq13095__$2);
var G__13099 = cljs.core.first(seq13095__$3);
var seq13095__$4 = cljs.core.next(seq13095__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__13096,G__13097,G__13098,G__13099,seq13095__$4);
});

cljs.core$macros.deftype.cljs$lang$macro = true;
/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (hinted_fields){
return (function (p1__13104_SHARP_){
return cljs.core.with_meta(p1__13104_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = [cljs.core.str("#"),cljs.core.str(cljs.core.namespace(rname)),cljs.core.str("."),cljs.core.str(cljs.core.name(rname)),cljs.core.str("{")].join('');
var fields__$2 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),cljs.core.array_seq([new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta(new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], 0));
var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var ksym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("k");
var impls__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(impls,new cljs.core.PersistentVector(null, 26, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-clone","-clone",227130084,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__13105__auto__","this__13105__auto__",-60588223,null))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj(cljs.core.List.EMPTY,tagname),cljs.core.array_seq([fields__$2], 0)))))], 0)))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__13106__auto__","this__13106__auto__",677304827,null))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","caching-hash","cljs.core$macros/caching-hash",-1892393069,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__13106__auto__","this__13106__auto__",677304827,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hash-imap","hash-imap",-1047446478,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null))], 0)))))], 0)))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__13107__auto__","this__13107__auto__",1514489790,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__13108__auto__","other__13108__auto__",-207541748,null))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__13108__auto__","other__13108__auto__",-207541748,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__13107__auto__","this__13107__auto__",1514489790,null)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__13108__auto__","other__13108__auto__",-207541748,null))))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","equiv-map","cljs.core/equiv-map",-1185609892,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__13107__auto__","this__13107__auto__",1514489790,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__13108__auto__","other__13108__auto__",-207541748,null))], 0)))))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,false)], 0)))))], 0)))),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__13109__auto__","this__13109__auto__",-1713340963,null))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))], 0)))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__13110__auto__","this__13110__auto__",-2126486576,null)),cljs.core._conj(cljs.core.List.EMPTY,gs)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj(cljs.core.List.EMPTY,tagname),cljs.core.array_seq([cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2)], 0)))))], 0)))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__13111__auto__","this__13111__auto__",2003665156,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__13112__auto__","k__13112__auto__",-565765189,null))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__13111__auto__","this__13111__auto__",2003665156,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__13112__auto__","k__13112__auto__",-565765189,null)),cljs.core._conj(cljs.core.List.EMPTY,null)], 0)))))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__13113__auto__","this__13113__auto__",1612361236,null)),cljs.core._conj(cljs.core.List.EMPTY,ksym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__13114__auto__","else__13114__auto__",1639141165,null))], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),cljs.core._conj(cljs.core.List.EMPTY,ksym),cljs.core.array_seq([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,cljs.core.array_seq([base_fields], 0)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,ksym),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__13114__auto__","else__13114__auto__",1639141165,null))], 0)))))], 0)))))], 0)))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-count","-count",416049189,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__13115__auto__","this__13115__auto__",-924458362,null))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.count(base_fields)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null))))))], 0)))))], 0)))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__13116__auto__","this__13116__auto__",-1612323137,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__13117__auto__","entry__13117__auto__",-1668045794,null))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__13117__auto__","entry__13117__auto__",-1668045794,null)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__13116__auto__","this__13116__auto__",-1612323137,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__13117__auto__","entry__13117__auto__",-1668045794,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(0))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__13117__auto__","entry__13117__auto__",-1668045794,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(1))], 0)))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__13116__auto__","this__13116__auto__",-1612323137,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__13117__auto__","entry__13117__auto__",-1668045794,null))], 0)))))], 0)))))], 0)))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__13118__auto__","this__13118__auto__",1871971391,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__13119__auto__","k__13119__auto__",2000365272,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,gs)], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","condp","cljs.core$macros/condp",431619047,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__13119__auto__","k__13119__auto__",2000365272,null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(fld),cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap.fromArray([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null], true, false),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,cljs.core.array_seq([base_fields], 0)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj(cljs.core.List.EMPTY,tagname),cljs.core.array_seq([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__13119__auto__","k__13119__auto__",2000365272,null)),cljs.core._conj(cljs.core.List.EMPTY,gs)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,null)], 0)))))], 0)))))], 0)))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__13120__auto__","this__13120__auto__",1029188461,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__13121__auto__","k__13121__auto__",-102620440,null))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,base_fields)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__13121__auto__","k__13121__auto__",-102620440,null))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__13120__auto__","this__13120__auto__",1029188461,null))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__13121__auto__","k__13121__auto__",-102620440,null))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj(cljs.core.List.EMPTY,tagname),cljs.core.array_seq([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__13121__auto__","k__13121__auto__",-102620440,null))], 0))))))))),cljs.core._conj(cljs.core.List.EMPTY,null)], 0)))))], 0)))))], 0)))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__13123__auto__","this__13123__auto__",758599327,null))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__13122_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__13122_SHARP_),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__13122_SHARP_)),new cljs.core.Symbol("cljs.core","vector","cljs.core/vector",720641726,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null))], 0)))))))))], 0)))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__13125__auto__","this__13125__auto__",893674611,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__13126__auto__","writer__13126__auto__",2126968401,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__13127__auto__","opts__13127__auto__",171430572,null))], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__13128__auto__","pr-pair__13128__auto__",-865556174,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__13129__auto__","keyval__13129__auto__",-177449290,null))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__13126__auto__","writer__13126__auto__",2126968401,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-writer","cljs.core/pr-writer",133956070,null)),cljs.core._conj(cljs.core.List.EMPTY,""),cljs.core._conj(cljs.core.List.EMPTY," "),cljs.core._conj(cljs.core.List.EMPTY,""),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__13127__auto__","opts__13127__auto__",171430572,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__13129__auto__","keyval__13129__auto__",-177449290,null))], 0)))))], 0)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__13126__auto__","writer__13126__auto__",2126968401,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__13128__auto__","pr-pair__13128__auto__",-865556174,null)),cljs.core._conj(cljs.core.List.EMPTY,pr_open),cljs.core._conj(cljs.core.List.EMPTY,", "),cljs.core._conj(cljs.core.List.EMPTY,"}"),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__13127__auto__","opts__13127__auto__",171430572,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__13124_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__13124_SHARP_),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__13124_SHARP_)),new cljs.core.Symbol("cljs.core","vector","cljs.core/vector",720641726,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null))], 0)))))], 0)))))], 0)))))], 0))))], null));
var vec__13131 = cljs.core$macros.prepare_protocol_masks(env,impls__$1);
var fpps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13131,(0),null);
var pmasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13131,(1),null);
var protocols = cljs.core$macros.collect_protocols(impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(tagname,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null)),cljs.core._conj(cljs.core.List.EMPTY,tagname__$1),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,hinted_fields),cljs.core._conj(cljs.core.List.EMPTY,pmasks),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),cljs.core._conj(cljs.core.List.EMPTY,tagname__$1),cljs.core.array_seq([cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4(tagname__$1,impls__$1,fields__$2,true)], 0)))))], 0))))))));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(new cljs.core.Symbol(null,"map->","map->",-999714600,null)),cljs.core.str(rsym)].join('')),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.meta(rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"map","map",1371690461)));
var ms = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var ks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,fields);
var getters = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,k),cljs.core._conj(cljs.core.List.EMPTY,ms))));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),cljs.core._conj(cljs.core.List.EMPTY,fn_name),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,ms)))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj(cljs.core.List.EMPTY,rname),cljs.core.array_seq([getters,cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj(cljs.core.List.EMPTY,ms),cljs.core.array_seq([ks], 0))))),cljs.core._conj(cljs.core.List.EMPTY,null)], 0)))))], 0))));
});
/**
 * (defrecord name [fields*]  options* specs*)
 * 
 * Currently there are no options.
 * 
 * Each spec consists of a protocol or interface name followed by zero
 * or more method bodies:
 * 
 * protocol-or-Object
 * (methodName [args*] body)*
 * 
 * The record will have the (immutable) fields named by
 * fields, which can have type hints. Protocols and methods
 * are optional. The only methods that can be supplied are those
 * declared in the protocols.  Note that method bodies are
 * not closures, the local environment includes only the named fields,
 * and those fields can be accessed directly.
 * 
 * Method definitions take the form:
 * 
 * (methodname [args*] body)
 * 
 * The argument and return types can be hinted on the arg and
 * methodname symbols. If not supplied, they will be inferred, so type
 * hints should be reserved for disambiguation.
 * 
 * Methods should be supplied for all methods of the desired
 * protocol(s). You can also define overrides for
 * methods of Object. Note that a parameter must be supplied to
 * correspond to the target object ('this' in JavaScript parlance). Note also
 * that recur calls to the method head should *not* pass the target object, it
 * will be supplied automatically and can not be substituted.
 * 
 * In the method bodies, the (unqualified) name can be used to name the
 * class (for calls to new, instance? etc).
 * 
 * The type will have implementations of several ClojureScript
 * protocol generated automatically: IMeta/IWithMeta (metadata support) and
 * IMap, etc.
 * 
 * In addition, defrecord will define type-and-value-based =,
 * and will define ClojureScript IHash and IEquiv.
 * 
 * Two constructors will be defined, one taking the designated fields
 * followed by a metadata map (nil for none) and an extension field
 * map (nil for none), and one taking only the fields (using nil for
 * meta and extension fields). Note that the field names __meta
 * and __extmap are currently reserved and should not be used when
 * defining your own records.
 * 
 * Given (defrecord TypeName ...), two factory functions will be
 * defined: ->TypeName, taking positional parameters for the fields,
 * and map->TypeName, taking a map of keywords to field values.
 */
cljs.core$macros.defrecord = (function cljs$core$macros$defrecord(){
var args__5207__auto__ = [];
var len__5200__auto___13139 = arguments.length;
var i__5201__auto___13140 = (0);
while(true){
if((i__5201__auto___13140 < len__5200__auto___13139)){
args__5207__auto__.push((arguments[i__5201__auto___13140]));

var G__13141 = (i__5201__auto___13140 + (1));
i__5201__auto___13140 = G__13141;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((4) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((4)),(0))):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5208__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields("defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(rsym,cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
var r = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),rsym__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core$macros.emit_defrecord(_AMPERSAND_env,rsym__$1,r,fields,impls)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),cljs.core._conj(cljs.core.List.EMPTY,r))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(fields)))))))))], 0)))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),cljs.core._conj(cljs.core.List.EMPTY,r))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq",".-cljs$lang$ctorPrSeq",41132414,null)),cljs.core._conj(cljs.core.List.EMPTY,r))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__13132__auto__","this__13132__auto__",1490694049,null))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("core","list","core/list",-1892309799,null)),cljs.core._conj(cljs.core.List.EMPTY,[cljs.core.str(r)].join(''))))))], 0)))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),cljs.core._conj(cljs.core.List.EMPTY,r))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__13132__auto__","this__13132__auto__",1490694049,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__13133__auto__","writer__13133__auto__",1806439746,null))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__13133__auto__","writer__13133__auto__",1806439746,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,[cljs.core.str(r)].join(''))], 0)))))], 0)))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core$macros.build_positional_factory(rsym__$1,r,fields)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core$macros.build_map_factory(rsym__$1,r,fields)),cljs.core._conj(cljs.core.List.EMPTY,r)], 0))));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq13134){
var G__13135 = cljs.core.first(seq13134);
var seq13134__$1 = cljs.core.next(seq13134);
var G__13136 = cljs.core.first(seq13134__$1);
var seq13134__$2 = cljs.core.next(seq13134__$1);
var G__13137 = cljs.core.first(seq13134__$2);
var seq13134__$3 = cljs.core.next(seq13134__$2);
var G__13138 = cljs.core.first(seq13134__$3);
var seq13134__$4 = cljs.core.next(seq13134__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__13135,G__13136,G__13137,G__13138,seq13134__$4);
});

cljs.core$macros.defrecord.cljs$lang$macro = true;
/**
 * A protocol is a named set of named methods and their signatures:
 * 
 * (defprotocol AProtocolName
 * ;optional doc string
 * "A doc string for AProtocol abstraction"
 * 
 * ;method signatures
 * (bar [this a b] "bar docs")
 * (baz [this a] [this a b] [this a b c] "baz docs"))
 * 
 * No implementations are provided. Docs can be specified for the
 * protocol overall and for each method. The above yields a set of
 * polymorphic functions and a protocol object. All are
 * namespace-qualified by the ns enclosing the definition The resulting
 * functions dispatch on the type of their first argument, which is
 * required and corresponds to the implicit target object ('this' in
 * JavaScript parlance). defprotocol is dynamic, has no special compile-time
 * effect, and defines no new types.
 * 
 * (defprotocol P
 * (foo [this])
 * (bar-me [this] [this y]))
 * 
 * (deftype Foo [a b c]
 * P
 * (foo [this] a)
 * (bar-me [this] b)
 * (bar-me [this y] (+ c y)))
 * 
 * (bar-me (Foo. 1 2 3) 42)
 * => 45
 * 
 * (foo
 * (let [x 42]
 * (reify P
 * (foo [this] 17)
 * (bar-me [this] x)
 * (bar-me [this y] x))))
 * => 17
 */
cljs.core$macros.defprotocol = (function cljs$core$macros$defprotocol(){
var args__5207__auto__ = [];
var len__5200__auto___13159 = arguments.length;
var i__5201__auto___13160 = (0);
while(true){
if((i__5201__auto___13160 < len__5200__auto___13159)){
args__5207__auto__.push((arguments[i__5201__auto___13160]));

var G__13161 = (i__5201__auto___13160 + (1));
i__5201__auto___13160 = G__13161;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((3) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((3)),(0))):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5208__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var vec__13148 = ((typeof cljs.core.first(doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(doc_PLUS_methods),cljs.core.next(doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13148,(0),null);
var methods$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13148,(1),null);
var psym__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(psym,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__13148,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(ns_name),cljs.core.str("."),cljs.core.str(n)].join(''));
});})(p,vec__13148,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix(p);
var _ = (function (){var seq__13149 = cljs.core.seq(methods$);
var chunk__13150 = null;
var count__13151 = (0);
var i__13152 = (0);
while(true){
if((i__13152 < count__13151)){
var vec__13153 = chunk__13150.cljs$core$IIndexed$_nth$arity$2(null,i__13152);
var mname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13153,(0),null);
var arities = cljs.core.nthnext(vec__13153,(1));
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__13162 = seq__13149;
var G__13163 = chunk__13150;
var G__13164 = count__13151;
var G__13165 = (i__13152 + (1));
seq__13149 = G__13162;
chunk__13150 = G__13163;
count__13151 = G__13164;
i__13152 = G__13165;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__13149);
if(temp__4425__auto__){
var seq__13149__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13149__$1)){
var c__4945__auto__ = cljs.core.chunk_first(seq__13149__$1);
var G__13166 = cljs.core.chunk_rest(seq__13149__$1);
var G__13167 = c__4945__auto__;
var G__13168 = cljs.core.count(c__4945__auto__);
var G__13169 = (0);
seq__13149 = G__13166;
chunk__13150 = G__13167;
count__13151 = G__13168;
i__13152 = G__13169;
continue;
} else {
var vec__13154 = cljs.core.first(seq__13149__$1);
var mname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13154,(0),null);
var arities = cljs.core.nthnext(vec__13154,(1));
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__13170 = cljs.core.next(seq__13149__$1);
var G__13171 = null;
var G__13172 = (0);
var G__13173 = (0);
seq__13149 = G__13170;
chunk__13150 = G__13171;
count__13151 = G__13172;
i__13152 = G__13173;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__13148,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,sig),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.first(sig)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.first(sig)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("-"),cljs.core.str(slot)].join('')))], 0)))))))))))))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.first(sig)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,slot),sig], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__13142__auto__","x__13142__auto__",782428766,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.first(sig)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.first(sig))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__13143__auto__","m__13143__auto__",-1571694288,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),cljs.core._conj(cljs.core.List.EMPTY,fqn(fname)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__13142__auto__","x__13142__auto__",782428766,null))))))], 0)))))], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__13143__auto__","m__13143__auto__",-1571694288,null)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__13143__auto__","m__13143__auto__",-1571694288,null)),sig)))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__13143__auto__","m__13143__auto__",-1571694288,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),cljs.core._conj(cljs.core.List.EMPTY,fqn(fname)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,"_")], 0)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__13143__auto__","m__13143__auto__",-1571694288,null)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__13143__auto__","m__13143__auto__",-1571694288,null)),sig)))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","missing-protocol","cljs.core/missing-protocol",531539732,null)),cljs.core._conj(cljs.core.List.EMPTY,[cljs.core.str(psym__$1),cljs.core.str("."),cljs.core.str(fname)].join('')),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.first(sig))], 0)))))))))], 0)))))], 0)))))], 0)))))], 0)))))], 0))))))));
});})(p,vec__13148,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(psym__$1,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (p,vec__13148,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__13155){
var vec__13156 = p__13155;
var fname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13156,(0),null);
var sigs = cljs.core.nthnext(vec__13156,(1));
var doc__$1 = (function (){var doc__$1 = cljs.core.last(sigs);
var doc__$2 = ((typeof doc__$1 === 'string')?doc__$1:null);
return doc__$2;
})();
var sigs__$1 = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1),cljs.core.vec(sigs__$1)], null);
});})(p,vec__13148,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__13148,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__13157){
var vec__13158 = p__13157;
var fname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13158,(0),null);
var sigs = cljs.core.nthnext(vec__13158,(1));
var doc__$1 = (function (){var doc__$1 = cljs.core.last(sigs);
var doc__$2 = ((typeof doc__$1 === 'string')?doc__$1:null);
return doc__$2;
})();
var sigs__$1 = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,sigs);
var slot = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(prefix),cljs.core.str(cljs.core.name(fname))].join(''));
var fname__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6(fname,cljs.core.assoc,new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),cljs.core._conj(cljs.core.List.EMPTY,fname__$1),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (doc__$1,sigs__$1,slot,fname__$1,vec__13158,fname,sigs,p,vec__13148,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig(fname__$1,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(slot),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count(sig))].join('')),sig);
});})(doc__$1,sigs__$1,slot,fname__$1,vec__13158,fname,sigs,p,vec__13148,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1)], 0))));
});})(p,vec__13148,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),cljs.core._conj(cljs.core.List.EMPTY,psym__$2),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","js-obj","cljs.core/js-obj",1009370607,null))))))], 0))))),cljs.core.map.cljs$core$IFn$_invoke$arity$2(method,methods$),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,false)], 0)))))], 0))));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq13144){
var G__13145 = cljs.core.first(seq13144);
var seq13144__$1 = cljs.core.next(seq13144);
var G__13146 = cljs.core.first(seq13144__$1);
var seq13144__$2 = cljs.core.next(seq13144__$1);
var G__13147 = cljs.core.first(seq13144__$2);
var seq13144__$3 = cljs.core.next(seq13144__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__13145,G__13146,G__13147,seq13144__$3);
});

cljs.core$macros.defprotocol.cljs$lang$macro = true;
/**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix(p);
var xsym = cljs.core$macros.bool_expr(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var vec__13175 = (cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1(p) : cljs.core$macros.fast_path_protocols.call(null,p));
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13175,(0),null);
var bit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13175,(1),null);
var msym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
return cljs.core$macros.if_not((x instanceof cljs.core.Symbol),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,xsym),cljs.core._conj(cljs.core.List.EMPTY,x)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,xsym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),cljs.core._conj(cljs.core.List.EMPTY,(cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,xsym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,msym)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,bit)], 0)))):false)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,xsym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("-"),cljs.core.str(prefix)].join('')))], 0))))))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,false)], 0)))))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj(cljs.core.List.EMPTY,x))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),cljs.core._conj(cljs.core.List.EMPTY,(cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,msym)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,bit)], 0)))):false)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("-"),cljs.core.str(prefix)].join('')))], 0))))))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,false)], 0)))));
});

cljs.core$macros.implements_QMARK_.cljs$lang$macro = true;
/**
 * Returns true if x satisfies the protocol
 */
cljs.core$macros.satisfies_QMARK_ = (function cljs$core$macros$satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix(p);
var xsym = cljs.core$macros.bool_expr(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var vec__13177 = (cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.fast_path_protocols.cljs$core$IFn$_invoke$arity$1(p) : cljs.core$macros.fast_path_protocols.call(null,p));
var part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13177,(0),null);
var bit = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13177,(1),null);
var msym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
return cljs.core$macros.if_not((x instanceof cljs.core.Symbol),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,xsym),cljs.core._conj(cljs.core.List.EMPTY,x)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj(cljs.core.List.EMPTY,xsym))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),cljs.core._conj(cljs.core.List.EMPTY,(cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,xsym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,msym)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,bit)], 0)))):false)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,xsym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("-"),cljs.core.str(prefix)].join('')))], 0))))))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,xsym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,msym)], 0))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),cljs.core._conj(cljs.core.List.EMPTY,psym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,xsym)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,false)], 0)))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),cljs.core._conj(cljs.core.List.EMPTY,psym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,xsym)], 0)))))], 0)))))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj(cljs.core.List.EMPTY,x))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),cljs.core._conj(cljs.core.List.EMPTY,(cljs.core.truth_(bit)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,msym)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,bit)], 0)))):false)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core$macros.bool_expr(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("-"),cljs.core.str(prefix)].join('')))], 0))))))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,msym)], 0))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),cljs.core._conj(cljs.core.List.EMPTY,psym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,x)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,false)], 0)))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),cljs.core._conj(cljs.core.List.EMPTY,psym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,x)], 0)))))], 0)))));
});

cljs.core$macros.satisfies_QMARK_.cljs$lang$macro = true;
/**
 * Takes a body of expressions that returns an ISeq or nil, and yields
 * a ISeqable object that will invoke the body only the first time seq
 * is called, and will cache the result and return it on all subsequent
 * seq calls.
 */
cljs.core$macros.lazy_seq = (function cljs$core$macros$lazy_seq(){
var args__5207__auto__ = [];
var len__5200__auto___13181 = arguments.length;
var i__5201__auto___13182 = (0);
while(true){
if((i__5201__auto___13182 < len__5200__auto___13181)){
args__5207__auto__.push((arguments[i__5201__auto___13182]));

var G__13183 = (i__5201__auto___13182 + (1));
i__5201__auto___13182 = G__13183;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((2) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((2)),(0))):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5208__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","LazySeq","cljs.core/LazySeq",1986389673,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())))),cljs.core.array_seq([body], 0))))),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq13178){
var G__13179 = cljs.core.first(seq13178);
var seq13178__$1 = cljs.core.next(seq13178);
var G__13180 = cljs.core.first(seq13178__$1);
var seq13178__$2 = cljs.core.next(seq13178__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__13179,G__13180,seq13178__$2);
});

cljs.core$macros.lazy_seq.cljs$lang$macro = true;
/**
 * Takes a body of expressions and yields a Delay object that will
 * invoke the body only the first time it is forced (with force or deref/@), and
 * will cache the result and return it on all subsequent force
 * calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(){
var args__5207__auto__ = [];
var len__5200__auto___13187 = arguments.length;
var i__5201__auto___13188 = (0);
while(true){
if((i__5201__auto___13188 < len__5200__auto___13187)){
args__5207__auto__.push((arguments[i__5201__auto___13188]));

var G__13189 = (i__5201__auto___13188 + (1));
i__5201__auto___13188 = G__13189;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((2) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((2)),(0))):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5208__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())))),cljs.core.array_seq([body], 0))))),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq13184){
var G__13185 = cljs.core.first(seq13184);
var seq13184__$1 = cljs.core.next(seq13184);
var G__13186 = cljs.core.first(seq13184__$1);
var seq13184__$2 = cljs.core.next(seq13184__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__13185,G__13186,seq13184__$2);
});

cljs.core$macros.delay.cljs$lang$macro = true;
/**
 * binding => var-symbol temp-value-expr
 * 
 * Temporarily redefines vars while executing the body.  The
 * temp-value-exprs will be evaluated and each resulting value will
 * replace in parallel the root value of its var.  After the body is
 * executed, the root values of all the vars will be set back to their
 * old values. Useful for mocking out functions during testing.
 */
cljs.core$macros.with_redefs = (function cljs$core$macros$with_redefs(){
var args__5207__auto__ = [];
var len__5200__auto___13196 = arguments.length;
var i__5201__auto___13197 = (0);
while(true){
if((i__5201__auto___13197 < len__5200__auto___13196)){
args__5207__auto__.push((arguments[i__5201__auto___13197]));

var G__13198 = (i__5201__auto___13197 + (1));
i__5201__auto___13197 = G__13198;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((3) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((3)),(0))):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5208__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
var vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),bindings));
var tempnames = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,names,vals);
var resets = cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__13194){
var vec__13195 = p__13194;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13195,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13195,(1),null);
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,v),k),new cljs.core.Symbol(null,"set!","set!",250714521,null));
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tempnames,names)))))),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(bind_value,binds),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",-1273693247,null)),body,cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",-1065347064,null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(bind_value,resets)))))], 0)))))], 0))));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq13190){
var G__13191 = cljs.core.first(seq13190);
var seq13190__$1 = cljs.core.next(seq13190);
var G__13192 = cljs.core.first(seq13190__$1);
var seq13190__$2 = cljs.core.next(seq13190__$1);
var G__13193 = cljs.core.first(seq13190__$2);
var seq13190__$3 = cljs.core.next(seq13190__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__13191,G__13192,G__13193,seq13190__$3);
});

cljs.core$macros.with_redefs.cljs$lang$macro = true;
/**
 * binding => var-symbol init-expr
 * 
 * Creates new bindings for the (already-existing) vars, with the
 * supplied initial values, executes the exprs in an implicit do, then
 * re-establishes the bindings that existed before.  The new bindings
 * are made in parallel (unlike let); all init-exprs are evaluated
 * before the vars are bound to their new values.
 */
cljs.core$macros.binding = (function cljs$core$macros$binding(){
var args__5207__auto__ = [];
var len__5200__auto___13203 = arguments.length;
var i__5201__auto___13204 = (0);
while(true){
if((i__5201__auto___13204 < len__5200__auto___13203)){
args__5207__auto__.push((arguments[i__5201__auto___13204]));

var G__13205 = (i__5201__auto___13204 + (1));
i__5201__auto___13204 = G__13205;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((3) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((3)),(0))):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5208__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
cljs.analyzer.confirm_bindings(_AMPERSAND_env,names);

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","with-redefs","cljs.core$macros/with-redefs",1489217801,null)),cljs.core._conj(cljs.core.List.EMPTY,bindings),cljs.core.array_seq([body], 0))));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq13199){
var G__13200 = cljs.core.first(seq13199);
var seq13199__$1 = cljs.core.next(seq13199);
var G__13201 = cljs.core.first(seq13199__$1);
var seq13199__$2 = cljs.core.next(seq13199__$1);
var G__13202 = cljs.core.first(seq13199__$2);
var seq13199__$3 = cljs.core.next(seq13199__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__13200,G__13201,G__13202,seq13199__$3);
});

cljs.core$macros.binding.cljs$lang$macro = true;
/**
 * Takes a binary predicate, an expression, and a set of clauses.
 * Each clause can take the form of either:
 * 
 * test-expr result-expr
 * 
 * test-expr :>> result-fn
 * 
 * Note :>> is an ordinary keyword.
 * 
 * For each clause, (pred test-expr expr) is evaluated. If it returns
 * logical true, the clause is a match. If a binary clause matches, the
 * result-expr is returned, if a ternary clause matches, its result-fn,
 * which must be a unary function, is called with the result of the
 * predicate as its argument, the result of that call being the return
 * value of condp. A single default expression can follow the clauses,
 * and its value will be returned if no clause matches. If no default
 * expression is provided and no clause matches, an
 * IllegalArgumentException is thrown.
 */
cljs.core$macros.condp = (function cljs$core$macros$condp(){
var args__5207__auto__ = [];
var len__5200__auto___13216 = arguments.length;
var i__5201__auto___13217 = (0);
while(true){
if((i__5201__auto___13217 < len__5200__auto___13216)){
args__5207__auto__.push((arguments[i__5201__auto___13217]));

var G__13218 = (i__5201__auto___13217 + (1));
i__5201__auto___13217 = G__13218;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((4) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((4)),(0))):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5208__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("pred__");
var gexpr = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__13214 = cljs.core.split_at(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second(args)))?(3):(2)),args);
var vec__13215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13214,(0),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13215,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13215,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13215,(2),null);
var clause = vec__13215;
var more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13214,(1),null);
var n = cljs.core.count(clause);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),n)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("core","str","core/str",-1563921891,null)),cljs.core._conj(cljs.core.List.EMPTY,"No matching clause: "),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,expr__$1)], 0))))))))))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),n)){
return a;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),n)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,pred__$1),cljs.core._conj(cljs.core.List.EMPTY,a),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,expr__$1)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,b),cljs.core._conj(cljs.core.List.EMPTY,cljs$core$macros$emit(pred__$1,expr__$1,more))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__13206__auto__","p__13206__auto__",148446399,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,pred__$1),cljs.core._conj(cljs.core.List.EMPTY,a),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,expr__$1)], 0)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,c),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__13206__auto__","p__13206__auto__",148446399,null)))))),cljs.core._conj(cljs.core.List.EMPTY,cljs$core$macros$emit(pred__$1,expr__$1,more))], 0))));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("res__");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,gpred),cljs.core._conj(cljs.core.List.EMPTY,pred),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,gexpr),cljs.core._conj(cljs.core.List.EMPTY,expr)], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,emit(gpred,gexpr,clauses))], 0))));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq13207){
var G__13208 = cljs.core.first(seq13207);
var seq13207__$1 = cljs.core.next(seq13207);
var G__13209 = cljs.core.first(seq13207__$1);
var seq13207__$2 = cljs.core.next(seq13207__$1);
var G__13210 = cljs.core.first(seq13207__$2);
var seq13207__$3 = cljs.core.next(seq13207__$2);
var G__13211 = cljs.core.first(seq13207__$3);
var seq13207__$4 = cljs.core.next(seq13207__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__13208,G__13209,G__13210,G__13211,seq13207__$4);
});

cljs.core$macros.condp.cljs$lang$macro = true;
cljs.core$macros.assoc_test = (function cljs$core$macros$assoc_test(m,test,expr,env){
if(cljs.core.contains_QMARK_(m,test)){
throw (new Error([cljs.core.str("Duplicate case test constant '"),cljs.core.str(test),cljs.core.str("'"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))?[cljs.core.str(" on line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env)),cljs.core.str(" "),cljs.core.str(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join('')));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,test,expr);
}
});
cljs.core$macros.const_QMARK_ = (function cljs$core$macros$const_QMARK_(env,x){
var m = (function (){var and__4149__auto__ = cljs.core.list_QMARK_(x);
if(and__4149__auto__){
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,cljs.core.last(x));
} else {
return and__4149__auto__;
}
})();
if(cljs.core.truth_(m)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword(null,"const","const",1709929842));
} else {
return null;
}
});
/**
 * Takes an expression, and a set of clauses.
 * 
 * Each clause can take the form of either:
 * 
 * test-constant result-expr
 * 
 * (test-constant1 ... test-constantN)  result-expr
 * 
 * The test-constants are not evaluated. They must be compile-time
 * literals, and need not be quoted.  If the expression is equal to a
 * test-constant, the corresponding result-expr is returned. A single
 * default expression can follow the clauses, and its value will be
 * returned if no clause matches. If no default expression is provided
 * and no clause matches, an Error is thrown.
 * 
 * Unlike cond and condp, case does a constant-time dispatch, the
 * clauses are not considered sequentially.  All manner of constant
 * expressions are acceptable in case, including numbers, strings,
 * symbols, keywords, and (ClojureScript) composites thereof. Note that since
 * lists are used to group multiple constants that map to the same
 * expression, a vector can be used to match a list if needed. The
 * test-constants need not be all of the same type.
 */
cljs.core$macros.case$ = (function cljs$core$macros$case(){
var args__5207__auto__ = [];
var len__5200__auto___13231 = arguments.length;
var i__5201__auto___13232 = (0);
while(true){
if((i__5201__auto___13232 < len__5200__auto___13231)){
args__5207__auto__.push((arguments[i__5201__auto___13232]));

var G__13233 = (i__5201__auto___13232 + (1));
i__5201__auto___13232 = G__13233;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((3) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((3)),(0))):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5208__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var default$ = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?cljs.core.last(clauses):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("core","str","core/str",-1563921891,null)),cljs.core._conj(cljs.core.List.EMPTY,"No matching clause: "),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,e)], 0)))))))))))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (default$,env){
return (function (m,p__13227){
var vec__13228 = p__13227;
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13228,(0),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13228,(1),null);
if(cljs.core.seq_QMARK_(test)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__13228,test,expr,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,test__$1),new cljs.core.Symbol(null,"quote","quote",1377916282,null)):test__$1);
return cljs.core$macros.assoc_test(m__$1,test__$2,expr,env);
});})(vec__13228,test,expr,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test(m,cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,test),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),expr,env);
} else {
return cljs.core$macros.assoc_test(m,test,expr,env);

}
}
});})(default$,env))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),clauses));
var esym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var tests = cljs.core.keys(pairs);
if(cljs.core.every_QMARK_(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.char_QMARK_,cljs.core.array_seq([((function (default$,env,pairs,esym,tests){
return (function (p1__13219_SHARP_){
return cljs.core$macros.const_QMARK_(env,p1__13219_SHARP_);
});})(default$,env,pairs,esym,tests))
], 0)),tests)){
var no_default = ((cljs.core.odd_QMARK_(cljs.core.count(clauses)))?cljs.core.butlast(clauses):clauses);
var tests__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (no_default,default$,env,pairs,esym,tests){
return (function (p1__13220_SHARP_){
if(cljs.core.seq_QMARK_(p1__13220_SHARP_)){
return cljs.core.vec(p1__13220_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13220_SHARP_], null);
}
});})(no_default,default$,env,pairs,esym,tests))
,cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),no_default));
var thens = cljs.core.vec(cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),no_default)));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,esym),cljs.core._conj(cljs.core.List.EMPTY,e)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),cljs.core._conj(cljs.core.List.EMPTY,esym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,tests__$1),cljs.core._conj(cljs.core.List.EMPTY,thens),cljs.core._conj(cljs.core.List.EMPTY,default$)], 0)))))], 0))));
} else {
if(cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,tests)){
var tests__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (default$,env,pairs,esym,tests){
return (function (p1__13222_SHARP_){
if(cljs.core.seq_QMARK_(p1__13222_SHARP_)){
return cljs.core.vec(p1__13222_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13222_SHARP_], null);
}
});})(default$,env,pairs,esym,tests))
,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (default$,env,pairs,esym,tests){
return (function (p1__13221_SHARP_){
return [cljs.core.str(p1__13221_SHARP_)].join('').substring((1));
});})(default$,env,pairs,esym,tests))
,tests)));
var thens = cljs.core.vec(cljs.core.vals(pairs));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,esym),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","keyword?","cljs.core$macros/keyword?",1362730141,null)),cljs.core._conj(cljs.core.List.EMPTY,e))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-fqn",".-fqn",1246113027,null)),cljs.core._conj(cljs.core.List.EMPTY,e))))),cljs.core._conj(cljs.core.List.EMPTY,null)], 0)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),cljs.core._conj(cljs.core.List.EMPTY,esym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,tests__$1),cljs.core._conj(cljs.core.List.EMPTY,thens),cljs.core._conj(cljs.core.List.EMPTY,default$)], 0)))))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,esym),cljs.core._conj(cljs.core.List.EMPTY,e)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","cond","cljs.core$macros/cond",1626318471,null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (default$,env,pairs,esym,tests){
return (function (p__13229){
var vec__13230 = p__13229;
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13230,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13230,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),cljs.core._conj(cljs.core.List.EMPTY,m),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,esym)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,c))));
});})(default$,env,pairs,esym,tests))
,cljs.core.array_seq([pairs], 0)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),cljs.core._conj(cljs.core.List.EMPTY,default$)], 0)))))], 0))));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq13223){
var G__13224 = cljs.core.first(seq13223);
var seq13223__$1 = cljs.core.next(seq13223);
var G__13225 = cljs.core.first(seq13223__$1);
var seq13223__$2 = cljs.core.next(seq13223__$1);
var G__13226 = cljs.core.first(seq13223__$2);
var seq13223__$3 = cljs.core.next(seq13223__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__13224,G__13225,G__13226,seq13223__$3);
});

cljs.core$macros.case$.cljs$lang$macro = true;
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 * logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(){
var args13234 = [];
var len__5200__auto___13237 = arguments.length;
var i__5201__auto___13238 = (0);
while(true){
if((i__5201__auto___13238 < len__5200__auto___13237)){
args13234.push((arguments[i__5201__auto___13238]));

var G__13239 = (i__5201__auto___13238 + (1));
i__5201__auto___13238 = G__13239;
continue;
} else {
}
break;
}

var G__13236 = args13234.length;
switch (G__13236) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13234.length)].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj(cljs.core.List.EMPTY,"Assert failed: "),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj(cljs.core.List.EMPTY,x)))))))))], 0)))))))))))))], 0))));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),cljs.core._conj(cljs.core.List.EMPTY,x),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj(cljs.core.List.EMPTY,"Assert failed: "),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,message),cljs.core._conj(cljs.core.List.EMPTY,"\n"),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj(cljs.core.List.EMPTY,x)))))))))], 0)))))))))))))], 0))));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$lang$maxFixedArity = 4;

cljs.core$macros.assert.cljs$lang$macro = true;
/**
 * List comprehension. Takes a vector of one or more
 * binding-form/collection-expr pairs, each followed by zero or more
 * modifiers, and yields a lazy sequence of evaluations of expr.
 * Collections are iterated in a nested fashion, rightmost fastest,
 * and nested coll-exprs can refer to bindings created in prior
 * binding-forms.  Supported modifiers are: :let [binding-form expr ...],
 * :while test, :when test.
 * 
 * (take 100 (for [x (range 100000000) y (range 1000000) :while (< y x)]  [x y]))
 */
cljs.core$macros.for$ = (function cljs$core$macros$for(_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body_expr){
cljs.core$macros.assert_args.cljs$core$IFn$_invoke$arity$variadic(cljs$core$macros$for,cljs.core.vector_QMARK_(seq_exprs),"a vector for its binding",cljs.core.array_seq([cljs.core.even_QMARK_(cljs.core.count(seq_exprs)),"an even number of forms in binding vector"], 0));

var to_groups = (function (seq_exprs__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (groups,p__13277){
var vec__13278 = p__13277;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13278,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13278,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(groups),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.peek(groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__13308__delegate = function (msg){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__13308 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__13309__i = 0, G__13309__a = new Array(arguments.length -  0);
while (G__13309__i < G__13309__a.length) {G__13309__a[G__13309__i] = arguments[G__13309__i + 0]; ++G__13309__i;}
  msg = new cljs.core.IndexedSeq(G__13309__a,0);
} 
return G__13308__delegate.call(this,msg);};
G__13308.cljs$lang$maxFixedArity = 0;
G__13308.cljs$lang$applyTo = (function (arglist__13310){
var msg = cljs.core.seq(arglist__13310);
return G__13308__delegate(msg);
});
G__13308.cljs$core$IFn$_invoke$arity$variadic = G__13308__delegate;
return G__13308;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__13279){
var vec__13294 = p__13279;
var vec__13295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13294,(0),null);
var bind = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13295,(0),null);
var expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13295,(1),null);
var mod_pairs = cljs.core.nthnext(vec__13295,(2));
var vec__13296 = cljs.core.nthnext(vec__13294,(1));
var vec__13297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13296,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13297,(0),null);
var next_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13297,(1),null);
var next_groups = vec__13296;
var giter = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("iter__");
var gxs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("s__");
var do_mod = ((function (giter,gxs,vec__13294,vec__13295,bind,expr,mod_pairs,vec__13296,vec__13297,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__13298){
var vec__13301 = p__13298;
var vec__13302 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13301,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13302,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13302,(1),null);
var pair = vec__13302;
var etc = cljs.core.nthnext(vec__13301,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,v),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs$core$macros$for_$_emit_bind_$_do_mod(etc))], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj(cljs.core.List.EMPTY,v),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs$core$macros$for_$_emit_bind_$_do_mod(etc))], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,v),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs$core$macros$for_$_emit_bind_$_do_mod(etc)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),cljs.core._conj(cljs.core.List.EMPTY,gxs)))))))))], 0))));
} else {
if((k instanceof cljs.core.Keyword)){
return err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Invalid 'for' keyword ",k], 0));
} else {
if(cljs.core.truth_(next_groups)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__13241__auto__","iterys__13241__auto__",1205288496,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs$core$macros$for_$_emit_bind(next_groups)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__13242__auto__","fs__13242__auto__",14099178,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__13241__auto__","iterys__13241__auto__",1205288496,null)),cljs.core._conj(cljs.core.List.EMPTY,next_expr)))))))))], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__13242__auto__","fs__13242__auto__",14099178,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__13242__auto__","fs__13242__auto__",14099178,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,giter),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),cljs.core._conj(cljs.core.List.EMPTY,gxs)))))))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),cljs.core._conj(cljs.core.List.EMPTY,gxs)))))))))], 0)))))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null)),cljs.core._conj(cljs.core.List.EMPTY,body_expr),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,giter),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),cljs.core._conj(cljs.core.List.EMPTY,gxs)))))))))], 0))));

}
}
}
}
}
});})(giter,gxs,vec__13294,vec__13295,bind,expr,mod_pairs,vec__13296,vec__13297,_,next_expr,next_groups,to_groups,err))
;
if(cljs.core.truth_(next_groups)){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core._conj(cljs.core.List.EMPTY,giter),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,gxs)))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,gxs),cljs.core._conj(cljs.core.List.EMPTY,gxs)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("core","when-first","core/when-first",818672257,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,bind),cljs.core._conj(cljs.core.List.EMPTY,gxs)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,do_mod(mod_pairs))], 0)))))], 0)))))))))], 0))));
} else {
var gi = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("i__");
var gb = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__13294,vec__13295,bind,expr,mod_pairs,vec__13296,vec__13297,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__13303){
var vec__13306 = p__13303;
var vec__13307 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13306,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13307,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13307,(1),null);
var pair = vec__13307;
var etc = cljs.core.nthnext(vec__13306,(1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,v),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs$core$macros$for_$_emit_bind_$_do_cmod(etc))], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj(cljs.core.List.EMPTY,v),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs$core$macros$for_$_emit_bind_$_do_cmod(etc))], 0))));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,v),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs$core$macros$for_$_emit_bind_$_do_cmod(etc)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),cljs.core._conj(cljs.core.List.EMPTY,gi)))))))))], 0))));
} else {
if((k instanceof cljs.core.Keyword)){
return err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Invalid 'for' keyword ",k], 0));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-append","cljs.core/chunk-append",-243671470,null)),cljs.core._conj(cljs.core.List.EMPTY,gb),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,body_expr)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),cljs.core._conj(cljs.core.List.EMPTY,gi)))))))))], 0))));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__13294,vec__13295,bind,expr,mod_pairs,vec__13296,vec__13297,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core._conj(cljs.core.List.EMPTY,giter),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,gxs)))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,gxs),cljs.core._conj(cljs.core.List.EMPTY,gxs)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,gxs),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj(cljs.core.List.EMPTY,gxs)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),cljs.core._conj(cljs.core.List.EMPTY,gxs))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__13243__auto__","c__13243__auto__",1244877874,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),cljs.core._conj(cljs.core.List.EMPTY,gxs)))),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj(cljs.core.List.EMPTY,"/Users/tahmid/code/clojure/replete/ClojureScript/replete/out/cljs/core.cljc"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj(cljs.core.List.EMPTY,2162),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj(cljs.core.List.EMPTY,52),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj(cljs.core.List.EMPTY,2162),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj(cljs.core.List.EMPTY,82),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tag","tag",-1290361223)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null))], 0))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__13244__auto__","size__13244__auto__",1023493102,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__13243__auto__","c__13243__auto__",1244877874,null)))))),cljs.core._conj(cljs.core.List.EMPTY,gb),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__13244__auto__","size__13244__auto__",1023493102,null))))))], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,gi),cljs.core._conj(cljs.core.List.EMPTY,(0))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj(cljs.core.List.EMPTY,gi),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__13244__auto__","size__13244__auto__",1023493102,null))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,bind),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__13243__auto__","c__13243__auto__",1244877874,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,gi)], 0)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,do_cmod(mod_pairs))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,true)], 0)))))], 0))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),cljs.core._conj(cljs.core.List.EMPTY,gb))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,giter),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),cljs.core._conj(cljs.core.List.EMPTY,gxs)))))))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),cljs.core._conj(cljs.core.List.EMPTY,gb))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null)], 0)))))], 0)))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,bind),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj(cljs.core.List.EMPTY,gxs)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,do_mod(mod_pairs))], 0)))))], 0)))))], 0)))))], 0)))))))))], 0))));
}
});})(to_groups,err))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__13245__auto__","iter__13245__auto__",-655515469,null)),cljs.core._conj(cljs.core.List.EMPTY,emit_bind(to_groups(seq_exprs)))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__13245__auto__","iter__13245__auto__",-655515469,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.second(seq_exprs))))))], 0))));
});

cljs.core$macros.for$.cljs$lang$macro = true;
/**
 * Repeatedly executes body (presumably for side-effects) with
 * bindings and filtering as provided by "for".  Does not retain
 * the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(){
var args__5207__auto__ = [];
var len__5200__auto___13320 = arguments.length;
var i__5201__auto___13321 = (0);
while(true){
if((i__5201__auto___13321 < len__5200__auto___13320)){
args__5207__auto__.push((arguments[i__5201__auto___13321]));

var G__13322 = (i__5201__auto___13321 + (1));
i__5201__auto___13321 = G__13322;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((3) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((3)),(0))):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5208__auto__);
});

cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body){
cljs.core$macros.assert_args.cljs$core$IFn$_invoke$arity$variadic(cljs.core$macros.doseq,cljs.core.vector_QMARK_(seq_exprs),"a vector for its binding",cljs.core.array_seq([cljs.core.even_QMARK_(cljs.core.count(seq_exprs)),"an even number of forms in binding vector"], 0));

var err = (function() { 
var G__13323__delegate = function (msg){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__13323 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__13324__i = 0, G__13324__a = new Array(arguments.length -  0);
while (G__13324__i < G__13324__a.length) {G__13324__a[G__13324__i] = arguments[G__13324__i + 0]; ++G__13324__i;}
  msg = new cljs.core.IndexedSeq(G__13324__a,0);
} 
return G__13323__delegate.call(this,msg);};
G__13323.cljs$lang$maxFixedArity = 0;
G__13323.cljs$lang$applyTo = (function (arglist__13325){
var msg = cljs.core.seq(arglist__13325);
return G__13323__delegate(msg);
});
G__13323.cljs$core$IFn$_invoke$arity$variadic = G__13323__delegate;
return G__13323;
})()
;
var step = ((function (err){
return (function cljs$core$macros$step(recform,exprs){
if(cljs.core.not(exprs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)))], null);
} else {
var k = cljs.core.first(exprs);
var v = cljs.core.second(exprs);
var seqsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("seq__");
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),cljs.core._conj(cljs.core.List.EMPTY,seqsym))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0)))));
var steppair = cljs$core$macros$step(recform__$1,cljs.core.nnext(exprs));
var needrec = (steppair.cljs$core$IFn$_invoke$arity$1 ? steppair.cljs$core$IFn$_invoke$arity$1((0)) : steppair.call(null,(0)));
var subform = (steppair.cljs$core$IFn$_invoke$arity$1 ? steppair.cljs$core$IFn$_invoke$arity$1((1)) : steppair.call(null,(1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,v),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,subform)], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"while","while",963117786))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj(cljs.core.List.EMPTY,v),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,subform),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0))))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"when","when",-576417306))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,v),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core._conj(cljs.core.List.EMPTY,subform),cljs.core.array_seq([(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,recform__$1)], 0))))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Invalid 'doseq' keyword",k], 0));
} else {
var chunksym = cljs.core.with_meta(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("chunk__"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null));
var countsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("count__");
var isym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("i__");
var recform_chunk = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),cljs.core._conj(cljs.core.List.EMPTY,seqsym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,chunksym),cljs.core._conj(cljs.core.List.EMPTY,countsym),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),cljs.core._conj(cljs.core.List.EMPTY,isym)))))], 0))));
var steppair_chunk = cljs$core$macros$step(recform_chunk,cljs.core.nnext(exprs));
var subform_chunk = (steppair_chunk.cljs$core$IFn$_invoke$arity$1 ? steppair_chunk.cljs$core$IFn$_invoke$arity$1((1)) : steppair_chunk.call(null,(1)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,seqsym),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj(cljs.core.List.EMPTY,v))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,chunksym),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core._conj(cljs.core.List.EMPTY,countsym),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core._conj(cljs.core.List.EMPTY,isym),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj(cljs.core.List.EMPTY,isym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,countsym)], 0))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,k),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj(cljs.core.List.EMPTY,chunksym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,isym)], 0)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,subform_chunk),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,seqsym),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj(cljs.core.List.EMPTY,seqsym)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),cljs.core._conj(cljs.core.List.EMPTY,seqsym))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__13311__auto__","c__13311__auto__",1894108528,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),cljs.core._conj(cljs.core.List.EMPTY,seqsym)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),cljs.core._conj(cljs.core.List.EMPTY,seqsym))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__13311__auto__","c__13311__auto__",1894108528,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__13311__auto__","c__13311__auto__",1894108528,null)))))),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0)))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,k),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj(cljs.core.List.EMPTY,seqsym)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,subform),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null)], 0)))))], 0)))))], 0)))))], 0)))))], 0))))], null);

}
}
}
}
}
});})(err))
;
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(step(null,cljs.core.seq(seq_exprs)),(1));
});

cljs.core$macros.doseq.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq13312){
var G__13313 = cljs.core.first(seq13312);
var seq13312__$1 = cljs.core.next(seq13312);
var G__13314 = cljs.core.first(seq13312__$1);
var seq13312__$2 = cljs.core.next(seq13312__$1);
var G__13315 = cljs.core.first(seq13312__$2);
var seq13312__$3 = cljs.core.next(seq13312__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__13313,G__13314,G__13315,seq13312__$3);
});

cljs.core$macros.doseq.cljs$lang$macro = true;
cljs.core$macros.array = (function cljs$core$macros$array(){
var args__5207__auto__ = [];
var len__5200__auto___13329 = arguments.length;
var i__5201__auto___13330 = (0);
while(true){
if((i__5201__auto___13330 < len__5200__auto___13329)){
args__5207__auto__.push((arguments[i__5201__auto___13330]));

var G__13331 = (i__5201__auto___13330 + (1));
i__5201__auto___13330 = G__13331;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((2) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((2)),(0))):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5208__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(rest),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("~{}"))));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("["),cljs.core.str(xs_str),cljs.core.str("]")].join(''),rest),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq13326){
var G__13327 = cljs.core.first(seq13326);
var seq13326__$1 = cljs.core.next(seq13326);
var G__13328 = cljs.core.first(seq13326__$1);
var seq13326__$2 = cljs.core.next(seq13326__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__13327,G__13328,seq13326__$2);
});

cljs.core$macros.array.cljs$lang$macro = true;
cljs.core$macros.make_array = (function cljs$core$macros$make_array(_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(((typeof size === 'number')?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.take.cljs$core$IFn$_invoke$arity$2(size,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null))))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array.","js/Array.",1235645307,null)),cljs.core._conj(cljs.core.List.EMPTY,size))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$lang$macro = true;
cljs.core$macros.list = (function cljs$core$macros$list(){
var args13332 = [];
var len__5200__auto___13339 = arguments.length;
var i__5201__auto___13340 = (0);
while(true){
if((i__5201__auto___13340 < len__5200__auto___13339)){
args13332.push((arguments[i__5201__auto___13340]));

var G__13341 = (i__5201__auto___13340 + (1));
i__5201__auto___13340 = G__13341;
continue;
} else {
}
break;
}

var G__13338 = args13332.length;
switch (G__13338) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5219__auto__ = (new cljs.core.IndexedSeq(args13332.slice((3)),(0)));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5219__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null));
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),xs)))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,x)], 0))));
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq13333){
var G__13334 = cljs.core.first(seq13333);
var seq13333__$1 = cljs.core.next(seq13333);
var G__13335 = cljs.core.first(seq13333__$1);
var seq13333__$2 = cljs.core.next(seq13333__$1);
var G__13336 = cljs.core.first(seq13333__$2);
var seq13333__$3 = cljs.core.next(seq13333__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__13334,G__13335,G__13336,seq13333__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);

cljs.core$macros.list.cljs$lang$macro = true;
cljs.core$macros.vector = (function cljs$core$macros$vector(){
var args13343 = [];
var len__5200__auto___13349 = arguments.length;
var i__5201__auto___13350 = (0);
while(true){
if((i__5201__auto___13350 < len__5200__auto___13349)){
args13343.push((arguments[i__5201__auto___13350]));

var G__13351 = (i__5201__auto___13350 + (1));
i__5201__auto___13350 = G__13351;
continue;
} else {
}
break;
}

var G__13348 = args13343.length;
switch (G__13348) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5219__auto__ = (new cljs.core.IndexedSeq(args13343.slice((2)),(0)));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5219__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count(xs);
if((cnt < (32))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector.","cljs.core/PersistentVector.",-1074647876,null)),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cnt),cljs.core._conj(cljs.core.List.EMPTY,(5)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY-NODE",".-EMPTY-NODE",-1333332641,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)))),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)))),cljs.core._conj(cljs.core.List.EMPTY,true)], 0)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq13344){
var G__13345 = cljs.core.first(seq13344);
var seq13344__$1 = cljs.core.next(seq13344);
var G__13346 = cljs.core.first(seq13344__$1);
var seq13344__$2 = cljs.core.next(seq13344__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__13345,G__13346,seq13344__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);

cljs.core$macros.vector.cljs$lang$macro = true;
cljs.core$macros.array_map = (function cljs$core$macros$array_map(){
var args13355 = [];
var len__5200__auto___13361 = arguments.length;
var i__5201__auto___13362 = (0);
while(true){
if((i__5201__auto___13362 < len__5200__auto___13361)){
args13355.push((arguments[i__5201__auto___13362]));

var G__13363 = (i__5201__auto___13362 + (1));
i__5201__auto___13362 = G__13363;
continue;
} else {
}
break;
}

var G__13360 = args13355.length;
switch (G__13360) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5219__auto__ = (new cljs.core.IndexedSeq(args13355.slice((2)),(0)));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5219__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null));
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
if((cljs.core.every_QMARK_(((function (keys){
return (function (p1__13353_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__13353_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
});})(keys))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (keys){
return (function (p1__13354_SHARP_){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__13354_SHARP_);
});})(keys))
,keys))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core._SLASH_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(kvs),(2))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)))),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)))),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core._conj(cljs.core.List.EMPTY,false)], 0))));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq13356){
var G__13357 = cljs.core.first(seq13356);
var seq13356__$1 = cljs.core.next(seq13356);
var G__13358 = cljs.core.first(seq13356__$1);
var seq13356__$2 = cljs.core.next(seq13356__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__13357,G__13358,seq13356__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array_map.cljs$lang$macro = true;
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(){
var args13365 = [];
var len__5200__auto___13371 = arguments.length;
var i__5201__auto___13372 = (0);
while(true){
if((i__5201__auto___13372 < len__5200__auto___13371)){
args13365.push((arguments[i__5201__auto___13372]));

var G__13373 = (i__5201__auto___13372 + (1));
i__5201__auto___13372 = G__13373;
continue;
} else {
}
break;
}

var G__13370 = args13365.length;
switch (G__13370) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5219__auto__ = (new cljs.core.IndexedSeq(args13365.slice((2)),(0)));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5219__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs);
var ks = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pairs);
var vs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,pairs);
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArrays",".fromArrays",1110244209,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),ks)))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),vs))))], 0)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null));
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq13366){
var G__13367 = cljs.core.first(seq13366);
var seq13366__$1 = cljs.core.next(seq13366);
var G__13368 = cljs.core.first(seq13366__$1);
var seq13366__$2 = cljs.core.next(seq13366__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__13367,G__13368,seq13366__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);

cljs.core$macros.hash_map.cljs$lang$macro = true;
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(){
var args13377 = [];
var len__5200__auto___13383 = arguments.length;
var i__5201__auto___13384 = (0);
while(true){
if((i__5201__auto___13384 < len__5200__auto___13383)){
args13377.push((arguments[i__5201__auto___13384]));

var G__13385 = (i__5201__auto___13384 + (1));
i__5201__auto___13384 = G__13385;
continue;
} else {
}
break;
}

var G__13382 = args13377.length;
switch (G__13382) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5219__auto__ = (new cljs.core.IndexedSeq(args13377.slice((2)),(0)));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5219__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count(xs) <= (8))) && (cljs.core.every_QMARK_((function (p1__13375_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__13375_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13376_SHARP_){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(_AMPERSAND_env,p1__13376_SHARP_);
}),xs))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count(xs)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet.","cljs.core/PersistentHashSet.",300313251,null)),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj(cljs.core.List.EMPTY,null),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.count(xs)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(xs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)))))),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,null)], 0))));
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)))),cljs.core._conj(cljs.core.List.EMPTY,true)], 0)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null));
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq13378){
var G__13379 = cljs.core.first(seq13378);
var seq13378__$1 = cljs.core.next(seq13378);
var G__13380 = cljs.core.first(seq13378__$1);
var seq13378__$2 = cljs.core.next(seq13378__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__13379,G__13380,seq13378__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);

cljs.core$macros.hash_set.cljs$lang$macro = true;
cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(kvs),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("~{}:~{}"))));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("{"),cljs.core.str(kvs_str),cljs.core.str("}")].join(''),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,kvs)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(){
var args__5207__auto__ = [];
var len__5200__auto___13396 = arguments.length;
var i__5201__auto___13397 = (0);
while(true){
if((i__5201__auto___13397 < len__5200__auto___13396)){
args__5207__auto__.push((arguments[i__5201__auto___13397]));

var G__13398 = (i__5201__auto___13397 + (1));
i__5201__auto___13397 = G__13398;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((2) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((2)),(0))):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5208__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (sym_or_str_QMARK_){
return (function (p__13390){
var vec__13391 = p__13390;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13391,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13391,(1),null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k));
});})(sym_or_str_QMARK_))
,coll));
});})(sym_or_str_QMARK_))
;
var kvs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),rest)));
var sym_pairs = filter_on_keys(cljs.core.symbol_QMARK_,kvs);
var expr__GT_local = cljs.core.zipmap(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(sym_or_str_QMARK_),cljs.core.keys(kvs)),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym));
var obj = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("obj");
if(cljs.core.empty_QMARK_(rest)){
return cljs.core$macros.js_obj_STAR_(cljs.core.List.EMPTY);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,clojure.set.map_invert(expr__GT_local)),cljs.core._conj(cljs.core.List.EMPTY,obj),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core$macros.js_obj_STAR_(filter_on_keys(cljs.core.string_QMARK_,kvs)))], 0)))))),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__13392){
var vec__13393 = p__13392;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13393,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13393,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj(cljs.core.List.EMPTY,obj),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,k),cljs.core._conj(cljs.core.List.EMPTY,v)], 0))));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__13394){
var vec__13395 = p__13394;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13395,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13395,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj(cljs.core.List.EMPTY,obj),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,v),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(kvs,k))], 0))));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),cljs.core._conj(cljs.core.List.EMPTY,obj)], 0))));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq13387){
var G__13388 = cljs.core.first(seq13387);
var seq13387__$1 = cljs.core.next(seq13387);
var G__13389 = cljs.core.first(seq13387__$1);
var seq13387__$2 = cljs.core.next(seq13387__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__13388,G__13389,seq13387__$2);
});

cljs.core$macros.js_obj.cljs$lang$macro = true;
cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,a),"~{}.length"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null));
});

cljs.core$macros.alength.cljs$lang$macro = true;
/**
 * Maps an expression across an array a, using an index named idx, and
 * return value named ret, initialized to a clone of a, then setting
 * each element of ret to the evaluation of expr, returning the new
 * array ret.
 */
cljs.core$macros.amap = (function cljs$core$macros$amap(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__13399__auto__","a__13399__auto__",704385137,null)),cljs.core._conj(cljs.core.List.EMPTY,a),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,ret),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__13399__auto__","a__13399__auto__",704385137,null))))))], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,idx),cljs.core._conj(cljs.core.List.EMPTY,(0))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj(cljs.core.List.EMPTY,idx),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__13399__auto__","a__13399__auto__",704385137,null))))))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj(cljs.core.List.EMPTY,ret),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,idx),cljs.core._conj(cljs.core.List.EMPTY,expr)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),cljs.core._conj(cljs.core.List.EMPTY,idx)))))))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,ret)], 0)))))], 0)))))], 0))));
});

cljs.core$macros.amap.cljs$lang$macro = true;
/**
 * Reduces an expression across an array a, using an index named idx,
 * and return value named ret, initialized to init, setting ret to the
 * evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__13400__auto__","a__13400__auto__",1754596580,null)),cljs.core._conj(cljs.core.List.EMPTY,a)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,idx),cljs.core._conj(cljs.core.List.EMPTY,(0)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,ret),cljs.core._conj(cljs.core.List.EMPTY,init)], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj(cljs.core.List.EMPTY,idx),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__13400__auto__","a__13400__auto__",1754596580,null))))))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),cljs.core._conj(cljs.core.List.EMPTY,idx))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,expr)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,ret)], 0)))))], 0)))))], 0))));
});

cljs.core$macros.areduce.cljs$lang$macro = true;
/**
 * bindings => name n
 * 
 * Repeatedly executes body (presumably for side-effects) with name
 * bound to integers from 0 through n-1.
 */
cljs.core$macros.dotimes = (function cljs$core$macros$dotimes(){
var args__5207__auto__ = [];
var len__5200__auto___13406 = arguments.length;
var i__5201__auto___13407 = (0);
while(true){
if((i__5201__auto___13407 < len__5200__auto___13406)){
args__5207__auto__.push((arguments[i__5201__auto___13407]));

var G__13408 = (i__5201__auto___13407 + (1));
i__5201__auto___13407 = G__13408;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((3) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((3)),(0))):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5208__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first(bindings);
var n = cljs.core.second(bindings);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__13401__auto__","n__13401__auto__",-1576742689,null)),cljs.core._conj(cljs.core.List.EMPTY,n)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,i),cljs.core._conj(cljs.core.List.EMPTY,(0))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj(cljs.core.List.EMPTY,i),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__13401__auto__","n__13401__auto__",-1576742689,null))], 0))))),cljs.core.array_seq([body,cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),cljs.core._conj(cljs.core.List.EMPTY,i)))))))))], 0)))))], 0)))))], 0))));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq13402){
var G__13403 = cljs.core.first(seq13402);
var seq13402__$1 = cljs.core.next(seq13402);
var G__13404 = cljs.core.first(seq13402__$1);
var seq13402__$2 = cljs.core.next(seq13402__$1);
var G__13405 = cljs.core.first(seq13402__$2);
var seq13402__$3 = cljs.core.next(seq13402__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__13403,G__13404,G__13405,seq13402__$3);
});

cljs.core$macros.dotimes.cljs$lang$macro = true;
/**
 * Throws an exception if the given option map contains keys not listed
 * as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(){
var args__5207__auto__ = [];
var len__5200__auto___13412 = arguments.length;
var i__5201__auto___13413 = (0);
while(true){
if((i__5201__auto___13413 < len__5200__auto___13412)){
args__5207__auto__.push((arguments[i__5201__auto___13413]));

var G__13414 = (i__5201__auto___13413 + (1));
i__5201__auto___13413 = G__13414;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((1) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((1)),(0))):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5208__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.keys(options)),valid_keys))){
throw cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"Only these options are valid: ",cljs.core.first(valid_keys),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13409_SHARP_){
return [cljs.core.str(", "),cljs.core.str(p1__13409_SHARP_)].join('');
}),cljs.core.rest(valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq13410){
var G__13411 = cljs.core.first(seq13410);
var seq13410__$1 = cljs.core.next(seq13410);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__13411,seq13410__$1);
});
/**
 * Creates a new multimethod with the associated dispatch function.
 * The docstring and attribute-map are optional.
 * 
 * Options are key-value pairs and may be one of:
 * :default    the default dispatch value, defaults to :default
 * :hierarchy  the isa? hierarchy to use for dispatching
 * defaults to the global hierarchy
 */
cljs.core$macros.defmulti = (function cljs$core$macros$defmulti(){
var args__5207__auto__ = [];
var len__5200__auto___13424 = arguments.length;
var i__5201__auto___13425 = (0);
while(true){
if((i__5201__auto___13425 < len__5200__auto___13424)){
args__5207__auto__.push((arguments[i__5201__auto___13425]));

var G__13426 = (i__5201__auto___13425 + (1));
i__5201__auto___13425 = G__13426;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((3) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((3)),(0))):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5208__auto__);
});

cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,mm_name,options){
var docstring = ((typeof cljs.core.first(options) === 'string')?cljs.core.first(options):null);
var options__$1 = ((typeof cljs.core.first(options) === 'string')?cljs.core.next(options):options);
var m = ((cljs.core.map_QMARK_(cljs.core.first(options__$1)))?cljs.core.first(options__$1):cljs.core.PersistentArrayMap.EMPTY);
var options__$2 = ((cljs.core.map_QMARK_(cljs.core.first(options__$1)))?cljs.core.next(options__$1):options__$1);
var dispatch_fn = cljs.core.first(options__$2);
var options__$3 = cljs.core.next(options__$2);
var m__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m);
var m__$2 = (cljs.core.truth_(cljs.core.meta(mm_name))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(mm_name),m__$1):m__$1);
var mm_ns = [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env)))].join('');
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(options__$3),(1))){
throw (new Error("The syntax for defmulti has changed. Example: (defmulti name dispatch-fn :default dispatch-value)"));
} else {
}

var options__$4 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,options__$3);
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"default","default",-1987822328));
cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(options__$4,cljs.core.array_seq([new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)], 0));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defonce","cljs.core$macros/defonce",-1096231613,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(mm_name,m__$2)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__13415__auto__","method-table__13415__auto__",-1606611985,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__13416__auto__","prefer-table__13416__auto__",723734132,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())))))))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__13417__auto__","method-cache__13417__auto__",-642898285,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())))))))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__13418__auto__","cached-hierarchy__13418__auto__",2012576777,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())))))))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__13419__auto__","hierarchy__13419__auto__",-450240200,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),cljs.core._conj(cljs.core.List.EMPTY,options__$4),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-global-hierarchy","cljs.core/get-global-hierarchy",48052871,null))))))], 0)))))], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","MultiFn.","cljs.core/MultiFn.",1073941573,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),cljs.core._conj(cljs.core.List.EMPTY,mm_ns),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.name(mm_name))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,dispatch_fn),cljs.core._conj(cljs.core.List.EMPTY,default$),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__13419__auto__","hierarchy__13419__auto__",-450240200,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__13415__auto__","method-table__13415__auto__",-1606611985,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__13416__auto__","prefer-table__13416__auto__",723734132,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__13417__auto__","method-cache__13417__auto__",-642898285,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__13418__auto__","cached-hierarchy__13418__auto__",2012576777,null))], 0)))))], 0)))))], 0))));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq13420){
var G__13421 = cljs.core.first(seq13420);
var seq13420__$1 = cljs.core.next(seq13420);
var G__13422 = cljs.core.first(seq13420__$1);
var seq13420__$2 = cljs.core.next(seq13420__$1);
var G__13423 = cljs.core.first(seq13420__$2);
var seq13420__$3 = cljs.core.next(seq13420__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__13421,G__13422,G__13423,seq13420__$3);
});

cljs.core$macros.defmulti.cljs$lang$macro = true;
/**
 * Creates and installs a new method of multimethod associated with dispatch-value.
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(){
var args__5207__auto__ = [];
var len__5200__auto___13432 = arguments.length;
var i__5201__auto___13433 = (0);
while(true){
if((i__5201__auto___13433 < len__5200__auto___13432)){
args__5207__auto__.push((arguments[i__5201__auto___13433]));

var G__13434 = (i__5201__auto___13433 + (1));
i__5201__auto___13433 = G__13434;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((4) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((4)),(0))):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5208__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-add-method","cljs.core/-add-method",571092113,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(multifn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","MultiFn","cljs.core/MultiFn",1487419554,null)], null))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,dispatch_val),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),fn_tail))))], 0))));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq13427){
var G__13428 = cljs.core.first(seq13427);
var seq13427__$1 = cljs.core.next(seq13427);
var G__13429 = cljs.core.first(seq13427__$1);
var seq13427__$2 = cljs.core.next(seq13427__$1);
var G__13430 = cljs.core.first(seq13427__$2);
var seq13427__$3 = cljs.core.next(seq13427__$2);
var G__13431 = cljs.core.first(seq13427__$3);
var seq13427__$4 = cljs.core.next(seq13427__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__13428,G__13429,G__13430,G__13431,seq13427__$4);
});

cljs.core$macros.defmethod.cljs$lang$macro = true;
/**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__13435__auto__","start__13435__auto__",1768828571,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__13436__auto__","ret__13436__auto__",-1843450405,null)),cljs.core._conj(cljs.core.List.EMPTY,expr)], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("core","str","core/str",-1563921891,null)),cljs.core._conj(cljs.core.List.EMPTY,"Elapsed time: "),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__13435__auto__","start__13435__auto__",1768828571,null))], 0))))),cljs.core._conj(cljs.core.List.EMPTY," msecs")], 0))))))))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__13436__auto__","ret__13436__auto__",-1843450405,null))], 0))));
});

cljs.core$macros.time.cljs$lang$macro = true;
/**
 * Runs expr iterations times in the context of a let expression with
 * the given bindings, then prints out the bindings and the expr
 * followed by number of iterations and total time. The optional
 * argument print-fn, defaulting to println, sets function used to
 * print the result. expr's string representation will be produced
 * using pr-str in any case.
 */
cljs.core$macros.simple_benchmark = (function cljs$core$macros$simple_benchmark(){
var args__5207__auto__ = [];
var len__5200__auto___13450 = arguments.length;
var i__5201__auto___13451 = (0);
while(true){
if((i__5201__auto___13451 < len__5200__auto___13450)){
args__5207__auto__.push((arguments[i__5201__auto___13451]));

var G__13452 = (i__5201__auto___13451 + (1));
i__5201__auto___13451 = G__13452;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((5) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((5)),(0))):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5208__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__13448){
var map__13449 = p__13448;
var map__13449__$1 = ((cljs.core.seq_QMARK_(map__13449))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13449):map__13449);
var print_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13449__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([bindings], 0));
var expr_str = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,bindings),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__13437__auto__","start__13437__auto__",-760798023,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__13438__auto__","ret__13438__auto__",-1327341318,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"___13439__auto__","___13439__auto__",177026313,null)),cljs.core._conj(cljs.core.List.EMPTY,iterations)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,expr)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__13440__auto__","end__13440__auto__",1990605630,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))))))))),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__13441__auto__","elapsed__13441__auto__",-1977806587,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__13440__auto__","end__13440__auto__",1990605630,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__13437__auto__","start__13437__auto__",-760798023,null))], 0)))))], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,print_fn),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj(cljs.core.List.EMPTY,bs_str),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,", "),cljs.core._conj(cljs.core.List.EMPTY,expr_str),cljs.core._conj(cljs.core.List.EMPTY,", "),cljs.core._conj(cljs.core.List.EMPTY,iterations),cljs.core._conj(cljs.core.List.EMPTY," runs, "),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__13441__auto__","elapsed__13441__auto__",-1977806587,null)),cljs.core._conj(cljs.core.List.EMPTY," msecs")], 0)))))))))], 0)))))], 0))));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq13442){
var G__13443 = cljs.core.first(seq13442);
var seq13442__$1 = cljs.core.next(seq13442);
var G__13444 = cljs.core.first(seq13442__$1);
var seq13442__$2 = cljs.core.next(seq13442__$1);
var G__13445 = cljs.core.first(seq13442__$2);
var seq13442__$3 = cljs.core.next(seq13442__$2);
var G__13446 = cljs.core.first(seq13442__$3);
var seq13442__$4 = cljs.core.next(seq13442__$3);
var G__13447 = cljs.core.first(seq13442__$4);
var seq13442__$5 = cljs.core.next(seq13442__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__13443,G__13444,G__13445,G__13446,G__13447,seq13442__$5);
});

cljs.core$macros.simple_benchmark.cljs$lang$macro = true;
cljs.core$macros.cs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.cljs$core$IFn$_invoke$arity$2((97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(){
var args13453 = [];
var len__5200__auto___13457 = arguments.length;
var i__5201__auto___13458 = (0);
while(true){
if((i__5201__auto___13458 < len__5200__auto___13457)){
args13453.push((arguments[i__5201__auto___13458]));

var G__13459 = (i__5201__auto___13458 + (1));
i__5201__auto___13458 = G__13459;
continue;
} else {
}
break;
}

var G__13455 = args13453.length;
switch (G__13455) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13453.length)].join('')));

}
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((1));
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
var prop = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("-cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
var f = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
if((n <= (20))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__13456 = (n - (1));
return (cljs.core$macros.cs.cljs$core$IFn$_invoke$arity$1 ? cljs.core$macros.cs.cljs$core$IFn$_invoke$arity$1(G__13456) : cljs.core$macros.cs.call(null,G__13456));
})()),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-rest","cljs.core/-rest",-1829241664,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null))))))], 0)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,n)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,prop)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,f),cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core$macros.cs)))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core$macros.cs)))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((n + (1))))], 0)))))], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj(cljs.core.List.EMPTY,"Only up to 20 arguments supported on functions"))))))));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;
cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"apply-to","apply-to",-1858571928,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null))], 0)))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null))))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","zero?","cljs.core$macros/zero?",-65998367,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0())], 0)))))], 0)))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,false)], 0)))))], 0))));
});

cljs.core$macros.gen_apply_to.cljs$lang$macro = true;
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 * on a fresh StringBuffer.  Returns the string created by any nested
 * printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(){
var args__5207__auto__ = [];
var len__5200__auto___13466 = arguments.length;
var i__5201__auto___13467 = (0);
while(true){
if((i__5201__auto___13467 < len__5200__auto___13466)){
args__5207__auto__.push((arguments[i__5201__auto___13467]));

var G__13468 = (i__5201__auto___13467 + (1));
i__5201__auto___13467 = G__13468;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((2) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((2)),(0))):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5208__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__13461__auto__","sb__13461__auto__",-69145325,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"string.StringBuffer.","string.StringBuffer.",1913246471,null))))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","binding","cljs.core$macros/binding",1855847304,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null)),cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__13462__auto__","x__13462__auto__",-114273786,null))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".append",".append",1595439852,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__13461__auto__","sb__13461__auto__",-69145325,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__13462__auto__","x__13462__auto__",-114273786,null))], 0)))))], 0)))))], 0)))))),cljs.core.array_seq([body], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__13461__auto__","sb__13461__auto__",-69145325,null))))))], 0))));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq13463){
var G__13464 = cljs.core.first(seq13463);
var seq13463__$1 = cljs.core.next(seq13463);
var G__13465 = cljs.core.first(seq13463__$1);
var seq13463__$2 = cljs.core.next(seq13463__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__13464,G__13465,seq13463__$2);
});

cljs.core$macros.with_out_str.cljs$lang$macro = true;
/**
 * Expands to code which yields a lazy sequence of the concatenation
 * of the supplied colls.  Each coll expr is not evaluated until it is
 * needed.
 * 
 * (lazy-cat xs ys zs) === (concat (lazy-seq xs) (lazy-seq ys) (lazy-seq zs))
 */
cljs.core$macros.lazy_cat = (function cljs$core$macros$lazy_cat(){
var args__5207__auto__ = [];
var len__5200__auto___13473 = arguments.length;
var i__5201__auto___13474 = (0);
while(true){
if((i__5201__auto___13474 < len__5200__auto___13473)){
args__5207__auto__.push((arguments[i__5201__auto___13474]));

var G__13475 = (i__5201__auto___13474 + (1));
i__5201__auto___13474 = G__13475;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((2) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((2)),(0))):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5208__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13469_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,p1__13469_SHARP_),new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null));
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq13470){
var G__13471 = cljs.core.first(seq13470);
var seq13470__$1 = cljs.core.next(seq13470);
var G__13472 = cljs.core.first(seq13470__$1);
var seq13470__$2 = cljs.core.next(seq13470__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__13471,G__13472,seq13470__$2);
});

cljs.core$macros.lazy_cat.cljs$lang$macro = true;
cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,s),"''+~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_str.cljs$lang$macro = true;
cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),cljs.core._conj(cljs.core.List.EMPTY,ty))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ITER_SYMBOL","cljs.core/ITER_SYMBOL",-2091399233,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__13476__auto__","this__13476__auto__",1227296804,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__13476__auto__","this__13476__auto__",1227296804,null))))))], 0)))))], 0)))))], 0))));
});

cljs.core$macros.es6_iterable.cljs$lang$macro = true;
/**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,p__13477){
var vec__13481 = p__13477;
var quote = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13481,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13481,(1),null);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quote,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to ns-interns must be a quoted symbol"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("core","and","core/and",604631615,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null))),cljs.core.list(new cljs.core.Symbol("core","symbol?","core/symbol?",1819594398,null),new cljs.core.Symbol(null,"ns","ns",2082130287,null)))], 0)))].join('')));
}

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__13481,quote,ns){
return (function (p__13482){
var vec__13483 = p__13482;
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13483,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13483,(1),null);
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.name(sym)))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(ns),cljs.core.name(sym)))))))))));
});})(vec__13481,quote,ns))
,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null))))))))], 0))));
});

cljs.core$macros.ns_interns.cljs$lang$macro = true;
/**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,p__13484,p__13485){
var vec__13488 = p__13484;
var quote0 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13488,(0),null);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13488,(1),null);
var vec__13489 = p__13485;
var quote1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13489,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13489,(1),null);
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quote0,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quote1,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((sym instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arguments to ns-unmap must be quoted symbols"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("core","and","core/and",604631615,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"quote0","quote0",1319130280,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null))),cljs.core.list(new cljs.core.Symbol("core","symbol?","core/symbol?",1819594398,null),new cljs.core.Symbol(null,"ns","ns",2082130287,null)),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"quote1","quote1",-2140587747,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null))),cljs.core.list(new cljs.core.Symbol("core","symbol?","core/symbol?",1819594398,null),new cljs.core.Symbol(null,"sym","sym",195671222,null)))], 0)))].join('')));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null),cljs.core.dissoc,cljs.core.array_seq([sym], 0));

return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-delete","cljs.core$macros/js-delete",387769082,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(ns)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1([cljs.core.str(sym)].join('')))], 0))));
});

cljs.core$macros.ns_unmap.cljs$lang$macro = true;
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(){
var args__5207__auto__ = [];
var len__5200__auto___13495 = arguments.length;
var i__5201__auto___13496 = (0);
while(true){
if((i__5201__auto___13496 < len__5200__auto___13495)){
args__5207__auto__.push((arguments[i__5201__auto___13496]));

var G__13497 = (i__5201__auto___13496 + (1));
i__5201__auto___13496 = G__13497;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((4) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((4)),(0))):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5208__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-vreset!","cljs.core/-vreset!",-1186516972,null)),cljs.core._conj(cljs.core.List.EMPTY,vol),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,f),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-deref","cljs.core/-deref",-1260480154,null)),cljs.core._conj(cljs.core.List.EMPTY,vol))))),cljs.core.array_seq([args], 0)))))], 0))));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq13490){
var G__13491 = cljs.core.first(seq13490);
var seq13490__$1 = cljs.core.next(seq13490);
var G__13492 = cljs.core.first(seq13490__$1);
var seq13490__$2 = cljs.core.next(seq13490__$1);
var G__13493 = cljs.core.first(seq13490__$2);
var seq13490__$3 = cljs.core.next(seq13490__$2);
var G__13494 = cljs.core.first(seq13490__$3);
var seq13490__$4 = cljs.core.next(seq13490__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13491,G__13492,G__13493,G__13494,seq13490__$4);
});

cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;
cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog","js/goog",-70605150,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"nodeGlobalRequire","nodeGlobalRequire",167018599,null)),cljs.core._conj(cljs.core.List.EMPTY,f)))))], 0))));
});

cljs.core$macros.load_file_STAR_.cljs$lang$macro = true;
/**
 * If form represents a macro form, returns its expansion,
 * else returns form.
 */
cljs.core$macros.macroexpand_1 = (function cljs$core$macros$macroexpand_1(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to macroexpand-1 must be quoted"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("core","=","core/=",-1498278496,null),cljs.core.list(new cljs.core.Symbol("core","first","core/first",982850208,null),new cljs.core.Symbol(null,"quoted","quoted",-537090817,null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)))], 0)))].join('')));
}

var form = cljs.core.second(quoted);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.analyzer.macroexpand_1(_AMPERSAND_env,form)))));
});

cljs.core$macros.macroexpand_1.cljs$lang$macro = true;
/**
 * Repeatedly calls macroexpand-1 on form until it no longer
 * represents a macro form, then returns it.  Note neither
 * macroexpand-1 nor macroexpand expand macros in subforms.
 */
cljs.core$macros.macroexpand = (function cljs$core$macros$macroexpand(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to macroexpand must be quoted"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("core","=","core/=",-1498278496,null),cljs.core.list(new cljs.core.Symbol("core","first","core/first",982850208,null),new cljs.core.Symbol(null,"quoted","quoted",-537090817,null)),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"quote","quote",1377916282,null)))], 0)))].join('')));
}

var form = cljs.core.second(quoted);
var env = _AMPERSAND_env;
var form__$1 = form;
var form_SINGLEQUOTE_ = cljs.analyzer.macroexpand_1(env,form__$1);
while(true){
if(!((form__$1 === form_SINGLEQUOTE_))){
var G__13498 = form_SINGLEQUOTE_;
var G__13499 = cljs.analyzer.macroexpand_1(env,form_SINGLEQUOTE_);
form__$1 = G__13498;
form_SINGLEQUOTE_ = G__13499;
continue;
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj(cljs.core.List.EMPTY,form_SINGLEQUOTE_))));
}
break;
}
});

cljs.core$macros.macroexpand.cljs$lang$macro = true;
cljs.core$macros.multi_arity_fn_QMARK_ = (function cljs$core$macros$multi_arity_fn_QMARK_(fdecl){
return ((1) < cljs.core.count(fdecl));
});
cljs.core$macros.variadic_fn_QMARK_ = (function cljs$core$macros$variadic_fn_QMARK_(fdecl){
var and__4149__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(fdecl));
if(and__4149__auto__){
return cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.ffirst(fdecl));
} else {
return and__4149__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(){
var args13500 = [];
var len__5200__auto___13505 = arguments.length;
var i__5201__auto___13506 = (0);
while(true){
if((i__5201__auto___13506 < len__5200__auto___13505)){
args13500.push((arguments[i__5201__auto___13506]));

var G__13507 = (i__5201__auto___13506 + (1));
i__5201__auto___13506 = G__13507;
continue;
} else {
}
break;
}

var G__13502 = args13500.length;
switch (G__13502) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13500.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3(sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__13503,solo){
var vec__13504 = p__13503;
var arglist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13504,(0),null);
var body = cljs.core.nthnext(vec__13504,(1));
var method = vec__13504;
var sig = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var restarg = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("seq");
var get_delegate = ((function (sig,restarg,vec__13504,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});})(sig,restarg,vec__13504,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__13504,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("-"),cljs.core.str(get_delegate())].join(''));
});})(sig,restarg,vec__13504,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__13504,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,param),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj(cljs.core.List.EMPTY,"/Users/tahmid/code/clojure/replete/ClojureScript/replete/out/cljs/core.cljc"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj(cljs.core.List.EMPTY,2592),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj(cljs.core.List.EMPTY,49),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj(cljs.core.List.EMPTY,2592),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj(cljs.core.List.EMPTY,54),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))))),cljs.core._conj(cljs.core.List.EMPTY,restarg))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,restarg),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj(cljs.core.List.EMPTY,"/Users/tahmid/code/clojure/replete/ClojureScript/replete/out/cljs/core.cljc"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj(cljs.core.List.EMPTY,2593),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj(cljs.core.List.EMPTY,51),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj(cljs.core.List.EMPTY,2593),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj(cljs.core.List.EMPTY,55),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))))),cljs.core._conj(cljs.core.List.EMPTY,restarg)))))], 0)))));
});})(sig,restarg,vec__13504,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__13504,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count(sig))){
var params = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2((cljs.core.count(sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,restarg)))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(param_bind,cljs.core.array_seq([params], 0))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,sym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,get_delegate()),params,cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,restarg)], 0)))))], 0)))))], 0))))))))))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,restarg)))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,sym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,get_delegate()),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj(cljs.core.List.EMPTY,restarg)))))))))], 0))))))))))));
}
});})(sig,restarg,vec__13504,arglist,body,method))
;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,sym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,get_delegate_prop())], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(sig)),body))))))))], 0))))),cljs.core.array_seq([(cljs.core.truth_(solo)?cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,sym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,(cljs.core.count(sig) - (1)))], 0))))))))):null),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,sym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$applyTo","-cljs$lang$applyTo",-225535181,null))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,apply_to())], 0)))))], 0))));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;
cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__13509__auto__","len__13509__auto__",1311279988,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null))))))))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__13510__auto__","i__13510__auto__",-1518029965,null)),cljs.core._conj(cljs.core.List.EMPTY,(0))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__13510__auto__","i__13510__auto__",-1518029965,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__13509__auto__","len__13509__auto__",1311279988,null))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),cljs.core._conj(cljs.core.List.EMPTY,dest),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__13510__auto__","i__13510__auto__",-1518029965,null))], 0)))))], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__13510__auto__","i__13510__auto__",-1518029965,null))))))))))], 0)))))], 0)))))], 0))));
});

cljs.core$macros.copy_arguments.cljs$lang$macro = true;
cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__13513){
var vec__13516 = p__13513;
var vec__13517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13516,(0),null);
var arglist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13517,(0),null);
var body = cljs.core.nthnext(vec__13517,(1));
var method = vec__13517;
var fdecl = vec__13516;
var dest_args = ((function (vec__13516,vec__13517,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__13516,vec__13517,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,n)], 0))));
});})(vec__13516,vec__13517,arglist,body,method,fdecl))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(c));
});})(vec__13516,vec__13517,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str(name)].join(''));
var sig = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var c_1 = (cljs.core.count(sig) - (1));
var meta__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),c_1,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core._conj(cljs.core.List.EMPTY,arglist),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(name,meta__$1)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__13511__auto__","args__13511__auto__",-1783789722,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null))))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__13511__auto__","args__13511__auto__",-1783789722,null)))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__13512__auto__","argseq__13512__auto__",-1303181030,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj(cljs.core.List.EMPTY,c_1),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__13511__auto__","args__13511__auto__",-1783789722,null))))))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj(cljs.core.List.EMPTY,"/Users/tahmid/code/clojure/replete/ClojureScript/replete/out/cljs/core.cljc"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj(cljs.core.List.EMPTY,2640),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj(cljs.core.List.EMPTY,55),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj(cljs.core.List.EMPTY,2640),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj(cljs.core.List.EMPTY,75),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__13511__auto__","args__13511__auto__",-1783789722,null)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,c_1)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0)))))], 0)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,rname),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args(c_1),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__13512__auto__","argseq__13512__auto__",-1303181030,null))], 0)))))], 0)))))], 0)))))], 0)))))], 0)))))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2(rname,method))], 0))));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (n){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,n)], 0))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count(sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,rname),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(c)].join(''))),dest_args(c)))))], 0))))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__13530){
var vec__13532 = p__13530;
var sig = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13532,(0),null);
var body = cljs.core.nthnext(vec__13532,(1));
var method = vec__13532;
if(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3(name,method,false);
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,name),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("-cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count(sig))].join('')))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core._conj(cljs.core.List.EMPTY,method)))))], 0))));
}
});
var rname = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str(name)].join(''));
var arglists = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__13518_SHARP_){
return cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),p1__13518_SHARP_);
});})(rname,arglists))
;
var variadic = cljs.core.boolean$(cljs.core.some(varsig_QMARK_,arglists));
var sigs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(varsig_QMARK_,arglists);
var maxfa = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(varsig_QMARK_,arglists))) - (2))], null)));
var meta__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),variadic,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),maxfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),sigs,new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists,new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(meta,arglists))], null));
var args_sym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("args");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(name,meta__$1)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0())))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,args_sym),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null))))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj(cljs.core.List.EMPTY,args_sym))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj(cljs.core.List.EMPTY,args_sym))))),cljs.core.array_seq([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym){
return (function (p1__13519_SHARP_){
return fixed_arity(rname,p1__13519_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym))
,cljs.core.array_seq([sigs], 0)),cljs.core._conj(cljs.core.List.EMPTY,((variadic)?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__13520__auto__","argseq__13520__auto__",-2019222315,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.with_meta(new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj(cljs.core.List.EMPTY,"/Users/tahmid/code/clojure/replete/ClojureScript/replete/out/cljs/core.cljc"),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj(cljs.core.List.EMPTY,2697),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj(cljs.core.List.EMPTY,58),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj(cljs.core.List.EMPTY,2697),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj(cljs.core.List.EMPTY,78),cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj(cljs.core.List.EMPTY,true)], 0))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj(cljs.core.List.EMPTY,args_sym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,maxfa)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,(0))], 0)))))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,rname),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args(maxfa),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__13520__auto__","argseq__13520__auto__",-2019222315,null))], 0)))))], 0)))))], 0)))):cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj(cljs.core.List.EMPTY,"Invalid arity: "),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj(cljs.core.List.EMPTY,args_sym)))))], 0))))))))))))))], 0)))))], 0)))))], 0)))))], 0))))),cljs.core.array_seq([cljs.core.map.cljs$core$IFn$_invoke$arity$2(fn_method,fdecl),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,name),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null))], 0))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,maxfa)], 0)))))], 0))));
});
/**
 * Same as (def name (core/fn [params* ] exprs*)) or (def
 * name (core/fn ([params* ] exprs*)+)) with any doc-string or attrs added
 * to the var metadata. prepost-map defines a map with optional keys
 * :pre and :post that contain collections of pre or post conditions.
 * @param {...*} var_args
 */
cljs.core$macros.defn = (function() { 
var cljs$core$macros$defn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
throw (new Error("First argument to defn must be a symbol"));
}

var m = ((typeof cljs.core.first(fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.first(fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first(fdecl) === 'string')?cljs.core.next(fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,cljs.core.first(fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_(cljs.core.first(fdecl__$1)))?cljs.core.next(fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl__$2)))?cljs.core._conj(cljs.core.List.EMPTY,fdecl__$2):fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m__$1,cljs.core.last(fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_(cljs.core.last(fdecl__$3)))?cljs.core.butlast(fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core$macros.sigs(fdecl__$4)),new cljs.core.Symbol(null,"quote","quote",1377916282,null))], null),m__$2);
var m__$4 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(cljs.core.meta(name))?cljs.core.meta(name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_(fdecl__$4))){
return cljs.core$macros.multi_arity_fn(name,m__$4,fdecl__$4);
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_(fdecl__$4))){
return cljs.core$macros.variadic_fn(name,m__$4,fdecl__$4);
} else {
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.cons(new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),fdecl__$4)),cljs.core.with_meta(name,m__$4)),new cljs.core.Symbol(null,"def","def",597100991,null));

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__13533__i = 0, G__13533__a = new Array(arguments.length -  3);
while (G__13533__i < G__13533__a.length) {G__13533__a[G__13533__i] = arguments[G__13533__i + 3]; ++G__13533__i;}
  fdecl = new cljs.core.IndexedSeq(G__13533__a,0);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__13534){
var _AMPERSAND_form = cljs.core.first(arglist__13534);
arglist__13534 = cljs.core.next(arglist__13534);
var _AMPERSAND_env = cljs.core.first(arglist__13534);
arglist__13534 = cljs.core.next(arglist__13534);
var name = cljs.core.first(arglist__13534);
var fdecl = cljs.core.rest(arglist__13534);
return cljs$core$macros$defn__delegate(_AMPERSAND_form,_AMPERSAND_env,name,fdecl);
});
cljs$core$macros$defn.cljs$core$IFn$_invoke$arity$variadic = cljs$core$macros$defn__delegate;
return cljs$core$macros$defn;
})()
;
cljs.core$macros.defn.cljs$lang$macro = true;
/**
 * Like defn, but the resulting function name is declared as a
 * macro and will be used as a macro by the compiler when it is
 * called.
 */
cljs.core$macros.defmacro = (function cljs$core$macros$defmacro(){
var args__5207__auto__ = [];
var len__5200__auto___13539 = arguments.length;
var i__5201__auto___13540 = (0);
while(true){
if((i__5201__auto___13540 < len__5200__auto___13539)){
args__5207__auto__.push((arguments[i__5201__auto___13540]));

var G__13541 = (i__5201__auto___13540 + (1));
i__5201__auto___13540 = G__13541;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((3) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((3)),(0))):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5208__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true));
var args__$1 = args;
while(true){
var f = cljs.core.first(args__$1);
if(typeof f === 'string'){
var G__13542 = cljs.core.cons(f,p);
var G__13543 = cljs.core.next(args__$1);
p = G__13542;
args__$1 = G__13543;
continue;
} else {
if(cljs.core.map_QMARK_(f)){
var G__13544 = cljs.core.cons(f,p);
var G__13545 = cljs.core.next(args__$1);
p = G__13544;
args__$1 = G__13545;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first(fd) === 'string'){
var G__13546 = cljs.core.next(fd);
fd = G__13546;
continue;
} else {
if(cljs.core.map_QMARK_(cljs.core.first(fd))){
var G__13547 = cljs.core.next(fd);
fd = G__13547;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_(cljs.core.first(fdecl)))?cljs.core._conj(cljs.core.List.EMPTY,fdecl):fdecl);
var add_implicit_args = ((function (prefix,fdecl,fdecl__$1){
return (function (fd){
var args__$1 = cljs.core.first(fd);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.cons(new cljs.core.Symbol(null,"&env","&env",-919163083,null),args__$1))),cljs.core.next(fd));
});})(prefix,fdecl,fdecl__$1))
;
var add_args = ((function (prefix,fdecl,fdecl__$1,add_implicit_args){
return (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first(ds);
if(cljs.core.map_QMARK_(d)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,d);
} else {
var G__13548 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,add_implicit_args(d));
var G__13549 = cljs.core.next(ds);
acc = G__13548;
ds = G__13549;
continue;
}
}
break;
}
});})(prefix,fdecl,fdecl__$1,add_implicit_args))
;
var fdecl__$2 = cljs.core.seq(add_args(cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__13550 = cljs.core.next(p);
var G__13551 = cljs.core.cons(cljs.core.first(p),d);
p = G__13550;
d = G__13551;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,true),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,name),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$macro","-cljs$lang$macro",443600924,null))], 0))))),new cljs.core.Symbol(null,"set!","set!",250714521,null))),cljs.core.cons(new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),decl)),new cljs.core.Symbol(null,"do","do",1686842252,null));
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq13535){
var G__13536 = cljs.core.first(seq13535);
var seq13535__$1 = cljs.core.next(seq13535);
var G__13537 = cljs.core.first(seq13535__$1);
var seq13535__$2 = cljs.core.next(seq13535__$1);
var G__13538 = cljs.core.first(seq13535__$2);
var seq13535__$3 = cljs.core.next(seq13535__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__13536,G__13537,G__13538,seq13535__$3);
});

//# sourceMappingURL=core$macros.js.map