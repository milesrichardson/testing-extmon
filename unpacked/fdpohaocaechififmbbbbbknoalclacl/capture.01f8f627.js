function e(e, t, r, n) {
  Object.defineProperty(e, t, { get: r, set: n, enumerable: !0, configurable: !0 });
}
function t(e) {
  return e && e.__esModule ? e.default : e;
}
var r =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : {},
  n = {},
  o = {},
  s = r.parcelRequire60cc;
null == s &&
  (((s = function (e) {
    if (e in n) return n[e].exports;
    if (e in o) {
      var t = o[e];
      delete o[e];
      var r = { id: e, exports: {} };
      return (n[e] = r), t.call(r.exports, r, r.exports), r.exports;
    }
    var i = new Error("Cannot find module '" + e + "'");
    throw ((i.code = "MODULE_NOT_FOUND"), i);
  }).register = function (e, t) {
    o[e] = t;
  }),
  (r.parcelRequire60cc = s)),
  s.register("5IuNT", function (t, r) {
    var n, o;
    e(
      t.exports,
      "register",
      () => n,
      (e) => (n = e)
    ),
      e(
        t.exports,
        "resolve",
        () => o,
        (e) => (o = e)
      );
    var i = {};
    (n = function (e) {
      for (var t = Object.keys(e), r = 0; r < t.length; r++) i[t[r]] = e[t[r]];
    }),
      (o = function (e) {
        var t = i[e];
        if (null == t) throw new Error("Could not resolve bundle with id " + e);
        return t;
      });
  }),
  s.register("9yYZW", function (t, r) {
    var n;
    e(
      t.exports,
      "getBundleURL",
      () => n,
      (e) => (n = e)
    );
    var o = {};
    function i(e) {
      return ("" + e).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
    }
    n = function (e) {
      var t = o[e];
      return (
        t ||
          ((t = (function () {
            try {
              throw new Error();
            } catch (t) {
              var e = ("" + t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
              if (e) return i(e[2]);
            }
            return "/";
          })()),
          (o[e] = t)),
        t
      );
    };
  }),
  s.register("fsIIe", function (e, t) {
    var r = s("8WK9J"),
      n = s("aE9S3"),
      o = s("8fRhX"),
      i = s("bDyoN");
    function a(e) {
      var t = new o(e),
        i = n(o.prototype.request, t);
      return r.extend(i, o.prototype, t), r.extend(i, t), i;
    }
    var l = a(i);
    (l.Axios = o),
      (l.create = function (e) {
        return a(r.merge(i, e));
      }),
      (l.Cancel = s("gaLaE")),
      (l.CancelToken = s("jKfay")),
      (l.isCancel = s("7YfJF")),
      (l.all = function (e) {
        return Promise.all(e);
      }),
      (l.spread = s("5VaTU")),
      (e.exports = l),
      (e.exports.default = l);
  }),
  s.register("8WK9J", function (e, t) {
    var r = s("aE9S3"),
      n = s("fHdr2"),
      o = Object.prototype.toString;
    function i(e) {
      return "[object Array]" === o.call(e);
    }
    function a(e) {
      return null !== e && "object" == typeof e;
    }
    function l(e) {
      return "[object Function]" === o.call(e);
    }
    function c(e, t) {
      if (null != e)
        if (("object" != typeof e && (e = [e]), i(e))) for (var r = 0, n = e.length; r < n; r++) t.call(null, e[r], r, e);
        else for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e);
    }
    e.exports = {
      isArray: i,
      isArrayBuffer: function (e) {
        return "[object ArrayBuffer]" === o.call(e);
      },
      isBuffer: n,
      isFormData: function (e) {
        return "undefined" != typeof FormData && e instanceof FormData;
      },
      isArrayBufferView: function (e) {
        return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView
          ? ArrayBuffer.isView(e)
          : e && e.buffer && e.buffer instanceof ArrayBuffer;
      },
      isString: function (e) {
        return "string" == typeof e;
      },
      isNumber: function (e) {
        return "number" == typeof e;
      },
      isObject: a,
      isUndefined: function (e) {
        return void 0 === e;
      },
      isDate: function (e) {
        return "[object Date]" === o.call(e);
      },
      isFile: function (e) {
        return "[object File]" === o.call(e);
      },
      isBlob: function (e) {
        return "[object Blob]" === o.call(e);
      },
      isFunction: l,
      isStream: function (e) {
        return a(e) && l(e.pipe);
      },
      isURLSearchParams: function (e) {
        return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
      },
      isStandardBrowserEnv: function () {
        return (
          ("undefined" == typeof navigator || "ReactNative" !== navigator.product) &&
          "undefined" != typeof window &&
          "undefined" != typeof document
        );
      },
      forEach: c,
      merge: function e() {
        var t = {};
        function r(r, n) {
          "object" == typeof t[n] && "object" == typeof r ? (t[n] = e(t[n], r)) : (t[n] = r);
        }
        for (var n = 0, o = arguments.length; n < o; n++) c(arguments[n], r);
        return t;
      },
      extend: function (e, t, n) {
        return (
          c(t, function (t, o) {
            e[o] = n && "function" == typeof t ? r(t, n) : t;
          }),
          e
        );
      },
      trim: function (e) {
        return e.replace(/^\s*/, "").replace(/\s*$/, "");
      }
    };
  }),
  s.register("aE9S3", function (e, t) {
    e.exports = function (e, t) {
      return function () {
        for (var r = new Array(arguments.length), n = 0; n < r.length; n++) r[n] = arguments[n];
        return e.apply(t, r);
      };
    };
  }),
  s.register("fHdr2", function (e, t) {
    /*!
     * Determine if an object is a Buffer
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */
    e.exports = function (e) {
      return null != e && null != e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
    };
  }),
  s.register("8fRhX", function (e, t) {
    var r = s("bDyoN"),
      n = s("8WK9J"),
      o = s("hSB82"),
      i = s("jDUA6");
    function a(e) {
      (this.defaults = e), (this.interceptors = { request: new o(), response: new o() });
    }
    (a.prototype.request = function (e) {
      "string" == typeof e && (e = n.merge({ url: arguments[0] }, arguments[1])),
        ((e = n.merge(r, { method: "get" }, this.defaults, e)).method = e.method.toLowerCase());
      var t = [i, void 0],
        o = Promise.resolve(e);
      for (
        this.interceptors.request.forEach(function (e) {
          t.unshift(e.fulfilled, e.rejected);
        }),
          this.interceptors.response.forEach(function (e) {
            t.push(e.fulfilled, e.rejected);
          });
        t.length;

      )
        o = o.then(t.shift(), t.shift());
      return o;
    }),
      n.forEach(["delete", "get", "head", "options"], function (e) {
        a.prototype[e] = function (t, r) {
          return this.request(n.merge(r || {}, { method: e, url: t }));
        };
      }),
      n.forEach(["post", "put", "patch"], function (e) {
        a.prototype[e] = function (t, r, o) {
          return this.request(n.merge(o || {}, { method: e, url: t, data: r }));
        };
      }),
      (e.exports = a);
  }),
  s.register("bDyoN", function (e, t) {
    var r = s("kIky1"),
      n = s("8WK9J"),
      o = s("ld7hz"),
      i = { "Content-Type": "application/x-www-form-urlencoded" };
    function a(e, t) {
      !n.isUndefined(e) && n.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
    }
    var l,
      c = {
        adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== r) && (l = s("kqen0")), l),
        transformRequest: [
          function (e, t) {
            return (
              o(t, "Content-Type"),
              n.isFormData(e) || n.isArrayBuffer(e) || n.isBuffer(e) || n.isStream(e) || n.isFile(e) || n.isBlob(e)
                ? e
                : n.isArrayBufferView(e)
                ? e.buffer
                : n.isURLSearchParams(e)
                ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString())
                : n.isObject(e)
                ? (a(t, "application/json;charset=utf-8"), JSON.stringify(e))
                : e
            );
          }
        ],
        transformResponse: [
          function (e) {
            if ("string" == typeof e)
              try {
                e = JSON.parse(e);
              } catch (e) {}
            return e;
          }
        ],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        validateStatus: function (e) {
          return e >= 200 && e < 300;
        }
      };
    (c.headers = { common: { Accept: "application/json, text/plain, */*" } }),
      n.forEach(["delete", "get", "head"], function (e) {
        c.headers[e] = {};
      }),
      n.forEach(["post", "put", "patch"], function (e) {
        c.headers[e] = n.merge(i);
      }),
      (e.exports = c);
  }),
  s.register("ld7hz", function (e, t) {
    var r = s("8WK9J");
    e.exports = function (e, t) {
      r.forEach(e, function (r, n) {
        n !== t && n.toUpperCase() === t.toUpperCase() && ((e[t] = r), delete e[n]);
      });
    };
  }),
  s.register("kqen0", function (e, t) {
    var r = s("8WK9J"),
      n = s("jKGQ1"),
      o = s("1UUsN"),
      i = s("iQd8S"),
      a = s("6j9JE"),
      l = s("4EkQk");
    e.exports = function (e) {
      return new Promise(function (t, c) {
        var d = e.data,
          u = e.headers;
        r.isFormData(d) && delete u["Content-Type"];
        var h = new XMLHttpRequest();
        if (e.auth) {
          var f = e.auth.username || "",
            p = e.auth.password || "";
          u.Authorization = "Basic " + btoa(f + ":" + p);
        }
        if (
          (h.open(e.method.toUpperCase(), o(e.url, e.params, e.paramsSerializer), !0),
          (h.timeout = e.timeout),
          (h.onreadystatechange = function () {
            if (h && 4 === h.readyState && (0 !== h.status || (h.responseURL && 0 === h.responseURL.indexOf("file:")))) {
              var r = "getAllResponseHeaders" in h ? i(h.getAllResponseHeaders()) : null,
                o = {
                  data: e.responseType && "text" !== e.responseType ? h.response : h.responseText,
                  status: h.status,
                  statusText: h.statusText,
                  headers: r,
                  config: e,
                  request: h
                };
              n(t, c, o), (h = null);
            }
          }),
          (h.onerror = function () {
            c(l("Network Error", e, null, h)), (h = null);
          }),
          (h.ontimeout = function () {
            c(l("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", h)), (h = null);
          }),
          r.isStandardBrowserEnv())
        ) {
          var m = s("jdnCN"),
            g = (e.withCredentials || a(e.url)) && e.xsrfCookieName ? m.read(e.xsrfCookieName) : void 0;
          g && (u[e.xsrfHeaderName] = g);
        }
        if (
          ("setRequestHeader" in h &&
            r.forEach(u, function (e, t) {
              void 0 === d && "content-type" === t.toLowerCase() ? delete u[t] : h.setRequestHeader(t, e);
            }),
          e.withCredentials && (h.withCredentials = !0),
          e.responseType)
        )
          try {
            h.responseType = e.responseType;
          } catch (t) {
            if ("json" !== e.responseType) throw t;
          }
        "function" == typeof e.onDownloadProgress && h.addEventListener("progress", e.onDownloadProgress),
          "function" == typeof e.onUploadProgress && h.upload && h.upload.addEventListener("progress", e.onUploadProgress),
          e.cancelToken &&
            e.cancelToken.promise.then(function (e) {
              h && (h.abort(), c(e), (h = null));
            }),
          void 0 === d && (d = null),
          h.send(d);
      });
    };
  }),
  s.register("jKGQ1", function (e, t) {
    var r = s("4EkQk");
    e.exports = function (e, t, n) {
      var o = n.config.validateStatus;
      n.status && o && !o(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n);
    };
  }),
  s.register("4EkQk", function (e, t) {
    var r = s("96WxY");
    e.exports = function (e, t, n, o, i) {
      var s = new Error(e);
      return r(s, t, n, o, i);
    };
  }),
  s.register("96WxY", function (e, t) {
    e.exports = function (e, t, r, n, o) {
      return (e.config = t), r && (e.code = r), (e.request = n), (e.response = o), e;
    };
  }),
  s.register("1UUsN", function (e, t) {
    var r = s("8WK9J");
    function n(e) {
      return encodeURIComponent(e)
        .replace(/%40/gi, "@")
        .replace(/%3A/gi, ":")
        .replace(/%24/g, "$")
        .replace(/%2C/gi, ",")
        .replace(/%20/g, "+")
        .replace(/%5B/gi, "[")
        .replace(/%5D/gi, "]");
    }
    e.exports = function (e, t, o) {
      if (!t) return e;
      var i;
      if (o) i = o(t);
      else if (r.isURLSearchParams(t)) i = t.toString();
      else {
        var s = [];
        r.forEach(t, function (e, t) {
          null != e &&
            (r.isArray(e) ? (t += "[]") : (e = [e]),
            r.forEach(e, function (e) {
              r.isDate(e) ? (e = e.toISOString()) : r.isObject(e) && (e = JSON.stringify(e)), s.push(n(t) + "=" + n(e));
            }));
        }),
          (i = s.join("&"));
      }
      return i && (e += (-1 === e.indexOf("?") ? "?" : "&") + i), e;
    };
  }),
  s.register("iQd8S", function (e, t) {
    var r = s("8WK9J"),
      n = [
        "age",
        "authorization",
        "content-length",
        "content-type",
        "etag",
        "expires",
        "from",
        "host",
        "if-modified-since",
        "if-unmodified-since",
        "last-modified",
        "location",
        "max-forwards",
        "proxy-authorization",
        "referer",
        "retry-after",
        "user-agent"
      ];
    e.exports = function (e) {
      var t,
        o,
        i,
        s = {};
      return e
        ? (r.forEach(e.split("\n"), function (e) {
            if (((i = e.indexOf(":")), (t = r.trim(e.substr(0, i)).toLowerCase()), (o = r.trim(e.substr(i + 1))), t)) {
              if (s[t] && n.indexOf(t) >= 0) return;
              s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([o]) : s[t] ? s[t] + ", " + o : o;
            }
          }),
          s)
        : s;
    };
  }),
  s.register("6j9JE", function (e, t) {
    var r = s("8WK9J");
    e.exports = r.isStandardBrowserEnv()
      ? (function () {
          var e,
            t = /(msie|trident)/i.test(navigator.userAgent),
            n = document.createElement("a");
          function o(e) {
            var r = e;
            return (
              t && (n.setAttribute("href", r), (r = n.href)),
              n.setAttribute("href", r),
              {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, "") : "",
                hash: n.hash ? n.hash.replace(/^#/, "") : "",
                hostname: n.hostname,
                port: n.port,
                pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
              }
            );
          }
          return (
            (e = o(window.location.href)),
            function (t) {
              var n = r.isString(t) ? o(t) : t;
              return n.protocol === e.protocol && n.host === e.host;
            }
          );
        })()
      : function () {
          return !0;
        };
  }),
  s.register("jdnCN", function (e, t) {
    var r = s("8WK9J");
    e.exports = r.isStandardBrowserEnv()
      ? {
          write: function (e, t, n, o, i, s) {
            var a = [];
            a.push(e + "=" + encodeURIComponent(t)),
              r.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()),
              r.isString(o) && a.push("path=" + o),
              r.isString(i) && a.push("domain=" + i),
              !0 === s && a.push("secure"),
              (document.cookie = a.join("; "));
          },
          read: function (e) {
            var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
            return t ? decodeURIComponent(t[3]) : null;
          },
          remove: function (e) {
            this.write(e, "", Date.now() - 864e5);
          }
        }
      : {
          write: function () {},
          read: function () {
            return null;
          },
          remove: function () {}
        };
  }),
  s.register("hSB82", function (e, t) {
    var r = s("8WK9J");
    function n() {
      this.handlers = [];
    }
    (n.prototype.use = function (e, t) {
      return this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1;
    }),
      (n.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null);
      }),
      (n.prototype.forEach = function (e) {
        r.forEach(this.handlers, function (t) {
          null !== t && e(t);
        });
      }),
      (e.exports = n);
  }),
  s.register("jDUA6", function (e, t) {
    var r = s("8WK9J"),
      n = s("594ib"),
      o = s("7YfJF"),
      i = s("bDyoN"),
      a = s("dHQA6"),
      l = s("HJw6u");
    function c(e) {
      e.cancelToken && e.cancelToken.throwIfRequested();
    }
    e.exports = function (e) {
      return (
        c(e),
        e.baseURL && !a(e.url) && (e.url = l(e.baseURL, e.url)),
        (e.headers = e.headers || {}),
        (e.data = n(e.data, e.headers, e.transformRequest)),
        (e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {})),
        r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
          delete e.headers[t];
        }),
        (e.adapter || i.adapter)(e).then(
          function (t) {
            return c(e), (t.data = n(t.data, t.headers, e.transformResponse)), t;
          },
          function (t) {
            return (
              o(t) || (c(e), t && t.response && (t.response.data = n(t.response.data, t.response.headers, e.transformResponse))),
              Promise.reject(t)
            );
          }
        )
      );
    };
  }),
  s.register("594ib", function (e, t) {
    var r = s("8WK9J");
    e.exports = function (e, t, n) {
      return (
        r.forEach(n, function (r) {
          e = r(e, t);
        }),
        e
      );
    };
  }),
  s.register("7YfJF", function (e, t) {
    e.exports = function (e) {
      return !(!e || !e.__CANCEL__);
    };
  }),
  s.register("dHQA6", function (e, t) {
    e.exports = function (e) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
    };
  }),
  s.register("HJw6u", function (e, t) {
    e.exports = function (e, t) {
      return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
    };
  }),
  s.register("gaLaE", function (e, t) {
    function r(e) {
      this.message = e;
    }
    (r.prototype.toString = function () {
      return "Cancel" + (this.message ? ": " + this.message : "");
    }),
      (r.prototype.__CANCEL__ = !0),
      (e.exports = r);
  }),
  s.register("jKfay", function (e, t) {
    var r = s("gaLaE");
    function n(e) {
      if ("function" != typeof e) throw new TypeError("executor must be a function.");
      var t;
      this.promise = new Promise(function (e) {
        t = e;
      });
      var n = this;
      e(function (e) {
        n.reason || ((n.reason = new r(e)), t(n.reason));
      });
    }
    (n.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason;
    }),
      (n.source = function () {
        var e;
        return {
          token: new n(function (t) {
            e = t;
          }),
          cancel: e
        };
      }),
      (e.exports = n);
  }),
  s.register("5VaTU", function (e, t) {
    e.exports = function (e) {
      return function (t) {
        return e.apply(null, t);
      };
    };
  }),
  s.register("cW7yT", function (e, t) {
    /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ !(function () {
      var t = {}.hasOwnProperty;
      function r() {
        for (var e = [], n = 0; n < arguments.length; n++) {
          var o = arguments[n];
          if (o) {
            var i = typeof o;
            if ("string" === i || "number" === i) e.push(o);
            else if (Array.isArray(o) && o.length) {
              var s = r.apply(null, o);
              s && e.push(s);
            } else if ("object" === i) for (var a in o) t.call(o, a) && o[a] && e.push(a);
          }
        }
        return e.join(" ");
      }
      e.exports
        ? ((r.default = r), (e.exports = r))
        : "function" == typeof define && "object" == typeof define.amd && define.amd
        ? define("classnames", [], function () {
            return r;
          })
        : (window.classNames = r);
    })();
  }),
  s("5IuNT").register(
    JSON.parse(
      '{"1iJqy":"capture.01f8f627.js","3sgVN":"icon-btn-delete.f78c5ab3.svg","eZbkr":"icon-btn-download.6a1b3bd6.svg","6iPKz":"capture.88f199e8.css","aWhca":"capture.839f08c2.css","ddXqF":"welcome.8650f05e.js","cnvCi":"popup.1d266e0e.js","g5HYp":"editor.c58b5873.js","ibhy5":"welcome.1fde5eb4.js"}'
    )
  );
