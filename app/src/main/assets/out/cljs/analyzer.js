// Compiled by ClojureScript 0.0-3464 {:static-fns true}
goog.provide('cljs.analyzer');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('cljs.tools.reader');
goog.require('cljs.tagged_literals');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.env');
goog.require('clojure.string');
goog.require('cljs.reader');
cljs.analyzer._STAR_cljs_ns_STAR_ = new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null);
cljs.analyzer._STAR_cljs_file_STAR_ = null;
cljs.analyzer._STAR_cljs_static_fns_STAR_ = false;
cljs.analyzer._STAR_cljs_macros_path_STAR_ = "/cljs/core";
cljs.analyzer._STAR_cljs_macros_is_classpath_STAR_ = true;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = cljs.core.with_meta(cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558),cljs.core.PersistentVector.EMPTY], null));
cljs.analyzer._STAR_analyze_deps_STAR_ = true;
cljs.analyzer._STAR_load_tests_STAR_ = true;
cljs.analyzer._STAR_load_macros_STAR_ = true;
cljs.analyzer._STAR_reload_macros_STAR_ = false;
cljs.analyzer._STAR_macro_infer_STAR_ = true;
cljs.analyzer._STAR_file_defs_STAR_ = null;
cljs.analyzer._STAR_verbose_STAR_ = false;
cljs.analyzer._cljs_macros_loaded = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false) : cljs.core.atom.call(null,false));
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),new cljs.core.Keyword(null,"redef","redef",1032704258),new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837)],[true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true]);
cljs.analyzer.js_reserved = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 60, ["typeof",null,"float",null,"implements",null,"else",null,"boolean",null,"abstract",null,"int",null,"static",null,"package",null,"this",null,"yield",null,"interface",null,"void",null,"delete",null,"class",null,"export",null,"var",null,"try",null,"long",null,"null",null,"return",null,"methods",null,"native",null,"private",null,"new",null,"for",null,"catch",null,"extends",null,"short",null,"protected",null,"throws",null,"synchronized",null,"transient",null,"super",null,"if",null,"let",null,"import",null,"char",null,"switch",null,"const",null,"case",null,"break",null,"volatile",null,"function",null,"continue",null,"final",null,"do",null,"double",null,"while",null,"public",null,"debugger",null,"with",null,"instanceof",null,"default",null,"throw",null,"goto",null,"finally",null,"byte",null,"in",null,"enum",null], null), null);
cljs.analyzer.SENTINEL = {};
cljs.analyzer.gets = (function cljs$analyzer$gets(){
var args10066 = [];
var len__5200__auto___10069 = arguments.length;
var i__5201__auto___10070 = (0);
while(true){
if((i__5201__auto___10070 < len__5200__auto___10069)){
args10066.push((arguments[i__5201__auto___10070]));

var G__10071 = (i__5201__auto___10070 + (1));
i__5201__auto___10070 = G__10071;
continue;
} else {
}
break;
}

var G__10068 = args10066.length;
switch (G__10068) {
case 3:
return cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10066.length)].join('')));

}
});

cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3 = (function (m,k0,k1){
var m__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k0,cljs.analyzer.SENTINEL);
if((m__$1 === cljs.analyzer.SENTINEL)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k1);
}
});

cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4 = (function (m,k0,k1,k2){
var m__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k0,cljs.analyzer.SENTINEL);
if((m__$1 === cljs.analyzer.SENTINEL)){
return null;
} else {
var m__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m__$1,k1,cljs.analyzer.SENTINEL);
if((m__$2 === cljs.analyzer.SENTINEL)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$2,k2);
}
}
});

cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5 = (function (m,k0,k1,k2,k3){
var m__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,k0,cljs.analyzer.SENTINEL);
if((m__$1 === cljs.analyzer.SENTINEL)){
return null;
} else {
var m__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m__$1,k1,cljs.analyzer.SENTINEL);
if((m__$2 === cljs.analyzer.SENTINEL)){
return null;
} else {
var m__$3 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(m__$2,k2,cljs.analyzer.SENTINEL);
if((m__$3 === cljs.analyzer.SENTINEL)){
return null;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$3,k3);
}
}
}
});

cljs.analyzer.gets.cljs$lang$maxFixedArity = 5;
cljs.analyzer.CLJ_NIL_SYM = new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null);
cljs.analyzer.NUMBER_SYM = new cljs.core.Symbol(null,"number","number",-1084057331,null);
cljs.analyzer.STRING_SYM = new cljs.core.Symbol(null,"string","string",-349010059,null);
cljs.analyzer.BOOLEAN_SYM = new cljs.core.Symbol(null,"boolean","boolean",-278886877,null);
cljs.analyzer.JS_STAR_SYM = new cljs.core.Symbol(null,"js*","js*",-1134233646,null);
cljs.analyzer.DOT_SYM = new cljs.core.Symbol(null,".",".",1975675962,null);
cljs.analyzer.NEW_SYM = new cljs.core.Symbol(null,"new","new",-444906321,null);
cljs.analyzer.CLJS_CORE_SYM = new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null);
cljs.analyzer.CLJS_CORE_MACROS_SYM = new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null);
cljs.analyzer.IGNORE_SYM = new cljs.core.Symbol(null,"ignore","ignore",8989494,null);
cljs.analyzer.ANY_SYM = new cljs.core.Symbol(null,"any","any",-948528346,null);
cljs.analyzer.cljs_seq_QMARK_ = (function cljs$analyzer$cljs_seq_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (64))) || (x.cljs$core$ISeq$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.cljs_map_QMARK_ = (function cljs$analyzer$cljs_map_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (1024))) || (x.cljs$core$IMap$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.cljs_vector_QMARK_ = (function cljs$analyzer$cljs_vector_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (16384))) || (x.cljs$core$IVector$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.cljs_set_QMARK_ = (function cljs$analyzer$cljs_set_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (4096))) || (x.cljs$core$ISet$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.analyzer.munge_path = (function cljs$analyzer$munge_path(ss){
return cljs.core.munge([cljs.core.str(ss)].join(''));
});
/**
 * Given a namespace as a symbol return the relative path. May optionally
 * provide the file extension, defaults to :cljs.
 */
cljs.analyzer.ns__GT_relpath = (function cljs$analyzer$ns__GT_relpath(){
var args10081 = [];
var len__5200__auto___10084 = arguments.length;
var i__5201__auto___10085 = (0);
while(true){
if((i__5201__auto___10085 < len__5200__auto___10084)){
args10081.push((arguments[i__5201__auto___10085]));

var G__10086 = (i__5201__auto___10085 + (1));
i__5201__auto___10085 = G__10086;
continue;
} else {
}
break;
}

var G__10083 = args10081.length;
switch (G__10083) {
case 1:
return cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10081.length)].join('')));

}
});

cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Keyword(null,"cljs","cljs",1492417629));
});

cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2 = (function (ns,ext){
return [cljs.core.str(clojure.string.replace(cljs.analyzer.munge_path(ns),".","/")),cljs.core.str("."),cljs.core.str(cljs.core.name(ext))].join('');
});

cljs.analyzer.ns__GT_relpath.cljs$lang$maxFixedArity = 2;
cljs.analyzer.topo_sort = (function cljs$analyzer$topo_sort(){
var args10088 = [];
var len__5200__auto___10102 = arguments.length;
var i__5201__auto___10103 = (0);
while(true){
if((i__5201__auto___10103 < len__5200__auto___10102)){
args10088.push((arguments[i__5201__auto___10103]));

var G__10104 = (i__5201__auto___10103 + (1));
i__5201__auto___10103 = G__10104;
continue;
} else {
}
break;
}

var G__10090 = args10088.length;
switch (G__10090) {
case 2:
return cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10088.length)].join('')));

}
});

cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$2 = (function (x,get_deps){
return cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4(x,(0),(function (){var G__10091 = cljs.core.sorted_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10091) : cljs.core.atom.call(null,G__10091));
})(),cljs.core.memoize(get_deps));
});

cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4 = (function (x,depth,state,memo_get_deps){
var deps = (memo_get_deps.cljs$core$IFn$_invoke$arity$1 ? memo_get_deps.cljs$core$IFn$_invoke$arity$1(x) : memo_get_deps.call(null,x));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),cljs.core.array_seq([deps], 0));

var seq__10092_10106 = cljs.core.seq(deps);
var chunk__10093_10107 = null;
var count__10094_10108 = (0);
var i__10095_10109 = (0);
while(true){
if((i__10095_10109 < count__10094_10108)){
var dep_10110 = chunk__10093_10107.cljs$core$IIndexed$_nth$arity$2(null,i__10095_10109);
cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4(dep_10110,(depth + (1)),state,memo_get_deps);

var G__10111 = seq__10092_10106;
var G__10112 = chunk__10093_10107;
var G__10113 = count__10094_10108;
var G__10114 = (i__10095_10109 + (1));
seq__10092_10106 = G__10111;
chunk__10093_10107 = G__10112;
count__10094_10108 = G__10113;
i__10095_10109 = G__10114;
continue;
} else {
var temp__4425__auto___10115 = cljs.core.seq(seq__10092_10106);
if(temp__4425__auto___10115){
var seq__10092_10116__$1 = temp__4425__auto___10115;
if(cljs.core.chunked_seq_QMARK_(seq__10092_10116__$1)){
var c__4945__auto___10117 = cljs.core.chunk_first(seq__10092_10116__$1);
var G__10118 = cljs.core.chunk_rest(seq__10092_10116__$1);
var G__10119 = c__4945__auto___10117;
var G__10120 = cljs.core.count(c__4945__auto___10117);
var G__10121 = (0);
seq__10092_10106 = G__10118;
chunk__10093_10107 = G__10119;
count__10094_10108 = G__10120;
i__10095_10109 = G__10121;
continue;
} else {
var dep_10122 = cljs.core.first(seq__10092_10116__$1);
cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$4(dep_10122,(depth + (1)),state,memo_get_deps);

var G__10123 = cljs.core.next(seq__10092_10116__$1);
var G__10124 = null;
var G__10125 = (0);
var G__10126 = (0);
seq__10092_10106 = G__10123;
chunk__10093_10107 = G__10124;
count__10094_10108 = G__10125;
i__10095_10109 = G__10126;
continue;
}
} else {
}
}
break;
}

var seq__10096_10127 = cljs.core.seq(cljs.core.subseq.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),cljs.core._LT_,depth));
var chunk__10097_10128 = null;
var count__10098_10129 = (0);
var i__10099_10130 = (0);
while(true){
if((i__10099_10130 < count__10098_10129)){
var vec__10100_10131 = chunk__10097_10128.cljs$core$IIndexed$_nth$arity$2(null,i__10099_10130);
var _LT_depth_10132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10100_10131,(0),null);
var __10133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10100_10131,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_LT_depth_10132], null),clojure.set.difference,cljs.core.array_seq([deps], 0));

var G__10134 = seq__10096_10127;
var G__10135 = chunk__10097_10128;
var G__10136 = count__10098_10129;
var G__10137 = (i__10099_10130 + (1));
seq__10096_10127 = G__10134;
chunk__10097_10128 = G__10135;
count__10098_10129 = G__10136;
i__10099_10130 = G__10137;
continue;
} else {
var temp__4425__auto___10138 = cljs.core.seq(seq__10096_10127);
if(temp__4425__auto___10138){
var seq__10096_10139__$1 = temp__4425__auto___10138;
if(cljs.core.chunked_seq_QMARK_(seq__10096_10139__$1)){
var c__4945__auto___10140 = cljs.core.chunk_first(seq__10096_10139__$1);
var G__10141 = cljs.core.chunk_rest(seq__10096_10139__$1);
var G__10142 = c__4945__auto___10140;
var G__10143 = cljs.core.count(c__4945__auto___10140);
var G__10144 = (0);
seq__10096_10127 = G__10141;
chunk__10097_10128 = G__10142;
count__10098_10129 = G__10143;
i__10099_10130 = G__10144;
continue;
} else {
var vec__10101_10145 = cljs.core.first(seq__10096_10139__$1);
var _LT_depth_10146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10101_10145,(0),null);
var __10147 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10101_10145,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [_LT_depth_10146], null),clojure.set.difference,cljs.core.array_seq([deps], 0));

var G__10148 = cljs.core.next(seq__10096_10139__$1);
var G__10149 = null;
var G__10150 = (0);
var G__10151 = (0);
seq__10096_10127 = G__10148;
chunk__10097_10128 = G__10149;
count__10098_10129 = G__10150;
i__10099_10130 = G__10151;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(depth,(0))){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)))));
} else {
return null;
}
});

cljs.analyzer.topo_sort.cljs$lang$maxFixedArity = 4;

cljs.analyzer.ast_QMARK_ = (function cljs$analyzer$ast_QMARK_(x){
return (cljs.core.map_QMARK_(x)) && (cljs.core.contains_QMARK_(x,new cljs.core.Keyword(null,"op","op",-1882987955)));
});
if(typeof cljs.analyzer.error_message !== 'undefined'){
} else {
cljs.analyzer.error_message = (function (){var method_table__5055__auto__ = (function (){var G__10152 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10152) : cljs.core.atom.call(null,G__10152));
})();
var prefer_table__5056__auto__ = (function (){var G__10153 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10153) : cljs.core.atom.call(null,G__10153));
})();
var method_cache__5057__auto__ = (function (){var G__10154 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10154) : cljs.core.atom.call(null,G__10154));
})();
var cached_hierarchy__5058__auto__ = (function (){var G__10155 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10155) : cljs.core.atom.call(null,G__10155));
})();
var hierarchy__5059__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.analyzer","error-message"),((function (method_table__5055__auto__,prefer_table__5056__auto__,method_cache__5057__auto__,cached_hierarchy__5058__auto__,hierarchy__5059__auto__){
return (function() { 
var G__10156__delegate = function (warning_type,_){
return warning_type;
};
var G__10156 = function (warning_type,var_args){
var _ = null;
if (arguments.length > 1) {
var G__10157__i = 0, G__10157__a = new Array(arguments.length -  1);
while (G__10157__i < G__10157__a.length) {G__10157__a[G__10157__i] = arguments[G__10157__i + 1]; ++G__10157__i;}
  _ = new cljs.core.IndexedSeq(G__10157__a,0);
} 
return G__10156__delegate.call(this,warning_type,_);};
G__10156.cljs$lang$maxFixedArity = 1;
G__10156.cljs$lang$applyTo = (function (arglist__10158){
var warning_type = cljs.core.first(arglist__10158);
var _ = cljs.core.rest(arglist__10158);
return G__10156__delegate(warning_type,_);
});
G__10156.cljs$core$IFn$_invoke$arity$variadic = G__10156__delegate;
return G__10156;
})()
;})(method_table__5055__auto__,prefer_table__5056__auto__,method_cache__5057__auto__,cached_hierarchy__5058__auto__,hierarchy__5059__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5059__auto__,method_table__5055__auto__,prefer_table__5056__auto__,method_cache__5057__auto__,cached_hierarchy__5058__auto__));
})();
}
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"preamble-missing","preamble-missing",220974801),(function (warning_type,info){
return [cljs.core.str("Preamble resource file not found: "),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.Keyword(null,"missing","missing",362507769).cljs$core$IFn$_invoke$arity$1(info)))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"unprovided","unprovided",-652330764),(function (warning_type,info){
return [cljs.core.str("Required namespace not provided for "),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.Keyword(null,"unprovided","unprovided",-652330764).cljs$core$IFn$_invoke$arity$1(info)))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),(function (warning_type,info){
return [cljs.core.str("Use of undeclared Var "),cljs.core.str(new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),(function (warning_type,p__10159){
var map__10160 = p__10159;
var map__10160__$1 = ((cljs.core.seq_QMARK_(map__10160))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10160):map__10160);
var info = map__10160__$1;
var ns_sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10160__$1,new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605));
var js_provide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10160__$1,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493));
return [cljs.core.str("No such namespace: "),cljs.core.str(ns_sym),cljs.core.str(", could not locate "),cljs.core.str(cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2(ns_sym,new cljs.core.Keyword(null,"cljs","cljs",1492417629))),cljs.core.str(", "),cljs.core.str(cljs.analyzer.ns__GT_relpath.cljs$core$IFn$_invoke$arity$2(ns_sym,new cljs.core.Keyword(null,"cljc","cljc",-1728400583))),cljs.core.str(", or Closure namespace \""),cljs.core.str(js_provide),cljs.core.str("\"")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571),(function (warning_type,info){
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" not declared ^:dynamic")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"redef","redef",1032704258),(function (warning_type,info){
return [cljs.core.str(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" already refers to: "),cljs.core.str(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info))].join(''),[cljs.core.str(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info))].join(''))),cljs.core.str(" being replaced by: "),cljs.core.str(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(new cljs.core.Keyword(null,"ns-name","ns-name",-2077346323).cljs$core$IFn$_invoke$arity$1(info))].join(''),[cljs.core.str(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info))].join('')))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),(function (warning_type,info){
return [cljs.core.str(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" at line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" is being replaced")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),(function (warning_type,info){
return [cljs.core.str(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(new cljs.core.Keyword(null,"ns-name","ns-name",-2077346323).cljs$core$IFn$_invoke$arity$1(info))].join(''),[cljs.core.str(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info))].join(''))),cljs.core.str(" no longer fn, references are stale")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),(function (warning_type,info){
return [cljs.core.str("Wrong number of args ("),cljs.core.str(new cljs.core.Keyword(null,"argc","argc",-1452839519).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(") passed to "),cljs.core.str((function (){var or__4161__auto__ = new cljs.core.Keyword(null,"ctor","ctor",1750864802).cljs$core$IFn$_invoke$arity$1(info);
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
}
})())].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),(function (warning_type,info){
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fexpr","fexpr",-122857150).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str(" is deprecated.")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137),(function (warning_type,info){
return [cljs.core.str("Referred "),cljs.core.str(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"lib","lib",191808726).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str("/"),cljs.core.str(new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" does not exist")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),(function (warning_type,info){
return [cljs.core.str("Protocol "),cljs.core.str(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" is deprecated")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),(function (warning_type,info){
return [cljs.core.str("Can't resolve protocol symbol "),cljs.core.str(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),(function (warning_type,info){
return [cljs.core.str("Symbol "),cljs.core.str(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" is not a protocol")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),(function (warning_type,info){
if(cljs.core.truth_(new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840).cljs$core$IFn$_invoke$arity$1(info))){
return [cljs.core.str("Bad method signature in protocol implementation, "),cljs.core.str(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" does not declare method called "),cljs.core.str(new cljs.core.Keyword(null,"fname","fname",1500291491).cljs$core$IFn$_invoke$arity$1(info))].join('');
} else {
return [cljs.core.str("Bad method signature in protocol implementation, "),cljs.core.str(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"fname","fname",1500291491).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" does not declare arity "),cljs.core.str(new cljs.core.Keyword(null,"invalid-arity","invalid-arity",1335461949).cljs$core$IFn$_invoke$arity$1(info))].join('');
}
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),(function (warning_type,info){
return [cljs.core.str("Duplicated methods in protocol implementation "),cljs.core.str(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"fname","fname",1500291491).cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),(function (warning_type,info){
return [cljs.core.str("Protocol "),cljs.core.str(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" implemented multiple times")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),(function (warning_type,info){
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(": Can't have more than 1 variadic overload")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),(function (warning_type,info){
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(": Can't have fixed arity function with more params than variadic function")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),(function (warning_type,info){
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(": Can't have 2 overloads with same arity")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),(function (warning_type,info){
return [cljs.core.str("Extending an existing JavaScript type - use a different symbol name "),cljs.core.str("instead of "),cljs.core.str(new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" e.g "),cljs.core.str(new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875).cljs$core$IFn$_invoke$arity$1(info))].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),(function (warning_type,info){
return [cljs.core.str(new cljs.core.Keyword(null,"js-op","js-op",-1046277897).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(", all arguments must be numbers, got "),cljs.core.str(new cljs.core.Keyword(null,"types","types",590030639).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" instead.")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),(function (warning_type,info){
return [cljs.core.str("Cannot invoke type constructor "),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fexpr","fexpr",-122857150).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str(" as function ")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),(function (warning_type,info){
return [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)),cljs.core.str(" is a single segment namespace")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),(function (warning_type,p__10162){
var map__10163 = p__10162;
var map__10163__$1 = ((cljs.core.seq_QMARK_(map__10163))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10163):map__10163);
var info = map__10163__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10163__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var munged = cljs.core.munge(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__10163,map__10163__$1,info,name){
return (function (p1__10161_SHARP_){
if(cljs.core.truth_((cljs.analyzer.js_reserved.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.js_reserved.cljs$core$IFn$_invoke$arity$1(p1__10161_SHARP_) : cljs.analyzer.js_reserved.call(null,p1__10161_SHARP_)))){
return [cljs.core.str(p1__10161_SHARP_),cljs.core.str("$")].join('');
} else {
return p1__10161_SHARP_;
}
});})(map__10163,map__10163__$1,info,name))
,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(name),/\./))));
return [cljs.core.str("Namespace "),cljs.core.str(name),cljs.core.str(" contains a reserved JavaScript keyword,"),cljs.core.str(" the corresponding Google Closure namespace will be munged to "),cljs.core.str(munged)].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),(function (warning_type,p__10164){
var map__10165 = p__10164;
var map__10165__$1 = ((cljs.core.seq_QMARK_(map__10165))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10165):map__10165);
var info = map__10165__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10165__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10165__$1,new cljs.core.Keyword(null,"var","var",-769682797));
return [cljs.core.str("Namespace "),cljs.core.str(ns),cljs.core.str(" clashes with var "),cljs.core.str(var$)].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),(function (warning_type,p__10166){
var map__10167 = p__10166;
var map__10167__$1 = ((cljs.core.seq_QMARK_(map__10167))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10167):map__10167);
var info = map__10167__$1;
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10167__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10167__$1,new cljs.core.Keyword(null,"method","method",55703592));
return [cljs.core.str("Bad extend-type method shape for protocol "),cljs.core.str(protocol),cljs.core.str(" method "),cljs.core.str(method),cljs.core.str(", method arities must be grouped together")].join('');
}));
cljs.analyzer.error_message.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"unsupported-js-module-type","unsupported-js-module-type",1806206180),(function (warning_type,p__10168){
var map__10169 = p__10168;
var map__10169__$1 = ((cljs.core.seq_QMARK_(map__10169))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10169):map__10169);
var info = map__10169__$1;
var module_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10169__$1,new cljs.core.Keyword(null,"module-type","module-type",1392760304));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10169__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return [cljs.core.str("Unsupported JavaScript module type "),cljs.core.str(module_type),cljs.core.str(" for foreign library "),cljs.core.str(file),cljs.core.str(".")].join('');
}));
cljs.analyzer.default_warning_handler = (function cljs$analyzer$default_warning_handler(warning_type,env,extra){
if(cljs.core.truth_((warning_type.cljs$core$IFn$_invoke$arity$1 ? warning_type.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_) : warning_type.call(null,cljs.analyzer._STAR_cljs_warnings_STAR_)))){
var temp__4425__auto__ = (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(warning_type,extra) : cljs.analyzer.error_message.call(null,warning_type,extra));
if(cljs.core.truth_(temp__4425__auto__)){
var s = temp__4425__auto__;
var _STAR_out_STAR_10173 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = cljs.core._STAR_err_STAR_;

try{return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__10174 = env;
var G__10175 = [cljs.core.str("WARNING: "),cljs.core.str(s)].join('');
return (cljs.analyzer.message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.message.cljs$core$IFn$_invoke$arity$2(G__10174,G__10175) : cljs.analyzer.message.call(null,G__10174,G__10175));
})()], 0));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_10173;
}} else {
return null;
}
} else {
return null;
}
});
cljs.analyzer._STAR_cljs_warning_handlers_STAR_ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.default_warning_handler], null);
cljs.analyzer.gen_constant_id = (function cljs$analyzer$gen_constant_id(value){
var prefix = (((value instanceof cljs.core.Keyword))?"constant$keyword$":(function(){throw (new Error([cljs.core.str("constant type "),cljs.core.str(cljs.core.type(value)),cljs.core.str(" not supported")].join('')))})()
);
var name = clojure.string.replace(cljs.core.munge(clojure.string.replace(cljs.core.subs.cljs$core$IFn$_invoke$arity$2([cljs.core.str(value)].join(''),(1)),"-","_DASH_")),".","$");
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(prefix),cljs.core.str(name)].join(''));
});
cljs.analyzer.register_constant_BANG_ = (function cljs$analyzer$register_constant_BANG_(){
var args10176 = [];
var len__5200__auto___10183 = arguments.length;
var i__5201__auto___10184 = (0);
while(true){
if((i__5201__auto___10184 < len__5200__auto___10183)){
args10176.push((arguments[i__5201__auto___10184]));

var G__10185 = (i__5201__auto___10184 + (1));
i__5201__auto___10184 = G__10185;
continue;
} else {
}
break;
}

var G__10178 = args10176.length;
switch (G__10178) {
case 1:
return cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10176.length)].join('')));

}
});

cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (val){
return cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2(null,val);
});

cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (env,val){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.env._STAR_compiler_STAR_,(function (cenv){
var G__10179 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cenv,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889)], null),(function (table){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(table,val))){
return table;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(table,val,cljs.analyzer.gen_constant_id(val));
}
}));
var G__10179__$1 = (cljs.core.truth_(env)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__10179,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword("cljs.analyzer","constants","cljs.analyzer/constants",1697083770)], null),((function (G__10179){
return (function (p__10180){
var map__10181 = p__10180;
var map__10181__$1 = ((cljs.core.seq_QMARK_(map__10181))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10181):map__10181);
var constants = map__10181__$1;
var seen = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__10181__$1,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.PersistentHashSet.EMPTY);
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__10181__$1,new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.PersistentVector.EMPTY);
var G__10182 = constants;
var G__10182__$1 = ((!(cljs.core.contains_QMARK_(seen,val)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__10182,new cljs.core.Keyword(null,"seen","seen",-518999789),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,val),cljs.core.array_seq([new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(order,val)], 0)):G__10182);
return G__10182__$1;
});})(G__10179))
):G__10179);
return G__10179__$1;
}));
});

cljs.analyzer.register_constant_BANG_.cljs$lang$maxFixedArity = 2;
cljs.analyzer.default_namespaces = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)], null),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)], null)], null);
cljs.analyzer.namespaces = (function (){
if(typeof cljs.analyzer.t10187 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.analyzer.t10187 = (function (meta10188){
this.meta10188 = meta10188;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.analyzer.t10187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10189,meta10188__$1){
var self__ = this;
var _10189__$1 = this;
return (new cljs.analyzer.t10187(meta10188__$1));
});

cljs.analyzer.t10187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10189){
var self__ = this;
var _10189__$1 = this;
return self__.meta10188;
});

cljs.analyzer.t10187.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
if(!((cljs.env._STAR_compiler_STAR_ == null))){
return new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
} else {
return cljs.analyzer.default_namespaces;
}
});

cljs.analyzer.t10187.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta10188","meta10188",1294573667,null)], null);
});

cljs.analyzer.t10187.cljs$lang$type = true;

cljs.analyzer.t10187.cljs$lang$ctorStr = "cljs.analyzer/t10187";

cljs.analyzer.t10187.cljs$lang$ctorPrWriter = (function (this__4740__auto__,writer__4741__auto__,opt__4742__auto__){
return cljs.core._write(writer__4741__auto__,"cljs.analyzer/t10187");
});

cljs.analyzer.__GT_t10187 = (function cljs$analyzer$__GT_t10187(meta10188){
return (new cljs.analyzer.t10187(meta10188));
});

}

return (new cljs.analyzer.t10187(cljs.core.PersistentArrayMap.EMPTY));
})()
;
cljs.analyzer.get_namespace = (function cljs$analyzer$get_namespace(key){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),key], null));
});
cljs.analyzer.get_line = (function cljs$analyzer$get_line(x,env){
var or__4161__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x));
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env);
}
});
cljs.analyzer.get_col = (function cljs$analyzer$get_col(x,env){
var or__4161__auto__ = new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(x));
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(env);
}
});
/**
 * Given a Clojure namespace intern all macros into the ambient ClojureScript
 * analysis environment.
 */
cljs.analyzer.intern_macros = (function cljs$analyzer$intern_macros(){
var args10190 = [];
var len__5200__auto___10197 = arguments.length;
var i__5201__auto___10198 = (0);
while(true){
if((i__5201__auto___10198 < len__5200__auto___10197)){
args10190.push((arguments[i__5201__auto___10198]));

var G__10199 = (i__5201__auto___10198 + (1));
i__5201__auto___10198 = G__10199;
continue;
} else {
}
break;
}

var G__10192 = args10190.length;
switch (G__10192) {
case 1:
return cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10190.length)].join('')));

}
});

cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$2(ns,false);
});

cljs.analyzer.intern_macros.cljs$core$IFn$_invoke$arity$2 = (function (ns,reload){
if(cljs.core.truth_((function (){var or__4161__auto__ = (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"macros","macros",811339431)], null)) == null);
if(or__4161__auto__){
return or__4161__auto__;
} else {
return reload;
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"macros","macros",811339431)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__10193){
var vec__10194 = p__10193;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10194,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10194,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var vm = cljs.core.meta(v);
var vm__$1 = (function (){var ns__$1 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(vm).getName();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(vm,new cljs.core.Keyword(null,"ns","ns",441598760),ns__$1,cljs.core.array_seq([new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(ns__$1)].join(''),[cljs.core.str(k)].join(''))], 0));
})();
return vm__$1;
})()], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__10195){
var vec__10196 = p__10195;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10196,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10196,(1),null);
return v.isMacro();
}),cljs.core.ns_interns_STAR_(ns)))));
} else {
return null;
}
});

cljs.analyzer.intern_macros.cljs$lang$maxFixedArity = 2;
/**
 * Construct an empty analysis environment. Required to analyze forms.
 */
cljs.analyzer.empty_env = (function cljs$analyzer$empty_env(){
var val__5595__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__5595__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace(cljs.analyzer._STAR_cljs_ns_STAR_),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"locals","locals",535295783),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"js-globals","js-globals",1670394727),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (val__5595__auto__){
return (function (p1__10201_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__10201_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),p1__10201_SHARP_], null)],null));
});})(val__5595__auto__))
,cljs.core.list(new cljs.core.Symbol(null,"alert","alert",1068580947,null),new cljs.core.Symbol(null,"window","window",-1929916235,null),new cljs.core.Symbol(null,"document","document",311342840,null),new cljs.core.Symbol(null,"console","console",-1426363712,null),new cljs.core.Symbol(null,"escape","escape",648929575,null),new cljs.core.Symbol(null,"unescape","unescape",-2037730561,null),new cljs.core.Symbol(null,"screen","screen",-664376021,null),new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Symbol(null,"navigator","navigator",-604431588,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"location","location",-838836381,null),new cljs.core.Symbol(null,"global","global",1734126574,null),new cljs.core.Symbol(null,"process","process",-1011242831,null),new cljs.core.Symbol(null,"require","require",1172530194,null),new cljs.core.Symbol(null,"module","module",-1229817578,null),new cljs.core.Symbol(null,"exports","exports",895523255,null))))], null);
}finally {if((val__5595__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.analyzer.source_info = (function cljs$analyzer$source_info(){
var args10202 = [];
var len__5200__auto___10205 = arguments.length;
var i__5201__auto___10206 = (0);
while(true){
if((i__5201__auto___10206 < len__5200__auto___10205)){
args10202.push((arguments[i__5201__auto___10206]));

var G__10207 = (i__5201__auto___10206 + (1));
i__5201__auto___10206 = G__10207;
continue;
} else {
}
break;
}

var G__10204 = args10202.length;
switch (G__10204) {
case 1:
return cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10202.length)].join('')));

}
});

cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$1 = (function (env){
var temp__4425__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__4425__auto__)){
var line = temp__4425__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)))?"cljs/core.cljs":cljs.analyzer._STAR_cljs_file_STAR_),new cljs.core.Keyword(null,"line","line",212345235),cljs.analyzer.get_line(cljs.core.name,env),new cljs.core.Keyword(null,"column","column",2078222095),cljs.analyzer.get_col(cljs.core.name,env)], null);
} else {
return null;
}
});

cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2 = (function (name,env){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)))?"cljs/core.cljs":cljs.analyzer._STAR_cljs_file_STAR_),new cljs.core.Keyword(null,"line","line",212345235),cljs.analyzer.get_line(name,env),new cljs.core.Keyword(null,"column","column",2078222095),cljs.analyzer.get_col(name,env)], null);
});

cljs.analyzer.source_info.cljs$lang$maxFixedArity = 2;
cljs.analyzer.message = (function cljs$analyzer$message(env,s){
return [cljs.core.str(s),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))?[cljs.core.str(" at line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env)),cljs.core.str(" "),cljs.core.str(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join('');
});
cljs.analyzer.warning = (function cljs$analyzer$warning(warning_type,env,extra){
var seq__10213 = cljs.core.seq(cljs.analyzer._STAR_cljs_warning_handlers_STAR_);
var chunk__10214 = null;
var count__10215 = (0);
var i__10216 = (0);
while(true){
if((i__10216 < count__10215)){
var handler = chunk__10214.cljs$core$IIndexed$_nth$arity$2(null,i__10216);
(handler.cljs$core$IFn$_invoke$arity$3 ? handler.cljs$core$IFn$_invoke$arity$3(warning_type,env,extra) : handler.call(null,warning_type,env,extra));

var G__10217 = seq__10213;
var G__10218 = chunk__10214;
var G__10219 = count__10215;
var G__10220 = (i__10216 + (1));
seq__10213 = G__10217;
chunk__10214 = G__10218;
count__10215 = G__10219;
i__10216 = G__10220;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10213);
if(temp__4425__auto__){
var seq__10213__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10213__$1)){
var c__4945__auto__ = cljs.core.chunk_first(seq__10213__$1);
var G__10221 = cljs.core.chunk_rest(seq__10213__$1);
var G__10222 = c__4945__auto__;
var G__10223 = cljs.core.count(c__4945__auto__);
var G__10224 = (0);
seq__10213 = G__10221;
chunk__10214 = G__10222;
count__10215 = G__10223;
i__10216 = G__10224;
continue;
} else {
var handler = cljs.core.first(seq__10213__$1);
(handler.cljs$core$IFn$_invoke$arity$3 ? handler.cljs$core$IFn$_invoke$arity$3(warning_type,env,extra) : handler.call(null,warning_type,env,extra));

var G__10225 = cljs.core.next(seq__10213__$1);
var G__10226 = null;
var G__10227 = (0);
var G__10228 = (0);
seq__10213 = G__10225;
chunk__10214 = G__10226;
count__10215 = G__10227;
i__10216 = G__10228;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.error = (function cljs$analyzer$error(){
var args10229 = [];
var len__5200__auto___10232 = arguments.length;
var i__5201__auto___10233 = (0);
while(true){
if((i__5201__auto___10233 < len__5200__auto___10232)){
args10229.push((arguments[i__5201__auto___10233]));

var G__10234 = (i__5201__auto___10233 + (1));
i__5201__auto___10233 = G__10234;
continue;
} else {
}
break;
}

var G__10231 = args10229.length;
switch (G__10231) {
case 2:
return cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10229.length)].join('')));

}
});

cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2 = (function (env,s){
return cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,s,null);
});

cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3 = (function (env,s,cause){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.message(env,s),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword("cljs","analysis-error","cljs/analysis-error",-420526349)),cause);
});

cljs.analyzer.error.cljs$lang$maxFixedArity = 3;
cljs.analyzer.analysis_error_QMARK_ = (function cljs$analyzer$analysis_error_QMARK_(ex){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("cljs","analysis-error","cljs/analysis-error",-420526349),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(ex)));
});
cljs.analyzer.implicit_import_QMARK_ = (function cljs$analyzer$implicit_import_QMARK_(env,prefix,suffix){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Symbol(null,"goog.string","goog.string",-2055533048,null),null,new cljs.core.Symbol(null,"goog","goog",-70603925,null),null,new cljs.core.Symbol(null,"goog.object","goog.object",678593132,null),null,new cljs.core.Symbol(null,"Math","Math",2033287572,null),null,new cljs.core.Symbol(null,"goog.array","goog.array",-671977860,null),null], null), null),prefix);
});
cljs.analyzer.confirm_var_exists = (function cljs$analyzer$confirm_var_exists(){
var args10237 = [];
var len__5200__auto___10240 = arguments.length;
var i__5201__auto___10241 = (0);
while(true){
if((i__5201__auto___10241 < len__5200__auto___10240)){
args10237.push((arguments[i__5201__auto___10241]));

var G__10242 = (i__5201__auto___10241 + (1));
i__5201__auto___10241 = G__10242;
continue;
} else {
}
break;
}

var G__10239 = args10237.length;
switch (G__10239) {
case 3:
return cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10237.length)].join('')));

}
});

cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$3 = (function (env,prefix,suffix){
return cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$4(env,prefix,suffix,(function (env__$1,prefix__$1,suffix__$1){
return cljs.analyzer.warning(new cljs.core.Keyword(null,"undeclared-var","undeclared-var",-1624364944),env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"prefix","prefix",-265908465),prefix__$1,new cljs.core.Keyword(null,"suffix","suffix",367373057),suffix__$1], null));
}));
});

cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$4 = (function (env,prefix,suffix,missing_fn){
var sufstr = [cljs.core.str(suffix)].join('');
var suffix__$1 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__4149__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("..",sufstr);
if(and__4149__auto__){
return cljs.core.re_find(/\./,sufstr);
} else {
return and__4149__auto__;
}
})())?cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(sufstr,/\./)):suffix));
if((!(cljs.analyzer.implicit_import_QMARK_(env,prefix,suffix__$1))) && (cljs.core.not((function (){var and__4149__auto__ = cljs.core.not(cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),prefix));
if(and__4149__auto__){
var or__4161__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"requires","requires",-1201390927).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),prefix);
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"imports","imports",-1249933394).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),prefix);
}
} else {
return and__4149__auto__;
}
})())) && (!((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prefix,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(suffix__$1,new cljs.core.Symbol(null,"unquote","unquote",-1004694737,null))))) && (cljs.core.not(cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),prefix,new cljs.core.Keyword(null,"defs","defs",1398449717),suffix__$1)))){
return (missing_fn.cljs$core$IFn$_invoke$arity$3 ? missing_fn.cljs$core$IFn$_invoke$arity$3(env,prefix,suffix__$1) : missing_fn.call(null,env,prefix,suffix__$1));
} else {
return null;
}
});

cljs.analyzer.confirm_var_exists.cljs$lang$maxFixedArity = 4;
cljs.analyzer.confirm_var_exists_throw = (function cljs$analyzer$confirm_var_exists_throw(){
return (function (env,prefix,suffix){
return cljs.analyzer.confirm_var_exists.cljs$core$IFn$_invoke$arity$4(env,prefix,suffix,(function (env__$1,prefix__$1,suffix__$1){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env__$1,[cljs.core.str("Unable to resolve var: "),cljs.core.str(suffix__$1),cljs.core.str(" in this context")].join(''));
}));
});
});
cljs.analyzer.resolve_ns_alias = (function cljs$analyzer$resolve_ns_alias(env,name){
var sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(name);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"requires","requires",-1201390927).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),sym,sym);
});
cljs.analyzer.resolve_macro_ns_alias = (function cljs$analyzer$resolve_macro_ns_alias(env,name){
var sym = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(name);
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"require-macros","require-macros",707947416).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),sym,sym);
});
/**
 * Given env, an analysis environment, and ns-sym, a symbol identifying a
 * namespace, confirm that the namespace exists. Warn if not found.
 */
cljs.analyzer.confirm_ns = (function cljs$analyzer$confirm_ns(env,ns_sym){
if(((cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"goog.string","goog.string",-2055533048,null),null,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),null,new cljs.core.Symbol(null,"goog","goog",-70603925,null),null,new cljs.core.Symbol(null,"Math","Math",2033287572,null),null], null), null),ns_sym) == null)) && ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"requires","requires",-1201390927).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),ns_sym) == null)) && ((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_sym) == null))){
return cljs.analyzer.warning(new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),ns_sym], null));
} else {
return null;
}
});
/**
 * Is sym visible from core in the current compilation namespace?
 */
cljs.analyzer.core_name_QMARK_ = (function cljs$analyzer$core_name_QMARK_(env,sym){
var and__4149__auto__ = (function (){var or__4161__auto__ = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Keyword(null,"defs","defs",1398449717),sym);
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
var temp__4425__auto__ = (cljs.analyzer.get_expander.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.get_expander.cljs$core$IFn$_invoke$arity$2(sym,env) : cljs.analyzer.get_expander.call(null,sym,env));
if(cljs.core.truth_(temp__4425__auto__)){
var mac = temp__4425__auto__;
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(mac));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns.getName(),new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null));
} else {
return null;
}
}
})();
if(cljs.core.truth_(and__4149__auto__)){
return !(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"excludes","excludes",-1791725945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),sym));
} else {
return and__4149__auto__;
}
});
/**
 * Resolve a var. Accepts a side-effecting confirm fn for producing
 * warnings about unresolved vars.
 */
cljs.analyzer.resolve_var = (function cljs$analyzer$resolve_var(){
var args10244 = [];
var len__5200__auto___10252 = arguments.length;
var i__5201__auto___10253 = (0);
while(true){
if((i__5201__auto___10253 < len__5200__auto___10252)){
args10244.push((arguments[i__5201__auto___10253]));

var G__10254 = (i__5201__auto___10253 + (1));
i__5201__auto___10253 = G__10254;
continue;
} else {
}
break;
}

var G__10246 = args10244.length;
switch (G__10246) {
case 2:
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10244.length)].join('')));

}
});

cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2 = (function (env,sym){
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(env,sym,null);
});

cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3 = (function (env,sym,confirm){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(sym),"js")){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sym,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"js","js",-886355190,null)], null);
} else {
var s = [cljs.core.str(sym)].join('');
var lb = (function (){var G__10247 = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env);
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__10247) : sym.call(null,G__10247));
})();
if(cljs.core.truth_(lb)){
return lb;
} else {
if(cljs.core.truth_(cljs.core.namespace(sym))){
var ns = cljs.core.namespace(sym);
var ns__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("clojure.core",ns))?"cljs.core":ns);
var full_ns = cljs.analyzer.resolve_ns_alias(env,ns__$1);
if(cljs.core.truth_(confirm)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),full_ns)){
cljs.analyzer.confirm_ns(env,full_ns);
} else {
}

var G__10248_10256 = env;
var G__10249_10257 = full_ns;
var G__10250_10258 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym));
(confirm.cljs$core$IFn$_invoke$arity$3 ? confirm.cljs$core$IFn$_invoke$arity$3(G__10248_10256,G__10249_10257,G__10250_10258) : confirm.call(null,G__10248_10256,G__10249_10257,G__10250_10258));
} else {
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),full_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(full_ns)].join(''),[cljs.core.str(cljs.core.name(sym))].join('')),new cljs.core.Keyword(null,"ns","ns",441598760),full_ns], null)], 0));
} else {
if(cljs.core.truth_((function (){var and__4149__auto__ = goog.string.contains(s,".");
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not(goog.string.contains(s,".."));
} else {
return and__4149__auto__;
}
})())){
var idx = s.indexOf(".");
var prefix = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),idx));
var suffix = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(idx + (1)));
var lb__$1 = (function (){var G__10251 = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env);
return (prefix.cljs$core$IFn$_invoke$arity$1 ? prefix.cljs$core$IFn$_invoke$arity$1(G__10251) : prefix.call(null,G__10251));
})();
if(cljs.core.truth_(lb__$1)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(lb__$1))].join(''),suffix)], null);
} else {
var cur_ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
var temp__4423__auto__ = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cur_ns,new cljs.core.Keyword(null,"imports","imports",-1249933394),prefix);
if(cljs.core.truth_(temp__4423__auto__)){
var full_ns = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(full_ns)].join(''),suffix)], null);
} else {
var temp__4423__auto____$1 = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cur_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),prefix);
if(cljs.core.truth_(temp__4423__auto____$1)){
var info = temp__4423__auto____$1;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([info,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(cur_ns)].join(''),[cljs.core.str(sym)].join('')),new cljs.core.Keyword(null,"ns","ns",441598760),cur_ns], null)], 0));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),prefix,new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(suffix)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",prefix))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(suffix):cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(prefix)].join(''),suffix)),new cljs.core.Keyword(null,"ns","ns",441598760),prefix], null)], 0));
}
}
}
} else {
if(cljs.core.truth_(cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"uses","uses",232664692),sym))){
var full_ns = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"uses","uses",232664692),sym);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),full_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),sym),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(full_ns)].join(''),[cljs.core.str(sym)].join('')),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env))], null)], 0));
} else {
if(cljs.core.truth_(cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"imports","imports",-1249933394),sym))){
var G__10259 = env;
var G__10260 = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"imports","imports",-1249933394),sym);
var G__10261 = confirm;
env = G__10259;
sym = G__10260;
confirm = G__10261;
continue;
} else {
var cur_ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
var full_ns = (cljs.core.truth_(cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cur_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),sym))?cur_ns:((cljs.analyzer.core_name_QMARK_(env,sym))?new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null):cur_ns
));
if(cljs.core.truth_(confirm)){
(confirm.cljs$core$IFn$_invoke$arity$3 ? confirm.cljs$core$IFn$_invoke$arity$3(env,full_ns,sym) : confirm.call(null,env,full_ns,sym));
} else {
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),full_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),sym),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(full_ns)].join(''),[cljs.core.str(sym)].join('')),new cljs.core.Keyword(null,"ns","ns",441598760),full_ns], null)], 0));

}
}
}
}
}
}
break;
}
});

cljs.analyzer.resolve_var.cljs$lang$maxFixedArity = 3;
/**
 * Given env, an analysis environment, and sym, a symbol, resolve an existing var.
 * Emits a warning if no such var exists.
 */
cljs.analyzer.resolve_existing_var = (function cljs$analyzer$resolve_existing_var(env,sym){
if(cljs.core.not(new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym)))){
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(env,sym,cljs.analyzer.confirm_var_exists);
} else {
return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,sym);
}
});
/**
 * Given env, an analysis environment env, and names, a list of symbols, confirm
 * that all correspond to declared dynamic vars.
 */
cljs.analyzer.confirm_bindings = (function cljs$analyzer$confirm_bindings(env,names){
var seq__10266 = cljs.core.seq(names);
var chunk__10267 = null;
var count__10268 = (0);
var i__10269 = (0);
while(true){
if((i__10269 < count__10268)){
var name = chunk__10267.cljs$core$IIndexed$_nth$arity$2(null,i__10269);
var env_10270__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace(cljs.analyzer._STAR_cljs_ns_STAR_));
var ev_10271 = cljs.analyzer.resolve_existing_var(env_10270__$1,name);
if(cljs.core.truth_((function (){var and__4149__auto__ = ev_10271;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(ev_10271));
} else {
return and__4149__auto__;
}
})())){
cljs.analyzer.warning(new cljs.core.Keyword(null,"dynamic","dynamic",704819571),env_10270__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ev","ev",-406827324),ev_10271,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ev_10271)], null));
} else {
}

var G__10272 = seq__10266;
var G__10273 = chunk__10267;
var G__10274 = count__10268;
var G__10275 = (i__10269 + (1));
seq__10266 = G__10272;
chunk__10267 = G__10273;
count__10268 = G__10274;
i__10269 = G__10275;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10266);
if(temp__4425__auto__){
var seq__10266__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10266__$1)){
var c__4945__auto__ = cljs.core.chunk_first(seq__10266__$1);
var G__10276 = cljs.core.chunk_rest(seq__10266__$1);
var G__10277 = c__4945__auto__;
var G__10278 = cljs.core.count(c__4945__auto__);
var G__10279 = (0);
seq__10266 = G__10276;
chunk__10267 = G__10277;
count__10268 = G__10278;
i__10269 = G__10279;
continue;
} else {
var name = cljs.core.first(seq__10266__$1);
var env_10280__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.analyzer.get_namespace(cljs.analyzer._STAR_cljs_ns_STAR_));
var ev_10281 = cljs.analyzer.resolve_existing_var(env_10280__$1,name);
if(cljs.core.truth_((function (){var and__4149__auto__ = ev_10281;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(ev_10281));
} else {
return and__4149__auto__;
}
})())){
cljs.analyzer.warning(new cljs.core.Keyword(null,"dynamic","dynamic",704819571),env_10280__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ev","ev",-406827324),ev_10281,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ev_10281)], null));
} else {
}

var G__10282 = cljs.core.next(seq__10266__$1);
var G__10283 = null;
var G__10284 = (0);
var G__10285 = (0);
seq__10266 = G__10282;
chunk__10267 = G__10283;
count__10268 = G__10284;
i__10269 = G__10285;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given env, an analysis environment, and sym, a symbol, resolve a macro.
 */
cljs.analyzer.resolve_macro_var = (function cljs$analyzer$resolve_macro_var(env,sym){
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927));
if(cljs.core.truth_(cljs.core.namespace(sym))){
var ns__$1 = cljs.core.namespace(sym);
var ns__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("clojure.core",ns__$1))?"cljs.core":ns__$1);
var full_ns = cljs.analyzer.resolve_macro_ns_alias(env,ns__$2);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_ns,new cljs.core.Keyword(null,"macros","macros",811339431),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym))], null));
} else {
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),sym], null)))){
var full_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),sym], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_ns,new cljs.core.Keyword(null,"macros","macros",811339431),sym], null));
} else {
var ns__$1 = (cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,new cljs.core.Keyword(null,"macros","macros",811339431),sym], null)))?ns:((cljs.analyzer.core_name_QMARK_(env,sym))?new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null):null));
if(cljs.core.truth_(ns__$1)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(namespaces,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns__$1,new cljs.core.Keyword(null,"macros","macros",811339431),sym], null));
} else {
return null;
}

}
}
});
/**
 * Given a namespace as a symbol and a map from namespace symbol to
 * namespace information return the topologically sorted list of all
 * dependent namespaces. The map values of the optional second argument must
 * be maps with a :requires set of symbols, a :requires map of symbol -> alias
 * (analyzer format) or a :requires vector of munged namespace strings
 * (closure format).
 */
