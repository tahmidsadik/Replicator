package com.tasora.replicator;
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
            "javaContext.replicatorLog(str_arg); };";

    public static final String PRINT_FN_SOURCE = "cljs.core.set_print_fn_BANG_.call(null,print);";

    public static final String GLOBAL_CTX = "var global = this;";

    public static final String REPLICATOR_IMPORT =
            "var CLOSURE_IMPORT_SCRIPT = function(src) {" +
            "if (src === 'undefined' || src === undefined) {return true;}" +
            "javaContext.replicatorImport(src); return true;}";

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
}
