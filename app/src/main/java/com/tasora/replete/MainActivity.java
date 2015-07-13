package com.tasora.replete;

import android.app.Activity;
import android.content.res.AssetManager;
import android.content.res.Resources;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.webkit.WebView;
import android.widget.TextView;

import org.mozilla.javascript.Context;
import org.mozilla.javascript.Function;
import org.mozilla.javascript.NativeObject;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.ScriptableObject;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.Charset;
import java.util.Objects;

public class MainActivity extends AppCompatActivity {

    //Replete Clone
    private static final String REPLICATOR_LOG = "var console = {}; console.log = function(msg) { " +
            "android.util.Log.d('RHINO: ', msg); };";

    private static final String GLOBAL_CTX = "var global = this;";

    private static final String REPLICATOR_IMPORT = "var REPLICATOR_IMPORT = com.tasora.replete.MainActivity.importReplicator;" +
            "var CLOSURE_IMPORT_SCRIPT = function(src) {" +
            "if (src === 'undefined' || src === undefined) {return true;}" +
            "eval( String(REPLICATOR_IMPORT(src, javaContext))); return true};";

    public static void log(String msg) {
        android.util.Log.i("RHINO_LOG", msg);
    }

    public static void jlog(String topic, String msg) {
        android.util.Log.d(topic, msg);
    }

    public static String convertStreamToString(InputStream is) throws Exception {
        BufferedReader reader = new BufferedReader(new InputStreamReader(is));
        StringBuilder sb = new StringBuilder();
        String line = null;
        while ((line = reader.readLine()) != null) {
            sb.append(line).append("\n");
        }
        reader.close();
        return sb.toString();
    }

    public static String importReplicator(String src, Activity a) throws Exception {
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
        Log.d("Debug path:", valid_path);
        Log.d("Src path:", src);
        return convertStreamToString(a.getAssets().open(valid_path));
    }

    public void runScript() {
        Context rhino = Context.enter();
        // Turn off optimization to make Rhino Android compatible
        rhino.setOptimizationLevel(-1);
        try {
            Scriptable scope = rhino.initStandardObjects();
            // This line set the javaContext variable in JavaScript
            ScriptableObject.putProperty(scope, "javaContext", Context.javaToJS(this, scope));
            ScriptableObject.putProperty(scope, "rhino_engine", Context.javaToJS(rhino, scope));
            String googbase = convertStreamToString(getAssets().open("out/goog/base.js"));
            String googdeps = convertStreamToString(getAssets().open("out/goog/deps.js"));
            String outdeps = convertStreamToString(getAssets().open("out/deps.js"));
            String macroSrc = convertStreamToString(getAssets().open("out/cljs/core$macros.js"));
            String corejs = convertStreamToString(getAssets().open("out/cljs/core.js"));

            //setting up console.log
            rhino.evaluateString(scope, REPLICATOR_LOG, "MainActivity", 1, null);
            rhino.evaluateString(scope, GLOBAL_CTX, "MainActivity", 1, null);
            rhino.evaluateString(scope, REPLICATOR_IMPORT, "MainActivity", 1, null);
            rhino.evaluateString(scope, googbase, "MainActivity", 1, null);
            rhino.evaluateString(scope, REPLICATOR_IMPORT, "MainActivity", 1, null);
            rhino.evaluateString(scope, outdeps, "MainActivity", 1, null);

            rhino.evaluateString(scope, "goog.isProvided_ = function(x) { return false; };", "MainActivity", 1, null);
            rhino.evaluateString(scope, "goog.require = function (name) { return CLOSURE_IMPORT_SCRIPT(goog.dependencies_.nameToPath[name]); };", "MainActivity", 1, null);
            rhino.evaluateString(scope, "goog.require('cljs.core');", "MainActivity", 1, null);
            rhino.evaluateString(scope, "cljs.core._STAR_loaded_libs_STAR_ = cljs.core.into.call(null, cljs.core.PersistentHashSet.EMPTY, [\"cljs.core\"]);\n"+
                    "goog.require = function (name, reload) {\n"+
                    "    if(!cljs.core.contains_QMARK_(cljs.core._STAR_loaded_libs_STAR_, name) || reload) {\n"+
                    "        var AMBLY_TMP = cljs.core.PersistentHashSet.EMPTY;\n"+
                    "        if (cljs.core._STAR_loaded_libs_STAR_) {\n"+
                    "            AMBLY_TMP = cljs.core._STAR_loaded_libs_STAR_;\n"+
                    "        }\n"+
                    "        cljs.core._STAR_loaded_libs_STAR_ = cljs.core.into.call(null, AMBLY_TMP, [name]);\n"+
                    "        CLOSURE_IMPORT_SCRIPT(goog.dependencies_.nameToPath[name]);\n"+
                    "    }\n"+
                    "};", "MainActivity", 1, null);
            rhino.evaluateString(scope, macroSrc, "MainActivity", 1, null);
            rhino.evaluateString(scope, ":foo", "MainActivity", 1, null);

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            Context.exit();
        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        runScript();
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    public void calljs(View view) {
        runScript();
    }
}
