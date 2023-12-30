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
  const t = Object.freeze({ GOOGLE: "Google", MICROSOFT: "Microsoft", DEFAULT: "Default" });
  class n {
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
          var _ = f + this.Σ1(h) + this.Ch(h, p, g) + t[v] + m[v],
            y = this.Σ0(c) + this.Maj(c, u, l);
          (f = g), (g = p), (p = h), (h = (d + _) & 4294967295), (d = l), (l = u), (u = c), (c = (_ + y) & 4294967295);
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
  class r {
    constructor(e) {
      const { applicationName: t = "", analyticsTrackingCode: r = "" } = e;
      if (t.length < 0) throw "The application used when creating an Analytics instance is invalid.";
      if (!this._isAnalytics(r)) throw "The analytics tracking code used when creating an Analytics instance is invalid.";
      (this._applicationName = t),
        (this._analyticsTrackingCode = r),
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
        (this._libraryVersion = Object.freeze("1.0.93")),
        (this._hasher = new n());
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
  class i extends r {
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
  function a(e, t, n, r, i, a, s) {
    try {
      var o = e[a](s),
        c = o.value;
    } catch (e) {
      return void n(e);
    }
    o.done ? t(c) : Promise.resolve(c).then(r, i);
  }
  function s(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, i) {
        var s = e.apply(t, n);
        function o(e) {
          a(s, r, i, o, c, "next", e);
        }
        function c(e) {
          a(s, r, i, o, c, "throw", e);
        }
        o(void 0);
      });
    };
  }
  function o(e) {
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
  var c = {};
  function u() {
    return "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : c;
  }
  var l = Object.assign,
    d = Object.getOwnPropertyDescriptor,
    h = Object.defineProperty,
    p = Object.prototype,
    g = [];
  Object.freeze(g);
  var f = {};
  Object.freeze(f);
  var m = "undefined" != typeof Proxy,
    v = Object.toString();
  function _() {
    m || o("Proxy not available");
  }
  function y(e) {
    var t = !1;
    return function () {
      if (!t) return (t = !0), e.apply(this, arguments);
    };
  }
  var b = function () {};
  function S(e) {
    return "function" == typeof e;
  }
  function E(e) {
    switch (typeof e) {
      case "string":
      case "symbol":
      case "number":
        return !0;
    }
    return !1;
  }
  function O(e) {
    return null !== e && "object" == typeof e;
  }
  function A(e) {
    if (!O(e)) return !1;
    var t = Object.getPrototypeOf(e);
    if (null == t) return !0;
    var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
    return "function" == typeof n && n.toString() === v;
  }
  function T(e) {
    var t = null == e ? void 0 : e.constructor;
    return !!t && ("GeneratorFunction" === t.name || "GeneratorFunction" === t.displayName);
  }
  function w(e, t, n) {
    h(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
  }
  function C(e, t, n) {
    h(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
  }
  function I(e, t) {
    var n = "isMobX" + e;
    return (
      (t.prototype[n] = !0),
      function (e) {
        return O(e) && !0 === e[n];
      }
    );
  }
  function R(e) {
    return e instanceof Map;
  }
  function N(e) {
    return e instanceof Set;
  }
  var P = void 0 !== Object.getOwnPropertySymbols;
  var D =
    "undefined" != typeof Reflect && Reflect.ownKeys
      ? Reflect.ownKeys
      : P
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
  function L(e) {
    return null === e ? null : "object" == typeof e ? "" + e : e;
  }
  function k(e, t) {
    return p.hasOwnProperty.call(e, t);
  }
  var U =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        D(e).forEach(function (n) {
          t[n] = d(e, n);
        }),
        t
      );
    };
  function x(e, t) {
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
  function j(e, t, n) {
    return t && x(e.prototype, t), n && x(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
  }
  function M() {
    return (
      (M = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      M.apply(this, arguments)
    );
  }
  function Y(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), G(e, t);
  }
  function G(e, t) {
    return (
      (G = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
            return (e.__proto__ = t), e;
          }),
      G(e, t)
    );
  }
  function F(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function B(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function K(e, t) {
    var n = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
    if (n) return (n = n.call(e)).next.bind(n);
    if (
      Array.isArray(e) ||
      (n = (function (e, t) {
        if (e) {
          if ("string" == typeof e) return B(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? B(e, t)
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
  var V = Symbol("mobx-stored-annotations");
  function H(e) {
    return Object.assign(function (t, n) {
      W(t, n, e);
    }, e);
  }
  function W(e, t, n) {
    k(e, V) || w(e, V, M({}, e[V])),
      (function (e) {
        return e.annotationType_ === ee;
      })(n) || (e[V][t] = n);
  }
  var z = Symbol("mobx administration"),
    J = (function () {
      function e(e) {
        void 0 === e && (e = "Atom"),
          (this.name_ = void 0),
          (this.isPendingUnobservation_ = !1),
          (this.isBeingObserved_ = !1),
          (this.observers_ = new Set()),
          (this.diffValue_ = 0),
          (this.lastAccessedBy_ = 0),
          (this.lowestObserverState_ = Je.NOT_TRACKING_),
          (this.onBOL = void 0),
          (this.onBUOL = void 0),
          (this.name_ = e);
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
          return vt(this);
        }),
        (t.reportChanged = function () {
          ft(),
            _t(this),
            (dt.stateVersion = dt.stateVersion < Number.MAX_SAFE_INTEGER ? dt.stateVersion + 1 : Number.MIN_SAFE_INTEGER),
            mt();
        }),
        (t.toString = function () {
          return this.name_;
        }),
        e
      );
    })(),
    q = I("Atom", J);
  function $(e, t, n) {
    void 0 === t && (t = b), void 0 === n && (n = b);
    var r,
      i = new J(e);
    return t !== b && Gt(jt, i, t, r), n !== b && Yt(i, n), i;
  }
  var X = {
    identity: function (e, t) {
      return e === t;
    },
    structural: function (e, t) {
      return nr(e, t);
    },
    default: function (e, t) {
      return Object.is ? Object.is(e, t) : e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
    },
    shallow: function (e, t) {
      return nr(e, t, 1);
    }
  };
  function Q(e, t, n) {
    return qt(e)
      ? e
      : Array.isArray(e)
      ? De.array(e, { name: n })
      : A(e)
      ? De.object(e, void 0, { name: n })
      : R(e)
      ? De.map(e, { name: n })
      : N(e)
      ? De.set(e, { name: n })
      : "function" != typeof e || kt(e) || Jt(e)
      ? e
      : T(e)
      ? Wt(e)
      : Lt(n, e);
  }
  function Z(e) {
    return e;
  }
  var ee = "override";
  function te(e, t) {
    return { annotationType_: e, options_: t, make_: ne, extend_: re };
  }
  function ne(e, t, n, r) {
    var i;
    if (null != (i = this.options_) && i.bound) return null === this.extend_(e, t, n, !1) ? 0 : 1;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (kt(n.value)) return 1;
    var a = ie(e, this, t, n, !1);
    return h(r, t, a), 2;
  }
  function re(e, t, n, r) {
    var i = ie(e, this, t, n);
    return e.defineProperty_(t, i, r);
  }
  function ie(e, t, n, r, i) {
    var a, s, o, c, u, l, d, h;
    void 0 === i && (i = dt.safeDescriptors), (h = r), t.annotationType_, h.value;
    var p,
      g = r.value;
    null != (a = t.options_) && a.bound && (g = g.bind(null != (p = e.proxy_) ? p : e.target_));
    return {
      value: Be(
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
  function ae(e, t) {
    return { annotationType_: e, options_: t, make_: se, extend_: oe };
  }
  function se(e, t, n, r) {
    var i;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (null != (i = this.options_) && i.bound && (!k(e.target_, t) || !Jt(e.target_[t])) && null === this.extend_(e, t, n, !1)) return 0;
    if (Jt(n.value)) return 1;
    var a = ce(e, this, t, n, !1, !1);
    return h(r, t, a), 2;
  }
  function oe(e, t, n, r) {
    var i,
      a = ce(e, this, t, n, null == (i = this.options_) ? void 0 : i.bound);
    return e.defineProperty_(t, a, r);
  }
  function ce(e, t, n, r, i, a) {
    var s;
    void 0 === a && (a = dt.safeDescriptors), (s = r), t.annotationType_, s.value;
    var o,
      c = r.value;
    (Jt(c) || (c = Wt(c)), i) && ((c = c.bind(null != (o = e.proxy_) ? o : e.target_)).isMobXFlow = !0);
    return { value: c, configurable: !a || e.isPlainObject_, enumerable: !1, writable: !a };
  }
  function ue(e, t) {
    return { annotationType_: e, options_: t, make_: le, extend_: de };
  }
  function le(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
  }
  function de(e, t, n, r) {
    var i;
    return (i = n), this.annotationType_, i.get, e.defineComputedProperty_(t, M({}, this.options_, { get: n.get, set: n.set }), r);
  }
  function he(e, t) {
    return { annotationType_: e, options_: t, make_: pe, extend_: ge };
  }
  function pe(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
  }
  function ge(e, t, n, r) {
    var i, a;
    return (
      this.annotationType_,
      e.defineObservableProperty_(t, n.value, null != (i = null == (a = this.options_) ? void 0 : a.enhancer) ? i : Q, r)
    );
  }
  var fe = "true",
    me = ve();
  function ve(e) {
    return { annotationType_: fe, options_: e, make_: _e, extend_: ye };
  }
  function _e(e, t, n, r) {
    var i, a, s, o;
    if (n.get) return xe.make_(e, t, n, r);
    if (n.set) {
      var c = Be(t.toString(), n.set);
      return r === e.target_
        ? null === e.defineProperty_(t, { configurable: !dt.safeDescriptors || e.isPlainObject_, set: c })
          ? 0
          : 2
        : (h(r, t, { configurable: !0, set: c }), 2);
    }
    if (r !== e.target_ && "function" == typeof n.value)
      return T(n.value)
        ? (null != (o = this.options_) && o.autoBind ? Wt.bound : Wt).make_(e, t, n, r)
        : (null != (s = this.options_) && s.autoBind ? Lt.bound : Lt).make_(e, t, n, r);
    var u,
      l = !1 === (null == (i = this.options_) ? void 0 : i.deep) ? De.ref : De;
    "function" == typeof n.value &&
      null != (a = this.options_) &&
      a.autoBind &&
      (n.value = n.value.bind(null != (u = e.proxy_) ? u : e.target_));
    return l.make_(e, t, n, r);
  }
  function ye(e, t, n, r) {
    var i, a, s;
    if (n.get) return xe.extend_(e, t, n, r);
    if (n.set) return e.defineProperty_(t, { configurable: !dt.safeDescriptors || e.isPlainObject_, set: Be(t.toString(), n.set) }, r);
    "function" == typeof n.value &&
      null != (i = this.options_) &&
      i.autoBind &&
      (n.value = n.value.bind(null != (s = e.proxy_) ? s : e.target_));
    return (!1 === (null == (a = this.options_) ? void 0 : a.deep) ? De.ref : De).extend_(e, t, n, r);
  }
  var be = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
  function Se(e) {
    return e || be;
  }
  Object.freeze(be);
  var Ee = he("observable"),
    Oe = he("observable.ref", { enhancer: Z }),
    Ae = he("observable.shallow", {
      enhancer: function (e, t, n) {
        return null == e || Gn(e) || On(e) || Nn(e) || Ln(e)
          ? e
          : Array.isArray(e)
          ? De.array(e, { name: n, deep: !1 })
          : A(e)
          ? De.object(e, void 0, { name: n, deep: !1 })
          : R(e)
          ? De.map(e, { name: n, deep: !1 })
          : N(e)
          ? De.set(e, { name: n, deep: !1 })
          : void 0;
      }
    }),
    Te = he("observable.struct", {
      enhancer: function (e, t) {
        return nr(e, t) ? t : e;
      }
    }),
    we = H(Ee);
  function Ce(e) {
    return !0 === e.deep
      ? Q
      : !1 === e.deep
      ? Z
      : (t = e.defaultDecorator) && null != (n = null == (r = t.options_) ? void 0 : r.enhancer)
      ? n
      : Q;
    var t, n, r;
  }
  function Ie(e, t, n) {
    if (!E(t))
      return qt(e)
        ? e
        : A(e)
        ? De.object(e, t, n)
        : Array.isArray(e)
        ? De.array(e, t)
        : R(e)
        ? De.map(e, t)
        : N(e)
        ? De.set(e, t)
        : "object" == typeof e && null !== e
        ? e
        : De.box(e, t);
    W(e, t, Ee);
  }
  l(Ie, we);
  var Re,
    Ne,
    Pe = {
      box: function (e, t) {
        var n = Se(t);
        return new We(e, Ce(n), n.name, !0, n.equals);
      },
      array: function (e, t) {
        var n = Se(t);
        return (!1 === dt.useProxies || !1 === n.proxy ? Xn : gn)(e, Ce(n), n.name);
      },
      map: function (e, t) {
        var n = Se(t);
        return new Rn(e, Ce(n), n.name);
      },
      set: function (e, t) {
        var n = Se(t);
        return new Dn(e, Ce(n), n.name);
      },
      object: function (e, t, n) {
        return Ft(
          !1 === dt.useProxies || !1 === (null == n ? void 0 : n.proxy)
            ? jn({}, n)
            : (function (e, t) {
                var n, r;
                return _(), (e = jn(e, t)), null != (r = (n = e[z]).proxy_) ? r : (n.proxy_ = new Proxy(e, tn));
              })({}, n),
          e,
          t
        );
      },
      ref: H(Oe),
      shallow: H(Ae),
      deep: we,
      struct: H(Te)
    },
    De = l(Ie, Pe),
    Le = "computed",
    ke = ue(Le),
    Ue = ue("computed.struct", { equals: X.structural }),
    xe = function (e, t) {
      if (E(t)) return W(e, t, ke);
      if (A(e)) return H(ue(Le, e));
      var n = A(t) ? t : {};
      return (n.get = e), n.name || (n.name = e.name || ""), new $e(n);
    };
  Object.assign(xe, ke), (xe.struct = H(Ue));
  var je,
    Me = 0,
    Ye = 1,
    Ge = null != (Re = null == (Ne = d(function () {}, "name")) ? void 0 : Ne.configurable) && Re,
    Fe = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
  function Be(e, t, n, r) {
    function i() {
      return (function (e, t, n, r, i) {
        var a = (function (e, t, n, r) {
          var i = !1,
            a = 0,
            s = dt.trackingDerivation,
            o = !t || !s;
          ft();
          var c = dt.allowStateChanges;
          o && (it(), (c = Ke(!0)));
          var u = st(!0),
            l = {
              runAsAction_: o,
              prevDerivation_: s,
              prevAllowStateChanges_: c,
              prevAllowStateReads_: u,
              notifySpy_: i,
              startTime_: a,
              actionId_: Ye++,
              parentActionId_: Me
            };
          return (Me = l.actionId_), l;
        })(0, t);
        try {
          return n.apply(r, i);
        } catch (e) {
          throw ((a.error_ = e), e);
        } finally {
          !(function (e) {
            Me !== e.actionId_ && o(30);
            (Me = e.parentActionId_), void 0 !== e.error_ && (dt.suppressReactionErrors = !0);
            Ve(e.prevAllowStateChanges_), ot(e.prevAllowStateReads_), mt(), e.runAsAction_ && at(e.prevDerivation_);
            dt.suppressReactionErrors = !1;
          })(a);
        }
      })(0, n, t, r || this, arguments);
    }
    return void 0 === n && (n = !1), (i.isMobxAction = !0), Ge && ((Fe.value = e), h(i, "name", Fe)), i;
  }
  function Ke(e) {
    var t = dt.allowStateChanges;
    return (dt.allowStateChanges = e), t;
  }
  function Ve(e) {
    dt.allowStateChanges = e;
  }
  je = Symbol.toPrimitive;
  var He,
    We = (function (e) {
      function t(t, n, r, i, a) {
        var s;
        return (
          void 0 === r && (r = "ObservableValue"),
          void 0 === a && (a = X.default),
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
      Y(t, e);
      var n = t.prototype;
      return (
        (n.dehanceValue = function (e) {
          return void 0 !== this.dehancer ? this.dehancer(e) : e;
        }),
        (n.set = function (e) {
          this.value_, (e = this.prepareNewValue_(e)) !== dt.UNCHANGED && this.setNewValue_(e);
        }),
        (n.prepareNewValue_ = function (e) {
          if (nn(this)) {
            var t = an(this, { object: this, type: dn, newValue: e });
            if (!t) return dt.UNCHANGED;
            e = t.newValue;
          }
          return (e = this.enhancer(e, this.value_, this.name_)), this.equals(this.value_, e) ? dt.UNCHANGED : e;
        }),
        (n.setNewValue_ = function (e) {
          var t = this.value_;
          (this.value_ = e), this.reportChanged(), sn(this) && cn(this, { type: dn, object: this, newValue: e, oldValue: t });
        }),
        (n.get = function () {
          return this.reportObserved(), this.dehanceValue(this.value_);
        }),
        (n.intercept_ = function (e) {
          return rn(this, e);
        }),
        (n.observe_ = function (e, t) {
          return (
            t &&
              e({ observableKind: "value", debugObjectName: this.name_, object: this, type: dn, newValue: this.value_, oldValue: void 0 }),
            on(this, e)
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
          return L(this.get());
        }),
        (n[je] = function () {
          return this.valueOf();
        }),
        t
      );
    })(J),
    ze = I("ObservableValue", We);
  He = Symbol.toPrimitive;
  var Je,
    qe,
    $e = (function () {
      function e(e) {
        (this.dependenciesState_ = Je.NOT_TRACKING_),
          (this.observing_ = []),
          (this.newObserving_ = null),
          (this.isBeingObserved_ = !1),
          (this.isPendingUnobservation_ = !1),
          (this.observers_ = new Set()),
          (this.diffValue_ = 0),
          (this.runId_ = 0),
          (this.lastAccessedBy_ = 0),
          (this.lowestObserverState_ = Je.UP_TO_DATE_),
          (this.unboundDepsCount_ = 0),
          (this.value_ = new Qe(null)),
          (this.name_ = void 0),
          (this.triggeredBy_ = void 0),
          (this.isComputing_ = !1),
          (this.isRunningSetter_ = !1),
          (this.derivation = void 0),
          (this.setter_ = void 0),
          (this.isTracing_ = qe.NONE),
          (this.scope_ = void 0),
          (this.equals_ = void 0),
          (this.requiresReaction_ = void 0),
          (this.keepAlive_ = void 0),
          (this.onBOL = void 0),
          (this.onBUOL = void 0),
          e.get || o(31),
          (this.derivation = e.get),
          (this.name_ = e.name || "ComputedValue"),
          e.set && (this.setter_ = Be("ComputedValue-setter", e.set)),
          (this.equals_ = e.equals || (e.compareStructural || e.struct ? X.structural : X.default)),
          (this.scope_ = e.context),
          (this.requiresReaction_ = e.requiresReaction),
          (this.keepAlive_ = !!e.keepAlive);
      }
      var t = e.prototype;
      return (
        (t.onBecomeStale_ = function () {
          !(function (e) {
            if (e.lowestObserverState_ !== Je.UP_TO_DATE_) return;
            (e.lowestObserverState_ = Je.POSSIBLY_STALE_),
              e.observers_.forEach(function (e) {
                e.dependenciesState_ === Je.UP_TO_DATE_ && ((e.dependenciesState_ = Je.POSSIBLY_STALE_), e.onBecomeStale_());
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
            (this.isComputing_ && o(32, this.name_, this.derivation), 0 !== dt.inBatch || 0 !== this.observers_.size || this.keepAlive_)
          ) {
            if ((vt(this), et(this))) {
              var e = dt.trackingContext;
              this.keepAlive_ && !e && (dt.trackingContext = this),
                this.trackAndCompute() &&
                  (function (e) {
                    if (e.lowestObserverState_ === Je.STALE_) return;
                    (e.lowestObserverState_ = Je.STALE_),
                      e.observers_.forEach(function (t) {
                        t.dependenciesState_ === Je.POSSIBLY_STALE_
                          ? (t.dependenciesState_ = Je.STALE_)
                          : t.dependenciesState_ === Je.UP_TO_DATE_ && (e.lowestObserverState_ = Je.UP_TO_DATE_);
                      });
                  })(this),
                (dt.trackingContext = e);
            }
          } else et(this) && (this.warnAboutUntrackedRead_(), ft(), (this.value_ = this.computeValue_(!1)), mt());
          var t = this.value_;
          if (Ze(t)) throw t.cause;
          return t;
        }),
        (t.set = function (e) {
          if (this.setter_) {
            this.isRunningSetter_ && o(33, this.name_), (this.isRunningSetter_ = !0);
            try {
              this.setter_.call(this.scope_, e);
            } finally {
              this.isRunningSetter_ = !1;
            }
          } else o(34, this.name_);
        }),
        (t.trackAndCompute = function () {
          var e = this.value_,
            t = this.dependenciesState_ === Je.NOT_TRACKING_,
            n = this.computeValue_(!0),
            r = t || Ze(e) || Ze(n) || !this.equals_(e, n);
          return r && (this.value_ = n), r;
        }),
        (t.computeValue_ = function (e) {
          this.isComputing_ = !0;
          var t,
            n = Ke(!1);
          if (e) t = tt(this, this.derivation, this.scope_);
          else if (!0 === dt.disableErrorBoundaries) t = this.derivation.call(this.scope_);
          else
            try {
              t = this.derivation.call(this.scope_);
            } catch (e) {
              t = new Qe(e);
            }
          return Ve(n), (this.isComputing_ = !1), t;
        }),
        (t.suspend_ = function () {
          this.keepAlive_ || (nt(this), (this.value_ = void 0));
        }),
        (t.observe_ = function (e, t) {
          var n = this,
            r = !0,
            i = void 0;
          return Ut(function () {
            var a = n.get();
            if (!r || t) {
              var s = it();
              e({ observableKind: "computed", debugObjectName: n.name_, type: dn, object: n, newValue: a, oldValue: i }), at(s);
            }
            (r = !1), (i = a);
          });
        }),
        (t.warnAboutUntrackedRead_ = function () {}),
        (t.toString = function () {
          return this.name_ + "[" + this.derivation.toString() + "]";
        }),
        (t.valueOf = function () {
          return L(this.get());
        }),
        (t[He] = function () {
          return this.valueOf();
        }),
        e
      );
    })(),
    Xe = I("ComputedValue", $e);
  !(function (e) {
    (e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
      (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
      (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
      (e[(e.STALE_ = 2)] = "STALE_");
  })(Je || (Je = {})),
    (function (e) {
      (e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK");
    })(qe || (qe = {}));
  var Qe = function (e) {
    (this.cause = void 0), (this.cause = e);
  };
  function Ze(e) {
    return e instanceof Qe;
  }
  function et(e) {
    switch (e.dependenciesState_) {
      case Je.UP_TO_DATE_:
        return !1;
      case Je.NOT_TRACKING_:
      case Je.STALE_:
        return !0;
      case Je.POSSIBLY_STALE_:
        for (var t = st(!0), n = it(), r = e.observing_, i = r.length, a = 0; a < i; a++) {
          var s = r[a];
          if (Xe(s)) {
            if (dt.disableErrorBoundaries) s.get();
            else
              try {
                s.get();
              } catch (e) {
                return at(n), ot(t), !0;
              }
            if (e.dependenciesState_ === Je.STALE_) return at(n), ot(t), !0;
          }
        }
        return ct(e), at(n), ot(t), !1;
    }
  }
  function tt(e, t, n) {
    var r = st(!0);
    ct(e), (e.newObserving_ = new Array(e.observing_.length + 100)), (e.unboundDepsCount_ = 0), (e.runId_ = ++dt.runId);
    var i,
      a = dt.trackingDerivation;
    if (((dt.trackingDerivation = e), dt.inBatch++, !0 === dt.disableErrorBoundaries)) i = t.call(n);
    else
      try {
        i = t.call(n);
      } catch (e) {
        i = new Qe(e);
      }
    return (
      dt.inBatch--,
      (dt.trackingDerivation = a),
      (function (e) {
        for (
          var t = e.observing_, n = (e.observing_ = e.newObserving_), r = Je.UP_TO_DATE_, i = 0, a = e.unboundDepsCount_, s = 0;
          s < a;
          s++
        ) {
          var o = n[s];
          0 === o.diffValue_ && ((o.diffValue_ = 1), i !== s && (n[i] = o), i++), o.dependenciesState_ > r && (r = o.dependenciesState_);
        }
        (n.length = i), (e.newObserving_ = null), (a = t.length);
        for (; a--; ) {
          var c = t[a];
          0 === c.diffValue_ && pt(c, e), (c.diffValue_ = 0);
        }
        for (; i--; ) {
          var u = n[i];
          1 === u.diffValue_ && ((u.diffValue_ = 0), ht(u, e));
        }
        r !== Je.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
      })(e),
      ot(r),
      i
    );
  }
  function nt(e) {
    var t = e.observing_;
    e.observing_ = [];
    for (var n = t.length; n--; ) pt(t[n], e);
    e.dependenciesState_ = Je.NOT_TRACKING_;
  }
  function rt(e) {
    var t = it();
    try {
      return e();
    } finally {
      at(t);
    }
  }
  function it() {
    var e = dt.trackingDerivation;
    return (dt.trackingDerivation = null), e;
  }
  function at(e) {
    dt.trackingDerivation = e;
  }
  function st(e) {
    var t = dt.allowStateReads;
    return (dt.allowStateReads = e), t;
  }
  function ot(e) {
    dt.allowStateReads = e;
  }
  function ct(e) {
    if (e.dependenciesState_ !== Je.UP_TO_DATE_) {
      e.dependenciesState_ = Je.UP_TO_DATE_;
      for (var t = e.observing_, n = t.length; n--; ) t[n].lowestObserverState_ = Je.UP_TO_DATE_;
    }
  }
  var ut = function () {
      (this.version = 6),
        (this.UNCHANGED = {}),
        (this.trackingDerivation = null),
        (this.trackingContext = null),
        (this.runId = 0),
        (this.mobxGuid = 0),
        (this.inBatch = 0),
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
    lt = !0,
    dt = (function () {
      var e = u();
      return (
        e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (lt = !1),
        e.__mobxGlobals && e.__mobxGlobals.version !== new ut().version && (lt = !1),
        lt
          ? e.__mobxGlobals
            ? ((e.__mobxInstanceCount += 1), e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}), e.__mobxGlobals)
            : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new ut()))
          : (setTimeout(function () {
              o(35);
            }, 1),
            new ut())
      );
    })();
  function ht(e, t) {
    e.observers_.add(t), e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_);
  }
  function pt(e, t) {
    e.observers_.delete(t), 0 === e.observers_.size && gt(e);
  }
  function gt(e) {
    !1 === e.isPendingUnobservation_ && ((e.isPendingUnobservation_ = !0), dt.pendingUnobservations.push(e));
  }
  function ft() {
    dt.inBatch++;
  }
  function mt() {
    if (0 == --dt.inBatch) {
      Et();
      for (var e = dt.pendingUnobservations, t = 0; t < e.length; t++) {
        var n = e[t];
        (n.isPendingUnobservation_ = !1),
          0 === n.observers_.size && (n.isBeingObserved_ && ((n.isBeingObserved_ = !1), n.onBUO()), n instanceof $e && n.suspend_());
      }
      dt.pendingUnobservations = [];
    }
  }
  function vt(e) {
    var t = dt.trackingDerivation;
    return null !== t
      ? (t.runId_ !== e.lastAccessedBy_ &&
          ((e.lastAccessedBy_ = t.runId_),
          (t.newObserving_[t.unboundDepsCount_++] = e),
          !e.isBeingObserved_ && dt.trackingContext && ((e.isBeingObserved_ = !0), e.onBO())),
        e.isBeingObserved_)
      : (0 === e.observers_.size && dt.inBatch > 0 && gt(e), !1);
  }
  function _t(e) {
    e.lowestObserverState_ !== Je.STALE_ &&
      ((e.lowestObserverState_ = Je.STALE_),
      e.observers_.forEach(function (e) {
        e.dependenciesState_ === Je.UP_TO_DATE_ && e.onBecomeStale_(), (e.dependenciesState_ = Je.STALE_);
      }));
  }
  var yt = (function () {
      function e(e, t, n, r) {
        void 0 === e && (e = "Reaction"),
          (this.name_ = void 0),
          (this.onInvalidate_ = void 0),
          (this.errorHandler_ = void 0),
          (this.requiresObservable_ = void 0),
          (this.observing_ = []),
          (this.newObserving_ = []),
          (this.dependenciesState_ = Je.NOT_TRACKING_),
          (this.diffValue_ = 0),
          (this.runId_ = 0),
          (this.unboundDepsCount_ = 0),
          (this.isDisposed_ = !1),
          (this.isScheduled_ = !1),
          (this.isTrackPending_ = !1),
          (this.isRunning_ = !1),
          (this.isTracing_ = qe.NONE),
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
          this.isScheduled_ || ((this.isScheduled_ = !0), dt.pendingReactions.push(this), Et());
        }),
        (t.isScheduled = function () {
          return this.isScheduled_;
        }),
        (t.runReaction_ = function () {
          if (!this.isDisposed_) {
            ft(), (this.isScheduled_ = !1);
            var e = dt.trackingContext;
            if (((dt.trackingContext = this), et(this))) {
              this.isTrackPending_ = !0;
              try {
                this.onInvalidate_();
              } catch (e) {
                this.reportExceptionInDerivation_(e);
              }
            }
            (dt.trackingContext = e), mt();
          }
        }),
        (t.track = function (e) {
          if (!this.isDisposed_) {
            ft(), (this.isRunning_ = !0);
            var t = dt.trackingContext;
            dt.trackingContext = this;
            var n = tt(this, e, void 0);
            (dt.trackingContext = t),
              (this.isRunning_ = !1),
              (this.isTrackPending_ = !1),
              this.isDisposed_ && nt(this),
              Ze(n) && this.reportExceptionInDerivation_(n.cause),
              mt();
          }
        }),
        (t.reportExceptionInDerivation_ = function (e) {
          var t = this;
          if (this.errorHandler_) this.errorHandler_(e, this);
          else {
            if (dt.disableErrorBoundaries) throw e;
            var n = "[mobx] uncaught error in '" + this + "'";
            dt.suppressReactionErrors || console.error(n, e),
              dt.globalReactionErrorHandlers.forEach(function (n) {
                return n(e, t);
              });
          }
        }),
        (t.dispose = function () {
          this.isDisposed_ || ((this.isDisposed_ = !0), this.isRunning_ || (ft(), nt(this), mt()));
        }),
        (t.getDisposer_ = function (e) {
          var t = this,
            n = function n() {
              t.dispose(), null == e || null == e.removeEventListener || e.removeEventListener("abort", n);
            };
          return null == e || null == e.addEventListener || e.addEventListener("abort", n), (n[z] = this), n;
        }),
        (t.toString = function () {
          return "Reaction[" + this.name_ + "]";
        }),
        (t.trace = function (e) {}),
        e
      );
    })(),
    bt = 100,
    St = function (e) {
      return e();
    };
  function Et() {
    dt.inBatch > 0 || dt.isRunningReactions || St(Ot);
  }
  function Ot() {
    dt.isRunningReactions = !0;
    for (var e = dt.pendingReactions, t = 0; e.length > 0; ) {
      ++t === bt && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
      for (var n = e.splice(0), r = 0, i = n.length; r < i; r++) n[r].runReaction_();
    }
    dt.isRunningReactions = !1;
  }
  var At = I("Reaction", yt);
  var Tt = "action",
    wt = "autoAction",
    Ct = te(Tt),
    It = te("action.bound", { bound: !0 }),
    Rt = te(wt, { autoAction: !0 }),
    Nt = te("autoAction.bound", { autoAction: !0, bound: !0 });
  function Pt(e) {
    return function (t, n) {
      return S(t)
        ? Be(t.name || "<unnamed action>", t, e)
        : S(n)
        ? Be(t, n, e)
        : E(n)
        ? W(t, n, e ? Rt : Ct)
        : E(t)
        ? H(te(e ? wt : Tt, { name: t, autoAction: e }))
        : void 0;
    };
  }
  var Dt = Pt(!1);
  Object.assign(Dt, Ct);
  var Lt = Pt(!0);
  function kt(e) {
    return S(e) && !0 === e.isMobxAction;
  }
  function Ut(e, t) {
    var n, r, i, a, s;
    void 0 === t && (t = f);
    var o,
      c = null != (n = null == (r = t) ? void 0 : r.name) ? n : "Autorun";
    if (!t.scheduler && !t.delay)
      o = new yt(
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
            : xt;
        })(t),
        l = !1;
      o = new yt(
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
  Object.assign(Lt, Rt), (Dt.bound = H(It)), (Lt.bound = H(Nt));
  var xt = function (e) {
    return e();
  };
  var jt = "onBO",
    Mt = "onBUO";
  function Yt(e, t, n) {
    return Gt(Mt, e, t, n);
  }
  function Gt(e, t, n, r) {
    var i = "function" == typeof r ? Qn(t, n) : Qn(t),
      a = S(r) ? r : n,
      s = e + "L";
    return (
      i[s] ? i[s].add(a) : (i[s] = new Set([a])),
      function () {
        var e = i[s];
        e && (e.delete(a), 0 === e.size && delete i[s]);
      }
    );
  }
  function Ft(e, t, n, r) {
    var i = U(t),
      a = jn(e, r)[z];
    ft();
    try {
      D(i).forEach(function (e) {
        a.extend_(e, i[e], !n || !(e in n) || n[e]);
      });
    } finally {
      mt();
    }
    return e;
  }
  var Bt = 0;
  function Kt() {
    this.message = "FLOW_CANCELLED";
  }
  Kt.prototype = Object.create(Error.prototype);
  var Vt = ae("flow"),
    Ht = ae("flow.bound", { bound: !0 }),
    Wt = Object.assign(function (e, t) {
      if (E(t)) return W(e, t, Vt);
      var n = e,
        r = n.name || "<unnamed flow>",
        i = function () {
          var e,
            t = arguments,
            i = ++Bt,
            a = Dt(r + " - runid: " + i + " - init", n).apply(this, t),
            s = void 0,
            o = new Promise(function (t, n) {
              var o = 0;
              function c(e) {
                var t;
                s = void 0;
                try {
                  t = Dt(r + " - runid: " + i + " - yield " + o++, a.next).call(a, e);
                } catch (e) {
                  return n(e);
                }
                l(t);
              }
              function u(e) {
                var t;
                s = void 0;
                try {
                  t = Dt(r + " - runid: " + i + " - yield " + o++, a.throw).call(a, e);
                } catch (e) {
                  return n(e);
                }
                l(t);
              }
              function l(e) {
                if (!S(null == e ? void 0 : e.then)) return e.done ? t(e.value) : (s = Promise.resolve(e.value)).then(c, u);
                e.then(l, n);
              }
              (e = n), c(void 0);
            });
          return (
            (o.cancel = Dt(r + " - runid: " + i + " - cancel", function () {
              try {
                s && zt(s);
                var t = a.return(void 0),
                  n = Promise.resolve(t.value);
                n.then(b, b), zt(n), e(new Kt());
              } catch (t) {
                e(t);
              }
            })),
            o
          );
        };
      return (i.isMobXFlow = !0), i;
    }, Vt);
  function zt(e) {
    S(e.cancel) && e.cancel();
  }
  function Jt(e) {
    return !0 === (null == e ? void 0 : e.isMobXFlow);
  }
  function qt(e) {
    return (function (e, t) {
      return !!e && (void 0 !== t ? !!Gn(e) && e[z].values_.has(t) : Gn(e) || !!e[z] || q(e) || At(e) || Xe(e));
    })(e);
  }
  function $t(e, t, n) {
    return e.set(t, n), n;
  }
  function Xt(e, t) {
    if (null == e || "object" != typeof e || e instanceof Date || !qt(e)) return e;
    if (ze(e) || Xe(e)) return Xt(e.get(), t);
    if (t.has(e)) return t.get(e);
    if (On(e)) {
      var n = $t(t, e, new Array(e.length));
      return (
        e.forEach(function (e, r) {
          n[r] = Xt(e, t);
        }),
        n
      );
    }
    if (Ln(e)) {
      var r = $t(t, e, new Set());
      return (
        e.forEach(function (e) {
          r.add(Xt(e, t));
        }),
        r
      );
    }
    if (Nn(e)) {
      var i = $t(t, e, new Map());
      return (
        e.forEach(function (e, n) {
          i.set(n, Xt(e, t));
        }),
        i
      );
    }
    var a = $t(t, e, {});
    return (
      (function (e) {
        if (Gn(e)) return e[z].ownKeys_();
        o(38);
      })(e).forEach(function (n) {
        p.propertyIsEnumerable.call(e, n) && (a[n] = Xt(e[n], t));
      }),
      a
    );
  }
  function Qt(e, t) {
    return Xt(e, new Map());
  }
  function Zt(e, t) {
    void 0 === t && (t = void 0), ft();
    try {
      return e.apply(t);
    } finally {
      mt();
    }
  }
  function en(e) {
    return e[z];
  }
  Wt.bound = H(Ht);
  var tn = {
    has: function (e, t) {
      return en(e).has_(t);
    },
    get: function (e, t) {
      return en(e).get_(t);
    },
    set: function (e, t, n) {
      var r;
      return !!E(t) && (null == (r = en(e).set_(t, n, !0)) || r);
    },
    deleteProperty: function (e, t) {
      var n;
      return !!E(t) && (null == (n = en(e).delete_(t, !0)) || n);
    },
    defineProperty: function (e, t, n) {
      var r;
      return null == (r = en(e).defineProperty_(t, n)) || r;
    },
    ownKeys: function (e) {
      return en(e).ownKeys_();
    },
    preventExtensions: function (e) {
      o(13);
    }
  };
  function nn(e) {
    return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
  }
  function rn(e, t) {
    var n = e.interceptors_ || (e.interceptors_ = []);
    return (
      n.push(t),
      y(function () {
        var e = n.indexOf(t);
        -1 !== e && n.splice(e, 1);
      })
    );
  }
  function an(e, t) {
    var n = it();
    try {
      for (var r = [].concat(e.interceptors_ || []), i = 0, a = r.length; i < a && ((t = r[i](t)) && !t.type && o(14), t); i++);
      return t;
    } finally {
      at(n);
    }
  }
  function sn(e) {
    return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
  }
  function on(e, t) {
    var n = e.changeListeners_ || (e.changeListeners_ = []);
    return (
      n.push(t),
      y(function () {
        var e = n.indexOf(t);
        -1 !== e && n.splice(e, 1);
      })
    );
  }
  function cn(e, t) {
    var n = it(),
      r = e.changeListeners_;
    if (r) {
      for (var i = 0, a = (r = r.slice()).length; i < a; i++) r[i](t);
      at(n);
    }
  }
  var un = Symbol("mobx-keys");
  var ln = "splice",
    dn = "update",
    hn = {
      get: function (e, t) {
        var n = e[z];
        return t === z
          ? n
          : "length" === t
          ? n.getArrayLength_()
          : "string" != typeof t || isNaN(t)
          ? k(fn, t)
            ? fn[t]
            : e[t]
          : n.get_(parseInt(t));
      },
      set: function (e, t, n) {
        var r = e[z];
        return "length" === t && r.setArrayLength_(n), "symbol" == typeof t || isNaN(t) ? (e[t] = n) : r.set_(parseInt(t), n), !0;
      },
      preventExtensions: function () {
        o(15);
      }
    },
    pn = (function () {
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
          (this.atom_ = new J(e)),
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
          return rn(this, e);
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
            on(this, e)
          );
        }),
        (t.getArrayLength_ = function () {
          return this.atom_.reportObserved(), this.values_.length;
        }),
        (t.setArrayLength_ = function (e) {
          ("number" != typeof e || isNaN(e) || e < 0) && o("Out of range: " + e);
          var t = this.values_.length;
          if (e !== t)
            if (e > t) {
              for (var n = new Array(e - t), r = 0; r < e - t; r++) n[r] = void 0;
              this.spliceWithArray_(t, 0, n);
            } else this.spliceWithArray_(e, t - e);
        }),
        (t.updateArrayLength_ = function (e, t) {
          e !== this.lastKnownLength_ && o(16), (this.lastKnownLength_ += t), this.legacyMode_ && t > 0 && $n(e + t + 1);
        }),
        (t.spliceWithArray_ = function (e, t, n) {
          var r = this;
          this.atom_;
          var i = this.values_.length;
          if (
            (void 0 === e ? (e = 0) : e > i ? (e = i) : e < 0 && (e = Math.max(0, i + e)),
            (t = 1 === arguments.length ? i - e : null == t ? 0 : Math.max(0, Math.min(t, i - e))),
            void 0 === n && (n = g),
            nn(this))
          ) {
            var a = an(this, { object: this.proxy_, type: ln, index: e, removedCount: t, added: n });
            if (!a) return g;
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
            i = sn(this),
            a =
              i || r
                ? {
                    observableKind: "array",
                    object: this.proxy_,
                    type: dn,
                    debugObjectName: this.atom_.name_,
                    index: e,
                    newValue: t,
                    oldValue: n
                  }
                : null;
          this.atom_.reportChanged(), i && cn(this, a);
        }),
        (t.notifyArraySplice_ = function (e, t, n) {
          var r = !this.owned_ && !1,
            i = sn(this),
            a =
              i || r
                ? {
                    observableKind: "array",
                    object: this.proxy_,
                    debugObjectName: this.atom_.name_,
                    type: ln,
                    index: e,
                    removed: n,
                    added: t,
                    removedCount: n.length,
                    addedCount: t.length
                  }
                : null;
          this.atom_.reportChanged(), i && cn(this, a);
        }),
        (t.get_ = function (e) {
          if (!(this.legacyMode_ && e >= this.values_.length)) return this.atom_.reportObserved(), this.dehanceValue_(this.values_[e]);
          console.warn("[mobx] Out of bounds read: " + e);
        }),
        (t.set_ = function (e, t) {
          var n = this.values_;
          if ((this.legacyMode_ && e > n.length && o(17, e, n.length), e < n.length)) {
            this.atom_;
            var r = n[e];
            if (nn(this)) {
              var i = an(this, { type: dn, object: this.proxy_, index: e, newValue: t });
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
  function gn(e, t, n, r) {
    void 0 === n && (n = "ObservableArray"), void 0 === r && (r = !1), _();
    var i = new pn(n, t, r, !1);
    C(i.values_, z, i);
    var a = new Proxy(i.values_, hn);
    if (((i.proxy_ = a), e && e.length)) {
      var s = Ke(!0);
      i.spliceWithArray_(0, 0, e), Ve(s);
    }
    return a;
  }
  var fn = {
    clear: function () {
      return this.splice(0);
    },
    replace: function (e) {
      var t = this[z];
      return t.spliceWithArray_(0, t.values_.length, e);
    },
    toJSON: function () {
      return this.slice();
    },
    splice: function (e, t) {
      for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
      var a = this[z];
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
      return this[z].spliceWithArray_(e, t, n);
    },
    push: function () {
      for (var e = this[z], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
      return e.spliceWithArray_(e.values_.length, 0, n), e.values_.length;
    },
    pop: function () {
      return this.splice(Math.max(this[z].values_.length - 1, 0), 1)[0];
    },
    shift: function () {
      return this.splice(0, 1)[0];
    },
    unshift: function () {
      for (var e = this[z], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
      return e.spliceWithArray_(0, 0, n), e.values_.length;
    },
    reverse: function () {
      return dt.trackingDerivation && o(37, "reverse"), this.replace(this.slice().reverse()), this;
    },
    sort: function () {
      dt.trackingDerivation && o(37, "sort");
      var e = this.slice();
      return e.sort.apply(e, arguments), this.replace(e), this;
    },
    remove: function (e) {
      var t = this[z],
        n = t.dehanceValues_(t.values_).indexOf(e);
      return n > -1 && (this.splice(n, 1), !0);
    }
  };
  function mn(e, t) {
    "function" == typeof Array.prototype[e] && (fn[e] = t(e));
  }
  function vn(e) {
    return function () {
      var t = this[z];
      t.atom_.reportObserved();
      var n = t.dehanceValues_(t.values_);
      return n[e].apply(n, arguments);
    };
  }
  function _n(e) {
    return function (t, n) {
      var r = this,
        i = this[z];
      return (
        i.atom_.reportObserved(),
        i.dehanceValues_(i.values_)[e](function (e, i) {
          return t.call(n, e, i, r);
        })
      );
    };
  }
  function yn(e) {
    return function () {
      var t = this,
        n = this[z];
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
  mn("concat", vn),
    mn("flat", vn),
    mn("includes", vn),
    mn("indexOf", vn),
    mn("join", vn),
    mn("lastIndexOf", vn),
    mn("slice", vn),
    mn("toString", vn),
    mn("toLocaleString", vn),
    mn("every", _n),
    mn("filter", _n),
    mn("find", _n),
    mn("findIndex", _n),
    mn("flatMap", _n),
    mn("forEach", _n),
    mn("map", _n),
    mn("some", _n),
    mn("reduce", yn),
    mn("reduceRight", yn);
  var bn,
    Sn,
    En = I("ObservableArrayAdministration", pn);
  function On(e) {
    return O(e) && En(e[z]);
  }
  var An = {},
    Tn = "add",
    wn = "delete";
  (bn = Symbol.iterator), (Sn = Symbol.toStringTag);
  var Cn,
    In,
    Rn = (function () {
      function e(e, t, n) {
        var r = this;
        void 0 === t && (t = Q),
          void 0 === n && (n = "ObservableMap"),
          (this.enhancer_ = void 0),
          (this.name_ = void 0),
          (this[z] = An),
          (this.data_ = void 0),
          (this.hasMap_ = void 0),
          (this.keysAtom_ = void 0),
          (this.interceptors_ = void 0),
          (this.changeListeners_ = void 0),
          (this.dehancer = void 0),
          (this.enhancer_ = t),
          (this.name_ = n),
          S(Map) || o(18),
          (this.keysAtom_ = $("ObservableMap.keys()")),
          (this.data_ = new Map()),
          (this.hasMap_ = new Map()),
          (function (e, t) {
            var n = Ke(e);
            try {
              return t();
            } finally {
              Ve(n);
            }
          })(!0, function () {
            r.merge(e);
          });
      }
      var t = e.prototype;
      return (
        (t.has_ = function (e) {
          return this.data_.has(e);
        }),
        (t.has = function (e) {
          var t = this;
          if (!dt.trackingDerivation) return this.has_(e);
          var n = this.hasMap_.get(e);
          if (!n) {
            var r = (n = new We(this.has_(e), Z, "ObservableMap.key?", !1));
            this.hasMap_.set(e, r),
              Yt(r, function () {
                return t.hasMap_.delete(e);
              });
          }
          return n.get();
        }),
        (t.set = function (e, t) {
          var n = this.has_(e);
          if (nn(this)) {
            var r = an(this, { type: n ? dn : Tn, object: this, newValue: t, name: e });
            if (!r) return this;
            t = r.newValue;
          }
          return n ? this.updateValue_(e, t) : this.addValue_(e, t), this;
        }),
        (t.delete = function (e) {
          var t = this;
          if ((this.keysAtom_, nn(this)) && !an(this, { type: wn, object: this, name: e })) return !1;
          if (this.has_(e)) {
            var n = sn(this),
              r = n
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: wn,
                    object: this,
                    oldValue: this.data_.get(e).value_,
                    name: e
                  }
                : null;
            return (
              Zt(function () {
                var n;
                t.keysAtom_.reportChanged(),
                  null == (n = t.hasMap_.get(e)) || n.setNewValue_(!1),
                  t.data_.get(e).setNewValue_(void 0),
                  t.data_.delete(e);
              }),
              n && cn(this, r),
              !0
            );
          }
          return !1;
        }),
        (t.updateValue_ = function (e, t) {
          var n = this.data_.get(e);
          if ((t = n.prepareNewValue_(t)) !== dt.UNCHANGED) {
            var r = sn(this),
              i = r
                ? { observableKind: "map", debugObjectName: this.name_, type: dn, object: this, oldValue: n.value_, name: e, newValue: t }
                : null;
            n.setNewValue_(t), r && cn(this, i);
          }
        }),
        (t.addValue_ = function (e, t) {
          var n = this;
          this.keysAtom_,
            Zt(function () {
              var r,
                i = new We(t, n.enhancer_, "ObservableMap.key", !1);
              n.data_.set(e, i), (t = i.value_), null == (r = n.hasMap_.get(e)) || r.setNewValue_(!0), n.keysAtom_.reportChanged();
            });
          var r = sn(this),
            i = r ? { observableKind: "map", debugObjectName: this.name_, type: Tn, object: this, name: e, newValue: t } : null;
          r && cn(this, i);
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
          return ar({
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
          return ar({
            next: function () {
              var n = t.next(),
                r = n.done,
                i = n.value;
              return { done: r, value: r ? void 0 : [i, e.get(i)] };
            }
          });
        }),
        (t[bn] = function () {
          return this.entries();
        }),
        (t.forEach = function (e, t) {
          for (var n, r = K(this); !(n = r()).done; ) {
            var i = n.value,
              a = i[0],
              s = i[1];
            e.call(t, s, a, this);
          }
        }),
        (t.merge = function (e) {
          var t = this;
          return (
            Nn(e) && (e = new Map(e)),
            Zt(function () {
              A(e)
                ? (function (e) {
                    var t = Object.keys(e);
                    if (!P) return t;
                    var n = Object.getOwnPropertySymbols(e);
                    return n.length
                      ? [].concat(
                          t,
                          n.filter(function (t) {
                            return p.propertyIsEnumerable.call(e, t);
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
                : R(e)
                ? (e.constructor !== Map && o(19, e),
                  e.forEach(function (e, n) {
                    return t.set(n, e);
                  }))
                : null != e && o(20, e);
            }),
            this
          );
        }),
        (t.clear = function () {
          var e = this;
          Zt(function () {
            rt(function () {
              for (var t, n = K(e.keys()); !(t = n()).done; ) {
                var r = t.value;
                e.delete(r);
              }
            });
          });
        }),
        (t.replace = function (e) {
          var t = this;
          return (
            Zt(function () {
              for (
                var n,
                  r = (function (e) {
                    if (R(e) || Nn(e)) return e;
                    if (Array.isArray(e)) return new Map(e);
                    if (A(e)) {
                      var t = new Map();
                      for (var n in e) t.set(n, e[n]);
                      return t;
                    }
                    return o(21, e);
                  })(e),
                  i = new Map(),
                  a = !1,
                  s = K(t.data_.keys());
                !(n = s()).done;

              ) {
                var c = n.value;
                if (!r.has(c))
                  if (t.delete(c)) a = !0;
                  else {
                    var u = t.data_.get(c);
                    i.set(c, u);
                  }
              }
              for (var l, d = K(r.entries()); !(l = d()).done; ) {
                var h = l.value,
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
                  for (var v = t.data_.keys(), _ = i.keys(), y = v.next(), b = _.next(); !y.done; ) {
                    if (y.value !== b.value) {
                      t.keysAtom_.reportChanged();
                      break;
                    }
                    (y = v.next()), (b = _.next());
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
          return on(this, e);
        }),
        (t.intercept_ = function (e) {
          return rn(this, e);
        }),
        j(e, [
          {
            key: "size",
            get: function () {
              return this.keysAtom_.reportObserved(), this.data_.size;
            }
          },
          {
            key: Sn,
            get: function () {
              return "Map";
            }
          }
        ]),
        e
      );
    })(),
    Nn = I("ObservableMap", Rn);
  var Pn = {};
  (Cn = Symbol.iterator), (In = Symbol.toStringTag);
  var Dn = (function () {
      function e(e, t, n) {
        void 0 === t && (t = Q),
          void 0 === n && (n = "ObservableSet"),
          (this.name_ = void 0),
          (this[z] = Pn),
          (this.data_ = new Set()),
          (this.atom_ = void 0),
          (this.changeListeners_ = void 0),
          (this.interceptors_ = void 0),
          (this.dehancer = void 0),
          (this.enhancer_ = void 0),
          (this.name_ = n),
          S(Set) || o(22),
          (this.atom_ = $(this.name_)),
          (this.enhancer_ = function (e, r) {
            return t(e, r, n);
          }),
          e && this.replace(e);
      }
      var t = e.prototype;
      return (
        (t.dehanceValue_ = function (e) {
          return void 0 !== this.dehancer ? this.dehancer(e) : e;
        }),
        (t.clear = function () {
          var e = this;
          Zt(function () {
            rt(function () {
              for (var t, n = K(e.data_.values()); !(t = n()).done; ) {
                var r = t.value;
                e.delete(r);
              }
            });
          });
        }),
        (t.forEach = function (e, t) {
          for (var n, r = K(this); !(n = r()).done; ) {
            var i = n.value;
            e.call(t, i, i, this);
          }
        }),
        (t.add = function (e) {
          var t = this;
          if ((this.atom_, nn(this)) && !an(this, { type: Tn, object: this, newValue: e })) return this;
          if (!this.has(e)) {
            Zt(function () {
              t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged();
            });
            var n = sn(this),
              r = n ? { observableKind: "set", debugObjectName: this.name_, type: Tn, object: this, newValue: e } : null;
            n && cn(this, r);
          }
          return this;
        }),
        (t.delete = function (e) {
          var t = this;
          if (nn(this) && !an(this, { type: wn, object: this, oldValue: e })) return !1;
          if (this.has(e)) {
            var n = sn(this),
              r = n ? { observableKind: "set", debugObjectName: this.name_, type: wn, object: this, oldValue: e } : null;
            return (
              Zt(function () {
                t.atom_.reportChanged(), t.data_.delete(e);
              }),
              n && cn(this, r),
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
          return ar({
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
          return ar({
            next: function () {
              return t < n.length ? { value: e.dehanceValue_(n[t++]), done: !1 } : { done: !0 };
            }
          });
        }),
        (t.replace = function (e) {
          var t = this;
          return (
            Ln(e) && (e = new Set(e)),
            Zt(function () {
              Array.isArray(e) || N(e)
                ? (t.clear(),
                  e.forEach(function (e) {
                    return t.add(e);
                  }))
                : null != e && o("Cannot initialize set from " + e);
            }),
            this
          );
        }),
        (t.observe_ = function (e, t) {
          return on(this, e);
        }),
        (t.intercept_ = function (e) {
          return rn(this, e);
        }),
        (t.toJSON = function () {
          return Array.from(this);
        }),
        (t.toString = function () {
          return "[object ObservableSet]";
        }),
        (t[Cn] = function () {
          return this.values();
        }),
        j(e, [
          {
            key: "size",
            get: function () {
              return this.atom_.reportObserved(), this.data_.size;
            }
          },
          {
            key: In,
            get: function () {
              return "Set";
            }
          }
        ]),
        e
      );
    })(),
    Ln = I("ObservableSet", Dn),
    kn = Object.create(null),
    Un = "remove",
    xn = (function () {
      function e(e, t, n, r) {
        void 0 === t && (t = new Map()),
          void 0 === r && (r = me),
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
          (this.keysAtom_ = new J("ObservableObject.keys")),
          (this.isPlainObject_ = A(this.target_));
      }
      var t = e.prototype;
      return (
        (t.getObservablePropValue_ = function (e) {
          return this.values_.get(e).get();
        }),
        (t.setObservablePropValue_ = function (e, t) {
          var n = this.values_.get(e);
          if (n instanceof $e) return n.set(t), !0;
          if (nn(this)) {
            var r = an(this, { type: dn, object: this.proxy_ || this.target_, name: e, newValue: t });
            if (!r) return null;
            t = r.newValue;
          }
          if ((t = n.prepareNewValue_(t)) !== dt.UNCHANGED) {
            var i = sn(this),
              a = i
                ? {
                    type: dn,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    oldValue: n.value_,
                    name: e,
                    newValue: t
                  }
                : null;
            n.setNewValue_(t), i && cn(this, a);
          }
          return !0;
        }),
        (t.get_ = function (e) {
          return dt.trackingDerivation && !k(this.target_, e) && this.has_(e), this.target_[e];
        }),
        (t.set_ = function (e, t, n) {
          return (
            void 0 === n && (n = !1),
            k(this.target_, e)
              ? this.values_.has(e)
                ? this.setObservablePropValue_(e, t)
                : n
                ? Reflect.set(this.target_, e, t)
                : ((this.target_[e] = t), !0)
              : this.extend_(e, { value: t, enumerable: !0, writable: !0, configurable: !0 }, this.defaultAnnotation_, n)
          );
        }),
        (t.has_ = function (e) {
          if (!dt.trackingDerivation) return e in this.target_;
          this.pendingKeys_ || (this.pendingKeys_ = new Map());
          var t = this.pendingKeys_.get(e);
          return t || ((t = new We(e in this.target_, Z, "ObservableObject.key?", !1)), this.pendingKeys_.set(e, t)), t.get();
        }),
        (t.make_ = function (e, t) {
          if ((!0 === t && (t = this.defaultAnnotation_), !1 !== t)) {
            if (!(e in this.target_)) {
              var n;
              if (null != (n = this.target_[V]) && n[e]) return;
              o(1, t.annotationType_, this.name_ + "." + e.toString());
            }
            for (var r = this.target_; r && r !== p; ) {
              var i = d(r, e);
              if (i) {
                var a = t.make_(this, e, i, r);
                if (0 === a) return;
                if (1 === a) break;
              }
              r = Object.getPrototypeOf(r);
            }
            Fn(this, t, e);
          }
        }),
        (t.extend_ = function (e, t, n, r) {
          if ((void 0 === r && (r = !1), !0 === n && (n = this.defaultAnnotation_), !1 === n)) return this.defineProperty_(e, t, r);
          var i = n.extend_(this, e, t, r);
          return i && Fn(this, n, e), i;
        }),
        (t.defineProperty_ = function (e, t, n) {
          void 0 === n && (n = !1);
          try {
            ft();
            var r = this.delete_(e);
            if (!r) return r;
            if (nn(this)) {
              var i = an(this, { object: this.proxy_ || this.target_, name: e, type: Tn, newValue: t.value });
              if (!i) return null;
              var a = i.newValue;
              t.value !== a && (t = M({}, t, { value: a }));
            }
            if (n) {
              if (!Reflect.defineProperty(this.target_, e, t)) return !1;
            } else h(this.target_, e, t);
            this.notifyPropertyAddition_(e, t.value);
          } finally {
            mt();
          }
          return !0;
        }),
        (t.defineObservableProperty_ = function (e, t, n, r) {
          void 0 === r && (r = !1);
          try {
            ft();
            var i = this.delete_(e);
            if (!i) return i;
            if (nn(this)) {
              var a = an(this, { object: this.proxy_ || this.target_, name: e, type: Tn, newValue: t });
              if (!a) return null;
              t = a.newValue;
            }
            var s = Yn(e),
              o = { configurable: !dt.safeDescriptors || this.isPlainObject_, enumerable: !0, get: s.get, set: s.set };
            if (r) {
              if (!Reflect.defineProperty(this.target_, e, o)) return !1;
            } else h(this.target_, e, o);
            var c = new We(t, n, "ObservableObject.key", !1);
            this.values_.set(e, c), this.notifyPropertyAddition_(e, c.value_);
          } finally {
            mt();
          }
          return !0;
        }),
        (t.defineComputedProperty_ = function (e, t, n) {
          void 0 === n && (n = !1);
          try {
            ft();
            var r = this.delete_(e);
            if (!r) return r;
            if (nn(this)) if (!an(this, { object: this.proxy_ || this.target_, name: e, type: Tn, newValue: void 0 })) return null;
            t.name || (t.name = "ObservableObject.key"), (t.context = this.proxy_ || this.target_);
            var i = Yn(e),
              a = { configurable: !dt.safeDescriptors || this.isPlainObject_, enumerable: !1, get: i.get, set: i.set };
            if (n) {
              if (!Reflect.defineProperty(this.target_, e, a)) return !1;
            } else h(this.target_, e, a);
            this.values_.set(e, new $e(t)), this.notifyPropertyAddition_(e, void 0);
          } finally {
            mt();
          }
          return !0;
        }),
        (t.delete_ = function (e, t) {
          if ((void 0 === t && (t = !1), !k(this.target_, e))) return !0;
          if (nn(this) && !an(this, { object: this.proxy_ || this.target_, name: e, type: Un })) return null;
          try {
            var n, r;
            ft();
            var i,
              a = sn(this),
              s = this.values_.get(e),
              o = void 0;
            if (!s && a) o = null == (i = d(this.target_, e)) ? void 0 : i.value;
            if (t) {
              if (!Reflect.deleteProperty(this.target_, e)) return !1;
            } else delete this.target_[e];
            if (
              (s && (this.values_.delete(e), s instanceof We && (o = s.value_), _t(s)),
              this.keysAtom_.reportChanged(),
              null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(e in this.target_),
              a)
            ) {
              var c = {
                type: Un,
                observableKind: "object",
                object: this.proxy_ || this.target_,
                debugObjectName: this.name_,
                oldValue: o,
                name: e
              };
              0, a && cn(this, c);
            }
          } finally {
            mt();
          }
          return !0;
        }),
        (t.observe_ = function (e, t) {
          return on(this, e);
        }),
        (t.intercept_ = function (e) {
          return rn(this, e);
        }),
        (t.notifyPropertyAddition_ = function (e, t) {
          var n,
            r,
            i = sn(this);
          if (i) {
            var a = i
              ? {
                  type: Tn,
                  observableKind: "object",
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: e,
                  newValue: t
                }
              : null;
            i && cn(this, a);
          }
          null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(!0), this.keysAtom_.reportChanged();
        }),
        (t.ownKeys_ = function () {
          return this.keysAtom_.reportObserved(), D(this.target_);
        }),
        (t.keys_ = function () {
          return this.keysAtom_.reportObserved(), Object.keys(this.target_);
        }),
        e
      );
    })();
  function jn(e, t) {
    var n;
    if (k(e, z)) return e;
    var r = null != (n = null == t ? void 0 : t.name) ? n : "ObservableObject",
      i = new xn(
        e,
        new Map(),
        String(r),
        (function (e) {
          var t;
          return e ? (null != (t = e.defaultDecorator) ? t : ve(e)) : void 0;
        })(t)
      );
    return w(e, z, i), e;
  }
  var Mn = I("ObservableObjectAdministration", xn);
  function Yn(e) {
    return (
      kn[e] ||
      (kn[e] = {
        get: function () {
          return this[z].getObservablePropValue_(e);
        },
        set: function (t) {
          return this[z].setObservablePropValue_(e, t);
        }
      })
    );
  }
  function Gn(e) {
    return !!O(e) && Mn(e[z]);
  }
  function Fn(e, t, n) {
    var r;
    null == (r = e.target_[V]) || delete r[n];
  }
  var Bn,
    Kn,
    Vn = Jn(0),
    Hn = 0,
    Wn = function () {};
  (Bn = Wn),
    (Kn = Array.prototype),
    Object.setPrototypeOf
      ? Object.setPrototypeOf(Bn.prototype, Kn)
      : void 0 !== Bn.prototype.__proto__
      ? (Bn.prototype.__proto__ = Kn)
      : (Bn.prototype = Kn);
  var zn = (function (e, t, n) {
    function r(t, n, r, i) {
      var a;
      void 0 === r && (r = "ObservableArray"), void 0 === i && (i = !1), (a = e.call(this) || this);
      var s = new pn(r, n, i, !0);
      if (((s.proxy_ = F(a)), C(F(a), z, s), t && t.length)) {
        var o = Ke(!0);
        a.spliceWithArray(0, 0, t), Ve(o);
      }
      return Object.defineProperty(F(a), "0", Vn), a;
    }
    Y(r, e);
    var i = r.prototype;
    return (
      (i.concat = function () {
        this[z].atom_.reportObserved();
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return Array.prototype.concat.apply(
          this.slice(),
          t.map(function (e) {
            return On(e) ? e.slice() : e;
          })
        );
      }),
      (i[n] = function () {
        var e = this,
          t = 0;
        return ar({
          next: function () {
            return t < e.length ? { value: e[t++], done: !1 } : { done: !0, value: void 0 };
          }
        });
      }),
      j(r, [
        {
          key: "length",
          get: function () {
            return this[z].getArrayLength_();
          },
          set: function (e) {
            this[z].setArrayLength_(e);
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
  })(Wn, Symbol.toStringTag, Symbol.iterator);
  function Jn(e) {
    return {
      enumerable: !1,
      configurable: !0,
      get: function () {
        return this[z].get_(e);
      },
      set: function (t) {
        this[z].set_(e, t);
      }
    };
  }
  function qn(e) {
    h(zn.prototype, "" + e, Jn(e));
  }
  function $n(e) {
    if (e > Hn) {
      for (var t = Hn; t < e + 100; t++) qn(t);
      Hn = e;
    }
  }
  function Xn(e, t, n) {
    return new zn(e, t, n);
  }
  function Qn(e, t) {
    if ("object" == typeof e && null !== e) {
      if (On(e)) return void 0 !== t && o(23), e[z].atom_;
      if (Ln(e)) return e.atom_;
      if (Nn(e)) {
        if (void 0 === t) return e.keysAtom_;
        var n = e.data_.get(t) || e.hasMap_.get(t);
        return n || o(25, t, er(e)), n;
      }
      if (Gn(e)) {
        if (!t) return o(26);
        var r = e[z].values_.get(t);
        return r || o(27, t, er(e)), r;
      }
      if (q(e) || Xe(e) || At(e)) return e;
    } else if (S(e) && At(e[z])) return e[z];
    o(28);
  }
  function Zn(e, t) {
    return e || o(29), void 0 !== t ? Zn(Qn(e, t)) : q(e) || Xe(e) || At(e) || Nn(e) || Ln(e) ? e : e[z] ? e[z] : void o(24, e);
  }
  function er(e, t) {
    var n;
    if (void 0 !== t) n = Qn(e, t);
    else {
      if (kt(e)) return e.name;
      n = Gn(e) || Nn(e) || Ln(e) ? Zn(e) : Qn(e);
    }
    return n.name_;
  }
  Object.entries(fn).forEach(function (e) {
    var t = e[0],
      n = e[1];
    "concat" !== t && w(zn.prototype, t, n);
  }),
    $n(1e3);
  var tr = p.toString;
  function nr(e, t, n) {
    return void 0 === n && (n = -1), rr(e, t, n);
  }
  function rr(e, t, n, r, i) {
    if (e === t) return 0 !== e || 1 / e == 1 / t;
    if (null == e || null == t) return !1;
    if (e != e) return t != t;
    var a = typeof e;
    if ("function" !== a && "object" !== a && "object" != typeof t) return !1;
    var s = tr.call(e);
    if (s !== tr.call(t)) return !1;
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
    (e = ir(e)), (t = ir(t));
    var o = "[object Array]" === s;
    if (!o) {
      if ("object" != typeof e || "object" != typeof t) return !1;
      var c = e.constructor,
        u = t.constructor;
      if (c !== u && !(S(c) && c instanceof c && S(u) && u instanceof u) && "constructor" in e && "constructor" in t) return !1;
    }
    if (0 === n) return !1;
    n < 0 && (n = -1), (i = i || []);
    for (var l = (r = r || []).length; l--; ) if (r[l] === e) return i[l] === t;
    if ((r.push(e), i.push(t), o)) {
      if ((l = e.length) !== t.length) return !1;
      for (; l--; ) if (!rr(e[l], t[l], n - 1, r, i)) return !1;
    } else {
      var d,
        h = Object.keys(e);
      if (((l = h.length), Object.keys(t).length !== l)) return !1;
      for (; l--; ) if (!k(t, (d = h[l])) || !rr(e[d], t[d], n - 1, r, i)) return !1;
    }
    return r.pop(), i.pop(), !0;
  }
  function ir(e) {
    return On(e) ? e.slice() : R(e) || Nn(e) || N(e) || Ln(e) ? Array.from(e.entries()) : e;
  }
  function ar(e) {
    return (e[Symbol.iterator] = sr), e;
  }
  function sr() {
    return this;
  }
  function or(e, t) {
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
  function cr(e, t, n) {
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
    void 0 === u()[e] && o("MobX requires global '" + e + "' to be available or polyfilled");
  }),
    "object" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
      __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
        spy: function (e) {
          return console.warn("[mobx.spy] Is a no-op in production builds"), function () {};
        },
        extras: { getDebugName: er },
        $mobx: z
      });
  let ur = class {
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
    lr = class {
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
  var dr = function e(t) {
      for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
      if (!r.length) return t;
      var a = r.shift();
      if (pr(t) && pr(a)) {
        var s = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? or(Object(n), !0).forEach(function (t) {
                  cr(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : or(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
          }
          return e;
        })({}, t);
        for (var o in a)
          Object.prototype.hasOwnProperty.call(a, o) &&
            (pr(a[o]) && pr(s[o])
              ? (s[o] = e(s[o], a[o]))
              : Array.isArray(a[o]) && Array.isArray(s[o])
              ? (s[o] = hr(s[o], a[o]))
              : (s[o] = a[o]));
        return e(s, ...r);
      }
      return e(t, ...r);
    },
    hr = (e, t) => {
      var n = [...t],
        r = ((e, t) => {
          if (e.hasOwnProperty("name") && t.hasOwnProperty("name")) return "name";
          if (e.length > 0 && t.length > 0) {
            var n = e[0],
              r = t[0],
              i = function (i) {
                if (n.hasOwnProperty(i) && r.hasOwnProperty(i)) {
                  var a = e.map((e) => e[i]),
                    s = t.map((e) => e[i]),
                    o = new Set(a),
                    c = new Set(s);
                  if ("string" == typeof n[i] && o.size === e.length && c.size === t.length) return { v: i };
                }
              };
            for (var a in n) {
              var s = i(a);
              if ("object" == typeof s) return s.v;
            }
          }
          return null;
        })(e, t),
        i = t.map((e) => e[r]);
      return (
        e
          .map((e) => e[r])
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
    pr = (e) => null !== e && "object" == typeof e && !Array.isArray(e),
    gr = "local";
  let fr = class extends ur {
      constructor(e) {
        super(),
          (this._syncType = e),
          (this._event = void 0),
          (this._keys = new Set()),
          "none" !== this._syncType &&
            ((chrome || {}).storage || {}).onChanged &&
            chrome.storage.onChanged.addListener((e, t) => {
              if (this._event && t === this._syncType && this._keys.has(Object.keys(e)[0])) {
                var n = JSON.parse(lr.decode(Object.values(e)[0].newValue));
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
            var n = s(function* (n, i) {
              try {
                if ("none" === r._syncType) return void n(!0);
                var a = lr.encode(t),
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
            var r = s(function* (r, i) {
              try {
                if ("none" === n._syncType) return void r(t);
                var a = {};
                if (Object.keys(e).length > 0) {
                  var s = yield n._retrieve(e, n._syncType);
                  if (s) {
                    if (((a = lr.decode(s[e])), n._keys.add(e), !t)) return void r(JSON.parse(a));
                    r(dr(t, JSON.parse(a)));
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
            var n = s(function* (n, r) {
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
    mr = class extends EventTarget {
      constructor() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gr,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
          r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          i = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        super(),
          this._instance !== this &&
            ((this._instance = this),
            (this.state = e),
            (this.storageType = t),
            (this.storageKey = n),
            (this.merge = r),
            (function (e, t, n) {
              if (A(e)) return Ft(e, e, t, n);
              var r = jn(e, n)[z];
              if (!e[un]) {
                var i = Object.getPrototypeOf(e),
                  a = new Set([].concat(D(e), D(i)));
                a.delete("constructor"), a.delete(z), w(i, un, a);
              }
              ft();
              try {
                e[un].forEach(function (e) {
                  return r.make_(e, !t || !(e in t) || t[e]);
                });
              } finally {
                mt();
              }
            })(this),
            (this._persistentStore = null),
            (this._persistOn = i));
      }
      initialise() {
        var e = this;
        return s(function* () {
          return new Promise(
            (function () {
              var t = s(function* (t, n) {
                (e._persistentStore = new fr(e.storageType)),
                  e._persistentStore.onUpdate(
                    (function () {
                      var t = s(function* (t) {
                        JSON.stringify(e.state) !== JSON.stringify(t) && (e.state = t);
                      });
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })()
                  );
                var r = yield e._persistentStore.retrieve(e.storageKey, Qt(e.state));
                e.state && (e.state = r), e._startAutoSaving(e, e.storageKey), t(r);
              });
              return function (e, n) {
                return t.apply(this, arguments);
              };
            })()
          );
        })();
      }
      set persist(e) {
        (this._persistOn = e), e && this.save();
      }
      save() {
        this._storeOnSave(this, this.storageKey, !0);
      }
      get stateJSON() {
        return Qt(this.state);
      }
      _startAutoSaving(e, t) {
        var n = this;
        Ut(
          s(function* () {
            n._storeOnSave(e, t), n.dispatchEvent(new CustomEvent("onStoreUpdated"));
          })
        );
      }
      _storeOnSave(e, t) {
        var n = arguments,
          r = this;
        return s(function* () {
          var i = n.length > 2 && void 0 !== n[2] && n[2];
          (r._persistOn || i) && (yield r._persistentStore.store(t, Qt(e.state), r.merge));
        })();
      }
    };
  var vr = 1,
    _r = 2,
    yr = 3,
    br = 4,
    Sr = 5,
    Er = 6,
    Or = 7,
    Ar = 8;
  class Tr extends EventTarget {
    constructor() {
      super(),
        (this.FRAMEKEY = "texthelp-cfe-9828"),
        (this.SESSIONKEY = "texthelp-cfe-9829"),
        (this._frameId = null),
        (this._sessionId = null);
    }
    getSessionId() {
      return s(function* () {
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
      return s(function* () {
        return new Promise(
          (function () {
            var t = s(function* (t, n) {
              (e._frameId = Tr.getGuid()),
                (e._sessionId = yield e.getSessionId()),
                chrome.storage.onChanged.addListener((t, n) => {
                  var r = function () {
                    if (i == e.FRAMEKEY) {
                      var n = JSON.parse(t[e.FRAMEKEY].newValue);
                      switch (
                        ((n.data.source = {}), (n.data.source.sessionId = n.sessionId), (n.data.source.frameId = n.frameId), n.type)
                      ) {
                        case Or:
                          "undefined" != typeof WorkerGlobalScope &&
                            "function" == typeof importScripts &&
                            navigator instanceof WorkerNavigator &&
                            e.dispatchEvent(new CustomEvent(n.name, { detail: n.data }));
                          break;
                        case vr:
                          e.dispatchEvent(new CustomEvent(n.name, { detail: n.data }));
                          break;
                        case yr:
                          n.sessionId === e._sessionId && e.dispatchEvent(new CustomEvent(n.name, { detail: n.data }));
                          break;
                        case _r:
                          chrome.storage.local.get(
                            ["activeFrame"],
                            (function () {
                              var t = s(function* (t) {
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
                        case br:
                          chrome.storage.local.get(
                            ["activeFrame"],
                            (function () {
                              var t = s(function* (t) {
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
                        case Sr:
                          "undefined" != typeof window &&
                            window.self === window.top &&
                            e.dispatchEvent(new CustomEvent(n.name, { detail: n.data }));
                          break;
                        case Er:
                          "undefined" != typeof window &&
                            window.self === window.top &&
                            n.sessionId === e._sessionId &&
                            e.dispatchEvent(new CustomEvent(n.name, { detail: n.data }));
                          break;
                        case Ar:
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
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : _r,
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
  function wr(e, t) {
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
  function Cr(e, t, n) {
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
  let Ir = class {
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
    Rr = class {
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
  const Nr = (e, ...t) => {
      if (!t.length) return e;
      const n = t.shift();
      if (Dr(e) && Dr(n)) {
        const r = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? wr(Object(n), !0).forEach(function (t) {
                  Cr(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : wr(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
          }
          return e;
        })({}, e);
        for (const e in n)
          Object.prototype.hasOwnProperty.call(n, e) &&
            (Dr(n[e]) && Dr(r[e])
              ? (r[e] = Nr(r[e], n[e]))
              : Array.isArray(n[e]) && Array.isArray(r[e])
              ? (r[e] = Pr(r[e], n[e]))
              : (r[e] = n[e]));
        return Nr(r, ...t);
      }
      return Nr(e, ...t);
    },
    Pr = (e, t) => {
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
        i = t.map((e) => e[r]);
      return (
        e
          .map((e) => e[r])
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
    Dr = (e) => null !== e && "object" == typeof e && !Array.isArray(e),
    Lr = "sync",
    kr = "local",
    Ur = "none";
  let xr = class extends Ir {
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
            let n = JSON.parse(Rr.decode(Object.values(e)[0].newValue));
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
          const i = Rr.encode(t),
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
              if (((i = Rr.decode(a[e])), n._keys.add(e), !t)) return void r(JSON.parse(i));
              r(Nr(t, JSON.parse(i)));
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
  const jr = Object.freeze({
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
    Mr = Object.freeze({ TOP: "docked-top", FLOAT: "float", SELECTOR: "selector" });
  Object.freeze({
    "https://docs.google.com/document/*https://assignments.google.com*": {
      dock: Mr.TOP,
      supported: [
        jr.PREDICTION,
        jr.DICTIONARY,
        jr.PICTUREDICTIONARY,
        jr.PLAY,
        jr.PAUSE,
        jr.STOP,
        jr.SCREENSHOTREADER,
        jr.AUDIOMAKER,
        jr.WEBSEARCH,
        jr.SCREENMASKING,
        jr.TALKANDTYPE,
        jr.TRANSLATOR,
        jr.STUDYBLUE,
        jr.STUDYPINK,
        jr.STUDYYELLOW,
        jr.STUDYGREEN,
        jr.STUDYCLEAR,
        jr.STUDYCOLLECT,
        jr.VOCABLIST,
        jr.VOICENOTE,
        jr.CHECKIT,
        jr.PRACTICEREADINGALOUD,
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
      dock: Mr.TOP,
      supported: [
        jr.PREDICTION,
        jr.DICTIONARY,
        jr.PICTUREDICTIONARY,
        jr.PLAY,
        jr.PAUSE,
        jr.STOP,
        jr.SCREENSHOTREADER,
        jr.AUDIOMAKER,
        jr.WEBSEARCH,
        jr.SCREENMASKING,
        jr.TALKANDTYPE,
        jr.TRANSLATOR,
        jr.STUDYBLUE,
        jr.STUDYPINK,
        jr.STUDYYELLOW,
        jr.STUDYGREEN,
        jr.STUDYCLEAR,
        jr.STUDYCOLLECT,
        jr.VOCABLIST,
        jr.VOICENOTE,
        jr.CHECKIT,
        jr.PRACTICEREADINGALOUD,
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
      dock: Mr.TOP,
      supported: [
        jr.PREDICTION,
        jr.DICTIONARY,
        jr.PICTUREDICTIONARY,
        jr.PLAY,
        jr.PAUSE,
        jr.STOP,
        jr.SCREENSHOTREADER,
        jr.AUDIOMAKER,
        jr.WEBSEARCH,
        jr.SCREENMASKING,
        jr.TALKANDTYPE,
        jr.TRANSLATOR,
        jr.STUDYBLUE,
        jr.STUDYPINK,
        jr.STUDYYELLOW,
        jr.STUDYGREEN,
        jr.STUDYCLEAR,
        jr.STUDYCOLLECT,
        jr.VOCABLIST,
        jr.VOICENOTE,
        jr.CHECKIT,
        jr.PRACTICEREADINGALOUD,
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
      dock: Mr.FLOAT,
      supported: [
        jr.CLICKTOSPEAK,
        jr.DICTIONARY,
        jr.PICTUREDICTIONARY,
        jr.PLAY,
        jr.PAUSE,
        jr.STOP,
        jr.AUDIOMAKER,
        jr.WEBSEARCH,
        jr.SCREENMASKING,
        jr.TRANSLATOR,
        jr.STUDYBLUE,
        jr.STUDYPINK,
        jr.STUDYYELLOW,
        jr.STUDYGREEN,
        jr.STUDYCLEAR,
        jr.STUDYCOLLECT,
        jr.VOCABLIST,
        jr.PRACTICEREADINGALOUD,
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
      dock: Mr.TOP,
      supported: [
        jr.PREDICTION,
        jr.DICTIONARY,
        jr.PICTUREDICTIONARY,
        jr.PLAY,
        jr.PAUSE,
        jr.STOP,
        jr.SCREENSHOTREADER,
        jr.AUDIOMAKER,
        jr.WEBSEARCH,
        jr.SCREENMASKING,
        jr.TALKANDTYPE,
        jr.TRANSLATOR,
        jr.STUDYBLUE,
        jr.STUDYPINK,
        jr.STUDYYELLOW,
        jr.STUDYGREEN,
        jr.STUDYCLEAR,
        jr.STUDYCOLLECT,
        jr.VOCABLIST,
        jr.VOICENOTE,
        jr.CHECKIT,
        jr.PRACTICEREADINGALOUD,
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
      dock: Mr.TOP,
      supported: [
        jr.PREDICTION,
        jr.DICTIONARY,
        jr.PICTUREDICTIONARY,
        jr.PLAY,
        jr.PAUSE,
        jr.STOP,
        jr.SCREENSHOTREADER,
        jr.AUDIOMAKER,
        jr.WEBSEARCH,
        jr.SCREENMASKING,
        jr.TALKANDTYPE,
        jr.TRANSLATOR,
        jr.STUDYBLUE,
        jr.STUDYPINK,
        jr.STUDYYELLOW,
        jr.STUDYGREEN,
        jr.STUDYCLEAR,
        jr.VOICENOTE,
        jr.PRACTICEREADINGALOUD,
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
      dock: Mr.FLOAT,
      supported: [
        jr.PREDICTION,
        jr.CLICKTOSPEAK,
        jr.DICTIONARY,
        jr.PICTUREDICTIONARY,
        jr.PLAY,
        jr.PAUSE,
        jr.STOP,
        jr.SCREENSHOTREADER,
        jr.AUDIOMAKER,
        jr.WEBSEARCH,
        jr.SCREENMASKING,
        jr.TALKANDTYPE,
        jr.TRANSLATOR,
        jr.STUDYBLUE,
        jr.STUDYPINK,
        jr.STUDYYELLOW,
        jr.STUDYGREEN,
        jr.STUDYCLEAR,
        jr.PRACTICEREADINGALOUD,
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
      dock: Mr.TOP,
      supported: [
        jr.PREDICTION,
        jr.CLICKTOSPEAK,
        jr.DICTIONARY,
        jr.PICTUREDICTIONARY,
        jr.PLAY,
        jr.PAUSE,
        jr.STOP,
        jr.SCREENMASKING,
        jr.TALKANDTYPE,
        jr.TRANSLATOR,
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
      dock: Mr.TOP,
      supported: [
        jr.PREDICTION,
        jr.CLICKTOSPEAK,
        jr.DICTIONARY,
        jr.PICTUREDICTIONARY,
        jr.PLAY,
        jr.PAUSE,
        jr.STOP,
        jr.SCREENSHOTREADER,
        jr.AUDIOMAKER,
        jr.WEBSEARCH,
        jr.SCREENMASKING,
        jr.TALKANDTYPE,
        jr.TRANSLATOR,
        jr.STUDYBLUE,
        jr.STUDYPINK,
        jr.STUDYYELLOW,
        jr.STUDYGREEN,
        jr.STUDYCLEAR,
        jr.PRACTICEREADINGALOUD,
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
      dock: Mr.TOP,
      supported: [
        jr.PREDICTION,
        jr.CLICKTOSPEAK,
        jr.DICTIONARY,
        jr.PICTUREDICTIONARY,
        jr.PLAY,
        jr.PAUSE,
        jr.STOP,
        jr.SCREENSHOTREADER,
        jr.AUDIOMAKER,
        jr.WEBSEARCH,
        jr.SCREENMASKING,
        jr.TALKANDTYPE,
        jr.TRANSLATOR,
        jr.STUDYBLUE,
        jr.STUDYPINK,
        jr.STUDYYELLOW,
        jr.STUDYGREEN,
        jr.STUDYCLEAR,
        jr.PRACTICEREADINGALOUD,
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
      dock: Mr.SELECTOR,
      selector: [
        "#WacFrame_Word_0",
        "#WebApplicationFrame[allow*=UKC-word-edit]",
        "#WebApplicationFrame[allow*=UKC-onenote]",
        "#WebApplicationFrame[allow*=onenote]"
      ],
      supported: [
        jr.PREDICTION,
        jr.DICTIONARY,
        jr.PICTUREDICTIONARY,
        jr.PLAY,
        jr.PAUSE,
        jr.STOP,
        jr.SCREENSHOTREADER,
        jr.AUDIOMAKER,
        jr.WEBSEARCH,
        jr.SCREENMASKING,
        jr.TALKANDTYPE,
        jr.TRANSLATOR,
        jr.STUDYBLUE,
        jr.STUDYPINK,
        jr.STUDYYELLOW,
        jr.STUDYGREEN,
        jr.STUDYCLEAR,
        jr.STUDYCOLLECT,
        jr.VOCABLIST,
        jr.PRACTICEREADINGALOUD,
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
      dock: Mr.SELECTOR,
      selector: [
        "#WacFrame_Word_0",
        "#WebApplicationFrame[allow*=UKC-word-edit]",
        "#WebApplicationFrame[allow*=UKC-onenote]",
        "#WebApplicationFrame[allow*=onenote]"
      ],
      supported: [
        jr.PREDICTION,
        jr.DICTIONARY,
        jr.PICTUREDICTIONARY,
        jr.PLAY,
        jr.PAUSE,
        jr.STOP,
        jr.SCREENSHOTREADER,
        jr.AUDIOMAKER,
        jr.WEBSEARCH,
        jr.SCREENMASKING,
        jr.TALKANDTYPE,
        jr.TRANSLATOR,
        jr.STUDYBLUE,
        jr.STUDYPINK,
        jr.STUDYYELLOW,
        jr.STUDYGREEN,
        jr.STUDYCLEAR,
        jr.STUDYCOLLECT,
        jr.VOCABLIST,
        jr.PRACTICEREADINGALOUD,
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
      dock: Mr.TOP,
      supported: [
        jr.PREDICTION,
        jr.CLICKTOSPEAK,
        jr.DICTIONARY,
        jr.PICTUREDICTIONARY,
        jr.PLAY,
        jr.PAUSE,
        jr.STOP,
        jr.SCREENSHOTREADER,
        jr.AUDIOMAKER,
        jr.WEBSEARCH,
        jr.SCREENMASKING,
        jr.TALKANDTYPE,
        jr.TRANSLATOR,
        jr.STUDYBLUE,
        jr.STUDYPINK,
        jr.STUDYYELLOW,
        jr.STUDYGREEN,
        jr.STUDYCLEAR,
        jr.PRACTICEREADINGALOUD,
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
      dock: Mr.TOP,
      supported: [
        jr.PREDICTION,
        jr.DICTIONARY,
        jr.PICTUREDICTIONARY,
        jr.PLAY,
        jr.PAUSE,
        jr.STOP,
        jr.SCREENSHOTREADER,
        jr.AUDIOMAKER,
        jr.WEBSEARCH,
        jr.SCREENMASKING,
        jr.TALKANDTYPE,
        jr.TRANSLATOR,
        jr.STUDYBLUE,
        jr.STUDYPINK,
        jr.STUDYYELLOW,
        jr.STUDYGREEN,
        jr.STUDYCLEAR,
        jr.STUDYCOLLECT,
        jr.VOCABLIST,
        jr.PRACTICEREADINGALOUD,
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
      dock: Mr.TOP,
      supported: [
        jr.PREDICTION,
        jr.DICTIONARY,
        jr.PICTUREDICTIONARY,
        jr.PLAY,
        jr.PAUSE,
        jr.STOP,
        jr.SCREENSHOTREADER,
        jr.AUDIOMAKER,
        jr.WEBSEARCH,
        jr.SCREENMASKING,
        jr.TALKANDTYPE,
        jr.TRANSLATOR,
        jr.STUDYBLUE,
        jr.STUDYPINK,
        jr.STUDYYELLOW,
        jr.STUDYGREEN,
        jr.STUDYCLEAR,
        jr.STUDYCOLLECT,
        jr.VOCABLIST,
        jr.PRACTICEREADINGALOUD,
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
      dock: Mr.TOP,
      supported: [
        jr.PREDICTION,
        jr.DICTIONARY,
        jr.PICTUREDICTIONARY,
        jr.PLAY,
        jr.PAUSE,
        jr.STOP,
        jr.SCREENSHOTREADER,
        jr.AUDIOMAKER,
        jr.WEBSEARCH,
        jr.SCREENMASKING,
        jr.TALKANDTYPE,
        jr.TRANSLATOR,
        jr.STUDYBLUE,
        jr.STUDYPINK,
        jr.STUDYYELLOW,
        jr.STUDYGREEN,
        jr.STUDYCLEAR,
        jr.STUDYCOLLECT,
        jr.VOCABLIST,
        jr.PRACTICEREADINGALOUD,
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
      dock: Mr.SELECTOR,
      selector: ["#WacFrame_Word_0", "#WebApplicationFrame[allow*=UKC-word-edit]", "#WebApplicationFrame[allow*=UKC-onenote]"],
      supported: [
        jr.PREDICTION,
        jr.DICTIONARY,
        jr.PICTUREDICTIONARY,
        jr.PLAY,
        jr.PAUSE,
        jr.STOP,
        jr.SCREENSHOTREADER,
        jr.AUDIOMAKER,
        jr.WEBSEARCH,
        jr.SCREENMASKING,
        jr.TALKANDTYPE,
        jr.TRANSLATOR,
        jr.STUDYBLUE,
        jr.STUDYPINK,
        jr.STUDYYELLOW,
        jr.STUDYGREEN,
        jr.STUDYCLEAR,
        jr.STUDYCOLLECT,
        jr.VOCABLIST,
        jr.PRACTICEREADINGALOUD,
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
      dock: Mr.FLOAT,
      supported: [
        jr.PREDICTION,
        jr.CLICKTOSPEAK,
        jr.DICTIONARY,
        jr.PICTUREDICTIONARY,
        jr.PLAY,
        jr.PAUSE,
        jr.STOP,
        jr.SCREENSHOTREADER,
        jr.AUDIOMAKER,
        jr.WEBSEARCH,
        jr.SCREENMASKING,
        jr.TALKANDTYPE,
        jr.TRANSLATOR,
        jr.STUDYBLUE,
        jr.STUDYPINK,
        jr.STUDYYELLOW,
        jr.STUDYGREEN,
        jr.STUDYCLEAR,
        jr.STUDYCOLLECT,
        jr.VOCABLIST,
        jr.SIMPLIFY,
        jr.REWORDIFY,
        jr.PRACTICEREADINGALOUD,
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
      dock: Mr.TOP,
      supported: [
        jr.PREDICTION,
        jr.DICTIONARY,
        jr.PICTUREDICTIONARY,
        jr.PLAY,
        jr.PAUSE,
        jr.STOP,
        jr.SCREENSHOTREADER,
        jr.AUDIOMAKER,
        jr.WEBSEARCH,
        jr.SCREENMASKING,
        jr.TALKANDTYPE,
        jr.TRANSLATOR,
        jr.STUDYBLUE,
        jr.STUDYPINK,
        jr.STUDYYELLOW,
        jr.STUDYGREEN,
        jr.STUDYCLEAR,
        jr.STUDYCOLLECT,
        jr.VOCABLIST,
        jr.PRACTICEREADINGALOUD,
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
      dock: Mr.TOP,
      supported: [
        jr.CLICKTOSPEAK,
        jr.DICTIONARY,
        jr.PICTUREDICTIONARY,
        jr.PLAY,
        jr.PAUSE,
        jr.STOP,
        jr.WEBSEARCH,
        jr.SCREENMASKING,
        jr.TRANSLATOR,
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
      dock: Mr.TOP,
      supported: [
        jr.CLICKTOSPEAK,
        jr.DICTIONARY,
        jr.PICTUREDICTIONARY,
        jr.PLAY,
        jr.PAUSE,
        jr.STOP,
        jr.WEBSEARCH,
        jr.SCREENMASKING,
        jr.TRANSLATOR,
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
      dock: Mr.TOP,
      supported: [
        jr.CLICKTOSPEAK,
        jr.DICTIONARY,
        jr.PICTUREDICTIONARY,
        jr.PLAY,
        jr.PAUSE,
        jr.STOP,
        jr.WEBSEARCH,
        jr.SCREENMASKING,
        jr.TRANSLATOR,
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
      dock: Mr.TOP,
      supported: [
        jr.CLICKTOSPEAK,
        jr.DICTIONARY,
        jr.PICTUREDICTIONARY,
        jr.PLAY,
        jr.PAUSE,
        jr.STOP,
        jr.WEBSEARCH,
        jr.SCREENMASKING,
        jr.TRANSLATOR,
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
      dock: Mr.TOP,
      supported: [
        jr.CLICKTOSPEAK,
        jr.DICTIONARY,
        jr.PICTUREDICTIONARY,
        jr.PLAY,
        jr.PAUSE,
        jr.STOP,
        jr.WEBSEARCH,
        jr.SCREENMASKING,
        jr.TRANSLATOR,
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
      dock: Mr.FLOAT,
      supported: [
        jr.PREDICTION,
        jr.CLICKTOSPEAK,
        jr.DICTIONARY,
        jr.PICTUREDICTIONARY,
        jr.PLAY,
        jr.PAUSE,
        jr.STOP,
        jr.SCREENSHOTREADER,
        jr.AUDIOMAKER,
        jr.WEBSEARCH,
        jr.SCREENMASKING,
        jr.TALKANDTYPE,
        jr.TRANSLATOR,
        jr.STUDYBLUE,
        jr.STUDYPINK,
        jr.STUDYYELLOW,
        jr.STUDYGREEN,
        jr.STUDYCLEAR,
        jr.STUDYCOLLECT,
        jr.VOCABLIST,
        jr.SIMPLIFY,
        jr.REWORDIFY,
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
      dock: Mr.FLOAT,
      supported: [
        jr.PREDICTION,
        jr.CLICKTOSPEAK,
        jr.DICTIONARY,
        jr.PICTUREDICTIONARY,
        jr.PLAY,
        jr.PAUSE,
        jr.STOP,
        jr.SCREENSHOTREADER,
        jr.AUDIOMAKER,
        jr.WEBSEARCH,
        jr.SCREENMASKING,
        jr.TALKANDTYPE,
        jr.TRANSLATOR,
        jr.STUDYBLUE,
        jr.STUDYPINK,
        jr.STUDYYELLOW,
        jr.STUDYGREEN,
        jr.STUDYCLEAR,
        jr.STUDYCOLLECT,
        jr.VOCABLIST,
        jr.SIMPLIFY,
        jr.REWORDIFY,
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
      dock: Mr.TOP,
      supported: [
        jr.CLICKTOSPEAK,
        jr.DICTIONARY,
        jr.PICTUREDICTIONARY,
        jr.PLAY,
        jr.PAUSE,
        jr.STOP,
        jr.AUDIOMAKER,
        jr.WEBSEARCH,
        jr.SCREENMASKING,
        jr.TRANSLATOR,
        jr.STUDYBLUE,
        jr.STUDYPINK,
        jr.STUDYYELLOW,
        jr.STUDYGREEN,
        jr.STUDYCLEAR,
        jr.STUDYCOLLECT,
        jr.VOCABLIST,
        jr.PRACTICEREADINGALOUD,
        jr.REWORDIFY,
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
      dock: Mr.TOP,
      supported: [
        jr.CLICKTOSPEAK,
        jr.DICTIONARY,
        jr.PICTUREDICTIONARY,
        jr.PLAY,
        jr.PAUSE,
        jr.STOP,
        jr.AUDIOMAKER,
        jr.WEBSEARCH,
        jr.SCREENMASKING,
        jr.TRANSLATOR,
        jr.STUDYBLUE,
        jr.STUDYPINK,
        jr.STUDYYELLOW,
        jr.STUDYGREEN,
        jr.STUDYCLEAR,
        jr.STUDYCOLLECT,
        jr.VOCABLIST,
        jr.PRACTICEREADINGALOUD,
        jr.REWORDIFY,
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
      dock: Mr.TOP,
      supported: [
        jr.CLICKTOSPEAK,
        jr.DICTIONARY,
        jr.PICTUREDICTIONARY,
        jr.PLAY,
        jr.PAUSE,
        jr.STOP,
        jr.AUDIOMAKER,
        jr.WEBSEARCH,
        jr.SCREENMASKING,
        jr.TRANSLATOR,
        jr.STUDYBLUE,
        jr.STUDYPINK,
        jr.STUDYYELLOW,
        jr.STUDYGREEN,
        jr.STUDYCLEAR,
        jr.STUDYCOLLECT,
        jr.VOCABLIST,
        jr.PRACTICEREADINGALOUD,
        jr.REWORDIFY,
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
      dock: Mr.TOP,
      supported: [
        jr.CLICKTOSPEAK,
        jr.DICTIONARY,
        jr.PICTUREDICTIONARY,
        jr.PLAY,
        jr.PAUSE,
        jr.STOP,
        jr.AUDIOMAKER,
        jr.WEBSEARCH,
        jr.SCREENMASKING,
        jr.TRANSLATOR,
        jr.STUDYBLUE,
        jr.STUDYPINK,
        jr.STUDYYELLOW,
        jr.STUDYGREEN,
        jr.STUDYCLEAR,
        jr.STUDYCOLLECT,
        jr.VOCABLIST,
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
      dock: Mr.TOP,
      supported: [
        jr.CLICKTOSPEAK,
        jr.DICTIONARY,
        jr.PICTUREDICTIONARY,
        jr.PLAY,
        jr.PAUSE,
        jr.STOP,
        jr.AUDIOMAKER,
        jr.WEBSEARCH,
        jr.SCREENMASKING,
        jr.TRANSLATOR,
        jr.STUDYBLUE,
        jr.STUDYPINK,
        jr.STUDYYELLOW,
        jr.STUDYGREEN,
        jr.STUDYCLEAR,
        jr.STUDYCOLLECT,
        jr.VOCABLIST,
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
      dock: Mr.TOP,
      supported: [
        jr.CLICKTOSPEAK,
        jr.DICTIONARY,
        jr.PICTUREDICTIONARY,
        jr.PLAY,
        jr.PAUSE,
        jr.STOP,
        jr.AUDIOMAKER,
        jr.WEBSEARCH,
        jr.SCREENMASKING,
        jr.TRANSLATOR,
        jr.STUDYBLUE,
        jr.STUDYPINK,
        jr.STUDYYELLOW,
        jr.STUDYGREEN,
        jr.STUDYCLEAR,
        jr.STUDYCOLLECT,
        jr.VOCABLIST,
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
      dock: Mr.TOP,
      supported: [
        jr.PREDICTION,
        jr.CLICKTOSPEAK,
        jr.DICTIONARY,
        jr.PICTUREDICTIONARY,
        jr.PLAY,
        jr.PAUSE,
        jr.STOP,
        jr.SCREENSHOTREADER,
        jr.AUDIOMAKER,
        jr.WEBSEARCH,
        jr.SCREENMASKING,
        jr.TALKANDTYPE,
        jr.TRANSLATOR,
        jr.STUDYBLUE,
        jr.STUDYPINK,
        jr.STUDYYELLOW,
        jr.STUDYGREEN,
        jr.STUDYCLEAR,
        jr.STUDYCOLLECT,
        jr.VOCABLIST,
        jr.SIMPLIFY,
        jr.REWORDIFY,
        jr.PRACTICEREADINGALOUD,
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
      dock: Mr.TOP,
      supported: [
        jr.PREDICTION,
        jr.CLICKTOSPEAK,
        jr.DICTIONARY,
        jr.PICTUREDICTIONARY,
        jr.PLAY,
        jr.PAUSE,
        jr.STOP,
        jr.SCREENSHOTREADER,
        jr.AUDIOMAKER,
        jr.WEBSEARCH,
        jr.SCREENMASKING,
        jr.TALKANDTYPE,
        jr.TRANSLATOR,
        jr.STUDYBLUE,
        jr.STUDYPINK,
        jr.STUDYYELLOW,
        jr.STUDYGREEN,
        jr.STUDYCLEAR,
        jr.STUDYCOLLECT,
        jr.VOCABLIST,
        jr.SIMPLIFY,
        jr.REWORDIFY,
        jr.PRACTICEREADINGALOUD,
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
      dock: Mr.FLOAT,
      supported: [
        jr.PLAY,
        jr.PAUSE,
        jr.STOP,
        jr.PREDICTION,
        jr.CLICKTOSPEAK,
        jr.DICTIONARY,
        jr.PICTUREDICTIONARY,
        jr.SCREENSHOTREADER,
        jr.AUDIOMAKER,
        jr.WEBSEARCH,
        jr.SCREENMASKING,
        jr.TALKANDTYPE,
        jr.TRANSLATOR,
        jr.STUDYBLUE,
        jr.STUDYPINK,
        jr.STUDYYELLOW,
        jr.STUDYGREEN,
        jr.STUDYCLEAR,
        jr.STUDYCOLLECT,
        jr.VOCABLIST,
        jr.SIMPLIFY,
        jr.REWORDIFY,
        jr.PRACTICEREADINGALOUD,
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
  const Yr = Object.freeze({ GROUP: "group", DOMAIN: "domain", SINGLE: "single" }),
    Gr = Object.freeze({ FREEMIUM: "freemium", PREMIUM: "premium", TRIAL: "trial" });
  const Fr = new (class extends mr {
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
          licensetype: Yr.SINGLE,
          licensesubscription: Gr.FREEMIUM,
          expiry: e.toISOString().split("T")[0],
          authcode: void 0,
          features: t,
          meta: {}
        };
      super(
        {
          license: {
            lastupdated: void 0,
            licensetype: Yr.SINGLE,
            licensesubscription: Gr.FREEMIUM,
            expiry: e.toISOString().split("T")[0],
            authcode: void 0,
            features: t,
            meta: {}
          },
          lastlicense: void 0
        },
        kr,
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
        (e.licensesubscription = Gr.FREEMIUM),
        (e.licensetype = Yr.SINGLE),
        e.daysleft > 0 && !n ? (e.licensesubscription = Gr.PREMIUM) : e.daysleft > 0 && n && (e.licensesubscription = Gr.TRIAL),
        r ? (e.licensetype = Yr.DOMAIN) : "group" == e.licence_type.toLowerCase() && (e.licensetype = Yr.GROUP),
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
          "Check It": jr.CHECKIT,
          Prediction: jr.PREDICTION,
          Dictionary: jr.DICTIONARY,
          "Picture Dictionary": jr.PICTUREDICTIONARY,
          Play: jr.PLAY,
          "Screenshot Reader": jr.SCREENSHOTREADER,
          "Audio Maker": jr.AUDIOMAKER,
          "Screen Masking": jr.SCREENMASKING,
          "Web Search": jr.WEBSEARCH,
          "Talk&Type": jr.TALKANDTYPE,
          Translator: jr.TRANSLATOR,
          "Vocabulary List": jr.VOCABLIST,
          "Voice Note": jr.VOICENOTE,
          "Simplify Page": jr.SIMPLIFY,
          Rewordify: jr.REWORDIFY,
          "Practice Reading Aloud": jr.PRACTICEREADINGALOUD,
          "Erase Highlights": jr.STUDYCLEAR
        },
        r = t.features,
        i = Object.keys(r).reduce((e, t) => (void 0 !== n[t] && (e[n[t]] = r[t]), e), {}),
        a = e({}, this.defaultFeatures, i);
      void 0 === r.Highlights && (r.Highlights = !1),
        (a[jr.STUDYYELLOW] = r.Highlights),
        (a[jr.STUDYGREEN] = r.Highlights),
        (a[jr.STUDYBLUE] = r.Highlights),
        (a[jr.STUDYPINK] = r.Highlights),
        (a[jr.STUDYCOLLECT] = r.Highlights),
        (a[jr.STUDYCLEAR] = r.Highlights),
        void 0 === r.Play && (r.Play = !0),
        (a[jr.PAUSE] = r.Play),
        (a[jr.STOP] = r.Play),
        (a[jr.CLICKTOSPEAK] = r.Play),
        void 0 === r["Practice Reading Aloud"] && (a[jr.PRACTICEREADINGALOUD] = !0),
        void 0 === r.Translator && (a[jr.TRANSLATOR] = !0),
        (this.state.license.features = JSON.parse(JSON.stringify(a)));
    }
  })();
  const Br = new (class extends mr {
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
      super({ features: e }, kr, "th.rw4gc.datadesk.store"), (this.defaultFeatures = e);
    }
    set features(e) {
      this._mapFeatures(e);
    }
    resetFeatures() {
      this.state.features = this.defaultFeatures;
    }
    _mapFeatures(e) {
      let t = {
          "Check It": jr.CHECKIT,
          Prediction: jr.PREDICTION,
          Dictionary: jr.DICTIONARY,
          "Picture Dictionary": jr.PICTUREDICTIONARY,
          "Hover Speech": jr.CLICKTOSPEAK,
          Play: jr.PLAY,
          "Screenshot Reader": jr.SCREENSHOTREADER,
          "Audio Maker": jr.AUDIOMAKER,
          "Screen Masking": jr.SCREENMASKING,
          "Web Search": jr.WEBSEARCH,
          "Talk&Type": jr.TALKANDTYPE,
          Translator: jr.TRANSLATOR,
          "Vocabulary List": jr.VOCABLIST,
          "Simplify Page": jr.SIMPLIFY,
          Rewordify: jr.REWORDIFY,
          "Practice Reading Aloud": jr.PRACTICEREADINGALOUD,
          "Erase Highlights": jr.STUDYCLEAR,
          "Voice Note": jr.VOICENOTE
        },
        n = JSON.parse(JSON.stringify(this.defaultFeatures)),
        r = Object.keys(e).reduce((n, r) => (void 0 !== t[r] && (n[t[r]] = this._parseBoolean(e[r])), n), {});
      Object.keys(r).forEach((e) => {
        n[e] = r[e];
      });
      let i = !1;
      (i = void 0 === e.Highlights || this._parseBoolean(e.Highlights)),
        (n[jr.STUDYYELLOW] = i),
        (n[jr.STUDYGREEN] = i),
        (n[jr.STUDYBLUE] = i),
        (n[jr.STUDYPINK] = i),
        (n[jr.STUDYCOLLECT] = i),
        (n[jr.STUDYCLEAR] = i),
        (i = void 0 === e.Play || this._parseBoolean(e.Play)),
        (n[jr.PAUSE] = i),
        (n[jr.STOP] = i),
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
  const Kr = new (class extends mr {
      constructor() {
        super({ licenseType: "Default", notificationVersion: 20230813, showNotification: !1 }, Lr, "th.rw4gc.Application.store");
      }
      setNotificationVersion(e) {
        this.state.notificationVersion = e;
      }
      setShowNotification(e) {
        this.state.showNotification = e;
      }
      setLicenseType(e) {
        this.state.licenseType = e;
      }
    })(),
    Vr = "color",
    Hr = "position";
  class Wr {
    getToolbarBrowserConfig(e) {
      throw new Error("Not implemented");
    }
    setToolbarPageConfig(e) {
      throw new Error("Not implemented");
    }
  }
  const zr = ({ name: e, icon: t = e, locale_ID: n = "toolbar_button_" + e, scope: r = br }) => ({
      name: e,
      icon: t,
      locale_ID: n,
      scope: r
    }),
    Jr = (t, { name: n, enabled: r = !0, toggled: i = !1, displayed: a = !1, supported: s = !0 }) => {
      (t.toolbar.buttons = e({}, t.toolbar.buttons, qr({ name: n, enabled: r, toggled: i, displayed: a, supported: s }))),
        (t.features = e({}, t.features, $r({ name: n, enabled: r })));
    },
    qr = ({ name: e, enabled: t = !0, toggled: n = !1, displayed: r = !1, policyEnabled: i = !0, supported: a = !0 }) => ({
      [e]: { enabled: t, toggled: n, displayed: r, policyEnabled: i, supported: a }
    }),
    $r = ({ name: e, enabled: t = !1 }) => ({ [e]: t });
  class Xr extends Wr {
    getToolbarBrowserConfig() {
      return [
        zr({ name: jr.PLAY, scope: Er }),
        zr({ name: jr.PAUSE, scope: vr }),
        zr({ name: jr.STOP, scope: vr }),
        zr({ name: jr.CHECKIT }),
        zr({ name: jr.PREDICTION }),
        zr({ name: jr.DICTIONARY }),
        zr({ name: jr.PICTUREDICTIONARY }),
        zr({ name: jr.SCREENSHOTREADER, scope: Or }),
        zr({ name: jr.TALKANDTYPE }),
        zr({ name: jr.SCREENMASKING }),
        zr({ name: jr.STUDYYELLOW }),
        zr({ name: jr.STUDYGREEN }),
        zr({ name: jr.STUDYBLUE }),
        zr({ name: jr.STUDYPINK }),
        zr({ name: jr.STUDYCLEAR }),
        zr({ name: jr.STUDYCOLLECT }),
        zr({ name: jr.TRANSLATOR }),
        zr({ name: jr.VOICENOTE }),
        zr({ name: jr.VOCABLIST }),
        zr({ name: jr.AUDIOMAKER, icon: "speechmaker" }),
        zr({ name: jr.CLICKTOSPEAK, scope: yr }),
        zr({ name: jr.WEBSEARCH }),
        zr({ name: jr.SIMPLIFY }),
        zr({ name: jr.REWORDIFY, scope: yr }),
        zr({ name: jr.PRACTICEREADINGALOUD, scope: Er })
      ];
    }
    setToolbarPageConfig(e) {
      var t;
      Jr(e, { name: jr.CHECKIT }),
        Jr(e, { name: jr.PREDICTION }),
        Jr(e, { name: jr.CLICKTOSPEAK }),
        Jr(e, { name: jr.DICTIONARY }),
        Jr(e, { name: jr.PICTUREDICTIONARY, supported: !1 }),
        Jr(e, { name: jr.PLAY }),
        Jr(e, { name: jr.PAUSE }),
        Jr(e, { name: jr.STOP }),
        Jr(e, { name: jr.SCREENSHOTREADER }),
        Jr(e, { name: jr.AUDIOMAKER }),
        Jr(e, { name: jr.WEBSEARCH, supported: !1 }),
        Jr(e, { name: jr.SCREENMASKING }),
        Jr(e, { name: jr.TALKANDTYPE }),
        Jr(e, { name: jr.TRANSLATOR }),
        Jr(e, { name: jr.STUDYYELLOW }),
        Jr(e, { name: jr.STUDYGREEN }),
        Jr(e, { name: jr.STUDYBLUE }),
        Jr(e, { name: jr.STUDYPINK }),
        Jr(e, { name: jr.STUDYCLEAR }),
        Jr(e, { name: jr.STUDYCOLLECT }),
        Jr(e, { name: jr.VOCABLIST }),
        Jr(e, { name: jr.VOICENOTE }),
        Jr(e, { name: jr.SIMPLIFY }),
        null != (t = navigator.userAgentData) &&
          t.brands.find(({ brand: e, version: t }) => "Chromium" === e && parseFloat(t, 10) >= 102) &&
          Jr(e, { name: jr.REWORDIFY }),
        Jr(e, { name: jr.PRACTICEREADINGALOUD, supported: !1 });
    }
  }
  class Qr extends Wr {
    getToolbarBrowserConfig() {
      return [
        zr({ name: jr.CHECKIT }),
        zr({ name: jr.PREDICTION }),
        zr({ name: jr.CLICKTOSPEAK, scope: yr }),
        zr({ name: jr.DICTIONARY }),
        zr({ name: jr.PICTUREDICTIONARY }),
        zr({ name: jr.PLAY, scope: Er }),
        zr({ name: jr.PAUSE, scope: vr }),
        zr({ name: jr.STOP, scope: vr }),
        zr({ name: jr.SCREENSHOTREADER, scope: Or }),
        zr({ name: jr.AUDIOMAKER, icon: "speechmaker" }),
        zr({ name: jr.WEBSEARCH }),
        zr({ name: jr.SCREENMASKING }),
        zr({ name: jr.TALKANDTYPE }),
        zr({ name: jr.TRANSLATOR }),
        zr({ name: jr.STUDYYELLOW }),
        zr({ name: jr.STUDYGREEN }),
        zr({ name: jr.STUDYBLUE }),
        zr({ name: jr.STUDYPINK }),
        zr({ name: jr.STUDYCLEAR }),
        zr({ name: jr.STUDYCOLLECT }),
        zr({ name: jr.VOCABLIST }),
        zr({ name: jr.VOICENOTE }),
        zr({ name: jr.SIMPLIFY }),
        zr({ name: jr.REWORDIFY, scope: yr }),
        zr({ name: jr.PRACTICEREADINGALOUD, scope: Er })
      ];
    }
    setToolbarPageConfig(e) {
      var t;
      Jr(e, { name: jr.CHECKIT }),
        Jr(e, { name: jr.PREDICTION }),
        Jr(e, { name: jr.CLICKTOSPEAK }),
        Jr(e, { name: jr.DICTIONARY }),
        Jr(e, { name: jr.PICTUREDICTIONARY }),
        Jr(e, { name: jr.PLAY }),
        Jr(e, { name: jr.PAUSE }),
        Jr(e, { name: jr.STOP }),
        Jr(e, { name: jr.SCREENSHOTREADER }),
        Jr(e, { name: jr.AUDIOMAKER }),
        Jr(e, { name: jr.WEBSEARCH }),
        Jr(e, { name: jr.SCREENMASKING }),
        Jr(e, { name: jr.TALKANDTYPE }),
        Jr(e, { name: jr.TRANSLATOR }),
        Jr(e, { name: jr.STUDYYELLOW }),
        Jr(e, { name: jr.STUDYGREEN }),
        Jr(e, { name: jr.STUDYBLUE }),
        Jr(e, { name: jr.STUDYPINK }),
        Jr(e, { name: jr.STUDYCLEAR }),
        Jr(e, { name: jr.STUDYCOLLECT }),
        Jr(e, { name: jr.VOCABLIST }),
        Jr(e, { name: jr.VOICENOTE }),
        Jr(e, { name: jr.SIMPLIFY }),
        null != (t = navigator.userAgentData) &&
          t.brands.find(({ brand: e, version: t }) => "Chromium" === e && parseFloat(t, 10) >= 102) &&
          Jr(e, { name: jr.REWORDIFY }),
        Jr(e, { name: jr.PRACTICEREADINGALOUD });
    }
  }
  const Zr = new (class extends mr {
    constructor() {
      let e = {
        toolbar: { buttons: {}, docked: !1, showMenu: !1 },
        features: {},
        dialogs: {
          searchword: "",
          dictionary: { open: !1 },
          picturedictionary: { open: !1 },
          translator: { open: !1 },
          settingsdialog: { open: !1 },
          prediction: { open: !1 }
        },
        popups: {
          highlights: {
            visible: !1,
            sort: Vr,
            colors: { blue: !0, green: !0, yellow: !0, pink: !0 },
            error: !1,
            errorTitle: "",
            errorMessage: "",
            timerShow: !1,
            timerTitle: "",
            timerMessage: "",
            timerLength: 0
          },
          vocab: {
            visible: !1,
            colors: { blue: !0, green: !0, yellow: !0, pink: !0 },
            error: !1,
            errorTitle: "",
            errorMessage: "",
            timerShow: !1,
            timerTitle: "",
            timerMessage: "",
            timerLength: 0
          },
          audiomaker: { visible: !1, status: 0, error: !1, errorTitle: "", errorMessage: "" }
        }
      };
      ((e, t) => {
        let n = null;
        n = "workplace" === e ? new Xr() : new Qr();
        n.setToolbarPageConfig(t);
      })("__TOOLBARTYPE__", e),
        super(e, Ur, "th.rw4gc.toolbarpage.store"),
        this.applyFeatureSetToButtons();
    }
    setSpeaking(e) {
      var t;
      const n = ({ name: e, enabled: t = !0 }) => {
        let n = t;
        void 0 !== this.state.features[e] && (n = t && this.state.features[e]),
          this.state.toolbar.buttons[e].enabled !== n && (this.state.toolbar.buttons[e].enabled = n);
      };
      let r = !e;
      n({ name: jr.CHECKIT, enabled: r }),
        n({ name: jr.PREDICTION, enabled: r }),
        n({ name: jr.DICTIONARY, enabled: r }),
        n({ name: jr.PICTUREDICTIONARY, enabled: r }),
        n({ name: jr.PLAY, enabled: r }),
        n({ name: jr.SCREENSHOTREADER, enabled: r }),
        n({ name: jr.AUDIOMAKER, enabled: r }),
        n({ name: jr.SCREENMASKING, enabled: r }),
        n({ name: jr.WEBSEARCH, enabled: r }),
        n({ name: jr.TALKANDTYPE, enabled: r }),
        n({ name: jr.TRANSLATOR, enabled: r }),
        n({ name: jr.STUDYYELLOW, enabled: r }),
        n({ name: jr.STUDYGREEN, enabled: r }),
        n({ name: jr.STUDYBLUE, enabled: r }),
        n({ name: jr.STUDYPINK, enabled: r }),
        n({ name: jr.STUDYCLEAR, enabled: r }),
        n({ name: jr.STUDYCOLLECT, enabled: r }),
        n({ name: jr.VOCABLIST, enabled: r }),
        n({ name: jr.VOICENOTE, enabled: r }),
        n({ name: jr.SIMPLIFY, enabled: r }),
        null != (t = navigator.userAgentData) &&
          t.brands.find(({ brand: e, version: t }) => "Chromium" === e && parseFloat(t, 10) >= 102) &&
          n({ name: jr.REWORDIFY, enabled: r }),
        n({ name: jr.PRACTICEREADINGALOUD, enabled: r });
    }
    setFeatures(e) {
      let t = {
          "Check It": jr.CHECKIT,
          Prediction: jr.PREDICTION,
          Dictionary: jr.DICTIONARY,
          "Picture Dictionary": jr.PICTUREDICTIONARY,
          Play: jr.PLAY,
          "Screenshot Reader": jr.SCREENSHOTREADER,
          "Audio Maker": jr.AUDIOMAKER,
          "Screen Masking": jr.SCREENMASKING,
          "Web Search": jr.WEBSEARCH,
          "Talk&Type": jr.TALKANDTYPE,
          Translator: jr.TRANSLATOR,
          "Vocabulary List": jr.VOCABLIST,
          "Voice Note": jr.VOICENOTE,
          "Simplify Page": jr.SIMPLIFY,
          Rewordify: jr.REWORDIFY,
          "Practice Reading Aloud": jr.PRACTICEREADINGALOUD,
          "Erase Highlights": jr.STUDYCLEAR
        },
        n = Object.keys(e).reduce((n, r) => (void 0 !== t[r] && (n[t[r]] = e[r]), n), {});
      void 0 === e.Highlights && (e.Highlights = !1),
        (n[jr.STUDYYELLOW] = e.Highlights),
        (n[jr.STUDYGREEN] = e.Highlights),
        (n[jr.STUDYBLUE] = e.Highlights),
        (n[jr.STUDYPINK] = e.Highlights),
        (n[jr.STUDYCOLLECT] = e.Highlights),
        (n[jr.STUDYCLEAR] = e.Highlights),
        void 0 === e.Play && (e.Play = !1),
        (n[jr.PAUSE] = e.Play),
        (n[jr.STOP] = e.Play),
        (n[jr.CLICKTOSPEAK] = e.Play),
        (this.state.features = JSON.parse(JSON.stringify(n))),
        this.applyFeatureSetToButtons();
    }
    applyFeatureSetToButtons() {
      const e = (e) => {
        let t = this.state.toolbar.buttons[e].enabled;
        (t = void 0 !== this.state.features[e] && t && this.state.features[e]), this.setButtonEnabled(e, t);
      };
      Object.keys(this.state.toolbar.buttons).forEach((t) => {
        e(t);
      });
    }
    setButtonDisplayed(e, t) {
      this.state.toolbar.buttons[e].displayed = t;
    }
    setButtonPolicyEnabled(e, t) {
      this.state.toolbar.buttons[e].policyEnabled = t;
    }
    setButtonEnabled(e, t) {
      this.state.toolbar.buttons[e].enabled = t;
    }
    setButtonToggled(e, t) {
      return void 0 !== t
        ? ((this.state.toolbar.buttons[e].toggled = t), this.state.toolbar.buttons[e].toggled)
        : ((this.state.toolbar.buttons[e].toggled = !this.state.toolbar.buttons[e].toggled), this.state.toolbar.buttons[e].toggled);
    }
    setToolbarDocked(e) {
      this.state.toolbar.docked = e;
    }
    setToolbarMenuShow(e) {
      this.state.toolbar.showMenu = e;
    }
    showDictionary(e) {
      this.state.dialogs.dictionary.open = e;
    }
    showPictureDictionary(e) {
      this.state.dialogs.picturedictionary.open = e;
    }
    showTranslator(e) {
      this.state.dialogs.translator.open = e;
    }
    showSettingsDialog(e) {
      this.state.dialogs.settingsdialog.open = e;
    }
    showPrediction(e) {
      this.state.dialogs.prediction.open = e;
    }
    setSearchWord(e) {
      this.state.dialogs.searchword = e;
    }
    displayCollectDialog(e, t) {
      this.state.popups[e].visible = t;
    }
    displayAudioMakerDialog(e) {
      this.updateAudioMakerProgress(0), (this.state.popups.audiomaker.visible = e), this.setButtonEnabled(jr.AUDIOMAKER, !e);
    }
    updateAudioMakerProgress(e) {
      this.state.popups.audiomaker.status = e;
    }
    displayErrorInfoTab(e, t = !0, n = "", r = "") {
      try {
        (this.state.popups[e].error = t), (this.state.popups[e].errorTitle = n), (this.state.popups[e].errorMessage = r);
      } catch (e) {
        console.log("infoType not found");
      }
    }
    displayTimerInfoTab(e, t = !0, n = 10, r = "", i = "") {
      try {
        (this.state.popups[e].timerShow = t),
          (this.state.popups[e].timerTitle = r),
          (this.state.popups[e].timerMessage = i),
          (this.state.popups[e].timerLength = n),
          console.log(this.state.popups);
      } catch (e) {
        console.log("infoType not found");
      }
    }
    setHighlightSort(e) {
      switch (e) {
        case "color":
          this.state.popups.highlights.sort != Vr && (this.state.popups.highlights.sort = Vr);
          break;
        case "position":
          this.state.popups.highlights.sort != Hr && (this.state.popups.highlights.sort = Hr);
      }
    }
    setCollectionColor(e, t, n) {
      this.state.popups[e].colors[t] = n;
    }
    displayCollectVocab(e) {
      this.state.popups.vocab.visible = e;
    }
    sortOptionChecked(e) {
      return e === this.state.popups.highlights.sort;
    }
    toogleClickAndSpeak() {}
  })();
  function ei(e) {
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
  var ti = {};
  function ni() {
    return "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : ti;
  }
  var ri = Object.assign,
    ii = Object.getOwnPropertyDescriptor,
    ai = Object.defineProperty,
    si = Object.prototype,
    oi = [];
  Object.freeze(oi);
  var ci = {};
  Object.freeze(ci);
  var ui = "undefined" != typeof Proxy,
    li = Object.toString();
  function di() {
    ui || ei("Proxy not available");
  }
  function hi(e) {
    var t = !1;
    return function () {
      if (!t) return (t = !0), e.apply(this, arguments);
    };
  }
  var pi = function () {};
  function gi(e) {
    return "function" == typeof e;
  }
  function fi(e) {
    switch (typeof e) {
      case "string":
      case "symbol":
      case "number":
        return !0;
    }
    return !1;
  }
  function mi(e) {
    return null !== e && "object" == typeof e;
  }
  function vi(e) {
    if (!mi(e)) return !1;
    var t = Object.getPrototypeOf(e);
    if (null == t) return !0;
    var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
    return "function" == typeof n && n.toString() === li;
  }
  function _i(e) {
    var t = null == e ? void 0 : e.constructor;
    return !!t && ("GeneratorFunction" === t.name || "GeneratorFunction" === t.displayName);
  }
  function yi(e, t, n) {
    ai(e, t, { enumerable: !1, writable: !0, configurable: !0, value: n });
  }
  function bi(e, t, n) {
    ai(e, t, { enumerable: !1, writable: !1, configurable: !0, value: n });
  }
  function Si(e, t) {
    var n = "isMobX" + e;
    return (
      (t.prototype[n] = !0),
      function (e) {
        return mi(e) && !0 === e[n];
      }
    );
  }
  function Ei(e) {
    return e instanceof Map;
  }
  function Oi(e) {
    return e instanceof Set;
  }
  var Ai = void 0 !== Object.getOwnPropertySymbols;
  var Ti =
    "undefined" != typeof Reflect && Reflect.ownKeys
      ? Reflect.ownKeys
      : Ai
      ? function (e) {
          return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
        }
      : Object.getOwnPropertyNames;
  function wi(e) {
    return null === e ? null : "object" == typeof e ? "" + e : e;
  }
  function Ci(e, t) {
    return si.hasOwnProperty.call(e, t);
  }
  var Ii =
    Object.getOwnPropertyDescriptors ||
    function (e) {
      var t = {};
      return (
        Ti(e).forEach(function (n) {
          t[n] = ii(e, n);
        }),
        t
      );
    };
  function Ri(e, t) {
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
  function Ni(e, t, n) {
    return t && Ri(e.prototype, t), n && Ri(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
  }
  function Pi() {
    return (
      (Pi = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      Pi.apply(this, arguments)
    );
  }
  function Di(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), Li(e, t);
  }
  function Li(e, t) {
    return (
      (Li = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
            return (e.__proto__ = t), e;
          }),
      Li(e, t)
    );
  }
  function ki(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
  }
  function Ui(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function xi(e, t) {
    var n = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
    if (n) return (n = n.call(e)).next.bind(n);
    if (
      Array.isArray(e) ||
      (n = (function (e, t) {
        if (e) {
          if ("string" == typeof e) return Ui(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === n && e.constructor && (n = e.constructor.name),
            "Map" === n || "Set" === n
              ? Array.from(e)
              : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? Ui(e, t)
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
  var ji = Symbol("mobx-stored-annotations");
  function Mi(e) {
    return Object.assign(function (t, n) {
      Yi(t, n, e);
    }, e);
  }
  function Yi(e, t, n) {
    Ci(e, ji) || yi(e, ji, Pi({}, e[ji])),
      (function (e) {
        return e.annotationType_ === zi;
      })(n) || (e[ji][t] = n);
  }
  var Gi = Symbol("mobx administration"),
    Fi = (function () {
      function e(e) {
        void 0 === e && (e = "Atom"),
          (this.name_ = void 0),
          (this.isPendingUnobservation_ = !1),
          (this.isBeingObserved_ = !1),
          (this.observers_ = new Set()),
          (this.diffValue_ = 0),
          (this.lastAccessedBy_ = 0),
          (this.lowestObserverState_ = Fa.NOT_TRACKING_),
          (this.onBOL = void 0),
          (this.onBUOL = void 0),
          (this.name_ = e);
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
          return ls(this);
        }),
        (t.reportChanged = function () {
          cs(),
            ds(this),
            (is.stateVersion = is.stateVersion < Number.MAX_SAFE_INTEGER ? is.stateVersion + 1 : Number.MIN_SAFE_INTEGER),
            us();
        }),
        (t.toString = function () {
          return this.name_;
        }),
        e
      );
    })(),
    Bi = Si("Atom", Fi);
  function Ki(e, t, n) {
    void 0 === t && (t = pi), void 0 === n && (n = pi);
    var r,
      i = new Fi(e);
    return t !== pi && Ls(Ns, i, t, r), n !== pi && Ds(i, n), i;
  }
  var Vi = {
    identity: function (e, t) {
      return e === t;
    },
    structural: function (e, t) {
      return zo(e, t);
    },
    default: function (e, t) {
      return Object.is ? Object.is(e, t) : e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
    },
    shallow: function (e, t) {
      return zo(e, t, 1);
    }
  };
  function Hi(e, t, n) {
    return Bs(e)
      ? e
      : Array.isArray(e)
      ? Ta.array(e, { name: n })
      : vi(e)
      ? Ta.object(e, void 0, { name: n })
      : Ei(e)
      ? Ta.map(e, { name: n })
      : Oi(e)
      ? Ta.set(e, { name: n })
      : "function" != typeof e || Cs(e) || Fs(e)
      ? e
      : _i(e)
      ? Ys(e)
      : ws(n, e);
  }
  function Wi(e) {
    return e;
  }
  var zi = "override";
  function Ji(e, t) {
    return { annotationType_: e, options_: t, make_: qi, extend_: $i };
  }
  function qi(e, t, n, r) {
    var i;
    if (null != (i = this.options_) && i.bound) return null === this.extend_(e, t, n, !1) ? 0 : 1;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (Cs(n.value)) return 1;
    var a = Xi(e, this, t, n, !1);
    return ai(r, t, a), 2;
  }
  function $i(e, t, n, r) {
    var i = Xi(e, this, t, n);
    return e.defineProperty_(t, i, r);
  }
  function Xi(e, t, n, r, i) {
    var a, s, o, c, u, l, d, h;
    void 0 === i && (i = is.safeDescriptors), (h = r), t.annotationType_, h.value;
    var p,
      g = r.value;
    null != (a = t.options_) && a.bound && (g = g.bind(null != (p = e.proxy_) ? p : e.target_));
    return {
      value: Ua(
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
  function Qi(e, t) {
    return { annotationType_: e, options_: t, make_: Zi, extend_: ea };
  }
  function Zi(e, t, n, r) {
    var i;
    if (r === e.target_) return null === this.extend_(e, t, n, !1) ? 0 : 2;
    if (null != (i = this.options_) && i.bound && (!Ci(e.target_, t) || !Fs(e.target_[t])) && null === this.extend_(e, t, n, !1)) return 0;
    if (Fs(n.value)) return 1;
    var a = ta(e, this, t, n, !1, !1);
    return ai(r, t, a), 2;
  }
  function ea(e, t, n, r) {
    var i,
      a = ta(e, this, t, n, null == (i = this.options_) ? void 0 : i.bound);
    return e.defineProperty_(t, a, r);
  }
  function ta(e, t, n, r, i, a) {
    var s;
    void 0 === a && (a = is.safeDescriptors), (s = r), t.annotationType_, s.value;
    var o,
      c = r.value;
    (Fs(c) || (c = Ys(c)), i) && ((c = c.bind(null != (o = e.proxy_) ? o : e.target_)).isMobXFlow = !0);
    return { value: c, configurable: !a || e.isPlainObject_, enumerable: !1, writable: !a };
  }
  function na(e, t) {
    return { annotationType_: e, options_: t, make_: ra, extend_: ia };
  }
  function ra(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
  }
  function ia(e, t, n, r) {
    var i;
    return (i = n), this.annotationType_, i.get, e.defineComputedProperty_(t, Pi({}, this.options_, { get: n.get, set: n.set }), r);
  }
  function aa(e, t) {
    return { annotationType_: e, options_: t, make_: sa, extend_: oa };
  }
  function sa(e, t, n) {
    return null === this.extend_(e, t, n, !1) ? 0 : 1;
  }
  function oa(e, t, n, r) {
    var i, a;
    return (
      this.annotationType_,
      e.defineObservableProperty_(t, n.value, null != (i = null == (a = this.options_) ? void 0 : a.enhancer) ? i : Hi, r)
    );
  }
  var ca = "true",
    ua = la();
  function la(e) {
    return { annotationType_: ca, options_: e, make_: da, extend_: ha };
  }
  function da(e, t, n, r) {
    var i, a, s, o;
    if (n.get) return Ra.make_(e, t, n, r);
    if (n.set) {
      var c = Ua(t.toString(), n.set);
      return r === e.target_
        ? null === e.defineProperty_(t, { configurable: !is.safeDescriptors || e.isPlainObject_, set: c })
          ? 0
          : 2
        : (ai(r, t, { configurable: !0, set: c }), 2);
    }
    if (r !== e.target_ && "function" == typeof n.value)
      return _i(n.value)
        ? (null != (o = this.options_) && o.autoBind ? Ys.bound : Ys).make_(e, t, n, r)
        : (null != (s = this.options_) && s.autoBind ? ws.bound : ws).make_(e, t, n, r);
    var u,
      l = !1 === (null == (i = this.options_) ? void 0 : i.deep) ? Ta.ref : Ta;
    "function" == typeof n.value &&
      null != (a = this.options_) &&
      a.autoBind &&
      (n.value = n.value.bind(null != (u = e.proxy_) ? u : e.target_));
    return l.make_(e, t, n, r);
  }
  function ha(e, t, n, r) {
    var i, a, s;
    if (n.get) return Ra.extend_(e, t, n, r);
    if (n.set) return e.defineProperty_(t, { configurable: !is.safeDescriptors || e.isPlainObject_, set: Ua(t.toString(), n.set) }, r);
    "function" == typeof n.value &&
      null != (i = this.options_) &&
      i.autoBind &&
      (n.value = n.value.bind(null != (s = e.proxy_) ? s : e.target_));
    return (!1 === (null == (a = this.options_) ? void 0 : a.deep) ? Ta.ref : Ta).extend_(e, t, n, r);
  }
  var pa = { deep: !0, name: void 0, defaultDecorator: void 0, proxy: !0 };
  function ga(e) {
    return e || pa;
  }
  Object.freeze(pa);
  var fa = aa("observable"),
    ma = aa("observable.ref", { enhancer: Wi }),
    va = aa("observable.shallow", {
      enhancer: function (e, t, n) {
        return null == e || Lo(e) || mo(e) || Oo(e) || wo(e)
          ? e
          : Array.isArray(e)
          ? Ta.array(e, { name: n, deep: !1 })
          : vi(e)
          ? Ta.object(e, void 0, { name: n, deep: !1 })
          : Ei(e)
          ? Ta.map(e, { name: n, deep: !1 })
          : Oi(e)
          ? Ta.set(e, { name: n, deep: !1 })
          : void 0;
      }
    }),
    _a = aa("observable.struct", {
      enhancer: function (e, t) {
        return zo(e, t) ? t : e;
      }
    }),
    ya = Mi(fa);
  function ba(e) {
    return !0 === e.deep
      ? Hi
      : !1 === e.deep
      ? Wi
      : (t = e.defaultDecorator) && null != (n = null == (r = t.options_) ? void 0 : r.enhancer)
      ? n
      : Hi;
    var t, n, r;
  }
  function Sa(e, t, n) {
    if (!fi(t))
      return Bs(e)
        ? e
        : vi(e)
        ? Ta.object(e, t, n)
        : Array.isArray(e)
        ? Ta.array(e, t)
        : Ei(e)
        ? Ta.map(e, t)
        : Oi(e)
        ? Ta.set(e, t)
        : "object" == typeof e && null !== e
        ? e
        : Ta.box(e, t);
    Yi(e, t, fa);
  }
  ri(Sa, ya);
  var Ea,
    Oa,
    Aa = {
      box: function (e, t) {
        var n = ga(t);
        return new Ya(e, ba(n), n.name, !0, n.equals);
      },
      array: function (e, t) {
        var n = ga(t);
        return (!1 === is.useProxies || !1 === n.proxy ? Bo : so)(e, ba(n), n.name);
      },
      map: function (e, t) {
        var n = ga(t);
        return new Eo(e, ba(n), n.name);
      },
      set: function (e, t) {
        var n = ga(t);
        return new To(e, ba(n), n.name);
      },
      object: function (e, t, n) {
        return ks(
          !1 === is.useProxies || !1 === (null == n ? void 0 : n.proxy)
            ? No({}, n)
            : (function (e, t) {
                var n, r;
                return di(), (e = No(e, t)), null != (r = (n = e[Gi]).proxy_) ? r : (n.proxy_ = new Proxy(e, Js));
              })({}, n),
          e,
          t
        );
      },
      ref: Mi(ma),
      shallow: Mi(va),
      deep: ya,
      struct: Mi(_a)
    },
    Ta = ri(Sa, Aa),
    wa = "computed",
    Ca = na(wa),
    Ia = na("computed.struct", { equals: Vi.structural }),
    Ra = function (e, t) {
      if (fi(t)) return Yi(e, t, Ca);
      if (vi(e)) return Mi(na(wa, e));
      var n = vi(t) ? t : {};
      return (n.get = e), n.name || (n.name = e.name || ""), new Ka(n);
    };
  Object.assign(Ra, Ca), (Ra.struct = Mi(Ia));
  var Na,
    Pa = 0,
    Da = 1,
    La = null != (Ea = null == (Oa = ii(function () {}, "name")) ? void 0 : Oa.configurable) && Ea,
    ka = { value: "action", configurable: !0, writable: !1, enumerable: !1 };
  function Ua(e, t, n, r) {
    function i() {
      return (function (e, t, n, r, i) {
        var a = (function (e, t, n, r) {
          var i = !1,
            a = 0,
            s = is.trackingDerivation,
            o = !t || !s;
          cs();
          var c = is.allowStateChanges;
          o && (Xa(), (c = xa(!0)));
          var u = Za(!0),
            l = {
              runAsAction_: o,
              prevDerivation_: s,
              prevAllowStateChanges_: c,
              prevAllowStateReads_: u,
              notifySpy_: i,
              startTime_: a,
              actionId_: Da++,
              parentActionId_: Pa
            };
          return (Pa = l.actionId_), l;
        })(0, t);
        try {
          return n.apply(r, i);
        } catch (e) {
          throw ((a.error_ = e), e);
        } finally {
          !(function (e) {
            Pa !== e.actionId_ && ei(30);
            (Pa = e.parentActionId_), void 0 !== e.error_ && (is.suppressReactionErrors = !0);
            ja(e.prevAllowStateChanges_), es(e.prevAllowStateReads_), us(), e.runAsAction_ && Qa(e.prevDerivation_);
            is.suppressReactionErrors = !1;
          })(a);
        }
      })(0, n, t, r || this, arguments);
    }
    return void 0 === n && (n = !1), (i.isMobxAction = !0), La && ((ka.value = e), ai(i, "name", ka)), i;
  }
  function xa(e) {
    var t = is.allowStateChanges;
    return (is.allowStateChanges = e), t;
  }
  function ja(e) {
    is.allowStateChanges = e;
  }
  Na = Symbol.toPrimitive;
  var Ma,
    Ya = (function (e) {
      function t(t, n, r, i, a) {
        var s;
        return (
          void 0 === r && (r = "ObservableValue"),
          void 0 === a && (a = Vi.default),
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
      Di(t, e);
      var n = t.prototype;
      return (
        (n.dehanceValue = function (e) {
          return void 0 !== this.dehancer ? this.dehancer(e) : e;
        }),
        (n.set = function (e) {
          this.value_, (e = this.prepareNewValue_(e)) !== is.UNCHANGED && this.setNewValue_(e);
        }),
        (n.prepareNewValue_ = function (e) {
          if (qs(this)) {
            var t = Xs(this, { object: this, type: ro, newValue: e });
            if (!t) return is.UNCHANGED;
            e = t.newValue;
          }
          return (e = this.enhancer(e, this.value_, this.name_)), this.equals(this.value_, e) ? is.UNCHANGED : e;
        }),
        (n.setNewValue_ = function (e) {
          var t = this.value_;
          (this.value_ = e), this.reportChanged(), Qs(this) && eo(this, { type: ro, object: this, newValue: e, oldValue: t });
        }),
        (n.get = function () {
          return this.reportObserved(), this.dehanceValue(this.value_);
        }),
        (n.intercept_ = function (e) {
          return $s(this, e);
        }),
        (n.observe_ = function (e, t) {
          return (
            t &&
              e({ observableKind: "value", debugObjectName: this.name_, object: this, type: ro, newValue: this.value_, oldValue: void 0 }),
            Zs(this, e)
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
        (n[Na] = function () {
          return this.valueOf();
        }),
        t
      );
    })(Fi),
    Ga = Si("ObservableValue", Ya);
  Ma = Symbol.toPrimitive;
  var Fa,
    Ba,
    Ka = (function () {
      function e(e) {
        (this.dependenciesState_ = Fa.NOT_TRACKING_),
          (this.observing_ = []),
          (this.newObserving_ = null),
          (this.isBeingObserved_ = !1),
          (this.isPendingUnobservation_ = !1),
          (this.observers_ = new Set()),
          (this.diffValue_ = 0),
          (this.runId_ = 0),
          (this.lastAccessedBy_ = 0),
          (this.lowestObserverState_ = Fa.UP_TO_DATE_),
          (this.unboundDepsCount_ = 0),
          (this.value_ = new Ha(null)),
          (this.name_ = void 0),
          (this.triggeredBy_ = void 0),
          (this.isComputing_ = !1),
          (this.isRunningSetter_ = !1),
          (this.derivation = void 0),
          (this.setter_ = void 0),
          (this.isTracing_ = Ba.NONE),
          (this.scope_ = void 0),
          (this.equals_ = void 0),
          (this.requiresReaction_ = void 0),
          (this.keepAlive_ = void 0),
          (this.onBOL = void 0),
          (this.onBUOL = void 0),
          e.get || ei(31),
          (this.derivation = e.get),
          (this.name_ = e.name || "ComputedValue"),
          e.set && (this.setter_ = Ua("ComputedValue-setter", e.set)),
          (this.equals_ = e.equals || (e.compareStructural || e.struct ? Vi.structural : Vi.default)),
          (this.scope_ = e.context),
          (this.requiresReaction_ = e.requiresReaction),
          (this.keepAlive_ = !!e.keepAlive);
      }
      var t = e.prototype;
      return (
        (t.onBecomeStale_ = function () {
          !(function (e) {
            if (e.lowestObserverState_ !== Fa.UP_TO_DATE_) return;
            (e.lowestObserverState_ = Fa.POSSIBLY_STALE_),
              e.observers_.forEach(function (e) {
                e.dependenciesState_ === Fa.UP_TO_DATE_ && ((e.dependenciesState_ = Fa.POSSIBLY_STALE_), e.onBecomeStale_());
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
            (this.isComputing_ && ei(32, this.name_, this.derivation), 0 !== is.inBatch || 0 !== this.observers_.size || this.keepAlive_)
          ) {
            if ((ls(this), za(this))) {
              var e = is.trackingContext;
              this.keepAlive_ && !e && (is.trackingContext = this),
                this.trackAndCompute() &&
                  (function (e) {
                    if (e.lowestObserverState_ === Fa.STALE_) return;
                    (e.lowestObserverState_ = Fa.STALE_),
                      e.observers_.forEach(function (t) {
                        t.dependenciesState_ === Fa.POSSIBLY_STALE_
                          ? (t.dependenciesState_ = Fa.STALE_)
                          : t.dependenciesState_ === Fa.UP_TO_DATE_ && (e.lowestObserverState_ = Fa.UP_TO_DATE_);
                      });
                  })(this),
                (is.trackingContext = e);
            }
          } else za(this) && (this.warnAboutUntrackedRead_(), cs(), (this.value_ = this.computeValue_(!1)), us());
          var t = this.value_;
          if (Wa(t)) throw t.cause;
          return t;
        }),
        (t.set = function (e) {
          if (this.setter_) {
            this.isRunningSetter_ && ei(33, this.name_), (this.isRunningSetter_ = !0);
            try {
              this.setter_.call(this.scope_, e);
            } finally {
              this.isRunningSetter_ = !1;
            }
          } else ei(34, this.name_);
        }),
        (t.trackAndCompute = function () {
          var e = this.value_,
            t = this.dependenciesState_ === Fa.NOT_TRACKING_,
            n = this.computeValue_(!0),
            r = t || Wa(e) || Wa(n) || !this.equals_(e, n);
          return r && (this.value_ = n), r;
        }),
        (t.computeValue_ = function (e) {
          this.isComputing_ = !0;
          var t,
            n = xa(!1);
          if (e) t = Ja(this, this.derivation, this.scope_);
          else if (!0 === is.disableErrorBoundaries) t = this.derivation.call(this.scope_);
          else
            try {
              t = this.derivation.call(this.scope_);
            } catch (e) {
              t = new Ha(e);
            }
          return ja(n), (this.isComputing_ = !1), t;
        }),
        (t.suspend_ = function () {
          this.keepAlive_ || (qa(this), (this.value_ = void 0));
        }),
        (t.observe_ = function (e, t) {
          var n = this,
            r = !0,
            i = void 0;
          return Is(function () {
            var a = n.get();
            if (!r || t) {
              var s = Xa();
              e({ observableKind: "computed", debugObjectName: n.name_, type: ro, object: n, newValue: a, oldValue: i }), Qa(s);
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
        (t[Ma] = function () {
          return this.valueOf();
        }),
        e
      );
    })(),
    Va = Si("ComputedValue", Ka);
  !(function (e) {
    (e[(e.NOT_TRACKING_ = -1)] = "NOT_TRACKING_"),
      (e[(e.UP_TO_DATE_ = 0)] = "UP_TO_DATE_"),
      (e[(e.POSSIBLY_STALE_ = 1)] = "POSSIBLY_STALE_"),
      (e[(e.STALE_ = 2)] = "STALE_");
  })(Fa || (Fa = {})),
    (function (e) {
      (e[(e.NONE = 0)] = "NONE"), (e[(e.LOG = 1)] = "LOG"), (e[(e.BREAK = 2)] = "BREAK");
    })(Ba || (Ba = {}));
  var Ha = function (e) {
    (this.cause = void 0), (this.cause = e);
  };
  function Wa(e) {
    return e instanceof Ha;
  }
  function za(e) {
    switch (e.dependenciesState_) {
      case Fa.UP_TO_DATE_:
        return !1;
      case Fa.NOT_TRACKING_:
      case Fa.STALE_:
        return !0;
      case Fa.POSSIBLY_STALE_:
        for (var t = Za(!0), n = Xa(), r = e.observing_, i = r.length, a = 0; a < i; a++) {
          var s = r[a];
          if (Va(s)) {
            if (is.disableErrorBoundaries) s.get();
            else
              try {
                s.get();
              } catch (e) {
                return Qa(n), es(t), !0;
              }
            if (e.dependenciesState_ === Fa.STALE_) return Qa(n), es(t), !0;
          }
        }
        return ts(e), Qa(n), es(t), !1;
    }
  }
  function Ja(e, t, n) {
    var r = Za(!0);
    ts(e), (e.newObserving_ = new Array(e.observing_.length + 100)), (e.unboundDepsCount_ = 0), (e.runId_ = ++is.runId);
    var i,
      a = is.trackingDerivation;
    if (((is.trackingDerivation = e), is.inBatch++, !0 === is.disableErrorBoundaries)) i = t.call(n);
    else
      try {
        i = t.call(n);
      } catch (e) {
        i = new Ha(e);
      }
    return (
      is.inBatch--,
      (is.trackingDerivation = a),
      (function (e) {
        for (
          var t = e.observing_, n = (e.observing_ = e.newObserving_), r = Fa.UP_TO_DATE_, i = 0, a = e.unboundDepsCount_, s = 0;
          s < a;
          s++
        ) {
          var o = n[s];
          0 === o.diffValue_ && ((o.diffValue_ = 1), i !== s && (n[i] = o), i++), o.dependenciesState_ > r && (r = o.dependenciesState_);
        }
        (n.length = i), (e.newObserving_ = null), (a = t.length);
        for (; a--; ) {
          var c = t[a];
          0 === c.diffValue_ && ss(c, e), (c.diffValue_ = 0);
        }
        for (; i--; ) {
          var u = n[i];
          1 === u.diffValue_ && ((u.diffValue_ = 0), as(u, e));
        }
        r !== Fa.UP_TO_DATE_ && ((e.dependenciesState_ = r), e.onBecomeStale_());
      })(e),
      es(r),
      i
    );
  }
  function qa(e) {
    var t = e.observing_;
    e.observing_ = [];
    for (var n = t.length; n--; ) ss(t[n], e);
    e.dependenciesState_ = Fa.NOT_TRACKING_;
  }
  function $a(e) {
    var t = Xa();
    try {
      return e();
    } finally {
      Qa(t);
    }
  }
  function Xa() {
    var e = is.trackingDerivation;
    return (is.trackingDerivation = null), e;
  }
  function Qa(e) {
    is.trackingDerivation = e;
  }
  function Za(e) {
    var t = is.allowStateReads;
    return (is.allowStateReads = e), t;
  }
  function es(e) {
    is.allowStateReads = e;
  }
  function ts(e) {
    if (e.dependenciesState_ !== Fa.UP_TO_DATE_) {
      e.dependenciesState_ = Fa.UP_TO_DATE_;
      for (var t = e.observing_, n = t.length; n--; ) t[n].lowestObserverState_ = Fa.UP_TO_DATE_;
    }
  }
  var ns = function () {
      (this.version = 6),
        (this.UNCHANGED = {}),
        (this.trackingDerivation = null),
        (this.trackingContext = null),
        (this.runId = 0),
        (this.mobxGuid = 0),
        (this.inBatch = 0),
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
    rs = !0,
    is = (function () {
      var e = ni();
      return (
        e.__mobxInstanceCount > 0 && !e.__mobxGlobals && (rs = !1),
        e.__mobxGlobals && e.__mobxGlobals.version !== new ns().version && (rs = !1),
        rs
          ? e.__mobxGlobals
            ? ((e.__mobxInstanceCount += 1), e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}), e.__mobxGlobals)
            : ((e.__mobxInstanceCount = 1), (e.__mobxGlobals = new ns()))
          : (setTimeout(function () {
              ei(35);
            }, 1),
            new ns())
      );
    })();
  function as(e, t) {
    e.observers_.add(t), e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_);
  }
  function ss(e, t) {
    e.observers_.delete(t), 0 === e.observers_.size && os(e);
  }
  function os(e) {
    !1 === e.isPendingUnobservation_ && ((e.isPendingUnobservation_ = !0), is.pendingUnobservations.push(e));
  }
  function cs() {
    is.inBatch++;
  }
  function us() {
    if (0 == --is.inBatch) {
      fs();
      for (var e = is.pendingUnobservations, t = 0; t < e.length; t++) {
        var n = e[t];
        (n.isPendingUnobservation_ = !1),
          0 === n.observers_.size && (n.isBeingObserved_ && ((n.isBeingObserved_ = !1), n.onBUO()), n instanceof Ka && n.suspend_());
      }
      is.pendingUnobservations = [];
    }
  }
  function ls(e) {
    var t = is.trackingDerivation;
    return null !== t
      ? (t.runId_ !== e.lastAccessedBy_ &&
          ((e.lastAccessedBy_ = t.runId_),
          (t.newObserving_[t.unboundDepsCount_++] = e),
          !e.isBeingObserved_ && is.trackingContext && ((e.isBeingObserved_ = !0), e.onBO())),
        e.isBeingObserved_)
      : (0 === e.observers_.size && is.inBatch > 0 && os(e), !1);
  }
  function ds(e) {
    e.lowestObserverState_ !== Fa.STALE_ &&
      ((e.lowestObserverState_ = Fa.STALE_),
      e.observers_.forEach(function (e) {
        e.dependenciesState_ === Fa.UP_TO_DATE_ && e.onBecomeStale_(), (e.dependenciesState_ = Fa.STALE_);
      }));
  }
  var hs = (function () {
      function e(e, t, n, r) {
        void 0 === e && (e = "Reaction"),
          (this.name_ = void 0),
          (this.onInvalidate_ = void 0),
          (this.errorHandler_ = void 0),
          (this.requiresObservable_ = void 0),
          (this.observing_ = []),
          (this.newObserving_ = []),
          (this.dependenciesState_ = Fa.NOT_TRACKING_),
          (this.diffValue_ = 0),
          (this.runId_ = 0),
          (this.unboundDepsCount_ = 0),
          (this.isDisposed_ = !1),
          (this.isScheduled_ = !1),
          (this.isTrackPending_ = !1),
          (this.isRunning_ = !1),
          (this.isTracing_ = Ba.NONE),
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
          this.isScheduled_ || ((this.isScheduled_ = !0), is.pendingReactions.push(this), fs());
        }),
        (t.isScheduled = function () {
          return this.isScheduled_;
        }),
        (t.runReaction_ = function () {
          if (!this.isDisposed_) {
            cs(), (this.isScheduled_ = !1);
            var e = is.trackingContext;
            if (((is.trackingContext = this), za(this))) {
              this.isTrackPending_ = !0;
              try {
                this.onInvalidate_();
              } catch (e) {
                this.reportExceptionInDerivation_(e);
              }
            }
            (is.trackingContext = e), us();
          }
        }),
        (t.track = function (e) {
          if (!this.isDisposed_) {
            cs(), (this.isRunning_ = !0);
            var t = is.trackingContext;
            is.trackingContext = this;
            var n = Ja(this, e, void 0);
            (is.trackingContext = t),
              (this.isRunning_ = !1),
              (this.isTrackPending_ = !1),
              this.isDisposed_ && qa(this),
              Wa(n) && this.reportExceptionInDerivation_(n.cause),
              us();
          }
        }),
        (t.reportExceptionInDerivation_ = function (e) {
          var t = this;
          if (this.errorHandler_) this.errorHandler_(e, this);
          else {
            if (is.disableErrorBoundaries) throw e;
            var n = "[mobx] uncaught error in '" + this + "'";
            is.suppressReactionErrors || console.error(n, e),
              is.globalReactionErrorHandlers.forEach(function (n) {
                return n(e, t);
              });
          }
        }),
        (t.dispose = function () {
          this.isDisposed_ || ((this.isDisposed_ = !0), this.isRunning_ || (cs(), qa(this), us()));
        }),
        (t.getDisposer_ = function (e) {
          var t = this,
            n = function n() {
              t.dispose(), null == e || null == e.removeEventListener || e.removeEventListener("abort", n);
            };
          return null == e || null == e.addEventListener || e.addEventListener("abort", n), (n[Gi] = this), n;
        }),
        (t.toString = function () {
          return "Reaction[" + this.name_ + "]";
        }),
        (t.trace = function (e) {}),
        e
      );
    })(),
    ps = 100,
    gs = function (e) {
      return e();
    };
  function fs() {
    is.inBatch > 0 || is.isRunningReactions || gs(ms);
  }
  function ms() {
    is.isRunningReactions = !0;
    for (var e = is.pendingReactions, t = 0; e.length > 0; ) {
      ++t === ps && (console.error("[mobx] cycle in reaction: " + e[0]), e.splice(0));
      for (var n = e.splice(0), r = 0, i = n.length; r < i; r++) n[r].runReaction_();
    }
    is.isRunningReactions = !1;
  }
  var vs = Si("Reaction", hs);
  var _s = "action",
    ys = "autoAction",
    bs = Ji(_s),
    Ss = Ji("action.bound", { bound: !0 }),
    Es = Ji(ys, { autoAction: !0 }),
    Os = Ji("autoAction.bound", { autoAction: !0, bound: !0 });
  function As(e) {
    return function (t, n) {
      return gi(t)
        ? Ua(t.name || "<unnamed action>", t, e)
        : gi(n)
        ? Ua(t, n, e)
        : fi(n)
        ? Yi(t, n, e ? Es : bs)
        : fi(t)
        ? Mi(Ji(e ? ys : _s, { name: t, autoAction: e }))
        : void 0;
    };
  }
  var Ts = As(!1);
  Object.assign(Ts, bs);
  var ws = As(!0);
  function Cs(e) {
    return gi(e) && !0 === e.isMobxAction;
  }
  function Is(e, t) {
    var n, r, i, a, s;
    void 0 === t && (t = ci);
    var o,
      c = null != (n = null == (r = t) ? void 0 : r.name) ? n : "Autorun";
    if (!t.scheduler && !t.delay)
      o = new hs(
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
            : Rs;
        })(t),
        l = !1;
      o = new hs(
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
  Object.assign(ws, Es), (Ts.bound = Mi(Ss)), (ws.bound = Mi(Os));
  var Rs = function (e) {
    return e();
  };
  var Ns = "onBO",
    Ps = "onBUO";
  function Ds(e, t, n) {
    return Ls(Ps, e, t, n);
  }
  function Ls(e, t, n, r) {
    var i = "function" == typeof r ? Ko(t, n) : Ko(t),
      a = gi(r) ? r : n,
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
    var i = Ii(t),
      a = No(e, r)[Gi];
    cs();
    try {
      Ti(i).forEach(function (e) {
        a.extend_(e, i[e], !n || !(e in n) || n[e]);
      });
    } finally {
      us();
    }
    return e;
  }
  var Us = 0;
  function xs() {
    this.message = "FLOW_CANCELLED";
  }
  xs.prototype = Object.create(Error.prototype);
  var js = Qi("flow"),
    Ms = Qi("flow.bound", { bound: !0 }),
    Ys = Object.assign(function (e, t) {
      if (fi(t)) return Yi(e, t, js);
      var n = e,
        r = n.name || "<unnamed flow>",
        i = function () {
          var e,
            t = arguments,
            i = ++Us,
            a = Ts(r + " - runid: " + i + " - init", n).apply(this, t),
            s = void 0,
            o = new Promise(function (t, n) {
              var o = 0;
              function c(e) {
                var t;
                s = void 0;
                try {
                  t = Ts(r + " - runid: " + i + " - yield " + o++, a.next).call(a, e);
                } catch (e) {
                  return n(e);
                }
                l(t);
              }
              function u(e) {
                var t;
                s = void 0;
                try {
                  t = Ts(r + " - runid: " + i + " - yield " + o++, a.throw).call(a, e);
                } catch (e) {
                  return n(e);
                }
                l(t);
              }
              function l(e) {
                if (!gi(null == e ? void 0 : e.then)) return e.done ? t(e.value) : (s = Promise.resolve(e.value)).then(c, u);
                e.then(l, n);
              }
              (e = n), c(void 0);
            });
          return (
            (o.cancel = Ts(r + " - runid: " + i + " - cancel", function () {
              try {
                s && Gs(s);
                var t = a.return(void 0),
                  n = Promise.resolve(t.value);
                n.then(pi, pi), Gs(n), e(new xs());
              } catch (t) {
                e(t);
              }
            })),
            o
          );
        };
      return (i.isMobXFlow = !0), i;
    }, js);
  function Gs(e) {
    gi(e.cancel) && e.cancel();
  }
  function Fs(e) {
    return !0 === (null == e ? void 0 : e.isMobXFlow);
  }
  function Bs(e) {
    return (function (e, t) {
      return !!e && (void 0 !== t ? !!Lo(e) && e[Gi].values_.has(t) : Lo(e) || !!e[Gi] || Bi(e) || vs(e) || Va(e));
    })(e);
  }
  function Ks(e, t, n) {
    return e.set(t, n), n;
  }
  function Vs(e, t) {
    if (null == e || "object" != typeof e || e instanceof Date || !Bs(e)) return e;
    if (Ga(e) || Va(e)) return Vs(e.get(), t);
    if (t.has(e)) return t.get(e);
    if (mo(e)) {
      var n = Ks(t, e, new Array(e.length));
      return (
        e.forEach(function (e, r) {
          n[r] = Vs(e, t);
        }),
        n
      );
    }
    if (wo(e)) {
      var r = Ks(t, e, new Set());
      return (
        e.forEach(function (e) {
          r.add(Vs(e, t));
        }),
        r
      );
    }
    if (Oo(e)) {
      var i = Ks(t, e, new Map());
      return (
        e.forEach(function (e, n) {
          i.set(n, Vs(e, t));
        }),
        i
      );
    }
    var a = Ks(t, e, {});
    return (
      (function (e) {
        if (Lo(e)) return e[Gi].ownKeys_();
        ei(38);
      })(e).forEach(function (n) {
        si.propertyIsEnumerable.call(e, n) && (a[n] = Vs(e[n], t));
      }),
      a
    );
  }
  function Hs(e, t) {
    return Vs(e, new Map());
  }
  function Ws(e, t) {
    void 0 === t && (t = void 0), cs();
    try {
      return e.apply(t);
    } finally {
      us();
    }
  }
  function zs(e) {
    return e[Gi];
  }
  Ys.bound = Mi(Ms);
  var Js = {
    has: function (e, t) {
      return zs(e).has_(t);
    },
    get: function (e, t) {
      return zs(e).get_(t);
    },
    set: function (e, t, n) {
      var r;
      return !!fi(t) && (null == (r = zs(e).set_(t, n, !0)) || r);
    },
    deleteProperty: function (e, t) {
      var n;
      return !!fi(t) && (null == (n = zs(e).delete_(t, !0)) || n);
    },
    defineProperty: function (e, t, n) {
      var r;
      return null == (r = zs(e).defineProperty_(t, n)) || r;
    },
    ownKeys: function (e) {
      return zs(e).ownKeys_();
    },
    preventExtensions: function (e) {
      ei(13);
    }
  };
  function qs(e) {
    return void 0 !== e.interceptors_ && e.interceptors_.length > 0;
  }
  function $s(e, t) {
    var n = e.interceptors_ || (e.interceptors_ = []);
    return (
      n.push(t),
      hi(function () {
        var e = n.indexOf(t);
        -1 !== e && n.splice(e, 1);
      })
    );
  }
  function Xs(e, t) {
    var n = Xa();
    try {
      for (var r = [].concat(e.interceptors_ || []), i = 0, a = r.length; i < a && ((t = r[i](t)) && !t.type && ei(14), t); i++);
      return t;
    } finally {
      Qa(n);
    }
  }
  function Qs(e) {
    return void 0 !== e.changeListeners_ && e.changeListeners_.length > 0;
  }
  function Zs(e, t) {
    var n = e.changeListeners_ || (e.changeListeners_ = []);
    return (
      n.push(t),
      hi(function () {
        var e = n.indexOf(t);
        -1 !== e && n.splice(e, 1);
      })
    );
  }
  function eo(e, t) {
    var n = Xa(),
      r = e.changeListeners_;
    if (r) {
      for (var i = 0, a = (r = r.slice()).length; i < a; i++) r[i](t);
      Qa(n);
    }
  }
  var to = Symbol("mobx-keys");
  var no = "splice",
    ro = "update",
    io = {
      get: function (e, t) {
        var n = e[Gi];
        return t === Gi
          ? n
          : "length" === t
          ? n.getArrayLength_()
          : "string" != typeof t || isNaN(t)
          ? Ci(oo, t)
            ? oo[t]
            : e[t]
          : n.get_(parseInt(t));
      },
      set: function (e, t, n) {
        var r = e[Gi];
        return "length" === t && r.setArrayLength_(n), "symbol" == typeof t || isNaN(t) ? (e[t] = n) : r.set_(parseInt(t), n), !0;
      },
      preventExtensions: function () {
        ei(15);
      }
    },
    ao = (function () {
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
          (this.atom_ = new Fi(e)),
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
          return $s(this, e);
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
            Zs(this, e)
          );
        }),
        (t.getArrayLength_ = function () {
          return this.atom_.reportObserved(), this.values_.length;
        }),
        (t.setArrayLength_ = function (e) {
          ("number" != typeof e || isNaN(e) || e < 0) && ei("Out of range: " + e);
          var t = this.values_.length;
          if (e !== t)
            if (e > t) {
              for (var n = new Array(e - t), r = 0; r < e - t; r++) n[r] = void 0;
              this.spliceWithArray_(t, 0, n);
            } else this.spliceWithArray_(e, t - e);
        }),
        (t.updateArrayLength_ = function (e, t) {
          e !== this.lastKnownLength_ && ei(16), (this.lastKnownLength_ += t), this.legacyMode_ && t > 0 && Fo(e + t + 1);
        }),
        (t.spliceWithArray_ = function (e, t, n) {
          var r = this;
          this.atom_;
          var i = this.values_.length;
          if (
            (void 0 === e ? (e = 0) : e > i ? (e = i) : e < 0 && (e = Math.max(0, i + e)),
            (t = 1 === arguments.length ? i - e : null == t ? 0 : Math.max(0, Math.min(t, i - e))),
            void 0 === n && (n = oi),
            qs(this))
          ) {
            var a = Xs(this, { object: this.proxy_, type: no, index: e, removedCount: t, added: n });
            if (!a) return oi;
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
            i = Qs(this),
            a =
              i || r
                ? {
                    observableKind: "array",
                    object: this.proxy_,
                    type: ro,
                    debugObjectName: this.atom_.name_,
                    index: e,
                    newValue: t,
                    oldValue: n
                  }
                : null;
          this.atom_.reportChanged(), i && eo(this, a);
        }),
        (t.notifyArraySplice_ = function (e, t, n) {
          var r = !this.owned_ && !1,
            i = Qs(this),
            a =
              i || r
                ? {
                    observableKind: "array",
                    object: this.proxy_,
                    debugObjectName: this.atom_.name_,
                    type: no,
                    index: e,
                    removed: n,
                    added: t,
                    removedCount: n.length,
                    addedCount: t.length
                  }
                : null;
          this.atom_.reportChanged(), i && eo(this, a);
        }),
        (t.get_ = function (e) {
          if (!(this.legacyMode_ && e >= this.values_.length)) return this.atom_.reportObserved(), this.dehanceValue_(this.values_[e]);
          console.warn("[mobx] Out of bounds read: " + e);
        }),
        (t.set_ = function (e, t) {
          var n = this.values_;
          if ((this.legacyMode_ && e > n.length && ei(17, e, n.length), e < n.length)) {
            this.atom_;
            var r = n[e];
            if (qs(this)) {
              var i = Xs(this, { type: ro, object: this.proxy_, index: e, newValue: t });
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
  function so(e, t, n, r) {
    void 0 === n && (n = "ObservableArray"), void 0 === r && (r = !1), di();
    var i = new ao(n, t, r, !1);
    bi(i.values_, Gi, i);
    var a = new Proxy(i.values_, io);
    if (((i.proxy_ = a), e && e.length)) {
      var s = xa(!0);
      i.spliceWithArray_(0, 0, e), ja(s);
    }
    return a;
  }
  var oo = {
    clear: function () {
      return this.splice(0);
    },
    replace: function (e) {
      var t = this[Gi];
      return t.spliceWithArray_(0, t.values_.length, e);
    },
    toJSON: function () {
      return this.slice();
    },
    splice: function (e, t) {
      for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
      var a = this[Gi];
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
      return this[Gi].spliceWithArray_(e, t, n);
    },
    push: function () {
      for (var e = this[Gi], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
      return e.spliceWithArray_(e.values_.length, 0, n), e.values_.length;
    },
    pop: function () {
      return this.splice(Math.max(this[Gi].values_.length - 1, 0), 1)[0];
    },
    shift: function () {
      return this.splice(0, 1)[0];
    },
    unshift: function () {
      for (var e = this[Gi], t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
      return e.spliceWithArray_(0, 0, n), e.values_.length;
    },
    reverse: function () {
      return is.trackingDerivation && ei(37, "reverse"), this.replace(this.slice().reverse()), this;
    },
    sort: function () {
      is.trackingDerivation && ei(37, "sort");
      var e = this.slice();
      return e.sort.apply(e, arguments), this.replace(e), this;
    },
    remove: function (e) {
      var t = this[Gi],
        n = t.dehanceValues_(t.values_).indexOf(e);
      return n > -1 && (this.splice(n, 1), !0);
    }
  };
  function co(e, t) {
    "function" == typeof Array.prototype[e] && (oo[e] = t(e));
  }
  function uo(e) {
    return function () {
      var t = this[Gi];
      t.atom_.reportObserved();
      var n = t.dehanceValues_(t.values_);
      return n[e].apply(n, arguments);
    };
  }
  function lo(e) {
    return function (t, n) {
      var r = this,
        i = this[Gi];
      return (
        i.atom_.reportObserved(),
        i.dehanceValues_(i.values_)[e](function (e, i) {
          return t.call(n, e, i, r);
        })
      );
    };
  }
  function ho(e) {
    return function () {
      var t = this,
        n = this[Gi];
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
  co("concat", uo),
    co("flat", uo),
    co("includes", uo),
    co("indexOf", uo),
    co("join", uo),
    co("lastIndexOf", uo),
    co("slice", uo),
    co("toString", uo),
    co("toLocaleString", uo),
    co("every", lo),
    co("filter", lo),
    co("find", lo),
    co("findIndex", lo),
    co("flatMap", lo),
    co("forEach", lo),
    co("map", lo),
    co("some", lo),
    co("reduce", ho),
    co("reduceRight", ho);
  var po,
    go,
    fo = Si("ObservableArrayAdministration", ao);
  function mo(e) {
    return mi(e) && fo(e[Gi]);
  }
  var vo = {},
    _o = "add",
    yo = "delete";
  (po = Symbol.iterator), (go = Symbol.toStringTag);
  var bo,
    So,
    Eo = (function () {
      function e(e, t, n) {
        var r = this;
        void 0 === t && (t = Hi),
          void 0 === n && (n = "ObservableMap"),
          (this.enhancer_ = void 0),
          (this.name_ = void 0),
          (this[Gi] = vo),
          (this.data_ = void 0),
          (this.hasMap_ = void 0),
          (this.keysAtom_ = void 0),
          (this.interceptors_ = void 0),
          (this.changeListeners_ = void 0),
          (this.dehancer = void 0),
          (this.enhancer_ = t),
          (this.name_ = n),
          gi(Map) || ei(18),
          (this.keysAtom_ = Ki("ObservableMap.keys()")),
          (this.data_ = new Map()),
          (this.hasMap_ = new Map()),
          (function (e, t) {
            var n = xa(e);
            try {
              return t();
            } finally {
              ja(n);
            }
          })(!0, function () {
            r.merge(e);
          });
      }
      var t = e.prototype;
      return (
        (t.has_ = function (e) {
          return this.data_.has(e);
        }),
        (t.has = function (e) {
          var t = this;
          if (!is.trackingDerivation) return this.has_(e);
          var n = this.hasMap_.get(e);
          if (!n) {
            var r = (n = new Ya(this.has_(e), Wi, "ObservableMap.key?", !1));
            this.hasMap_.set(e, r),
              Ds(r, function () {
                return t.hasMap_.delete(e);
              });
          }
          return n.get();
        }),
        (t.set = function (e, t) {
          var n = this.has_(e);
          if (qs(this)) {
            var r = Xs(this, { type: n ? ro : _o, object: this, newValue: t, name: e });
            if (!r) return this;
            t = r.newValue;
          }
          return n ? this.updateValue_(e, t) : this.addValue_(e, t), this;
        }),
        (t.delete = function (e) {
          var t = this;
          if ((this.keysAtom_, qs(this)) && !Xs(this, { type: yo, object: this, name: e })) return !1;
          if (this.has_(e)) {
            var n = Qs(this),
              r = n
                ? {
                    observableKind: "map",
                    debugObjectName: this.name_,
                    type: yo,
                    object: this,
                    oldValue: this.data_.get(e).value_,
                    name: e
                  }
                : null;
            return (
              Ws(function () {
                var n;
                t.keysAtom_.reportChanged(),
                  null == (n = t.hasMap_.get(e)) || n.setNewValue_(!1),
                  t.data_.get(e).setNewValue_(void 0),
                  t.data_.delete(e);
              }),
              n && eo(this, r),
              !0
            );
          }
          return !1;
        }),
        (t.updateValue_ = function (e, t) {
          var n = this.data_.get(e);
          if ((t = n.prepareNewValue_(t)) !== is.UNCHANGED) {
            var r = Qs(this),
              i = r
                ? { observableKind: "map", debugObjectName: this.name_, type: ro, object: this, oldValue: n.value_, name: e, newValue: t }
                : null;
            n.setNewValue_(t), r && eo(this, i);
          }
        }),
        (t.addValue_ = function (e, t) {
          var n = this;
          this.keysAtom_,
            Ws(function () {
              var r,
                i = new Ya(t, n.enhancer_, "ObservableMap.key", !1);
              n.data_.set(e, i), (t = i.value_), null == (r = n.hasMap_.get(e)) || r.setNewValue_(!0), n.keysAtom_.reportChanged();
            });
          var r = Qs(this),
            i = r ? { observableKind: "map", debugObjectName: this.name_, type: _o, object: this, name: e, newValue: t } : null;
          r && eo(this, i);
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
          return $o({
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
          return $o({
            next: function () {
              var n = t.next(),
                r = n.done,
                i = n.value;
              return { done: r, value: r ? void 0 : [i, e.get(i)] };
            }
          });
        }),
        (t[po] = function () {
          return this.entries();
        }),
        (t.forEach = function (e, t) {
          for (var n, r = xi(this); !(n = r()).done; ) {
            var i = n.value,
              a = i[0],
              s = i[1];
            e.call(t, s, a, this);
          }
        }),
        (t.merge = function (e) {
          var t = this;
          return (
            Oo(e) && (e = new Map(e)),
            Ws(function () {
              vi(e)
                ? (function (e) {
                    var t = Object.keys(e);
                    if (!Ai) return t;
                    var n = Object.getOwnPropertySymbols(e);
                    return n.length
                      ? [].concat(
                          t,
                          n.filter(function (t) {
                            return si.propertyIsEnumerable.call(e, t);
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
                : Ei(e)
                ? (e.constructor !== Map && ei(19, e),
                  e.forEach(function (e, n) {
                    return t.set(n, e);
                  }))
                : null != e && ei(20, e);
            }),
            this
          );
        }),
        (t.clear = function () {
          var e = this;
          Ws(function () {
            $a(function () {
              for (var t, n = xi(e.keys()); !(t = n()).done; ) {
                var r = t.value;
                e.delete(r);
              }
            });
          });
        }),
        (t.replace = function (e) {
          var t = this;
          return (
            Ws(function () {
              for (
                var n,
                  r = (function (e) {
                    if (Ei(e) || Oo(e)) return e;
                    if (Array.isArray(e)) return new Map(e);
                    if (vi(e)) {
                      var t = new Map();
                      for (var n in e) t.set(n, e[n]);
                      return t;
                    }
                    return ei(21, e);
                  })(e),
                  i = new Map(),
                  a = !1,
                  s = xi(t.data_.keys());
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
              for (var u, l = xi(r.entries()); !(u = l()).done; ) {
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
                  for (var m = t.data_.keys(), v = i.keys(), _ = m.next(), y = v.next(); !_.done; ) {
                    if (_.value !== y.value) {
                      t.keysAtom_.reportChanged();
                      break;
                    }
                    (_ = m.next()), (y = v.next());
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
          return Zs(this, e);
        }),
        (t.intercept_ = function (e) {
          return $s(this, e);
        }),
        Ni(e, [
          {
            key: "size",
            get: function () {
              return this.keysAtom_.reportObserved(), this.data_.size;
            }
          },
          {
            key: go,
            get: function () {
              return "Map";
            }
          }
        ]),
        e
      );
    })(),
    Oo = Si("ObservableMap", Eo);
  var Ao = {};
  (bo = Symbol.iterator), (So = Symbol.toStringTag);
  var To = (function () {
      function e(e, t, n) {
        void 0 === t && (t = Hi),
          void 0 === n && (n = "ObservableSet"),
          (this.name_ = void 0),
          (this[Gi] = Ao),
          (this.data_ = new Set()),
          (this.atom_ = void 0),
          (this.changeListeners_ = void 0),
          (this.interceptors_ = void 0),
          (this.dehancer = void 0),
          (this.enhancer_ = void 0),
          (this.name_ = n),
          gi(Set) || ei(22),
          (this.atom_ = Ki(this.name_)),
          (this.enhancer_ = function (e, r) {
            return t(e, r, n);
          }),
          e && this.replace(e);
      }
      var t = e.prototype;
      return (
        (t.dehanceValue_ = function (e) {
          return void 0 !== this.dehancer ? this.dehancer(e) : e;
        }),
        (t.clear = function () {
          var e = this;
          Ws(function () {
            $a(function () {
              for (var t, n = xi(e.data_.values()); !(t = n()).done; ) {
                var r = t.value;
                e.delete(r);
              }
            });
          });
        }),
        (t.forEach = function (e, t) {
          for (var n, r = xi(this); !(n = r()).done; ) {
            var i = n.value;
            e.call(t, i, i, this);
          }
        }),
        (t.add = function (e) {
          var t = this;
          if ((this.atom_, qs(this)) && !Xs(this, { type: _o, object: this, newValue: e })) return this;
          if (!this.has(e)) {
            Ws(function () {
              t.data_.add(t.enhancer_(e, void 0)), t.atom_.reportChanged();
            });
            var n = Qs(this),
              r = n ? { observableKind: "set", debugObjectName: this.name_, type: _o, object: this, newValue: e } : null;
            n && eo(this, r);
          }
          return this;
        }),
        (t.delete = function (e) {
          var t = this;
          if (qs(this) && !Xs(this, { type: yo, object: this, oldValue: e })) return !1;
          if (this.has(e)) {
            var n = Qs(this),
              r = n ? { observableKind: "set", debugObjectName: this.name_, type: yo, object: this, oldValue: e } : null;
            return (
              Ws(function () {
                t.atom_.reportChanged(), t.data_.delete(e);
              }),
              n && eo(this, r),
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
          return $o({
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
          return $o({
            next: function () {
              return t < n.length ? { value: e.dehanceValue_(n[t++]), done: !1 } : { done: !0 };
            }
          });
        }),
        (t.replace = function (e) {
          var t = this;
          return (
            wo(e) && (e = new Set(e)),
            Ws(function () {
              Array.isArray(e) || Oi(e)
                ? (t.clear(),
                  e.forEach(function (e) {
                    return t.add(e);
                  }))
                : null != e && ei("Cannot initialize set from " + e);
            }),
            this
          );
        }),
        (t.observe_ = function (e, t) {
          return Zs(this, e);
        }),
        (t.intercept_ = function (e) {
          return $s(this, e);
        }),
        (t.toJSON = function () {
          return Array.from(this);
        }),
        (t.toString = function () {
          return "[object ObservableSet]";
        }),
        (t[bo] = function () {
          return this.values();
        }),
        Ni(e, [
          {
            key: "size",
            get: function () {
              return this.atom_.reportObserved(), this.data_.size;
            }
          },
          {
            key: So,
            get: function () {
              return "Set";
            }
          }
        ]),
        e
      );
    })(),
    wo = Si("ObservableSet", To),
    Co = Object.create(null),
    Io = "remove",
    Ro = (function () {
      function e(e, t, n, r) {
        void 0 === t && (t = new Map()),
          void 0 === r && (r = ua),
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
          (this.keysAtom_ = new Fi("ObservableObject.keys")),
          (this.isPlainObject_ = vi(this.target_));
      }
      var t = e.prototype;
      return (
        (t.getObservablePropValue_ = function (e) {
          return this.values_.get(e).get();
        }),
        (t.setObservablePropValue_ = function (e, t) {
          var n = this.values_.get(e);
          if (n instanceof Ka) return n.set(t), !0;
          if (qs(this)) {
            var r = Xs(this, { type: ro, object: this.proxy_ || this.target_, name: e, newValue: t });
            if (!r) return null;
            t = r.newValue;
          }
          if ((t = n.prepareNewValue_(t)) !== is.UNCHANGED) {
            var i = Qs(this),
              a = i
                ? {
                    type: ro,
                    observableKind: "object",
                    debugObjectName: this.name_,
                    object: this.proxy_ || this.target_,
                    oldValue: n.value_,
                    name: e,
                    newValue: t
                  }
                : null;
            n.setNewValue_(t), i && eo(this, a);
          }
          return !0;
        }),
        (t.get_ = function (e) {
          return is.trackingDerivation && !Ci(this.target_, e) && this.has_(e), this.target_[e];
        }),
        (t.set_ = function (e, t, n) {
          return (
            void 0 === n && (n = !1),
            Ci(this.target_, e)
              ? this.values_.has(e)
                ? this.setObservablePropValue_(e, t)
                : n
                ? Reflect.set(this.target_, e, t)
                : ((this.target_[e] = t), !0)
              : this.extend_(e, { value: t, enumerable: !0, writable: !0, configurable: !0 }, this.defaultAnnotation_, n)
          );
        }),
        (t.has_ = function (e) {
          if (!is.trackingDerivation) return e in this.target_;
          this.pendingKeys_ || (this.pendingKeys_ = new Map());
          var t = this.pendingKeys_.get(e);
          return t || ((t = new Ya(e in this.target_, Wi, "ObservableObject.key?", !1)), this.pendingKeys_.set(e, t)), t.get();
        }),
        (t.make_ = function (e, t) {
          if ((!0 === t && (t = this.defaultAnnotation_), !1 !== t)) {
            if (!(e in this.target_)) {
              var n;
              if (null != (n = this.target_[ji]) && n[e]) return;
              ei(1, t.annotationType_, this.name_ + "." + e.toString());
            }
            for (var r = this.target_; r && r !== si; ) {
              var i = ii(r, e);
              if (i) {
                var a = t.make_(this, e, i, r);
                if (0 === a) return;
                if (1 === a) break;
              }
              r = Object.getPrototypeOf(r);
            }
            ko(this, t, e);
          }
        }),
        (t.extend_ = function (e, t, n, r) {
          if ((void 0 === r && (r = !1), !0 === n && (n = this.defaultAnnotation_), !1 === n)) return this.defineProperty_(e, t, r);
          var i = n.extend_(this, e, t, r);
          return i && ko(this, n, e), i;
        }),
        (t.defineProperty_ = function (e, t, n) {
          void 0 === n && (n = !1);
          try {
            cs();
            var r = this.delete_(e);
            if (!r) return r;
            if (qs(this)) {
              var i = Xs(this, { object: this.proxy_ || this.target_, name: e, type: _o, newValue: t.value });
              if (!i) return null;
              var a = i.newValue;
              t.value !== a && (t = Pi({}, t, { value: a }));
            }
            if (n) {
              if (!Reflect.defineProperty(this.target_, e, t)) return !1;
            } else ai(this.target_, e, t);
            this.notifyPropertyAddition_(e, t.value);
          } finally {
            us();
          }
          return !0;
        }),
        (t.defineObservableProperty_ = function (e, t, n, r) {
          void 0 === r && (r = !1);
          try {
            cs();
            var i = this.delete_(e);
            if (!i) return i;
            if (qs(this)) {
              var a = Xs(this, { object: this.proxy_ || this.target_, name: e, type: _o, newValue: t });
              if (!a) return null;
              t = a.newValue;
            }
            var s = Do(e),
              o = { configurable: !is.safeDescriptors || this.isPlainObject_, enumerable: !0, get: s.get, set: s.set };
            if (r) {
              if (!Reflect.defineProperty(this.target_, e, o)) return !1;
            } else ai(this.target_, e, o);
            var c = new Ya(t, n, "ObservableObject.key", !1);
            this.values_.set(e, c), this.notifyPropertyAddition_(e, c.value_);
          } finally {
            us();
          }
          return !0;
        }),
        (t.defineComputedProperty_ = function (e, t, n) {
          void 0 === n && (n = !1);
          try {
            cs();
            var r = this.delete_(e);
            if (!r) return r;
            if (qs(this)) if (!Xs(this, { object: this.proxy_ || this.target_, name: e, type: _o, newValue: void 0 })) return null;
            t.name || (t.name = "ObservableObject.key"), (t.context = this.proxy_ || this.target_);
            var i = Do(e),
              a = { configurable: !is.safeDescriptors || this.isPlainObject_, enumerable: !1, get: i.get, set: i.set };
            if (n) {
              if (!Reflect.defineProperty(this.target_, e, a)) return !1;
            } else ai(this.target_, e, a);
            this.values_.set(e, new Ka(t)), this.notifyPropertyAddition_(e, void 0);
          } finally {
            us();
          }
          return !0;
        }),
        (t.delete_ = function (e, t) {
          if ((void 0 === t && (t = !1), !Ci(this.target_, e))) return !0;
          if (qs(this) && !Xs(this, { object: this.proxy_ || this.target_, name: e, type: Io })) return null;
          try {
            var n, r;
            cs();
            var i,
              a = Qs(this),
              s = this.values_.get(e),
              o = void 0;
            if (!s && a) o = null == (i = ii(this.target_, e)) ? void 0 : i.value;
            if (t) {
              if (!Reflect.deleteProperty(this.target_, e)) return !1;
            } else delete this.target_[e];
            if (
              (s && (this.values_.delete(e), s instanceof Ya && (o = s.value_), ds(s)),
              this.keysAtom_.reportChanged(),
              null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(e in this.target_),
              a)
            ) {
              var c = {
                type: Io,
                observableKind: "object",
                object: this.proxy_ || this.target_,
                debugObjectName: this.name_,
                oldValue: o,
                name: e
              };
              0, a && eo(this, c);
            }
          } finally {
            us();
          }
          return !0;
        }),
        (t.observe_ = function (e, t) {
          return Zs(this, e);
        }),
        (t.intercept_ = function (e) {
          return $s(this, e);
        }),
        (t.notifyPropertyAddition_ = function (e, t) {
          var n,
            r,
            i = Qs(this);
          if (i) {
            var a = i
              ? {
                  type: _o,
                  observableKind: "object",
                  debugObjectName: this.name_,
                  object: this.proxy_ || this.target_,
                  name: e,
                  newValue: t
                }
              : null;
            i && eo(this, a);
          }
          null == (n = this.pendingKeys_) || null == (r = n.get(e)) || r.set(!0), this.keysAtom_.reportChanged();
        }),
        (t.ownKeys_ = function () {
          return this.keysAtom_.reportObserved(), Ti(this.target_);
        }),
        (t.keys_ = function () {
          return this.keysAtom_.reportObserved(), Object.keys(this.target_);
        }),
        e
      );
    })();
  function No(e, t) {
    var n;
    if (Ci(e, Gi)) return e;
    var r = null != (n = null == t ? void 0 : t.name) ? n : "ObservableObject",
      i = new Ro(
        e,
        new Map(),
        String(r),
        (function (e) {
          var t;
          return e ? (null != (t = e.defaultDecorator) ? t : la(e)) : void 0;
        })(t)
      );
    return yi(e, Gi, i), e;
  }
  var Po = Si("ObservableObjectAdministration", Ro);
  function Do(e) {
    return (
      Co[e] ||
      (Co[e] = {
        get: function () {
          return this[Gi].getObservablePropValue_(e);
        },
        set: function (t) {
          return this[Gi].setObservablePropValue_(e, t);
        }
      })
    );
  }
  function Lo(e) {
    return !!mi(e) && Po(e[Gi]);
  }
  function ko(e, t, n) {
    var r;
    null == (r = e.target_[ji]) || delete r[n];
  }
  var Uo = Yo(0),
    xo = 0,
    jo = function () {};
  !(function (e, t) {
    Object.setPrototypeOf
      ? Object.setPrototypeOf(e.prototype, t)
      : void 0 !== e.prototype.__proto__
      ? (e.prototype.__proto__ = t)
      : (e.prototype = t);
  })(jo, Array.prototype);
  var Mo = (function (e, t, n) {
    function r(t, n, r, i) {
      var a;
      void 0 === r && (r = "ObservableArray"), void 0 === i && (i = !1), (a = e.call(this) || this);
      var s = new ao(r, n, i, !0);
      if (((s.proxy_ = ki(a)), bi(ki(a), Gi, s), t && t.length)) {
        var o = xa(!0);
        a.spliceWithArray(0, 0, t), ja(o);
      }
      return Object.defineProperty(ki(a), "0", Uo), a;
    }
    Di(r, e);
    var i = r.prototype;
    return (
      (i.concat = function () {
        this[Gi].atom_.reportObserved();
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return Array.prototype.concat.apply(
          this.slice(),
          t.map(function (e) {
            return mo(e) ? e.slice() : e;
          })
        );
      }),
      (i[n] = function () {
        var e = this,
          t = 0;
        return $o({
          next: function () {
            return t < e.length ? { value: e[t++], done: !1 } : { done: !0, value: void 0 };
          }
        });
      }),
      Ni(r, [
        {
          key: "length",
          get: function () {
            return this[Gi].getArrayLength_();
          },
          set: function (e) {
            this[Gi].setArrayLength_(e);
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
  })(jo, Symbol.toStringTag, Symbol.iterator);
  function Yo(e) {
    return {
      enumerable: !1,
      configurable: !0,
      get: function () {
        return this[Gi].get_(e);
      },
      set: function (t) {
        this[Gi].set_(e, t);
      }
    };
  }
  function Go(e) {
    ai(Mo.prototype, "" + e, Yo(e));
  }
  function Fo(e) {
    if (e > xo) {
      for (var t = xo; t < e + 100; t++) Go(t);
      xo = e;
    }
  }
  function Bo(e, t, n) {
    return new Mo(e, t, n);
  }
  function Ko(e, t) {
    if ("object" == typeof e && null !== e) {
      if (mo(e)) return void 0 !== t && ei(23), e[Gi].atom_;
      if (wo(e)) return e.atom_;
      if (Oo(e)) {
        if (void 0 === t) return e.keysAtom_;
        var n = e.data_.get(t) || e.hasMap_.get(t);
        return n || ei(25, t, Ho(e)), n;
      }
      if (Lo(e)) {
        if (!t) return ei(26);
        var r = e[Gi].values_.get(t);
        return r || ei(27, t, Ho(e)), r;
      }
      if (Bi(e) || Va(e) || vs(e)) return e;
    } else if (gi(e) && vs(e[Gi])) return e[Gi];
    ei(28);
  }
  function Vo(e, t) {
    return e || ei(29), void 0 !== t ? Vo(Ko(e, t)) : Bi(e) || Va(e) || vs(e) || Oo(e) || wo(e) ? e : e[Gi] ? e[Gi] : void ei(24, e);
  }
  function Ho(e, t) {
    var n;
    if (void 0 !== t) n = Ko(e, t);
    else {
      if (Cs(e)) return e.name;
      n = Lo(e) || Oo(e) || wo(e) ? Vo(e) : Ko(e);
    }
    return n.name_;
  }
  Object.entries(oo).forEach(function (e) {
    var t = e[0],
      n = e[1];
    "concat" !== t && yi(Mo.prototype, t, n);
  }),
    Fo(1e3);
  var Wo = si.toString;
  function zo(e, t, n) {
    return void 0 === n && (n = -1), Jo(e, t, n);
  }
  function Jo(e, t, n, r, i) {
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
      if (c !== u && !(gi(c) && c instanceof c && gi(u) && u instanceof u) && "constructor" in e && "constructor" in t) return !1;
    }
    if (0 === n) return !1;
    n < 0 && (n = -1), (i = i || []);
    for (var l = (r = r || []).length; l--; ) if (r[l] === e) return i[l] === t;
    if ((r.push(e), i.push(t), o)) {
      if ((l = e.length) !== t.length) return !1;
      for (; l--; ) if (!Jo(e[l], t[l], n - 1, r, i)) return !1;
    } else {
      var d,
        h = Object.keys(e);
      if (((l = h.length), Object.keys(t).length !== l)) return !1;
      for (; l--; ) if (!Ci(t, (d = h[l])) || !Jo(e[d], t[d], n - 1, r, i)) return !1;
    }
    return r.pop(), i.pop(), !0;
  }
  function qo(e) {
    return mo(e) ? e.slice() : Ei(e) || Oo(e) || Oi(e) || wo(e) ? Array.from(e.entries()) : e;
  }
  function $o(e) {
    return (e[Symbol.iterator] = Xo), e;
  }
  function Xo() {
    return this;
  }
  ["Symbol", "Map", "Set"].forEach(function (e) {
    void 0 === ni()[e] && ei("MobX requires global '" + e + "' to be available or polyfilled");
  }),
    "object" == typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ &&
      __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
        spy: function (e) {
          return console.warn("[mobx.spy] Is a no-op in production builds"), function () {};
        },
        extras: { getDebugName: Ho },
        $mobx: Gi
      });
  class Qo extends EventTarget {
    constructor(e = {}, t = kr, n = null, r = !0, i = !0) {
      super(),
        this._instance !== this &&
          ((this._instance = this),
          (this.state = e),
          (this.storageType = t),
          (this.storageKey = n),
          (this.merge = r),
          (function (e, t, n) {
            if (vi(e)) return ks(e, e, t, n);
            var r = No(e, n)[Gi];
            if (!e[to]) {
              var i = Object.getPrototypeOf(e),
                a = new Set([].concat(Ti(e), Ti(i)));
              a.delete("constructor"), a.delete(Gi), yi(i, to, a);
            }
            cs();
            try {
              e[to].forEach(function (e) {
                return r.make_(e, !t || !(e in t) || t[e]);
              });
            } finally {
              us();
            }
          })(this),
          (this._persistentStore = null),
          (this._persistOn = i));
    }
    async initialise() {
      var e = this;
      return new Promise(async function (t, n) {
        (e._persistentStore = new xr(e.storageType)),
          e._persistentStore.onUpdate(async function (t) {
            JSON.stringify(e.state) !== JSON.stringify(t) && (e.state = t);
          });
        let r = await e._persistentStore.retrieve(e.storageKey, Hs(e.state));
        e.state && (e.state = r), e._startAutoSaving(e, e.storageKey), t(r);
      });
    }
    set persist(e) {
      (this._persistOn = e), e && this.save();
    }
    save() {
      this._storeOnSave(this, this.storageKey, !0);
    }
    get stateJSON() {
      return Hs(this.state);
    }
    _startAutoSaving(e, t) {
      var n = this;
      Is(async function () {
        n._storeOnSave(e, t), n.dispatchEvent(new CustomEvent("onStoreUpdated"));
      });
    }
    async _storeOnSave(e, t, n = !1) {
      (this._persistOn || n) && (await this._persistentStore.store(t, Hs(e.state), this.merge));
    }
  }
  const Zo = new (class extends Qo {
    constructor() {
      super({ token: "" }, Lr, "th.rw4gc.token.store");
    }
    setToken(e) {
      this.state.token = e;
    }
  })();
  const ec = function (e) {
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
              enabled: !1,
              dragging: !1,
              hidden: !1,
              supported: !1
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
            { name: "translator", key: "settings_features_translator", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "voicenote", key: "settings_features_voicenote", enabled: !0, dragging: !1, supported: !0 },
            { name: "vocablist", key: "settings_features_vocabulary", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "audiomaker", key: "settings_features_audio_maker", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "clicktospeak", key: "settings_features_hover_speech", enabled: !0, dragging: !1, hidden: !1, supported: !0 },
            { name: "websearch", key: "settings_features_web_search", enabled: !1, dragging: !1, hidden: !1, supported: !1 },
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
    tc = new (class extends Qo {
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
          features: ec("__TOOLBARTYPE__"),
          theme: "Light",
          accounts: { google: !1, microsoft: !1, email: "" },
          defaultsSet: !1,
          driveInstall: !1,
          notificationVersion: 0
        };
        super(e, Lr, "th.rw4gc.settings.store", !1, !1), (this.initialState = e);
      }
      setWholeState(e) {
        this.state = e;
      }
      setDefaultState() {
        this.setWholeState(this.initialState), this.save();
      }
      setNotifcationVersion(e) {
        this.state.notificationVersion = e;
      }
      setScreenMaskingState(e) {
        this.state.screenMasking = e;
      }
      setDriveInstall(e) {
        this.state.driveInstall = e;
      }
      setCurrentPage(e) {
        this.state.activeSettingsTab = e;
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
          void 0 !== e.theme && ((this.state.theme = e.theme), (this.initialState.theme = e.theme));
      }
      addCheckitDictionaryItem(e) {
        this.state.checkIt.dictionary.includes(e) || this.state.checkIt.dictionary.push(e);
      }
      setPredictAheadPolicy(e) {
        (this.state.prediction.general.predictAheadPolicy = e),
          this.state.prediction.general.predictAheadPolicy || (this.state.prediction.general.predictAhead = !1);
      }
      resetUser(e) {
        (this.state.accounts.email = e), (this.state.accounts.microsoft = !1), (this.state.accounts.google = !1), this.save();
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
    })();
  var nc = ["body"];
  function rc(e, t) {
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
  function ic(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? rc(Object(n), !0).forEach(function (t) {
            ac(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : rc(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function ac(e, t, n) {
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
  function sc(e, t) {
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
  function oc(e, t, n, r, i, a, s) {
    try {
      var o = e[a](s),
        c = o.value;
    } catch (e) {
      return void n(e);
    }
    o.done ? t(c) : Promise.resolve(c).then(r, i);
  }
  function cc(e) {
    return function () {
      var t = this,
        n = arguments;
      return new Promise(function (r, i) {
        var a = e.apply(t, n);
        function s(e) {
          oc(a, r, i, s, o, "next", e);
        }
        function o(e) {
          oc(a, r, i, s, o, "throw", e);
        }
        s(void 0);
      });
    };
  }
  class uc {
    constructor() {}
    static doFetch(e) {
      var t = arguments,
        n = this;
      return cc(function* () {
        var r = t.length > 1 && void 0 !== t[1] ? t[1] : {},
          { body: i } = r,
          a = sc(r, nc);
        return new Promise(
          (function () {
            var t = cc(function* (t, r) {
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
              var d = ic(ic({ method: n.method }, a), {}, { headers: ic({}, a.headers) });
              i && (d.body = i);
              var h = null;
              if (n.timeout > 0)
                try {
                  var p = new AbortController(),
                    g = setTimeout(() => p.abort(), n.timeout);
                  (h = yield fetch(e, ic(ic({}, d), {}, { signal: p.signal }))), clearTimeout(g);
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
  class lc {
    constructor() {
      chrome.runtime.onMessage.addListener((e, t, n) => {
        if (t.id !== chrome.runtime.id) return !1;
        if (!e.command) return !1;
        if ("swfetch8598" === e.command)
          uc.doFetch(e.url, e.options).then((e) => {
            n(e);
          });
        return !0;
      });
    }
  }
  const dc = Object.freeze({ GOOGLE: "Google", MICROSOFT: "Microsoft", DEFAULT: "Default" });
  function hc(e, t) {
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
  function pc(e, t, n) {
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
  let gc = class {
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
    fc = class {
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
  const mc = (e, ...t) => {
      if (!t.length) return e;
      const n = t.shift();
      if (_c(e) && _c(n)) {
        const r = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? hc(Object(n), !0).forEach(function (t) {
                  pc(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : hc(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
          }
          return e;
        })({}, e);
        for (const e in n)
          Object.prototype.hasOwnProperty.call(n, e) &&
            (_c(n[e]) && _c(r[e])
              ? (r[e] = mc(r[e], n[e]))
              : Array.isArray(n[e]) && Array.isArray(r[e])
              ? (r[e] = vc(r[e], n[e]))
              : (r[e] = n[e]));
        return mc(r, ...t);
      }
      return mc(e, ...t);
    },
    vc = (e, t) => {
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
        i = t.map((e) => e[r]);
      return (
        e
          .map((e) => e[r])
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
    _c = (e) => null !== e && "object" == typeof e && !Array.isArray(e),
    yc = "local";
  let bc = class extends gc {
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
              let n = JSON.parse(fc.decode(Object.values(e)[0].newValue));
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
            const i = fc.encode(t),
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
                if (((i = fc.decode(a[e])), n._keys.add(e), !t)) return void r(JSON.parse(i));
                r(mc(t, JSON.parse(i)));
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
    Sc = class {
      constructor(e, t = "microsoft") {
        (this.idName = t),
          (this.clientId = e),
          (this.userInfo = void 0),
          (this.email = void 0),
          (this.accessCode = void 0),
          (this.redirectUri =
            "undefined" != typeof chrome && chrome.identity ? chrome.identity.getRedirectURL() : `${window.location.origin}/index.html`),
          (this.storage = new bc(yc)),
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
    Ec = class {
      constructor(e = "google") {
        (this.idName = e),
          (this.userScopes = ["https://www.googleapis.com/auth/userinfo.email"]),
          (this.docScopes = [
            "https://www.googleapis.com/auth/drive.apps.readonly",
            "https://www.googleapis.com/auth/drive",
            "https://www.googleapis.com/auth/drive.appdata"
          ]),
          (this.driveScopes = ["https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/drive.install"]);
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
    },
    Oc = class {
      constructor() {
        this.auth = null;
      }
      async initialise(e) {
        var t = this;
        return new Promise(async function (n) {
          switch (e) {
            case dc.GOOGLE:
              return (t.auth = new Ec()), void n();
            case dc.MICROSOFT:
              return (t.auth = new Sc("0113ff4a-9673-4c71-8cba-9229b16b7ad8")), void n();
            default:
              let e = await t.getAccountTypeFromProfileInfo();
              if (e) return (t.auth = e), void n();
              chrome.runtime.onMessage.addListener(async function (e, r) {
                if (r.id === chrome.runtime.id && e.command)
                  return "thswsetaccounttype" === e.command.toLowerCase()
                    ? ("MS" === e.accountType ? (t.auth = new Sc("0113ff4a-9673-4c71-8cba-9229b16b7ad8")) : (t.auth = new Ec()), void n())
                    : void n();
              });
              let r = { active: !0, currentWindow: !0 },
                i = await t.chromeTabsQuery(r);
              if (i[0].url.includes("selectiondialog.html?q"));
              else {
                let e = await t.chromeTabsQuery({ url: ["chrome-extension://" + chrome.runtime.id + "/*"] });
                e[0]
                  ? await chrome.tabs.update(e[0].id, { active: !0 })
                  : chrome.tabs.create({
                      url: "chrome-extension://" + chrome.runtime.id + "/selectiondialog/selectiondialog.html?q=" + i[0].id
                    });
              }
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
                  return (n = (await e._isEdge()) ? new Sc("0113ff4a-9673-4c71-8cba-9229b16b7ad8") : new Ec()), void t(n);
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
  class Ac {
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
      return console.log("swAuthorize"), (this.bgAuth = new Oc()), await this.bgAuth.initialise(e), this.bgAuth.authorize(t);
    }
    async swAuthorizeForDocCreation(e) {
      return (this.bgAuth = new Oc()), await this.bgAuth.initialise(e), this.bgAuth.authorizeDocumentCreation();
    }
    async swAuthorizeForDriveInstall(e) {
      return (this.bgAuth = new Oc()), await this.bgAuth.initialise(e), this.bgAuth.authorizeDriveInstall();
    }
    async swGetAndValidateAccessToken(e, t) {
      (this.bgAuth = new Oc()), await this.bgAuth.initialise(t);
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
  const Tc = Object.freeze([
      { matches: ["*"], settings: { target: {}, files: ["content.bundle.js"] } },
      { matches: ["https://docs.google.com/document/*"], settings: { target: {}, files: ["gdocs.content.bundle.js"] } },
      { matches: ["https://docs.google.com/presentation/*"], settings: { target: {}, files: ["gdocs.content.bundle.js"] } }
    ]),
    wc = Object.freeze([{ matches: ["https://docs.google.com/document/*"], settings: { target: {}, files: ["gdi.bundle.js"] } }]),
    Cc = (e, t) => {
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
    Ic = Object.freeze({ GOOGLE: "Google", MICROSOFT: "Microsoft", DEFAULT: "Default" });
  function Rc(e, t) {
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
  function Nc(e, t, n) {
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
  let Pc = class {
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
    Dc = class {
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
  const Lc = (e, ...t) => {
      if (!t.length) return e;
      const n = t.shift();
      if (Uc(e) && Uc(n)) {
        const r = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? Rc(Object(n), !0).forEach(function (t) {
                  Nc(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Rc(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
          }
          return e;
        })({}, e);
        for (const e in n)
          Object.prototype.hasOwnProperty.call(n, e) &&
            (Uc(n[e]) && Uc(r[e])
              ? (r[e] = Lc(r[e], n[e]))
              : Array.isArray(n[e]) && Array.isArray(r[e])
              ? (r[e] = kc(r[e], n[e]))
              : (r[e] = n[e]));
        return Lc(r, ...t);
      }
      return Lc(e, ...t);
    },
    kc = (e, t) => {
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
        i = t.map((e) => e[r]);
      return (
        e
          .map((e) => e[r])
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
    Uc = (e) => null !== e && "object" == typeof e && !Array.isArray(e),
    xc = "local";
  let jc = class extends Pc {
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
            let n = JSON.parse(Dc.decode(Object.values(e)[0].newValue));
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
          const i = Dc.encode(t),
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
              if (((i = Dc.decode(a[e])), n._keys.add(e), !t)) return void r(JSON.parse(i));
              r(Lc(t, JSON.parse(i)));
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
  class Mc {
    constructor(e, t = "microsoft") {
      (this.idName = t),
        (this.clientId = e),
        (this.userInfo = void 0),
        (this.email = void 0),
        (this.accessCode = void 0),
        (this.redirectUri =
          "undefined" != typeof chrome && chrome.identity ? chrome.identity.getRedirectURL() : `${window.location.origin}/index.html`),
        (this.storage = new jc(xc)),
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
  class Yc {
    constructor(e = "google") {
      (this.idName = e),
        (this.userScopes = ["https://www.googleapis.com/auth/userinfo.email"]),
        (this.docScopes = [
          "https://www.googleapis.com/auth/drive.apps.readonly",
          "https://www.googleapis.com/auth/drive",
          "https://www.googleapis.com/auth/drive.appdata"
        ]),
        (this.driveScopes = ["https://www.googleapis.com/auth/drive.file", "https://www.googleapis.com/auth/drive.install"]);
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
  class Gc {
    constructor() {
      this.auth = null;
    }
    async initialise(e) {
      var t = this;
      return new Promise(async function (n) {
        switch (e) {
          case Ic.GOOGLE:
            return (t.auth = new Yc()), void n();
          case Ic.MICROSOFT:
            return (t.auth = new Mc("0113ff4a-9673-4c71-8cba-9229b16b7ad8")), void n();
          default:
            let e = await t.getAccountTypeFromProfileInfo();
            if (e) return (t.auth = e), void n();
            chrome.runtime.onMessage.addListener(async function (e, r) {
              if (r.id === chrome.runtime.id && e.command)
                return "thswsetaccounttype" === e.command.toLowerCase()
                  ? ("MS" === e.accountType ? (t.auth = new Mc("0113ff4a-9673-4c71-8cba-9229b16b7ad8")) : (t.auth = new Yc()), void n())
                  : void n();
            });
            let r = { active: !0, currentWindow: !0 },
              i = await t.chromeTabsQuery(r);
            if (i[0].url.includes("selectiondialog.html?q"));
            else {
              let e = await t.chromeTabsQuery({ url: ["chrome-extension://" + chrome.runtime.id + "/*"] });
              e[0]
                ? await chrome.tabs.update(e[0].id, { active: !0 })
                : chrome.tabs.create({
                    url: "chrome-extension://" + chrome.runtime.id + "/selectiondialog/selectiondialog.html?q=" + i[0].id
                  });
            }
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
                return (n = (await e._isEdge()) ? new Mc("0113ff4a-9673-4c71-8cba-9229b16b7ad8") : new Yc()), void t(n);
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
  function Fc(e, t) {
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
  function Bc(e, t, n) {
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
  class Kc {
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
  class Vc {
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
  const Hc = (e, ...t) => {
      if (!t.length) return e;
      const n = t.shift();
      if (zc(e) && zc(n)) {
        const r = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? Fc(Object(n), !0).forEach(function (t) {
                  Bc(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Fc(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
          }
          return e;
        })({}, e);
        for (const e in n)
          Object.prototype.hasOwnProperty.call(n, e) &&
            (zc(n[e]) && zc(r[e])
              ? (r[e] = Hc(r[e], n[e]))
              : Array.isArray(n[e]) && Array.isArray(r[e])
              ? (r[e] = Wc(r[e], n[e]))
              : (r[e] = n[e]));
        return Hc(r, ...t);
      }
      return Hc(e, ...t);
    },
    Wc = (e, t) => {
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
        i = t.map((e) => e[r]);
      return (
        e
          .map((e) => e[r])
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
    zc = (e) => null !== e && "object" == typeof e && !Array.isArray(e),
    Jc = "local";
  class qc extends Kc {
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
            let n = JSON.parse(Vc.decode(Object.values(e)[0].newValue));
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
          const i = Vc.encode(t),
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
              if (((i = Vc.decode(a[e])), n._keys.add(e), !t)) return void r(JSON.parse(i));
              r(Hc(t, JSON.parse(i)));
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
  class $c {
    constructor(e = Ic.DEFAULT, t = !1) {
      (this._loginType = e), (this.isEdge = t);
    }
    getUser(e = !1, t = !1) {
      var n = this;
      return new Promise((r, i) => {
        try {
          let a = new qc(Jc);
          a.retrieve("rw4gc.user.cache").then(async function (s) {
            if (e || null === s || (0 === Object.keys(s).length && s.constructor === Object)) {
              n.isEdge && (n._loginType = Ic.MICROSOFT);
              let s = new Gc();
              await s.initialise(n._loginType),
                s
                  .getUserInfo(e, t)
                  .then((e) => {
                    null === e ? a.remove("rw4gc.user.cache") : a.store("rw4gc.user.cache", e, !1), r(e);
                  })
                  .catch((e) => {
                    i(e);
                  });
            } else if (void 0 === s.email || null === s.email) {
              n.isEdge && (n._loginType = Ic.MICROSOFT);
              let s = new Gc();
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
          let r = new qc(Jc);
          r.retrieve("rw4gc.user.cache").then(async function (i) {
            let a = new Gc();
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
  var Xc = {
      thDebugMode: !1,
      thCloudFrontBypass: !1,
      thAuthProduct: !1,
      sendFetchRequest: function (e, t) {
        return new Promise(function (n) {
          !1 === t && (t = new Date()),
            Xc.sendBrowserRequest(e, t)
              .then((e) => {
                n([e, t, !1]);
              })
              .catch((e) => {
                n([!1, t, !1]);
              });
        });
      },
      s3Req: function (e, t) {
        if (Xc.thCloudFrontBypass) var n = "https://s3.amazonaws.com/rwfamilylive/" + e;
        else n = "https://licensing.texthelp.com/" + e;
        return Xc.sendFetchRequest(n, t);
      },
      sendBrowserRequest: function (e, t) {
        return (
          void 0 === Xc.retryCount && (Xc.retryCount = 2),
          new Promise(function (n, r) {
            fetch(e + "?cbp=" + Math.random(), {})
              .then(function (e) {
                if (!e.ok) throw new Error("Network response was not ok");
                n(e.text());
              })
              .catch(function (i) {
                if (1 === Xc.retryCount) return r(i);
                (Xc.retryCount = Xc.retryCount - 1),
                  setTimeout(function () {
                    Xc.sendBrowserRequest(e, t).then(n).catch(r);
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
                : (Xc.logger(t.status), Xc.logger(t.statusText), e(!1));
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
          return n(Xc.sugarFetchReq(e, t, r, i));
        });
      },
      freemium: function (e, t, n) {
        var r = "expiry_" + n,
          i = {};
        return (
          (i.user = e), (i.start = Xc.getTodaysDate(t)), (i[r] = Xc.get30DaysDate(t)), (i.licence_type = "Freemium"), JSON.stringify(i)
        );
      },
      expiredFreemium: function (e, t, n) {
        var r = "expiry_" + n,
          i = {};
        return (
          (i.user = e), (i.start = Xc.getTodaysDate(t)), (i[r] = Xc.getTodaysDate(t)), (i.licence_type = "Freemium"), JSON.stringify(i)
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
        var t = new Date(Xc.getTodaysDate(e)),
          n = new Date().setDate(t.getDate() + 30);
        return new Date(n).toJSON().slice(0, 10);
      },
      setSyncDate: function (e, t, n) {
        var r = Xc.getTodaysDate(e),
          i = {};
        (i[t] = r), "Chrome" == n ? chrome.storage.sync.set(i) : localStorage.setItem(t, r);
      },
      resolveSync: (e, t, n, r) =>
        void 0 === e ? (Xc.setSyncDate(t, n, r), !0) : !((null !== e && !Xc.needsUpdated(e)) || (Xc.setSyncDate(t, n, r), 0)),
      getLastSync: function (e, t, n) {
        return new Promise((r) => {
          var i = "texthelp_" + t + "_ga_updated_in_licensing";
          "Chrome" == n
            ? chrome.storage.sync.get([i], (t) => {
                r(Xc.resolveSync(t[i], e, i, n));
              })
            : r(Xc.resolveSync(localStorage.getItem(i), e, i, n));
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
          i = r[Xc.platformFlagToCheck(n)];
        if (!0 === Xc.dateInFuture(r.expiry, t) && 1 == i) {
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
        Xc.debug = e;
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
    Qc = function (e, t) {
      return (t >>> e) | (t << (32 - e));
    },
    Zc = function (e) {
      return Qc(2, e) ^ Qc(13, e) ^ Qc(22, e);
    },
    eu = function (e) {
      return Qc(6, e) ^ Qc(11, e) ^ Qc(25, e);
    },
    tu = function (e) {
      return Qc(7, e) ^ Qc(18, e) ^ (e >>> 3);
    },
    nu = function (e) {
      return Qc(17, e) ^ Qc(19, e) ^ (e >>> 10);
    },
    ru = function (e, t, n) {
      return (e & t) ^ (~e & n);
    },
    iu = function (e, t, n) {
      return (e & t) ^ (e & n) ^ (t & n);
    },
    au = function (e) {
      for (var t = "", n = 7; n >= 0; n -= 1) t += ((e >>> (4 * n)) & 15).toString(16);
      return t;
    },
    su = function (e) {
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
        for (var h = 16; h < 64; h += 1) u[h] = (nu(u[h - 2]) + u[h - 7] + tu(u[h - 15]) + u[h - 16]) & 4294967295;
        for (var p = r[0], g = r[1], f = r[2], m = r[3], v = r[4], _ = r[5], y = r[6], b = r[7], S = 0; S < 64; S += 1) {
          var E = b + eu(v) + ru(v, _, y) + n[S] + u[S],
            O = Zc(p) + iu(p, g, f);
          (b = y), (y = _), (_ = v), (v = (m + E) & 4294967295), (m = f), (f = g), (g = p), (p = (E + O) & 4294967295);
        }
        (r[0] = (r[0] + p) & 4294967295),
          (r[1] = (r[1] + g) & 4294967295),
          (r[2] = (r[2] + f) & 4294967295),
          (r[3] = (r[3] + m) & 4294967295),
          (r[4] = (r[4] + v) & 4294967295),
          (r[5] = (r[5] + _) & 4294967295),
          (r[6] = (r[6] + y) & 4294967295),
          (r[7] = (r[7] + b) & 4294967295);
      }
      return `${au(r[0])}${au(r[1])}${au(r[2])}${au(r[3])}${au(r[4])}${au(r[5])}${au(r[6])}${au(r[7])}`;
    },
    ou = function (e) {
      var t = e.toLowerCase();
      t = t.trim();
      try {
        var n = t.split("@"),
          r = n[0].replace("%", ""),
          i = n[1];
        return `${su((r += "hfdu9b89';JHK7898hbh;';[/"))}@${i}`;
      } catch (e) {}
      return "";
    },
    cu = function (e) {
      var t = e.toUpperCase();
      t = t.trim();
      try {
        return su(t + "hfdu9b89';JHK7898hbh;';[/");
      } catch (e) {}
      return "";
    },
    uu = function (e) {
      var t = e.toLowerCase();
      t = t.trim();
      try {
        return su(t + "hfdu9b89';JHK7898hbh;';[/");
      } catch (e) {}
      return "";
    },
    lu = !1,
    du = function (e, t) {
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
        _ = !1,
        y = "",
        b = "",
        S = "",
        E = !0,
        O = function () {
          Xc.s3Req("institutions_list.json", m).then(([e, t, n]) => {
            A(e);
          });
        },
        A = function (e) {
          var t = JSON.parse(e),
            n = !1;
          u.find(function (e) {
            return e in t && ((l = t[e]), (n = !0)), n;
          }),
            l
              ? Xc.s3Req(Xc.getGroupFilename(l), m).then(([e, t, n]) => {
                  P(e, t);
                })
              : C();
        },
        T = function (e, t, r) {
          if (((m = t), !1 !== e))
            if ("Group" === (f = JSON.parse(e)).licence_type)
              Xc.s3Req(Xc.getGroupFilename(f.group), m).then(([e, t, n]) => {
                U(e, t);
              });
            else {
              n = e;
              var s = JSON.parse(e);
              c ? O() : i && i != s.auth_code ? (a ? ((d = !0), w()) : C()) : "Freemium" == s.licence_type ? ((d = !0), w()) : Y();
            }
          else (d = !0), w(r);
        },
        w = function (e) {
          if (c) O();
          else if (s) {
            var t = Xc.platformFlagToCheck(g),
              n = Xc.getDomainsListFilename(t, s);
            Xc.s3Req(n, m).then(([e, t, n]) => {
              I(e, t, n);
            });
          } else C(e);
        },
        C = function (e) {
          i && !a
            ? Xc.s3Req(Xc.getUserFilename(i, g), m).then(([e, t, n]) => {
                k(e, t, n);
              })
            : n
            ? Y()
            : r
            ? E
              ? x(e)
              : j()
            : ((h = Error("User or product code not set")), t(h, !1));
        },
        I = function (e, t, n) {
          (m = t), !1 !== e ? N(e, R) : C(n);
        },
        R = function (e) {
          0 != e
            ? Xc.s3Req("groups/" + e + ".json", m).then(([e, t, n]) => {
                P(e, t);
              })
            : C();
        },
        N = function (e, t) {
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
        P = function (e, t) {
          (m = t),
            !1 !== e
              ? ((n = e), _ ? Y() : D(e))
              : _
              ? Xc.s3Req(Xc.getUserFilename(r, g), m).then(([e, t, n]) => {
                  T(e, t, n);
                })
              : C();
        },
        D = function (e) {
          !1 === E
            ? j()
            : Xc.verifyUserCanEnrolInGroup(e, m, g)
            ? ((n = e), Y(), L(e))
            : ((n = !1), (h = Error("Unable to enrol in group")), C());
        },
        L = function (e) {
          var t = JSON.parse(e),
            n = {};
          (n.user = r),
            (n.group = t.guid),
            (n.auth_code = t.auth_code),
            (n.product = g),
            c && ((n.institution_id = l), (n.login_type = o)),
            Xc.sugarReq("group", n, function (e) {});
        },
        k = function (e, a, s) {
          m = a;
          try {
            if (!1 !== e)
              if ((Xc.logger("[DEBUG]: Found auth code file."), r)) {
                var c = !0;
                0 == o && ((c = !1), (h = Error("Login type not set")));
                var u = JSON.parse(e);
                (u.hasOwnProperty("perpetual") && u.perpetual) ||
                  Xc.dateInFuture(u.expiry, m) ||
                  ((c = !1), (h = Error("License expired")));
                var l = Xc.getSoftwareEnabledProp(g);
                !c || (u.hasOwnProperty(l) && 0 != u[l]) || ((c = !1), (h = Error("Product not enabled")));
                var d = u[o + "_login"];
                if (c && "" !== d) {
                  if (d === r) return (n = e), Y();
                  (c = !1), (h = Error("This product code is already tied to a user for this login type"));
                } else u[o + "_login"] = r;
                if (!0 === c) {
                  (n = JSON.stringify(u)),
                    Xc.logger("[DEBUG]: licence file"),
                    Xc.logger(n),
                    Y(),
                    Xc.logger("[DEBUG]: Updating single user file via sugar");
                  var p = {};
                  (p.user = r),
                    (p.user_encrypted = !0),
                    (p.auth_code = i),
                    (p.login_type = o),
                    (p.licence_id = u.guid),
                    Xc.sugarReq("single", p, function (e) {
                      Xc.logger("[DEBUG]: File updated successfully.");
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
            if ((8 == r.auth_code.length && (r.auth_code = cu(r.auth_code)), f.auth_code == r.auth_code)) {
              n = e;
              var i = Xc.getSoftwareEnabledProp(g),
                a = Xc.getProductExpiryProp(g);
              Xc.dateInFuture(r.expiry, m)
                ? 1 != r[i]
                  ? ((r[a] = Xc.getYesterdaysDate(m)),
                    (n = JSON.stringify(r)),
                    Xc.s3Req(Xc.getFeaturesFilename(g, "freemium"), m).then(([e, t, n]) => {
                      G(e, t);
                    }))
                  : Y()
                : Xc.s3Req(Xc.getFeaturesFilename(g, "freemium"), m).then(([e, t, n]) => {
                    G(e, t);
                  });
            } else (h = Error("Group product code has changed, reverting to freemium")), (d = !0), j();
          } else
            Xc.s3Req(Xc.getFeaturesFilename(g, "freemium"), m).then(([e, t, n]) => {
              G(e, t);
            });
        },
        x = function (e) {
          if ((null == e && (e = !1), !1 === n && !0 === E)) {
            if (((n = Xc.freemium(r, m, g)), e)) {
              var t = JSON.parse(n);
              (t.lt = Math.floor(899999 * Math.random() + 1e5)), (n = JSON.stringify(t));
            } else M();
            Y();
          } else !1 === E ? j() : Y();
        },
        j = function () {
          !1 === n && ((n = Xc.expiredFreemium(r, m, g)), !0 === E && M()), Y();
        },
        M = function () {
          if (r) {
            var e = {};
            (e.user = r), (e.product = g), Xc.sugarReq("freemium", e).then((e) => {});
          }
        },
        Y = function () {
          var e = JSON.parse(n);
          (y = e.licence_type), 1 == e.unlimited && (y = "Unlimited"), e.free_for_teachers && (S = 1);
          var t = !1;
          if ("Group" != e.licence_type) {
            var r = Xc.getProductExpiryProp(g),
              a = Xc.getSoftwareEnabledProp(g);
            (((e.hasOwnProperty(a) && 0 != e[a]) || e.hasOwnProperty(r)) &&
              (!e.hasOwnProperty(a) || 1 != e[a] || Xc.dateInFuture(e.expiry, m) || e.hasOwnProperty(r))) ||
              ((b = "Trial"), (e[r] = Xc.get30DaysDate(m)), (n = JSON.stringify(e)), (t = !0)),
              "Freemium" == e.licence_type && ((e.hide_unlicensed = p), (n = JSON.stringify(e)));
            var o = !1;
            ((e.hasOwnProperty(a) && 1 == e[a] && Xc.dateInFuture(e.expiry, m)) || (e.hasOwnProperty(r) && Xc.dateInFuture(e[r], m))) &&
              (o = !0),
              !0 === o
                ? ((b = "Premium"),
                  Xc.s3Req(Xc.getFeaturesFilename(g, "premium"), m).then(([e, t, n]) => {
                    G(e, t);
                  }))
                : ((b = "Freemium"),
                  Xc.s3Req(Xc.getFeaturesFilename(g, "freemium"), m).then(([e, t, n]) => {
                    G(e, t);
                  }));
          } else V(n);
          if ((!0 === t && M(), "Group" != e.licence_type && !0 !== d && null != s)) {
            var c = !1;
            if ((("Single" == e.licence_type && Xc.dateInFuture(e.expiry, m)) || (c = !0), !0 === c)) {
              var u = Xc.platformFlagToCheck(g),
                l = Xc.getDomainsListFilename(u, s);
              Xc.s3Req(l, m).then(([e, t, n]) => {
                F(e, t);
              });
            }
          }
          (e = JSON.parse(n)),
            (i = e.auth_code),
            !0 === E &&
              ("undefined" != typeof chrome && void 0 !== chrome.storage
                ? Xc.getLastSync(m, g, "Chrome").then((e) => {
                    e && H();
                  })
                : "undefined" != typeof localStorage
                ? Xc.getLastSync(m, g, "Local").then((e) => {
                    e && H();
                  })
                : H());
        },
        G = function (e, t) {
          if (((m = t), !1 !== e)) {
            var r = JSON.parse(n),
              i = JSON.parse(e);
            (r.features = i), (n = JSON.stringify(r)), V(n);
          } else V(n);
        },
        F = function (e, t) {
          (m = t), !1 !== e && N(e, B);
        },
        B = function (e) {
          0 != e
            ? Xc.s3Req("groups/" + e + ".json", m).then(([e, t, n]) => {
                K(e, t);
              })
            : Xc.logger("[WARNING]: No groups found for this domain.");
        },
        K = function (e, t) {
          (m = t), !1 !== e && (Xc.verifyUserCanEnrolInGroup(e, m, g) ? L(e) : Xc.logger("[ERROR]: Unable to enroll user in the group."));
        },
        V = function (e) {
          var n = JSON.parse(e);
          (n.today = Xc.getTodaysDate(m)), (n.currentDateTime = Xc.getCurrentDateTime(m));
          var i = Xc.getSoftwareEnabledProp(g),
            a = Xc.getProductExpiryProp(g);
          if (
            (n.hasOwnProperty(i) && 1 == n[i]
              ? ((n.license_expiry = n.expiry),
                (b = "Premium"),
                Xc.dateInFuture(n.expiry, m) ||
                  (n.hasOwnProperty(a) && Xc.dateInFuture(n[a], m) && ((n.license_expiry = n[a]), (b = "Trial"), (n.trial = !0))))
              : ((n.license_expiry = n[a]),
                Xc.dateInFuture(n.license_expiry, m) ? ((b = "Trial"), (n.trial = !0)) : ((b = "Freemium"), (n.trial = !1))),
            (n.daysleft = Xc.dateDiff(n.today, n.license_expiry, "days")),
            "Group" != n.licence_type)
          )
            if ("equatio" == g) {
              var s = Xc.getSoftwareEnabledProp("rw4gc");
              "Single" == n.licence_type && n.hasOwnProperty(s) && 1 == n[s]
                ? (n.upgrade_link = "https://text.help/2MVuXs")
                : (n.upgrade_link = "https://text.help/llZsZf");
            } else n.daysleft >= 0 ? (n.upgrade_link = "https://text.help/sNm0iR") : (n.upgrade_link = "https://text.help/ojpwiV");
          void 0 === n.user && 0 != r && (n.user = r), t(h, n);
        },
        H = function () {
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
              .dimension({ index: 2, value: y })
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
                cd2: y,
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
                cd2: y,
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
            ? ((lu = e.debug),
              (Xc.thDebugMode = lu),
              Xc.logger("=========================="),
              Xc.logger("[CORE]: Debug Mode Enabled"),
              Xc.logger("=========================="))
            : (lu = !1),
          null != e.authCode &&
            "" != e.authCode &&
            !(function (e) {
              return 8 == e.length
                ? ((e = e.toUpperCase()),
                  Xc.isGroupAuthCode(e) && (a = !0),
                  Xc.logger("[DEBUG]: Found an auth code: " + e),
                  (i = cu(e)),
                  Xc.logger("[DEBUG]: Hashed auth code for use: " + i),
                  !0)
                : 10 == e.length &&
                    ((e = e.toUpperCase()),
                    Xc.logger("[DEBUG]: Found a take home code: " + e),
                    (i = cu(e)),
                    Xc.logger("[DEBUG]: Hashed take home code for use: " + i),
                    (_ = !0),
                    !0);
            })(e.authCode))
        )
          throw new Error("Product code invalid");
        if (null != e.product && "" != e.product) {
          if (!Xc.validProduct(e.product)) throw new Error("Invalid product");
          g = e.product;
        }
        if (
          (void 0 !== e.cacheBypass && "" != e.cacheBypass
            ? ((v = e.cacheBypass),
              (Xc.thCloudFrontBypass = v),
              v && Xc.logger("[DEBUG]: Bypassing CloudFront due to configuration option!"))
            : ((v = !1), (Xc.thCloudFrontBypass = !1)),
          void 0 !== e.createLicence)
        ) {
          if ("boolean" != typeof e.createLicence) throw new Error("createLicence flag should be a boolean");
          (E = e.createLicence), Xc.logger("[DEBUG]: thCreateLicence set to " + E);
        }
        if (null != e.user && "" != e.user) {
          var W = e.user.toLowerCase(),
            z = !1;
          if (
            (null != e.disableUserHash && !0 === e.disableUserHash && (z = !0),
            !(function (e, t) {
              if (null != e) {
                if (!Xc.isValidUser(e)) throw (Xc.logger("[ERROR]: No domain found in user string."), new Error("No domain found"));
                (e = e.replace(/[\u200B-\u200D\uFEFF]/g, "")),
                  (r = !0 === t ? e : ou(e)),
                  Xc.logger('[DEBUG]: Hashed user string: "' + r + '"');
                var n = r.split("@")[1];
                return (
                  Xc.logger('[DEBUG]: Domain set to: "' + n + '"'),
                  (s = uu(n)),
                  Xc.logger('[DEBUG]: Domain (post-hash) set to: "' + s + '"'),
                  !0
                );
              }
              return !1;
            })(W, z))
          )
            throw new Error("Invalid user");
        }
        if (null != e.loginType && "" != e.loginType) {
          var J = e.loginType;
          if (
            !(function (e) {
              return !(
                ["facebook", "feide", "google", "microsoft", "linkedin", "twitter", "uni-c", "yahoo"].indexOf(e) < 0 || ((o = e), 0)
              );
            })(J)
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
          })(J, e.institutions, e.disableUserHash);
        }
        if (!r && !i) throw new Error("User or product code must be set");
        if (0 == g) throw new Error("Product not set");
        1 == _
          ? (Xc.logger("[DEBUG]: Starting take home check"),
            (function (e) {
              Xc.logger("[DEBUG]: in the take home check");
              var t = i;
              0 != t
                ? Xc.s3Req("groups/takehome/" + t + ".json", m).then(([e, t, n]) => {
                    P(e, t);
                  })
                : C();
            })())
          : r
          ? Xc.s3Req(Xc.getUserFilename(r, g), m).then(([e, t, n]) => {
              T(e, t, n);
            })
          : (Xc.logger("[DEBUG]: Starting single user check"), C());
      } catch (e) {
        t(e, n);
      }
    };
  class hu {
    constructor(e = "", t = "", n = "") {
      (this._user = e), (this._loginType = t), (this._product = n);
    }
    getLicense(e = null, t = null, n = null, r = !0, i = null) {
      return new Promise((a, s) => {
        try {
          let s = !0,
            o = null;
          r && (o = new qc(Jc)),
            void 0 !== e && (this._user !== e && (s = !1), (this._user = e)),
            void 0 !== t && (this._loginType !== t && (s = !1), (this._loginType = t)),
            void 0 !== n && (this._product !== n && (s = !1), (this._product = n));
          const c = { user: e, loginType: t, product: n };
          null != i && ((c.authCode = i), (s = !1)),
            s && r
              ? o.retrieve("rw4gc.lic.cache").then((r) => {
                  if (null === r || (0 === Object.keys(r).length && r.constructor === Object))
                    (s = !1),
                      this.getLicenseNoCache(c).then((r) => {
                        r.meta || (r.meta = {}),
                          (r.meta.lastUpdated = new Date()),
                          (r.meta.user = e),
                          (r.meta.loginType = t),
                          (r.meta.product = n);
                        o.store("rw4gc.lic.cache", r, !1);
                        a(r);
                      });
                  else {
                    const i = this._user === r.meta.user && this._product === r.meta.product && this._loginType === r.meta.loginType,
                      s = new Date(r.meta.lastUpdated);
                    this.nextDay(s) || !i
                      ? this.getLicenseNoCache(c).then((r) => {
                          r.meta || (r.meta = {}),
                            (r.meta.lastUpdated = new Date()),
                            (r.meta.user = e),
                            (r.meta.loginType = t),
                            (r.meta.product = n);
                          o.store("rw4gc.lic.cache", r, !1);
                          a(r);
                        })
                      : a(r);
                  }
                })
              : this.getLicenseNoCache(c).then((r) => {
                  r.meta || (r.meta = {}),
                    (r.meta.lastUpdated = new Date()),
                    (r.meta.user = e),
                    (r.meta.loginType = t),
                    (r.meta.product = n),
                    a(r);
                });
        } catch (e) {
          s(e);
        }
      });
    }
    static removeCachedLicense() {
      return new Promise((e, t) => {
        try {
          new qc(Jc).remove("rw4gc.lic.cache").then(() => {
            e(!0);
          });
        } catch (e) {
          t(e);
        }
      });
    }
    getLicenseNoCache(e) {
      return new Promise((t, n) => {
        du(e, (e, r) => {
          e ? n(e) : t(r);
        });
      });
    }
    nextDay(e) {
      const t = new Date(),
        n = 1e4 * t.getFullYear() + 100 * t.getMonth() + t.getDate();
      return 1e4 * e.getFullYear() + 100 * e.getMonth() + e.getDate() !== n;
    }
  }
  class pu {
    constructor(e = Ic.DEFAULT, t = !1) {
      (this._authtype = e), (this._user = void 0), (this._license = void 0), (this._isEdge = t);
    }
    async getLicense(e = null, t = !1, n = !1) {
      var r = this;
      return new Promise(async function (i, a) {
        try {
          let a = new $c(r._authtype, r._isEdge),
            s = await a.getUser(t, n);
          null === s && i({ licenseStore: { license: null, authType: null }, authType: null });
          let o = new hu(s.email, s.licensetype, "rw4gc"),
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
          let i = new hu(e.toLowerCase(), t.toLowerCase(), "rw4gc");
          r(await i.getLicense(e.toLowerCase(), t.toLowerCase(), "rw4gc", n));
        } catch (e) {
          i(e);
        }
      });
    }
    signOut(e) {
      return new Promise((t, n) => {
        try {
          hu.removeCachedLicense()
            .then(() => {
              e && (this._authtype = e),
                new $c(this._authtype, this._isEdge)
                  .signOut()
                  .then(() => {
                    (this._authtype = Ic.DEFAULT), t(!0);
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
  const gu = "bjglhpoliipklkfjcahfefdlfpifcinb" === chrome.runtime.id,
    fu = Object.freeze({ GROUP: "Group", UNLIMITED: "Unlimited", PREMIUM: "Premium", SINGLE: "Single" }),
    mu = { licenseCheck: null },
    vu = (e, t) => {
      let n;
      return mu.licenseCheck && mu.licenseCheck._authtype === e ? (n = mu.licenseCheck) : ((n = new pu(e, t)), (mu.licenseCheck = n)), n;
    },
    _u = async (e, t = null, n = !1, r = !1) => {
      let i,
        a = vu(e, gu);
      return (i = t ? await a.getLicense(t) : await a.getLicense(null, n, r)), i;
    },
    yu = async (e) => {
      if (mu.licenseCheck) await mu.licenseCheck.signOut(e), (mu.licenseCheck = null);
      else {
        let t = vu(e, gu);
        await t.signOut(e);
      }
    },
    bu = async () => {
      let e,
        n = await ((r = null),
        new Promise((e) => {
          chrome.storage.managed.get(r, (t) => {
            e(t);
          });
        }));
      var r;
      return n.accountType && (e = n.accountType.startsWith(t.MICROSOFT) ? t.MICROSOFT : t.GOOGLE), gu && (e = t.MICROSOFT), e;
    },
    Su = async (e, t) => {
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
    },
    Eu = async (e, n, r) => {
      chrome.tabs.sendMessage(e.id, { command: "th-toolbarinjected" }, async function (i) {
        if (!1 === i.injected) Iu(e.id, e.url);
        else if (n) {
          let e = await bu();
          e || (e = t.DEFAULT);
          let n = (await _u(e)).license;
          n && ((Fr.license = n), r.dispatchStorageEvent("account-changed", Sr, { login: e, user: n.meta.user }));
        }
      });
    },
    Ou = async () => {
      const [e] = await ((e) =>
        new Promise((t) => {
          chrome.tabs.query(e, (e) => {
            t(e);
          });
        }))({ active: !0, currentWindow: !0 });
      return e;
    },
    Au = async (e) => {
      Tu(e);
    },
    Tu = async (e) => {
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
    wu = async (e, t) => {
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
    Cu = (e, t, n) => {
      chrome.scripting.executeScript({ target: { tabId: e, frameIds: [n] }, files: ["functions/getIfInserted.js"] }, (t) => {
        if (!t) return;
        t.filter((e) => {
          if (!1 === e.result.res && !1 === e.result.checked) return !0;
        }).forEach((t) => {
          let r = [];
          wc.forEach((n) => {
            let i = n.settings;
            (i.target.tabId = e),
              n.matches.some((e) => {
                let a = { [e]: i },
                  s = Cc(t.result.url, a);
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
    Iu = async (e, t) => {
      (t = t.toLowerCase()),
        await Su(e, "mathjax/getIfMathjaxNeeded.js"),
        await wu(e, t),
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
        Au(e),
        ((e, t, n) => {
          t.forEach((t) => {
            let r = t.settings;
            (r.target.tabId = n),
              t.matches.includes("*")
                ? setTimeout(() => {
                    chrome.scripting.executeScript(r);
                  }, 1e3)
                : t.matches.some((t) => {
                    let n = Cc(e, { [t]: r });
                    if (n.target && n.target.tabId)
                      return (
                        setTimeout(() => {
                          chrome.scripting.executeScript(n);
                        }, 1e3),
                        !0
                      );
                  });
          });
        })(t, Tc, e),
        Cu(e, 0, 0);
    },
    Ru = {
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
  const Nu = [
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
    Pu = [
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
    Du = [
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
    Lu = [
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
  class ku {
    constructor(e, t, n) {
      (this.voiceByName = {}), (this.voicesByGenderLang = { Male: {}, Female: {} }), (this.voicesByLang = {}), this.createVoiceMap(e, t, n);
    }
    createVoiceMap(e, t, n, r) {
      let i = [...Nu];
      e && i.push(...Pu), t && i.push(...Du), n && i.push(...Lu);
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
      let r = [...Nu];
      return e && r.push(...Pu), t && r.push(...Du), n && r.push(...Lu), r;
    }
  }
  class Uu {
    constructor(e = "Ava?", t = "50") {
      (this.AUDIOMAKERSETTINGS = { USER: "rwforgdocs4", SERVICEURL: "https://texthelpspeech.speechstream.net", SERVICEPATH: "Mp3Maker" }),
        Object.freeze(this.CHECKITSETTINGS),
        this._mp3Path,
        this._filename,
        (this._speed = t);
      const n = new ku().getVoices(!0, !0, !0);
      if (
        ((this._voice = this._validateVoice(e)),
        !(
          n.filter((t) => {
            if (t.name === e) return !0;
          }).length > 0
        ))
      ) {
        let e = tc.state.language.language.replace(/_/g, "-"),
          t = Ru[e];
        void 0 === t && (t = Ru["en-US"]), t.speechoptions.voice ? (this._voice = t.speechoptions.voice) : (this._voice = "Ava?");
      }
      (this._baseURL =
        this._calculatePath(this.AUDIOMAKERSETTINGS.SERVICEURL, this.AUDIOMAKERSETTINGS.SERVICEPATH) +
        "?userName=" +
        this.AUDIOMAKERSETTINGS.USER +
        "&voiceName=" +
        this._voice +
        "&speedValue=" +
        t),
        (this._events = new Tr()),
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
              Er,
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
                Er,
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
  class xu {
    static CallSimplifyService(e = !1, t, n, r, i, a, s) {
      return new Promise((o) => {
        let c = "https://rw4gc-simplify.texthelp.com/";
        e && (c = "https://rw4gc-simplify.dev.texthelp.com/");
        const u = xu._userDataFromLicense(a);
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
  var ju = (e, t, n) => {
    const r = { html: e.text.replace(/(?:\f\n|\f|\n)/g, "<br>"), documentTitle: e.title, loginType: t.loginType, url: n };
    chrome.tabs.create({ url: "https://pra.texthelp.com/" }, (e) => {
      const t = { command: "th-practicereadingaloud", data: r },
        n = (r, i) => {
          r === e.id && "complete" === i.status && (chrome.tabs.onUpdated.removeListener(n), chrome.tabs.sendMessage(r, t));
        };
      chrome.tabs.onUpdated.addListener(n), chrome.tabs.sendMessage(e.id, t);
    });
  };
  class Mu {
    constructor() {
      (this.onAnalyticsViewEvent = (e) => {
        try {
          let t = e.detail.parserName,
            n = Fr.stateJSON,
            r = { screenName: this.setScreenName(t.toLowerCase()), userId: n.license.user.toLowerCase() };
          this._analytics.sendAppView(r);
        } catch (e) {}
      }),
        (this.onAnalyticsEvent = (e) => {
          try {
            let t = [],
              n = Fr.stateJSON,
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
        (this._analytics = new i({ applicationName: this.applicationName, analyticsTrackingCode: this.analyticsTrackingCode }));
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
  function Yu(e, t, n) {
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
  function Gu(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];
      (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }
  var Fu = (function () {
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
      ]) && Gu(t.prototype, n),
      r && Gu(t, r),
      e
    );
    var t, n, r;
  })();
  class Bu {
    constructor(e, t = !0) {
      Yu(this, "messagingInstance", void 0),
        (this.storageEvents = new Tr()),
        (this.messagingInstance = new Fu("224182583415", "rw4gc", !0, (e) => {
          e && this.storageEvents.dispatchStorageEvent("th-datadesk-message", Or, { type: "th-datadesk-message", message: e.features });
        })),
        t &&
          this.messagingInstance.getLastMessage(e, !0, (e) => {
            e && this.storageEvents.dispatchStorageEvent("th-datadesk-message", Or, { type: "th-datadesk-message", message: e.features });
          }),
        chrome.alarms.onAlarm.addListener((e) => {
          if ("MessageExpired" === e.name) this.storageEvents.dispatchStorageEvent("th-datadesk-reset", Or, { type: "th-datadesk-reset" });
        });
    }
    processMessage(e) {
      this.messagingInstance.manualMessage(e);
    }
  }
  const Ku = { dataDesk: null },
    Vu = (e, t, n) => {
      try {
        if (Ku.dataDesk) return Ku.dataDesk;
        switch (e) {
          case fu.GROUP:
          case fu.PREMIUM:
          case fu.SINGLE:
          case fu.UNLIMITED:
            Ku.dataDesk = new Bu(t, n);
        }
      } catch (e) {
        console.info("Edge doesn't support chrome messaging.");
      }
      return Ku.dataDesk;
    };
  let Hu = -1;
  const Wu = () => {
      chrome.runtime.onMessage.addListener(async (e, t) => {
        if (t.id === chrome.runtime.id && e.command)
          switch (e.command.toLowerCase()) {
            case "thswmslogoutactive":
              Hu = parseInt(e.active);
              break;
            case "thswclosemslogout":
              zu({ url: ["https://thzbf.texthelp.com/*"] }).then((e) => {
                e.length > 0 && chrome.tabs.remove(e[0].id);
              }),
                -1 === Hu || isNaN(Hu) || chrome.tabs.update(Hu, { active: !0 });
          }
      });
    },
    zu = (e) =>
      new Promise((t) => {
        chrome.tabs.query(e, (e) => {
          t(e);
        });
      });
  function Ju() {
    return (
      (Ju = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      Ju.apply(this, arguments)
    );
  }
  class qu {
    upload(e, t, n, r, i, a) {
      throw Error("missing function upload");
    }
  }
  var $u = async (e, t, n = "GET", r = {}, i = {}) =>
      await fetch(
        e,
        Ju({ method: n, headers: new Headers(Ju({ "Content-Type": "application/json", Authorization: `Bearer ${t}` }, i)) }, r)
      ),
    Xu = async (e, t) => {
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
  const Qu = "uploadFileConfig.json",
    Zu = async (e) => {
      const t = `https://content.googleapis.com/drive/v3/files?${encodeURI(
          `q=name='${Qu}'&spaces=appDataFolder&fields=files/id,files/description,files/trashed`
        )}`,
        n = await fetch(t, { method: "GET", headers: { Authorization: `Bearer ${e}`, "Content-Type": "application/json" } });
      return await n.json();
    };
  var el = async (e) => {
      const t = { name: Qu, parents: ["appDataFolder"] },
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
    tl = Zu,
    nl = async (e, t) => {
      const n = `https://www.googleapis.com/drive/v3/files/${t}?alt=media`,
        r = await $u(n, e),
        i = await r.text();
      return "" === i ? {} : JSON.parse(i);
    },
    rl = async (e, t, n) => {
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
  var il = async (e, t, n) => {
    const r = { name: t, mimeType: "application/vnd.google-apps.folder" };
    n && (r.parents = [n]);
    const i = await fetch("https://www.googleapis.com/drive/v3/files", {
      method: "POST",
      headers: { Authorization: `Bearer ${e}`, "Content-Type": "application/json" },
      body: JSON.stringify(r)
    });
    return (await i.json()).id;
  };
  var al = async (e, t, n, r) => {
      const i = { name: t, parents: [r] },
        a = new FormData();
      a.append("metadata", new Blob([JSON.stringify(i)], { type: "application/json" })), a.append("file", e, t);
      const s = { method: "POST", headers: { Authorization: `Bearer ${n}` }, body: a },
        o = await fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart", s),
        c = await o.json();
      return o.ok ? { fileId: c.id } : { fileId: null, error: c };
    },
    sl = async (e, t) => {
      const n = `https://content.googleapis.com/drive/v3/files/${t}?fields=appProperties`,
        r = await fetch(n, { method: "GET", headers: { "Content-Type": "application/json", Authorization: `Bearer ${e}` } });
      if (!r.ok) throw new Error(r.statusText);
      if (404 === r.status) return null;
      return await r.json();
    },
    ol = async (e, t, n) => {
      const r = `https://content.googleapis.com/drive/v3/files/${t}`,
        i = await fetch(r, {
          method: "PATCH",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${e}` },
          body: JSON.stringify(n)
        });
      if (!i.ok) throw new Error(i.statusText);
      return await i.json();
    },
    cl = async (e, t) => {
      const n = `https://www.googleapis.com/drive/v3/files/${t}?fields=name`,
        r = await fetch(n, { method: "GET", headers: { Authorization: `Bearer ${e}` } });
      if (!r.ok) throw new Error(r.statusText);
      return (await r.json()).name;
    },
    ul = async (e, t, n) => {
      const r = `https://content.googleapis.com/drive/v3/files/${t}/permissions?fields=*&alt=json`,
        i = await fetch(r, Ju({ method: "POST", headers: { Authorization: `Bearer ${n}` } }, e));
      if (!i.ok) {
        const e = await i.json();
        throw new Error(e);
      }
    };
  class ll extends qu {
    async getConfigData(e) {
      const t = await tl(e);
      let n;
      if (t.files.length < 1) {
        n = (await el(e)).id;
      } else n = t.files[0].id;
      return { configJson: await nl(e, n), configId: n };
    }
    async createFolderStructure(e, t, n, r = null) {
      const { configJson: i, configId: a } = await this.getConfigData(n);
      let s;
      i[e] && i[e].rootId && (s = i[e].rootId);
      let o,
        c = !1;
      if (s) {
        (await Xu(n, s)) || ((s = await il(n, e)), (i[e].rootId = s), (c = !0));
      } else (s = await il(n, e)), (i[e] = { rootId: s }), (c = !0);
      if (((o = i[e][t]), o)) {
        (await Xu(n, o)) || ((o = await il(n, t, s)), (i[e][t] = o), (c = !0));
      } else (o = await il(n, t, s)), (i[e][t] = o), (c = !0);
      if ((c && (await rl(n, a, i)), r)) {
        let e = !1;
        const i = await sl(n, r),
          a = await cl(n, r);
        if (i && void 0 === i.appProperties) {
          const r = await il(n, a, o);
          (i.appProperties = {}), (i.appProperties[t] = r), (e = !0);
        } else if (i && i.appProperties && i.appProperties[t]) {
          if (!(await Xu(n, i.appProperties[t]))) {
            const r = await il(n, a, o);
            (i.appProperties[t] = r), (e = !0);
          }
          o = i.appProperties[t];
        } else if (i && i.appProperties && !i.appProperties[t]) {
          const r = await il(n, a, o);
          (i.appProperties[t] = r), (e = !0);
        }
        e && (await ol(n, r, i)), (o = i.appProperties[t]);
      }
      return o;
    }
    async upload(e, t, n, r, i, a = null, s = null) {
      const o = await this.createFolderStructure(n, r, i, a),
        c = await al(e, t, i, o);
      return null !== s && (await ul(s, c.fileId, i)), c;
    }
  }
  var dl = async (e, t) => {
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
    hl = async (e, t, n, r = "root") => {
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
  var pl = async (e) => {
      const t = await fetch("https://graph.microsoft.com/v1.0/me/drive", { method: "GET", headers: { Authorization: `Bearer ${e}` } });
      if (t.ok) {
        return (await t.json()).id;
      }
      return null;
    },
    gl = async (e, t, n, r, i) => {
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
  class fl extends qu {
    async upload(e, t, n, r, i, a = null) {
      const s = await pl(i);
      if (null === s) throw new Error("Can't get driveid");
      const o = await this.createFolderStructure(n, r, i, s);
      return Ju({}, await gl(i, s, o, encodeURI(t), e), { driveId: s });
    }
    async createFolderStructure(e, t, n, r = null) {
      let i, a;
      if (null === r) {
        if (((i = await pl(n)), null === i)) throw new Error("Can't get driveid");
      } else i = r;
      const s = await dl(`/${e}`, n);
      if (((a = s.exists ? s.id : await hl(n, i, e)), null === a)) throw new Error("Error while creating the root folder");
      let o;
      const c = await dl(`/${e}/${t}`, n);
      if (((o = c.exists ? c.id : await hl(n, i, t, a)), null === o)) throw new Error("Error while creating the feature folder");
      return o;
    }
  }
  var ml = (e) => {
    let t = null;
    switch (e) {
      case "googledrive":
        t = new ll();
        break;
      case "msonedrive":
        t = new fl();
    }
    return t;
  };
  var vl = async (e, t, n, r, i, a = null, s = "googledrive", o = null) => {
    try {
      const c = ml(s);
      return await c.upload(e, t, n, r, i, a, o);
    } catch (e) {
      return { fileId: null, error: e };
    }
  };
  function _l(e, t, n, r, i, a, s) {
    try {
      var o = e[a](s),
        c = o.value;
    } catch (e) {
      return void n(e);
    }
    o.done ? t(c) : Promise.resolve(c).then(r, i);
  }
  var yl = (function () {
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
            return yield vl(i, "".concat(t, ".ogg"), "Texthelp", "Voicenote", r, n, "googledrive", a);
          }),
          function () {
            var t = this,
              n = arguments;
            return new Promise(function (r, i) {
              var a = e.apply(t, n);
              function s(e) {
                _l(a, r, i, s, o, "next", e);
              }
              function o(e) {
                _l(a, r, i, s, o, "throw", e);
              }
              s(void 0);
            });
          });
      return function (e, n, r, i) {
        return t.apply(this, arguments);
      };
    })(),
    bl = Object.freeze([
      "https://www.googleapis.com/auth/drive.apps.readonly",
      "https://www.googleapis.com/auth/drive",
      "https://www.googleapis.com/auth/drive.appdata"
    ]);
  !(async function () {
    new lc();
    const e = new Ac(),
      n = new Tr(),
      r = new Date();
    self.addEventListener("fetch", async (e) => {
      "GET" === e.request.method &&
        e.respondWith(
          (async () => {
            const t = await fetch(e.request),
              n = await t.blob(),
              i = new Headers(t.headers);
            i.set("content-security-policy", "script-src 'self' 'wasm-unsafe-eval';  object-src 'none'"),
              i.set("X-Version", `2022-05-05.01 / ${r.toISOString()}`);
            return new Response(n, { status: t.status, statusText: t.statusText, headers: i });
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
      n.initialise();
    const i = new Mu();
    await Promise.all([Fr.initialise(), Br.initialise(), Kr.initialise(), Zr.initialise(), tc.initialise(), Zo.initialise()]);
    const a = (e) =>
        new Promise((t) => {
          chrome.storage.sync.get(e, (e) => {
            t(e);
          });
        }),
      s = (e) =>
        new Promise((t) => {
          chrome.tabs.query(e, (e) => {
            t(e);
          });
        });
    chrome.action.onClicked.addListener(async (e) => {
      const t = void 0 === Fr.state.license.user;
      Eu(e, t, n);
      let r = await s({ active: !0, currentWindow: !0 });
      chrome.tabs.sendMessage(r[0].id, { command: "settoolbarVisible", visible: !0 });
    }),
      chrome.runtime.onMessageExternal.addListener((e, t, n) => {
        if ("enfolipbjmnmleonhhebhalojdpcpdoo" === t.id && void 0 !== e.command && "GETSPEECHSETTINGS" === e.command) {
          return n({ voice: decodeURIComponent(tc.stateJSON.speech.voice), speed: tc.stateJSON.speech.speed }), !0;
        }
      }),
      n.addEventListener("addVoiceNote", async (r) => {
        const i = await e.swGetAndValidateAccessToken(bl, t.GOOGLE),
          a = `https://drive.google.com/uc?id=${(await yl(r.detail.audioblob, r.detail.title, r.detail.fileId, i)).fileId}`;
        n.dispatchStorageEvent(
          "onVoiceNoteAdded",
          Ar,
          { type: "th-onVoiceNoteAdded", linkToVoiceNote: a },
          r.detail.source.sessionId,
          r.detail.source.frameId
        );
      }),
      chrome.gcm.onMessage.addListener((e) => {
        try {
          if (void 0 !== Fr.stateJSON) {
            ((e, t, n) => {
              let r = Vu(e, t, !1);
              r && r.processMessage(n);
            })(Fr.stateJSON.license.licence_type, Fr.stateJSON.user, e);
          }
        } catch (e) {
          console.log(e);
        }
      }),
      chrome.alarms.onAlarm.addListener((e) => {
        if ("MessageExpired" === e.name) n.dispatchStorageEvent("th-datadesk-reset", Or, { type: "th-datadesk-reset" });
      }),
      chrome.tabs.onActivated.addListener((e) => {
        chrome.tabs.sendMessage(e.tabId, { command: "setFrameActive" });
      });
    n.addEventListener("getLicense", async (r) => {
      if (!mu.licenseCheck || !mu.licenseCheck._license) {
        let i = await bu();
        Kr.setLicenseType(i);
        const a = await _u(i, r.detail.productCode);
        let s = a.license;
        "Freemium" !== a.license.licence_type &&
          void 0 === s.features.Rewordify &&
          !isNaN(a.license.daysleft) &&
          a.license.daysleft > 0 &&
          (s.features.Rewordify = !0),
          "Freemium" === a.license.licence_type &&
            !isNaN(a.license.daysleft) &&
            a.license.daysleft > 0 &&
            void 0 === s.features.Rewordify &&
            (s.features.Rewordify = !0),
          (Fr.license = s),
          tc.state.driveInstall || ("microsoft" !== a.authType && (e.swAuthorizeForDriveInstall(t.GOOGLE), tc.setDriveInstall(!0))),
          Vu(s.licence_type, s.user, !0),
          r &&
            r.detail &&
            r.detail.returnevent &&
            n.dispatchStorageEvent(
              r.detail.returnevent,
              Ar,
              { type: r.detail.returnevent },
              r.detail.source.sessionId,
              r.detail.source.frameId
            );
      }
    }),
      n.addEventListener("th-generateaudio", async (e) => {
        const t = tc.state.speech.voice,
          n = tc.state.speech.speed;
        new Uu(t, n).convert("AudioMaker", e.detail.text, e.detail.source);
      }),
      n.addEventListener("th-datadesk-message", async (e) => {
        Br.features = e.detail.message;
      }),
      n.addEventListener("th-datadesk-reset", async (e) => {
        Br.resetFeatures();
      }),
      n.addEventListener("th-screenshotreader-worker", async (e) => {
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
      n.addEventListener("th-practicereadingaloudtab", async (e) => {
        ju(e.detail.text, e.detail.options, e.detail.url);
      }),
      n.addEventListener("analyticsViewEvent", async (e) => {
        i.onAnalyticsViewEvent(e);
      }),
      n.addEventListener("analyticsEvent", async (e) => {
        i.onAnalyticsEvent(e);
      }),
      n.addEventListener("changeAccount", async (e) => {
        if (e.detail.logout) {
          try {
            t[e.detail.loginType] === t.GOOGLE ? await yu(t.MICROSOFT) : await yu(t.GOOGLE);
          } catch (e) {
            console.log(e);
          }
          try {
            Fr.resetLicense(),
              await new Promise((e) => {
                setTimeout(e, 300);
              });
          } catch (e) {
            console.log(e);
          }
        }
        let r = await _u(t[e.detail.loginType], null, e.detail.logout, e.detail.logout);
        "Freemium" !== r.license.licence_type &&
          void 0 === r.license.features.Rewordify &&
          !isNaN(r.license.daysleft) &&
          r.license.daysleft > 0 &&
          (r.license.features.Rewordify = !0),
          "Freemium" === r.license.licence_type &&
            !isNaN(r.license.daysleft) &&
            r.license.daysleft > 0 &&
            void 0 === r.features.Rewordify &&
            (r.features.Rewordify = !0);
        let i = r.license;
        i
          ? ((Fr.license = i),
            Kr.setLicenseType(t[e.detail.loginType]),
            n.dispatchStorageEvent("settoolbarVisible", Sr, { visible: !0 }),
            n.dispatchStorageEvent("account-changed", Sr, { login: t[e.detail.loginType], user: i.meta.user }),
            (Ku.dataDesk = null),
            Vu(i.licence_type, i.user, !0))
          : (n.dispatchStorageEvent("hideSettings", Sr, { visible: !0 }), console.log("no licence info after changing account"));
      }),
      n.addEventListener("microsoftLogout", async () => {
        n.dispatchStorageEvent("settoolbarVisible", Sr, { visible: !1 });
        try {
          await yu(t.MICROSOFT),
            Fr.resetLicense(),
            n.dispatchStorageEvent("settoolbarVisible", Sr, { visible: !1 }),
            n.dispatchStorageEvent("account-changed", Sr, { login: "", user: "" });
        } catch (e) {
          Fr.resetLicense(), Kr.setLicenseType(t.DEFAULT);
        }
      }),
      n.addEventListener("th-opensimplifttab", async (e) => {
        const t = tc.state.language.language,
          n = tc.state.language.features;
        await xu.CallSimplifyService(!1, e.detail.title, e.detail.text, e.detail.url, t, e.detail.license, n);
      }),
      n.addEventListener("th-websearch", async (e) => {
        if (chrome.search) return void chrome.search.query({ disposition: "NEW_TAB", text: e.detail.text });
        let t = e.detail.text.split(" ");
        t.length < 1 ||
          (t.length > 100 && (t.length = 100),
          chrome.tabs.create({ url: "http://google.com/search?q=" + encodeURIComponent(t.join(" ")) }));
      }),
      Wu(),
      chrome.runtime.onMessage.addListener(async (e, t, n) => {
        if (t.id === chrome.runtime.id && e.command)
          if ("th-inject" !== e.command)
            if ("th-inject-frame" !== e.command)
              if ("RW4GC_ACTION_CLICK" !== e.command)
                "th-getWindowId" !== e.command
                  ? "th-isEdge" !== e.command
                    ? "th-updateTabsFocus" !== e.command || chrome.tabs.sendMessage(t.tab.id, { command: "setFrameActive" })
                    : n(gu)
                  : n(t.tab.id);
              else {
                const e = await Ou();
                Eu(e);
              }
            else {
              if (t.tab.url.startsWith("chrome://") || "" === t.tab.url) return;
              await (async (e, t, n) => {
                await Su(e, "mathjax/getIfMathjaxNeeded.js"), await wu(e, t), Au(e), Cu(e, 0, n);
              })(t.tab.id, t.tab.url, t.frameId);
            }
          else
            (async (e = null) => {
              (e || (e = await Ou())) && Iu(e.id, e.url);
            })(t.tab);
      }),
      chrome.commands.onCommand.addListener(async (e) => {
        let t = await s({ active: !0, currentWindow: !0 });
        chrome.tabs.sendMessage(t[0].id, { command: "shortcutHandler", action: e });
      }),
      chrome.runtime.onInstalled.addListener(async (e) => {
        if (
          (chrome.identity.getProfileUserInfo(async (e) => {
            if (e.email.length > 0) {
              let n = await bu();
              n || (n = t.GOOGLE),
                await (async (e, t, n) => {
                  let r = vu(t, !1);
                  return await r.getLicenseForAccount(e, t, n);
                })(e.email, n, !0);
            }
          }),
          "update" === e.reason)
        ) {
          let e = {},
            t = [],
            n = {},
            r = await a("thRWFGSettings");
          r.thRWFGSettings && (e = JSON.parse(r.thRWFGSettings)),
            (r = await a("texthelpdictionaryItems")),
            r.texthelpdictionaryItems && (t = r.texthelpdictionaryItems),
            (r = await a("texthelpbar")),
            r.texthelpbar && (n = r.texthelpbar.left.buttons),
            tc.importV1Settings(e, t, n);
        }
      });
  })();
});
