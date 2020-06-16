(ns a.core
  (:require [clojure.browser.repl :as repl]
  										[rum.core :as rum]))

 (defonce conn
   (repl/connect "http://localhost:9000/repl"))

(enable-console-print!)

(println "Hello world!")


(rum/defc banner [text]
		[:div text])

(rum/mount (banner "bye") js/document.body)


