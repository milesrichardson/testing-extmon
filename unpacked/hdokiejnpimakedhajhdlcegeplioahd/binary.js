function hasProperty(s, e, a) {
  var s, e;
  return (
    "object" == typeof s &&
    null !== s &&
    ((e = s[(s = e.split("."))[0]]),
    1 === s.length ? (a ? typeof e === a : void 0 !== e || null !== e) : hasProperty(e, s.slice(1).join(".")))
  );
}
function have_binary() {
  return have_nplastpass() || have_native_messaging() || have_ws() || g_issafari_appext;
}
function have_binary_function(s, e) {
  return !!(
    (have_nplastpass(null, e) && "function" == typeof g_nplastpass[s]) ||
    (have_native_messaging() && lp_in_array(s, g_native_messaging_functions)) ||
    (have_ws() && lp_in_array(s, g_ws_functions)) ||
    g_issafari_appext
  );
}
function call_binary_function() {
  if (0 < arguments.length) {
    for (var s = arguments[0], e = new Array(), a = null, n = 1; n < arguments.length; n++)
      n == arguments.length - 1 && "function" == typeof arguments[n] ? (a = arguments[n]) : (e[e.length] = arguments[n]);
    for (var t = { cmd: s, argcount: e.length }, n = 0, i, g; n < e.length; n++) t["arg" + n] = e[n];
    "get_chrome_passwords" == s &&
      ((i = a),
      (a = function (s) {
        i(JSON.parse(s));
      })),
      have_nplastpass() && "function" == typeof g_nplastpass[s]
        ? (0 == e.length
            ? (g = g_nplastpass[s]())
            : 1 == e.length
            ? (g = g_nplastpass[s](e[0]))
            : 2 == e.length
            ? (g = g_nplastpass[s](e[0], e[1]))
            : 3 == e.length
            ? (g = g_nplastpass[s](e[0], e[1], e[2]))
            : 4 == e.length
            ? (g = g_nplastpass[s](e[0], e[1], e[2], e[3]))
            : 5 == e.length
            ? (g = g_nplastpass[s](e[0], e[1], e[2], e[3], e[4]))
            : 6 == e.length
            ? (g = g_nplastpass[s](e[0], e[1], e[2], e[3], e[4], e[5]))
            : lplog("too many arguments passed to call_binary_function, funcname=" + s + ", argslen=" + e.length),
          a && a(g))
        : have_native_messaging() && lp_in_array(s, g_native_messaging_functions)
        ? native_messaging_send_message(t, a)
        : lp_ws && lp_ws.isconnected() && lp_in_array(s, g_ws_functions)
        ? ws_send_message(t, a)
        : g_issafari_appext && LPPlatform.sendBinaryMessage(t, a);
  }
}
function call_binary_function_if() {
  var s;
  0 < arguments.length &&
    (have_binary_function(arguments[0])
      ? call_binary_function.apply(this, arguments)
      : 1 < arguments.length && "function" == typeof arguments[arguments.length - 1] && arguments[arguments.length - 1](!1));
}
var lpctypes = null,
  lpctypeslib = null,
  lpctypesabi = null,
  lpctypesfree = null,
  lpctypes_call_binary_function = null,
  g_native_messaging = null,
  g_native_messaging_loaded = !1,
  g_native_messaging_functions = new Array(),
  g_native_messaging_version = gs("Unknown"),
  g_native_messaging_build_date = gs("Unknown"),
  g_native_messaging_build_time = gs("Unknown");