cljs.analyzer.ns_dependents = (function cljs$analyzer$ns_dependents(){
var args10287 = [];
var len__5200__auto___10300 = arguments.length;
var i__5201__auto___10301 = (0);
while(true){
if((i__5201__auto___10301 < len__5200__auto___10300)){
args10287.push((arguments[i__5201__auto___10301]));

var G__10302 = (i__5201__auto___10301 + (1));
i__5201__auto___10301 = G__10302;
continue;
} else {
}
break;
}

var G__10289 = args10287.length;
switch (G__10289) {
case 1:
return cljs.analyzer.ns_dependents.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.ns_dependents.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10287.length)].join('')));

}
});

cljs.analyzer.ns_dependents.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return cljs.analyzer.ns_dependents.cljs$core$IFn$_invoke$arity$2(ns,cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927)));
});

cljs.analyzer.ns_dependents.cljs$core$IFn$_invoke$arity$2 = (function (ns,ns_map){
var parent_QMARK_ = (function cljs$analyzer$parent_QMARK_(parent,p__10295){
var vec__10298 = p__10295;
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10298,(0),null);
var map__10299 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10298,(1),null);
var map__10299__$1 = ((cljs.core.seq_QMARK_(map__10299))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10299):map__10299);
var ns_info = map__10299__$1;
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10299__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent,child)){
return null;
} else {
if((cljs.core.map_QMARK_(requires)) || (cljs.core.set_QMARK_(requires))){
return cljs.core.contains_QMARK_(requires,parent);
} else {
if(cljs.core.vector_QMARK_(requires)){
return cljs.core.some(cljs.core.PersistentHashSet.fromArray([cljs.core.munge(cljs.core.name(parent))], true),requires);
} else {
return null;
}
}
}
});
return cljs.analyzer.topo_sort.cljs$core$IFn$_invoke$arity$2(ns,(function (ns_SINGLEQUOTE_){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__10286_SHARP_){
return parent_QMARK_(ns_SINGLEQUOTE_,p1__10286_SHARP_);
}),ns_map)));
}));
});

cljs.analyzer.ns_dependents.cljs$lang$maxFixedArity = 2;


cljs.analyzer.specials = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 21, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null,new cljs.core.Symbol(null,"case*","case*",-1938255072,null),null,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null),null,new cljs.core.Symbol(null,"try","try",-1273693247,null),null,new cljs.core.Symbol(null,"loop*","loop*",615029416,null),null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),null,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null),null,new cljs.core.Symbol(null,"let*","let*",1920721458,null),null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),null,new cljs.core.Symbol(null,"set!","set!",250714521,null),null,new cljs.core.Symbol(null,".",".",1975675962,null),null,new cljs.core.Symbol(null,"var","var",870848730,null),null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,new cljs.core.Symbol(null,"def","def",597100991,null),null], null), null);
cljs.analyzer._STAR_recur_frames_STAR_ = null;
cljs.analyzer._STAR_loop_lets_STAR_ = cljs.core.List.EMPTY;
cljs.analyzer._STAR_allow_redef_STAR_ = false;
cljs.analyzer.analyze_keyword = (function cljs$analyzer$analyze_keyword(env,sym){
cljs.analyzer.register_constant_BANG_.cljs$core$IFn$_invoke$arity$2(env,sym);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),sym,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)], null);
});
cljs.analyzer.get_tag = (function cljs$analyzer$get_tag(e){
var tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(e);
if(!((tag == null))){
return tag;
} else {
var tag__$1 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(e));
if(!((tag__$1 == null))){
return tag__$1;
} else {
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(e)));
}
}
});
cljs.analyzer.find_matching_method = (function cljs$analyzer$find_matching_method(f,params){
var methods$ = (function (){var or__4161__auto__ = new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(f);
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f));
}
})();
var c = cljs.core.count(params);
return cljs.core.some(((function (methods$,c){
return (function (m){
var and__4149__auto__ = (function (){var or__4161__auto__ = (new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(m) === c);
if(or__4161__auto__){
return or__4161__auto__;
} else {
return new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m);
}
})();
if(cljs.core.truth_(and__4149__auto__)){
return m;
} else {
return and__4149__auto__;
}
});})(methods$,c))
,methods$);
});
cljs.analyzer.type_QMARK_ = (function cljs$analyzer$type_QMARK_(env,t){
if((!((t == null))) && ((t instanceof cljs.core.Symbol))){
var var$ = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env,t);
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(var$);
if(!((type == null))){
return type;
} else {
var type__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$));
if(!((type__$1 == null))){
return type__$1;
} else {
var proto = new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$);
if(!((proto == null))){
return proto;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null),null,new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null),null], null), null),t);
}
}
}
} else {
return null;
}
});
cljs.analyzer.NOT_NATIVE = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null),null], null), null);
cljs.analyzer.BOOLEAN_OR_SEQ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null);
cljs.analyzer.infer_if = (function cljs$analyzer$infer_if(env,e){
var map__10310 = e;
var map__10310__$1 = ((cljs.core.seq_QMARK_(map__10310))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10310):map__10310);
var map__10311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10310__$1,new cljs.core.Keyword(null,"test","test",577538877));
var map__10311__$1 = ((cljs.core.seq_QMARK_(map__10311))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10311):map__10311);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10311__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10311__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var then_tag = (function (){var G__10312 = env;
var G__10313 = new cljs.core.Keyword(null,"then","then",460598070).cljs$core$IFn$_invoke$arity$1(e);
return (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(G__10312,G__10313) : cljs.analyzer.infer_tag.call(null,G__10312,G__10313));
})();
if((cljs.core.keyword_identical_QMARK_(op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && (!((form == null))) && (!(form === false))){
return then_tag;
} else {
var else_tag = (function (){var G__10314 = env;
var G__10315 = new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(e);
return (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(G__10314,G__10315) : cljs.analyzer.infer_tag.call(null,G__10314,G__10315));
})();
if((cljs.core.symbol_identical_QMARK_(then_tag,else_tag)) || (cljs.core.symbol_identical_QMARK_(else_tag,cljs.analyzer.IGNORE_SYM))){
return then_tag;
} else {
if(cljs.core.symbol_identical_QMARK_(then_tag,cljs.analyzer.IGNORE_SYM)){
return else_tag;
} else {
if(((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.NOT_NATIVE,then_tag) == null))) || (cljs.analyzer.type_QMARK_(env,then_tag))) && ((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.NOT_NATIVE,else_tag) == null))) || (cljs.analyzer.type_QMARK_(env,else_tag)))){
return new cljs.core.Symbol(null,"clj","clj",980036099,null);
} else {
if((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.BOOLEAN_OR_SEQ,then_tag) == null))) && (!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.BOOLEAN_OR_SEQ,else_tag) == null)))){
return new cljs.core.Symbol(null,"seq","seq",-177272256,null);
} else {
var then_tag__$1 = ((cljs.analyzer.cljs_set_QMARK_(then_tag))?then_tag:cljs.core.PersistentHashSet.fromArray([then_tag], true));
var else_tag__$1 = ((cljs.analyzer.cljs_set_QMARK_(else_tag))?else_tag:cljs.core.PersistentHashSet.fromArray([else_tag], true));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(then_tag__$1,else_tag__$1);
}

}
}
}
}
});
cljs.analyzer.infer_invoke = (function cljs$analyzer$infer_invoke(env,e){
var map__10317 = new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(e);
var map__10317__$1 = ((cljs.core.seq_QMARK_(map__10317))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10317):map__10317);
var f = map__10317__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10317__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var ret_tag = (((new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info) == null))?null:new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990).cljs$core$IFn$_invoke$arity$1(info));
if(!((ret_tag == null))){
return ret_tag;
} else {
var args = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(e);
var me = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.find_matching_method(f,args),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"method","method",55703592));
var ret_tag__$1 = (cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.infer_tag.cljs$core$IFn$_invoke$arity$2(env,me) : cljs.analyzer.infer_tag.call(null,env,me));
if(!((ret_tag__$1 == null))){
return ret_tag__$1;
} else {
return cljs.analyzer.ANY_SYM;
}
}
});
/**
 * Given env, an analysis environment, and e, an AST node, return the inferred
 * type of the node
 */
cljs.analyzer.infer_tag = (function cljs$analyzer$infer_tag(env,e){
var temp__4423__auto__ = cljs.analyzer.get_tag(e);
if(cljs.core.truth_(temp__4423__auto__)){
var tag = temp__4423__auto__;
return tag;
} else {
var G__10334 = (((new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(e) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(e).fqn:null);
switch (G__10334) {
case "js":
return cljs.analyzer.ANY_SYM;

break;
case "let":
return cljs$analyzer$infer_tag(env,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(e));

break;
case "do":
return cljs$analyzer$infer_tag(env,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(e));

break;
case "if":
return cljs.analyzer.infer_if(env,e);

break;
case "method":
return cljs$analyzer$infer_tag(env,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(e));

break;
case "constant":
var G__10335 = new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(e);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__10335)){
return cljs.analyzer.BOOLEAN_SYM;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__10335)){
return cljs.analyzer.BOOLEAN_SYM;
} else {
return cljs.analyzer.ANY_SYM;

}
}

break;
case "recur":
return cljs.analyzer.IGNORE_SYM;

break;
case "loop":
return cljs$analyzer$infer_tag(env,new cljs.core.Keyword(null,"expr","expr",745722291).cljs$core$IFn$_invoke$arity$1(e));

break;
case "var":
if(cljs.core.truth_(new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(e))){
return cljs$analyzer$infer_tag(env,new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(e));
} else {
return cljs$analyzer$infer_tag(env,new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(e));
}

break;
case "invoke":
return cljs.analyzer.infer_invoke(env,e);

break;
case "throw":
return cljs.analyzer.IGNORE_SYM;

break;
case "def":
return cljs$analyzer$infer_tag(env,new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(e));

break;
case "dot":
return cljs.analyzer.ANY_SYM;

break;
default:
return null;

}
}
});
if(typeof cljs.analyzer.parse !== 'undefined'){
} else {
cljs.analyzer.parse = (function (){var method_table__5055__auto__ = (function (){var G__10337 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10337) : cljs.core.atom.call(null,G__10337));
})();
var prefer_table__5056__auto__ = (function (){var G__10338 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10338) : cljs.core.atom.call(null,G__10338));
})();
var method_cache__5057__auto__ = (function (){var G__10339 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10339) : cljs.core.atom.call(null,G__10339));
})();
var cached_hierarchy__5058__auto__ = (function (){var G__10340 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10340) : cljs.core.atom.call(null,G__10340));
})();
var hierarchy__5059__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.analyzer","parse"),((function (method_table__5055__auto__,prefer_table__5056__auto__,method_cache__5057__auto__,cached_hierarchy__5058__auto__,hierarchy__5059__auto__){
return (function() { 
var G__10341__delegate = function (op,rest){
return op;
};
var G__10341 = function (op,var_args){
var rest = null;
if (arguments.length > 1) {
var G__10342__i = 0, G__10342__a = new Array(arguments.length -  1);
while (G__10342__i < G__10342__a.length) {G__10342__a[G__10342__i] = arguments[G__10342__i + 1]; ++G__10342__i;}
  rest = new cljs.core.IndexedSeq(G__10342__a,0);
} 
return G__10341__delegate.call(this,op,rest);};
G__10341.cljs$lang$maxFixedArity = 1;
G__10341.cljs$lang$applyTo = (function (arglist__10343){
var op = cljs.core.first(arglist__10343);
var rest = cljs.core.rest(arglist__10343);
return G__10341__delegate(op,rest);
});
G__10341.cljs$core$IFn$_invoke$arity$variadic = G__10341__delegate;
return G__10341;
})()
;})(method_table__5055__auto__,prefer_table__5056__auto__,method_cache__5057__auto__,cached_hierarchy__5058__auto__,hierarchy__5059__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5059__auto__,method_table__5055__auto__,prefer_table__5056__auto__,method_cache__5057__auto__,cached_hierarchy__5058__auto__));
})();
}
cljs.analyzer.var_ast = (function cljs$analyzer$var_ast(env,sym){
var var$ = cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(env,sym,cljs.analyzer.confirm_var_exists_throw());
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var temp__4423__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(temp__4423__auto__)){
var var_ns = temp__4423__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"var","var",-769682797),(cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,sym) : cljs.analyzer.analyze.call(null,expr_env,sym)),new cljs.core.Keyword(null,"sym","sym",-1444860305),(function (){var G__10348 = expr_env;
var G__10349 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.name(var_ns),cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$)))))));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__10348,G__10349) : cljs.analyzer.analyze.call(null,G__10348,G__10349));
})(),new cljs.core.Keyword(null,"meta","meta",1499536964),(function (){var ks = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null);
var m = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var user_meta = new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(var$);
var uks = cljs.core.keys(user_meta);
return cljs.core.zipmap(uks,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (user_meta,uks,ks,var_ns,temp__4423__auto__,var$,expr_env){
return (function (p1__10344_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(user_meta,p1__10344_SHARP_)),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
});})(user_meta,uks,ks,var_ns,temp__4423__auto__,var$,expr_env))
,uks));
})(),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.zipmap(ks,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ks,var_ns,temp__4423__auto__,var$,expr_env){
return (function (p1__10345_SHARP_){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(var$,p1__10345_SHARP_)),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
});})(ks,var_ns,temp__4423__auto__,var$,expr_env))
,ks)),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$))))))),cljs.core.array_seq([new cljs.core.Keyword(null,"test","test",577538877),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","when","cljs.core/when",120293186,null)),cljs.core._conj(cljs.core.List.EMPTY,sym),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$test",".-cljs$lang$test",718963148,null)),cljs.core._conj(cljs.core.List.EMPTY,sym)))))], 0)))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var arglists = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(var$);
var arglists_SINGLEQUOTE_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists)))?cljs.core.second(arglists):arglists);
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.with_meta,arglists_SINGLEQUOTE_,new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838).cljs$core$IFn$_invoke$arity$1(var$)))),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
})()], 0))], 0));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,m) : cljs.analyzer.analyze.call(null,expr_env,m));
})()], null);
} else {
return null;
}
});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"var","var",870848730,null),(function (op,env,p__10350,_,___$1){
var vec__10351 = p__10350;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10351,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10351,(1),null);
var form = vec__10351;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"form","form",-1624062471),form], null),cljs.analyzer.var_ast(env,sym)], 0));
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"if","if",1181717262,null),(function (op,env,p__10352,name,_){
var vec__10353 = p__10352;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10353,(0),null);
var test = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10353,(1),null);
var then = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10353,(2),null);
var else$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10353,(3),null);
var form = vec__10353;
if((cljs.core.count(form) < (3))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Too few arguments to if");
} else {
}

if((cljs.core.count(form) > (4))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Too many arguments to if");
} else {
}

var test_expr = (function (){var _STAR_recur_frames_STAR_10354 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var G__10355 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var G__10356 = test;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__10355,G__10356) : cljs.analyzer.analyze.call(null,G__10355,G__10356));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_10354;
}})();
var then_expr = (function (){var _STAR_allow_redef_STAR_10357 = cljs.analyzer._STAR_allow_redef_STAR_;
cljs.analyzer._STAR_allow_redef_STAR_ = true;

try{return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,then) : cljs.analyzer.analyze.call(null,env,then));
}finally {cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR_10357;
}})();
var else_expr = (function (){var _STAR_allow_redef_STAR_10358 = cljs.analyzer._STAR_allow_redef_STAR_;
cljs.analyzer._STAR_allow_redef_STAR_ = true;

try{return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,else$) : cljs.analyzer.analyze.call(null,env,else$));
}finally {cljs.analyzer._STAR_allow_redef_STAR_ = _STAR_allow_redef_STAR_10358;
}})();
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"if","if",-458814265),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"test","test",577538877),test_expr,new cljs.core.Keyword(null,"then","then",460598070),then_expr,new cljs.core.Keyword(null,"else","else",-1508377146),else_expr,new cljs.core.Keyword(null,"unchecked","unchecked",924418378),cljs.core._STAR_unchecked_if_STAR_,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [test_expr,then_expr,else_expr], null)], null);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"case*","case*",-1938255072,null),(function (op,env,p__10361,name,_){
var vec__10362 = p__10361;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10362,(0),null);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10362,(1),null);
var tests = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10362,(2),null);
var thens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10362,(3),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10362,(4),null);
var form = vec__10362;
if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("case* must switch on symbol"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),new cljs.core.Symbol(null,"sym","sym",195671222,null))], 0)))].join('')));
}

if(cljs.core.every_QMARK_(cljs.core.vector_QMARK_,tests)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("case* tests must be grouped in vectors"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Symbol(null,"tests","tests",599445902,null))], 0)))].join('')));
}

var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var v = (function (){var _STAR_recur_frames_STAR_10363 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,sym) : cljs.analyzer.analyze.call(null,expr_env,sym));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_10363;
}})();
var tests__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (expr_env,v,vec__10362,___$1,sym,tests,thens,default$,form){
return (function (p1__10359_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (expr_env,v,vec__10362,___$1,sym,tests,thens,default$,form){
return (function (t){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,t) : cljs.analyzer.analyze.call(null,expr_env,t));
});})(expr_env,v,vec__10362,___$1,sym,tests,thens,default$,form))
,p1__10359_SHARP_);
});})(expr_env,v,vec__10362,___$1,sym,tests,thens,default$,form))
,tests);
var thens__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (expr_env,v,tests__$1,vec__10362,___$1,sym,tests,thens,default$,form){
return (function (p1__10360_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,p1__10360_SHARP_) : cljs.analyzer.analyze.call(null,env,p1__10360_SHARP_));
});})(expr_env,v,tests__$1,vec__10362,___$1,sym,tests,thens,default$,form))
,thens);
var default$__$1 = (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,default$) : cljs.analyzer.analyze.call(null,env,default$));
if(cljs.core.every_QMARK_(((function (expr_env,v,tests__$1,thens__$1,default$__$1,vec__10362,___$1,sym,tests,thens,default$,form){
return (function (t){
var or__4161__auto__ = new cljs.core.Keyword(null,"const","const",1709929842).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(t));
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
var and__4149__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(t));
if(and__4149__auto__){
return cljs.core.some_fn.cljs$core$IFn$_invoke$arity$3(cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.char_QMARK_).call(null,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(t));
} else {
return and__4149__auto__;
}
}
});})(expr_env,v,tests__$1,thens__$1,default$__$1,vec__10362,___$1,sym,tests,thens,default$,form))
,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,tests__$1))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("case* tests must be numbers, strings, or constants"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null)], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"const","const",1709929842)),cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Keyword(null,"constant","constant",-379609303),cljs.core.list(new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"t","t",242699008,null))),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"some-fn","some-fn",-490044165,null),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),new cljs.core.Symbol(null,"string?","string?",-1129175764,null),new cljs.core.Symbol(null,"char?","char?",-1072221244,null)),cljs.core.list(new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"t","t",242699008,null)))))),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"concat","concat",-467652465,null),new cljs.core.Symbol(null,"tests","tests",599445902,null)))], 0)))].join('')));
}

return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"case*","case*",716180697),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"v","v",21465059),v,new cljs.core.Keyword(null,"tests","tests",-1041085625),tests__$1,new cljs.core.Keyword(null,"thens","thens",226631442),thens__$1,new cljs.core.Keyword(null,"default","default",-1987822328),default$__$1,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null),tests__$1,cljs.core.array_seq([thens__$1,(cljs.core.truth_(default$__$1)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$__$1], null):null)], 0)))], null);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),(function (op,env,p__10364,name,_){
var vec__10365 = p__10364;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10365,(0),null);
var throw$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10365,(1),null);
var form = vec__10365;
var throw_expr = (function (){var _STAR_recur_frames_STAR_10366 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var G__10367 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var G__10368 = throw$;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__10367,G__10368) : cljs.analyzer.analyze.call(null,G__10367,G__10368));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_10366;
}})();
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"throw","throw",-1044625833),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"throw","throw",-1044625833),throw_expr,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [throw_expr], null)], null);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"try","try",-1273693247,null),(function (op,env,p__10373,name,_){
var vec__10374 = p__10373;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10374,(0),null);
var body = cljs.core.nthnext(vec__10374,(1));
var form = vec__10374;
var catchenv = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",-830191113)], null),((function (vec__10374,___$1,body,form){
return (function (p1__10369_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),p1__10369_SHARP_)){
return new cljs.core.Keyword(null,"return","return",-1891502105);
} else {
return p1__10369_SHARP_;
}
});})(vec__10374,___$1,body,form))
);
var catch_QMARK_ = cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,((function (catchenv,vec__10374,___$1,body,form){
return (function (p1__10370_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__10370_SHARP_),new cljs.core.Symbol(null,"catch","catch",-1616370245,null));
});})(catchenv,vec__10374,___$1,body,form))
);
var default_QMARK_ = cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(catch_QMARK_,((function (catchenv,catch_QMARK_,vec__10374,___$1,body,form){
return (function (p1__10371_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.second(p1__10371_SHARP_),new cljs.core.Keyword(null,"default","default",-1987822328));
});})(catchenv,catch_QMARK_,vec__10374,___$1,body,form))
);
var finally_QMARK_ = cljs.core.every_pred.cljs$core$IFn$_invoke$arity$2(cljs.core.seq_QMARK_,((function (catchenv,catch_QMARK_,default_QMARK_,vec__10374,___$1,body,form){
return (function (p1__10372_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__10372_SHARP_),new cljs.core.Symbol(null,"finally","finally",-1065347064,null));
});})(catchenv,catch_QMARK_,default_QMARK_,vec__10374,___$1,body,form))
);
var map__10375 = (function (){var parser = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"forms","forms",2045992350),body,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"cblocks","cblocks",-1769978138),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"dblock","dblock",-1325623381),null,new cljs.core.Keyword(null,"fblock","fblock",-1236607426),null], null);
while(true){
if(cljs.core.seq_QMARK_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(parser))){
var vec__10376 = new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(parser);
var form__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10376,(0),null);
var forms_STAR_ = cljs.core.nthnext(vec__10376,(1));
var parser_STAR_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,new cljs.core.Keyword(null,"forms","forms",2045992350),forms_STAR_);
var G__10377 = (((new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(parser) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(parser).fqn:null);
switch (G__10377) {
case "start":
if(cljs.core.truth_((catch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? catch_QMARK_.cljs$core$IFn$_invoke$arity$1(form__$1) : catch_QMARK_.call(null,form__$1)))){
var G__10388 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"catches","catches",-1478797617));
parser = G__10388;
continue;
} else {
if(cljs.core.truth_((finally_QMARK_.cljs$core$IFn$_invoke$arity$1 ? finally_QMARK_.cljs$core$IFn$_invoke$arity$1(form__$1) : finally_QMARK_.call(null,form__$1)))){
var G__10389 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"finally","finally",1589088705));
parser = G__10389;
continue;
} else {
var G__10390 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parser_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),cljs.core.conj,form__$1);
parser = G__10390;
continue;

}
}

break;
case "catches":
if(cljs.core.truth_((default_QMARK_.cljs$core$IFn$_invoke$arity$1 ? default_QMARK_.cljs$core$IFn$_invoke$arity$1(form__$1) : default_QMARK_.call(null,form__$1)))){
var G__10391 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parser_STAR_,new cljs.core.Keyword(null,"dblock","dblock",-1325623381),form__$1,cljs.core.array_seq([new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"finally","finally",1589088705)], 0));
parser = G__10391;
continue;
} else {
if(cljs.core.truth_((catch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? catch_QMARK_.cljs$core$IFn$_invoke$arity$1(form__$1) : catch_QMARK_.call(null,form__$1)))){
var G__10392 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(parser_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cblocks","cblocks",-1769978138)], null),cljs.core.conj,form__$1);
parser = G__10392;
continue;
} else {
if(cljs.core.truth_((finally_QMARK_.cljs$core$IFn$_invoke$arity$1 ? finally_QMARK_.cljs$core$IFn$_invoke$arity$1(form__$1) : finally_QMARK_.call(null,form__$1)))){
var G__10393 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parser,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"finally","finally",1589088705));
parser = G__10393;
continue;
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Invalid try form");

}
}
}

