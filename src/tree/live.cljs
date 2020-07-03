(ns tree.live
		(:require [tree.core :as tree]
												[components.core :as comp]
												[clojure.zip :as zip]
												[rum.core :as rum]))


(def dummyPages [(comp/Page. "https://www.instructables.com/" "assets/favicons/instructables.png" "Yours for the making - Instructables")
																	(comp/Page. "https://twitter.com/home" "assets/favicons/twitter.png" "Home / Twitter")
																	(comp/Page. "https://roamresearch.com/" "assets/favicons/roam.png" "A tool for networked thought")
																	(comp/Page. "https://stackoverflow.com/" "assets/favicons/stackoverflow.png" "html- using ico as a")
																	(comp/Page. "https://www.lesswrong.com/" "assets/favicons/lw.png" "LessWrong")
																	(comp/Page. "https://aaronzlewis.com/" "assets/favicons/azl.png" "AZL")
																	(comp/Page. "https://slatestarcodex.com/" "assets/favicons/ssc.png" "Slate Star Codex")
																	(comp/Page. "https://github.com/" "assets/favicons/github.png" "Github: Home for your code")
																	(comp/Page. "https://www.google.com/" "assets/favicons/google.png" "Google")																									
																])

(println dummyPages)

(defn rpage []
		(rand-nth dummyPages))

(def dummyLinearZip (-> (rpage)
																									tree/page->zipNode
																									tree/treeZip
																									(tree/shiftClick (rpage))
																									zip/down
																									(tree/shiftClick (rpage))
																									zip/down
																									(tree/shiftClick (rpage))
																									zip/down
																									(tree/shiftClick (rpage))
																									zip/down
																									(tree/shiftClick (rpage))
																									zip/down
																									(tree/shiftClick (rpage))
																									zip/down
																									(tree/shiftClick (rpage))
																									zip/down))

(def dummySimpleZip (-> (rpage)
																									tree/page->zipNode
																									tree/treeZip
																									(tree/shiftClick (rpage))
																									zip/down
																									(tree/shiftClick (rpage))
																									zip/down
																									(tree/shiftClick (rpage))
																									zip/down
																									(tree/shiftClick (rpage))
																									zip/down
																									(tree/shiftClick (rpage))
																									zip/down
																									(tree/shiftClick (rpage))
																									zip/down
																									(tree/shiftClick (rpage))
																									zip/down
																									(tree/shiftClick (rpage))
																									(tree/shiftClick (rpage))
																									(tree/shiftClick (rpage))
																									(tree/shiftClick (rpage))
																									(tree/shiftClick (rpage))
																									zip/down))

(def dummyZip (-> (rpage) 
																		tree/page->zipNode
																		tree/treeZip 
																		(tree/shiftClick (rpage)) 
																		zip/down
																		(tree/shiftClick (rpage)) 
																		(tree/shiftClick (rpage)) 
																		(tree/shiftClick (rpage)) 
																		zip/down
																		(tree/shiftClick (rpage)) 
																		(tree/shiftClick (rpage)) 
																		zip/next
																		zip/next
																		zip/next
																		(tree/shiftClick (rpage)) 
																		zip/next
																		zip/next
																		(tree/shiftClick (rpage)) 
																		(tree/shiftClick (rpage)) 
																		zip/prev
																		))


(println "all parsed!")

;(println dummyLinearZip)

(println (tree/zip->compData dummyZip))
;(println (list (repeatedly 20 rpage)))

(rum/mount (comp/tree (tree/zip->compData dummyZip)) js/document.body)