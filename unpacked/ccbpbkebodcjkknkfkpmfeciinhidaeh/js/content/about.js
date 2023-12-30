/*!
 * © 2016 Avira Operations GmbH & Co. KG. All rights reserved.
 * No part of this extension may be reproduced, stored or transmitted in any
 * form, for any reason or by any means, without the prior permission in writing
 * from the copyright owner. The text, layout, and designs presented are
 * protected by the copyright laws of the United States and international
 * treaties.
 */
!(function e(t, r, n) {
  function o(u, a) {
    if (!r[u]) {
      if (!t[u]) {
        var s = "function" == typeof require && require;
        if (!a && s) return s(u, !0);
        if (i) return i(u, !0);
        var c = new Error("Cannot find module '" + u + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      var l = (r[u] = { exports: {} });
      t[u][0].call(
        l.exports,
        function (e) {
          return o(t[u][1][e] || e);
        },
        l,
        l.exports,
        e,
        t,
        r,
        n
      );
    }
    return r[u].exports;
  }
  for (var i = "function" == typeof require && require, u = 0; u < n.length; u++) o(n[u]);
  return o;
})(
  {
    1: [
      function (e, t, r) {
        "use strict";
        e("core-js/modules/es6.array.iterator.js"), e("core-js/modules/web.dom.iterable.js");
        t.exports = class {
          constructor() {
            (this._initialized = !1),
              (this._initializationPromise = null),
              (this._storage = {}),
              (this._persistentStorage = chrome.storage.local),
              (this._keys = []),
              (this.length = 0);
          }
          static getInstance() {
            return this.instance || (this.instance = new this()), this.instance;
          }
          initialize() {
            return (
              this._initializationPromise ||
                (this._initializationPromise = new Promise((e) =>
                  this._persistentStorage.get(
                    null,
                    (t) => ((this._storage = t), (this._keys = Object.keys(t)), this._updateLength(), (this._initialized = !0), e())
                  )
                )),
              this._initializationPromise
            );
          }
          getItem(e) {
            this._checkInitialization();
            let t = this._storage[e];
            return void 0 === t && (t = null), t;
          }
          setItem(e, t) {
            if ((this._checkInitialization(), "string" != typeof e)) throw new TypeError(`item must be a string ${JSON.stringify(e)}`);
            const r = `${t}`;
            this._storage[e] !== r &&
              (Array.from(this._keys).includes(e) || (this._keys.push(e), this._updateLength()),
              (this._storage[e] = r),
              this._persistentStorage.set({ [e]: r }));
          }
          removeItem(e) {
            this._checkInitialization(),
              this._storage[e] &&
                (delete this._storage[e],
                this._persistentStorage.remove(e),
                this._keys.splice(this._keys.indexOf(e), 1),
                this._updateLength());
          }
          key(e) {
            return this._checkInitialization(), this._keys[e];
          }
          _updateLength() {
            this.length = this._keys.length;
          }
          _checkInitialization() {
            if (!this._initialized) throw new Error("LocalStorage accessed before initialization was completed");
          }
        };
      },
      { "core-js/modules/es6.array.iterator.js": 57, "core-js/modules/web.dom.iterable.js": 58 }
    ],
    2: [
      function (e, t, r) {
        t.exports = {
          barTransitionDelay: 200,
          default_language: "en-US",
          languages: ["en-US", "de-DE", "es-ES", "fr-FR", "it-IT", "ja-JP", "nl-NL", "pt-BR", "ru-RU", "tr-TR", "zh-CN", "zh-TW"],
          language_fallbacks: { de: "de-DE", es: "es-ES", fr: "fr-FR", it: "it-IT", ru: "ru-RU", pt: "pt-BR" },
          auc: {
            server: "https://v2.auc.avira.com/api",
            api_key: "2216cc6964aa79fa09205dd4b08fb808",
            product: "avira-browser-safety",
            product_version: "0.0.0",
            lang: "en-US",
            locale: "en-US",
            sync: !0
          },
          avira_dnt: { update_url: "https://download.avira.com/update/donottrack/rules.json", update_cycle: 86400 },
          aims: { productid: 199 },
          ao: {
            api_url: "https://offers.avira.com/aviraoffers/api/v2",
            api_client: "ass",
            api_key: "HXBzevxRAqvWRppPXnGRYKRZEUcrCHGT",
            coupons_domain: "offers.avira.com",
            dnt_disable_timeout: 72e5
          },
          adguard: {
            filtersMetadataUrl: "https://download.avira.com/update/adguard/filters.json",
            filterRulesUrl: "https://download.avira.com/update/adguard/filters/{filter_id}.txt",
            offers_whitelist: "https://download.avira.com/update/donottrack/offers_wl.json",
            rules: []
          },
          mixpanel: { token: "c34a8016e04ab4b4b232b1e71cc12d66", active_cycle: 21600 },
          sentry_dsn: "https://de51468527964eda8ca3e52ac844db69@sentry.avira.net/20",
          update_bridge: { api_url: "https://dispatch.avira-update.com/", product_id: 199 },
          beta: { gc_id: "biegckbcmgljgabmpjcpmkbheikknfch" },
          nightly: { gc_id: "enhedicmkidpahjffkbmhgiacbodpcbo" },
          chrome: { id: "flliilndjeohchalpbbcdekjklbdgfkk" },
          nophish: { whitelist_url: "https://download.avira.com/update/nophishwhitelist/common/int/NophishWhitelist.json" },
          avira: { base_url: "https://www.avira.com/" },
          supportedSettings: {
            dark_mode: !0,
            offers: !0,
            dnt_header: !0,
            inAppTracking: !1,
            adguard: !0,
            adguard_social_media: !0,
            adguard_useful_ads: !0,
            extension_scan: !0
          },
          extensionOnboarding: {
            extensions: {
              abs: ["flliilndjeohchalpbbcdekjklbdgfkk", "abs@avira.com"],
              pwm: [
                "caljgklbbfbcjjanaijlacgncafpegll",
                "pedpfpedmgmbfnplmhbkodnfbfelgdbc",
                "kfbldoladabfjgedblncjojgmcplnbac",
                "passwordmanager@avira.com",
                "passwordmanager-beta@avira.com",
                "ngohaaocccbohaffogpbgfpmpgbcgccg",
                "emgfgdclgfeldebanedpihppahgngnle"
              ],
              sse: ["ccbpbkebodcjkknkfkpmfeciinhidaeh", "caiblelclndcckfafdaggpephhgfpoip", "dalelnnofafalcmkmnhdbigbjjkloabo"]
            },
            onboardingWebsite: "https://extensions.avira.com",
            rollout: 0.03
          },
          storeURLs: {
            abs_firefox: "https://addons.mozilla.org/firefox/addon/avira-browser-safety/",
            abs_chrome: "https://chrome.google.com/webstore/detail/avira-browser-safety/flliilndjeohchalpbbcdekjklbdgfkk",
            ss_chrome: "https://chrome.google.com/webstore/detail/avira-safe-shopping/ccbpbkebodcjkknkfkpmfeciinhidaeh",
            ss_edge: "https://microsoftedge.microsoft.com/addons/detail/avira-safe-shopping/caiblelclndcckfafdaggpephhgfpoip",
            ss_opera: "https://addons.opera.com/extensions/details/avira-browser-safety/",
            uninstall: { abs: "https://extensions.avira.com/abs/uninstall", sse: "https://extensions.avira.com/sse/uninstall" }
          }
        };
      },
      {}
    ],
    3: [
      function (e, t, r) {
        (t.exports = function (e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {}
    ],
    4: [
      function (e, t, r) {
        (t.exports = function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {}
    ],
    5: [
      function (e, t, r) {
        function n(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        (t.exports = function (e, t, r) {
          return t && n(e.prototype, t), r && n(e, r), e;
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {}
    ],
    6: [
      function (e, t, r) {
        function n(e) {
          return (
            (t.exports = n =
              Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
            (t.exports.default = t.exports),
            (t.exports.__esModule = !0),
            n(e)
          );
        }
        (t.exports = n), (t.exports.default = t.exports), (t.exports.__esModule = !0);
      },
      {}
    ],
    7: [
      function (e, t, r) {
        var n = e("./setPrototypeOf.js");
        (t.exports = function (e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && n(e, t);
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      { "./setPrototypeOf.js": 10 }
    ],
    8: [
      function (e, t, r) {
        (t.exports = function (e) {
          return e && e.__esModule ? e : { default: e };
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {}
    ],
    9: [
      function (e, t, r) {
        var n = e("@babel/runtime/helpers/typeof").default,
          o = e("./assertThisInitialized.js");
        (t.exports = function (e, t) {
          return !t || ("object" !== n(t) && "function" != typeof t) ? o(e) : t;
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      { "./assertThisInitialized.js": 3, "@babel/runtime/helpers/typeof": 11 }
    ],
    10: [
      function (e, t, r) {
        function n(e, r) {
          return (
            (t.exports = n =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
            (t.exports.default = t.exports),
            (t.exports.__esModule = !0),
            n(e, r)
          );
        }
        (t.exports = n), (t.exports.default = t.exports), (t.exports.__esModule = !0);
      },
      {}
    ],
    11: [
      function (e, t, r) {
        function n(e) {
          return (
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? ((t.exports = n =
                  function (e) {
                    return typeof e;
                  }),
                (t.exports.default = t.exports),
                (t.exports.__esModule = !0))
              : ((t.exports = n =
                  function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                  }),
                (t.exports.default = t.exports),
                (t.exports.__esModule = !0)),
            n(e)
          );
        }
        (t.exports = n), (t.exports.default = t.exports), (t.exports.__esModule = !0);
      },
      {}
    ],
    12: [
      function (e, t, r) {
        t.exports = function (e) {
          if ("function" != typeof e) throw TypeError(e + " is not a function!");
          return e;
        };
      },
      {}
    ],
    13: [
      function (e, t, r) {
        var n = e("./_wks")("unscopables"),
          o = Array.prototype;
        null == o[n] && e("./_hide")(o, n, {}),
          (t.exports = function (e) {
            o[n][e] = !0;
          });
      },
      { "./_hide": 28, "./_wks": 56 }
    ],
    14: [
      function (e, t, r) {
        var n = e("./_is-object");
        t.exports = function (e) {
          if (!n(e)) throw TypeError(e + " is not an object!");
          return e;
        };
      },
      { "./_is-object": 32 }
    ],
    15: [
      function (e, t, r) {
        var n = e("./_to-iobject"),
          o = e("./_to-length"),
          i = e("./_to-absolute-index");
        t.exports = function (e) {
          return function (t, r, u) {
            var a,
              s = n(t),
              c = o(s.length),
              l = i(u, c);
            if (e && r != r) {
              for (; c > l; ) if ((a = s[l++]) != a) return !0;
            } else for (; c > l; l++) if ((e || l in s) && s[l] === r) return e || l || 0;
            return !e && -1;
          };
        };
      },
      { "./_to-absolute-index": 49, "./_to-iobject": 51, "./_to-length": 52 }
    ],
    16: [
      function (e, t, r) {
        var n = {}.toString;
        t.exports = function (e) {
          return n.call(e).slice(8, -1);
        };
      },
      {}
    ],
    17: [
      function (e, t, r) {
        var n = (t.exports = { version: "2.6.12" });
        "number" == typeof __e && (__e = n);
      },
      {}
    ],
    18: [
      function (e, t, r) {
        var n = e("./_a-function");
        t.exports = function (e, t, r) {
          if ((n(e), void 0 === t)) return e;
          switch (r) {
            case 1:
              return function (r) {
                return e.call(t, r);
              };
            case 2:
              return function (r, n) {
                return e.call(t, r, n);
              };
            case 3:
              return function (r, n, o) {
                return e.call(t, r, n, o);
              };
          }
          return function () {
            return e.apply(t, arguments);
          };
        };
      },
      { "./_a-function": 12 }
    ],
    19: [
      function (e, t, r) {
        t.exports = function (e) {
          if (null == e) throw TypeError("Can't call method on  " + e);
          return e;
        };
      },
      {}
    ],
    20: [
      function (e, t, r) {
        t.exports = !e("./_fails")(function () {
          return (
            7 !=
            Object.defineProperty({}, "a", {
              get: function () {
                return 7;
              }
            }).a
          );
        });
      },
      { "./_fails": 24 }
    ],
    21: [
      function (e, t, r) {
        var n = e("./_is-object"),
          o = e("./_global").document,
          i = n(o) && n(o.createElement);
        t.exports = function (e) {
          return i ? o.createElement(e) : {};
        };
      },
      { "./_global": 26, "./_is-object": 32 }
    ],
    22: [
      function (e, t, r) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
      },
      {}
    ],
    23: [
      function (e, t, r) {
        var n = e("./_global"),
          o = e("./_core"),
          i = e("./_hide"),
          u = e("./_redefine"),
          a = e("./_ctx"),
          s = function (e, t, r) {
            var c,
              l,
              f,
              p,
              h = e & s.F,
              d = e & s.G,
              b = e & s.S,
              _ = e & s.P,
              v = e & s.B,
              g = d ? n : b ? n[t] || (n[t] = {}) : (n[t] || {}).prototype,
              y = d ? o : o[t] || (o[t] = {}),
              m = y.prototype || (y.prototype = {});
            for (c in (d && (r = t), r))
              (f = ((l = !h && g && void 0 !== g[c]) ? g : r)[c]),
                (p = v && l ? a(f, n) : _ && "function" == typeof f ? a(Function.call, f) : f),
                g && u(g, c, f, e & s.U),
                y[c] != f && i(y, c, p),
                _ && m[c] != f && (m[c] = f);
          };
        (n.core = o), (s.F = 1), (s.G = 2), (s.S = 4), (s.P = 8), (s.B = 16), (s.W = 32), (s.U = 64), (s.R = 128), (t.exports = s);
      },
      { "./_core": 17, "./_ctx": 18, "./_global": 26, "./_hide": 28, "./_redefine": 45 }
    ],
    24: [
      function (e, t, r) {
        t.exports = function (e) {
          try {
            return !!e();
          } catch (e) {
            return !0;
          }
        };
      },
      {}
    ],
    25: [
      function (e, t, r) {
        t.exports = e("./_shared")("native-function-to-string", Function.toString);
      },
      { "./_shared": 48 }
    ],
    26: [
      function (e, t, r) {
        var n = (t.exports =
          "undefined" != typeof window && window.Math == Math
            ? window
            : "undefined" != typeof self && self.Math == Math
            ? self
            : Function("return this")());
        "number" == typeof __g && (__g = n);
      },
      {}
    ],
    27: [
      function (e, t, r) {
        var n = {}.hasOwnProperty;
        t.exports = function (e, t) {
          return n.call(e, t);
        };
      },
      {}
    ],
    28: [
      function (e, t, r) {
        var n = e("./_object-dp"),
          o = e("./_property-desc");
        t.exports = e("./_descriptors")
          ? function (e, t, r) {
              return n.f(e, t, o(1, r));
            }
          : function (e, t, r) {
              return (e[t] = r), e;
            };
      },
      { "./_descriptors": 20, "./_object-dp": 39, "./_property-desc": 44 }
    ],
    29: [
      function (e, t, r) {
        var n = e("./_global").document;
        t.exports = n && n.documentElement;
      },
      { "./_global": 26 }
    ],
    30: [
      function (e, t, r) {
        t.exports =
          !e("./_descriptors") &&
          !e("./_fails")(function () {
            return (
              7 !=
              Object.defineProperty(e("./_dom-create")("div"), "a", {
                get: function () {
                  return 7;
                }
              }).a
            );
          });
      },
      { "./_descriptors": 20, "./_dom-create": 21, "./_fails": 24 }
    ],
    31: [
      function (e, t, r) {
        var n = e("./_cof");
        t.exports = Object("z").propertyIsEnumerable(0)
          ? Object
          : function (e) {
              return "String" == n(e) ? e.split("") : Object(e);
            };
      },
      { "./_cof": 16 }
    ],
    32: [
      function (e, t, r) {
        t.exports = function (e) {
          return "object" == typeof e ? null !== e : "function" == typeof e;
        };
      },
      {}
    ],
    33: [
      function (e, t, r) {
        "use strict";
        var n = e("./_object-create"),
          o = e("./_property-desc"),
          i = e("./_set-to-string-tag"),
          u = {};
        e("./_hide")(u, e("./_wks")("iterator"), function () {
          return this;
        }),
          (t.exports = function (e, t, r) {
            (e.prototype = n(u, { next: o(1, r) })), i(e, t + " Iterator");
          });
      },
      { "./_hide": 28, "./_object-create": 38, "./_property-desc": 44, "./_set-to-string-tag": 46, "./_wks": 56 }
    ],
    34: [
      function (e, t, r) {
        "use strict";
        var n = e("./_library"),
          o = e("./_export"),
          i = e("./_redefine"),
          u = e("./_hide"),
          a = e("./_iterators"),
          s = e("./_iter-create"),
          c = e("./_set-to-string-tag"),
          l = e("./_object-gpo"),
          f = e("./_wks")("iterator"),
          p = !([].keys && "next" in [].keys()),
          h = "keys",
          d = "values",
          b = function () {
            return this;
          };
        t.exports = function (e, t, r, _, v, g, y) {
          s(r, t, _);
          var m,
            x,
            j,
            k = function (e) {
              if (!p && e in M) return M[e];
              switch (e) {
                case h:
                case d:
                  return function () {
                    return new r(this, e);
                  };
              }
              return function () {
                return new r(this, e);
              };
            },
            w = t + " Iterator",
            O = v == d,
            S = !1,
            M = e.prototype,
            C = M[f] || M["@@iterator"] || (v && M[v]),
            T = C || k(v),
            E = v ? (O ? k("entries") : T) : void 0,
            R = ("Array" == t && M.entries) || C;
          if (
            (R && (j = l(R.call(new e()))) !== Object.prototype && j.next && (c(j, w, !0), n || "function" == typeof j[f] || u(j, f, b)),
            O &&
              C &&
              C.name !== d &&
              ((S = !0),
              (T = function () {
                return C.call(this);
              })),
            (n && !y) || (!p && !S && M[f]) || u(M, f, T),
            (a[t] = T),
            (a[w] = b),
            v)
          )
            if (((m = { values: O ? T : k(d), keys: g ? T : k(h), entries: E }), y)) for (x in m) x in M || i(M, x, m[x]);
            else o(o.P + o.F * (p || S), t, m);
          return m;
        };
      },
      {
        "./_export": 23,
        "./_hide": 28,
        "./_iter-create": 33,
        "./_iterators": 36,
        "./_library": 37,
        "./_object-gpo": 41,
        "./_redefine": 45,
        "./_set-to-string-tag": 46,
        "./_wks": 56
      }
    ],
    35: [
      function (e, t, r) {
        t.exports = function (e, t) {
          return { value: t, done: !!e };
        };
      },
      {}
    ],
    36: [
      function (e, t, r) {
        t.exports = {};
      },
      {}
    ],
    37: [
      function (e, t, r) {
        t.exports = !1;
      },
      {}
    ],
    38: [
      function (e, t, r) {
        var n = e("./_an-object"),
          o = e("./_object-dps"),
          i = e("./_enum-bug-keys"),
          u = e("./_shared-key")("IE_PROTO"),
          a = function () {},
          s = function () {
            var t,
              r = e("./_dom-create")("iframe"),
              n = i.length;
            for (
              r.style.display = "none",
                e("./_html").appendChild(r),
                r.src = "javascript:",
                (t = r.contentWindow.document).open(),
                t.write("<script>document.F=Object</script>"),
                t.close(),
                s = t.F;
              n--;

            )
              delete s.prototype[i[n]];
            return s();
          };
        t.exports =
          Object.create ||
          function (e, t) {
            var r;
            return (
              null !== e ? ((a.prototype = n(e)), (r = new a()), (a.prototype = null), (r[u] = e)) : (r = s()), void 0 === t ? r : o(r, t)
            );
          };
      },
      { "./_an-object": 14, "./_dom-create": 21, "./_enum-bug-keys": 22, "./_html": 29, "./_object-dps": 40, "./_shared-key": 47 }
    ],
    39: [
      function (e, t, r) {
        var n = e("./_an-object"),
          o = e("./_ie8-dom-define"),
          i = e("./_to-primitive"),
          u = Object.defineProperty;
        r.f = e("./_descriptors")
          ? Object.defineProperty
          : function (e, t, r) {
              if ((n(e), (t = i(t, !0)), n(r), o))
                try {
                  return u(e, t, r);
                } catch (e) {}
              if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
              return "value" in r && (e[t] = r.value), e;
            };
      },
      { "./_an-object": 14, "./_descriptors": 20, "./_ie8-dom-define": 30, "./_to-primitive": 54 }
    ],
    40: [
      function (e, t, r) {
        var n = e("./_object-dp"),
          o = e("./_an-object"),
          i = e("./_object-keys");
        t.exports = e("./_descriptors")
          ? Object.defineProperties
          : function (e, t) {
              o(e);
              for (var r, u = i(t), a = u.length, s = 0; a > s; ) n.f(e, (r = u[s++]), t[r]);
              return e;
            };
      },
      { "./_an-object": 14, "./_descriptors": 20, "./_object-dp": 39, "./_object-keys": 43 }
    ],
    41: [
      function (e, t, r) {
        var n = e("./_has"),
          o = e("./_to-object"),
          i = e("./_shared-key")("IE_PROTO"),
          u = Object.prototype;
        t.exports =
          Object.getPrototypeOf ||
          function (e) {
            return (
              (e = o(e)),
              n(e, i)
                ? e[i]
                : "function" == typeof e.constructor && e instanceof e.constructor
                ? e.constructor.prototype
                : e instanceof Object
                ? u
                : null
            );
          };
      },
      { "./_has": 27, "./_shared-key": 47, "./_to-object": 53 }
    ],
    42: [
      function (e, t, r) {
        var n = e("./_has"),
          o = e("./_to-iobject"),
          i = e("./_array-includes")(!1),
          u = e("./_shared-key")("IE_PROTO");
        t.exports = function (e, t) {
          var r,
            a = o(e),
            s = 0,
            c = [];
          for (r in a) r != u && n(a, r) && c.push(r);
          for (; t.length > s; ) n(a, (r = t[s++])) && (~i(c, r) || c.push(r));
          return c;
        };
      },
      { "./_array-includes": 15, "./_has": 27, "./_shared-key": 47, "./_to-iobject": 51 }
    ],
    43: [
      function (e, t, r) {
        var n = e("./_object-keys-internal"),
          o = e("./_enum-bug-keys");
        t.exports =
          Object.keys ||
          function (e) {
            return n(e, o);
          };
      },
      { "./_enum-bug-keys": 22, "./_object-keys-internal": 42 }
    ],
    44: [
      function (e, t, r) {
        t.exports = function (e, t) {
          return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
        };
      },
      {}
    ],
    45: [
      function (e, t, r) {
        var n = e("./_global"),
          o = e("./_hide"),
          i = e("./_has"),
          u = e("./_uid")("src"),
          a = e("./_function-to-string"),
          s = "toString",
          c = ("" + a).split(s);
        (e("./_core").inspectSource = function (e) {
          return a.call(e);
        }),
          (t.exports = function (e, t, r, a) {
            var s = "function" == typeof r;
            s && (i(r, "name") || o(r, "name", t)),
              e[t] !== r &&
                (s && (i(r, u) || o(r, u, e[t] ? "" + e[t] : c.join(String(t)))),
                e === n ? (e[t] = r) : a ? (e[t] ? (e[t] = r) : o(e, t, r)) : (delete e[t], o(e, t, r)));
          })(Function.prototype, s, function () {
            return ("function" == typeof this && this[u]) || a.call(this);
          });
      },
      { "./_core": 17, "./_function-to-string": 25, "./_global": 26, "./_has": 27, "./_hide": 28, "./_uid": 55 }
    ],
    46: [
      function (e, t, r) {
        var n = e("./_object-dp").f,
          o = e("./_has"),
          i = e("./_wks")("toStringTag");
        t.exports = function (e, t, r) {
          e && !o((e = r ? e : e.prototype), i) && n(e, i, { configurable: !0, value: t });
        };
      },
      { "./_has": 27, "./_object-dp": 39, "./_wks": 56 }
    ],
    47: [
      function (e, t, r) {
        var n = e("./_shared")("keys"),
          o = e("./_uid");
        t.exports = function (e) {
          return n[e] || (n[e] = o(e));
        };
      },
      { "./_shared": 48, "./_uid": 55 }
    ],
    48: [
      function (e, t, r) {
        var n = e("./_core"),
          o = e("./_global"),
          i = "__core-js_shared__",
          u = o[i] || (o[i] = {});
        (t.exports = function (e, t) {
          return u[e] || (u[e] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: n.version,
          mode: e("./_library") ? "pure" : "global",
          copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
        });
      },
      { "./_core": 17, "./_global": 26, "./_library": 37 }
    ],
    49: [
      function (e, t, r) {
        var n = e("./_to-integer"),
          o = Math.max,
          i = Math.min;
        t.exports = function (e, t) {
          return (e = n(e)) < 0 ? o(e + t, 0) : i(e, t);
        };
      },
      { "./_to-integer": 50 }
    ],
    50: [
      function (e, t, r) {
        var n = Math.ceil,
          o = Math.floor;
        t.exports = function (e) {
          return isNaN((e = +e)) ? 0 : (e > 0 ? o : n)(e);
        };
      },
      {}
    ],
    51: [
      function (e, t, r) {
        var n = e("./_iobject"),
          o = e("./_defined");
        t.exports = function (e) {
          return n(o(e));
        };
      },
      { "./_defined": 19, "./_iobject": 31 }
    ],
    52: [
      function (e, t, r) {
        var n = e("./_to-integer"),
          o = Math.min;
        t.exports = function (e) {
          return e > 0 ? o(n(e), 9007199254740991) : 0;
        };
      },
      { "./_to-integer": 50 }
    ],
    53: [
      function (e, t, r) {
        var n = e("./_defined");
        t.exports = function (e) {
          return Object(n(e));
        };
      },
      { "./_defined": 19 }
    ],
    54: [
      function (e, t, r) {
        var n = e("./_is-object");
        t.exports = function (e, t) {
          if (!n(e)) return e;
          var r, o;
          if (t && "function" == typeof (r = e.toString) && !n((o = r.call(e)))) return o;
          if ("function" == typeof (r = e.valueOf) && !n((o = r.call(e)))) return o;
          if (!t && "function" == typeof (r = e.toString) && !n((o = r.call(e)))) return o;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      { "./_is-object": 32 }
    ],
    55: [
      function (e, t, r) {
        var n = 0,
          o = Math.random();
        t.exports = function (e) {
          return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + o).toString(36));
        };
      },
      {}
    ],
    56: [
      function (e, t, r) {
        var n = e("./_shared")("wks"),
          o = e("./_uid"),
          i = e("./_global").Symbol,
          u = "function" == typeof i;
        (t.exports = function (e) {
          return n[e] || (n[e] = (u && i[e]) || (u ? i : o)("Symbol." + e));
        }).store = n;
      },
      { "./_global": 26, "./_shared": 48, "./_uid": 55 }
    ],
    57: [
      function (e, t, r) {
        "use strict";
        var n = e("./_add-to-unscopables"),
          o = e("./_iter-step"),
          i = e("./_iterators"),
          u = e("./_to-iobject");
        (t.exports = e("./_iter-define")(
          Array,
          "Array",
          function (e, t) {
            (this._t = u(e)), (this._i = 0), (this._k = t);
          },
          function () {
            var e = this._t,
              t = this._k,
              r = this._i++;
            return !e || r >= e.length ? ((this._t = void 0), o(1)) : o(0, "keys" == t ? r : "values" == t ? e[r] : [r, e[r]]);
          },
          "values"
        )),
          (i.Arguments = i.Array),
          n("keys"),
          n("values"),
          n("entries");
      },
      { "./_add-to-unscopables": 13, "./_iter-define": 34, "./_iter-step": 35, "./_iterators": 36, "./_to-iobject": 51 }
    ],
    58: [
      function (e, t, r) {
        for (
          var n = e("./es6.array.iterator"),
            o = e("./_object-keys"),
            i = e("./_redefine"),
            u = e("./_global"),
            a = e("./_hide"),
            s = e("./_iterators"),
            c = e("./_wks"),
            l = c("iterator"),
            f = c("toStringTag"),
            p = s.Array,
            h = {
              CSSRuleList: !0,
              CSSStyleDeclaration: !1,
              CSSValueList: !1,
              ClientRectList: !1,
              DOMRectList: !1,
              DOMStringList: !1,
              DOMTokenList: !0,
              DataTransferItemList: !1,
              FileList: !1,
              HTMLAllCollection: !1,
              HTMLCollection: !1,
              HTMLFormElement: !1,
              HTMLSelectElement: !1,
              MediaList: !0,
              MimeTypeArray: !1,
              NamedNodeMap: !1,
              NodeList: !0,
              PaintRequestList: !1,
              Plugin: !1,
              PluginArray: !1,
              SVGLengthList: !1,
              SVGNumberList: !1,
              SVGPathSegList: !1,
              SVGPointList: !1,
              SVGStringList: !1,
              SVGTransformList: !1,
              SourceBufferList: !1,
              StyleSheetList: !0,
              TextTrackCueList: !1,
              TextTrackList: !1,
              TouchList: !1
            },
            d = o(h),
            b = 0;
          b < d.length;
          b++
        ) {
          var _,
            v = d[b],
            g = h[v],
            y = u[v],
            m = y && y.prototype;
          if (m && (m[l] || a(m, l, p), m[f] || a(m, f, v), (s[v] = p), g)) for (_ in n) m[_] || i(m, _, n[_], !0);
        }
      },
      {
        "./_global": 26,
        "./_hide": 28,
        "./_iterators": 36,
        "./_object-keys": 43,
        "./_redefine": 45,
        "./_wks": 56,
        "./es6.array.iterator": 57
      }
    ],
    59: [
      function (e, t, r) {
        "use strict";
        t.exports = e("./src/ContentMessenger");
      },
      { "./src/ContentMessenger": 60 }
    ],
    60: [
      function (e, t, r) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault"),
          o = n(e("@babel/runtime/helpers/classCallCheck")),
          i = n(e("@babel/runtime/helpers/createClass")),
          u = n(e("@babel/runtime/helpers/assertThisInitialized")),
          a = n(e("@babel/runtime/helpers/inherits")),
          s = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
          c = n(e("@babel/runtime/helpers/getPrototypeOf"));
        function l(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var r,
              n = (0, c.default)(e);
            if (t) {
              var o = (0, c.default)(this).constructor;
              r = Reflect.construct(n, arguments, o);
            } else r = n.apply(this, arguments);
            return (0, s.default)(this, r);
          };
        }
        var f = e("./Messenger"),
          p = e("./ContentTopic"),
          h = e("./chrome"),
          d = (function (e) {
            (0, a.default)(r, e);
            var t = l(r);
            function r() {
              var e;
              (0, o.default)(this, r);
              var n = (e = t.call(this, p))._onMessage.bind((0, u.default)(e));
              return (
                h.runtime.onMessage.addListener(n),
                window.addEventListener("unload", function () {
                  h.runtime.onMessage.removeListener(n);
                }),
                h.runtime.connect({ name: "ContentMessenger" }).onDisconnect.addListener(e._onDisconnect.bind((0, u.default)(e))),
                e
              );
            }
            return (
              (0, i.default)(r, [
                {
                  key: "_onMessage",
                  value: function (e, t, r) {
                    if (!t.tab && e.publish) {
                      var n = this._getTopic(e.publish);
                      n && n.publish(e.message, r);
                    }
                    return !0;
                  }
                },
                {
                  key: "_onDisconnect",
                  value: function () {
                    var e = this._getTopic("Background:closed");
                    e && e.publish();
                  }
                },
                {
                  key: "publish",
                  value: function (e, t, r) {
                    var n = 10;
                    !(function o() {
                      h.runtime.sendMessage({ publish: e, message: t }, function (e) {
                        var t = h.runtime.lastError;
                        t && "Could not establish connection. Receiving end does not exist." === t.message
                          ? (n -= 1) && setTimeout(o, 50)
                          : "function" == typeof r && r(e);
                      });
                    })();
                  }
                }
              ]),
              r
            );
          })(f);
        t.exports = d;
      },
      {
        "./ContentTopic": 61,
        "./Messenger": 62,
        "./chrome": 64,
        "@babel/runtime/helpers/assertThisInitialized": 3,
        "@babel/runtime/helpers/classCallCheck": 4,
        "@babel/runtime/helpers/createClass": 5,
        "@babel/runtime/helpers/getPrototypeOf": 6,
        "@babel/runtime/helpers/inherits": 7,
        "@babel/runtime/helpers/interopRequireDefault": 8,
        "@babel/runtime/helpers/possibleConstructorReturn": 9
      }
    ],
    61: [
      function (e, t, r) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault"),
          o = n(e("@babel/runtime/helpers/classCallCheck")),
          i = n(e("@babel/runtime/helpers/inherits")),
          u = n(e("@babel/runtime/helpers/possibleConstructorReturn")),
          a = n(e("@babel/runtime/helpers/getPrototypeOf"));
        function s(e) {
          var t = (function () {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
            } catch (e) {
              return !1;
            }
          })();
          return function () {
            var r,
              n = (0, a.default)(e);
            if (t) {
              var o = (0, a.default)(this).constructor;
              r = Reflect.construct(n, arguments, o);
            } else r = n.apply(this, arguments);
            return (0, u.default)(this, r);
          };
        }
        var c = e("./Topic"),
          l = e("./chrome"),
          f = (function (e) {
            (0, i.default)(r, e);
            var t = s(r);
            function r(e) {
              var n;
              return (0, o.default)(this, r), (n = t.call(this, e)), l.runtime.sendMessage({ subscribe: e }), n;
            }
            return r;
          })(c);
        t.exports = f;
      },
      {
        "./Topic": 63,
        "./chrome": 64,
        "@babel/runtime/helpers/classCallCheck": 4,
        "@babel/runtime/helpers/getPrototypeOf": 6,
        "@babel/runtime/helpers/inherits": 7,
        "@babel/runtime/helpers/interopRequireDefault": 8,
        "@babel/runtime/helpers/possibleConstructorReturn": 9
      }
    ],
    62: [
      function (e, t, r) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault"),
          o = n(e("@babel/runtime/helpers/classCallCheck")),
          i = n(e("@babel/runtime/helpers/createClass")),
          u = (function () {
            function e(t) {
              (0, o.default)(this, e), (this._topicClass = t), (this._topics = {});
            }
            return (
              (0, i.default)(
                e,
                [
                  {
                    key: "_getTopic",
                    value: function (e, t) {
                      var r = this._topics[e];
                      return !r && t && (this._topics[e] = r = new this._topicClass(e)), r;
                    }
                  },
                  {
                    key: "subscribe",
                    value: function (e, t) {
                      this._getTopic(e, !0).subscribe(t);
                    }
                  },
                  {
                    key: "publish",
                    value: function (e, t, r, n) {
                      var o = this._getTopic(e);
                      o && o.publish(t, r, n);
                    }
                  }
                ],
                [
                  {
                    key: "getInstance",
                    value: function () {
                      return this._instance || (this._instance = new this()), this._instance;
                    }
                  }
                ]
              ),
              e
            );
          })();
        t.exports = u;
      },
      {
        "@babel/runtime/helpers/classCallCheck": 4,
        "@babel/runtime/helpers/createClass": 5,
        "@babel/runtime/helpers/interopRequireDefault": 8
      }
    ],
    63: [
      function (e, t, r) {
        "use strict";
        var n = e("@babel/runtime/helpers/interopRequireDefault"),
          o = n(e("@babel/runtime/helpers/classCallCheck")),
          i = n(e("@babel/runtime/helpers/createClass")),
          u = (function () {
            function e(t) {
              (0, o.default)(this, e), (this._name = t), (this._callbacks = []);
            }
            return (
              (0, i.default)(e, [
                {
                  key: "publish",
                  value: function (e, t) {
                    var r = this._wrapCallback(t);
                    this._callbacks.forEach(function (t) {
                      return t(e, r);
                    });
                  }
                },
                {
                  key: "_wrapCallback",
                  value: function (e) {
                    return null == e
                      ? e
                      : function () {
                          try {
                            e.apply(void 0, arguments);
                          } catch (e) {
                            if ("Attempting to use a disconnected port object" !== e.message) throw e;
                          }
                        };
                  }
                },
                {
                  key: "subscribe",
                  value: function (e) {
                    this._callbacks.push(e);
                  }
                }
              ]),
              e
            );
          })();
        t.exports = u;
      },
      {
        "@babel/runtime/helpers/classCallCheck": 4,
        "@babel/runtime/helpers/createClass": 5,
        "@babel/runtime/helpers/interopRequireDefault": 8
      }
    ],
    64: [
      function (e, t, r) {
        "use strict";
        "undefined" != typeof browser && browser.runtime ? (t.exports = browser) : (t.exports = chrome);
      },
      {}
    ],
    65: [
      function (e, t, r) {
        (function (e) {
          (function () {
            !(function (e, n) {
              "object" == typeof r && void 0 !== t
                ? (t.exports = n())
                : "function" == typeof define && define.amd
                ? define("underscore", n)
                : ((e = "undefined" != typeof globalThis ? globalThis : e || self),
                  (function () {
                    var t = e._,
                      r = (e._ = n());
                    r.noConflict = function () {
                      return (e._ = t), r;
                    };
                  })());
            })(this, function () {
              var t = "1.13.1",
                r =
                  ("object" == typeof self && self.self === self && self) ||
                  ("object" == typeof e && e.global === e && e) ||
                  Function("return this")() ||
                  {},
                n = Array.prototype,
                o = Object.prototype,
                i = "undefined" != typeof Symbol ? Symbol.prototype : null,
                u = n.push,
                a = n.slice,
                s = o.toString,
                c = o.hasOwnProperty,
                l = "undefined" != typeof ArrayBuffer,
                f = "undefined" != typeof DataView,
                p = Array.isArray,
                h = Object.keys,
                d = Object.create,
                b = l && ArrayBuffer.isView,
                _ = isNaN,
                v = isFinite,
                g = !{ toString: null }.propertyIsEnumerable("toString"),
                y = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
                m = Math.pow(2, 53) - 1;
              function x(e, t) {
                return (
                  (t = null == t ? e.length - 1 : +t),
                  function () {
                    for (var r = Math.max(arguments.length - t, 0), n = Array(r), o = 0; o < r; o++) n[o] = arguments[o + t];
                    switch (t) {
                      case 0:
                        return e.call(this, n);
                      case 1:
                        return e.call(this, arguments[0], n);
                      case 2:
                        return e.call(this, arguments[0], arguments[1], n);
                    }
                    var i = Array(t + 1);
                    for (o = 0; o < t; o++) i[o] = arguments[o];
                    return (i[t] = n), e.apply(this, i);
                  }
                );
              }
              function j(e) {
                var t = typeof e;
                return "function" === t || ("object" === t && !!e);
              }
              function k(e) {
                return void 0 === e;
              }
              function w(e) {
                return !0 === e || !1 === e || "[object Boolean]" === s.call(e);
              }
              function O(e) {
                var t = "[object " + e + "]";
                return function (e) {
                  return s.call(e) === t;
                };
              }
              var S = O("String"),
                M = O("Number"),
                C = O("Date"),
                T = O("RegExp"),
                E = O("Error"),
                R = O("Symbol"),
                L = O("ArrayBuffer"),
                A = O("Function"),
                P = r.document && r.document.childNodes;
              "function" != typeof /./ &&
                "object" != typeof Int8Array &&
                "function" != typeof P &&
                (A = function (e) {
                  return "function" == typeof e || !1;
                });
              var I = A,
                D = O("Object"),
                B = f && D(new DataView(new ArrayBuffer(8))),
                z = "undefined" != typeof Map && D(new Map()),
                N = O("DataView");
              var F = B
                  ? function (e) {
                      return null != e && I(e.getInt8) && L(e.buffer);
                    }
                  : N,
                q = p || O("Array");
              function U(e, t) {
                return null != e && c.call(e, t);
              }
              var V = O("Arguments");
              !(function () {
                V(arguments) ||
                  (V = function (e) {
                    return U(e, "callee");
                  });
              })();
              var W = V;
              function G(e) {
                return M(e) && _(e);
              }
              function $(e) {
                return function () {
                  return e;
                };
              }
              function K(e) {
                return function (t) {
                  var r = e(t);
                  return "number" == typeof r && r >= 0 && r <= m;
                };
              }
              function H(e) {
                return function (t) {
                  return null == t ? void 0 : t[e];
                };
              }
              var J = H("byteLength"),
                Y = K(J),
                X = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
              var Z = l
                  ? function (e) {
                      return b ? b(e) && !F(e) : Y(e) && X.test(s.call(e));
                    }
                  : $(!1),
                Q = H("length");
              function ee(e, t) {
                t = (function (e) {
                  for (var t = {}, r = e.length, n = 0; n < r; ++n) t[e[n]] = !0;
                  return {
                    contains: function (e) {
                      return t[e];
                    },
                    push: function (r) {
                      return (t[r] = !0), e.push(r);
                    }
                  };
                })(t);
                var r = y.length,
                  n = e.constructor,
                  i = (I(n) && n.prototype) || o,
                  u = "constructor";
                for (U(e, u) && !t.contains(u) && t.push(u); r--; ) (u = y[r]) in e && e[u] !== i[u] && !t.contains(u) && t.push(u);
              }
              function te(e) {
                if (!j(e)) return [];
                if (h) return h(e);
                var t = [];
                for (var r in e) U(e, r) && t.push(r);
                return g && ee(e, t), t;
              }
              function re(e, t) {
                var r = te(t),
                  n = r.length;
                if (null == e) return !n;
                for (var o = Object(e), i = 0; i < n; i++) {
                  var u = r[i];
                  if (t[u] !== o[u] || !(u in o)) return !1;
                }
                return !0;
              }
              function ne(e) {
                return e instanceof ne ? e : this instanceof ne ? void (this._wrapped = e) : new ne(e);
              }
              function oe(e) {
                return new Uint8Array(e.buffer || e, e.byteOffset || 0, J(e));
              }
              (ne.VERSION = t),
                (ne.prototype.value = function () {
                  return this._wrapped;
                }),
                (ne.prototype.valueOf = ne.prototype.toJSON = ne.prototype.value),
                (ne.prototype.toString = function () {
                  return String(this._wrapped);
                });
              var ie = "[object DataView]";
              function ue(e, t, r, n) {
                if (e === t) return 0 !== e || 1 / e == 1 / t;
                if (null == e || null == t) return !1;
                if (e != e) return t != t;
                var o = typeof e;
                return ("function" === o || "object" === o || "object" == typeof t) && ae(e, t, r, n);
              }
              function ae(e, t, r, n) {
                e instanceof ne && (e = e._wrapped), t instanceof ne && (t = t._wrapped);
                var o = s.call(e);
                if (o !== s.call(t)) return !1;
                if (B && "[object Object]" == o && F(e)) {
                  if (!F(t)) return !1;
                  o = ie;
                }
                switch (o) {
                  case "[object RegExp]":
                  case "[object String]":
                    return "" + e == "" + t;
                  case "[object Number]":
                    return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
                  case "[object Date]":
                  case "[object Boolean]":
                    return +e == +t;
                  case "[object Symbol]":
                    return i.valueOf.call(e) === i.valueOf.call(t);
                  case "[object ArrayBuffer]":
                  case ie:
                    return ae(oe(e), oe(t), r, n);
                }
                var u = "[object Array]" === o;
                if (!u && Z(e)) {
                  if (J(e) !== J(t)) return !1;
                  if (e.buffer === t.buffer && e.byteOffset === t.byteOffset) return !0;
                  u = !0;
                }
                if (!u) {
                  if ("object" != typeof e || "object" != typeof t) return !1;
                  var a = e.constructor,
                    c = t.constructor;
                  if (a !== c && !(I(a) && a instanceof a && I(c) && c instanceof c) && "constructor" in e && "constructor" in t) return !1;
                }
                n = n || [];
                for (var l = (r = r || []).length; l--; ) if (r[l] === e) return n[l] === t;
                if ((r.push(e), n.push(t), u)) {
                  if ((l = e.length) !== t.length) return !1;
                  for (; l--; ) if (!ue(e[l], t[l], r, n)) return !1;
                } else {
                  var f,
                    p = te(e);
                  if (((l = p.length), te(t).length !== l)) return !1;
                  for (; l--; ) if (!U(t, (f = p[l])) || !ue(e[f], t[f], r, n)) return !1;
                }
                return r.pop(), n.pop(), !0;
              }
              function se(e) {
                if (!j(e)) return [];
                var t = [];
                for (var r in e) t.push(r);
                return g && ee(e, t), t;
              }
              function ce(e) {
                var t = Q(e);
                return function (r) {
                  if (null == r) return !1;
                  var n = se(r);
                  if (Q(n)) return !1;
                  for (var o = 0; o < t; o++) if (!I(r[e[o]])) return !1;
                  return e !== de || !I(r[le]);
                };
              }
              var le = "forEach",
                fe = ["clear", "delete"],
                pe = ["get", "has", "set"],
                he = fe.concat(le, pe),
                de = fe.concat(pe),
                be = ["add"].concat(fe, le, "has"),
                _e = z ? ce(he) : O("Map"),
                ve = z ? ce(de) : O("WeakMap"),
                ge = z ? ce(be) : O("Set"),
                ye = O("WeakSet");
              function me(e) {
                for (var t = te(e), r = t.length, n = Array(r), o = 0; o < r; o++) n[o] = e[t[o]];
                return n;
              }
              function xe(e) {
                for (var t = {}, r = te(e), n = 0, o = r.length; n < o; n++) t[e[r[n]]] = r[n];
                return t;
              }
              function je(e) {
                var t = [];
                for (var r in e) I(e[r]) && t.push(r);
                return t.sort();
              }
              function ke(e, t) {
                return function (r) {
                  var n = arguments.length;
                  if ((t && (r = Object(r)), n < 2 || null == r)) return r;
                  for (var o = 1; o < n; o++)
                    for (var i = arguments[o], u = e(i), a = u.length, s = 0; s < a; s++) {
                      var c = u[s];
                      (t && void 0 !== r[c]) || (r[c] = i[c]);
                    }
                  return r;
                };
              }
              var we = ke(se),
                Oe = ke(te),
                Se = ke(se, !0);
              function Me(e) {
                if (!j(e)) return {};
                if (d) return d(e);
                var t = function () {};
                t.prototype = e;
                var r = new t();
                return (t.prototype = null), r;
              }
              function Ce(e) {
                return j(e) ? (q(e) ? e.slice() : we({}, e)) : e;
              }
              function Te(e) {
                return q(e) ? e : [e];
              }
              function Ee(e) {
                return ne.toPath(e);
              }
              function Re(e, t) {
                for (var r = t.length, n = 0; n < r; n++) {
                  if (null == e) return;
                  e = e[t[n]];
                }
                return r ? e : void 0;
              }
              function Le(e, t, r) {
                var n = Re(e, Ee(t));
                return k(n) ? r : n;
              }
              function Ae(e) {
                return e;
              }
              function Pe(e) {
                return (
                  (e = Oe({}, e)),
                  function (t) {
                    return re(t, e);
                  }
                );
              }
              function Ie(e) {
                return (
                  (e = Ee(e)),
                  function (t) {
                    return Re(t, e);
                  }
                );
              }
              function De(e, t, r) {
                if (void 0 === t) return e;
                switch (null == r ? 3 : r) {
                  case 1:
                    return function (r) {
                      return e.call(t, r);
                    };
                  case 3:
                    return function (r, n, o) {
                      return e.call(t, r, n, o);
                    };
                  case 4:
                    return function (r, n, o, i) {
                      return e.call(t, r, n, o, i);
                    };
                }
                return function () {
                  return e.apply(t, arguments);
                };
              }
              function Be(e, t, r) {
                return null == e ? Ae : I(e) ? De(e, t, r) : j(e) && !q(e) ? Pe(e) : Ie(e);
              }
              function ze(e, t) {
                return Be(e, t, 1 / 0);
              }
              function Ne(e, t, r) {
                return ne.iteratee !== ze ? ne.iteratee(e, t) : Be(e, t, r);
              }
              function Fe() {}
              function qe(e, t) {
                return null == t && ((t = e), (e = 0)), e + Math.floor(Math.random() * (t - e + 1));
              }
              (ne.toPath = Te), (ne.iteratee = ze);
              var Ue =
                Date.now ||
                function () {
                  return new Date().getTime();
                };
              function Ve(e) {
                var t = function (t) {
                    return e[t];
                  },
                  r = "(?:" + te(e).join("|") + ")",
                  n = RegExp(r),
                  o = RegExp(r, "g");
                return function (e) {
                  return (e = null == e ? "" : "" + e), n.test(e) ? e.replace(o, t) : e;
                };
              }
              var We = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
                Ge = Ve(We),
                $e = Ve(xe(We)),
                Ke = (ne.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g }),
                He = /(.)^/,
                Je = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
                Ye = /\\|'|\r|\n|\u2028|\u2029/g;
              function Xe(e) {
                return "\\" + Je[e];
              }
              var Ze = /^\s*(\w|\$)+\s*$/;
              var Qe = 0;
              function et(e, t, r, n, o) {
                if (!(n instanceof t)) return e.apply(r, o);
                var i = Me(e.prototype),
                  u = e.apply(i, o);
                return j(u) ? u : i;
              }
              var tt = x(function (e, t) {
                var r = tt.placeholder,
                  n = function () {
                    for (var o = 0, i = t.length, u = Array(i), a = 0; a < i; a++) u[a] = t[a] === r ? arguments[o++] : t[a];
                    for (; o < arguments.length; ) u.push(arguments[o++]);
                    return et(e, n, this, this, u);
                  };
                return n;
              });
              tt.placeholder = ne;
              var rt = x(function (e, t, r) {
                  if (!I(e)) throw new TypeError("Bind must be called on a function");
                  var n = x(function (o) {
                    return et(e, n, t, this, r.concat(o));
                  });
                  return n;
                }),
                nt = K(Q);
              function ot(e, t, r, n) {
                if (((n = n || []), t || 0 === t)) {
                  if (t <= 0) return n.concat(e);
                } else t = 1 / 0;
                for (var o = n.length, i = 0, u = Q(e); i < u; i++) {
                  var a = e[i];
                  if (nt(a) && (q(a) || W(a)))
                    if (t > 1) ot(a, t - 1, r, n), (o = n.length);
                    else for (var s = 0, c = a.length; s < c; ) n[o++] = a[s++];
                  else r || (n[o++] = a);
                }
                return n;
              }
              var it = x(function (e, t) {
                var r = (t = ot(t, !1, !1)).length;
                if (r < 1) throw new Error("bindAll must be passed function names");
                for (; r--; ) {
                  var n = t[r];
                  e[n] = rt(e[n], e);
                }
                return e;
              });
              var ut = x(function (e, t, r) {
                  return setTimeout(function () {
                    return e.apply(null, r);
                  }, t);
                }),
                at = tt(ut, ne, 1);
              function st(e) {
                return function () {
                  return !e.apply(this, arguments);
                };
              }
              function ct(e, t) {
                var r;
                return function () {
                  return --e > 0 && (r = t.apply(this, arguments)), e <= 1 && (t = null), r;
                };
              }
              var lt = tt(ct, 2);
              function ft(e, t, r) {
                t = Ne(t, r);
                for (var n, o = te(e), i = 0, u = o.length; i < u; i++) if (t(e[(n = o[i])], n, e)) return n;
              }
              function pt(e) {
                return function (t, r, n) {
                  r = Ne(r, n);
                  for (var o = Q(t), i = e > 0 ? 0 : o - 1; i >= 0 && i < o; i += e) if (r(t[i], i, t)) return i;
                  return -1;
                };
              }
              var ht = pt(1),
                dt = pt(-1);
              function bt(e, t, r, n) {
                for (var o = (r = Ne(r, n, 1))(t), i = 0, u = Q(e); i < u; ) {
                  var a = Math.floor((i + u) / 2);
                  r(e[a]) < o ? (i = a + 1) : (u = a);
                }
                return i;
              }
              function _t(e, t, r) {
                return function (n, o, i) {
                  var u = 0,
                    s = Q(n);
                  if ("number" == typeof i) e > 0 ? (u = i >= 0 ? i : Math.max(i + s, u)) : (s = i >= 0 ? Math.min(i + 1, s) : i + s + 1);
                  else if (r && i && s) return n[(i = r(n, o))] === o ? i : -1;
                  if (o != o) return (i = t(a.call(n, u, s), G)) >= 0 ? i + u : -1;
                  for (i = e > 0 ? u : s - 1; i >= 0 && i < s; i += e) if (n[i] === o) return i;
                  return -1;
                };
              }
              var vt = _t(1, ht, bt),
                gt = _t(-1, dt);
              function yt(e, t, r) {
                var n = (nt(e) ? ht : ft)(e, t, r);
                if (void 0 !== n && -1 !== n) return e[n];
              }
              function mt(e, t, r) {
                var n, o;
                if (((t = De(t, r)), nt(e))) for (n = 0, o = e.length; n < o; n++) t(e[n], n, e);
                else {
                  var i = te(e);
                  for (n = 0, o = i.length; n < o; n++) t(e[i[n]], i[n], e);
                }
                return e;
              }
              function xt(e, t, r) {
                t = Ne(t, r);
                for (var n = !nt(e) && te(e), o = (n || e).length, i = Array(o), u = 0; u < o; u++) {
                  var a = n ? n[u] : u;
                  i[u] = t(e[a], a, e);
                }
                return i;
              }
              function jt(e) {
                var t = function (t, r, n, o) {
                  var i = !nt(t) && te(t),
                    u = (i || t).length,
                    a = e > 0 ? 0 : u - 1;
                  for (o || ((n = t[i ? i[a] : a]), (a += e)); a >= 0 && a < u; a += e) {
                    var s = i ? i[a] : a;
                    n = r(n, t[s], s, t);
                  }
                  return n;
                };
                return function (e, r, n, o) {
                  var i = arguments.length >= 3;
                  return t(e, De(r, o, 4), n, i);
                };
              }
              var kt = jt(1),
                wt = jt(-1);
              function Ot(e, t, r) {
                var n = [];
                return (
                  (t = Ne(t, r)),
                  mt(e, function (e, r, o) {
                    t(e, r, o) && n.push(e);
                  }),
                  n
                );
              }
              function St(e, t, r) {
                t = Ne(t, r);
                for (var n = !nt(e) && te(e), o = (n || e).length, i = 0; i < o; i++) {
                  var u = n ? n[i] : i;
                  if (!t(e[u], u, e)) return !1;
                }
                return !0;
              }
              function Mt(e, t, r) {
                t = Ne(t, r);
                for (var n = !nt(e) && te(e), o = (n || e).length, i = 0; i < o; i++) {
                  var u = n ? n[i] : i;
                  if (t(e[u], u, e)) return !0;
                }
                return !1;
              }
              function Ct(e, t, r, n) {
                return nt(e) || (e = me(e)), ("number" != typeof r || n) && (r = 0), vt(e, t, r) >= 0;
              }
              var Tt = x(function (e, t, r) {
                var n, o;
                return (
                  I(t) ? (o = t) : ((t = Ee(t)), (n = t.slice(0, -1)), (t = t[t.length - 1])),
                  xt(e, function (e) {
                    var i = o;
                    if (!i) {
                      if ((n && n.length && (e = Re(e, n)), null == e)) return;
                      i = e[t];
                    }
                    return null == i ? i : i.apply(e, r);
                  })
                );
              });
              function Et(e, t) {
                return xt(e, Ie(t));
              }
              function Rt(e, t, r) {
                var n,
                  o,
                  i = -1 / 0,
                  u = -1 / 0;
                if (null == t || ("number" == typeof t && "object" != typeof e[0] && null != e))
                  for (var a = 0, s = (e = nt(e) ? e : me(e)).length; a < s; a++) null != (n = e[a]) && n > i && (i = n);
                else
                  (t = Ne(t, r)),
                    mt(e, function (e, r, n) {
                      ((o = t(e, r, n)) > u || (o === -1 / 0 && i === -1 / 0)) && ((i = e), (u = o));
                    });
                return i;
              }
              function Lt(e, t, r) {
                if (null == t || r) return nt(e) || (e = me(e)), e[qe(e.length - 1)];
                var n = nt(e) ? Ce(e) : me(e),
                  o = Q(n);
                t = Math.max(Math.min(t, o), 0);
                for (var i = o - 1, u = 0; u < t; u++) {
                  var a = qe(u, i),
                    s = n[u];
                  (n[u] = n[a]), (n[a] = s);
                }
                return n.slice(0, t);
              }
              function At(e, t) {
                return function (r, n, o) {
                  var i = t ? [[], []] : {};
                  return (
                    (n = Ne(n, o)),
                    mt(r, function (t, o) {
                      var u = n(t, o, r);
                      e(i, t, u);
                    }),
                    i
                  );
                };
              }
              var Pt = At(function (e, t, r) {
                  U(e, r) ? e[r].push(t) : (e[r] = [t]);
                }),
                It = At(function (e, t, r) {
                  e[r] = t;
                }),
                Dt = At(function (e, t, r) {
                  U(e, r) ? e[r]++ : (e[r] = 1);
                }),
                Bt = At(function (e, t, r) {
                  e[r ? 0 : 1].push(t);
                }, !0),
                zt = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
              function Nt(e, t, r) {
                return t in r;
              }
              var Ft = x(function (e, t) {
                  var r = {},
                    n = t[0];
                  if (null == e) return r;
                  I(n) ? (t.length > 1 && (n = De(n, t[1])), (t = se(e))) : ((n = Nt), (t = ot(t, !1, !1)), (e = Object(e)));
                  for (var o = 0, i = t.length; o < i; o++) {
                    var u = t[o],
                      a = e[u];
                    n(a, u, e) && (r[u] = a);
                  }
                  return r;
                }),
                qt = x(function (e, t) {
                  var r,
                    n = t[0];
                  return (
                    I(n)
                      ? ((n = st(n)), t.length > 1 && (r = t[1]))
                      : ((t = xt(ot(t, !1, !1), String)),
                        (n = function (e, r) {
                          return !Ct(t, r);
                        })),
                    Ft(e, n, r)
                  );
                });
              function Ut(e, t, r) {
                return a.call(e, 0, Math.max(0, e.length - (null == t || r ? 1 : t)));
              }
              function Vt(e, t, r) {
                return null == e || e.length < 1 ? (null == t || r ? void 0 : []) : null == t || r ? e[0] : Ut(e, e.length - t);
              }
              function Wt(e, t, r) {
                return a.call(e, null == t || r ? 1 : t);
              }
              var Gt = x(function (e, t) {
                  return (
                    (t = ot(t, !0, !0)),
                    Ot(e, function (e) {
                      return !Ct(t, e);
                    })
                  );
                }),
                $t = x(function (e, t) {
                  return Gt(e, t);
                });
              function Kt(e, t, r, n) {
                w(t) || ((n = r), (r = t), (t = !1)), null != r && (r = Ne(r, n));
                for (var o = [], i = [], u = 0, a = Q(e); u < a; u++) {
                  var s = e[u],
                    c = r ? r(s, u, e) : s;
                  t && !r ? ((u && i === c) || o.push(s), (i = c)) : r ? Ct(i, c) || (i.push(c), o.push(s)) : Ct(o, s) || o.push(s);
                }
                return o;
              }
              var Ht = x(function (e) {
                return Kt(ot(e, !0, !0));
              });
              function Jt(e) {
                for (var t = (e && Rt(e, Q).length) || 0, r = Array(t), n = 0; n < t; n++) r[n] = Et(e, n);
                return r;
              }
              var Yt = x(Jt);
              function Xt(e, t) {
                return e._chain ? ne(t).chain() : t;
              }
              function Zt(e) {
                return (
                  mt(je(e), function (t) {
                    var r = (ne[t] = e[t]);
                    ne.prototype[t] = function () {
                      var e = [this._wrapped];
                      return u.apply(e, arguments), Xt(this, r.apply(ne, e));
                    };
                  }),
                  ne
                );
              }
              mt(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
                var t = n[e];
                ne.prototype[e] = function () {
                  var r = this._wrapped;
                  return (
                    null != r && (t.apply(r, arguments), ("shift" !== e && "splice" !== e) || 0 !== r.length || delete r[0]), Xt(this, r)
                  );
                };
              }),
                mt(["concat", "join", "slice"], function (e) {
                  var t = n[e];
                  ne.prototype[e] = function () {
                    var e = this._wrapped;
                    return null != e && (e = t.apply(e, arguments)), Xt(this, e);
                  };
                });
              var Qt = {
                  __proto__: null,
                  VERSION: t,
                  restArguments: x,
                  isObject: j,
                  isNull: function (e) {
                    return null === e;
                  },
                  isUndefined: k,
                  isBoolean: w,
                  isElement: function (e) {
                    return !(!e || 1 !== e.nodeType);
                  },
                  isString: S,
                  isNumber: M,
                  isDate: C,
                  isRegExp: T,
                  isError: E,
                  isSymbol: R,
                  isArrayBuffer: L,
                  isDataView: F,
                  isArray: q,
                  isFunction: I,
                  isArguments: W,
                  isFinite: function (e) {
                    return !R(e) && v(e) && !isNaN(parseFloat(e));
                  },
                  isNaN: G,
                  isTypedArray: Z,
                  isEmpty: function (e) {
                    if (null == e) return !0;
                    var t = Q(e);
                    return "number" == typeof t && (q(e) || S(e) || W(e)) ? 0 === t : 0 === Q(te(e));
                  },
                  isMatch: re,
                  isEqual: function (e, t) {
                    return ue(e, t);
                  },
                  isMap: _e,
                  isWeakMap: ve,
                  isSet: ge,
                  isWeakSet: ye,
                  keys: te,
                  allKeys: se,
                  values: me,
                  pairs: function (e) {
                    for (var t = te(e), r = t.length, n = Array(r), o = 0; o < r; o++) n[o] = [t[o], e[t[o]]];
                    return n;
                  },
                  invert: xe,
                  functions: je,
                  methods: je,
                  extend: we,
                  extendOwn: Oe,
                  assign: Oe,
                  defaults: Se,
                  create: function (e, t) {
                    var r = Me(e);
                    return t && Oe(r, t), r;
                  },
                  clone: Ce,
                  tap: function (e, t) {
                    return t(e), e;
                  },
                  get: Le,
                  has: function (e, t) {
                    for (var r = (t = Ee(t)).length, n = 0; n < r; n++) {
                      var o = t[n];
                      if (!U(e, o)) return !1;
                      e = e[o];
                    }
                    return !!r;
                  },
                  mapObject: function (e, t, r) {
                    t = Ne(t, r);
                    for (var n = te(e), o = n.length, i = {}, u = 0; u < o; u++) {
                      var a = n[u];
                      i[a] = t(e[a], a, e);
                    }
                    return i;
                  },
                  identity: Ae,
                  constant: $,
                  noop: Fe,
                  toPath: Te,
                  property: Ie,
                  propertyOf: function (e) {
                    return null == e
                      ? Fe
                      : function (t) {
                          return Le(e, t);
                        };
                  },
                  matcher: Pe,
                  matches: Pe,
                  times: function (e, t, r) {
                    var n = Array(Math.max(0, e));
                    t = De(t, r, 1);
                    for (var o = 0; o < e; o++) n[o] = t(o);
                    return n;
                  },
                  random: qe,
                  now: Ue,
                  escape: Ge,
                  unescape: $e,
                  templateSettings: Ke,
                  template: function (e, t, r) {
                    !t && r && (t = r), (t = Se({}, t, ne.templateSettings));
                    var n = RegExp(
                        [(t.escape || He).source, (t.interpolate || He).source, (t.evaluate || He).source].join("|") + "|$",
                        "g"
                      ),
                      o = 0,
                      i = "__p+='";
                    e.replace(n, function (t, r, n, u, a) {
                      return (
                        (i += e.slice(o, a).replace(Ye, Xe)),
                        (o = a + t.length),
                        r
                          ? (i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'")
                          : n
                          ? (i += "'+\n((__t=(" + n + "))==null?'':__t)+\n'")
                          : u && (i += "';\n" + u + "\n__p+='"),
                        t
                      );
                    }),
                      (i += "';\n");
                    var u,
                      a = t.variable;
                    if (a) {
                      if (!Ze.test(a)) throw new Error("variable is not a bare identifier: " + a);
                    } else (i = "with(obj||{}){\n" + i + "}\n"), (a = "obj");
                    i = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
                    try {
                      u = new Function(a, "_", i);
                    } catch (e) {
                      throw ((e.source = i), e);
                    }
                    var s = function (e) {
                      return u.call(this, e, ne);
                    };
                    return (s.source = "function(" + a + "){\n" + i + "}"), s;
                  },
                  result: function (e, t, r) {
                    var n = (t = Ee(t)).length;
                    if (!n) return I(r) ? r.call(e) : r;
                    for (var o = 0; o < n; o++) {
                      var i = null == e ? void 0 : e[t[o]];
                      void 0 === i && ((i = r), (o = n)), (e = I(i) ? i.call(e) : i);
                    }
                    return e;
                  },
                  uniqueId: function (e) {
                    var t = ++Qe + "";
                    return e ? e + t : t;
                  },
                  chain: function (e) {
                    var t = ne(e);
                    return (t._chain = !0), t;
                  },
                  iteratee: ze,
                  partial: tt,
                  bind: rt,
                  bindAll: it,
                  memoize: function (e, t) {
                    var r = function (n) {
                      var o = r.cache,
                        i = "" + (t ? t.apply(this, arguments) : n);
                      return U(o, i) || (o[i] = e.apply(this, arguments)), o[i];
                    };
                    return (r.cache = {}), r;
                  },
                  delay: ut,
                  defer: at,
                  throttle: function (e, t, r) {
                    var n,
                      o,
                      i,
                      u,
                      a = 0;
                    r || (r = {});
                    var s = function () {
                        (a = !1 === r.leading ? 0 : Ue()), (n = null), (u = e.apply(o, i)), n || (o = i = null);
                      },
                      c = function () {
                        var c = Ue();
                        a || !1 !== r.leading || (a = c);
                        var l = t - (c - a);
                        return (
                          (o = this),
                          (i = arguments),
                          l <= 0 || l > t
                            ? (n && (clearTimeout(n), (n = null)), (a = c), (u = e.apply(o, i)), n || (o = i = null))
                            : n || !1 === r.trailing || (n = setTimeout(s, l)),
                          u
                        );
                      };
                    return (
                      (c.cancel = function () {
                        clearTimeout(n), (a = 0), (n = o = i = null);
                      }),
                      c
                    );
                  },
                  debounce: function (e, t, r) {
                    var n,
                      o,
                      i,
                      u,
                      a,
                      s = function () {
                        var c = Ue() - o;
                        t > c ? (n = setTimeout(s, t - c)) : ((n = null), r || (u = e.apply(a, i)), n || (i = a = null));
                      },
                      c = x(function (c) {
                        return (a = this), (i = c), (o = Ue()), n || ((n = setTimeout(s, t)), r && (u = e.apply(a, i))), u;
                      });
                    return (
                      (c.cancel = function () {
                        clearTimeout(n), (n = i = a = null);
                      }),
                      c
                    );
                  },
                  wrap: function (e, t) {
                    return tt(t, e);
                  },
                  negate: st,
                  compose: function () {
                    var e = arguments,
                      t = e.length - 1;
                    return function () {
                      for (var r = t, n = e[t].apply(this, arguments); r--; ) n = e[r].call(this, n);
                      return n;
                    };
                  },
                  after: function (e, t) {
                    return function () {
                      if (--e < 1) return t.apply(this, arguments);
                    };
                  },
                  before: ct,
                  once: lt,
                  findKey: ft,
                  findIndex: ht,
                  findLastIndex: dt,
                  sortedIndex: bt,
                  indexOf: vt,
                  lastIndexOf: gt,
                  find: yt,
                  detect: yt,
                  findWhere: function (e, t) {
                    return yt(e, Pe(t));
                  },
                  each: mt,
                  forEach: mt,
                  map: xt,
                  collect: xt,
                  reduce: kt,
                  foldl: kt,
                  inject: kt,
                  reduceRight: wt,
                  foldr: wt,
                  filter: Ot,
                  select: Ot,
                  reject: function (e, t, r) {
                    return Ot(e, st(Ne(t)), r);
                  },
                  every: St,
                  all: St,
                  some: Mt,
                  any: Mt,
                  contains: Ct,
                  includes: Ct,
                  include: Ct,
                  invoke: Tt,
                  pluck: Et,
                  where: function (e, t) {
                    return Ot(e, Pe(t));
                  },
                  max: Rt,
                  min: function (e, t, r) {
                    var n,
                      o,
                      i = 1 / 0,
                      u = 1 / 0;
                    if (null == t || ("number" == typeof t && "object" != typeof e[0] && null != e))
                      for (var a = 0, s = (e = nt(e) ? e : me(e)).length; a < s; a++) null != (n = e[a]) && n < i && (i = n);
                    else
                      (t = Ne(t, r)),
                        mt(e, function (e, r, n) {
                          ((o = t(e, r, n)) < u || (o === 1 / 0 && i === 1 / 0)) && ((i = e), (u = o));
                        });
                    return i;
                  },
                  shuffle: function (e) {
                    return Lt(e, 1 / 0);
                  },
                  sample: Lt,
                  sortBy: function (e, t, r) {
                    var n = 0;
                    return (
                      (t = Ne(t, r)),
                      Et(
                        xt(e, function (e, r, o) {
                          return { value: e, index: n++, criteria: t(e, r, o) };
                        }).sort(function (e, t) {
                          var r = e.criteria,
                            n = t.criteria;
                          if (r !== n) {
                            if (r > n || void 0 === r) return 1;
                            if (r < n || void 0 === n) return -1;
                          }
                          return e.index - t.index;
                        }),
                        "value"
                      )
                    );
                  },
                  groupBy: Pt,
                  indexBy: It,
                  countBy: Dt,
                  partition: Bt,
                  toArray: function (e) {
                    return e ? (q(e) ? a.call(e) : S(e) ? e.match(zt) : nt(e) ? xt(e, Ae) : me(e)) : [];
                  },
                  size: function (e) {
                    return null == e ? 0 : nt(e) ? e.length : te(e).length;
                  },
                  pick: Ft,
                  omit: qt,
                  first: Vt,
                  head: Vt,
                  take: Vt,
                  initial: Ut,
                  last: function (e, t, r) {
                    return null == e || e.length < 1
                      ? null == t || r
                        ? void 0
                        : []
                      : null == t || r
                      ? e[e.length - 1]
                      : Wt(e, Math.max(0, e.length - t));
                  },
                  rest: Wt,
                  tail: Wt,
                  drop: Wt,
                  compact: function (e) {
                    return Ot(e, Boolean);
                  },
                  flatten: function (e, t) {
                    return ot(e, t, !1);
                  },
                  without: $t,
                  uniq: Kt,
                  unique: Kt,
                  union: Ht,
                  intersection: function (e) {
                    for (var t = [], r = arguments.length, n = 0, o = Q(e); n < o; n++) {
                      var i = e[n];
                      if (!Ct(t, i)) {
                        var u;
                        for (u = 1; u < r && Ct(arguments[u], i); u++);
                        u === r && t.push(i);
                      }
                    }
                    return t;
                  },
                  difference: Gt,
                  unzip: Jt,
                  transpose: Jt,
                  zip: Yt,
                  object: function (e, t) {
                    for (var r = {}, n = 0, o = Q(e); n < o; n++) t ? (r[e[n]] = t[n]) : (r[e[n][0]] = e[n][1]);
                    return r;
                  },
                  range: function (e, t, r) {
                    null == t && ((t = e || 0), (e = 0)), r || (r = t < e ? -1 : 1);
                    for (var n = Math.max(Math.ceil((t - e) / r), 0), o = Array(n), i = 0; i < n; i++, e += r) o[i] = e;
                    return o;
                  },
                  chunk: function (e, t) {
                    if (null == t || t < 1) return [];
                    for (var r = [], n = 0, o = e.length; n < o; ) r.push(a.call(e, n, (n += t)));
                    return r;
                  },
                  mixin: Zt,
                  default: ne
                },
                er = Zt(Qt);
              return (er._ = er), er;
            });
          }).call(this);
        }).call(
          this,
          "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}
        );
      },
      {}
    ],
    66: [
      function (e, t, r) {
        "use strict";
        e("core-js/modules/es6.array.iterator.js"), e("core-js/modules/web.dom.iterable.js");
        class n {
          static initClass() {
            this.prototype.KEY = "LOCALE";
          }
          constructor(e, t) {
            (this.config = e), (this.messenger = t);
          }
          retrieve(e) {
            return this.messenger.publish("bgStorage", { get: this.KEY }, (t) => e(this._getFallback(t || this.getBrowserLocale())));
          }
          store(e) {
            return this.messenger.publish("bgStorage", e ? { set: this.KEY, value: this._getFallback(e) } : { remove: this.KEY });
          }
          getCurrentFallback() {
            return this._getFallback(this.getBrowserLocale());
          }
          _getFallback(e) {
            const t = this._normalizeCase(e);
            return Array.from(this.config.languages).includes(t)
              ? t
              : this.config.language_fallbacks[t.slice(0, 2)] || this.config.default_language;
          }
          getBrowserLocale() {
            return navigator.language || navigator.userLanguage;
          }
          _normalizeCase(e) {
            const t = e.slice(0, 2).toLowerCase();
            return 2 === e.length ? t : `${t}-${e.slice(3, 5).toUpperCase()}`;
          }
        }
        n.initClass(), (t.exports = n);
      },
      { "core-js/modules/es6.array.iterator.js": 57, "core-js/modules/web.dom.iterable.js": 58 }
    ],
    67: [
      function (e, t, r) {
        "use strict";
        const n = e("underscore"),
          o = e("background/localStorage").getInstance(),
          i = "config_overrides",
          u = e("configuration"),
          a = (e, t) => {
            e = e || {};
            for (const r in t)
              if (t.hasOwnProperty(r)) {
                const n = t[r];
                void 0 === e[r] || "object" != typeof n || n instanceof Array ? (e[r] = n) : (e[r] = a(e[r], n));
              }
            return e;
          };
        n.extend(u, {
          getConfigOverrides() {
            try {
              return JSON.parse(o.getItem(i));
            } catch (e) {
              return {};
            }
          },
          setConfigOverrides(e) {
            const t = a(this.getConfigOverrides(), e);
            o.setItem(i, JSON.stringify(t));
          },
          clearConfigOverrides() {
            o.removeItem(i);
          },
          mergeOverrides() {
            a(this, this.getConfigOverrides());
          }
        }),
          (t.exports = u);
      },
      { "background/localStorage": 1, configuration: 2, underscore: 65 }
    ],
    68: [
      function (e, t, r) {
        "use strict";
        const n = e("jquery"),
          o = e("config"),
          i = e("Locale"),
          u = e("content/messagingInterface");
        n(() => {
          const e = new i(o, u),
            t = n("#locale");
          n("#abs-version").text(chrome.runtime.getManifest().version),
            o.languages.forEach((e) => {
              t.append(`<option value="${e}">${e}</option>`);
            }),
            e.retrieve((r) => {
              t.val(r), t.on("change", () => e.store(t.val()));
            }),
            u.publish("ABTestDecider:getParams", {}, (e) => {
              n("#ab-params").val(JSON.stringify(e, null, 2));
            });
        });
      },
      { Locale: 66, config: 67, "content/messagingInterface": 69, jquery: "jquery" }
    ],
    69: [
      function (e, t, r) {
        "use strict";
        const n = e("messenger/Content").getInstance();
        t.exports = n;
      },
      { "messenger/Content": 59 }
    ]
  },
  {},
  [68]
);
