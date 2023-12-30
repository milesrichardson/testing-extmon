(() => {
  "use strict";
  var e, t, n, r, s, i;
  !(function (e) {
    (e.ENABLED = "enabled"), (e.DISABLED = "disabled");
  })(e || (e = {})),
    (function (e) {
      (e.ACCEPT_ALL = "acceptAll"), (e.REJECT_ALL = "rejectAll");
    })(t || (t = {})),
    (function (e) {
      (e.GET_DATA = "cookieManager.getData"),
        (e.GET_COOKIE_STYLES = "cookieManager.getCookieStyles"),
        (e.GET_SCENARIO = "cookieManager.getScenario"),
        (e.GET_DETECTION_RULES = "cookieManager.getDetectionRules"),
        (e.GET_NOTIFICATION = "cookieManager.getNotification"),
        (e.GET_PROMOTED_PRODUCT = "cookieManager.getPromotedProduct"),
        (e.SET_STATE = "cookieManager.setState"),
        (e.SET_PREFERENCES = "cookieManager.setPreferences"),
        (e.ADD_ALLOWED_WEBSITE = "cookieManager.addAllowedWebsite"),
        (e.REMOVE_ALLOWED_WEBSITE = "cookieManager.removeAllowedWebsite"),
        (e.COOKIE_BANNER_RESOLVED = "cookieManager.bannerResolved"),
        (e.INJECT_SCRIPT = "cookieManager.injectClientScript"),
        (e.RUN_FRAME_SCENARIO = "cookieManager.runFrameScenario"),
        (e.FRAME_SCENARIO_FINISHED = "cookieManager.frameScenarioFinished"),
        (e.SCENARIO_STARTED = "cookieManager.trackScenarioStarted"),
        (e.SCENARIO_FAILED = "cookieManager.trackScenarioFailed"),
        (e.TRACK = "track.cookieManager"),
        (e.USER_REPORT = "cookieManager.userReport"),
        (e.DISMISS_COOKIE_NOTIFICATION = "cookieManager.dismissCookieNotification"),
        (e.NOTIFICATION_DISPLAYED = "cookieManager.notificationDisplayed");
    })(n || (n = {})),
    (function (e) {
      (e.RESOLVED = "resolved"), (e.UNKNOWN = "unknown"), (e.PENDING = "pending");
    })(r || (r = {})),
    (function (e) {
      (e.PREFERENCES = "preferences"),
        (e.CATEGORY = "cookies"),
        (e.STARTED = "started"),
        (e.SUCCESSFUL = "successful"),
        (e.ERROR = "error");
    })(s || (s = {})),
    (function (e) {
      (e.SHOW = "show"), (e.DISMISSED = "dismissed"), (e.DO_NOT_SHOW = "doNotShow");
    })(i || (i = {}));
  class o {
    constructor(e) {
      this.execute = e;
    }
    enable() {
      return this.execute("browserAction", "enable", ...arguments);
    }
    disable() {
      return this.execute("browserAction", "disable", ...arguments);
    }
    setTitle() {
      return this.execute("browserAction", "setTitle", ...arguments);
    }
    setIcon() {
      return this.execute("browserAction", "setIcon", ...arguments);
    }
    setBadgeText() {
      return this.execute("browserAction", "setBadgeText", ...arguments);
    }
    setBadgeTextColor() {
      return this.execute("browserAction", "setBadgeTextColor", ...arguments);
    }
    setBadgeBackgroundColor() {
      return this.execute("browserAction", "setBadgeBackgroundColor", ...arguments);
    }
    get onClicked() {
      return {
        addListener: this.execute.bind(this, "browserAction.onClicked", "addListener"),
        hasListener: this.execute.bind(this, "browserAction.onClicked", "hasListener"),
        removeListener: this.execute.bind(this, "browserAction.onClicked", "removeListener")
      };
    }
  }
  class a {
    constructor(e) {
      this.execute = e;
    }
    getURL() {
      return this.execute("extension", "getURL", ...arguments);
    }
  }
  class c {
    constructor(e) {
      this.execute = e;
    }
    get lastError() {
      return this.execute("runtime", "lastError");
    }
    get onInstalled() {
      return {
        addListener: this.execute.bind(this, "runtime.onInstalled", "addListener"),
        hasListener: this.execute.bind(this, "runtime.onInstalled", "hasListener"),
        removeListener: this.execute.bind(this, "runtime.onInstalled", "removeListener")
      };
    }
    get onMessage() {
      return {
        addListener: this.execute.bind(this, "runtime.onMessage", "addListener"),
        hasListener: this.execute.bind(this, "runtime.onMessage", "hasListener"),
        removeListener: this.execute.bind(this, "runtime.onMessage", "removeListener")
      };
    }
    sendMessage() {
      return this.execute("runtime", "sendMessage", ...arguments);
    }
    setUninstallURL() {
      return this.execute("runtime", "setUninstallURL", ...arguments);
    }
    getManifest() {
      return this.execute("runtime", "getManifest", ...arguments);
    }
    getURL() {
      return this.execute("runtime", "getURL", ...arguments);
    }
    reload() {
      return this.execute("runtime", "reload");
    }
  }
  class u {
    constructor(e) {
      this.execute = e;
    }
    getUILanguage() {
      return this.execute("i18n", "getUILanguage");
    }
    getMessage() {
      return this.execute("i18n", "getMessage", ...arguments);
    }
  }
  class d {
    constructor(e, t) {
      (this.execute = e), (this.browser = t);
    }
    get onChanged() {
      return this.browser.storage.onChanged;
    }
    get local() {
      return {
        get: this.execute.bind(this, "storage.local", "get"),
        set: this.execute.bind(this, "storage.local", "set"),
        remove: this.execute.bind(this, "storage.local", "remove"),
        clear: this.execute.bind(this, "storage.local", "clear"),
        getBytesInUse: this.execute.bind(this, "storage.local", "getBytesInUse")
      };
    }
    get sync() {
      return {
        get: this.execute.bind(this, "storage.sync", "get"),
        set: this.execute.bind(this, "storage.sync", "set"),
        remove: this.execute.bind(this, "storage.sync", "remove"),
        clear: this.execute.bind(this, "storage.sync", "clear")
      };
    }
  }
  class h {
    constructor(e) {
      this.execute = e;
    }
    sendMessage() {
      return this.execute("tabs", "sendMessage", ...arguments);
    }
    create() {
      return this.execute("tabs", "create", ...arguments);
    }
    get() {
      return this.execute("tabs", "get", ...arguments);
    }
    query() {
      return this.execute("tabs", "query", ...arguments);
    }
    remove() {
      return this.execute("tabs", "remove", ...arguments);
    }
    update() {
      return this.execute("tabs", "update", ...arguments);
    }
    executeScript() {
      return this.execute("tabs", "executeScript", ...arguments);
    }
    insertCSS() {
      return this.execute("tabs", "insertCSS", ...arguments);
    }
    get onActivated() {
      return {
        addListener: this.execute.bind(this, "tabs.onActivated", "addListener"),
        hasListener: this.execute.bind(this, "tabs.onActivated", "hasListener"),
        removeListener: this.execute.bind(this, "tabs.onActivated", "removeListener")
      };
    }
    get onUpdated() {
      return {
        addListener: this.execute.bind(this, "tabs.onUpdated", "addListener"),
        hasListener: this.execute.bind(this, "tabs.onUpdated", "hasListener"),
        removeListener: this.execute.bind(this, "tabs.onUpdated", "removeListener")
      };
    }
    get onCreated() {
      return {
        addListener: this.execute.bind(this, "tabs.onCreated", "addListener"),
        hasListener: this.execute.bind(this, "tabs.onCreated", "hasListener"),
        removeListener: this.execute.bind(this, "tabs.onCreated", "removeListener")
      };
    }
    get onRemoved() {
      return {
        addListener: this.execute.bind(this, "tabs.onRemoved", "addListener"),
        hasListener: this.execute.bind(this, "tabs.onRemoved", "hasListener"),
        removeListener: this.execute.bind(this, "tabs.onRemoved", "removeListener")
      };
    }
  }
  class b {
    constructor(e) {
      this.execute = e;
    }
    create() {
      return this.execute("windows", "create", ...arguments);
    }
    update() {
      return this.execute("windows", "update", ...arguments);
    }
    remove() {
      return this.execute("windows", "remove", ...arguments);
    }
    get() {
      return this.execute("windows", "get", ...arguments);
    }
    get onFocusChanged() {
      return {
        addListener: this.execute.bind(this, "windows.onFocusChanged", "addListener"),
        hasListener: this.execute.bind(this, "windows.onFocusChanged", "hasListener"),
        removeListener: this.execute.bind(this, "windows.onFocusChanged", "removeListener")
      };
    }
  }
  class l {
    constructor(e) {
      this.execute = e;
    }
    get onCommitted() {
      return {
        addListener: this.execute.bind(this, "webNavigation.onCommitted", "addListener"),
        hasListener: this.execute.bind(this, "webNavigation.onCommitted", "hasListener"),
        removeListener: this.execute.bind(this, "webNavigation.onCommitted", "removeListener")
      };
    }
    get onHistoryStateUpdated() {
      return {
        addListener: this.execute.bind(this, "webNavigation.onHistoryStateUpdated", "addListener"),
        hasListener: this.execute.bind(this, "webNavigation.onHistoryStateUpdated", "hasListener"),
        removeListener: this.execute.bind(this, "webNavigation.onHistoryStateUpdated", "removeListener")
      };
    }
    get onReferenceFragmentUpdated() {
      return {
        addListener: this.execute.bind(this, "webNavigation.onReferenceFragmentUpdated", "addListener"),
        hasListener: this.execute.bind(this, "webNavigation.onReferenceFragmentUpdated", "hasListener"),
        removeListener: this.execute.bind(this, "webNavigation.onReferenceFragmentUpdated", "removeListener")
      };
    }
    get onBeforeNavigate() {
      return {
        addListener: this.execute.bind(this, "webNavigation.onBeforeNavigate", "addListener"),
        hasListener: this.execute.bind(this, "webNavigation.onBeforeNavigate", "hasListener"),
        removeListener: this.execute.bind(this, "webNavigation.onBeforeNavigate", "removeListener")
      };
    }
    get onDOMContentLoaded() {
      return {
        addListener: this.execute.bind(this, "webNavigation.onDOMContentLoaded", "addListener"),
        hasListener: this.execute.bind(this, "webNavigation.onDOMContentLoaded", "hasListener"),
        removeListener: this.execute.bind(this, "webNavigation.onDOMContentLoaded", "removeListener")
      };
    }
    get onCompleted() {
      return {
        addListener: this.execute.bind(this, "webNavigation.onCompleted", "addListener"),
        hasListener: this.execute.bind(this, "webNavigation.onCompleted", "hasListener"),
        removeListener: this.execute.bind(this, "webNavigation.onCompleted", "removeListener")
      };
    }
    get onErrorOccurred() {
      return {
        addListener: this.execute.bind(this, "webNavigation.onErrorOccurred", "addListener"),
        hasListener: this.execute.bind(this, "webNavigation.onErrorOccurred", "hasListener"),
        removeListener: this.execute.bind(this, "webNavigation.onErrorOccurred", "removeListener")
      };
    }
  }
  class g {
    constructor(e) {
      this.execute = e;
    }
    get onBeforeRequest() {
      return {
        addListener: this.execute.bind(this, "webRequest.onBeforeRequest", "addListener"),
        hasListener: this.execute.bind(this, "webRequest.onBeforeRequest", "hasListener"),
        removeListener: this.execute.bind(this, "webRequest.onBeforeRequest", "removeListener")
      };
    }
    get onBeforeRedirect() {
      return {
        addListener: this.execute.bind(this, "webRequest.onBeforeRedirect", "addListener"),
        hasListener: this.execute.bind(this, "webRequest.onBeforeRedirect", "hasListener"),
        removeListener: this.execute.bind(this, "webRequest.onBeforeRedirect", "removeListener")
      };
    }
    get onSendHeaders() {
      return {
        addListener: this.execute.bind(this, "webRequest.onSendHeaders", "addListener"),
        hasListener: this.execute.bind(this, "webRequest.onSendHeaders", "hasListener"),
        removeListener: this.execute.bind(this, "webRequest.onSendHeaders", "removeListener")
      };
    }
    get onHeadersReceived() {
      return {
        addListener: this.execute.bind(this, "webRequest.onHeadersReceived", "addListener"),
        hasListener: this.execute.bind(this, "webRequest.onHeadersReceived", "hasListener"),
        removeListener: this.execute.bind(this, "webRequest.onHeadersReceived", "removeListener")
      };
    }
    get onBeforeSendHeaders() {
      return {
        addListener: this.execute.bind(this, "webRequest.onBeforeSendHeaders", "addListener"),
        hasListener: this.execute.bind(this, "webRequest.onBeforeSendHeaders", "hasListener"),
        removeListener: this.execute.bind(this, "webRequest.onBeforeSendHeaders", "removeListener")
      };
    }
    get onResponseStarted() {
      return {
        addListener: this.execute.bind(this, "webRequest.onResponseStarted", "addListener"),
        hasListener: this.execute.bind(this, "webRequest.onResponseStarted", "hasListener"),
        removeListener: this.execute.bind(this, "webRequest.onResponseStarted", "removeListener")
      };
    }
    get onCompleted() {
      return {
        addListener: this.execute.bind(this, "webRequest.onCompleted", "addListener"),
        hasListener: this.execute.bind(this, "webRequest.onCompleted", "hasListener"),
        removeListener: this.execute.bind(this, "webRequest.onCompleted", "removeListener")
      };
    }
    get onErrorOccurred() {
      return {
        addListener: this.execute.bind(this, "webRequest.onErrorOccurred", "addListener"),
        hasListener: this.execute.bind(this, "webRequest.onErrorOccurred", "hasListener"),
        removeListener: this.execute.bind(this, "webRequest.onErrorOccurred", "removeListener")
      };
    }
  }
  const L = Array.isArray;
  const v = "object" == typeof global && global && global.Object === Object && global;
  var f = "object" == typeof self && self && self.Object === Object && self;
  const x = v || f || Function("return this")();
  const p = x.Symbol;
  var m = Object.prototype,
    w = m.hasOwnProperty,
    _ = m.toString,
    R = p ? p.toStringTag : void 0;
  const y = function (e) {
    var t = w.call(e, R),
      n = e[R];
    try {
      e[R] = void 0;
      var r = !0;
    } catch (e) {}
    var s = _.call(e);
    return r && (t ? (e[R] = n) : delete e[R]), s;
  };
  var E = Object.prototype.toString;
  const S = function (e) {
    return E.call(e);
  };
  var C = p ? p.toStringTag : void 0;
  const O = function (e) {
    return null == e ? (void 0 === e ? "[object Undefined]" : "[object Null]") : C && C in Object(e) ? y(e) : S(e);
  };
  const N = function (e) {
    return null != e && "object" == typeof e;
  };
  const A = function (e) {
    return "symbol" == typeof e || (N(e) && "[object Symbol]" == O(e));
  };
  var I = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    T = /^\w*$/;
  const M = function (e, t) {
    if (L(e)) return !1;
    var n = typeof e;
    return (
      !("number" != n && "symbol" != n && "boolean" != n && null != e && !A(e)) || T.test(e) || !I.test(e) || (null != t && e in Object(t))
    );
  };
  const k = function (e) {
    var t = typeof e;
    return null != e && ("object" == t || "function" == t);
  };
  const U = function (e) {
    if (!k(e)) return !1;
    var t = O(e);
    return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t;
  };
  const q = x["__core-js_shared__"];
  var B,
    D = (B = /[^.]+$/.exec((q && q.keys && q.keys.IE_PROTO) || "")) ? "Symbol(src)_1." + B : "";
  const F = function (e) {
    return !!D && D in e;
  };
  var j = Function.prototype.toString;
  const P = function (e) {
    if (null != e) {
      try {
        return j.call(e);
      } catch (e) {}
      try {
        return e + "";
      } catch (e) {}
    }
    return "";
  };
  var H = /^\[object .+?Constructor\]$/,
    z = Function.prototype,
    G = Object.prototype,
    W = z.toString,
    $ = G.hasOwnProperty,
    K = RegExp(
      "^" +
        W.call($)
          .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") +
        "$"
    );
  const J = function (e) {
    return !(!k(e) || F(e)) && (U(e) ? K : H).test(P(e));
  };
  const V = function (e, t) {
    return null == e ? void 0 : e[t];
  };
  const Y = function (e, t) {
    var n = V(e, t);
    return J(n) ? n : void 0;
  };
  const Q = Y(Object, "create");
  const X = function () {
    (this.__data__ = Q ? Q(null) : {}), (this.size = 0);
  };
  const Z = function (e) {
    var t = this.has(e) && delete this.__data__[e];
    return (this.size -= t ? 1 : 0), t;
  };
  var ee = Object.prototype.hasOwnProperty;
  const te = function (e) {
    var t = this.__data__;
    if (Q) {
      var n = t[e];
      return "__lodash_hash_undefined__" === n ? void 0 : n;
    }
    return ee.call(t, e) ? t[e] : void 0;
  };
  var ne = Object.prototype.hasOwnProperty;
  const re = function (e) {
    var t = this.__data__;
    return Q ? void 0 !== t[e] : ne.call(t, e);
  };
  const se = function (e, t) {
    var n = this.__data__;
    return (this.size += this.has(e) ? 0 : 1), (n[e] = Q && void 0 === t ? "__lodash_hash_undefined__" : t), this;
  };
  function ie(e) {
    var t = -1,
      n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  (ie.prototype.clear = X), (ie.prototype.delete = Z), (ie.prototype.get = te), (ie.prototype.has = re), (ie.prototype.set = se);
  const oe = ie;
  const ae = function () {
    (this.__data__ = []), (this.size = 0);
  };
  const ce = function (e, t) {
    return e === t || (e != e && t != t);
  };
  const ue = function (e, t) {
    for (var n = e.length; n--; ) if (ce(e[n][0], t)) return n;
    return -1;
  };
  var de = Array.prototype.splice;
  const he = function (e) {
    var t = this.__data__,
      n = ue(t, e);
    return !(n < 0) && (n == t.length - 1 ? t.pop() : de.call(t, n, 1), --this.size, !0);
  };
  const be = function (e) {
    var t = this.__data__,
      n = ue(t, e);
    return n < 0 ? void 0 : t[n][1];
  };
  const le = function (e) {
    return ue(this.__data__, e) > -1;
  };
  const ge = function (e, t) {
    var n = this.__data__,
      r = ue(n, e);
    return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
  };
  function Le(e) {
    var t = -1,
      n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  (Le.prototype.clear = ae), (Le.prototype.delete = he), (Le.prototype.get = be), (Le.prototype.has = le), (Le.prototype.set = ge);
  const ve = Le;
  const fe = Y(x, "Map");
  const xe = function () {
    (this.size = 0), (this.__data__ = { hash: new oe(), map: new (fe || ve)(), string: new oe() });
  };
  const pe = function (e) {
    var t = typeof e;
    return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e;
  };
  const me = function (e, t) {
    var n = e.__data__;
    return pe(t) ? n["string" == typeof t ? "string" : "hash"] : n.map;
  };
  const we = function (e) {
    var t = me(this, e).delete(e);
    return (this.size -= t ? 1 : 0), t;
  };
  const _e = function (e) {
    return me(this, e).get(e);
  };
  const Re = function (e) {
    return me(this, e).has(e);
  };
  const ye = function (e, t) {
    var n = me(this, e),
      r = n.size;
    return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
  };
  function Ee(e) {
    var t = -1,
      n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n; ) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  (Ee.prototype.clear = xe), (Ee.prototype.delete = we), (Ee.prototype.get = _e), (Ee.prototype.has = Re), (Ee.prototype.set = ye);
  const Se = Ee;
  function Ce(e, t) {
    if ("function" != typeof e || (null != t && "function" != typeof t)) throw new TypeError("Expected a function");
    var n = function () {
      var r = arguments,
        s = t ? t.apply(this, r) : r[0],
        i = n.cache;
      if (i.has(s)) return i.get(s);
      var o = e.apply(this, r);
      return (n.cache = i.set(s, o) || i), o;
    };
    return (n.cache = new (Ce.Cache || Se)()), n;
  }
  Ce.Cache = Se;
  const Oe = Ce;
  var Ne = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    Ae = /\\(\\)?/g;
  const Ie = (function (e) {
    var t = Oe(e, function (e) {
        return 500 === n.size && n.clear(), e;
      }),
      n = t.cache;
    return t;
  })(function (e) {
    var t = [];
    return (
      46 === e.charCodeAt(0) && t.push(""),
      e.replace(Ne, function (e, n, r, s) {
        t.push(r ? s.replace(Ae, "$1") : n || e);
      }),
      t
    );
  });
  const Te = function (e, t) {
    for (var n = -1, r = null == e ? 0 : e.length, s = Array(r); ++n < r; ) s[n] = t(e[n], n, e);
    return s;
  };
  var Me = p ? p.prototype : void 0,
    ke = Me ? Me.toString : void 0;
  const Ue = function e(t) {
    if ("string" == typeof t) return t;
    if (L(t)) return Te(t, e) + "";
    if (A(t)) return ke ? ke.call(t) : "";
    var n = t + "";
    return "0" == n && 1 / t == -Infinity ? "-0" : n;
  };
  const qe = function (e) {
    return null == e ? "" : Ue(e);
  };
  const Be = function (e, t) {
    return L(e) ? e : M(e, t) ? [e] : Ie(qe(e));
  };
  const De = function (e) {
    if ("string" == typeof e || A(e)) return e;
    var t = e + "";
    return "0" == t && 1 / e == -Infinity ? "-0" : t;
  };
  const Fe = function (e, t) {
    for (var n = 0, r = (t = Be(t, e)).length; null != e && n < r; ) e = e[De(t[n++])];
    return n && n == r ? e : void 0;
  };
  const je = function (e, t, n) {
    var r = null == e ? void 0 : Fe(e, t);
    return void 0 === r ? n : r;
  };
  const Pe = window.self !== window.top;
  new (class {
    constructor(e) {
      this.browser = e;
      const t = function (...t) {
        const n = je(e, t.shift()) || {},
          r = n[t.shift()];
        return "function" == typeof r ? r.apply(n, t) : r;
      };
      (this.browserAction = new o(t)),
        (this.extension = new a(t)),
        (this.i18n = new u(t)),
        (this.runtime = new c(t)),
        (this.storage = new d(t, this.browser)),
        (this.tabs = new h(t)),
        (this.windows = new b(t)),
        (this.webNavigation = new l(t)),
        (this.webRequest = new g(t));
    }
  })(chrome).runtime.sendMessage({ message: n.INJECT_SCRIPT, isIFrame: Pe });
})();
