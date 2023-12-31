/*
 FireShot - Webpage Screenshots and Annotations
 Copyright (C) 2007-2023 Evgeny Suslikov (evgeny@suslikov.ru)
*/
var currentTab,
  currentFrameId,
  imgData = [],
  extVersion = "0.0",
  extVersionFull = "0.0",
  savedCapParamsForDebugging,
  pendingCapFunction,
  capCallbackCompleted,
  executeScriptTO,
  capId = 0,
  processedId = 0,
  resumeMenuEnabled = !1,
  commPortName = "FireShot Comm Port #" + Math.ceil(45309714203 * Math.random()),
  capLinks,
  capWords,
  capURL,
  capTitle,
  multiPDFMode,
  canBeBetter,
  advFeaturesChecked = !1,
  fPermissionsPageOpened = !1,
  fForcedPro = !1,
  fForceRegistered = !1,
  fSilentMode = !1,
  pendingResponse,
  pendingGMailJSON,
  pendingGrabURLRequest,
  fInjectGmailScript = !1,
  fAbortCapturing = !1,
  fAbortWithoutResult = !1,
  fnCancelSelection,
  frameInfo = new Map(),
  frameInfoReadyResolve,
  frameInfoExpected,
  restorePosition,
  capturePosition,
  mainFrameRatios,
  fnForcedAbort,
  stopButtonPressedCount,
  fPendingInstalledAnnouncement = !1,
  fileSavedCallback = () => {},
  batchContextId = 0;
const STATE_IDLE = 0,
  STATE_CAPTURING = 1,
  STATE_BATCH = 2,
  STATE_DLL_COMMAND = 4,
  STATE_ALLTABS = 8;