var a = s("jmw9X"),
  l = s("2xkva");
var c = s("iMjBX");
var d = s("cEw93"),
  u = ((l = s("2xkva")), s("mG6c6")),
  h = ((l = s("2xkva")), s("alm1K")),
  f = s("8aJKE"),
  p = s("3ESIc");
var m = () => {
  let e = [g],
    t = 0;
  return (0, h.serialMap)(e, (e) =>
    e().then((e) => {
      if ("number" != typeof e) {
        let t = `Migration ${i - 1} returned non-number: ${e}`,
          r = new Error(t);
        throw ((r.name = "InvalidMigration"), r);
      }
      return (t += e), e;
    })
  ).then(() => {
    t && (l.default.info("Updated", t), u.default.triggerUpdated({ source: "MIGRATION", isDone: !0 }));
  });
};
const g = () =>
  f.default.load().then((e) => {
    const t = "firstKnownVersion";
    return e[t] ? 0 : f.default.set(t, (0, p.getVersion)()).then(() => 1);
  });
var w = s("aiU1O");
let y = null;
var E = s("03QYZ"),
  v = s("aQWOf"),
  b = {};
b = s("9yYZW").getBundleURL("1iJqy") + s("5IuNT").resolve("3sgVN");
var S = {};
S = s("9yYZW").getBundleURL("1iJqy") + s("5IuNT").resolve("eZbkr");
var C;
C = s("fsIIe");
const T = async (e) => {
  const r = await ((e) =>
      t(C)
        .get(e)
        .then((e) => e.data))(e),
    n = document.createElement("div");
  return (n.innerHTML = r), n.getElementsByTagName("svg")[0];
};
var _ = s("1BBN9"),
  x = s("8ABn4"),
  k = s("h4XuO"),
  R = ((c = s("iMjBX")), (u = s("mG6c6")), (l = s("2xkva")), s("2kfQE"));
