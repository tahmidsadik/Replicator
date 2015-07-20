// Compiled by ClojureScript 0.0-3479 {:static-fns true}
goog.provide('cljs.compiler');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('cljs.tools.reader');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.source_map');
goog.require('goog.string.StringBuffer');
goog.require('clojure.string');
cljs.compiler.js_reserved = cljs.analyzer.js_reserved;
cljs.compiler._STAR_dependents_STAR_ = null;
cljs.compiler._STAR_inputs_STAR_ = null;
cljs.compiler._STAR_source_map_data_STAR_ = null;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.compiler.cljs_reserved_file_names = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["deps.cljs",null], null), null);
cljs.compiler.ns_first_segments = (function cljs$compiler$ns_first_segments(){
var get_first_ns_segment = (function cljs$compiler$ns_first_segments_$_get_first_ns_segment(ns){
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2([cljs.core.str(ns)].join(''),/\./));
});
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(get_first_ns_segment,cljs.core.keys(new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)))));
});
cljs.compiler.shadow_depth = (function cljs$compiler$shadow_depth(s){
var map__9169 = s;
var map__9169__$1 = ((cljs.core.seq_QMARK_(map__9169))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9169):map__9169);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9169__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9169__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__9171 = info;
var map__9172 = G__9171;
var map__9172__$1 = ((cljs.core.seq_QMARK_(map__9172))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9172):map__9172);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9172__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__9171__$1 = G__9171;
while(true){
var d__$2 = d__$1;
var map__9173 = G__9171__$1;
var map__9173__$1 = ((cljs.core.seq_QMARK_(map__9173))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9173):map__9173);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9173__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__9174 = (d__$2 + (1));
var G__9175 = shadow__$1;
d__$1 = G__9174;
G__9171__$1 = G__9175;
continue;
} else {
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([[cljs.core.str(name)].join('')], true),cljs.compiler.ns_first_segments()))){
return (d__$2 + (1));
} else {
return d__$2;

}
}
break;
}
});
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__9176){
var map__9180 = p__9176;
var map__9180__$1 = ((cljs.core.seq_QMARK_(map__9180))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9180):map__9180);
var name_var = map__9180__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9180__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9180__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace([cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__9181 = info;
var map__9181__$1 = ((cljs.core.seq_QMARK_(map__9181))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9181):map__9181);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9181__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9181__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__9182 = [cljs.core.str(clojure.string.replace([cljs.core.str(ns)].join(''),".","$")),cljs.core.str("$"),cljs.core.str(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__9182) : cljs.compiler.munge.call(null,G__9182));
})());
});
cljs.compiler.munge_reserved = (function cljs$compiler$munge_reserved(reserved){
return (function (s){
if(!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(reserved,s) == null))){
return [cljs.core.str(s),cljs.core.str("$")].join('');
} else {
return s;
}
});
});
cljs.compiler.munge = (function cljs$compiler$munge(){
var args9183 = [];
var len__5623__auto___9186 = arguments.length;
var i__5624__auto___9187 = (0);
while(true){
if((i__5624__auto___9187 < len__5623__auto___9186)){
args9183.push((arguments[i__5624__auto___9187]));

var G__9188 = (i__5624__auto___9187 + (1));
i__5624__auto___9187 = G__9188;
continue;
} else {
}
break;
}

var G__9185 = args9183.length;
switch (G__9185) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9183.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.analyzer.cljs_map_QMARK_(s)){
var name_var = s;
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(name_var);
var field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(name_var);
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(name_var);
if(!((new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info) == null))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var code = cljs.core.hash(s);
var renamed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,code);
var name__$1 = ((field === true)?[cljs.core.str("self__."),cljs.core.str(name)].join(''):((!((renamed == null)))?renamed:name
));
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(name__$1,reserved);
if((field === true) || ((depth === (0)))){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(munged_name),cljs.core.str("__$"),cljs.core.str(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace([cljs.core.str(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var rf = cljs.compiler.munge_reserved(reserved);
var ss__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(rf,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./));
var ss__$3 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",ss__$2);
var ms = cljs.core.munge(ss__$3);
if((s instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(ms);
} else {
return ms;
}
}
});

cljs.compiler.munge.cljs$lang$maxFixedArity = 2;
cljs.compiler.comma_sep = (function cljs$compiler$comma_sep(xs){
return cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(",",xs);
});
cljs.compiler.escape_char = (function cljs$compiler$escape_char(c){
var cp = goog.string.hashCode(c);
var G__9191 = cp;
switch (G__9191) {
case (34):
return "\\\"";

break;
case (92):
return "\\\\";

break;
case (8):
return "\\b";

break;
case (12):
return "\\f";

break;
case (10):
return "\\n";

break;
case (13):
return "\\r";

break;
case (9):
return "\\t";

break;
default:
if((((31) < cp)) && ((cp < (127)))){
return c;
} else {
return [cljs.core.str("\\u"),cljs.core.str(cp.toString((16)))].join('');
}

}
});
cljs.compiler.escape_string = (function cljs$compiler$escape_string(s){
var sb = (new goog.string.StringBuffer());
var seq__9197_9201 = cljs.core.seq(s);
var chunk__9198_9202 = null;
var count__9199_9203 = (0);
var i__9200_9204 = (0);
while(true){
if((i__9200_9204 < count__9199_9203)){
var c_9205 = chunk__9198_9202.cljs$core$IIndexed$_nth$arity$2(null,i__9200_9204);
sb.append(cljs.compiler.escape_char(c_9205));

var G__9206 = seq__9197_9201;
var G__9207 = chunk__9198_9202;
var G__9208 = count__9199_9203;
var G__9209 = (i__9200_9204 + (1));
seq__9197_9201 = G__9206;
chunk__9198_9202 = G__9207;
count__9199_9203 = G__9208;
i__9200_9204 = G__9209;
continue;
} else {
var temp__4425__auto___9210 = cljs.core.seq(seq__9197_9201);
if(temp__4425__auto___9210){
var seq__9197_9211__$1 = temp__4425__auto___9210;
if(cljs.core.chunked_seq_QMARK_(seq__9197_9211__$1)){
var c__5368__auto___9212 = cljs.core.chunk_first(seq__9197_9211__$1);
var G__9213 = cljs.core.chunk_rest(seq__9197_9211__$1);
var G__9214 = c__5368__auto___9212;
var G__9215 = cljs.core.count(c__5368__auto___9212);
var G__9216 = (0);
seq__9197_9201 = G__9213;
chunk__9198_9202 = G__9214;
count__9199_9203 = G__9215;
i__9200_9204 = G__9216;
continue;
} else {
var c_9217 = cljs.core.first(seq__9197_9211__$1);
sb.append(cljs.compiler.escape_char(c_9217));

var G__9218 = cljs.core.next(seq__9197_9211__$1);
var G__9219 = null;
var G__9220 = (0);
var G__9221 = (0);
seq__9197_9201 = G__9218;
chunk__9198_9202 = G__9219;
count__9199_9203 = G__9220;
i__9200_9204 = G__9221;
continue;
}
} else {
}
}
break;
}

return sb.toString();
});
cljs.compiler.wrap_in_double_quotes = (function cljs$compiler$wrap_in_double_quotes(x){
return [cljs.core.str("\""),cljs.core.str(x),cljs.core.str("\"")].join('');
});
if(typeof cljs.compiler.emit_STAR_ !== 'undefined'){
} else {
cljs.compiler.emit_STAR_ = (function (){var method_table__5478__auto__ = (function (){var G__9222 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9222) : cljs.core.atom.call(null,G__9222));
})();
var prefer_table__5479__auto__ = (function (){var G__9223 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9223) : cljs.core.atom.call(null,G__9223));
})();
var method_cache__5480__auto__ = (function (){var G__9224 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9224) : cljs.core.atom.call(null,G__9224));
})();
var cached_hierarchy__5481__auto__ = (function (){var G__9225 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9225) : cljs.core.atom.call(null,G__9225));
})();
var hierarchy__5482__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5482__auto__,method_table__5478__auto__,prefer_table__5479__auto__,method_cache__5480__auto__,cached_hierarchy__5481__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__6018__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__6018__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__9229_9232 = ast;
var map__9229_9233__$1 = ((cljs.core.seq_QMARK_(map__9229_9232))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9229_9232):map__9229_9232);
var env_9234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9229_9233__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_9234))){
var map__9230_9235 = env_9234;
var map__9230_9236__$1 = ((cljs.core.seq_QMARK_(map__9230_9235))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9230_9235):map__9230_9235);
var line_9237 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9230_9236__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_9238 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9230_9236__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,((function (map__9230_9235,map__9230_9236__$1,line_9237,column_9238,map__9229_9232,map__9229_9233__$1,env_9234,val__6018__auto__){
return (function (m){
var minfo = (function (){var G__9231 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
var G__9231__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__9231,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join('')):G__9231);
return G__9231__$1;
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_9237 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__9230_9235,map__9230_9236__$1,line_9237,column_9238,map__9229_9232,map__9229_9233__$1,env_9234,val__6018__auto__){
return (function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_9238)?(column_9238 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__9230_9235,map__9230_9236__$1,line_9237,column_9238,map__9229_9232,map__9229_9233__$1,env_9234,val__6018__auto__){
return (function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
});})(minfo,map__9230_9235,map__9230_9236__$1,line_9237,column_9238,map__9229_9232,map__9229_9233__$1,env_9234,val__6018__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__9230_9235,map__9230_9236__$1,line_9237,column_9238,map__9229_9232,map__9229_9233__$1,env_9234,val__6018__auto__))
,cljs.core.sorted_map()));
});})(map__9230_9235,map__9230_9236__$1,line_9237,column_9238,map__9229_9232,map__9229_9233__$1,env_9234,val__6018__auto__))
);
} else {
}
} else {
}

return (cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast) : cljs.compiler.emit_STAR_.call(null,ast));
}finally {if((val__6018__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(){
var args__5630__auto__ = [];
var len__5623__auto___9245 = arguments.length;
var i__5624__auto___9246 = (0);
while(true){
if((i__5624__auto___9246 < len__5623__auto___9245)){
args__5630__auto__.push((arguments[i__5624__auto___9246]));

var G__9247 = (i__5624__auto___9246 + (1));
i__5624__auto___9246 = G__9247;
continue;
} else {
}
break;
}

var argseq__5631__auto__ = ((((0) < args__5630__auto__.length))?(new cljs.core.IndexedSeq(args__5630__auto__.slice((0)),(0))):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__5631__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__9241_9248 = cljs.core.seq(xs);
var chunk__9242_9249 = null;
var count__9243_9250 = (0);
var i__9244_9251 = (0);
while(true){
if((i__9244_9251 < count__9243_9250)){
var x_9252 = chunk__9242_9249.cljs$core$IIndexed$_nth$arity$2(null,i__9244_9251);
if((x_9252 == null)){
} else {
if(cljs.core.map_QMARK_(x_9252)){
cljs.compiler.emit(x_9252);
} else {
if(cljs.core.seq_QMARK_(x_9252)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_9252);
} else {
if(cljs.core.fn_QMARK_(x_9252)){
(x_9252.cljs$core$IFn$_invoke$arity$0 ? x_9252.cljs$core$IFn$_invoke$arity$0() : x_9252.call(null));
} else {
var s_9253 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x_9252], 0));
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__9241_9248,chunk__9242_9249,count__9243_9250,i__9244_9251,s_9253,x_9252){
return (function (p1__9239_SHARP_){
return (p1__9239_SHARP_ + cljs.core.count(s_9253));
});})(seq__9241_9248,chunk__9242_9249,count__9243_9250,i__9244_9251,s_9253,x_9252))
);
} else {
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_9253], 0));

}
}
}
}