break;
case "finally":
var G__10394 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(parser_STAR_,new cljs.core.Keyword(null,"fblock","fblock",-1236607426),form__$1,cljs.core.array_seq([new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"done","done",-889844188)], 0));
parser = G__10394;
continue;

break;
case "done":
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Unexpected form after finally");

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(parser))].join('')));

}
} else {
return parser;
}
break;
}
})();
var map__10375__$1 = ((cljs.core.seq_QMARK_(map__10375))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10375):map__10375);
var body__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10375__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var cblocks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10375__$1,new cljs.core.Keyword(null,"cblocks","cblocks",-1769978138));
var dblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10375__$1,new cljs.core.Keyword(null,"dblock","dblock",-1325623381));
var fblock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10375__$1,new cljs.core.Keyword(null,"fblock","fblock",-1236607426));
var finally$ = ((cljs.core.seq(fblock))?(function (){var G__10378 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863));
var G__10379 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.rest(fblock))));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__10378,G__10379) : cljs.analyzer.analyze.call(null,G__10378,G__10379));
})():null);
var e = (cljs.core.truth_((function (){var or__4161__auto__ = cljs.core.seq(cblocks);
if(or__4161__auto__){
return or__4161__auto__;
} else {
return dblock;
}
})())?cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("e"):null);
var default$ = (function (){var temp__4423__auto__ = dblock;
if(cljs.core.truth_(temp__4423__auto__)){
var vec__10380 = temp__4423__auto__;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10380,(0),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10380,(1),null);
var name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10380,(2),null);
var cb = cljs.core.nthnext(vec__10380,(3));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,name__$1),cljs.core._conj(cljs.core.List.EMPTY,e)))))),cljs.core.array_seq([cb], 0))));
} else {
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),cljs.core._conj(cljs.core.List.EMPTY,e))));
}
})();
var cblock = ((cljs.core.seq(cblocks))?cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (catchenv,catch_QMARK_,default_QMARK_,finally_QMARK_,map__10375,map__10375__$1,body__$1,cblocks,dblock,fblock,finally$,e,default$,vec__10374,___$1,body,form){
return (function (p__10381){
var vec__10382 = p__10381;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10382,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10382,(1),null);
var name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10382,(2),null);
var cb = cljs.core.nthnext(vec__10382,(3));
if(cljs.core.truth_(name__$1)){
if(cljs.core.not(cljs.core.namespace(name__$1))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Can't qualify symbol in catch"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"namespace","namespace",1263021155,null),new cljs.core.Symbol(null,"name","name",-810760592,null)))], 0)))].join('')));
}
} else {
}

return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","instance?","cljs.core/instance?",2044751870,null)),cljs.core._conj(cljs.core.List.EMPTY,type),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,e)], 0))))),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,name__$1),cljs.core._conj(cljs.core.List.EMPTY,e)))))),cljs.core.array_seq([cb], 0)))))))));
});})(catchenv,catch_QMARK_,default_QMARK_,finally_QMARK_,map__10375,map__10375__$1,body__$1,cblocks,dblock,fblock,finally$,e,default$,vec__10374,___$1,body,form))
,cljs.core.array_seq([cblocks], 0)),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),cljs.core._conj(cljs.core.List.EMPTY,default$)], 0)))):default$);
var locals = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(catchenv);
var locals__$1 = (cljs.core.truth_(e)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(locals,e,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),e,new cljs.core.Keyword(null,"line","line",212345235),cljs.analyzer.get_line(e,env),new cljs.core.Keyword(null,"column","column",2078222095),cljs.analyzer.get_col(e,env)], null)):locals);
var catch$ = (cljs.core.truth_(cblock)?(function (){var G__10383 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(catchenv,new cljs.core.Keyword(null,"locals","locals",535295783),locals__$1);
var G__10384 = cblock;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__10383,G__10384) : cljs.analyzer.analyze.call(null,G__10383,G__10384));
})():null);
var try$ = (function (){var G__10385 = (cljs.core.truth_((function (){var or__4161__auto__ = e;
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return finally$;
}
})())?catchenv:env);
var G__10386 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body__$1)));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__10385,G__10386) : cljs.analyzer.analyze.call(null,G__10385,G__10386));
})();
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"try","try",1380742522),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"try","try",1380742522),try$,new cljs.core.Keyword(null,"finally","finally",1589088705),finally$,new cljs.core.Keyword(null,"name","name",1843675177),e,new cljs.core.Keyword(null,"catch","catch",1038065524),catch$,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [try$,catch$,finally$], null)], null);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"def","def",597100991,null),(function (op,env,form,name,_){
var pfn = (function() {
var G__10405 = null;
var G__10405__2 = (function (___$1,sym){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym], null);
});
var G__10405__3 = (function (___$1,sym,init){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"init","init",-1875481434),init], null);
});
var G__10405__4 = (function (___$1,sym,doc,init){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"init","init",-1875481434),init], null);
});
G__10405 = function(___$1,sym,doc,init){
switch(arguments.length){
case 2:
return G__10405__2.call(this,___$1,sym);
case 3:
return G__10405__3.call(this,___$1,sym,doc);
case 4:
return G__10405__4.call(this,___$1,sym,doc,init);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__10405.cljs$core$IFn$_invoke$arity$2 = G__10405__2;
G__10405.cljs$core$IFn$_invoke$arity$3 = G__10405__3;
G__10405.cljs$core$IFn$_invoke$arity$4 = G__10405__4;
return G__10405;
})()
;
var args = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(pfn,form);
var sym = new cljs.core.Keyword(null,"sym","sym",-1444860305).cljs$core$IFn$_invoke$arity$1(args);
var sym_meta = cljs.core.meta(sym);
var tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym));
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym));
var dynamic = new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym));
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
var locals = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env);
var clash_ns = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(ns_name),cljs.core.str("."),cljs.core.str(sym)].join(''));
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),clash_ns], null)))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(ns_name),cljs.core.str("."),cljs.core.str(sym)].join('')),new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(ns_name)].join(''),[cljs.core.str(sym)].join(''))], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace(sym))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Can't def ns-qualified name");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"const","const",1709929842).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),sym)))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Can't redefine a constant");
} else {
}

var temp__4425__auto___10406 = new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__4425__auto___10406)){
var doc_10407 = temp__4425__auto___10406;
if(typeof doc_10407 === 'string'){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Too many arguments to def");
}
} else {
}

var temp__4425__auto___10408 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"defs","defs",1398449717),sym], null));
if(cljs.core.truth_(temp__4425__auto___10408)){
var v_10409 = temp__4425__auto___10408;
if(cljs.core.truth_((function (){var and__4149__auto__ = cljs.core.not(cljs.analyzer._STAR_allow_redef_STAR_);
if(and__4149__auto__){
var and__4149__auto____$1 = cljs.core.not(new cljs.core.Keyword(null,"declared","declared",92336021).cljs$core$IFn$_invoke$arity$1(v_10409));
if(and__4149__auto____$1){
var and__4149__auto____$2 = cljs.core.not(new cljs.core.Keyword(null,"declared","declared",92336021).cljs$core$IFn$_invoke$arity$1(sym_meta));
if(and__4149__auto____$2){
var and__4149__auto____$3 = cljs.analyzer._STAR_file_defs_STAR_;
if(cljs.core.truth_(and__4149__auto____$3)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_file_defs_STAR_) : cljs.core.deref.call(null,cljs.analyzer._STAR_file_defs_STAR_)),sym);
} else {
return and__4149__auto____$3;
}
} else {
return and__4149__auto____$2;
}
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
})())){
cljs.analyzer.warning(new cljs.core.Keyword(null,"redef-in-file","redef-in-file",-476530788),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(v_10409)], null));
} else {
}
} else {
}

if(cljs.core.truth_(cljs.analyzer._STAR_file_defs_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs.analyzer._STAR_file_defs_STAR_,cljs.core.conj,sym);
} else {
}

var env__$1 = (cljs.core.truth_((function (){var or__4161__auto__ = (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ns_name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))) && (cljs.analyzer.core_name_QMARK_(env,sym));
if(or__4161__auto__){
return or__4161__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"uses","uses",232664692),sym], null));
}
})())?(function (){var ev = cljs.analyzer.resolve_existing_var(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),sym);
cljs.analyzer.warning(new cljs.core.Keyword(null,"redef","redef",1032704258),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sym","sym",-1444860305),sym,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(ev),new cljs.core.Keyword(null,"ns-name","ns-name",-2077346323),ns_name], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"excludes","excludes",-1791725945)], null),cljs.core.conj,cljs.core.array_seq([sym], 0));

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"excludes","excludes",-1791725945)], null),cljs.core.conj,sym);
})():env);
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"locals","locals",535295783)),sym));
var init_expr = ((cljs.core.contains_QMARK_(args,new cljs.core.Keyword(null,"init","init",-1875481434)))?(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"defs","defs",1398449717),sym], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),var_name], null),sym_meta,(cljs.core.truth_(dynamic)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true], null):null),cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2(var_name,env__$1)], 0)));

var _STAR_recur_frames_STAR_10396 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var G__10397 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var G__10398 = new cljs.core.Keyword(null,"init","init",-1875481434).cljs$core$IFn$_invoke$arity$1(args);
var G__10399 = sym;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(G__10397,G__10398,G__10399) : cljs.analyzer.analyze.call(null,G__10397,G__10398,G__10399));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_10396;
}})()
:null);
var fn_var_QMARK_ = (function (){var and__4149__auto__ = init_expr;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"fn","fn",-1175266204));
} else {
return and__4149__auto__;
}
})();
var tag__$1 = (cljs.core.truth_(fn_var_QMARK_)?(function (){var or__4161__auto__ = new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990).cljs$core$IFn$_invoke$arity$1(init_expr);
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return tag;
}
})():tag);
var export_as = (function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"export","export",214356590).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym));
if(cljs.core.truth_(temp__4425__auto__)){
var export_val = temp__4425__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,export_val)){
return var_name;
} else {
return export_val;
}
} else {
return null;
}
})();
var doc = (function (){var or__4161__auto__ = new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym));
}
})();
var temp__4425__auto___10410 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"defs","defs",1398449717),sym], null));
if(cljs.core.truth_(temp__4425__auto___10410)){
var v_10411 = temp__4425__auto___10410;
if(cljs.core.truth_((function (){var and__4149__auto__ = cljs.core.not(new cljs.core.Keyword(null,"declared","declared",92336021).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym)));
if(and__4149__auto__){
var and__4149__auto____$1 = new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(v_10411);
if(cljs.core.truth_(and__4149__auto____$1)){
return cljs.core.not(fn_var_QMARK_);
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
})())){
cljs.analyzer.warning(new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),env__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-name","ns-name",-2077346323),ns_name,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym], null));
} else {
}
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns_name,new cljs.core.Keyword(null,"defs","defs",1398449717),sym], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),var_name], null),(function (){var G__10400 = sym_meta;
var G__10400__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(sym_meta))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10400,new cljs.core.Keyword(null,"test","test",577538877),true):G__10400);
return G__10400__$1;
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"meta","meta",1499536964),cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(sym_meta,new cljs.core.Keyword(null,"test","test",577538877)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878)], null),((function (env__$1,var_name,init_expr,fn_var_QMARK_,tag__$1,export_as,doc,pfn,args,sym,sym_meta,tag,protocol,dynamic,ns_name,locals,clash_ns){
return (function (f){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env__$1)),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
return "cljs/core.cljs";
} else {
return f;
}
});})(env__$1,var_name,init_expr,fn_var_QMARK_,tag__$1,export_as,doc,pfn,args,sym,sym_meta,tag,protocol,dynamic,ns_name,locals,clash_ns))
)], null),(cljs.core.truth_(doc)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),doc], null):null),(cljs.core.truth_(dynamic)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true], null):null),cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2(var_name,env__$1),(cljs.core.truth_(protocol)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),protocol], null):null),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(sym));
if(cljs.core.truth_(temp__4425__auto__)){
var protocol_symbol = temp__4425__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),protocol_symbol,new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(protocol_symbol)),new cljs.core.Keyword(null,"impls","impls",-1314014853),cljs.core.PersistentHashSet.EMPTY], null);
} else {
return null;
}
})(),(cljs.core.truth_(fn_var_QMARK_)?(function (){var params = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (env__$1,var_name,init_expr,fn_var_QMARK_,tag__$1,export_as,doc,pfn,args,sym,sym_meta,tag,protocol,dynamic,ns_name,locals,clash_ns){
return (function (p1__10395_SHARP_){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(p1__10395_SHARP_)));
});})(env__$1,var_name,init_expr,fn_var_QMARK_,tag__$1,export_as,doc,pfn,args,sym,sym_meta,tag,protocol,dynamic,ns_name,locals,clash_ns))
,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(init_expr));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),true,new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365),new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556),new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(init_expr)], null),(function (){var temp__4423__auto__ = new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173).cljs$core$IFn$_invoke$arity$1(sym_meta);
if(cljs.core.truth_(temp__4423__auto__)){
var top_fn_meta = temp__4423__auto__;
return top_fn_meta;
} else {
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"method-params","method-params",-980792179),params,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(sym_meta),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.meta,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(sym_meta)))], null);
}
})()], 0));
})():null),(cljs.core.truth_((function (){var and__4149__auto__ = fn_var_QMARK_;
if(cljs.core.truth_(and__4149__auto__)){
return tag__$1;
} else {
return and__4149__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990),tag__$1], null):null)], 0)));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"env","env",-1815813235),env__$1,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"name","name",1843675177),var_name,new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__10401 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"locals","locals",535295783)),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)),new cljs.core.Keyword(null,"def-var","def-var",-698214377),true);
var G__10402 = sym;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__10401,G__10402) : cljs.analyzer.analyze.call(null,G__10401,G__10402));
})(),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var","var",-769682797)),new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516),new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(sym_meta),new cljs.core.Keyword(null,"init","init",-1875481434),init_expr], null),(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env__$1))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"var-ast","var-ast",1200379319),cljs.analyzer.var_ast(env__$1,sym)], null):null),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(sym_meta);
if(cljs.core.truth_(temp__4425__auto__)){
var test = temp__4425__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"test","test",577538877),(function (){var G__10403 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var G__10404 = test;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__10403,G__10404) : cljs.analyzer.analyze.call(null,G__10403,G__10404));
})()], null);
} else {
return null;
}
})(),(cljs.core.truth_(tag__$1)?(cljs.core.truth_(fn_var_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990),tag__$1], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag__$1], null)):null),(cljs.core.truth_(dynamic)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true], null):null),(cljs.core.truth_(export_as)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"export","export",214356590),export_as], null):null),(cljs.core.truth_(init_expr)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [init_expr], null)], null):null)], 0));
}));
cljs.analyzer.analyze_fn_method = (function cljs$analyzer$analyze_fn_method(env,locals,form,type){
var param_names = cljs.core.first(form);
var variadic = cljs.core.boolean$(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),param_names));
var param_names__$1 = cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),param_names));
var body = cljs.core.next(form);
var vec__10419 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (param_names,variadic,param_names__$1,body){
return (function (p__10420,name){
var vec__10421 = p__10420;
var locals__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10421,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10421,(1),null);
var param = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"shadow","shadow",873231803)],[name,true,new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.select_keys(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",-830191113)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),cljs.analyzer.get_line(name,env),new cljs.core.Keyword(null,"column","column",2078222095),cljs.analyzer.get_col(name,env)], null)], 0)),cljs.analyzer.get_col(name,env),cljs.analyzer.get_line(name,env),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"shadow","shadow",873231803),(cljs.core.truth_(locals__$1)?(locals__$1.cljs$core$IFn$_invoke$arity$1 ? locals__$1.cljs$core$IFn$_invoke$arity$1(name) : locals__$1.call(null,name)):null)], null),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(name)),(cljs.core.truth_(locals__$1)?(locals__$1.cljs$core$IFn$_invoke$arity$1 ? locals__$1.cljs$core$IFn$_invoke$arity$1(name) : locals__$1.call(null,name)):null)]);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(locals__$1,name,param),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(params,param)], null);
});})(param_names,variadic,param_names__$1,body))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [locals,cljs.core.PersistentVector.EMPTY], null),param_names__$1);
var locals__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10419,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10419,(1),null);
var fixed_arity = cljs.core.count(((variadic)?cljs.core.butlast(params):params));
var recur_frame = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"flag","flag",1088647881),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null))], null);
var expr = (function (){var _STAR_recur_frames_STAR_10422 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(recur_frame,cljs.analyzer._STAR_recur_frames_STAR_);

try{var G__10423 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"return","return",-1891502105),cljs.core.array_seq([new cljs.core.Keyword(null,"locals","locals",535295783),locals__$1], 0));
var G__10424 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__10423,G__10424) : cljs.analyzer.analyze.call(null,G__10423,G__10424));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_10422;
}})();
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"variadic","variadic",882626057),variadic,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),fixed_arity,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"recurs","recurs",-1959309309),(function (){var G__10425 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(recur_frame);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__10425) : cljs.core.deref.call(null,G__10425));
})(),new cljs.core.Keyword(null,"expr","expr",745722291),expr], null);
});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),(function (op,env,p__10428,name,_){
var vec__10429 = p__10428;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10429,(0),null);
var args = cljs.core.nthnext(vec__10429,(1));
var form = vec__10429;
var G__10432 = (function (){var vec__10433 = (((cljs.core.first(args) instanceof cljs.core.Symbol))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),cljs.core.next(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,cljs.core.seq(args)], null));
var name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10433,(0),null);
var meths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10433,(1),null);
var meths__$1 = ((cljs.core.vector_QMARK_(cljs.core.first(meths)))?cljs.core._conj(cljs.core.List.EMPTY,meths):meths);
var locals = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env);
var name_var = (cljs.core.truth_(name__$1)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name__$1,new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531),true,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859),new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"shadow","shadow",873231803),(function (){var or__4161__auto__ = (locals.cljs$core$IFn$_invoke$arity$1 ? locals.cljs$core$IFn$_invoke$arity$1(name__$1) : locals.call(null,name__$1));
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-globals","js-globals",1670394727),name__$1], null));
}
})()], null)], null),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(name__$1));
if(cljs.core.truth_(temp__4425__auto__)){
var tag = temp__4425__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990),tag], null);
} else {
return null;
}
})()], 0)):null);
var env__$1 = (cljs.core.truth_(name__$1)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859)], null),cljs.core.conj,name_var):env);
var locals__$1 = (cljs.core.truth_((function (){var and__4149__auto__ = locals;
if(cljs.core.truth_(and__4149__auto__)){
return name__$1;
} else {
return and__4149__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(locals,name__$1,name_var):locals);
var type = new cljs.core.Keyword("cljs.analyzer","type","cljs.analyzer/type",478749742).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form));
var protocol_impl = new cljs.core.Keyword("cljs.analyzer","protocol-impl","cljs.analyzer/protocol-impl",-1523935409).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form));
var protocol_inline = new cljs.core.Keyword("cljs.analyzer","protocol-inline","cljs.analyzer/protocol-inline",-1611519026).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form));
var menv = (((cljs.core.count(meths__$1) > (1)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env__$1,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291)):env__$1);
var menv__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([menv,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365),protocol_impl,new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556),protocol_inline], null)], 0));
var methods$ = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__10433,name__$1,meths,meths__$1,locals,name_var,env__$1,locals__$1,type,protocol_impl,protocol_inline,menv,menv__$1,vec__10429,___$1,args,form){
return (function (p1__10426_SHARP_){
return cljs.analyzer.analyze_fn_method(menv__$1,locals__$1,p1__10426_SHARP_,type);
});})(vec__10433,name__$1,meths,meths__$1,locals,name_var,env__$1,locals__$1,type,protocol_impl,protocol_inline,menv,menv__$1,vec__10429,___$1,args,form))
,meths__$1);
var max_fixed_arity = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),methods$));
var variadic = cljs.core.boolean$(cljs.core.some(new cljs.core.Keyword(null,"variadic","variadic",882626057),methods$));
var locals__$2 = (cljs.core.truth_(name__$1)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(locals__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null),cljs.core.assoc,new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),true,new cljs.core.Keyword(null,"variadic","variadic",882626057),cljs.core.array_seq([variadic,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),max_fixed_arity,new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$)], 0)):locals__$1);
var methods$__$1 = (cljs.core.truth_(name__$1)?(function (){var _STAR_cljs_warnings_STAR_10434 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.zipmap(cljs.core.keys(cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(false));

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_cljs_warnings_STAR_10434,vec__10433,name__$1,meths,meths__$1,locals,name_var,env__$1,locals__$1,type,protocol_impl,protocol_inline,menv,menv__$1,methods$,max_fixed_arity,variadic,locals__$2,vec__10429,___$1,args,form){
return (function (p1__10427_SHARP_){
return cljs.analyzer.analyze_fn_method(menv__$1,locals__$2,p1__10427_SHARP_,type);
});})(_STAR_cljs_warnings_STAR_10434,vec__10433,name__$1,meths,meths__$1,locals,name_var,env__$1,locals__$1,type,protocol_impl,protocol_inline,menv,menv__$1,methods$,max_fixed_arity,variadic,locals__$2,vec__10429,___$1,args,form))
,meths__$1));
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_10434;
}})():methods$);
var form__$1 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(form,cljs.core.dissoc,new cljs.core.Keyword("cljs.analyzer","protocol-impl","cljs.analyzer/protocol-impl",-1523935409),new cljs.core.Keyword("cljs.analyzer","protocol-inline","cljs.analyzer/protocol-inline",-1611519026),new cljs.core.Keyword("cljs.analyzer","type","cljs.analyzer/type",478749742));
var variadic_methods_10435 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"variadic","variadic",882626057),methods$__$1);
var variadic_params_10436 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first(variadic_methods_10435)));
var param_counts_10437 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.count,new cljs.core.Keyword(null,"params","params",710516235)),methods$__$1);
if(((1) < cljs.core.count(variadic_methods_10435))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"multiple-variadic-overloads","multiple-variadic-overloads",1110059837),env__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name_var], null));
} else {
}

if(!(((variadic_params_10436 === (0))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(variadic_params_10436,((1) + max_fixed_arity))))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"variadic-max-arity","variadic-max-arity",-14288402),env__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name_var], null));
} else {
}

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(param_counts_10437),param_counts_10437)){
cljs.analyzer.warning(new cljs.core.Keyword(null,"overload-arity","overload-arity",823206044),env__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name_var], null));
} else {
}

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"variadic","variadic",882626057),new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185),new cljs.core.Keyword(null,"protocol-impl","protocol-impl",2101328365),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"methods","methods",453930866),new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)],[cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),methods$__$1),protocol_inline,name_var,variadic,cljs.analyzer._STAR_loop_lets_STAR_,protocol_impl,new cljs.core.Keyword(null,"fn","fn",-1175266204),env__$1,methods$__$1,cljs.analyzer._STAR_recur_frames_STAR_,max_fixed_arity,form__$1,new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((variadic)?"@param {...*} var_args":null)], null)]);
})();
return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(G__10432) : cljs.analyzer.analyze_wrap_meta.call(null,G__10432));
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null),(function (op,env,p__10438,name,_){
var vec__10439 = p__10438;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10439,(0),null);
var bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10439,(1),null);
var exprs = cljs.core.nthnext(vec__10439,(2));
var form = vec__10439;
if((cljs.core.vector_QMARK_(bindings)) && (cljs.core.even_QMARK_(cljs.core.count(bindings)))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"bindings must be vector of even number of elements");
}