var currentState = new (function () {
  let a = STATE_IDLE;
  return {
    reset: () => {
      a = STATE_IDLE;
      setTimeout(updateContextMenu, 10);
    },
    add: (d) => {
      a |= d;
      setTimeout(updateContextMenu, 10);
    },
    remove: (d) => {
      a &= ~d >>> 0;
      setTimeout(updateContextMenu, 10);
    },
    contains: (d) => (a & d) === d,
    isIdle: () => a === STATE_IDLE
  };
})();
function collectFrameInfo(a) {
  return new Promise((d) => {
    if (a) d();
    else {
      frameInfoReadyResolve = () => {
        e && (clearTimeout(e), (e = 0), d());
      };
      var e = setTimeout(() => {
        getConsolePtr()("frame collector timeout");
        frameInfoReadyResolve();
      }, 500);
      frameInfoExpected = 0;
      frameInfo = new Map();
      chrome.tabs.executeScript(currentTab.id, { allFrames: !0, file: "scripts/fsFrames.js", runAt: "document_start" }, function () {
        chrome.runtime.lastError
          ? (console.error(`chrome.runtime.lastError: ${chrome.runtime.lastError.message}`), d())
          : chrome.tabs.executeScript(currentTab.id, { allFrames: !0, code: "1", runAt: "document_start" }, function (c) {
              frameInfoExpected = c ? c.length : 0;
              chrome.tabs.executeScript(
                currentTab.id,
                {
                  code: "window.postMessage({message:'rInfo', exts: {x: 0, y: 0, clientLeft:0, clientTop: 0}, domId: '', fullyVisible: true, level: 0}, '*')",
                  runAt: "document_start"
                },
                function (b) {
                  chrome.runtime.lastError && (console.error(`chrome.runtime.lastError: ${chrome.runtime.lastError.message}`), d());
                }
              );
            });
      });
    }
  });
}
function getVersionInfo() {
  "" == getOption(cGUID, "") && setOption(cGUID, getUUIDv4());
  const a = chrome.runtime.getManifest();
  extVersion = a.version.split(".", 3).join(".");
  extVersionFull = a.version.split(".", 4).join(".");
  fSilentMode =
    "legfpnnmhhnhjgekmmbkilmijnjoehne" == extensionId ||
    "hpbicldbpgipcloiojdbchegbbjiobbm" == extensionId ||
    "adpnodbfhlagloahhdhjggicnfcpggkm" == extensionId;
}
async function initNativeModule() {
  return new Promise((a) => {
    fsNativePlugin.init(
      function () {
        getConsolePtr()("Host ready event");
        a();
        switchToProIfRequired();
        updateContextMenu();
      },
      function () {
        a();
        updateContextMenu();
      }
    );
  });
}
function displayAnnouncements() {
  if (
    !fSilentMode &&
    (fPendingInstalledAnnouncement && ((fPendingInstalledAnnouncement = !1), showBadge(getInstalledPageURL())), !isNativeSupported())
  ) {
    var a = getOption(cCurrentVersion);
    a && extVersion != a && showBadge(getUpdatedPageURL());
  }
}
function getInstalledPageURL() {
  return isNativeSupported() || (isProMode() && !isSafari())
    ? `https://getfireshot.com/installed.php?ver=${extVersion}&app=${getBrowserId()}&native=1`
    : `https://getfireshot.com/installed-lite.php?ver=${extVersion}&app=${getBrowserId()}`;
}
function getUpdatedPageURL() {
  return isNativeSupported() || (isProMode() && !isSafari())
    ? `https://getfireshot.com/updated.php?app=${getBrowserId()}&ver=${extVersion}&h=${isProMode() ? "1" : "0"}`
    : `https://getfireshot.com/updated-lite.php?app=${getBrowserId()}&ver=${extVersion}`;
}
function nativeHostUpdated(a) {
  getConsolePtr()("Native module has updated to the " + a + " version.");
  gaTrack("UA-1025658-9", "DLL", "NativeHostUpdated");
  const d = getOption(cCurrentVersion);
  d && d != extVersion && a == extVersionFull && !fSilentMode && showBadge(getUpdatedPageURL());
}
function switchToProIfRequired() {
  fForcedPro = isCustomBuild() || "{5e11ab1e-083c-11e5-a6c0-1697f925ec7b}" == extensionId;
  fForceRegistered = isCustomBuild();
  setOption(cPluginProModePref, "true" === getOption(cPluginProModePref) || fForcedPro);
  setOption(cRegisteredPref, "true" === getOption(cRegisteredPref) || fForceRegistered);
}
function pluginEvent(a) {
  var d = a.topic,
    e = a.data ? a.data + "" : "";
  "status" == d
    ? a.code == statusHostReady
      ? pluginCommand("setAddonVersion", { version: extVersionFull, browser: extensionBrowser, id: extensionId, guid: getOption(cGUID) })
      : (gaTrack("UA-1025658-9", "DLL", "NativeError", a.data),
        alert(
          "FireShot failed to update. The updater reported the following error: \r\n-----------------------------------------------\r\n" +
            a.data +
            "\r\n-----------------------------------------------\r\n\r\nFireShot will have to work in Lite mode."
        ),
        getConsolePtr()("Error from native module: " + a.data))
    : "openURL" == d
    ? openURL(e)
    : "enableResumeMenu" == d
    ? (getConsolePtr()("enableResumeMenu " + e),
      (resumeMenuEnabled = "enable" == e),
      setTimeout(function () {
        updateContextMenu();
      }, 10))
    : "setupMode" == d
    ? (setOption(cPluginProModePref, fForcedPro || "false" != e), updateContextMenu())
    : "processingFinished" == d
    ? chrome.runtime.sendMessage({ message: "closeProgress" })
    : "setRegistered" == d
    ? (setOption(cRegisteredPref, fForceRegistered || "false" != e), updateContextMenu())
    : "getInfo" == d
    ? getInfo(e, function (c) {
        pluginCommand("processInfo", { data: c });
      })
    : "sendCrashReport" == d
    ? sendCrashReport(e)
    : "base64Content" == d
    ? pendingGrabURLRequest
      ? pendingGrabURLRequest(e)
      : pendingResponse && pendingResponse(e)
    : "sendToGmail" == d
    ? openInGmail(e)
    : "switchToLite" == d
    ? switchToLiteMode()
    : "getUSPTOData" == d && doUSPTORequest(e);
}
function openInGmail(a) {
  pendingGMailJSON = a;
  chrome.permissions.contains({ origins: ["https://mail.google.com/*"] }, function (d) {
    d ? openGmailComposer() : openGmailPermissionsPage();
  });
}
function checkTabReadyForCapturing(a, d, e) {
  let c = setTimeout(() => {
    c && ((c = void 0), e(!1));
  }, d);
  chrome.tabs.executeScript(a, { code: "{}", runAt: "document_start" }, () => {
    c && (clearTimeout(c), (c = void 0), e(!0));
  });
}
function initMessaging() {
  try {
    chrome.runtime.onMessage.addListener(function (a, d, e) {
      switch (a.message) {
        case "getPortName":
          e({ portName: `${commPortName}-${d.frameId}` });
          break;
        case "loadScript":
          if (!executeScriptTO) break;
          getConsolePtr()("loadScript event");
          clearTimeout(executeScriptTO);
          executeScriptTO = void 0;
          const f = d.frameId,
            k = [
              "scripts/fsXBrowserSupport.js",
              "scripts/fsUtils.js",
              "scripts/fsSelection.js",
              "scripts/fsLinks.js",
              "scripts/fsContent.js"
            ];
          var c = 0;
          const h = () => {
            c < k.length
              ? (getConsolePtr()("Executing " + k[c]),
                chrome.tabs.executeScript(currentTab.id, { file: k[c++], runAt: "document_start", frameId: f }, h))
              : setTimeout(pendingCapFunction, 200);
          };
          h();
          break;
        case "execScript":
          getConsolePtr()("execScript event");
          if (!executeScriptTO) break;
          clearTimeout(executeScriptTO);
          executeScriptTO = void 0;
          setTimeout(() => pendingCapFunction(!1), 100);
          break;
        case "checkFSAvailabilityEvt":
          return (
            getConsolePtr()("checkFSAvailabilityEvt"),
            e({
              FSAvailable: !0,
              FSNative: isNativeSupported(),
              FSUpgraded: "true" === getOption(cPluginProModePref),
              FSVersion: extVersionFull
            }),
            !0
          );
        case "capturePageEvt":
          var b = parseInt(a.Action);
          b == cActionUpgrade
            ? isNativeSupported()
              ? doUpgrade()
              : openURL("https://getfireshot.com/buy.php?SRC=" + getBrowserId() + "-lite")
            : isAPIEnabled() &&
              executeGrabber(
                b === cActionSilentSave ? cActionSilentAdd : b,
                "true" == a.Entire ? cModeEntire : cModeVisible,
                { usrData: a.Data },
                function () {
                  b === cActionSilentSave && pluginCommand("storeEncodedContent", { path: a.Data });
                  b !== cActionBASE64Content && pendingResponse && pendingResponse("");
                },
                !0,
                d.frameId
              );
          break;
        case "getScreenshotsForGmail":
          return pendingGMailJSON ? (e(pendingGMailJSON), (pendingGMailJSON = void 0), !0) : !1;
        case "switchToNativeEvt":
          installPro();
          break;
        case "callExtensionMethodMsg":
          if (!isFirefox()) break;
          if ((d = window[a.method]))
            if ("function" === typeof d) {
              if (a.async) return a.params.push((p) => e(p)), d.apply(this, a.params), !0;
              e(d.apply(this, a.params));
            } else console.error(`Error: ${a.method}() is not a function.`);
          else console.error(`Error: function ${a.method}() not found.`);
          break;
        case "getExtensionPropertyMsg":
          const n = (p) => new Promise((q) => p.toBlob((m) => q(m.arrayBuffer())));
          if (!isFirefox()) break;
          d = window[a.property];
          if ("capBitmaps" === a.property)
            return (d = capBitmaps.map((p) => n(p.canvas).then((q) => ({ y: p.y, canvasData: q })))), Promise.all(d).then((p) => e(p)), !0;
          a.property in window ? "function" !== typeof d && e(d) : console.error(`Error: property ${a.property}() not found.`);
          break;
        case "activateFireShot":
          gaTrack("UA-1025658-9", "fireshot.com", "Key-Activated", a.key);
          getConsolePtr()(a.name + " " + a.key);
          e("OK");
          pluginCommand("activateFireShot", { name: a.name, key: a.key });
          break;
        case "frameInfo":
          frameInfoExpected &&
            ((a.data.frameId = d.frameId),
            getConsolePtr()(d.frameId + "  ", a.data),
            frameInfo.set(d.frameId, a.data),
            frameInfo.size >= frameInfoExpected && ((frameInfoExpected = 0), frameInfoReadyResolve()));
      }
    });
  } catch (a) {}
}
function checkBadgeAction() {
  const a = getOption(cQueuedBadgeURLPref, "");
  return a ? (showBadge(""), openURL(a), setOption(cCurrentVersion, extVersion), !0) : !1;
}
function checkActivationPage(a) {
  isFirefox()
    ? a(!1)
    : chrome.tabs.query({ currentWindow: !0, active: !0 }, function (d) {
        try {
          if (0 !== d.length && d[0].url) {
            var e = d[0];
            /https:\/\/getfireshot(\.com)?\/activate[1]*\.php/.test(e.url)
              ? (a(!0),
                chrome.tabs.executeScript(e.id, { file: "scripts/fsActivation.js", runAt: "document_start" }, function () {
                  "" !== chrome.runtime.lastError && (chrome.runtime.lastError = "");
                }))
              : a(!1);
          } else a(!1);
        } catch (c) {
          a(!1);
        }
      });
}
function getMenuSettings(a, d) {
  function e(c) {
    var b = "capturing-prohibited" === c,
      f = "safari-extension-page" === c,
      k = "file-not-allowed" === c;
    c = "capturing-executescript-disabled" === c;
    var h = !isNativeSupported(),
      n = isProMode(),
      p = isRegistered(),
      q = getLastMode();
    c = {
      sepMain1: "visible",
      sepMain2: "visible",
      mnuCaptureTabs: "visible",
      mnuCaptureList: "visible",
      mnuFeaturesUnavailable: b ? "visible" : "hidden",
      mnuEnableFileSupport: k ? "visible" : "hidden",
      mnuQuickLaunch:
        (b && (q == cModeEntire || q == cModeSelected || q == cModeVisible)) || (c && (q == cModeEntire || q == cModeSelected))
          ? "disabled"
          : "enabled",
      mnuCaptureVisible: b ? "disabled" : "visible",
      mnuCaptureEntire: b || c ? "disabled" : "visible",
      mnuCaptureSelection: b || c ? "disabled" : "visible",
      mnuCaptureBrowser: n && !h ? "visible" : "hidden",
      mnuCaptureVisibleLite: b ? "disabled" : "visible",
      mnuCaptureEntireLite: b || c ? "disabled" : "visible",
      mnuCaptureSelectionLite: b || c ? "disabled" : "visible",
      mnuPreferencesLite: h ? "visible" : "hidden",
      mnuViewDemo: h ? "hidden" : "visible",
      mnuSupport: h ? "hidden" : "visible",
      mnuAbout: h ? "hidden" : "visible",
      sepEditor: h ? "hidden" : "visible",
      sepSupport1: h ? "hidden" : "visible",
      sepSupport2: h ? "hidden" : "visible",
      sepAdvanced: isWindows() ? "visible" : "hidden",
      mnuMiscellaneousFolder: h ? "hidden" : "visible",
      mnuResume: h ? "hidden" : resumeMenuEnabled ? "enabled" : "disabled",
      mnuUpgrade: h ? "hidden" : n ? "hidden" : "visible",
      mnuRegister: h ? "hidden" : n && !p ? "visible" : "hidden",
      mnuEnterLicense: h ? "hidden" : n && !p ? "visible" : "hidden",
      mnuOpenFile: h ? "hidden" : n ? "enabled" : "disabled",
      mnuOpenClipboard: h ? "hidden" : n ? "enabled" : "disabled",
      mnuLicenseInfo: n && p ? "visible" : "hidden",
      divCaptureToolsLite: h ? "visible" : "hidden",
      divCaptureTools: h ? "hidden" : "visible",
      mnuFireShotNative: !n && h ? "visible" : "hidden",
      mnuStopFireShot: "hidden"
    };
    for (var m in c)
      currentState.contains(STATE_CAPTURING) || currentState.contains(STATE_BATCH) || currentState.contains(STATE_ALLTABS)
        ? (c[m] = "mnuStopFireShot" === m ? "visible" : "hidden")
        : b
        ? (c[m] = "mnuFeaturesUnavailable" === m ? "visible" : "hidden")
        : f
        ? (c[m] = ["mnuCaptureVisibleLite", "sepMain2", "mnuPreferencesLite", "mnuCaptureTabs", "mnuCaptureList"].includes(m)
            ? "visible"
            : "hidden")
        : k && (c[m] = "mnuEnableFileSupport" === m ? "visible" : "hidden");
    d(c);
  }
  chrome.tabs.query({ currentWindow: !0, active: !0 }, function (c) {
    try {
      if (0 !== c.length && c[0].url) {
        var b = c[0],
          f = isFirefox();
        /^(chrome-extension|moz-extension).*/.test(b.url)
          ? e("capturing-executescript-disabled")
          : /^safari-web-extension.*/.test(b.url)
          ? e("capturing-executescript-disabled")
          : !f && /^file:\/\/.*/.test(b.url)
          ? chrome.extension.isAllowedFileSchemeAccess(function (k) {
              k ? e("capturing-allowed") : e("file-not-allowed");
            })
          : f || !/^(http|https|ftp|ftps):\/\/.*/.test(b.url) || /^https?:\/\/chrome.google.com\/.*$/.test(b.url)
          ? f && /^(http|https|ftp|ftps|file):\/\/.*/.test(b.url) && isURLScriptable(b.url)
            ? e("capturing-allowed")
            : e("capturing-executescript-disabled")
          : e("capturing-allowed");
      } else e("capturing-prohibited");
    } catch (k) {
      e("capturing-prohibited");
    }
  });
}
function capturePage(a, d, e, c, b, f) {
  void 0 !== executeScriptTO && (clearTimeout(executeScriptTO), (executeScriptTO = void 0));
  capId++;
  fAbortWithoutResult = fAbortCapturing = !1;
  currentTab = b;
  currentFrameId = f;
  capCallbackCompleted = c;
  let k = (d !== cModeEntire && d !== cModeSelected) || 0 !== f || (isSafari() && /Version\/14/.test(navigator.appVersion));
  collectFrameInfo(k).then(() => {
    pendingCapFunction = function (h) {
      h ? captureVisibleTabPlain(a, e, c) : doCapturing(a, d, e, c);
    };
    getConsolePtr()("capturePage: checking capabilities at " + b.url + ". Tab state is: " + b.status);
    d == cModeBrowser && void 0 !== b.url && void 0 !== b.title
      ? setTimeout(function () {
          getConsolePtr()("Calling captureBrowser directly...");
          pluginCommand("captureBrowser", { action: a + ":-", url: b.url, title: b.title });
          capCallbackCompleted && capCallbackCompleted();
        }, 100)
      : ((executeScriptTO = setTimeout(function () {
          executeScriptTO = void 0;
          getConsolePtr()("Calling doCapturing on timeout");
          pendingCapFunction(!0);
        }, 1e3)),
        chrome.tabs.executeScript(b.id, { file: "scripts/fsScriptChecker.js", runAt: "document_start", frameId: f }, function () {
          chrome.runtime.lastError &&
            (clearTimeout(executeScriptTO),
            (executeScriptTO = void 0),
            getConsolePtr()("Calling doCapturing on lastError"),
            pendingCapFunction(!0));
        }));
  });
}
function getActionLocaleId(a) {
  switch (a) {
    case cActionSave:
      return "action_save";
    case cActionSavePDF:
      return "action_save_pdf";
    case cActionClipboard:
      return "action_copy";
    case cActionEMail:
      return "action_email";
    case cActionPaint:
      return "action_external";
    case cActionSendOneNote:
      return "action_onenote";
    case cActionUpload:
      return "action_upload";
    case cActionPrint:
      return "action_print";
    case cActionMultiPDF:
      return "action_save_pdf_single";
    default:
      return "action_edit";
  }
}
function getLADescription() {
  let a,
    d = getActionLocaleId(getLastAction());
  const e = !isNativeSupported(),
    c = getLastMode();
  switch (c) {
    case cModeVisible:
      a = e ? "action_capture_visible_lite" : "action_capture_visible";
      break;
    case cModeSelected:
      a = e ? "action_capture_selection_lite" : "action_capture_selection";
      break;
    case cModeBrowser:
      a = "action_capture_browser";
      break;
    case cModeTabs:
      a = "action_capture_tabs";
      break;
    default:
      a = e ? "action_capture_entire_lite" : "action_capture_entire";
  }
  return e && c !== cModeTabs ? chrome.i18n.getMessage(a) : chrome.i18n.getMessage(a) + " " + chrome.i18n.getMessage(d);
}
function buttonStopCapturingClicked() {
  currentState.contains(STATE_BATCH) && currentState.remove(STATE_BATCH);
  stopCapturing();
}
function stopCapturing(a) {
  fAbortCapturing = !0;
  fAbortWithoutResult = a;
  getConsolePtr()("Capturing canceled");
  0 === stopButtonPressedCount++
    ? fnCancelSelection && fnCancelSelection()
    : currentState.contains(STATE_CAPTURING)
    ? setTimeout(fnForcedAbort, 1500)
    : (currentState.contains(STATE_BATCH) || currentState.contains(STATE_ALLTABS)) && currentState.reset();
}
function tryCaptureVisibleTab(a, d, e) {
  return new Promise((c, b) => {
    const f = (k) =>
      chrome.tabs.captureVisibleTab(a, d, (h) => {
        !chrome.runtime.lastError && h
          ? c(h)
          : k < e.MAX_CAP_TRIALS
          ? (getConsolePtr()("Capture visible tab retry " + k),
            setTimeout(() => {
              f(++k);
            }, e.CAP_DELAY))
          : (getConsolePtr()("Maximum attempts to call captureVisibleTab reached."), b());
      });
    f(0);
  });
}
function captureVisibleTabPlain(a, d, e) {
  tryCaptureVisibleTab(void 0, { format: "png" }, { MAX_CAP_TRIALS: 5, CAP_DELAY: 50 })
    .then(async (c) => {
      const b = d.JSPlugin ? getJSPlugin() : getPlugin();
      var f = peekPNGExtents(c);
      pluginCommand(b, "captureInit");
      pluginCommand(b, "captureTabPNG", { dataurl: c, datasize: c.length, x: 0, y: 0 });
      c = currentTab.url || "not available";
      var k = currentTab.title ? currentTab.title.replace(/\u200B/g, "").replace(/\u00a0/g, " ") : "not available";
      c = { action: a, url: c, title: k, left: 0, top: 0, cw: f.w, ch: f.h };
      isFirefox() &&
        (!currentTab.url || currentTab.url.startsWith("about:")) &&
        0 < currentTab.width &&
        (f.w / currentTab.width) * currentTab.height < f.h &&
        ((k = f.w / currentTab.width),
        (c.crop = !0),
        (c.cropLeft = 0),
        (c.cropTop = 0),
        (c.cropRight = f.w),
        (c.cropBottom = currentTab.height * k));
      f = navigator.userAgent.match(/(Firefox|Chrom(e|ium)|Safari)\/([0-9]+)\./);
      c.browserVersion = parseInt(f && 4 <= f.length ? f[3] : "0.0");
      c.usrData = d.usrData;
      c.overrideFolder = d.overrideFolder;
      c.contextId = d.contextId;
      savedCapParamsForDebugging = {
        version: extVersionFull,
        pro: isProMode(),
        action: c.action,
        left: c.left,
        top: c.top,
        rows: 1,
        cols: 1,
        cw: c.cw,
        ch: c.ch,
        ratioW: 1,
        ratioH: 1
      };
      pendingResponse = function (h) {
        pendingResponse = void 0;
        port.postMessage({ topic: "sendFireShotCaptureCompleteEvent", data: h });
      };
      await pluginCommand(b, "captureDone", c);
    })
    .catch((c) => {
      c && console.log(c.message);
    })
    .finally(() => {
      e && e(!0);
    });
}
function doCapturing(a, d, e, c) {
  function b(f, k, h) {
    let n = -1,
      p = -1;
    tryCaptureVisibleTab(currentTab.windowId, { format: "jpeg" }, { MAX_CAP_TRIALS: 20, CAP_DELAY: 50 })
      .then((q) => {
        try {
          const m = getJpegExtents(q);
          n = m[0];
          p = m[1];
          getConsolePtr()("Emulation extents: " + m[0] + " x " + m[1]);
        } catch (m) {
          getConsolePtr()(m.toString());
        }
      })
      .catch(() => {})
      .finally(() => {
        mainFrameRatios = { rw: closestToInt(n / f), rh: closestToInt(p / k) };
        h();
      });
  }
  getConsolePtr()("doCapturing");
  if (capId <= processedId++) capId = processedId;
  else
    try {
      const f = chrome.tabs.connect(currentTab.id, { name: `${commPortName}-${currentFrameId}`, frameId: currentFrameId }),
        k = () => {
          currentState.remove(STATE_CAPTURING);
          c && c(!1);
        },
        h = e.JSPlugin ? getJSPlugin() : getPlugin();
      fnForcedAbort = () => {
        fnCancelSelection = void 0;
        currentState.remove(STATE_CAPTURING);
        f.onMessage.removeListener(m);
        f.onDisconnect.removeListener(k);
        c && c(!1);
      };
      const n = () => {
        let g = [...frameInfo]
            .filter((u) => 0 < u[0] && 100 <= u[1].clientWidth && 100 <= u[1].clientHeight && u[1].scrollable && u[1].fullyVisible)
            .map((u) => u[1]),
          r = 1;
        var l = 1;
        0 < currentFrameId && ((l = frameInfo.get(currentFrameId)), (r = l.scales[0]), (l = l.scales[1]));
        let t = { ...fsPreferences.storage };
        e.overrideSpeed && (t[cPageScrollingSpeedPref] = e.overrideSpeed);
        f.postMessage({
          topic: "init",
          mode: d,
          debug: isDebug,
          options: JSON.stringify(t),
          adv: isProMode(),
          frames: g,
          ratioW: mainFrameRatios.rw * r,
          ratioH: mainFrameRatios.rh * l
        });
      };
      let p, q;
      const m = (g) => {
        getConsolePtr()(isSafari() ? JSON.stringify(g).substring(0, 2e3) : JSON.stringify(g));
        switch (g.topic) {
          case "preStep1Done":
            b(g.windowW, g.windowH, () => {
              f.postMessage({ topic: "preStep2" });
            });
            break;
          case "preStep2Done":
            n();
            break;
          case "initAborted":
            getConsolePtr()("init Aborted");
            currentState.remove(STATE_CAPTURING);
            c && c();
            break;
          case "initDone":
            p = g.url;
            q = g.title;
            switch (d) {
              case cModeVisible:
              case cModeEntire:
                pluginCommand(h, "captureInit");
                f.postMessage({ topic: "scrollNext" });
                break;
              case cModeSelected:
                pluginCommand(h, "captureInit");
                fnCancelSelection = () => {
                  f.postMessage({ topic: "cancelSelection" });
                };
                f.postMessage({ topic: "selectArea" });
                break;
              case cModeBrowser:
                pluginCommand("captureBrowser", { action: a + ":-", url: p, title: q });
            }
            break;
          case "areaSelected":
            fnCancelSelection = void 0;
            f.postMessage({ topic: "scrollNext" });
            break;
          case "areaSelectionCanceled":
            fnForcedAbort();
            break;
          case "switchToFrame":
            currentState.remove(STATE_CAPTURING);
            f.onMessage.removeListener(m);
            f.onDisconnect.removeListener(k);
            restorePosition = g.restorePosition;
            capturePosition = g.capturePosition;
            let r = new Map();
            r.set(g.id, frameInfo.get(g.id));
            frameInfo = r;
            capturePage(a, cModeEntire, e, c, currentTab, g.id);
            break;
          case "scrollDone":
            chrome.runtime.sendMessage({ message: "setProgressValue", progress: g.progress });
            tryCaptureVisibleTab(currentTab.windowId, { format: "png" }, { MAX_CAP_TRIALS: 40, CAP_DELAY: 50 })
              .then((l) => {
                pluginCommand(h, "captureTabPNG", { dataurl: l, datasize: l.length, x: g.x, y: g.y });
                f.postMessage({ topic: "scrollNext", cancel: fAbortCapturing });
              })
              .catch(() => f.postMessage({ topic: "scrollNext", cancel: !0 }));
            break;
          case "scrollFinished":
            getConsolePtr()("FINISHED (" + g.rows + " x " + g.cols + ")");
            chrome.runtime.sendMessage({ message: "setProgressValue", progress: 100 });
            (10 < g.rows || isNativeSupported()) && setTimeout(() => chrome.runtime.sendMessage({ message: "setProcessingStatus" }), 100);
            setTimeout(
              async () => {
                currentState.remove(STATE_CAPTURING);
                f.onMessage.removeListener(m);
                f.onDisconnect.removeListener(k);
                if (0 < currentFrameId) {
                  var l = frameInfo.get(currentFrameId);
                  g.left = Math.round((capturePosition.left + l.clientLeft) * mainFrameRatios.rw);
                  g.top = Math.round((capturePosition.top + l.clientTop) * mainFrameRatios.rh);
                  g.cw = l.clientWidth * mainFrameRatios.rw * l.scales[0];
                  g.ch = l.clientHeight * mainFrameRatios.rh * l.scales[1];
                  g.div = 1;
                }
                savedCapParamsForDebugging = {
                  version: extVersionFull,
                  pro: isProMode(),
                  action: g.action,
                  left: g.left,
                  top: g.top,
                  width: g.width,
                  height: g.height,
                  rows: g.rows,
                  cols: g.cols,
                  cw: g.cw,
                  ch: g.ch,
                  ratioW: g.ratioW,
                  ratioH: g.ratioH,
                  cropLeft: g.cropLeft,
                  cropRight: g.cropRight,
                  cropTop: g.cropTop,
                  cropBottom: g.cropBottom
                };
                g.url = p;
                g.title = q;
                g.key = "-";
                g.action = a;
                l = navigator.userAgent.match(/(Firefox|Chrom(e|ium)|Safari)\/([0-9]+)\./);
                g.browserVersion = parseInt(l && 4 <= l.length ? l[3] : "0.0");
                g.usrData = e.usrData;
                g.overrideFolder = e.overrideFolder;
                g.contextId = e.contextId;
                fAbortWithoutResult ||
                  ((pendingResponse = function (t) {
                    pendingResponse = void 0;
                    f.postMessage({ topic: "sendFireShotCaptureCompleteEvent", data: t });
                  }),
                  await pluginCommand(h, "captureDone", g));
                0 < currentFrameId &&
                  restorePosition &&
                  (chrome.tabs.executeScript(currentTab.id, {
                    code: `document.scrollingElement.scrollTo(${restorePosition.left}, ${restorePosition.top})`,
                    runAt: "document_start",
                    frameId: 0
                  }),
                  (restorePosition = void 0));
                c && c(!0);
              },
              d === cModeEntire ? 200 : 0
            );
            break;
          case "setOption":
            setOption(g.optionName, g.optionValue);
        }
      };
      f.onMessage.addListener(m);
      f.onDisconnect.addListener(k);
      currentState.add(STATE_CAPTURING);
      0 === currentFrameId ? f.postMessage({ topic: "preStep1" }) : n();
    } catch (f) {
      currentState.remove(STATE_CAPTURING), console.error(f), c && c(!1);
    }
}
function genericOnClick(a, d) {
  switch (a.menuItemId) {
    case mnuTest:
      doTest();
      break;
    case mnuLastAction:
      captureLastUsedMode();
      break;
    case mnuStopFireShot:
      buttonStopCapturingClicked();
      break;
    case mnuVisibleEdit:
      executeGrabber(cActionEdit, cModeVisible);
      break;
    case mnuVisibleSave:
      executeGrabber(cActionSave, cModeVisible);
      break;
    case mnuVisibleSavePDF:
      executeGrabber(cActionSavePDF, cModeVisible);
      break;
    case mnuVisibleSendOneNote:
      executeGrabber(cActionSendOneNote, cModeVisible);
      break;
    case mnuVisibleUpload:
      executeGrabber(cActionUpload, cModeVisible);
      break;
    case mnuVisiblePrint:
      executeGrabber(cActionPrint, cModeVisible);
      break;
    case mnuVisibleCopy:
      executeGrabber(cActionClipboard, cModeVisible);
      break;
    case mnuVisibleEMail:
      executeGrabber(cActionEMail, cModeVisible);
      break;
    case mnuVisibleExtEditor:
      executeGrabber(cActionPaint, cModeVisible);
      break;
    case mnuEntireEdit:
      executeGrabber(cActionEdit, cModeEntire);
      break;
    case mnuEntireSave:
      executeGrabber(cActionSave, cModeEntire);
      break;
    case mnuEntireSavePDF:
      executeGrabber(cActionSavePDF, cModeEntire);
      break;
    case mnuEntireSendOneNote:
      executeGrabber(cActionSendOneNote, cModeEntire);
      break;
    case mnuEntireUpload:
      executeGrabber(cActionUpload, cModeEntire);
      break;
    case mnuEntirePrint:
      executeGrabber(cActionPrint, cModeEntire);
      break;
    case mnuEntireCopy:
      executeGrabber(cActionClipboard, cModeEntire);
      break;
    case mnuEntireEMail:
      executeGrabber(cActionEMail, cModeEntire);
      break;
    case mnuEntireExtEditor:
      executeGrabber(cActionPaint, cModeEntire);
      break;
    case mnuSelectedEdit:
      executeGrabber(cActionEdit, cModeSelected);
      break;
    case mnuSelectedSave:
      executeGrabber(cActionSave, cModeSelected);
      break;
    case mnuSelectedSavePDF:
      executeGrabber(cActionSavePDF, cModeSelected);
      break;
    case mnuSelectedSendOneNote:
      executeGrabber(cActionSendOneNote, cModeSelected);
      break;
    case mnuSelectedUpload:
      executeGrabber(cActionUpload, cModeSelected);
      break;
    case mnuSelectedPrint:
      executeGrabber(cActionPrint, cModeSelected);
      break;
    case mnuSelectedCopy:
      executeGrabber(cActionClipboard, cModeSelected);
      break;
    case mnuSelectedEMail:
      executeGrabber(cActionEMail, cModeSelected);
      break;
    case mnuSelectedExtEditor:
      executeGrabber(cActionPaint, cModeSelected);
      break;
    case mnuBrowserEdit:
      executeGrabber(cActionEdit, cModeBrowser);
      break;
    case mnuBrowserSave:
      executeGrabber(cActionSave, cModeBrowser);
      break;
    case mnuBrowserSavePDF:
      executeGrabber(cActionSavePDF, cModeBrowser);
      break;
    case mnuBrowserSendOneNote:
      executeGrabber(cActionSendOneNote, cModeBrowser);
      break;
    case mnuBrowserUpload:
      executeGrabber(cActionUpload, cModeBrowser);
      break;
    case mnuBrowserPrint:
      executeGrabber(cActionPrint, cModeBrowser);
      break;
    case mnuBrowserCopy:
      executeGrabber(cActionClipboard, cModeBrowser);
      break;
    case mnuBrowserEMail:
      executeGrabber(cActionEMail, cModeBrowser);
      break;
    case mnuBrowserExtEditor:
      executeGrabber(cActionPaint, cModeBrowser);
      break;
    case mnuCaptureList:
      openURL("fsCaptureList.html");
      break;
    case mnuAllTabsSavePDFLite:
      addPermissions({ permissions: ["tabs", "downloads"], origins: ["<all_urls>"] }, () => executeGrabber(cActionSavePDF, cModeTabs));
      break;
    case mnuAllTabsSaveImageLite:
      addPermissions({ permissions: ["tabs", "downloads"], origins: ["<all_urls>"] }, () => executeGrabber(cActionSave, cModeTabs));
      break;
    case mnuAllTabsEdit:
      tabsPermissionRequired(() => executeGrabber(cActionEdit, cModeTabs));
      break;
    case mnuAllTabsSinglePDF:
      tabsPermissionRequired(() => executeGrabber(cActionMultiPDF, cModeTabs));
      break;
    case mnuAllTabsSave:
      tabsPermissionRequired(() => executeGrabber(cActionSave, cModeTabs));
      break;
    case mnuAllTabsSendOneNote:
      tabsPermissionRequired(() => executeGrabber(cActionSendOneNote, cModeTabs));
      break;
    case mnuAllTabsUpload:
      tabsPermissionRequired(() => executeGrabber(cActionUpload, cModeTabs));
      break;
    case mnuAllTabsPrint:
      tabsPermissionRequired(() => executeGrabber(cActionPrint, cModeTabs));
      break;
    case mnuAllTabsClipboard:
      tabsPermissionRequired(() => executeGrabber(cActionClipboard, cModeTabs));
      break;
    case mnuAllTabsEMail:
      tabsPermissionRequired(() => executeGrabber(cActionEMail, cModeTabs));
      break;
    case mnuAllTabsExtEditor:
      tabsPermissionRequired(() => executeGrabber(cActionPaint, cModeTabs));
      break;
    case mnuPreferences:
      openExtensionPreferences();
      break;
    case mnuViewDemo:
      openDemoPage();
      break;
    case mnuSupport:
      openSupportPage();
      break;
    case mnuAPI:
      openAPIPage();
      break;
    case mnuUnlockProFeatures:
    case mnuUpgrade:
      doUpgrade();
      break;
    case mnuRegister:
      doRegister();
      break;
    case mnuEnterLicense:
      enterLicense();
      break;
    case mnuOpenFile:
      openFile();
      break;
    case mnuOpenClipboard:
      openClipboard();
      break;
    case mnuResume:
      resumeEditing();
      break;
    case mnuFireShotNative:
      installPro();
      break;
    case mnuLicensingInfo:
      showLicenseInfo();
      break;
    case mnuAbout:
      showAbout();
  }
}
function updateLastActionInContextMenu() {
  chrome.commands.getAll(() => {
    getLAShortcut("last-used-action", "Cmd+Shift+S", (a) => {
      chrome.contextMenus.update(mnuLastAction, { onclick: genericOnClick, title: getLADescription() + "    " + a }, function () {
        "" !== chrome.runtime.lastError && (chrome.runtime.lastError = "");
      });
    });
  });
}
var fEntered = !1,
  mnuStopFireShot,
  mnuLastAction,
  mnuVisibleEdit,
  mnuVisibleSave,
  mnuVisibleSavePDF,
  mnuVisibleSendOneNote,
  mnuVisibleUpload,
  mnuVisiblePrint,
  mnuVisibleCopy,
  mnuVisibleEMail,
  mnuVisibleExtEditor,
  mnuEntireEdit,
  mnuEntireSave,
  mnuEntireSavePDF,
  mnuEntireSendOneNote,
  mnuEntireUpload,
  mnuEntirePrint,
  mnuEntireCopy,
  mnuEntireEMail,
  mnuEntireExtEditor,
  mnuSelectedEdit,
  mnuSelectedSave,
  mnuSelectedSavePDF,
  mnuSelectedSendOneNote,
  mnuSelectedUpload,
  mnuSelectedPrint,
  mnuSelectedCopy,
  mnuSelectedEMail,
  mnuSelectedExtEditor,
  mnuBrowserEdit,
  mnuBrowserSave,
  mnuBrowserSavePDF,
  mnuBrowserSendOneNote,
  mnuBrowserUpload,
  mnuBrowserPrint,
  mnuBrowserCopy,
  mnuBrowserEMail,
  mnuBrowserExtEditor,
  mnuResume,
  mnuOpenFile,
  mnuOpenClipboard,
  mnuPreferences,
  mnuRegister,
  mnuEnterLicense,
  mnuUpgrade,
  mnuViewDemo,
  mnuSupport,
  mnuAPI,
  mnuLicensingInfo,
  mnuAbout,
  mnuFireShotNative,
  mnuTest,
  mnuAllTabsEdit,
  mnuAllTabsSinglePDF,
  mnuUnlockProFeatures,
  mnuAllTabsSave,
  mnuAllTabsSendOneNote,
  mnuAllTabsUpload,
  mnuAllTabsPrint,
  mnuAllTabsEMail,
  mnuAllTabsExtEditor,
  mnuAllTabsClipboard,
  mnuCaptureList,
  mnuAllTabsSavePDFLite,
  mnuAllTabsSaveImageLite;
