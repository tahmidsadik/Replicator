// Compiled by ClojureScript 0.0-3464 {:static-fns true}
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
var map__8928 = s;
var map__8928__$1 = ((cljs.core.seq_QMARK_(map__8928))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8928):map__8928);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8928__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8928__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__8930 = info;
var map__8931 = G__8930;
var map__8931__$1 = ((cljs.core.seq_QMARK_(map__8931))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8931):map__8931);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8931__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__8930__$1 = G__8930;
while(true){
var d__$2 = d__$1;
var map__8932 = G__8930__$1;
var map__8932__$1 = ((cljs.core.seq_QMARK_(map__8932))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8932):map__8932);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8932__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__8933 = (d__$2 + (1));
var G__8934 = shadow__$1;
d__$1 = G__8933;
G__8930__$1 = G__8934;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__8935){
var map__8939 = p__8935;
var map__8939__$1 = ((cljs.core.seq_QMARK_(map__8939))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8939):map__8939);
var name_var = map__8939__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8939__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8939__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace([cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__8940 = info;
var map__8940__$1 = ((cljs.core.seq_QMARK_(map__8940))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8940):map__8940);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8940__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8940__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__8941 = [cljs.core.str(clojure.string.replace([cljs.core.str(ns)].join(''),".","$")),cljs.core.str("$"),cljs.core.str(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__8941) : cljs.compiler.munge.call(null,G__8941));
})());
});
cljs.compiler.munge = (function cljs$compiler$munge(){
var args8943 = [];
var len__5200__auto___8948 = arguments.length;
var i__5201__auto___8949 = (0);
while(true){
if((i__5201__auto___8949 < len__5200__auto___8948)){
args8943.push((arguments[i__5201__auto___8949]));

var G__8950 = (i__5201__auto___8949 + (1));
i__5201__auto___8949 = G__8950;
continue;
} else {
}
break;
}

var G__8945 = args8943.length;
switch (G__8945) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8943.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.core.map_QMARK_(s)){
var map__8946 = s;
var map__8946__$1 = ((cljs.core.seq_QMARK_(map__8946))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8946):map__8946);
var name_var = map__8946__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8946__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8946__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8946__$1,new cljs.core.Keyword(null,"info","info",-317069002));
if(cljs.core.truth_(new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var renamed = (function (){var G__8947 = cljs.core.hash(s);
return (cljs.compiler._STAR_lexical_renames_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler._STAR_lexical_renames_STAR_.cljs$core$IFn$_invoke$arity$1(G__8947) : cljs.compiler._STAR_lexical_renames_STAR_.call(null,G__8947));
})();
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(field)?[cljs.core.str("self__."),cljs.core.str(name)].join(''):(cljs.core.truth_(renamed)?renamed:name
)),reserved);
if(cljs.core.truth_((function (){var or__4161__auto__ = field;
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return (depth === (0));
}
})())){
return munged_name;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(munged_name),cljs.core.str("__$"),cljs.core.str(depth)].join(''));
}
}
} else {
var ss = clojure.string.replace([cljs.core.str(s)].join(''),"..","_DOT__DOT_");
var ss__$1 = clojure.string.replace(ss,(new RegExp("\\/(.)")),".$1");
var ss__$2 = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ss,ss__$1){
return (function (p1__8942_SHARP_){
if(cljs.core.truth_((reserved.cljs$core$IFn$_invoke$arity$1 ? reserved.cljs$core$IFn$_invoke$arity$1(p1__8942_SHARP_) : reserved.call(null,p1__8942_SHARP_)))){
return [cljs.core.str(p1__8942_SHARP_),cljs.core.str("$")].join('');
} else {
return p1__8942_SHARP_;
}
});})(ss,ss__$1))
,clojure.string.split.cljs$core$IFn$_invoke$arity$2(ss__$1,/\./)));
var ms = cljs.core.munge(ss__$2);
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
var G__8953 = cp;
switch (G__8953) {
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
var seq__8959_8963 = cljs.core.seq(s);
var chunk__8960_8964 = null;
var count__8961_8965 = (0);
var i__8962_8966 = (0);
while(true){
if((i__8962_8966 < count__8961_8965)){
var c_8967 = chunk__8960_8964.cljs$core$IIndexed$_nth$arity$2(null,i__8962_8966);
sb.append(cljs.compiler.escape_char(c_8967));

var G__8968 = seq__8959_8963;
var G__8969 = chunk__8960_8964;
var G__8970 = count__8961_8965;
var G__8971 = (i__8962_8966 + (1));
seq__8959_8963 = G__8968;
chunk__8960_8964 = G__8969;
count__8961_8965 = G__8970;
i__8962_8966 = G__8971;
continue;
} else {
var temp__4425__auto___8972 = cljs.core.seq(seq__8959_8963);
if(temp__4425__auto___8972){
var seq__8959_8973__$1 = temp__4425__auto___8972;
if(cljs.core.chunked_seq_QMARK_(seq__8959_8973__$1)){
var c__4945__auto___8974 = cljs.core.chunk_first(seq__8959_8973__$1);
var G__8975 = cljs.core.chunk_rest(seq__8959_8973__$1);
var G__8976 = c__4945__auto___8974;
var G__8977 = cljs.core.count(c__4945__auto___8974);
var G__8978 = (0);
seq__8959_8963 = G__8975;
chunk__8960_8964 = G__8976;
count__8961_8965 = G__8977;
i__8962_8966 = G__8978;
continue;
} else {
var c_8979 = cljs.core.first(seq__8959_8973__$1);
sb.append(cljs.compiler.escape_char(c_8979));

var G__8980 = cljs.core.next(seq__8959_8973__$1);
var G__8981 = null;
var G__8982 = (0);
var G__8983 = (0);
seq__8959_8963 = G__8980;
chunk__8960_8964 = G__8981;
count__8961_8965 = G__8982;
i__8962_8966 = G__8983;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__5055__auto__ = (function (){var G__8984 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8984) : cljs.core.atom.call(null,G__8984));
})();
var prefer_table__5056__auto__ = (function (){var G__8985 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8985) : cljs.core.atom.call(null,G__8985));
})();
var method_cache__5057__auto__ = (function (){var G__8986 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8986) : cljs.core.atom.call(null,G__8986));
})();
var cached_hierarchy__5058__auto__ = (function (){var G__8987 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8987) : cljs.core.atom.call(null,G__8987));
})();
var hierarchy__5059__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5059__auto__,method_table__5055__auto__,prefer_table__5056__auto__,method_cache__5057__auto__,cached_hierarchy__5058__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__5595__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__5595__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__8991_8994 = ast;
var map__8991_8995__$1 = ((cljs.core.seq_QMARK_(map__8991_8994))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8991_8994):map__8991_8994);
var env_8996 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8991_8995__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_8996))){
var map__8992_8997 = env_8996;
var map__8992_8998__$1 = ((cljs.core.seq_QMARK_(map__8992_8997))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8992_8997):map__8992_8997);
var line_8999 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8992_8998__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_9000 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8992_8998__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,((function (map__8992_8997,map__8992_8998__$1,line_8999,column_9000,map__8991_8994,map__8991_8995__$1,env_8996,val__5595__auto__){
return (function (m){
var minfo = (function (){var G__8993 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
var G__8993__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__8993,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join('')):G__8993);
return G__8993__$1;
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_8999 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__8992_8997,map__8992_8998__$1,line_8999,column_9000,map__8991_8994,map__8991_8995__$1,env_8996,val__5595__auto__){
return (function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_9000)?(column_9000 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__8992_8997,map__8992_8998__$1,line_8999,column_9000,map__8991_8994,map__8991_8995__$1,env_8996,val__5595__auto__){
return (function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
});})(minfo,map__8992_8997,map__8992_8998__$1,line_8999,column_9000,map__8991_8994,map__8991_8995__$1,env_8996,val__5595__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__8992_8997,map__8992_8998__$1,line_8999,column_9000,map__8991_8994,map__8991_8995__$1,env_8996,val__5595__auto__))
,cljs.core.sorted_map()));
});})(map__8992_8997,map__8992_8998__$1,line_8999,column_9000,map__8991_8994,map__8991_8995__$1,env_8996,val__5595__auto__))
);
} else {
}
} else {
}

return (cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast) : cljs.compiler.emit_STAR_.call(null,ast));
}finally {if((val__5595__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(){
var args__5207__auto__ = [];
var len__5200__auto___9007 = arguments.length;
var i__5201__auto___9008 = (0);
while(true){
if((i__5201__auto___9008 < len__5200__auto___9007)){
args__5207__auto__.push((arguments[i__5201__auto___9008]));

var G__9009 = (i__5201__auto___9008 + (1));
i__5201__auto___9008 = G__9009;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((0) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((0)),(0))):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__5208__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__9003_9010 = cljs.core.seq(xs);
var chunk__9004_9011 = null;
var count__9005_9012 = (0);
var i__9006_9013 = (0);
while(true){
if((i__9006_9013 < count__9005_9012)){
var x_9014 = chunk__9004_9011.cljs$core$IIndexed$_nth$arity$2(null,i__9006_9013);
if((x_9014 == null)){
} else {
if(cljs.core.map_QMARK_(x_9014)){
cljs.compiler.emit(x_9014);
} else {
if(cljs.core.seq_QMARK_(x_9014)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_9014);
} else {
if(cljs.core.fn_QMARK_(x_9014)){
(x_9014.cljs$core$IFn$_invoke$arity$0 ? x_9014.cljs$core$IFn$_invoke$arity$0() : x_9014.call(null));
} else {
var s_9015 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x_9014], 0));
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__9003_9010,chunk__9004_9011,count__9005_9012,i__9006_9013,s_9015,x_9014){
return (function (p1__9001_SHARP_){
return (p1__9001_SHARP_ + cljs.core.count(s_9015));
});})(seq__9003_9010,chunk__9004_9011,count__9005_9012,i__9006_9013,s_9015,x_9014))
);
} else {
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_9015], 0));

}
}
}
}