function connect_native_messaging() {
  try {
    if ("undefined" != typeof chrome) {
      if (hasProperty(chrome, "runtime.connectNative")) g_native_messaging = chrome.runtime.connectNative("com.lastpass.nplastpass");
      else {
        if (!hasProperty(chrome, "extension.connectNative")) return;
        g_native_messaging = chrome.extension.connectNative("com.lastpass.nplastpass");
      }
      g_native_messaging.onMessage.addListener(native_messaging_message),
        g_native_messaging.onDisconnect.addListener(function () {
          (g_native_messaging_loaded = !1),
            lplog("native messaging host disconnected"),
            hasProperty(chrome, "runtime.lastError.message")
              ? lplog("last error: " + chrome.runtime.lastError.message)
              : hasProperty(chrome, "extension.lastError.message") && lplog("last error: " + chrome.extension.lastError.message);
        }),
        native_messaging_send_message({ cmd: "get_function_names", argcount: 0 }, function (s) {
          s &&
            ((g_native_messaging_functions = s.split(",")),
            (g_native_messaging_loaded = !0),
            localStorage_setItem("hadNativeMessaging", "1"),
            setup_wlan_variables(),
            setup_is_chrome_portable(),
            !have_nplastpass()) &&
            g_onload_started &&
            onLoad(!0);
        }),
        native_messaging_send_message({ cmd: "get_version", argcount: 0 }, function (s) {
          CompareLastPassVersions(s, "3.0.15") <= 0
            ? ((g_native_messaging_loaded = !1), g_native_messaging.disconnect(), lplog("blocked old native messaging host version " + s))
            : (g_native_messaging_version = s);
        }),
        native_messaging_send_message({ cmd: "get_build_date", argcount: 0 }, function (s) {
          g_native_messaging_build_date = s;
        }),
        native_messaging_send_message({ cmd: "get_build_time", argcount: 0 }, function (s) {
          g_native_messaging_build_time = s;
        });
    }
  } catch (s) {}
}
var g_native_messaging_parts = new Array();
function native_messaging_message(s, e, a) {
  if (void 0 !== s.id) {
    var a = a ? g_ws_callbacks : g_native_messaging_callbacks,
      n = (lpdbg("nativemessaging", "got message, id=" + s.id), !1),
      t;
    if (void 0 !== s.retval) n = !0;
    else if (void 0 !== s.parts && void 0 !== s.part && void 0 !== s.retvalpart) {
      if (void 0 === g_native_messaging_parts[s.id]) {
        g_native_messaging_parts[s.id] = new Array();
        for (var i = 0; i < s.parts; i++) g_native_messaging_parts[s.id][i] = null;
      }
      g_native_messaging_parts[s.id][s.part] = s.retvalpart;
      for (var n = !0, i = 0; i < s.parts; i++)
        if (null == g_native_messaging_parts[s.id][i]) {
          n = !1;
          break;
        }
      if (n) {
        s.retval = "";
        for (var i = 0; i < s.parts; i++) s.retval += g_native_messaging_parts[s.id][i];
        g_native_messaging_parts[s.id] = null;
      }
    }
    n && "function" == typeof a[s.id] && ((t = a[s.id]), (a[s.id] = null), t(s.retval));
  } else if (void 0 !== s.cmd)
    switch ((lpdbg("nativemessaging", "got message, cmd=" + s.cmd), s.cmd)) {
      case "namedpipeobserverfunction":
        namedpipeobserverfunction(s.arg0, s.arg1, s.arg2);
        break;
      case "basicauth_save":
        basicauth_save(s.arg0, s.arg1, s.arg2, s.arg3);
        break;
      case "basicauth_found":
        basicauth_found(s.arg0, s.arg1, s.arg2);
    }
}
function have_native_messaging() {
  return g_native_messaging_loaded;
}
function have_ws() {
  return "undefined" != typeof lp_ws && lp_ws.isconnected();
}
var g_native_messaging_callbacks = new Object();
function native_messaging_send_message(s, e) {
  try {
    var a = new Date().getTime() + "_" + Math.floor(100 * Math.random());
    lpdbg("nativemessaging", "sending message, cmd=" + (void 0 !== s.cmd ? s.cmd : "undefined") + ", id=" + a),
      (s.id = a),
      (g_native_messaging_callbacks[a] = e),
      g_native_messaging.postMessage(s);
  } catch (s) {}
}
var g_ws_parts = new Object(),
  chunk_size = 5e4;