(w = s("aiU1O")), (E = s("03QYZ"));
const I = () => {
    const e = (0, E.getQueryString)(),
      t = e.id || e.oid,
      r = e.e,
      n = e.url;
    return { options: $(t, r, n), history: O(t, r, n), capture: t ? A(t, n) : void 0, editor: t && r ? L(t, r, n) : void 0 };
  },
  N = (e, t, r = !1) => {
    if (e) {
      -1 === e.href.indexOf("?") && ((e.href = t), r && e.setAttribute("style", ""));
    }
  },
  A = (e, t = null) => {
    const r = { id: e };
    t && (r.url = t);
    return "/capture.html" + ("?" + (0, E.toQueryString)(r));
  },
  L = (e, t, r = null) => {
    const n = { id: e, e: t };
    r && (n.url = r);
    return "/editor.html" + ("?" + (0, E.toQueryString)(n));
  },
  $ = (e = null, t = null, r = null) => {
    let n = "";
    if (e) {
      const o = { id: e };
      t && (o.e = t), r && (o.url = r), (n = "?" + (0, E.toQueryString)(o));
    }
    return "/options.html" + n;
  },
  O = (e = null, t = null, r = null) => {
    let n = "";
    if (e) {
      const o = { oid: e };
      t && (o.e = t), r && (o.url = r), (n = "?" + (0, E.toQueryString)(o));
    }
    return "/capture.html" + n;
  };
(E = s("03QYZ")), (k = s("h4XuO")), (E = s("03QYZ"));
const D = (e, t, r, n, o) => {
  (0, k.$)("error-title").innerText = e;
  let i = (0, k.$)("error-body");
  (i.innerText = t),
    (0, E.asArray)(i.getElementsByClassName(D.extrasClassName)).forEach((e) => {
      e.parentNode.removeChild(e);
    });
  let s = (0, k.$)("error");
  s.classList.toggle("warning", !r),
    k.$.findClass("close", s).forEach((e) => {
      (e.style.display = n ? "" : "none"), e._assignedClose || ((e._assignedClose = !0), k.$.on(e, "click", P));
    }),
    ((0, k.$)("error-buttons").style.display = !0 === o ? "none" : ""),
    k.$.show("error-wrap");
};
D.extrasClassName = "errors-html-extra";
const P = () => {
    (0, k.$)("error-wrap").style.display = "none";
  },
  j = () =>
    Promise.resolve().then(() => {
      (0, k.$)("image").classList.add("loading");
    }),
  M = () =>
    Promise.resolve().then(() => {
      (0, k.$)("image").classList.remove("loading");
    });
function U() {
  return x.Capture.all()
    .then((e) =>
      (function (e) {
        P(), ((0, k.$)("image").style.display = "none"), window.scrollTo(0, 0);
        let r = document.createElement("ul");
        r.className = "dropdown-items";
        let n = e.map((e) =>
            (function (e) {
              let t = e.url;
              1 !== e.images.length && (t += ` (${e.images.length} images)`);
              let r = e.dateTime.toLocaleString({ ...v.DateTime.DATETIME_SHORT, year: "2-digit" }),
                n = e.sizes ? G(e.sizes.reduce((e, t) => e + t)) : "",
                o = e.displayURL,
                i = document.createElement("li");
              i.className = "dropdown-item";
              let s = document.createElement("div");
              (s.className = "container"), i.appendChild(s);
              let a = document.createElement("label");
              a.className = "checkbox-wrap";
              let l = document.createElement("input");
              (l.type = "checkbox"), (l.className = "checkbox file-checkbox"), (l.dataset.id = e.id), a.appendChild(l), s.appendChild(a);
              let d,
                u = document.createElement("a");
              (u.textContent = t),
                (u.href = o),
                s.appendChild(u),
                e.edits &&
                  e.edits.length &&
                  ((d = document.createElement("span")),
                  (d.textContent = `(${(0, c.tr)("Edited")})`),
                  (d.className = "dim edited-note"),
                  u.appendChild(d));
              return (
                (d = document.createElement("span")),
                (d.textContent = n),
                (d.className = "size right"),
                u.insertBefore(d, u.firstChild),
                (d = document.createElement("span")),
                (d.textContent = r),
                (d.className = "date right"),
                u.insertBefore(d, u.firstChild),
                i
              );
            })(e)
          ),
          o = n.length - 1;
        for (; o >= 0; ) r.appendChild(n[o]), o--;
        e.length ||
          r.appendChild(
            (function () {
              const e = document.createElement("li");
              e.className = "dropdown-item info";
              const t = document.createElement("div");
              t.className = "container";
              const r = document.createElement("em");
              return (
                (r.textContent = (0, c.tr)("No screen captures found. Go make some!")),
                t.appendChild(document.createTextNode("😦 ")),
                t.appendChild(r),
                t.appendChild(document.createTextNode(" 😊")),
                e.appendChild(t),
                e
              );
            })()
          );
        let i = (0, k.$)("history");
        k.$.empty(i);
        let s = document.createElement("div");
        (s.className = "big-card"),
          s.appendChild(
            (function () {
              let e = document.createElement("div");
              e.className = " container title-container history-title-container";
              const r = document.createElement("div");
              r.className = "h2-wrap";
              let n = document.createElement("h2");
              (n.textContent = (0, c.tr)("Files")), r.appendChild(n), e.appendChild(r);
              let o = document.createElement("div");
              (o.className = "controls clearfix"), e.appendChild(o);
              let i = document.createElement("label");
              (i.className = "checkbox-wrap"), o.appendChild(i);
              let s = document.createElement("input");
              (s.type = "checkbox"),
                (s.className = "meta-checkbox"),
                s.addEventListener("change", (e) => {
                  let t = e.target.checked;
                  B().forEach((e) => (e.checked = t)), H();
                }),
                i.appendChild(s);
              let a = document.createElement("div");
              (a.className = "checkbox-note"), (a.textContent = ""), o.appendChild(a);
              let d = document.createElement("button");
              (d.textContent = (0, c.tr)("Delete")),
                (d.className = "checkbox-button check-box-button-del"),
                (d.disabled = !0),
                o.appendChild(d),
                T(t(b))
                  .then((e) => {
                    e.classList.add("btn-icon"), d.appendChild(e);
                  })
                  .catch((e) => {
                    l.default.error(`Error loading svg (${t(b)})`, e);
                  }),
                d.addEventListener("click", (e) => {
                  !(function (e) {
                    let t = e.length;
                    const r =
                      1 === t
                        ? (0, c.tr)("Are you sure you want to delete 1 screencapture?\n (This action cannot be undone.)")
                        : (0, c.tr)(
                            "Are you sure you want to delete $count$ screen captures?\n (This action cannot be undone.)",
                            null,
                            [t],
                            { count: { content: "$1", example: "2" } }
                          );
                    if (!confirm(r)) return;
                    let n = (0, c.tr)("Remove files");
                    x.Capture.lookupIds(e)
                      .then((e) => {
                        let t = [],
                          r = [],
                          n = [];
                        return Promise.all(
                          e.map((e) =>
                            e
                              .remove()
                              .then(() => t.push(e.id))
                              .catch((t) => {
                                r.push(e.id), n.push(t);
                              })
                          )
                        ).then(() => {
                          if (r.length && 0 === t.length) throw n[0];
                          return { succeeded: t, failed: r, errors: n };
                        });
                      })
                      .then(({ succeeded: e, failed: t }) => {
                        let r = e.length,
                          o = t.length,
                          i =
                            1 === r
                              ? (0, c.tr)("1 file was successfully removed.")
                              : (0, c.tr)("$num$ files were successfully removed.", null, [r], { num: { content: "$1", example: "2" } });
                        (i += " 🗑"),
                          o &&
                            ((i += "\n\n"),
                            (i +=
                              1 === o
                                ? (0, c.tr)("1 file could not be removed.")
                                : (0, c.tr)("$num$ files could not be removed.", null, [o], { num: { content: "$1", example: "2" } }))),
                          U(),
                          window.setTimeout(() => {
                            D(n, i),
                              window.setTimeout(() => {
                                P();
                              }, 3e3);
                          }, 50);
                      })
                      .catch((e) => {
                        l.default.error("Error handling files", e),
                          w.update(e).then(() => {
                            let e = (0, c.tr)("Error handling files. Please report this via the flag reporting button above.");
                            D(n, e, !0, !0);
                          });
                      });
                  })(F(B()));
                });
              let u = document.createElement("button");
              return (
                (u.textContent = (0, c.tr)("Download")),
                (u.className = "checkbox-button check-box-button-down"),
                (u.disabled = !0),
                o.appendChild(u),
                T(t(S))
                  .then((e) => {
                    e.classList.add("btn-icon"), u.appendChild(e);
                  })
                  .catch((e) => {
                    l.default.error(`Error loading svg (${t(S)})`, e);
                  }),
                u.addEventListener("click", (e) => {
                  let t = F(B());
                  (0, _.requestDownloads)()
                    .then((e) => {
                      if (e)
                        return x.Capture.lookupIds(t)
                          .then((e) =>
                            [].concat.apply(
                              [],
                              e.map((e) => e.fullPaths)
                            )
                          )
                          .then((e) => (0, E.fullServiceDownload)(e))
                          .then(({ hasPerms: e, results: t, failCount: r, successCount: n }) => {
                            if (((0, l.default)(`download success ${t.length} files`), e))
                              if (r) {
                                let e = "Some files did not download",
                                  r = t.filter((e) => !1 === e.success),
                                  n =
                                    (0, c.tr)("The following files could not be downloaded:") +
                                    `\n\n${r.map((e) => e.url).join("\n")}\n\n` +
                                    R.ERR_MSG_IF_PERSISTS;
                                D(e, n, !0, !0);
                              } else (0, l.default)(`downloaded ${t.length} files`);
                            else {
                              let e = (0, c.tr)("Cannot download files"),
                                t = (0, c.tr)("You need to grant the download privilege in order to download files");
                              D(e, t, !1, !0);
                            }
                          });
                      {
                        let e = (0, c.tr)("Permission needed to download files"),
                          t = (0, c.tr)("You need to grant the download privilege in order to download files");
                        return D(e, t, !1, !0), w.update().then(() => !0);
                      }
                    })
                    .catch((e) => {
                      w.update(e).then(() => {
                        l.default.error("Download error", e);
                        let t = (0, c.tr)("Error downloading files"),
                          r = (0, c.tr)("There was an error downloading files, please report it via the flag button above.");
                        D(t, r, !0, !0);
                      });
                    });
                }),
                e
              );
            })()
          ),
          s.appendChild(r),
          i.appendChild(s),
          (i.style.display = "block");
        let a = q.loadIdsSet();
        B().forEach((e) => {
          a.has(e.dataset.id) && (e.checked = !0), e.addEventListener("change", H);
        }),
          H();
      })(e)
    )
    .catch((e) => {
      l.default.error("Error in loadHistory", e),
        w.update(e).then(() => {
          let e = (0, c.tr)("Error loading history"),
            t = R.ERR_MSG_IF_PERSISTS;
          D(e, t, !0, !0);
        });
    });
}
function B(e) {
  let t = k.$.findClass("file-checkbox", (0, k.$)("history"));
  return !0 === e && q.saveElts(t), t;
}
function F(e) {
  return e.filter((e) => e.checked).map((e) => parseInt(e.dataset.id, 10));
}
const q = (function () {
  let e = "checkedFiles";
  return {
    saveElts: (t) => {
      let r = F(t).join(",");
      if (window.sessionStorage)
        try {
          window.sessionStorage.setItem(e, r);
        } catch (e) {
          l.default.error("Error storing checked state", e);
        }
    },
    loadIdsSet: () => {
      let t = "";
      if (window.sessionStorage)
        try {
          t = window.sessionStorage.getItem(e) || "";
        } catch (e) {
          l.default.error("Error loading checked state", e);
        }
      return new Set(t.split(","));
    }
  };
})();
function H() {
  let e = B(!0),
    t = e.length,
    r = e.filter((e) => e.checked).length,
    n = (0, k.$)("history"),
    o = k.$.findClass("checkbox-note", n)[0];
  const i = (0, c.tr)("Selected");
  (o.textContent = 0 === t ? "" : `(${r} ${i})`), n.classList[0 === t ? "add" : "remove"]("no-screenshots");
  let s = k.$.findClass("meta-checkbox", n)[0];
  (0 !== r && r !== t) || (s.checked = 0 !== r),
    k.$.findClass("checkbox-button", n).forEach((e) => {
      (e.disabled = 0 === r), (e.title = 0 === r ? (0, c.tr)("Select 1 or more screenshots to use this action.") : "");
    });
}
function G(e, t = 2) {
  if (0 == e) return "0";
  const r = Math.floor(Math.log(e) / Math.log(1024));
  return `${(e / Math.pow(1024, r)).toFixed(t)} ${G.sizes[r]}`;
}
G.sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
var K = s("2q4iO"),
  W = s("aHNfr"),
  X = ((K = s("2q4iO")), s("21kSJ")),
  Y = ((a = s("jmw9X")), (c = s("iMjBX")), s("a5i9T"));
