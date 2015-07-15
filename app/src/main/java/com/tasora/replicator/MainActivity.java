package com.tasora.replicator;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.KeyEvent;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.ViewSwitcher;

import com.squareup.otto.Subscribe;

public class MainActivity extends AppCompatActivity implements JSEvaluator.Listener {

    private EditText code_et;
    private ViewSwitcher switcher;

    private ArrayAdapter<String> adapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        code_et = (EditText) findViewById(R.id.input);
        code_et.setOnKeyListener(new View.OnKeyListener() {
            @Override
            public boolean onKey(View v, int keyCode, KeyEvent event) {
                if (event.getAction() == KeyEvent.ACTION_DOWN
                        && event.getKeyCode() == KeyEvent.KEYCODE_ENTER) {
                    onClick(code_et);
                    return true;
                }
                return false;
            }
        });
        switcher = (ViewSwitcher) findViewById(R.id.switcher);
        ListView repl_space = (ListView) findViewById(com.tasora.replicator.R.id.repl_space);
        adapter = new ArrayAdapter<String>(this, android.R.layout.simple_list_item_1);
        repl_space.setAdapter(adapter);

//        switcher.showNext();
    }

    @Override
    protected void onResume() {
        super.onResume();
        App.get(this).evaluator().setListener(this);
        App.get(this).bus().register(this);
    }

    @Override
    protected void onPause() {
        App.get(this).evaluator().unsetListener();
        App.get(this).bus().unregister(this);
        super.onPause();
    }

    @Subscribe
    public void onAppReady(App.ReadyEvent event) {
        switcher.showNext();
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

    public void onClick(View view) {
        App.get(this).evaluator().evaluate(code_et.getText().toString());
    }

    @Override
    public void updateUi(String msg) {
        adapter.add(msg);
        code_et.setText("");
    }
}