var G__9254 = seq__9241_9248;
var G__9255 = chunk__9242_9249;
var G__9256 = count__9243_9250;
var G__9257 = (i__9244_9251 + (1));
seq__9241_9248 = G__9254;
chunk__9242_9249 = G__9255;
count__9243_9250 = G__9256;
i__9244_9251 = G__9257;
continue;
} else {
var temp__4425__auto___9258 = cljs.core.seq(seq__9241_9248);
if(temp__4425__auto___9258){
var seq__9241_9259__$1 = temp__4425__auto___9258;
if(cljs.core.chunked_seq_QMARK_(seq__9241_9259__$1)){
var c__5368__auto___9260 = cljs.core.chunk_first(seq__9241_9259__$1);
var G__9261 = cljs.core.chunk_rest(seq__9241_9259__$1);
var G__9262 = c__5368__auto___9260;
var G__9263 = cljs.core.count(c__5368__auto___9260);
var G__9264 = (0);
seq__9241_9248 = G__9261;
chunk__9242_9249 = G__9262;
count__9243_9250 = G__9263;
i__9244_9251 = G__9264;
continue;
} else {
var x_9265 = cljs.core.first(seq__9241_9259__$1);
if((x_9265 == null)){
} else {
if(cljs.core.map_QMARK_(x_9265)){
cljs.compiler.emit(x_9265);
} else {
if(cljs.core.seq_QMARK_(x_9265)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_9265);
} else {
if(cljs.core.fn_QMARK_(x_9265)){
(x_9265.cljs$core$IFn$_invoke$arity$0 ? x_9265.cljs$core$IFn$_invoke$arity$0() : x_9265.call(null));
} else {
var s_9266 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x_9265], 0));
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__9241_9248,chunk__9242_9249,count__9243_9250,i__9244_9251,s_9266,x_9265,seq__9241_9259__$1,temp__4425__auto___9258){
return (function (p1__9239_SHARP_){
return (p1__9239_SHARP_ + cljs.core.count(s_9266));
});})(seq__9241_9248,chunk__9242_9249,count__9243_9250,i__9244_9251,s_9266,x_9265,seq__9241_9259__$1,temp__4425__auto___9258))
);
} else {
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_9266], 0));

}
}
}
}

var G__9267 = cljs.core.next(seq__9241_9259__$1);
var G__9268 = null;
var G__9269 = (0);
var G__9270 = (0);
seq__9241_9248 = G__9267;
chunk__9242_9249 = G__9268;
count__9243_9250 = G__9269;
i__9244_9251 = G__9270;
continue;
}
} else {
}
}
break;
}

return null;
});

cljs.compiler.emits.cljs$lang$maxFixedArity = (0);

cljs.compiler.emits.cljs$lang$applyTo = (function (seq9240){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9240));
});
cljs.compiler.emitln = (function cljs$compiler$emitln(){
var args__5630__auto__ = [];
var len__5623__auto___9274 = arguments.length;
var i__5624__auto___9275 = (0);
while(true){
if((i__5624__auto___9275 < len__5623__auto___9274)){
args__5630__auto__.push((arguments[i__5624__auto___9275]));

var G__9276 = (i__5624__auto___9275 + (1));
i__5624__auto___9275 = G__9276;
continue;
} else {
}
break;
}

var argseq__5631__auto__ = ((((0) < args__5630__auto__.length))?(new cljs.core.IndexedSeq(args__5630__auto__.slice((0)),(0))):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__5631__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,xs);

cljs.core.println();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__9272){
var map__9273 = p__9272;
var map__9273__$1 = ((cljs.core.seq_QMARK_(map__9273))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9273):map__9273);
var m = map__9273__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9273__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.array_seq([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq9271){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9271));
});
cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__5539__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_9279_9281 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_9280_9282 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_9279_9281,_STAR_print_fn_STAR_9280_9282,sb__5539__auto__){
return (function (x__5540__auto__){
return sb__5539__auto__.append(x__5540__auto__);
});})(_STAR_print_newline_STAR_9279_9281,_STAR_print_fn_STAR_9280_9282,sb__5539__auto__))
;

try{cljs.compiler.emit(expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_9280_9282;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_9279_9281;
}
return [cljs.core.str(sb__5539__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__5478__auto__ = (function (){var G__9283 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9283) : cljs.core.atom.call(null,G__9283));
})();
var prefer_table__5479__auto__ = (function (){var G__9284 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9284) : cljs.core.atom.call(null,G__9284));
})();
var method_cache__5480__auto__ = (function (){var G__9285 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9285) : cljs.core.atom.call(null,G__9285));
})();
var cached_hierarchy__5481__auto__ = (function (){var G__9286 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9286) : cljs.core.atom.call(null,G__9286));
})();
var hierarchy__5482__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5482__auto__,method_table__5478__auto__,prefer_table__5479__auto__,method_cache__5480__auto__,cached_hierarchy__5481__auto__));
})();
}
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,null,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["null"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Number,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,String,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.wrap_in_double_quotes(cljs.compiler.escape_string(x))], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Boolean,(function (x){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(cljs.core.truth_(x)?"true":"false")], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,RegExp,(function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",[cljs.core.str(x)].join(''))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(new RegExp(\"\"))"], 0));
} else {
var vec__9287 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9287,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9287,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9287,(2),null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/",clojure.string.replace(pattern,/\//,"\\\\/"),"/",flags], 0));
}
}));
cljs.compiler.emits_keyword = (function cljs$compiler$emits_keyword(kw){
var ns = cljs.core.namespace(kw);
var name = cljs.core.name(kw);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.Keyword("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant.call(null,ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant.call(null,name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

var G__9290_9292 = (cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__9290_9292) : cljs.compiler.emit_constant.call(null,G__9290_9292));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

var G__9291_9293 = cljs.core.hash(kw);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__9291_9293) : cljs.compiler.emit_constant.call(null,G__9291_9293));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([")"], 0));
});
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)))))){
var value = (function (){var G__9294 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__9294) : x.call(null,G__9294));
})();
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value], 0));
} else {
return cljs.compiler.emits_keyword(x);
}
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Symbol,(function (x){
var ns = cljs.core.namespace(x);
var name = cljs.core.name(x);
var symstr = ((!((ns == null)))?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.Symbol("], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(ns) : cljs.compiler.emit_constant.call(null,ns));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(name) : cljs.compiler.emit_constant.call(null,name));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(symstr) : cljs.compiler.emit_constant.call(null,symstr));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

var G__9295_9296 = cljs.core.hash(x);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__9295_9296) : cljs.compiler.emit_constant.call(null,G__9295_9296));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(null) : cljs.compiler.emit_constant.call(null,null));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([")"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,Date,(function (date){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new Date(",date.getTime(),")"], 0));
}));
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.UUID,(function (uuid){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.UUID(\"",uuid.toString(),"\")"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"no-op","no-op",-93046065),(function (m){
return null;
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__9298){
var map__9299 = p__9298;
var map__9299__$1 = ((cljs.core.seq_QMARK_(map__9299))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9299):map__9299);
var arg = map__9299__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9299__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9299__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9299__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name(var_name)], null));
var or__4584__auto__ = js_module_name;
if(cljs.core.truth_(or__4584__auto__)){
return or__4584__auto__;
} else {
return cljs.core.name(var_name);
}
})():info);
if(cljs.core.truth_(new cljs.core.Keyword(null,"binding-form?","binding-form?",1728940169).cljs$core$IFn$_invoke$arity$1(arg))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(arg)], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__6647__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6647__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__9300 = info__$1;
var G__9300__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null)))?cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__9300):G__9300);
return G__9300__$1;
})()], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6647__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__9301){
var map__9302 = p__9301;
var map__9302__$1 = ((cljs.core.seq_QMARK_(map__9302))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9302):map__9302);
var arg = map__9302__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9302__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9302__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9302__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9302__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"sym","sym",195671222,null))], 0)))].join('')));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null))], 0)))].join('')));
}

var map__9303 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__9303__$1 = ((cljs.core.seq_QMARK_(map__9303))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9303):map__9303);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9303__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__6647__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6647__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6647__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__9304){
var map__9305 = p__9304;
var map__9305__$1 = ((cljs.core.seq_QMARK_(map__9305))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9305):map__9305);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9305__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9305__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9305__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6647__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6647__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.with_meta(",expr,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6647__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_((function (p1__9306_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__9306_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__9307){
var map__9308 = p__9307;
var map__9308__$1 = ((cljs.core.seq_QMARK_(map__9308))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9308):map__9308);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9308__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9308__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9308__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__6647__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6647__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if((cljs.core.count(keys) === (0))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentArrayMap.EMPTY"], 0));
} else {
if((cljs.core.count(keys) <= cljs.compiler.array_map_threshold)){
if(cljs.core.truth_(cljs.compiler.distinct_keys_QMARK_(keys))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentArrayMap(null, ",cljs.core.count(keys),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentArrayMap.fromArray([",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(keys,vals)),"], true, false)"], 0));
}
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentHashMap.fromArrays([",cljs.compiler.comma_sep(keys),"],[",cljs.compiler.comma_sep(vals),"])"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6647__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"list","list",765357683),(function (p__9309){
var map__9310 = p__9309;
var map__9310__$1 = ((cljs.core.seq_QMARK_(map__9310))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9310):map__9310);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9310__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9310__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6647__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6647__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.List.EMPTY"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.list(",cljs.compiler.comma_sep(items),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6647__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__9311){
var map__9312 = p__9311;
var map__9312__$1 = ((cljs.core.seq_QMARK_(map__9312))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9312):map__9312);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9312__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9312__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6647__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6647__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentVector.EMPTY"], 0));
} else {
var cnt_9313 = cljs.core.count(items);
if((cnt_9313 < (32))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentVector(null, ",cnt_9313,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep(items),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep(items),"], true)"], 0));
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6647__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_((function (p1__9314_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__9314_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count(items)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__9315){
var map__9316 = p__9315;
var map__9316__$1 = ((cljs.core.seq_QMARK_(map__9316))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9316):map__9316);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9316__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9316__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6647__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6647__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentHashSet.EMPTY"], 0));
} else {
if(cljs.core.truth_(cljs.compiler.distinct_constants_QMARK_(items))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, ",cljs.core.count(items),", [",cljs.compiler.comma_sep(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(items,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("null"))),"], null), null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentHashSet.fromArray([",cljs.compiler.comma_sep(items),"], true)"], 0));

}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6647__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__9317){
var map__9318 = p__9317;
var map__9318__$1 = ((cljs.core.seq_QMARK_(map__9318))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9318):map__9318);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9318__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9318__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9318__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6647__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6647__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["{"], 0));

var temp__4425__auto___9327 = cljs.core.seq(items);
if(temp__4425__auto___9327){
var items_9328__$1 = temp__4425__auto___9327;
var vec__9319_9329 = items_9328__$1;
var vec__9320_9330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9319_9329,(0),null);
var k_9331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9320_9330,(0),null);
var v_9332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9320_9330,(1),null);
var r_9333 = cljs.core.nthnext(vec__9319_9329,(1));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\"",cljs.core.name(k_9331),"\": ",v_9332], 0));

var seq__9321_9334 = cljs.core.seq(r_9333);
var chunk__9322_9335 = null;
var count__9323_9336 = (0);
var i__9324_9337 = (0);
while(true){
if((i__9324_9337 < count__9323_9336)){
var vec__9325_9338 = chunk__9322_9335.cljs$core$IIndexed$_nth$arity$2(null,i__9324_9337);
var k_9339__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9325_9338,(0),null);
var v_9340__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9325_9338,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", \"",cljs.core.name(k_9339__$1),"\": ",v_9340__$1], 0));

