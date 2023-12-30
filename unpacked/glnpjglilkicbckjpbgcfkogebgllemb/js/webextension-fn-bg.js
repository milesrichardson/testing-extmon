(function r() {
  var e = (Okta.fn.bg = {});
  var n = Okta._okta;
  var o = n.each;
  var a = n.pick;
  var c = n.isEmpty;
  var i;
  var t = Okta.Q;
  function s(r, e, n) {
    var i = t.defer();
    n.push(i.resolve);
    r[e].apply(r, n);
    return i.promise;
  }
  function u(n, r) {
    if (!n()) {
      return {};
    }
    var i = {};
    o(r, function (e) {
      if (!n()[e]) {
        return;
      }
      i[e] = function () {
        var r = Array.from(arguments);
        return s(n(), e, r);
      };
    });
    return i;
  }
  var m = {};
  m.tabs = u(
    function () {
      return chrome.tabs;
    },
    ["get", "create", "query", "executeScript"]
  );
  m.scripting = u(
    function () {
      return chrome.scripting;
    },
    ["executeScript"]
  );
  m.cookies = u(
    function () {
      return chrome.cookies;
    },
    ["getAll"]
  );
  m.permissions = u(
    function () {
      return chrome.permissions;
    },
    ["contains", "request"]
  );
  m.privacy = {
    services: {
      get passwordSavingEnabled() {
        if (chrome.privacy && chrome.privacy.services && chrome.privacy.services.passwordSavingEnabled) {
          i =
            i ||
            u(
              function () {
                return chrome.privacy.services.passwordSavingEnabled;
              },
              ["get", "set", "clear"]
            );
          return i;
        } else {
          return {};
        }
      }
    }
  };
  m.management = u(
    function () {
      return chrome.management;
    },
    ["getSelf"]
  );
  e.apiToPromise = u;
  e.chromeP = m;
  e.getPendingConsentAccount = function (r, e, n) {
    var i = r && r.disablePluginAccountChooser;
    if (i) {
      return "";
    }
    var t = [];
    o(e, function (r) {
      r = a(r, "login", "orgDomainUrl");
      if (n && r.orgDomainUrl === n.oktaDomain) {
        r.orgDomainUrl = n.customDomain;
      }
      if (!c(r)) {
        t.push(r);
      }
    });
    if (c(t)) {
      return "";
    }
    return JSON.stringify(t);
  };
})();
