function dodefault() {
  var e = get_innertext(document.getElementById("default"));
  if (0 <= e.indexOf("General"))
    (document.getElementById("logoffWhenCloseBrowserVal").value = 0),
      (document.getElementById("logoffWhenCloseBrowser").checked = !1),
      (document.getElementById("idleLogoffVal").value = ""),
      (document.getElementById("idleLogoffEnabled").checked = !1),
      (document.getElementById("openpref").value = "tabs"),
      (document.getElementById("htmlindialog").checked = !1),
      (document.getElementById("automaticallyFill").checked = !0),
      (document.getElementById("showvault").checked = !1),
      (document.getElementById("showAcctsInGroups").checked = !0),
      (document.getElementById("hideContextMenus").checked = !1),
      (document.getElementById("defaultffid").value = 0),
      (document.getElementById("donotoverwritefilledfields").checked = !1);
  else if (0 <= e.indexOf("Notifications"))
    (document.getElementById("showNotifications").checked = !0),
      (document.getElementById("showGenerateNotifications").checked = !1),
      (document.getElementById("showFormFillNotifications").checked = !1),
      (document.getElementById("showNotificationsAfterClick").checked = !1),
      (document.getElementById("showSaveNotificationBar").checked = !0),
      (document.getElementById("showChangeNotificationBar").checked = !0),
      (document.getElementById("showmatchingbadge").checked = !0),
      (document.getElementById("usepopupfill").checked = !0);
  else if (0 <= e.indexOf("Hotkeys")) {
    getBG().g_is_mac
      ? ((optionsData.HotKeys.generateHkKeyCode = 0),
        (optionsData.HotKeys.generateHkMods = ""),
        (optionsData.HotKeys.recheckHkKeyCode = 0),
        (optionsData.HotKeys.recheckHkMods = ""),
        (optionsData.HotKeys.searchHkKeyCode = 0),
        (optionsData.HotKeys.searchHkMods = ""),
        (optionsData.HotKeys.nextHkKeyCode = 33),
        (optionsData.HotKeys.nextHkMods = "meta"),
        (optionsData.HotKeys.prevHkKeyCode = 34),
        (optionsData.HotKeys.prevHkMods = "meta"),
        (optionsData.HotKeys.homeHkKeyCode = 0),
        (optionsData.HotKeys.homeHkMods = ""),
        (optionsData.HotKeys.openpopoverHkKeyCode = 220),
        (optionsData.HotKeys.openpopoverHkMods = "meta"))
      : ((optionsData.HotKeys.generateHkKeyCode = 71),
        (optionsData.HotKeys.generateHkMods = "alt"),
        (optionsData.HotKeys.recheckHkKeyCode = 73),
        (optionsData.HotKeys.recheckHkMods = "alt"),
        (optionsData.HotKeys.searchHkKeyCode = 87),
        (optionsData.HotKeys.searchHkMods = "alt"),
        (optionsData.HotKeys.nextHkKeyCode = 33),
        (optionsData.HotKeys.nextHkMods = "alt"),
        (optionsData.HotKeys.prevHkKeyCode = 34),
        (optionsData.HotKeys.prevHkMods = "alt"),
        (optionsData.HotKeys.homeHkKeyCode = 72),
        (optionsData.HotKeys.homeHkMods = "control alt"),
        (optionsData.HotKeys.openpopoverHkKeyCode = 220),
        (optionsData.HotKeys.openpopoverHkMods = "alt")),
      (optionsData.HotKeys.submitHkKeyCode = 0),
      (optionsData.HotKeys.submitHkMods = ""),
      (optionsData.HotKeys.saveallHkKeyCode = 0),
      (optionsData.HotKeys.saveallHkMods = ""),
      (optionsData.HotKeys.logoffHkKeyCode = 0),
      (optionsData.HotKeys.logoffHkMods = ""),
      (optionsData.HotKeys.defaultffidHkKeyCode = 0),
      (optionsData.HotKeys.defaultffidHkMods = "");
    for (
      var t = new Array(
          "generateHk",
          "recheckHk",
          "searchHk",
          "nextHk",
          "prevHk",
          "homeHk",
          "submitHk",
          "saveallHk",
          "logoffHk",
          "defaultffidHk",
          "openpopoverHk"
        ),
        o = 0;
      o < t.length;
      o++
    )
      writeHotKeyValue(t[o]);
  } else
    0 <= e.indexOf("Advanced")
      ? ((document.getElementById("autoautoEnabled").checked = !0),
        (document.getElementById("autoautoVal").value = "25"),
        (document.getElementById("warninsecureforms").checked = !1),
        (document.getElementById("dontfillautocompleteoff").checked = !1),
        (document.getElementById("pollServerEnabled").checked = !0),
        (document.getElementById("pollServerVal").value = "15"),
        (document.getElementById("recentUsed").checked = !0),
        (document.getElementById("recentUsedCount").value = "10"),
        (document.getElementById("searchNotes").checked = !0),
        (document.getElementById("openloginstart").checked = !1),
        (document.getElementById("storeLostOTP").checked = !0),
        (document.getElementById("enablenewlogin").checked = !0),
        (document.getElementById("clearfilledfieldsonlogoff").checked = !1),
        (document.getElementById("toplevelmatchingsites").checked = !1))
      : 0 <= e.indexOf("Icons") && (document.getElementById("icons2").checked = !0);
}
function fix_userhash(e) {
  return "" == e && is_edge() ? "global" : e;
}
var lpReadAllPrefs = function (e) {
  var t;
  (g_identity = reduxApp.getPreference("identity")),
    startIdleChecker(),
    "lastpass.com" === reduxApp.getPreference("server") ||
      "" == (t = reduxApp.getPreference("server")) ||
      ("lastpass.com" != t && "lastpass.eu" != t) ||
      (((0 != base_url.indexOf("https://preprod.lastpass.com") && 0 != base_url.indexOf("https://lpdev.lastpass.com")) ||
        "lastpass.com" != t) &&
        ((base_url = "https://" + t + "/"), reduxApp) &&
        reduxApp.setBaseUrl(t)),
    (g_prefs_read = !0),
    e && e();
};
function capturehk(e, t) {
  var o = "";
  if (
    (("" !=
      (o =
        (o =
          (o = (o += t.ctrlKey ? "control" : "") + (t.metaKey ? ("" != o ? " " : "") + "meta" : "")) +
          (t.altKey ? ("" != o ? " " : "") + "alt" : "")) + (t.shiftKey ? ("" != o ? " " : "") + "shift" : "")) &&
      "shift" != o) ||
      (o = getBG().g_is_mac ? "meta" : "alt"),
    8 == t.keyCode || 127 == t.keyCode || 46 == t.keyCode)
  )
    optionsData.HotKeys[e + "KeyCode"] = 0;
  else {
    if (t.keyCode <= 32 || 91 == t.keyCode) return;
    0 != t.keyCode ? (optionsData.HotKeys[e + "KeyCode"] = t.keyCode) : (optionsData.HotKeys[e + "KeyCode"] = t.charCode);
  }
  (optionsData.HotKeys[e + "Mods"] = o), writeHotKeyValue(e);
}
function writeHotKeyValue(e) {
  var t = optionsData.HotKeys[e + "KeyCode"],
    o = document.getElementById(e),
    a = "";
  if (0 != t) {
    var e = optionsData.HotKeys[e + "Mods"],
      s = (e = "string" != typeof e ? "" : e).split(" "),
      n;
    for (n in s)
      "control" == s[n] && (a += gs("Ctrl") + "+"),
        "meta" == s[n] && (a += gs("Meta") + "+"),
        "alt" == s[n] && (a += gs("Alt") + "+"),
        "shift" == s[n] && (a += gs("Shift") + "+");
  }
  if (0 != t) {
    switch ((t = parseInt(t))) {
      case 33:
        a += gs("Page Up");
        break;
      case 34:
        a += gs("Page Down");
        break;
      case 35:
        a += gs("End");
        break;
      case 36:
        a += gs("Home");
        break;
      case 37:
        a += gs("Left");
        break;
      case 38:
        a += gs("Up");
        break;
      case 39:
        a += gs("Right");
        break;
      case 40:
        a += gs("Down");
        break;
      case 189:
        a += "-";
        break;
      case 219:
        a += "[";
        break;
      case 220:
        a += "\\";
        break;
      case 221:
        a += "]";
        break;
      case 186:
        a += ";";
        break;
      case 222:
        a += "'";
        break;
      case 188:
        a += ",";
        break;
      case 187:
        a += "+";
        break;
      case 190:
        a += ".";
        break;
      case 191:
        a += "/";
        break;
      case 106:
        a += "*";
        break;
      case 192:
        a += "~";
        break;
      case 124:
        a += gs("Print Screen");
        break;
      default:
        a += String.fromCharCode(t).toUpperCase();
    }
    o.value = a;
  } else o.value = "";
}
function fixhk(e, t) {
  optionsData.HotKeys[e + "KeyCode"] < 32 && ((optionsData.HotKeys[e + "Mods"] = ""), writeHotKeyValue(e)),
    (t.cancelBubble = !0),
    t.stopPropagation();
}
optionsData = { HotKeys: {} };
var IDLE_THRESHOLD_SECONDS = 15,
  IDLE_CHECKER_INTERVAL_MS = 1e3 * IDLE_THRESHOLD_SECONDS,
  IDLE_CHECKER_START_DELAY_MS = 1e4,
  IDLE_STATE_IDLE = "idle",
  IDLE_STATE_LOCKED = "locked",
  IDLE_STATE_ACTIVE = "active",
  idleCheckerStarted = !1,
  lastActiveTimestamp = Date.now();
