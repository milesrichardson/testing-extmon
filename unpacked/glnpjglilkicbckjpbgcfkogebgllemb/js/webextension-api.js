Okta.API = function (a, o) {
  var n = {};
  var s = Okta.Q;
  var e = Okta._okta;
  var r = e.reduce;
  var i = Okta.fn.url.urlPartsToDomain;
  var u = Okta.fn.cookies.checkSessionCookie;
  var k = Okta.fn.cookies.getCookies;
  var c = Okta.fn.api.setSessionData;
  var f = Okta.fn.api.setAuthData;
  var h = Okta.fn.api.getToSettings;
  var d = function (t) {
    return a.getVersion().then(function (e) {
      return h(t, { backgroundVersion: e.backgroundVersion, contentVersion: e.contentVersion });
    });
  };
  n.getSessionCookie = function (e, t) {
    if (e) {
      return a.getSessionCookie();
    } else {
      return k(t, ["sid", "DT", "idx"]).then(function (e) {
        return r(
          e,
          function (e, t) {
            e[t.name] = t.value;
            return e;
          },
          {}
        );
      });
    }
  };
  n.makeGetRequest = function (e, t) {
    return n.getSessionCookie(t, i(e)).then(function (t) {
      if (!u(t)) {
        return s.reject("can not obtain session cookies, will not make the request: " + e.href);
      }
      return d(e.href).then(function (e) {
        c(t, e.headers);
        return o.ajax(e);
      });
    });
  };
  n.makeAdminGetRequest = function (e) {
    return s.all([d(e), a.getXsrfToken()]).spread(function (e, t) {
      e.type = "get";
      e.headers["x-okta-xsrftoken"] = t;
      return o.ajax(e);
    });
  };
  n.makeAdminPostRequest = function (e, n) {
    return s.all([d(e), a.getXsrfToken()]).spread(function (e, t) {
      e.type = "post";
      e.headers["content-type"] = "application/json";
      e.headers["x-okta-xsrftoken"] = t;
      e.data = n;
      return o.ajax(e);
    });
  };
  n.makeAdminDeleteRequest = function (e) {
    return s.all([d(e), a.getXsrfToken()]).spread(function (e, t) {
      e.type = "delete";
      e.headers["x-okta-xsrftoken"] = t;
      return o.ajax(e);
    });
  };
  n.makeGetRequestWithToken = function (n) {
    var r = i(n);
    return a.getAuthToken().then(function (e) {
      var t = e[r];
      if (!t || !t["access_token"] || t["access_token"].expiresAt < Math.floor(Date.now() / 1e3)) {
        return s.reject("invalid access token on " + r);
      }
      return d(n.href).then(function (e) {
        f(t, e.headers);
        return o.ajax(e);
      });
    });
  };
  return n;
};
