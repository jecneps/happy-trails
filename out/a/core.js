// Compiled by ClojureScript 1.10.339 {}
goog.provide('a.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('rum.core');
goog.require('clojure.string');
if((typeof a !== 'undefined') && (typeof a.core !== 'undefined') && (typeof a.core.conn !== 'undefined')){
} else {
a.core.conn = clojure.browser.repl.connect.call(null,"http://localhost:9000/repl");
}
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"Hello world!");
a.core.text = rum.core.lazy_build.call(null,rum.core.build_defc,(function (t){
var attrs2631 = t;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs2631))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node-text"], null)], null),attrs2631)):({"className": "node-text"})),((cljs.core.map_QMARK_.call(null,attrs2631))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs2631)], null)));
}),null,"a.core/text");
a.core.favicon = rum.core.lazy_build.call(null,rum.core.build_defc,(function (img_path){
return React.createElement("div",null,React.createElement("img",({"src": img_path, "className": "node-img"})));
}),null,"a.core/favicon");
a.core.node = rum.core.lazy_build.call(null,rum.core.build_defc,(function (img_path,t,nodeType){
return sablono.interpreter.interpret.call(null,(function (){var G__2632 = nodeType;
var G__2632__$1 = (((G__2632 instanceof cljs.core.Keyword))?G__2632.fqn:null);
switch (G__2632__$1) {
case "taken":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.node.taken","button.node.taken",297121091),a.core.favicon.call(null,img_path),a.core.text.call(null,t)], null);

break;
case "untaken":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.node.untaken","button.node.untaken",1847781983),a.core.favicon.call(null,img_path),a.core.text.call(null,t)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__2632__$1)].join('')));

}
})());
}),null,"a.core/node");
a.core.data2Nodes = (function a$core$data2Nodes(data){
return cljs.core.map.call(null,(function (p__2634){
var vec__2635 = p__2634;
var img_path = cljs.core.nth.call(null,vec__2635,(0),null);
var t = cljs.core.nth.call(null,vec__2635,(1),null);
return a.core.node.call(null,img_path,t,new cljs.core.Keyword(null,"untaken","untaken",-79681731));
}),data);
});
a.core.data2Branch = (function a$core$data2Branch(p__2638){
var vec__2639 = p__2638;
var vec__2642 = cljs.core.nth.call(null,vec__2639,(0),null);
var img_path = cljs.core.nth.call(null,vec__2642,(0),null);
var t = cljs.core.nth.call(null,vec__2642,(1),null);
var left = cljs.core.nth.call(null,vec__2639,(1),null);
var right = cljs.core.nth.call(null,vec__2639,(2),null);
return cljs.core.concat.call(null,a.core.data2Nodes.call(null,left),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a.core.node.call(null,img_path,t,new cljs.core.Keyword(null,"taken","taken",1185385376))], null),a.core.data2Nodes.call(null,right));
});
a.core.horizontalFocus = (function a$core$horizontalFocus(elem,dir){
var next = dir.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),elem.nextElementSibling,new cljs.core.Keyword(null,"left","left",-399115937),elem.previousElementSibling], null));
if(cljs.core._EQ_.call(null,next,null)){
return elem;
} else {
return next;
}
});
a.core.hasClass_QMARK_ = (function a$core$hasClass_QMARK_(class$,elem){
return cljs.core.some.call(null,(function (p1__2645_SHARP_){
return cljs.core._EQ_.call(null,p1__2645_SHARP_,class$);
}),clojure.string.split.call(null,elem.className,/ /));
});
a.core.findClass = (function a$core$findClass(class$,elem){
var e = elem;
while(true){
if(cljs.core.truth_(a.core.hasClass_QMARK_.call(null,class$,e))){
return e;
} else {
var G__2646 = e.nextElementSibling;
e = G__2646;
continue;
}
break;
}
});
a.core.verticalFocus = (function a$core$verticalFocus(elem,dir){
var next = dir.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"up","up",-269712113),elem.parentElement.previousElementSibling,new cljs.core.Keyword(null,"down","down",1565245570),elem.parentElement.nextElementSibling], null));
if(cljs.core._EQ_.call(null,next,null)){
return elem;
} else {
return cljs.core.first.call(null,cljs.core.filterv.call(null,cljs.core.partial.call(null,a.core.hasClass_QMARK_,"taken"),cljs.core.array_seq.call(null,next.children)));
}
});
a.core.keymap = new cljs.core.PersistentArrayMap(null, 4, ["ArrowDown",new cljs.core.Keyword(null,"down","down",1565245570),"ArrowUp",new cljs.core.Keyword(null,"up","up",-269712113),"ArrowLeft",new cljs.core.Keyword(null,"left","left",-399115937),"ArrowRight",new cljs.core.Keyword(null,"right","right",-452581833)], null);
a.core.keyFocusHandler = (function a$core$keyFocusHandler(e){
if(cljs.core.contains_QMARK_.call(null,a.core.keymap,e.key)){
var key = cljs.core.get.call(null,a.core.keymap,e.key);
if(((cljs.core._EQ_.call(null,key,new cljs.core.Keyword(null,"up","up",-269712113))) || (cljs.core._EQ_.call(null,key,new cljs.core.Keyword(null,"down","down",1565245570))))){
return a.core.verticalFocus.call(null,document.activeElement,key).focus();
} else {
return a.core.horizontalFocus.call(null,document.activeElement,key).focus();
}
} else {
return null;
}
});
window.addEventListener("keydown",a.core.keyFocusHandler);
a.core.branch = rum.core.lazy_build.call(null,rum.core.build_defc,(function (nodes){
var attrs2647 = a.core.data2Branch.call(null,nodes);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs2647))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["branch"], null)], null),attrs2647)):({"className": "branch"})),((cljs.core.map_QMARK_.call(null,attrs2647))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs2647)], null)));
}),null,"a.core/branch");
a.core.tree = rum.core.lazy_build.call(null,rum.core.build_defc,(function (data){
var attrs2649 = cljs.core.map.call(null,(function (p1__2648_SHARP_){
return a.core.branch.call(null,p1__2648_SHARP_);
}),data);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs2649))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tree"], null)], null),attrs2649)):({"className": "tree"})),((cljs.core.map_QMARK_.call(null,attrs2649))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs2649)], null)));
}),null,"a.core/tree");
a.core.dummyValues = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["assets/favicons/instructables.png","Yours for the making - Instructables"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["assets/favicons/twitter.png","Home / Twitter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["assets/favicons/roam.png","A tool for networked thought"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["assets/favicons/stackoverflow.png","html- using ico as a"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["assets/favicons/lw.png","LessWrong"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["assets/favicons/azl.png","AZL"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["assets/favicons/ssc.png","Slate Star Codex"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["assets/favicons/github.png","Github: Home for your code"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["assets/favicons/google.png","Google"], null)], null);
a.core.dummyTree = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[a.core.dummyValues,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,a.core.dummyValues,(3))], null),cljs.core.vec.call(null,cljs.core.drop.call(null,(4),cljs.core.take.call(null,(7),a.core.dummyValues))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,a.core.dummyValues,(7))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,a.core.dummyValues,(8))], null)],null));
a.core.dummyTree = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,a.core.dummyValues,(0)),cljs.core.take.call(null,(4),a.core.dummyValues),cljs.core.drop.call(null,(4),a.core.dummyValues)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,a.core.dummyValues,(1)),cljs.core.List.EMPTY,cljs.core.List.EMPTY], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,a.core.dummyValues,(2)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,a.core.dummyValues,(5))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,a.core.dummyValues,(6))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,a.core.dummyValues,(3)),cljs.core.List.EMPTY,cljs.core.List.EMPTY], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,a.core.dummyValues,(4)),cljs.core.List.EMPTY,cljs.core.List.EMPTY], null)], null);
rum.core.mount.call(null,a.core.tree.call(null,a.core.dummyTree),document.body);

//# sourceMappingURL=core.js.map
