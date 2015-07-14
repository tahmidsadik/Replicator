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
var map__8633 = s;
var map__8633__$1 = ((cljs.core.seq_QMARK_(map__8633))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8633):map__8633);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8633__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8633__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__8635 = info;
var map__8636 = G__8635;
var map__8636__$1 = ((cljs.core.seq_QMARK_(map__8636))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8636):map__8636);
var shadow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8636__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__8635__$1 = G__8635;
while(true){
var d__$2 = d__$1;
var map__8637 = G__8635__$1;
var map__8637__$1 = ((cljs.core.seq_QMARK_(map__8637))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8637):map__8637);
var shadow__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8637__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__8638 = (d__$2 + (1));
var G__8639 = shadow__$1;
d__$1 = G__8638;
G__8635__$1 = G__8639;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__8640){
var map__8644 = p__8640;
var map__8644__$1 = ((cljs.core.seq_QMARK_(map__8644))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8644):map__8644);
var name_var = map__8644__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8644__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8644__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace([cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__8645 = info;
var map__8645__$1 = ((cljs.core.seq_QMARK_(map__8645))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8645):map__8645);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8645__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8645__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
var scoped_name = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("_$_",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.str,new cljs.core.Keyword(null,"name","name",1843675177)),fn_scope),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name__$1], null))));
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((function (){var G__8646 = [cljs.core.str(clojure.string.replace([cljs.core.str(ns)].join(''),".","$")),cljs.core.str("$"),cljs.core.str(scoped_name)].join('');
return (cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__8646) : cljs.compiler.munge.call(null,G__8646));
})());
});
cljs.compiler.munge = (function cljs$compiler$munge(){
var args8648 = [];
var len__5112__auto___8653 = arguments.length;
var i__5113__auto___8654 = (0);
while(true){
if((i__5113__auto___8654 < len__5112__auto___8653)){
args8648.push((arguments[i__5113__auto___8654]));

var G__8655 = (i__5113__auto___8654 + (1));
i__5113__auto___8654 = G__8655;
continue;
} else {
}
break;
}

var G__8650 = args8648.length;
switch (G__8650) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8648.length)].join('')));

}
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(s,cljs.compiler.js_reserved);
});

cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2 = (function (s,reserved){
if(cljs.core.map_QMARK_(s)){
var map__8651 = s;
var map__8651__$1 = ((cljs.core.seq_QMARK_(map__8651))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8651):map__8651);
var name_var = map__8651__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8651__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8651__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8651__$1,new cljs.core.Keyword(null,"info","info",-317069002));
if(cljs.core.truth_(new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531).cljs$core$IFn$_invoke$arity$1(info))){
return cljs.compiler.fn_self_name(s);
} else {
var depth = cljs.compiler.shadow_depth(s);
var renamed = (function (){var G__8652 = cljs.core.hash(s);
return (cljs.compiler._STAR_lexical_renames_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler._STAR_lexical_renames_STAR_.cljs$core$IFn$_invoke$arity$1(G__8652) : cljs.compiler._STAR_lexical_renames_STAR_.call(null,G__8652));
})();
var munged_name = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(field)?[cljs.core.str("self__."),cljs.core.str(name)].join(''):(cljs.core.truth_(renamed)?renamed:name
)),reserved);
if(cljs.core.truth_((function (){var or__4073__auto__ = field;
if(cljs.core.truth_(or__4073__auto__)){
return or__4073__auto__;
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
return (function (p1__8647_SHARP_){
if(cljs.core.truth_((reserved.cljs$core$IFn$_invoke$arity$1 ? reserved.cljs$core$IFn$_invoke$arity$1(p1__8647_SHARP_) : reserved.call(null,p1__8647_SHARP_)))){
return [cljs.core.str(p1__8647_SHARP_),cljs.core.str("$")].join('');
} else {
return p1__8647_SHARP_;
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
var G__8658 = cp;
switch (G__8658) {
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
var seq__8664_8668 = cljs.core.seq(s);
var chunk__8665_8669 = null;
var count__8666_8670 = (0);
var i__8667_8671 = (0);
while(true){
if((i__8667_8671 < count__8666_8670)){
var c_8672 = chunk__8665_8669.cljs$core$IIndexed$_nth$arity$2(null,i__8667_8671);
sb.append(cljs.compiler.escape_char(c_8672));

var G__8673 = seq__8664_8668;
var G__8674 = chunk__8665_8669;
var G__8675 = count__8666_8670;
var G__8676 = (i__8667_8671 + (1));
seq__8664_8668 = G__8673;
chunk__8665_8669 = G__8674;
count__8666_8670 = G__8675;
i__8667_8671 = G__8676;
continue;
} else {
var temp__4425__auto___8677 = cljs.core.seq(seq__8664_8668);
if(temp__4425__auto___8677){
var seq__8664_8678__$1 = temp__4425__auto___8677;
if(cljs.core.chunked_seq_QMARK_(seq__8664_8678__$1)){
var c__4857__auto___8679 = cljs.core.chunk_first(seq__8664_8678__$1);
var G__8680 = cljs.core.chunk_rest(seq__8664_8678__$1);
var G__8681 = c__4857__auto___8679;
var G__8682 = cljs.core.count(c__4857__auto___8679);
var G__8683 = (0);
seq__8664_8668 = G__8680;
chunk__8665_8669 = G__8681;
count__8666_8670 = G__8682;
i__8667_8671 = G__8683;
continue;
} else {
var c_8684 = cljs.core.first(seq__8664_8678__$1);
sb.append(cljs.compiler.escape_char(c_8684));

var G__8685 = cljs.core.next(seq__8664_8678__$1);
var G__8686 = null;
var G__8687 = (0);
var G__8688 = (0);
seq__8664_8668 = G__8685;
chunk__8665_8669 = G__8686;
count__8666_8670 = G__8687;
i__8667_8671 = G__8688;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__4967__auto__ = (function (){var G__8689 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8689) : cljs.core.atom.call(null,G__8689));
})();
var prefer_table__4968__auto__ = (function (){var G__8690 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8690) : cljs.core.atom.call(null,G__8690));
})();
var method_cache__4969__auto__ = (function (){var G__8691 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8691) : cljs.core.atom.call(null,G__8691));
})();
var cached_hierarchy__4970__auto__ = (function (){var G__8692 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8692) : cljs.core.atom.call(null,G__8692));
})();
var hierarchy__4971__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4971__auto__,method_table__4967__auto__,prefer_table__4968__auto__,method_cache__4969__auto__,cached_hierarchy__4970__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__5507__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__5507__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__8696_8699 = ast;
var map__8696_8700__$1 = ((cljs.core.seq_QMARK_(map__8696_8699))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8696_8699):map__8696_8699);
var env_8701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8696_8700__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_8701))){
var map__8697_8702 = env_8701;
var map__8697_8703__$1 = ((cljs.core.seq_QMARK_(map__8697_8702))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8697_8702):map__8697_8702);
var line_8704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8697_8703__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_8705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8697_8703__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,((function (map__8697_8702,map__8697_8703__$1,line_8704,column_8705,map__8696_8699,map__8696_8700__$1,env_8701,val__5507__auto__){
return (function (m){
var minfo = (function (){var G__8698 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
var G__8698__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__8698,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join('')):G__8698);
return G__8698__$1;
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_8704 - (1))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__8697_8702,map__8697_8703__$1,line_8704,column_8705,map__8696_8699,map__8696_8700__$1,env_8701,val__5507__auto__){
return (function (line__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_8705)?(column_8705 - (1)):(0))], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (minfo,map__8697_8702,map__8697_8703__$1,line_8704,column_8705,map__8696_8699,map__8696_8700__$1,env_8701,val__5507__auto__){
return (function (column__$1){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(column__$1,minfo);
});})(minfo,map__8697_8702,map__8697_8703__$1,line_8704,column_8705,map__8696_8699,map__8696_8700__$1,env_8701,val__5507__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__8697_8702,map__8697_8703__$1,line_8704,column_8705,map__8696_8699,map__8696_8700__$1,env_8701,val__5507__auto__))
,cljs.core.sorted_map()));
});})(map__8697_8702,map__8697_8703__$1,line_8704,column_8705,map__8696_8699,map__8696_8700__$1,env_8701,val__5507__auto__))
);
} else {
}
} else {
}

return (cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_STAR_.cljs$core$IFn$_invoke$arity$1(ast) : cljs.compiler.emit_STAR_.call(null,ast));
}finally {if((val__5507__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(){
var args__5119__auto__ = [];
var len__5112__auto___8712 = arguments.length;
var i__5113__auto___8713 = (0);
while(true){
if((i__5113__auto___8713 < len__5112__auto___8712)){
args__5119__auto__.push((arguments[i__5113__auto___8713]));

var G__8714 = (i__5113__auto___8713 + (1));
i__5113__auto___8713 = G__8714;
continue;
} else {
}
break;
}

var argseq__5120__auto__ = ((((0) < args__5119__auto__.length))?(new cljs.core.IndexedSeq(args__5119__auto__.slice((0)),(0))):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__5120__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__8708_8715 = cljs.core.seq(xs);
var chunk__8709_8716 = null;
var count__8710_8717 = (0);
var i__8711_8718 = (0);
while(true){
if((i__8711_8718 < count__8710_8717)){
var x_8719 = chunk__8709_8716.cljs$core$IIndexed$_nth$arity$2(null,i__8711_8718);
if((x_8719 == null)){
} else {
if(cljs.core.map_QMARK_(x_8719)){
cljs.compiler.emit(x_8719);
} else {
if(cljs.core.seq_QMARK_(x_8719)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_8719);
} else {
if(cljs.core.fn_QMARK_(x_8719)){
(x_8719.cljs$core$IFn$_invoke$arity$0 ? x_8719.cljs$core$IFn$_invoke$arity$0() : x_8719.call(null));
} else {
var s_8720 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x_8719], 0));
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__8708_8715,chunk__8709_8716,count__8710_8717,i__8711_8718,s_8720,x_8719){
return (function (p1__8706_SHARP_){
return (p1__8706_SHARP_ + cljs.core.count(s_8720));
});})(seq__8708_8715,chunk__8709_8716,count__8710_8717,i__8711_8718,s_8720,x_8719))
);
} else {
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_8720], 0));

}
}
}
}

