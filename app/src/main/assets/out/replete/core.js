// Compiled by ClojureScript 0.0-3464 {:static-fns true}
goog.provide('replete.core');
goog.require('cljs.core');
goog.require('cljs.compiler');
goog.require('cljs.tools.reader');
goog.require('cljs.tagged_literals');
goog.require('cljs.tools.reader.reader_types');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('cljs.pprint');
goog.require('clojure.string');
goog.require('cljs.repl');
replete.core.DEBUG = true;
replete.core.cenv = (function (){var _ = eval("goog.require('cljs.cache')");
var env = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null)], null),cljs.cache.core);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.Symbol(null,"cljs.core$macros","cljs.core$macros",-2057787548,null)], null),cljs.cache.core$macros);

return env;
})();
replete.core.setup_cljs_user = (function replete$core$setup_cljs_user(){
eval("goog.provide('cljs.user')");

return eval("goog.require('cljs.core')");
});
goog.exportSymbol('replete.core.setup_cljs_user', replete.core.setup_cljs_user);
replete.core.app_env = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
replete.core.map_keys = (function replete$core$map_keys(f,m){
return cljs.core.reduce_kv((function (r,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
replete.core.init_app_env = (function replete$core$init_app_env(app_env){
var G__5972 = replete.core.app_env;
var G__5973 = replete.core.map_keys(cljs.core.keyword,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(app_env));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__5972,G__5973) : cljs.core.reset_BANG_.call(null,G__5972,G__5973));
});
goog.exportSymbol('replete.core.init_app_env', replete.core.init_app_env);
/**
 * Returns true iff the interface idiom is iPad.
 */
replete.core.user_interface_idiom_ipad_QMARK_ = (function replete$core$user_interface_idiom_ipad_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("iPad",new cljs.core.Keyword(null,"user-interface-idiom","user-interface-idiom",135724408).cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(replete.core.app_env) : cljs.core.deref.call(null,replete.core.app_env))));
});
replete.core.repl_read_string = (function replete$core$repl_read_string(line){
return cljs.tools.reader.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-cond","read-cond",1056899244),new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs","cljs",1492417629),null], null), null)], null),line);
});
replete.core.is_readable_QMARK_ = (function replete$core$is_readable_QMARK_(line){
var _STAR_data_readers_STAR_5977 = cljs.tools.reader._STAR_data_readers_STAR_;
cljs.tools.reader._STAR_data_readers_STAR_ = cljs.tagged_literals._STAR_cljs_data_readers_STAR_;

try{var env__5187__auto__ = replete.core.cenv;
var env__5187__auto____$1 = ((cljs.core.map_QMARK_(env__5187__auto__))?(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(env__5187__auto__) : cljs.core.atom.call(null,env__5187__auto__)):((((env__5187__auto__ instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(env__5187__auto__) : cljs.core.deref.call(null,env__5187__auto__)))))?env__5187__auto__:(function(){throw (new Error([cljs.core.str("Compiler environment must be a map or atom containing a map, not "),cljs.core.str(cljs.core.type(env__5187__auto__))].join('')))})()
));
var _STAR_compiler_STAR_5978 = cljs.env._STAR_compiler_STAR_;
cljs.env._STAR_compiler_STAR_ = env__5187__auto____$1;

try{try{replete.core.repl_read_string(line);

return true;
}catch (e5979){var _ = e5979;
return false;
}}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_5978;
}}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_5977;
}});
goog.exportSymbol('replete.core.is_readable_QMARK_', replete.core.is_readable_QMARK_);
replete.core.current_ns = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)) : cljs.core.atom.call(null,new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)));
replete.core.ns_form_QMARK_ = (function replete$core$ns_form_QMARK_(form){
return (cljs.core.seq_QMARK_(form)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"ns","ns",2082130287,null),cljs.core.first(form)));
});
replete.core.repl_specials = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"doc","doc",-741138878,null),null,new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),null], null), null);
replete.core.repl_special_QMARK_ = (function replete$core$repl_special_QMARK_(form){
var and__4061__auto__ = cljs.core.seq_QMARK_(form);
if(and__4061__auto__){
var G__5983 = cljs.core.first(form);
return (replete.core.repl_specials.cljs$core$IFn$_invoke$arity$1 ? replete.core.repl_specials.cljs$core$IFn$_invoke$arity$1(G__5983) : replete.core.repl_specials.call(null,G__5983));
} else {
return and__4061__auto__;
}
});
replete.core.repl_special_doc_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Sets *cljs-ns* to the namespace named by the symbol, creating it if needed."], null),new cljs.core.Symbol(null,"doc","doc",-741138878,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Prints documentation for a var or special form given its name"], null)], null);
replete.core.repl_special_doc = (function replete$core$repl_special_doc(name_symbol){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic((replete.core.repl_special_doc_map.cljs$core$IFn$_invoke$arity$1 ? replete.core.repl_special_doc_map.cljs$core$IFn$_invoke$arity$1(name_symbol) : replete.core.repl_special_doc_map.call(null,name_symbol)),new cljs.core.Keyword(null,"name","name",1843675177),name_symbol,cljs.core.array_seq([new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725),true], 0));
});
replete.core.reflow = (function replete$core$reflow(text){
var and__4061__auto__ = text;
if(cljs.core.truth_(and__4061__auto__)){
return clojure.string.replace(clojure.string.replace(text,/ \n  /,""),/\n  /," ");
} else {
return and__4061__auto__;
}
});
/**
 * Given an analysis environment resolve a var. Analogous to
 * clojure.core/resolve
 */
