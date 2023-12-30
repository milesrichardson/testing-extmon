Okta.WebExtension = function (n, e, a) {
  var t = PLUGIN_VERSIONS.currentVersion;
  var r = Okta._okta;
  var s = r.compose;
  var o = r.delay;
  var i = r.extend;
  var d = Okta.Q;
  var u = Okta.Constants.StorageOktaAccountAllowListKey;
  var l = Okta.fn.action.updateBadge;
  var g = Okta.fn.action.getUserPinned;
  var c = Okta.fn.action.openPopup;
  var f = Okta.Events;
  var v = i({}, f);
  var p = Okta.fn.base.curry2;
  var m = Okta.fn.base.always;
  var b = Okta.fn.url.getMonitoredSitesApiMatchPatterns;
  var k = s(Okta.fn.url.isOktaPluginHomePagePath, Okta.fn.url.hrefToUrlParts);
  var O = 75;
  var w = Okta.fn.script;
  var P = Okta.fn.cookies.getCookies;
  var h = Okta.fn.browserType;
  var I = h.isSafari(a);
  var T = h.isSafariWebExt(a);
  var L = h.isFirefox(a);
  var S = h.isChrome(a);
  var M = new Okta.AuthenticationMonitor(n, e);
  var C = chrome.tabs.sendMessage;
  var A = Okta.Constants.ModalEvents;
  var U = new Okta.SuppressPwdSave();
  var y = new Okta.MyPagesMenu(n);
  var F = new Okta.Onboarding(a);
  var N = new Okta.Tabs(a);
  var R = new Okta.API(n, e);
  var E = new Okta.BasicAuth(n, e);
  var D = new Okta.RequestHeaders(t, a, n, R);
  var B = new Okta.RuntimeMessage();
  var x = p(X);
  var W = chrome.runtime.onConnect;
  var z = chrome.runtime.onInstalled;
  var _ = chrome.webRequest.onCompleted;
  var q = chrome.tabs.onCreated;
  var G = chrome.tabs.onUpdated;
  var j = chrome.tabs.onRemoved;
  var H = {};
  var V = S ? new Okta.SamlTester() : undefined;
  var K = 1e3;
  function Q(e) {
    return /^http/.test(e);
  }
  function J(e) {
    var a = e.tabId;
    var t = e.frameId;
    if (t == 0) {
      U.deleteSuppressTab(a, true);
    }
    if (!Q(e.url)) {
      console.log("Skipped url: " + e.url);
      return;
    }
    return N.getTab(a).then(function e(a) {
      if (!a || !Q(a.url)) {
        return;
      }
      w.injectPreloadScript(a.id, t);
    });
  }
  function X(e, a) {
    v.trigger("messageFromContent", {
      msg: a,
      tabId: e.sender && e.sender.tab ? e.sender.tab.id : -1,
      frameId: e.sender ? e.sender.frameId : 0,
      portInfo: { port: e }
    });
  }
  function Y() {
    o(function () {
      M.initialize();
    }, K);
  }
  function Z() {
    if (L) {
      return (
        window &&
        window.navigator &&
        window.navigator.userAgent &&
        parseInt(window.navigator.userAgent.toLowerCase().split("firefox/").pop()) >= O
      );
    }
    return !I && !T;
  }
  function $(e, a) {
    var t = "Okta.WebExtension::frameModuleMessageHandler: ";
    e.data = e.data || {};
    switch (e.action) {
      case A.ACTIONS.PROMPT_AUTOFILL: {
        if (a.frameId > 0) {
          Log.info(t + "send promptAutoFill message to top doc");
          e.data.frameId = a.frameId;
          C(a.tab.id, e, { frameId: 0 });
        } else {
          Log.warn(t + "do not send promptAutoFill message when sender is not iframe");
        }
        break;
      }
      case A.ACTIONS.AUTOFILL: {
        var n = e.data.frameId;
        if (n > 0) {
          Log.info(t + "send autoFill message to target iframe");
          C(a.tab.id, e, { frameId: n });
        } else {
          Log.warn(t + "missing target frameId, do not send autoFill message");
        }
        break;
      }
      default:
        Log.warn(t + "unknown action");
        break;
    }
  }
  v.getType = m(a);
  v.getBackgroundVersion = m(t);
  v.post = function e(a) {
    if (!a.portInfo.port.isDisconnected) {
      a.portInfo.port.postMessage(a.msg);
    }
  };
  v.injectContentScript = w.injectContentScript;
  v.openTab = N.openTab;
  v.sendMsgToCurrentTab = N.sendMsgToCurrentTab;
  v.openTabForAccountChooser = N.openTabForAccountChooser;
  v.openPermissionsPage = N.openPermissionsPage;
  v.openOktaNewtab = N.openOktaNewtab;
  v.servePopover = N.servePopover;
  v.closeTab = N.closeTab;
  v.highlightAndRefreshTab = N.highlightAndRefreshTab;
  v.openSettingsPage = N.openSettingsPage;
  v.getTabInfo = N.getTabInfo;
  v.getCookies = P;
  v.isInstalledByUser = F.isInstalledByUser;
  v.getOrgsWithSessionCookies = F.getOrgsWithSessionCookies;
  v.setUninstallURL = F.setUninstallURL;
  v.tryOktaPersonalPasswordlessPostInstall = F.tryOktaPersonalPasswordlessPostInstall;
  v.updateBadge = l;
  g && (v.getUserPinned = g);
  c && (v.openPopup = c);
  v.getLocalStorageUsage = n.getStorageUsage;
  if (T) {
    chrome.webNavigation.onCompleted.addListener(J);
  } else {
    chrome.webNavigation.onDOMContentLoaded.addListener(J);
  }
  W.addListener(function e(a) {
    a.onMessage.addListener(x(a));
    a.onDisconnect.addListener(function () {
      a.isDisconnected = true;
    });
  });
  z &&
    z.addListener(function (e) {
      var a = e && e.reason;
      if (a !== "install") {
        return;
      }
      v.trigger("postInstall");
    });
  _ && _.addListener(Y, { urls: b(), types: ["xmlhttprequest"] });
  q &&
    q.addListener(function (r) {
      return d.all([n.getDBGPluginSettings(), n.getNewTab()]).spread(function (e, a) {
        var t = e && e.NTEFlag;
        var n = a && a.enableNTE;
        if (S && t && n && r.pendingUrl === "chrome://newtab/") {
          chrome.tabs.update({ url: chrome.runtime.getURL("shared/newtab/Newtab.html") });
        }
      });
    });
  G &&
    G.addListener(function (e, a, t) {
      if (!a || !a.url) {
        return d();
      }
      if (t && t.url && k(t.url)) {
        H = {};
        H[e] = t.url;
        return d();
      }
      if (H[e]) {
        delete H[e];
        return n.clearWaitingForTabs();
      }
    });
  j &&
    j.addListener(function (e) {
      if (!H[e]) {
        return d();
      }
      delete H[e];
      return n.clearWaitingForTabs();
    });
  if (!!Z()) {
    v.suppressSavePassword = U.turnOffSavePasswordFeature;
    v.hasPrivacyPermissions = U.hasPrivacyPermissions;
    v.getPasswordSavingDetails = U.getPasswordSavingDetails;
    v.requestPrivacyPermissions = U.requestPrivacyPermissions;
  }
  v.showMyPagesMenu = function (e) {
    e ? y.createMenu() : y.destroyMenu();
  };
  n.readMultiAccount();
  chrome.storage.onChanged.addListener(function (e, a) {
    if (a !== "local") {
      return;
    }
    if (e["DBG_PLUGIN_SETTINGS"] || e[u]) {
      return n.readMultiAccount();
    }
  });
  M.initialize(false);
  y.initializeMenu();
  U.initialize();
  E.initialize(a);
  D.initialize();
  B.init(A.IFRAME_MODULE, $);
  if (V) {
    V.init(n, B, R);
  }
  return v;
};