var G__9016 = seq__9003_9010;
var G__9017 = chunk__9004_9011;
var G__9018 = count__9005_9012;
var G__9019 = (i__9006_9013 + (1));
seq__9003_9010 = G__9016;
chunk__9004_9011 = G__9017;
count__9005_9012 = G__9018;
i__9006_9013 = G__9019;
continue;
} else {
var temp__4425__auto___9020 = cljs.core.seq(seq__9003_9010);
if(temp__4425__auto___9020){
var seq__9003_9021__$1 = temp__4425__auto___9020;
if(cljs.core.chunked_seq_QMARK_(seq__9003_9021__$1)){
var c__4945__auto___9022 = cljs.core.chunk_first(seq__9003_9021__$1);
var G__9023 = cljs.core.chunk_rest(seq__9003_9021__$1);
var G__9024 = c__4945__auto___9022;
var G__9025 = cljs.core.count(c__4945__auto___9022);
var G__9026 = (0);
seq__9003_9010 = G__9023;
chunk__9004_9011 = G__9024;
count__9005_9012 = G__9025;
i__9006_9013 = G__9026;
continue;
} else {
var x_9027 = cljs.core.first(seq__9003_9021__$1);
if((x_9027 == null)){
} else {
if(cljs.core.map_QMARK_(x_9027)){
cljs.compiler.emit(x_9027);
} else {
if(cljs.core.seq_QMARK_(x_9027)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_9027);
} else {
if(cljs.core.fn_QMARK_(x_9027)){
(x_9027.cljs$core$IFn$_invoke$arity$0 ? x_9027.cljs$core$IFn$_invoke$arity$0() : x_9027.call(null));
} else {
var s_9028 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x_9027], 0));
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__9003_9010,chunk__9004_9011,count__9005_9012,i__9006_9013,s_9028,x_9027,seq__9003_9021__$1,temp__4425__auto___9020){
return (function (p1__9001_SHARP_){
return (p1__9001_SHARP_ + cljs.core.count(s_9028));
});})(seq__9003_9010,chunk__9004_9011,count__9005_9012,i__9006_9013,s_9028,x_9027,seq__9003_9021__$1,temp__4425__auto___9020))
);
} else {
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_9028], 0));

}
}
}
}

var G__9029 = cljs.core.next(seq__9003_9021__$1);
var G__9030 = null;
var G__9031 = (0);
var G__9032 = (0);
seq__9003_9010 = G__9029;
chunk__9004_9011 = G__9030;
count__9005_9012 = G__9031;
i__9006_9013 = G__9032;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq9002){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9002));
});
cljs.compiler.emitln = (function cljs$compiler$emitln(){
var args__5207__auto__ = [];
var len__5200__auto___9036 = arguments.length;
var i__5201__auto___9037 = (0);
while(true){
if((i__5201__auto___9037 < len__5200__auto___9036)){
args__5207__auto__.push((arguments[i__5201__auto___9037]));

var G__9038 = (i__5201__auto___9037 + (1));
i__5201__auto___9037 = G__9038;
continue;
} else {
}
break;
}

var argseq__5208__auto__ = ((((0) < args__5207__auto__.length))?(new cljs.core.IndexedSeq(args__5207__auto__.slice((0)),(0))):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__5208__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,xs);

cljs.core.println();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__9034){
var map__9035 = p__9034;
var map__9035__$1 = ((cljs.core.seq_QMARK_(map__9035))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9035):map__9035);
var m = map__9035__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9035__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.array_seq([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq9033){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq9033));
});
cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__5116__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_9041_9043 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_9042_9044 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_9041_9043,_STAR_print_fn_STAR_9042_9044,sb__5116__auto__){
return (function (x__5117__auto__){
return sb__5116__auto__.append(x__5117__auto__);
});})(_STAR_print_newline_STAR_9041_9043,_STAR_print_fn_STAR_9042_9044,sb__5116__auto__))
;

try{cljs.compiler.emit(expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_9042_9044;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_9041_9043;
}
return [cljs.core.str(sb__5116__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__5055__auto__ = (function (){var G__9045 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9045) : cljs.core.atom.call(null,G__9045));
})();
var prefer_table__5056__auto__ = (function (){var G__9046 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9046) : cljs.core.atom.call(null,G__9046));
})();
var method_cache__5057__auto__ = (function (){var G__9047 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9047) : cljs.core.atom.call(null,G__9047));
})();
var cached_hierarchy__5058__auto__ = (function (){var G__9048 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__9048) : cljs.core.atom.call(null,G__9048));
})();
var hierarchy__5059__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5059__auto__,method_table__5055__auto__,prefer_table__5056__auto__,method_cache__5057__auto__,cached_hierarchy__5058__auto__));
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
var vec__9049 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9049,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9049,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9049,(2),null);
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

var G__9052_9054 = (cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__9052_9054) : cljs.compiler.emit_constant.call(null,G__9052_9054));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

var G__9053_9055 = cljs.core.hash(kw);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__9053_9055) : cljs.compiler.emit_constant.call(null,G__9053_9055));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([")"], 0));
});
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)))))){
var value = (function (){var G__9056 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__9056) : x.call(null,G__9056));
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

var G__9057_9058 = cljs.core.hash(x);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__9057_9058) : cljs.compiler.emit_constant.call(null,G__9057_9058));

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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__9060){
var map__9061 = p__9060;
var map__9061__$1 = ((cljs.core.seq_QMARK_(map__9061))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9061):map__9061);
var arg = map__9061__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9061__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9061__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9061__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name(var_name)], null));
var or__4161__auto__ = js_module_name;
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
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
var env__6228__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6228__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__9062 = info__$1;
var G__9062__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null)))?cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__9062):G__9062);
return G__9062__$1;
})()], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6228__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__9063){
var map__9064 = p__9063;
var map__9064__$1 = ((cljs.core.seq_QMARK_(map__9064))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9064):map__9064);
var arg = map__9064__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9064__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9064__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9064__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9064__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"sym","sym",195671222,null))], 0)))].join('')));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null))], 0)))].join('')));
}

var map__9065 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__9065__$1 = ((cljs.core.seq_QMARK_(map__9065))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9065):map__9065);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9065__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__6228__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6228__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6228__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__9066){
var map__9067 = p__9066;
var map__9067__$1 = ((cljs.core.seq_QMARK_(map__9067))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9067):map__9067);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9067__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9067__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9067__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6228__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6228__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.with_meta(",expr,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6228__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_((function (p1__9068_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__9068_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__9069){
var map__9070 = p__9069;
var map__9070__$1 = ((cljs.core.seq_QMARK_(map__9070))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9070):map__9070);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9070__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9070__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9070__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__6228__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6228__auto__))){
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6228__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"list","list",765357683),(function (p__9071){
var map__9072 = p__9071;
var map__9072__$1 = ((cljs.core.seq_QMARK_(map__9072))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9072):map__9072);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9072__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9072__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6228__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6228__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.List.EMPTY"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.list(",cljs.compiler.comma_sep(items),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6228__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__9073){
var map__9074 = p__9073;
var map__9074__$1 = ((cljs.core.seq_QMARK_(map__9074))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9074):map__9074);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9074__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9074__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6228__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6228__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentVector.EMPTY"], 0));
} else {
var cnt_9075 = cljs.core.count(items);
if((cnt_9075 < (32))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentVector(null, ",cnt_9075,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep(items),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep(items),"], true)"], 0));
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6228__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_((function (p1__9076_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__9076_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count(items)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__9077){
var map__9078 = p__9077;
var map__9078__$1 = ((cljs.core.seq_QMARK_(map__9078))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9078):map__9078);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9078__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9078__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6228__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6228__auto__))){
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6228__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__9079){
var map__9080 = p__9079;
var map__9080__$1 = ((cljs.core.seq_QMARK_(map__9080))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9080):map__9080);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9080__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9080__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9080__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6228__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6228__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["{"], 0));

var temp__4425__auto___9089 = cljs.core.seq(items);
if(temp__4425__auto___9089){
var items_9090__$1 = temp__4425__auto___9089;
var vec__9081_9091 = items_9090__$1;
var vec__9082_9092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9081_9091,(0),null);
var k_9093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9082_9092,(0),null);
var v_9094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9082_9092,(1),null);
var r_9095 = cljs.core.nthnext(vec__9081_9091,(1));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\"",cljs.core.name(k_9093),"\": ",v_9094], 0));

var seq__9083_9096 = cljs.core.seq(r_9095);
var chunk__9084_9097 = null;
var count__9085_9098 = (0);
var i__9086_9099 = (0);
while(true){
if((i__9086_9099 < count__9085_9098)){
var vec__9087_9100 = chunk__9084_9097.cljs$core$IIndexed$_nth$arity$2(null,i__9086_9099);
var k_9101__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9087_9100,(0),null);
var v_9102__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9087_9100,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", \"",cljs.core.name(k_9101__$1),"\": ",v_9102__$1], 0));

var G__9103 = seq__9083_9096;
var G__9104 = chunk__9084_9097;
var G__9105 = count__9085_9098;
var G__9106 = (i__9086_9099 + (1));
seq__9083_9096 = G__9103;
chunk__9084_9097 = G__9104;
count__9085_9098 = G__9105;
i__9086_9099 = G__9106;
continue;
} else {
var temp__4425__auto___9107__$1 = cljs.core.seq(seq__9083_9096);
if(temp__4425__auto___9107__$1){
var seq__9083_9108__$1 = temp__4425__auto___9107__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9083_9108__$1)){
var c__4945__auto___9109 = cljs.core.chunk_first(seq__9083_9108__$1);
var G__9110 = cljs.core.chunk_rest(seq__9083_9108__$1);
var G__9111 = c__4945__auto___9109;
var G__9112 = cljs.core.count(c__4945__auto___9109);
var G__9113 = (0);
seq__9083_9096 = G__9110;
chunk__9084_9097 = G__9111;
count__9085_9098 = G__9112;
i__9086_9099 = G__9113;
continue;
} else {
var vec__9088_9114 = cljs.core.first(seq__9083_9108__$1);
var k_9115__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9088_9114,(0),null);
var v_9116__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9088_9114,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", \"",cljs.core.name(k_9115__$1),"\": ",v_9116__$1], 0));