var G__9341 = seq__9321_9334;
var G__9342 = chunk__9322_9335;
var G__9343 = count__9323_9336;
var G__9344 = (i__9324_9337 + (1));
seq__9321_9334 = G__9341;
chunk__9322_9335 = G__9342;
count__9323_9336 = G__9343;
i__9324_9337 = G__9344;
continue;
} else {
var temp__4425__auto___9345__$1 = cljs.core.seq(seq__9321_9334);
if(temp__4425__auto___9345__$1){
var seq__9321_9346__$1 = temp__4425__auto___9345__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9321_9346__$1)){
var c__5368__auto___9347 = cljs.core.chunk_first(seq__9321_9346__$1);
var G__9348 = cljs.core.chunk_rest(seq__9321_9346__$1);
var G__9349 = c__5368__auto___9347;
var G__9350 = cljs.core.count(c__5368__auto___9347);
var G__9351 = (0);
seq__9321_9334 = G__9348;
chunk__9322_9335 = G__9349;
count__9323_9336 = G__9350;
i__9324_9337 = G__9351;
continue;
} else {
var vec__9326_9352 = cljs.core.first(seq__9321_9346__$1);
var k_9353__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9326_9352,(0),null);
var v_9354__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9326_9352,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", \"",cljs.core.name(k_9353__$1),"\": ",v_9354__$1], 0));

var G__9355 = cljs.core.next(seq__9321_9346__$1);
var G__9356 = null;
var G__9357 = (0);
var G__9358 = (0);
seq__9321_9334 = G__9355;
chunk__9322_9335 = G__9356;
count__9323_9336 = G__9357;
i__9324_9337 = G__9358;
continue;
}
} else {
}
}
break;
}
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["[",cljs.compiler.comma_sep(items),"]"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6647__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__9359){
var map__9360 = p__9359;
var map__9360__$1 = ((cljs.core.seq_QMARK_(map__9360))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9360):map__9360);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9360__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9360__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__6647__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6647__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(form) : cljs.compiler.emit_constant.call(null,form));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6647__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__9361){
var map__9363 = p__9361;
var map__9363__$1 = ((cljs.core.seq_QMARK_(map__9363))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9363):map__9363);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9363__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9363__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__4572__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__4572__auto__){
var and__4572__auto____$1 = form;
if(cljs.core.truth_(and__4572__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__4572__auto____$1;
}
} else {
return and__4572__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__9364){
var map__9366 = p__9364;
var map__9366__$1 = ((cljs.core.seq_QMARK_(map__9366))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9366):map__9366);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9366__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9366__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__4584__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__4584__auto__)){
return or__4584__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__9367){
var map__9368 = p__9367;
var map__9368__$1 = ((cljs.core.seq_QMARK_(map__9368))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9368):map__9368);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9368__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9368__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9368__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9368__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9368__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__4584__auto__ = unchecked;
if(cljs.core.truth_(or__4584__auto__)){
return or__4584__auto__;
} else {
return cljs.compiler.safe_test_QMARK_(env,test);
}
})());
if(cljs.core.truth_(cljs.compiler.truthy_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then], 0));
} else {
if(cljs.core.truth_(cljs.compiler.falsey_constant_QMARK_(test))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([else$], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(",((checked)?"cljs.core.truth_":null),"(",test,")?",then,":",else$,")"], 0));
} else {
if(checked){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(cljs.core.truth_(",test,")){"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(",test,"){"], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then,"} else {"], 0));

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([else$,"}"], 0));
}

}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__9369){
var map__9370 = p__9369;
var map__9370__$1 = ((cljs.core.seq_QMARK_(map__9370))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9370):map__9370);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9370__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9370__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9370__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9370__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9370__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env),new cljs.core.Keyword(null,"expr","expr",745722291))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function(){"], 0));
} else {
}

var gs = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("caseval__");
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",gs,";"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["switch (",v,") {"], 0));

var seq__9371_9385 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tests,thens)));
var chunk__9372_9386 = null;
var count__9373_9387 = (0);
var i__9374_9388 = (0);
while(true){
if((i__9374_9388 < count__9373_9387)){
var vec__9375_9389 = chunk__9372_9386.cljs$core$IIndexed$_nth$arity$2(null,i__9374_9388);
var ts_9390 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9375_9389,(0),null);
var then_9391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9375_9389,(1),null);
var seq__9376_9392 = cljs.core.seq(ts_9390);
var chunk__9377_9393 = null;
var count__9378_9394 = (0);
var i__9379_9395 = (0);
while(true){
if((i__9379_9395 < count__9378_9394)){
var test_9396 = chunk__9377_9393.cljs$core$IIndexed$_nth$arity$2(null,i__9379_9395);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_9396,":"], 0));

var G__9397 = seq__9376_9392;
var G__9398 = chunk__9377_9393;
var G__9399 = count__9378_9394;
var G__9400 = (i__9379_9395 + (1));
seq__9376_9392 = G__9397;
chunk__9377_9393 = G__9398;
count__9378_9394 = G__9399;
i__9379_9395 = G__9400;
continue;
} else {
var temp__4425__auto___9401 = cljs.core.seq(seq__9376_9392);
if(temp__4425__auto___9401){
var seq__9376_9402__$1 = temp__4425__auto___9401;
if(cljs.core.chunked_seq_QMARK_(seq__9376_9402__$1)){
var c__5368__auto___9403 = cljs.core.chunk_first(seq__9376_9402__$1);
var G__9404 = cljs.core.chunk_rest(seq__9376_9402__$1);
var G__9405 = c__5368__auto___9403;
var G__9406 = cljs.core.count(c__5368__auto___9403);
var G__9407 = (0);
seq__9376_9392 = G__9404;
chunk__9377_9393 = G__9405;
count__9378_9394 = G__9406;
i__9379_9395 = G__9407;
continue;
} else {
var test_9408 = cljs.core.first(seq__9376_9402__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_9408,":"], 0));

var G__9409 = cljs.core.next(seq__9376_9402__$1);
var G__9410 = null;
var G__9411 = (0);
var G__9412 = (0);
seq__9376_9392 = G__9409;
chunk__9377_9393 = G__9410;
count__9378_9394 = G__9411;
i__9379_9395 = G__9412;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs,"=",then_9391], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then_9391], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

var G__9413 = seq__9371_9385;
var G__9414 = chunk__9372_9386;
var G__9415 = count__9373_9387;
var G__9416 = (i__9374_9388 + (1));
seq__9371_9385 = G__9413;
chunk__9372_9386 = G__9414;
count__9373_9387 = G__9415;
i__9374_9388 = G__9416;
continue;
} else {
var temp__4425__auto___9417 = cljs.core.seq(seq__9371_9385);
if(temp__4425__auto___9417){
var seq__9371_9418__$1 = temp__4425__auto___9417;
if(cljs.core.chunked_seq_QMARK_(seq__9371_9418__$1)){
var c__5368__auto___9419 = cljs.core.chunk_first(seq__9371_9418__$1);
var G__9420 = cljs.core.chunk_rest(seq__9371_9418__$1);
var G__9421 = c__5368__auto___9419;
var G__9422 = cljs.core.count(c__5368__auto___9419);
var G__9423 = (0);
seq__9371_9385 = G__9420;
chunk__9372_9386 = G__9421;
count__9373_9387 = G__9422;
i__9374_9388 = G__9423;
continue;
} else {
var vec__9380_9424 = cljs.core.first(seq__9371_9418__$1);
var ts_9425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9380_9424,(0),null);
var then_9426 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9380_9424,(1),null);
var seq__9381_9427 = cljs.core.seq(ts_9425);
var chunk__9382_9428 = null;
var count__9383_9429 = (0);
var i__9384_9430 = (0);
while(true){
if((i__9384_9430 < count__9383_9429)){
var test_9431 = chunk__9382_9428.cljs$core$IIndexed$_nth$arity$2(null,i__9384_9430);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_9431,":"], 0));

var G__9432 = seq__9381_9427;
var G__9433 = chunk__9382_9428;
var G__9434 = count__9383_9429;
var G__9435 = (i__9384_9430 + (1));
seq__9381_9427 = G__9432;
chunk__9382_9428 = G__9433;
count__9383_9429 = G__9434;
i__9384_9430 = G__9435;
continue;
} else {
var temp__4425__auto___9436__$1 = cljs.core.seq(seq__9381_9427);
if(temp__4425__auto___9436__$1){
var seq__9381_9437__$1 = temp__4425__auto___9436__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9381_9437__$1)){
var c__5368__auto___9438 = cljs.core.chunk_first(seq__9381_9437__$1);
var G__9439 = cljs.core.chunk_rest(seq__9381_9437__$1);
var G__9440 = c__5368__auto___9438;
var G__9441 = cljs.core.count(c__5368__auto___9438);
var G__9442 = (0);
seq__9381_9427 = G__9439;
chunk__9382_9428 = G__9440;
count__9383_9429 = G__9441;
i__9384_9430 = G__9442;
continue;
} else {
var test_9443 = cljs.core.first(seq__9381_9437__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_9443,":"], 0));

var G__9444 = cljs.core.next(seq__9381_9437__$1);
var G__9445 = null;
var G__9446 = (0);
var G__9447 = (0);
seq__9381_9427 = G__9444;
chunk__9382_9428 = G__9445;
count__9383_9429 = G__9446;
i__9384_9430 = G__9447;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs,"=",then_9426], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then_9426], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

var G__9448 = cljs.core.next(seq__9371_9418__$1);
var G__9449 = null;
var G__9450 = (0);
var G__9451 = (0);
seq__9371_9385 = G__9448;
chunk__9372_9386 = G__9449;
count__9373_9387 = G__9450;
i__9374_9388 = G__9451;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(default$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["default:"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs,"=",default$], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([default$], 0));
}
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",gs,";})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__9452){
var map__9453 = p__9452;
var map__9453__$1 = ((cljs.core.seq_QMARK_(map__9453))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9453):map__9453);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9453__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9453__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function(){throw ",throw$,"})()"], 0));
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["throw ",throw$,";"], 0));
}
}));
/**
 * Emit a nicely formatted comment string.
 */