var G__8721 = seq__8708_8715;
var G__8722 = chunk__8709_8716;
var G__8723 = count__8710_8717;
var G__8724 = (i__8711_8718 + (1));
seq__8708_8715 = G__8721;
chunk__8709_8716 = G__8722;
count__8710_8717 = G__8723;
i__8711_8718 = G__8724;
continue;
} else {
var temp__4425__auto___8725 = cljs.core.seq(seq__8708_8715);
if(temp__4425__auto___8725){
var seq__8708_8726__$1 = temp__4425__auto___8725;
if(cljs.core.chunked_seq_QMARK_(seq__8708_8726__$1)){
var c__4857__auto___8727 = cljs.core.chunk_first(seq__8708_8726__$1);
var G__8728 = cljs.core.chunk_rest(seq__8708_8726__$1);
var G__8729 = c__4857__auto___8727;
var G__8730 = cljs.core.count(c__4857__auto___8727);
var G__8731 = (0);
seq__8708_8715 = G__8728;
chunk__8709_8716 = G__8729;
count__8710_8717 = G__8730;
i__8711_8718 = G__8731;
continue;
} else {
var x_8732 = cljs.core.first(seq__8708_8726__$1);
if((x_8732 == null)){
} else {
if(cljs.core.map_QMARK_(x_8732)){
cljs.compiler.emit(x_8732);
} else {
if(cljs.core.seq_QMARK_(x_8732)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,x_8732);
} else {
if(cljs.core.fn_QMARK_(x_8732)){
(x_8732.cljs$core$IFn$_invoke$arity$0 ? x_8732.cljs$core$IFn$_invoke$arity$0() : x_8732.call(null));
} else {
var s_8733 = cljs.core.print_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x_8732], 0));
if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__8708_8715,chunk__8709_8716,count__8710_8717,i__8711_8718,s_8733,x_8732,seq__8708_8726__$1,temp__4425__auto___8725){
return (function (p1__8706_SHARP_){
return (p1__8706_SHARP_ + cljs.core.count(s_8733));
});})(seq__8708_8715,chunk__8709_8716,count__8710_8717,i__8711_8718,s_8733,x_8732,seq__8708_8726__$1,temp__4425__auto___8725))
);
} else {
}

cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_8733], 0));

}
}
}
}

var G__8734 = cljs.core.next(seq__8708_8726__$1);
var G__8735 = null;
var G__8736 = (0);
var G__8737 = (0);
seq__8708_8715 = G__8734;
chunk__8709_8716 = G__8735;
count__8710_8717 = G__8736;
i__8711_8718 = G__8737;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq8707){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8707));
});
cljs.compiler.emitln = (function cljs$compiler$emitln(){
var args__5119__auto__ = [];
var len__5112__auto___8741 = arguments.length;
var i__5113__auto___8742 = (0);
while(true){
if((i__5113__auto___8742 < len__5112__auto___8741)){
args__5119__auto__.push((arguments[i__5113__auto___8742]));

var G__8743 = (i__5113__auto___8742 + (1));
i__5113__auto___8742 = G__8743;
continue;
} else {
}
break;
}

var argseq__5120__auto__ = ((((0) < args__5119__auto__.length))?(new cljs.core.IndexedSeq(args__5119__auto__.slice((0)),(0))):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__5120__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.compiler.emits,xs);

cljs.core.println();

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_source_map_data_STAR_,(function (p__8739){
var map__8740 = p__8739;
var map__8740__$1 = ((cljs.core.seq_QMARK_(map__8740))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8740):map__8740);
var m = map__8740__$1;
var gen_line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8740__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),cljs.core.array_seq([new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0)], 0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq8738){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq8738));
});
cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__5028__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_8746_8748 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_8747_8749 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_8746_8748,_STAR_print_fn_STAR_8747_8749,sb__5028__auto__){
return (function (x__5029__auto__){
return sb__5028__auto__.append(x__5029__auto__);
});})(_STAR_print_newline_STAR_8746_8748,_STAR_print_fn_STAR_8747_8749,sb__5028__auto__))
;

try{cljs.compiler.emit(expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_8747_8749;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_8746_8748;
}
return [cljs.core.str(sb__5028__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__4967__auto__ = (function (){var G__8750 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8750) : cljs.core.atom.call(null,G__8750));
})();
var prefer_table__4968__auto__ = (function (){var G__8751 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8751) : cljs.core.atom.call(null,G__8751));
})();
var method_cache__4969__auto__ = (function (){var G__8752 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8752) : cljs.core.atom.call(null,G__8752));
})();
var cached_hierarchy__4970__auto__ = (function (){var G__8753 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__8753) : cljs.core.atom.call(null,G__8753));
})();
var hierarchy__4971__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4971__auto__,method_table__4967__auto__,prefer_table__4968__auto__,method_cache__4969__auto__,cached_hierarchy__4970__auto__));
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
var vec__8754 = cljs.core.re_find(/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8754,(0),null);
var flags = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8754,(1),null);
var pattern = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8754,(2),null);
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

var G__8757_8759 = (cljs.core.truth_(ns)?[cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(name)].join(''):name);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__8757_8759) : cljs.compiler.emit_constant.call(null,G__8757_8759));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));

var G__8758_8760 = cljs.core.hash(kw);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__8758_8760) : cljs.compiler.emit_constant.call(null,G__8758_8760));

return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([")"], 0));
});
cljs.compiler.emit_constant.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.Keyword,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"emit-constants","emit-constants",-476585410).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)))))){
var value = (function (){var G__8761 = new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)));
return (x.cljs$core$IFn$_invoke$arity$1 ? x.cljs$core$IFn$_invoke$arity$1(G__8761) : x.call(null,G__8761));
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

var G__8762_8763 = cljs.core.hash(x);
(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(G__8762_8763) : cljs.compiler.emit_constant.call(null,G__8762_8763));

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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__8765){
var map__8766 = p__8765;
var map__8766__$1 = ((cljs.core.seq_QMARK_(map__8766))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8766):map__8766);
var arg = map__8766__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8766__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8766__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8766__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cljs.env._STAR_compiler_STAR_) : cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name(var_name)], null));
var or__4073__auto__ = js_module_name;
if(cljs.core.truth_(or__4073__auto__)){
return or__4073__auto__;
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
var env__6140__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6140__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__8767 = info__$1;
var G__8767__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null)))?cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(G__8767):G__8767);
return G__8767__$1;
})()], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6140__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__8768){
var map__8769 = p__8768;
var map__8769__$1 = ((cljs.core.seq_QMARK_(map__8769))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8769):map__8769);
var arg = map__8769__$1;
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8769__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8769__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8769__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8769__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_(sym)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"sym","sym",195671222,null))], 0)))].join('')));
}

if(cljs.analyzer.ast_QMARK_(meta)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol("ana","ast?","ana/ast?",1470128118,null),new cljs.core.Symbol(null,"meta","meta",-1154898805,null))], 0)))].join('')));
}

var map__8770 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__8770__$1 = ((cljs.core.seq_QMARK_(map__8770))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8770):map__8770);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8770__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__6140__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6140__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.Var(function(){return ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),";},",sym,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6140__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__8771){
var map__8772 = p__8771;
var map__8772__$1 = ((cljs.core.seq_QMARK_(map__8772))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8772):map__8772);
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8772__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8772__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8772__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6140__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6140__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.with_meta(",expr,",",meta,")"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6140__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_((function (p1__8773_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__8773_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count(keys)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__8774){
var map__8775 = p__8774;
var map__8775__$1 = ((cljs.core.seq_QMARK_(map__8775))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8775):map__8775);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8775__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8775__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8775__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__6140__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6140__auto__))){
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6140__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"list","list",765357683),(function (p__8776){
var map__8777 = p__8776;
var map__8777__$1 = ((cljs.core.seq_QMARK_(map__8777))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8777):map__8777);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8777__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8777__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6140__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6140__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.List.EMPTY"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.list(",cljs.compiler.comma_sep(items),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6140__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__8778){
var map__8779 = p__8778;
var map__8779__$1 = ((cljs.core.seq_QMARK_(map__8779))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8779):map__8779);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8779__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8779__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6140__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6140__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.empty_QMARK_(items)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentVector.EMPTY"], 0));
} else {
var cnt_8780 = cljs.core.count(items);
if((cnt_8780 < (32))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["new cljs.core.PersistentVector(null, ",cnt_8780,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep(items),"], null)"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep(items),"], true)"], 0));
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6140__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_((function (p1__8781_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__8781_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count(items)));
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (p__8782){
var map__8783 = p__8782;
var map__8783__$1 = ((cljs.core.seq_QMARK_(map__8783))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8783):map__8783);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8783__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8783__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6140__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6140__auto__))){
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6140__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__8784){
var map__8785 = p__8784;
var map__8785__$1 = ((cljs.core.seq_QMARK_(map__8785))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8785):map__8785);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8785__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8785__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8785__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6140__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6140__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["{"], 0));

var temp__4425__auto___8794 = cljs.core.seq(items);
if(temp__4425__auto___8794){
var items_8795__$1 = temp__4425__auto___8794;
var vec__8786_8796 = items_8795__$1;
var vec__8787_8797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8786_8796,(0),null);
var k_8798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8787_8797,(0),null);
var v_8799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8787_8797,(1),null);
var r_8800 = cljs.core.nthnext(vec__8786_8796,(1));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["\"",cljs.core.name(k_8798),"\": ",v_8799], 0));

var seq__8788_8801 = cljs.core.seq(r_8800);
var chunk__8789_8802 = null;
var count__8790_8803 = (0);
var i__8791_8804 = (0);
while(true){
if((i__8791_8804 < count__8790_8803)){
var vec__8792_8805 = chunk__8789_8802.cljs$core$IIndexed$_nth$arity$2(null,i__8791_8804);
var k_8806__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8792_8805,(0),null);
var v_8807__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8792_8805,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", \"",cljs.core.name(k_8806__$1),"\": ",v_8807__$1], 0));

var G__8808 = seq__8788_8801;
var G__8809 = chunk__8789_8802;
var G__8810 = count__8790_8803;
var G__8811 = (i__8791_8804 + (1));
seq__8788_8801 = G__8808;
chunk__8789_8802 = G__8809;
count__8790_8803 = G__8810;
i__8791_8804 = G__8811;
continue;
} else {
var temp__4425__auto___8812__$1 = cljs.core.seq(seq__8788_8801);
if(temp__4425__auto___8812__$1){
var seq__8788_8813__$1 = temp__4425__auto___8812__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8788_8813__$1)){
var c__4857__auto___8814 = cljs.core.chunk_first(seq__8788_8813__$1);
var G__8815 = cljs.core.chunk_rest(seq__8788_8813__$1);
var G__8816 = c__4857__auto___8814;
var G__8817 = cljs.core.count(c__4857__auto___8814);
var G__8818 = (0);
seq__8788_8801 = G__8815;
chunk__8789_8802 = G__8816;
count__8790_8803 = G__8817;
i__8791_8804 = G__8818;
continue;
} else {
var vec__8793_8819 = cljs.core.first(seq__8788_8813__$1);
var k_8820__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8793_8819,(0),null);
var v_8821__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8793_8819,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([", \"",cljs.core.name(k_8820__$1),"\": ",v_8821__$1], 0));

var G__8822 = cljs.core.next(seq__8788_8813__$1);
var G__8823 = null;
var G__8824 = (0);
var G__8825 = (0);
seq__8788_8801 = G__8822;
chunk__8789_8802 = G__8823;
count__8790_8803 = G__8824;
i__8791_8804 = G__8825;
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6140__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__8826){
var map__8827 = p__8826;
var map__8827__$1 = ((cljs.core.seq_QMARK_(map__8827))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8827):map__8827);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8827__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8827__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__6140__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6140__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

(cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1 ? cljs.compiler.emit_constant.cljs$core$IFn$_invoke$arity$1(form) : cljs.compiler.emit_constant.call(null,form));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6140__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__8828){
var map__8830 = p__8828;
var map__8830__$1 = ((cljs.core.seq_QMARK_(map__8830))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8830):map__8830);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8830__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8830__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__4061__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__4061__auto__){
var and__4061__auto____$1 = form;
if(cljs.core.truth_(and__4061__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__4061__auto____$1;
}
} else {
return and__4061__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__8831){
var map__8833 = p__8831;
var map__8833__$1 = ((cljs.core.seq_QMARK_(map__8833))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8833):map__8833);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8833__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8833__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag(env,e);
var or__4073__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__4073__auto__)){
return or__4073__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_(e);
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__8834){
var map__8835 = p__8834;
var map__8835__$1 = ((cljs.core.seq_QMARK_(map__8835))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8835):map__8835);
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8835__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8835__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8835__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8835__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8835__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not((function (){var or__4073__auto__ = unchecked;
if(cljs.core.truth_(or__4073__auto__)){
return or__4073__auto__;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__8836){
var map__8837 = p__8836;
var map__8837__$1 = ((cljs.core.seq_QMARK_(map__8837))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8837):map__8837);
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8837__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8837__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8837__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8837__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8837__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__8838_8852 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(tests,thens)));
var chunk__8839_8853 = null;
var count__8840_8854 = (0);
var i__8841_8855 = (0);
while(true){
if((i__8841_8855 < count__8840_8854)){
var vec__8842_8856 = chunk__8839_8853.cljs$core$IIndexed$_nth$arity$2(null,i__8841_8855);
var ts_8857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8842_8856,(0),null);
var then_8858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8842_8856,(1),null);
var seq__8843_8859 = cljs.core.seq(ts_8857);
var chunk__8844_8860 = null;
var count__8845_8861 = (0);
var i__8846_8862 = (0);
while(true){
if((i__8846_8862 < count__8845_8861)){
var test_8863 = chunk__8844_8860.cljs$core$IIndexed$_nth$arity$2(null,i__8846_8862);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_8863,":"], 0));

var G__8864 = seq__8843_8859;
var G__8865 = chunk__8844_8860;
var G__8866 = count__8845_8861;
var G__8867 = (i__8846_8862 + (1));
seq__8843_8859 = G__8864;
chunk__8844_8860 = G__8865;
count__8845_8861 = G__8866;
i__8846_8862 = G__8867;
continue;
} else {
var temp__4425__auto___8868 = cljs.core.seq(seq__8843_8859);
if(temp__4425__auto___8868){
var seq__8843_8869__$1 = temp__4425__auto___8868;
if(cljs.core.chunked_seq_QMARK_(seq__8843_8869__$1)){
var c__4857__auto___8870 = cljs.core.chunk_first(seq__8843_8869__$1);
var G__8871 = cljs.core.chunk_rest(seq__8843_8869__$1);
var G__8872 = c__4857__auto___8870;
var G__8873 = cljs.core.count(c__4857__auto___8870);
var G__8874 = (0);
seq__8843_8859 = G__8871;
chunk__8844_8860 = G__8872;
count__8845_8861 = G__8873;
i__8846_8862 = G__8874;
continue;
} else {
var test_8875 = cljs.core.first(seq__8843_8869__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_8875,":"], 0));

var G__8876 = cljs.core.next(seq__8843_8869__$1);
var G__8877 = null;
var G__8878 = (0);
var G__8879 = (0);
seq__8843_8859 = G__8876;
chunk__8844_8860 = G__8877;
count__8845_8861 = G__8878;
i__8846_8862 = G__8879;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs,"=",then_8858], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then_8858], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

var G__8880 = seq__8838_8852;
var G__8881 = chunk__8839_8853;
var G__8882 = count__8840_8854;
var G__8883 = (i__8841_8855 + (1));
seq__8838_8852 = G__8880;
chunk__8839_8853 = G__8881;
count__8840_8854 = G__8882;
i__8841_8855 = G__8883;
continue;
} else {
var temp__4425__auto___8884 = cljs.core.seq(seq__8838_8852);
if(temp__4425__auto___8884){
var seq__8838_8885__$1 = temp__4425__auto___8884;
if(cljs.core.chunked_seq_QMARK_(seq__8838_8885__$1)){
var c__4857__auto___8886 = cljs.core.chunk_first(seq__8838_8885__$1);
var G__8887 = cljs.core.chunk_rest(seq__8838_8885__$1);
var G__8888 = c__4857__auto___8886;
var G__8889 = cljs.core.count(c__4857__auto___8886);
var G__8890 = (0);
seq__8838_8852 = G__8887;
chunk__8839_8853 = G__8888;
count__8840_8854 = G__8889;
i__8841_8855 = G__8890;
continue;
} else {
var vec__8847_8891 = cljs.core.first(seq__8838_8885__$1);
var ts_8892 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8847_8891,(0),null);
var then_8893 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8847_8891,(1),null);
var seq__8848_8894 = cljs.core.seq(ts_8892);
var chunk__8849_8895 = null;
var count__8850_8896 = (0);
var i__8851_8897 = (0);
while(true){
if((i__8851_8897 < count__8850_8896)){
var test_8898 = chunk__8849_8895.cljs$core$IIndexed$_nth$arity$2(null,i__8851_8897);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_8898,":"], 0));

var G__8899 = seq__8848_8894;
var G__8900 = chunk__8849_8895;
var G__8901 = count__8850_8896;
var G__8902 = (i__8851_8897 + (1));
seq__8848_8894 = G__8899;
chunk__8849_8895 = G__8900;
count__8850_8896 = G__8901;
i__8851_8897 = G__8902;
continue;
} else {
var temp__4425__auto___8903__$1 = cljs.core.seq(seq__8848_8894);
if(temp__4425__auto___8903__$1){
var seq__8848_8904__$1 = temp__4425__auto___8903__$1;
if(cljs.core.chunked_seq_QMARK_(seq__8848_8904__$1)){
var c__4857__auto___8905 = cljs.core.chunk_first(seq__8848_8904__$1);
var G__8906 = cljs.core.chunk_rest(seq__8848_8904__$1);
var G__8907 = c__4857__auto___8905;
var G__8908 = cljs.core.count(c__4857__auto___8905);
var G__8909 = (0);
seq__8848_8894 = G__8906;
chunk__8849_8895 = G__8907;
count__8850_8896 = G__8908;
i__8851_8897 = G__8909;
continue;
} else {
var test_8910 = cljs.core.first(seq__8848_8904__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",test_8910,":"], 0));

var G__8911 = cljs.core.next(seq__8848_8904__$1);
var G__8912 = null;
var G__8913 = (0);
var G__8914 = (0);
seq__8848_8894 = G__8911;
chunk__8849_8895 = G__8912;
count__8850_8896 = G__8913;
i__8851_8897 = G__8914;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([gs,"=",then_8893], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([then_8893], 0));
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["break;"], 0));

var G__8915 = cljs.core.next(seq__8838_8885__$1);
var G__8916 = null;
var G__8917 = (0);
var G__8918 = (0);
seq__8838_8852 = G__8915;
chunk__8839_8853 = G__8916;
count__8840_8854 = G__8917;
i__8841_8855 = G__8918;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__8919){
var map__8920 = p__8919;
var map__8920__$1 = ((cljs.core.seq_QMARK_(map__8920))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8920):map__8920);
var throw$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8920__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8920__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var seq__8953 = cljs.core.seq(clojure.string.split_lines(e));
var chunk__8954 = null;
var count__8955 = (0);
var i__8956 = (0);
while(true){
if((i__8956 < count__8955)){
var next_line = chunk__8954.cljs$core$IIndexed$_nth$arity$2(null,i__8956);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * ",clojure.string.trim(next_line)], 0));

var G__8961 = seq__8953;
var G__8962 = chunk__8954;
var G__8963 = count__8955;
var G__8964 = (i__8956 + (1));
seq__8953 = G__8961;
chunk__8954 = G__8962;
count__8955 = G__8963;
i__8956 = G__8964;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8953);
if(temp__4425__auto__){
var seq__8953__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8953__$1)){
var c__4857__auto__ = cljs.core.chunk_first(seq__8953__$1);
var G__8965 = cljs.core.chunk_rest(seq__8953__$1);
var G__8966 = c__4857__auto__;
var G__8967 = cljs.core.count(c__4857__auto__);
var G__8968 = (0);
seq__8953 = G__8965;
chunk__8954 = G__8966;
count__8955 = G__8967;
i__8956 = G__8968;
continue;
} else {
var next_line = cljs.core.first(seq__8953__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" * ",clojure.string.trim(next_line)], 0));

var G__8969 = cljs.core.next(seq__8953__$1);
var G__8970 = null;
var G__8971 = (0);
var G__8972 = (0);
seq__8953 = G__8969;
chunk__8954 = G__8970;
count__8955 = G__8971;
i__8956 = G__8972;
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