const z = ({ cmd: e, ctrl: t, alt: r, shift: n, char: o }) => {
  const i = (0, Y.getIsMac)(),
    s = [];
  return e && s.push(i ? "⌘" : "⌃"), t && s.push("⌃"), r && s.push("⌥"), n && s.push("⇧"), s.push(o), s.join("");
};
var J = s("76B86"),
  V = s("lLQan");
var Q = ({ Actions: e, STATE: r }) => {
    const [n, o] = (0, K.useState)(""),
      [i, s] = (0, K.useState)(null);
    (0, K.useEffect)(() => {
      const e = ({ text: e }) => {
        o(e);
      };
      (0, V.onNotifyText)(e);
      const t = (e) => {
          (0, X.canCopyTextToClipboard)() &&
            !r.rejectedDl &&
            (e.preventDefault(), s({ pageX: e.pageX - window.scrollX, pageY: e.pageY - window.scrollY }));
        },
        n = document.getElementById("image");
      return (
        n.addEventListener("contextmenu", t, !1),
        () => {
          (0, V.offNotifyText)(e), n.removeEventListener("contextmenu", t, !1);
        }
      );
    });
    const l = i && r.record;
    let d = [];
    if (l) {
      r.record.fullPaths.forEach((e) => {
        d.push();
      });
    }
    return t(K).createElement(
      t(K).Fragment,
      null,
      n && t(K).createElement(V.default, { text: n }),
      l &&
        t(K).createElement(J.default, {
          pageX: i.pageX,
          pageY: i.pageY,
          onClose: () => s(null),
          onUpdatePosition: (e, t) => s({ pageX: e, pageY: t }),
          cfg: {
            rows: [
              {
                text: (0, c.tr)("Save Image As…"),
                shortcut: z({ cmd: !0, shift: !0, char: "S" }),
                onClick: (t) => e.download(r.record, a.GA_VIA_DIALOG, !0)
              },
              { text: (0, c.tr)("Save PDF As…"), onClick: (t) => e.downloadPDF(r.record, a.GA_VIA_DIALOG, !0) },
              ...r.record.fullPaths.map((t, n, o) => ({
                text: `${(0, c.tr)("Copy Image")}${1 === o.length ? "" : " " + (n + 1)}`,
                shortcut: 0 === n ? z({ cmd: !0, char: "C" }) : void 0,
                onClick: (t) => e.copyToClipboard(r.record, a.GA_VIA_DIALOG, n, r.images)
              })),
              { divider: !0 },
              { isTitle: !0, title: "Premium feature" },
              ...r.record.fullPaths.map((t, r, n) => ({
                text: `${(0, c.tr)("Edit Image")}${1 === n.length ? "" : " " + (r + 1)}`,
                shortcut: 0 === r ? z({ cmd: !0, char: "E" }) : void 0,
                onClick: (t) => e.goToEditor(a.GA_VIA_DIALOG, r)
              })),
              { divider: !0 },
              { text: (0, c.tr)("Copy original URL"), onClick: (t) => e.copyUrl(r.record, a.GA_VIA_DIALOG) },
              {
                text: (0, c.tr)("Open original URL"),
                disabled: !r.record || r.record.url.startsWith("chrome://") || r.record.url.startsWith("edge://"),
                title:
                  (r.record && r.record.url.startsWith("chrome://")) || (r.record && r.record.url.startsWith("edge://"))
                    ? "Cannot open chrome:// URLs"
                    : void 0,
                onClick: (t) => e.goToUrl(r.record, a.GA_VIA_DIALOG)
              }
            ]
          }
        })
    );
  },
  Z = ((V = s("lLQan")), s("ecsdh")),
  ee = s("aZB6T"),
  te = s("l6VXY"),
  re = s("dqmzj"),
  ne = s("gstfn"),
  oe = s("317M2"),
  ie = ((_ = s("1BBN9")), s("5dZ7N"));
const se = "ChromeTabsError",
  ae = (0, ie.genLastErrorFmt)(se),
  le = () => {
    return ((e = { active: !0, currentWindow: !0 }),
    new Promise((t, r) => {
      chrome.tabs.query(e, (e) => {
        const n = chrome.runtime.lastError;
        return n ? r(ae(n, "query")) : t(e);
      });
    })).then((e) => e[0]);
    var e;
  },
  ce = async (e, t) => {
    let r,
      n = t.length;
    const o = (i) => {
      if (i >= t.length) return t;
      let s = t[i],
        a = i === n - 1;
      return e.incognito && 0 === i
        ? ((l = { url: s, incognito: !1, focused: a }),
          new Promise((e, t) => {
            chrome.windows.create(l, (r) => {
              const n = chrome.runtime.lastError;
              return n ? t(ae(n, "windowsCreate")) : e(r);
            });
          })).then((e) => ((r = e.id), o(i + 1)))
        : ((e) =>
            new Promise((t, r) => {
              chrome.tabs.create(e, (e) => {
                const n = chrome.runtime.lastError;
                return n ? r(ae(n, "create")) : t(e);
              });
            }))({ url: s, active: a, windowId: r, openerTabId: e.id, index: (e.incognito ? 0 : e.index) + 1 + i }).then((e) => o(i + 1));
      var l;
    };
    return o(0);
  };
(X = s("21kSJ")), (a = s("jmw9X")), (x = s("8ABn4")), (k = s("h4XuO")), (c = s("iMjBX"));
var de = s("9X70u");
(a = s("jmw9X")), (k = s("h4XuO"));
var ue = {
    [de.ERROR_INCOGNITO_NETWORK_NAME]: {
      title: "Network error downloading file",
      body: "You might be experiencing a bug that was introduced to the Chrome browser in v68. In the meantime, you can try either of the following.\n\n1. right-click and “Save image as” or just click and drag the image to your desktop (if you are not using auto-download)\n\n2. disable “Allow in incognito” from the Chrome settings page for this extension (you can return to this capture from the history view within this extension):",
      buttons: () => {
        let e = `${a.CUR_BROWSER_INFO.browser_protocol}extensions?id=${chrome.runtime.id}`,
          t = document.createElement("a");
        return (
          (t.href = "#"),
          (t.innerText = e),
          Object.assign(t.style, { display: "block", fontWeight: "bold", margin: "1em 0" }),
          k.$.on(t, "click", (t) => {
            t.preventDefault(), le().then((t) => ce(t, [e]));
          }),
          [t]
        );
      }
    }
  },
  he = ((u = s("mG6c6")), (d = s("cEw93")), (a = s("jmw9X")), s("k0f7q")),
  fe = s("jzpMZ"),
  pe = ((a = s("jmw9X")), (d = s("cEw93")), (l = s("2xkva")), s("yZcwP")),
  me = s("fMrNL");
