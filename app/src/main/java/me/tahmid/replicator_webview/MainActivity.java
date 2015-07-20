package me.tahmid.replicator_webview;

import android.content.Context;
import android.os.Bundle;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.Toast;

import butterknife.Bind;
import butterknife.ButterKnife;
import butterknife.OnClick;

public class MainActivity extends AppCompatActivity {

    ArrayAdapter<String> adapter;
    Handler mHandler;
    @Bind(R.id.repl_history) ListView replHistory;
    @Bind(R.id.input_code) EditText inputCode;
    @Bind(R.id.js_evaluator) WebView webView;
    @Bind(R.id.eval_btn) Button evalButton;
    @OnClick(R.id.eval_btn) void triggerEval() {
        String code = inputCode.getText().toString();
        inputCode.setText("");
        adapter.add("user=> " + code);
        evalJs(code);
    }

    public void evalJs(String jscode) {
        webView.loadUrl("javascript:replete.core.read_eval_print.call(null,'" + jscode + "');");
    }

    public void updateUi(String msg) {
        if(!msg.equals("\n")) {
            adapter.add(msg);
        }
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ButterKnife.bind(this);
        evalButton.setEnabled(false);
        mHandler = new Handler();

        //preparing cljs
        webView = (WebView) findViewById(R.id.js_evaluator);
        webView.addJavascriptInterface(new JavascriptBridge(this), "replicator");
        webView.getSettings().setJavaScriptEnabled(true);
        webView.getSettings().setAllowFileAccess(true);
        webView.loadUrl("file:///android_asset/index.html");

        adapter = new ArrayAdapter<String>(this, R.layout.list_item);

        replHistory.setDivider(null);
        replHistory.setDividerHeight(0);
        replHistory.setAdapter(adapter);

    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.menu_main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        int id = item.getItemId();
        if (id == R.id.action_settings) {
            clearHistory();
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    public void clearHistory() {
        adapter.clear();
    }

    public class JavascriptBridge {
        Context mContext;

        public JavascriptBridge(Context c) {
            mContext = c;
        }

        @JavascriptInterface
        public void triggerUiUpdate(final String result) {
            if(!result.equals("\n")) {
                mHandler.post(new Runnable() {
                    @Override
                    public void run() {
                        updateUi(result);
                    }
                });
            }
        }

        @JavascriptInterface
        public void replDidLoad() {
            mHandler.post(new Runnable() {
                @Override
                public void run() {
                    evalButton.setEnabled(true);
                }
            });
        }
    }
}
