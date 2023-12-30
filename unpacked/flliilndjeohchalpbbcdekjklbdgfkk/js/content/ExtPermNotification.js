/*!
 * © 2016 Avira Operations GmbH & Co. KG. All rights reserved.
 * No part of this extension may be reproduced, stored or transmitted in any
 * form, for any reason or by any means, without the prior permission in writing
 * from the copyright owner. The text, layout, and designs presented are
 * protected by the copyright laws of the United States and international
 * treaties.
 */
!(function e(t, n, i) {
  function a(o, s) {
    if (!n[o]) {
      if (!t[o]) {
        var _ = "function" == typeof require && require;
        if (!s && _) return _(o, !0);
        if (r) return r(o, !0);
        var l = new Error("Cannot find module '" + o + "'");
        throw ((l.code = "MODULE_NOT_FOUND"), l);
      }
      var c = (n[o] = { exports: {} });
      t[o][0].call(
        c.exports,
        function (e) {
          return a(t[o][1][e] || e);
        },
        c,
        c.exports,
        e,
        t,
        n,
        i
      );
    }
    return n[o].exports;
  }
  for (var r = "function" == typeof require && require, o = 0; o < i.length; o++) a(i[o]);
  return a;
})(
  {
    1: [
      function (e, t, n) {
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
            const n = `${t}`;
            this._storage[e] !== n &&
              (Array.from(this._keys).includes(e) || (this._keys.push(e), this._updateLength()),
              (this._storage[e] = n),
              this._persistentStorage.set({ [e]: n }));
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
      { "core-js/modules/es6.array.iterator.js": 58, "core-js/modules/web.dom.iterable.js": 59 }
    ],
    2: [
      function (e, t, n) {
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
            api_client: "abs",
            api_key: "DhwrO06Igpulf142CT6NcUDrKlh4OG4L",
            coupons_domain: "offers.avira.com",
            dnt_disable_timeout: 72e5,
            api_client_promo: "abs_promo",
            api_key_promo: "FaE1BFxmrh9zK5KOF27UiRLAdWoPCZY7",
            promo_display_interval: "3d"
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
      function (e, t, n) {
        "use strict";
        const i = e("jquery"),
          a = e("mustache"),
          r = e("ExtPermNotification.mustache"),
          o = e("content/i18n_loader"),
          s = e("content/messagingInterface"),
          _ = e("content/mixpanel");
        function l() {
          return (
            _.track("Extension Scan Dialog - Accept"),
            s.publish("ExtensionInfo:requestManagementPermissions", {}, (e) => {
              e
                ? (_.track("Extension Scan Dialog - Accept Native"),
                  s.publish("Settings:set", { extension_scan: !0 }),
                  s.publish("bgStorage", { set: "DoNotShowExtensionPermissionAgain", value: !0 }))
                : _.track("Extension Scan Dialog - Decline Native"),
                s.publish("closeEPNotification", {});
            }),
            !1
          );
        }
        function c() {
          return (
            _.track("Extension Scan Dialog - Decline"),
            s.publish("bgStorage", { set: "DoNotShowExtensionPermissionAgain", value: !0 }),
            s.publish("closeEPNotification", {}),
            !1
          );
        }
        o.getLocaleStrings((e) => {
          const t = a.render(r, {}, e),
            n = i("#ExtPermNotification").html(t);
          _.track("Extension Scan Dialog - Show"),
            n.find("#btn-management-permission").click(l),
            n.find("#btn-management-permission-no").click(c),
            n.find(".menu__close").click(() => {
              _.track("Extension Scan Dialog - Close"), s.publish("closeEPNotification", {});
            });
        });
      },
      {
        "ExtPermNotification.mustache": 67,
        "content/i18n_loader": 83,
        "content/messagingInterface": 84,
        "content/mixpanel": 85,
        jquery: "jquery",
        mustache: "mustache"
      }
    ],
    4: [
      function (e, t, n) {
        (t.exports = function (e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {}
    ],
    5: [
      function (e, t, n) {
        (t.exports = function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {}
    ],
    6: [
      function (e, t, n) {
        function i(e, t) {
          for (var n = 0; n < t.length; n++) {
            var i = t[n];
            (i.enumerable = i.enumerable || !1),
              (i.configurable = !0),
              "value" in i && (i.writable = !0),
              Object.defineProperty(e, i.key, i);
          }
        }
        (t.exports = function (e, t, n) {
          return t && i(e.prototype, t), n && i(e, n), e;
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {}
    ],
    7: [
      function (e, t, n) {
        function i(e) {
          return (
            (t.exports = i =
              Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (e) {
                    return e.__proto__ || Object.getPrototypeOf(e);
                  }),
            (t.exports.default = t.exports),
            (t.exports.__esModule = !0),
            i(e)
          );
        }
        (t.exports = i), (t.exports.default = t.exports), (t.exports.__esModule = !0);
      },
      {}
    ],
    8: [
      function (e, t, n) {
        var i = e("./setPrototypeOf.js");
        (t.exports = function (e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && i(e, t);
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      { "./setPrototypeOf.js": 11 }
    ],
    9: [
      function (e, t, n) {
        (t.exports = function (e) {
          return e && e.__esModule ? e : { default: e };
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      {}
    ],
    10: [
      function (e, t, n) {
        var i = e("@babel/runtime/helpers/typeof").default,
          a = e("./assertThisInitialized.js");
        (t.exports = function (e, t) {
          return !t || ("object" !== i(t) && "function" != typeof t) ? a(e) : t;
        }),
          (t.exports.default = t.exports),
          (t.exports.__esModule = !0);
      },
      { "./assertThisInitialized.js": 4, "@babel/runtime/helpers/typeof": 12 }
    ],
    11: [
      function (e, t, n) {
        function i(e, n) {
          return (
            (t.exports = i =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
            (t.exports.default = t.exports),
            (t.exports.__esModule = !0),
            i(e, n)
          );
        }
        (t.exports = i), (t.exports.default = t.exports), (t.exports.__esModule = !0);
      },
      {}
    ],
    12: [
      function (e, t, n) {
        function i(e) {
          return (
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? ((t.exports = i =
                  function (e) {
                    return typeof e;
                  }),
                (t.exports.default = t.exports),
                (t.exports.__esModule = !0))
              : ((t.exports = i =
                  function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                  }),
                (t.exports.default = t.exports),
                (t.exports.__esModule = !0)),
            i(e)
          );
        }
        (t.exports = i), (t.exports.default = t.exports), (t.exports.__esModule = !0);
      },
      {}
    ],
    13: [
      function (e, t, n) {
        t.exports = function (e) {
          if ("function" != typeof e) throw TypeError(e + " is not a function!");
          return e;
        };
      },
      {}
    ],
    14: [
      function (e, t, n) {
        var i = e("./_wks")("unscopables"),
          a = Array.prototype;
        null == a[i] && e("./_hide")(a, i, {}),
          (t.exports = function (e) {
            a[i][e] = !0;
          });
      },
      { "./_hide": 29, "./_wks": 57 }
    ],
    15: [
      function (e, t, n) {
        var i = e("./_is-object");
        t.exports = function (e) {
          if (!i(e)) throw TypeError(e + " is not an object!");
          return e;
        };
      },
      { "./_is-object": 33 }
    ],
    16: [
      function (e, t, n) {
        var i = e("./_to-iobject"),
          a = e("./_to-length"),
          r = e("./_to-absolute-index");
        t.exports = function (e) {
          return function (t, n, o) {
            var s,
              _ = i(t),
              l = a(_.length),
              c = r(o, l);
            if (e && n != n) {
              for (; l > c; ) if ((s = _[c++]) != s) return !0;
            } else for (; l > c; c++) if ((e || c in _) && _[c] === n) return e || c || 0;
            return !e && -1;
          };
        };
      },
      { "./_to-absolute-index": 50, "./_to-iobject": 52, "./_to-length": 53 }
    ],
    17: [
      function (e, t, n) {
        var i = {}.toString;
        t.exports = function (e) {
          return i.call(e).slice(8, -1);
        };
      },
      {}
    ],
    18: [
      function (e, t, n) {
        var i = (t.exports = { version: "2.6.12" });
        "number" == typeof __e && (__e = i);
      },
      {}
    ],
    19: [
      function (e, t, n) {
        var i = e("./_a-function");
        t.exports = function (e, t, n) {
          if ((i(e), void 0 === t)) return e;
          switch (n) {
            case 1:
              return function (n) {
                return e.call(t, n);
              };
            case 2:
              return function (n, i) {
                return e.call(t, n, i);
              };
            case 3:
              return function (n, i, a) {
                return e.call(t, n, i, a);
              };
          }
          return function () {
            return e.apply(t, arguments);
          };
        };
      },
      { "./_a-function": 13 }
    ],
    20: [
      function (e, t, n) {
        t.exports = function (e) {
          if (null == e) throw TypeError("Can't call method on  " + e);
          return e;
        };
      },
      {}
    ],
    21: [
      function (e, t, n) {
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
      { "./_fails": 25 }
    ],
    22: [
      function (e, t, n) {
        var i = e("./_is-object"),
          a = e("./_global").document,
          r = i(a) && i(a.createElement);
        t.exports = function (e) {
          return r ? a.createElement(e) : {};
        };
      },
      { "./_global": 27, "./_is-object": 33 }
    ],
    23: [
      function (e, t, n) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
      },
      {}
    ],
    24: [
      function (e, t, n) {
        var i = e("./_global"),
          a = e("./_core"),
          r = e("./_hide"),
          o = e("./_redefine"),
          s = e("./_ctx"),
          _ = function (e, t, n) {
            var l,
              c,
              u,
              d,
              b = e & _.F,
              p = e & _.G,
              g = e & _.S,
              m = e & _.P,
              f = e & _.B,
              h = p ? i : g ? i[t] || (i[t] = {}) : (i[t] || {}).prototype,
              v = p ? a : a[t] || (a[t] = {}),
              k = v.prototype || (v.prototype = {});
            for (l in (p && (n = t), n))
              (u = ((c = !b && h && void 0 !== h[l]) ? h : n)[l]),
                (d = f && c ? s(u, i) : m && "function" == typeof u ? s(Function.call, u) : u),
                h && o(h, l, u, e & _.U),
                v[l] != u && r(v, l, d),
                m && k[l] != u && (k[l] = u);
          };
        (i.core = a), (_.F = 1), (_.G = 2), (_.S = 4), (_.P = 8), (_.B = 16), (_.W = 32), (_.U = 64), (_.R = 128), (t.exports = _);
      },
      { "./_core": 18, "./_ctx": 19, "./_global": 27, "./_hide": 29, "./_redefine": 46 }
    ],
    25: [
      function (e, t, n) {
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
    26: [
      function (e, t, n) {
        t.exports = e("./_shared")("native-function-to-string", Function.toString);
      },
      { "./_shared": 49 }
    ],
    27: [
      function (e, t, n) {
        var i = (t.exports =
          "undefined" != typeof window && window.Math == Math
            ? window
            : "undefined" != typeof self && self.Math == Math
            ? self
            : Function("return this")());
        "number" == typeof __g && (__g = i);
      },
      {}
    ],
    28: [
      function (e, t, n) {
        var i = {}.hasOwnProperty;
        t.exports = function (e, t) {
          return i.call(e, t);
        };
      },
      {}
    ],
    29: [
      function (e, t, n) {
        var i = e("./_object-dp"),
          a = e("./_property-desc");
        t.exports = e("./_descriptors")
          ? function (e, t, n) {
              return i.f(e, t, a(1, n));
            }
          : function (e, t, n) {
              return (e[t] = n), e;
            };
      },
      { "./_descriptors": 21, "./_object-dp": 40, "./_property-desc": 45 }
    ],
    30: [
      function (e, t, n) {
        var i = e("./_global").document;
        t.exports = i && i.documentElement;
      },
      { "./_global": 27 }
    ],
    31: [
      function (e, t, n) {
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
      { "./_descriptors": 21, "./_dom-create": 22, "./_fails": 25 }
    ],
    32: [
      function (e, t, n) {
        var i = e("./_cof");
        t.exports = Object("z").propertyIsEnumerable(0)
          ? Object
          : function (e) {
              return "String" == i(e) ? e.split("") : Object(e);
            };
      },
      { "./_cof": 17 }
    ],
    33: [
      function (e, t, n) {
        t.exports = function (e) {
          return "object" == typeof e ? null !== e : "function" == typeof e;
        };
      },
      {}
    ],
    34: [
      function (e, t, n) {
        "use strict";
        var i = e("./_object-create"),
          a = e("./_property-desc"),
          r = e("./_set-to-string-tag"),
          o = {};
        e("./_hide")(o, e("./_wks")("iterator"), function () {
          return this;
        }),
          (t.exports = function (e, t, n) {
            (e.prototype = i(o, { next: a(1, n) })), r(e, t + " Iterator");
          });
      },
      { "./_hide": 29, "./_object-create": 39, "./_property-desc": 45, "./_set-to-string-tag": 47, "./_wks": 57 }
    ],
    35: [
      function (e, t, n) {
        "use strict";
        var i = e("./_library"),
          a = e("./_export"),
          r = e("./_redefine"),
          o = e("./_hide"),
          s = e("./_iterators"),
          _ = e("./_iter-create"),
          l = e("./_set-to-string-tag"),
          c = e("./_object-gpo"),
          u = e("./_wks")("iterator"),
          d = !([].keys && "next" in [].keys()),
          b = "keys",
          p = "values",
          g = function () {
            return this;
          };
        t.exports = function (e, t, n, m, f, h, v) {
          _(n, t, m);
          var k,
            w,
            y,
            x = function (e) {
              if (!d && e in T) return T[e];
              switch (e) {
                case b:
                case p:
                  return function () {
                    return new n(this, e);
                  };
              }
              return function () {
                return new n(this, e);
              };
            },
            z = t + " Iterator",
            A = f == p,
            S = !1,
            T = e.prototype,
            q = T[u] || T["@@iterator"] || (f && T[f]),
            P = q || x(f),
            j = f ? (A ? x("entries") : P) : void 0,
            B = ("Array" == t && T.entries) || q;
          if (
            (B && (y = c(B.call(new e()))) !== Object.prototype && y.next && (l(y, z, !0), i || "function" == typeof y[u] || o(y, u, g)),
            A &&
              q &&
              q.name !== p &&
              ((S = !0),
              (P = function () {
                return q.call(this);
              })),
            (i && !v) || (!d && !S && T[u]) || o(T, u, P),
            (s[t] = P),
            (s[z] = g),
            f)
          )
            if (((k = { values: A ? P : x(p), keys: h ? P : x(b), entries: j }), v)) for (w in k) w in T || r(T, w, k[w]);
            else a(a.P + a.F * (d || S), t, k);
          return k;
        };
      },
      {
        "./_export": 24,
        "./_hide": 29,
        "./_iter-create": 34,
        "./_iterators": 37,
        "./_library": 38,
        "./_object-gpo": 42,
        "./_redefine": 46,
        "./_set-to-string-tag": 47,
        "./_wks": 57
      }
    ],
    36: [
      function (e, t, n) {
        t.exports = function (e, t) {
          return { value: t, done: !!e };
        };
      },
      {}
    ],
    37: [
      function (e, t, n) {
        t.exports = {};
      },
      {}
    ],
    38: [
      function (e, t, n) {
        t.exports = !1;
      },
      {}
    ],
    39: [
      function (e, t, n) {
        var i = e("./_an-object"),
          a = e("./_object-dps"),
          r = e("./_enum-bug-keys"),
          o = e("./_shared-key")("IE_PROTO"),
          s = function () {},
          _ = function () {
            var t,
              n = e("./_dom-create")("iframe"),
              i = r.length;
            for (
              n.style.display = "none",
                e("./_html").appendChild(n),
                n.src = "javascript:",
                (t = n.contentWindow.document).open(),
                t.write("<script>document.F=Object</script>"),
                t.close(),
                _ = t.F;
              i--;

            )
              delete _.prototype[r[i]];
            return _();
          };
        t.exports =
          Object.create ||
          function (e, t) {
            var n;
            return (
              null !== e ? ((s.prototype = i(e)), (n = new s()), (s.prototype = null), (n[o] = e)) : (n = _()), void 0 === t ? n : a(n, t)
            );
          };
      },
      { "./_an-object": 15, "./_dom-create": 22, "./_enum-bug-keys": 23, "./_html": 30, "./_object-dps": 41, "./_shared-key": 48 }
    ],
    40: [
      function (e, t, n) {
        var i = e("./_an-object"),
          a = e("./_ie8-dom-define"),
          r = e("./_to-primitive"),
          o = Object.defineProperty;
        n.f = e("./_descriptors")
          ? Object.defineProperty
          : function (e, t, n) {
              if ((i(e), (t = r(t, !0)), i(n), a))
                try {
                  return o(e, t, n);
                } catch (e) {}
              if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
              return "value" in n && (e[t] = n.value), e;
            };
      },
      { "./_an-object": 15, "./_descriptors": 21, "./_ie8-dom-define": 31, "./_to-primitive": 55 }
    ],
    41: [
      function (e, t, n) {
        var i = e("./_object-dp"),
          a = e("./_an-object"),
          r = e("./_object-keys");
        t.exports = e("./_descriptors")
          ? Object.defineProperties
          : function (e, t) {
              a(e);
              for (var n, o = r(t), s = o.length, _ = 0; s > _; ) i.f(e, (n = o[_++]), t[n]);
              return e;
            };
      },
      { "./_an-object": 15, "./_descriptors": 21, "./_object-dp": 40, "./_object-keys": 44 }
    ],
    42: [
      function (e, t, n) {
        var i = e("./_has"),
          a = e("./_to-object"),
          r = e("./_shared-key")("IE_PROTO"),
          o = Object.prototype;
        t.exports =
          Object.getPrototypeOf ||
          function (e) {
            return (
              (e = a(e)),
              i(e, r)
                ? e[r]
                : "function" == typeof e.constructor && e instanceof e.constructor
                ? e.constructor.prototype
                : e instanceof Object
                ? o
                : null
            );
          };
      },
      { "./_has": 28, "./_shared-key": 48, "./_to-object": 54 }
    ],
    43: [
      function (e, t, n) {
        var i = e("./_has"),
          a = e("./_to-iobject"),
          r = e("./_array-includes")(!1),
          o = e("./_shared-key")("IE_PROTO");
        t.exports = function (e, t) {
          var n,
            s = a(e),
            _ = 0,
            l = [];
          for (n in s) n != o && i(s, n) && l.push(n);
          for (; t.length > _; ) i(s, (n = t[_++])) && (~r(l, n) || l.push(n));
          return l;
        };
      },
      { "./_array-includes": 16, "./_has": 28, "./_shared-key": 48, "./_to-iobject": 52 }
    ],
    44: [
      function (e, t, n) {
        var i = e("./_object-keys-internal"),
          a = e("./_enum-bug-keys");
        t.exports =
          Object.keys ||
          function (e) {
            return i(e, a);
          };
      },
      { "./_enum-bug-keys": 23, "./_object-keys-internal": 43 }
    ],
    45: [
      function (e, t, n) {
        t.exports = function (e, t) {
          return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
        };
      },
      {}
    ],
    46: [
      function (e, t, n) {
        var i = e("./_global"),
          a = e("./_hide"),
          r = e("./_has"),
          o = e("./_uid")("src"),
          s = e("./_function-to-string"),
          _ = "toString",
          l = ("" + s).split(_);
        (e("./_core").inspectSource = function (e) {
          return s.call(e);
        }),
          (t.exports = function (e, t, n, s) {
            var _ = "function" == typeof n;
            _ && (r(n, "name") || a(n, "name", t)),
              e[t] !== n &&
                (_ && (r(n, o) || a(n, o, e[t] ? "" + e[t] : l.join(String(t)))),
                e === i ? (e[t] = n) : s ? (e[t] ? (e[t] = n) : a(e, t, n)) : (delete e[t], a(e, t, n)));
          })(Function.prototype, _, function () {
            return ("function" == typeof this && this[o]) || s.call(this);
          });
      },
      { "./_core": 18, "./_function-to-string": 26, "./_global": 27, "./_has": 28, "./_hide": 29, "./_uid": 56 }
    ],
    47: [
      function (e, t, n) {
        var i = e("./_object-dp").f,
          a = e("./_has"),
          r = e("./_wks")("toStringTag");
        t.exports = function (e, t, n) {
          e && !a((e = n ? e : e.prototype), r) && i(e, r, { configurable: !0, value: t });
        };
      },
      { "./_has": 28, "./_object-dp": 40, "./_wks": 57 }
    ],
    48: [
      function (e, t, n) {
        var i = e("./_shared")("keys"),
          a = e("./_uid");
        t.exports = function (e) {
          return i[e] || (i[e] = a(e));
        };
      },
      { "./_shared": 49, "./_uid": 56 }
    ],
    49: [
      function (e, t, n) {
        var i = e("./_core"),
          a = e("./_global"),
          r = "__core-js_shared__",
          o = a[r] || (a[r] = {});
        (t.exports = function (e, t) {
          return o[e] || (o[e] = void 0 !== t ? t : {});
        })("versions", []).push({
          version: i.version,
          mode: e("./_library") ? "pure" : "global",
          copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
        });
      },
      { "./_core": 18, "./_global": 27, "./_library": 38 }
    ],
    50: [
      function (e, t, n) {
        var i = e("./_to-integer"),
          a = Math.max,
          r = Math.min;
        t.exports = function (e, t) {
          return (e = i(e)) < 0 ? a(e + t, 0) : r(e, t);
        };
      },
      { "./_to-integer": 51 }
    ],
    51: [
      function (e, t, n) {
        var i = Math.ceil,
          a = Math.floor;
        t.exports = function (e) {
          return isNaN((e = +e)) ? 0 : (e > 0 ? a : i)(e);
        };
      },
      {}
    ],
    52: [
      function (e, t, n) {
        var i = e("./_iobject"),
          a = e("./_defined");
        t.exports = function (e) {
          return i(a(e));
        };
      },
      { "./_defined": 20, "./_iobject": 32 }
    ],
    53: [
      function (e, t, n) {
        var i = e("./_to-integer"),
          a = Math.min;
        t.exports = function (e) {
          return e > 0 ? a(i(e), 9007199254740991) : 0;
        };
      },
      { "./_to-integer": 51 }
    ],
    54: [
      function (e, t, n) {
        var i = e("./_defined");
        t.exports = function (e) {
          return Object(i(e));
        };
      },
      { "./_defined": 20 }
    ],
    55: [
      function (e, t, n) {
        var i = e("./_is-object");
        t.exports = function (e, t) {
          if (!i(e)) return e;
          var n, a;
          if (t && "function" == typeof (n = e.toString) && !i((a = n.call(e)))) return a;
          if ("function" == typeof (n = e.valueOf) && !i((a = n.call(e)))) return a;
          if (!t && "function" == typeof (n = e.toString) && !i((a = n.call(e)))) return a;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      { "./_is-object": 33 }
    ],
    56: [
      function (e, t, n) {
        var i = 0,
          a = Math.random();
        t.exports = function (e) {
          return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++i + a).toString(36));
        };
      },
      {}
    ],
    57: [
      function (e, t, n) {
        var i = e("./_shared")("wks"),
          a = e("./_uid"),
          r = e("./_global").Symbol,
          o = "function" == typeof r;
        (t.exports = function (e) {
          return i[e] || (i[e] = (o && r[e]) || (o ? r : a)("Symbol." + e));
        }).store = i;
      },
      { "./_global": 27, "./_shared": 49, "./_uid": 56 }
    ],
    58: [
      function (e, t, n) {
        "use strict";
        var i = e("./_add-to-unscopables"),
          a = e("./_iter-step"),
          r = e("./_iterators"),
          o = e("./_to-iobject");
        (t.exports = e("./_iter-define")(
          Array,
          "Array",
          function (e, t) {
            (this._t = o(e)), (this._i = 0), (this._k = t);
          },
          function () {
            var e = this._t,
              t = this._k,
              n = this._i++;
            return !e || n >= e.length ? ((this._t = void 0), a(1)) : a(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]]);
          },
          "values"
        )),
          (r.Arguments = r.Array),
          i("keys"),
          i("values"),
          i("entries");
      },
      { "./_add-to-unscopables": 14, "./_iter-define": 35, "./_iter-step": 36, "./_iterators": 37, "./_to-iobject": 52 }
    ],
    59: [
      function (e, t, n) {
        for (
          var i = e("./es6.array.iterator"),
            a = e("./_object-keys"),
            r = e("./_redefine"),
            o = e("./_global"),
            s = e("./_hide"),
            _ = e("./_iterators"),
            l = e("./_wks"),
            c = l("iterator"),
            u = l("toStringTag"),
            d = _.Array,
            b = {
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
            p = a(b),
            g = 0;
          g < p.length;
          g++
        ) {
          var m,
            f = p[g],
            h = b[f],
            v = o[f],
            k = v && v.prototype;
          if (k && (k[c] || s(k, c, d), k[u] || s(k, u, f), (_[f] = d), h)) for (m in i) k[m] || r(k, m, i[m], !0);
        }
      },
      {
        "./_global": 27,
        "./_hide": 29,
        "./_iterators": 37,
        "./_object-keys": 44,
        "./_redefine": 46,
        "./_wks": 57,
        "./es6.array.iterator": 58
      }
    ],
    60: [
      function (e, t, n) {
        "use strict";
        t.exports = e("./src/ContentMessenger");
      },
      { "./src/ContentMessenger": 61 }
    ],
    61: [
      function (e, t, n) {
        "use strict";
        var i = e("@babel/runtime/helpers/interopRequireDefault"),
          a = i(e("@babel/runtime/helpers/classCallCheck")),
          r = i(e("@babel/runtime/helpers/createClass")),
          o = i(e("@babel/runtime/helpers/assertThisInitialized")),
          s = i(e("@babel/runtime/helpers/inherits")),
          _ = i(e("@babel/runtime/helpers/possibleConstructorReturn")),
          l = i(e("@babel/runtime/helpers/getPrototypeOf"));
        function c(e) {
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
            var n,
              i = (0, l.default)(e);
            if (t) {
              var a = (0, l.default)(this).constructor;
              n = Reflect.construct(i, arguments, a);
            } else n = i.apply(this, arguments);
            return (0, _.default)(this, n);
          };
        }
        var u = e("./Messenger"),
          d = e("./ContentTopic"),
          b = e("./chrome"),
          p = (function (e) {
            (0, s.default)(n, e);
            var t = c(n);
            function n() {
              var e;
              (0, a.default)(this, n);
              var i = (e = t.call(this, d))._onMessage.bind((0, o.default)(e));
              return (
                b.runtime.onMessage.addListener(i),
                window.addEventListener("unload", function () {
                  b.runtime.onMessage.removeListener(i);
                }),
                b.runtime.connect({ name: "ContentMessenger" }).onDisconnect.addListener(e._onDisconnect.bind((0, o.default)(e))),
                e
              );
            }
            return (
              (0, r.default)(n, [
                {
                  key: "_onMessage",
                  value: function (e, t, n) {
                    if (!t.tab && e.publish) {
                      var i = this._getTopic(e.publish);
                      i && i.publish(e.message, n);
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
                  value: function (e, t, n) {
                    var i = 10;
                    !(function a() {
                      b.runtime.sendMessage({ publish: e, message: t }, function (e) {
                        var t = b.runtime.lastError;
                        t && "Could not establish connection. Receiving end does not exist." === t.message
                          ? (i -= 1) && setTimeout(a, 50)
                          : "function" == typeof n && n(e);
                      });
                    })();
                  }
                }
              ]),
              n
            );
          })(u);
        t.exports = p;
      },
      {
        "./ContentTopic": 62,
        "./Messenger": 63,
        "./chrome": 65,
        "@babel/runtime/helpers/assertThisInitialized": 4,
        "@babel/runtime/helpers/classCallCheck": 5,
        "@babel/runtime/helpers/createClass": 6,
        "@babel/runtime/helpers/getPrototypeOf": 7,
        "@babel/runtime/helpers/inherits": 8,
        "@babel/runtime/helpers/interopRequireDefault": 9,
        "@babel/runtime/helpers/possibleConstructorReturn": 10
      }
    ],
    62: [
      function (e, t, n) {
        "use strict";
        var i = e("@babel/runtime/helpers/interopRequireDefault"),
          a = i(e("@babel/runtime/helpers/classCallCheck")),
          r = i(e("@babel/runtime/helpers/inherits")),
          o = i(e("@babel/runtime/helpers/possibleConstructorReturn")),
          s = i(e("@babel/runtime/helpers/getPrototypeOf"));
        function _(e) {
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
            var n,
              i = (0, s.default)(e);
            if (t) {
              var a = (0, s.default)(this).constructor;
              n = Reflect.construct(i, arguments, a);
            } else n = i.apply(this, arguments);
            return (0, o.default)(this, n);
          };
        }
        var l = e("./Topic"),
          c = e("./chrome"),
          u = (function (e) {
            (0, r.default)(n, e);
            var t = _(n);
            function n(e) {
              var i;
              return (0, a.default)(this, n), (i = t.call(this, e)), c.runtime.sendMessage({ subscribe: e }), i;
            }
            return n;
          })(l);
        t.exports = u;
      },
      {
        "./Topic": 64,
        "./chrome": 65,
        "@babel/runtime/helpers/classCallCheck": 5,
        "@babel/runtime/helpers/getPrototypeOf": 7,
        "@babel/runtime/helpers/inherits": 8,
        "@babel/runtime/helpers/interopRequireDefault": 9,
        "@babel/runtime/helpers/possibleConstructorReturn": 10
      }
    ],
    63: [
      function (e, t, n) {
        "use strict";
        var i = e("@babel/runtime/helpers/interopRequireDefault"),
          a = i(e("@babel/runtime/helpers/classCallCheck")),
          r = i(e("@babel/runtime/helpers/createClass")),
          o = (function () {
            function e(t) {
              (0, a.default)(this, e), (this._topicClass = t), (this._topics = {});
            }
            return (
              (0, r.default)(
                e,
                [
                  {
                    key: "_getTopic",
                    value: function (e, t) {
                      var n = this._topics[e];
                      return !n && t && (this._topics[e] = n = new this._topicClass(e)), n;
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
                    value: function (e, t, n, i) {
                      var a = this._getTopic(e);
                      a && a.publish(t, n, i);
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
        t.exports = o;
      },
      {
        "@babel/runtime/helpers/classCallCheck": 5,
        "@babel/runtime/helpers/createClass": 6,
        "@babel/runtime/helpers/interopRequireDefault": 9
      }
    ],
    64: [
      function (e, t, n) {
        "use strict";
        var i = e("@babel/runtime/helpers/interopRequireDefault"),
          a = i(e("@babel/runtime/helpers/classCallCheck")),
          r = i(e("@babel/runtime/helpers/createClass")),
          o = (function () {
            function e(t) {
              (0, a.default)(this, e), (this._name = t), (this._callbacks = []);
            }
            return (
              (0, r.default)(e, [
                {
                  key: "publish",
                  value: function (e, t) {
                    var n = this._wrapCallback(t);
                    this._callbacks.forEach(function (t) {
                      return t(e, n);
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
        t.exports = o;
      },
      {
        "@babel/runtime/helpers/classCallCheck": 5,
        "@babel/runtime/helpers/createClass": 6,
        "@babel/runtime/helpers/interopRequireDefault": 9
      }
    ],
    65: [
      function (e, t, n) {
        "use strict";
        "undefined" != typeof browser && browser.runtime ? (t.exports = browser) : (t.exports = chrome);
      },
      {}
    ],
    66: [
      function (e, t, n) {
        (function (e) {
          (function () {
            !(function (e, i) {
              "object" == typeof n && void 0 !== t
                ? (t.exports = i())
                : "function" == typeof define && define.amd
                ? define("underscore", i)
                : ((e = "undefined" != typeof globalThis ? globalThis : e || self),
                  (function () {
                    var t = e._,
                      n = (e._ = i());
                    n.noConflict = function () {
                      return (e._ = t), n;
                    };
                  })());
            })(this, function () {
              var t = "1.13.1",
                n =
                  ("object" == typeof self && self.self === self && self) ||
                  ("object" == typeof e && e.global === e && e) ||
                  Function("return this")() ||
                  {},
                i = Array.prototype,
                a = Object.prototype,
                r = "undefined" != typeof Symbol ? Symbol.prototype : null,
                o = i.push,
                s = i.slice,
                _ = a.toString,
                l = a.hasOwnProperty,
                c = "undefined" != typeof ArrayBuffer,
                u = "undefined" != typeof DataView,
                d = Array.isArray,
                b = Object.keys,
                p = Object.create,
                g = c && ArrayBuffer.isView,
                m = isNaN,
                f = isFinite,
                h = !{ toString: null }.propertyIsEnumerable("toString"),
                v = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
                k = Math.pow(2, 53) - 1;
              function w(e, t) {
                return (
                  (t = null == t ? e.length - 1 : +t),
                  function () {
                    for (var n = Math.max(arguments.length - t, 0), i = Array(n), a = 0; a < n; a++) i[a] = arguments[a + t];
                    switch (t) {
                      case 0:
                        return e.call(this, i);
                      case 1:
                        return e.call(this, arguments[0], i);
                      case 2:
                        return e.call(this, arguments[0], arguments[1], i);
                    }
                    var r = Array(t + 1);
                    for (a = 0; a < t; a++) r[a] = arguments[a];
                    return (r[t] = i), e.apply(this, r);
                  }
                );
              }
              function y(e) {
                var t = typeof e;
                return "function" === t || ("object" === t && !!e);
              }
              function x(e) {
                return void 0 === e;
              }
              function z(e) {
                return !0 === e || !1 === e || "[object Boolean]" === _.call(e);
              }
              function A(e) {
                var t = "[object " + e + "]";
                return function (e) {
                  return _.call(e) === t;
                };
              }
              var S = A("String"),
                T = A("Number"),
                q = A("Date"),
                P = A("RegExp"),
                j = A("Error"),
                B = A("Symbol"),
                E = A("ArrayBuffer"),
                C = A("Function"),
                I = n.document && n.document.childNodes;
              "function" != typeof /./ &&
                "object" != typeof Int8Array &&
                "function" != typeof I &&
                (C = function (e) {
                  return "function" == typeof e || !1;
                });
              var O = C,
                D = A("Object"),
                M = u && D(new DataView(new ArrayBuffer(8))),
                L = "undefined" != typeof Map && D(new Map()),
                N = A("DataView");
              var U = M
                  ? function (e) {
                      return null != e && O(e.getInt8) && E(e.buffer);
                    }
                  : N,
                W = d || A("Array");
              function R(e, t) {
                return null != e && l.call(e, t);
              }
              var F = A("Arguments");
              !(function () {
                F(arguments) ||
                  (F = function (e) {
                    return R(e, "callee");
                  });
              })();
              var H = F;
              function G(e) {
                return T(e) && m(e);
              }
              function V(e) {
                return function () {
                  return e;
                };
              }
              function Q(e) {
                return function (t) {
                  var n = e(t);
                  return "number" == typeof n && n >= 0 && n <= k;
                };
              }
              function Z(e) {
                return function (t) {
                  return null == t ? void 0 : t[e];
                };
              }
              var K = Z("byteLength"),
                Y = Q(K),
                J = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
              var $ = c
                  ? function (e) {
                      return g ? g(e) && !U(e) : Y(e) && J.test(_.call(e));
                    }
                  : V(!1),
                X = Z("length");
              function ee(e, t) {
                t = (function (e) {
                  for (var t = {}, n = e.length, i = 0; i < n; ++i) t[e[i]] = !0;
                  return {
                    contains: function (e) {
                      return t[e];
                    },
                    push: function (n) {
                      return (t[n] = !0), e.push(n);
                    }
                  };
                })(t);
                var n = v.length,
                  i = e.constructor,
                  r = (O(i) && i.prototype) || a,
                  o = "constructor";
                for (R(e, o) && !t.contains(o) && t.push(o); n--; ) (o = v[n]) in e && e[o] !== r[o] && !t.contains(o) && t.push(o);
              }
              function te(e) {
                if (!y(e)) return [];
                if (b) return b(e);
                var t = [];
                for (var n in e) R(e, n) && t.push(n);
                return h && ee(e, t), t;
              }
              function ne(e, t) {
                var n = te(t),
                  i = n.length;
                if (null == e) return !i;
                for (var a = Object(e), r = 0; r < i; r++) {
                  var o = n[r];
                  if (t[o] !== a[o] || !(o in a)) return !1;
                }
                return !0;
              }
              function ie(e) {
                return e instanceof ie ? e : this instanceof ie ? void (this._wrapped = e) : new ie(e);
              }
              function ae(e) {
                return new Uint8Array(e.buffer || e, e.byteOffset || 0, K(e));
              }
              (ie.VERSION = t),
                (ie.prototype.value = function () {
                  return this._wrapped;
                }),
                (ie.prototype.valueOf = ie.prototype.toJSON = ie.prototype.value),
                (ie.prototype.toString = function () {
                  return String(this._wrapped);
                });
              var re = "[object DataView]";
              function oe(e, t, n, i) {
                if (e === t) return 0 !== e || 1 / e == 1 / t;
                if (null == e || null == t) return !1;
                if (e != e) return t != t;
                var a = typeof e;
                return ("function" === a || "object" === a || "object" == typeof t) && se(e, t, n, i);
              }
              function se(e, t, n, i) {
                e instanceof ie && (e = e._wrapped), t instanceof ie && (t = t._wrapped);
                var a = _.call(e);
                if (a !== _.call(t)) return !1;
                if (M && "[object Object]" == a && U(e)) {
                  if (!U(t)) return !1;
                  a = re;
                }
                switch (a) {
                  case "[object RegExp]":
                  case "[object String]":
                    return "" + e == "" + t;
                  case "[object Number]":
                    return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;
                  case "[object Date]":
                  case "[object Boolean]":
                    return +e == +t;
                  case "[object Symbol]":
                    return r.valueOf.call(e) === r.valueOf.call(t);
                  case "[object ArrayBuffer]":
                  case re:
                    return se(ae(e), ae(t), n, i);
                }
                var o = "[object Array]" === a;
                if (!o && $(e)) {
                  if (K(e) !== K(t)) return !1;
                  if (e.buffer === t.buffer && e.byteOffset === t.byteOffset) return !0;
                  o = !0;
                }
                if (!o) {
                  if ("object" != typeof e || "object" != typeof t) return !1;
                  var s = e.constructor,
                    l = t.constructor;
                  if (s !== l && !(O(s) && s instanceof s && O(l) && l instanceof l) && "constructor" in e && "constructor" in t) return !1;
                }
                i = i || [];
                for (var c = (n = n || []).length; c--; ) if (n[c] === e) return i[c] === t;
                if ((n.push(e), i.push(t), o)) {
                  if ((c = e.length) !== t.length) return !1;
                  for (; c--; ) if (!oe(e[c], t[c], n, i)) return !1;
                } else {
                  var u,
                    d = te(e);
                  if (((c = d.length), te(t).length !== c)) return !1;
                  for (; c--; ) if (!R(t, (u = d[c])) || !oe(e[u], t[u], n, i)) return !1;
                }
                return n.pop(), i.pop(), !0;
              }
              function _e(e) {
                if (!y(e)) return [];
                var t = [];
                for (var n in e) t.push(n);
                return h && ee(e, t), t;
              }
              function le(e) {
                var t = X(e);
                return function (n) {
                  if (null == n) return !1;
                  var i = _e(n);
                  if (X(i)) return !1;
                  for (var a = 0; a < t; a++) if (!O(n[e[a]])) return !1;
                  return e !== pe || !O(n[ce]);
                };
              }
              var ce = "forEach",
                ue = ["clear", "delete"],
                de = ["get", "has", "set"],
                be = ue.concat(ce, de),
                pe = ue.concat(de),
                ge = ["add"].concat(ue, ce, "has"),
                me = L ? le(be) : A("Map"),
                fe = L ? le(pe) : A("WeakMap"),
                he = L ? le(ge) : A("Set"),
                ve = A("WeakSet");
              function ke(e) {
                for (var t = te(e), n = t.length, i = Array(n), a = 0; a < n; a++) i[a] = e[t[a]];
                return i;
              }
              function we(e) {
                for (var t = {}, n = te(e), i = 0, a = n.length; i < a; i++) t[e[n[i]]] = n[i];
                return t;
              }
              function ye(e) {
                var t = [];
                for (var n in e) O(e[n]) && t.push(n);
                return t.sort();
              }
              function xe(e, t) {
                return function (n) {
                  var i = arguments.length;
                  if ((t && (n = Object(n)), i < 2 || null == n)) return n;
                  for (var a = 1; a < i; a++)
                    for (var r = arguments[a], o = e(r), s = o.length, _ = 0; _ < s; _++) {
                      var l = o[_];
                      (t && void 0 !== n[l]) || (n[l] = r[l]);
                    }
                  return n;
                };
              }
              var ze = xe(_e),
                Ae = xe(te),
                Se = xe(_e, !0);
              function Te(e) {
                if (!y(e)) return {};
                if (p) return p(e);
                var t = function () {};
                t.prototype = e;
                var n = new t();
                return (t.prototype = null), n;
              }
              function qe(e) {
                return y(e) ? (W(e) ? e.slice() : ze({}, e)) : e;
              }
              function Pe(e) {
                return W(e) ? e : [e];
              }
              function je(e) {
                return ie.toPath(e);
              }
              function Be(e, t) {
                for (var n = t.length, i = 0; i < n; i++) {
                  if (null == e) return;
                  e = e[t[i]];
                }
                return n ? e : void 0;
              }
              function Ee(e, t, n) {
                var i = Be(e, je(t));
                return x(i) ? n : i;
              }
              function Ce(e) {
                return e;
              }
              function Ie(e) {
                return (
                  (e = Ae({}, e)),
                  function (t) {
                    return ne(t, e);
                  }
                );
              }
              function Oe(e) {
                return (
                  (e = je(e)),
                  function (t) {
                    return Be(t, e);
                  }
                );
              }
              function De(e, t, n) {
                if (void 0 === t) return e;
                switch (null == n ? 3 : n) {
                  case 1:
                    return function (n) {
                      return e.call(t, n);
                    };
                  case 3:
                    return function (n, i, a) {
                      return e.call(t, n, i, a);
                    };
                  case 4:
                    return function (n, i, a, r) {
                      return e.call(t, n, i, a, r);
                    };
                }
                return function () {
                  return e.apply(t, arguments);
                };
              }
              function Me(e, t, n) {
                return null == e ? Ce : O(e) ? De(e, t, n) : y(e) && !W(e) ? Ie(e) : Oe(e);
              }
              function Le(e, t) {
                return Me(e, t, 1 / 0);
              }
              function Ne(e, t, n) {
                return ie.iteratee !== Le ? ie.iteratee(e, t) : Me(e, t, n);
              }
              function Ue() {}
              function We(e, t) {
                return null == t && ((t = e), (e = 0)), e + Math.floor(Math.random() * (t - e + 1));
              }
              (ie.toPath = Pe), (ie.iteratee = Le);
              var Re =
                Date.now ||
                function () {
                  return new Date().getTime();
                };
              function Fe(e) {
                var t = function (t) {
                    return e[t];
                  },
                  n = "(?:" + te(e).join("|") + ")",
                  i = RegExp(n),
                  a = RegExp(n, "g");
                return function (e) {
                  return (e = null == e ? "" : "" + e), i.test(e) ? e.replace(a, t) : e;
                };
              }
              var He = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
                Ge = Fe(He),
                Ve = Fe(we(He)),
                Qe = (ie.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g }),
                Ze = /(.)^/,
                Ke = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
                Ye = /\\|'|\r|\n|\u2028|\u2029/g;
              function Je(e) {
                return "\\" + Ke[e];
              }
              var $e = /^\s*(\w|\$)+\s*$/;
              var Xe = 0;
              function et(e, t, n, i, a) {
                if (!(i instanceof t)) return e.apply(n, a);
                var r = Te(e.prototype),
                  o = e.apply(r, a);
                return y(o) ? o : r;
              }
              var tt = w(function (e, t) {
                var n = tt.placeholder,
                  i = function () {
                    for (var a = 0, r = t.length, o = Array(r), s = 0; s < r; s++) o[s] = t[s] === n ? arguments[a++] : t[s];
                    for (; a < arguments.length; ) o.push(arguments[a++]);
                    return et(e, i, this, this, o);
                  };
                return i;
              });
              tt.placeholder = ie;
              var nt = w(function (e, t, n) {
                  if (!O(e)) throw new TypeError("Bind must be called on a function");
                  var i = w(function (a) {
                    return et(e, i, t, this, n.concat(a));
                  });
                  return i;
                }),
                it = Q(X);
              function at(e, t, n, i) {
                if (((i = i || []), t || 0 === t)) {
                  if (t <= 0) return i.concat(e);
                } else t = 1 / 0;
                for (var a = i.length, r = 0, o = X(e); r < o; r++) {
                  var s = e[r];
                  if (it(s) && (W(s) || H(s)))
                    if (t > 1) at(s, t - 1, n, i), (a = i.length);
                    else for (var _ = 0, l = s.length; _ < l; ) i[a++] = s[_++];
                  else n || (i[a++] = s);
                }
                return i;
              }
              var rt = w(function (e, t) {
                var n = (t = at(t, !1, !1)).length;
                if (n < 1) throw new Error("bindAll must be passed function names");
                for (; n--; ) {
                  var i = t[n];
                  e[i] = nt(e[i], e);
                }
                return e;
              });
              var ot = w(function (e, t, n) {
                  return setTimeout(function () {
                    return e.apply(null, n);
                  }, t);
                }),
                st = tt(ot, ie, 1);
              function _t(e) {
                return function () {
                  return !e.apply(this, arguments);
                };
              }
              function lt(e, t) {
                var n;
                return function () {
                  return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n;
                };
              }
              var ct = tt(lt, 2);
              function ut(e, t, n) {
                t = Ne(t, n);
                for (var i, a = te(e), r = 0, o = a.length; r < o; r++) if (t(e[(i = a[r])], i, e)) return i;
              }
              function dt(e) {
                return function (t, n, i) {
                  n = Ne(n, i);
                  for (var a = X(t), r = e > 0 ? 0 : a - 1; r >= 0 && r < a; r += e) if (n(t[r], r, t)) return r;
                  return -1;
                };
              }
              var bt = dt(1),
                pt = dt(-1);
              function gt(e, t, n, i) {
                for (var a = (n = Ne(n, i, 1))(t), r = 0, o = X(e); r < o; ) {
                  var s = Math.floor((r + o) / 2);
                  n(e[s]) < a ? (r = s + 1) : (o = s);
                }
                return r;
              }
              function mt(e, t, n) {
                return function (i, a, r) {
                  var o = 0,
                    _ = X(i);
                  if ("number" == typeof r) e > 0 ? (o = r >= 0 ? r : Math.max(r + _, o)) : (_ = r >= 0 ? Math.min(r + 1, _) : r + _ + 1);
                  else if (n && r && _) return i[(r = n(i, a))] === a ? r : -1;
                  if (a != a) return (r = t(s.call(i, o, _), G)) >= 0 ? r + o : -1;
                  for (r = e > 0 ? o : _ - 1; r >= 0 && r < _; r += e) if (i[r] === a) return r;
                  return -1;
                };
              }
              var ft = mt(1, bt, gt),
                ht = mt(-1, pt);
              function vt(e, t, n) {
                var i = (it(e) ? bt : ut)(e, t, n);
                if (void 0 !== i && -1 !== i) return e[i];
              }
              function kt(e, t, n) {
                var i, a;
                if (((t = De(t, n)), it(e))) for (i = 0, a = e.length; i < a; i++) t(e[i], i, e);
                else {
                  var r = te(e);
                  for (i = 0, a = r.length; i < a; i++) t(e[r[i]], r[i], e);
                }
                return e;
              }
              function wt(e, t, n) {
                t = Ne(t, n);
                for (var i = !it(e) && te(e), a = (i || e).length, r = Array(a), o = 0; o < a; o++) {
                  var s = i ? i[o] : o;
                  r[o] = t(e[s], s, e);
                }
                return r;
              }
              function yt(e) {
                var t = function (t, n, i, a) {
                  var r = !it(t) && te(t),
                    o = (r || t).length,
                    s = e > 0 ? 0 : o - 1;
                  for (a || ((i = t[r ? r[s] : s]), (s += e)); s >= 0 && s < o; s += e) {
                    var _ = r ? r[s] : s;
                    i = n(i, t[_], _, t);
                  }
                  return i;
                };
                return function (e, n, i, a) {
                  var r = arguments.length >= 3;
                  return t(e, De(n, a, 4), i, r);
                };
              }
              var xt = yt(1),
                zt = yt(-1);
              function At(e, t, n) {
                var i = [];
                return (
                  (t = Ne(t, n)),
                  kt(e, function (e, n, a) {
                    t(e, n, a) && i.push(e);
                  }),
                  i
                );
              }
              function St(e, t, n) {
                t = Ne(t, n);
                for (var i = !it(e) && te(e), a = (i || e).length, r = 0; r < a; r++) {
                  var o = i ? i[r] : r;
                  if (!t(e[o], o, e)) return !1;
                }
                return !0;
              }
              function Tt(e, t, n) {
                t = Ne(t, n);
                for (var i = !it(e) && te(e), a = (i || e).length, r = 0; r < a; r++) {
                  var o = i ? i[r] : r;
                  if (t(e[o], o, e)) return !0;
                }
                return !1;
              }
              function qt(e, t, n, i) {
                return it(e) || (e = ke(e)), ("number" != typeof n || i) && (n = 0), ft(e, t, n) >= 0;
              }
              var Pt = w(function (e, t, n) {
                var i, a;
                return (
                  O(t) ? (a = t) : ((t = je(t)), (i = t.slice(0, -1)), (t = t[t.length - 1])),
                  wt(e, function (e) {
                    var r = a;
                    if (!r) {
                      if ((i && i.length && (e = Be(e, i)), null == e)) return;
                      r = e[t];
                    }
                    return null == r ? r : r.apply(e, n);
                  })
                );
              });
              function jt(e, t) {
                return wt(e, Oe(t));
              }
              function Bt(e, t, n) {
                var i,
                  a,
                  r = -1 / 0,
                  o = -1 / 0;
                if (null == t || ("number" == typeof t && "object" != typeof e[0] && null != e))
                  for (var s = 0, _ = (e = it(e) ? e : ke(e)).length; s < _; s++) null != (i = e[s]) && i > r && (r = i);
                else
                  (t = Ne(t, n)),
                    kt(e, function (e, n, i) {
                      ((a = t(e, n, i)) > o || (a === -1 / 0 && r === -1 / 0)) && ((r = e), (o = a));
                    });
                return r;
              }
              function Et(e, t, n) {
                if (null == t || n) return it(e) || (e = ke(e)), e[We(e.length - 1)];
                var i = it(e) ? qe(e) : ke(e),
                  a = X(i);
                t = Math.max(Math.min(t, a), 0);
                for (var r = a - 1, o = 0; o < t; o++) {
                  var s = We(o, r),
                    _ = i[o];
                  (i[o] = i[s]), (i[s] = _);
                }
                return i.slice(0, t);
              }
              function Ct(e, t) {
                return function (n, i, a) {
                  var r = t ? [[], []] : {};
                  return (
                    (i = Ne(i, a)),
                    kt(n, function (t, a) {
                      var o = i(t, a, n);
                      e(r, t, o);
                    }),
                    r
                  );
                };
              }
              var It = Ct(function (e, t, n) {
                  R(e, n) ? e[n].push(t) : (e[n] = [t]);
                }),
                Ot = Ct(function (e, t, n) {
                  e[n] = t;
                }),
                Dt = Ct(function (e, t, n) {
                  R(e, n) ? e[n]++ : (e[n] = 1);
                }),
                Mt = Ct(function (e, t, n) {
                  e[n ? 0 : 1].push(t);
                }, !0),
                Lt = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
              function Nt(e, t, n) {
                return t in n;
              }
              var Ut = w(function (e, t) {
                  var n = {},
                    i = t[0];
                  if (null == e) return n;
                  O(i) ? (t.length > 1 && (i = De(i, t[1])), (t = _e(e))) : ((i = Nt), (t = at(t, !1, !1)), (e = Object(e)));
                  for (var a = 0, r = t.length; a < r; a++) {
                    var o = t[a],
                      s = e[o];
                    i(s, o, e) && (n[o] = s);
                  }
                  return n;
                }),
                Wt = w(function (e, t) {
                  var n,
                    i = t[0];
                  return (
                    O(i)
                      ? ((i = _t(i)), t.length > 1 && (n = t[1]))
                      : ((t = wt(at(t, !1, !1), String)),
                        (i = function (e, n) {
                          return !qt(t, n);
                        })),
                    Ut(e, i, n)
                  );
                });
              function Rt(e, t, n) {
                return s.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)));
              }
              function Ft(e, t, n) {
                return null == e || e.length < 1 ? (null == t || n ? void 0 : []) : null == t || n ? e[0] : Rt(e, e.length - t);
              }
              function Ht(e, t, n) {
                return s.call(e, null == t || n ? 1 : t);
              }
              var Gt = w(function (e, t) {
                  return (
                    (t = at(t, !0, !0)),
                    At(e, function (e) {
                      return !qt(t, e);
                    })
                  );
                }),
                Vt = w(function (e, t) {
                  return Gt(e, t);
                });
              function Qt(e, t, n, i) {
                z(t) || ((i = n), (n = t), (t = !1)), null != n && (n = Ne(n, i));
                for (var a = [], r = [], o = 0, s = X(e); o < s; o++) {
                  var _ = e[o],
                    l = n ? n(_, o, e) : _;
                  t && !n ? ((o && r === l) || a.push(_), (r = l)) : n ? qt(r, l) || (r.push(l), a.push(_)) : qt(a, _) || a.push(_);
                }
                return a;
              }
              var Zt = w(function (e) {
                return Qt(at(e, !0, !0));
              });
              function Kt(e) {
                for (var t = (e && Bt(e, X).length) || 0, n = Array(t), i = 0; i < t; i++) n[i] = jt(e, i);
                return n;
              }
              var Yt = w(Kt);
              function Jt(e, t) {
                return e._chain ? ie(t).chain() : t;
              }
              function $t(e) {
                return (
                  kt(ye(e), function (t) {
                    var n = (ie[t] = e[t]);
                    ie.prototype[t] = function () {
                      var e = [this._wrapped];
                      return o.apply(e, arguments), Jt(this, n.apply(ie, e));
                    };
                  }),
                  ie
                );
              }
              kt(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
                var t = i[e];
                ie.prototype[e] = function () {
                  var n = this._wrapped;
                  return (
                    null != n && (t.apply(n, arguments), ("shift" !== e && "splice" !== e) || 0 !== n.length || delete n[0]), Jt(this, n)
                  );
                };
              }),
                kt(["concat", "join", "slice"], function (e) {
                  var t = i[e];
                  ie.prototype[e] = function () {
                    var e = this._wrapped;
                    return null != e && (e = t.apply(e, arguments)), Jt(this, e);
                  };
                });
              var Xt = {
                  __proto__: null,
                  VERSION: t,
                  restArguments: w,
                  isObject: y,
                  isNull: function (e) {
                    return null === e;
                  },
                  isUndefined: x,
                  isBoolean: z,
                  isElement: function (e) {
                    return !(!e || 1 !== e.nodeType);
                  },
                  isString: S,
                  isNumber: T,
                  isDate: q,
                  isRegExp: P,
                  isError: j,
                  isSymbol: B,
                  isArrayBuffer: E,
                  isDataView: U,
                  isArray: W,
                  isFunction: O,
                  isArguments: H,
                  isFinite: function (e) {
                    return !B(e) && f(e) && !isNaN(parseFloat(e));
                  },
                  isNaN: G,
                  isTypedArray: $,
                  isEmpty: function (e) {
                    if (null == e) return !0;
                    var t = X(e);
                    return "number" == typeof t && (W(e) || S(e) || H(e)) ? 0 === t : 0 === X(te(e));
                  },
                  isMatch: ne,
                  isEqual: function (e, t) {
                    return oe(e, t);
                  },
                  isMap: me,
                  isWeakMap: fe,
                  isSet: he,
                  isWeakSet: ve,
                  keys: te,
                  allKeys: _e,
                  values: ke,
                  pairs: function (e) {
                    for (var t = te(e), n = t.length, i = Array(n), a = 0; a < n; a++) i[a] = [t[a], e[t[a]]];
                    return i;
                  },
                  invert: we,
                  functions: ye,
                  methods: ye,
                  extend: ze,
                  extendOwn: Ae,
                  assign: Ae,
                  defaults: Se,
                  create: function (e, t) {
                    var n = Te(e);
                    return t && Ae(n, t), n;
                  },
                  clone: qe,
                  tap: function (e, t) {
                    return t(e), e;
                  },
                  get: Ee,
                  has: function (e, t) {
                    for (var n = (t = je(t)).length, i = 0; i < n; i++) {
                      var a = t[i];
                      if (!R(e, a)) return !1;
                      e = e[a];
                    }
                    return !!n;
                  },
                  mapObject: function (e, t, n) {
                    t = Ne(t, n);
                    for (var i = te(e), a = i.length, r = {}, o = 0; o < a; o++) {
                      var s = i[o];
                      r[s] = t(e[s], s, e);
                    }
                    return r;
                  },
                  identity: Ce,
                  constant: V,
                  noop: Ue,
                  toPath: Pe,
                  property: Oe,
                  propertyOf: function (e) {
                    return null == e
                      ? Ue
                      : function (t) {
                          return Ee(e, t);
                        };
                  },
                  matcher: Ie,
                  matches: Ie,
                  times: function (e, t, n) {
                    var i = Array(Math.max(0, e));
                    t = De(t, n, 1);
                    for (var a = 0; a < e; a++) i[a] = t(a);
                    return i;
                  },
                  random: We,
                  now: Re,
                  escape: Ge,
                  unescape: Ve,
                  templateSettings: Qe,
                  template: function (e, t, n) {
                    !t && n && (t = n), (t = Se({}, t, ie.templateSettings));
                    var i = RegExp(
                        [(t.escape || Ze).source, (t.interpolate || Ze).source, (t.evaluate || Ze).source].join("|") + "|$",
                        "g"
                      ),
                      a = 0,
                      r = "__p+='";
                    e.replace(i, function (t, n, i, o, s) {
                      return (
                        (r += e.slice(a, s).replace(Ye, Je)),
                        (a = s + t.length),
                        n
                          ? (r += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                          : i
                          ? (r += "'+\n((__t=(" + i + "))==null?'':__t)+\n'")
                          : o && (r += "';\n" + o + "\n__p+='"),
                        t
                      );
                    }),
                      (r += "';\n");
                    var o,
                      s = t.variable;
                    if (s) {
                      if (!$e.test(s)) throw new Error("variable is not a bare identifier: " + s);
                    } else (r = "with(obj||{}){\n" + r + "}\n"), (s = "obj");
                    r = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + r + "return __p;\n";
                    try {
                      o = new Function(s, "_", r);
                    } catch (e) {
                      throw ((e.source = r), e);
                    }
                    var _ = function (e) {
                      return o.call(this, e, ie);
                    };
                    return (_.source = "function(" + s + "){\n" + r + "}"), _;
                  },
                  result: function (e, t, n) {
                    var i = (t = je(t)).length;
                    if (!i) return O(n) ? n.call(e) : n;
                    for (var a = 0; a < i; a++) {
                      var r = null == e ? void 0 : e[t[a]];
                      void 0 === r && ((r = n), (a = i)), (e = O(r) ? r.call(e) : r);
                    }
                    return e;
                  },
                  uniqueId: function (e) {
                    var t = ++Xe + "";
                    return e ? e + t : t;
                  },
                  chain: function (e) {
                    var t = ie(e);
                    return (t._chain = !0), t;
                  },
                  iteratee: Le,
                  partial: tt,
                  bind: nt,
                  bindAll: rt,
                  memoize: function (e, t) {
                    var n = function (i) {
                      var a = n.cache,
                        r = "" + (t ? t.apply(this, arguments) : i);
                      return R(a, r) || (a[r] = e.apply(this, arguments)), a[r];
                    };
                    return (n.cache = {}), n;
                  },
                  delay: ot,
                  defer: st,
                  throttle: function (e, t, n) {
                    var i,
                      a,
                      r,
                      o,
                      s = 0;
                    n || (n = {});
                    var _ = function () {
                        (s = !1 === n.leading ? 0 : Re()), (i = null), (o = e.apply(a, r)), i || (a = r = null);
                      },
                      l = function () {
                        var l = Re();
                        s || !1 !== n.leading || (s = l);
                        var c = t - (l - s);
                        return (
                          (a = this),
                          (r = arguments),
                          c <= 0 || c > t
                            ? (i && (clearTimeout(i), (i = null)), (s = l), (o = e.apply(a, r)), i || (a = r = null))
                            : i || !1 === n.trailing || (i = setTimeout(_, c)),
                          o
                        );
                      };
                    return (
                      (l.cancel = function () {
                        clearTimeout(i), (s = 0), (i = a = r = null);
                      }),
                      l
                    );
                  },
                  debounce: function (e, t, n) {
                    var i,
                      a,
                      r,
                      o,
                      s,
                      _ = function () {
                        var l = Re() - a;
                        t > l ? (i = setTimeout(_, t - l)) : ((i = null), n || (o = e.apply(s, r)), i || (r = s = null));
                      },
                      l = w(function (l) {
                        return (s = this), (r = l), (a = Re()), i || ((i = setTimeout(_, t)), n && (o = e.apply(s, r))), o;
                      });
                    return (
                      (l.cancel = function () {
                        clearTimeout(i), (i = r = s = null);
                      }),
                      l
                    );
                  },
                  wrap: function (e, t) {
                    return tt(t, e);
                  },
                  negate: _t,
                  compose: function () {
                    var e = arguments,
                      t = e.length - 1;
                    return function () {
                      for (var n = t, i = e[t].apply(this, arguments); n--; ) i = e[n].call(this, i);
                      return i;
                    };
                  },
                  after: function (e, t) {
                    return function () {
                      if (--e < 1) return t.apply(this, arguments);
                    };
                  },
                  before: lt,
                  once: ct,
                  findKey: ut,
                  findIndex: bt,
                  findLastIndex: pt,
                  sortedIndex: gt,
                  indexOf: ft,
                  lastIndexOf: ht,
                  find: vt,
                  detect: vt,
                  findWhere: function (e, t) {
                    return vt(e, Ie(t));
                  },
                  each: kt,
                  forEach: kt,
                  map: wt,
                  collect: wt,
                  reduce: xt,
                  foldl: xt,
                  inject: xt,
                  reduceRight: zt,
                  foldr: zt,
                  filter: At,
                  select: At,
                  reject: function (e, t, n) {
                    return At(e, _t(Ne(t)), n);
                  },
                  every: St,
                  all: St,
                  some: Tt,
                  any: Tt,
                  contains: qt,
                  includes: qt,
                  include: qt,
                  invoke: Pt,
                  pluck: jt,
                  where: function (e, t) {
                    return At(e, Ie(t));
                  },
                  max: Bt,
                  min: function (e, t, n) {
                    var i,
                      a,
                      r = 1 / 0,
                      o = 1 / 0;
                    if (null == t || ("number" == typeof t && "object" != typeof e[0] && null != e))
                      for (var s = 0, _ = (e = it(e) ? e : ke(e)).length; s < _; s++) null != (i = e[s]) && i < r && (r = i);
                    else
                      (t = Ne(t, n)),
                        kt(e, function (e, n, i) {
                          ((a = t(e, n, i)) < o || (a === 1 / 0 && r === 1 / 0)) && ((r = e), (o = a));
                        });
                    return r;
                  },
                  shuffle: function (e) {
                    return Et(e, 1 / 0);
                  },
                  sample: Et,
                  sortBy: function (e, t, n) {
                    var i = 0;
                    return (
                      (t = Ne(t, n)),
                      jt(
                        wt(e, function (e, n, a) {
                          return { value: e, index: i++, criteria: t(e, n, a) };
                        }).sort(function (e, t) {
                          var n = e.criteria,
                            i = t.criteria;
                          if (n !== i) {
                            if (n > i || void 0 === n) return 1;
                            if (n < i || void 0 === i) return -1;
                          }
                          return e.index - t.index;
                        }),
                        "value"
                      )
                    );
                  },
                  groupBy: It,
                  indexBy: Ot,
                  countBy: Dt,
                  partition: Mt,
                  toArray: function (e) {
                    return e ? (W(e) ? s.call(e) : S(e) ? e.match(Lt) : it(e) ? wt(e, Ce) : ke(e)) : [];
                  },
                  size: function (e) {
                    return null == e ? 0 : it(e) ? e.length : te(e).length;
                  },
                  pick: Ut,
                  omit: Wt,
                  first: Ft,
                  head: Ft,
                  take: Ft,
                  initial: Rt,
                  last: function (e, t, n) {
                    return null == e || e.length < 1
                      ? null == t || n
                        ? void 0
                        : []
                      : null == t || n
                      ? e[e.length - 1]
                      : Ht(e, Math.max(0, e.length - t));
                  },
                  rest: Ht,
                  tail: Ht,
                  drop: Ht,
                  compact: function (e) {
                    return At(e, Boolean);
                  },
                  flatten: function (e, t) {
                    return at(e, t, !1);
                  },
                  without: Vt,
                  uniq: Qt,
                  unique: Qt,
                  union: Zt,
                  intersection: function (e) {
                    for (var t = [], n = arguments.length, i = 0, a = X(e); i < a; i++) {
                      var r = e[i];
                      if (!qt(t, r)) {
                        var o;
                        for (o = 1; o < n && qt(arguments[o], r); o++);
                        o === n && t.push(r);
                      }
                    }
                    return t;
                  },
                  difference: Gt,
                  unzip: Kt,
                  transpose: Kt,
                  zip: Yt,
                  object: function (e, t) {
                    for (var n = {}, i = 0, a = X(e); i < a; i++) t ? (n[e[i]] = t[i]) : (n[e[i][0]] = e[i][1]);
                    return n;
                  },
                  range: function (e, t, n) {
                    null == t && ((t = e || 0), (e = 0)), n || (n = t < e ? -1 : 1);
                    for (var i = Math.max(Math.ceil((t - e) / n), 0), a = Array(i), r = 0; r < i; r++, e += n) a[r] = e;
                    return a;
                  },
                  chunk: function (e, t) {
                    if (null == t || t < 1) return [];
                    for (var n = [], i = 0, a = e.length; i < a; ) n.push(s.call(e, i, (i += t)));
                    return n;
                  },
                  mixin: $t,
                  default: ie
                },
                en = $t(Xt);
              return (en._ = en), en;
            });
          }).call(this);
        }).call(
          this,
          "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}
        );
      },
      {}
    ],
    67: [
      function (e, t, n) {
        t.exports =
          '<div class="box">\n  <ul id="menu" class="menu">\n    <li class="menu__item menu__close"><img src="/img/abs-menu-close.png" alt=""></li>\n  </ul>\n  <header class="header">\n    <img class="header__img" src="/img/abs_logo_small.png" alt="Avira" />\n    <div class="header__text txt--lead">{{> lb_avira_browser_safety }}</div>\n  </header>\n\n  <div class="section ptxl">\n      <div class="txt--center mbm">\n      {{>  lb_extension_permission_notification_extension_description }}\n      </div>\n      <div class="txt--center mbs">\n          <button id="btn-management-permission" class="button button--full management-permission-button" title="{{> lb_extension_permission_notification_extension_permission_title }}">{{> lb_extension_permission_notification_extension_permission_button }}</button>\n      </div>\n      <div class="txt--center">\n           <a id="btn-management-permission-no" class="txt--lead" href="#" title="{{> lb_extension_permission_notification_extension_permission_no_title }}">{{> lb_extension_permission_notification_extension_permission_no_button }}</a>\n      </div>\n\n\n  </div>\n</div>';
      },
      {}
    ],
    68: [
      function (e, t, n) {
        t.exports = {
          lb_safe_website: "Sichere Webseite",
          lb_unsafe_website: "Unsichere Webseite",
          lb_unsafe_content_website: "Unsicherer Inhalt",
          lb_mse_website: "Nicht vertrauenswürdige Suchmaschine",
          lb_trackers_blocked: '{{ count }} Werbeanzeigen und Tracker auf {{ domain }} <span class="txt--green">blockiert</span>',
          lb_trackers_blocked_short: "{{ count }} Werbeanzeigen und Tracker blockiert",
          lb_trackers_block_all: "Auf dieser Webseite blockieren",
          lb_trackers_allow_all: "Werbeanzeigen und Tracker freigeben",
          msg_no_trackers:
            "Es gibt auf dieser Webseite keine Tracker, die Sie verfolgen. Wenn Sie eine Webseite mit aktiven Trackern öffnen, wird hier eine vollständige Liste der Tracker angezeigt.",
          msg_trackers_tooltip:
            "Das sind alle Tracker der aktuell geöffneten Webseite. Sie können einen Tracker blockieren, indem Sie den nebenstehenden Regler klicken. Ist die Farbe des Reglers grün, wird der dazugehörige Tracker blockiert und kann Ihr Surfverhalten nicht verfolgen. Beachten Sie, dass manche Tracker standardmäßig erlaubt sind. Ein Blockieren dieser Tracker kann dazu führen, dass die Webseite nicht ordnungsgemäß funktioniert.",
          lb_settings: "Einstellungen",
          lb_setting_offers: "Preisvergleich anzeigen",
          lb_setting_tooltip_offers:
            "Für die Artikel, an denen Sie interessiert sind, werden bessere Angebote ausschließlich von sicheren Webseiten angezeigt.",
          lb_setting_dnt_header: "Do-Not-Track-Header senden",
          lb_setting_tooltip_dnt_header:
            "Fordern Sie Webseiten auf, Sie nicht zu verfolgen. Falls Ihre Aufforderung ignoriert wird, blockiert ABS weiterhin alle Tracker.",
          lb_setting_top_bar: "Sicherheitsleiste anzeigen",
          lb_setting_block_trackers: "Tracker standardmäßig blockieren",
          lb_setting_tooltip_block_trackers: "Schützen Sie Ihre Privatsphäre, indem Sie Tracker standardmäßig blockieren.",
          lb_setting_cliqz: "Sichere Suche mit CLIQZ",
          lb_setting_tooltip_cliqz:
            "Schon während Sie in der Adressleiste Ihres Browsers tippen, schlägt CLIQZ Ihnen Webseiten und relevante Informationen vor. Dadurch suchen Sie effizienter, schneller und sicherer.",
          lb_setting_privacy_badger: "Privacy Badger",
          lb_setting_tooltip_privacy_badger:
            "Privacy Badger blockiert Werbeanzeigen und Tracker, die Sie ohne Ihre Erlaubnis heimlich ausspionieren wollen.",
          lb_setting_https_everywhere: "HTTPS Everywhere",
          lb_setting_tooltip_https_everywhere: "HTTPS Everywhere verschlüsselt Ihre gesamte Kommunikation und schützt Sie beim Surfen.",
          lb_setting_inAppTracking: "Anonymisierte Statistik",
          lb_setting_tooltip_inAppTracking: "Helfen Sie, unsere Produkte zu verbessern, indem Sie Daten anonym mit uns teilen.",
          lb_setting_show_advanced_controls: "Mehr Steuerelemente anzeigen",
          lb_setting_tooltip_show_advanced_controls: "Zeigt Privacy Badger und HTTPS Everywhere in der Symbolleiste.",
          lb_setting_google_services: "Google-Dienste",
          lb_setting_adguard: "Werbeanzeigen und Web-Tracking blockieren",
          lb_setting_tooltip_adguard:
            "Schützt Ihre Privatsphäre, indem andere daran gehindert werden, Ihre Online-Aktivität zu überwachen. Blockiert auch aufdringliche Pop-ups, Webbanner, Videoanzeigen und mehr.",
          lb_setting_adguard_social_media: "Tracking durch soziale Medien blockieren",
          lb_setting_tooltip_adguard_social_media:
            "Deaktiviert Social-Media-Schaltflächen und Widgets auf Webseiten, sodass soziale Netzwerke nicht verfolgen können, welche Webseiten Sie besuchen.",
          lb_setting_adguard_useful_ads: "Nützliche Werbe-Anzeigen nicht blockieren",
          lb_setting_tooltip_adguard_useful_ads:
            "Relevante, nicht aufdringliche Anzeigen können in Ihren Suchergebnissen angezeigt werden.",
          lb_setting_extension_scan: "Analyse der Erweiterungen",
          lb_setting_tooltip_extension_scan:
            "Aktivieren um einen anonymisierten Bericht an Avira zu senden, wenn eine verdächtige Aktivitäten während dem Surfen festgestellt wurde.",
          lb_setting_dark_mode: "Dunkelmodus",
          lb_setting_tooltip_dark_mode: "Dunkelmodus ein/aus",
          btn_blocking_back: "Seite verlassen",
          lb_blocking_options: "Weitere Optionen",
          lb_blocking_add_exception: "Diese Webseite nie blockieren",
          btn_blocking_continue: "Trotzdem fortfahren",
          btn_dash_classification_cb_exception: "Diese Webseite nie blockieren",
          lb_dash_classification_exception_info_add: "Ausnahme wird hinzugefügt",
          msg_dash_classification_exception_info_add:
            "Diese Seite ist zur Zeit NICHT auf Ihrer Ausnahmeliste. Wenn Sie eine Ausnahme hinzufügen, wird diese Web-Adresse bei Zugriff nicht mehr blockiert. Die Warnung am oberen Bildschirmrand bleibt jedoch bestehen.",
          lb_dash_classification_exception_info_remove: "Ausnahme wird entfernt",
          msg_dash_classification_exception_info_remove:
            "Diese Seite befindet zur Zeit auf Ihrer Ausnahmeliste. Wenn Sie die Ausnahme entfernen, wird diese Web-Adresse bei Zugriff immer blockiert.",
          lb_privacy: "Datenschutz",
          lnk_privacy: "https://www.avira.com/de/general-privacy",
          lb_eula: "Endbenutzer-Lizenzvereinbarung",
          lnk_eula: "https://www.avira.com/de/license-agreement-terms-of-use",
          lb_discover_mode: "Entdecken Sie mehr",
          lb_feedback: "Feedback",
          lb_feedback_question: "Wie bewerten Sie Ihre Erfahrung?",
          lb_feedback_send: "Senden",
          lb_feedback_send_title: "Anonymes Feedback an Avira senden",
          lb_feedback_thank_you: "Vielen Dank!",
          lb_feedback_thank_you_feedback: "Vielen Dank für Ihr Feedback",
          lb_feedback_help_improve: "Ihr Feedback hilft uns, die App zu verbessern",
          lb_feedback_rate_store: "Hätten Sie einen Moment Zeit, {0} im {1}-Store zu bewerten?",
          lb_feedback_ok: "OK",
          lb_feedback_rate_now: "Jetzt bewerten",
          lb_feedback_later: "Später",
          lb_rate: "App bewerten",
          lb_dash_pua_action_cancel: "Download abbrechen",
          msg_mse_bar_warning: "Die Einstellungen Ihrer Suchmaschine wurden wahrscheinlich manipuliert.",
          lb_mse_take_me_away: "Seite verlassen!",
          lnk_avira: "https://www.avira.com/de/",
          lb_mse_hide_warning: "Ich vertraue dieser Suchmaschine",
          msg_blocked_iframe_replacement: "Unsicherer Inhalt",
          lb_unsafe_content_bar_warning: "Avira Browser Safety verhindert, dass unsicherer Inhalt auf dieser Webseite geladen wird.",
          lb_unsafe_content_bar_ignore: "Diese Meldung nicht mehr anzeigen",
          lb_extension_permission_notification_extension_description:
            "Die Avira Browserschutz Erweiterung benötigt ihre Zustimmung um einen Bericht über verdächtige Aktivitäten an Avira zusenden.",
          lb_extension_permission_notification_extension_permission_title:
            "Aktivieren um einen anonymisierten Bericht an Avira zu senden, wenn eine verdächtige Aktivitäten während dem Surfen festgestellt wurde.",
          lb_extension_permission_notification_extension_permission_button: "Erlauben",
          lb_extension_permission_notification_extension_permission_no_title:
            "Diese Funktion kann später in den Einstellungen aktiviert werden.",
          lb_extension_permission_notification_extension_permission_no_button: "Nicht erneut fragen",
          lb_unsafe_content: "Unsicherer Inhalt",
          msg_dash_unsafe_content_details_no_exception: "Blockierter unsicherer Inhalt:",
          msg_dash_unsafe_content_details_exception: "Unsicherer Inhalt blockiert",
          msg_dash_unsafe_content_risk_no_exception: "Aus Sicherheitsgründen wird empfohlen, die Blockierung des Inhalts beizubehalten.",
          msg_dash_unsafe_content_risk_exception:
            "Aus Sicherheitsgründen wird empfohlen, die Ausnahme zu entfernen und damit den unsicheren Inhalt zu blockieren.",
          lb_dash_unsafe_content_show_details: "Technische Details",
          lb_dash_unsafe_content_hide_details: "Ausblenden",
          msg_category_unknown: "Es wurden keine Informationen für diese Webseite gefunden.",
          msg_category_safe: "Keine bekannten Bedrohungen.",
          msg_category_malware: "Dies ist eine Malware-Webseite",
          msg_category_malware_sub: "Malware-Webseiten infizieren Ihr Gerät und können Viren, Würmer, Spyware und Trojaner enthalten.",
          msg_category_phishing: "Dies ist eine Phishing-Webseite",
          msg_category_phishing_sub:
            "Phishing-Webseiten versuchen, Sie durch Täuschung dazu zu verleiten, persönliche Informationen wie Kennwörter und Kontoinformationen preiszugeben.",
          msg_category_spam: "Dies ist eine Spam-Webseite",
          msg_category_spam_sub: "Spam-Webseiten verwenden Ihre E-Mail-Adresse, um Ihnen Werbung per E-Mail zu senden.",
          msg_category_pua: "Der Download enthält Potenziell Unerwünschte Anwendungen.",
          msg_category_pua2: "Diese Webseite verbreitet PUA",
          msg_category_pua2_sub:
            "Potenziell Unerwünschte Anwendungen (PUA) zeigen unerwünschtes Verhalten oder beinhalten unerwünschte Funktionen.",
          msg_category_mse: "Nicht vertrauenswürdige Suchmaschine",
          msg_category_mse_sub:
            "Dieser Suchmaschine wird nicht vertraut, da bekannt ist, dass Malware und Potenziell Unerwünschte Anwendungen Datenverkehr dorthin umleiten.",
          msg_category_unsafe_content: "Unsicherer Inhalt blockiert",
          msg_category_unsafe_content_sub:
            "Webseiten laden unsicheren Inhalt, wenn beeinträchtigter oder externer Inhalt gehackt wurde oder vorsätzlich schädlich ist.",
          msg_what_is_pua: "Was bedeutet PUA?",
          lnk_what_is_pua: "https://www.avira.com/de-de/potentially-unwanted-applications",
          lb_tab_privacy: "Privatsphäre",
          lb_tab_security: "Sicherheit",
          lb_my_modes: "Modi",
          msg_mode_select: "Wählen Sie den Modus, der <br/>Ihren Anforderungen entspricht",
          "lb_mode_safe-surfing": "Sicheres Surfen",
          "lb_mode_safe-private": "Sicher und privat",
          lb_mode_custom: "Benutzerdefiniert",
          lb_powered_by_avira: "Bereitgestellt von Avira",
          lb_help: "Hilfe",
          lnk_abs_landing: "http://www.avira.com/abs-ftu",
          lb_trackers_twitter_share:
            "{{ threshold }} Werbeanzeigen und #Tracker wurden von #Avira Browserschutz blockiert. Holen Sie sich Ihre eigene Version – #kostenlos!",
          lb_trackers_facebook_share:
            "{{ threshold }} – so viele Werbeanzeigen und Tracker hat Avira Browserschutz bislang blockiert und so davon abgehalten, meine Onlineaktivitäten auszuspionieren. Avira Browserschutz ist kostenlos und wärmstens zu empfehlen.",
          lb_congratulations: "Herzlichen Glückwunsch!",
          lb_trackers_blocked_count: "{{ threshold }} Werbeanzeigen und Tracker blockiert!",
          lb_trackers_milestone_subtitle: "Hilf auch du, deine Familie und Freunde zu schützen.",
          lb_tracker_notification_share_url_twitter: "http://www.avira.com/de/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Twitter",
          lb_tracker_notification_share_url_facebook:
            "http://www.avira.com/de/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Facebook",
          lb_tweet: "Tweet",
          lb_share: "Teilen",
          lb_trackers: "Tracker",
          lb_ads: "Werbeanzeigen",
          lb_trackers_blocked_this_page: '<span class="txt--orange-dark">Tracker</span> auf dieser Webseite blockiert',
          lb_ads_blocked_this_page: '<span class="txt--orange">Werbeanzeigen</span> auf dieser Webseite blockiert',
          lb_blocked_total: "Insgesamt <strong>{{ countTotal }}</strong><br>Werbeanzeigen und Tracker blockiert",
          lb_adblocking_credits: '"Werbeanzeige von <a href="https://adguard.com/?aid=27248" target="_blank">Adguard</a> blockiert"'
        };
      },
      {}
    ],
    69: [
      function (e, t, n) {
        t.exports = {
          lb_safe_website: "Safe website",
          lb_unsafe_website: "Unsafe website",
          lb_unsafe_content_website: "Unsafe content",
          lb_mse_website: "Distrusted Search Engine",
          lb_trackers_blocked: '{{ count }} ads and trackers <span class="txt--green">blocked</span> on {{ domain }}',
          lb_trackers_blocked_short: "{{ count }} ads and trackers blocked",
          lb_trackers_block_all: "Block on this website",
          lb_trackers_allow_all: "Unblock ads and trackers",
          msg_no_trackers:
            "There are no trackers following you on the current page. If you open a website with active trackers, the complete list will be shown here.",
          msg_trackers_tooltip:
            "These are all the trackers on the website you are viewing. You can block a tracker by clicking on the slider next to it. When a slider is green, that tracker is blocked and cannot track your browsing activity. Note that some trackers are allowed by default. Blocking them might result in the web page not working properly.",
          lb_settings: "Settings",
          lb_setting_offers: "Show price comparisons",
          lb_setting_tooltip_offers: "Show better deals for the items you’re shopping for – from only safe websites.",
          lb_setting_dnt_header: "Send Do Not Track header",
          lb_setting_tooltip_dnt_header:
            "Inform websites they should not track you. If they ignore the request, ABS still blocks any trackers.",
          lb_setting_top_bar: "Show safety indicator",
          lb_setting_block_trackers: "Block trackers by default",
          lb_setting_tooltip_block_trackers: "Protect your privacy by blocking trackers by default.",
          lb_setting_cliqz: "CLIQZ Search",
          lb_setting_tooltip_cliqz:
            "CLIQZ Search suggests you websites and relevant information in real-time while you enter your search in the browser bar, which enables you to search safer and faster.",
          lb_setting_privacy_badger: "Privacy Badger",
          lb_setting_tooltip_privacy_badger:
            "Privacy Badger blocks spying ads and prevents invisible trackers from tracking you secretly without your permission.",
          lb_setting_https_everywhere: "HTTPS Everywhere",
          lb_setting_tooltip_https_everywhere: "HTTPS Everywhere encrypts your communications and makes your browsing more secure.",
          lb_setting_inAppTracking: "Anonymous Statistics",
          lb_setting_tooltip_inAppTracking: "Help us improve the product by sharing anonymous data.",
          lb_setting_show_advanced_controls: "Show extra browsing controls",
          lb_setting_tooltip_show_advanced_controls: "Displays Privacy Badger and HTTPS Everywhere icons in the toolbar.",
          lb_setting_google_services: "Google Services",
          lb_setting_adguard: "Block ads & web tracking",
          lb_setting_tooltip_adguard:
            "Protects your privacy by stopping anyone from monitoring you online. Also blocks intrusive popups, web banners, video ads, and more.",
          lb_setting_adguard_social_media: "Block social media tracking",
          lb_setting_tooltip_adguard_social_media:
            "Disables social media buttons and widgets from websites, so that social networks cannot keep track of what sites you visit.",
          lb_setting_adguard_useful_ads: "Do not block useful ads",
          lb_setting_tooltip_adguard_useful_ads: "Allows relevant, non-intrusive ads to be shown in your search results.",
          lb_setting_extension_scan: "Extensions Analysis",
          lb_setting_tooltip_extension_scan:
            "Enable to send an anonymous report to Avira if suspicious activity is detected while browsing.",
          lb_setting_dark_mode: "Dark mode",
          lb_setting_tooltip_dark_mode: "Switch dark mode on/off",
          btn_blocking_back: "Take me away!",
          lb_blocking_options: "More options",
          lb_blocking_add_exception: "Never block this website",
          btn_blocking_continue: "Continue anyway",
          btn_dash_classification_cb_exception: "Never block this website",
          lb_dash_classification_exception_info_add: "Adding an exception",
          msg_dash_classification_exception_info_add:
            "This site is currently NOT on your exception list. When you add an exception, the address will not be blocked when you attempt to view it. You will still see the warning on the top of the screen.",
          lb_dash_classification_exception_info_remove: "Removing an exception",
          msg_dash_classification_exception_info_remove:
            "This site is currently on your exception list. If you remove the exception, the address will be blocked every time you attempt to view it.",
          lb_privacy: "Privacy policy",
          lnk_privacy: "https://www.avira.com/en/general-privacy",
          lb_eula: "End User License Agreement",
          lnk_eula: "https://www.avira.com/en/license-agreement-terms-of-use",
          lb_discover_mode: "Discover more",
          lb_feedback: "Feedback",
          lb_feedback_question: "How would you rate your experience?",
          lb_feedback_send: "Send",
          lb_feedback_send_title: "Send an anonymous feedback to Avira",
          lb_feedback_thank_you: "Thank you",
          lb_feedback_thank_you_feedback: "Thank you for your feedback",
          lb_feedback_help_improve: "Your feedback helps us improve the app",
          lb_feedback_rate_store: "Would you mind taking a moment and rate {0} in the {1} store?",
          lb_feedback_ok: "OK",
          lb_feedback_rate_now: "Rate now",
          lb_feedback_later: "Later",
          lb_rate: "Rate app",
          lb_dash_pua_action_cancel: "Cancel download",
          msg_mse_bar_warning: "Your search engine settings were possibly tampered with.",
          lb_mse_take_me_away: "Take me away!",
          lnk_avira: "https://www.avira.com/en/",
          lb_mse_hide_warning: "I trust this search engine",
          msg_blocked_iframe_replacement: "Unsafe content",
          lb_unsafe_content_bar_warning: "Avira Browser Safety prevented unsafe content from loading on this webpage.",
          lb_unsafe_content_bar_ignore: "Don't show message again",
          lb_extension_permission_notification_extension_description:
            "The Avira Browser Safety Extension needs your approval to send a report about suspicious activities to Avira.",
          lb_extension_permission_notification_extension_permission_title:
            "Enable to send an anonymous report to Avira if suspicious activity is detected while browsing.",
          lb_extension_permission_notification_extension_permission_button: "Allow",
          lb_extension_permission_notification_extension_permission_no_title: "You can enable this feature at anytime in the settings.",
          lb_extension_permission_notification_extension_permission_no_button: "Do not ask again",
          lb_unsafe_content: "Unsafe Content",
          msg_dash_unsafe_content_details_no_exception: "Unsafe content blocked:",
          msg_dash_unsafe_content_details_exception: "Unsafe content blocked",
          msg_dash_unsafe_content_risk_no_exception: "For safety, you are recommended to keep the content blocked.",
          msg_dash_unsafe_content_risk_exception: "For safety, you are recommended to block the unsafe content by removing the exception.",
          lb_dash_unsafe_content_show_details: "Technical details",
          lb_dash_unsafe_content_hide_details: "Hide",
          msg_category_unknown: "No information was found for this website.",
          msg_category_safe: "No known threats.",
          msg_category_malware: "This is a malware website",
          msg_category_malware_sub: "Malware websites infect your device and can include viruses, worms, spyware, and Trojans.",
          msg_category_phishing: "This is a phishing website",
          msg_category_phishing_sub:
            "Phishing websites trick you into revealing your personal information, such as passwords and bank account information.",
          msg_category_spam: "This is a spam website",
          msg_category_spam_sub: "Spam websites get your email address so they can send you adverts by email.",
          msg_category_pua: "The download contains Potentially Unwanted Applications",
          msg_category_pua2: "This website distributes PUAs",
          msg_category_pua2_sub:
            "Potentially Unwanted Applications (PUAs) exhibit behavior or contain features that are considered undesirable by users.",
          msg_category_mse: "Distrusted search engine",
          msg_category_mse_sub:
            "This search engine is distrusted because malware and Potentially Unwanted Applications are known to redirect traffic to it.",
          msg_category_unsafe_content: "Unsafe content blocked",
          msg_category_unsafe_content_sub:
            "Webpages load unsafe content if compromised or third-party content is hacked or intentionally harmful.",
          msg_what_is_pua: "What is a PUA?",
          lnk_what_is_pua: "https://www.avira.com/en/potentially-unwanted-applications",
          lb_tab_privacy: "Privacy",
          lb_tab_security: "Security",
          lb_my_modes: "Modes",
          msg_mode_select: "Select the mode that best meets<br/>your needs",
          "lb_mode_safe-surfing": "Safe Surfing",
          "lb_mode_safe-private": "Safe and Private",
          lb_mode_custom: "Custom",
          lb_powered_by_avira: "Powered by Avira",
          lb_help: "Help",
          lnk_abs_landing: "http://www.avira.com/abs-ftu",
          lb_trackers_twitter_share: "{{ threshold }} ads and #trackers were blocked by #Avira Browser Safety. Get yours now #forfree!",
          lb_trackers_facebook_share:
            "{{ threshold }} - that's how many ads and trackers Avira Browser Safety has blocked from spying on my online activities so far. It's free and I highly recommend it.",
          lb_congratulations: "Congratulations!",
          lb_trackers_blocked_count: "{{ threshold }} ads and trackers blocked!",
          lb_trackers_milestone_subtitle: "Help protect your family and friends, too.",
          lb_tracker_notification_share_url_twitter: "http://www.avira.com/en/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Twitter",
          lb_tracker_notification_share_url_facebook:
            "http://www.avira.com/en/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Facebook",
          lb_tweet: "Tweet",
          lb_share: "Share",
          lb_trackers: "Trackers",
          lb_ads: "Ads",
          lb_trackers_blocked_this_page: '<span class="txt--orange-dark">Trackers</span> blocked on this website',
          lb_ads_blocked_this_page: '<span class="txt--orange">Ads</span> blocked on this website',
          lb_blocked_total: "<strong>{{ countTotal }}</strong><br>Overall ads and trackers blocked",
          lb_adblocking_credits: 'Ad blocking by <a href="https://adguard.com/?aid=27248" target="_blank">Adguard</a>'
        };
      },
      {}
    ],
    70: [
      function (e, t, n) {
        t.exports = {
          lb_safe_website: "Sitio web seguro",
          lb_unsafe_website: "Sitio web no seguro",
          lb_unsafe_content_website: "Contenido no seguro",
          lb_mse_website: "Motor de búsqueda poco fiable",
          lb_trackers_blocked: '{{ count }} anuncios y rastreadores <span class="txt--green">bloqueados</span> en {{ domain }}',
          lb_trackers_blocked_short: "{{ count }} anuncios y rastreadores bloqueados",
          lb_trackers_block_all: "Bloquear en este sitio web",
          lb_trackers_allow_all: "Desbloquear anuncios y rastreadores",
          msg_no_trackers:
            "No hay rastreadores que le estén siguiendo en la página actual. Si abre una página web con rastreadores activos, se mostrará la lista completa aquí.",
          msg_trackers_tooltip:
            "Estos son todos los rastreadores en el sitio web que está visitando. Puede bloquear un rastreador haciendo clic en el control deslizante junto al mismo. Cuando un control deslizante está en verde, el rastreador estará bloqueado y no podrá rastrear su actividad de exploración. Tenga en cuenta que algunos rastreadores están permitidos por defecto. Su bloqueo puede hacer que el sitio web no funcione correctamente.",
          lb_settings: "Configuración",
          lb_setting_offers: "Mostrar comparativas de precios",
          lb_setting_tooltip_offers: "Mostrar las mejores ofertas para los productos que está comprando (solo de sitios web seguros).",
          lb_setting_dnt_header: "Enviar solicitud Protección de rastreo",
          lb_setting_tooltip_dnt_header:
            "Informa a los sitios web que no deberían rastrearle. En caso de que ignoren la solicitud, SNA bloqueará todos los rastreadores.",
          lb_setting_top_bar: "Mostrar indicador de seguridad",
          lb_setting_block_trackers: "Bloquee rastreadores de forma predeterminada",
          lb_setting_tooltip_block_trackers: "Proteja su privacidad bloqueando los rastreadores de forma predeterminada.",
          lb_setting_cliqz: "Motor de búsqueda CLIQZ",
          lb_setting_tooltip_cliqz:
            "El motor de búsqueda CLIQZ le sugiere sitios web e información relevante en tiempo real mientras introduce su búsqueda en la barra del navegador lo que le permite buscar de forma más segura y más rápida.",
          lb_setting_privacy_badger: "Privacy Badger",
          lb_setting_tooltip_privacy_badger:
            "Privacy Badger bloquea anuncios espía y evita que los rastreadores invisibles le rastreen de forma secreta sin su permiso.",
          lb_setting_https_everywhere: "HTTPS Everywhere",
          lb_setting_tooltip_https_everywhere: "HTTPS Everywhere cifra sus comunicaciones y hace que su navegación sea más segura.",
          lb_setting_inAppTracking: "Estadísticas anónimas",
          lb_setting_tooltip_inAppTracking: "Ayúdenos a mejorar el producto compartiendo datos anónimos.",
          lb_setting_show_advanced_controls: "Más controles de navegación",
          lb_setting_tooltip_show_advanced_controls:
            "Se muestran en la barra de herramientas los iconos de Privacy Badger y HTTPS Everywhere.",
          lb_setting_google_services: "Servicios de Google",
          lb_setting_adguard: "Bloquear anuncios y el rastreo web",
          lb_setting_tooltip_adguard:
            "Protege su privacidad evitando que cualquiera supervise lo que hace en línea. Bloquea también ventanas emergentes intrusivas, anuncios web, anuncios en vídeo y más.",
          lb_setting_adguard_social_media: "Bloquear el rastreo de redes sociales",
          lb_setting_tooltip_adguard_social_media:
            "Deshabilita los botones y widgets de redes sociales de los sitios web para que las redes sociales no puedan rastrear los sitios que visita.",
          lb_setting_adguard_useful_ads: "No bloquear anuncios útiles",
          lb_setting_tooltip_adguard_useful_ads: "Permite que en sus resultados de búsqueda aparezcan anuncios relevantes y no intrusivos.",
          lb_setting_extension_scan: "Análisis de extensiones",
          lb_setting_tooltip_extension_scan:
            "Activar el envío a Avira de un informe anónimo si se detecta actividad sospechosa mientras se navega.",
          lb_setting_dark_mode: "Modo oscuro",
          lb_setting_tooltip_dark_mode: "Activar/Desactivar Modo oscuro",
          btn_blocking_back: "Salir de aquí",
          lb_blocking_options: "Otras opciones",
          lb_blocking_add_exception: "Nunca bloquear este sitio web",
          btn_blocking_continue: "Continuar de todas formas",
          btn_dash_classification_cb_exception: "Nunca bloquear este sitio web",
          lb_dash_classification_exception_info_add: "Adición de una excepción",
          msg_dash_classification_exception_info_add:
            "Este sitio NO se encuentra actualmente en su lista de excepciones. Si añade una excepción, la dirección no se bloqueará cuando trate de verla. Aun así, verá la advertencia en la parte superior de la pantalla.",
          lb_dash_classification_exception_info_remove: "Eliminación de una excepción",
          msg_dash_classification_exception_info_remove:
            "Este sitio se encuentra actualmente en su lista de excepciones. Si elimina la excepción, siempre que trate de ver la excepción, esta se bloqueará.",
          lb_privacy: "Política de privacidad",
          lnk_privacy: "https://www.avira.com/es/general-privacy",
          lb_eula: "Acuerdo de licencia de usuario final",
          lnk_eula: "https://www.avira.com/es/license-agreement-terms-of-use",
          lb_discover_mode: "Obtener más información",
          lb_feedback: "Comentarios",
          lb_feedback_question: "¿Cómo valoraría su experiencia?",
          lb_feedback_send: "Enviar",
          lb_feedback_send_title: "Enviar un comentario anónimo a Avira",
          lb_feedback_thank_you: "¡Muchas gracias!",
          lb_feedback_thank_you_feedback: "Gracias por su opinión",
          lb_feedback_help_improve: "Su opinión nos ayuda a mejorar la aplicación",
          lb_feedback_rate_store: "¿Le importaría dedicar un momento a valorar {0} en la tienda de {1}?",
          lb_feedback_ok: "Aceptar",
          lb_feedback_rate_now: "Valorar ahora",
          lb_feedback_later: "Más tarde",
          lb_rate: "Valorar aplicación",
          lb_dash_pua_action_cancel: "Cancelar descarga",
          msg_mse_bar_warning: "Es posible que la configuración de su motor de búsqueda haya sido manipulada.",
          lb_mse_take_me_away: "Salir de aquí!",
          lnk_avira: "https://www.avira.com/es/",
          lb_mse_hide_warning: "Confío en este motor de búsqueda",
          msg_blocked_iframe_replacement: "Contenido no seguro",
          lb_unsafe_content_bar_warning: "Avira Navegación segura ha evitado que se cargue contenido no seguro en esta página web.",
          lb_unsafe_content_bar_ignore: "No volver a mostrar el mensaje",
          lb_extension_permission_notification_extension_description:
            "La extensión Avira Navegación segura requiere su aprobación para enviar a Avira un informe sobre actividades sospechosas.",
          lb_extension_permission_notification_extension_permission_title:
            "Activar el envío a Avira de un informe anónimo si se detecta actividad sospechosa mientras se navega.",
          lb_extension_permission_notification_extension_permission_button: "Permitir",
          lb_extension_permission_notification_extension_permission_no_title:
            "Puede activar esta función en la configuración en cualquier momento.",
          lb_extension_permission_notification_extension_permission_no_button: "No volver a preguntar",
          lb_unsafe_content: "Contenido no seguro",
          msg_dash_unsafe_content_details_no_exception: "Contenido no seguro bloqueado:",
          msg_dash_unsafe_content_details_exception: "Contenido no seguro bloqueado",
          msg_dash_unsafe_content_risk_no_exception: "Por seguridad, le recomendamos que mantenga el contenido bloqueado.",
          msg_dash_unsafe_content_risk_exception:
            "Por seguridad, le recomendamos que bloquee el contenido no seguro eliminando la excepción.",
          lb_dash_unsafe_content_show_details: "Detalles técnicos",
          lb_dash_unsafe_content_hide_details: "Ocultar",
          msg_category_unknown: "No se ha encontrado información sobre este sitio web.",
          msg_category_safe: "Sin amenazas conocidas.",
          msg_category_malware: "Este sitio web contiene malware",
          msg_category_malware_sub:
            "Los sitios web con malware infectan su dispositivo y pueden incluir virus, gusanos, spyware y troyanos.",
          msg_category_phishing: "Este es un sitio web de suplantación de identidad",
          msg_category_phishing_sub:
            "Los sitios web de suplantación de identidad intentan engañar al usuario para revelar información personal, como contraseñas y datos bancarios.",
          msg_category_spam: "Este es un sitio web de correo no deseado",
          msg_category_spam_sub:
            "Los sitios web de correo no deseado capturan su dirección de correo electrónico para enviarle publicidad no deseada por correo electrónico.",
          msg_category_pua: "La descarga contiene aplicaciones potencialmente no deseadas",
          msg_category_pua2: "Este sitio web distribuye PUA",
          msg_category_pua2_sub:
            "Las aplicaciones potencialmente no deseadas (PUA) muestran un comportamiento o contienen características que suelen ser consideradas como no deseables por los usuarios.",
          msg_category_mse: "Motor de búsqueda poco fiable",
          msg_category_mse_sub:
            "Se desconfía de este motor de búsqueda porque se sabe que programas maliciosos y aplicaciones potencialmente no deseadas redirigen aquí el tráfico.",
          msg_category_unsafe_content: "Contenido no seguro bloqueado",
          msg_category_unsafe_content_sub:
            "Las páginas web pueden cargar contenido no seguro si han sido comprometidas o si el contenido de terceros se ha pirateado o es malicioso de forma intencionada.",
          msg_what_is_pua: "¿Qué es PUA?",
          lnk_what_is_pua: "https://www.avira.com/es-es/potentially-unwanted-applications",
          lb_tab_privacy: "Privacidad",
          lb_tab_security: "Seguridad",
          lb_my_modes: "Modos",
          msg_mode_select: "Seleccione el modo que se adapta más a <br/>sus necesidades",
          "lb_mode_safe-surfing": "Navegación segura",
          "lb_mode_safe-private": "Segura y privada",
          lb_mode_custom: "Personalizado",
          lb_powered_by_avira: "Contenido provisto por Avira",
          lb_help: "Ayuda",
          lnk_abs_landing: "http://www.avira.com/abs-ftu",
          lb_trackers_twitter_share:
            "{{ threshold }} anuncios y #rastreadores bloqueados por #Avira Navegación segura. ¡Consiga el suyo ahora #gratis!",
          lb_trackers_facebook_share:
            "{{ threshold }}: estos son todos los anuncios y rastreadores que Avira Navegación segura ha bloqueado hasta ahora para evitar el espionaje de mis actividades en línea. Es gratuito y lo recomiendo mucho.",
          lb_congratulations: "¡Enhorabuena!",
          lb_trackers_blocked_count: "{{ threshold }} anuncios y rastreadores bloqueados.",
          lb_trackers_milestone_subtitle: "Contribuye también a la protección de tu familia y amigos.",
          lb_tracker_notification_share_url_twitter: "http://www.avira.com/es/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Twitter",
          lb_tracker_notification_share_url_facebook:
            "http://www.avira.com/es/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Facebook",
          lb_tweet: "Tuit",
          lb_share: "Compartir",
          lb_trackers: "Rastreadores",
          lb_ads: "Anuncios",
          lb_trackers_blocked_this_page: '<span class="txt--orange-dark">Rastreadores</span> bloqueados en este sitio web.',
          lb_ads_blocked_this_page: '<span class="txt--orange">Anuncios</span> bloqueados en este sitio web.',
          lb_blocked_total: "<strong>{{ countTotal }}</strong><br>Total de anuncios y rastreadores bloqueados",
          lb_adblocking_credits: 'Anuncios bloqueados por <a href="https://adguard.com/?aid=27248" target="_blank">Adguard</a>'
        };
      },
      {}
    ],
    71: [
      function (e, t, n) {
        t.exports = {
          lb_safe_website: "Site Internet sécurisé",
          lb_unsafe_website: "Site Internet non sécurisé",
          lb_unsafe_content_website: "Contenu dangereux",
          lb_mse_website: "Moteur de recherche désapprouvé",
          lb_trackers_blocked: '{{ count }} annonces et dispositifs de suivi <span class="txt--green">bloqués</span> sur {{ domain }}',
          lb_trackers_blocked_short: "{{ count }} annonces et dispositifs de suivi bloqués",
          lb_trackers_block_all: "Bloquer sur ce site Internet",
          lb_trackers_allow_all: "Débloquer toutes les annonces et les dispositifs de suivi",
          msg_no_trackers:
            "Aucun dispositif de suivi ne vous suit sur la page actuelle. Si vous ouvrez un site Internet avec des dispositifs de suivi actifs, la liste complète s'affichera ici.",
          msg_trackers_tooltip:
            "Voici tous les dispositifs de suivi recensés sur le site Internet que vous consultez. Pour bloquer un dispositif de suivi, cliquez sur le curseur adjacent. Lorsque le curseur est vert, le dispositif de suivi est bloqué et ne peut pas suivre vos activités de navigation. Notez que certains dispositifs de suivi sont autorisés par défaut. Leur blocage peut alors entraver le bon fonctionnement de la page Web.",
          lb_settings: "Paramètres",
          lb_setting_offers: "Afficher les comparaisons de prix",
          lb_setting_tooltip_offers:
            "Afficher les meilleures affaires pour les articles que vous recherchez – sur des sites Internet sécurisés.",
          lb_setting_dnt_header: "Envoyer l'en-tête Ne pas suivre",
          lb_setting_tooltip_dnt_header:
            "Intimez aux sites Internet de ne pas vous suivre. S'ils ignorent cette requête, PNA bloquera tout dispositif de suivi.",
          lb_setting_top_bar: "Afficher l’indicateur de sécurité",
          lb_setting_block_trackers: "Bloquer les dispositifs de suivi par défaut",
          lb_setting_tooltip_block_trackers: "Protégez votre sphère privée en bloquant les dispositifs de suivi par défaut.",
          lb_setting_cliqz: "Recherche CLIQZ",
          lb_setting_tooltip_cliqz:
            "La Recherche CLIQZ vous suggère des sites Internet et des informations pertinentes en temps réel lors de la saisie dans la barre de navigation, tout en accélérant et sécurisant votre recherche.",
          lb_setting_privacy_badger: "Privacy Badger",
          lb_setting_tooltip_privacy_badger:
            "Privacy Badger bloque les pubs espionnes et empêche les mouchards invisibles de vous suivre secrètement sans votre autorisation.",
          lb_setting_https_everywhere: "HTTPS Everywhere",
          lb_setting_tooltip_https_everywhere: "HTTPS Everywhere chiffre vos communications et sécurise votre navigation plus avant.",
          lb_setting_inAppTracking: "Statistiques anonymes",
          lb_setting_tooltip_inAppTracking: "Aidez-nous à améliorer le produit en partageant des données anonymes.",
          lb_setting_show_advanced_controls: "Contrôles supp. de navigation",
          lb_setting_tooltip_show_advanced_controls: "Affiche les icônes Privacy Badger et HTTPS Everywhere dans la barre d'outils.",
          lb_setting_google_services: "Services Google",
          lb_setting_adguard: "Bloquez les annonces et le suivi sur Internet",
          lb_setting_tooltip_adguard:
            "Protège votre vie privée en bloquant toute possibilité de surveillance de vos activités en ligne. Bloque également les fenêtres intempestives intrusives, les bannières web, les annonces vidéo, etc.",
          lb_setting_adguard_social_media: "Bloquez le suivi sur les médias sociaux",
          lb_setting_tooltip_adguard_social_media:
            "Désactive les boutons et widgets liés aux médias sociaux sur les sites Internet afin d'empêcher le suivi de vos activités par les réseaux sociaux.",
          lb_setting_adguard_useful_ads: "Ne bloquez pas les publicités utiles",
          lb_setting_tooltip_adguard_useful_ads:
            "Autorise l'affichage d'annonces ciblées et non intrusives dans vos résultats de recherche.",
          lb_setting_extension_scan: "Analyse des extensions",
          lb_setting_tooltip_extension_scan:
            "Activez cette option pour envoyer un rapport anonyme à Avira en cas d'activité suspecte détectée au cours de la navigation.",
          lb_setting_dark_mode: "Mode sombre",
          lb_setting_tooltip_dark_mode: "Activer/désactiver le mode sombre",
          btn_blocking_back: "Renforcer ma sécurité",
          lb_blocking_options: "Autres options",
          lb_blocking_add_exception: "Ne jamais bloquer ce site Internet",
          btn_blocking_continue: "Continuer quand même",
          btn_dash_classification_cb_exception: "Ne jamais bloquer ce site Internet",
          lb_dash_classification_exception_info_add: "Ajout d'une exception",
          msg_dash_classification_exception_info_add:
            "Ce site n'est actuellement PAS repris dans votre liste d'exceptions. Lorsque vous ajoutez une exception, l'adresse concernée n'est pas bloquée lorsque vous tentez d'y accéder. L'avertissement continue toutefois de s'afficher dans la partie supérieure de l'écran.",
          lb_dash_classification_exception_info_remove: "Suppression d'une exception",
          msg_dash_classification_exception_info_remove:
            "Ce site est actuellement repris dans votre liste d'exceptions. Si vous supprimez l'exception, l'adresse sera bloquée à chaque fois que vous tenterez d'y accéder.",
          lb_privacy: "Politique de confidentialité",
          lnk_privacy: "https://www.avira.com/fr/general-privacy",
          lb_eula: "Contrat de licence de l''utilisateur final",
          lnk_eula: "https://www.avira.com/fr/license-agreement-terms-of-use",
          lb_discover_mode: "En savoir plus",
          lb_feedback: "Commentaire",
          lb_feedback_question: "Comment évalueriez-vous votre expérience?",
          lb_feedback_send: "Envoyer",
          lb_feedback_send_title: "Envoyer un commentaire anonyme à Avira",
          lb_feedback_thank_you: "Merci !",
          lb_feedback_thank_you_feedback: "Merci pour vos commentaires",
          lb_feedback_help_improve: "Vos commentaires nous aident à améliorer notre application",
          lb_feedback_rate_store: "Auriez-vous un moment pour évaluer {0} dans la boutique {1} ?",
          lb_feedback_ok: "OK",
          lb_feedback_rate_now: "Évaluer",
          lb_feedback_later: "Plus tard",
          lb_rate: "Évaluer l'application",
          lb_dash_pua_action_cancel: "Annuler le téléchargement",
          msg_mse_bar_warning: "Les paramètres de votre moteur de recherche ont peut-être été altérés.",
          lb_mse_take_me_away: "Renforcer ma sécurité!",
          lnk_avira: "https://www.avira.com/fr/",
          lb_mse_hide_warning: "Je fais confiance à ce moteur de recherche",
          msg_blocked_iframe_replacement: "Contenu dangereux",
          lb_unsafe_content_bar_warning: "Protection de navigateur Avira a empêché le chargement de contenu dangereux sur cette page Web.",
          lb_unsafe_content_bar_ignore: "Ne plus afficher ce message",
          lb_extension_permission_notification_extension_description:
            "L'extension Protection de navigateur Avira requiert votre autorisation pour envoyer un rapport concernant les activités suspectes à Avira.",
          lb_extension_permission_notification_extension_permission_title:
            "Activez cette option pour envoyer un rapport anonyme à Avira en cas d'activité suspecte détectée au cours de la navigation.",
          lb_extension_permission_notification_extension_permission_button: "Autoriser",
          lb_extension_permission_notification_extension_permission_no_title:
            "Vous pouvez activer cette fonctionnalité à tout moment dans les paramètres.",
          lb_extension_permission_notification_extension_permission_no_button: "Ne plus demander",
          lb_unsafe_content: "Contenu dangereux",
          msg_dash_unsafe_content_details_no_exception: "Contenu dangereux bloqué :",
          msg_dash_unsafe_content_details_exception: "Contenu dangereux bloqué",
          msg_dash_unsafe_content_risk_no_exception: "Pour votre sécurité, il est recommandé de bloquer ce contenu.",
          msg_dash_unsafe_content_risk_exception:
            "Pour votre sécurité, il est recommandé de bloquer le contenu non sécurisé en supprimant l'exception existante.",
          lb_dash_unsafe_content_show_details: "Détails techniques",
          lb_dash_unsafe_content_hide_details: "Masquer",
          msg_category_unknown: "Aucune information trouvée pour le site Internet.",
          msg_category_safe: "Aucune menace connue.",
          msg_category_malware: "Ce site est un site Internet malveillant",
          msg_category_malware_sub:
            "Les sites Internet malveillants infectent votre appareil et peuvent inclure des virus, des vers, des logiciels espions et des chevaux de Troie.",
          msg_category_phishing: "Ce site est un site Internet de hameçonnage",
          msg_category_phishing_sub:
            "Les sites Internet de hameçonnage vous incitent à révéler vos informations personnelles, telles que vos mots de passe et coordonnées bancaires.",
          msg_category_spam: "Ce site est un site Internet de spam",
          msg_category_spam_sub:
            "Les sites Internet de spam capturent votre adresse électronique afin de vous envoyer des publicités indésirables par e-mail.",
          msg_category_pua: "Le téléchargement contient des applications potentiellement indésirables",
          msg_category_pua2: "Ce site Internet distribue des PUA",
          msg_category_pua2_sub:
            "Les PUA, ou applications potentiellement indésirables, présentent un comportement ou intègrent des fonctionnalités indésirables pour les utilisateurs.",
          msg_category_mse: "Moteur de recherche désapprouvé",
          msg_category_mse_sub:
            "Ce moteur de recherche n'est pas fiable : son trafic est alimenté par des logiciels malveillants et des applications potentiellement indésirables.",
          msg_category_unsafe_content: "Contenu dangereux bloqué",
          msg_category_unsafe_content_sub:
            "Les pages Web chargent des contenus dangereux lorsqu'elles sont compromises, c'est-à-dire lorsque leur contenu a été piraté ou conçu dans un but malveillant.",
          msg_what_is_pua: "Qu'est-ce que les applications potentiellement indésirables (PUA) ?",
          lnk_what_is_pua: "https://www.avira.com/fr-fr/potentially-unwanted-applications",
          lb_tab_privacy: "Confidentialité",
          lb_tab_security: "Sécurité",
          lb_my_modes: "Modes",
          msg_mode_select: "Sélectionnez le mode qui répond<br/>le mieux à vos besoins",
          "lb_mode_safe-surfing": "Navigation sécurisée",
          "lb_mode_safe-private": "Sécurisé et privé",
          lb_mode_custom: "Personnalisé",
          lb_powered_by_avira: "Une solution Avira",
          lb_help: "Aide",
          lnk_abs_landing: "http://www.avira.com/abs-ftu",
          lb_trackers_twitter_share:
            "{{ threshold }} annonces et #trackers bloqués par Protection de navigateur #Avira. Profitez-en, c'est #gratuit !",
          lb_trackers_facebook_share:
            "{{ threshold }} - voilà le nombre d'annonces et dispositifs de suivi indiscrets déjà bloqués par la Protection de navigateur Avira lors de mes activités en ligne. Un outil gratuit et vivement recommandable !",
          lb_congratulations: "Félicitations !",
          lb_trackers_blocked_count: "{{ threshold }} annonces et dispositifs de suivi bloqués !",
          lb_trackers_milestone_subtitle: "Aidez votre famille et vos amis à se protéger eux aussi.",
          lb_tracker_notification_share_url_twitter: "http://www.avira.com/fr/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Twitter",
          lb_tracker_notification_share_url_facebook:
            "http://www.avira.com/fr/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Facebook",
          lb_tweet: "Twitter",
          lb_share: "Partager",
          lb_trackers: "Dispositifs de suivi",
          lb_ads: "Annonces",
          lb_trackers_blocked_this_page: '<span class="txt--orange-dark">Dispositifs de suivi</span> bloqués sur ce site Internet',
          lb_ads_blocked_this_page: '<span class="txt--orange">Annonces</span> bloquées sur ce site Internet',
          lb_blocked_total: "<strong>{{ countTotal }}</strong><br>Blocage total des pubs et dispositifs de suivi",
          lb_adblocking_credits:
            'Blocage des annonces publicitaires par <a href="https://adguard.com/?aid=27248" target="_blank">Adguard</a>'
        };
      },
      {}
    ],
    72: [
      function (e, t, n) {
        t.exports = {
          lb_safe_website: "Sito web sicuro",
          lb_unsafe_website: "Sito web non sicuro",
          lb_unsafe_content_website: "Contenuto non sicuro",
          lb_mse_website: "Motore di ricerca non affidabile",
          lb_trackers_blocked: '{{ count }} pubblicità e tracker <span class="txt--green">bloccati</span> su {{ domain }}',
          lb_trackers_blocked_short: "{{ count }} pubblicità e tracker bloccati",
          lb_trackers_block_all: "Blocca su questo sito web",
          lb_trackers_allow_all: "Sblocca le pubblicità e i tracker",
          msg_no_trackers:
            "Sulla pagina non sono presenti tracker che potrebbero seguirla. Se apre un sito Web con i tracker attivi, l'elenco completo viene visualizzato qui.",
          msg_trackers_tooltip:
            "Questi sono tutti i tracker presenti sul sito Web che sta visualizzando. Può bloccare un tracker facendo clic sul dispositivo di scorrimento accanto al tracker stesso. Quando un dispositivo di scorrimento è verde, il tracker è bloccato e non può eseguire il tracking della sua attività di navigazione. Alcuni tracker sono autorizzati per default e bloccarli potrebbe causare un funzionamento non corretto della pagina Web.",
          lb_settings: "Impostazioni",
          lb_setting_offers: "Mostra il confronto prezzi",
          lb_setting_tooltip_offers: "Mostra le offerte migliori per gli articoli che stai acquistando: solo da siti web sicuri.",
          lb_setting_dnt_header: "Invia l'intestazione Do not track",
          lb_setting_tooltip_dnt_header:
            "Informa i siti web che non desideri che tengano traccia delle tue attività. Se ignorano la richiesta, SBA bloccherà ugualmente eventuali tracker.",
          lb_setting_top_bar: "Mostra indicatore di sicurezza",
          lb_setting_block_trackers: "Blocca i tracker in modo predefinito",
          lb_setting_tooltip_block_trackers: "Proteggi la tua privacy bloccando i tracker in modo predefinito.",
          lb_setting_cliqz: "CLIQZ Search",
          lb_setting_tooltip_cliqz:
            "CLIQZ Search ti suggerisce siti web e informazioni pertinenti in tempo reale mentre digiti i termini di ricerca nella barra del browser, rendendo la ricerca più rapida e sicura.",
          lb_setting_privacy_badger: "Privacy Badger",
          lb_setting_tooltip_privacy_badger:
            "Privacy Badger blocca gli annunci spia e impedisce a tracker invisibili di tracciare segretamente le tue attività senza il tuo permesso.",
          lb_setting_https_everywhere: "HTTPS Everywhere",
          lb_setting_tooltip_https_everywhere:
            "HTTPS Everywhere crittografa le comunicazioni e ti permette di navigare in modo più sicuro.",
          lb_setting_inAppTracking: "Statistiche anonime",
          lb_setting_tooltip_inAppTracking: "Aiutaci a migliorare il prodotto condividendo dati anonimi.",
          lb_setting_show_advanced_controls: "Controlli di navigazione addiz.",
          lb_setting_tooltip_show_advanced_controls: "Mostra le icone di Privacy Badger e HTTPS Everywhere nella barra degli strumenti.",
          lb_setting_google_services: "Servizi di Google",
          lb_setting_adguard: "Blocca le pubblicità e il web tracking",
          lb_setting_tooltip_adguard:
            "Protegge la tua privacy impedendo a chiunque di monitorare le tue attività online. Blocca anche popup, banner, video pubblicitari invadenti e molto altro ancora.",
          lb_setting_adguard_social_media: "Blocca il tracking dei social media",
          lb_setting_tooltip_adguard_social_media:
            "Disattiva i pulsanti e i widget dei social media presenti nei siti web per evitare che il social network possa tenere traccia dei siti visitati.",
          lb_setting_adguard_useful_ads: "Non bloccare le pubblicità utili",
          lb_setting_tooltip_adguard_useful_ads:
            "Consente la visualizzazione di pubblicità rilevanti e non invadenti nei risultati della ricerca.",
          lb_setting_extension_scan: "Analisi delle estensioni",
          lb_setting_tooltip_extension_scan:
            "Consenti l'invio di report anonimi ad Avira se vengono rilevate attività sospette durante la navigazione.",
          lb_setting_dark_mode: "Modalità scura",
          lb_setting_tooltip_dark_mode: "Attiva/disattiva la modalità scura",
          btn_blocking_back: "Non voglio più accedere.",
          lb_blocking_options: "Altre opzioni",
          lb_blocking_add_exception: "Non bloccare mai questo sito web",
          btn_blocking_continue: "Continua comunque",
          btn_dash_classification_cb_exception: "Non bloccare mai questo sito web",
          lb_dash_classification_exception_info_add: "Aggiunta di un'eccezione",
          msg_dash_classification_exception_info_add:
            "Questo sito NON è al momento incluso nell'elenco delle eccezioni. Se aggiungi un'eccezione, l'indirizzo non verrà bloccato quanto tenti di accedere al sito. Verrà comunque visualizzata un'avvertenza nella parte superiore della schermata.",
          lb_dash_classification_exception_info_remove: "Rimuovi un'eccezione",
          msg_dash_classification_exception_info_remove:
            "Questo sito è attualmente incluso nell'elenco delle eccezioni. Se rimuovi l'eccezione, l'indirizzo verrà bloccato ogni volta che tenti di accedere al sito.",
          lb_privacy: "Policy sulla privacy",
          lnk_privacy: "https://www.avira.com/it/general-privacy",
          lb_eula: "Contratto di licenza con l''utente finale",
          lnk_eula: "https://www.avira.com/it/license-agreement-terms-of-use",
          lb_discover_mode: "Scopri di più",
          lb_feedback: "Feedback",
          lb_feedback_question: "Come valuteresti la tua esperienza?",
          lb_feedback_send: "Invia",
          lb_feedback_send_title: "Invia un feedback anonimo ad Avira",
          lb_feedback_thank_you: "Grazie.",
          lb_feedback_thank_you_feedback: "Grazie per il feedback",
          lb_feedback_help_improve: "Il tuo feedback ci aiuta a migliorare l'app",
          lb_feedback_rate_store: "Potresti prenderti un momento per valutare {0} nel negozio di {1}?",
          lb_feedback_ok: "OK",
          lb_feedback_rate_now: "Valuta ora",
          lb_feedback_later: "Più tardi",
          lb_rate: "Valuta l’app",
          lb_dash_pua_action_cancel: "Annulla download",
          msg_mse_bar_warning: "Le impostazioni di ricerca potrebbero essere state manomesse.",
          lb_mse_take_me_away: "Non voglio più accedere!",
          lnk_avira: "https://www.avira.com/it/",
          lb_mse_hide_warning: "Questo motore di ricerca è affidabile",
          msg_blocked_iframe_replacement: "Contenuto non sicuro",
          lb_unsafe_content_bar_warning: "Sicurezza browser Avira ha impedito il caricamento di contenuto non sicuro su questa pagina web.",
          lb_unsafe_content_bar_ignore: "Non mostrare il messaggio in futuro",
          lb_extension_permission_notification_extension_description:
            "L'estensione Sicurezza browser Avira richiede il tuo consenso per inviare ad Avira un report sulle attività sospette.",
          lb_extension_permission_notification_extension_permission_title:
            "Consenti l'invio di report anonimi ad Avira se vengono rilevate attività sospette durante la navigazione.",
          lb_extension_permission_notification_extension_permission_button: "Consenti",
          lb_extension_permission_notification_extension_permission_no_title:
            "Puoi attivare in ogni momento questa funzione nelle impostazioni.",
          lb_extension_permission_notification_extension_permission_no_button: "Non chiedere più in futuro",
          lb_unsafe_content: "Contenuto non sicuro",
          msg_dash_unsafe_content_details_no_exception: "Contenuto bloccato perchè non sicuro:",
          msg_dash_unsafe_content_details_exception: "Contenuto bloccato perchè non sicuro",
          msg_dash_unsafe_content_risk_no_exception: "Per motivi di sicurezza ti consigliamo di mantenere il contenuto bloccato.",
          msg_dash_unsafe_content_risk_exception:
            "Per motivi di sicurezza ti consigliamo di bloccare il contenuto non sicuro, rimuovendo l'eccezione.",
          lb_dash_unsafe_content_show_details: "Dettagli tecnici",
          lb_dash_unsafe_content_hide_details: "Nascondi",
          msg_category_unknown: "Impossibile trovare informazioni per questo sito web.",
          msg_category_safe: "Nessuna minaccia conosciuta.",
          msg_category_malware: "Questo è un sito di malware",
          msg_category_malware_sub: "I siti di malware infettano il tuo dispositivo e possono contenere virus, worm, spyware e trojan.",
          msg_category_phishing: "Questo è un sito di phishing",
          msg_category_phishing_sub:
            "I siti di phishing ingannano l'utente portandolo a rivelare le informazioni personali come le password e informazioni relative al conto bancario.",
          msg_category_spam: "Questo è un sito di spam",
          msg_category_spam_sub:
            "I siti di spam ottengono l'indirizzo email dell'utente in modo da poter inviare materiale pubblicitario non richiesto.",
          msg_category_pua: "Il download contiene applicazioni potenzialmente indesiderate",
          msg_category_pua2: "Questo sito web distribuisce PUA",
          msg_category_pua2_sub:
            "Le applicazioni potenzialmente indesiderate (PUA) contengono funzionalità o hanno effetti indesiderati dagli utenti.",
          msg_category_mse: "Motore di ricerca non affidabile",
          msg_category_mse_sub:
            "Questo motore di ricerca è sospetto poiché è risaputo che malware e applicazioni potenzialmente indesiderate vi reindirizzano il traffico.",
          msg_category_unsafe_content: "Contenuto bloccato perchè non sicuro",
          msg_category_unsafe_content_sub:
            "Le pagine web caricano un contenuto non sicuro se sono state compromesse o se il contenuto di terze parti ha subito attacchi o è intenzionalmente dannoso.",
          msg_what_is_pua: "Cosa sono le PUA?",
          lnk_what_is_pua: "https://www.avira.com/it-it/potentially-unwanted-applications",
          lb_tab_privacy: "Privacy",
          lb_tab_security: "Sicurezza",
          lb_my_modes: "Modalità",
          msg_mode_select: "Seleziona la modalità più adatta alle<br/>tue esigenze",
          "lb_mode_safe-surfing": "Navigazione sicura",
          "lb_mode_safe-private": "Sicura e privata",
          lb_mode_custom: "Personalizzata",
          lb_powered_by_avira: "Powered by Avira",
          lb_help: "Guida",
          lnk_abs_landing: "http://www.avira.com/abs-ftu",
          lb_trackers_twitter_share:
            "{{ threshold }} pubblicità e #tracker sono stati bloccati da #Sicurezza browser Avira. Scaricalo ora #gratis!",
          lb_trackers_facebook_share:
            "{{ threshold }} - ecco il numero di pubblicità e tracker a cui finora Sicurezza browser Avira ha impedito di spiare le mie attività online. È gratuito e lo raccomando caldamente.",
          lb_congratulations: "Congratulazioni!",
          lb_trackers_blocked_count: "{{ threshold }} pubblicità e tracker bloccati!",
          lb_trackers_milestone_subtitle: "Aiuta anche parenti e amici a proteggersi.",
          lb_tracker_notification_share_url_twitter: "http://www.avira.com/it/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Twitter",
          lb_tracker_notification_share_url_facebook:
            "http://www.avira.com/it/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Facebook",
          lb_tweet: "Tweet",
          lb_share: "Condividi",
          lb_trackers: "Tracker",
          lb_ads: "Pubblicità",
          lb_trackers_blocked_this_page: '<span class="txt--orange-dark">Tracker</span> bloccati su questo sito web',
          lb_ads_blocked_this_page: '<span class="txt--orange">Pubblicità</span> bloccate su questo sito web',
          lb_blocked_total: "<strong>{{ countTotal }}</strong><br>pubblicità e tracker bloccati in totale",
          lb_adblocking_credits: 'Blocco della pubblicità tramite <a href="https://adguard.com/?aid=27248" target="_blank">Adguard</a>'
        };
      },
      {}
    ],
    73: [
      function (e, t, n) {
        t.exports = {
          lb_safe_website: "安全なウェブサイト",
          lb_unsafe_website: "安全でないウェブサイト",
          lb_unsafe_content_website: "安全でないコンテンツ",
          lb_mse_website: "信頼できない検索エンジン",
          lb_trackers_blocked: '{{ domain }} の {{ count }} 件の広告およびトラッカーが<span class="txt--green">ブロック</span>されました',
          lb_trackers_blocked_short: "{{ count }} 件の広告およびトラッカーがブロックされました",
          lb_trackers_block_all: "このウェブサイトでブロック",
          lb_trackers_allow_all: "広告およびトラッカーのブロックを解除",
          msg_no_trackers:
            "現在のページでは、ユーザーを追跡するトラッカーはありません。アクティブ トラッカーのあるウェブサイトを開くと、完全なリストがここに表示されます。",
          msg_trackers_tooltip:
            "これらが、閲覧しているウェブサイトのトラッカーすべてです。隣のスライダーをクリックすることでトラッカーをブロックできます。スライダーが緑になると、トラッカーはブロックされ、ブラウジング アクティビティを追跡できなくなります。一部のトラッカーはデフォルトで許可されていることに注意してください。これらをブロックすると、ウェブページが正しく動作しなくなることがあります。",
          lb_settings: "設定",
          lb_setting_offers: "価格比較を表示",
          lb_setting_tooltip_offers: "安全なウェブサイトのみから、ショッピングしているアイテムの、より優れたセールを表示します。",
          lb_setting_dnt_header: "「ヘッダーを追跡しない」を送信",
          lb_setting_tooltip_dnt_header:
            "ユーザーを追跡しないようにウェブサイトに通知します。要求を無視すると、ABS は依然としてトラッカーをブロックします。",
          lb_setting_top_bar: "安全サインを表示",
          lb_setting_block_trackers: "デフォルトでトラッカーをブロック",
          lb_setting_tooltip_block_trackers: "デフォルトでトラッカーをブロックしてプライバシーを保護します。",
          lb_setting_cliqz: "CLIQZ 検索",
          lb_setting_tooltip_cliqz:
            "CLIQZ 検索は、ブラウザ バーの検索に移動する際にリアルタイムでウェブサイトおよび関連情報を提案します。これにより、検索が安全かつ高速になります。",
          lb_setting_privacy_badger: "Privacy Badger",
          lb_setting_tooltip_privacy_badger:
            "Privacy Badger は、スパイ広告をブロックし、隠れたトラッカーがユーザーの許可なしに秘密で追跡を行えないようにします。",
          lb_setting_https_everywhere: "HTTPS Everywhere",
          lb_setting_tooltip_https_everywhere: "HTTPS Everywhere は、通信を暗号化し、ブラウジングをより安全にします。",
          lb_setting_inAppTracking: "匿名統計",
          lb_setting_tooltip_inAppTracking: "匿名データを共有することで、製品向上に貢献します。",
          lb_setting_show_advanced_controls: "その他のブラウジング コントロールを表示",
          lb_setting_tooltip_show_advanced_controls: "Privacy Badger および HTTPS Everywhere アイコンをツールバーに表示します。",
          lb_setting_google_services: "Google サービス",
          lb_setting_adguard: "広告およびウェブ追跡をブロック",
          lb_setting_tooltip_adguard:
            "ユーザーがオンラインで監視されないようにすることでプライバシーを保護します。また、迷惑なポップアップ、ウェブ バナー、ビデオ広告などもブロックします。",
          lb_setting_adguard_social_media: "ソーシャル メディア追跡のブロック",
          lb_setting_tooltip_adguard_social_media:
            "ソーシャル メディア ボタンおよびウィジェットをウェブサイトから無効にします。そうすることで、ソーシャル ネットワークは、ユーザーがアクセスしたサイトを追跡できなくなります。",
          lb_setting_adguard_useful_ads: "有用な広告をブロックしないでください",
          lb_setting_tooltip_adguard_useful_ads: "関連性があり、迷惑でない広告が検索結果に表示されるようにします。",
          lb_setting_extension_scan: "拡張子の分析",
          lb_setting_tooltip_extension_scan:
            "ブラウジングの際に疑わしいアクティビティが検出された場合は、匿名レポートを Avira に送信できるようにします。",
          lb_setting_dark_mode: "ダークモード",
          lb_setting_tooltip_dark_mode: "ダークモードの有効/無効を切り替える",
          btn_blocking_back: "解除する",
          lb_blocking_options: "その他のオプション",
          lb_blocking_add_exception: "今後、このウェブサイトをブロックしない",
          btn_blocking_continue: "継続する",
          btn_dash_classification_cb_exception: "今後、このウェブサイトをブロックしない",
          lb_dash_classification_exception_info_add: "例外の追加",
          msg_dash_classification_exception_info_add:
            "このサイトは現在、例外リストにありません。例外を追加すると、そのアドレスを表示しようとしたときに、アドレスがブロックされなくなります。画面の上部には依然として警告が表示されます。",
          lb_dash_classification_exception_info_remove: "例外の削除",
          msg_dash_classification_exception_info_remove:
            "このサイトは現在、例外リストに記載されています。例外を削除すると、表示しようとするたびに、このアドレスがブロックされるようになります。",
          lb_privacy: "プライバシー ポリシー",
          lnk_privacy: "www.avira.com/ja/general-privacy",
          lb_eula: "エンド ユーザー使用許諾契約書",
          lnk_eula: "https://www.avira.com/ja/license-agreement-terms-of-use",
          lb_discover_mode: "詳細を発見",
          lb_feedback: "フィードバック",
          lb_feedback_question: "このアプリの使用感を評価してください?",
          lb_feedback_send: "送信",
          lb_feedback_send_title: "匿名のフィードバックを Avira に送信",
          lb_feedback_thank_you: "ありがとうございます！",
          lb_feedback_thank_you_feedback: "フィードバックをいただきありがとうございます",
          lb_feedback_help_improve: "いただいたフィードバックは、アプリの改善に役立てさせていただきます",
          lb_feedback_rate_store: "よろしければ {1} オンライン ショップで {0} の評価にご協力ください。",
          lb_feedback_ok: "OK",
          lb_feedback_rate_now: "今すぐ評価する",
          lb_feedback_later: "後で",
          lb_rate: "アプリの評価",
          lb_dash_pua_action_cancel: "ダウンロードのキャンセル",
          msg_mse_bar_warning: "お使いの検索エンジン設定は、改ざんされている可能性がありました。",
          lb_mse_take_me_away: "解除する!",
          lnk_avira: "https://www.avira.com/ja/",
          lb_mse_hide_warning: "この検索エンジンを信用します",
          msg_blocked_iframe_replacement: "安全でないコンテンツ",
          lb_unsafe_content_bar_warning: "Avira Browser Safety は、このウェブページでの安全でないコンテンツの読み込みを回避しました。",
          lb_unsafe_content_bar_ignore: "今後、メッセージを表示しない",
          lb_extension_permission_notification_extension_description:
            "Avira Browser Safety 拡張子は、疑わしいアクティビティについてのレポートを Avira に送信するためにユーザーの承諾を必要としています。",
          lb_extension_permission_notification_extension_permission_title:
            "ブラウジングの際に疑わしいアクティビティが検出された場合は、匿名レポートを Avira に送信できるようにします。",
          lb_extension_permission_notification_extension_permission_button: "許可",
          lb_extension_permission_notification_extension_permission_no_title: "この機能は、設定でいつでも有効化することができます。",
          lb_extension_permission_notification_extension_permission_no_button: "再度質問しない",
          lb_unsafe_content: "安全でないコンテンツ",
          msg_dash_unsafe_content_details_no_exception: "安全でないコンテンツがブロックされました：",
          msg_dash_unsafe_content_details_exception: "安全でないコンテンツがブロックされました",
          msg_dash_unsafe_content_risk_no_exception: "安全のためにも、コンテンツのブロックを維持することが推奨されます。",
          msg_dash_unsafe_content_risk_exception: "安全のためにも、例外を削除して安全でないコンテンツをブロックすることが推奨されます。",
          lb_dash_unsafe_content_show_details: "技術詳細",
          lb_dash_unsafe_content_hide_details: "非表示にする",
          msg_category_unknown: "このウェブサイトに関して見つかった情報はありません。",
          msg_category_safe: "既知の脅威はありません。",
          msg_category_malware: "これは、マルウェア ウェブサイトです",
          msg_category_malware_sub:
            "マルウェア ウェブサイトはデバイスに感染します。そして、ウイルス、ワーム、スパイウェア、およびトロイの木馬に感染させることができます。",
          msg_category_phishing: "これはフィッシング ウェブサイトです",
          msg_category_phishing_sub:
            "フィッシング ウェブサイトはユーザーを騙して、パスワードおよび銀行口座の情報などのアカウント情報を開示します。",
          msg_category_spam: "これは、スパム ウェブサイトです",
          msg_category_spam_sub: "スパム ウェブサイトはユーザーのメール アドレスを取得し、電子メールで広告を送信します。",
          msg_category_pua: "ダウンロード コンテンツには、潜在的に迷惑なアプリケーションが含まれます",
          msg_category_pua2: "このウェブサイトは、PUA を配布します",
          msg_category_pua2_sub:
            "潜在的に迷惑なアプリケーション（PUA）は、ユーザーが迷惑であると感じる動作を起こしたり、このような機能を含みます。",
          msg_category_mse: "信頼できない検索エンジン",
          msg_category_mse_sub:
            "この検索エンジンは信頼できません。これは、マルウェアおよび潜在的に迷惑なアプリケーションがトラフィックをリダイレクトすることが知られているためです。",
          msg_category_unsafe_content: "安全でないコンテンツがブロックされました",
          msg_category_unsafe_content_sub:
            "危険にされされているコンテンツまたは第三者コンテンツがハッキングされたり、意図的に有害なものである場合、ウェブページは安全でないコンテンツをロードします。",
          msg_what_is_pua: "PUA とは何か？",
          lnk_what_is_pua: "https://www.avira.com/ja/potentially-unwanted-applications",
          lb_tab_privacy: "プライバシー",
          lb_tab_security: "セキュリティ",
          lb_my_modes: "モード",
          msg_mode_select: "ニーズ<br/>に最も適したモードを選択します",
          "lb_mode_safe-surfing": "安全なサーフィン",
          "lb_mode_safe-private": "安全かつプライベート",
          lb_mode_custom: "カスタム",
          lb_powered_by_avira: "Powered by Avira",
          lb_help: "ヘルプ",
          lnk_abs_landing: "http://www.avira.com/abs-ftu",
          lb_trackers_twitter_share:
            "{{ threshold }} 件の広告および #trackers は #Avira Browser Safety によってブロックされました。#forfree で入手しましょう！",
          lb_trackers_facebook_share:
            "{{ threshold }} - Avira Browser Safety はこれまで、これほど多くの広告およびトラッカーによる、オンライン アクティビティのスパイ行為をブロックしました。無料ですし、非常にお勧めです。",
          lb_congratulations: "おめでとうございます!",
          lb_trackers_blocked_count: "{{ threshold }} 件の広告およびトラッカーがブロックされました！",
          lb_trackers_milestone_subtitle: "家族や友達も保護します。",
          lb_tracker_notification_share_url_twitter: "http://www.avira.com/ja/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Twitter",
          lb_tracker_notification_share_url_facebook:
            "http://www.avira.com/ja/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Facebook",
          lb_tweet: "ツィート",
          lb_share: "共有",
          lb_trackers: "トラッカー",
          lb_ads: "広告",
          lb_trackers_blocked_this_page: 'このウェブサイトでブロックされた<span class="txt--orange-dark">トラッカー</span>',
          lb_ads_blocked_this_page: 'このウェブサイトでブロックされた<span class="txt--orange">広告</span>',
          lb_blocked_total: "全体で <strong>{{ countTotal }}</strong><br> 件の広告およびトラッカーがブロックされました",
          lb_adblocking_credits: '<a href="https://adguard.com/?aid=27248" target="_blank">Adguard</a>による広告ブロック'
        };
      },
      {}
    ],
    74: [
      function (e, t, n) {
        t.exports = {
          lb_safe_website: "Veilige website",
          lb_unsafe_website: "Onveilige website",
          lb_unsafe_content_website: "Onveilige inhoud",
          lb_mse_website: "Niet-vertrouwde zoekmachine",
          lb_trackers_blocked: '{{ count }} advertenties en trackers <span class="txt--green">geblokkeerd</span> op {{ domain }}',
          lb_trackers_blocked_short: "{{ count }} advertenties en trackers geblokkeerd",
          lb_trackers_block_all: "Op deze website blokkeren",
          lb_trackers_allow_all: "Advertenties en trackers niet meer blokkeren",
          msg_no_trackers:
            "Er zijn geen trackers die u volgen op de huidige pagina. Wanneer u een website met actieve trackers opent, wordt de volledige lijst hier weergegeven.",
          msg_trackers_tooltip:
            "Dit zijn alle trackers op de website die u bekijkt. U kunt een tracker blokkeren door op de schuifknop ernaast te klikken. Wanneer de schuifknop groen is, is de tracker geblokkeerd en kan deze uw surfgedrag niet traceren. Let op: sommige trackers worden standaard toegelaten. De website werkt misschien niet goed als u deze blokkeert.",
          lb_settings: "Instellingen",
          lb_setting_offers: "Prijsvergelijkingen tonen",
          lb_setting_tooltip_offers: "Toon betere aanbiedingen voor artikelen die u wilt kopen van alleen veilige websites.",
          lb_setting_dnt_header: "Niet traceren-header versturen",
          lb_setting_tooltip_dnt_header:
            "Laat websites weten dat u niet getraceerd wilt worden. Indien zij dit verzoek negeren, zal ABS toch alle trackers blokkeren.",
          lb_setting_top_bar: "Beveiligingsindicator tonen",
          lb_setting_block_trackers: "Trackers standaard blokkeren",
          lb_setting_tooltip_block_trackers: "Bescherm uw privacy door trackers standaard te blokkeren.",
          lb_setting_cliqz: "CLIQZ Search",
          lb_setting_tooltip_cliqz:
            "CLIQZ Search geeft u suggesties voor websites met relevante informatie in realtime terwijl u uw zoekopdracht in de browserzoekbalk intypt, waardoor u veiliger en sneller kunt zoeken.",
          lb_setting_privacy_badger: "Privacy Badger",
          lb_setting_tooltip_privacy_badger:
            "Privacy Badger blokkeert spionerende advertenties en voorkomt dat onzichtbare trackers u onopgemerkt volgen zonder uw toestemming.",
          lb_setting_https_everywhere: "HTTPS Everywhere",
          lb_setting_tooltip_https_everywhere: "HTTPS Everyhwere versleutelt uw berichten zodat u veiliger kunt surfen.",
          lb_setting_inAppTracking: "Anonieme statistieken",
          lb_setting_tooltip_inAppTracking: "Help ons het product te verbeteren door anonieme data te delen.",
          lb_setting_show_advanced_controls: "Extra instellingen voor het surfen tonen",
          lb_setting_tooltip_show_advanced_controls: "Geeft de pictogrammen van Privacy Badger en HTTPS Everywhere weer in de werkbalk.",
          lb_setting_google_services: "Google-diensten",
          lb_setting_adguard: "Advertenties & online traceren blokkeren",
          lb_setting_tooltip_adguard:
            "Beschermt uw privacy door te voorkomen dat iemand u online kan volgen. Blokkeert ook opdringerige pop-ups, banners, video-advertenties en meer.",
          lb_setting_adguard_social_media: "Traceren via social media blokkeren",
          lb_setting_tooltip_adguard_social_media:
            "Schakelt social media-knoppen en -widgets op websites uit, zodat sociale netwerken niet kunnen bijhouden welke websites u bezoekt.",
          lb_setting_adguard_useful_ads: "Bruikbare advertenties niet blokkeren",
          lb_setting_tooltip_adguard_useful_ads: "Hierdoor worden relevante, niet-opdringerige advertenties in uw zoekresultaten getoond.",
          lb_setting_extension_scan: "Extensie-analyse",
          lb_setting_tooltip_extension_scan:
            "Geef toestemming een anoniem rapport naar Avira te versturen wanneer er verdachte activiteiten worden gedetecteerd tijdens het surfen.",
          lb_setting_dark_mode: "Donkere modus",
          lb_setting_tooltip_dark_mode: "Donkere modus in-/uitschakelen",
          btn_blocking_back: "Haal me hier weg!",
          lb_blocking_options: "Meer opties",
          lb_blocking_add_exception: "Deze website nooit blokkeren",
          btn_blocking_continue: "Toch doorgaan",
          btn_dash_classification_cb_exception: "Deze website nooit blokkeren",
          lb_dash_classification_exception_info_add: "Een uitzondering toevoegen",
          msg_dash_classification_exception_info_add:
            "Deze site staat nu NIET op uw uitzonderingenlijst. Wanneer u een uitzondering toevoegt, wordt het adres niet geblokkeerd wanneer u deze probeert te bekijken. U blijft wel de waarschuwing boven aan het scherm zien.",
          lb_dash_classification_exception_info_remove: "Een uitzondering verwijderen",
          msg_dash_classification_exception_info_remove:
            "Deze site staat nu op uw uitzonderingenlijst. Wanneer u een uitzondering verwijdert, wordt het adres geblokkeerd wanneer u deze probeert te bekijken.",
          lb_privacy: "Privacybeleid",
          lnk_privacy: "https://www.avira.com/nl/general-privacy",
          lb_eula: "Licentieovereenkomst voor eindgebruiker",
          lnk_eula: "http://www.avira.com/nl/license-agreement-terms-of-use",
          lb_discover_mode: "Meer ontdekken",
          lb_feedback: "Feedback",
          lb_feedback_question: "Hoe zou u uw ervaring beoordelen?",
          lb_feedback_send: "Verzenden",
          lb_feedback_send_title: "Anonieme feedback verzenden naar Avira",
          lb_feedback_thank_you: "Dank u!",
          lb_feedback_thank_you_feedback: "Bedankt voor uw feedback",
          lb_feedback_help_improve: "Met uw feedback kunnen we de app verbeteren",
          lb_feedback_rate_store: "Zou u even de tijd willen nemen om {0} te beoordelen in de {1} Store?",
          lb_feedback_ok: "OK",
          lb_feedback_rate_now: "Nu beoordelen",
          lb_feedback_later: "Later",
          lb_rate: "App beoordelen",
          lb_dash_pua_action_cancel: "Download annuleren",
          msg_mse_bar_warning: "De instellingen van uw zoekmachine zijn mogelijk ongewenst veranderd.",
          lb_mse_take_me_away: "Haal me hier weg!",
          lnk_avira: "https://www.avira.com/nl/",
          lb_mse_hide_warning: "Ik vertrouw deze zoekmachine",
          msg_blocked_iframe_replacement: "Onveilige inhoud",
          lb_unsafe_content_bar_warning: "Avira Browser Safety voorkwam dat er onveilige inhoud op deze webpagina werd geladen.",
          lb_unsafe_content_bar_ignore: "Dit bericht niet meer tonen",
          lb_extension_permission_notification_extension_description:
            "De Avira Browser Safety-extensie heeft uw toestemming nodig om een rapport over verdachte activiteiten naar Avira te versturen.",
          lb_extension_permission_notification_extension_permission_title:
            "Geef toestemming een anoniem rapport naar Avira te versturen wanneer er verdachte activiteiten worden gedetecteerd tijdens het surfen.",
          lb_extension_permission_notification_extension_permission_button: "Toestaan",
          lb_extension_permission_notification_extension_permission_no_title:
            "U kunt deze functie op ieder moment inschakelen bij Instellingen.",
          lb_extension_permission_notification_extension_permission_no_button: "Niet meer vragen",
          lb_unsafe_content: "Onveilige inhoud",
          msg_dash_unsafe_content_details_no_exception: "Onveilige inhoud geblokkeerd:",
          msg_dash_unsafe_content_details_exception: "Onveilige inhoud geblokkeerd",
          msg_dash_unsafe_content_risk_no_exception: "Voor veiligheidsredenen wordt u aangeraden de inhoud te blijven blokkeren.",
          msg_dash_unsafe_content_risk_exception:
            "Voor veiligheidsredenen wordt u aangeraden de onveilige inhoud te blokkeren door de uitzondering te verwijderen.",
          lb_dash_unsafe_content_show_details: "Technische details",
          lb_dash_unsafe_content_hide_details: "Verbergen",
          msg_category_unknown: "Er is geen informatie voor deze website gevonden.",
          msg_category_safe: "Geen bekende dreigingen.",
          msg_category_malware: "Dit is een malwarewebsite",
          msg_category_malware_sub:
            "Malwarewebsites besmetten uw apparaat en kunnen virussen, wormen, spyware en Trojaanse paarden bevatten.",
          msg_category_phishing: "Dit is een phishingwebsite",
          msg_category_phishing_sub:
            "Phishingwebsites misleiden u om persoonlijke informatie bekend te maken zoals wachtwoorden en bankrekeninginformatie.",
          msg_category_spam: "Dit is een spamwebsite",
          msg_category_spam_sub: "Spamwebsites bemachtigen uw e-mailadres om u via e-mail advertenties te sturen.",
          msg_category_pua: "De download bevat Potentieel Ongewilde Toepassingen",
          msg_category_pua2: "Deze website verspreidt PUA's",
          msg_category_pua2_sub:
            "Potentieel Ongewilde Toepassingen (PUA's) tonen gedrag of bevatten functies die door gebruikers als ongewenst worden beschouwd.",
          msg_category_mse: "Niet-vertrouwde zoekmachine",
          msg_category_mse_sub:
            "Deze zoekmachine is niet vertrouwd omdat het bekend is dat malware en Potentieel Ongewilde Toepassingen er verkeer naar omleiden.",
          msg_category_unsafe_content: "Onveilige inhoud geblokkeerd",
          msg_category_unsafe_content_sub:
            "Webpagina's laden onveilige inhoud als deze gecompromitteerd zijn of inhoud van derden gehackt of doelbewust schadelijk is.",
          msg_what_is_pua: "Wat is een PUA?",
          lnk_what_is_pua: "https://www.avira.com/en/potentially-unwanted-applications",
          lb_tab_privacy: "Privacy",
          lb_tab_security: "Beveiliging",
          lb_my_modes: "Modi",
          msg_mode_select: "Selecteer de modus die het beste past<br/>bij uw behoeften",
          "lb_mode_safe-surfing": "Veilig surfen",
          "lb_mode_safe-private": "Veilig en privé",
          lb_mode_custom: "Aangepast",
          lb_powered_by_avira: "Aangeboden door Avira",
          lb_help: "Help",
          lnk_abs_landing: "http://www.avira.com/abs-ftu",
          lb_trackers_twitter_share:
            "{{ threshold }} advertenties en #trackers werden geblokkeerd door #Avira Browser Safety. Krijg de uwe nu #gratis!",
          lb_trackers_facebook_share:
            "{{ threshold }} - Zoveel advertenties en trackers heeft Avira Browser Safety tot nu toe gestopt met het bespioneren van mijn activiteiten online. Het is gratis en ik kan het zeer aanbevelen.",
          lb_congratulations: "Gefeliciteerd!",
          lb_trackers_blocked_count: "{{ threshold }} advertenties en trackers geblokkeerd!",
          lb_trackers_milestone_subtitle: "Help uw familie en vrienden ook te beschermen.",
          lb_tracker_notification_share_url_twitter: "http://www.avira.com/nl/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Twitter",
          lb_tracker_notification_share_url_facebook:
            "http://www.avira.com/nl/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Facebook",
          lb_tweet: "Tweeten",
          lb_share: "Delen",
          lb_trackers: "Trackers",
          lb_ads: "Advertenties",
          lb_trackers_blocked_this_page: '<span class="txt--orange-dark">Trackers</span> op deze website geblokkeerd',
          lb_ads_blocked_this_page: '<span class="txt--orange">Advertenties</span> op deze website geblokkeerd',
          lb_blocked_total: "<strong>{{ countTotal }}</strong><br>Totaal aantal geblokkeerde advertenties en trackers",
          lb_adblocking_credits: 'Advertenties blokkeren met <a href="https://adguard.com/?aid=27248" target="_blank">Adguard</a>'
        };
      },
      {}
    ],
    75: [
      function (e, t, n) {
        t.exports = {
          lb_safe_website: "Site seguro",
          lb_unsafe_website: "Site inseguro",
          lb_unsafe_content_website: "Conteúdos inseguros",
          lb_mse_website: "Mecanismo de pesquisa não confiável",
          lb_trackers_blocked: '{{ count }} anúncios e rastreadores <span class="txt--green">bloqueados</span> em {{ domain }}',
          lb_trackers_blocked_short: "{{ count }} anúncios e rastreadores bloqueados",
          lb_trackers_block_all: "Bloqueios neste site",
          lb_trackers_allow_all: "Desbloquear anúncios e rastreadores",
          msg_no_trackers:
            "Não existem quaisquer rastreadores seguindo você na página atual. Se você abrir um site com rastreadores ativos, a lista completa será exibida aqui.",
          msg_trackers_tooltip:
            "Estes são todos os rastreadores no site que você está visualizando. Você pode bloquear um rastreador clicando no controle deslizante que se encontra ao lado. Se um controle deslizante estiver verde, esse rastreador encontra-se bloqueado e não consegue rastrear sua atividade de navegação. Observe que alguns rastreadores são permitidos por padrão. Bloqueá-los poderá prejudicar o funcionamento da página web.",
          lb_settings: "Configurações",
          lb_setting_offers: "Exibir comparações de preços",
          lb_setting_tooltip_offers: "Exibir negócios melhores para os itens que você está comprando somente de sites seguros.",
          lb_setting_dnt_header: "Enviar cabeçalho Do Not Track",
          lb_setting_tooltip_dnt_header:
            "Informe os sites de que não devem rastrear você. Se ignorarem o pedido, a Segurança do navegador Avira ainda bloqueia todos os rastreadores.",
          lb_setting_top_bar: "Mostrar indicador de segurança",
          lb_setting_block_trackers: "Bloquear rastreadores por padrão",
          lb_setting_tooltip_block_trackers: "Proteja sua privacidade bloqueando rastreadores por padrão.",
          lb_setting_cliqz: "Mecanismo de pesquisa CLIQZ",
          lb_setting_tooltip_cliqz:
            "O mecanismo de pesquisa CLIQZ sugere a você sites e informações importantes em tempo real, enquanto você digita sua pesquisa na barra de navegação, permitindo que você pesquise de forma mais segura e rápida.",
          lb_setting_privacy_badger: "Privacy Badger",
          lb_setting_tooltip_privacy_badger:
            "O Privacy Badger bloqueia anúncios de espionagem e previne que rastreadores invisíveis o rastreiem secretamente, sem sua permissão.",
          lb_setting_https_everywhere: "HTTPS Everywhere",
          lb_setting_tooltip_https_everywhere: "O HTTPS Everywhere criptografa suas comunicações e torna sua navegação mais segura.",
          lb_setting_inAppTracking: "Estatísticas anônimas",
          lb_setting_tooltip_inAppTracking: "Ajude-nos a melhorar o produto, compartilhando dados anônimos.",
          lb_setting_show_advanced_controls: "Controles de navegação extra",
          lb_setting_tooltip_show_advanced_controls: "Exibe ícones de Privacy Badger e HTTPS Everywhere na barra de ferramentas.",
          lb_setting_google_services: "Google Services",
          lb_setting_adguard: "Bloquear anúncios e rastreamento da web",
          lb_setting_tooltip_adguard:
            "Protege sua privacidade impedindo que qualquer pessoa possa monitorá-lo online. Também bloqueia pop-ups intrusivos, banners da web, anúncios em vídeo e outros.",
          lb_setting_adguard_social_media: "Bloquear rastreamento de mídia social",
          lb_setting_tooltip_adguard_social_media:
            "Desativa botões de mídias sociais e widgets de sites, para que as redes sociais não possam fazer o rastreamento dos sites que você visitar.",
          lb_setting_adguard_useful_ads: "Não bloquear anúncios úteis",
          lb_setting_tooltip_adguard_useful_ads:
            "Permite que anúncios relevantes e não intrusivos sejam mostrados nos resultados da pesquisa.",
          lb_setting_extension_scan: "Análise de extensões",
          lb_setting_tooltip_extension_scan:
            "Permite enviar um relatório anônimo à Avira se atividades suspeitas forem detectadas durante a navegação.",
          lb_setting_dark_mode: "Modo escuro",
          lb_setting_tooltip_dark_mode: "Desativar/ativar modo escuro",
          btn_blocking_back: "Tire-me daqui!",
          lb_blocking_options: "Mais opções",
          lb_blocking_add_exception: "Nunca bloquear este site",
          btn_blocking_continue: "Continuar mesmo assim",
          btn_dash_classification_cb_exception: "Nunca bloquear este site",
          lb_dash_classification_exception_info_add: "Adicionando uma exceção",
          msg_dash_classification_exception_info_add:
            "Este site NÃO está atualmente em sua lista de exceções. Quando você adiciona uma exceção, o endereço não será bloqueado ao tentar visualizá-lo. Você ainda verá a advertência na parte superior da tela.",
          lb_dash_classification_exception_info_remove: "Removendo uma exceção",
          msg_dash_classification_exception_info_remove:
            "Este site está atualmente em sua lista de exceções. Se remover a exceção, o endereço será bloqueado sempre que você tentar exibi-lo.",
          lb_privacy: "Política de privacidade",
          lnk_privacy: "https://www.avira.com/pt-br/general-privacy",
          lb_eula: "Contrato de Licença de Usuário Final",
          lnk_eula: "https://www.avira.com/pt-br/license-agreement-terms-of-use",
          lb_discover_mode: "Descubra mais",
          lb_feedback: "Comentários",
          lb_feedback_question: "Como você avaliaria sua experiência?",
          lb_feedback_send: "Enviar",
          lb_feedback_send_title: "Envie um comentário anônimo para a Avira",
          lb_feedback_thank_you: "Obrigado!",
          lb_feedback_thank_you_feedback: "Obrigado pelo seu comentário",
          lb_feedback_help_improve: "Seus comentários nos ajudam a melhorar o app",
          lb_feedback_rate_store: "Você poderia reservar um momento e avaliar o {0} na loja do {1}?",
          lb_feedback_ok: "OK",
          lb_feedback_rate_now: "Avaliar agora",
          lb_feedback_later: "Mais tarde",
          lb_rate: "Classificar aplicativo",
          lb_dash_pua_action_cancel: "Cancelar download",
          msg_mse_bar_warning: "Suas configurações de motor de busca podem ter sido alteradas.",
          lb_mse_take_me_away: "Tire-me daqui!",
          lnk_avira: "https://www.avira.com/pt-br/",
          lb_mse_hide_warning: "Eu confio nesse mecanismo de pesquisa",
          msg_blocked_iframe_replacement: "Conteúdos inseguros",
          lb_unsafe_content_bar_warning:
            "A Segurança do navegador Avira impediu o carregamento de conteúdos inseguros nessa página da Web.",
          lb_unsafe_content_bar_ignore: "Não exibir essa mensagem novamente.",
          lb_extension_permission_notification_extension_description:
            "A extensão de Segurança do navegador Avira precisa de sua aprovação para enviar-nos um relatório sobre atividades suspeitas.",
          lb_extension_permission_notification_extension_permission_title:
            "Permite enviar um relatório anônimo à Avira se atividades suspeitas forem detectadas durante a navegação.",
          lb_extension_permission_notification_extension_permission_button: "Permitir",
          lb_extension_permission_notification_extension_permission_no_title:
            "Você pode ativar este recurso a qualquer momento nas configurações.",
          lb_extension_permission_notification_extension_permission_no_button: "Não perguntar novamente",
          lb_unsafe_content: "Conteúdos inseguros",
          msg_dash_unsafe_content_details_no_exception: "Conteúdos inseguros bloqueados:",
          msg_dash_unsafe_content_details_exception: "Conteúdos inseguros bloqueados",
          msg_dash_unsafe_content_risk_no_exception: "Para sua segurança, é recomendável manter os conteúdos bloqueados.",
          msg_dash_unsafe_content_risk_exception: "Para sua segurança, é recomendável remover a exceção e bloquear os conteúdos inseguros.",
          lb_dash_unsafe_content_show_details: "Detalhes técnicos",
          lb_dash_unsafe_content_hide_details: "Ocultar",
          msg_category_unknown: "Não existem informações sobre este site.",
          msg_category_safe: "Nenhuma ameaça conhecida.",
          msg_category_malware: "Esse é um site de malware",
          msg_category_malware_sub: "Os sites de malware infetam seu dispositivo e podem incluir vírus, worms, spyware e Cavalos de Troia.",
          msg_category_phishing: "Esse é um site de phishing",
          msg_category_phishing_sub:
            "Os sites de phishing induzem o usuário a revelar suas informações pessoais, tais como senhas e informações de contas bancárias.",
          msg_category_spam: "Esse é um site de spam",
          msg_category_spam_sub: "Os sites de spam capturam o seu endereço de email para enviar publicidade por email.",
          msg_category_pua: "O download contém aplicativos potencialmente indesejados",
          msg_category_pua2: "Esse site distribui PUA",
          msg_category_pua2_sub:
            "Os aplicativos potencialmente indesejados (PUA) exibem um comportamento ou contêm recursos considerados indesejados pelos usuários.",
          msg_category_mse: "Mecanismo de pesquisa não confiável",
          msg_category_mse_sub:
            "Esse mecanismo de pesquisa é visto com desconfiança por o malware e os aplicativos potencialmente indesejados serem conhecidos por redirecionar tráfego.",
          msg_category_unsafe_content: "Conteúdos inseguros bloqueados",
          msg_category_unsafe_content_sub:
            "As páginas da Web carregam conteúdos inseguros se os conteúdos comprometidos ou de terceiros forem atacados por hackers ou forem intencionalmente nocivos.",
          msg_what_is_pua: "O que são PUA?",
          lnk_what_is_pua: "https://www.avira.com/pt/potentially-unwanted-applications",
          lb_tab_privacy: "Privacidade",
          lb_tab_security: "Segurança",
          lb_my_modes: "Modos",
          msg_mode_select: "Selecione o modo que melhor atende<br/>suas necessidades",
          "lb_mode_safe-surfing": "Navegação segura",
          "lb_mode_safe-private": "Seguro e privado",
          lb_mode_custom: "Personalizado",
          lb_powered_by_avira: "Desenvolvido pela Avira",
          lb_help: "Ajuda",
          lnk_abs_landing: "http://www.avira.com/abs-ftu",
          lb_trackers_twitter_share:
            "{{ threshold }} anúncios e #rastreadores foram bloqueados pelo Segurança do navegador #Avira. Obtenha o seu agora #gratuitamente!",
          lb_trackers_facebook_share:
            "{{ threshold }} - número de anúncios e rastreadores que o Segurança do navegador Avira impediu de espionar minhas atividades online até agora. É gratuito e altamente recomendável.",
          lb_congratulations: "Parabéns!",
          lb_trackers_blocked_count: "{{ threshold }} anúncios e rastreadores bloqueados!",
          lb_trackers_milestone_subtitle: "Ajude a proteger sua família e amigos também.",
          lb_tracker_notification_share_url_twitter:
            "http://www.avira.com/pt-br/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Twitter",
          lb_tracker_notification_share_url_facebook:
            "http://www.avira.com/pt-br/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Facebook",
          lb_tweet: "Tweet",
          lb_share: "Compartilhar",
          lb_trackers: "Rastreadores",
          lb_ads: "Anúncios",
          lb_trackers_blocked_this_page: '<span class="txt--orange-dark">Rastreadores</span> bloqueados neste site',
          lb_ads_blocked_this_page: '<span class="txt--orange">Anúncios</span> bloqueados neste site',
          lb_blocked_total: "<strong>{{ countTotal }}</strong><br>Anúncios e rastreadores gerais bloqueados",
          lb_adblocking_credits: 'Anúncio bloqueado por <a href="https://adguard.com/?aid=27248" target="_blank">Adguard</a>'
        };
      },
      {}
    ],
    76: [
      function (e, t, n) {
        t.exports = {
          lb_safe_website: "Надежный веб-сайт",
          lb_unsafe_website: "Ненадежный веб-сайт",
          lb_unsafe_content_website: "Небезопасное содержимое",
          lb_mse_website: "Ненадежная поисковая система",
          lb_trackers_blocked:
            '<span class="txt--green">Заблокировано</span> рекламных объявлений и программ отслеживания на {{ domain }}: {{ count }}',
          lb_trackers_blocked_short: "Заблокировано рекламных объявлений и программ отслеживания: {{ count }}",
          lb_trackers_block_all: "Заблокировать на этом веб-сайте",
          lb_trackers_allow_all: "Разблокировать все рекламные объявления и программы отслеживания",
          msg_no_trackers:
            "На данной странице нет программ отслеживания. При открытии веб-сайта с активными программами отслеживания их полный список будет показан здесь.",
          msg_trackers_tooltip:
            "Это все программы отслеживания на текущем веб-сайте. Для блокировки программы отслеживания нажмите на ползунок рядом с ним. Если ползунок отображается зеленым, то программа заблокирована и не может отслеживать ваши действия. Обратите внимание, что по умолчанию некоторые программы отслеживания разблокированы. Их блокировка может привести к некорректной работе веб-страницы.",
          lb_settings: "Настройки",
          lb_setting_offers: "Показать сравнение цен",
          lb_setting_tooltip_offers: "Показывать более выгодные цены на товары, которые вы ищете, только с надежных веб-сайтов.",
          lb_setting_dnt_header: "Отправить заголовок «Не отслеживать»",
          lb_setting_tooltip_dnt_header:
            "Запрашивать отключение отслеживания на веб-сайтах. Если сайты игнорируют запрос, веб-фильтр Avira все равно блокирует все программы отслеживания.",
          lb_setting_top_bar: "Показать индикатор безопасности",
          lb_setting_block_trackers: "Блокировать программы отслеживания по умолчанию",
          lb_setting_tooltip_block_trackers: "Защитите свои персональные данные, блокируя программы отслеживания по умолчанию.",
          lb_setting_cliqz: "Поиск CLIQZ",
          lb_setting_tooltip_cliqz:
            "Поиск CLIQZ предлагает вам веб-сайты и релевантную информацию в реальном времени при введении данных в строку браузера, что делает поиск быстрее и безопаснее.",
          lb_setting_privacy_badger: "Privacy Badger",
          lb_setting_tooltip_privacy_badger:
            "Privacy Badger блокирует шпионскую рекламу и предотвращает отслеживание ваших действий невидимыми программами отслеживания.",
          lb_setting_https_everywhere: "HTTPS Everywhere",
          lb_setting_tooltip_https_everywhere:
            "HTTPS Everywhere обеспечивает шифрование вашей переписки и повышает вашу безопасность онлайн.",
          lb_setting_inAppTracking: "Анонимная статистика",
          lb_setting_tooltip_inAppTracking: "Помогите нам улучшить продукт, предоставив анонимные данные.",
          lb_setting_show_advanced_controls: "Больше возможностей просмотра",
          lb_setting_tooltip_show_advanced_controls: "Показать на панели значки Privacy Badger и HTTPS Everywhere.",
          lb_setting_google_services: "Службы Google",
          lb_setting_adguard: "Заблокировать рекламные объявления и программы отслеживания в Интернете",
          lb_setting_tooltip_adguard:
            "Защищает вашу конфиденциальность, предотвращая несанкционированное наблюдение за вашими действиями в Интернете. Кроме того, блокирует назойливые всплывающие окна, веб-баннеры, рекламные видеоролики и другие нежелательные объявления.",
          lb_setting_adguard_social_media: "Заблокировать программы отслеживания в социальных сетях",
          lb_setting_tooltip_adguard_social_media:
            "Отключает кнопки и виджеты социальных сетей на веб-сайтах, благодаря чему социальные сети не могут следить за тем, какие веб-сайты вы посещаете.",
          lb_setting_adguard_useful_ads: "Не блокировать уместную рекламу",
          lb_setting_tooltip_adguard_useful_ads: "Отображает релевантные рекламные объявления в результатах поиска.",
          lb_setting_extension_scan: "Анализ расширений",
          lb_setting_tooltip_extension_scan:
            "Включите для отправки специалистам Avira анонимных отчетов при обнаружении подозрительной деятельности в ходе просмотра веб-страниц.",
          lb_setting_dark_mode: "Темный режим",
          lb_setting_tooltip_dark_mode: "Включить/отключить темный режим",
          btn_blocking_back: "Уходим отсюда!",
          lb_blocking_options: "Дополнительные опции",
          lb_blocking_add_exception: "Никогда не блокировать этот веб-сайт",
          btn_blocking_continue: "Все равно продолжить",
          btn_dash_classification_cb_exception: "Никогда не блокировать этот веб-сайт",
          lb_dash_classification_exception_info_add: "Добавление исключения",
          msg_dash_classification_exception_info_add:
            "Этот сайт НЕ включен в ваш список исключений. После добавления исключения этот веб-сайт не будет блокироваться при попытке перехода на него. В верхней части экрана будет отображаться предупреждение.",
          lb_dash_classification_exception_info_remove: "Удаление исключения",
          msg_dash_classification_exception_info_remove:
            "Этот сайт включен в ваш список исключений. После удаления исключения этот веб-сайт будет блокироваться при попытке перехода на него.",
          lb_privacy: "Политика конфиденциальности",
          lnk_privacy: "https://www.avira.com/ru/general-privacy",
          lb_eula: "Лицензионное соглашение с конечным пользователем",
          lnk_eula: "https://www.avira.com/ru/license-agreement-terms-of-use",
          lb_discover_mode: "Узнать больше",
          lb_feedback: "Обратная связь",
          lb_feedback_question: "Как бы вы оценили свои впечатления?",
          lb_feedback_send: "Отправить",
          lb_feedback_send_title: "Отправьте анонимный отзыв в Avira",
          lb_feedback_thank_you: "Спасибо!",
          lb_feedback_thank_you_feedback: "Благодарим вас за отзыв",
          lb_feedback_help_improve: "Ваши отзывы помогают нам делать это приложение лучше",
          lb_feedback_rate_store: "Просим вас уделить минуту и оценить {0} в магазине {1}.",
          lb_feedback_ok: "ОК",
          lb_feedback_rate_now: "Оценить",
          lb_feedback_later: "Позже",
          lb_rate: "Оценить приложение",
          lb_dash_pua_action_cancel: "Отменить загрузку",
          msg_mse_bar_warning: "Возможно, ваши настройки поиска были изменены.",
          lb_mse_take_me_away: "Уходим отсюда!",
          lnk_avira: "https://www.avira.com/ru/",
          lb_mse_hide_warning: "Я доверяю этой поисковой системе",
          msg_blocked_iframe_replacement: "Небезопасное содержимое",
          lb_unsafe_content_bar_warning: "Веб-фильтр Avira предотвратил загрузку небезопасного содержимого на этой веб-странице.",
          lb_unsafe_content_bar_ignore: "Больше не показывать это сообщение",
          lb_extension_permission_notification_extension_description:
            "Веб-фильтру Avira требуется разрешение на отправку специалистам Avira отчетов о подозрительной деятельности.",
          lb_extension_permission_notification_extension_permission_title:
            "Включите для отправки специалистам Avira анонимных отчетов при обнаружении подозрительной деятельности в ходе просмотра веб-страниц.",
          lb_extension_permission_notification_extension_permission_button: "Разрешить",
          lb_extension_permission_notification_extension_permission_no_title:
            "Эту возможность можно в любой момент включить в разделе настроек.",
          lb_extension_permission_notification_extension_permission_no_button: "Больше не спрашивать",
          lb_unsafe_content: "Небезопасное содержимое",
          msg_dash_unsafe_content_details_no_exception: "Небезопасное содержимое заблокировано:",
          msg_dash_unsafe_content_details_exception: "Небезопасное содержимое заблокировано",
          msg_dash_unsafe_content_risk_no_exception: "Рекомендуем для вашей безопасности оставить это содержимое заблокированным.",
          msg_dash_unsafe_content_risk_exception:
            "Рекомендуем для вашей безопасности заблокировать небезопасное содержимое, удалив исключение.",
          lb_dash_unsafe_content_show_details: "Технические подробности",
          lb_dash_unsafe_content_hide_details: "Скрыть",
          msg_category_unknown: "Информация об этом веб-сайте не найдена.",
          msg_category_safe: "Известных угроз нет.",
          msg_category_malware: "Это вредоносный веб-сайт",
          msg_category_malware_sub:
            "Вредоносные веб-сайты могут заразить ваше устройство с помощью вирусов, червей, шпионского ПО и троянов.",
          msg_category_phishing: "Это фишинговый веб-сайт",
          msg_category_phishing_sub:
            "Фишинговые веб-сайты обманом получают от вас конфиденциальную информацию (например, пароли и номера банковских счетов).",
          msg_category_spam: "Это спам-сайт",
          msg_category_spam_sub: "Спам-сайты крадут ваш адрес электронной почты и используют его для нежелательных рассылок.",
          msg_category_pua: "Загрузка содержит потенциально нежелательные приложения",
          msg_category_pua2: "Этот веб-сайт распространяет потенциально нежелательные приложения",
          msg_category_pua2_sub:
            "Потенциально нежелательные приложения выполняют действия или содержат функции, воспринимаемые пользователями как нежелательные.",
          msg_category_mse: "Ненадежная поисковая система",
          msg_category_mse_sub:
            "Эта поисковая система не является надежной, поскольку потенциально нежелательные приложения перенаправляют на нее трафик.",
          msg_category_unsafe_content: "Небезопасное содержимое заблокировано",
          msg_category_unsafe_content_sub:
            "Веб-страницы могут стать небезопасными после взлома или могут содержать вредоносные сторонние материалы.",
          msg_what_is_pua: "Что такое потенциально нежелательные приложения?",
          lnk_what_is_pua: "https://www.avira.com/ru/potentially-unwanted-applications",
          lb_tab_privacy: "Конфиденциальность",
          lb_tab_security: "Безопасность",
          lb_my_modes: "Режимы",
          msg_mode_select: "Выберите наиболее подходящий<br/> режим",
          "lb_mode_safe-surfing": "Безопасный просмотр",
          "lb_mode_safe-private": "Безопасность и конфиденциальность",
          lb_mode_custom: "Пользователь",
          lb_powered_by_avira: "Технологии Avira",
          lb_help: "Справка",
          lnk_abs_landing: "http://www.avira.com/abs-ftu",
          lb_trackers_twitter_share:
            "{{ threshold }} — столько рекламных объявлений и программ #отслеживания заблокировано Веб-фильтром #Avira. Установите #бесплатно прямо сейчас!",
          lb_trackers_facebook_share:
            "{{ threshold }} — столько рекламных объявлений и программ отслеживания уже заблокировал Веб-фильтр Avira, предотвратив слежку за моими действиями в Интернете. Это очень эффективное средство — и абсолютно бесплатное.",
          lb_congratulations: "Поздравляем!",
          lb_trackers_blocked_count: "Заблокировано рекламных объявлений и программ отслеживания: {{ threshold }}.",
          lb_trackers_milestone_subtitle: "Помогите друзьям и близким тоже защитить свою конфиденциальность.",
          lb_tracker_notification_share_url_twitter: "http://www.avira.com/ru/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Twitter",
          lb_tracker_notification_share_url_facebook:
            "http://www.avira.com/ru/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Facebook",
          lb_tweet: "Твитнуть",
          lb_share: "Поделиться",
          lb_trackers: "Программы отслеживания",
          lb_ads: "Реклама",
          lb_trackers_blocked_this_page: '<span class="txt--orange-dark">Программы отслеживания</span>, заблокированные на этом веб-сайте',
          lb_ads_blocked_this_page: '<span class="txt--orange">Рекламные объявления</span>, заблокированные на этом веб-сайте',
          lb_blocked_total: "Всего заблокировано рекламных объявлений и программ отслеживания: <strong>{{ countTotal }}</strong><br>",
          lb_adblocking_credits: 'Блокировщик рекламы <a href="https://adguard.com/?aid=27248" target="_blank">Adguard</a>'
        };
      },
      {}
    ],
    77: [
      function (e, t, n) {
        t.exports = {
          lb_safe_website: "Güvenli web sitesi",
          lb_unsafe_website: "Güvensiz web sitesi",
          lb_unsafe_content_website: "Güvensiz içerik",
          lb_mse_website: "Güvenilmez Arama Motoru",
          lb_trackers_blocked: '{{ count }} reklam ve takipçi {{ domain }} üzerinde <span class="txt--green">engellendi</span>',
          lb_trackers_blocked_short: "{{ count }} reklam ve takipçi engellendi",
          lb_trackers_block_all: "Bu web sitesinde engelle",
          lb_trackers_allow_all: "Reklam ve takipçi engelini kaldır",
          msg_no_trackers:
            "Geçerli sayfada sizi izleyen takipçi yok. Etkin takipçilerin olduğu bir web sitesini açarsanız listenin tamamı burada gösterilir.",
          msg_trackers_tooltip:
            "Bunlar izlemekte olduğunuz web sitesindeki takipçilerin tümü. Bir takipçiyi yanındaki kaydırıcıya tıklayarak engelleyebilirsiniz. Kaydırıcı yeşilse takipçi engellenmiştir ve tarama etkinliğinizi izleyemez. Not edin, bazı takipçilere varsayılan olarak izin verilir. Bunları engellemek web sitesinin doğru çalışmamasıyla sonuçlanabilir.",
          lb_settings: "Ayarlar",
          lb_setting_offers: "Fiyat karşılaştırmaları göster",
          lb_setting_tooltip_offers: "Alışveriş yaptığınız ürünler için sadece güvenli web sitelerindeki indirimleri göster.",
          lb_setting_dnt_header: "İzlememe başlığı gönder",
          lb_setting_tooltip_dnt_header:
            "Web sitelerine sizi izlememelerini bildirir. Bu isteği yok sayarlarsa, ABS yine de takipçileri engeller.",
          lb_setting_top_bar: "Güvenlik göstergesini belirt",
          lb_setting_block_trackers: "Takipçileri varsayılan olarak engelle",
          lb_setting_tooltip_block_trackers: "Takipçileri varsayılan olarak engelleyin ve gizliliğinizi koruyun.",
          lb_setting_cliqz: "CLIQZ Arama",
          lb_setting_tooltip_cliqz:
            "CLIQZ Arama, siz tarayıcı çubuğuna arama bilgisi girerken gerçek zamanlı olarak web siteleri ve anlamlı bilgi önerir, bu da size daha güvenli ve hızlı arama olanağı verir.",
          lb_setting_privacy_badger: "Privacy Badger",
          lb_setting_tooltip_privacy_badger:
            "Privacy Badger casus reklamların ve görünmez takipçilerin, izniniz olmadan sizi gizlice takip etmesini engeller.",
          lb_setting_https_everywhere: "HTTPS Everywhere",
          lb_setting_tooltip_https_everywhere: "HTTPS Everywhere iletişiminizi şifreler ve tarama etkinliğinizi daha güvenli kılar.",
          lb_setting_inAppTracking: "Anonim İstatistikler",
          lb_setting_tooltip_inAppTracking: "Bizimle anonim veri paylaşarak ürün geliştirmeye yardımcı olun.",
          lb_setting_show_advanced_controls: "Ekstra tarama denetimlerini göster",
          lb_setting_tooltip_show_advanced_controls: "Araç çubuğunda Privacy Badger ve HTTPS Everywhere simgelerini görüntüler.",
          lb_setting_google_services: "Google Hizmetleri",
          lb_setting_adguard: "Reklamları ve web izlemeyi engelle",
          lb_setting_tooltip_adguard:
            "Sizi çevrimiçi izleyen herkesi durdurarak gizliliğinizi korur. Açılır pencere, web başlıkları, video reklamlar ve diğerlerini de engeller.",
          lb_setting_adguard_social_media: "Sosyal medya izlemeyi engelle",
          lb_setting_tooltip_adguard_social_media:
            "Web sitelerindeki sosyal medya düğmeleri ve pencere öğelerini devre dışı bırakır ve sosyal ağların gittiğiniz siteleri izlemesini engeller.",
          lb_setting_adguard_useful_ads: "Yararlı reklamları engelleme",
          lb_setting_tooltip_adguard_useful_ads: "Arama sonuçlarında ilgili ve saldırgan olmayan reklamlara izin verir.",
          lb_setting_extension_scan: "Uzantı Analizi",
          lb_setting_tooltip_extension_scan:
            "Tarama sırasında şüpheli etkinlik algılanırsa Avira'ya anonim rapor göndermek için etkinleştir.",
          lb_setting_dark_mode: "Koyu Mod",
          lb_setting_tooltip_dark_mode: "Koyu Mod aç/kapat",
          btn_blocking_back: "Beni uzaklaştır!",
          lb_blocking_options: "Daha fazla seçenek",
          lb_blocking_add_exception: "Bu siteyi asla engelleme",
          btn_blocking_continue: "Yine de devam et",
          btn_dash_classification_cb_exception: "Bu siteyi asla engelleme",
          lb_dash_classification_exception_info_add: "Özel durum ekleniyor",
          msg_dash_classification_exception_info_add:
            "Bu web sitesi geçerli özel durum listenizde YOK. Bir özel durum eklediğinizde, adresi görüntülemek istediğinizde adres engellenmez. Uyarıyı ekranın üstünde yine de görürsünüz.",
          lb_dash_classification_exception_info_remove: "Özel durumu kaldırma",
          msg_dash_classification_exception_info_remove:
            "Bu web sitesi geçerli özel durum listenizde var. Özel durumu kaldırdığınızda, adres her görüntülemek istediğinizde engellenir.",
          lb_privacy: "Gizlilik ilkesi",
          lnk_privacy: "https://www.avira.com/en/general-privacy",
          lb_eula: "Son Kullanıcı Lisans Sözleşmesi",
          lnk_eula: "https://www.avira.com/en/license-agreement-terms-of-use",
          lb_discover_mode: "Daha fazlasını keşfedin",
          lb_feedback: "Geribildirim",
          lb_feedback_question: "Deneyiminizi nasıl derecelendirirsiniz?",
          lb_feedback_send: "Gönder",
          lb_feedback_send_title: "Avira'ya anonim geri bildirim gönderin",
          lb_feedback_thank_you: "Teşekkür ederiz!",
          lb_feedback_thank_you_feedback: "Geri bildirim için teşekkür ederiz",
          lb_feedback_help_improve: "Geri bildiriminiz uygulamayı geliştirmemize yardım ediyor",
          lb_feedback_rate_store: "Az bir zaman ayırıp {0}'ı {1} mağazasında derecelendirmek ister misiniz?",
          lb_feedback_ok: "Tamam",
          lb_feedback_rate_now: "Şimdi derecelendir",
          lb_feedback_later: "Daha sonra",
          lb_rate: "Uygulamayı derecelendir",
          lb_dash_pua_action_cancel: "Karşıdan yüklemeyi iptal et",
          msg_mse_bar_warning: "Arama motoru ayarlarınız kurcalanmış olabilir.",
          lb_mse_take_me_away: "Beni uzaklaştır!",
          lnk_avira: "https://www.avira.com/tr/",
          lb_mse_hide_warning: "Bu arama motoruna güveniyorum",
          msg_blocked_iframe_replacement: "Güvensiz içerik",
          lb_unsafe_content_bar_warning: "Avira Browser Safety bu web sayfasındaki güvenli olmayan içeriğin yüklenmesini önledi.",
          lb_unsafe_content_bar_ignore: "İletiyi yeniden gösterme",
          lb_extension_permission_notification_extension_description:
            "Avira Browser Safety Uzantısı Avira'ya şüpheli etkinlik raporu göndermek için onayınıza gerek duyuyor.",
          lb_extension_permission_notification_extension_permission_title:
            "Tarama sırasında şüpheli etkinlik algılanırsa Avira'ya anonim rapor göndermek için etkinleştir.",
          lb_extension_permission_notification_extension_permission_button: "İzin ver",
          lb_extension_permission_notification_extension_permission_no_title: "Bu özelliği ayarlardan istediğiniz zaman etkinleştirin.",
          lb_extension_permission_notification_extension_permission_no_button: "Tekrar sorma",
          lb_unsafe_content: "Güvensiz İçerik",
          msg_dash_unsafe_content_details_no_exception: "Güvensiz içerik engellendi:",
          msg_dash_unsafe_content_details_exception: "Güvensiz içerik engellendi",
          msg_dash_unsafe_content_risk_no_exception: "Güvenliğiniz için bu içeriği engellemeniz önerilir.",
          msg_dash_unsafe_content_risk_exception: "Güvenliğiniz için güvenli olmayan içeriği özel durumu kaldırarak engellemeniz önerilir.",
          lb_dash_unsafe_content_show_details: "Teknik ayrıntılar",
          lb_dash_unsafe_content_hide_details: "Gizle",
          msg_category_unknown: "Bu web sitesi için hiçbir bilgi bulunamadı.",
          msg_category_safe: "Bilinen bir tehdit yok.",
          msg_category_malware: "Bu bir zararlı yazılım web sitesi",
          msg_category_malware_sub: "Zararlı yazılım siteleri aygıtınıza bulaşır ve virüs, solucan, casus yazılım ve Truva atı içerebilir.",
          msg_category_phishing: "Bu bir kimlik avı web sitesi",
          msg_category_phishing_sub:
            "Kimlik avı web siteleri parola ve banka bilgileri gibi kişisel bilgilerinizi açıklamanız için sizi kandırır.",
          msg_category_spam: "Bu bir istenmeyen posta web sitesi",
          msg_category_spam_sub: "İstenmeyen posta siteleri e-posta adresinizi ele geçirip istemediğiniz reklamlar gönderir.",
          msg_category_pua: "Karşıdan yükleme İstenmeyebilecek Uygulamalar içeriyor",
          msg_category_pua2: "Bu web sitesi PUA dağıtıyor",
          msg_category_pua2_sub:
            "İstenmeyebilecek Uygulamalar (PUA'lar) kullanıcının istemediği şekilde davranır veya bu türde özellikler içerir.",
          msg_category_mse: "Güvenilmez arama motoru",
          msg_category_mse_sub:
            "Bu arama motoruna güvenilmez çünkü zararlı yazılımların ve İstenmeyebilecek Uygulamaların buraya trafik yönlendirdiği biliniyor.",
          msg_category_unsafe_content: "Güvensiz içerik engellendi",
          msg_category_unsafe_content_sub:
            "Web sayfaları bozuksa veya üçüncü taraf içerik kırıldıysa veya bilerek zararlıysa güvenilmez içerik yükler.",
          msg_what_is_pua: "PUA nedir?",
          lnk_what_is_pua: "https://www.avira.com/en/potentially-unwanted-applications",
          lb_tab_privacy: "Gizlilik",
          lb_tab_security: "Güvenlik",
          lb_my_modes: "Modlar",
          msg_mode_select: "Gereksinimi en iyi karşılayan<br/>modu seçin",
          "lb_mode_safe-surfing": "Güvenli Gezinmeler",
          "lb_mode_safe-private": "Güvenli ve Özel",
          lb_mode_custom: "Özel",
          lb_powered_by_avira: "Powered by Avira",
          lb_help: "Yardım",
          lnk_abs_landing: "http://www.avira.com/abs-ftu",
          lb_trackers_twitter_share:
            "{{ threshold }} reklam ve #takipçi #Avira Browser Safety tarafından engellendi. Siz de #ücretsiz edinin!",
          lb_trackers_facebook_share:
            "{{ threshold }} - şimdiye kadar çevrimiçi etkinliğimi izleyen ve Avira Browser Safety'nin engellediği reklam ve takipçi sayısı. Ücretsiz ve heyecanla öneririm.",
          lb_congratulations: "Tebrikler!",
          lb_trackers_blocked_count: "{{ threshold }} reklam ve takipçi engellendi!",
          lb_trackers_milestone_subtitle: "Aile ve arkadaşlarınızı da korumaya yardımcı olun.",
          lb_tracker_notification_share_url_twitter: "http://www.avira.com/tr/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Twitter",
          lb_tracker_notification_share_url_facebook:
            "http://www.avira.com/tr/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Facebook",
          lb_tweet: "Tweet",
          lb_share: "Paylaş",
          lb_trackers: "Takipçiler",
          lb_ads: "Reklamlar",
          lb_trackers_blocked_this_page: 'Bu sitede engellenen <span class="txt--orange-dark">takipçiler</span>',
          lb_ads_blocked_this_page: 'Bu sitede engellenen <span class="txt--orange">reklamlar</span>',
          lb_blocked_total: "<strong>{{ countTotal }}</strong><br>Tüm reklamlar ve takipçiler engellendi",
          lb_adblocking_credits: '<a href="https://adguard.com/?aid=27248" target="_blank">Adguard</a> ile reklam engelleme'
        };
      },
      {}
    ],
    78: [
      function (e, t, n) {
        t.exports = {
          lb_safe_website: "安全网站",
          lb_unsafe_website: "不安全网站",
          lb_unsafe_content_website: "不安全内容",
          lb_mse_website: "不受信任的搜索引擎",
          lb_trackers_blocked: '在 {{ domain }} 上<span class="txt--green">阻止了</span> {{ count }} 个广告和追踪器',
          lb_trackers_blocked_short: "阻止了 {{ count }} 个广告和追踪器",
          lb_trackers_block_all: "在此网站上阻止",
          lb_trackers_allow_all: "解除对广告和追踪器的阻止",
          msg_no_trackers: "当前页面上没有追踪器对您进行跟踪。如果您打开一个有动态追踪器的网站，则会在此处显示完整列表。",
          msg_trackers_tooltip:
            "这些是您正在查看的网站上的所有追踪器。您可以通过点击旁边的滑块来阻止追踪器。当滑块显示为绿色时，该追踪器被阻止，无法跟踪您的浏览活动。请注意，有些追踪器默认为允许使用。阻止它们可能会导致网页无法正常工作。",
          lb_settings: "设置",
          lb_setting_offers: "显示价格比较",
          lb_setting_tooltip_offers: "为您购买的商品仅显示安全网站中的更佳优惠。",
          lb_setting_dnt_header: "发送“不要跟踪头文件”",
          lb_setting_tooltip_dnt_header: "通知网站不对您进行跟踪。如果它们忽略这个请求，Avira 浏览器安全仍然会阻止任何追踪器。",
          lb_setting_top_bar: "显示安全指标",
          lb_setting_block_trackers: "默认情况下阻止追踪器",
          lb_setting_tooltip_block_trackers: "通过默认阻止追踪器来保护您的隐私。",
          lb_setting_cliqz: "CLIQZ 搜索",
          lb_setting_tooltip_cliqz:
            "当您在浏览器栏中输入您的搜索时，CLIQZ 搜索会实时显示您的网站和相关信息，这使您可以更安全、更快地搜索。",
          lb_setting_privacy_badger: "Privacy Badger",
          lb_setting_tooltip_privacy_badger: "Privacy Badger 阻止间谍广告，并防止隐形追踪器未经您的许可秘密跟踪您。",
          lb_setting_https_everywhere: "HTTPS Everywhere",
          lb_setting_tooltip_https_everywhere: "HTTPS Everywhere 对您的通信进行加密，使您更安全地浏览。",
          lb_setting_inAppTracking: "匿名统计数据",
          lb_setting_tooltip_inAppTracking: "通过分享匿名数据帮助我们改进产品。",
          lb_setting_show_advanced_controls: "显示其他浏览控件",
          lb_setting_tooltip_show_advanced_controls: "在工具栏显示 Privacy Badger 和 HTTPS Everywhere 图标。",
          lb_setting_google_services: "Google 服务",
          lb_setting_adguard: "阻止广告和网站跟踪",
          lb_setting_tooltip_adguard: "通过阻止任何人对您进行在线监视，从而保护您的隐私。也可以阻止入侵式弹出窗口、网页横幅、视频广告等。",
          lb_setting_adguard_social_media: "阻止社交媒体跟踪",
          lb_setting_tooltip_adguard_social_media: "禁用网站上的社交媒体按钮和插件，这样社交网络就无法跟踪您访问的网站。",
          lb_setting_adguard_useful_ads: "不要屏蔽有用的广告",
          lb_setting_tooltip_adguard_useful_ads: "允许在您的搜索结果中显示相关的非入侵式广告。",
          lb_setting_extension_scan: "扩展名分析",
          lb_setting_tooltip_extension_scan: "如果在浏览过程中检测到可疑活动，则可以向 Avira 发送匿名报告。",
          lb_setting_dark_mode: "深色模式",
          lb_setting_tooltip_dark_mode: "开启/关闭深色模式",
          btn_blocking_back: "退出此网页！",
          lb_blocking_options: "更多选项",
          lb_blocking_add_exception: "永远不阻止此网站",
          btn_blocking_continue: "仍然继续",
          btn_dash_classification_cb_exception: "永远不阻止此网站",
          lb_dash_classification_exception_info_add: "添加例外",
          msg_dash_classification_exception_info_add:
            "该网站目前不在您的例外列表中。添加一个例外后，该地址在您尝试查看时不会被阻止。您仍然会在屏幕上方看到警告。",
          lb_dash_classification_exception_info_remove: "删除例外",
          msg_dash_classification_exception_info_remove:
            "该网站目前在您的例外列表中。如果您删除了这个例外，那么该地址将在每次您试图查看时被阻止。",
          lb_privacy: "隐私政策",
          lnk_privacy: "https://www.avira.com/zh-cn/general-privacy",
          lb_eula: "最终用户许可协议",
          lnk_eula: "https://www.avira.com/zh-cn/license-agreement-terms-of-use",
          lb_discover_mode: "发现更多",
          lb_feedback: "反馈",
          lb_feedback_question: "您将如何评价您的体验？",
          lb_feedback_send: "发送",
          lb_feedback_send_title: "向 Avira 发送匿名反馈",
          lb_feedback_thank_you: "谢谢！",
          lb_feedback_thank_you_feedback: "感谢您的反馈",
          lb_feedback_help_improve: "您的反馈将帮助我们完善应用程序",
          lb_feedback_rate_store: "您能否花点时间在 {1} 网上商店对 {0} 进行评价？",
          lb_feedback_ok: "确定",
          lb_feedback_rate_now: "立即评价",
          lb_feedback_later: "稍后",
          lb_rate: "评价应用程序",
          lb_dash_pua_action_cancel: "取消下载",
          msg_mse_bar_warning: "您的搜索引擎设置可能被篡改。",
          lb_mse_take_me_away: "退出此网页！!",
          lnk_avira: "https://www.avira.com/zh-cn/",
          lb_mse_hide_warning: "信任此搜索引擎",
          msg_blocked_iframe_replacement: "不安全内容",
          lb_unsafe_content_bar_warning: "Avira 浏览器安全防止在此网页上加载不安全的内容。",
          lb_unsafe_content_bar_ignore: "不再显示消息",
          lb_extension_permission_notification_extension_description:
            "Avira 浏览器安全扩展需要您的批准才能向 Avira 发送有关可疑活动的报告。",
          lb_extension_permission_notification_extension_permission_title: "如果在浏览过程中检测到可疑活动，则可以向 Avira 发送匿名报告。",
          lb_extension_permission_notification_extension_permission_button: "允许",
          lb_extension_permission_notification_extension_permission_no_title: "您可以随时在设置中启用这个功能。",
          lb_extension_permission_notification_extension_permission_no_button: "不再询问",
          lb_unsafe_content: "不安全内容",
          msg_dash_unsafe_content_details_no_exception: "已阻止的不安全内容：",
          msg_dash_unsafe_content_details_exception: "已阻止的不安全内容",
          msg_dash_unsafe_content_risk_no_exception: "为了安全起见，建议您阻止此内容。",
          msg_dash_unsafe_content_risk_exception: "为了安全起见，建议您通过删除例外来阻止不安全内容。",
          lb_dash_unsafe_content_show_details: "技术详细信息",
          lb_dash_unsafe_content_hide_details: "隐藏",
          msg_category_unknown: "未找到有关该网站的信息。",
          msg_category_safe: "没有已知威胁。",
          msg_category_malware: "这是一个恶意软件网站",
          msg_category_malware_sub: "恶意软件网站会感染您的设备并可能包含病毒、蠕虫、间谍软件和特洛伊木马。",
          msg_category_phishing: "这是一个网络钓鱼网站",
          msg_category_phishing_sub: "网络钓鱼网站会欺骗您透露个人信息（例如密码和银行帐户信息）。",
          msg_category_spam: "这是一个垃圾邮件网站",
          msg_category_spam_sub: "垃圾邮件网站会获取您的电子邮件地址，从而通过电子邮件向您发送广告。",
          msg_category_pua: "下载包含可能有害的应用程序",
          msg_category_pua2: "此网站散布着可能有害的应用程序",
          msg_category_pua2_sub: "可能有害的应用程序 (PUA) 表现出对用户有害的行为或包含对用户有害的功能。",
          msg_category_mse: "不受信任的搜索引擎",
          msg_category_mse_sub: "此搜索引擎不可信，因为恶意软件和可能有害的应用程序会将流量重定向到该搜索引擎。",
          msg_category_unsafe_content: "已阻止的不安全内容",
          msg_category_unsafe_content_sub: "如果泄漏的内容或第三方内容被非法侵入或有意造成危害，则网页会加载不安全的内容。",
          msg_what_is_pua: "什么是可能有害的应用程序？",
          lnk_what_is_pua: "https://www.avira.com/zh-cn/potentially-unwanted-applications",
          lb_tab_privacy: "隐私",
          lb_tab_security: "安全性",
          lb_my_modes: "模式",
          msg_mode_select: "选择最符合<br/>您需求的模式",
          "lb_mode_safe-surfing": "安全畅游网络世界",
          "lb_mode_safe-private": "安全和个人",
          lb_mode_custom: "自定义",
          lb_powered_by_avira: "Avira 提供技术支持",
          lb_help: "帮助",
          lnk_abs_landing: "http://www.avira.com/abs-ftu",
          lb_trackers_twitter_share: "#Avira 浏览器安全阻止了 {{ threshold }} 广告和 #追踪器。现在 #免费获取您的 Avira 浏览器安全！",
          lb_trackers_facebook_share:
            "{{ threshold }} - 这就是迄今为止 Avira 浏览器安全已阻止监视我的在线活动的广告和追踪器数量。它是免费的，我强烈推荐它。",
          lb_congratulations: "祝贺您！",
          lb_trackers_blocked_count: "阻止了 {{ threshold }} 个广告和追踪器！",
          lb_trackers_milestone_subtitle: "同样有助于保护你的家人和朋友。",
          lb_tracker_notification_share_url_twitter:
            "http://www.avira.com/zh-cn/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Twitter",
          lb_tracker_notification_share_url_facebook:
            "http://www.avira.com/zh-cn/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Facebook",
          lb_tweet: "信息",
          lb_share: "分享",
          lb_trackers: "追踪器",
          lb_ads: "广告",
          lb_trackers_blocked_this_page: '此网站上阻止的<span class="txt--orange-dark">追踪器</span>',
          lb_ads_blocked_this_page: '此网站上阻止的<span class="txt--orange">广告</span>',
          lb_blocked_total: "阻止了全部 <strong>{{ countTotal }}</strong><br> 个广告和追踪器",
          lb_adblocking_credits: '通过 <a href="https://adguard.com/?aid=27248" target="_blank">Adguard</a> 阻止广告'
        };
      },
      {}
    ],
    79: [
      function (e, t, n) {
        t.exports = {
          lb_safe_website: "安全的網站",
          lb_unsafe_website: "不安全的網站",
          lb_unsafe_content_website: "不安全的內容",
          lb_mse_website: "不可信任的搜尋引擎",
          lb_trackers_blocked: '已在 {{ domain }} <span class="txt--green">封鎖</span> {{ count }} 個廣告和追蹤器',
          lb_trackers_blocked_short: "已封鎖 {{ count }} 個廣告和追蹤器",
          lb_trackers_block_all: "在此網站封鎖",
          lb_trackers_allow_all: "取消封鎖廣告和追蹤器",
          msg_no_trackers: "目前網頁沒有任何追蹤器追蹤您。如果您開啟有作用中追蹤器的網站，這裡將顯示完整的清單。",
          msg_trackers_tooltip:
            "這些是您正在檢視的網頁上全部的追蹤器。您可以按一下追蹤器旁邊的滑桿來封鎖追蹤器。滑桿呈現綠色時，表示已封鎖該追蹤器，無法追蹤您的瀏覽活動。請注意，預設允許部分追蹤器。封鎖這些可能導致網頁無法正常運作。",
          lb_settings: "設定",
          lb_setting_offers: "顯示價格比較",
          lb_setting_tooltip_offers: "對於您要購買的 â€“ 顯示完全來自安全網站的產品優惠價格。",
          lb_setting_dnt_header: "傳送「不要追蹤」標頭",
          lb_setting_tooltip_dnt_header: "通知網站不應該追蹤您。如果網站忽視該項要求，Avira 瀏覽器安全性仍會封鎖任何追蹤器。",
          lb_setting_top_bar: "顯示安全指示器",
          lb_setting_block_trackers: "預設封鎖追蹤器",
          lb_setting_tooltip_block_trackers: "預設封鎖追蹤器保護您的隱私權。",
          lb_setting_cliqz: "CLIQZ Search",
          lb_setting_tooltip_cliqz: "您在瀏覽器列中輸入搜尋時，CLIQZ Search 會即時建議網站和相關資訊，達到搜尋更快速安全的效果。",
          lb_setting_privacy_badger: "Privacy Badger",
          lb_setting_tooltip_privacy_badger: "Privacy Badger 會封鎖間諜廣告，並避免隱藏的追蹤器在未經您許可的情況下秘密追蹤您。",
          lb_setting_https_everywhere: "HTTPS Everywhere",
          lb_setting_tooltip_https_everywhere: "HTTPS Everywhere 會將您的通訊加密，讓您的瀏覽更安全。",
          lb_setting_inAppTracking: "Anonymous Statistics",
          lb_setting_tooltip_inAppTracking: "透過分享匿名資料的方式協助我們改善產品。",
          lb_setting_show_advanced_controls: "顯示其他瀏覽控制",
          lb_setting_tooltip_show_advanced_controls: "在工具列中顯示 Privacy Badger 和 HTTPS Everywhere 圖示。",
          lb_setting_google_services: "Google 服務",
          lb_setting_adguard: "封鎖廣告和網站追蹤",
          lb_setting_tooltip_adguard: "阻止任何人在線上監控您，保護您的隱私權。也封鎖干擾的快顯視窗、網頁橫幅、視訊廣告等等。",
          lb_setting_adguard_social_media: "封鎖社交媒體追蹤",
          lb_setting_tooltip_adguard_social_media: "停用網站的社交媒體按鈕和 Widget，以免社交網路追蹤您造訪的網站。",
          lb_setting_adguard_useful_ads: "不封鎖有用廣告",
          lb_setting_tooltip_adguard_useful_ads: "允許有關聯、不造成干擾的廣告出現在您的搜尋結果中。",
          lb_setting_extension_scan: "Extensions Analysis",
          lb_setting_tooltip_extension_scan: "啟用後若在瀏覽時偵測到可疑的活動，會將匿名報告傳送到 Avira。",
          lb_setting_dark_mode: "深色模式",
          lb_setting_tooltip_dark_mode: "開啟/關閉深色模式",
          btn_blocking_back: "帶我離開",
          lb_blocking_options: "更多選項",
          lb_blocking_add_exception: "不封鎖此網站",
          btn_blocking_continue: "仍然繼續",
          btn_dash_classification_cb_exception: "不封鎖此網站",
          lb_dash_classification_exception_info_add: "新增例外",
          msg_dash_classification_exception_info_add:
            "此網站目前不在您的例外清單中。您新增例外時，則不會在您檢視網站時封鎖該網址。您仍然會看見畫面頂端出現警告。",
          lb_dash_classification_exception_info_remove: "移除例外",
          msg_dash_classification_exception_info_remove:
            "此網站目前在您的例外清單中。如果您移除例外，則每次您嘗試檢視網站時，將封鎖該網址。",
          lb_privacy: "隱私權政策",
          lnk_privacy: "https://www.avira.com/zh-tw/general-privacy",
          lb_eula: "使用者授權合約",
          lnk_eula: "https://www.avira.com/zh-tw/license-agreement-terms-of-use",
          lb_discover_mode: "發現更多",
          lb_feedback: "意見回應",
          lb_feedback_question: "您會如何評價您的體驗？",
          lb_feedback_send: "傳送",
          lb_feedback_send_title: "向 Avira 傳送匿名意見回應",
          lb_feedback_thank_you: "感謝您！",
          lb_feedback_thank_you_feedback: "感謝您的寶貴意見",
          lb_feedback_help_improve: "您的意見有助於我們完善應用程式",
          lb_feedback_rate_store: "您能否花點時間在 {1} 線上商店為 {0} 評價？",
          lb_feedback_ok: "確定",
          lb_feedback_rate_now: "立即評價",
          lb_feedback_later: "稍後",
          lb_rate: "評比應用程式",
          lb_dash_pua_action_cancel: "取消下載",
          msg_mse_bar_warning: "您的搜尋引擎設定可能遭竄改。",
          lb_mse_take_me_away: "帶我離開!",
          lnk_avira: "https://www.avira.com/zh-tw/",
          lb_mse_hide_warning: "信任此搜尋引擎",
          msg_blocked_iframe_replacement: "不安全的內容",
          lb_unsafe_content_bar_warning: "Avira 瀏覽器安全性可防止此網頁載入不安全的內容。",
          lb_unsafe_content_bar_ignore: "不要再顯示訊息",
          lb_extension_permission_notification_extension_description:
            "Avira 瀏覽器安全性擴充需要您核准，才會將關於可疑活動的報告傳送到 Avira。",
          lb_extension_permission_notification_extension_permission_title: "啟用後若在瀏覽時偵測到可疑的活動，會將匿名報告傳送到 Avira。",
          lb_extension_permission_notification_extension_permission_button: "允許",
          lb_extension_permission_notification_extension_permission_no_title: "您可以隨時在設定中啟用此功能。",
          lb_extension_permission_notification_extension_permission_no_button: "不要再詢問",
          lb_unsafe_content: "不安全的內容",
          msg_dash_unsafe_content_details_no_exception: "已封鎖不安全的內容：",
          msg_dash_unsafe_content_details_exception: "已封鎖不安全的內容",
          msg_dash_unsafe_content_risk_no_exception: "基於安全考量，建議您持續封鎖內容。",
          msg_dash_unsafe_content_risk_exception: "基於安全考量，建議您移除例外來封鎖不安全的內容。",
          lb_dash_unsafe_content_show_details: "技術詳細資料",
          lb_dash_unsafe_content_hide_details: "隱藏",
          msg_category_unknown: "找不到此網站的資訊。",
          msg_category_safe: "無已知的威脅。",
          msg_category_malware: "這是惡意網站",
          msg_category_malware_sub: "惡意網站將感染您的裝置，而且可能包含病毒、蠕蟲、間諜軟體和特洛伊木馬程式。",
          msg_category_phishing: "這是網路釣魚網站",
          msg_category_phishing_sub: "網路釣魚網站會誘騙您透露您的個人資訊，例如密碼和銀行帳戶的資訊。",
          msg_category_spam: "這是垃圾郵件網站",
          msg_category_spam_sub: "垃圾郵件網站會擷取您的電子郵件地址，藉以透過電子郵件寄送廣告給您。",
          msg_category_pua: "下載包含可能不想要的應用程式",
          msg_category_pua2: "此網站散發可能不想要的應用程式",
          msg_category_pua2_sub: "這些可能不想要的應用程式 (PUA) 呈現的運作方式或包含的功能是使用者不想要的。",
          msg_category_mse: "不可信任的搜尋引擎",
          msg_category_mse_sub: "此搜尋引擎不可信任，因為已知惡意程式碼和可能不想要的應用程式將流量重新導向到此搜尋引擎。",
          msg_category_unsafe_content: "已封鎖不安全的內容",
          msg_category_unsafe_content_sub: "如果遭破壞的內容或第三方內容受入侵或可能有害，網頁將載入不安全的內容。",
          msg_what_is_pua: "什麼是 PUA？",
          lnk_what_is_pua: "https://www.avira.com/zh-tw/potentially-unwanted-applications",
          lb_tab_privacy: "隱私權",
          lb_tab_security: "資訊安全",
          lb_my_modes: "模式",
          msg_mode_select: "選取最符合<br/>您需求的模式",
          "lb_mode_safe-surfing": "安全的隨意瀏覽",
          "lb_mode_safe-private": "安全隱密",
          lb_mode_custom: "自訂",
          lb_powered_by_avira: "採用 Avira 技術",
          lb_help: "說明",
          lnk_abs_landing: "http://www.avira.com/abs-ftu",
          lb_trackers_twitter_share: "#Avira Browser Safety 已封鎖 {{ threshold }} 個廣告和#追蹤器。立即#免費取得！",
          lb_trackers_facebook_share:
            "{{ threshold }} - Avira 瀏覽器安全性到目前為止已經封鎖這麼多廣告和追蹤器以免它們窺視我的線上活動。這完全免費，我強烈推薦使用。",
          lb_congratulations: "恭喜!",
          lb_trackers_blocked_count: "已封鎖 {{ threshold }} 個廣告和追蹤器！",
          lb_trackers_milestone_subtitle: "也保護您的家人和朋友。",
          lb_tracker_notification_share_url_twitter:
            "http://www.avira.com/zh-tw/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Twitter",
          lb_tracker_notification_share_url_facebook:
            "http://www.avira.com/zh-tw/avira-browser-safety?x-a-source=ABSSocial&x-a-medium=Facebook",
          lb_tweet: "推文",
          lb_share: "分享",
          lb_trackers: "追蹤器",
          lb_ads: "廣告",
          lb_trackers_blocked_this_page: '已在此網站封鎖<span class="txt--orange-dark">追蹤器</span>',
          lb_ads_blocked_this_page: '已在此網站封鎖<span class="txt--orange">廣告</span>',
          lb_blocked_total: "已封鎖全部 <strong>{{ countTotal }}</strong><br> 個廣告和追蹤器",
          lb_adblocking_credits: '<a href="https://adguard.com/?aid=27248" target="_blank">Adguard</a> 的廣告封鎖'
        };
      },
      {}
    ],
    80: [
      function (e, t, n) {
        "use strict";
        e("core-js/modules/es6.array.iterator.js"), e("core-js/modules/web.dom.iterable.js");
        class i {
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
        i.initClass(), (t.exports = i);
      },
      { "core-js/modules/es6.array.iterator.js": 58, "core-js/modules/web.dom.iterable.js": 59 }
    ],
    81: [
      function (e, t, n) {
        "use strict";
        t.exports = {
          "de-DE": e("i18n/de-DE"),
          "en-US": e("i18n/en-US"),
          "es-ES": e("i18n/es-ES"),
          "fr-FR": e("i18n/fr-FR"),
          "it-IT": e("i18n/it-IT"),
          "ja-JP": e("i18n/ja-JP"),
          "nl-NL": e("i18n/nl-NL"),
          "pt-BR": e("i18n/pt-BR"),
          "ru-RU": e("i18n/ru-RU"),
          "tr-TR": e("i18n/tr-TR"),
          "zh-CN": e("i18n/zh-CN"),
          "zh-TW": e("i18n/zh-TW")
        };
      },
      {
        "i18n/de-DE": 68,
        "i18n/en-US": 69,
        "i18n/es-ES": 70,
        "i18n/fr-FR": 71,
        "i18n/it-IT": 72,
        "i18n/ja-JP": 73,
        "i18n/nl-NL": 74,
        "i18n/pt-BR": 75,
        "i18n/ru-RU": 76,
        "i18n/tr-TR": 77,
        "i18n/zh-CN": 78,
        "i18n/zh-TW": 79
      }
    ],
    82: [
      function (e, t, n) {
        "use strict";
        const i = e("underscore"),
          a = e("background/localStorage").getInstance(),
          r = "config_overrides",
          o = e("configuration"),
          s = (e, t) => {
            e = e || {};
            for (const n in t)
              if (t.hasOwnProperty(n)) {
                const i = t[n];
                void 0 === e[n] || "object" != typeof i || i instanceof Array ? (e[n] = i) : (e[n] = s(e[n], i));
              }
            return e;
          };
        i.extend(o, {
          getConfigOverrides() {
            try {
              return JSON.parse(a.getItem(r));
            } catch (e) {
              return {};
            }
          },
          setConfigOverrides(e) {
            const t = s(this.getConfigOverrides(), e);
            a.setItem(r, JSON.stringify(t));
          },
          clearConfigOverrides() {
            a.removeItem(r);
          },
          mergeOverrides() {
            s(this, this.getConfigOverrides());
          }
        }),
          (t.exports = o);
      },
      { "background/localStorage": 1, configuration: 2, underscore: 66 }
    ],
    83: [
      function (e, t, n) {
        "use strict";
        const i = e("underscore"),
          a = e("config"),
          r = e("Locale"),
          o = e("content/messagingInterface"),
          s = e("Locales");
        t.exports = {
          getLocaleStrings: (e) =>
            new r(a, o).retrieve((t) => {
              const n = i.extend({}, s[a.default_language], s[t]);
              return e(n, t);
            }),
          LOCALES: s
        };
      },
      { Locale: 80, Locales: 81, config: 82, "content/messagingInterface": 84, underscore: 66 }
    ],
    84: [
      function (e, t, n) {
        "use strict";
        const i = e("messenger/Content").getInstance();
        t.exports = i;
      },
      { "messenger/Content": 60 }
    ],
    85: [
      function (e, t, n) {
        "use strict";
        const i = e("content/messagingInterface"),
          a = { track: (e, t, n) => i.publish("Mixpanel:track", { event: e, properties: t }, n) };
        t.exports = a;
      },
      { "content/messagingInterface": 84 }
    ]
  },
  {},
  [3]
);
