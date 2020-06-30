(ns tree.cljs
		(:require [clojure.zip :as zip]
												[clojure.core.match :refer [match]]))


(defn tree_zip [root]
		(zip/zipper 
				#(:children %1)
				#(:children %1)
				(fn [node children] 
						(with-meta {:self (:self node) :children (vec children)} (meta node)))
				root))

(defn nextSkipChildren [loc]
		(loop [l loc]
				(match [(zip/end? l) (contains? (zip/path l) loc)]
						[true _] l
						[false false] l ;;does it inclued itself in the path?
						[false true] (recur (zip/next l))
						)))


(defn getLeaves [loc]
		(let [right [] left []](
				loop [l loc primary left secondary right]
						(match [(zip/branch? l) (= l loc) (zip/end? l)]
								[true _ _] (recur (zip/next l)  primary secondary) ;nothing to see here
								[_ false false] (recur (zip/next l) (conj primary (zip/node l)) secondary) ;add leaf
								[_ true _] (recur (nextSkipChildren l) secondary primary) ;swap l&r, skip children
								[_ _ true] [secondary primary] ;return
								))))

(def dummyRoot {:self 1 :children [
																																			{:self 2 :children [
																																																							{:self 3}
																																																							{:self 4 :children [
																																																																											{:self 6}
																																																																											{:self 7}
																																																																											{:self 8}
																																																								]}
																																																							{:self 5}
																																				]}
																																			]})
(def a (tree_zip dummyRoot))
;(println (getLeaves a))
(println a)
(js/console.log a)
;(js/console.log (getLeaves a))
	