var seq__8957_8973 = cljs.core.seq(docs__$2);
var chunk__8958_8974 = null;
var count__8959_8975 = (0);
var i__8960_8976 = (0);
while(true){
if((i__8960_8976 < count__8959_8975)){
var e_8977 = chunk__8958_8974.cljs$core$IIndexed$_nth$arity$2(null,i__8960_8976);
if(cljs.core.truth_(e_8977)){
print_comment_lines(e_8977);
} else {
}

var G__8978 = seq__8957_8973;
var G__8979 = chunk__8958_8974;
var G__8980 = count__8959_8975;
var G__8981 = (i__8960_8976 + (1));
seq__8957_8973 = G__8978;
chunk__8958_8974 = G__8979;
count__8959_8975 = G__8980;
i__8960_8976 = G__8981;
continue;
} else {
var temp__4425__auto___8982 = cljs.core.seq(seq__8957_8973);
if(temp__4425__auto___8982){
var seq__8957_8983__$1 = temp__4425__auto___8982;
if(cljs.core.chunked_seq_QMARK_(seq__8957_8983__$1)){
var c__4857__auto___8984 = cljs.core.chunk_first(seq__8957_8983__$1);
var G__8985 = cljs.core.chunk_rest(seq__8957_8983__$1);
var G__8986 = c__4857__auto___8984;
var G__8987 = cljs.core.count(c__4857__auto___8984);
var G__8988 = (0);
seq__8957_8973 = G__8985;
chunk__8958_8974 = G__8986;
count__8959_8975 = G__8987;
i__8960_8976 = G__8988;
continue;
} else {
var e_8989 = cljs.core.first(seq__8957_8983__$1);
if(cljs.core.truth_(e_8989)){
print_comment_lines(e_8989);
} else {
}

var G__8990 = cljs.core.next(seq__8957_8983__$1);
var G__8991 = null;
var G__8992 = (0);
var G__8993 = (0);
seq__8957_8973 = G__8990;
chunk__8958_8974 = G__8991;
count__8959_8975 = G__8992;
i__8960_8976 = G__8993;
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
var and__4061__auto__ = cljs.core.some(((function (opts){
return (function (p1__8995_SHARP_){
return goog.string.startsWith(p1__8995_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__4061__auto__)){
var and__4061__auto____$1 = opts;
if(cljs.core.truth_(and__4061__auto____$1)){
var and__4061__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__4061__auto____$2){
var define = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_(define))){
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([define], 0));
} else {
return null;
}
} else {
return and__4061__auto____$2;
}
} else {
return and__4061__auto____$1;
}
} else {
return and__4061__auto__;
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__8996){
var map__8997 = p__8996;
var map__8997__$1 = ((cljs.core.seq_QMARK_(map__8997))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__8997):map__8997);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8997__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8997__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8997__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8997__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8997__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8997__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8997__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8997__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__8997__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
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

if(cljs.core.truth_((function (){var and__4061__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__4061__auto__)){
return test;
} else {
return and__4061__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__8998){
var map__9014 = p__8998;
var map__9014__$1 = ((cljs.core.seq_QMARK_(map__9014))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9014):map__9014);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9014__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9014__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9014__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (",arglist,"){"], 0));

var seq__9015_9029 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((2),params)));
var chunk__9016_9030 = null;
var count__9017_9031 = (0);
var i__9018_9032 = (0);
while(true){
if((i__9018_9032 < count__9017_9031)){
var vec__9019_9033 = chunk__9016_9030.cljs$core$IIndexed$_nth$arity$2(null,i__9018_9032);
var i_9034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9019_9033,(0),null);
var param_9035 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9019_9033,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(param_9035);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist," = cljs.core.next(",arglist,");"], 0));

var G__9036 = seq__9015_9029;
var G__9037 = chunk__9016_9030;
var G__9038 = count__9017_9031;
var G__9039 = (i__9018_9032 + (1));
seq__9015_9029 = G__9036;
chunk__9016_9030 = G__9037;
count__9017_9031 = G__9038;
i__9018_9032 = G__9039;
continue;
} else {
var temp__4425__auto___9040 = cljs.core.seq(seq__9015_9029);
if(temp__4425__auto___9040){
var seq__9015_9041__$1 = temp__4425__auto___9040;
if(cljs.core.chunked_seq_QMARK_(seq__9015_9041__$1)){
var c__4857__auto___9042 = cljs.core.chunk_first(seq__9015_9041__$1);
var G__9043 = cljs.core.chunk_rest(seq__9015_9041__$1);
var G__9044 = c__4857__auto___9042;
var G__9045 = cljs.core.count(c__4857__auto___9042);
var G__9046 = (0);
seq__9015_9029 = G__9043;
chunk__9016_9030 = G__9044;
count__9017_9031 = G__9045;
i__9018_9032 = G__9046;
continue;
} else {
var vec__9020_9047 = cljs.core.first(seq__9015_9041__$1);
var i_9048 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9020_9047,(0),null);
var param_9049 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9020_9047,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(param_9049);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = cljs.core.first("], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist,");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglist," = cljs.core.next(",arglist,");"], 0));

var G__9050 = cljs.core.next(seq__9015_9041__$1);
var G__9051 = null;
var G__9052 = (0);
var G__9053 = (0);
seq__9015_9029 = G__9050;
chunk__9016_9030 = G__9051;
count__9017_9031 = G__9052;
i__9018_9032 = G__9053;
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

var seq__9021_9054 = cljs.core.seq(params);
var chunk__9022_9055 = null;
var count__9023_9056 = (0);
var i__9024_9057 = (0);
while(true){
if((i__9024_9057 < count__9023_9056)){
var param_9058 = chunk__9022_9055.cljs$core$IIndexed$_nth$arity$2(null,i__9024_9057);
cljs.compiler.emit(param_9058);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_9058,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__9059 = seq__9021_9054;
var G__9060 = chunk__9022_9055;
var G__9061 = count__9023_9056;
var G__9062 = (i__9024_9057 + (1));
seq__9021_9054 = G__9059;
chunk__9022_9055 = G__9060;
count__9023_9056 = G__9061;
i__9024_9057 = G__9062;
continue;
} else {
var temp__4425__auto___9063 = cljs.core.seq(seq__9021_9054);
if(temp__4425__auto___9063){
var seq__9021_9064__$1 = temp__4425__auto___9063;
if(cljs.core.chunked_seq_QMARK_(seq__9021_9064__$1)){
var c__4857__auto___9065 = cljs.core.chunk_first(seq__9021_9064__$1);
var G__9066 = cljs.core.chunk_rest(seq__9021_9064__$1);
var G__9067 = c__4857__auto___9065;
var G__9068 = cljs.core.count(c__4857__auto___9065);
var G__9069 = (0);
seq__9021_9054 = G__9066;
chunk__9022_9055 = G__9067;
count__9023_9056 = G__9068;
i__9024_9057 = G__9069;
continue;
} else {
var param_9070 = cljs.core.first(seq__9021_9064__$1);
cljs.compiler.emit(param_9070);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_9070,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__9071 = cljs.core.next(seq__9021_9064__$1);
var G__9072 = null;
var G__9073 = (0);
var G__9074 = (0);
seq__9021_9054 = G__9071;
chunk__9022_9055 = G__9072;
count__9023_9056 = G__9073;
i__9024_9057 = G__9074;
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

var seq__9025_9075 = cljs.core.seq(params);
var chunk__9026_9076 = null;
var count__9027_9077 = (0);
var i__9028_9078 = (0);
while(true){
if((i__9028_9078 < count__9027_9077)){
var param_9079 = chunk__9026_9076.cljs$core$IIndexed$_nth$arity$2(null,i__9028_9078);
cljs.compiler.emit(param_9079);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_9079,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__9080 = seq__9025_9075;
var G__9081 = chunk__9026_9076;
var G__9082 = count__9027_9077;
var G__9083 = (i__9028_9078 + (1));
seq__9025_9075 = G__9080;
chunk__9026_9076 = G__9081;
count__9027_9077 = G__9082;
i__9028_9078 = G__9083;
continue;
} else {
var temp__4425__auto___9084 = cljs.core.seq(seq__9025_9075);
if(temp__4425__auto___9084){
var seq__9025_9085__$1 = temp__4425__auto___9084;
if(cljs.core.chunked_seq_QMARK_(seq__9025_9085__$1)){
var c__4857__auto___9086 = cljs.core.chunk_first(seq__9025_9085__$1);
var G__9087 = cljs.core.chunk_rest(seq__9025_9085__$1);
var G__9088 = c__4857__auto___9086;
var G__9089 = cljs.core.count(c__4857__auto___9086);
var G__9090 = (0);
seq__9025_9075 = G__9087;
chunk__9026_9076 = G__9088;
count__9027_9077 = G__9089;
i__9028_9078 = G__9090;
continue;
} else {
var param_9091 = cljs.core.first(seq__9025_9085__$1);
cljs.compiler.emit(param_9091);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_9091,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__9092 = cljs.core.next(seq__9025_9085__$1);
var G__9093 = null;
var G__9094 = (0);
var G__9095 = (0);
seq__9025_9075 = G__9092;
chunk__9026_9076 = G__9093;
count__9027_9077 = G__9094;
i__9028_9078 = G__9095;
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
var seq__9100 = cljs.core.seq(params);
var chunk__9101 = null;
var count__9102 = (0);
var i__9103 = (0);
while(true){
if((i__9103 < count__9102)){
var param = chunk__9101.cljs$core$IIndexed$_nth$arity$2(null,i__9103);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__9104 = seq__9100;
var G__9105 = chunk__9101;
var G__9106 = count__9102;
var G__9107 = (i__9103 + (1));
seq__9100 = G__9104;
chunk__9101 = G__9105;
count__9102 = G__9106;
i__9103 = G__9107;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9100);
if(temp__4425__auto__){
var seq__9100__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9100__$1)){
var c__4857__auto__ = cljs.core.chunk_first(seq__9100__$1);
var G__9108 = cljs.core.chunk_rest(seq__9100__$1);
var G__9109 = c__4857__auto__;
var G__9110 = cljs.core.count(c__4857__auto__);
var G__9111 = (0);
seq__9100 = G__9108;
chunk__9101 = G__9109;
count__9102 = G__9110;
i__9103 = G__9111;
continue;
} else {
var param = cljs.core.first(seq__9100__$1);
cljs.compiler.emit(param);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__9112 = cljs.core.next(seq__9100__$1);
var G__9113 = null;
var G__9114 = (0);
var G__9115 = (0);
seq__9100 = G__9112;
chunk__9101 = G__9113;
count__9102 = G__9114;
i__9103 = G__9115;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__9116){
var map__9118 = p__9116;
var map__9118__$1 = ((cljs.core.seq_QMARK_(map__9118))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9118):map__9118);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9118__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9118__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9118__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9118__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9118__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9118__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9118__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9118__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__6140__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6140__auto__))){
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

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6140__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__9119){
var map__9129 = p__9119;
var map__9129__$1 = ((cljs.core.seq_QMARK_(map__9129))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9129):map__9129);
var f = map__9129__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9129__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9129__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9129__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9129__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9129__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9129__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9129__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9129__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__6140__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6140__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

var name_9138__$1 = (function (){var or__4073__auto__ = name;
if(cljs.core.truth_(or__4073__auto__)){
return or__4073__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_9139 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_9138__$1);
var delegate_name_9140 = [cljs.core.str(mname_9139),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function() { "], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",delegate_name_9140," = function ("], 0));

var seq__9130_9141 = cljs.core.seq(params);
var chunk__9131_9142 = null;
var count__9132_9143 = (0);
var i__9133_9144 = (0);
while(true){
if((i__9133_9144 < count__9132_9143)){
var param_9145 = chunk__9131_9142.cljs$core$IIndexed$_nth$arity$2(null,i__9133_9144);
cljs.compiler.emit(param_9145);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_9145,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__9146 = seq__9130_9141;
var G__9147 = chunk__9131_9142;
var G__9148 = count__9132_9143;
var G__9149 = (i__9133_9144 + (1));
seq__9130_9141 = G__9146;
chunk__9131_9142 = G__9147;
count__9132_9143 = G__9148;
i__9133_9144 = G__9149;
continue;
} else {
var temp__4425__auto___9150 = cljs.core.seq(seq__9130_9141);
if(temp__4425__auto___9150){
var seq__9130_9151__$1 = temp__4425__auto___9150;
if(cljs.core.chunked_seq_QMARK_(seq__9130_9151__$1)){
var c__4857__auto___9152 = cljs.core.chunk_first(seq__9130_9151__$1);
var G__9153 = cljs.core.chunk_rest(seq__9130_9151__$1);
var G__9154 = c__4857__auto___9152;
var G__9155 = cljs.core.count(c__4857__auto___9152);
var G__9156 = (0);
seq__9130_9141 = G__9153;
chunk__9131_9142 = G__9154;
count__9132_9143 = G__9155;
i__9133_9144 = G__9156;
continue;
} else {
var param_9157 = cljs.core.first(seq__9130_9151__$1);
cljs.compiler.emit(param_9157);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_9157,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__9158 = cljs.core.next(seq__9130_9151__$1);
var G__9159 = null;
var G__9160 = (0);
var G__9161 = (0);
seq__9130_9141 = G__9158;
chunk__9131_9142 = G__9159;
count__9132_9143 = G__9160;
i__9133_9144 = G__9161;
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

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",mname_9139," = function (",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){"], 0));

if(cljs.core.truth_(type)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var self__ = this;"], 0));
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(params));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",(cljs.core.count(params) - (1)),") {"], 0));

var a_9162 = cljs.compiler.emit_arguments_to_array((cljs.core.count(params) - (1)));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",cljs.core.last(params)," = new cljs.core.IndexedSeq(",a_9162,",0);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["} "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",delegate_name_9140,".call(this,"], 0));

var seq__9134_9163 = cljs.core.seq(params);
var chunk__9135_9164 = null;
var count__9136_9165 = (0);
var i__9137_9166 = (0);
while(true){
if((i__9137_9166 < count__9136_9165)){
var param_9167 = chunk__9135_9164.cljs$core$IIndexed$_nth$arity$2(null,i__9137_9166);
cljs.compiler.emit(param_9167);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_9167,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__9168 = seq__9134_9163;
var G__9169 = chunk__9135_9164;
var G__9170 = count__9136_9165;
var G__9171 = (i__9137_9166 + (1));
seq__9134_9163 = G__9168;
chunk__9135_9164 = G__9169;
count__9136_9165 = G__9170;
i__9137_9166 = G__9171;
continue;
} else {
var temp__4425__auto___9172 = cljs.core.seq(seq__9134_9163);
if(temp__4425__auto___9172){
var seq__9134_9173__$1 = temp__4425__auto___9172;
if(cljs.core.chunked_seq_QMARK_(seq__9134_9173__$1)){
var c__4857__auto___9174 = cljs.core.chunk_first(seq__9134_9173__$1);
var G__9175 = cljs.core.chunk_rest(seq__9134_9173__$1);
var G__9176 = c__4857__auto___9174;
var G__9177 = cljs.core.count(c__4857__auto___9174);
var G__9178 = (0);
seq__9134_9163 = G__9175;
chunk__9135_9164 = G__9176;
count__9136_9165 = G__9177;
i__9137_9166 = G__9178;
continue;
} else {
var param_9179 = cljs.core.first(seq__9134_9173__$1);
cljs.compiler.emit(param_9179);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(param_9179,cljs.core.last(params))){
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([","], 0));
}

var G__9180 = cljs.core.next(seq__9134_9173__$1);
var G__9181 = null;
var G__9182 = (0);
var G__9183 = (0);
seq__9134_9163 = G__9180;
chunk__9135_9164 = G__9181;
count__9136_9165 = G__9182;
i__9137_9166 = G__9183;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([");"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["};"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_9139,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_9139,".cljs$lang$applyTo = "], 0));

cljs.compiler.emit_apply_to(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.Keyword(null,"name","name",1843675177),name_9138__$1));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_9139,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_9140,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",mname_9139,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6140__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
});
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__9187){
var map__9188 = p__9187;
var map__9188__$1 = ((cljs.core.seq_QMARK_(map__9188))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9188):map__9188);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9188__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9188__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9188__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9188__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9188__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9188__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9188__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"params","params",710516235),cljs.core.array_seq([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (map__9188,map__9188__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__9184_SHARP_){
var and__4061__auto__ = p1__9184_SHARP_;
if(cljs.core.truth_(and__4061__auto__)){
var G__9189 = new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__9184_SHARP_);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__9189) : cljs.core.deref.call(null,G__9189));
} else {
return and__4061__auto__;
}
});})(map__9188,map__9188__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_9209__$1 = (function (){var or__4073__auto__ = name;
if(cljs.core.truth_(or__4073__auto__)){
return or__4073__auto__;
} else {
return cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
}
})();
var mname_9210 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name_9209__$1);
var maxparams_9211 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,cljs.core.count,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_9212 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (name_9209__$1,mname_9210,maxparams_9211,loop_locals,map__9188,map__9188__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(mname_9210),cljs.core.str("__"),cljs.core.str(cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_9209__$1,mname_9210,maxparams_9211,loop_locals,map__9188,map__9188__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_9213 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(((function (name_9209__$1,mname_9210,maxparams_9211,mmap_9212,loop_locals,map__9188,map__9188__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__9185_SHARP_){
return cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__9185_SHARP_)));
});})(name_9209__$1,mname_9210,maxparams_9211,mmap_9212,loop_locals,map__9188,map__9188__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq(mmap_9212));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function() {"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",mname_9210," = null;"], 0));

var seq__9190_9214 = cljs.core.seq(ms_9213);
var chunk__9191_9215 = null;
var count__9192_9216 = (0);
var i__9193_9217 = (0);
while(true){
if((i__9193_9217 < count__9192_9216)){
var vec__9194_9218 = chunk__9191_9215.cljs$core$IIndexed$_nth$arity$2(null,i__9193_9217);
var n_9219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9194_9218,(0),null);
var meth_9220 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9194_9218,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",n_9219," = "], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_9220))){
cljs.compiler.emit_variadic_fn_method(meth_9220);
} else {
cljs.compiler.emit_fn_method(meth_9220);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

var G__9221 = seq__9190_9214;
var G__9222 = chunk__9191_9215;
var G__9223 = count__9192_9216;
var G__9224 = (i__9193_9217 + (1));
seq__9190_9214 = G__9221;
chunk__9191_9215 = G__9222;
count__9192_9216 = G__9223;
i__9193_9217 = G__9224;
continue;
} else {
var temp__4425__auto___9225 = cljs.core.seq(seq__9190_9214);
if(temp__4425__auto___9225){
var seq__9190_9226__$1 = temp__4425__auto___9225;
if(cljs.core.chunked_seq_QMARK_(seq__9190_9226__$1)){
var c__4857__auto___9227 = cljs.core.chunk_first(seq__9190_9226__$1);
var G__9228 = cljs.core.chunk_rest(seq__9190_9226__$1);
var G__9229 = c__4857__auto___9227;
var G__9230 = cljs.core.count(c__4857__auto___9227);
var G__9231 = (0);
seq__9190_9214 = G__9228;
chunk__9191_9215 = G__9229;
count__9192_9216 = G__9230;
i__9193_9217 = G__9231;
continue;
} else {
var vec__9195_9232 = cljs.core.first(seq__9190_9226__$1);
var n_9233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9195_9232,(0),null);
var meth_9234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9195_9232,(1),null);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",n_9233," = "], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_9234))){
cljs.compiler.emit_variadic_fn_method(meth_9234);
} else {
cljs.compiler.emit_fn_method(meth_9234);
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));

var G__9235 = cljs.core.next(seq__9190_9226__$1);
var G__9236 = null;
var G__9237 = (0);
var G__9238 = (0);
seq__9190_9214 = G__9235;
chunk__9191_9215 = G__9236;
count__9192_9216 = G__9237;
i__9193_9217 = G__9238;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_9210," = function(",cljs.compiler.comma_sep((cljs.core.truth_(variadic)?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(maxparams_9211),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_9211)),"){"], 0));

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(cljs.core.last(maxparams_9211));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = var_args;"], 0));
} else {
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["switch(arguments.length){"], 0));