const { local: ge, sync: we } = me.default;
var ye = class {
  getField(e) {
    return this.fields.find((t) => t.name === e);
  }
  _key(e) {
    return this.namespace + "." + e;
  }
  _keys(e) {
    if (void 0 === e) throw new Error("Cannot pass `undefined` as `keys`!");
    return "string" == typeof e && (e = [e]), e.map((e) => this._key(e));
  }
  _stripKey(e) {
    return e.substring(this.namespace.length + 1);
  }
  set(e, t) {
    return this.setObj({ [e]: t });
  }
  setObj(e) {
    let r = {};
    return (
      Object.entries(e).forEach(([e, n]) => {
        const o = this._key(e),
          i = this.namespacedToField[o];
        t(pe).ok(i, `no field found for ${o} (${e})`), (r[o] = this._serializeField(i, n));
      }),
      this.storage.set(r).then(() => {
        Object.assign(this.state, e);
      })
    );
  }
  get(e) {
    return (
      (e = this._keys(e)),
      this.storage.get(e).then((e) => {
        let r = {};
        return (
          Object.entries(e).forEach(([e, n]) => {
            const o = this.namespacedToField[e];
            t(pe).ok(o, `no field found for ${e}`), (r[this._stripKey(e)] = this._deserializeField(o, n));
          }),
          Object.assign(this.state, r),
          r
        );
      })
    );
  }
  remove(e) {
    "string" == typeof e && (e = [e]);
    const t = this._keys(e);
    return this.storage.remove(t).then(() => {
      e.forEach((e) => {
        delete this.state[e];
      });
    });
  }
  clear() {
    let e = this.fields.map((e) => e.name);
    return this.remove(e);
  }
  load(e = !1) {
    return (this._loadProm && !0 !== e) || (this._loadProm = this._load()), this._loadProm.then(() => Object.assign({}, this.state));
  }
  _load() {
    let e = this.fields.map((e) => e.name);
    return this.get(e).then(
      (e) => (
        this.fields.forEach((t) => {
          if (void 0 === e[t.name]) void 0 !== t.default && (e[t.name] = "function" == typeof t.default ? t.default() : t.default);
          else if (t.process) {
            const { val: r } = t.process(e[t.name]);
            e[t.name] = r;
          }
        }),
        Object.assign(this.state, e),
        e
      )
    );
  }
  onUpdate(e) {
    this._listeners.push(e);
  }
  _startListening() {
    return (
      !this._listening &&
      ((this._listening = !0),
      chrome.storage.onChanged.addListener((e, t) => {
        if (t === this.areaName) {
          const t = [];
          Object.entries(e).forEach(([e, r]) => {
            const n = this.namespacedToField[e];
            n && (t.push(n.name), (this.state[n.name] = this._deserializeField(n, r.newValue)));
          }),
            t.length && this._listeners.forEach((e) => e(t));
        }
      }),
      !0)
    );
  }
  _serializeField(e, t) {
    return "json" === e.type ? JSON.stringify(t) : t;
  }
  _deserializeField(e, t) {
    return void 0 === t && void 0 !== e.default
      ? "function" == typeof e.default
        ? e.default()
        : e.default
      : "json" === e.type
      ? JSON.parse(t)
      : t;
  }
  constructor(e, t, r) {
    (this.namespace = e),
      (this.fields = t || []),
      (this.state = {}),
      (this.storage = !0 === r ? we : ge),
      (this.areaName = !0 === r ? "sync" : "local"),
      this.fields.forEach((e) => {
        e.choices && (e.choices = e.choices.map((e) => ("string" == typeof e ? { key: e, display: e } : e)));
      });
    let n = {};
    this.fields.forEach((e) => (n[this._key(e.name)] = e)),
      (this.namespacedToField = n),
      (this._listeners = []),
      this.fields.length && this._startListening();
  }
};
E = s("03QYZ");
const Ee = {
    keys: { DISMISSED: "dismissed", LIKE: "like", WENTOUT: "wentOut", TIMESTAMP: "timestamp" },
    category: "howisit",
    postInit: () => {
      Re("how-is-it-e7n-consider").textContent = (0, he.tr)(
        "Might you consider taking a minute to rate it in the $webstore$?",
        null,
        [a.CUR_BROWSER_INFO.store_short],
        { webstore: { content: "$1", example: "web store" } }
      );
      const e = Re("how-is-it-e7n-url-webstore");
      (e.href = a.CUR_BROWSER_INFO.store_reviews_url),
        (e.textContent = (0, he.tr)("Take me to the $webstore$!", null, [a.CUR_BROWSER_INFO.store_short], {
          webstore: { content: "$1", example: "web store" }
        }));
    }
  },
  ve = { keys: { DISMISSED: "editDismissed", LIKE: "editHitOk", WENTOUT: "editWentOut", TIMESTAMP: "editTimestamp" }, category: "tryedit" },
  be = {
    keys: { DISMISSED: "namechangeDismissed", LIKE: "namechangeHitOk", WENTOUT: "namechangeWentOut", TIMESTAMP: "namechangeTimestamp" },
    category: "namechange"
  },
  Se = [Ee, ve, be],
  Ce = [];
Se.forEach(({ keys: e }) => {
  Ce.push(
    { name: e.DISMISSED, type: "bool", default: !1 },
    { name: e.LIKE, type: "bool" },
    { name: e.WENTOUT, type: "bool" },
    { name: e.TIMESTAMP, type: "text" }
  );
});
const Te = new ye("howisit", Ce, !0);
class _e {
  show() {
    this.elt.classList.remove("hide"), window.setTimeout(() => this.elt.classList.add("show"), 0);
  }
  hide() {
    this.elt.classList.remove("show"), window.setTimeout(() => this.elt.classList.add("hide"), 500);
  }
  dismiss(e) {
    this.hide();
    let t = { [this.keys.DISMISSED]: !0 };
    void 0 !== e && (t[this.keys.WENTOUT] = e), this._updateHitStore(t);
  }
  _hideSteps() {
    this.steps.map((e) => (e.style.display = "none"));
  }
  _showStep(e, t, r) {
    const n = "hit-like" === e;
    if (((n || "hit-dislike" === e) && this._updateHitStore({ [this.keys.LIKE]: n }), t)) this.dismiss(r);
    else {
      this._hideSteps();
      this.elt.querySelector(`[data-step="${e}"]`).style.display = "block";
    }
  }
  addListeners() {
    ke(this.elt.getElementsByClassName("for-step")).forEach((e) => {
      e.addEventListener(
        "click",
        (e) => {
          const t = e.currentTarget;
          "#" === t.getAttribute("href") && e.preventDefault();
          const r = t.dataset.next,
            n = !!t.dataset.nextDismiss,
            o = "true" === t.dataset.nextDismiss;
          this._showStep(r, n, o), d.default.event(this.category, "hit", r);
        },
        !1
      );
    }),
      ["close", "dismiss"].forEach((e) => {
        ke(this.elt.getElementsByClassName(e)).forEach((e) => {
          e.addEventListener(
            "click",
            (e) => {
              const t = e.currentTarget;
              "#" === t.getAttribute("href") && e.preventDefault();
              const r = t.dataset.wentOut,
                n = "true" === r || ("false" !== r && void 0);
              this.dismiss(n);
              const o = !0 === n ? "accept" : !1 === n ? "reject" : "close";
              d.default.event(this.category, "complete", o);
            },
            !1
          );
        });
      }),
      Te.onUpdate((e) => {
        Te.state[this.keys.DISMISSED] && this.hide();
      }),
      Re("hit-report-link").setAttribute("href", (0, E.reportLink)(window.location.href, "AreYouEnjoyingReport"));
  }
  _updateHitStore(e) {
    const t = xe();
    (e[this.keys.TIMESTAMP] = t), Te.setObj(e).catch((e) => l.default.error(e));
  }
  constructor(e, r) {
    (this.elt = e),
      t(fe)(e, `bad element sent to Controls: ${e}`),
      t(fe)(
        Se.find((e) => e === r),
        `Config not found in whitelist!: ${JSON.stringify(r)}`
      ),
      (this.elt = e),
      (this.keys = r.keys),
      (this.category = r.category),
      (this.steps = ke(e.getElementsByClassName("hit-step"))),
      r.postInit && r.postInit(),
      this.addListeners(),
      this.show(),
      d.default.event(this.category, "show");
  }
}
const xe = () => new Date().getTime().toString();
window._reset = () => Te.clear();
const ke = (e) => Array.from(e),
  Re = (e) => document.getElementById(e);
(x = s("8ABn4")), (k = s("h4XuO")), (l = s("2xkva")), (K = s("2q4iO")), (W = s("aHNfr"));
var Ie = s("lSPyV"),
  Ne = s("cAnjR"),
  Ae = ((K = s("2q4iO")), (d = s("cEw93")), (l = s("2xkva")), (Z = s("ecsdh")), s("6EXXg")),
  Le = s("gNZIH"),
  $e = s("94S9N");
class Oe extends K.Component {
  componentDidMount() {
    d.default.event(this.props.gaCfg.category, "show");
  }
  render() {
    const { closing: e } = this.state,
      r = { transition: "opacity 500ms ease-in-out", opacity: e ? 0 : 1 };
    return t(K).createElement(
      t(K).Fragment,
      null,
      t(K).createElement(
        Le.default,
        { style: r, className: "welcomemodal big-modal", dimBg: !0, width: 630 },
        t(K).createElement("h2", { className: "br" }, "Same team, new name."),
        t(K).createElement($e.AnnounceImg, null),
        t(K).createElement(
          "p",
          { className: "br15" },
          "Full Page Screen Capture is now ",
          t(K).createElement("strong", null, "GoFullPage"),
          "! Read more",
          " ",
          t(K).createElement("a", { href: Z.BLOG_NAME_CHANGE_URL, target: "_blank", rel: "noopener noreferrer" }, "on the blog"),
          "."
        ),
        t(K).createElement(
          "div",
          null,
          t(K).createElement(
            "a",
            {
              className: "btn br15",
              href: "#",
              onClick: (e) => {
                this.handleLogClick("hit-close", !1, !0, !0), this.handleClose(e);
              }
            },
            "OK, got it!"
          )
        ),
        t(K).createElement(
          "a",
          {
            className: "close close-topright",
            href: "#",
            onClick: (e) => {
              this.handleLogClick("hit-close", !1, !0, !0), this.handleClose(e);
            }
          },
          t(K).createElement(Ae.default, { fill: "#CCC" })
        )
      )
    );
  }
  constructor(e) {
    super(e),
      (0, Ie.default)(this, "handleClose", (e) => {
        e && e.preventDefault(),
          this.state.closing ||
            (this.setState({ closing: !0 }),
            window.setTimeout(() => {
              this.props.onClose();
            }, 500));
      }),
      (0, Ie.default)(this, "handleLogClick", (e, t, r = !1, n = !1) => {
        const o = {};
        (o[this.props.gaCfg.keys.LIKE] = !r),
          (o[this.props.gaCfg.keys.DISMISSED] = n),
          (o[this.props.gaCfg.keys.TIMESTAMP] = De()),
          this.props.hitStore.setObj(o).catch((e) => l.default.error(e)),
          d.default[t ? "delayedEvent" : "event"](this.props.gaCfg.category, "hit", e);
      }),
      (this.state = { closing: !1 });
  }
}
(0, Ie.default)(Oe, "propTypes", {
  onClose: t(Ne).func.isRequired,
  hitStore: t(Ne).object.isRequired,
  gaCfg: t(Ne).shape({
    keys: t(Ne).shape({
      DISMISSED: t(Ne).string.isRequired,
      LIKE: t(Ne).string.isRequired,
      WENTOUT: t(Ne).string.isRequired,
      TIMESTAMP: t(Ne).string.isRequired
    }),
    category: t(Ne).string.isRequired
  }).isRequired
});
const De = () => new Date().getTime().toString();
k = s("h4XuO");
const Pe = (e, r) => {
  const n = document.getElementById("modal-wrapper");
  k.$.empty(n);
  const o = document.createElement("div");
  n.appendChild(o), (o.style.opacity = "0"), (o.style.display = "");
  (0, W.render)(
    t(K).createElement(Oe, {
      onClose: () => {
        o.style.display = "none";
      },
      hitStore: e,
      gaCfg: r
    }),
    o
  ),
    window.setTimeout(() => {
      (o.style.transition = "opacity 500ms ease-in-out"), (o.style.opacity = "1"), (o.style.display = "");
    }, 1500);
};
(h = s("alm1K")),
  (f = s("8aJKE")),
  (K = s("2q4iO")),
  (W = s("aHNfr")),
  (Ie = s("lSPyV")),
  (Ne = s("cAnjR")),
  (K = s("2q4iO")),
  (a = s("jmw9X")),
  (d = s("cEw93")),
  (l = s("2xkva")),
  (Ae = s("6EXXg")),
  (Le = s("gNZIH")),
  ($e = s("94S9N"));