var G__9117 = cljs.core.next(seq__9083_9108__$1);
var G__9118 = null;
var G__9119 = (0);
var G__9120 = (0);
seq__9083_9096 = G__9117;
chunk__9084_9097 = G__9118;
count__9085_9098 = G__9119;
i__9086_9099 = G__9120;
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6228__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__9121){
var map__9122 = p__9121;
var map__9122__$1 = ((cljs.core.seq_QMARK_(map__9122))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9122):map__9122);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9122__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9122__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__6228__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6228__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(form) : cljs.compiler.emit_constant.call(null,form));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6228__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__9123){
var map__9125 = p__9123;
var map__9125__$1 = ((cljs.core.seq_QMARK_(map__9125))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9125):map__9125);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9125__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9125__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__4149__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__4149__auto__){
var and__4149__auto____$1 = form;
if(cljs.core.truth_(and__4149__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__9126){
var map__9128 = p__9126;
var map__9128__$1 = ((cljs.core.seq_QMARK_(map__9128))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9128):map__9128);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9128__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9128__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__4161__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__9129){
var map__9130 = p__9129;
var map__9130__$1 = ((cljs.core.seq_QMARK_(map__9130))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9130):map__9130);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9130__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9130__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9130__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9130__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9130__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__4161__auto__ = unchecked;
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__9131){
var map__9132 = p__9131;
var map__9132__$1 = ((cljs.core.seq_QMARK_(map__9132))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9132):map__9132);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9132__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9132__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9132__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9132__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9132__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__9133_9147 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tests,thens)));
var chunk__9134_9148 = null;
var count__9135_9149 = (0);
var i__9136_9150 = (0);
while(true){
if((i__9136_9150 < count__9135_9149)){
var vec__9137_9151 = chunk__9134_9148.cljs$core$IIndexed$_nth$arity$2(null,i__9136_9150);
var ts_9152 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9137_9151,(0),null);
var then_9153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9137_9151,(1),null);
var seq__9138_9154 = cljs.core.seq(ts_9152);
var chunk__9139_9155 = null;
var count__9140_9156 = (0);
var i__9141_9157 = (0);
while(true){
if((i__9141_9157 < count__9140_9156)){
var test_9158 = chunk__9139_9155.cljs$core$IIndexed$_nth$arity$2(null,i__9141_9157);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_9158,":"], 0));

var G__9159 = seq__9138_9154;
var G__9160 = chunk__9139_9155;
var G__9161 = count__9140_9156;
var G__9162 = (i__9141_9157 + (1));
seq__9138_9154 = G__9159;
chunk__9139_9155 = G__9160;
count__9140_9156 = G__9161;
i__9141_9157 = G__9162;
continue;
} else {
var temp__4425__auto___9163 = cljs.core.seq(seq__9138_9154);
if(temp__4425__auto___9163){
var seq__9138_9164__$1 = temp__4425__auto___9163;
if(cljs.core.chunked_seq_QMARK_(seq__9138_9164__$1)){
var c__4945__auto___9165 = cljs.core.chunk_first(seq__9138_9164__$1);
var G__9166 = cljs.core.chunk_rest(seq__9138_9164__$1);
var G__9167 = c__4945__auto___9165;
var G__9168 = cljs.core.count(c__4945__auto___9165);
var G__9169 = (0);
seq__9138_9154 = G__9166;
chunk__9139_9155 = G__9167;
count__9140_9156 = G__9168;
i__9141_9157 = G__9169;
continue;
} else {
var test_9170 = cljs.core.first(seq__9138_9164__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_9170,":"], 0));

var G__9171 = cljs.core.next(seq__9138_9164__$1);
var G__9172 = null;
var G__9173 = (0);
var G__9174 = (0);
seq__9138_9154 = G__9171;
chunk__9139_9155 = G__9172;
count__9140_9156 = G__9173;
i__9141_9157 = G__9174;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs,"=",then_9153], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then_9153], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

var G__9175 = seq__9133_9147;
var G__9176 = chunk__9134_9148;
var G__9177 = count__9135_9149;
var G__9178 = (i__9136_9150 + (1));
seq__9133_9147 = G__9175;
chunk__9134_9148 = G__9176;
count__9135_9149 = G__9177;
i__9136_9150 = G__9178;
continue;
} else {
var temp__4425__auto___9179 = cljs.core.seq(seq__9133_9147);
if(temp__4425__auto___9179){
var seq__9133_9180__$1 = temp__4425__auto___9179;
if(cljs.core.chunked_seq_QMARK_(seq__9133_9180__$1)){
var c__4945__auto___9181 = cljs.core.chunk_first(seq__9133_9180__$1);
var G__9182 = cljs.core.chunk_rest(seq__9133_9180__$1);
var G__9183 = c__4945__auto___9181;
var G__9184 = cljs.core.count(c__4945__auto___9181);
var G__9185 = (0);
seq__9133_9147 = G__9182;
chunk__9134_9148 = G__9183;
count__9135_9149 = G__9184;
i__9136_9150 = G__9185;
continue;
} else {
var vec__9142_9186 = cljs.core.first(seq__9133_9180__$1);
var ts_9187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9142_9186,(0),null);
var then_9188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9142_9186,(1),null);
var seq__9143_9189 = cljs.core.seq(ts_9187);
var chunk__9144_9190 = null;
var count__9145_9191 = (0);
var i__9146_9192 = (0);
while(true){
if((i__9146_9192 < count__9145_9191)){
var test_9193 = chunk__9144_9190.cljs$core$IIndexed$_nth$arity$2(null,i__9146_9192);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_9193,":"], 0));

var G__9194 = seq__9143_9189;
var G__9195 = chunk__9144_9190;
var G__9196 = count__9145_9191;
var G__9197 = (i__9146_9192 + (1));
seq__9143_9189 = G__9194;
chunk__9144_9190 = G__9195;
count__9145_9191 = G__9196;
i__9146_9192 = G__9197;
continue;
} else {
var temp__4425__auto___9198__$1 = cljs.core.seq(seq__9143_9189);
if(temp__4425__auto___9198__$1){
var seq__9143_9199__$1 = temp__4425__auto___9198__$1;
if(cljs.core.chunked_seq_QMARK_(seq__9143_9199__$1)){
var c__4945__auto___9200 = cljs.core.chunk_first(seq__9143_9199__$1);
var G__9201 = cljs.core.chunk_rest(seq__9143_9199__$1);
var G__9202 = c__4945__auto___9200;
var G__9203 = cljs.core.count(c__4945__auto___9200);
var G__9204 = (0);
seq__9143_9189 = G__9201;
chunk__9144_9190 = G__9202;
count__9145_9191 = G__9203;
i__9146_9192 = G__9204;
continue;
} else {
var test_9205 = cljs.core.first(seq__9143_9199__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_9205,":"], 0));

var G__9206 = cljs.core.next(seq__9143_9199__$1);
var G__9207 = null;
var G__9208 = (0);
var G__9209 = (0);
seq__9143_9189 = G__9206;
chunk__9144_9190 = G__9207;
count__9145_9191 = G__9208;
i__9146_9192 = G__9209;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs,"=",then_9188], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then_9188], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

