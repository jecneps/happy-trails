(ns a.core
  (:require [clojure.browser.repl :as repl]
  										[rum.core :as rum]))

 (defonce conn
   (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(println "Hello world!")


(rum/defc text [t] [:div.node-text t])

(rum/defc favicon [img_path]
		[:div 
				[:img.node-img {:src img_path}]])

(rum/defc node [img_path t]
		[:div.node (favicon img_path) (text t)])

(defn data2Nodes [data]
		(map (fn [[img_path t]] (node img_path t)) data))

(rum/defc branch [nodes]
		[:div.branch (data2Nodes nodes)])

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

(rum/defc dummyNodes [values]
		[:div (data2Nodes values)])

(rum/mount (tree dummyTree) js/document.body)



