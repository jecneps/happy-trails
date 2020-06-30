// Compiled by ClojureScript 1.10.339 {}
goog.provide('tree.core');
goog.require('cljs.core');
goog.require('clojure.zip');
goog.require('cljs.core.match');
tree.core.tree_zip = (function tree$core$tree_zip(root){
return clojure.zip.zipper.call(null,(function (p1__1923_SHARP_){
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(p1__1923_SHARP_);
}),(function (p1__1924_SHARP_){
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(p1__1924_SHARP_);
}),(function (node,children){
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"self","self",-1547428899).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.vec.call(null,children)], null),cljs.core.meta.call(null,node));
}),root);
});
tree.core.cleanNodes = (function tree$core$cleanNodes(nodes){
return cljs.core.map.call(null,(function (p1__1925_SHARP_){
return new cljs.core.Keyword(null,"self","self",-1547428899).cljs$core$IFn$_invoke$arity$1(p1__1925_SHARP_);
}),nodes);
});
tree.core.rootLoc = (function tree$core$rootLoc(loc){
while(true){
var temp__5455__auto__ = clojure.zip.up.call(null,loc);
if(cljs.core.truth_(temp__5455__auto__)){
var p = temp__5455__auto__;
var G__1926 = p;
loc = G__1926;
continue;
} else {
return loc;
}
break;
}
});
tree.core.nextSkipChildren = (function tree$core$nextSkipChildren(loc){
var l = clojure.zip.next.call(null,loc);
while(true){
var ocr_1928 = clojure.zip.end_QMARK_.call(null,l);
var ocr_1929 = cljs.core.some.call(null,((function (l,ocr_1928){
return (function (p1__1927_SHARP_){
return cljs.core._EQ_.call(null,clojure.zip.node.call(null,loc),p1__1927_SHARP_);
});})(l,ocr_1928))
,clojure.zip.path.call(null,l)) === true;
if((ocr_1928 === true)){
return l;
} else {
if((ocr_1928 === false)){
if((ocr_1929 === false)){
return l;
} else {
if((ocr_1929 === true)){
var G__1933 = clojure.zip.next.call(null,l);
l = G__1933;
continue;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_1928)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_1929)].join('')));

}

}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_1928)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_1929)].join('')));

}

}
break;
}
});
tree.core.getLeaves = (function tree$core$getLeaves(loc){
var right = cljs.core.PersistentVector.EMPTY;
var left = cljs.core.PersistentVector.EMPTY;
var l = tree.core.rootLoc.call(null,loc);
var primary = left;
var secondary = right;
while(true){
if(cljs.core.truth_(clojure.zip.end_QMARK_.call(null,l))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secondary,primary], null);
} else {
var ocr_1934 = cljs.core._EQ_.call(null,clojure.zip.node.call(null,l),clojure.zip.node.call(null,loc));
var ocr_1935 = cljs.core._EQ_.call(null,null,clojure.zip.branch_QMARK_.call(null,l));
if((ocr_1934 === true)){
var G__1939 = tree.core.nextSkipChildren.call(null,l);
var G__1940 = secondary;
var G__1941 = primary;
l = G__1939;
primary = G__1940;
secondary = G__1941;
continue;
} else {
if((ocr_1934 === false)){
if((ocr_1935 === true)){
var G__1942 = clojure.zip.next.call(null,l);
var G__1943 = cljs.core.conj.call(null,primary,new cljs.core.Keyword(null,"self","self",-1547428899).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,l)));
var G__1944 = secondary;
l = G__1942;
primary = G__1943;
secondary = G__1944;
continue;
} else {
if((ocr_1935 === false)){
var G__1945 = clojure.zip.next.call(null,l);
var G__1946 = primary;
var G__1947 = secondary;
l = G__1945;
primary = G__1946;
secondary = G__1947;
continue;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_1934)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_1935)].join('')));

}

}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_1934)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_1935)].join('')));

}

}
}
break;
}
});
tree.core.topLayer = (function tree$core$topLayer(loc){
var vec__1948 = tree.core.getLeaves.call(null,loc);
var l = cljs.core.nth.call(null,vec__1948,(0),null);
var r = cljs.core.nth.call(null,vec__1948,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"self","self",-1547428899).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,loc)),l,r], null);
});
tree.core.middle = (function tree$core$middle(loc){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"self","self",-1547428899).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,loc)),tree.core.cleanNodes.call(null,clojure.zip.lefts.call(null,loc)),tree.core.cleanNodes.call(null,clojure.zip.rights.call(null,loc))], null);
});
tree.core.loc__GT_compData = (function tree$core$loc__GT_compData(loc){
var l = loc;
var data = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tree.core.topLayer.call(null,loc)], null);
while(true){
var temp__5455__auto__ = clojure.zip.up.call(null,l);
if(cljs.core.truth_(temp__5455__auto__)){
var next = temp__5455__auto__;
var G__1951 = next;
var G__1952 = cljs.core.conj.call(null,data,tree.core.middle.call(null,next));
l = G__1951;
data = G__1952;
continue;
} else {
return data;
}
break;
}
});
tree.core.dummyRoot = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"self","self",-1547428899),(1),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"self","self",-1547428899),(2),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"self","self",-1547428899),(3)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"self","self",-1547428899),(11)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"self","self",-1547428899),(4),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"self","self",-1547428899),(6)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"self","self",-1547428899),(7)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"self","self",-1547428899),(8)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"self","self",-1547428899),(5),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"self","self",-1547428899),(9)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"self","self",-1547428899),(10)], null)], null)], null)], null)], null)], null)], null);
tree.core.getEnd = (function tree$core$getEnd(loc){
while(true){
if(cljs.core.truth_(clojure.zip.end_QMARK_.call(null,loc))){
return loc;
} else {
var G__1953 = clojure.zip.next.call(null,loc);
loc = G__1953;
continue;
}
break;
}
});
tree.core.a = tree.core.tree_zip.call(null,tree.core.dummyRoot);
tree.core.six = clojure.zip.down.call(null,clojure.zip.right.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,clojure.zip.down.call(null,tree.core.a)))));
cljs.core.println.call(null,tree.core.getLeaves.call(null,tree.core.six));
cljs.core.println.call(null,tree.core.loc__GT_compData.call(null,tree.core.six));

//# sourceMappingURL=core.js.map
