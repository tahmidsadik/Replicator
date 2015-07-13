// Compiled by ClojureScript 0.0-3464 {:static-fns true}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare(this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare(this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv(other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.cognitect.transit.eq.hashCode.call(null,this$__$1));
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.cognitect.transit.eq.hashCode.call(null,this$__$1));
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return (com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.eq.hashCode.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.cognitect.transit.eq.hashCode.call(null,this$__$1));
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write(writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__8410_8414 = cljs.core.seq(cljs.core.js_keys(b));
var chunk__8411_8415 = null;
var count__8412_8416 = (0);
var i__8413_8417 = (0);
while(true){
if((i__8413_8417 < count__8412_8416)){
var k_8418 = chunk__8411_8415.cljs$core$IIndexed$_nth$arity$2(null,i__8413_8417);
var v_8419 = (b[k_8418]);
(a[k_8418] = v_8419);

var G__8420 = seq__8410_8414;
var G__8421 = chunk__8411_8415;
var G__8422 = count__8412_8416;
var G__8423 = (i__8413_8417 + (1));
seq__8410_8414 = G__8420;
chunk__8411_8415 = G__8421;
count__8412_8416 = G__8422;
i__8413_8417 = G__8423;
continue;
} else {
var temp__4425__auto___8424 = cljs.core.seq(seq__8410_8414);
if(temp__4425__auto___8424){
var seq__8410_8425__$1 = temp__4425__auto___8424;
if(cljs.core.chunked_seq_QMARK_(seq__8410_8425__$1)){
var c__4945__auto___8426 = cljs.core.chunk_first(seq__8410_8425__$1);
var G__8427 = cljs.core.chunk_rest(seq__8410_8425__$1);
var G__8428 = c__4945__auto___8426;
var G__8429 = cljs.core.count(c__4945__auto___8426);
var G__8430 = (0);
seq__8410_8414 = G__8427;
chunk__8411_8415 = G__8428;
count__8412_8416 = G__8429;
i__8413_8417 = G__8430;
continue;
} else {
var k_8431 = cljs.core.first(seq__8410_8425__$1);
var v_8432 = (b[k_8431]);
(a[k_8431] = v_8432);

var G__8433 = cljs.core.next(seq__8410_8425__$1);
var G__8434 = null;
var G__8435 = (0);
var G__8436 = (0);
seq__8410_8414 = G__8433;
chunk__8411_8415 = G__8434;
count__8412_8416 = G__8435;
i__8413_8417 = G__8436;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return (cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3 ? cljs.core.PersistentArrayMap.fromArray.cljs$core$IFn$_invoke$arity$3(arr,true,true) : cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true));
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4740__auto__,writer__4741__auto__,opt__4742__auto__){
return cljs.core._write(writer__4741__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_(v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return (cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2 ? cljs.core.PersistentVector.fromArray.cljs$core$IFn$_invoke$arity$2(arr,true) : cljs.core.PersistentVector.fromArray.call(null,arr,true));
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4740__auto__,writer__4741__auto__,opt__4742__auto__){
return cljs.core._write(writer__4741__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(){
var args8437 = [];
var len__5200__auto___8442 = arguments.length;
var i__5201__auto___8443 = (0);
while(true){
if((i__5201__auto___8443 < len__5200__auto___8442)){
args8437.push((arguments[i__5201__auto___8443]));

var G__8444 = (i__5201__auto___8443 + (1));
i__5201__auto___8443 = G__8444;
continue;
} else {
}
break;
}

var G__8439 = args8437.length;
switch (G__8439) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8437.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var G__8440 = cljs.core.name(type);
var G__8441 = cognitect.transit.opts_merge({"handlers": cljs.core.clj__GT_js(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, ["$",((function (G__8440){
return (function (v){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(v);
});})(G__8440))
,":",((function (G__8440){
return (function (v){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(v);
});})(G__8440))
,"set",((function (G__8440){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,v);
});})(G__8440))
,"list",((function (G__8440){
return (function (v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,v.reverse());
});})(G__8440))
,"cmap",((function (G__8440){
return (function (v){
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__8446 = (i + (2));
var G__8447 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,(v[i]),(v[(i + (1))]));
i = G__8446;
ret = G__8447;
continue;
} else {
return cljs.core.persistent_BANG_(ret);
}
break;
}
});})(G__8440))
], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)], 0))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"handlers","handlers",79528781))));
return (com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(G__8440,G__8441) : com.cognitect.transit.reader.call(null,G__8440,G__8441));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4740__auto__,writer__4741__auto__,opt__4742__auto__){
return cljs.core._write(writer__4741__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4740__auto__,writer__4741__auto__,opt__4742__auto__){
return cljs.core._write(writer__4741__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__8448_8452 = cljs.core.seq(v);
var chunk__8449_8453 = null;
var count__8450_8454 = (0);
var i__8451_8455 = (0);
while(true){
if((i__8451_8455 < count__8450_8454)){
var x_8456 = chunk__8449_8453.cljs$core$IIndexed$_nth$arity$2(null,i__8451_8455);
ret.push(x_8456);

var G__8457 = seq__8448_8452;
var G__8458 = chunk__8449_8453;
var G__8459 = count__8450_8454;
var G__8460 = (i__8451_8455 + (1));
seq__8448_8452 = G__8457;
chunk__8449_8453 = G__8458;
count__8450_8454 = G__8459;
i__8451_8455 = G__8460;
continue;
} else {
var temp__4425__auto___8461 = cljs.core.seq(seq__8448_8452);
if(temp__4425__auto___8461){
var seq__8448_8462__$1 = temp__4425__auto___8461;
if(cljs.core.chunked_seq_QMARK_(seq__8448_8462__$1)){
var c__4945__auto___8463 = cljs.core.chunk_first(seq__8448_8462__$1);
var G__8464 = cljs.core.chunk_rest(seq__8448_8462__$1);
var G__8465 = c__4945__auto___8463;
var G__8466 = cljs.core.count(c__4945__auto___8463);
var G__8467 = (0);
seq__8448_8452 = G__8464;
chunk__8449_8453 = G__8465;
count__8450_8454 = G__8466;
i__8451_8455 = G__8467;
continue;
} else {
var x_8468 = cljs.core.first(seq__8448_8462__$1);
ret.push(x_8468);

var G__8469 = cljs.core.next(seq__8448_8462__$1);
var G__8470 = null;
var G__8471 = (0);
var G__8472 = (0);
seq__8448_8452 = G__8469;
chunk__8449_8453 = G__8470;
count__8450_8454 = G__8471;
i__8451_8455 = G__8472;
continue;
}
} else {
}
}
break;
}

return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2("array",ret) : com.cognitect.transit.tagged.call(null,"array",ret));
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4740__auto__,writer__4741__auto__,opt__4742__auto__){
return cljs.core._write(writer__4741__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4740__auto__,writer__4741__auto__,opt__4742__auto__){
return cljs.core._write(writer__4741__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__8473_8477 = cljs.core.seq(v);
var chunk__8474_8478 = null;
var count__8475_8479 = (0);
var i__8476_8480 = (0);
while(true){
if((i__8476_8480 < count__8475_8479)){
var x_8481 = chunk__8474_8478.cljs$core$IIndexed$_nth$arity$2(null,i__8476_8480);
ret.push(x_8481);

var G__8482 = seq__8473_8477;
var G__8483 = chunk__8474_8478;
var G__8484 = count__8475_8479;
var G__8485 = (i__8476_8480 + (1));
seq__8473_8477 = G__8482;
chunk__8474_8478 = G__8483;
count__8475_8479 = G__8484;
i__8476_8480 = G__8485;
continue;
} else {
var temp__4425__auto___8486 = cljs.core.seq(seq__8473_8477);
if(temp__4425__auto___8486){
var seq__8473_8487__$1 = temp__4425__auto___8486;
if(cljs.core.chunked_seq_QMARK_(seq__8473_8487__$1)){
var c__4945__auto___8488 = cljs.core.chunk_first(seq__8473_8487__$1);
var G__8489 = cljs.core.chunk_rest(seq__8473_8487__$1);
var G__8490 = c__4945__auto___8488;
var G__8491 = cljs.core.count(c__4945__auto___8488);
var G__8492 = (0);
seq__8473_8477 = G__8489;
chunk__8474_8478 = G__8490;
count__8475_8479 = G__8491;
i__8476_8480 = G__8492;
continue;
} else {
var x_8493 = cljs.core.first(seq__8473_8487__$1);
ret.push(x_8493);

var G__8494 = cljs.core.next(seq__8473_8487__$1);
var G__8495 = null;
var G__8496 = (0);
var G__8497 = (0);
seq__8473_8477 = G__8494;
chunk__8474_8478 = G__8495;
count__8475_8479 = G__8496;
i__8476_8480 = G__8497;
continue;
}
} else {
}
}
break;
}

return (com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.tagged.cljs$core$IFn$_invoke$arity$2("array",ret) : com.cognitect.transit.tagged.call(null,"array",ret));
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4740__auto__,writer__4741__auto__,opt__4742__auto__){
return cljs.core._write(writer__4741__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__8498_8502 = cljs.core.seq(v);
var chunk__8499_8503 = null;
var count__8500_8504 = (0);
var i__8501_8505 = (0);
while(true){
if((i__8501_8505 < count__8500_8504)){
var x_8506 = chunk__8499_8503.cljs$core$IIndexed$_nth$arity$2(null,i__8501_8505);
ret.push(x_8506);

var G__8507 = seq__8498_8502;
var G__8508 = chunk__8499_8503;
var G__8509 = count__8500_8504;
var G__8510 = (i__8501_8505 + (1));
seq__8498_8502 = G__8507;
chunk__8499_8503 = G__8508;
count__8500_8504 = G__8509;
i__8501_8505 = G__8510;
continue;
} else {
var temp__4425__auto___8511 = cljs.core.seq(seq__8498_8502);
if(temp__4425__auto___8511){
var seq__8498_8512__$1 = temp__4425__auto___8511;
if(cljs.core.chunked_seq_QMARK_(seq__8498_8512__$1)){
var c__4945__auto___8513 = cljs.core.chunk_first(seq__8498_8512__$1);
var G__8514 = cljs.core.chunk_rest(seq__8498_8512__$1);
var G__8515 = c__4945__auto___8513;
var G__8516 = cljs.core.count(c__4945__auto___8513);
var G__8517 = (0);
seq__8498_8502 = G__8514;
chunk__8499_8503 = G__8515;
count__8500_8504 = G__8516;
i__8501_8505 = G__8517;
continue;
} else {
var x_8518 = cljs.core.first(seq__8498_8512__$1);
ret.push(x_8518);

var G__8519 = cljs.core.next(seq__8498_8512__$1);
var G__8520 = null;
var G__8521 = (0);
var G__8522 = (0);
seq__8498_8502 = G__8519;
chunk__8499_8503 = G__8520;
count__8500_8504 = G__8521;
i__8501_8505 = G__8522;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4740__auto__,writer__4741__auto__,opt__4742__auto__){
return cljs.core._write(writer__4741__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4740__auto__,writer__4741__auto__,opt__4742__auto__){
return cljs.core._write(writer__4741__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 * opts is a map containing a :handlers entry. :handlers is a map of
 * type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(){
var args8523 = [];
var len__5200__auto___8536 = arguments.length;
var i__5201__auto___8537 = (0);
while(true){
if((i__5201__auto___8537 < len__5200__auto___8536)){
args8523.push((arguments[i__5201__auto___8537]));

var G__8538 = (i__5201__auto___8537 + (1));
i__5201__auto___8537 = G__8538;
continue;
} else {
}
break;
}

var G__8525 = args8523.length;
switch (G__8525) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8523.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)], 0));
var G__8526 = cljs.core.name(type);
var G__8527 = cognitect.transit.opts_merge({"objectBuilder": ((function (G__8526,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv(((function (G__8526,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__8528 = obj;
G__8528.push((kfn.cljs$core$IFn$_invoke$arity$1 ? kfn.cljs$core$IFn$_invoke$arity$1(k) : kfn.call(null,k)),(vfn.cljs$core$IFn$_invoke$arity$1 ? vfn.cljs$core$IFn$_invoke$arity$1(v) : vfn.call(null,v)));

return G__8528;
});})(G__8526,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(G__8526,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x8529 = cljs.core.clone(handlers);
x8529.forEach = ((function (x8529,G__8526,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__8530 = cljs.core.seq(coll);
var chunk__8531 = null;
var count__8532 = (0);
var i__8533 = (0);
while(true){
if((i__8533 < count__8532)){
var vec__8534 = chunk__8531.cljs$core$IIndexed$_nth$arity$2(null,i__8533);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8534,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8534,(1),null);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,k) : f.call(null,v,k));

var G__8540 = seq__8530;
var G__8541 = chunk__8531;
var G__8542 = count__8532;
var G__8543 = (i__8533 + (1));
seq__8530 = G__8540;
chunk__8531 = G__8541;
count__8532 = G__8542;
i__8533 = G__8543;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__8530);
if(temp__4425__auto__){
var seq__8530__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__8530__$1)){
var c__4945__auto__ = cljs.core.chunk_first(seq__8530__$1);
var G__8544 = cljs.core.chunk_rest(seq__8530__$1);
var G__8545 = c__4945__auto__;
var G__8546 = cljs.core.count(c__4945__auto__);
var G__8547 = (0);
seq__8530 = G__8544;
chunk__8531 = G__8545;
count__8532 = G__8546;
i__8533 = G__8547;
continue;
} else {
var vec__8535 = cljs.core.first(seq__8530__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8535,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8535,(1),null);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(v,k) : f.call(null,v,k));

var G__8548 = cljs.core.next(seq__8530__$1);
var G__8549 = null;
var G__8550 = (0);
var G__8551 = (0);
seq__8530 = G__8548;
chunk__8531 = G__8549;
count__8532 = G__8550;
i__8533 = G__8551;
continue;
}
} else {
return null;
}
}
break;
}
});})(x8529,G__8526,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x8529;
})(), "unpack": ((function (G__8526,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(G__8526,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(opts,new cljs.core.Keyword(null,"handlers","handlers",79528781))));
return (com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(G__8526,G__8527) : com.cognitect.transit.writer.call(null,G__8526,G__8527));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(){
var args8552 = [];
var len__5200__auto___8558 = arguments.length;
var i__5201__auto___8559 = (0);
while(true){
if((i__5201__auto___8559 < len__5200__auto___8558)){
args8552.push((arguments[i__5201__auto___8559]));

var G__8560 = (i__5201__auto___8559 + (1));
i__5201__auto___8559 = G__8560;
continue;
} else {
}
break;
}

var G__8554 = args8552.length;
switch (G__8554) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8552.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4(tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t8555 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t8555 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta8556){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta8556 = meta8556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t8555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8557,meta8556__$1){
var self__ = this;
var _8557__$1 = this;
return (new cognitect.transit.t8555(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta8556__$1));
});

cognitect.transit.t8555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8557){
var self__ = this;
var _8557__$1 = this;
return self__.meta8556;
});

cognitect.transit.t8555.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return (self__.tag_fn.cljs$core$IFn$_invoke$arity$1 ? self__.tag_fn.cljs$core$IFn$_invoke$arity$1(o) : self__.tag_fn.call(null,o));
});

cognitect.transit.t8555.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return (self__.rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.rep_fn.cljs$core$IFn$_invoke$arity$1(o) : self__.rep_fn.call(null,o));
});

cognitect.transit.t8555.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return (self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1 ? self__.str_rep_fn.cljs$core$IFn$_invoke$arity$1(o) : self__.str_rep_fn.call(null,o));
} else {
return null;
}
});