var n__GT_fexpr = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.second),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings)));
var names = cljs.core.keys(n__GT_fexpr);
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var vec__10440 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (n__GT_fexpr,names,context,vec__10439,___$1,bindings,exprs,form){
return (function (p__10442,n){
var vec__10443 = p__10442;
var map__10444 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10443,(0),null);
var map__10444__$1 = ((cljs.core.seq_QMARK_(map__10444))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10444):map__10444);
var env__$1 = map__10444__$1;
var locals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10444__$1,new cljs.core.Keyword(null,"locals","locals",535295783));
var bes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10443,(1),null);
var ret_tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(n));
var fexpr = (function (){var _STAR_cljs_warnings_STAR_10445 = cljs.analyzer._STAR_cljs_warnings_STAR_;
cljs.analyzer._STAR_cljs_warnings_STAR_ = cljs.core.zipmap(cljs.core.keys(cljs.analyzer._STAR_cljs_warnings_STAR_),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(false));

try{var G__10446 = env__$1;
var G__10447 = (n__GT_fexpr.cljs$core$IFn$_invoke$arity$1 ? n__GT_fexpr.cljs$core$IFn$_invoke$arity$1(n) : n__GT_fexpr.call(null,n));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__10446,G__10447) : cljs.analyzer.analyze.call(null,G__10446,G__10447));
}finally {cljs.analyzer._STAR_cljs_warnings_STAR_ = _STAR_cljs_warnings_STAR_10445;
}})();
var be = (function (){var G__10448 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"variadic","variadic",882626057),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"local","local",-1497766724)],[n,new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(fexpr),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(fexpr)),cljs.analyzer.get_col(n,env__$1),cljs.analyzer.get_line(n,env__$1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(fexpr),true,(locals.cljs$core$IFn$_invoke$arity$1 ? locals.cljs$core$IFn$_invoke$arity$1(n) : locals.call(null,n)),true]);
var G__10448__$1 = (cljs.core.truth_(ret_tag)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10448,new cljs.core.Keyword(null,"ret-tag","ret-tag",1705919990),ret_tag):G__10448);
return G__10448__$1;
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_in(env__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),n], null),be),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bes,be)], null);
});})(n__GT_fexpr,names,context,vec__10439,___$1,bindings,exprs,form))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [env,cljs.core.PersistentVector.EMPTY], null),names);
var meth_env = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10440,(0),null);
var bes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10440,(1),null);
var meth_env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meth_env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var vec__10441 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (n__GT_fexpr,names,context,vec__10440,meth_env,bes,meth_env__$1,vec__10439,___$1,bindings,exprs,form){
return (function (p__10449,p__10450){
var vec__10451 = p__10449;
var meth_env__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10451,(0),null);
var bes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10451,(1),null);
var map__10452 = p__10450;
var map__10452__$1 = ((cljs.core.seq_QMARK_(map__10452))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10452):map__10452);
var be = map__10452__$1;
var name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10452__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10452__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var env__$1 = cljs.core.assoc_in(meth_env__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),name__$1], null),shadow);
var fexpr = (function (){var G__10453 = env__$1;
var G__10454 = (n__GT_fexpr.cljs$core$IFn$_invoke$arity$1 ? n__GT_fexpr.cljs$core$IFn$_invoke$arity$1(name__$1) : n__GT_fexpr.call(null,name__$1));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__10453,G__10454) : cljs.analyzer.analyze.call(null,G__10453,G__10454));
})();
var be_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(be,new cljs.core.Keyword(null,"init","init",-1875481434),fexpr,cljs.core.array_seq([new cljs.core.Keyword(null,"variadic","variadic",882626057),new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(fexpr),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(fexpr),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(fexpr))], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc_in(env__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),name__$1], null),be_SINGLEQUOTE_),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bes__$1,be_SINGLEQUOTE_)], null);
});})(n__GT_fexpr,names,context,vec__10440,meth_env,bes,meth_env__$1,vec__10439,___$1,bindings,exprs,form))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meth_env__$1,cljs.core.PersistentVector.EMPTY], null),bes);
var meth_env__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10441,(0),null);
var bes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10441,(1),null);
var expr = (function (){var G__10455 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(meth_env__$2,new cljs.core.Keyword(null,"context","context",-830191113),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context))?new cljs.core.Keyword(null,"return","return",-1891502105):context));
var G__10456 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),exprs)));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__10455,G__10456) : cljs.analyzer.analyze.call(null,G__10455,G__10456));
})();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"letfn","letfn",-2121022354),new cljs.core.Keyword(null,"bindings","bindings",1271397192),bes__$1,new cljs.core.Keyword(null,"expr","expr",745722291),expr,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init","init",-1875481434),bes__$1)),expr)], null);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"do","do",1686842252,null),(function (op,env,p__10458,_,___$1){
var vec__10459 = p__10458;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10459,(0),null);
var exprs = cljs.core.nthnext(vec__10459,(1));
var form = vec__10459;
var statements = (function (){var _STAR_recur_frames_STAR_10460 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_10460,vec__10459,___$2,exprs,form){
return (function (p1__10457_SHARP_){
var G__10461 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"statement","statement",-32780863));
var G__10462 = p1__10457_SHARP_;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__10461,G__10462) : cljs.analyzer.analyze.call(null,G__10461,G__10462));
});})(_STAR_recur_frames_STAR_10460,vec__10459,___$2,exprs,form))
,cljs.core.butlast(exprs)));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_10460;
}})();
var ret = (((cljs.core.count(exprs) <= (1)))?(function (){var G__10463 = env;
var G__10464 = cljs.core.first(exprs);
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__10463,G__10464) : cljs.analyzer.analyze.call(null,G__10463,G__10464));
})():(function (){var G__10465 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env)))?new cljs.core.Keyword(null,"statement","statement",-32780863):new cljs.core.Keyword(null,"return","return",-1891502105)));
var G__10466 = cljs.core.last(exprs);
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__10465,G__10466) : cljs.analyzer.analyze.call(null,G__10465,G__10466));
})());
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"do","do",46310725),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"statements","statements",600349855),statements,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(statements),ret)], null);
}));
cljs.analyzer.analyze_let = (function cljs$analyzer$analyze_let(encl_env,p__10467,is_loop){
var vec__10481 = p__10467;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10481,(0),null);
var bindings = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10481,(1),null);
var exprs = cljs.core.nthnext(vec__10481,(2));
var form = vec__10481;
if((cljs.core.vector_QMARK_(bindings)) && (cljs.core.even_QMARK_(cljs.core.count(bindings)))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(encl_env,"bindings must be vector of even number of elements");
}

var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(encl_env);
var vec__10482 = (function (){var _STAR_recur_frames_STAR_10483 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var bes = cljs.core.PersistentVector.EMPTY;
var env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(encl_env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var bindings__$1 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings));
while(true){
var temp__4423__auto__ = cljs.core.first(bindings__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__10484 = temp__4423__auto__;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10484,(0),null);
var init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10484,(1),null);
if(cljs.core.truth_((function (){var or__4161__auto__ = cljs.core.namespace(name);
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
var G__10485 = [cljs.core.str(name)].join('');
var G__10486 = ".";
return goog.string.contains(G__10485,G__10486);
}
})())){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(encl_env,[cljs.core.str("Invalid local name: "),cljs.core.str(name)].join(''));
} else {
}

var init_expr = (function (){var _STAR_loop_lets_STAR_10487 = cljs.analyzer._STAR_loop_lets_STAR_;
cljs.analyzer._STAR_loop_lets_STAR_ = cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),bes], null),cljs.analyzer._STAR_loop_lets_STAR_);

try{return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,init) : cljs.analyzer.analyze.call(null,env,init));
}finally {cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR_10487;
}})();
var be = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"init","init",-1875481434),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"local","local",-1497766724)],[init_expr,name,true,new cljs.core.Keyword(null,"var","var",-769682797),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),cljs.analyzer.get_line(name,env),new cljs.core.Keyword(null,"column","column",2078222095),cljs.analyzer.get_col(name,env)], null),cljs.analyzer.get_col(name,env),cljs.analyzer.get_line(name,env),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"shadow","shadow",873231803),(function (){var G__10488 = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env);
return (name.cljs$core$IFn$_invoke$arity$1 ? name.cljs$core$IFn$_invoke$arity$1(G__10488) : name.call(null,G__10488));
})()], null),(function (){var or__4161__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(name));
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
var or__4161__auto____$1 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(init_expr);
if(cljs.core.truth_(or__4161__auto____$1)){
return or__4161__auto____$1;
} else {
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(init_expr));
}
}
})(),(function (){var G__10489 = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env);
return (name.cljs$core$IFn$_invoke$arity$1 ? name.cljs$core$IFn$_invoke$arity$1(G__10489) : name.call(null,G__10489));
})(),true]);
var be__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"fn","fn",-1175266204)))?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([be,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"fn-var","fn-var",1086204730),true,new cljs.core.Keyword(null,"variadic","variadic",882626057),new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(init_expr),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(init_expr))], null)], 0)):be);
var G__10494 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(bes,be__$1);
var G__10495 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"locals","locals",535295783),name], null),be__$1);
var G__10496 = cljs.core.next(bindings__$1);
bes = G__10494;
env = G__10495;
bindings__$1 = G__10496;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bes,env], null);
}
break;
}
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_10483;
}})();
var bes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10482,(0),null);
var env = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10482,(1),null);
var recur_frame = (cljs.core.truth_(is_loop)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params","params",710516235),bes,new cljs.core.Keyword(null,"flag","flag",1088647881),(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null))], null):null);
var expr = (function (){var _STAR_recur_frames_STAR_10490 = cljs.analyzer._STAR_recur_frames_STAR_;
var _STAR_loop_lets_STAR_10491 = cljs.analyzer._STAR_loop_lets_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = (cljs.core.truth_(recur_frame)?cljs.core.cons(recur_frame,cljs.analyzer._STAR_recur_frames_STAR_):cljs.analyzer._STAR_recur_frames_STAR_);

cljs.analyzer._STAR_loop_lets_STAR_ = (cljs.core.truth_(is_loop)?cljs.analyzer._STAR_loop_lets_STAR_:(cljs.core.truth_(cljs.analyzer._STAR_loop_lets_STAR_)?cljs.core.cons(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),bes], null),cljs.analyzer._STAR_loop_lets_STAR_):null));

try{var G__10492 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context))?new cljs.core.Keyword(null,"return","return",-1891502105):context));
var G__10493 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),exprs)));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__10492,G__10493) : cljs.analyzer.analyze.call(null,G__10492,G__10493));
}finally {cljs.analyzer._STAR_loop_lets_STAR_ = _STAR_loop_lets_STAR_10491;

cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_10490;
}})();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"env","env",-1815813235),encl_env,new cljs.core.Keyword(null,"op","op",-1882987955),(cljs.core.truth_(is_loop)?new cljs.core.Keyword(null,"loop","loop",-395552849):new cljs.core.Keyword(null,"let","let",-1282412701)),new cljs.core.Keyword(null,"bindings","bindings",1271397192),bes,new cljs.core.Keyword(null,"expr","expr",745722291),expr,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"init","init",-1875481434),bes)),expr)], null);
});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"let*","let*",1920721458,null),(function (op,encl_env,form,_,___$1){
return cljs.analyzer.analyze_let(encl_env,form,false);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"loop*","loop*",615029416,null),(function (op,encl_env,form,_,___$1){
return cljs.analyzer.analyze_let(encl_env,form,true);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null),(function (op,env,p__10498,_,___$1){
var vec__10499 = p__10498;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10499,(0),null);
var exprs = cljs.core.nthnext(vec__10499,(1));
var form = vec__10499;
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var frame = cljs.core.first(cljs.analyzer._STAR_recur_frames_STAR_);
var exprs__$1 = (function (){var _STAR_recur_frames_STAR_10500 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_10500,context,frame,vec__10499,___$2,exprs,form){
return (function (p1__10497_SHARP_){
var G__10501 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var G__10502 = p1__10497_SHARP_;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__10501,G__10502) : cljs.analyzer.analyze.call(null,G__10501,G__10502));
});})(_STAR_recur_frames_STAR_10500,context,frame,vec__10499,___$2,exprs,form))
,exprs));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_10500;
}})();
if(cljs.core.truth_(frame)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Can't recur here");
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs__$1),cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame)))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"recur argument count mismatch");
}

var G__10503_10505 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(frame);
var G__10504_10506 = true;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__10503_10505,G__10504_10506) : cljs.core.reset_BANG_.call(null,G__10503_10505,G__10504_10506));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"recur","recur",-437573268),new cljs.core.Keyword(null,"form","form",-1624062471),form], null),new cljs.core.Keyword(null,"frame","frame",-1711082588),frame,cljs.core.array_seq([new cljs.core.Keyword(null,"exprs","exprs",1795829094),exprs__$1,new cljs.core.Keyword(null,"children","children",-940561982),exprs__$1], 0));
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),(function (_,env,p__10507,___$1,___$2){
var vec__10508 = p__10507;
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10508,(0),null);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10508,(1),null);
var G__10509 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"quoted?","quoted?",1464649621),true);
var G__10510 = x;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__10509,G__10510) : cljs.analyzer.analyze.call(null,G__10509,G__10510));
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"new","new",-444906321,null),(function (_,env,p__10512,___$1,___$2){
var vec__10513 = p__10512;
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10513,(0),null);
var ctor = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10513,(1),null);
var args = cljs.core.nthnext(vec__10513,(2));
var form = vec__10513;
if((ctor instanceof cljs.core.Symbol)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"First arg to new must be a symbol");
}

var _STAR_recur_frames_STAR_10514 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var enve = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var ctorexpr = (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,ctor) : cljs.analyzer.analyze.call(null,enve,ctor));
var ctor_var = cljs.analyzer.resolve_existing_var(env,ctor);
var record_args = (cljs.core.truth_((function (){var and__4149__auto__ = new cljs.core.Keyword(null,"record","record",-779106859).cljs$core$IFn$_invoke$arity$1(ctor_var);
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ctor)));
} else {
return and__4149__auto__;
}
})())?cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((3),(cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,null) : cljs.analyzer.analyze.call(null,enve,null))):null);
var argexprs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (enve,ctorexpr,ctor_var,record_args,_STAR_recur_frames_STAR_10514,vec__10513,___$3,ctor,args,form){
return (function (p1__10511_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,p1__10511_SHARP_) : cljs.analyzer.analyze.call(null,enve,p1__10511_SHARP_));
});})(enve,ctorexpr,ctor_var,record_args,_STAR_recur_frames_STAR_10514,vec__10513,___$3,ctor,args,form))
,args)),record_args);
var known_num_fields = new cljs.core.Keyword(null,"num-fields","num-fields",1529154024).cljs$core$IFn$_invoke$arity$1(ctor_var);
var argc = cljs.core.count(args);
if(cljs.core.truth_((function (){var and__4149__auto__ = cljs.core.not(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ctor)));
if(and__4149__auto__){
var and__4149__auto____$1 = known_num_fields;
if(cljs.core.truth_(and__4149__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(known_num_fields,argc);
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
})())){
cljs.analyzer.warning(new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"argc","argc",-1452839519),argc,new cljs.core.Keyword(null,"ctor","ctor",1750864802),ctor], null));
} else {
}

return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"ctor","ctor",1750864802),ctorexpr,new cljs.core.Keyword(null,"args","args",1315556576),argexprs,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ctorexpr], null),argexprs),new cljs.core.Keyword(null,"tag","tag",-1290361223),(function (){var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ctorexpr));
var or__4161__auto__ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","Object","js/Object",61215323,null),new cljs.core.Symbol(null,"object","object",-1179821820,null),new cljs.core.Symbol("js","String","js/String",-2070054036,null),new cljs.core.Symbol(null,"string","string",-349010059,null),new cljs.core.Symbol("js","Array","js/Array",-423508366,null),new cljs.core.Symbol(null,"array","array",-440182315,null),new cljs.core.Symbol("js","Number","js/Number",-508133572,null),new cljs.core.Symbol(null,"number","number",-1084057331,null),new cljs.core.Symbol("js","Function","js/Function",-749892063,null),new cljs.core.Symbol(null,"function","function",-486723946,null),new cljs.core.Symbol("js","Boolean","js/Boolean",1661145260,null),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null).call(null,name);
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return name;
}
})()], null);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_10514;
}}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"set!","set!",250714521,null),(function (_,env,p__10515,___$1,___$2){
var vec__10516 = p__10515;
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10516,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10516,(1),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10516,(2),null);
var alt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10516,(3),null);
var form = vec__10516;
var vec__10517 = (cljs.core.truth_(alt)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj(cljs.core.List.EMPTY,target),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,val)], 0)))),alt], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,val], null));
var target__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10517,(0),null);
var val__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10517,(1),null);
var _STAR_recur_frames_STAR_10518 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var enve = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var targetexpr = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(target__$1,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)))?(function (){

return new cljs.core.Keyword("cljs.analyzer","set-unchecked-if","cljs.analyzer/set-unchecked-if",1413639250);
})()
:(((target__$1 instanceof cljs.core.Symbol))?(function (){
if(new cljs.core.Keyword(null,"const","const",1709929842).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),target__$1))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Can't set! a constant");
} else {
}

var local_10520 = (function (){var G__10519 = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env);
return (target__$1.cljs$core$IFn$_invoke$arity$1 ? target__$1.cljs$core$IFn$_invoke$arity$1(G__10519) : target__$1.call(null,G__10519));
})();
if((function (){var or__4161__auto__ = (local_10520 == null);
if(or__4161__auto__){
return or__4161__auto__;
} else {
var and__4149__auto__ = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(local_10520);
if(and__4149__auto__){
var or__4161__auto____$1 = new cljs.core.Keyword(null,"mutable","mutable",875778266).cljs$core$IFn$_invoke$arity$1(local_10520);
if(or__4161__auto____$1){
return or__4161__auto____$1;
} else {
var or__4161__auto____$2 = new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950).cljs$core$IFn$_invoke$arity$1(local_10520);
if(or__4161__auto____$2){
return or__4161__auto____$2;
} else {
return new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411).cljs$core$IFn$_invoke$arity$1(local_10520);
}
}
} else {
return and__4149__auto__;
}
}
})()){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Can't set! local var or non-mutable field");
}

return (cljs.analyzer.analyze_symbol.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze_symbol.cljs$core$IFn$_invoke$arity$2(enve,target__$1) : cljs.analyzer.analyze_symbol.call(null,enve,target__$1));
})()
:((cljs.core.seq_QMARK_(target__$1))?(function (){var targetexpr = (cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3 ? cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3(enve,target__$1,null) : cljs.analyzer.analyze_seq.call(null,enve,target__$1,null));
if(new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(targetexpr)){
return targetexpr;
} else {
return null;
}
})():null)
));
var valexpr = (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,val__$1) : cljs.analyzer.analyze.call(null,enve,val__$1));
if(targetexpr){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"set! target must be a field or a symbol naming a var");
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(targetexpr,new cljs.core.Keyword("cljs.analyzer","set-unchecked-if","cljs.analyzer/set-unchecked-if",1413639250))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"no-op","no-op",-93046065)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"set!","set!",-1389817006),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"target","target",253001721),targetexpr,new cljs.core.Keyword(null,"val","val",128701612),valexpr,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [targetexpr,valexpr], null)], null);

}
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_10518;
}}));
cljs.analyzer.foreign_dep_QMARK_ = (function cljs$analyzer$foreign_dep_QMARK_(dep){
if((dep instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),new cljs.core.Symbol(null,"dep","dep",-142776527,null))], 0)))].join('')));
}

var js_index = new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
var temp__4423__auto__ = cljs.core.find(js_index,cljs.core.name(dep));
if(temp__4423__auto__){
var vec__10523 = temp__4423__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10523,(0),null);
var map__10524 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10523,(1),null);
var map__10524__$1 = ((cljs.core.seq_QMARK_(map__10524))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10524):map__10524);
var foreign = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10524__$1,new cljs.core.Keyword(null,"foreign","foreign",990521149));
return foreign;
} else {
return false;
}
});
/**
 * Given a lib, a namespace, deps, its dependencies, env, an analysis environment
 * and opts, compiler options - analyze all of the dependencies. Required to
 * correctly analyze usage of other namespaces.
 */
cljs.analyzer.analyze_deps = (function cljs$analyzer$analyze_deps(){
var args10526 = [];
var len__5200__auto___10538 = arguments.length;
var i__5201__auto___10539 = (0);
while(true){
if((i__5201__auto___10539 < len__5200__auto___10538)){
args10526.push((arguments[i__5201__auto___10539]));

var G__10540 = (i__5201__auto___10539 + (1));
i__5201__auto___10539 = G__10540;
continue;
} else {
}
break;
}

var G__10528 = args10526.length;
switch (G__10528) {
case 3:
return cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10526.length)].join('')));

}
});

cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$3 = (function (lib,deps,env){
return cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$4(lib,deps,env,null);
});

cljs.analyzer.analyze_deps.cljs$core$IFn$_invoke$arity$4 = (function (lib,deps,env,opts){
var compiler = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_));
var _STAR_cljs_dep_set_STAR_10529 = cljs.analyzer._STAR_cljs_dep_set_STAR_;
cljs.analyzer._STAR_cljs_dep_set_STAR_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$5(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.analyzer._STAR_cljs_dep_set_STAR_,lib),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dep-path","dep-path",723826558)], null),cljs.core.conj,lib);

try{if(cljs.core.every_QMARK_(((function (_STAR_cljs_dep_set_STAR_10529,compiler){
return (function (p1__10525_SHARP_){
return !(cljs.core.contains_QMARK_(cljs.analyzer._STAR_cljs_dep_set_STAR_,p1__10525_SHARP_));
});})(_STAR_cljs_dep_set_STAR_10529,compiler))
,deps)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Circular dependency detected "),cljs.core.str(new cljs.core.Keyword(null,"dep-path","dep-path",723826558).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.analyzer._STAR_cljs_dep_set_STAR_)))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__10525#","p1__10525#",-1761682876,null)], null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"*cljs-dep-set*","*cljs-dep-set*",1566566915,null),new cljs.core.Symbol(null,"p1__10525#","p1__10525#",-1761682876,null)))),new cljs.core.Symbol(null,"deps","deps",-771075450,null))], 0)))].join('')));
}

var seq__10530 = cljs.core.seq(deps);
var chunk__10531 = null;
var count__10532 = (0);
var i__10533 = (0);
while(true){
if((i__10533 < count__10532)){
var dep = chunk__10531.cljs$core$IIndexed$_nth$arity$2(null,i__10533);
if((function (){var or__4161__auto__ = cljs.core.not_empty(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),dep,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)));
if(or__4161__auto__){
return or__4161__auto__;
} else {
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131).cljs$core$IFn$_invoke$arity$1(compiler),cljs.core.name(dep));
}
})()){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__10534 = new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812);
var G__10535 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),dep,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),cljs.core.name(dep)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__10534,G__10535) : cljs.analyzer.error_message.call(null,G__10534,G__10535));
})());
}

var G__10542 = seq__10530;
var G__10543 = chunk__10531;
var G__10544 = count__10532;
var G__10545 = (i__10533 + (1));
seq__10530 = G__10542;
chunk__10531 = G__10543;
count__10532 = G__10544;
i__10533 = G__10545;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10530);
if(temp__4425__auto__){
var seq__10530__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10530__$1)){
var c__4945__auto__ = cljs.core.chunk_first(seq__10530__$1);
var G__10546 = cljs.core.chunk_rest(seq__10530__$1);
var G__10547 = c__4945__auto__;
var G__10548 = cljs.core.count(c__4945__auto__);
var G__10549 = (0);
seq__10530 = G__10546;
chunk__10531 = G__10547;
count__10532 = G__10548;
i__10533 = G__10549;
continue;
} else {
var dep = cljs.core.first(seq__10530__$1);
if((function (){var or__4161__auto__ = cljs.core.not_empty(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(compiler,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),dep,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)));
if(or__4161__auto__){
return or__4161__auto__;
} else {
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131).cljs$core$IFn$_invoke$arity$1(compiler),cljs.core.name(dep));
}
})()){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__10536 = new cljs.core.Keyword(null,"undeclared-ns","undeclared-ns",-1589012812);
var G__10537 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns-sym","ns-sym",-1696101605),dep,new cljs.core.Keyword(null,"js-provide","js-provide",1052912493),cljs.core.name(dep)], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__10536,G__10537) : cljs.analyzer.error_message.call(null,G__10536,G__10537));
})());
}

var G__10550 = cljs.core.next(seq__10530__$1);
var G__10551 = null;
var G__10552 = (0);
var G__10553 = (0);
seq__10530 = G__10550;
chunk__10531 = G__10551;
count__10532 = G__10552;
i__10533 = G__10553;
continue;
}
} else {
return null;
}
}
break;
}
}finally {cljs.analyzer._STAR_cljs_dep_set_STAR_ = _STAR_cljs_dep_set_STAR_10529;
}});

cljs.analyzer.analyze_deps.cljs$lang$maxFixedArity = 4;
cljs.analyzer.check_uses = (function cljs$analyzer$check_uses(uses,env){
var seq__10564 = cljs.core.seq(uses);
var chunk__10565 = null;
var count__10566 = (0);
var i__10567 = (0);
while(true){
if((i__10567 < count__10566)){
var vec__10568 = chunk__10565.cljs$core$IIndexed$_nth$arity$2(null,i__10567);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10568,(0),null);
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10568,(1),null);
var js_lib_10574 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131),cljs.core.name(lib)], null));
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),lib,new cljs.core.Keyword(null,"defs","defs",1398449717),sym], null),new cljs.core.Keyword("cljs.analyzer","not-found","cljs.analyzer/not-found",427220150)),new cljs.core.Keyword("cljs.analyzer","not-found","cljs.analyzer/not-found",427220150))) && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_lib_10574,new cljs.core.Keyword(null,"group","group",582596132)),new cljs.core.Keyword(null,"goog","goog",-1711135452)))) && (cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_lib_10574,new cljs.core.Keyword(null,"closure-lib","closure-lib",2105917916))))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__10569 = new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137);
var G__10570 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"var",new cljs.core.Keyword(null,"lib","lib",191808726),lib,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__10569,G__10570) : cljs.analyzer.error_message.call(null,G__10569,G__10570));
})());
} else {
}

