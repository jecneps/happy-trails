(ns components.core
  (:require [clojure.browser.repl :as repl]
  										[rum.core :as rum]
  										[clojure.string :as str]
  										[clojure.core.match :refer [match]]))

 (defonce conn
   (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

;;####################3
;;
;;#####################

(defrecord Page [link favicon preText])

(def displayClass {:future "future" :past "past"})

;;##############################################
;; COMPS and COMP building code
;;##############################################

(rum/defc text [t] [:div.node-text t])

(rum/defc favicon [img_path]
		[:div 
				[:img.node-img {:src img_path}]])


;; TODO change this to take a class string instead
(rum/defc node 
		[page class]
				[:button.node {:class class} (favicon (:favicon page)) (text (:preText page))]
		)

(defn pages->nodes [data class]
		(map (fn [page] (node page class)) data))

(defn data->branch [{center :center lefts :lefts rights :rights display :display}]
		(match [(= display :selected) (and (empty? lefts) (empty? rights))]
				[true _] (concat (pages->nodes lefts "option") [(node center "selected")] (pages->nodes rights "option"))
				[false true] [(node center (display displayClass))]
				[false false] [(node center (str "hidden-options " (display displayClass)))]))

(rum/defc branch [branchData]
		(println branchData)
		[:div.branch (data->branch branchData)])

(rum/defc tree [data]
		(println data)
		[:div.tree (map #(branch %) data)])

;;new shit ccummin





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
 				 

;(.addEventListener js/window "keydown" keyFocusHandler)




;;tree data struct [[node [nodes-to-the-left] [nodes-to-the-right]]....]

; {:center Page :lefts [Page...] :rights [Page...] :display Selected|Future|Past}

;(rum/mount (tree dummyTree) js/document.body)



