(ns tree.core
		(:require [clojure.zip :as zip]
												[clojure.core.match :refer [match]]))


(defn tree_zip [root]
		(zip/zipper 
				#(:children %1)
				#(:children %1)
				(fn [node children] 
						(with-meta {:self (:self node) :children (vec children)} (meta node)))
				root))

(defn cleanNodes [nodes]
		(map #(:self %) nodes))

;doesn't work if loc is end
(defn rootLoc [loc]
		(if-let [p (zip/up loc)]
				(recur p)
				loc))

;returns loc that zip/next would if it skipped all children
(defn nextSkipChildren [loc]
		(loop [l (zip/next loc)]
				(match [(zip/end? l) (true? (some #(= (zip/node loc) %) (zip/path l)))]
						[true _] l
						[false false] l ;;does it inclued itself in the path? (NOPE)
						[false true] (recur (zip/next l))
						)))


;returns all leaves to the left and the right of loc
(defn getLeaves [loc]
		(let [right [] left []]
				(loop [l (rootLoc loc) primary left secondary right]
						(if (zip/end? l)
								[secondary primary]
								(match [(= (zip/node l) (zip/node loc)) (= nil (zip/branch? l))]
										[true _] (recur (nextSkipChildren l) secondary primary) ;swap l&r, skip children
										[false true] (recur (zip/next l) (conj primary (:self (zip/node l))) secondary) ;add leaf TODO get self
										[false false] (recur (zip/next l)  primary secondary) ;nothing to see here
								)))))



(defn topLayer [loc]
		(let [[l r] (getLeaves loc)]
				[(-> loc zip/node :self) l r]))

(defn middle [loc]
		[(-> loc zip/node :self) (-> loc zip/lefts cleanNodes) (-> loc zip/rights cleanNodes)])

(defn loc->compData [loc]
		(loop [l loc data [(topLayer loc)]]
				(if-let [next (zip/up l)]
						(recur next (conj data (middle next)))
						data)))


(def dummyRoot {:self 1 :children [
																																			{:self 2 :children [
																																																							{:self 3}
																																																							{:self 11}
																																																							{:self 4 :children [
																																																																											{:self 6}
																																																																											{:self 7}
																																																																											{:self 8}
																																																																										]}	
																																																							{:self 5 :children [
																																																																											{:self 9}
																																																																											{:self 10}
																																																																										]}
																																																						]}
																																			]})
(defn getEnd [loc]
		(if (zip/end? loc)
				loc
				(recur (zip/next loc))))

(def a (tree_zip dummyRoot))
(def six (-> a zip/down zip/down zip/right zip/right zip/down))

;(println (zip/branch? (getEnd a)))
(println (getLeaves six))
(println (loc->compData six))


;(js/console.log (getLeaves a))
	
