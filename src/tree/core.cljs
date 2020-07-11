(ns tree.core
		(:require [clojure.zip :as zip]
												[clojure.core.match :refer [match]]
												[clojure.pprint :as pprint]))




(defn treeZip [root]
		(zip/zipper 
				#(not= nil (:children %)) ;oops, this previously didn't follow the spec
				#(:children %)
				(fn [node children] 
						(if (nil? children)
								(with-meta {:self (:self node)} (meta node))
								(with-meta {:self (:self node) :children (vec children)} (meta node))))
				root))

(defn nTimes [f n x] ((apply comp (repeat n f)) x))

;;#########################
;; generic zip utility
;;##########################

;to simple to test
(defn getEnd [loc]
		(if (zip/end? loc)
				loc
				(recur (zip/next loc))))

;doesn't work if loc is end
(defn rootLoc [loc]
		(if-let [p (zip/up loc)]
				(recur p)
				loc))

;needed cuz you can't call zip/branch? on a node,
(defn nodeBranch? [node]
		(not= nil (:children node)))

(defn identicalElements? [node1 node2]
		(identical? (:self node1) (:self node2)))

(defn findLoc [loc node]
		(match [(zip/end? loc) (identicalElements? node (zip/node loc))]
				[true _] nil
				[false true] loc
				[false false](recur (zip/next loc) node)))

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
		(zip/replace loc (zip/make-node loc (zip/node loc) nil)))


(defn siblings? [loc]
		(or (empty? (zip/lefts loc)) (empty? (zip/rights loc))))

;you are on the deepest level if none of your siblings have kids
(defn deepest? [loc]
		(nil? (some nodeBranch? (concat (zip/lefts loc) [(zip/node loc)] (zip/rights loc)))))

;assumes a trunk branch structure, returns loc of next piece of trunk, nil if none
(defn levelDown [loc]
		(match [(deepest? loc) (zip/branch? loc)]
				[false  false] (zip/down (first (filter nodeBranch? (concat (zip/lefts loc) (zip/rights loc)))))
				[false true] (let [x (filter nodeBranch? (zip/children loc))]
																			(if (empty? x) 
																					(zip/down loc) 
																					(first x)))
				[true _] nil))
						

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


;vilomah, a parent that's lost their children
;iterates thru children, if they meet pred, vilomah them
;assumes you have at least one child
(defn vilomahChildren [loc pred]
		(let [removeIf (fn [l] (if (pred l) (removeChildren l) l))]
				(loop [l (zip/down loc)]
						(if (nil? (zip/right l))
								(-> l removeIf zip/up)
								(recur (-> l removeIf zip/right))))))


;goes down the tree till end, or till first set of multiple kids. removes all further down
(defn toFirstChildren [loc]
		(loop [l loc]
				(if (zip/branch? l)
						(if (< 1 (count (zip/children l)))
								(vilomahChildren l (fn [_] true))
								(recur (zip/down l)))
						l)))

;probs chil
;turns everything below into trunk structure
(defn onlyTrail [loc]
		(loop [curL (zip/up loc) prevL loc cnt 0]
				(if (nil? curL)
						prevL
						(let [l (vilomahChildren curL #(not= (zip/node prevL) (zip/node %)))]
								(recur (zip/up l) l (inc cnt))))))
			


;;#######################################
;; USER FUNCTIONS
;;######################################
(defn packageNodes 
		[nodes]
				(map (fn [x] {:page (:self x)}) nodes)
		[nodes class]
				(map (fn [x] {:page (:self x) :class class}) nodes))

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
								(match [(identical? (zip/node l) (zip/node loc)) (zip/branch? l)]
										[true _] (recur (nextSkipChildren l) secondary primary) ;swap l&r, skip children
										[false false] (recur (zip/next l) (conj primary (:self (zip/node l))) secondary) ;add leaf TODO get self
										[false true] (recur (zip/next l)  primary secondary) ;nothing to see here
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
				(findLoc (onlyTrail l) (zip/node loc))))

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
										[(zipLevel->compData loc :selected)]
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
(def two (-> a zip/down))


	
