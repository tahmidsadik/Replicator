package com.tasora.replicator;

import android.app.Application;
import android.content.Context;
import android.os.Handler;
import android.os.Looper;

import com.squareup.otto.Bus;

public class App extends Application {

    private final Bus bus = new MainThreadBus();
    private final JSEvaluator evaluator = new JSEvaluator();

    @Override
    public void onCreate() {
        super.onCreate();
        final Context context = this;
        new Thread() {
            @Override
            public void run() {
                evaluator.init(context);
                bus.post(new ReadyEvent());
            }
        }.start();
    }

    public static App get(Context context) {
        return (App) context.getApplicationContext();
    }

    public Bus bus() {
        return bus;
    }

    public JSEvaluator evaluator() {
        return evaluator;
    }

    public static class ReadyEvent {
    }

    public static class MainThreadBus extends Bus {
        private final Handler handler = new Handler(Looper.getMainLooper());

        @Override
        public void post(final Object event) {
            if (Looper.myLooper() == Looper.getMainLooper()) {
                super.post(event);
            } else {
                handler.post(new Runnable() {
                    @Override
                    public void run() {
                        MainThreadBus.super.post(event);
                    }
                });
            }
        }
    }
}
