package com.tasora.replete;
import android.app.Activity;
import android.util.Log;
import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;

public class Util {

    public static final String REPLICATOR_LOG = "var console = {}; console.log = function(msg) { " +
            "android.util.Log.d('RHINO: ', msg); };" +
            "var print = function(str_arg) {" +
            "android.util.Log.d('Replicator: ', str_arg);" +
            "javaContext.updateUi(str_arg); };";

    public static final String PRINT_FN_SOURCE = "cljs.core.set_print_fn_BANG_.call(null,print);";

    public static final String GLOBAL_CTX = "var global = this;";

    public static final String REPLICATOR_IMPORT = "var REPLICATOR_IMPORT = com.tasora.replete.Util.importReplicator;" +
            "var CLOSURE_IMPORT_SCRIPT = function(src) {" +
            "if (src === 'undefined' || src === undefined) {return true;}" +
            "com.tasora.replete.MainActivity.evalJs( String(REPLICATOR_IMPORT(src, javaContext))); return true};";

    public static final String TRACK_LOADED_LIBS_SOURCE = "cljs.core._STAR_loaded_libs_STAR_ = cljs.core.into.call(null, cljs.core.PersistentHashSet.EMPTY, [\"cljs.core\"]);\n" +
            "goog.require = function (name, reload) {\n" +
            "    if(!cljs.core.contains_QMARK_(cljs.core._STAR_loaded_libs_STAR_, name) || reload) {\n" +
            "        var AMBLY_TMP = cljs.core.PersistentHashSet.EMPTY;\n" +
            "        if (cljs.core._STAR_loaded_libs_STAR_) {\n" +
            "            AMBLY_TMP = cljs.core._STAR_loaded_libs_STAR_;\n" +
            "        }\n" +
            "        cljs.core._STAR_loaded_libs_STAR_ = cljs.core.into.call(null, AMBLY_TMP, [name]);\n" +
            "        CLOSURE_IMPORT_SCRIPT(goog.dependencies_.nameToPath[name]);\n" +
            "    }\n" +
            "};";

    public static void log(String msg) {
        android.util.Log.i("RHINO_LOG", msg);
    }

    public static String convertStreamToString(InputStream is) throws Exception {
        BufferedReader reader = new BufferedReader(new InputStreamReader(is));
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) {
            sb.append(line).append("\n");
        }
        reader.close();
        return sb.toString();
    }

    public static String importReplicator(String src, Activity a) throws Exception {
        String valid_path = "out/";
        if(src.startsWith("..")) {
            String[] import_path_arr = src.split("/");
            for (int i = 1; i < import_path_arr.length; i++) {
                valid_path += import_path_arr[i];
                if (i != import_path_arr.length - 1) {
                    valid_path += "/";
                }
            }
        } else if(src.startsWith("goog")) {
            String[] import_path_arr = src.split("/");
            for (int i = 0; i < import_path_arr.length; i++) {
                valid_path += import_path_arr[i];
                if (i != import_path_arr.length - 1) {
                    valid_path += "/";
                }
            }
        } else if(src.startsWith("cljs")) {
            String[] import_path_arr = src.split("/");
            for (int i = 0; i < import_path_arr.length; i++) {
                valid_path += import_path_arr[i];
                if (i != import_path_arr.length - 1) {
                    valid_path += "/";
                }
            }
        }
        else {
            valid_path = "out/goog/" +src;
        }
        Log.d("Src path:", src);
        return convertStreamToString(a.getAssets().open(valid_path));
    }
}