cljs.compiler.emit_comment = (function cljs$compiler$emit_comment(doc,jsdoc){
var docs = (cljs.core.truth_(doc)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [doc], null):null);
var docs__$1 = (cljs.core.truth_(jsdoc)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(docs,jsdoc):docs);
var docs__$2 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,docs__$1);
var print_comment_lines = ((function (docs,docs__$1,docs__$2){
return (function cljs$compiler$emit_comment_$_print_comment_lines(e){
var seq__9486 = cljs.core.seq(clojure.string.split_lines(e));
var chunk__9487 = null;
var count__9488 = (0);
var i__9489 = (0);
while(true){
if((i__9489 < count__9488)){
var next_line = chunk__9487.cljs$core$IIndexed$_nth$arity$2(null,i__9489);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * ",clojure.string.trim(next_line)], 0));

var G__9494 = seq__9486;
var G__9495 = chunk__9487;
var G__9496 = count__9488;
var G__9497 = (i__9489 + (1));
seq__9486 = G__9494;
chunk__9487 = G__9495;
count__9488 = G__9496;
i__9489 = G__9497;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9486);
if(temp__4425__auto__){
var seq__9486__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9486__$1)){
var c__5368__auto__ = cljs.core.chunk_first(seq__9486__$1);
var G__9498 = cljs.core.chunk_rest(seq__9486__$1);
var G__9499 = c__5368__auto__;
var G__9500 = cljs.core.count(c__5368__auto__);
var G__9501 = (0);
seq__9486 = G__9498;
chunk__9487 = G__9499;
count__9488 = G__9500;
i__9489 = G__9501;
continue;
} else {
var next_line = cljs.core.first(seq__9486__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * ",clojure.string.trim(next_line)], 0));

var G__9502 = cljs.core.next(seq__9486__$1);
var G__9503 = null;
var G__9504 = (0);
var G__9505 = (0);
seq__9486 = G__9502;
chunk__9487 = G__9503;
count__9488 = G__9504;
i__9489 = G__9505;
continue;
}
} else {
return null;
}
}
break;
}
});})(docs,docs__$1,docs__$2))
;
if(cljs.core.seq(docs__$2)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/**"], 0));

var seq__9490_9506 = cljs.core.seq(docs__$2);
var chunk__9491_9507 = null;
var count__9492_9508 = (0);
var i__9493_9509 = (0);
while(true){
if((i__9493_9509 < count__9492_9508)){
var e_9510 = chunk__9491_9507.cljs$core$IIndexed$_nth$arity$2(null,i__9493_9509);
if(cljs.core.truth_(e_9510)){
print_comment_lines(e_9510);
} else {
}

var G__9511 = seq__9490_9506;
var G__9512 = chunk__9491_9507;
var G__9513 = count__9492_9508;
var G__9514 = (i__9493_9509 + (1));
seq__9490_9506 = G__9511;
chunk__9491_9507 = G__9512;
count__9492_9508 = G__9513;
i__9493_9509 = G__9514;
continue;
} else {
var temp__4425__auto___9515 = cljs.core.seq(seq__9490_9506);
if(temp__4425__auto___9515){
var seq__9490_9516__$1 = temp__4425__auto___9515;
if(cljs.core.chunked_seq_QMARK_(seq__9490_9516__$1)){
var c__5368__auto___9517 = cljs.core.chunk_first(seq__9490_9516__$1);
var G__9518 = cljs.core.chunk_rest(seq__9490_9516__$1);
var G__9519 = c__5368__auto___9517;
var G__9520 = cljs.core.count(c__5368__auto___9517);
var G__9521 = (0);
seq__9490_9506 = G__9518;
chunk__9491_9507 = G__9519;
count__9492_9508 = G__9520;
i__9493_9509 = G__9521;
continue;
} else {
var e_9522 = cljs.core.first(seq__9490_9516__$1);
if(cljs.core.truth_(e_9522)){
print_comment_lines(e_9522);
} else {
}

var G__9523 = cljs.core.next(seq__9490_9516__$1);
var G__9524 = null;
var G__9525 = (0);
var G__9526 = (0);
seq__9490_9506 = G__9523;
chunk__9491_9507 = G__9524;
count__9492_9508 = G__9525;
i__9493_9509 = G__9526;
continue;
}
} else {
}
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" */"], 0));
} else {
return null;
}
});
cljs.compiler.valid_define_value_QMARK_ = (function cljs$compiler$valid_define_value_QMARK_(x){
return (typeof x === 'string') || (x === true) || (x === false) || (typeof x === 'number');
});
cljs.compiler.get_define = (function cljs$compiler$get_define(mname,jsdoc){
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.Keyword(null,"options","options",99638489));
var and__4572__auto__ = cljs.core.some(((function (opts){
return (function (p1__9528_SHARP_){
return goog.string.startsWith(p1__9528_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__4572__auto__)){
var and__4572__auto____$1 = opts;
if(cljs.core.truth_(and__4572__auto____$1)){
var and__4572__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__4572__auto____$2){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_(define))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([define], 0));
} else {
return null;
}
} else {
return and__4572__auto____$2;
}
} else {
return and__4572__auto____$1;
}
} else {
return and__4572__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__9529){
var map__9530 = p__9529;
var map__9530__$1 = ((cljs.core.seq_QMARK_(map__9530))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9530):map__9530);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9530__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9530__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9530__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9530__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9530__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9530__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9530__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9530__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9530__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name);
if(cljs.core.truth_(init)){
cljs.compiler.emit_comment(doc,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(jsdoc,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516).cljs$core$IFn$_invoke$arity$1(init)));

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ("], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([var$], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = ",(function (){var temp__4423__auto__ = cljs.compiler.get_define(mname,jsdoc);
if(cljs.core.truth_(temp__4423__auto__)){
var define = temp__4423__auto__;
return define;
} else {
return init;
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["; return ("], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"var-special","var-special",1131576802),new cljs.core.Keyword(null,"env","env",-1815813235),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291))], null),var_ast], 0))], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");})()"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([")"], 0));
} else {
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}

if(cljs.core.truth_(export$)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.exportSymbol('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(export$),"', ",mname,");"], 0));
} else {
}

if(cljs.core.truth_((function (){var and__4572__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__4572__auto__)){
return test;
} else {
return and__4572__auto__;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
} else {
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([var$,".cljs$lang$test = ",test,";"], 0));
} else {
return null;
}
} else {
return null;
}
}));
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__9531){
var map__9547 = p__9531;
var map__9547__$1 = ((cljs.core.seq_QMARK_(map__9547))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9547):map__9547);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9547__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9547__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9547__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (",arglist,"){"], 0));

var seq__9548_9562 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__9549_9563 = null;
var count__9550_9564 = (0);
var i__9551_9565 = (0);
while(true){
if((i__9551_9565 < count__9550_9564)){
var vec__9552_9566 = chunk__9549_9563.cljs$core$IIndexed$_nth$arity$2(null,i__9551_9565);
var i_9567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9552_9566,(0),null);
var param_9568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9552_9566,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(param_9568);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist," = cljs.core.next(",arglist,");"], 0));

var G__9569 = seq__9548_9562;
var G__9570 = chunk__9549_9563;
var G__9571 = count__9550_9564;
var G__9572 = (i__9551_9565 + (1));
seq__9548_9562 = G__9569;
chunk__9549_9563 = G__9570;
count__9550_9564 = G__9571;
i__9551_9565 = G__9572;
continue;
} else {
var temp__4425__auto___9573 = cljs.core.seq(seq__9548_9562);
if(temp__4425__auto___9573){
var seq__9548_9574__$1 = temp__4425__auto___9573;
if(cljs.core.chunked_seq_QMARK_(seq__9548_9574__$1)){
var c__5368__auto___9575 = cljs.core.chunk_first(seq__9548_9574__$1);
var G__9576 = cljs.core.chunk_rest(seq__9548_9574__$1);
var G__9577 = c__5368__auto___9575;
var G__9578 = cljs.core.count(c__5368__auto___9575);
var G__9579 = (0);
seq__9548_9562 = G__9576;
chunk__9549_9563 = G__9577;
count__9550_9564 = G__9578;
i__9551_9565 = G__9579;
continue;
} else {
var vec__9553_9580 = cljs.core.first(seq__9548_9574__$1);
var i_9581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9553_9580,(0),null);
var param_9582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9553_9580,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(param_9582);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist," = cljs.core.next(",arglist,");"], 0));

var G__9583 = cljs.core.next(seq__9548_9574__$1);
var G__9584 = null;
var G__9585 = (0);
var G__9586 = (0);
seq__9548_9562 = G__9583;
chunk__9549_9563 = G__9584;
count__9550_9564 = G__9585;
i__9551_9565 = G__9586;
continue;
}
} else {
}
}
break;
}

if(((1) < cljs.core.count(params))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(cljs.core.butlast(params)));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.first(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.rest(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",delegate_name,"("], 0));

var seq__9554_9587 = cljs.core.seq(params);
var chunk__9555_9588 = null;
var count__9556_9589 = (0);
var i__9557_9590 = (0);
while(true){
if((i__9557_9590 < count__9556_9589)){
var param_9591 = chunk__9555_9588.cljs$core$IIndexed$_nth$arity$2(null,i__9557_9590);
cljs.compiler.emit(param_9591);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_9591,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__9592 = seq__9554_9587;
var G__9593 = chunk__9555_9588;
var G__9594 = count__9556_9589;
var G__9595 = (i__9557_9590 + (1));
seq__9554_9587 = G__9592;
chunk__9555_9588 = G__9593;
count__9556_9589 = G__9594;
i__9557_9590 = G__9595;
continue;
} else {
var temp__4425__auto___9596 = cljs.core.seq(seq__9554_9587);
if(temp__4425__auto___9596){
var seq__9554_9597__$1 = temp__4425__auto___9596;
if(cljs.core.chunked_seq_QMARK_(seq__9554_9597__$1)){
var c__5368__auto___9598 = cljs.core.chunk_first(seq__9554_9597__$1);
var G__9599 = cljs.core.chunk_rest(seq__9554_9597__$1);
var G__9600 = c__5368__auto___9598;
var G__9601 = cljs.core.count(c__5368__auto___9598);
var G__9602 = (0);
seq__9554_9587 = G__9599;
chunk__9555_9588 = G__9600;
count__9556_9589 = G__9601;
i__9557_9590 = G__9602;
continue;
} else {
var param_9603 = cljs.core.first(seq__9554_9597__$1);
cljs.compiler.emit(param_9603);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_9603,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__9604 = cljs.core.next(seq__9554_9597__$1);
var G__9605 = null;
var G__9606 = (0);
var G__9607 = (0);
seq__9554_9587 = G__9604;
chunk__9555_9588 = G__9605;
count__9556_9589 = G__9606;
i__9557_9590 = G__9607;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.seq(",arglist,");"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",delegate_name,"("], 0));

var seq__9558_9608 = cljs.core.seq(params);
var chunk__9559_9609 = null;
var count__9560_9610 = (0);
var i__9561_9611 = (0);
while(true){
if((i__9561_9611 < count__9560_9610)){
var param_9612 = chunk__9559_9609.cljs$core$IIndexed$_nth$arity$2(null,i__9561_9611);
cljs.compiler.emit(param_9612);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_9612,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__9613 = seq__9558_9608;
var G__9614 = chunk__9559_9609;
var G__9615 = count__9560_9610;
var G__9616 = (i__9561_9611 + (1));
seq__9558_9608 = G__9613;
chunk__9559_9609 = G__9614;
count__9560_9610 = G__9615;
i__9561_9611 = G__9616;
continue;
} else {
var temp__4425__auto___9617 = cljs.core.seq(seq__9558_9608);
if(temp__4425__auto___9617){
var seq__9558_9618__$1 = temp__4425__auto___9617;
if(cljs.core.chunked_seq_QMARK_(seq__9558_9618__$1)){
var c__5368__auto___9619 = cljs.core.chunk_first(seq__9558_9618__$1);
var G__9620 = cljs.core.chunk_rest(seq__9558_9618__$1);
var G__9621 = c__5368__auto___9619;
var G__9622 = cljs.core.count(c__5368__auto___9619);
var G__9623 = (0);
seq__9558_9608 = G__9620;
chunk__9559_9609 = G__9621;
count__9560_9610 = G__9622;
i__9561_9611 = G__9623;
continue;
} else {
var param_9624 = cljs.core.first(seq__9558_9618__$1);
cljs.compiler.emit(param_9624);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_9624,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__9625 = cljs.core.next(seq__9558_9618__$1);
var G__9626 = null;
var G__9627 = (0);
var G__9628 = (0);
seq__9558_9608 = G__9625;
chunk__9559_9609 = G__9626;
count__9560_9610 = G__9627;
i__9561_9611 = G__9628;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");"], 0));
}

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));
});
cljs.compiler.emit_fn_params = (function cljs$compiler$emit_fn_params(params){
var seq__9633 = cljs.core.seq(params);
var chunk__9634 = null;
var count__9635 = (0);
var i__9636 = (0);
while(true){
if((i__9636 < count__9635)){
var param = chunk__9634.cljs$core$IIndexed$_nth$arity$2(null,i__9636);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__9637 = seq__9633;
var G__9638 = chunk__9634;
var G__9639 = count__9635;
var G__9640 = (i__9636 + (1));
seq__9633 = G__9637;
chunk__9634 = G__9638;
count__9635 = G__9639;
i__9636 = G__9640;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9633);
if(temp__4425__auto__){
var seq__9633__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9633__$1)){
var c__5368__auto__ = cljs.core.chunk_first(seq__9633__$1);
var G__9641 = cljs.core.chunk_rest(seq__9633__$1);
var G__9642 = c__5368__auto__;
var G__9643 = cljs.core.count(c__5368__auto__);
var G__9644 = (0);
seq__9633 = G__9641;
chunk__9634 = G__9642;
count__9635 = G__9643;
i__9636 = G__9644;
continue;
} else {
var param = cljs.core.first(seq__9633__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__9645 = cljs.core.next(seq__9633__$1);
var G__9646 = null;
var G__9647 = (0);
var G__9648 = (0);
seq__9633 = G__9645;
chunk__9634 = G__9646;
count__9635 = G__9647;
i__9636 = G__9648;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__9649){
var map__9651 = p__9649;
var map__9651__$1 = ((cljs.core.seq_QMARK_(map__9651))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9651):map__9651);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9651__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9651__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9651__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9651__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9651__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9651__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9651__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9651__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__6647__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6647__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"("], 0));

