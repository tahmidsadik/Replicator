// Compiled by ClojureScript 0.0-3464 {:static-fns true}
goog.provide('cljs.env');
goog.require('cljs.core');
cljs.env._STAR_compiler_STAR_ = null;
cljs.env.default_compiler_env = (function cljs$env$default_compiler_env(){
var args10960 = [];
var len__5200__auto___10964 = arguments.length;
var i__5201__auto___10965 = (0);
while(true){
if((i__5201__auto___10965 < len__5200__auto___10964)){
args10960.push((arguments[i__5201__auto___10965]));

var G__10966 = (i__5201__auto___10965 + (1));
i__5201__auto___10965 = G__10966;
continue;
} else {
}
break;
}

var G__10962 = args10960.length;
switch (G__10962) {
case 0:
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10960.length)].join('')));

}
});

cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$1 = (function (options){
var G__10963 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),options], null)], 0));
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10963) : cljs.core.atom.call(null,G__10963));
});

cljs.env.default_compiler_env.cljs$lang$maxFixedArity = 1;

//# sourceMappingURL=env.js.map