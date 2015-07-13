// Compiled by ClojureScript 0.0-3464 {:static-fns true}
goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function clojure$set$bubble_max_key(k,coll){

var max = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,k,coll);
return cljs.core.cons(max,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (max){
return (function (p1__9989_SHARP_){
return (max === p1__9989_SHARP_);
});})(max))
,coll));
});
/**
 * Return a set that is the union of the input sets
 */
clojure.set.union = (function clojure$set$union(){
var args9990 = [];
var len__5200__auto___9996 = arguments.length;
var i__5201__auto___9997 = (0);
while(true){
if((i__5201__auto___9997 < len__5200__auto___9996)){
args9990.push((arguments[i__5201__auto___9997]));

var G__9998 = (i__5201__auto___9997 + (1));
i__5201__auto___9997 = G__9998;
continue;
} else {
}
break;
}

var G__9995 = args9990.length;
switch (G__9995) {
case 0:
return clojure.set.union.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.set.union.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5219__auto__ = (new cljs.core.IndexedSeq(args9990.slice((2)),(0)));
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5219__auto__);

}
});

clojure.set.union.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});

clojure.set.union.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.union.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
if((cljs.core.count(s1) < cljs.core.count(s2))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,s2,s1);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,s1,s2);
}
});

clojure.set.union.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key(cljs.core.count,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(sets,s2,cljs.core.array_seq([s1], 0)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.first(bubbled_sets),cljs.core.rest(bubbled_sets));
});

clojure.set.union.cljs$lang$applyTo = (function (seq9991){
var G__9992 = cljs.core.first(seq9991);
var seq9991__$1 = cljs.core.next(seq9991);
var G__9993 = cljs.core.first(seq9991__$1);
var seq9991__$2 = cljs.core.next(seq9991__$1);
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(G__9992,G__9993,seq9991__$2);
});

clojure.set.union.cljs$lang$maxFixedArity = (2);
/**
 * Return a set that is the intersection of the input sets
 */
clojure.set.intersection = (function clojure$set$intersection(){
var args10001 = [];
var len__5200__auto___10007 = arguments.length;
var i__5201__auto___10008 = (0);
while(true){
if((i__5201__auto___10008 < len__5200__auto___10007)){
args10001.push((arguments[i__5201__auto___10008]));

var G__10009 = (i__5201__auto___10008 + (1));
i__5201__auto___10008 = G__10009;
continue;
} else {
}
break;
}

var G__10006 = args10001.length;
switch (G__10006) {
case 1:
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5219__auto__ = (new cljs.core.IndexedSeq(args10001.slice((2)),(0)));
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5219__auto__);

}
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
while(true){
if((cljs.core.count(s2) < cljs.core.count(s1))){
var G__10011 = s2;
var G__10012 = s1;
s1 = G__10011;
s2 = G__10012;
continue;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (s1,s2){
return (function (result,item){
if(cljs.core.contains_QMARK_(s2,item)){
return result;
} else {
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(result,item);
}
});})(s1,s2))
,s1,s1);
}
break;
}
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key((function (p1__10000_SHARP_){
return (- cljs.core.count(p1__10000_SHARP_));
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(sets,s2,cljs.core.array_seq([s1], 0)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.intersection,cljs.core.first(bubbled_sets),cljs.core.rest(bubbled_sets));
});

clojure.set.intersection.cljs$lang$applyTo = (function (seq10002){
var G__10003 = cljs.core.first(seq10002);
var seq10002__$1 = cljs.core.next(seq10002);
var G__10004 = cljs.core.first(seq10002__$1);
var seq10002__$2 = cljs.core.next(seq10002__$1);
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic(G__10003,G__10004,seq10002__$2);
});

clojure.set.intersection.cljs$lang$maxFixedArity = (2);
/**
 * Return a set that is the first set without elements of the remaining sets
 */
clojure.set.difference = (function clojure$set$difference(){
var args10013 = [];
var len__5200__auto___10019 = arguments.length;
var i__5201__auto___10020 = (0);
while(true){
if((i__5201__auto___10020 < len__5200__auto___10019)){
args10013.push((arguments[i__5201__auto___10020]));

var G__10021 = (i__5201__auto___10020 + (1));
i__5201__auto___10020 = G__10021;
continue;
} else {
}
break;
}

var G__10018 = args10013.length;
switch (G__10018) {
case 1:
return clojure.set.difference.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5219__auto__ = (new cljs.core.IndexedSeq(args10013.slice((2)),(0)));
return clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5219__auto__);

}
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
if((cljs.core.count(s1) < cljs.core.count(s2))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,item){
if(cljs.core.contains_QMARK_(s2,item)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(result,item);
} else {
return result;
}
}),s1,s1);
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,s1,s2);
}
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.difference,s1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sets,s2));
});

clojure.set.difference.cljs$lang$applyTo = (function (seq10014){
var G__10015 = cljs.core.first(seq10014);
var seq10014__$1 = cljs.core.next(seq10014);
var G__10016 = cljs.core.first(seq10014__$1);
var seq10014__$2 = cljs.core.next(seq10014__$1);
return clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic(G__10015,G__10016,seq10014__$2);
});

clojure.set.difference.cljs$lang$maxFixedArity = (2);
/**
 * Returns a set of the elements for which pred is true
 */
clojure.set.select = (function clojure$set$select(pred,xset){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,k){
if(cljs.core.truth_((pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(k) : pred.call(null,k)))){
return s;
} else {
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(s,k);
}
}),xset,xset);
});
/**
 * Returns a rel of the elements of xrel with only the keys in ks
 */
