// Compiled by ClojureScript 1.10.339 {}
goog.provide('a.core');
goog.require('cljs.core');
goog.require('clojure.browser.repl');
goog.require('rum.core');
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
a.core.node = rum.core.lazy_build.call(null,rum.core.build_defc,(function (img_path,t){
var attrs2632 = a.core.favicon.call(null,img_path);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs2632))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["node"], null)], null),attrs2632)):({"className": "node"})),((cljs.core.map_QMARK_.call(null,attrs2632))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,a.core.text.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs2632),sablono.interpreter.interpret.call(null,a.core.text.call(null,t))], null)));
}),null,"a.core/node");
a.core.data2Nodes = (function a$core$data2Nodes(data){
return cljs.core.map.call(null,(function (p__2633){
var vec__2634 = p__2633;
var img_path = cljs.core.nth.call(null,vec__2634,(0),null);
var t = cljs.core.nth.call(null,vec__2634,(1),null);
return a.core.node.call(null,img_path,t);
}),data);
});
a.core.branch = rum.core.lazy_build.call(null,rum.core.build_defc,(function (nodes){
var attrs2637 = a.core.data2Nodes.call(null,nodes);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs2637))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["branch"], null)], null),attrs2637)):({"className": "branch"})),((cljs.core.map_QMARK_.call(null,attrs2637))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs2637)], null)));
}),null,"a.core/branch");
a.core.tree = rum.core.lazy_build.call(null,rum.core.build_defc,(function (data){
var attrs2639 = cljs.core.map.call(null,(function (p1__2638_SHARP_){
return a.core.branch.call(null,p1__2638_SHARP_);
}),data);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs2639))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tree"], null)], null),attrs2639)):({"className": "tree"})),((cljs.core.map_QMARK_.call(null,attrs2639))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs2639)], null)));
}),null,"a.core/tree");
a.core.dummyValues = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["assets/favicons/instructables.png","Yours for the making - Instructables"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["assets/favicons/twitter.png","Home / Twitter"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["assets/favicons/roam.png","A tool for networked thought"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["assets/favicons/stackoverflow.png","html- using ico as a"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["assets/favicons/lw.png","LessWrong"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["assets/favicons/azl.png","AZL"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["assets/favicons/ssc.png","Slate Star Codex"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["assets/favicons/github.png","Github: Home for your code"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["assets/favicons/google.png","Google"], null)], null);
a.core.dummyTree = (new cljs.core.PersistentVector(null,5,(5),cljs.core.PersistentVector.EMPTY_NODE,[a.core.dummyValues,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,a.core.dummyValues,(3))], null),cljs.core.vec.call(null,cljs.core.drop.call(null,(4),cljs.core.take.call(null,(7),a.core.dummyValues))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,a.core.dummyValues,(7))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.nth.call(null,a.core.dummyValues,(8))], null)],null));
a.core.dummyNodes = rum.core.lazy_build.call(null,rum.core.build_defc,(function (values){
var attrs2640 = a.core.data2Nodes.call(null,values);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs2640))?sablono.interpreter.attributes.call(null,attrs2640):null),((cljs.core.map_QMARK_.call(null,attrs2640))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs2640)], null)));
}),null,"a.core/dummyNodes");
rum.core.mount.call(null,a.core.tree.call(null,a.core.dummyTree),document.body);

//# sourceMappingURL=core.js.map
