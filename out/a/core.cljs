(ns a.core
  (:require [clojure.browser.repl :as repl]
  										[rum.core :as rum]
  										[clojure.string :as str]))

 (defonce conn
   (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(println "Hello world!")


(rum/defc text [t] [:div.node-text t])

(rum/defc favicon [img_path]
		[:div 
				[:img.node-img {:src img_path}]])

(rum/defc node [img_path t nodeType]
		(case nodeType
				:taken [:button.node.taken (favicon img_path) (text t)]
				:untaken [:button.node.untaken (favicon img_path) (text t)])
		)

(defn data2Nodes [data]
		(map (fn [[img_path t]] (node img_path t :untaken)) data))

(defn data2Branch [[[img_path t] left right]]
		(concat (data2Nodes left) [(node img_path t :taken)] (data2Nodes right)))

(defn horizontalFocus [elem dir]
		(let [next (dir {:right (. elem -nextElementSibling) :left (. elem -previousElementSibling)})] 
				(if (= next nil)
						elem
						next)))

(defn hasClass? [class elem]
		(some #(= %1 class) (str/split (.. elem -className) #" ")))

(defn findClass [class elem]
		(loop [e elem]
				(if (hasClass? class e)
						e
						(recur (. e -nextElementSibling)))))

(defn verticalFocus [elem dir]
		(let [next (dir {:up (.. elem -parentElement -previousElementSibling) 
																			:down (.. elem -parentElement -nextElementSibling)})]
				(if (= next nil)
						elem
						(first (filterv (partial hasClass? "taken") (array-seq (. next -children)))))))

(println (str/split "hi i can help" #" "))
(js/console.log (filter #(= 1 %1) [1 2 3]))
(js/console.log (filterv #(= 1 %1) [1 2 3]))
		

(def keymap {"ArrowDown" :down 
													"ArrowUp" :up 
													"ArrowLeft" :left
													"ArrowRight" :right})

(defn keyFocusHandler [e]
		(if (contains? keymap (. e -key))
				(let [key (get keymap (. e -key))]
						(if (or (= key :up) (= key :down))
								(.focus (verticalFocus (. js/document -activeElement) key))
								(.focus (horizontalFocus (. js/document -activeElement) key))))))
 				 

(.addEventListener js/window "keydown" keyFocusHandler)

(rum/defc branch [nodes]
		[:div.branch (data2Branch nodes)])

(rum/defc tree [data]
	[:div.tree (map #(branch %1) data)])





(def dummyValues [["assets/favicons/instructables.png" "Yours for the making - Instructables"] 
																																						["assets/favicons/twitter.png" "Home / Twitter"] 
																																						["assets/favicons/roam.png" "A tool for networked thought"] 
																																						["assets/favicons/stackoverflow.png" "html- using ico as a"]
																																						["assets/favicons/lw.png" "LessWrong"]
																																						["assets/favicons/azl.png" "AZL"]
																																						["assets/favicons/ssc.png" "Slate Star Codex"]
																																						["assets/favicons/github.png" "Github: Home for your code"]
																																						["assets/favicons/google.png" "Google"]])

(def dummyTree (vector dummyValues [(nth dummyValues 3)] (vec (drop 4 (take 7 dummyValues))) [(nth dummyValues 7)] [(nth dummyValues 8)]))
(def dummyTree [[(nth dummyValues 0) (take 4 dummyValues) ( drop 4 dummyValues)] 
																[(nth dummyValues 1) () ()] 
																[(nth dummyValues 2) [(nth dummyValues 5)] [(nth dummyValues 6)]] 
																[(nth dummyValues 3) () ()] 
																[(nth dummyValues 4) () ()]])



(rum/mount (tree dummyTree) js/document.body)



