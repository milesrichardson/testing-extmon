!(function () {
  var e,
    t,
    n = "https://web.kamihq.com",
    i = "https://web.kamihq.com/api";
  (e = this),
    (t = function () {
      return (function (e) {
        function t(i) {
          if (n[i]) return n[i].exports;
          var r = (n[i] = { exports: {}, id: i, loaded: !1 });
          return e[i].call(r.exports, r, r.exports, t), (r.loaded = !0), r.exports;
        }
        var n = {};
        return (t.m = e), (t.c = n), (t.p = ""), t(0);
      })([
        function (e, t, n) {
          e.exports = n(1);
        },
        function (e, t, n) {
          "use strict";
          function i(e) {
            var t = new a(e),
              n = o(a.prototype.request, t);
            return r.extend(n, a.prototype, t), r.extend(n, t), n;
          }
          var r = n(2),
            o = n(3),
            a = n(4),
            s = n(22),
            c = i(n(10));
          (c.Axios = a),
            (c.create = function (e) {
              return i(s(c.defaults, e));
            }),
            (c.Cancel = n(23)),
            (c.CancelToken = n(24)),
            (c.isCancel = n(9)),
            (c.all = function (e) {
              return Promise.all(e);
            }),
            (c.spread = n(25)),
            (c.isAxiosError = n(26)),
            (e.exports = c),
            (e.exports.default = c);
        },
        function (e, t, n) {
          "use strict";
          function i(e) {
            return "[object Array]" === l.call(e);
          }
          function r(e) {
            return void 0 === e;
          }
          function o(e) {
            return null !== e && "object" == typeof e;
          }
          function a(e) {
            if ("[object Object]" !== l.call(e)) return !1;
            var t = Object.getPrototypeOf(e);
            return null === t || t === Object.prototype;
          }
          function s(e) {
            return "[object Function]" === l.call(e);
          }
          function c(e, t) {
            if (null != e)
              if (("object" != typeof e && (e = [e]), i(e))) for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
              else for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e);
          }
          var u = n(3),
            l = Object.prototype.toString;
          e.exports = {
            isArray: i,
            isArrayBuffer: function (e) {
              return "[object ArrayBuffer]" === l.call(e);
            },
            isBuffer: function (e) {
              return (
                null !== e &&
                !r(e) &&
                null !== e.constructor &&
                !r(e.constructor) &&
                "function" == typeof e.constructor.isBuffer &&
                e.constructor.isBuffer(e)
              );
            },
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
            isObject: o,
            isPlainObject: a,
            isUndefined: r,
            isDate: function (e) {
              return "[object Date]" === l.call(e);
            },
            isFile: function (e) {
              return "[object File]" === l.call(e);
            },
            isBlob: function (e) {
              return "[object Blob]" === l.call(e);
            },
            isFunction: s,
            isStream: function (e) {
              return o(e) && s(e.pipe);
            },
            isURLSearchParams: function (e) {
              return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams;
            },
            isStandardBrowserEnv: function () {
              return (
                ("undefined" == typeof navigator ||
                  ("ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product)) &&
                "undefined" != typeof window &&
                "undefined" != typeof document
              );
            },
            forEach: c,
            merge: function e() {
              function t(t, r) {
                a(n[r]) && a(t) ? (n[r] = e(n[r], t)) : a(t) ? (n[r] = e({}, t)) : i(t) ? (n[r] = t.slice()) : (n[r] = t);
              }
              for (var n = {}, r = 0, o = arguments.length; r < o; r++) c(arguments[r], t);
              return n;
            },
            extend: function (e, t, n) {
              return (
                c(t, function (t, i) {
                  e[i] = n && "function" == typeof t ? u(t, n) : t;
                }),
                e
              );
            },
            trim: function (e) {
              return e.replace(/^\s*/, "").replace(/\s*$/, "");
            },
            stripBOM: function (e) {
              return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
            }
          };
        },
        function (e, t) {
          "use strict";
          e.exports = function (e, t) {
            return function () {
              for (var n = new Array(arguments.length), i = 0; i < n.length; i++) n[i] = arguments[i];
              return e.apply(t, n);
            };
          };
        },
        function (e, t, n) {
          "use strict";
          function i(e) {
            (this.defaults = e), (this.interceptors = { request: new a(), response: new a() });
          }
          var r = n(2),
            o = n(5),
            a = n(6),
            s = n(7),
            c = n(22);
          (i.prototype.request = function (e) {
            "string" == typeof e ? ((e = arguments[1] || {}).url = arguments[0]) : (e = e || {}),
              (e = c(this.defaults, e)).method
                ? (e.method = e.method.toLowerCase())
                : this.defaults.method
                ? (e.method = this.defaults.method.toLowerCase())
                : (e.method = "get");
            var t = [s, void 0],
              n = Promise.resolve(e);
            for (
              this.interceptors.request.forEach(function (e) {
                t.unshift(e.fulfilled, e.rejected);
              }),
                this.interceptors.response.forEach(function (e) {
                  t.push(e.fulfilled, e.rejected);
                });
              t.length;

            )
              n = n.then(t.shift(), t.shift());
            return n;
          }),
            (i.prototype.getUri = function (e) {
              return (e = c(this.defaults, e)), o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "");
            }),
            r.forEach(["delete", "get", "head", "options"], function (e) {
              i.prototype[e] = function (t, n) {
                return this.request(c(n || {}, { method: e, url: t, data: (n || {}).data }));
              };
            }),
            r.forEach(["post", "put", "patch"], function (e) {
              i.prototype[e] = function (t, n, i) {
                return this.request(c(i || {}, { method: e, url: t, data: n }));
              };
            }),
            (e.exports = i);
        },
        function (e, t, n) {
          "use strict";
          function i(e) {
            return encodeURIComponent(e)
              .replace(/%3A/gi, ":")
              .replace(/%24/g, "$")
              .replace(/%2C/gi, ",")
              .replace(/%20/g, "+")
              .replace(/%5B/gi, "[")
              .replace(/%5D/gi, "]");
          }
          var r = n(2);
          e.exports = function (e, t, n) {
            if (!t) return e;
            var o;
            if (n) o = n(t);
            else if (r.isURLSearchParams(t)) o = t.toString();
            else {
              var a = [];
              r.forEach(t, function (e, t) {
                null != e &&
                  (r.isArray(e) ? (t += "[]") : (e = [e]),
                  r.forEach(e, function (e) {
                    r.isDate(e) ? (e = e.toISOString()) : r.isObject(e) && (e = JSON.stringify(e)), a.push(i(t) + "=" + i(e));
                  }));
              }),
                (o = a.join("&"));
            }
            if (o) {
              var s = e.indexOf("#");
              -1 !== s && (e = e.slice(0, s)), (e += (-1 === e.indexOf("?") ? "?" : "&") + o);
            }
            return e;
          };
        },
        function (e, t, n) {
          "use strict";
          function i() {
            this.handlers = [];
          }
          var r = n(2);
          (i.prototype.use = function (e, t) {
            return this.handlers.push({ fulfilled: e, rejected: t }), this.handlers.length - 1;
          }),
            (i.prototype.eject = function (e) {
              this.handlers[e] && (this.handlers[e] = null);
            }),
            (i.prototype.forEach = function (e) {
              r.forEach(this.handlers, function (t) {
                null !== t && e(t);
              });
            }),
            (e.exports = i);
        },
        function (e, t, n) {
          "use strict";
          function i(e) {
            e.cancelToken && e.cancelToken.throwIfRequested();
          }
          var r = n(2),
            o = n(8),
            a = n(9),
            s = n(10);
          e.exports = function (e) {
            return (
              i(e),
              (e.headers = e.headers || {}),
              (e.data = o(e.data, e.headers, e.transformRequest)),
              (e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers)),
              r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (t) {
                delete e.headers[t];
              }),
              (e.adapter || s.adapter)(e).then(
                function (t) {
                  return i(e), (t.data = o(t.data, t.headers, e.transformResponse)), t;
                },
                function (t) {
                  return (
                    a(t) || (i(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))),
                    Promise.reject(t)
                  );
                }
              )
            );
          };
        },
        function (e, t, n) {
          "use strict";
          var i = n(2);
          e.exports = function (e, t, n) {
            return (
              i.forEach(n, function (n) {
                e = n(e, t);
              }),
              e
            );
          };
        },
        function (e, t) {
          "use strict";
          e.exports = function (e) {
            return !(!e || !e.__CANCEL__);
          };
        },
        function (e, t, n) {
          "use strict";
          function i(e, t) {
            !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t);
          }
          var r = n(2),
            o = n(11),
            a = { "Content-Type": "application/x-www-form-urlencoded" },
            s = {
              adapter: (function () {
                var e;
                return (
                  ("undefined" != typeof XMLHttpRequest ||
                    ("undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process))) &&
                    (e = n(12)),
                  e
                );
              })(),
              transformRequest: [
                function (e, t) {
                  return (
                    o(t, "Accept"),
                    o(t, "Content-Type"),
                    r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e)
                      ? e
                      : r.isArrayBufferView(e)
                      ? e.buffer
                      : r.isURLSearchParams(e)
                      ? (i(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString())
                      : r.isObject(e)
                      ? (i(t, "application/json;charset=utf-8"), JSON.stringify(e))
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
              maxBodyLength: -1,
              validateStatus: function (e) {
                return e >= 200 && e < 300;
              },
              headers: { common: { Accept: "application/json, text/plain, */*" } }
            };
          r.forEach(["delete", "get", "head"], function (e) {
            s.headers[e] = {};
          }),
            r.forEach(["post", "put", "patch"], function (e) {
              s.headers[e] = r.merge(a);
            }),
            (e.exports = s);
        },
        function (e, t, n) {
          "use strict";
          var i = n(2);
          e.exports = function (e, t) {
            i.forEach(e, function (n, i) {
              i !== t && i.toUpperCase() === t.toUpperCase() && ((e[t] = n), delete e[i]);
            });
          };
        },
        function (e, t, n) {
          "use strict";
          var i = n(2),
            r = n(13),
            o = n(16),
            a = n(5),
            s = n(17),
            c = n(20),
            u = n(21),
            l = n(14);
          e.exports = function (e) {
            return new Promise(function (t, n) {
              var d = e.data,
                p = e.headers;
              i.isFormData(d) && delete p["Content-Type"];
              var h = new XMLHttpRequest();
              if (e.auth) {
                var f = e.auth.username || "",
                  m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                p.Authorization = "Basic " + btoa(f + ":" + m);
              }
              var g = s(e.baseURL, e.url);
              if (
                (h.open(e.method.toUpperCase(), a(g, e.params, e.paramsSerializer), !0),
                (h.timeout = e.timeout),
                (h.onreadystatechange = function () {
                  if (h && 4 === h.readyState && (0 !== h.status || (h.responseURL && 0 === h.responseURL.indexOf("file:")))) {
                    var i = "getAllResponseHeaders" in h ? c(h.getAllResponseHeaders()) : null,
                      o = {
                        data: e.responseType && "text" !== e.responseType ? h.response : h.responseText,
                        status: h.status,
                        statusText: h.statusText,
                        headers: i,
                        config: e,
                        request: h
                      };
                    r(t, n, o), (h = null);
                  }
                }),
                (h.onabort = function () {
                  h && (n(l("Request aborted", e, "ECONNABORTED", h)), (h = null));
                }),
                (h.onerror = function () {
                  n(l("Network Error", e, null, h)), (h = null);
                }),
                (h.ontimeout = function () {
                  var t = "timeout of " + e.timeout + "ms exceeded";
                  e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(l(t, e, "ECONNABORTED", h)), (h = null);
                }),
                i.isStandardBrowserEnv())
              ) {
                var y = (e.withCredentials || u(g)) && e.xsrfCookieName ? o.read(e.xsrfCookieName) : void 0;
                y && (p[e.xsrfHeaderName] = y);
              }
              if (
                ("setRequestHeader" in h &&
                  i.forEach(p, function (e, t) {
                    void 0 === d && "content-type" === t.toLowerCase() ? delete p[t] : h.setRequestHeader(t, e);
                  }),
                i.isUndefined(e.withCredentials) || (h.withCredentials = !!e.withCredentials),
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
                    h && (h.abort(), n(e), (h = null));
                  }),
                d || (d = null),
                h.send(d);
            });
          };
        },
        function (e, t, n) {
          "use strict";
          var i = n(14);
          e.exports = function (e, t, n) {
            var r = n.config.validateStatus;
            n.status && r && !r(n.status) ? t(i("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n);
          };
        },
        function (e, t, n) {
          "use strict";
          var i = n(15);
          e.exports = function (e, t, n, r, o) {
            var a = new Error(e);
            return i(a, t, n, r, o);
          };
        },
        function (e, t) {
          "use strict";
          e.exports = function (e, t, n, i, r) {
            return (
              (e.config = t),
              n && (e.code = n),
              (e.request = i),
              (e.response = r),
              (e.isAxiosError = !0),
              (e.toJSON = function () {
                return {
                  message: this.message,
                  name: this.name,
                  description: this.description,
                  number: this.number,
                  fileName: this.fileName,
                  lineNumber: this.lineNumber,
                  columnNumber: this.columnNumber,
                  stack: this.stack,
                  config: this.config,
                  code: this.code
                };
              }),
              e
            );
          };
        },
        function (e, t, n) {
          "use strict";
          var i = n(2);
          e.exports = i.isStandardBrowserEnv()
            ? {
                write: function (e, t, n, r, o, a) {
                  var s = [];
                  s.push(e + "=" + encodeURIComponent(t)),
                    i.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
                    i.isString(r) && s.push("path=" + r),
                    i.isString(o) && s.push("domain=" + o),
                    !0 === a && s.push("secure"),
                    (document.cookie = s.join("; "));
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
        },
        function (e, t, n) {
          "use strict";
          var i = n(18),
            r = n(19);
          e.exports = function (e, t) {
            return e && !i(t) ? r(e, t) : t;
          };
        },
        function (e, t) {
          "use strict";
          e.exports = function (e) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
          };
        },
        function (e, t) {
          "use strict";
          e.exports = function (e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
          };
        },
        function (e, t, n) {
          "use strict";
          var i = n(2),
            r = [
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
              n,
              o,
              a = {};
            return e
              ? (i.forEach(e.split("\n"), function (e) {
                  if (((o = e.indexOf(":")), (t = i.trim(e.substr(0, o)).toLowerCase()), (n = i.trim(e.substr(o + 1))), t)) {
                    if (a[t] && r.indexOf(t) >= 0) return;
                    a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([n]) : a[t] ? a[t] + ", " + n : n;
                  }
                }),
                a)
              : a;
          };
        },
        function (e, t, n) {
          "use strict";
          var i = n(2);
          e.exports = i.isStandardBrowserEnv()
            ? (function () {
                function e(e) {
                  var t = e;
                  return (
                    n && (r.setAttribute("href", t), (t = r.href)),
                    r.setAttribute("href", t),
                    {
                      href: r.href,
                      protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                      host: r.host,
                      search: r.search ? r.search.replace(/^\?/, "") : "",
                      hash: r.hash ? r.hash.replace(/^#/, "") : "",
                      hostname: r.hostname,
                      port: r.port,
                      pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname
                    }
                  );
                }
                var t,
                  n = /(msie|trident)/i.test(navigator.userAgent),
                  r = document.createElement("a");
                return (
                  (t = e(window.location.href)),
                  function (n) {
                    var r = i.isString(n) ? e(n) : n;
                    return r.protocol === t.protocol && r.host === t.host;
                  }
                );
              })()
            : function () {
                return !0;
              };
        },
        function (e, t, n) {
          "use strict";
          var i = n(2);
          e.exports = function (e, t) {
            function n(e, t) {
              return i.isPlainObject(e) && i.isPlainObject(t)
                ? i.merge(e, t)
                : i.isPlainObject(t)
                ? i.merge({}, t)
                : i.isArray(t)
                ? t.slice()
                : t;
            }
            function r(r) {
              i.isUndefined(t[r]) ? i.isUndefined(e[r]) || (o[r] = n(void 0, e[r])) : (o[r] = n(e[r], t[r]));
            }
            t = t || {};
            var o = {},
              a = ["url", "method", "data"],
              s = ["headers", "auth", "proxy", "params"],
              c = [
                "baseURL",
                "transformRequest",
                "transformResponse",
                "paramsSerializer",
                "timeout",
                "timeoutMessage",
                "withCredentials",
                "adapter",
                "responseType",
                "xsrfCookieName",
                "xsrfHeaderName",
                "onUploadProgress",
                "onDownloadProgress",
                "decompress",
                "maxContentLength",
                "maxBodyLength",
                "maxRedirects",
                "transport",
                "httpAgent",
                "httpsAgent",
                "cancelToken",
                "socketPath",
                "responseEncoding"
              ],
              u = ["validateStatus"];
            i.forEach(a, function (e) {
              i.isUndefined(t[e]) || (o[e] = n(void 0, t[e]));
            }),
              i.forEach(s, r),
              i.forEach(c, function (r) {
                i.isUndefined(t[r]) ? i.isUndefined(e[r]) || (o[r] = n(void 0, e[r])) : (o[r] = n(void 0, t[r]));
              }),
              i.forEach(u, function (i) {
                i in t ? (o[i] = n(e[i], t[i])) : i in e && (o[i] = n(void 0, e[i]));
              });
            var l = a.concat(s).concat(c).concat(u),
              d = Object.keys(e)
                .concat(Object.keys(t))
                .filter(function (e) {
                  return -1 === l.indexOf(e);
                });
            return i.forEach(d, r), o;
          };
        },
        function (e, t) {
          "use strict";
          function n(e) {
            this.message = e;
          }
          (n.prototype.toString = function () {
            return "Cancel" + (this.message ? ": " + this.message : "");
          }),
            (n.prototype.__CANCEL__ = !0),
            (e.exports = n);
        },
        function (e, t, n) {
          "use strict";
          function i(e) {
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
          var r = n(23);
          (i.prototype.throwIfRequested = function () {
            if (this.reason) throw this.reason;
          }),
            (i.source = function () {
              var e;
              return {
                token: new i(function (t) {
                  e = t;
                }),
                cancel: e
              };
            }),
            (e.exports = i);
        },
        function (e, t) {
          "use strict";
          e.exports = function (e) {
            return function (t) {
              return e.apply(null, t);
            };
          };
        },
        function (e, t) {
          "use strict";
          e.exports = function (e) {
            return "object" == typeof e && !0 === e.isAxiosError;
          };
        }
      ]);
    }),
    "object" == typeof exports && "object" == typeof module
      ? (module.exports = t())
      : "function" == typeof define && define.amd
      ? define([], t)
      : "object" == typeof exports
      ? (exports.axios = t())
      : (e.axios = t()),
    (function (e) {
      if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
      else if ("function" == typeof define && define.amd) define([], e);
      else {
        ("undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : this
        ).ProgressBar = e();
      }
    })(function () {
      return (function e(t, n, i) {
        function r(a, s) {
          if (!n[a]) {
            if (!t[a]) {
              var c = "function" == typeof require && require;
              if (!s && c) return c(a, !0);
              if (o) return o(a, !0);
              var u = new Error("Cannot find module '" + a + "'");
              throw ((u.code = "MODULE_NOT_FOUND"), u);
            }
            var l = (n[a] = { exports: {} });
            t[a][0].call(
              l.exports,
              function (e) {
                var n = t[a][1][e];
                return r(n || e);
              },
              l,
              l.exports,
              e,
              t,
              n,
              i
            );
          }
          return n[a].exports;
        }
        for (var o = "function" == typeof require && require, a = 0; a < i.length; a++) r(i[a]);
        return r;
      })(
        {
          1: [
            function (e, t, n) {
              (function () {
                var e = this || Function("return this")(),
                  i = (function () {
                    "use strict";
                    function i() {}
                    function r(e, t) {
                      var n;
                      for (n in e) Object.hasOwnProperty.call(e, n) && t(n);
                    }
                    function o(e, t) {
                      return (
                        r(t, function (n) {
                          e[n] = t[n];
                        }),
                        e
                      );
                    }
                    function a(e, t) {
                      r(t, function (n) {
                        void 0 === e[n] && (e[n] = t[n]);
                      });
                    }
                    function s(e, t, n, i, r, o, a) {
                      var s,
                        u,
                        l,
                        d = e < o ? 0 : (e - o) / r;
                      for (s in t) t.hasOwnProperty(s) && ((l = "function" == typeof (u = a[s]) ? u : h[u]), (t[s] = c(n[s], i[s], l, d)));
                      return t;
                    }
                    function c(e, t, n, i) {
                      return e + (t - e) * n(i);
                    }
                    function u(e, t) {
                      var n = p.prototype.filter,
                        i = e._filterArgs;
                      r(n, function (r) {
                        void 0 !== n[r][t] && n[r][t].apply(e, i);
                      });
                    }
                    function l(e, t, n, i, r, o, a, c, l, d, p) {
                      (m = t + n + i),
                        (g = Math.min(p || k(), m)),
                        (y = g >= m),
                        (v = i - (m - g)),
                        e.isPlaying() &&
                          (y
                            ? (l(a, e._attachment, v), e.stop(!0))
                            : ((e._scheduleId = d(e._timeoutHandler, w)),
                              u(e, "beforeTween"),
                              g < t + n ? s(1, r, o, a, 1, 1, c) : s(g, r, o, a, i, t + n, c),
                              u(e, "afterTween"),
                              l(r, e._attachment, v)));
                    }
                    function d(e, t) {
                      var n = {},
                        i = typeof t;
                      return (
                        r(
                          e,
                          "string" === i || "function" === i
                            ? function (e) {
                                n[e] = t;
                              }
                            : function (e) {
                                n[e] || (n[e] = t[e] || _);
                              }
                        ),
                        n
                      );
                    }
                    function p(e, t) {
                      (this._currentState = e || {}),
                        (this._configured = !1),
                        (this._scheduleFunction = f),
                        void 0 !== t && this.setConfig(t);
                    }
                    var h,
                      f,
                      m,
                      g,
                      y,
                      v,
                      _ = "linear",
                      w = 1e3 / 60,
                      b = Date.now
                        ? Date.now
                        : function () {
                            return +new Date();
                          },
                      k = "undefined" != typeof SHIFTY_DEBUG_NOW ? SHIFTY_DEBUG_NOW : b;
                    return (
                      (f =
                        ("undefined" != typeof window &&
                          (window.requestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.oRequestAnimationFrame ||
                            window.msRequestAnimationFrame ||
                            (window.mozCancelRequestAnimationFrame && window.mozRequestAnimationFrame))) ||
                        setTimeout),
                      (p.prototype.tween = function (e) {
                        return this._isTweening
                          ? this
                          : ((void 0 === e && this._configured) || this.setConfig(e),
                            (this._timestamp = k()),
                            this._start(this.get(), this._attachment),
                            this.resume());
                      }),
                      (p.prototype.setConfig = function (e) {
                        (e = e || {}),
                          (this._configured = !0),
                          (this._attachment = e.attachment),
                          (this._pausedAtTime = null),
                          (this._scheduleId = null),
                          (this._delay = e.delay || 0),
                          (this._start = e.start || i),
                          (this._step = e.step || i),
                          (this._finish = e.finish || i),
                          (this._duration = e.duration || 500),
                          (this._currentState = o({}, e.from || this.get())),
                          (this._originalState = this.get()),
                          (this._targetState = o({}, e.to || this.get()));
                        var t = this;
                        this._timeoutHandler = function () {
                          l(
                            t,
                            t._timestamp,
                            t._delay,
                            t._duration,
                            t._currentState,
                            t._originalState,
                            t._targetState,
                            t._easing,
                            t._step,
                            t._scheduleFunction
                          );
                        };
                        var n = this._currentState,
                          r = this._targetState;
                        return (
                          a(r, n),
                          (this._easing = d(n, e.easing || _)),
                          (this._filterArgs = [n, this._originalState, r, this._easing]),
                          u(this, "tweenCreated"),
                          this
                        );
                      }),
                      (p.prototype.get = function () {
                        return o({}, this._currentState);
                      }),
                      (p.prototype.set = function (e) {
                        this._currentState = e;
                      }),
                      (p.prototype.pause = function () {
                        return (this._pausedAtTime = k()), (this._isPaused = !0), this;
                      }),
                      (p.prototype.resume = function () {
                        return (
                          this._isPaused && (this._timestamp += k() - this._pausedAtTime),
                          (this._isPaused = !1),
                          (this._isTweening = !0),
                          this._timeoutHandler(),
                          this
                        );
                      }),
                      (p.prototype.seek = function (e) {
                        e = Math.max(e, 0);
                        var t = k();
                        return (
                          this._timestamp + e === 0 ||
                            ((this._timestamp = t - e),
                            this.isPlaying() ||
                              ((this._isTweening = !0),
                              (this._isPaused = !1),
                              l(
                                this,
                                this._timestamp,
                                this._delay,
                                this._duration,
                                this._currentState,
                                this._originalState,
                                this._targetState,
                                this._easing,
                                this._step,
                                this._scheduleFunction,
                                t
                              ),
                              this.pause())),
                          this
                        );
                      }),
                      (p.prototype.stop = function (t) {
                        return (
                          (this._isTweening = !1),
                          (this._isPaused = !1),
                          (this._timeoutHandler = i),
                          (
                            e.cancelAnimationFrame ||
                            e.webkitCancelAnimationFrame ||
                            e.oCancelAnimationFrame ||
                            e.msCancelAnimationFrame ||
                            e.mozCancelRequestAnimationFrame ||
                            e.clearTimeout
                          )(this._scheduleId),
                          t &&
                            (u(this, "beforeTween"),
                            s(1, this._currentState, this._originalState, this._targetState, 1, 0, this._easing),
                            u(this, "afterTween"),
                            u(this, "afterTweenEnd"),
                            this._finish.call(this, this._currentState, this._attachment)),
                          this
                        );
                      }),
                      (p.prototype.isPlaying = function () {
                        return this._isTweening && !this._isPaused;
                      }),
                      (p.prototype.setScheduleFunction = function (e) {
                        this._scheduleFunction = e;
                      }),
                      (p.prototype.dispose = function () {
                        var e;
                        for (e in this) this.hasOwnProperty(e) && delete this[e];
                      }),
                      (p.prototype.filter = {}),
                      (p.prototype.formula = {
                        linear: function (e) {
                          return e;
                        }
                      }),
                      (h = p.prototype.formula),
                      o(p, {
                        now: k,
                        each: r,
                        tweenProps: s,
                        tweenProp: c,
                        applyFilter: u,
                        shallowCopy: o,
                        defaults: a,
                        composeEasingObject: d
                      }),
                      "function" == typeof SHIFTY_DEBUG_NOW && (e.timeoutHandler = l),
                      "object" == typeof n ? (t.exports = p) : void 0 === e.Tweenable && (e.Tweenable = p),
                      p
                    );
                  })();
                i.shallowCopy(i.prototype.formula, {
                  easeInQuad: function (e) {
                    return Math.pow(e, 2);
                  },
                  easeOutQuad: function (e) {
                    return -(Math.pow(e - 1, 2) - 1);
                  },
                  easeInOutQuad: function (e) {
                    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
                  },
                  easeInCubic: function (e) {
                    return Math.pow(e, 3);
                  },
                  easeOutCubic: function (e) {
                    return Math.pow(e - 1, 3) + 1;
                  },
                  easeInOutCubic: function (e) {
                    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 3) : 0.5 * (Math.pow(e - 2, 3) + 2);
                  },
                  easeInQuart: function (e) {
                    return Math.pow(e, 4);
                  },
                  easeOutQuart: function (e) {
                    return -(Math.pow(e - 1, 4) - 1);
                  },
                  easeInOutQuart: function (e) {
                    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 4) : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
                  },
                  easeInQuint: function (e) {
                    return Math.pow(e, 5);
                  },
                  easeOutQuint: function (e) {
                    return Math.pow(e - 1, 5) + 1;
                  },
                  easeInOutQuint: function (e) {
                    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 5) : 0.5 * (Math.pow(e - 2, 5) + 2);
                  },
                  easeInSine: function (e) {
                    return 1 - Math.cos(e * (Math.PI / 2));
                  },
                  easeOutSine: function (e) {
                    return Math.sin(e * (Math.PI / 2));
                  },
                  easeInOutSine: function (e) {
                    return -0.5 * (Math.cos(Math.PI * e) - 1);
                  },
                  easeInExpo: function (e) {
                    return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
                  },
                  easeOutExpo: function (e) {
                    return 1 === e ? 1 : 1 - Math.pow(2, -10 * e);
                  },
                  easeInOutExpo: function (e) {
                    return 0 === e
                      ? 0
                      : 1 === e
                      ? 1
                      : (e /= 0.5) < 1
                      ? 0.5 * Math.pow(2, 10 * (e - 1))
                      : 0.5 * (2 - Math.pow(2, -10 * --e));
                  },
                  easeInCirc: function (e) {
                    return -(Math.sqrt(1 - e * e) - 1);
                  },
                  easeOutCirc: function (e) {
                    return Math.sqrt(1 - Math.pow(e - 1, 2));
                  },
                  easeInOutCirc: function (e) {
                    return (e /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
                  },
                  easeOutBounce: function (e) {
                    return e < 1 / 2.75
                      ? 7.5625 * e * e
                      : e < 2 / 2.75
                      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
                      : e < 2.5 / 2.75
                      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
                      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
                  },
                  easeInBack: function (e) {
                    var t = 1.70158;
                    return e * e * ((t + 1) * e - t);
                  },
                  easeOutBack: function (e) {
                    var t = 1.70158;
                    return (e -= 1) * e * ((t + 1) * e + t) + 1;
                  },
                  easeInOutBack: function (e) {
                    var t = 1.70158;
                    return (e /= 0.5) < 1
                      ? e * e * ((1 + (t *= 1.525)) * e - t) * 0.5
                      : 0.5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
                  },
                  elastic: function (e) {
                    return -1 * Math.pow(4, -8 * e) * Math.sin(((6 * e - 1) * (2 * Math.PI)) / 2) + 1;
                  },
                  swingFromTo: function (e) {
                    var t = 1.70158;
                    return (e /= 0.5) < 1
                      ? e * e * ((1 + (t *= 1.525)) * e - t) * 0.5
                      : 0.5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2);
                  },
                  swingFrom: function (e) {
                    var t = 1.70158;
                    return e * e * ((t + 1) * e - t);
                  },
                  swingTo: function (e) {
                    var t = 1.70158;
                    return (e -= 1) * e * ((t + 1) * e + t) + 1;
                  },
                  bounce: function (e) {
                    return e < 1 / 2.75
                      ? 7.5625 * e * e
                      : e < 2 / 2.75
                      ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
                      : e < 2.5 / 2.75
                      ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
                      : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
                  },
                  bouncePast: function (e) {
                    return e < 1 / 2.75
                      ? 7.5625 * e * e
                      : e < 2 / 2.75
                      ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
                      : e < 2.5 / 2.75
                      ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
                      : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
                  },
                  easeFromTo: function (e) {
                    return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 4) : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
                  },
                  easeFrom: function (e) {
                    return Math.pow(e, 4);
                  },
                  easeTo: function (e) {
                    return Math.pow(e, 0.25);
                  }
                }),
                  (function () {
                    function e(e, t, n, i, r, o) {
                      function a(e) {
                        return ((u * e + l) * e + d) * e;
                      }
                      function s(e) {
                        return (3 * u * e + 2 * l) * e + d;
                      }
                      function c(e) {
                        return e >= 0 ? e : 0 - e;
                      }
                      var u = 0,
                        l = 0,
                        d = 0,
                        p = 0,
                        h = 0,
                        f = 0;
                      return (
                        (u = 1 - (d = 3 * t) - (l = 3 * (i - t) - d)),
                        (p = 1 - (f = 3 * n) - (h = 3 * (r - n) - f)),
                        (function (e, t) {
                          return (function (e) {
                            return ((p * e + h) * e + f) * e;
                          })(
                            (function (e, t) {
                              var n, i, r, o, u, l;
                              for (r = e, l = 0; l < 8; l++) {
                                if (c((o = a(r) - e)) < t) return r;
                                if (c((u = s(r))) < 1e-6) break;
                                r -= o / u;
                              }
                              if (((i = 1), (r = e) < (n = 0))) return n;
                              if (r > i) return i;
                              for (; n < i; ) {
                                if (c((o = a(r)) - e) < t) return r;
                                e > o ? (n = r) : (i = r), (r = 0.5 * (i - n) + n);
                              }
                              return r;
                            })(e, t)
                          );
                        })(
                          e,
                          (function (e) {
                            return 1 / (200 * e);
                          })(o)
                        )
                      );
                    }
                    function t(t, n, i, r) {
                      return function (o) {
                        return e(o, t, n, i, r, 1);
                      };
                    }
                    (i.setBezierFunction = function (e, n, r, o, a) {
                      var s = t(n, r, o, a);
                      return (s.displayName = e), (s.x1 = n), (s.y1 = r), (s.x2 = o), (s.y2 = a), (i.prototype.formula[e] = s);
                    }),
                      (i.unsetBezierFunction = function (e) {
                        delete i.prototype.formula[e];
                      });
                  })(),
                  (function () {
                    var e = new i();
                    (e._filterArgs = []),
                      (i.interpolate = function (t, n, r, o, a) {
                        var s = i.shallowCopy({}, t),
                          c = a || 0,
                          u = i.composeEasingObject(t, o || "linear");
                        e.set({});
                        var l = e._filterArgs;
                        (l.length = 0),
                          (l[0] = s),
                          (l[1] = t),
                          (l[2] = n),
                          (l[3] = u),
                          i.applyFilter(e, "tweenCreated"),
                          i.applyFilter(e, "beforeTween");
                        var d = (function (e, t, n, r, o, a) {
                          return i.tweenProps(r, t, e, n, 1, a, o);
                        })(t, s, n, r, u, c);
                        return i.applyFilter(e, "afterTween"), d;
                      });
                  })(),
                  (function (e) {
                    function t(e, t) {
                      var n,
                        i = [],
                        r = e.length;
                      for (n = 0; n < r; n++) i.push("_" + t + "_" + n);
                      return i;
                    }
                    function n(e) {
                      var t = e.match(m);
                      return t ? (1 === t.length || e.charAt(0).match(f)) && t.unshift("") : (t = ["", ""]), t.join(w);
                    }
                    function i(t) {
                      e.each(t, function (e) {
                        var n = t[e];
                        "string" == typeof n &&
                          n.match(_) &&
                          (t[e] = (function (e) {
                            return a(_, e, r);
                          })(n));
                      });
                    }
                    function r(e) {
                      var t = (function (e) {
                        return (
                          3 === (e = e.replace(/#/, "")).length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2]),
                          (b[0] = o(e.substr(0, 2))),
                          (b[1] = o(e.substr(2, 2))),
                          (b[2] = o(e.substr(4, 2))),
                          b
                        );
                      })(e);
                      return "rgb(" + t[0] + "," + t[1] + "," + t[2] + ")";
                    }
                    function o(e) {
                      return parseInt(e, 16);
                    }
                    function a(e, t, n) {
                      var i = t.match(e),
                        r = t.replace(e, w);
                      if (i) for (var o, a = i.length, s = 0; s < a; s++) (o = i.shift()), (r = r.replace(w, n(o)));
                      return r;
                    }
                    function s(e) {
                      for (var t = e.match(g), n = t.length, i = e.match(v)[0], r = 0; r < n; r++) i += parseInt(t[r], 10) + ",";
                      return i.slice(0, -1) + ")";
                    }
                    function c(i) {
                      var r = {};
                      return (
                        e.each(i, function (e) {
                          var o = i[e];
                          if ("string" == typeof o) {
                            var a = d(o);
                            r[e] = { formatString: n(o), chunkNames: t(a, e) };
                          }
                        }),
                        r
                      );
                    }
                    function u(t, n) {
                      e.each(n, function (e) {
                        for (var i = d(t[e]), r = i.length, o = 0; o < r; o++) t[n[e].chunkNames[o]] = +i[o];
                        delete t[e];
                      });
                    }
                    function l(t, n) {
                      e.each(n, function (e) {
                        var i = t[e],
                          r = (function (e, t) {
                            for (var n, i = {}, r = t.length, o = 0; o < r; o++) (n = t[o]), (i[n] = e[n]), delete e[n];
                            return i;
                          })(t, n[e].chunkNames),
                          o = (function (e, t) {
                            k.length = 0;
                            for (var n = t.length, i = 0; i < n; i++) k.push(e[t[i]]);
                            return k;
                          })(r, n[e].chunkNames);
                        (i = (function (e, t) {
                          for (var n = e, i = t.length, r = 0; r < i; r++) n = n.replace(w, +t[r].toFixed(4));
                          return n;
                        })(n[e].formatString, o)),
                          (t[e] = (function (e) {
                            return a(y, e, s);
                          })(i));
                      });
                    }
                    function d(e) {
                      return e.match(g);
                    }
                    function p(t, n) {
                      e.each(n, function (e) {
                        var i,
                          r = n[e].chunkNames,
                          o = r.length,
                          a = t[e];
                        if ("string" == typeof a) {
                          var s = a.split(" "),
                            c = s[s.length - 1];
                          for (i = 0; i < o; i++) t[r[i]] = s[i] || c;
                        } else for (i = 0; i < o; i++) t[r[i]] = a;
                        delete t[e];
                      });
                    }
                    function h(t, n) {
                      e.each(n, function (e) {
                        var i = n[e].chunkNames,
                          r = i.length,
                          o = t[i[0]];
                        if ("string" === typeof o) {
                          for (var a = "", s = 0; s < r; s++) (a += " " + t[i[s]]), delete t[i[s]];
                          t[e] = a.substr(1);
                        } else t[e] = o;
                      });
                    }
                    var f = /(\d|\-|\.)/,
                      m = /([^\-0-9\.]+)/g,
                      g = /[0-9.\-]+/g,
                      y = new RegExp("rgb\\(" + g.source + /,\s*/.source + g.source + /,\s*/.source + g.source + "\\)", "g"),
                      v = /^.*\(/,
                      _ = /#([0-9]|[a-f]){3,6}/gi,
                      w = "VAL",
                      b = [],
                      k = [];
                    e.prototype.filter.token = {
                      tweenCreated: function (e, t, n, r) {
                        i(e), i(t), i(n), (this._tokenData = c(e));
                      },
                      beforeTween: function (e, t, n, i) {
                        p(i, this._tokenData), u(e, this._tokenData), u(t, this._tokenData), u(n, this._tokenData);
                      },
                      afterTween: function (e, t, n, i) {
                        l(e, this._tokenData), l(t, this._tokenData), l(n, this._tokenData), h(i, this._tokenData);
                      }
                    };
                  })(i);
              }).call(null);
            },
            {}
          ],
          2: [
            function (e, t, n) {
              var i = e("./shape"),
                r = e("./utils"),
                o = function (e, t) {
                  (this._pathTemplate =
                    "M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}"),
                    (this.containerAspectRatio = 1),
                    i.apply(this, arguments);
                };
              ((o.prototype = new i()).constructor = o),
                (o.prototype._pathString = function (e) {
                  var t = e.strokeWidth;
                  e.trailWidth && e.trailWidth > e.strokeWidth && (t = e.trailWidth);
                  var n = 50 - t / 2;
                  return r.render(this._pathTemplate, { radius: n, "2radius": 2 * n });
                }),
                (o.prototype._trailString = function (e) {
                  return this._pathString(e);
                }),
                (t.exports = o);
            },
            { "./shape": 7, "./utils": 9 }
          ],
          3: [
            function (e, t, n) {
              var i = e("./shape"),
                r = e("./utils"),
                o = function (e, t) {
                  (this._pathTemplate = "M 0,{center} L 100,{center}"), i.apply(this, arguments);
                };
              ((o.prototype = new i()).constructor = o),
                (o.prototype._initializeSvg = function (e, t) {
                  e.setAttribute("viewBox", "0 0 100 " + t.strokeWidth), e.setAttribute("preserveAspectRatio", "none");
                }),
                (o.prototype._pathString = function (e) {
                  return r.render(this._pathTemplate, { center: e.strokeWidth / 2 });
                }),
                (o.prototype._trailString = function (e) {
                  return this._pathString(e);
                }),
                (t.exports = o);
            },
            { "./shape": 7, "./utils": 9 }
          ],
          4: [
            function (e, t, n) {
              t.exports = {
                Line: e("./line"),
                Circle: e("./circle"),
                SemiCircle: e("./semicircle"),
                Square: e("./square"),
                Path: e("./path"),
                Shape: e("./shape"),
                utils: e("./utils")
              };
            },
            { "./circle": 2, "./line": 3, "./path": 5, "./semicircle": 6, "./shape": 7, "./square": 8, "./utils": 9 }
          ],
          5: [
            function (e, t, n) {
              var i = e("shifty"),
                r = e("./utils"),
                o = { easeIn: "easeInCubic", easeOut: "easeOutCubic", easeInOut: "easeInOutCubic" },
                a = function e(t, n) {
                  if (!(this instanceof e)) throw new Error("Constructor was called without new keyword");
                  var i;
                  (n = r.extend({ duration: 800, easing: "linear", from: {}, to: {}, step: function () {} }, n)),
                    (i = r.isString(t) ? document.querySelector(t) : t),
                    (this.path = i),
                    (this._opts = n),
                    (this._tweenable = null);
                  var o = this.path.getTotalLength();
                  (this.path.style.strokeDasharray = o + " " + o), this.set(0);
                };
              (a.prototype.value = function () {
                var e = this._getComputedDashOffset(),
                  t = this.path.getTotalLength();
                return parseFloat((1 - e / t).toFixed(6), 10);
              }),
                (a.prototype.set = function (e) {
                  this.stop(), (this.path.style.strokeDashoffset = this._progressToOffset(e));
                  var t = this._opts.step;
                  if (r.isFunction(t)) {
                    var n = this._easing(this._opts.easing);
                    t(this._calculateTo(e, n), this._opts.shape || this, this._opts.attachment);
                  }
                }),
                (a.prototype.stop = function () {
                  this._stopTween(), (this.path.style.strokeDashoffset = this._getComputedDashOffset());
                }),
                (a.prototype.animate = function (e, t, n) {
                  (t = t || {}), r.isFunction(t) && ((n = t), (t = {}));
                  var o = r.extend({}, t),
                    a = r.extend({}, this._opts);
                  t = r.extend(a, t);
                  var s = this._easing(t.easing),
                    c = this._resolveFromAndTo(e, s, o);
                  this.stop(), this.path.getBoundingClientRect();
                  var u = this._getComputedDashOffset(),
                    l = this._progressToOffset(e),
                    d = this;
                  (this._tweenable = new i()),
                    this._tweenable.tween({
                      from: r.extend({ offset: u }, c.from),
                      to: r.extend({ offset: l }, c.to),
                      duration: t.duration,
                      easing: s,
                      step: function (e) {
                        d.path.style.strokeDashoffset = e.offset;
                        var n = t.shape || d;
                        t.step(e, n, t.attachment);
                      },
                      finish: function (e) {
                        r.isFunction(n) && n();
                      }
                    });
                }),
                (a.prototype._getComputedDashOffset = function () {
                  var e = window.getComputedStyle(this.path, null);
                  return parseFloat(e.getPropertyValue("stroke-dashoffset"), 10);
                }),
                (a.prototype._progressToOffset = function (e) {
                  var t = this.path.getTotalLength();
                  return t - e * t;
                }),
                (a.prototype._resolveFromAndTo = function (e, t, n) {
                  return n.from && n.to ? { from: n.from, to: n.to } : { from: this._calculateFrom(t), to: this._calculateTo(e, t) };
                }),
                (a.prototype._calculateFrom = function (e) {
                  return i.interpolate(this._opts.from, this._opts.to, this.value(), e);
                }),
                (a.prototype._calculateTo = function (e, t) {
                  return i.interpolate(this._opts.from, this._opts.to, e, t);
                }),
                (a.prototype._stopTween = function () {
                  null !== this._tweenable && (this._tweenable.stop(), (this._tweenable = null));
                }),
                (a.prototype._easing = function (e) {
                  return o.hasOwnProperty(e) ? o[e] : e;
                }),
                (t.exports = a);
            },
            { "./utils": 9, shifty: 1 }
          ],
          6: [
            function (e, t, n) {
              var i = e("./shape"),
                r = e("./circle"),
                o = e("./utils"),
                a = function (e, t) {
                  (this._pathTemplate = "M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0"),
                    (this.containerAspectRatio = 2),
                    i.apply(this, arguments);
                };
              ((a.prototype = new i()).constructor = a),
                (a.prototype._initializeSvg = function (e, t) {
                  e.setAttribute("viewBox", "0 0 100 50");
                }),
                (a.prototype._initializeTextContainer = function (e, t, n) {
                  e.text.style &&
                    ((n.style.top = "auto"),
                    (n.style.bottom = "0"),
                    e.text.alignToBottom
                      ? o.setStyle(n, "transform", "translate(-50%, 0)")
                      : o.setStyle(n, "transform", "translate(-50%, 50%)"));
                }),
                (a.prototype._pathString = r.prototype._pathString),
                (a.prototype._trailString = r.prototype._trailString),
                (t.exports = a);
            },
            { "./circle": 2, "./shape": 7, "./utils": 9 }
          ],
          7: [
            function (e, t, n) {
              var i = e("./path"),
                r = e("./utils"),
                o = "Object is destroyed",
                a = function e(t, n) {
                  if (!(this instanceof e)) throw new Error("Constructor was called without new keyword");
                  if (0 !== arguments.length) {
                    (this._opts = r.extend(
                      {
                        color: "#555",
                        strokeWidth: 1,
                        trailColor: null,
                        trailWidth: null,
                        fill: null,
                        text: {
                          style: {
                            color: null,
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            padding: 0,
                            margin: 0,
                            transform: { prefix: !0, value: "translate(-50%, -50%)" }
                          },
                          autoStyleContainer: !0,
                          alignToBottom: !0,
                          value: null,
                          className: "progressbar-text"
                        },
                        svgStyle: { display: "block", width: "100%" },
                        warnings: !1
                      },
                      n,
                      !0
                    )),
                      r.isObject(n) && void 0 !== n.svgStyle && (this._opts.svgStyle = n.svgStyle),
                      r.isObject(n) && r.isObject(n.text) && void 0 !== n.text.style && (this._opts.text.style = n.text.style);
                    var o,
                      a = this._createSvgView(this._opts);
                    if (!(o = r.isString(t) ? document.querySelector(t) : t)) throw new Error("Container does not exist: " + t);
                    (this._container = o),
                      this._container.appendChild(a.svg),
                      this._opts.warnings && this._warnContainerAspectRatio(this._container),
                      this._opts.svgStyle && r.setStyles(a.svg, this._opts.svgStyle),
                      (this.svg = a.svg),
                      (this.path = a.path),
                      (this.trail = a.trail),
                      (this.text = null);
                    var s = r.extend({ attachment: void 0, shape: this }, this._opts);
                    (this._progressPath = new i(a.path, s)),
                      r.isObject(this._opts.text) && null !== this._opts.text.value && this.setText(this._opts.text.value);
                  }
                };
              (a.prototype.animate = function (e, t, n) {
                if (null === this._progressPath) throw new Error(o);
                this._progressPath.animate(e, t, n);
              }),
                (a.prototype.stop = function () {
                  if (null === this._progressPath) throw new Error(o);
                  void 0 !== this._progressPath && this._progressPath.stop();
                }),
                (a.prototype.destroy = function () {
                  if (null === this._progressPath) throw new Error(o);
                  this.stop(),
                    this.svg.parentNode.removeChild(this.svg),
                    (this.svg = null),
                    (this.path = null),
                    (this.trail = null),
                    (this._progressPath = null),
                    null !== this.text && (this.text.parentNode.removeChild(this.text), (this.text = null));
                }),
                (a.prototype.set = function (e) {
                  if (null === this._progressPath) throw new Error(o);
                  this._progressPath.set(e);
                }),
                (a.prototype.value = function () {
                  if (null === this._progressPath) throw new Error(o);
                  return void 0 === this._progressPath ? 0 : this._progressPath.value();
                }),
                (a.prototype.setText = function (e) {
                  if (null === this._progressPath) throw new Error(o);
                  null === this.text &&
                    ((this.text = this._createTextContainer(this._opts, this._container)), this._container.appendChild(this.text)),
                    r.isObject(e) ? (r.removeChildren(this.text), this.text.appendChild(e)) : (this.text.innerHTML = e);
                }),
                (a.prototype._createSvgView = function (e) {
                  var t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                  this._initializeSvg(t, e);
                  var n = null;
                  (e.trailColor || e.trailWidth) && ((n = this._createTrail(e)), t.appendChild(n));
                  var i = this._createPath(e);
                  return t.appendChild(i), { svg: t, path: i, trail: n };
                }),
                (a.prototype._initializeSvg = function (e, t) {
                  e.setAttribute("viewBox", "0 0 100 100");
                }),
                (a.prototype._createPath = function (e) {
                  var t = this._pathString(e);
                  return this._createPathElement(t, e);
                }),
                (a.prototype._createTrail = function (e) {
                  var t = this._trailString(e),
                    n = r.extend({}, e);
                  return (
                    n.trailColor || (n.trailColor = "#eee"),
                    n.trailWidth || (n.trailWidth = n.strokeWidth),
                    (n.color = n.trailColor),
                    (n.strokeWidth = n.trailWidth),
                    (n.fill = null),
                    this._createPathElement(t, n)
                  );
                }),
                (a.prototype._createPathElement = function (e, t) {
                  var n = document.createElementNS("http://www.w3.org/2000/svg", "path");
                  return (
                    n.setAttribute("d", e),
                    n.setAttribute("stroke", t.color),
                    n.setAttribute("stroke-width", t.strokeWidth),
                    t.fill ? n.setAttribute("fill", t.fill) : n.setAttribute("fill-opacity", "0"),
                    n
                  );
                }),
                (a.prototype._createTextContainer = function (e, t) {
                  var n = document.createElement("div");
                  n.className = e.text.className;
                  var i = e.text.style;
                  return (
                    i &&
                      (e.text.autoStyleContainer && (t.style.position = "relative"),
                      r.setStyles(n, i),
                      i.color || (n.style.color = e.color)),
                    this._initializeTextContainer(e, t, n),
                    n
                  );
                }),
                (a.prototype._initializeTextContainer = function (e, t, n) {}),
                (a.prototype._pathString = function (e) {
                  throw new Error("Override this function for each progress bar");
                }),
                (a.prototype._trailString = function (e) {
                  throw new Error("Override this function for each progress bar");
                }),
                (a.prototype._warnContainerAspectRatio = function (e) {
                  if (this.containerAspectRatio) {
                    var t = window.getComputedStyle(e, null),
                      n = parseFloat(t.getPropertyValue("width"), 10),
                      i = parseFloat(t.getPropertyValue("height"), 10);
                    r.floatEquals(this.containerAspectRatio, n / i) ||
                      (console.warn(
                        "Incorrect aspect ratio of container",
                        "#" + e.id,
                        "detected:",
                        t.getPropertyValue("width") + "(width)",
                        "/",
                        t.getPropertyValue("height") + "(height)",
                        "=",
                        n / i
                      ),
                      console.warn("Aspect ratio of should be", this.containerAspectRatio));
                  }
                }),
                (t.exports = a);
            },
            { "./path": 5, "./utils": 9 }
          ],
          8: [
            function (e, t, n) {
              var i = e("./shape"),
                r = e("./utils"),
                o = function (e, t) {
                  (this._pathTemplate =
                    "M 0,{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{strokeWidth}"),
                    (this._trailTemplate =
                      "M {startMargin},{halfOfStrokeWidth} L {width},{halfOfStrokeWidth} L {width},{width} L {halfOfStrokeWidth},{width} L {halfOfStrokeWidth},{halfOfStrokeWidth}"),
                    i.apply(this, arguments);
                };
              ((o.prototype = new i()).constructor = o),
                (o.prototype._pathString = function (e) {
                  var t = 100 - e.strokeWidth / 2;
                  return r.render(this._pathTemplate, { width: t, strokeWidth: e.strokeWidth, halfOfStrokeWidth: e.strokeWidth / 2 });
                }),
                (o.prototype._trailString = function (e) {
                  var t = 100 - e.strokeWidth / 2;
                  return r.render(this._trailTemplate, {
                    width: t,
                    strokeWidth: e.strokeWidth,
                    halfOfStrokeWidth: e.strokeWidth / 2,
                    startMargin: e.strokeWidth / 2 - e.trailWidth / 2
                  });
                }),
                (t.exports = o);
            },
            { "./shape": 7, "./utils": 9 }
          ],
          9: [
            function (e, t, n) {
              function i(e, t, n) {
                for (var i = e.style, o = 0; o < s.length; ++o) {
                  i[s[o] + r(t)] = n;
                }
                i[t] = n;
              }
              function r(e) {
                return e.charAt(0).toUpperCase() + e.slice(1);
              }
              function o(e) {
                return (
                  !(function (e) {
                    return "[object Array]" === Object.prototype.toString.call(e);
                  })(e) &&
                  "object" === typeof e &&
                  !!e
                );
              }
              function a(e, t) {
                for (var n in e)
                  if (e.hasOwnProperty(n)) {
                    t(e[n], n);
                  }
              }
              var s = "Webkit Moz O ms".split(" "),
                c = 0.001;
              t.exports = {
                extend: function e(t, n, i) {
                  for (var r in ((t = t || {}), (i = i || !1), (n = n || {})))
                    if (n.hasOwnProperty(r)) {
                      var a = t[r],
                        s = n[r];
                      i && o(a) && o(s) ? (t[r] = e(a, s, i)) : (t[r] = s);
                    }
                  return t;
                },
                render: function (e, t) {
                  var n = e;
                  for (var i in t)
                    if (t.hasOwnProperty(i)) {
                      var r = t[i],
                        o = new RegExp("\\{" + i + "\\}", "g");
                      n = n.replace(o, r);
                    }
                  return n;
                },
                setStyle: i,
                setStyles: function (e, t) {
                  a(t, function (t, n) {
                    null != t && (o(t) && !0 === t.prefix ? i(e, n, t.value) : (e.style[n] = t));
                  });
                },
                capitalize: r,
                isString: function (e) {
                  return "string" == typeof e || e instanceof String;
                },
                isFunction: function (e) {
                  return "function" == typeof e;
                },
                isObject: o,
                forEachObject: a,
                floatEquals: function (e, t) {
                  return Math.abs(e - t) < c;
                },
                removeChildren: function (e) {
                  for (; e.firstChild; ) e.removeChild(e.firstChild);
                }
              };
            },
            {}
          ]
        },
        {},
        [4]
      )(4);
    });
  const r = { "&": "&amp;", ">": "&gt;", "<": "&lt;", '"': "&quot;", "'": "&#39;", "`": "&#96;" };
  function o(e, ...t) {
    const n = new RegExp(Object.keys(r).join("|"), "g");
    return e.raw.reduce((i, o, a) => {
      let s = t[a - 1];
      return (
        Array.isArray(s)
          ? (s = s.join(""))
          : e.raw[a - 1] && e.raw[a - 1].endsWith("$")
          ? (i = i.slice(0, -1))
          : (s = (function (e = "") {
              return String(e).replace(n, (e) => r[e]);
            })(s)),
        i + s + o
      );
    });
  }
  var a = window.location.origin,
    s = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (e) =>
      (e ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (e / 4)))).toString(16)
    ),
    c = function (e, t) {
      try {
        const n = document.querySelector("#kamidata");
        if (n) {
          const r = n.dataset.kamiUserId;
          r &&
            (((t = t || {}).version_name = "Kami Schoology"),
            (t.session_id = s),
            (payload = { name: e, value: t }),
            axios.post(`${i}/events`, payload, { params: { user_id: r } }));
        }
      } catch (e) {
        console.error(e);
      }
    },
    u = document.createElement("div"),
    l = (function (e) {
      var t = e.slice(e.indexOf("?"));
      for (match = void 0, search = /([^&=]+)=?([^&]*)/g, query = t.substring(1), urlParams = {}; (match = search.exec(query)); )
        (key = decodeURIComponent(match[1])), (value = decodeURIComponent(match[2])), (urlParams[key] = value);
      return urlParams;
    })(document.location.search);
  let d = !1;
  try {
    d = !!localStorage.getItem("kami-grader");
  } catch (e) {}
  function p() {
    let e = document.querySelectorAll(".comment-body-wrapper"),
      t = null;
    for (let n = e.length - 1; n > -1; n--) {
      let i = e[n];
      if (f(i)) {
        let e = i.querySelector(".revision-notification");
        if (e) {
          t = e.innerText.split(" ")[1];
          break;
        }
        if (i.innerText.match(/Open Revision [0-9]+ in Kami/)) {
          t = i.innerText.match(/Open Revision ([0-9]+) in Kami/)[1];
          break;
        }
      }
    }
    return t;
  }
  function h() {
    const e = `${n}/web/images/turnin-left.gif`;
    document.querySelector("body").insertAdjacentHTML("beforeend", `<img class="turnin-animation turnin-animation-left" src="${e}" />`),
      document.querySelector("body").insertAdjacentHTML("beforeend", `<img class="turnin-animation turnin-animation-right" src="${e}" />`);
  }
  function f(e) {
    if (!e) return null;
    let t = e.querySelector("a");
    if (!t) return null;
    let n = t.href;
    if (!n) return null;
    if (!n.includes("web/viewer.html")) return null;
    {
      let e = n.split("viewer.html?")[1],
        t = new URLSearchParams(e);
      if (t.get("state")) {
        let e = JSON.parse(t.get("state"));
        if (e.ids && e.ids[0]) return { document_identifier: e.ids[0], storage: "googledrive" };
      }
      if ("onedrive" === t.get("source"))
        return {
          document_identifier: t.get("document_identifier"),
          encoded_onedrive_drive_id: t.get("encoded_onedrive_drive_id"),
          storage: "onedrive"
        };
    }
  }
  function m(e) {
    let t = document.querySelectorAll(".comment-body-wrapper");
    if (!t) return null;
    for (let n = 0; n < t.length; n++) {
      let i = t[n],
        r = i.querySelector(".revision-notification");
      if (r) {
        if (r.innerText.split(" ")[1] !== e) continue;
      } else if (!i.innerText.includes(`Open Revision ${e} in Kami`)) continue;
      let o = f(i);
      if (o) return o;
    }
    return null;
  }
  function g() {
    let e = document.querySelectorAll("iframe");
    return e[Array.from(e).findIndex((e) => "kami-iframe" !== e.id && (!e.style.display || e.attributes["km-schoology-iframe"]))];
  }
  function y(e) {
    let t = document.querySelector("#kami-iframe"),
      i = g();
    if ((i && ((i.style.display = "none"), i.setAttribute("km-schoology-iframe", 1)), !t && e)) {
      let t;
      if ("onedrive" === e.storage)
        t = `${n}/web/viewer.html?document_identifier=${e.document_identifier}&source=onedrive&encoded_onedrive_drive_id=${e.encoded_onedrive_drive_id}&schoology_grading=1`;
      else {
        const i = { ids: [e.document_identifier] };
        t = `${n}/web/viewer.html?state=${encodeURIComponent(JSON.stringify(i))}&schoology_grading=1`;
      }
      const r =
        "accelerometer *; ambient-light-sensor *; autoplay *; camera *;     encrypted-media *; fullscreen *; geolocation *; gyroscope *; magnetometer *;     microphone *; midi *; payment *; picture-in-picture *; speaker *; usb *; vr *;     clipboard-read *; clipboard-write *; display-capture *;";
      i.insertAdjacentHTML(
        "afterend",
        o`
      <iframe 
        src="${t}" id="kami-iframe" 
        frameborder="0" width="100%" height="100%" allowfullscreen="true" allow="${r}"
      />
    `
      );
    }
  }
  function v() {
    let e = g();
    e && ((e.style.display = ""), e.removeAttribute("km-schoology-iframe"));
  }
  function _() {
    let e = document.querySelector("#dropbox-viewer-revision-select-button .ui-selectmenu-status").innerText.split(" ")[1],
      t = p(),
      n = m(e),
      i = null;
    e != t &&
      (i = n
        ? "Kami can not be used to grade this assignment submission \n      because Kami has a copy of a later revision."
        : "Kami can not be used to grade this assignment submission \n      because a valid Kami link could not be found."),
      (function (e) {
        let t = document.querySelector("#grade_with_kami_wrapper");
        if (t) return;
        let n = document.querySelector("#s-grade-item-edit-enrollment-grade-form"),
          i = "beforebegin",
          r = "km-graded-wrapper",
          o = "Grade with Kami";
        if (
          (n ||
            ((n = document.querySelector("#dropbox-viewer-grade")),
            (i = "afterbegin"),
            (r = "km-ungraded-wrapper"),
            (o = "Open with Kami")),
          !n)
        )
          return null;
        let a = `<div id="grade_with_kami_wrapper"\n    class="${
          e ? "km-tooltip" : ""
        } ${r}">\n      ${o}\n    <input type="checkbox" style="margin-left: 4px;" ${
          e ? "disabled" : ""
        } />\n    <div class="km-tooltiptext">\n      ${e}\n    </div>\n  </div>`;
        if ((n.insertAdjacentHTML(i, a), (t = document.querySelector("#grade_with_kami_wrapper")), t)) {
          let e = t.querySelector("input");
          e &&
            ((e.checked = d),
            (e.onchange = (e) => {
              if (((d = e.target.checked), d)) {
                try {
                  localStorage.setItem("kami-grader", 1);
                } catch (e) {}
                let t = m(p());
                t && y(t);
              } else {
                try {
                  localStorage.removeItem("kami-grader");
                } catch (e) {}
                v();
              }
            }));
        }
      })(i),
      !i && d ? y(n) : v();
  }
  document.head.insertAdjacentHTML(
    "beforeend",
    '<style type="text/css">\n  .km-tooltip {\n    position: relative;\n    display: inline-block;\n  }\n\n  .km-tooltip .km-tooltiptext {\n    width: 241px;\n    text-align: center;\n    border-radius: 1px;\n    padding: 1em;\n    position: absolute;\n    z-index: 1;\n    border: 1px solid black;\n    right: -68px;\n    margin-top: 2px;\n    background-color: white;\n  }\n\n  .km-tooltiptext {\n    visibility: hidden;\n  }\n\n  .km-tooltip:hover .km-tooltiptext {\n    visibility: visible;\n  }\n\n  .km-graded-wrapper {\n    padding: 2px 25px 3px 6px; \n    font-weight: 600;\n    position: absolute; \n    margin-left: -140px; \n    margin-top: 14px;\n  }\n\n  .km-ungraded-wrapper {\n    font-weight: 600;\n    position: absolute; \n    margin-left: -140px; \n  }\n</style>'
  );
  var w = !!document.querySelector(
      'link[href="https://asset-cdn.schoology.com/sites/all/modules/schoology_core/s_course/s_course_unified_ui.css"'
    ),
    b = document.location.pathname.match(/^\/assignment\/([0-9]+)\/info/),
    k = document.location.pathname.match(/^\/assignment\/([0-9]+)\/dropbox\/view\/[0-9]/),
    S = b || k;
  if (S) {
    try {
      w ||
        (function () {
          var e = S[1];
          if (
            (document.querySelectorAll("#main-inner .attachments-file").forEach(function (t) {
              const i = t.querySelector(".attachments-file-name a");
              if (!(!!t.querySelector(".pdf-icon") || i.href.endsWith(".pdf"))) return;
              var r = t.querySelector(".sExtlink-processed").href,
                o = t.querySelector(".sExtlink-processed").innerText,
                s = document.querySelector(".page-title").innerText;
              const c = t.querySelector(".infotip-content"),
                l = r.match(/\/attachment\/([0-9]+)\/source/);
              if (!l) return;
              const d = l[1],
                p = c && c.textContent.includes("k_sch_"),
                h = { schoology: { assignment_id: e, assignment_name: s, attachment_id: d, schoology_origin: a, is_kami_assignment: p } };
              function f(t) {
                const i = "schoology-" + e + "-attachment-" + d,
                  a = new URL(r);
                p && a.searchParams.set("schoology_encoded_file_name", c.textContent);
                const s = new URL(`${n}/web/viewer.html`);
                s.searchParams.set("file", a.toString()),
                  s.searchParams.set("individual_copy_key", i),
                  s.searchParams.set("source", "schoology"),
                  s.searchParams.set("integration_data", JSON.stringify(h)),
                  s.searchParams.set("filename", o),
                  s.searchParams.set("referer", document.location.href),
                  window.open(s.toString(), "_blank");
              }
              c && p && (h.schoology.storage = c.textContent.includes("k_o_k_sch_") ? "onedrive" : "googledrive");
              let m = t.querySelector(".attachments-file-name"),
                g = m.querySelector(".view-file-popup");
              g && (g.style.display = "none");
              let y = t.querySelector(".delete-attachment"),
                v = document.createElement("div");
              v.classList = "kami-open-button-container";
              let _ = p ? "Assignment " : "";
              (v.innerHTML = `<a class="link-btn kami-open-button" target="_blank" title="Open ${_}With Kami" alt="open ${_}with kami"><span></span>Open ${_}With Kami</a>`),
                v.addEventListener("click", f),
                t.insertBefore(v, y);
              let w = m.querySelector("a") || m.querySelector(".sExtlink-processed");
              w.onclick = function (e) {
                e.preventDefault(), f();
              };
              let b = `<div class="action-links-wrapper action-links-wrapper-regular " style="display: inline-block; float: none; position: relative;">\n      <div tabindex="0" role="button" href="#" class="action-links-unfold" style="display: inline-block; font-size: 15px; color: rgba(0, 0, 0, 0); height: 24px;" alt="more actions" title="More Actions">\n        <span class="action-links-unfold-text" style="height: 23px; user-select: none;">o</span>\n      </div>\n      <ul class="action-links" style="display: none; right: 0;">\n        <li class="action-edit"><a href="${g.href}" id="edit-assignment" class="popups-processed sExtlink-processed" title="View PDF" alt="view pdf">View PDF</a></li>\n        <li class="action-library-save"><a href="${w.href}" id="save-assignment-to-resources" class="popups-processed sExtlink-processed" title="Download" alt="download">Download</a></li>\n      </ul>\n    </div>`;
              u.innerHTML = b;
              let k = u.children[0];
              u.removeChild(k), t.insertBefore(k, y);
              let S = k.querySelector(".action-links-unfold"),
                x = S.parentNode.parentNode.querySelector(".action-links");
              window.addEventListener("click", function (e) {
                e.target === S || S.contains(e.target) || ("none" !== x.style.display && (x.style.display = "none"));
              }),
                S.addEventListener("click", function () {
                  "none" === x.style.display ? (x.style.display = "block") : (x.style.display = "none");
                });
            }),
            l.kami_return_assignment_url)
          ) {
            c("Schoology Turnin", { state: "PageScript Initial" });
            var t = `<div class="kami-overlay kami-overlay-fullscreen">\n    <img src="${n}/web/images/icon256.png" id="kami-logo">\n      <div id="kami-progress-bar"></div>\n    </div>`;
            u.innerHTML = t;
            t = u.children[0];
            u.removeChild(t), document.body.appendChild(t);
            var i = new ProgressBar.Line("#kami-progress-bar", {
                strokeWidth: 8,
                color: "#873ECF",
                trailColor: "#c9c9c9",
                trailWidth: 4,
                svgStyle: { width: "100%", height: "100%" },
                text: {
                  value: "Getting Ready...",
                  style: { color: "#000", padding: 20, margin: 0, transform: null },
                  autoStyleContainer: !1
                },
                step: function (e, t) {
                  t.setText(`Submitting assignment ${Math.round(100 * t.value())} %`);
                }
              }),
              r = document.querySelector("[href='/assignment/" + e + "/dropbox/submit']");
            if (!r)
              return (
                history.pushState(null, "", document.location.toString().split("?")[0]),
                t.remove(),
                alert(
                  "We were unable to turn in this file. This may be because you are a teacher in this course, or because the assignment is locked, or submissions might be disabled. You can return to Kami by clicking the 'Open With Kami' button and export your work manually."
                ),
                void c("Schoology Turnin", { state: "Failed", cause: "SUBMIT_NOT_FOUND" })
              );
            r.click();
            var s = l.kami_return_assignment_file_name || "submission.pdf",
              d = s.match(/^(.*)\.(\S*)$/);
            d ? (s = d[1] + ".pdf") : (s += ".pdf");
            var p = function () {
              c("Schoology Turnin", { state: "Fetch return PDF" }),
                axios
                  .get(l.kami_return_assignment_url, {
                    responseType: "blob",
                    onDownloadProgress: function (e) {
                      i.animate((e.loaded / e.total) * 0.5);
                    }
                  })
                  .catch(function (e) {
                    console.warn("Kami Fetch PDF error", e), c("Schoology Turnin", { state: "Fetch PDF error", error: e, url_params: l });
                  })
                  .then(function (e) {
                    c("Schoology Turnin", { state: "Upload To Schoology" });
                    var t = new FormData();
                    return (
                      t.append("name", s),
                      t.append("use_plain", 1),
                      t.append("file", e.data),
                      axios.post(`${a}/file/upload-service`, t, {
                        headers: { Authorization: "Bearer " + Drupal.settings.s_attachment.file_service_upload.token },
                        onUploadProgress: function (e) {
                          i.animate((e.loaded / e.total) * 0.5 + 0.5);
                        }
                      })
                    );
                  })
                  .then(function (e) {
                    c("Schoology Turnin", { state: "Show Submit Dialog" });
                    var i = e.data,
                      r = {};
                    (r[i.fileMetadataId] = { title: s, encode: !0 }),
                      (document.querySelector("[name='file[files]'").value = JSON.stringify(r));
                    var a = o`
            <div class="progressWrapper" id="o_1cer5oedb1u3qlrt61qr7s174oa" style="opacity: 1;">
              <div class="progressContainer green">
                <span class="progressName" id="file-${i.fileMetadataId}">${s}</span>
                <div class="progressBarStatus">Complete</div><div class="progressBarComplete" style="">
                </div>
                <div class="file-details-content clearfix" style="display: none;">
                </div>
              </div>
            </div>
          `;
                    u.innerHTML = a;
                    var d = u.children[0];
                    u.removeChild(d),
                      document.querySelector("#attachments-added-container").appendChild(d),
                      Popups.resizeAndCenter(Popups.activePopup()),
                      history.pushState(null, "", document.location.toString().split("?")[0]);
                    var p = document.querySelector("#dropbox-submit-upload-tab-content form");
                    p.action = p.action.split("%3F")[0];
                    var f = l.document_identifier;
                    if (f && "undefined" != f) {
                      let e;
                      "onedrive" === l.storage
                        ? ((f = encodeURIComponent(f).replace(/!/g, "%21")),
                          (e = `${n}/web/viewer.html?document_identifier=${f}&source=onedrive`),
                          l.onedrive_drive_id && (e += `&encoded_onedrive_drive_id=${window.btoa(l.onedrive_drive_id)}`))
                        : (e = `${n}/web/viewer.html?state=${encodeURIComponent(JSON.stringify({ ids: [f], action: "open" }))}`),
                        $("textarea#edit-drop-item-comment").val("Open in Kami: " + e),
                        $("textarea#edit-drop-item-comment").prop("readonly", !0);
                      let t = document.querySelector("#edit-submit");
                      t &&
                        t.addEventListener("click", function () {
                          h();
                        });
                    }
                    $(t).hide();
                  })
                  .catch(function (e) {
                    console.warn("Kami error showing submit dialog", e),
                      c("Schoology Turnin", { state: "Show Submit Dialog Error", error: e.toString(), url_params: l });
                  });
            };
            c("Schoology Turnin", { state: "Waiting for upload token" });
            var f = setInterval(function () {
              Drupal &&
                Drupal.settings &&
                Drupal.settings.s_attachment &&
                Drupal.settings.s_attachment.file_service_upload &&
                Drupal.settings.s_attachment.file_service_upload.token &&
                (clearInterval(f), p());
            }, 100);
          }
        })();
    } catch (e) {
      c("Schoology Error", { state: "Error", message: e.message, tag: "match_updates_page" });
    }
    k && document.location.href.match(/\?from_gb=1$/) && _(),
      new MutationObserver(function (e) {
        let t = !1;
        e.forEach(function (e) {
          if (e.addedNodes)
            for (let n = 0; n < e.addedNodes.length; n++) {
              let i = e.addedNodes[n];
              !t && i.attributes && i.attributes.class && i.attributes.class.value.includes("popups-extra-large") && (_(), (t = !0)),
                !t &&
                  ["dropbox-viewer-revision-select-button", "dropbox-viewer-user-select-menu", "dropbox-viewer-item-select-menu"].includes(
                    i.id
                  ) &&
                  (_(), (t = !0));
            }
        });
      }).observe(document.querySelector("body"), { childList: !0 });
  }
  var x = document.location.pathname.match(/^\/course\/([0-9]+)\/updates/),
    T = document.location.pathname.match(/^\/home\/recent-activity/) || document.location.pathname.match(/^\/home/);
  if (x || T)
    try {
      P();
      var C = document.querySelectorAll("#main-inner .item-list"),
        O = new MutationObserver(function (e) {
          P();
        });
      C.forEach(function (e) {
        O.observe(e, { childList: !0, subtree: !0 });
      });
    } catch (e) {
      c("Schoology Error", { state: "Error", message: e.message, tag: "match_updates_page" });
    }
  function P() {
    document.querySelectorAll('#main-inner .attachments-file:not([kami-processed="true"])').forEach(function (e) {
      if ((e.setAttribute("kami-processed", "true"), e.querySelector(".pdf-icon"))) {
        var t = e.querySelector(".sExtlink-processed").href,
          i = e.querySelector(".sExtlink-processed").innerText;
        const a = t.match(/\/attachment\/([0-9]+)\/source/);
        if (!a) return;
        const s = "schoology-attachment-" + a[1];
        var r = e.querySelector(".attachments-file-name"),
          o = document.createElement("a");
        (o.innerHTML = "OPEN WITH KAMI"),
          (o.classList = "kami-link"),
          o.addEventListener("click", function (e) {
            const r = new URL(`${n}/web/viewer.html`);
            r.searchParams.set("file", t),
              r.searchParams.set("individual_copy_key", s),
              r.searchParams.set("source", "schoology"),
              r.searchParams.set("filename", i),
              r.searchParams.set("referer", document.location.href),
              window.open(r.toString(), "_blank");
          }),
          r.appendChild(o);
      }
    });
  }
  var A = document.location.pathname.match(/^\/assignment\/([0-9]+)\//),
    E = document.location.pathname.match(/^\/course\/([0-9]+)\/materials-unified/);
  if ((A || E) && w && l.kami_return_assignment_url) {
    c("Schoology Elementary Turnin", { state: "PageScript Initial" });
    var q = `<div class="kami-overlay kami-overlay-fullscreen">\n      <img src="${n}/web/images/icon256.png" id="kami-logo">\n        <div id="kami-progress-bar"></div>\n        <div id="kami-completed" class="kami-elementary-message" style="display: none">\n           Your assignment has been submitted\n        </div>\n        <div id="kami-error" class="kami-elementary-message" style="display: none">\n           There was an error submitting your assignment, please try again.\n        </div>\n        <button id="kami-finished-button" style="display: none;">Done</button>\n      </div>`;
    u.innerHTML = q;
    q = u.children[0];
    u.removeChild(q), document.body.appendChild(q);
    var M = new ProgressBar.Line("#kami-progress-bar", {
      strokeWidth: 8,
      color: "#873ECF",
      trailColor: "#c9c9c9",
      trailWidth: 4,
      svgStyle: { width: "100%", height: "100%" },
      text: { value: "Getting Ready...", style: { color: "#000", padding: 20, margin: 0, transform: null }, autoStyleContainer: !1 },
      step: function (e, t) {
        t.setText(`Submitting assignment ${Math.round(100 * t.value())} %`);
      }
    });
    let e = l.kami_return_assignment_file_name || "submission.pdf",
      t = e.match(/^(.*)\.(\S*)$/);
    t ? (e = t[1] + ".pdf") : (e += ".pdf"),
      c("Schoology Elementary Turnin", { state: "Fetch return PDF" }),
      axios
        .get(l.kami_return_assignment_url, {
          responseType: "blob",
          onDownloadProgress: function (e) {
            M.animate((e.loaded / e.total) * 0.5);
          }
        })
        .catch(function (e) {
          console.warn("Kami Fetch PDF error", e), c("Schoology Elementary Turnin", { state: "Fetch PDF error", error: e, url_params: l });
        })
        .then(function (e) {
          return axios.get(`${a}/uploads/token`).then(function (t) {
            return (
              c("Schoology Elementary Turnin", { state: "Upload To Schoology" }),
              axios
                .post(`${a}/svc/file-upload-service/multipart/start`, {}, { headers: { Authorization: `Bearer ${t.data.data.token}` } })
                .then(function (n) {
                  return axios
                    .post(
                      `${a}/svc/file-upload-service/multipart/chunk`,
                      { filename: n.data.filename, uploadId: n.data.uploadId, partNumber: 1 },
                      { headers: { Authorization: `Bearer ${t.data.data.token}` } }
                    )
                    .then(function (i) {
                      return axios
                        .put(i.data.signedUrl, e.data, {
                          onUploadProgress: function (e) {
                            M.animate((e.loaded / e.total) * 0.5 + 0.5);
                          }
                        })
                        .then(function (e) {
                          return (
                            console.log(e),
                            axios.post(
                              `${a}/svc/file-upload-service/multipart/finish`,
                              {
                                etags: [{ eTag: e.headers.etag, partNumber: 1 }],
                                filemime: "application/pdf",
                                filename: n.data.filename,
                                uploadId: n.data.uploadId
                              },
                              { headers: { Authorization: `Bearer ${t.data.data.token}` } }
                            )
                          );
                        });
                    });
                })
            );
          });
        })
        .then(function (e) {
          c("Schoology Elementary Turnin", { state: "Submit Assignment" });
          let t = document.location.pathname.match(/^\/assignment\/([0-9]+)\//)[1],
            i = document.evaluate(
              "//script[contains(., 'course-materials-container')]",
              document,
              null,
              XPathResult.FIRST_ORDERED_NODE_TYPE,
              null
            ).singleNodeValue.innerHTML,
            r = i.match(/\"csrf\":{\"key":\"([^\"]+)\","token":"([^\"]+)\"}/),
            o = r[1],
            s = r[2],
            u = i.match(/sectionId":"([0-9]+)"/)[1];
          return axios
            .post(
              `${a}/v2/sections/${u}/assignments/${t}/upload`,
              { fileId: e.data.fileId, fileType: "upload" },
              { headers: { "x-csrf-key": o, "x-csrf-token": s } }
            )
            .then(function () {
              var e = l.document_identifier;
              if (e && "undefined" != e) {
                let i;
                return (
                  "onedrive" === l.storage
                    ? ((e = encodeURIComponent(e).replace(/!/g, "%21")),
                      (i = `${n}/web/viewer.html?document_identifier=${e}&source=onedrive`),
                      l.onedrive_drive_id && (i += `&encoded_onedrive_drive_id=${window.btoa(l.onedrive_drive_id)}`))
                    : (i = `${n}/web/viewer.html?state=${encodeURIComponent(JSON.stringify({ ids: [e], action: "open" }))}`),
                  axios
                    .get(`${a}/v2/sections/${u}/assignments/${t}`)
                    .then(function (e) {
                      return axios.get(e.data.submissions.viewUrl).then(function (t) {
                        c("Schoology Elementary Turnin", { state: "Got View Dropbox Response", response: t });
                        let n = t.data.match(/s-drop-item-add-comment-form-form-token\" value="([A-z0-9]+)"/)[1],
                          r = t.data.match(/form_build_id"\ id="([A-z0-9\-]+)"/)[1];
                        var o = new FormData();
                        o.append("form_build_id", r),
                          o.append("form_token", n),
                          o.append("form_id", "s_drop_item_add_comment_form"),
                          o.append("op", "Add Comment"),
                          o.append("drupal_ajax", "1");
                        let a = e.data.submissions.revisions.pop().revisionId;
                        return o.append("comment", "Open Revision " + a + " in Kami: " + i), axios.post(e.data.submissions.viewUrl, o);
                      });
                    })
                    .catch(function (e) {
                      c("Schoology Elementary Turnin", {
                        state: "Submit Grading Comment Error",
                        error: e.toString(),
                        stack: e.stack,
                        url_params: l
                      });
                    })
                );
              }
              return Promise.resolve();
            });
        })
        .then(function () {
          c("Schoology Elementary Turnin", { state: "Success" }),
            document.querySelector("#kami-progress-bar").remove(),
            document.querySelector("#kami-finished-button").addEventListener("click", function () {
              document.location = window.location.href.replace(window.location.search, "");
            }),
            (document.querySelector("#kami-completed").style.display = "block"),
            (document.querySelector("#kami-finished-button").style.display = "block");
          const e = document.querySelector("#kami-logo"),
            t = document.querySelector("#tick-url");
          t && ((e.src = t.dataset.tickUrl), (e.style.width = "60px")), h();
        })
        .catch(function (e) {
          (document.querySelector("#kami-error").style.display = "block"),
            (document.querySelector("#kami-finished-button").style.display = "block"),
            document.querySelector("#kami-finished-button").addEventListener("click", function () {
              document.location = window.location.href.replace(window.location.search, "");
            }),
            console.warn("Kami error showing submit dialog", e),
            (script_tags = Array.from(document.querySelectorAll("script"))
              .map(function (e) {
                return e.innerHTML;
              })
              .filter(function (e) {
                return e.length > 20;
              })),
            c("Schoology Elementary Turnin", {
              state: "Submission Error",
              error: e.toString(),
              stack: e.stack,
              url_params: l,
              script_tags: script_tags
            });
        });
  }
  var F = document.location.pathname.match(/^\/course\/([0-9]+)\/materials/),
    L = document.location.pathname.match(/^\/course\/([0-9]+)\/grades/);
  (F || L || S) &&
    "undefined" != typeof Drupal &&
    (Drupal.behaviors.sGradeItemKamiAssignmentSubmission = function (e) {
      var t;
      function i(e) {
        if (!!!e.target.closest(".kami-tooltip")) {
          e.stopPropagation(),
            e.preventDefault(),
            e.stopImmediatePropagation(),
            Popups.saveSettings(),
            c("Schoology Assignment Dialog", { state: "Open Picker Iframe" });
          var i = Popups.activePopup(),
            r = Popups.options({
              ajaxForm: !1,
              extraClass: "popups-extra-large s-grade-item-assignment-submission-popup",
              updateMethod: "none",
              hijackDestination: !1,
              disableCursorMod: !0,
              disableAttachBehaviors: !1
            }),
            o = `<iframe id="schoology-app-container" frameborder="0" width="100%" height="600" \n         src="${n}/web/viewer.html?open_dialog=lti_google_file_picker&seamless_dialog=true&parent_origin=${encodeURIComponent(
              a
            )}&schoology=1&supports_microsoft=1" name="schoology-app-container"\n         class="sAppLauncher-processed" style="height: 600px;"></iframe>\n         `;
          t = Popups.openPathContent("assignment_submission_app", "Add Assignment From Kami", o, e.target, r, i);
        }
      }
      function r(e) {
        if (e.data && "kami_file_picker" === e.data.type)
          if ("cancel" === e.data.action) Popups.close(t), c("Schoology Assignment Dialog", { state: "Picker iFrame Cancel" });
          else if ("picked" === e.data.action) {
            c("Schoology Assignment Dialog", { state: "Picker iFrame File Picked" });
            var i = `<div class="kami-overlay">\n               <img src="${n}/web/images/icon256.png" id="kami-logo">\n               <div id="kami-progress-bar"></div>\n             </div>`;
            document.querySelector(`#${t.id}  .popups-body`).innerHTML = i;
            var r,
              s = new ProgressBar.Line("#kami-progress-bar", {
                strokeWidth: 8,
                color: "#873ECF",
                trailColor: "#c9c9c9",
                trailWidth: 4,
                svgStyle: { width: "100%", height: "100%" },
                text: {
                  value: "Getting Ready...",
                  style: { color: "#000", padding: 20, margin: 0, transform: null },
                  autoStyleContainer: !1
                },
                step: function (e, t) {
                  t.setText(Math.round(100 * t.value()) + " %");
                }
              }),
              u = e.data,
              l = u.file_name.match(/^(.*)\.(\S*)$/),
              d = u.current_user.current_license,
              p = "";
            d && d.license_key && d.allow_auto_enrollment && (p = "k_lic_" + btoa(d.license_key) + "_");
            var h = "";
            switch (u.storage) {
              case "onedrive":
                h = "k_o_";
                break;
              case "googledrive":
                h = "k_g_";
            }
            var f = "k_sch_" + btoa(u.current_user.email) + "_";
            (r = p + h + (r = l ? f + l[1] + ".pdf" : f + u.file_name + ".pdf")),
              (headers = {}),
              u.authorization_header && (headers.Authorization = u.authorization_header),
              axios
                .get(u.download_url, {
                  responseType: "blob",
                  onDownloadProgress: function (e) {
                    s.animate((e.loaded / e.total) * 0.5);
                  },
                  headers: headers
                })
                .then(function (e) {
                  var t = new FormData();
                  return (
                    t.append("name", r),
                    t.append("use_plain", 1),
                    t.append("chunks", 1),
                    t.append("chunk", 0),
                    t.append("file", e.data),
                    axios.post(`${a}/s_attachment_upload_chunked/2`, t, {
                      onUploadProgress: function (e) {
                        s.animate((e.loaded / e.total) * 0.5 + 0.5);
                      }
                    })
                  );
                })
                .then(function (e) {
                  console.log(e);
                  if (e.request.responseURL.startsWith("https://app.schoology.com/login"))
                    return void Popups.openPathContent(
                      "assignment_submission_logged_out_error",
                      "Logged Out",
                      '<div class="kami-logged-out-dialog">\n                     <p>You have been logged out of Schoology. Please login and try again.</p>\n\n                     <button onclick="window.location.href = \'https://app.schoology.com/login\'" class="kami-logged-out-dialog-login-button">Log In</button>\n                   </div>',
                      null,
                      Popups.options({
                        ajaxForm: !1,
                        updateMethod: "none",
                        hijackDestination: !1,
                        disableCursorMod: !0,
                        disableAttachBehaviors: !1
                      }),
                      Popups.activePopup()
                    );
                  var n = document.querySelector("[name='file[files]'"),
                    i = {};
                  try {
                    i = JSON.parse(n.value);
                  } catch (e) {}
                  let r = u.file_name + ".Kami";
                  (i[e.data.file.fid] = { title: r, encode: !0, kami_assignment: !0 }), (n.value = JSON.stringify(i)), o({ title: r });
                  var a = document.querySelector(".s-grade-item-assignment-submission-content-remove"),
                    s = function (t) {
                      var i = {};
                      try {
                        i = JSON.parse(n.value);
                      } catch (e) {}
                      delete i[e.data.file.fid], (n.value = JSON.stringify(i)), a.removeEventListener("click", s);
                    };
                  a.addEventListener("click", s), Popups.close(t), c("Schoology Assignment Dialog", { state: "Kami Attachment Ready" });
                })
                .catch(function (e) {
                  document.querySelector(
                    `#${t.id} .popups-body .kami-overlay`
                  ).innerHTML = `\n                <div style="margin: 0 5em">\n                  <h5 color="">Oops, an error occurred when loading your file</h5>\n                  <p>It is possible that some of the network resources used by Kami have been blocked.\n                    Please contact your network administrator and make sure \n                    <a href="https://help.kamiapp.com/en/articles/1420804-kami-network-requirements" target="_blank">\n                      Kami Network Requirements\n                    </a> are met.\n                  </p>\n                  <pre class="debug-message" ng-if="error_message">${u.debug_print}</pre>\n                </div>`;
                  const n = e.config ? e.config.url : void 0,
                    i = e.response ? e.response.status : void 0;
                  c("Schoology Error", { error: { name: e.name, message: e.message, stack: e.stack, url: n, response_status: i } });
                });
          }
      }
      function o(e) {
        $(".s-grade-item-assignment-submission-app, .s-grade-item-kami-assignment-submission-app").each(function () {
          var e = $(this);
          "kami" == e.data("app-nid") ? e.addClass("active") : e.hide();
        }),
          e.icon &&
            e.icon.url &&
            ($(".s-grade-item-assignment-submission-content-icon").css("background-image", "url(" + e.icon.url + ")"),
            e.icon.width &&
              e.icon.height &&
              (function (e) {
                var t = $(".s-grade-item-assignment-submission-content-icon"),
                  n = $(".s-grade-item-assignment-submission-content-title"),
                  i = parseInt(n.css("max-width"), 10),
                  r = parseInt(t.css("width"), 10),
                  o = +e.icon.width;
                n.css("max-width", i + r - o + "px"), t.css("width", e.icon.width + "px"), t.css("height", e.icon.height + "px");
              })(e)),
          $(".s-grade-item-assignment-submission-content-title").text(e.title),
          $(".s-grade-item-assignment-submission-content").show(),
          (function () {
            var e = $(".adv-option-btn.toggle-dropbox");
            e.hasClass("adv-option-on") || e.click();
            e.hide();
          })(),
          (function () {
            var e = $(".adv-option-btn.toggle-comments");
            e.hasClass("adv-option-on") && e.click();
            e.hide();
          })();
      }
      (function () {
        const e = document.head.querySelector("[data-kami-hide-create-assignment-button]");
        return e && "true" === e.dataset.kamiHideCreateAssignmentButton;
      })() ||
        (function () {
          try {
            if (!$(".course-material-type-assignment", e).length) return;
            !(function () {
              var t = `<div class="s-grade-item-assignment-submission-app" tabindex="0" data-app-nid="kami">\n         <div class="app-logo-container"><img class="app-logo" src="${n}/web/images/icon48.png"></div>\n         <div class="app-title">Kami</div>\n         <div class="kami-tooltip">New! Assign Kami files from Schoology and allow students to turn in in-app! <a href="https://help.kamihq.com/schoology/using-kamis-schoology-integration" target="_blank">Learn More</a>\n         </div>`;
              u.innerHTML = t;
              var o = u.children[0];
              u.removeChild(o);
              var a = document.querySelector(".s-grade-item-assignment-submission-apps");
              if (null == a) {
                var s =
                  '<div id="s-grade-item-assignment-submission-wrapper" class="form-row-wrapper s-grade-item-assignment-submission-inline-wrapper clearfix"><input type="hidden" name="assignment_submission_id" id="edit-assignment-submission-id" value=""><link rel="stylesheet" href="https://asset-cdn.schoology.com/sites/all/modules/schoology_core/s_grades/s_grade_item/s_grade_item_assignment_submission.css">\n   <div class="form-item ">\n    <label>Assign From App: </label>\n   </div>\n   <div class="s-grade-item-assignment-submission-container"><div class="s-grade-item-assignment-submission-apps">\n   </div>\n   <div class="s-grade-item-assignment-submission-content" style="display:none">\n         <div class="s-grade-item-assignment-submission-content-icon"></div>\n         <div class="s-grade-item-assignment-submission-content-title"></div>\n         <a href="#" class="s-grade-item-assignment-submission-content-remove sExtlink-processed" tabindex="0"></a>\n         <div class="s-grade-item-assignment-submission-content-hint">This will create a copy of your file for each student</div>\n       </div>\n   </div>';
                u.innerHTML = s;
                var c = u.children[0];
                u.removeChild(c);
                var l = document.querySelector("#attachments");
                l.parentElement.insertBefore(c, l.nextSibling),
                  document.querySelector(".s-grade-item-assignment-submission-content-remove").addEventListener("click", function (t) {
                    $(".s-grade-item-assignment-submission-content", e).hide(),
                      $(".s-grade-item-assignment-submission-app", e).show().removeClass("active"),
                      $(".adv-option-btn.toggle-dropbox").show();
                    var n = $(".adv-option-btn.toggle-comments");
                    n.hasClass("adv-option-on") || n.click(), n.show();
                  }),
                  (a = document.querySelector(".s-grade-item-assignment-submission-apps"));
              }
              a.appendChild(o), o.addEventListener("click", i, { capture: !0 }), window.addEventListener("message", r);
            })(),
              (function () {
                var e = document.querySelector("[name='file[files]'"),
                  t = {};
                try {
                  t = JSON.parse(e.value);
                } catch (e) {}
                for (const e of Object.keys(t)) {
                  if (t[e].kami_assignment) o({ title: t[e].title });
                }
              })(),
              c("Schoology Assignment Dialog", { state: "Show" });
          } catch (e) {
            console.log(e), c("Schoology Assignment Dialog", { state: "Error", error: e.message });
          }
        })();
    }),
    (F || L) &&
      setInterval(() => {
        let e = document.querySelector(".popups-box");
        if (e) {
          let t = e.querySelector("#edit-external-tool-consumer-key-wrapper"),
            n = e.querySelector("#edit-external-tool-shared-secret-wrapper"),
            i = e.querySelector("textarea#edit-external-tool-url");
          if (i) {
            if (
              [
                "https://api.local.kamipdf.com",
                "https://api-staging.kamihq.com",
                "https://canary.kamihq.com/api",
                "https://canary2.kamihq.com/api",
                "https://api-test.kamihq.com",
                "https://api-test1.kamihq.com",
                "https://api-test2.kamihq.com",
                "https://api-test3.kamihq.com",
                "https://api-test4.kamihq.com",
                "https://api-test5.kamihq.com",
                "https://api-test6.kamihq.com",
                "https://api-test7.kami.systems",
                "https://api-test8.kami.systems",
                "https://api-test9.kami.systems",
                "https://api.kamihq.com"
              ].some((e) => i.value.startsWith(e))
            ) {
              if (t) {
                (t.querySelector("input").value = ""), (t.style.display = "none");
              }
              if (n) {
                (n.querySelector("input").value = ""), (n.style.display = "none");
              }
            }
          }
        }
      }, 500),
    document.location.pathname.match(/^\/external_tool\/([0-9]+)\/launch/) &&
      ((iframe = document.querySelector("iframe#external-tool-iframe")),
      iframe &&
        ((iframe.allow =
          "geolocation *; microphone *; camera *; midi *; encrypted-media *; autoplay *; clipboard-write *; display-capture *; fullscreen *;"),
        iframe.setAttribute("allowfullscreen", "allowfullscreen"),
        iframe.setAttribute("webkitallowfullscreen", "true"),
        iframe.setAttribute("mozallowfullscreen", "true"),
        (iframe.src = iframe.src)));
})();
