// Compiled by ClojureScript 1.10.339 {}
goog.provide('rum.util');
goog.require('cljs.core');
rum.util.collect = (function rum$util$collect(key,mixins){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keep.call(null,(function (m){
return cljs.core.get.call(null,m,key);
})),mixins);
});
rum.util.collect_STAR_ = (function rum$util$collect_STAR_(keys,mixins){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.mapcat.call(null,(function (m){
return cljs.core.keep.call(null,(function (k){
return cljs.core.get.call(null,m,k);
}),keys);
})),mixins);
});
rum.util.call_all = (function rum$util$call_all(var_args){
var args__4534__auto__ = [];
var len__4531__auto___508 = arguments.length;
var i__4532__auto___509 = (0);
while(true){
if((i__4532__auto___509 < len__4531__auto___508)){
args__4534__auto__.push((arguments[i__4532__auto___509]));

var G__510 = (i__4532__auto___509 + (1));
i__4532__auto___509 = G__510;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((2) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((2)),(0),null)):null);
return rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4535__auto__);
});

rum.util.call_all.cljs$core$IFn$_invoke$arity$variadic = (function (state,fns,args){
return cljs.core.reduce.call(null,(function (state__$1,fn){
return cljs.core.apply.call(null,fn,state__$1,args);
}),state,fns);
});

rum.util.call_all.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
rum.util.call_all.cljs$lang$applyTo = (function (seq505){
var G__506 = cljs.core.first.call(null,seq505);
var seq505__$1 = cljs.core.next.call(null,seq505);
var G__507 = cljs.core.first.call(null,seq505__$1);
var seq505__$2 = cljs.core.next.call(null,seq505__$1);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__506,G__507,seq505__$2);
});


//# sourceMappingURL=util.js.map
