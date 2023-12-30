Okta.Onboarding = function (n) {
  var e = {};
  var r = Okta.fn.bg.chromeP;
  var f = Okta.fn.url.hrefToUrlParts;
  var t = Okta.fn.script.injectOnboardingScript;
  var a = Okta.Q.allSettled;
  var i = Okta._okta;
  var o = i.each;
  var l = i.extend;
  var s = Okta.fn.cookies.getCookies;
  var d = Okta.fn.cookies.getCookieWithName;
  var u = Okta.Q;
  var c = i.filter;
  var v = i.sortBy;
  var h = i.first;
  var g = i.map;
  var m = Okta.Q.defer;
  var k = new Okta.Tabs(n);
  function b() {
    return r.tabs
      .create({ url: "https://login.okta.com", active: false })
      .then(function (r) {
        var t = m();
        var a = function (n, e) {
          if (n != r.id) {
            return;
          }
          if (e.status && e.status === "complete") {
            t.resolve(r.id);
            chrome.tabs.onUpdated.removeListener(a);
          }
        };
        chrome.tabs.onUpdated.addListener(a);
        return t.promise;
      })
      .then(function (e) {
        return t(e).then(function (n) {
          k.closeTab(e);
          if (n && n.length === 1) {
            return JSON.parse(n[0]);
          }
          return [];
        });
      });
  }
  e.getOrgsWithSessionCookies = function () {
    var t = m();
    b().then(function (r) {
      if (!r || r.length === 0) {
        t.resolve({ oktaAccounts: [], sessions: [] });
        return;
      }
      var u = [];
      var n = g(r, function (i) {
        return s(i.origin + "/app/UserHome", ["sid", "DT", "idx"]).then(function (n) {
          var e = d(n, "sid");
          var r = d(n, "DT");
          var t = d(n, "idx");
          if ((e && r) || t) {
            var a = i.origin;
            u.push({ domain: a, sid: e && e.value, dt: r && r.value, idx: t && t.value });
          }
        });
      });
      a(n).then(function (n) {
        o(n, function (n) {
          if (n.state !== "fulfilled") {
            Log.warn("WebExtension::getOrgsWithSessionCookies: Unable to fulfill getCookies: " + n.reason);
          }
        });
        if (u.length === 0) {
          t.resolve({ oktaAccounts: r, sessions: [] });
          return;
        }
        chrome.windows.getCurrent({}, function (s) {
          var n = g(u, function (n) {
            return n.domain + "/*";
          });
          chrome.tabs.query({ url: n }, function (i) {
            if (!i || i.length === 0) {
              t.resolve({ oktaAccounts: r, sessions: u });
            }
            var o = function (n) {
              var e = 0;
              if (n.isDashboardTab) {
                e -= 100;
              }
              if (n.isInCurrentWindow) {
                e -= 10;
              }
              if (n.id !== undefined && n.index !== undefined) {
                e -= 1;
              }
              return e;
            };
            var n = g(u, function (e) {
              var n = c(i, function (n) {
                return n.url.indexOf(e.domain) !== -1;
              });
              if (!n || n.length === 0) {
                return e;
              }
              var r = g(n, function (n) {
                var e = f && f(n.url);
                return l(n, { isDashboardTab: e && e.path === "/app/UserHome", isInCurrentWindow: n.windowId === s.id });
              });
              var t = v(r, o);
              var a = h(t);
              return l(e, { tabId: a.id, tabIndex: a.index, isDashboardTab: a.isDashboardTab, isInCurrentWindow: a.isInCurrentWindow });
            });
            var e = v(n, o);
            t.resolve({ oktaAccounts: r, sessions: e });
          });
        });
      });
    });
    return t.promise;
  };
  e.isInstalledByUser = function () {
    if (!r.management.getSelf) {
      return u(false);
    }
    return r.management.getSelf().then(function (n) {
      var e = n && n.installType;
      return e === "normal" || e === "development";
    });
  };
  e.setUninstallURL = function (n) {
    chrome.runtime.setUninstallURL(n);
  };
  e.tryOktaPersonalPasswordlessPostInstall = function () {
    return chrome.tabs.query({ currentWindow: true, url: "https://*/enduser/personal/onboarding/passwordless/plugin" });
  };
  return e;
};