var G__9210 = cljs.core.next(seq__9133_9180__$1);
var G__9211 = null;
var G__9212 = (0);
var G__9213 = (0);
seq__9133_9147 = G__9210;
chunk__9134_9148 = G__9211;
count__9135_9149 = G__9212;
i__9136_9150 = G__9213;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__9214){
var map__9215 = p__9214;
var map__9215__$1 = ((cljs.core.seq_QMARK_(map__9215))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9215):map__9215);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9215__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9215__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var seq__9248 = cljs.core.seq(clojure.string.split_lines(e));
var chunk__9249 = null;
var count__9250 = (0);
var i__9251 = (0);
while(true){
if((i__9251 < count__9250)){
var next_line = chunk__9249.cljs$core$IIndexed$_nth$arity$2(null,i__9251);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * ",clojure.string.trim(next_line)], 0));

var G__9256 = seq__9248;
var G__9257 = chunk__9249;
var G__9258 = count__9250;
var G__9259 = (i__9251 + (1));
seq__9248 = G__9256;
chunk__9249 = G__9257;
count__9250 = G__9258;
i__9251 = G__9259;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9248);
if(temp__4425__auto__){
var seq__9248__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9248__$1)){
var c__4945__auto__ = cljs.core.chunk_first(seq__9248__$1);
var G__9260 = cljs.core.chunk_rest(seq__9248__$1);
var G__9261 = c__4945__auto__;
var G__9262 = cljs.core.count(c__4945__auto__);
var G__9263 = (0);
seq__9248 = G__9260;
chunk__9249 = G__9261;
count__9250 = G__9262;
i__9251 = G__9263;
continue;
} else {
var next_line = cljs.core.first(seq__9248__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * ",clojure.string.trim(next_line)], 0));

var G__9264 = cljs.core.next(seq__9248__$1);
var G__9265 = null;
var G__9266 = (0);
var G__9267 = (0);
seq__9248 = G__9264;
chunk__9249 = G__9265;
count__9250 = G__9266;
i__9251 = G__9267;
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

var seq__9252_9268 = cljs.core.seq(docs__$2);
var chunk__9253_9269 = null;
var count__9254_9270 = (0);
var i__9255_9271 = (0);
while(true){
if((i__9255_9271 < count__9254_9270)){
var e_9272 = chunk__9253_9269.cljs$core$IIndexed$_nth$arity$2(null,i__9255_9271);
if(cljs.core.truth_(e_9272)){
print_comment_lines(e_9272);
} else {
}

var G__9273 = seq__9252_9268;
var G__9274 = chunk__9253_9269;
var G__9275 = count__9254_9270;
var G__9276 = (i__9255_9271 + (1));
seq__9252_9268 = G__9273;
chunk__9253_9269 = G__9274;
count__9254_9270 = G__9275;
i__9255_9271 = G__9276;
continue;
} else {
var temp__4425__auto___9277 = cljs.core.seq(seq__9252_9268);
if(temp__4425__auto___9277){
var seq__9252_9278__$1 = temp__4425__auto___9277;
if(cljs.core.chunked_seq_QMARK_(seq__9252_9278__$1)){
var c__4945__auto___9279 = cljs.core.chunk_first(seq__9252_9278__$1);
var G__9280 = cljs.core.chunk_rest(seq__9252_9278__$1);
var G__9281 = c__4945__auto___9279;
var G__9282 = cljs.core.count(c__4945__auto___9279);
var G__9283 = (0);
seq__9252_9268 = G__9280;
chunk__9253_9269 = G__9281;
count__9254_9270 = G__9282;
i__9255_9271 = G__9283;
continue;
} else {
var e_9284 = cljs.core.first(seq__9252_9278__$1);
if(cljs.core.truth_(e_9284)){
print_comment_lines(e_9284);
} else {
}

var G__9285 = cljs.core.next(seq__9252_9278__$1);
var G__9286 = null;
var G__9287 = (0);
var G__9288 = (0);
seq__9252_9268 = G__9285;
chunk__9253_9269 = G__9286;
count__9254_9270 = G__9287;
i__9255_9271 = G__9288;
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
var and__4149__auto__ = cljs.core.some(((function (opts){
return (function (p1__9290_SHARP_){
return goog.string.startsWith(p1__9290_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__4149__auto__)){
var and__4149__auto____$1 = opts;
if(cljs.core.truth_(and__4149__auto____$1)){
var and__4149__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__4149__auto____$2){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_(define))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([define], 0));
} else {
return null;
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
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__9291){
var map__9292 = p__9291;
var map__9292__$1 = ((cljs.core.seq_QMARK_(map__9292))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9292):map__9292);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9292__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9292__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9292__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9292__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9292__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9292__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9292__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9292__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9292__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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

if(cljs.core.truth_((function (){var and__4149__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__4149__auto__)){
return test;
} else {
return and__4149__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__9293){
var map__9309 = p__9293;
var map__9309__$1 = ((cljs.core.seq_QMARK_(map__9309))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9309):map__9309);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9309__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9309__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9309__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (",arglist,"){"], 0));

var seq__9310_9324 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__9311_9325 = null;
var count__9312_9326 = (0);
var i__9313_9327 = (0);
while(true){
if((i__9313_9327 < count__9312_9326)){
var vec__9314_9328 = chunk__9311_9325.cljs$core$IIndexed$_nth$arity$2(null,i__9313_9327);
var i_9329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9314_9328,(0),null);
var param_9330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9314_9328,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(param_9330);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist," = cljs.core.next(",arglist,");"], 0));

var G__9331 = seq__9310_9324;
var G__9332 = chunk__9311_9325;
var G__9333 = count__9312_9326;
var G__9334 = (i__9313_9327 + (1));
seq__9310_9324 = G__9331;
chunk__9311_9325 = G__9332;
count__9312_9326 = G__9333;
i__9313_9327 = G__9334;
continue;
} else {
var temp__4425__auto___9335 = cljs.core.seq(seq__9310_9324);
if(temp__4425__auto___9335){
var seq__9310_9336__$1 = temp__4425__auto___9335;
if(cljs.core.chunked_seq_QMARK_(seq__9310_9336__$1)){
var c__4945__auto___9337 = cljs.core.chunk_first(seq__9310_9336__$1);
var G__9338 = cljs.core.chunk_rest(seq__9310_9336__$1);
var G__9339 = c__4945__auto___9337;
var G__9340 = cljs.core.count(c__4945__auto___9337);
var G__9341 = (0);
seq__9310_9324 = G__9338;
chunk__9311_9325 = G__9339;
count__9312_9326 = G__9340;
i__9313_9327 = G__9341;
continue;
} else {
var vec__9315_9342 = cljs.core.first(seq__9310_9336__$1);
var i_9343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9315_9342,(0),null);
var param_9344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9315_9342,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(param_9344);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist," = cljs.core.next(",arglist,");"], 0));

var G__9345 = cljs.core.next(seq__9310_9336__$1);
var G__9346 = null;
var G__9347 = (0);
var G__9348 = (0);
seq__9310_9324 = G__9345;
chunk__9311_9325 = G__9346;
count__9312_9326 = G__9347;
i__9313_9327 = G__9348;
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

var seq__9316_9349 = cljs.core.seq(params);
var chunk__9317_9350 = null;
var count__9318_9351 = (0);
var i__9319_9352 = (0);
while(true){
if((i__9319_9352 < count__9318_9351)){
var param_9353 = chunk__9317_9350.cljs$core$IIndexed$_nth$arity$2(null,i__9319_9352);
cljs.compiler.emit(param_9353);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_9353,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__9354 = seq__9316_9349;
var G__9355 = chunk__9317_9350;
var G__9356 = count__9318_9351;
var G__9357 = (i__9319_9352 + (1));
seq__9316_9349 = G__9354;
chunk__9317_9350 = G__9355;
count__9318_9351 = G__9356;
i__9319_9352 = G__9357;
continue;
} else {
var temp__4425__auto___9358 = cljs.core.seq(seq__9316_9349);
if(temp__4425__auto___9358){
var seq__9316_9359__$1 = temp__4425__auto___9358;
if(cljs.core.chunked_seq_QMARK_(seq__9316_9359__$1)){
var c__4945__auto___9360 = cljs.core.chunk_first(seq__9316_9359__$1);
var G__9361 = cljs.core.chunk_rest(seq__9316_9359__$1);
var G__9362 = c__4945__auto___9360;
var G__9363 = cljs.core.count(c__4945__auto___9360);
var G__9364 = (0);
seq__9316_9349 = G__9361;
chunk__9317_9350 = G__9362;
count__9318_9351 = G__9363;
i__9319_9352 = G__9364;
continue;
} else {
var param_9365 = cljs.core.first(seq__9316_9359__$1);
cljs.compiler.emit(param_9365);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_9365,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__9366 = cljs.core.next(seq__9316_9359__$1);
var G__9367 = null;
var G__9368 = (0);
var G__9369 = (0);
seq__9316_9349 = G__9366;
chunk__9317_9350 = G__9367;
count__9318_9351 = G__9368;
i__9319_9352 = G__9369;
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

var seq__9320_9370 = cljs.core.seq(params);
var chunk__9321_9371 = null;
var count__9322_9372 = (0);
var i__9323_9373 = (0);
while(true){
if((i__9323_9373 < count__9322_9372)){
var param_9374 = chunk__9321_9371.cljs$core$IIndexed$_nth$arity$2(null,i__9323_9373);
cljs.compiler.emit(param_9374);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_9374,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__9375 = seq__9320_9370;
var G__9376 = chunk__9321_9371;
var G__9377 = count__9322_9372;
var G__9378 = (i__9323_9373 + (1));
seq__9320_9370 = G__9375;
chunk__9321_9371 = G__9376;
count__9322_9372 = G__9377;
i__9323_9373 = G__9378;
continue;
} else {
var temp__4425__auto___9379 = cljs.core.seq(seq__9320_9370);
if(temp__4425__auto___9379){
var seq__9320_9380__$1 = temp__4425__auto___9379;
if(cljs.core.chunked_seq_QMARK_(seq__9320_9380__$1)){
var c__4945__auto___9381 = cljs.core.chunk_first(seq__9320_9380__$1);
var G__9382 = cljs.core.chunk_rest(seq__9320_9380__$1);
var G__9383 = c__4945__auto___9381;
var G__9384 = cljs.core.count(c__4945__auto___9381);
var G__9385 = (0);
seq__9320_9370 = G__9382;
chunk__9321_9371 = G__9383;
count__9322_9372 = G__9384;
i__9323_9373 = G__9385;
continue;
} else {
var param_9386 = cljs.core.first(seq__9320_9380__$1);
cljs.compiler.emit(param_9386);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_9386,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__9387 = cljs.core.next(seq__9320_9380__$1);
var G__9388 = null;
var G__9389 = (0);
var G__9390 = (0);
seq__9320_9370 = G__9387;
chunk__9321_9371 = G__9388;
count__9322_9372 = G__9389;
i__9323_9373 = G__9390;
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
var seq__9395 = cljs.core.seq(params);
var chunk__9396 = null;
var count__9397 = (0);
var i__9398 = (0);
while(true){
if((i__9398 < count__9397)){
var param = chunk__9396.cljs$core$IIndexed$_nth$arity$2(null,i__9398);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__9399 = seq__9395;
var G__9400 = chunk__9396;
var G__9401 = count__9397;
var G__9402 = (i__9398 + (1));
seq__9395 = G__9399;
chunk__9396 = G__9400;
count__9397 = G__9401;
i__9398 = G__9402;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9395);
if(temp__4425__auto__){
var seq__9395__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9395__$1)){
var c__4945__auto__ = cljs.core.chunk_first(seq__9395__$1);
var G__9403 = cljs.core.chunk_rest(seq__9395__$1);
var G__9404 = c__4945__auto__;
var G__9405 = cljs.core.count(c__4945__auto__);
var G__9406 = (0);
seq__9395 = G__9403;
chunk__9396 = G__9404;
count__9397 = G__9405;
i__9398 = G__9406;
continue;
} else {
var param = cljs.core.first(seq__9395__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__9407 = cljs.core.next(seq__9395__$1);
var G__9408 = null;
var G__9409 = (0);
var G__9410 = (0);
seq__9395 = G__9407;
chunk__9396 = G__9408;
count__9397 = G__9409;
i__9398 = G__9410;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__9411){
var map__9413 = p__9411;
var map__9413__$1 = ((cljs.core.seq_QMARK_(map__9413))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9413):map__9413);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9413__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9413__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9413__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9413__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9413__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9413__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9413__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9413__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__6228__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6228__auto__))){
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6228__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__9414){
var map__9424 = p__9414;
var map__9424__$1 = ((cljs.core.seq_QMARK_(map__9424))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9424):map__9424);
var f = map__9424__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9424__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9424__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9424__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9424__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9424__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9424__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9424__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9424__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__6228__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6228__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

var name_9433__$1 = (function (){var or__4161__auto__ = name;
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_9434 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_9433__$1);
var delegate_name_9435 = [cljs.core.str(mname_9434),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function() { "], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",delegate_name_9435," = function ("], 0));

var seq__9425_9436 = cljs.core.seq(params);
var chunk__9426_9437 = null;
var count__9427_9438 = (0);
var i__9428_9439 = (0);
while(true){
if((i__9428_9439 < count__9427_9438)){
var param_9440 = chunk__9426_9437.cljs$core$IIndexed$_nth$arity$2(null,i__9428_9439);
cljs.compiler.emit(param_9440);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_9440,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__9441 = seq__9425_9436;
var G__9442 = chunk__9426_9437;
var G__9443 = count__9427_9438;
var G__9444 = (i__9428_9439 + (1));
seq__9425_9436 = G__9441;
chunk__9426_9437 = G__9442;
count__9427_9438 = G__9443;
i__9428_9439 = G__9444;
continue;
} else {
var temp__4425__auto___9445 = cljs.core.seq(seq__9425_9436);
if(temp__4425__auto___9445){
var seq__9425_9446__$1 = temp__4425__auto___9445;
if(cljs.core.chunked_seq_QMARK_(seq__9425_9446__$1)){
var c__4945__auto___9447 = cljs.core.chunk_first(seq__9425_9446__$1);
var G__9448 = cljs.core.chunk_rest(seq__9425_9446__$1);
var G__9449 = c__4945__auto___9447;
var G__9450 = cljs.core.count(c__4945__auto___9447);
var G__9451 = (0);
seq__9425_9436 = G__9448;
chunk__9426_9437 = G__9449;
count__9427_9438 = G__9450;
i__9428_9439 = G__9451;
continue;
} else {
var param_9452 = cljs.core.first(seq__9425_9446__$1);
cljs.compiler.emit(param_9452);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_9452,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__9453 = cljs.core.next(seq__9425_9446__$1);
var G__9454 = null;
var G__9455 = (0);
var G__9456 = (0);
seq__9425_9436 = G__9453;
chunk__9426_9437 = G__9454;
count__9427_9438 = G__9455;
i__9428_9439 = G__9456;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",mname_9434," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",(cljs.core.count(params) - (1)),") {"], 0));

var a_9457 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_9457,",0);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["} "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",delegate_name_9435,".call(this,"], 0));

var seq__9429_9458 = cljs.core.seq(params);
var chunk__9430_9459 = null;
var count__9431_9460 = (0);
var i__9432_9461 = (0);
while(true){
if((i__9432_9461 < count__9431_9460)){
var param_9462 = chunk__9430_9459.cljs$core$IIndexed$_nth$arity$2(null,i__9432_9461);
cljs.compiler.emit(param_9462);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_9462,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__9463 = seq__9429_9458;
var G__9464 = chunk__9430_9459;
var G__9465 = count__9431_9460;
var G__9466 = (i__9432_9461 + (1));
seq__9429_9458 = G__9463;
chunk__9430_9459 = G__9464;
count__9431_9460 = G__9465;
i__9432_9461 = G__9466;
continue;
} else {
var temp__4425__auto___9467 = cljs.core.seq(seq__9429_9458);
if(temp__4425__auto___9467){
var seq__9429_9468__$1 = temp__4425__auto___9467;
if(cljs.core.chunked_seq_QMARK_(seq__9429_9468__$1)){
var c__4945__auto___9469 = cljs.core.chunk_first(seq__9429_9468__$1);
var G__9470 = cljs.core.chunk_rest(seq__9429_9468__$1);
var G__9471 = c__4945__auto___9469;
var G__9472 = cljs.core.count(c__4945__auto___9469);
var G__9473 = (0);
seq__9429_9458 = G__9470;
chunk__9430_9459 = G__9471;
count__9431_9460 = G__9472;
i__9432_9461 = G__9473;
continue;
} else {
var param_9474 = cljs.core.first(seq__9429_9468__$1);
cljs.compiler.emit(param_9474);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_9474,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__9475 = cljs.core.next(seq__9429_9468__$1);
var G__9476 = null;
var G__9477 = (0);
var G__9478 = (0);
seq__9429_9458 = G__9475;
chunk__9430_9459 = G__9476;
count__9431_9460 = G__9477;
i__9432_9461 = G__9478;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_9434,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_9434,".cljs$lang$applyTo = "], 0));

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_9433__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_9434,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_9435,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",mname_9434,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6228__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__9482){
var map__9483 = p__9482;
var map__9483__$1 = ((cljs.core.seq_QMARK_(map__9483))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9483):map__9483);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9483__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9483__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9483__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9483__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9483__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9483__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9483__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.array_seq([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__9483,map__9483__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__9479_SHARP_){
var and__4149__auto__ = p1__9479_SHARP_;
if(cljs.core.truth_(and__4149__auto__)){
var G__9484 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__9479_SHARP_);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__9484) : cljs.core.deref.call(null,G__9484));
} else {
return and__4149__auto__;
}
});})(map__9483,map__9483__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_9504__$1 = (function (){var or__4161__auto__ = name;
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_9505 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_9504__$1);
var maxparams_9506 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_9507 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (name_9504__$1,mname_9505,maxparams_9506,loop_locals,map__9483,map__9483__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(mname_9505),cljs.core.str("__"),cljs.core.str(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_9504__$1,mname_9505,maxparams_9506,loop_locals,map__9483,map__9483__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_9508 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (name_9504__$1,mname_9505,maxparams_9506,mmap_9507,loop_locals,map__9483,map__9483__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__9480_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__9480_SHARP_)));
});})(name_9504__$1,mname_9505,maxparams_9506,mmap_9507,loop_locals,map__9483,map__9483__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq(mmap_9507));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function() {"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",mname_9505," = null;"], 0));

var seq__9485_9509 = cljs.core.seq(ms_9508);
var chunk__9486_9510 = null;
var count__9487_9511 = (0);
var i__9488_9512 = (0);
while(true){
if((i__9488_9512 < count__9487_9511)){
var vec__9489_9513 = chunk__9486_9510.cljs$core$IIndexed$_nth$arity$2(null,i__9488_9512);
var n_9514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9489_9513,(0),null);
var meth_9515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9489_9513,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",n_9514," = "], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_9515))){
cljs.compiler.emit_variadic_fn_method(meth_9515);
} else {
cljs.compiler.emit_fn_method(meth_9515);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

var G__9516 = seq__9485_9509;
var G__9517 = chunk__9486_9510;
var G__9518 = count__9487_9511;
var G__9519 = (i__9488_9512 + (1));
seq__9485_9509 = G__9516;
chunk__9486_9510 = G__9517;
count__9487_9511 = G__9518;
i__9488_9512 = G__9519;
continue;
} else {
var temp__4425__auto___9520 = cljs.core.seq(seq__9485_9509);
if(temp__4425__auto___9520){
var seq__9485_9521__$1 = temp__4425__auto___9520;
if(cljs.core.chunked_seq_QMARK_(seq__9485_9521__$1)){
var c__4945__auto___9522 = cljs.core.chunk_first(seq__9485_9521__$1);
var G__9523 = cljs.core.chunk_rest(seq__9485_9521__$1);
var G__9524 = c__4945__auto___9522;
var G__9525 = cljs.core.count(c__4945__auto___9522);
var G__9526 = (0);
seq__9485_9509 = G__9523;
chunk__9486_9510 = G__9524;
count__9487_9511 = G__9525;
i__9488_9512 = G__9526;
continue;
} else {
var vec__9490_9527 = cljs.core.first(seq__9485_9521__$1);
var n_9528 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9490_9527,(0),null);
var meth_9529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9490_9527,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",n_9528," = "], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_9529))){
cljs.compiler.emit_variadic_fn_method(meth_9529);
} else {
cljs.compiler.emit_fn_method(meth_9529);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

var G__9530 = cljs.core.next(seq__9485_9521__$1);
var G__9531 = null;
var G__9532 = (0);
var G__9533 = (0);
seq__9485_9509 = G__9530;
chunk__9486_9510 = G__9531;
count__9487_9511 = G__9532;
i__9488_9512 = G__9533;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_9505," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_9506),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_9506)),"){"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(maxparams_9506));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = var_args;"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["switch(arguments.length){"], 0));

var seq__9491_9534 = cljs.core.seq(ms_9508);
var chunk__9492_9535 = null;
var count__9493_9536 = (0);
var i__9494_9537 = (0);
while(true){
if((i__9494_9537 < count__9493_9536)){
var vec__9495_9538 = chunk__9492_9535.cljs$core$IIndexed$_nth$arity$2(null,i__9494_9537);
var n_9539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9495_9538,(0),null);
var meth_9540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9495_9538,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_9540))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["default:"], 0));

var restarg_9541 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",restarg_9541," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_9542 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([restarg_9541," = new cljs.core.IndexedSeq(",a_9542,",0);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_9539,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_9506)),(((cljs.core.count(maxparams_9506) > (1)))?", ":null),restarg_9541,");"], 0));
} else {
var pcnt_9543 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_9540));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",pcnt_9543,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_9539,".call(this",(((pcnt_9543 === (0)))?null:cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_9543,maxparams_9506))),",")),");"], 0));
}

var G__9544 = seq__9491_9534;
var G__9545 = chunk__9492_9535;
var G__9546 = count__9493_9536;
var G__9547 = (i__9494_9537 + (1));
seq__9491_9534 = G__9544;
chunk__9492_9535 = G__9545;
count__9493_9536 = G__9546;
i__9494_9537 = G__9547;
continue;
} else {
var temp__4425__auto___9548 = cljs.core.seq(seq__9491_9534);
if(temp__4425__auto___9548){
var seq__9491_9549__$1 = temp__4425__auto___9548;
if(cljs.core.chunked_seq_QMARK_(seq__9491_9549__$1)){
var c__4945__auto___9550 = cljs.core.chunk_first(seq__9491_9549__$1);
var G__9551 = cljs.core.chunk_rest(seq__9491_9549__$1);
var G__9552 = c__4945__auto___9550;
var G__9553 = cljs.core.count(c__4945__auto___9550);
var G__9554 = (0);
seq__9491_9534 = G__9551;
chunk__9492_9535 = G__9552;
count__9493_9536 = G__9553;
i__9494_9537 = G__9554;
continue;
} else {
var vec__9496_9555 = cljs.core.first(seq__9491_9549__$1);
var n_9556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9496_9555,(0),null);
var meth_9557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9496_9555,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_9557))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["default:"], 0));