cljs.compiler.emit_fn_params(params);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6647__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
});
/**
 * Emit code that copies function arguments into an array starting at an index.
 * Returns name of var holding the array.
 */
cljs.compiler.emit_arguments_to_array = (function cljs$compiler$emit_arguments_to_array(startslice){
if(((startslice >= (0))) && (cljs.core.integer_QMARK_(startslice))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"startslice","startslice",1404029423,null),(0)),cljs.core.list(new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"startslice","startslice",1404029423,null)))], 0)))].join('')));
}

var mname = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
var i = [cljs.core.str(mname),cljs.core.str("__i")].join('');
var a = [cljs.core.str(mname),cljs.core.str("__a")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",i," = 0, ",a," = new Array(arguments.length -  ",startslice,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while (",i," < ",a,".length) {",a,"[",i,"] = arguments[",i," + ",startslice,"]; ++",i,";}"], 0));

return a;
});
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__9652){
var map__9662 = p__9652;
var map__9662__$1 = ((cljs.core.seq_QMARK_(map__9662))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9662):map__9662);
var f = map__9662__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9662__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9662__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9662__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9662__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9662__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9662__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9662__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9662__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__6647__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6647__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

var name_9671__$1 = (function (){var or__4584__auto__ = name;
if(cljs.core.truth_(or__4584__auto__)){
return or__4584__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_9672 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_9671__$1);
var delegate_name_9673 = [cljs.core.str(mname_9672),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function() { "], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",delegate_name_9673," = function ("], 0));

var seq__9663_9674 = cljs.core.seq(params);
var chunk__9664_9675 = null;
var count__9665_9676 = (0);
var i__9666_9677 = (0);
while(true){
if((i__9666_9677 < count__9665_9676)){
var param_9678 = chunk__9664_9675.cljs$core$IIndexed$_nth$arity$2(null,i__9666_9677);
cljs.compiler.emit(param_9678);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_9678,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__9679 = seq__9663_9674;
var G__9680 = chunk__9664_9675;
var G__9681 = count__9665_9676;
var G__9682 = (i__9666_9677 + (1));
seq__9663_9674 = G__9679;
chunk__9664_9675 = G__9680;
count__9665_9676 = G__9681;
i__9666_9677 = G__9682;
continue;
} else {
var temp__4425__auto___9683 = cljs.core.seq(seq__9663_9674);
if(temp__4425__auto___9683){
var seq__9663_9684__$1 = temp__4425__auto___9683;
if(cljs.core.chunked_seq_QMARK_(seq__9663_9684__$1)){
var c__5368__auto___9685 = cljs.core.chunk_first(seq__9663_9684__$1);
var G__9686 = cljs.core.chunk_rest(seq__9663_9684__$1);
var G__9687 = c__5368__auto___9685;
var G__9688 = cljs.core.count(c__5368__auto___9685);
var G__9689 = (0);
seq__9663_9674 = G__9686;
chunk__9664_9675 = G__9687;
count__9665_9676 = G__9688;
i__9666_9677 = G__9689;
continue;
} else {
var param_9690 = cljs.core.first(seq__9663_9684__$1);
cljs.compiler.emit(param_9690);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_9690,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__9691 = cljs.core.next(seq__9663_9684__$1);
var G__9692 = null;
var G__9693 = (0);
var G__9694 = (0);
seq__9663_9674 = G__9691;
chunk__9664_9675 = G__9692;
count__9665_9676 = G__9693;
i__9666_9677 = G__9694;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["){"], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core.truth_(recurs)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",mname_9672," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",(cljs.core.count(params) - (1)),") {"], 0));

var a_9695 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_9695,",0);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["} "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",delegate_name_9673,".call(this,"], 0));

var seq__9667_9696 = cljs.core.seq(params);
var chunk__9668_9697 = null;
var count__9669_9698 = (0);
var i__9670_9699 = (0);
while(true){
if((i__9670_9699 < count__9669_9698)){
var param_9700 = chunk__9668_9697.cljs$core$IIndexed$_nth$arity$2(null,i__9670_9699);
cljs.compiler.emit(param_9700);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_9700,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__9701 = seq__9667_9696;
var G__9702 = chunk__9668_9697;
var G__9703 = count__9669_9698;
var G__9704 = (i__9670_9699 + (1));
seq__9667_9696 = G__9701;
chunk__9668_9697 = G__9702;
count__9669_9698 = G__9703;
i__9670_9699 = G__9704;
continue;
} else {
var temp__4425__auto___9705 = cljs.core.seq(seq__9667_9696);
if(temp__4425__auto___9705){
var seq__9667_9706__$1 = temp__4425__auto___9705;
if(cljs.core.chunked_seq_QMARK_(seq__9667_9706__$1)){
var c__5368__auto___9707 = cljs.core.chunk_first(seq__9667_9706__$1);
var G__9708 = cljs.core.chunk_rest(seq__9667_9706__$1);
var G__9709 = c__5368__auto___9707;
var G__9710 = cljs.core.count(c__5368__auto___9707);
var G__9711 = (0);
seq__9667_9696 = G__9708;
chunk__9668_9697 = G__9709;
count__9669_9698 = G__9710;
i__9670_9699 = G__9711;
continue;
} else {
var param_9712 = cljs.core.first(seq__9667_9706__$1);
cljs.compiler.emit(param_9712);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_9712,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__9713 = cljs.core.next(seq__9667_9706__$1);
var G__9714 = null;
var G__9715 = (0);
var G__9716 = (0);
seq__9667_9696 = G__9713;
chunk__9668_9697 = G__9714;
count__9669_9698 = G__9715;
i__9670_9699 = G__9716;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_9672,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_9672,".cljs$lang$applyTo = "], 0));

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_9671__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_9672,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_9673,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",mname_9672,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6647__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__9720){
var map__9721 = p__9720;
var map__9721__$1 = ((cljs.core.seq_QMARK_(map__9721))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9721):map__9721);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9721__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9721__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9721__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9721__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9721__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9721__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9721__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.array_seq([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__9721,map__9721__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__9717_SHARP_){
var and__4572__auto__ = p1__9717_SHARP_;
if(cljs.core.truth_(and__4572__auto__)){
var G__9722 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__9717_SHARP_);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__9722) : cljs.core.deref.call(null,G__9722));
} else {
return and__4572__auto__;
}
});})(map__9721,map__9721__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,recur_frames)], 0)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.array_seq([loop_lets], 0)))));
if(loop_locals){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["((function (",cljs.compiler.comma_sep(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,loop_locals)),"){"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(methods$))){
if(cljs.core.truth_(variadic)){
cljs.compiler.emit_variadic_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
} else {
cljs.compiler.emit_fn_method(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.first(methods$),new cljs.core.Keyword(null,"name","name",1843675177),name));
}
} else {
var name_9742__$1 = (function (){var or__4584__auto__ = name;
if(cljs.core.truth_(or__4584__auto__)){
return or__4584__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_9743 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_9742__$1);
var maxparams_9744 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_9745 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (name_9742__$1,mname_9743,maxparams_9744,loop_locals,map__9721,map__9721__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(mname_9743),cljs.core.str("__"),cljs.core.str(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_9742__$1,mname_9743,maxparams_9744,loop_locals,map__9721,map__9721__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_9746 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (name_9742__$1,mname_9743,maxparams_9744,mmap_9745,loop_locals,map__9721,map__9721__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__9718_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__9718_SHARP_)));
});})(name_9742__$1,mname_9743,maxparams_9744,mmap_9745,loop_locals,map__9721,map__9721__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq(mmap_9745));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function() {"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",mname_9743," = null;"], 0));

var seq__9723_9747 = cljs.core.seq(ms_9746);
var chunk__9724_9748 = null;
var count__9725_9749 = (0);
var i__9726_9750 = (0);
while(true){
if((i__9726_9750 < count__9725_9749)){
var vec__9727_9751 = chunk__9724_9748.cljs$core$IIndexed$_nth$arity$2(null,i__9726_9750);
var n_9752 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9727_9751,(0),null);
var meth_9753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9727_9751,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",n_9752," = "], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_9753))){
cljs.compiler.emit_variadic_fn_method(meth_9753);
} else {
cljs.compiler.emit_fn_method(meth_9753);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

var G__9754 = seq__9723_9747;
var G__9755 = chunk__9724_9748;
var G__9756 = count__9725_9749;
var G__9757 = (i__9726_9750 + (1));
seq__9723_9747 = G__9754;
chunk__9724_9748 = G__9755;
count__9725_9749 = G__9756;
i__9726_9750 = G__9757;
continue;
} else {
var temp__4425__auto___9758 = cljs.core.seq(seq__9723_9747);
if(temp__4425__auto___9758){
var seq__9723_9759__$1 = temp__4425__auto___9758;
if(cljs.core.chunked_seq_QMARK_(seq__9723_9759__$1)){
var c__5368__auto___9760 = cljs.core.chunk_first(seq__9723_9759__$1);
var G__9761 = cljs.core.chunk_rest(seq__9723_9759__$1);
var G__9762 = c__5368__auto___9760;
var G__9763 = cljs.core.count(c__5368__auto___9760);
var G__9764 = (0);
seq__9723_9747 = G__9761;
chunk__9724_9748 = G__9762;
count__9725_9749 = G__9763;
i__9726_9750 = G__9764;
continue;
} else {
var vec__9728_9765 = cljs.core.first(seq__9723_9759__$1);
var n_9766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9728_9765,(0),null);
var meth_9767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9728_9765,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",n_9766," = "], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_9767))){
cljs.compiler.emit_variadic_fn_method(meth_9767);
} else {
cljs.compiler.emit_fn_method(meth_9767);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

var G__9768 = cljs.core.next(seq__9723_9759__$1);
var G__9769 = null;
var G__9770 = (0);
var G__9771 = (0);
seq__9723_9747 = G__9768;
chunk__9724_9748 = G__9769;
count__9725_9749 = G__9770;
i__9726_9750 = G__9771;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_9743," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_9744),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_9744)),"){"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(maxparams_9744));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = var_args;"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["switch(arguments.length){"], 0));

var seq__9729_9772 = cljs.core.seq(ms_9746);
var chunk__9730_9773 = null;
var count__9731_9774 = (0);
var i__9732_9775 = (0);
while(true){
if((i__9732_9775 < count__9731_9774)){
var vec__9733_9776 = chunk__9730_9773.cljs$core$IIndexed$_nth$arity$2(null,i__9732_9775);
var n_9777 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9733_9776,(0),null);
var meth_9778 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9733_9776,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_9778))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["default:"], 0));

var restarg_9779 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",restarg_9779," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_9780 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([restarg_9779," = new cljs.core.IndexedSeq(",a_9780,",0);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_9777,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_9744)),(((cljs.core.count(maxparams_9744) > (1)))?", ":null),restarg_9779,");"], 0));
} else {
var pcnt_9781 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_9778));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",pcnt_9781,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_9777,".call(this",(((pcnt_9781 === (0)))?null:cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_9781,maxparams_9744))),",")),");"], 0));
}

