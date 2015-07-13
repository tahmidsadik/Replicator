// Compiled by ClojureScript 0.0-3464 {:static-fns true}
goog.provide('cljs.source_map');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.source_map.base64_vlq');
/**
 * Take a seq of source file names and return a map from
 * file number to integer index. For reverse source maps.
 */
cljs.source_map.indexed_sources = (function cljs$source_map$indexed_sources(sources){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__9932){
var vec__9933 = p__9932;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9933,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9933,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,v,i);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (a,b){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);
}),sources));
});
/**
 * Take a seq of source file names and return a comparator
 * that can be used to construct a sorted map. For reverse
 * source maps.
 */
cljs.source_map.source_compare = (function cljs$source_map$source_compare(sources){
var sources__$1 = cljs.source_map.indexed_sources(sources);
return ((function (sources__$1){
return (function (a,b){
return cljs.core.compare((sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(a) : sources__$1.call(null,a)),(sources__$1.cljs$core$IFn$_invoke$arity$1 ? sources__$1.cljs$core$IFn$_invoke$arity$1(b) : sources__$1.call(null,b)));
});
;})(sources__$1))
});
/**
 * Take a source map segment represented as a vector
 * and return a map.
 */
cljs.source_map.seg__GT_map = (function cljs$source_map$seg__GT_map(seg,source_map){
var vec__9935 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9935,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9935,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9935,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9935,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9935,(4),null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol,new cljs.core.Keyword(null,"source","source",-433931539),((source_map["sources"][source]).split("?")[(0)]),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"name","name",1843675177),(function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(seg));
if(cljs.core.truth_(temp__4425__auto__)){
var name__$1 = temp__4425__auto__;
return (source_map["names"][name__$1]);
} else {
return null;
}
})()], null);
});
/**
 * Combine a source map segment vector and a relative
 * source map segment vector and combine them to get
 * an absolute segment posititon information as a vector.
 */
cljs.source_map.seg_combine = (function cljs$source_map$seg_combine(seg,relseg){
var vec__9938 = seg;
var gcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9938,(0),null);
var source = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9938,(1),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9938,(2),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9938,(3),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9938,(4),null);
var vec__9939 = relseg;
var rgcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9939,(0),null);
var rsource = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9939,(1),null);
var rline = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9939,(2),null);
var rcol = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9939,(3),null);
var rname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9939,(4),null);
var nseg = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(gcol + rgcol),((function (){var or__4161__auto__ = source;
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return (0);
}
})() + rsource),((function (){var or__4161__auto__ = line;
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return (0);
}
})() + rline),((function (){var or__4161__auto__ = col;
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return (0);
}
})() + rcol),((function (){var or__4161__auto__ = name;
if(cljs.core.truth_(or__4161__auto__)){
return or__4161__auto__;
} else {
return (0);
}
})() + rname)], null);
if(cljs.core.truth_(name)){
return cljs.core.with_meta(nseg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(name + rname)], null));
} else {
return nseg;
}
});
/**
 * Helper for decode-reverse. Take a reverse source map and
 * update it with a segment map.
 */
cljs.source_map.update_reverse_result = (function cljs$source_map$update_reverse_result(result,segmap,gline){
var map__9941 = segmap;
var map__9941__$1 = ((cljs.core.seq_QMARK_(map__9941))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9941):map__9941);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9941__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9941__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9941__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9941__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9941__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gline","gline",-1086242431),gline,new cljs.core.Keyword(null,"gcol","gcol",309250807),gcol], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__9941,map__9941__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__9941,map__9941__$1,gcol,source,line,col,name,d,d__$1){
return (function (m__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [col], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__9941,map__9941__$1,gcol,source,line,col,name,d,d__$1){
return (function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,d__$1);
});})(map__9941,map__9941__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__9941,map__9941__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});})(map__9941,map__9941__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a reverse source map
 * mapping original ClojureScript source locations to the generated
 * JavaScript.
 */
cljs.source_map.decode_reverse = (function cljs$source_map$decode_reverse(){
var args9942 = [];
var len__5200__auto___9946 = arguments.length;
var i__5201__auto___9947 = (0);
while(true){
if((i__5201__auto___9947 < len__5200__auto___9946)){
args9942.push((arguments[i__5201__auto___9947]));

var G__9948 = (i__5201__auto___9947 + (1));
i__5201__auto___9947 = G__9948;
continue;
} else {
}
break;
}

var G__9944 = args9942.length;
switch (G__9944) {
case 1:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9942.length)].join('')));

}
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2((source_map["mappings"]),source_map);
});

