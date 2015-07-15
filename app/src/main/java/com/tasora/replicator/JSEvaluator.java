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

    public static Context rhino_context;
    public static Scriptable rhino_scope;
    public String goog_base_source;
    public String deps_source;
    public String macros_source;

    public Object evalJs(String src) {
        return rhino_context.evaluateString(rhino_scope, src, "Main Activity", 1, null);
    }

    public String importReplicator(String src) throws Exception {
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

    public Object evalJsWithImport(String src) {
        try {

        String importReplicator = importReplicator(src);
        return rhino_context.evaluateString(rhino_scope, importReplicator, "Main Activity", 1, null);
        } catch (Exception e) {
            return null;
        }
    }

    public void init(Activity activity) {
        this.assetManager = activity.getAssets();

        listener = (Listener) activity;

        //setting up js context
        setUpRhino();
        setUpConsoleLog();
        setUpGlobalContext();
        setUpImportClosureScript();

        setUpRepl(activity);
    }

    public void setUpRhino() {
        rhino_context = Context.enter();
        rhino_context.setOptimizationLevel(-1);
        rhino_scope = rhino_context.initStandardObjects();
        ScriptableObject.putProperty(rhino_scope, "javaContext", Context.javaToJS(this, rhino_scope));
    }

    public void setUpConsoleLog() {
        evalJs(Util.REPLICATOR_LOG);
    }

    public void setUpGlobalContext() {
        evalJs(Util.GLOBAL_CTX);
    }

    public void setUpImportClosureScript() {
        evalJs(Util.REPLICATOR_IMPORT);
    }

    public void setUpRepl(Activity activity) {
        //Reading cljs source and converting them to string so that we can eval them from Rhino
        try {
            goog_base_source = convertStreamToString(assetManager.open("out/goog/base.js"));
            deps_source = convertStreamToString(assetManager.open("out/deps.js"));
            macros_source = convertStreamToString(assetManager.open("out/cljs/core$macros.js"));
        } catch (Exception e) {
            e.printStackTrace();
        }

        // Should do this in a background thread.
        evalJs(goog_base_source);
        evalJs(deps_source);
        evalJs("goog.isProvided_ = function(x) { return false; };");
        evalJs("goog.require = function (name) { return CLOSURE_IMPORT_SCRIPT(goog.dependencies_.nameToPath[name]); };");
        evalJs("goog.require('cljs.core');");
        evalJs(Util.TRACK_LOADED_LIBS_SOURCE);
        evalJs(Util.PRINT_FN_SOURCE);
        evalJs(macros_source);
        evalJs("goog.require('replete.core');");
        evalJs("goog.provide('cljs.user')");
        evalJs("goog.require('cljs.core')");
    }

    public void evaluate(String code) {
        rhino_context.evaluateString(rhino_scope, macros_source, "user", 1, null);
        evalJs("var window = global;");
        Object res = evalJs("replete.core.read_eval_print.call(null, '"+ code +"');");
    }

    public void update(String output) {
        listener.updateUi(output);
    }

}
