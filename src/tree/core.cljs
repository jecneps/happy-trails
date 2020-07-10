(ns tree.core
		(:require [clojure.zip :as zip]
												[clojure.core.match :refer [match]]))




(defn treeZip [root]
		(zip/zipper 
				#(:children %1)
				#(:children %1)
				(fn [node children] 
						(if (nil? children)
								(with-meta {:self (:self node)} (meta node))
								(with-meta {:self (:self node) :children (vec children)} (meta node))))
				root))

;;#########################
;; generic zip utility
;;##########################

(defn getEnd [loc]
		(if (zip/end? loc)
				loc
				(recur (zip/next loc))))

;doesn't work if loc is end
(defn rootLoc [loc]
		(if-let [p (zip/up loc)]
				(recur p)
				loc))

(defn find [loc node]
		(match [(zip/end? loc) (= node (zip/node loc))]
				[true _] nil
				[false true] loc
				[false false](recur (zip/next loc))))

;returns loc that zip/next would if it skipped all children
(defn nextSkipChildren [loc]
		(loop [l (zip/next loc)]
				(match [(zip/end? l) (true? (some #(identical? (zip/node loc) %) (zip/path l)))]
						[true _] l
						[false false] l ;;does it inclued itself in the path? (NOPE)
						[false true] (recur (zip/next l))
						)))

(defn removeChild [parent child]
		(zip/replace parent (zip/make-node parent (zip/node parent) (filter #(not= child %) (zip/children parent)))))

(defn removeChildren [loc]
		(zip/replace loc (zip/make-node loc (zip/node parent) nil)))

(defn siblings? [loc]
		(or (empty? (zip/lefts loc)) (empty? (zip/rights loc))))

;do none of your siblings have kids?
(defn deepest? [loc]
		(some zip/branch? (concat (zip/lefts loc) [loc] (zip/rights loc))))

;assumes a trunk branch structure, returns loc of next piece of trunk, nil if none
(defn levelDown [loc]
		(match [(deepest? loc) (zip/branch? loc)]
				[false  false] (zip/down (first (filter zip/branch? (concat (zip/lefts loc) (zip/rights loc)))))
				[false true] (first (filter zip/branch? (zip/children loc)))
				[true _] nil
				))
						

;;returns zipper minus this loc's children, and every only child 
;; leading up to this loc
(defn prunePath [loc]
		(if-let [p (zip/up loc)]
				(if (< 1 (count (zip/children p)))
						(removeChild p loc)
						(recur p))
				nil))

	(defn prune [loc]
			(removeChild (zip/up loc) loc))

;;possibly uncesseary indirection?

(defn vilomahChildren [loc pred]
		(loop [l (zip/down loc)]
				(if (nil? l)
						loc
						(if (pred l)
								(recur (-> l removeChildren zip/right))
								(recur (zip/right l))
						))))


;goes down the tree till end, or till first set of multiple kids. removes all further down
(defn toFirstChildren [loc]
		(loop [l loc]
				(if (zip/branch? l)
						(if (< 1 (count (zip/children l)))
								(vilomahChildren l (fn [_] true))
								(recur (zip/down l)))
						l)))

(defn onlyTrail [loc]
		(loop [curL (zip/up loc) prevL loc]
				(if (nil? curL)
						prevL
						(let [l (vilomahChildren curL #(not (= prevL %)))]
								(recur (zip/up l) l)))))
			


;;#######################################
;; USER FUNCTIONS
;;######################################
(defn packageNodes 
		[nodes]
				(map #({:page (:self %)}) nodes)
		[nodes class]
				(map #({:page (:self %) :class class})))

(defn packageNode
		[node]
				{:page (:self node)}
		[node class]
				{:page (:self node) :class class})

(defn packageLoc 
		[loc]
				(packageNode (zip/node loc))
		[loc class]
				(packageNode (zip/node loc) class)
		)

(defn page->zipNode [page]
		{:self page})


(defn backpage [loc]
		(prune loc))


(defn shiftClick [loc page]
		(if (zip/branch? loc)
				(zip/insert-child loc (page->zipNode page))
				(zip/replace loc (zip/make-node loc (zip/node loc) [(page->zipNode page)])))
		)



;;###################################
;; code for making component data
;;###################################
;returns all leaves to the left and the right of loc
(defn getLeaves [loc]
		(let [right [] left []]
				(loop [l (rootLoc loc) primary left secondary right]
						(println (zip/node l))
						(if (zip/end? l)
								[secondary primary]
								(match [(identical? (zip/node l) (zip/node loc)) (= nil (zip/branch? l))]
										[true _] (recur (nextSkipChildren l) secondary primary) ;swap l&r, skip children
										[false true] (recur (zip/next l) (conj primary (:self (zip/node l))) secondary) ;add leaf TODO get self
										[false false] (recur (zip/next l)  primary secondary) ;nothing to see here
								)))))

(defn topLayer [loc]
		(let [[l r] (getLeaves loc)]
				[(-> loc zip/node :self) l r]))

(defn middle [loc]
		[(-> loc zip/node :self) (-> loc zip/lefts packageNodes) (-> loc zip/rights packageNodes)])

(defn zip->compData [loc]
		(loop [l loc data [(topLayer loc)]]
				(if-let [next (zip/up l)]
						(recur next (conj data (middle next)))
						data)))

;;#################
;; old bullshit^^^
;; new bullshit


(defn global->localTree [loc]
		(let [l (toFirstChildren loc)]
				(find (onlyTrail (zip/up l) l) (zip/node loc))))

(defn zipLevel->compData [loc displayType]
		{:center (-> loc zip/node :self)
			:lefts (packageNodes (zip/lefts loc))
			:rights (packageNodes (zip/rights loc))
			:display  displayType
			})

(defn processLevels [loc next displayType]
		(loop [l (next loc) data []]
				(if (nil? l)
						data
						(recur (next l) (conj data (zipLevel->compData l displayType))))))

(defn localZip->compData [loc]
		(concat (processLevels loc levelDown :future)
										(zipLevel->compData loc :selected)
										(processLevels loc zip/up :past)
										))

(def zip->compData (comp localZip->compData global->localTree))


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


(def a (treeZip dummyRoot))
(def six (-> a zip/down zip/down zip/right zip/right zip/down))

	
