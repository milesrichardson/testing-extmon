LPServer = (function () {
  var n = null,
    o = null,
    p = function (e, t) {
      e && e.error && e.error(t);
    },
    u = function (e, t) {
      if (4 === e.readyState)
        if (200 === e.status)
          switch (t.dataType) {
            case "xml":
              t.success(e.responseXML, e.responseText);
              break;
            case "json":
              var n = null;
              try {
                n = JSON.parse(e.responseText);
              } catch (e) {}
              t.success(n, e.responseText);
              break;
            default:
              t.success(e.responseText);
          }
        else t.error && t.error(e, e.statusText);
    },
    c =
      ((i = function (e) {
        var t = {},
          n;
        for (n in e) {
          var r = e[n];
          if ("object" == typeof (r = null == r ? "" : r)) for (var o in r) r.hasOwnProperty(o) && (t[n + "[" + o + "]"] = r[o]);
          else t[n] = r;
        }
        return t;
      }),
      (a = function (e, t) {
        t = t || "";
        var n = [],
          r;
        for (r in (e = i(e))) {
          var o = e[r];
          "object" == typeof o ? (n = n.concat(a(o, r))) : n.push((r = t ? t + "[" + r + "]" : r) + "=" + encodeURIComponent(o));
        }
        return n;
      }),
      function (e) {
        return a(e).join("&");
      }),
    i,
    a,
    e = function (t) {
      var e = new XMLHttpRequest(),
        n = t.contentType || "application/x-www-form-urlencoded",
        r =
          (t.success &&
            (e.onload = function () {
              u(e, t);
            }),
          t.error &&
            (e.onerror = function () {
              t.error(e, e.statusText);
            }),
          function (e) {
            if ("application/json" !== n) return c(t.data);
            if ("GET" === e) return "";
            try {
              return JSON.parse(t.data), t.data;
            } catch (e) {
              return JSON.stringify(t.data);
            }
          }),
        o = t.url,
        i,
        o;
      if (("GET" === t.type && ((i = r(t.type)), (o = t.url + (0 < i.length ? "?" + i : ""))), e.open(t.type || "GET", o, !0), t.headers))
        for (var a in t.headers) t.headers.hasOwnProperty(a) && e.setRequestHeader(a, t.headers[a]);
      "POST" === t.type
        ? (e.setRequestHeader("Content-Type", n), t.beforeSend && t.beforeSend(e, t), e.send(r()))
        : (t.beforeSend && t.beforeSend(e, t), e.send());
    },
    t = function (t, e) {
      N.ajax({
        type: "POST",
        url: N.getBaseURL() + "getCSRFToken.php",
        success: function (e) {
          t((n = e || null));
        },
        error: r(e)
      });
    },
    r = function (r) {
      return function (e, t, n) {
        "function" == typeof r ? r() : console.error(n);
      };
    },
    l = function (e, t, n, r) {
      d(e, t, n, r) || p(t, n);
    },
    d =
      ((s = function (e, t, n, r) {
        if (e) {
          var e = e[n];
          if ("function" == typeof e) return e(r, t), !0;
        }
        return !1;
      }),
      function (e, t, n, r) {
        var e = s(e, t, n, r),
          e;
        return (e = s(t.callbacks, t, n, r) || e);
      }),
    s,
    f = function (e, t) {
      try {
        N.logException(e);
      } catch (e) {}
      if ((e instanceof q ? p(t, e.message) : p(t), LPServer.throwExceptions)) throw e;
    },
    y = function (r, o) {
      return function (e, t) {
        try {
          if (!d(r, o, t)) {
            if (null === e && t && "undefined" != typeof DOMParser)
              try {
                var n;
                e = new DOMParser().parseFromString(t, "application/xml");
              } catch (e) {}
            null === e ? p(o, "invalidxml") : g(e, r, o);
          }
        } catch (e) {
          f(e, o);
        }
      };
    },
    v = function (e, t) {
      return e.getElementsByTagName(t);
    },
    S = function (e, t) {
      var e = v(e, t);
      return 0 < e.length ? e[0] : null;
    },
    b = function (e, t) {
      var e = S(e, t);
      return e ? e.textContent : "";
    },
    g = function (e, t, n) {
      var r = S(e, "result"),
        o = S(e, "ok"),
        i = S(e, "error"),
        a = S(e, "failed");
      if (r) {
        var u = r.getAttribute("rc"),
          c = r.getAttribute("msg"),
          s = r.getAttribute("success"),
          f = r.getAttribute("ok");
        if (u) return void l(t, n, u, r);
        if (c) return void l(t, n, c, r);
        if (s) return void l(t, n, s, r);
        if (f) return void l(t, n, "ok");
        var u = r.textContent.trim();
        if ("ok" === u) return void (d(t, n, "ok") || l(t, n, b(e, "status")));
        if ("bad" === u) return void p(n, b(e, "message"));
      } else {
        if (o) return void l(t, n, "ok", o);
        if (i) return void (d(t, n, i.getAttribute("cause"), i) || l(t, n, i.getAttribute("message"), i));
        if (a) return void l(t, n, a.getAttribute("reason"), a);
      }
      p(n);
    },
    k = function (n, r) {
      return function (e, t) {
        try {
          if (null === e && t) p(r, "invalidjson");
          else {
            if (e.error) return void (d(n, r, e.error, e) || p(r, e.errortxt || e.error));
            if (e.hasOwnProperty("success")) {
              if (e.success && d(n, r, "success", e)) return;
              if (!e.success) return void p(r);
            } else if (e.res) {
              if ("success" !== e.res) return void (d(n, r, e.res, e) || p(r, e.errortxt));
              if (d(n, r, e.res, e)) return;
            } else {
              if (d(n, r, e.reason, e)) return;
              if (d(n, r, e.status, e)) return;
              if (d(n, r, e.cmd, e)) return;
            }
          }
          n && "function" == typeof n.default ? n.default(e, r) : "function" == typeof r.success && r.success(e);
        } catch (e) {
          f(e, r);
        }
      };
    },
    x = function (r, o) {
      return function (e, t) {
        var n;
        try {
          n = JSON.parse(e.responseText);
        } catch (e) {
          return void p(o, "invalidjson");
        }
        d(r, o, n.code, n) || p(o, n.message);
      };
    },
    h = function (e, t, n) {
      for (var r = [], o = 0; o < n; ++o) r.push(C(e, t + o));
      return r;
    },
    m = function (e) {
      (e.userSupplied = e.userSupplied || {}),
        (e.type = void 0 === e.type ? "POST" : e.type),
        (e.url = N.getBaseURL() + e.url),
        (e.data = O(e.data, e.userSupplied.requestArgs)),
        e.data && void 0 === e.data.lpversion && "undefined" != typeof lpversion && (e.data.lpversion = lpversion),
        void 0 === e.error && e.userSupplied.error && (e.error = r(e.userSupplied.error)),
        e.data && void 0 === e.data.token && (void 0 === e.CSRFToken || e.CSRFToken) && null === n
          ? t(function () {
              N.ajax(e);
            }, e.userSupplied.error)
          : N.ajax(e);
    },
    T = function (e, t) {
      var n = {},
        r = t.userSupplied;
      switch (("object" != typeof r && (r = t.userSupplied = {}), typeof t.success)) {
        case "string":
          return (n[t.success] = r.success), e(n, r);
        case "function":
          return (n.default = t.success), e(n, r);
        default:
          if (t.callbacks || r.success || r.callbacks) return e(t.callbacks, r);
      }
      return null;
    },
    _ = function (e, t) {
      t.data && void 0 === t.data.token && (void 0 === t.CSRFToken || t.CSRFToken) && (t.data.token = n);
    },
    R = function (e) {
      (e.dataType = "json"), (e.beforeSend = P(e.beforeSend, _)), (e.success = T(k, e)), m(e);
    },
    w = function (e) {
      (e.dataType = "xml"), (e.beforeSend = P(e.beforeSend, _)), (e.success = T(y, e)), m(e);
    },
    j = function (e) {
      (e.dataType = "text"), (e.beforeSend = P(e.beforeSend, _)), m(e);
    },
    A = function (e, t, n) {
      for (var r in ((n = n || []), t)) {
        var o = e[r],
          i = t[r];
        if ("object" == typeof i) A(o, i, n.concat(r));
        else if (typeof o !== i) throw (n.push(r), "Extension is missing the following property: " + n.join(".") + " (" + i + ")");
      }
    },
    E = function (e, t) {
      for (var n in (A(e, L), t)) N[n] = t[n];
      for (var r in H) N[r] = e[r];
      o = e;
    },
    C = function (e, t, n) {
      var e = e.getAttribute(t);
      return void 0 === e ? n : e;
    },
    K = function (e, t, n) {
      var e = parseInt(C(e, t, n));
      return isNaN(e) ? n : e;
    },
    O = function (e) {
      e = e || {};
      for (var t = 1, n = arguments.length; t < n; ++t) {
        var r = arguments[t],
          o;
        for (o in r) e[o] = r[o];
      }
      return e;
    },
    P = function (t, n) {
      return t
        ? function () {
            var e = n.apply(window, arguments);
            t.apply(window, e || arguments);
          }
        : n;
    },
    L = {
      StringUtils: { translate: "function" },
      AES: { Encrypt: "function", Decrypt: "function", hex2bin: "function", bin2hex: "function" },
      enc: "function",
      dec: "function",
      RSAKey: "function",
      createRandomHexString: "function",
      parse_public_key: "function",
      parse_private_key: "function",
      enccbc: "function",
      make_lp_key_iterations: "function",
      make_lp_hash_iterations: "function",
      get_random_password: "function"
    },
    H = { RSAKey: !0 },
    N = {
      ajax: e,
      translate: function () {
        return o.StringUtils.translate.apply(o.StringUtils, arguments);
      },
      logException: function () {},
      hex2bin: function () {
        return o.AES.hex2bin.apply(o.AES, arguments);
      },
      bin2hex: function () {
        return o.AES.bin2hex.apply(o.AES, arguments);
      },
      encryptAES: function (e, t) {
        return o.enc(e, t);
      },
      decryptAES: function (e, t) {
        return o.dec(e, t);
      },
      encrypt: function (e, t) {
        return o.enc(e, t);
      },
      decrypt: function (e, t) {
        try {
          return o.dec(e, t);
        } catch (e) {
          return "";
        }
      },
      createRandomHexString: function () {
        return o.createRandomHexString.apply(o, arguments);
      },
      parsePublicKey: function () {
        return o.parse_public_key.apply(o, arguments);
      },
      parsePrivateKey: function (e, t) {
        if ((t = t || o.rsaprivatekeyhex)) return o.parse_private_key(e, t);
        throw "rsaprivatekeyhex required for this action.";
      },
      extractPrivateKey: function (e, t) {
        return o.rsa_extract_privatekey(e, t);
      },
      encryptCBC: function () {
        return o.enccbc.apply(o, arguments);
      },
      makeKey: function () {
        return o.make_lp_key_iterations.apply(o, arguments);
      },
      makeHash: function () {
        return o.make_lp_hash_iterations.apply(o, arguments);
      },
      makeRandomPassword: function () {
        return o.get_random_password.apply(o, arguments);
      },
      getBaseURL: function () {
        return o.base_url || "";
      },
      getLocalKey: function () {
        return o.g_local_key;
      },
      setLocalKey: function (e) {
        o.g_local_key = e;
      }
    },
    q = function (e) {
      (this.message = e), (this.stack = new Error().stack);
    },
    U =
      (((q.prototype = Object.create(Error.prototype)).name = "ClientException"),
      function () {
        n = null;
      }),
    B,
    J,
    F,
    M;
  return (
    (F = function (e) {
      e.setRequestHeader("X-CSRF-TOKEN", n);
    }),
    {
      ajax: e,
      getRecordsFromResponse: h,
      jsonRequest: R,
      xmlRequest: w,
      textRequest: j,
      initialize: E,
      ext: N,
      getNodes: v,
      getNode: S,
      getNodeText: b,
      getAttr: C,
      getAttrInt: K,
      extend: O,
      extendCallback: P,
      ClientException: (q.prototype.constructor = q),
      clearCSRFToken: U,
      getCSRFToken: t,
      callback: function (e, t) {
        e.callbacks && "function" == typeof e.callbacks[t] && e.callbacks[t].apply(window, Array.prototype.slice.call(arguments, 2));
      },
      lmiapi: {
        jsonRequest: function (e) {
          (e.dataType = "json"),
            (e.contentType = "application/json"),
            (e.beforeSend = P(e.beforeSend, F)),
            (e.error = x(e.callbacks, e.userSupplied || {})),
            m(e);
        }
      }
    }
  );
})();
