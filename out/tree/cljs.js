// Compiled by ClojureScript 1.10.339 {}
goog.provide('tree.cljs');
goog.require('cljs.core');
goog.require('clojure.zip');
goog.require('cljs.core.match');
tree.cljs.tree_zip = (function tree$cljs$tree_zip(root){
return clojure.zip.zipper.call(null,(function (p1__1923_SHARP_){
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(p1__1923_SHARP_);
}),(function (p1__1924_SHARP_){
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(p1__1924_SHARP_);
}),(function (node,children){
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"self","self",-1547428899).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.vec.call(null,children)], null),cljs.core.meta.call(null,node));
}),root);
});
tree.cljs.nextSkipChildren = (function tree$cljs$nextSkipChildren(loc){
var l = loc;
while(true){
var ocr_1925 = clojure.zip.end_QMARK_.call(null,l);
var ocr_1926 = cljs.core.contains_QMARK_.call(null,clojure.zip.path.call(null,l),loc);
if((ocr_1925 === true)){
return l;
} else {
if((ocr_1925 === false)){
if((ocr_1926 === false)){
return l;
} else {
if((ocr_1926 === true)){
var G__1930 = clojure.zip.next.call(null,l);
l = G__1930;
continue;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_1925)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_1926)].join('')));

}

}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_1925)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_1926)].join('')));

}

}
break;
}
});
tree.cljs.getLeaves = (function tree$cljs$getLeaves(loc){
var right = cljs.core.PersistentVector.EMPTY;
var left = cljs.core.PersistentVector.EMPTY;
var l = loc;
var primary = left;
var secondary = right;
while(true){
var ocr_1931 = clojure.zip.branch_QMARK_.call(null,l);
var ocr_1932 = cljs.core._EQ_.call(null,l,loc);
var ocr_1933 = clojure.zip.end_QMARK_.call(null,l);
if((ocr_1931 === true)){
var G__1944 = clojure.zip.next.call(null,l);
var G__1945 = primary;
var G__1946 = secondary;
l = G__1944;
primary = G__1945;
secondary = G__1946;
continue;
} else {
if((ocr_1932 === false)){
if((ocr_1933 === false)){
var G__1947 = clojure.zip.next.call(null,l);
var G__1948 = cljs.core.conj.call(null,primary,clojure.zip.node.call(null,l));
var G__1949 = secondary;
l = G__1947;
primary = G__1948;
secondary = G__1949;
continue;
} else {
if((ocr_1932 === true)){
var G__1950 = tree.cljs.nextSkipChildren.call(null,l);
var G__1951 = secondary;
var G__1952 = primary;
l = G__1950;
primary = G__1951;
secondary = G__1952;
continue;
} else {
if((ocr_1933 === true)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secondary,primary], null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_1931)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_1932)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_1933)].join('')));

}

}

}
} else {
if((ocr_1932 === true)){
var G__1953 = tree.cljs.nextSkipChildren.call(null,l);
var G__1954 = secondary;
var G__1955 = primary;
l = G__1953;
primary = G__1954;
secondary = G__1955;
continue;
} else {
if((ocr_1933 === true)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secondary,primary], null);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_1931)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_1932)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_1933)].join('')));

}

}

}

}
break;
}
});
tree.cljs.dummyRoot = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"self","self",-1547428899),(1),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"self","self",-1547428899),(2),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"self","self",-1547428899),(3)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"self","self",-1547428899),(4),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"self","self",-1547428899),(6)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"self","self",-1547428899),(7)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"self","self",-1547428899),(8)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"self","self",-1547428899),(5)], null)], null)], null)], null)], null);
tree.cljs.a = tree.cljs.tree_zip.call(null,tree.cljs.dummyRoot);
cljs.core.println.call(null,tree.cljs.a);
console.log(tree.cljs.a);

//# sourceMappingURL=cljs.js.map