var restarg_9558 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",restarg_9558," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_9559 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([restarg_9558," = new cljs.core.IndexedSeq(",a_9559,",0);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_9556,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_9506)),(((cljs.core.count(maxparams_9506) > (1)))?", ":null),restarg_9558,");"], 0));
} else {
var pcnt_9560 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_9557));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",pcnt_9560,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_9556,".call(this",(((pcnt_9560 === (0)))?null:cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_9560,maxparams_9506))),",")),");"], 0));
}

var G__9561 = cljs.core.next(seq__9491_9549__$1);
var G__9562 = null;
var G__9563 = (0);
var G__9564 = (0);
seq__9491_9534 = G__9561;
chunk__9492_9535 = G__9562;
count__9493_9536 = G__9563;
i__9494_9537 = G__9564;
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
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_9505,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_9505,".cljs$lang$applyTo = ",cljs.core.some(((function (name_9504__$1,mname_9505,maxparams_9506,mmap_9507,ms_9508,loop_locals,map__9483,map__9483__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__9481_SHARP_){
var vec__9497 = p1__9481_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9497,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9497,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_9504__$1,mname_9505,maxparams_9506,mmap_9507,ms_9508,loop_locals,map__9483,map__9483__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_9508),".cljs$lang$applyTo;"], 0));
} else {
}

