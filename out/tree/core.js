// Compiled by ClojureScript 1.10.339 {}
goog.provide('tree.core');
goog.require('cljs.core');
goog.require('clojure.zip');
goog.require('cljs.core.match');
tree.core.treeZip = (function tree$core$treeZip(root){
return clojure.zip.zipper.call(null,(function (p1__4074_SHARP_){
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(p1__4074_SHARP_);
}),(function (p1__4075_SHARP_){
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(p1__4075_SHARP_);
}),(function (node,children){
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"self","self",-1547428899).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.vec.call(null,children)], null),cljs.core.meta.call(null,node));
}),root);
});
tree.core.getEnd = (function tree$core$getEnd(loc){
while(true){
if(cljs.core.truth_(clojure.zip.end_QMARK_.call(null,loc))){
return loc;
} else {
var G__4076 = clojure.zip.next.call(null,loc);
loc = G__4076;
continue;
}
break;
}
});
tree.core.cleanNodes = (function tree$core$cleanNodes(nodes){
return cljs.core.map.call(null,(function (p1__4077_SHARP_){
return new cljs.core.Keyword(null,"self","self",-1547428899).cljs$core$IFn$_invoke$arity$1(p1__4077_SHARP_);
}),nodes);
});
tree.core.rootLoc = (function tree$core$rootLoc(loc){
while(true){
var temp__5455__auto__ = clojure.zip.up.call(null,loc);
if(cljs.core.truth_(temp__5455__auto__)){
var p = temp__5455__auto__;
var G__4078 = p;
loc = G__4078;
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
var ocr_4080 = clojure.zip.end_QMARK_.call(null,l);
var ocr_4081 = cljs.core.some.call(null,((function (l,ocr_4080){
return (function (p1__4079_SHARP_){
return cljs.core._EQ_.call(null,clojure.zip.node.call(null,loc),p1__4079_SHARP_);
});})(l,ocr_4080))
,clojure.zip.path.call(null,l)) === true;
if((ocr_4080 === true)){
return l;
} else {
if((ocr_4080 === false)){
if((ocr_4081 === false)){
return l;
} else {
if((ocr_4081 === true)){
var G__4085 = clojure.zip.next.call(null,l);
l = G__4085;
continue;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_4080)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_4081)].join('')));

}

}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_4080)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_4081)].join('')));

}

}
break;
}
});
tree.core.removeChild = (function tree$core$removeChild(parent,child){
return clojure.zip.replace.call(null,parent,clojure.zip.make_node.call(null,parent,clojure.zip.node.call(null,parent),cljs.core.filter.call(null,(function (p1__4086_SHARP_){
return cljs.core.not_EQ_.call(null,child,p1__4086_SHARP_);
}),clojure.zip.children.call(null,parent))));
});
tree.core.prunePath = (function tree$core$prunePath(loc){
while(true){
var temp__5455__auto__ = clojure.zip.up.call(null,loc);
if(cljs.core.truth_(temp__5455__auto__)){
var p = temp__5455__auto__;
if(((1) < cljs.core.count.call(null,clojure.zip.children.call(null,p)))){
return tree.core.removeChild.call(null,p,loc);
} else {
var G__4087 = p;
loc = G__4087;
continue;
}
} else {
return null;
}
break;
}
});
tree.core.prune = (function tree$core$prune(loc){
return tree.core.removeChild.call(null,clojure.zip.up.call(null,loc),loc);
});
tree.core.page__GT_zipNode = (function tree$core$page__GT_zipNode(page){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"self","self",-1547428899),page], null);
});
tree.core.backpage = (function tree$core$backpage(loc){
return tree.core.prune.call(null,loc);
});
tree.core.shiftClick = (function tree$core$shiftClick(loc,page){
if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,loc))){
return clojure.zip.insert_child.call(null,loc,tree.core.page__GT_zipNode.call(null,page));
} else {
return clojure.zip.replace.call(null,loc,clojure.zip.make_node.call(null,loc,clojure.zip.node.call(null,loc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tree.core.page__GT_zipNode.call(null,page)], null)));
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
var ocr_4088 = cljs.core._EQ_.call(null,clojure.zip.node.call(null,l),clojure.zip.node.call(null,loc));
var ocr_4089 = cljs.core._EQ_.call(null,null,clojure.zip.branch_QMARK_.call(null,l));
if((ocr_4088 === true)){
var G__4093 = tree.core.nextSkipChildren.call(null,l);
var G__4094 = secondary;
var G__4095 = primary;
l = G__4093;
primary = G__4094;
secondary = G__4095;
continue;
} else {
if((ocr_4088 === false)){
if((ocr_4089 === true)){
var G__4096 = clojure.zip.next.call(null,l);
var G__4097 = cljs.core.conj.call(null,primary,new cljs.core.Keyword(null,"self","self",-1547428899).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,l)));
var G__4098 = secondary;
l = G__4096;
primary = G__4097;
secondary = G__4098;
continue;
} else {
if((ocr_4089 === false)){
var G__4099 = clojure.zip.next.call(null,l);
var G__4100 = primary;
var G__4101 = secondary;
l = G__4099;
primary = G__4100;
secondary = G__4101;
continue;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_4088)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_4089)].join('')));

}

}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_4088)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_4089)].join('')));

}

}
}
break;
}
});
tree.core.topLayer = (function tree$core$topLayer(loc){
var vec__4102 = tree.core.getLeaves.call(null,loc);
var l = cljs.core.nth.call(null,vec__4102,(0),null);
var r = cljs.core.nth.call(null,vec__4102,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"self","self",-1547428899).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,loc)),l,r], null);
});
tree.core.middle = (function tree$core$middle(loc){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"self","self",-1547428899).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,loc)),tree.core.cleanNodes.call(null,clojure.zip.lefts.call(null,loc)),tree.core.cleanNodes.call(null,clojure.zip.rights.call(null,loc))], null);
});
tree.core.zip__GT_compData = (function tree$core$zip__GT_compData(loc){
var l = loc;
var data = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tree.core.topLayer.call(null,loc)], null);
while(true){
var temp__5455__auto__ = clojure.zip.up.call(null,l);
if(cljs.core.truth_(temp__5455__auto__)){
var next = temp__5455__auto__;
var G__4105 = next;
var G__4106 = cljs.core.conj.call(null,data,tree.core.middle.call(null,next));
l = G__4105;
data = G__4106;
continue;
} else {
return data;
}
break;
}
});
tree.core.dummyRoot = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"self","self",-1547428899),(1),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"self","self",-1547428899),(2),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"self","self",-1547428899),(3)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"self","self",-1547428899),(11)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"self","self",-1547428899),(4),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"self","self",-1547428899),(6)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"self","self",-1547428899),(7)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"self","self",-1547428899),(8)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"self","self",-1547428899),(5),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"self","self",-1547428899),(9)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"self","self",-1547428899),(10)], null)], null)], null)], null)], null)], null)], null);
tree.core.a = tree.core.treeZip.call(null,tree.core.dummyRoot);
tree.core.six = clojure.zip.down.call(null,clojure.zip.right.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,clojure.zip.down.call(null,tree.core.a)))));

//# sourceMappingURL=core.js.map
