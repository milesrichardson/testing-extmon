Okta.Tabs = function (t) {
  var r = {};
  var n = Okta.fn.bg.chromeP;
  var e = Okta.Q;
  var o = Okta._okta;
  var a = o.partial;
  var i = o.pick;
  var u = o.where;
  r.getTab = function (t) {
    return n.tabs.query({}).then(function (e) {
      var r = u(e, { id: t }).length > 0;
      if (!r) {
        return null;
      }
      return n.tabs.get(t);
    });
  };
  r.getTabInfo = function (e) {
    return r.getTab(e).then(a(i, o, ["favIconUrl", "title", "url"]));
  };
  r.getCurrentTab = function () {
    return n.tabs.query({ active: true, windowId: chrome.windows.WINDOW_ID_CURRENT }).then(function (e) {
      if (e && e.length > 0) {
        return e[0];
      }
      return null;
    });
  };
  r.openTab = function (e) {
    if (!e) {
      return;
    }
    switch (t) {
      case "chrome":
      case "edge-chromium":
      case "safari":
      case "safari-webext":
        chrome.tabs.create({ url: e });
        break;
      case "firefox":
        chrome.tabs.create({ url: e });
        var r = chrome.extension.getViews({ type: "popup" });
        if (r.length != 1) {
          Log.warn("WebExtension::openTab: " + "Did not close popup. Windows count: " + r.length);
          return;
        }
        r[0].close();
        break;
      default:
        Log.error("WebExtension::openTab: Unknown browser type!");
    }
  };
  r.openTabForAccountChooser = function (t) {
    if (!t) {
      return e();
    }
    return n.tabs.query({ active: true }).then(function (e) {
      if (!e || !e.length) {
        chrome.tabs.create({ url: t });
        return;
      }
      var r = e[0];
      if (r.url.indexOf(t) === -1) {
        chrome.tabs.create({ url: t });
        return;
      }
      chrome.tabs.reload();
    });
  };
  r.openPermissionsPage = function () {
    Log.info("open permissions page");
    chrome.tabs.create({ url: chrome.runtime.getURL("shared/settings-page/permissions.html") });
  };
  r.openOktaNewtab = function () {
    Log.info("open okta newtab experience");
    chrome.tabs.create({ url: chrome.runtime.getURL("shared/newtab/Newtab.html") });
  };
  r.servePopover = function () {
    Log.info("serve popover");
    chrome.tabs.update({ url: chrome.runtime.getURL("shared/popover/popover.html") });
  };
  r.closeTab = function (e) {
    if (e) {
      chrome.tabs.remove(e);
    }
  };
  r.highlightAndRefreshTab = function (e) {
    chrome.tabs.reload(e);
    return n.tabs.get(e).then(function (e) {
      chrome.tabs.highlight({ tabs: [e.index], windowId: e.windowId });
      chrome.windows.update(e.windowId, { focused: true });
    });
  };
  r.openSettingsPage = function () {
    Log.info("open settings page");
    return chrome.runtime.openOptionsPage
      ? chrome.runtime.openOptionsPage()
      : e({ errorCode: "chrome.runtime.openOptionsPage is not defined" });
  };
  return r;
};