replete.core.resolve = (function replete$core$resolve(env,sym){
if(cljs.core.map_QMARK_(env)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"env","env",-175281708,null))], 0)))].join('')));
}

if((sym instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),new cljs.core.Symbol(null,"sym","sym",195671222,null))], 0)))].join('')));
}

try{return cljs.analyzer.resolve_var.cljs$core$IFn$_invoke$arity$3(env,sym,cljs.analyzer.confirm_var_exists_throw());
}catch (e5985){var _ = e5985;
return cljs.analyzer.resolve_macro_var(env,sym);
}});
replete.core.read_eval_print = (function replete$core$read_eval_print(line){
var _STAR_cljs_ns_STAR_5998 = cljs.analyzer._STAR_cljs_ns_STAR_;
var _STAR_ns_STAR_5999 = cljs.core._STAR_ns_STAR_;
var _STAR_data_readers_STAR_6000 = cljs.tools.reader._STAR_data_readers_STAR_;
cljs.analyzer._STAR_cljs_ns_STAR_ = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(replete.core.current_ns) : cljs.core.deref.call(null,replete.core.current_ns));

cljs.core._STAR_ns_STAR_ = cljs.core.create_ns.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(replete.core.current_ns) : cljs.core.deref.call(null,replete.core.current_ns)));

cljs.tools.reader._STAR_data_readers_STAR_ = cljs.tagged_literals._STAR_cljs_data_readers_STAR_;

try{var env__5187__auto__ = replete.core.cenv;
var env__5187__auto____$1 = ((cljs.core.map_QMARK_(env__5187__auto__))?(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(env__5187__auto__) : cljs.core.atom.call(null,env__5187__auto__)):((((env__5187__auto__ instanceof cljs.core.Atom)) && (cljs.core.map_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(env__5187__auto__) : cljs.core.deref.call(null,env__5187__auto__)))))?env__5187__auto__:(function(){throw (new Error([cljs.core.str("Compiler environment must be a map or atom containing a map, not "),cljs.core.str(cljs.core.type(env__5187__auto__))].join('')))})()
));
var _STAR_compiler_STAR_6001 = cljs.env._STAR_compiler_STAR_;
cljs.env._STAR_compiler_STAR_ = env__5187__auto____$1;