clojure.set.project = (function clojure$set$project(xrel,ks){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10023_SHARP_){
return cljs.core.select_keys(p1__10023_SHARP_,ks);
}),xrel));
});
/**
 * Returns the map with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename_keys = (function clojure$set$rename_keys(map,kmap){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__10026){
var vec__10027 = p__10026;
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10027,(0),null);
var new$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10027,(1),null);
if(cljs.core.contains_QMARK_(map,old)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new$,cljs.core.get.cljs$core$IFn$_invoke$arity$2(map,old));
} else {
return m;
}
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,map,cljs.core.keys(kmap)),kmap);
});
/**
 * Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename = (function clojure$set$rename(xrel,kmap){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__10028_SHARP_){
return clojure.set.rename_keys(p1__10028_SHARP_,kmap);
}),xrel));
});
/**
 * Returns a map of the distinct values of ks in the xrel mapped to a
 * set of the maps in xrel with the corresponding values of ks.
 */
clojure.set.index = (function clojure$set$index(xrel,ks){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,x){
var ik = cljs.core.select_keys(x,ks);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,ik,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,ik,cljs.core.PersistentHashSet.EMPTY),x));
}),cljs.core.PersistentArrayMap.EMPTY,xrel);
});
/**
 * Returns the map with the vals mapped to the keys.
 */
clojure.set.map_invert = (function clojure$set$map_invert(m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,p__10031){
var vec__10032 = p__10031;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10032,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10032,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,v,k);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * When passed 2 rels, returns the rel corresponding to the natural
 * join. When passed an additional keymap, joins on the corresponding
 * keys.
 */
clojure.set.join = (function clojure$set$join(){
var args10037 = [];
var len__5200__auto___10044 = arguments.length;
var i__5201__auto___10045 = (0);
while(true){
if((i__5201__auto___10045 < len__5200__auto___10044)){
args10037.push((arguments[i__5201__auto___10045]));

var G__10046 = (i__5201__auto___10045 + (1));
i__5201__auto___10045 = G__10046;
continue;
} else {
}
break;
}

var G__10039 = args10037.length;
switch (G__10039) {
case 2:
return clojure.set.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.set.join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10037.length)].join('')));

}
});

clojure.set.join.cljs$core$IFn$_invoke$arity$2 = (function (xrel,yrel){
if((cljs.core.seq(xrel)) && (cljs.core.seq(yrel))){
var ks = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(cljs.core.first(xrel))),cljs.core.set(cljs.core.keys(cljs.core.first(yrel))));
var vec__10040 = (((cljs.core.count(xrel) <= cljs.core.count(yrel)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel], null));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10040,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10040,(1),null);
var idx = clojure.set.index(r,ks);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (ks,vec__10040,r,s,idx){
return (function (ret,x){
var found = (function (){var G__10041 = cljs.core.select_keys(x,ks);
return (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(G__10041) : idx.call(null,G__10041));
})();
if(cljs.core.truth_(found)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (found,ks,vec__10040,r,s,idx){
return (function (p1__10033_SHARP_,p2__10034_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__10033_SHARP_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p2__10034_SHARP_,x], 0)));
});})(found,ks,vec__10040,r,s,idx))
,ret,found);
} else {
return ret;
}
});})(ks,vec__10040,r,s,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});

clojure.set.join.cljs$core$IFn$_invoke$arity$3 = (function (xrel,yrel,km){
var vec__10042 = (((cljs.core.count(xrel) <= cljs.core.count(yrel)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel,clojure.set.map_invert(km)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel,km], null));
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10042,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10042,(1),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10042,(2),null);
var idx = clojure.set.index(r,cljs.core.vals(k));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__10042,r,s,k,idx){
return (function (ret,x){
var found = (function (){var G__10043 = clojure.set.rename_keys(cljs.core.select_keys(x,cljs.core.keys(k)),k);
return (idx.cljs$core$IFn$_invoke$arity$1 ? idx.cljs$core$IFn$_invoke$arity$1(G__10043) : idx.call(null,G__10043));
})();
if(cljs.core.truth_(found)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (found,vec__10042,r,s,k,idx){
return (function (p1__10035_SHARP_,p2__10036_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__10035_SHARP_,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p2__10036_SHARP_,x], 0)));
});})(found,vec__10042,r,s,k,idx))
,ret,found);
} else {
return ret;
}
});})(vec__10042,r,s,k,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
});

clojure.set.join.cljs$lang$maxFixedArity = 3;
/**
 * Is set1 a subset of set2?
 */
clojure.set.subset_QMARK_ = (function clojure$set$subset_QMARK_(set1,set2){
return ((cljs.core.count(set1) <= cljs.core.count(set2))) && (cljs.core.every_QMARK_((function (p1__10048_SHARP_){
return cljs.core.contains_QMARK_(set2,p1__10048_SHARP_);
}),set1));
});
/**
 * Is set1 a superset of set2?
 */
clojure.set.superset_QMARK_ = (function clojure$set$superset_QMARK_(set1,set2){
return ((cljs.core.count(set1) >= cljs.core.count(set2))) && (cljs.core.every_QMARK_((function (p1__10049_SHARP_){
return cljs.core.contains_QMARK_(set1,p1__10049_SHARP_);
}),set2));
});

//# sourceMappingURL=set.js.map