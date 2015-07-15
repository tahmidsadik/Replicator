package com.tasora.replicator;


import android.content.Context;
import android.util.AttributeSet;
import android.widget.ViewFlipper;

public class BetterViewSwitcher extends ViewFlipper {
    public BetterViewSwitcher(Context context) {
        super(context);
    }

    public BetterViewSwitcher(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    public void showFirst() {
        while (getDisplayedChild() != 0) {
            showNext();
        }
    }

    public void showSecond() {
        while (getDisplayedChild() != 1) {
            showNext();
        }
    }

    public boolean isFirst() {
        return getDisplayedChild() == 0;
    }

    public boolean isSecond() {
        return getDisplayedChild() == 1;
    }
}
