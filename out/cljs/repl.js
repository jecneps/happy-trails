// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__1403){
var map__1404 = p__1403;
var map__1404__$1 = ((((!((map__1404 == null)))?(((((map__1404.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1404.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1404):map__1404);
var m = map__1404__$1;
var n = cljs.core.get.call(null,map__1404__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__1404__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1406_1428 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1407_1429 = null;
var count__1408_1430 = (0);
var i__1409_1431 = (0);
while(true){
if((i__1409_1431 < count__1408_1430)){
var f_1432 = cljs.core._nth.call(null,chunk__1407_1429,i__1409_1431);
cljs.core.println.call(null,"  ",f_1432);


var G__1433 = seq__1406_1428;
var G__1434 = chunk__1407_1429;
var G__1435 = count__1408_1430;
var G__1436 = (i__1409_1431 + (1));
seq__1406_1428 = G__1433;
chunk__1407_1429 = G__1434;
count__1408_1430 = G__1435;
i__1409_1431 = G__1436;
continue;
} else {
var temp__5457__auto___1437 = cljs.core.seq.call(null,seq__1406_1428);
if(temp__5457__auto___1437){
var seq__1406_1438__$1 = temp__5457__auto___1437;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1406_1438__$1)){
var c__4351__auto___1439 = cljs.core.chunk_first.call(null,seq__1406_1438__$1);
var G__1440 = cljs.core.chunk_rest.call(null,seq__1406_1438__$1);
var G__1441 = c__4351__auto___1439;
var G__1442 = cljs.core.count.call(null,c__4351__auto___1439);
var G__1443 = (0);
seq__1406_1428 = G__1440;
chunk__1407_1429 = G__1441;
count__1408_1430 = G__1442;
i__1409_1431 = G__1443;
continue;
} else {
var f_1444 = cljs.core.first.call(null,seq__1406_1438__$1);
cljs.core.println.call(null,"  ",f_1444);


var G__1445 = cljs.core.next.call(null,seq__1406_1438__$1);
var G__1446 = null;
var G__1447 = (0);
var G__1448 = (0);
seq__1406_1428 = G__1445;
chunk__1407_1429 = G__1446;
count__1408_1430 = G__1447;
i__1409_1431 = G__1448;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1449 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1449);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1449)))?cljs.core.second.call(null,arglists_1449):arglists_1449));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1410_1450 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1411_1451 = null;
var count__1412_1452 = (0);
var i__1413_1453 = (0);
while(true){
if((i__1413_1453 < count__1412_1452)){
var vec__1414_1454 = cljs.core._nth.call(null,chunk__1411_1451,i__1413_1453);
var name_1455 = cljs.core.nth.call(null,vec__1414_1454,(0),null);
var map__1417_1456 = cljs.core.nth.call(null,vec__1414_1454,(1),null);
var map__1417_1457__$1 = ((((!((map__1417_1456 == null)))?(((((map__1417_1456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1417_1456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1417_1456):map__1417_1456);
var doc_1458 = cljs.core.get.call(null,map__1417_1457__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1459 = cljs.core.get.call(null,map__1417_1457__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1455);

cljs.core.println.call(null," ",arglists_1459);

if(cljs.core.truth_(doc_1458)){
cljs.core.println.call(null," ",doc_1458);
} else {
}


var G__1460 = seq__1410_1450;
var G__1461 = chunk__1411_1451;
var G__1462 = count__1412_1452;
var G__1463 = (i__1413_1453 + (1));
seq__1410_1450 = G__1460;
chunk__1411_1451 = G__1461;
count__1412_1452 = G__1462;
i__1413_1453 = G__1463;
continue;
} else {
var temp__5457__auto___1464 = cljs.core.seq.call(null,seq__1410_1450);
if(temp__5457__auto___1464){
var seq__1410_1465__$1 = temp__5457__auto___1464;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1410_1465__$1)){
var c__4351__auto___1466 = cljs.core.chunk_first.call(null,seq__1410_1465__$1);
var G__1467 = cljs.core.chunk_rest.call(null,seq__1410_1465__$1);
var G__1468 = c__4351__auto___1466;
var G__1469 = cljs.core.count.call(null,c__4351__auto___1466);
var G__1470 = (0);
seq__1410_1450 = G__1467;
chunk__1411_1451 = G__1468;
count__1412_1452 = G__1469;
i__1413_1453 = G__1470;
continue;
} else {
var vec__1419_1471 = cljs.core.first.call(null,seq__1410_1465__$1);
var name_1472 = cljs.core.nth.call(null,vec__1419_1471,(0),null);
var map__1422_1473 = cljs.core.nth.call(null,vec__1419_1471,(1),null);
var map__1422_1474__$1 = ((((!((map__1422_1473 == null)))?(((((map__1422_1473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1422_1473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1422_1473):map__1422_1473);
var doc_1475 = cljs.core.get.call(null,map__1422_1474__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1476 = cljs.core.get.call(null,map__1422_1474__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1472);

cljs.core.println.call(null," ",arglists_1476);

if(cljs.core.truth_(doc_1475)){
cljs.core.println.call(null," ",doc_1475);
} else {
}


var G__1477 = cljs.core.next.call(null,seq__1410_1465__$1);
var G__1478 = null;
var G__1479 = (0);
var G__1480 = (0);
seq__1410_1450 = G__1477;
chunk__1411_1451 = G__1478;
count__1412_1452 = G__1479;
i__1413_1453 = G__1480;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__1424 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__1425 = null;
var count__1426 = (0);
var i__1427 = (0);
while(true){
if((i__1427 < count__1426)){
var role = cljs.core._nth.call(null,chunk__1425,i__1427);
var temp__5457__auto___1481__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___1481__$1)){
var spec_1482 = temp__5457__auto___1481__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1482));
} else {
}


var G__1483 = seq__1424;
var G__1484 = chunk__1425;
var G__1485 = count__1426;
var G__1486 = (i__1427 + (1));
seq__1424 = G__1483;
chunk__1425 = G__1484;
count__1426 = G__1485;
i__1427 = G__1486;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__1424);
if(temp__5457__auto____$1){
var seq__1424__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1424__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__1424__$1);
var G__1487 = cljs.core.chunk_rest.call(null,seq__1424__$1);
var G__1488 = c__4351__auto__;
var G__1489 = cljs.core.count.call(null,c__4351__auto__);
var G__1490 = (0);
seq__1424 = G__1487;
chunk__1425 = G__1488;
count__1426 = G__1489;
i__1427 = G__1490;
continue;
} else {
var role = cljs.core.first.call(null,seq__1424__$1);
var temp__5457__auto___1491__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___1491__$2)){
var spec_1492 = temp__5457__auto___1491__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1492));
} else {
}


var G__1493 = cljs.core.next.call(null,seq__1424__$1);
var G__1494 = null;
var G__1495 = (0);
var G__1496 = (0);
seq__1424 = G__1493;
chunk__1425 = G__1494;
count__1426 = G__1495;
i__1427 = G__1496;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
