Okta.MyPagesMenu = function (t, e) {
  var n = {};
  var r = Okta._okta;
  var a = r.find;
  var u = e || 50;
  var i = 1e3;
  var o = "AddTabToMyPages";
  function c(e, n) {
    return a(e, function (e) {
      return e.pageUrl === n;
    });
  }
  function g(e, n) {
    if (e.length >= u) {
      e.shift();
    }
    e.push({ pageUrl: n });
  }
  function f(e) {
    n.addPageToCache(e);
  }
  n.addPageToCache = function (n) {
    if (n.pageUrl.length > i) {
      Log.error("MyPagesMenu:: Max url length exceeded. Skipping url: " + n.pageUrl);
      return;
    }
    return t.getMyPagesCache().then(function (e) {
      e = e || [];
      if (c(e, n.pageUrl)) {
        return;
      }
      g(e, n.pageUrl);
      return t.setMyPagesCache(e);
    });
  };
  n.createMenu = function () {
    if (!chrome.contextMenus) {
      return;
    }
    chrome.contextMenus.create({ id: o, title: "Add tab to my pages", contexts: ["all"], onclick: f }, function () {
      if (chrome.runtime.lastError) {
        Log.info("Did not add menu");
      }
    });
  };
  n.destroyMenu = function () {
    if (!chrome.contextMenus) {
      return;
    }
    chrome.contextMenus.removeAll();
  };
  n.initializeMenu = function () {
    if (!t) {
      return;
    }
    return t.getPluginSettings().then(function (e) {
      if (e && e.orgSettings && e.orgSettings.pluginMyPagesEnabled) {
        n.createMenu();
      }
    });
  };
  return n;
};
