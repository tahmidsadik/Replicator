package com.tasora.replicator;


import android.content.res.AssetManager;
import android.util.Log;

import org.mozilla.javascript.Context;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.ScriptableObject;

import static com.tasora.replicator.Util.convertStreamToString;

public class JSEvaluator {

    interface Listener {
        void updateUi(String msg);
    }

    private Listener listener;
    private AssetManager assetManager;

    private Scriptable rhinoScope;
    private String googBaseSource;
    private String depsSource;
    private String macrosSource;

    private boolean initialised = false;

    private String replicatorImportStream(String src) throws Exception {
        String validPath = "out/";
        if(src.startsWith("..")) {
            String[] importPathArr = src.split("/");
            for (int i = 1; i < importPathArr.length; i++) {
                validPath += importPathArr[i];
                if (i != importPathArr.length - 1) {
                    validPath += "/";
                }
            }
        } else if(src.startsWith("goog")) {
            String[] importPathArr = src.split("/");
            for (int i = 0; i < importPathArr.length; i++) {
                validPath += importPathArr[i];
                if (i != importPathArr.length - 1) {
                    validPath += "/";
                }
            }
        } else if(src.startsWith("cljs")) {
            String[] importPathArr = src.split("/");
            for (int i = 0; i < importPathArr.length; i++) {
                validPath += importPathArr[i];
                if (i != importPathArr.length - 1) {
                    validPath += "/";
                }
            }
        }
        else {
            validPath = "out/goog/" +src;
        }
        Log.d("Src path:", src);
        return convertStreamToString(assetManager.open(validPath));
    }

    public void init(android.content.Context android) {
        assetManager = android.getAssets();

        Context context = Context.enter();
        context.setOptimizationLevel(-1);
        //setting up js context
        setUpRhino(context);
        setUpConsoleLog(context);
        setUpGlobalContext(context);
        setUpImportClosureScript(context);

        setUpRepl(context);

        initialised = true;
    }

    private void setUpRhino(Context context) {
        rhinoScope = context.initStandardObjects();
        ScriptableObject.putProperty(rhinoScope, "javaContext", Context.javaToJS(this, rhinoScope));
    }

    private void setUpConsoleLog(Context context) {
        evalJs(context, Util.REPLICATOR_LOG);
    }

    private void setUpGlobalContext(Context context) {
        evalJs(context, Util.GLOBAL_CTX);
    }

    private void setUpImportClosureScript(Context context) {
        evalJs(context, Util.REPLICATOR_IMPORT);
    }

    private void setUpRepl(Context context) {
        //Reading cljs source and converting them to string so that we can eval them from Rhino
        try {
            googBaseSource = convertStreamToString(assetManager.open("out/goog/base.js"));
            depsSource = convertStreamToString(assetManager.open("out/deps.js"));
            macrosSource = convertStreamToString(assetManager.open("out/cljs/core$macros.js"));
        } catch (Exception e) {
            e.printStackTrace();
        }

        // Should do this in a background thread.
        evalJs(context, googBaseSource);
        evalJs(context, depsSource);
        evalJs(context, "goog.isProvided_ = function(x) { return false; };");
        evalJs(context, "goog.require = function (name) { return CLOSURE_IMPORT_SCRIPT(goog.dependencies_.nameToPath[name]); };");
        evalJs(context, "goog.require('cljs.core');");
        evalJs(context, Util.TRACK_LOADED_LIBS_SOURCE);
        evalJs(context, Util.PRINT_FN_SOURCE);
        evalJs(context, macrosSource);
        evalJs(context, "goog.require('replete.core');");
        evalJs(context, "goog.provide('cljs.user')");
        evalJs(context, "goog.require('cljs.core')");
    }

    private Object evalJs(Context context, String src) {
        return context.evaluateString(rhinoScope, src, "JSEvaluator", 1, null);
    }

    // Called from Javascript
    @SuppressWarnings("unused")
    public void replicatorLog(String output) {
        if (listener!= null)
            listener.updateUi(output);
    }

    @SuppressWarnings("unused")
    public Object replicatorImport(String src) {
        Context context = Context.enter();
        try {
            return evalJs(context, replicatorImportStream(src));
        } catch (Exception e) {
            return null;
        } finally {
            Context.exit();
        }
    }

    // Called from Java Code
    public Object evaluate(String code) {
        Context context = Context.enter();
        context.setOptimizationLevel(-1);
        try {
            context.evaluateString(rhinoScope, macrosSource, "user", 1, null);
            evalJs(context, "var window = global;");
            return evalJs(context, "replete.core.read_eval_print.call(null, '"+ code +"');");
        } finally {
            Context.exit();
        }
    }

    public void setListener(Listener listener) {
        this.listener = listener;
    }

    public void unsetListener() {
        this.listener = null;
    }

    public boolean isInitialised() {
        return initialised;
    }
}
