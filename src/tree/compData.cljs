(ns tree.compData
	(:require []))

(defrecord Page [link favicon preText])















(def dummyPages [(Page. "https://www.instructables.com/" "assets/favicons/instructables.png" "Yours for the making - Instructables")
																	(Page. "https://twitter.com/home" "assets/favicons/twitter.png" "Home / Twitter")
																	(Page. "https://roamresearch.com/" "assets/favicons/roam.png" "A tool for networked thought")
																	(Page. "https://stackoverflow.com/" "assets/favicons/stackoverflow.png" "html- using ico as a")
																	(Page. "https://www.lesswrong.com/" "assets/favicons/lw.png" "LessWrong")
																	(Page. "https://aaronzlewis.com/" "assets/favicons/azl.png" "AZL")
																	(Page. "https://slatestarcodex.com/" "assets/favicons/ssc.png" "Slate Star Codex")
																	(Page. "https://github.com/" "assets/favicons/github.png" "Github: Home for your code")
																	(Page. "https://www.google.com/" "assets/favicons/google.png" "Google")																									
																])

(def rpage []
		(rand-nth dummyPages))

(def dummyLinearZip (-> (rpage)
																									page->node
																									treeZip
																									(shiftClick (rpage))
																									zip/down
																									(shiftClick (rpage))
																									zip/down
																									(shiftClick (rpage))
																									zip/down
																									(shiftClick (rpage))
																									zip/down
																									(shiftClick (rpage))
																									zip/down
																									(shiftClick (rpage))
																									zip/down
																									(shiftClick (rpage))
																									zip/down))

(def dummySimpleZip (-> (rpage)
																									page->node
																									treeZip
																									(shiftClick (rpage))
																									zip/down
																									(shiftClick (rpage))
																									zip/down
																									(shiftClick (rpage))
																									zip/down
																									(shiftClick (rpage))
																									zip/down
																									(shiftClick (rpage))
																									zip/down
																									(shiftClick (rpage))
																									zip/down
																									(shiftClick (rpage))
																									zip/down
																									(shiftClick (rpage))
																									(shiftClick (rpage))
																									(shiftClick (rpage))
																									(shiftClick (rpage))
																									(shiftClick (rpage))))

(def dummyZip (-> (rpage) 
																		page->node 
																		treeZip 
																		(shiftClick (rpage)) 
																		zip/down
																		(shiftClick (rpage))
																		(shiftClick (rpage))
																		zip/next
																		zip/next
																		(shiftClick (rpage))
																		zip/up
																		zip/next
																		(shiftClick (rpage))
																		zip/down
																		(shiftClick (rpage))
																		(shiftClick (rpage))
																		(shiftClick (rpage))
																		(shiftClick (rpage))
																		zip/next
																		(shiftClick (rpage))
																		zip/next
																		zip/next
																		(shiftClick (rpage))
																		zip/next
																		(shiftClick (rpage))
																		zip/next
																		(shiftClick (rpage))
																		zip/next
																		zip/next
																		(shiftClick (rpage))
																		zip/next
																		zip/next
																		(shiftClick (rpage))
																		))

(-> dummyLinearZip zip->compData tree (rum/mount js/document.body))