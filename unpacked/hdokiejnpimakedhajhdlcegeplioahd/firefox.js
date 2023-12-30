var g_firefox_button = null;
try {
  (g_self = require("sdk/self")), (self = g_self);
  try {
    (g_ui_button_toggle = require("sdk/ui/button/toggle")), create_firefox_button();
  } catch (e) {}
  (g_chrome = require("chrome")),
    (g_addon_window = require("sdk/addon/window")),
    (g_deprecated_window_utils = require("sdk/deprecated/window-utils")),
    (g_loader_options = require("@loader/options")),
    (g_model_core = require("sdk/model/core"));
  try {
    g_clipboard = require("sdk/clipboard");
  } catch (e) {}
  try {
    g_context_menu = require("sdk/context-menu");
  } catch (e) {}
  (g_ff_notifications = require("sdk/notifications")), (g_page_mod = require("sdk/page-mod"));
  try {
    g_panel = require("sdk/panel");
  } catch (e) {}
  (g_passwords = require("sdk/passwords")),
    (g_private_browsing = require("sdk/private-browsing")),
    (g_simple_storage = require("sdk/simple-storage")),
    (g_tabs = require("sdk/tabs")),
    (g_timers = require("sdk/timers")),
    (g_windows = require("sdk/windows")),
    (g_system = require("sdk/system")),
    (g_indexed_db = require("sdk/indexed-db")),
    (g_ff_hotkeys = require("sdk/hotkeys")),
    (g_net_xhr = require("sdk/net/xhr")),
    (g_system_unload = require("sdk/system/unload")),
    (g_window_utils = require("sdk/window/utils")),
    (g_system_events = require("sdk/system/events")),
    (g_preferences_service = require("sdk/preferences/service")),
    (g_tabs_utils = require("sdk/tabs/utils")),
    (g_event_core = require("sdk/event/core")),
    (g_core_heritage = require("sdk/core/heritage")),
    (g_core_namespace = require("sdk/core/namespace"));
  try {
    g_places_history = require("sdk/places/history");
  } catch (e) {}
  (setTimeout = g_timers.setTimeout),
    (clearTimeout = g_timers.clearTimeout),
    (setInterval = g_timers.setInterval),
    (clearInterval = g_timers.clearInterval),
    (XMLHttpRequest = g_net_xhr.XMLHttpRequest),
    (window = g_addon_window.window),
    (document = window.document),
    (navigator = window.navigator),
    (atob = window.atob),
    (btoa = window.btoa),
    (XPathEvaluator = window.XPathEvaluator),
    (XPathResult = window.XPathResult),
    (WebSocket = window.WebSocket),
    (URL = window.URL),
    ((localStorage = g_simple_storage.storage).setItem = function (e, r) {
      localStorage[e] = r;
    }),
    (localStorage.getItem = function (e) {
      return localStorage[e];
    }),
    (localStorage.removeItem = function (e) {
      delete localStorage[e];
    }),
    (indexedDB = g_indexed_db.indexedDB),
    (IDBKeyRange = g_indexed_db.IDBKeyRange),
    (g_loader_options && g_loader_options.metadata.title) ||
      (g_preferences_service.reset("extensions." + g_self.id + ".sdk.baseURI"),
      g_preferences_service.reset("extensions." + g_self.id + ".sdk.rootURI"));
} catch (e) {
  console.error(e);
}
var detected_e10s = !1;
function is_e10s() {
  if (!detected_e10s)
    try {
      void 0 !== g_window_utils.getMostRecentBrowserWindow().gMultiProcessBrowser &&
        g_window_utils.getMostRecentBrowserWindow().gMultiProcessBrowser &&
        (detected_e10s = !0);
    } catch (e) {}
  return detected_e10s;
}
function is_fennec() {
  try {
    var e;
    if (void 0 !== g_window_utils.getMostRecentBrowserWindow().NativeWindow) return !0;
  } catch (e) {}
  return !1;
}
