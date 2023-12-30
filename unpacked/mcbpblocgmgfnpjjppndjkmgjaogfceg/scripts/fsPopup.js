/*
 FireShot - Webpage Screenshots and Annotations
 Copyright (C) 2007-2023 Evgeny Suslikov (evgeny@suslikov.ru)
*/
var capMode, clickedElem, fProMode, fNativeSupported, quickLaunchMode, quickLaunchAction;
const backgroundPage = getBackgroundPage();
function enableToolsItems() {
  const b = capMode === cModeTabs,
    c = b ? "block" : "none",
    f = b ? "none" : "block";
  document.getElementById("divWarningFreeMode").style.display = b && !fProMode ? "block" : "none";
  fNativeSupported
    ? ((document.getElementById("mnuShow").style.display = "none"),
      (document.getElementById("mnuSaveImage").style.display = "none"),
      (document.getElementById("mnuSaveSinglePDF").style.display = c),
      (document.getElementById("mnuSavePDF").style.display = f),
      (document.getElementById("mnuEdit").className = "block"),
      (document.getElementById("mnuSave").className = "block"),
      (document.getElementById("mnuUpload").className = "block"),
      (document.getElementById("mnuPrint").className = "block"),
      (document.getElementById("mnuClipboard").className = "block"),
      (document.getElementById("mnuEmail").className = "block"),
      (document.getElementById("mnuExtEdit").className = "block"),
      (document.getElementById("mnuSendOneNote").className = "block"),
      (document.getElementById("mnuSaveSinglePDF").className = "block"))
    : ((document.getElementById("mnuSaveImage").style.display = "block"),
      (document.getElementById("mnuSavePDF").style.display = "block"),
      (document.getElementById("mnuShow").style.display = f),
      (document.getElementById("mnuClipboard").style.display = "none"),
      (document.getElementById("mnuSave").style.display = "none"),
      (document.getElementById("mnuPrint").style.display = "none"),
      (document.getElementById("mnuEmail").style.display = "none"),
      (document.getElementById("mnuSaveSinglePDF").style.display = "none"),
      (document.getElementById("mnuEdit").style.display = "none"),
      (document.getElementById("mnuUpload").style.display = "none"),
      (document.getElementById("mnuExtEdit").style.display = "none"),
      (document.getElementById("mnuSendOneNote").style.display = "none"));
}
function switchPane(b, c) {
  c = document.getElementById(c);
  c.style.display = "block";
  c.style.left = Math.min(document.body.clientWidth - c.clientWidth - 5, b.pageX) + "px";
  c.style.top = Math.min(document.body.clientHeight - c.clientHeight - 5, b.pageY) + "px";
}
function closePane(b) {
  document.getElementById(b).style.display = "none";
}
async function updateLastAction() {
  const b = await backgroundPage.getLADescription();
  document.getElementById("spnLastAction").textContent = b;
  document.getElementById("spnLastAction").title = b;
  document.getElementById("spnShortcut").textContent = "";
  chrome.commands.getAll(() => {
    getLAShortcut("last-used-action", "Cmd+Shift+S", (c) => {
      document.getElementById("spnLastAction").title = b + " (" + c + ")";
      document.getElementById("spnShortcut").textContent = c;
      document.getElementById("spnShortcutStop").textContent = c;
    });
    getLAShortcut("capture-entire-page-action", "Cmd+Shift+1", (c) => (document.getElementById("spnShortcutEntire").textContent = c));
    getLAShortcut("capture-visible-page-action", "Cmd+Shift+2", (c) => (document.getElementById("spnShortcutVisible").textContent = c));
    getLAShortcut("capture-selection-action", "Cmd+Shift+6", (c) => (document.getElementById("spnShortcutSelection").textContent = c));
  });
}
async function click(b, c) {
  function f(l) {
    if (isFirefox() || capMode !== cModeTabs) return l();
    let a = { permissions: ["tabs"], origins: ["<all_urls>"] };
    fNativeSupported || a.permissions.push("downloads");
    return addPermissions(
      a,
      () => {
        window && window.close();
        l();
      },
      async () => await backgroundPage.openPermissionsPage(a)
    );
  }
  async function e(l, a) {
    d && fProMode && !isFirefox()
      ? (await pageNeedsTabsPermission())
        ? (window.location.href = `fsTabsPermissionPopup.html?mode=${a}&action=${l}`)
        : (a === cModeEntire ? (window.location.href = "fsProgress.html") : window.close(), await backgroundPage.executeGrabber(l, a))
      : (a === cModeEntire ? (window.location.href = "fsProgress.html") : window && window.close(),
        await backgroundPage.executeGrabber(l, a));
  }
  async function g() {
    fNativeSupported ? (await backgroundPage.showLicenseInfo(), window.close()) : (window.location.href = "fsLicensingInfoPopup.html");
  }
  if ("disabled" != b.className) {
    var n = "mnuEdit mnuSave mnuSaveImage mnuShow mnuSavePDF mnuUpload mnuPrint mnuClipboard mnuEmail mnuExtEdit mnuSendOneNote".split(" "),
      p =
        "mnuCaptureEntire mnuCaptureVisible mnuCaptureSelection mnuCaptureBrowser mnuCaptureTabs mnuMiscellaneousFolder mnuLicenseInfo mnuCaptureList".split(
          " "
        );
    clickedElem = b;
    var r = capMode === cModeTabs && b.parentElement && "mnuTools" === b.parentElement.getAttribute("rel"),
      d =
        (!isFirefox() && (capMode === cModeEntire || capMode === cModeSelected) && n.includes(b.id)) ||
        "mnuCaptureEntireLite" === b.id ||
        "mnuCaptureSelectionLite" === b.id ||
        ("mnuQuickLaunch" === b.id && (quickLaunchMode === cModeEntire || quickLaunchMode === cModeSelected));
    d || r || p.includes(b.id) || window.close();
    switch (b.id) {
      case "mnuResume":
        await backgroundPage.resumeEditing();
        break;
      case "mnuPreferences":
      case "mnuPreferencesLite":
        await backgroundPage.openExtensionPreferences();
        break;
      case "mnuQuickLaunch":
        await e(quickLaunchAction, quickLaunchMode);
        break;
      case "mnuCaptureEntire":
        capMode = cModeEntire;
        enableToolsItems();
        switchPane(c, "mnuTools");
        break;
      case "mnuCaptureVisible":
        capMode = cModeVisible;
        enableToolsItems();
        switchPane(c, "mnuTools");
        break;
      case "mnuCaptureSelection":
        capMode = cModeSelected;
        enableToolsItems();
        switchPane(c, "mnuTools");
        break;
      case "mnuCaptureBrowser":
        capMode = cModeBrowser;
        enableToolsItems();
        switchPane(c, "mnuTools");
        break;
      case "mnuCaptureTabs":
        capMode = cModeTabs;
        enableToolsItems();
        switchPane(c, "mnuTools");
        break;
      case "mnuCaptureList":
        window.location.href = "fsCaptureList.html";
        break;
      case "mnuMiscellaneousFolder":
        switchPane(c, "mnuMiscellaneous");
        break;
      case "mnuViewDemo":
        await backgroundPage.openDemoPage();
        break;
      case "mnuSupport":
        await backgroundPage.openSupportPage();
        break;
      case "mnuAPI":
        await backgroundPage.openAPIPage();
        break;
      case "mnuUpgrade":
        await backgroundPage.doUpgrade();
        break;
      case "mnuRegister":
        await backgroundPage.doRegister();
        break;
      case "mnuEnterLicense":
        await backgroundPage.enterLicense();
        break;
      case "mnuCaptureEntireLite":
        await e(cActionEdit, cModeEntire);
        break;
      case "mnuCaptureVisibleLite":
        await e(cActionEdit, cModeVisible);
        break;
      case "mnuCaptureSelectionLite":
        await e(cActionEdit, cModeSelected);
        break;
      case "mnuShow":
      case "mnuEdit":
        f(async () => await e(cActionEdit, capMode));
        break;
      case "mnuSaveImage":
      case "mnuSave":
        f(async () => await e(cActionSave, capMode));
        break;
      case "mnuSavePDF":
        f(async () => await e(cActionSavePDF, capMode));
        break;
      case "mnuSaveSinglePDF":
        f(async () => await e(cActionMultiPDF, capMode));
        break;
      case "mnuUpload":
        f(async () => await e(cActionUpload, capMode));
        break;
      case "mnuPrint":
        f(async () => await e(cActionPrint, capMode));
        break;
      case "mnuClipboard":
        f(async () => await e(cActionClipboard, capMode));
        break;
      case "mnuEmail":
        f(async () => await e(cActionEMail, capMode));
        break;
      case "mnuExtEdit":
        f(async () => await e(cActionPaint, capMode));
        break;
      case "mnuSendOneNote":
        f(async () => await e(cActionSendOneNote, capMode));
        break;
      case "mnuOpenFile":
        await backgroundPage.openFile();
        break;
      case "mnuOpenClipboard":
        await backgroundPage.openClipboard();
        break;
      case "mnuLicenseInfo":
        await g();
        break;
      case "mnuAbout":
        await backgroundPage.showAbout();
        break;
      case "mnuStopFireShot":
        await backgroundPage.buttonStopCapturingClicked();
        break;
      case "mnuFireShotNative":
      case "lnkTryPro":
        await backgroundPage.installPro();
        break;
      case "lnkTryAnotherPage":
        await backgroundPage.openURL("https://www.google.com/search?q=kitties");
        break;
      case "lnkAllowFileAccess":
        await backgroundPage.openURL("https://getfireshot.com/enable-file-access.php?browser=ch");
        break;
      case "lnkExtensionSettings":
        await backgroundPage.openExtensionSettings();
    }
  }
}
function mouseOver(b, c) {
  b == clickedElem ||
    (b.parentNode && "mnuTools" == b.parentNode.getAttribute("rel")) ||
    (document.getElementById("mnuTools").style.display = "none");
  b == clickedElem ||
    (b.parentNode && "mnuMiscellaneous" == b.parentNode.getAttribute("rel")) ||
    (document.getElementById("mnuMiscellaneous").style.display = "none");
}
async function load() {
  try {
    i18nPrepare();
  } catch (g) {
    logError(g.message);
  }
  const b = function (g) {
      g.preventDefault();
      click(this, g);
      return !0;
    },
    c = function (g) {
      mouseOver(this, g);
    },
    f = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_ELEMENT, null, !1);
  for (var e; (e = f.nextNode()); )
    "LI" === e.nodeName ? ((e.onclick = b), (e.onmouseover = c)) : "command" === e.getAttribute("rel") && (e.onclick = b);
  await updateLastAction();
  await updateAccessibility(allowKeyboard);
}
async function updateAccessibility(b) {
  const c = null === chrome.extension.getBackgroundPage();
  await backgroundPage.checkAdvancedFeatures();
  await backgroundPage.getMenuSettings(c, (f) => {
    for (var e in f) {
      var g = document.getElementById(e);
      if (null === g) alert("Element " + e + " not found");
      else {
        var n = f[e];
        g.style.display = "hidden" === n ? "none" : "block";
        "disabled" === n ? g.classList.add("disabled") : g.classList.remove("disabled");
      }
    }
    document.body.style.display = "block";
    b();
  });
}
function allowKeyboard() {
  function b(a) {
    const k = function () {
      return {
        next: null,
        prev: null,
        getPrev: function () {
          for (var h = this.prev; h && "none" === h.node.style.display; ) h = h.prev;
          return h;
        },
        getNext: function () {
          for (var h = this.next; h && "none" === h.node.style.display; ) h = h.next;
          return h;
        }
      };
    };
    a = document.createNodeIterator(a, NodeFilter.SHOW_ELEMENT, {
      acceptNode(h) {
        return "li" !== h.nodeName.toLowerCase() ||
          h.classList.contains("disabled") ||
          "none" === h.style.display ||
          "none" === h.parentNode.parentNode.style.display
          ? NodeFilter.FILTER_REJECT
          : NodeFilter.FILTER_ACCEPT;
      }
    });
    for (var m = new k(), t = null, q = m, u; (u = a.nextNode()); ) {
      q.node = u;
      if ((q.prev = t)) t.next = q;
      t = q;
      q = new k();
    }
    return m;
  }
  function c(a) {
    a.node.classList.add("hoverstyle");
  }
  function f() {
    const a = new Event("click");
    a.pageX = 1e3;
    a.pageY = d.node.getClientRects()[0].top;
    d.node.dispatchEvent(a);
  }
  const e = (a, k) => {
    k.node && a.push(k);
    k.next && [k.next].reduce(e, a);
    return a;
  };
  var g = b(document.getElementById("mnuMain")),
    n = b(document.getElementById("mnuTools")),
    p = b(document.getElementById("mnuMiscellaneous")),
    r = [g, n, p].reduce((a, k) => a.concat([k].reduce(e, [])), []),
    d = g,
    l = null;
  r.forEach((a) => {
    a.node.addEventListener("mouseover", () => {
      d && d.node.classList.remove("hoverstyle");
      d = a;
      a.node.classList.add("mouseactive");
    });
    a.node.addEventListener("click", (k) => {
      const m = a.node;
      d && d.node.classList.remove("hoverstyle");
      "mnuCaptureEntire" === m.id ||
      "mnuCaptureVisible" === m.id ||
      "mnuCaptureSelection" === m.id ||
      "mnuCaptureBrowser" === m.id ||
      "mnuCaptureTabs" === m.id
        ? ((l = d), (d = "none" === n.node.style.display ? n.getNext() : n))
        : "mnuMiscellaneousFolder" === m.id && ((l = d), (d = "none" === p.node.style.display ? p.getNext() : p));
      k.isTrusted || c(d);
    });
  });
  document.addEventListener("keydown", function (a) {
    if (d.node) {
      var k = !d.node.classList.contains("hoverstyle") && !d.node.classList.contains("mouseactive");
      r.forEach((m) => m.node.classList.remove("mouseactive"));
      "ArrowDown" === a.key && k
        ? c(d)
        : "ArrowDown" === a.key && d.getNext()
        ? (d.node.classList.remove("hoverstyle"), (d = d.getNext()), c(d))
        : "ArrowUp" === a.key && d.getPrev()
        ? (d.node.classList.remove("hoverstyle"), (d = d.getPrev()), c(d))
        : "Enter" === a.key
        ? f()
        : "ArrowRight" === a.key
        ? ((a = d.node),
          ("mnuMiscellaneousFolder" !== a.id &&
            "mnuCaptureEntire" !== a.id &&
            "mnuCaptureVisible" !== a.id &&
            "mnuCaptureSelection" !== a.id &&
            "mnuCaptureBrowser" !== a.id &&
            "mnuCaptureTabs" !== a.id) ||
            f())
        : "ArrowLeft" === a.key &&
          l &&
          (d.node.classList.remove("hoverstyle"), (d = l), (l = null), c(d), closePane("mnuTools"), closePane("mnuMiscellaneous"));
    }
  });
}
document.addEventListener("DOMContentLoaded", async () => {
  await backgroundPage.checkActivationPage((b) => {
    b && setTimeout(window.close, 5);
  });
  isSafari() &&
    ((document.getElementById("mnuStopFireShot").style["margin-top"] = "6px"),
    (document.getElementById("mnuMain").style.margin = "2px"),
    document.body.style.setProperty("min-height", "40px"));
  fProMode = await backgroundPage.isProMode();
  fNativeSupported = await backgroundPage.isNativeSupported();
  quickLaunchMode = await backgroundPage.getLastMode();
  quickLaunchAction = await backgroundPage.getLastAction();
  if (await backgroundPage.checkBadgeAction())
    if (isSafari()) {
      let b = document.createElement("p");
      b.textContent = "FireShot has been updated";
      document.body.replaceChild(b, document.getElementById("mnuMain"));
      document.body.style.display = "block";
    } else window.close();
  else fsPreferences.init(load);
});