var seq__9498_9565 = cljs.core.seq(ms_9508);
var chunk__9499_9566 = null;
var count__9500_9567 = (0);
var i__9501_9568 = (0);
while(true){
if((i__9501_9568 < count__9500_9567)){
var vec__9502_9569 = chunk__9499_9566.cljs$core$IIndexed$_nth$arity$2(null,i__9501_9568);
var n_9570 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9502_9569,(0),null);
var meth_9571 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9502_9569,(1),null);
var c_9572 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_9571));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_9571))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_9505,".cljs$core$IFn$_invoke$arity$variadic = ",n_9570,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_9505,".cljs$core$IFn$_invoke$arity$",c_9572," = ",n_9570,";"], 0));
}

var G__9573 = seq__9498_9565;
var G__9574 = chunk__9499_9566;
var G__9575 = count__9500_9567;
var G__9576 = (i__9501_9568 + (1));
seq__9498_9565 = G__9573;
chunk__9499_9566 = G__9574;
count__9500_9567 = G__9575;
i__9501_9568 = G__9576;
continue;
} else {
var temp__4425__auto___9577 = cljs.core.seq(seq__9498_9565);
if(temp__4425__auto___9577){
var seq__9498_9578__$1 = temp__4425__auto___9577;
if(cljs.core.chunked_seq_QMARK_(seq__9498_9578__$1)){
var c__4945__auto___9579 = cljs.core.chunk_first(seq__9498_9578__$1);
var G__9580 = cljs.core.chunk_rest(seq__9498_9578__$1);
var G__9581 = c__4945__auto___9579;
var G__9582 = cljs.core.count(c__4945__auto___9579);
var G__9583 = (0);
seq__9498_9565 = G__9580;
chunk__9499_9566 = G__9581;
count__9500_9567 = G__9582;
i__9501_9568 = G__9583;
continue;
} else {
var vec__9503_9584 = cljs.core.first(seq__9498_9578__$1);
var n_9585 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9503_9584,(0),null);
var meth_9586 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9503_9584,(1),null);
var c_9587 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_9586));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_9586))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_9505,".cljs$core$IFn$_invoke$arity$variadic = ",n_9585,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_9505,".cljs$core$IFn$_invoke$arity$",c_9587," = ",n_9585,";"], 0));
}

var G__9588 = cljs.core.next(seq__9498_9578__$1);
var G__9589 = null;
var G__9590 = (0);
var G__9591 = (0);
seq__9498_9565 = G__9588;
chunk__9499_9566 = G__9589;
count__9500_9567 = G__9590;
i__9501_9568 = G__9591;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",mname_9505,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";})(",cljs.compiler.comma_sep(loop_locals),"))"], 0));
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__9592){
var map__9593 = p__9592;
var map__9593__$1 = ((cljs.core.seq_QMARK_(map__9593))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9593):map__9593);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9593__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9593__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9593__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__4149__auto__ = statements;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__4149__auto__;
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var seq__9594_9598 = cljs.core.seq(statements);
var chunk__9595_9599 = null;
var count__9596_9600 = (0);
var i__9597_9601 = (0);
while(true){
if((i__9597_9601 < count__9596_9600)){
var s_9602 = chunk__9595_9599.cljs$core$IIndexed$_nth$arity$2(null,i__9597_9601);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_9602], 0));

var G__9603 = seq__9594_9598;
var G__9604 = chunk__9595_9599;
var G__9605 = count__9596_9600;
var G__9606 = (i__9597_9601 + (1));
seq__9594_9598 = G__9603;
chunk__9595_9599 = G__9604;
count__9596_9600 = G__9605;
i__9597_9601 = G__9606;
continue;
} else {
var temp__4425__auto___9607 = cljs.core.seq(seq__9594_9598);
if(temp__4425__auto___9607){
var seq__9594_9608__$1 = temp__4425__auto___9607;
if(cljs.core.chunked_seq_QMARK_(seq__9594_9608__$1)){
var c__4945__auto___9609 = cljs.core.chunk_first(seq__9594_9608__$1);
var G__9610 = cljs.core.chunk_rest(seq__9594_9608__$1);
var G__9611 = c__4945__auto___9609;
var G__9612 = cljs.core.count(c__4945__auto___9609);
var G__9613 = (0);
seq__9594_9598 = G__9610;
chunk__9595_9599 = G__9611;
count__9596_9600 = G__9612;
i__9597_9601 = G__9613;
continue;
} else {
var s_9614 = cljs.core.first(seq__9594_9608__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_9614], 0));

var G__9615 = cljs.core.next(seq__9594_9608__$1);
var G__9616 = null;
var G__9617 = (0);
var G__9618 = (0);
seq__9594_9598 = G__9615;
chunk__9595_9599 = G__9616;
count__9596_9600 = G__9617;
i__9597_9601 = G__9618;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(cljs.core.truth_((function (){var and__4149__auto__ = statements;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__4149__auto__;
}
})())){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__9619){
var map__9620 = p__9619;
var map__9620__$1 = ((cljs.core.seq_QMARK_(map__9620))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9620):map__9620);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9620__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9620__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9620__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9620__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9620__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4161__auto__ = name;
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__9622,is_loop){
var map__9631 = p__9622;
var map__9631__$1 = ((cljs.core.seq_QMARK_(map__9631))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9631):map__9631);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9631__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9631__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9631__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var _STAR_lexical_renames_STAR_9632_9639 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_lexical_renames_STAR_9632_9639,context,map__9631,map__9631__$1,bindings,expr,env){
return (function (p1__9621_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.hash(p1__9621_SHARP_),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__9621_SHARP_)),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_9632_9639,context,map__9631,map__9631__$1,bindings,expr,env))
,bindings):null));

try{var seq__9633_9640 = cljs.core.seq(bindings);
var chunk__9634_9641 = null;
var count__9635_9642 = (0);
var i__9636_9643 = (0);
while(true){
if((i__9636_9643 < count__9635_9642)){
var map__9637_9644 = chunk__9634_9641.cljs$core$IIndexed$_nth$arity$2(null,i__9636_9643);
var map__9637_9645__$1 = ((cljs.core.seq_QMARK_(map__9637_9644))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9637_9644):map__9637_9644);
var binding_9646 = map__9637_9645__$1;
var init_9647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9637_9645__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(binding_9646);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = ",init_9647,";"], 0));

var G__9648 = seq__9633_9640;
var G__9649 = chunk__9634_9641;
var G__9650 = count__9635_9642;
var G__9651 = (i__9636_9643 + (1));
seq__9633_9640 = G__9648;
chunk__9634_9641 = G__9649;
count__9635_9642 = G__9650;
i__9636_9643 = G__9651;
continue;
} else {
var temp__4425__auto___9652 = cljs.core.seq(seq__9633_9640);
if(temp__4425__auto___9652){
var seq__9633_9653__$1 = temp__4425__auto___9652;
if(cljs.core.chunked_seq_QMARK_(seq__9633_9653__$1)){
var c__4945__auto___9654 = cljs.core.chunk_first(seq__9633_9653__$1);
var G__9655 = cljs.core.chunk_rest(seq__9633_9653__$1);
var G__9656 = c__4945__auto___9654;
var G__9657 = cljs.core.count(c__4945__auto___9654);
var G__9658 = (0);
seq__9633_9640 = G__9655;
chunk__9634_9641 = G__9656;
count__9635_9642 = G__9657;
i__9636_9643 = G__9658;
continue;
} else {
var map__9638_9659 = cljs.core.first(seq__9633_9653__$1);
var map__9638_9660__$1 = ((cljs.core.seq_QMARK_(map__9638_9659))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9638_9659):map__9638_9659);
var binding_9661 = map__9638_9660__$1;
var init_9662 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9638_9660__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(binding_9661);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = ",init_9662,";"], 0));

var G__9663 = cljs.core.next(seq__9633_9653__$1);
var G__9664 = null;
var G__9665 = (0);
var G__9666 = (0);
seq__9633_9640 = G__9663;
chunk__9634_9641 = G__9664;
count__9635_9642 = G__9665;
i__9636_9643 = G__9666;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_9632_9639;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__9667){
var map__9668 = p__9667;
var map__9668__$1 = ((cljs.core.seq_QMARK_(map__9668))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9668):map__9668);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9668__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9668__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9668__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__5045__auto___9669 = cljs.core.count(exprs);
var i_9670 = (0);
while(true){
if((i_9670 < n__5045__auto___9669)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_9670) : temps.call(null,i_9670))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_9670) : exprs.call(null,i_9670)),";"], 0));

var G__9671 = (i_9670 + (1));
i_9670 = G__9671;
continue;
} else {
}
break;
}

var n__5045__auto___9672 = cljs.core.count(exprs);
var i_9673 = (0);
while(true){
if((i_9673 < n__5045__auto___9672)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_9673) : params.call(null,i_9673)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_9673) : temps.call(null,i_9673)),";"], 0));

var G__9674 = (i_9673 + (1));
i_9673 = G__9674;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["continue;"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__9675){
var map__9676 = p__9675;
var map__9676__$1 = ((cljs.core.seq_QMARK_(map__9676))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9676):map__9676);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9676__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9676__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9676__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var seq__9677_9683 = cljs.core.seq(bindings);
var chunk__9678_9684 = null;
var count__9679_9685 = (0);
var i__9680_9686 = (0);
while(true){
if((i__9680_9686 < count__9679_9685)){
var map__9681_9687 = chunk__9678_9684.cljs$core$IIndexed$_nth$arity$2(null,i__9680_9686);
var map__9681_9688__$1 = ((cljs.core.seq_QMARK_(map__9681_9687))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9681_9687):map__9681_9687);
var binding_9689 = map__9681_9688__$1;
var init_9690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9681_9688__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_9689)," = ",init_9690,";"], 0));

