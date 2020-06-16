// Compiled by ClojureScript 1.10.339 {}
goog.provide('rum.derived_atom');
goog.require('cljs.core');
rum.derived_atom.derived_atom = (function rum$derived_atom$derived_atom(var_args){
var G__518 = arguments.length;
switch (G__518) {
case 3:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$3 = (function (refs,key,f){
return rum.derived_atom.derived_atom.call(null,refs,key,f,cljs.core.PersistentArrayMap.EMPTY);
});

rum.derived_atom.derived_atom.cljs$core$IFn$_invoke$arity$4 = (function (refs,key,f,opts){
var map__519 = opts;
var map__519__$1 = ((((!((map__519 == null)))?(((((map__519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__519):map__519);
var ref = cljs.core.get.call(null,map__519__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var check_equals_QMARK_ = cljs.core.get.call(null,map__519__$1,new cljs.core.Keyword(null,"check-equals?","check-equals?",-2005755315),true);
var recalc = (function (){var G__521 = cljs.core.count.call(null,refs);
switch (G__521) {
case (1):
var vec__522 = refs;
var a = cljs.core.nth.call(null,vec__522,(0),null);
return ((function (vec__522,a,G__521,map__519,map__519__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a));
});
;})(vec__522,a,G__521,map__519,map__519__$1,ref,check_equals_QMARK_))

break;
case (2):
var vec__525 = refs;
var a = cljs.core.nth.call(null,vec__525,(0),null);
var b = cljs.core.nth.call(null,vec__525,(1),null);
return ((function (vec__525,a,b,G__521,map__519,map__519__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b));
});
;})(vec__525,a,b,G__521,map__519,map__519__$1,ref,check_equals_QMARK_))

break;
case (3):
var vec__528 = refs;
var a = cljs.core.nth.call(null,vec__528,(0),null);
var b = cljs.core.nth.call(null,vec__528,(1),null);
var c = cljs.core.nth.call(null,vec__528,(2),null);
return ((function (vec__528,a,b,c,G__521,map__519,map__519__$1,ref,check_equals_QMARK_){
return (function (){
return f.call(null,cljs.core.deref.call(null,a),cljs.core.deref.call(null,b),cljs.core.deref.call(null,c));
});
;})(vec__528,a,b,c,G__521,map__519,map__519__$1,ref,check_equals_QMARK_))

break;
default:
return ((function (G__521,map__519,map__519__$1,ref,check_equals_QMARK_){
return (function (){
return cljs.core.apply.call(null,f,cljs.core.map.call(null,cljs.core.deref,refs));
});
;})(G__521,map__519,map__519__$1,ref,check_equals_QMARK_))

}
})();
var sink = (cljs.core.truth_(ref)?(function (){var G__531 = ref;
cljs.core.reset_BANG_.call(null,G__531,recalc.call(null));

return G__531;
})():cljs.core.atom.call(null,recalc.call(null)));
var watch = (cljs.core.truth_(check_equals_QMARK_)?((function (map__519,map__519__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
var new_val = recalc.call(null);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,sink),new_val)){
return cljs.core.reset_BANG_.call(null,sink,new_val);
} else {
return null;
}
});})(map__519,map__519__$1,ref,check_equals_QMARK_,recalc,sink))
:((function (map__519,map__519__$1,ref,check_equals_QMARK_,recalc,sink){
return (function (_,___$1,___$2,___$3){
return cljs.core.reset_BANG_.call(null,sink,recalc.call(null));
});})(map__519,map__519__$1,ref,check_equals_QMARK_,recalc,sink))
);
var seq__532_538 = cljs.core.seq.call(null,refs);
var chunk__533_539 = null;
var count__534_540 = (0);
var i__535_541 = (0);
while(true){
if((i__535_541 < count__534_540)){
var ref_542__$1 = cljs.core._nth.call(null,chunk__533_539,i__535_541);
cljs.core.add_watch.call(null,ref_542__$1,key,watch);


var G__543 = seq__532_538;
var G__544 = chunk__533_539;
var G__545 = count__534_540;
var G__546 = (i__535_541 + (1));
seq__532_538 = G__543;
chunk__533_539 = G__544;
count__534_540 = G__545;
i__535_541 = G__546;
continue;
} else {
var temp__5457__auto___547 = cljs.core.seq.call(null,seq__532_538);
if(temp__5457__auto___547){
var seq__532_548__$1 = temp__5457__auto___547;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__532_548__$1)){
var c__4351__auto___549 = cljs.core.chunk_first.call(null,seq__532_548__$1);
var G__550 = cljs.core.chunk_rest.call(null,seq__532_548__$1);
var G__551 = c__4351__auto___549;
var G__552 = cljs.core.count.call(null,c__4351__auto___549);
var G__553 = (0);
seq__532_538 = G__550;
chunk__533_539 = G__551;
count__534_540 = G__552;
i__535_541 = G__553;
continue;
} else {
var ref_554__$1 = cljs.core.first.call(null,seq__532_548__$1);
cljs.core.add_watch.call(null,ref_554__$1,key,watch);


var G__555 = cljs.core.next.call(null,seq__532_548__$1);
var G__556 = null;
var G__557 = (0);
var G__558 = (0);
seq__532_538 = G__555;
chunk__533_539 = G__556;
count__534_540 = G__557;
i__535_541 = G__558;
continue;
}
} else {
}
}
break;
}

return sink;
});

rum.derived_atom.derived_atom.cljs$lang$maxFixedArity = 4;


//# sourceMappingURL=derived_atom.js.map
