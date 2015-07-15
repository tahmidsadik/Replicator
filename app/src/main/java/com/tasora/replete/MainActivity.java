package com.tasora.replete;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.TextView;

import org.mozilla.javascript.Context;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.ScriptableObject;

import static com.tasora.replete.Util.convertStreamToString;

public class MainActivity extends AppCompatActivity {
    public static Context rhino_context;
    public static Scriptable rhino_scope;
    public String goog_base_source;
    public String deps_source;
    public String macros_source;
    public EditText code_et;
    public LinearLayout repl_space;

    public void updateUi(String msg) {
        TextView result = new TextView(this);
        result.setText(msg);
        repl_space.addView(result);
    }

    public static Object evalJs(String src) {
        return rhino_context.evaluateString(rhino_scope, src, "Main Activity", 1, null);
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

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        code_et = (EditText) findViewById(R.id.input);
        repl_space = (LinearLayout) findViewById(R.id.repl_space);

        //setting up js context
        setUpRhino();
        setUpConsoleLog();
        setUpGlobalContext();
        setUpImportClosureScript();

        //Reading cljs source and converting them to string so that we can eval them from Rhino
        try {
            goog_base_source = convertStreamToString(getAssets().open("out/goog/base.js"));
            deps_source = convertStreamToString(getAssets().open("out/deps.js"));
            macros_source = convertStreamToString(getAssets().open("out/cljs/core$macros.js"));
        } catch (Exception e) {
            e.printStackTrace();
        }

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
        rhino_context.evaluateString(rhino_scope, macros_source, "MainActivity", 1, null);
        evalJs("var window = global;");

        String code = code_et.getText().toString();
        Object res = evalJs("replete.core.read_eval_print.call(null, '"+ code +"');");
    }
}
