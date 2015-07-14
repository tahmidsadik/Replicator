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
var seq__10617_10629 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10618_10630 = null;
var count__10619_10631 = (0);
var i__10620_10632 = (0);
while(true){
if((i__10620_10632 < count__10619_10631)){
var f_10633 = chunk__10618_10630.cljs$core$IIndexed$_nth$arity$2(null,i__10620_10632);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_10633], 0));

var G__10634 = seq__10617_10629;
var G__10635 = chunk__10618_10630;
var G__10636 = count__10619_10631;
var G__10637 = (i__10620_10632 + (1));
seq__10617_10629 = G__10634;
chunk__10618_10630 = G__10635;
count__10619_10631 = G__10636;
i__10620_10632 = G__10637;
continue;
} else {
var temp__4425__auto___10638 = cljs.core.seq(seq__10617_10629);
if(temp__4425__auto___10638){
var seq__10617_10639__$1 = temp__4425__auto___10638;
if(cljs.core.chunked_seq_QMARK_(seq__10617_10639__$1)){
var c__4857__auto___10640 = cljs.core.chunk_first(seq__10617_10639__$1);
var G__10641 = cljs.core.chunk_rest(seq__10617_10639__$1);
var G__10642 = c__4857__auto___10640;
var G__10643 = cljs.core.count(c__4857__auto___10640);
var G__10644 = (0);
seq__10617_10629 = G__10641;
chunk__10618_10630 = G__10642;
count__10619_10631 = G__10643;
i__10620_10632 = G__10644;
continue;
} else {
var f_10645 = cljs.core.first(seq__10617_10639__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["  ",f_10645], 0));

var G__10646 = cljs.core.next(seq__10617_10639__$1);
var G__10647 = null;
var G__10648 = (0);
var G__10649 = (0);
seq__10617_10629 = G__10646;
chunk__10618_10630 = G__10647;
count__10619_10631 = G__10648;
i__10620_10632 = G__10649;
continue;
}
} else {
}
}
break;
}
} else {
if(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)){
var arglists_10650 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if((function (){var or__4073__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(or__4073__auto__){
return or__4073__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})()){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([arglists_10650], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_10650)))?cljs.core.second(arglists_10650):arglists_10650)], 0));
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
var seq__10621 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10622 = null;
var count__10623 = (0);
var i__10624 = (0);
while(true){
if((i__10624 < count__10623)){
var vec__10625 = chunk__10622.cljs$core$IIndexed$_nth$arity$2(null,i__10624);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10625,(0),null);
var map__10626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10625,(1),null);
var map__10626__$1 = ((cljs.core.seq_QMARK_(map__10626))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10626):map__10626);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10626__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10626__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(doc){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__10651 = seq__10621;
var G__10652 = chunk__10622;
var G__10653 = count__10623;
var G__10654 = (i__10624 + (1));
seq__10621 = G__10651;
chunk__10622 = G__10652;
count__10623 = G__10653;
i__10624 = G__10654;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__10621);
if(temp__4425__auto__){
var seq__10621__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10621__$1)){
var c__4857__auto__ = cljs.core.chunk_first(seq__10621__$1);
var G__10655 = cljs.core.chunk_rest(seq__10621__$1);
var G__10656 = c__4857__auto__;
var G__10657 = cljs.core.count(c__4857__auto__);
var G__10658 = (0);
seq__10621 = G__10655;
chunk__10622 = G__10656;
count__10623 = G__10657;
i__10624 = G__10658;
continue;
} else {
var vec__10627 = cljs.core.first(seq__10621__$1);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10627,(0),null);
var map__10628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10627,(1),null);
var map__10628__$1 = ((cljs.core.seq_QMARK_(map__10628))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10628):map__10628);
var doc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10628__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10628__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",name], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",arglists], 0));

if(doc){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([" ",doc], 0));
} else {
}

var G__10659 = cljs.core.next(seq__10621__$1);
var G__10660 = null;
var G__10661 = (0);
var G__10662 = (0);
seq__10621 = G__10659;
chunk__10622 = G__10660;
count__10623 = G__10661;
i__10624 = G__10662;
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