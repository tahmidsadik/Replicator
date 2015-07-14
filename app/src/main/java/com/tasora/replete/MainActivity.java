package com.tasora.replete;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;

import org.mozilla.javascript.Context;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.ScriptableObject;

import static com.tasora.replete.Util.convertStreamToString;

public class MainActivity extends AppCompatActivity {
    public static Context rhino_context;
    public static Scriptable rhino_scope;

    public static void evalJs(String src) {
        rhino_context.evaluateString(rhino_scope, src, "Main Activity", 1, null);
    }

    public void setUpRhino() {
        rhino_context = Context.enter();
        rhino_context.setOptimizationLevel(-1);
    }

    public void setUpConsoleLog() {
        
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        //setting up js context
        rhino_context = Context.enter();
        rhino_context.setOptimizationLevel(-1);
        rhino_scope = rhino_context.initStandardObjects();
        ScriptableObject.putProperty(rhino_scope, "javaContext", Context.javaToJS(this, rhino_scope));

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


    public void runScript() {
        try {
            String googbase = convertStreamToString(getAssets().open("out/goog/base.js"));
            String outdeps = convertStreamToString(getAssets().open("out/deps.js"));
            String macroSrc = convertStreamToString(getAssets().open("out/cljs/core$macros.js"));

            //setting up console.log
            rhino_context.evaluateString(rhino_scope, Util.REPLICATOR_LOG, "MainActivity", 1, null);
            rhino_context.evaluateString(rhino_scope, Util.GLOBAL_CTX, "MainActivity", 1, null);
            rhino_context.evaluateString(rhino_scope, Util.REPLICATOR_IMPORT, "MainActivity", 1, null);
            rhino_context.evaluateString(rhino_scope, googbase, "MainActivity", 1, null);
            rhino_context.evaluateString(rhino_scope, outdeps, "MainActivity", 1, null);

            rhino_context.evaluateString(rhino_scope, "goog.isProvided_ = function(x) { return false; };", "MainActivity", 1, null);
            rhino_context.evaluateString(rhino_scope, "goog.require = function (name) { return CLOSURE_IMPORT_SCRIPT(goog.dependencies_.nameToPath[name]); };", "MainActivity", 1, null);
            rhino_context.evaluateString(rhino_scope, "goog.require('cljs.core');", "MainActivity", 1, null);
            rhino_context.evaluateString(rhino_scope, "cljs.core._STAR_loaded_libs_STAR_ = cljs.core.into.call(null, cljs.core.PersistentHashSet.EMPTY, [\"cljs.core\"]);\n" +
                    "goog.require = function (name, reload) {\n" +
                    "    if(!cljs.core.contains_QMARK_(cljs.core._STAR_loaded_libs_STAR_, name) || reload) {\n" +
                    "        var AMBLY_TMP = cljs.core.PersistentHashSet.EMPTY;\n" +
                    "        if (cljs.core._STAR_loaded_libs_STAR_) {\n" +
                    "            AMBLY_TMP = cljs.core._STAR_loaded_libs_STAR_;\n" +
                    "        }\n" +
                    "        cljs.core._STAR_loaded_libs_STAR_ = cljs.core.into.call(null, AMBLY_TMP, [name]);\n" +
                    "        CLOSURE_IMPORT_SCRIPT(goog.dependencies_.nameToPath[name]);\n" +
                    "    }\n" +
                    "};", "MainActivity", 1, null);
            rhino_context.evaluateString(rhino_scope, macroSrc, "MainActivity", 1, null);
            Object res = rhino_context.evaluateString(rhino_scope, "goog.require('replete.core'); replete.core.read-eval-print('(+ 1 2)');", "MainActivity", 1, null);
            Log.d("Result", res.toString());

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            Context.exit();
        }
    }

    public void calljs(View view) {
        runScript();
    }



}