class je extends K.Component {
  componentDidMount() {
    d.default.event(this.props.gaCfg.category, "show");
  }
  render() {
    const { editorUrl: e } = this.props,
      { closing: r } = this.state,
      n = { transition: "opacity 500ms ease-in-out", opacity: r ? 0 : 1 };
    return t(K).createElement(
      t(K).Fragment,
      null,
      t(K).createElement(
        Le.default,
        { style: n, className: "welcomemodal big-modal", dimBg: !0, width: 630 },
        t(K).createElement("h2", { className: "br" }, "Try annotating, cropping, and doing more with your screenshots!"),
        t(K).createElement($e.default, null),
        t(K).createElement("p", { className: "br15" }, "Test drive the premium editor and turn your screenshots into masterpieces."),
        t(K).createElement(
          "div",
          null,
          t(K).createElement(
            "a",
            { className: "btn br15", href: e, onMouseDown: () => this.handleLogClick("hit-like", !0) },
            "Give it a spin"
          ),
          t(K).createElement(
            "p",
            { className: "dim" },
            t(K).createElement(
              "a",
              {
                href: a.PREMIUM_URL,
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: () => {
                  this.handleLogClick("hit-learn", !1);
                }
              },
              "Learn more about premium features"
            )
          )
        ),
        t(K).createElement(
          "a",
          {
            className: "close close-topright",
            href: "#",
            onClick: (e) => {
              this.handleLogClick("hit-close", !1, !0, !0), this.handleClose(e);
            }
          },
          t(K).createElement(Ae.default, { fill: "#CCC" })
        )
      )
    );
  }
  constructor(e) {
    super(e),
      (0, Ie.default)(this, "handleClose", (e) => {
        e && e.preventDefault(),
          this.state.closing ||
            (this.setState({ closing: !0 }),
            window.setTimeout(() => {
              this.props.onClose();
            }, 500));
      }),
      (0, Ie.default)(this, "handleLogClick", (e, t, r = !1, n = !1) => {
        const o = {};
        (o[this.props.gaCfg.keys.LIKE] = !r),
          (o[this.props.gaCfg.keys.DISMISSED] = n),
          (o[this.props.gaCfg.keys.TIMESTAMP] = Me()),
          this.props.hitStore.setObj(o).catch((e) => l.default.error(e)),
          d.default[t ? "delayedEvent" : "event"](this.props.gaCfg.category, "hit", e);
      }),
      (this.state = { closing: !1 });
  }
}
(0, Ie.default)(je, "propTypes", {
  onClose: t(Ne).func.isRequired,
  editorUrl: t(Ne).string.isRequired,
  hitStore: t(Ne).object.isRequired,
  gaCfg: t(Ne).shape({
    keys: t(Ne).shape({
      DISMISSED: t(Ne).string.isRequired,
      LIKE: t(Ne).string.isRequired,
      WENTOUT: t(Ne).string.isRequired,
      TIMESTAMP: t(Ne).string.isRequired
    }),
    category: t(Ne).string.isRequired
  }).isRequired
});
const Me = () => new Date().getTime().toString();
k = s("h4XuO");
const Ue = (e, r, n) => {
  const o = document.getElementById("modal-wrapper");
  k.$.empty(o);
  const i = document.createElement("div");
  o.appendChild(i), (i.style.opacity = "0"), (i.style.display = "");
  (0, W.render)(
    t(K).createElement(je, {
      onClose: () => {
        i.style.display = "none";
      },
      editorUrl: e,
      hitStore: r,
      gaCfg: n
    }),
    i
  ),
    window.setTimeout(() => {
      (i.style.transition = "opacity 500ms ease-in-out"), (i.style.opacity = "1"), (i.style.display = "");
    }, 1500);
};
p = s("3ESIc");
let Be = !1;
const Fe = (e, t) => t[e.keys.DISMISSED] || void 0 !== t[e.keys.LIKE],
  qe = async (e) => {
    const t = await Te.load(),
      r = await f.default.load(),
      n = Fe(Ee, t),
      o = Fe(ve, t),
      i = Fe(be, t);
    await (0, h.sleep)(250);
    const s = await x.Capture.count(),
      l = r.firstKnownVersion;
    l && (0, p.compareVersions)(l, a.NAMECHANGE_VERSION) < 0 && !i
      ? Pe(Te, be)
      : s >= 8 && !o
      ? Ue(e, Te, ve)
      : s >= 5 && !n && new _e((0, k.$)("how-is-it"), Ee);
  };
var He = s("ebCbw"),
  Ge = ((l = s("2xkva")), (R = s("2kfQE")), s("k1nP3")),
  Ke = ((h = s("alm1K")), (w = s("aiU1O")), s("7i7LO")),
  We = s("epmSf"),
  Xe = s("83PZf");
