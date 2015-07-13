// Compiled by ClojureScript 0.0-3464 {:static-fns true}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(){
var args__5207__auto__ = [];
var len__5200__auto___10973 = arguments.length;
var i__5201__auto___10974 = (0);
while(true){
if((i__5201__auto___10974 < len__5200__auto___10973)){
args__5207__auto__.push((arguments[i__5201__auto___10974]));

var G__10975 = (i__5201__auto___10974 + (1));
i__5201__auto___10974 = G__10975;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((0) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((0)),(0))):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5208__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

cljs.pprint.print.cljs$lang$applyTo = (function (seq10972){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10972));
});
cljs.pprint.println = (function cljs$pprint$println(){
var args__5207__auto__ = [];
var len__5200__auto___10977 = arguments.length;
var i__5201__auto___10978 = (0);
while(true){
if((i__5201__auto___10978 < len__5200__auto___10977)){
args__5207__auto__.push((arguments[i__5201__auto___10978]));

var G__10979 = (i__5201__auto___10978 + (1));
i__5201__auto___10978 = G__10979;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((0) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((0)),(0))):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5208__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.print,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

cljs.pprint.println.cljs$lang$applyTo = (function (seq10976){
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10976));
});
cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write(cljs.core._STAR_out_STAR_,(function (){var pred__10983 = cljs.core._EQ_;
var expr__10984 = c;
if((pred__10983.cljs$core$IFn$_invoke$arity$2 ? pred__10983.cljs$core$IFn$_invoke$arity$2("\b",expr__10984) : pred__10983.call(null,"\b",expr__10984))){
return "\\backspace";
} else {
if((pred__10983.cljs$core$IFn$_invoke$arity$2 ? pred__10983.cljs$core$IFn$_invoke$arity$2("\t",expr__10984) : pred__10983.call(null,"\t",expr__10984))){
return "\\tab";
} else {
if((pred__10983.cljs$core$IFn$_invoke$arity$2 ? pred__10983.cljs$core$IFn$_invoke$arity$2("\n",expr__10984) : pred__10983.call(null,"\n",expr__10984))){
return "\\newline";
} else {
if((pred__10983.cljs$core$IFn$_invoke$arity$2 ? pred__10983.cljs$core$IFn$_invoke$arity$2("\f",expr__10984) : pred__10983.call(null,"\f",expr__10984))){
return "\\formfeed";
} else {
if((pred__10983.cljs$core$IFn$_invoke$arity$2 ? pred__10983.cljs$core$IFn$_invoke$arity$2("\r",expr__10984) : pred__10983.call(null,"\r",expr__10984))){
return "\\return";
} else {
if((pred__10983.cljs$core$IFn$_invoke$arity$2 ? pred__10983.cljs$core$IFn$_invoke$arity$2("\"",expr__10984) : pred__10983.call(null,"\"",expr__10984))){
return "\\\"";
} else {
if((pred__10983.cljs$core$IFn$_invoke$arity$2 ? pred__10983.cljs$core$IFn$_invoke$arity$2("\\",expr__10984) : pred__10983.call(null,"\\",expr__10984))){
return "\\\\";
} else {
return [cljs.core.str("\\"),cljs.core.str(c)].join('');
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(){
var args__5207__auto__ = [];
var len__5200__auto___10987 = arguments.length;
var i__5201__auto___10988 = (0);
while(true){
if((i__5201__auto___10988 < len__5200__auto___10987)){
args__5207__auto__.push((arguments[i__5201__auto___10988]));

var G__10989 = (i__5201__auto___10988 + (1));
i__5201__auto___10988 = G__10989;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((0) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((0)),(0))):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5208__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

cljs.pprint.pr.cljs$lang$applyTo = (function (seq10986){
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10986));
});
cljs.pprint.prn = (function cljs$pprint$prn(){
var args__5207__auto__ = [];
var len__5200__auto___10991 = arguments.length;
var i__5201__auto___10992 = (0);
while(true){
if((i__5201__auto___10992 < len__5200__auto___10991)){
args__5207__auto__.push((arguments[i__5201__auto___10992]));

var G__10993 = (i__5201__auto___10992 + (1));
i__5201__auto___10992 = G__10993;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((0) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((0)),(0))):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5208__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.pr,more);

return cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

cljs.pprint.prn.cljs$lang$applyTo = (function (seq10990){
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq10990));
});
/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return (typeof n === 'number') && (!(isNaN(n))) && (!((n === Infinity))) && (!((parseFloat(n) === parseInt(n,(10)))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if((typeof c === 'string') && ((c.length === (1)))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_(lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first(lis__$1);
var remainder = cljs.core.next(lis__$1);
var vec__10995 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10995,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10995,(1),null);
var G__10996 = new_context;
var G__10997 = remainder;
var G__10998 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__10996;
lis__$1 = G__10997;
acc = G__10998;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__11000 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11000,(0),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11000,(1),null);
if(cljs.core.not(result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__11001 = new_context;
var G__11002 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__11001;
acc = G__11002;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__11004 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11004,(0),null);
var continue$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11004,(1),null);
var new_context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11004,(2),null);
if(cljs.core.not(continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__11005 = new_context;
var G__11006 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result);
context = G__11005;
acc = G__11006;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4914__auto__ = (function cljs$pprint$unzip_map_$_iter__11035(s__11036){
return (new cljs.core.LazySeq(null,(function (){
var s__11036__$1 = s__11036;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__11036__$1);
if(temp__4425__auto__){
var s__11036__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11036__$2)){
var c__4912__auto__ = cljs.core.chunk_first(s__11036__$2);
var size__4913__auto__ = cljs.core.count(c__4912__auto__);
var b__11038 = cljs.core.chunk_buffer(size__4913__auto__);
if((function (){var i__11037 = (0);
while(true){
if((i__11037 < size__4913__auto__)){
var vec__11045 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4912__auto__,i__11037);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11045,(0),null);
var vec__11046 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11045,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11046,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11046,(1),null);
cljs.core.chunk_append(b__11038,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__11063 = (i__11037 + (1));
i__11037 = G__11063;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11038),cljs$pprint$unzip_map_$_iter__11035(cljs.core.chunk_rest(s__11036__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11038),null);
}
} else {
var vec__11047 = cljs.core.first(s__11036__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11047,(0),null);
var vec__11048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11047,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11048,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11048,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__11035(cljs.core.rest(s__11036__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4914__auto__(m);
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4914__auto__ = (function cljs$pprint$unzip_map_$_iter__11049(s__11050){
return (new cljs.core.LazySeq(null,(function (){
var s__11050__$1 = s__11050;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__11050__$1);
if(temp__4425__auto__){
var s__11050__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11050__$2)){
var c__4912__auto__ = cljs.core.chunk_first(s__11050__$2);
var size__4913__auto__ = cljs.core.count(c__4912__auto__);
var b__11052 = cljs.core.chunk_buffer(size__4913__auto__);
if((function (){var i__11051 = (0);
while(true){
if((i__11051 < size__4913__auto__)){
var vec__11059 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4912__auto__,i__11051);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11059,(0),null);
var vec__11060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11059,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11060,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11060,(1),null);
cljs.core.chunk_append(b__11052,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__11064 = (i__11051 + (1));
i__11051 = G__11064;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11052),cljs$pprint$unzip_map_$_iter__11049(cljs.core.chunk_rest(s__11050__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11052),null);
}
} else {
var vec__11061 = cljs.core.first(s__11050__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11061,(0),null);
var vec__11062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11061,(1),null);
var v1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11062,(0),null);
var v2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11062,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__11049(cljs.core.rest(s__11050__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4914__auto__(m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4914__auto__ = (function cljs$pprint$tuple_map_$_iter__11075(s__11076){
return (new cljs.core.LazySeq(null,(function (){
var s__11076__$1 = s__11076;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__11076__$1);
if(temp__4425__auto__){
var s__11076__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11076__$2)){
var c__4912__auto__ = cljs.core.chunk_first(s__11076__$2);
var size__4913__auto__ = cljs.core.count(c__4912__auto__);
var b__11078 = cljs.core.chunk_buffer(size__4913__auto__);
if((function (){var i__11077 = (0);
while(true){
if((i__11077 < size__4913__auto__)){
var vec__11083 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4912__auto__,i__11077);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11083,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11083,(1),null);
cljs.core.chunk_append(b__11078,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__11085 = (i__11077 + (1));
i__11077 = G__11085;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11078),cljs$pprint$tuple_map_$_iter__11075(cljs.core.chunk_rest(s__11076__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11078),null);
}
} else {
var vec__11084 = cljs.core.first(s__11076__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11084,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11084,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__11075(cljs.core.rest(s__11076__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4914__auto__(m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count(s);
if(((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1))),c))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(n + (1)));
} else {
var G__11086 = (n - (1));
n = G__11086;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count(s);
if(((len > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(0)),c))){
var n = (0);
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,len)) || (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,n),c)))){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,n);
} else {
var G__11087 = (n + (1));
n = G__11087;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_(val))?cljs.core.set(val):cljs.core.PersistentHashSet.fromArray([val], true));
var pos = (0);
while(true){
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(pos,cljs.core.count(aseq))) || (cljs.core.not((function (){var G__11091 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(aseq,pos);
return (test.cljs$core$IFn$_invoke$arity$1 ? test.cljs$core$IFn$_invoke$arity$1(G__11091) : test.call(null,G__11091));
})()))){
return pos;
} else {
var G__11092 = (pos + (1));
pos = G__11092;
continue;
}
break;
}
});

cljs.pprint.IPrettyFlush = {};

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((!((pp == null))) && (!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__4797__auto__ = (((pp == null))?null:pp);
var m__4798__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__4797__auto__)]);
if(!((m__4798__auto__ == null))){
return (m__4798__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto__.cljs$core$IFn$_invoke$arity$1(pp) : m__4798__auto__.call(null,pp));
} else {
var m__4798__auto____$1 = (cljs.pprint._ppflush["_"]);
if(!((m__4798__auto____$1 == null))){
return (m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4798__auto____$1.cljs$core$IFn$_invoke$arity$1(pp) : m__4798__auto____$1.call(null,pp));
} else {
throw cljs.core.missing_protocol("IPrettyFlush.-ppflush",pp);
}
}
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
var G__11099 = (function (){var G__11100 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11100) : cljs.core.deref.call(null,G__11100));
})();
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__11099) : sym.call(null,G__11099));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"cur","cur",1153190599));
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"line","line",212345235));
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"max","max",61366548));
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"max","max",61366548),new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"base","base",185279322));
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(0));

cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"line","line",212345235)) + (1)));
} else {
cljs.pprint.set_field(this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"cur","cur",1153190599)) + (1)));
}

return cljs.core._write(cljs.pprint.get_field(this$,new cljs.core.Keyword(null,"base","base",185279322)),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(){
var args11102 = [];
var len__5200__auto___11112 = arguments.length;
var i__5201__auto___11113 = (0);
while(true){
if((i__5201__auto___11113 < len__5200__auto___11112)){
args11102.push((arguments[i__5201__auto___11113]));

var G__11114 = (i__5201__auto___11113 + (1));
i__5201__auto___11113 = G__11114;
continue;
} else {
}
break;
}

var G__11104 = args11102.length;
switch (G__11104) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11102.length)].join('')));

}
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = (function (){var G__11105 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max","max",61366548),max_columns,new cljs.core.Keyword(null,"cur","cur",1153190599),(0),new cljs.core.Keyword(null,"line","line",212345235),(0),new cljs.core.Keyword(null,"base","base",185279322),writer], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11105) : cljs.core.atom.call(null,G__11105));
})();
if(typeof cljs.pprint.t11106 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.pprint.t11106 = (function (writer,max_columns,fields,meta11107){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta11107 = meta11107;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t11106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_11108,meta11107__$1){
var self__ = this;
var _11108__$1 = this;
return (new cljs.pprint.t11106(self__.writer,self__.max_columns,self__.fields,meta11107__$1));
});})(fields))
;

cljs.pprint.t11106.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_11108){
var self__ = this;
var _11108__$1 = this;
return self__.meta11107;
});})(fields))
;

cljs.pprint.t11106.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t11106.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(fields))
;

cljs.pprint.t11106.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__11109 = cljs.core._EQ_;
var expr__11110 = cljs.core.type(x);
if(cljs.core.truth_((pred__11109.cljs$core$IFn$_invoke$arity$2 ? pred__11109.cljs$core$IFn$_invoke$arity$2(String,expr__11110) : pred__11109.call(null,String,expr__11110)))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field(this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field(this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599)) + cljs.core.count(s)));
} else {
cljs.pprint.set_field(this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),((cljs.core.count(s) - nl) - (1)));

cljs.pprint.set_field(this$__$1,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field(this$__$1,new cljs.core.Keyword(null,"line","line",212345235)) + cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (s,nl,pred__11109,expr__11110,this$__$1,fields){
return (function (p1__11101_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__11101_SHARP_,"\n");
});})(s,nl,pred__11109,expr__11110,this$__$1,fields))
,s))));
}

return cljs.core._write(cljs.pprint.get_field(this$__$1,new cljs.core.Keyword(null,"base","base",185279322)),s);
} else {
if(cljs.core.truth_((pred__11109.cljs$core$IFn$_invoke$arity$2 ? pred__11109.cljs$core$IFn$_invoke$arity$2(Number,expr__11110) : pred__11109.call(null,Number,expr__11110)))){
return cljs.pprint.c_write_char(this$__$1,x);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__11110)].join('')));
}
}
});})(fields))
;

cljs.pprint.t11106.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta11107","meta11107",533404185,null)], null);
});})(fields))
;

cljs.pprint.t11106.cljs$lang$type = true;

cljs.pprint.t11106.cljs$lang$ctorStr = "cljs.pprint/t11106";

cljs.pprint.t11106.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__4740__auto__,writer__4741__auto__,opt__4742__auto__){
return cljs.core._write(writer__4741__auto__,"cljs.pprint/t11106");
});})(fields))
;

cljs.pprint.__GT_t11106 = ((function (fields){
return (function cljs$pprint$__GT_t11106(writer__$1,max_columns__$1,fields__$1,meta11107){
return (new cljs.pprint.t11106(writer__$1,max_columns__$1,fields__$1,meta11107));
});})(fields))
;

}

