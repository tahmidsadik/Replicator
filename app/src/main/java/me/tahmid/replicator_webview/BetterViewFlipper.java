package me.tahmid.replicator_webview;

//taken from Frankie Sardo's code

import android.content.Context;
import android.util.AttributeSet;
import android.widget.ViewFlipper;

public class BetterViewFlipper extends ViewFlipper{
    public BetterViewFlipper(Context context) {
        super(context);
    }

    public BetterViewFlipper(Context context, AttributeSet attrs) {
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
