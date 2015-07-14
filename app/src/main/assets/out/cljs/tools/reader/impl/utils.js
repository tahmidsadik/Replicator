// Compiled by ClojureScript 0.0-3464 {:static-fns true}
goog.provide('cljs.tools.reader.impl.utils');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
cljs.tools.reader.impl.utils.char$ = (function cljs$tools$reader$impl$utils$char(x){
if((x == null)){
return null;
} else {
return cljs.core.char$(x);
}
});
cljs.tools.reader.impl.utils.ex_info_QMARK_ = (function cljs$tools$reader$impl$utils$ex_info_QMARK_(ex){
return (ex instanceof cljs.core.ExceptionInfo);
});

/**
* @constructor
* @param {*} splicing_QMARK_
* @param {*} form
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
cljs.tools.reader.impl.utils.ReaderConditional = (function (splicing_QMARK_,form,__meta,__extmap,__hash){
this.splicing_QMARK_ = splicing_QMARK_;
this.form = form;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4668__auto__,k__4669__auto__){
var self__ = this;
var this__4668__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4668__auto____$1,k__4669__auto__,null);
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4670__auto__,k8249,else__4671__auto__){
var self__ = this;
var this__4670__auto____$1 = this;
var G__8251 = (((k8249 instanceof cljs.core.Keyword))?k8249.fqn:null);
switch (G__8251) {
case "splicing?":
return self__.splicing_QMARK_;

break;
case "form":
return self__.form;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k8249,else__4671__auto__);

}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4682__auto__,writer__4683__auto__,opts__4684__auto__){
var self__ = this;
var this__4682__auto____$1 = this;
var pr_pair__4685__auto__ = ((function (this__4682__auto____$1){
return (function (keyval__4686__auto__){
return cljs.core.pr_sequential_writer(writer__4683__auto__,cljs.core.pr_writer,""," ","",opts__4684__auto__,keyval__4686__auto__);
});})(this__4682__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4683__auto__,pr_pair__4685__auto__,"#cljs.tools.reader.impl.utils.ReaderConditional{",", ","}",opts__4684__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),self__.splicing_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"form","form",-1624062471),self__.form],null))], null),self__.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4666__auto__){
var self__ = this;
var this__4666__auto____$1 = this;
return self__.__meta;
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4662__auto__){
var self__ = this;
var this__4662__auto____$1 = this;
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4672__auto__){
var self__ = this;
var this__4672__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4663__auto__){
var self__ = this;
var this__4663__auto____$1 = this;
var h__4489__auto__ = self__.__hash;
if(!((h__4489__auto__ == null))){
return h__4489__auto__;
} else {
var h__4489__auto____$1 = cljs.core.hash_imap(this__4663__auto____$1);
self__.__hash = h__4489__auto____$1;

return h__4489__auto____$1;
}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4664__auto__,other__4665__auto__){
var self__ = this;
var this__4664__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4061__auto__ = other__4665__auto__;
if(cljs.core.truth_(and__4061__auto__)){
var and__4061__auto____$1 = (this__4664__auto____$1.constructor === other__4665__auto__.constructor);
if(and__4061__auto____$1){
return cljs.core.equiv_map(this__4664__auto____$1,other__4665__auto__);
} else {
return and__4061__auto____$1;
}
} else {
return and__4061__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4677__auto__,k__4678__auto__){
var self__ = this;
var this__4677__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),null,new cljs.core.Keyword(null,"form","form",-1624062471),null], null), null),k__4678__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4677__auto____$1),self__.__meta),k__4678__auto__);
} else {
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4678__auto__)),null));
}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4675__auto__,k__4676__auto__,G__8248){
var self__ = this;
var this__4675__auto____$1 = this;
var pred__8252 = cljs.core.keyword_identical_QMARK_;
var expr__8253 = k__4676__auto__;
if(cljs.core.truth_((pred__8252.cljs$core$IFn$_invoke$arity$2 ? pred__8252.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),expr__8253) : pred__8252.call(null,new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),expr__8253)))){
return (new cljs.tools.reader.impl.utils.ReaderConditional(G__8248,self__.form,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__8252.cljs$core$IFn$_invoke$arity$2 ? pred__8252.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"form","form",-1624062471),expr__8253) : pred__8252.call(null,new cljs.core.Keyword(null,"form","form",-1624062471),expr__8253)))){
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,G__8248,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4676__auto__,G__8248),null));
}
}
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4680__auto__){
var self__ = this;
var this__4680__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),self__.splicing_QMARK_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"form","form",-1624062471),self__.form],null))], null),self__.__extmap));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4667__auto__,G__8248){
var self__ = this;
var this__4667__auto____$1 = this;
return (new cljs.tools.reader.impl.utils.ReaderConditional(self__.splicing_QMARK_,self__.form,G__8248,self__.__extmap,self__.__hash));
});

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4673__auto__,entry__4674__auto__){
var self__ = this;
var this__4673__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4674__auto__)){
return cljs.core._assoc(this__4673__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4674__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4674__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4673__auto____$1,entry__4674__auto__);
}
});

cljs.tools.reader.impl.utils.ReaderConditional.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"splicing?","splicing?",1211935161,null),new cljs.core.Symbol(null,"form","form",16469056,null)], null);
});

cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$type = true;

cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$ctorPrSeq = (function (this__4702__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs.tools.reader.impl.utils/ReaderConditional");
});

cljs.tools.reader.impl.utils.ReaderConditional.cljs$lang$ctorPrWriter = (function (this__4702__auto__,writer__4703__auto__){
return cljs.core._write(writer__4703__auto__,"cljs.tools.reader.impl.utils/ReaderConditional");
});

cljs.tools.reader.impl.utils.__GT_ReaderConditional = (function cljs$tools$reader$impl$utils$__GT_ReaderConditional(splicing_QMARK_,form){
return (new cljs.tools.reader.impl.utils.ReaderConditional(splicing_QMARK_,form,null,null,null));
});

cljs.tools.reader.impl.utils.map__GT_ReaderConditional = (function cljs$tools$reader$impl$utils$map__GT_ReaderConditional(G__8250){
return (new cljs.tools.reader.impl.utils.ReaderConditional(new cljs.core.Keyword(null,"splicing?","splicing?",-428596366).cljs$core$IFn$_invoke$arity$1(G__8250),new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(G__8250),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__8250,new cljs.core.Keyword(null,"splicing?","splicing?",-428596366),cljs.core.array_seq([new cljs.core.Keyword(null,"form","form",-1624062471)], 0)),null));
});

/**
 * Return true if the value is the data representation of a reader conditional
 */
