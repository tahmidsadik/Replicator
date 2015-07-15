// Compiled by ClojureScript 0.0-3479 {:static-fns true}
goog.provide('cljs.env');
goog.require('cljs.core');
cljs.env._STAR_compiler_STAR_ = null;
cljs.env.default_compiler_env = (function cljs$env$default_compiler_env(){
var args11194 = [];
var len__5623__auto___11198 = arguments.length;
var i__5624__auto___11199 = (0);
while(true){
if((i__5624__auto___11199 < len__5623__auto___11198)){
args11194.push((arguments[i__5624__auto___11199]));

var G__11200 = (i__5624__auto___11199 + (1));
i__5624__auto___11199 = G__11200;
continue;
} else {
}
break;
}

var G__11196 = args11194.length;
switch (G__11196) {
case 0:
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11194.length)].join('')));

}
});

cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
});

cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$1 = (function (options){
var G__11197 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),options], null)], 0));
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11197) : cljs.core.atom.call(null,G__11197));
});

cljs.env.default_compiler_env.cljs$lang$maxFixedArity = 1;

//# sourceMappingURL=env.js.map