function updateContextMenu() {
  fEntered ||
    ((fEntered = !0),
    chrome.contextMenus.removeAll(function () {
      function a() {
        chrome.contextMenus.create({ onclick: function () {}, type: "separator" });
      }
      if ("true" === getOption(cContextMenuIntegrationPref, "true")) {
        var d = "true" === getOption(cPluginProModePref),
          e = "true" === getOption(cRegisteredPref),
          c = !isNativeSupported();
        var b = ["http://*/*", "https://*/*", "ftp://*/*", "file://*/*"];
        if (currentState.contains(STATE_CAPTURING) || currentState.contains(STATE_BATCH) || currentState.contains(STATE_ALLTABS))
          mnuStopFireShot = chrome.contextMenus.create({ title: chrome.i18n.getMessage("action_capture_stop"), onclick: genericOnClick });
        else {
          isDebug && ((mnuTest = chrome.contextMenus.create({ title: "DO TEST", onclick: genericOnClick })), a());
          mnuLastAction = chrome.contextMenus.create({ title: "Last action", onclick: genericOnClick, documentUrlPatterns: b });
          updateLastActionInContextMenu();
          if (isSafari()) {
            fEntered = !1;
            return;
          }
          a();
          c
            ? ((mnuEntireEdit = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_capture_entire_lite") + "...",
                onclick: genericOnClick,
                documentUrlPatterns: b
              })),
              (mnuVisibleEdit = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_capture_visible_lite") + "...",
                onclick: genericOnClick,
                documentUrlPatterns: b
              })),
              (mnuSelectedEdit = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_capture_selection_lite") + "...",
                onclick: genericOnClick,
                documentUrlPatterns: b
              })),
              (b = chrome.contextMenus.create({ title: chrome.i18n.getMessage("action_capture_tabs") + "..." })),
              (mnuCaptureList = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_batch") + "...",
                onclick: genericOnClick
              })),
              (mnuAllTabsSaveImageLite = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_save") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuAllTabsSavePDFLite = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_save_pdf") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              a())
            : ((b = chrome.contextMenus.create({ title: chrome.i18n.getMessage("action_capture_visible") + "..." })),
              (mnuVisibleEdit = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_edit") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuVisibleSave = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_save") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuVisibleSavePDF = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_save_pdf") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuVisibleSendOneNote = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_onenote") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuVisibleUpload = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_upload") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuVisiblePrint = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_print") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuVisibleCopy = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_copy") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuVisibleEMail = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_email") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuVisibleExtEditor = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_external") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (b = chrome.contextMenus.create({ title: chrome.i18n.getMessage("action_capture_entire") + "..." })),
              (mnuEntireEdit = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_edit") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuEntireSave = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_save") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuEntireSavePDF = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_save_pdf") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuEntireSendOneNote = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_onenote") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuEntireUpload = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_upload") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuEntirePrint = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_print") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuEntireCopy = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_copy") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuEntireEMail = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_email") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuEntireExtEditor = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_external") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (b = chrome.contextMenus.create({ title: chrome.i18n.getMessage("action_capture_selection") + "..." })),
              (mnuSelectedEdit = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_edit") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuSelectedSave = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_save") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuSelectedSavePDF = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_save_pdf") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuSelectedSendOneNote = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_onenote") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuSelectedUpload = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_upload") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuSelectedPrint = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_print") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuSelectedCopy = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_copy") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuSelectedEMail = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_email") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuSelectedExtEditor = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_external") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (b = chrome.contextMenus.create({ title: chrome.i18n.getMessage("action_capture_browser") + "..." })),
              (mnuBrowserEdit = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_edit") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuBrowserSave = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_save") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuBrowserSavePDF = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_save_pdf") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuBrowserSendOneNote = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_onenote") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuBrowserUpload = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_upload") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuBrowserPrint = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_print") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuBrowserCopy = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_copy") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuBrowserEMail = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_email") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuBrowserExtEditor = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_external") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (b = chrome.contextMenus.create({ title: chrome.i18n.getMessage("action_capture_tabs") + "..." })),
              (mnuCaptureList = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_batch") + "...",
                onclick: genericOnClick
              })),
              (mnuAllTabsSinglePDF = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_save_pdf_single") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuAllTabsEdit = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_edit") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuAllTabsSave = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_save") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuAllTabsSendOneNote = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_onenote") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuAllTabsUpload = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_upload") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuAllTabsPrint = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_print") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuAllTabsClipboard = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_copy") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuAllTabsEMail = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_email") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              (mnuAllTabsExtEditor = chrome.contextMenus.create({
                title: chrome.i18n.getMessage("action_external") + "...",
                parentId: b,
                onclick: genericOnClick
              })),
              a(),
              d &&
                (resumeMenuEnabled &&
                  (mnuResume = chrome.contextMenus.create({
                    title: chrome.i18n.getMessage("action_resume") + "...",
                    onclick: genericOnClick
                  })),
                (mnuOpenFile = chrome.contextMenus.create({
                  title: chrome.i18n.getMessage("action_open_file") + "...",
                  onclick: genericOnClick
                })),
                (mnuOpenClipboard = chrome.contextMenus.create({
                  title: chrome.i18n.getMessage("action_open_clipboard") + "...",
                  onclick: genericOnClick
                })),
                a()));
          mnuPreferences = chrome.contextMenus.create({ title: chrome.i18n.getMessage("action_options") + "...", onclick: genericOnClick });
          mnuFireShotNative =
            !isWindows() ||
            !c ||
            chrome.contextMenus.create({
              title: chrome.i18n.getMessage("action_install_native") + "...",
              parentId: c ? null : b,
              onclick: genericOnClick
            });
          c ||
            !d ||
            e ||
            ((mnuRegister = chrome.contextMenus.create({
              title: chrome.i18n.getMessage("action_register") + "...",
              onclick: genericOnClick
            })),
            (mnuEnterLicense = chrome.contextMenus.create({
              title: chrome.i18n.getMessage("action_enter_license") + "...",
              onclick: genericOnClick
            })));
          c ||
            d ||
            (mnuUpgrade = chrome.contextMenus.create({
              title: chrome.i18n.getMessage("action_switch_pro") + "!",
              onclick: genericOnClick
            }));
          mnuViewDemo = c || chrome.contextMenus.create({ title: chrome.i18n.getMessage("action_view_demo"), onclick: genericOnClick });
          mnuSupport = c || chrome.contextMenus.create({ title: chrome.i18n.getMessage("action_support"), onclick: genericOnClick });
          !c &&
            d &&
            e &&
            (mnuLicensingInfo = chrome.contextMenus.create({
              title: chrome.i18n.getMessage("action_license_info"),
              onclick: genericOnClick
            }));
          mnuAbout = c || chrome.contextMenus.create({ title: chrome.i18n.getMessage("action_about"), onclick: genericOnClick });
        }
      }
      fEntered = !1;
    }));
}
function restoreBadge() {
  const a = getOption(cQueuedBadgeURLPref, "");
  "" !== a && showBadge(a);
}
function executeGrabber(a, d, e, c, b, f) {
  stopButtonPressedCount = 0;
  targetDOMframeId = f || "";
  e = e || {};
  currentState.contains(STATE_CAPTURING) ||
    (b || setLastActionAndMode(a, d),
    d === cModeTabs
      ? captureTabs(a)
      : (multiPDFMode && (pluginCommand("cancelMultiPagePDF"), (multiPDFMode = void 0)),
        e.tabId
          ? chrome.tabs.get(e.tabId, (k) => capturePage(a, d, e, c, k, 0))
          : chrome.tabs.query({ currentWindow: !0, active: !0 }, (k) => {
              0 < k.length ? capturePage(a, d, e, c, k[0], 0) : c(!1);
            })));
}
async function captureList(a) {
  a = { ...a };
  const d = a.prefBatchURLs
    .split("\n")
    .filter((b) => 0 < b.trim().length)
    .map((b) => {
      b = b.trim();
      return /^(http|https|ftp|ftps):\/\/.*/.test(b) ? b : "https://" + b;
    });
  var e = "";
  a.prefBatchCreateFolder &&
    ((e = new Date()),
    (e = `FireShot batch job (${e.getFullYear()}-${padString(e.getMonth() + 1, 0, 2)}-${padString(e.getDate(), 0, 2)} ${padString(
      e.getHours(),
      0,
      2
    )}-${padString(e.getMinutes(), 0, 2)}-${padString(e.getSeconds(), 0, 2)})`));
  currentState.add(STATE_BATCH);
  const c = new AnimatedIcon();
  c.start();
  try {
    let b;
    const f = batchContextId++;
    a.prefBatchOpenFolder &&
      (fileSavedCallback = (k, h) => {
        k !== f || b || ((b = h), showSavedFile(h));
      });
    await new fsAutomation().grabPages(
      d,
      "pdf" === a.prefBatchFormat ? cActionSavePDF : cActionSave,
      "entire" === a.prefBatchMode ? cModeEntire : cModeVisible,
      {
        timeout: parseInt(a.prefBatchTimeout),
        delay: parseInt(a.prefBatchDelay),
        speed: parseInt(a.prefBatchScrollSpeed),
        subfolder: e,
        callbackContextId: f
      }
    );
    a.prefBatchOpenFolder && b && setTimeout(() => showSavedFile(b), 1e3);
  } catch (b) {
    console.error(b);
  }
  c.stop();
  currentState.remove(STATE_BATCH);
}
function captureTabs(a) {
  function d(k, h) {
    return {
      next: function (n) {
        h(n) || k(this);
      }
    };
  }
  function e(k, h) {
    isSafari()
      ? chrome.tabs.update(k.id, { active: !0, highlighted: !0 }, h)
      : chrome.tabs.highlight({ windowId: k.windowId, tabs: k.index }, h);
  }
  fAbortWithoutResult = fAbortCapturing = !1;
  getConsolePtr()("capturetabs");
  const c = new AnimatedIcon();
  c.start();
  var b = a !== cActionMultiPDF && isNativeSupported() ? cActionSilentAdd : a,
    f;
  a === cActionMultiPDF && (pluginCommand("startMultiPagePDF"), (multiPDFMode = !0));
  stopButtonPressedCount = 0;
  currentState.add(STATE_ALLTABS);
  (function (k) {
    return new Promise(function (h) {
      var n = 0;
      const p = batchContextId++,
        q = isProMode() && "true" !== getOption(cAllTabsOnlyVisibleModePref) ? cModeEntire : cModeVisible,
        m = isSafari() || "true" === getOption(cOpenFolderAterSavingPref);
      let g;
      m &&
        (fileSavedCallback = (r, l) => {
          r !== p || g || ((g = l), showSavedFile(l));
        });
      chrome.tabs.query({ currentWindow: !0 }, (r) => {
        if (r && 0 !== r.length) {
          for (let t = 0; t < r.length && !f; ++t) r[t].active && (f = r[t]);
          var l = 0;
          new d(
            (t) => {
              try {
                e(r[l], () => {
                  checkTabReadyForCapturing(r[l].id, 5e3, (u) => {
                    u
                      ? capturePage(
                          k,
                          q,
                          { contextId: p },
                          (v) => {
                            v && ++n;
                            t.next();
                          },
                          r[l++],
                          0
                        )
                      : (l++, t.next());
                  });
                });
              } catch (u) {
                logError(u.message), h(n);
              }
            },
            () =>
              l >= r.length || fAbortCapturing || !currentState.contains(STATE_ALLTABS)
                ? (m && g && setTimeout(() => showSavedFile(g), 1e3), h(n), !0)
                : !1
          ).next();
        } else h(n);
      });
    });
  })(b).then((k) => {
    currentState.remove(STATE_ALLTABS);
    c.stop();
    a === cActionMultiPDF
      ? (pluginCommand("endMultiPagePDF"), (multiPDFMode = void 0))
      : pluginCommand("doGroupAction", { action: a, count: k });
    f && e(f);
  });
}
function initHandlers() {
  chrome.tabs.onUpdated.addListener(function (a, d, e) {
    d &&
      "complete" === d.status &&
      (/https:\/\/getfireshot(\.com)?\/automation\.php/.test(e.url)
        ? chrome.tabs.executeScript(e.id, { file: "scripts/fsActivation.js", runAt: "document_start" }, () => {
            "" !== chrome.runtime.lastError && (chrome.runtime.lastError = "");
          })
        : /https:\/\/getfireshot(\.com)?\/activate\.php/.test(e.url) || (!isCustomBuild() && !isAPIEnabled()) || initAPI("pageLoad"),
      fInjectGmailScript &&
        /^https?:\/\/mail.google.com\/mail.*$/.test(e.url) &&
        (getConsolePtr()("Executing script for: " + e.url),
        chrome.tabs.executeScript(a, { file: "scripts/3p/inboxsdk.js", runAt: "document_end" }, function () {
          chrome.runtime.lastError && getConsolePtr()("error:" + chrome.runtime.lastError);
          chrome.tabs.executeScript(a, { file: "scripts/fsGmail.js", runAt: "document_end" }, function () {
            chrome.runtime.lastError && getConsolePtr()("error:" + chrome.runtime.lastError);
            fInjectGmailScript = !1;
          });
        })));
  });
  chrome.tabs.onActivated.addListener(function (a) {
    (isCustomBuild() || isAPIEnabled()) && initAPI("tabSwitch");
  });
  chrome.commands.onCommand.addListener(function (a) {
    getConsolePtr()("Command:", a);
    if (currentState.contains(STATE_CAPTURING) || currentState.contains(STATE_BATCH) || currentState.contains(STATE_ALLTABS))
      (currentState.contains(STATE_CAPTURING) || currentState.contains(STATE_BATCH) || currentState.contains(STATE_ALLTABS)) &&
        "last-used-action" === a &&
        stopCapturing();
    else {
      const d = isNativeSupported() ? cActionSave : cActionEdit;
      switch (a) {
        case "last-used-action":
          captureLastUsedMode();
          break;
        case "capture-entire-page-action":
          executeGrabber(d, cModeEntire);
          break;
        case "capture-visible-page-action":
          executeGrabber(d, cModeVisible);
          break;
        case "capture-selection-action":
          executeGrabber(d, cModeSelected);
      }
    }
  });
}
var fsWASMAPIInstance;
async function init() {
  isSafari() && setOption(cSafariFirstSavePref, "true");
  try {
    isDebug && console.time("wasm"),
      (fsWASMAPIInstance = await initWASMAPI("scripts/enc/fsEncoder.js")),
      isDebug && console.timeEnd("wasm");
  } catch (a) {
    "" === getOption(cWASMErrorReportedPref, "") &&
      (setOption(cWASMErrorReportedPref, "true"), gaTrack("UA-1025658-9", "WASM", "WASM-init-error", a)),
      console.error(a);
  }
  getVersionInfo();
  initMessaging();
  initHandlers();
  restoreBadge();
  isWindows() && !isOnlyLite() ? initNativeModule().then(displayAnnouncements) : displayAnnouncements();
  updateContextMenu();
  checkAdvancedUpdates();
}
chrome.runtime.onInstalled.addListener((a) => {
  a.reason &&
    "install" === a.reason &&
    !isDebug &&
    ((extVersion = chrome.runtime.getManifest().version.split(".", 3).join(".")),
    setOption(cCurrentVersion, extVersion),
    (fPendingInstalledAnnouncement = !0));
});
document.addEventListener("DOMContentLoaded", async () => fsPreferences.init(init));