var seq__9196_9239 = cljs.core.seq(ms_9213);
var chunk__9197_9240 = null;
var count__9198_9241 = (0);
var i__9199_9242 = (0);
while(true){
if((i__9199_9242 < count__9198_9241)){
var vec__9200_9243 = chunk__9197_9240.cljs$core$IIndexed$_nth$arity$2(null,i__9199_9242);
var n_9244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9200_9243,(0),null);
var meth_9245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9200_9243,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_9245))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["default:"], 0));

var restarg_9246 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",restarg_9246," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_9247 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([restarg_9246," = new cljs.core.IndexedSeq(",a_9247,",0);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_9244,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_9211)),(((cljs.core.count(maxparams_9211) > (1)))?", ":null),restarg_9246,");"], 0));
} else {
var pcnt_9248 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_9245));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",pcnt_9248,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_9244,".call(this",(((pcnt_9248 === (0)))?null:cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_9248,maxparams_9211))),",")),");"], 0));
}

var G__9249 = seq__9196_9239;
var G__9250 = chunk__9197_9240;
var G__9251 = count__9198_9241;
var G__9252 = (i__9199_9242 + (1));
seq__9196_9239 = G__9249;
chunk__9197_9240 = G__9250;
count__9198_9241 = G__9251;
i__9199_9242 = G__9252;
continue;
} else {
var temp__4425__auto___9253 = cljs.core.seq(seq__9196_9239);
if(temp__4425__auto___9253){
var seq__9196_9254__$1 = temp__4425__auto___9253;
if(cljs.core.chunked_seq_QMARK_(seq__9196_9254__$1)){
var c__4857__auto___9255 = cljs.core.chunk_first(seq__9196_9254__$1);
var G__9256 = cljs.core.chunk_rest(seq__9196_9254__$1);
var G__9257 = c__4857__auto___9255;
var G__9258 = cljs.core.count(c__4857__auto___9255);
var G__9259 = (0);
seq__9196_9239 = G__9256;
chunk__9197_9240 = G__9257;
count__9198_9241 = G__9258;
i__9199_9242 = G__9259;
continue;
} else {
var vec__9201_9260 = cljs.core.first(seq__9196_9254__$1);
var n_9261 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9201_9260,(0),null);
var meth_9262 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9201_9260,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_9262))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["default:"], 0));

var restarg_9263 = cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",restarg_9263," = null;"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["if (arguments.length > ",max_fixed_arity,") {"], 0));

var a_9264 = cljs.compiler.emit_arguments_to_array(max_fixed_arity);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([restarg_9263," = new cljs.core.IndexedSeq(",a_9264,",0);"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["}"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_9261,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep(cljs.core.butlast(maxparams_9211)),(((cljs.core.count(maxparams_9211) > (1)))?", ":null),restarg_9263,");"], 0));
} else {
var pcnt_9265 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_9262));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["case ",pcnt_9265,":"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",n_9261,".call(this",(((pcnt_9265 === (0)))?null:cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(pcnt_9265,maxparams_9211))),",")),");"], 0));
}

var G__9266 = cljs.core.next(seq__9196_9254__$1);
var G__9267 = null;
var G__9268 = (0);
var G__9269 = (0);
seq__9196_9239 = G__9266;
chunk__9197_9240 = G__9267;
count__9198_9241 = G__9268;
i__9199_9242 = G__9269;
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
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_9210,".cljs$lang$maxFixedArity = ",max_fixed_arity,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_9210,".cljs$lang$applyTo = ",cljs.core.some(((function (name_9209__$1,mname_9210,maxparams_9211,mmap_9212,ms_9213,loop_locals,map__9188,map__9188__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__9186_SHARP_){
var vec__9202 = p1__9186_SHARP_;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9202,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9202,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_9209__$1,mname_9210,maxparams_9211,mmap_9212,ms_9213,loop_locals,map__9188,map__9188__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_9213),".cljs$lang$applyTo;"], 0));
} else {
}

var seq__9203_9270 = cljs.core.seq(ms_9213);
var chunk__9204_9271 = null;
var count__9205_9272 = (0);
var i__9206_9273 = (0);
while(true){
if((i__9206_9273 < count__9205_9272)){
var vec__9207_9274 = chunk__9204_9271.cljs$core$IIndexed$_nth$arity$2(null,i__9206_9273);
var n_9275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9207_9274,(0),null);
var meth_9276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9207_9274,(1),null);
var c_9277 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_9276));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_9276))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_9210,".cljs$core$IFn$_invoke$arity$variadic = ",n_9275,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_9210,".cljs$core$IFn$_invoke$arity$",c_9277," = ",n_9275,";"], 0));
}