var G__10575 = seq__10564;
var G__10576 = chunk__10565;
var G__10577 = count__10566;
var G__10578 = (i__10567 + (1));
seq__10564 = G__10575;
chunk__10565 = G__10576;
count__10566 = G__10577;
i__10567 = G__10578;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10564);
if(temp__4425__auto__){
var seq__10564__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10564__$1)){
var c__4945__auto__ = cljs.core.chunk_first(seq__10564__$1);
var G__10579 = cljs.core.chunk_rest(seq__10564__$1);
var G__10580 = c__4945__auto__;
var G__10581 = cljs.core.count(c__4945__auto__);
var G__10582 = (0);
seq__10564 = G__10579;
chunk__10565 = G__10580;
count__10566 = G__10581;
i__10567 = G__10582;
continue;
} else {
var vec__10571 = cljs.core.first(seq__10564__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10571,(0),null);
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10571,(1),null);
var js_lib_10583 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-dependency-index","js-dependency-index",-1887042131),cljs.core.name(lib)], null));
if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),lib,new cljs.core.Keyword(null,"defs","defs",1398449717),sym], null),new cljs.core.Keyword("cljs.analyzer","not-found","cljs.analyzer/not-found",427220150)),new cljs.core.Keyword("cljs.analyzer","not-found","cljs.analyzer/not-found",427220150))) && (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_lib_10583,new cljs.core.Keyword(null,"group","group",582596132)),new cljs.core.Keyword(null,"goog","goog",-1711135452)))) && (cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(js_lib_10583,new cljs.core.Keyword(null,"closure-lib","closure-lib",2105917916))))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__10572 = new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137);
var G__10573 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"var",new cljs.core.Keyword(null,"lib","lib",191808726),lib,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__10572,G__10573) : cljs.analyzer.error_message.call(null,G__10572,G__10573));
})());
} else {
}

var G__10584 = cljs.core.next(seq__10564__$1);
var G__10585 = null;
var G__10586 = (0);
var G__10587 = (0);
seq__10564 = G__10584;
chunk__10565 = G__10585;
count__10566 = G__10586;
i__10567 = G__10587;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.check_use_macros = (function cljs$analyzer$check_use_macros(use_macros,env){
var seq__10598 = cljs.core.seq(use_macros);
var chunk__10599 = null;
var count__10600 = (0);
var i__10601 = (0);
while(true){
if((i__10601 < count__10600)){
var vec__10602 = chunk__10599.cljs$core$IIndexed$_nth$arity$2(null,i__10601);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10602,(0),null);
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10602,(1),null);
if((cljs.core.find_ns(lib).findInternedVar(sym) == null)){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__10603 = new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137);
var G__10604 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"macro",new cljs.core.Keyword(null,"lib","lib",191808726),lib,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__10603,G__10604) : cljs.analyzer.error_message.call(null,G__10603,G__10604));
})());
} else {
}

var G__10608 = seq__10598;
var G__10609 = chunk__10599;
var G__10610 = count__10600;
var G__10611 = (i__10601 + (1));
seq__10598 = G__10608;
chunk__10599 = G__10609;
count__10600 = G__10610;
i__10601 = G__10611;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10598);
if(temp__4425__auto__){
var seq__10598__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10598__$1)){
var c__4945__auto__ = cljs.core.chunk_first(seq__10598__$1);
var G__10612 = cljs.core.chunk_rest(seq__10598__$1);
var G__10613 = c__4945__auto__;
var G__10614 = cljs.core.count(c__4945__auto__);
var G__10615 = (0);
seq__10598 = G__10612;
chunk__10599 = G__10613;
count__10600 = G__10614;
i__10601 = G__10615;
continue;
} else {
var vec__10605 = cljs.core.first(seq__10598__$1);
var sym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10605,(0),null);
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10605,(1),null);
if((cljs.core.find_ns(lib).findInternedVar(sym) == null)){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,(function (){var G__10606 = new cljs.core.Keyword(null,"undeclared-ns-form","undeclared-ns-form",-248024137);
var G__10607 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"macro",new cljs.core.Keyword(null,"lib","lib",191808726),lib,new cljs.core.Keyword(null,"sym","sym",-1444860305),sym], null);
return (cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.error_message.cljs$core$IFn$_invoke$arity$2(G__10606,G__10607) : cljs.analyzer.error_message.call(null,G__10606,G__10607));
})());
} else {
}

var G__10616 = cljs.core.next(seq__10598__$1);
var G__10617 = null;
var G__10618 = (0);
var G__10619 = (0);
seq__10598 = G__10616;
chunk__10599 = G__10617;
count__10600 = G__10618;
i__10601 = G__10619;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.parse_ns_error_msg = (function cljs$analyzer$parse_ns_error_msg(spec,msg){
return [cljs.core.str(msg),cljs.core.str("; offending spec: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([spec], 0)))].join('');
});
cljs.analyzer.basic_validate_ns_spec = (function cljs$analyzer$basic_validate_ns_spec(env,macros_QMARK_,spec){
if(((spec instanceof cljs.core.Symbol)) || (cljs.core.sequential_QMARK_(spec))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Only [lib.ns & options] and lib.ns specs supported in :require / :require-macros"));
}

if(cljs.core.sequential_QMARK_(spec)){
if((cljs.core.first(spec) instanceof cljs.core.Symbol)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Library name must be specified as a symbol in :require / :require-macros"));
}

if(cljs.core.odd_QMARK_(cljs.core.count(spec))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Only :as alias and :refer (names) options supported in :require"));
}

if(cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as","as",1148689641),null,new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.next(spec))))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Only :as and :refer options supported in :require / :require-macros"));
}

if((function (){var fs = cljs.core.frequencies(cljs.core.next(spec));
return (((fs.cljs$core$IFn$_invoke$arity$2 ? fs.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"as","as",1148689641),(0)) : fs.call(null,new cljs.core.Keyword(null,"as","as",1148689641),(0))) <= (1))) && (((fs.cljs$core$IFn$_invoke$arity$2 ? fs.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer","refer",-964295553),(0)) : fs.call(null,new cljs.core.Keyword(null,"refer","refer",-964295553),(0))) <= (1)));
})()){
return null;
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Each of :as and :refer options may only be specified once in :require / :require-macros"));
}
} else {
return null;
}
});
cljs.analyzer.parse_ns_excludes = (function cljs$analyzer$parse_ns_excludes(env,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__10622){
var vec__10623 = p__10622;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10623,(0),null);
var exclude = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10623,(1),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10623,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(exclude,new cljs.core.Keyword(null,"exclude","exclude",-1230250334))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Only [:refer-clojure :exclude (names)] form supported");
}

if(cljs.core.seq(s)){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Only one :refer-clojure form is allowed per namespace definition");
} else {
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2(s,xs);
} else {
return s;
}
}),cljs.core.PersistentHashSet.EMPTY,args);
});
cljs.analyzer.use__GT_require = (function cljs$analyzer$use__GT_require(env,p__10624){
var vec__10626 = p__10624;
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10626,(0),null);
var kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10626,(1),null);
var referred = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10626,(2),null);
var spec = vec__10626;
if(((lib instanceof cljs.core.Symbol)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"only","only",1907811652),kw)) && (cljs.core.sequential_QMARK_(referred)) && (cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,referred))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Only [lib.ns :only (names)] specs supported in :use / :use-macros"));
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib,new cljs.core.Keyword(null,"refer","refer",-964295553),referred], null);
});
cljs.analyzer.parse_require_spec = (function cljs$analyzer$parse_require_spec(env,macros_QMARK_,deps,aliases,spec){
while(true){
if((spec instanceof cljs.core.Symbol)){
var G__10635 = env;
var G__10636 = macros_QMARK_;
var G__10637 = deps;
var G__10638 = aliases;
var G__10639 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null);
env = G__10635;
macros_QMARK_ = G__10636;
deps = G__10637;
aliases = G__10638;
spec = G__10639;
continue;
} else {
cljs.analyzer.basic_validate_ns_spec(env,macros_QMARK_,spec);

var vec__10631 = spec;
var lib = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10631,(0),null);
var opts = cljs.core.nthnext(vec__10631,(1));
var lib__$1 = (function (){var temp__4423__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name(lib)], null));
if(temp__4423__auto__){
var js_module_name = temp__4423__auto__;
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(js_module_name);
} else {
return lib;
}
})();
var map__10632 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var map__10632__$1 = ((cljs.core.seq_QMARK_(map__10632))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10632):map__10632);
var alias = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__10632__$1,new cljs.core.Keyword(null,"as","as",1148689641),lib__$1);
var referred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10632__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var vec__10633 = ((macros_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"require-macros","require-macros",707947416),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"require","require",-468001333),new cljs.core.Keyword(null,"use","use",-1846382424)], null));
var rk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10633,(0),null);
var uk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10633,(1),null);
if(((alias instanceof cljs.core.Symbol)) || ((alias == null))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,":as must be followed by a symbol in :require / :require-macros"));
}

if(alias){
var alias_type_10640 = ((macros_QMARK_)?new cljs.core.Keyword(null,"macros","macros",811339431):new cljs.core.Keyword(null,"fns","fns",1185138786));
var lib_SINGLEQUOTE__10641 = (function (){var G__10634 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(aliases) : cljs.core.deref.call(null,aliases));
return (alias_type_10640.cljs$core$IFn$_invoke$arity$1 ? alias_type_10640.cljs$core$IFn$_invoke$arity$1(G__10634) : alias_type_10640.call(null,G__10634));
})().call(null,alias);
if((!((lib_SINGLEQUOTE__10641 == null))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(lib__$1,lib_SINGLEQUOTE__10641))){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,":as alias must be unique"));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(aliases,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias_type_10640], null),cljs.core.conj,cljs.core.array_seq([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [alias,lib__$1], null)], 0));
} else {
}

if(((cljs.core.sequential_QMARK_(referred)) && (cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,referred))) || ((referred == null))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,":refer must be followed by a sequence of symbols in :require / :require-macros"));
}

if(macros_QMARK_){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(deps,cljs.core.conj,lib__$1);
}

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((alias)?new cljs.core.PersistentArrayMap.fromArray([rk,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap.fromArray([alias,lib__$1], true, false),new cljs.core.PersistentArrayMap.fromArray([lib__$1,lib__$1], true, false)], 0))], true, false):null),((referred)?new cljs.core.PersistentArrayMap.fromArray([uk,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(referred,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(lib__$1)))], true, false):null)], 0));
}
break;
}
});
cljs.analyzer.parse_import_spec = (function cljs$analyzer$parse_import_spec(env,deps,spec){
if(((cljs.core.sequential_QMARK_(spec)) && (cljs.core.every_QMARK_(cljs.core.symbol_QMARK_,spec))) || (((spec instanceof cljs.core.Symbol)) && ((cljs.core.namespace(spec) == null)))){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,cljs.analyzer.parse_ns_error_msg(spec,"Only lib.ns.Ctor or [lib.ns Ctor*] spec supported in :import"));
}

var import_map = ((cljs.core.sequential_QMARK_(spec))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10642_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__10642_SHARP_,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.core.first(spec)),cljs.core.str("."),cljs.core.str(p1__10642_SHARP_)].join(''))],null));
}),cljs.core.rest(spec))):new cljs.core.PersistentArrayMap.fromArray([cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str(spec)].join(''),/\./))),spec], true, false));
var seq__10649_10655 = cljs.core.seq(import_map);
var chunk__10650_10656 = null;
var count__10651_10657 = (0);
var i__10652_10658 = (0);
while(true){
if((i__10652_10658 < count__10651_10657)){
var vec__10653_10659 = chunk__10650_10656.cljs$core$IIndexed$_nth$arity$2(null,i__10652_10658);
var __10660 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10653_10659,(0),null);
var spec_10661__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10653_10659,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(deps,cljs.core.conj,spec_10661__$1);

var G__10662 = seq__10649_10655;
var G__10663 = chunk__10650_10656;
var G__10664 = count__10651_10657;
var G__10665 = (i__10652_10658 + (1));
seq__10649_10655 = G__10662;
chunk__10650_10656 = G__10663;
count__10651_10657 = G__10664;
i__10652_10658 = G__10665;
continue;
} else {
var temp__4425__auto___10666 = cljs.core.seq(seq__10649_10655);
if(temp__4425__auto___10666){
var seq__10649_10667__$1 = temp__4425__auto___10666;
if(cljs.core.chunked_seq_QMARK_(seq__10649_10667__$1)){
var c__4945__auto___10668 = cljs.core.chunk_first(seq__10649_10667__$1);
var G__10669 = cljs.core.chunk_rest(seq__10649_10667__$1);
var G__10670 = c__4945__auto___10668;
var G__10671 = cljs.core.count(c__4945__auto___10668);
var G__10672 = (0);
seq__10649_10655 = G__10669;
chunk__10650_10656 = G__10670;
count__10651_10657 = G__10671;
i__10652_10658 = G__10672;
continue;
} else {
var vec__10654_10673 = cljs.core.first(seq__10649_10667__$1);
var __10674 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10654_10673,(0),null);
var spec_10675__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10654_10673,(1),null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(deps,cljs.core.conj,spec_10675__$1);

var G__10676 = cljs.core.next(seq__10649_10667__$1);
var G__10677 = null;
var G__10678 = (0);
var G__10679 = (0);
seq__10649_10655 = G__10676;
chunk__10650_10656 = G__10677;
count__10651_10657 = G__10678;
i__10652_10658 = G__10679;
continue;
}
} else {
}
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"import","import",-1399500709),import_map,new cljs.core.Keyword(null,"require","require",-468001333),import_map], null);
});
/**
 * Given a spec form check whether the spec namespace requires a macro file
 * of the same name. If so return true.
 */
cljs.analyzer.macro_autoload_ns_QMARK_ = (function cljs$analyzer$macro_autoload_ns_QMARK_(form){
if(cljs.analyzer._STAR_macro_infer_STAR_){
var ns = ((cljs.core.sequential_QMARK_(form))?cljs.core.first(form):form);
var map__10681 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns], null));
var map__10681__$1 = ((cljs.core.seq_QMARK_(map__10681))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10681):map__10681);
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10681__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10681__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var or__4161__auto__ = cljs.core.some(cljs.core.PersistentHashSet.fromArray([ns], true),cljs.core.vals(use_macros));
if(or__4161__auto__){
return or__4161__auto__;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.fromArray([ns], true),cljs.core.vals(require_macros));
}
} else {
return null;
}
});
/**
 * Given an original set of ns specs desugar :include-macros and :refer-macros
 * usage into only primitive spec forms - :use, :require, :use-macros,
 * :require-macros. If a library includes a macro file of with the same name
 * as the namespace will also be desugared.
 */
cljs.analyzer.desugar_ns_specs = (function cljs$analyzer$desugar_ns_specs(args){
var map__10688 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__10689){
var vec__10690 = p__10689;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10690,(0),null);
var specs = cljs.core.nthnext(vec__10690,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,specs)], null);
}),args));
var map__10688__$1 = ((cljs.core.seq_QMARK_(map__10688))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10688):map__10688);
var indexed = map__10688__$1;
var require = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10688__$1,new cljs.core.Keyword(null,"require","require",-468001333));
var sugar_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"include-macros","include-macros",1228110289),null,new cljs.core.Keyword(null,"refer-macros","refer-macros",-1906841953),null], null), null);
var remove_from_spec = ((function (map__10688,map__10688__$1,indexed,require,sugar_keys){
return (function (pred,spec){
while(true){
if(cljs.core.not((function (){var and__4149__auto__ = cljs.core.sequential_QMARK_(spec);
if(and__4149__auto__){
return cljs.core.some(pred,spec);
} else {
return and__4149__auto__;
}
})())){
return spec;
} else {
var vec__10691 = cljs.core.split_with(cljs.core.complement(pred),spec);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10691,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10691,(1),null);
var G__10693 = pred;
var G__10694 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(l,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),r));
pred = G__10693;
spec = G__10694;
continue;
}
break;
}
});})(map__10688,map__10688__$1,indexed,require,sugar_keys))
;
var replace_refer_macros = ((function (map__10688,map__10688__$1,indexed,require,sugar_keys,remove_from_spec){
return (function (spec){
if(!(cljs.core.sequential_QMARK_(spec))){
return spec;
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__10688,map__10688__$1,indexed,require,sugar_keys,remove_from_spec){
return (function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"refer-macros","refer-macros",-1906841953))){
return new cljs.core.Keyword(null,"refer","refer",-964295553);
} else {
return x;
}
});})(map__10688,map__10688__$1,indexed,require,sugar_keys,remove_from_spec))
,spec);
}
});})(map__10688,map__10688__$1,indexed,require,sugar_keys,remove_from_spec))
;
var reload_spec_QMARK_ = ((function (map__10688,map__10688__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros){
return (function (p1__10682_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null], null), null).call(null,p1__10682_SHARP_);
});})(map__10688,map__10688__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros))
;
var to_macro_specs = ((function (map__10688,map__10688__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_){
return (function (specs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__10688,map__10688__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_){
return (function (x){
if(cljs.core.not(reload_spec_QMARK_(x))){
return replace_refer_macros(remove_from_spec(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"refer","refer",-964295553),null], null), null),remove_from_spec(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-macros","include-macros",1228110289),null], null), null),x)));
} else {
return x;
}
});})(map__10688,map__10688__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_))
,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__10688,map__10688__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_){
return (function (x){
var or__4161__auto__ = (function (){var and__4149__auto__ = cljs.core.sequential_QMARK_(x);
if(and__4149__auto__){
return cljs.core.some(sugar_keys,x);
} else {
return and__4149__auto__;
}
})();
if(or__4161__auto__){
return or__4161__auto__;
} else {
var or__4161__auto____$1 = reload_spec_QMARK_(x);
if(or__4161__auto____$1){
return or__4161__auto____$1;
} else {
return cljs.analyzer.macro_autoload_ns_QMARK_(x);
}
}
});})(map__10688,map__10688__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_))
,specs));
});})(map__10688,map__10688__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_))
;
var remove_sugar = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(remove_from_spec,sugar_keys);
var temp__4423__auto__ = cljs.core.seq(to_macro_specs(require));
if(temp__4423__auto__){
var require_specs = temp__4423__auto__;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (require_specs,temp__4423__auto__,map__10688,map__10688__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_,to_macro_specs,remove_sugar){
return (function (x){
if(cljs.core.not(reload_spec_QMARK_(x))){
var vec__10692 = x;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10692,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10692,(1),null);
return cljs.core.cons(k,cljs.core.map.cljs$core$IFn$_invoke$arity$2(remove_sugar,v));
} else {
return x;
}
});})(require_specs,temp__4423__auto__,map__10688,map__10688__$1,indexed,require,sugar_keys,remove_from_spec,replace_refer_macros,reload_spec_QMARK_,to_macro_specs,remove_sugar))
,cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(indexed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"require-macros","require-macros",707947416)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentVector.EMPTY),require_specs));
} else {
return args;
}
});
cljs.analyzer.find_def_clash = (function cljs$analyzer$find_def_clash(env,ns,segments){
var to_check = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (xs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.butlast(xs))),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.last(xs))], null);
}),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),cljs.core.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentVector.EMPTY,segments)));
var seq__10701 = cljs.core.seq(to_check);
var chunk__10702 = null;
var count__10703 = (0);
var i__10704 = (0);
while(true){
if((i__10704 < count__10703)){
var vec__10705 = chunk__10702.cljs$core$IIndexed$_nth$arity$2(null,i__10704);
var clash_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10705,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10705,(1),null);
if(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),clash_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),name], null))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(clash_ns)].join(''),[cljs.core.str(name)].join(''))], null));
} else {
}

var G__10707 = seq__10701;
var G__10708 = chunk__10702;
var G__10709 = count__10703;
var G__10710 = (i__10704 + (1));
seq__10701 = G__10707;
chunk__10702 = G__10708;
count__10703 = G__10709;
i__10704 = G__10710;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10701);
if(temp__4425__auto__){
var seq__10701__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10701__$1)){
var c__4945__auto__ = cljs.core.chunk_first(seq__10701__$1);
var G__10711 = cljs.core.chunk_rest(seq__10701__$1);
var G__10712 = c__4945__auto__;
var G__10713 = cljs.core.count(c__4945__auto__);
var G__10714 = (0);
seq__10701 = G__10711;
chunk__10702 = G__10712;
count__10703 = G__10713;
i__10704 = G__10714;
continue;
} else {
var vec__10706 = cljs.core.first(seq__10701__$1);
var clash_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10706,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10706,(1),null);
if(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),clash_ns,new cljs.core.Keyword(null,"defs","defs",1398449717),name], null))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"ns-var-clash","ns-var-clash",-280494668),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),ns,new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.symbol.cljs$core$IFn$_invoke$arity$2([cljs.core.str(clash_ns)].join(''),[cljs.core.str(name)].join(''))], null));
} else {
}

var G__10715 = cljs.core.next(seq__10701__$1);
var G__10716 = null;
var G__10717 = (0);
var G__10718 = (0);
seq__10701 = G__10715;
chunk__10702 = G__10716;
count__10703 = G__10717;
i__10704 = G__10718;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.analyzer.macro_ns_name = (function cljs$analyzer$macro_ns_name(name){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(name),cljs.core.str("$macros")].join(''));
});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"ns","ns",2082130287,null),(function (_,env,p__10721,___$1,opts){
var vec__10722 = p__10721;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10722,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10722,(1),null);
var args = cljs.core.nthnext(vec__10722,(2));
var form = vec__10722;
if((name instanceof cljs.core.Symbol)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Namespaces must be named by a symbol.");
}

var name__$1 = (function (){var G__10723 = name;
var G__10723__$1 = ((new cljs.core.Keyword(null,"macros-ns","macros-ns",1626844933).cljs$core$IFn$_invoke$arity$1(opts))?cljs.analyzer.macro_ns_name(G__10723):G__10723);
return G__10723__$1;
})();
var segments_10735 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.name(name__$1),/\./);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(segments_10735))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"single-segment-namespace","single-segment-namespace",-491924469),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name__$1], null));
} else {
}

if(cljs.core.some(cljs.analyzer.js_reserved,segments_10735)){
cljs.analyzer.warning(new cljs.core.Keyword(null,"munged-namespace","munged-namespace",-101986199),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name__$1], null));
} else {
}

cljs.analyzer.find_def_clash(env,name__$1,segments_10735);

var docstring = ((typeof cljs.core.first(args) === 'string')?cljs.core.first(args):null);
var mdocstr = new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(name__$1));
var args__$1 = ((docstring)?cljs.core.next(args):args);
var metadata = ((cljs.core.map_QMARK_(cljs.core.first(args__$1)))?cljs.core.first(args__$1):null);
var form_meta = cljs.core.meta(form);
var args__$2 = cljs.analyzer.desugar_ns_specs(((metadata)?cljs.core.next(args__$1):args__$1));
var name__$2 = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(name__$1,cljs.core.merge,metadata);
var excludes = cljs.analyzer.parse_ns_excludes(env,args__$2);
var deps = (function (){var G__10725 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10725) : cljs.core.atom.call(null,G__10725));
})();
var aliases = (function (){var G__10726 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fns","fns",1185138786),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"macros","macros",811339431),cljs.core.PersistentArrayMap.EMPTY], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10726) : cljs.core.atom.call(null,G__10726));
})();
var spec_parsers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"require","require",-468001333),cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,false,deps,cljs.core.array_seq([aliases], 0)),new cljs.core.Keyword(null,"require-macros","require-macros",707947416),cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,true,deps,cljs.core.array_seq([aliases], 0)),new cljs.core.Keyword(null,"use","use",-1846382424),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,false,deps,cljs.core.array_seq([aliases], 0)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.use__GT_require,env)),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.parse_require_spec,env,true,deps,cljs.core.array_seq([aliases], 0)),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.use__GT_require,env)),new cljs.core.Keyword(null,"import","import",-1399500709),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.parse_import_spec,env,deps)], null);
var valid_forms = (function (){var G__10727 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),null,new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),null,new cljs.core.Keyword(null,"import","import",-1399500709),null], null), null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10727) : cljs.core.atom.call(null,G__10727));
})();
var reload = (function (){var G__10728 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),null], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10728) : cljs.core.atom.call(null,G__10728));
})();
var reloads = (function (){var G__10729 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10729) : cljs.core.atom.call(null,G__10729));
})();
var map__10724 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__10722,___$2,name,args,form){
return (function (m,p__10730){
var vec__10731 = p__10730;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10731,(0),null);
var libs = cljs.core.nthnext(vec__10731,(1));
if(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),null,new cljs.core.Keyword(null,"use","use",-1846382424),null,new cljs.core.Keyword(null,"require","require",-468001333),null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),null,new cljs.core.Keyword(null,"import","import",-1399500709),null], null), null).call(null,k)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Only :refer-clojure, :require, :require-macros, :use and :use-macros libspecs supported");
}

