// Compiled by ClojureScript 0.0-3479 {:static-fns true}
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
var seq__11146_11158 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11147_11159 = null;
var count__11148_11160 = (0);
var i__11149_11161 = (0);
while(true){
if((i__11149_11161 < count__11148_11160)){
var f_11162 = chunk__11147_11159.cljs$core$IIndexed$_nth$arity$2(null,i__11149_11161);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_11162], 0));

var G__11163 = seq__11146_11158;
var G__11164 = chunk__11147_11159;
var G__11165 = count__11148_11160;
var G__11166 = (i__11149_11161 + (1));
seq__11146_11158 = G__11163;
chunk__11147_11159 = G__11164;
count__11148_11160 = G__11165;
i__11149_11161 = G__11166;
continue;
} else {
var temp__4425__auto___11167 = cljs.core.seq(seq__11146_11158);
if(temp__4425__auto___11167){
var seq__11146_11168__$1 = temp__4425__auto___11167;
if(cljs.core.chunked_seq_QMARK_(seq__11146_11168__$1)){
var c__5368__auto___11169 = cljs.core.chunk_first(seq__11146_11168__$1);
var G__11170 = cljs.core.chunk_rest(seq__11146_11168__$1);
var G__11171 = c__5368__auto___11169;
var G__11172 = cljs.core.count(c__5368__auto___11169);
var G__11173 = (0);
seq__11146_11158 = G__11170;
chunk__11147_11159 = G__11171;
count__11148_11160 = G__11172;
i__11149_11161 = G__11173;
continue;
} else {
var f_11174 = cljs.core.first(seq__11146_11168__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_11174], 0));

var G__11175 = cljs.core.next(seq__11146_11168__$1);
var G__11176 = null;
var G__11177 = (0);
var G__11178 = (0);
seq__11146_11158 = G__11175;
chunk__11147_11159 = G__11176;
count__11148_11160 = G__11177;
i__11149_11161 = G__11178;
continue;
}
} else {
}
}
break;
}
} else {
if(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)){
var arglists_11179 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if((function (){var or__4584__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(or__4584__auto__){
return or__4584__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})()){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglists_11179], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_11179)))?cljs.core.second(arglists_11179):arglists_11179)], 0));
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
var seq__11150 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11151 = null;
var count__11152 = (0);
var i__11153 = (0);
while(true){
if((i__11153 < count__11152)){
var vec__11154 = chunk__11151.cljs$core$IIndexed$_nth$arity$2(null,i__11153);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11154,(0),null);
var map__11155 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11154,(1),null);
var map__11155__$1 = ((cljs.core.seq_QMARK_(map__11155))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11155):map__11155);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11155__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11155__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(doc){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__11180 = seq__11150;
var G__11181 = chunk__11151;
var G__11182 = count__11152;
var G__11183 = (i__11153 + (1));
seq__11150 = G__11180;
chunk__11151 = G__11181;
count__11152 = G__11182;
i__11153 = G__11183;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11150);
if(temp__4425__auto__){
var seq__11150__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11150__$1)){
var c__5368__auto__ = cljs.core.chunk_first(seq__11150__$1);
var G__11184 = cljs.core.chunk_rest(seq__11150__$1);
var G__11185 = c__5368__auto__;
var G__11186 = cljs.core.count(c__5368__auto__);
var G__11187 = (0);
seq__11150 = G__11184;
chunk__11151 = G__11185;
count__11152 = G__11186;
i__11153 = G__11187;
continue;
} else {
var vec__11156 = cljs.core.first(seq__11150__$1);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11156,(0),null);
var map__11157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11156,(1),null);
var map__11157__$1 = ((cljs.core.seq_QMARK_(map__11157))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11157):map__11157);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11157__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11157__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(doc){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__11188 = cljs.core.next(seq__11150__$1);
var G__11189 = null;
var G__11190 = (0);
var G__11191 = (0);
seq__11150 = G__11188;
chunk__11151 = G__11189;
count__11152 = G__11190;
i__11153 = G__11191;
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