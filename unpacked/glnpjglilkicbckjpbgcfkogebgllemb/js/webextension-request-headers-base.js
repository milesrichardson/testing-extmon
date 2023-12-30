Okta.RequestHeadersBase = function (e, t, s, r) {
  var i = {};
  var u = Okta.Constants.Auth0;
  var n = Okta.fn.url.isOktaPage;
  var a = Okta.fn.url.isOktaAppSSOPath;
  var l = Okta.fn.url.replaceUrlPartsPath;
  var c = Okta.fn.api.prependPath;
  var d = Okta.fn.storage.siteFlowDataToFlow;
  var f = Okta.Q;
  var p = Okta.Url;
  var o = Okta._okta;
  var h = o.find;
  var g = o.isNumber;
  var v = o.each;
  var m = o.extend;
  var S = o.now;
  var k = o.partial;
  var w = o.size;
  var I = Okta.fn.browserType;
  var L = I.isSafariWebExt(t);
  var U = "DOMAINS";
  var b = String.fromCharCode.apply(null, [79, 75, 84, 65, 95, 65, 67, 67, 79, 85, 78, 84, 95, 87, 72, 73, 84, 69, 95, 76, 73, 83, 84]);
  var A = "DBG_PLUGIN_SETTINGS";
  var C = "WebExtension::onAuth0BeforeRedirect: ";
  var O = "WebExtension::onPOktaAppHomeRedirect: ";
  var R = "WebExtension::onPOktaAppLoginRedirect: ";
  var P = "WebExtension::onPOktaNewIDPInitUrlDetected: ";
  var E = [302];
  var N = [302];
  var T = 1e3 * 60 * 30;
  var F = L ? { urls: ["https://*.auth0.com/authorize*"] } : { urls: ["https://*.auth0.com/authorize?*"] };
  var x = {
    urls: [
      "https://personal.trexcloud.com/home/*/*/*",
      "https://personal.okta.com/home/*/*/*",
      "https://personal.clouditude.com/home/*/*/*"
    ]
  };
  var y = {
    urls: [
      "https://personal.trexcloud.com/login/token/redirect?stateToken=*",
      "https://personal.okta.com/login/token/redirect?stateToken=*",
      "https://personal.clouditude.com/login/token/redirect?stateToken=*"
    ]
  };
  function _() {
    var e = ["https://personal.okta.com", "https://personal.trexcloud.com", "https://personal.clouditude.com"];
    if (Okta.Config.allowLocalHostOrServer) {
      e.push("http://localhost");
      e.push("https://rain.okta1.com");
      e.push("https://personal.okta1.com");
    }
    return e;
  }
  i.pOktaNewArchitectureIDPRegexStr = _()
    .map(function (e) {
      return (
        "^" +
        e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") +
        "/okta-personal-app/" +
        "([0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})/launch(\\/?|\\?.*)$"
      );
    })
    .join("|");
  if (Okta.Config && Okta.Config.allowLocalHostOrServer) {
    x.urls.push("https://rain.okta1.com/home/*/*/*");
    x.urls.push("https://personal.okta1.com/home/*/*/*");
    x.urls.push("https://qa-plugin-fpa-idx.trexcloud.com/home/*/*/*");
    y.urls.push("https://rain.okta1.com/login/token/redirect?stateToken=*");
    y.urls.push("https://personal.okta1.com/login/token/redirect?stateToken=*");
    y.urls.push("https://qa-plugin-fpa-idx.trexcloud.com/login/token/redirect?stateToken=*");
  }
  var q = function (e) {
    var t = e.queryKey;
    return e.path === "/authorize" && !!t.client_id && !!t.redirect_uri && !!t.scope && !!t.state;
  };
  var D = function () {
    return s.getPluginSettings().then(function (e) {
      return e && e.orgSettings && e.orgSettings.pluginPersonalFastIdpEnabled;
    });
  };
  var G = function (e) {
    return r
      .makeGetRequestWithToken(e)
      .then(function (e) {
        if (e && e.errorCode) {
          Log.warn(O + "failed to obtain sites, error code: {0} and summary: {1}", e.errorCode, e.errorSummary);
          return;
        }
        return f.all([
          s.setMonitoredSites(e.site),
          s.setAuthSites(e.authSite),
          s.setFormSitesNoPw(e.formSites),
          s.setSocialSites(e.socialSites)
        ]);
      })
      .fail(function (e) {
        Log.warn(O + "failed to obtain sites, error: " + e);
      });
  };
  var M = function (a, e, o, t) {
    var i = t ? O : R;
    return r
      .makeGetRequest(e, t)
      .then(function (e) {
        if (e && e.errorCode) {
          Log.warn(i + "failed to obtain site-flow, error code: {0} and summary: {1}", e.errorCode, e.errorSummary);
          return;
        }
        var t = { flow: e, message: o.matchedSite.progressMessage, statusURI: o.matchedSite.callbackURI };
        var r = d(t);
        var n = m({}, o, { requestComplete: true });
        Log.info(i + "successfully obtained site-flow, will update tab storage");
        delete K[a];
        return f.all([s.setCurrentFlow(a, r), s.setCurrentFastIdpApp(a, n)]);
      })
      .fail(function (e) {
        Log.warn(i + "failed to obtain site-flow, error: " + e);
      });
  };
  var B = function (e, t) {
    if (!e.url || !e.redirectUrl || !g(e.tabId) || !g(e.statusCode)) {
      Log.info(t + "url, redirectUrl, tabId or statusCode is missing");
      return false;
    }
    if (!N.includes(e.statusCode) || e.method != "GET") {
      Log.info(t + "statusCode or method mismatch");
      return false;
    }
    return true;
  };
  var z = function (e) {
    if (!B(e, O)) {
      return false;
    }
    if (!a(new p(e.redirectUrl))) {
      Log.info(O + "redirectUrl is not appSSO url");
      return false;
    }
    return true;
  };
  var H = function (e) {
    if (!B(e, R)) {
      return false;
    }
    if (n(new p(e.redirectUrl))) {
      Log.info(R + "redirectUrl is still okta page, exit");
      return false;
    }
    return true;
  };
  var W = function (r) {
    return s.getMonitoredSites().then(function (e) {
      var t = h(e, function (e) {
        return r.startsWith(e.siteURL);
      });
      return t;
    });
  };
  i.HeaderConstants = {
    EXTENDED_USER_AGENT_KEY: "X-Okta-User-Agent-Extended",
    PLUGIN_USER_AGENT_VALUE: "okta-browser-plugin/" + e,
    EXTENDED_PLUGIN_ACCOUNTS_USER_AGENT_KEY: "X-Okta-User-Agent-Account-Data"
  };
  i.getStorageCache = function () {
    return { domains: { key: U, val: null }, dbgPluginSettings: { key: A, val: null }, allowListedAccounts: { key: b, val: null } };
  };
  i.onAuth0BeforeRedirect = function (o) {
    return s.getPluginSettings().then(function (e) {
      if (!e || !e.orgSettings || !e.orgSettings.pluginSocialLoginEnabled) {
        return;
      }
      if (!g(o.tabId)) {
        return;
      }
      if (!E.includes(o.statusCode) || o.method != "GET") {
        Log.info(C + "statusCode or method mismatch");
        return;
      }
      var t = new p(o.url);
      if (!q(t)) {
        Log.info(C + "not a valid auth0 authorize call");
        return;
      }
      if (u.POktaIdPDomain.includes(t.host)) {
        Log.info(C + "authorize from POkta Idp, skip");
        return;
      }
      var r = h(o.responseHeaders, function (e) {
        return e.name.toLowerCase() === "x-auth0-requestid";
      });
      if (!r) {
        Log.info(C + "no auth0 x-auth0-requestid header");
        return;
      }
      var n = t.queryKey;
      var a = {
        signOnMode: "oauth_authorize",
        audience: decodeURIComponent(n.audience),
        host: t.host,
        auth0Client: n.auth0Client,
        clientId: n.client_id,
        scope: decodeURIComponent(n.scope),
        redirectUri: decodeURIComponent(n.redirect_uri),
        timeStamp: o.timeStamp
      };
      return s.setCurrentSelfServiceAppCredentials(o.tabId, a);
    });
  };
  var K = {};
  var X = function (e, t) {
    v(K, function (e, t) {
      if (e.timestamp + T < S()) {
        delete K[t];
      }
    });
    t.timestamp = S();
    K[e] = t;
    Log.info("stored pOkta fastIdP info on tab {0}, current size: {1}", e, w(K));
  };
  i.onPOktaAppHomeRedirect = function (t) {
    return D().then(function (e) {
      if (!e) {
        return;
      }
      if (!z(t)) {
        return;
      }
      var n = t.redirectUrl;
      var a = new p(n);
      var o = t.tabId;
      var i = { appSSOUrl: n };
      return s
        .setCurrentFastIdpApp(o, i)
        .then(k(W, n))
        .then(function (e) {
          if (!e) {
            Log.warn(O + "siteUrl {0} is not in MonitoredSites, will try to resync app cache", n);
            var t = l(a, c("/sites"));
            return G(t).then(k(W, n));
          }
          return e;
        })
        .then(function (e) {
          if (!e) {
            Log.warn(O + "siteUrl {0} is not in MonitoredSites after syncing app cache, exit", n);
            return;
          }
          var t = m({}, i, { matchedSite: e });
          X(o, t);
          var r = l(a, e.scriptURI);
          return M(o, r, t, true);
        });
    });
  };
  i.onPOktaAppLoginRedirect = function (s) {
    return D().then(function (e) {
      if (!e) {
        return;
      }
      if (!H(s)) {
        return;
      }
      var t = s.tabId;
      var r = K[t];
      if (!r || !r.appSSOUrl || !r.matchedSite) {
        Log.warn(R + "missing fast IdP data in the previous redirection, exit");
        return;
      }
      var n = r.appSSOUrl;
      var a = r.matchedSite;
      var o = new p(n);
      var i = l(o, a.scriptURI);
      return M(t, i, r, false).fin(function () {
        Log.info(R + "request done, deleting fastIdp data on tab");
        delete K[t];
      });
    });
  };
  i.makeSiteFlowNoCredsCallAndUpdateTabStorage = function (a, e, o) {
    return r
      .makeGetRequest(e, true)
      .then(function (e) {
        if (e && e.errorCode) {
          Log.warn(P + "failed to obtain site-flow, error code: {0} and summary: {1}", e.errorCode, e.errorSummary);
          return;
        }
        var t = { flow: e, message: o.matchedSite.progressMessage, statusURI: o.matchedSite.callbackURI };
        var r = d(t);
        var n = m({}, o, { requestComplete: true });
        Log.info(P + "successfully obtained site-flow, will update tab storage");
        delete K[a];
        return f.all([s.setCurrentFlow(a, r), s.setCurrentFastIdpApp(a, n)]);
      })
      .fail(function (e) {
        Log.warn(P + "failed to obtain site-flow, error: " + e);
      });
  };
  i.initiateSiteFlowNoCredsRequestNoCreds = function (e) {
    var t = e.url;
    var n = new p(t);
    var a = e.tabId;
    var o = { appSSOUrl: t };
    return s
      .setCurrentFastIdpApp(a, o)
      .then(k(W, t))
      .then(function (e) {
        if (!e) {
          throw Error("No matching site found.");
        }
        return e;
      })
      .then(function (e) {
        var t = m({}, o, { matchedSite: e });
        X(a, t);
        var r = l(n, e.scriptURI);
        return i.makeSiteFlowNoCredsCallAndUpdateTabStorage(a, r, t);
      });
  };
  i.findAppInstanceId = function (e) {
    var t = /\b[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}\b/;
    var r = e.match(t);
    if (r) {
      return r[0];
    }
    return null;
  };
  i.getAllMonitoredSites = function () {
    return f
      .all([s.getMonitoredSites(), s.getTabs()])
      .spread(function (e, a) {
        var o = {};
        if (e && e.length > 0) {
          e.forEach(function (e) {
            var t = e.siteURL;
            var r = i.findAppInstanceId(t);
            var n =
              a &&
              a.appLinks.find(function (e) {
                return e.appInstanceId === r;
              });
            if (n) {
              o[e.siteURL] = n.loginRedirectUrl;
            }
          });
        }
        return o;
      })
      .fail(function (e) {
        Log.warn(P + "getAllMonitoredSites::Failed to obtain all monitored sites. Error: " + e);
      });
  };
  function $(e) {
    var t = new URL(e);
    t.search = "";
    return t.toString();
  }
  i.navigateToAppLoginUrl = function (r, n) {
    return i
      .getAllMonitoredSites()
      .then(function (e) {
        n = $(n);
        var t = e[n];
        if (t) {
          chrome.tabs.update(r, { url: t });
        } else {
          Log.warn(P + "navigateToAppLoginUrl::No matching URL found for: " + n);
        }
      })
      .fail(function (e) {
        Log.warn(P + "navigateToAppLoginUrl::Failed to navigate to app login page. Error: " + e);
      });
  };
  i.onPOktaNewIDPInitUrlDetected = function (e) {
    Log.info(P + "chrome.webNavigation.onBeforeNavigate: " + e.url);
    var t = i.findAppInstanceId(e.url);
    if (t) {
      i.navigateToAppLoginUrl(e.tabId, e.url);
      s.setCurrentFlowAppInstanceId(e.tabId, t).then(function () {
        i.initiateSiteFlowNoCredsRequestNoCreds(e);
      });
    }
  };
  i.initialize = function () {
    chrome.webRequest.onBeforeRedirect.addListener(i.onAuth0BeforeRedirect, F, ["responseHeaders"]);
    chrome.webRequest.onBeforeRedirect.addListener(i.onPOktaAppHomeRedirect, x);
    chrome.webRequest.onBeforeRedirect.addListener(i.onPOktaAppLoginRedirect, y);
    chrome.webNavigation.onBeforeNavigate.addListener(i.onPOktaNewIDPInitUrlDetected, {
      url: [{ urlMatches: i.pOktaNewArchitectureIDPRegexStr }]
    });
  };
  return i;
};