var G__9782 = seq__9729_9772;
var G__9783 = chunk__9730_9773;
var G__9784 = count__9731_9774;
var G__9785 = (i__9732_9775 + (1));
seq__9729_9772 = G__9782;
chunk__9730_9773 = G__9783;
count__9731_9774 = G__9784;
i__9732_9775 = G__9785;
continue;
} else {
var temp__4425__auto___9786 = cljs.core.seq(seq__9729_9772);
if(temp__4425__auto___9786){
var seq__9729_9787__$1 = temp__4425__auto___9786;
if(cljs.core.chunked_seq_QMARK_(seq__9729_9787__$1)){
var c__5368__auto___9788 = cljs.core.chunk_first(seq__9729_9787__$1);
var G__9789 = cljs.core.chunk_rest(seq__9729_9787__$1);
var G__9790 = c__5368__auto___9788;
var G__9791 = cljs.core.count(c__5368__auto___9788);
var G__9792 = (0);
seq__9729_9772 = G__9789;
chunk__9730_9773 = G__9790;
count__9731_9774 = G__9791;
i__9732_9775 = G__9792;
continue;
} else {
var vec__9734_9793 = cljs.core.first(seq__9729_9787__$1);
var n_9794 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9734_9793,(0),null);
var meth_9795 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9734_9793,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_9795))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["default:"], 0));

var restarg_9796 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",restarg_9796," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_9797 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([restarg_9796," = new cljs.core.IndexedSeq(",a_9797,",0);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_9794,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_9744)),(((cljs.core.count(maxparams_9744) > (1)))?", ":null),restarg_9796,");"], 0));
} else {
var pcnt_9798 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_9795));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",pcnt_9798,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_9794,".call(this",(((pcnt_9798 === (0)))?null:cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_9798,maxparams_9744))),",")),");"], 0));
}

var G__9799 = cljs.core.next(seq__9729_9787__$1);
var G__9800 = null;
var G__9801 = (0);
var G__9802 = (0);
seq__9729_9772 = G__9799;
chunk__9730_9773 = G__9800;
count__9731_9774 = G__9801;
i__9732_9775 = G__9802;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["throw(new Error('Invalid arity: ' + arguments.length));"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["};"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_9743,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_9743,".cljs$lang$applyTo = ",cljs.core.some(((function (name_9742__$1,mname_9743,maxparams_9744,mmap_9745,ms_9746,loop_locals,map__9721,map__9721__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__9719_SHARP_){
var vec__9735 = p1__9719_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9735,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9735,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_9742__$1,mname_9743,maxparams_9744,mmap_9745,ms_9746,loop_locals,map__9721,map__9721__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_9746),".cljs$lang$applyTo;"], 0));
} else {
}

var seq__9736_9803 = cljs.core.seq(ms_9746);
var chunk__9737_9804 = null;
var count__9738_9805 = (0);
var i__9739_9806 = (0);
while(true){
if((i__9739_9806 < count__9738_9805)){
var vec__9740_9807 = chunk__9737_9804.cljs$core$IIndexed$_nth$arity$2(null,i__9739_9806);
var n_9808 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9740_9807,(0),null);
var meth_9809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9740_9807,(1),null);
var c_9810 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_9809));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_9809))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_9743,".cljs$core$IFn$_invoke$arity$variadic = ",n_9808,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_9743,".cljs$core$IFn$_invoke$arity$",c_9810," = ",n_9808,";"], 0));
}

var G__9811 = seq__9736_9803;
var G__9812 = chunk__9737_9804;
var G__9813 = count__9738_9805;
var G__9814 = (i__9739_9806 + (1));
seq__9736_9803 = G__9811;
chunk__9737_9804 = G__9812;
count__9738_9805 = G__9813;
i__9739_9806 = G__9814;
continue;
} else {
var temp__4425__auto___9815 = cljs.core.seq(seq__9736_9803);
if(temp__4425__auto___9815){
var seq__9736_9816__$1 = temp__4425__auto___9815;
if(cljs.core.chunked_seq_QMARK_(seq__9736_9816__$1)){
var c__5368__auto___9817 = cljs.core.chunk_first(seq__9736_9816__$1);
var G__9818 = cljs.core.chunk_rest(seq__9736_9816__$1);
var G__9819 = c__5368__auto___9817;
var G__9820 = cljs.core.count(c__5368__auto___9817);
var G__9821 = (0);
seq__9736_9803 = G__9818;
chunk__9737_9804 = G__9819;
count__9738_9805 = G__9820;
i__9739_9806 = G__9821;
continue;
} else {
var vec__9741_9822 = cljs.core.first(seq__9736_9816__$1);
var n_9823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9741_9822,(0),null);
var meth_9824 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9741_9822,(1),null);
var c_9825 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_9824));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_9824))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_9743,".cljs$core$IFn$_invoke$arity$variadic = ",n_9823,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_9743,".cljs$core$IFn$_invoke$arity$",c_9825," = ",n_9823,";"], 0));
}

var G__9826 = cljs.core.next(seq__9736_9816__$1);
var G__9827 = null;
var G__9828 = (0);
var G__9829 = (0);
seq__9736_9803 = G__9826;
chunk__9737_9804 = G__9827;
count__9738_9805 = G__9828;
i__9739_9806 = G__9829;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",mname_9743,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";})(",cljs.compiler.comma_sep(loop_locals),"))"], 0));
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__9830){
var map__9831 = p__9830;
var map__9831__$1 = ((cljs.core.seq_QMARK_(map__9831))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9831):map__9831);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9831__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9831__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9831__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__4572__auto__ = statements;
if(cljs.core.truth_(and__4572__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__4572__auto__;
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var seq__9832_9836 = cljs.core.seq(statements);
var chunk__9833_9837 = null;
var count__9834_9838 = (0);
var i__9835_9839 = (0);
while(true){
if((i__9835_9839 < count__9834_9838)){
var s_9840 = chunk__9833_9837.cljs$core$IIndexed$_nth$arity$2(null,i__9835_9839);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_9840], 0));

var G__9841 = seq__9832_9836;
var G__9842 = chunk__9833_9837;
var G__9843 = count__9834_9838;
var G__9844 = (i__9835_9839 + (1));
seq__9832_9836 = G__9841;
chunk__9833_9837 = G__9842;
count__9834_9838 = G__9843;
i__9835_9839 = G__9844;
continue;
} else {
var temp__4425__auto___9845 = cljs.core.seq(seq__9832_9836);
if(temp__4425__auto___9845){
var seq__9832_9846__$1 = temp__4425__auto___9845;
if(cljs.core.chunked_seq_QMARK_(seq__9832_9846__$1)){
var c__5368__auto___9847 = cljs.core.chunk_first(seq__9832_9846__$1);
var G__9848 = cljs.core.chunk_rest(seq__9832_9846__$1);
var G__9849 = c__5368__auto___9847;
var G__9850 = cljs.core.count(c__5368__auto___9847);
var G__9851 = (0);
seq__9832_9836 = G__9848;
chunk__9833_9837 = G__9849;
count__9834_9838 = G__9850;
i__9835_9839 = G__9851;
continue;
} else {
var s_9852 = cljs.core.first(seq__9832_9846__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_9852], 0));

var G__9853 = cljs.core.next(seq__9832_9846__$1);
var G__9854 = null;
var G__9855 = (0);
var G__9856 = (0);
seq__9832_9836 = G__9853;
chunk__9833_9837 = G__9854;
count__9834_9838 = G__9855;
i__9835_9839 = G__9856;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(cljs.core.truth_((function (){var and__4572__auto__ = statements;
if(cljs.core.truth_(and__4572__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__4572__auto__;
}
})())){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__9857){
var map__9858 = p__9857;
var map__9858__$1 = ((cljs.core.seq_QMARK_(map__9858))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9858):map__9858);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9858__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9858__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9858__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9858__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9858__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4584__auto__ = name;
if(cljs.core.truth_(or__4584__auto__)){
return or__4584__auto__;
} else {
return finally$;
}
})())){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["try{",try$,"}"], 0));

if(cljs.core.truth_(name)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["catch (",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"){",catch$,"}"], 0));
} else {
}

if(cljs.core.truth_(finally$)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(finally$))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("finally block cannot contain constant"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Keyword(null,"constant","constant",-379609303),cljs.core.list(new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Symbol(null,"finally","finally",-1065347064,null)))], 0)))].join('')));
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["finally {",finally$,"}"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
} else {
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([try$], 0));
}
}));
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__9860,is_loop){
var map__9869 = p__9860;
var map__9869__$1 = ((cljs.core.seq_QMARK_(map__9869))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9869):map__9869);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9869__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9869__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9869__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var _STAR_lexical_renames_STAR_9870_9877 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_lexical_renames_STAR_9870_9877,context,map__9869,map__9869__$1,bindings,expr,env){
return (function (p1__9859_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.hash(p1__9859_SHARP_),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__9859_SHARP_)),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_9870_9877,context,map__9869,map__9869__$1,bindings,expr,env))
,bindings):null));

try{var seq__9871_9878 = cljs.core.seq(bindings);
var chunk__9872_9879 = null;
var count__9873_9880 = (0);
var i__9874_9881 = (0);
while(true){
if((i__9874_9881 < count__9873_9880)){
var map__9875_9882 = chunk__9872_9879.cljs$core$IIndexed$_nth$arity$2(null,i__9874_9881);
var map__9875_9883__$1 = ((cljs.core.seq_QMARK_(map__9875_9882))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9875_9882):map__9875_9882);
var binding_9884 = map__9875_9883__$1;
var init_9885 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9875_9883__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(binding_9884);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = ",init_9885,";"], 0));

var G__9886 = seq__9871_9878;
var G__9887 = chunk__9872_9879;
var G__9888 = count__9873_9880;
var G__9889 = (i__9874_9881 + (1));
seq__9871_9878 = G__9886;
chunk__9872_9879 = G__9887;
count__9873_9880 = G__9888;
i__9874_9881 = G__9889;
continue;
} else {
var temp__4425__auto___9890 = cljs.core.seq(seq__9871_9878);
if(temp__4425__auto___9890){
var seq__9871_9891__$1 = temp__4425__auto___9890;
if(cljs.core.chunked_seq_QMARK_(seq__9871_9891__$1)){
var c__5368__auto___9892 = cljs.core.chunk_first(seq__9871_9891__$1);
var G__9893 = cljs.core.chunk_rest(seq__9871_9891__$1);
var G__9894 = c__5368__auto___9892;
var G__9895 = cljs.core.count(c__5368__auto___9892);
var G__9896 = (0);
seq__9871_9878 = G__9893;
chunk__9872_9879 = G__9894;
count__9873_9880 = G__9895;
i__9874_9881 = G__9896;
continue;
} else {
var map__9876_9897 = cljs.core.first(seq__9871_9891__$1);
var map__9876_9898__$1 = ((cljs.core.seq_QMARK_(map__9876_9897))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9876_9897):map__9876_9897);
var binding_9899 = map__9876_9898__$1;
var init_9900 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9876_9898__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(binding_9899);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = ",init_9900,";"], 0));

var G__9901 = cljs.core.next(seq__9871_9891__$1);
var G__9902 = null;
var G__9903 = (0);
var G__9904 = (0);
seq__9871_9878 = G__9901;
chunk__9872_9879 = G__9902;
count__9873_9880 = G__9903;
i__9874_9881 = G__9904;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["while(true){"], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core.truth_(is_loop)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));
} else {
}
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_9870_9877;
}
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"let","let",-1282412701),(function (ast){
return cljs.compiler.emit_let(ast,false);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"loop","loop",-395552849),(function (ast){
return cljs.compiler.emit_let(ast,true);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__9905){
var map__9906 = p__9905;
var map__9906__$1 = ((cljs.core.seq_QMARK_(map__9906))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9906):map__9906);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9906__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9906__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9906__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__5468__auto___9907 = cljs.core.count(exprs);
var i_9908 = (0);
while(true){
if((i_9908 < n__5468__auto___9907)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_9908) : temps.call(null,i_9908))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_9908) : exprs.call(null,i_9908)),";"], 0));

