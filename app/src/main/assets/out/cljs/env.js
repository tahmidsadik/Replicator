// Compiled by ClojureScript 0.0-3464 {:static-fns true}
goog.provide('cljs.env');
goog.require('cljs.core');
cljs.env._STAR_compiler_STAR_ = null;
cljs.env.default_compiler_env = (function cljs$env$default_compiler_env(){
var args10665 = [];
var len__5112__auto___10669 = arguments.length;
var i__5113__auto___10670 = (0);
while(true){
if((i__5113__auto___10670 < len__5112__auto___10669)){
args10665.push((arguments[i__5113__auto___10670]));

var G__10671 = (i__5113__auto___10670 + (1));
i__5113__auto___10670 = G__10671;
continue;
} else {
}
break;
}

var G__10667 = args10665.length;
switch (G__10667) {
case 0:
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10665.length)].join('')));

}
});

cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$1 = (function (options){
var G__10668 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),options], null)], 0));
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10668) : cljs.core.atom.call(null,G__10668));
});

cljs.env.default_compiler_env.cljs$lang$maxFixedArity = 1;

//# sourceMappingURL=env.js.map