E = s("03QYZ");
const Ye = "rejected_dl",
  ze = (0, c.tr)("File no longer exists—perhaps it has been cleared from your browser") + " 😐",
  Je = (0, c.tr)("Your browser does not support the clipboard API, please update to the most recent version."),
  Ve = { record: null, images: null, loaded: !1, rejectedDl: !1 },
  Qe = "nav_button",
  Ze = () => {
    (0, W.render)((0, K.createElement)(Q, { Actions: it, STATE: Ve }), document.getElementById("root"));
  },
  et = () => {
    u.default.onUpdated((e) => {
      if ("MIGRATION" === e.source) {
        let t = (0, k.$)("error-status");
        if ((t && (t.innerText = ""), e.isDone)) window.location = window.location.href;
        else if (t && e.title) {
          let r = `\n${e.title}`;
          void 0 !== e.step && void 0 !== e.numSteps && (r += ` (${e.step} of ${e.numSteps}).`), (t.innerText = r);
        }
      }
    });
    const e = (e) => window.setTimeout(() => e.blur(), 10);
    k.$.on((0, k.$)("btn-trash"), "click", function (t) {
      t.preventDefault(), Ve.record && it.remove(Ve.record, a.GA_VIA_NAV), e(this);
    }),
      k.$.on((0, k.$)("btn-download"), "click", function (t) {
        if (Ve.rejectedDl) return !0;
        Ve.record && (t.preventDefault(), it.download(Ve.record, a.GA_VIA_NAV)), e(this);
      }),
      k.$.on((0, k.$)("btn-downloadpdf"), "click", function (t) {
        Ve.record && (t.preventDefault(), it.downloadPDF(Ve.record, a.GA_VIA_NAV)), e(this);
      }),
      k.$.on(document, "keydown", function (e) {
        const t = ((e) => ((0, Y.getIsMac)() ? e.metaKey : e.ctrlKey))(e);
        if (t)
          switch (e.keyCode) {
            case 83:
              if (Ve.record) {
                const t = e.altKey,
                  r = e.shiftKey;
                let n = (0, k.$)("btn-download");
                "none" !== window.getComputedStyle(n).display &&
                  (e.preventDefault(),
                  t ? it.copyToClipboard(Ve.record, a.GA_VIA_KEYPRESS, 0, Ve.images) : it.download(Ve.record, a.GA_VIA_KEYPRESS, r));
              }
              return;
            case 67:
              return void (
                e.shiftKey ||
                e.altKey ||
                (e.preventDefault(), Ve.record && it.copyToClipboard(Ve.record, a.GA_VIA_KEYPRESS, 0, Ve.images))
              );
            case 69:
              return e.preventDefault(), void (Ve.record && it.goToEditor(a.GA_VIA_KEYPRESS));
            case 189:
            case 187:
            case 48:
              return (
                e.preventDefault(), void (189 === e.keyCode ? (0, te.default)(window, "ZOOM_OUT") : (0, te.default)(window, "ZOOM_IN"))
              );
          }
      }),
      Promise.all([(0, _.containsDownloads)(), We.default.load()]).then(([e, t]) => {
        (Ve.rejectedDl = !e && t[Ye]), e && t[Ye] && We.default.set(Ye, !1).catch((e) => l.default.error(e));
      }),
      (function () {
        const e = I();
        N((0, k.$)("btn-settings"), e.options), N((0, k.$)("btn-history"), e.history);
      })();
  },
  tt = (e) => {
    w.update({ name: "SlowLoadingTimeout", message: `After ${e}ms.` }, Ve.record).then(() => {
      let e = (0, c.tr)(
        "This is taking longer to load than expected. Hang tight! If nothing updates after a while, please report this via the reporting flag button above."
      );
      D((0, c.tr)("Still loading"), e, !1, !0);
    });
  },
  rt = (e, t, r) => {
    let n,
      o = !1;
    return (
      (r = r || 1e4),
      t &&
        (n = window.setTimeout(() => {
          (o = !0), t(r);
        }, r)),
      Promise.all(e.map((e) => (0, h.loadImage)(e)))
        .then((e) => (window.clearTimeout(n), (Ve.loaded = !0), { images: e, didTimeout: o }))
        .catch((e) => {
          throw (window.clearTimeout(n), e);
        })
    );
  },
  nt = (e) => {
    Ve.images = e;
    let t = !1,
      r = !1,
      n = null,
      o = null,
      i = null,
      s = null;
    const a = (0, k.$)("image");
    k.$.empty(a), a.classList.toggle("one-child", 1 === e.length);
    const l = window;
    function c() {
      let t = e[0].width,
        r = e[0].height,
        n = (function (e, t, r, n) {
          let o = r / e,
            i = n / t,
            s = Math.min(e * o, e * i, e),
            a = Math.min(t * o, t * i, t);
          return { width: s, height: a, scaleRatio: s / e, left: Math.floor((r - s) / 2, 10), top: Math.floor((n - a) / 2, 10) };
        })(t, r, window.innerWidth - 40, window.innerHeight - document.getElementsByTagName("header")[0].offsetHeight - 40);
      const o = Ve.record.scaleMultiplier;
      h(n.scaleRatio * o),
        e.forEach(({ img: e, width: t, height: r }, o) => {
          (e.style.height = r * n.scaleRatio + "px"),
            (e.style.width = t * n.scaleRatio + "px"),
            0 === o && e.parentNode && (e.parentNode.style.padding = n.top + 20 + "px 0");
        }),
        u(!1);
    }
    function d() {
      h(1),
        e.forEach(({ img: e, width: t, height: r }, n) => {
          let o = st(t),
            i = st(r);
          (e.style.width = o + "px"), (e.style.height = i + "px"), 0 === n && (e.parentNode.style.padding = "");
        }),
        u(!0);
    }
    function u(e) {
      let t = null === e ? "" : e ? "can-zoom-out" : "can-zoom-in";
      ["can-zoom-in", "can-zoom-out"].forEach((e) => document.documentElement.classList.toggle(e, e === t));
    }
    function h(e) {
      let t = (0, k.$)("img-ctrls"),
        r = ((n = e), (n *= 100) >= 1 ? Math.floor(n, 10).toString() : n >= 0.005 ? n.toString().substring(0, 4) : "0");
      var n;
      k.$.findClass("zoom-amount", t).forEach((e) => (e.innerText = `${r}%`)),
        k.$.findClass("zoom-btn", t).forEach((t) => {
          t.classList.toggle("disabled", 1 === e ? t.classList.contains("zoom-in") : t.classList.contains("zoom-out"));
        });
    }
    function f(r) {
      let n = !0 === r,
        o = "object" == typeof r,
        i = o ? r.target : e[0].img,
        s = e.find((e) => e.img === i) || e[0],
        a = s.width,
        h = s.height,
        f = document.getElementsByTagName("header")[0].offsetHeight,
        p = a > window.innerWidth || h + 40 > window.innerHeight - f,
        m = i.width,
        g = i.height,
        w = o ? k.$.offsets(i) : null,
        y = document.documentElement.classList.contains("can-zoom-out");
      if ((!0 === n && (y = !y), p))
        if (y) {
          if (t) return;
          c();
        } else d();
      else e && e.length && ((e[0].img.parentNode.style.padding = "20px 0 0"), u(null));
      if (o && !y) {
        const e = k.$.offsets(i),
          t = r.clientX - w.left,
          n = r.clientY - w.top,
          o = (t / m) * st(a),
          s = (n / g) * st(h),
          c = k.$.offsets(l),
          d = l.innerWidth || l.offsetWidth,
          u = l.innerHeight || l.offsetHeight,
          f = e.left - c.left + o - d / 2,
          p = e.top - c.top + s - u / 2;
        (0, E.scrollEltTo)(l, f, p);
      }
    }
    e.forEach((e, t) => {
      let r = e.img;
      (r.src = e.src), (r.title = "Captured screenshot"), a.appendChild(r);
    }),
      k.$.on(window, "ZOOM_IN", d),
      k.$.on(window, "ZOOM_OUT", c),
      f(!0),
      e.forEach(({ img: e }) => k.$.on(e, "click", f)),
      k.$.on(window, "resize", () => f(!0));
    const p = (e) => {
        (t = e), document.documentElement.classList.toggle("spacebar-down", e);
      },
      m = {
        keydown: (e) => {
          if (32 === e.keyCode && "image" === e.target.id) return e.preventDefault(), void p(!0);
        },
        keyup: (e) => {
          32 !== e.keyCode ||
            (r
              ? k.$.once(document, "click", (e) => {
                  p(!1);
                })
              : p(!1));
        },
        mousedown: (e) => {
          t && ((r = !0), (n = e.clientX), (o = e.clientY), (i = l.scrollX || l.scrollLeft || 0), (s = l.scrollY || l.scrollTop || 0));
        },
        mouseup: (e) => {
          r = !1;
        },
        mousemove: (e) => {
          if (r && t) {
            const t = e.clientX,
              r = e.clientY,
              a = n - t,
              c = o - r;
            (n = t), (o = r), (i += a), (s += c), (0, E.scrollEltTo)(l, i, s);
          }
        }
      };
    Object.entries(m).forEach(([e, t]) => {
      k.$.on(document, e, t);
    });
    const g = (0, k.$)("img-ctrls"),
      w = k.$.findClass("zoom-btn", g);
    w.push(k.$.findClass("zoom-amount", g)[0]),
      w.forEach((e) => {
        k.$.on(e, "click", function (e) {
          e.preventDefault(), this.classList.contains("disabled") || f(!1);
        });
      });
    const y = e[0].src,
      v = (0, k.$)("btn-download");
    (v.href = y),
      (v.download = y.split("/").pop()),
      (function (e = "img-btn") {
        if (!Ve.loaded) return void ot();
        k.$.findClass(e).forEach(function (e) {
          e.classList.add("show");
        });
      })();
  };
