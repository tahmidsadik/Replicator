package com.tasora.replicator;


import android.app.Activity;
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

    private static Scriptable rhino_scope;
    private String goog_base_source;
    private String deps_source;
    private String macros_source;

    private String replicatorImportStream(String src) throws Exception {
        String valid_path = "out/";
        if(src.startsWith("..")) {
            String[] import_path_arr = src.split("/");
            for (int i = 1; i < import_path_arr.length; i++) {
                valid_path += import_path_arr[i];
                if (i != import_path_arr.length - 1) {
                    valid_path += "/";
                }
            }
        } else if(src.startsWith("goog")) {
            String[] import_path_arr = src.split("/");
            for (int i = 0; i < import_path_arr.length; i++) {
                valid_path += import_path_arr[i];
                if (i != import_path_arr.length - 1) {
                    valid_path += "/";
                }
            }
        } else if(src.startsWith("cljs")) {
            String[] import_path_arr = src.split("/");
            for (int i = 0; i < import_path_arr.length; i++) {
                valid_path += import_path_arr[i];
                if (i != import_path_arr.length - 1) {
                    valid_path += "/";
                }
            }
        }
        else {
            valid_path = "out/goog/" +src;
        }
        Log.d("Src path:", src);
        return convertStreamToString(assetManager.open(valid_path));
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
    }

    private void setUpRhino(Context context) {
        rhino_scope = context.initStandardObjects();
        ScriptableObject.putProperty(rhino_scope, "javaContext", Context.javaToJS(this, rhino_scope));
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
            goog_base_source = convertStreamToString(assetManager.open("out/goog/base.js"));
            deps_source = convertStreamToString(assetManager.open("out/deps.js"));
            macros_source = convertStreamToString(assetManager.open("out/cljs/core$macros.js"));
        } catch (Exception e) {
            e.printStackTrace();
        }

        // Should do this in a background thread.
        evalJs(context, goog_base_source);
        evalJs(context, deps_source);
        evalJs(context, "goog.isProvided_ = function(x) { return false; };");
        evalJs(context, "goog.require = function (name) { return CLOSURE_IMPORT_SCRIPT(goog.dependencies_.nameToPath[name]); };");
        evalJs(context, "goog.require('cljs.core');");
        evalJs(context, Util.TRACK_LOADED_LIBS_SOURCE);
        evalJs(context, Util.PRINT_FN_SOURCE);
        evalJs(context, macros_source);
        evalJs(context, "goog.require('replete.core');");
        evalJs(context, "goog.provide('cljs.user')");
        evalJs(context, "goog.require('cljs.core')");
    }

    private Object evalJs(Context context, String src) {
        return context.evaluateString(rhino_scope, src, "JSEvaluator", 1, null);
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
        context.setOptimizationLevel(-1);
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
            context.evaluateString(rhino_scope, macros_source, "user", 1, null);
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
}
