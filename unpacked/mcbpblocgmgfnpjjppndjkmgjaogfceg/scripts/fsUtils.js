/*
 FireShot - Webpage Screenshots and Annotations
 Copyright (C) 2007-2023 Evgeny Suslikov (evgeny@suslikov.ru)
*/
const cActionEdit = 0,
  cActionSave = 1,
  cActionClipboard = 2,
  cActionEMail = 3,
  cActionPaint = 4,
  cActionUpload = 5,
  cActionPrint = 7,
  cActionBASE64Content = 8,
  cActionSavePDF = 10,
  cActionSendOneNote = 11,
  cActionMultiPDF = 12,
  cActionSilentAdd = 13,
  cActionUpgrade = 100,
  cActionSilentSave = 101,
  cModeVisible = 0,
  cModeEntire = 1,
  cModeSelected = 2,
  cModeBrowser = 3,
  cModeTabs = 4,
  cLastActionPref = "lastAction",
  cLastModePref = "lastMode",
  cShortcutPref = "hotkey",
  cShortcutPrefVisible = "hotkeyVisible",
  cShortcutPrefSelection = "hotkeySelection",
  cShortcutPrefEntire = "hotkeyEntire",
  cShortcutPrefBrowser = "hotkeyBrowser",
  cShortcutPrefTabs = "hotkeyTabs",
  cAPISupport = "enableAPI",
  cDebugPref = "fsDebug",
  cDisableWorker = "disableWASMWorker",
  cAllTabsOnlyVisibleModePref = "allTabsCaptureOnlyVisiblePart",
  cShortcutPrefVisibleAction = "hotkeyVisibleAction",
  cShortcutPrefSelectionAction = "hotkeySelectionAction",
  cShortcutPrefEntireAction = "hotkeyEntireAction",
  cShortcutPrefBrowserAction = "hotkeyBrowserAction",
  cShortcutPrefTabsAction = "hotkeyTabsAction",
  cPluginProModePref = "pluginProMode",
  cRegisteredPref = "registeredMode",
  cCurrentVersion = "curVersion",
  cTemplatePref = "filenameTemplate",
  cTemplateNumberPref = "filenameNumber",
  cTemplateNumberPadCheckPref = "filenameNumberPadCheck",
  cTemplateNumberPadValuePref = "filenameNumberPadValue",
  cContextMenuIntegrationPref = "contextMenuIntegration",
  cPageScrollingSpeedPref = "pageScrollSpeedValue",
  cAllowInfiniteScrolling = "allowInfiniteScrolling",
  cGoogleAnalyticsEnabled = "sendUsageDataToGA",
  cOpenNewTabNextToSource = "newTabIsNextToSource",
  cDefaultFolderPref = "defaultFolderLite",
  cDefaultFolderValue = "FireShot",
  cOpenFolderAterSavingPref = "openFolderAfterSavingLite",
  cNoFilenamePromptPref = "noFilenamePrompt",
  cCloseTabAfterSaving = "closeTabAfterSavingLite",
  cBatchModePrefs = "batchModePrefs",
  cUpdCheckIgnorePeriodPref = "uCheck",
  cUpdEmitPref = "uEmit",
  cUpdInfoURL = "https://ssl.getfireshot.com/images/api/utm.gif?dummy=",
  cCanBeCapturedBetterNexPref = "canBeCapturedBetterNextShow",
  cOnlyLitePref = "onlyLite",
  cForceNativeInstallEnabled = "nativeInstall",
  cLikedPref = "userLikedFireShot",
  cRatedPref = "userRatedFireShot",
  cResultPageShownCntrPref = "resultPageShown",
  cWASMErrorReportedPref = "WASMErrorReported",
  cNextAdShown = "nextAdShownTime",
  cSafariFirstSavePref = "firstSaveDuringSession",
  cGUID = "guid",
  cUpdGracePeriod = 1296e6,
  cUpdMaxPeriod = 2592e5,
  cUpdTimeCheckInterval = 432e5,
  cUpdCheckDelay = 6e5,
  cTemplateFilenameMaxLen = "filenameMaxLen",
  cDefaultImageFormatPref = "png",
  cQueuedBadgeURLPref = "queuedBadgeURL.1",
  cShowSelectionHintPref = "showSelectionHint.1",
  cAdvancedFeaturesAvailPref = "advancedFeaturesAvailable",
  cAdvertisingShowPref = "showAdvertising",
  cBetaPreviewWarningExpanded = "betaPreviewWarningExpanded",
  cBetaPreviewCompactMode = "betaPreviewCompactMode",
  cPDFOptionsEverDisplayed = "PDFOptionsEverDisplayed",
  cRegisteredUserName = "regUser",
  cRegisteredUserKey = "regKey",
  cAdvancedFeaturesCheckURL = "https://ssl.getfireshot.com/images/api/chromefeatures.gif?dummy=",
  cDefaultTemplate = "FireShot Capture %n - %t - %e",
  cNativeInstallerURLTemplate = "https://getfireshot.com/downloads/%VERSION%/fireshot-chrome-plugin.exe",
  cCrashReportURL = "https://screenshot-program.com/fireshot/crash_report.php";
