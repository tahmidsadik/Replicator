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

    private JSEvaluator evaluator = new JSEvaluator();
    private EditText code_et;

    private ArrayAdapter<String> adapter;

    @SuppressWarnings("unused")
    public void updateUi(String msg) {
        adapter.add(msg);
        code_et.setText("");
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

        evaluator.init(this);
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
        evaluator.callJs(code_et.getText().toString());
    }
}