var G__9278 = seq__9203_9270;
var G__9279 = chunk__9204_9271;
var G__9280 = count__9205_9272;
var G__9281 = (i__9206_9273 + (1));
seq__9203_9270 = G__9278;
chunk__9204_9271 = G__9279;
count__9205_9272 = G__9280;
i__9206_9273 = G__9281;
continue;
} else {
var temp__4425__auto___9282 = cljs.core.seq(seq__9203_9270);
if(temp__4425__auto___9282){
var seq__9203_9283__$1 = temp__4425__auto___9282;
if(cljs.core.chunked_seq_QMARK_(seq__9203_9283__$1)){
var c__4857__auto___9284 = cljs.core.chunk_first(seq__9203_9283__$1);
var G__9285 = cljs.core.chunk_rest(seq__9203_9283__$1);
var G__9286 = c__4857__auto___9284;
var G__9287 = cljs.core.count(c__4857__auto___9284);
var G__9288 = (0);
seq__9203_9270 = G__9285;
chunk__9204_9271 = G__9286;
count__9205_9272 = G__9287;
i__9206_9273 = G__9288;
continue;
} else {
var vec__9208_9289 = cljs.core.first(seq__9203_9283__$1);
var n_9290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9208_9289,(0),null);
var meth_9291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9208_9289,(1),null);
var c_9292 = cljs.core.count(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_9291));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_9291))){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_9210,".cljs$core$IFn$_invoke$arity$variadic = ",n_9290,".cljs$core$IFn$_invoke$arity$variadic;"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([mname_9210,".cljs$core$IFn$_invoke$arity$",c_9292," = ",n_9290,";"], 0));
}

var G__9293 = cljs.core.next(seq__9203_9283__$1);
var G__9294 = null;
var G__9295 = (0);
var G__9296 = (0);
seq__9203_9270 = G__9293;
chunk__9204_9271 = G__9294;
count__9205_9272 = G__9295;
i__9206_9273 = G__9296;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return ",mname_9210,";"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
}

if(loop_locals){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";})(",cljs.compiler.comma_sep(loop_locals),"))"], 0));
} else {
return null;
}
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"do","do",46310725),(function (p__9297){
var map__9298 = p__9297;
var map__9298__$1 = ((cljs.core.seq_QMARK_(map__9298))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9298):map__9298);
var statements = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9298__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9298__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9298__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__4061__auto__ = statements;
if(cljs.core.truth_(and__4061__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__4061__auto__;
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var seq__9299_9303 = cljs.core.seq(statements);
var chunk__9300_9304 = null;
var count__9301_9305 = (0);
var i__9302_9306 = (0);
while(true){
if((i__9302_9306 < count__9301_9305)){
var s_9307 = chunk__9300_9304.cljs$core$IIndexed$_nth$arity$2(null,i__9302_9306);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_9307], 0));

var G__9308 = seq__9299_9303;
var G__9309 = chunk__9300_9304;
var G__9310 = count__9301_9305;
var G__9311 = (i__9302_9306 + (1));
seq__9299_9303 = G__9308;
chunk__9300_9304 = G__9309;
count__9301_9305 = G__9310;
i__9302_9306 = G__9311;
continue;
} else {
var temp__4425__auto___9312 = cljs.core.seq(seq__9299_9303);
if(temp__4425__auto___9312){
var seq__9299_9313__$1 = temp__4425__auto___9312;
if(cljs.core.chunked_seq_QMARK_(seq__9299_9313__$1)){
var c__4857__auto___9314 = cljs.core.chunk_first(seq__9299_9313__$1);
var G__9315 = cljs.core.chunk_rest(seq__9299_9313__$1);
var G__9316 = c__4857__auto___9314;
var G__9317 = cljs.core.count(c__4857__auto___9314);
var G__9318 = (0);
seq__9299_9303 = G__9315;
chunk__9300_9304 = G__9316;
count__9301_9305 = G__9317;
i__9302_9306 = G__9318;
continue;
} else {
var s_9319 = cljs.core.first(seq__9299_9313__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s_9319], 0));

var G__9320 = cljs.core.next(seq__9299_9313__$1);
var G__9321 = null;
var G__9322 = (0);
var G__9323 = (0);
seq__9299_9303 = G__9320;
chunk__9300_9304 = G__9321;
count__9301_9305 = G__9322;
i__9302_9306 = G__9323;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit(ret);

if(cljs.core.truth_((function (){var and__4061__auto__ = statements;
if(cljs.core.truth_(and__4061__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__4061__auto__;
}
})())){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["})()"], 0));
} else {
return null;
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__9324){
var map__9325 = p__9324;
var map__9325__$1 = ((cljs.core.seq_QMARK_(map__9325))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9325):map__9325);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9325__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9325__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9325__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9325__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9325__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__4073__auto__ = name;
if(cljs.core.truth_(or__4073__auto__)){
return or__4073__auto__;
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__9327,is_loop){
var map__9336 = p__9327;
var map__9336__$1 = ((cljs.core.seq_QMARK_(map__9336))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9336):map__9336);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9336__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9336__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9336__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var _STAR_lexical_renames_STAR_9337_9344 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (_STAR_lexical_renames_STAR_9337_9344,context,map__9336,map__9336__$1,bindings,expr,env){
return (function (p1__9326_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.hash(p1__9326_SHARP_),cljs.core.gensym.cljs$core$IFn$_invoke$arity$1([cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__9326_SHARP_)),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_9337_9344,context,map__9336,map__9336__$1,bindings,expr,env))
,bindings):null));

try{var seq__9338_9345 = cljs.core.seq(bindings);
var chunk__9339_9346 = null;
var count__9340_9347 = (0);
var i__9341_9348 = (0);
while(true){
if((i__9341_9348 < count__9340_9347)){
var map__9342_9349 = chunk__9339_9346.cljs$core$IIndexed$_nth$arity$2(null,i__9341_9348);
var map__9342_9350__$1 = ((cljs.core.seq_QMARK_(map__9342_9349))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9342_9349):map__9342_9349);
var binding_9351 = map__9342_9350__$1;
var init_9352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9342_9350__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(binding_9351);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = ",init_9352,";"], 0));

var G__9353 = seq__9338_9345;
var G__9354 = chunk__9339_9346;
var G__9355 = count__9340_9347;
var G__9356 = (i__9341_9348 + (1));
seq__9338_9345 = G__9353;
chunk__9339_9346 = G__9354;
count__9340_9347 = G__9355;
i__9341_9348 = G__9356;
continue;
} else {
var temp__4425__auto___9357 = cljs.core.seq(seq__9338_9345);
if(temp__4425__auto___9357){
var seq__9338_9358__$1 = temp__4425__auto___9357;
if(cljs.core.chunked_seq_QMARK_(seq__9338_9358__$1)){
var c__4857__auto___9359 = cljs.core.chunk_first(seq__9338_9358__$1);
var G__9360 = cljs.core.chunk_rest(seq__9338_9358__$1);
var G__9361 = c__4857__auto___9359;
var G__9362 = cljs.core.count(c__4857__auto___9359);
var G__9363 = (0);
seq__9338_9345 = G__9360;
chunk__9339_9346 = G__9361;
count__9340_9347 = G__9362;
i__9341_9348 = G__9363;
continue;
} else {
var map__9343_9364 = cljs.core.first(seq__9338_9358__$1);
var map__9343_9365__$1 = ((cljs.core.seq_QMARK_(map__9343_9364))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9343_9364):map__9343_9364);
var binding_9366 = map__9343_9365__$1;
var init_9367 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9343_9365__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var "], 0));

cljs.compiler.emit(binding_9366);

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" = ",init_9367,";"], 0));

var G__9368 = cljs.core.next(seq__9338_9358__$1);
var G__9369 = null;
var G__9370 = (0);
var G__9371 = (0);
seq__9338_9345 = G__9368;
chunk__9339_9346 = G__9369;
count__9340_9347 = G__9370;
i__9341_9348 = G__9371;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_9337_9344;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__9372){
var map__9373 = p__9372;
var map__9373__$1 = ((cljs.core.seq_QMARK_(map__9373))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9373):map__9373);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9373__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9373__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9373__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(exprs),cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__4957__auto___9374 = cljs.core.count(exprs);
var i_9375 = (0);
while(true){
if((i_9375 < n__4957__auto___9374)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_9375) : temps.call(null,i_9375))," = ",(exprs.cljs$core$IFn$_invoke$arity$1 ? exprs.cljs$core$IFn$_invoke$arity$1(i_9375) : exprs.call(null,i_9375)),";"], 0));

var G__9376 = (i_9375 + (1));
i_9375 = G__9376;
continue;
} else {
}
break;
}

var n__4957__auto___9377 = cljs.core.count(exprs);
var i_9378 = (0);
while(true){
if((i_9378 < n__4957__auto___9377)){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(i_9378) : params.call(null,i_9378)))," = ",(temps.cljs$core$IFn$_invoke$arity$1 ? temps.cljs$core$IFn$_invoke$arity$1(i_9378) : temps.call(null,i_9378)),";"], 0));

var G__9379 = (i_9378 + (1));
i_9378 = G__9379;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["continue;"], 0));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__9380){
var map__9381 = p__9380;
var map__9381__$1 = ((cljs.core.seq_QMARK_(map__9381))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9381):map__9381);
var bindings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9381__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9381__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9381__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(function (){"], 0));
} else {
}

var seq__9382_9388 = cljs.core.seq(bindings);
var chunk__9383_9389 = null;
var count__9384_9390 = (0);
var i__9385_9391 = (0);
while(true){
if((i__9385_9391 < count__9384_9390)){
var map__9386_9392 = chunk__9383_9389.cljs$core$IIndexed$_nth$arity$2(null,i__9385_9391);
var map__9386_9393__$1 = ((cljs.core.seq_QMARK_(map__9386_9392))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9386_9392):map__9386_9392);
var binding_9394 = map__9386_9393__$1;
var init_9395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9386_9393__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_9394)," = ",init_9395,";"], 0));

var G__9396 = seq__9382_9388;
var G__9397 = chunk__9383_9389;
var G__9398 = count__9384_9390;
var G__9399 = (i__9385_9391 + (1));
seq__9382_9388 = G__9396;
chunk__9383_9389 = G__9397;
count__9384_9390 = G__9398;
i__9385_9391 = G__9399;
continue;
} else {
var temp__4425__auto___9400 = cljs.core.seq(seq__9382_9388);
if(temp__4425__auto___9400){
var seq__9382_9401__$1 = temp__4425__auto___9400;
if(cljs.core.chunked_seq_QMARK_(seq__9382_9401__$1)){
var c__4857__auto___9402 = cljs.core.chunk_first(seq__9382_9401__$1);
var G__9403 = cljs.core.chunk_rest(seq__9382_9401__$1);
var G__9404 = c__4857__auto___9402;
var G__9405 = cljs.core.count(c__4857__auto___9402);
var G__9406 = (0);
seq__9382_9388 = G__9403;
chunk__9383_9389 = G__9404;
count__9384_9390 = G__9405;
i__9385_9391 = G__9406;
continue;
} else {
var map__9387_9407 = cljs.core.first(seq__9382_9401__$1);
var map__9387_9408__$1 = ((cljs.core.seq_QMARK_(map__9387_9407))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9387_9407):map__9387_9407);
var binding_9409 = map__9387_9408__$1;
var init_9410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9387_9408__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["var ",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(binding_9409)," = ",init_9410,";"], 0));

