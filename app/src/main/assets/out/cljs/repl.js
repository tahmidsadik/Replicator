// Compiled by ClojureScript 0.0-3464 {:static-fns true}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(temp__4425__auto__){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));

if(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Protocol"], 0));
} else {
}

if(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m)){
var seq__10912_10924 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10913_10925 = null;
var count__10914_10926 = (0);
var i__10915_10927 = (0);
while(true){
if((i__10915_10927 < count__10914_10926)){
var f_10928 = chunk__10913_10925.cljs$core$IIndexed$_nth$arity$2(null,i__10915_10927);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_10928], 0));

var G__10929 = seq__10912_10924;
var G__10930 = chunk__10913_10925;
var G__10931 = count__10914_10926;
var G__10932 = (i__10915_10927 + (1));
seq__10912_10924 = G__10929;
chunk__10913_10925 = G__10930;
count__10914_10926 = G__10931;
i__10915_10927 = G__10932;
continue;
} else {
var temp__4425__auto___10933 = cljs.core.seq(seq__10912_10924);
if(temp__4425__auto___10933){
var seq__10912_10934__$1 = temp__4425__auto___10933;
if(cljs.core.chunked_seq_QMARK_(seq__10912_10934__$1)){
var c__4945__auto___10935 = cljs.core.chunk_first(seq__10912_10934__$1);
var G__10936 = cljs.core.chunk_rest(seq__10912_10934__$1);
var G__10937 = c__4945__auto___10935;
var G__10938 = cljs.core.count(c__4945__auto___10935);
var G__10939 = (0);
seq__10912_10924 = G__10936;
chunk__10913_10925 = G__10937;
count__10914_10926 = G__10938;
i__10915_10927 = G__10939;
continue;
} else {
var f_10940 = cljs.core.first(seq__10912_10934__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_10940], 0));

var G__10941 = cljs.core.next(seq__10912_10934__$1);
var G__10942 = null;
var G__10943 = (0);
var G__10944 = (0);
seq__10912_10924 = G__10941;
chunk__10913_10925 = G__10942;
count__10914_10926 = G__10943;
i__10915_10927 = G__10944;
continue;
}
} else {
}
}
break;
}
} else {
if(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)){
var arglists_10945 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if((function (){var or__4161__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(or__4161__auto__){
return or__4161__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})()){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglists_10945], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_10945)))?cljs.core.second(arglists_10945):arglists_10945)], 0));
}
} else {
}
}

if(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Macro"], 0));
} else {
}

if(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m)){
var seq__10916 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10917 = null;
var count__10918 = (0);
var i__10919 = (0);
while(true){
if((i__10919 < count__10918)){
var vec__10920 = chunk__10917.cljs$core$IIndexed$_nth$arity$2(null,i__10919);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10920,(0),null);
var map__10921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10920,(1),null);
var map__10921__$1 = ((cljs.core.seq_QMARK_(map__10921))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10921):map__10921);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10921__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10921__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(doc){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__10946 = seq__10916;
var G__10947 = chunk__10917;
var G__10948 = count__10918;
var G__10949 = (i__10919 + (1));
seq__10916 = G__10946;
chunk__10917 = G__10947;
count__10918 = G__10948;
i__10919 = G__10949;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10916);
if(temp__4425__auto__){
var seq__10916__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10916__$1)){
var c__4945__auto__ = cljs.core.chunk_first(seq__10916__$1);
var G__10950 = cljs.core.chunk_rest(seq__10916__$1);
var G__10951 = c__4945__auto__;
var G__10952 = cljs.core.count(c__4945__auto__);
var G__10953 = (0);
seq__10916 = G__10950;
chunk__10917 = G__10951;
count__10918 = G__10952;
i__10919 = G__10953;
continue;
} else {
var vec__10922 = cljs.core.first(seq__10916__$1);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10922,(0),null);
var map__10923 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10922,(1),null);
var map__10923__$1 = ((cljs.core.seq_QMARK_(map__10923))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10923):map__10923);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10923__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10923__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(doc){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__10954 = cljs.core.next(seq__10916__$1);
var G__10955 = null;
var G__10956 = (0);
var G__10957 = (0);
seq__10916 = G__10954;
chunk__10917 = G__10955;
count__10918 = G__10956;
i__10919 = G__10957;
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
}
});

//# sourceMappingURL=repl.js.map