var G__9909 = (i_9908 + (1));
i_9908 = G__9909;
continue;
} else {
}
break;
}

var n__5468__auto___9910 = cljs.core.count(exprs);
var i_9911 = (0);
while(true){
if((i_9911 < n__5468__auto___9910)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_9911) : params.call(null,i_9911)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_9911) : temps.call(null,i_9911)),";"], 0));

var G__9912 = (i_9911 + (1));
i_9911 = G__9912;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["continue;"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__9913){
var map__9914 = p__9913;
var map__9914__$1 = ((cljs.core.seq_QMARK_(map__9914))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9914):map__9914);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9914__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9914__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9914__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var seq__9915_9921 = cljs.core.seq(bindings);
var chunk__9916_9922 = null;
var count__9917_9923 = (0);
var i__9918_9924 = (0);
while(true){
if((i__9918_9924 < count__9917_9923)){
var map__9919_9925 = chunk__9916_9922.cljs$core$IIndexed$_nth$arity$2(null,i__9918_9924);
var map__9919_9926__$1 = ((cljs.core.seq_QMARK_(map__9919_9925))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9919_9925):map__9919_9925);
var binding_9927 = map__9919_9926__$1;
var init_9928 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9919_9926__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_9927)," = ",init_9928,";"], 0));

var G__9929 = seq__9915_9921;
var G__9930 = chunk__9916_9922;
var G__9931 = count__9917_9923;
var G__9932 = (i__9918_9924 + (1));
seq__9915_9921 = G__9929;
chunk__9916_9922 = G__9930;
count__9917_9923 = G__9931;
i__9918_9924 = G__9932;
continue;
} else {
var temp__4425__auto___9933 = cljs.core.seq(seq__9915_9921);
if(temp__4425__auto___9933){
var seq__9915_9934__$1 = temp__4425__auto___9933;
if(cljs.core.chunked_seq_QMARK_(seq__9915_9934__$1)){
var c__5368__auto___9935 = cljs.core.chunk_first(seq__9915_9934__$1);
var G__9936 = cljs.core.chunk_rest(seq__9915_9934__$1);
var G__9937 = c__5368__auto___9935;
var G__9938 = cljs.core.count(c__5368__auto___9935);
var G__9939 = (0);
seq__9915_9921 = G__9936;
chunk__9916_9922 = G__9937;
count__9917_9923 = G__9938;
i__9918_9924 = G__9939;
continue;
} else {
var map__9920_9940 = cljs.core.first(seq__9915_9934__$1);
var map__9920_9941__$1 = ((cljs.core.seq_QMARK_(map__9920_9940))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9920_9940):map__9920_9940);
var binding_9942 = map__9920_9941__$1;
var init_9943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9920_9941__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_9942)," = ",init_9943,";"], 0));

var G__9944 = cljs.core.next(seq__9915_9934__$1);
var G__9945 = null;
var G__9946 = (0);
var G__9947 = (0);
seq__9915_9921 = G__9944;
chunk__9916_9922 = G__9945;
count__9917_9923 = G__9946;
i__9918_9924 = G__9947;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([expr], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.protocol_prefix = (function cljs$compiler$protocol_prefix(psym){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str([cljs.core.str(psym)].join('').replace(".","$").replace("/","$")),cljs.core.str("$")].join(''));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__9950){
var map__9951 = p__9950;
var map__9951__$1 = ((cljs.core.seq_QMARK_(map__9951))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9951):map__9951);
var expr = map__9951__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9951__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9951__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9951__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4572__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4572__auto__)){
var and__4572__auto____$1 = cljs.core.not(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__4572__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__4572__auto____$1;
}
} else {
return and__4572__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4572__auto__ = protocol;
if(cljs.core.truth_(and__4572__auto__)){
var and__4572__auto____$1 = tag;
if(cljs.core.truth_(and__4572__auto____$1)){
var or__4584__auto__ = (function (){var and__4572__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4572__auto____$2)){
var and__4572__auto____$3 = protocol;
if(cljs.core.truth_(and__4572__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__4572__auto____$3;
}
} else {
return and__4572__auto____$2;
}
})();
if(cljs.core.truth_(or__4584__auto__)){
return or__4584__auto__;
} else {
var and__4572__auto____$2 = (function (){var or__4584__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__4584__auto____$1)){
return or__4584__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4572__auto____$2)){
var or__4584__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__4584__auto____$1){
return or__4584__auto____$1;
} else {
var and__4572__auto____$3 = !(cljs.core.set_QMARK_(tag));
if(and__4572__auto____$3){
var and__4572__auto____$4 = cljs.core.not(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null], null), null).call(null,tag));
if(and__4572__auto____$4){
var temp__4425__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),tag));
if(cljs.core.truth_(temp__4425__auto__)){
var ps = temp__4425__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return and__4572__auto____$4;
}
} else {
return and__4572__auto____$3;
}
}
} else {
return and__4572__auto____$2;
}
}
} else {
return and__4572__auto____$1;
}
} else {
return and__4572__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4584__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4584__auto__){
return or__4584__auto__;
} else {
var temp__4425__auto__ = [cljs.core.str(ns)].join('');
if(cljs.core.truth_(temp__4425__auto__)){
var ns_str = temp__4425__auto__;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(clojure.string.split.cljs$core$IFn$_invoke$arity$2(ns_str,/\./),(0),null),"goog");
} else {
return null;
}
}
})():null);
var keyword_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(f) instanceof cljs.core.Keyword));
var vec__9952 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4572__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4572__auto__)){
return (arity > mfa);
} else {
return and__4572__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__9951,map__9951__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__9951,map__9951__$1,expr,f,args,env){
return (function (p1__9948_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__9948_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__9951,map__9951__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__9951,map__9951__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__9951,map__9951__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__9951,map__9951__$1,expr,f,args,env){
return (function (p1__9949_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__9949_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__9951,map__9951__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__9951,map__9951__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9952,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9952,(1),null);
var env__6647__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6647__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["!(",cljs.core.first(args),")"], 0));
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_9953 = [cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(args),".",pimpl_9953,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_9954 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_9954,args)),(((mfa_9954 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_9954,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__4584__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4584__auto__)){
return or__4584__auto__;
} else {
var or__4584__auto____$1 = js_QMARK_;
if(or__4584__auto____$1){
return or__4584__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(cljs.core.truth_((function (){var and__4572__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4572__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__4572__auto__;
}
})())){
var fprop_9955 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(",f__$1,fprop_9955," ? ",f__$1,fprop_9955,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")"], 0));
}

}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6647__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__9956){
var map__9957 = p__9956;
var map__9957__$1 = ((cljs.core.seq_QMARK_(map__9957))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9957):map__9957);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9957__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9957__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9957__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6647__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6647__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(new ",ctor,"(",cljs.compiler.comma_sep(args),"))"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6647__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__9958){
var map__9959 = p__9958;
var map__9959__$1 = ((cljs.core.seq_QMARK_(map__9959))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9959):map__9959);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9959__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9959__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9959__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6647__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6647__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target," = ",val], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6647__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.load_libs = (function cljs$compiler$load_libs(libs,seen,reloads){
var loaded_libs = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null));
var loaded_libs_temp = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.core.*loaded-libs*","cljs.core.*loaded-libs*",-1847086525,null)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(!COMPILED) ",loaded_libs_temp," = ",loaded_libs," || cljs.core.set();"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(!COMPILED) ",loaded_libs," = cljs.core.set();"], 0));
} else {
}

var seq__9964_9968 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.vals(libs))));
var chunk__9965_9969 = null;
var count__9966_9970 = (0);
var i__9967_9971 = (0);
while(true){
if((i__9967_9971 < count__9966_9970)){
var lib_9972 = chunk__9965_9969.cljs$core$IIndexed$_nth$arity$2(null,i__9967_9971);
if(cljs.core.truth_((function (){var or__4584__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4584__auto__)){
return or__4584__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_9972),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_9972),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__4584__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4584__auto__)){
return or__4584__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_9972),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_9972),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_9972),"');"], 0));

}
}

var G__9973 = seq__9964_9968;
var G__9974 = chunk__9965_9969;
var G__9975 = count__9966_9970;
var G__9976 = (i__9967_9971 + (1));
seq__9964_9968 = G__9973;
chunk__9965_9969 = G__9974;
count__9966_9970 = G__9975;
i__9967_9971 = G__9976;
continue;
} else {
var temp__4425__auto___9977 = cljs.core.seq(seq__9964_9968);
if(temp__4425__auto___9977){
var seq__9964_9978__$1 = temp__4425__auto___9977;
if(cljs.core.chunked_seq_QMARK_(seq__9964_9978__$1)){
var c__5368__auto___9979 = cljs.core.chunk_first(seq__9964_9978__$1);
var G__9980 = cljs.core.chunk_rest(seq__9964_9978__$1);
var G__9981 = c__5368__auto___9979;
var G__9982 = cljs.core.count(c__5368__auto___9979);
var G__9983 = (0);
seq__9964_9968 = G__9980;
chunk__9965_9969 = G__9981;
count__9966_9970 = G__9982;
i__9967_9971 = G__9983;
continue;
} else {
var lib_9984 = cljs.core.first(seq__9964_9978__$1);
if(cljs.core.truth_((function (){var or__4584__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4584__auto__)){
return or__4584__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_9984),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_9984),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__4584__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4584__auto__)){
return or__4584__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_9984),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_9984),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_9984),"');"], 0));

}
}

var G__9985 = cljs.core.next(seq__9964_9978__$1);
var G__9986 = null;
var G__9987 = (0);
var G__9988 = (0);
seq__9964_9968 = G__9985;
chunk__9965_9969 = G__9986;
count__9966_9970 = G__9987;
i__9967_9971 = G__9988;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs)))){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if(!COMPILED) ",loaded_libs," = cljs.core.into(",loaded_libs_temp,", ",loaded_libs,");"], 0));
} else {
return null;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__9989){
var map__9990 = p__9989;
var map__9990__$1 = ((cljs.core.seq_QMARK_(map__9990))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9990):map__9990);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9990__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9990__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9990__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9990__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9990__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9990__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('cljs.core');"], 0));
}

cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__9991){
var map__9992 = p__9991;
var map__9992__$1 = ((cljs.core.seq_QMARK_(map__9992))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9992):map__9992);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9992__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9992__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9992__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9992__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @constructor"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__9993_10003 = cljs.core.seq(fields__$1);
var chunk__9994_10004 = null;
var count__9995_10005 = (0);
var i__9996_10006 = (0);
while(true){
if((i__9996_10006 < count__9995_10005)){
var fld_10007 = chunk__9994_10004.cljs$core$IIndexed$_nth$arity$2(null,i__9996_10006);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_10007," = ",fld_10007,";"], 0));

