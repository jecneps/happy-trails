(ns tree.cljs
		(:require [clojure.zip :as z]))


(defn tree_zip [root]
		(z/zipper 
				#(:children %1)
				#(:children %1)
				(fn [node root] 
						(with-meta {:self (:self node) :children (vec children)} (meta node)))
				root))
	
