(ns components.core
  (:require [clojure.browser.repl :as repl]
  										[rum.core :as rum]
  										[clojure.string :as str]))

 (defonce conn
   (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

;;####################3
;;
;;#####################

(defrecord Page [link favicon preText])



;;##############################################
;; COMPS and COMP building code
;;##############################################

(rum/defc text [t] [:div.node-text t])

(rum/defc favicon [img_path]
		[:div 
				[:img.node-img {:src img_path}]])

(rum/defc node [page nodeType]
		(case nodeType
				:taken [:button.node.taken (favicon (:favicon page)) (text (:preText page))]
				:untaken [:button.node.untaken (favicon (:favicon page)) (text (:preText page))])
		)

(defn pages->nodes [data]
		(map (fn [page] (node page :untaken)) data))

(defn data->branch [[page left right]]
		(concat (pages->nodes left) [(node page :taken)] (pages->nodes right)))

(rum/defc branch [branchData]
		[:div.branch (data->branch branchData)])

(rum/defc tree [data]
	[:div.tree (map #(branch %) data)])




;;MAYBE-TODO: react wants all children in a list to have a key,
;; it somehow makes it easier for it to tell when to update

;;##################################################
;; Event stuff
;;##################################################

(def keymap {"ArrowDown" :down 
													"ArrowUp" :up 
													"ArrowLeft" :left
													"ArrowRight" :right})

(defn hasClass? [class elem]
		(some #(= %1 class) (str/split (.. elem -className) #" ")))

(defn findClass [class elem]
		(loop [e elem]
				(if (hasClass? class e)
						e
						(recur (. e -nextElementSibling)))))



(defn horizontalFocus [elem dir]
		(let [next (dir {:right (. elem -nextElementSibling) :left (. elem -previousElementSibling)})] 
				(if (= next nil)
						elem
						next)))

(defn verticalFocus [elem dir]
		(let [next (dir {:up (.. elem -parentElement -previousElementSibling) 
																			:down (.. elem -parentElement -nextElementSibling)})]
				(if (= next nil)
						elem
						(first (filterv (partial hasClass? "taken") (array-seq (. next -children)))))))



(defn keyFocusHandler [e]
		(if (contains? keymap (. e -key))
				(let [key (get keymap (. e -key))]
						(if (or (= key :up) (= key :down))
								(.focus (verticalFocus (. js/document -activeElement) key))
								(.focus (horizontalFocus (. js/document -activeElement) key))))))
 				 

(.addEventListener js/window "keydown" keyFocusHandler)




;;tree data struct [[node [nodes-to-the-left] [nodes-to-the-right]]....]

(rum/mount (tree dummyTree) js/document.body)