var G__9411 = cljs.core.next(seq__9382_9401__$1);
var G__9412 = null;
var G__9413 = (0);
var G__9414 = (0);
seq__9382_9388 = G__9411;
chunk__9383_9389 = G__9412;
count__9384_9390 = G__9413;
i__9385_9391 = G__9414;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__9417){
var map__9418 = p__9417;
var map__9418__$1 = ((cljs.core.seq_QMARK_(map__9418))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9418):map__9418);
var expr = map__9418__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9418__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9418__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9418__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__4061__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4061__auto__)){
var and__4061__auto____$1 = cljs.core.not(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__4061__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__4061__auto____$1;
}
} else {
return and__4061__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__4061__auto__ = protocol;
if(cljs.core.truth_(and__4061__auto__)){
var and__4061__auto____$1 = tag;
if(cljs.core.truth_(and__4061__auto____$1)){
var or__4073__auto__ = (function (){var and__4061__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4061__auto____$2)){
var and__4061__auto____$3 = protocol;
if(cljs.core.truth_(and__4061__auto____$3)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__4061__auto____$3;
}
} else {
return and__4061__auto____$2;
}
})();
if(cljs.core.truth_(or__4073__auto__)){
return or__4073__auto__;
} else {
var and__4061__auto____$2 = (function (){var or__4073__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__4073__auto____$1)){
return or__4073__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__4061__auto____$2)){
var or__4073__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,tag);
if(or__4073__auto____$1){
return or__4073__auto____$1;
} else {
var and__4061__auto____$3 = !(cljs.core.set_QMARK_(tag));
if(and__4061__auto____$3){
var and__4061__auto____$4 = cljs.core.not(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null], null), null).call(null,tag));
if(and__4061__auto____$4){
var temp__4425__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"locals","locals",535295783)),tag));
if(cljs.core.truth_(temp__4425__auto__)){
var ps = temp__4425__auto__;
return (ps.cljs$core$IFn$_invoke$arity$1 ? ps.cljs$core$IFn$_invoke$arity$1(protocol) : ps.call(null,protocol));
} else {
return null;
}
} else {
return and__4061__auto____$4;
}
} else {
return and__4061__auto____$3;
}
}
} else {
return and__4061__auto____$2;
}
}
} else {
return and__4061__auto____$1;
}
} else {
return and__4061__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.analyzer.infer_tag(env,cljs.core.first(new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__4073__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__4073__auto__){
return or__4073__auto__;
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
var vec__9419 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count(args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not(variadic_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__4061__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__4061__auto__)){
return (arity > mfa);
} else {
return and__4061__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__9418,map__9418__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__9418,map__9418__$1,expr,f,args,env){
return (function (p1__9415_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__9415_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__9418,map__9418__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__9418,map__9418__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__9418,map__9418__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__9418,map__9418__$1,expr,f,args,env){
return (function (p1__9416_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__9416_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__9418,map__9418__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__9418,map__9418__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9419,(0),null);
var variadic_invoke = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9419,(1),null);
var env__6140__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6140__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["!(",cljs.core.first(args),")"], 0));
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_9420 = [cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.compiler.protocol_prefix(protocol))),cljs.core.str(cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(cljs.core.name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(args),".",pimpl_9420,"(",cljs.compiler.comma_sep(cljs.core.cons("null",cljs.core.rest(args))),")"], 0));
} else {
if(keyword_QMARK_){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count(args),"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_9421 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,"(",cljs.compiler.comma_sep(cljs.core.take.cljs$core$IFn$_invoke$arity$2(mfa_9421,args)),(((mfa_9421 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(mfa_9421,args)),"], 0))"], 0));
} else {
if(cljs.core.truth_((function (){var or__4073__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__4073__auto__)){
return or__4073__auto__;
} else {
var or__4073__auto____$1 = js_QMARK_;
if(or__4073__auto____$1){
return or__4073__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,"(",cljs.compiler.comma_sep(args),")"], 0));
} else {
if(cljs.core.truth_((function (){var and__4061__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__4061__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__4061__auto__;
}
})())){
var fprop_9422 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count(args))].join('');
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(",f__$1,fprop_9422," ? ",f__$1,fprop_9422,"(",cljs.compiler.comma_sep(args),") : ",f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),"))"], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([f__$1,".call(",cljs.compiler.comma_sep(cljs.core.cons("null",args)),")"], 0));
}

}
}
}
}
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6140__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__9423){
var map__9424 = p__9423;
var map__9424__$1 = ((cljs.core.seq_QMARK_(map__9424))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9424):map__9424);
var ctor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9424__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9424__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9424__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6140__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6140__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["(new ",ctor,"(",cljs.compiler.comma_sep(args),"))"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6140__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__9425){
var map__9426 = p__9425;
var map__9426__$1 = ((cljs.core.seq_QMARK_(map__9426))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9426):map__9426);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9426__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9426__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9426__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6140__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6140__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target," = ",val], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6140__auto__))){
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

var seq__9431_9435 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.vals(seen)),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.vals(libs))));
var chunk__9432_9436 = null;
var count__9433_9437 = (0);
var i__9434_9438 = (0);
while(true){
if((i__9434_9438 < count__9433_9437)){
var lib_9439 = chunk__9432_9436.cljs$core$IIndexed$_nth$arity$2(null,i__9434_9438);
if(cljs.core.truth_((function (){var or__4073__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4073__auto__)){
return or__4073__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_9439),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_9439),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__4073__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4073__auto__)){
return or__4073__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_9439),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_9439),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_9439),"');"], 0));

}
}

var G__9440 = seq__9431_9435;
var G__9441 = chunk__9432_9436;
var G__9442 = count__9433_9437;
var G__9443 = (i__9434_9438 + (1));
seq__9431_9435 = G__9440;
chunk__9432_9436 = G__9441;
count__9433_9437 = G__9442;
i__9434_9438 = G__9443;
continue;
} else {
var temp__4425__auto___9444 = cljs.core.seq(seq__9431_9435);
if(temp__4425__auto___9444){
var seq__9431_9445__$1 = temp__4425__auto___9444;
if(cljs.core.chunked_seq_QMARK_(seq__9431_9445__$1)){
var c__4857__auto___9446 = cljs.core.chunk_first(seq__9431_9445__$1);
var G__9447 = cljs.core.chunk_rest(seq__9431_9445__$1);
var G__9448 = c__4857__auto___9446;
var G__9449 = cljs.core.count(c__4857__auto___9446);
var G__9450 = (0);
seq__9431_9435 = G__9447;
chunk__9432_9436 = G__9448;
count__9433_9437 = G__9449;
i__9434_9438 = G__9450;
continue;
} else {
var lib_9451 = cljs.core.first(seq__9431_9445__$1);
if(cljs.core.truth_((function (){var or__4073__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4073__auto__)){
return or__4073__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_9451),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_9451),"', 'reload');"], 0));
} else {
if(cljs.core.truth_((function (){var or__4073__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(libs));
if(cljs.core.truth_(or__4073__auto__)){
return or__4073__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(reloads,lib_9451),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_9451),"', 'reload-all');"], 0));
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(lib_9451),"');"], 0));

}
}

var G__9452 = cljs.core.next(seq__9431_9445__$1);
var G__9453 = null;
var G__9454 = (0);
var G__9455 = (0);
seq__9431_9435 = G__9452;
chunk__9432_9436 = G__9453;
count__9433_9437 = G__9454;
i__9434_9438 = G__9455;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__9456){
var map__9457 = p__9456;
var map__9457__$1 = ((cljs.core.seq_QMARK_(map__9457))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9457):map__9457);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9457__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9457__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9457__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9457__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9457__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9457__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.provide('",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(name),"');"], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["goog.require('cljs.core');"], 0));
}

cljs.compiler.load_libs(requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs(uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__9458){
var map__9459 = p__9458;
var map__9459__$1 = ((cljs.core.seq_QMARK_(map__9459))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9459):map__9459);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9459__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9459__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9459__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9459__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var fields__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @constructor"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["*/"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1(t)," = (function (",cljs.compiler.comma_sep(fields__$1),"){"], 0));

var seq__9460_9470 = cljs.core.seq(fields__$1);
var chunk__9461_9471 = null;
var count__9462_9472 = (0);
var i__9463_9473 = (0);
while(true){
if((i__9463_9473 < count__9462_9472)){
var fld_9474 = chunk__9461_9471.cljs$core$IIndexed$_nth$arity$2(null,i__9463_9473);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_9474," = ",fld_9474,";"], 0));

var G__9475 = seq__9460_9470;
var G__9476 = chunk__9461_9471;
var G__9477 = count__9462_9472;
var G__9478 = (i__9463_9473 + (1));
seq__9460_9470 = G__9475;
chunk__9461_9471 = G__9476;
count__9462_9472 = G__9477;
i__9463_9473 = G__9478;
continue;
} else {
var temp__4425__auto___9479 = cljs.core.seq(seq__9460_9470);
if(temp__4425__auto___9479){
var seq__9460_9480__$1 = temp__4425__auto___9479;
if(cljs.core.chunked_seq_QMARK_(seq__9460_9480__$1)){
var c__4857__auto___9481 = cljs.core.chunk_first(seq__9460_9480__$1);
var G__9482 = cljs.core.chunk_rest(seq__9460_9480__$1);
var G__9483 = c__4857__auto___9481;
var G__9484 = cljs.core.count(c__4857__auto___9481);
var G__9485 = (0);
seq__9460_9470 = G__9482;
chunk__9461_9471 = G__9483;
count__9462_9472 = G__9484;
i__9463_9473 = G__9485;
continue;
} else {
var fld_9486 = cljs.core.first(seq__9460_9480__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_9486," = ",fld_9486,";"], 0));

var G__9487 = cljs.core.next(seq__9460_9480__$1);
var G__9488 = null;
var G__9489 = (0);
var G__9490 = (0);
seq__9460_9470 = G__9487;
chunk__9461_9471 = G__9488;
count__9462_9472 = G__9489;
i__9463_9473 = G__9490;
continue;
}
} else {
}
}
break;
}

var seq__9464_9491 = cljs.core.seq(pmasks);
var chunk__9465_9492 = null;
var count__9466_9493 = (0);
var i__9467_9494 = (0);
while(true){
if((i__9467_9494 < count__9466_9493)){
var vec__9468_9495 = chunk__9465_9492.cljs$core$IIndexed$_nth$arity$2(null,i__9467_9494);
var pno_9496 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9468_9495,(0),null);
var pmask_9497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9468_9495,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_9496,"$ = ",pmask_9497,";"], 0));

