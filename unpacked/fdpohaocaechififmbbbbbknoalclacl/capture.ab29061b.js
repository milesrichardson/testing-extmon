(() => {
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
    s.register("fquJx", function (t, r) {
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
    s.register("8r5Kp", function (t, r) {
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
    s.register("b1UVT", function (e, t) {
      "use strict";
      var r = s("d3HzT"),
        n = s("fb6mP"),
        o = s("1WdkZ"),
        i = s("86BWN");
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
        (l.Cancel = s("41odj")),
        (l.CancelToken = s("9Z8Pc")),
        (l.isCancel = s("d1VAq")),
        (l.all = function (e) {
          return Promise.all(e);
        }),
        (l.spread = s("lNKUZ")),
        (e.exports = l),
        (e.exports.default = l);
    }),
    s.register("d3HzT", function (e, t) {
      "use strict";
      var r = s("fb6mP"),
        n = s("dLor5"),
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
    s.register("fb6mP", function (e, t) {
      "use strict";
      e.exports = function (e, t) {
        return function () {
          for (var r = new Array(arguments.length), n = 0; n < r.length; n++) r[n] = arguments[n];
          return e.apply(t, r);
        };
      };
    }),
    s.register("dLor5", function (e, t) {
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
    s.register("1WdkZ", function (e, t) {
      "use strict";
      var r = s("86BWN"),
        n = s("d3HzT"),
        o = s("6rQCM"),
        i = s("h7KsZ");
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
    s.register("86BWN", function (e, t) {
      var r = s("jhCkN"),
        n = s("d3HzT"),
        o = s("1K8tZ"),
        i = { "Content-Type": "application/x-www-form-urlencoded" };
      function a(e, t) {
        !n.isUndefined(e) && n.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
      }
      var l,
        c = {
          adapter: (("undefined" != typeof XMLHttpRequest || void 0 !== r) && (l = s("bbduW")), l),
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
    s.register("1K8tZ", function (e, t) {
      "use strict";
      var r = s("d3HzT");
      e.exports = function (e, t) {
        r.forEach(e, function (r, n) {
          n !== t && n.toUpperCase() === t.toUpperCase() && ((e[t] = r), delete e[n]);
        });
      };
    }),
    s.register("bbduW", function (e, t) {
      "use strict";
      var r = s("d3HzT"),
        n = s("jsPhH"),
        o = s("2Ai15"),
        i = s("5Iudu"),
        a = s("4Hyve"),
        l = s("lerNU");
      e.exports = function (e) {
        return new Promise(function (t, c) {
          var d = e.data,
            u = e.headers;
          r.isFormData(d) && delete u["Content-Type"];
          var f = new XMLHttpRequest();
          if (e.auth) {
            var h = e.auth.username || "",
              p = e.auth.password || "";
            u.Authorization = "Basic " + btoa(h + ":" + p);
          }
          if (
            (f.open(e.method.toUpperCase(), o(e.url, e.params, e.paramsSerializer), !0),
            (f.timeout = e.timeout),
            (f.onreadystatechange = function () {
              if (f && 4 === f.readyState && (0 !== f.status || (f.responseURL && 0 === f.responseURL.indexOf("file:")))) {
                var r = "getAllResponseHeaders" in f ? i(f.getAllResponseHeaders()) : null,
                  o = {
                    data: e.responseType && "text" !== e.responseType ? f.response : f.responseText,
                    status: f.status,
                    statusText: f.statusText,
                    headers: r,
                    config: e,
                    request: f
                  };
                n(t, c, o), (f = null);
              }
            }),
            (f.onerror = function () {
              c(l("Network Error", e, null, f)), (f = null);
            }),
            (f.ontimeout = function () {
              c(l("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", f)), (f = null);
            }),
            r.isStandardBrowserEnv())
          ) {
            var m = s("bNNzL"),
              g = (e.withCredentials || a(e.url)) && e.xsrfCookieName ? m.read(e.xsrfCookieName) : void 0;
            g && (u[e.xsrfHeaderName] = g);
          }
          if (
            ("setRequestHeader" in f &&
              r.forEach(u, function (e, t) {
                void 0 === d && "content-type" === t.toLowerCase() ? delete u[t] : f.setRequestHeader(t, e);
              }),
            e.withCredentials && (f.withCredentials = !0),
            e.responseType)
          )
            try {
              f.responseType = e.responseType;
            } catch (t) {
              if ("json" !== e.responseType) throw t;
            }
          "function" == typeof e.onDownloadProgress && f.addEventListener("progress", e.onDownloadProgress),
            "function" == typeof e.onUploadProgress && f.upload && f.upload.addEventListener("progress", e.onUploadProgress),
            e.cancelToken &&
              e.cancelToken.promise.then(function (e) {
                f && (f.abort(), c(e), (f = null));
              }),
            void 0 === d && (d = null),
            f.send(d);
        });
      };
    }),
    s.register("jsPhH", function (e, t) {
      "use strict";
      var r = s("lerNU");
      e.exports = function (e, t, n) {
        var o = n.config.validateStatus;
        n.status && o && !o(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n);
      };
    }),
    s.register("lerNU", function (e, t) {
      "use strict";
      var r = s("cgAQ5");
      e.exports = function (e, t, n, o, i) {
        var s = new Error(e);
        return r(s, t, n, o, i);
      };
    }),
    s.register("cgAQ5", function (e, t) {
      "use strict";
      e.exports = function (e, t, r, n, o) {
        return (e.config = t), r && (e.code = r), (e.request = n), (e.response = o), e;
      };
    }),
    s.register("2Ai15", function (e, t) {
      "use strict";
      var r = s("d3HzT");
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
    s.register("5Iudu", function (e, t) {
      "use strict";
      var r = s("d3HzT"),
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
    s.register("4Hyve", function (e, t) {
      "use strict";
      var r = s("d3HzT");
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
    s.register("bNNzL", function (e, t) {
      "use strict";
      var r = s("d3HzT");
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
    s.register("6rQCM", function (e, t) {
      "use strict";
      var r = s("d3HzT");
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
    s.register("h7KsZ", function (e, t) {
      "use strict";
      var r = s("d3HzT"),
        n = s("jO7Rx"),
        o = s("d1VAq"),
        i = s("86BWN"),
        a = s("2alXl"),
        l = s("iNcqo");
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
    s.register("jO7Rx", function (e, t) {
      "use strict";
      var r = s("d3HzT");
      e.exports = function (e, t, n) {
        return (
          r.forEach(n, function (r) {
            e = r(e, t);
          }),
          e
        );
      };
    }),
    s.register("d1VAq", function (e, t) {
      "use strict";
      e.exports = function (e) {
        return !(!e || !e.__CANCEL__);
      };
    }),
    s.register("2alXl", function (e, t) {
      "use strict";
      e.exports = function (e) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
      };
    }),
    s.register("iNcqo", function (e, t) {
      "use strict";
      e.exports = function (e, t) {
        return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
      };
    }),
    s.register("41odj", function (e, t) {
      "use strict";
      function r(e) {
        this.message = e;
      }
      (r.prototype.toString = function () {
        return "Cancel" + (this.message ? ": " + this.message : "");
      }),
        (r.prototype.__CANCEL__ = !0),
        (e.exports = r);
    }),
    s.register("9Z8Pc", function (e, t) {
      "use strict";
      var r = s("41odj");
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
    s.register("lNKUZ", function (e, t) {
      "use strict";
      e.exports = function (e) {
        return function (t) {
          return e.apply(null, t);
        };
      };
    }),
    s.register("gwJFa", function (e, t) {
      /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ !(function () {
        "use strict";
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
    s("fquJx").register(
      JSON.parse(
        '{"komXT":"capture.ab29061b.js","9BtOZ":"icon-btn-delete.f78c5ab3.svg","6NbTI":"icon-btn-download.6a1b3bd6.svg","6iPKz":"capture.88f199e8.css","aWhca":"capture.839f08c2.css","7OJsf":"welcome.2ac67d4d.js","9qDfe":"popup.6158ebed.js","h4kbu":"editor.8a5d852f.js","1TQHo":"welcome.4c610233.js"}'
      )
    );
  var a = s("8DwkQ"),
    l = s("2z2pA");
  var c = s("5Xemj");
  var d = s("ceb36"),
    u = ((l = s("2z2pA")), s("iW6yY")),
    f = ((l = s("2z2pA")), s("6pLLc")),
    h = s("avfZw"),
    p = s("1I2HB");
  var m = () => {
    let e = [g],
      t = 0;
    return (0, f.serialMap)(e, (e) =>
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
    h.default.load().then((e) => {
      const t = "firstKnownVersion";
      return e[t] ? 0 : h.default.set(t, (0, p.getVersion)()).then(() => 1);
    });
  var w = s("h1Khz");
  let y = null;
  var E = s("kOtTY"),
    v = s("jBCXK"),
    b = s("hGGFE"),
    C = s("e0Kwl"),
    T = {};
  T = s("8r5Kp").getBundleURL("komXT") + s("fquJx").resolve("9BtOZ");
  var S = {};
  S = s("8r5Kp").getBundleURL("komXT") + s("fquJx").resolve("6NbTI");
  var _,
    k = s("8rN6d"),
    x = s("8bPtr");
  _ = s("b1UVT");
  const R = (e) =>
      t(_)
        .get(e)
        .then((e) => e.data),
    I =
      ((N = (0, k.default)(function (e) {
        var t, r;
        return (0, x.__generator)(this, function (n) {
          switch (n.label) {
            case 0:
              return [4, R(e)];
            case 1:
              return (t = n.sent()), ((r = document.createElement("div")).innerHTML = t), [2, r.getElementsByTagName("svg")[0]];
          }
        });
      })),
      function (e) {
        return N.apply(this, arguments);
      });
  var N,
    A = s("95ETH"),
    L = s("eC8rE"),
    $ = s("nKr4g"),
    D = ((c = s("5Xemj")), (u = s("iW6yY")), (l = s("2z2pA")), s("1RQvI"));
  (w = s("h1Khz")), (E = s("kOtTY"));
  const O = () => {
      const e = (0, E.getQueryString)(),
        t = e.id || e.oid,
        r = e.e,
        n = e.url;
      return { options: M(t, r, n), history: F(t, r, n), capture: t ? j(t, n) : void 0, editor: t && r ? U(t, r, n) : void 0 };
    },
    P = (e, t, r) => {
      let n = void 0 !== r && r;
      if (e) {
        -1 === e.href.indexOf("?") && ((e.href = t), n && e.setAttribute("style", ""));
      }
    },
    j = (e, t) => {
      let r = void 0 === t ? null : t;
      const n = { id: e };
      r && (n.url = r);
      return "/capture.html" + ("?" + (0, E.toQueryString)(n));
    },
    U = (e, t, r) => {
      let n = void 0 === r ? null : r;
      const o = { id: e, e: t };
      n && (o.url = n);
      return "/editor.html" + ("?" + (0, E.toQueryString)(o));
    },
    M = (e, t, r) => {
      let n = void 0 === e ? null : e,
        o = void 0 === t ? null : t,
        i = void 0 === r ? null : r,
        s = "";
      if (n) {
        const e = { id: n };
        o && (e.e = o), i && (e.url = i), (s = "?" + (0, E.toQueryString)(e));
      }
      return "/options.html" + s;
    },
    F = (e, t, r) => {
      let n = void 0 === e ? null : e,
        o = void 0 === t ? null : t,
        i = void 0 === r ? null : r,
        s = "";
      if (n) {
        const e = { oid: n };
        o && (e.e = o), i && (e.url = i), (s = "?" + (0, E.toQueryString)(e));
      }
      return "/capture.html" + s;
    };
  (E = s("kOtTY")), ($ = s("nKr4g")), (E = s("kOtTY"));
  const B = (e, t, r, n, o) => {
    (0, $.$)("error-title").innerText = e;
    let i = (0, $.$)("error-body");
    (i.innerText = t),
      (0, E.asArray)(i.getElementsByClassName(B.extrasClassName)).forEach((e) => {
        e.parentNode.removeChild(e);
      });
    let s = (0, $.$)("error");
    s.classList.toggle("warning", !r),
      $.$.findClass("close", s).forEach((e) => {
        (e.style.display = n ? "" : "none"), e._assignedClose || ((e._assignedClose = !0), $.$.on(e, "click", H));
      }),
      ((0, $.$)("error-buttons").style.display = !0 === o ? "none" : ""),
      $.$.show("error-wrap");
  };
  B.extrasClassName = "errors-html-extra";
  const H = () => {
      (0, $.$)("error-wrap").style.display = "none";
    },
    z = () =>
      Promise.resolve().then(() => {
        (0, $.$)("image").classList.add("loading");
      }),
    q = () =>
      Promise.resolve().then(() => {
        (0, $.$)("image").classList.remove("loading");
      });
  function G() {
    return L.Capture.all()
      .then((e) =>
        (function (e) {
          H(), ((0, $.$)("image").style.display = "none"), window.scrollTo(0, 0);
          let r = document.createElement("ul");
          r.className = "dropdown-items";
          let n = e.map((e) =>
              (function (e) {
                let t = e.url;
                1 !== e.images.length && (t += ` (${e.images.length} images)`);
                let r = e.dateTime.toLocaleString((0, b.default)((0, v.default)({}, C.DateTime.DATETIME_SHORT), { year: "2-digit" })),
                  n = e.sizes ? X(e.sizes.reduce((e, t) => e + t)) : "",
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
          let i = (0, $.$)("history");
          $.$.empty(i);
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
                    K().forEach((e) => (e.checked = t)), V();
                  }),
                  i.appendChild(s);
                let a = document.createElement("div");
                (a.className = "checkbox-note"), (a.textContent = ""), o.appendChild(a);
                let d = document.createElement("button");
                (d.textContent = (0, c.tr)("Delete")),
                  (d.className = "checkbox-button check-box-button-del"),
                  (d.disabled = !0),
                  o.appendChild(d),
                  I(t(T))
                    .then((e) => {
                      e.classList.add("btn-icon"), d.appendChild(e);
                    })
                    .catch((e) => {
                      l.default.error(`Error loading svg (${t(T)})`, e);
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
                      L.Capture.lookupIds(e)
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
                        .then((e) => {
                          let t = e.succeeded,
                            r = e.failed,
                            o = t.length,
                            i = r.length,
                            s =
                              1 === o
                                ? (0, c.tr)("1 file was successfully removed.")
                                : (0, c.tr)("$num$ files were successfully removed.", null, [o], { num: { content: "$1", example: "2" } });
                          (s += " 🗑"),
                            i &&
                              ((s += "\n\n"),
                              (s +=
                                1 === i
                                  ? (0, c.tr)("1 file could not be removed.")
                                  : (0, c.tr)("$num$ files could not be removed.", null, [i], { num: { content: "$1", example: "2" } }))),
                            G(),
                            window.setTimeout(() => {
                              B(n, s),
                                window.setTimeout(() => {
                                  H();
                                }, 3e3);
                            }, 50);
                        })
                        .catch((e) => {
                          l.default.error("Error handling files", e),
                            w.update(e).then(() => {
                              let e = (0, c.tr)("Error handling files. Please report this via the flag reporting button above.");
                              B(n, e, !0, !0);
                            });
                        });
                    })(W(K()));
                  });
                let u = document.createElement("button");
                return (
                  (u.textContent = (0, c.tr)("Download")),
                  (u.className = "checkbox-button check-box-button-down"),
                  (u.disabled = !0),
                  o.appendChild(u),
                  I(t(S))
                    .then((e) => {
                      e.classList.add("btn-icon"), u.appendChild(e);
                    })
                    .catch((e) => {
                      l.default.error(`Error loading svg (${t(S)})`, e);
                    }),
                  u.addEventListener("click", (e) => {
                    let t = W(K());
                    (0, A.requestDownloads)()
                      .then((e) => {
                        if (e)
                          return L.Capture.lookupIds(t)
                            .then((e) =>
                              [].concat.apply(
                                [],
                                e.map((e) => e.fullPaths)
                              )
                            )
                            .then((e) => (0, E.fullServiceDownload)(e))
                            .then((e) => {
                              let t = e.hasPerms,
                                r = e.results,
                                n = e.failCount;
                              e.successCount;
                              if (((0, l.default)(`download success ${r.length} files`), t))
                                if (n) {
                                  let e = "Some files did not download",
                                    t = r.filter((e) => !1 === e.success),
                                    n =
                                      (0, c.tr)("The following files could not be downloaded:") +
                                      `\n\n${t.map((e) => e.url).join("\n")}\n\n` +
                                      D.ERR_MSG_IF_PERSISTS;
                                  B(e, n, !0, !0);
                                } else (0, l.default)(`downloaded ${r.length} files`);
                              else {
                                let e = (0, c.tr)("Cannot download files"),
                                  t = (0, c.tr)("You need to grant the download privilege in order to download files");
                                B(e, t, !1, !0);
                              }
                            });
                        {
                          let e = (0, c.tr)("Permission needed to download files"),
                            t = (0, c.tr)("You need to grant the download privilege in order to download files");
                          return B(e, t, !1, !0), w.update().then(() => !0);
                        }
                      })
                      .catch((e) => {
                        w.update(e).then(() => {
                          l.default.error("Download error", e);
                          let t = (0, c.tr)("Error downloading files"),
                            r = (0, c.tr)("There was an error downloading files, please report it via the flag button above.");
                          B(t, r, !0, !0);
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
          let a = Y.loadIdsSet();
          K().forEach((e) => {
            a.has(e.dataset.id) && (e.checked = !0), e.addEventListener("change", V);
          }),
            V();
        })(e)
      )
      .catch((e) => {
        l.default.error("Error in loadHistory", e),
          w.update(e).then(() => {
            let e = (0, c.tr)("Error loading history"),
              t = D.ERR_MSG_IF_PERSISTS;
            B(e, t, !0, !0);
          });
      });
  }
  function K(e) {
    let t = $.$.findClass("file-checkbox", (0, $.$)("history"));
    return !0 === e && Y.saveElts(t), t;
  }
  function W(e) {
    return e.filter((e) => e.checked).map((e) => parseInt(e.dataset.id, 10));
  }
  const Y = (function () {
    let e = "checkedFiles";
    return {
      saveElts: (t) => {
        let r = W(t).join(",");
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
  function V() {
    let e = K(!0),
      t = e.length,
      r = e.filter((e) => e.checked).length,
      n = (0, $.$)("history"),
      o = $.$.findClass("checkbox-note", n)[0];
    const i = (0, c.tr)("Selected");
    (o.textContent = 0 === t ? "" : `(${r} ${i})`), n.classList[0 === t ? "add" : "remove"]("no-screenshots");
    let s = $.$.findClass("meta-checkbox", n)[0];
    (0 !== r && r !== t) || (s.checked = 0 !== r),
      $.$.findClass("checkbox-button", n).forEach((e) => {
        (e.disabled = 0 === r), (e.title = 0 === r ? (0, c.tr)("Select 1 or more screenshots to use this action.") : "");
      });
  }
  function X(e, t) {
    let r = void 0 === t ? 2 : t;
    if (0 == e) return "0";
    const n = Math.floor(Math.log(e) / Math.log(1024));
    return `${(e / Math.pow(1024, n)).toFixed(r)} ${X.sizes[n]}`;
  }
  X.sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  (k = s("8rN6d")), (v = s("jBCXK")), (b = s("hGGFE"));
  var Z = s("ff4Ef"),
    Q = ((x = s("8bPtr")), s("7b0kr")),
    J = s("iiDPj"),
    ee = ((Z = s("ff4Ef")), (Q = s("7b0kr")), s("i9kVF")),
    te = ((a = s("8DwkQ")), (c = s("5Xemj")), s("5Gpcw"));
  const re = (e) => {
    let t = e.cmd,
      r = e.ctrl,
      n = e.alt,
      o = e.shift,
      i = e.char;
    const s = (0, te.getIsMac)(),
      a = [];
    return t && a.push(s ? "⌘" : "⌃"), r && a.push("⌃"), n && a.push("⌥"), o && a.push("⇧"), a.push(i), a.join("");
  };
  var ne = s("94TAZ"),
    oe = s("2kaV1");
  var ie = (e) => {
      let r = e.Actions,
        n = e.STATE;
      const o = (0, Z.default)((0, Q.useState)(""), 2),
        i = o[0],
        s = o[1],
        l = (0, Z.default)((0, Q.useState)(null), 2),
        d = l[0],
        u = l[1];
      (0, Q.useEffect)(() => {
        const e = (e) => {
          let t = e.text;
          s(t);
        };
        (0, oe.onNotifyText)(e);
        const t = (e) => {
            (0, ee.canCopyTextToClipboard)() &&
              !n.rejectedDl &&
              (e.preventDefault(), u({ pageX: e.pageX - window.scrollX, pageY: e.pageY - window.scrollY }));
          },
          r = document.getElementById("image");
        return (
          r.addEventListener("contextmenu", t, !1),
          () => {
            (0, oe.offNotifyText)(e), r.removeEventListener("contextmenu", t, !1);
          }
        );
      });
      const f = d && n.record;
      let h = [];
      if (f) {
        n.record.fullPaths.forEach((e) => {
          h.push();
        });
      }
      return t(Q).createElement(
        t(Q).Fragment,
        null,
        i && t(Q).createElement(oe.default, { text: i }),
        f &&
          t(Q).createElement(ne.default, {
            pageX: d.pageX,
            pageY: d.pageY,
            onClose: () => u(null),
            onUpdatePosition: (e, t) => u({ pageX: e, pageY: t }),
            cfg: {
              rows: [
                {
                  text: (0, c.tr)("Save Image As…"),
                  shortcut: re({ cmd: !0, shift: !0, char: "S" }),
                  onClick: (e) => r.download(n.record, a.GA_VIA_DIALOG, !0)
                },
                { text: (0, c.tr)("Save PDF As…"), onClick: (e) => r.downloadPDF(n.record, a.GA_VIA_DIALOG, !0) },
                ...n.record.fullPaths.map((e, t, o) => ({
                  text: `${(0, c.tr)("Copy Image")}${1 === o.length ? "" : " " + (t + 1)}`,
                  shortcut: 0 === t ? re({ cmd: !0, char: "C" }) : void 0,
                  onClick: (e) => r.copyToClipboard(n.record, a.GA_VIA_DIALOG, t, n.images)
                })),
                { divider: !0 },
                { isTitle: !0, title: "Premium feature" },
                ...n.record.fullPaths.map((e, t, n) => ({
                  text: `${(0, c.tr)("Edit Image")}${1 === n.length ? "" : " " + (t + 1)}`,
                  shortcut: 0 === t ? re({ cmd: !0, char: "E" }) : void 0,
                  onClick: (e) => r.goToEditor(a.GA_VIA_DIALOG, t)
                })),
                { divider: !0 },
                { text: (0, c.tr)("Copy original URL"), onClick: (e) => r.copyUrl(n.record, a.GA_VIA_DIALOG) },
                {
                  text: (0, c.tr)("Open original URL"),
                  disabled: !n.record || n.record.url.startsWith("chrome://") || n.record.url.startsWith("edge://"),
                  title:
                    (n.record && n.record.url.startsWith("chrome://")) || (n.record && n.record.url.startsWith("edge://"))
                      ? "Cannot open chrome:// URLs"
                      : void 0,
                  onClick: (e) => r.goToUrl(n.record, a.GA_VIA_DIALOG)
                }
              ]
            }
          })
      );
    },
    se = ((oe = s("2kaV1")), s("fueUa")),
    ae = s("1AJdn"),
    le = s("fAoww"),
    ce = s("3cJ8u"),
    de = s("j4JJz"),
    ue = s("ekuHd"),
    fe = ((A = s("95ETH")), (k = s("8rN6d")), (x = s("8bPtr")), s("3k2hL"));
  const he = "ChromeTabsError",
    pe = (0, fe.genLastErrorFmt)(he),
    me = () => {
      return ((e = { active: !0, currentWindow: !0 }),
      new Promise((t, r) => {
        chrome.tabs.query(e, (e) => {
          const n = chrome.runtime.lastError;
          return n ? r(pe(n, "query")) : t(e);
        });
      })).then((e) => e[0]);
      var e;
    },
    ge = (function () {
      var e = (0, k.default)(function (e, t) {
        var r, n, o;
        return (0, x.__generator)(this, function (i) {
          return (
            (r = void 0),
            (n = t.length),
            [
              2,
              (o = (i) => {
                if (i >= t.length) return t;
                let s = t[i],
                  a = i === n - 1;
                return e.incognito && 0 === i
                  ? ((l = { url: s, incognito: !1, focused: a }),
                    new Promise((e, t) => {
                      chrome.windows.create(l, (r) => {
                        const n = chrome.runtime.lastError;
                        return n ? t(pe(n, "windowsCreate")) : e(r);
                      });
                    })).then((e) => ((r = e.id), o(i + 1)))
                  : ((e) =>
                      new Promise((t, r) => {
                        chrome.tabs.create(e, (e) => {
                          const n = chrome.runtime.lastError;
                          return n ? r(pe(n, "create")) : t(e);
                        });
                      }))({ url: s, active: a, windowId: r, openerTabId: e.id, index: (e.incognito ? 0 : e.index) + 1 + i }).then((e) =>
                      o(i + 1)
                    );
                var l;
              })(0)
            ]
          );
        });
      });
      return function (t, r) {
        return e.apply(this, arguments);
      };
    })();
  (ee = s("i9kVF")), (a = s("8DwkQ")), (L = s("eC8rE")), ($ = s("nKr4g")), (c = s("5Xemj"));
  var we = s("gnAcz");
  (a = s("8DwkQ")), ($ = s("nKr4g"));
  var ye = {
      [we.ERROR_INCOGNITO_NETWORK_NAME]: {
        title: "Network error downloading file",
        body: "You might be experiencing a bug that was introduced to the Chrome browser in v68. In the meantime, you can try either of the following.\n\n1. right-click and “Save image as” or just click and drag the image to your desktop (if you are not using auto-download)\n\n2. disable “Allow in incognito” from the Chrome settings page for this extension (you can return to this capture from the history view within this extension):",
        buttons: () => {
          let e = `${a.CUR_BROWSER_INFO.browser_protocol}extensions?id=${chrome.runtime.id}`,
            t = document.createElement("a");
          return (
            (t.href = "#"),
            (t.innerText = e),
            Object.assign(t.style, { display: "block", fontWeight: "bold", margin: "1em 0" }),
            $.$.on(t, "click", (t) => {
              t.preventDefault(), me().then((t) => ge(t, [e]));
            }),
            [t]
          );
        }
      }
    },
    Ee = ((u = s("iW6yY")), (d = s("ceb36")), (k = s("8rN6d")), (x = s("8bPtr")), (a = s("8DwkQ")), s("aDcgc")),
    ve = s("ld3ci"),
    be = ((a = s("8DwkQ")), (d = s("ceb36")), (l = s("2z2pA")), (Z = s("ff4Ef")), s("4fNEN")),
    Ce = s("eL3Zw");
  const Te = Ce.default.local,
    Se = Ce.default.sync;
  var _e = class {
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
        Object.entries(e).forEach((e) => {
          let n = (0, Z.default)(e, 2),
            o = n[0],
            i = n[1];
          const s = this._key(o),
            a = this.namespacedToField[s];
          t(be).ok(a, `no field found for ${s} (${o})`), (r[s] = this._serializeField(a, i));
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
            Object.entries(e).forEach((e) => {
              let n = (0, Z.default)(e, 2),
                o = n[0],
                i = n[1];
              const s = this.namespacedToField[o];
              t(be).ok(s, `no field found for ${o}`), (r[this._stripKey(o)] = this._deserializeField(s, i));
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
    load(e) {
      let t = void 0 !== e && e;
      return (this._loadProm && !0 !== t) || (this._loadProm = this._load()), this._loadProm.then(() => Object.assign({}, this.state));
    }
    _load() {
      let e = this.fields.map((e) => e.name);
      return this.get(e).then(
        (e) => (
          this.fields.forEach((t) => {
            if (void 0 === e[t.name]) void 0 !== t.default && (e[t.name] = "function" == typeof t.default ? t.default() : t.default);
            else if (t.process) {
              const r = t.process(e[t.name]).val;
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
            Object.entries(e).forEach((e) => {
              let r = (0, Z.default)(e, 2),
                n = r[0],
                o = r[1];
              const i = this.namespacedToField[n];
              i && (t.push(i.name), (this.state[i.name] = this._deserializeField(i, o.newValue)));
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
        (this.storage = !0 === r ? Se : Te),
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
  E = s("kOtTY");
  const ke = {
      keys: { DISMISSED: "dismissed", LIKE: "like", WENTOUT: "wentOut", TIMESTAMP: "timestamp" },
      category: "howisit",
      postInit: () => {
        Oe("how-is-it-e7n-consider").textContent = (0, Ee.tr)(
          "Might you consider taking a minute to rate it in the $webstore$?",
          null,
          [a.CUR_BROWSER_INFO.store_short],
          { webstore: { content: "$1", example: "web store" } }
        );
        const e = Oe("how-is-it-e7n-url-webstore");
        (e.href = a.CUR_BROWSER_INFO.store_reviews_url),
          (e.textContent = (0, Ee.tr)("Take me to the $webstore$!", null, [a.CUR_BROWSER_INFO.store_short], {
            webstore: { content: "$1", example: "web store" }
          }));
      }
    },
    xe = {
      keys: { DISMISSED: "editDismissed", LIKE: "editHitOk", WENTOUT: "editWentOut", TIMESTAMP: "editTimestamp" },
      category: "tryedit"
    },
    Re = {
      keys: { DISMISSED: "namechangeDismissed", LIKE: "namechangeHitOk", WENTOUT: "namechangeWentOut", TIMESTAMP: "namechangeTimestamp" },
      category: "namechange"
    },
    Ie = [ke, xe, Re],
    Ne = [];
  Ie.forEach((e) => {
    let t = e.keys;
    Ne.push(
      { name: t.DISMISSED, type: "bool", default: !1 },
      { name: t.LIKE, type: "bool" },
      { name: t.WENTOUT, type: "bool" },
      { name: t.TIMESTAMP, type: "text" }
    );
  });
  const Ae = new _e("howisit", Ne, !0);
  class Le {
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
      De(this.elt.getElementsByClassName("for-step")).forEach((e) => {
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
          De(this.elt.getElementsByClassName(e)).forEach((e) => {
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
        Ae.onUpdate((e) => {
          Ae.state[this.keys.DISMISSED] && this.hide();
        }),
        Oe("hit-report-link").setAttribute("href", (0, E.reportLink)(window.location.href, "AreYouEnjoyingReport"));
    }
    _updateHitStore(e) {
      const t = $e();
      (e[this.keys.TIMESTAMP] = t), Ae.setObj(e).catch((e) => l.default.error(e));
    }
    constructor(e, r) {
      (this.elt = e),
        t(ve)(e, `bad element sent to Controls: ${e}`),
        t(ve)(
          Ie.find((e) => e === r),
          `Config not found in whitelist!: ${JSON.stringify(r)}`
        ),
        (this.elt = e),
        (this.keys = r.keys),
        (this.category = r.category),
        (this.steps = De(e.getElementsByClassName("hit-step"))),
        r.postInit && r.postInit(),
        this.addListeners(),
        this.show(),
        d.default.event(this.category, "show");
    }
  }
  const $e = () => new Date().getTime().toString();
  window._reset = () => Ae.clear();
  const De = (e) => Array.from(e),
    Oe = (e) => document.getElementById(e);
  (L = s("eC8rE")), ($ = s("nKr4g")), (l = s("2z2pA")), (Q = s("7b0kr")), (J = s("iiDPj"));
  var Pe = s("iPbYd"),
    je = s("3pr9z"),
    Ue = ((Q = s("7b0kr")), (d = s("ceb36")), (l = s("2z2pA")), (se = s("fueUa")), s("kRWUw")),
    Me = s("jIppf"),
    Fe = s("eYuPW");
  class Be extends Q.Component {
    componentDidMount() {
      d.default.event(this.props.gaCfg.category, "show");
    }
    render() {
      const e = { transition: "opacity 500ms ease-in-out", opacity: this.state.closing ? 0 : 1 };
      return t(Q).createElement(
        t(Q).Fragment,
        null,
        t(Q).createElement(
          Me.default,
          { style: e, className: "welcomemodal big-modal", dimBg: !0, width: 630 },
          t(Q).createElement("h2", { className: "br" }, "Same team, new name."),
          t(Q).createElement(Fe.AnnounceImg, null),
          t(Q).createElement(
            "p",
            { className: "br15" },
            "Full Page Screen Capture is now ",
            t(Q).createElement("strong", null, "GoFullPage"),
            "! Read more",
            " ",
            t(Q).createElement("a", { href: se.BLOG_NAME_CHANGE_URL, target: "_blank", rel: "noopener noreferrer" }, "on the blog"),
            "."
          ),
          t(Q).createElement(
            "div",
            null,
            t(Q).createElement(
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
          t(Q).createElement(
            "a",
            {
              className: "close close-topright",
              href: "#",
              onClick: (e) => {
                this.handleLogClick("hit-close", !1, !0, !0), this.handleClose(e);
              }
            },
            t(Q).createElement(Ue.default, { fill: "#CCC" })
          )
        )
      );
    }
    constructor(e) {
      super(e),
        (0, Pe.default)(this, "handleClose", (e) => {
          e && e.preventDefault(),
            this.state.closing ||
              (this.setState({ closing: !0 }),
              window.setTimeout(() => {
                this.props.onClose();
              }, 500));
        }),
        (0, Pe.default)(this, "handleLogClick", (e, t, r, n) => {
          let o = void 0 !== r && r,
            i = void 0 !== n && n;
          const s = {};
          (s[this.props.gaCfg.keys.LIKE] = !o),
            (s[this.props.gaCfg.keys.DISMISSED] = i),
            (s[this.props.gaCfg.keys.TIMESTAMP] = He()),
            this.props.hitStore.setObj(s).catch((e) => l.default.error(e)),
            d.default[t ? "delayedEvent" : "event"](this.props.gaCfg.category, "hit", e);
        }),
        (this.state = { closing: !1 });
    }
  }
  (0, Pe.default)(Be, "propTypes", {
    onClose: t(je).func.isRequired,
    hitStore: t(je).object.isRequired,
    gaCfg: t(je).shape({
      keys: t(je).shape({
        DISMISSED: t(je).string.isRequired,
        LIKE: t(je).string.isRequired,
        WENTOUT: t(je).string.isRequired,
        TIMESTAMP: t(je).string.isRequired
      }),
      category: t(je).string.isRequired
    }).isRequired
  });
  const He = () => new Date().getTime().toString();
  $ = s("nKr4g");
  const ze = (e, r) => {
    const n = document.getElementById("modal-wrapper");
    $.$.empty(n);
    const o = document.createElement("div");
    n.appendChild(o), (o.style.opacity = "0"), (o.style.display = "");
    (0, J.render)(
      t(Q).createElement(Be, {
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
  (f = s("6pLLc")),
    (h = s("avfZw")),
    (Q = s("7b0kr")),
    (J = s("iiDPj")),
    (Pe = s("iPbYd")),
    (je = s("3pr9z")),
    (Q = s("7b0kr")),
    (a = s("8DwkQ")),
    (d = s("ceb36")),
    (l = s("2z2pA")),
    (Ue = s("kRWUw")),
    (Me = s("jIppf")),
    (Fe = s("eYuPW"));
  class qe extends Q.Component {
    componentDidMount() {
      d.default.event(this.props.gaCfg.category, "show");
    }
    render() {
      const e = this.props.editorUrl,
        r = { transition: "opacity 500ms ease-in-out", opacity: this.state.closing ? 0 : 1 };
      return t(Q).createElement(
        t(Q).Fragment,
        null,
        t(Q).createElement(
          Me.default,
          { style: r, className: "welcomemodal big-modal", dimBg: !0, width: 630 },
          t(Q).createElement("h2", { className: "br" }, "Try annotating, cropping, and doing more with your screenshots!"),
          t(Q).createElement(Fe.default, null),
          t(Q).createElement("p", { className: "br15" }, "Test drive the premium editor and turn your screenshots into masterpieces."),
          t(Q).createElement(
            "div",
            null,
            t(Q).createElement(
              "a",
              { className: "btn br15", href: e, onMouseDown: () => this.handleLogClick("hit-like", !0) },
              "Give it a spin"
            ),
            t(Q).createElement(
              "p",
              { className: "dim" },
              t(Q).createElement(
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
          t(Q).createElement(
            "a",
            {
              className: "close close-topright",
              href: "#",
              onClick: (e) => {
                this.handleLogClick("hit-close", !1, !0, !0), this.handleClose(e);
              }
            },
            t(Q).createElement(Ue.default, { fill: "#CCC" })
          )
        )
      );
    }
    constructor(e) {
      super(e),
        (0, Pe.default)(this, "handleClose", (e) => {
          e && e.preventDefault(),
            this.state.closing ||
              (this.setState({ closing: !0 }),
              window.setTimeout(() => {
                this.props.onClose();
              }, 500));
        }),
        (0, Pe.default)(this, "handleLogClick", (e, t, r, n) => {
          let o = void 0 !== r && r,
            i = void 0 !== n && n;
          const s = {};
          (s[this.props.gaCfg.keys.LIKE] = !o),
            (s[this.props.gaCfg.keys.DISMISSED] = i),
            (s[this.props.gaCfg.keys.TIMESTAMP] = Ge()),
            this.props.hitStore.setObj(s).catch((e) => l.default.error(e)),
            d.default[t ? "delayedEvent" : "event"](this.props.gaCfg.category, "hit", e);
        }),
        (this.state = { closing: !1 });
    }
  }
  (0, Pe.default)(qe, "propTypes", {
    onClose: t(je).func.isRequired,
    editorUrl: t(je).string.isRequired,
    hitStore: t(je).object.isRequired,
    gaCfg: t(je).shape({
      keys: t(je).shape({
        DISMISSED: t(je).string.isRequired,
        LIKE: t(je).string.isRequired,
        WENTOUT: t(je).string.isRequired,
        TIMESTAMP: t(je).string.isRequired
      }),
      category: t(je).string.isRequired
    }).isRequired
  });
  const Ge = () => new Date().getTime().toString();
  $ = s("nKr4g");
  const Ke = (e, r, n) => {
    const o = document.getElementById("modal-wrapper");
    $.$.empty(o);
    const i = document.createElement("div");
    o.appendChild(i), (i.style.opacity = "0"), (i.style.display = "");
    (0, J.render)(
      t(Q).createElement(qe, {
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
  p = s("1I2HB");
  let We = !1;
  const Ye = (e, t) => t[e.keys.DISMISSED] || void 0 !== t[e.keys.LIKE],
    Ve = (function () {
      var e = (0, k.default)(function (e) {
        var t, r, n, o, i, s, l;
        return (0, x.__generator)(this, function (c) {
          switch (c.label) {
            case 0:
              return [4, Ae.load()];
            case 1:
              return (t = c.sent()), [4, h.default.load()];
            case 2:
              return (r = c.sent()), (n = Ye(ke, t)), (o = Ye(xe, t)), (i = Ye(Re, t)), [4, (0, f.sleep)(250)];
            case 3:
              return c.sent(), [4, L.Capture.count()];
            case 4:
              return (
                (s = c.sent()),
                (l = r.firstKnownVersion),
                l && (0, p.compareVersions)(l, a.NAMECHANGE_VERSION) < 0 && !i
                  ? ze(Ae, Re)
                  : s >= 8 && !o
                  ? Ke(e, Ae, xe)
                  : s >= 5 && !n && new Le((0, $.$)("how-is-it"), ke),
                [2]
              );
          }
        });
      });
      return function (t) {
        return e.apply(this, arguments);
      };
    })();
  var Xe = s("Bqk7F"),
    Ze = ((l = s("2z2pA")), (D = s("1RQvI")), s("5kOv9")),
    Qe = ((f = s("6pLLc")), (w = s("h1Khz")), s("8ioZ3")),
    Je = s("fYpxg"),
    et = s("dChev");
  E = s("kOtTY");
  const tt = "rejected_dl",
    rt = (0, c.tr)("File no longer exists—perhaps it has been cleared from your browser") + " 😐",
    nt = (0, c.tr)("Your browser does not support the clipboard API, please update to the most recent version."),
    ot = { record: null, images: null, loaded: !1, rejectedDl: !1 },
    it = "nav_button",
    st = () => {
      (0, J.render)((0, Q.createElement)(ie, { Actions: ft, STATE: ot }), document.getElementById("root"));
    },
    at = () => {
      u.default.onUpdated((e) => {
        if ("MIGRATION" === e.source) {
          let t = (0, $.$)("error-status");
          if ((t && (t.innerText = ""), e.isDone)) window.location = window.location.href;
          else if (t && e.title) {
            let r = `\n${e.title}`;
            void 0 !== e.step && void 0 !== e.numSteps && (r += ` (${e.step} of ${e.numSteps}).`), (t.innerText = r);
          }
        }
      });
      const e = (e) => window.setTimeout(() => e.blur(), 10);
      $.$.on((0, $.$)("btn-trash"), "click", function (t) {
        t.preventDefault(), ot.record && ft.remove(ot.record, a.GA_VIA_NAV), e(this);
      }),
        $.$.on((0, $.$)("btn-download"), "click", function (t) {
          if (ot.rejectedDl) return !0;
          ot.record && (t.preventDefault(), ft.download(ot.record, a.GA_VIA_NAV)), e(this);
        }),
        $.$.on((0, $.$)("btn-downloadpdf"), "click", function (t) {
          ot.record && (t.preventDefault(), ft.downloadPDF(ot.record, a.GA_VIA_NAV)), e(this);
        }),
        $.$.on(document, "keydown", function (e) {
          const t = ((e) => ((0, te.getIsMac)() ? e.metaKey : e.ctrlKey))(e);
          if (t)
            switch (e.keyCode) {
              case 83:
                if (ot.record) {
                  const t = e.altKey,
                    r = e.shiftKey;
                  let n = (0, $.$)("btn-download");
                  "none" !== window.getComputedStyle(n).display &&
                    (e.preventDefault(),
                    t ? ft.copyToClipboard(ot.record, a.GA_VIA_KEYPRESS, 0, ot.images) : ft.download(ot.record, a.GA_VIA_KEYPRESS, r));
                }
                return;
              case 67:
                return void (
                  e.shiftKey ||
                  e.altKey ||
                  (e.preventDefault(), ot.record && ft.copyToClipboard(ot.record, a.GA_VIA_KEYPRESS, 0, ot.images))
                );
              case 69:
                return e.preventDefault(), void (ot.record && ft.goToEditor(a.GA_VIA_KEYPRESS));
              case 189:
              case 187:
              case 48:
                return (
                  e.preventDefault(), void (189 === e.keyCode ? (0, le.default)(window, "ZOOM_OUT") : (0, le.default)(window, "ZOOM_IN"))
                );
            }
        }),
        Promise.all([(0, A.containsDownloads)(), Je.default.load()]).then((e) => {
          let t = (0, Z.default)(e, 2),
            r = t[0],
            n = t[1];
          (ot.rejectedDl = !r && n[tt]), r && n[tt] && Je.default.set(tt, !1).catch((e) => l.default.error(e));
        }),
        (function () {
          const e = O();
          P((0, $.$)("btn-settings"), e.options), P((0, $.$)("btn-history"), e.history);
        })();
    },
    lt = (e) => {
      w.update({ name: "SlowLoadingTimeout", message: `After ${e}ms.` }, ot.record).then(() => {
        let e = (0, c.tr)(
          "This is taking longer to load than expected. Hang tight! If nothing updates after a while, please report this via the reporting flag button above."
        );
        B((0, c.tr)("Still loading"), e, !1, !0);
      });
    },
    ct = (e, t, r) => {
      let n,
        o = !1;
      return (
        (r = r || 1e4),
        t &&
          (n = window.setTimeout(() => {
            (o = !0), t(r);
          }, r)),
        Promise.all(e.map((e) => (0, f.loadImage)(e)))
          .then((e) => (window.clearTimeout(n), (ot.loaded = !0), { images: e, didTimeout: o }))
          .catch((e) => {
            throw (window.clearTimeout(n), e);
          })
      );
    },
    dt = (e) => {
      ot.images = e;
      let t = !1,
        r = !1,
        n = null,
        o = null,
        i = null,
        s = null;
      const a = (0, $.$)("image");
      $.$.empty(a), a.classList.toggle("one-child", 1 === e.length);
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
        const o = ot.record.scaleMultiplier;
        f(n.scaleRatio * o),
          e.forEach((e, t) => {
            let r = e.img,
              o = e.width,
              i = e.height;
            (r.style.height = i * n.scaleRatio + "px"),
              (r.style.width = o * n.scaleRatio + "px"),
              0 === t && r.parentNode && (r.parentNode.style.padding = n.top + 20 + "px 0");
          }),
          u(!1);
      }
      function d() {
        f(1),
          e.forEach((e, t) => {
            let r = e.img,
              n = e.width,
              o = e.height,
              i = ht(n),
              s = ht(o);
            (r.style.width = i + "px"), (r.style.height = s + "px"), 0 === t && (r.parentNode.style.padding = "");
          }),
          u(!0);
      }
      function u(e) {
        let t = null === e ? "" : e ? "can-zoom-out" : "can-zoom-in";
        ["can-zoom-in", "can-zoom-out"].forEach((e) => document.documentElement.classList.toggle(e, e === t));
      }
      function f(e) {
        let t = (0, $.$)("img-ctrls"),
          r = ((n = e), (n *= 100) >= 1 ? Math.floor(n, 10).toString() : n >= 0.005 ? n.toString().substring(0, 4) : "0");
        var n;
        $.$.findClass("zoom-amount", t).forEach((e) => (e.innerText = `${r}%`)),
          $.$.findClass("zoom-btn", t).forEach((t) => {
            t.classList.toggle("disabled", 1 === e ? t.classList.contains("zoom-in") : t.classList.contains("zoom-out"));
          });
      }
      function h(r) {
        let n = !0 === r,
          o = "object" == typeof r,
          i = o ? r.target : e[0].img,
          s = e.find((e) => e.img === i) || e[0],
          a = s.width,
          f = s.height,
          h = document.getElementsByTagName("header")[0].offsetHeight,
          p = a > window.innerWidth || f + 40 > window.innerHeight - h,
          m = i.width,
          g = i.height,
          w = o ? $.$.offsets(i) : null,
          y = document.documentElement.classList.contains("can-zoom-out");
        if ((!0 === n && (y = !y), p))
          if (y) {
            if (t) return;
            c();
          } else d();
        else e && e.length && ((e[0].img.parentNode.style.padding = "20px 0 0"), u(null));
        if (o && !y) {
          const e = $.$.offsets(i),
            t = r.clientX - w.left,
            n = r.clientY - w.top,
            o = (t / m) * ht(a),
            s = (n / g) * ht(f),
            c = $.$.offsets(l),
            d = l.innerWidth || l.offsetWidth,
            u = l.innerHeight || l.offsetHeight,
            h = e.left - c.left + o - d / 2,
            p = e.top - c.top + s - u / 2;
          (0, E.scrollEltTo)(l, h, p);
        }
      }
      e.forEach((e, t) => {
        let r = e.img;
        (r.src = e.src), (r.title = "Captured screenshot"), a.appendChild(r);
      }),
        $.$.on(window, "ZOOM_IN", d),
        $.$.on(window, "ZOOM_OUT", c),
        h(!0),
        e.forEach((e) => {
          let t = e.img;
          return $.$.on(t, "click", h);
        }),
        $.$.on(window, "resize", () => h(!0));
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
                ? $.$.once(document, "click", (e) => {
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
      Object.entries(m).forEach((e) => {
        let t = (0, Z.default)(e, 2),
          r = t[0],
          n = t[1];
        $.$.on(document, r, n);
      });
      const g = (0, $.$)("img-ctrls"),
        w = $.$.findClass("zoom-btn", g);
      w.push($.$.findClass("zoom-amount", g)[0]),
        w.forEach((e) => {
          $.$.on(e, "click", function (e) {
            e.preventDefault(), this.classList.contains("disabled") || h(!1);
          });
        });
      const y = e[0].src,
        v = (0, $.$)("btn-download");
      (v.href = y),
        (v.download = y.split("/").pop()),
        (function (e) {
          let t = void 0 === e ? "img-btn" : e;
          if (!ot.loaded) return void ut();
          $.$.findClass(t).forEach(function (e) {
            e.classList.add("show");
          });
        })();
    };
  function ut() {
    $.$.findClass("img-btn").forEach(function (e) {
      e.classList.remove("show");
    });
  }
  const ft = (function () {
    const e = {
      downloadPDF: (t, r, n) => {
        let o = void 0 !== n && n;
        d.default.event(it, "download_pdf", r),
          e
            ._if(t)
            .then(() => (0, A.requestDownloads)())
            .then(
              (function () {
                var e = (0, k.default)(function (e) {
                  var r, n, i, s, a, d, u, f, h, p, m, g, w, y, C, T, S, _, k, R, I, N, A, L, $, D, O, P;
                  return (0, x.__generator)(this, function (x) {
                    switch (x.label) {
                      case 0:
                        return e
                          ? ((r = (0, Xe.getImageFormat)("jpg")), [4, Promise.all([Qe.default.load(), et.default.loginStateProm()])])
                          : [3, 6];
                      case 1:
                        return (
                          (n = Z.default.apply(void 0, [x.sent(), 2])),
                          (i = n[0]),
                          (s = n[1]),
                          (a = []),
                          (d = null),
                          (u = 0),
                          i.pdf_url_and_date
                            ? ((f = ot.record.scaleMultiplier),
                              (h = ot.images[0].width / f),
                              0,
                              (p = { x: 0, y: 0, width: h, height: 0 }),
                              (m = (0, se.formatDate)(ot.record.dateTime, i.pdf_date_fmt)),
                              (g = (0, ae.createBrowserTemplate)(
                                ae.TEMPLATE_DATA_BAR.key,
                                ot.record.url,
                                h,
                                0,
                                f,
                                ot.record.title,
                                ot.record.dateTime,
                                m
                              )),
                              (w = (0, ce.computeBaseOffsets)(h, 0, f, p, g, 100, [], null, 0)),
                              (y = document.createElement("canvas")),
                              (C = y.getContext("2d")),
                              (T = C.webkitBackingStorePixelRatio || C.backingStorePixelRatio || 1),
                              (S = f / T),
                              (y.width = w.outerWidth * S),
                              (y.height = w.outerHeight * S),
                              (u = w.outerHeight),
                              C.scale(S, S),
                              [4, g.draw(C, ot.record.url)])
                            : [3, 3]
                        );
                      case 2:
                        x.sent(),
                          g.textCoords && a.push((0, b.default)((0, v.default)({}, g.textCoords), { url: ot.record.url })),
                          (d = y),
                          (x.label = 3);
                      case 3:
                        return (
                          i.pdf_insert_links &&
                            s &&
                            s.store.show_experimental &&
                            ot.record.metadata.links &&
                            ((_ = ot.record.metadata.links),
                            Array.isArray(_) &&
                              (0, ue.flattenBounds)(_).forEach((e) => {
                                a.push(u ? (0, b.default)((0, v.default)({}, e), { y: e.y + u }) : e);
                              })),
                          [
                            4,
                            (0, Ze.toPDF)(
                              ot.images,
                              r,
                              ot.record.scaleMultiplier || window.devicePixelRatio || 1,
                              i.pdf_format,
                              i.pdf_smart_page && s && "sub-ok" === s.subState,
                              a,
                              oe.triggerNotifyText.creatingPDF,
                              d
                            )
                          ]
                        );
                      case 4:
                        return (
                          (k = x.sent()),
                          (R = (0, de.blobToUrl)(k)),
                          [4, (0, E.fullServiceDownload)([{ url: R, filename: t.pdfFilename }], !1, o)]
                        );
                      case 5:
                        if (((I = x.sent()), (N = I.hasPerms), (A = I.results), (L = I.failCount), (0, de.revokeObjectUrl)(R), !N))
                          throw ((($ = new Error("No downloads perm despite just getting it!")).name = "UnreachableError"), $);
                        if (L) throw A.find((e) => !1 === e.success).error;
                        return oe.triggerNotifyText.createdPDF(), [3, 10];
                      case 6:
                        return x.trys.push([6, 8, , 9]), [4, Je.default.set(tt, !0)];
                      case 7:
                        return x.sent(), [3, 9];
                      case 8:
                        return (D = x.sent()), l.default.error(D), [3, 9];
                      case 9:
                        return (
                          (ot.rejectedDl = !0),
                          (O = (0, c.tr)("Download permission is required")),
                          (P = (0, c.tr)("The download permission is required to enable the download as PDF feature.")),
                          B(O, P, !0, !0),
                          [2]
                        );
                      case 10:
                        return [2];
                    }
                  });
                });
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()
            )
            .catch((e) => {
              oe.triggerNotifyText.clear(),
                w.update(e, ot.record).then(() => {
                  if ((l.default.error("Download error", e), ye[e.name])) pt(e);
                  else {
                    let e = (0, c.tr)("Error downloading file"),
                      t = D.ERR_MSG_IF_PERSISTS;
                    B(e, t, !0, !0);
                  }
                });
            });
      },
      download: (t, r, n) => {
        d.default.event(it, n ? "download_img_as" : "download_img", r || void 0),
          e
            ._if(t)
            .then(() => (0, A.requestDownloads)())
            .then((e) => {
              if (e) {
                let e = t.fullPaths;
                return (0, E.fullServiceDownload)(e, !1, n).then((e) => {
                  let t = e.hasPerms,
                    r = e.results,
                    n = e.failCount;
                  if (!t) {
                    let e = new Error("No downloads perm despite just getting it!");
                    throw ((e.name = "UnreachableError"), e);
                  }
                  if (n) throw r.find((e) => !1 === e.success).error;
                });
              }
              {
                Je.default.set(tt, !0).catch((e) => l.default.error(e)), (ot.rejectedDl = !0);
                let e = (0, c.tr)("Download permission not granted"),
                  t = (0, c.tr)(
                    "This permission allows greater control over how downloads work within the extension. Your preference has been saved, and this download button will now fall back to default browser on-click downloads. However, you will still be prompted for it in order to use any of the advanced features on the Files or Edit pages, since they need this permissions to work."
                  );
                return void B(e, t, !1, !0);
              }
            })
            .catch((e) => {
              w.update(e, ot.record).then(() => {
                if ((l.default.error("Download error", e), ye[e.name])) pt(e);
                else {
                  let e = (0, c.tr)("Error downloading file"),
                    t = D.ERR_MSG_IF_PERSISTS;
                  B(e, t, !0, !0);
                }
              });
            });
      },
      goToUrl: (e, t) => {
        d.default.event(it, "goto_url", t || void 0);
        const r = e.url;
        window.open(r, "_blank", "noopener");
      },
      copyUrl: (e, t) => {
        d.default.event(it, "copy_url", t || void 0);
        const r = e.url;
        if (!(0, ee.canCopyTextToClipboard)()) {
          const e = nt;
          return (0, oe.triggerNotifyText)(e, 4e3), void l.default.error("Copy not supported", e);
        }
        (0, ee.copyTextToClipboard)(r)
          .then(() => {
            (0, oe.triggerNotifyText)(`✅ ${(0, c.tr)("URL copied to clipboard")}`, 3e3);
          })
          .catch((e) => {
            l.default.error("Error coping URL"),
              l.default.error(e),
              oe.triggerNotifyText.clear(),
              w.update(e, ot.record).then(() => {
                let e = D.ERR_MSG_IF_PERSISTS;
                B((0, c.tr)("Error copying URL"), e, !0, !0);
              });
          });
      },
      copyToClipboard: (e, t, r, n) => {
        let o = void 0 === r ? 0 : r,
          i = void 0 === n ? null : n;
        d.default.event(it, "copy_img", t);
        const s = e.fullPaths[o],
          a = (i && i[o]) || void 0;
        if (!(0, ee.canCopyBlobToClipboard)()) {
          const e = nt;
          return (0, oe.triggerNotifyText)(e, 4e3), void l.default.error("Copy not supported", e);
        }
        oe.triggerNotifyText.copyingImage(),
          Promise.resolve()
            .then(
              (0, k.default)(function () {
                var e, t, r;
                return (0, x.__generator)(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [4, Qe.default.load()];
                    case 1:
                      return (
                        (e = n.sent()),
                        (t = e.fit_copies ? ee.GOOGLE_DOCS_MAX_PIXELS : void 0),
                        a ? [4, (0, ee.copyImgEltToClipboard)(a.img, a.width, a.height, t)] : [3, 3]
                      );
                    case 2:
                      return (r = n.sent()), [3, 5];
                    case 3:
                      return [4, (0, ee.copyImgToClipboard)(s, t)];
                    case 4:
                      (r = n.sent()), (n.label = 5);
                    case 5:
                      return (0, l.default)("Copied image" + (r ? " (RESIZED)" : "")), oe.triggerNotifyText.copiedImage(r), [2];
                  }
                });
              })
            )
            .catch((e) => {
              l.default.error("Error coping image"),
                l.default.error(e),
                oe.triggerNotifyText.clear(),
                w.update(e, ot.record).then(() => {
                  B(D.ERR_TITLE_COPY, D.ERR_MSG_COPY + "\n\n" + D.ERR_MSG_IF_PERSISTS, !1, !0);
                });
            });
      },
      openInTabs: (t, r) => {
        d.default.event(it, "expand", r || void 0),
          e
            ._if(t)
            .then(() => me())
            .then((e) => ge(e, t.fullPaths))
            .catch((e) => {
              (0, l.default)("Error opening file in tabs", e),
                w.update(e, ot.record).then(() => {
                  let e = (0, c.tr)("Something went wrong opening this screenshot into a new.") + " " + D.ERR_MSG_IF_PERSISTS;
                  B((0, c.tr)("Error opening screenshot"), e, !0, !0);
                });
            });
      },
      remove: (t, r) => {
        d.default.event(it, "remove", r || void 0);
        let n = (0, c.tr)("Are you sure you want to delete this screenshot?\n(This action cannot be undone.)");
        confirm(n) &&
          e
            ._if(t)
            .then(() => t.remove())
            .then(() =>
              (function () {
                ut();
                let e = (0, $.$)("image");
                $.$.empty(e), B((0, c.tr)("Image deleted"), (0, c.tr)("This screenshot been successfully removed."));
              })()
            )
            .catch((e) => {
              (0, l.default)("Error removing file", e),
                w.update(e, ot.record).then(() => {
                  let e = (0, c.tr)("Something went wrong deleting your screenshot.") + " " + D.ERR_MSG_IF_PERSISTS;
                  B((0, c.tr)("Error removing screenshot"), e, !0, !0);
                });
            });
      },
      goToEditor: (e, t) => {
        let r = void 0 === t ? 0 : t;
        d.default.event(it, "goto_editor", e || void 0), ot.record && (window.location = ot.record.getEditorURL(r));
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
  function ht(e) {
    const t = ot.record ? ot.record.scaleMultiplier : window.devicePixelRatio || 1;
    return 1 !== t ? e / t : e;
  }
  function pt(e) {
    let t = ye[e.name];
    if ((B(t.title, t.body, !1, !0, !0), t.buttons)) {
      let e = document.createElement("div");
      (e.className = B.extrasClassName),
        t.buttons().forEach((t) => {
          e.appendChild(t);
        }),
        (0, $.$)("error-body").appendChild(e);
    }
  }
  d.default.pageview(),
    ((e) => {
      let t = void 0 !== e && e;
      if (null === y) {
        const e = document.createElement("a");
        (e.style.cssText = "position: sticky;"), (y = -1 !== e.style.position.indexOf("sticky"));
      }
      y && t && document.documentElement.classList.add("csspositionsticky");
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
  let mt = (0, E.getQueryString)();
  const gt = (e) => {
    l.default.error("Migration error", e),
      w.update(e).then(() => {
        B("Data Error", "The page encountered an error. Please report this via the the flag reporting button above.", !0, !1);
      });
  };
  var wt, yt;
  mt.src
    ? ((yt = mt.src),
      L.Capture.findSrc(yt)
        .then((e) => {
          window.location = e ? e.displayURL : "?";
        })
        .catch((e) => {
          l.default.error("lookup Image src error", e),
            w.update(e).then(() => {
              B((0, c.tr)("Unable to find image"), (0, c.tr)("The specified image could not be found.") + " " + D.ERR_MSG_IF_PERSISTS);
            });
        }))
    : mt.id
    ? ((wt = mt.id),
      document.documentElement.classList.add("page-image"),
      at(),
      st(),
      L.Capture.lookup(wt)
        .then((e) => {
          if (!e) return l.default.error("lookup, no record found", wt), B((0, c.tr)("Unable to load image"), rt);
          (ot.record = e),
            w.update(void 0, ot.record),
            e.format && ((0, $.$)("btn-download").getElementsByClassName("image-type")[0].innerText = `(${e.format.toUpperCase()})`),
            $.$.findClass("editor-link").forEach((t) => {
              t.href = e.getEditorURL();
            });
          const t = (0, $.$)("btn-editor-wrap");
          if (t && e.images && e.images.length > 0) {
            const r = "hov-dropdown";
            let n = $.$.findClass("hov-dropdown", t)[0];
            if (
              (n && n.parentNode.removeChild(n),
              $.$.findClass("tooltip", t).forEach((e) => {
                e.classList.remove("hide");
              }),
              e.images.length > 1)
            ) {
              $.$.findClass("tooltip", t).forEach((e) => {
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
                        d.default.event(it, "goto_editor", "multi-dropdown");
                      },
                      !1
                    ),
                    (s.textContent = `${(0, c.tr)("Edit Image")} ${n + 1}`),
                    0 === n)
                  ) {
                    const e = document.createElement("span");
                    (e.className = "hov-dropdown--shortcut"), (e.textContent = re({ cmd: !0, char: "E" })), s.prepend(e);
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
            We ||
              ((We = !0),
              Ve(r).catch((e) => {
                l.default.error("CAUGHT ERROR in hit.load chain"), l.default.error(e);
              })),
            z()
              .then(() => ct(e.fullPaths, lt))
              .then((e) => {
                let t = e.images;
                return e.didTimeout && H(), dt(t);
              })
              .then(() => q())
              .catch((e) => {
                q().catch((e) => l.default.error(e)),
                  l.default.error("loadImages error", e),
                  w.update(e, ot.record).then(() => {
                    B((0, c.tr)("Unable to load image"), rt);
                  });
              })
          );
        })
        .catch((e) => {
          l.default.error("Failed lookup", wt, e),
            w.update(e, ot.record).then(() => {
              B((0, c.tr)("Error loading image"), D.ERR_MSG_IF_PERSISTS, !0, !1);
            });
        }))
        .then(m)
        .catch(gt)
    : (document.documentElement.classList.add("page-history"),
      u.default.onUpdated((e) => {
        "MIGRATION" === e.source && e.isDone && G();
      }),
      (function () {
        const e = O(),
          t = e.editor || e.capture;
        t &&
          $.$.findClass("back-button").forEach((e) => {
            P(e, t, !0);
          }),
          P((0, $.$)("btn-settings"), e.options),
          P((0, $.$)("btn-history"), e.history);
      })(),
      z().then(G).then(q))
        .then(m)
        .catch(gt);
})();
//# sourceMappingURL=capture.ab29061b.js.map