var G__9691 = seq__9677_9683;
var G__9692 = chunk__9678_9684;
var G__9693 = count__9679_9685;
var G__9694 = (i__9680_9686 + (1));
seq__9677_9683 = G__9691;
chunk__9678_9684 = G__9692;
count__9679_9685 = G__9693;
i__9680_9686 = G__9694;
continue;
} else {
var temp__4425__auto___9695 = cljs.core.seq(seq__9677_9683);
if(temp__4425__auto___9695){
var seq__9677_9696__$1 = temp__4425__auto___9695;
if(cljs.core.chunked_seq_QMARK_(seq__9677_9696__$1)){
var c__4945__auto___9697 = cljs.core.chunk_first(seq__9677_9696__$1);
var G__9698 = cljs.core.chunk_rest(seq__9677_9696__$1);
var G__9699 = c__4945__auto___9697;
var G__9700 = cljs.core.count(c__4945__auto___9697);
var G__9701 = (0);
seq__9677_9683 = G__9698;
chunk__9678_9684 = G__9699;
count__9679_9685 = G__9700;
i__9680_9686 = G__9701;
continue;
} else {
var map__9682_9702 = cljs.core.first(seq__9677_9696__$1);
var map__9682_9703__$1 = ((cljs.core.seq_QMARK_(map__9682_9702))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9682_9702):map__9682_9702);
var binding_9704 = map__9682_9703__$1;
var init_9705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9682_9703__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_9704)," = ",init_9705,";"], 0));

var G__9706 = cljs.core.next(seq__9677_9696__$1);
var G__9707 = null;
var G__9708 = (0);
var G__9709 = (0);
seq__9677_9683 = G__9706;
chunk__9678_9684 = G__9707;
count__9679_9685 = G__9708;
i__9680_9686 = G__9709;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__9712){
var map__9713 = p__9712;
var map__9713__$1 = ((cljs.core.seq_QMARK_(map__9713))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9713):map__9713);
var expr = map__9713__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9713__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9713__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9713__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4149__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4149__auto__)){
var and__4149__auto____$1 = cljs.core.not(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__4149__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4149__auto__ = protocol;
if(cljs.core.truth_(and__4149__auto__)){
var and__4149__auto____$1 = tag;
if(cljs.core.truth_(and__4149__auto____$1)){
var or__4161__auto__ = (function (){var and__4149__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4149__auto____$2)){
var and__4149__auto____$3 = protocol;
if(cljs.core.truth_(and__4149__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__4149__auto____$3;
}
} else {
return and__4149__auto____$2;
}
})();
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
var and__4149__auto____$2 = (function (){var or__4161__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__4161__auto____$1)){
return or__4161__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4149__auto____$2)){
var or__4161__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__4161__auto____$1){
return or__4161__auto____$1;
} else {
var and__4149__auto____$3 = !(cljs.core.set_QMARK_(tag));
if(and__4149__auto____$3){
var and__4149__auto____$4 = cljs.core.not(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null], null), null).call(null,tag));
if(and__4149__auto____$4){
var temp__4425__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),tag));
if(cljs.core.truth_(temp__4425__auto__)){
var ps = temp__4425__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return and__4149__auto____$4;
}
} else {
return and__4149__auto____$3;
}
}
} else {
return and__4149__auto____$2;
}
}
} else {
return and__4149__auto____$1;
}
} else {
return and__4149__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4161__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4161__auto__){
return or__4161__auto__;
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
var vec__9714 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4149__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4149__auto__)){
return (arity > mfa);
} else {
return and__4149__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__9713,map__9713__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__9713,map__9713__$1,expr,f,args,env){
return (function (p1__9710_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__9710_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__9713,map__9713__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__9713,map__9713__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__9713,map__9713__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__9713,map__9713__$1,expr,f,args,env){
return (function (p1__9711_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__9711_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__9713,map__9713__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__9713,map__9713__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9714,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9714,(1),null);
var env__6228__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6228__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["!(",cljs.core.first(args),")"], 0));
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_9715 = [cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(args),".",pimpl_9715,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_9716 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_9716,args)),(((mfa_9716 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_9716,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__4161__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
var or__4161__auto____$1 = js_QMARK_;
if(or__4161__auto____$1){
return or__4161__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(cljs.core.truth_((function (){var and__4149__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4149__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__4149__auto__;
}
})())){
var fprop_9717 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(",f__$1,fprop_9717," ? ",f__$1,fprop_9717,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")"], 0));
}

}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6228__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__9718){
var map__9719 = p__9718;
var map__9719__$1 = ((cljs.core.seq_QMARK_(map__9719))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9719):map__9719);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9719__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9719__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9719__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6228__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6228__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(new ",ctor,"(",cljs.compiler.comma_sep(args),"))"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6228__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__9720){
var map__9721 = p__9720;
var map__9721__$1 = ((cljs.core.seq_QMARK_(map__9721))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9721):map__9721);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9721__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9721__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9721__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6228__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6228__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target," = ",val], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6228__auto__))){
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

var seq__9726_9730 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.vals(libs))));
var chunk__9727_9731 = null;
var count__9728_9732 = (0);
var i__9729_9733 = (0);
while(true){
if((i__9729_9733 < count__9728_9732)){
var lib_9734 = chunk__9727_9731.cljs$core$IIndexed$_nth$arity$2(null,i__9729_9733);
if(cljs.core.truth_((function (){var or__4161__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_9734),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_9734),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__4161__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_9734),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_9734),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_9734),"');"], 0));

}
}

var G__9735 = seq__9726_9730;
var G__9736 = chunk__9727_9731;
var G__9737 = count__9728_9732;
var G__9738 = (i__9729_9733 + (1));
seq__9726_9730 = G__9735;
chunk__9727_9731 = G__9736;
count__9728_9732 = G__9737;
i__9729_9733 = G__9738;
continue;
} else {
var temp__4425__auto___9739 = cljs.core.seq(seq__9726_9730);
if(temp__4425__auto___9739){
var seq__9726_9740__$1 = temp__4425__auto___9739;
if(cljs.core.chunked_seq_QMARK_(seq__9726_9740__$1)){
var c__4945__auto___9741 = cljs.core.chunk_first(seq__9726_9740__$1);
var G__9742 = cljs.core.chunk_rest(seq__9726_9740__$1);
var G__9743 = c__4945__auto___9741;
var G__9744 = cljs.core.count(c__4945__auto___9741);
var G__9745 = (0);
seq__9726_9730 = G__9742;
chunk__9727_9731 = G__9743;
count__9728_9732 = G__9744;
i__9729_9733 = G__9745;
continue;
} else {
var lib_9746 = cljs.core.first(seq__9726_9740__$1);
if(cljs.core.truth_((function (){var or__4161__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_9746),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_9746),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__4161__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_9746),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_9746),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_9746),"');"], 0));

}
}

var G__9747 = cljs.core.next(seq__9726_9740__$1);
var G__9748 = null;
var G__9749 = (0);
var G__9750 = (0);
seq__9726_9730 = G__9747;
chunk__9727_9731 = G__9748;
count__9728_9732 = G__9749;
i__9729_9733 = G__9750;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__9751){
var map__9752 = p__9751;
var map__9752__$1 = ((cljs.core.seq_QMARK_(map__9752))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9752):map__9752);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9752__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9752__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9752__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9752__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9752__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9752__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('cljs.core');"], 0));
}

cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__9753){
var map__9754 = p__9753;
var map__9754__$1 = ((cljs.core.seq_QMARK_(map__9754))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9754):map__9754);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9754__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9754__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9754__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9754__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @constructor"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__9755_9765 = cljs.core.seq(fields__$1);
var chunk__9756_9766 = null;
var count__9757_9767 = (0);
var i__9758_9768 = (0);
while(true){
if((i__9758_9768 < count__9757_9767)){
var fld_9769 = chunk__9756_9766.cljs$core$IIndexed$_nth$arity$2(null,i__9758_9768);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_9769," = ",fld_9769,";"], 0));

var G__9770 = seq__9755_9765;
var G__9771 = chunk__9756_9766;
var G__9772 = count__9757_9767;
var G__9773 = (i__9758_9768 + (1));
seq__9755_9765 = G__9770;
chunk__9756_9766 = G__9771;
count__9757_9767 = G__9772;
i__9758_9768 = G__9773;
continue;
} else {
var temp__4425__auto___9774 = cljs.core.seq(seq__9755_9765);
if(temp__4425__auto___9774){
var seq__9755_9775__$1 = temp__4425__auto___9774;
if(cljs.core.chunked_seq_QMARK_(seq__9755_9775__$1)){
var c__4945__auto___9776 = cljs.core.chunk_first(seq__9755_9775__$1);
var G__9777 = cljs.core.chunk_rest(seq__9755_9775__$1);
var G__9778 = c__4945__auto___9776;
var G__9779 = cljs.core.count(c__4945__auto___9776);
var G__9780 = (0);
seq__9755_9765 = G__9777;
chunk__9756_9766 = G__9778;
count__9757_9767 = G__9779;
i__9758_9768 = G__9780;
continue;
} else {
var fld_9781 = cljs.core.first(seq__9755_9775__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_9781," = ",fld_9781,";"], 0));

var G__9782 = cljs.core.next(seq__9755_9775__$1);
var G__9783 = null;
var G__9784 = (0);
var G__9785 = (0);
seq__9755_9765 = G__9782;
chunk__9756_9766 = G__9783;
count__9757_9767 = G__9784;
i__9758_9768 = G__9785;
continue;
}
} else {
}
}
break;
}

var seq__9759_9786 = cljs.core.seq(pmasks);
var chunk__9760_9787 = null;
var count__9761_9788 = (0);
var i__9762_9789 = (0);
while(true){
if((i__9762_9789 < count__9761_9788)){
var vec__9763_9790 = chunk__9760_9787.cljs$core$IIndexed$_nth$arity$2(null,i__9762_9789);
var pno_9791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9763_9790,(0),null);
var pmask_9792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9763_9790,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_9791,"$ = ",pmask_9792,";"], 0));