return (new cljs.pprint.t11106(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2;

/**
* @constructor
* @param {*} parent
* @param {*} section
* @param {*} start_col
* @param {*} indent
* @param {*} done_nl
* @param {*} intra_block_nl
* @param {*} prefix
* @param {*} per_line_prefix
* @param {*} suffix
* @param {*} logical_block_callback
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4756__auto__,k__4757__auto__){
var self__ = this;
var this__4756__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4756__auto____$1,k__4757__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4758__auto__,k11117,else__4759__auto__){
var self__ = this;
var this__4758__auto____$1 = this;
var G__11119 = (((k11117 instanceof cljs.core.Keyword))?k11117.fqn:null);
switch (G__11119) {
case "suffix":
return self__.suffix;

break;
case "indent":
return self__.indent;

break;
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "done-nl":
return self__.done_nl;

break;
case "start-col":
return self__.start_col;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k11117,else__4759__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4770__auto__,writer__4771__auto__,opts__4772__auto__){
var self__ = this;
var this__4770__auto____$1 = this;
var pr_pair__4773__auto__ = ((function (this__4770__auto____$1){
return (function (keyval__4774__auto__){
return cljs.core.pr_sequential_writer(writer__4771__auto__,cljs.core.pr_writer,""," ","",opts__4772__auto__,keyval__4774__auto__);
});})(this__4770__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4771__auto__,pr_pair__4773__auto__,"#cljs.pprint.logical-block{",", ","}",opts__4772__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"section","section",-300141526),self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4754__auto__){
var self__ = this;
var this__4754__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4750__auto__){
var self__ = this;
var this__4750__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4760__auto__){
var self__ = this;
var this__4760__auto____$1 = this;
return (10 + cljs.core.count(self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4751__auto__){
var self__ = this;
var this__4751__auto____$1 = this;
var h__4577__auto__ = self__.__hash;
if(!((h__4577__auto__ == null))){
return h__4577__auto__;
} else {
var h__4577__auto____$1 = cljs.core.hash_imap(this__4751__auto____$1);
self__.__hash = h__4577__auto____$1;

return h__4577__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4752__auto__,other__4753__auto__){
var self__ = this;
var this__4752__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4149__auto__ = other__4753__auto__;
if(cljs.core.truth_(and__4149__auto__)){
var and__4149__auto____$1 = (this__4752__auto____$1.constructor === other__4753__auto__.constructor);
if(and__4149__auto____$1){
return cljs.core.equiv_map(this__4752__auto____$1,other__4753__auto__);
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4765__auto__,k__4766__auto__){
var self__ = this;
var this__4765__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"suffix","suffix",367373057),null,new cljs.core.Keyword(null,"indent","indent",-148200125),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),null,new cljs.core.Keyword(null,"start-col","start-col",668080143),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),null], null), null),k__4766__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4765__auto____$1),self__.__meta),k__4766__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4766__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4763__auto__,k__4764__auto__,G__11116){
var self__ = this;
var this__4763__auto____$1 = this;
var pred__11120 = cljs.core.keyword_identical_QMARK_;
var expr__11121 = k__4764__auto__;
if(cljs.core.truth_((pred__11120.cljs$core$IFn$_invoke$arity$2 ? pred__11120.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),expr__11121) : pred__11120.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__11121)))){
return (new cljs.pprint.logical_block(G__11116,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11120.cljs$core$IFn$_invoke$arity$2 ? pred__11120.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"section","section",-300141526),expr__11121) : pred__11120.call(null,new cljs.core.Keyword(null,"section","section",-300141526),expr__11121)))){
return (new cljs.pprint.logical_block(self__.parent,G__11116,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11120.cljs$core$IFn$_invoke$arity$2 ? pred__11120.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-col","start-col",668080143),expr__11121) : pred__11120.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143),expr__11121)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__11116,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11120.cljs$core$IFn$_invoke$arity$2 ? pred__11120.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"indent","indent",-148200125),expr__11121) : pred__11120.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125),expr__11121)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__11116,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11120.cljs$core$IFn$_invoke$arity$2 ? pred__11120.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),expr__11121) : pred__11120.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),expr__11121)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__11116,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11120.cljs$core$IFn$_invoke$arity$2 ? pred__11120.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),expr__11121) : pred__11120.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),expr__11121)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__11116,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11120.cljs$core$IFn$_invoke$arity$2 ? pred__11120.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__11121) : pred__11120.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__11121)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__11116,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11120.cljs$core$IFn$_invoke$arity$2 ? pred__11120.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),expr__11121) : pred__11120.call(null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),expr__11121)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__11116,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11120.cljs$core$IFn$_invoke$arity$2 ? pred__11120.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"suffix","suffix",367373057),expr__11121) : pred__11120.call(null,new cljs.core.Keyword(null,"suffix","suffix",367373057),expr__11121)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__11116,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11120.cljs$core$IFn$_invoke$arity$2 ? pred__11120.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),expr__11121) : pred__11120.call(null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),expr__11121)))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__11116,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4764__auto__,G__11116),null));
}
}
}
}
}
}
}
}
}
}
});

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4768__auto__){
var self__ = this;
var this__4768__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"section","section",-300141526),self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4755__auto__,G__11116){
var self__ = this;
var this__4755__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__11116,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4761__auto__,entry__4762__auto__){
var self__ = this;
var this__4761__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4762__auto__)){
return cljs.core._assoc(this__4761__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4762__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4762__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4761__auto____$1,entry__4762__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"section","section",1340390001,null),new cljs.core.Symbol(null,"start-col","start-col",-1986355626,null),new cljs.core.Symbol(null,"indent","indent",1492331402,null),new cljs.core.Symbol(null,"done-nl","done-nl",1259507187,null),new cljs.core.Symbol(null,"intra-block-nl","intra-block-nl",-845608894,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"per-line-prefix","per-line-prefix",-1807493956,null),new cljs.core.Symbol(null,"suffix","suffix",2007904584,null),new cljs.core.Symbol(null,"logical-block-callback","logical-block-callback",-1041744575,null)], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__4790__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/logical-block");
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__4790__auto__,writer__4791__auto__){
return cljs.core._write(writer__4791__auto__,"cljs.pprint/logical-block");
});

cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__11118){
return (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__11118),new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(G__11118),new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(G__11118),new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(G__11118),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(G__11118),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(G__11118),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__11118),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(G__11118),new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(G__11118),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(G__11118),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__11118,new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.array_seq([new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194)], 0)),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__11124 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__11124;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq(l);
if(l__$1){
return (new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(cljs.core.last(l__$1)) - new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(cljs.core.first(l__$1)));
} else {
return (0);
}
});

/**
* @constructor
* @param {*} type_tag
* @param {*} data
* @param {*} trailing_white_space
* @param {*} start_pos
* @param {*} end_pos
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4756__auto__,k__4757__auto__){
var self__ = this;
var this__4756__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4756__auto____$1,k__4757__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4758__auto__,k11126,else__4759__auto__){
var self__ = this;
var this__4758__auto____$1 = this;
var G__11128 = (((k11126 instanceof cljs.core.Keyword))?k11126.fqn:null);
switch (G__11128) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k11126,else__4759__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4770__auto__,writer__4771__auto__,opts__4772__auto__){
var self__ = this;
var this__4770__auto____$1 = this;
var pr_pair__4773__auto__ = ((function (this__4770__auto____$1){
return (function (keyval__4774__auto__){
return cljs.core.pr_sequential_writer(writer__4771__auto__,cljs.core.pr_writer,""," ","",opts__4772__auto__,keyval__4774__auto__);
});})(this__4770__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4771__auto__,pr_pair__4773__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__4772__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4754__auto__){
var self__ = this;
var this__4754__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4750__auto__){
var self__ = this;
var this__4750__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4760__auto__){
var self__ = this;
var this__4760__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4751__auto__){
var self__ = this;
var this__4751__auto____$1 = this;
var h__4577__auto__ = self__.__hash;
if(!((h__4577__auto__ == null))){
return h__4577__auto__;
} else {
var h__4577__auto____$1 = cljs.core.hash_imap(this__4751__auto____$1);
self__.__hash = h__4577__auto____$1;

return h__4577__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4752__auto__,other__4753__auto__){
var self__ = this;
var this__4752__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4149__auto__ = other__4753__auto__;
if(cljs.core.truth_(and__4149__auto__)){
var and__4149__auto____$1 = (this__4752__auto____$1.constructor === other__4753__auto__.constructor);
if(and__4149__auto____$1){
return cljs.core.equiv_map(this__4752__auto____$1,other__4753__auto__);
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4765__auto__,k__4766__auto__){
var self__ = this;
var this__4765__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4766__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4765__auto____$1),self__.__meta),k__4766__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4766__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4763__auto__,k__4764__auto__,G__11125){
var self__ = this;
var this__4763__auto____$1 = this;
var pred__11129 = cljs.core.keyword_identical_QMARK_;
var expr__11130 = k__4764__auto__;
if(cljs.core.truth_((pred__11129.cljs$core$IFn$_invoke$arity$2 ? pred__11129.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__11130) : pred__11129.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__11130)))){
return (new cljs.pprint.buffer_blob(G__11125,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11129.cljs$core$IFn$_invoke$arity$2 ? pred__11129.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377),expr__11130) : pred__11129.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__11130)))){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__11125,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11129.cljs$core$IFn$_invoke$arity$2 ? pred__11129.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),expr__11130) : pred__11129.call(null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),expr__11130)))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__11125,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11129.cljs$core$IFn$_invoke$arity$2 ? pred__11129.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__11130) : pred__11129.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__11130)))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__11125,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11129.cljs$core$IFn$_invoke$arity$2 ? pred__11129.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__11130) : pred__11129.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__11130)))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__11125,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4764__auto__,G__11125),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4768__auto__){
var self__ = this;
var this__4768__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4755__auto__,G__11125){
var self__ = this;
var this__4755__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__11125,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4761__auto__,entry__4762__auto__){
var self__ = this;
var this__4761__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4762__auto__)){
return cljs.core._assoc(this__4761__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4762__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4762__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4761__auto____$1,entry__4762__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"trailing-white-space","trailing-white-space",-1158428773,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__4790__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/buffer-blob");
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__4790__auto__,writer__4791__auto__){
return cljs.core._write(writer__4791__auto__,"cljs.pprint/buffer-blob");
});

cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__11127){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__11127),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__11127),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(G__11127),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__11127),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__11127),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__11127,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.array_seq([new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0)),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__6660__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__6660__auto__),new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173));
});

/**
* @constructor
* @param {*} type_tag
* @param {*} type
* @param {*} logical_block
* @param {*} start_pos
* @param {*} end_pos
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4756__auto__,k__4757__auto__){
var self__ = this;
var this__4756__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4756__auto____$1,k__4757__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4758__auto__,k11134,else__4759__auto__){
var self__ = this;
var this__4758__auto____$1 = this;
var G__11136 = (((k11134 instanceof cljs.core.Keyword))?k11134.fqn:null);
switch (G__11136) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k11134,else__4759__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4770__auto__,writer__4771__auto__,opts__4772__auto__){
var self__ = this;
var this__4770__auto____$1 = this;
var pr_pair__4773__auto__ = ((function (this__4770__auto____$1){
return (function (keyval__4774__auto__){
return cljs.core.pr_sequential_writer(writer__4771__auto__,cljs.core.pr_writer,""," ","",opts__4772__auto__,keyval__4774__auto__);
});})(this__4770__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4771__auto__,pr_pair__4773__auto__,"#cljs.pprint.nl-t{",", ","}",opts__4772__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4754__auto__){
var self__ = this;
var this__4754__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4750__auto__){
var self__ = this;
var this__4750__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4760__auto__){
var self__ = this;
var this__4760__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4751__auto__){
var self__ = this;
var this__4751__auto____$1 = this;
var h__4577__auto__ = self__.__hash;
if(!((h__4577__auto__ == null))){
return h__4577__auto__;
} else {
var h__4577__auto____$1 = cljs.core.hash_imap(this__4751__auto____$1);
self__.__hash = h__4577__auto____$1;

return h__4577__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4752__auto__,other__4753__auto__){
var self__ = this;
var this__4752__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4149__auto__ = other__4753__auto__;
if(cljs.core.truth_(and__4149__auto__)){
var and__4149__auto____$1 = (this__4752__auto____$1.constructor === other__4753__auto__.constructor);
if(and__4149__auto____$1){
return cljs.core.equiv_map(this__4752__auto____$1,other__4753__auto__);
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4765__auto__,k__4766__auto__){
var self__ = this;
var this__4765__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4766__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4765__auto____$1),self__.__meta),k__4766__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4766__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4763__auto__,k__4764__auto__,G__11133){
var self__ = this;
var this__4763__auto____$1 = this;
var pred__11137 = cljs.core.keyword_identical_QMARK_;
var expr__11138 = k__4764__auto__;
if(cljs.core.truth_((pred__11137.cljs$core$IFn$_invoke$arity$2 ? pred__11137.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__11138) : pred__11137.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__11138)))){
return (new cljs.pprint.nl_t(G__11133,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11137.cljs$core$IFn$_invoke$arity$2 ? pred__11137.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),expr__11138) : pred__11137.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__11138)))){
return (new cljs.pprint.nl_t(self__.type_tag,G__11133,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11137.cljs$core$IFn$_invoke$arity$2 ? pred__11137.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__11138) : pred__11137.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__11138)))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__11133,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11137.cljs$core$IFn$_invoke$arity$2 ? pred__11137.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__11138) : pred__11137.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__11138)))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__11133,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11137.cljs$core$IFn$_invoke$arity$2 ? pred__11137.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__11138) : pred__11137.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__11138)))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__11133,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4764__auto__,G__11133),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4768__auto__){
var self__ = this;
var this__4768__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4755__auto__,G__11133){
var self__ = this;
var this__4755__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__11133,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4761__auto__,entry__4762__auto__){
var self__ = this;
var this__4761__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4762__auto__)){
return cljs.core._assoc(this__4761__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4762__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4762__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4761__auto____$1,entry__4762__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__4790__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/nl-t");
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__4790__auto__,writer__4791__auto__){
return cljs.core._write(writer__4791__auto__,"cljs.pprint/nl-t");
});

cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__11135){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__11135),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__11135),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__11135),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__11135),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__11135),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__11135,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.array_seq([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0)),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__6660__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__6660__auto__),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114));
});

/**
* @constructor
* @param {*} type_tag
* @param {*} logical_block
* @param {*} start_pos
* @param {*} end_pos
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4756__auto__,k__4757__auto__){
var self__ = this;
var this__4756__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4756__auto____$1,k__4757__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4758__auto__,k11142,else__4759__auto__){
var self__ = this;
var this__4758__auto____$1 = this;
var G__11144 = (((k11142 instanceof cljs.core.Keyword))?k11142.fqn:null);
switch (G__11144) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k11142,else__4759__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4770__auto__,writer__4771__auto__,opts__4772__auto__){
var self__ = this;
var this__4770__auto____$1 = this;
var pr_pair__4773__auto__ = ((function (this__4770__auto____$1){
return (function (keyval__4774__auto__){
return cljs.core.pr_sequential_writer(writer__4771__auto__,cljs.core.pr_writer,""," ","",opts__4772__auto__,keyval__4774__auto__);
});})(this__4770__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4771__auto__,pr_pair__4773__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__4772__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4754__auto__){
var self__ = this;
var this__4754__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4750__auto__){
var self__ = this;
var this__4750__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4760__auto__){
var self__ = this;
var this__4760__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4751__auto__){
var self__ = this;
var this__4751__auto____$1 = this;
var h__4577__auto__ = self__.__hash;
if(!((h__4577__auto__ == null))){
return h__4577__auto__;
} else {
var h__4577__auto____$1 = cljs.core.hash_imap(this__4751__auto____$1);
self__.__hash = h__4577__auto____$1;

return h__4577__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4752__auto__,other__4753__auto__){
var self__ = this;
var this__4752__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4149__auto__ = other__4753__auto__;
if(cljs.core.truth_(and__4149__auto__)){
var and__4149__auto____$1 = (this__4752__auto____$1.constructor === other__4753__auto__.constructor);
if(and__4149__auto____$1){
return cljs.core.equiv_map(this__4752__auto____$1,other__4753__auto__);
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4765__auto__,k__4766__auto__){
var self__ = this;
var this__4765__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4766__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4765__auto____$1),self__.__meta),k__4766__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4766__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4763__auto__,k__4764__auto__,G__11141){
var self__ = this;
var this__4763__auto____$1 = this;
var pred__11145 = cljs.core.keyword_identical_QMARK_;
var expr__11146 = k__4764__auto__;
if(cljs.core.truth_((pred__11145.cljs$core$IFn$_invoke$arity$2 ? pred__11145.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__11146) : pred__11145.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__11146)))){
return (new cljs.pprint.start_block_t(G__11141,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11145.cljs$core$IFn$_invoke$arity$2 ? pred__11145.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__11146) : pred__11145.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__11146)))){
return (new cljs.pprint.start_block_t(self__.type_tag,G__11141,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11145.cljs$core$IFn$_invoke$arity$2 ? pred__11145.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__11146) : pred__11145.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__11146)))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__11141,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11145.cljs$core$IFn$_invoke$arity$2 ? pred__11145.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__11146) : pred__11145.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__11146)))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__11141,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4764__auto__,G__11141),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4768__auto__){
var self__ = this;
var this__4768__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4755__auto__,G__11141){
var self__ = this;
var this__4755__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__11141,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4761__auto__,entry__4762__auto__){
var self__ = this;
var this__4761__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4762__auto__)){
return cljs.core._assoc(this__4761__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4762__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4762__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4761__auto____$1,entry__4762__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__4790__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/start-block-t");
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__4790__auto__,writer__4791__auto__){
return cljs.core._write(writer__4791__auto__,"cljs.pprint/start-block-t");
});

cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__11143){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__11143),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__11143),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__11143),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__11143),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__11143,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.array_seq([new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0)),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__6660__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__6660__auto__),new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594));
});

/**
* @constructor
* @param {*} type_tag
* @param {*} logical_block
* @param {*} start_pos
* @param {*} end_pos
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4756__auto__,k__4757__auto__){
var self__ = this;
var this__4756__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4756__auto____$1,k__4757__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4758__auto__,k11150,else__4759__auto__){
var self__ = this;
var this__4758__auto____$1 = this;
var G__11152 = (((k11150 instanceof cljs.core.Keyword))?k11150.fqn:null);
switch (G__11152) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k11150,else__4759__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4770__auto__,writer__4771__auto__,opts__4772__auto__){
var self__ = this;
var this__4770__auto____$1 = this;
var pr_pair__4773__auto__ = ((function (this__4770__auto____$1){
return (function (keyval__4774__auto__){
return cljs.core.pr_sequential_writer(writer__4771__auto__,cljs.core.pr_writer,""," ","",opts__4772__auto__,keyval__4774__auto__);
});})(this__4770__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4771__auto__,pr_pair__4773__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__4772__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4754__auto__){
var self__ = this;
var this__4754__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4750__auto__){
var self__ = this;
var this__4750__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4760__auto__){
var self__ = this;
var this__4760__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4751__auto__){
var self__ = this;
var this__4751__auto____$1 = this;
var h__4577__auto__ = self__.__hash;
if(!((h__4577__auto__ == null))){
return h__4577__auto__;
} else {
var h__4577__auto____$1 = cljs.core.hash_imap(this__4751__auto____$1);
self__.__hash = h__4577__auto____$1;

return h__4577__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4752__auto__,other__4753__auto__){
var self__ = this;
var this__4752__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4149__auto__ = other__4753__auto__;
if(cljs.core.truth_(and__4149__auto__)){
var and__4149__auto____$1 = (this__4752__auto____$1.constructor === other__4753__auto__.constructor);
if(and__4149__auto____$1){
return cljs.core.equiv_map(this__4752__auto____$1,other__4753__auto__);
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4765__auto__,k__4766__auto__){
var self__ = this;
var this__4765__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4766__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4765__auto____$1),self__.__meta),k__4766__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4766__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4763__auto__,k__4764__auto__,G__11149){
var self__ = this;
var this__4763__auto____$1 = this;
var pred__11153 = cljs.core.keyword_identical_QMARK_;
var expr__11154 = k__4764__auto__;
if(cljs.core.truth_((pred__11153.cljs$core$IFn$_invoke$arity$2 ? pred__11153.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__11154) : pred__11153.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__11154)))){
return (new cljs.pprint.end_block_t(G__11149,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11153.cljs$core$IFn$_invoke$arity$2 ? pred__11153.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__11154) : pred__11153.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__11154)))){
return (new cljs.pprint.end_block_t(self__.type_tag,G__11149,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11153.cljs$core$IFn$_invoke$arity$2 ? pred__11153.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__11154) : pred__11153.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__11154)))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__11149,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11153.cljs$core$IFn$_invoke$arity$2 ? pred__11153.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__11154) : pred__11153.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__11154)))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__11149,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4764__auto__,G__11149),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4768__auto__){
var self__ = this;
var this__4768__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4755__auto__,G__11149){
var self__ = this;
var this__4755__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__11149,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4761__auto__,entry__4762__auto__){
var self__ = this;
var this__4761__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4762__auto__)){
return cljs.core._assoc(this__4761__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4762__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4762__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4761__auto____$1,entry__4762__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__4790__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/end-block-t");
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__4790__auto__,writer__4791__auto__){
return cljs.core._write(writer__4791__auto__,"cljs.pprint/end-block-t");
});

cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__11151){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__11151),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__11151),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__11151),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__11151),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__11151,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.array_seq([new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0)),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__6660__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__6660__auto__),new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735));
});

/**
* @constructor
* @param {*} type_tag
* @param {*} logical_block
* @param {*} relative_to
* @param {*} offset
* @param {*} start_pos
* @param {*} end_pos
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4756__auto__,k__4757__auto__){
var self__ = this;
var this__4756__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4756__auto____$1,k__4757__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4758__auto__,k11158,else__4759__auto__){
var self__ = this;
var this__4758__auto____$1 = this;
var G__11160 = (((k11158 instanceof cljs.core.Keyword))?k11158.fqn:null);
switch (G__11160) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k11158,else__4759__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4770__auto__,writer__4771__auto__,opts__4772__auto__){
var self__ = this;
var this__4770__auto____$1 = this;
var pr_pair__4773__auto__ = ((function (this__4770__auto____$1){
return (function (keyval__4774__auto__){
return cljs.core.pr_sequential_writer(writer__4771__auto__,cljs.core.pr_writer,""," ","",opts__4772__auto__,keyval__4774__auto__);
});})(this__4770__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4771__auto__,pr_pair__4773__auto__,"#cljs.pprint.indent-t{",", ","}",opts__4772__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4754__auto__){
var self__ = this;
var this__4754__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4750__auto__){
var self__ = this;
var this__4750__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4760__auto__){
var self__ = this;
var this__4760__auto____$1 = this;
return (6 + cljs.core.count(self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4751__auto__){
var self__ = this;
var this__4751__auto____$1 = this;
var h__4577__auto__ = self__.__hash;
if(!((h__4577__auto__ == null))){
return h__4577__auto__;
} else {
var h__4577__auto____$1 = cljs.core.hash_imap(this__4751__auto____$1);
self__.__hash = h__4577__auto____$1;

return h__4577__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4752__auto__,other__4753__auto__){
var self__ = this;
var this__4752__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4149__auto__ = other__4753__auto__;
if(cljs.core.truth_(and__4149__auto__)){
var and__4149__auto____$1 = (this__4752__auto____$1.constructor === other__4753__auto__.constructor);
if(and__4149__auto____$1){
return cljs.core.equiv_map(this__4752__auto____$1,other__4753__auto__);
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4765__auto__,k__4766__auto__){
var self__ = this;
var this__4765__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4766__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4765__auto____$1),self__.__meta),k__4766__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4766__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4763__auto__,k__4764__auto__,G__11157){
var self__ = this;
var this__4763__auto____$1 = this;
var pred__11161 = cljs.core.keyword_identical_QMARK_;
var expr__11162 = k__4764__auto__;
if(cljs.core.truth_((pred__11161.cljs$core$IFn$_invoke$arity$2 ? pred__11161.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__11162) : pred__11161.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__11162)))){
return (new cljs.pprint.indent_t(G__11157,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11161.cljs$core$IFn$_invoke$arity$2 ? pred__11161.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__11162) : pred__11161.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__11162)))){
return (new cljs.pprint.indent_t(self__.type_tag,G__11157,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11161.cljs$core$IFn$_invoke$arity$2 ? pred__11161.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),expr__11162) : pred__11161.call(null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),expr__11162)))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__11157,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11161.cljs$core$IFn$_invoke$arity$2 ? pred__11161.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"offset","offset",296498311),expr__11162) : pred__11161.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__11162)))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__11157,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11161.cljs$core$IFn$_invoke$arity$2 ? pred__11161.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__11162) : pred__11161.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__11162)))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__11157,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11161.cljs$core$IFn$_invoke$arity$2 ? pred__11161.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__11162) : pred__11161.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__11162)))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__11157,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4764__auto__,G__11157),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4768__auto__){
var self__ = this;
var this__4768__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4755__auto__,G__11157){
var self__ = this;
var this__4755__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__11157,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4761__auto__,entry__4762__auto__){
var self__ = this;
var this__4761__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4762__auto__)){
return cljs.core._assoc(this__4761__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4762__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4762__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4761__auto____$1,entry__4762__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"relative-to","relative-to",1170431476,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__4790__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/indent-t");
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__4790__auto__,writer__4791__auto__){
return cljs.core._write(writer__4791__auto__,"cljs.pprint/indent-t");
});

cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__11159){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__11159),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__11159),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(G__11159),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__11159),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__11159),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__11159),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__11159,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),cljs.core.array_seq([new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], 0)),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"indent-t","indent-t",528318969),logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__6660__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__6660__auto__),new cljs.core.Keyword(null,"indent-t","indent-t",528318969));
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if(typeof cljs.pprint.write_token !== 'undefined'){
} else {
cljs.pprint.write_token = (function (){var method_table__5055__auto__ = (function (){var G__11167 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11167) : cljs.core.atom.call(null,G__11167));
})();
var prefer_table__5056__auto__ = (function (){var G__11168 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11168) : cljs.core.atom.call(null,G__11168));
})();
var method_cache__5057__auto__ = (function (){var G__11169 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11169) : cljs.core.atom.call(null,G__11169));
})();
var cached_hierarchy__5058__auto__ = (function (){var G__11170 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11170) : cljs.core.atom.call(null,G__11170));
})();
var hierarchy__5059__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","write-token"),((function (method_table__5055__auto__,prefer_table__5056__auto__,method_cache__5057__auto__,cached_hierarchy__5058__auto__,hierarchy__5059__auto__){
return (function (p1__11166_SHARP_,p2__11165_SHARP_){
return new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(p2__11165_SHARP_);
});})(method_table__5055__auto__,prefer_table__5056__auto__,method_cache__5057__auto__,cached_hierarchy__5058__auto__,hierarchy__5059__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5059__auto__,method_table__5055__auto__,prefer_table__5056__auto__,method_cache__5057__auto__,cached_hierarchy__5058__auto__));
})();
}
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),(function (this$,token){
var temp__4425__auto___11178 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1((function (){var G__11171 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11171) : cljs.core.deref.call(null,G__11171));
})());
if(cljs.core.truth_(temp__4425__auto___11178)){
var cb_11179 = temp__4425__auto___11178;
(cb_11179.cljs$core$IFn$_invoke$arity$1 ? cb_11179.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",-355208981)) : cb_11179.call(null,new cljs.core.Keyword(null,"start","start",-355208981)));
} else {
}

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
var temp__4425__auto___11180 = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__4425__auto___11180)){
var prefix_11181 = temp__4425__auto___11180;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1((function (){var G__11172 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11172) : cljs.core.deref.call(null,G__11172));
})()),prefix_11181);
} else {
}

var col = cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1((function (){var G__11173 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11173) : cljs.core.deref.call(null,G__11173));
})()));
var G__11174_11182 = new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb);
var G__11175_11183 = col;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11174_11182,G__11175_11183) : cljs.core.reset_BANG_.call(null,G__11174_11182,G__11175_11183));

var G__11176 = new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb);
var G__11177 = col;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11176,G__11177) : cljs.core.reset_BANG_.call(null,G__11176,G__11177));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),(function (this$,token){
var temp__4425__auto___11186 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1((function (){var G__11184 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11184) : cljs.core.deref.call(null,G__11184));
})());
if(cljs.core.truth_(temp__4425__auto___11186)){
var cb_11187 = temp__4425__auto___11186;
(cb_11187.cljs$core$IFn$_invoke$arity$1 ? cb_11187.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958)) : cb_11187.call(null,new cljs.core.Keyword(null,"end","end",-268185958)));
} else {
}

var temp__4425__auto__ = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__4425__auto__)){
var suffix = temp__4425__auto__;
return cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1((function (){var G__11185 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11185) : cljs.core.deref.call(null,G__11185));
})()),suffix);
} else {
return null;
}
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"indent-t","indent-t",528318969),(function (this$,token){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
var G__11188 = new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb);
var G__11189 = (new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__11190 = cljs.core._EQ_;
var expr__11191 = new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_((pred__11190.cljs$core$IFn$_invoke$arity$2 ? pred__11190.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),expr__11191) : pred__11190.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__11191)))){
var G__11193 = new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11193) : cljs.core.deref.call(null,G__11193));
} else {
if(cljs.core.truth_((pred__11190.cljs$core$IFn$_invoke$arity$2 ? pred__11190.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current","current",-1088038603),expr__11191) : pred__11190.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__11191)))){
return cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1((function (){var G__11194 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11194) : cljs.core.deref.call(null,G__11194));
})()));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__11191)].join('')));
}
}
})());
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11188,G__11189) : cljs.core.reset_BANG_.call(null,G__11188,G__11189));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),(function (this$,token){
return cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1((function (){var G__11195 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11195) : cljs.core.deref.call(null,G__11195));
})()),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.pprint.write_token.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),(function (this$,token){
if(cljs.core.truth_((function (){var or__4161__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"mandatory","mandatory",542802336));
if(or__4161__auto__){
return or__4161__auto__;
} else {
var and__4149__auto__ = !(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"fill","fill",883462889)));
if(and__4149__auto__){
var G__11199 = new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11199) : cljs.core.deref.call(null,G__11199));
} else {
return and__4149__auto__;
}
}
})())){
(cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.emit_nl.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.emit_nl.call(null,this$,token));
} else {
var temp__4423__auto___11202 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1((function (){var G__11200 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11200) : cljs.core.deref.call(null,G__11200));
})());
if(cljs.core.truth_(temp__4423__auto___11202)){
var tws_11203 = temp__4423__auto___11202;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1((function (){var G__11201 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11201) : cljs.core.deref.call(null,G__11201));
})()),tws_11203);
} else {
}
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__11216 = cljs.core.seq(tokens);
var chunk__11217 = null;
var count__11218 = (0);
var i__11219 = (0);
while(true){
if((i__11219 < count__11218)){
var token = chunk__11217.cljs$core$IIndexed$_nth$arity$2(null,i__11219);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114)))){
var temp__4423__auto___11228 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1((function (){var G__11220 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11220) : cljs.core.deref.call(null,G__11220));
})());
if(cljs.core.truth_(temp__4423__auto___11228)){
var tws_11229 = temp__4423__auto___11228;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1((function (){var G__11221 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11221) : cljs.core.deref.call(null,G__11221));
})()),tws_11229);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_11230 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1((function (){var G__11222 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11222) : cljs.core.deref.call(null,G__11222));
})());
if(cljs.core.truth_((function (){var and__4149__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__4149__auto__)){
return tws_11230;
} else {
return and__4149__auto__;
}
})())){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1((function (){var G__11223 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11223) : cljs.core.deref.call(null,G__11223));
})()),tws_11230);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}

var G__11231 = seq__11216;
var G__11232 = chunk__11217;
var G__11233 = count__11218;
var G__11234 = (i__11219 + (1));
seq__11216 = G__11231;
chunk__11217 = G__11232;
count__11218 = G__11233;
i__11219 = G__11234;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11216);
if(temp__4425__auto__){
var seq__11216__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11216__$1)){
var c__4945__auto__ = cljs.core.chunk_first(seq__11216__$1);
var G__11235 = cljs.core.chunk_rest(seq__11216__$1);
var G__11236 = c__4945__auto__;
var G__11237 = cljs.core.count(c__4945__auto__);
var G__11238 = (0);
seq__11216 = G__11235;
chunk__11217 = G__11236;
count__11218 = G__11237;
i__11219 = G__11238;
continue;
} else {
var token = cljs.core.first(seq__11216__$1);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114)))){
var temp__4423__auto___11239 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1((function (){var G__11224 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11224) : cljs.core.deref.call(null,G__11224));
})());
if(cljs.core.truth_(temp__4423__auto___11239)){
var tws_11240 = temp__4423__auto___11239;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1((function (){var G__11225 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11225) : cljs.core.deref.call(null,G__11225));
})()),tws_11240);
} else {
}
} else {
}

(cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.write_token.cljs$core$IFn$_invoke$arity$2(this$,token) : cljs.pprint.write_token.call(null,this$,token));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_11241 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1((function (){var G__11226 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11226) : cljs.core.deref.call(null,G__11226));
})());
if(cljs.core.truth_((function (){var and__4149__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__4149__auto__)){
return tws_11241;
} else {
return and__4149__auto__;
}
})())){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1((function (){var G__11227 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11227) : cljs.core.deref.call(null,G__11227));
})()),tws_11241);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}

var G__11242 = cljs.core.next(seq__11216__$1);
var G__11243 = null;
var G__11244 = (0);
var G__11245 = (0);
seq__11216 = G__11242;
chunk__11217 = G__11243;
count__11218 = G__11244;
i__11219 = G__11245;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1((function (){var G__11249 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11249) : cljs.core.deref.call(null,G__11249));
})()));
return ((maxcol == null)) || (((cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1((function (){var G__11251 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11251) : cljs.core.deref.call(null,G__11251));
})())) + cljs.pprint.buffer_length(tokens)) < maxcol));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__4161__auto__ = (function (){var G__11255 = new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11255) : cljs.core.deref.call(null,G__11255));
})();
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,section));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = (cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.get_miser_width.cljs$core$IFn$_invoke$arity$1(this$) : cljs.pprint.get_miser_width.call(null,this$));
var maxcol = cljs.pprint.get_max_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1((function (){var G__11259 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11259) : cljs.core.deref.call(null,G__11259));
})()));
var and__4149__auto__ = miser_width;
if(cljs.core.truth_(and__4149__auto__)){
var and__4149__auto____$1 = maxcol;
if(cljs.core.truth_(and__4149__auto____$1)){
var and__4149__auto____$2 = ((function (){var G__11261 = new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11261) : cljs.core.deref.call(null,G__11261));
})() >= (maxcol - miser_width));
if(and__4149__auto____$2){
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
} else {
return and__4149__auto____$2;
}
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
});
if(typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined'){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__5055__auto__ = (function (){var G__11262 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11262) : cljs.core.atom.call(null,G__11262));
})();
var prefer_table__5056__auto__ = (function (){var G__11263 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11263) : cljs.core.atom.call(null,G__11263));
})();
var method_cache__5057__auto__ = (function (){var G__11264 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11264) : cljs.core.atom.call(null,G__11264));
})();
var cached_hierarchy__5058__auto__ = (function (){var G__11265 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11265) : cljs.core.atom.call(null,G__11265));
})();
var hierarchy__5059__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","emit-nl?"),((function (method_table__5055__auto__,prefer_table__5056__auto__,method_cache__5057__auto__,cached_hierarchy__5058__auto__,hierarchy__5059__auto__){
return (function (t,_,___$1,___$2){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__5055__auto__,prefer_table__5056__auto__,method_cache__5057__auto__,cached_hierarchy__5058__auto__,hierarchy__5059__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5059__auto__,method_table__5055__auto__,prefer_table__5056__auto__,method_cache__5057__auto__,cached_hierarchy__5058__auto__));
})();
}
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"linear","linear",872268697),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"miser","miser",-556060186),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fill","fill",883462889),(function (newl,this$,section,subsection){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
var or__4161__auto__ = (function (){var G__11267 = new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11267) : cljs.core.deref.call(null,G__11267));
})();
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
var or__4161__auto____$1 = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,subsection));
if(or__4161__auto____$1){
return or__4161__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_(this$,lb,section);
}
}
}));
cljs.pprint.emit_nl_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"mandatory","mandatory",542802336),(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first(buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__11268_SHARP_){
return cljs.core.not((function (){var and__4149__auto__ = cljs.pprint.nl_t_QMARK_(p1__11268_SHARP_);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.pprint.ancestor_QMARK_(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__11268_SHARP_),lb);
} else {
return and__4149__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((cljs.core.count(section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first(buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (nl,lb){
return (function (p1__11269_SHARP_){
var nl_lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__11269_SHARP_);
return cljs.core.not((function (){var and__4149__auto__ = cljs.pprint.nl_t_QMARK_(p1__11269_SHARP_);
if(cljs.core.truth_(and__4149__auto__)){
var or__4161__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nl_lb,lb);
if(or__4161__auto__){
return or__4161__auto__;
} else {
return cljs.pprint.ancestor_QMARK_(nl_lb,lb);
}
} else {
return and__4149__auto__;
}
})());
});})(nl,lb))
,cljs.core.next(buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
var G__11278_11286 = new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb);
var G__11279_11287 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11278_11286,G__11279_11287) : cljs.core.reset_BANG_.call(null,G__11278_11286,G__11279_11287));

var G__11280_11288 = new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb);
var G__11281_11289 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11280_11288,G__11281_11289) : cljs.core.reset_BANG_.call(null,G__11280_11288,G__11281_11289));

var lb__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
var G__11282_11290 = new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb__$1);
var G__11283_11291 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11282_11290,G__11283_11291) : cljs.core.reset_BANG_.call(null,G__11282_11290,G__11283_11291));

var G__11284_11292 = new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb__$1);
var G__11285_11293 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11284_11292,G__11285_11293) : cljs.core.reset_BANG_.call(null,G__11284_11292,G__11285_11293));

var G__11294 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__11294;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1((function (){var G__11299 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11299) : cljs.core.deref.call(null,G__11299));
})()),cljs.pprint.pp_newline());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1((function (){var G__11300 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11300) : cljs.core.deref.call(null,G__11300));
})()),prefix);
} else {
}

var istr_11303 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((function (){var G__11301 = new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11301) : cljs.core.deref.call(null,G__11301));
})() - cljs.core.count(prefix))," "));
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1((function (){var G__11302 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11302) : cljs.core.deref.call(null,G__11302));
})()),istr_11303);

return cljs.pprint.update_nl_state(lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__11304_SHARP_){
return cljs.core.not(cljs.pprint.nl_t_QMARK_(p1__11304_SHARP_));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__11311 = cljs.pprint.split_at_newline(tokens);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11311,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11311,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens(this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__11312 = cljs.pprint.get_section(b);
var section = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11312,(0),null);
var remainder = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11312,(1),null);
var newl = cljs.core.first(b);
var do_nl = (function (){var G__11313 = newl;
var G__11314 = this$;
var G__11315 = section;
var G__11316 = cljs.pprint.get_sub_section(b);
return (cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4 ? cljs.pprint.emit_nl_QMARK_.cljs$core$IFn$_invoke$arity$4(G__11313,G__11314,G__11315,G__11316) : cljs.pprint.emit_nl_QMARK_.call(null,G__11313,G__11314,G__11315,G__11316));
})();
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl(this$,newl);

return cljs.core.next(b);
})()
:b);
var long_section = cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,result));
var result__$1 = ((long_section)?(function (){var rem2 = cljs$pprint$write_token_string(this$,section);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rem2,section)){
cljs.pprint.write_tokens(this$,section,false);

return remainder;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1((function (){var G__11318 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11318) : cljs.core.deref.call(null,G__11318));
})());
while(true){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,buffer));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,buffer))){
var new_buffer = cljs.pprint.write_token_string(this$,buffer);
if(!((buffer === new_buffer))){
var G__11319 = new_buffer;
buffer = G__11319;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1((function (){var G__11322 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11322) : cljs.core.deref.call(null,G__11322));
})()),token));

if(cljs.core.not(cljs.pprint.tokens_fit_QMARK_(this$,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1((function (){var G__11323 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11323) : cljs.core.deref.call(null,G__11323));
})())))){
return cljs.pprint.write_line(this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line(this$);

var temp__4423__auto__ = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1((function (){var G__11325 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11325) : cljs.core.deref.call(null,G__11325));
})());
if(cljs.core.truth_(temp__4423__auto__)){
var buf = temp__4423__auto__;
cljs.pprint.write_tokens(this$,buf,true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__4425__auto__ = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1((function (){var G__11328 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11328) : cljs.core.deref.call(null,G__11328));
})());
if(cljs.core.truth_(temp__4425__auto__)){
var tws = temp__4425__auto__;
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1((function (){var G__11329 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11329) : cljs.core.deref.call(null,G__11329));
})()),tws);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$3(s,"\n",(-1));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(lines),(1))){
return s;
} else {
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1((function (){var G__11345 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11345) : cljs.core.deref.call(null,G__11345));
})())));
var l = cljs.core.first(lines);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1((function (){var G__11346 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11346) : cljs.core.deref.call(null,G__11346));
})()))){
var oldpos_11360 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1((function (){var G__11347 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11347) : cljs.core.deref.call(null,G__11347));
})());
var newpos_11361 = (oldpos_11360 + cljs.core.count(l));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_11361);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(l,null,oldpos_11360,newpos_11361));

cljs.pprint.write_buffered_output(this$);
} else {
cljs.pprint.write_white_space(this$);

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1((function (){var G__11348 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11348) : cljs.core.deref.call(null,G__11348));
})()),l);
}

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1((function (){var G__11349 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11349) : cljs.core.deref.call(null,G__11349));
})()),"\n");

var seq__11350_11362 = cljs.core.seq(cljs.core.next(cljs.core.butlast(lines)));
var chunk__11351_11363 = null;
var count__11352_11364 = (0);
var i__11353_11365 = (0);
while(true){
if((i__11353_11365 < count__11352_11364)){
var l_11366__$1 = chunk__11351_11363.cljs$core$IIndexed$_nth$arity$2(null,i__11353_11365);
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1((function (){var G__11354 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11354) : cljs.core.deref.call(null,G__11354));
})()),l_11366__$1);

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1((function (){var G__11355 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11355) : cljs.core.deref.call(null,G__11355));
})()),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1((function (){var G__11356 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11356) : cljs.core.deref.call(null,G__11356));
})()),prefix);
} else {
}

var G__11367 = seq__11350_11362;
var G__11368 = chunk__11351_11363;
var G__11369 = count__11352_11364;
var G__11370 = (i__11353_11365 + (1));
seq__11350_11362 = G__11367;
chunk__11351_11363 = G__11368;
count__11352_11364 = G__11369;
i__11353_11365 = G__11370;
continue;
} else {
var temp__4425__auto___11371 = cljs.core.seq(seq__11350_11362);
if(temp__4425__auto___11371){
var seq__11350_11372__$1 = temp__4425__auto___11371;
if(cljs.core.chunked_seq_QMARK_(seq__11350_11372__$1)){
var c__4945__auto___11373 = cljs.core.chunk_first(seq__11350_11372__$1);
var G__11374 = cljs.core.chunk_rest(seq__11350_11372__$1);
var G__11375 = c__4945__auto___11373;
var G__11376 = cljs.core.count(c__4945__auto___11373);
var G__11377 = (0);
seq__11350_11362 = G__11374;
chunk__11351_11363 = G__11375;
count__11352_11364 = G__11376;
i__11353_11365 = G__11377;
continue;
} else {
var l_11378__$1 = cljs.core.first(seq__11350_11372__$1);
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1((function (){var G__11357 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11357) : cljs.core.deref.call(null,G__11357));
})()),l_11378__$1);

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1((function (){var G__11358 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11358) : cljs.core.deref.call(null,G__11358));
})()),cljs.pprint.pp_newline());

if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1((function (){var G__11359 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11359) : cljs.core.deref.call(null,G__11359));
})()),prefix);
} else {
}

var G__11379 = cljs.core.next(seq__11350_11372__$1);
var G__11380 = null;
var G__11381 = (0);
var G__11382 = (0);
seq__11350_11362 = G__11379;
chunk__11351_11363 = G__11380;
count__11352_11364 = G__11381;
i__11353_11365 = G__11382;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"writing","writing",-1486865108));

return cljs.core.last(lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1((function (){var G__11386 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11386) : cljs.core.deref.call(null,G__11386));
})()),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$);

return cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1((function (){var G__11387 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11387) : cljs.core.deref.call(null,G__11387));
})()),c);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,"\n")){
return cljs.pprint.write_initial_lines(this$,"\n");
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1((function (){var G__11388 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11388) : cljs.core.deref.call(null,G__11388));
})());
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_buffer_blob(cljs.core.char$(c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0))),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0))),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false)),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false)),null,null,null,null,null,null,null));
var fields = (function (){var G__11402 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437),new cljs.core.Keyword(null,"buffer-block","buffer-block",-10937307),new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267),new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"buffer-level","buffer-level",928864731),new cljs.core.Keyword(null,"buffer","buffer",617295198)],[lb,miser_width,lb,true,null,new cljs.core.Keyword(null,"writing","writing",-1486865108),(0),null,cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2(writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11402) : cljs.core.atom.call(null,G__11402));
})();
if(typeof cljs.pprint.t11403 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.pprint.t11403 = (function (pretty_writer,writer,max_columns,miser_width,lb,fields,meta11404){
this.pretty_writer = pretty_writer;
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta11404 = meta11404;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t11403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_11405,meta11404__$1){
var self__ = this;
var _11405__$1 = this;
return (new cljs.pprint.t11403(self__.pretty_writer,self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta11404__$1));
});})(lb,fields))
;

cljs.pprint.t11403.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_11405){
var self__ = this;
var _11405__$1 = this;
return self__.meta11404;
});})(lb,fields))
;

cljs.pprint.t11403.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t11403.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__11406 = cljs.core._EQ_;
var expr__11407 = cljs.core.type(x);
if(cljs.core.truth_((pred__11406.cljs$core$IFn$_invoke$arity$2 ? pred__11406.cljs$core$IFn$_invoke$arity$2(String,expr__11407) : pred__11406.call(null,String,expr__11407)))){
var s0 = cljs.pprint.write_initial_lines(this$__$1,x);
var s = clojure.string.replace_first(s0,/\s+$/,"");
var white_space = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s0,cljs.core.count(s));
var mode = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1((function (){var G__11409 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11409) : cljs.core.deref.call(null,G__11409));
})());
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$__$1);

cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1((function (){var G__11410 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11410) : cljs.core.deref.call(null,G__11410));
})()),s);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),white_space);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1((function (){var G__11411 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11411) : cljs.core.deref.call(null,G__11411));
})());
var newpos = (oldpos + cljs.core.count(s0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer(this$__$1,cljs.pprint.make_buffer_blob(s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_((pred__11406.cljs$core$IFn$_invoke$arity$2 ? pred__11406.cljs$core$IFn$_invoke$arity$2(Number,expr__11407) : pred__11406.call(null,Number,expr__11407)))){
return cljs.pprint.p_write_char(this$__$1,x);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__11407)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t11403.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.pprint._ppflush(this$__$1);

return cljs.core._flush(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1((function (){var G__11412 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11412) : cljs.core.deref.call(null,G__11412));
})()));
});})(lb,fields))
;

cljs.pprint.t11403.prototype.cljs$pprint$IPrettyFlush$ = true;

cljs.pprint.t11403.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1((function (){var G__11413 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11413) : cljs.core.deref.call(null,G__11413));
})()),new cljs.core.Keyword(null,"buffering","buffering",-876713613))){
cljs.pprint.write_tokens(this$__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1((function (){var G__11414 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11414) : cljs.core.deref.call(null,G__11414));
})()),true);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$__$1) : cljs.core.deref.call(null,this$__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space(this$__$1);
}
});})(lb,fields))
;

cljs.pprint.t11403.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pretty-writer","pretty-writer",417697260,null),new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"miser-width","miser-width",330482090,null),new cljs.core.Symbol(null,"lb","lb",950310490,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta11404","meta11404",212343784,null)], null);
});})(lb,fields))
;

cljs.pprint.t11403.cljs$lang$type = true;

cljs.pprint.t11403.cljs$lang$ctorStr = "cljs.pprint/t11403";

cljs.pprint.t11403.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__4740__auto__,writer__4741__auto__,opt__4742__auto__){
return cljs.core._write(writer__4741__auto__,"cljs.pprint/t11403");
});})(lb,fields))
;

cljs.pprint.__GT_t11403 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t11403(pretty_writer__$1,writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta11404){
return (new cljs.pprint.t11403(pretty_writer__$1,writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta11404));
});})(lb,fields))
;

}

return (new cljs.pprint.t11403(cljs$pprint$pretty_writer,writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1((function (){var G__11425 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11425) : cljs.core.deref.call(null,G__11425));
})()),null,(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0))),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0))),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false)),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false)),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),lb);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1((function (){var G__11426 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11426) : cljs.core.deref.call(null,G__11426));
})()),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$);

var temp__4425__auto___11435 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1((function (){var G__11427 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11427) : cljs.core.deref.call(null,G__11427));
})());
if(cljs.core.truth_(temp__4425__auto___11435)){
var cb_11436 = temp__4425__auto___11435;
(cb_11436.cljs$core$IFn$_invoke$arity$1 ? cb_11436.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",-355208981)) : cb_11436.call(null,new cljs.core.Keyword(null,"start","start",-355208981)));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1((function (){var G__11428 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11428) : cljs.core.deref.call(null,G__11428));
})()),prefix);
} else {
}

var col = cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1((function (){var G__11429 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11429) : cljs.core.deref.call(null,G__11429));
})()));
var G__11430_11437 = new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb);
var G__11431_11438 = col;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11430_11437,G__11431_11438) : cljs.core.reset_BANG_.call(null,G__11430_11437,G__11431_11438));

var G__11432 = new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb);
var G__11433 = col;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11432,G__11433) : cljs.core.reset_BANG_.call(null,G__11432,G__11433));
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1((function (){var G__11434 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11434) : cljs.core.deref.call(null,G__11434));
})());
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count(prefix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_start_block_t(lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1((function (){var G__11444 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11444) : cljs.core.deref.call(null,G__11444));
})());
var suffix = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1((function (){var G__11445 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11445) : cljs.core.deref.call(null,G__11445));
})()),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$);

if(cljs.core.truth_(suffix)){
cljs.core._write(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1((function (){var G__11446 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11446) : cljs.core.deref.call(null,G__11446));
})()),suffix);
} else {
}

var temp__4425__auto___11449 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1((function (){var G__11447 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11447) : cljs.core.deref.call(null,G__11447));
})());
if(cljs.core.truth_(temp__4425__auto___11449)){
var cb_11450 = temp__4425__auto___11449;
(cb_11450.cljs$core$IFn$_invoke$arity$1 ? cb_11450.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958)) : cb_11450.call(null,new cljs.core.Keyword(null,"end","end",-268185958)));
} else {
}
} else {
var oldpos_11451 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1((function (){var G__11448 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11448) : cljs.core.deref.call(null,G__11448));
})());
var newpos_11452 = (oldpos_11451 + (cljs.core.truth_(suffix)?cljs.core.count(suffix):(0)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_11452);

cljs.pprint.add_to_buffer(this$,cljs.pprint.make_end_block_t(lb,oldpos_11451,newpos_11452));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$)),cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"buffering","buffering",-876713613));

var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1((function (){var G__11455 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11455) : cljs.core.deref.call(null,G__11455));
})());
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_nl_t(type,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1((function (){var G__11456 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11456) : cljs.core.deref.call(null,G__11456));
})()),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1((function (){var G__11467 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11467) : cljs.core.deref.call(null,G__11467));
})());
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1((function (){var G__11468 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11468) : cljs.core.deref.call(null,G__11468));
})()),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space(this$);

var G__11469 = new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb);
var G__11470 = (offset + (function (){var pred__11471 = cljs.core._EQ_;
var expr__11472 = relative_to;
if(cljs.core.truth_((pred__11471.cljs$core$IFn$_invoke$arity$2 ? pred__11471.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),expr__11472) : pred__11471.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__11472)))){
var G__11474 = new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11474) : cljs.core.deref.call(null,G__11474));
} else {
if(cljs.core.truth_((pred__11471.cljs$core$IFn$_invoke$arity$2 ? pred__11471.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"current","current",-1088038603),expr__11472) : pred__11471.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__11472)))){
return cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1((function (){var G__11475 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11475) : cljs.core.deref.call(null,G__11475));
})()));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__11472)].join('')));
}
}
})());
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11469,G__11470) : cljs.core.reset_BANG_.call(null,G__11469,G__11470));
} else {
var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1((function (){var G__11476 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11476) : cljs.core.deref.call(null,G__11476));
})());
return cljs.pprint.add_to_buffer(this$,cljs.pprint.make_indent_t(lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$1((function (){var G__11478 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(this$) : cljs.core.deref.call(null,this$));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11478) : cljs.core.deref.call(null,G__11478));
})());
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if(typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined'){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base*
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.write_option_table = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437),new cljs.core.Keyword(null,"right-margin","right-margin",-810413306),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"lines","lines",-700165781),new cljs.core.Keyword(null,"suppress-namespaces","suppress-namespaces",2130686956),new cljs.core.Keyword(null,"radix","radix",857016463),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"readably","readably",1129599760),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"pretty","pretty",-1916372486),new cljs.core.Keyword(null,"base","base",185279322)],[new cljs.core.Var(function(){return cljs.pprint._STAR_print_miser_width_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-miser-width*","cljs.pprint/*print-miser-width*",1588913450,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-miser-width*","*print-miser-width*",1206624211,null),"out/cljs/pprint.cljs",21,null,true,null,637,cljs.core.List.EMPTY,"The column at which to enter miser style. Depending on the dispatch table,\nmiser style add newlines in more places to try to keep lines short allowing for further\nlevels of nesting.",(cljs.core.truth_(cljs.pprint._STAR_print_miser_width_STAR_)?cljs.pprint._STAR_print_miser_width_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_right_margin_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-right-margin*","cljs.pprint/*print-right-margin*",-56183119,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-right-margin*","*print-right-margin*",-437272454,null),"out/cljs/pprint.cljs",22,null,true,null,630,cljs.core.List.EMPTY,"Pretty printing will try to avoid anything going beyond this column.\nSet it to nil to have pprint let the line be arbitrarily long. This will ignore all\nnon-mandatory newlines.",(cljs.core.truth_(cljs.pprint._STAR_print_right_margin_STAR_)?cljs.pprint._STAR_print_right_margin_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_circle_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-circle*","cljs.pprint/*print-circle*",1606185849,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-circle*","*print-circle*",1148404994,null),"out/cljs/pprint.cljs",15,null,true,null,649,cljs.core.List.EMPTY,"Mark circular structures (N.B. This is not yet used)",(cljs.core.truth_(cljs.pprint._STAR_print_circle_STAR_)?cljs.pprint._STAR_print_circle_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_lines_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-lines*","cljs.pprint/*print-lines*",534683484,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-lines*","*print-lines*",75920659,null),"out/cljs/pprint.cljs",14,null,true,null,643,cljs.core.List.EMPTY,"Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)",(cljs.core.truth_(cljs.pprint._STAR_print_lines_STAR_)?cljs.pprint._STAR_print_lines_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_suppress_namespaces_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-suppress-namespaces*","cljs.pprint/*print-suppress-namespaces*",1649488204,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-suppress-namespaces*","*print-suppress-namespaces*",1795828355,null),"out/cljs/pprint.cljs",28,null,true,null,661,cljs.core.List.EMPTY,"Don't print namespaces with symbols. This is particularly useful when\npretty printing the results of macro expansions",(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)?cljs.pprint._STAR_print_suppress_namespaces_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_radix_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-radix*","cljs.pprint/*print-radix*",1558253641,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-radix*","*print-radix*",1168517744,null),"out/cljs/pprint.cljs",14,null,true,null,670,cljs.core.List.EMPTY,"Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,\nor 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the\nradix specifier is in the form #XXr where XX is the decimal value of *print-base* ",(cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?cljs.pprint._STAR_print_radix_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core._STAR_print_level_STAR_;},new cljs.core.Symbol("cljs.core","*print-level*","cljs.core/*print-level*",65848482,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),"cljs/core.cljs",(16),null,true,null,(114),cljs.core.List.EMPTY,"*print-level* controls how many levels deep the printer will\n  print nested objects. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  level to print. Each argument to print is at level 0; if an argument is a\n  collection, its items are at level 1; and so on. If an object is a\n  collection and is at a level greater than or equal to the value bound to\n  *print-level*, the printer prints '#' to represent it. The root binding\n  is nil indicating no limit.",(cljs.core.truth_(cljs.core._STAR_print_level_STAR_)?cljs.core._STAR_print_level_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core._STAR_print_readably_STAR_;},new cljs.core.Symbol("cljs.core","*print-readably*","cljs.core/*print-readably*",-354670250,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),"cljs/core.cljs",(19),null,true,null,(78),cljs.core.List.EMPTY,"When set to logical false, strings and characters will be printed with\n  non-alphanumeric characters converted to the appropriate escape sequences.\n\n  Defaults to true",(cljs.core.truth_(cljs.core._STAR_print_readably_STAR_)?cljs.core._STAR_print_readably_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_pprint_dispatch_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-pprint-dispatch*","cljs.pprint/*print-pprint-dispatch*",-1820734013,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-pprint-dispatch*","*print-pprint-dispatch*",-1709114492,null),"out/cljs/pprint.cljs",25,null,true,null,623,cljs.core.List.EMPTY,"The pretty print dispatch function. Use with-pprint-dispatch or\nset-pprint-dispatch to modify.",(cljs.core.truth_(cljs.pprint._STAR_print_pprint_dispatch_STAR_)?cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core._STAR_print_length_STAR_;},new cljs.core.Symbol("cljs.core","*print-length*","cljs.core/*print-length*",-20766927,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),"cljs/core.cljs",(17),null,true,null,(102),cljs.core.List.EMPTY,"When set to logical true, objects will be printed in a way that preserves\n  their type when read in later.\n\n  Defaults to false.",(cljs.core.truth_(cljs.core._STAR_print_length_STAR_)?cljs.core._STAR_print_length_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_pretty_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-pretty*","cljs.pprint/*print-pretty*",-762636861,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-pretty*","*print-pretty*",726795140,null),"out/cljs/pprint.cljs",16,null,true,null,617,cljs.core.List.EMPTY,"Bind to true if you want write to use pretty printing",(cljs.core.truth_(cljs.pprint._STAR_print_pretty_STAR_)?cljs.pprint._STAR_print_pretty_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_base_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-base*","cljs.pprint/*print-base*",1887526790,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-base*","*print-base*",2037937791,null),"out/cljs/pprint.cljs",13,null,true,null,675,cljs.core.List.EMPTY,"The base to use for printing integers and rationals.",(cljs.core.truth_(cljs.pprint._STAR_print_base_STAR_)?cljs.pprint._STAR_print_base_STAR_.cljs$lang$test:null)]))]);
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__11479_SHARP_){
var temp__4425__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(t,cljs.core.key(p1__11479_SHARP_));
if(cljs.core.truth_(temp__4425__auto__)){
var v = temp__4425__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val(p1__11479_SHARP_)], null);
} else {
return null;
}
}),cljs.core.array_seq([m], 0)));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__4149__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,x));
if(and__4149__auto__){
return new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267).cljs$core$IFn$_invoke$arity$1((function (){var G__11485 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11485) : cljs.core.deref.call(null,G__11485));
})());
} else {
return and__4149__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer(base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface.
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__4149__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__4149__auto__)){
var and__4149__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__4149__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
})();
if(cljs.core.not(cljs.pprint._STAR_print_pretty_STAR_)){
(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

(cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object));
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 * Keyword              Meaning                              Default value
 * :stream              Writer for output or nil             true (indicates *out*)
 * :base                Base to use for writing rationals    Current value of *print-base*
 * :circle*             If true, mark circular structures    Current value of *print-circle*
 * :length              Maximum elements to show in sublists Current value of *print-length*
 * :level               Maximum depth                        Current value of *print-level*
 * :lines*              Maximum lines of output              Current value of *print-lines*
 * :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 * :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 * :pretty              If true, do pretty printing          Current value of *print-pretty*
 * :radix               If true, prepend a radix specifier   Current value of *print-radix*
 * :readably*           If true, print readably              Current value of *print-readably*
 * :right-margin        The column for the right margin      Current value of *print-right-margin*
 * :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 * * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(){
var args__5207__auto__ = [];
var len__5200__auto___11502 = arguments.length;
var i__5201__auto___11503 = (0);
while(true){
if((i__5201__auto___11503 < len__5200__auto___11502)){
args__5207__auto__.push((arguments[i__5201__auto___11503]));

var G__11504 = (i__5201__auto___11503 + (1));
i__5201__auto___11503 = G__11504;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((1) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((1)),(0))):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5208__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stream","stream",1534941648),true], null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,kw_args)], 0));
var _STAR_print_base_STAR_11488 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR_11489 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR_11490 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR_11491 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR_11492 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR_11493 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR_11494 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR_11495 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR_11496 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR_11497 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR_11498 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR_11499 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
cljs.pprint._STAR_print_base_STAR_ = new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);

cljs.pprint._STAR_print_circle_STAR_ = new cljs.core.Keyword(null,"circle","circle",1903212362).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);

cljs.core._STAR_print_length_STAR_ = new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);

cljs.core._STAR_print_level_STAR_ = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);

cljs.pprint._STAR_print_lines_STAR_ = new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);

cljs.pprint._STAR_print_miser_width_STAR_ = new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);

cljs.pprint._STAR_print_pretty_STAR_ = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);

cljs.pprint._STAR_print_radix_STAR_ = new cljs.core.Keyword(null,"radix","radix",857016463).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);

cljs.core._STAR_print_readably_STAR_ = new cljs.core.Keyword(null,"readably","readably",1129599760).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);

cljs.pprint._STAR_print_right_margin_STAR_ = new cljs.core.Keyword(null,"right-margin","right-margin",-810413306).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = new cljs.core.Keyword(null,"suppress-namespaces","suppress-namespaces",2130686956).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_(options,new cljs.core.Keyword(null,"stream","stream",1534941648)))?new cljs.core.Keyword(null,"stream","stream",1534941648).cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = (((optval === true) || ((optval == null)))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.core.truth_(cljs.pprint._STAR_print_pretty_STAR_)){
var base_writer__6643__auto___11505 = base_writer;
var new_writer__6644__auto___11506 = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__6643__auto___11505));
var _STAR_out_STAR_11500_11507 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__6644__auto___11506)?cljs.pprint.make_pretty_writer(base_writer__6643__auto___11505,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__6643__auto___11505);

try{cljs.pprint.write_out(object);

cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_11500_11507;
}} else {
var _STAR_out_STAR_11501_11508 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = base_writer;

try{(cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(object) : cljs.pprint.pr.call(null,object));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_11501_11508;
}}

if(optval === true){
(cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1([cljs.core.str(sb)].join('')) : cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str(sb)].join('')));
} else {
}

if((optval == null)){
return [cljs.core.str(sb)].join('');
} else {
return null;
}
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR_11499;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR_11498;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_11497;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR_11496;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_11495;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_11494;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR_11493;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR_11492;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_11491;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_11490;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR_11489;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR_11488;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

cljs.pprint.write.cljs$lang$applyTo = (function (seq11486){
var G__11487 = cljs.core.first(seq11486);
var seq11486__$1 = cljs.core.next(seq11486);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic(G__11487,seq11486__$1);
});
cljs.pprint.pprint = (function cljs$pprint$pprint(){
var args11509 = [];
var len__5200__auto___11515 = arguments.length;
var i__5201__auto___11516 = (0);
while(true){
if((i__5201__auto___11516 < len__5200__auto___11515)){
args11509.push((arguments[i__5201__auto___11516]));

var G__11517 = (i__5201__auto___11516 + (1));
i__5201__auto___11516 = G__11517;
continue;
} else {
}
break;
}

var G__11511 = args11509.length;
switch (G__11511) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11509.length)].join('')));

}
});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_11512 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2(object,cljs.core._STAR_out_STAR_);

return (cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1([cljs.core.str(sb)].join('')) : cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str(sb)].join('')));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_11512;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__6643__auto__ = writer;
var new_writer__6644__auto__ = cljs.core.not(cljs.pprint.pretty_writer_QMARK_(base_writer__6643__auto__));
var _STAR_out_STAR_11513 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__6644__auto__)?cljs.pprint.make_pretty_writer(base_writer__6643__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__6643__auto__);

try{var _STAR_print_pretty_STAR_11514_11519 = cljs.pprint._STAR_print_pretty_STAR_;
cljs.pprint._STAR_print_pretty_STAR_ = true;

try{cljs.pprint.write_out(object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_11514_11519;
}
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(cljs.core._STAR_out_STAR_)))){
cljs.core._write(cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush(cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_11513;
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = 2;
cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not((choices.cljs$core$IFn$_invoke$arity$1 ? choices.cljs$core$IFn$_invoke$arity$1(arg) : choices.call(null,arg)))){
throw (new Error([cljs.core.str("Bad argument: "),cljs.core.str(arg),cljs.core.str(". It must be one of "),cljs.core.str(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__4149__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__4149__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__4149__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 * newline is :linear, :miser, :fill, or :mandatory.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mandatory","mandatory",542802336),null,new cljs.core.Keyword(null,"miser","miser",-556060186),null,new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"linear","linear",872268697),null], null), null));

return cljs.pprint.nl(cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg(relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),null,new cljs.core.Keyword(null,"current","current",-1088038603),null], null), null));

return cljs.pprint.indent(cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg(kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"line-relative","line-relative",1149548219),null,new cljs.core.Keyword(null,"section-relative","section-relative",-658298724),null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 * (let [results [46 38 22]]
 * (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 * (count results) results))
 * 
 * Prints via *print-fn*:
 * There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(){
var args__5207__auto__ = [];
var len__5200__auto___11523 = arguments.length;
var i__5201__auto___11524 = (0);
while(true){
if((i__5201__auto___11524 < len__5200__auto___11523)){
args__5207__auto__.push((arguments[i__5201__auto___11524]));

var G__11525 = (i__5201__auto___11524 + (1));
i__5201__auto___11524 = G__11525;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((2) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((2)),(0))):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5208__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(format_in) : cljs.pprint.compile_format.call(null,format_in)):format_in);
var navigator = (cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.init_navigator.cljs$core$IFn$_invoke$arity$1(args) : cljs.pprint.init_navigator.call(null,args));
return (cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3(writer,compiled_format,navigator) : cljs.pprint.execute_format.call(null,writer,compiled_format,navigator));
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq11520){
var G__11521 = cljs.core.first(seq11520);
var seq11520__$1 = cljs.core.next(seq11520);
var G__11522 = cljs.core.first(seq11520__$1);
var seq11520__$2 = cljs.core.next(seq11520__$1);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(G__11521,G__11522,seq11520__$2);
});
cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str(message),cljs.core.str("\n"),cljs.core.str(cljs.pprint._STAR_format_str_STAR_),cljs.core.str("\n"),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(offset," "))),cljs.core.str("^"),cljs.core.str("\n")].join('');
throw Error(full_message);
});

/**
* @constructor
* @param {*} seq
* @param {*} rest
* @param {*} pos
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4756__auto__,k__4757__auto__){
var self__ = this;
var this__4756__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4756__auto____$1,k__4757__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4758__auto__,k11527,else__4759__auto__){
var self__ = this;
var this__4758__auto____$1 = this;
var G__11529 = (((k11527 instanceof cljs.core.Keyword))?k11527.fqn:null);
switch (G__11529) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k11527,else__4759__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4770__auto__,writer__4771__auto__,opts__4772__auto__){
var self__ = this;
var this__4770__auto____$1 = this;
var pr_pair__4773__auto__ = ((function (this__4770__auto____$1){
return (function (keyval__4774__auto__){
return cljs.core.pr_sequential_writer(writer__4771__auto__,cljs.core.pr_writer,""," ","",opts__4772__auto__,keyval__4774__auto__);
});})(this__4770__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4771__auto__,pr_pair__4773__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__4772__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4754__auto__){
var self__ = this;
var this__4754__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4750__auto__){
var self__ = this;
var this__4750__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4760__auto__){
var self__ = this;
var this__4760__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4751__auto__){
var self__ = this;
var this__4751__auto____$1 = this;
var h__4577__auto__ = self__.__hash;
if(!((h__4577__auto__ == null))){
return h__4577__auto__;
} else {
var h__4577__auto____$1 = cljs.core.hash_imap(this__4751__auto____$1);
self__.__hash = h__4577__auto____$1;

return h__4577__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4752__auto__,other__4753__auto__){
var self__ = this;
var this__4752__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4149__auto__ = other__4753__auto__;
if(cljs.core.truth_(and__4149__auto__)){
var and__4149__auto____$1 = (this__4752__auto____$1.constructor === other__4753__auto__.constructor);
if(and__4149__auto____$1){
return cljs.core.equiv_map(this__4752__auto____$1,other__4753__auto__);
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4765__auto__,k__4766__auto__){
var self__ = this;
var this__4765__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"seq","seq",-1817803783),null,new cljs.core.Keyword(null,"rest","rest",-1241696419),null], null), null),k__4766__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4765__auto____$1),self__.__meta),k__4766__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4766__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4763__auto__,k__4764__auto__,G__11526){
var self__ = this;
var this__4763__auto____$1 = this;
var pred__11530 = cljs.core.keyword_identical_QMARK_;
var expr__11531 = k__4764__auto__;
if(cljs.core.truth_((pred__11530.cljs$core$IFn$_invoke$arity$2 ? pred__11530.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"seq","seq",-1817803783),expr__11531) : pred__11530.call(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),expr__11531)))){
return (new cljs.pprint.arg_navigator(G__11526,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11530.cljs$core$IFn$_invoke$arity$2 ? pred__11530.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rest","rest",-1241696419),expr__11531) : pred__11530.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419),expr__11531)))){
return (new cljs.pprint.arg_navigator(self__.seq,G__11526,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11530.cljs$core$IFn$_invoke$arity$2 ? pred__11530.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos","pos",-864607220),expr__11531) : pred__11530.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__11531)))){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__11526,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4764__auto__,G__11526),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4768__auto__){
var self__ = this;
var this__4768__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4755__auto__,G__11526){
var self__ = this;
var this__4755__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__11526,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4761__auto__,entry__4762__auto__){
var self__ = this;
var this__4761__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4762__auto__)){
return cljs.core._assoc(this__4761__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4762__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4762__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4761__auto____$1,entry__4762__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"rest","rest",398835108,null),new cljs.core.Symbol(null,"pos","pos",775924307,null)], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__4790__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/arg-navigator");
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__4790__auto__,writer__4791__auto__){
return cljs.core._write(writer__4791__auto__,"cljs.pprint/arg-navigator");
});

cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__11528){
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(G__11528),new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(G__11528),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__11528),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__11528,new cljs.core.Keyword(null,"seq","seq",-1817803783),cljs.core.array_seq([new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220)], 0)),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq(s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next(rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__11535 = cljs.pprint.next_arg(navigator);
var raw_format = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11535,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11535,(1),null);
var compiled_format = ((typeof raw_format === 'string')?(cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.compile_format.cljs$core$IFn$_invoke$arity$1(raw_format) : cljs.pprint.compile_format.call(null,raw_format)):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator))){
var G__11538 = navigator;
var G__11539 = (new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) - position);
return (cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.relative_reposition.cljs$core$IFn$_invoke$arity$2(G__11538,G__11539) : cljs.pprint.relative_reposition.call(null,G__11538,G__11539));
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition(navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
* @param {*} func
* @param {*} def
* @param {*} params
* @param {*} offset
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4756__auto__,k__4757__auto__){
var self__ = this;
var this__4756__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4756__auto____$1,k__4757__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4758__auto__,k11541,else__4759__auto__){
var self__ = this;
var this__4758__auto____$1 = this;
var G__11543 = (((k11541 instanceof cljs.core.Keyword))?k11541.fqn:null);
switch (G__11543) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k11541,else__4759__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4770__auto__,writer__4771__auto__,opts__4772__auto__){
var self__ = this;
var this__4770__auto____$1 = this;
var pr_pair__4773__auto__ = ((function (this__4770__auto____$1){
return (function (keyval__4774__auto__){
return cljs.core.pr_sequential_writer(writer__4771__auto__,cljs.core.pr_writer,""," ","",opts__4772__auto__,keyval__4774__auto__);
});})(this__4770__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4771__auto__,pr_pair__4773__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__4772__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",-238706040),self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"def","def",-1043430536),self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4754__auto__){
var self__ = this;
var this__4754__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4750__auto__){
var self__ = this;
var this__4750__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4760__auto__){
var self__ = this;
var this__4760__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4751__auto__){
var self__ = this;
var this__4751__auto____$1 = this;
var h__4577__auto__ = self__.__hash;
if(!((h__4577__auto__ == null))){
return h__4577__auto__;
} else {
var h__4577__auto____$1 = cljs.core.hash_imap(this__4751__auto____$1);
self__.__hash = h__4577__auto____$1;

return h__4577__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4752__auto__,other__4753__auto__){
var self__ = this;
var this__4752__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4149__auto__ = other__4753__auto__;
if(cljs.core.truth_(and__4149__auto__)){
var and__4149__auto____$1 = (this__4752__auto____$1.constructor === other__4753__auto__.constructor);
if(and__4149__auto____$1){
return cljs.core.equiv_map(this__4752__auto____$1,other__4753__auto__);
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4765__auto__,k__4766__auto__){
var self__ = this;
var this__4765__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"func","func",-238706040),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"def","def",-1043430536),null], null), null),k__4766__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4765__auto____$1),self__.__meta),k__4766__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4766__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4763__auto__,k__4764__auto__,G__11540){
var self__ = this;
var this__4763__auto____$1 = this;
var pred__11544 = cljs.core.keyword_identical_QMARK_;
var expr__11545 = k__4764__auto__;
if(cljs.core.truth_((pred__11544.cljs$core$IFn$_invoke$arity$2 ? pred__11544.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"func","func",-238706040),expr__11545) : pred__11544.call(null,new cljs.core.Keyword(null,"func","func",-238706040),expr__11545)))){
return (new cljs.pprint.compiled_directive(G__11540,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11544.cljs$core$IFn$_invoke$arity$2 ? pred__11544.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"def","def",-1043430536),expr__11545) : pred__11544.call(null,new cljs.core.Keyword(null,"def","def",-1043430536),expr__11545)))){
return (new cljs.pprint.compiled_directive(self__.func,G__11540,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11544.cljs$core$IFn$_invoke$arity$2 ? pred__11544.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__11545) : pred__11544.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__11545)))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__11540,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__11544.cljs$core$IFn$_invoke$arity$2 ? pred__11544.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"offset","offset",296498311),expr__11545) : pred__11544.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__11545)))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__11540,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4764__auto__,G__11540),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4768__auto__){
var self__ = this;
var this__4768__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",-238706040),self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"def","def",-1043430536),self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4755__auto__,G__11540){
var self__ = this;
var this__4755__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__11540,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4761__auto__,entry__4762__auto__){
var self__ = this;
var this__4761__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4762__auto__)){
return cljs.core._assoc(this__4761__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4762__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4762__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4761__auto____$1,entry__4762__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null)], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__4790__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.pprint/compiled-directive");
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__4790__auto__,writer__4791__auto__){
return cljs.core._write(writer__4791__auto__,"cljs.pprint/compiled-directive");
});

cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__11542){
return (new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(G__11542),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(G__11542),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__11542),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__11542),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__11542,new cljs.core.Keyword(null,"func","func",-238706040),cljs.core.array_seq([new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311)], 0)),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__11548,navigator){
var vec__11552 = p__11548;
var param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11552,(0),null);
var vec__11553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11552,(1),null);
var raw_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11553,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11553,(1),null);
var vec__11554 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196)))?cljs.pprint.next_arg(navigator):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(raw_val,new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11554,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11554,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__11556 = cljs.pprint.map_passing_context(cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11556,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11556,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_(n)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str(n),cljs.core.str((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null))].join('');
} else {
return [cljs.core.str((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__4161__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return [cljs.core.str("#"),cljs.core.str(cljs.pprint._STAR_print_base_STAR_),cljs.core.str("r")].join('');
}
})():null)),cljs.core.str((cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2 ? cljs.pprint.opt_base_str.cljs$core$IFn$_invoke$arity$2(cljs.pprint._STAR_print_base_STAR_,n) : cljs.pprint.opt_base_str.call(null,cljs.pprint._STAR_print_base_STAR_,n)))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__11558 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11558,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11558,(1),null);
var base_output = (function (){var or__4161__auto__ = cljs.pprint.format_simple_number(arg);
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return (print_func.cljs$core$IFn$_invoke$arity$1 ? print_func.cljs$core$IFn$_invoke$arity$1(arg) : print_func.call(null,arg));
}
})();
var base_width = base_output.length;
var min_width = (base_width + new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot(((new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params)) + (1)) * new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((width - base_width),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(chars),cljs.core.str(base_output)].join('')], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(base_output),cljs.core.str(chars)].join('')], 0));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_(x)){
return true;
} else {
if(cljs.pprint.float_QMARK_(x)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (p1__11559_SHARP_){
if((p1__11559_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem(p1__11559_SHARP_,base),cljs.core.quot(p1__11559_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (xlated_val){
return (function (p1__11560_SHARP_){
if((p1__11560_SHARP_ < (10))){
return cljs.core.char$((cljs.pprint.char_code("0") + p1__11560_SHARP_));
} else {
return cljs.core.char$((cljs.pprint.char_code("a") + (p1__11560_SHARP_ - (10))));
}
});})(xlated_val))
,cljs.pprint.remainders(base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str(base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse(cljs.core.first(cljs.pprint.consume((function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(unit,x))),cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(unit,x))], null);
}),cljs.core.reverse(lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__11563 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11563,(0),null);
var arg_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11563,(1),null);
if(cljs.core.truth_(cljs.pprint.integral_QMARK_(arg))){
var neg_11564 = (arg < (0));
var pos_arg_11565 = ((neg_11564)?(- arg):arg);
var raw_str_11566 = cljs.pprint.opt_base_str(base,pos_arg_11565);
var group_str_11567 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (neg_11564,pos_arg_11565,raw_str_11566,vec__11563,arg,arg_navigator__$1){
return (function (p1__11561_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,p1__11561_SHARP_);
});})(neg_11564,pos_arg_11565,raw_str_11566,vec__11563,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_(new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083).cljs$core$IFn$_invoke$arity$1(params),raw_str_11566));
var commas = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(groups),new cljs.core.Keyword(null,"commachar","commachar",652859327).cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.next(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(commas,groups)));
})():raw_str_11566);
var signed_str_11568 = ((neg_11564)?[cljs.core.str("-"),cljs.core.str(group_str_11567)].join(''):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?[cljs.core.str("+"),cljs.core.str(group_str_11567)].join(''):group_str_11567
));
var padded_str_11569 = (((signed_str_11568.length < new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - signed_str_11568.length),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str(signed_str_11568)].join(''):signed_str_11568);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([padded_str_11569], 0));
} else {
cljs.pprint.format_ascii(cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"colinc","colinc",-584873385),(1),new cljs.core.Keyword(null,"minpad","minpad",323570901),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str((((hundreds > (0)))?[cljs.core.str(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds)),cljs.core.str(" hundred")].join(''):null)),cljs.core.str(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
return [cljs.core.str((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 * offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count(parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first(parts);
var remainder = cljs.core.next(parts);
while(true){
if((remainder == null)){
return [cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",acc))),cljs.core.str((((!(cljs.core.empty_QMARK_(this$))) && (!(cljs.core.empty_QMARK_(acc))))?", ":null)),cljs.core.str(this$),cljs.core.str((((!(cljs.core.empty_QMARK_(this$))) && (((pos + offset) > (0))))?[cljs.core.str(" "),cljs.core.str(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null))].join('');
} else {
var G__11570 = ((cljs.core.empty_QMARK_(this$))?acc:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str(this$),cljs.core.str(" "),cljs.core.str(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__11571 = (pos - (1));
var G__11572 = cljs.core.first(remainder);
var G__11573 = cljs.core.next(remainder);
acc = G__11570;
pos = G__11571;
this$ = G__11572;
remainder = G__11573;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__11575 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11575,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11575,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["zero"], 0));
} else {
var abs_arg_11576 = (((arg < (0)))?(- arg):arg);
var parts_11577 = cljs.pprint.remainders((1000),abs_arg_11576);
if((cljs.core.count(parts_11577) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_11578 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,parts_11577);
var full_str_11579 = cljs.pprint.add_english_scales(parts_strs_11578,(0));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((((arg < (0)))?"minus ":null)),cljs.core.str(full_str_11579)].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 * Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot(num,(100));
var tens = cljs.core.rem(num,(100));
return [cljs.core.str((((hundreds > (0)))?[cljs.core.str(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_units,hundreds)),cljs.core.str(" hundred")].join(''):null)),cljs.core.str(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str((((tens > (0)))?(((tens < (20)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot(tens,(10));
var unit_digit = cljs.core.rem(tens,(10));
if(((ten_digit > (0))) && (!((unit_digit > (0))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str((((ten_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str((((unit_digit > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__11581 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11581,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11581,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),arg)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["zeroth"], 0));
} else {
var abs_arg_11582 = (((arg < (0)))?(- arg):arg);
var parts_11583 = cljs.pprint.remainders((1000),abs_arg_11582);
if((cljs.core.count(parts_11583) <= cljs.core.count(cljs.pprint.english_scale_numbers))){
var parts_strs_11584 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.format_simple_cardinal,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(parts_11583));
var head_str_11585 = cljs.pprint.add_english_scales(parts_strs_11584,(1));
var tail_str_11586 = cljs.pprint.format_simple_ordinal(cljs.core.last(parts_11583));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((((arg < (0)))?"minus ":null)),cljs.core.str((((!(cljs.core.empty_QMARK_(head_str_11585))) && (!(cljs.core.empty_QMARK_(tail_str_11586))))?[cljs.core.str(head_str_11585),cljs.core.str(", "),cljs.core.str(tail_str_11586)].join(''):((!(cljs.core.empty_QMARK_(head_str_11585)))?[cljs.core.str(head_str_11585),cljs.core.str("th")].join(''):tail_str_11586
)))].join('')], 0));
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));

var low_two_digits_11587 = cljs.core.rem(arg,(100));
var not_teens_11588 = (((11) < low_two_digits_11587)) || (((19) > low_two_digits_11587));
var low_digit_11589 = cljs.core.rem(low_two_digits_11587,(10));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((((low_digit_11589 === (1))) && (not_teens_11588))?"st":((((low_digit_11589 === (2))) && (not_teens_11588))?"nd":((((low_digit_11589 === (3))) && (not_teens_11588))?"rd":"th"
)))], 0));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__11591 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11591,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11591,(1),null);
if((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000)))){
var digits_11592 = cljs.pprint.remainders((10),arg);
var acc_11593 = cljs.core.PersistentVector.EMPTY;
var pos_11594 = (cljs.core.count(digits_11592) - (1));
var digits_11595__$1 = digits_11592;
while(true){
if(cljs.core.empty_QMARK_(digits_11595__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,acc_11593)], 0));
} else {
var digit_11596 = cljs.core.first(digits_11595__$1);
var G__11597 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),digit_11596))?acc_11593:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc_11593,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(table,pos_11594),(digit_11596 - (1)))));
var G__11598 = (pos_11594 - (1));
var G__11599 = cljs.core.next(digits_11595__$1);
acc_11593 = G__11597;
pos_11594 = G__11598;
digits_11595__$1 = G__11599;
continue;
}
break;
}
} else {
cljs.pprint.format_integer((10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman(cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__11601 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11601,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11601,(1),null);
var as_int = cljs.pprint.char_code(c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Meta-"], 0));
} else {
}

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(special)?special:(((base_char < (32)))?[cljs.core.str("Control-"),cljs.core.str(cljs.core.char$((base_char + (64))))].join(''):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_char,(127)))?"Control-?":cljs.core.char$(base_char)
)))], 0));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__11606 = cljs.pprint.next_arg(navigator);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11606,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11606,(1),null);
var pred__11607_11610 = cljs.core._EQ_;
var expr__11608_11611 = new cljs.core.Keyword(null,"char-format","char-format",-1016499218).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_((pred__11607_11610.cljs$core$IFn$_invoke$arity$2 ? pred__11607_11610.cljs$core$IFn$_invoke$arity$2("o",expr__11608_11611) : pred__11607_11610.call(null,"o",expr__11608_11611)))){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\o~3, '0o",cljs.core.array_seq([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__11607_11610.cljs$core$IFn$_invoke$arity$2 ? pred__11607_11610.cljs$core$IFn$_invoke$arity$2("u",expr__11608_11611) : pred__11607_11610.call(null,"u",expr__11608_11611)))){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\\u~4, '0x",cljs.core.array_seq([cljs.pprint.char_code(c)], 0));
} else {
if(cljs.core.truth_((pred__11607_11610.cljs$core$IFn$_invoke$arity$2 ? pred__11607_11610.cljs$core$IFn$_invoke$arity$2(null,expr__11608_11611) : pred__11607_11610.call(null,null,expr__11608_11611)))){
cljs.pprint.print_char(c);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__11608_11611)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__11613 = cljs.pprint.next_arg(navigator);
var char$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11613,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11613,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([char$], 0));

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first(context);
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),token)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),token));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second(cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__11616 = cljs.pprint.realize_parameter_list(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11616,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11616,(1),null);
var vec__11617 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11617,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11617,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case([cljs.core.str(f)].join(''));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,[cljs.core.str((cljs.core.count(s) - (1)))].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),dotloc)),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(dotloc + (1))))].join(''),[cljs.core.str((dotloc - (1)))].join('')], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),exploc),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(1))),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(2),exploc))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__11619 = cljs.pprint.float_parts_base(f);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11619,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11619,(1),null);
var m1 = cljs.pprint.rtrim(m,"0");
var m2 = cljs.pprint.ltrim(m1,"0");
var delta = (cljs.core.count(m1) - cljs.core.count(m2));
var e__$1 = ((((cljs.core.count(e) > (0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(e,(0)),"+")))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(e,(1)):e);
if(cljs.core.empty_QMARK_(m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 * and no other characters. Return a string containing one or more
 * decimal digits containing a decimal number one larger than the input
 * string. The output string will always be the same length as the input
 * string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count(s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"1",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("9",s.charAt(i))){
var G__11620 = (i - (1));
i = G__11620;
continue;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.char$((cljs.pprint.char_code(s.charAt(i)) + (1))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__4161__auto__ = d;
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count(m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__4473__auto__ = (2);
var y__4474__auto__ = w;
return ((x__4473__auto__ > y__4474__auto__) ? x__4473__auto__ : y__4474__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__4473__auto__ = (e + (1));
var y__4474__auto__ = (w__$1 - (1));
return ((x__4473__auto__ > y__4474__auto__) ? x__4473__auto__ : y__4474__auto__);
})():(w__$1 + e)
));
var vec__11622 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("0"),cljs.core.str(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11622,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11622,(1),null);
var round_pos__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11622,(2),null);
var len__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11622,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(m1,round_pos__$1);
var result = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m1,(0),round_pos__$1);
if((cljs.pprint.char_code(round_char) >= cljs.pprint.char_code("5"))){
var round_up_result = cljs.pprint.inc_s(result);
var expanded = (cljs.core.count(round_up_result) > cljs.core.count(result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(round_up_result,(0),(cljs.core.count(round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__11624 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((- e) - (1)),"0"))),cljs.core.str(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11624,(0),null);
var e1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11624,(1),null);
var len = cljs.core.count(m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str(m1),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [cljs.core.str("."),cljs.core.str(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),loc)),cljs.core.str("."),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,loc))].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal(cljs.pprint.expand_fixed(m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [cljs.core.str("."),cljs.core.str(m)].join('');
} else {
return [cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(m,(0),k)),cljs.core.str("."),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(m,k))].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var vec__11629 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11629,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11629,(1),null);
var vec__11630 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11630,(0),null);
var abs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11630,(1),null);
var abs__$1 = cljs.pprint.convert_ratio(abs);
var vec__11631 = cljs.pprint.float_parts(abs__$1);
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11631,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11631,(1),null);
var scaled_exp = (exp + new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__4161__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = (cljs.core.not(d)) && (((cljs.core.count(mantissa) - (1)) <= scaled_exp));
var vec__11632 = cljs.pprint.round_str(mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11632,(0),null);
var scaled_exp__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11632,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11632,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__4149__auto__ = w;
if(cljs.core.truth_(and__4149__auto__)){
var and__4149__auto____$1 = d;
if(cljs.core.truth_(and__4149__auto____$1)){
return ((d >= (1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_repr.charAt((1)),".")) && ((cljs.core.count(fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0)))));
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_11633 = cljs.core.count(fixed_repr__$1);
var signed_len_11634 = (cljs.core.truth_(add_sign)?(len_11633 + (1)):len_11633);
var prepend_zero_11635__$1 = (prepend_zero) && (!((signed_len_11634 >= w)));
var append_zero_11636__$1 = (append_zero) && (!((signed_len_11634 >= w)));
var full_len_11637 = (((prepend_zero_11635__$1) || (append_zero_11636__$1))?(signed_len_11634 + (1)):signed_len_11634);
if(cljs.core.truth_((function (){var and__4149__auto__ = (full_len_11637 > w);
if(and__4149__auto__){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4149__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len_11637),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str(((prepend_zero_11635__$1)?"0":null)),cljs.core.str(fixed_repr__$1),cljs.core.str(((append_zero_11636__$1)?"0":null))].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str(((prepend_zero)?"0":null)),cljs.core.str(fixed_repr__$1),cljs.core.str(((append_zero)?"0":null))].join('')], 0));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__11644 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11644,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11644,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var G__11646_11650 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__11647_11651 = G__11646_11650;
var mantissa_11652 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11647_11651,(0),null);
var exp_11653 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11647_11651,(1),null);
var G__11646_11654__$1 = G__11646_11650;
while(true){
var vec__11648_11655 = G__11646_11654__$1;
var mantissa_11656__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11648_11655,(0),null);
var exp_11657__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11648_11655,(1),null);
var w_11658 = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d_11659 = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e_11660 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var k_11661 = new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params);
var expchar_11662 = (function (){var or__4161__auto__ = new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return "E";
}
})();
var add_sign_11663 = (function (){var or__4161__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_11664 = (k_11661 <= (0));
var scaled_exp_11665 = (exp_11657__$1 - (k_11661 - (1)));
var scaled_exp_str_11666 = [cljs.core.str(Math.abs(scaled_exp_11665))].join('');
var scaled_exp_str_11667__$1 = [cljs.core.str(expchar_11662),cljs.core.str((((scaled_exp_11665 < (0)))?"-":"+")),cljs.core.str((cljs.core.truth_(e_11660)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((e_11660 - cljs.core.count(scaled_exp_str_11666)),"0")):null)),cljs.core.str(scaled_exp_str_11666)].join('');
var exp_width_11668 = cljs.core.count(scaled_exp_str_11667__$1);
var base_mantissa_width_11669 = cljs.core.count(mantissa_11656__$1);
var scaled_mantissa_11670 = [cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((- k_11661),"0"))),cljs.core.str(mantissa_11656__$1),cljs.core.str((cljs.core.truth_(d_11659)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((d_11659 - (base_mantissa_width_11669 - (1))) - (((k_11661 < (0)))?(- k_11661):(0))),"0")):null))].join('');
var w_mantissa_11671 = (cljs.core.truth_(w_11658)?(w_11658 - exp_width_11668):null);
var vec__11649_11672 = cljs.pprint.round_str(scaled_mantissa_11670,(0),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_11661,(0)))?(d_11659 - (1)):(((k_11661 > (0)))?d_11659:(((k_11661 < (0)))?(d_11659 - (1)):null))),(cljs.core.truth_(w_mantissa_11671)?(w_mantissa_11671 - (cljs.core.truth_(add_sign_11663)?(1):(0))):null));
var rounded_mantissa_11673 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11649_11672,(0),null);
var __11674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11649_11672,(1),null);
var incr_exp_11675 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11649_11672,(2),null);
var full_mantissa_11676 = cljs.pprint.insert_scaled_decimal(rounded_mantissa_11673,k_11661);
var append_zero_11677 = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k_11661,cljs.core.count(rounded_mantissa_11673))) && ((d_11659 == null));
if(cljs.core.not(incr_exp_11675)){
if(cljs.core.truth_(w_11658)){
var len_11678 = (cljs.core.count(full_mantissa_11676) + exp_width_11668);
var signed_len_11679 = (cljs.core.truth_(add_sign_11663)?(len_11678 + (1)):len_11678);
var prepend_zero_11680__$1 = (prepend_zero_11664) && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(signed_len_11679,w_11658)));
var full_len_11681 = ((prepend_zero_11680__$1)?(signed_len_11679 + (1)):signed_len_11679);
var append_zero_11682__$1 = (append_zero_11677) && ((full_len_11681 < w_11658));
if(cljs.core.truth_((function (){var and__4149__auto__ = (function (){var or__4161__auto__ = (full_len_11681 > w_11658);
if(or__4161__auto__){
return or__4161__auto__;
} else {
var and__4149__auto__ = e_11660;
if(cljs.core.truth_(and__4149__auto__)){
return ((exp_width_11668 - (2)) > e_11660);
} else {
return and__4149__auto__;
}
}
})();
if(cljs.core.truth_(and__4149__auto__)){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4149__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(w_11658,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params)))], 0));
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(((w_11658 - full_len_11681) - ((append_zero_11682__$1)?(1):(0))),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str((cljs.core.truth_(add_sign_11663)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str(((prepend_zero_11680__$1)?"0":null)),cljs.core.str(full_mantissa_11676),cljs.core.str(((append_zero_11682__$1)?"0":null)),cljs.core.str(scaled_exp_str_11667__$1)].join('')], 0));
}
} else {
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((cljs.core.truth_(add_sign_11663)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str(((prepend_zero_11664)?"0":null)),cljs.core.str(full_mantissa_11676),cljs.core.str(((append_zero_11677)?"0":null)),cljs.core.str(scaled_exp_str_11667__$1)].join('')], 0));
}
} else {
var G__11683 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_11673,(exp_11657__$1 + (1))], null);
G__11646_11654__$1 = G__11683;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__11686 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11686,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11686,(1),null);
var arg__$1 = cljs.pprint.convert_ratio(arg);
var vec__11687 = cljs.pprint.float_parts((((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11687,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11687,(1),null);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__4473__auto__ = cljs.core.count(mantissa);
var y__4474__auto__ = (function (){var x__4480__auto__ = n;
var y__4481__auto__ = (7);
return ((x__4480__auto__ < y__4481__auto__) ? x__4480__auto__ : y__4481__auto__);
})();
return ((x__4473__auto__ > y__4474__auto__) ? x__4473__auto__ : y__4474__auto__);
})());
var dd = (d__$1 - n);
if((((0) <= dd)) && ((dd <= d__$1))){
var navigator__$1 = cljs.pprint.fixed_float(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"w","w",354169001),ww,new cljs.core.Keyword(null,"d","d",1972142424),dd,new cljs.core.Keyword(null,"k","k",-2146297393),(0),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(ee," "))], 0));

return navigator__$1;
} else {
return cljs.pprint.exponential_float(params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__11691 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11691,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11691,(1),null);
var vec__11692 = cljs.pprint.float_parts(Math.abs(arg));
var mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11692,(0),null);
var exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11692,(1),null);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__4161__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return (arg < (0));
}
})();
var vec__11693 = cljs.pprint.round_str(mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11693,(0),null);
var scaled_exp = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11693,(1),null);
var expanded = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11693,(2),null);
var fixed_repr = cljs.pprint.get_fixed(rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((n - fixed_repr.indexOf(".")),"0"))),cljs.core.str(fixed_repr)].join('');
var full_len = (cljs.core.count(full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((cljs.core.truth_((function (){var and__4149__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4149__auto__)){
return add_sign;
} else {
return and__4149__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((w - full_len),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str((cljs.core.truth_((function (){var and__4149__auto__ = cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params));
if(and__4149__auto__){
return add_sign;
} else {
return and__4149__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str(full_repr)].join('')], 0));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(params);
var vec__11695 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg(arg_navigator));
var arg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11695,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11695,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = ((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count(clauses))))?cljs.core.first(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__11697 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11697,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11697,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second(clauses):cljs.core.first(clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__11699 = cljs.pprint.next_arg(arg_navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11699,(0),null);
var navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11699,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first(clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format(clause,arg_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__11702 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11702,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11702,(1),null);
var vec__11703 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11703,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11703,(1),null);
var args = cljs.pprint.init_navigator(arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1)))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__4161__auto__ = (cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(args__$1))) && ((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__4161__auto__){
return or__4161__auto__;
} else {
var and__4149__auto__ = max_count;
if(cljs.core.truth_(and__4149__auto__)){
return (count >= max_count);
} else {
return and__4149__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,args__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__11704 = (count + (1));
var G__11705 = iter_result;
var G__11706 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__11704;
args__$1 = G__11705;
last_pos = G__11706;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__11709 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11709,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11709,(1),null);
var vec__11710 = cljs.pprint.next_arg(navigator__$1);
var arg_list = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11710,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11710,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__4161__auto__ = (cljs.core.empty_QMARK_(arg_list__$1)) && ((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__4161__auto__){
return or__4161__auto__;
} else {
var and__4149__auto__ = max_count;
if(cljs.core.truth_(and__4149__auto__)){
return (count >= max_count);
} else {
return and__4149__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(cljs.core.first(arg_list__$1)),cljs.pprint.init_navigator(cljs.core.next(arg_list__$1)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first(iter_result))){
return navigator__$2;
} else {
var G__11711 = (count + (1));
var G__11712 = cljs.core.next(arg_list__$1);
count = G__11711;
arg_list__$1 = G__11712;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__11714 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11714,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11714,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not(max_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1)))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__4161__auto__ = (cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__4161__auto__){
return or__4161__auto__;
} else {
var and__4149__auto__ = max_count;
if(cljs.core.truth_(and__4149__auto__)){
return (count >= max_count);
} else {
return and__4149__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format(clause,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first(iter_result))){
return cljs.core.second(iter_result);
} else {
var G__11715 = (count + (1));
var G__11716 = iter_result;
var G__11717 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__11715;
navigator__$2 = G__11716;
last_pos = G__11717;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__11720 = ((cljs.core.empty_QMARK_(param_clause))?cljs.pprint.get_format_arg(navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11720,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11720,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__4161__auto__ = (cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__4161__auto__){
return or__4161__auto__;
} else {
var and__4149__auto__ = max_count;
if(cljs.core.truth_(and__4149__auto__)){
return (count >= max_count);
} else {
return and__4149__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__11721 = cljs.pprint.next_arg_or_nil(navigator__$2);
var sublist = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11721,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11721,(1),null);
var iter_result = cljs.pprint.execute_sub_format(clause,cljs.pprint.init_navigator(sublist),navigator__$3);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first(iter_result))){
return navigator__$3;
} else {
var G__11722 = (count + (1));
var G__11723 = navigator__$3;
count = G__11722;
navigator__$2 = G__11723;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))){
return (cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.format_logical_block.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.format_logical_block.call(null,params,navigator,offsets));
} else {
return (cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.justify_clauses.cljs$core$IFn$_invoke$arity$3(params,navigator,offsets) : cljs.pprint.justify_clauses.call(null,params,navigator,offsets));
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_(clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first(clauses__$1);
var vec__11726 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_11727 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format(clause,navigator__$1,base_navigator),[cljs.core.str(sb)].join('')], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_11727;
}})();
var iter_result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11726,(0),null);
var result_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11726,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first(iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second(iter_result)], null);
} else {
var G__11728 = cljs.core.next(clauses__$1);
var G__11729 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,result_str);
var G__11730 = iter_result;
clauses__$1 = G__11728;
acc = G__11729;
navigator__$1 = G__11730;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__11736 = (function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__4425__auto__)){
var else$ = temp__4425__auto__;
return cljs.pprint.render_clauses(else$,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__11737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11736,(0),null);
var eol_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11737,(0),null);
var new_navigator = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11736,(1),null);
var navigator__$1 = (function (){var or__4161__auto__ = new_navigator;
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return navigator;
}
})();
var vec__11738 = (function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"else-params","else-params",-832171646).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__4425__auto__)){
var p = temp__4425__auto__;
return cljs.pprint.realize_parameter_list(p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11738,(0),null);
var new_navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11738,(1),null);
var navigator__$2 = (function (){var or__4161__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__4161__auto__ = cljs.core.first(new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__4161__auto__ = cljs.core.first(new cljs.core.Keyword(null,"max-columns","max-columns",1742323262).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return cljs.pprint.get_max_column(cljs.core._STAR_out_STAR_);
}
})();
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var vec__11739 = cljs.pprint.render_clauses(clauses,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11739,(0),null);
var navigator__$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11739,(1),null);
var slots = (function (){var x__4473__auto__ = (1);
var y__4474__auto__ = (((cljs.core.count(strs) - (1)) + (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__4473__auto__ > y__4474__auto__) ? x__4473__auto__ : y__4474__auto__);
})();
var chars = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,strs));
var mincol = new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params);
var minpad = new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params);
var colinc = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot(((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__4473__auto__ = minpad;
var y__4474__auto__ = cljs.core.quot(total_pad,slots);
return ((x__4473__auto__ > y__4474__auto__) ? x__4473__auto__ : y__4474__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(pad,new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__4149__auto__ = eol_str;
if(cljs.core.truth_(and__4149__auto__)){
return (((cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1((function (){var G__11740 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : cljs.core.deref.call(null,cljs.core._STAR_out_STAR_));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11740) : cljs.core.deref.call(null,G__11740));
})())) + min_remaining) + result_columns) > max_columns);
} else {
return and__4149__auto__;
}
})())){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([eol_str], 0));
} else {
}

var slots_11741__$1 = slots;
var extra_pad_11742__$1 = extra_pad;
var strs_11743__$1 = strs;
var pad_only_11744 = (function (){var or__4161__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(strs_11743__$1),(1))) && (cljs.core.not(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params)));
}
})();
while(true){
if(cljs.core.seq(strs_11743__$1)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str(((cljs.core.not(pad_only_11744))?cljs.core.first(strs_11743__$1):null)),cljs.core.str((cljs.core.truth_((function (){var or__4161__auto__ = pad_only_11744;
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
var or__4161__auto____$1 = cljs.core.next(strs_11743__$1);
if(or__4161__auto____$1){
return or__4161__auto____$1;
} else {
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str((((extra_pad_11742__$1 > (0)))?new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params):null))].join('')], 0));

var G__11745 = (slots_11741__$1 - (1));
var G__11746 = (extra_pad_11742__$1 - (1));
var G__11747 = (cljs.core.truth_(pad_only_11744)?strs_11743__$1:cljs.core.next(strs_11743__$1));
var G__11748 = false;
slots_11741__$1 = G__11745;
extra_pad_11742__$1 = G__11746;
strs_11743__$1 = G__11747;
pad_only_11744 = G__11748;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if(typeof cljs.pprint.t11755 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.pprint.t11755 = (function (downcase_writer,writer,meta11756){
this.downcase_writer = downcase_writer;
this.writer = writer;
this.meta11756 = meta11756;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t11755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11757,meta11756__$1){
var self__ = this;
var _11757__$1 = this;
return (new cljs.pprint.t11755(self__.downcase_writer,self__.writer,meta11756__$1));
});

cljs.pprint.t11755.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11757){
var self__ = this;
var _11757__$1 = this;
return self__.meta11756;
});

cljs.pprint.t11755.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t11755.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__11758 = cljs.core._EQ_;
var expr__11759 = cljs.core.type(x);
if(cljs.core.truth_((pred__11758.cljs$core$IFn$_invoke$arity$2 ? pred__11758.cljs$core$IFn$_invoke$arity$2(String,expr__11759) : pred__11758.call(null,String,expr__11759)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
} else {
if(cljs.core.truth_((pred__11758.cljs$core$IFn$_invoke$arity$2 ? pred__11758.cljs$core$IFn$_invoke$arity$2(Number,expr__11759) : pred__11758.call(null,Number,expr__11759)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.lower_case(cljs.core.char$(c)));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__11759)].join('')));
}
}
});

cljs.pprint.t11755.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"downcase-writer","downcase-writer",37286911,null),new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta11756","meta11756",1455758547,null)], null);
});

cljs.pprint.t11755.cljs$lang$type = true;

cljs.pprint.t11755.cljs$lang$ctorStr = "cljs.pprint/t11755";

cljs.pprint.t11755.cljs$lang$ctorPrWriter = (function (this__4740__auto__,writer__4741__auto__,opt__4742__auto__){
return cljs.core._write(writer__4741__auto__,"cljs.pprint/t11755");
});

cljs.pprint.__GT_t11755 = (function cljs$pprint$downcase_writer_$___GT_t11755(downcase_writer__$1,writer__$1,meta11756){
return (new cljs.pprint.t11755(downcase_writer__$1,writer__$1,meta11756));
});

}

return (new cljs.pprint.t11755(cljs$pprint$downcase_writer,writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if(typeof cljs.pprint.t11767 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.pprint.t11767 = (function (upcase_writer,writer,meta11768){
this.upcase_writer = upcase_writer;
this.writer = writer;
this.meta11768 = meta11768;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t11767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11769,meta11768__$1){
var self__ = this;
var _11769__$1 = this;
return (new cljs.pprint.t11767(self__.upcase_writer,self__.writer,meta11768__$1));
});

cljs.pprint.t11767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11769){
var self__ = this;
var _11769__$1 = this;
return self__.meta11768;
});

cljs.pprint.t11767.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});

cljs.pprint.t11767.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__11770 = cljs.core._EQ_;
var expr__11771 = cljs.core.type(x);
if(cljs.core.truth_((pred__11770.cljs$core$IFn$_invoke$arity$2 ? pred__11770.cljs$core$IFn$_invoke$arity$2(String,expr__11771) : pred__11770.call(null,String,expr__11771)))){
var s = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(s));
} else {
if(cljs.core.truth_((pred__11770.cljs$core$IFn$_invoke$arity$2 ? pred__11770.cljs$core$IFn$_invoke$arity$2(Number,expr__11771) : pred__11770.call(null,Number,expr__11771)))){
var c = x;
return cljs.core._write(self__.writer,clojure.string.upper_case(cljs.core.char$(c)));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__11771)].join('')));
}
}
});

cljs.pprint.t11767.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"upcase-writer","upcase-writer",51077317,null),new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta11768","meta11768",1670230043,null)], null);
});

cljs.pprint.t11767.cljs$lang$type = true;

cljs.pprint.t11767.cljs$lang$ctorStr = "cljs.pprint/t11767";

cljs.pprint.t11767.cljs$lang$ctorPrWriter = (function (this__4740__auto__,writer__4741__auto__,opt__4742__auto__){
return cljs.core._write(writer__4741__auto__,"cljs.pprint/t11767");
});

cljs.pprint.__GT_t11767 = (function cljs$pprint$upcase_writer_$___GT_t11767(upcase_writer__$1,writer__$1,meta11768){
return (new cljs.pprint.t11767(upcase_writer__$1,writer__$1,meta11768));
});

}

return (new cljs.pprint.t11767(cljs$pprint$upcase_writer,writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 * first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first(s);
var s__$1 = (cljs.core.truth_((function (){var and__4149__auto__ = first_QMARK_;
if(cljs.core.truth_(and__4149__auto__)){
var and__4149__auto____$1 = f;
if(cljs.core.truth_(and__4149__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
})())?[cljs.core.str(clojure.string.upper_case(f)),cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)))].join(''):s);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.first(cljs.pprint.consume(((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_(s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__4149__auto__ = m;
if(cljs.core.truth_(and__4149__auto__)){
return (m.index + (1));
} else {
return and__4149__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s__$2,(0),offset)),cljs.core.str(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s__$2,offset)))].join(''),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true) : cljs.core.atom.call(null,true));
if(typeof cljs.pprint.t11785 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.pprint.t11785 = (function (capitalize_word_writer,writer,last_was_whitespace_QMARK_,meta11786){
this.capitalize_word_writer = capitalize_word_writer;
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta11786 = meta11786;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t11785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_11787,meta11786__$1){
var self__ = this;
var _11787__$1 = this;
return (new cljs.pprint.t11785(self__.capitalize_word_writer,self__.writer,self__.last_was_whitespace_QMARK_,meta11786__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t11785.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_11787){
var self__ = this;
var _11787__$1 = this;
return self__.meta11786;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t11785.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t11785.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__11788 = cljs.core._EQ_;
var expr__11789 = cljs.core.type(x);
if(cljs.core.truth_((pred__11788.cljs$core$IFn$_invoke$arity$2 ? pred__11788.cljs$core$IFn$_invoke$arity$2(String,expr__11789) : pred__11788.call(null,String,expr__11789)))){
var s = x;
cljs.core._write(self__.writer,cljs.pprint.capitalize_string(s.toLowerCase(),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.last_was_whitespace_QMARK_) : cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_))));

if((s.length > (0))){
var G__11792 = self__.last_was_whitespace_QMARK_;
var G__11793 = (function (){var G__11794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,(cljs.core.count(s) - (1)));
return goog.string.isEmptyOrWhitespace(G__11794);
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11792,G__11793) : cljs.core.reset_BANG_.call(null,G__11792,G__11793));
} else {
return null;
}
} else {
if(cljs.core.truth_((pred__11788.cljs$core$IFn$_invoke$arity$2 ? pred__11788.cljs$core$IFn$_invoke$arity$2(Number,expr__11789) : pred__11788.call(null,Number,expr__11789)))){
var c = cljs.core.char$(x);
var mod_c = (cljs.core.truth_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.last_was_whitespace_QMARK_) : cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_)))?clojure.string.upper_case(c):c);
cljs.core._write(self__.writer,mod_c);

var G__11795 = self__.last_was_whitespace_QMARK_;
var G__11796 = goog.string.isEmptyOrWhitespace(c);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__11795,G__11796) : cljs.core.reset_BANG_.call(null,G__11795,G__11796));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__11789)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t11785.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"capitalize-word-writer","capitalize-word-writer",196688059,null),new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"last-was-whitespace?","last-was-whitespace?",-1073928093,null),new cljs.core.Symbol(null,"meta11786","meta11786",-2061123904,null)], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t11785.cljs$lang$type = true;

cljs.pprint.t11785.cljs$lang$ctorStr = "cljs.pprint/t11785";

cljs.pprint.t11785.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__4740__auto__,writer__4741__auto__,opt__4742__auto__){
return cljs.core._write(writer__4741__auto__,"cljs.pprint/t11785");
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.__GT_t11785 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t11785(capitalize_word_writer__$1,writer__$1,last_was_whitespace_QMARK___$1,meta11786){
return (new cljs.pprint.t11785(capitalize_word_writer__$1,writer__$1,last_was_whitespace_QMARK___$1,meta11786));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t11785(cljs$pprint$capitalize_word_writer,writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
if(typeof cljs.pprint.t11803 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.pprint.t11803 = (function (init_cap_writer,writer,capped,meta11804){
this.init_cap_writer = init_cap_writer;
this.writer = writer;
this.capped = capped;
this.meta11804 = meta11804;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t11803.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_11805,meta11804__$1){
var self__ = this;
var _11805__$1 = this;
return (new cljs.pprint.t11803(self__.init_cap_writer,self__.writer,self__.capped,meta11804__$1));
});})(capped))
;

cljs.pprint.t11803.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_11805){
var self__ = this;
var _11805__$1 = this;
return self__.meta11804;
});})(capped))
;

cljs.pprint.t11803.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush(self__.writer);
});})(capped))
;

cljs.pprint.t11803.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__11806 = cljs.core._EQ_;
var expr__11807 = cljs.core.type(x);
if(cljs.core.truth_((pred__11806.cljs$core$IFn$_invoke$arity$2 ? pred__11806.cljs$core$IFn$_invoke$arity$2(String,expr__11807) : pred__11806.call(null,String,expr__11807)))){
var s = clojure.string.lower_case(x);
if(cljs.core.not((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.capped) : cljs.core.deref.call(null,self__.capped)))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__4149__auto__ = m;
if(cljs.core.truth_(and__4149__auto__)){
return m.index;
} else {
return and__4149__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write(self__.writer,[cljs.core.str(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),offset)),cljs.core.str(clojure.string.upper_case(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,offset))),cljs.core.str(clojure.string.lower_case(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(offset + (1)))))].join(''));

return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.capped,true) : cljs.core.reset_BANG_.call(null,self__.capped,true));
} else {
return cljs.core._write(self__.writer,s);
}
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(s));
}
} else {
if(cljs.core.truth_((pred__11806.cljs$core$IFn$_invoke$arity$2 ? pred__11806.cljs$core$IFn$_invoke$arity$2(Number,expr__11807) : pred__11806.call(null,Number,expr__11807)))){
var c = cljs.core.char$(x);
if(cljs.core.truth_((function (){var and__4149__auto__ = cljs.core.not((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.capped) : cljs.core.deref.call(null,self__.capped)));
if(and__4149__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__4149__auto__;
}
})())){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(self__.capped,true) : cljs.core.reset_BANG_.call(null,self__.capped,true));

return cljs.core._write(self__.writer,clojure.string.upper_case(c));
} else {
return cljs.core._write(self__.writer,clojure.string.lower_case(c));
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__11807)].join('')));
}
}
});})(capped))
;

cljs.pprint.t11803.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"init-cap-writer","init-cap-writer",-861558336,null),new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"capped","capped",-1650988402,null),new cljs.core.Symbol(null,"meta11804","meta11804",830209688,null)], null);
});})(capped))
;

cljs.pprint.t11803.cljs$lang$type = true;

cljs.pprint.t11803.cljs$lang$ctorStr = "cljs.pprint/t11803";

cljs.pprint.t11803.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__4740__auto__,writer__4741__auto__,opt__4742__auto__){
return cljs.core._write(writer__4741__auto__,"cljs.pprint/t11803");
});})(capped))
;

cljs.pprint.__GT_t11803 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t11803(init_cap_writer__$1,writer__$1,capped__$1,meta11804){
return (new cljs.pprint.t11803(init_cap_writer__$1,writer__$1,capped__$1,meta11804));
});})(capped))
;

}

return (new cljs.pprint.t11803(cljs$pprint$init_cap_writer,writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR_11810 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (make_writer.cljs$core$IFn$_invoke$arity$1 ? make_writer.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : make_writer.call(null,cljs.core._STAR_out_STAR_));

try{return cljs.pprint.execute_sub_format(clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_11810;
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 * (defn print-table [aseq column-width]
 * (binding [*out* (get-pretty-writer *out*)]
 * (doseq [row aseq]
 * (doseq [col row]
 * (cl-format true "~4D~7,vT" col column-width))
 * (prn))))
 * 
 * Now when you run:
 * 
 * user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 * 1      1       1
 * 2      4       8
 * 3      9      27
 * 4     16      64
 * 5     25     125
 * 6     36     216
 * 7     49     343
 * 8     64     512
 * 9     81     729
 * 10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_(writer))){
return writer;
} else {
return cljs.pprint.pretty_writer(writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if(((!((cljs.core._STAR_out_STAR_ == null)))?((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || (cljs.core._STAR_out_STAR_.cljs$core$IDeref$))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1((function (){var G__11814 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : cljs.core.deref.call(null,cljs.core._STAR_out_STAR_));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11814) : cljs.core.deref.call(null,G__11814));
})()))))){
return cljs.pprint.prn();
} else {
return null;
}
} else {
return cljs.pprint.prn();
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_11817 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_11818 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var current_11819 = cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1((function (){var G__11816 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : cljs.core.deref.call(null,cljs.core._STAR_out_STAR_));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11816) : cljs.core.deref.call(null,G__11816));
})()));
var space_count_11820 = (((current_11819 < colnum_11817))?(colnum_11817 - current_11819):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(colinc_11818,(0)))?(0):(colinc_11818 - cljs.core.rem((current_11819 - colnum_11817),colinc_11818))
));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_11820," "))], 0));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_11823 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_11824 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var start_col_11825 = (colrel_11823 + cljs.pprint.get_column(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1((function (){var G__11822 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_out_STAR_) : cljs.core.deref.call(null,cljs.core._STAR_out_STAR_));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11822) : cljs.core.deref.call(null,G__11822));
})())));
var offset_11826 = (((colinc_11824 > (0)))?cljs.core.rem(start_col_11825,colinc_11824):(0));
var space_count_11827 = (colrel_11823 + ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),offset_11826))?(0):(colinc_11824 - offset_11826)));
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(space_count_11827," "))], 0));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count(clauses);
var prefix = (((clause_count > (1)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.first(clauses)))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clauses,(2))))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__11831 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11831,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11831,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11832_11834 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11833_11835 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format(body,cljs.pprint.init_navigator(arg),new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11833_11835;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11832_11834;
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"current","current",-1088038603):new cljs.core.Keyword(null,"block","block",664686210));
cljs.pprint.pprint_indent(relative_to,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"mandatory","mandatory",542802336):new cljs.core.Keyword(null,"fill","fill",883462889)):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"miser","miser",-556060186):new cljs.core.Keyword(null,"linear","linear",872268697)));
cljs.pprint.pprint_newline(kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"A",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__11836_SHARP_,p2__11837_SHARP_,p3__11838_SHARP_){
return cljs.pprint.format_ascii(cljs.core.print_str,p1__11836_SHARP_,p2__11837_SHARP_,p3__11838_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"S",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__11839_SHARP_,p2__11840_SHARP_,p3__11841_SHARP_){
return cljs.pprint.format_ascii(cljs.core.pr_str,p1__11839_SHARP_,p2__11840_SHARP_,p3__11841_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"D",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__11842_SHARP_,p2__11843_SHARP_,p3__11844_SHARP_){
return cljs.pprint.format_integer((10),p1__11842_SHARP_,p2__11843_SHARP_,p3__11844_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"B",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__11845_SHARP_,p2__11846_SHARP_,p3__11847_SHARP_){
return cljs.pprint.format_integer((2),p1__11845_SHARP_,p2__11846_SHARP_,p3__11847_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"O",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__11848_SHARP_,p2__11849_SHARP_,p3__11850_SHARP_){
return cljs.pprint.format_integer((8),p1__11848_SHARP_,p2__11849_SHARP_,p3__11850_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"X",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__11851_SHARP_,p2__11852_SHARP_,p3__11853_SHARP_){
return cljs.pprint.format_integer((16),p1__11851_SHARP_,p2__11852_SHARP_,p3__11853_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"R",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(cljs.core.first(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__11854_SHARP_,p2__11855_SHARP_,p3__11856_SHARP_){
return cljs.pprint.format_integer(new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(p1__11854_SHARP_),p1__11854_SHARP_,p2__11855_SHARP_,p3__11856_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__4149__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4149__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4149__auto__;
}
})())){
return (function (p1__11857_SHARP_,p2__11858_SHARP_,p3__11859_SHARP_){
return cljs.pprint.format_old_roman(p1__11857_SHARP_,p2__11858_SHARP_,p3__11859_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__11860_SHARP_,p2__11861_SHARP_,p3__11862_SHARP_){
return cljs.pprint.format_new_roman(p1__11860_SHARP_,p2__11861_SHARP_,p3__11862_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__11863_SHARP_,p2__11864_SHARP_,p3__11865_SHARP_){
return cljs.pprint.format_ordinal_english(p1__11863_SHARP_,p2__11864_SHARP_,p3__11865_SHARP_);
});
} else {
return (function (p1__11866_SHARP_,p2__11867_SHARP_,p3__11868_SHARP_){
return cljs.pprint.format_cardinal_english(p1__11866_SHARP_,p2__11867_SHARP_,p3__11868_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"P",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition(navigator,(-1)):navigator);
var strs = (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__11878 = cljs.pprint.next_arg(navigator__$1);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11878,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11878,(1),null);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg,(1)))?cljs.core.first(strs):cljs.core.second(strs))], 0));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"C",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"char-format","char-format",-1016499218),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"F",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"E",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"G",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"$",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"%",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__5045__auto___11884 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_11885 = (0);
while(true){
if((i_11885 < n__5045__auto___11884)){
cljs.pprint.prn();

var G__11886 = (i_11885 + (1));
i_11885 = G__11886;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"&",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_11887 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_11887 > (0))){
cljs.pprint.fresh_line();
} else {
}

var n__5045__auto___11888 = (cnt_11887 - (1));
var i_11889 = (0);
while(true){
if((i_11889 < n__5045__auto___11888)){
cljs.pprint.prn();

var G__11890 = (i_11889 + (1));
i_11889 = G__11890;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"|",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__5045__auto___11891 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_11892 = (0);
while(true){
if((i_11892 < n__5045__auto___11891)){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\f"], 0));

var G__11893 = (i_11892 + (1));
i_11892 = G__11893;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"~",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(n,"~"))], 0));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"\n",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn();
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"T",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"colnum","colnum",2023796854),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__11869_SHARP_,p2__11870_SHARP_,p3__11871_SHARP_){
return cljs.pprint.relative_tabulation(p1__11869_SHARP_,p2__11870_SHARP_,p3__11871_SHARP_);
});
} else {
return (function (p1__11872_SHARP_,p2__11873_SHARP_,p3__11874_SHARP_){
return cljs.pprint.absolute_tabulation(p1__11872_SHARP_,p2__11873_SHARP_,p3__11874_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"*",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition(navigator,n);
} else {
return cljs.pprint.relative_reposition(navigator,(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"?",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__11879 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11879,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11879,(1),null);
return cljs.pprint.execute_sub_format(subformat,navigator__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__11880 = cljs.pprint.get_format_arg(navigator);
var subformat = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11880,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11880,(1),null);
var vec__11881 = cljs.pprint.next_arg(navigator__$1);
var subargs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11881,(0),null);
var navigator__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11881,(1),null);
var sub_navigator = cljs.pprint.init_navigator(subargs);
cljs.pprint.execute_sub_format(subformat,sub_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"(",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),")",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),null,new cljs.core.Keyword(null,"else","else",-1508377146),null], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__4149__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4149__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4149__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__11875_SHARP_,p2__11876_SHARP_,p3__11877_SHARP_){
return cljs.pprint.modify_case(mod_case_writer,p1__11875_SHARP_,p2__11876_SHARP_,p3__11877_SHARP_);
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),")",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"[",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),"]",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"last","last",1105735132)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),";",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"max-columns","max-columns",1742323262),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"separator","separator",-1628749125),true], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"]",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"{",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),"}",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),false], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var and__4149__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__4149__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4149__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"}",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"<",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),">",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"first","first",-644103046)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),">",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"^",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(3),[new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007):new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333));
if(cljs.core.truth_((function (){var and__4149__auto__ = arg1;
if(cljs.core.truth_(and__4149__auto__)){
var and__4149__auto____$1 = arg2;
if(cljs.core.truth_(and__4149__auto____$1)){
return arg3;
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
})())){
if(((arg1 <= arg2)) && ((arg2 <= arg3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__4149__auto__ = arg1;
if(cljs.core.truth_(and__4149__auto__)){
return arg2;
} else {
return and__4149__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"W",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var or__4161__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"length","length",588987862),null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__11882 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11882,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11882,(1),null);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__11883 = cljs.pprint.next_arg(navigator);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11883,(0),null);
var navigator__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11883,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out(arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"_",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"I",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335),null,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196),null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__11894){
var vec__11896 = p__11894;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11896,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11896,(1),null);
var saw_comma = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11896,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first(param);
var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(",",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(remainder,(0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error("Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume(cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 * representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__11897){
var vec__11899 = p__11897;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11899,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11899,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(0)))?null:(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196):(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("#",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335):(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p.length,(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("'",cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(0)))))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p,(1)):parseInt(p)
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",new cljs.core.Keyword(null,"colon","colon",-965200945),"@",new cljs.core.Keyword(null,"at","at",1476951349)], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume((function (p__11902){
var vec__11903 = p__11902;
var s__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11903,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11903,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11903,(2),null);
if(cljs.core.empty_QMARK_(s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.flag_defs,cljs.core.first(s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_(flags,flag)){
return cljs.pprint.format_error([cljs.core.str("Flag \""),cljs.core.str(cljs.core.first(s__$1)),cljs.core.str("\" appears more than once in a directive")].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__4149__auto__ = cljs.core.not(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__4149__auto__){
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__4149__auto__;
}
})())){
cljs.pprint.format_error([cljs.core.str("\"@\" is an illegal flag for format directive \""),cljs.core.str(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str("\"")].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__4149__auto__ = cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__4149__auto__){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__4149__auto__;
}
})())){
cljs.pprint.format_error([cljs.core.str("\":\" is an illegal flag for format directive \""),cljs.core.str(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str("\"")].join(''),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__4149__auto__ = cljs.core.not(new cljs.core.Keyword(null,"both","both",-393648840).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__4149__auto__){
var and__4149__auto____$1 = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__4149__auto____$1)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
})())){
return cljs.pprint.format_error([cljs.core.str("Cannot combine \"@\" and \":\" flags for format directive \""),cljs.core.str(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str("\"")].join(''),(function (){var x__4480__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__4481__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__4480__auto__ < y__4481__auto__) ? x__4480__auto__ : y__4481__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags(def,flags);

if((cljs.core.count(params) > cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error(cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",cljs.core.array_seq([new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def),cljs.core.count(params),cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def))], 0)),cljs.core.second(cljs.core.first(params)));
} else {
}

cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__11904_SHARP_,p2__11905_SHARP_){
var val = cljs.core.first(p1__11904_SHARP_);
if(!(((val == null)) || (cljs.core.contains_QMARK_(cljs.pprint.special_params,val)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(cljs.core.second(p2__11905_SHARP_)),cljs.core.type(val))))){
return cljs.pprint.format_error([cljs.core.str("Parameter "),cljs.core.str(cljs.core.name(cljs.core.first(p2__11905_SHARP_))),cljs.core.str(" has bad type in directive \""),cljs.core.str(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str("\": "),cljs.core.str(cljs.core.type(val))].join(''),cljs.core.second(p1__11904_SHARP_));
} else {
return null;
}
}),params,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse((function (){var iter__4914__auto__ = (function cljs$pprint$map_params_$_iter__11923(s__11924){
return (new cljs.core.LazySeq(null,(function (){
var s__11924__$1 = s__11924;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__11924__$1);
if(temp__4425__auto__){
var s__11924__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11924__$2)){
var c__4912__auto__ = cljs.core.chunk_first(s__11924__$2);
var size__4913__auto__ = cljs.core.count(c__4912__auto__);
var b__11926 = cljs.core.chunk_buffer(size__4913__auto__);
if((function (){var i__11925 = (0);
while(true){
if((i__11925 < size__4913__auto__)){
var vec__11933 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4912__auto__,i__11925);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11933,(0),null);
var vec__11934 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11933,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11934,(0),null);
cljs.core.chunk_append(b__11926,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__11937 = (i__11925 + (1));
i__11925 = G__11937;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11926),cljs$pprint$map_params_$_iter__11923(cljs.core.chunk_rest(s__11924__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11926),null);
}
} else {
var vec__11935 = cljs.core.first(s__11924__$2);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11935,(0),null);
var vec__11936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11935,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11936,(0),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__11923(cljs.core.rest(s__11924__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4914__auto__(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__11906_SHARP_,p2__11907_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,p1__11906_SHARP_,p2__11907_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__11908_SHARP_){
return cljs.core.first(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__11908_SHARP_,(1)));
}),cljs.core.zipmap(cljs.core.keys(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)),params))),flags], 0));
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__11942 = cljs.pprint.extract_params(s,offset);
var raw_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11942,(0),null);
var vec__11943 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11942,(1),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11943,(0),null);
var offset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11943,(1),null);
var vec__11944 = cljs.pprint.extract_flags(rest,offset__$1);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11944,(0),null);
var vec__11945 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11944,(1),null);
var rest__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11945,(0),null);
var offset__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11945,(1),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11945,(2),null);
var directive = cljs.core.first(rest__$1);
var def = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.pprint.directive_table,clojure.string.upper_case(directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params(def,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not(directive)){
cljs.pprint.format_error("Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not(def)){
cljs.pprint.format_error([cljs.core.str("Directive \""),cljs.core.str(directive),cljs.core.str("\" is undefined")].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656).cljs$core$IFn$_invoke$arity$1(def).call(null,params,offset__$2),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("\n",new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params)));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count(remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s], 0));

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__4149__auto__ = new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__4149__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__4149__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__11950 = (function (){var G__11951 = new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$));
var G__11952 = new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$);
var G__11953 = remainder;
return (cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3 ? cljs.pprint.collect_clauses.cljs$core$IFn$_invoke$arity$3(G__11951,G__11952,G__11953) : cljs.pprint.collect_clauses.call(null,G__11951,G__11952,G__11953));
})();
var subex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11950,(0),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11950,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map(subex,new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$))], 0)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume((function (remainder__$1){
if(cljs.core.empty_QMARK_(remainder__$1)){
return cljs.pprint.format_error("No closing bracket found.",offset);
} else {
var this$ = cljs.core.first(remainder__$1);
var remainder__$2 = cljs.core.next(remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket(this$))){
return cljs.pprint.process_bracket(this$,remainder__$2);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket_info),new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"else","else",-1508377146),null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_(this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",-1628749125),null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second(cljs.pprint.consume((function (p__11958){
var vec__11959 = p__11958;
var clause_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11959,(0),null);
var saw_else = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11959,(1),null);
var remainder__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11959,(2),null);
var vec__11960 = cljs.pprint.process_clause(bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11960,(0),null);
var vec__11961 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11960,(1),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11961,(0),null);
var right_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11961,(1),null);
var else_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11961,(2),null);
var remainder__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11961,(3),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.array_seq([clause_map,new cljs.core.PersistentArrayMap.fromArray([(cljs.core.truth_(saw_else)?new cljs.core.Keyword(null,"else","else",-1508377146):new cljs.core.Keyword(null,"clauses","clauses",1454841241)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"right-params","right-params",-1790676237),right_params], true, false)], 0)),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"else","else",-1508377146))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error("Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause_map)))){
return cljs.pprint.format_error("The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.array_seq([clause_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"else-params","else-params",-832171646),else_params], null)], 0)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.array_seq([clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"separator","separator",-1628749125))){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error("A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not(new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error("A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.concat,cljs.core.array_seq([clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)], 0)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first(cljs.pprint.consume((function (remainder){
var this$ = cljs.core.first(remainder);
var remainder__$1 = cljs.core.next(remainder);
var bracket = new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket(this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR_11965 = cljs.pprint._STAR_format_str_STAR_;
cljs.pprint._STAR_format_str_STAR_ = format_str;

try{return cljs.pprint.process_nesting(cljs.core.first(cljs.pprint.consume(((function (_STAR_format_str_STAR_11965){
return (function (p__11966){
var vec__11967 = p__11966;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11967,(0),null);
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11967,(1),null);
if(cljs.core.empty_QMARK_(s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,tilde),(tilde + offset)], null)], null);

}
}
}
});})(_STAR_format_str_STAR_11965))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR_11965;
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_(format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__4161__auto__ = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1))));
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
var or__4161__auto____$1 = cljs.core.some(cljs$pprint$needs_pretty,cljs.core.first(new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
if(cljs.core.truth_(or__4161__auto____$1)){
return or__4161__auto____$1;
} else {
return cljs.core.some(cljs$pprint$needs_pretty,cljs.core.first(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first(format__$1)))));
}
}
})())){
return true;
} else {
var G__11968 = cljs.core.next(format__$1);
format__$1 = G__11968;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(){
var args11969 = [];
var len__5200__auto___11975 = arguments.length;
var i__5201__auto___11976 = (0);
while(true){
if((i__5201__auto___11976 < len__5200__auto___11975)){
args11969.push((arguments[i__5201__auto___11976]));

var G__11977 = (i__5201__auto___11976 + (1));
i__5201__auto___11976 = G__11977;
continue;
} else {
}
break;
}

var G__11971 = args11969.length;
switch (G__11971) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11969.length)].join('')));

}
});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = (((cljs.core.not(stream)) || (stream === true))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = (cljs.core.truth_((function (){var and__4149__auto__ = cljs.pprint.needs_pretty(format);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not(cljs.pprint.pretty_writer_QMARK_(real_stream));
} else {
return and__4149__auto__;
}
})())?cljs.pprint.get_pretty_writer(real_stream):real_stream);
var _STAR_out_STAR_11972 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = wrapped_stream;

try{try{cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(format,args);
}finally {if(!((real_stream === wrapped_stream))){
cljs.core._flush(wrapped_stream);
} else {
}
}
if(cljs.core.not(stream)){
return [cljs.core.str(sb)].join('');
} else {
if(stream === true){
return (cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.core._STAR_print_fn_STAR_.cljs$core$IFn$_invoke$arity$1([cljs.core.str(sb)].join('')) : cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str(sb)].join('')));
} else {
return null;

}
}
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_11972;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context((function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_(context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__11973 = cljs.pprint.realize_parameter_list(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11973,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11973,(1),null);
var vec__11974 = cljs.pprint.unzip_map(params);
var params__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11974,(0),null);
var offsets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11974,(1),null);
var params__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3;
cljs.pprint.cached_compile = cljs.core.memoize(cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value.
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method(multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"quote","quote",1377916282,null),"'",new cljs.core.Symbol(null,"var","var",870848730,null),"#'",new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),"@",new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null),"~",new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),"@",new cljs.core.Symbol("cljs.core","unquote","cljs.core/unquote",1013085760,null),"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = (function (){var G__11980 = cljs.core.first(alis);
return (cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.reader_macros.cljs$core$IFn$_invoke$arity$1(G__11980) : cljs.pprint.reader_macros.call(null,G__11980));
})();
if(cljs.core.truth_((function (){var and__4149__auto__ = macro_char;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(alis));
} else {
return and__4149__auto__;
}
})())){
cljs.core._write(cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out(cljs.core.second(alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11984_11987 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11985_11988 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

var length_count11986_11989 = (0);
var alis_11990__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count11986_11989 < cljs.core._STAR_print_length_STAR_))){
if(alis_11990__$1){
cljs.pprint.write_out(cljs.core.first(alis_11990__$1));

if(cljs.core.next(alis_11990__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__11991 = (length_count11986_11989 + (1));
var G__11992 = cljs.core.next(alis_11990__$1);
length_count11986_11989 = G__11991;
alis_11990__$1 = G__11992;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11985_11988;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11984_11987;
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
return cljs.pprint.pprint_simple_list(alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11996_11999 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11997_12000 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count11998_12001 = (0);
var aseq_12002 = cljs.core.seq(avec);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count11998_12001 < cljs.core._STAR_print_length_STAR_))){
if(aseq_12002){
cljs.pprint.write_out(cljs.core.first(aseq_12002));

if(cljs.core.next(aseq_12002)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__12003 = (length_count11998_12001 + (1));
var G__12004 = cljs.core.next(aseq_12002);
length_count11998_12001 = G__12003;
aseq_12002 = G__12004;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11997_12000;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11996_11999;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__6705__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__6706__auto__ = ((typeof format_in__6705__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__6705__auto__) : cljs.pprint.cached_compile.call(null,format_in__6705__auto__)):format_in__6705__auto__);
return ((function (format_in__6705__auto__,cf__6706__auto__){
return (function() { 
var G__12005__delegate = function (args__6707__auto__){
var navigator__6708__auto__ = cljs.pprint.init_navigator(args__6707__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__6706__auto__,navigator__6708__auto__);
};
var G__12005 = function (var_args){
var args__6707__auto__ = null;
if (arguments.length > 0) {
var G__12006__i = 0, G__12006__a = new Array(arguments.length -  0);
while (G__12006__i < G__12006__a.length) {G__12006__a[G__12006__i] = arguments[G__12006__i + 0]; ++G__12006__i;}
  args__6707__auto__ = new cljs.core.IndexedSeq(G__12006__a,0);
} 
return G__12005__delegate.call(this,args__6707__auto__);};
G__12005.cljs$lang$maxFixedArity = 0;
G__12005.cljs$lang$applyTo = (function (arglist__12007){
var args__6707__auto__ = cljs.core.seq(arglist__12007);
return G__12005__delegate(args__6707__auto__);
});
G__12005.cljs$core$IFn$_invoke$arity$variadic = G__12005__delegate;
return G__12005;
})()
;
;})(format_in__6705__auto__,cf__6706__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_12013_12018 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_12014_12019 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"{",null,"}");

var length_count12015_12020 = (0);
var aseq_12021 = cljs.core.seq(amap);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count12015_12020 < cljs.core._STAR_print_length_STAR_))){
if(aseq_12021){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_12016_12022 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_12017_12023 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out(cljs.core.ffirst(aseq_12021));

cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out(cljs.core.fnext(cljs.core.first(aseq_12021)));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_12017_12023;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_12016_12022;
}}


if(cljs.core.next(aseq_12021)){
cljs.core._write(cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__12024 = (length_count12015_12020 + (1));
var G__12025 = cljs.core.next(aseq_12021);
length_count12015_12020 = G__12024;
aseq_12021 = G__12025;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_12014_12019;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_12013_12018;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([obj], 0)));
});
cljs.pprint.pprint_set = (function (){var format_in__6705__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__6706__auto__ = ((typeof format_in__6705__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__6705__auto__) : cljs.pprint.cached_compile.call(null,format_in__6705__auto__)):format_in__6705__auto__);
return ((function (format_in__6705__auto__,cf__6706__auto__){
return (function() { 
var G__12026__delegate = function (args__6707__auto__){
var navigator__6708__auto__ = cljs.pprint.init_navigator(args__6707__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__6706__auto__,navigator__6708__auto__);
};
var G__12026 = function (var_args){
var args__6707__auto__ = null;
if (arguments.length > 0) {
var G__12027__i = 0, G__12027__a = new Array(arguments.length -  0);
while (G__12027__i < G__12027__a.length) {G__12027__a[G__12027__i] = arguments[G__12027__i + 0]; ++G__12027__i;}
  args__6707__auto__ = new cljs.core.IndexedSeq(G__12027__a,0);
} 
return G__12026__delegate.call(this,args__6707__auto__);};
G__12026.cljs$lang$maxFixedArity = 0;
G__12026.cljs$lang$applyTo = (function (arglist__12028){
var args__6707__auto__ = cljs.core.seq(arglist__12028);
return G__12026__delegate(args__6707__auto__);
});
G__12026.cljs$core$IFn$_invoke$arity$variadic = G__12026__delegate;
return G__12026;
})()
;
;})(format_in__6705__auto__,cf__6706__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__4161__auto__ = (function (){var temp__4425__auto__ = cljs.core.re_find(/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__4425__auto__)){
var match = temp__4425__auto__;
return (cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.type_map.cljs$core$IFn$_invoke$arity$1(match) : cljs.pprint.type_map.call(null,match));
} else {
return null;
}
})();
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = [cljs.core.str("#<"),cljs.core.str(cljs.pprint.map_ref_type(cljs.core.type(o).name)),cljs.core.str("@"),cljs.core.str(goog.getUid(o)),cljs.core.str(": ")].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_12033_12037 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_12034_12038 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",664686210),(- (cljs.core.count(prefix) - (2))));

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint.write_out((((function (){var and__4149__auto__ = ((!((o == null)))?((((o.cljs$lang$protocol_mask$partition1$ & (1))) || (o.cljs$core$IPending$))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IPending,o));
if(and__4149__auto__){
return !(cljs.core._realized_QMARK_(o));
} else {
return and__4149__auto__;
}
})())?new cljs.core.Keyword(null,"not-delivered","not-delivered",1599158697):(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(o) : cljs.core.deref.call(null,o))));

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_12034_12038;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_12033_12037;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__6705__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__6706__auto__ = ((typeof format_in__6705__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__6705__auto__) : cljs.pprint.cached_compile.call(null,format_in__6705__auto__)):format_in__6705__auto__);
return ((function (format_in__6705__auto__,cf__6706__auto__){
return (function() { 
var G__12039__delegate = function (args__6707__auto__){
var navigator__6708__auto__ = cljs.pprint.init_navigator(args__6707__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__6706__auto__,navigator__6708__auto__);
};
var G__12039 = function (var_args){
var args__6707__auto__ = null;
if (arguments.length > 0) {
var G__12040__i = 0, G__12040__a = new Array(arguments.length -  0);
while (G__12040__i < G__12040__a.length) {G__12040__a[G__12040__i] = arguments[G__12040__i + 0]; ++G__12040__i;}
  args__6707__auto__ = new cljs.core.IndexedSeq(G__12040__a,0);
} 
return G__12039__delegate.call(this,args__6707__auto__);};
G__12039.cljs$lang$maxFixedArity = 0;
G__12039.cljs$lang$applyTo = (function (arglist__12041){
var args__6707__auto__ = cljs.core.seq(arglist__12041);
return G__12039__delegate(args__6707__auto__);
});
G__12039.cljs$core$IFn$_invoke$arity$variadic = G__12039__delegate;
return G__12039;
})()
;
;})(format_in__6705__auto__,cf__6706__auto__))
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return new cljs.core.Keyword(null,"queue","queue",1455835879);
} else {
if(((!((obj == null)))?((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (obj.cljs$core$IDeref$))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,obj))){
return new cljs.core.Keyword(null,"deref","deref",-145586795);
} else {
if((obj instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
} else {
if(cljs.core.seq_QMARK_(obj)){
return new cljs.core.Keyword(null,"list","list",765357683);
} else {
if(cljs.core.map_QMARK_(obj)){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(cljs.core.vector_QMARK_(obj)){
return new cljs.core.Keyword(null,"vector","vector",1902966158);
} else {
if(cljs.core.set_QMARK_(obj)){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((obj == null)){
return null;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);

}
}
}
}
}
}
}
}
});
if(typeof cljs.pprint.simple_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__5055__auto__ = (function (){var G__12044 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12044) : cljs.core.atom.call(null,G__12044));
})();
var prefer_table__5056__auto__ = (function (){var G__12045 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12045) : cljs.core.atom.call(null,G__12045));
})();
var method_cache__5057__auto__ = (function (){var G__12046 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12046) : cljs.core.atom.call(null,G__12046));
})();
var cached_hierarchy__5058__auto__ = (function (){var G__12047 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12047) : cljs.core.atom.call(null,G__12047));
})();
var hierarchy__5059__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5059__auto__,method_table__5055__auto__,prefer_table__5056__auto__,method_cache__5057__auto__,cached_hierarchy__5058__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_list);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write(cljs.core._STAR_out_STAR_,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)));
}));
cljs.pprint.use_method(cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_(form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_(reference)){
var vec__12056 = cljs.pprint.brackets(reference);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12056,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12056,(1),null);
var vec__12057 = reference;
var keyw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12057,(0),null);
var args = cljs.core.nthnext(vec__12057,(1));
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_12058_12064 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_12059_12065 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start,null,end);

(function (){var format_in__6705__auto__ = "~w~:i";
var cf__6706__auto__ = ((typeof format_in__6705__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__6705__auto__) : cljs.pprint.cached_compile.call(null,format_in__6705__auto__)):format_in__6705__auto__);
return ((function (format_in__6705__auto__,cf__6706__auto__,_STAR_current_level_STAR_12058_12064,_STAR_current_length_STAR_12059_12065,vec__12056,start,end,vec__12057,keyw,args){
return (function() { 
var G__12066__delegate = function (args__6707__auto__){
var navigator__6708__auto__ = cljs.pprint.init_navigator(args__6707__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__6706__auto__,navigator__6708__auto__);
};
var G__12066 = function (var_args){
var args__6707__auto__ = null;
if (arguments.length > 0) {
var G__12067__i = 0, G__12067__a = new Array(arguments.length -  0);
while (G__12067__i < G__12067__a.length) {G__12067__a[G__12067__i] = arguments[G__12067__i + 0]; ++G__12067__i;}
  args__6707__auto__ = new cljs.core.IndexedSeq(G__12067__a,0);
} 
return G__12066__delegate.call(this,args__6707__auto__);};
G__12066.cljs$lang$maxFixedArity = 0;
G__12066.cljs$lang$applyTo = (function (arglist__12068){
var args__6707__auto__ = cljs.core.seq(arglist__12068);
return G__12066__delegate(args__6707__auto__);
});
G__12066.cljs$core$IFn$_invoke$arity$variadic = G__12066__delegate;
return G__12066;
})()
;
;})(format_in__6705__auto__,cf__6706__auto__,_STAR_current_level_STAR_12058_12064,_STAR_current_length_STAR_12059_12065,vec__12056,start,end,vec__12057,keyw,args))
})().call(null,keyw);

var args_12069__$1 = args;
while(true){
if(cljs.core.seq(args_12069__$1)){
(function (){var format_in__6705__auto__ = " ";
var cf__6706__auto__ = ((typeof format_in__6705__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__6705__auto__) : cljs.pprint.cached_compile.call(null,format_in__6705__auto__)):format_in__6705__auto__);
return ((function (args_12069__$1,format_in__6705__auto__,cf__6706__auto__,_STAR_current_level_STAR_12058_12064,_STAR_current_length_STAR_12059_12065,vec__12056,start,end,vec__12057,keyw,args){
return (function() { 
var G__12070__delegate = function (args__6707__auto__){
var navigator__6708__auto__ = cljs.pprint.init_navigator(args__6707__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__6706__auto__,navigator__6708__auto__);
};
var G__12070 = function (var_args){
var args__6707__auto__ = null;
if (arguments.length > 0) {
var G__12071__i = 0, G__12071__a = new Array(arguments.length -  0);
while (G__12071__i < G__12071__a.length) {G__12071__a[G__12071__i] = arguments[G__12071__i + 0]; ++G__12071__i;}
  args__6707__auto__ = new cljs.core.IndexedSeq(G__12071__a,0);
} 
return G__12070__delegate.call(this,args__6707__auto__);};
G__12070.cljs$lang$maxFixedArity = 0;
G__12070.cljs$lang$applyTo = (function (arglist__12072){
var args__6707__auto__ = cljs.core.seq(arglist__12072);
return G__12070__delegate(args__6707__auto__);
});
G__12070.cljs$core$IFn$_invoke$arity$variadic = G__12070__delegate;
return G__12070;
})()
;
;})(args_12069__$1,format_in__6705__auto__,cf__6706__auto__,_STAR_current_level_STAR_12058_12064,_STAR_current_length_STAR_12059_12065,vec__12056,start,end,vec__12057,keyw,args))
})().call(null);

var arg_12073 = cljs.core.first(args_12069__$1);
if(cljs.core.sequential_QMARK_(arg_12073)){
var vec__12060_12074 = cljs.pprint.brackets(arg_12073);
var start_12075__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12060_12074,(0),null);
var end_12076__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12060_12074,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_12061_12077 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_12062_12078 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,start_12075__$1,null,end_12076__$1);

if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(arg_12073),(3))) && ((cljs.core.second(arg_12073) instanceof cljs.core.Keyword))){
var vec__12063_12079 = arg_12073;
var ns_12080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12063_12079,(0),null);
var kw_12081 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12063_12079,(1),null);
var lis_12082 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12063_12079,(2),null);
(function (){var format_in__6705__auto__ = "~w ~w ";
var cf__6706__auto__ = ((typeof format_in__6705__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__6705__auto__) : cljs.pprint.cached_compile.call(null,format_in__6705__auto__)):format_in__6705__auto__);
return ((function (args_12069__$1,format_in__6705__auto__,cf__6706__auto__,vec__12063_12079,ns_12080,kw_12081,lis_12082,_STAR_current_level_STAR_12061_12077,_STAR_current_length_STAR_12062_12078,vec__12060_12074,start_12075__$1,end_12076__$1,arg_12073,_STAR_current_level_STAR_12058_12064,_STAR_current_length_STAR_12059_12065,vec__12056,start,end,vec__12057,keyw,args){
return (function() { 
var G__12083__delegate = function (args__6707__auto__){
var navigator__6708__auto__ = cljs.pprint.init_navigator(args__6707__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__6706__auto__,navigator__6708__auto__);
};
var G__12083 = function (var_args){
var args__6707__auto__ = null;
if (arguments.length > 0) {
var G__12084__i = 0, G__12084__a = new Array(arguments.length -  0);
while (G__12084__i < G__12084__a.length) {G__12084__a[G__12084__i] = arguments[G__12084__i + 0]; ++G__12084__i;}
  args__6707__auto__ = new cljs.core.IndexedSeq(G__12084__a,0);
} 
return G__12083__delegate.call(this,args__6707__auto__);};
G__12083.cljs$lang$maxFixedArity = 0;
G__12083.cljs$lang$applyTo = (function (arglist__12085){
var args__6707__auto__ = cljs.core.seq(arglist__12085);
return G__12083__delegate(args__6707__auto__);
});
G__12083.cljs$core$IFn$_invoke$arity$variadic = G__12083__delegate;
return G__12083;
})()
;
;})(args_12069__$1,format_in__6705__auto__,cf__6706__auto__,vec__12063_12079,ns_12080,kw_12081,lis_12082,_STAR_current_level_STAR_12061_12077,_STAR_current_length_STAR_12062_12078,vec__12060_12074,start_12075__$1,end_12076__$1,arg_12073,_STAR_current_level_STAR_12058_12064,_STAR_current_length_STAR_12059_12065,vec__12056,start,end,vec__12057,keyw,args))
})().call(null,ns_12080,kw_12081);

if(cljs.core.sequential_QMARK_(lis_12082)){
(function (){var format_in__6705__auto__ = ((cljs.core.vector_QMARK_(lis_12082))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__6706__auto__ = ((typeof format_in__6705__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__6705__auto__) : cljs.pprint.cached_compile.call(null,format_in__6705__auto__)):format_in__6705__auto__);
return ((function (args_12069__$1,format_in__6705__auto__,cf__6706__auto__,vec__12063_12079,ns_12080,kw_12081,lis_12082,_STAR_current_level_STAR_12061_12077,_STAR_current_length_STAR_12062_12078,vec__12060_12074,start_12075__$1,end_12076__$1,arg_12073,_STAR_current_level_STAR_12058_12064,_STAR_current_length_STAR_12059_12065,vec__12056,start,end,vec__12057,keyw,args){
return (function() { 
var G__12086__delegate = function (args__6707__auto__){
var navigator__6708__auto__ = cljs.pprint.init_navigator(args__6707__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__6706__auto__,navigator__6708__auto__);
};
var G__12086 = function (var_args){
var args__6707__auto__ = null;
if (arguments.length > 0) {
var G__12087__i = 0, G__12087__a = new Array(arguments.length -  0);
while (G__12087__i < G__12087__a.length) {G__12087__a[G__12087__i] = arguments[G__12087__i + 0]; ++G__12087__i;}
  args__6707__auto__ = new cljs.core.IndexedSeq(G__12087__a,0);
} 
return G__12086__delegate.call(this,args__6707__auto__);};
G__12086.cljs$lang$maxFixedArity = 0;
G__12086.cljs$lang$applyTo = (function (arglist__12088){
var args__6707__auto__ = cljs.core.seq(arglist__12088);
return G__12086__delegate(args__6707__auto__);
});
G__12086.cljs$core$IFn$_invoke$arity$variadic = G__12086__delegate;
return G__12086;
})()
;
;})(args_12069__$1,format_in__6705__auto__,cf__6706__auto__,vec__12063_12079,ns_12080,kw_12081,lis_12082,_STAR_current_level_STAR_12061_12077,_STAR_current_length_STAR_12062_12078,vec__12060_12074,start_12075__$1,end_12076__$1,arg_12073,_STAR_current_level_STAR_12058_12064,_STAR_current_length_STAR_12059_12065,vec__12056,start,end,vec__12057,keyw,args))
})().call(null,lis_12082);
} else {
cljs.pprint.write_out(lis_12082);
}
} else {
cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__6705__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__6706__auto__ = ((typeof format_in__6705__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__6705__auto__) : cljs.pprint.cached_compile.call(null,format_in__6705__auto__)):format_in__6705__auto__);
return ((function (args_12069__$1,format_in__6705__auto__,cf__6706__auto__,_STAR_current_level_STAR_12061_12077,_STAR_current_length_STAR_12062_12078,vec__12060_12074,start_12075__$1,end_12076__$1,arg_12073,_STAR_current_level_STAR_12058_12064,_STAR_current_length_STAR_12059_12065,vec__12056,start,end,vec__12057,keyw,args){
return (function() { 
var G__12089__delegate = function (args__6707__auto__){
var navigator__6708__auto__ = cljs.pprint.init_navigator(args__6707__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__6706__auto__,navigator__6708__auto__);
};
var G__12089 = function (var_args){
var args__6707__auto__ = null;
if (arguments.length > 0) {
var G__12090__i = 0, G__12090__a = new Array(arguments.length -  0);
while (G__12090__i < G__12090__a.length) {G__12090__a[G__12090__i] = arguments[G__12090__i + 0]; ++G__12090__i;}
  args__6707__auto__ = new cljs.core.IndexedSeq(G__12090__a,0);
} 
return G__12089__delegate.call(this,args__6707__auto__);};
G__12089.cljs$lang$maxFixedArity = 0;
G__12089.cljs$lang$applyTo = (function (arglist__12091){
var args__6707__auto__ = cljs.core.seq(arglist__12091);
return G__12089__delegate(args__6707__auto__);
});
G__12089.cljs$core$IFn$_invoke$arity$variadic = G__12089__delegate;
return G__12089;
})()
;
;})(args_12069__$1,format_in__6705__auto__,cf__6706__auto__,_STAR_current_level_STAR_12061_12077,_STAR_current_length_STAR_12062_12078,vec__12060_12074,start_12075__$1,end_12076__$1,arg_12073,_STAR_current_level_STAR_12058_12064,_STAR_current_length_STAR_12059_12065,vec__12056,start,end,vec__12057,keyw,args))
})(),arg_12073);
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_12062_12078;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_12061_12077;
}}


if(cljs.core.next(args_12069__$1)){
(function (){var format_in__6705__auto__ = "~_";
var cf__6706__auto__ = ((typeof format_in__6705__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__6705__auto__) : cljs.pprint.cached_compile.call(null,format_in__6705__auto__)):format_in__6705__auto__);
return ((function (args_12069__$1,format_in__6705__auto__,cf__6706__auto__,vec__12060_12074,start_12075__$1,end_12076__$1,arg_12073,_STAR_current_level_STAR_12058_12064,_STAR_current_length_STAR_12059_12065,vec__12056,start,end,vec__12057,keyw,args){
return (function() { 
var G__12092__delegate = function (args__6707__auto__){
var navigator__6708__auto__ = cljs.pprint.init_navigator(args__6707__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__6706__auto__,navigator__6708__auto__);
};
var G__12092 = function (var_args){
var args__6707__auto__ = null;
if (arguments.length > 0) {
var G__12093__i = 0, G__12093__a = new Array(arguments.length -  0);
while (G__12093__i < G__12093__a.length) {G__12093__a[G__12093__i] = arguments[G__12093__i + 0]; ++G__12093__i;}
  args__6707__auto__ = new cljs.core.IndexedSeq(G__12093__a,0);
} 
return G__12092__delegate.call(this,args__6707__auto__);};
G__12092.cljs$lang$maxFixedArity = 0;
G__12092.cljs$lang$applyTo = (function (arglist__12094){
var args__6707__auto__ = cljs.core.seq(arglist__12094);
return G__12092__delegate(args__6707__auto__);
});
G__12092.cljs$core$IFn$_invoke$arity$variadic = G__12092__delegate;
return G__12092;
})()
;
;})(args_12069__$1,format_in__6705__auto__,cf__6706__auto__,vec__12060_12074,start_12075__$1,end_12076__$1,arg_12073,_STAR_current_level_STAR_12058_12064,_STAR_current_length_STAR_12059_12065,vec__12056,start,end,vec__12057,keyw,args))
})().call(null);
} else {
}
} else {
cljs.pprint.write_out(arg_12073);

if(cljs.core.next(args_12069__$1)){
(function (){var format_in__6705__auto__ = "~:_";
var cf__6706__auto__ = ((typeof format_in__6705__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__6705__auto__) : cljs.pprint.cached_compile.call(null,format_in__6705__auto__)):format_in__6705__auto__);
return ((function (args_12069__$1,format_in__6705__auto__,cf__6706__auto__,arg_12073,_STAR_current_level_STAR_12058_12064,_STAR_current_length_STAR_12059_12065,vec__12056,start,end,vec__12057,keyw,args){
return (function() { 
var G__12095__delegate = function (args__6707__auto__){
var navigator__6708__auto__ = cljs.pprint.init_navigator(args__6707__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__6706__auto__,navigator__6708__auto__);
};
var G__12095 = function (var_args){
var args__6707__auto__ = null;
if (arguments.length > 0) {
var G__12096__i = 0, G__12096__a = new Array(arguments.length -  0);
while (G__12096__i < G__12096__a.length) {G__12096__a[G__12096__i] = arguments[G__12096__i + 0]; ++G__12096__i;}
  args__6707__auto__ = new cljs.core.IndexedSeq(G__12096__a,0);
} 
return G__12095__delegate.call(this,args__6707__auto__);};
G__12095.cljs$lang$maxFixedArity = 0;
G__12095.cljs$lang$applyTo = (function (arglist__12097){
var args__6707__auto__ = cljs.core.seq(arglist__12097);
return G__12095__delegate(args__6707__auto__);
});
G__12095.cljs$core$IFn$_invoke$arity$variadic = G__12095__delegate;
return G__12095;
})()
;
;})(args_12069__$1,format_in__6705__auto__,cf__6706__auto__,arg_12073,_STAR_current_level_STAR_12058_12064,_STAR_current_length_STAR_12059_12065,vec__12056,start,end,vec__12057,keyw,args))
})().call(null);
} else {
}
}

var G__12098 = cljs.core.next(args_12069__$1);
args_12069__$1 = G__12098;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_12059_12065;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_12058_12064;
}}

return null;
} else {
return cljs.pprint.write_out(reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next(alis)){
var vec__12104 = alis;
var ns_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12104,(0),null);
var ns_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12104,(1),null);
var stuff = cljs.core.nthnext(vec__12104,(2));
var vec__12105 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12105,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12105,(1),null);
var vec__12106 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12106,(0),null);
var references = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12106,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_12107_12109 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_12108_12110 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__6705__auto__ = "~w ~1I~@_~w";
var cf__6706__auto__ = ((typeof format_in__6705__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__6705__auto__) : cljs.pprint.cached_compile.call(null,format_in__6705__auto__)):format_in__6705__auto__);
return ((function (format_in__6705__auto__,cf__6706__auto__,_STAR_current_level_STAR_12107_12109,_STAR_current_length_STAR_12108_12110,vec__12104,ns_sym,ns_name,stuff,vec__12105,doc_str,stuff__$1,vec__12106,attr_map,references){
return (function() { 
var G__12111__delegate = function (args__6707__auto__){
var navigator__6708__auto__ = cljs.pprint.init_navigator(args__6707__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__6706__auto__,navigator__6708__auto__);
};
var G__12111 = function (var_args){
var args__6707__auto__ = null;
if (arguments.length > 0) {
var G__12112__i = 0, G__12112__a = new Array(arguments.length -  0);
while (G__12112__i < G__12112__a.length) {G__12112__a[G__12112__i] = arguments[G__12112__i + 0]; ++G__12112__i;}
  args__6707__auto__ = new cljs.core.IndexedSeq(G__12112__a,0);
} 
return G__12111__delegate.call(this,args__6707__auto__);};
G__12111.cljs$lang$maxFixedArity = 0;
G__12111.cljs$lang$applyTo = (function (arglist__12113){
var args__6707__auto__ = cljs.core.seq(arglist__12113);
return G__12111__delegate(args__6707__auto__);
});
G__12111.cljs$core$IFn$_invoke$arity$variadic = G__12111__delegate;
return G__12111;
})()
;
;})(format_in__6705__auto__,cf__6706__auto__,_STAR_current_level_STAR_12107_12109,_STAR_current_length_STAR_12108_12110,vec__12104,ns_sym,ns_name,stuff,vec__12105,doc_str,stuff__$1,vec__12106,attr_map,references))
})().call(null,ns_sym,ns_name);

if(cljs.core.truth_((function (){var or__4161__auto__ = doc_str;
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
var or__4161__auto____$1 = attr_map;
if(cljs.core.truth_(or__4161__auto____$1)){
return or__4161__auto____$1;
} else {
return cljs.core.seq(references);
}
}
})())){
(function (){var format_in__6705__auto__ = "~@:_";
var cf__6706__auto__ = ((typeof format_in__6705__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__6705__auto__) : cljs.pprint.cached_compile.call(null,format_in__6705__auto__)):format_in__6705__auto__);
return ((function (format_in__6705__auto__,cf__6706__auto__,_STAR_current_level_STAR_12107_12109,_STAR_current_length_STAR_12108_12110,vec__12104,ns_sym,ns_name,stuff,vec__12105,doc_str,stuff__$1,vec__12106,attr_map,references){
return (function() { 
var G__12114__delegate = function (args__6707__auto__){
var navigator__6708__auto__ = cljs.pprint.init_navigator(args__6707__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__6706__auto__,navigator__6708__auto__);
};
var G__12114 = function (var_args){
var args__6707__auto__ = null;
if (arguments.length > 0) {
var G__12115__i = 0, G__12115__a = new Array(arguments.length -  0);
while (G__12115__i < G__12115__a.length) {G__12115__a[G__12115__i] = arguments[G__12115__i + 0]; ++G__12115__i;}
  args__6707__auto__ = new cljs.core.IndexedSeq(G__12115__a,0);
} 
return G__12114__delegate.call(this,args__6707__auto__);};
G__12114.cljs$lang$maxFixedArity = 0;
G__12114.cljs$lang$applyTo = (function (arglist__12116){
var args__6707__auto__ = cljs.core.seq(arglist__12116);
return G__12114__delegate(args__6707__auto__);
});
G__12114.cljs$core$IFn$_invoke$arity$variadic = G__12114__delegate;
return G__12114;
})()
;
;})(format_in__6705__auto__,cf__6706__auto__,_STAR_current_level_STAR_12107_12109,_STAR_current_length_STAR_12108_12110,vec__12104,ns_sym,ns_name,stuff,vec__12105,doc_str,stuff__$1,vec__12106,attr_map,references))
})().call(null);
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(true,"\"~a\"~:[~;~:@_~]",cljs.core.array_seq([doc_str,(function (){var or__4161__auto__ = attr_map;
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return cljs.core.seq(references);
}
})()], 0));
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__6705__auto__ = "~w~:[~;~:@_~]";
var cf__6706__auto__ = ((typeof format_in__6705__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__6705__auto__) : cljs.pprint.cached_compile.call(null,format_in__6705__auto__)):format_in__6705__auto__);
return ((function (format_in__6705__auto__,cf__6706__auto__,_STAR_current_level_STAR_12107_12109,_STAR_current_length_STAR_12108_12110,vec__12104,ns_sym,ns_name,stuff,vec__12105,doc_str,stuff__$1,vec__12106,attr_map,references){
return (function() { 
var G__12117__delegate = function (args__6707__auto__){
var navigator__6708__auto__ = cljs.pprint.init_navigator(args__6707__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__6706__auto__,navigator__6708__auto__);
};
var G__12117 = function (var_args){
var args__6707__auto__ = null;
if (arguments.length > 0) {
var G__12118__i = 0, G__12118__a = new Array(arguments.length -  0);
while (G__12118__i < G__12118__a.length) {G__12118__a[G__12118__i] = arguments[G__12118__i + 0]; ++G__12118__i;}
  args__6707__auto__ = new cljs.core.IndexedSeq(G__12118__a,0);
} 
return G__12117__delegate.call(this,args__6707__auto__);};
G__12117.cljs$lang$maxFixedArity = 0;
G__12117.cljs$lang$applyTo = (function (arglist__12119){
var args__6707__auto__ = cljs.core.seq(arglist__12119);
return G__12117__delegate(args__6707__auto__);
});
G__12117.cljs$core$IFn$_invoke$arity$variadic = G__12117__delegate;
return G__12117;
})()
;
;})(format_in__6705__auto__,cf__6706__auto__,_STAR_current_level_STAR_12107_12109,_STAR_current_length_STAR_12108_12110,vec__12104,ns_sym,ns_name,stuff,vec__12105,doc_str,stuff__$1,vec__12106,attr_map,references))
})().call(null,attr_map,cljs.core.seq(references));
} else {
}

var references_12120__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference(cljs.core.first(references_12120__$1));

var temp__4425__auto___12121 = cljs.core.next(references_12120__$1);
if(temp__4425__auto___12121){
var references_12122__$2 = temp__4425__auto___12121;
cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__12123 = references_12122__$2;
references_12120__$1 = G__12123;
continue;
} else {
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_12108_12110;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_12107_12109;
}}

return null;
} else {
return cljs.pprint.write_out(alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__6705__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__6706__auto__ = ((typeof format_in__6705__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__6705__auto__) : cljs.pprint.cached_compile.call(null,format_in__6705__auto__)):format_in__6705__auto__);
return ((function (format_in__6705__auto__,cf__6706__auto__){
return (function() { 
var G__12124__delegate = function (args__6707__auto__){
var navigator__6708__auto__ = cljs.pprint.init_navigator(args__6707__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__6706__auto__,navigator__6708__auto__);
};
var G__12124 = function (var_args){
var args__6707__auto__ = null;
if (arguments.length > 0) {
var G__12125__i = 0, G__12125__a = new Array(arguments.length -  0);
while (G__12125__i < G__12125__a.length) {G__12125__a[G__12125__i] = arguments[G__12125__i + 0]; ++G__12125__i;}
  args__6707__auto__ = new cljs.core.IndexedSeq(G__12125__a,0);
} 
return G__12124__delegate.call(this,args__6707__auto__);};
G__12124.cljs$lang$maxFixedArity = 0;
G__12124.cljs$lang$applyTo = (function (arglist__12126){
var args__6707__auto__ = cljs.core.seq(arglist__12126);
return G__12124__delegate(args__6707__auto__);
});
G__12124.cljs$core$IFn$_invoke$arity$variadic = G__12124__delegate;
return G__12124;
})()
;
;})(format_in__6705__auto__,cf__6706__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
(function (){var format_in__6705__auto__ = " ~_";
var cf__6706__auto__ = ((typeof format_in__6705__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__6705__auto__) : cljs.pprint.cached_compile.call(null,format_in__6705__auto__)):format_in__6705__auto__);
return ((function (format_in__6705__auto__,cf__6706__auto__){
return (function() { 
var G__12127__delegate = function (args__6707__auto__){
var navigator__6708__auto__ = cljs.pprint.init_navigator(args__6707__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__6706__auto__,navigator__6708__auto__);
};
var G__12127 = function (var_args){
var args__6707__auto__ = null;
if (arguments.length > 0) {
var G__12128__i = 0, G__12128__a = new Array(arguments.length -  0);
while (G__12128__i < G__12128__a.length) {G__12128__a[G__12128__i] = arguments[G__12128__i + 0]; ++G__12128__i;}
  args__6707__auto__ = new cljs.core.IndexedSeq(G__12128__a,0);
} 
return G__12127__delegate.call(this,args__6707__auto__);};
G__12127.cljs$lang$maxFixedArity = 0;
G__12127.cljs$lang$applyTo = (function (arglist__12129){
var args__6707__auto__ = cljs.core.seq(arglist__12129);
return G__12127__delegate(args__6707__auto__);
});
G__12127.cljs$core$IFn$_invoke$arity$variadic = G__12127__delegate;
return G__12127;
})()
;
;})(format_in__6705__auto__,cf__6706__auto__))
})().call(null);
} else {
(function (){var format_in__6705__auto__ = " ~@_";
var cf__6706__auto__ = ((typeof format_in__6705__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__6705__auto__) : cljs.pprint.cached_compile.call(null,format_in__6705__auto__)):format_in__6705__auto__);
return ((function (format_in__6705__auto__,cf__6706__auto__){
return (function() { 
var G__12130__delegate = function (args__6707__auto__){
var navigator__6708__auto__ = cljs.pprint.init_navigator(args__6707__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__6706__auto__,navigator__6708__auto__);
};
var G__12130 = function (var_args){
var args__6707__auto__ = null;
if (arguments.length > 0) {
var G__12131__i = 0, G__12131__a = new Array(arguments.length -  0);
while (G__12131__i < G__12131__a.length) {G__12131__a[G__12131__i] = arguments[G__12131__i + 0]; ++G__12131__i;}
  args__6707__auto__ = new cljs.core.IndexedSeq(G__12131__a,0);
} 
return G__12130__delegate.call(this,args__6707__auto__);};
G__12130.cljs$lang$maxFixedArity = 0;
G__12130.cljs$lang$applyTo = (function (arglist__12132){
var args__6707__auto__ = cljs.core.seq(arglist__12132);
return G__12130__delegate(args__6707__auto__);
});
G__12130.cljs$core$IFn$_invoke$arity$variadic = G__12130__delegate;
return G__12130;
})()
;
;})(format_in__6705__auto__,cf__6706__auto__))
})().call(null);
}

return (function (){var format_in__6705__auto__ = "~{~w~^ ~_~}";
var cf__6706__auto__ = ((typeof format_in__6705__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__6705__auto__) : cljs.pprint.cached_compile.call(null,format_in__6705__auto__)):format_in__6705__auto__);
return ((function (format_in__6705__auto__,cf__6706__auto__){
return (function() { 
var G__12133__delegate = function (args__6707__auto__){
var navigator__6708__auto__ = cljs.pprint.init_navigator(args__6707__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__6706__auto__,navigator__6708__auto__);
};
var G__12133 = function (var_args){
var args__6707__auto__ = null;
if (arguments.length > 0) {
var G__12134__i = 0, G__12134__a = new Array(arguments.length -  0);
while (G__12134__i < G__12134__a.length) {G__12134__a[G__12134__i] = arguments[G__12134__i + 0]; ++G__12134__i;}
  args__6707__auto__ = new cljs.core.IndexedSeq(G__12134__a,0);
} 
return G__12133__delegate.call(this,args__6707__auto__);};
G__12133.cljs$lang$maxFixedArity = 0;
G__12133.cljs$lang$applyTo = (function (arglist__12135){
var args__6707__auto__ = cljs.core.seq(arglist__12135);
return G__12133__delegate(args__6707__auto__);
});
G__12133.cljs$core$IFn$_invoke$arity$variadic = G__12133__delegate;
return G__12133;
})()
;
;})(format_in__6705__auto__,cf__6706__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq(alis)){
return (function (){var format_in__6705__auto__ = " ~_~{~w~^ ~_~}";
var cf__6706__auto__ = ((typeof format_in__6705__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__6705__auto__) : cljs.pprint.cached_compile.call(null,format_in__6705__auto__)):format_in__6705__auto__);
return ((function (format_in__6705__auto__,cf__6706__auto__){
return (function() { 
var G__12136__delegate = function (args__6707__auto__){
var navigator__6708__auto__ = cljs.pprint.init_navigator(args__6707__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__6706__auto__,navigator__6708__auto__);
};
var G__12136 = function (var_args){
var args__6707__auto__ = null;
if (arguments.length > 0) {
var G__12137__i = 0, G__12137__a = new Array(arguments.length -  0);
while (G__12137__i < G__12137__a.length) {G__12137__a[G__12137__i] = arguments[G__12137__i + 0]; ++G__12137__i;}
  args__6707__auto__ = new cljs.core.IndexedSeq(G__12137__a,0);
} 
return G__12136__delegate.call(this,args__6707__auto__);};
G__12136.cljs$lang$maxFixedArity = 0;
G__12136.cljs$lang$applyTo = (function (arglist__12138){
var args__6707__auto__ = cljs.core.seq(arglist__12138);
return G__12136__delegate(args__6707__auto__);
});
G__12136.cljs$core$IFn$_invoke$arity$variadic = G__12136__delegate;
return G__12136;
})()
;
;})(format_in__6705__auto__,cf__6706__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next(alis)){
var vec__12144 = alis;
var defn_sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12144,(0),null);
var defn_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12144,(1),null);
var stuff = cljs.core.nthnext(vec__12144,(2));
var vec__12145 = ((typeof cljs.core.first(stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff),cljs.core.next(stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12145,(0),null);
var stuff__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12145,(1),null);
var vec__12146 = ((cljs.core.map_QMARK_(cljs.core.first(stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(stuff__$1),cljs.core.next(stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12146,(0),null);
var stuff__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12146,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_12147_12149 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_12148_12150 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__6705__auto__ = "~w ~1I~@_~w";
var cf__6706__auto__ = ((typeof format_in__6705__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__6705__auto__) : cljs.pprint.cached_compile.call(null,format_in__6705__auto__)):format_in__6705__auto__);
return ((function (format_in__6705__auto__,cf__6706__auto__,_STAR_current_level_STAR_12147_12149,_STAR_current_length_STAR_12148_12150,vec__12144,defn_sym,defn_name,stuff,vec__12145,doc_str,stuff__$1,vec__12146,attr_map,stuff__$2){
return (function() { 
var G__12151__delegate = function (args__6707__auto__){
var navigator__6708__auto__ = cljs.pprint.init_navigator(args__6707__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__6706__auto__,navigator__6708__auto__);
};
var G__12151 = function (var_args){
var args__6707__auto__ = null;
if (arguments.length > 0) {
var G__12152__i = 0, G__12152__a = new Array(arguments.length -  0);
while (G__12152__i < G__12152__a.length) {G__12152__a[G__12152__i] = arguments[G__12152__i + 0]; ++G__12152__i;}
  args__6707__auto__ = new cljs.core.IndexedSeq(G__12152__a,0);
} 
return G__12151__delegate.call(this,args__6707__auto__);};
G__12151.cljs$lang$maxFixedArity = 0;
G__12151.cljs$lang$applyTo = (function (arglist__12153){
var args__6707__auto__ = cljs.core.seq(arglist__12153);
return G__12151__delegate(args__6707__auto__);
});
G__12151.cljs$core$IFn$_invoke$arity$variadic = G__12151__delegate;
return G__12151;
})()
;
;})(format_in__6705__auto__,cf__6706__auto__,_STAR_current_level_STAR_12147_12149,_STAR_current_length_STAR_12148_12150,vec__12144,defn_sym,defn_name,stuff,vec__12145,doc_str,stuff__$1,vec__12146,attr_map,stuff__$2))
})().call(null,defn_sym,defn_name);

if(cljs.core.truth_(doc_str)){
(function (){var format_in__6705__auto__ = " ~_~w";
var cf__6706__auto__ = ((typeof format_in__6705__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__6705__auto__) : cljs.pprint.cached_compile.call(null,format_in__6705__auto__)):format_in__6705__auto__);
return ((function (format_in__6705__auto__,cf__6706__auto__,_STAR_current_level_STAR_12147_12149,_STAR_current_length_STAR_12148_12150,vec__12144,defn_sym,defn_name,stuff,vec__12145,doc_str,stuff__$1,vec__12146,attr_map,stuff__$2){
return (function() { 
var G__12154__delegate = function (args__6707__auto__){
var navigator__6708__auto__ = cljs.pprint.init_navigator(args__6707__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__6706__auto__,navigator__6708__auto__);
};
var G__12154 = function (var_args){
var args__6707__auto__ = null;
if (arguments.length > 0) {
var G__12155__i = 0, G__12155__a = new Array(arguments.length -  0);
while (G__12155__i < G__12155__a.length) {G__12155__a[G__12155__i] = arguments[G__12155__i + 0]; ++G__12155__i;}
  args__6707__auto__ = new cljs.core.IndexedSeq(G__12155__a,0);
} 
return G__12154__delegate.call(this,args__6707__auto__);};
G__12154.cljs$lang$maxFixedArity = 0;
G__12154.cljs$lang$applyTo = (function (arglist__12156){
var args__6707__auto__ = cljs.core.seq(arglist__12156);
return G__12154__delegate(args__6707__auto__);
});
G__12154.cljs$core$IFn$_invoke$arity$variadic = G__12154__delegate;
return G__12154;
})()
;
;})(format_in__6705__auto__,cf__6706__auto__,_STAR_current_level_STAR_12147_12149,_STAR_current_length_STAR_12148_12150,vec__12144,defn_sym,defn_name,stuff,vec__12145,doc_str,stuff__$1,vec__12146,attr_map,stuff__$2))
})().call(null,doc_str);
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__6705__auto__ = " ~_~w";
var cf__6706__auto__ = ((typeof format_in__6705__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__6705__auto__) : cljs.pprint.cached_compile.call(null,format_in__6705__auto__)):format_in__6705__auto__);
return ((function (format_in__6705__auto__,cf__6706__auto__,_STAR_current_level_STAR_12147_12149,_STAR_current_length_STAR_12148_12150,vec__12144,defn_sym,defn_name,stuff,vec__12145,doc_str,stuff__$1,vec__12146,attr_map,stuff__$2){
return (function() { 
var G__12157__delegate = function (args__6707__auto__){
var navigator__6708__auto__ = cljs.pprint.init_navigator(args__6707__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__6706__auto__,navigator__6708__auto__);
};
var G__12157 = function (var_args){
var args__6707__auto__ = null;
if (arguments.length > 0) {
var G__12158__i = 0, G__12158__a = new Array(arguments.length -  0);
while (G__12158__i < G__12158__a.length) {G__12158__a[G__12158__i] = arguments[G__12158__i + 0]; ++G__12158__i;}
  args__6707__auto__ = new cljs.core.IndexedSeq(G__12158__a,0);
} 
return G__12157__delegate.call(this,args__6707__auto__);};
G__12157.cljs$lang$maxFixedArity = 0;
G__12157.cljs$lang$applyTo = (function (arglist__12159){
var args__6707__auto__ = cljs.core.seq(arglist__12159);
return G__12157__delegate(args__6707__auto__);
});
G__12157.cljs$core$IFn$_invoke$arity$variadic = G__12157__delegate;
return G__12157;
})()
;
;})(format_in__6705__auto__,cf__6706__auto__,_STAR_current_level_STAR_12147_12149,_STAR_current_length_STAR_12148_12150,vec__12144,defn_sym,defn_name,stuff,vec__12145,doc_str,stuff__$1,vec__12146,attr_map,stuff__$2))
})().call(null,attr_map);
} else {
}

if(cljs.core.vector_QMARK_(cljs.core.first(stuff__$2))){
cljs.pprint.single_defn(stuff__$2,(function (){var or__4161__auto__ = doc_str;
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn(stuff__$2,(function (){var or__4161__auto__ = doc_str;
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_12148_12150;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_12147_12149;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_12165_12170 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_12166_12171 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count12167_12172 = (0);
var binding_12173 = binding_vec;
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count12167_12172 < cljs.core._STAR_print_length_STAR_))){
if(cljs.core.seq(binding_12173)){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_12168_12174 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_12169_12175 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(binding_12173));

if(cljs.core.next(binding_12173)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out(cljs.core.second(binding_12173));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_12169_12175;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_12168_12174;
}}


if(cljs.core.next(cljs.core.rest(binding_12173))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__12176 = (length_count12167_12172 + (1));
var G__12177 = cljs.core.next(cljs.core.rest(binding_12173));
length_count12167_12172 = G__12176;
binding_12173 = G__12177;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_12166_12171;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_12165_12170;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first(alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_12180_12182 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_12181_12183 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

if((cljs.core.next(alis)) && (cljs.core.vector_QMARK_(cljs.core.second(alis)))){
(function (){var format_in__6705__auto__ = "~w ~1I~@_";
var cf__6706__auto__ = ((typeof format_in__6705__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__6705__auto__) : cljs.pprint.cached_compile.call(null,format_in__6705__auto__)):format_in__6705__auto__);
return ((function (format_in__6705__auto__,cf__6706__auto__,_STAR_current_level_STAR_12180_12182,_STAR_current_length_STAR_12181_12183,base_sym){
return (function() { 
var G__12184__delegate = function (args__6707__auto__){
var navigator__6708__auto__ = cljs.pprint.init_navigator(args__6707__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__6706__auto__,navigator__6708__auto__);
};
var G__12184 = function (var_args){
var args__6707__auto__ = null;
if (arguments.length > 0) {
var G__12185__i = 0, G__12185__a = new Array(arguments.length -  0);
while (G__12185__i < G__12185__a.length) {G__12185__a[G__12185__i] = arguments[G__12185__i + 0]; ++G__12185__i;}
  args__6707__auto__ = new cljs.core.IndexedSeq(G__12185__a,0);
} 
return G__12184__delegate.call(this,args__6707__auto__);};
G__12184.cljs$lang$maxFixedArity = 0;
G__12184.cljs$lang$applyTo = (function (arglist__12186){
var args__6707__auto__ = cljs.core.seq(arglist__12186);
return G__12184__delegate(args__6707__auto__);
});
G__12184.cljs$core$IFn$_invoke$arity$variadic = G__12184__delegate;
return G__12184;
})()
;
;})(format_in__6705__auto__,cf__6706__auto__,_STAR_current_level_STAR_12180_12182,_STAR_current_length_STAR_12181_12183,base_sym))
})().call(null,base_sym);

cljs.pprint.pprint_binding_form(cljs.core.second(alis));

(function (){var format_in__6705__auto__ = " ~_~{~w~^ ~_~}";
var cf__6706__auto__ = ((typeof format_in__6705__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__6705__auto__) : cljs.pprint.cached_compile.call(null,format_in__6705__auto__)):format_in__6705__auto__);
return ((function (format_in__6705__auto__,cf__6706__auto__,_STAR_current_level_STAR_12180_12182,_STAR_current_length_STAR_12181_12183,base_sym){
return (function() { 
var G__12187__delegate = function (args__6707__auto__){
var navigator__6708__auto__ = cljs.pprint.init_navigator(args__6707__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__6706__auto__,navigator__6708__auto__);
};
var G__12187 = function (var_args){
var args__6707__auto__ = null;
if (arguments.length > 0) {
var G__12188__i = 0, G__12188__a = new Array(arguments.length -  0);
while (G__12188__i < G__12188__a.length) {G__12188__a[G__12188__i] = arguments[G__12188__i + 0]; ++G__12188__i;}
  args__6707__auto__ = new cljs.core.IndexedSeq(G__12188__a,0);
} 
return G__12187__delegate.call(this,args__6707__auto__);};
G__12187.cljs$lang$maxFixedArity = 0;
G__12187.cljs$lang$applyTo = (function (arglist__12189){
var args__6707__auto__ = cljs.core.seq(arglist__12189);
return G__12187__delegate(args__6707__auto__);
});
G__12187.cljs$core$IFn$_invoke$arity$variadic = G__12187__delegate;
return G__12187;
})()
;
;})(format_in__6705__auto__,cf__6706__auto__,_STAR_current_level_STAR_12180_12182,_STAR_current_length_STAR_12181_12183,base_sym))
})().call(null,cljs.core.next(cljs.core.rest(alis)));
} else {
(cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_12181_12183;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_12180_12182;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__6705__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__6706__auto__ = ((typeof format_in__6705__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__6705__auto__) : cljs.pprint.cached_compile.call(null,format_in__6705__auto__)):format_in__6705__auto__);
return ((function (format_in__6705__auto__,cf__6706__auto__){
return (function() { 
var G__12190__delegate = function (args__6707__auto__){
var navigator__6708__auto__ = cljs.pprint.init_navigator(args__6707__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__6706__auto__,navigator__6708__auto__);
};
var G__12190 = function (var_args){
var args__6707__auto__ = null;
if (arguments.length > 0) {
var G__12191__i = 0, G__12191__a = new Array(arguments.length -  0);
while (G__12191__i < G__12191__a.length) {G__12191__a[G__12191__i] = arguments[G__12191__i + 0]; ++G__12191__i;}
  args__6707__auto__ = new cljs.core.IndexedSeq(G__12191__a,0);
} 
return G__12190__delegate.call(this,args__6707__auto__);};
G__12190.cljs$lang$maxFixedArity = 0;
G__12190.cljs$lang$applyTo = (function (arglist__12192){
var args__6707__auto__ = cljs.core.seq(arglist__12192);
return G__12190__delegate(args__6707__auto__);
});
G__12190.cljs$core$IFn$_invoke$arity$variadic = G__12190__delegate;
return G__12190;
})()
;
;})(format_in__6705__auto__,cf__6706__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_12198_12203 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_12199_12204 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.pprint.write_out(cljs.core.first(alis));

if(cljs.core.next(alis)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var length_count12200_12205 = (0);
var alis_12206__$1 = cljs.core.next(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count12200_12205 < cljs.core._STAR_print_length_STAR_))){
if(alis_12206__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_12201_12207 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_12202_12208 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_12206__$1));

if(cljs.core.next(alis_12206__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out(cljs.core.second(alis_12206__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_12202_12208;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_12201_12207;
}}


if(cljs.core.next(cljs.core.rest(alis_12206__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__12209 = (length_count12200_12205 + (1));
var G__12210 = cljs.core.next(cljs.core.rest(alis_12206__$1));
length_count12200_12205 = G__12209;
alis_12206__$1 = G__12210;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_12199_12204;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_12198_12203;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count(alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_12216_12221 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_12217_12222 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.core.apply.cljs$core$IFn$_invoke$arity$2((function (){var format_in__6705__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__6706__auto__ = ((typeof format_in__6705__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__6705__auto__) : cljs.pprint.cached_compile.call(null,format_in__6705__auto__)):format_in__6705__auto__);
return ((function (format_in__6705__auto__,cf__6706__auto__,_STAR_current_level_STAR_12216_12221,_STAR_current_length_STAR_12217_12222){
return (function() { 
var G__12223__delegate = function (args__6707__auto__){
var navigator__6708__auto__ = cljs.pprint.init_navigator(args__6707__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__6706__auto__,navigator__6708__auto__);
};
var G__12223 = function (var_args){
var args__6707__auto__ = null;
if (arguments.length > 0) {
var G__12224__i = 0, G__12224__a = new Array(arguments.length -  0);
while (G__12224__i < G__12224__a.length) {G__12224__a[G__12224__i] = arguments[G__12224__i + 0]; ++G__12224__i;}
  args__6707__auto__ = new cljs.core.IndexedSeq(G__12224__a,0);
} 
return G__12223__delegate.call(this,args__6707__auto__);};
G__12223.cljs$lang$maxFixedArity = 0;
G__12223.cljs$lang$applyTo = (function (arglist__12225){
var args__6707__auto__ = cljs.core.seq(arglist__12225);
return G__12223__delegate(args__6707__auto__);
});
G__12223.cljs$core$IFn$_invoke$arity$variadic = G__12223__delegate;
return G__12223;
})()
;
;})(format_in__6705__auto__,cf__6706__auto__,_STAR_current_level_STAR_12216_12221,_STAR_current_length_STAR_12217_12222))
})(),alis);

var length_count12218_12226 = (0);
var alis_12227__$1 = cljs.core.seq(cljs.core.drop.cljs$core$IFn$_invoke$arity$2((3),alis));
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count12218_12226 < cljs.core._STAR_print_length_STAR_))){
if(alis_12227__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_12219_12228 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_12220_12229 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out(cljs.core.first(alis_12227__$1));

if(cljs.core.next(alis_12227__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out(cljs.core.second(alis_12227__$1));
} else {
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_12220_12229;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_12219_12228;
}}


if(cljs.core.next(cljs.core.rest(alis_12227__$1))){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__12230 = (length_count12218_12226 + (1));
var G__12231 = cljs.core.next(cljs.core.rest(alis_12227__$1));
length_count12218_12226 = G__12230;
alis_12227__$1 = G__12231;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_12217_12222;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_12216_12221;
}}

return null;
} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second(alis);
var nlis = cljs.core.first(cljs.core.rest(cljs.core.rest(alis)));
if(cljs.core.vector_QMARK_(args)){
var _STAR_symbol_map_STAR_12235 = cljs.pprint._STAR_symbol_map_STAR_;
cljs.pprint._STAR_symbol_map_STAR_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args)))?new cljs.core.PersistentArrayMap.fromArray([cljs.core.first(args),"%"], true, false):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (_STAR_symbol_map_STAR_12235,args,nlis){
return (function (p1__12232_SHARP_,p2__12233_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__12232_SHARP_,[cljs.core.str("%"),cljs.core.str(p2__12233_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR_12235,args,nlis))
,args,cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(args) + (1))))));

try{return (function (){var format_in__6705__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__6706__auto__ = ((typeof format_in__6705__auto__ === 'string')?(cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.cached_compile.cljs$core$IFn$_invoke$arity$1(format_in__6705__auto__) : cljs.pprint.cached_compile.call(null,format_in__6705__auto__)):format_in__6705__auto__);
return ((function (format_in__6705__auto__,cf__6706__auto__,_STAR_symbol_map_STAR_12235,args,nlis){
return (function() { 
var G__12236__delegate = function (args__6707__auto__){
var navigator__6708__auto__ = cljs.pprint.init_navigator(args__6707__auto__);
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2(cf__6706__auto__,navigator__6708__auto__);
};
var G__12236 = function (var_args){
var args__6707__auto__ = null;
if (arguments.length > 0) {
var G__12237__i = 0, G__12237__a = new Array(arguments.length -  0);
while (G__12237__i < G__12237__a.length) {G__12237__a[G__12237__i] = arguments[G__12237__i + 0]; ++G__12237__i;}
  args__6707__auto__ = new cljs.core.IndexedSeq(G__12237__a,0);
} 
return G__12236__delegate.call(this,args__6707__auto__);};
G__12236.cljs$lang$maxFixedArity = 0;
G__12236.cljs$lang$applyTo = (function (arglist__12238){
var args__6707__auto__ = cljs.core.seq(arglist__12238);
return G__12236__delegate(args__6707__auto__);
});
G__12236.cljs$core$IFn$_invoke$arity$variadic = G__12236__delegate;
return G__12236;
})()
;
;})(format_in__6705__auto__,cf__6706__auto__,_STAR_symbol_map_STAR_12235,args,nlis))
})().call(null,nlis);
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR_12235;
}} else {
return (cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pprint_simple_code_list.cljs$core$IFn$_invoke$arity$1(alis) : cljs.pprint.pprint_simple_code_list.call(null,alis));
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded())){
cljs.core._write(cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_12242_12245 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_12243_12246 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block(cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent(new cljs.core.Keyword(null,"block","block",664686210),(1));

var length_count12244_12247 = (0);
var alis_12248__$1 = cljs.core.seq(alis);
while(true){
if((cljs.core.not(cljs.core._STAR_print_length_STAR_)) || ((length_count12244_12247 < cljs.core._STAR_print_length_STAR_))){
if(alis_12248__$1){
cljs.pprint.write_out(cljs.core.first(alis_12248__$1));

if(cljs.core.next(alis_12248__$1)){
cljs.core._write(cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline(new cljs.core.Keyword(null,"linear","linear",872268697));

var G__12249 = (length_count12244_12247 + (1));
var G__12250 = cljs.core.next(alis_12248__$1);
length_count12244_12247 = G__12249;
alis_12248__$1 = G__12250;
continue;
} else {
}
} else {
}
} else {
cljs.core._write(cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block(cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_12243_12246;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_12242_12245;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.array_seq([(function (){var iter__4914__auto__ = (function cljs$pprint$two_forms_$_iter__12257(s__12258){
return (new cljs.core.LazySeq(null,(function (){
var s__12258__$1 = s__12258;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__12258__$1);
if(temp__4425__auto__){
var s__12258__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12258__$2)){
var c__4912__auto__ = cljs.core.chunk_first(s__12258__$2);
var size__4913__auto__ = cljs.core.count(c__4912__auto__);
var b__12260 = cljs.core.chunk_buffer(size__4913__auto__);
if((function (){var i__12259 = (0);
while(true){
if((i__12259 < size__4913__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4912__auto__,i__12259);
cljs.core.chunk_append(b__12260,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null));

var G__12263 = (i__12259 + (1));
i__12259 = G__12263;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12260),cljs$pprint$two_forms_$_iter__12257(cljs.core.chunk_rest(s__12258__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12260),null);
}
} else {
var x = cljs.core.first(s__12258__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.first(x))),cljs.core.second(x)], null)], null),cljs$pprint$two_forms_$_iter__12257(cljs.core.rest(s__12258__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4914__auto__(amap);
})()], 0)));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (core){
return (function (p1__12264_SHARP_){
var vec__12266 = p1__12264_SHARP_;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12266,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12266,(1),null);
if(cljs.core.not((function (){var or__4161__auto__ = cljs.core.namespace(s);
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return cljs.core.special_symbol_QMARK_(s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(core,cljs.core.name(s)),f], null);
} else {
return p1__12264_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms(cljs.pprint.add_core_ns(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"condp","condp",1054325175,null),new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"struct","struct",325972931,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"cond","cond",1606708055,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),new cljs.core.Symbol(null,"locking","locking",1542862874,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"struct-map","struct-map",-1387540878,null)],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not(cljs.pprint.pprint_reader_macro(alis))){
var temp__4423__auto__ = (function (){var G__12268 = cljs.core.first(alis);
return (cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint._STAR_code_table_STAR_.cljs$core$IFn$_invoke$arity$1(G__12268) : cljs.pprint._STAR_code_table_STAR_.call(null,G__12268));
})();
if(cljs.core.truth_(temp__4423__auto__)){
var special_form = temp__4423__auto__;
return (special_form.cljs$core$IFn$_invoke$arity$1 ? special_form.cljs$core$IFn$_invoke$arity$1(alis) : special_form.call(null,alis));
} else {
return cljs.pprint.pprint_simple_code_list(alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__4423__auto__ = (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_symbol_map_STAR_) : sym.call(null,cljs.pprint._STAR_symbol_map_STAR_));
if(cljs.core.truth_(temp__4423__auto__)){
var arg_num = temp__4423__auto__;
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arg_num], 0));
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.name(sym)], 0));
} else {
return (cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1 ? cljs.pprint.pr.cljs$core$IFn$_invoke$arity$1(sym) : cljs.pprint.pr.call(null,sym));
}
}
});
if(typeof cljs.pprint.code_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__5055__auto__ = (function (){var G__12269 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12269) : cljs.core.atom.call(null,G__12269));
})();
var prefer_table__5056__auto__ = (function (){var G__12270 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12270) : cljs.core.atom.call(null,G__12270));
})();
var method_cache__5057__auto__ = (function (){var G__12271 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12271) : cljs.core.atom.call(null,G__12271));
})();
var cached_hierarchy__5058__auto__ = (function (){var G__12272 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__12272) : cljs.core.atom.call(null,G__12272));
})();
var hierarchy__5059__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5059__auto__,method_table__5055__auto__,prefer_table__5056__auto__,method_cache__5057__auto__,cached_hierarchy__5058__auto__));
})();
}
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_code_list);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.pprint.pprint_pqueue);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"deref","deref",-145586795),cljs.pprint.pprint_ideref);
cljs.pprint.use_method(cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method(cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch(cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__4473__auto__ = (0);
var y__4474__auto__ = (width - cljs.core.count(s));
return ((x__4473__auto__ > y__4474__auto__) ? x__4473__auto__ : y__4474__auto__);
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(){
var args12276 = [];
var len__5200__auto___12294 = arguments.length;
var i__5201__auto___12295 = (0);
while(true){
if((i__5201__auto___12295 < len__5200__auto___12294)){
args12276.push((arguments[i__5201__auto___12295]));

var G__12296 = (i__5201__auto___12295 + (1));
i__5201__auto___12295 = G__12296;
continue;
} else {
}
break;
}

var G__12278 = args12276.length;
switch (G__12278) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12276.length)].join('')));

}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
var _STAR_print_newline_STAR_12279 = cljs.core._STAR_print_newline_STAR_;
try{if(cljs.core.seq(rows)){
var widths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_12279){
return (function (k){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max,cljs.core.count([cljs.core.str(k)].join('')),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_print_newline_STAR_12279){
return (function (p1__12273_SHARP_){
return cljs.core.count([cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__12273_SHARP_,k))].join(''));
});})(_STAR_print_newline_STAR_12279))
,rows));
});})(_STAR_print_newline_STAR_12279))
,ks);
var spacers = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (widths,_STAR_print_newline_STAR_12279){
return (function (p1__12274_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(p1__12274_SHARP_,"-"));
});})(widths,_STAR_print_newline_STAR_12279))
,widths);
var fmt_row = ((function (widths,spacers,_STAR_print_newline_STAR_12279){
return (function (leader,divider,trailer,row){
return [cljs.core.str(leader),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(divider,(function (){var iter__4914__auto__ = ((function (widths,spacers,_STAR_print_newline_STAR_12279){
return (function cljs$pprint$iter__12280(s__12281){
return (new cljs.core.LazySeq(null,((function (widths,spacers,_STAR_print_newline_STAR_12279){
return (function (){
var s__12281__$1 = s__12281;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__12281__$1);
if(temp__4425__auto__){
var s__12281__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12281__$2)){
var c__4912__auto__ = cljs.core.chunk_first(s__12281__$2);
var size__4913__auto__ = cljs.core.count(c__4912__auto__);
var b__12283 = cljs.core.chunk_buffer(size__4913__auto__);
if((function (){var i__12282 = (0);
while(true){
if((i__12282 < size__4913__auto__)){
var vec__12288 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4912__auto__,i__12282);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12288,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12288,(1),null);
cljs.core.chunk_append(b__12283,cljs.pprint.add_padding(width,[cljs.core.str(col)].join('')));

var G__12298 = (i__12282 + (1));
i__12282 = G__12298;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12283),cljs$pprint$iter__12280(cljs.core.chunk_rest(s__12281__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12283),null);
}
} else {
var vec__12289 = cljs.core.first(s__12281__$2);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12289,(0),null);
var width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12289,(1),null);
return cljs.core.cons(cljs.pprint.add_padding(width,[cljs.core.str(col)].join('')),cljs$pprint$iter__12280(cljs.core.rest(s__12281__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers,_STAR_print_newline_STAR_12279))
,null,null));
});})(widths,spacers,_STAR_print_newline_STAR_12279))
;
return iter__4914__auto__(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (iter__4914__auto__,widths,spacers,_STAR_print_newline_STAR_12279){
return (function (p1__12275_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(row,p1__12275_SHARP_);
});})(iter__4914__auto__,widths,spacers,_STAR_print_newline_STAR_12279))
,ks),widths));
})()))),cljs.core.str(trailer)].join('');
});})(widths,spacers,_STAR_print_newline_STAR_12279))
;
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([fmt_row("| "," | "," |",cljs.core.zipmap(ks,ks))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([fmt_row("|-","-+-","-|",cljs.core.zipmap(ks,spacers))], 0));

var seq__12290 = cljs.core.seq(rows);
var chunk__12291 = null;
var count__12292 = (0);
var i__12293 = (0);
while(true){
if((i__12293 < count__12292)){
var row = chunk__12291.cljs$core$IIndexed$_nth$arity$2(null,i__12293);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([fmt_row("| "," | "," |",row)], 0));

var G__12299 = seq__12290;
var G__12300 = chunk__12291;
var G__12301 = count__12292;
var G__12302 = (i__12293 + (1));
seq__12290 = G__12299;
chunk__12291 = G__12300;
count__12292 = G__12301;
i__12293 = G__12302;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__12290);
if(temp__4425__auto__){
var seq__12290__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12290__$1)){
var c__4945__auto__ = cljs.core.chunk_first(seq__12290__$1);
var G__12303 = cljs.core.chunk_rest(seq__12290__$1);
var G__12304 = c__4945__auto__;
var G__12305 = cljs.core.count(c__4945__auto__);
var G__12306 = (0);
seq__12290 = G__12303;
chunk__12291 = G__12304;
count__12292 = G__12305;
i__12293 = G__12306;
continue;
} else {
var row = cljs.core.first(seq__12290__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([fmt_row("| "," | "," |",row)], 0));

var G__12307 = cljs.core.next(seq__12290__$1);
var G__12308 = null;
var G__12309 = (0);
var G__12310 = (0);
seq__12290 = G__12307;
chunk__12291 = G__12308;
count__12292 = G__12309;
i__12293 = G__12310;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_12279;
}});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(cljs.core.first(rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=pprint.js.map