function ot() {
  k.$.findClass("img-btn").forEach(function (e) {
    e.classList.remove("show");
  });
}
const it = (function () {
  const e = {
    downloadPDF: (t, r, n = !1) => {
      d.default.event(Qe, "download_pdf", r),
        e
          ._if(t)
          .then(() => (0, _.requestDownloads)())
          .then(async (e) => {
            if (e) {
              let e = (0, He.getImageFormat)("jpg");
              const [r, o] = await Promise.all([Ke.default.load(), Xe.default.loginStateProm()]),
                i = [];
              let s = null,
                a = 0;
              if (r.pdf_url_and_date) {
                let e = Ve.record.scaleMultiplier;
                const t = Ve.images[0].width / e,
                  n = 0,
                  o = { x: 0, y: 0, width: t, height: n },
                  l = (0, Z.formatDate)(Ve.record.dateTime, r.pdf_date_fmt),
                  c = (0, ee.createBrowserTemplate)(
                    ee.TEMPLATE_DATA_BAR.key,
                    Ve.record.url,
                    t,
                    n,
                    e,
                    Ve.record.title,
                    Ve.record.dateTime,
                    l
                  ),
                  d = (0, re.computeBaseOffsets)(t, n, e, o, c, 100, [], null, 0);
                let u = document.createElement("canvas"),
                  h = u.getContext("2d"),
                  f = e / (h.webkitBackingStorePixelRatio || h.backingStorePixelRatio || 1);
                (u.width = d.outerWidth * f),
                  (u.height = d.outerHeight * f),
                  (a = d.outerHeight),
                  h.scale(f, f),
                  await c.draw(h, Ve.record.url),
                  c.textCoords && i.push({ ...c.textCoords, url: Ve.record.url }),
                  (s = u);
              }
              if (r.pdf_insert_links && o && o.store.show_experimental && Ve.record.metadata.links) {
                const e = Ve.record.metadata.links;
                Array.isArray(e) &&
                  (0, oe.flattenBounds)(e).forEach((e) => {
                    i.push(a ? { ...e, y: e.y + a } : e);
                  });
              }
              const l = await (0, Ge.toPDF)(
                  Ve.images,
                  e,
                  Ve.record.scaleMultiplier || window.devicePixelRatio || 1,
                  r.pdf_format,
                  r.pdf_smart_page && o && "sub-ok" === o.subState,
                  i,
                  V.triggerNotifyText.creatingPDF,
                  s
                ),
                c = (0, ne.blobToUrl)(l),
                { hasPerms: d, results: u, failCount: h } = await (0, E.fullServiceDownload)([{ url: c, filename: t.pdfFilename }], !1, n);
              if (((0, ne.revokeObjectUrl)(c), !d)) {
                let e = new Error("No downloads perm despite just getting it!");
                throw ((e.name = "UnreachableError"), e);
              }
              if (h) throw u.find((e) => !1 === e.success).error;
              V.triggerNotifyText.createdPDF();
            } else {
              try {
                await We.default.set(Ye, !0);
              } catch (e) {
                l.default.error(e);
              }
              Ve.rejectedDl = !0;
              let e = (0, c.tr)("Download permission is required"),
                t = (0, c.tr)("The download permission is required to enable the download as PDF feature.");
              D(e, t, !0, !0);
            }
          })
          .catch((e) => {
            V.triggerNotifyText.clear(),
              w.update(e, Ve.record).then(() => {
                if ((l.default.error("Download error", e), ue[e.name])) at(e);
                else {
                  let e = (0, c.tr)("Error downloading file"),
                    t = R.ERR_MSG_IF_PERSISTS;
                  D(e, t, !0, !0);
                }
              });
          });
    },
    download: (t, r, n) => {
      d.default.event(Qe, n ? "download_img_as" : "download_img", r || void 0),
        e
          ._if(t)
          .then(() => (0, _.requestDownloads)())
          .then((e) => {
            if (e) {
              let e = t.fullPaths;
              return (0, E.fullServiceDownload)(e, !1, n).then(({ hasPerms: e, results: t, failCount: r }) => {
                if (!e) {
                  let e = new Error("No downloads perm despite just getting it!");
                  throw ((e.name = "UnreachableError"), e);
                }
                if (r) throw t.find((e) => !1 === e.success).error;
              });
            }
            {
              We.default.set(Ye, !0).catch((e) => l.default.error(e)), (Ve.rejectedDl = !0);
              let e = (0, c.tr)("Download permission not granted"),
                t = (0, c.tr)(
                  "This permission allows greater control over how downloads work within the extension. Your preference has been saved, and this download button will now fall back to default browser on-click downloads. However, you will still be prompted for it in order to use any of the advanced features on the Files or Edit pages, since they need this permissions to work."
                );
              return void D(e, t, !1, !0);
            }
          })
          .catch((e) => {
            w.update(e, Ve.record).then(() => {
              if ((l.default.error("Download error", e), ue[e.name])) at(e);
              else {
                let e = (0, c.tr)("Error downloading file"),
                  t = R.ERR_MSG_IF_PERSISTS;
                D(e, t, !0, !0);
              }
            });
          });
    },
    goToUrl: (e, t) => {
      d.default.event(Qe, "goto_url", t || void 0);
      const { url: r } = e;
      window.open(r, "_blank", "noopener");
    },
    copyUrl: (e, t) => {
      d.default.event(Qe, "copy_url", t || void 0);
      const { url: r } = e;
      if (!(0, X.canCopyTextToClipboard)()) {
        const e = Je;
        return (0, V.triggerNotifyText)(e, 4e3), void l.default.error("Copy not supported", e);
      }
      (0, X.copyTextToClipboard)(r)
        .then(() => {
          (0, V.triggerNotifyText)(`✅ ${(0, c.tr)("URL copied to clipboard")}`, 3e3);
        })
        .catch((e) => {
          l.default.error("Error coping URL"),
            l.default.error(e),
            V.triggerNotifyText.clear(),
            w.update(e, Ve.record).then(() => {
              let e = R.ERR_MSG_IF_PERSISTS;
              D((0, c.tr)("Error copying URL"), e, !0, !0);
            });
        });
    },
    copyToClipboard: (e, t, r = 0, n = null) => {
      d.default.event(Qe, "copy_img", t);
      const o = e.fullPaths[r],
        i = (n && n[r]) || void 0;
      if (!(0, X.canCopyBlobToClipboard)()) {
        const e = Je;
        return (0, V.triggerNotifyText)(e, 4e3), void l.default.error("Copy not supported", e);
      }
      V.triggerNotifyText.copyingImage(),
        Promise.resolve()
          .then(async () => {
            const e = (await Ke.default.load()).fit_copies ? X.GOOGLE_DOCS_MAX_PIXELS : void 0;
            let t;
            (t = i ? await (0, X.copyImgEltToClipboard)(i.img, i.width, i.height, e) : await (0, X.copyImgToClipboard)(o, e)),
              (0, l.default)("Copied image" + (t ? " (RESIZED)" : "")),
              V.triggerNotifyText.copiedImage(t);
          })
          .catch((e) => {
            l.default.error("Error coping image"),
              l.default.error(e),
              V.triggerNotifyText.clear(),
              w.update(e, Ve.record).then(() => {
                D(R.ERR_TITLE_COPY, R.ERR_MSG_COPY + "\n\n" + R.ERR_MSG_IF_PERSISTS, !1, !0);
              });
          });
    },
    openInTabs: (t, r) => {
      d.default.event(Qe, "expand", r || void 0),
        e
          ._if(t)
          .then(() => le())
          .then((e) => ce(e, t.fullPaths))
          .catch((e) => {
            (0, l.default)("Error opening file in tabs", e),
              w.update(e, Ve.record).then(() => {
                let e = (0, c.tr)("Something went wrong opening this screenshot into a new.") + " " + R.ERR_MSG_IF_PERSISTS;
                D((0, c.tr)("Error opening screenshot"), e, !0, !0);
              });
          });
    },
    remove: (t, r) => {
      d.default.event(Qe, "remove", r || void 0);
      let n = (0, c.tr)("Are you sure you want to delete this screenshot?\n(This action cannot be undone.)");
      confirm(n) &&
        e
          ._if(t)
          .then(() => t.remove())
          .then(() =>
            (function () {
              ot();
              let e = (0, k.$)("image");
              k.$.empty(e), D((0, c.tr)("Image deleted"), (0, c.tr)("This screenshot been successfully removed."));
            })()
          )
          .catch((e) => {
            (0, l.default)("Error removing file", e),
              w.update(e, Ve.record).then(() => {
                let e = (0, c.tr)("Something went wrong deleting your screenshot.") + " " + R.ERR_MSG_IF_PERSISTS;
                D((0, c.tr)("Error removing screenshot"), e, !0, !0);
              });
          });
    },
    goToEditor: (e, t = 0) => {
      d.default.event(Qe, "goto_editor", e || void 0), Ve.record && (window.location = Ve.record.getEditorURL(t));
    },
    _if: (e) =>
      Promise.resolve().then(() => {
        if (!e) {
          let e = new Error("No record on STATE obj");
          throw ((e.name = "PageStateError"), e);
        }
        return e;
      })
  };
  return e;
})();
function st(e) {
  const t = Ve.record ? Ve.record.scaleMultiplier : window.devicePixelRatio || 1;
  return 1 !== t ? e / t : e;
}
function at(e) {
  let t = ue[e.name];
  if ((D(t.title, t.body, !1, !0, !0), t.buttons)) {
    let e = document.createElement("div");
    (e.className = D.extrasClassName),
      t.buttons().forEach((t) => {
        e.appendChild(t);
      }),
      (0, k.$)("error-body").appendChild(e);
  }
}
d.default.pageview(),
  ((e = !1) => {
    if (null === y) {
      const e = document.createElement("a");
      (e.style.cssText = "position: sticky;"), (y = -1 !== e.style.position.indexOf("sticky"));
    }
    y && e && document.documentElement.classList.add("csspositionsticky");
  })(!0),
  Array.prototype.slice.call(document.querySelectorAll("a[data-href]")).forEach((e) => {
    e.href = e.dataset.href;
  }),
  (0, c.updateHtml)(),
  w.update(),
  (() => {
    if (
      ((0, l.default)(
        `%c! REGISTER UNPACKED EXTENSION: ${a.REGISTER_SELF_URL}\n                                                    \n  NOTE: this may trigger extra load user calls that \n  wouldn't normally get called on beta or prod.     \n                                                    `,
        "background:#eee"
      ),
      a.REGISTER_SELF_URL)
    ) {
      const e = document.createElement("iframe");
      Object.assign(e.style, { height: 0, width: 0, border: 0, position: "absolute", top: "-999px", left: "-999px" });
      const t = `${a.REGISTER_SELF_URL}?id=${encodeURIComponent(chrome.runtime.id)}`;
      (e.src = t), document.body.appendChild(e);
    }
  })();
let lt = (0, E.getQueryString)();
const ct = (e) => {
  l.default.error("Migration error", e),
    w.update(e).then(() => {
      D("Data Error", "The page encountered an error. Please report this via the the flag reporting button above.", !0, !1);
    });
};
var dt, ut;
lt.src
  ? ((ut = lt.src),
    x.Capture.findSrc(ut)
      .then((e) => {
        window.location = e ? e.displayURL : "?";
      })
      .catch((e) => {
        l.default.error("lookup Image src error", e),
          w.update(e).then(() => {
            D((0, c.tr)("Unable to find image"), (0, c.tr)("The specified image could not be found.") + " " + R.ERR_MSG_IF_PERSISTS);
          });
      }))
  : lt.id
  ? ((dt = lt.id),
    document.documentElement.classList.add("page-image"),
    et(),
    Ze(),
    x.Capture.lookup(dt)
      .then((e) => {
        if (!e) return l.default.error("lookup, no record found", dt), D((0, c.tr)("Unable to load image"), ze);
        (Ve.record = e),
          w.update(void 0, Ve.record),
          e.format && ((0, k.$)("btn-download").getElementsByClassName("image-type")[0].innerText = `(${e.format.toUpperCase()})`),
          k.$.findClass("editor-link").forEach((t) => {
            t.href = e.getEditorURL();
          });
        const t = (0, k.$)("btn-editor-wrap");
        if (t && e.images && e.images.length > 0) {
          const r = "hov-dropdown";
          let n = k.$.findClass("hov-dropdown", t)[0];
          if (
            (n && n.parentNode.removeChild(n),
            k.$.findClass("tooltip", t).forEach((e) => {
              e.classList.remove("hide");
            }),
            e.images.length > 1)
          ) {
            k.$.findClass("tooltip", t).forEach((e) => {
              e.classList.add("hide");
            }),
              (n = document.createElement("div")),
              (n.className = r);
            const o = document.createElement("ul");
            n.appendChild(o);
            const i = document.createElement("li"),
              s = document.createElement("span");
            (s.className = "hov-dropdown--title"),
              (s.textContent = `${(0, c.tr)("Premium feature")}:`),
              i.appendChild(s),
              o.appendChild(i),
              e.images.forEach((r, n) => {
                const i = document.createElement("li"),
                  s = document.createElement("a");
                if (
                  ((s.href = e.getEditorURL(n)),
                  s.addEventListener(
                    "mousedown",
                    () => {
                      d.default.event(Qe, "goto_editor", "multi-dropdown");
                    },
                    !1
                  ),
                  (s.textContent = `${(0, c.tr)("Edit Image")} ${n + 1}`),
                  0 === n)
                ) {
                  const e = document.createElement("span");
                  (e.className = "hov-dropdown--shortcut"), (e.textContent = z({ cmd: !0, char: "E" })), s.prepend(e);
                }
                i.appendChild(s), o.appendChild(i);
                let a = null;
                t.addEventListener(
                  "mouseenter",
                  () => {
                    window.clearTimeout(a), t.classList.add("hover");
                  },
                  !1
                ),
                  t.addEventListener(
                    "mouseleave",
                    () => {
                      a = window.setTimeout(() => {
                        t.classList.remove("hover");
                      }, 500);
                    },
                    !1
                  );
              }),
              t.appendChild(n);
          }
        }
        var r;
        return (
          (r = e.getEditorURL()),
          Be ||
            ((Be = !0),
            qe(r).catch((e) => {
              l.default.error("CAUGHT ERROR in hit.load chain"), l.default.error(e);
            })),
          j()
            .then(() => rt(e.fullPaths, tt))
            .then(({ images: e, didTimeout: t }) => (t && P(), nt(e)))
            .then(() => M())
            .catch((e) => {
              M().catch((e) => l.default.error(e)),
                l.default.error("loadImages error", e),
                w.update(e, Ve.record).then(() => {
                  D((0, c.tr)("Unable to load image"), ze);
                });
            })
        );
      })
      .catch((e) => {
        l.default.error("Failed lookup", dt, e),
          w.update(e, Ve.record).then(() => {
            D((0, c.tr)("Error loading image"), R.ERR_MSG_IF_PERSISTS, !0, !1);
          });
      }))
      .then(m)
      .catch(ct)
  : (document.documentElement.classList.add("page-history"),
    u.default.onUpdated((e) => {
      "MIGRATION" === e.source && e.isDone && U();
    }),
    (function () {
      const e = I(),
        t = e.editor || e.capture;
      t &&
        k.$.findClass("back-button").forEach((e) => {
          N(e, t, !0);
        }),
        N((0, k.$)("btn-settings"), e.options),
        N((0, k.$)("btn-history"), e.history);
    })(),
    j().then(U).then(M))
      .then(m)
      .catch(ct);
//# sourceMappingURL=capture.01f8f627.js.map
