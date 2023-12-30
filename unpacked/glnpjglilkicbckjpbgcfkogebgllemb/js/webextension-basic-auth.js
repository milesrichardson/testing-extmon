Okta.BasicAuth = function (u, i) {
  var a = {};
  var e = Okta.Url;
  var o = Okta.fn.browserType.isFirefox;
  var t = Okta._okta;
  var n = t.find;
  var c = Okta.Q;
  var s = Okta.fn.api.setSessionData;
  var h = 2 * 1e3;
  var f = {};
  function l(e, t) {
    return e
      .getAuthSites()
      .then(function (e) {
        return n(e, function (e) {
          return t.matches(e.authURL);
        });
      })
      .fail(function (e) {
        Log.warn(e);
        return null;
      });
  }
  function d(r, e, a) {
    return c.all([e.getOktaDomain(), e.getSessionCookie()]).spread(function (e, t) {
      var n = { type: "get", url: e + a, headers: { Accept: "application/json;charset=utf-8" } };
      s(t, n.headers);
      return r.ajax(n);
    });
  }
  a.onAuthRequired = function (a) {
    return new Promise(function (n, r) {
      return l(u, new e(a.url))
        .then(function (e) {
          if (!e || !e.credURI) {
            return r("no site");
          }
          var t = f[e.authURL];
          if (a.timeStamp - t < h) {
            return r("too often");
          }
          f[e.authURL] = a.timeStamp;
          return d(i, u, e.credURI).then(function (e) {
            if (e && e.u && e.p) {
              n({ authCredentials: { username: e.u, password: e.p } });
            } else {
              r("no creds");
            }
          });
        })
        .fail(r);
    });
  };
  a.onAuthRequiredWithCallBack = function (e, t) {
    return a
      .onAuthRequired(e)
      .then(t)
      .catch(function () {
        t();
      });
  };
  a.initialize = function (e) {
    var t = o(e);
    var n = t ? a.onAuthRequired : a.onAuthRequiredWithCallBack;
    var r = t ? ["blocking"] : ["asyncBlocking"];
    chrome.webRequest.onAuthRequired && chrome.webRequest.onAuthRequired.addListener(n, { urls: ["<all_urls>"] }, r);
  };
  return a;
};