function ws_send_part(e, s) {
  var a = g_ws_parts[e].message,
    n = g_ws_parts[e].arg;
  (a.part = s),
    (a["arg" + a.argpart] = n.substring(s * chunk_size, (s + 1) * chunk_size)),
    s >= a.parts - 1
      ? (g_ws_callbacks[e] = function (s) {
          g_ws_parts[e].callback(s), (g_ws_parts[e] = null);
        })
      : (g_ws_callbacks[e] = function (s) {
          ws_send_part(e, s + 1);
        }),
    lp_ws.send(LPJSON.stringify(a));
}
var g_ws_callbacks = new Object();
function ws_send_message(s, e) {
  try {
    var a = new Date().getTime() + "_" + Math.floor(100 * Math.random()),
      n = ((s.id = a), -1),
      t;
    if (g_ischrome)
      for (var i = 0; i < s.argcount; i++)
        if ("string" == typeof s["arg" + i] && s["arg" + i].length > chunk_size) {
          n = i;
          break;
        }
    -1 != n
      ? ((t = s["arg" + n]),
        (s.cmdparts = s.cmd),
        delete s.cmd,
        (s.argpart = n),
        (s.parts = Math.ceil(t.length / chunk_size)),
        (g_ws_parts[a] = { message: s, arg: t, callback: e }),
        ws_send_part(a, 0))
      : ((g_ws_callbacks[a] = e), lp_ws.send(LPJSON.stringify(s)));
  } catch (s) {}
}
function test_native_messaging(s) {
  try {
    var e;
    is_firefox_webext()
      ? s(!0)
      : g_ischrome &&
        "undefined" != typeof chrome &&
        void 0 !== chrome.permissions &&
        void 0 !== chrome.permissions.contains &&
        !((e = navigator.userAgent.match(/Chrome\/(\d+)/)) && parseInt(e[1]) < 29) &&
        (g_is_win || g_is_mac || g_is_linux)
      ? chrome.permissions.contains({ permissions: ["nativeMessaging"] }, s)
      : (g_do_native_messaging = !1);
  } catch (s) {
    g_do_native_messaging = !1;
  }
}
function request_native_messaging(s) {
  getBG().reduxApp.setExtensionPreference("native_messaging_asked", !0),
    s
      ? openURL(getchromeurl("native_messaging.html?hidenever=1"))
      : void 0 !== chrome.permissions &&
        chrome.permissions.request({ permissions: ["nativeMessaging", "privacy"] }, function (s) {
          s && alert(gs("Please restart your browser to finish enabling native messaging."));
        });
}
function native_messaging_never_ask_again() {
  getBG().closecurrenttab("native_messaging.html");
}
var g_ask_native_messaging_from_button = !1;
function install_binary(s, e) {
  g_do_native_messaging && !s && !g_have_native_messaging_permission && supports_native_messaging()
    ? request_native_messaging(e)
    : openURL(base_url + "installer/");
}
var g_debug_nplastpass = !0;
function debug_nplastpass(s) {
  g_debug_nplastpass && lpdbg("nplastpass", s);
}
var g_nplastpass_loaded = !1,
  g_nplastpass_exception = !1;
function have_nplastpass(s, e) {
  debug_nplastpass("checking for binary component");
  try {
    g_nplastpass &&
      g_nplastpass_loaded &&
      void 0 === g_nplastpass.alert &&
      (debug_nplastpass("binary component loaded but alert function not found, resetting"), (g_nplastpass = null));
  } catch (s) {
    debug_nplastpass("caught exception while resetting binary component: " + s.message);
  }
  if (!g_nplastpass) {
    if (g_nplastpass_exception && !e) return !1;
    debug_nplastpass("attempting to setup binary component");
    for (var a = 0; a < 1; a++)
      try {
        if (
          (0 == a && (debug_nplastpass("setting binary component global"), (g_nplastpass = document.getElementById("nplastpass"))),
          g_nplastpass)
        ) {
          debug_nplastpass("type of alert is " + typeof g_nplastpass.alert),
            debug_nplastpass("checking for chrome portable"),
            g_nplastpass.is_chrome_portable(),
            debug_nplastpass("checking for wlan stuff"),
            setup_wlan_variables(),
            setup_is_chrome_portable(),
            debug_nplastpass("checking for alert function"),
            debug_nplastpass(
              (g_nplastpass_loaded = hasProperty(g_nplastpass, "alert")) ? "binary component is loaded" : "binary component failed to load"
            );
          break;
        }
        debug_nplastpass("exiting loop early, prior to triggering exception due to null/undefined g_nplastpass object."),
          (g_nplastpass = null),
          (g_nplastpass_exception = !0);
      } catch (s) {
        debug_nplastpass("caught exception while setting up binary component: " + s.message),
          (g_nplastpass = null),
          (g_nplastpass_exception = !0);
      }
  }
  g_debug_nplastpass = !1;
  try {
    return hasProperty(g_nplastpass, "alert") && (s || -1 == navigator.userAgent.indexOf("Chrome/4.1.249.1042"));
  } catch (s) {
    return !1;
  }
}
function get_nplastpass_version() {
  return have_nplastpass() && "function" == typeof g_nplastpass.get_version ? g_nplastpass.get_version() : gs("Unknown");
}
function get_nplastpass_build_date_time() {
  return have_nplastpass() && "function" == typeof g_nplastpass.get_build_date && "function" == typeof g_nplastpass.get_build_time
    ? g_nplastpass.get_build_date() + " " + g_nplastpass.get_build_time()
    : gs("Unknown");
}
function close_lpctypeslib() {}
