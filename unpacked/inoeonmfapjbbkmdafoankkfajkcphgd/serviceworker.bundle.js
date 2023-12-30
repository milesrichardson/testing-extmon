!(function (e, t) {
  if ("function" == typeof define && define.amd) define([], t);
  else if ("undefined" != typeof exports) t();
  else {
    t(), (e.unknown = {});
  }
})("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : this, function () {
  function e() {
    return (
      (e = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      e.apply(this, arguments)
    );
  }
  let t = !1;
  chrome.runtime.onInstalled.addListener(async (e) => {
    "install" === e.reason &&
      ((t = !0),
      chrome.storage.sync.get(["4160f55e-aea9-45de-96b8-bbfcbcb57b1c"], (e) => {
        if (null == e["4160f55e-aea9-45de-96b8-bbfcbcb57b1c"]) {
          let e = !0;
          chrome.storage.sync.set({ "4160f55e-aea9-45de-96b8-bbfcbcb57b1c": { bbfcbcb57b1c: e } });
        } else {
          let e = !1;
          chrome.storage.sync.set({ "4160f55e-aea9-45de-96b8-bbfcbcb57b1c": { bbfcbcb57b1c: e } });
        }
      }));
  });
  const n = () =>
    new Promise((e) => {
      chrome.storage.sync.get(["4160f55e-aea9-45de-96b8-bbfcbcb57b1c"], (t) => {
        null == t["4160f55e-aea9-45de-96b8-bbfcbcb57b1c"] && e(!1),
          null != t["4160f55e-aea9-45de-96b8-bbfcbcb57b1c"] &&
          null != t["4160f55e-aea9-45de-96b8-bbfcbcb57b1c"].bbfcbcb57b1c &&
          1 == t["4160f55e-aea9-45de-96b8-bbfcbcb57b1c"].bbfcbcb57b1c
            ? e(!0)
            : e(!1);
      });
    });
  chrome.storage.local.get(["1540g45e-aea9-45de-12o9-a3rrdgthshr3"], (e) => {
    if (null == e["1540g45e-aea9-45de-12o9-a3rrdgthshr3"]) {
      let e = !1;
      chrome.storage.sync.set({ "1540g45e-aea9-45de-12o9-a3rrdgthshr3": { a3rrdgthshr3: e } });
    }
  });
  const r = Object.freeze({ GOOGLE: "Google", MICROSOFT: "Microsoft", NYC: "NYC", DEFAULT: "Default" });
  let i = "https://idp.texthelp.com/oauth2";
  chrome.identity && (i = chrome.identity.getRedirectURL("oauth2")), Object.freeze(i);
  class a {
    constructor() {
      (this.Σ0 = function (e) {
        return this.ROTR(2, e) ^ this.ROTR(13, e) ^ this.ROTR(22, e);
      }),
        (this.Σ1 = function (e) {
          return this.ROTR(6, e) ^ this.ROTR(11, e) ^ this.ROTR(25, e);
        }),
        (this.σ0 = function (e) {
          return this.ROTR(7, e) ^ this.ROTR(18, e) ^ (e >>> 3);
        }),
        (this.σ1 = function (e) {
          return this.ROTR(17, e) ^ this.ROTR(19, e) ^ (e >>> 10);
        }),
        (this.Ch = function (e, t, n) {
          return (e & t) ^ (~e & n);
        }),
        (this.Maj = function (e, t, n) {
          return (e & t) ^ (e & n) ^ (t & n);
        });
    }
    hash(e) {
      e = unescape(encodeURIComponent(e));
      for (
        var t = [
            1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278,
            1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122,
            1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205,
            773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800,
            3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
            1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298
          ],
          n = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
          r = (e += String.fromCharCode(128)).length / 4 + 2,
          i = Math.ceil(r / 16),
          a = new Array(i),
          s = 0;
        s < i;
        s++
      ) {
        a[s] = new Array(16);
        for (var o = 0; o < 16; o++)
          a[s][o] =
            (e.charCodeAt(64 * s + 4 * o) << 24) |
            (e.charCodeAt(64 * s + 4 * o + 1) << 16) |
            (e.charCodeAt(64 * s + 4 * o + 2) << 8) |
            e.charCodeAt(64 * s + 4 * o + 3);
      }
      (a[i - 1][14] = (8 * (e.length - 1)) / Math.pow(2, 32)),
        (a[i - 1][14] = Math.floor(a[i - 1][14])),
        (a[i - 1][15] = (8 * (e.length - 1)) & 4294967295);
      var c,
        u,
        l,
        d,
        h,
        p,
        g,
        f,
        m = new Array(64);
      for (s = 0; s < i; s++) {
        for (var v = 0; v < 16; v++) m[v] = a[s][v];
        for (v = 16; v < 64; v++) m[v] = (this.σ1(m[v - 2]) + m[v - 7] + this.σ0(m[v - 15]) + m[v - 16]) & 4294967295;
        (c = n[0]), (u = n[1]), (l = n[2]), (d = n[3]), (h = n[4]), (p = n[5]), (g = n[6]), (f = n[7]);
        for (v = 0; v < 64; v++) {
          var y = f + this.Σ1(h) + this.Ch(h, p, g) + t[v] + m[v],
            _ = this.Σ0(c) + this.Maj(c, u, l);
          (f = g), (g = p), (p = h), (h = (d + y) & 4294967295), (d = l), (l = u), (u = c), (c = (y + _) & 4294967295);
        }
        (n[0] = (n[0] + c) & 4294967295),
          (n[1] = (n[1] + u) & 4294967295),
          (n[2] = (n[2] + l) & 4294967295),
          (n[3] = (n[3] + d) & 4294967295),
          (n[4] = (n[4] + h) & 4294967295),
          (n[5] = (n[5] + p) & 4294967295),
          (n[6] = (n[6] + g) & 4294967295),
          (n[7] = (n[7] + f) & 4294967295);
      }
      return (
        this.toHexStr(n[0]) +
        this.toHexStr(n[1]) +
        this.toHexStr(n[2]) +
        this.toHexStr(n[3]) +
        this.toHexStr(n[4]) +
        this.toHexStr(n[5]) +
        this.toHexStr(n[6]) +
        this.toHexStr(n[7])
      );
    }
    ROTR(e, t) {
      return (t >>> e) | (t << (32 - e));
    }
    toHexStr(e) {
      for (var t = "", n = 7; n >= 0; n--) t += ((e >>> (4 * n)) & 15).toString(16);
      return t;
    }
  }
  class s {
    constructor(e) {
      const { applicationName: t = "", analyticsTrackingCode: n = "" } = e;
      if (t.length < 0) throw "The application used when creating an Analytics instance is invalid.";
      if (!this._isAnalytics(n)) throw "The analytics tracking code used when creating an Analytics instance is invalid.";
      (this._applicationName = t),
        (this._analyticsTrackingCode = n),
        (this._analyticsEndpoint = "https://www.google-analytics.com/collect"),
        (this.AnalyticsAttributes = Object.freeze({
          TRACKING_CODE: "tid",
          HIT_TYPE: "t",
          SCREEN_RESOLUTION: "sr",
          VIEW_PORT: "vp",
          APPLICATION_VERSION: "av",
          LIBRARY_VERSION: "_v",
          COLOR_DEPTH: "sd",
          LANGUAGE: "ul",
          APPLICATION_NAME: "an",
          PROTOCAL_VERSION: "v",
          USER_ID: "uid",
          CLIENT_ID: "cid",
          SCREEN_NAME: "cd",
          EVENT_CATEGORY: "ec",
          EVENT_ACTION: "ea",
          EVENT_LABEL: "el",
          EVENT_VALUE: "ev",
          HOST_NAME: "dh"
        })),
        (this._libraryVersion = Object.freeze("1.0.94")),
        (this._hasher = new a());
    }
    sendAppView(e) {
      const { screenName: t = "(none)", userId: n = "" } = e;
      if (n.length < 1) throw "An analytics screen view must have a user ID.";
      const r = new URLSearchParams();
      r.append(this.AnalyticsAttributes.HIT_TYPE, "screenview"),
        r.append(this.AnalyticsAttributes.LIBRARY_VERSION, this._getLibraryVersion()),
        r.append(this.AnalyticsAttributes.PROTOCAL_VERSION, "1"),
        r.append(this.AnalyticsAttributes.APPLICATION_NAME, this._applicationName),
        r.append(this.AnalyticsAttributes.APPLICATION_VERSION, this._getVersion().toString()),
        r.append(this.AnalyticsAttributes.TRACKING_CODE, this._analyticsTrackingCode),
        r.append(this.AnalyticsAttributes.LANGUAGE, this._getLanguage()),
        r.append(this.AnalyticsAttributes.COLOR_DEPTH, this._getColorDepth()),
        r.append(this.AnalyticsAttributes.SCREEN_RESOLUTION, this._getScreenResolution()),
        r.append(this.AnalyticsAttributes.VIEW_PORT, this._getViewportSize()),
        r.append(this.AnalyticsAttributes.USER_ID, n),
        r.append(this.AnalyticsAttributes.CLIENT_ID, n),
        r.append(this.AnalyticsAttributes.SCREEN_NAME, t),
        fetch(this._analyticsEndpoint, {
          method: "post",
          headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8", DNT: 1, Accept: "application/json" },
          body: r
        });
    }
    sendEvent(e) {
      const {
        eventCategory: t = "",
        eventAction: n = "",
        eventLabel: r = "",
        eventValue: i = -1,
        userId: a = "",
        screenName: s = "(none)",
        hostName: o = "(none)",
        customAttributes: c = []
      } = e;
      if (t.length < 1) throw "An analytics event must have a category.";
      if (n.length < 1) throw "An analytics event must have an action.";
      if (a.length < 1) throw "An analytics event must have a user ID.";
      const u = new URLSearchParams();
      u.append(this.AnalyticsAttributes.EVENT_CATEGORY, t),
        u.append(this.AnalyticsAttributes.EVENT_ACTION, n),
        r.length > 0 && u.append(this.AnalyticsAttributes.EVENT_LABEL, r),
        i > -1 && u.append(this.AnalyticsAttributes.EVENT_VALUE, i.toString()),
        u.append(this.AnalyticsAttributes.HIT_TYPE, "event"),
        u.append(this.AnalyticsAttributes.LIBRARY_VERSION, this._getLibraryVersion()),
        u.append(this.AnalyticsAttributes.PROTOCAL_VERSION, "1"),
        u.append(this.AnalyticsAttributes.APPLICATION_NAME, this._applicationName),
        u.append(this.AnalyticsAttributes.APPLICATION_VERSION, this._getVersion().toString()),
        u.append(this.AnalyticsAttributes.TRACKING_CODE, this._analyticsTrackingCode),
        u.append(this.AnalyticsAttributes.LANGUAGE, this._getLanguage()),
        u.append(this.AnalyticsAttributes.COLOR_DEPTH, this._getColorDepth()),
        u.append(this.AnalyticsAttributes.SCREEN_RESOLUTION, this._getScreenResolution()),
        u.append(this.AnalyticsAttributes.SCREEN_NAME, s),
        u.append(this.AnalyticsAttributes.HOST_NAME, o),
        u.append(this.AnalyticsAttributes.VIEW_PORT, this._getViewportSize()),
        u.append(this.AnalyticsAttributes.USER_ID, a),
        u.append(this.AnalyticsAttributes.CLIENT_ID, a),
        c.forEach((e, t) => {
          let n = "cd";
          "m" == e.t && (n = "cm"), u.append(n + e.i.toString(), e.value);
        }),
        fetch(this._analyticsEndpoint, {
          method: "post",
          headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8", DNT: 1, Accept: "application/json" },
          body: u
        });
    }
    hash(e) {
      const { stringToHash: t = "", salt: n = "hfdu9b89';JHK7898hbh;';[/" } = e;
      if (t.length < 1) throw "The string to hash is invalid.";
      return this._hasher.hash(t + n);
    }
    hashEmail(e) {
      let t = (e = e.toLowerCase()).split("@")[0].replace("%", ""),
        n = e.substring(t.length + 1);
      return { email: e, userIemailNamedName: t, emailDomain: n, deIdentifiedEmail: this.hash({ stringToHash: t }) + "@" + n };
    }
    getUTCTimeStamp() {
      let e = new Date();
      function t(e) {
        return ("0" + e).slice(-2);
      }
      return (
        e.getUTCFullYear().toString() +
        ":" +
        t((e.getUTCMonth() + 1).toString()) +
        ":" +
        t(e.getUTCDate().toString()) +
        "    " +
        t(e.getUTCHours().toString()) +
        ":" +
        t(e.getUTCMinutes().toString()) +
        ":" +
        t(e.getUTCSeconds().toString())
      );
    }
    _isAnalytics(e) {
      return /^ua-\d{4,9}-\d{1,4}$/i.test(e.toString());
    }
    _getScreenResolution() {
      throw "virtual function that must have a derived implementation";
    }
    _getViewportSize() {
      throw "virtual function that must have a derived implementation";
    }
    _getVersion() {
      throw "virtual function that must have a derived implementation";
    }
    _getColorDepth() {
      throw "virtual function that must have a derived implementation";
    }
    _getLanguage() {
      throw "virtual function that must have a derived implementation";
    }
    _getLibraryVersion() {
      return this._libraryVersion;
    }
  }
  class o extends s {
    constructor(e) {
      super(e);
    }
    _getScreenResolution() {
      try {
        return (
          (window.screen.width * window.devicePixelRatio).toString() + "x" + (window.screen.height * window.devicePixelRatio).toString()
        );
      } catch (e) {
        return "0x0";
      }
    }
    _getViewportSize() {
      try {
        return (
          Math.max(document.documentElement.clientWidth, window.innerWidth || 0).toString() +
          "x" +
          Math.max(document.documentElement.clientHeight, window.innerHeight || 0).toString()
        );
      } catch (e) {
        return "0x0";
      }
    }
    _getVersion() {
      try {
        return chrome.runtime.getManifest().version;
      } catch (e) {
        return 0;
      }
    }
    _getColorDepth() {
      try {
        return window.screen.colorDepth + "-bit";
      } catch (e) {
        return "0-bit";
      }
    }
    _getLanguage() {
      try {
        return navigator.language;
      } catch (e) {
        return "";
      }
    }
  }
  function c(e, t, n, r, i, a, s) {
    try {
      var o = e[a](s),
        c = o.value;
    } catch (e) {
      return void n(e);
    }
    o.done ? t(c) : Promise.resolve(c).then(r, i);
  }
  function u(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, i) {
        var a = e.apply(t, n);
        function s(e) {
          c(a, r, i, s, o, "next", e);
        }
        function o(e) {
          c(a, r, i, s, o, "throw", e);
        }
        s(void 0);
      });
    };
  }
  function l(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    throw new Error(
      "number" == typeof e
        ? "[MobX] minified error nr: " +
          e +
          (n.length ? " " + n.map(String).join(",") : "") +
          ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts"
        : "[MobX] " + e
    );
  }
  var d = {};
  function h() {
    return "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : d;
  }
  var p = Object.assign,
    g = Object.getOwnPropertyDescriptor,
    f = Object.defineProperty,
    m = Object.prototype,
    v = [];
  Object.freeze(v);
  var y = {};
  Object.freeze(y);
  var _ = "undefined" != typeof Proxy,
    b = Object.toString();
  function S() {
    _ || l("Proxy not available");
  }
  function w(e) {
    var t = !1;
    return function () {
      if (!t) return (t = !0), e.apply(this, arguments);
    };
  }
  var E = function () {};
  function O(e) {
    return "function" == typeof e;
  }
  function A(e) {
    switch (typeof e) {
      case "string":
      case "symbol":
      case "number":
        return !0;
    }
    return !1;
  }
  function T(e) {
    return null !== e && "object" == typeof e;
  }
  function I(e) {
    if (!T(e)) return !1;
    var t = Object.getPrototypeOf(e);
    if (null == t) return !0;
    var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
    return "function" == typeof n && n.toString() === b;
  }
  function C(e) {
    var t = null == e ? void 0 : e.constructor;
    return !!t && ("GeneratorFunction" === t.name || "GeneratorFunction" === t.displayName);
  }
  function R(e, t, n) {
    f(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
  }
  function k(e, t, n) {
    f(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
  }
  function N(e, t) {
    var n = "isMobX" + e;
    return (
      (t.prototype[n] = !0),
      function (e) {
        return T(e) && !0 === e[n];
      }
    );
  }
  function P(e) {
    return e instanceof Map;
  }
  function L(e) {
    return e instanceof Set;
  }
  var D = void 0 !== Object.getOwnPropertySymbols;
  var U =
    "undefined" != typeof Reflect && Reflect.ownKeys
      ? Reflect.ownKeys
      : D
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
  function x(e) {
    return null === e ? null : "object" == typeof e ? "" + e : e;
  }
  function j(e, t) {
    return m.hasOwnProperty.call(e, t);
  }
  var M =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        U(e).forEach(function (n) {
          t[n] = g(e, n);
        }),
        t
      );
    };
  function Y(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(
          e,
          ((i = r.key),
          (a = void 0),
          "symbol" ==
          typeof (a = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
          })(i, "string"))
            ? a
            : String(a)),
          r
        );
    }
    var i, a;
  }
  function G(e, t, n) {
    return t && Y(e.prototype, t), n && Y(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
  }
  function F() {
    return (
      (F = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      F.apply(this, arguments)
    );
  }
  function B(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), V(e, t);
  }
  function V(e, t) {
    return (
      (V = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
            return (e.__proto__ = t), e;
          }),
      V(e, t)
    );
  }
  function K(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function W(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function H(e, t) {
    var n = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
    if (n) return (n = n.call(e)).next.bind(n);
    if (
      Array.isArray(e) ||
      (n = (function (e, t) {
        if (e) {
          if ("string" == typeof e) return W(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? W(e, t)
              : void 0
          );
        }
      })(e)) ||
      (t && e && "number" == typeof e.length)
    ) {
      n && (e = n);
      var r = 0;
      return function () {
        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  var z = Symbol("mobx-stored-annotations");
  function q(e) {
    return Object.assign(function (t, n) {
      J(t, n, e);
    }, e);
  }
  function J(e, t, n) {
    j(e, z) || R(e, z, F({}, e[z])),
      (function (e) {
        return e.annotationType_ === re;
      })(n) || (e[z][t] = n);
  }
  var $ = Symbol("mobx administration"),
    X = (function () {
      function e(e) {
        void 0 === e && (e = "Atom"),
          (this.name_ = void 0),
          (this.isPendingUnobservation_ = !1),
          (this.isBeingObserved_ = !1),
          (this.observers_ = new Set()),
          (this.batchId_ = void 0),
          (this.diffValue_ = 0),
          (this.lastAccessedBy_ = 0),
          (this.lowestObserverState_ = Xe.NOT_TRACKING_),
          (this.onBOL = void 0),
          (this.onBUOL = void 0),
          (this.name_ = e),
          (this.batchId_ = gt.inBatch ? gt.batchId : NaN);
      }
      var t = e.prototype;
      return (
        (t.onBO = function () {
          this.onBOL &&
            this.onBOL.forEach(function (e) {
              return e();
            });
        }),
        (t.onBUO = function () {
          this.onBUOL &&
            this.onBUOL.forEach(function (e) {
              return e();
            });
        }),
        (t.reportObserved = function () {
          return bt(this);
        }),
        (t.reportChanged = function () {
          (gt.inBatch && this.batchId_ === gt.batchId) ||
            ((gt.stateVersion = gt.stateVersion < Number.MAX_SAFE_INTEGER ? gt.stateVersion + 1 : Number.MIN_SAFE_INTEGER),
            (this.batchId_ = NaN)),
            yt(),
            St(this),
            _t();
        }),
        (t.toString = function () {
          return this.name_;
        }),
        e
      );
    })(),
    Q = N("Atom", X);
  function Z(e, t, n) {
    void 0 === t && (t = E), void 0 === n && (n = E);
    var r,
      i = new X(e);
    return t !== E && Vt(Gt, i, t, r), n !== E && Bt(i, n), i;
  }
  var ee = {
    identity: function (e, t) {
      return e === t;
    },
    structural: function (e, t) {
      return cr(e, t);
    },
    default: function (e, t) {
      return Object.is ? Object.is(e, t) : e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
    },
    shallow: function (e, t) {
      return cr(e, t, 1);
    }
  };
  function te(e, t, n) {
    return Qt(e)
      ? e
      : Array.isArray(e)
      ? Ue.array(e, { name: n })
      : I(e)
      ? Ue.object(e, void 0, { name: n })
      : P(e)
      ? Ue.map(e, { name: n })
      : L(e)
      ? Ue.set(e, { name: n })
      : "function" != typeof e || jt(e) || Xt(e)
      ? e
      : C(e)
      ? Jt(e)
      : xt(n, e);
  }
  function ne(e) {
    return e;
  }
  var re = "override";
  function ie(e, t) {
    return { annotationType_: e, options_: t, make_: ae, extend_: se };
  }
  function ae(e, t, n, r) {
    var i;
    if (null != (i = this.options_) && i.bound) return null === this.extend_(e, t, n, !1) ? 0 : 1;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (jt(n.value)) return 1;
    var a = oe(e, this, t, n, !1);
    return f(r, t, a), 2;
  }
  function se(e, t, n, r) {
    var i = oe(e, this, t, n);
    return e.defineProperty_(t, i, r);
  }
  function oe(e, t, n, r, i) {
    var a, s, o, c, u, l, d, h;
    void 0 === i && (i = gt.safeDescriptors), (h = r), t.annotationType_, h.value;
    var p,
      g = r.value;
    null != (a = t.options_) && a.bound && (g = g.bind(null != (p = e.proxy_) ? p : e.target_));
    return {
      value: We(
        null != (s = null == (o = t.options_) ? void 0 : o.name) ? s : n.toString(),
        g,
        null != (c = null == (u = t.options_) ? void 0 : u.autoAction) && c,
        null != (l = t.options_) && l.bound ? (null != (d = e.proxy_) ? d : e.target_) : void 0
      ),
      configurable: !i || e.isPlainObject_,
      enumerable: !1,
      writable: !i
    };
  }
  function ce(e, t) {
    return { annotationType_: e, options_: t, make_: ue, extend_: le };
  }
  function ue(e, t, n, r) {
    var i;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (null != (i = this.options_) && i.bound && (!j(e.target_, t) || !Xt(e.target_[t])) && null === this.extend_(e, t, n, !1)) return 0;
    if (Xt(n.value)) return 1;
    var a = de(e, this, t, n, !1, !1);
    return f(r, t, a), 2;
  }
  function le(e, t, n, r) {
    var i,
      a = de(e, this, t, n, null == (i = this.options_) ? void 0 : i.bound);
    return e.defineProperty_(t, a, r);
  }
  function de(e, t, n, r, i, a) {
    var s;
    void 0 === a && (a = gt.safeDescriptors), (s = r), t.annotationType_, s.value;
    var o,
      c = r.value;
    (Xt(c) || (c = Jt(c)), i) && ((c = c.bind(null != (o = e.proxy_) ? o : e.target_)).isMobXFlow = !0);
    return { value: c, configurable: !a || e.isPlainObject_, enumerable: !1, writable: !a };
  }
  function he(e, t) {
    return { annotationType_: e, options_: t, make_: pe, extend_: ge };
  }
  function pe(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
  }
  function ge(e, t, n, r) {
    var i;
    return (i = n), this.annotationType_, i.get, e.defineComputedProperty_(t, F({}, this.options_, { get: n.get, set: n.set }), r);
  }
  function fe(e, t) {
    return { annotationType_: e, options_: t, make_: me, extend_: ve };
  }
  function me(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
  }
  function ve(e, t, n, r) {
    var i, a;
    return (
      this.annotationType_,
      e.defineObservableProperty_(t, n.value, null != (i = null == (a = this.options_) ? void 0 : a.enhancer) ? i : te, r)
    );
  }
  var ye = "true",
    _e = be();
  function be(e) {
    return { annotationType_: ye, options_: e, make_: Se, extend_: we };
  }
  function Se(e, t, n, r) {
    var i, a, s, o;
    if (n.get) return Ye.make_(e, t, n, r);
    if (n.set) {
      var c = We(t.toString(), n.set);
      return r === e.target_
        ? null === e.defineProperty_(t, { configurable: !gt.safeDescriptors || e.isPlainObject_, set: c })
          ? 0
          : 2
        : (f(r, t, { configurable: !0, set: c }), 2);
    }
    if (r !== e.target_ && "function" == typeof n.value)
      return C(n.value)
        ? (null != (o = this.options_) && o.autoBind ? Jt.bound : Jt).make_(e, t, n, r)
        : (null != (s = this.options_) && s.autoBind ? xt.bound : xt).make_(e, t, n, r);
    var u,
      l = !1 === (null == (i = this.options_) ? void 0 : i.deep) ? Ue.ref : Ue;
    "function" == typeof n.value &&
      null != (a = this.options_) &&
      a.autoBind &&
      (n.value = n.value.bind(null != (u = e.proxy_) ? u : e.target_));
    return l.make_(e, t, n, r);
  }
  function we(e, t, n, r) {
    var i, a, s;
    if (n.get) return Ye.extend_(e, t, n, r);
    if (n.set) return e.defineProperty_(t, { configurable: !gt.safeDescriptors || e.isPlainObject_, set: We(t.toString(), n.set) }, r);
    "function" == typeof n.value &&
      null != (i = this.options_) &&
      i.autoBind &&
      (n.value = n.value.bind(null != (s = e.proxy_) ? s : e.target_));
    return (!1 === (null == (a = this.options_) ? void 0 : a.deep) ? Ue.ref : Ue).extend_(e, t, n, r);
  }
  var Ee = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
  function Oe(e) {
    return e || Ee;
  }
  Object.freeze(Ee);
  var Ae = fe("observable"),
    Te = fe("observable.ref", { enhancer: ne }),
    Ie = fe("observable.shallow", {
      enhancer: function (e, t, n) {
        return null == e || Kn(e) || In(e) || Dn(e) || jn(e)
          ? e
          : Array.isArray(e)
          ? Ue.array(e, { name: n, deep: !1 })
          : I(e)
          ? Ue.object(e, void 0, { name: n, deep: !1 })
          : P(e)
          ? Ue.map(e, { name: n, deep: !1 })
          : L(e)
          ? Ue.set(e, { name: n, deep: !1 })
          : void 0;
      }
    }),
    Ce = fe("observable.struct", {
      enhancer: function (e, t) {
        return cr(e, t) ? t : e;
      }
    }),
    Re = q(Ae);
  function ke(e) {
    return !0 === e.deep
      ? te
      : !1 === e.deep
      ? ne
      : (t = e.defaultDecorator) && null != (n = null == (r = t.options_) ? void 0 : r.enhancer)
      ? n
      : te;
    var t, n, r;
  }
  function Ne(e, t, n) {
    if (!A(t))
      return Qt(e)
        ? e
        : I(e)
        ? Ue.object(e, t, n)
        : Array.isArray(e)
        ? Ue.array(e, t)
        : P(e)
        ? Ue.map(e, t)
        : L(e)
        ? Ue.set(e, t)
        : "object" == typeof e && null !== e
        ? e
        : Ue.box(e, t);
    J(e, t, Ae);
  }
  p(Ne, Re);
  var Pe,
    Le,
    De = {
      box: function (e, t) {
        var n = Oe(t);
        return new Je(e, ke(n), n.name, !0, n.equals);
      },
      array: function (e, t) {
        var n = Oe(t);
        return (!1 === gt.useProxies || !1 === n.proxy ? nr : yn)(e, ke(n), n.name);
      },
      map: function (e, t) {
        var n = Oe(t);
        return new Ln(e, ke(n), n.name);
      },
      set: function (e, t) {
        var n = Oe(t);
        return new xn(e, ke(n), n.name);
      },
      object: function (e, t, n) {
        return sr(function () {
          return Kt(
            !1 === gt.useProxies || !1 === (null == n ? void 0 : n.proxy)
              ? Fn({}, n)
              : (function (e, t) {
                  var n, r;
                  return S(), (e = Fn(e, t)), null != (r = (n = e[$]).proxy_) ? r : (n.proxy_ = new Proxy(e, an));
                })({}, n),
            e,
            t
          );
        });
      },
      ref: q(Te),
      shallow: q(Ie),
      deep: Re,
      struct: q(Ce)
    },
    Ue = p(Ne, De),
    xe = "computed",
    je = he(xe),
    Me = he("computed.struct", { equals: ee.structural }),
    Ye = function (e, t) {
      if (A(t)) return J(e, t, je);
      if (I(e)) return q(he(xe, e));
      var n = I(t) ? t : {};
      return (n.get = e), n.name || (n.name = e.name || ""), new Ze(n);
    };
  Object.assign(Ye, je), (Ye.struct = q(Me));
  var Ge,
    Fe = 0,
    Be = 1,
    Ve = null != (Pe = null == (Le = g(function () {}, "name")) ? void 0 : Le.configurable) && Pe,
    Ke = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
  function We(e, t, n, r) {
    function i() {
      return (function (e, t, n, r, i) {
        var a = (function (e, t, n, r) {
          var i = !1,
            a = 0,
            s = gt.trackingDerivation,
            o = !t || !s;
          yt();
          var c = gt.allowStateChanges;
          o && (ot(), (c = He(!0)));
          var u = ut(!0),
            l = {
              runAsAction_: o,
              prevDerivation_: s,
              prevAllowStateChanges_: c,
              prevAllowStateReads_: u,
              notifySpy_: i,
              startTime_: a,
              actionId_: Be++,
              parentActionId_: Fe
            };
          return (Fe = l.actionId_), l;
        })(0, t);
        try {
          return n.apply(r, i);
        } catch (e) {
          throw ((a.error_ = e), e);
        } finally {
          !(function (e) {
            Fe !== e.actionId_ && l(30);
            (Fe = e.parentActionId_), void 0 !== e.error_ && (gt.suppressReactionErrors = !0);
            ze(e.prevAllowStateChanges_), lt(e.prevAllowStateReads_), _t(), e.runAsAction_ && ct(e.prevDerivation_);
            gt.suppressReactionErrors = !1;
          })(a);
        }
      })(0, n, t, r || this, arguments);
    }
    return void 0 === n && (n = !1), (i.isMobxAction = !0), Ve && ((Ke.value = e), f(i, "name", Ke)), i;
  }
  function He(e) {
    var t = gt.allowStateChanges;
    return (gt.allowStateChanges = e), t;
  }
  function ze(e) {
    gt.allowStateChanges = e;
  }
  Ge = Symbol.toPrimitive;
  var qe,
    Je = (function (e) {
      function t(t, n, r, i, a) {
        var s;
        return (
          void 0 === r && (r = "ObservableValue"),
          void 0 === a && (a = ee.default),
          ((s = e.call(this, r) || this).enhancer = void 0),
          (s.name_ = void 0),
          (s.equals = void 0),
          (s.hasUnreportedChange_ = !1),
          (s.interceptors_ = void 0),
          (s.changeListeners_ = void 0),
          (s.value_ = void 0),
          (s.dehancer = void 0),
          (s.enhancer = n),
          (s.name_ = r),
          (s.equals = a),
          (s.value_ = n(t, void 0, r)),
          s
        );
      }
      B(t, e);
      var n = t.prototype;
      return (
        (n.dehanceValue = function (e) {
          return void 0 !== this.dehancer ? this.dehancer(e) : e;
        }),
        (n.set = function (e) {
          this.value_, (e = this.prepareNewValue_(e)) !== gt.UNCHANGED && this.setNewValue_(e);
        }),
        (n.prepareNewValue_ = function (e) {
          if (sn(this)) {
            var t = cn(this, { object: this, type: fn, newValue: e });
            if (!t) return gt.UNCHANGED;
            e = t.newValue;
          }
          return (e = this.enhancer(e, this.value_, this.name_)), this.equals(this.value_, e) ? gt.UNCHANGED : e;
        }),
        (n.setNewValue_ = function (e) {
          var t = this.value_;
          (this.value_ = e), this.reportChanged(), un(this) && dn(this, { type: fn, object: this, newValue: e, oldValue: t });
        }),
        (n.get = function () {
          return this.reportObserved(), this.dehanceValue(this.value_);
        }),
        (n.intercept_ = function (e) {
          return on(this, e);
        }),
        (n.observe_ = function (e, t) {
          return (
            t &&
              e({ observableKind: "value", debugObjectName: this.name_, object: this, type: fn, newValue: this.value_, oldValue: void 0 }),
            ln(this, e)
          );
        }),
        (n.raw = function () {
          return this.value_;
        }),
        (n.toJSON = function () {
          return this.get();
        }),
        (n.toString = function () {
          return this.name_ + "[" + this.value_ + "]";
        }),
        (n.valueOf = function () {
          return x(this.get());
        }),
        (n[Ge] = function () {
          return this.valueOf();
        }),
        t
      );
    })(X),
    $e = N("ObservableValue", Je);
  qe = Symbol.toPrimitive;
  var Xe,
    Qe,
    Ze = (function () {
      function e(e) {
        (this.dependenciesState_ = Xe.NOT_TRACKING_),
          (this.observing_ = []),
          (this.newObserving_ = null),
          (this.isBeingObserved_ = !1),
          (this.isPendingUnobservation_ = !1),
          (this.observers_ = new Set()),
          (this.diffValue_ = 0),
          (this.runId_ = 0),
          (this.lastAccessedBy_ = 0),
          (this.lowestObserverState_ = Xe.UP_TO_DATE_),
          (this.unboundDepsCount_ = 0),
          (this.value_ = new tt(null)),
          (this.name_ = void 0),
          (this.triggeredBy_ = void 0),
          (this.isComputing_ = !1),
          (this.isRunningSetter_ = !1),
          (this.derivation = void 0),
          (this.setter_ = void 0),
          (this.isTracing_ = Qe.NONE),
          (this.scope_ = void 0),
          (this.equals_ = void 0),
          (this.requiresReaction_ = void 0),
          (this.keepAlive_ = void 0),
          (this.onBOL = void 0),
          (this.onBUOL = void 0),
          e.get || l(31),
          (this.derivation = e.get),
          (this.name_ = e.name || "ComputedValue"),
          e.set && (this.setter_ = We("ComputedValue-setter", e.set)),
          (this.equals_ = e.equals || (e.compareStructural || e.struct ? ee.structural : ee.default)),
          (this.scope_ = e.context),
          (this.requiresReaction_ = e.requiresReaction),
          (this.keepAlive_ = !!e.keepAlive);
      }
      var t = e.prototype;
      return (
        (t.onBecomeStale_ = function () {
          !(function (e) {
            if (e.lowestObserverState_ !== Xe.UP_TO_DATE_) return;
            (e.lowestObserverState_ = Xe.POSSIBLY_STALE_),
              e.observers_.forEach(function (e) {
                e.dependenciesState_ === Xe.UP_TO_DATE_ && ((e.dependenciesState_ = Xe.POSSIBLY_STALE_), e.onBecomeStale_());
              });
          })(this);
        }),
        (t.onBO = function () {
          this.onBOL &&
            this.onBOL.forEach(function (e) {
              return e();
            });
        }),
        (t.onBUO = function () {
          this.onBUOL &&
            this.onBUOL.forEach(function (e) {
              return e();
            });
        }),
        (t.get = function () {
          if (
            (this.isComputing_ && l(32, this.name_, this.derivation), 0 !== gt.inBatch || 0 !== this.observers_.size || this.keepAlive_)
          ) {
            if ((bt(this), rt(this))) {
              var e = gt.trackingContext;
              this.keepAlive_ && !e && (gt.trackingContext = this),
                this.trackAndCompute() &&
                  (function (e) {
                    if (e.lowestObserverState_ === Xe.STALE_) return;
                    (e.lowestObserverState_ = Xe.STALE_),
                      e.observers_.forEach(function (t) {
                        t.dependenciesState_ === Xe.POSSIBLY_STALE_
                          ? (t.dependenciesState_ = Xe.STALE_)
                          : t.dependenciesState_ === Xe.UP_TO_DATE_ && (e.lowestObserverState_ = Xe.UP_TO_DATE_);
                      });
                  })(this),
                (gt.trackingContext = e);
            }
          } else rt(this) && (this.warnAboutUntrackedRead_(), yt(), (this.value_ = this.computeValue_(!1)), _t());
          var t = this.value_;
          if (nt(t)) throw t.cause;
          return t;
        }),
        (t.set = function (e) {
          if (this.setter_) {
            this.isRunningSetter_ && l(33, this.name_), (this.isRunningSetter_ = !0);
            try {
              this.setter_.call(this.scope_, e);
            } finally {
              this.isRunningSetter_ = !1;
            }
          } else l(34, this.name_);
        }),
        (t.trackAndCompute = function () {
          var e = this.value_,
            t = this.dependenciesState_ === Xe.NOT_TRACKING_,
            n = this.computeValue_(!0),
            r = t || nt(e) || nt(n) || !this.equals_(e, n);
          return r && (this.value_ = n), r;
        }),
        (t.computeValue_ = function (e) {
          this.isComputing_ = !0;
          var t,
            n = He(!1);
          if (e) t = it(this, this.derivation, this.scope_);
          else if (!0 === gt.disableErrorBoundaries) t = this.derivation.call(this.scope_);
          else
            try {
              t = this.derivation.call(this.scope_);
            } catch (e) {
              t = new tt(e);
            }
          return ze(n), (this.isComputing_ = !1), t;
        }),
        (t.suspend_ = function () {
          this.keepAlive_ || (at(this), (this.value_ = void 0));
        }),
        (t.observe_ = function (e, t) {
          var n = this,
            r = !0,
            i = void 0;
          return Mt(function () {
            var a = n.get();
            if (!r || t) {
              var s = ot();
              e({ observableKind: "computed", debugObjectName: n.name_, type: fn, object: n, newValue: a, oldValue: i }), ct(s);
            }
            (r = !1), (i = a);
          });
        }),
        (t.warnAboutUntrackedRead_ = function () {}),
        (t.toString = function () {
          return this.name_ + "[" + this.derivation.toString() + "]";
        }),
        (t.valueOf = function () {
          return x(this.get());
        }),
        (t[qe] = function () {
          return this.valueOf();
        }),
        e
      );
    })(),
    et = N("ComputedValue", Ze);
  !(function (e) {
    (e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
      (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
      (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
      (e[(e.STALE_ = 2)] = "STALE_");
  })(Xe || (Xe = {})),
    (function (e) {
      (e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK");
    })(Qe || (Qe = {}));
  var tt = function (e) {
    (this.cause = void 0), (this.cause = e);
  };
  function nt(e) {
    return e instanceof tt;
  }
  function rt(e) {
    switch (e.dependenciesState_) {
      case Xe.UP_TO_DATE_:
        return !1;
      case Xe.NOT_TRACKING_:
      case Xe.STALE_:
        return !0;
      case Xe.POSSIBLY_STALE_:
        for (var t = ut(!0), n = ot(), r = e.observing_, i = r.length, a = 0; a < i; a++) {
          var s = r[a];
          if (et(s)) {
            if (gt.disableErrorBoundaries) s.get();
            else
              try {
                s.get();
              } catch (e) {
                return ct(n), lt(t), !0;
              }
            if (e.dependenciesState_ === Xe.STALE_) return ct(n), lt(t), !0;
          }
        }
        return dt(e), ct(n), lt(t), !1;
    }
  }
  function it(e, t, n) {
    var r = ut(!0);
    dt(e), (e.newObserving_ = new Array(e.observing_.length + 100)), (e.unboundDepsCount_ = 0), (e.runId_ = ++gt.runId);
    var i,
      a = gt.trackingDerivation;
    if (((gt.trackingDerivation = e), gt.inBatch++, !0 === gt.disableErrorBoundaries)) i = t.call(n);
    else
      try {
        i = t.call(n);
      } catch (e) {
        i = new tt(e);
      }
    return (
      gt.inBatch--,
      (gt.trackingDerivation = a),
      (function (e) {
        for (
          var t = e.observing_, n = (e.observing_ = e.newObserving_), r = Xe.UP_TO_DATE_, i = 0, a = e.unboundDepsCount_, s = 0;
          s < a;
          s++
        ) {
          var o = n[s];
          0 === o.diffValue_ && ((o.diffValue_ = 1), i !== s && (n[i] = o), i++), o.dependenciesState_ > r && (r = o.dependenciesState_);
        }
        (n.length = i), (e.newObserving_ = null), (a = t.length);
        for (; a--; ) {
          var c = t[a];
          0 === c.diffValue_ && mt(c, e), (c.diffValue_ = 0);
        }
        for (; i--; ) {
          var u = n[i];
          1 === u.diffValue_ && ((u.diffValue_ = 0), ft(u, e));
        }
        r !== Xe.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
      })(e),
      lt(r),
      i
    );
  }
  function at(e) {
    var t = e.observing_;
    e.observing_ = [];
    for (var n = t.length; n--; ) mt(t[n], e);
    e.dependenciesState_ = Xe.NOT_TRACKING_;
  }
  function st(e) {
    var t = ot();
    try {
      return e();
    } finally {
      ct(t);
    }
  }
  function ot() {
    var e = gt.trackingDerivation;
    return (gt.trackingDerivation = null), e;
  }
  function ct(e) {
    gt.trackingDerivation = e;
  }
  function ut(e) {
    var t = gt.allowStateReads;
    return (gt.allowStateReads = e), t;
  }
  function lt(e) {
    gt.allowStateReads = e;
  }
  function dt(e) {
    if (e.dependenciesState_ !== Xe.UP_TO_DATE_) {
      e.dependenciesState_ = Xe.UP_TO_DATE_;
      for (var t = e.observing_, n = t.length; n--; ) t[n].lowestObserverState_ = Xe.UP_TO_DATE_;
    }
  }
  var ht = function () {
      (this.version = 6),
        (this.UNCHANGED = {}),
        (this.trackingDerivation = null),
        (this.trackingContext = null),
        (this.runId = 0),
        (this.mobxGuid = 0),
        (this.inBatch = 0),
        (this.batchId = Number.MIN_SAFE_INTEGER),
        (this.pendingUnobservations = []),
        (this.pendingReactions = []),
        (this.isRunningReactions = !1),
        (this.allowStateChanges = !1),
        (this.allowStateReads = !0),
        (this.enforceActions = !0),
        (this.spyListeners = []),
        (this.globalReactionErrorHandlers = []),
        (this.computedRequiresReaction = !1),
        (this.reactionRequiresObservable = !1),
        (this.observableRequiresReaction = !1),
        (this.disableErrorBoundaries = !1),
        (this.suppressReactionErrors = !1),
        (this.useProxies = !0),
        (this.verifyProxies = !1),
        (this.safeDescriptors = !0),
        (this.stateVersion = Number.MIN_SAFE_INTEGER);
    },
    pt = !0,
    gt = (function () {
      var e = h();
      return (
        e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (pt = !1),
        e.__mobxGlobals && e.__mobxGlobals.version !== new ht().version && (pt = !1),
        pt
          ? e.__mobxGlobals
            ? ((e.__mobxInstanceCount += 1), e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}), e.__mobxGlobals)
            : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new ht()))
          : (setTimeout(function () {
              l(35);
            }, 1),
            new ht())
      );
    })();
  function ft(e, t) {
    e.observers_.add(t), e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_);
  }
  function mt(e, t) {
    e.observers_.delete(t), 0 === e.observers_.size && vt(e);
  }
  function vt(e) {
    !1 === e.isPendingUnobservation_ && ((e.isPendingUnobservation_ = !0), gt.pendingUnobservations.push(e));
  }
  function yt() {
    0 === gt.inBatch && (gt.batchId = gt.batchId < Number.MAX_SAFE_INTEGER ? gt.batchId + 1 : Number.MIN_SAFE_INTEGER), gt.inBatch++;
  }
  function _t() {
    if (0 == --gt.inBatch) {
      At();
      for (var e = gt.pendingUnobservations, t = 0; t < e.length; t++) {
        var n = e[t];
        (n.isPendingUnobservation_ = !1),
          0 === n.observers_.size && (n.isBeingObserved_ && ((n.isBeingObserved_ = !1), n.onBUO()), n instanceof Ze && n.suspend_());
      }
      gt.pendingUnobservations = [];
    }
  }
  function bt(e) {
    var t = gt.trackingDerivation;
    return null !== t
      ? (t.runId_ !== e.lastAccessedBy_ &&
          ((e.lastAccessedBy_ = t.runId_),
          (t.newObserving_[t.unboundDepsCount_++] = e),
          !e.isBeingObserved_ && gt.trackingContext && ((e.isBeingObserved_ = !0), e.onBO())),
        e.isBeingObserved_)
      : (0 === e.observers_.size && gt.inBatch > 0 && vt(e), !1);
  }
  function St(e) {
    e.lowestObserverState_ !== Xe.STALE_ &&
      ((e.lowestObserverState_ = Xe.STALE_),
      e.observers_.forEach(function (e) {
        e.dependenciesState_ === Xe.UP_TO_DATE_ && e.onBecomeStale_(), (e.dependenciesState_ = Xe.STALE_);
      }));
  }
  var wt = (function () {
      function e(e, t, n, r) {
        void 0 === e && (e = "Reaction"),
          (this.name_ = void 0),
          (this.onInvalidate_ = void 0),
          (this.errorHandler_ = void 0),
          (this.requiresObservable_ = void 0),
          (this.observing_ = []),
          (this.newObserving_ = []),
          (this.dependenciesState_ = Xe.NOT_TRACKING_),
          (this.diffValue_ = 0),
          (this.runId_ = 0),
          (this.unboundDepsCount_ = 0),
          (this.isDisposed_ = !1),
          (this.isScheduled_ = !1),
          (this.isTrackPending_ = !1),
          (this.isRunning_ = !1),
          (this.isTracing_ = Qe.NONE),
          (this.name_ = e),
          (this.onInvalidate_ = t),
          (this.errorHandler_ = n),
          (this.requiresObservable_ = r);
      }
      var t = e.prototype;
      return (
        (t.onBecomeStale_ = function () {
          this.schedule_();
        }),
        (t.schedule_ = function () {
          this.isScheduled_ || ((this.isScheduled_ = !0), gt.pendingReactions.push(this), At());
        }),
        (t.isScheduled = function () {
          return this.isScheduled_;
        }),
        (t.runReaction_ = function () {
          if (!this.isDisposed_) {
            yt(), (this.isScheduled_ = !1);
            var e = gt.trackingContext;
            if (((gt.trackingContext = this), rt(this))) {
              this.isTrackPending_ = !0;
              try {
                this.onInvalidate_();
              } catch (e) {
                this.reportExceptionInDerivation_(e);
              }
            }
            (gt.trackingContext = e), _t();
          }
        }),
        (t.track = function (e) {
          if (!this.isDisposed_) {
            yt(), (this.isRunning_ = !0);
            var t = gt.trackingContext;
            gt.trackingContext = this;
            var n = it(this, e, void 0);
            (gt.trackingContext = t),
              (this.isRunning_ = !1),
              (this.isTrackPending_ = !1),
              this.isDisposed_ && at(this),
              nt(n) && this.reportExceptionInDerivation_(n.cause),
              _t();
          }
        }),
        (t.reportExceptionInDerivation_ = function (e) {
          var t = this;
          if (this.errorHandler_) this.errorHandler_(e, this);
          else {
            if (gt.disableErrorBoundaries) throw e;
            var n = "[mobx] uncaught error in '" + this + "'";
            gt.suppressReactionErrors || console.error(n, e),
              gt.globalReactionErrorHandlers.forEach(function (n) {
                return n(e, t);
              });
          }
        }),
        (t.dispose = function () {
          this.isDisposed_ || ((this.isDisposed_ = !0), this.isRunning_ || (yt(), at(this), _t()));
        }),
        (t.getDisposer_ = function (e) {
          var t = this,
            n = function n() {
              t.dispose(), null == e || null == e.removeEventListener || e.removeEventListener("abort", n);
            };
          return null == e || null == e.addEventListener || e.addEventListener("abort", n), (n[$] = this), n;
        }),
        (t.toString = function () {
          return "Reaction[" + this.name_ + "]";
        }),
        (t.trace = function (e) {}),
        e
      );
    })(),
    Et = 100,
    Ot = function (e) {
      return e();
    };
  function At() {
    gt.inBatch > 0 || gt.isRunningReactions || Ot(Tt);
  }
  function Tt() {
    gt.isRunningReactions = !0;
    for (var e = gt.pendingReactions, t = 0; e.length > 0; ) {
      ++t === Et && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
      for (var n = e.splice(0), r = 0, i = n.length; r < i; r++) n[r].runReaction_();
    }
    gt.isRunningReactions = !1;
  }
  var It = N("Reaction", wt);
  var Ct = "action",
    Rt = "autoAction",
    kt = ie(Ct),
    Nt = ie("action.bound", { bound: !0 }),
    Pt = ie(Rt, { autoAction: !0 }),
    Lt = ie("autoAction.bound", { autoAction: !0, bound: !0 });
  function Dt(e) {
    return function (t, n) {
      return O(t)
        ? We(t.name || "<unnamed action>", t, e)
        : O(n)
        ? We(t, n, e)
        : A(n)
        ? J(t, n, e ? Pt : kt)
        : A(t)
        ? q(ie(e ? Rt : Ct, { name: t, autoAction: e }))
        : void 0;
    };
  }
  var Ut = Dt(!1);
  Object.assign(Ut, kt);
  var xt = Dt(!0);
  function jt(e) {
    return O(e) && !0 === e.isMobxAction;
  }
  function Mt(e, t) {
    var n, r, i, a, s;
    void 0 === t && (t = y);
    var o,
      c = null != (n = null == (r = t) ? void 0 : r.name) ? n : "Autorun";
    if (!t.scheduler && !t.delay)
      o = new wt(
        c,
        function () {
          this.track(d);
        },
        t.onError,
        t.requiresObservable
      );
    else {
      var u = (function (e) {
          return e.scheduler
            ? e.scheduler
            : e.delay
            ? function (t) {
                return setTimeout(t, e.delay);
              }
            : Yt;
        })(t),
        l = !1;
      o = new wt(
        c,
        function () {
          l ||
            ((l = !0),
            u(function () {
              (l = !1), o.isDisposed_ || o.track(d);
            }));
        },
        t.onError,
        t.requiresObservable
      );
    }
    function d() {
      e(o);
    }
    return (null != (i = t) && null != (a = i.signal) && a.aborted) || o.schedule_(), o.getDisposer_(null == (s = t) ? void 0 : s.signal);
  }
  Object.assign(xt, Pt), (Ut.bound = q(Nt)), (xt.bound = q(Lt));
  var Yt = function (e) {
    return e();
  };
  var Gt = "onBO",
    Ft = "onBUO";
  function Bt(e, t, n) {
    return Vt(Ft, e, t, n);
  }
  function Vt(e, t, n, r) {
    var i = "function" == typeof r ? rr(t, n) : rr(t),
      a = O(r) ? r : n,
      s = e + "L";
    return (
      i[s] ? i[s].add(a) : (i[s] = new Set([a])),
      function () {
        var e = i[s];
        e && (e.delete(a), 0 === e.size && delete i[s]);
      }
    );
  }
  function Kt(e, t, n, r) {
    var i = M(t);
    return (
      sr(function () {
        var t = Fn(e, r)[$];
        U(i).forEach(function (e) {
          t.extend_(e, i[e], !n || !(e in n) || n[e]);
        });
      }),
      e
    );
  }
  var Wt = 0;
  function Ht() {
    this.message = "FLOW_CANCELLED";
  }
  Ht.prototype = Object.create(Error.prototype);
  var zt = ce("flow"),
    qt = ce("flow.bound", { bound: !0 }),
    Jt = Object.assign(function (e, t) {
      if (A(t)) return J(e, t, zt);
      var n = e,
        r = n.name || "<unnamed flow>",
        i = function () {
          var e,
            t = arguments,
            i = ++Wt,
            a = Ut(r + " - runid: " + i + " - init", n).apply(this, t),
            s = void 0,
            o = new Promise(function (t, n) {
              var o = 0;
              function c(e) {
                var t;
                s = void 0;
                try {
                  t = Ut(r + " - runid: " + i + " - yield " + o++, a.next).call(a, e);
                } catch (e) {
                  return n(e);
                }
                l(t);
              }
              function u(e) {
                var t;
                s = void 0;
                try {
                  t = Ut(r + " - runid: " + i + " - yield " + o++, a.throw).call(a, e);
                } catch (e) {
                  return n(e);
                }
                l(t);
              }
              function l(e) {
                if (!O(null == e ? void 0 : e.then)) return e.done ? t(e.value) : (s = Promise.resolve(e.value)).then(c, u);
                e.then(l, n);
              }
              (e = n), c(void 0);
            });
          return (
            (o.cancel = Ut(r + " - runid: " + i + " - cancel", function () {
              try {
                s && $t(s);
                var t = a.return(void 0),
                  n = Promise.resolve(t.value);
                n.then(E, E), $t(n), e(new Ht());
              } catch (t) {
                e(t);
              }
            })),
            o
          );
        };
      return (i.isMobXFlow = !0), i;
    }, zt);
  function $t(e) {
    O(e.cancel) && e.cancel();
  }
  function Xt(e) {
    return !0 === (null == e ? void 0 : e.isMobXFlow);
  }
  function Qt(e) {
    return (function (e, t) {
      return !!e && (void 0 !== t ? !!Kn(e) && e[$].values_.has(t) : Kn(e) || !!e[$] || Q(e) || It(e) || et(e));
    })(e);
  }
  function Zt(e, t, n) {
    return e.set(t, n), n;
  }
  function en(e, t) {
    if (null == e || "object" != typeof e || e instanceof Date || !Qt(e)) return e;
    if ($e(e) || et(e)) return en(e.get(), t);
    if (t.has(e)) return t.get(e);
    if (In(e)) {
      var n = Zt(t, e, new Array(e.length));
      return (
        e.forEach(function (e, r) {
          n[r] = en(e, t);
        }),
        n
      );
    }
    if (jn(e)) {
      var r = Zt(t, e, new Set());
      return (
        e.forEach(function (e) {
          r.add(en(e, t));
        }),
        r
      );
    }
    if (Dn(e)) {
      var i = Zt(t, e, new Map());
      return (
        e.forEach(function (e, n) {
          i.set(n, en(e, t));
        }),
        i
      );
    }
    var a = Zt(t, e, {});
    return (
      (function (e) {
        if (Kn(e)) return e[$].ownKeys_();
        l(38);
      })(e).forEach(function (n) {
        m.propertyIsEnumerable.call(e, n) && (a[n] = en(e[n], t));
      }),
      a
    );
  }
  function tn(e, t) {
    return en(e, new Map());
  }
  function nn(e, t) {
    void 0 === t && (t = void 0), yt();
    try {
      return e.apply(t);
    } finally {
      _t();
    }
  }
  function rn(e) {
    return e[$];
  }
  Jt.bound = q(qt);
  var an = {
    has: function (e, t) {
      return rn(e).has_(t);
    },
    get: function (e, t) {
      return rn(e).get_(t);
    },
    set: function (e, t, n) {
      var r;
      return !!A(t) && (null == (r = rn(e).set_(t, n, !0)) || r);
    },
    deleteProperty: function (e, t) {
      var n;
      return !!A(t) && (null == (n = rn(e).delete_(t, !0)) || n);
    },
    defineProperty: function (e, t, n) {
      var r;
      return null == (r = rn(e).defineProperty_(t, n)) || r;
    },
    ownKeys: function (e) {
      return rn(e).ownKeys_();
    },
    preventExtensions: function (e) {
      l(13);
    }
  };
  function sn(e) {
    return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
  }
  function on(e, t) {
    var n = e.interceptors_ || (e.interceptors_ = []);
    return (
      n.push(t),
      w(function () {
        var e = n.indexOf(t);
        -1 !== e && n.splice(e, 1);
      })
    );
  }
  function cn(e, t) {
    var n = ot();
    try {
      for (var r = [].concat(e.interceptors_ || []), i = 0, a = r.length; i < a && ((t = r[i](t)) && !t.type && l(14), t); i++);
      return t;
    } finally {
      ct(n);
    }
  }
  function un(e) {
    return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
  }
  function ln(e, t) {
    var n = e.changeListeners_ || (e.changeListeners_ = []);
    return (
      n.push(t),
      w(function () {
        var e = n.indexOf(t);
        -1 !== e && n.splice(e, 1);
      })
    );
  }
  function dn(e, t) {
    var n = ot(),
      r = e.changeListeners_;
    if (r) {
      for (var i = 0, a = (r = r.slice()).length; i < a; i++) r[i](t);
      ct(n);
    }
  }
  var hn = Symbol("mobx-keys");
  function pn(e, t, n) {
    return I(e)
      ? Kt(e, e, t, n)
      : (sr(function () {
          var r = Fn(e, n)[$];
          if (!e[hn]) {
            var i = Object.getPrototypeOf(e),
              a = new Set([].concat(U(e), U(i)));
            a.delete("constructor"), a.delete($), R(i, hn, a);
          }
          e[hn].forEach(function (e) {
            return r.make_(e, !t || !(e in t) || t[e]);
          });
        }),
        e);
  }
  var gn = "splice",
    fn = "update",
    mn = {
      get: function (e, t) {
        var n = e[$];
        return t === $
          ? n
          : "length" === t
          ? n.getArrayLength_()
          : "string" != typeof t || isNaN(t)
          ? j(_n, t)
            ? _n[t]
            : e[t]
          : n.get_(parseInt(t));
      },
      set: function (e, t, n) {
        var r = e[$];
        return "length" === t && r.setArrayLength_(n), "symbol" == typeof t || isNaN(t) ? (e[t] = n) : r.set_(parseInt(t), n), !0;
      },
      preventExtensions: function () {
        l(15);
      }
    },
    vn = (function () {
      function e(e, t, n, r) {
        void 0 === e && (e = "ObservableArray"),
          (this.owned_ = void 0),
          (this.legacyMode_ = void 0),
          (this.atom_ = void 0),
          (this.values_ = []),
          (this.interceptors_ = void 0),
          (this.changeListeners_ = void 0),
          (this.enhancer_ = void 0),
          (this.dehancer = void 0),
          (this.proxy_ = void 0),
          (this.lastKnownLength_ = 0),
          (this.owned_ = n),
          (this.legacyMode_ = r),
          (this.atom_ = new X(e)),
          (this.enhancer_ = function (e, n) {
            return t(e, n, "ObservableArray[..]");
          });
      }
      var t = e.prototype;
      return (
        (t.dehanceValue_ = function (e) {
          return void 0 !== this.dehancer ? this.dehancer(e) : e;
        }),
        (t.dehanceValues_ = function (e) {
          return void 0 !== this.dehancer && e.length > 0 ? e.map(this.dehancer) : e;
        }),
        (t.intercept_ = function (e) {
          return on(this, e);
        }),
        (t.observe_ = function (e, t) {
          return (
            void 0 === t && (t = !1),
            t &&
              e({
                observableKind: "array",
                object: this.proxy_,
                debugObjectName: this.atom_.name_,
                type: "splice",
                index: 0,
                added: this.values_.slice(),
                addedCount: this.values_.length,
                removed: [],
                removedCount: 0
              }),
            ln(this, e)
          );
        }),
        (t.getArrayLength_ = function () {
          return this.atom_.reportObserved(), this.values_.length;
        }),
        (t.setArrayLength_ = function (e) {
          ("number" != typeof e || isNaN(e) || e < 0) && l("Out of range: " + e);
          var t = this.values_.length;
          if (e !== t)
            if (e > t) {
              for (var n = new Array(e - t), r = 0; r < e - t; r++) n[r] = void 0;
              this.spliceWithArray_(t, 0, n);
            } else this.spliceWithArray_(e, t - e);
        }),
        (t.updateArrayLength_ = function (e, t) {
          e !== this.lastKnownLength_ && l(16), (this.lastKnownLength_ += t), this.legacyMode_ && t > 0 && tr(e + t + 1);
        }),
        (t.spliceWithArray_ = function (e, t, n) {
          var r = this;
          this.atom_;
          var i = this.values_.length;
          if (
            (void 0 === e ? (e = 0) : e > i ? (e = i) : e < 0 && (e = Math.max(0, i + e)),
            (t = 1 === arguments.length ? i - e : null == t ? 0 : Math.max(0, Math.min(t, i - e))),
            void 0 === n && (n = v),
            sn(this))
          ) {
            var a = cn(this, { object: this.proxy_, type: gn, index: e, removedCount: t, added: n });
            if (!a) return v;
            (t = a.removedCount), (n = a.added);
          }
          if (
            ((n =
              0 === n.length
                ? n
                : n.map(function (e) {
                    return r.enhancer_(e, void 0);
                  })),
            this.legacyMode_)
          ) {
            var s = n.length - t;
            this.updateArrayLength_(i, s);
          }
          var o = this.spliceItemsIntoValues_(e, t, n);
          return (0 === t && 0 === n.length) || this.notifyArraySplice_(e, n, o), this.dehanceValues_(o);
        }),
        (t.spliceItemsIntoValues_ = function (e, t, n) {
          var r;
          if (n.length < 1e4) return (r = this.values_).splice.apply(r, [e, t].concat(n));
          var i = this.values_.slice(e, e + t),
            a = this.values_.slice(e + t);
          this.values_.length += n.length - t;
          for (var s = 0; s < n.length; s++) this.values_[e + s] = n[s];
          for (var o = 0; o < a.length; o++) this.values_[e + n.length + o] = a[o];
          return i;
        }),
        (t.notifyArrayChildUpdate_ = function (e, t, n) {
          var r = !this.owned_ && !1,
            i = un(this),
            a =
              i || r
                ? {
                    observableKind: "array",
                    object: this.proxy_,
                    type: fn,
                    debugObjectName: this.atom_.name_,
                    index: e,
                    newValue: t,
                    oldValue: n
                  }
                : null;
          this.atom_.reportChanged(), i && dn(this, a);
        }),
        (t.notifyArraySplice_ = function (e, t, n) {
          var r = !this.owned_ && !1,
            i = un(this),
            a =
              i || r
                ? {
                    observableKind: "array",
                    object: this.proxy_,
                    debugObjectName: this.atom_.name_,
                    type: gn,
                    index: e,
                    removed: n,
                    added: t,
                    removedCount: n.length,
                    addedCount: t.length
                  }
                : null;
          this.atom_.reportChanged(), i && dn(this, a);
        }),
        (t.get_ = function (e) {
          if (!(this.legacyMode_ && e >= this.values_.length)) return this.atom_.reportObserved(), this.dehanceValue_(this.values_[e]);
          console.warn("[mobx] Out of bounds read: " + e);
        }),
        (t.set_ = function (e, t) {
          var n = this.values_;
          if ((this.legacyMode_ && e > n.length && l(17, e, n.length), e < n.length)) {
            this.atom_;
            var r = n[e];
            if (sn(this)) {
              var i = cn(this, { type: fn, object: this.proxy_, index: e, newValue: t });
              if (!i) return;
              t = i.newValue;
            }
            (t = this.enhancer_(t, r)) !== r && ((n[e] = t), this.notifyArrayChildUpdate_(e, t, r));
          } else {
            for (var a = new Array(e + 1 - n.length), s = 0; s < a.length - 1; s++) a[s] = void 0;
            (a[a.length - 1] = t), this.spliceWithArray_(n.length, 0, a);
          }
        }),
        e
      );
    })();
  function yn(e, t, n, r) {
    return (
      void 0 === n && (n = "ObservableArray"),
      void 0 === r && (r = !1),
      S(),
      sr(function () {
        var i = new vn(n, t, r, !1);
        k(i.values_, $, i);
        var a = new Proxy(i.values_, mn);
        return (i.proxy_ = a), e && e.length && i.spliceWithArray_(0, 0, e), a;
      })
    );
  }
  var _n = {
    clear: function () {
      return this.splice(0);
    },
    replace: function (e) {
      var t = this[$];
      return t.spliceWithArray_(0, t.values_.length, e);
    },
    toJSON: function () {
      return this.slice();
    },
    splice: function (e, t) {
      for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
      var a = this[$];
      switch (arguments.length) {
        case 0:
          return [];
        case 1:
          return a.spliceWithArray_(e);
        case 2:
          return a.spliceWithArray_(e, t);
      }
      return a.spliceWithArray_(e, t, r);
    },
    spliceWithArray: function (e, t, n) {
      return this[$].spliceWithArray_(e, t, n);
    },
    push: function () {
      for (var e = this[$], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
      return e.spliceWithArray_(e.values_.length, 0, n), e.values_.length;
    },
    pop: function () {
      return this.splice(Math.max(this[$].values_.length - 1, 0), 1)[0];
    },
    shift: function () {
      return this.splice(0, 1)[0];
    },
    unshift: function () {
      for (var e = this[$], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
      return e.spliceWithArray_(0, 0, n), e.values_.length;
    },
    reverse: function () {
      return gt.trackingDerivation && l(37, "reverse"), this.replace(this.slice().reverse()), this;
    },
    sort: function () {
      gt.trackingDerivation && l(37, "sort");
      var e = this.slice();
      return e.sort.apply(e, arguments), this.replace(e), this;
    },
    remove: function (e) {
      var t = this[$],
        n = t.dehanceValues_(t.values_).indexOf(e);
      return n > -1 && (this.splice(n, 1), !0);
    }
  };
  function bn(e, t) {
    "function" == typeof Array.prototype[e] && (_n[e] = t(e));
  }
  function Sn(e) {
    return function () {
      var t = this[$];
      t.atom_.reportObserved();
      var n = t.dehanceValues_(t.values_);
      return n[e].apply(n, arguments);
    };
  }
  function wn(e) {
    return function (t, n) {
      var r = this,
        i = this[$];
      return (
        i.atom_.reportObserved(),
        i.dehanceValues_(i.values_)[e](function (e, i) {
          return t.call(n, e, i, r);
        })
      );
    };
  }
  function En(e) {
    return function () {
      var t = this,
        n = this[$];
      n.atom_.reportObserved();
      var r = n.dehanceValues_(n.values_),
        i = arguments[0];
      return (
        (arguments[0] = function (e, n, r) {
          return i(e, n, r, t);
        }),
        r[e].apply(r, arguments)
      );
    };
  }
  bn("concat", Sn),
    bn("flat", Sn),
    bn("includes", Sn),
    bn("indexOf", Sn),
    bn("join", Sn),
    bn("lastIndexOf", Sn),
    bn("slice", Sn),
    bn("toString", Sn),
    bn("toLocaleString", Sn),
    bn("every", wn),
    bn("filter", wn),
    bn("find", wn),
    bn("findIndex", wn),
    bn("flatMap", wn),
    bn("forEach", wn),
    bn("map", wn),
    bn("some", wn),
    bn("reduce", En),
    bn("reduceRight", En);
  var On,
    An,
    Tn = N("ObservableArrayAdministration", vn);
  function In(e) {
    return T(e) && Tn(e[$]);
  }
  var Cn = {},
    Rn = "add",
    kn = "delete";
  (On = Symbol.iterator), (An = Symbol.toStringTag);
  var Nn,
    Pn,
    Ln = (function () {
      function e(e, t, n) {
        var r = this;
        void 0 === t && (t = te),
          void 0 === n && (n = "ObservableMap"),
          (this.enhancer_ = void 0),
          (this.name_ = void 0),
          (this[$] = Cn),
          (this.data_ = void 0),
          (this.hasMap_ = void 0),
          (this.keysAtom_ = void 0),
          (this.interceptors_ = void 0),
          (this.changeListeners_ = void 0),
          (this.dehancer = void 0),
          (this.enhancer_ = t),
          (this.name_ = n),
          O(Map) || l(18),
          sr(function () {
            (r.keysAtom_ = Z("ObservableMap.keys()")), (r.data_ = new Map()), (r.hasMap_ = new Map()), e && r.merge(e);
          });
      }
      var t = e.prototype;
      return (
        (t.has_ = function (e) {
          return this.data_.has(e);
        }),
        (t.has = function (e) {
          var t = this;
          if (!gt.trackingDerivation) return this.has_(e);
          var n = this.hasMap_.get(e);
          if (!n) {
            var r = (n = new Je(this.has_(e), ne, "ObservableMap.key?", !1));
            this.hasMap_.set(e, r),
              Bt(r, function () {
                return t.hasMap_.delete(e);
              });
          }
          return n.get();
        }),
        (t.set = function (e, t) {
          var n = this.has_(e);
          if (sn(this)) {
            var r = cn(this, { type: n ? fn : Rn, object: this, newValue: t, name: e });
            if (!r) return this;
            t = r.newValue;
          }
          return n ? this.updateValue_(e, t) : this.addValue_(e, t), this;
        }),
        (t.delete = function (e) {
          var t = this;
          if ((this.keysAtom_, sn(this)) && !cn(this, { type: kn, object: this, name: e })) return !1;
          if (this.has_(e)) {
            var n = un(this),
              r = n
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: kn,
                    object: this,
                    oldValue: this.data_.get(e).value_,
                    name: e
                  }
                : null;
            return (
              nn(function () {
                var n;
                t.keysAtom_.reportChanged(),
                  null == (n = t.hasMap_.get(e)) || n.setNewValue_(!1),
                  t.data_.get(e).setNewValue_(void 0),
                  t.data_.delete(e);
              }),
              n && dn(this, r),
              !0
            );
          }
          return !1;
        }),
        (t.updateValue_ = function (e, t) {
          var n = this.data_.get(e);
          if ((t = n.prepareNewValue_(t)) !== gt.UNCHANGED) {
            var r = un(this),
              i = r
                ? { observableKind: "map", debugObjectName: this.name_, type: fn, object: this, oldValue: n.value_, name: e, newValue: t }
                : null;
            n.setNewValue_(t), r && dn(this, i);
          }
        }),
        (t.addValue_ = function (e, t) {
          var n = this;
          this.keysAtom_,
            nn(function () {
              var r,
                i = new Je(t, n.enhancer_, "ObservableMap.key", !1);
              n.data_.set(e, i), (t = i.value_), null == (r = n.hasMap_.get(e)) || r.setNewValue_(!0), n.keysAtom_.reportChanged();
            });
          var r = un(this),
            i = r ? { observableKind: "map", debugObjectName: this.name_, type: Rn, object: this, name: e, newValue: t } : null;
          r && dn(this, i);
        }),
        (t.get = function (e) {
          return this.has(e) ? this.dehanceValue_(this.data_.get(e).get()) : this.dehanceValue_(void 0);
        }),
        (t.dehanceValue_ = function (e) {
          return void 0 !== this.dehancer ? this.dehancer(e) : e;
        }),
        (t.keys = function () {
          return this.keysAtom_.reportObserved(), this.data_.keys();
        }),
        (t.values = function () {
          var e = this,
            t = this.keys();
          return dr({
            next: function () {
              var n = t.next(),
                r = n.done,
                i = n.value;
              return { done: r, value: r ? void 0 : e.get(i) };
            }
          });
        }),
        (t.entries = function () {
          var e = this,
            t = this.keys();
          return dr({
            next: function () {
              var n = t.next(),
                r = n.done,
                i = n.value;
              return { done: r, value: r ? void 0 : [i, e.get(i)] };
            }
          });
        }),
        (t[On] = function () {
          return this.entries();
        }),
        (t.forEach = function (e, t) {
          for (var n, r = H(this); !(n = r()).done; ) {
            var i = n.value,
              a = i[0],
              s = i[1];
            e.call(t, s, a, this);
          }
        }),
        (t.merge = function (e) {
          var t = this;
          return (
            Dn(e) && (e = new Map(e)),
            nn(function () {
              I(e)
                ? (function (e) {
                    var t = Object.keys(e);
                    if (!D) return t;
                    var n = Object.getOwnPropertySymbols(e);
                    return n.length
                      ? [].concat(
                          t,
                          n.filter(function (t) {
                            return m.propertyIsEnumerable.call(e, t);
                          })
                        )
                      : t;
                  })(e).forEach(function (n) {
                    return t.set(n, e[n]);
                  })
                : Array.isArray(e)
                ? e.forEach(function (e) {
                    var n = e[0],
                      r = e[1];
                    return t.set(n, r);
                  })
                : P(e)
                ? (e.constructor !== Map && l(19, e),
                  e.forEach(function (e, n) {
                    return t.set(n, e);
                  }))
                : null != e && l(20, e);
            }),
            this
          );
        }),
        (t.clear = function () {
          var e = this;
          nn(function () {
            st(function () {
              for (var t, n = H(e.keys()); !(t = n()).done; ) {
                var r = t.value;
                e.delete(r);
              }
            });
          });
        }),
        (t.replace = function (e) {
          var t = this;
          return (
            nn(function () {
              for (
                var n,
                  r = (function (e) {
                    if (P(e) || Dn(e)) return e;
                    if (Array.isArray(e)) return new Map(e);
                    if (I(e)) {
                      var t = new Map();
                      for (var n in e) t.set(n, e[n]);
                      return t;
                    }
                    return l(21, e);
                  })(e),
                  i = new Map(),
                  a = !1,
                  s = H(t.data_.keys());
                !(n = s()).done;

              ) {
                var o = n.value;
                if (!r.has(o))
                  if (t.delete(o)) a = !0;
                  else {
                    var c = t.data_.get(o);
                    i.set(o, c);
                  }
              }
              for (var u, d = H(r.entries()); !(u = d()).done; ) {
                var h = u.value,
                  p = h[0],
                  g = h[1],
                  f = t.data_.has(p);
                if ((t.set(p, g), t.data_.has(p))) {
                  var m = t.data_.get(p);
                  i.set(p, m), f || (a = !0);
                }
              }
              if (!a)
                if (t.data_.size !== i.size) t.keysAtom_.reportChanged();
                else
                  for (var v = t.data_.keys(), y = i.keys(), _ = v.next(), b = y.next(); !_.done; ) {
                    if (_.value !== b.value) {
                      t.keysAtom_.reportChanged();
                      break;
                    }
                    (_ = v.next()), (b = y.next());
                  }
              t.data_ = i;
            }),
            this
          );
        }),
        (t.toString = function () {
          return "[object ObservableMap]";
        }),
        (t.toJSON = function () {
          return Array.from(this);
        }),
        (t.observe_ = function (e, t) {
          return ln(this, e);
        }),
        (t.intercept_ = function (e) {
          return on(this, e);
        }),
        G(e, [
          {
            key: "size",
            get: function () {
              return this.keysAtom_.reportObserved(), this.data_.size;
            }
          },
          {
            key: An,
            get: function () {
              return "Map";
            }
          }
        ]),
        e
      );
    })(),
    Dn = N("ObservableMap", Ln);
  var Un = {};
  (Nn = Symbol.iterator), (Pn = Symbol.toStringTag);
  var xn = (function () {
      function e(e, t, n) {
        var r = this;
        void 0 === t && (t = te),
          void 0 === n && (n = "ObservableSet"),
          (this.name_ = void 0),
          (this[$] = Un),
          (this.data_ = new Set()),
          (this.atom_ = void 0),
          (this.changeListeners_ = void 0),
          (this.interceptors_ = void 0),
          (this.dehancer = void 0),
          (this.enhancer_ = void 0),
          (this.name_ = n),
          O(Set) || l(22),
          (this.enhancer_ = function (e, r) {
            return t(e, r, n);
          }),
          sr(function () {
            (r.atom_ = Z(r.name_)), e && r.replace(e);
          });
      }
      var t = e.prototype;
      return (
        (t.dehanceValue_ = function (e) {
          return void 0 !== this.dehancer ? this.dehancer(e) : e;
        }),
        (t.clear = function () {
          var e = this;
          nn(function () {
            st(function () {
              for (var t, n = H(e.data_.values()); !(t = n()).done; ) {
                var r = t.value;
                e.delete(r);
              }
            });
          });
        }),
        (t.forEach = function (e, t) {
          for (var n, r = H(this); !(n = r()).done; ) {
            var i = n.value;
            e.call(t, i, i, this);
          }
        }),
        (t.add = function (e) {
          var t = this;
          if ((this.atom_, sn(this)) && !cn(this, { type: Rn, object: this, newValue: e })) return this;
          if (!this.has(e)) {
            nn(function () {
              t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged();
            });
            var n = un(this),
              r = n ? { observableKind: "set", debugObjectName: this.name_, type: Rn, object: this, newValue: e } : null;
            n && dn(this, r);
          }
          return this;
        }),
        (t.delete = function (e) {
          var t = this;
          if (sn(this) && !cn(this, { type: kn, object: this, oldValue: e })) return !1;
          if (this.has(e)) {
            var n = un(this),
              r = n ? { observableKind: "set", debugObjectName: this.name_, type: kn, object: this, oldValue: e } : null;
            return (
              nn(function () {
                t.atom_.reportChanged(), t.data_.delete(e);
              }),
              n && dn(this, r),
              !0
            );
          }
          return !1;
        }),
        (t.has = function (e) {
          return this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(e));
        }),
        (t.entries = function () {
          var e = 0,
            t = Array.from(this.keys()),
            n = Array.from(this.values());
          return dr({
            next: function () {
              var r = e;
              return (e += 1), r < n.length ? { value: [t[r], n[r]], done: !1 } : { done: !0 };
            }
          });
        }),
        (t.keys = function () {
          return this.values();
        }),
        (t.values = function () {
          this.atom_.reportObserved();
          var e = this,
            t = 0,
            n = Array.from(this.data_.values());
          return dr({
            next: function () {
              return t < n.length ? { value: e.dehanceValue_(n[t++]), done: !1 } : { done: !0 };
            }
          });
        }),
        (t.replace = function (e) {
          var t = this;
          return (
            jn(e) && (e = new Set(e)),
            nn(function () {
              Array.isArray(e) || L(e)
                ? (t.clear(),
                  e.forEach(function (e) {
                    return t.add(e);
                  }))
                : null != e && l("Cannot initialize set from " + e);
            }),
            this
          );
        }),
        (t.observe_ = function (e, t) {
          return ln(this, e);
        }),
        (t.intercept_ = function (e) {
          return on(this, e);
        }),
        (t.toJSON = function () {
          return Array.from(this);
        }),
        (t.toString = function () {
          return "[object ObservableSet]";
        }),
        (t[Nn] = function () {
          return this.values();
        }),
        G(e, [
          {
            key: "size",
            get: function () {
              return this.atom_.reportObserved(), this.data_.size;
            }
          },
          {
            key: Pn,
            get: function () {
              return "Set";
            }
          }
        ]),
        e
      );
    })(),
    jn = N("ObservableSet", xn),
    Mn = Object.create(null),
    Yn = "remove",
    Gn = (function () {
      function e(e, t, n, r) {
        void 0 === t && (t = new Map()),
          void 0 === r && (r = _e),
          (this.target_ = void 0),
          (this.values_ = void 0),
          (this.name_ = void 0),
          (this.defaultAnnotation_ = void 0),
          (this.keysAtom_ = void 0),
          (this.changeListeners_ = void 0),
          (this.interceptors_ = void 0),
          (this.proxy_ = void 0),
          (this.isPlainObject_ = void 0),
          (this.appliedAnnotations_ = void 0),
          (this.pendingKeys_ = void 0),
          (this.target_ = e),
          (this.values_ = t),
          (this.name_ = n),
          (this.defaultAnnotation_ = r),
          (this.keysAtom_ = new X("ObservableObject.keys")),
          (this.isPlainObject_ = I(this.target_));
      }
      var t = e.prototype;
      return (
        (t.getObservablePropValue_ = function (e) {
          return this.values_.get(e).get();
        }),
        (t.setObservablePropValue_ = function (e, t) {
          var n = this.values_.get(e);
          if (n instanceof Ze) return n.set(t), !0;
          if (sn(this)) {
            var r = cn(this, { type: fn, object: this.proxy_ || this.target_, name: e, newValue: t });
            if (!r) return null;
            t = r.newValue;
          }
          if ((t = n.prepareNewValue_(t)) !== gt.UNCHANGED) {
            var i = un(this),
              a = i
                ? {
                    type: fn,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    oldValue: n.value_,
                    name: e,
                    newValue: t
                  }
                : null;
            n.setNewValue_(t), i && dn(this, a);
          }
          return !0;
        }),
        (t.get_ = function (e) {
          return gt.trackingDerivation && !j(this.target_, e) && this.has_(e), this.target_[e];
        }),
        (t.set_ = function (e, t, n) {
          return (
            void 0 === n && (n = !1),
            j(this.target_, e)
              ? this.values_.has(e)
                ? this.setObservablePropValue_(e, t)
                : n
                ? Reflect.set(this.target_, e, t)
                : ((this.target_[e] = t), !0)
              : this.extend_(e, { value: t, enumerable: !0, writable: !0, configurable: !0 }, this.defaultAnnotation_, n)
          );
        }),
        (t.has_ = function (e) {
          if (!gt.trackingDerivation) return e in this.target_;
          this.pendingKeys_ || (this.pendingKeys_ = new Map());
          var t = this.pendingKeys_.get(e);
          return t || ((t = new Je(e in this.target_, ne, "ObservableObject.key?", !1)), this.pendingKeys_.set(e, t)), t.get();
        }),
        (t.make_ = function (e, t) {
          if ((!0 === t && (t = this.defaultAnnotation_), !1 !== t)) {
            if (!(e in this.target_)) {
              var n;
              if (null != (n = this.target_[z]) && n[e]) return;
              l(1, t.annotationType_, this.name_ + "." + e.toString());
            }
            for (var r = this.target_; r && r !== m; ) {
              var i = g(r, e);
              if (i) {
                var a = t.make_(this, e, i, r);
                if (0 === a) return;
                if (1 === a) break;
              }
              r = Object.getPrototypeOf(r);
            }
            Wn(this, t, e);
          }
        }),
        (t.extend_ = function (e, t, n, r) {
          if ((void 0 === r && (r = !1), !0 === n && (n = this.defaultAnnotation_), !1 === n)) return this.defineProperty_(e, t, r);
          var i = n.extend_(this, e, t, r);
          return i && Wn(this, n, e), i;
        }),
        (t.defineProperty_ = function (e, t, n) {
          void 0 === n && (n = !1), this.keysAtom_;
          try {
            yt();
            var r = this.delete_(e);
            if (!r) return r;
            if (sn(this)) {
              var i = cn(this, { object: this.proxy_ || this.target_, name: e, type: Rn, newValue: t.value });
              if (!i) return null;
              var a = i.newValue;
              t.value !== a && (t = F({}, t, { value: a }));
            }
            if (n) {
              if (!Reflect.defineProperty(this.target_, e, t)) return !1;
            } else f(this.target_, e, t);
            this.notifyPropertyAddition_(e, t.value);
          } finally {
            _t();
          }
          return !0;
        }),
        (t.defineObservableProperty_ = function (e, t, n, r) {
          void 0 === r && (r = !1), this.keysAtom_;
          try {
            yt();
            var i = this.delete_(e);
            if (!i) return i;
            if (sn(this)) {
              var a = cn(this, { object: this.proxy_ || this.target_, name: e, type: Rn, newValue: t });
              if (!a) return null;
              t = a.newValue;
            }
            var s = Vn(e),
              o = { configurable: !gt.safeDescriptors || this.isPlainObject_, enumerable: !0, get: s.get, set: s.set };
            if (r) {
              if (!Reflect.defineProperty(this.target_, e, o)) return !1;
            } else f(this.target_, e, o);
            var c = new Je(t, n, "ObservableObject.key", !1);
            this.values_.set(e, c), this.notifyPropertyAddition_(e, c.value_);
          } finally {
            _t();
          }
          return !0;
        }),
        (t.defineComputedProperty_ = function (e, t, n) {
          void 0 === n && (n = !1), this.keysAtom_;
          try {
            yt();
            var r = this.delete_(e);
            if (!r) return r;
            if (sn(this)) if (!cn(this, { object: this.proxy_ || this.target_, name: e, type: Rn, newValue: void 0 })) return null;
            t.name || (t.name = "ObservableObject.key"), (t.context = this.proxy_ || this.target_);
            var i = Vn(e),
              a = { configurable: !gt.safeDescriptors || this.isPlainObject_, enumerable: !1, get: i.get, set: i.set };
            if (n) {
              if (!Reflect.defineProperty(this.target_, e, a)) return !1;
            } else f(this.target_, e, a);
            this.values_.set(e, new Ze(t)), this.notifyPropertyAddition_(e, void 0);
          } finally {
            _t();
          }
          return !0;
        }),
        (t.delete_ = function (e, t) {
          if ((void 0 === t && (t = !1), this.keysAtom_, !j(this.target_, e))) return !0;
          if (sn(this) && !cn(this, { object: this.proxy_ || this.target_, name: e, type: Yn })) return null;
          try {
            var n, r;
            yt();
            var i,
              a = un(this),
              s = this.values_.get(e),
              o = void 0;
            if (!s && a) o = null == (i = g(this.target_, e)) ? void 0 : i.value;
            if (t) {
              if (!Reflect.deleteProperty(this.target_, e)) return !1;
            } else delete this.target_[e];
            if (
              (s && (this.values_.delete(e), s instanceof Je && (o = s.value_), St(s)),
              this.keysAtom_.reportChanged(),
              null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(e in this.target_),
              a)
            ) {
              var c = {
                type: Yn,
                observableKind: "object",
                object: this.proxy_ || this.target_,
                debugObjectName: this.name_,
                oldValue: o,
                name: e
              };
              0, a && dn(this, c);
            }
          } finally {
            _t();
          }
          return !0;
        }),
        (t.observe_ = function (e, t) {
          return ln(this, e);
        }),
        (t.intercept_ = function (e) {
          return on(this, e);
        }),
        (t.notifyPropertyAddition_ = function (e, t) {
          var n,
            r,
            i = un(this);
          if (i) {
            var a = i
              ? {
                  type: Rn,
                  observableKind: "object",
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: e,
                  newValue: t
                }
              : null;
            i && dn(this, a);
          }
          null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(!0), this.keysAtom_.reportChanged();
        }),
        (t.ownKeys_ = function () {
          return this.keysAtom_.reportObserved(), U(this.target_);
        }),
        (t.keys_ = function () {
          return this.keysAtom_.reportObserved(), Object.keys(this.target_);
        }),
        e
      );
    })();
  function Fn(e, t) {
    var n;
    if (j(e, $)) return e;
    var r = null != (n = null == t ? void 0 : t.name) ? n : "ObservableObject",
      i = new Gn(
        e,
        new Map(),
        String(r),
        (function (e) {
          var t;
          return e ? (null != (t = e.defaultDecorator) ? t : be(e)) : void 0;
        })(t)
      );
    return R(e, $, i), e;
  }
  var Bn = N("ObservableObjectAdministration", Gn);
  function Vn(e) {
    return (
      Mn[e] ||
      (Mn[e] = {
        get: function () {
          return this[$].getObservablePropValue_(e);
        },
        set: function (t) {
          return this[$].setObservablePropValue_(e, t);
        }
      })
    );
  }
  function Kn(e) {
    return !!T(e) && Bn(e[$]);
  }
  function Wn(e, t, n) {
    var r;
    null == (r = e.target_[z]) || delete r[n];
  }
  var Hn,
    zn,
    qn = Zn(0),
    Jn = (function () {
      var e = !1,
        t = {};
      return (
        Object.defineProperty(t, "0", {
          set: function () {
            e = !0;
          }
        }),
        (Object.create(t)[0] = 1),
        !1 === e
      );
    })(),
    $n = 0,
    Xn = function () {};
  (Hn = Xn),
    (zn = Array.prototype),
    Object.setPrototypeOf
      ? Object.setPrototypeOf(Hn.prototype, zn)
      : void 0 !== Hn.prototype.__proto__
      ? (Hn.prototype.__proto__ = zn)
      : (Hn.prototype = zn);
  var Qn = (function (e, t, n) {
    function r(t, n, r, i) {
      var a;
      return (
        void 0 === r && (r = "ObservableArray"),
        void 0 === i && (i = !1),
        (a = e.call(this) || this),
        sr(function () {
          var e = new vn(r, n, i, !0);
          (e.proxy_ = K(a)), k(K(a), $, e), t && t.length && a.spliceWithArray(0, 0, t), Jn && Object.defineProperty(K(a), "0", qn);
        }),
        a
      );
    }
    B(r, e);
    var i = r.prototype;
    return (
      (i.concat = function () {
        this[$].atom_.reportObserved();
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return Array.prototype.concat.apply(
          this.slice(),
          t.map(function (e) {
            return In(e) ? e.slice() : e;
          })
        );
      }),
      (i[n] = function () {
        var e = this,
          t = 0;
        return dr({
          next: function () {
            return t < e.length ? { value: e[t++], done: !1 } : { done: !0, value: void 0 };
          }
        });
      }),
      G(r, [
        {
          key: "length",
          get: function () {
            return this[$].getArrayLength_();
          },
          set: function (e) {
            this[$].setArrayLength_(e);
          }
        },
        {
          key: t,
          get: function () {
            return "Array";
          }
        }
      ]),
      r
    );
  })(Xn, Symbol.toStringTag, Symbol.iterator);
  function Zn(e) {
    return {
      enumerable: !1,
      configurable: !0,
      get: function () {
        return this[$].get_(e);
      },
      set: function (t) {
        this[$].set_(e, t);
      }
    };
  }
  function er(e) {
    f(Qn.prototype, "" + e, Zn(e));
  }
  function tr(e) {
    if (e > $n) {
      for (var t = $n; t < e + 100; t++) er(t);
      $n = e;
    }
  }
  function nr(e, t, n) {
    return new Qn(e, t, n);
  }
  function rr(e, t) {
    if ("object" == typeof e && null !== e) {
      if (In(e)) return void 0 !== t && l(23), e[$].atom_;
      if (jn(e)) return e.atom_;
      if (Dn(e)) {
        if (void 0 === t) return e.keysAtom_;
        var n = e.data_.get(t) || e.hasMap_.get(t);
        return n || l(25, t, ar(e)), n;
      }
      if (Kn(e)) {
        if (!t) return l(26);
        var r = e[$].values_.get(t);
        return r || l(27, t, ar(e)), r;
      }
      if (Q(e) || et(e) || It(e)) return e;
    } else if (O(e) && It(e[$])) return e[$];
    l(28);
  }
  function ir(e, t) {
    return e || l(29), void 0 !== t ? ir(rr(e, t)) : Q(e) || et(e) || It(e) || Dn(e) || jn(e) ? e : e[$] ? e[$] : void l(24, e);
  }
  function ar(e, t) {
    var n;
    if (void 0 !== t) n = rr(e, t);
    else {
      if (jt(e)) return e.name;
      n = Kn(e) || Dn(e) || jn(e) ? ir(e) : rr(e);
    }
    return n.name_;
  }
  function sr(e) {
    var t = ot(),
      n = He(!0);
    yt();
    try {
      return e();
    } finally {
      _t(), ze(n), ct(t);
    }
  }
  Object.entries(_n).forEach(function (e) {
    var t = e[0],
      n = e[1];
    "concat" !== t && R(Qn.prototype, t, n);
  }),
    tr(1e3);
  var or = m.toString;
  function cr(e, t, n) {
    return void 0 === n && (n = -1), ur(e, t, n);
  }
  function ur(e, t, n, r, i) {
    if (e === t) return 0 !== e || 1 / e == 1 / t;
    if (null == e || null == t) return !1;
    if (e != e) return t != t;
    var a = typeof e;
    if ("function" !== a && "object" !== a && "object" != typeof t) return !1;
    var s = or.call(e);
    if (s !== or.call(t)) return !1;
    switch (s) {
      case "[object RegExp]":
      case "[object String]":
        return "" + e == "" + t;
      case "[object Number]":
        return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
      case "[object Date]":
      case "[object Boolean]":
        return +e == +t;
      case "[object Symbol]":
        return "undefined" != typeof Symbol && Symbol.valueOf.call(e) === Symbol.valueOf.call(t);
      case "[object Map]":
      case "[object Set]":
        n >= 0 && n++;
    }
    (e = lr(e)), (t = lr(t));
    var o = "[object Array]" === s;
    if (!o) {
      if ("object" != typeof e || "object" != typeof t) return !1;
      var c = e.constructor,
        u = t.constructor;
      if (c !== u && !(O(c) && c instanceof c && O(u) && u instanceof u) && "constructor" in e && "constructor" in t) return !1;
    }
    if (0 === n) return !1;
    n < 0 && (n = -1), (i = i || []);
    for (var l = (r = r || []).length; l--; ) if (r[l] === e) return i[l] === t;
    if ((r.push(e), i.push(t), o)) {
      if ((l = e.length) !== t.length) return !1;
      for (; l--; ) if (!ur(e[l], t[l], n - 1, r, i)) return !1;
    } else {
      var d,
        h = Object.keys(e);
      if (((l = h.length), Object.keys(t).length !== l)) return !1;
      for (; l--; ) if (!j(t, (d = h[l])) || !ur(e[d], t[d], n - 1, r, i)) return !1;
    }
    return r.pop(), i.pop(), !0;
  }
  function lr(e) {
    return In(e) ? e.slice() : P(e) || Dn(e) || L(e) || jn(e) ? Array.from(e.entries()) : e;
  }
  function dr(e) {
    return (e[Symbol.iterator] = hr), e;
  }
  function hr() {
    return this;
  }
  function pr(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function gr(e, t, n) {
    return (
      (t = (function (e) {
        var t = (function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == typeof t ? t : String(t);
      })(t)) in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  ["Symbol", "Map", "Set"].forEach(function (e) {
    void 0 === h()[e] && l("MobX requires global '" + e + "' to be available or polyfilled");
  }),
    "object" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
      __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
        spy: function (e) {
          return console.warn("[mobx.spy] Is a no-op in production builds"), function () {};
        },
        extras: { getDebugName: ar },
        $mobx: $
      });
  let fr = class {
      store(e, t, n) {
        throw "IStorage store not implemented!";
      }
      retrieve(e) {
        throw "IStorage retrieve not implemented!";
      }
      remove(e) {
        throw "IStorage remove not implemented!";
      }
    },
    mr = class {
      static encode(e) {
        var t = JSON.stringify(e);
        return btoa ? btoa(t) : Buffer.from(t).toString("base64");
      }
      static decode(e) {
        if (atob) return atob(e);
        var t = Buffer.from(e, "base64");
        return JSON.parse(t.toString("utf8"));
      }
    };
  var vr = function e(t) {
      for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
      if (!r.length) return t;
      var a = r.shift();
      if (_r(t) && _r(a)) {
        var s = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? pr(Object(n), !0).forEach(function (t) {
                  gr(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : pr(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
          }
          return e;
        })({}, t);
        for (var o in a)
          Object.prototype.hasOwnProperty.call(a, o) &&
            (_r(a[o]) && _r(s[o])
              ? (s[o] = e(s[o], a[o]))
              : Array.isArray(a[o]) && Array.isArray(s[o])
              ? (s[o] = yr(s[o], a[o]))
              : (s[o] = a[o]));
        return e(s, ...r);
      }
      return e(t, ...r);
    },
    yr = (e, t) => {
      var n = [...t],
        r = ((e, t) => {
          if (e.hasOwnProperty("name") && t.hasOwnProperty("name")) return "name";
          if (e.length > 0 && t.length > 0) {
            var n,
              r = e[0],
              i = t[0],
              a = function (n) {
                if (r.hasOwnProperty(n) && i.hasOwnProperty(n)) {
                  var a = e.map((e) => e[n]),
                    s = t.map((e) => e[n]),
                    o = new Set(a),
                    c = new Set(s);
                  if ("string" == typeof r[n] && o.size === e.length && c.size === t.length) return { v: n };
                }
              };
            for (var s in r) if ((n = a(s))) return n.v;
          }
          return null;
        })(e, t),
        i = t.map((e) => e[r]),
        a = e.map((e) => e[r]),
        s = [];
      for (var o in t[0]) s.push(o);
      var c = [];
      for (var u in e[0]) c.push(u);
      var l = c.filter((e) => !s.some((t) => t === e));
      if (l.length > 0)
        for (
          var d = function (t) {
              for (var i = e.find((e) => e[r] === n[t][r]), a = 0; a < l.length; a++) n[t][l[a]] = i[l[a]];
            },
            h = 0;
          h < n.length;
          h++
        )
          d(h);
      return (
        a
          .filter((e) => !i.some((t) => t === e))
          .forEach((t) => {
            var i = e.find((e) => {
                if (e[r] === t) return !0;
              }),
              a = e.findIndex((e) => e === i),
              s = e[a - 1 >= 0 ? a - 1 : a][r],
              o = n.findIndex((e) => e[r] === s);
            n.splice(o + 1, 0, i);
          }),
        n
      );
    },
    _r = (e) => null !== e && "object" == typeof e && !Array.isArray(e),
    br = "local";
  let Sr = class extends fr {
      constructor(e) {
        super(),
          (this._syncType = e),
          (this._event = void 0),
          (this._keys = new Set()),
          "none" !== this._syncType &&
            ((chrome || {}).storage || {}).onChanged &&
            chrome.storage.onChanged.addListener((e, t) => {
              if (this._event && t === this._syncType && this._keys.has(Object.keys(e)[0])) {
                var n = JSON.parse(mr.decode(Object.values(e)[0].newValue));
                this._event(n);
              }
            });
      }
      onUpdate(e) {
        this._event = e;
      }
      store(e, t, n) {
        var r = this;
        return new Promise(
          (function () {
            var n = u(function* (n, i) {
              try {
                if ("none" === r._syncType) return void n(!0);
                var a = mr.encode(t),
                  s = yield r._retrieve(e, r._syncType);
                if (s && s[e] === a) return void n(!0);
                r._store(e, a, r._syncType), r._keys.add(e), n(!0);
              } catch (e) {
                i(e);
              }
            });
            return function (e, t) {
              return n.apply(this, arguments);
            };
          })()
        );
      }
      retrieve(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          n = this;
        return new Promise(
          (function () {
            var r = u(function* (r, i) {
              try {
                if ("none" === n._syncType) return void r(t);
                var a = {};
                if (Object.keys(e).length > 0) {
                  var s = yield n._retrieve(e, n._syncType);
                  if (s) {
                    if (((a = mr.decode(s[e])), n._keys.add(e), !t)) return void r(JSON.parse(a));
                    r(vr(t, JSON.parse(a)));
                  } else n._keys.add(e), r(t);
                } else n._keys.add(e), r(t);
              } catch (e) {
                i(e);
              }
            });
            return function (e, t) {
              return r.apply(this, arguments);
            };
          })()
        );
      }
      remove(e) {
        var t = this;
        return new Promise(
          (function () {
            var n = u(function* (n, r) {
              try {
                if ("none" === t._syncType) return void n(!1);
                if (Object.keys(e).length > 0) {
                  yield t._remove(e, t._syncType);
                  t._keys.delete(e), n(!0);
                }
              } catch (e) {
                r(e);
              }
            });
            return function (e, t) {
              return n.apply(this, arguments);
            };
          })()
        );
      }
      _store(e, t, n) {
        ((chrome || {}).storage || {})[this._syncType] ? chrome.storage[n].set({ [e]: t }) : localStorage.setItem(e, t);
      }
      _retrieve(e, t) {
        return new Promise((n, r) => {
          ((chrome || {}).storage || {})[this._syncType]
            ? chrome.storage[t].get([e], (e) => {
                "{}" !== JSON.stringify(e) ? n(e) : n(null);
              })
            : n({ [e]: localStorage.getItem(e) });
        });
      }
      _remove(e, t) {
        ((chrome || {}).storage || {})[this._syncType] ? chrome.storage[t].remove(e) : localStorage.removeItem(e);
      }
    },
    wr = class extends EventTarget {
      constructor() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : br,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          i = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        super(),
          (this.isInitialised = !1),
          this._instance !== this &&
            ((this._instance = this),
            (this.state = e),
            (this.storageType = t),
            (this.storageKey = n),
            (this.merge = r),
            (this._persistentStore = null),
            (this._persistOn = i));
      }
      initialise() {
        var e = this;
        return u(function* () {
          return new Promise(
            (function () {
              var t = u(function* (t, n) {
                if (!0 === e.isInitialised) t(e.state);
                else if (null === e._persistentStore) {
                  (e._persistentStore = new Sr(e.storageType)),
                    e._persistentStore.onUpdate(
                      (function () {
                        var t = u(function* (t) {
                          JSON.stringify(e.state) !== JSON.stringify(t) && (e.state = t);
                        });
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })()
                    );
                  var r = yield e._persistentStore.retrieve(e.storageKey, tn(e.state));
                  e.state && (e.state = r), pn(e), e._startAutoSaving(e, e.storageKey), t(r), (e.isInitialised = !0);
                } else pn(e), t(e.state), (e.isInitialised = !0);
              });
              return function (e, n) {
                return t.apply(this, arguments);
              };
            })()
          );
        })();
      }
      waitForInit() {
        var e = this;
        return u(function* () {
          if (!0 === e.isInitialised) return !0;
          if (!1 === e.isInitialised) {
            for (; !0 !== e.isInitialised; )
              yield new Promise((e) => {
                setTimeout(e, 100);
              });
            return !0;
          }
          return !1;
        })();
      }
      set persist(e) {
        (this._persistOn = e), e && this.save();
      }
      save() {
        this._storeOnSave(this, this.storageKey, !0);
      }
      get stateJSON() {
        return tn(this.state);
      }
      _startAutoSaving(e, t) {
        var n = this;
        Mt(
          u(function* () {
            n._storeOnSave(e, t), n.dispatchEvent(new CustomEvent("onStoreUpdated"));
          })
        );
      }
      _storeOnSave(e, t) {
        var n = arguments,
          r = this;
        return u(function* () {
          var i = n.length > 2 && void 0 !== n[2] && n[2];
          (r._persistOn || i) && (yield r._persistentStore.store(t, tn(e.state), r.merge));
        })();
      }
    };
  var Er = 1,
    Or = 2,
    Ar = 3,
    Tr = 4,
    Ir = 5,
    Cr = 6,
    Rr = 7,
    kr = 8;
  class Nr extends EventTarget {
    constructor() {
      super(),
        (this.FRAMEKEY = "texthelp-cfe-9828"),
        (this.SESSIONKEY = "texthelp-cfe-9829"),
        (this._frameId = null),
        (this._sessionId = null);
    }
    getSessionId() {
      return u(function* () {
        return new Promise((e, t) => {
          "undefined" != typeof window
            ? chrome.runtime.sendMessage({ command: "th-getWindowId" }, (t) => {
                e(null == t ? "serviceworkerId" : t.toString());
              })
            : e("serviceworkerId");
        });
      })();
    }
    initialise() {
      var e = this;
      return u(function* () {
        return new Promise(
          (function () {
            var t = u(function* (t, n) {
              (e._frameId = Nr.getGuid()),
                (e._sessionId = yield e.getSessionId()),
                chrome.storage.onChanged.addListener((t, n) => {
                  var r = function () {
                    if (i == e.FRAMEKEY) {
                      var n = JSON.parse(t[e.FRAMEKEY].newValue);
                      switch (
                        ((n.data.source = {}), (n.data.source.sessionId = n.sessionId), (n.data.source.frameId = n.frameId), n.type)
                      ) {
                        case Rr:
                          "undefined" != typeof WorkerGlobalScope &&
                            "function" == typeof importScripts &&
                            navigator instanceof WorkerNavigator &&
                            e.dispatchEvent(new CustomEvent(n.name, { detail: n.data }));
                          break;
                        case Er:
                          e.dispatchEvent(new CustomEvent(n.name, { detail: n.data }));
                          break;
                        case Ar:
                          n.sessionId === e._sessionId && e.dispatchEvent(new CustomEvent(n.name, { detail: n.data }));
                          break;
                        case Or:
                          chrome.storage.local.get(
                            ["activeFrame"],
                            (function () {
                              var t = u(function* (t) {
                                t.activeFrame &&
                                  t.activeFrame === e._frameId &&
                                  e.dispatchEvent(new CustomEvent(n.name, { detail: n.data }));
                              });
                              return function (e) {
                                return t.apply(this, arguments);
                              };
                            })()
                          );
                          break;
                        case Tr:
                          chrome.storage.local.get(
                            ["activeFrame"],
                            (function () {
                              var t = u(function* (t) {
                                t.activeFrame &&
                                  t.activeFrame === e._frameId &&
                                  n.sessionId === e._sessionId &&
                                  e.dispatchEvent(new CustomEvent(n.name, { detail: n.data }));
                              });
                              return function (e) {
                                return t.apply(this, arguments);
                              };
                            })()
                          );
                          break;
                        case Ir:
                          "undefined" != typeof window &&
                            window.self === window.top &&
                            e.dispatchEvent(new CustomEvent(n.name, { detail: n.data }));
                          break;
                        case Cr:
                          "undefined" != typeof window &&
                            window.self === window.top &&
                            n.sessionId === e._sessionId &&
                            e.dispatchEvent(new CustomEvent(n.name, { detail: n.data }));
                          break;
                        case kr:
                          n.sessionId === e._sessionId &&
                            n.frameId === e._frameId &&
                            e.dispatchEvent(new CustomEvent(n.name, { detail: n.data }));
                      }
                    }
                  };
                  for (var i in t) r();
                }),
                t({ frameId: e._frameId, sessionId: e._sessionId });
            });
            return function (e, n) {
              return t.apply(this, arguments);
            };
          })()
        );
      })();
    }
    dispatchStorageEvent() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Or,
        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this._sessionId,
        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this._frameId,
        a = { name: e, time: Date.now(), type: t, data: n, sessionId: r, frameId: i };
      chrome.storage.local.set({ [this.FRAMEKEY]: JSON.stringify(a) });
    }
    static getGuid() {
      var e = function () {
        return Math.floor(65536 * Math.random()).toString(16);
      };
      return e() + e() + "-" + e() + "-" + e() + "-" + e() + "-" + e() + e() + e();
    }
  }
  function Pr(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function Lr(e, t, n) {
    return (
      (t = (function (e) {
        var t = (function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == typeof t ? t : String(t);
      })(t)) in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  let Dr = class {
      store(e, t, n) {
        throw "IStorage store not implemented!";
      }
      retrieve(e) {
        throw "IStorage retrieve not implemented!";
      }
      remove(e) {
        throw "IStorage remove not implemented!";
      }
    },
    Ur = class {
      static encode(e) {
        const t = JSON.stringify(e);
        return btoa ? btoa(t) : Buffer.from(t).toString("base64");
      }
      static decode(e) {
        if (atob) return atob(e);
        const t = Buffer.from(e, "base64");
        return JSON.parse(t.toString("utf8"));
      }
    };
  const xr = (e, ...t) => {
      if (!t.length) return e;
      const n = t.shift();
      if (Mr(e) && Mr(n)) {
        const r = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? Pr(Object(n), !0).forEach(function (t) {
                  Lr(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Pr(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
          }
          return e;
        })({}, e);
        for (const e in n)
          Object.prototype.hasOwnProperty.call(n, e) &&
            (Mr(n[e]) && Mr(r[e])
              ? (r[e] = xr(r[e], n[e]))
              : Array.isArray(n[e]) && Array.isArray(r[e])
              ? (r[e] = jr(r[e], n[e]))
              : (r[e] = n[e]));
        return xr(r, ...t);
      }
      return xr(e, ...t);
    },
    jr = (e, t) => {
      let n = [...t];
      const r = ((e, t) => {
          if (e.hasOwnProperty("name") && t.hasOwnProperty("name")) return "name";
          if (e.length > 0 && t.length > 0) {
            const n = e[0],
              r = t[0];
            for (const i in n)
              if (n.hasOwnProperty(i) && r.hasOwnProperty(i)) {
                const r = e.map((e) => e[i]),
                  a = t.map((e) => e[i]),
                  s = new Set(r),
                  o = new Set(a);
                if ("string" == typeof n[i] && s.size === e.length && o.size === t.length) return i;
              }
          }
          return null;
        })(e, t),
        i = t.map((e) => e[r]),
        a = e.map((e) => e[r]);
      let s = [];
      for (let e in t[0]) s.push(e);
      let o = [];
      for (let t in e[0]) o.push(t);
      let c = o.filter((e) => !s.some((t) => t === e));
      if (c.length > 0)
        for (let t = 0; t < n.length; t++) {
          let i = e.find((e) => e[r] === n[t][r]);
          for (let e = 0; e < c.length; e++) n[t][c[e]] = i[c[e]];
        }
      return (
        a
          .filter((e) => !i.some((t) => t === e))
          .forEach((t) => {
            const i = e.find((e) => {
                if (e[r] === t) return !0;
              }),
              a = e.findIndex((e) => e === i),
              s = e[a - 1 >= 0 ? a - 1 : a][r],
              o = n.findIndex((e) => e[r] === s);
            n.splice(o + 1, 0, i);
          }),
        n
      );
    },
    Mr = (e) => null !== e && "object" == typeof e && !Array.isArray(e),
    Yr = "sync",
    Gr = "local";
  let Fr = class extends Dr {
    constructor(e) {
      super(),
        (this._syncType = e),
        (this._event = void 0),
        (this._keys = new Set()),
        "none" !== this._syncType &&
          ((chrome || {}).storage || {}).onChanged &&
          chrome.storage.onChanged.addListener((e, t) => {
            if (!this._event) return;
            if (t !== this._syncType) return;
            if (!this._keys.has(Object.keys(e)[0])) return;
            let n = JSON.parse(Ur.decode(Object.values(e)[0].newValue));
            this._event(n);
          });
    }
    onUpdate(e) {
      this._event = e;
    }
    store(e, t, n) {
      var r = this;
      return new Promise(async function (n, i) {
        try {
          if ("none" === r._syncType) return void n(!0);
          const i = Ur.encode(t),
            a = await r._retrieve(e, r._syncType);
          if (a && a[e] === i) return void n(!0);
          r._store(e, i, r._syncType), r._keys.add(e), n(!0);
        } catch (e) {
          i(e);
        }
      });
    }
    retrieve(e, t = null) {
      var n = this;
      return new Promise(async function (r, i) {
        try {
          if ("none" === n._syncType) return void r(t);
          let i = {};
          if (Object.keys(e).length > 0) {
            let a = await n._retrieve(e, n._syncType);
            if (a) {
              if (((i = Ur.decode(a[e])), n._keys.add(e), !t)) return void r(JSON.parse(i));
              r(xr(t, JSON.parse(i)));
            } else n._keys.add(e), r(t);
          } else n._keys.add(e), r(t);
        } catch (e) {
          i(e);
        }
      });
    }
    remove(e) {
      var t = this;
      return new Promise(async function (n, r) {
        try {
          if ("none" === t._syncType) return void n(!1);
          if (Object.keys(e).length > 0) {
            await t._remove(e, t._syncType);
            t._keys.delete(e), n(!0);
          }
        } catch (e) {
          r(e);
        }
      });
    }
    _store(e, t, n) {
      ((chrome || {}).storage || {})[this._syncType] ? chrome.storage[n].set({ [e]: t }) : localStorage.setItem(e, t);
    }
    _retrieve(e, t) {
      return new Promise((n, r) => {
        ((chrome || {}).storage || {})[this._syncType]
          ? chrome.storage[t].get([e], (e) => {
              "{}" !== JSON.stringify(e) ? n(e) : n(null);
            })
          : n({ [e]: localStorage.getItem(e) });
      });
    }
    _remove(e, t) {
      ((chrome || {}).storage || {})[this._syncType] ? chrome.storage[t].remove(e) : localStorage.removeItem(e);
    }
  };
  const Br = Object.freeze({
      PLAY: "play",
      PAUSE: "pause",
      STOP: "stop",
      PREDICTION: "prediction",
      DICTIONARY: "dictionary",
      PICTUREDICTIONARY: "picturedictionary",
      SCREENSHOTREADER: "screenshotreader",
      AUDIOMAKER: "audiomaker",
      WEBSEARCH: "websearch",
      SCREENMASKING: "screenmasking",
      TALKANDTYPE: "talkandtype",
      TRANSLATOR: "translator",
      STUDYBLUE: "studyblue",
      STUDYPINK: "studypink",
      STUDYYELLOW: "studyyellow",
      STUDYGREEN: "studygreen",
      STUDYCLEAR: "studyclear",
      STUDYCOLLECT: "studycollect",
      VOCABLIST: "vocablist",
      VOICENOTE: "voicenote",
      CHECKIT: "checkit",
      PRACTICEREADINGALOUD: "practicereadingaloud",
      CLICKTOSPEAK: "clicktospeak",
      SIMPLIFY: "simplify",
      REWORDIFY: "rewordify"
    }),
    Vr = Object.freeze({ TOP: "docked-top", FLOAT: "float", SELECTOR: "selector" });
  Object.freeze({
    "https://docs.google.com/document/*https://assignments.google.com*": {
      dock: Vr.TOP,
      supported: [
        Br.PREDICTION,
        Br.DICTIONARY,
        Br.PICTUREDICTIONARY,
        Br.PLAY,
        Br.PAUSE,
        Br.STOP,
        Br.SCREENSHOTREADER,
        Br.AUDIOMAKER,
        Br.WEBSEARCH,
        Br.SCREENMASKING,
        Br.TALKANDTYPE,
        Br.TRANSLATOR,
        Br.STUDYBLUE,
        Br.STUDYPINK,
        Br.STUDYYELLOW,
        Br.STUDYGREEN,
        Br.STUDYCLEAR,
        Br.STUDYCOLLECT,
        Br.VOCABLIST,
        Br.VOICENOTE,
        Br.CHECKIT,
        Br.PRACTICEREADINGALOUD,
        "optionsmenu",
        "close",
        "minimise",
        "maximise",
        "options-menuitem",
        "help-menuitem",
        "feedback-menuitem",
        "texthelp-menuitem"
      ]
    },
    "https://docs.google.com/document/*edit": {
      dock: Vr.TOP,
      supported: [
        Br.PREDICTION,
        Br.DICTIONARY,
        Br.PICTUREDICTIONARY,
        Br.PLAY,
        Br.PAUSE,
        Br.STOP,
        Br.SCREENSHOTREADER,
        Br.AUDIOMAKER,
        Br.WEBSEARCH,
        Br.SCREENMASKING,
        Br.TALKANDTYPE,
        Br.TRANSLATOR,
        Br.STUDYBLUE,
        Br.STUDYPINK,
        Br.STUDYYELLOW,
        Br.STUDYGREEN,
        Br.STUDYCLEAR,
        Br.STUDYCOLLECT,
        Br.VOCABLIST,
        Br.VOICENOTE,
        Br.CHECKIT,
        Br.PRACTICEREADINGALOUD,
        "optionsmenu",
        "close",
        "minimise",
        "maximise",
        "options-menuitem",
        "help-menuitem",
        "feedback-menuitem",
        "texthelp-menuitem"
      ]
    },
    "https://docs.google.com/document/*preview*": {
      dock: Vr.TOP,
      supported: [
        Br.PREDICTION,
        Br.DICTIONARY,
        Br.PICTUREDICTIONARY,
        Br.PLAY,
        Br.PAUSE,
        Br.STOP,
        Br.SCREENSHOTREADER,
        Br.AUDIOMAKER,
        Br.WEBSEARCH,
        Br.SCREENMASKING,
        Br.TALKANDTYPE,
        Br.TRANSLATOR,
        Br.STUDYBLUE,
        Br.STUDYPINK,
        Br.STUDYYELLOW,
        Br.STUDYGREEN,
        Br.STUDYCLEAR,
        Br.STUDYCOLLECT,
        Br.VOCABLIST,
        Br.VOICENOTE,
        Br.CHECKIT,
        Br.PRACTICEREADINGALOUD,
        "optionsmenu",
        "close",
        "minimise",
        "maximise",
        "options-menuitem",
        "help-menuitem",
        "feedback-menuitem",
        "texthelp-menuitem"
      ]
    },
    "https://docs.google.com/document/*pub": {
      dock: Vr.FLOAT,
      supported: [
        Br.CLICKTOSPEAK,
        Br.DICTIONARY,
        Br.PICTUREDICTIONARY,
        Br.PLAY,
        Br.PAUSE,
        Br.STOP,
        Br.AUDIOMAKER,
        Br.WEBSEARCH,
        Br.SCREENMASKING,
        Br.TRANSLATOR,
        Br.STUDYBLUE,
        Br.STUDYPINK,
        Br.STUDYYELLOW,
        Br.STUDYGREEN,
        Br.STUDYCLEAR,
        Br.STUDYCOLLECT,
        Br.VOCABLIST,
        Br.PRACTICEREADINGALOUD,
        "settings",
        "help",
        "logo",
        "optionsmenu",
        "close",
        "minimise",
        "maximise",
        "options-menuitem",
        "help-menuitem",
        "feedback-menuitem",
        "texthelp-menuitem"
      ]
    },
    "https://docs.google.com/document/*classroom.google.com": {
      dock: Vr.TOP,
      supported: [
        Br.PREDICTION,
        Br.DICTIONARY,
        Br.PICTUREDICTIONARY,
        Br.PLAY,
        Br.PAUSE,
        Br.STOP,
        Br.SCREENSHOTREADER,
        Br.AUDIOMAKER,
        Br.WEBSEARCH,
        Br.SCREENMASKING,
        Br.TALKANDTYPE,
        Br.TRANSLATOR,
        Br.STUDYBLUE,
        Br.STUDYPINK,
        Br.STUDYYELLOW,
        Br.STUDYGREEN,
        Br.STUDYCLEAR,
        Br.STUDYCOLLECT,
        Br.VOCABLIST,
        Br.VOICENOTE,
        Br.CHECKIT,
        Br.PRACTICEREADINGALOUD,
        "optionsmenu",
        "close",
        "minimise",
        "maximise",
        "options-menuitem",
        "help-menuitem",
        "feedback-menuitem",
        "texthelp-menuitem"
      ]
    },
    "https://docs.google.com/presentation/*edit": {
      dock: Vr.TOP,
      supported: [
        Br.PREDICTION,
        Br.DICTIONARY,
        Br.PICTUREDICTIONARY,
        Br.PLAY,
        Br.PAUSE,
        Br.STOP,
        Br.SCREENSHOTREADER,
        Br.AUDIOMAKER,
        Br.WEBSEARCH,
        Br.SCREENMASKING,
        Br.TALKANDTYPE,
        Br.TRANSLATOR,
        Br.STUDYBLUE,
        Br.STUDYPINK,
        Br.STUDYYELLOW,
        Br.STUDYGREEN,
        Br.STUDYCLEAR,
        Br.VOICENOTE,
        Br.PRACTICEREADINGALOUD,
        "settings",
        "help",
        "logo",
        "optionsmenu",
        "close",
        "minimise",
        "maximise",
        "options-menuitem",
        "help-menuitem",
        "feedback-menuitem",
        "texthelp-menuitem"
      ]
    },
    "https://docs.google.com/forms/*edit": {
      dock: Vr.FLOAT,
      supported: [
        Br.PREDICTION,
        Br.CLICKTOSPEAK,
        Br.DICTIONARY,
        Br.PICTUREDICTIONARY,
        Br.PLAY,
        Br.PAUSE,
        Br.STOP,
        Br.SCREENSHOTREADER,
        Br.AUDIOMAKER,
        Br.WEBSEARCH,
        Br.SCREENMASKING,
        Br.TALKANDTYPE,
        Br.TRANSLATOR,
        Br.STUDYBLUE,
        Br.STUDYPINK,
        Br.STUDYYELLOW,
        Br.STUDYGREEN,
        Br.STUDYCLEAR,
        Br.PRACTICEREADINGALOUD,
        "settings",
        "help",
        "logo",
        "optionsmenu",
        "close",
        "minimise",
        "maximise",
        "options-menuitem",
        "help-menuitem",
        "feedback-menuitem",
        "texthelp-menuitem"
      ]
    },
    "https://docs.google.com/forms/*startquiz": {
      dock: Vr.TOP,
      supported: [
        Br.PREDICTION,
        Br.CLICKTOSPEAK,
        Br.DICTIONARY,
        Br.PICTUREDICTIONARY,
        Br.PLAY,
        Br.PAUSE,
        Br.STOP,
        Br.SCREENMASKING,
        Br.TALKANDTYPE,
        Br.TRANSLATOR,
        "settings",
        "help",
        "logo",
        "optionsmenu",
        "minimise",
        "maximise",
        "options-menuitem"
      ]
    },
    "https://docs.google.com/forms/*viewform": {
      dock: Vr.TOP,
      supported: [
        Br.PREDICTION,
        Br.CLICKTOSPEAK,
        Br.DICTIONARY,
        Br.PICTUREDICTIONARY,
        Br.PLAY,
        Br.PAUSE,
        Br.STOP,
        Br.SCREENSHOTREADER,
        Br.AUDIOMAKER,
        Br.WEBSEARCH,
        Br.SCREENMASKING,
        Br.TALKANDTYPE,
        Br.TRANSLATOR,
        Br.STUDYBLUE,
        Br.STUDYPINK,
        Br.STUDYYELLOW,
        Br.STUDYGREEN,
        Br.STUDYCLEAR,
        Br.PRACTICEREADINGALOUD,
        "settings",
        "help",
        "logo",
        "optionsmenu",
        "close",
        "minimise",
        "maximise",
        "options-menuitem",
        "help-menuitem",
        "feedback-menuitem",
        "texthelp-menuitem"
      ]
    },
    "https://docs.google.com/forms/*formresponse": {
      dock: Vr.TOP,
      supported: [
        Br.PREDICTION,
        Br.CLICKTOSPEAK,
        Br.DICTIONARY,
        Br.PICTUREDICTIONARY,
        Br.PLAY,
        Br.PAUSE,
        Br.STOP,
        Br.SCREENSHOTREADER,
        Br.AUDIOMAKER,
        Br.WEBSEARCH,
        Br.SCREENMASKING,
        Br.TALKANDTYPE,
        Br.TRANSLATOR,
        Br.STUDYBLUE,
        Br.STUDYPINK,
        Br.STUDYYELLOW,
        Br.STUDYGREEN,
        Br.STUDYCLEAR,
        Br.PRACTICEREADINGALOUD,
        "settings",
        "help",
        "logo",
        "optionsmenu",
        "close",
        "minimise",
        "maximise",
        "options-menuitem",
        "help-menuitem",
        "feedback-menuitem",
        "texthelp-menuitem"
      ]
    },
    "https://onedrive.live.com/redir*": {
      dock: Vr.SELECTOR,
      selector: [
        "#WacFrame_Word_0",
        "#WebApplicationFrame[allow*=UKC-word-edit]",
        "#WebApplicationFrame[allow*=UKC-onenote]",
        "#WebApplicationFrame[allow*=onenote]"
      ],
      supported: [
        Br.PREDICTION,
        Br.DICTIONARY,
        Br.PICTUREDICTIONARY,
        Br.PLAY,
        Br.PAUSE,
        Br.STOP,
        Br.SCREENSHOTREADER,
        Br.AUDIOMAKER,
        Br.WEBSEARCH,
        Br.SCREENMASKING,
        Br.TALKANDTYPE,
        Br.TRANSLATOR,
        Br.STUDYBLUE,
        Br.STUDYPINK,
        Br.STUDYYELLOW,
        Br.STUDYGREEN,
        Br.STUDYCLEAR,
        Br.STUDYCOLLECT,
        Br.VOCABLIST,
        Br.PRACTICEREADINGALOUD,
        "settings",
        "help",
        "logo",
        "optionsmenu",
        "close",
        "minimise",
        "maximise",
        "options-menuitem",
        "help-menuitem",
        "feedback-menuitem",
        "texthelp-menuitem"
      ]
    },
    "https://onedrive.live.com/edit.aspx*": {
      dock: Vr.SELECTOR,
      selector: [
        "#WacFrame_Word_0",
        "#WebApplicationFrame[allow*=UKC-word-edit]",
        "#WebApplicationFrame[allow*=UKC-onenote]",
        "#WebApplicationFrame[allow*=onenote]"
      ],
      supported: [
        Br.PREDICTION,
        Br.DICTIONARY,
        Br.PICTUREDICTIONARY,
        Br.PLAY,
        Br.PAUSE,
        Br.STOP,
        Br.SCREENSHOTREADER,
        Br.AUDIOMAKER,
        Br.WEBSEARCH,
        Br.SCREENMASKING,
        Br.TALKANDTYPE,
        Br.TRANSLATOR,
        Br.STUDYBLUE,
        Br.STUDYPINK,
        Br.STUDYYELLOW,
        Br.STUDYGREEN,
        Br.STUDYCLEAR,
        Br.STUDYCOLLECT,
        Br.VOCABLIST,
        Br.PRACTICEREADINGALOUD,
        "settings",
        "help",
        "logo",
        "optionsmenu",
        "close",
        "minimise",
        "maximise",
        "options-menuitem",
        "help-menuitem",
        "feedback-menuitem",
        "texthelp-menuitem"
      ]
    },
    "https://docs.google.com/forms/*": {
      dock: Vr.TOP,
      supported: [
        Br.PREDICTION,
        Br.CLICKTOSPEAK,
        Br.DICTIONARY,
        Br.PICTUREDICTIONARY,
        Br.PLAY,
        Br.PAUSE,
        Br.STOP,
        Br.SCREENSHOTREADER,
        Br.AUDIOMAKER,
        Br.WEBSEARCH,
        Br.SCREENMASKING,
        Br.TALKANDTYPE,
        Br.TRANSLATOR,
        Br.STUDYBLUE,
        Br.STUDYPINK,
        Br.STUDYYELLOW,
        Br.STUDYGREEN,
        Br.STUDYCLEAR,
        Br.PRACTICEREADINGALOUD,
        "settings",
        "help",
        "logo",
        "optionsmenu",
        "close",
        "minimise",
        "maximise",
        "options-menuitem",
        "help-menuitem",
        "feedback-menuitem",
        "texthelp-menuitem"
      ]
    },
    "https://*word-edit.officeapps.live.com": {
      dock: Vr.TOP,
      supported: [
        Br.PREDICTION,
        Br.DICTIONARY,
        Br.PICTUREDICTIONARY,
        Br.PLAY,
        Br.PAUSE,
        Br.STOP,
        Br.SCREENSHOTREADER,
        Br.AUDIOMAKER,
        Br.WEBSEARCH,
        Br.SCREENMASKING,
        Br.TALKANDTYPE,
        Br.TRANSLATOR,
        Br.STUDYBLUE,
        Br.STUDYPINK,
        Br.STUDYYELLOW,
        Br.STUDYGREEN,
        Br.STUDYCLEAR,
        Br.STUDYCOLLECT,
        Br.VOCABLIST,
        Br.PRACTICEREADINGALOUD,
        "settings",
        "help",
        "logo",
        "optionsmenu",
        "close",
        "minimise",
        "maximise",
        "options-menuitem",
        "help-menuitem",
        "feedback-menuitem",
        "texthelp-menuitem"
      ]
    },
    "https://*.sharepoint.com/:w:/*": {
      dock: Vr.TOP,
      supported: [
        Br.PREDICTION,
        Br.DICTIONARY,
        Br.PICTUREDICTIONARY,
        Br.PLAY,
        Br.PAUSE,
        Br.STOP,
        Br.SCREENSHOTREADER,
        Br.AUDIOMAKER,
        Br.WEBSEARCH,
        Br.SCREENMASKING,
        Br.TALKANDTYPE,
        Br.TRANSLATOR,
        Br.STUDYBLUE,
        Br.STUDYPINK,
        Br.STUDYYELLOW,
        Br.STUDYGREEN,
        Br.STUDYCLEAR,
        Br.STUDYCOLLECT,
        Br.VOCABLIST,
        Br.PRACTICEREADINGALOUD,
        "settings",
        "help",
        "logo",
        "optionsmenu",
        "close",
        "minimise",
        "maximise",
        "options-menuitem",
        "help-menuitem",
        "feedback-menuitem",
        "texthelp-menuitem"
      ]
    },
    "https://*.sharepoint.com/:o:/*": {
      dock: Vr.TOP,
      supported: [
        Br.PREDICTION,
        Br.DICTIONARY,
        Br.PICTUREDICTIONARY,
        Br.PLAY,
        Br.PAUSE,
        Br.STOP,
        Br.SCREENSHOTREADER,
        Br.AUDIOMAKER,
        Br.WEBSEARCH,
        Br.SCREENMASKING,
        Br.TALKANDTYPE,
        Br.TRANSLATOR,
        Br.STUDYBLUE,
        Br.STUDYPINK,
        Br.STUDYYELLOW,
        Br.STUDYGREEN,
        Br.STUDYCLEAR,
        Br.STUDYCOLLECT,
        Br.VOCABLIST,
        Br.PRACTICEREADINGALOUD,
        "settings",
        "help",
        "logo",
        "optionsmenu",
        "close",
        "minimise",
        "maximise",
        "options-menuitem",
        "help-menuitem",
        "feedback-menuitem",
        "texthelp-menuitem"
      ]
    },
    "https://*.sharepoint.com/*doc.aspx*": {
      dock: Vr.SELECTOR,
      selector: ["#WacFrame_Word_0", "#WebApplicationFrame[allow*=UKC-word-edit]", "#WebApplicationFrame[allow*=UKC-onenote]"],
      supported: [
        Br.PREDICTION,
        Br.DICTIONARY,
        Br.PICTUREDICTIONARY,
        Br.PLAY,
        Br.PAUSE,
        Br.STOP,
        Br.SCREENSHOTREADER,
        Br.AUDIOMAKER,
        Br.WEBSEARCH,
        Br.SCREENMASKING,
        Br.TALKANDTYPE,
        Br.TRANSLATOR,
        Br.STUDYBLUE,
        Br.STUDYPINK,
        Br.STUDYYELLOW,
        Br.STUDYGREEN,
        Br.STUDYCLEAR,
        Br.STUDYCOLLECT,
        Br.VOCABLIST,
        Br.PRACTICEREADINGALOUD,
        "settings",
        "help",
        "logo",
        "optionsmenu",
        "close",
        "minimise",
        "maximise",
        "options-menuitem",
        "help-menuitem",
        "feedback-menuitem",
        "texthelp-menuitem"
      ]
    },
    "https://*.sharepoint.com/*doc.aspx*.xls*": {
      dock: Vr.FLOAT,
      supported: [
        Br.PREDICTION,
        Br.CLICKTOSPEAK,
        Br.DICTIONARY,
        Br.PICTUREDICTIONARY,
        Br.PLAY,
        Br.PAUSE,
        Br.STOP,
        Br.SCREENSHOTREADER,
        Br.AUDIOMAKER,
        Br.WEBSEARCH,
        Br.SCREENMASKING,
        Br.TALKANDTYPE,
        Br.TRANSLATOR,
        Br.STUDYBLUE,
        Br.STUDYPINK,
        Br.STUDYYELLOW,
        Br.STUDYGREEN,
        Br.STUDYCLEAR,
        Br.STUDYCOLLECT,
        Br.VOCABLIST,
        Br.SIMPLIFY,
        Br.REWORDIFY,
        Br.PRACTICEREADINGALOUD,
        "settings",
        "help",
        "logo",
        "optionsmenu",
        "close",
        "options-menuitem",
        "help-menuitem",
        "feedback-menuitem",
        "texthelp-menuitem"
      ]
    },
    "https://*onenote.officeapps.live.com/o/onenoteframe.aspx": {
      dock: Vr.TOP,
      supported: [
        Br.PREDICTION,
        Br.DICTIONARY,
        Br.PICTUREDICTIONARY,
        Br.PLAY,
        Br.PAUSE,
        Br.STOP,
        Br.SCREENSHOTREADER,
        Br.AUDIOMAKER,
        Br.WEBSEARCH,
        Br.SCREENMASKING,
        Br.TALKANDTYPE,
        Br.TRANSLATOR,
        Br.STUDYBLUE,
        Br.STUDYPINK,
        Br.STUDYYELLOW,
        Br.STUDYGREEN,
        Br.STUDYCLEAR,
        Br.STUDYCOLLECT,
        Br.VOCABLIST,
        Br.PRACTICEREADINGALOUD,
        "settings",
        "help",
        "logo",
        "optionsmenu",
        "close",
        "minimise",
        "maximise",
        "options-menuitem",
        "help-menuitem",
        "feedback-menuitem",
        "texthelp-menuitem"
      ]
    },
    "https://reading.texthelp.com/readwrite": {
      dock: Vr.TOP,
      supported: [
        Br.CLICKTOSPEAK,
        Br.DICTIONARY,
        Br.PICTUREDICTIONARY,
        Br.PLAY,
        Br.PAUSE,
        Br.STOP,
        Br.WEBSEARCH,
        Br.SCREENMASKING,
        Br.TRANSLATOR,
        "settings",
        "help",
        "logo",
        "optionsmenu",
        "close",
        "minimise",
        "maximise",
        "options-menuitem",
        "help-menuitem",
        "feedback-menuitem",
        "texthelp-menuitem"
      ]
    },
    "https://fluency.texthelp.com/readwrite": {
      dock: Vr.TOP,
      supported: [
        Br.CLICKTOSPEAK,
        Br.DICTIONARY,
        Br.PICTUREDICTIONARY,
        Br.PLAY,
        Br.PAUSE,
        Br.STOP,
        Br.WEBSEARCH,
        Br.SCREENMASKING,
        Br.TRANSLATOR,
        "settings",
        "help",
        "logo",
        "optionsmenu",
        "close",
        "minimise",
        "maximise",
        "options-menuitem",
        "help-menuitem",
        "feedback-menuitem",
        "texthelp-menuitem"
      ]
    },
    "https://pra.dev.texthelp.com/*": {
      dock: Vr.TOP,
      supported: [
        Br.CLICKTOSPEAK,
        Br.DICTIONARY,
        Br.PICTUREDICTIONARY,
        Br.PLAY,
        Br.PAUSE,
        Br.STOP,
        Br.WEBSEARCH,
        Br.SCREENMASKING,
        Br.TRANSLATOR,
        "settings",
        "help",
        "logo",
        "optionsmenu",
        "close",
        "minimise",
        "maximise",
        "options-menuitem",
        "help-menuitem",
        "feedback-menuitem",
        "texthelp-menuitem"
      ]
    },
    "https://pra.texthelp.com/*": {
      dock: Vr.TOP,
      supported: [
        Br.CLICKTOSPEAK,
        Br.DICTIONARY,
        Br.PICTUREDICTIONARY,
        Br.PLAY,
        Br.PAUSE,
        Br.STOP,
        Br.WEBSEARCH,
        Br.SCREENMASKING,
        Br.TRANSLATOR,
        "settings",
        "help",
        "logo",
        "optionsmenu",
        "close",
        "minimise",
        "maximise",
        "options-menuitem",
        "help-menuitem",
        "feedback-menuitem",
        "texthelp-menuitem"
      ]
    },
    "http://localhost:10901/*": {
      dock: Vr.TOP,
      supported: [
        Br.CLICKTOSPEAK,
        Br.DICTIONARY,
        Br.PICTUREDICTIONARY,
        Br.PLAY,
        Br.PAUSE,
        Br.STOP,
        Br.WEBSEARCH,
        Br.SCREENMASKING,
        Br.TRANSLATOR,
        "settings",
        "help",
        "logo",
        "optionsmenu",
        "close",
        "minimise",
        "maximise",
        "options-menuitem",
        "help-menuitem",
        "feedback-menuitem",
        "texthelp-menuitem"
      ]
    },
    "https://newsela.com/": {
      dock: Vr.FLOAT,
      supported: [
        Br.PREDICTION,
        Br.CLICKTOSPEAK,
        Br.DICTIONARY,
        Br.PICTUREDICTIONARY,
        Br.PLAY,
        Br.PAUSE,
        Br.STOP,
        Br.SCREENSHOTREADER,
        Br.AUDIOMAKER,
        Br.WEBSEARCH,
        Br.SCREENMASKING,
        Br.TALKANDTYPE,
        Br.TRANSLATOR,
        Br.STUDYBLUE,
        Br.STUDYPINK,
        Br.STUDYYELLOW,
        Br.STUDYGREEN,
        Br.STUDYCLEAR,
        Br.STUDYCOLLECT,
        Br.VOCABLIST,
        Br.SIMPLIFY,
        Br.REWORDIFY,
        "settings",
        "help",
        "logo",
        "optionsmenu",
        "close",
        "options-menuitem",
        "help-menuitem",
        "feedback-menuitem",
        "texthelp-menuitem"
      ]
    },
    "https://www.dogonews.com": {
      dock: Vr.FLOAT,
      supported: [
        Br.PREDICTION,
        Br.CLICKTOSPEAK,
        Br.DICTIONARY,
        Br.PICTUREDICTIONARY,
        Br.PLAY,
        Br.PAUSE,
        Br.STOP,
        Br.SCREENSHOTREADER,
        Br.AUDIOMAKER,
        Br.WEBSEARCH,
        Br.SCREENMASKING,
        Br.TALKANDTYPE,
        Br.TRANSLATOR,
        Br.STUDYBLUE,
        Br.STUDYPINK,
        Br.STUDYYELLOW,
        Br.STUDYGREEN,
        Br.STUDYCLEAR,
        Br.STUDYCOLLECT,
        Br.VOCABLIST,
        Br.SIMPLIFY,
        Br.REWORDIFY,
        "settings",
        "help",
        "logo",
        "optionsmenu",
        "close",
        "options-menuitem",
        "help-menuitem",
        "feedback-menuitem",
        "texthelp-menuitem"
      ]
    },
    "https://rw4gc-simplify.texthelp.com": {
      dock: Vr.TOP,
      supported: [
        Br.CLICKTOSPEAK,
        Br.DICTIONARY,
        Br.PICTUREDICTIONARY,
        Br.PLAY,
        Br.PAUSE,
        Br.STOP,
        Br.AUDIOMAKER,
        Br.WEBSEARCH,
        Br.SCREENMASKING,
        Br.TRANSLATOR,
        Br.STUDYBLUE,
        Br.STUDYPINK,
        Br.STUDYYELLOW,
        Br.STUDYGREEN,
        Br.STUDYCLEAR,
        Br.STUDYCOLLECT,
        Br.VOCABLIST,
        Br.PRACTICEREADINGALOUD,
        Br.REWORDIFY,
        "settings",
        "help",
        "logo",
        "optionsmenu",
        "close",
        "minimise",
        "maximise",
        "options-menuitem",
        "help-menuitem",
        "feedback-menuitem",
        "texthelp-menuitem"
      ]
    },
    "https://rw4gc-simplify-qa.texthelp.com": {
      dock: Vr.TOP,
      supported: [
        Br.CLICKTOSPEAK,
        Br.DICTIONARY,
        Br.PICTUREDICTIONARY,
        Br.PLAY,
        Br.PAUSE,
        Br.STOP,
        Br.AUDIOMAKER,
        Br.WEBSEARCH,
        Br.SCREENMASKING,
        Br.TRANSLATOR,
        Br.STUDYBLUE,
        Br.STUDYPINK,
        Br.STUDYYELLOW,
        Br.STUDYGREEN,
        Br.STUDYCLEAR,
        Br.STUDYCOLLECT,
        Br.VOCABLIST,
        Br.PRACTICEREADINGALOUD,
        Br.REWORDIFY,
        "settings",
        "help",
        "logo",
        "optionsmenu",
        "close",
        "minimise",
        "maximise",
        "options-menuitem",
        "help-menuitem",
        "feedback-menuitem",
        "texthelp-menuitem"
      ]
    },
    "https://rw4gc-simplify.dev.texthelp.com": {
      dock: Vr.TOP,
      supported: [
        Br.CLICKTOSPEAK,
        Br.DICTIONARY,
        Br.PICTUREDICTIONARY,
        Br.PLAY,
        Br.PAUSE,
        Br.STOP,
        Br.AUDIOMAKER,
        Br.WEBSEARCH,
        Br.SCREENMASKING,
        Br.TRANSLATOR,
        Br.STUDYBLUE,
        Br.STUDYPINK,
        Br.STUDYYELLOW,
        Br.STUDYGREEN,
        Br.STUDYCLEAR,
        Br.STUDYCOLLECT,
        Br.VOCABLIST,
        Br.PRACTICEREADINGALOUD,
        Br.REWORDIFY,
        "settings",
        "help",
        "logo",
        "optionsmenu",
        "close",
        "minimise",
        "maximise",
        "options-menuitem",
        "help-menuitem",
        "feedback-menuitem",
        "texthelp-menuitem"
      ]
    },
    "https://epub.texthelp.com/": {
      dock: Vr.TOP,
      supported: [
        Br.CLICKTOSPEAK,
        Br.DICTIONARY,
        Br.PICTUREDICTIONARY,
        Br.PLAY,
        Br.PAUSE,
        Br.STOP,
        Br.AUDIOMAKER,
        Br.WEBSEARCH,
        Br.SCREENMASKING,
        Br.TRANSLATOR,
        Br.STUDYBLUE,
        Br.STUDYPINK,
        Br.STUDYYELLOW,
        Br.STUDYGREEN,
        Br.STUDYCLEAR,
        Br.STUDYCOLLECT,
        Br.VOCABLIST,
        "settings",
        "help",
        "logo",
        "optionsmenu",
        "close",
        "minimise",
        "maximise",
        "options-menuitem",
        "help-menuitem",
        "feedback-menuitem",
        "texthelp-menuitem"
      ]
    },
    "https://rw4gc-epub-qa.texthelp.com/": {
      dock: Vr.TOP,
      supported: [
        Br.CLICKTOSPEAK,
        Br.DICTIONARY,
        Br.PICTUREDICTIONARY,
        Br.PLAY,
        Br.PAUSE,
        Br.STOP,
        Br.AUDIOMAKER,
        Br.WEBSEARCH,
        Br.SCREENMASKING,
        Br.TRANSLATOR,
        Br.STUDYBLUE,
        Br.STUDYPINK,
        Br.STUDYYELLOW,
        Br.STUDYGREEN,
        Br.STUDYCLEAR,
        Br.STUDYCOLLECT,
        Br.VOCABLIST,
        "settings",
        "help",
        "logo",
        "optionsmenu",
        "close",
        "minimise",
        "maximise",
        "options-menuitem",
        "help-menuitem",
        "feedback-menuitem",
        "texthelp-menuitem"
      ]
    },
    "https://epub.dev.texthelp.com": {
      dock: Vr.TOP,
      supported: [
        Br.CLICKTOSPEAK,
        Br.DICTIONARY,
        Br.PICTUREDICTIONARY,
        Br.PLAY,
        Br.PAUSE,
        Br.STOP,
        Br.AUDIOMAKER,
        Br.WEBSEARCH,
        Br.SCREENMASKING,
        Br.TRANSLATOR,
        Br.STUDYBLUE,
        Br.STUDYPINK,
        Br.STUDYYELLOW,
        Br.STUDYGREEN,
        Br.STUDYCLEAR,
        Br.STUDYCOLLECT,
        Br.VOCABLIST,
        "settings",
        "help",
        "logo",
        "optionsmenu",
        "close",
        "minimise",
        "maximise",
        "options-menuitem",
        "help-menuitem",
        "feedback-menuitem",
        "texthelp-menuitem"
      ]
    },
    "https://*.instructure.com": {
      dock: Vr.TOP,
      supported: [
        Br.PREDICTION,
        Br.CLICKTOSPEAK,
        Br.DICTIONARY,
        Br.PICTUREDICTIONARY,
        Br.PLAY,
        Br.PAUSE,
        Br.STOP,
        Br.SCREENSHOTREADER,
        Br.AUDIOMAKER,
        Br.WEBSEARCH,
        Br.SCREENMASKING,
        Br.TALKANDTYPE,
        Br.TRANSLATOR,
        Br.STUDYBLUE,
        Br.STUDYPINK,
        Br.STUDYYELLOW,
        Br.STUDYGREEN,
        Br.STUDYCLEAR,
        Br.STUDYCOLLECT,
        Br.VOCABLIST,
        Br.SIMPLIFY,
        Br.REWORDIFY,
        Br.PRACTICEREADINGALOUD,
        "optionsmenu",
        "close",
        "minimise",
        "maximise",
        "options-menuitem",
        "help-menuitem",
        "feedback-menuitem",
        "texthelp-menuitem"
      ]
    },
    "https://*.awinfosys.com": {
      dock: Vr.TOP,
      supported: [
        Br.PREDICTION,
        Br.CLICKTOSPEAK,
        Br.DICTIONARY,
        Br.PICTUREDICTIONARY,
        Br.PLAY,
        Br.PAUSE,
        Br.STOP,
        Br.SCREENSHOTREADER,
        Br.AUDIOMAKER,
        Br.WEBSEARCH,
        Br.SCREENMASKING,
        Br.TALKANDTYPE,
        Br.TRANSLATOR,
        Br.STUDYBLUE,
        Br.STUDYPINK,
        Br.STUDYYELLOW,
        Br.STUDYGREEN,
        Br.STUDYCLEAR,
        Br.STUDYCOLLECT,
        Br.VOCABLIST,
        Br.SIMPLIFY,
        Br.REWORDIFY,
        Br.PRACTICEREADINGALOUD,
        "optionsmenu",
        "close",
        "minimise",
        "maximise",
        "options-menuitem",
        "help-menuitem",
        "feedback-menuitem",
        "texthelp-menuitem"
      ]
    },
    default: {
      dock: Vr.FLOAT,
      supported: [
        Br.PLAY,
        Br.PAUSE,
        Br.STOP,
        Br.PREDICTION,
        Br.CLICKTOSPEAK,
        Br.DICTIONARY,
        Br.PICTUREDICTIONARY,
        Br.SCREENSHOTREADER,
        Br.AUDIOMAKER,
        Br.WEBSEARCH,
        Br.SCREENMASKING,
        Br.TALKANDTYPE,
        Br.TRANSLATOR,
        Br.STUDYBLUE,
        Br.STUDYPINK,
        Br.STUDYYELLOW,
        Br.STUDYGREEN,
        Br.STUDYCLEAR,
        Br.STUDYCOLLECT,
        Br.VOCABLIST,
        Br.SIMPLIFY,
        Br.REWORDIFY,
        Br.PRACTICEREADINGALOUD,
        "settings",
        "help",
        "logo",
        "optionsmenu",
        "close",
        "options-menuitem",
        "help-menuitem",
        "feedback-menuitem",
        "texthelp-menuitem"
      ]
    }
  });
  const Kr = Object.freeze({ GROUP: "group", DOMAIN: "domain", SINGLE: "single" }),
    Wr = Object.freeze({ FREEMIUM: "freemium", PREMIUM: "premium", TRIAL: "trial" });
  const Hr = new (class extends wr {
    constructor() {
      const e = new Date();
      e.setDate(e.getDate() - 1);
      const t = {
          audiomaker: !1,
          checkit: !1,
          dictionary: !1,
          studyclear: !1,
          picturedictionary: !1,
          play: !0,
          practicereadingaloud: !0,
          prediction: !1,
          screenmasking: !1,
          screenshotreader: !1,
          simplify: !1,
          rewordify: !1,
          talkandtype: !1,
          translator: !0,
          vocablist: !1,
          websearch: !1,
          studyyellow: !1,
          studygreen: !1,
          studyblue: !1,
          studypink: !1,
          studycollect: !1,
          pause: !0,
          stop: !0,
          clicktospeak: !0,
          voicenote: !1
        },
        n = {
          lastupdated: void 0,
          licensetype: Kr.SINGLE,
          licensesubscription: Wr.FREEMIUM,
          expiry: e.toISOString().split("T")[0],
          authcode: void 0,
          features: t,
          meta: {}
        };
      super(
        {
          license: {
            lastupdated: void 0,
            licensetype: Kr.SINGLE,
            licensesubscription: Wr.FREEMIUM,
            expiry: e.toISOString().split("T")[0],
            authcode: void 0,
            features: t,
            market: "education",
            meta: {}
          },
          lastlicense: void 0
        },
        Gr,
        "th.rw4gc.license.store",
        !1,
        !0
      ),
        (this.defaultFeatures = t),
        (this.defaultLicense = n);
    }
    set license(e) {
      let t = JSON.stringify(e, (e, t) => ("currentDateTime" === e || "lastUpdated" === e ? "null" : t));
      if (this.state.lastlicense && this.state.lastlicense === t) return;
      this.state.lastlicense = t;
      let n = !1;
      void 0 !== e.trial && (n = e.trial);
      let r = !1;
      void 0 !== e.unlimited && (r = e.unlimited),
        (e.licensesubscription = Wr.FREEMIUM),
        (e.licensetype = Kr.SINGLE),
        e.daysleft > 0 && !n ? (e.licensesubscription = Wr.PREMIUM) : e.daysleft > 0 && n && (e.licensesubscription = Wr.TRIAL),
        r ? (e.licensetype = Kr.DOMAIN) : "group" == e.licence_type.toLowerCase() && (e.licensetype = Kr.GROUP),
        (this.state.license = e),
        this._mapLicense(e);
    }
    set authcode(e) {
      void 0 !== e && (this.state.license.authcode = e);
    }
    get nextDay() {
      const e = new Date(),
        t = 1e4 * e.getFullYear() + 100 * e.getMonth() + e.getDate(),
        n = this.state.license.expiry;
      return 1e4 * n.getFullYear() + 100 * n.getMonth() + n.getDate() !== t;
    }
    get lastUpdate() {
      return this.state.license.lastupdated ? this.state.license.lastupdated.toString().split("T")[0] : void 0;
    }
    get licenseObject() {
      return e({}, this.state.license);
    }
    resetLicense() {
      (this.state.lastlicense = void 0), (this.state.license = JSON.parse(JSON.stringify(this.defaultLicense)));
    }
    _mapLicense(t) {
      let n = {
          "Check It": Br.CHECKIT,
          Prediction: Br.PREDICTION,
          Dictionary: Br.DICTIONARY,
          "Picture Dictionary": Br.PICTUREDICTIONARY,
          Play: Br.PLAY,
          "Screenshot Reader": Br.SCREENSHOTREADER,
          "Audio Maker": Br.AUDIOMAKER,
          "Screen Masking": Br.SCREENMASKING,
          "Web Search": Br.WEBSEARCH,
          "Talk&Type": Br.TALKANDTYPE,
          Translator: Br.TRANSLATOR,
          "Vocabulary List": Br.VOCABLIST,
          "Voice Note": Br.VOICENOTE,
          "Simplify Page": Br.SIMPLIFY,
          Rewordify: Br.REWORDIFY,
          "Practice Reading Aloud": Br.PRACTICEREADINGALOUD,
          "Erase Highlights": Br.STUDYCLEAR
        },
        r = t.features,
        i = Object.keys(r).reduce((e, t) => (void 0 !== n[t] && (e[n[t]] = r[t]), e), {}),
        a = e({}, this.defaultFeatures, i);
      void 0 === r.Highlights && (r.Highlights = !1),
        (a[Br.STUDYYELLOW] = r.Highlights),
        (a[Br.STUDYGREEN] = r.Highlights),
        (a[Br.STUDYBLUE] = r.Highlights),
        (a[Br.STUDYPINK] = r.Highlights),
        (a[Br.STUDYCOLLECT] = r.Highlights),
        (a[Br.STUDYCLEAR] = r.Highlights),
        void 0 === r.Play && (r.Play = !0),
        (a[Br.PAUSE] = r.Play),
        (a[Br.STOP] = r.Play),
        (a[Br.CLICKTOSPEAK] = r.Play),
        void 0 === r["Practice Reading Aloud"] && (a[Br.PRACTICEREADINGALOUD] = !0),
        void 0 === r.Translator && (a[Br.TRANSLATOR] = !0),
        (this.state.license.features = JSON.parse(JSON.stringify(a)));
    }
  })();
  const zr = new (class extends wr {
    constructor() {
      const e = {
        audiomaker: !0,
        checkit: !0,
        dictionary: !0,
        studyclear: !0,
        picturedictionary: !0,
        play: !0,
        practicereadingaloud: !0,
        prediction: !0,
        screenmasking: !0,
        screenshotreader: !0,
        simplify: !0,
        rewordify: !0,
        talkandtype: !0,
        translator: !0,
        vocablist: !0,
        websearch: !0,
        studyyellow: !0,
        studygreen: !0,
        studyblue: !0,
        studypink: !0,
        studycollect: !0,
        pause: !0,
        stop: !0,
        clicktospeak: !0,
        voicenote: !0
      };
      super({ features: e }, Gr, "th.rw4gc.datadesk.store"), (this.defaultFeatures = e);
    }
    set features(e) {
      this._mapFeatures(e);
    }
    resetFeatures() {
      this.state.features = this.defaultFeatures;
    }
    _mapFeatures(e) {
      let t = {
          "Check It": Br.CHECKIT,
          Prediction: Br.PREDICTION,
          Dictionary: Br.DICTIONARY,
          "Picture Dictionary": Br.PICTUREDICTIONARY,
          "Hover Speech": Br.CLICKTOSPEAK,
          Play: Br.PLAY,
          "Screenshot Reader": Br.SCREENSHOTREADER,
          "Audio Maker": Br.AUDIOMAKER,
          "Screen Masking": Br.SCREENMASKING,
          "Web Search": Br.WEBSEARCH,
          "Talk&Type": Br.TALKANDTYPE,
          Translator: Br.TRANSLATOR,
          "Vocabulary List": Br.VOCABLIST,
          "Simplify Page": Br.SIMPLIFY,
          Rewordify: Br.REWORDIFY,
          "Practice Reading Aloud": Br.PRACTICEREADINGALOUD,
          "Erase Highlights": Br.STUDYCLEAR,
          "Voice Note": Br.VOICENOTE
        },
        n = JSON.parse(JSON.stringify(this.defaultFeatures)),
        r = Object.keys(e).reduce((n, r) => (void 0 !== t[r] && (n[t[r]] = this._parseBoolean(e[r])), n), {});
      Object.keys(r).forEach((e) => {
        n[e] = r[e];
      });
      let i = !1;
      (i = void 0 === e.Highlights || this._parseBoolean(e.Highlights)),
        (n[Br.STUDYYELLOW] = i),
        (n[Br.STUDYGREEN] = i),
        (n[Br.STUDYBLUE] = i),
        (n[Br.STUDYPINK] = i),
        (n[Br.STUDYCOLLECT] = i),
        (n[Br.STUDYCLEAR] = i),
        (i = void 0 === e.Play || this._parseBoolean(e.Play)),
        (n[Br.PAUSE] = i),
        (n[Br.STOP] = i),
        (this.state.features = n);
    }
    _parseBoolean(e) {
      switch (e) {
        case !0:
        case "true":
        case 1:
        case "1":
        case "on":
        case "yes":
          return !0;
        default:
          return !1;
      }
    }
  })();
  const qr = new (class extends wr {
    constructor() {
      super(
        {
          market: "education",
          notificationVersion: 20230910,
          showNotification: !1,
          onBoardingFinished: !1,
          driveInstall: !1,
          notificationVersion: 0
        },
        Yr,
        "th.rw4gc.Application.store"
      );
    }
    setNotificationVersion(e) {
      this.state.notificationVersion !== e && (this.state.notificationVersion = e);
    }
    setShowNotification(e) {
      this.state.showNotification !== e && (this.state.showNotification = e);
    }
    setMarket(e) {
      this.state.market !== e && (this.state.market = e);
    }
    setOnBoardingFinished(e) {
      this.state.onBoardingFinished !== e && (this.state.onBoardingFinished = e);
    }
    setMarketAndOnBoardingFinished(t, n) {
      if (this.state.market !== t) {
        this.state.market = t;
        let r = e({}, this.state);
        (r.market = t), (r.onBoardingFinished = n), (this.state = r);
      } else if (this.state.onBoardingFinished !== n) {
        this.state.market = t;
        let r = e({}, this.state);
        (r.market = t), (r.onBoardingFinished = n), (this.state = r);
      }
    }
    setDriveInstall(e) {
      this.state.driveInstall = e;
    }
    setNotifcationVersion(e) {
      this.state.notificationVersion = e;
    }
  })();
  const Jr = new (class extends wr {
    constructor() {
      super(
        { licenseType: "Default", accounts: { email: "", google: !0, microsoft: !1, nyc: !1 } },
        Gr,
        "th.rw4gc.Application.local.store"
      );
    }
    setLicenseType(e) {
      this.state.licenseType !== e && (this.state.licenseType = e);
    }
    setLoginType(e) {
      "google" === (e = e.toLowerCase()) &&
        ((this.state.accounts.google = !0), (this.state.accounts.microsoft = !1), (this.state.accounts.nyc = !1)),
        "microsoft" === e && ((this.state.accounts.microsoft = !0), (this.state.accounts.google = !1), (this.state.accounts.nyc = !1)),
        "nyc" === e && ((this.state.accounts.microsoft = !1), (this.state.accounts.google = !1), (this.state.accounts.nyc = !0));
    }
    resetUser(e) {
      (this.state.accounts.email = e), this.save();
    }
  })();
  function $r(e) {
    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
    throw new Error(
      "number" == typeof e
        ? "[MobX] minified error nr: " +
          e +
          (n.length ? " " + n.map(String).join(",") : "") +
          ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts"
        : "[MobX] " + e
    );
  }
  var Xr = {};
  function Qr() {
    return "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : Xr;
  }
  var Zr = Object.assign,
    ei = Object.getOwnPropertyDescriptor,
    ti = Object.defineProperty,
    ni = Object.prototype,
    ri = [];
  Object.freeze(ri);
  var ii = {};
  Object.freeze(ii);
  var ai = "undefined" != typeof Proxy,
    si = Object.toString();
  function oi() {
    ai || $r("Proxy not available");
  }
  function ci(e) {
    var t = !1;
    return function () {
      if (!t) return (t = !0), e.apply(this, arguments);
    };
  }
  var ui = function () {};
  function li(e) {
    return "function" == typeof e;
  }
  function di(e) {
    switch (typeof e) {
      case "string":
      case "symbol":
      case "number":
        return !0;
    }
    return !1;
  }
  function hi(e) {
    return null !== e && "object" == typeof e;
  }
  function pi(e) {
    if (!hi(e)) return !1;
    var t = Object.getPrototypeOf(e);
    if (null == t) return !0;
    var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
    return "function" == typeof n && n.toString() === si;
  }
  function gi(e) {
    var t = null == e ? void 0 : e.constructor;
    return !!t && ("GeneratorFunction" === t.name || "GeneratorFunction" === t.displayName);
  }
  function fi(e, t, n) {
    ti(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
  }
  function mi(e, t, n) {
    ti(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
  }
  function vi(e, t) {
    var n = "isMobX" + e;
    return (
      (t.prototype[n] = !0),
      function (e) {
        return hi(e) && !0 === e[n];
      }
    );
  }
  function yi(e) {
    return e instanceof Map;
  }
  function _i(e) {
    return e instanceof Set;
  }
  var bi = void 0 !== Object.getOwnPropertySymbols;
  var Si =
    "undefined" != typeof Reflect && Reflect.ownKeys
      ? Reflect.ownKeys
      : bi
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
  function wi(e) {
    return null === e ? null : "object" == typeof e ? "" + e : e;
  }
  function Ei(e, t) {
    return ni.hasOwnProperty.call(e, t);
  }
  var Oi =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        Si(e).forEach(function (n) {
          t[n] = ei(e, n);
        }),
        t
      );
    };
  function Ai(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(
          e,
          ((i = r.key),
          (a = void 0),
          "symbol" ==
          typeof (a = (function (e, t) {
            if ("object" != typeof e || null === e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
              var r = n.call(e, t || "default");
              if ("object" != typeof r) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === t ? String : Number)(e);
          })(i, "string"))
            ? a
            : String(a)),
          r
        );
    }
    var i, a;
  }
  function Ti(e, t, n) {
    return t && Ai(e.prototype, t), n && Ai(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
  }
  function Ii() {
    return (
      (Ii = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      Ii.apply(this, arguments)
    );
  }
  function Ci(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), Ri(e, t);
  }
  function Ri(e, t) {
    return (
      (Ri = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
            return (e.__proto__ = t), e;
          }),
      Ri(e, t)
    );
  }
  function ki(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function Ni(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function Pi(e, t) {
    var n = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
    if (n) return (n = n.call(e)).next.bind(n);
    if (
      Array.isArray(e) ||
      (n = (function (e, t) {
        if (e) {
          if ("string" == typeof e) return Ni(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? Ni(e, t)
              : void 0
          );
        }
      })(e)) ||
      (t && e && "number" == typeof e.length)
    ) {
      n && (e = n);
      var r = 0;
      return function () {
        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
      };
    }
    throw new TypeError(
      "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
    );
  }
  var Li = Symbol("mobx-stored-annotations");
  function Di(e) {
    return Object.assign(function (t, n) {
      Ui(t, n, e);
    }, e);
  }
  function Ui(e, t, n) {
    Ei(e, Li) || fi(e, Li, Ii({}, e[Li])),
      (function (e) {
        return e.annotationType_ === Vi;
      })(n) || (e[Li][t] = n);
  }
  var xi = Symbol("mobx administration"),
    ji = (function () {
      function e(e) {
        void 0 === e && (e = "Atom"),
          (this.name_ = void 0),
          (this.isPendingUnobservation_ = !1),
          (this.isBeingObserved_ = !1),
          (this.observers_ = new Set()),
          (this.batchId_ = void 0),
          (this.diffValue_ = 0),
          (this.lastAccessedBy_ = 0),
          (this.lowestObserverState_ = ja.NOT_TRACKING_),
          (this.onBOL = void 0),
          (this.onBUOL = void 0),
          (this.name_ = e),
          (this.batchId_ = es.inBatch ? es.batchId : NaN);
      }
      var t = e.prototype;
      return (
        (t.onBO = function () {
          this.onBOL &&
            this.onBOL.forEach(function (e) {
              return e();
            });
        }),
        (t.onBUO = function () {
          this.onBUOL &&
            this.onBUOL.forEach(function (e) {
              return e();
            });
        }),
        (t.reportObserved = function () {
          return ss(this);
        }),
        (t.reportChanged = function () {
          (es.inBatch && this.batchId_ === es.batchId) ||
            ((es.stateVersion = es.stateVersion < Number.MAX_SAFE_INTEGER ? es.stateVersion + 1 : Number.MIN_SAFE_INTEGER),
            (this.batchId_ = NaN)),
            is(),
            os(this),
            as();
        }),
        (t.toString = function () {
          return this.name_;
        }),
        e
      );
    })(),
    Mi = vi("Atom", ji);
  function Yi(e, t, n) {
    void 0 === t && (t = ui), void 0 === n && (n = ui);
    var r,
      i = new ji(e);
    return t !== ui && Rs(Ts, i, t, r), n !== ui && Cs(i, n), i;
  }
  var Gi = {
    identity: function (e, t) {
      return e === t;
    },
    structural: function (e, t) {
      return Ho(e, t);
    },
    default: function (e, t) {
      return Object.is ? Object.is(e, t) : e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
    },
    shallow: function (e, t) {
      return Ho(e, t, 1);
    }
  };
  function Fi(e, t, n) {
    return Ms(e)
      ? e
      : Array.isArray(e)
      ? Sa.array(e, { name: n })
      : pi(e)
      ? Sa.object(e, void 0, { name: n })
      : yi(e)
      ? Sa.map(e, { name: n })
      : _i(e)
      ? Sa.set(e, { name: n })
      : "function" != typeof e || Es(e) || js(e)
      ? e
      : gi(e)
      ? Us(e)
      : ws(n, e);
  }
  function Bi(e) {
    return e;
  }
  var Vi = "override";
  function Ki(e, t) {
    return { annotationType_: e, options_: t, make_: Wi, extend_: Hi };
  }
  function Wi(e, t, n, r) {
    var i;
    if (null != (i = this.options_) && i.bound) return null === this.extend_(e, t, n, !1) ? 0 : 1;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (Es(n.value)) return 1;
    var a = zi(e, this, t, n, !1);
    return ti(r, t, a), 2;
  }
  function Hi(e, t, n, r) {
    var i = zi(e, this, t, n);
    return e.defineProperty_(t, i, r);
  }
  function zi(e, t, n, r, i) {
    var a, s, o, c, u, l, d, h;
    void 0 === i && (i = es.safeDescriptors), (h = r), t.annotationType_, h.value;
    var p,
      g = r.value;
    null != (a = t.options_) && a.bound && (g = g.bind(null != (p = e.proxy_) ? p : e.target_));
    return {
      value: Na(
        null != (s = null == (o = t.options_) ? void 0 : o.name) ? s : n.toString(),
        g,
        null != (c = null == (u = t.options_) ? void 0 : u.autoAction) && c,
        null != (l = t.options_) && l.bound ? (null != (d = e.proxy_) ? d : e.target_) : void 0
      ),
      configurable: !i || e.isPlainObject_,
      enumerable: !1,
      writable: !i
    };
  }
  function qi(e, t) {
    return { annotationType_: e, options_: t, make_: Ji, extend_: $i };
  }
  function Ji(e, t, n, r) {
    var i;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (null != (i = this.options_) && i.bound && (!Ei(e.target_, t) || !js(e.target_[t])) && null === this.extend_(e, t, n, !1)) return 0;
    if (js(n.value)) return 1;
    var a = Xi(e, this, t, n, !1, !1);
    return ti(r, t, a), 2;
  }
  function $i(e, t, n, r) {
    var i,
      a = Xi(e, this, t, n, null == (i = this.options_) ? void 0 : i.bound);
    return e.defineProperty_(t, a, r);
  }
  function Xi(e, t, n, r, i, a) {
    var s;
    void 0 === a && (a = es.safeDescriptors), (s = r), t.annotationType_, s.value;
    var o,
      c = r.value;
    (js(c) || (c = Us(c)), i) && ((c = c.bind(null != (o = e.proxy_) ? o : e.target_)).isMobXFlow = !0);
    return { value: c, configurable: !a || e.isPlainObject_, enumerable: !1, writable: !a };
  }
  function Qi(e, t) {
    return { annotationType_: e, options_: t, make_: Zi, extend_: ea };
  }
  function Zi(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
  }
  function ea(e, t, n, r) {
    var i;
    return (i = n), this.annotationType_, i.get, e.defineComputedProperty_(t, Ii({}, this.options_, { get: n.get, set: n.set }), r);
  }
  function ta(e, t) {
    return { annotationType_: e, options_: t, make_: na, extend_: ra };
  }
  function na(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
  }
  function ra(e, t, n, r) {
    var i, a;
    return (
      this.annotationType_,
      e.defineObservableProperty_(t, n.value, null != (i = null == (a = this.options_) ? void 0 : a.enhancer) ? i : Fi, r)
    );
  }
  var ia = "true",
    aa = sa();
  function sa(e) {
    return { annotationType_: ia, options_: e, make_: oa, extend_: ca };
  }
  function oa(e, t, n, r) {
    var i, a, s, o;
    if (n.get) return Aa.make_(e, t, n, r);
    if (n.set) {
      var c = Na(t.toString(), n.set);
      return r === e.target_
        ? null === e.defineProperty_(t, { configurable: !es.safeDescriptors || e.isPlainObject_, set: c })
          ? 0
          : 2
        : (ti(r, t, { configurable: !0, set: c }), 2);
    }
    if (r !== e.target_ && "function" == typeof n.value)
      return gi(n.value)
        ? (null != (o = this.options_) && o.autoBind ? Us.bound : Us).make_(e, t, n, r)
        : (null != (s = this.options_) && s.autoBind ? ws.bound : ws).make_(e, t, n, r);
    var u,
      l = !1 === (null == (i = this.options_) ? void 0 : i.deep) ? Sa.ref : Sa;
    "function" == typeof n.value &&
      null != (a = this.options_) &&
      a.autoBind &&
      (n.value = n.value.bind(null != (u = e.proxy_) ? u : e.target_));
    return l.make_(e, t, n, r);
  }
  function ca(e, t, n, r) {
    var i, a, s;
    if (n.get) return Aa.extend_(e, t, n, r);
    if (n.set) return e.defineProperty_(t, { configurable: !es.safeDescriptors || e.isPlainObject_, set: Na(t.toString(), n.set) }, r);
    "function" == typeof n.value &&
      null != (i = this.options_) &&
      i.autoBind &&
      (n.value = n.value.bind(null != (s = e.proxy_) ? s : e.target_));
    return (!1 === (null == (a = this.options_) ? void 0 : a.deep) ? Sa.ref : Sa).extend_(e, t, n, r);
  }
  var ua = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
  function la(e) {
    return e || ua;
  }
  Object.freeze(ua);
  var da = ta("observable"),
    ha = ta("observable.ref", { enhancer: Bi }),
    pa = ta("observable.shallow", {
      enhancer: function (e, t, n) {
        return null == e || ko(e) || po(e) || bo(e) || Eo(e)
          ? e
          : Array.isArray(e)
          ? Sa.array(e, { name: n, deep: !1 })
          : pi(e)
          ? Sa.object(e, void 0, { name: n, deep: !1 })
          : yi(e)
          ? Sa.map(e, { name: n, deep: !1 })
          : _i(e)
          ? Sa.set(e, { name: n, deep: !1 })
          : void 0;
      }
    }),
    ga = ta("observable.struct", {
      enhancer: function (e, t) {
        return Ho(e, t) ? t : e;
      }
    }),
    fa = Di(da);
  function ma(e) {
    return !0 === e.deep
      ? Fi
      : !1 === e.deep
      ? Bi
      : (t = e.defaultDecorator) && null != (n = null == (r = t.options_) ? void 0 : r.enhancer)
      ? n
      : Fi;
    var t, n, r;
  }
  function va(e, t, n) {
    if (!di(t))
      return Ms(e)
        ? e
        : pi(e)
        ? Sa.object(e, t, n)
        : Array.isArray(e)
        ? Sa.array(e, t)
        : yi(e)
        ? Sa.map(e, t)
        : _i(e)
        ? Sa.set(e, t)
        : "object" == typeof e && null !== e
        ? e
        : Sa.box(e, t);
    Ui(e, t, da);
  }
  Zr(va, fa);
  var ya,
    _a,
    ba = {
      box: function (e, t) {
        var n = la(t);
        return new Ua(e, ma(n), n.name, !0, n.equals);
      },
      array: function (e, t) {
        var n = la(t);
        return (!1 === es.useProxies || !1 === n.proxy ? Go : ro)(e, ma(n), n.name);
      },
      map: function (e, t) {
        var n = la(t);
        return new _o(e, ma(n), n.name);
      },
      set: function (e, t) {
        var n = la(t);
        return new wo(e, ma(n), n.name);
      },
      object: function (e, t, n) {
        return Ko(function () {
          return ks(
            !1 === es.useProxies || !1 === (null == n ? void 0 : n.proxy)
              ? Io({}, n)
              : (function (e, t) {
                  var n, r;
                  return oi(), (e = Io(e, t)), null != (r = (n = e[xi]).proxy_) ? r : (n.proxy_ = new Proxy(e, Ks));
                })({}, n),
            e,
            t
          );
        });
      },
      ref: Di(ha),
      shallow: Di(pa),
      deep: fa,
      struct: Di(ga)
    },
    Sa = Zr(va, ba),
    wa = "computed",
    Ea = Qi(wa),
    Oa = Qi("computed.struct", { equals: Gi.structural }),
    Aa = function (e, t) {
      if (di(t)) return Ui(e, t, Ea);
      if (pi(e)) return Di(Qi(wa, e));
      var n = pi(t) ? t : {};
      return (n.get = e), n.name || (n.name = e.name || ""), new Ya(n);
    };
  Object.assign(Aa, Ea), (Aa.struct = Di(Oa));
  var Ta,
    Ia = 0,
    Ca = 1,
    Ra = null != (ya = null == (_a = ei(function () {}, "name")) ? void 0 : _a.configurable) && ya,
    ka = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
  function Na(e, t, n, r) {
    function i() {
      return (function (e, t, n, r, i) {
        var a = (function (e, t, n, r) {
          var i = !1,
            a = 0,
            s = es.trackingDerivation,
            o = !t || !s;
          is();
          var c = es.allowStateChanges;
          o && (za(), (c = Pa(!0)));
          var u = Ja(!0),
            l = {
              runAsAction_: o,
              prevDerivation_: s,
              prevAllowStateChanges_: c,
              prevAllowStateReads_: u,
              notifySpy_: i,
              startTime_: a,
              actionId_: Ca++,
              parentActionId_: Ia
            };
          return (Ia = l.actionId_), l;
        })(0, t);
        try {
          return n.apply(r, i);
        } catch (e) {
          throw ((a.error_ = e), e);
        } finally {
          !(function (e) {
            Ia !== e.actionId_ && $r(30);
            (Ia = e.parentActionId_), void 0 !== e.error_ && (es.suppressReactionErrors = !0);
            La(e.prevAllowStateChanges_), $a(e.prevAllowStateReads_), as(), e.runAsAction_ && qa(e.prevDerivation_);
            es.suppressReactionErrors = !1;
          })(a);
        }
      })(0, n, t, r || this, arguments);
    }
    return void 0 === n && (n = !1), (i.isMobxAction = !0), Ra && ((ka.value = e), ti(i, "name", ka)), i;
  }
  function Pa(e) {
    var t = es.allowStateChanges;
    return (es.allowStateChanges = e), t;
  }
  function La(e) {
    es.allowStateChanges = e;
  }
  Ta = Symbol.toPrimitive;
  var Da,
    Ua = (function (e) {
      function t(t, n, r, i, a) {
        var s;
        return (
          void 0 === r && (r = "ObservableValue"),
          void 0 === a && (a = Gi.default),
          ((s = e.call(this, r) || this).enhancer = void 0),
          (s.name_ = void 0),
          (s.equals = void 0),
          (s.hasUnreportedChange_ = !1),
          (s.interceptors_ = void 0),
          (s.changeListeners_ = void 0),
          (s.value_ = void 0),
          (s.dehancer = void 0),
          (s.enhancer = n),
          (s.name_ = r),
          (s.equals = a),
          (s.value_ = n(t, void 0, r)),
          s
        );
      }
      Ci(t, e);
      var n = t.prototype;
      return (
        (n.dehanceValue = function (e) {
          return void 0 !== this.dehancer ? this.dehancer(e) : e;
        }),
        (n.set = function (e) {
          this.value_, (e = this.prepareNewValue_(e)) !== es.UNCHANGED && this.setNewValue_(e);
        }),
        (n.prepareNewValue_ = function (e) {
          if (Ws(this)) {
            var t = zs(this, { object: this, type: eo, newValue: e });
            if (!t) return es.UNCHANGED;
            e = t.newValue;
          }
          return (e = this.enhancer(e, this.value_, this.name_)), this.equals(this.value_, e) ? es.UNCHANGED : e;
        }),
        (n.setNewValue_ = function (e) {
          var t = this.value_;
          (this.value_ = e), this.reportChanged(), qs(this) && $s(this, { type: eo, object: this, newValue: e, oldValue: t });
        }),
        (n.get = function () {
          return this.reportObserved(), this.dehanceValue(this.value_);
        }),
        (n.intercept_ = function (e) {
          return Hs(this, e);
        }),
        (n.observe_ = function (e, t) {
          return (
            t &&
              e({ observableKind: "value", debugObjectName: this.name_, object: this, type: eo, newValue: this.value_, oldValue: void 0 }),
            Js(this, e)
          );
        }),
        (n.raw = function () {
          return this.value_;
        }),
        (n.toJSON = function () {
          return this.get();
        }),
        (n.toString = function () {
          return this.name_ + "[" + this.value_ + "]";
        }),
        (n.valueOf = function () {
          return wi(this.get());
        }),
        (n[Ta] = function () {
          return this.valueOf();
        }),
        t
      );
    })(ji),
    xa = vi("ObservableValue", Ua);
  Da = Symbol.toPrimitive;
  var ja,
    Ma,
    Ya = (function () {
      function e(e) {
        (this.dependenciesState_ = ja.NOT_TRACKING_),
          (this.observing_ = []),
          (this.newObserving_ = null),
          (this.isBeingObserved_ = !1),
          (this.isPendingUnobservation_ = !1),
          (this.observers_ = new Set()),
          (this.diffValue_ = 0),
          (this.runId_ = 0),
          (this.lastAccessedBy_ = 0),
          (this.lowestObserverState_ = ja.UP_TO_DATE_),
          (this.unboundDepsCount_ = 0),
          (this.value_ = new Fa(null)),
          (this.name_ = void 0),
          (this.triggeredBy_ = void 0),
          (this.isComputing_ = !1),
          (this.isRunningSetter_ = !1),
          (this.derivation = void 0),
          (this.setter_ = void 0),
          (this.isTracing_ = Ma.NONE),
          (this.scope_ = void 0),
          (this.equals_ = void 0),
          (this.requiresReaction_ = void 0),
          (this.keepAlive_ = void 0),
          (this.onBOL = void 0),
          (this.onBUOL = void 0),
          e.get || $r(31),
          (this.derivation = e.get),
          (this.name_ = e.name || "ComputedValue"),
          e.set && (this.setter_ = Na("ComputedValue-setter", e.set)),
          (this.equals_ = e.equals || (e.compareStructural || e.struct ? Gi.structural : Gi.default)),
          (this.scope_ = e.context),
          (this.requiresReaction_ = e.requiresReaction),
          (this.keepAlive_ = !!e.keepAlive);
      }
      var t = e.prototype;
      return (
        (t.onBecomeStale_ = function () {
          !(function (e) {
            if (e.lowestObserverState_ !== ja.UP_TO_DATE_) return;
            (e.lowestObserverState_ = ja.POSSIBLY_STALE_),
              e.observers_.forEach(function (e) {
                e.dependenciesState_ === ja.UP_TO_DATE_ && ((e.dependenciesState_ = ja.POSSIBLY_STALE_), e.onBecomeStale_());
              });
          })(this);
        }),
        (t.onBO = function () {
          this.onBOL &&
            this.onBOL.forEach(function (e) {
              return e();
            });
        }),
        (t.onBUO = function () {
          this.onBUOL &&
            this.onBUOL.forEach(function (e) {
              return e();
            });
        }),
        (t.get = function () {
          if (
            (this.isComputing_ && $r(32, this.name_, this.derivation), 0 !== es.inBatch || 0 !== this.observers_.size || this.keepAlive_)
          ) {
            if ((ss(this), Va(this))) {
              var e = es.trackingContext;
              this.keepAlive_ && !e && (es.trackingContext = this),
                this.trackAndCompute() &&
                  (function (e) {
                    if (e.lowestObserverState_ === ja.STALE_) return;
                    (e.lowestObserverState_ = ja.STALE_),
                      e.observers_.forEach(function (t) {
                        t.dependenciesState_ === ja.POSSIBLY_STALE_
                          ? (t.dependenciesState_ = ja.STALE_)
                          : t.dependenciesState_ === ja.UP_TO_DATE_ && (e.lowestObserverState_ = ja.UP_TO_DATE_);
                      });
                  })(this),
                (es.trackingContext = e);
            }
          } else Va(this) && (this.warnAboutUntrackedRead_(), is(), (this.value_ = this.computeValue_(!1)), as());
          var t = this.value_;
          if (Ba(t)) throw t.cause;
          return t;
        }),
        (t.set = function (e) {
          if (this.setter_) {
            this.isRunningSetter_ && $r(33, this.name_), (this.isRunningSetter_ = !0);
            try {
              this.setter_.call(this.scope_, e);
            } finally {
              this.isRunningSetter_ = !1;
            }
          } else $r(34, this.name_);
        }),
        (t.trackAndCompute = function () {
          var e = this.value_,
            t = this.dependenciesState_ === ja.NOT_TRACKING_,
            n = this.computeValue_(!0),
            r = t || Ba(e) || Ba(n) || !this.equals_(e, n);
          return r && (this.value_ = n), r;
        }),
        (t.computeValue_ = function (e) {
          this.isComputing_ = !0;
          var t,
            n = Pa(!1);
          if (e) t = Ka(this, this.derivation, this.scope_);
          else if (!0 === es.disableErrorBoundaries) t = this.derivation.call(this.scope_);
          else
            try {
              t = this.derivation.call(this.scope_);
            } catch (e) {
              t = new Fa(e);
            }
          return La(n), (this.isComputing_ = !1), t;
        }),
        (t.suspend_ = function () {
          this.keepAlive_ || (Wa(this), (this.value_ = void 0));
        }),
        (t.observe_ = function (e, t) {
          var n = this,
            r = !0,
            i = void 0;
          return Os(function () {
            var a = n.get();
            if (!r || t) {
              var s = za();
              e({ observableKind: "computed", debugObjectName: n.name_, type: eo, object: n, newValue: a, oldValue: i }), qa(s);
            }
            (r = !1), (i = a);
          });
        }),
        (t.warnAboutUntrackedRead_ = function () {}),
        (t.toString = function () {
          return this.name_ + "[" + this.derivation.toString() + "]";
        }),
        (t.valueOf = function () {
          return wi(this.get());
        }),
        (t[Da] = function () {
          return this.valueOf();
        }),
        e
      );
    })(),
    Ga = vi("ComputedValue", Ya);
  !(function (e) {
    (e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
      (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
      (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
      (e[(e.STALE_ = 2)] = "STALE_");
  })(ja || (ja = {})),
    (function (e) {
      (e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK");
    })(Ma || (Ma = {}));
  var Fa = function (e) {
    (this.cause = void 0), (this.cause = e);
  };
  function Ba(e) {
    return e instanceof Fa;
  }
  function Va(e) {
    switch (e.dependenciesState_) {
      case ja.UP_TO_DATE_:
        return !1;
      case ja.NOT_TRACKING_:
      case ja.STALE_:
        return !0;
      case ja.POSSIBLY_STALE_:
        for (var t = Ja(!0), n = za(), r = e.observing_, i = r.length, a = 0; a < i; a++) {
          var s = r[a];
          if (Ga(s)) {
            if (es.disableErrorBoundaries) s.get();
            else
              try {
                s.get();
              } catch (e) {
                return qa(n), $a(t), !0;
              }
            if (e.dependenciesState_ === ja.STALE_) return qa(n), $a(t), !0;
          }
        }
        return Xa(e), qa(n), $a(t), !1;
    }
  }
  function Ka(e, t, n) {
    var r = Ja(!0);
    Xa(e), (e.newObserving_ = new Array(e.observing_.length + 100)), (e.unboundDepsCount_ = 0), (e.runId_ = ++es.runId);
    var i,
      a = es.trackingDerivation;
    if (((es.trackingDerivation = e), es.inBatch++, !0 === es.disableErrorBoundaries)) i = t.call(n);
    else
      try {
        i = t.call(n);
      } catch (e) {
        i = new Fa(e);
      }
    return (
      es.inBatch--,
      (es.trackingDerivation = a),
      (function (e) {
        for (
          var t = e.observing_, n = (e.observing_ = e.newObserving_), r = ja.UP_TO_DATE_, i = 0, a = e.unboundDepsCount_, s = 0;
          s < a;
          s++
        ) {
          var o = n[s];
          0 === o.diffValue_ && ((o.diffValue_ = 1), i !== s && (n[i] = o), i++), o.dependenciesState_ > r && (r = o.dependenciesState_);
        }
        (n.length = i), (e.newObserving_ = null), (a = t.length);
        for (; a--; ) {
          var c = t[a];
          0 === c.diffValue_ && ns(c, e), (c.diffValue_ = 0);
        }
        for (; i--; ) {
          var u = n[i];
          1 === u.diffValue_ && ((u.diffValue_ = 0), ts(u, e));
        }
        r !== ja.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
      })(e),
      $a(r),
      i
    );
  }
  function Wa(e) {
    var t = e.observing_;
    e.observing_ = [];
    for (var n = t.length; n--; ) ns(t[n], e);
    e.dependenciesState_ = ja.NOT_TRACKING_;
  }
  function Ha(e) {
    var t = za();
    try {
      return e();
    } finally {
      qa(t);
    }
  }
  function za() {
    var e = es.trackingDerivation;
    return (es.trackingDerivation = null), e;
  }
  function qa(e) {
    es.trackingDerivation = e;
  }
  function Ja(e) {
    var t = es.allowStateReads;
    return (es.allowStateReads = e), t;
  }
  function $a(e) {
    es.allowStateReads = e;
  }
  function Xa(e) {
    if (e.dependenciesState_ !== ja.UP_TO_DATE_) {
      e.dependenciesState_ = ja.UP_TO_DATE_;
      for (var t = e.observing_, n = t.length; n--; ) t[n].lowestObserverState_ = ja.UP_TO_DATE_;
    }
  }
  var Qa = function () {
      (this.version = 6),
        (this.UNCHANGED = {}),
        (this.trackingDerivation = null),
        (this.trackingContext = null),
        (this.runId = 0),
        (this.mobxGuid = 0),
        (this.inBatch = 0),
        (this.batchId = Number.MIN_SAFE_INTEGER),
        (this.pendingUnobservations = []),
        (this.pendingReactions = []),
        (this.isRunningReactions = !1),
        (this.allowStateChanges = !1),
        (this.allowStateReads = !0),
        (this.enforceActions = !0),
        (this.spyListeners = []),
        (this.globalReactionErrorHandlers = []),
        (this.computedRequiresReaction = !1),
        (this.reactionRequiresObservable = !1),
        (this.observableRequiresReaction = !1),
        (this.disableErrorBoundaries = !1),
        (this.suppressReactionErrors = !1),
        (this.useProxies = !0),
        (this.verifyProxies = !1),
        (this.safeDescriptors = !0),
        (this.stateVersion = Number.MIN_SAFE_INTEGER);
    },
    Za = !0,
    es = (function () {
      var e = Qr();
      return (
        e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (Za = !1),
        e.__mobxGlobals && e.__mobxGlobals.version !== new Qa().version && (Za = !1),
        Za
          ? e.__mobxGlobals
            ? ((e.__mobxInstanceCount += 1), e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}), e.__mobxGlobals)
            : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new Qa()))
          : (setTimeout(function () {
              $r(35);
            }, 1),
            new Qa())
      );
    })();
  function ts(e, t) {
    e.observers_.add(t), e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_);
  }
  function ns(e, t) {
    e.observers_.delete(t), 0 === e.observers_.size && rs(e);
  }
  function rs(e) {
    !1 === e.isPendingUnobservation_ && ((e.isPendingUnobservation_ = !0), es.pendingUnobservations.push(e));
  }
  function is() {
    0 === es.inBatch && (es.batchId = es.batchId < Number.MAX_SAFE_INTEGER ? es.batchId + 1 : Number.MIN_SAFE_INTEGER), es.inBatch++;
  }
  function as() {
    if (0 == --es.inBatch) {
      ds();
      for (var e = es.pendingUnobservations, t = 0; t < e.length; t++) {
        var n = e[t];
        (n.isPendingUnobservation_ = !1),
          0 === n.observers_.size && (n.isBeingObserved_ && ((n.isBeingObserved_ = !1), n.onBUO()), n instanceof Ya && n.suspend_());
      }
      es.pendingUnobservations = [];
    }
  }
  function ss(e) {
    var t = es.trackingDerivation;
    return null !== t
      ? (t.runId_ !== e.lastAccessedBy_ &&
          ((e.lastAccessedBy_ = t.runId_),
          (t.newObserving_[t.unboundDepsCount_++] = e),
          !e.isBeingObserved_ && es.trackingContext && ((e.isBeingObserved_ = !0), e.onBO())),
        e.isBeingObserved_)
      : (0 === e.observers_.size && es.inBatch > 0 && rs(e), !1);
  }
  function os(e) {
    e.lowestObserverState_ !== ja.STALE_ &&
      ((e.lowestObserverState_ = ja.STALE_),
      e.observers_.forEach(function (e) {
        e.dependenciesState_ === ja.UP_TO_DATE_ && e.onBecomeStale_(), (e.dependenciesState_ = ja.STALE_);
      }));
  }
  var cs = (function () {
      function e(e, t, n, r) {
        void 0 === e && (e = "Reaction"),
          (this.name_ = void 0),
          (this.onInvalidate_ = void 0),
          (this.errorHandler_ = void 0),
          (this.requiresObservable_ = void 0),
          (this.observing_ = []),
          (this.newObserving_ = []),
          (this.dependenciesState_ = ja.NOT_TRACKING_),
          (this.diffValue_ = 0),
          (this.runId_ = 0),
          (this.unboundDepsCount_ = 0),
          (this.isDisposed_ = !1),
          (this.isScheduled_ = !1),
          (this.isTrackPending_ = !1),
          (this.isRunning_ = !1),
          (this.isTracing_ = Ma.NONE),
          (this.name_ = e),
          (this.onInvalidate_ = t),
          (this.errorHandler_ = n),
          (this.requiresObservable_ = r);
      }
      var t = e.prototype;
      return (
        (t.onBecomeStale_ = function () {
          this.schedule_();
        }),
        (t.schedule_ = function () {
          this.isScheduled_ || ((this.isScheduled_ = !0), es.pendingReactions.push(this), ds());
        }),
        (t.isScheduled = function () {
          return this.isScheduled_;
        }),
        (t.runReaction_ = function () {
          if (!this.isDisposed_) {
            is(), (this.isScheduled_ = !1);
            var e = es.trackingContext;
            if (((es.trackingContext = this), Va(this))) {
              this.isTrackPending_ = !0;
              try {
                this.onInvalidate_();
              } catch (e) {
                this.reportExceptionInDerivation_(e);
              }
            }
            (es.trackingContext = e), as();
          }
        }),
        (t.track = function (e) {
          if (!this.isDisposed_) {
            is(), (this.isRunning_ = !0);
            var t = es.trackingContext;
            es.trackingContext = this;
            var n = Ka(this, e, void 0);
            (es.trackingContext = t),
              (this.isRunning_ = !1),
              (this.isTrackPending_ = !1),
              this.isDisposed_ && Wa(this),
              Ba(n) && this.reportExceptionInDerivation_(n.cause),
              as();
          }
        }),
        (t.reportExceptionInDerivation_ = function (e) {
          var t = this;
          if (this.errorHandler_) this.errorHandler_(e, this);
          else {
            if (es.disableErrorBoundaries) throw e;
            var n = "[mobx] uncaught error in '" + this + "'";
            es.suppressReactionErrors || console.error(n, e),
              es.globalReactionErrorHandlers.forEach(function (n) {
                return n(e, t);
              });
          }
        }),
        (t.dispose = function () {
          this.isDisposed_ || ((this.isDisposed_ = !0), this.isRunning_ || (is(), Wa(this), as()));
        }),
        (t.getDisposer_ = function (e) {
          var t = this,
            n = function n() {
              t.dispose(), null == e || null == e.removeEventListener || e.removeEventListener("abort", n);
            };
          return null == e || null == e.addEventListener || e.addEventListener("abort", n), (n[xi] = this), n;
        }),
        (t.toString = function () {
          return "Reaction[" + this.name_ + "]";
        }),
        (t.trace = function (e) {}),
        e
      );
    })(),
    us = 100,
    ls = function (e) {
      return e();
    };
  function ds() {
    es.inBatch > 0 || es.isRunningReactions || ls(hs);
  }
  function hs() {
    es.isRunningReactions = !0;
    for (var e = es.pendingReactions, t = 0; e.length > 0; ) {
      ++t === us && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
      for (var n = e.splice(0), r = 0, i = n.length; r < i; r++) n[r].runReaction_();
    }
    es.isRunningReactions = !1;
  }
  var ps = vi("Reaction", cs);
  var gs = "action",
    fs = "autoAction",
    ms = Ki(gs),
    vs = Ki("action.bound", { bound: !0 }),
    ys = Ki(fs, { autoAction: !0 }),
    _s = Ki("autoAction.bound", { autoAction: !0, bound: !0 });
  function bs(e) {
    return function (t, n) {
      return li(t)
        ? Na(t.name || "<unnamed action>", t, e)
        : li(n)
        ? Na(t, n, e)
        : di(n)
        ? Ui(t, n, e ? ys : ms)
        : di(t)
        ? Di(Ki(e ? fs : gs, { name: t, autoAction: e }))
        : void 0;
    };
  }
  var Ss = bs(!1);
  Object.assign(Ss, ms);
  var ws = bs(!0);
  function Es(e) {
    return li(e) && !0 === e.isMobxAction;
  }
  function Os(e, t) {
    var n, r, i, a, s;
    void 0 === t && (t = ii);
    var o,
      c = null != (n = null == (r = t) ? void 0 : r.name) ? n : "Autorun";
    if (!t.scheduler && !t.delay)
      o = new cs(
        c,
        function () {
          this.track(d);
        },
        t.onError,
        t.requiresObservable
      );
    else {
      var u = (function (e) {
          return e.scheduler
            ? e.scheduler
            : e.delay
            ? function (t) {
                return setTimeout(t, e.delay);
              }
            : As;
        })(t),
        l = !1;
      o = new cs(
        c,
        function () {
          l ||
            ((l = !0),
            u(function () {
              (l = !1), o.isDisposed_ || o.track(d);
            }));
        },
        t.onError,
        t.requiresObservable
      );
    }
    function d() {
      e(o);
    }
    return (null != (i = t) && null != (a = i.signal) && a.aborted) || o.schedule_(), o.getDisposer_(null == (s = t) ? void 0 : s.signal);
  }
  Object.assign(ws, ys), (Ss.bound = Di(vs)), (ws.bound = Di(_s));
  var As = function (e) {
    return e();
  };
  var Ts = "onBO",
    Is = "onBUO";
  function Cs(e, t, n) {
    return Rs(Is, e, t, n);
  }
  function Rs(e, t, n, r) {
    var i = "function" == typeof r ? Fo(t, n) : Fo(t),
      a = li(r) ? r : n,
      s = e + "L";
    return (
      i[s] ? i[s].add(a) : (i[s] = new Set([a])),
      function () {
        var e = i[s];
        e && (e.delete(a), 0 === e.size && delete i[s]);
      }
    );
  }
  function ks(e, t, n, r) {
    var i = Oi(t);
    return (
      Ko(function () {
        var t = Io(e, r)[xi];
        Si(i).forEach(function (e) {
          t.extend_(e, i[e], !n || !(e in n) || n[e]);
        });
      }),
      e
    );
  }
  var Ns = 0;
  function Ps() {
    this.message = "FLOW_CANCELLED";
  }
  Ps.prototype = Object.create(Error.prototype);
  var Ls = qi("flow"),
    Ds = qi("flow.bound", { bound: !0 }),
    Us = Object.assign(function (e, t) {
      if (di(t)) return Ui(e, t, Ls);
      var n = e,
        r = n.name || "<unnamed flow>",
        i = function () {
          var e,
            t = arguments,
            i = ++Ns,
            a = Ss(r + " - runid: " + i + " - init", n).apply(this, t),
            s = void 0,
            o = new Promise(function (t, n) {
              var o = 0;
              function c(e) {
                var t;
                s = void 0;
                try {
                  t = Ss(r + " - runid: " + i + " - yield " + o++, a.next).call(a, e);
                } catch (e) {
                  return n(e);
                }
                l(t);
              }
              function u(e) {
                var t;
                s = void 0;
                try {
                  t = Ss(r + " - runid: " + i + " - yield " + o++, a.throw).call(a, e);
                } catch (e) {
                  return n(e);
                }
                l(t);
              }
              function l(e) {
                if (!li(null == e ? void 0 : e.then)) return e.done ? t(e.value) : (s = Promise.resolve(e.value)).then(c, u);
                e.then(l, n);
              }
              (e = n), c(void 0);
            });
          return (
            (o.cancel = Ss(r + " - runid: " + i + " - cancel", function () {
              try {
                s && xs(s);
                var t = a.return(void 0),
                  n = Promise.resolve(t.value);
                n.then(ui, ui), xs(n), e(new Ps());
              } catch (t) {
                e(t);
              }
            })),
            o
          );
        };
      return (i.isMobXFlow = !0), i;
    }, Ls);
  function xs(e) {
    li(e.cancel) && e.cancel();
  }
  function js(e) {
    return !0 === (null == e ? void 0 : e.isMobXFlow);
  }
  function Ms(e) {
    return (function (e, t) {
      return !!e && (void 0 !== t ? !!ko(e) && e[xi].values_.has(t) : ko(e) || !!e[xi] || Mi(e) || ps(e) || Ga(e));
    })(e);
  }
  function Ys(e, t, n) {
    return e.set(t, n), n;
  }
  function Gs(e, t) {
    if (null == e || "object" != typeof e || e instanceof Date || !Ms(e)) return e;
    if (xa(e) || Ga(e)) return Gs(e.get(), t);
    if (t.has(e)) return t.get(e);
    if (po(e)) {
      var n = Ys(t, e, new Array(e.length));
      return (
        e.forEach(function (e, r) {
          n[r] = Gs(e, t);
        }),
        n
      );
    }
    if (Eo(e)) {
      var r = Ys(t, e, new Set());
      return (
        e.forEach(function (e) {
          r.add(Gs(e, t));
        }),
        r
      );
    }
    if (bo(e)) {
      var i = Ys(t, e, new Map());
      return (
        e.forEach(function (e, n) {
          i.set(n, Gs(e, t));
        }),
        i
      );
    }
    var a = Ys(t, e, {});
    return (
      (function (e) {
        if (ko(e)) return e[xi].ownKeys_();
        $r(38);
      })(e).forEach(function (n) {
        ni.propertyIsEnumerable.call(e, n) && (a[n] = Gs(e[n], t));
      }),
      a
    );
  }
  function Fs(e, t) {
    return Gs(e, new Map());
  }
  function Bs(e, t) {
    void 0 === t && (t = void 0), is();
    try {
      return e.apply(t);
    } finally {
      as();
    }
  }
  function Vs(e) {
    return e[xi];
  }
  Us.bound = Di(Ds);
  var Ks = {
    has: function (e, t) {
      return Vs(e).has_(t);
    },
    get: function (e, t) {
      return Vs(e).get_(t);
    },
    set: function (e, t, n) {
      var r;
      return !!di(t) && (null == (r = Vs(e).set_(t, n, !0)) || r);
    },
    deleteProperty: function (e, t) {
      var n;
      return !!di(t) && (null == (n = Vs(e).delete_(t, !0)) || n);
    },
    defineProperty: function (e, t, n) {
      var r;
      return null == (r = Vs(e).defineProperty_(t, n)) || r;
    },
    ownKeys: function (e) {
      return Vs(e).ownKeys_();
    },
    preventExtensions: function (e) {
      $r(13);
    }
  };
  function Ws(e) {
    return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
  }
  function Hs(e, t) {
    var n = e.interceptors_ || (e.interceptors_ = []);
    return (
      n.push(t),
      ci(function () {
        var e = n.indexOf(t);
        -1 !== e && n.splice(e, 1);
      })
    );
  }
  function zs(e, t) {
    var n = za();
    try {
      for (var r = [].concat(e.interceptors_ || []), i = 0, a = r.length; i < a && ((t = r[i](t)) && !t.type && $r(14), t); i++);
      return t;
    } finally {
      qa(n);
    }
  }
  function qs(e) {
    return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
  }
  function Js(e, t) {
    var n = e.changeListeners_ || (e.changeListeners_ = []);
    return (
      n.push(t),
      ci(function () {
        var e = n.indexOf(t);
        -1 !== e && n.splice(e, 1);
      })
    );
  }
  function $s(e, t) {
    var n = za(),
      r = e.changeListeners_;
    if (r) {
      for (var i = 0, a = (r = r.slice()).length; i < a; i++) r[i](t);
      qa(n);
    }
  }
  var Xs = Symbol("mobx-keys");
  function Qs(e, t, n) {
    return pi(e)
      ? ks(e, e, t, n)
      : (Ko(function () {
          var r = Io(e, n)[xi];
          if (!e[Xs]) {
            var i = Object.getPrototypeOf(e),
              a = new Set([].concat(Si(e), Si(i)));
            a.delete("constructor"), a.delete(xi), fi(i, Xs, a);
          }
          e[Xs].forEach(function (e) {
            return r.make_(e, !t || !(e in t) || t[e]);
          });
        }),
        e);
  }
  var Zs = "splice",
    eo = "update",
    to = {
      get: function (e, t) {
        var n = e[xi];
        return t === xi
          ? n
          : "length" === t
          ? n.getArrayLength_()
          : "string" != typeof t || isNaN(t)
          ? Ei(io, t)
            ? io[t]
            : e[t]
          : n.get_(parseInt(t));
      },
      set: function (e, t, n) {
        var r = e[xi];
        return "length" === t && r.setArrayLength_(n), "symbol" == typeof t || isNaN(t) ? (e[t] = n) : r.set_(parseInt(t), n), !0;
      },
      preventExtensions: function () {
        $r(15);
      }
    },
    no = (function () {
      function e(e, t, n, r) {
        void 0 === e && (e = "ObservableArray"),
          (this.owned_ = void 0),
          (this.legacyMode_ = void 0),
          (this.atom_ = void 0),
          (this.values_ = []),
          (this.interceptors_ = void 0),
          (this.changeListeners_ = void 0),
          (this.enhancer_ = void 0),
          (this.dehancer = void 0),
          (this.proxy_ = void 0),
          (this.lastKnownLength_ = 0),
          (this.owned_ = n),
          (this.legacyMode_ = r),
          (this.atom_ = new ji(e)),
          (this.enhancer_ = function (e, n) {
            return t(e, n, "ObservableArray[..]");
          });
      }
      var t = e.prototype;
      return (
        (t.dehanceValue_ = function (e) {
          return void 0 !== this.dehancer ? this.dehancer(e) : e;
        }),
        (t.dehanceValues_ = function (e) {
          return void 0 !== this.dehancer && e.length > 0 ? e.map(this.dehancer) : e;
        }),
        (t.intercept_ = function (e) {
          return Hs(this, e);
        }),
        (t.observe_ = function (e, t) {
          return (
            void 0 === t && (t = !1),
            t &&
              e({
                observableKind: "array",
                object: this.proxy_,
                debugObjectName: this.atom_.name_,
                type: "splice",
                index: 0,
                added: this.values_.slice(),
                addedCount: this.values_.length,
                removed: [],
                removedCount: 0
              }),
            Js(this, e)
          );
        }),
        (t.getArrayLength_ = function () {
          return this.atom_.reportObserved(), this.values_.length;
        }),
        (t.setArrayLength_ = function (e) {
          ("number" != typeof e || isNaN(e) || e < 0) && $r("Out of range: " + e);
          var t = this.values_.length;
          if (e !== t)
            if (e > t) {
              for (var n = new Array(e - t), r = 0; r < e - t; r++) n[r] = void 0;
              this.spliceWithArray_(t, 0, n);
            } else this.spliceWithArray_(e, t - e);
        }),
        (t.updateArrayLength_ = function (e, t) {
          e !== this.lastKnownLength_ && $r(16), (this.lastKnownLength_ += t), this.legacyMode_ && t > 0 && Yo(e + t + 1);
        }),
        (t.spliceWithArray_ = function (e, t, n) {
          var r = this;
          this.atom_;
          var i = this.values_.length;
          if (
            (void 0 === e ? (e = 0) : e > i ? (e = i) : e < 0 && (e = Math.max(0, i + e)),
            (t = 1 === arguments.length ? i - e : null == t ? 0 : Math.max(0, Math.min(t, i - e))),
            void 0 === n && (n = ri),
            Ws(this))
          ) {
            var a = zs(this, { object: this.proxy_, type: Zs, index: e, removedCount: t, added: n });
            if (!a) return ri;
            (t = a.removedCount), (n = a.added);
          }
          if (
            ((n =
              0 === n.length
                ? n
                : n.map(function (e) {
                    return r.enhancer_(e, void 0);
                  })),
            this.legacyMode_)
          ) {
            var s = n.length - t;
            this.updateArrayLength_(i, s);
          }
          var o = this.spliceItemsIntoValues_(e, t, n);
          return (0 === t && 0 === n.length) || this.notifyArraySplice_(e, n, o), this.dehanceValues_(o);
        }),
        (t.spliceItemsIntoValues_ = function (e, t, n) {
          var r;
          if (n.length < 1e4) return (r = this.values_).splice.apply(r, [e, t].concat(n));
          var i = this.values_.slice(e, e + t),
            a = this.values_.slice(e + t);
          this.values_.length += n.length - t;
          for (var s = 0; s < n.length; s++) this.values_[e + s] = n[s];
          for (var o = 0; o < a.length; o++) this.values_[e + n.length + o] = a[o];
          return i;
        }),
        (t.notifyArrayChildUpdate_ = function (e, t, n) {
          var r = !this.owned_ && !1,
            i = qs(this),
            a =
              i || r
                ? {
                    observableKind: "array",
                    object: this.proxy_,
                    type: eo,
                    debugObjectName: this.atom_.name_,
                    index: e,
                    newValue: t,
                    oldValue: n
                  }
                : null;
          this.atom_.reportChanged(), i && $s(this, a);
        }),
        (t.notifyArraySplice_ = function (e, t, n) {
          var r = !this.owned_ && !1,
            i = qs(this),
            a =
              i || r
                ? {
                    observableKind: "array",
                    object: this.proxy_,
                    debugObjectName: this.atom_.name_,
                    type: Zs,
                    index: e,
                    removed: n,
                    added: t,
                    removedCount: n.length,
                    addedCount: t.length
                  }
                : null;
          this.atom_.reportChanged(), i && $s(this, a);
        }),
        (t.get_ = function (e) {
          if (!(this.legacyMode_ && e >= this.values_.length)) return this.atom_.reportObserved(), this.dehanceValue_(this.values_[e]);
          console.warn("[mobx] Out of bounds read: " + e);
        }),
        (t.set_ = function (e, t) {
          var n = this.values_;
          if ((this.legacyMode_ && e > n.length && $r(17, e, n.length), e < n.length)) {
            this.atom_;
            var r = n[e];
            if (Ws(this)) {
              var i = zs(this, { type: eo, object: this.proxy_, index: e, newValue: t });
              if (!i) return;
              t = i.newValue;
            }
            (t = this.enhancer_(t, r)) !== r && ((n[e] = t), this.notifyArrayChildUpdate_(e, t, r));
          } else {
            for (var a = new Array(e + 1 - n.length), s = 0; s < a.length - 1; s++) a[s] = void 0;
            (a[a.length - 1] = t), this.spliceWithArray_(n.length, 0, a);
          }
        }),
        e
      );
    })();
  function ro(e, t, n, r) {
    return (
      void 0 === n && (n = "ObservableArray"),
      void 0 === r && (r = !1),
      oi(),
      Ko(function () {
        var i = new no(n, t, r, !1);
        mi(i.values_, xi, i);
        var a = new Proxy(i.values_, to);
        return (i.proxy_ = a), e && e.length && i.spliceWithArray_(0, 0, e), a;
      })
    );
  }
  var io = {
    clear: function () {
      return this.splice(0);
    },
    replace: function (e) {
      var t = this[xi];
      return t.spliceWithArray_(0, t.values_.length, e);
    },
    toJSON: function () {
      return this.slice();
    },
    splice: function (e, t) {
      for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
      var a = this[xi];
      switch (arguments.length) {
        case 0:
          return [];
        case 1:
          return a.spliceWithArray_(e);
        case 2:
          return a.spliceWithArray_(e, t);
      }
      return a.spliceWithArray_(e, t, r);
    },
    spliceWithArray: function (e, t, n) {
      return this[xi].spliceWithArray_(e, t, n);
    },
    push: function () {
      for (var e = this[xi], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
      return e.spliceWithArray_(e.values_.length, 0, n), e.values_.length;
    },
    pop: function () {
      return this.splice(Math.max(this[xi].values_.length - 1, 0), 1)[0];
    },
    shift: function () {
      return this.splice(0, 1)[0];
    },
    unshift: function () {
      for (var e = this[xi], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
      return e.spliceWithArray_(0, 0, n), e.values_.length;
    },
    reverse: function () {
      return es.trackingDerivation && $r(37, "reverse"), this.replace(this.slice().reverse()), this;
    },
    sort: function () {
      es.trackingDerivation && $r(37, "sort");
      var e = this.slice();
      return e.sort.apply(e, arguments), this.replace(e), this;
    },
    remove: function (e) {
      var t = this[xi],
        n = t.dehanceValues_(t.values_).indexOf(e);
      return n > -1 && (this.splice(n, 1), !0);
    }
  };
  function ao(e, t) {
    "function" == typeof Array.prototype[e] && (io[e] = t(e));
  }
  function so(e) {
    return function () {
      var t = this[xi];
      t.atom_.reportObserved();
      var n = t.dehanceValues_(t.values_);
      return n[e].apply(n, arguments);
    };
  }
  function oo(e) {
    return function (t, n) {
      var r = this,
        i = this[xi];
      return (
        i.atom_.reportObserved(),
        i.dehanceValues_(i.values_)[e](function (e, i) {
          return t.call(n, e, i, r);
        })
      );
    };
  }
  function co(e) {
    return function () {
      var t = this,
        n = this[xi];
      n.atom_.reportObserved();
      var r = n.dehanceValues_(n.values_),
        i = arguments[0];
      return (
        (arguments[0] = function (e, n, r) {
          return i(e, n, r, t);
        }),
        r[e].apply(r, arguments)
      );
    };
  }
  ao("concat", so),
    ao("flat", so),
    ao("includes", so),
    ao("indexOf", so),
    ao("join", so),
    ao("lastIndexOf", so),
    ao("slice", so),
    ao("toString", so),
    ao("toLocaleString", so),
    ao("every", oo),
    ao("filter", oo),
    ao("find", oo),
    ao("findIndex", oo),
    ao("flatMap", oo),
    ao("forEach", oo),
    ao("map", oo),
    ao("some", oo),
    ao("reduce", co),
    ao("reduceRight", co);
  var uo,
    lo,
    ho = vi("ObservableArrayAdministration", no);
  function po(e) {
    return hi(e) && ho(e[xi]);
  }
  var go = {},
    fo = "add",
    mo = "delete";
  (uo = Symbol.iterator), (lo = Symbol.toStringTag);
  var vo,
    yo,
    _o = (function () {
      function e(e, t, n) {
        var r = this;
        void 0 === t && (t = Fi),
          void 0 === n && (n = "ObservableMap"),
          (this.enhancer_ = void 0),
          (this.name_ = void 0),
          (this[xi] = go),
          (this.data_ = void 0),
          (this.hasMap_ = void 0),
          (this.keysAtom_ = void 0),
          (this.interceptors_ = void 0),
          (this.changeListeners_ = void 0),
          (this.dehancer = void 0),
          (this.enhancer_ = t),
          (this.name_ = n),
          li(Map) || $r(18),
          Ko(function () {
            (r.keysAtom_ = Yi("ObservableMap.keys()")), (r.data_ = new Map()), (r.hasMap_ = new Map()), e && r.merge(e);
          });
      }
      var t = e.prototype;
      return (
        (t.has_ = function (e) {
          return this.data_.has(e);
        }),
        (t.has = function (e) {
          var t = this;
          if (!es.trackingDerivation) return this.has_(e);
          var n = this.hasMap_.get(e);
          if (!n) {
            var r = (n = new Ua(this.has_(e), Bi, "ObservableMap.key?", !1));
            this.hasMap_.set(e, r),
              Cs(r, function () {
                return t.hasMap_.delete(e);
              });
          }
          return n.get();
        }),
        (t.set = function (e, t) {
          var n = this.has_(e);
          if (Ws(this)) {
            var r = zs(this, { type: n ? eo : fo, object: this, newValue: t, name: e });
            if (!r) return this;
            t = r.newValue;
          }
          return n ? this.updateValue_(e, t) : this.addValue_(e, t), this;
        }),
        (t.delete = function (e) {
          var t = this;
          if ((this.keysAtom_, Ws(this)) && !zs(this, { type: mo, object: this, name: e })) return !1;
          if (this.has_(e)) {
            var n = qs(this),
              r = n
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: mo,
                    object: this,
                    oldValue: this.data_.get(e).value_,
                    name: e
                  }
                : null;
            return (
              Bs(function () {
                var n;
                t.keysAtom_.reportChanged(),
                  null == (n = t.hasMap_.get(e)) || n.setNewValue_(!1),
                  t.data_.get(e).setNewValue_(void 0),
                  t.data_.delete(e);
              }),
              n && $s(this, r),
              !0
            );
          }
          return !1;
        }),
        (t.updateValue_ = function (e, t) {
          var n = this.data_.get(e);
          if ((t = n.prepareNewValue_(t)) !== es.UNCHANGED) {
            var r = qs(this),
              i = r
                ? { observableKind: "map", debugObjectName: this.name_, type: eo, object: this, oldValue: n.value_, name: e, newValue: t }
                : null;
            n.setNewValue_(t), r && $s(this, i);
          }
        }),
        (t.addValue_ = function (e, t) {
          var n = this;
          this.keysAtom_,
            Bs(function () {
              var r,
                i = new Ua(t, n.enhancer_, "ObservableMap.key", !1);
              n.data_.set(e, i), (t = i.value_), null == (r = n.hasMap_.get(e)) || r.setNewValue_(!0), n.keysAtom_.reportChanged();
            });
          var r = qs(this),
            i = r ? { observableKind: "map", debugObjectName: this.name_, type: fo, object: this, name: e, newValue: t } : null;
          r && $s(this, i);
        }),
        (t.get = function (e) {
          return this.has(e) ? this.dehanceValue_(this.data_.get(e).get()) : this.dehanceValue_(void 0);
        }),
        (t.dehanceValue_ = function (e) {
          return void 0 !== this.dehancer ? this.dehancer(e) : e;
        }),
        (t.keys = function () {
          return this.keysAtom_.reportObserved(), this.data_.keys();
        }),
        (t.values = function () {
          var e = this,
            t = this.keys();
          return Jo({
            next: function () {
              var n = t.next(),
                r = n.done,
                i = n.value;
              return { done: r, value: r ? void 0 : e.get(i) };
            }
          });
        }),
        (t.entries = function () {
          var e = this,
            t = this.keys();
          return Jo({
            next: function () {
              var n = t.next(),
                r = n.done,
                i = n.value;
              return { done: r, value: r ? void 0 : [i, e.get(i)] };
            }
          });
        }),
        (t[uo] = function () {
          return this.entries();
        }),
        (t.forEach = function (e, t) {
          for (var n, r = Pi(this); !(n = r()).done; ) {
            var i = n.value,
              a = i[0],
              s = i[1];
            e.call(t, s, a, this);
          }
        }),
        (t.merge = function (e) {
          var t = this;
          return (
            bo(e) && (e = new Map(e)),
            Bs(function () {
              pi(e)
                ? (function (e) {
                    var t = Object.keys(e);
                    if (!bi) return t;
                    var n = Object.getOwnPropertySymbols(e);
                    return n.length
                      ? [].concat(
                          t,
                          n.filter(function (t) {
                            return ni.propertyIsEnumerable.call(e, t);
                          })
                        )
                      : t;
                  })(e).forEach(function (n) {
                    return t.set(n, e[n]);
                  })
                : Array.isArray(e)
                ? e.forEach(function (e) {
                    var n = e[0],
                      r = e[1];
                    return t.set(n, r);
                  })
                : yi(e)
                ? (e.constructor !== Map && $r(19, e),
                  e.forEach(function (e, n) {
                    return t.set(n, e);
                  }))
                : null != e && $r(20, e);
            }),
            this
          );
        }),
        (t.clear = function () {
          var e = this;
          Bs(function () {
            Ha(function () {
              for (var t, n = Pi(e.keys()); !(t = n()).done; ) {
                var r = t.value;
                e.delete(r);
              }
            });
          });
        }),
        (t.replace = function (e) {
          var t = this;
          return (
            Bs(function () {
              for (
                var n,
                  r = (function (e) {
                    if (yi(e) || bo(e)) return e;
                    if (Array.isArray(e)) return new Map(e);
                    if (pi(e)) {
                      var t = new Map();
                      for (var n in e) t.set(n, e[n]);
                      return t;
                    }
                    return $r(21, e);
                  })(e),
                  i = new Map(),
                  a = !1,
                  s = Pi(t.data_.keys());
                !(n = s()).done;

              ) {
                var o = n.value;
                if (!r.has(o))
                  if (t.delete(o)) a = !0;
                  else {
                    var c = t.data_.get(o);
                    i.set(o, c);
                  }
              }
              for (var u, l = Pi(r.entries()); !(u = l()).done; ) {
                var d = u.value,
                  h = d[0],
                  p = d[1],
                  g = t.data_.has(h);
                if ((t.set(h, p), t.data_.has(h))) {
                  var f = t.data_.get(h);
                  i.set(h, f), g || (a = !0);
                }
              }
              if (!a)
                if (t.data_.size !== i.size) t.keysAtom_.reportChanged();
                else
                  for (var m = t.data_.keys(), v = i.keys(), y = m.next(), _ = v.next(); !y.done; ) {
                    if (y.value !== _.value) {
                      t.keysAtom_.reportChanged();
                      break;
                    }
                    (y = m.next()), (_ = v.next());
                  }
              t.data_ = i;
            }),
            this
          );
        }),
        (t.toString = function () {
          return "[object ObservableMap]";
        }),
        (t.toJSON = function () {
          return Array.from(this);
        }),
        (t.observe_ = function (e, t) {
          return Js(this, e);
        }),
        (t.intercept_ = function (e) {
          return Hs(this, e);
        }),
        Ti(e, [
          {
            key: "size",
            get: function () {
              return this.keysAtom_.reportObserved(), this.data_.size;
            }
          },
          {
            key: lo,
            get: function () {
              return "Map";
            }
          }
        ]),
        e
      );
    })(),
    bo = vi("ObservableMap", _o);
  var So = {};
  (vo = Symbol.iterator), (yo = Symbol.toStringTag);
  var wo = (function () {
      function e(e, t, n) {
        var r = this;
        void 0 === t && (t = Fi),
          void 0 === n && (n = "ObservableSet"),
          (this.name_ = void 0),
          (this[xi] = So),
          (this.data_ = new Set()),
          (this.atom_ = void 0),
          (this.changeListeners_ = void 0),
          (this.interceptors_ = void 0),
          (this.dehancer = void 0),
          (this.enhancer_ = void 0),
          (this.name_ = n),
          li(Set) || $r(22),
          (this.enhancer_ = function (e, r) {
            return t(e, r, n);
          }),
          Ko(function () {
            (r.atom_ = Yi(r.name_)), e && r.replace(e);
          });
      }
      var t = e.prototype;
      return (
        (t.dehanceValue_ = function (e) {
          return void 0 !== this.dehancer ? this.dehancer(e) : e;
        }),
        (t.clear = function () {
          var e = this;
          Bs(function () {
            Ha(function () {
              for (var t, n = Pi(e.data_.values()); !(t = n()).done; ) {
                var r = t.value;
                e.delete(r);
              }
            });
          });
        }),
        (t.forEach = function (e, t) {
          for (var n, r = Pi(this); !(n = r()).done; ) {
            var i = n.value;
            e.call(t, i, i, this);
          }
        }),
        (t.add = function (e) {
          var t = this;
          if ((this.atom_, Ws(this)) && !zs(this, { type: fo, object: this, newValue: e })) return this;
          if (!this.has(e)) {
            Bs(function () {
              t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged();
            });
            var n = qs(this),
              r = n ? { observableKind: "set", debugObjectName: this.name_, type: fo, object: this, newValue: e } : null;
            n && $s(this, r);
          }
          return this;
        }),
        (t.delete = function (e) {
          var t = this;
          if (Ws(this) && !zs(this, { type: mo, object: this, oldValue: e })) return !1;
          if (this.has(e)) {
            var n = qs(this),
              r = n ? { observableKind: "set", debugObjectName: this.name_, type: mo, object: this, oldValue: e } : null;
            return (
              Bs(function () {
                t.atom_.reportChanged(), t.data_.delete(e);
              }),
              n && $s(this, r),
              !0
            );
          }
          return !1;
        }),
        (t.has = function (e) {
          return this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(e));
        }),
        (t.entries = function () {
          var e = 0,
            t = Array.from(this.keys()),
            n = Array.from(this.values());
          return Jo({
            next: function () {
              var r = e;
              return (e += 1), r < n.length ? { value: [t[r], n[r]], done: !1 } : { done: !0 };
            }
          });
        }),
        (t.keys = function () {
          return this.values();
        }),
        (t.values = function () {
          this.atom_.reportObserved();
          var e = this,
            t = 0,
            n = Array.from(this.data_.values());
          return Jo({
            next: function () {
              return t < n.length ? { value: e.dehanceValue_(n[t++]), done: !1 } : { done: !0 };
            }
          });
        }),
        (t.replace = function (e) {
          var t = this;
          return (
            Eo(e) && (e = new Set(e)),
            Bs(function () {
              Array.isArray(e) || _i(e)
                ? (t.clear(),
                  e.forEach(function (e) {
                    return t.add(e);
                  }))
                : null != e && $r("Cannot initialize set from " + e);
            }),
            this
          );
        }),
        (t.observe_ = function (e, t) {
          return Js(this, e);
        }),
        (t.intercept_ = function (e) {
          return Hs(this, e);
        }),
        (t.toJSON = function () {
          return Array.from(this);
        }),
        (t.toString = function () {
          return "[object ObservableSet]";
        }),
        (t[vo] = function () {
          return this.values();
        }),
        Ti(e, [
          {
            key: "size",
            get: function () {
              return this.atom_.reportObserved(), this.data_.size;
            }
          },
          {
            key: yo,
            get: function () {
              return "Set";
            }
          }
        ]),
        e
      );
    })(),
    Eo = vi("ObservableSet", wo),
    Oo = Object.create(null),
    Ao = "remove",
    To = (function () {
      function e(e, t, n, r) {
        void 0 === t && (t = new Map()),
          void 0 === r && (r = aa),
          (this.target_ = void 0),
          (this.values_ = void 0),
          (this.name_ = void 0),
          (this.defaultAnnotation_ = void 0),
          (this.keysAtom_ = void 0),
          (this.changeListeners_ = void 0),
          (this.interceptors_ = void 0),
          (this.proxy_ = void 0),
          (this.isPlainObject_ = void 0),
          (this.appliedAnnotations_ = void 0),
          (this.pendingKeys_ = void 0),
          (this.target_ = e),
          (this.values_ = t),
          (this.name_ = n),
          (this.defaultAnnotation_ = r),
          (this.keysAtom_ = new ji("ObservableObject.keys")),
          (this.isPlainObject_ = pi(this.target_));
      }
      var t = e.prototype;
      return (
        (t.getObservablePropValue_ = function (e) {
          return this.values_.get(e).get();
        }),
        (t.setObservablePropValue_ = function (e, t) {
          var n = this.values_.get(e);
          if (n instanceof Ya) return n.set(t), !0;
          if (Ws(this)) {
            var r = zs(this, { type: eo, object: this.proxy_ || this.target_, name: e, newValue: t });
            if (!r) return null;
            t = r.newValue;
          }
          if ((t = n.prepareNewValue_(t)) !== es.UNCHANGED) {
            var i = qs(this),
              a = i
                ? {
                    type: eo,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    oldValue: n.value_,
                    name: e,
                    newValue: t
                  }
                : null;
            n.setNewValue_(t), i && $s(this, a);
          }
          return !0;
        }),
        (t.get_ = function (e) {
          return es.trackingDerivation && !Ei(this.target_, e) && this.has_(e), this.target_[e];
        }),
        (t.set_ = function (e, t, n) {
          return (
            void 0 === n && (n = !1),
            Ei(this.target_, e)
              ? this.values_.has(e)
                ? this.setObservablePropValue_(e, t)
                : n
                ? Reflect.set(this.target_, e, t)
                : ((this.target_[e] = t), !0)
              : this.extend_(e, { value: t, enumerable: !0, writable: !0, configurable: !0 }, this.defaultAnnotation_, n)
          );
        }),
        (t.has_ = function (e) {
          if (!es.trackingDerivation) return e in this.target_;
          this.pendingKeys_ || (this.pendingKeys_ = new Map());
          var t = this.pendingKeys_.get(e);
          return t || ((t = new Ua(e in this.target_, Bi, "ObservableObject.key?", !1)), this.pendingKeys_.set(e, t)), t.get();
        }),
        (t.make_ = function (e, t) {
          if ((!0 === t && (t = this.defaultAnnotation_), !1 !== t)) {
            if (!(e in this.target_)) {
              var n;
              if (null != (n = this.target_[Li]) && n[e]) return;
              $r(1, t.annotationType_, this.name_ + "." + e.toString());
            }
            for (var r = this.target_; r && r !== ni; ) {
              var i = ei(r, e);
              if (i) {
                var a = t.make_(this, e, i, r);
                if (0 === a) return;
                if (1 === a) break;
              }
              r = Object.getPrototypeOf(r);
            }
            No(this, t, e);
          }
        }),
        (t.extend_ = function (e, t, n, r) {
          if ((void 0 === r && (r = !1), !0 === n && (n = this.defaultAnnotation_), !1 === n)) return this.defineProperty_(e, t, r);
          var i = n.extend_(this, e, t, r);
          return i && No(this, n, e), i;
        }),
        (t.defineProperty_ = function (e, t, n) {
          void 0 === n && (n = !1), this.keysAtom_;
          try {
            is();
            var r = this.delete_(e);
            if (!r) return r;
            if (Ws(this)) {
              var i = zs(this, { object: this.proxy_ || this.target_, name: e, type: fo, newValue: t.value });
              if (!i) return null;
              var a = i.newValue;
              t.value !== a && (t = Ii({}, t, { value: a }));
            }
            if (n) {
              if (!Reflect.defineProperty(this.target_, e, t)) return !1;
            } else ti(this.target_, e, t);
            this.notifyPropertyAddition_(e, t.value);
          } finally {
            as();
          }
          return !0;
        }),
        (t.defineObservableProperty_ = function (e, t, n, r) {
          void 0 === r && (r = !1), this.keysAtom_;
          try {
            is();
            var i = this.delete_(e);
            if (!i) return i;
            if (Ws(this)) {
              var a = zs(this, { object: this.proxy_ || this.target_, name: e, type: fo, newValue: t });
              if (!a) return null;
              t = a.newValue;
            }
            var s = Ro(e),
              o = { configurable: !es.safeDescriptors || this.isPlainObject_, enumerable: !0, get: s.get, set: s.set };
            if (r) {
              if (!Reflect.defineProperty(this.target_, e, o)) return !1;
            } else ti(this.target_, e, o);
            var c = new Ua(t, n, "ObservableObject.key", !1);
            this.values_.set(e, c), this.notifyPropertyAddition_(e, c.value_);
          } finally {
            as();
          }
          return !0;
        }),
        (t.defineComputedProperty_ = function (e, t, n) {
          void 0 === n && (n = !1), this.keysAtom_;
          try {
            is();
            var r = this.delete_(e);
            if (!r) return r;
            if (Ws(this)) if (!zs(this, { object: this.proxy_ || this.target_, name: e, type: fo, newValue: void 0 })) return null;
            t.name || (t.name = "ObservableObject.key"), (t.context = this.proxy_ || this.target_);
            var i = Ro(e),
              a = { configurable: !es.safeDescriptors || this.isPlainObject_, enumerable: !1, get: i.get, set: i.set };
            if (n) {
              if (!Reflect.defineProperty(this.target_, e, a)) return !1;
            } else ti(this.target_, e, a);
            this.values_.set(e, new Ya(t)), this.notifyPropertyAddition_(e, void 0);
          } finally {
            as();
          }
          return !0;
        }),
        (t.delete_ = function (e, t) {
          if ((void 0 === t && (t = !1), this.keysAtom_, !Ei(this.target_, e))) return !0;
          if (Ws(this) && !zs(this, { object: this.proxy_ || this.target_, name: e, type: Ao })) return null;
          try {
            var n, r;
            is();
            var i,
              a = qs(this),
              s = this.values_.get(e),
              o = void 0;
            if (!s && a) o = null == (i = ei(this.target_, e)) ? void 0 : i.value;
            if (t) {
              if (!Reflect.deleteProperty(this.target_, e)) return !1;
            } else delete this.target_[e];
            if (
              (s && (this.values_.delete(e), s instanceof Ua && (o = s.value_), os(s)),
              this.keysAtom_.reportChanged(),
              null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(e in this.target_),
              a)
            ) {
              var c = {
                type: Ao,
                observableKind: "object",
                object: this.proxy_ || this.target_,
                debugObjectName: this.name_,
                oldValue: o,
                name: e
              };
              0, a && $s(this, c);
            }
          } finally {
            as();
          }
          return !0;
        }),
        (t.observe_ = function (e, t) {
          return Js(this, e);
        }),
        (t.intercept_ = function (e) {
          return Hs(this, e);
        }),
        (t.notifyPropertyAddition_ = function (e, t) {
          var n,
            r,
            i = qs(this);
          if (i) {
            var a = i
              ? {
                  type: fo,
                  observableKind: "object",
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: e,
                  newValue: t
                }
              : null;
            i && $s(this, a);
          }
          null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(!0), this.keysAtom_.reportChanged();
        }),
        (t.ownKeys_ = function () {
          return this.keysAtom_.reportObserved(), Si(this.target_);
        }),
        (t.keys_ = function () {
          return this.keysAtom_.reportObserved(), Object.keys(this.target_);
        }),
        e
      );
    })();
  function Io(e, t) {
    var n;
    if (Ei(e, xi)) return e;
    var r = null != (n = null == t ? void 0 : t.name) ? n : "ObservableObject",
      i = new To(
        e,
        new Map(),
        String(r),
        (function (e) {
          var t;
          return e ? (null != (t = e.defaultDecorator) ? t : sa(e)) : void 0;
        })(t)
      );
    return fi(e, xi, i), e;
  }
  var Co = vi("ObservableObjectAdministration", To);
  function Ro(e) {
    return (
      Oo[e] ||
      (Oo[e] = {
        get: function () {
          return this[xi].getObservablePropValue_(e);
        },
        set: function (t) {
          return this[xi].setObservablePropValue_(e, t);
        }
      })
    );
  }
  function ko(e) {
    return !!hi(e) && Co(e[xi]);
  }
  function No(e, t, n) {
    var r;
    null == (r = e.target_[Li]) || delete r[n];
  }
  var Po = jo(0),
    Lo = (function () {
      var e = !1,
        t = {};
      return (
        Object.defineProperty(t, "0", {
          set: function () {
            e = !0;
          }
        }),
        (Object.create(t)[0] = 1),
        !1 === e
      );
    })(),
    Do = 0,
    Uo = function () {};
  !(function (e, t) {
    Object.setPrototypeOf
      ? Object.setPrototypeOf(e.prototype, t)
      : void 0 !== e.prototype.__proto__
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
  })(Uo, Array.prototype);
  var xo = (function (e, t, n) {
    function r(t, n, r, i) {
      var a;
      return (
        void 0 === r && (r = "ObservableArray"),
        void 0 === i && (i = !1),
        (a = e.call(this) || this),
        Ko(function () {
          var e = new no(r, n, i, !0);
          (e.proxy_ = ki(a)), mi(ki(a), xi, e), t && t.length && a.spliceWithArray(0, 0, t), Lo && Object.defineProperty(ki(a), "0", Po);
        }),
        a
      );
    }
    Ci(r, e);
    var i = r.prototype;
    return (
      (i.concat = function () {
        this[xi].atom_.reportObserved();
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return Array.prototype.concat.apply(
          this.slice(),
          t.map(function (e) {
            return po(e) ? e.slice() : e;
          })
        );
      }),
      (i[n] = function () {
        var e = this,
          t = 0;
        return Jo({
          next: function () {
            return t < e.length ? { value: e[t++], done: !1 } : { done: !0, value: void 0 };
          }
        });
      }),
      Ti(r, [
        {
          key: "length",
          get: function () {
            return this[xi].getArrayLength_();
          },
          set: function (e) {
            this[xi].setArrayLength_(e);
          }
        },
        {
          key: t,
          get: function () {
            return "Array";
          }
        }
      ]),
      r
    );
  })(Uo, Symbol.toStringTag, Symbol.iterator);
  function jo(e) {
    return {
      enumerable: !1,
      configurable: !0,
      get: function () {
        return this[xi].get_(e);
      },
      set: function (t) {
        this[xi].set_(e, t);
      }
    };
  }
  function Mo(e) {
    ti(xo.prototype, "" + e, jo(e));
  }
  function Yo(e) {
    if (e > Do) {
      for (var t = Do; t < e + 100; t++) Mo(t);
      Do = e;
    }
  }
  function Go(e, t, n) {
    return new xo(e, t, n);
  }
  function Fo(e, t) {
    if ("object" == typeof e && null !== e) {
      if (po(e)) return void 0 !== t && $r(23), e[xi].atom_;
      if (Eo(e)) return e.atom_;
      if (bo(e)) {
        if (void 0 === t) return e.keysAtom_;
        var n = e.data_.get(t) || e.hasMap_.get(t);
        return n || $r(25, t, Vo(e)), n;
      }
      if (ko(e)) {
        if (!t) return $r(26);
        var r = e[xi].values_.get(t);
        return r || $r(27, t, Vo(e)), r;
      }
      if (Mi(e) || Ga(e) || ps(e)) return e;
    } else if (li(e) && ps(e[xi])) return e[xi];
    $r(28);
  }
  function Bo(e, t) {
    return e || $r(29), void 0 !== t ? Bo(Fo(e, t)) : Mi(e) || Ga(e) || ps(e) || bo(e) || Eo(e) ? e : e[xi] ? e[xi] : void $r(24, e);
  }
  function Vo(e, t) {
    var n;
    if (void 0 !== t) n = Fo(e, t);
    else {
      if (Es(e)) return e.name;
      n = ko(e) || bo(e) || Eo(e) ? Bo(e) : Fo(e);
    }
    return n.name_;
  }
  function Ko(e) {
    var t = za(),
      n = Pa(!0);
    is();
    try {
      return e();
    } finally {
      as(), La(n), qa(t);
    }
  }
  Object.entries(io).forEach(function (e) {
    var t = e[0],
      n = e[1];
    "concat" !== t && fi(xo.prototype, t, n);
  }),
    Yo(1e3);
  var Wo = ni.toString;
  function Ho(e, t, n) {
    return void 0 === n && (n = -1), zo(e, t, n);
  }
  function zo(e, t, n, r, i) {
    if (e === t) return 0 !== e || 1 / e == 1 / t;
    if (null == e || null == t) return !1;
    if (e != e) return t != t;
    var a = typeof e;
    if ("function" !== a && "object" !== a && "object" != typeof t) return !1;
    var s = Wo.call(e);
    if (s !== Wo.call(t)) return !1;
    switch (s) {
      case "[object RegExp]":
      case "[object String]":
        return "" + e == "" + t;
      case "[object Number]":
        return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
      case "[object Date]":
      case "[object Boolean]":
        return +e == +t;
      case "[object Symbol]":
        return "undefined" != typeof Symbol && Symbol.valueOf.call(e) === Symbol.valueOf.call(t);
      case "[object Map]":
      case "[object Set]":
        n >= 0 && n++;
    }
    (e = qo(e)), (t = qo(t));
    var o = "[object Array]" === s;
    if (!o) {
      if ("object" != typeof e || "object" != typeof t) return !1;
      var c = e.constructor,
        u = t.constructor;
      if (c !== u && !(li(c) && c instanceof c && li(u) && u instanceof u) && "constructor" in e && "constructor" in t) return !1;
    }
    if (0 === n) return !1;
    n < 0 && (n = -1), (i = i || []);
    for (var l = (r = r || []).length; l--; ) if (r[l] === e) return i[l] === t;
    if ((r.push(e), i.push(t), o)) {
      if ((l = e.length) !== t.length) return !1;
      for (; l--; ) if (!zo(e[l], t[l], n - 1, r, i)) return !1;
    } else {
      var d,
        h = Object.keys(e);
      if (((l = h.length), Object.keys(t).length !== l)) return !1;
      for (; l--; ) if (!Ei(t, (d = h[l])) || !zo(e[d], t[d], n - 1, r, i)) return !1;
    }
    return r.pop(), i.pop(), !0;
  }
  function qo(e) {
    return po(e) ? e.slice() : yi(e) || bo(e) || _i(e) || Eo(e) ? Array.from(e.entries()) : e;
  }
  function Jo(e) {
    return (e[Symbol.iterator] = $o), e;
  }
  function $o() {
    return this;
  }
  ["Symbol", "Map", "Set"].forEach(function (e) {
    void 0 === Qr()[e] && $r("MobX requires global '" + e + "' to be available or polyfilled");
  }),
    "object" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
      __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
        spy: function (e) {
          return console.warn("[mobx.spy] Is a no-op in production builds"), function () {};
        },
        extras: { getDebugName: Vo },
        $mobx: xi
      });
  class Xo extends EventTarget {
    constructor(e = {}, t = Gr, n = null, r = !0, i = !0) {
      super(),
        (this.isInitialised = !1),
        this._instance !== this &&
          ((this._instance = this),
          (this.state = e),
          (this.storageType = t),
          (this.storageKey = n),
          (this.merge = r),
          (this._persistentStore = null),
          (this._persistOn = i));
    }
    async initialise() {
      var e = this;
      return new Promise(async function (t, n) {
        if (!0 === e.isInitialised) t(e.state);
        else if (null === e._persistentStore) {
          (e._persistentStore = new Fr(e.storageType)),
            e._persistentStore.onUpdate(async function (t) {
              JSON.stringify(e.state) !== JSON.stringify(t) && (e.state = t);
            });
          let n = await e._persistentStore.retrieve(e.storageKey, Fs(e.state));
          e.state && (e.state = n), Qs(e), e._startAutoSaving(e, e.storageKey), t(n), (e.isInitialised = !0);
        } else Qs(e), t(e.state), (e.isInitialised = !0);
      });
    }
    async waitForInit() {
      if (!0 === this.isInitialised) return !0;
      if (!1 === this.isInitialised) {
        for (; !0 !== this.isInitialised; )
          await new Promise((e) => {
            setTimeout(e, 100);
          });
        return !0;
      }
      return !1;
    }
    set persist(e) {
      (this._persistOn = e), e && this.save();
    }
    save() {
      this._storeOnSave(this, this.storageKey, !0);
    }
    get stateJSON() {
      return Fs(this.state);
    }
    _startAutoSaving(e, t) {
      var n = this;
      Os(async function () {
        n._storeOnSave(e, t), n.dispatchEvent(new CustomEvent("onStoreUpdated"));
      });
    }
    async _storeOnSave(e, t, n = !1) {
      (this._persistOn || n) && (await this._persistentStore.store(t, Fs(e.state), this.merge));
    }
  }
  const Qo = new (class extends Xo {
    constructor() {
      super({ token: "" }, Yr, "th.rw4gc.token.store");
    }
    setToken(e) {
      this.state.token = e;
    }
  })();
  const Zo = function (e) {
      var t, n;
      switch (e) {
        default:
        case "default":
          return [
            { name: "checkit", key: "settings_features_checkit", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "prediction", key: "settings_features_prediction", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "clicktospeak", key: "settings_features_hover_speech", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "dictionary", key: "settings_features_dictionary", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            {
              name: "picturedictionary",
              key: "settings_features_picture_dictionary",
              enabled: !0,
              dragging: !1,
              hidden: !1,
              supported: !0
            },
            { name: "play", key: "settings_features_play", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "pause", key: "settings_features_pause", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "stop", key: "settings_features_stop", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "screenshotreader", key: "settings_features_screenshot_reader", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "audiomaker", key: "settings_features_audio_maker", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "websearch", key: "settings_features_web_search", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "screenmasking", key: "settings_features_screen_masking", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "talkandtype", key: "settings_features_talk_and_type", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "translator", key: "settings_features_translator", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "studyyellow", key: "settings_features_yellow_highlight", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "studygreen", key: "settings_features_green_highlight", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "studyblue", key: "settings_features_blue_highlight", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "studypink", key: "settings_features_pink_highlight", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "studyclear", key: "settings_features_clear_highlight", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "studycollect", key: "settings_features_collect_highlight", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "vocablist", key: "settings_features_vocabulary", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "simplify", key: "settings_features_simplify_page", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            {
              name: "rewordify",
              key: "settings_features_rewordify",
              enabled: !0,
              dragging: !1,
              hidden: !1,
              supported: !(
                null == (t = navigator.userAgentData) ||
                !t.brands.find(({ brand: e, version: t }) => "Chromium" === e && parseFloat(t, 10) >= 102)
              )
            },
            { name: "voicenote", key: "settings_features_voicenote", enabled: !0, dragging: !1, supported: !0 },
            {
              name: "practicereadingaloud",
              key: "settings_features_practice_reading_aloud",
              enabled: !0,
              dragging: !1,
              hidden: !1,
              supported: !0
            }
          ];
        case "workplace":
          return [
            { name: "play", key: "settings_features_play", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "pause", key: "settings_features_pause", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "stop", key: "settings_features_stop", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "checkit", key: "settings_features_checkit", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "prediction", key: "settings_features_prediction", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "dictionary", key: "settings_features_dictionary", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            {
              name: "picturedictionary",
              key: "settings_features_picture_dictionary",
              enabled: !0,
              dragging: !1,
              hidden: !1,
              supported: !0
            },
            { name: "screenshotreader", key: "settings_features_screenshot_reader", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "talkandtype", key: "settings_features_talk_and_type", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "screenmasking", key: "settings_features_screen_masking", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "studyyellow", key: "settings_features_yellow_highlight", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "studygreen", key: "settings_features_green_highlight", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "studyblue", key: "settings_features_blue_highlight", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "studypink", key: "settings_features_pink_highlight", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "studyclear", key: "settings_features_clear_highlight", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "studycollect", key: "settings_features_collect_highlight", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "vocablist", key: "settings_features_vocabulary", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "translator", key: "settings_features_translator", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "voicenote", key: "settings_features_voicenote", enabled: !0, dragging: !1, supported: !0 },
            { name: "audiomaker", key: "settings_features_audio_maker", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "clicktospeak", key: "settings_features_hover_speech", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "websearch", key: "settings_features_web_search", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "simplify", key: "settings_features_simplify_page", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            {
              name: "rewordify",
              key: "settings_features_rewordify",
              enabled: !0,
              dragging: !1,
              hidden: !1,
              supported: !(
                null == (n = navigator.userAgentData) ||
                !n.brands.find(({ brand: e, version: t }) => "Chromium" === e && parseFloat(t, 10) >= 102)
              )
            },
            {
              name: "practicereadingaloud",
              key: "settings_features_practice_reading_aloud",
              enabled: !1,
              dragging: !1,
              hidden: !1,
              supported: !1
            }
          ];
      }
    },
    ec = new (class extends Xo {
      constructor() {
        const e = {
          activeSettingsTab: "settings_speech",
          speech: { voice: "Ava", speed: 50, reading: !0, speakAsIType: { onEachWord: !1, onEachSentence: !1 }, translation: "es" },
          prediction: {
            numberOfResults: 10,
            general: { followCursor: !0, predictAhead: !0, predictAheadPolicy: !0, predictOnHover: !1 },
            fontSize: "15"
          },
          checkIt: { dictionary: [], readonhover: !1 },
          screenMasking: {
            backgroundColor: "#000000",
            readingLightColor: "#fffffe",
            backgroundOpacity: 50,
            readingLightOpacity: 50,
            readingLightHeight: 200,
            readingLight: !0
          },
          voiceTyping: { voiceInput: "GDocs" },
          language: { language: "en_GB", features: "en_GB" },
          rewordify: { fluencyLevel: 1 },
          features: Zo("education"),
          theme: "Light",
          about: { activateButtonDisabled: !0 },
          defaultsSet: !1
        };
        super(e, Yr, "th.rw4gc.settings.store", !1, !1), (this.initialState = e);
      }
      initialise(e) {
        if ((super.initialise(), "workplace" === e)) {
          const e = this.state.features.map((e) => e.name).indexOf("practicereadingaloud");
          e > -1 && ((this.state.features[e].enabled = !1), (this.state.features[e].supported = !1));
        }
      }
      setWholeState(e) {
        this.state = e;
      }
      setDefaultState() {
        this.setWholeState(this.initialState), this.save();
      }
      setScreenMaskingState(e) {
        this.state.screenMasking = e;
      }
      setCurrentPage(e) {
        this.state.activeSettingsTab = e;
      }
      setFeaturesOrder(e) {
        this.state.features = e;
      }
      setButtonSupported(e, t) {
        const n = this.state.features.map((e) => e.name).indexOf(e);
        n > -1 && (this.state.features[n].supported = t);
      }
      setFirstLoadSettings(e, t, n, r, i, a, s, o, c) {
        (this.state.speech.voice = e),
          (this.state.speech.speed = t),
          (this.state.speech.reading = n),
          (this.state.speech.speakAsIType.onEachWord = r),
          (this.state.speech.speakAsIType.onEachSentence = i),
          (this.state.speech.translation = a),
          (this.state.language.language = s),
          (this.state.language.features = o),
          (this.state.defaultsSet = c),
          (this.initialState.speech.voice = e),
          (this.initialState.speech.speed = t),
          (this.initialState.speech.reading = n),
          (this.initialState.speech.speakAsIType.onEachWord = r),
          (this.initialState.speech.speakAsIType.onEachSentence = i),
          (this.initialState.speech.translation = a),
          (this.initialState.language.language = s),
          (this.initialState.language.features = o),
          (this.initialState.defaultsSet = c);
      }
      setPolicySettings(e) {
        void 0 !== e.voice && ((this.state.speech.voice = e.voice), (this.initialState.speech.voice = e.voice)),
          void 0 !== e.speed && ((this.state.speech.speed = e.speed), (this.initialState.speech.speed = e.speed)),
          void 0 !== e.reading && ((this.state.speech.reading = e.reading), (this.initialState.speech.reading = e.reading)),
          void 0 !== e.onEachWord &&
            ((this.state.speech.speakAsIType.onEachWord = e.onEachWord), (this.initialState.speech.speakAsIType.onEachWord = e.onEachWord)),
          void 0 !== e.onEachSentence &&
            ((this.state.speech.speakAsIType.onEachSentence = e.onEachSentence),
            (this.initialState.speech.speakAsIType.onEachSentence = e.onEachSentence)),
          void 0 !== e.translation &&
            ((this.state.speech.translation = e.translation), (this.initialState.speech.translation = e.translation)),
          void 0 !== e.numberOfResults &&
            ((this.state.prediction.numberOfResults = e.numberOfResults),
            (this.initialState.prediction.numberOfResults = e.numberOfResults)),
          void 0 !== e.followCursor &&
            ((this.state.prediction.general.followCursor = e.followCursor),
            (this.initialState.prediction.general.followCursor = e.followCursor)),
          void 0 !== e.predictAhead &&
            ((this.state.prediction.general.predictAhead = e.predictAhead),
            (this.initialState.prediction.general.predictAhead = e.predictAhead)),
          void 0 !== e.predictOnHover &&
            ((this.state.prediction.general.predictOnHover = e.predictOnHover),
            (this.initialState.prediction.general.predictOnHover = e.predictOnHover)),
          void 0 !== e.fontSize && ((this.state.prediction.fontSize = e.fontSize), (this.initialState.prediction.fontSize = e.fontSize)),
          void 0 !== e.readonhover &&
            ((this.state.checkIt.readonhover = e.readonhover), (this.initialState.checkIt.readonhover = e.readonhover)),
          void 0 !== e.backgroundColor &&
            ((this.state.screenMasking.backgroundColor = e.backgroundColor),
            (this.initialState.screenMasking.backgroundColor = e.backgroundColor)),
          void 0 !== e.readingLightColor &&
            ((this.state.screenMasking.readingLightColor = e.readingLightColor),
            (this.initialState.screenMasking.readingLightColor = e.readingLightColor)),
          void 0 !== e.backgroundOpacity &&
            ((this.state.screenMasking.backgroundOpacity = e.backgroundOpacity),
            (this.initialState.screenMasking.backgroundOpacity = e.backgroundOpacity)),
          void 0 !== e.readingLightOpacity &&
            ((this.state.screenMasking.readingLightOpacity = e.readingLightOpacity),
            (this.initialState.screenMasking.readingLightOpacity = e.readingLightOpacity)),
          void 0 !== e.readingLightHeight &&
            ((this.state.screenMasking.readingLightHeight = e.readingLightHeight),
            (this.initialState.screenMasking.readingLightHeight = e.readingLightHeight)),
          void 0 !== e.readingLight &&
            ((this.state.screenMasking.readingLight = e.readingLight), (this.initialState.screenMasking.readingLight = e.readingLight)),
          void 0 !== e.language && ((this.state.language.language = e.language), (this.initialState.language.language = e.language)),
          void 0 !== e.features && ((this.state.language.features = e.features), (this.initialState.language.features = e.features)),
          void 0 !== e.theme && ((this.state.theme = e.theme), (this.initialState.theme = e.theme)),
          void 0 !== e.market && ((this.state.market = e.market), (this.initialState.market = e.market));
      }
      addCheckitDictionaryItem(e) {
        this.state.checkIt.dictionary.includes(e) || this.state.checkIt.dictionary.push(e);
      }
      setPredictAheadPolicy(e) {
        (this.state.prediction.general.predictAheadPolicy = e),
          this.state.prediction.general.predictAheadPolicy || (this.state.prediction.general.predictAhead = !1);
      }
      setV1Settings(e) {
        void 0 !== e.voice && (this.state.speech.voice = e.voice.substr(0, e.voice.length - 1)),
          void 0 !== e.speed && (this.state.speech.speed = e.speed),
          void 0 !== e.continousreading && (this.state.speech.reading = e.continousreading),
          void 0 !== e.translang && (this.state.speech.translation = e.translang),
          void 0 !== e.speakoneachsentence && (this.state.speech.speakAsIType.onEachSentence = e.speakoneachsentence),
          void 0 !== e.speakoneachword && (this.state.speech.speakAsIType.onEachWord = e.speakoneachword),
          void 0 !== e.predictionResults && (this.state.prediction.numberOfResults = e.predictionResults),
          void 0 !== e.predictionTextSize && (this.state.prediction.fontSize = e.predictionTextSize),
          void 0 !== e.predictionCaretPosition && (this.state.prediction.general.followCursor = e.predictionCaretPosition),
          void 0 !== e.predictionpredictahead && (this.state.prediction.general.predictAhead = e.predictionpredictahead),
          void 0 !== e.screenmaskingBackgroundColour && (this.state.screenMasking.backgroundColor = e.screenmaskingBackgroundColour),
          void 0 !== e.screenmaskingBackgroundOpacity && (this.state.screenMasking.backgroundOpacity = e.screenmaskingBackgroundOpacity),
          void 0 !== e.screenmaskingReadingLightColour && (this.state.screenMasking.readingLightColor = e.screenmaskingReadingLightColour),
          void 0 !== e.screenmaskingReadingLightHeight && (this.state.screenMasking.readingLightHeight = e.screenmaskingReadingLightHeight),
          void 0 !== e.screenmaskingReadingLightOpacity &&
            (this.state.screenMasking.readingLightOpacity = e.screenmaskingReadingLightOpacity),
          void 0 !== e.screenmaskingReadingLightVisibility &&
            (this.state.screenMasking.readingLight = e.screenmaskingReadingLightVisibility),
          void 0 !== e.language && (this.state.language.language = e.language),
          void 0 !== e.services && (this.state.language.features = e.services);
      }
      setV1ToolbarFeatures(e) {
        e.map &&
          e.map((e) => {
            let t = this.state.features.find((t) => {
              if (e.command === t.name) return e;
              switch (e.command) {
                case "factfinder":
                  if ("websearch" === t.name) return e;
                  break;
                case "speechinput":
                  if ("talkandtype" === t.name) return e;
                  break;
                case "speechmaker":
                  if ("audiomaker" === t.name) return e;
                  break;
                case "highlightyellow":
                  if ("studyyellow" === t.name) return e;
                  break;
                case "highlightgreen":
                  if ("studygreen" === t.name) return e;
                  break;
                case "highlightblue":
                  if ("studyblue" === t.name) return e;
                  break;
                case "highlightpink":
                  if ("studypink" === t.name) return e;
                  break;
                case "highlightclear":
                  if ("studyclear" === t.name) return e;
                  break;
                case "highlightscollect":
                  if ("studycollect" === t.name) return e;
                  break;
                case "vocabtool":
                  if ("vocablist" === t.name) return e;
              }
            });
            t && (t.enabled = e.show);
          });
      }
      importV1Settings(e, t, n) {
        (this.state.defaultsSet = !1),
          this.setV1Settings(e),
          t.length > 0 && (this.state.checkIt.dictionary = t),
          this.setV1ToolbarFeatures(n),
          this.save();
      }
      fixVoice() {
        this.state.speech.voice.startsWith("ss-") && ((this.state.speech.voice = this.state.speech.voice.slice(3)), this.save());
      }
      setMarketFeatures(e) {
        (this.state.features = Zo(e)), this.save();
      }
    })();
  var tc = ["body"];
  function nc(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function rc(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? nc(Object(n), !0).forEach(function (t) {
            ic(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : nc(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function ic(e, t, n) {
    return (
      (t = (function (e) {
        var t = (function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == typeof t ? t : String(t);
      })(t)) in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  function ac(e, t) {
    if (null == e) return {};
    var n,
      r,
      i = (function (e, t) {
        if (null == e) return {};
        var n,
          r,
          i = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i;
      })(e, t);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
  }
  function sc(e, t, n, r, i, a, s) {
    try {
      var o = e[a](s),
        c = o.value;
    } catch (e) {
      return void n(e);
    }
    o.done ? t(c) : Promise.resolve(c).then(r, i);
  }
  function oc(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, i) {
        var a = e.apply(t, n);
        function s(e) {
          sc(a, r, i, s, o, "next", e);
        }
        function o(e) {
          sc(a, r, i, s, o, "throw", e);
        }
        s(void 0);
      });
    };
  }
  class cc {
    constructor() {}
    static doFetch(e) {
      var t = arguments,
        n = this;
      return oc(function* () {
        var r = t.length > 1 && void 0 !== t[1] ? t[1] : {},
          { body: i } = r,
          a = ac(r, tc);
        return new Promise(
          (function () {
            var t = oc(function* (t, r) {
              if (
                ((n.method = "GET"), (n.timeout = 0), void 0 === a.method ? (n.method = i ? "POST" : "GET") : (n.method = a.method), a.blob)
              ) {
                for (
                  var s = atob(i.split(",")[1]), o = new ArrayBuffer(s.length), c = new Uint8Array(o), u = a.headers["content-type"], l = 0;
                  l < s.length;
                  l++
                )
                  c[l] = s.charCodeAt(l);
                i = new Blob([c], { type: u });
              }
              a.timeout && (n.timeout = a.timeout);
              var d = rc(rc({ method: n.method }, a), {}, { headers: rc({}, a.headers) });
              i && (d.body = i);
              var h = null;
              if (n.timeout > 0)
                try {
                  var p = new AbortController(),
                    g = setTimeout(() => p.abort(), n.timeout);
                  (h = yield fetch(e, rc(rc({}, d), {}, { signal: p.signal }))), clearTimeout(g);
                } catch (e) {
                  return Promise.reject(e);
                }
              else h = yield fetch(e, d);
              if (h.ok) {
                var f = {};
                if (
                  ((f.contentType = h.headers.get("content-type")), (f.headers = Object.fromEntries(h.headers.entries())), f.contentType)
                ) {
                  if (-1 !== f.contentType.indexOf("application/json")) f.json = yield h.json();
                  else if (f.contentType.startsWith("text")) f.text = yield h.text();
                  else if (-1 !== f.contentType.indexOf("audio/mpeg")) {
                    var m = yield h.arrayBuffer();
                    f.arrayBuffer = ((e) => {
                      for (var t = "", n = new Uint8Array(e), r = n.byteLength, i = 0; i < r; i++) t += String.fromCharCode(n[i]);
                      return btoa(t);
                    })(m);
                  } else f.blob = yield h.blob();
                  t({ data: f });
                } else r(f);
              } else r(f);
            });
            return function (e, n) {
              return t.apply(this, arguments);
            };
          })()
        );
      })();
    }
  }
  class uc {
    constructor() {
      chrome.runtime.onMessage.addListener((e, t, n) => {
        if (t.id !== chrome.runtime.id) return !1;
        if (!e.command) return !1;
        if ("swfetch8598" === e.command)
          cc.doFetch(e.url, e.options).then((e) => {
            n(e);
          });
        return !0;
      });
    }
  }
  const lc = Object.freeze({ GOOGLE: "Google", MICROSOFT: "Microsoft", NYC: "NYC", DEFAULT: "Default" });
  function dc(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function hc(e, t, n) {
    return (
      (t = (function (e) {
        var t = (function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == typeof t ? t : String(t);
      })(t)) in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  let pc = class {
      store(e, t, n) {
        throw "IStorage store not implemented!";
      }
      retrieve(e) {
        throw "IStorage retrieve not implemented!";
      }
      remove(e) {
        throw "IStorage remove not implemented!";
      }
    },
    gc = class {
      static encode(e) {
        const t = JSON.stringify(e);
        return btoa ? btoa(t) : Buffer.from(t).toString("base64");
      }
      static decode(e) {
        if (atob) return atob(e);
        const t = Buffer.from(e, "base64");
        return JSON.parse(t.toString("utf8"));
      }
    };
  const fc = (e, ...t) => {
      if (!t.length) return e;
      const n = t.shift();
      if (vc(e) && vc(n)) {
        const r = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? dc(Object(n), !0).forEach(function (t) {
                  hc(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : dc(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
          }
          return e;
        })({}, e);
        for (const e in n)
          Object.prototype.hasOwnProperty.call(n, e) &&
            (vc(n[e]) && vc(r[e])
              ? (r[e] = fc(r[e], n[e]))
              : Array.isArray(n[e]) && Array.isArray(r[e])
              ? (r[e] = mc(r[e], n[e]))
              : (r[e] = n[e]));
        return fc(r, ...t);
      }
      return fc(e, ...t);
    },
    mc = (e, t) => {
      let n = [...t];
      const r = ((e, t) => {
          if (e.hasOwnProperty("name") && t.hasOwnProperty("name")) return "name";
          if (e.length > 0 && t.length > 0) {
            const n = e[0],
              r = t[0];
            for (const i in n)
              if (n.hasOwnProperty(i) && r.hasOwnProperty(i)) {
                const r = e.map((e) => e[i]),
                  a = t.map((e) => e[i]),
                  s = new Set(r),
                  o = new Set(a);
                if ("string" == typeof n[i] && s.size === e.length && o.size === t.length) return i;
              }
          }
          return null;
        })(e, t),
        i = t.map((e) => e[r]),
        a = e.map((e) => e[r]);
      let s = [];
      for (let e in t[0]) s.push(e);
      let o = [];
      for (let t in e[0]) o.push(t);
      let c = o.filter((e) => !s.some((t) => t === e));
      if (c.length > 0)
        for (let t = 0; t < n.length; t++) {
          let i = e.find((e) => e[r] === n[t][r]);
          for (let e = 0; e < c.length; e++) n[t][c[e]] = i[c[e]];
        }
      return (
        a
          .filter((e) => !i.some((t) => t === e))
          .forEach((t) => {
            const i = e.find((e) => {
                if (e[r] === t) return !0;
              }),
              a = e.findIndex((e) => e === i),
              s = e[a - 1 >= 0 ? a - 1 : a][r],
              o = n.findIndex((e) => e[r] === s);
            n.splice(o + 1, 0, i);
          }),
        n
      );
    },
    vc = (e) => null !== e && "object" == typeof e && !Array.isArray(e),
    yc = "local";
  let _c = class extends pc {
      constructor(e) {
        super(),
          (this._syncType = e),
          (this._event = void 0),
          (this._keys = new Set()),
          "none" !== this._syncType &&
            ((chrome || {}).storage || {}).onChanged &&
            chrome.storage.onChanged.addListener((e, t) => {
              if (!this._event) return;
              if (t !== this._syncType) return;
              if (!this._keys.has(Object.keys(e)[0])) return;
              let n = JSON.parse(gc.decode(Object.values(e)[0].newValue));
              this._event(n);
            });
      }
      onUpdate(e) {
        this._event = e;
      }
      store(e, t, n) {
        var r = this;
        return new Promise(async function (n, i) {
          try {
            if ("none" === r._syncType) return void n(!0);
            const i = gc.encode(t),
              a = await r._retrieve(e, r._syncType);
            if (a && a[e] === i) return void n(!0);
            r._store(e, i, r._syncType), r._keys.add(e), n(!0);
          } catch (e) {
            i(e);
          }
        });
      }
      retrieve(e, t = null) {
        var n = this;
        return new Promise(async function (r, i) {
          try {
            if ("none" === n._syncType) return void r(t);
            let i = {};
            if (Object.keys(e).length > 0) {
              let a = await n._retrieve(e, n._syncType);
              if (a) {
                if (((i = gc.decode(a[e])), n._keys.add(e), !t)) return void r(JSON.parse(i));
                r(fc(t, JSON.parse(i)));
              } else n._keys.add(e), r(t);
            } else n._keys.add(e), r(t);
          } catch (e) {
            i(e);
          }
        });
      }
      remove(e) {
        var t = this;
        return new Promise(async function (n, r) {
          try {
            if ("none" === t._syncType) return void n(!1);
            if (Object.keys(e).length > 0) {
              await t._remove(e, t._syncType);
              t._keys.delete(e), n(!0);
            }
          } catch (e) {
            r(e);
          }
        });
      }
      _store(e, t, n) {
        ((chrome || {}).storage || {})[this._syncType] ? chrome.storage[n].set({ [e]: t }) : localStorage.setItem(e, t);
      }
      _retrieve(e, t) {
        return new Promise((n, r) => {
          ((chrome || {}).storage || {})[this._syncType]
            ? chrome.storage[t].get([e], (e) => {
                "{}" !== JSON.stringify(e) ? n(e) : n(null);
              })
            : n({ [e]: localStorage.getItem(e) });
        });
      }
      _remove(e, t) {
        ((chrome || {}).storage || {})[this._syncType] ? chrome.storage[t].remove(e) : localStorage.removeItem(e);
      }
    },
    bc = class {
      constructor(e, t = "microsoft") {
        (this.idName = t),
          (this.clientId = e),
          (this.userInfo = void 0),
          (this.email = void 0),
          (this.accessCode = void 0),
          (this.redirectUri =
            "undefined" != typeof chrome && chrome.identity ? chrome.identity.getRedirectURL() : `${window.location.origin}/index.html`),
          (this.storage = new _c(yc)),
          this.storage.retrieve("rw4gc.ms-code.cache").then((e) => {
            null === e || (0 === Object.keys(e).length && e.constructor === Object) || (this.accessCode = e);
          });
      }
      async getUserInfo(e = !0, t = !1, n = !1) {
        var r = this;
        return new Promise((n, i) => {
          if (chrome) {
            if (this.userInfo && !t) return void n(this.userInfo);
            chrome.identity.getProfileUserInfo(async function (t) {
              e ? (await r.authorize(["user.read"]), n(r.userInfo)) : i("Unable to get user details");
            });
          } else i(new Error("Not running on a chromium browser"));
        });
      }
      get msSiteUrl() {
        return "https://thzbf.texthelp.com/";
      }
      get sitePath() {
        return "mslogin.html";
      }
      async authorizeDocumentCreation() {
        return await this.authorize(["user.read", "files.readwrite"], !1, !0);
      }
      async authorizeDriveInstall() {
        return "";
      }
      async authorize(e, t = !1, n = !0) {
        var r = this;
        try {
          return new Promise(async function (t, i) {
            const a = (await r._chromeTabsQuery({ active: !0, currentWindow: !0 }))[0].id;
            let s = await r._chromeTabsQuery({ url: [`${r.msSiteUrl}*`] });
            if (s[0]) chrome.tabs.update(s[0].id, { url: `${r.msSiteUrl}${r.sitePath}?action=authorise&scopes=${o}` });
            else {
              var o = Object.keys(e)
                .map((t) => e[t])
                .join(",");
              chrome.tabs.create({ url: `${r.msSiteUrl}${r.sitePath}?action=authorise&scopes=${o}` });
            }
            chrome.runtime.onMessage.addListener(async function e(s, o) {
              if (o.id !== chrome.runtime.id) return !1;
              if (!s.command) return !1;
              switch (s.command.toLowerCase()) {
                case "thswauthorised":
                  chrome.runtime.onMessage.removeListener(e),
                    (r.accessCode = s.account.accessToken),
                    n && ((r.userInfo = r.genericUserFormat(s.account.account)), r.storage.store("rw4gc.ms-code.cache", r.accessCode, !1)),
                    r._chromeTabsQuery({ url: [`${r.msSiteUrl}*`] }).then((e) => {
                      e.length > 0 && chrome.tabs.remove(e[0].id);
                    }),
                    chrome.tabs.update(a, { active: !0 }),
                    t(r.accessCode);
                  break;
                case "thswauthcancelled":
                  chrome.runtime.onMessage.removeListener(e), i("User cancelled");
              }
            });
          });
        } catch (e) {
          console.log(e);
        }
      }
      signOut() {
        var e = this;
        return new Promise(async function (t, n) {
          try {
            const n = { active: !0, currentWindow: !0 },
              r = await e._chromeTabsQuery(n);
            try {
              const n = r[0].id;
              let i,
                a = await e._chromeTabsQuery({ url: [`${e.msSiteUrl}*`] });
              a[0]
                ? ((i = a[0].id), chrome.tabs.update(a[0].id, { url: `${e.msSiteUrl}${e.sitePath}?action=signout&active=${n}` }))
                : chrome.tabs.create({ url: `${e.msSiteUrl}${e.sitePath}?action=signout&active=${n}` }, function (e) {
                    i = e.id;
                  });
              let s = async function n(r, i) {
                if ((i.id !== chrome.runtime.id && t(), r.command || t(), "thswsignedout" === r.command.toLowerCase())) {
                  chrome.runtime.onMessage.removeListener(n), (e.accessCode = void 0);
                  try {
                    e.storage.remove("rw4gc.ms-code.cache");
                  } catch (e) {}
                  t();
                }
              };
              chrome.runtime.onMessage.addListener(s),
                chrome.tabs.onUpdated.addListener((e, t) => {
                  e === i && "complete" === t.status && t.url;
                });
            } catch (n) {
              (e.accessCode = void 0), e.storage.remove("rw4gc.ms-code.cache"), t();
            }
          } catch (e) {
            console.log(e), t();
          }
        });
      }
      async getAndValidateAccessToken(e, t = !0) {
        return { accessToken: await this.authorize(e, t) };
      }
      genericUserFormat(e) {
        let t = { licensetype: "microsoft" },
          n = e.displayName;
        null == n && (n = e.name), (t.name = n);
        let r = e.mail;
        return null == r && (r = e.userPrincipalName), null == r && (r = e.username), (t.email = r), t;
      }
      _openTab(e) {
        chrome.tabs.query({}, function (t) {
          for (let n, r = 0; (n = t[r]); r++)
            if (n.url === e) return chrome.tabs.reload(n.id, {}, function () {}), void chrome.tabs.update(n.id, { active: !0 });
          chrome.tabs.create({ url: e });
        });
      }
      _chromeTabsQuery(e) {
        return new Promise((t) => {
          chrome.tabs.query(e, (e) => {
            t(e);
          });
        });
      }
    },
    Sc = class {
      constructor(e = "google") {
        (this.idName = e),
          (this.userScopes = ["https://www.googleapis.com/auth/userinfo.email"]),
          (this.docScopes = [
            "https://www.googleapis.com/auth/drive.apps.readonly",
            "https://www.googleapis.com/auth/drive.appdata",
            "https://www.googleapis.com/auth/drive.file",
            "https://www.googleapis.com/auth/drive.appfolder"
          ]),
          (this.driveScopes = ["https://www.googleapis.com/auth/drive.install"]);
      }
      getUserInfo(e = !0, t = !1, n = !1) {
        return new Promise((r, i) => {
          try {
            chrome
              ? chrome.identity
                ? chrome.identity.getProfileUserInfo((a) => {
                    null !== a && null !== a.email && "" === a.email && null !== a.id && "" === a.id && n
                      ? ((this.userInfo = null), r(null))
                      : a && a.email.length > 0 && (void 0 === a.licensetype || "google" === a.licensetype) && !t
                      ? ((a.licensetype = "google"), (this.userInfo = a), r(a))
                      : e
                      ? this.authorize(this.userScopes).then((e) => {
                          this.getUserInfoFromToken(e).then((e) => {
                            (this.userInfo = e), r(e);
                          });
                        })
                      : i("Unable to get user details");
                  })
                : e
                ? this.authorize(this.userScopes).then((e) => {
                    this.getUserInfoFromToken(e).then((e) => {
                      (this.userInfo = e), r(e);
                    });
                  })
                : i("Unable to get user details")
              : i("Not running on a chromium browser");
          } catch (e) {
            i(e.Message);
          }
        });
      }
      async authorizeDocumentCreation() {
        return await this.getAndValidateAccessToken(this.docScopes);
      }
      async authorizeDriveInstall() {
        return this.authorize(this.driveScopes);
      }
      async getUserInfoFromToken(e) {
        const t = await fetch("https://www.googleapis.com/userinfo/v2/me", { method: "GET", headers: { Authorization: `Bearer ${e}` } });
        if (!t.ok) throw Error("invalid_response_from_oauth");
        const { name: n, email: r } = await t.json();
        return { name: n, email: r, licensetype: "google" };
      }
      getAuthToken(e, t, n = !0) {
        return new Promise((r, i) => {
          try {
            chrome.identity.getAuthToken({ interactive: e, scopes: t }, (a) => {
              if (chrome.runtime.lastError || null == a)
                if (n)
                  try {
                    chrome.identity.removeCachedAuthToken({ token: a }, () => {
                      this.getAuthToken(e, t, !1)
                        .then((e) => {
                          r(e);
                        })
                        .catch((e) => {
                          i(e);
                        });
                    });
                  } catch (e) {
                    i(e.Message);
                  }
                else i(chrome.runtime.lastError);
              else r(a);
            });
          } catch (e) {
            console.log(e.Message), i(e.Message);
          }
        });
      }
      async authorize(e) {
        let t;
        try {
          return (t = await this.getAuthToken(!1, e)), t;
        } catch (n) {
          try {
            return (t = await this.getAuthToken(!0, e)), t;
          } catch (e) {
            throw (console.log("auth error"), console.error(e), Error(e));
          }
        }
      }
      async signOut() {
        chrome.identity.launchWebAuthFlow({ interactive: !1, url: "https://accounts.google.com/logout" }, function (e) {});
      }
      async validToken(e) {
        let t = `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${e}`;
        const n = await fetch(t, { method: "GET" });
        if (n.ok) return !0;
        let r = await n.json();
        return console.log(r), !1;
      }
      async revokeCachedTokens(e) {
        return new Promise((t, n) => {
          chrome.identity.removeCachedAuthToken({ token: e }, (e) => {
            t(!0);
          });
        });
      }
      async getAndValidateAccessToken(e, t = !0) {
        let n = null;
        try {
          n = await this.getAuthToken(t, e, !1);
        } catch (e) {
          return { error: e, accessToken: null };
        }
        return 0 === n.length
          ? ""
          : !0 === (await this.validToken(n))
          ? n
          : (await this.revokeCachedTokens(n), (n = await this.getAuthToken(t, e, !1)), { accessToken: n });
      }
    };
  function wc(e, t, n, r, i, a, s) {
    try {
      var o = e[a](s),
        c = o.value;
    } catch (e) {
      return void n(e);
    }
    o.done ? t(c) : Promise.resolve(c).then(r, i);
  }
  function Ec(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, i) {
        var a = e.apply(t, n);
        function s(e) {
          wc(a, r, i, s, o, "next", e);
        }
        function o(e) {
          wc(a, r, i, s, o, "throw", e);
        }
        s(void 0);
      });
    };
  }
  var Oc = (e) => "0".concat(e.toString(16)).substr(-2),
    Ac = (function () {
      var e = Ec(function* (e) {
        var t, n;
        return ((e) => {
          for (var t = "", n = new Uint8Array(e), r = n.byteLength, i = 0; i < r; i += 1) t += String.fromCharCode(n[i]);
          return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
        })(yield ((t = e), (n = new TextEncoder().encode(t)), crypto.subtle.digest("SHA-256", n)));
      });
      return function (t) {
        return e.apply(this, arguments);
      };
    })(),
    Tc = (function () {
      var e = Ec(function* () {
        var e,
          t = ((e = new Uint32Array(32)), crypto.getRandomValues(e), Array.from(e, Oc).join(""));
        return { verifier: t, challenge: yield Ac(t) };
      });
      return function () {
        return e.apply(this, arguments);
      };
    })(),
    Ic = (e) =>
      Object.keys(e)
        .map((t) => "".concat(encodeURIComponent(t), "=").concat(encodeURIComponent(e[t])))
        .join("&"),
    Cc = (function () {
      var e = Ec(function* (e) {
        return new Promise((t, n) => {
          var r = "https://".concat(e, "/.well-known/openid-configuration");
          fetch(r)
            .then((e) => e.json())
            .then((e) => {
              t(e);
            })
            .catch((e) => {
              n(e);
            });
        });
      });
      return function (t) {
        return e.apply(this, arguments);
      };
    })(),
    Rc = (e, t, n, r, i, a, s) =>
      new Promise(
        (function () {
          var o = Ec(function* (o, c) {
            ((e, t) => {
              if (!e.grant_types_supported.includes(t)) throw new Error("The issuer does not support the grant type ".concat(t, "."));
            })(e, i);
            var u = { redirect_uri: n, grant_type: i, client_id: t, code_verifier: s, code: a, scope: r },
              l = "".concat(e.token_endpoint),
              d = yield fetch(l, { headers: { "Content-Type": "application/x-www-form-urlencoded" }, method: "POST", body: Ic(u) });
            d.ok ? o(yield d.json()) : c(yield d.text());
          });
          return function (e, t) {
            return o.apply(this, arguments);
          };
        })()
      ),
    kc = (function () {
      var e = Ec(function* (e, t, n, r, i, a, s, o) {
        return new Promise((c, u) => {
          ((e, t, n) => {
            if (!e.response_types_supported.includes(t)) throw new Error("The issuer does not support the response type ".concat(t, "."));
            if (!e.code_challenge_methods_supported.includes(n))
              throw new Error("The issuer does not support the code challenge method ".concat(n, "."));
          })(t, s, o);
          var l = {
              client_id: n,
              redirect_uri: r,
              response_type: s,
              scope: i,
              audience: t.issuer,
              code_challenge: e,
              code_challenge_method: o,
              acr_values: "idp:".concat(a)
            },
            d = "".concat(t.authorization_endpoint, "?").concat(Ic(l));
          chrome.identity &&
            chrome.identity.launchWebAuthFlow({ url: d, interactive: !0 }, (e) => {
              if (chrome.runtime.lastError) u(chrome.runtime.lastError);
              else if ("string" != typeof e) u(new Error("Invalid response from the authorization endpoint."));
              else {
                var t = ((e) => {
                  var t = {},
                    n = e.split("?");
                  if (n.length > 1) {
                    var r = n[1].split("&");
                    for (var i of r) {
                      var [a, s] = i.split("=");
                      t[a] = decodeURIComponent(s);
                    }
                  }
                  return t;
                })(e);
                c(t);
              }
            });
        });
      });
      return function (t, n, r, i, a, s, o, c) {
        return e.apply(this, arguments);
      };
    })(),
    Nc = (function () {
      var e = Ec(function* (e, t, n, r, i, a, s, o) {
        return new Promise(
          (function () {
            var c = Ec(function* (c, u) {
              try {
                var l = yield Cc(e),
                  { verifier: d, challenge: h } = yield Tc(),
                  p = yield kc(h, l, t, n, r, i, a, o);
                c({ access: yield Rc(l, t, n, r, s, p.code, d), issuer: l });
              } catch (e) {
                u(e.message);
              }
            });
            return function (e, t) {
              return c.apply(this, arguments);
            };
          })()
        );
      });
      return function (t, n, r, i, a, s, o, c) {
        return e.apply(this, arguments);
      };
    })(),
    Pc = (e, t) =>
      new Promise(
        (function () {
          var n = Ec(function* (n, r) {
            if (!e.userinfo_endpoint) throw new Error("Issuer does not support user info");
            var i = yield fetch(e.userinfo_endpoint, { headers: { Authorization: "Bearer ".concat(t) } });
            i.ok ? n(yield i.json()) : r(yield i.text());
          });
          return function (e, t) {
            return n.apply(this, arguments);
          };
        })()
      );
  const Lc = "rw4gc-chrome-extension",
    Dc = "idp.texthelp.com";
  let Uc = `https://${Dc}/oauth2`;
  chrome.identity && (Uc = chrome.identity.getRedirectURL("oauth2")), Object.freeze(Uc);
  const xc = "email openid protected_email",
    jc = "code",
    Mc = "authorization_code",
    Yc = "S256";
  let Gc = null,
    Fc = class {
      constructor(e = "openid") {
        (this._name = e), (this._access = null);
      }
      getUserInfo(e = !0, t = !1, n = !1) {
        var r = this;
        return new Promise(async function (e, t) {
          try {
            const t = await Nc(Dc, Lc, Uc, xc, r._name.toLowerCase(), jc, Mc, Yc),
              n = await Pc(t.issuer, t.access.access_token);
            (Gc = t), (n.licensetype = r._name), e(n);
          } catch (e) {
            t(e);
          }
        });
      }
      async authorizeDocumentCreation() {
        return !0;
      }
      async authorizeDriveInstall() {}
      async getUserInfoFromToken(e) {}
      getAuthToken(e, t, n = !0) {
        var r = this;
        return new Promise(async function (e, t) {
          try {
            e((await Nc(Dc, Lc, Uc, xc, r._name, jc, Mc, Yc)).access.access_token);
          } catch (e) {
            t(e.Message);
          }
        });
      }
      async authorize(e) {
        console.log("authorize openid");
      }
      async signOut() {
        if (null === Gc) throw new Error("You are not signed in.");
        if (void 0 === Gc.issuer) throw new Error("You are not signed in.");
        if (void 0 === Gc.access.access_token) throw new Error("You are not signed in.");
        const e = { id_token_hint: Gc.access.id_token, post_logout_redirect_uri: Uc };
        var t;
        const n = {
          interactive: !1,
          url: `${Gc.issuer.end_session_endpoint}?${
            ((t = e),
            Object.keys(t)
              .map(function (e) {
                return encodeURIComponent(e) + "=" + encodeURIComponent(t[e]);
              })
              .join("&"))
          }`
        };
        chrome.identity.launchWebAuthFlow(n, () => {});
      }
      async validToken(e) {
        console.log("validToken openid");
      }
      async revokeCachedTokens(e) {
        return new Promise((e, t) => {
          console.log("revokeCachedTokens openid");
        });
      }
      async getAndValidateAccessToken(e, t = !0) {
        console.log("getAndValidateAccessToken openid");
      }
    },
    Bc = class extends Fc {
      constructor(e = "NYC") {
        super(e);
      }
    },
    Vc = class {
      constructor() {
        this.auth = null;
      }
      async initialise(e) {
        var t = this;
        return new Promise(async function (n) {
          switch (e) {
            case lc.GOOGLE:
              return (t.auth = new Sc()), void n();
            case lc.MICROSOFT:
              return (t.auth = new bc()), void n();
            case lc.NYC:
              return (t.auth = new Bc()), void n();
            default:
              let e = await t.getAccountTypeFromProfileInfo();
              if (e) return (t.auth = e), void n();
              chrome.runtime.onMessage.addListener(async function (e, r) {
                if (r.id === chrome.runtime.id && e.command)
                  return "thswsetaccounttype" === e.command.toLowerCase()
                    ? ("MS" === e.accountType ? (t.auth = new bc()) : "NYC" === e.accountType ? (t.auth = new Bc()) : (t.auth = new Sc()),
                      void n())
                    : void n();
              });
              let r = { active: !0, currentWindow: !0 },
                i = await t.chromeTabsQuery(r);
              i[0].url.includes("selectiondialog.html?q") ||
                setTimeout(async function () {
                  let e = await t.chromeTabsQuery({ url: [`chrome-extension://${chrome.runtime.id}/*`] });
                  e[0]
                    ? await chrome.tabs.update(e[0].id, { active: !0 })
                    : await chrome.tabs.create({
                        url: `chrome-extension://${chrome.runtime.id}/selectiondialog/selectiondialog.html?q=${i[0].id}`
                      });
                }, 300);
          }
        });
      }
      chromeTabsQuery(e) {
        return new Promise((t) => {
          chrome.tabs.query(e, (e) => {
            t(e);
          });
        });
      }
      async switchAuthType(e) {}
      async getAccountTypeFromProfileInfo() {
        var e = this;
        return new Promise(async function (t) {
          chrome.identity
            ? chrome.identity.getProfileUserInfo(async function (n) {
                if (n.email.length > 0) {
                  let n = null;
                  return (n = (await e._isEdge()) ? new bc("0113ff4a-9673-4c71-8cba-9229b16b7ad8") : new Sc()), void t(n);
                }
                t(null);
              })
            : t(null);
        });
      }
      async getUserInfo(e = !1, t = !1) {
        return await this.auth.getUserInfo(void 0, e, t);
      }
      async authorizeDocumentCreation() {
        return await this.auth.authorizeDocumentCreation();
      }
      async authorizeDriveInstall() {
        return await this.auth.authorizeDriveInstall();
      }
      async authorize(e) {
        return await this.auth.authorize(e);
      }
      async getAndValidateAccessToken(e, t = !0) {
        return await this.auth.getAndValidateAccessToken(e, t);
      }
      async _isEdge() {
        chrome.runtime.sendMessage({ command: "th-isEdge" }, (e) => e);
      }
    };
  class Kc {
    constructor() {
      var e = this;
      chrome.runtime.onMessage.addListener(async function (t, n, r) {
        if (n.id !== chrome.runtime.id) return !1;
        if (!t.command) return !1;
        switch (t.command.toLowerCase()) {
          case "swauthorize":
            return (
              e.swAuthorize(t.authType, t.scopes).then((e) => {
                void 0 !== r && r(e);
              }),
              !0
            );
          case "swauthorizefordoccreation":
            return (
              e.swAuthorizeForDocCreation(t.authType).then((e) => {
                void 0 !== r && r(e);
              }),
              !0
            );
          case "swauthorizefordriveinstall":
            return (
              e.swAuthorizeForDriveInstall(t.authType).then((e) => {
                void 0 !== r && r(e);
              }),
              !0
            );
          case "swlauncewebauthflow":
            return (
              e.swLaunchWebAuthFlow(t.interactive, t.url).then((e) => {
                void 0 !== r && r(e);
              }),
              !0
            );
          case "swgetandvalidateaccesstoken":
            e.swGetAndValidateAccessToken(t.scopes, t.authType).then((e) => {
              r(e);
            });
          default:
            return !1;
        }
      });
    }
    async swAuthorize(e, t) {
      return console.log("swAuthorize"), (this.bgAuth = new Vc()), await this.bgAuth.initialise(e), this.bgAuth.authorize(t);
    }
    async swAuthorizeForDocCreation(e) {
      return (this.bgAuth = new Vc()), await this.bgAuth.initialise(e), this.bgAuth.authorizeDocumentCreation();
    }
    async swAuthorizeForDriveInstall(e) {
      return (this.bgAuth = new Vc()), await this.bgAuth.initialise(e), this.bgAuth.authorizeDriveInstall();
    }
    async swGetAndValidateAccessToken(e, t) {
      (this.bgAuth = new Vc()), await this.bgAuth.initialise(t);
      return await this.bgAuth.getAndValidateAccessToken(e);
    }
    swLaunchWebAuthFlow(e, t) {
      return new Promise((n, r) => {
        chrome.identity.launchWebAuthFlow({ interactive: e, url: t }, (e) => {
          n(e);
        });
      });
    }
  }
  const Wc = Object.freeze([
      { matches: ["*"], settings: { target: {}, files: ["content.bundle.js"] } },
      { matches: ["https://docs.google.com/document/*"], settings: { target: {}, files: ["gdocs.content.bundle.js"] } },
      { matches: ["https://docs.google.com/presentation/*"], settings: { target: {}, files: ["gdocs.content.bundle.js"] } }
    ]),
    Hc = Object.freeze([{ matches: ["https://docs.google.com/document/*"], settings: { target: {}, files: ["gdi.bundle.js"] } }]),
    zc = (e, t) => {
      let n = {};
      e = e.toLowerCase();
      for (let r in t) {
        if (((r = r.toLowerCase()), "default" == r)) {
          n = t[r];
          break;
        }
        let i = e.substring(0, r.length);
        if (i === r) {
          n = t[r];
          break;
        }
        {
          i = e;
          let a = r.split("*");
          if (a.length > 1) {
            let s = !0;
            for (let e in a) {
              let t = i.indexOf(a[e]);
              if (-1 == t) {
                s = !1;
                break;
              }
              i = i.substr(t + a[e].length);
            }
            if (s) {
              (i = e), (n = t[r]);
              break;
            }
          }
        }
      }
      return n;
    },
    qc = Object.freeze({ GOOGLE: "Google", MICROSOFT: "Microsoft", NYC: "NYC", DEFAULT: "Default" });
  function Jc(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function $c(e, t, n) {
    return (
      (t = (function (e) {
        var t = (function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == typeof t ? t : String(t);
      })(t)) in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  let Xc = class {
      store(e, t, n) {
        throw "IStorage store not implemented!";
      }
      retrieve(e) {
        throw "IStorage retrieve not implemented!";
      }
      remove(e) {
        throw "IStorage remove not implemented!";
      }
    },
    Qc = class {
      static encode(e) {
        const t = JSON.stringify(e);
        return btoa ? btoa(t) : Buffer.from(t).toString("base64");
      }
      static decode(e) {
        if (atob) return atob(e);
        const t = Buffer.from(e, "base64");
        return JSON.parse(t.toString("utf8"));
      }
    };
  const Zc = (e, ...t) => {
      if (!t.length) return e;
      const n = t.shift();
      if (tu(e) && tu(n)) {
        const r = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? Jc(Object(n), !0).forEach(function (t) {
                  $c(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Jc(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
          }
          return e;
        })({}, e);
        for (const e in n)
          Object.prototype.hasOwnProperty.call(n, e) &&
            (tu(n[e]) && tu(r[e])
              ? (r[e] = Zc(r[e], n[e]))
              : Array.isArray(n[e]) && Array.isArray(r[e])
              ? (r[e] = eu(r[e], n[e]))
              : (r[e] = n[e]));
        return Zc(r, ...t);
      }
      return Zc(e, ...t);
    },
    eu = (e, t) => {
      let n = [...t];
      const r = ((e, t) => {
          if (e.hasOwnProperty("name") && t.hasOwnProperty("name")) return "name";
          if (e.length > 0 && t.length > 0) {
            const n = e[0],
              r = t[0];
            for (const i in n)
              if (n.hasOwnProperty(i) && r.hasOwnProperty(i)) {
                const r = e.map((e) => e[i]),
                  a = t.map((e) => e[i]),
                  s = new Set(r),
                  o = new Set(a);
                if ("string" == typeof n[i] && s.size === e.length && o.size === t.length) return i;
              }
          }
          return null;
        })(e, t),
        i = t.map((e) => e[r]),
        a = e.map((e) => e[r]);
      let s = [];
      for (let e in t[0]) s.push(e);
      let o = [];
      for (let t in e[0]) o.push(t);
      let c = o.filter((e) => !s.some((t) => t === e));
      if (c.length > 0)
        for (let t = 0; t < n.length; t++) {
          let i = e.find((e) => e[r] === n[t][r]);
          for (let e = 0; e < c.length; e++) n[t][c[e]] = i[c[e]];
        }
      return (
        a
          .filter((e) => !i.some((t) => t === e))
          .forEach((t) => {
            const i = e.find((e) => {
                if (e[r] === t) return !0;
              }),
              a = e.findIndex((e) => e === i),
              s = e[a - 1 >= 0 ? a - 1 : a][r],
              o = n.findIndex((e) => e[r] === s);
            n.splice(o + 1, 0, i);
          }),
        n
      );
    },
    tu = (e) => null !== e && "object" == typeof e && !Array.isArray(e),
    nu = "local";
  let ru = class extends Xc {
    constructor(e) {
      super(),
        (this._syncType = e),
        (this._event = void 0),
        (this._keys = new Set()),
        "none" !== this._syncType &&
          ((chrome || {}).storage || {}).onChanged &&
          chrome.storage.onChanged.addListener((e, t) => {
            if (!this._event) return;
            if (t !== this._syncType) return;
            if (!this._keys.has(Object.keys(e)[0])) return;
            let n = JSON.parse(Qc.decode(Object.values(e)[0].newValue));
            this._event(n);
          });
    }
    onUpdate(e) {
      this._event = e;
    }
    store(e, t, n) {
      var r = this;
      return new Promise(async function (n, i) {
        try {
          if ("none" === r._syncType) return void n(!0);
          const i = Qc.encode(t),
            a = await r._retrieve(e, r._syncType);
          if (a && a[e] === i) return void n(!0);
          r._store(e, i, r._syncType), r._keys.add(e), n(!0);
        } catch (e) {
          i(e);
        }
      });
    }
    retrieve(e, t = null) {
      var n = this;
      return new Promise(async function (r, i) {
        try {
          if ("none" === n._syncType) return void r(t);
          let i = {};
          if (Object.keys(e).length > 0) {
            let a = await n._retrieve(e, n._syncType);
            if (a) {
              if (((i = Qc.decode(a[e])), n._keys.add(e), !t)) return void r(JSON.parse(i));
              r(Zc(t, JSON.parse(i)));
            } else n._keys.add(e), r(t);
          } else n._keys.add(e), r(t);
        } catch (e) {
          i(e);
        }
      });
    }
    remove(e) {
      var t = this;
      return new Promise(async function (n, r) {
        try {
          if ("none" === t._syncType) return void n(!1);
          if (Object.keys(e).length > 0) {
            await t._remove(e, t._syncType);
            t._keys.delete(e), n(!0);
          }
        } catch (e) {
          r(e);
        }
      });
    }
    _store(e, t, n) {
      ((chrome || {}).storage || {})[this._syncType] ? chrome.storage[n].set({ [e]: t }) : localStorage.setItem(e, t);
    }
    _retrieve(e, t) {
      return new Promise((n, r) => {
        ((chrome || {}).storage || {})[this._syncType]
          ? chrome.storage[t].get([e], (e) => {
              "{}" !== JSON.stringify(e) ? n(e) : n(null);
            })
          : n({ [e]: localStorage.getItem(e) });
      });
    }
    _remove(e, t) {
      ((chrome || {}).storage || {})[this._syncType] ? chrome.storage[t].remove(e) : localStorage.removeItem(e);
    }
  };
  class iu {
    constructor(e, t = "microsoft") {
      (this.idName = t),
        (this.clientId = e),
        (this.userInfo = void 0),
        (this.email = void 0),
        (this.accessCode = void 0),
        (this.redirectUri =
          "undefined" != typeof chrome && chrome.identity ? chrome.identity.getRedirectURL() : `${window.location.origin}/index.html`),
        (this.storage = new ru(nu)),
        this.storage.retrieve("rw4gc.ms-code.cache").then((e) => {
          null === e || (0 === Object.keys(e).length && e.constructor === Object) || (this.accessCode = e);
        });
    }
    async getUserInfo(e = !0, t = !1, n = !1) {
      var r = this;
      return new Promise((n, i) => {
        if (chrome) {
          if (this.userInfo && !t) return void n(this.userInfo);
          chrome.identity.getProfileUserInfo(async function (t) {
            e ? (await r.authorize(["user.read"]), n(r.userInfo)) : i("Unable to get user details");
          });
        } else i(new Error("Not running on a chromium browser"));
      });
    }
    get msSiteUrl() {
      return "https://thzbf.texthelp.com/";
    }
    get sitePath() {
      return "mslogin.html";
    }
    async authorizeDocumentCreation() {
      return await this.authorize(["user.read", "files.readwrite"], !1, !0);
    }
    async authorizeDriveInstall() {
      return "";
    }
    async authorize(e, t = !1, n = !0) {
      var r = this;
      try {
        return new Promise(async function (t, i) {
          const a = (await r._chromeTabsQuery({ active: !0, currentWindow: !0 }))[0].id;
          let s = await r._chromeTabsQuery({ url: [`${r.msSiteUrl}*`] });
          if (s[0]) chrome.tabs.update(s[0].id, { url: `${r.msSiteUrl}${r.sitePath}?action=authorise&scopes=${o}` });
          else {
            var o = Object.keys(e)
              .map((t) => e[t])
              .join(",");
            chrome.tabs.create({ url: `${r.msSiteUrl}${r.sitePath}?action=authorise&scopes=${o}` });
          }
          chrome.runtime.onMessage.addListener(async function e(s, o) {
            if (o.id !== chrome.runtime.id) return !1;
            if (!s.command) return !1;
            switch (s.command.toLowerCase()) {
              case "thswauthorised":
                chrome.runtime.onMessage.removeListener(e),
                  (r.accessCode = s.account.accessToken),
                  n && ((r.userInfo = r.genericUserFormat(s.account.account)), r.storage.store("rw4gc.ms-code.cache", r.accessCode, !1)),
                  r._chromeTabsQuery({ url: [`${r.msSiteUrl}*`] }).then((e) => {
                    e.length > 0 && chrome.tabs.remove(e[0].id);
                  }),
                  chrome.tabs.update(a, { active: !0 }),
                  t(r.accessCode);
                break;
              case "thswauthcancelled":
                chrome.runtime.onMessage.removeListener(e), i("User cancelled");
            }
          });
        });
      } catch (e) {
        console.log(e);
      }
    }
    signOut() {
      var e = this;
      return new Promise(async function (t, n) {
        try {
          const n = { active: !0, currentWindow: !0 },
            r = await e._chromeTabsQuery(n);
          try {
            const n = r[0].id;
            let i,
              a = await e._chromeTabsQuery({ url: [`${e.msSiteUrl}*`] });
            a[0]
              ? ((i = a[0].id), chrome.tabs.update(a[0].id, { url: `${e.msSiteUrl}${e.sitePath}?action=signout&active=${n}` }))
              : chrome.tabs.create({ url: `${e.msSiteUrl}${e.sitePath}?action=signout&active=${n}` }, function (e) {
                  i = e.id;
                });
            let s = async function n(r, i) {
              if ((i.id !== chrome.runtime.id && t(), r.command || t(), "thswsignedout" === r.command.toLowerCase())) {
                chrome.runtime.onMessage.removeListener(n), (e.accessCode = void 0);
                try {
                  e.storage.remove("rw4gc.ms-code.cache");
                } catch (e) {}
                t();
              }
            };
            chrome.runtime.onMessage.addListener(s),
              chrome.tabs.onUpdated.addListener((e, t) => {
                e === i && "complete" === t.status && t.url;
              });
          } catch (n) {
            (e.accessCode = void 0), e.storage.remove("rw4gc.ms-code.cache"), t();
          }
        } catch (e) {
          console.log(e), t();
        }
      });
    }
    async getAndValidateAccessToken(e, t = !0) {
      return { accessToken: await this.authorize(e, t) };
    }
    genericUserFormat(e) {
      let t = { licensetype: "microsoft" },
        n = e.displayName;
      null == n && (n = e.name), (t.name = n);
      let r = e.mail;
      return null == r && (r = e.userPrincipalName), null == r && (r = e.username), (t.email = r), t;
    }
    _openTab(e) {
      chrome.tabs.query({}, function (t) {
        for (let n, r = 0; (n = t[r]); r++)
          if (n.url === e) return chrome.tabs.reload(n.id, {}, function () {}), void chrome.tabs.update(n.id, { active: !0 });
        chrome.tabs.create({ url: e });
      });
    }
    _chromeTabsQuery(e) {
      return new Promise((t) => {
        chrome.tabs.query(e, (e) => {
          t(e);
        });
      });
    }
  }
  class au {
    constructor(e = "google") {
      (this.idName = e),
        (this.userScopes = ["https://www.googleapis.com/auth/userinfo.email"]),
        (this.docScopes = [
          "https://www.googleapis.com/auth/drive.apps.readonly",
          "https://www.googleapis.com/auth/drive.appdata",
          "https://www.googleapis.com/auth/drive.file",
          "https://www.googleapis.com/auth/drive.appfolder"
        ]),
        (this.driveScopes = ["https://www.googleapis.com/auth/drive.install"]);
    }
    getUserInfo(e = !0, t = !1, n = !1) {
      return new Promise((r, i) => {
        try {
          chrome
            ? chrome.identity
              ? chrome.identity.getProfileUserInfo((a) => {
                  null !== a && null !== a.email && "" === a.email && null !== a.id && "" === a.id && n
                    ? ((this.userInfo = null), r(null))
                    : a && a.email.length > 0 && (void 0 === a.licensetype || "google" === a.licensetype) && !t
                    ? ((a.licensetype = "google"), (this.userInfo = a), r(a))
                    : e
                    ? this.authorize(this.userScopes).then((e) => {
                        this.getUserInfoFromToken(e).then((e) => {
                          (this.userInfo = e), r(e);
                        });
                      })
                    : i("Unable to get user details");
                })
              : e
              ? this.authorize(this.userScopes).then((e) => {
                  this.getUserInfoFromToken(e).then((e) => {
                    (this.userInfo = e), r(e);
                  });
                })
              : i("Unable to get user details")
            : i("Not running on a chromium browser");
        } catch (e) {
          i(e.Message);
        }
      });
    }
    async authorizeDocumentCreation() {
      return await this.getAndValidateAccessToken(this.docScopes);
    }
    async authorizeDriveInstall() {
      return this.authorize(this.driveScopes);
    }
    async getUserInfoFromToken(e) {
      const t = await fetch("https://www.googleapis.com/userinfo/v2/me", { method: "GET", headers: { Authorization: `Bearer ${e}` } });
      if (!t.ok) throw Error("invalid_response_from_oauth");
      const { name: n, email: r } = await t.json();
      return { name: n, email: r, licensetype: "google" };
    }
    getAuthToken(e, t, n = !0) {
      return new Promise((r, i) => {
        try {
          chrome.identity.getAuthToken({ interactive: e, scopes: t }, (a) => {
            if (chrome.runtime.lastError || null == a)
              if (n)
                try {
                  chrome.identity.removeCachedAuthToken({ token: a }, () => {
                    this.getAuthToken(e, t, !1)
                      .then((e) => {
                        r(e);
                      })
                      .catch((e) => {
                        i(e);
                      });
                  });
                } catch (e) {
                  i(e.Message);
                }
              else i(chrome.runtime.lastError);
            else r(a);
          });
        } catch (e) {
          console.log(e.Message), i(e.Message);
        }
      });
    }
    async authorize(e) {
      let t;
      try {
        return (t = await this.getAuthToken(!1, e)), t;
      } catch (n) {
        try {
          return (t = await this.getAuthToken(!0, e)), t;
        } catch (e) {
          throw (console.log("auth error"), console.error(e), Error(e));
        }
      }
    }
    async signOut() {
      chrome.identity.launchWebAuthFlow({ interactive: !1, url: "https://accounts.google.com/logout" }, function (e) {});
    }
    async validToken(e) {
      let t = `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${e}`;
      const n = await fetch(t, { method: "GET" });
      if (n.ok) return !0;
      let r = await n.json();
      return console.log(r), !1;
    }
    async revokeCachedTokens(e) {
      return new Promise((t, n) => {
        chrome.identity.removeCachedAuthToken({ token: e }, (e) => {
          t(!0);
        });
      });
    }
    async getAndValidateAccessToken(e, t = !0) {
      let n = null;
      try {
        n = await this.getAuthToken(t, e, !1);
      } catch (e) {
        return { error: e, accessToken: null };
      }
      return 0 === n.length
        ? ""
        : !0 === (await this.validToken(n))
        ? n
        : (await this.revokeCachedTokens(n), (n = await this.getAuthToken(t, e, !1)), { accessToken: n });
    }
  }
  function su(e, t, n, r, i, a, s) {
    try {
      var o = e[a](s),
        c = o.value;
    } catch (e) {
      return void n(e);
    }
    o.done ? t(c) : Promise.resolve(c).then(r, i);
  }
  function ou(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, i) {
        var a = e.apply(t, n);
        function s(e) {
          su(a, r, i, s, o, "next", e);
        }
        function o(e) {
          su(a, r, i, s, o, "throw", e);
        }
        s(void 0);
      });
    };
  }
  var cu = (e) => "0".concat(e.toString(16)).substr(-2),
    uu = (function () {
      var e = ou(function* (e) {
        var t, n;
        return ((e) => {
          for (var t = "", n = new Uint8Array(e), r = n.byteLength, i = 0; i < r; i += 1) t += String.fromCharCode(n[i]);
          return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
        })(yield ((t = e), (n = new TextEncoder().encode(t)), crypto.subtle.digest("SHA-256", n)));
      });
      return function (t) {
        return e.apply(this, arguments);
      };
    })(),
    lu = (function () {
      var e = ou(function* () {
        var e,
          t = ((e = new Uint32Array(32)), crypto.getRandomValues(e), Array.from(e, cu).join(""));
        return { verifier: t, challenge: yield uu(t) };
      });
      return function () {
        return e.apply(this, arguments);
      };
    })(),
    du = (e) =>
      Object.keys(e)
        .map((t) => "".concat(encodeURIComponent(t), "=").concat(encodeURIComponent(e[t])))
        .join("&"),
    hu = (function () {
      var e = ou(function* (e) {
        return new Promise((t, n) => {
          var r = "https://".concat(e, "/.well-known/openid-configuration");
          fetch(r)
            .then((e) => e.json())
            .then((e) => {
              t(e);
            })
            .catch((e) => {
              n(e);
            });
        });
      });
      return function (t) {
        return e.apply(this, arguments);
      };
    })(),
    pu = (e, t, n, r, i, a, s) =>
      new Promise(
        (function () {
          var o = ou(function* (o, c) {
            ((e, t) => {
              if (!e.grant_types_supported.includes(t)) throw new Error("The issuer does not support the grant type ".concat(t, "."));
            })(e, i);
            var u = { redirect_uri: n, grant_type: i, client_id: t, code_verifier: s, code: a, scope: r },
              l = "".concat(e.token_endpoint),
              d = yield fetch(l, { headers: { "Content-Type": "application/x-www-form-urlencoded" }, method: "POST", body: du(u) });
            d.ok ? o(yield d.json()) : c(yield d.text());
          });
          return function (e, t) {
            return o.apply(this, arguments);
          };
        })()
      ),
    gu = (function () {
      var e = ou(function* (e, t, n, r, i, a, s, o) {
        return new Promise((c, u) => {
          ((e, t, n) => {
            if (!e.response_types_supported.includes(t)) throw new Error("The issuer does not support the response type ".concat(t, "."));
            if (!e.code_challenge_methods_supported.includes(n))
              throw new Error("The issuer does not support the code challenge method ".concat(n, "."));
          })(t, s, o);
          var l = {
              client_id: n,
              redirect_uri: r,
              response_type: s,
              scope: i,
              audience: t.issuer,
              code_challenge: e,
              code_challenge_method: o,
              acr_values: "idp:".concat(a)
            },
            d = "".concat(t.authorization_endpoint, "?").concat(du(l));
          chrome.identity &&
            chrome.identity.launchWebAuthFlow({ url: d, interactive: !0 }, (e) => {
              if (chrome.runtime.lastError) u(chrome.runtime.lastError);
              else if ("string" != typeof e) u(new Error("Invalid response from the authorization endpoint."));
              else {
                var t = ((e) => {
                  var t = {},
                    n = e.split("?");
                  if (n.length > 1) {
                    var r = n[1].split("&");
                    for (var i of r) {
                      var [a, s] = i.split("=");
                      t[a] = decodeURIComponent(s);
                    }
                  }
                  return t;
                })(e);
                c(t);
              }
            });
        });
      });
      return function (t, n, r, i, a, s, o, c) {
        return e.apply(this, arguments);
      };
    })(),
    fu = (function () {
      var e = ou(function* (e, t, n, r, i, a, s, o) {
        return new Promise(
          (function () {
            var c = ou(function* (c, u) {
              try {
                var l = yield hu(e),
                  { verifier: d, challenge: h } = yield lu(),
                  p = yield gu(h, l, t, n, r, i, a, o);
                c({ access: yield pu(l, t, n, r, s, p.code, d), issuer: l });
              } catch (e) {
                u(e.message);
              }
            });
            return function (e, t) {
              return c.apply(this, arguments);
            };
          })()
        );
      });
      return function (t, n, r, i, a, s, o, c) {
        return e.apply(this, arguments);
      };
    })(),
    mu = (e, t) =>
      new Promise(
        (function () {
          var n = ou(function* (n, r) {
            if (!e.userinfo_endpoint) throw new Error("Issuer does not support user info");
            var i = yield fetch(e.userinfo_endpoint, { headers: { Authorization: "Bearer ".concat(t) } });
            i.ok ? n(yield i.json()) : r(yield i.text());
          });
          return function (e, t) {
            return n.apply(this, arguments);
          };
        })()
      );
  const vu = "rw4gc-chrome-extension",
    yu = "idp.texthelp.com";
  let _u = `https://${yu}/oauth2`;
  chrome.identity && (_u = chrome.identity.getRedirectURL("oauth2")), Object.freeze(_u);
  const bu = "email openid protected_email",
    Su = "code",
    wu = "authorization_code",
    Eu = "S256";
  let Ou = null;
  class Au {
    constructor(e = "openid") {
      (this._name = e), (this._access = null);
    }
    getUserInfo(e = !0, t = !1, n = !1) {
      var r = this;
      return new Promise(async function (e, t) {
        try {
          const t = await fu(yu, vu, _u, bu, r._name.toLowerCase(), Su, wu, Eu),
            n = await mu(t.issuer, t.access.access_token);
          (Ou = t), (n.licensetype = r._name), e(n);
        } catch (e) {
          t(e);
        }
      });
    }
    async authorizeDocumentCreation() {
      return !0;
    }
    async authorizeDriveInstall() {}
    async getUserInfoFromToken(e) {}
    getAuthToken(e, t, n = !0) {
      var r = this;
      return new Promise(async function (e, t) {
        try {
          e((await fu(yu, vu, _u, bu, r._name, Su, wu, Eu)).access.access_token);
        } catch (e) {
          t(e.Message);
        }
      });
    }
    async authorize(e) {
      console.log("authorize openid");
    }
    async signOut() {
      if (null === Ou) throw new Error("You are not signed in.");
      if (void 0 === Ou.issuer) throw new Error("You are not signed in.");
      if (void 0 === Ou.access.access_token) throw new Error("You are not signed in.");
      const e = { id_token_hint: Ou.access.id_token, post_logout_redirect_uri: _u };
      var t;
      const n = {
        interactive: !1,
        url: `${Ou.issuer.end_session_endpoint}?${
          ((t = e),
          Object.keys(t)
            .map(function (e) {
              return encodeURIComponent(e) + "=" + encodeURIComponent(t[e]);
            })
            .join("&"))
        }`
      };
      chrome.identity.launchWebAuthFlow(n, () => {});
    }
    async validToken(e) {
      console.log("validToken openid");
    }
    async revokeCachedTokens(e) {
      return new Promise((e, t) => {
        console.log("revokeCachedTokens openid");
      });
    }
    async getAndValidateAccessToken(e, t = !0) {
      console.log("getAndValidateAccessToken openid");
    }
  }
  class Tu extends Au {
    constructor(e = "NYC") {
      super(e);
    }
  }
  class Iu {
    constructor() {
      this.auth = null;
    }
    async initialise(e) {
      var t = this;
      return new Promise(async function (n) {
        switch (e) {
          case qc.GOOGLE:
            return (t.auth = new au()), void n();
          case qc.MICROSOFT:
            return (t.auth = new iu()), void n();
          case qc.NYC:
            return (t.auth = new Tu()), void n();
          default:
            let e = await t.getAccountTypeFromProfileInfo();
            if (e) return (t.auth = e), void n();
            chrome.runtime.onMessage.addListener(async function (e, r) {
              if (r.id === chrome.runtime.id && e.command)
                return "thswsetaccounttype" === e.command.toLowerCase()
                  ? ("MS" === e.accountType ? (t.auth = new iu()) : "NYC" === e.accountType ? (t.auth = new Tu()) : (t.auth = new au()),
                    void n())
                  : void n();
            });
            let r = { active: !0, currentWindow: !0 },
              i = await t.chromeTabsQuery(r);
            i[0].url.includes("selectiondialog.html?q") ||
              setTimeout(async function () {
                let e = await t.chromeTabsQuery({ url: [`chrome-extension://${chrome.runtime.id}/*`] });
                e[0]
                  ? await chrome.tabs.update(e[0].id, { active: !0 })
                  : await chrome.tabs.create({
                      url: `chrome-extension://${chrome.runtime.id}/selectiondialog/selectiondialog.html?q=${i[0].id}`
                    });
              }, 300);
        }
      });
    }
    chromeTabsQuery(e) {
      return new Promise((t) => {
        chrome.tabs.query(e, (e) => {
          t(e);
        });
      });
    }
    async switchAuthType(e) {}
    async getAccountTypeFromProfileInfo() {
      var e = this;
      return new Promise(async function (t) {
        chrome.identity
          ? chrome.identity.getProfileUserInfo(async function (n) {
              if (n.email.length > 0) {
                let n = null;
                return (n = (await e._isEdge()) ? new iu("0113ff4a-9673-4c71-8cba-9229b16b7ad8") : new au()), void t(n);
              }
              t(null);
            })
          : t(null);
      });
    }
    async getUserInfo(e = !1, t = !1) {
      return await this.auth.getUserInfo(void 0, e, t);
    }
    async authorizeDocumentCreation() {
      return await this.auth.authorizeDocumentCreation();
    }
    async authorizeDriveInstall() {
      return await this.auth.authorizeDriveInstall();
    }
    async authorize(e) {
      return await this.auth.authorize(e);
    }
    async getAndValidateAccessToken(e, t = !0) {
      return await this.auth.getAndValidateAccessToken(e, t);
    }
    async _isEdge() {
      chrome.runtime.sendMessage({ command: "th-isEdge" }, (e) => e);
    }
  }
  function Cu(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function Ru(e, t, n) {
    return (
      (t = (function (e) {
        var t = (function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == typeof t ? t : String(t);
      })(t)) in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  class ku {
    store(e, t, n) {
      throw "IStorage store not implemented!";
    }
    retrieve(e) {
      throw "IStorage retrieve not implemented!";
    }
    remove(e) {
      throw "IStorage remove not implemented!";
    }
  }
  class Nu {
    static encode(e) {
      const t = JSON.stringify(e);
      return btoa ? btoa(t) : Buffer.from(t).toString("base64");
    }
    static decode(e) {
      if (atob) return atob(e);
      const t = Buffer.from(e, "base64");
      return JSON.parse(t.toString("utf8"));
    }
  }
  const Pu = (e, ...t) => {
      if (!t.length) return e;
      const n = t.shift();
      if (Du(e) && Du(n)) {
        const r = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? Cu(Object(n), !0).forEach(function (t) {
                  Ru(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Cu(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
          }
          return e;
        })({}, e);
        for (const e in n)
          Object.prototype.hasOwnProperty.call(n, e) &&
            (Du(n[e]) && Du(r[e])
              ? (r[e] = Pu(r[e], n[e]))
              : Array.isArray(n[e]) && Array.isArray(r[e])
              ? (r[e] = Lu(r[e], n[e]))
              : (r[e] = n[e]));
        return Pu(r, ...t);
      }
      return Pu(e, ...t);
    },
    Lu = (e, t) => {
      let n = [...t];
      const r = ((e, t) => {
          if (e.hasOwnProperty("name") && t.hasOwnProperty("name")) return "name";
          if (e.length > 0 && t.length > 0) {
            const n = e[0],
              r = t[0];
            for (const i in n)
              if (n.hasOwnProperty(i) && r.hasOwnProperty(i)) {
                const r = e.map((e) => e[i]),
                  a = t.map((e) => e[i]),
                  s = new Set(r),
                  o = new Set(a);
                if ("string" == typeof n[i] && s.size === e.length && o.size === t.length) return i;
              }
          }
          return null;
        })(e, t),
        i = t.map((e) => e[r]),
        a = e.map((e) => e[r]);
      let s = [];
      for (let e in t[0]) s.push(e);
      let o = [];
      for (let t in e[0]) o.push(t);
      let c = o.filter((e) => !s.some((t) => t === e));
      if (c.length > 0)
        for (let t = 0; t < n.length; t++) {
          let i = e.find((e) => e[r] === n[t][r]);
          for (let e = 0; e < c.length; e++) n[t][c[e]] = i[c[e]];
        }
      return (
        a
          .filter((e) => !i.some((t) => t === e))
          .forEach((t) => {
            const i = e.find((e) => {
                if (e[r] === t) return !0;
              }),
              a = e.findIndex((e) => e === i),
              s = e[a - 1 >= 0 ? a - 1 : a][r],
              o = n.findIndex((e) => e[r] === s);
            n.splice(o + 1, 0, i);
          }),
        n
      );
    },
    Du = (e) => null !== e && "object" == typeof e && !Array.isArray(e),
    Uu = "local";
  class xu extends ku {
    constructor(e) {
      super(),
        (this._syncType = e),
        (this._event = void 0),
        (this._keys = new Set()),
        "none" !== this._syncType &&
          ((chrome || {}).storage || {}).onChanged &&
          chrome.storage.onChanged.addListener((e, t) => {
            if (!this._event) return;
            if (t !== this._syncType) return;
            if (!this._keys.has(Object.keys(e)[0])) return;
            let n = JSON.parse(Nu.decode(Object.values(e)[0].newValue));
            this._event(n);
          });
    }
    onUpdate(e) {
      this._event = e;
    }
    store(e, t, n) {
      var r = this;
      return new Promise(async function (n, i) {
        try {
          if ("none" === r._syncType) return void n(!0);
          const i = Nu.encode(t),
            a = await r._retrieve(e, r._syncType);
          if (a && a[e] === i) return void n(!0);
          r._store(e, i, r._syncType), r._keys.add(e), n(!0);
        } catch (e) {
          i(e);
        }
      });
    }
    retrieve(e, t = null) {
      var n = this;
      return new Promise(async function (r, i) {
        try {
          if ("none" === n._syncType) return void r(t);
          let i = {};
          if (Object.keys(e).length > 0) {
            let a = await n._retrieve(e, n._syncType);
            if (a) {
              if (((i = Nu.decode(a[e])), n._keys.add(e), !t)) return void r(JSON.parse(i));
              r(Pu(t, JSON.parse(i)));
            } else n._keys.add(e), r(t);
          } else n._keys.add(e), r(t);
        } catch (e) {
          i(e);
        }
      });
    }
    remove(e) {
      var t = this;
      return new Promise(async function (n, r) {
        try {
          if ("none" === t._syncType) return void n(!1);
          if (Object.keys(e).length > 0) {
            await t._remove(e, t._syncType);
            t._keys.delete(e), n(!0);
          }
        } catch (e) {
          r(e);
        }
      });
    }
    _store(e, t, n) {
      ((chrome || {}).storage || {})[this._syncType] ? chrome.storage[n].set({ [e]: t }) : localStorage.setItem(e, t);
    }
    _retrieve(e, t) {
      return new Promise((n, r) => {
        ((chrome || {}).storage || {})[this._syncType]
          ? chrome.storage[t].get([e], (e) => {
              "{}" !== JSON.stringify(e) ? n(e) : n(null);
            })
          : n({ [e]: localStorage.getItem(e) });
      });
    }
    _remove(e, t) {
      ((chrome || {}).storage || {})[this._syncType] ? chrome.storage[t].remove(e) : localStorage.removeItem(e);
    }
  }
  class ju {
    constructor(e = qc.DEFAULT, t = !1) {
      (this._loginType = e), (this.isEdge = t);
    }
    getUser(e = !1, t = !1) {
      var n = this;
      return new Promise((r, i) => {
        try {
          let a = new xu(Uu);
          a.retrieve("rw4gc.user.cache").then(async function (s) {
            if (e || null === s || (0 === Object.keys(s).length && s.constructor === Object)) {
              n.isEdge && (n._loginType = qc.MICROSOFT);
              let s = new Iu();
              await s.initialise(n._loginType),
                s
                  .getUserInfo(e, t)
                  .then((e) => {
                    null === e ? a.remove("rw4gc.user.cache") : a.store("rw4gc.user.cache", e, !1), r(e);
                  })
                  .catch((e) => {
                    i(e);
                  });
            } else if (void 0 === s.email || null === s.email || s.licensetype.toLowerCase() !== n._loginType.toLowerCase()) {
              n.isEdge && (n._loginType = qc.MICROSOFT);
              let s = new Iu();
              await s.initialise(n._loginType),
                s
                  .getUserInfo(e, t)
                  .then((e) => {
                    null === e ? a.remove("rw4gc.user.cache") : a.store("rw4gc.user.cache", e, !1), r(e);
                  })
                  .catch((e) => {
                    i(e);
                  });
            } else r(s);
          });
        } catch (e) {
          i(e);
        }
      });
    }
    signOut() {
      var e = this;
      return new Promise(async function (t, n) {
        try {
          let r = new xu(Uu);
          r.retrieve("rw4gc.user.cache").then(async function (i) {
            let a = new Iu();
            await a.initialise(e._loginType),
              null === i || (0 === Object.keys(i).length && i.constructor === Object)
                ? a.auth
                    .signOut()
                    .then(() => {
                      t(!0);
                    })
                    .catch((e) => {
                      n(e);
                    })
                : a.auth
                    .signOut()
                    .then(() => {
                      r.remove("rw4gc.user.cache")
                        .then(() => {
                          t(!0);
                        })
                        .catch((e) => {
                          n(e);
                        });
                    })
                    .catch((e) => {
                      n(e);
                    });
          });
        } catch (e) {
          n(e);
        }
      });
    }
  }
  var Mu = {
      thDebugMode: !1,
      thCloudFrontBypass: !1,
      thAuthProduct: !1,
      sendFetchRequest: function (e, t) {
        return new Promise(function (n) {
          !1 === t && (t = new Date()),
            Mu.sendBrowserRequest(e, t)
              .then((e) => {
                n([e, t, !1]);
              })
              .catch((e) => {
                n([!1, t, !1]);
              });
        });
      },
      s3Req: function (e, t) {
        if (Mu.thCloudFrontBypass) var n = "https://s3.amazonaws.com/rwfamilylive/" + e;
        else n = "https://licensing.texthelp.com/" + e;
        return Mu.sendFetchRequest(n, t);
      },
      sendBrowserRequest: function (e, t) {
        return (
          void 0 === Mu.retryCount && (Mu.retryCount = 2),
          new Promise(function (n, r) {
            fetch(e + "?cbp=" + Math.random(), {})
              .then(function (e) {
                if (!e.ok) throw new Error("Network response was not ok");
                n(e.text());
              })
              .catch(function (i) {
                if (1 === Mu.retryCount) return r(i);
                (Mu.retryCount = Mu.retryCount - 1),
                  setTimeout(function () {
                    Mu.sendBrowserRequest(e, t).then(n).catch(r);
                  }, 3e3);
              });
          })
        );
      },
      setToday: function (e) {
        var t = e.getResponseHeader("Date"),
          n = e.getResponseHeader("Age");
        if (!isNaN(parseFloat(n)) && isFinite(n))
          var r = new Date(t),
            i = new Date(r.getTime() + parseInt(1e3 * n)),
            a = new Date(i);
        else a = new Date(t);
        return a;
      },
      sugarFetchReq: function (e, t, n, r) {
        return new Promise(function (e) {
          fetch(n, { method: "POST", headers: { "Content-Type": "application/json" }, body: r })
            .then((t) => {
              t.ok
                ? t.text().then((t) => {
                    e("" !== t);
                  })
                : (Mu.logger(t.status), Mu.logger(t.statusText), e(!1));
            })
            .catch((t) => {
              e(!1);
            });
        });
      },
      sugarReq: function (e, t) {
        return new Promise(function (n) {
          var r = "https://ist.texthelp.com/queue/licensing/push/" + e,
            i = JSON.stringify(t);
          return n(Mu.sugarFetchReq(e, t, r, i));
        });
      },
      freemium: function (e, t, n) {
        var r = "expiry_" + n,
          i = {};
        return (
          (i.user = e), (i.start = Mu.getTodaysDate(t)), (i[r] = Mu.get30DaysDate(t)), (i.licence_type = "Freemium"), JSON.stringify(i)
        );
      },
      expiredFreemium: function (e, t, n) {
        var r = "expiry_" + n,
          i = {};
        return (
          (i.user = e), (i.start = Mu.getTodaysDate(t)), (i[r] = Mu.getTodaysDate(t)), (i.licence_type = "Freemium"), JSON.stringify(i)
        );
      },
      getTodaysDate: function (e) {
        if (e instanceof Date) var t = new Date(e).toJSON().slice(0, 10);
        else t = new Date().toJSON().slice(0, 10);
        return t;
      },
      getYesterdaysDate: function (e) {
        var t;
        return (
          e instanceof Date
            ? ((t = new Date(e)).setDate(t.getDate() - 1), (t = t.toJSON().slice(0, 10)))
            : ((t = new Date()).setDate(t.getDate() - 1), (t = t.toJSON().slice(0, 10))),
          t
        );
      },
      getCurrentDateTime: function (e) {
        if (e instanceof Date) var t = new Date(e).toJSON();
        else t = new Date().toJSON();
        return t;
      },
      dateInFuture: function (e, t) {
        return (e = new Date(e)), new Date(t).getTime() <= e.getTime();
      },
      get30DaysDate: function (e) {
        var t = new Date(Mu.getTodaysDate(e)),
          n = new Date().setDate(t.getDate() + 30);
        return new Date(n).toJSON().slice(0, 10);
      },
      setSyncDate: function (e, t, n) {
        var r = Mu.getTodaysDate(e),
          i = {};
        (i[t] = r), "Chrome" == n ? chrome.storage.sync.set(i) : localStorage.setItem(t, r);
      },
      resolveSync: (e, t, n, r) =>
        void 0 === e ? (Mu.setSyncDate(t, n, r), !0) : !((null !== e && !Mu.needsUpdated(e)) || (Mu.setSyncDate(t, n, r), 0)),
      getLastSync: function (e, t, n) {
        return new Promise((r) => {
          var i = "texthelp_" + t + "_ga_updated_in_licensing";
          "Chrome" == n
            ? chrome.storage.sync.get([i], (t) => {
                r(Mu.resolveSync(t[i], e, i, n));
              })
            : r(Mu.resolveSync(localStorage.getItem(i), e, i, n));
        });
      },
      needsUpdated: function (e) {
        var t = new Date(),
          n = new Date();
        return n.setDate(t.getDate() - 30), n.setHours(0), n.setMinutes(0), n.setSeconds(0), Date.parse(n) > Date.parse(e);
      },
      dateDiff: function (e, t, n) {
        e = new Date(e);
        var r = (t = new Date(t)) - e;
        if (isNaN(r)) return NaN;
        switch (n) {
          case "years":
            return t.getFullYear() - e.getFullYear();
          case "months":
            return 12 * t.getFullYear() + t.getMonth() - (12 * e.getFullYear() + e.getMonth());
          case "weeks":
            return Math.floor(r / 6048e5);
          case "days":
            return Math.floor(r / 864e5);
          case "hours":
            return Math.floor(r / 36e5);
          case "minutes":
            return Math.floor(r / 6e4);
          case "seconds":
            return Math.floor(r / 1e3);
          default:
            return;
        }
      },
      platformFlagToCheck: function (e) {
        return "equatio" == e || "equatio_lti" == e
          ? "equatio"
          : "ft4g" == e
          ? "ft4g"
          : "wriq" == e
          ? "wriq"
          : "reachdeck" == e
          ? "reachdeck"
          : "orbitdoc" == e
          ? "orbitdoc"
          : "claroread" == e
          ? "claroread"
          : "writinghelper" == e
          ? "writinghelper"
          : "scanpen" == e
          ? "scanpen"
          : "read_and_write";
      },
      verifyUserCanEnrolInGroup: function (e, t, n) {
        var r = JSON.parse(e),
          i = r[Mu.platformFlagToCheck(n)];
        if (!0 === Mu.dateInFuture(r.expiry, t) && 1 == i) {
          if (1 == r.unlimited) return !0;
          if (r.user_count > r.enrolled_seats && 1 != r.using_admin_tool) return !0;
        }
        return !1;
      },
      getUserFilename: function (e, t) {
        if ("equatio" == t) var n = "users_equatio";
        else
          n =
            "equatio_lti" == t
              ? "users_equatio_lti"
              : "ft4g" == t
              ? "users_ft4g"
              : "wriq" == t
              ? "users_wriq"
              : "reachdeck" == t
              ? "users_reachdeck"
              : "orbitdoc" == t
              ? "users_orbitdoc"
              : "claroread" == t
              ? "users_claroread"
              : "scanpen" == t
              ? "users_scanpen"
              : "writinghelper" == t
              ? "users_writinghelper"
              : "users";
        return n + "/" + e + ".json";
      },
      getGroupFilename: function (e) {
        return "groups/" + e + ".json";
      },
      getFeaturesFilename: function (e, t) {
        return "new_" + t + "_features_" + e + ".json";
      },
      getDomainsListFilename: function (e, t) {
        return "domains/" + e + "/" + t + ".json";
      },
      getProductExpiryProp: function (e) {
        return "expiry_" + e;
      },
      getSoftwareEnabledProp: function (e) {
        return "equatio" == e
          ? "equatio"
          : "equatio_lti" == e
          ? "equatio_lti"
          : "ft4g" == e
          ? "ft4g"
          : "wriq" == e
          ? "wriq"
          : "reachdeck" == e
          ? "reachdeck"
          : "orbitdoc" == e
          ? "orbitdoc"
          : "claroread" == e
          ? "claroread"
          : "scanpen" == e
          ? "scanpen"
          : "writinghelper" == e
          ? "writinghelper"
          : "read_and_write";
      },
      isGroupAuthCode: function (e) {
        return "G" == e.substring(0, 1);
      },
      isValidUser: function (e) {
        return e.indexOf("@") >= 0;
      },
      setDebugMode: function (e) {
        Mu.debug = e;
      },
      validProduct: function (e) {
        return [
          "mac",
          "rw4gc",
          "windows",
          "ipad",
          "android",
          "equatio",
          "equatio_lti",
          "edge",
          "ft4g",
          "wriq",
          "reachdeck",
          "orbitdoc",
          "claroread",
          "writinghelper",
          "scanpen"
        ].includes(e);
      },
      logger: function (e) {}
    },
    Yu = function (e, t) {
      return (t >>> e) | (t << (32 - e));
    },
    Gu = function (e) {
      return Yu(2, e) ^ Yu(13, e) ^ Yu(22, e);
    },
    Fu = function (e) {
      return Yu(6, e) ^ Yu(11, e) ^ Yu(25, e);
    },
    Bu = function (e) {
      return Yu(7, e) ^ Yu(18, e) ^ (e >>> 3);
    },
    Vu = function (e) {
      return Yu(17, e) ^ Yu(19, e) ^ (e >>> 10);
    },
    Ku = function (e, t, n) {
      return (e & t) ^ (~e & n);
    },
    Wu = function (e, t, n) {
      return (e & t) ^ (e & n) ^ (t & n);
    },
    Hu = function (e) {
      for (var t = "", n = 7; n >= 0; n -= 1) t += ((e >>> (4 * n)) & 15).toString(16);
      return t;
    },
    zu = function (e) {
      for (
        var t = unescape(encodeURIComponent(e)),
          n = [
            1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278,
            1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122,
            1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205,
            773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800,
            3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
            1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298
          ],
          r = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
          i = (t += String.fromCharCode(128)).length / 4 + 2,
          a = Math.ceil(i / 16),
          s = new Array(a),
          o = 0;
        a > o;
        o += 1
      ) {
        s[o] = new Array(16);
        for (var c = 0; c < 16; c += 1)
          s[o][c] =
            (t.charCodeAt(64 * o + 4 * c) << 24) |
            (t.charCodeAt(64 * o + 4 * c + 1) << 16) |
            (t.charCodeAt(64 * o + 4 * c + 2) << 8) |
            t.charCodeAt(64 * o + 4 * c + 3);
      }
      (s[a - 1][14] = ((t.length - 1) / Math.pow(2, 32)) * 8),
        (s[a - 1][14] = Math.floor(s[a - 1][14])),
        (s[a - 1][15] = 8 * ((t.length - 1) & 4294967295));
      for (var u = new Array(64), l = 0; a > l; l += 1) {
        for (var d = 0; d < 16; d += 1) u[d] = s[l][d];
        for (var h = 16; h < 64; h += 1) u[h] = (Vu(u[h - 2]) + u[h - 7] + Bu(u[h - 15]) + u[h - 16]) & 4294967295;
        for (var p = r[0], g = r[1], f = r[2], m = r[3], v = r[4], y = r[5], _ = r[6], b = r[7], S = 0; S < 64; S += 1) {
          var w = b + Fu(v) + Ku(v, y, _) + n[S] + u[S],
            E = Gu(p) + Wu(p, g, f);
          (b = _), (_ = y), (y = v), (v = (m + w) & 4294967295), (m = f), (f = g), (g = p), (p = (w + E) & 4294967295);
        }
        (r[0] = (r[0] + p) & 4294967295),
          (r[1] = (r[1] + g) & 4294967295),
          (r[2] = (r[2] + f) & 4294967295),
          (r[3] = (r[3] + m) & 4294967295),
          (r[4] = (r[4] + v) & 4294967295),
          (r[5] = (r[5] + y) & 4294967295),
          (r[6] = (r[6] + _) & 4294967295),
          (r[7] = (r[7] + b) & 4294967295);
      }
      return `${Hu(r[0])}${Hu(r[1])}${Hu(r[2])}${Hu(r[3])}${Hu(r[4])}${Hu(r[5])}${Hu(r[6])}${Hu(r[7])}`;
    },
    qu = function (e) {
      var t = e.toLowerCase();
      t = t.trim();
      try {
        var n = t.split("@"),
          r = n[0].replace("%", ""),
          i = n[1];
        return `${zu((r += "hfdu9b89';JHK7898hbh;';[/"))}@${i}`;
      } catch (e) {}
      return "";
    },
    Ju = function (e) {
      var t = e.toUpperCase();
      t = t.trim();
      try {
        return zu(t + "hfdu9b89';JHK7898hbh;';[/");
      } catch (e) {}
      return "";
    },
    $u = function (e) {
      var t = e.toLowerCase();
      t = t.trim();
      try {
        return zu(t + "hfdu9b89';JHK7898hbh;';[/");
      } catch (e) {}
      return "";
    },
    Xu = !1,
    Qu = function (e, t) {
      var n = !1,
        r = !1,
        i = !1,
        a = !1,
        s = !1,
        o = !1,
        c = !1,
        u = !1,
        l = !1,
        d = !1,
        h = !1,
        p = !1,
        g = !1,
        f = !1,
        m = !1,
        v = !1,
        y = !1,
        _ = "",
        b = "",
        S = "",
        w = !0,
        E = function () {
          Mu.s3Req("institutions_list.json", m).then(([e, t, n]) => {
            O(e);
          });
        },
        O = function (e) {
          var t = JSON.parse(e),
            n = !1;
          u.find(function (e) {
            return e in t && ((l = t[e]), (n = !0)), n;
          }),
            l
              ? Mu.s3Req(Mu.getGroupFilename(l), m).then(([e, t, n]) => {
                  N(e, t);
                })
              : I();
        },
        A = function (e, t, r) {
          if (((m = t), !1 !== e))
            if ("Group" === (f = JSON.parse(e)).licence_type)
              Mu.s3Req(Mu.getGroupFilename(f.group), m).then(([e, t, n]) => {
                U(e, t);
              });
            else {
              n = e;
              var s = JSON.parse(e);
              c ? E() : i && i != s.auth_code ? (a ? ((d = !0), T()) : I()) : "Freemium" == s.licence_type ? ((d = !0), T()) : Y();
            }
          else (d = !0), T(r);
        },
        T = function (e) {
          if (c) E();
          else if (s) {
            var t = Mu.platformFlagToCheck(g),
              n = Mu.getDomainsListFilename(t, s);
            Mu.s3Req(n, m).then(([e, t, n]) => {
              C(e, t, n);
            });
          } else I(e);
        },
        I = function (e) {
          i && !a
            ? Mu.s3Req(Mu.getUserFilename(i, g), m).then(([e, t, n]) => {
                D(e, t, n);
              })
            : n
            ? Y()
            : r
            ? w
              ? x(e)
              : j()
            : ((h = Error("User or product code not set")), t(h, !1));
        },
        C = function (e, t, n) {
          (m = t), !1 !== e ? k(e, R) : I(n);
        },
        R = function (e) {
          0 != e
            ? Mu.s3Req("groups/" + e + ".json", m).then(([e, t, n]) => {
                N(e, t);
              })
            : I();
        },
        k = function (e, t) {
          var n = JSON.parse(e),
            r = !1;
          "rw4gc" == g || "equatio" == g || "equatio_lti" == g || "ft4g" == g || "wriq" == g || "reachdeck" == g || !1 !== o
            ? null != n.unlimited_oauth && null != n.unlimited_oauth[s] && (r = n.unlimited_oauth[s])
            : !1 !== i &&
              !0 === a &&
              null != n.unlimited &&
              (null != n.unlimited[i] ? (r = n.unlimited[i]) : (h = Error("Product code invalid"))),
            !r && i && !0 === a && null != n.limited && (null != n.limited[i] ? (r = n.limited[i]) : (h = Error("Product code invalid"))),
            r || (null != n.hide_unlicensed && null != n.hide_unlicensed[s] && (p = !0)),
            t(r);
        },
        N = function (e, t) {
          (m = t),
            !1 !== e
              ? ((n = e), y ? Y() : P(e))
              : y
              ? Mu.s3Req(Mu.getUserFilename(r, g), m).then(([e, t, n]) => {
                  A(e, t, n);
                })
              : I();
        },
        P = function (e) {
          !1 === w
            ? j()
            : Mu.verifyUserCanEnrolInGroup(e, m, g)
            ? ((n = e), Y(), L(e))
            : ((n = !1), (h = Error("Unable to enrol in group")), I());
        },
        L = function (e) {
          var t = JSON.parse(e),
            n = {};
          (n.user = r),
            (n.group = t.guid),
            (n.auth_code = t.auth_code),
            (n.product = g),
            c && ((n.institution_id = l), (n.login_type = o)),
            Mu.sugarReq("group", n, function (e) {});
        },
        D = function (e, a, s) {
          m = a;
          try {
            if (!1 !== e)
              if ((Mu.logger("[DEBUG]: Found auth code file."), r)) {
                var c = !0;
                0 == o && ((c = !1), (h = Error("Login type not set")));
                var u = JSON.parse(e);
                (u.hasOwnProperty("perpetual") && u.perpetual) ||
                  Mu.dateInFuture(u.expiry, m) ||
                  ((c = !1), (h = Error("License expired")));
                var l = Mu.getSoftwareEnabledProp(g);
                !c || (u.hasOwnProperty(l) && 0 != u[l]) || ((c = !1), (h = Error("Product not enabled")));
                var d = u[o + "_login"];
                if (c && "" !== d) {
                  if (d === r) return (n = e), Y();
                  (c = !1), (h = Error("This product code is already tied to a user for this login type"));
                } else u[o + "_login"] = r;
                if (!0 === c) {
                  (n = JSON.stringify(u)),
                    Mu.logger("[DEBUG]: licence file"),
                    Mu.logger(n),
                    Y(),
                    Mu.logger("[DEBUG]: Updating single user file via sugar");
                  var p = {};
                  (p.user = r),
                    (p.user_encrypted = !0),
                    (p.auth_code = i),
                    (p.login_type = o),
                    (p.licence_id = u.guid),
                    Mu.sugarReq("single", p, function (e) {
                      Mu.logger("[DEBUG]: File updated successfully.");
                    });
                } else x();
              } else (n = e), Y();
            else {
              if (!r) throw new Error("Not a valid product code");
              (h = Error("Not a valid product code")), x(s);
            }
          } catch (e) {
            t(e, n);
          }
        },
        U = function (e, t) {
          if (((m = t), !1 !== e)) {
            var r = JSON.parse(e);
            if ((8 == r.auth_code.length && (r.auth_code = Ju(r.auth_code)), f.auth_code == r.auth_code)) {
              n = e;
              var i = Mu.getSoftwareEnabledProp(g),
                a = Mu.getProductExpiryProp(g);
              Mu.dateInFuture(r.expiry, m)
                ? 1 != r[i]
                  ? ((r[a] = Mu.getYesterdaysDate(m)),
                    (n = JSON.stringify(r)),
                    Mu.s3Req(Mu.getFeaturesFilename(g, "freemium"), m).then(([e, t, n]) => {
                      G(e, t);
                    }))
                  : Y()
                : Mu.s3Req(Mu.getFeaturesFilename(g, "freemium"), m).then(([e, t, n]) => {
                    G(e, t);
                  });
            } else (h = Error("Group product code has changed, reverting to freemium")), (d = !0), j();
          } else
            Mu.s3Req(Mu.getFeaturesFilename(g, "freemium"), m).then(([e, t, n]) => {
              G(e, t);
            });
        },
        x = function (e) {
          if ((null == e && (e = !1), !1 === n && !0 === w)) {
            if (((n = Mu.freemium(r, m, g)), e)) {
              var t = JSON.parse(n);
              (t.lt = Math.floor(899999 * Math.random() + 1e5)), (n = JSON.stringify(t));
            } else M();
            Y();
          } else !1 === w ? j() : Y();
        },
        j = function () {
          !1 === n && ((n = Mu.expiredFreemium(r, m, g)), !0 === w && M()), Y();
        },
        M = function () {
          if (r) {
            var e = {};
            (e.user = r), (e.product = g), Mu.sugarReq("freemium", e).then((e) => {});
          }
        },
        Y = function () {
          var e = JSON.parse(n);
          (_ = e.licence_type), 1 == e.unlimited && (_ = "Unlimited"), e.free_for_teachers && (S = 1);
          var t = !1;
          if ("Group" != e.licence_type) {
            var r = Mu.getProductExpiryProp(g),
              a = Mu.getSoftwareEnabledProp(g);
            (((e.hasOwnProperty(a) && 0 != e[a]) || e.hasOwnProperty(r)) &&
              (!e.hasOwnProperty(a) || 1 != e[a] || Mu.dateInFuture(e.expiry, m) || e.hasOwnProperty(r))) ||
              ((b = "Trial"), (e[r] = Mu.get30DaysDate(m)), (n = JSON.stringify(e)), (t = !0)),
              "Freemium" == e.licence_type && ((e.hide_unlicensed = p), (n = JSON.stringify(e)));
            var o = !1;
            ((e.hasOwnProperty(a) && 1 == e[a] && Mu.dateInFuture(e.expiry, m)) || (e.hasOwnProperty(r) && Mu.dateInFuture(e[r], m))) &&
              (o = !0),
              !0 === o
                ? ((b = "Premium"),
                  Mu.s3Req(Mu.getFeaturesFilename(g, "premium"), m).then(([e, t, n]) => {
                    G(e, t);
                  }))
                : ((b = "Freemium"),
                  Mu.s3Req(Mu.getFeaturesFilename(g, "freemium"), m).then(([e, t, n]) => {
                    G(e, t);
                  }));
          } else K(n);
          if ((!0 === t && M(), "Group" != e.licence_type && !0 !== d && null != s)) {
            var c = !1;
            if ((("Single" == e.licence_type && Mu.dateInFuture(e.expiry, m)) || (c = !0), !0 === c)) {
              var u = Mu.platformFlagToCheck(g),
                l = Mu.getDomainsListFilename(u, s);
              Mu.s3Req(l, m).then(([e, t, n]) => {
                F(e, t);
              });
            }
          }
          (e = JSON.parse(n)),
            (i = e.auth_code),
            !0 === w &&
              ("undefined" != typeof chrome && void 0 !== chrome.storage
                ? Mu.getLastSync(m, g, "Chrome").then((e) => {
                    e && W();
                  })
                : "undefined" != typeof localStorage
                ? Mu.getLastSync(m, g, "Local").then((e) => {
                    e && W();
                  })
                : W());
        },
        G = function (e, t) {
          if (((m = t), !1 !== e)) {
            var r = JSON.parse(n),
              i = JSON.parse(e);
            (r.features = i), (n = JSON.stringify(r)), K(n);
          } else K(n);
        },
        F = function (e, t) {
          (m = t), !1 !== e && k(e, B);
        },
        B = function (e) {
          0 != e
            ? Mu.s3Req("groups/" + e + ".json", m).then(([e, t, n]) => {
                V(e, t);
              })
            : Mu.logger("[WARNING]: No groups found for this domain.");
        },
        V = function (e, t) {
          (m = t), !1 !== e && (Mu.verifyUserCanEnrolInGroup(e, m, g) ? L(e) : Mu.logger("[ERROR]: Unable to enroll user in the group."));
        },
        K = function (e) {
          var n = JSON.parse(e);
          (n.today = Mu.getTodaysDate(m)), (n.currentDateTime = Mu.getCurrentDateTime(m));
          var i = Mu.getSoftwareEnabledProp(g),
            a = Mu.getProductExpiryProp(g);
          if (
            (n.hasOwnProperty(i) && 1 == n[i]
              ? ((n.license_expiry = n.expiry),
                (b = "Premium"),
                Mu.dateInFuture(n.expiry, m) ||
                  (n.hasOwnProperty(a) && Mu.dateInFuture(n[a], m) && ((n.license_expiry = n[a]), (b = "Trial"), (n.trial = !0))))
              : ((n.license_expiry = n[a]),
                Mu.dateInFuture(n.license_expiry, m) ? ((b = "Trial"), (n.trial = !0)) : ((b = "Freemium"), (n.trial = !1))),
            (n.daysleft = Mu.dateDiff(n.today, n.license_expiry, "days")),
            "Group" != n.licence_type)
          )
            if ("equatio" == g) {
              var s = Mu.getSoftwareEnabledProp("rw4gc");
              "Single" == n.licence_type && n.hasOwnProperty(s) && 1 == n[s]
                ? (n.upgrade_link = "https://text.help/2MVuXs")
                : (n.upgrade_link = "https://text.help/llZsZf");
            } else n.daysleft >= 0 ? (n.upgrade_link = "https://text.help/sNm0iR") : (n.upgrade_link = "https://text.help/ojpwiV");
          void 0 === n.user && 0 != r && (n.user = r), t(h, n);
        },
        W = function () {
          if (r) e = r.split("@")[1];
          else var e = "takehomeuser";
          var t;
          switch (g) {
            case "mac":
            case "rw4gc":
            case "windows":
            case "ipad":
            case "android":
            case "edge":
              t = "Read&Write";
              break;
            case "equatio":
            case "equatio_lti":
              t = "Equatio";
              break;
            case "ft4g":
              t = "Fluency Tutor";
              break;
            case "wriq":
              t = "WriQ";
              break;
            case "reachdeck":
              t = "ReachDeck";
              break;
            case "orbitdoc":
              t = "OrbitDoc";
              break;
            case "claroread":
              t = "ClaroRead";
              break;
            case "writinghelper":
              t = "WritingHelper";
              break;
            case "scanpen":
              t = "ScanPen";
          }
          if ("undefined" != typeof chrome && "undefined" != typeof analytics && "function" == typeof analytics.getService) {
            var n;
            (n = analytics.getService("th_licensing").getTracker("UA-83720712-5")).set("clientId", r), n.set("userId", r);
            var a = analytics.EventBuilder.builder()
              .category("Licence Check")
              .action(r)
              .label(e)
              .dimension({ index: 1, value: t })
              .dimension({ index: 2, value: _ })
              .dimension({ index: 3, value: b })
              .dimension({ index: 4, value: S })
              .dimension({ index: 5, value: i })
              .dimension({ index: 6, value: "" });
            n.send(a);
          } else if ("undefined" != typeof window && "function" == typeof window.ga && 42 === window.ga.answer)
            window.ga("create", "UA-83720712-5", "auto", "licensingTracker", { clientId: r }),
              window.ga("licensingTracker.send", "event", {
                uid: r,
                eventCategory: "Licence Check",
                eventAction: r,
                eventLabel: e,
                cd1: t,
                cd2: _,
                cd3: b,
                cd4: S,
                cd5: i,
                cd6: ""
              });
          else {
            var s = {
                v: 1,
                t: "event",
                tid: "UA-83720712-5",
                ec: "Licence Check",
                ea: r,
                cid: r,
                uid: r,
                el: e,
                cd1: t,
                cd2: _,
                cd3: b,
                cd4: S,
                cd5: i,
                cd6: ""
              },
              o = Object.keys(s)
                .filter(function (e) {
                  return s[e];
                })
                .map(function (e) {
                  return e + "=" + encodeURIComponent(s[e]);
                })
                .join("&");
            fetch("https://www.google-analytics.com/collect", { method: "post", body: o });
          }
        };
      try {
        if (
          (void 0 !== e.debug && "" != e.debug
            ? ((Xu = e.debug),
              (Mu.thDebugMode = Xu),
              Mu.logger("=========================="),
              Mu.logger("[CORE]: Debug Mode Enabled"),
              Mu.logger("=========================="))
            : (Xu = !1),
          null != e.authCode &&
            "" != e.authCode &&
            !(function (e) {
              return 8 == e.length
                ? ((e = e.toUpperCase()),
                  Mu.isGroupAuthCode(e) && (a = !0),
                  Mu.logger("[DEBUG]: Found an auth code: " + e),
                  (i = Ju(e)),
                  Mu.logger("[DEBUG]: Hashed auth code for use: " + i),
                  !0)
                : 10 == e.length &&
                    ((e = e.toUpperCase()),
                    Mu.logger("[DEBUG]: Found a take home code: " + e),
                    (i = Ju(e)),
                    Mu.logger("[DEBUG]: Hashed take home code for use: " + i),
                    (y = !0),
                    !0);
            })(e.authCode))
        )
          throw new Error("Product code invalid");
        if (null != e.product && "" != e.product) {
          if (!Mu.validProduct(e.product)) throw new Error("Invalid product");
          g = e.product;
        }
        if (
          (void 0 !== e.cacheBypass && "" != e.cacheBypass
            ? ((v = e.cacheBypass),
              (Mu.thCloudFrontBypass = v),
              v && Mu.logger("[DEBUG]: Bypassing CloudFront due to configuration option!"))
            : ((v = !1), (Mu.thCloudFrontBypass = !1)),
          void 0 !== e.createLicence)
        ) {
          if ("boolean" != typeof e.createLicence) throw new Error("createLicence flag should be a boolean");
          (w = e.createLicence), Mu.logger("[DEBUG]: thCreateLicence set to " + w);
        }
        if (null != e.user && "" != e.user) {
          var H = e.user.toLowerCase(),
            z = !1;
          if (
            (null != e.disableUserHash && !0 === e.disableUserHash && (z = !0),
            !(function (e, t) {
              if (null != e) {
                if (!Mu.isValidUser(e)) throw (Mu.logger("[ERROR]: No domain found in user string."), new Error("No domain found"));
                (e = e.replace(/[\u200B-\u200D\uFEFF]/g, "")),
                  (r = !0 === t ? e : qu(e)),
                  Mu.logger('[DEBUG]: Hashed user string: "' + r + '"');
                var n = r.split("@")[1];
                return (
                  Mu.logger('[DEBUG]: Domain set to: "' + n + '"'),
                  (s = $u(n)),
                  Mu.logger('[DEBUG]: Domain (post-hash) set to: "' + s + '"'),
                  !0
                );
              }
              return !1;
            })(H, z))
          )
            throw new Error("Invalid user");
        }
        if (null != e.loginType && "" != e.loginType) {
          var q = e.loginType;
          if (
            !(function (e) {
              return !(
                ["facebook", "feide", "google", "microsoft", "linkedin", "twitter", "uni-c", "yahoo"].indexOf(e) < 0 || ((o = e), 0)
              );
            })(q)
          )
            throw new Error("Invalid login type");
          !(function (t, n, r) {
            if (
              (c = (function (e) {
                return !(["feide", "uni-c"].indexOf(e) < 0 || ((c = !0), 0));
              })(t))
            ) {
              if (!1 === r) throw new Error("ERROR: email should already be hashed.");
              if (!Array.isArray(n)) throw new Error("institutions should be an array");
              u = n.map((e) => e.toLowerCase());
            } else if (null != e.institutions && "" != e.institutions)
              throw new Error("institutions should not be set for this login type");
          })(q, e.institutions, e.disableUserHash);
        }
        if (!r && !i) throw new Error("User or product code must be set");
        if (0 == g) throw new Error("Product not set");
        1 == y
          ? (Mu.logger("[DEBUG]: Starting take home check"),
            (function (e) {
              Mu.logger("[DEBUG]: in the take home check");
              var t = i;
              0 != t
                ? Mu.s3Req("groups/takehome/" + t + ".json", m).then(([e, t, n]) => {
                    N(e, t);
                  })
                : I();
            })())
          : r
          ? Mu.s3Req(Mu.getUserFilename(r, g), m).then(([e, t, n]) => {
              A(e, t, n);
            })
          : (Mu.logger("[DEBUG]: Starting single user check"), I());
      } catch (e) {
        t(e, n);
      }
    };
  class Zu {
    constructor(e = "", t = "", n = "") {
      (this._user = e), (this._loginType = t), (this._product = n);
    }
    getLicense(e = null, t = null, n = null, r = !0, i = null, a = !0) {
      return new Promise((s, o) => {
        try {
          let o = null;
          r && (o = new xu(Uu)),
            void 0 !== e && (this._user !== e && (a = !1), (this._user = e)),
            void 0 !== t && (this._loginType !== t && (a = !1), (this._loginType = t)),
            void 0 !== n && (this._product !== n && (a = !1), (this._product = n));
          const c = { user: e, loginType: t, product: n };
          "NYC" === t && (c.loginType = ""),
            null != i && ((c.authCode = i), (a = !1)),
            a && r
              ? o.retrieve("rw4gc.lic.cache").then((r) => {
                  if (null === r || (0 === Object.keys(r).length && r.constructor === Object))
                    (a = !1),
                      this.getLicenseNoCache(c).then((r) => {
                        r.meta || (r.meta = {}),
                          (r.meta.lastUpdated = new Date()),
                          (r.meta.user = e),
                          (r.meta.loginType = t),
                          (r.meta.product = n);
                        o.store("rw4gc.lic.cache", r, !1);
                        s(this.newFeaturesAdded(r));
                      });
                  else {
                    const i = this._user === r.meta.user && this._product === r.meta.product && this._loginType === r.meta.loginType,
                      a = new Date(r.meta.lastUpdated);
                    this.nextDay(a) || !i
                      ? this.getLicenseNoCache(c).then((r) => {
                          r.meta || (r.meta = {}),
                            (r.meta.lastUpdated = new Date()),
                            (r.meta.user = e),
                            (r.meta.loginType = t),
                            (r.meta.product = n);
                          o.store("rw4gc.lic.cache", r, !1);
                          s(this.newFeaturesAdded(r));
                        })
                      : s(this.newFeaturesAdded(r));
                  }
                })
              : this.getLicenseNoCache(c).then((r) => {
                  r.meta || (r.meta = {}),
                    (r.meta.lastUpdated = new Date()),
                    (r.meta.user = e),
                    (r.meta.loginType = t),
                    (r.meta.product = n),
                    s(this.newFeaturesAdded(r));
                });
        } catch (e) {
          o(e);
        }
      });
    }
    static removeCachedLicense() {
      return new Promise((e, t) => {
        try {
          new xu(Uu).remove("rw4gc.lic.cache").then(() => {
            e(!0);
          });
        } catch (e) {
          t(e);
        }
      });
    }
    newFeaturesAdded(e) {
      return void 0 !== e.Rewordify || ("Freemium" === e.licence_type && !e.trial) || (e.features.Rewordify = !0), e;
    }
    getLicenseNoCache(e) {
      return new Promise((t, n) => {
        Qu(e, (e, r) => {
          e ? n(e) : t(this.newFeaturesAdded(r));
        });
      });
    }
    nextDay(e) {
      const t = new Date(),
        n = 1e4 * t.getFullYear() + 100 * t.getMonth() + t.getDate();
      return 1e4 * e.getFullYear() + 100 * e.getMonth() + e.getDate() !== n;
    }
  }
  class el {
    constructor(e = qc.DEFAULT, t = !1) {
      (this._authtype = e), (this._user = void 0), (this._license = void 0), (this._isEdge = t);
    }
    async getLicense(e = null, t = !1, n = !1) {
      var r = this;
      return new Promise(async function (i, a) {
        try {
          let a = new ju(r._authtype, r._isEdge),
            s = await a.getUser(t, n);
          null === s && i({ licenseStore: { license: null, authType: null }, authType: null });
          let o = new Zu(s.email, s.licensetype, "rw4gc"),
            c = await o.getLicense(s.email, s.licensetype, "rw4gc", !0, e);
          i({ license: c, authType: s.licensetype });
        } catch (e) {
          a(e);
        }
      });
    }
    async getLicenseForAccount(e = null, t = null, n = !1) {
      return new Promise(async function (r, i) {
        try {
          if (0 === e.length) return;
          let i = new Zu(e.toLowerCase(), t.toLowerCase(), "rw4gc");
          r(await i.getLicense(e.toLowerCase(), t.toLowerCase(), "rw4gc", !0, null, n));
        } catch (e) {
          i(e);
        }
      });
    }
    signOut(e) {
      return new Promise((t, n) => {
        try {
          Zu.removeCachedLicense()
            .then(() => {
              e && (this._authtype = e),
                new ju(this._authtype, this._isEdge)
                  .signOut()
                  .then(() => {
                    (this._authtype = qc.DEFAULT), t(!0);
                  })
                  .catch((e) => {
                    n(e);
                  });
            })
            .catch((e) => {
              n(e);
            });
        } catch (e) {
          n(e);
        }
      });
    }
  }
  const tl = "bjglhpoliipklkfjcahfefdlfpifcinb" === chrome.runtime.id,
    nl = Object.freeze({ GROUP: "Group", UNLIMITED: "Unlimited", PREMIUM: "Premium", SINGLE: "Single" }),
    rl = { licenseCheck: null },
    il = (e, t) => {
      let n;
      return rl.licenseCheck && rl.licenseCheck._authtype === e ? (n = rl.licenseCheck) : ((n = new el(e, t)), (rl.licenseCheck = n)), n;
    },
    al = async (e, t = null, n = !1, r = !1) => {
      let i,
        a = il(e, tl);
      return (i = t ? await a.getLicense(t) : await a.getLicense(null, n, r)), i;
    },
    sl = async (e) => {
      try {
        if (rl.licenseCheck) await rl.licenseCheck.signOut(e), (rl.licenseCheck = null);
        else {
          let t = il(e, tl);
          await t.signOut(e);
        }
      } catch (e) {}
    },
    ol = (e) => {
      switch (!0) {
        case e.toUpperCase().startsWith("NYC"):
          return r.NYC;
        case e.toUpperCase().startsWith("GOOGLE"):
          return r.GOOGLE;
        case e.toUpperCase().startsWith("MICROSOFT"):
          return r.MICROSOFT;
        default:
          return r.DEFAULT;
      }
    },
    cl = async () => (ol(Jr.state.licenseType) === r.DEFAULT && Jr.setLicenseType(ol(await ul())), ol(Jr.state.licenseType)),
    ul = async () => {
      let e = null,
        t = await ((n = null),
        new Promise((e) => {
          chrome.storage.managed.get(n, (t) => {
            e(t);
          });
        }));
      var n;
      return (
        (e = t.accountType
          ? t.accountType.startsWith(r.MICROSOFT)
            ? r.MICROSOFT
            : t.accountType.startsWith(r.NYC)
            ? r.NYC
            : r.GOOGLE
          : r.DEFAULT),
        e
      );
    },
    ll = async (e, t) => {
      chrome.scripting.executeScript({ target: { tabId: e, allFrames: !0 }, files: [t] }, (t) => {
        t &&
          t.forEach((t) => {
            t &&
              t.result &&
              !0 === t.result.found &&
              setTimeout(() => {
                let n = t.result.injectRule;
                (n.target.tabId = e), (n.target.frameIds = [t.frameId]), chrome.scripting.executeScript(n);
              }, 100);
          });
      });
    };
  function dl(e, t, n) {
    return (
      (t = (function (e) {
        var t = (function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var n = e[Symbol.toPrimitive];
          if (void 0 !== n) {
            var r = n.call(e, t || "default");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == typeof t ? t : String(t);
      })(t)) in e
        ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
        : (e[t] = n),
      e
    );
  }
  function hl(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }
  var pl = (function () {
    function e(t, n, r, i) {
      var a = this;
      (function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      })(this, e),
        (this._senderId = t),
        (this._messagingUrl = "https://messaging.texthelp.com/"),
        (this._messagingCallback = void 0),
        "boolean" == typeof r
          ? (!r && (this._messagingUrl = "https://th-messaging.dev.texthelp.com/"), (this._messagingCallback = i))
          : (this._messagingCallback = "function" == typeof r ? r : i),
        (this._lastMessage = void 0),
        (this._waiting = !1),
        (this._onMessageCallback = void 0),
        (this._lastTopic = void 0),
        (this._lastCallback = void 0),
        (this._lastWaitTopic = void 0),
        (this._application = n),
        this._GCMListen(),
        chrome.alarms.onAlarm.addListener(function (e) {
          if ("GCMKeepAlive" === e.name) void 0 !== a._lastTopic && a._registerTopic(a._lastTopic, void 0, !1, function () {});
        });
    }
    return (
      (t = e),
      (n = [
        {
          key: "getLastMessage",
          value: function (e, t, n) {
            var r = this,
              i = !1,
              a = void 0 !== this._lastMessage;
            if (
              (e !== this._lastTopic && ((t = !1), this._registerTopic(e, this._lastTopic, !0, function () {})),
              (this._lastTopic = e),
              (this._lastCallback = n),
              t && a)
            ) {
              try {
                "timed" === this._lastMessage.timetype && 0 > this._expiryTimeMS(this._lastMessage, !0) && (i = !0);
              } catch (e) {
                i = !0;
              }
              return (
                void 0 !== n && n(i ? void 0 : this._lastMessage),
                void (void 0 !== this._messagingCallback && this._messagingCallback(this._lastMessage))
              );
            }
            try {
              var s = `${this._messagingUrl}getlastmessage/v1`,
                o = {
                  method: "POST",
                  body: JSON.stringify({ message_topic: e, application: this._application }),
                  cache: "no-cache",
                  credentials: "omit",
                  headers: { "Content-Type": "application/json", Authorization: `Basic ${this._clientAuth}` }
                };
              fetch(s, o)
                .then(function (e) {
                  e.json().then(function (e) {
                    var t;
                    if (0 < e.length) {
                      var a = e[0];
                      t = r._parseMessageDoc(a);
                    }
                    if (
                      ((r._lastMessage = t),
                      void 0 !== t && void 0 !== t.application && t.application.toLowerCase() !== r._application && n(void 0),
                      (i = !1),
                      void 0 === t)
                    )
                      i = !0;
                    else if ("lockdown" !== t.application.toLowerCase())
                      try {
                        "timed" === r._lastMessage.timetype && 0 > r._expiryTimeMS(r._lastMessage, !0) && (i = !0);
                      } catch (e) {
                        i = !0;
                      }
                    void 0 !== n && n(i ? void 0 : t),
                      void 0 !== r._messagingCallback && (i ? r._messagingCallback(void 0) : r._messagingCallback(t)),
                      i || void 0 === r._onMessageCallback || r._onMessageCallback(t);
                  });
                })
                .catch(function () {
                  void 0 !== n && n(void 0), void 0 !== r._messagingCallback && r._messagingCallback(void 0);
                });
            } catch (e) {}
          }
        },
        {
          key: "onMessage",
          value: function (e) {
            this._onMessageCallback = e;
          }
        },
        {
          key: "manualMessage",
          value: function (e) {
            try {
              var t = JSON.parse(e.data.message);
              this._parseMessage(t);
            } catch (e) {
              console.log(e.message);
            }
          }
        },
        {
          key: "_parseMessageDoc",
          value: function (e) {
            var t;
            try {
              var n = {};
              if (
                ((n = "string" == typeof e.message ? JSON.parse(e.message) : e.message),
                Object.prototype.hasOwnProperty.call(n, "application") || (n.application = "rw4gc"),
                "lockdown" === n.application.toLowerCase())
              )
                t = { application: n.application, examSettings: n.examSettings };
              else {
                t = { application: n.application };
                try {
                  t.features = n["disabled-features"].reduce(function (e, t) {
                    return (e[t] = 0), e;
                  }, {});
                } catch (e) {
                  t.features = {};
                }
                (t.time = n.time), (t.timetype = n.timetype);
              }
              t.timestamp = e.post_date;
            } catch (e) {
              t = void 0;
            }
            return t;
          }
        },
        {
          key: "_expiryTimeMS",
          value: function (e, t) {
            if (Number.isNaN(e.time)) return 0;
            try {
              var n = new Date(),
                r = new Date(e.timestamp),
                i = new Date(r.getTime()),
                a = 60 * parseFloat(e.time);
              i.setMinutes(i.getMinutes() + a);
              var s = i - n;
              return t && 0 < s && chrome.alarms.create("MessageExpired", { when: i.getTime() }), s;
            } catch (e) {
              return 0;
            }
          }
        },
        {
          key: "_GCMKeepAlive",
          value: function (e) {
            chrome.alarms.get("GCMKeepAlive", function (t) {
              void 0 === t && chrome.alarms.create("GCMKeepAlive", { periodInMinutes: e });
            });
          }
        },
        {
          key: "_registerTest",
          value: function () {
            console.log(this._senderId),
              chrome.gcm.register([this._senderId], function (e) {
                void 0 !== chrome.runtime.lastError && console.log(chrome.runtime.lastError), console.log(`Old method id: ${e}`);
              }),
              chrome.instanceID.getToken({ authorizedEntity: this._senderId, scope: "GCM" }, function (e) {
                void 0 !== chrome.runtime.lastError && console.log(chrome.runtime.lastError), console.log(`New method id: ${e}`);
              });
          }
        },
        {
          key: "_registerTopic",
          value: function (e, t, n, r) {
            var i = this;
            chrome.storage.local.get("GCMRegistrationId", function (t) {
              var a = !1;
              chrome.instanceID.getToken({ authorizedEntity: i._senderId, scope: "GCM" }, function (s) {
                return void 0 === chrome.runtime.lastError
                  ? n
                    ? (void 0 !== t.id && void 0 !== t.topics && t.id === s && -1 < t.topics.indexOf(token) && (a = !0),
                      void (a
                        ? r(t)
                        : void 0 === t.id
                        ? i._registerIdWithService(s, e, function (t) {
                            if (t) {
                              var n = { id: s, topics: [e], lastModified: new Date().toISOString() };
                              chrome.storage.local.set({ GCMRegistrationId: n }), r(n);
                            }
                          })
                        : (void 0 === t.topics ? (t.topics = [e]) : t.topics.push(e),
                          i._registerIdWithService(s, e, function (e) {
                            e && ((e.lastModified = new Date().toISOString()), chrome.storage.local.set({ GCMRegistrationId: e }), r(e));
                          }))))
                    : void r({ success: !0 })
                  : (console.log(chrome.runtime.lastError), void r(null));
              });
            });
          }
        },
        {
          key: "_GCMListen",
          value: function () {
            var e = this;
            chrome.gcm.onMessage.addListener(function (t) {
              var n = JSON.parse(t.data.message);
              e._parseMessage(n);
            });
          }
        },
        {
          key: "_parseMessage",
          value: function (e) {
            if (
              (void 0 === e.message.application || e.message.application.toLowerCase() === this._application.toLowerCase()) &&
              void 0 !== e.message
            ) {
              var t = this._parseMessageDoc(e);
              this._lastMessage = t;
              var n = !1;
              if (void 0 === t) n = !0;
              else if (void 0 !== t.application && "lockdown" !== t.application.toLowerCase())
                try {
                  "timed" === this._lastMessage.timetype && 0 > this._expiryTimeMS(this._lastMessage, !0) && (n = !0);
                } catch (e) {
                  n = !0;
                }
              n || void 0 === this._messagingCallback || this._messagingCallback(t),
                n || void 0 === this._onMessageCallback || this._onMessageCallback(t);
            }
          }
        },
        {
          key: "_registerIdWithService",
          value: function (e, t, n, r) {
            var i = `${this._messagingUrl}registertoken/v1`,
              a = { message_topic: t, google_token: e };
            void 0 !== n && (a.previous_topic = n);
            var s = {
              method: "POST",
              body: JSON.stringify(a),
              cache: "no-cache",
              credentials: "omit",
              headers: { "Content-Type": "application/json", Authorization: `Basic ${this._clientAuth}` }
            };
            fetch(i, s).then(function (e) {
              e.json()
                .then(function (e) {
                  void 0 !== r && r(e.success);
                })
                .catch(function () {
                  void 0 !== r && r(!1);
                });
            });
          }
        },
        {
          key: "waiting",
          get: function () {
            return this._waiting;
          }
        }
      ]) && hl(t.prototype, n),
      r && hl(t, r),
      e
    );
    var t, n, r;
  })();
  class gl {
    constructor(e, t = !0) {
      dl(this, "messagingInstance", void 0),
        (this.storageEvents = new Nr()),
        (this.messagingInstance = new pl("224182583415", "rw4gc", !0, (e) => {
          e && this.storageEvents.dispatchStorageEvent("th-datadesk-message", Rr, { type: "th-datadesk-message", message: e.features });
        })),
        t &&
          this.messagingInstance.getLastMessage(e, !0, (e) => {
            e && this.storageEvents.dispatchStorageEvent("th-datadesk-message", Rr, { type: "th-datadesk-message", message: e.features });
          }),
        chrome.alarms.onAlarm.addListener((e) => {
          if ("MessageExpired" === e.name) this.storageEvents.dispatchStorageEvent("th-datadesk-reset", Rr, { type: "th-datadesk-reset" });
        });
    }
    processMessage(e) {
      this.messagingInstance.manualMessage(e);
    }
  }
  const fl = { dataDesk: null },
    ml = (e, t, n) => {
      try {
        if (fl.dataDesk) return fl.dataDesk;
        switch (e) {
          case nl.GROUP:
          case nl.PREMIUM:
          case nl.SINGLE:
          case nl.UNLIMITED:
            fl.dataDesk = new gl(t, n);
        }
      } catch (e) {
        console.info("Edge doesn't support chrome messaging.");
      }
      return fl.dataDesk;
    },
    vl = () => {
      fl.dataDesk = null;
    },
    yl = async (e, t, n) => {
      chrome.tabs.sendMessage(e.id, { command: "th-toolbarinjected" }, async function (i) {
        if (void 0 !== i)
          if (!1 !== i.injected) {
            if (t) {
              let e = await cl();
              e || (e = r.DEFAULT);
              try {
                let t = await al(e),
                  r = t.license;
                await new Promise((e) => {
                  setTimeout(e, 300);
                }),
                  r &&
                    ((Hr.license = t.license),
                    Jr.setLicenseType(r.meta.loginType),
                    Jr.setLoginType(r.meta.loginType.toLowerCase()),
                    n.dispatchStorageEvent("account-changed", Ir, { login: r.meta.loginType, user: r.meta.user }),
                    vl(),
                    ml(r.licence_type, r.meta.user, !0));
              } catch (e) {}
            }
          } else Ol(e.id, e.url);
      });
    },
    _l = async () => {
      const [e] = await ((e) =>
        new Promise((t) => {
          chrome.tabs.query(e, (e) => {
            t(e);
          });
        }))({ active: !0, currentWindow: !0 });
      return e;
    },
    bl = async (e) => {
      Sl(e);
    },
    Sl = async (e) => {
      chrome.scripting.executeScript({ target: { tabId: e, allFrames: !0 }, files: ["functions/getSelector.js"] }, (t) => {
        t &&
          t.forEach((t) => {
            t &&
              t.result &&
              !0 === t.result.found &&
              setTimeout(() => {
                let n = t.result.injectRule;
                (n.target.tabId = e), (n.target.frameIds = [t.frameId]), chrome.scripting.executeScript(n);
              }, 1e3);
          });
      });
    },
    wl = async (e, t) => {
      t.lastIndexOf("sharepoint.com") > -1 ||
        t.lastIndexOf("https://onedrive.live.com/") > -1 ||
        chrome.scripting.executeScript({ target: { tabId: e, allFrames: !0 }, files: ["functions/getIfInstalled.js"] }, (t) => {
          t &&
            t.forEach((t) => {
              !0 !== t.result &&
                null !== t.result &&
                setTimeout(() => {
                  chrome.scripting.executeScript({
                    target: { tabId: e, frameIds: [t.frameId] },
                    files: ["frame.bundle.js", "domdistiller.js"]
                  });
                }, 1e3);
            });
        });
    },
    El = (e, t, n) => {
      chrome.scripting.executeScript({ target: { tabId: e, frameIds: [n] }, files: ["functions/getIfInserted.js"] }, (t) => {
        if (!t) return;
        t.filter((e) => {
          if (!1 === e.result.res && !1 === e.result.checked) return !0;
        }).forEach((t) => {
          let r = [];
          Hc.forEach((n) => {
            let i = n.settings;
            (i.target.tabId = e),
              n.matches.some((e) => {
                let a = { [e]: i },
                  s = zc(t.result.url, a);
                if (s.target && s.target.tabId) return r.push(n), !0;
              });
          }),
            r.length > 0 &&
              ((r[0].settings.target.frameIds = [n]),
              setTimeout(() => {
                chrome.scripting.executeScript(r[0].settings);
              }, 1e3));
        });
      });
    },
    Ol = async (e, t) => {
      (t = t.toLowerCase()),
        await ll(e, "mathjax/getIfMathjaxNeeded.js"),
        await wl(e, t),
        await (async (e) => {
          let t = 0,
            n = !1,
            r = 0;
          for (; !(n || (r++, r > 30)); )
            await new Promise((e) => {
              setTimeout(e, t);
            }),
              (t = 300),
              chrome.scripting.executeScript(
                { target: { tabId: e, allFrames: !0 }, files: ["functions/getIfFrameInitialised.js"] },
                (e) => {
                  e && (n = 0 === e.filter((e) => !e.result).length);
                }
              );
        })(e),
        bl(e),
        ((e, t, n) => {
          t.forEach((t) => {
            let r = t.settings;
            (r.target.tabId = n),
              t.matches.includes("*")
                ? setTimeout(() => {
                    chrome.scripting.executeScript(r);
                  }, 1e3)
                : t.matches.some((t) => {
                    let n = zc(e, { [t]: r });
                    if (n.target && n.target.tabId)
                      return (
                        setTimeout(() => {
                          chrome.scripting.executeScript(n);
                        }, 1e3),
                        !0
                      );
                  });
          });
        })(t, Wc, e),
        El(e, 0, 0);
    },
    Al = {
      "en-AU": {
        speechoptions: { voice: "Karen", continousreading: !0, speakoneachword: !1, speakoneachsentence: !1, speed: 50 },
        translator: { translang: "es", transsource: "en" },
        language: { language: "en_US", services: "en_US" }
      },
      "en-GB": {
        speechoptions: { voice: "Serena", continousreading: !0, speakoneachword: !1, speakoneachsentence: !1, speed: 50 },
        translator: { translang: "fr", transsource: "en" },
        language: { language: "en_GB", services: "en_GB" }
      },
      en: {
        speechoptions: { voice: "Serena", continousreading: !0, speakoneachword: !1, speakoneachsentence: !1, speed: 50 },
        translator: { translang: "fr", transsource: "en" },
        language: { language: "en_GB", services: "en_GB" }
      },
      "en-US": {
        speechoptions: { voice: "Ava", continousreading: !0, speakoneachword: !1, speakoneachsentence: !1, speed: 50 },
        translator: { translang: "es", transsource: "en" },
        language: { language: "en_US", services: "en_US" }
      },
      "en-CA": {
        speechoptions: { voice: "Ava", continousreading: !0, speakoneachword: !1, speakoneachsentence: !1, speed: 50 },
        translator: { translang: "fr", transsource: "en" },
        language: { language: "en_US", services: "en_GB" }
      },
      fr: {
        speechoptions: { voice: "Audrey", continousreading: !0, speakoneachword: !1, speakoneachsentence: !1, speed: 50 },
        translator: { translang: "en", transsource: "fr" },
        language: { language: "fr", services: "fr" }
      },
      "fr-CA": {
        speechoptions: { voice: "Amelie", continousreading: !0, speakoneachword: !1, speakoneachsentence: !1, speed: 50 },
        translator: { translang: "en", transsource: "fr" },
        language: { language: "fr", services: "fr" }
      },
      "fr-FR": {
        speechoptions: { voice: "Amelie", continousreading: !0, speakoneachword: !1, speakoneachsentence: !1, speed: 50 },
        translator: { translang: "en", transsource: "fr" },
        language: { language: "fr", services: "fr" }
      },
      ms: {
        speechoptions: { voice: "Tagalog", continousreading: !0, speakoneachword: !1, speakoneachsentence: !1, speed: 50 },
        translator: { translang: "en", transsource: "ms" },
        language: { language: "ms", services: "en_US" }
      },
      tl: {
        speechoptions: { voice: "Tagalog", continousreading: !0, speakoneachword: !1, speakoneachsentence: !1, speed: 50 },
        translator: { translang: "en", transsource: "ms" },
        language: { language: "ms", services: "en_US" }
      },
      pt: {
        speechoptions: { voice: "Luciana", continousreading: !0, speakoneachword: !1, speakoneachsentence: !1, speed: 50 },
        translator: { translang: "en", transsource: "pt" },
        language: { language: "pt", services: "pt" }
      },
      "pt-BR": {
        speechoptions: { voice: "Luciana", continousreading: !0, speakoneachword: !1, speakoneachsentence: !1, speed: 50 },
        translator: { translang: "en", transsource: "pt" },
        language: { language: "pt", services: "pt" }
      },
      "pt-PT": {
        speechoptions: { voice: "Luciana", continousreading: !0, speakoneachword: !1, speakoneachsentence: !1, speed: 50 },
        translator: { translang: "en", transsource: "pt" },
        language: { language: "pt", services: "pt" }
      },
      es: {
        speechoptions: { voice: "Monica", continousreading: !0, speakoneachword: !1, speakoneachsentence: !1, speed: 50 },
        translator: { translang: "en", transsource: "es" },
        language: { language: "es", services: "es" }
      },
      nl: {
        speechoptions: { voice: "Claire", continousreading: !0, speakoneachword: !1, speakoneachsentence: !1, speed: 50 },
        translator: { translang: "en", transsource: "nl" },
        language: { language: "nl", services: "nl" }
      },
      "nl-BE": {
        speechoptions: { voice: "Claire", continousreading: !0, speakoneachword: !1, speakoneachsentence: !1, speed: 50 },
        translator: { translang: "en", transsource: "nl" },
        language: { language: "nl", services: "nl" }
      },
      "es-419": {
        speechoptions: { voice: "Paulina", continousreading: !0, speakoneachword: !1, speakoneachsentence: !1, speed: 50 },
        translator: { translang: "en", transsource: "us" },
        language: { language: "es", services: "es" }
      }
    };
  const Tl = [
      {
        name: "Tagalog",
        Gender: "Female",
        language: "ms",
        description: "Tagalog Female Amelia",
        glang: "ms",
        vendor: "Google",
        SupportedEngines: ["standard"]
      },
      {
        name: "Tarik",
        Gender: "Male",
        language: "ar",
        description: "Arabic Male Tarik",
        glang: "ar",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Miren",
        Gender: "Female",
        language: "eu-es",
        description: "Basque Female Miren",
        glang: "eu",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Montserrat",
        Gender: "Female",
        language: "ca-es",
        description: "Catalan Female Montserrat",
        glang: "ca",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Tian-Tian",
        Gender: "Female",
        language: "zh-cn",
        description: "Chinese (Mandarin - Simplified) Female Tian-Tian",
        glang: "zh_cn",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Mei-Jia",
        Gender: "Female",
        language: "zh-tw",
        description: "Chinese (Mandarin - Traditional - Taiwanese) Female Mei-Jia",
        glang: "zh_tw",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Zuzana",
        Gender: "Female",
        language: "cs-cz",
        description: "Czech Female Zuzana",
        glang: "cs",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Sara",
        Gender: "Female",
        language: "da-dk",
        description: "Danish Female Sara",
        glang: "da-dk",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Magnus",
        Gender: "Male",
        language: "da-dk",
        description: "Danish Male Magnus",
        glang: "da-dk",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Ellen",
        Gender: "Female",
        language: "nl-be",
        description: "Dutch (Belgium and Flemish) Female Ellen",
        glang: "nl",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Claire",
        Gender: "Female",
        language: "nl-nl",
        description: "Dutch (Netherlands) Female Claire",
        glang: "nl",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Xander",
        Gender: "Male",
        language: "nl-nl",
        description: "Dutch (Netherlands) Male Xander",
        glang: "nl",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Karen",
        Gender: "Female",
        language: "en-au",
        description: "English (Australian) Female Karen",
        glang: "en",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Lee",
        Gender: "Male",
        language: "en-au",
        description: "English (Australian) Male Lee",
        glang: "en",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Veena",
        Gender: "Female",
        language: "en-in",
        description: "English (India) Female Veena",
        glang: "en",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Moira",
        Gender: "Female",
        language: "en-ie",
        description: "English (Irish) Female Moira",
        glang: "en",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Fiona",
        Gender: "Female",
        language: "en-sc",
        description: "English (Scottish) Female Fiona",
        glang: "en",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Tessa",
        Gender: "Female",
        language: "en-za",
        description: "English (South African) Female Tessa",
        glang: "en",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Daniel",
        Gender: "Male",
        language: "en-gb",
        description: "English (UK) Male Daniel",
        glang: "en",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Serena",
        Gender: "Female",
        language: "en-gb",
        description: "English (UK) Female Serena",
        glang: "en",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Allison",
        Gender: "Female",
        language: "en-us",
        description: "English (US) Female Allison",
        glang: "en",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Ava",
        Gender: "Female",
        language: "en-us",
        description: "English (US) Female Ava",
        glang: "en",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Tom",
        Gender: "Male",
        language: "en-us",
        description: "English (US) Male Tom",
        glang: "en",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Samantha",
        Gender: "Female",
        language: "en-us",
        description: "English (US) Female Samantha",
        glang: "en",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Satu",
        Gender: "Female",
        language: "fi-fi",
        description: "Finnish Female Satu",
        glang: "fi",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Amelie",
        Gender: "Female",
        language: "fr-ca",
        description: "French (Canadian) Female Amelie",
        glang: "fr",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Audrey",
        Gender: "Female",
        language: "fr",
        description: "French Female Audrey",
        glang: "fr",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Thomas",
        Gender: "Male",
        language: "fr",
        description: "French Male Thomas",
        glang: "fr",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Carmela",
        Gender: "Female",
        language: "gl-es",
        description: "Galician (Spain) Female Carmela",
        glang: "gl",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Anna",
        Gender: "Female",
        language: "de-de",
        description: "German Female Anna",
        glang: "de",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Yannick",
        Gender: "Male",
        language: "de-de",
        description: "German Male Yannick",
        glang: "de",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Petra",
        Gender: "Female",
        language: "de-de",
        description: "German Female Petra",
        glang: "de",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Melina",
        Gender: "Female",
        language: "el-gr",
        description: "Greek Female Melina",
        glang: "el",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Nikos",
        Gender: "Male",
        language: "el-gr",
        description: "Greek Male Nikos",
        glang: "el",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Lekha",
        Gender: "Female",
        language: "hi-in",
        description: "Hindi Female Lekha",
        glang: "hi",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Mariska",
        Gender: "Female",
        language: "hu-hu",
        description: "Hungarian Female Mariska",
        glang: "hu",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Damayanti",
        Gender: "Female",
        language: "id-id",
        description: "Indonesian (Bahasa) Female Damayanti",
        glang: "id",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Alice",
        Gender: "Female",
        language: "it-it",
        description: "Italian Female Alice",
        glang: "it",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Federica",
        Gender: "Female",
        language: "it-it",
        description: "Italian Female Federica",
        glang: "it",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Luca",
        Gender: "Male",
        language: "it-it",
        description: "Italian Male Luca",
        glang: "it",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Paola",
        Gender: "Female",
        language: "it-it",
        description: "Italian Female Paola",
        glang: "it",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Ichiro",
        Gender: "Male",
        language: "ja-jp",
        description: "Japanese Male Ichiro",
        glang: "ja",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Sakura",
        Gender: "Female",
        language: "ja-jp",
        description: "Japanese Female Sakura",
        glang: "ja",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Sora",
        Gender: "Female",
        language: "ko-kr",
        description: "Korean Female Sora",
        glang: "ko",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Nora",
        Gender: "Female",
        language: "no-no",
        description: "Norwegian Female Nora",
        glang: "no",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Henrik",
        Gender: "Male",
        language: "no-no",
        description: "Norwegian Male Henrik",
        glang: "no",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Ewa",
        Gender: "Female",
        language: "pl-pl",
        description: "Polish Female Ewa",
        glang: "pl",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Zosia",
        Gender: "Female",
        language: "pl-pl",
        description: "Polish Female Zosia",
        glang: "pl",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Luciana",
        Gender: "Female",
        language: "pt-br",
        description: "Portuguese (Brazilian) Female Luciana",
        glang: "pt",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Felipe",
        Gender: "Male",
        language: "pt-br",
        description: "Portuguese (Brazilian) Male Felipe",
        glang: "pt",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Joana",
        Gender: "Female",
        language: "pt-pt",
        description: "Portuguese Female Joana",
        glang: "pt",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Catarina",
        Gender: "Female",
        language: "pt-pt",
        description: "Portuguese Female Catarina",
        glang: "pt",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Ioana",
        Gender: "Female",
        language: "ro-ro",
        description: "Romanian Female Ioana",
        glang: "ro",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Milena",
        Gender: "Female",
        language: "ru-ru",
        description: "Russian Female Milena",
        glang: "ru",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Yuri",
        Gender: "Male",
        language: "ru-ru",
        description: "Russian Male Yuri",
        glang: "ru",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Laura",
        Gender: "Female",
        language: "sk-sk",
        description: "Slovakian Female Laura",
        glang: "sk",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Carlos",
        Gender: "Male",
        language: "es-co",
        description: "Spanish (Columbian) Male Carlos",
        glang: "es",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Soledad",
        Gender: "Female",
        language: "es-co",
        description: "Spanish (Columbian) Female Soledad",
        glang: "es",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Paulina",
        Gender: "Female",
        language: "es-mx",
        description: "Spanish (Mexican) Female Paulina",
        glang: "es",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Juan",
        Gender: "Male",
        language: "es-mx",
        description: "Spanish (Mexican) Male Juan",
        glang: "es",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Jorge",
        Gender: "Male",
        language: "es-es",
        description: "Spanish (Castilian) Male Jorge",
        glang: "es",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Monica",
        Gender: "Female",
        language: "es-es",
        description: "Spanish (Castilian) Female Monica",
        glang: "es",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Alva",
        Gender: "Female",
        language: "sv-se",
        description: "Swedish Female Alva",
        glang: "sv",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Oskar",
        Gender: "Male",
        language: "sv-se",
        description: "Swedish Male Oskar",
        glang: "sv",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Kanya",
        Gender: "Female",
        language: "th-th",
        description: "Thai Female Kanya",
        glang: "th",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Cem",
        Gender: "Male",
        language: "tr-tr",
        description: "Turkish Male Cem",
        glang: "tr",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Yelda",
        Gender: "Female",
        language: "tr-tr",
        description: "Turkish Female Yelda",
        glang: "tr",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Dariush",
        Gender: "Male",
        language: "fa-ir",
        glang: "fa",
        description: "Farsi Male Dariush",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Carmit",
        Gender: "Female",
        language: "he-il",
        glang: "he",
        description: "Hebrew Female Carmit",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Lesya",
        Gender: "Female",
        language: "uk-ua",
        glang: "uk",
        description: "Ukrainian Female Lesya",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Jordi",
        Gender: "Male",
        language: "ca-es",
        glang: "ca",
        description: "Catalan Male Jordi",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Lana",
        Gender: "Female",
        language: "hr-hr",
        description: "Croatian Female Lana",
        glang: "hr-hr",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Sinji_Ml",
        Gender: "Female",
        language: "yue-hk",
        description: "Cantonese Female Sinji",
        glang: "yue-hk",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      },
      {
        name: "Daria",
        Gender: "Female",
        language: "bg-bg",
        description: "Bulgarian Female Daria",
        glang: "bg-bg",
        vendor: "Nuance",
        SupportedEngines: ["standard"]
      }
    ],
    Il = [
      {
        name: "Geraint",
        Gender: "Male",
        language: "en-gb-wls",
        description: "Welsh English Male Geraint",
        glang: "en",
        vendor: "Polly",
        SupportedEngines: ["standard"]
      },
      {
        name: "Gwyneth",
        Gender: "Female",
        language: "cy-gb",
        description: "Welsh Female Gwyneth",
        glang: "cy",
        vendor: "Polly",
        SupportedEngines: ["standard"]
      },
      {
        name: "Karl",
        Gender: "Male",
        language: "is-is",
        description: "Icelandic Male Karl",
        glang: "is",
        vendor: "Polly",
        SupportedEngines: ["standard"]
      },
      {
        name: "Dora",
        Gender: "Female",
        language: "is-is",
        description: "Icelandic Female Dóra",
        glang: "is",
        vendor: "Polly",
        SupportedEngines: ["standard"]
      }
    ],
    Cl = [
      {
        name: "Ceitidh",
        Gender: "Female",
        language: "gd",
        glang: "gd",
        description: "Gaelic (Scottish) Female Ceitidh",
        vendor: "Cereproc",
        SupportedEngines: ["standard"]
      },
      {
        name: "Peig",
        Gender: "Female",
        language: "ga",
        glang: "ga",
        description: "Irish Female Peig",
        vendor: "Cereproc",
        SupportedEngines: ["standard"]
      },
      {
        name: "Heather",
        Gender: "Female",
        language: "en-sc",
        description: "English (Scottish) Female Heather",
        glang: "en",
        vendor: "Cereproc",
        SupportedEngines: ["standard"]
      },
      {
        name: "Stuart",
        Gender: "Male",
        language: "en-sc",
        description: "English (Scottish) Male Stuart",
        glang: "en",
        vendor: "Cereproc",
        SupportedEngines: ["standard"]
      },
      {
        name: "Andrew",
        Gender: "Male",
        language: "en-sc",
        description: "English (Scottish) Male Andrew",
        glang: "en",
        vendor: "Cereproc",
        SupportedEngines: ["standard"]
      }
    ],
    Rl = [
      {
        name: "Aine",
        Gender: "Female",
        language: "ga",
        glang: "ga",
        description: "Irish (Ulster) female Áine - beta",
        vendor: "Trinity College Dublin",
        SupportedEngines: ["standard"]
      },
      {
        name: "t_Anna",
        Gender: "Female",
        language: "ga",
        glang: "ga",
        description: "Irish (Connemara) female Anna - beta",
        vendor: "Trinity College Dublin",
        SupportedEngines: ["standard"]
      },
      {
        name: "Caitlin",
        Gender: "Female",
        language: "ga",
        glang: "ga",
        description: "Irish (Munster) female Caitlin - beta",
        vendor: "Trinity College Dublin",
        SupportedEngines: ["standard"]
      },
      {
        name: "Macdara",
        Gender: "Male",
        language: "ga",
        glang: "ga",
        description: "Irish (Connemara) male Macdara - beta",
        vendor: "Trinity College Dublin",
        SupportedEngines: ["standard"]
      }
    ];
  class kl {
    constructor(e, t, n) {
      (this.voiceByName = {}), (this.voicesByGenderLang = { Male: {}, Female: {} }), (this.voicesByLang = {}), this.createVoiceMap(e, t, n);
    }
    createVoiceMap(e, t, n, r) {
      let i = [...Tl];
      e && i.push(...Il), t && i.push(...Cl), n && i.push(...Rl);
      for (let e = 0; e < i.length; e++)
        (this.voiceByName[i[e].name] = i[e]),
          (null != this.voicesByGenderLang[i[e].Gender] && void 0 !== this.voicesByGenderLang[i[e].Gender]) ||
            (this.voicesByGenderLang[i[e].Gender] = {}),
          (null != this.voicesByGenderLang[i[e].Gender][i[e].language] && void 0 !== this.voicesByGenderLang[i[e].Gender][i[e].language]) ||
            (this.voicesByGenderLang[i[e].Gender][i[e].language] = []),
          this.voicesByGenderLang[i[e].Gender][i[e].language].push(i[e]);
    }
    getVoiceByGenderAndLang(e, t) {
      return this.voicesByGenderLang[e][t];
    }
    getVoiceByName(e) {
      return this.voiceByName[e];
    }
    getVoices(e = !1, t = !1, n = !1) {
      let r = [...Tl];
      return e && r.push(...Il), t && r.push(...Cl), n && r.push(...Rl), r;
    }
  }
  class Nl {
    constructor(e = "Ava?", t = "50") {
      (this.AUDIOMAKERSETTINGS = { USER: "rwforgdocs4", SERVICEURL: "https://texthelpspeech.speechstream.net", SERVICEPATH: "Mp3Maker" }),
        Object.freeze(this.CHECKITSETTINGS),
        this._mp3Path,
        this._filename,
        (this._speed = t);
      const n = new kl().getVoices(!0, !0, !0);
      if (
        ((this._voice = this._validateVoice(e)),
        !(
          n.filter((t) => {
            if (t.name === e) return !0;
          }).length > 0
        ))
      ) {
        let e = ec.state.language.language.replace(/_/g, "-"),
          t = Al[e];
        void 0 === t && (t = Al["en-US"]), t.speechoptions.voice ? (this._voice = t.speechoptions.voice) : (this._voice = "Ava?");
      }
      (this._baseURL =
        this._calculatePath(this.AUDIOMAKERSETTINGS.SERVICEURL, this.AUDIOMAKERSETTINGS.SERVICEPATH) +
        "?userName=" +
        this.AUDIOMAKERSETTINGS.USER +
        "&voiceName=" +
        this._voice +
        "&speedValue=" +
        t),
        (this._events = new Nr()),
        this._events.initialise(),
        (this._source = null);
    }
    async convert(e, t, n) {
      var r = this;
      const i = this._baseURL;
      (this._filename = e), (this._source = n);
      let a = await this.requestMP3(i, e, t);
      const s = a.statusFileLocation;
      "" != s &&
        ((this._mp3Path = a.mp3Location),
        setTimeout(async function () {
          try {
            await r._statusChecker(s);
          } catch (e) {}
        }, 1e3));
    }
    _validateVoice(e) {
      return (
        "%3F" == e.slice(e.length - 3) ? (e = decodeURIComponent(e)) : decodeURIComponent(e) === e && (e = encodeURIComponent(e)),
        "%3F" == e.slice(e.length - 3) ? (e = decodeURIComponent(e)) : decodeURIComponent(e) === e && (e = encodeURIComponent(e)),
        e
      );
    }
    _getServerVoice() {}
    _calculatePath(e, t) {
      try {
        "/" != e.charAt(e.length - 1) && (e += "/"), "/" != t.charAt(t.length - 1) && (t += "/");
      } catch (e) {}
      return e + t;
    }
    async requestMP3(e, t, n) {
      let r = `filename=${t}&text=${(n = encodeURIComponent(n))}`;
      try {
        let t = await fetch(e, {
          headers: { "content-type": "application/x-www-form-urlencoded; charset=UTF-8" },
          body: r,
          method: "POST",
          mode: "cors",
          credentials: "include"
        });
        return await t.json();
      } catch (e) {
        console.log(e);
      }
    }
    async _statusChecker(e) {
      var t = this,
        n = await this._requestStatusFile(e);
      try {
        100 == n
          ? this._events.dispatchStorageEvent(
              "th-gotaudiofile",
              Cr,
              { type: "th-gotaudiofile", file: this._mp3Path },
              this._source.sessionId,
              this._source.frameId
            )
          : setTimeout(async function () {
              try {
                await t._statusChecker(e);
              } catch (e) {}
            }, 1e3);
      } catch (e) {}
    }
    async _requestStatusFile(e) {
      try {
        const t = await fetch(e, { method: "GET", mode: "cors" }),
          n = await t.json();
        if (null == n);
        else {
          if ("" == n.error || " " == n.error)
            return (
              this._events.dispatchStorageEvent(
                "th-audioprogress",
                Cr,
                { type: "th-audioprogress", value: n.progress },
                this._source.sessionId,
                this._source.frameId
              ),
              n.progress
            );
          console.log(n.error);
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
  class Pl {
    static CallSimplifyService(e = !1, t, n, r, i, a, s) {
      return new Promise((o) => {
        let c = "https://rw4gc-simplify.texthelp.com/";
        e && (c = "https://rw4gc-simplify.dev.texthelp.com/");
        const u = Pl._userDataFromLicense(a);
        chrome.tabs.create({ url: c, active: !0 }, async function (e) {
          const a = () => {
            self.setTimeout(() => {
              chrome.tabs.sendMessage(
                e.id,
                { type: "th-injectsimplify", text: n, url: r, lang: i, userInfo: u, title: t, feature: s },
                { frameId: 0 },
                (e) => {
                  void 0 === e || 0 !== e.indexOf("finished") ? a() : o();
                }
              );
            }, 5e3);
          };
          a();
        });
      });
    }
    static _userDataFromLicense(e) {
      try {
        if (void 0 === e.user) throw new Error("Field: user");
        if (void 0 === e.trial) throw new Error("Field: trial");
        if ((void 0 === e.unlimited && (e.unlimited = !1), void 0 === e.daysleft)) throw new Error("Field: daysleft");
        let t = e.user.split("@")[0].replace("%", ""),
          n = e.user.substring(t.length + 1);
        return { user: e.user, emailDomain: n, trial: e.trial, unlimited: e.unlimited, daysleft: e.daysleft };
      } catch (e) {
        throw new Error("Error getting the correct license fields: " + e.message);
      }
    }
  }
  var Ll = (e, t, n) => {
    const r = { html: e.text.replace(/(?:\f\n|\f|\n)/g, "<br>"), documentTitle: e.title, loginType: t.loginType, url: n };
    chrome.tabs.create({ url: "https://pra.texthelp.com/" }, (e) => {
      const t = { command: "th-practicereadingaloud", data: r },
        n = (r, i) => {
          r === e.id && "complete" === i.status && (chrome.tabs.onUpdated.removeListener(n), chrome.tabs.sendMessage(r, t));
        };
      chrome.tabs.onUpdated.addListener(n), chrome.tabs.sendMessage(e.id, t);
    });
  };
  class Dl {
    constructor() {
      (this.onAnalyticsViewEvent = (e) => {
        try {
          let t = e.detail.parserName,
            n = Hr.stateJSON,
            r = { screenName: this.setScreenName(t.toLowerCase()), userId: n.license.user.toLowerCase() };
          this._analytics.sendAppView(r);
        } catch (e) {}
      }),
        (this.onAnalyticsEvent = (e) => {
          try {
            let t = [],
              n = Hr.stateJSON,
              r = this._analytics.hashEmail(n.license.meta.user.toLowerCase()),
              i = "",
              a = e.detail.parameters.customParams;
            if (void 0 !== a) {
              if (void 0 !== a.docId) {
                let e = this._analytics.hash({ stringToHash: a.docId });
                t.push({ t: "d", i: "1", value: e });
              }
              t.push({ t: "d", i: "2", value: n.license.licensetype }),
                t.push({ t: "d", i: "3", value: n.license.licensesubscription }),
                t.push({ t: "d", i: "16", value: n.license.guid }),
                void 0 !== a.voice && t.push({ t: "d", i: "4", value: a.voice }),
                void 0 !== a.onLine && t.push({ t: "d", i: "5", value: a.onLine }),
                void 0 !== a.hostName && ((i = a.hostName), t.push({ t: "d", i: "6", value: i })),
                void 0 !== a.language && t.push({ t: "d", i: "7", value: a.language }),
                void 0 !== a.ruleId && t.push({ t: "d", i: "8", value: a.ruleId }),
                void 0 !== a.toReplace && t.push({ t: "d", i: "9", value: a.toReplace }),
                void 0 !== a.replacedWith && t.push({ t: "d", i: "10", value: a.replacedWith }),
                void 0 !== a.suggestions && Array.isArray(a.suggestions) && t.push({ t: "d", i: "11", value: a.suggestions.join(", ") }),
                void 0 !== a.textLength && t.push({ t: "m", i: "1", value: a.textLength }),
                void 0 !== a.responseTime && t.push({ t: "m", i: "2", value: a.responseTime }),
                void 0 !== a.speed && t.push({ t: "m", i: "3", value: parseInt(a.speed) }),
                void 0 !== a.numWords && t.push({ t: "m", i: "4", value: a.numWords });
              let e = parseInt(this._analytics._getVersion().replace(/\./g, ""));
              t.push({ t: "m", i: "5", value: e }), t.push({ t: "d", i: "12", value: this._analytics.getUTCTimeStamp().toString() });
            }
            let s = {
              eventCategory: e.detail.parameters.eventCategory,
              eventAction: r.deIdentifiedEmail,
              eventLabel: r.emailDomain,
              eventValue: -1,
              userId: r.deIdentifiedEmail,
              screenName: this.setScreenName(e.detail.parameters.customParams.screenName.toLowerCase()),
              hostName: i,
              customAttributes: t
            };
            this._analytics.sendEvent(s);
          } catch (e) {}
        }),
        (this.applicationName = "RW4GC"),
        (this.analyticsTrackingCode = "UA-83720712-1"),
        (this._analytics = new o({ applicationName: this.applicationName, analyticsTrackingCode: this.analyticsTrackingCode }));
    }
    setScreenName(e) {
      switch (e) {
        case "gdocsparser":
        case "gdocsonlyparser":
          return "google docs";
        case "htmlparser":
          return "web";
        case "googleslidesparser":
          return "google slides";
        case "googleformsparser":
          return "google forms";
        case "mswordonlineparser":
        case "mswordonlineonlyparser":
          return "microsoft word online";
        default:
          return e.toLowerCase();
      }
    }
  }
  let Ul = -1;
  const xl = () => {
      chrome.runtime.onMessage.addListener(async (e, t) => {
        if (t.id === chrome.runtime.id && e.command)
          switch (e.command.toLowerCase()) {
            case "thswmslogoutactive":
              Ul = parseInt(e.active);
              break;
            case "thswclosemslogout":
              jl({ url: ["https://thzbf.texthelp.com/*"] }).then((e) => {
                e.length > 0 && chrome.tabs.remove(e[0].id);
              }),
                -1 === Ul || isNaN(Ul) || chrome.tabs.update(Ul, { active: !0 });
          }
      });
    },
    jl = (e) =>
      new Promise((t) => {
        chrome.tabs.query(e, (e) => {
          t(e);
        });
      });
  function Ml() {
    return (
      (Ml = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      Ml.apply(this, arguments)
    );
  }
  class Yl {
    upload(e, t, n, r, i, a) {
      throw Error("missing function upload");
    }
  }
  var Gl = async (e, t, n = "GET", r = {}, i = {}) =>
      await fetch(
        e,
        Ml({ method: n, headers: new Headers(Ml({ "Content-Type": "application/json", Authorization: `Bearer ${t}` }, i)) }, r)
      ),
    Fl = async (e, t) => {
      const n = await fetch(`https://www.googleapis.com/drive/v3/files/${t}?fields=trashed`, {
          method: "GET",
          headers: { Authorization: `Bearer ${e}` }
        }),
        { trashed: r } = await n.json();
      if (!0 === r) return !1;
      if (n.ok) return !0;
      if (404 === n.status) return !1;
      throw new Error(`Failed to check if file exists. Status code: ${n.status}`);
    };
  const Bl = "uploadFileConfig.json",
    Vl = async (e) => {
      const t = `https://content.googleapis.com/drive/v3/files?${encodeURI(
          `q=name='${Bl}'&spaces=appDataFolder&fields=files/id,files/description,files/trashed`
        )}`,
        n = await fetch(t, { method: "GET", headers: { Authorization: `Bearer ${e}`, "Content-Type": "application/json" } });
      return await n.json();
    };
  var Kl = async (e) => {
      const t = { name: Bl, parents: ["appDataFolder"] },
        n = await fetch("https://www.googleapis.com/drive/v3/files", {
          method: "POST",
          headers: { Authorization: `Bearer ${e}`, "Content-Type": "application/json" },
          body: JSON.stringify(t)
        }),
        r = (await n.json()).id,
        i = await fetch(`https://www.googleapis.com/upload/drive/v3/files/${r}?uploadType=media`, {
          method: "PATCH",
          headers: { Authorization: `Bearer ${e}`, "Content-Type": "application/json" },
          body: JSON.stringify({})
        });
      return await i.json();
    },
    Wl = Vl,
    Hl = async (e, t) => {
      const n = `https://www.googleapis.com/drive/v3/files/${t}?alt=media`,
        r = await Gl(n, e),
        i = await r.text();
      return "" === i ? {} : JSON.parse(i);
    },
    zl = async (e, t, n) => {
      const r = await fetch(`https://www.googleapis.com/drive/v3/files/${t}`, {
          method: "GET",
          headers: { Authorization: `Bearer ${e}`, "Content-Type": "application/json" }
        }),
        i = await r.json(),
        { etag: a } = i,
        s = await fetch(`https://www.googleapis.com/upload/drive/v3/files/${t}?uploadType=media`, {
          method: "PATCH",
          headers: { Authorization: `Bearer ${e}`, "Content-Type": "application/json", "If-Match": a },
          body: JSON.stringify(n)
        });
      return await s.json();
    };
  var ql = async (e, t, n) => {
    const r = { name: t, mimeType: "application/vnd.google-apps.folder" };
    n && (r.parents = [n]);
    const i = await fetch("https://www.googleapis.com/drive/v3/files", {
      method: "POST",
      headers: { Authorization: `Bearer ${e}`, "Content-Type": "application/json" },
      body: JSON.stringify(r)
    });
    return (await i.json()).id;
  };
  var Jl = async (e, t, n, r) => {
      const i = { name: t, parents: [r] },
        a = new FormData();
      a.append("metadata", new Blob([JSON.stringify(i)], { type: "application/json" })), a.append("file", e, t);
      const s = { method: "POST", headers: { Authorization: `Bearer ${n}` }, body: a },
        o = await fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart", s),
        c = await o.json();
      return o.ok ? { fileId: c.id } : { fileId: null, error: c };
    },
    $l = async (e, t) => {
      const n = `https://content.googleapis.com/drive/v3/files/${t}?fields=appProperties`,
        r = await fetch(n, { method: "GET", headers: { "Content-Type": "application/json", Authorization: `Bearer ${e}` } });
      if (!r.ok) throw new Error(r.statusText);
      if (404 === r.status) return null;
      return await r.json();
    },
    Xl = async (e, t, n) => {
      const r = `https://content.googleapis.com/drive/v3/files/${t}`,
        i = await fetch(r, {
          method: "PATCH",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${e}` },
          body: JSON.stringify(n)
        });
      if (!i.ok) throw new Error(i.statusText);
      return await i.json();
    },
    Ql = async (e, t) => {
      const n = `https://www.googleapis.com/drive/v3/files/${t}?fields=name`,
        r = await fetch(n, { method: "GET", headers: { Authorization: `Bearer ${e}` } });
      if (!r.ok) throw new Error(r.statusText);
      return (await r.json()).name;
    },
    Zl = async (e, t, n) => {
      const r = `https://content.googleapis.com/drive/v3/files/${t}/permissions?fields=*&alt=json`,
        i = await fetch(r, Ml({ method: "POST", headers: { Authorization: `Bearer ${n}` } }, e));
      if (!i.ok) {
        const e = await i.json();
        throw new Error(e);
      }
    };
  class ed extends Yl {
    async getConfigData(e) {
      const t = await Wl(e);
      let n;
      if (t.files.length < 1) {
        n = (await Kl(e)).id;
      } else n = t.files[0].id;
      return { configJson: await Hl(e, n), configId: n };
    }
    async createFolderStructure(e, t, n, r = null) {
      const { configJson: i, configId: a } = await this.getConfigData(n);
      let s;
      i[e] && i[e].rootId && (s = i[e].rootId);
      let o,
        c = !1;
      if (s) {
        (await Fl(n, s)) || ((s = await ql(n, e)), (i[e].rootId = s), (c = !0));
      } else (s = await ql(n, e)), (i[e] = { rootId: s }), (c = !0);
      if (((o = i[e][t]), o)) {
        (await Fl(n, o)) || ((o = await ql(n, t, s)), (i[e][t] = o), (c = !0));
      } else (o = await ql(n, t, s)), (i[e][t] = o), (c = !0);
      if ((c && (await zl(n, a, i)), r)) {
        let e = !1;
        const i = await $l(n, r),
          a = await Ql(n, r);
        if (i && void 0 === i.appProperties) {
          const r = await ql(n, a, o);
          (i.appProperties = {}), (i.appProperties[t] = r), (e = !0);
        } else if (i && i.appProperties && i.appProperties[t]) {
          if (!(await Fl(n, i.appProperties[t]))) {
            const r = await ql(n, a, o);
            (i.appProperties[t] = r), (e = !0);
          }
          o = i.appProperties[t];
        } else if (i && i.appProperties && !i.appProperties[t]) {
          const r = await ql(n, a, o);
          (i.appProperties[t] = r), (e = !0);
        }
        e && (await Xl(n, r, i)), (o = i.appProperties[t]);
      }
      return o;
    }
    async upload(e, t, n, r, i, a = null, s = null) {
      const o = await this.createFolderStructure(n, r, i, a),
        c = await Jl(e, t, i, o);
      return null !== s && (await Zl(s, c.fileId, i)), c;
    }
  }
  var td = async (e, t) => {
      const n = { exists: null, id: null },
        r = await fetch(`https://graph.microsoft.com/v1.0/me/drive/root:${e}`, {
          method: "GET",
          headers: { Authorization: `Bearer ${t}` }
        });
      if (r.ok) {
        const e = await r.json();
        (n.exists = !0), (n.id = e.id);
      } else {
        if (404 !== r.status) throw new Error(`Error checking for folder. status: ${r.status}, statusText: ${r.statusText}`);
        n.exists = !1;
      }
      return n;
    },
    nd = async (e, t, n, r = "root") => {
      const i = await fetch(`https://graph.microsoft.com/v1.0/drives/${t}/items/${r}/children`, {
        method: "POST",
        headers: { Authorization: `Bearer ${e}`, "Content-Type": "application/json" },
        body: JSON.stringify({ name: n, folder: {} })
      });
      if (i.ok) {
        return (await i.json()).id;
      }
      return null;
    };
  var rd = async (e) => {
      const t = await fetch("https://graph.microsoft.com/v1.0/me/drive", { method: "GET", headers: { Authorization: `Bearer ${e}` } });
      if (t.ok) {
        return (await t.json()).id;
      }
      return null;
    },
    id = async (e, t, n, r, i) => {
      const a = i.type,
        s = new Date()
          .toLocaleString("en-US", {
            day: "2-digit",
            month: "2-digit",
            year: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
          })
          .replace(/:/g, "-")
          .replace(/\//g, "-")
          .replace(", ", "-"),
        o = `${r.slice(0, 30)}${s.replace(" PM", "").replace(" AM", "")}.ogg`,
        c = await fetch(`https://graph.microsoft.com/v1.0/drives/${t}/items/${n}:/${o}:/content`, {
          method: "PUT",
          headers: { Authorization: `Bearer ${e}`, "Content-Type": a },
          body: i
        }),
        u = await c.json();
      return c.ok ? { fileId: u.id } : { fileId: null, error: u };
    };
  class ad extends Yl {
    async upload(e, t, n, r, i, a = null) {
      const s = await rd(i);
      if (null === s) throw new Error("Can't get driveid");
      const o = await this.createFolderStructure(n, r, i, s);
      return Ml({}, await id(i, s, o, encodeURI(t), e), { driveId: s });
    }
    async createFolderStructure(e, t, n, r = null) {
      let i, a;
      if (null === r) {
        if (((i = await rd(n)), null === i)) throw new Error("Can't get driveid");
      } else i = r;
      const s = await td(`/${e}`, n);
      if (((a = s.exists ? s.id : await nd(n, i, e)), null === a)) throw new Error("Error while creating the root folder");
      let o;
      const c = await td(`/${e}/${t}`, n);
      if (((o = c.exists ? c.id : await nd(n, i, t, a)), null === o)) throw new Error("Error while creating the feature folder");
      return o;
    }
  }
  var sd = (e) => {
    let t = null;
    switch (e) {
      case "googledrive":
        t = new ed();
        break;
      case "msonedrive":
        t = new ad();
    }
    return t;
  };
  var od = async (e, t, n, r, i, a = null, s = "googledrive", o = null) => {
    try {
      const c = sd(s);
      return await c.upload(e, t, n, r, i, a, o);
    } catch (e) {
      return { fileId: null, error: e };
    }
  };
  function cd(e, t, n, r, i, a, s) {
    try {
      var o = e[a](s),
        c = o.value;
    } catch (e) {
      return void n(e);
    }
    o.done ? t(c) : Promise.resolve(c).then(r, i);
  }
  var ud = (function () {
      var e,
        t =
          ((e = function* (e, t, n, r) {
            var i = new Blob(
                [
                  ((e) => {
                    var t,
                      n,
                      r,
                      i,
                      a,
                      s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                      o = 0.75 * e.length,
                      c = e.length,
                      u = 0;
                    "=" === e[e.length - 1] && (o--, "=" === e[e.length - 2] && o--);
                    var l = new ArrayBuffer(o),
                      d = new Uint8Array(l);
                    for (t = 0; t < c; t += 4)
                      (n = s.indexOf(e[t])),
                        (r = s.indexOf(e[t + 1])),
                        (i = s.indexOf(e[t + 2])),
                        (a = s.indexOf(e[t + 3])),
                        (d[u++] = (n << 2) | (r >> 4)),
                        (d[u++] = ((15 & r) << 4) | (i >> 2)),
                        (d[u++] = ((3 & i) << 6) | (63 & a));
                    return l;
                  })(e)
                ],
                { type: "audio/ogg; codecs=opus" }
              ),
              a = { body: JSON.stringify({ role: "writer", type: "anyone", allowFileDiscovery: !1 }) };
            return yield od(i, "".concat(t, ".ogg"), "Texthelp", "Voicenote", r, null, "googledrive", a);
          }),
          function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, i) {
              var a = e.apply(t, n);
              function s(e) {
                cd(a, r, i, s, o, "next", e);
              }
              function o(e) {
                cd(a, r, i, s, o, "throw", e);
              }
              s(void 0);
            });
          });
      return function (e, n, r, i) {
        return t.apply(this, arguments);
      };
    })(),
    ld = Object.freeze([
      "https://www.googleapis.com/auth/drive.apps.readonly",
      "https://www.googleapis.com/auth/drive.appdata",
      "https://www.googleapis.com/auth/drive.appfolder",
      "https://www.googleapis.com/auth/drive.file"
    ]);
  const dd = (e) => {
      const t = new Nr();
      t.initialise(), t.dispatchStorageEvent("th-market-choice", Ir, { market: e });
    },
    hd = async (e, t) => {
      if ("admin" !== e) gd();
      else {
        let e = await (async () =>
          new Promise((e) => {
            chrome.storage.managed.get("market", (t) => {
              let n = "education";
              Object.keys(t).length > 0
                ? (n = t.market)
                : Hr.state.license && Hr.state.license.market && (n = Hr.state.license.market.toLowerCase()),
                e(n);
            });
          }))();
        dd(e);
      }
    };
  let pd;
  const gd = (e) => {
    if (void 0 !== pd) return void chrome.windows.update(pd, { focused: !0 });
    let t = { url: "onboarding/onboarding.html", type: "popup", focused: !0, state: "maximized" };
    navigator.platform.toUpperCase().indexOf("MAC") >= 0 && (t = { url: "onboarding/onboarding.html", type: "popup", focused: !0 }),
      chrome.windows.create(t, (e) => {
        pd = e.id;
        let t = chrome.windows.onRemoved.addListener(
          async (n) => {
            n === e.id && ((pd = void 0), chrome.windows.onRemoved.removeListener(t));
          },
          { WindowType: "popup" }
        );
      });
  };
  !(async function () {
    new uc();
    const e = new Kc(),
      i = new Nr(),
      a = new Date();
    self.addEventListener("fetch", async (e) => {
      "GET" === e.request.method &&
        e.respondWith(
          (async () => {
            const t = await fetch(e.request),
              n = await t.blob(),
              r = new Headers(t.headers);
            r.set("content-security-policy", "script-src 'self' 'wasm-unsafe-eval';  object-src 'none'"),
              r.set("X-Version", `2022-05-05.01 / ${a.toISOString()}`);
            return new Response(n, { status: t.status, statusText: t.statusText, headers: r });
          })()
        );
    }),
      chrome.runtime.onMessage.addListener(async (e, t, n) => {
        if (t.id === chrome.runtime.id)
          return e.thtype && "mathjax" === e.thtype
            ? new Promise((n, r) => {
                let i = e.url,
                  a = {
                    target: { tabId: t.tab.id, frameIds: [t.frameId] },
                    files: [i.replace(`chrome-extension://${chrome.runtime.id}/`, "")]
                  };
                chrome.scripting.executeScript(a, (e) => {
                  n();
                });
              })
            : void 0;
      }),
      i.initialise();
    const s = new Dl();
    await Promise.all([Hr.initialise(), zr.initialise(), qr.initialise(), Jr.initialise(), ec.initialise(), Qo.initialise()]);
    const o = (e) =>
        new Promise((t) => {
          chrome.storage.sync.get(e, (e) => {
            t(e);
          });
        }),
      c = (e) =>
        new Promise((t) => {
          chrome.tabs.query(e, (e) => {
            t(e);
          });
        });
    chrome.action.onClicked.addListener(async (e) => {
      const t = void 0 === Hr.state.license.user;
      let r = await c({ active: !0, currentWindow: !0 });
      yl(e, t, i);
      const a = await n();
      !1 === a && qr.setOnBoardingFinished(!0);
      const s = await new Promise((e) => {
        chrome.storage.sync.get(["1540g45e-aea9-45de-12o9-a3rrdgthshr3"], (t) => {
          null == t["1540g45e-aea9-45de-12o9-a3rrdgthshr3"] && e(!1),
            null != t["1540g45e-aea9-45de-12o9-a3rrdgthshr3"] &&
            null != t["1540g45e-aea9-45de-12o9-a3rrdgthshr3"].a3rrdgthshr3 &&
            1 == t["1540g45e-aea9-45de-12o9-a3rrdgthshr3"].a3rrdgthshr3
              ? e(!0)
              : e(!1);
        });
      });
      !0 === a && !0 === s && i.dispatchStorageEvent("doOnBoarding", Ir, {}),
        chrome.tabs.sendMessage(r[0].id, { command: "settoolbarVisible", visible: !0 });
    }),
      chrome.runtime.onMessageExternal.addListener((e, t, n) => {
        if ("enfolipbjmnmleonhhebhalojdpcpdoo" === t.id && void 0 !== e.command && "GETSPEECHSETTINGS" === e.command) {
          return n({ voice: decodeURIComponent(ec.stateJSON.speech.voice), speed: ec.stateJSON.speech.speed }), !0;
        }
      }),
      i.addEventListener("addVoiceNote", async (t) => {
        const n = await e.swGetAndValidateAccessToken(ld, r.GOOGLE),
          a = `https://drive.google.com/uc?id=${(await ud(t.detail.audioblob, t.detail.title, t.detail.fileId, n)).fileId}`;
        i.dispatchStorageEvent(
          "onVoiceNoteAdded",
          kr,
          { type: "th-onVoiceNoteAdded", linkToVoiceNote: a },
          t.detail.source.sessionId,
          t.detail.source.frameId
        );
      }),
      chrome.gcm.onMessage.addListener((e) => {
        try {
          if (void 0 !== Hr.stateJSON) {
            ((e, t, n) => {
              let r = ml(e, t, !1);
              r && r.processMessage(n);
            })(Hr.stateJSON.license.licence_type, Hr.stateJSON.user, e);
          }
        } catch (e) {
          console.log(e);
        }
      }),
      chrome.alarms.onAlarm.addListener((e) => {
        if ("MessageExpired" === e.name) i.dispatchStorageEvent("th-datadesk-reset", Rr, { type: "th-datadesk-reset" });
      }),
      chrome.tabs.onActivated.addListener((e) => {
        chrome.tabs.sendMessage(e.tabId, { command: "setFrameActive" });
      });
    i.addEventListener("getLicense", async (t) => {
      if (!rl.licenseCheck || !rl.licenseCheck._license)
        try {
          let s = await cl();
          const o = await al(s, t.detail.productCode),
            c = o.license;
          (Hr.license = c),
            Jr.setLicenseType(c.meta.loginType),
            Jr.setLoginType(c.meta.loginType.toLowerCase()),
            qr.state.driveInstall || ("google" == o.authType && (e.swAuthorizeForDriveInstall(r.GOOGLE), qr.setDriveInstall(!0))),
            ml(c.licence_type, c.user, !0),
            t &&
              t.detail &&
              t.detail.returnevent &&
              i.dispatchStorageEvent(
                t.detail.returnevent,
                kr,
                { type: t.detail.returnevent },
                t.detail.source.sessionId,
                t.detail.source.frameId
              );
          const u = await n();
          await ((a = !0),
          new Promise((e) => {
            chrome.storage.sync.set({ "1540g45e-aea9-45de-12o9-a3rrdgthshr3": { a3rrdgthshr3: a } }, () => {
              e(a);
            });
          })),
            !0 === u && i.dispatchStorageEvent("doOnBoarding", Ir, {});
        } catch (e) {}
      var a;
    }),
      i.addEventListener("th-generateaudio", async (e) => {
        const t = ec.state.speech.voice,
          n = ec.state.speech.speed;
        new Nl(t, n).convert("AudioMaker", e.detail.text, e.detail.source);
      }),
      i.addEventListener("th-datadesk-message", async (e) => {
        zr.features = e.detail.message;
      }),
      i.addEventListener("th-datadesk-reset", async (e) => {
        zr.resetFeatures();
      }),
      i.addEventListener("th-screenshotreader-worker", async (e) => {
        ((e, t) => {
          let n = {};
          const r = "enfolipbjmnmleonhhebhalojdpcpdoo";
          chrome.management.get(r, (i) => {
            chrome.runtime.lastError
              ? chrome.tabs.create({
                  url: "https://chrome.google.com/webstore/detail/screenshot-reader/enfolipbjmnmleonhhebhalojdpcpdoo",
                  active: !0
                })
              : ((n.command = "stopScreenShotReader"),
                chrome.runtime.sendMessage(r, n),
                (n.command = "startScreenShotReader"),
                (n.voice = `${e}?`),
                (n.speed = t),
                (n.speechServerURL = "https://rwforg.speechstream.net/SpeechServices/index.html"),
                (n.user = "rwforgdocs6"),
                chrome.runtime.sendMessage(r, n));
          });
        })(e.detail.voice, e.detail.speed);
      }),
      i.addEventListener("th-practicereadingaloudtab", async (e) => {
        Ll(e.detail.text, e.detail.options, e.detail.url);
      }),
      i.addEventListener("analyticsViewEvent", async (e) => {
        s.onAnalyticsViewEvent(e);
      }),
      i.addEventListener("analyticsEvent", async (e) => {
        s.onAnalyticsEvent(e);
      }),
      i.addEventListener("changeAccount", async (e) => {
        chrome.identity.getProfileUserInfo(async (t) => {
          await new Promise((e) => {
            setTimeout(e, 300);
          });
          const n = navigator.userAgent.includes("Edg");
          let a = !1;
          t.email.length > 0 && (a = !0);
          let s = ol(Jr.state.licenseType),
            o = ol(e.detail.loginType);
          const c = !!e.detail.signout,
            u = n ? r.MICROSOFT : r.GOOGLE;
          if (
            (await new Promise((e) => {
              setTimeout(e, 300);
            }),
            !a && c)
          )
            return (
              await sl(s),
              Hr.resetLicense(),
              Jr.setLicenseType(r.DEFAULT),
              Jr.setLoginType(r.DEFAULT),
              i.dispatchStorageEvent("hideSettings", Ir, { visible: !1 }),
              i.dispatchStorageEvent("settoolbarVisible", Ir, { visible: !1 }),
              void i.dispatchStorageEvent("account-changed", Ir, { login: r.DEFAULT, user: "" })
            );
          if (a && c)
            try {
              const e = await al(u, null, !1, c);
              (Hr.license = e.license),
                Jr.setLicenseType(u),
                Jr.setLoginType(Jr.state.licenseType.toLowerCase()),
                i.dispatchStorageEvent("account-changed", Ir, { login: u, user: e.license.meta.user }),
                n || (vl(), ml(e.license.licence_type, e.license.meta.user, !0));
            } catch (e) {
              i.dispatchStorageEvent("hideSettings", Ir, { visible: !1 }),
                i.dispatchStorageEvent("settoolbarVisible", Ir, { visible: !1 }),
                n || vl();
            } finally {
              await sl(s);
            }
          else if (a || c || s !== r.DEFAULT)
            try {
              const e = await al(o, null, !1, c);
              (o !== r.MICROSOFT && o !== r.GOOGLE) || (await sl(s)),
                (Hr.license = e.license),
                Jr.setLicenseType(o),
                Jr.setLoginType(Jr.state.licenseType.toLowerCase()),
                i.dispatchStorageEvent("account-changed", Ir, { login: o, user: e.license.meta.user }),
                n || (vl(), ml(e.license.licence_type, e.license.meta.user, !0));
            } catch (e) {}
        });
      }),
      i.addEventListener("microsoftLogout", async () => {
        i.dispatchStorageEvent("settoolbarVisible", Ir, { visible: !1 });
        try {
          await sl(Jr.state.licenseType),
            Jr.setLicenseType(r.DEFAULT),
            Hr.resetLicense(),
            i.dispatchStorageEvent("settoolbarVisible", Ir, { visible: !1 }),
            i.dispatchStorageEvent("account-changed", Ir, { login: "", user: "" });
        } catch (e) {
          Hr.resetLicense(), Jr.setLicenseType(r.DEFAULT);
        }
      }),
      i.addEventListener("th-opensimplifttab", async (e) => {
        const t = ec.state.language.language,
          n = ec.state.language.features;
        await Pl.CallSimplifyService(!1, e.detail.title, e.detail.text, e.detail.url, t, e.detail.license, n);
      }),
      i.addEventListener("th-websearch", async (e) => {
        if (chrome.search) return void chrome.search.query({ disposition: "NEW_TAB", text: e.detail.text });
        let t = e.detail.text.split(" ");
        t.length < 1 ||
          (t.length > 100 && (t.length = 100),
          chrome.tabs.create({ url: "http://google.com/search?q=" + encodeURIComponent(t.join(" ")) }));
      }),
      i.addEventListener("th-doOnBoarding", async (e) => {
        const t = await new Promise((e, t) => {
          chrome.management.getSelf(async (t) => {
            e(t.installType);
          });
        });
        hd(t, e.detail.windowPosData);
      }),
      xl(),
      chrome.runtime.onMessage.addListener(async (e, t, n) => {
        if (t.id === chrome.runtime.id && void 0 !== e.command)
          if ("th-inject" !== e.command)
            if ("th-inject-frame" !== e.command)
              if ("RW4GC_ACTION_CLICK" !== e.command)
                if ("th-getWindowId" !== e.command)
                  if ("th-isEdge" !== e.command)
                    if ("th-updateTabsFocus" !== e.command) {
                      if ("thswsetaccounttype" !== e.command)
                        return "th-setMarket" === e.command
                          ? (qr.setMarket(e.market), dd(e.market), void i.dispatchStorageEvent("settoolbarVisible", Ir, { visible: !0 }))
                          : void 0;
                      {
                        let t = "google";
                        switch (e.accountType) {
                          case "G":
                          default:
                            t = "google";
                            break;
                          case "MS":
                            t = "microsoft";
                            break;
                          case "NYC":
                            t = "nyc";
                        }
                        i.dispatchStorageEvent("changeAccount", Rr, { loginType: t });
                      }
                    } else chrome.tabs.sendMessage(t.tab.id, { command: "setFrameActive" });
                  else n(tl);
                else n(t.tab.id);
              else {
                const e = await _l();
                yl(e);
              }
            else {
              if (t.tab.url.startsWith("chrome://") || "" === t.tab.url) return;
              await (async (e, t, n) => {
                await ll(e, "mathjax/getIfMathjaxNeeded.js"), await wl(e, t), bl(e), El(e, 0, n);
              })(t.tab.id, t.tab.url, t.frameId);
            }
          else
            (async (e = null) => {
              (e || (e = await _l())) && Ol(e.id, e.url);
            })(t.tab);
      }),
      chrome.commands.onCommand.addListener(async (e) => {
        let t = await c({ active: !0, currentWindow: !0 });
        chrome.tabs.sendMessage(t[0].id, { command: "shortcutHandler", action: e });
      });
    const u = async () => {
      chrome.identity.getProfileUserInfo(async (e) => {
        if (e.email.length > 0) {
          let t = await cl();
          t ? t === r.DEFAULT && (t = r.GOOGLE) : (t = r.GOOGLE);
          const n = await (async (e, t, n) => {
            let r = il(t, !1);
            return await r.getLicenseForAccount(e, t, n);
          })(e.email, t, !1);
          Hr.license = n;
        }
      });
    };
    t && u(),
      chrome.runtime.onInstalled.addListener(async (e) => {
        if ((u(), "update" === e.reason)) {
          let e = {},
            t = [],
            n = {},
            r = await o("thRWFGSettings");
          r.thRWFGSettings && (e = JSON.parse(r.thRWFGSettings)),
            (r = await o("texthelpdictionaryItems")),
            r.texthelpdictionaryItems && (t = r.texthelpdictionaryItems),
            (r = await o("texthelpbar")),
            r.texthelpbar && (n = r.texthelpbar.left.buttons),
            ec.importV1Settings(e, t, n);
        }
      });
  })();
});