var G__9793 = seq__9759_9786;
var G__9794 = chunk__9760_9787;
var G__9795 = count__9761_9788;
var G__9796 = (i__9762_9789 + (1));
seq__9759_9786 = G__9793;
chunk__9760_9787 = G__9794;
count__9761_9788 = G__9795;
i__9762_9789 = G__9796;
continue;
} else {
var temp__4425__auto___9797 = cljs.core.seq(seq__9759_9786);
if(temp__4425__auto___9797){
var seq__9759_9798__$1 = temp__4425__auto___9797;
if(cljs.core.chunked_seq_QMARK_(seq__9759_9798__$1)){
var c__4945__auto___9799 = cljs.core.chunk_first(seq__9759_9798__$1);
var G__9800 = cljs.core.chunk_rest(seq__9759_9798__$1);
var G__9801 = c__4945__auto___9799;
var G__9802 = cljs.core.count(c__4945__auto___9799);
var G__9803 = (0);
seq__9759_9786 = G__9800;
chunk__9760_9787 = G__9801;
count__9761_9788 = G__9802;
i__9762_9789 = G__9803;
continue;
} else {
var vec__9764_9804 = cljs.core.first(seq__9759_9798__$1);
var pno_9805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9764_9804,(0),null);
var pmask_9806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9764_9804,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_9805,"$ = ",pmask_9806,";"], 0));

var G__9807 = cljs.core.next(seq__9759_9798__$1);
var G__9808 = null;
var G__9809 = (0);
var G__9810 = (0);
seq__9759_9786 = G__9807;
chunk__9760_9787 = G__9808;
count__9761_9788 = G__9809;
i__9762_9789 = G__9810;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__9811){
var map__9812 = p__9811;
var map__9812__$1 = ((cljs.core.seq_QMARK_(map__9812))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9812):map__9812);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9812__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9812__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9812__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9812__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @constructor"], 0));

var seq__9813_9827 = cljs.core.seq(fields__$1);
var chunk__9814_9828 = null;
var count__9815_9829 = (0);
var i__9816_9830 = (0);
while(true){
if((i__9816_9830 < count__9815_9829)){
var fld_9831 = chunk__9814_9828.cljs$core$IIndexed$_nth$arity$2(null,i__9816_9830);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @param {*} ",fld_9831], 0));

var G__9832 = seq__9813_9827;
var G__9833 = chunk__9814_9828;
var G__9834 = count__9815_9829;
var G__9835 = (i__9816_9830 + (1));
seq__9813_9827 = G__9832;
chunk__9814_9828 = G__9833;
count__9815_9829 = G__9834;
i__9816_9830 = G__9835;
continue;
} else {
var temp__4425__auto___9836 = cljs.core.seq(seq__9813_9827);
if(temp__4425__auto___9836){
var seq__9813_9837__$1 = temp__4425__auto___9836;
if(cljs.core.chunked_seq_QMARK_(seq__9813_9837__$1)){
var c__4945__auto___9838 = cljs.core.chunk_first(seq__9813_9837__$1);
var G__9839 = cljs.core.chunk_rest(seq__9813_9837__$1);
var G__9840 = c__4945__auto___9838;
var G__9841 = cljs.core.count(c__4945__auto___9838);
var G__9842 = (0);
seq__9813_9827 = G__9839;
chunk__9814_9828 = G__9840;
count__9815_9829 = G__9841;
i__9816_9830 = G__9842;
continue;
} else {
var fld_9843 = cljs.core.first(seq__9813_9837__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @param {*} ",fld_9843], 0));

var G__9844 = cljs.core.next(seq__9813_9837__$1);
var G__9845 = null;
var G__9846 = (0);
var G__9847 = (0);
seq__9813_9827 = G__9844;
chunk__9814_9828 = G__9845;
count__9815_9829 = G__9846;
i__9816_9830 = G__9847;
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

var seq__9817_9848 = cljs.core.seq(fields__$1);
var chunk__9818_9849 = null;
var count__9819_9850 = (0);
var i__9820_9851 = (0);
while(true){
if((i__9820_9851 < count__9819_9850)){
var fld_9852 = chunk__9818_9849.cljs$core$IIndexed$_nth$arity$2(null,i__9820_9851);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_9852," = ",fld_9852,";"], 0));

var G__9853 = seq__9817_9848;
var G__9854 = chunk__9818_9849;
var G__9855 = count__9819_9850;
var G__9856 = (i__9820_9851 + (1));
seq__9817_9848 = G__9853;
chunk__9818_9849 = G__9854;
count__9819_9850 = G__9855;
i__9820_9851 = G__9856;
continue;
} else {
var temp__4425__auto___9857 = cljs.core.seq(seq__9817_9848);
if(temp__4425__auto___9857){
var seq__9817_9858__$1 = temp__4425__auto___9857;
if(cljs.core.chunked_seq_QMARK_(seq__9817_9858__$1)){
var c__4945__auto___9859 = cljs.core.chunk_first(seq__9817_9858__$1);
var G__9860 = cljs.core.chunk_rest(seq__9817_9858__$1);
var G__9861 = c__4945__auto___9859;
var G__9862 = cljs.core.count(c__4945__auto___9859);
var G__9863 = (0);
seq__9817_9848 = G__9860;
chunk__9818_9849 = G__9861;
count__9819_9850 = G__9862;
i__9820_9851 = G__9863;
continue;
} else {
var fld_9864 = cljs.core.first(seq__9817_9858__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_9864," = ",fld_9864,";"], 0));

var G__9865 = cljs.core.next(seq__9817_9858__$1);
var G__9866 = null;
var G__9867 = (0);
var G__9868 = (0);
seq__9817_9848 = G__9865;
chunk__9818_9849 = G__9866;
count__9819_9850 = G__9867;
i__9820_9851 = G__9868;
continue;
}
} else {
}
}
break;
}

var seq__9821_9869 = cljs.core.seq(pmasks);
var chunk__9822_9870 = null;
var count__9823_9871 = (0);
var i__9824_9872 = (0);
while(true){
if((i__9824_9872 < count__9823_9871)){
var vec__9825_9873 = chunk__9822_9870.cljs$core$IIndexed$_nth$arity$2(null,i__9824_9872);
var pno_9874 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9825_9873,(0),null);
var pmask_9875 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9825_9873,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_9874,"$ = ",pmask_9875,";"], 0));

var G__9876 = seq__9821_9869;
var G__9877 = chunk__9822_9870;
var G__9878 = count__9823_9871;
var G__9879 = (i__9824_9872 + (1));
seq__9821_9869 = G__9876;
chunk__9822_9870 = G__9877;
count__9823_9871 = G__9878;
i__9824_9872 = G__9879;
continue;
} else {
var temp__4425__auto___9880 = cljs.core.seq(seq__9821_9869);
if(temp__4425__auto___9880){
var seq__9821_9881__$1 = temp__4425__auto___9880;
if(cljs.core.chunked_seq_QMARK_(seq__9821_9881__$1)){
var c__4945__auto___9882 = cljs.core.chunk_first(seq__9821_9881__$1);
var G__9883 = cljs.core.chunk_rest(seq__9821_9881__$1);
var G__9884 = c__4945__auto___9882;
var G__9885 = cljs.core.count(c__4945__auto___9882);
var G__9886 = (0);
seq__9821_9869 = G__9883;
chunk__9822_9870 = G__9884;
count__9823_9871 = G__9885;
i__9824_9872 = G__9886;
continue;
} else {
var vec__9826_9887 = cljs.core.first(seq__9821_9881__$1);
var pno_9888 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9826_9887,(0),null);
var pmask_9889 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9826_9887,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_9888,"$ = ",pmask_9889,";"], 0));

var G__9890 = cljs.core.next(seq__9821_9881__$1);
var G__9891 = null;
var G__9892 = (0);
var G__9893 = (0);
seq__9821_9869 = G__9890;
chunk__9822_9870 = G__9891;
count__9823_9871 = G__9892;
i__9824_9872 = G__9893;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__9894){
var map__9895 = p__9894;
var map__9895__$1 = ((cljs.core.seq_QMARK_(map__9895))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9895):map__9895);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9895__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9895__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9895__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9895__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9895__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6228__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6228__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY)], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6228__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__9896){
var map__9897 = p__9896;
var map__9897__$1 = ((cljs.core.seq_QMARK_(map__9897))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9897):map__9897);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9897__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9897__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9897__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9897__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env__6228__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6228__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([code], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)))], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6228__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys(opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
var seq__9906 = cljs.core.seq(table);
var chunk__9907 = null;
var count__9908 = (0);
var i__9909 = (0);
while(true){
if((i__9909 < count__9908)){
var vec__9910 = chunk__9907.cljs$core$IIndexed$_nth$arity$2(null,i__9909);
var keyword = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9910,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9910,(1),null);
var ns_9912 = cljs.core.namespace(keyword);
var name_9913 = cljs.core.name(keyword);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value," = "], 0));

cljs.compiler.emits_keyword(keyword);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";\n"], 0));

var G__9914 = seq__9906;
var G__9915 = chunk__9907;
var G__9916 = count__9908;
var G__9917 = (i__9909 + (1));
seq__9906 = G__9914;
chunk__9907 = G__9915;
count__9908 = G__9916;
i__9909 = G__9917;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9906);
if(temp__4425__auto__){
var seq__9906__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9906__$1)){
var c__4945__auto__ = cljs.core.chunk_first(seq__9906__$1);
var G__9918 = cljs.core.chunk_rest(seq__9906__$1);
var G__9919 = c__4945__auto__;
var G__9920 = cljs.core.count(c__4945__auto__);
var G__9921 = (0);
seq__9906 = G__9918;
chunk__9907 = G__9919;
count__9908 = G__9920;
i__9909 = G__9921;
continue;
} else {
var vec__9911 = cljs.core.first(seq__9906__$1);
var keyword = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9911,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9911,(1),null);
var ns_9922 = cljs.core.namespace(keyword);
var name_9923 = cljs.core.name(keyword);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value," = "], 0));

cljs.compiler.emits_keyword(keyword);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";\n"], 0));

var G__9924 = cljs.core.next(seq__9906__$1);
var G__9925 = null;
var G__9926 = (0);
var G__9927 = (0);
seq__9906 = G__9924;
chunk__9907 = G__9925;
count__9908 = G__9926;
i__9909 = G__9927;
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