!(function fnIIFE() {
  var r = Okta._okta,
    n = r.compose,
    t = Okta.fn.base.not,
    e = r.isNull,
    i = Okta.fn.base.curry2,
    a = r.isString,
    s = (Okta.fn.other = {});
  (s.string = {}),
    (s.string.append = i(function (r, n) {
      return n + r;
    })),
    (s.string.endsWith = function (r, n) {
      return r.substr(r.length - n.length) == n;
    }),
    (s.string.stripLeadingWhitespace = function (r) {
      return r.replace(/^\s+/g, "");
    }),
    (s.string.stripWhitespace = function (r) {
      return r.replace(/^\s+|\s+$/g, "");
    }),
    (s.string.toUint8Array = function (r) {
      if (!r) return new Uint8Array(0);
      for (var n = new Uint8Array(r.length), t = 0; t < r.length; ++t) n[t] = r.charCodeAt(t);
      return n;
    }),
    (s.string.genRandomString = function (r) {
      for (var n = "abcdefghijklnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", t = "", e = 0, i = n.length; e < r; ++e)
        t += n[Math.floor(Math.random() * i)];
      return t;
    }),
    (s.string.base64UrlToBase64 = function (r) {
      return r.replace(/-/g, "+").replace(/_/g, "/");
    }),
    (s.string.base64UrlToString = function (r) {
      var n = s.string.base64UrlToBase64(r);
      switch (n.length % 4) {
        case 0:
          break;
        case 2:
          n += "==";
          break;
        case 3:
          n += "=";
          break;
        default:
          throw "Not a valid Base64Url";
      }
      r = window.atob(n);
      try {
        return window.decodeURIComponent(window.escape(r));
      } catch (t) {
        return r;
      }
    }),
    (s.string.base64UrlDecode = function (r) {
      return window.atob(s.string.base64UrlToBase64(r));
    }),
    (s.string.base64ToBase64Url = function (r) {
      return r.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    }),
    (s.string.stringToBase64Url = function (r) {
      r = window.btoa(r);
      return s.string.base64ToBase64Url(r);
    }),
    (s.string.arrayBufferToBase64Url = function (r) {
      return s.string.base64ToBase64Url(s.string.arrayBufferToBase64(r));
    }),
    (s.string.arrayBufferToBase64 = function (r) {
      return window.btoa(String.fromCharCode.apply(null, r));
    }),
    (s.string.base64UrlToArrayBuffer = function (r) {
      return s.string.toUint8Array(s.string.base64UrlDecode(r));
    }),
    (s.string.isSubString = function (r, n) {
      if (!a(r) || !a(n)) return !1;
      if (0 === r.length || 0 === n.length) return !1;
      var t = r,
        e = n;
      return r.length > n.length && ((e = r), (t = n)), 0 <= e.indexOf(t);
    }),
    (s.string.hashCode = function (r) {
      if (!a(r)) return "";
      for (var n = 0, t = 0; t < r.length; t++) n = (Math.imul(31, n) + r.charCodeAt(t)) | 0;
      return n + "";
    }),
    (s.filters = {}),
    (s.filters.byKeyEqual = function (n, t) {
      return function (r) {
        return r[n] === t[n];
      };
    }),
    (s.predicates = {}),
    (s.predicates.notNull = n(t, e)),
    (s.versionAtLeast = function (r, n) {
      if (!r || !n) return !1;
      for (var t, e = r.split("."), i = n.split("."), a = 0; a < e.length; a++)
        if (0 != (t = parseInt(e[a], 10) - parseInt(i[a], 10))) return -1 < t;
      return !0;
    }),
    (s.isSiteFlowProgressComplete = function (r) {
      return !!r && !!r.username && !!r.password;
    }),
    (s.addEventListenerToWindow = function (r, n) {
      if (window.spaState) {
        if (!window.spaState.eventListeners || window.spaState.eventListeners[r]) return;
        window.addEventListener(r, n), (window.spaState.eventListeners[r] = !0);
      }
      window.addEventListener(r, n);
    });
})();