cljs.tools.reader.impl.utils.reader_conditional_QMARK_ = (function cljs$tools$reader$impl$utils$reader_conditional_QMARK_(value){
return (value instanceof cljs.tools.reader.impl.utils.ReaderConditional);
});
/**
 * Construct a data representation of a reader conditional.
 * If true, splicing? indicates read-cond-splicing.
 */
cljs.tools.reader.impl.utils.reader_conditional = (function cljs$tools$reader$impl$utils$reader_conditional(form,splicing_QMARK_){
return (new cljs.tools.reader.impl.utils.ReaderConditional(splicing_QMARK_,form,null,null,null));
});
cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$ = true;

cljs.tools.reader.impl.utils.ReaderConditional.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var coll__$1 = this;
cljs.core._write(writer,[cljs.core.str("#?"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"splicing?","splicing?",-428596366).cljs$core$IFn$_invoke$arity$1(coll__$1))?"@":null))].join(''));

return cljs.core.pr_writer(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(coll__$1),writer,opts);
});
cljs.tools.reader.impl.utils.ws_rx = /[\s]/;
/**
 * Checks whether a given character is whitespace
 */
cljs.tools.reader.impl.utils.whitespace_QMARK_ = (function cljs$tools$reader$impl$utils$whitespace_QMARK_(ch){
if((ch == null)){
return null;
} else {
if((ch === ",")){
return true;
} else {
return cljs.tools.reader.impl.utils.ws_rx.test(ch);
}
}
});
/**
 * Checks whether a given character is numeric
 */
cljs.tools.reader.impl.utils.numeric_QMARK_ = (function cljs$tools$reader$impl$utils$numeric_QMARK_(ch){
if((ch == null)){
return null;
} else {
return goog.string.isNumeric(ch);
}
});
/**
 * Checks whether the character is a newline
 */
cljs.tools.reader.impl.utils.newline_QMARK_ = (function cljs$tools$reader$impl$utils$newline_QMARK_(c){
return (("\n" === c)) || (("\n" === c)) || ((c == null));
});
/**
 * Resolves syntactical sugar in metadata
 */
cljs.tools.reader.impl.utils.desugar_meta = (function cljs$tools$reader$impl$utils$desugar_meta(f){
if((f instanceof cljs.core.Keyword)){
return new cljs.core.PersistentArrayMap.fromArray([f,true], true, false);
} else {
if((f instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else {
if(typeof f === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),f], null);
} else {
return f;

}
}
}
});
cljs.tools.reader.impl.utils.last_id = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
cljs.tools.reader.impl.utils.next_id = (function cljs$tools$reader$impl$utils$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.tools.reader.impl.utils.last_id,cljs.core.inc);
});
var patterns_8264 = cljs.core.PersistentHashMap.fromArrays(["]","'","=","\"","!","*","%","|","~","/","-","?","&",":","<","{","}","[","#","^","\\","+","@",">"],["_RBRACK_","_SINGLEQUOTE_","_EQ_","_DOUBLEQUOTE_","_BANG_","_STAR_","_PERCENT_","_BAR_","_TILDE_","_SLASH_","_","_QMARK_","_AMPERSAND_","_COLON_","_LT_","_LBRACE_","_RBRACE_","_LBRACK_","_SHARP_","_CARET_","_BSLASH_","_PLUS_","_CIRCA_","_GT_"]);
cljs.tools.reader.impl.utils.munge = ((function (patterns_8264){
return (function cljs$tools$reader$impl$utils$munge(s){
return (((s instanceof cljs.core.Symbol))?cljs.core.symbol:cljs.core.str).call(null,(function (){var G__8261 = [cljs.core.str(s)].join('');
var vec__8262 = G__8261;
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8262,(0),null);
var s__$1 = cljs.core.nthnext(vec__8262,(1));
var ret = "";
var G__8261__$1 = G__8261;
var ret__$1 = ret;
while(true){
var vec__8263 = G__8261__$1;
var c__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__8263,(0),null);
var s__$2 = cljs.core.nthnext(vec__8263,(1));
var ret__$2 = ret__$1;
if(cljs.core.truth_(c__$1)){
var G__8265 = s__$2;
var G__8266 = [cljs.core.str(ret__$2),cljs.core.str((patterns_8264.cljs$core$IFn$_invoke$arity$2 ? patterns_8264.cljs$core$IFn$_invoke$arity$2(c__$1,c__$1) : patterns_8264.call(null,c__$1,c__$1)))].join('');
G__8261__$1 = G__8265;
ret__$1 = G__8266;
continue;
} else {
return ret__$2;
}
break;
}
})());
});})(patterns_8264))
;

//# sourceMappingURL=utils.js.map