## Replicator
Bootstrapped ClojureScript REPL for Android  
Heavily inspired by [Replete's](https://github.com/mfikes/replete).   
Currently using Rhino as the javascript engine but will move to JavaScriptCore later.  

## Running
1.Clone and build ClojureScript master (`script/build`).  
2.Clone David Nolen's [fork of `tools.reader`](https://github.com/swannodette/tools.reader), switch to the `cljs-bootstrap` branch and do `lein install`.  
3.Open the project in Android Studio and run the app on a device or simulator (`Make sure you use Geny Motion for best performance`)

##Contributing
Pull requests are welcome!

##Thanks
[Mike Fikes](https://github.com/mfikes) for guiding me and helping me.

##Licencse
Distributed under the Eclipse Public License, which is also used by ClojureScript.
