(() => {
  var e = {
      825: () => {
        (Storage.prototype.setObject = function (e, t) {
          this.setItem(e, JSON.stringify(t));
        }),
          (Storage.prototype.getObject = function (e) {
            let t = this.getItem(e);
            return t && JSON.parse(t);
          });
      }
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var s = (t[r] = { exports: {} });
    return e[r](s, s.exports, n), s.exports;
  }
  (n.d = (e, t) => {
    for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
  }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      "use strict";
      var e = {};
      function t(e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      }
      n.r(e), n.d(e, { hasBrowserEnv: () => te, hasStandardBrowserEnv: () => ne, hasStandardBrowserWebWorkerEnv: () => oe }), n(825);
      const { toString: r } = Object.prototype,
        { getPrototypeOf: o } = Object,
        s =
          ((i = Object.create(null)),
          (e) => {
            const t = r.call(e);
            return i[t] || (i[t] = t.slice(8, -1).toLowerCase());
          });
      var i;
      const a = (e) => ((e = e.toLowerCase()), (t) => s(t) === e),
        c = (e) => (t) => typeof t === e,
        { isArray: u } = Array,
        l = c("undefined"),
        d = a("ArrayBuffer"),
        f = c("string"),
        h = c("function"),
        p = c("number"),
        m = (e) => null !== e && "object" == typeof e,
        g = (e) => {
          if ("object" !== s(e)) return !1;
          const t = o(e);
          return !(
            (null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t)) ||
            Symbol.toStringTag in e ||
            Symbol.iterator in e
          );
        },
        y = a("Date"),
        b = a("File"),
        w = a("Blob"),
        S = a("FileList"),
        E = a("URLSearchParams");
      function O(e, t, { allOwnKeys: n = !1 } = {}) {
        if (null == e) return;
        let r, o;
        if (("object" != typeof e && (e = [e]), u(e))) for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
        else {
          const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
            s = o.length;
          let i;
          for (r = 0; r < s; r++) (i = o[r]), t.call(null, e[i], i, e);
        }
      }
      function R(e, t) {
        t = t.toLowerCase();
        const n = Object.keys(e);
        let r,
          o = n.length;
        for (; o-- > 0; ) if (((r = n[o]), t === r.toLowerCase())) return r;
        return null;
      }
      const v =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : global,
        T = (e) => !l(e) && e !== v,
        A = ((j = "undefined" != typeof Uint8Array && o(Uint8Array)), (e) => j && e instanceof j);
      var j;
      const P = a("HTMLFormElement"),
        N = (
          ({ hasOwnProperty: e }) =>
          (t, n) =>
            e.call(t, n)
        )(Object.prototype),
        x = a("RegExp"),
        C = (e, t) => {
          const n = Object.getOwnPropertyDescriptors(e),
            r = {};
          O(n, (n, o) => {
            let s;
            !1 !== (s = t(n, o, e)) && (r[o] = s || n);
          }),
            Object.defineProperties(e, r);
        },
        _ = "abcdefghijklmnopqrstuvwxyz",
        U = "0123456789",
        L = { DIGIT: U, ALPHA: _, ALPHA_DIGIT: _ + _.toUpperCase() + U },
        F = a("AsyncFunction"),
        D = {
          isArray: u,
          isArrayBuffer: d,
          isBuffer: function (e) {
            return (
              null !== e && !l(e) && null !== e.constructor && !l(e.constructor) && h(e.constructor.isBuffer) && e.constructor.isBuffer(e)
            );
          },
          isFormData: (e) => {
            let t;
            return (
              e &&
              (("function" == typeof FormData && e instanceof FormData) ||
                (h(e.append) && ("formdata" === (t = s(e)) || ("object" === t && h(e.toString) && "[object FormData]" === e.toString()))))
            );
          },
          isArrayBufferView: function (e) {
            let t;
            return (t = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && d(e.buffer)), t;
          },
          isString: f,
          isNumber: p,
          isBoolean: (e) => !0 === e || !1 === e,
          isObject: m,
          isPlainObject: g,
          isUndefined: l,
          isDate: y,
          isFile: b,
          isBlob: w,
          isRegExp: x,
          isFunction: h,
          isStream: (e) => m(e) && h(e.pipe),
          isURLSearchParams: E,
          isTypedArray: A,
          isFileList: S,
          forEach: O,
          merge: function e() {
            const { caseless: t } = (T(this) && this) || {},
              n = {},
              r = (r, o) => {
                const s = (t && R(n, o)) || o;
                g(n[s]) && g(r) ? (n[s] = e(n[s], r)) : g(r) ? (n[s] = e({}, r)) : u(r) ? (n[s] = r.slice()) : (n[s] = r);
              };
            for (let e = 0, t = arguments.length; e < t; e++) arguments[e] && O(arguments[e], r);
            return n;
          },
          extend: (e, n, r, { allOwnKeys: o } = {}) => (
            O(
              n,
              (n, o) => {
                r && h(n) ? (e[o] = t(n, r)) : (e[o] = n);
              },
              { allOwnKeys: o }
            ),
            e
          ),
          trim: (e) => (e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")),
          stripBOM: (e) => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
          inherits: (e, t, n, r) => {
            (e.prototype = Object.create(t.prototype, r)),
              (e.prototype.constructor = e),
              Object.defineProperty(e, "super", { value: t.prototype }),
              n && Object.assign(e.prototype, n);
          },
          toFlatObject: (e, t, n, r) => {
            let s, i, a;
            const c = {};
            if (((t = t || {}), null == e)) return t;
            do {
              for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
                (a = s[i]), (r && !r(a, e, t)) || c[a] || ((t[a] = e[a]), (c[a] = !0));
              e = !1 !== n && o(e);
            } while (e && (!n || n(e, t)) && e !== Object.prototype);
            return t;
          },
          kindOf: s,
          kindOfTest: a,
          endsWith: (e, t, n) => {
            (e = String(e)), (void 0 === n || n > e.length) && (n = e.length), (n -= t.length);
            const r = e.indexOf(t, n);
            return -1 !== r && r === n;
          },
          toArray: (e) => {
            if (!e) return null;
            if (u(e)) return e;
            let t = e.length;
            if (!p(t)) return null;
            const n = new Array(t);
            for (; t-- > 0; ) n[t] = e[t];
            return n;
          },
          forEachEntry: (e, t) => {
            const n = (e && e[Symbol.iterator]).call(e);
            let r;
            for (; (r = n.next()) && !r.done; ) {
              const n = r.value;
              t.call(e, n[0], n[1]);
            }
          },
          matchAll: (e, t) => {
            let n;
            const r = [];
            for (; null !== (n = e.exec(t)); ) r.push(n);
            return r;
          },
          isHTMLForm: P,
          hasOwnProperty: N,
          hasOwnProp: N,
          reduceDescriptors: C,
          freezeMethods: (e) => {
            C(e, (t, n) => {
              if (h(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n)) return !1;
              const r = e[n];
              h(r) &&
                ((t.enumerable = !1),
                "writable" in t
                  ? (t.writable = !1)
                  : t.set ||
                    (t.set = () => {
                      throw Error("Can not rewrite read-only method '" + n + "'");
                    }));
            });
          },
          toObjectSet: (e, t) => {
            const n = {},
              r = (e) => {
                e.forEach((e) => {
                  n[e] = !0;
                });
              };
            return u(e) ? r(e) : r(String(e).split(t)), n;
          },
          toCamelCase: (e) =>
            e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
              return t.toUpperCase() + n;
            }),
          noop: () => {},
          toFiniteNumber: (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
          findKey: R,
          global: v,
          isContextDefined: T,
          ALPHABET: L,
          generateString: (e = 16, t = L.ALPHA_DIGIT) => {
            let n = "";
            const { length: r } = t;
            for (; e--; ) n += t[(Math.random() * r) | 0];
            return n;
          },
          isSpecCompliantForm: function (e) {
            return !!(e && h(e.append) && "FormData" === e[Symbol.toStringTag] && e[Symbol.iterator]);
          },
          toJSONObject: (e) => {
            const t = new Array(10),
              n = (e, r) => {
                if (m(e)) {
                  if (t.indexOf(e) >= 0) return;
                  if (!("toJSON" in e)) {
                    t[r] = e;
                    const o = u(e) ? [] : {};
                    return (
                      O(e, (e, t) => {
                        const s = n(e, r + 1);
                        !l(s) && (o[t] = s);
                      }),
                      (t[r] = void 0),
                      o
                    );
                  }
                }
                return e;
              };
            return n(e, 0);
          },
          isAsyncFn: F,
          isThenable: (e) => e && (m(e) || h(e)) && h(e.then) && h(e.catch)
        };
      function k(e, t, n, r, o) {
        Error.call(this),
          Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : (this.stack = new Error().stack),
          (this.message = e),
          (this.name = "AxiosError"),
          t && (this.code = t),
          n && (this.config = n),
          r && (this.request = r),
          o && (this.response = o);
      }
      D.inherits(k, Error, {
        toJSON: function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: D.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
          };
        }
      });
      const B = k.prototype,
        I = {};
      [
        "ERR_BAD_OPTION_VALUE",
        "ERR_BAD_OPTION",
        "ECONNABORTED",
        "ETIMEDOUT",
        "ERR_NETWORK",
        "ERR_FR_TOO_MANY_REDIRECTS",
        "ERR_DEPRECATED",
        "ERR_BAD_RESPONSE",
        "ERR_BAD_REQUEST",
        "ERR_CANCELED",
        "ERR_NOT_SUPPORT",
        "ERR_INVALID_URL"
      ].forEach((e) => {
        I[e] = { value: e };
      }),
        Object.defineProperties(k, I),
        Object.defineProperty(B, "isAxiosError", { value: !0 }),
        (k.from = (e, t, n, r, o, s) => {
          const i = Object.create(B);
          return (
            D.toFlatObject(
              e,
              i,
              function (e) {
                return e !== Error.prototype;
              },
              (e) => "isAxiosError" !== e
            ),
            k.call(i, e.message, t, n, r, o),
            (i.cause = e),
            (i.name = e.name),
            s && Object.assign(i, s),
            i
          );
        });
      const M = k;
      function q(e) {
        return D.isPlainObject(e) || D.isArray(e);
      }
      function z(e) {
        return D.endsWith(e, "[]") ? e.slice(0, -2) : e;
      }
      function H(e, t, n) {
        return e
          ? e
              .concat(t)
              .map(function (e, t) {
                return (e = z(e)), !n && t ? "[" + e + "]" : e;
              })
              .join(n ? "." : "")
          : t;
      }
      const J = D.toFlatObject(D, {}, null, function (e) {
          return /^is[A-Z]/.test(e);
        }),
        V = function (e, t, n) {
          if (!D.isObject(e)) throw new TypeError("target must be an object");
          t = t || new FormData();
          const r = (n = D.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (e, t) {
              return !D.isUndefined(t[e]);
            })).metaTokens,
            o = n.visitor || u,
            s = n.dots,
            i = n.indexes,
            a = (n.Blob || ("undefined" != typeof Blob && Blob)) && D.isSpecCompliantForm(t);
          if (!D.isFunction(o)) throw new TypeError("visitor must be a function");
          function c(e) {
            if (null === e) return "";
            if (D.isDate(e)) return e.toISOString();
            if (!a && D.isBlob(e)) throw new M("Blob is not supported. Use a Buffer instead.");
            return D.isArrayBuffer(e) || D.isTypedArray(e) ? (a && "function" == typeof Blob ? new Blob([e]) : Buffer.from(e)) : e;
          }
          function u(e, n, o) {
            let a = e;
            if (e && !o && "object" == typeof e)
              if (D.endsWith(n, "{}")) (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
              else if (
                (D.isArray(e) &&
                  (function (e) {
                    return D.isArray(e) && !e.some(q);
                  })(e)) ||
                ((D.isFileList(e) || D.endsWith(n, "[]")) && (a = D.toArray(e)))
              )
                return (
                  (n = z(n)),
                  a.forEach(function (e, r) {
                    !D.isUndefined(e) && null !== e && t.append(!0 === i ? H([n], r, s) : null === i ? n : n + "[]", c(e));
                  }),
                  !1
                );
            return !!q(e) || (t.append(H(o, n, s), c(e)), !1);
          }
          const l = [],
            d = Object.assign(J, { defaultVisitor: u, convertValue: c, isVisitable: q });
          if (!D.isObject(e)) throw new TypeError("data must be an object");
          return (
            (function e(n, r) {
              if (!D.isUndefined(n)) {
                if (-1 !== l.indexOf(n)) throw Error("Circular reference detected in " + r.join("."));
                l.push(n),
                  D.forEach(n, function (n, s) {
                    !0 === (!(D.isUndefined(n) || null === n) && o.call(t, n, D.isString(s) ? s.trim() : s, r, d)) &&
                      e(n, r ? r.concat(s) : [s]);
                  }),
                  l.pop();
              }
            })(e),
            t
          );
        };
      function $(e) {
        const t = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
        return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
          return t[e];
        });
      }
      function K(e, t) {
        (this._pairs = []), e && V(e, this, t);
      }
      const W = K.prototype;
      (W.append = function (e, t) {
        this._pairs.push([e, t]);
      }),
        (W.toString = function (e) {
          const t = e
            ? function (t) {
                return e.call(this, t, $);
              }
            : $;
          return this._pairs
            .map(function (e) {
              return t(e[0]) + "=" + t(e[1]);
            }, "")
            .join("&");
        });
      const X = K;
      function G(e) {
        return encodeURIComponent(e)
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",")
          .replace(/%20/g, "+")
          .replace(/%5B/gi, "[")
          .replace(/%5D/gi, "]");
      }
      function Q(e, t, n) {
        if (!t) return e;
        const r = (n && n.encode) || G,
          o = n && n.serialize;
        let s;
        if (((s = o ? o(t, n) : D.isURLSearchParams(t) ? t.toString() : new X(t, n).toString(r)), s)) {
          const t = e.indexOf("#");
          -1 !== t && (e = e.slice(0, t)), (e += (-1 === e.indexOf("?") ? "?" : "&") + s);
        }
        return e;
      }
      const Y = class {
          constructor() {
            this.handlers = [];
          }
          use(e, t, n) {
            return (
              this.handlers.push({ fulfilled: e, rejected: t, synchronous: !!n && n.synchronous, runWhen: n ? n.runWhen : null }),
              this.handlers.length - 1
            );
          }
          eject(e) {
            this.handlers[e] && (this.handlers[e] = null);
          }
          clear() {
            this.handlers && (this.handlers = []);
          }
          forEach(e) {
            D.forEach(this.handlers, function (t) {
              null !== t && e(t);
            });
          }
        },
        Z = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
        ee = {
          isBrowser: !0,
          classes: {
            URLSearchParams: "undefined" != typeof URLSearchParams ? URLSearchParams : X,
            FormData: "undefined" != typeof FormData ? FormData : null,
            Blob: "undefined" != typeof Blob ? Blob : null
          },
          protocols: ["http", "https", "file", "blob", "url", "data"]
        },
        te = "undefined" != typeof window && "undefined" != typeof document,
        ne = ((re = "undefined" != typeof navigator && navigator.product), te && ["ReactNative", "NativeScript", "NS"].indexOf(re) < 0);
      var re;
      const oe = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts,
        se = { ...e, ...ee },
        ie = function (e) {
          function t(e, n, r, o) {
            let s = e[o++];
            const i = Number.isFinite(+s),
              a = o >= e.length;
            return (
              (s = !s && D.isArray(r) ? r.length : s),
              a
                ? (D.hasOwnProp(r, s) ? (r[s] = [r[s], n]) : (r[s] = n), !i)
                : ((r[s] && D.isObject(r[s])) || (r[s] = []),
                  t(e, n, r[s], o) &&
                    D.isArray(r[s]) &&
                    (r[s] = (function (e) {
                      const t = {},
                        n = Object.keys(e);
                      let r;
                      const o = n.length;
                      let s;
                      for (r = 0; r < o; r++) (s = n[r]), (t[s] = e[s]);
                      return t;
                    })(r[s])),
                  !i)
            );
          }
          if (D.isFormData(e) && D.isFunction(e.entries)) {
            const n = {};
            return (
              D.forEachEntry(e, (e, r) => {
                t(
                  (function (e) {
                    return D.matchAll(/\w+|\[(\w*)]/g, e).map((e) => ("[]" === e[0] ? "" : e[1] || e[0]));
                  })(e),
                  r,
                  n,
                  0
                );
              }),
              n
            );
          }
          return null;
        },
        ae = {
          transitional: Z,
          adapter: ["xhr", "http"],
          transformRequest: [
            function (e, t) {
              const n = t.getContentType() || "",
                r = n.indexOf("application/json") > -1,
                o = D.isObject(e);
              if ((o && D.isHTMLForm(e) && (e = new FormData(e)), D.isFormData(e))) return r && r ? JSON.stringify(ie(e)) : e;
              if (D.isArrayBuffer(e) || D.isBuffer(e) || D.isStream(e) || D.isFile(e) || D.isBlob(e)) return e;
              if (D.isArrayBufferView(e)) return e.buffer;
              if (D.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
              let s;
              if (o) {
                if (n.indexOf("application/x-www-form-urlencoded") > -1)
                  return (function (e, t) {
                    return V(
                      e,
                      new se.classes.URLSearchParams(),
                      Object.assign(
                        {
                          visitor: function (e, t, n, r) {
                            return se.isNode && D.isBuffer(e)
                              ? (this.append(t, e.toString("base64")), !1)
                              : r.defaultVisitor.apply(this, arguments);
                          }
                        },
                        t
                      )
                    );
                  })(e, this.formSerializer).toString();
                if ((s = D.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                  const t = this.env && this.env.FormData;
                  return V(s ? { "files[]": e } : e, t && new t(), this.formSerializer);
                }
              }
              return o || r
                ? (t.setContentType("application/json", !1),
                  (function (e, t, n) {
                    if (D.isString(e))
                      try {
                        return (0, JSON.parse)(e), D.trim(e);
                      } catch (e) {
                        if ("SyntaxError" !== e.name) throw e;
                      }
                    return (0, JSON.stringify)(e);
                  })(e))
                : e;
            }
          ],
          transformResponse: [
            function (e) {
              const t = this.transitional || ae.transitional,
                n = t && t.forcedJSONParsing,
                r = "json" === this.responseType;
              if (e && D.isString(e) && ((n && !this.responseType) || r)) {
                const n = !(t && t.silentJSONParsing) && r;
                try {
                  return JSON.parse(e);
                } catch (e) {
                  if (n) {
                    if ("SyntaxError" === e.name) throw M.from(e, M.ERR_BAD_RESPONSE, this, null, this.response);
                    throw e;
                  }
                }
              }
              return e;
            }
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          env: { FormData: se.classes.FormData, Blob: se.classes.Blob },
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
          headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } }
        };
      D.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
        ae.headers[e] = {};
      });
      const ce = ae,
        ue = D.toObjectSet([
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
        ]),
        le = Symbol("internals");
      function de(e) {
        return e && String(e).trim().toLowerCase();
      }
      function fe(e) {
        return !1 === e || null == e ? e : D.isArray(e) ? e.map(fe) : String(e);
      }
      function he(e, t, n, r, o) {
        return D.isFunction(r)
          ? r.call(this, t, n)
          : (o && (t = n), D.isString(t) ? (D.isString(r) ? -1 !== t.indexOf(r) : D.isRegExp(r) ? r.test(t) : void 0) : void 0);
      }
      class pe {
        constructor(e) {
          e && this.set(e);
        }
        set(e, t, n) {
          const r = this;
          function o(e, t, n) {
            const o = de(t);
            if (!o) throw new Error("header name must be a non-empty string");
            const s = D.findKey(r, o);
            (!s || void 0 === r[s] || !0 === n || (void 0 === n && !1 !== r[s])) && (r[s || t] = fe(e));
          }
          const s = (e, t) => D.forEach(e, (e, n) => o(e, n, t));
          return (
            D.isPlainObject(e) || e instanceof this.constructor
              ? s(e, t)
              : D.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
              ? s(
                  ((e) => {
                    const t = {};
                    let n, r, o;
                    return (
                      e &&
                        e.split("\n").forEach(function (e) {
                          (o = e.indexOf(":")),
                            (n = e.substring(0, o).trim().toLowerCase()),
                            (r = e.substring(o + 1).trim()),
                            !n ||
                              (t[n] && ue[n]) ||
                              ("set-cookie" === n ? (t[n] ? t[n].push(r) : (t[n] = [r])) : (t[n] = t[n] ? t[n] + ", " + r : r));
                        }),
                      t
                    );
                  })(e),
                  t
                )
              : null != e && o(t, e, n),
            this
          );
        }
        get(e, t) {
          if ((e = de(e))) {
            const n = D.findKey(this, e);
            if (n) {
              const e = this[n];
              if (!t) return e;
              if (!0 === t)
                return (function (e) {
                  const t = Object.create(null),
                    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                  let r;
                  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
                  return t;
                })(e);
              if (D.isFunction(t)) return t.call(this, e, n);
              if (D.isRegExp(t)) return t.exec(e);
              throw new TypeError("parser must be boolean|regexp|function");
            }
          }
        }
        has(e, t) {
          if ((e = de(e))) {
            const n = D.findKey(this, e);
            return !(!n || void 0 === this[n] || (t && !he(0, this[n], n, t)));
          }
          return !1;
        }
        delete(e, t) {
          const n = this;
          let r = !1;
          function o(e) {
            if ((e = de(e))) {
              const o = D.findKey(n, e);
              !o || (t && !he(0, n[o], o, t)) || (delete n[o], (r = !0));
            }
          }
          return D.isArray(e) ? e.forEach(o) : o(e), r;
        }
        clear(e) {
          const t = Object.keys(this);
          let n = t.length,
            r = !1;
          for (; n--; ) {
            const o = t[n];
            (e && !he(0, this[o], o, e, !0)) || (delete this[o], (r = !0));
          }
          return r;
        }
        normalize(e) {
          const t = this,
            n = {};
          return (
            D.forEach(this, (r, o) => {
              const s = D.findKey(n, o);
              if (s) return (t[s] = fe(r)), void delete t[o];
              const i = e
                ? (function (e) {
                    return e
                      .trim()
                      .toLowerCase()
                      .replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
                  })(o)
                : String(o).trim();
              i !== o && delete t[o], (t[i] = fe(r)), (n[i] = !0);
            }),
            this
          );
        }
        concat(...e) {
          return this.constructor.concat(this, ...e);
        }
        toJSON(e) {
          const t = Object.create(null);
          return (
            D.forEach(this, (n, r) => {
              null != n && !1 !== n && (t[r] = e && D.isArray(n) ? n.join(", ") : n);
            }),
            t
          );
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON())
            .map(([e, t]) => e + ": " + t)
            .join("\n");
        }
        get [Symbol.toStringTag]() {
          return "AxiosHeaders";
        }
        static from(e) {
          return e instanceof this ? e : new this(e);
        }
        static concat(e, ...t) {
          const n = new this(e);
          return t.forEach((e) => n.set(e)), n;
        }
        static accessor(e) {
          const t = (this[le] = this[le] = { accessors: {} }).accessors,
            n = this.prototype;
          function r(e) {
            const r = de(e);
            t[r] ||
              ((function (e, t) {
                const n = D.toCamelCase(" " + t);
                ["get", "set", "has"].forEach((r) => {
                  Object.defineProperty(e, r + n, {
                    value: function (e, n, o) {
                      return this[r].call(this, t, e, n, o);
                    },
                    configurable: !0
                  });
                });
              })(n, e),
              (t[r] = !0));
          }
          return D.isArray(e) ? e.forEach(r) : r(e), this;
        }
      }
      pe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]),
        D.reduceDescriptors(pe.prototype, ({ value: e }, t) => {
          let n = t[0].toUpperCase() + t.slice(1);
          return {
            get: () => e,
            set(e) {
              this[n] = e;
            }
          };
        }),
        D.freezeMethods(pe);
      const me = pe;
      function ge(e, t) {
        const n = this || ce,
          r = t || n,
          o = me.from(r.headers);
        let s = r.data;
        return (
          D.forEach(e, function (e) {
            s = e.call(n, s, o.normalize(), t ? t.status : void 0);
          }),
          o.normalize(),
          s
        );
      }
      function ye(e) {
        return !(!e || !e.__CANCEL__);
      }
      function be(e, t, n) {
        M.call(this, null == e ? "canceled" : e, M.ERR_CANCELED, t, n), (this.name = "CanceledError");
      }
      D.inherits(be, M, { __CANCEL__: !0 });
      const we = be,
        Se = se.hasStandardBrowserEnv
          ? {
              write(e, t, n, r, o, s) {
                const i = [e + "=" + encodeURIComponent(t)];
                D.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
                  D.isString(r) && i.push("path=" + r),
                  D.isString(o) && i.push("domain=" + o),
                  !0 === s && i.push("secure"),
                  (document.cookie = i.join("; "));
              },
              read(e) {
                const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null;
              },
              remove(e) {
                this.write(e, "", Date.now() - 864e5);
              }
            }
          : { write() {}, read: () => null, remove() {} };
      function Ee(e, t) {
        return e &&
          !(function (e) {
            return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
          })(t)
          ? (function (e, t) {
              return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
            })(e, t)
          : t;
      }
      const Oe = se.hasStandardBrowserEnv
        ? (function () {
            const e = /(msie|trident)/i.test(navigator.userAgent),
              t = document.createElement("a");
            let n;
            function r(n) {
              let r = n;
              return (
                e && (t.setAttribute("href", r), (r = t.href)),
                t.setAttribute("href", r),
                {
                  href: t.href,
                  protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                  host: t.host,
                  search: t.search ? t.search.replace(/^\?/, "") : "",
                  hash: t.hash ? t.hash.replace(/^#/, "") : "",
                  hostname: t.hostname,
                  port: t.port,
                  pathname: "/" === t.pathname.charAt(0) ? t.pathname : "/" + t.pathname
                }
              );
            }
            return (
              (n = r(window.location.href)),
              function (e) {
                const t = D.isString(e) ? r(e) : e;
                return t.protocol === n.protocol && t.host === n.host;
              }
            );
          })()
        : function () {
            return !0;
          };
      function Re(e, t) {
        let n = 0;
        const r = (function (e, t) {
          e = e || 10;
          const n = new Array(e),
            r = new Array(e);
          let o,
            s = 0,
            i = 0;
          return (
            (t = void 0 !== t ? t : 1e3),
            function (a) {
              const c = Date.now(),
                u = r[i];
              o || (o = c), (n[s] = a), (r[s] = c);
              let l = i,
                d = 0;
              for (; l !== s; ) (d += n[l++]), (l %= e);
              if (((s = (s + 1) % e), s === i && (i = (i + 1) % e), c - o < t)) return;
              const f = u && c - u;
              return f ? Math.round((1e3 * d) / f) : void 0;
            }
          );
        })(50, 250);
        return (o) => {
          const s = o.loaded,
            i = o.lengthComputable ? o.total : void 0,
            a = s - n,
            c = r(a);
          n = s;
          const u = {
            loaded: s,
            total: i,
            progress: i ? s / i : void 0,
            bytes: a,
            rate: c || void 0,
            estimated: c && i && s <= i ? (i - s) / c : void 0,
            event: o
          };
          (u[t ? "download" : "upload"] = !0), e(u);
        };
      }
      const ve =
          "undefined" != typeof XMLHttpRequest &&
          function (e) {
            return new Promise(function (t, n) {
              let r = e.data;
              const o = me.from(e.headers).normalize();
              let s,
                i,
                { responseType: a, withXSRFToken: c } = e;
              function u() {
                e.cancelToken && e.cancelToken.unsubscribe(s), e.signal && e.signal.removeEventListener("abort", s);
              }
              if (D.isFormData(r))
                if (se.hasStandardBrowserEnv || se.hasStandardBrowserWebWorkerEnv) o.setContentType(!1);
                else if (!1 !== (i = o.getContentType())) {
                  const [e, ...t] = i
                    ? i
                        .split(";")
                        .map((e) => e.trim())
                        .filter(Boolean)
                    : [];
                  o.setContentType([e || "multipart/form-data", ...t].join("; "));
                }
              let l = new XMLHttpRequest();
              if (e.auth) {
                const t = e.auth.username || "",
                  n = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                o.set("Authorization", "Basic " + btoa(t + ":" + n));
              }
              const d = Ee(e.baseURL, e.url);
              function f() {
                if (!l) return;
                const r = me.from("getAllResponseHeaders" in l && l.getAllResponseHeaders());
                !(function (e, t, n) {
                  const r = n.config.validateStatus;
                  n.status && r && !r(n.status)
                    ? t(
                        new M(
                          "Request failed with status code " + n.status,
                          [M.ERR_BAD_REQUEST, M.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
                          n.config,
                          n.request,
                          n
                        )
                      )
                    : e(n);
                })(
                  function (e) {
                    t(e), u();
                  },
                  function (e) {
                    n(e), u();
                  },
                  {
                    data: a && "text" !== a && "json" !== a ? l.response : l.responseText,
                    status: l.status,
                    statusText: l.statusText,
                    headers: r,
                    config: e,
                    request: l
                  }
                ),
                  (l = null);
              }
              if (
                (l.open(e.method.toUpperCase(), Q(d, e.params, e.paramsSerializer), !0),
                (l.timeout = e.timeout),
                "onloadend" in l
                  ? (l.onloadend = f)
                  : (l.onreadystatechange = function () {
                      l &&
                        4 === l.readyState &&
                        (0 !== l.status || (l.responseURL && 0 === l.responseURL.indexOf("file:"))) &&
                        setTimeout(f);
                    }),
                (l.onabort = function () {
                  l && (n(new M("Request aborted", M.ECONNABORTED, e, l)), (l = null));
                }),
                (l.onerror = function () {
                  n(new M("Network Error", M.ERR_NETWORK, e, l)), (l = null);
                }),
                (l.ontimeout = function () {
                  let t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
                  const r = e.transitional || Z;
                  e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                    n(new M(t, r.clarifyTimeoutError ? M.ETIMEDOUT : M.ECONNABORTED, e, l)),
                    (l = null);
                }),
                se.hasStandardBrowserEnv && (c && D.isFunction(c) && (c = c(e)), c || (!1 !== c && Oe(d))))
              ) {
                const t = e.xsrfHeaderName && e.xsrfCookieName && Se.read(e.xsrfCookieName);
                t && o.set(e.xsrfHeaderName, t);
              }
              void 0 === r && o.setContentType(null),
                "setRequestHeader" in l &&
                  D.forEach(o.toJSON(), function (e, t) {
                    l.setRequestHeader(t, e);
                  }),
                D.isUndefined(e.withCredentials) || (l.withCredentials = !!e.withCredentials),
                a && "json" !== a && (l.responseType = e.responseType),
                "function" == typeof e.onDownloadProgress && l.addEventListener("progress", Re(e.onDownloadProgress, !0)),
                "function" == typeof e.onUploadProgress && l.upload && l.upload.addEventListener("progress", Re(e.onUploadProgress)),
                (e.cancelToken || e.signal) &&
                  ((s = (t) => {
                    l && (n(!t || t.type ? new we(null, e, l) : t), l.abort(), (l = null));
                  }),
                  e.cancelToken && e.cancelToken.subscribe(s),
                  e.signal && (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
              const h = (function (e) {
                const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                return (t && t[1]) || "";
              })(d);
              h && -1 === se.protocols.indexOf(h) ? n(new M("Unsupported protocol " + h + ":", M.ERR_BAD_REQUEST, e)) : l.send(r || null);
            });
          },
        Te = { http: null, xhr: ve };
      D.forEach(Te, (e, t) => {
        if (e) {
          try {
            Object.defineProperty(e, "name", { value: t });
          } catch (e) {}
          Object.defineProperty(e, "adapterName", { value: t });
        }
      });
      const Ae = (e) => `- ${e}`,
        je = (e) => D.isFunction(e) || null === e || !1 === e,
        Pe = (e) => {
          e = D.isArray(e) ? e : [e];
          const { length: t } = e;
          let n, r;
          const o = {};
          for (let s = 0; s < t; s++) {
            let t;
            if (((n = e[s]), (r = n), !je(n) && ((r = Te[(t = String(n)).toLowerCase()]), void 0 === r)))
              throw new M(`Unknown adapter '${t}'`);
            if (r) break;
            o[t || "#" + s] = r;
          }
          if (!r) {
            const e = Object.entries(o).map(
              ([e, t]) => `adapter ${e} ` + (!1 === t ? "is not supported by the environment" : "is not available in the build")
            );
            let n = t ? (e.length > 1 ? "since :\n" + e.map(Ae).join("\n") : " " + Ae(e[0])) : "as no adapter specified";
            throw new M("There is no suitable adapter to dispatch the request " + n, "ERR_NOT_SUPPORT");
          }
          return r;
        };
      function Ne(e) {
        if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)) throw new we(null, e);
      }
      function xe(e) {
        return (
          Ne(e),
          (e.headers = me.from(e.headers)),
          (e.data = ge.call(e, e.transformRequest)),
          -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1),
          Pe(e.adapter || ce.adapter)(e).then(
            function (t) {
              return Ne(e), (t.data = ge.call(e, e.transformResponse, t)), (t.headers = me.from(t.headers)), t;
            },
            function (t) {
              return (
                ye(t) ||
                  (Ne(e),
                  t &&
                    t.response &&
                    ((t.response.data = ge.call(e, e.transformResponse, t.response)), (t.response.headers = me.from(t.response.headers)))),
                Promise.reject(t)
              );
            }
          )
        );
      }
      const Ce = (e) => (e instanceof me ? e.toJSON() : e);
      function _e(e, t) {
        t = t || {};
        const n = {};
        function r(e, t, n) {
          return D.isPlainObject(e) && D.isPlainObject(t)
            ? D.merge.call({ caseless: n }, e, t)
            : D.isPlainObject(t)
            ? D.merge({}, t)
            : D.isArray(t)
            ? t.slice()
            : t;
        }
        function o(e, t, n) {
          return D.isUndefined(t) ? (D.isUndefined(e) ? void 0 : r(void 0, e, n)) : r(e, t, n);
        }
        function s(e, t) {
          if (!D.isUndefined(t)) return r(void 0, t);
        }
        function i(e, t) {
          return D.isUndefined(t) ? (D.isUndefined(e) ? void 0 : r(void 0, e)) : r(void 0, t);
        }
        function a(n, o, s) {
          return s in t ? r(n, o) : s in e ? r(void 0, n) : void 0;
        }
        const c = {
          url: s,
          method: s,
          data: s,
          baseURL: i,
          transformRequest: i,
          transformResponse: i,
          paramsSerializer: i,
          timeout: i,
          timeoutMessage: i,
          withCredentials: i,
          withXSRFToken: i,
          adapter: i,
          responseType: i,
          xsrfCookieName: i,
          xsrfHeaderName: i,
          onUploadProgress: i,
          onDownloadProgress: i,
          decompress: i,
          maxContentLength: i,
          maxBodyLength: i,
          beforeRedirect: i,
          transport: i,
          httpAgent: i,
          httpsAgent: i,
          cancelToken: i,
          socketPath: i,
          responseEncoding: i,
          validateStatus: a,
          headers: (e, t) => o(Ce(e), Ce(t), !0)
        };
        return (
          D.forEach(Object.keys(Object.assign({}, e, t)), function (r) {
            const s = c[r] || o,
              i = s(e[r], t[r], r);
            (D.isUndefined(i) && s !== a) || (n[r] = i);
          }),
          n
        );
      }
      const Ue = {};
      ["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
        Ue[e] = function (n) {
          return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
        };
      });
      const Le = {};
      Ue.transitional = function (e, t, n) {
        function r(e, t) {
          return "[Axios v1.6.2] Transitional option '" + e + "'" + t + (n ? ". " + n : "");
        }
        return (n, o, s) => {
          if (!1 === e) throw new M(r(o, " has been removed" + (t ? " in " + t : "")), M.ERR_DEPRECATED);
          return (
            t &&
              !Le[o] &&
              ((Le[o] = !0), console.warn(r(o, " has been deprecated since v" + t + " and will be removed in the near future"))),
            !e || e(n, o, s)
          );
        };
      };
      const Fe = {
          assertOptions: function (e, t, n) {
            if ("object" != typeof e) throw new M("options must be an object", M.ERR_BAD_OPTION_VALUE);
            const r = Object.keys(e);
            let o = r.length;
            for (; o-- > 0; ) {
              const s = r[o],
                i = t[s];
              if (i) {
                const t = e[s],
                  n = void 0 === t || i(t, s, e);
                if (!0 !== n) throw new M("option " + s + " must be " + n, M.ERR_BAD_OPTION_VALUE);
              } else if (!0 !== n) throw new M("Unknown option " + s, M.ERR_BAD_OPTION);
            }
          },
          validators: Ue
        },
        De = Fe.validators;
      class ke {
        constructor(e) {
          (this.defaults = e), (this.interceptors = { request: new Y(), response: new Y() });
        }
        request(e, t) {
          "string" == typeof e ? ((t = t || {}).url = e) : (t = e || {}), (t = _e(this.defaults, t));
          const { transitional: n, paramsSerializer: r, headers: o } = t;
          void 0 !== n &&
            Fe.assertOptions(
              n,
              {
                silentJSONParsing: De.transitional(De.boolean),
                forcedJSONParsing: De.transitional(De.boolean),
                clarifyTimeoutError: De.transitional(De.boolean)
              },
              !1
            ),
            null != r &&
              (D.isFunction(r)
                ? (t.paramsSerializer = { serialize: r })
                : Fe.assertOptions(r, { encode: De.function, serialize: De.function }, !0)),
            (t.method = (t.method || this.defaults.method || "get").toLowerCase());
          let s = o && D.merge(o.common, o[t.method]);
          o &&
            D.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (e) => {
              delete o[e];
            }),
            (t.headers = me.concat(s, o));
          const i = [];
          let a = !0;
          this.interceptors.request.forEach(function (e) {
            ("function" == typeof e.runWhen && !1 === e.runWhen(t)) || ((a = a && e.synchronous), i.unshift(e.fulfilled, e.rejected));
          });
          const c = [];
          let u;
          this.interceptors.response.forEach(function (e) {
            c.push(e.fulfilled, e.rejected);
          });
          let l,
            d = 0;
          if (!a) {
            const e = [xe.bind(this), void 0];
            for (e.unshift.apply(e, i), e.push.apply(e, c), l = e.length, u = Promise.resolve(t); d < l; ) u = u.then(e[d++], e[d++]);
            return u;
          }
          l = i.length;
          let f = t;
          for (d = 0; d < l; ) {
            const e = i[d++],
              t = i[d++];
            try {
              f = e(f);
            } catch (e) {
              t.call(this, e);
              break;
            }
          }
          try {
            u = xe.call(this, f);
          } catch (e) {
            return Promise.reject(e);
          }
          for (d = 0, l = c.length; d < l; ) u = u.then(c[d++], c[d++]);
          return u;
        }
        getUri(e) {
          return Q(Ee((e = _e(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer);
        }
      }
      D.forEach(["delete", "get", "head", "options"], function (e) {
        ke.prototype[e] = function (t, n) {
          return this.request(_e(n || {}, { method: e, url: t, data: (n || {}).data }));
        };
      }),
        D.forEach(["post", "put", "patch"], function (e) {
          function t(t) {
            return function (n, r, o) {
              return this.request(_e(o || {}, { method: e, headers: t ? { "Content-Type": "multipart/form-data" } : {}, url: n, data: r }));
            };
          }
          (ke.prototype[e] = t()), (ke.prototype[e + "Form"] = t(!0));
        });
      const Be = ke;
      class Ie {
        constructor(e) {
          if ("function" != typeof e) throw new TypeError("executor must be a function.");
          let t;
          this.promise = new Promise(function (e) {
            t = e;
          });
          const n = this;
          this.promise.then((e) => {
            if (!n._listeners) return;
            let t = n._listeners.length;
            for (; t-- > 0; ) n._listeners[t](e);
            n._listeners = null;
          }),
            (this.promise.then = (e) => {
              let t;
              const r = new Promise((e) => {
                n.subscribe(e), (t = e);
              }).then(e);
              return (
                (r.cancel = function () {
                  n.unsubscribe(t);
                }),
                r
              );
            }),
            e(function (e, r, o) {
              n.reason || ((n.reason = new we(e, r, o)), t(n.reason));
            });
        }
        throwIfRequested() {
          if (this.reason) throw this.reason;
        }
        subscribe(e) {
          this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
        }
        unsubscribe(e) {
          if (!this._listeners) return;
          const t = this._listeners.indexOf(e);
          -1 !== t && this._listeners.splice(t, 1);
        }
        static source() {
          let e;
          return {
            token: new Ie(function (t) {
              e = t;
            }),
            cancel: e
          };
        }
      }
      const Me = Ie,
        qe = {
          Continue: 100,
          SwitchingProtocols: 101,
          Processing: 102,
          EarlyHints: 103,
          Ok: 200,
          Created: 201,
          Accepted: 202,
          NonAuthoritativeInformation: 203,
          NoContent: 204,
          ResetContent: 205,
          PartialContent: 206,
          MultiStatus: 207,
          AlreadyReported: 208,
          ImUsed: 226,
          MultipleChoices: 300,
          MovedPermanently: 301,
          Found: 302,
          SeeOther: 303,
          NotModified: 304,
          UseProxy: 305,
          Unused: 306,
          TemporaryRedirect: 307,
          PermanentRedirect: 308,
          BadRequest: 400,
          Unauthorized: 401,
          PaymentRequired: 402,
          Forbidden: 403,
          NotFound: 404,
          MethodNotAllowed: 405,
          NotAcceptable: 406,
          ProxyAuthenticationRequired: 407,
          RequestTimeout: 408,
          Conflict: 409,
          Gone: 410,
          LengthRequired: 411,
          PreconditionFailed: 412,
          PayloadTooLarge: 413,
          UriTooLong: 414,
          UnsupportedMediaType: 415,
          RangeNotSatisfiable: 416,
          ExpectationFailed: 417,
          ImATeapot: 418,
          MisdirectedRequest: 421,
          UnprocessableEntity: 422,
          Locked: 423,
          FailedDependency: 424,
          TooEarly: 425,
          UpgradeRequired: 426,
          PreconditionRequired: 428,
          TooManyRequests: 429,
          RequestHeaderFieldsTooLarge: 431,
          UnavailableForLegalReasons: 451,
          InternalServerError: 500,
          NotImplemented: 501,
          BadGateway: 502,
          ServiceUnavailable: 503,
          GatewayTimeout: 504,
          HttpVersionNotSupported: 505,
          VariantAlsoNegotiates: 506,
          InsufficientStorage: 507,
          LoopDetected: 508,
          NotExtended: 510,
          NetworkAuthenticationRequired: 511
        };
      Object.entries(qe).forEach(([e, t]) => {
        qe[t] = e;
      });
      const ze = qe,
        He = (function e(n) {
          const r = new Be(n),
            o = t(Be.prototype.request, r);
          return (
            D.extend(o, Be.prototype, r, { allOwnKeys: !0 }),
            D.extend(o, r, null, { allOwnKeys: !0 }),
            (o.create = function (t) {
              return e(_e(n, t));
            }),
            o
          );
        })(ce);
      (He.Axios = Be),
        (He.CanceledError = we),
        (He.CancelToken = Me),
        (He.isCancel = ye),
        (He.VERSION = "1.6.2"),
        (He.toFormData = V),
        (He.AxiosError = M),
        (He.Cancel = He.CanceledError),
        (He.all = function (e) {
          return Promise.all(e);
        }),
        (He.spread = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        }),
        (He.isAxiosError = function (e) {
          return D.isObject(e) && !0 === e.isAxiosError;
        }),
        (He.mergeConfig = _e),
        (He.AxiosHeaders = me),
        (He.formToJSON = (e) => ie(D.isHTMLForm(e) ? new FormData(e) : e)),
        (He.getAdapter = Pe),
        (He.HttpStatusCode = ze),
        (He.default = He);
      const Je = He;
      function Ve(e) {
        const t = parseInt(e);
        return (t >= 10 ? t : "0" + t.toString()).toString();
      }
      const $e = { version: "2.12.11", environment: "production", apiUrl: "https://api.momentumdash.com/", platform: "chrome" };
      async function Ke({ method: e, url: t, data: n, headers: r }) {
        const o = await fetch(t, {
            method: e,
            headers: r,
            body: "Object" === (null == n ? void 0 : n.constructor.name) ? JSON.stringify(n) : n
          }).catch(() => ({ statusText: "No response from the server" })),
          { status: s, headers: i, statusText: a } = o,
          c = { status: s, headers: i, statusText: a };
        if (o.ok) {
          const e = await o.text();
          return e && (c.data = JSON.parse(e)), c;
        }
        {
          let r = "%c Request Error: " + (s || "");
          return (
            a && (r += (s ? " : " : "") + a),
            console.groupCollapsed(r, "color: #ff0505"),
            console.log("Request:", { method: e, url: t, data: n }),
            console.log("Response:", o),
            console.groupEnd(),
            c
          );
        }
      }
      const We = "store",
        Xe = "_key",
        Ge = "_value";
      function Qe(e) {
        return "object" == typeof e && null !== e && Xe in e && Ge in e;
      }
      const Ye = new (class {
        constructor(e, t) {
          (this.name = "keyValueDb:" + e), (this.version = 10 * t), (this.database = null);
        }
        get db() {
          return this.database ? Promise.resolve(this.database) : this.open().then((e) => (this.database = e));
        }
        open() {
          return new Promise((e, t) => {
            const n = indexedDB.open(this.name, this.version);
            (n.onerror = () => t(n.error)),
              (n.onupgradeneeded = () => {
                n.result.createObjectStore(We, { keyPath: Xe });
              }),
              (n.onsuccess = () => {
                const t = n.result;
                (t.onversionchange = () => {
                  t.close(), (this.database = null);
                }),
                  e(t);
              });
          });
        }
        async bulkPatch(e) {
          const t = {};
          for (const n in e) {
            const r = e[n];
            r && (t[n] = await this.patch(n, r));
          }
          return t;
        }
        async patch(e, t) {
          const n = await this.get(e);
          if ("object" != typeof n)
            throw new Error(
              `KeyValueDb:${
                this.name
              } Error: patch called on ${typeof n} value. Patch may only be called on objects or empty rows. Key: ${e}, Existing Value: ${String(
                n
              )}`
            );
          const r = Object.assign({}, n || {}, t),
            o = { [Xe]: e, [Ge]: r };
          return await this.transaction("readwrite", (e) => e.put(o)), { newValue: r, previousValue: n };
        }
        set(e, t) {
          const n = { [Xe]: e, [Ge]: t };
          return this.transaction("readwrite", (e) => e.put(n));
        }
        async get(e) {
          const t = await this.transaction("readonly", (t) => t.get(e));
          return t && Qe(t) ? t[Ge] : null;
        }
        async transaction(e, t) {
          const n = await this.db;
          return new Promise((r, o) => {
            const s = n.transaction([We], e);
            s.onerror = () => o(i.error);
            const i = t(s.objectStore(We));
            i.onsuccess = () => {
              const e = i.result;
              if (
                !(function (e) {
                  return void 0 === e || "string" == typeof e || Qe(e);
                })(e)
              )
                throw new Error(`Transaction result does not match schema (does not contain a property matching ${Xe})`);
              r(e);
            };
          });
        }
      })("misc", 1);
      let Ze = null,
        et = null;
      const tt = "extension",
        nt = new URL(
          `https://browser-http-intake.logs.datadoghq.com/v1/input/pub18ef9128dd80db1a80dfc3f9180b55b5?ddsource=browser&ddtags=${encodeURIComponent(
            `env:${$e.environment},service:${tt},version:${$e.version}`
          )}`
        ).toString(),
        rt = "chrome" === $e.platform;
      class ot {
        constructor(e, t = 1e-5) {
          (this.name = e), (this.defaultSampleRate = t), (this.sampleRate = null);
        }
        warn(e, t) {
          return this._log(e, t, "warn");
        }
        error(e, t) {
          return this._log(e, t, "error");
        }
        info(e, t) {
          return this._log(e, t, "info");
        }
        async _log(...e) {
          if (!rt || !(await this._isEligibleForSubmission())) return;
          const [t, n, r] = this._parseArgs(e),
            o = { status: r, date: Date.now(), service: tt, message: t, _logger: this.name, ...n };
          this.tabId && (o.tabId = this.tabId), await Ke({ method: "POST", url: nt, data: o });
        }
        _convertUndefinedPropertiesToStrings(e) {
          const t = {};
          for (const [n, r] of Object.entries(e)) t[n] = void 0 === r ? "<undefined>" : r;
          return t;
        }
        _parseArgs(e) {
          let [t, n = {}, r] = e;
          if ((n || "object" != typeof t || ((n = t), (t = n.message)), n instanceof ErrorEvent && (n = n.error), n instanceof Error)) {
            const { name: e, stack: t } = n;
            n = { name: e, errorMessage: n.message, stack: t };
          } else
            "string" == typeof n ? ((t = `${t}: ${n}`), (n = {})) : "string" == typeof t && n.message && (n.message = `${t}: ${n.message}`);
          return (n = this._convertUndefinedPropertiesToStrings(n)), [t, n, r];
        }
        async _isEligibleForSubmission() {
          return null === this.sampleRate && (this.sampleRate = await this._getSampleRate()), Math.random() <= this.sampleRate;
        }
        async _getSampleRate() {
          const { datadogLoggingSamplingRate: e } = await (async function (e) {
            return (
              Ze ||
                (et
                  ? await et
                  : ((et = Ke({ url: "https://api.momentumdash.com/config", headers: { "X-Momentum-Version": $e.version } })
                      .then(({ data: e }) => {
                        if (!e) throw "Request for config from API failed";
                        return e;
                      })
                      .catch((e) => (console.error(e), Ye.get("config").then((e) => e || {})))),
                    (Ze = await et),
                    Ze && (await Ye.set("config", Ze)))),
              (function (e, t) {
                return t ? t.split(".").reduce((e, t) => (null == e ? void 0 : e[t]), e) : e;
              })(Ze, e)
            );
          })();
          return this.name.split(".").reduce((t, n, r, o) => {
            const s = o.slice(0, r + 1).join(".");
            return s in e ? e[s] : t;
          }, this.defaultSampleRate);
        }
      }
      let st = $e.apiUrl;
      "development" === $e.environment && ["s", "staging"].includes(localStorage.getItem("api")) && (st = $e.apiUrlStaging);
      const it = st;
      chrome && chrome.runtime && chrome.runtime.setUninstallURL && chrome.runtime.setUninstallURL("https://momentumdash.com/uninstall"),
        chrome.runtime.onInstalled.addListener(function (e) {
          e && e.reason && "install" === e.reason && chrome.tabs.create({ url: "dashboard.html" });
        }),
        chrome.browserAction.onClicked.addListener(function () {
          chrome.tabs.create({ url: "dashboard.html" });
        }),
        chrome.runtime.onMessage.addListener(function (e, t, n) {
          if (t.tab && "oneTimeLogin" === e.type) {
            chrome.runtime.onMessage.addListener(s);
            let o = "dashboard.html?" + new URLSearchParams(e.payload).toString();
            function s(e) {
              "oneTimeLogin:response" === e.type && (n(e.payload), chrome.runtime.onMessage.removeListener(s));
            }
            return chrome.tabs.create({ url: o }), !0;
          }
          if ("momentum:authState" === e.type) {
            if (!e.data || !e.data.userId) return;
            let i = "login-state-" + e.data.src;
            e.data.loginState ? localStorage.setItem(i, e.data.userId) : localStorage.removeItem(i);
          } else if ("checkUserId" === e.type) {
            if (!e.payload || !e.payload.userUuid) return;
            let a = localStorage.getItem("userId");
            n(a ? { isSameAccount: e.payload.userUuid === a, isLoggedIn: !0 } : { isLoggedIn: !1 });
          } else {
            if ("momentum:openNew" === e.type) {
              function c(e) {
                n({ success: !!e });
              }
              return (
                e.payload.updateSenderTab
                  ? chrome.tabs.update(t.tab.id, { url: "dashboard.html" }, c)
                  : chrome.tabs.create({ url: "dashboard.html", active: !0 }, c),
                !0
              );
            }
            if ("legacyUserMigration" === e.type)
              return (
                (async function (e) {
                  const t = localStorage.getObject("momentum-customization-1").displayname,
                    { data: n } = await e.post("user:migrateLegacy?canceled=true", { name: t });
                  return (
                    localStorage.setItem("token", n.token),
                    localStorage.setItem("token_uuid", n.token_uuid),
                    localStorage.setItem("unregistered", !0),
                    n.settings
                  );
                })(
                  Je.create({
                    timeout: 1e5,
                    headers: {
                      "X-Momentum-Version": $e.version,
                      "X-Momentum-ClientDate":
                        (void 0 === r ? (r = new Date()) : r instanceof Date || (r = new Date(r)),
                        r.getFullYear().toString() +
                          "-" +
                          Ve(r.getMonth() + 1) +
                          "-" +
                          Ve(r.getDate()) +
                          "T" +
                          Ve(r.getHours()) +
                          ":" +
                          Ve(r.getMinutes()) +
                          ":" +
                          Ve(r.getSeconds())),
                      "X-Momentum-ClientId": localStorage.getItem("client_uuid"),
                      "X-Momentum-TabId": e.data.tabId
                    },
                    baseURL: it
                  })
                )
                  .then((e) => n({ success: !0, settings: e }))
                  .catch((e) => {
                    new ot("backgroundScript.legacyUserMigration").error("background script migration error", {
                      errorMessage: e.message,
                      stack: e.stack,
                      phase: "register"
                    }),
                      n({ success: !1, error: e });
                  }),
                !0
              );
          }
          var r;
        });
    })();
})();