if((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(valid_forms) : cljs.core.deref.call(null,valid_forms)).call(null,k)){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,[cljs.core.str("Only one "),cljs.core.str(k),cljs.core.str(" form is allowed per namespace definition")].join(''));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(valid_forms,cljs.core.disj,k);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"import","import",-1399500709),k)){
} else {
if(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reload","reload",863702807),null], null), null),libs)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reload,cljs.core.assoc,k,new cljs.core.Keyword(null,"reload","reload",863702807));
} else {
}

if(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null], null), null),libs)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reload,cljs.core.assoc,k,new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
} else {
}
}

var temp__4425__auto___10736 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__10731,k,libs,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__10722,___$2,name,args,form){
return (function (p1__10719_SHARP_){
return new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__10719_SHARP_));
});})(vec__10731,k,libs,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__10722,___$2,name,args,form))
,libs));
if(temp__4425__auto___10736){
var xs_10737 = temp__4425__auto___10736;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reloads,cljs.core.assoc,k,cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,xs_10737),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (xs_10737,temp__4425__auto___10736,vec__10731,k,libs,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__10722,___$2,name,args,form){
return (function (p1__10720_SHARP_){
return new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__10720_SHARP_));
});})(xs_10737,temp__4425__auto___10736,vec__10731,k,libs,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__10722,___$2,name,args,form))
,xs_10737)));
} else {
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge_with,cljs.core.merge,m,cljs.core.map.cljs$core$IFn$_invoke$arity$2((spec_parsers.cljs$core$IFn$_invoke$arity$1 ? spec_parsers.cljs$core$IFn$_invoke$arity$1(k) : spec_parsers.call(null,k)),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reload","reload",863702807),null,new cljs.core.Keyword(null,"reload-all","reload-all",761570200),null], null), null),libs)));
});})(docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__10722,___$2,name,args,form))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__10722,___$2,name,args,form){
return (function (p__10732){
var vec__10733 = p__10732;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10733,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440));
});})(docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,name__$1,vec__10722,___$2,name,args,form))
,args__$2));
var map__10724__$1 = ((cljs.core.seq_QMARK_(map__10724))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10724):map__10724);
var params = map__10724__$1;
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10724__$1,new cljs.core.Keyword(null,"use","use",-1846382424));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10724__$1,new cljs.core.Keyword(null,"require","require",-468001333));
var use_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10724__$1,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10724__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var imports = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10724__$1,new cljs.core.Keyword(null,"import","import",-1399500709));
if((function (){var and__4149__auto__ = cljs.analyzer._STAR_analyze_deps_STAR_;
if(and__4149__auto__){
return cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(deps) : cljs.core.deref.call(null,deps)));
} else {
return and__4149__auto__;
}
})()){
} else {
}

if((function (){var and__4149__auto__ = cljs.analyzer._STAR_analyze_deps_STAR_;
if(and__4149__auto__){
return cljs.core.seq(uses);
} else {
return and__4149__auto__;
}
})()){
cljs.analyzer.check_uses(uses,env);
} else {
}

cljs.analyzer._STAR_cljs_ns_STAR_ = name__$2;

var ns_info = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"name","name",1843675177),name__$2,new cljs.core.Keyword(null,"doc","doc",1913296891),(function (){var or__4161__auto__ = docstring;
if(or__4161__auto__){
return or__4161__auto__;
} else {
return mdocstr;
}
})(),new cljs.core.Keyword(null,"excludes","excludes",-1791725945),excludes,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),use_macros,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),require_macros,new cljs.core.Keyword(null,"uses","uses",232664692),uses,new cljs.core.Keyword(null,"requires","requires",-1201390927),requires,new cljs.core.Keyword(null,"imports","imports",-1249933394),imports], null);
var ns_info__$1 = ((new cljs.core.Keyword(null,"merge","merge",-1804319409).cljs$core$IFn$_invoke$arity$1(form_meta))?(function (){var ns_info_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name__$2], null));
if((cljs.core.count(ns_info_SINGLEQUOTE_) > (0))){
var merge_keys = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),new cljs.core.Keyword(null,"require-macros","require-macros",707947416),new cljs.core.Keyword(null,"uses","uses",232664692),new cljs.core.Keyword(null,"requires","requires",-1201390927),new cljs.core.Keyword(null,"imports","imports",-1249933394)], null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ns_info_SINGLEQUOTE_,cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.array_seq([cljs.core.select_keys(ns_info_SINGLEQUOTE_,merge_keys),cljs.core.select_keys(ns_info,merge_keys)], 0))], 0));
} else {
return ns_info;
}
})():ns_info);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),name__$2], null),cljs.core.merge,cljs.core.array_seq([ns_info__$1], 0));

return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"reloads","reloads",610698522),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reloads) : cljs.core.deref.call(null,reloads))], null),(function (){var G__10734 = ns_info__$1;
var G__10734__$1 = (((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)).call(null,new cljs.core.Keyword(null,"use","use",-1846382424)))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__10734,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uses","uses",232664692)], null),((function (G__10734,ns_info,ns_info__$1,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__10724,map__10724__$1,params,uses,requires,use_macros,require_macros,imports,name__$1,vec__10722,___$2,name,args,form){
return (function (m){
return cljs.core.with_meta(m,new cljs.core.PersistentArrayMap.fromArray([(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)).call(null,new cljs.core.Keyword(null,"use","use",-1846382424)),true], true, false));
});})(G__10734,ns_info,ns_info__$1,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__10724,map__10724__$1,params,uses,requires,use_macros,require_macros,imports,name__$1,vec__10722,___$2,name,args,form))
):G__10734);
var G__10734__$2 = (((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)).call(null,new cljs.core.Keyword(null,"require","require",-468001333)))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__10734__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"requires","requires",-1201390927)], null),((function (G__10734,G__10734__$1,ns_info,ns_info__$1,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__10724,map__10724__$1,params,uses,requires,use_macros,require_macros,imports,name__$1,vec__10722,___$2,name,args,form){
return (function (m){
return cljs.core.with_meta(m,new cljs.core.PersistentArrayMap.fromArray([(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reload) : cljs.core.deref.call(null,reload)).call(null,new cljs.core.Keyword(null,"require","require",-468001333)),true], true, false));
});})(G__10734,G__10734__$1,ns_info,ns_info__$1,docstring,mdocstr,args__$1,metadata,form_meta,args__$2,name__$2,excludes,deps,aliases,spec_parsers,valid_forms,reload,reloads,map__10724,map__10724__$1,params,uses,requires,use_macros,require_macros,imports,name__$1,vec__10722,___$2,name,args,form))
):G__10734__$1);
return G__10734__$2;
})()], 0));
}));
cljs.analyzer.parse_type = (function cljs$analyzer$parse_type(op,env,p__10738){
var vec__10742 = p__10738;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10742,(0),null);
var tsym = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10742,(1),null);
var fields = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10742,(2),null);
var pmasks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10742,(3),null);
var body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10742,(4),null);
var form = vec__10742;
var t = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),tsym));
var locals = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (t,vec__10742,_,tsym,fields,pmasks,body,form){
return (function (m,fld){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,fld,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"mutable","mutable",875778266),new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411),new cljs.core.Keyword(null,"shadow","shadow",873231803)],[fld,true,cljs.analyzer.get_col(fld,env),new cljs.core.Keyword(null,"unsynchronized-mutable","unsynchronized-mutable",-164143950).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(fld)),cljs.analyzer.get_line(fld,env),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(fld)),new cljs.core.Keyword(null,"mutable","mutable",875778266).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(fld)),new cljs.core.Keyword(null,"volatile-mutable","volatile-mutable",1731728411).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(fld)),(m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(fld) : m.call(null,fld))]));
});})(t,vec__10742,_,tsym,fields,pmasks,body,form))
,cljs.core.PersistentArrayMap.EMPTY,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),op))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fields,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null)):fields));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env)),new cljs.core.Keyword(null,"defs","defs",1398449717),tsym], null),((function (t,locals,vec__10742,_,tsym,fields,pmasks,body,form){
return (function (m){
var m__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((function (){var or__4161__auto__ = m;
if(or__4161__auto__){
return or__4161__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"name","name",1843675177),t,cljs.core.array_seq([new cljs.core.Keyword(null,"type","type",1174270348),true,new cljs.core.Keyword(null,"num-fields","num-fields",1529154024),cljs.core.count(fields),new cljs.core.Keyword(null,"record","record",-779106859),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),op)], 0));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([m__$1,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.meta(tsym),new cljs.core.Keyword(null,"protocols","protocols",-5615896)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocols","protocols",-5615896),new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(tsym))], null),cljs.analyzer.source_info.cljs$core$IFn$_invoke$arity$2(tsym,env)], 0));
});})(t,locals,vec__10742,_,tsym,fields,pmasks,body,form))
);

return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"op","op",-1882987955),op,new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"t","t",-1397832519),t,new cljs.core.Keyword(null,"fields","fields",-1932066230),fields,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698),pmasks,new cljs.core.Keyword(null,"body","body",-2049205669),(function (){var G__10743 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"locals","locals",535295783),locals);
var G__10744 = body;
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__10743,G__10744) : cljs.analyzer.analyze.call(null,G__10743,G__10744));
})()], null);
});
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null),(function (_,env,form,___$1,___$2){
return cljs.analyzer.parse_type(new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),env,form);
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null),(function (_,env,form,___$1,___$2){
return cljs.analyzer.parse_type(new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),env,form);
}));
cljs.analyzer.property_symbol_QMARK_ = (function cljs$analyzer$property_symbol_QMARK_(p1__10745_SHARP_){
return cljs.core.boolean$((function (){var and__4149__auto__ = (p1__10745_SHARP_ instanceof cljs.core.Symbol);
if(and__4149__auto__){
return cljs.core.re_matches(/^-.*/,cljs.core.name(p1__10745_SHARP_));
} else {
return and__4149__auto__;
}
})());
});
cljs.analyzer.classify_dot_form = (function cljs$analyzer$classify_dot_form(p__10746){
var vec__10748 = p__10746;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10748,(0),null);
var member = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10748,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10748,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((target == null))?new cljs.core.Keyword("cljs.analyzer","error","cljs.analyzer/error",-65289642):new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889)
),((cljs.analyzer.property_symbol_QMARK_(member))?new cljs.core.Keyword("cljs.analyzer","property","cljs.analyzer/property",1113330886):(((member instanceof cljs.core.Symbol))?new cljs.core.Keyword("cljs.analyzer","symbol","cljs.analyzer/symbol",933248902):((cljs.core.seq_QMARK_(member))?new cljs.core.Keyword("cljs.analyzer","list","cljs.analyzer/list",-539585923):new cljs.core.Keyword("cljs.analyzer","error","cljs.analyzer/error",-65289642)
))),(((args == null))?cljs.core.List.EMPTY:new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889)
)], null);
});
if(typeof cljs.analyzer.build_dot_form !== 'undefined'){
} else {
cljs.analyzer.build_dot_form = (function (){var method_table__5055__auto__ = (function (){var G__10750 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10750) : cljs.core.atom.call(null,G__10750));
})();
var prefer_table__5056__auto__ = (function (){var G__10751 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10751) : cljs.core.atom.call(null,G__10751));
})();
var method_cache__5057__auto__ = (function (){var G__10752 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10752) : cljs.core.atom.call(null,G__10752));
})();
var cached_hierarchy__5058__auto__ = (function (){var G__10753 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10753) : cljs.core.atom.call(null,G__10753));
})();
var hierarchy__5059__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.analyzer","build-dot-form"),((function (method_table__5055__auto__,prefer_table__5056__auto__,method_cache__5057__auto__,cached_hierarchy__5058__auto__,hierarchy__5059__auto__){
return (function (p1__10749_SHARP_){
return cljs.analyzer.classify_dot_form(p1__10749_SHARP_);
});})(method_table__5055__auto__,prefer_table__5056__auto__,method_cache__5057__auto__,cached_hierarchy__5058__auto__,hierarchy__5059__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5059__auto__,method_table__5055__auto__,prefer_table__5056__auto__,method_cache__5057__auto__,cached_hierarchy__5058__auto__));
})();
}
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","property","cljs.analyzer/property",1113330886),cljs.core.List.EMPTY], null),(function (p__10754){
var vec__10755 = p__10754;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10755,(0),null);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10755,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10755,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dot-action","dot-action",-1460119601),new cljs.core.Keyword("cljs.analyzer","access","cljs.analyzer/access",-1639036494),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"field","field",-1302436500),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(prop).substring((1)))], null);
}));
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","property","cljs.analyzer/property",1113330886),new cljs.core.Keyword("cljs.analyzer","list","cljs.analyzer/list",-539585923)], null),(function (p__10756){
var vec__10757 = p__10756;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10757,(0),null);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10757,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10757,(2),null);
throw (new Error([cljs.core.str("Cannot provide arguments "),cljs.core.str(args),cljs.core.str(" on property access "),cljs.core.str(prop)].join('')));
}));
/**
 * Builds the intermediate method call map used to reason about the parsed form during
 * compilation.
 */
cljs.analyzer.build_method_call = (function cljs$analyzer$build_method_call(target,meth,args){
if((meth instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dot-action","dot-action",-1460119601),new cljs.core.Keyword("cljs.analyzer","call","cljs.analyzer/call",964149800),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"method","method",55703592),meth,new cljs.core.Keyword(null,"args","args",1315556576),args], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dot-action","dot-action",-1460119601),new cljs.core.Keyword("cljs.analyzer","call","cljs.analyzer/call",964149800),new cljs.core.Keyword(null,"target","target",253001721),target,new cljs.core.Keyword(null,"method","method",55703592),cljs.core.first(meth),new cljs.core.Keyword(null,"args","args",1315556576),args], null);
}
});
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","symbol","cljs.analyzer/symbol",933248902),new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889)], null),(function (p__10758){
var vec__10759 = p__10758;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10759,(0),null);
var meth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10759,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10759,(2),null);
return cljs.analyzer.build_method_call(target,meth,args);
}));
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","symbol","cljs.analyzer/symbol",933248902),cljs.core.List.EMPTY], null),(function (p__10760){
var vec__10761 = p__10760;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10761,(0),null);
var meth = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10761,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10761,(2),null);
return cljs.analyzer.build_method_call(target,meth,args);
}));
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","expr","cljs.analyzer/expr",1708655889),new cljs.core.Keyword("cljs.analyzer","list","cljs.analyzer/list",-539585923),cljs.core.List.EMPTY], null),(function (p__10762){
var vec__10763 = p__10762;
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10763,(0),null);
var meth_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10763,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10763,(2),null);
return cljs.analyzer.build_method_call(target,cljs.core.first(meth_expr),cljs.core.rest(meth_expr));
}));
cljs.analyzer.build_dot_form.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (dot_form){
throw (new Error([cljs.core.str("Unknown dot form of "),cljs.core.str(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),dot_form)),cljs.core.str(" with classification "),cljs.core.str(cljs.analyzer.classify_dot_form(dot_form))].join('')));
}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,".",".",1975675962,null),(function (_,env,p__10765,___$1,___$2){
var vec__10766 = p__10765;
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10766,(0),null);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10766,(1),null);
var vec__10767 = cljs.core.nthnext(vec__10766,(2));
var field = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10767,(0),null);
var member_PLUS_ = cljs.core.nthnext(vec__10767,(1));
var form = vec__10766;
var _STAR_recur_frames_STAR_10768 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var map__10769 = (function (){var G__10770 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [target,field,member_PLUS_], null);
return (cljs.analyzer.build_dot_form.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.build_dot_form.cljs$core$IFn$_invoke$arity$1(G__10770) : cljs.analyzer.build_dot_form.call(null,G__10770));
})();
var map__10769__$1 = ((cljs.core.seq_QMARK_(map__10769))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10769):map__10769);
var dot_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10769__$1,new cljs.core.Keyword(null,"dot-action","dot-action",-1460119601));
var target__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10769__$1,new cljs.core.Keyword(null,"target","target",253001721));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10769__$1,new cljs.core.Keyword(null,"method","method",55703592));
var field__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10769__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10769__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var enve = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var targetexpr = (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,target__$1) : cljs.analyzer.analyze.call(null,enve,target__$1));
var G__10771 = (((dot_action instanceof cljs.core.Keyword))?dot_action.fqn:null);
switch (G__10771) {
case "cljs.analyzer/access":
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"dot","dot",1442709401),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"target","target",253001721),targetexpr,new cljs.core.Keyword(null,"field","field",-1302436500),field__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [targetexpr], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form))], null);

break;
case "cljs.analyzer/call":
var argexprs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__10771,map__10769,map__10769__$1,dot_action,target__$1,method,field__$1,args,enve,targetexpr,_STAR_recur_frames_STAR_10768,vec__10766,___$3,target,vec__10767,field,member_PLUS_,form){
return (function (p1__10764_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,p1__10764_SHARP_) : cljs.analyzer.analyze.call(null,enve,p1__10764_SHARP_));
});})(G__10771,map__10769,map__10769__$1,dot_action,target__$1,method,field__$1,args,enve,targetexpr,_STAR_recur_frames_STAR_10768,vec__10766,___$3,target,vec__10767,field,member_PLUS_,form))
,args);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"dot","dot",1442709401),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"target","target",253001721),targetexpr,new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"args","args",1315556576),argexprs,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [targetexpr], null),argexprs),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form))], null);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(dot_action)].join('')));

}
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_10768;
}}));
cljs.analyzer.parse.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),(function (op,env,p__10775,_,___$1){
var vec__10776 = p__10775;
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10776,(0),null);
var jsform = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10776,(1),null);
var args = cljs.core.nthnext(vec__10776,(2));
var form = vec__10776;
if(typeof jsform === 'string'){
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env,"Invalid js* form");
}

if(args){
var _STAR_recur_frames_STAR_10777 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{var seg = ((function (_STAR_recur_frames_STAR_10777,vec__10776,___$2,jsform,args,form){
return (function cljs$analyzer$seg(s){
var idx = s.indexOf("~{");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),idx)){
return cljs.core._conj(cljs.core.List.EMPTY,s);
} else {
var end = s.indexOf("}",idx);
return (new cljs.core.LazySeq(null,((function (end,idx,_STAR_recur_frames_STAR_10777,vec__10776,___$2,jsform,args,form){
return (function (){
return cljs.core.cons(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),idx),cljs$analyzer$seg(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(end + (1)))));
});})(end,idx,_STAR_recur_frames_STAR_10777,vec__10776,___$2,jsform,args,form))
,null,null));
}
});})(_STAR_recur_frames_STAR_10777,vec__10776,___$2,jsform,args,form))
;
var enve = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var argexprs = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seg,enve,_STAR_recur_frames_STAR_10777,vec__10776,___$2,jsform,args,form){
return (function (p1__10773_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,p1__10773_SHARP_) : cljs.analyzer.analyze.call(null,enve,p1__10773_SHARP_));
});})(seg,enve,_STAR_recur_frames_STAR_10777,vec__10776,___$2,jsform,args,form))
,args));
if(new cljs.core.Keyword(null,"numeric","numeric",-1495594714).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form))){
var types_10780 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (seg,enve,argexprs,_STAR_recur_frames_STAR_10777,vec__10776,___$2,jsform,args,form){
return (function (p1__10774_SHARP_){
return cljs.analyzer.infer_tag(env,p1__10774_SHARP_);
});})(seg,enve,argexprs,_STAR_recur_frames_STAR_10777,vec__10776,___$2,jsform,args,form))
,argexprs);
if(cljs.core.every_QMARK_(((function (types_10780,seg,enve,argexprs,_STAR_recur_frames_STAR_10777,vec__10776,___$2,jsform,args,form){
return (function (t){
var or__4161__auto__ = (t == null);
if(or__4161__auto__){
return or__4161__auto__;
} else {
var or__4161__auto____$1 = (function (){var and__4149__auto__ = (t instanceof cljs.core.Symbol);
if(and__4149__auto__){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"long","long",1469079434,null),null,new cljs.core.Symbol(null,"double","double",-1769548886,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null], null), null).call(null,t);
} else {
return and__4149__auto__;
}
})();
if(or__4161__auto____$1){
return or__4161__auto____$1;
} else {
return (cljs.core.set_QMARK_(t)) && ((cljs.core.contains_QMARK_(t,new cljs.core.Symbol(null,"number","number",-1084057331,null))) || (cljs.core.contains_QMARK_(t,new cljs.core.Symbol(null,"long","long",1469079434,null))) || (cljs.core.contains_QMARK_(t,new cljs.core.Symbol(null,"double","double",-1769548886,null))) || (cljs.core.contains_QMARK_(t,new cljs.core.Symbol(null,"any","any",-948528346,null))));
}
}
});})(types_10780,seg,enve,argexprs,_STAR_recur_frames_STAR_10777,vec__10776,___$2,jsform,args,form))
,types_10780)){
} else {
cljs.analyzer.warning(new cljs.core.Keyword(null,"invalid-arithmetic","invalid-arithmetic",1917075065),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"js-op","js-op",-1046277897),new cljs.core.Keyword(null,"js-op","js-op",-1046277897).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form)),new cljs.core.Keyword(null,"types","types",590030639),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,types_10780)], null));
}
} else {
}

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"segs","segs",-1940299576),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"js-op","js-op",-1046277897),new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"tag","tag",-1290361223)],[argexprs,argexprs,new cljs.core.Keyword(null,"numeric","numeric",-1495594714).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form)),seg(jsform),new cljs.core.Keyword(null,"js","js",1768080579),env,new cljs.core.Keyword(null,"js-op","js-op",-1046277897).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form)),form,(function (){var or__4161__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form));
if(or__4161__auto__){
return or__4161__auto__;
} else {
var or__4161__auto____$1 = (function (){var and__4149__auto__ = new cljs.core.Keyword(null,"numeric","numeric",-1495594714).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form));
if(and__4149__auto__){
return new cljs.core.Symbol(null,"number","number",-1084057331,null);
} else {
return and__4149__auto__;
}
})();
if(or__4161__auto____$1){
return or__4161__auto____$1;
} else {
return null;
}
}
})()]);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_10777;
}} else {
var interp = ((function (vec__10776,___$2,jsform,args,form){
return (function cljs$analyzer$interp(s){
var idx = s.indexOf("~{");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),idx)){
return cljs.core._conj(cljs.core.List.EMPTY,s);
} else {
var end = s.indexOf("}",idx);
var inner = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(env,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,((2) + idx),end))));
return (new cljs.core.LazySeq(null,((function (end,inner,idx,vec__10776,___$2,jsform,args,form){
return (function (){
return cljs.core.cons(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),idx),cljs.core.cons(inner,cljs$analyzer$interp(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(end + (1))))));
});})(end,inner,idx,vec__10776,___$2,jsform,args,form))
,null,null));
}
});})(vec__10776,___$2,jsform,args,form))
;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"js","js",1768080579),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,interp(jsform)),new cljs.core.Keyword(null,"tag","tag",-1290361223),(function (){var or__4161__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form));
if(or__4161__auto__){
return or__4161__auto__;
} else {
var or__4161__auto____$1 = (function (){var and__4149__auto__ = new cljs.core.Keyword(null,"numeric","numeric",-1495594714).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form));
if(and__4149__auto__){
return new cljs.core.Symbol(null,"number","number",-1084057331,null);
} else {
return and__4149__auto__;
}
})();
if(or__4161__auto____$1){
return or__4161__auto____$1;
} else {
return null;
}
}
})(),new cljs.core.Keyword(null,"js-op","js-op",-1046277897),new cljs.core.Keyword(null,"js-op","js-op",-1046277897).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form)),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"numeric","numeric",-1495594714).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form))], null);
}
}));
cljs.analyzer.analyzed_QMARK_ = (function cljs$analyzer$analyzed_QMARK_(f){
return cljs.core.contains_QMARK_(cljs.core.meta(f),new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162));
});
cljs.analyzer.all_values_QMARK_ = (function cljs$analyzer$all_values_QMARK_(exprs){
return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"constant","constant",-379609303),null,new cljs.core.Keyword(null,"var","var",-769682797),null], null), null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955),exprs));
});
cljs.analyzer.valid_arity_QMARK_ = (function cljs$analyzer$valid_arity_QMARK_(argc,method_params){
return cljs.core.boolean$(cljs.core.some(cljs.core.PersistentHashSet.fromArray([argc], true),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,method_params)));
});
cljs.analyzer.parse_invoke_STAR_ = (function cljs$analyzer$parse_invoke_STAR_(env,p__10782){
var vec__10787 = p__10782;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10787,(0),null);
var args = cljs.core.nthnext(vec__10787,(1));
var form = vec__10787;
var enve = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var fexpr = (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,f) : cljs.analyzer.analyze.call(null,enve,f));
var argc = cljs.core.count(args);
var fn_var_QMARK_ = new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(fexpr));
if(fn_var_QMARK_){
var map__10788_10791 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(fexpr);
var map__10788_10792__$1 = ((cljs.core.seq_QMARK_(map__10788_10791))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10788_10791):map__10788_10791);
var variadic_10793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10788_10792__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var max_fixed_arity_10794 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10788_10792__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var method_params_10795 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10788_10792__$1,new cljs.core.Keyword(null,"method-params","method-params",-980792179));
var name_10796 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10788_10792__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if((!(cljs.analyzer.valid_arity_QMARK_(argc,method_params_10795))) && ((!(variadic_10793)) || ((variadic_10793) && ((argc < max_fixed_arity_10794))))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"fn-arity","fn-arity",-403576501),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name_10796,new cljs.core.Keyword(null,"argc","argc",-1452839519),argc], null));
} else {
}
} else {
}