var extensionId = chrome.runtime.id,
  isDebug =
    (localStorage && "true" === localStorage[cDebugPref]) ||
    "legfpnnmhhnhjgekmmbkilmijnjoehne" === extensionId ||
    "fireshot-beta@getfireshot.com" === extensionId,
  fPageMode = "undefined" === typeof fsPreferences;
getConsolePtr()("Extension ID: " + extensionId);
!fPageMode && isOnlyLite() && getConsolePtr()("Forcing Lite mode");
function isOnlyLite() {
  return "true" === getOption(cOnlyLitePref) || "1" === getOption(cOnlyLitePref);
}
function isNativeSupported() {
  return isOnlyLite() ? !1 : fsNativePlugin.ready;
}
function getPlugin() {
  return isNativeSupported() ? fsNativePlugin : getJSPlugin();
}
function pluginCommand(a, b, d) {
  let c;
  "object" === typeof a ? ((c = a), (a = b), (b = d)) : (c = getPlugin());
  try {
    b = b || {};
    b.JSONCommand = a;
    if (isDebug)
      if (b.dataurl) {
        const e = b.dataurl;
        b.dataurl = "<cut>";
        getConsolePtr()("plugin command: " + a + " : " + JSON.stringify(b));
        b.dataurl = e;
      } else getConsolePtr()("plugin command: " + a + " : " + isSafari() ? JSON.stringify(b).substring(0, 2e3) : JSON.stringify(b));
    return c.launchJSON(b);
  } catch (e) {
    return logError(e.message), !1;
  }
}
function openURL(a, b) {
  if (!b) return chrome.tabs.create({ url: a });
  chrome.tabs.create({ url: a }, (d) => {
    const c = (e, f) => {
      if (e === d.id)
        switch (f.status) {
          case "complete":
            chrome.tabs.onUpdated.removeListener(c), b(d);
        }
    };
    chrome.tabs.onUpdated.addListener(c);
    setTimeout(() => chrome.tabs.onUpdated.removeListener(c), 1e4);
  });
}
function getConsolePtr() {
  return isDebug ? console.log : function () {};
}
function logToConsole(a) {
  if (isDebug) {
    var b = new Date();
    console.log(b.getHours() + ":" + b.getMinutes() + ":" + b.getSeconds() + "." + b.getMilliseconds() + "   " + a);
  }
}
function logError(a) {
  console.error("FireShot: " + a);
}
function getSBHeight(a) {
  if (a.scrollbars.visible) {
    var b = a.document.createElement("div");
    b.setAttribute(
      "style",
      "position: fixed; margin: 0px; padding: 0px; border: none; visibility: hidden;  top: 0px; left: 0px; width: 1px; height: 100%; z-index: -1;"
    );
    a.document.body.appendChild(b);
    var d = a.innerHeight - b.offsetHeight;
    a.document.body.removeChild(b);
    return 0 < d && 40 > d ? d : 0;
  }
  return 0;
}
function getExtension() {
  return chrome.extension.getBackgroundPage();
}
function getOSFriendlyShortcut(a) {
  return isMac()
    ? a
        .replace(/Command|Cmd/, "\u2318")
        .replace("Shift", "\u21e7")
        .replaceAll("+", "")
    : a;
}
function i18nPrepare() {
  const a = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_ELEMENT, null, !1);
  let b;
  for (; (b = a.nextNode()); )
    [
      { i18Attr: "data-i18n", originalAttr: "innerText" },
      { i18Attr: "data-title-i18n", originalAttr: "title" }
    ].forEach((d) => {
      var c;
      if ((c = b.getAttribute(d.i18Attr)))
        (c = chrome.i18n.getMessage(c)), (b[d.originalAttr] = c ? c : (isDebug ? "#" : "") + b[d.originalAttr]);
    });
}
function gaTrack(a, b, d, c, e) {
  if (!isFirefox() && "true" === getExtension().getOption(cGoogleAnalyticsEnabled, "true")) {
    const f = 1e9 + Math.floor(8999999999 * Math.random()),
      g = 1e7 + Math.floor(89999999 * Math.random()),
      h = 1e9 + Math.floor(1147483647 * Math.random()),
      k = new Date().getTime(),
      l = window.location,
      m = new Image();
    e = e || l.host;
    m.src =
      "https://www.google-analytics.com/__utm.gif?utmwv=1.3&utmn=" +
      f +
      "&utmsr=-&utmsc=-&utmul=-&utmje=0&utmfl=-&utmdt=" +
      encodeURIComponent(c || "-") +
      "&utmhn=" +
      encodeURIComponent(b) +
      "&utmr=" +
      encodeURIComponent(l) +
      "&utmp=" +
      encodeURIComponent(d) +
      "&utmac=" +
      a +
      "&utmcc=__utma%3D" +
      g +
      "." +
      h +
      "." +
      k +
      "." +
      k +
      "." +
      k +
      ".2%3B%2B__utmb%3D" +
      g +
      "%3B%2B__utmc%3D" +
      g +
      "%3B%2B__utmz%3D" +
      g +
      "." +
      k +
      ".2.2.utmccn%3D(referral)%7Cutmcsr%3D" +
      encodeURIComponent(e) +
      "%7Cutmcct%3D" +
      l.pathname +
      "%7Cutmcmd%3Dreferral%3B%2B__utmv%3D" +
      g +
      ".-%3B";
  }
}
function padString(a, b, d) {
  for (a = a.toString(); a.length < d; ) a = b + a;
  return a;
}
function getFilenameLite() {
  var a = getOption(cTemplateFilenameMaxLen, 100),
    b = 0,
    d = getOption(cTemplateNumberPref, 1);
  do {
    var c = getOption(cTemplatePref, cDefaultTemplate);
    let e = new Date(),
      f = getExtension().capURL,
      g = getExtension().capTitle,
      h = "not available";
    try {
      h = new URL(f).hostname;
    } catch (k) {}
    c = c.replace(
      /%n/g,
      "true" === getOption(cTemplateNumberPadCheckPref, "true") ? padString(d, 0, getOption(cTemplateNumberPadValuePref, 3)) : d
    );
    c = c.replace(/%y/g, e.getFullYear());
    c = c.replace(/%m/g, padString(e.getMonth() + 1, 0, 2));
    c = c.replace(/%d/g, padString(e.getDate(), 0, 2));
    c = c.replace(/%H/g, padString(e.getHours(), 0, 2));
    c = c.replace(/%M/g, padString(e.getMinutes(), 0, 2));
    c = c.replace(/%S/g, padString(e.getSeconds(), 0, 2));
    c = c.replace(/%A/g, e.toLocaleDateString(navigator.language, { weekday: "long" }));
    c = c.replace(/%B/g, e.toLocaleDateString(navigator.language, { month: "long" }));
    1 == b
      ? (f = f.substr(0, Math.max(14, a - c.length + 1)))
      : 2 == b
      ? ((f = f.replace(/(.*)\?.*/gi, "$1")), (c = c.replace(/%u/g, f)), (g = g.substr(0, Math.max(14, a - c.length + 1)) + "_"))
      : 3 == b && ((f = f.substr(0, (a - c.length) / 2 - 1)), (c = c.replace(/%u/g, f)), (g = g.substr(0, a - c.length - 1) + "_"));
    c = c.replace(/%u/g, f);
    c = c.replace(/%t/g, g);
    c = c.replace(/%e/g, h);
    c = c.replace(/[:\/\\\*\?<>\|"]/g, function (k) {
      switch (k) {
        case "<":
          return "{";
        case ">":
          return "}";
        case "|":
          return "-";
      }
      return "_";
    });
  } while (4 > ++b && c.length > a);
  "" === c && (c = "Untitled");
  return c;
}
function showBadge(a) {
  setOption(cQueuedBadgeURLPref, a);
  chrome.browserAction.setBadgeText({ text: a ? "New" : "" });
  "" !== a && getConsolePtr()("Setting badge for url: " + a);
}
function getLastAction() {
  let a = parseInt(getOption(cLastActionPref, cActionEdit)),
    b = getLastMode();
  isNativeSupported()
    ? b === cModeTabs && a === cActionSavePDF && (a = cActionMultiPDF)
    : b === cModeTabs && a === cActionMultiPDF
    ? (a = cActionSavePDF)
    : (a !== cActionSavePDF && a !== cActionSave) || (b !== cModeEntire && b !== cModeSelected && b !== cModeVisible) || (a = cActionEdit);
  return a;
}
function getLastMode() {
  return parseInt(getOption(cLastModePref, cModeEntire));
}
function setLastActionAndMode(a, b) {
  setOption(cLastActionPref, a);
  setOption(cLastModePref, b);
}
function isProMode() {
  return isNativeSupported() ? "true" == getOption(cPluginProModePref) : !isWindows() && "true" == getOption(cPluginProModePref);
}
function isRegistered() {
  return "true" === getOption(cRegisteredPref);
}
function getIntersection(a, b, d, c, e, f, g, h) {
  return !(a + d <= e || e + g <= a || b + c <= f || f + h <= b);
}
function rectsIntersected(a, b) {
  return a.left < b.left + b.width && b.left < a.left + a.width && a.top < b.top + b.height && b.top < a.top + a.height;
}
function isChildOf(a, b) {
  for (b = b.parentNode; b; ) {
    if (b == a) return !0;
    b = b.parentNode;
  }
  return !1;
}
function difference(a, b) {
  var d = [];
  if (!rectsIntersected(a, b)) return [a];
  var c = a.top,
    e = a.height,
    f = a.left + a.width,
    g = a.top + a.height,
    h = b.left + b.width,
    k = b.top + b.height;
  b.top > a.top && (d.push({ left: a.left, top: a.top, width: a.width, height: b.top - a.top }), (c = b.top), (e -= b.top - a.top));
  k < g && (d.push({ left: a.left, top: k, width: a.width, height: g - k }), (e = k - c));
  b.left > a.left && d.push({ left: a.left, top: c, width: b.left - a.left, height: e });
  h < f && d.push({ left: h, top: c, width: f - h, height: e });
  return d;
}
function isScrollableStyle(a, b = !0, d = !0) {
  const c = ["scroll", "auto", "overlay"];
  return (
    a &&
    (c.includes(a.getPropertyValue("overflow")) ||
      (b && c.includes(a.getPropertyValue("overflow-x"))) ||
      (d && c.includes(a.getPropertyValue("overflow-y")))) &&
    "none" != a.getPropertyValue("display") &&
    "hidden" != a.getPropertyValue("visibility")
  );
}
function isOverflowed(a) {
  return (
    a &&
    "none" !== a.getPropertyValue("display") &&
    ("hidden" === a.getPropertyValue("overflow") ||
      "hidden" === a.getPropertyValue("overflow-y") ||
      "auto" === a.getPropertyValue("overflow-y") ||
      "scroll" == a.getPropertyValue("overflow-y") ||
      "hidden" === a.getPropertyValue("overflow-x") ||
      "auto" === a.getPropertyValue("overflow-x") ||
      "scroll" == a.getPropertyValue("overflow-x"))
  );
}
function checkAdvancedFeatures() {
  advFeaturesChecked || ((advFeaturesChecked = !0), getFeaturesFromSite());
}
function getFeaturesFromSite() {}
function checkAdvancedUpdates() {
  function a() {
    var f = new Image(),
      g = new Date(),
      h = Math.round(g.getTime() / 864e5);
    f.onload = function () {
      setOption(cUpdEmitPref, g.getTime() + Math.round(Math.random() * cUpdMaxPeriod));
      getConsolePtr()("Update info available in " + (parseInt(getOption(cUpdEmitPref)) - g.getTime()) / 1e3 + " seconds");
      b();
    };
    f.onerror = function () {
      setTimeout(a, cUpdTimeCheckInterval);
    };
    f.src = cUpdInfoURL + h;
    getConsolePtr()("Checking " + f.src);
  }
  function b() {
    var f = parseInt(getOption(cUpdEmitPref, "0")),
      g = f - new Date().getTime();
    f && 0 >= g
      ? (setOption(cUpdCheckIgnorePeriodPref, ""),
        setOption(cUpdEmitPref, ""),
        getConsolePtr()("Update!"),
        isProMode() ||
          showBadge(
            `https://getfireshot.com/updated.php?app=${getBrowserId()}&src=ext&ver=${getOption(cCurrentVersion)}&win=${isWindows() ? 1 : 0}`
          ),
        checkAdvancedUpdates())
      : setTimeout(b, g + 1e3);
  }
  var d = parseInt(getOption(cUpdCheckIgnorePeriodPref, "0")),
    c = parseInt(getOption(cUpdEmitPref, "0")),
    e = new Date().getTime();
  c
    ? b()
    : d
    ? e >= d
      ? setTimeout(a, Math.random() * cUpdCheckDelay)
      : setTimeout(arguments.callee, d - e + 1e3)
    : (setOption(cUpdCheckIgnorePeriodPref, e + cUpdGracePeriod), setTimeout(arguments.callee, cUpdGracePeriod + 1e3));
}
function getJpegExtents(a) {
  "data:image/jpeg;base64," === a.substring(0, 23) && (a = atob(a.replace("data:image/jpeg;base64,", "")));
  if (
    255 !== a.charCodeAt(0) ||
    216 !== a.charCodeAt(1) ||
    255 !== a.charCodeAt(2) ||
    224 !== a.charCodeAt(3) ||
    74 !== a.charCodeAt(6) ||
    70 !== a.charCodeAt(7) ||
    73 !== a.charCodeAt(8) ||
    70 !== a.charCodeAt(9) ||
    0 !== a.charCodeAt(10)
  )
    throw Error("getJpegSize requires a binary jpeg file");
  var b = 256 * a.charCodeAt(4) + a.charCodeAt(5);
  for (var d = 4, c = a.length; d < c; ) {
    d += b;
    if (255 !== a.charCodeAt(d)) throw Error("getJpegSize could not find the size of the image");
    if (192 === a.charCodeAt(d + 1))
      return (b = 256 * a.charCodeAt(d + 5) + a.charCodeAt(d + 6)), (a = 256 * a.charCodeAt(d + 7) + a.charCodeAt(d + 8)), [a, b];
    d += 2;
    b = 256 * a.charCodeAt(d) + a.charCodeAt(d + 1);
  }
}
function getLAShortcut(a, b, d) {
  chrome.commands.getAll(function (c) {
    isSafari() && (!(c instanceof Array && 0 < c.length) || (0 < c.length && !c[0].name)) && (c = [{ name: a, shortcut: b }]);
    c.forEach(function (e) {
      e.name === a && d(getOSFriendlyShortcut(e.shortcut));
    });
  });
}
function isConsoleOpened() {
  var a = new Image(),
    b = !1;
  Object.defineProperty(a, "id", {
    get: function () {
      b = !0;
    }
  });
  console.log("%cFireShot console check.", a);
  return b;
}
function closestToInt(a) {
  0.009 > Math.abs(a - Math.floor(a)) && (a = Math.floor(a));
  return a;
}
function isAPIEnabled() {
  return "true" === getOption(cAPISupport);
}
function enableAPI(a) {
  setOption(cAPISupport, a);
}
function tabsPermissionRequired(a, b, d) {
  addPermissions({ permissions: ["tabs"], origins: ["<all_urls>"] }, a, () => {
    b && b();
    d || getExtension().openPermissionsPage();
  });
}
function addPermissions(a, b, d) {
  isSafari() || isFirefox()
    ? b()
    : chrome.permissions.contains(a, (c) => {
        c
          ? b()
          : chrome.permissions.request(a, (e) => {
              !chrome.runtime.lastError || console.log(chrome.runtime.lastError);
              e ? b() : (getConsolePtr()("The user rejected to grant permissions."), d && d());
            });
      });
}
function initOnAddedPermissionEvent(a) {
  function b(d) {
    localStorage.test1 = a;
    a(d);
  }
  chrome.permissions.onAdded.addListener(b);
  return function () {
    chrome.permissions.onAdded.removeListener(b);
  };
}
function addDownloadsPermission(a, b) {
  addPermissions({ permissions: ["downloads"] }, a, b);
}
function addGmailPermission(a, b) {
  chrome.permissions.request({ origins: ["https://mail.google.com/*"] }, function (d) {
    d ? a() : b();
  });
}
function initAPI(a) {
  function b() {
    chrome.tabs.executeScript(null, { file: "scripts/fsAPIEvents.js", runAt: "document_start", allFrames: !0 }, function () {
      chrome.runtime.lastError && getConsolePtr()(chrome.runtime.lastError);
    });
  }
  isFirefox() ? b() : "tabSwitch" === a ? chrome.permissions.contains({ permissions: ["activeTab"] }, (d) => d && b()) : b();
}
function getNativeInstallerURL() {
  return cNativeInstallerURLTemplate.replace("%VERSION%", extVersion);
}
function isCustomBuild() {
  return "hpbicldbpgipcloiojdbchegbbjiobbm" == extensionId || "adpnodbfhlagloahhdhjggicnfcpggkm" == extensionId;
}
function switchToLiteMode() {
  gaTrack("UA-1025658-9", "fireshot.com", "NativeSwitchBackToLite");
  setLastActionAndMode(cActionSave, cModeEntire);
  setOption(cPluginProModePref, "false");
  fsNativePlugin.forceDisconnect();
  updateContextMenu();
}
function closeActiveTab() {
  chrome.tabs.query({ currentWindow: !0, active: !0 }, function (a) {
    0 < a.length && chrome.tabs.remove(a[0].id);
  });
}
function getUUIDv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (a) =>
    (a ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (a / 4)))).toString(16)
  );
}
function getOption(a, b) {
  return fsPreferences.getOption(a, b);
}
function setOption(a, b) {
  fsPreferences.setOption(a, b + "");
}
function isURLScriptable(a) {
  return !"accounts-static.cdn.mozilla.net accounts.firefox.com addons.cdn.mozilla.net addons.mozilla.org api.accounts.firefox.com content.cdn.mozilla.net discovery.addons.mozilla.org install.mozilla.org oauth.accounts.firefox.com profile.accounts.firefox.com support.mozilla.org sync.services.mozilla.com"
    .split(" ")
    .some((b) => new RegExp("^https?://" + b + "/.*$").test(a));
}
function sendCrashReport(a) {
  a = JSON.parse(a);
  a =
    "guid=" +
    encodeURIComponent(getOption(cGUID, "")) +
    "&stack=" +
    encodeURIComponent(a.stack) +
    "&comment=" +
    encodeURIComponent(a.comment) +
    "&contacts=" +
    encodeURIComponent(a.contacts);
  var b = new XMLHttpRequest();
  b.open("POST", cCrashReportURL, !0);
  b.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  b.send(a);
}
function getInfo(a, b) {
  a = a.split("|");
  var d = "guid=" + encodeURIComponent(getOption(cGUID, "")) + "&session=" + encodeURIComponent(a[1]),
    c = new XMLHttpRequest();
  c.open("POST", a[0], !0);
  c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  c.onreadystatechange = function () {
    this.readyState == XMLHttpRequest.DONE && b(this.responseText);
  };
  c.send(d);
}
function pageNeedsTabsPermission() {
  function a() {
    return new Promise((b) => {
      try {
        chrome.tabs.executeScript({ file: "scripts/fsSameOrigin.js", runAt: "document_start" }, function (d) {
          return chrome.runtime.lastError ? !1 : b(d[0]);
        });
      } catch (d) {
        getConsolePtr()(d), b(!1);
      }
    });
  }
  return new Promise((b) => {
    isSafari()
      ? b(!1)
      : chrome.permissions.contains({ permissions: ["tabs"], origins: ["<all_urls>"] }, (d) => {
          d ? b(!1) : b(a());
        });
  });
}
function removeLicensingInfo() {
  setOption(cRegisteredUserName, "");
  setOption(cRegisteredUserKey, "");
  setOption(cRegisteredPref, "");
  setOption(cPluginProModePref, "");
}
function peekPNGExtents(a) {
  return (a = a.match(/,(.{100})/)) && 0 < a.length
    ? ((a = Uint8Array.from(atob(a[1]), (b) => b.charCodeAt(0))), { w: (a[18] << 8) | a[19], h: (a[22] << 8) | a[23] })
    : { w: 0, h: 0 };
}
function canvasFromArrayBuffer(a) {
  return new Promise((b, d) => {
    let c = new Image();
    c.onload = () => {
      let e = document.createElement("canvas");
      e.width = c.width;
      e.height = c.height;
      e.getContext("2d", { alpha: !1, willReadFrequently: !0 }).drawImage(c, 0, 0);
      b(e);
    };
    c.onerror = (e) => {
      d(e);
    };
    c.src = URL.createObjectURL(new Blob([a], { type: "image/png" }));
  });
}
function createNodeIteratorAdvanced(a, b) {
  var d = [document.createTreeWalker(a, b)];
  return {
    nextNode: function () {
      for (; 0 < d.length; ) {
        const c = d.at(-1).nextNode();
        if (c) return c.shadowRoot ? (d.push(document.createTreeWalker(c.shadowRoot, b)), this.nextNode()) : c;
        d.pop();
      }
      return null;
    }
  };
}
const querySelectorAll = (a, b) => {
  const d = [...a.querySelectorAll(b)];
  a = document.createNodeIterator(a, Node.ELEMENT_NODE);
  let c;
  for (; (c = a.nextNode()); ) c.shadowRoot && d.push(...querySelectorAll(c.shadowRoot, b));
  return d;
};
function AnimatedIcon() {
  function a() {
    chrome.browserAction.setIcon({ path: "images/sss_48.png" });
  }
  var b = !1;
  return {
    start: () => {
      let d = 0,
        c = [];
      for (let e = 1; 30 >= e; ++e) c.push(`images/progress/frame-${e}.png`);
      cycle = () => {
        b ? chrome.browserAction.setIcon({ path: c[++d % c.length] }, () => setTimeout(cycle, 60)) : a();
      };
      b = !0;
      cycle();
    },
    stop: function () {
      b = !1;
      a();
    }
  };
}
function blobToBase64(a) {
  return new Promise((b) => {
    const d = new FileReader();
    d.readAsDataURL(a);
    d.onloadend = () => {
      b(d.result.split(",")[1]);
    };
  });
}
function debounce(a) {
  let b;
  return (...d) => {
    b && cancelAnimationFrame(b);
    b = requestAnimationFrame(() => {
      a(...d);
    });
  };
}
function showSavedFile(a) {
  getConsolePtr()("open folder");
  isSafari() ? highlightLastCreatedFileSafari() : chrome.downloads.show(a);
}
function addOnDeterminingFilenameHandler(a) {
  if (!isFirefox()) {
    var b = (d, c) => {
      d.byExtensionId === extensionId && (c({ filename: a }), removeDeterminingFilenameHandler());
    };
    removeDeterminingFilenameHandler = () => chrome.downloads.onDeterminingFilename.removeListener(b);
    chrome.downloads.onDeterminingFilename.addListener(b);
  }
}
function removeDeterminingFilenameHandler() {}
