// Compiled by ClojureScript 1.10.339 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__2340__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__2337 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__2338 = cljs.core.seq.call(null,vec__2337);
var first__2339 = cljs.core.first.call(null,seq__2338);
var seq__2338__$1 = cljs.core.next.call(null,seq__2338);
var tag = first__2339;
var body = seq__2338__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__2340 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__2341__i = 0, G__2341__a = new Array(arguments.length -  0);
while (G__2341__i < G__2341__a.length) {G__2341__a[G__2341__i] = arguments[G__2341__i + 0]; ++G__2341__i;}
  args = new cljs.core.IndexedSeq(G__2341__a,0,null);
} 
return G__2340__delegate.call(this,args);};
G__2340.cljs$lang$maxFixedArity = 0;
G__2340.cljs$lang$applyTo = (function (arglist__2342){
var args = cljs.core.seq(arglist__2342);
return G__2340__delegate(args);
});
G__2340.cljs$core$IFn$_invoke$arity$variadic = G__2340__delegate;
return G__2340;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4324__auto__ = (function sablono$core$update_arglists_$_iter__2343(s__2344){
return (new cljs.core.LazySeq(null,(function (){
var s__2344__$1 = s__2344;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__2344__$1);
if(temp__5457__auto__){
var s__2344__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2344__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__2344__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__2346 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__2345 = (0);
while(true){
if((i__2345 < size__4323__auto__)){
var args = cljs.core._nth.call(null,c__4322__auto__,i__2345);
cljs.core.chunk_append.call(null,b__2346,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__2347 = (i__2345 + (1));
i__2345 = G__2347;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2346),sablono$core$update_arglists_$_iter__2343.call(null,cljs.core.chunk_rest.call(null,s__2344__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2346),null);
}
} else {
var args = cljs.core.first.call(null,s__2344__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__2343.call(null,cljs.core.rest.call(null,s__2344__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4534__auto__ = [];
var len__4531__auto___2353 = arguments.length;
var i__4532__auto___2354 = (0);
while(true){
if((i__4532__auto___2354 < len__4531__auto___2353)){
args__4534__auto__.push((arguments[i__4532__auto___2354]));

var G__2355 = (i__4532__auto___2354 + (1));
i__4532__auto___2354 = G__2355;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4324__auto__ = (function sablono$core$iter__2349(s__2350){
return (new cljs.core.LazySeq(null,(function (){
var s__2350__$1 = s__2350;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__2350__$1);
if(temp__5457__auto__){
var s__2350__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2350__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__2350__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__2352 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__2351 = (0);
while(true){
if((i__2351 < size__4323__auto__)){
var style = cljs.core._nth.call(null,c__4322__auto__,i__2351);
cljs.core.chunk_append.call(null,b__2352,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__2356 = (i__2351 + (1));
i__2351 = G__2356;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2352),sablono$core$iter__2349.call(null,cljs.core.chunk_rest.call(null,s__2350__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2352),null);
}
} else {
var style = cljs.core.first.call(null,s__2350__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__2349.call(null,cljs.core.rest.call(null,s__2350__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq2348){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq2348));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to2357 = (function sablono$core$link_to2357(var_args){
var args__4534__auto__ = [];
var len__4531__auto___2360 = arguments.length;
var i__4532__auto___2361 = (0);
while(true){
if((i__4532__auto___2361 < len__4531__auto___2360)){
args__4534__auto__.push((arguments[i__4532__auto___2361]));

var G__2362 = (i__4532__auto___2361 + (1));
i__4532__auto___2361 = G__2362;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to2357.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.link_to2357.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to2357.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to2357.cljs$lang$applyTo = (function (seq2358){
var G__2359 = cljs.core.first.call(null,seq2358);
var seq2358__$1 = cljs.core.next.call(null,seq2358);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2359,seq2358__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to2357);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to2363 = (function sablono$core$mail_to2363(var_args){
var args__4534__auto__ = [];
var len__4531__auto___2370 = arguments.length;
var i__4532__auto___2371 = (0);
while(true){
if((i__4532__auto___2371 < len__4531__auto___2370)){
args__4534__auto__.push((arguments[i__4532__auto___2371]));

var G__2372 = (i__4532__auto___2371 + (1));
i__4532__auto___2371 = G__2372;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to2363.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.mail_to2363.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__2366){
var vec__2367 = p__2366;
var content = cljs.core.nth.call(null,vec__2367,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__3949__auto__ = content;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to2363.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to2363.cljs$lang$applyTo = (function (seq2364){
var G__2365 = cljs.core.first.call(null,seq2364);
var seq2364__$1 = cljs.core.next.call(null,seq2364);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2365,seq2364__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to2363);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list2373 = (function sablono$core$unordered_list2373(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4324__auto__ = (function sablono$core$unordered_list2373_$_iter__2374(s__2375){
return (new cljs.core.LazySeq(null,(function (){
var s__2375__$1 = s__2375;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__2375__$1);
if(temp__5457__auto__){
var s__2375__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2375__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__2375__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__2377 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__2376 = (0);
while(true){
if((i__2376 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__2376);
cljs.core.chunk_append.call(null,b__2377,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__2378 = (i__2376 + (1));
i__2376 = G__2378;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2377),sablono$core$unordered_list2373_$_iter__2374.call(null,cljs.core.chunk_rest.call(null,s__2375__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2377),null);
}
} else {
var x = cljs.core.first.call(null,s__2375__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list2373_$_iter__2374.call(null,cljs.core.rest.call(null,s__2375__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list2373);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list2379 = (function sablono$core$ordered_list2379(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4324__auto__ = (function sablono$core$ordered_list2379_$_iter__2380(s__2381){
return (new cljs.core.LazySeq(null,(function (){
var s__2381__$1 = s__2381;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__2381__$1);
if(temp__5457__auto__){
var s__2381__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2381__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__2381__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__2383 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__2382 = (0);
while(true){
if((i__2382 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__2382);
cljs.core.chunk_append.call(null,b__2383,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__2384 = (i__2382 + (1));
i__2382 = G__2384;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2383),sablono$core$ordered_list2379_$_iter__2380.call(null,cljs.core.chunk_rest.call(null,s__2381__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2383),null);
}
} else {
var x = cljs.core.first.call(null,s__2381__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list2379_$_iter__2380.call(null,cljs.core.rest.call(null,s__2381__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list2379);
/**
 * Create an image element.
 */
sablono.core.image2385 = (function sablono$core$image2385(var_args){
var G__2387 = arguments.length;
switch (G__2387) {
case 1:
return sablono.core.image2385.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image2385.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image2385.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image2385.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image2385.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image2385);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__2389_SHARP_,p2__2390_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__2389_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__2390_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__2391_SHARP_,p2__2392_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__2391_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__2392_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__2394 = arguments.length;
switch (G__2394) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field2396 = (function sablono$core$color_field2396(var_args){
var G__2398 = arguments.length;
switch (G__2398) {
case 1:
return sablono.core.color_field2396.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field2396.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field2396.cljs$core$IFn$_invoke$arity$1 = (function (name__2327__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__2327__auto__);
});

sablono.core.color_field2396.cljs$core$IFn$_invoke$arity$2 = (function (name__2327__auto__,value__2328__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__2327__auto__,value__2328__auto__);
});

sablono.core.color_field2396.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field2396);

/**
 * Creates a date input field.
 */
sablono.core.date_field2399 = (function sablono$core$date_field2399(var_args){
var G__2401 = arguments.length;
switch (G__2401) {
case 1:
return sablono.core.date_field2399.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field2399.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field2399.cljs$core$IFn$_invoke$arity$1 = (function (name__2327__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__2327__auto__);
});

sablono.core.date_field2399.cljs$core$IFn$_invoke$arity$2 = (function (name__2327__auto__,value__2328__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__2327__auto__,value__2328__auto__);
});

sablono.core.date_field2399.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field2399);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field2402 = (function sablono$core$datetime_field2402(var_args){
var G__2404 = arguments.length;
switch (G__2404) {
case 1:
return sablono.core.datetime_field2402.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field2402.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field2402.cljs$core$IFn$_invoke$arity$1 = (function (name__2327__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__2327__auto__);
});

sablono.core.datetime_field2402.cljs$core$IFn$_invoke$arity$2 = (function (name__2327__auto__,value__2328__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__2327__auto__,value__2328__auto__);
});

sablono.core.datetime_field2402.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field2402);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field2405 = (function sablono$core$datetime_local_field2405(var_args){
var G__2407 = arguments.length;
switch (G__2407) {
case 1:
return sablono.core.datetime_local_field2405.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field2405.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field2405.cljs$core$IFn$_invoke$arity$1 = (function (name__2327__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__2327__auto__);
});

sablono.core.datetime_local_field2405.cljs$core$IFn$_invoke$arity$2 = (function (name__2327__auto__,value__2328__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__2327__auto__,value__2328__auto__);
});

sablono.core.datetime_local_field2405.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field2405);

/**
 * Creates a email input field.
 */
sablono.core.email_field2408 = (function sablono$core$email_field2408(var_args){
var G__2410 = arguments.length;
switch (G__2410) {
case 1:
return sablono.core.email_field2408.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field2408.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field2408.cljs$core$IFn$_invoke$arity$1 = (function (name__2327__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__2327__auto__);
});

sablono.core.email_field2408.cljs$core$IFn$_invoke$arity$2 = (function (name__2327__auto__,value__2328__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__2327__auto__,value__2328__auto__);
});

sablono.core.email_field2408.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field2408);

/**
 * Creates a file input field.
 */
sablono.core.file_field2411 = (function sablono$core$file_field2411(var_args){
var G__2413 = arguments.length;
switch (G__2413) {
case 1:
return sablono.core.file_field2411.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field2411.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field2411.cljs$core$IFn$_invoke$arity$1 = (function (name__2327__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__2327__auto__);
});

sablono.core.file_field2411.cljs$core$IFn$_invoke$arity$2 = (function (name__2327__auto__,value__2328__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__2327__auto__,value__2328__auto__);
});

sablono.core.file_field2411.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field2411);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field2414 = (function sablono$core$hidden_field2414(var_args){
var G__2416 = arguments.length;
switch (G__2416) {
case 1:
return sablono.core.hidden_field2414.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field2414.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field2414.cljs$core$IFn$_invoke$arity$1 = (function (name__2327__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__2327__auto__);
});

sablono.core.hidden_field2414.cljs$core$IFn$_invoke$arity$2 = (function (name__2327__auto__,value__2328__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__2327__auto__,value__2328__auto__);
});

sablono.core.hidden_field2414.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field2414);

/**
 * Creates a month input field.
 */
sablono.core.month_field2417 = (function sablono$core$month_field2417(var_args){
var G__2419 = arguments.length;
switch (G__2419) {
case 1:
return sablono.core.month_field2417.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field2417.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field2417.cljs$core$IFn$_invoke$arity$1 = (function (name__2327__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__2327__auto__);
});

sablono.core.month_field2417.cljs$core$IFn$_invoke$arity$2 = (function (name__2327__auto__,value__2328__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__2327__auto__,value__2328__auto__);
});

sablono.core.month_field2417.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field2417);

/**
 * Creates a number input field.
 */
sablono.core.number_field2420 = (function sablono$core$number_field2420(var_args){
var G__2422 = arguments.length;
switch (G__2422) {
case 1:
return sablono.core.number_field2420.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field2420.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field2420.cljs$core$IFn$_invoke$arity$1 = (function (name__2327__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__2327__auto__);
});

sablono.core.number_field2420.cljs$core$IFn$_invoke$arity$2 = (function (name__2327__auto__,value__2328__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__2327__auto__,value__2328__auto__);
});

sablono.core.number_field2420.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field2420);

/**
 * Creates a password input field.
 */
sablono.core.password_field2423 = (function sablono$core$password_field2423(var_args){
var G__2425 = arguments.length;
switch (G__2425) {
case 1:
return sablono.core.password_field2423.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field2423.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field2423.cljs$core$IFn$_invoke$arity$1 = (function (name__2327__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__2327__auto__);
});

sablono.core.password_field2423.cljs$core$IFn$_invoke$arity$2 = (function (name__2327__auto__,value__2328__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__2327__auto__,value__2328__auto__);
});

sablono.core.password_field2423.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field2423);

/**
 * Creates a range input field.
 */
sablono.core.range_field2426 = (function sablono$core$range_field2426(var_args){
var G__2428 = arguments.length;
switch (G__2428) {
case 1:
return sablono.core.range_field2426.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field2426.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field2426.cljs$core$IFn$_invoke$arity$1 = (function (name__2327__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__2327__auto__);
});

sablono.core.range_field2426.cljs$core$IFn$_invoke$arity$2 = (function (name__2327__auto__,value__2328__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__2327__auto__,value__2328__auto__);
});

sablono.core.range_field2426.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field2426);

/**
 * Creates a search input field.
 */
sablono.core.search_field2429 = (function sablono$core$search_field2429(var_args){
var G__2431 = arguments.length;
switch (G__2431) {
case 1:
return sablono.core.search_field2429.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field2429.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field2429.cljs$core$IFn$_invoke$arity$1 = (function (name__2327__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__2327__auto__);
});

sablono.core.search_field2429.cljs$core$IFn$_invoke$arity$2 = (function (name__2327__auto__,value__2328__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__2327__auto__,value__2328__auto__);
});

sablono.core.search_field2429.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field2429);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field2432 = (function sablono$core$tel_field2432(var_args){
var G__2434 = arguments.length;
switch (G__2434) {
case 1:
return sablono.core.tel_field2432.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field2432.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field2432.cljs$core$IFn$_invoke$arity$1 = (function (name__2327__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__2327__auto__);
});

sablono.core.tel_field2432.cljs$core$IFn$_invoke$arity$2 = (function (name__2327__auto__,value__2328__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__2327__auto__,value__2328__auto__);
});

sablono.core.tel_field2432.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field2432);

/**
 * Creates a text input field.
 */
sablono.core.text_field2435 = (function sablono$core$text_field2435(var_args){
var G__2437 = arguments.length;
switch (G__2437) {
case 1:
return sablono.core.text_field2435.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field2435.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field2435.cljs$core$IFn$_invoke$arity$1 = (function (name__2327__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__2327__auto__);
});

sablono.core.text_field2435.cljs$core$IFn$_invoke$arity$2 = (function (name__2327__auto__,value__2328__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__2327__auto__,value__2328__auto__);
});

sablono.core.text_field2435.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field2435);

/**
 * Creates a time input field.
 */
sablono.core.time_field2438 = (function sablono$core$time_field2438(var_args){
var G__2440 = arguments.length;
switch (G__2440) {
case 1:
return sablono.core.time_field2438.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field2438.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field2438.cljs$core$IFn$_invoke$arity$1 = (function (name__2327__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__2327__auto__);
});

sablono.core.time_field2438.cljs$core$IFn$_invoke$arity$2 = (function (name__2327__auto__,value__2328__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__2327__auto__,value__2328__auto__);
});

sablono.core.time_field2438.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field2438);

/**
 * Creates a url input field.
 */
sablono.core.url_field2441 = (function sablono$core$url_field2441(var_args){
var G__2443 = arguments.length;
switch (G__2443) {
case 1:
return sablono.core.url_field2441.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field2441.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field2441.cljs$core$IFn$_invoke$arity$1 = (function (name__2327__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__2327__auto__);
});

sablono.core.url_field2441.cljs$core$IFn$_invoke$arity$2 = (function (name__2327__auto__,value__2328__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__2327__auto__,value__2328__auto__);
});

sablono.core.url_field2441.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field2441);

/**
 * Creates a week input field.
 */
sablono.core.week_field2444 = (function sablono$core$week_field2444(var_args){
var G__2446 = arguments.length;
switch (G__2446) {
case 1:
return sablono.core.week_field2444.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field2444.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field2444.cljs$core$IFn$_invoke$arity$1 = (function (name__2327__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__2327__auto__);
});

sablono.core.week_field2444.cljs$core$IFn$_invoke$arity$2 = (function (name__2327__auto__,value__2328__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__2327__auto__,value__2328__auto__);
});

sablono.core.week_field2444.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field2444);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box2464 = (function sablono$core$check_box2464(var_args){
var G__2466 = arguments.length;
switch (G__2466) {
case 1:
return sablono.core.check_box2464.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box2464.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box2464.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box2464.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box2464.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box2464.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box2464.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box2464);
/**
 * Creates a radio button.
 */
sablono.core.radio_button2468 = (function sablono$core$radio_button2468(var_args){
var G__2470 = arguments.length;
switch (G__2470) {
case 1:
return sablono.core.radio_button2468.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button2468.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button2468.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button2468.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button2468.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button2468.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button2468.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button2468);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options2472 = (function sablono$core$select_options2472(coll){
var iter__4324__auto__ = (function sablono$core$select_options2472_$_iter__2473(s__2474){
return (new cljs.core.LazySeq(null,(function (){
var s__2474__$1 = s__2474;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__2474__$1);
if(temp__5457__auto__){
var s__2474__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__2474__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__2474__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__2476 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__2475 = (0);
while(true){
if((i__2475 < size__4323__auto__)){
var x = cljs.core._nth.call(null,c__4322__auto__,i__2475);
cljs.core.chunk_append.call(null,b__2476,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__2477 = x;
var text = cljs.core.nth.call(null,vec__2477,(0),null);
var val = cljs.core.nth.call(null,vec__2477,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__2477,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options2472.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__2483 = (i__2475 + (1));
i__2475 = G__2483;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2476),sablono$core$select_options2472_$_iter__2473.call(null,cljs.core.chunk_rest.call(null,s__2474__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__2476),null);
}
} else {
var x = cljs.core.first.call(null,s__2474__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__2480 = x;
var text = cljs.core.nth.call(null,vec__2480,(0),null);
var val = cljs.core.nth.call(null,vec__2480,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__2480,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options2472.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options2472_$_iter__2473.call(null,cljs.core.rest.call(null,s__2474__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options2472);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down2484 = (function sablono$core$drop_down2484(var_args){
var G__2486 = arguments.length;
switch (G__2486) {
case 2:
return sablono.core.drop_down2484.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down2484.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down2484.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down2484.call(null,name,options,null);
});

sablono.core.drop_down2484.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down2484.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down2484);
/**
 * Creates a text area element.
 */
sablono.core.text_area2488 = (function sablono$core$text_area2488(var_args){
var G__2490 = arguments.length;
switch (G__2490) {
case 1:
return sablono.core.text_area2488.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area2488.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area2488.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area2488.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__3949__auto__ = value;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area2488.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area2488);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label2492 = (function sablono$core$label2492(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label2492);
/**
 * Creates a submit button.
 */
sablono.core.submit_button2493 = (function sablono$core$submit_button2493(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button2493);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button2494 = (function sablono$core$reset_button2494(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button2494);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to2495 = (function sablono$core$form_to2495(var_args){
var args__4534__auto__ = [];
var len__4531__auto___2502 = arguments.length;
var i__4532__auto___2503 = (0);
while(true){
if((i__4532__auto___2503 < len__4531__auto___2502)){
args__4534__auto__.push((arguments[i__4532__auto___2503]));

var G__2504 = (i__4532__auto___2503 + (1));
i__4532__auto___2503 = G__2504;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to2495.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

sablono.core.form_to2495.cljs$core$IFn$_invoke$arity$variadic = (function (p__2498,body){
var vec__2499 = p__2498;
var method = cljs.core.nth.call(null,vec__2499,(0),null);
var action = cljs.core.nth.call(null,vec__2499,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to2495.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to2495.cljs$lang$applyTo = (function (seq2496){
var G__2497 = cljs.core.first.call(null,seq2496);
var seq2496__$1 = cljs.core.next.call(null,seq2496);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__2497,seq2496__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to2495);

//# sourceMappingURL=core.js.map
