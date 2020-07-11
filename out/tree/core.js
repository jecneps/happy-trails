// Compiled by ClojureScript 1.10.339 {}
goog.provide('tree.core');
goog.require('cljs.core');
goog.require('clojure.zip');
goog.require('cljs.core.match');
goog.require('cljs.pprint');
tree.core.treeZip = (function tree$core$treeZip(root){
return clojure.zip.zipper.call(null,(function (p1__2017_SHARP_){
return cljs.core.not_EQ_.call(null,null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(p1__2017_SHARP_));
}),(function (p1__2018_SHARP_){
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(p1__2018_SHARP_);
}),(function (node,children){
if((children == null)){
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"self","self",-1547428899).cljs$core$IFn$_invoke$arity$1(node)], null),cljs.core.meta.call(null,node));
} else {
return cljs.core.with_meta.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"self","self",-1547428899),new cljs.core.Keyword(null,"self","self",-1547428899).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.vec.call(null,children)], null),cljs.core.meta.call(null,node));
}
}),root);
});
tree.core.nTimes = (function tree$core$nTimes(f,n,x){
return cljs.core.apply.call(null,cljs.core.comp,cljs.core.repeat.call(null,n,f)).call(null,x);
});
tree.core.getEnd = (function tree$core$getEnd(loc){
while(true){
if(cljs.core.truth_(clojure.zip.end_QMARK_.call(null,loc))){
return loc;
} else {
var G__2019 = clojure.zip.next.call(null,loc);
loc = G__2019;
continue;
}
break;
}
});
tree.core.rootLoc = (function tree$core$rootLoc(loc){
while(true){
var temp__5455__auto__ = clojure.zip.up.call(null,loc);
if(cljs.core.truth_(temp__5455__auto__)){
var p = temp__5455__auto__;
var G__2020 = p;
loc = G__2020;
continue;
} else {
return loc;
}
break;
}
});
tree.core.nodeBranch_QMARK_ = (function tree$core$nodeBranch_QMARK_(node){
return cljs.core.not_EQ_.call(null,null,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node));
});
tree.core.identicalElements_QMARK_ = (function tree$core$identicalElements_QMARK_(node1,node2){
return (new cljs.core.Keyword(null,"self","self",-1547428899).cljs$core$IFn$_invoke$arity$1(node1) === new cljs.core.Keyword(null,"self","self",-1547428899).cljs$core$IFn$_invoke$arity$1(node2));
});
tree.core.findLoc = (function tree$core$findLoc(loc,node){
while(true){
var ocr_2021 = clojure.zip.end_QMARK_.call(null,loc);
var ocr_2022 = tree.core.identicalElements_QMARK_.call(null,node,clojure.zip.node.call(null,loc));
if((ocr_2021 === true)){
return null;
} else {
if((ocr_2021 === false)){
if((ocr_2022 === true)){
return loc;
} else {
if((ocr_2022 === false)){
var G__2026 = clojure.zip.next.call(null,loc);
var G__2027 = node;
loc = G__2026;
node = G__2027;
continue;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_2021)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_2022)].join('')));

}

}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_2021)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_2022)].join('')));

}

}
break;
}
});
tree.core.nextSkipChildren = (function tree$core$nextSkipChildren(loc){
var l = clojure.zip.next.call(null,loc);
while(true){
var ocr_2029 = clojure.zip.end_QMARK_.call(null,l);
var ocr_2030 = cljs.core.some.call(null,((function (l,ocr_2029){
return (function (p1__2028_SHARP_){
return (clojure.zip.node.call(null,loc) === p1__2028_SHARP_);
});})(l,ocr_2029))
,clojure.zip.path.call(null,l)) === true;
if((ocr_2029 === true)){
return l;
} else {
if((ocr_2029 === false)){
if((ocr_2030 === false)){
return l;
} else {
if((ocr_2030 === true)){
var G__2034 = clojure.zip.next.call(null,l);
l = G__2034;
continue;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_2029)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_2030)].join('')));

}

}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_2029)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_2030)].join('')));

}

}
break;
}
});
tree.core.removeChild = (function tree$core$removeChild(parent,child){
return clojure.zip.replace.call(null,parent,clojure.zip.make_node.call(null,parent,clojure.zip.node.call(null,parent),cljs.core.filter.call(null,(function (p1__2035_SHARP_){
return cljs.core.not_EQ_.call(null,child,p1__2035_SHARP_);
}),clojure.zip.children.call(null,parent))));
});
tree.core.removeChildren = (function tree$core$removeChildren(loc){
return clojure.zip.replace.call(null,loc,clojure.zip.make_node.call(null,loc,clojure.zip.node.call(null,loc),null));
});
tree.core.siblings_QMARK_ = (function tree$core$siblings_QMARK_(loc){
return ((cljs.core.empty_QMARK_.call(null,clojure.zip.lefts.call(null,loc))) || (cljs.core.empty_QMARK_.call(null,clojure.zip.rights.call(null,loc))));
});
tree.core.deepest_QMARK_ = (function tree$core$deepest_QMARK_(loc){
return (cljs.core.some.call(null,tree.core.nodeBranch_QMARK_,cljs.core.concat.call(null,clojure.zip.lefts.call(null,loc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.node.call(null,loc)], null),clojure.zip.rights.call(null,loc))) == null);
});
tree.core.levelDown = (function tree$core$levelDown(loc){
var ocr_2036 = tree.core.deepest_QMARK_.call(null,loc);
var ocr_2037 = clojure.zip.branch_QMARK_.call(null,loc);
try{if((ocr_2036 === false)){
try{if((ocr_2037 === false)){
return clojure.zip.down.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,tree.core.nodeBranch_QMARK_,cljs.core.concat.call(null,clojure.zip.lefts.call(null,loc),clojure.zip.rights.call(null,loc)))));
} else {
throw cljs.core.match.backtrack;

}
}catch (e2043){if((e2043 instanceof Error)){
var e__1019__auto__ = e2043;
if((e__1019__auto__ === cljs.core.match.backtrack)){
try{if((ocr_2037 === true)){
var x = cljs.core.filter.call(null,tree.core.nodeBranch_QMARK_,clojure.zip.children.call(null,loc));
if(cljs.core.empty_QMARK_.call(null,x)){
return clojure.zip.down.call(null,loc);
} else {
return cljs.core.first.call(null,x);
}
} else {
throw cljs.core.match.backtrack;

}
}catch (e2044){if((e2044 instanceof Error)){
var e__1019__auto____$1 = e2044;
if((e__1019__auto____$1 === cljs.core.match.backtrack)){
throw cljs.core.match.backtrack;
} else {
throw e__1019__auto____$1;
}
} else {
throw e2044;

}
}} else {
throw e__1019__auto__;
}
} else {
throw e2043;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e2041){if((e2041 instanceof Error)){
var e__1019__auto__ = e2041;
if((e__1019__auto__ === cljs.core.match.backtrack)){
try{if((ocr_2036 === true)){
return null;
} else {
throw cljs.core.match.backtrack;

}
}catch (e2042){if((e2042 instanceof Error)){
var e__1019__auto____$1 = e2042;
if((e__1019__auto____$1 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_2036)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_2037)].join('')));
} else {
throw e__1019__auto____$1;
}
} else {
throw e2042;

}
}} else {
throw e__1019__auto__;
}
} else {
throw e2041;

}
}});
tree.core.prunePath = (function tree$core$prunePath(loc){
while(true){
var temp__5455__auto__ = clojure.zip.up.call(null,loc);
if(cljs.core.truth_(temp__5455__auto__)){
var p = temp__5455__auto__;
if(((1) < cljs.core.count.call(null,clojure.zip.children.call(null,p)))){
return tree.core.removeChild.call(null,p,loc);
} else {
var G__2045 = p;
loc = G__2045;
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
tree.core.vilomahChildren = (function tree$core$vilomahChildren(loc,pred){
var removeIf = (function (l){
if(cljs.core.truth_(pred.call(null,l))){
return tree.core.removeChildren.call(null,l);
} else {
return l;
}
});
var l = clojure.zip.down.call(null,loc);
while(true){
if((clojure.zip.right.call(null,l) == null)){
return clojure.zip.up.call(null,removeIf.call(null,l));
} else {
var G__2046 = clojure.zip.right.call(null,removeIf.call(null,l));
l = G__2046;
continue;
}
break;
}
});
tree.core.toFirstChildren = (function tree$core$toFirstChildren(loc){
var l = loc;
while(true){
if(cljs.core.truth_(clojure.zip.branch_QMARK_.call(null,l))){
if(((1) < cljs.core.count.call(null,clojure.zip.children.call(null,l)))){
return tree.core.vilomahChildren.call(null,l,((function (l){
return (function (_){
return true;
});})(l))
);
} else {
var G__2047 = clojure.zip.down.call(null,l);
l = G__2047;
continue;
}
} else {
return l;
}
break;
}
});
tree.core.onlyTrail = (function tree$core$onlyTrail(loc){
var curL = clojure.zip.up.call(null,loc);
var prevL = loc;
var cnt = (0);
while(true){
if((curL == null)){
return prevL;
} else {
var l = tree.core.vilomahChildren.call(null,curL,((function (curL,prevL,cnt){
return (function (p1__2048_SHARP_){
return cljs.core.not_EQ_.call(null,clojure.zip.node.call(null,prevL),clojure.zip.node.call(null,p1__2048_SHARP_));
});})(curL,prevL,cnt))
);
var G__2049 = clojure.zip.up.call(null,l);
var G__2050 = l;
var G__2051 = (cnt + (1));
curL = G__2049;
prevL = G__2050;
cnt = G__2051;
continue;
}
break;
}
});
tree.core.packageNodes = (function tree$core$packageNodes(nodes){
cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"self","self",-1547428899).cljs$core$IFn$_invoke$arity$1(x)], null);
}),nodes);

new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nodes,tree.core.class$], null);

return cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"self","self",-1547428899).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"class","class",-2030961996),tree.core.class$], null);
}),nodes);
});
tree.core.packageNode = (function tree$core$packageNode(node){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,tree.core.class$], null);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"self","self",-1547428899).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"class","class",-2030961996),tree.core.class$], null);
});
tree.core.packageLoc = (function tree$core$packageLoc(loc){
tree.core.packageNode.call(null,clojure.zip.node.call(null,loc));

new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [loc,tree.core.class$], null);

return tree.core.packageNode.call(null,clojure.zip.node.call(null,loc),tree.core.class$);
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
cljs.core.println.call(null,clojure.zip.node.call(null,l));

if(cljs.core.truth_(clojure.zip.end_QMARK_.call(null,l))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [secondary,primary], null);
} else {
var ocr_2052 = (clojure.zip.node.call(null,l) === clojure.zip.node.call(null,loc));
var ocr_2053 = clojure.zip.branch_QMARK_.call(null,l);
if((ocr_2052 === true)){
var G__2057 = tree.core.nextSkipChildren.call(null,l);
var G__2058 = secondary;
var G__2059 = primary;
l = G__2057;
primary = G__2058;
secondary = G__2059;
continue;
} else {
if((ocr_2052 === false)){
if((ocr_2053 === false)){
var G__2060 = clojure.zip.next.call(null,l);
var G__2061 = cljs.core.conj.call(null,primary,new cljs.core.Keyword(null,"self","self",-1547428899).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,l)));
var G__2062 = secondary;
l = G__2060;
primary = G__2061;
secondary = G__2062;
continue;
} else {
if((ocr_2053 === true)){
var G__2063 = clojure.zip.next.call(null,l);
var G__2064 = primary;
var G__2065 = secondary;
l = G__2063;
primary = G__2064;
secondary = G__2065;
continue;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_2052)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_2053)].join('')));

}

}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_2052)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_2053)].join('')));

}

}
}
break;
}
});
tree.core.topLayer = (function tree$core$topLayer(loc){
var vec__2066 = tree.core.getLeaves.call(null,loc);
var l = cljs.core.nth.call(null,vec__2066,(0),null);
var r = cljs.core.nth.call(null,vec__2066,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"self","self",-1547428899).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,loc)),l,r], null);
});
tree.core.middle = (function tree$core$middle(loc){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"self","self",-1547428899).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,loc)),tree.core.packageNodes.call(null,clojure.zip.lefts.call(null,loc)),tree.core.packageNodes.call(null,clojure.zip.rights.call(null,loc))], null);
});
tree.core.zip__GT_compData = (function tree$core$zip__GT_compData(loc){
var l = loc;
var data = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tree.core.topLayer.call(null,loc)], null);
while(true){
var temp__5455__auto__ = clojure.zip.up.call(null,l);
if(cljs.core.truth_(temp__5455__auto__)){
var next = temp__5455__auto__;
var G__2069 = next;
var G__2070 = cljs.core.conj.call(null,data,tree.core.middle.call(null,next));
l = G__2069;
data = G__2070;
continue;
} else {
return data;
}
break;
}
});
tree.core.global__GT_localTree = (function tree$core$global__GT_localTree(loc){
var l = tree.core.toFirstChildren.call(null,loc);
return tree.core.findLoc.call(null,tree.core.onlyTrail.call(null,l),clojure.zip.node.call(null,loc));
});
tree.core.zipLevel__GT_compData = (function tree$core$zipLevel__GT_compData(loc,displayType){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"self","self",-1547428899).cljs$core$IFn$_invoke$arity$1(clojure.zip.node.call(null,loc)),new cljs.core.Keyword(null,"lefts","lefts",-586130889),tree.core.packageNodes.call(null,clojure.zip.lefts.call(null,loc)),new cljs.core.Keyword(null,"rights","rights",363059795),tree.core.packageNodes.call(null,clojure.zip.rights.call(null,loc)),new cljs.core.Keyword(null,"display","display",242065432),displayType], null);
});
tree.core.processLevels = (function tree$core$processLevels(loc,next,displayType){
var l = next.call(null,loc);
var data = cljs.core.PersistentVector.EMPTY;
while(true){
if((l == null)){
return data;
} else {
var G__2071 = next.call(null,l);
var G__2072 = cljs.core.conj.call(null,data,tree.core.zipLevel__GT_compData.call(null,l,displayType));
l = G__2071;
data = G__2072;
continue;
}
break;
}
});
tree.core.localZip__GT_compData = (function tree$core$localZip__GT_compData(loc){
return cljs.core.concat.call(null,tree.core.processLevels.call(null,loc,tree.core.levelDown,new cljs.core.Keyword(null,"future","future",1877842724)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tree.core.zipLevel__GT_compData.call(null,loc,new cljs.core.Keyword(null,"selected","selected",574897764))], null),tree.core.processLevels.call(null,loc,clojure.zip.up,new cljs.core.Keyword(null,"past","past",182249289)));
});
tree.core.zip__GT_compData = cljs.core.comp.call(null,tree.core.localZip__GT_compData,tree.core.global__GT_localTree);
tree.core.dummyRoot = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"self","self",-1547428899),(1),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"self","self",-1547428899),(2),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"self","self",-1547428899),(3)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"self","self",-1547428899),(11)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"self","self",-1547428899),(4),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"self","self",-1547428899),(6)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"self","self",-1547428899),(7)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"self","self",-1547428899),(8)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"self","self",-1547428899),(5),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"self","self",-1547428899),(9)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"self","self",-1547428899),(10)], null)], null)], null)], null)], null)], null)], null);
tree.core.a = tree.core.treeZip.call(null,tree.core.dummyRoot);
tree.core.six = clojure.zip.down.call(null,clojure.zip.right.call(null,clojure.zip.right.call(null,clojure.zip.down.call(null,clojure.zip.down.call(null,tree.core.a)))));
tree.core.two = clojure.zip.down.call(null,tree.core.a);

//# sourceMappingURL=core.js.map
