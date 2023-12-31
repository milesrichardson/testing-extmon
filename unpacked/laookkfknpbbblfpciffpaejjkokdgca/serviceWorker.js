(() => {
  var e = {
      271: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => r });
        const r = { version: "2.12.11", environment: "production", apiUrl: "https://api.momentumdash.com/", platform: "chrome" };
      },
      468: (e, t, n) => {
        "use strict";
        n.r(t), n.d(t, { default: () => h });
        var r = n(271),
          s = n(973),
          i = n(31);
        const a = r.Z.version,
          o = r.Z.environment,
          u = "extension",
          l = new URL(
            `https://browser-http-intake.logs.datadoghq.com/v1/input/pub18ef9128dd80db1a80dfc3f9180b55b5?ddsource=browser&ddtags=${encodeURIComponent(
              `env:${o},service:${u},version:${a}`
            )}`
          ).toString(),
          c = "chrome" === r.Z.platform;
        class h {
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
            if (!c || !(await this._isEligibleForSubmission())) return;
            const [t, n, r] = this._parseArgs(e),
              s = { status: r, date: Date.now(), service: u, message: t, _logger: this.name, ...n };
            this.tabId && (s.tabId = this.tabId), await (0, i.Z)({ method: "POST", url: l, data: s });
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
              "string" == typeof n
                ? ((t = `${t}: ${n}`), (n = {}))
                : "string" == typeof t && n.message && (n.message = `${t}: ${n.message}`);
            return (n = this._convertUndefinedPropertiesToStrings(n)), [t, n, r];
          }
          async _isEligibleForSubmission() {
            return null === this.sampleRate && (this.sampleRate = await this._getSampleRate()), Math.random() <= this.sampleRate;
          }
          async _getSampleRate() {
            const { datadogLoggingSamplingRate: e } = await (0, s.Z)();
            return this.name.split(".").reduce((t, n, r, s) => {
              const i = s.slice(0, r + 1).join(".");
              return i in e ? e[i] : t;
            }, this.defaultSampleRate);
          }
        }
      },
      973: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => l });
        var r = n(31);
        const s = new (n(602).ZP)("misc", 1);
        var i = n(271);
        const a = "https://api.momentumdash.com/";
        let o = null,
          u = null;
        async function l(e) {
          return (
            o ||
              (u
                ? await u
                : ((u = (0, r.Z)({ url: a + "config", headers: { "X-Momentum-Version": i.Z.version } })
                    .then(({ data: e }) => {
                      if (!e) throw "Request for config from API failed";
                      return e;
                    })
                    .catch((e) => (console.error(e), s.get("config").then((e) => e || {})))),
                  (o = await u),
                  o && (await s.set("config", o)))),
            (function (e, t) {
              return t ? t.split(".").reduce((e, t) => (null == e ? void 0 : e[t]), e) : e;
            })(o, e)
          );
        }
      },
      31: (e, t, n) => {
        "use strict";
        async function r({ method: e, url: t, data: n, headers: r }) {
          const s = await fetch(t, {
              method: e,
              headers: r,
              body: "Object" === (null == n ? void 0 : n.constructor.name) ? JSON.stringify(n) : n
            }).catch(() => ({ statusText: "No response from the server" })),
            { status: i, headers: a, statusText: o } = s,
            u = { status: i, headers: a, statusText: o };
          if (s.ok) {
            const e = await s.text();
            return e && (u.data = JSON.parse(e)), u;
          }
          {
            let r = "%c Request Error: " + (i || "");
            return (
              o && (r += (i ? " : " : "") + o),
              console.groupCollapsed(r, "color: #ff0505"),
              console.log("Request:", { method: e, url: t, data: n }),
              console.log("Response:", s),
              console.groupEnd(),
              u
            );
          }
        }
        n.d(t, { Z: () => r });
      },
      545: () => {
        self.addEventListener("fetch", function (e) {
          const t = e.request;
          if ("GET" === t.method) {
            let r,
              s = t.url;
            try {
              const t = s.startsWith("http") ? s.lastIndexOf("?momo_cache_bg_uuid=") : -1;
              let i = null;
              if (t > 0) (i = s.substr(t + 20)), (s = s.substring(0, t)), (r = "http://momentumdash.com/photos/local-cache-key/" + i);
              else {
                if (!s.startsWith("https://modash.blob.core.windows.net/")) return;
                {
                  const e = s.split("?");
                  2 === e.length && (r = e[0]);
                }
              }
              e.respondWith(
                caches.match(r).then(function (e) {
                  return e || n(s, r, i);
                })
              );
            } catch (e) {
              console.log("caught error: " + e);
            }
          }
          function n(e, t, r, s) {
            return new Promise(function (i, a) {
              function o() {
                s < 5
                  ? setTimeout(function () {
                      n(e, t, r, s + 1)
                        .then(i)
                        .catch(a);
                    }, 100)
                  : a();
              }
              (s = s || 0),
                fetch(e)
                  .then(function (e) {
                    if (e && e.ok) {
                      const n = e.clone();
                      caches.open("modash-cache").then(function (e) {
                        e.put(t, n);
                      }),
                        i(e);
                    } else o();
                  })
                  .catch(function () {
                    o();
                  });
            });
          }
        });
      },
      602: (e, t, n) => {
        "use strict";
        n.d(t, { ZP: () => o });
        const r = "store",
          s = "_key",
          i = "_value";
        function a(e) {
          return "object" == typeof e && null !== e && s in e && i in e;
        }
        class o {
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
                  n.result.createObjectStore(r, { keyPath: s });
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
              a = { [s]: e, [i]: r };
            return await this.transaction("readwrite", (e) => e.put(a)), { newValue: r, previousValue: n };
          }
          set(e, t) {
            const n = { [s]: e, [i]: t };
            return this.transaction("readwrite", (e) => e.put(n));
          }
          async get(e) {
            const t = await this.transaction("readonly", (t) => t.get(e));
            return t && a(t) ? t[i] : null;
          }
          async transaction(e, t) {
            const n = await this.db;
            return new Promise((i, o) => {
              const u = n.transaction([r], e);
              u.onerror = () => o(l.error);
              const l = t(u.objectStore(r));
              l.onsuccess = () => {
                const e = l.result;
                if (
                  !(function (e) {
                    return void 0 === e || "string" == typeof e || a(e);
                  })(e)
                )
                  throw new Error(`Transaction result does not match schema (does not contain a property matching ${s})`);
                i(e);
              };
            });
          }
        }
      }
    },
    t = {};
  function n(r) {
    var s = t[r];
    if (void 0 !== s) return s.exports;
    var i = (t[r] = { exports: {} });
    return e[r](i, i.exports, n), i.exports;
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
      var e = n(468);
      const t = new e.default("serviceWorker", 0.01),
        r =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof self
            ? self
            : "undefined" != typeof window
            ? window
            : global,
        s = Object.keys,
        i = Array.isArray;
      function a(e, t) {
        return (
          "object" != typeof t ||
            s(t).forEach(function (n) {
              e[n] = t[n];
            }),
          e
        );
      }
      "undefined" == typeof Promise || r.Promise || (r.Promise = Promise);
      const o = Object.getPrototypeOf,
        u = {}.hasOwnProperty;
      function l(e, t) {
        return u.call(e, t);
      }
      function c(e, t) {
        "function" == typeof t && (t = t(o(e))),
          ("undefined" == typeof Reflect ? s : Reflect.ownKeys)(t).forEach((n) => {
            d(e, n, t[n]);
          });
      }
      const h = Object.defineProperty;
      function d(e, t, n, r) {
        h(
          e,
          t,
          a(
            n && l(n, "get") && "function" == typeof n.get
              ? { get: n.get, set: n.set, configurable: !0 }
              : { value: n, configurable: !0, writable: !0 },
            r
          )
        );
      }
      function f(e) {
        return {
          from: function (t) {
            return (e.prototype = Object.create(t.prototype)), d(e.prototype, "constructor", e), { extend: c.bind(null, e.prototype) };
          }
        };
      }
      const p = Object.getOwnPropertyDescriptor;
      function y(e, t) {
        let n;
        return p(e, t) || ((n = o(e)) && y(n, t));
      }
      const m = [].slice;
      function g(e, t, n) {
        return m.call(e, t, n);
      }
      function v(e, t) {
        return t(e);
      }
      function b(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function w(e) {
        r.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function _(e, t) {
        return e.reduce((e, n, r) => {
          var s = t(n, r);
          return s && (e[s[0]] = s[1]), e;
        }, {});
      }
      function k(e, t) {
        if (l(e, t)) return e[t];
        if (!t) return e;
        if ("string" != typeof t) {
          for (var n = [], r = 0, s = t.length; r < s; ++r) {
            var i = k(e, t[r]);
            n.push(i);
          }
          return n;
        }
        var a = t.indexOf(".");
        if (-1 !== a) {
          var o = e[t.substr(0, a)];
          return void 0 === o ? void 0 : k(o, t.substr(a + 1));
        }
      }
      function x(e, t, n) {
        if (e && void 0 !== t && (!("isFrozen" in Object) || !Object.isFrozen(e)))
          if ("string" != typeof t && "length" in t) {
            b("string" != typeof n && "length" in n);
            for (var r = 0, s = t.length; r < s; ++r) x(e, t[r], n[r]);
          } else {
            var a = t.indexOf(".");
            if (-1 !== a) {
              var o = t.substr(0, a),
                u = t.substr(a + 1);
              if ("" === u) void 0 === n ? (i(e) && !isNaN(parseInt(o)) ? e.splice(o, 1) : delete e[o]) : (e[o] = n);
              else {
                var c = e[o];
                (c && l(e, o)) || (c = e[o] = {}), x(c, u, n);
              }
            } else void 0 === n ? (i(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t]) : (e[t] = n);
          }
      }
      function E(e) {
        var t = {};
        for (var n in e) l(e, n) && (t[n] = e[n]);
        return t;
      }
      const S = [].concat;
      function q(e) {
        return S.apply([], e);
      }
      const P =
          "Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey"
            .split(",")
            .concat(q([8, 16, 32, 64].map((e) => ["Int", "Uint", "Float"].map((t) => t + e + "Array"))))
            .filter((e) => r[e]),
        T = P.map((e) => r[e]);
      _(P, (e) => [e, !0]);
      let I = null;
      function A(e) {
        I = "undefined" != typeof WeakMap && new WeakMap();
        const t = C(e);
        return (I = null), t;
      }
      function C(e) {
        if (!e || "object" != typeof e) return e;
        let t = I && I.get(e);
        if (t) return t;
        if (i(e)) {
          (t = []), I && I.set(e, t);
          for (var n = 0, r = e.length; n < r; ++n) t.push(C(e[n]));
        } else if (T.indexOf(e.constructor) >= 0) t = e;
        else {
          const n = o(e);
          for (var s in ((t = n === Object.prototype ? {} : Object.create(n)), I && I.set(e, t), e)) l(e, s) && (t[s] = C(e[s]));
        }
        return t;
      }
      const { toString: O } = {};
      function R(e) {
        return O.call(e).slice(8, -1);
      }
      const K = "undefined" != typeof Symbol ? Symbol.iterator : "@@iterator",
        j =
          "symbol" == typeof K
            ? function (e) {
                var t;
                return null != e && (t = e[K]) && t.apply(e);
              }
            : function () {
                return null;
              },
        D = {};
      function B(e) {
        var t, n, r, s;
        if (1 === arguments.length) {
          if (i(e)) return e.slice();
          if (this === D && "string" == typeof e) return [e];
          if ((s = j(e))) {
            for (n = []; !(r = s.next()).done; ) n.push(r.value);
            return n;
          }
          if (null == e) return [e];
          if ("number" == typeof (t = e.length)) {
            for (n = new Array(t); t--; ) n[t] = e[t];
            return n;
          }
          return [e];
        }
        for (t = arguments.length, n = new Array(t); t--; ) n[t] = arguments[t];
        return n;
      }
      const M = "undefined" != typeof Symbol ? (e) => "AsyncFunction" === e[Symbol.toStringTag] : () => !1;
      var N = "undefined" != typeof location && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function F(e, t) {
        (N = e), ($ = t);
      }
      var $ = () => !0;
      const U = !new Error("").stack;
      function W() {
        if (U)
          try {
            throw (W.arguments, new Error());
          } catch (e) {
            return e;
          }
        return new Error();
      }
      function V(e, t) {
        var n = e.stack;
        return n
          ? ((t = t || 0),
            0 === n.indexOf(e.name) && (t += (e.name + e.message).split("\n").length),
            n
              .split("\n")
              .slice(t)
              .filter($)
              .map((e) => "\n" + e)
              .join(""))
          : "";
      }
      var L = [
          "Unknown",
          "Constraint",
          "Data",
          "TransactionInactive",
          "ReadOnly",
          "Version",
          "NotFound",
          "InvalidState",
          "InvalidAccess",
          "Abort",
          "Timeout",
          "QuotaExceeded",
          "Syntax",
          "DataClone"
        ],
        Q = [
          "Modify",
          "Bulk",
          "OpenFailed",
          "VersionChange",
          "Schema",
          "Upgrade",
          "InvalidTable",
          "MissingAPI",
          "NoSuchDatabase",
          "InvalidArgument",
          "SubTransaction",
          "Unsupported",
          "Internal",
          "DatabaseClosed",
          "PrematureCommit",
          "ForeignAwait"
        ].concat(L),
        Y = {
          VersionChanged: "Database version changed by other database connection",
          DatabaseClosed: "Database has been closed",
          Abort: "Transaction aborted",
          TransactionInactive: "Transaction has already completed or failed",
          MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"
        };
      function Z(e, t) {
        (this._e = W()), (this.name = e), (this.message = t);
      }
      function z(e, t) {
        return (
          e +
          ". Errors: " +
          Object.keys(t)
            .map((e) => t[e].toString())
            .filter((e, t, n) => n.indexOf(e) === t)
            .join("\n")
        );
      }
      function H(e, t, n, r) {
        (this._e = W()), (this.failures = t), (this.failedKeys = r), (this.successCount = n), (this.message = z(e, t));
      }
      function X(e, t) {
        (this._e = W()),
          (this.name = "BulkError"),
          (this.failures = Object.keys(t).map((e) => t[e])),
          (this.failuresByPos = t),
          (this.message = z(e, t));
      }
      f(Z)
        .from(Error)
        .extend({
          stack: {
            get: function () {
              return this._stack || (this._stack = this.name + ": " + this.message + V(this._e, 2));
            }
          },
          toString: function () {
            return this.name + ": " + this.message;
          }
        }),
        f(H).from(Z),
        f(X).from(Z);
      var G = Q.reduce((e, t) => ((e[t] = t + "Error"), e), {});
      const J = Z;
      var ee = Q.reduce((e, t) => {
        var n = t + "Error";
        function r(e, r) {
          (this._e = W()),
            (this.name = n),
            e
              ? "string" == typeof e
                ? ((this.message = `${e}${r ? "\n " + r : ""}`), (this.inner = r || null))
                : "object" == typeof e && ((this.message = `${e.name} ${e.message}`), (this.inner = e))
              : ((this.message = Y[t] || n), (this.inner = null));
        }
        return f(r).from(J), (e[t] = r), e;
      }, {});
      (ee.Syntax = SyntaxError), (ee.Type = TypeError), (ee.Range = RangeError);
      var te = L.reduce((e, t) => ((e[t + "Error"] = ee[t]), e), {}),
        ne = Q.reduce((e, t) => (-1 === ["Syntax", "Type", "Range"].indexOf(t) && (e[t + "Error"] = ee[t]), e), {});
      function re() {}
      function se(e) {
        return e;
      }
      function ie(e, t) {
        return null == e || e === se
          ? t
          : function (n) {
              return t(e(n));
            };
      }
      function ae(e, t) {
        return function () {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      }
      function oe(e, t) {
        return e === re
          ? t
          : function () {
              var n = e.apply(this, arguments);
              void 0 !== n && (arguments[0] = n);
              var r = this.onsuccess,
                s = this.onerror;
              (this.onsuccess = null), (this.onerror = null);
              var i = t.apply(this, arguments);
              return (
                r && (this.onsuccess = this.onsuccess ? ae(r, this.onsuccess) : r),
                s && (this.onerror = this.onerror ? ae(s, this.onerror) : s),
                void 0 !== i ? i : n
              );
            };
      }
      function ue(e, t) {
        return e === re
          ? t
          : function () {
              e.apply(this, arguments);
              var n = this.onsuccess,
                r = this.onerror;
              (this.onsuccess = this.onerror = null),
                t.apply(this, arguments),
                n && (this.onsuccess = this.onsuccess ? ae(n, this.onsuccess) : n),
                r && (this.onerror = this.onerror ? ae(r, this.onerror) : r);
            };
      }
      function le(e, t) {
        return e === re
          ? t
          : function (n) {
              var r = e.apply(this, arguments);
              a(n, r);
              var s = this.onsuccess,
                i = this.onerror;
              (this.onsuccess = null), (this.onerror = null);
              var o = t.apply(this, arguments);
              return (
                s && (this.onsuccess = this.onsuccess ? ae(s, this.onsuccess) : s),
                i && (this.onerror = this.onerror ? ae(i, this.onerror) : i),
                void 0 === r ? (void 0 === o ? void 0 : o) : a(r, o)
              );
            };
      }
      function ce(e, t) {
        return e === re
          ? t
          : function () {
              return !1 !== t.apply(this, arguments) && e.apply(this, arguments);
            };
      }
      function he(e, t) {
        return e === re
          ? t
          : function () {
              var n = e.apply(this, arguments);
              if (n && "function" == typeof n.then) {
                for (var r = this, s = arguments.length, i = new Array(s); s--; ) i[s] = arguments[s];
                return n.then(function () {
                  return t.apply(r, i);
                });
              }
              return t.apply(this, arguments);
            };
      }
      (ne.ModifyError = H), (ne.DexieError = Z), (ne.BulkError = X);
      var de = {};
      const fe = 100,
        [pe, ye, me] =
          "undefined" == typeof Promise
            ? []
            : (() => {
                let e = Promise.resolve();
                if ("undefined" == typeof crypto || !crypto.subtle) return [e, o(e), e];
                const t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
                return [t, o(t), e];
              })(),
        ge = ye && ye.then,
        ve = pe && pe.constructor,
        be = !!me;
      var we = !1,
        _e = me
          ? () => {
              me.then(Ve);
            }
          : r.setImmediate
          ? setImmediate.bind(null, Ve)
          : r.MutationObserver
          ? () => {
              var e = document.createElement("div");
              new MutationObserver(() => {
                Ve(), (e = null);
              }).observe(e, { attributes: !0 }),
                e.setAttribute("i", "1");
            }
          : () => {
              setTimeout(Ve, 0);
            },
        ke = function (e, t) {
          Ce.push([e, t]), Ee && (_e(), (Ee = !1));
        },
        xe = !0,
        Ee = !0,
        Se = [],
        qe = [],
        Pe = null,
        Te = se,
        Ie = {
          id: "global",
          global: !0,
          ref: 0,
          unhandleds: [],
          onunhandled: yt,
          pgp: !1,
          env: {},
          finalize: function () {
            this.unhandleds.forEach((e) => {
              try {
                yt(e[0], e[1]);
              } catch (e) {}
            });
          }
        },
        Ae = Ie,
        Ce = [],
        Oe = 0,
        Re = [];
      function Ke(e) {
        if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
        (this._listeners = []), (this.onuncatched = re), (this._lib = !1);
        var t = (this._PSD = Ae);
        if ((N && ((this._stackHolder = W()), (this._prev = null), (this._numPrev = 0)), "function" != typeof e)) {
          if (e !== de) throw new TypeError("Not a function");
          return (this._state = arguments[1]), (this._value = arguments[2]), void (!1 === this._state && Me(this, this._value));
        }
        (this._state = null), (this._value = null), ++t.ref, Be(this, e);
      }
      const je = {
        get: function () {
          var e = Ae,
            t = et;
          function n(n, r) {
            var s = !e.global && (e !== Ae || t !== et);
            const i = s && !st();
            var a = new Ke((t, a) => {
              Fe(this, new De(dt(n, e, s, i), dt(r, e, s, i), t, a, e));
            });
            return N && We(a, this), a;
          }
          return (n.prototype = de), n;
        },
        set: function (e) {
          d(
            this,
            "then",
            e && e.prototype === de
              ? je
              : {
                  get: function () {
                    return e;
                  },
                  set: je.set
                }
          );
        }
      };
      function De(e, t, n, r, s) {
        (this.onFulfilled = "function" == typeof e ? e : null),
          (this.onRejected = "function" == typeof t ? t : null),
          (this.resolve = n),
          (this.reject = r),
          (this.psd = s);
      }
      function Be(e, t) {
        try {
          t(
            (t) => {
              if (null === e._state) {
                if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                var n = e._lib && Le();
                t && "function" == typeof t.then
                  ? Be(e, (e, n) => {
                      t instanceof Ke ? t._then(e, n) : t.then(e, n);
                    })
                  : ((e._state = !0), (e._value = t), Ne(e)),
                  n && Qe();
              }
            },
            Me.bind(null, e)
          );
        } catch (t) {
          Me(e, t);
        }
      }
      function Me(e, t) {
        if ((qe.push(t), null === e._state)) {
          var n = e._lib && Le();
          (t = Te(t)),
            (e._state = !1),
            (e._value = t),
            N &&
              null !== t &&
              "object" == typeof t &&
              !t._promise &&
              (function (e, t, n) {
                try {
                  e.apply(null, void 0);
                } catch (e) {}
              })(() => {
                var n = y(t, "stack");
                (t._promise = e), d(t, "stack", { get: () => (we ? n && (n.get ? n.get.apply(t) : n.value) : e.stack) });
              }),
            (function (e) {
              Se.some((t) => t._value === e._value) || Se.push(e);
            })(e),
            Ne(e),
            n && Qe();
        }
      }
      function Ne(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var n = 0, r = t.length; n < r; ++n) Fe(e, t[n]);
        var s = e._PSD;
        --s.ref || s.finalize(),
          0 === Oe &&
            (++Oe,
            ke(() => {
              0 == --Oe && Ye();
            }, []));
      }
      function Fe(e, t) {
        if (null !== e._state) {
          var n = e._state ? t.onFulfilled : t.onRejected;
          if (null === n) return (e._state ? t.resolve : t.reject)(e._value);
          ++t.psd.ref, ++Oe, ke($e, [n, e, t]);
        } else e._listeners.push(t);
      }
      function $e(e, t, n) {
        try {
          Pe = t;
          var r,
            s = t._value;
          t._state
            ? (r = e(s))
            : (qe.length && (qe = []),
              (r = e(s)),
              -1 === qe.indexOf(s) &&
                (function (e) {
                  for (var t = Se.length; t; ) if (Se[--t]._value === e._value) return void Se.splice(t, 1);
                })(t)),
            n.resolve(r);
        } catch (e) {
          n.reject(e);
        } finally {
          (Pe = null), 0 == --Oe && Ye(), --n.psd.ref || n.psd.finalize();
        }
      }
      function Ue(e, t, n) {
        if (t.length === n) return t;
        var r = "";
        if (!1 === e._state) {
          var s,
            i,
            a = e._value;
          null != a ? ((s = a.name || "Error"), (i = a.message || a), (r = V(a, 0))) : ((s = a), (i = "")),
            t.push(s + (i ? ": " + i : "") + r);
        }
        return N && ((r = V(e._stackHolder, 2)) && -1 === t.indexOf(r) && t.push(r), e._prev && Ue(e._prev, t, n)), t;
      }
      function We(e, t) {
        var n = t ? t._numPrev + 1 : 0;
        n < 100 && ((e._prev = t), (e._numPrev = n));
      }
      function Ve() {
        Le() && Qe();
      }
      function Le() {
        var e = xe;
        return (xe = !1), (Ee = !1), e;
      }
      function Qe() {
        var e, t, n;
        do {
          for (; Ce.length > 0; )
            for (e = Ce, Ce = [], n = e.length, t = 0; t < n; ++t) {
              var r = e[t];
              r[0].apply(null, r[1]);
            }
        } while (Ce.length > 0);
        (xe = !0), (Ee = !0);
      }
      function Ye() {
        var e = Se;
        (Se = []),
          e.forEach((e) => {
            e._PSD.onunhandled.call(null, e._value, e);
          });
        for (var t = Re.slice(0), n = t.length; n; ) t[--n]();
      }
      function Ze(e) {
        return new Ke(de, !1, e);
      }
      function ze(e, t) {
        var n = Ae;
        return function () {
          var r = Le(),
            s = Ae;
          try {
            return ut(n, !0), e.apply(this, arguments);
          } catch (e) {
            t && t(e);
          } finally {
            ut(s, !1), r && Qe();
          }
        };
      }
      c(Ke.prototype, {
        then: je,
        _then: function (e, t) {
          Fe(this, new De(null, null, e, t, Ae));
        },
        catch: function (e) {
          if (1 === arguments.length) return this.then(null, e);
          var t = arguments[0],
            n = arguments[1];
          return "function" == typeof t
            ? this.then(null, (e) => (e instanceof t ? n(e) : Ze(e)))
            : this.then(null, (e) => (e && e.name === t ? n(e) : Ze(e)));
        },
        finally: function (e) {
          return this.then(
            (t) => (e(), t),
            (t) => (e(), Ze(t))
          );
        },
        stack: {
          get: function () {
            if (this._stack) return this._stack;
            try {
              we = !0;
              var e = Ue(this, [], 20).join("\nFrom previous: ");
              return null !== this._state && (this._stack = e), e;
            } finally {
              we = !1;
            }
          }
        },
        timeout: function (e, t) {
          return e < 1 / 0
            ? new Ke((n, r) => {
                var s = setTimeout(() => r(new ee.Timeout(t)), e);
                this.then(n, r).finally(clearTimeout.bind(null, s));
              })
            : this;
        }
      }),
        "undefined" != typeof Symbol && Symbol.toStringTag && d(Ke.prototype, Symbol.toStringTag, "Dexie.Promise"),
        (Ie.env = lt()),
        c(Ke, {
          all: function () {
            var e = B.apply(null, arguments).map(it);
            return new Ke(function (t, n) {
              0 === e.length && t([]);
              var r = e.length;
              e.forEach((s, i) =>
                Ke.resolve(s).then((n) => {
                  (e[i] = n), --r || t(e);
                }, n)
              );
            });
          },
          resolve: (e) => {
            if (e instanceof Ke) return e;
            if (e && "function" == typeof e.then)
              return new Ke((t, n) => {
                e.then(t, n);
              });
            var t = new Ke(de, !0, e);
            return We(t, Pe), t;
          },
          reject: Ze,
          race: function () {
            var e = B.apply(null, arguments).map(it);
            return new Ke((t, n) => {
              e.map((e) => Ke.resolve(e).then(t, n));
            });
          },
          PSD: { get: () => Ae, set: (e) => (Ae = e) },
          totalEchoes: { get: () => et },
          newPSD: nt,
          usePSD: ct,
          scheduler: {
            get: () => ke,
            set: (e) => {
              ke = e;
            }
          },
          rejectionMapper: {
            get: () => Te,
            set: (e) => {
              Te = e;
            }
          },
          follow: (e, t) =>
            new Ke((n, r) =>
              nt(
                (t, n) => {
                  var r = Ae;
                  (r.unhandleds = []),
                    (r.onunhandled = n),
                    (r.finalize = ae(function () {
                      !(function (e) {
                        Re.push(function t() {
                          e(), Re.splice(Re.indexOf(t), 1);
                        }),
                          ++Oe,
                          ke(() => {
                            0 == --Oe && Ye();
                          }, []);
                      })(() => {
                        0 === this.unhandleds.length ? t() : n(this.unhandleds[0]);
                      });
                    }, r.finalize)),
                    e();
                },
                t,
                n,
                r
              )
            )
        }),
        ve &&
          (ve.allSettled &&
            d(Ke, "allSettled", function () {
              const e = B.apply(null, arguments).map(it);
              return new Ke((t) => {
                0 === e.length && t([]);
                let n = e.length;
                const r = new Array(n);
                e.forEach((e, s) =>
                  Ke.resolve(e)
                    .then(
                      (e) => (r[s] = { status: "fulfilled", value: e }),
                      (e) => (r[s] = { status: "rejected", reason: e })
                    )
                    .then(() => --n || t(r))
                );
              });
            }),
          ve.any &&
            "undefined" != typeof AggregateError &&
            d(Ke, "any", function () {
              const e = B.apply(null, arguments).map(it);
              return new Ke((t, n) => {
                0 === e.length && n(new AggregateError([]));
                let r = e.length;
                const s = new Array(r);
                e.forEach((e, i) =>
                  Ke.resolve(e).then(
                    (e) => t(e),
                    (e) => {
                      (s[i] = e), --r || n(new AggregateError(s));
                    }
                  )
                );
              });
            }));
      const He = { awaits: 0, echoes: 0, id: 0 };
      var Xe = 0,
        Ge = [],
        Je = 0,
        et = 0,
        tt = 0;
      function nt(e, t, n, r) {
        var s = Ae,
          i = Object.create(s);
        (i.parent = s), (i.ref = 0), (i.global = !1), (i.id = ++tt);
        var o = Ie.env;
        (i.env = be
          ? {
              Promise: Ke,
              PromiseProp: { value: Ke, configurable: !0, writable: !0 },
              all: Ke.all,
              race: Ke.race,
              allSettled: Ke.allSettled,
              any: Ke.any,
              resolve: Ke.resolve,
              reject: Ke.reject,
              nthen: ft(o.nthen, i),
              gthen: ft(o.gthen, i)
            }
          : {}),
          t && a(i, t),
          ++s.ref,
          (i.finalize = function () {
            --this.parent.ref || this.parent.finalize();
          });
        var u = ct(i, e, n, r);
        return 0 === i.ref && i.finalize(), u;
      }
      function rt() {
        return He.id || (He.id = ++Xe), ++He.awaits, (He.echoes += fe), He.id;
      }
      function st() {
        return !!He.awaits && (0 == --He.awaits && (He.id = 0), (He.echoes = He.awaits * fe), !0);
      }
      function it(e) {
        return He.echoes && e && e.constructor === ve
          ? (rt(),
            e.then(
              (e) => (st(), e),
              (e) => (st(), mt(e))
            ))
          : e;
      }
      function at(e) {
        ++et, (He.echoes && 0 != --He.echoes) || (He.echoes = He.id = 0), Ge.push(Ae), ut(e, !0);
      }
      function ot() {
        var e = Ge[Ge.length - 1];
        Ge.pop(), ut(e, !1);
      }
      function ut(e, t) {
        var n = Ae;
        if (
          ((t ? !He.echoes || (Je++ && e === Ae) : !Je || (--Je && e === Ae)) || ht(t ? at.bind(null, e) : ot),
          e !== Ae && ((Ae = e), n === Ie && (Ie.env = lt()), be))
        ) {
          var s = Ie.env.Promise,
            i = e.env;
          (ye.then = i.nthen),
            (s.prototype.then = i.gthen),
            (n.global || e.global) &&
              (Object.defineProperty(r, "Promise", i.PromiseProp),
              (s.all = i.all),
              (s.race = i.race),
              (s.resolve = i.resolve),
              (s.reject = i.reject),
              i.allSettled && (s.allSettled = i.allSettled),
              i.any && (s.any = i.any));
        }
      }
      function lt() {
        var e = r.Promise;
        return be
          ? {
              Promise: e,
              PromiseProp: Object.getOwnPropertyDescriptor(r, "Promise"),
              all: e.all,
              race: e.race,
              allSettled: e.allSettled,
              any: e.any,
              resolve: e.resolve,
              reject: e.reject,
              nthen: ye.then,
              gthen: e.prototype.then
            }
          : {};
      }
      function ct(e, t, n, r, s) {
        var i = Ae;
        try {
          return ut(e, !0), t(n, r, s);
        } finally {
          ut(i, !1);
        }
      }
      function ht(e) {
        ge.call(pe, e);
      }
      function dt(e, t, n, r) {
        return "function" != typeof e
          ? e
          : function () {
              var s = Ae;
              n && rt(), ut(t, !0);
              try {
                return e.apply(this, arguments);
              } finally {
                ut(s, !1), r && ht(st);
              }
            };
      }
      function ft(e, t) {
        return function (n, r) {
          return e.call(this, dt(n, t), dt(r, t));
        };
      }
      -1 === ("" + ge).indexOf("[native code]") && (rt = st = re);
      const pt = "unhandledrejection";
      function yt(e, t) {
        var n;
        try {
          n = t.onuncatched(e);
        } catch (e) {}
        if (!1 !== n)
          try {
            var s,
              i = { promise: t, reason: e };
            if (
              (r.document && document.createEvent
                ? ((s = document.createEvent("Event")).initEvent(pt, !0, !0), a(s, i))
                : r.CustomEvent && a((s = new CustomEvent(pt, { detail: i })), i),
              s && r.dispatchEvent && (dispatchEvent(s), !r.PromiseRejectionEvent && r.onunhandledrejection))
            )
              try {
                r.onunhandledrejection(s);
              } catch (e) {}
            N && s && !s.defaultPrevented && console.warn(`Unhandled rejection: ${e.stack || e}`);
          } catch (e) {}
      }
      var mt = Ke.reject;
      function gt(e, t, n, r) {
        if (e.idbdb && (e._state.openComplete || Ae.letThrough || e._vip)) {
          var s = e._createTransaction(t, n, e._dbSchema);
          try {
            s.create(), (e._state.PR1398_maxLoop = 3);
          } catch (s) {
            return s.name === G.InvalidState && e.isOpen() && --e._state.PR1398_maxLoop > 0
              ? (console.warn("Dexie: Need to reopen db"), e._close(), e.open().then(() => gt(e, t, n, r)))
              : mt(s);
          }
          return s._promise(t, (e, t) => nt(() => ((Ae.trans = s), r(e, t, s)))).then((e) => s._completion.then(() => e));
        }
        if (e._state.openComplete) return mt(new ee.DatabaseClosed(e._state.dbOpenError));
        if (!e._state.isBeingOpened) {
          if (!e._options.autoOpen) return mt(new ee.DatabaseClosed());
          e.open().catch(re);
        }
        return e._state.dbReadyPromise.then(() => gt(e, t, n, r));
      }
      const vt = "3.2.4",
        bt = String.fromCharCode(65535),
        wt = -1 / 0,
        _t = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",
        kt = "String expected.",
        xt = [],
        Et = "undefined" != typeof navigator && /(MSIE|Trident|Edge)/.test(navigator.userAgent),
        St = Et,
        qt = Et,
        Pt = (e) => !/(dexie\.js|dexie\.min\.js)/.test(e),
        Tt = "__dbnames",
        It = "readonly",
        At = "readwrite";
      function Ct(e, t) {
        return e
          ? t
            ? function () {
                return e.apply(this, arguments) && t.apply(this, arguments);
              }
            : e
          : t;
      }
      const Ot = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Rt(e) {
        return "string" != typeof e || /\./.test(e) ? (e) => e : (t) => (void 0 === t[e] && e in t && delete (t = A(t))[e], t);
      }
      class Kt {
        _trans(e, t, n) {
          const r = this._tx || Ae.trans,
            s = this.name;
          function i(e, n, r) {
            if (!r.schema[s]) throw new ee.NotFound("Table " + s + " not part of transaction");
            return t(r.idbtrans, r);
          }
          const a = Le();
          try {
            return r && r.db === this.db
              ? r === Ae.trans
                ? r._promise(e, i, n)
                : nt(() => r._promise(e, i, n), { trans: r, transless: Ae.transless || Ae })
              : gt(this.db, e, [this.name], i);
          } finally {
            a && Qe();
          }
        }
        get(e, t) {
          return e && e.constructor === Object
            ? this.where(e).first(t)
            : this._trans("readonly", (t) => this.core.get({ trans: t, key: e }).then((e) => this.hook.reading.fire(e))).then(t);
        }
        where(e) {
          if ("string" == typeof e) return new this.db.WhereClause(this, e);
          if (i(e)) return new this.db.WhereClause(this, `[${e.join("+")}]`);
          const t = s(e);
          if (1 === t.length) return this.where(t[0]).equals(e[t[0]]);
          const n = this.schema.indexes
            .concat(this.schema.primKey)
            .filter((e) => e.compound && t.every((t) => e.keyPath.indexOf(t) >= 0) && e.keyPath.every((e) => t.indexOf(e) >= 0))[0];
          if (n && this.db._maxKey !== bt) return this.where(n.name).equals(n.keyPath.map((t) => e[t]));
          !n && N && console.warn(`The query ${JSON.stringify(e)} on ${this.name} would benefit of a compound index [${t.join("+")}]`);
          const { idxByName: r } = this.schema,
            a = this.db._deps.indexedDB;
          function o(e, t) {
            try {
              return 0 === a.cmp(e, t);
            } catch (e) {
              return !1;
            }
          }
          const [u, l] = t.reduce(
            ([t, n], s) => {
              const a = r[s],
                u = e[s];
              return [
                t || a,
                t || !a
                  ? Ct(
                      n,
                      a && a.multi
                        ? (e) => {
                            const t = k(e, s);
                            return i(t) && t.some((e) => o(u, e));
                          }
                        : (e) => o(u, k(e, s))
                    )
                  : n
              ];
            },
            [null, null]
          );
          return u ? this.where(u.name).equals(e[u.keyPath]).filter(l) : n ? this.filter(l) : this.where(t).equals("");
        }
        filter(e) {
          return this.toCollection().and(e);
        }
        count(e) {
          return this.toCollection().count(e);
        }
        offset(e) {
          return this.toCollection().offset(e);
        }
        limit(e) {
          return this.toCollection().limit(e);
        }
        each(e) {
          return this.toCollection().each(e);
        }
        toArray(e) {
          return this.toCollection().toArray(e);
        }
        toCollection() {
          return new this.db.Collection(new this.db.WhereClause(this));
        }
        orderBy(e) {
          return new this.db.Collection(new this.db.WhereClause(this, i(e) ? `[${e.join("+")}]` : e));
        }
        reverse() {
          return this.toCollection().reverse();
        }
        mapToClass(e) {
          this.schema.mappedClass = e;
          const t = (t) => {
            if (!t) return t;
            const n = Object.create(e.prototype);
            for (var r in t)
              if (l(t, r))
                try {
                  n[r] = t[r];
                } catch (e) {}
            return n;
          };
          return (
            this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook),
            (this.schema.readHook = t),
            this.hook("reading", t),
            e
          );
        }
        defineClass() {
          return this.mapToClass(function (e) {
            a(this, e);
          });
        }
        add(e, t) {
          const { auto: n, keyPath: r } = this.schema.primKey;
          let s = e;
          return (
            r && n && (s = Rt(r)(e)),
            this._trans("readwrite", (e) => this.core.mutate({ trans: e, type: "add", keys: null != t ? [t] : null, values: [s] }))
              .then((e) => (e.numFailures ? Ke.reject(e.failures[0]) : e.lastResult))
              .then((t) => {
                if (r)
                  try {
                    x(e, r, t);
                  } catch (e) {}
                return t;
              })
          );
        }
        update(e, t) {
          if ("object" != typeof e || i(e)) return this.where(":id").equals(e).modify(t);
          {
            const n = k(e, this.schema.primKey.keyPath);
            if (void 0 === n) return mt(new ee.InvalidArgument("Given object does not contain its primary key"));
            try {
              "function" != typeof t
                ? s(t).forEach((n) => {
                    x(e, n, t[n]);
                  })
                : t(e, { value: e, primKey: n });
            } catch (e) {}
            return this.where(":id").equals(n).modify(t);
          }
        }
        put(e, t) {
          const { auto: n, keyPath: r } = this.schema.primKey;
          let s = e;
          return (
            r && n && (s = Rt(r)(e)),
            this._trans("readwrite", (e) => this.core.mutate({ trans: e, type: "put", values: [s], keys: null != t ? [t] : null }))
              .then((e) => (e.numFailures ? Ke.reject(e.failures[0]) : e.lastResult))
              .then((t) => {
                if (r)
                  try {
                    x(e, r, t);
                  } catch (e) {}
                return t;
              })
          );
        }
        delete(e) {
          return this._trans("readwrite", (t) => this.core.mutate({ trans: t, type: "delete", keys: [e] })).then((e) =>
            e.numFailures ? Ke.reject(e.failures[0]) : void 0
          );
        }
        clear() {
          return this._trans("readwrite", (e) => this.core.mutate({ trans: e, type: "deleteRange", range: Ot })).then((e) =>
            e.numFailures ? Ke.reject(e.failures[0]) : void 0
          );
        }
        bulkGet(e) {
          return this._trans("readonly", (t) =>
            this.core.getMany({ keys: e, trans: t }).then((e) => e.map((e) => this.hook.reading.fire(e)))
          );
        }
        bulkAdd(e, t, n) {
          const r = Array.isArray(t) ? t : void 0,
            s = (n = n || (r ? void 0 : t)) ? n.allKeys : void 0;
          return this._trans("readwrite", (t) => {
            const { auto: n, keyPath: i } = this.schema.primKey;
            if (i && r) throw new ee.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
            if (r && r.length !== e.length) throw new ee.InvalidArgument("Arguments objects and keys must have the same length");
            const a = e.length;
            let o = i && n ? e.map(Rt(i)) : e;
            return this.core
              .mutate({ trans: t, type: "add", keys: r, values: o, wantResults: s })
              .then(({ numFailures: e, results: t, lastResult: n, failures: r }) => {
                if (0 === e) return s ? t : n;
                throw new X(`${this.name}.bulkAdd(): ${e} of ${a} operations failed`, r);
              });
          });
        }
        bulkPut(e, t, n) {
          const r = Array.isArray(t) ? t : void 0,
            s = (n = n || (r ? void 0 : t)) ? n.allKeys : void 0;
          return this._trans("readwrite", (t) => {
            const { auto: n, keyPath: i } = this.schema.primKey;
            if (i && r) throw new ee.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
            if (r && r.length !== e.length) throw new ee.InvalidArgument("Arguments objects and keys must have the same length");
            const a = e.length;
            let o = i && n ? e.map(Rt(i)) : e;
            return this.core
              .mutate({ trans: t, type: "put", keys: r, values: o, wantResults: s })
              .then(({ numFailures: e, results: t, lastResult: n, failures: r }) => {
                if (0 === e) return s ? t : n;
                throw new X(`${this.name}.bulkPut(): ${e} of ${a} operations failed`, r);
              });
          });
        }
        bulkDelete(e) {
          const t = e.length;
          return this._trans("readwrite", (t) => this.core.mutate({ trans: t, type: "delete", keys: e })).then(
            ({ numFailures: e, lastResult: n, failures: r }) => {
              if (0 === e) return n;
              throw new X(`${this.name}.bulkDelete(): ${e} of ${t} operations failed`, r);
            }
          );
        }
      }
      function jt(e) {
        var t = {},
          n = function (n, r) {
            if (r) {
              for (var s = arguments.length, i = new Array(s - 1); --s; ) i[s - 1] = arguments[s];
              return t[n].subscribe.apply(null, i), e;
            }
            if ("string" == typeof n) return t[n];
          };
        n.addEventType = o;
        for (var r = 1, a = arguments.length; r < a; ++r) o(arguments[r]);
        return n;
        function o(e, r, a) {
          if ("object" != typeof e) {
            var u;
            r || (r = ce), a || (a = re);
            var l = {
              subscribers: [],
              fire: a,
              subscribe: function (e) {
                -1 === l.subscribers.indexOf(e) && (l.subscribers.push(e), (l.fire = r(l.fire, e)));
              },
              unsubscribe: function (e) {
                (l.subscribers = l.subscribers.filter(function (t) {
                  return t !== e;
                })),
                  (l.fire = l.subscribers.reduce(r, a));
              }
            };
            return (t[e] = n[e] = l), l;
          }
          s((u = e)).forEach(function (e) {
            var t = u[e];
            if (i(t)) o(e, u[e][0], u[e][1]);
            else {
              if ("asap" !== t) throw new ee.InvalidArgument("Invalid event config");
              var n = o(e, se, function () {
                for (var e = arguments.length, t = new Array(e); e--; ) t[e] = arguments[e];
                n.subscribers.forEach(function (e) {
                  w(function () {
                    e.apply(null, t);
                  });
                });
              });
            }
          });
        }
      }
      function Dt(e, t) {
        return f(t).from({ prototype: e }), t;
      }
      function Bt(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
      }
      function Mt(e, t) {
        e.filter = Ct(e.filter, t);
      }
      function Nt(e, t, n) {
        var r = e.replayFilter;
        (e.replayFilter = r ? () => Ct(r(), t()) : t), (e.justLimit = n && !r);
      }
      function Ft(e, t) {
        if (e.isPrimKey) return t.primaryKey;
        const n = t.getIndexByKeyPath(e.index);
        if (!n) throw new ee.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
        return n;
      }
      function $t(e, t, n) {
        const r = Ft(e, t.schema);
        return t.openCursor({
          trans: n,
          values: !e.keysOnly,
          reverse: "prev" === e.dir,
          unique: !!e.unique,
          query: { index: r, range: e.range }
        });
      }
      function Ut(e, t, n, r) {
        const s = e.replayFilter ? Ct(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          const i = {},
            a = (e, n, r) => {
              if (
                !s ||
                s(
                  n,
                  r,
                  (e) => n.stop(e),
                  (e) => n.fail(e)
                )
              ) {
                var a = n.primaryKey,
                  o = "" + a;
                "[object ArrayBuffer]" === o && (o = "" + new Uint8Array(a)), l(i, o) || ((i[o] = !0), t(e, n, r));
              }
            };
          return Promise.all([e.or._iterate(a, n), Wt($t(e, r, n), e.algorithm, a, !e.keysOnly && e.valueMapper)]);
        }
        return Wt($t(e, r, n), Ct(e.algorithm, s), t, !e.keysOnly && e.valueMapper);
      }
      function Wt(e, t, n, r) {
        var s = ze(r ? (e, t, s) => n(r(e), t, s) : n);
        return e.then((e) => {
          if (e)
            return e.start(() => {
              var n = () => e.continue();
              (t &&
                !t(
                  e,
                  (e) => (n = e),
                  (t) => {
                    e.stop(t), (n = re);
                  },
                  (t) => {
                    e.fail(t), (n = re);
                  }
                )) ||
                s(e.value, e, (e) => (n = e)),
                n();
            });
        });
      }
      function Vt(e, t) {
        try {
          const n = Lt(e),
            r = Lt(t);
          if (n !== r)
            return "Array" === n
              ? 1
              : "Array" === r
              ? -1
              : "binary" === n
              ? 1
              : "binary" === r
              ? -1
              : "string" === n
              ? 1
              : "string" === r
              ? -1
              : "Date" === n
              ? 1
              : "Date" !== r
              ? NaN
              : -1;
          switch (n) {
            case "number":
            case "Date":
            case "string":
              return e > t ? 1 : e < t ? -1 : 0;
            case "binary":
              return (function (e, t) {
                const n = e.length,
                  r = t.length,
                  s = n < r ? n : r;
                for (let n = 0; n < s; ++n) if (e[n] !== t[n]) return e[n] < t[n] ? -1 : 1;
                return n === r ? 0 : n < r ? -1 : 1;
              })(Qt(e), Qt(t));
            case "Array":
              return (function (e, t) {
                const n = e.length,
                  r = t.length,
                  s = n < r ? n : r;
                for (let n = 0; n < s; ++n) {
                  const r = Vt(e[n], t[n]);
                  if (0 !== r) return r;
                }
                return n === r ? 0 : n < r ? -1 : 1;
              })(e, t);
          }
        } catch (e) {}
        return NaN;
      }
      function Lt(e) {
        const t = typeof e;
        if ("object" !== t) return t;
        if (ArrayBuffer.isView(e)) return "binary";
        const n = R(e);
        return "ArrayBuffer" === n ? "binary" : n;
      }
      function Qt(e) {
        return e instanceof Uint8Array
          ? e
          : ArrayBuffer.isView(e)
          ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
          : new Uint8Array(e);
      }
      class Yt {
        _read(e, t) {
          var n = this._ctx;
          return n.error ? n.table._trans(null, mt.bind(null, n.error)) : n.table._trans("readonly", e).then(t);
        }
        _write(e) {
          var t = this._ctx;
          return t.error ? t.table._trans(null, mt.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
        }
        _addAlgorithm(e) {
          var t = this._ctx;
          t.algorithm = Ct(t.algorithm, e);
        }
        _iterate(e, t) {
          return Ut(this._ctx, e, t, this._ctx.table.core);
        }
        clone(e) {
          var t = Object.create(this.constructor.prototype),
            n = Object.create(this._ctx);
          return e && a(n, e), (t._ctx = n), t;
        }
        raw() {
          return (this._ctx.valueMapper = null), this;
        }
        each(e) {
          var t = this._ctx;
          return this._read((n) => Ut(t, e, n, t.table.core));
        }
        count(e) {
          return this._read((e) => {
            const t = this._ctx,
              n = t.table.core;
            if (Bt(t, !0))
              return n.count({ trans: e, query: { index: Ft(t, n.schema), range: t.range } }).then((e) => Math.min(e, t.limit));
            var r = 0;
            return Ut(t, () => (++r, !1), e, n).then(() => r);
          }).then(e);
        }
        sortBy(e, t) {
          const n = e.split(".").reverse(),
            r = n[0],
            s = n.length - 1;
          function i(e, t) {
            return t ? i(e[n[t]], t - 1) : e[r];
          }
          var a = "next" === this._ctx.dir ? 1 : -1;
          function o(e, t) {
            var n = i(e, s),
              r = i(t, s);
            return n < r ? -a : n > r ? a : 0;
          }
          return this.toArray(function (e) {
            return e.sort(o);
          }).then(t);
        }
        toArray(e) {
          return this._read((e) => {
            var t = this._ctx;
            if ("next" === t.dir && Bt(t, !0) && t.limit > 0) {
              const { valueMapper: n } = t,
                r = Ft(t, t.table.core.schema);
              return t.table.core
                .query({ trans: e, limit: t.limit, values: !0, query: { index: r, range: t.range } })
                .then(({ result: e }) => (n ? e.map(n) : e));
            }
            {
              const n = [];
              return Ut(t, (e) => n.push(e), e, t.table.core).then(() => n);
            }
          }, e);
        }
        offset(e) {
          var t = this._ctx;
          return (
            e <= 0 ||
              ((t.offset += e),
              Bt(t)
                ? Nt(t, () => {
                    var t = e;
                    return (e, n) =>
                      0 === t ||
                      (1 === t
                        ? (--t, !1)
                        : (n(() => {
                            e.advance(t), (t = 0);
                          }),
                          !1));
                  })
                : Nt(t, () => {
                    var t = e;
                    return () => --t < 0;
                  })),
            this
          );
        }
        limit(e) {
          return (
            (this._ctx.limit = Math.min(this._ctx.limit, e)),
            Nt(
              this._ctx,
              () => {
                var t = e;
                return function (e, n, r) {
                  return --t <= 0 && n(r), t >= 0;
                };
              },
              !0
            ),
            this
          );
        }
        until(e, t) {
          return (
            Mt(this._ctx, function (n, r, s) {
              return !e(n.value) || (r(s), t);
            }),
            this
          );
        }
        first(e) {
          return this.limit(1)
            .toArray(function (e) {
              return e[0];
            })
            .then(e);
        }
        last(e) {
          return this.reverse().first(e);
        }
        filter(e) {
          var t, n;
          return (
            Mt(this._ctx, function (t) {
              return e(t.value);
            }),
            (t = this._ctx),
            (n = e),
            (t.isMatch = Ct(t.isMatch, n)),
            this
          );
        }
        and(e) {
          return this.filter(e);
        }
        or(e) {
          return new this.db.WhereClause(this._ctx.table, e, this);
        }
        reverse() {
          return (
            (this._ctx.dir = "prev" === this._ctx.dir ? "next" : "prev"),
            this._ondirectionchange && this._ondirectionchange(this._ctx.dir),
            this
          );
        }
        desc() {
          return this.reverse();
        }
        eachKey(e) {
          var t = this._ctx;
          return (
            (t.keysOnly = !t.isMatch),
            this.each(function (t, n) {
              e(n.key, n);
            })
          );
        }
        eachUniqueKey(e) {
          return (this._ctx.unique = "unique"), this.eachKey(e);
        }
        eachPrimaryKey(e) {
          var t = this._ctx;
          return (
            (t.keysOnly = !t.isMatch),
            this.each(function (t, n) {
              e(n.primaryKey, n);
            })
          );
        }
        keys(e) {
          var t = this._ctx;
          t.keysOnly = !t.isMatch;
          var n = [];
          return this.each(function (e, t) {
            n.push(t.key);
          })
            .then(function () {
              return n;
            })
            .then(e);
        }
        primaryKeys(e) {
          var t = this._ctx;
          if ("next" === t.dir && Bt(t, !0) && t.limit > 0)
            return this._read((e) => {
              var n = Ft(t, t.table.core.schema);
              return t.table.core.query({ trans: e, values: !1, limit: t.limit, query: { index: n, range: t.range } });
            })
              .then(({ result: e }) => e)
              .then(e);
          t.keysOnly = !t.isMatch;
          var n = [];
          return this.each(function (e, t) {
            n.push(t.primaryKey);
          })
            .then(function () {
              return n;
            })
            .then(e);
        }
        uniqueKeys(e) {
          return (this._ctx.unique = "unique"), this.keys(e);
        }
        firstKey(e) {
          return this.limit(1)
            .keys(function (e) {
              return e[0];
            })
            .then(e);
        }
        lastKey(e) {
          return this.reverse().firstKey(e);
        }
        distinct() {
          var e = this._ctx,
            t = e.index && e.table.schema.idxByName[e.index];
          if (!t || !t.multi) return this;
          var n = {};
          return (
            Mt(this._ctx, function (e) {
              var t = e.primaryKey.toString(),
                r = l(n, t);
              return (n[t] = !0), !r;
            }),
            this
          );
        }
        modify(e) {
          var t = this._ctx;
          return this._write((n) => {
            var r;
            if ("function" == typeof e) r = e;
            else {
              var i = s(e),
                a = i.length;
              r = function (t) {
                for (var n = !1, r = 0; r < a; ++r) {
                  var s = i[r],
                    o = e[s];
                  k(t, s) !== o && (x(t, s, o), (n = !0));
                }
                return n;
              };
            }
            const o = t.table.core,
              { outbound: u, extractKey: l } = o.schema.primaryKey,
              c = this.db._options.modifyChunkSize || 200,
              h = [];
            let d = 0;
            const f = [],
              p = (e, t) => {
                const { failures: n, numFailures: r } = t;
                d += e - r;
                for (let e of s(n)) h.push(n[e]);
              };
            return this.clone()
              .primaryKeys()
              .then((s) => {
                const i = (a) => {
                  const h = Math.min(c, s.length - a);
                  return o.getMany({ trans: n, keys: s.slice(a, a + h), cache: "immutable" }).then((d) => {
                    const f = [],
                      y = [],
                      m = u ? [] : null,
                      g = [];
                    for (let e = 0; e < h; ++e) {
                      const t = d[e],
                        n = { value: A(t), primKey: s[a + e] };
                      !1 !== r.call(n, n.value, n) &&
                        (null == n.value
                          ? g.push(s[a + e])
                          : u || 0 === Vt(l(t), l(n.value))
                          ? (y.push(n.value), u && m.push(s[a + e]))
                          : (g.push(s[a + e]), f.push(n.value)));
                    }
                    const v = Bt(t) && t.limit === 1 / 0 && ("function" != typeof e || e === Zt) && { index: t.index, range: t.range };
                    return Promise.resolve(
                      f.length > 0 &&
                        o.mutate({ trans: n, type: "add", values: f }).then((e) => {
                          for (let t in e.failures) g.splice(parseInt(t), 1);
                          p(f.length, e);
                        })
                    )
                      .then(
                        () =>
                          (y.length > 0 || (v && "object" == typeof e)) &&
                          o
                            .mutate({ trans: n, type: "put", keys: m, values: y, criteria: v, changeSpec: "function" != typeof e && e })
                            .then((e) => p(y.length, e))
                      )
                      .then(
                        () =>
                          (g.length > 0 || (v && e === Zt)) &&
                          o.mutate({ trans: n, type: "delete", keys: g, criteria: v }).then((e) => p(g.length, e))
                      )
                      .then(() => s.length > a + h && i(a + c));
                  });
                };
                return i(0).then(() => {
                  if (h.length > 0) throw new H("Error modifying one or more objects", h, d, f);
                  return s.length;
                });
              });
          });
        }
        delete() {
          var e = this._ctx,
            t = e.range;
          return Bt(e) && ((e.isPrimKey && !qt) || 3 === t.type)
            ? this._write((n) => {
                const { primaryKey: r } = e.table.core.schema,
                  s = t;
                return e.table.core.count({ trans: n, query: { index: r, range: s } }).then((t) =>
                  e.table.core
                    .mutate({ trans: n, type: "deleteRange", range: s })
                    .then(({ failures: e, lastResult: n, results: r, numFailures: s }) => {
                      if (s)
                        throw new H(
                          "Could not delete some values",
                          Object.keys(e).map((t) => e[t]),
                          t - s
                        );
                      return t - s;
                    })
                );
              })
            : this.modify(Zt);
        }
      }
      const Zt = (e, t) => (t.value = null);
      function zt(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function Ht(e, t) {
        return e > t ? -1 : e === t ? 0 : 1;
      }
      function Xt(e, t, n) {
        var r = e instanceof rn ? new e.Collection(e) : e;
        return (r._ctx.error = n ? new n(t) : new TypeError(t)), r;
      }
      function Gt(e) {
        return new e.Collection(e, () => nn("")).limit(0);
      }
      function Jt(e, t, n, r, s, i) {
        for (var a = Math.min(e.length, r.length), o = -1, u = 0; u < a; ++u) {
          var l = t[u];
          if (l !== r[u])
            return s(e[u], n[u]) < 0
              ? e.substr(0, u) + n[u] + n.substr(u + 1)
              : s(e[u], r[u]) < 0
              ? e.substr(0, u) + r[u] + n.substr(u + 1)
              : o >= 0
              ? e.substr(0, o) + t[o] + n.substr(o + 1)
              : null;
          s(e[u], l) < 0 && (o = u);
        }
        return a < r.length && "next" === i
          ? e + n.substr(e.length)
          : a < e.length && "prev" === i
          ? e.substr(0, n.length)
          : o < 0
          ? null
          : e.substr(0, o) + r[o] + n.substr(o + 1);
      }
      function en(e, t, n, r) {
        var s,
          i,
          a,
          o,
          u,
          l,
          c,
          h = n.length;
        if (!n.every((e) => "string" == typeof e)) return Xt(e, kt);
        function d(e) {
          (s = (function (e) {
            return "next" === e ? (e) => e.toUpperCase() : (e) => e.toLowerCase();
          })(e)),
            (i = (function (e) {
              return "next" === e ? (e) => e.toLowerCase() : (e) => e.toUpperCase();
            })(e)),
            (a = "next" === e ? zt : Ht);
          var t = n
            .map(function (e) {
              return { lower: i(e), upper: s(e) };
            })
            .sort(function (e, t) {
              return a(e.lower, t.lower);
            });
          (o = t.map(function (e) {
            return e.upper;
          })),
            (u = t.map(function (e) {
              return e.lower;
            })),
            (l = e),
            (c = "next" === e ? "" : r);
        }
        d("next");
        var f = new e.Collection(e, () => tn(o[0], u[h - 1] + r));
        f._ondirectionchange = function (e) {
          d(e);
        };
        var p = 0;
        return (
          f._addAlgorithm(function (e, n, r) {
            var s = e.key;
            if ("string" != typeof s) return !1;
            var d = i(s);
            if (t(d, u, p)) return !0;
            for (var f = null, y = p; y < h; ++y) {
              var m = Jt(s, d, o[y], u[y], a, l);
              null === m && null === f ? (p = y + 1) : (null === f || a(f, m) > 0) && (f = m);
            }
            return (
              n(
                null !== f
                  ? function () {
                      e.continue(f + c);
                    }
                  : r
              ),
              !1
            );
          }),
          f
        );
      }
      function tn(e, t, n, r) {
        return { type: 2, lower: e, upper: t, lowerOpen: n, upperOpen: r };
      }
      function nn(e) {
        return { type: 1, lower: e, upper: e };
      }
      class rn {
        get Collection() {
          return this._ctx.table.db.Collection;
        }
        between(e, t, n, r) {
          (n = !1 !== n), (r = !0 === r);
          try {
            return this._cmp(e, t) > 0 || (0 === this._cmp(e, t) && (n || r) && (!n || !r))
              ? Gt(this)
              : new this.Collection(this, () => tn(e, t, !n, !r));
          } catch (e) {
            return Xt(this, _t);
          }
        }
        equals(e) {
          return null == e ? Xt(this, _t) : new this.Collection(this, () => nn(e));
        }
        above(e) {
          return null == e ? Xt(this, _t) : new this.Collection(this, () => tn(e, void 0, !0));
        }
        aboveOrEqual(e) {
          return null == e ? Xt(this, _t) : new this.Collection(this, () => tn(e, void 0, !1));
        }
        below(e) {
          return null == e ? Xt(this, _t) : new this.Collection(this, () => tn(void 0, e, !1, !0));
        }
        belowOrEqual(e) {
          return null == e ? Xt(this, _t) : new this.Collection(this, () => tn(void 0, e));
        }
        startsWith(e) {
          return "string" != typeof e ? Xt(this, kt) : this.between(e, e + bt, !0, !0);
        }
        startsWithIgnoreCase(e) {
          return "" === e ? this.startsWith(e) : en(this, (e, t) => 0 === e.indexOf(t[0]), [e], bt);
        }
        equalsIgnoreCase(e) {
          return en(this, (e, t) => e === t[0], [e], "");
        }
        anyOfIgnoreCase() {
          var e = B.apply(D, arguments);
          return 0 === e.length ? Gt(this) : en(this, (e, t) => -1 !== t.indexOf(e), e, "");
        }
        startsWithAnyOfIgnoreCase() {
          var e = B.apply(D, arguments);
          return 0 === e.length ? Gt(this) : en(this, (e, t) => t.some((t) => 0 === e.indexOf(t)), e, bt);
        }
        anyOf() {
          const e = B.apply(D, arguments);
          let t = this._cmp;
          try {
            e.sort(t);
          } catch (e) {
            return Xt(this, _t);
          }
          if (0 === e.length) return Gt(this);
          const n = new this.Collection(this, () => tn(e[0], e[e.length - 1]));
          n._ondirectionchange = (n) => {
            (t = "next" === n ? this._ascending : this._descending), e.sort(t);
          };
          let r = 0;
          return (
            n._addAlgorithm((n, s, i) => {
              const a = n.key;
              for (; t(a, e[r]) > 0; ) if ((++r, r === e.length)) return s(i), !1;
              return (
                0 === t(a, e[r]) ||
                (s(() => {
                  n.continue(e[r]);
                }),
                !1)
              );
            }),
            n
          );
        }
        notEqual(e) {
          return this.inAnyRange(
            [
              [wt, e],
              [e, this.db._maxKey]
            ],
            { includeLowers: !1, includeUppers: !1 }
          );
        }
        noneOf() {
          const e = B.apply(D, arguments);
          if (0 === e.length) return new this.Collection(this);
          try {
            e.sort(this._ascending);
          } catch (e) {
            return Xt(this, _t);
          }
          const t = e.reduce((e, t) => (e ? e.concat([[e[e.length - 1][1], t]]) : [[wt, t]]), null);
          return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 });
        }
        inAnyRange(e, t) {
          const n = this._cmp,
            r = this._ascending,
            s = this._descending,
            i = this._min,
            a = this._max;
          if (0 === e.length) return Gt(this);
          if (!e.every((e) => void 0 !== e[0] && void 0 !== e[1] && r(e[0], e[1]) <= 0))
            return Xt(
              this,
              "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",
              ee.InvalidArgument
            );
          const o = !t || !1 !== t.includeLowers,
            u = t && !0 === t.includeUppers;
          let l,
            c = r;
          function h(e, t) {
            return c(e[0], t[0]);
          }
          try {
            (l = e.reduce(function (e, t) {
              let r = 0,
                s = e.length;
              for (; r < s; ++r) {
                const s = e[r];
                if (n(t[0], s[1]) < 0 && n(t[1], s[0]) > 0) {
                  (s[0] = i(s[0], t[0])), (s[1] = a(s[1], t[1]));
                  break;
                }
              }
              return r === s && e.push(t), e;
            }, [])),
              l.sort(h);
          } catch (e) {
            return Xt(this, _t);
          }
          let d = 0;
          const f = u ? (e) => r(e, l[d][1]) > 0 : (e) => r(e, l[d][1]) >= 0,
            p = o ? (e) => s(e, l[d][0]) > 0 : (e) => s(e, l[d][0]) >= 0;
          let y = f;
          const m = new this.Collection(this, () => tn(l[0][0], l[l.length - 1][1], !o, !u));
          return (
            (m._ondirectionchange = (e) => {
              "next" === e ? ((y = f), (c = r)) : ((y = p), (c = s)), l.sort(h);
            }),
            m._addAlgorithm((e, t, n) => {
              for (var s = e.key; y(s); ) if ((++d, d === l.length)) return t(n), !1;
              return (
                !!(function (e) {
                  return !f(e) && !p(e);
                })(s) ||
                (0 === this._cmp(s, l[d][1]) ||
                  0 === this._cmp(s, l[d][0]) ||
                  t(() => {
                    c === r ? e.continue(l[d][0]) : e.continue(l[d][1]);
                  }),
                !1)
              );
            }),
            m
          );
        }
        startsWithAnyOf() {
          const e = B.apply(D, arguments);
          return e.every((e) => "string" == typeof e)
            ? 0 === e.length
              ? Gt(this)
              : this.inAnyRange(e.map((e) => [e, e + bt]))
            : Xt(this, "startsWithAnyOf() only works with strings");
        }
      }
      function sn(e) {
        return ze(function (t) {
          return an(t), e(t.target.error), !1;
        });
      }
      function an(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      const on = "storagemutated",
        un = "x-storagemutated-1",
        ln = jt(null, on);
      class cn {
        _lock() {
          return b(!Ae.global), ++this._reculock, 1 !== this._reculock || Ae.global || (Ae.lockOwnerFor = this), this;
        }
        _unlock() {
          if ((b(!Ae.global), 0 == --this._reculock))
            for (Ae.global || (Ae.lockOwnerFor = null); this._blockedFuncs.length > 0 && !this._locked(); ) {
              var e = this._blockedFuncs.shift();
              try {
                ct(e[1], e[0]);
              } catch (e) {}
            }
          return this;
        }
        _locked() {
          return this._reculock && Ae.lockOwnerFor !== this;
        }
        create(e) {
          if (!this.mode) return this;
          const t = this.db.idbdb,
            n = this.db._state.dbOpenError;
          if ((b(!this.idbtrans), !e && !t))
            switch (n && n.name) {
              case "DatabaseClosedError":
                throw new ee.DatabaseClosed(n);
              case "MissingAPIError":
                throw new ee.MissingAPI(n.message, n);
              default:
                throw new ee.OpenFailed(n);
            }
          if (!this.active) throw new ee.TransactionInactive();
          return (
            b(null === this._completion._state),
            ((e = this.idbtrans =
              e ||
              (this.db.core
                ? this.db.core.transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })
                : t.transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability }))).onerror = ze((t) => {
              an(t), this._reject(e.error);
            })),
            (e.onabort = ze((t) => {
              an(t), this.active && this._reject(new ee.Abort(e.error)), (this.active = !1), this.on("abort").fire(t);
            })),
            (e.oncomplete = ze(() => {
              (this.active = !1), this._resolve(), "mutatedParts" in e && ln.storagemutated.fire(e.mutatedParts);
            })),
            this
          );
        }
        _promise(e, t, n) {
          if ("readwrite" === e && "readwrite" !== this.mode) return mt(new ee.ReadOnly("Transaction is readonly"));
          if (!this.active) return mt(new ee.TransactionInactive());
          if (this._locked())
            return new Ke((r, s) => {
              this._blockedFuncs.push([
                () => {
                  this._promise(e, t, n).then(r, s);
                },
                Ae
              ]);
            });
          if (n)
            return nt(() => {
              var e = new Ke((e, n) => {
                this._lock();
                const r = t(e, n, this);
                r && r.then && r.then(e, n);
              });
              return e.finally(() => this._unlock()), (e._lib = !0), e;
            });
          var r = new Ke((e, n) => {
            var r = t(e, n, this);
            r && r.then && r.then(e, n);
          });
          return (r._lib = !0), r;
        }
        _root() {
          return this.parent ? this.parent._root() : this;
        }
        waitFor(e) {
          var t = this._root();
          const n = Ke.resolve(e);
          if (t._waitingFor) t._waitingFor = t._waitingFor.then(() => n);
          else {
            (t._waitingFor = n), (t._waitingQueue = []);
            var r = t.idbtrans.objectStore(t.storeNames[0]);
            !(function e() {
              for (++t._spinCount; t._waitingQueue.length; ) t._waitingQueue.shift()();
              t._waitingFor && (r.get(-1 / 0).onsuccess = e);
            })();
          }
          var s = t._waitingFor;
          return new Ke((e, r) => {
            n.then(
              (n) => t._waitingQueue.push(ze(e.bind(null, n))),
              (e) => t._waitingQueue.push(ze(r.bind(null, e)))
            ).finally(() => {
              t._waitingFor === s && (t._waitingFor = null);
            });
          });
        }
        abort() {
          this.active && ((this.active = !1), this.idbtrans && this.idbtrans.abort(), this._reject(new ee.Abort()));
        }
        table(e) {
          const t = this._memoizedTables || (this._memoizedTables = {});
          if (l(t, e)) return t[e];
          const n = this.schema[e];
          if (!n) throw new ee.NotFound("Table " + e + " not part of transaction");
          const r = new this.db.Table(e, n, this);
          return (r.core = this.db.core.table(e)), (t[e] = r), r;
        }
      }
      function hn(e, t, n, r, s, i, a) {
        return {
          name: e,
          keyPath: t,
          unique: n,
          multi: r,
          auto: s,
          compound: i,
          src: (n && !a ? "&" : "") + (r ? "*" : "") + (s ? "++" : "") + dn(t)
        };
      }
      function dn(e) {
        return "string" == typeof e ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function fn(e, t, n) {
        return { name: e, primKey: t, indexes: n, mappedClass: null, idxByName: _(n, (e) => [e.name, e]) };
      }
      let pn = (e) => {
        try {
          return e.only([[]]), (pn = () => [[]]), [[]];
        } catch (e) {
          return (pn = () => bt), bt;
        }
      };
      function yn(e) {
        return null == e
          ? () => {}
          : "string" == typeof e
          ? (function (e) {
              return 1 === e.split(".").length ? (t) => t[e] : (t) => k(t, e);
            })(e)
          : (t) => k(t, e);
      }
      function mn(e) {
        return [].slice.call(e);
      }
      let gn = 0;
      function vn(e) {
        return null == e ? ":id" : "string" == typeof e ? e : `[${e.join("+")}]`;
      }
      function bn(e, t, n) {
        function r(e) {
          if (3 === e.type) return null;
          if (4 === e.type) throw new Error("Cannot convert never type to IDBKeyRange");
          const { lower: n, upper: r, lowerOpen: s, upperOpen: i } = e;
          return void 0 === n
            ? void 0 === r
              ? null
              : t.upperBound(r, !!i)
            : void 0 === r
            ? t.lowerBound(n, !!s)
            : t.bound(n, r, !!s, !!i);
        }
        const { schema: s, hasGetAll: a } = (function (e, t) {
            const n = mn(e.objectStoreNames);
            return {
              schema: {
                name: e.name,
                tables: n
                  .map((e) => t.objectStore(e))
                  .map((e) => {
                    const { keyPath: t, autoIncrement: n } = e,
                      r = i(t),
                      s = null == t,
                      a = {},
                      o = {
                        name: e.name,
                        primaryKey: {
                          name: null,
                          isPrimaryKey: !0,
                          outbound: s,
                          compound: r,
                          keyPath: t,
                          autoIncrement: n,
                          unique: !0,
                          extractKey: yn(t)
                        },
                        indexes: mn(e.indexNames)
                          .map((t) => e.index(t))
                          .map((e) => {
                            const { name: t, unique: n, multiEntry: r, keyPath: s } = e,
                              o = { name: t, compound: i(s), keyPath: s, unique: n, multiEntry: r, extractKey: yn(s) };
                            return (a[vn(s)] = o), o;
                          }),
                        getIndexByKeyPath: (e) => a[vn(e)]
                      };
                    return (a[":id"] = o.primaryKey), null != t && (a[vn(t)] = o.primaryKey), o;
                  })
              },
              hasGetAll:
                n.length > 0 &&
                "getAll" in t.objectStore(n[0]) &&
                !(
                  "undefined" != typeof navigator &&
                  /Safari/.test(navigator.userAgent) &&
                  !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
                  [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604
                )
            };
          })(e, n),
          o = s.tables.map((e) =>
            (function (e) {
              const t = e.name;
              return {
                name: t,
                schema: e,
                mutate: function ({ trans: e, type: n, keys: s, values: i, range: a }) {
                  return new Promise((o, u) => {
                    o = ze(o);
                    const l = e.objectStore(t),
                      c = null == l.keyPath,
                      h = "put" === n || "add" === n;
                    if (!h && "delete" !== n && "deleteRange" !== n) throw new Error("Invalid operation type: " + n);
                    const { length: d } = s || i || { length: 1 };
                    if (s && i && s.length !== i.length) throw new Error("Given keys array must have same length as given values array.");
                    if (0 === d) return o({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
                    let f;
                    const p = [],
                      y = [];
                    let m = 0;
                    const g = (e) => {
                      ++m, an(e);
                    };
                    if ("deleteRange" === n) {
                      if (4 === a.type) return o({ numFailures: m, failures: y, results: [], lastResult: void 0 });
                      3 === a.type ? p.push((f = l.clear())) : p.push((f = l.delete(r(a))));
                    } else {
                      const [e, t] = h ? (c ? [i, s] : [i, null]) : [s, null];
                      if (h)
                        for (let r = 0; r < d; ++r) p.push((f = t && void 0 !== t[r] ? l[n](e[r], t[r]) : l[n](e[r]))), (f.onerror = g);
                      else for (let t = 0; t < d; ++t) p.push((f = l[n](e[t]))), (f.onerror = g);
                    }
                    const v = (e) => {
                      const t = e.target.result;
                      p.forEach((e, t) => null != e.error && (y[t] = e.error)),
                        o({ numFailures: m, failures: y, results: "delete" === n ? s : p.map((e) => e.result), lastResult: t });
                    };
                    (f.onerror = (e) => {
                      g(e), v(e);
                    }),
                      (f.onsuccess = v);
                  });
                },
                getMany: ({ trans: e, keys: n }) =>
                  new Promise((r, s) => {
                    r = ze(r);
                    const i = e.objectStore(t),
                      a = n.length,
                      o = new Array(a);
                    let u,
                      l = 0,
                      c = 0;
                    const h = (e) => {
                        const t = e.target;
                        (o[t._pos] = t.result), ++c === l && r(o);
                      },
                      d = sn(s);
                    for (let e = 0; e < a; ++e) null != n[e] && ((u = i.get(n[e])), (u._pos = e), (u.onsuccess = h), (u.onerror = d), ++l);
                    0 === l && r(o);
                  }),
                get: ({ trans: e, key: n }) =>
                  new Promise((r, s) => {
                    r = ze(r);
                    const i = e.objectStore(t).get(n);
                    (i.onsuccess = (e) => r(e.target.result)), (i.onerror = sn(s));
                  }),
                query: (function (e) {
                  return (n) =>
                    new Promise((s, i) => {
                      s = ze(s);
                      const { trans: a, values: o, limit: u, query: l } = n,
                        c = u === 1 / 0 ? void 0 : u,
                        { index: h, range: d } = l,
                        f = a.objectStore(t),
                        p = h.isPrimaryKey ? f : f.index(h.name),
                        y = r(d);
                      if (0 === u) return s({ result: [] });
                      if (e) {
                        const e = o ? p.getAll(y, c) : p.getAllKeys(y, c);
                        (e.onsuccess = (e) => s({ result: e.target.result })), (e.onerror = sn(i));
                      } else {
                        let e = 0;
                        const t = o || !("openKeyCursor" in p) ? p.openCursor(y) : p.openKeyCursor(y),
                          n = [];
                        (t.onsuccess = (r) => {
                          const i = t.result;
                          return i
                            ? (n.push(o ? i.value : i.primaryKey), ++e === u ? s({ result: n }) : void i.continue())
                            : s({ result: n });
                        }),
                          (t.onerror = sn(i));
                      }
                    });
                })(a),
                openCursor: function ({ trans: e, values: n, query: s, reverse: i, unique: a }) {
                  return new Promise((o, u) => {
                    o = ze(o);
                    const { index: l, range: c } = s,
                      h = e.objectStore(t),
                      d = l.isPrimaryKey ? h : h.index(l.name),
                      f = i ? (a ? "prevunique" : "prev") : a ? "nextunique" : "next",
                      p = n || !("openKeyCursor" in d) ? d.openCursor(r(c), f) : d.openKeyCursor(r(c), f);
                    (p.onerror = sn(u)),
                      (p.onsuccess = ze((t) => {
                        const n = p.result;
                        if (!n) return void o(null);
                        (n.___id = ++gn), (n.done = !1);
                        const r = n.continue.bind(n);
                        let s = n.continuePrimaryKey;
                        s && (s = s.bind(n));
                        const i = n.advance.bind(n),
                          a = () => {
                            throw new Error("Cursor not stopped");
                          };
                        (n.trans = e),
                          (n.stop =
                            n.continue =
                            n.continuePrimaryKey =
                            n.advance =
                              () => {
                                throw new Error("Cursor not started");
                              }),
                          (n.fail = ze(u)),
                          (n.next = function () {
                            let e = 1;
                            return this.start(() => (e-- ? this.continue() : this.stop())).then(() => this);
                          }),
                          (n.start = (e) => {
                            const t = new Promise((e, t) => {
                                (e = ze(e)),
                                  (p.onerror = sn(t)),
                                  (n.fail = t),
                                  (n.stop = (t) => {
                                    (n.stop = n.continue = n.continuePrimaryKey = n.advance = a), e(t);
                                  });
                              }),
                              o = () => {
                                if (p.result)
                                  try {
                                    e();
                                  } catch (e) {
                                    n.fail(e);
                                  }
                                else
                                  (n.done = !0),
                                    (n.start = () => {
                                      throw new Error("Cursor behind last entry");
                                    }),
                                    n.stop();
                              };
                            return (
                              (p.onsuccess = ze((e) => {
                                (p.onsuccess = o), o();
                              })),
                              (n.continue = r),
                              (n.continuePrimaryKey = s),
                              (n.advance = i),
                              o(),
                              t
                            );
                          }),
                          o(n);
                      }, u));
                  });
                },
                count({ query: e, trans: n }) {
                  const { index: s, range: i } = e;
                  return new Promise((e, a) => {
                    const o = n.objectStore(t),
                      u = s.isPrimaryKey ? o : o.index(s.name),
                      l = r(i),
                      c = l ? u.count(l) : u.count();
                    (c.onsuccess = ze((t) => e(t.target.result))), (c.onerror = sn(a));
                  });
                }
              };
            })(e)
          ),
          u = {};
        return (
          o.forEach((e) => (u[e.name] = e)),
          {
            stack: "dbcore",
            transaction: e.transaction.bind(e),
            table(e) {
              if (!u[e]) throw new Error(`Table '${e}' not found`);
              return u[e];
            },
            MIN_KEY: -1 / 0,
            MAX_KEY: pn(t),
            schema: s
          }
        );
      }
      function wn({ _novip: e }, t) {
        const n = t.db,
          r = (function (e, t, { IDBKeyRange: n, indexedDB: r }, s) {
            const i = (function (e, t) {
              return t.reduce((e, { create: t }) => ({ ...e, ...t(e) }), e);
            })(bn(t, n, s), e.dbcore);
            return { dbcore: i };
          })(e._middlewares, n, e._deps, t);
        (e.core = r.dbcore),
          e.tables.forEach((t) => {
            const n = t.name;
            e.core.schema.tables.some((e) => e.name === n) && ((t.core = e.core.table(n)), e[n] instanceof e.Table && (e[n].core = t.core));
          });
      }
      function _n({ _novip: e }, t, n, r) {
        n.forEach((n) => {
          const s = r[n];
          t.forEach((t) => {
            const r = y(t, n);
            (!r || ("value" in r && void 0 === r.value)) &&
              (t === e.Transaction.prototype || t instanceof e.Transaction
                ? d(t, n, {
                    get() {
                      return this.table(n);
                    },
                    set(e) {
                      h(this, n, { value: e, writable: !0, configurable: !0, enumerable: !0 });
                    }
                  })
                : (t[n] = new e.Table(n, s)));
          });
        });
      }
      function kn({ _novip: e }, t) {
        t.forEach((t) => {
          for (let n in t) t[n] instanceof e.Table && delete t[n];
        });
      }
      function xn(e, t) {
        return e._cfg.version - t._cfg.version;
      }
      function En(e, t, n, r) {
        const i = e._dbSchema,
          a = e._createTransaction("readwrite", e._storeNames, i);
        a.create(n), a._completion.catch(r);
        const o = a._reject.bind(a),
          u = Ae.transless || Ae;
        nt(() => {
          (Ae.trans = a),
            (Ae.transless = u),
            0 === t
              ? (s(i).forEach((e) => {
                  qn(n, e, i[e].primKey, i[e].indexes);
                }),
                wn(e, n),
                Ke.follow(() => e.on.populate.fire(a)).catch(o))
              : (function ({ _novip: e }, t, n, r) {
                  const i = [],
                    a = e._versions;
                  let o = (e._dbSchema = Tn(0, e.idbdb, r)),
                    u = !1;
                  const l = a.filter((e) => e._cfg.version >= t);
                  return (
                    l.forEach((a) => {
                      i.push(() => {
                        const i = o,
                          l = a._cfg.dbschema;
                        In(e, i, r), In(e, l, r), (o = e._dbSchema = l);
                        const c = Sn(i, l);
                        c.add.forEach((e) => {
                          qn(r, e[0], e[1].primKey, e[1].indexes);
                        }),
                          c.change.forEach((e) => {
                            if (e.recreate) throw new ee.Upgrade("Not yet support for changing primary key");
                            {
                              const t = r.objectStore(e.name);
                              e.add.forEach((e) => Pn(t, e)),
                                e.change.forEach((e) => {
                                  t.deleteIndex(e.name), Pn(t, e);
                                }),
                                e.del.forEach((e) => t.deleteIndex(e));
                            }
                          });
                        const h = a._cfg.contentUpgrade;
                        if (h && a._cfg.version > t) {
                          wn(e, r), (n._memoizedTables = {}), (u = !0);
                          let t = E(l);
                          c.del.forEach((e) => {
                            t[e] = i[e];
                          }),
                            kn(e, [e.Transaction.prototype]),
                            _n(e, [e.Transaction.prototype], s(t), t),
                            (n.schema = t);
                          const a = M(h);
                          let o;
                          a && rt();
                          const d = Ke.follow(() => {
                            if (((o = h(n)), o && a)) {
                              var e = st.bind(null, null);
                              o.then(e, e);
                            }
                          });
                          return o && "function" == typeof o.then ? Ke.resolve(o) : d.then(() => o);
                        }
                      }),
                        i.push((t) => {
                          (u && St) ||
                            (function (e, t) {
                              [].slice.call(t.db.objectStoreNames).forEach((n) => null == e[n] && t.db.deleteObjectStore(n));
                            })(a._cfg.dbschema, t),
                            kn(e, [e.Transaction.prototype]),
                            _n(e, [e.Transaction.prototype], e._storeNames, e._dbSchema),
                            (n.schema = e._dbSchema);
                        });
                    }),
                    (function e() {
                      return i.length ? Ke.resolve(i.shift()(n.idbtrans)).then(e) : Ke.resolve();
                    })().then(() => {
                      var e, t;
                      (t = r),
                        s((e = o)).forEach((n) => {
                          t.db.objectStoreNames.contains(n) || qn(t, n, e[n].primKey, e[n].indexes);
                        });
                    })
                  );
                })(e, t, a, n).catch(o);
        });
      }
      function Sn(e, t) {
        const n = { del: [], add: [], change: [] };
        let r;
        for (r in e) t[r] || n.del.push(r);
        for (r in t) {
          const s = e[r],
            i = t[r];
          if (s) {
            const e = { name: r, def: i, recreate: !1, del: [], add: [], change: [] };
            if ("" + (s.primKey.keyPath || "") != "" + (i.primKey.keyPath || "") || (s.primKey.auto !== i.primKey.auto && !Et))
              (e.recreate = !0), n.change.push(e);
            else {
              const t = s.idxByName,
                r = i.idxByName;
              let a;
              for (a in t) r[a] || e.del.push(a);
              for (a in r) {
                const n = t[a],
                  s = r[a];
                n ? n.src !== s.src && e.change.push(s) : e.add.push(s);
              }
              (e.del.length > 0 || e.add.length > 0 || e.change.length > 0) && n.change.push(e);
            }
          } else n.add.push([r, i]);
        }
        return n;
      }
      function qn(e, t, n, r) {
        const s = e.db.createObjectStore(t, n.keyPath ? { keyPath: n.keyPath, autoIncrement: n.auto } : { autoIncrement: n.auto });
        return r.forEach((e) => Pn(s, e)), s;
      }
      function Pn(e, t) {
        e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
      }
      function Tn(e, t, n) {
        const r = {};
        return (
          g(t.objectStoreNames, 0).forEach((e) => {
            const t = n.objectStore(e);
            let s = t.keyPath;
            const i = hn(dn(s), s || "", !1, !1, !!t.autoIncrement, s && "string" != typeof s, !0),
              a = [];
            for (let e = 0; e < t.indexNames.length; ++e) {
              const n = t.index(t.indexNames[e]);
              s = n.keyPath;
              var o = hn(n.name, s, !!n.unique, !!n.multiEntry, !1, s && "string" != typeof s, !1);
              a.push(o);
            }
            r[e] = fn(e, i, a);
          }),
          r
        );
      }
      function In({ _novip: e }, t, n) {
        const s = n.db.objectStoreNames;
        for (let r = 0; r < s.length; ++r) {
          const i = s[r],
            a = n.objectStore(i);
          e._hasGetAll = "getAll" in a;
          for (let e = 0; e < a.indexNames.length; ++e) {
            const n = a.indexNames[e],
              r = a.index(n).keyPath,
              s = "string" == typeof r ? r : "[" + g(r).join("+") + "]";
            if (t[i]) {
              const e = t[i].idxByName[s];
              e && ((e.name = n), delete t[i].idxByName[s], (t[i].idxByName[n] = e));
            }
          }
        }
        "undefined" != typeof navigator &&
          /Safari/.test(navigator.userAgent) &&
          !/(Chrome\/|Edge\/)/.test(navigator.userAgent) &&
          r.WorkerGlobalScope &&
          r instanceof r.WorkerGlobalScope &&
          [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 &&
          (e._hasGetAll = !1);
      }
      class An {
        _parseStoresSpec(e, t) {
          s(e).forEach((n) => {
            if (null !== e[n]) {
              var r = e[n].split(",").map((e, t) => {
                  const n = (e = e.trim()).replace(/([&*]|\+\+)/g, ""),
                    r = /^\[/.test(n) ? n.match(/^\[(.*)\]$/)[1].split("+") : n;
                  return hn(n, r || null, /\&/.test(e), /\*/.test(e), /\+\+/.test(e), i(r), 0 === t);
                }),
                s = r.shift();
              if (s.multi) throw new ee.Schema("Primary key cannot be multi-valued");
              r.forEach((e) => {
                if (e.auto) throw new ee.Schema("Only primary key can be marked as autoIncrement (++)");
                if (!e.keyPath) throw new ee.Schema("Index must have a name and cannot be an empty string");
              }),
                (t[n] = fn(n, s, r));
            }
          });
        }
        stores(e) {
          const t = this.db;
          this._cfg.storesSource = this._cfg.storesSource ? a(this._cfg.storesSource, e) : e;
          const n = t._versions,
            r = {};
          let i = {};
          return (
            n.forEach((e) => {
              a(r, e._cfg.storesSource), (i = e._cfg.dbschema = {}), e._parseStoresSpec(r, i);
            }),
            (t._dbSchema = i),
            kn(t, [t._allTables, t, t.Transaction.prototype]),
            _n(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], s(i), i),
            (t._storeNames = s(i)),
            this
          );
        }
        upgrade(e) {
          return (this._cfg.contentUpgrade = he(this._cfg.contentUpgrade || re, e)), this;
        }
      }
      function Cn(e, t) {
        let n = e._dbNamesDB;
        return (
          n || ((n = e._dbNamesDB = new Gn(Tt, { addons: [], indexedDB: e, IDBKeyRange: t })), n.version(1).stores({ dbnames: "name" })),
          n.table("dbnames")
        );
      }
      function On(e) {
        return e && "function" == typeof e.databases;
      }
      function Rn(e) {
        return nt(function () {
          return (Ae.letThrough = !0), e();
        });
      }
      function Kn() {
        var e;
        return !navigator.userAgentData &&
          /Safari\//.test(navigator.userAgent) &&
          !/Chrom(e|ium)\//.test(navigator.userAgent) &&
          indexedDB.databases
          ? new Promise(function (t) {
              var n = function () {
                return indexedDB.databases().finally(t);
              };
              (e = setInterval(n, 100)), n();
            }).finally(function () {
              return clearInterval(e);
            })
          : Promise.resolve();
      }
      function jn(e) {
        var t = (t) => e.next(t),
          n = s(t),
          r = s((t) => e.throw(t));
        function s(e) {
          return (t) => {
            var s = e(t),
              a = s.value;
            return s.done ? a : a && "function" == typeof a.then ? a.then(n, r) : i(a) ? Promise.all(a).then(n, r) : n(a);
          };
        }
        return s(t)();
      }
      function Dn(e, t, n) {
        var r = arguments.length;
        if (r < 2) throw new ee.InvalidArgument("Too few arguments");
        for (var s = new Array(r - 1); --r; ) s[r - 1] = arguments[r];
        return (n = s.pop()), [e, q(s), n];
      }
      function Bn(e, t, n, r, s) {
        return Ke.resolve().then(() => {
          const i = Ae.transless || Ae,
            a = e._createTransaction(t, n, e._dbSchema, r),
            o = { trans: a, transless: i };
          if (r) a.idbtrans = r.idbtrans;
          else
            try {
              a.create(), (e._state.PR1398_maxLoop = 3);
            } catch (r) {
              return r.name === G.InvalidState && e.isOpen() && --e._state.PR1398_maxLoop > 0
                ? (console.warn("Dexie: Need to reopen db"), e._close(), e.open().then(() => Bn(e, t, n, null, s)))
                : mt(r);
            }
          const u = M(s);
          let l;
          u && rt();
          const c = Ke.follow(() => {
            if (((l = s.call(a, a)), l))
              if (u) {
                var e = st.bind(null, null);
                l.then(e, e);
              } else "function" == typeof l.next && "function" == typeof l.throw && (l = jn(l));
          }, o);
          return (
            l && "function" == typeof l.then
              ? Ke.resolve(l).then((e) =>
                  a.active ? e : mt(new ee.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))
                )
              : c.then(() => l)
          )
            .then((e) => (r && a._resolve(), a._completion.then(() => e)))
            .catch((e) => (a._reject(e), mt(e)));
        });
      }
      function Mn(e, t, n) {
        const r = i(e) ? e.slice() : [e];
        for (let e = 0; e < n; ++e) r.push(t);
        return r;
      }
      const Nn = {
        stack: "dbcore",
        name: "VirtualIndexMiddleware",
        level: 1,
        create: function (e) {
          return {
            ...e,
            table(t) {
              const n = e.table(t),
                { schema: r } = n,
                s = {},
                i = [];
              function a(e, t, n) {
                const r = vn(e),
                  o = (s[r] = s[r] || []),
                  u = null == e ? 0 : "string" == typeof e ? 1 : e.length,
                  l = t > 0,
                  c = { ...n, isVirtual: l, keyTail: t, keyLength: u, extractKey: yn(e), unique: !l && n.unique };
                return (
                  o.push(c),
                  c.isPrimaryKey || i.push(c),
                  u > 1 && a(2 === u ? e[0] : e.slice(0, u - 1), t + 1, n),
                  o.sort((e, t) => e.keyTail - t.keyTail),
                  c
                );
              }
              const o = a(r.primaryKey.keyPath, 0, r.primaryKey);
              s[":id"] = [o];
              for (const e of r.indexes) a(e.keyPath, 0, e);
              function u(t) {
                const n = t.query.index;
                return n.isVirtual
                  ? {
                      ...t,
                      query: {
                        index: n,
                        range:
                          ((r = t.query.range),
                          (s = n.keyTail),
                          {
                            type: 1 === r.type ? 2 : r.type,
                            lower: Mn(r.lower, r.lowerOpen ? e.MAX_KEY : e.MIN_KEY, s),
                            lowerOpen: !0,
                            upper: Mn(r.upper, r.upperOpen ? e.MIN_KEY : e.MAX_KEY, s),
                            upperOpen: !0
                          })
                      }
                    }
                  : t;
                var r, s;
              }
              const l = {
                ...n,
                schema: {
                  ...r,
                  primaryKey: o,
                  indexes: i,
                  getIndexByKeyPath: function (e) {
                    const t = s[vn(e)];
                    return t && t[0];
                  }
                },
                count: (e) => n.count(u(e)),
                query: (e) => n.query(u(e)),
                openCursor(t) {
                  const { keyTail: r, isVirtual: s, keyLength: i } = t.query.index;
                  return s
                    ? n.openCursor(u(t)).then(
                        (n) =>
                          n &&
                          (function (n) {
                            const s = Object.create(n, {
                              continue: {
                                value: function (s) {
                                  null != s
                                    ? n.continue(Mn(s, t.reverse ? e.MAX_KEY : e.MIN_KEY, r))
                                    : t.unique
                                    ? n.continue(n.key.slice(0, i).concat(t.reverse ? e.MIN_KEY : e.MAX_KEY, r))
                                    : n.continue();
                                }
                              },
                              continuePrimaryKey: {
                                value(t, s) {
                                  n.continuePrimaryKey(Mn(t, e.MAX_KEY, r), s);
                                }
                              },
                              primaryKey: { get: () => n.primaryKey },
                              key: {
                                get() {
                                  const e = n.key;
                                  return 1 === i ? e[0] : e.slice(0, i);
                                }
                              },
                              value: { get: () => n.value }
                            });
                            return s;
                          })(n)
                      )
                    : n.openCursor(t);
                }
              };
              return l;
            }
          };
        }
      };
      function Fn(e, t, n, r) {
        return (
          (n = n || {}),
          (r = r || ""),
          s(e).forEach((s) => {
            if (l(t, s)) {
              var i = e[s],
                a = t[s];
              if ("object" == typeof i && "object" == typeof a && i && a) {
                const e = R(i);
                e !== R(a) ? (n[r + s] = t[s]) : "Object" === e ? Fn(i, a, n, r + s + ".") : i !== a && (n[r + s] = t[s]);
              } else i !== a && (n[r + s] = t[s]);
            } else n[r + s] = void 0;
          }),
          s(t).forEach((s) => {
            l(e, s) || (n[r + s] = t[s]);
          }),
          n
        );
      }
      const $n = {
        stack: "dbcore",
        name: "HooksMiddleware",
        level: 2,
        create: (e) => ({
          ...e,
          table(t) {
            const n = e.table(t),
              { primaryKey: r } = n.schema,
              s = {
                ...n,
                mutate(e) {
                  const s = Ae.trans,
                    { deleting: i, creating: a, updating: o } = s.table(t).hook;
                  switch (e.type) {
                    case "add":
                      if (a.fire === re) break;
                      return s._promise("readwrite", () => u(e), !0);
                    case "put":
                      if (a.fire === re && o.fire === re) break;
                      return s._promise("readwrite", () => u(e), !0);
                    case "delete":
                      if (i.fire === re) break;
                      return s._promise("readwrite", () => u(e), !0);
                    case "deleteRange":
                      if (i.fire === re) break;
                      return s._promise(
                        "readwrite",
                        () =>
                          (function (e) {
                            return c(e.trans, e.range, 1e4);
                          })(e),
                        !0
                      );
                  }
                  return n.mutate(e);
                  function u(e) {
                    const t = Ae.trans,
                      s =
                        e.keys ||
                        (function (e, t) {
                          return "delete" === t.type ? t.keys : t.keys || t.values.map(e.extractKey);
                        })(r, e);
                    if (!s) throw new Error("Keys missing");
                    return (
                      "delete" !== (e = "add" === e.type || "put" === e.type ? { ...e, keys: s } : { ...e }).type &&
                        (e.values = [...e.values]),
                      e.keys && (e.keys = [...e.keys]),
                      (function (e, t, n) {
                        return "add" === t.type ? Promise.resolve([]) : e.getMany({ trans: t.trans, keys: n, cache: "immutable" });
                      })(n, e, s).then((u) => {
                        const c = s.map((n, s) => {
                          const c = u[s],
                            h = { onerror: null, onsuccess: null };
                          if ("delete" === e.type) i.fire.call(h, n, c, t);
                          else if ("add" === e.type || void 0 === c) {
                            const i = a.fire.call(h, n, e.values[s], t);
                            null == n && null != i && ((n = i), (e.keys[s] = n), r.outbound || x(e.values[s], r.keyPath, n));
                          } else {
                            const r = Fn(c, e.values[s]),
                              i = o.fire.call(h, r, n, c, t);
                            if (i) {
                              const t = e.values[s];
                              Object.keys(i).forEach((e) => {
                                l(t, e) ? (t[e] = i[e]) : x(t, e, i[e]);
                              });
                            }
                          }
                          return h;
                        });
                        return n
                          .mutate(e)
                          .then(({ failures: t, results: n, numFailures: r, lastResult: i }) => {
                            for (let r = 0; r < s.length; ++r) {
                              const i = n ? n[r] : s[r],
                                a = c[r];
                              null == i
                                ? a.onerror && a.onerror(t[r])
                                : a.onsuccess && a.onsuccess("put" === e.type && u[r] ? e.values[r] : i);
                            }
                            return { failures: t, results: n, numFailures: r, lastResult: i };
                          })
                          .catch((e) => (c.forEach((t) => t.onerror && t.onerror(e)), Promise.reject(e)));
                      })
                    );
                  }
                  function c(e, t, s) {
                    return n
                      .query({ trans: e, values: !1, query: { index: r, range: t }, limit: s })
                      .then(({ result: n }) =>
                        u({ type: "delete", keys: n, trans: e }).then((r) =>
                          r.numFailures > 0
                            ? Promise.reject(r.failures[0])
                            : n.length < s
                            ? { failures: [], numFailures: 0, lastResult: void 0 }
                            : c(e, { ...t, lower: n[n.length - 1], lowerOpen: !0 }, s)
                        )
                      );
                  }
                }
              };
            return s;
          }
        })
      };
      function Un(e, t, n) {
        try {
          if (!t) return null;
          if (t.keys.length < e.length) return null;
          const r = [];
          for (let s = 0, i = 0; s < t.keys.length && i < e.length; ++s)
            0 === Vt(t.keys[s], e[i]) && (r.push(n ? A(t.values[s]) : t.values[s]), ++i);
          return r.length === e.length ? r : null;
        } catch (e) {
          return null;
        }
      }
      const Wn = {
        stack: "dbcore",
        level: -1,
        create: (e) => ({
          table: (t) => {
            const n = e.table(t);
            return {
              ...n,
              getMany: (e) => {
                if (!e.cache) return n.getMany(e);
                const t = Un(e.keys, e.trans._cache, "clone" === e.cache);
                return t
                  ? Ke.resolve(t)
                  : n.getMany(e).then((t) => ((e.trans._cache = { keys: e.keys, values: "clone" === e.cache ? A(t) : t }), t));
              },
              mutate: (e) => ("add" !== e.type && (e.trans._cache = null), n.mutate(e))
            };
          }
        })
      };
      function Vn(e) {
        return !("from" in e);
      }
      const Ln = function (e, t) {
        if (!this) {
          const t = new Ln();
          return e && "d" in e && a(t, e), t;
        }
        a(this, arguments.length ? { d: 1, from: e, to: arguments.length > 1 ? t : e } : { d: 0 });
      };
      function Qn(e, t, n) {
        const r = Vt(t, n);
        if (isNaN(r)) return;
        if (r > 0) throw RangeError();
        if (Vn(e)) return a(e, { from: t, to: n, d: 1 });
        const s = e.l,
          i = e.r;
        if (Vt(n, e.from) < 0) return s ? Qn(s, t, n) : (e.l = { from: t, to: n, d: 1, l: null, r: null }), zn(e);
        if (Vt(t, e.to) > 0) return i ? Qn(i, t, n) : (e.r = { from: t, to: n, d: 1, l: null, r: null }), zn(e);
        Vt(t, e.from) < 0 && ((e.from = t), (e.l = null), (e.d = i ? i.d + 1 : 1)),
          Vt(n, e.to) > 0 && ((e.to = n), (e.r = null), (e.d = e.l ? e.l.d + 1 : 1));
        const o = !e.r;
        s && !e.l && Yn(e, s), i && o && Yn(e, i);
      }
      function Yn(e, t) {
        Vn(t) ||
          (function e(t, { from: n, to: r, l: s, r: i }) {
            Qn(t, n, r), s && e(t, s), i && e(t, i);
          })(e, t);
      }
      function Zn(e) {
        let t = Vn(e) ? null : { s: 0, n: e };
        return {
          next(e) {
            const n = arguments.length > 0;
            for (; t; )
              switch (t.s) {
                case 0:
                  if (((t.s = 1), n)) for (; t.n.l && Vt(e, t.n.from) < 0; ) t = { up: t, n: t.n.l, s: 1 };
                  else for (; t.n.l; ) t = { up: t, n: t.n.l, s: 1 };
                case 1:
                  if (((t.s = 2), !n || Vt(e, t.n.to) <= 0)) return { value: t.n, done: !1 };
                case 2:
                  if (t.n.r) {
                    (t.s = 3), (t = { up: t, n: t.n.r, s: 0 });
                    continue;
                  }
                case 3:
                  t = t.up;
              }
            return { done: !0 };
          }
        };
      }
      function zn(e) {
        var t, n;
        const r = ((null === (t = e.r) || void 0 === t ? void 0 : t.d) || 0) - ((null === (n = e.l) || void 0 === n ? void 0 : n.d) || 0),
          s = r > 1 ? "r" : r < -1 ? "l" : "";
        if (s) {
          const t = "r" === s ? "l" : "r",
            n = { ...e },
            r = e[s];
          (e.from = r.from), (e.to = r.to), (e[s] = r[s]), (n[s] = r[t]), (e[t] = n), (n.d = Hn(n));
        }
        e.d = Hn(e);
      }
      function Hn({ r: e, l: t }) {
        return (e ? (t ? Math.max(e.d, t.d) : e.d) : t ? t.d : 0) + 1;
      }
      c(Ln.prototype, {
        add(e) {
          return Yn(this, e), this;
        },
        addKey(e) {
          return Qn(this, e, e), this;
        },
        addKeys(e) {
          return e.forEach((e) => Qn(this, e, e)), this;
        },
        [K]() {
          return Zn(this);
        }
      });
      const Xn = {
        stack: "dbcore",
        level: 0,
        create: (e) => {
          const t = e.schema.name,
            n = new Ln(e.MIN_KEY, e.MAX_KEY);
          return {
            ...e,
            table: (r) => {
              const a = e.table(r),
                { schema: o } = a,
                { primaryKey: u } = o,
                { extractKey: l, outbound: c } = u,
                h = {
                  ...a,
                  mutate: (e) => {
                    const s = e.trans,
                      u = s.mutatedParts || (s.mutatedParts = {}),
                      l = (e) => {
                        const n = `idb://${t}/${r}/${e}`;
                        return u[n] || (u[n] = new Ln());
                      },
                      c = l(""),
                      h = l(":dels"),
                      { type: d } = e;
                    let [f, p] =
                      "deleteRange" === e.type ? [e.range] : "delete" === e.type ? [e.keys] : e.values.length < 50 ? [[], e.values] : [];
                    const y = e.trans._cache;
                    return a.mutate(e).then((e) => {
                      if (i(f)) {
                        "delete" !== d && (f = e.results), c.addKeys(f);
                        const t = Un(f, y);
                        t || "add" === d || h.addKeys(f),
                          (t || p) &&
                            (function (e, t, n, r) {
                              t.indexes.forEach(function (t) {
                                const s = e(t.name || "");
                                function a(e) {
                                  return null != e ? t.extractKey(e) : null;
                                }
                                const o = (e) => (t.multiEntry && i(e) ? e.forEach((e) => s.addKey(e)) : s.addKey(e));
                                (n || r).forEach((e, t) => {
                                  const s = n && a(n[t]),
                                    i = r && a(r[t]);
                                  0 !== Vt(s, i) && (null != s && o(s), null != i && o(i));
                                });
                              });
                            })(l, o, t, p);
                      } else if (f) {
                        const e = { from: f.lower, to: f.upper };
                        h.add(e), c.add(e);
                      } else c.add(n), h.add(n), o.indexes.forEach((e) => l(e.name).add(n));
                      return e;
                    });
                  }
                },
                d = ({ query: { index: t, range: n } }) => {
                  var r, s;
                  return [
                    t,
                    new Ln(null !== (r = n.lower) && void 0 !== r ? r : e.MIN_KEY, null !== (s = n.upper) && void 0 !== s ? s : e.MAX_KEY)
                  ];
                },
                f = { get: (e) => [u, new Ln(e.key)], getMany: (e) => [u, new Ln().addKeys(e.keys)], count: d, query: d, openCursor: d };
              return (
                s(f).forEach((e) => {
                  h[e] = function (s) {
                    const { subscr: i } = Ae;
                    if (i) {
                      const o = (e) => {
                          const n = `idb://${t}/${r}/${e}`;
                          return i[n] || (i[n] = new Ln());
                        },
                        u = o(""),
                        h = o(":dels"),
                        [d, p] = f[e](s);
                      if ((o(d.name || "").add(p), !d.isPrimaryKey)) {
                        if ("count" !== e) {
                          const t = "query" === e && c && s.values && a.query({ ...s, values: !1 });
                          return a[e].apply(this, arguments).then((n) => {
                            if ("query" === e) {
                              if (c && s.values) return t.then(({ result: e }) => (u.addKeys(e), n));
                              const e = s.values ? n.result.map(l) : n.result;
                              s.values ? u.addKeys(e) : h.addKeys(e);
                            } else if ("openCursor" === e) {
                              const e = n,
                                t = s.values;
                              return (
                                e &&
                                Object.create(e, {
                                  key: { get: () => (h.addKey(e.primaryKey), e.key) },
                                  primaryKey: {
                                    get() {
                                      const t = e.primaryKey;
                                      return h.addKey(t), t;
                                    }
                                  },
                                  value: { get: () => (t && u.addKey(e.primaryKey), e.value) }
                                })
                              );
                            }
                            return n;
                          });
                        }
                        h.add(n);
                      }
                    }
                    return a[e].apply(this, arguments);
                  };
                }),
                h
              );
            }
          };
        }
      };
      class Gn {
        constructor(e, t) {
          (this._middlewares = {}), (this.verno = 0);
          const n = Gn.dependencies;
          (this._options = t = { addons: Gn.addons, autoOpen: !0, indexedDB: n.indexedDB, IDBKeyRange: n.IDBKeyRange, ...t }),
            (this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange });
          const { addons: r } = t;
          (this._dbSchema = {}),
            (this._versions = []),
            (this._storeNames = []),
            (this._allTables = {}),
            (this.idbdb = null),
            (this._novip = this);
          const s = {
            dbOpenError: null,
            isBeingOpened: !1,
            onReadyBeingFired: null,
            openComplete: !1,
            dbReadyResolve: re,
            dbReadyPromise: null,
            cancelOpen: re,
            openCanceller: null,
            autoSchema: !0,
            PR1398_maxLoop: 3
          };
          var i;
          (s.dbReadyPromise = new Ke((e) => {
            s.dbReadyResolve = e;
          })),
            (s.openCanceller = new Ke((e, t) => {
              s.cancelOpen = t;
            })),
            (this._state = s),
            (this.name = e),
            (this.on = jt(this, "populate", "blocked", "versionchange", "close", { ready: [he, re] })),
            (this.on.ready.subscribe = v(this.on.ready.subscribe, (e) => (t, n) => {
              Gn.vip(() => {
                const r = this._state;
                if (r.openComplete) r.dbOpenError || Ke.resolve().then(t), n && e(t);
                else if (r.onReadyBeingFired) r.onReadyBeingFired.push(t), n && e(t);
                else {
                  e(t);
                  const r = this;
                  n ||
                    e(function e() {
                      r.on.ready.unsubscribe(t), r.on.ready.unsubscribe(e);
                    });
                }
              });
            })),
            (this.Collection =
              ((i = this),
              Dt(Yt.prototype, function (e, t) {
                this.db = i;
                let n = Ot,
                  r = null;
                if (t)
                  try {
                    n = t();
                  } catch (e) {
                    r = e;
                  }
                const s = e._ctx,
                  a = s.table,
                  o = a.hook.reading.fire;
                this._ctx = {
                  table: a,
                  index: s.index,
                  isPrimKey: !s.index || (a.schema.primKey.keyPath && s.index === a.schema.primKey.name),
                  range: n,
                  keysOnly: !1,
                  dir: "next",
                  unique: "",
                  algorithm: null,
                  filter: null,
                  replayFilter: null,
                  justLimit: !0,
                  isMatch: null,
                  offset: 0,
                  limit: 1 / 0,
                  error: r,
                  or: s.or,
                  valueMapper: o !== se ? o : null
                };
              }))),
            (this.Table = (function (e) {
              return Dt(Kt.prototype, function (t, n, r) {
                (this.db = e),
                  (this._tx = r),
                  (this.name = t),
                  (this.schema = n),
                  (this.hook = e._allTables[t]
                    ? e._allTables[t].hook
                    : jt(null, { creating: [oe, re], reading: [ie, se], updating: [le, re], deleting: [ue, re] }));
              });
            })(this)),
            (this.Transaction = (function (e) {
              return Dt(cn.prototype, function (t, n, r, s, i) {
                (this.db = e),
                  (this.mode = t),
                  (this.storeNames = n),
                  (this.schema = r),
                  (this.chromeTransactionDurability = s),
                  (this.idbtrans = null),
                  (this.on = jt(this, "complete", "error", "abort")),
                  (this.parent = i || null),
                  (this.active = !0),
                  (this._reculock = 0),
                  (this._blockedFuncs = []),
                  (this._resolve = null),
                  (this._reject = null),
                  (this._waitingFor = null),
                  (this._waitingQueue = null),
                  (this._spinCount = 0),
                  (this._completion = new Ke((e, t) => {
                    (this._resolve = e), (this._reject = t);
                  })),
                  this._completion.then(
                    () => {
                      (this.active = !1), this.on.complete.fire();
                    },
                    (e) => {
                      var t = this.active;
                      return (
                        (this.active = !1),
                        this.on.error.fire(e),
                        this.parent ? this.parent._reject(e) : t && this.idbtrans && this.idbtrans.abort(),
                        mt(e)
                      );
                    }
                  );
              });
            })(this)),
            (this.Version = (function (e) {
              return Dt(An.prototype, function (t) {
                (this.db = e), (this._cfg = { version: t, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null });
              });
            })(this)),
            (this.WhereClause = (function (e) {
              return Dt(rn.prototype, function (t, n, r) {
                (this.db = e), (this._ctx = { table: t, index: ":id" === n ? null : n, or: r });
                const s = e._deps.indexedDB;
                if (!s) throw new ee.MissingAPI();
                (this._cmp = this._ascending = s.cmp.bind(s)),
                  (this._descending = (e, t) => s.cmp(t, e)),
                  (this._max = (e, t) => (s.cmp(e, t) > 0 ? e : t)),
                  (this._min = (e, t) => (s.cmp(e, t) < 0 ? e : t)),
                  (this._IDBKeyRange = e._deps.IDBKeyRange);
              });
            })(this)),
            this.on("versionchange", (e) => {
              e.newVersion > 0
                ? console.warn(`Another connection wants to upgrade database '${this.name}'. Closing db now to resume the upgrade.`)
                : console.warn(`Another connection wants to delete database '${this.name}'. Closing db now to resume the delete request.`),
                this.close();
            }),
            this.on("blocked", (e) => {
              !e.newVersion || e.newVersion < e.oldVersion
                ? console.warn(`Dexie.delete('${this.name}') was blocked`)
                : console.warn(`Upgrade '${this.name}' blocked by other connection holding version ${e.oldVersion / 10}`);
            }),
            (this._maxKey = pn(t.IDBKeyRange)),
            (this._createTransaction = (e, t, n, r) => new this.Transaction(e, t, n, this._options.chromeTransactionDurability, r)),
            (this._fireOnBlocked = (e) => {
              this.on("blocked").fire(e),
                xt.filter((e) => e.name === this.name && e !== this && !e._state.vcFired).map((t) => t.on("versionchange").fire(e));
            }),
            this.use(Nn),
            this.use($n),
            this.use(Xn),
            this.use(Wn),
            (this.vip = Object.create(this, { _vip: { value: !0 } })),
            r.forEach((e) => e(this));
        }
        version(e) {
          if (isNaN(e) || e < 0.1) throw new ee.Type("Given version is not a positive number");
          if (((e = Math.round(10 * e) / 10), this.idbdb || this._state.isBeingOpened))
            throw new ee.Schema("Cannot add version when database is open");
          this.verno = Math.max(this.verno, e);
          const t = this._versions;
          var n = t.filter((t) => t._cfg.version === e)[0];
          return n || ((n = new this.Version(e)), t.push(n), t.sort(xn), n.stores({}), (this._state.autoSchema = !1), n);
        }
        _whenReady(e) {
          return this.idbdb && (this._state.openComplete || Ae.letThrough || this._vip)
            ? e()
            : new Ke((e, t) => {
                if (this._state.openComplete) return t(new ee.DatabaseClosed(this._state.dbOpenError));
                if (!this._state.isBeingOpened) {
                  if (!this._options.autoOpen) return void t(new ee.DatabaseClosed());
                  this.open().catch(re);
                }
                this._state.dbReadyPromise.then(e, t);
              }).then(e);
        }
        use({ stack: e, create: t, level: n, name: r }) {
          r && this.unuse({ stack: e, name: r });
          const s = this._middlewares[e] || (this._middlewares[e] = []);
          return s.push({ stack: e, create: t, level: null == n ? 10 : n, name: r }), s.sort((e, t) => e.level - t.level), this;
        }
        unuse({ stack: e, name: t, create: n }) {
          return (
            e &&
              this._middlewares[e] &&
              (this._middlewares[e] = this._middlewares[e].filter((e) => (n ? e.create !== n : !!t && e.name !== t))),
            this
          );
        }
        open() {
          return (function (e) {
            const t = e._state,
              { indexedDB: n } = e._deps;
            if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(() => (t.dbOpenError ? mt(t.dbOpenError) : e));
            N && (t.openCanceller._stackHolder = W()), (t.isBeingOpened = !0), (t.dbOpenError = null), (t.openComplete = !1);
            const r = t.openCanceller;
            function i() {
              if (t.openCanceller !== r) throw new ee.DatabaseClosed("db.open() was cancelled");
            }
            let a = t.dbReadyResolve,
              o = null,
              u = !1;
            return Ke.race([
              r,
              ("undefined" == typeof navigator ? Ke.resolve() : Kn()).then(
                () =>
                  new Ke((r, a) => {
                    if ((i(), !n)) throw new ee.MissingAPI();
                    const l = e.name,
                      c = t.autoSchema ? n.open(l) : n.open(l, Math.round(10 * e.verno));
                    if (!c) throw new ee.MissingAPI();
                    (c.onerror = sn(a)),
                      (c.onblocked = ze(e._fireOnBlocked)),
                      (c.onupgradeneeded = ze((r) => {
                        if (((o = c.transaction), t.autoSchema && !e._options.allowEmptyDB)) {
                          (c.onerror = an), o.abort(), c.result.close();
                          const e = n.deleteDatabase(l);
                          e.onsuccess = e.onerror = ze(() => {
                            a(new ee.NoSuchDatabase(`Database ${l} doesnt exist`));
                          });
                        } else {
                          o.onerror = sn(a);
                          var s = r.oldVersion > Math.pow(2, 62) ? 0 : r.oldVersion;
                          (u = s < 1), (e._novip.idbdb = c.result), En(e, s / 10, o, a);
                        }
                      }, a)),
                      (c.onsuccess = ze(() => {
                        o = null;
                        const n = (e._novip.idbdb = c.result),
                          i = g(n.objectStoreNames);
                        if (i.length > 0)
                          try {
                            const r = n.transaction(1 === (a = i).length ? a[0] : a, "readonly");
                            t.autoSchema
                              ? (function ({ _novip: e }, t, n) {
                                  e.verno = t.version / 10;
                                  const r = (e._dbSchema = Tn(0, t, n));
                                  (e._storeNames = g(t.objectStoreNames, 0)), _n(e, [e._allTables], s(r), r);
                                })(e, n, r)
                              : (In(e, e._dbSchema, r),
                                (function (e, t) {
                                  const n = Sn(Tn(0, e.idbdb, t), e._dbSchema);
                                  return !(n.add.length || n.change.some((e) => e.add.length || e.change.length));
                                })(e, r) ||
                                  console.warn(
                                    "Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Some queries may fail."
                                  )),
                              wn(e, r);
                          } catch (e) {}
                        var a;
                        xt.push(e),
                          (n.onversionchange = ze((n) => {
                            (t.vcFired = !0), e.on("versionchange").fire(n);
                          })),
                          (n.onclose = ze((t) => {
                            e.on("close").fire(t);
                          })),
                          u &&
                            (function ({ indexedDB: e, IDBKeyRange: t }, n) {
                              !On(e) && n !== Tt && Cn(e, t).put({ name: n }).catch(re);
                            })(e._deps, l),
                          r();
                      }, a));
                  })
              )
            ])
              .then(
                () => (
                  i(),
                  (t.onReadyBeingFired = []),
                  Ke.resolve(Rn(() => e.on.ready.fire(e.vip))).then(function n() {
                    if (t.onReadyBeingFired.length > 0) {
                      let r = t.onReadyBeingFired.reduce(he, re);
                      return (t.onReadyBeingFired = []), Ke.resolve(Rn(() => r(e.vip))).then(n);
                    }
                  })
                )
              )
              .finally(() => {
                (t.onReadyBeingFired = null), (t.isBeingOpened = !1);
              })
              .then(() => e)
              .catch((n) => {
                t.dbOpenError = n;
                try {
                  o && o.abort();
                } catch (e) {}
                return r === t.openCanceller && e._close(), mt(n);
              })
              .finally(() => {
                (t.openComplete = !0), a();
              });
          })(this);
        }
        _close() {
          const e = this._state,
            t = xt.indexOf(this);
          if ((t >= 0 && xt.splice(t, 1), this.idbdb)) {
            try {
              this.idbdb.close();
            } catch (e) {}
            this._novip.idbdb = null;
          }
          (e.dbReadyPromise = new Ke((t) => {
            e.dbReadyResolve = t;
          })),
            (e.openCanceller = new Ke((t, n) => {
              e.cancelOpen = n;
            }));
        }
        close() {
          this._close();
          const e = this._state;
          (this._options.autoOpen = !1), (e.dbOpenError = new ee.DatabaseClosed()), e.isBeingOpened && e.cancelOpen(e.dbOpenError);
        }
        delete() {
          const e = arguments.length > 0,
            t = this._state;
          return new Ke((n, r) => {
            const s = () => {
              this.close();
              var e = this._deps.indexedDB.deleteDatabase(this.name);
              (e.onsuccess = ze(() => {
                !(function ({ indexedDB: e, IDBKeyRange: t }, n) {
                  !On(e) && n !== Tt && Cn(e, t).delete(n).catch(re);
                })(this._deps, this.name),
                  n();
              })),
                (e.onerror = sn(r)),
                (e.onblocked = this._fireOnBlocked);
            };
            if (e) throw new ee.InvalidArgument("Arguments not allowed in db.delete()");
            t.isBeingOpened ? t.dbReadyPromise.then(s) : s();
          });
        }
        backendDB() {
          return this.idbdb;
        }
        isOpen() {
          return null !== this.idbdb;
        }
        hasBeenClosed() {
          const e = this._state.dbOpenError;
          return e && "DatabaseClosed" === e.name;
        }
        hasFailed() {
          return null !== this._state.dbOpenError;
        }
        dynamicallyOpened() {
          return this._state.autoSchema;
        }
        get tables() {
          return s(this._allTables).map((e) => this._allTables[e]);
        }
        transaction() {
          const e = Dn.apply(this, arguments);
          return this._transaction.apply(this, e);
        }
        _transaction(e, t, n) {
          let r = Ae.trans;
          (r && r.db === this && -1 === e.indexOf("!")) || (r = null);
          const s = -1 !== e.indexOf("?");
          let i, a;
          e = e.replace("!", "").replace("?", "");
          try {
            if (
              ((a = t.map((e) => {
                var t = e instanceof this.Table ? e.name : e;
                if ("string" != typeof t)
                  throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
                return t;
              })),
              "r" == e || e === It)
            )
              i = It;
            else {
              if ("rw" != e && e != At) throw new ee.InvalidArgument("Invalid transaction mode: " + e);
              i = At;
            }
            if (r) {
              if (r.mode === It && i === At) {
                if (!s)
                  throw new ee.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
                r = null;
              }
              r &&
                a.forEach((e) => {
                  if (r && -1 === r.storeNames.indexOf(e)) {
                    if (!s) throw new ee.SubTransaction("Table " + e + " not included in parent transaction.");
                    r = null;
                  }
                }),
                s && r && !r.active && (r = null);
            }
          } catch (e) {
            return r
              ? r._promise(null, (t, n) => {
                  n(e);
                })
              : mt(e);
          }
          const o = Bn.bind(null, this, i, a, r, n);
          return r ? r._promise(i, o, "lock") : Ae.trans ? ct(Ae.transless, () => this._whenReady(o)) : this._whenReady(o);
        }
        table(e) {
          if (!l(this._allTables, e)) throw new ee.InvalidTable(`Table ${e} does not exist`);
          return this._allTables[e];
        }
      }
      const Jn = "undefined" != typeof Symbol && "observable" in Symbol ? Symbol.observable : "@@observable";
      class er {
        constructor(e) {
          this._subscribe = e;
        }
        subscribe(e, t, n) {
          return this._subscribe(e && "function" != typeof e ? e : { next: e, error: t, complete: n });
        }
        [Jn]() {
          return this;
        }
      }
      function tr(e, t) {
        return (
          s(t).forEach((n) => {
            Yn(e[n] || (e[n] = new Ln()), t[n]);
          }),
          e
        );
      }
      let nr;
      try {
        nr = {
          indexedDB: r.indexedDB || r.mozIndexedDB || r.webkitIndexedDB || r.msIndexedDB,
          IDBKeyRange: r.IDBKeyRange || r.webkitIDBKeyRange
        };
      } catch (r) {
        nr = { indexedDB: null, IDBKeyRange: null };
      }
      const rr = Gn;
      function sr(e) {
        let t = ir;
        try {
          (ir = !0), ln.storagemutated.fire(e);
        } finally {
          ir = t;
        }
      }
      c(rr, {
        ...ne,
        delete: (e) => new rr(e, { addons: [] }).delete(),
        exists: (e) =>
          new rr(e, { addons: [] })
            .open()
            .then((e) => (e.close(), !0))
            .catch("NoSuchDatabaseError", () => !1),
        getDatabaseNames(e) {
          try {
            return (function ({ indexedDB: e, IDBKeyRange: t }) {
              return On(e)
                ? Promise.resolve(e.databases()).then((e) => e.map((e) => e.name).filter((e) => e !== Tt))
                : Cn(e, t).toCollection().primaryKeys();
            })(rr.dependencies).then(e);
          } catch (e) {
            return mt(new ee.MissingAPI());
          }
        },
        defineClass: () =>
          function (e) {
            a(this, e);
          },
        ignoreTransaction: (e) => (Ae.trans ? ct(Ae.transless, e) : e()),
        vip: Rn,
        async: function (e) {
          return function () {
            try {
              var t = jn(e.apply(this, arguments));
              return t && "function" == typeof t.then ? t : Ke.resolve(t);
            } catch (e) {
              return mt(e);
            }
          };
        },
        spawn: function (e, t, n) {
          try {
            var r = jn(e.apply(n, t || []));
            return r && "function" == typeof r.then ? r : Ke.resolve(r);
          } catch (e) {
            return mt(e);
          }
        },
        currentTransaction: { get: () => Ae.trans || null },
        waitFor: function (e, t) {
          const n = Ke.resolve("function" == typeof e ? rr.ignoreTransaction(e) : e).timeout(t || 6e4);
          return Ae.trans ? Ae.trans.waitFor(n) : n;
        },
        Promise: Ke,
        debug: {
          get: () => N,
          set: (e) => {
            F(e, "dexie" === e ? () => !0 : Pt);
          }
        },
        derive: f,
        extend: a,
        props: c,
        override: v,
        Events: jt,
        on: ln,
        liveQuery: function (e) {
          let t,
            n = !1;
          const r = new er((r) => {
            const i = M(e);
            let a = !1,
              o = {},
              u = {};
            const l = {
              get closed() {
                return a;
              },
              unsubscribe: () => {
                (a = !0), ln.storagemutated.unsubscribe(f);
              }
            };
            r.start && r.start(l);
            let c = !1,
              h = !1;
            function d() {
              return s(u).some(
                (e) =>
                  o[e] &&
                  (function (e, t) {
                    const n = Zn(t);
                    let r = n.next();
                    if (r.done) return !1;
                    let s = r.value;
                    const i = Zn(e);
                    let a = i.next(s.from),
                      o = a.value;
                    for (; !r.done && !a.done; ) {
                      if (Vt(o.from, s.to) <= 0 && Vt(o.to, s.from) >= 0) return !0;
                      Vt(s.from, o.from) < 0 ? (s = (r = n.next(o.from)).value) : (o = (a = i.next(s.from)).value);
                    }
                    return !1;
                  })(o[e], u[e])
              );
            }
            const f = (e) => {
                tr(o, e), d() && p();
              },
              p = () => {
                if (c || a) return;
                o = {};
                const s = {},
                  y = (function (t) {
                    i && rt();
                    const n = () => nt(e, { subscr: t, trans: null }),
                      r = Ae.trans ? ct(Ae.transless, n) : n();
                    return i && r.then(st, st), r;
                  })(s);
                h || (ln(on, f), (h = !0)),
                  (c = !0),
                  Promise.resolve(y).then(
                    (e) => {
                      (n = !0), (t = e), (c = !1), a || (d() ? p() : ((o = {}), (u = s), r.next && r.next(e)));
                    },
                    (e) => {
                      (c = !1), (n = !1), r.error && r.error(e), l.unsubscribe();
                    }
                  );
              };
            return p(), l;
          });
          return (r.hasValue = () => n), (r.getValue = () => t), r;
        },
        extendObservabilitySet: tr,
        getByKeyPath: k,
        setByKeyPath: x,
        delByKeyPath: function (e, t) {
          "string" == typeof t
            ? x(e, t, void 0)
            : "length" in t &&
              [].map.call(t, function (t) {
                x(e, t, void 0);
              });
        },
        shallowClone: E,
        deepClone: A,
        getObjectDiff: Fn,
        cmp: Vt,
        asap: w,
        minKey: wt,
        addons: [],
        connections: xt,
        errnames: G,
        dependencies: nr,
        semVer: vt,
        version: vt
          .split(".")
          .map((e) => parseInt(e))
          .reduce((e, t, n) => e + t / Math.pow(10, 2 * n))
      }),
        (rr.maxKey = pn(rr.dependencies.IDBKeyRange)),
        "undefined" != typeof dispatchEvent &&
          "undefined" != typeof addEventListener &&
          (ln(on, (e) => {
            if (!ir) {
              let t;
              Et ? ((t = document.createEvent("CustomEvent")), t.initCustomEvent(un, !0, !0, e)) : (t = new CustomEvent(un, { detail: e })),
                (ir = !0),
                dispatchEvent(t),
                (ir = !1);
            }
          }),
          addEventListener(un, ({ detail: e }) => {
            ir || sr(e);
          }));
      let ir = !1;
      if ("undefined" != typeof BroadcastChannel) {
        const e = new BroadcastChannel(un);
        "function" == typeof e.unref && e.unref(),
          ln(on, (t) => {
            ir || e.postMessage(t);
          }),
          (e.onmessage = (e) => {
            e.data && sr(e.data);
          });
      } else if ("undefined" != typeof self && "undefined" != typeof navigator) {
        ln(on, (e) => {
          try {
            ir ||
              ("undefined" != typeof localStorage && localStorage.setItem(un, JSON.stringify({ trig: Math.random(), changedParts: e })),
              "object" == typeof self.clients &&
                [...self.clients.matchAll({ includeUncontrolled: !0 })].forEach((t) => t.postMessage({ type: un, changedParts: e })));
          } catch (e) {}
        }),
          "undefined" != typeof addEventListener &&
            addEventListener("storage", (e) => {
              if (e.key === un) {
                const t = JSON.parse(e.newValue);
                t && sr(t.changedParts);
              }
            });
        const e = self.document && navigator.serviceWorker;
        e &&
          e.addEventListener("message", function ({ data: e }) {
            e && e.type === un && sr(e.changedParts);
          });
      }
      (Ke.rejectionMapper = function (e, t) {
        if (!e || e instanceof Z || e instanceof TypeError || e instanceof SyntaxError || !e.name || !te[e.name]) return e;
        var n = new te[e.name](t || e.message, e);
        return (
          "stack" in e &&
            d(n, "stack", {
              get: function () {
                return this.inner.stack;
              }
            }),
          n
        );
      }),
        F(N, Pt);
      const ar = {},
        or = { data: "id" },
        ur = new (class {
          constructor() {
            this.dbs = new Proxy(ar, {
              get: (e, t) => ((e[(t = "syncedDb:" + t)] && e[t].isOpen()) || ((e[t] = new Gn(t)), e[t].version(1).stores(or)), e[t].data)
            });
          }
          async refresh(e, t) {
            await this.dbs[e].clear(), await this.dbs[e].bulkAdd(t);
          }
          async get(e) {
            return await this.dbs[e].toArray();
          }
          create(e, t, n) {
            return this.dbs[e].add({ id: t, ...n }, t);
          }
          update(e, t, n) {
            return this.dbs[e].update(t, n);
          }
          delete(e, t) {
            return this.dbs[e].delete(t);
          }
        })(),
        lr = new (class {
          get ids() {
            return (
              (this.db && this.db.isOpen()) || ((this.db = new Gn("idMap")), this.db.version(1).stores({ ids: "sid,&cid" })), this.db.ids
            );
          }
          async getCid(e) {
            const t = await this.ids.get(e);
            if (t) return t.cid;
            throw new Error("No matching cid found");
          }
          async getSid(e) {
            const t = await this.ids.get({ cid: e });
            if (t) return t.sid;
            throw new Error("No matching sid found");
          }
          set({ cid: e, sid: t }) {
            return this.ids.add({ cid: e, sid: t });
          }
          convertDataArrayToServerIds(e) {
            return this._convertDataArrayIds("cid", e);
          }
          convertDataArrayToClientIds(e) {
            return this._convertDataArrayIds("sid", e);
          }
          convertDataToServerIds(e) {
            return this._convertDataIds("cid", e);
          }
          convertDataToClientIds(e) {
            return this._convertDataIds("sid", e);
          }
          async _convertDataArrayIds(e, t) {
            const n = [];
            for (const r of t) n.push(await this._convertDataIds(e, r));
            return n;
          }
          async _convertDataIds(e, t) {
            const n = {},
              r = "cid" === e ? "sid" : "cid",
              s = async (t) => {
                "string" != typeof t &&
                  (() => {
                    throw new Error(`idMap attempted conversion to ${r} but property was not string`);
                  })();
                const n = await this.ids.where({ [e]: t }).first();
                return n || (await this.set({ cid: t, sid: t })), (null == n ? void 0 : n[r]) || t;
              };
            return (
              await Promise.all(
                Object.entries(t).map(async ([e, t]) => {
                  this._propertyRequiresIdConversion(e, t)
                    ? Array.isArray(t)
                      ? (n[e] = await Promise.all(t.map(s)))
                      : "string" == typeof t && (n[e] = await s(t))
                    : (n[e] = t);
                })
              ),
              n
            );
          }
          _propertyRequiresIdConversion(e, t) {
            return "number" != typeof t && (["id", "ids"].includes(e) || e.endsWith("Id") || e.endsWith("Ids"));
          }
        })();
      function cr(e) {
        const t = parseInt(e);
        return (t >= 10 ? t : "0" + t.toString()).toString();
      }
      function hr() {
        const e = [];
        for (let t = 0; t < 256; t++) e[t] = (t < 16 ? "0" : "") + t.toString(16);
        const t = crypto.getRandomValues(new Uint8Array(16));
        return (
          (t[6] = (15 & t[6]) | 64),
          (t[8] = (63 & t[8]) | 128),
          e[t[0]] +
            e[t[1]] +
            e[t[2]] +
            e[t[3]] +
            "-" +
            e[t[4]] +
            e[t[5]] +
            "-" +
            e[t[6]] +
            e[t[7]] +
            "-" +
            e[t[8]] +
            e[t[9]] +
            "-" +
            e[t[10]] +
            e[t[11]] +
            e[t[12]] +
            e[t[13]] +
            e[t[14]] +
            e[t[15]]
        );
      }
      function dr(e) {
        try {
          const t = e.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"),
            n = decodeURIComponent(
              atob(t)
                .split("")
                .map(function (e) {
                  return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);
                })
                .join("")
            );
          return JSON.parse(n);
        } catch (e) {
          return null;
        }
      }
      var fr;
      !(function (e) {
        (e.Sync = "sync"), (e.Cache = "cache"), (e.Server = "server"), (e.Timestamp = "timestamp");
      })(fr || (fr = {}));
      const pr = fr,
        yr = new (class {
          async get(e, { path: t, env: n, mode: r = pr.Sync } = {}, s) {
            const i = (i) =>
              self.requestQueue.enqueueRequest({ method: "get", type: e, path: t, env: n, requestId: i, sourceTabId: s, mode: r });
            return r === pr.Server ? i(hr()) : (r !== pr.Cache && (await i()), ur.get(e));
          }
          async migrate(e, { path: t, env: n } = {}) {
            let r = await ur.get(e);
            r.length &&
              (await self.requestQueue.enqueueRequests(r.map((r) => ({ data: r, id: r.id, method: "create", type: e, path: t, env: n }))));
          }
          async create(e, t, n, { path: r, env: s, mode: i = pr.Sync } = {}, a) {
            i !== pr.Cache && (await self.requestQueue.enqueueRequest({ method: "create", path: r, type: e, id: t, data: n, env: s })),
              await ur.create(e, t, n),
              this.refreshAllTabs(e, await ur.get(e), a);
          }
          async update(e, t, n, { path: r, env: s, mode: i = pr.Sync, queryString: a } = {}, o) {
            i !== pr.Cache &&
              (await self.requestQueue.enqueueRequest({ method: "update", path: r, type: e, id: t, data: n, env: s, queryString: a })),
              await ur.update(e, t, n),
              this.refreshAllTabs(e, await ur.get(e), o);
          }
          async delete(e, t, { path: n, env: r, mode: s = pr.Sync } = {}, i) {
            s !== pr.Cache && (await self.requestQueue.enqueueRequest({ method: "delete", path: n, type: e, id: t, env: r })),
              await ur.delete(e, t),
              this.refreshAllTabs(e, await ur.get(e), i);
          }
          refreshAllTabs(e, t, n) {
            self.bus.sendToAllTabs({ msgId: e + ":refreshed", response: t }, n);
          }
          flashMessage(e, t) {
            self.bus.sendToAllTabs({ msgId: "flashMessage", response: { message: e, error: t, id: hr() } });
          }
          getSid(e) {
            return lr.getSid(e);
          }
          getVersion() {
            return 3;
          }
          activateNewWorker() {
            self.skipWaiting();
          }
        })();
      var mr = n(31);
      class gr extends Error {
        constructor(e) {
          super(e), (this.name = "DiscardError");
        }
      }
      const vr = new (n(602).ZP)("timestamp", 1),
        br = new e.default("serviceWorker.createFailed", 1);
      n(545);
      var wr,
        _r = n(973);
      new (class {
        constructor() {
          (this.initialTimeout = 100),
            (this.currentTimeout = 0),
            (this.maxTimeout = 6e4),
            (this.timeoutId = null),
            (this.processing = !1),
            self.addEventListener("fetch", (e) => {
              e.request.url.includes("posthog.momentumdash.com/e/") &&
                e.respondWith(this._enqueueRequest(e.request).then(this._getResponse));
            });
        }
        get queue() {
          return (
            (this.db && this.db.isOpen()) || ((this.db = new Gn("analyticsQueue")), this.db.version(1).stores({ queue: "_key++" })),
            this.db.queue
          );
        }
        _shouldProcessQueue() {
          return (0, _r.Z)("posthog.samplingRate")
            .then((e) => Math.random() < e || 0)
            .catch(() => 0);
        }
        _getResponse() {
          return new Response(JSON.stringify({ status: 1 }), { status: 200, headers: { "content-type": "application/json" } });
        }
        async _enqueueRequest(e) {
          const { url: t, method: n } = e,
            r = {},
            s = ((i = await e.arrayBuffer()), btoa(String.fromCharCode(...new Uint8Array(i))));
          var i;
          for (const [t, n] of e.headers.entries()) r[t] = n;
          await this.queue.add({ url: t, method: n, headers: r, data: s }),
            this.processing || this.timeoutId || !(await this._shouldProcessQueue()) || this._processNextRequest();
        }
        async _processNextRequest() {
          this.processing = !0;
          const e = await this.queue.toCollection().first();
          if (e) {
            var n;
            let s;
            try {
              (e.data = ((r = e.data), new Uint8Array(Array.from(atob(r)).map((e) => e.charCodeAt())).buffer)),
                (e.log = !1),
                (s = await (0, mr.Z)(e));
            } catch (e) {
              console.error(e), t.error("Error submitting PostHog event", e);
            }
            this._shouldDiscard(null === (n = s) || void 0 === n ? void 0 : n.status)
              ? (this._resetTimeout(), await this.queue.delete(e._key))
              : (this.currentTimeout = Math.min(this.currentTimeout ? 2 * this.currentTimeout : this.initialTimeout, this.maxTimeout));
          }
          var r;
          (this.processing = !1),
            this.currentTimeout && !this.processing
              ? (this.timeoutId = setTimeout(this._processNextRequest.bind(this), this.currentTimeout))
              : (await this.queue.count()) && !this.processing && this._processNextRequest();
        }
        _resetTimeout() {
          clearTimeout(this.timeoutId), (this.timeoutId = null), (this.currentTimeout = 0);
        }
        _shouldDiscard(e) {
          return this._isSuccessful(e) || !this._shouldRetryIndefinitely(e);
        }
        _shouldRetryIndefinitely(e) {
          return !e || [502, 503, 504].includes(e);
        }
        _isSuccessful(e) {
          return e >= 200 && e < 300;
        }
      })(),
        (self.isServiceWorker = !0),
        (self.context = "service worker"),
        self.addEventListener("error", (e) => {
          let n;
          e.name === Gn.errnames.OpenFailed && (n = { error: JSON.stringify(e), inner: e.inner, message: e.message, stack: e.stack }),
            t.error(n || e);
        }),
        (self.requestQueue = new (class {
          constructor() {
            (this.pendingRequests = {}),
              (this.processing = {}),
              (this.timeouts = {}),
              (this.timeoutIds = {}),
              (this.activated = !1),
              (this.afterCurrentRequest = null);
          }
          get _queue() {
            return (
              (this.db && this.db.isOpen()) ||
                ((this.db = new Gn("xhrQueue")), this.db.version(1).stores({ queue: "_key++,id,method,type" })),
              this.db.queue
            );
          }
          get _requestsAreProcessing() {
            return Object.values(this.processing).some((e) => e);
          }
          activate() {
            navigator.connection && (navigator.connection.onchange = this._onConnectionChange.bind(this)),
              (this.activated = !0),
              this._processAllEnqueuedTypes();
          }
          async enqueueRequest({ method: e, type: t, path: n, id: r, data: s, env: i, requestId: a, queryString: o }) {
            if (!e) throw new Error('Enqueued requests must contain a "method" property.');
            if (!t) throw new Error('Enqueued requests must contain a "type" property.');
            if (!i) throw new Error('Enqueued requests must contain a "env" property.');
            if (["update", "delete"].includes(e) && !r)
              throw new Error('Enqueued update & delete requests with must contain a "id" property.');
            if (
              (await this._queue.put({ method: e, type: t, path: n, id: r, data: s, env: i, requestId: a, queryString: o }),
              !this.timeoutIds[t] && this.activated && this._processNextRequest(t),
              a)
            )
              return new Promise((e, t) => (this.pendingRequests[a] = { resolve: e, reject: t }));
          }
          async enqueueRequests(e) {
            let t = [];
            e.forEach((e) => {
              if (!e.method) throw new Error('Enqueued requests must contain a "method" property.');
              if (!e.type) throw new Error('Enqueued requests must contain a "type" property.');
              if (!e.env) throw new Error('Enqueued requests must contain a "env" property.');
              t.includes(e.type) || t.push(e.type);
            }),
              await this._queue.bulkPut(e),
              this.activated &&
                t.forEach((e) => {
                  this.timeoutIds[e] || this._processNextRequest(e);
                });
          }
          terminateAfterActiveRequests() {
            return this._requestsAreProcessing
              ? new Promise((e) => {
                  this.afterCurrentRequest = () => {
                    this._requestsAreProcessing || e();
                  };
                })
              : (this._resetTimeout(), Promise.resolve());
          }
          async _processNextRequest(e) {
            if (!e) throw new Error('_processNextRequest must be called with a resource "type"');
            if (this.processing[e]) return;
            (this.processing[e] = !0), (this.timeoutIds[e] = null);
            let t = await this._getValidQueueEntriesOfType(e).first();
            if (t) {
              const { _key: a, method: o, attempts: u, requestId: l, ...c } = t;
              let h,
                d,
                f = !1,
                p = !1;
              try {
                var n;
                (h = await this["_" + o]({ requestId: l, ...c })), (d = null === (n = h) || void 0 === n ? void 0 : n.status);
              } catch (n) {
                if (n instanceof gr) p = !0;
                else {
                  var r;
                  const a = { message: "Error processing request", e: n, queueEntry: t };
                  if (
                    ("onboardingSteps" === e &&
                      null !== (r = c.data) &&
                      void 0 !== r &&
                      r.name &&
                      (a.additionalData = { stepName: c.data.name }),
                    this._logError(a),
                    "No matching sid found" === n.message)
                  )
                    try {
                      await this._recoverMissingSid(t), (f = !0);
                    } catch (e) {
                      this._logError({ message: "Request recovery failed", e, queueEntry: t });
                    }
                  var s, i;
                  l &&
                    (f
                      ? null === (s = this.pendingRequests[l]) || void 0 === s || s.resolve()
                      : null === (i = this.pendingRequests[l]) || void 0 === i || i.reject(n));
                }
              }
              401 === d && "create" === o && this._logError({ message: "Create failed due to 401", queueEntry: t, logger: br }),
                this._isSuccessful(d) || f || p
                  ? (this._resetTimeout(e), await this._queue.delete(a))
                  : this._shouldDiscard(d)
                  ? (this._resetTimeout(e), await this._cleanUpFailedRequest(t), this._alertFailedRequest(t, h))
                  : this._shouldRetry(d) &&
                    (429 === d && h.headers.get("retry-after")
                      ? (this.timeouts[e] = 1e3 * parseInt(h.headers.get("retry-after")))
                      : (this.timeouts[e] = this.timeouts[e] ? 2 * this.timeouts[e] : 100),
                    (this.timeouts[e] = Math.min(this.timeouts[e], 6e4)),
                    !this._shouldRetryIndefinitely(d) && u >= 5
                      ? (this._resetTimeout(e), await this._cleanUpFailedRequest(t), this._alertFailedRequest(t, h))
                      : await this._queue.update(a, { attempts: (u || 0) + 1 }));
            }
            (this.processing[e] = !1),
              this.afterCurrentRequest
                ? this.afterCurrentRequest()
                : this.timeouts[e]
                ? (this.timeoutIds[e] = setTimeout(() => this._processNextRequest(e), this.timeouts[e]))
                : (await this._getValidQueueEntriesOfType(e).count()) && this._processNextRequest(e);
          }
          _processAllEnqueuedTypes() {
            return this._getAllTypesInQueue().then((e) => e.forEach((e) => this._processNextRequest(e)));
          }
          _shouldDiscard(e) {
            return this._isSuccessful(e) || !this._shouldRetry(e);
          }
          _shouldRetry(e) {
            return this._shouldRetryIndefinitely(e) || 401 === e;
          }
          _shouldRetryIndefinitely(e) {
            return !e || [429, 502, 503, 504].includes(e);
          }
          _isSuccessful(e) {
            return e >= 200 && e < 300;
          }
          async _get({ type: e, path: t, env: n, requestId: r }) {
            const s = await this._request({ url: t || e, env: n });
            if (await this._queueContainsMutationsOfType(e))
              throw (r && (await this.enqueueRequest({ method: "get", type: e, path: t, env: n, requestId: r })), new gr());
            if (this._isSuccessful(null == s ? void 0 : s.status)) {
              var i;
              const t = null == s || null === (i = s.headers) || void 0 === i ? void 0 : i.get("Date");
              t && (await this._saveTimestamp(e, new Date(t).getTime()));
            }
            if (s.data) {
              var a;
              const t = await lr.convertDataArrayToClientIds(s.data);
              await ur.refresh(e, t),
                yr.refreshAllTabs(e, t),
                r && (null === (a = this.pendingRequests[r]) || void 0 === a || a.resolve(t));
            }
            return s;
          }
          async _create({ type: e, path: t, id: n, data: r, env: s }) {
            var i;
            delete r.id;
            const a = await this._request({ method: "POST", url: t || e, data: await lr.convertDataToServerIds(r), env: s });
            return null != a && null !== (i = a.data) && void 0 !== i && i.id && (await lr.set({ cid: n, sid: a.data.id })), a;
          }
          async _update({ type: e, path: t, id: n, data: r, env: s, queryString: i = "" }) {
            return this._request({
              method: "PATCH",
              url: `${t || e}/${await lr.getSid(n)}${i}`,
              data: await lr.convertDataToServerIds(r),
              env: s
            });
          }
          async _delete({ type: e, path: t, id: n, env: r }) {
            return this._request({ method: "DELETE", url: `${t || e}/${await lr.getSid(n)}`, env: r });
          }
          _request({ method: e = "GET", url: t, data: n, env: r }) {
            return (0, mr.Z)({ url: r.apiUrl + t, method: e, data: n, headers: this._getHeaders(r) });
          }
          async _saveTimestamp(e, t) {
            e && t && (await vr.set(e, { cache: t, server: t }));
          }
          async _cleanUpFailedRequest(e) {
            const { _key: t, type: n, id: r, method: s } = e;
            await this._queue.delete(t), "create" === s && (await ur.delete(n, r)), yr.refreshAllTabs(n, await ur.get(n));
          }
          _alertFailedRequest(e, t) {
            var n;
            const { type: r, method: s, requestId: i, attempts: a } = e;
            this._logError({ message: "Request failed", queueEntry: e, additionalData: { statusCode: t.status, attempts: a } }),
              yr.flashMessage(this._getFriendlyErrorMessage(r, s), !0),
              i && (null === (n = this.pendingRequests[i]) || void 0 === n || n.reject(t));
          }
          _getHeaders({ version: e, token: t, clientUuid: n, tabId: r }) {
            const s = {
              "X-Momentum-Version": e,
              "X-Momentum-ClientDate":
                (void 0 === i ? (i = new Date()) : i instanceof Date || (i = new Date(i)),
                i.getFullYear().toString() +
                  "-" +
                  cr(i.getMonth() + 1) +
                  "-" +
                  cr(i.getDate()) +
                  "T" +
                  cr(i.getHours()) +
                  ":" +
                  cr(i.getMinutes()) +
                  ":" +
                  cr(i.getSeconds()))
            };
            var i;
            return t && (s.Authorization = "Bearer " + t), n && (s["X-Momentum-ClientId"] = n), r && (s["X-Momentum-TabId"] = r), s;
          }
          _logError({ message: e, e: n, queueEntry: r, additionalData: s, logger: i = t }) {
            const a = r.env.token;
            let o = {};
            var u;
            n && Object.assign(o, { stack: n.stack, message: n.message }),
              r &&
                Object.assign(o, {
                  type: String(r.type),
                  method: String(r.method),
                  cid: String(r.id),
                  clientUuid: String(r.env.clientUuid),
                  userUuid: a ? (null === (u = dr(a)) || void 0 === u ? void 0 : u.user_guid) || "Parse failed" : "No token",
                  tabId: String(r.env.tabId)
                }),
              s && Object.assign(o, s),
              i.error(e, o),
              console.error.apply(
                null,
                [e, n, o].filter((e) => e || ("object" == typeof e && !Object.keys(e).length))
              );
          }
          _getFriendlyErrorMessage(e, t) {
            const {
              verb: n,
              plural: r,
              determiner: s
            } = {
              get: { verb: "getting", plural: !0, determiner: "your" },
              create: { verb: "creating" },
              update: { verb: "updating" },
              delete: { verb: "deleting" }
            }[t];
            var i;
            return `Sorry, there was an error ${n} ${s || "that"} ${(e = (function (e) {
              return null == (t = e = e.replace(/([A-Z])/gm, (e) => " " + e.toLowerCase()))
                ? null
                : t.slice(0, 1).toUpperCase() + t.slice(1);
              var t;
            })(r ? e : ((i = e), i.endsWith("s") ? i.substring(0, i.length - 1) : i)).toLowerCase())}.`;
          }
          async _recoverMissingSid({ type: e, path: t, id: n, env: r } = {}) {
            const s = await ur.dbs[e].get(n);
            if (!s)
              return (
                await this._deleteAllInQueue({ id: n }),
                void this._logError({ message: "Sid recovery failed: Item not found", queueEntry: arguments[0] })
              );
            delete s.id;
            const i = await this._create({ type: e, path: t, id: n, data: s, env: r });
            if (!i || !this._isSuccessful(i.status))
              return (
                this._logError({
                  message: "Sid recovery failed: Create request failed",
                  queueEntry: arguments[0],
                  additionalData: { statusCode: i.status }
                }),
                await ur.delete(e, n),
                yr.refreshAllTabs(e, await ur.get(e)),
                void (await this._deleteAllInQueue({ id: n }))
              );
            await this._deleteAllInQueue({ id: n, method: "update" });
          }
          async _deleteAllInQueue(e = {}) {
            const t = await this._queue.where(e).primaryKeys();
            await this._queue.bulkDelete(t);
          }
          _resetTimeout(e) {
            clearTimeout(this.timeoutIds[e]), (this.timeoutIds[e] = null), (this.timeouts[e] = 0);
          }
          _getValidQueueEntriesOfType(e) {
            return this._queue.where({ type: e }).filter(this._isValidEntry);
          }
          _getAllTypesInQueue() {
            return this._queue.orderBy("type").filter(this._isValidEntry).uniqueKeys();
          }
          async _queueContainsMutationsOfType(e) {
            return !!(await this._queue
              .where({ type: e })
              .filter((e) => ["create", "update", "delete"].includes(e.method))
              .count());
          }
          _isValidEntry(e) {
            return ["get", "create", "update", "delete"].includes(e.method);
          }
          _onConnectionChange() {
            navigator.onLine && !this._requestsAreProcessing && (this._resetTimeout(), this._processAllEnqueuedTypes());
          }
        })()),
        "activated" === (null === (wr = self.serviceWorker) || void 0 === wr ? void 0 : wr.state) && self.requestQueue.activate(),
        (self.bus = new (class {
          constructor(e) {
            (this.sync = e),
              self.addEventListener("message", (e) => {
                var t;
                let n = e.source instanceof ServiceWorker ? null : e.source.postMessage.bind(e.source);
                e.waitUntil(this._onMessage(e.data, n, null === (t = e.source) || void 0 === t ? void 0 : t.id));
              });
          }
          async sendToAllTabs(e, t) {
            await self.clients.claim(),
              (await self.clients.matchAll()).forEach((n) => {
                (t && n.id === t) || n.postMessage(e);
              });
          }
          _handleResponseTimeout({ msgId: e, handler: t }, n) {
            return setTimeout(() => {
              this._handleError(
                e,
                n,
                `Message to ${self.context} timed out. Reason: message received but handler did not resolve. Handler: ${t}`
              );
            }, 1e4);
          }
          async _handleError(e, r, s, { handler: i } = {}) {
            console.warn(s);
            const a = {};
            if (
              (Object.assign(a, s, { stack: s.stack, message: s.message }, i ? { handler: i } : {}),
              "DatabaseClosedError" === s.name && navigator.storage.estimate)
            ) {
              const e = await navigator.storage.estimate();
              a.storageEstimate = e;
              const t = await caches.keys();
              await Promise.allSettled(t.map((e) => caches.delete(e)));
              const r = await navigator.storage.estimate();
              new (0, (await Promise.resolve().then(n.bind(n, 468))).default)("serviceWorker.databaseClosedErrorCacheClear", 1).info({
                cacheClearInfo: { beforeClear: e, afterClear: r, cacheNames: t }
              });
            }
            t.warn(a), null == r || r({ msgId: e, error: s });
          }
          async _onMessage(e, t, n) {
            const { msgId: r, handler: s, args: i } = e;
            if ((i && i.push(n), "function" == typeof this.sync[s])) {
              const n = this._handleResponseTimeout(e, t);
              return Promise.resolve(this.sync[s].apply(this.sync, i)).then(
                (e) => {
                  clearTimeout(n), null == t || t({ msgId: r, response: e });
                },
                (e) => {
                  clearTimeout(n), this._handleError(r, t, e, { handler: s });
                }
              );
            }
            return (
              await this._handleError(r, t, `Message to ${self.context} rejected: No method was found on sync.js with the name: ${s}`),
              Promise.resolve()
            );
          }
        })(yr)),
        self.addEventListener("install", function () {
          self.registration.active && self.registration.active.scriptURL.endsWith("serviceWorker.js")
            ? (self.timeout = setTimeout(() => {
                self.skipWaiting();
              }, 5e3))
            : self.skipWaiting();
        }),
        self.addEventListener("activate", function (e) {
          self.timeout && clearTimeout(self.timeout), e.waitUntil(self.clients.claim()), self.requestQueue.activate();
        }),
        self.registration.addEventListener("updatefound", () => {
          var e;
          if ("installing" === (null === (e = self.serviceWorker) || void 0 === e ? void 0 : e.state)) return;
          const t = self.registration.installing;
          self.requestQueue.terminateAfterActiveRequests().then(() => {
            t.postMessage({ msgId: "activateNewWorker", handler: "activateNewWorker" });
          });
        });
    })();
})();