var G__10008 = seq__9993_10003;
var G__10009 = chunk__9994_10004;
var G__10010 = count__9995_10005;
var G__10011 = (i__9996_10006 + (1));
seq__9993_10003 = G__10008;
chunk__9994_10004 = G__10009;
count__9995_10005 = G__10010;
i__9996_10006 = G__10011;
continue;
} else {
var temp__4425__auto___10012 = cljs.core.seq(seq__9993_10003);
if(temp__4425__auto___10012){
var seq__9993_10013__$1 = temp__4425__auto___10012;
if(cljs.core.chunked_seq_QMARK_(seq__9993_10013__$1)){
var c__5368__auto___10014 = cljs.core.chunk_first(seq__9993_10013__$1);
var G__10015 = cljs.core.chunk_rest(seq__9993_10013__$1);
var G__10016 = c__5368__auto___10014;
var G__10017 = cljs.core.count(c__5368__auto___10014);
var G__10018 = (0);
seq__9993_10003 = G__10015;
chunk__9994_10004 = G__10016;
count__9995_10005 = G__10017;
i__9996_10006 = G__10018;
continue;
} else {
var fld_10019 = cljs.core.first(seq__9993_10013__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_10019," = ",fld_10019,";"], 0));

var G__10020 = cljs.core.next(seq__9993_10013__$1);
var G__10021 = null;
var G__10022 = (0);
var G__10023 = (0);
seq__9993_10003 = G__10020;
chunk__9994_10004 = G__10021;
count__9995_10005 = G__10022;
i__9996_10006 = G__10023;
continue;
}
} else {
}
}
break;
}

var seq__9997_10024 = cljs.core.seq(pmasks);
var chunk__9998_10025 = null;
var count__9999_10026 = (0);
var i__10000_10027 = (0);
while(true){
if((i__10000_10027 < count__9999_10026)){
var vec__10001_10028 = chunk__9998_10025.cljs$core$IIndexed$_nth$arity$2(null,i__10000_10027);
var pno_10029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10001_10028,(0),null);
var pmask_10030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10001_10028,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_10029,"$ = ",pmask_10030,";"], 0));

var G__10031 = seq__9997_10024;
var G__10032 = chunk__9998_10025;
var G__10033 = count__9999_10026;
var G__10034 = (i__10000_10027 + (1));
seq__9997_10024 = G__10031;
chunk__9998_10025 = G__10032;
count__9999_10026 = G__10033;
i__10000_10027 = G__10034;
continue;
} else {
var temp__4425__auto___10035 = cljs.core.seq(seq__9997_10024);
if(temp__4425__auto___10035){
var seq__9997_10036__$1 = temp__4425__auto___10035;
if(cljs.core.chunked_seq_QMARK_(seq__9997_10036__$1)){
var c__5368__auto___10037 = cljs.core.chunk_first(seq__9997_10036__$1);
var G__10038 = cljs.core.chunk_rest(seq__9997_10036__$1);
var G__10039 = c__5368__auto___10037;
var G__10040 = cljs.core.count(c__5368__auto___10037);
var G__10041 = (0);
seq__9997_10024 = G__10038;
chunk__9998_10025 = G__10039;
count__9999_10026 = G__10040;
i__10000_10027 = G__10041;
continue;
} else {
var vec__10002_10042 = cljs.core.first(seq__9997_10036__$1);
var pno_10043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10002_10042,(0),null);
var pmask_10044 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10002_10042,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_10043,"$ = ",pmask_10044,";"], 0));

var G__10045 = cljs.core.next(seq__9997_10036__$1);
var G__10046 = null;
var G__10047 = (0);
var G__10048 = (0);
seq__9997_10024 = G__10045;
chunk__9998_10025 = G__10046;
count__9999_10026 = G__10047;
i__10000_10027 = G__10048;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__10049){
var map__10050 = p__10049;
var map__10050__$1 = ((cljs.core.seq_QMARK_(map__10050))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10050):map__10050);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10050__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10050__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10050__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10050__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @constructor"], 0));

var seq__10051_10065 = cljs.core.seq(fields__$1);
var chunk__10052_10066 = null;
var count__10053_10067 = (0);
var i__10054_10068 = (0);
while(true){
if((i__10054_10068 < count__10053_10067)){
var fld_10069 = chunk__10052_10066.cljs$core$IIndexed$_nth$arity$2(null,i__10054_10068);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @param {*} ",fld_10069], 0));

var G__10070 = seq__10051_10065;
var G__10071 = chunk__10052_10066;
var G__10072 = count__10053_10067;
var G__10073 = (i__10054_10068 + (1));
seq__10051_10065 = G__10070;
chunk__10052_10066 = G__10071;
count__10053_10067 = G__10072;
i__10054_10068 = G__10073;
continue;
} else {
var temp__4425__auto___10074 = cljs.core.seq(seq__10051_10065);
if(temp__4425__auto___10074){
var seq__10051_10075__$1 = temp__4425__auto___10074;
if(cljs.core.chunked_seq_QMARK_(seq__10051_10075__$1)){
var c__5368__auto___10076 = cljs.core.chunk_first(seq__10051_10075__$1);
var G__10077 = cljs.core.chunk_rest(seq__10051_10075__$1);
var G__10078 = c__5368__auto___10076;
var G__10079 = cljs.core.count(c__5368__auto___10076);
var G__10080 = (0);
seq__10051_10065 = G__10077;
chunk__10052_10066 = G__10078;
count__10053_10067 = G__10079;
i__10054_10068 = G__10080;
continue;
} else {
var fld_10081 = cljs.core.first(seq__10051_10075__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @param {*} ",fld_10081], 0));

var G__10082 = cljs.core.next(seq__10051_10075__$1);
var G__10083 = null;
var G__10084 = (0);
var G__10085 = (0);
seq__10051_10065 = G__10082;
chunk__10052_10066 = G__10083;
count__10053_10067 = G__10084;
i__10054_10068 = G__10085;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @param {*=} __meta "], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @param {*=} __extmap"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @param {number|null} __hash"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__10055_10086 = cljs.core.seq(fields__$1);
var chunk__10056_10087 = null;
var count__10057_10088 = (0);
var i__10058_10089 = (0);
while(true){
if((i__10058_10089 < count__10057_10088)){
var fld_10090 = chunk__10056_10087.cljs$core$IIndexed$_nth$arity$2(null,i__10058_10089);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_10090," = ",fld_10090,";"], 0));

var G__10091 = seq__10055_10086;
var G__10092 = chunk__10056_10087;
var G__10093 = count__10057_10088;
var G__10094 = (i__10058_10089 + (1));
seq__10055_10086 = G__10091;
chunk__10056_10087 = G__10092;
count__10057_10088 = G__10093;
i__10058_10089 = G__10094;
continue;
} else {
var temp__4425__auto___10095 = cljs.core.seq(seq__10055_10086);
if(temp__4425__auto___10095){
var seq__10055_10096__$1 = temp__4425__auto___10095;
if(cljs.core.chunked_seq_QMARK_(seq__10055_10096__$1)){
var c__5368__auto___10097 = cljs.core.chunk_first(seq__10055_10096__$1);
var G__10098 = cljs.core.chunk_rest(seq__10055_10096__$1);
var G__10099 = c__5368__auto___10097;
var G__10100 = cljs.core.count(c__5368__auto___10097);
var G__10101 = (0);
seq__10055_10086 = G__10098;
chunk__10056_10087 = G__10099;
count__10057_10088 = G__10100;
i__10058_10089 = G__10101;
continue;
} else {
var fld_10102 = cljs.core.first(seq__10055_10096__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_10102," = ",fld_10102,";"], 0));

var G__10103 = cljs.core.next(seq__10055_10096__$1);
var G__10104 = null;
var G__10105 = (0);
var G__10106 = (0);
seq__10055_10086 = G__10103;
chunk__10056_10087 = G__10104;
count__10057_10088 = G__10105;
i__10058_10089 = G__10106;
continue;
}
} else {
}
}
break;
}

var seq__10059_10107 = cljs.core.seq(pmasks);
var chunk__10060_10108 = null;
var count__10061_10109 = (0);
var i__10062_10110 = (0);
while(true){
if((i__10062_10110 < count__10061_10109)){
var vec__10063_10111 = chunk__10060_10108.cljs$core$IIndexed$_nth$arity$2(null,i__10062_10110);
var pno_10112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10063_10111,(0),null);
var pmask_10113 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10063_10111,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_10112,"$ = ",pmask_10113,";"], 0));

var G__10114 = seq__10059_10107;
var G__10115 = chunk__10060_10108;
var G__10116 = count__10061_10109;
var G__10117 = (i__10062_10110 + (1));
seq__10059_10107 = G__10114;
chunk__10060_10108 = G__10115;
count__10061_10109 = G__10116;
i__10062_10110 = G__10117;
continue;
} else {
var temp__4425__auto___10118 = cljs.core.seq(seq__10059_10107);
if(temp__4425__auto___10118){
var seq__10059_10119__$1 = temp__4425__auto___10118;
if(cljs.core.chunked_seq_QMARK_(seq__10059_10119__$1)){
var c__5368__auto___10120 = cljs.core.chunk_first(seq__10059_10119__$1);
var G__10121 = cljs.core.chunk_rest(seq__10059_10119__$1);
var G__10122 = c__5368__auto___10120;
var G__10123 = cljs.core.count(c__5368__auto___10120);
var G__10124 = (0);
seq__10059_10107 = G__10121;
chunk__10060_10108 = G__10122;
count__10061_10109 = G__10123;
i__10062_10110 = G__10124;
continue;
} else {
var vec__10064_10125 = cljs.core.first(seq__10059_10119__$1);
var pno_10126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10064_10125,(0),null);
var pmask_10127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10064_10125,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_10126,"$ = ",pmask_10127,";"], 0));

var G__10128 = cljs.core.next(seq__10059_10119__$1);
var G__10129 = null;
var G__10130 = (0);
var G__10131 = (0);
seq__10059_10107 = G__10128;
chunk__10060_10108 = G__10129;
count__10061_10109 = G__10130;
i__10062_10110 = G__10131;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})"], 0));

return cljs.compiler.emit(body);
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__10132){
var map__10133 = p__10132;
var map__10133__$1 = ((cljs.core.seq_QMARK_(map__10133))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10133):map__10133);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10133__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10133__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10133__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10133__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10133__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6647__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6647__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY)], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6647__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__10134){
var map__10135 = p__10134;
var map__10135__$1 = ((cljs.core.seq_QMARK_(map__10135))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10135):map__10135);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10135__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10135__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10135__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10135__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env__6647__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6647__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([code], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)))], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6647__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys(opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
var seq__10144 = cljs.core.seq(table);
var chunk__10145 = null;
var count__10146 = (0);
var i__10147 = (0);
while(true){
if((i__10147 < count__10146)){
var vec__10148 = chunk__10145.cljs$core$IIndexed$_nth$arity$2(null,i__10147);
var keyword = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10148,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10148,(1),null);
var ns_10150 = cljs.core.namespace(keyword);
var name_10151 = cljs.core.name(keyword);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value," = "], 0));

cljs.compiler.emits_keyword(keyword);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";\n"], 0));

var G__10152 = seq__10144;
var G__10153 = chunk__10145;
var G__10154 = count__10146;
var G__10155 = (i__10147 + (1));
seq__10144 = G__10152;
chunk__10145 = G__10153;
count__10146 = G__10154;
i__10147 = G__10155;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10144);
if(temp__4425__auto__){
var seq__10144__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10144__$1)){
var c__5368__auto__ = cljs.core.chunk_first(seq__10144__$1);
var G__10156 = cljs.core.chunk_rest(seq__10144__$1);
var G__10157 = c__5368__auto__;
var G__10158 = cljs.core.count(c__5368__auto__);
var G__10159 = (0);
seq__10144 = G__10156;
chunk__10145 = G__10157;
count__10146 = G__10158;
i__10147 = G__10159;
continue;
} else {
var vec__10149 = cljs.core.first(seq__10144__$1);
var keyword = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10149,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10149,(1),null);
var ns_10160 = cljs.core.namespace(keyword);
var name_10161 = cljs.core.name(keyword);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value," = "], 0));

cljs.compiler.emits_keyword(keyword);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";\n"], 0));

var G__10162 = cljs.core.next(seq__10144__$1);
var G__10163 = null;
var G__10164 = (0);
var G__10165 = (0);
seq__10144 = G__10162;
chunk__10145 = G__10163;
count__10146 = G__10164;
i__10147 = G__10165;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=compiler.js.map