var G__9498 = seq__9464_9491;
var G__9499 = chunk__9465_9492;
var G__9500 = count__9466_9493;
var G__9501 = (i__9467_9494 + (1));
seq__9464_9491 = G__9498;
chunk__9465_9492 = G__9499;
count__9466_9493 = G__9500;
i__9467_9494 = G__9501;
continue;
} else {
var temp__4425__auto___9502 = cljs.core.seq(seq__9464_9491);
if(temp__4425__auto___9502){
var seq__9464_9503__$1 = temp__4425__auto___9502;
if(cljs.core.chunked_seq_QMARK_(seq__9464_9503__$1)){
var c__4857__auto___9504 = cljs.core.chunk_first(seq__9464_9503__$1);
var G__9505 = cljs.core.chunk_rest(seq__9464_9503__$1);
var G__9506 = c__4857__auto___9504;
var G__9507 = cljs.core.count(c__4857__auto___9504);
var G__9508 = (0);
seq__9464_9491 = G__9505;
chunk__9465_9492 = G__9506;
count__9466_9493 = G__9507;
i__9467_9494 = G__9508;
continue;
} else {
var vec__9469_9509 = cljs.core.first(seq__9464_9503__$1);
var pno_9510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9469_9509,(0),null);
var pmask_9511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9469_9509,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_9510,"$ = ",pmask_9511,";"], 0));

var G__9512 = cljs.core.next(seq__9464_9503__$1);
var G__9513 = null;
var G__9514 = (0);
var G__9515 = (0);
seq__9464_9491 = G__9512;
chunk__9465_9492 = G__9513;
count__9466_9493 = G__9514;
i__9467_9494 = G__9515;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__9516){
var map__9517 = p__9516;
var map__9517__$1 = ((cljs.core.seq_QMARK_(map__9517))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9517):map__9517);
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9517__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9517__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9517__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9517__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var fields__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([""], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["/**"], 0));

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @constructor"], 0));

var seq__9518_9532 = cljs.core.seq(fields__$1);
var chunk__9519_9533 = null;
var count__9520_9534 = (0);
var i__9521_9535 = (0);
while(true){
if((i__9521_9535 < count__9520_9534)){
var fld_9536 = chunk__9519_9533.cljs$core$IIndexed$_nth$arity$2(null,i__9521_9535);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @param {*} ",fld_9536], 0));

var G__9537 = seq__9518_9532;
var G__9538 = chunk__9519_9533;
var G__9539 = count__9520_9534;
var G__9540 = (i__9521_9535 + (1));
seq__9518_9532 = G__9537;
chunk__9519_9533 = G__9538;
count__9520_9534 = G__9539;
i__9521_9535 = G__9540;
continue;
} else {
var temp__4425__auto___9541 = cljs.core.seq(seq__9518_9532);
if(temp__4425__auto___9541){
var seq__9518_9542__$1 = temp__4425__auto___9541;
if(cljs.core.chunked_seq_QMARK_(seq__9518_9542__$1)){
var c__4857__auto___9543 = cljs.core.chunk_first(seq__9518_9542__$1);
var G__9544 = cljs.core.chunk_rest(seq__9518_9542__$1);
var G__9545 = c__4857__auto___9543;
var G__9546 = cljs.core.count(c__4857__auto___9543);
var G__9547 = (0);
seq__9518_9532 = G__9544;
chunk__9519_9533 = G__9545;
count__9520_9534 = G__9546;
i__9521_9535 = G__9547;
continue;
} else {
var fld_9548 = cljs.core.first(seq__9518_9542__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["* @param {*} ",fld_9548], 0));

var G__9549 = cljs.core.next(seq__9518_9542__$1);
var G__9550 = null;
var G__9551 = (0);
var G__9552 = (0);
seq__9518_9532 = G__9549;
chunk__9519_9533 = G__9550;
count__9520_9534 = G__9551;
i__9521_9535 = G__9552;
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

var seq__9522_9553 = cljs.core.seq(fields__$1);
var chunk__9523_9554 = null;
var count__9524_9555 = (0);
var i__9525_9556 = (0);
while(true){
if((i__9525_9556 < count__9524_9555)){
var fld_9557 = chunk__9523_9554.cljs$core$IIndexed$_nth$arity$2(null,i__9525_9556);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_9557," = ",fld_9557,";"], 0));

var G__9558 = seq__9522_9553;
var G__9559 = chunk__9523_9554;
var G__9560 = count__9524_9555;
var G__9561 = (i__9525_9556 + (1));
seq__9522_9553 = G__9558;
chunk__9523_9554 = G__9559;
count__9524_9555 = G__9560;
i__9525_9556 = G__9561;
continue;
} else {
var temp__4425__auto___9562 = cljs.core.seq(seq__9522_9553);
if(temp__4425__auto___9562){
var seq__9522_9563__$1 = temp__4425__auto___9562;
if(cljs.core.chunked_seq_QMARK_(seq__9522_9563__$1)){
var c__4857__auto___9564 = cljs.core.chunk_first(seq__9522_9563__$1);
var G__9565 = cljs.core.chunk_rest(seq__9522_9563__$1);
var G__9566 = c__4857__auto___9564;
var G__9567 = cljs.core.count(c__4857__auto___9564);
var G__9568 = (0);
seq__9522_9553 = G__9565;
chunk__9523_9554 = G__9566;
count__9524_9555 = G__9567;
i__9525_9556 = G__9568;
continue;
} else {
var fld_9569 = cljs.core.first(seq__9522_9563__$1);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.",fld_9569," = ",fld_9569,";"], 0));

var G__9570 = cljs.core.next(seq__9522_9563__$1);
var G__9571 = null;
var G__9572 = (0);
var G__9573 = (0);
seq__9522_9553 = G__9570;
chunk__9523_9554 = G__9571;
count__9524_9555 = G__9572;
i__9525_9556 = G__9573;
continue;
}
} else {
}
}
break;
}

var seq__9526_9574 = cljs.core.seq(pmasks);
var chunk__9527_9575 = null;
var count__9528_9576 = (0);
var i__9529_9577 = (0);
while(true){
if((i__9529_9577 < count__9528_9576)){
var vec__9530_9578 = chunk__9527_9575.cljs$core$IIndexed$_nth$arity$2(null,i__9529_9577);
var pno_9579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9530_9578,(0),null);
var pmask_9580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9530_9578,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_9579,"$ = ",pmask_9580,";"], 0));

var G__9581 = seq__9526_9574;
var G__9582 = chunk__9527_9575;
var G__9583 = count__9528_9576;
var G__9584 = (i__9529_9577 + (1));
seq__9526_9574 = G__9581;
chunk__9527_9575 = G__9582;
count__9528_9576 = G__9583;
i__9529_9577 = G__9584;
continue;
} else {
var temp__4425__auto___9585 = cljs.core.seq(seq__9526_9574);
if(temp__4425__auto___9585){
var seq__9526_9586__$1 = temp__4425__auto___9585;
if(cljs.core.chunked_seq_QMARK_(seq__9526_9586__$1)){
var c__4857__auto___9587 = cljs.core.chunk_first(seq__9526_9586__$1);
var G__9588 = cljs.core.chunk_rest(seq__9526_9586__$1);
var G__9589 = c__4857__auto___9587;
var G__9590 = cljs.core.count(c__4857__auto___9587);
var G__9591 = (0);
seq__9526_9574 = G__9588;
chunk__9527_9575 = G__9589;
count__9528_9576 = G__9590;
i__9529_9577 = G__9591;
continue;
} else {
var vec__9531_9592 = cljs.core.first(seq__9526_9586__$1);
var pno_9593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9531_9592,(0),null);
var pmask_9594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9531_9592,(1),null);
cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["this.cljs$lang$protocol_mask$partition",pno_9593,"$ = ",pmask_9594,";"], 0));

var G__9595 = cljs.core.next(seq__9526_9586__$1);
var G__9596 = null;
var G__9597 = (0);
var G__9598 = (0);
seq__9526_9574 = G__9595;
chunk__9527_9575 = G__9596;
count__9528_9576 = G__9597;
i__9529_9577 = G__9598;
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
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__9599){
var map__9600 = p__9599;
var map__9600__$1 = ((cljs.core.seq_QMARK_(map__9600))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9600):map__9600);
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9600__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9600__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9600__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9600__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9600__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__6140__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6140__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(field,cljs.core.PersistentHashSet.EMPTY)], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([target,".",cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2(method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep(args),")"], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6140__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.emit_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__9601){
var map__9602 = p__9601;
var map__9602__$1 = ((cljs.core.seq_QMARK_(map__9602))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9602):map__9602);
var env = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9602__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9602__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9602__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9602__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env__6140__auto__ = env;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6140__auto__))){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["return "], 0));
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([code], 0));
} else {
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(segs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null)))], 0));
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__6140__auto__))){
return null;
} else {
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";"], 0));
}
}));
cljs.compiler.build_affecting_options = (function cljs$compiler$build_affecting_options(opts){
return cljs.core.select_keys(opts,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"static-fns","static-fns",-501950748),new cljs.core.Keyword(null,"optimize-constants","optimize-constants",232704518),new cljs.core.Keyword(null,"elide-asserts","elide-asserts",537063272),new cljs.core.Keyword(null,"target","target",253001721)], null));
});
cljs.compiler.emit_constants_table = (function cljs$compiler$emit_constants_table(table){
var seq__9611 = cljs.core.seq(table);
var chunk__9612 = null;
var count__9613 = (0);
var i__9614 = (0);
while(true){
if((i__9614 < count__9613)){
var vec__9615 = chunk__9612.cljs$core$IIndexed$_nth$arity$2(null,i__9614);
var keyword = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9615,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9615,(1),null);
var ns_9617 = cljs.core.namespace(keyword);
var name_9618 = cljs.core.name(keyword);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value," = "], 0));

cljs.compiler.emits_keyword(keyword);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";\n"], 0));

var G__9619 = seq__9611;
var G__9620 = chunk__9612;
var G__9621 = count__9613;
var G__9622 = (i__9614 + (1));
seq__9611 = G__9619;
chunk__9612 = G__9620;
count__9613 = G__9621;
i__9614 = G__9622;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__9611);
if(temp__4425__auto__){
var seq__9611__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__9611__$1)){
var c__4857__auto__ = cljs.core.chunk_first(seq__9611__$1);
var G__9623 = cljs.core.chunk_rest(seq__9611__$1);
var G__9624 = c__4857__auto__;
var G__9625 = cljs.core.count(c__4857__auto__);
var G__9626 = (0);
seq__9611 = G__9623;
chunk__9612 = G__9624;
count__9613 = G__9625;
i__9614 = G__9626;
continue;
} else {
var vec__9616 = cljs.core.first(seq__9611__$1);
var keyword = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9616,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9616,(1),null);
var ns_9627 = cljs.core.namespace(keyword);
var name_9628 = cljs.core.name(keyword);
cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["cljs.core.",value," = "], 0));

cljs.compiler.emits_keyword(keyword);

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([";\n"], 0));

var G__9629 = cljs.core.next(seq__9611__$1);
var G__9630 = null;
var G__9631 = (0);
var G__9632 = (0);
seq__9611 = G__9629;
chunk__9612 = G__9630;
count__9613 = G__9631;
i__9614 = G__9632;
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