function startIdleChecker() {
  var e = reduxApp.getPreference("idleLogoffVal");
  console_log("[IDLE CHECK] startIdleChecker called idleCheckerStarted=" + idleCheckerStarted + " idleLogoffValueInMinutes=" + e),
    e &&
      !idleCheckerStarted &&
      ((lastActiveTimestamp = Date.now()),
      (idleCheckerStarted = !0),
      console_log("[IDLE CHECK] setting timeout for idleChecker lastActiveTimestamp=" + lastActiveTimestamp),
      setTimeout(idleChecker, IDLE_CHECKER_START_DELAY_MS));
}
function idleChecker() {
  var e = reduxApp.getPreference("idleLogoffVal");
  lploggedin && e
    ? ("undefined" != typeof chrome && void 0 !== chrome.idle
        ? chrome.idle.queryState(IDLE_THRESHOLD_SECONDS, onIdleStateChange)
        : have_binary() && have_binary_function("get_idle_ms")
        ? queryBinaryIdleState(IDLE_THRESHOLD_SECONDS, onIdleStateChange)
        : console_log("User has idle checking enabled, but browser does not support chrome.idle and binary isnt available."),
      setTimeout(idleChecker, IDLE_CHECKER_INTERVAL_MS))
    : (idleCheckerStarted = !1);
}
function queryBinaryIdleState(o, a) {
  if (!have_binary() || !have_binary_function("get_idle_ms"))
    throw new Error("Called queryBinaryIdleState() but user either has no binary or get_idle_ms function is unavailable");
  call_binary_function("get_idle_ms", function (e) {
    var t;
    a(o < e / 1e3 ? IDLE_STATE_IDLE : IDLE_STATE_ACTIVE);
  });
}
function onIdleStateChange(e) {
  var t = reduxApp.getPreference("idleLogoffVal"),
    o = 60 * t * 1e3,
    a = Date.now();
  a - lastActiveTimestamp < o
    ? e === IDLE_STATE_ACTIVE && (lastActiveTimestamp = a)
    : (e === IDLE_STATE_ACTIVE &&
        console_log("[IDLE CHECK] User is active now, but last activity expired (Probably Computer was in sleep)"),
      console_log("[IDLE CHECK] User has been idle for " + t + " minutes, logging off, idle state: " + e),
      lplogoff());
}