var deprecated_QMARK__10797 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(fexpr));
var no_warn_QMARK__10798 = new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form));
if((cljs.core.boolean$(deprecated_QMARK__10797)) && (!(cljs.core.boolean$(no_warn_QMARK__10798)))){
cljs.analyzer.warning(new cljs.core.Keyword(null,"fn-deprecated","fn-deprecated",626877647),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fexpr","fexpr",-122857150),fexpr], null));
} else {
}

if((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(fexpr)) == null)){
} else {
cljs.analyzer.warning(new cljs.core.Keyword(null,"invoke-ctor","invoke-ctor",-756052704),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fexpr","fexpr",-122857150),fexpr], null));
}

var ana_expr = ((function (enve,fexpr,argc,fn_var_QMARK_,vec__10787,f,args,form){
return (function (p1__10781_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(enve,p1__10781_SHARP_) : cljs.analyzer.analyze.call(null,enve,p1__10781_SHARP_));
});})(enve,fexpr,argc,fn_var_QMARK_,vec__10787,f,args,form))
;
var argexprs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(ana_expr,args);
if((!(cljs.core.boolean$(cljs.analyzer._STAR_cljs_static_fns_STAR_))) || (!((f instanceof cljs.core.Symbol))) || (fn_var_QMARK_) || (cljs.analyzer.analyzed_QMARK_(f)) || (cljs.analyzer.all_values_QMARK_(argexprs))){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"invoke","invoke",1145927159),new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"f","f",-1597136552),fexpr,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.vec(argexprs),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fexpr], null),argexprs)], null);
} else {
var arg_syms = cljs.core.take.cljs$core$IFn$_invoke$arity$2(argc,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym));
var G__10789 = env;
var G__10790 = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core._conj(cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null)),cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(arg_syms,args))))))),cljs.core.array_seq([cljs.core._conj(cljs.core.List.EMPTY,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core._conj(cljs.core.List.EMPTY,cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(f,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162),true)),arg_syms))))], 0))));
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(G__10789,G__10790) : cljs.analyzer.analyze.call(null,G__10789,G__10790));
}
});
cljs.analyzer.parse_invoke = (function cljs$analyzer$parse_invoke(env,form){
var _STAR_recur_frames_STAR_10800 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.analyzer.parse_invoke_STAR_(env,form);
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_10800;
}});
/**
 * Finds the var associated with sym
 */
cljs.analyzer.analyze_symbol = (function cljs$analyzer$analyze_symbol(env,sym){
if(new cljs.core.Keyword(null,"quoted?","quoted?",1464649621).cljs$core$IFn$_invoke$arity$1(env)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),sym,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)], null);
} else {
var map__10804 = cljs.core.meta(sym);
var map__10804__$1 = ((cljs.core.seq_QMARK_(map__10804))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10804):map__10804);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10804__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10804__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var env__$1 = (function (){var G__10805 = env;
var G__10805__$1 = ((line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10805,new cljs.core.Keyword(null,"line","line",212345235),line):G__10805);
var G__10805__$2 = ((column)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10805__$1,new cljs.core.Keyword(null,"column","column",2078222095),column):G__10805__$1);
return G__10805__$2;
})();
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"env","env",-1815813235),env__$1,new cljs.core.Keyword(null,"form","form",-1624062471),sym], null);
var lb = (function (){var G__10806 = new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(env__$1);
return (sym.cljs$core$IFn$_invoke$arity$1 ? sym.cljs$core$IFn$_invoke$arity$1(G__10806) : sym.call(null,G__10806));
})();
if(lb){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ret,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.array_seq([new cljs.core.Keyword(null,"info","info",-317069002),lb], 0));
} else {
if(cljs.core.not(new cljs.core.Keyword(null,"def-var","def-var",-698214377).cljs$core$IFn$_invoke$arity$1(env__$1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ret,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.array_seq([new cljs.core.Keyword(null,"info","info",-317069002),((!(cljs.core.contains_QMARK_(cljs.core.meta(sym),new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162))))?cljs.analyzer.resolve_existing_var(env__$1,sym):cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env__$1,sym))], 0));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ret,new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var","var",-769682797),cljs.core.array_seq([new cljs.core.Keyword(null,"info","info",-317069002),cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(env__$1,sym)], 0));
}
}
}
});
cljs.analyzer.excluded_QMARK_ = (function cljs$analyzer$excluded_QMARK_(env,sym){
if(!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"excludes","excludes",-1791725945),sym) == null))){
return true;
} else {
return !((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177)),new cljs.core.Keyword(null,"excludes","excludes",-1791725945),sym) == null));
}
});
cljs.analyzer.used_QMARK_ = (function cljs$analyzer$used_QMARK_(env,sym){
if(!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),sym) == null))){
return true;
} else {
return !((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$5((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177)),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),sym) == null));
}
});
cljs.analyzer.get_expander_ns = (function cljs$analyzer$get_expander_ns(env,nstr){
if(("clojure.core" === nstr)){
return cljs.core.find_macros_ns(cljs.analyzer.CLJS_CORE_MACROS_SYM);
} else {
if(("clojure.repl" === nstr)){
return cljs.core.find_macros_ns(new cljs.core.Symbol(null,"cljs.repl","cljs.repl",1767065658,null));
} else {
if(goog.string.contains(nstr,".")){
return cljs.core.find_macros_ns(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(nstr));
} else {
var G__10808 = env;
var G__10808__$1 = (((G__10808 == null))?null:new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(G__10808));
var G__10808__$2 = (((G__10808__$1 == null))?null:new cljs.core.Keyword(null,"require-macros","require-macros",707947416).cljs$core$IFn$_invoke$arity$1(G__10808__$1));
var G__10808__$3 = (((G__10808__$2 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__10808__$2,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(nstr)));
var G__10808__$4 = (((G__10808__$3 == null))?null:cljs.core.find_ns(G__10808__$3));
return G__10808__$4;

}
}
}
});
cljs.analyzer.get_expander_STAR_ = (function cljs$analyzer$get_expander_STAR_(sym,env){
if((!((cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"locals","locals",535295783),sym) == null))) || ((cljs.analyzer.excluded_QMARK_(env,sym)) && (!(cljs.analyzer.used_QMARK_(env,sym))))){
return null;
} else {
var nstr = cljs.core.namespace(sym);
if(!((nstr == null))){
var ns = cljs.analyzer.get_expander_ns(env,nstr);
if((ns == null)){
return null;
} else {
return ns.findInternedVar(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym)));
}
} else {
var nsym = cljs.analyzer.gets.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),sym);
if(!((nsym == null))){
return cljs.core.find_macros_ns(nsym).findInternedVar(sym);
} else {
return cljs.core.find_macros_ns(cljs.analyzer.CLJS_CORE_MACROS_SYM).findInternedVar(sym);
}
}
}
});
/**
 * Given a sym, a symbol identifying a macro, and env, an analysis environment
 * return the corresponding Clojure macroexpander.
 */
cljs.analyzer.get_expander = (function cljs$analyzer$get_expander(sym,env){
var mvar = cljs.analyzer.get_expander_STAR_(sym,env);
if((!((mvar == null))) && (mvar.isMacro())){
return mvar;
} else {
return null;
}
});
cljs.analyzer.macroexpand_1_STAR_ = (function cljs$analyzer$macroexpand_1_STAR_(env,form){
var op = cljs.core.first(form);
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.specials,op) == null))){
return form;
} else {
var mac_var = (((op instanceof cljs.core.Symbol))?cljs.analyzer.get_expander(op,env):null);
if(!((mac_var == null))){
var form_SINGLEQUOTE_ = cljs.core.apply.cljs$core$IFn$_invoke$arity$4((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(mac_var) : cljs.core.deref.call(null,mac_var)),form,env,cljs.core.rest(form));
if(cljs.analyzer.cljs_seq_QMARK_(form_SINGLEQUOTE_)){
var sym_SINGLEQUOTE_ = cljs.core.first(form_SINGLEQUOTE_);
var sym = cljs.core.first(form);
if(cljs.core.symbol_identical_QMARK_(sym_SINGLEQUOTE_,cljs.analyzer.JS_STAR_SYM)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(form_SINGLEQUOTE_,cljs.core.merge,(function (){var G__10811 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"js-op","js-op",-1046277897),((cljs.core.namespace(sym))?sym:cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.core",[cljs.core.str(sym)].join('')))], null);
var G__10811__$1 = ((new cljs.core.Keyword("cljs.analyzer","numeric","cljs.analyzer/numeric",1415704188).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(mac_var)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10811,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),true):G__10811);
return G__10811__$1;
})());
} else {
return form_SINGLEQUOTE_;
}
} else {
return form_SINGLEQUOTE_;
}
} else {
if((op instanceof cljs.core.Symbol)){
var opname = [cljs.core.str(op)].join('');
if(("." === opname.charAt((0)))){
var vec__10812 = cljs.core.next(form);
var target = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10812,(0),null);
var args = cljs.core.nthnext(vec__10812,(1));
return cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$4(cljs.analyzer.DOT_SYM,target,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(opname,(1))),args),cljs.core.meta(form));
} else {
if(("." === opname.charAt((opname.length - (1))))){
return cljs.core.with_meta(cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.analyzer.NEW_SYM,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(opname,(0),(cljs.core.count(opname) - (1)))),cljs.core.next(form)),cljs.core.meta(form));
} else {
return form;

}
}
} else {
return form;
}
}
}
});
/**
 * Given a env, an analysis environment, and form, a ClojureScript form,
 * macroexpand the form once.
 */
cljs.analyzer.macroexpand_1 = (function cljs$analyzer$macroexpand_1(env,form){
var val__5595__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__5595__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{try{return cljs.analyzer.macroexpand_1_STAR_(env,form);
}catch (e10814){var err__5631__auto__ = e10814;
if(cljs.analyzer.analysis_error_QMARK_(err__5631__auto__)){
throw err__5631__auto__;
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,err__5631__auto__.message,err__5631__auto__);
}
}}finally {if((val__5595__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.analyzer.analyze_seq_STAR_ = (function cljs$analyzer$analyze_seq_STAR_(op,env,form,name,opts){
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.specials,op) == null))){
return (cljs.analyzer.parse.cljs$core$IFn$_invoke$arity$5 ? cljs.analyzer.parse.cljs$core$IFn$_invoke$arity$5(op,env,form,name,opts) : cljs.analyzer.parse.call(null,op,env,form,name,opts));
} else {
return cljs.analyzer.parse_invoke(env,form);
}
});
cljs.analyzer.analyze_seq_STAR__wrap = (function cljs$analyzer$analyze_seq_STAR__wrap(op,env,form,name,opts){
try{return cljs.analyzer.analyze_seq_STAR_(op,env,form,name,opts);
}catch (e10816){var err__5631__auto__ = e10816;
if(cljs.analyzer.analysis_error_QMARK_(err__5631__auto__)){
throw err__5631__auto__;
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,err__5631__auto__.message,err__5631__auto__);
}
}});
cljs.analyzer.analyze_seq = (function cljs$analyzer$analyze_seq(){
var args10817 = [];
var len__5200__auto___10820 = arguments.length;
var i__5201__auto___10821 = (0);
while(true){
if((i__5201__auto___10821 < len__5200__auto___10820)){
args10817.push((arguments[i__5201__auto___10821]));

var G__10822 = (i__5201__auto___10821 + (1));
i__5201__auto___10821 = G__10822;
continue;
} else {
}
break;
}

var G__10819 = args10817.length;
switch (G__10819) {
case 3:
return cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10817.length)].join('')));

}
});

cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$3 = (function (env,form,name){
return cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$4(env,form,name,null);
});

cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$4 = (function (env,form,name,opts){
if(new cljs.core.Keyword(null,"quoted?","quoted?",1464649621).cljs$core$IFn$_invoke$arity$1(env)){
return (cljs.analyzer.analyze_list.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze_list.cljs$core$IFn$_invoke$arity$2(env,form) : cljs.analyzer.analyze_list.call(null,env,form));
} else {
var line = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form));
var line__$1 = (((line == null))?new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env):null);
var col = new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form));
var col__$1 = (((col == null))?new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(env):null);
var env__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(env,new cljs.core.Keyword(null,"line","line",212345235),line__$1,cljs.core.array_seq([new cljs.core.Keyword(null,"column","column",2078222095),col__$1], 0));
var op = cljs.core.first(form);
if((op == null)){
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$2(env__$1,"Can't call nil");
} else {
}

var mform = cljs.analyzer.macroexpand_1(env__$1,form);
if((form === mform)){
return cljs.analyzer.analyze_seq_STAR__wrap(op,env__$1,form,name,opts);
} else {
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(env__$1,mform,name,opts) : cljs.analyzer.analyze.call(null,env__$1,mform,name,opts));
}
}
});

cljs.analyzer.analyze_seq.cljs$lang$maxFixedArity = 4;
cljs.analyzer.analyze_map = (function cljs$analyzer$analyze_map(env,form){
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var ks = (function (){var _STAR_recur_frames_STAR_10829 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_10829,expr_env){
return (function (p1__10824_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__10824_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__10824_SHARP_));
});})(_STAR_recur_frames_STAR_10829,expr_env))
,cljs.core.keys(form)));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_10829;
}})();
var vs = (function (){var _STAR_recur_frames_STAR_10830 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_10830,expr_env,ks){
return (function (p1__10825_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__10825_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__10825_SHARP_));
});})(_STAR_recur_frames_STAR_10830,expr_env,ks))
,cljs.core.vals(form)));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_10830;
}})();
var G__10831 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"keys","keys",1068423698),ks,new cljs.core.Keyword(null,"vals","vals",768058733),vs,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.vec(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(ks,vs)),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","IMap","cljs.core/IMap",1407777598,null)], null);
return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(G__10831) : cljs.analyzer.analyze_wrap_meta.call(null,G__10831));
});
cljs.analyzer.analyze_list = (function cljs$analyzer$analyze_list(env,form){
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var items = (function (){var _STAR_recur_frames_STAR_10835 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_10835,expr_env){
return (function (p1__10832_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__10832_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__10832_SHARP_));
});})(_STAR_recur_frames_STAR_10835,expr_env))
,form));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_10835;
}})();
var G__10836 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"list","list",765357683),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"children","children",-940561982),items,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","IList","cljs.core/IList",1015168964,null)], null);
return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(G__10836) : cljs.analyzer.analyze_wrap_meta.call(null,G__10836));
});
cljs.analyzer.analyze_vector = (function cljs$analyzer$analyze_vector(env,form){
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var items = (function (){var _STAR_recur_frames_STAR_10840 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_10840,expr_env){
return (function (p1__10837_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__10837_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__10837_SHARP_));
});})(_STAR_recur_frames_STAR_10840,expr_env))
,form));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_10840;
}})();
var G__10841 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"children","children",-940561982),items,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","IVector","cljs.core/IVector",1711112835,null)], null);
return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(G__10841) : cljs.analyzer.analyze_wrap_meta.call(null,G__10841));
});
cljs.analyzer.analyze_set = (function cljs$analyzer$analyze_set(env,form){
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var items = (function (){var _STAR_recur_frames_STAR_10845 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_10845,expr_env){
return (function (p1__10842_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__10842_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__10842_SHARP_));
});})(_STAR_recur_frames_STAR_10845,expr_env))
,form));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_10845;
}})();
var G__10846 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"children","children",-940561982),items,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","ISet","cljs.core/ISet",2003412810,null)], null);
return (cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1 ? cljs.analyzer.analyze_wrap_meta.cljs$core$IFn$_invoke$arity$1(G__10846) : cljs.analyzer.analyze_wrap_meta.call(null,G__10846));
});
cljs.analyzer.analyze_js_value = (function cljs$analyzer$analyze_js_value(env,form){
var val = form.val;
var expr_env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291));
var items = ((cljs.core.map_QMARK_(val))?cljs.core.zipmap(cljs.core.keys(val),(function (){var _STAR_recur_frames_STAR_10851 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_10851,val,expr_env){
return (function (p1__10847_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__10847_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__10847_SHARP_));
});})(_STAR_recur_frames_STAR_10851,val,expr_env))
,cljs.core.vals(val)));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_10851;
}})()):(function (){var _STAR_recur_frames_STAR_10852 = cljs.analyzer._STAR_recur_frames_STAR_;
cljs.analyzer._STAR_recur_frames_STAR_ = cljs.core.cons(null,cljs.analyzer._STAR_recur_frames_STAR_);

try{return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_recur_frames_STAR_10852,val,expr_env){
return (function (p1__10848_SHARP_){
return (cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 ? cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(expr_env,p1__10848_SHARP_) : cljs.analyzer.analyze.call(null,expr_env,p1__10848_SHARP_));
});})(_STAR_recur_frames_STAR_10852,val,expr_env))
,val));
}finally {cljs.analyzer._STAR_recur_frames_STAR_ = _STAR_recur_frames_STAR_10852;
}})());
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"js-value","js-value",-758336661),new cljs.core.Keyword(null,"js-type","js-type",539386702),((cljs.core.map_QMARK_(val))?new cljs.core.Keyword(null,"object","object",1474613949):new cljs.core.Keyword(null,"array","array",-2080713842)),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"items","items",1031954938),items,new cljs.core.Keyword(null,"children","children",-940561982),items,new cljs.core.Keyword(null,"tag","tag",-1290361223),((cljs.core.map_QMARK_(val))?new cljs.core.Symbol(null,"object","object",-1179821820,null):new cljs.core.Symbol(null,"array","array",-440182315,null))], null);
});
cljs.analyzer.elide_reader_meta = (function cljs$analyzer$elide_reader_meta(m){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.array_seq([new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"source","source",-433931539)], 0));
});
cljs.analyzer.analyze_wrap_meta = (function cljs$analyzer$analyze_wrap_meta(expr){
var form = new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(expr);
var m = cljs.analyzer.elide_reader_meta(cljs.core.meta(form));
if(cljs.core.seq(m)){
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(expr);
var expr__$1 = cljs.core.assoc_in(expr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"env","env",-1815813235),new cljs.core.Keyword(null,"context","context",-830191113)], null),new cljs.core.Keyword(null,"expr","expr",745722291));
var meta_expr = cljs.analyzer.analyze_map(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(expr__$1),m);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form,new cljs.core.Keyword(null,"meta","meta",1499536964),meta_expr,new cljs.core.Keyword(null,"expr","expr",745722291),expr__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meta_expr,expr__$1], null)], null);
} else {
return expr;
}
});
cljs.analyzer.infer_type = (function cljs$analyzer$infer_type(env,ast){
var tag = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(ast);
if((tag == null)){
var tag__$1 = cljs.analyzer.infer_tag(env,ast);
if(!((tag__$1 == null))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ast,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag__$1);
} else {
return ast;
}
} else {
return ast;
}
});
cljs.analyzer._STAR_passes_STAR_ = null;
cljs.analyzer.analyze_form = (function cljs$analyzer$analyze_form(env,form,name,opts){
if((form instanceof cljs.core.Symbol)){
return cljs.analyzer.analyze_symbol(env,form);
} else {
if((cljs.analyzer.cljs_seq_QMARK_(form)) && (cljs.core.seq(form))){
return cljs.analyzer.analyze_seq.cljs$core$IFn$_invoke$arity$4(env,form,name,opts);
} else {
if(cljs.analyzer.cljs_map_QMARK_(form)){
return cljs.analyzer.analyze_map(env,form);
} else {
if(cljs.analyzer.cljs_vector_QMARK_(form)){
return cljs.analyzer.analyze_vector(env,form);
} else {
if(cljs.analyzer.cljs_set_QMARK_(form)){
return cljs.analyzer.analyze_set(env,form);
} else {
if((form instanceof cljs.core.Keyword)){
return cljs.analyzer.analyze_keyword(env,form);
} else {
if((form instanceof cljs.tagged_literals.JSValue)){
return cljs.analyzer.analyze_js_value(env,form);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,form)){
return cljs.analyzer.analyze_list(env,form);
} else {
var tag = (((form == null))?cljs.analyzer.CLJ_NIL_SYM:((typeof form === 'number')?cljs.analyzer.NUMBER_SYM:((typeof form === 'string')?cljs.analyzer.STRING_SYM:((form === true)?cljs.analyzer.BOOLEAN_SYM:((form === false)?cljs.analyzer.BOOLEAN_SYM:null)))));
var G__10854 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"env","env",-1815813235),env,new cljs.core.Keyword(null,"form","form",-1624062471),form], null);
var G__10854__$1 = ((tag)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__10854,new cljs.core.Keyword(null,"tag","tag",-1290361223),tag):G__10854);
return G__10854__$1;

}
}
}
}
}
}
}
}
});
cljs.analyzer.analyze_STAR_ = (function cljs$analyzer$analyze_STAR_(env,form,name,opts){
var passes = cljs.analyzer._STAR_passes_STAR_;
var passes__$1 = (((passes == null))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.analyzer.infer_type], null):null);
var form__$1 = (((form instanceof cljs.core.LazySeq))?((cljs.core.seq(form))?form:cljs.core.List.EMPTY):form);
var ast = cljs.analyzer.analyze_form(env,form__$1,name,opts);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (passes,passes__$1,form__$1,ast){
return (function (ast__$1,pass){
return (pass.cljs$core$IFn$_invoke$arity$2 ? pass.cljs$core$IFn$_invoke$arity$2(env,ast__$1) : pass.call(null,env,ast__$1));
});})(passes,passes__$1,form__$1,ast))
,ast,passes__$1);
});
/**
 * Given an environment, a map containing {:locals (mapping of names to bindings), :context
 * (one of :statement, :expr, :return), :ns (a symbol naming the
 * compilation ns)}, and form, returns an expression object (a map
 * containing at least :form, :op and :env keys). If expr has any (immediately)
 * nested exprs, must have :children [exprs...] entry. This will
 * facilitate code walking without knowing the details of the op set.
 */
cljs.analyzer.analyze = (function cljs$analyzer$analyze(){
var args10855 = [];
var len__5200__auto___10860 = arguments.length;
var i__5201__auto___10861 = (0);
while(true){
if((i__5201__auto___10861 < len__5200__auto___10860)){
args10855.push((arguments[i__5201__auto___10861]));

var G__10862 = (i__5201__auto___10861 + (1));
i__5201__auto___10861 = G__10862;
continue;
} else {
}
break;
}

var G__10857 = args10855.length;
switch (G__10857) {
case 2:
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10855.length)].join('')));

}
});

cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2 = (function (env,form){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3(env,form,null);
});

cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$3 = (function (env,form,name){
return cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4(env,form,name,null);
});

cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$4 = (function (env,form,name,opts){
var val__5595__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__5595__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{try{var _STAR_alias_map_STAR_10859 = cljs.tools.reader._STAR_alias_map_STAR_;
cljs.tools.reader._STAR_alias_map_STAR_ = (function (){var or__4161__auto__ = cljs.tools.reader._STAR_alias_map_STAR_;
if(or__4161__auto__){
return or__4161__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();

try{return cljs.analyzer.analyze_STAR_(env,form,name,opts);
}finally {cljs.tools.reader._STAR_alias_map_STAR_ = _STAR_alias_map_STAR_10859;
}}catch (e10858){var err__5631__auto__ = e10858;
if(cljs.analyzer.analysis_error_QMARK_(err__5631__auto__)){
throw err__5631__auto__;
} else {
throw cljs.analyzer.error.cljs$core$IFn$_invoke$arity$3(env,err__5631__auto__.message,err__5631__auto__);
}
}}finally {if((val__5595__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});

cljs.analyzer.analyze.cljs$lang$maxFixedArity = 4;
cljs.analyzer.resolve_symbol = (function cljs$analyzer$resolve_symbol(s){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.analyzer._STAR_cljs_ns_STAR_], null)], null),s));
});

//# sourceMappingURL=analyzer.js.map