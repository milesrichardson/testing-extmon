!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define([], t)
    : "object" == typeof exports
    ? (exports.axios = t())
    : (e.axios = t());
})(this, function () {
  return (function (e) {
    var t = {};
    function r(n) {
      if (t[n]) return t[n].exports;
      var o = (t[n] = { exports: {}, id: n, loaded: !1 });
      return e[n].call(o.exports, o, o.exports, r), (o.loaded = !0), o.exports;
    }
    return (r.m = e), (r.c = t), (r.p = ""), r(0);
  })([
    function (e, t, r) {
      e.exports = r(1);
    },
    function (e, t, r) {
      "use strict";
      var n = r(2),
        o = r(3),
        i = r(4),
        s = r(12),
        u = (e.exports = function (e) {
          "string" == typeof e && (e = o.merge({ url: arguments[0] }, arguments[1])),
            ((e = o.merge(
              {
                method: "get",
                headers: {},
                timeout: n.timeout,
                transformRequest: n.transformRequest,
                transformResponse: n.transformResponse
              },
              e
            )).withCredentials = e.withCredentials || n.withCredentials);
          var t = [i, void 0],
            r = Promise.resolve(e);
          for (
            u.interceptors.request.forEach(function (e) {
              t.unshift(e.fulfilled, e.rejected);
            }),
              u.interceptors.response.forEach(function (e) {
                t.push(e.fulfilled, e.rejected);
              });
            t.length;

          )
            r = r.then(t.shift(), t.shift());
          return r;
        });
      (u.defaults = n),
        (u.all = function (e) {
          return Promise.all(e);
        }),
        (u.spread = r(13)),
        (u.interceptors = { request: new s(), response: new s() }),
        (function () {
          o.forEach(arguments, function (e) {
            u[e] = function (t, r) {
              return u(o.merge(r || {}, { method: e, url: t }));
            };
          });
        })("delete", "get", "head"),
        (function () {
          o.forEach(arguments, function (e) {
            u[e] = function (t, r, n) {
              return u(o.merge(n || {}, { method: e, url: t, data: r }));
            };
          });
        })("post", "put", "patch");
    },
    function (e, t, r) {
      "use strict";
      var n = r(3),
        o = /^\)\]\}',?\n/,
        i = { "Content-Type": "application/json" };
      e.exports = {
        transformRequest: [
          function (e, t) {
            return n.isFormData(e) || n.isArrayBuffer(e)
              ? e
              : n.isArrayBufferView(e)
              ? e.buffer
              : !n.isObject(e) || n.isFile(e) || n.isBlob(e)
              ? e
              : (n.isUndefined(t) ||
                  (n.forEach(t, function (e, r) {
                    "content-type" === r.toLowerCase() && (t["Content-Type"] = e);
                  }),
                  n.isUndefined(t["Content-Type"]) && (t["Content-Type"] = "application/json;charset=utf-8")),
                JSON.stringify(e));
          }
        ],
        transformResponse: [
          function (e) {
            if ("string" == typeof e) {
              e = e.replace(o, "");
              try {
                e = JSON.parse(e);
              } catch (e) {}
            }
            return e;
          }
        ],
        headers: { common: { Accept: "application/json, text/plain, */*" }, patch: n.merge(i), post: n.merge(i), put: n.merge(i) },
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN"
      };
    },
    function (e, t) {
      "use strict";
      var r = Object.prototype.toString;
      function n(e) {
        return "[object Array]" === r.call(e);
      }
      function o(e, t) {
        if (null != e) {
          var o,
            i = n(e) || ((o = e), "[object Arguments]" === r.call(o));
          if (("object" == typeof e || i || (e = [e]), i)) for (var s = 0, u = e.length; s < u; s++) t.call(null, e[s], s, e);
          else for (var a in e) e.hasOwnProperty(a) && t.call(null, e[a], a, e);
        }
      }
      e.exports = {
        isArray: n,
        isArrayBuffer: function (e) {
          return "[object ArrayBuffer]" === r.call(e);
        },
        isFormData: function (e) {
          return "[object FormData]" === r.call(e);
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
        isObject: function (e) {
          return null !== e && "object" == typeof e;
        },
        isUndefined: function (e) {
          return void 0 === e;
        },
        isDate: function (e) {
          return "[object Date]" === r.call(e);
        },
        isFile: function (e) {
          return "[object File]" === r.call(e);
        },
        isBlob: function (e) {
          return "[object Blob]" === r.call(e);
        },
        isStandardBrowserEnv: function () {
          return "undefined" != typeof window && "undefined" != typeof document && "function" == typeof document.createElement;
        },
        forEach: o,
        merge: function () {
          var e = {};
          return (
            o(arguments, function (t) {
              o(t, function (t, r) {
                e[r] = t;
              });
            }),
            e
          );
        },
        trim: function (e) {
          return e.replace(/^\s*/, "").replace(/\s*$/, "");
        }
      };
    },
    function (e, t, r) {
      (function (t) {
        "use strict";
        e.exports = function (e) {
          return new Promise(function (n, o) {
            try {
              ("undefined" != typeof XMLHttpRequest || "undefined" != typeof ActiveXObject || void 0 !== t) && r(6)(n, o, e);
            } catch (e) {
              o(e);
            }
          });
        };
      }).call(t, r(5));
    },
    function (e, t) {
      var r,
        n = (e.exports = {}),
        o = [],
        i = !1,
        s = -1;
      function u() {
        (i = !1), r.length ? (o = r.concat(o)) : (s = -1), o.length && a();
      }
      function a() {
        if (!i) {
          var e = setTimeout(u);
          i = !0;
          for (var t = o.length; t; ) {
            for (r = o, o = []; ++s < t; ) r && r[s].run();
            (s = -1), (t = o.length);
          }
          (r = null), (i = !1), clearTimeout(e);
        }
      }
      function c(e, t) {
        (this.fun = e), (this.array = t);
      }
      function f() {}
      (n.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        o.push(new c(e, t)), 1 !== o.length || i || setTimeout(a, 0);
      }),
        (c.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (n.title = "browser"),
        (n.browser = !0),
        (n.env = {}),
        (n.argv = []),
        (n.version = ""),
        (n.versions = {}),
        (n.on = f),
        (n.addListener = f),
        (n.once = f),
        (n.off = f),
        (n.removeListener = f),
        (n.removeAllListeners = f),
        (n.emit = f),
        (n.binding = function (e) {
          throw new Error("process.binding is not supported");
        }),
        (n.cwd = function () {
          return "/";
        }),
        (n.chdir = function (e) {
          throw new Error("process.chdir is not supported");
        }),
        (n.umask = function () {
          return 0;
        });
    },
    function (e, t, r) {
      "use strict";
      var n = r(2),
        o = r(3),
        i = r(7),
        s = r(8),
        u = r(9);
      e.exports = function (e, t, a) {
        var c = u(a.data, a.headers, a.transformRequest),
          f = o.merge(n.headers.common, n.headers[a.method] || {}, a.headers || {});
        o.isFormData(c);
        var p = new (XMLHttpRequest || ActiveXObject)("Microsoft.XMLHTTP");
        if (
          (p.open(a.method.toUpperCase(), i(a.url, a.params), !0),
          (p.timeout = a.timeout),
          (p.onreadystatechange = function () {
            if (p && 4 === p.readyState) {
              var r = s(p.getAllResponseHeaders()),
                n = -1 !== ["text", ""].indexOf(a.responseType || "") ? p.responseText : p.response,
                o = { data: u(n, r, a.transformResponse), status: p.status, statusText: p.statusText, headers: r, config: a };
              (p.status >= 200 && p.status < 300 ? e : t)(o), (p = null);
            }
          }),
          o.isStandardBrowserEnv())
        ) {
          var l = r(10),
            h = r(11)(a.url) ? l.read(a.xsrfCookieName || n.xsrfCookieName) : void 0;
          h && (f[a.xsrfHeaderName || n.xsrfHeaderName] = h);
        }
        if (
          (o.forEach(f, function (e, t) {
            c || "content-type" !== t.toLowerCase() ? p.setRequestHeader(t, e) : delete f[t];
          }),
          a.withCredentials && (p.withCredentials = !0),
          a.responseType)
        )
          try {
            p.responseType = a.responseType;
          } catch (e) {
            if ("json" !== p.responseType) throw e;
          }
        o.isArrayBuffer(c) && (c = new DataView(c)), p.send(c);
      };
    },
    function (e, t, r) {
      "use strict";
      var n = r(3);
      function o(e) {
        return encodeURIComponent(e)
          .replace(/%40/gi, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      e.exports = function (e, t) {
        if (!t) return e;
        var r = [];
        return (
          n.forEach(t, function (e, t) {
            null != e &&
              (n.isArray(e) && (t += "[]"),
              n.isArray(e) || (e = [e]),
              n.forEach(e, function (e) {
                n.isDate(e) ? (e = e.toISOString()) : n.isObject(e) && (e = JSON.stringify(e)), r.push(o(t) + "=" + o(e));
              }));
          }),
          r.length > 0 && (e += (-1 === e.indexOf("?") ? "?" : "&") + r.join("&")),
          e
        );
      };
    },
    function (e, t, r) {
      "use strict";
      var n = r(3);
      e.exports = function (e) {
        var t,
          r,
          o,
          i = {};
        return e
          ? (n.forEach(e.split("\n"), function (e) {
              (o = e.indexOf(":")),
                (t = n.trim(e.substr(0, o)).toLowerCase()),
                (r = n.trim(e.substr(o + 1))),
                t && (i[t] = i[t] ? i[t] + ", " + r : r);
            }),
            i)
          : i;
      };
    },
    function (e, t, r) {
      "use strict";
      var n = r(3);
      e.exports = function (e, t, r) {
        return (
          n.forEach(r, function (r) {
            e = r(e, t);
          }),
          e
        );
      };
    },
    function (e, t, r) {
      "use strict";
      var n = r(3);
      e.exports = {
        write: function (e, t, r, o, i, s) {
          var u = [];
          u.push(e + "=" + encodeURIComponent(t)),
            n.isNumber(r) && u.push("expires=" + new Date(r).toGMTString()),
            n.isString(o) && u.push("path=" + o),
            n.isString(i) && u.push("domain=" + i),
            !0 === s && u.push("secure"),
            (document.cookie = u.join("; "));
        },
        read: function (e) {
          var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove: function (e) {
          this.write(e, "", Date.now() - 864e5);
        }
      };
    },
    function (e, t, r) {
      "use strict";
      var n,
        o = r(3),
        i = /(msie|trident)/i.test(navigator.userAgent),
        s = document.createElement("a");
      function u(e) {
        var t = e;
        return (
          i && (s.setAttribute("href", t), (t = s.href)),
          s.setAttribute("href", t),
          {
            href: s.href,
            protocol: s.protocol ? s.protocol.replace(/:$/, "") : "",
            host: s.host,
            search: s.search ? s.search.replace(/^\?/, "") : "",
            hash: s.hash ? s.hash.replace(/^#/, "") : "",
            hostname: s.hostname,
            port: s.port,
            pathname: "/" === s.pathname.charAt(0) ? s.pathname : "/" + s.pathname
          }
        );
      }
      (n = u(window.location.href)),
        (e.exports = function (e) {
          var t = o.isString(e) ? u(e) : e;
          return t.protocol === n.protocol && t.host === n.host;
        });
    },
    function (e, t, r) {
      "use strict";
      var n = r(3);
      function o() {
        this.handlers = [];
      }
      (o.prototype.use = function (e, t) {
        return this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1;
      }),
        (o.prototype.eject = function (e) {
          this.handlers[e] && (this.handlers[e] = null);
        }),
        (o.prototype.forEach = function (e) {
          n.forEach(this.handlers, function (t) {
            null !== t && e(t);
          });
        }),
        (e.exports = o);
    },
    function (e, t) {
      "use strict";
      e.exports = function (e) {
        return function (t) {
          return e.apply(null, t);
        };
      };
    }
  ]);
});