try{var env = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.analyzer.empty_env(),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.Keyword(null,"expr","expr",745722291),cljs.core.array_seq([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(replete.core.current_ns) : cljs.core.deref.call(null,replete.core.current_ns))], null),new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320),true], 0));
try{var _ = (cljs.core.truth_(replete.core.DEBUG)?cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["line:",line], 0)):null);
var form = replete.core.repl_read_string(line);
if(cljs.core.truth_(replete.core.repl_special_QMARK_(form))){
var G__6003 = cljs.core.first(form);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__6003)){
var G__6004 = replete.core.current_ns;
var G__6005 = cljs.core.second(cljs.core.second(form));
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__6004,G__6005) : cljs.core.reset_BANG_.call(null,G__6004,G__6005));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"doc","doc",-741138878,null),G__6003)){
if(cljs.core.truth_((function (){var G__6006 = cljs.core.second(form);
return (replete.core.repl_specials.cljs$core$IFn$_invoke$arity$1 ? replete.core.repl_specials.cljs$core$IFn$_invoke$arity$1(G__6006) : replete.core.repl_specials.call(null,G__6006));
})())){
return cljs.repl.print_doc(replete.core.repl_special_doc(cljs.core.second(form)));
} else {
return cljs.repl.print_doc((function (){var sym = cljs.core.second(form);
var var$ = replete.core.resolve(env,sym);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"doc","doc",1913296891),(cljs.core.truth_(replete.core.user_interface_idiom_ipad_QMARK_())?cljs.core.identity:replete.core.reflow));
})());
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.first(form))].join('')));

}
}
} else {
var ___$1 = (cljs.core.truth_(replete.core.DEBUG)?cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["form:",form], 0)):null);
var ast = cljs.analyzer.analyze.cljs$core$IFn$_invoke$arity$2(env,form);
var ___$2 = (cljs.core.truth_(replete.core.DEBUG)?cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["ast:",ast], 0)):null);
var js = (function (){var sb__5028__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_6007_6010 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_6008_6011 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_6007_6010,_STAR_print_fn_STAR_6008_6011,sb__5028__auto__,___$1,ast,___$2,_,form,env,_STAR_compiler_STAR_6001,env__5187__auto__,env__5187__auto____$1,_STAR_cljs_ns_STAR_5998,_STAR_ns_STAR_5999,_STAR_data_readers_STAR_6000){
return (function (x__5029__auto__){
return sb__5028__auto__.append(x__5029__auto__);
});})(_STAR_print_newline_STAR_6007_6010,_STAR_print_fn_STAR_6008_6011,sb__5028__auto__,___$1,ast,___$2,_,form,env,_STAR_compiler_STAR_6001,env__5187__auto__,env__5187__auto____$1,_STAR_cljs_ns_STAR_5998,_STAR_ns_STAR_5999,_STAR_data_readers_STAR_6000))
;

try{var val__5193__auto___6012 = cljs.env._STAR_compiler_STAR_;
if((val__5193__auto___6012 == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();
} else {
}

try{cljs.compiler.emit(ast);
}finally {if((val__5193__auto___6012 == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_6008_6011;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_6007_6010;
}
return [cljs.core.str(sb__5028__auto__)].join('');
})();
var ___$3 = (cljs.core.truth_(replete.core.DEBUG)?cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["js:",js], 0)):null);
try{return cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var ret = eval(js);
if(cljs.core.truth_((function (){var or__4073__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"*2","*2",1728229926,null),null,new cljs.core.Symbol(null,"*1","*1",2110258092,null),null,new cljs.core.Symbol(null,"*e","*e",329170866,null),null,new cljs.core.Symbol(null,"*3","*3",105062009,null),null], null), null).call(null,form);
if(cljs.core.truth_(or__4073__auto__)){
return or__4073__auto__;
} else {
return replete.core.ns_form_QMARK_(form);
}
})())){
} else {
cljs.core._STAR_3 = cljs.core._STAR_2;

cljs.core._STAR_2 = cljs.core._STAR_1;

cljs.core._STAR_1 = ret;
}

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(replete.core.current_ns,cljs.analyzer._STAR_cljs_ns_STAR_) : cljs.core.reset_BANG_.call(null,replete.core.current_ns,cljs.analyzer._STAR_cljs_ns_STAR_));

return ret;
})()], 0));
}catch (e6009){if((e6009 instanceof Error)){
var e = e6009;
cljs.core._STAR_e = e;

return cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e.message,"\n",cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(e.stack,/eval code/))], 0));
} else {
throw e6009;

}
}}
}catch (e6002){if((e6002 instanceof Error)){
var e = e6002;
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([e.message], 0));
} else {
throw e6002;

}
}}finally {cljs.env._STAR_compiler_STAR_ = _STAR_compiler_STAR_6001;
}}finally {cljs.tools.reader._STAR_data_readers_STAR_ = _STAR_data_readers_STAR_6000;

cljs.core._STAR_ns_STAR_ = _STAR_ns_STAR_5999;

cljs.analyzer._STAR_cljs_ns_STAR_ = _STAR_cljs_ns_STAR_5998;
}});
goog.exportSymbol('replete.core.read_eval_print', replete.core.read_eval_print);

//# sourceMappingURL=core.js.map