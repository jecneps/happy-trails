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
a.core.banner = rum.core.lazy_build.call(null,rum.core.build_defc,(function (text){
var attrs2635 = text;
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs2635))?sablono.interpreter.attributes.call(null,attrs2635):null),((cljs.core.map_QMARK_.call(null,attrs2635))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs2635)], null)));
}),null,"a.core/banner");
rum.core.mount.call(null,a.core.banner.call(null,"bye"),document.body);

//# sourceMappingURL=core.js.map