cognitect.transit.t8555.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return (self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0 ? self__.verbose_handler_fn.cljs$core$IFn$_invoke$arity$0() : self__.verbose_handler_fn.call(null));
} else {
return null;
}
});

cognitect.transit.t8555.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta8556","meta8556",-2007854187,null)], null);
});

cognitect.transit.t8555.cljs$lang$type = true;

cognitect.transit.t8555.cljs$lang$ctorStr = "cognitect.transit/t8555";

cognitect.transit.t8555.cljs$lang$ctorPrWriter = (function (this__4740__auto__,writer__4741__auto__,opt__4742__auto__){
return cljs.core._write(writer__4741__auto__,"cognitect.transit/t8555");
});

cognitect.transit.__GT_t8555 = (function cognitect$transit$__GT_t8555(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta8556){
return (new cognitect.transit.t8555(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta8556));
});

}

return (new cognitect.transit.t8555(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return (com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2 ? com.cognitect.transit.types.taggedValue.cljs$core$IFn$_invoke$arity$2(tag,rep) : com.cognitect.transit.types.taggedValue.call(null,tag,rep));
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return (com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isTaggedValue.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isTaggedValue.call(null,x));
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 * in the 53bit integer range, a goog.math.Long instance if above. s
 * may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return (com.cognitect.transit.types.intValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.intValue.cljs$core$IFn$_invoke$arity$1(s) : com.cognitect.transit.types.intValue.call(null,s));
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 * range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return (com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isInteger.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isInteger.call(null,x));
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return (com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigInteger.cljs$core$IFn$_invoke$arity$1(s) : com.cognitect.transit.types.bigInteger.call(null,s));
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return (com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigInteger.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isBigInteger.call(null,x));
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return (com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.bigDecimalValue.cljs$core$IFn$_invoke$arity$1(s) : com.cognitect.transit.types.bigDecimalValue.call(null,s));
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return (com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBigDecimal.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isBigDecimal.call(null,x));
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return (com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uri.cljs$core$IFn$_invoke$arity$1(s) : com.cognitect.transit.types.uri.call(null,s));
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return (com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isURI.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isURI.call(null,x));
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return (com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.uuid.cljs$core$IFn$_invoke$arity$1(s) : com.cognitect.transit.types.uuid.call(null,s));
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
return (com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isUUID.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isUUID.call(null,x));
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return (com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.binary.cljs$core$IFn$_invoke$arity$1(s) : com.cognitect.transit.types.binary.call(null,s));
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return (com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isBinary.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isBinary.call(null,x));
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return (com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.quoted.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.quoted.call(null,x));
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return (com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isQuoted.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isQuoted.call(null,x));
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return (com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.link.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.link.call(null,x));
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return (com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1 ? com.cognitect.transit.types.isLink.cljs$core$IFn$_invoke$arity$1(x) : com.cognitect.transit.types.isLink.call(null,x));
});

//# sourceMappingURL=transit.js.map