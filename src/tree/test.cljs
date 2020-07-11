(ns tree.test 
	(:require [tree.core :as tree]
											[clojure.zip :as zip]
											[clojure.test :as test]))

(def dummyRoot1 {:self 1 :children [
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


(def a (tree/treeZip dummyRoot1))
(def six (-> a zip/down zip/down zip/right zip/right zip/down))


(test/deftest find
		(test/is (= (tree/findLoc dummyRoot1 {:self 6}) six)))




;;##################################
(test/run-tests 'tree.test)