cljs.source_map.decode_reverse.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = (source_map["sources"]);
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.sorted_map_by(cljs.source_map.source_compare(sources));
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__9945 = (cljs.core.truth_(clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__9950 = cljs.core.next(segs__$1);
var G__9951 = nrelseg;
var G__9952 = cljs.source_map.update_reverse_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__9950;
relseg__$1 = G__9951;
result__$1 = G__9952;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9945,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9945,(1),null);
var G__9953 = (gline + (1));
var G__9954 = cljs.core.next(lines__$1);
var G__9955 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__9956 = result__$1;
gline = G__9953;
lines__$1 = G__9954;
relseg = G__9955;
result = G__9956;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode_reverse.cljs$lang$maxFixedArity = 2;
/**
 * Helper for decode. Take a source map and update it based on a
 * segment map.
 */
cljs.source_map.update_result = (function cljs$source_map$update_result(result,segmap,gline){
var map__9959 = segmap;
var map__9959__$1 = ((cljs.core.seq_QMARK_(map__9959))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9959):map__9959);
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9959__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9959__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9959__$1,new cljs.core.Keyword(null,"line","line",212345235));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9959__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9959__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var d = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),col,new cljs.core.Keyword(null,"source","source",-433931539),source], null);
var d__$1 = (cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(d,new cljs.core.Keyword(null,"name","name",1843675177),name):d);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__9959,map__9959__$1,gcol,source,line,col,name,d,d__$1){
return (function (m){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gcol], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(((function (map__9959,map__9959__$1,gcol,source,line,col,name,d,d__$1){
return (function (p1__9957_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__9957_SHARP_,d__$1);
});})(map__9959,map__9959__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.PersistentVector.EMPTY));
});})(map__9959,map__9959__$1,gcol,source,line,col,name,d,d__$1))
,cljs.core.sorted_map()));
});
/**
 * Convert a v3 source map JSON object into a source map mapping
 * generated JavaScript source locations to the original
 * ClojureScript.
 */
cljs.source_map.decode = (function cljs$source_map$decode(){
var args9960 = [];
var len__5200__auto___9964 = arguments.length;
var i__5201__auto___9965 = (0);
while(true){
if((i__5201__auto___9965 < len__5200__auto___9964)){
args9960.push((arguments[i__5201__auto___9965]));

var G__9966 = (i__5201__auto___9965 + (1));
i__5201__auto___9965 = G__9966;
continue;
} else {
}
break;
}

var G__9962 = args9960.length;
switch (G__9962) {
case 1:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9960.length)].join('')));

}
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$1 = (function (source_map){
return cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2((source_map["mappings"]),source_map);
});

cljs.source_map.decode.cljs$core$IFn$_invoke$arity$2 = (function (mappings,source_map){
var sources = (source_map["sources"]);
var relseg_init = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null);
var lines = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mappings,/;/));
var gline = (0);
var lines__$1 = lines;
var relseg = relseg_init;
var result = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(lines__$1){
var line = cljs.core.first(lines__$1);
var vec__9963 = (cljs.core.truth_(clojure.string.blank_QMARK_(line))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,relseg], null):(function (){var segs = cljs.core.seq(clojure.string.split.cljs$core$IFn$_invoke$arity$2(line,/,/));
var segs__$1 = segs;
var relseg__$1 = relseg;
var result__$1 = result;
while(true){
if(segs__$1){
var seg = cljs.core.first(segs__$1);
var nrelseg = cljs.source_map.seg_combine(cljs.source_map.base64_vlq.decode(seg),relseg__$1);
var G__9968 = cljs.core.next(segs__$1);
var G__9969 = nrelseg;
var G__9970 = cljs.source_map.update_result(result__$1,cljs.source_map.seg__GT_map(nrelseg,source_map),gline);
segs__$1 = G__9968;
relseg__$1 = G__9969;
result__$1 = G__9970;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [result__$1,relseg__$1], null);
}
break;
}
})());
var result__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9963,(0),null);
var relseg__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9963,(1),null);
var G__9971 = (gline + (1));
var G__9972 = cljs.core.next(lines__$1);
var G__9973 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(relseg__$1,(0),(0));
var G__9974 = result__$1;
gline = G__9971;
lines__$1 = G__9972;
relseg = G__9973;
result = G__9974;
continue;
} else {
return result;
}
break;
}
});

cljs.source_map.decode.cljs$lang$maxFixedArity = 2;
/**
 * Merge an internal source map representation of a single
 * ClojureScript file mapping original to generated with a
 * second source map mapping original JS to generated JS.
 * The is to support source maps that work through multiple
 * compilation steps like Google Closure optimization passes.
 */
cljs.source_map.merge_source_maps = (function cljs$source_map$merge_source_maps(cljs_map,js_map){
var line_map_seq = cljs.core.seq(cljs_map);
var new_lines = cljs.core.sorted_map();
while(true){
if(line_map_seq){
var vec__9979 = cljs.core.first(line_map_seq);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9979,(0),null);
var col_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9979,(1),null);
var new_cols = (function (){var col_map_seq = cljs.core.seq(col_map);
var new_cols = cljs.core.sorted_map();
while(true){
if(col_map_seq){
var vec__9980 = cljs.core.first(col_map_seq);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9980,(0),null);
var infos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9980,(1),null);
var G__9983 = cljs.core.next(col_map_seq);
var G__9984 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_cols,col,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (col_map_seq,new_cols,line_map_seq,new_lines,vec__9980,col,infos,vec__9979,line,col_map){
return (function (v,p__9981){
var map__9982 = p__9981;
var map__9982__$1 = ((cljs.core.seq_QMARK_(map__9982))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9982):map__9982);
var gline = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9982__$1,new cljs.core.Keyword(null,"gline","gline",-1086242431));
var gcol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9982__$1,new cljs.core.Keyword(null,"gcol","gcol",309250807));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(js_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gline,gcol], null)));
});})(col_map_seq,new_cols,line_map_seq,new_lines,vec__9980,col,infos,vec__9979,line,col_map))
,cljs.core.PersistentVector.EMPTY,infos));
col_map_seq = G__9983;
new_cols = G__9984;
continue;
} else {
return new_cols;
}
break;
}
})();
var G__9985 = cljs.core.next(line_map_seq);
var G__9986 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_lines,line,new_cols);
line_map_seq = G__9985;
new_lines = G__9986;
continue;
} else {
return new_lines;
}
break;
}
});

//# sourceMappingURL=source_map.js.map