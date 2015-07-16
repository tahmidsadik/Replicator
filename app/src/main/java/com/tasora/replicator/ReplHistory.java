package com.tasora.replicator;

import android.content.Context;
import android.util.AttributeSet;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ArrayAdapter;
import android.widget.BaseAdapter;
import android.widget.FrameLayout;
import android.widget.ListAdapter;
import android.widget.ListView;

import butterknife.Bind;
import butterknife.ButterKnife;

public class ReplHistory extends FrameLayout {

    @Bind(android.R.id.list) ListView listView;
    ArrayAdapter<String> adapter;

    public ReplHistory(Context context) {
        super(context);
        init();
    }

    public ReplHistory(Context context, AttributeSet attrs) {
        super(context, attrs);
        init();
    }

    public ReplHistory(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        init();
    }

    private void init() {
        inflate(getContext(), R.layout.list_content, this);
        ButterKnife.bind(this);

        adapter = new ArrayAdapter<String>(getContext(), R.layout.repl_results);
        listView.setDivider(null);
        listView.setDividerHeight(0);
        listView.setAdapter(adapter);
    }

    public void push(String msg) {
        adapter.add(msg);
    }

    public void clear() {
        adapter.clear();
    }
}
