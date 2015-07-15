package com.tasora.replicator;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.KeyEvent;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.ListAdapter;
import android.widget.ListView;
import android.widget.TextView;

import org.mozilla.javascript.Context;
import org.mozilla.javascript.Scriptable;
import org.mozilla.javascript.ScriptableObject;

import static com.tasora.replicator.Util.convertStreamToString;

public class MainActivity extends AppCompatActivity {

    public static Context rhino_context;
    public static Scriptable rhino_scope;
    public String goog_base_source;
    public String deps_source;
    public String macros_source;
    public EditText code_et;

    private ArrayAdapter<String> adapter;

    @SuppressWarnings("unused")
    public void updateUi(String msg) {
        adapter.add(msg);
        code_et.setText("");
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
        setContentView(com.tasora.replicator.R.layout.activity_main);
        code_et = (EditText) findViewById(com.tasora.replicator.R.id.input);
        code_et.setOnKeyListener(new View.OnKeyListener() {
            @Override
            public boolean onKey(View v, int keyCode, KeyEvent event) {
                if (event.getAction() == KeyEvent.ACTION_DOWN
                        && event.getKeyCode() == KeyEvent.KEYCODE_ENTER) {
                    calljs(code_et);
                    return true;
                }
                return false;
            }
        });
        ListView repl_space = (ListView) findViewById(com.tasora.replicator.R.id.repl_space);
        adapter = new ArrayAdapter<String>(this, android.R.layout.simple_list_item_1);
        repl_space.setAdapter(adapter);

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

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(com.tasora.replicator.R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        int id = item.getItemId();

        if (id == R.id.action_clear_history) {
            adapter.clear();
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    public void calljs(View view) {
        rhino_context.evaluateString(rhino_scope, macros_source, "user", 1, null);
        evalJs("var window = global;");

        String code = code_et.getText().toString();
        Object res = evalJs("replete.core.read_eval_print.call(null, '"+ code +"');");
    }
}
