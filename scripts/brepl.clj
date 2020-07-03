(require
  '[cljs.build.api :as b]
  '[cljs.repl :as repl]
  '[cljs.repl.browser :as browser])

(b/build "src"
  {:main 'components.core
   :output-to "out/a.js"
   :output-dir "out"
   :verbose true})

(b/build "src"
  {:main 'tree.core
   :output-to "out/tree.js"
   :output-dir "out"
   :verbose true})

(b/build "src"
		{:main 'tree.live
			:output-to "out/live.js"
			:output-dir "out"
			:verbose true})

(repl/repl (browser/repl-env)
  :output-dir "out")
