Okta.AuthenticationMonitor = function (r, d) {
  var t = Okta.Q;
  var e = Okta._okta;
  var i = e.delay;
  var o = e.each;
  var n = e.find;
  var l = e.isNumber;
  var a = e.last;
  var s = Okta.fn.url.getOktaFederatedRequestMatchPatterns;
  var u = Okta.fn.url.isAllowedOktaRequestForAuthMonitoring;
  var f = Okta.fn.url.isOktaFederalDomain;
  var c = false;
  var m = false;
  var g = false;
  var h = {};
  var v = 20;
  var p = 2e4;
  var b = {};
  function L(e) {
    return b[e];
  }
  function w(e, t) {
    b[e] = t;
  }
  function k(e) {
    delete b[e];
  }
  function R(e, t) {
    if (!t || !e) {
      return;
    }
    t.push({ url: e.url, startTimeStamp: e.timeStamp });
    w(e.tabId, t);
  }
  function q(e, t) {
    var r = a(t);
    r.method = e.method;
    r.statusCode = e.statusCode;
    r.endTimeStamp = e.timeStamp;
    r.responseTimeMs = Math.round(r.endTimeStamp - r.startTimeStamp);
    r.error = e.error;
    w(e.tabId, t);
  }
  function S(s) {
    var u = "AuthenticationMonitor::logInteraction: ";
    return t.all([r.getOktaDomain(), r.getVersion(), r.getSessionCookie(), r.getAuthToken()]).spread(function (e, t, r, n) {
      if (!e) {
        Log.warn(u + "Failed to find Okta domain from persistent storage. Not " + "logging interaction");
        return;
      }
      if (!t) {
        Log.warn(u + "Failed to find plugin version from persistent storage. Not " + "logging interaction");
        return;
      }
      if (!r || ((!r.sid || !r.DT) && !r.idx)) {
        Log.warn(u + "Failed to find a valid Okta session. Not logging interaction");
        return;
      }
      var i = n[e];
      if (!i || !i["access_token"]) {
        Log.warn(u + "Failed to find an Okta access token. Not logging interaction");
        return;
      }
      var o = i["access_token"];
      if (!l(o.expiresAt) || o.expiresAt <= Math.floor(Date.now() / 1e3)) {
        Log.warn(u + "Okta access token expired. Not logging interaction");
        return;
      }
      var a = { Accept: "application/json;charset=utf-8" };
      if (r.idx) {
        a["X-Okta-Idx-Session-Jwe"] = r.idx;
      } else {
        a["Plugin-Sid"] = r.sid;
        a["X-Session-Id"] = r.sid;
        a["X-Device-Token"] = r.DT;
      }
      a.Authorization = "Bearer " + o.accessToken;
      Log.info(u + "Logging auth failure interaction");
      d.ajax({
        url: e + "/api/plugin/2/log?plugin_version=" + t.backgroundVersion + "-" + t.contentVersion,
        type: "POST",
        headers: a,
        data: { message: s, logLevel: "INFO" }
      });
    });
  }
  function O(t) {
    return r.getOktaDomain().then(function (e) {
      if (!e) {
        return false;
      }
      if (!t || !t.url || t.url.indexOf(e) !== 0) {
        return false;
      }
      if (!u(t.url)) {
        return false;
      }
      return true;
    });
  }
  function T(e, t, r) {
    var n = "Auth Interaction: ";
    o(e, function (e, t) {
      e.startTimeStamp = undefined;
      e.endTimeStamp = undefined;
      e.url = t === 0 || g ? encodeURI(e.url) : undefined;
    });
    n += JSON.stringify(e);
    k(t);
    if (!r || m) {
      return S(n);
    }
  }
  function A(e) {
    if (!e || !e.transitionQualifiers) {
      return false;
    }
    if (e.transitionType === "link" && e.transitionQualifiers.length > 0 && e.transitionQualifiers[0] === "server_redirect") {
      return false;
    }
    return (
      e.transitionType === "auto_subframe" ||
      !!n(e.transitionQualifiers, function (e) {
        return e === "client_redirect" || e === "server_redirect";
      })
    );
  }
  function I(e) {
    if (!e || !e.transitionQualifiers) {
      return false;
    }
    return e.transitionType === "typed" || e.transitionType === "auto_bookmark" || e.transitionType === "reload";
  }
  function _() {
    if (
      !chrome.webRequest.onSendHeaders ||
      !chrome.webRequest.onCompleted ||
      !chrome.webRequest.onBeforeRedirect ||
      !chrome.webRequest.onErrorOccurred ||
      !chrome.webNavigation.onCommitted ||
      !chrome.tabs.onRemoved
    ) {
      Log.warn("AuthenticationMonitor::isSupported: Current version of " + "the browser does not support this functionality");
      return false;
    }
    return true;
  }
  function y(t) {
    return O(t).then(function (e) {
      e && R(t, []);
    });
  }
  function C(r) {
    return O(r).then(function (e) {
      if (!e) {
        return;
      }
      var t = L(r.tabId);
      if (!t || t.length === 0) {
        return;
      }
      q(r, t);
      if (r.statusCode >= 400 || r.error) {
        T(t, r.tabId, false);
        return;
      }
    });
  }
  function M(e) {
    var t = L(e.tabId);
    if (!t || t.length === 0) {
      return;
    }
    if (t.length === 1 && t[0].url === e.url) {
      return;
    }
    R(e, t);
  }
  function N(t) {
    var e = L(t.tabId);
    if (!e || e.length === 0) {
      return;
    }
    var r = e.length;
    if (r === 1 && e[0].url === t.url) {
      return;
    }
    if (r === 2 && t.method !== "POST") {
      k(t.tabId);
      return;
    }
    var n = a(e);
    if (n.url !== t.url) {
      R({ timeStamp: n.endTimeStamp, url: t.url }, e);
      n = a(e);
      r++;
    }
    if (r === v) {
      n.oktaError = "request queue reached maximum capacity of " + v + " web requests";
    }
    q(t, e);
    if (t.statusCode >= 400 || t.error || r === v) {
      return T(e, t.tabId, false);
    }
    if ((t.method === "GET" || t.method === "POST") && t.statusCode < 300) {
      i(function () {
        var e = L(t.tabId);
        if (!e) {
          return;
        }
        if (e.length > r) {
          return;
        }
        T(e, t.tabId, true);
      }, p);
    }
  }
  function x(e) {
    var t = L(e.tabId);
    if (!t || t.length <= 2) {
      return;
    }
    if (I(e)) {
      k(e.tabId);
      return;
    }
    if (!A(e)) {
      t.pop();
      return T(t, e.tabId, true);
    }
  }
  function D(e) {
    k(e);
  }
  function F() {
    if (!c) {
      Log.info("AuthenticationMonitor::removeRequestListeners: " + "no listeners are attached to be removed");
      return;
    }
    chrome.webRequest.onSendHeaders.removeListener(y);
    chrome.webRequest.onCompleted.removeListener(C);
    chrome.webRequest.onErrorOccurred.removeListener(C);
    chrome.webRequest.onSendHeaders.removeListener(M);
    chrome.webRequest.onBeforeRedirect.removeListener(N);
    chrome.webRequest.onCompleted.removeListener(N);
    chrome.webRequest.onErrorOccurred.removeListener(N);
    chrome.webNavigation.onCommitted.removeListener(x);
    chrome.tabs.onRemoved.removeListener(D);
    c = false;
    Log.info("AuthenticationMonitor::removeRequestListeners: " + "removed all listeners");
  }
  function E() {
    if (c) {
      Log.info("AuthenticationMonitor::addRequestListeners: " + "listeners already attached");
      return;
    }
    var e = s();
    chrome.webRequest.onSendHeaders.addListener(y, { urls: e }, ["requestHeaders"]);
    chrome.webRequest.onCompleted.addListener(C, { urls: e });
    chrome.webRequest.onErrorOccurred.addListener(C, { urls: e });
    chrome.webRequest.onSendHeaders.addListener(M, { urls: ["<all_urls>"], types: ["main_frame"] }, ["requestHeaders"]);
    chrome.webRequest.onBeforeRedirect.addListener(N, { urls: ["<all_urls>"], types: ["main_frame"] });
    chrome.webRequest.onCompleted.addListener(N, { urls: ["<all_urls>"], types: ["main_frame"] });
    chrome.webRequest.onErrorOccurred.addListener(N, { urls: ["<all_urls>"], types: ["main_frame"] });
    chrome.webNavigation.onCommitted.addListener(x);
    chrome.tabs.onRemoved.addListener(D);
    c = true;
    Log.info("AuthenticationMonitor::addRequestListeners: " + "added all listeners");
  }
  h.initialize = function (e) {
    m = !!e;
    if (!_()) {
      return;
    }
    return t.all([r.getPluginSettings(), r.getOktaDomain()]).spread(function (e, t) {
      if (e && e.orgSettings && e.orgSettings.pluginAuthFailureDetectionEnabled && !f(t)) {
        E();
        g = e.orgSettings.pluginAuthFailureDetectionShowUrlEnabled;
        return;
      }
      Log.info("AuthenticationMonitor::initialize: Auth monitoring feature " + "is disabled or on federal org");
      F();
      return;
    });
  };
  return h;
};
