/*! For license information please see es6.js.LICENSE.txt */
(() => {
  var e,
    t,
    n,
    r,
    o = {
      61706: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => o });
        let r = {};
        const o = {
          bind(e, t) {
            if (!t.hasOwnProperty("value") || t.value) {
              e.dataset.resizeSensorId = Math.random().toString(36).substring(7);
              const n = new ResizeObserver((e) => {
                window.requestAnimationFrame(() => {
                  const n = e[0];
                  null != n && n.contentRect && t.value({ width: n.contentRect.width, height: n.contentRect.height });
                });
              });
              n.observe(e), (r[e.dataset.resizeSensorId] = n);
            }
          },
          unbind(e) {
            r[e.dataset.resizeSensorId] && (r[e.dataset.resizeSensorId].disconnect(), delete r[e.dataset.resizeSensorId]);
          }
        };
      },
      7838: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => o });
        var r = n(20144);
        r.ZP.config.productionTip = !1;
        const o = new r.ZP({
          created() {
            (this.key = "crossTabMessage"), (this.handlers = {}), window.addEventListener("storage", this.onStorageEvent);
          },
          methods: {
            sendCrossTabMessage(e, ...t) {
              localStorage.setObject(this.key, { eventName: e, payload: [...t] }), localStorage.removeItem(this.key);
            },
            addCrossTabMessageListener(e, t) {
              this.handlers[e] || (this.handlers[e] = []), this.handlers[e].push(t);
            },
            removeCrossTabMessageListener(e, t) {
              if (e in this.handlers) {
                const n = this.handlers[e].indexOf(t);
                this.handlers[e].splice(n, 1);
              }
            },
            onStorageEvent(e) {
              if (e.key === this.key && e.newValue) {
                const { eventName: t, payload: n } = JSON.parse(e.newValue);
                t in this.handlers &&
                  this.handlers[t].forEach((e) => {
                    n && n.length ? e.apply(null, n) : e();
                  });
              }
            }
          }
        });
      },
      65238: (e, t, n) => {
        "use strict";
        n.d(t, { HX: () => i, fC: () => o, os: () => r });
        const r = {
            LOGIN: "login",
            TOUR: "tour",
            FREE_INTRODUCTION: "introduction",
            PLUS_INTRODUCTION: "plusIntroduction",
            PLUS_GATE: "plusGate",
            UPGRADE: "upgrade",
            SEARCH_IN_CENTER_NOTIFICATION: "searchInCenterNotification",
            SAFARI_VERSION: "safariVersion",
            REFRESH_MODAL: "refreshModal",
            UPSELL_AI_CHAT: "upsellAiChat",
            UPSELL_AUTOFOCUS: "upsellAutofocus",
            UPSELL_BALANCE_MODE: "upsellBalanceMode",
            UPSELL_COUNTDOWNS: "upsellCountdowns",
            UPSELL_MANTRAS: "upsellMantras",
            UPSELL_METRICS: "upsellMetrics",
            UPSELL_MULTI_TODO: "upsellMultiTodo",
            UPSELL_NOTES: "upsellNotes",
            UPSELL_PHOTOS: "upsellPhotos",
            UPSELL_POMODORO: "upsellPomodoro",
            UPSELL_QUOTES: "upsellQuotes",
            UPSELL_SOUNDSCAPES: "upsellSoundscapes",
            UPSELL_TAB_GROUPS: "upsellTabGroups",
            UPSELL_TAB_STASH: "upsellTabStash",
            UPSELL_THEMES: "upsellThemes",
            UPSELL_TODO_INTEGRATIONS: "upsellTodoIntegrations",
            UPSELL_WEATHER: "upsellWeather",
            UPSELL_WORLD_CLOCKS: "upsellWorldClocks",
            PLUS_OFFER: "plusOffer",
            SAFARI_ACCOUNT: "safariAccount",
            PERMISSION_REQUEST: "permissionRequest",
            TAB_STASH_ONBOARDING: "tabStashOnboarding"
          },
          o = { PLUS_TRIAL_TOUR: "january_2022_trials_3", SEARCH_IN_CENTER: "search_in_center" },
          i = {
            PLUS_TRIAL_TOUR_VARIANT_A: "enabled_copy_1",
            PLUS_TRIAL_TOUR_VARIANT_B: "enabled_copy_2",
            PAYWALL_ENABLED: "enabled",
            SEARCH_IN_CENTER_ENABLED: "search_in_center"
          };
      },
      95967: (e, t, n) => {
        Backbone.Events.listenTo(m, "loadWebpackAddin", (e, t) => {
          n(43325)(`./${e}/main`).then(() => {
            m.addinManager.trigger("addin:loaded:" + t);
          });
        });
      },
      3510: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => r });
        const r = { version: "2.12.9", environment: "production", apiUrl: "https://api.momentumdash.com/", platform: "chrome" };
      },
      81405: (e, t, n) => {
        "use strict";
        n.d(t, { ZP: () => Hn });
        var r = n(35174);
        function o(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              })),
              n.push.apply(n, r);
          }
          return n;
        }
        function i(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? o(Object(n), !0).forEach(function (t) {
                  l(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : o(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                });
          }
          return e;
        }
        function s(e) {
          return (
            (s =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                  }),
            s(e)
          );
        }
        function a(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function c(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function u(e, t, n) {
          return t && c(e.prototype, t), n && c(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
        }
        function l(e, t, n) {
          return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
        }
        function d(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            t && p(e, t);
        }
        function f(e) {
          return (
            (f = Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            f(e)
          );
        }
        function p(e, t) {
          return (
            (p = Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (e, t) {
                  return (e.__proto__ = t), e;
                }),
            p(e, t)
          );
        }
        function h(e, t) {
          if (t && ("object" == typeof t || "function" == typeof t)) return t;
          if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
          return (function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
          })(e);
        }
        function g(e) {
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
              r = f(e);
            if (t) {
              var o = f(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return h(this, n);
          };
        }
        function v(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
              if (null != n) {
                var r,
                  o,
                  i = [],
                  s = !0,
                  a = !1;
                try {
                  for (n = n.call(e); !(s = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); s = !0);
                } catch (e) {
                  (a = !0), (o = e);
                } finally {
                  try {
                    s || null == n.return || n.return();
                  } finally {
                    if (a) throw o;
                  }
                }
                return i;
              }
            })(e, t) ||
            y(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function _(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return b(e);
            })(e) ||
            (function (e) {
              if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
            })(e) ||
            y(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function y(e, t) {
          if (e) {
            if ("string" == typeof e) return b(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? b(e, t)
                : void 0
            );
          }
        }
        function b(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function w(e, t) {
          var n = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
          if (!n) {
            if (Array.isArray(e) || (n = y(e)) || (t && e && "number" == typeof e.length)) {
              n && (e = n);
              var r = 0,
                o = function () {};
              return {
                s: o,
                n: function () {
                  return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
                },
                e: function (e) {
                  throw e;
                },
                f: o
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          var i,
            s = !0,
            a = !1;
          return {
            s: function () {
              n = n.call(e);
            },
            n: function () {
              var e = n.next();
              return (s = e.done), e;
            },
            e: function (e) {
              (a = !0), (i = e);
            },
            f: function () {
              try {
                s || null == n.return || n.return();
              } finally {
                if (a) throw i;
              }
            }
          };
        }
        var S = String.fromCharCode,
          k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          O = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",
          E = {};
        function T(e, t) {
          if (!E[e]) {
            E[e] = {};
            for (var n = 0; n < e.length; n++) E[e][e.charAt(n)] = n;
          }
          return E[e][t];
        }
        var C = {
            compressToBase64: function (e) {
              if (null == e) return "";
              var t = C._compress(e, 6, function (e) {
                return k.charAt(e);
              });
              switch (t.length % 4) {
                default:
                case 0:
                  return t;
                case 1:
                  return t + "===";
                case 2:
                  return t + "==";
                case 3:
                  return t + "=";
              }
            },
            decompressFromBase64: function (e) {
              return null == e
                ? ""
                : "" == e
                ? null
                : C._decompress(e.length, 32, function (t) {
                    return T(k, e.charAt(t));
                  });
            },
            compressToUTF16: function (e) {
              return null == e
                ? ""
                : C._compress(e, 15, function (e) {
                    return S(e + 32);
                  }) + " ";
            },
            decompressFromUTF16: function (e) {
              return null == e
                ? ""
                : "" == e
                ? null
                : C._decompress(e.length, 16384, function (t) {
                    return e.charCodeAt(t) - 32;
                  });
            },
            compressToUint8Array: function (e) {
              for (var t = C.compress(e), n = new Uint8Array(2 * t.length), r = 0, o = t.length; r < o; r++) {
                var i = t.charCodeAt(r);
                (n[2 * r] = i >>> 8), (n[2 * r + 1] = i % 256);
              }
              return n;
            },
            decompressFromUint8Array: function (e) {
              if (null == e) return C.decompress(e);
              for (var t = new Array(e.length / 2), n = 0, r = t.length; n < r; n++) t[n] = 256 * e[2 * n] + e[2 * n + 1];
              var o = [];
              return (
                t.forEach(function (e) {
                  o.push(S(e));
                }),
                C.decompress(o.join(""))
              );
            },
            compressToEncodedURIComponent: function (e) {
              return null == e
                ? ""
                : C._compress(e, 6, function (e) {
                    return O.charAt(e);
                  });
            },
            decompressFromEncodedURIComponent: function (e) {
              return null == e
                ? ""
                : "" == e
                ? null
                : ((e = e.replace(/ /g, "+")),
                  C._decompress(e.length, 32, function (t) {
                    return T(O, e.charAt(t));
                  }));
            },
            compress: function (e) {
              return C._compress(e, 16, function (e) {
                return S(e);
              });
            },
            _compress: function (e, t, n) {
              if (null == e) return "";
              var r,
                o,
                i,
                s = "",
                a = "",
                c = "",
                u = 2,
                l = 3,
                d = 2,
                f = 0,
                p = 0,
                h = {},
                g = {},
                m = [];
              for (i = 0; i < e.length; i += 1)
                if (
                  ((s = e.charAt(i)),
                  Object.prototype.hasOwnProperty.call(h, s) || ((h[s] = l++), (g[s] = !0)),
                  (a = c + s),
                  Object.prototype.hasOwnProperty.call(h, a))
                )
                  c = a;
                else {
                  if (Object.prototype.hasOwnProperty.call(g, c)) {
                    if (c.charCodeAt(0) < 256) {
                      for (r = 0; r < d; r++) (f <<= 1), p == t - 1 ? ((p = 0), m.push(n(f)), (f = 0)) : p++;
                      for (o = c.charCodeAt(0), r = 0; r < 8; r++)
                        (f = (f << 1) | (1 & o)), p == t - 1 ? ((p = 0), m.push(n(f)), (f = 0)) : p++, (o >>= 1);
                    } else {
                      for (o = 1, r = 0; r < d; r++) (f = (f << 1) | o), p == t - 1 ? ((p = 0), m.push(n(f)), (f = 0)) : p++, (o = 0);
                      for (o = c.charCodeAt(0), r = 0; r < 16; r++)
                        (f = (f << 1) | (1 & o)), p == t - 1 ? ((p = 0), m.push(n(f)), (f = 0)) : p++, (o >>= 1);
                    }
                    0 == --u && ((u = Math.pow(2, d)), d++), delete g[c];
                  } else
                    for (o = h[c], r = 0; r < d; r++)
                      (f = (f << 1) | (1 & o)), p == t - 1 ? ((p = 0), m.push(n(f)), (f = 0)) : p++, (o >>= 1);
                  0 == --u && ((u = Math.pow(2, d)), d++), (h[a] = l++), (c = String(s));
                }
              if ("" !== c) {
                if (Object.prototype.hasOwnProperty.call(g, c)) {
                  if (c.charCodeAt(0) < 256) {
                    for (r = 0; r < d; r++) (f <<= 1), p == t - 1 ? ((p = 0), m.push(n(f)), (f = 0)) : p++;
                    for (o = c.charCodeAt(0), r = 0; r < 8; r++)
                      (f = (f << 1) | (1 & o)), p == t - 1 ? ((p = 0), m.push(n(f)), (f = 0)) : p++, (o >>= 1);
                  } else {
                    for (o = 1, r = 0; r < d; r++) (f = (f << 1) | o), p == t - 1 ? ((p = 0), m.push(n(f)), (f = 0)) : p++, (o = 0);
                    for (o = c.charCodeAt(0), r = 0; r < 16; r++)
                      (f = (f << 1) | (1 & o)), p == t - 1 ? ((p = 0), m.push(n(f)), (f = 0)) : p++, (o >>= 1);
                  }
                  0 == --u && ((u = Math.pow(2, d)), d++), delete g[c];
                } else
                  for (o = h[c], r = 0; r < d; r++)
                    (f = (f << 1) | (1 & o)), p == t - 1 ? ((p = 0), m.push(n(f)), (f = 0)) : p++, (o >>= 1);
                0 == --u && ((u = Math.pow(2, d)), d++);
              }
              for (o = 2, r = 0; r < d; r++) (f = (f << 1) | (1 & o)), p == t - 1 ? ((p = 0), m.push(n(f)), (f = 0)) : p++, (o >>= 1);
              for (;;) {
                if (((f <<= 1), p == t - 1)) {
                  m.push(n(f));
                  break;
                }
                p++;
              }
              return m.join("");
            },
            decompress: function (e) {
              return null == e
                ? ""
                : "" == e
                ? null
                : C._decompress(e.length, 32768, function (t) {
                    return e.charCodeAt(t);
                  });
            },
            _decompress: function (e, t, n) {
              var r,
                o,
                i,
                s,
                a,
                c,
                u,
                l = [],
                d = [],
                f = { val: n(0), position: t, index: 1 },
                p = 4,
                h = 4,
                g = 3,
                m = "";
              for (r = 0; r < 3; r += 1) l[r] = r;
              for (i = 0, a = Math.pow(2, 2), c = 1; c != a; )
                (s = f.val & f.position),
                  (f.position >>= 1),
                  0 == f.position && ((f.position = t), (f.val = n(f.index++))),
                  (i |= (s > 0 ? 1 : 0) * c),
                  (c <<= 1);
              switch (i) {
                case 0:
                  for (i = 0, a = Math.pow(2, 8), c = 1; c != a; )
                    (s = f.val & f.position),
                      (f.position >>= 1),
                      0 == f.position && ((f.position = t), (f.val = n(f.index++))),
                      (i |= (s > 0 ? 1 : 0) * c),
                      (c <<= 1);
                  u = S(i);
                  break;
                case 1:
                  for (i = 0, a = Math.pow(2, 16), c = 1; c != a; )
                    (s = f.val & f.position),
                      (f.position >>= 1),
                      0 == f.position && ((f.position = t), (f.val = n(f.index++))),
                      (i |= (s > 0 ? 1 : 0) * c),
                      (c <<= 1);
                  u = S(i);
                  break;
                case 2:
                  return "";
              }
              for (l[3] = u, o = u, d.push(u); ; ) {
                if (f.index > e) return "";
                for (i = 0, a = Math.pow(2, g), c = 1; c != a; )
                  (s = f.val & f.position),
                    (f.position >>= 1),
                    0 == f.position && ((f.position = t), (f.val = n(f.index++))),
                    (i |= (s > 0 ? 1 : 0) * c),
                    (c <<= 1);
                switch ((u = i)) {
                  case 0:
                    for (i = 0, a = Math.pow(2, 8), c = 1; c != a; )
                      (s = f.val & f.position),
                        (f.position >>= 1),
                        0 == f.position && ((f.position = t), (f.val = n(f.index++))),
                        (i |= (s > 0 ? 1 : 0) * c),
                        (c <<= 1);
                    (l[h++] = S(i)), (u = h - 1), p--;
                    break;
                  case 1:
                    for (i = 0, a = Math.pow(2, 16), c = 1; c != a; )
                      (s = f.val & f.position),
                        (f.position >>= 1),
                        0 == f.position && ((f.position = t), (f.val = n(f.index++))),
                        (i |= (s > 0 ? 1 : 0) * c),
                        (c <<= 1);
                    (l[h++] = S(i)), (u = h - 1), p--;
                    break;
                  case 2:
                    return d.join("");
                }
                if ((0 == p && ((p = Math.pow(2, g)), g++), l[u])) m = l[u];
                else {
                  if (u !== h) return null;
                  m = o + o.charAt(0);
                }
                d.push(m), (l[h++] = o + m.charAt(0)), (o = m), 0 == --p && ((p = Math.pow(2, g)), g++);
              }
            }
          },
          x = { DEBUG: !1, LIB_VERSION: "1.50.3" },
          I = Array.prototype,
          j = Object.prototype,
          A = j.toString,
          P = j.hasOwnProperty,
          R = "undefined" != typeof window ? window : {},
          M = R.navigator || { userAgent: "" },
          L = R.document || {},
          N = M.userAgent,
          $ = I.forEach,
          D = I.indexOf,
          F = Array.isArray,
          U = {},
          B = function () {
            if (x.DEBUG && !X(window.console) && window.console) {
              for (
                var e = ("__rrweb_original__" in window.console.log) ? window.console.log.__rrweb_original__ : window.console.log,
                  t = arguments.length,
                  n = new Array(t),
                  r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              try {
                e.apply(window.console, n);
              } catch (t) {
                W(n, function (t) {
                  e(t);
                });
              }
            }
          },
          H = function () {
            if (x.DEBUG && !X(window.console) && window.console) {
              for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              var r = ["PostHog error:"].concat(t),
                o = "__rrweb_original__" in window.console.error ? window.console.error.__rrweb_original__ : window.console.error;
              try {
                o.apply(window.console, r);
              } catch (e) {
                W(r, function (e) {
                  o(e);
                });
              }
            }
          },
          V = function () {
            if (!X(window.console) && window.console) {
              for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              var r = ["PostHog error:"].concat(t),
                o = "__rrweb_original__" in window.console.error ? window.console.error.__rrweb_original__ : window.console.error;
              try {
                o.apply(window.console, r);
              } catch (e) {
                W(r, function (e) {
                  o(e);
                });
              }
            }
          },
          q = function (e) {
            return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
          };
        function z(e, t, n) {
          if (null != e)
            if ($ && Array.isArray(e) && e.forEach === $) e.forEach(t, n);
            else if ("length" in e && e.length === +e.length) {
              for (var r = 0, o = e.length; r < o; r++) if (r in e && t.call(n, e[r], r) === U) return;
            } else for (var i in e) if (P.call(e, i) && t.call(n, e[i], i) === U) return;
        }
        function W(e, t, n) {
          if (Array.isArray(e))
            if ($ && e.forEach === $) e.forEach(t, n);
            else if ("length" in e && e.length === +e.length)
              for (var r = 0, o = e.length; r < o; r++) if (r in e && t.call(n, e[r], r) === U) return;
        }
        var Z = function (e) {
            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return (
              W(n, function (t) {
                for (var n in t) void 0 !== t[n] && (e[n] = t[n]);
              }),
              e
            );
          },
          G =
            F ||
            function (e) {
              return "[object Array]" === A.call(e);
            },
          J = function (e) {
            try {
              return /^\s*\bfunction\b/.test(e);
            } catch (e) {
              return !1;
            }
          };
        function Q(e, t) {
          return -1 !== e.indexOf(t);
        }
        var Y = function (e) {
            return e === Object(e) && !G(e);
          },
          X = function (e) {
            return void 0 === e;
          },
          K = function (e) {
            return "[object String]" == A.call(e);
          },
          ee = function e(t) {
            return (
              z(t, function (n, r) {
                !(function (e) {
                  return "[object Date]" == A.call(e);
                })(n)
                  ? Y(n) && (t[r] = e(n))
                  : (t[r] = te(n));
              }),
              t
            );
          },
          te = function (e) {
            function t(e) {
              return e < 10 ? "0" + e : e;
            }
            return (
              e.getUTCFullYear() +
              "-" +
              t(e.getUTCMonth() + 1) +
              "-" +
              t(e.getUTCDate()) +
              "T" +
              t(e.getUTCHours()) +
              ":" +
              t(e.getUTCMinutes()) +
              ":" +
              t(e.getUTCSeconds())
            );
          },
          ne = function (e) {
            return function () {
              try {
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return e.apply(this, n);
              } catch (e) {
                V("Implementation error. Please turn on debug and contact support@posthog.com."), V(e);
              }
            };
          },
          re = function (e) {
            var t = {};
            return (
              z(e, function (e, n) {
                K(e) && e.length > 0 && (t[n] = e);
              }),
              t
            );
          },
          oe = ["$performance_raw"];
        function ie(e, t) {
          return (
            (n = e),
            (r = function (e, n) {
              return n && oe.indexOf(n) > -1 ? e : "string" == typeof e && null !== t ? e.slice(0, t) : e;
            }),
            (o = new Set()),
            (function e(t, n) {
              return t !== Object(t)
                ? r
                  ? r(t, n)
                  : t
                : o.has(t)
                ? void 0
                : (o.add(t),
                  G(t)
                    ? ((i = []),
                      W(t, function (t) {
                        i.push(e(t));
                      }))
                    : ((i = {}),
                      z(t, function (t, n) {
                        o.has(t) || (i[n] = e(t, n));
                      })),
                  i);
              var i;
            })(n)
          );
          var n, r, o;
        }
        function se(e) {
          var t,
            n,
            r,
            o,
            i,
            s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            a = 0,
            c = 0,
            u = "",
            l = [];
          if (!e) return e;
          e = ce(e);
          do {
            (t = ((i = (e.charCodeAt(a++) << 16) | (e.charCodeAt(a++) << 8) | e.charCodeAt(a++)) >> 18) & 63),
              (n = (i >> 12) & 63),
              (r = (i >> 6) & 63),
              (o = 63 & i),
              (l[c++] = s.charAt(t) + s.charAt(n) + s.charAt(r) + s.charAt(o));
          } while (a < e.length);
          switch (((u = l.join("")), e.length % 3)) {
            case 1:
              u = u.slice(0, -2) + "==";
              break;
            case 2:
              u = u.slice(0, -1) + "=";
          }
          return u;
        }
        var ae,
          ce = function (e) {
            var t,
              n,
              r,
              o,
              i = "";
            for (t = n = 0, r = (e = (e + "").replace(/\r\n/g, "\n").replace(/\r/g, "\n")).length, o = 0; o < r; o++) {
              var s = e.charCodeAt(o),
                a = null;
              s < 128
                ? n++
                : (a =
                    s > 127 && s < 2048
                      ? String.fromCharCode((s >> 6) | 192, (63 & s) | 128)
                      : String.fromCharCode((s >> 12) | 224, ((s >> 6) & 63) | 128, (63 & s) | 128)),
                null !== a && (n > t && (i += e.substring(t, n)), (i += a), (t = n = o + 1));
            }
            return n > t && (i += e.substring(t, e.length)), i;
          },
          ue =
            ((ae = function () {
              for (var e = new Date().valueOf(), t = 0; e == new Date().valueOf(); ) t++;
              return e.toString(16) + t.toString(16);
            }),
            function () {
              var e = "undefined" != typeof window ? (window.screen.height * window.screen.width).toString(16) : "0";
              return (
                ae() +
                "-" +
                Math.random().toString(16).replace(".", "") +
                "-" +
                (function () {
                  var e,
                    t,
                    n = N,
                    r = 0,
                    o = [];
                  function i(e, t) {
                    var n,
                      r = 0;
                    for (n = 0; n < t.length; n++) r |= o[n] << (8 * n);
                    return e ^ r;
                  }
                  for (e = 0; e < n.length; e++) (t = n.charCodeAt(e)), o.unshift(255 & t), o.length >= 4 && ((r = i(r, o)), (o = []));
                  return o.length > 0 && (r = i(r, o)), r.toString(16);
                })() +
                "-" +
                e +
                "-" +
                ae()
              );
            }),
          le = function (e) {
            return !!/(google web preview|baiduspider|yandexbot|bingbot|googlebot|yahoo! slurp|ahrefsbot|facebookexternalhit|facebookcatalog|applebot|semrushbot|duckduckbot|twitterbot|rogerbot|linkedinbot|mj12bot|sitebulb|bot.htm|bot.php|hubspot|crawler)/i.test(
              e
            );
          },
          de = function (e, t) {
            var n = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]"),
              r = new RegExp("[\\?&]" + n + "=([^&#]*)").exec(e);
            if (null === r || (r && "string" != typeof r[1] && r[1].length)) return "";
            var o = r[1];
            try {
              o = decodeURIComponent(o);
            } catch (e) {
              H("Skipping decoding for malformed query param: " + o);
            }
            return o.replace(/\+/g, " ");
          },
          fe = function (e, t) {
            var n = e.match(new RegExp(t + "=([^&]*)"));
            return n ? n[1] : null;
          },
          pe = (function () {
            function e(t) {
              return t && ((t.preventDefault = e.preventDefault), (t.stopPropagation = e.stopPropagation)), t;
            }
            return (
              (e.preventDefault = function () {
                this.returnValue = !1;
              }),
              (e.stopPropagation = function () {
                this.cancelBubble = !0;
              }),
              function (t, n, r, o, i) {
                if (t)
                  if (t.addEventListener && !o) t.addEventListener(n, r, !!i);
                  else {
                    var s = "on" + n,
                      a = t[s];
                    t[s] = (function (t, n, r) {
                      return function (o) {
                        if ((o = o || e(window.event))) {
                          var i,
                            s = !0;
                          J(r) && (i = r(o));
                          var a = n.call(t, o);
                          return (!1 !== i && !1 !== a) || (s = !1), s;
                        }
                      };
                    })(t, r, a);
                  }
                else H("No valid element provided to register_event");
              }
            );
          })(),
          he = {
            campaignParams: function () {
              var e = "utm_source utm_medium utm_campaign utm_content utm_term gclid fbclid msclkid".split(" "),
                t = {};
              return (
                z(e, function (e) {
                  var n = de(L.URL, e);
                  n.length && (t[e] = n);
                }),
                t
              );
            },
            searchEngine: function (e) {
              return 0 === e.search("https?://(.*)google.([^/?]*)")
                ? "google"
                : 0 === e.search("https?://(.*)bing.com")
                ? "bing"
                : 0 === e.search("https?://(.*)yahoo.com")
                ? "yahoo"
                : 0 === e.search("https?://(.*)duckduckgo.com")
                ? "duckduckgo"
                : null;
            },
            searchInfo: function (e) {
              var t = he.searchEngine(e),
                n = "yahoo" != t ? "q" : "p",
                r = {};
              if (null !== t) {
                r.$search_engine = t;
                var o = de(e, n);
                o.length && (r.ph_keyword = o);
              }
              return r;
            },
            browser: function (e, t, n) {
              return (
                (t = t || ""),
                n || Q(e, " OPR/")
                  ? Q(e, "Mini")
                    ? "Opera Mini"
                    : "Opera"
                  : /(BlackBerry|PlayBook|BB10)/i.test(e)
                  ? "BlackBerry"
                  : Q(e, "IEMobile") || Q(e, "WPDesktop")
                  ? "Internet Explorer Mobile"
                  : Q(e, "SamsungBrowser/")
                  ? "Samsung Internet"
                  : Q(e, "Edge") || Q(e, "Edg/")
                  ? "Microsoft Edge"
                  : Q(e, "FBIOS")
                  ? "Facebook Mobile"
                  : Q(e, "Chrome")
                  ? "Chrome"
                  : Q(e, "CriOS")
                  ? "Chrome iOS"
                  : Q(e, "UCWEB") || Q(e, "UCBrowser")
                  ? "UC Browser"
                  : Q(e, "FxiOS")
                  ? "Firefox iOS"
                  : Q(t, "Apple")
                  ? Q(e, "Mobile")
                    ? "Mobile Safari"
                    : "Safari"
                  : Q(e, "Android")
                  ? "Android Mobile"
                  : Q(e, "Konqueror")
                  ? "Konqueror"
                  : Q(e, "Firefox")
                  ? "Firefox"
                  : Q(e, "MSIE") || Q(e, "Trident/")
                  ? "Internet Explorer"
                  : Q(e, "Gecko")
                  ? "Mozilla"
                  : ""
              );
            },
            browserVersion: function (e, t, n) {
              var r = {
                "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/,
                "Microsoft Edge": /Edge?\/(\d+(\.\d+)?)/,
                Chrome: /Chrome\/(\d+(\.\d+)?)/,
                "Chrome iOS": /CriOS\/(\d+(\.\d+)?)/,
                "UC Browser": /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
                Safari: /Version\/(\d+(\.\d+)?)/,
                "Mobile Safari": /Version\/(\d+(\.\d+)?)/,
                Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
                Firefox: /Firefox\/(\d+(\.\d+)?)/,
                "Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/,
                Konqueror: /Konqueror:(\d+(\.\d+)?)/,
                BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
                "Android Mobile": /android\s(\d+(\.\d+)?)/,
                "Samsung Internet": /SamsungBrowser\/(\d+(\.\d+)?)/,
                "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/,
                Mozilla: /rv:(\d+(\.\d+)?)/
              }[he.browser(e, t, n)];
              if (void 0 === r) return null;
              var o = e.match(r);
              return o ? parseFloat(o[o.length - 2]) : null;
            },
            browserLanguage: function () {
              return M.language || M.userLanguage;
            },
            os: function () {
              var e = N;
              return /Windows/i.test(e)
                ? /Phone/.test(e) || /WPDesktop/.test(e)
                  ? "Windows Phone"
                  : "Windows"
                : /(iPhone|iPad|iPod)/.test(e)
                ? "iOS"
                : /Android/.test(e)
                ? "Android"
                : /(BlackBerry|PlayBook|BB10)/i.test(e)
                ? "BlackBerry"
                : /Mac/i.test(e)
                ? "Mac OS X"
                : /Linux/.test(e)
                ? "Linux"
                : /CrOS/.test(e)
                ? "Chrome OS"
                : "";
            },
            device: function (e) {
              return /Windows Phone/i.test(e) || /WPDesktop/.test(e)
                ? "Windows Phone"
                : /iPad/.test(e)
                ? "iPad"
                : /iPod/.test(e)
                ? "iPod Touch"
                : /iPhone/.test(e)
                ? "iPhone"
                : /(BlackBerry|PlayBook|BB10)/i.test(e)
                ? "BlackBerry"
                : /Android/.test(e) && !/Mobile/.test(e)
                ? "Android Tablet"
                : /Android/.test(e)
                ? "Android"
                : "";
            },
            deviceType: function (e) {
              var t = this.device(e);
              return "iPad" === t || "Android Tablet" === t ? "Tablet" : t ? "Mobile" : "Desktop";
            },
            referringDomain: function (e) {
              var t = e.split("/");
              return t.length >= 3 ? t[2] : "";
            },
            properties: function () {
              return Z(
                re({ $os: he.os(), $browser: he.browser(N, M.vendor, R.opera), $device: he.device(N), $device_type: he.deviceType(N) }),
                {
                  $current_url: null == R ? void 0 : R.location.href,
                  $host: null == R ? void 0 : R.location.host,
                  $pathname: null == R ? void 0 : R.location.pathname,
                  $browser_version: he.browserVersion(N, M.vendor, R.opera),
                  $browser_language: he.browserLanguage(),
                  $screen_height: null == R ? void 0 : R.screen.height,
                  $screen_width: null == R ? void 0 : R.screen.width,
                  $viewport_height: null == R ? void 0 : R.innerHeight,
                  $viewport_width: null == R ? void 0 : R.innerWidth,
                  $lib: "web",
                  $lib_version: x.LIB_VERSION,
                  $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
                  $time:
                    ((Date.now =
                      Date.now ||
                      function () {
                        return +new Date();
                      }),
                    Date.now() / 1e3)
                }
              );
            },
            people_properties: function () {
              return Z(re({ $os: he.os(), $browser: he.browser(N, M.vendor, R.opera) }), {
                $browser_version: he.browserVersion(N, M.vendor, R.opera)
              });
            }
          };
        function ge(e) {
          switch (s(e.className)) {
            case "string":
              return e.className;
            case "object":
              return ("baseVal" in e.className ? e.className.baseVal : null) || e.getAttribute("class") || "";
            default:
              return "";
          }
        }
        function me(e) {
          var t = "";
          return (
            Se(e) &&
              !ke(e) &&
              e.childNodes &&
              e.childNodes.length &&
              z(e.childNodes, function (e) {
                ye(e) &&
                  e.textContent &&
                  (t += q(e.textContent)
                    .split(/(\s+)/)
                    .filter(Oe)
                    .join("")
                    .replace(/[\r\n]/g, " ")
                    .replace(/[ ]+/g, " ")
                    .substring(0, 255));
              }),
            q(t)
          );
        }
        function ve(e) {
          return !!e && 1 === e.nodeType;
        }
        function _e(e, t) {
          return !!e && !!e.tagName && e.tagName.toLowerCase() === t.toLowerCase();
        }
        function ye(e) {
          return !!e && 3 === e.nodeType;
        }
        function be(e) {
          return !!e && 11 === e.nodeType;
        }
        var we = ["a", "button", "form", "input", "select", "textarea", "label"];
        function Se(e) {
          for (var t = e; t.parentNode && !_e(t, "body"); t = t.parentNode) {
            var n = ge(t).split(" ");
            if (Q(n, "ph-sensitive") || Q(n, "ph-no-capture")) return !1;
          }
          if (Q(ge(e).split(" "), "ph-include")) return !0;
          var r = e.type || "";
          if ("string" == typeof r)
            switch (r.toLowerCase()) {
              case "hidden":
              case "password":
                return !1;
            }
          var o = e.name || e.id || "";
          return (
            "string" != typeof o ||
            !/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(
              o.replace(/[^a-zA-Z0-9]/g, "")
            )
          );
        }
        function ke(e) {
          return !!(
            (_e(e, "input") && !["button", "checkbox", "submit", "reset"].includes(e.type)) ||
            _e(e, "select") ||
            _e(e, "textarea") ||
            "true" === e.getAttribute("contenteditable")
          );
        }
        function Oe(e) {
          if (null === e || X(e)) return !1;
          if ("string" == typeof e) {
            if (
              ((e = q(e)),
              /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test(
                (e || "").replace(/[- ]/g, "")
              ))
            )
              return !1;
            if (/(^\d{3}-?\d{2}-?\d{4}$)/.test(e)) return !1;
          }
          return !0;
        }
        function Ee(e, t) {
          var n = document.createElement("script");
          (n.type = "text/javascript"), (n.src = e), (n.onload = t);
          var r,
            o = document.querySelectorAll("body > script");
          o.length > 0 ? null === (r = o[0].parentNode) || void 0 === r || r.insertBefore(n, o[0]) : document.body.appendChild(n);
        }
        function Te(e) {
          var t = me(e);
          return Oe((t = xe([t, Ce(e)]))) ? t : "";
        }
        function Ce(e) {
          var t,
            n = "";
          if ((null === (t = e.children) || void 0 === t ? void 0 : t.length) > 0) {
            var r,
              o = w(e.children);
            try {
              for (o.s(); !(r = o.n()).done; ) {
                var i = r.value;
                if (i && 1 === i.nodeType && "span" === i.tagName.toLowerCase()) {
                  var s = me(i);
                  Oe(s) && (n = xe([n, s])), i.children.length > 0 && (n = xe([n, Ce(i)]));
                }
              }
            } catch (e) {
              o.e(e);
            } finally {
              o.f();
            }
          }
          return n;
        }
        function xe(e) {
          return e
            .filter(function (e) {
              return e;
            })
            .join(" ");
        }
        var Ie = (function () {
            function e(t) {
              a(this, e), (this.clicks = []), (this.enabled = t);
            }
            return (
              u(e, [
                {
                  key: "isRageClick",
                  value: function (e, t, n) {
                    if (!this.enabled) return !1;
                    var r = this.clicks[this.clicks.length - 1];
                    if (r && Math.abs(e - r.x) + Math.abs(t - r.y) < 30 && n - r.timestamp < 1e3) {
                      if ((this.clicks.push({ x: e, y: t, timestamp: n }), 3 === this.clicks.length)) return !0;
                    } else this.clicks = [{ x: e, y: t, timestamp: n }];
                    return !1;
                  }
                }
              ]),
              e
            );
          })(),
          je = {
            _initializedTokens: [],
            _previousElementSibling: function (e) {
              if (e.previousElementSibling) return e.previousElementSibling;
              var t = e;
              do {
                t = t.previousSibling;
              } while (t && !ve(t));
              return t;
            },
            _getAugmentPropertiesFromElement: function (e) {
              if (!Se(e)) return {};
              var t = {};
              return (
                z(e.attributes, function (e) {
                  if (e.name.startsWith("data-ph-capture-attribute")) {
                    var n = e.name.replace("data-ph-capture-attribute-", ""),
                      r = e.value;
                    n && r && Oe(r) && (t[n] = r);
                  }
                }),
                t
              );
            },
            _getPropertiesFromElement: function (e, t, n) {
              var r = e.tagName.toLowerCase(),
                o = { tag_name: r };
              we.indexOf(r) > -1 &&
                !n &&
                ("a" === e.tagName.toLowerCase() || "button" === e.tagName.toLowerCase() ? (o.$el_text = Te(e)) : (o.$el_text = me(e)));
              var i = ge(e);
              i.length > 0 &&
                (o.classes = i.split(" ").filter(function (e) {
                  return "" !== e;
                })),
                z(e.attributes, function (n) {
                  var r;
                  (ke(e) && -1 === ["name", "id", "class"].indexOf(n.name)) ||
                    (!t &&
                      Oe(n.value) &&
                      ("string" != typeof (r = n.name) || ("_ngcontent" !== r.substring(0, 10) && "_nghost" !== r.substring(0, 7))) &&
                      (o["attr__" + n.name] = n.value));
                });
              for (var s = 1, a = 1, c = e; (c = this._previousElementSibling(c)); ) s++, c.tagName === e.tagName && a++;
              return (o.nth_child = s), (o.nth_of_type = a), o;
            },
            _getDefaultProperties: function (e) {
              return { $event_type: e, $ce_version: 1 };
            },
            _extractCustomPropertyValue: function (e) {
              var t = [];
              return (
                z(document.querySelectorAll(e.css_selector), function (e) {
                  var n;
                  ["input", "select"].indexOf(e.tagName.toLowerCase()) > -1 ? (n = e.value) : e.textContent && (n = e.textContent),
                    Oe(n) && t.push(n);
                }),
                t.join(", ")
              );
            },
            _getCustomProperties: function (e) {
              var t = this,
                n = {};
              return (
                z(this._customProperties, function (r) {
                  z(r.event_selectors, function (o) {
                    z(document.querySelectorAll(o), function (o) {
                      Q(e, o) && Se(o) && (n[r.name] = t._extractCustomPropertyValue(r));
                    });
                  });
                }),
                n
              );
            },
            _getEventTarget: function (e) {
              return void 0 === e.target
                ? e.srcElement || null
                : null !== (t = e.target) && void 0 !== t && t.shadowRoot
                ? e.composedPath()[0] || null
                : e.target || null;
              var t;
            },
            _captureEvent: function (e, t) {
              var n,
                r = this,
                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "$autocapture",
                i = this._getEventTarget(e);
              if (
                (ye(i) && (i = i.parentNode || null),
                "$autocapture" === o &&
                  "click" === e.type &&
                  e instanceof MouseEvent &&
                  null !== (n = this.rageclicks) &&
                  void 0 !== n &&
                  n.isRageClick(e.clientX, e.clientY, new Date().getTime()) &&
                  this._captureEvent(e, t, "$rageclick"),
                i &&
                  (function (e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                    if (!e || _e(e, "html") || !ve(e)) return !1;
                    if (null != n && n.url_allowlist) {
                      var r = window.location.href,
                        o = n.url_allowlist;
                      if (
                        o &&
                        !o.some(function (e) {
                          return r.match(e);
                        })
                      )
                        return !1;
                    }
                    if (null != n && n.dom_event_allowlist) {
                      var i = n.dom_event_allowlist;
                      if (
                        i &&
                        !i.some(function (e) {
                          return t.type === e;
                        })
                      )
                        return !1;
                    }
                    if (null != n && n.element_allowlist) {
                      var s = n.element_allowlist;
                      if (
                        s &&
                        !s.some(function (t) {
                          return e.tagName.toLowerCase() === t;
                        })
                      )
                        return !1;
                    }
                    if (null != n && n.css_selector_allowlist) {
                      var a = n.css_selector_allowlist;
                      if (
                        a &&
                        !a.some(function (t) {
                          return e.matches(t);
                        })
                      )
                        return !1;
                    }
                    for (var c = !1, u = [e], l = !0, d = e; d.parentNode && !_e(d, "body"); )
                      if (be(d.parentNode)) u.push(d.parentNode.host), (d = d.parentNode.host);
                      else {
                        if (!(l = d.parentNode || !1)) break;
                        if (we.indexOf(l.tagName.toLowerCase()) > -1) c = !0;
                        else {
                          var f = window.getComputedStyle(l);
                          f && "pointer" === f.getPropertyValue("cursor") && (c = !0);
                        }
                        u.push(l), (d = l);
                      }
                    var p = window.getComputedStyle(e);
                    if (p && "pointer" === p.getPropertyValue("cursor") && "click" === t.type) return !0;
                    var h = e.tagName.toLowerCase();
                    switch (h) {
                      case "html":
                        return !1;
                      case "form":
                        return "submit" === t.type;
                      case "input":
                      case "select":
                      case "textarea":
                        return "change" === t.type || "click" === t.type;
                      default:
                        return c
                          ? "click" === t.type
                          : "click" === t.type && (we.indexOf(h) > -1 || "true" === e.getAttribute("contenteditable"));
                    }
                  })(i, e, this.config))
              ) {
                for (var s = [i], a = i; a.parentNode && !_e(a, "body"); )
                  be(a.parentNode) ? (s.push(a.parentNode.host), (a = a.parentNode.host)) : (s.push(a.parentNode), (a = a.parentNode));
                var c,
                  u = [],
                  l = {},
                  d = !1;
                if (
                  (z(s, function (e) {
                    var n = Se(e);
                    "a" === e.tagName.toLowerCase() && ((c = e.getAttribute("href")), (c = n && Oe(c) && c)),
                      Q(ge(e).split(" "), "ph-no-capture") && (d = !0),
                      u.push(r._getPropertiesFromElement(e, t.get_config("mask_all_element_attributes"), t.get_config("mask_all_text")));
                    var o = r._getAugmentPropertiesFromElement(e);
                    Z(l, o);
                  }),
                  t.get_config("mask_all_text") ||
                    ("a" === i.tagName.toLowerCase() || "button" === i.tagName.toLowerCase()
                      ? (u[0].$el_text = Te(i))
                      : (u[0].$el_text = me(i))),
                  c && (u[0].attr__href = c),
                  d)
                )
                  return !1;
                var f = Z(this._getDefaultProperties(e.type), { $elements: u }, this._getCustomProperties(s), l);
                return t.capture(o, f), !0;
              }
            },
            _navigate: function (e) {
              window.location.href = e;
            },
            _addDomEventHandlers: function (e) {
              var t = this,
                n = function (n) {
                  (n = n || window.event), t._captureEvent(n, e);
                };
              pe(document, "submit", n, !1, !0), pe(document, "change", n, !1, !0), pe(document, "click", n, !1, !0);
            },
            _customProperties: [],
            rageclicks: null,
            config: void 0,
            init: function (e) {
              var t;
              "boolean" != typeof e.__autocapture && (this.config = e.__autocapture),
                null !== (t = this.config) &&
                  void 0 !== t &&
                  t.url_allowlist &&
                  (this.config.url_allowlist = this.config.url_allowlist.map(function (e) {
                    return new RegExp(e);
                  })),
                (this.rageclicks = new Ie(e.get_config("rageclick")));
            },
            afterDecideResponse: function (e, t) {
              var n = t.get_config("token");
              this._initializedTokens.indexOf(n) > -1
                ? B('autocapture already initialized for token "' + n + '"')
                : (this._initializedTokens.push(n),
                  e && e.config && e.config.enable_collect_everything && t.get_config("autocapture")
                    ? (e.custom_properties && (this._customProperties = e.custom_properties), this._addDomEventHandlers(t))
                    : (t.__autocapture = !1));
            },
            enabledForProject: function (e, t, n) {
              if (!e) return !0;
              (t = X(t) ? 10 : t), (n = X(n) ? 10 : n);
              for (var r = 0, o = 0; o < e.length; o++) r += e.charCodeAt(o);
              return r % t < n;
            },
            isBrowserSupported: function () {
              return J(document.querySelectorAll);
            }
          };
        !(function (e) {
          for (var t in e) "function" == typeof e[t] && (e[t] = e[t].bind(e));
        })(je),
          (function (e) {
            for (var t in e) "function" == typeof e[t] && (e[t] = ne(e[t]));
          })(je);
        var Ae = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i,
          Pe = {
            is_supported: function () {
              return !0;
            },
            error: function (e) {
              H("cookieStore error: " + e);
            },
            get: function (e) {
              try {
                for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
                  for (var o = n[r]; " " == o.charAt(0); ) o = o.substring(1, o.length);
                  if (0 === o.indexOf(t)) return decodeURIComponent(o.substring(t.length, o.length));
                }
              } catch (e) {}
              return null;
            },
            parse: function (e) {
              var t;
              try {
                t = JSON.parse(Pe.get(e)) || {};
              } catch (e) {}
              return t;
            },
            set: function (e, t, n, r, o) {
              try {
                var i = "",
                  s = "",
                  a = "";
                if (r) {
                  var c = document.location.hostname.match(Ae),
                    u = c ? c[0] : "";
                  i = u ? "; domain=." + u : "";
                }
                if (n) {
                  var l = new Date();
                  l.setTime(l.getTime() + 24 * n * 60 * 60 * 1e3), (s = "; expires=" + l.toUTCString());
                }
                o && (a = "; secure");
                var d = e + "=" + encodeURIComponent(JSON.stringify(t)) + s + "; path=/" + i + a;
                return (document.cookie = d), d;
              } catch (e) {
                return;
              }
            },
            remove: function (e, t) {
              try {
                Pe.set(e, "", -1, t);
              } catch (e) {
                return;
              }
            }
          },
          Re = null,
          Me = {
            is_supported: function () {
              if (null !== Re) return Re;
              var e = !0;
              if ("undefined" != typeof window)
                try {
                  var t = "__mplssupport__";
                  Me.set(t, "xyz"), '"xyz"' !== Me.get(t) && (e = !1), Me.remove(t);
                } catch (t) {
                  e = !1;
                }
              else e = !1;
              return e || H("localStorage unsupported; falling back to cookie store"), (Re = e), e;
            },
            error: function (e) {
              H("localStorage error: " + e);
            },
            get: function (e) {
              try {
                return window.localStorage.getItem(e);
              } catch (e) {
                Me.error(e);
              }
              return null;
            },
            parse: function (e) {
              try {
                return JSON.parse(Me.get(e)) || {};
              } catch (e) {}
              return null;
            },
            set: function (e, t) {
              try {
                window.localStorage.setItem(e, JSON.stringify(t));
              } catch (e) {
                Me.error(e);
              }
            },
            remove: function (e) {
              try {
                window.localStorage.removeItem(e);
              } catch (e) {
                Me.error(e);
              }
            }
          },
          Le = i(
            i({}, Me),
            {},
            {
              parse: function (e) {
                try {
                  var t = {};
                  try {
                    (t = Pe.parse(e) || {}).distinct_id && Pe.set(e, { distinct_id: t.distinct_id });
                  } catch (e) {}
                  var n = Z(t, JSON.parse(Me.get(e) || "{}"));
                  return Me.set(e, n), n;
                } catch (e) {}
                return null;
              },
              set: function (e, t, n, r, o) {
                try {
                  Me.set(e, t), t.distinct_id && Pe.set(e, { distinct_id: t.distinct_id }, n, r, o);
                } catch (e) {
                  Me.error(e);
                }
              },
              remove: function (e, t) {
                try {
                  window.localStorage.removeItem(e), Pe.remove(e, t);
                } catch (e) {
                  Me.error(e);
                }
              }
            }
          ),
          Ne = {},
          $e = {
            is_supported: function () {
              return !0;
            },
            error: function (e) {
              H("memoryStorage error: " + e);
            },
            get: function (e) {
              return Ne[e] || null;
            },
            parse: function (e) {
              return Ne[e] || null;
            },
            set: function (e, t) {
              Ne[e] = t;
            },
            remove: function (e) {
              delete Ne[e];
            }
          },
          De = null,
          Fe = {
            is_supported: function () {
              if (null !== De) return De;
              if (((De = !0), "undefined" != typeof window))
                try {
                  var e = "__support__";
                  Fe.set(e, "xyz"), '"xyz"' !== Fe.get(e) && (De = !1), Fe.remove(e);
                } catch (e) {
                  De = !1;
                }
              else De = !1;
              return De;
            },
            error: function (e) {
              x.DEBUG && H("sessionStorage error: ", e);
            },
            get: function (e) {
              try {
                return window.sessionStorage.getItem(e);
              } catch (e) {
                Fe.error(e);
              }
              return null;
            },
            parse: function (e) {
              try {
                return JSON.parse(Fe.get(e)) || null;
              } catch (e) {}
              return null;
            },
            set: function (e, t) {
              try {
                window.sessionStorage.setItem(e, JSON.stringify(t));
              } catch (e) {
                Fe.error(e);
              }
            },
            remove: function (e) {
              try {
                window.sessionStorage.removeItem(e);
              } catch (e) {
                Fe.error(e);
              }
            }
          };
        function Ue(e, t) {
          Ge(!0, e, t);
        }
        function Be(e, t) {
          Ge(!1, e, t);
        }
        function He(e, t) {
          return "1" === Ze(e, t);
        }
        function Ve(e, t) {
          return (
            !!(function (e) {
              if (e && e.respectDnt) {
                var t = (e && e.window) || R,
                  n = t.navigator || {},
                  r = !1;
                return (
                  z([n.doNotTrack, n.msDoNotTrack, t.doNotTrack], function (e) {
                    Q([!0, 1, "1", "yes"], e) && (r = !0);
                  }),
                  r
                );
              }
              return !1;
            })(t) || "0" === Ze(e, t)
          );
        }
        function qe(e, t) {
          ze((t = t || {})).remove(We(e, t), !!t.crossSubdomainCookie);
        }
        function ze(e) {
          return "localStorage" === (e = e || {}).persistenceType ? Me : "localStorage+cookie" === e.persistenceType ? Le : Pe;
        }
        function We(e, t) {
          return ((t = t || {}).persistencePrefix || "__ph_opt_in_out_") + e;
        }
        function Ze(e, t) {
          return ze(t).get(We(e, t));
        }
        function Ge(e, t, n) {
          K(t) && t.length
            ? (ze((n = n || {})).set(
                We(t, n),
                e ? 1 : 0,
                (function (e) {
                  return "[object Number]" == A.call(e);
                })(n.cookieExpiration)
                  ? n.cookieExpiration
                  : null,
                n.crossSubdomainCookie,
                n.secureCookie
              ),
              n.capture && e && n.capture(n.captureEventName || "$opt_in", n.captureProperties || {}, { send_instantly: !0 }))
            : console.error("gdpr." + (e ? "optIn" : "optOut") + " called with an invalid token");
        }
        function Je(e, t) {
          var n = !1;
          try {
            var r = e.get_config("token"),
              o = e.get_config("respect_dnt"),
              i = e.get_config("opt_out_capturing_persistence_type"),
              s = e.get_config("opt_out_capturing_cookie_prefix") || void 0,
              a = e.get_config("window");
            r && (n = Ve(r, { respectDnt: o, persistenceType: i, persistencePrefix: s, window: a }));
          } catch (e) {
            t || console.error("Unexpected error when checking capturing opt-out status: " + e);
          }
          return n;
        }
        function Qe(e, t, n) {
          return function () {
            for (var r = Je(e, n), o = arguments.length, i = new Array(o), s = 0; s < o; s++) i[s] = arguments[s];
            if (!r) return t.apply(this, i);
            var a = i[i.length - 1];
            "function" == typeof a && a(0);
          };
        }
        var Ye = "$set",
          Xe = (function () {
            function e(t) {
              var n = this;
              a(this, e),
                (this._posthog = t),
                (this.set = Qe(t, function (e, t, r) {
                  var o = n.set_action(e, t);
                  return (
                    Y(e) && (r = t),
                    n._get_config("save_referrer") && n._posthog.persistence.update_referrer_info(document.referrer),
                    (o[Ye] = Z({}, he.people_properties(), n._posthog.persistence.get_referrer_info(), o[Ye])),
                    n._send_request(o, r)
                  );
                })),
                (this.set_once = Qe(t, function (e, t, r) {
                  var o = n.set_once_action(e, t);
                  return Y(e) && (r = t), n._send_request(o, r);
                }));
            }
            return (
              u(e, [
                {
                  key: "toString",
                  value: function () {
                    return this._posthog.toString() + ".people";
                  }
                },
                {
                  key: "_send_request",
                  value: function (e, t) {
                    (e.$token = this._get_config("token")), (e.$distinct_id = this._posthog.get_distinct_id());
                    var n = this._posthog.get_property("$device_id"),
                      r = this._posthog.get_property("$user_id"),
                      o = this._posthog.get_property("$had_persisted_distinct_id");
                    n && (e.$device_id = n), r && (e.$user_id = r), o && (e.$had_persisted_distinct_id = o);
                    var i = ee(e),
                      s = ie(i, this._get_config("properties_string_max_length")),
                      a = se(JSON.stringify(i));
                    return (
                      this._posthog._send_request(
                        this._get_config("api_host") + "/engage/",
                        { data: a },
                        {},
                        this._posthog._prepare_callback(t, s)
                      ),
                      s
                    );
                  }
                },
                {
                  key: "_get_config",
                  value: function (e) {
                    return this._posthog.get_config(e);
                  }
                },
                {
                  key: "_is_reserved_property",
                  value: function (e) {
                    return (
                      "$distinct_id" === e || "$token" === e || "$device_id" === e || "$user_id" === e || "$had_persisted_distinct_id" === e
                    );
                  }
                },
                {
                  key: "set_action",
                  value: function (e, t) {
                    return this.apiActionParser(Ye, e, t);
                  }
                },
                {
                  key: "set_once_action",
                  value: function (e, t) {
                    return this.apiActionParser("$set_once", e, t);
                  }
                },
                {
                  key: "apiActionParser",
                  value: function (e, t, n) {
                    var r = this,
                      o = {},
                      i = {};
                    return (
                      Y(t)
                        ? z(t, function (e, t) {
                            r._is_reserved_property(t) || (i[t] = e);
                          })
                        : (i[t] = n),
                      (o[e] = i),
                      o
                    );
                  }
                }
              ]),
              e
            );
          })(),
          Ke = "$active_feature_flags",
          et = "$enabled_feature_flags",
          tt = "$override_feature_flags",
          nt = "$feature_flag_payloads",
          rt = (function () {
            function e(t) {
              a(this, e),
                (this.instance = t),
                (this._override_warning = !1),
                (this.flagCallReported = {}),
                (this.featureFlagEventHandlers = []),
                (this.reloadFeatureFlagsQueued = !1),
                (this.reloadFeatureFlagsInAction = !1);
            }
            return (
              u(e, [
                {
                  key: "getFlags",
                  value: function () {
                    return Object.keys(this.getFlagVariants());
                  }
                },
                {
                  key: "getFlagVariants",
                  value: function () {
                    var e = this.instance.get_property(et),
                      t = this.instance.get_property(tt);
                    if (!t) return e || {};
                    for (var n = Z({}, e), r = Object.keys(t), o = 0; o < r.length; o++)
                      !1 === t[r[o]] ? delete n[r[o]] : (n[r[o]] = t[r[o]]);
                    return (
                      this._override_warning ||
                        (console.warn("[PostHog] Overriding feature flags!", { enabledFlags: e, overriddenFlags: t, finalFlags: n }),
                        (this._override_warning = !0)),
                      n
                    );
                  }
                },
                {
                  key: "getFlagPayloads",
                  value: function () {
                    return this.instance.get_property(nt) || {};
                  }
                },
                {
                  key: "reloadFeatureFlags",
                  value: function () {
                    this.reloadFeatureFlagsQueued || ((this.reloadFeatureFlagsQueued = !0), this._startReloadTimer());
                  }
                },
                {
                  key: "setAnonymousDistinctId",
                  value: function (e) {
                    this.$anon_distinct_id = e;
                  }
                },
                {
                  key: "setReloadingPaused",
                  value: function (e) {
                    this.reloadFeatureFlagsInAction = e;
                  }
                },
                {
                  key: "resetRequestQueue",
                  value: function () {
                    this.reloadFeatureFlagsQueued = !1;
                  }
                },
                {
                  key: "_startReloadTimer",
                  value: function () {
                    var e = this;
                    this.reloadFeatureFlagsQueued &&
                      !this.reloadFeatureFlagsInAction &&
                      setTimeout(function () {
                        !e.reloadFeatureFlagsInAction &&
                          e.reloadFeatureFlagsQueued &&
                          ((e.reloadFeatureFlagsQueued = !1), e._reloadFeatureFlagsRequest());
                      }, 5);
                  }
                },
                {
                  key: "_reloadFeatureFlagsRequest",
                  value: function () {
                    var e = this;
                    this.setReloadingPaused(!0);
                    var t = this.instance.get_config("token"),
                      n = se(
                        JSON.stringify({
                          token: t,
                          distinct_id: this.instance.get_distinct_id(),
                          groups: this.instance.getGroups(),
                          $anon_distinct_id: this.$anon_distinct_id
                        })
                      );
                    this.instance._send_request(
                      this.instance.get_config("api_host") + "/decide/?v=3",
                      { data: n },
                      { method: "POST" },
                      this.instance._prepare_callback(function (t) {
                        (e.$anon_distinct_id = void 0), e.receivedFeatureFlags(t), e.setReloadingPaused(!1), e._startReloadTimer();
                      })
                    );
                  }
                },
                {
                  key: "getFeatureFlag",
                  value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!this.getFlags())
                      return console.warn('getFeatureFlag for key "' + e + "\" failed. Feature flags didn't load in time."), !1;
                    var n = this.getFlagVariants()[e];
                    return (
                      (!t.send_event && "send_event" in t) ||
                        this.flagCallReported[e] ||
                        ((this.flagCallReported[e] = !0),
                        this.instance.capture("$feature_flag_called", { $feature_flag: e, $feature_flag_response: n })),
                      n
                    );
                  }
                },
                {
                  key: "getFeatureFlagPayload",
                  value: function (e) {
                    return this.getFlagPayloads()[e];
                  }
                },
                {
                  key: "isFeatureEnabled",
                  value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.getFlags()
                      ? !!this.getFeatureFlag(e, t)
                      : (console.warn('isFeatureEnabled for key "' + e + "\" failed. Feature flags didn't load in time."), !1);
                  }
                },
                {
                  key: "addFeatureFlagsHandler",
                  value: function (e) {
                    this.featureFlagEventHandlers.push(e);
                  }
                },
                {
                  key: "removeFeatureFlagsHandler",
                  value: function (e) {
                    this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter(function (t) {
                      return t !== e;
                    });
                  }
                },
                {
                  key: "receivedFeatureFlags",
                  value: function (e) {
                    this.instance.decideEndpointWasHit = !0;
                    var t = this.getFlagVariants(),
                      n = this.getFlagPayloads();
                    !(function (e, t) {
                      var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        o = e.featureFlags,
                        s = e.featureFlagPayloads;
                      if (o)
                        if (Array.isArray(o)) {
                          var a,
                            c = {};
                          if (o) for (var u = 0; u < o.length; u++) c[o[u]] = !0;
                          t && t.register((l((a = {}), Ke, o), l(a, et, c), a));
                        } else {
                          var d,
                            f = o,
                            p = s;
                          e.errorsWhileComputingFlags && ((f = i(i({}, n), f)), (p = i(i({}, r), p))),
                            t && t.register((l((d = {}), Ke, Object.keys(f || {})), l(d, et, f || {}), l(d, nt, p || {}), d));
                        }
                      else t && (t.unregister(Ke), t.unregister(et), t.unregister(nt));
                    })(e, this.instance.persistence, t, n);
                    var r = this._prepareFeatureFlagsForCallbacks(),
                      o = r.flags,
                      s = r.flagVariants;
                    this.featureFlagEventHandlers.forEach(function (e) {
                      return e(o, s);
                    });
                  }
                },
                {
                  key: "override",
                  value: function (e) {
                    if (((this._override_warning = !1), !1 === e)) this.instance.persistence.unregister(tt);
                    else if (Array.isArray(e)) {
                      for (var t = {}, n = 0; n < e.length; n++) t[e[n]] = !0;
                      this.instance.persistence.register(l({}, tt, t));
                    } else this.instance.persistence.register(l({}, tt, e));
                  }
                },
                {
                  key: "onFeatureFlags",
                  value: function (e) {
                    var t = this;
                    if ((this.addFeatureFlagsHandler(e), this.instance.decideEndpointWasHit)) {
                      var n = this._prepareFeatureFlagsForCallbacks(),
                        r = n.flags,
                        o = n.flagVariants;
                      e(r, o);
                    }
                    return function () {
                      return t.removeFeatureFlagsHandler(e);
                    };
                  }
                },
                {
                  key: "_prepareFeatureFlagsForCallbacks",
                  value: function () {
                    var e = this.getFlags(),
                      t = this.getFlagVariants();
                    return {
                      flags: e.filter(function (e) {
                        return t[e];
                      }),
                      flagVariants: Object.keys(t)
                        .filter(function (e) {
                          return t[e];
                        })
                        .reduce(function (e, n) {
                          return (e[n] = t[n]), e;
                        }, {})
                    };
                  }
                }
              ]),
              e
            );
          })(),
          ot = "$people_distinct_id",
          it = "__alias",
          st = "__timers",
          at = "$session_recording_enabled_server_side",
          ct = "$console_log_recording_enabled_server_side",
          ut = "$session_recording_recorder_version_server_side",
          lt = "$sesid",
          dt = "$enabled_feature_flags",
          ft = "$user_state",
          pt = ["__mps", "__mpso", "__mpus", "__mpa", "__mpap", "__mpr", "__mpu", ot, it, "__cmpns", st, at, lt, dt, ft],
          ht = (function () {
            function e(t) {
              a(this, e);
              var n = "";
              t.token && (n = t.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")),
                (this.props = {}),
                (this.campaign_params_saved = !1),
                t.persistence_name ? (this.name = "ph_" + t.persistence_name) : (this.name = "ph_" + n + "_posthog");
              var r = t.persistence.toLowerCase();
              "cookie" !== r &&
                -1 === r.indexOf("localstorage") &&
                "memory" !== r &&
                (V("Unknown persistence type " + r + "; falling back to cookie"), (r = t.persistence = "cookie")),
                "localstorage" === r && Me.is_supported()
                  ? (this.storage = Me)
                  : "localstorage+cookie" === r && Le.is_supported()
                  ? (this.storage = Le)
                  : (this.storage = "memory" === r ? $e : Pe),
                (this.user_state = "anonymous"),
                this.load(),
                this.update_config(t),
                this.save();
            }
            return (
              u(e, [
                {
                  key: "properties",
                  value: function () {
                    var e = {};
                    return (
                      z(this.props, function (t, n) {
                        if (n === dt && "object" === s(t))
                          for (var r = Object.keys(t), o = 0; o < r.length; o++) e["$feature/".concat(r[o])] = t[r[o]];
                        else
                          (a = n),
                            (c = !1),
                            (null === (i = pt)
                              ? c
                              : D && i.indexOf === D
                              ? -1 != i.indexOf(a)
                              : (z(i, function (e) {
                                  if (c || (c = e === a)) return U;
                                }),
                                c)) || (e[n] = t);
                        var i, a, c;
                      }),
                      e
                    );
                  }
                },
                {
                  key: "load",
                  value: function () {
                    if (!this.disabled) {
                      var e = this.storage.parse(this.name);
                      e && (this.props = Z({}, e));
                    }
                  }
                },
                {
                  key: "save",
                  value: function () {
                    this.disabled || this.storage.set(this.name, this.props, this.expire_days, this.cross_subdomain, this.secure);
                  }
                },
                {
                  key: "remove",
                  value: function () {
                    this.storage.remove(this.name, !1), this.storage.remove(this.name, !0);
                  }
                },
                {
                  key: "clear",
                  value: function () {
                    this.remove(), (this.props = {});
                  }
                },
                {
                  key: "register_once",
                  value: function (e, t, n) {
                    var r = this;
                    if (Y(e)) {
                      void 0 === t && (t = "None"), (this.expire_days = void 0 === n ? this.default_expiry : n);
                      var o = !1;
                      if (
                        (z(e, function (e, n) {
                          (r.props.hasOwnProperty(n) && r.props[n] !== t) || ((r.props[n] = e), (o = !0));
                        }),
                        o)
                      )
                        return this.save(), !0;
                    }
                    return !1;
                  }
                },
                {
                  key: "register",
                  value: function (e, t) {
                    var n = this;
                    if (Y(e)) {
                      this.expire_days = void 0 === t ? this.default_expiry : t;
                      var r = !1;
                      if (
                        (z(e, function (t, o) {
                          e.hasOwnProperty(o) && n.props[o] !== t && ((n.props[o] = t), (r = !0));
                        }),
                        r)
                      )
                        return this.save(), !0;
                    }
                    return !1;
                  }
                },
                {
                  key: "unregister",
                  value: function (e) {
                    e in this.props && (delete this.props[e], this.save());
                  }
                },
                {
                  key: "update_campaign_params",
                  value: function () {
                    this.campaign_params_saved || (this.register(he.campaignParams()), (this.campaign_params_saved = !0));
                  }
                },
                {
                  key: "update_search_keyword",
                  value: function (e) {
                    this.register(he.searchInfo(e));
                  }
                },
                {
                  key: "update_referrer_info",
                  value: function (e) {
                    this.register({
                      $referrer: e || this.props.$referrer || "$direct",
                      $referring_domain: he.referringDomain(e) || this.props.$referring_domain || "$direct"
                    });
                  }
                },
                {
                  key: "get_referrer_info",
                  value: function () {
                    return re({ $referrer: this.props.$referrer, $referring_domain: this.props.$referring_domain });
                  }
                },
                {
                  key: "safe_merge",
                  value: function (e) {
                    return (
                      z(this.props, function (t, n) {
                        n in e || (e[n] = t);
                      }),
                      e
                    );
                  }
                },
                {
                  key: "update_config",
                  value: function (e) {
                    (this.default_expiry = this.expire_days = e.cookie_expiration),
                      this.set_disabled(e.disable_persistence),
                      this.set_cross_subdomain(e.cross_subdomain_cookie),
                      this.set_secure(e.secure_cookie);
                  }
                },
                {
                  key: "set_disabled",
                  value: function (e) {
                    (this.disabled = e), this.disabled ? this.remove() : this.save();
                  }
                },
                {
                  key: "set_cross_subdomain",
                  value: function (e) {
                    e !== this.cross_subdomain && ((this.cross_subdomain = e), this.remove(), this.save());
                  }
                },
                {
                  key: "get_cross_subdomain",
                  value: function () {
                    return !!this.cross_subdomain;
                  }
                },
                {
                  key: "set_secure",
                  value: function (e) {
                    e !== this.secure && ((this.secure = e), this.remove(), this.save());
                  }
                },
                {
                  key: "set_event_timer",
                  value: function (e, t) {
                    var n = this.props[st] || {};
                    (n[e] = t), (this.props[st] = n), this.save();
                  }
                },
                {
                  key: "remove_event_timer",
                  value: function (e) {
                    var t = (this.props[st] || {})[e];
                    return X(t) || (delete this.props[st][e], this.save()), t;
                  }
                },
                {
                  key: "get_user_state",
                  value: function () {
                    return this.props[ft] || "anonymous";
                  }
                },
                {
                  key: "set_user_state",
                  value: function (e) {
                    (this.props[ft] = e), this.save();
                  }
                }
              ]),
              e
            );
          })(),
          gt = 2,
          mt = 4,
          vt = (function () {
            function e(t) {
              a(this, e),
                (this.instance = t),
                (this.captureStarted = !1),
                (this.snapshots = []),
                (this.emit = !1),
                (this.endpoint = "/e/"),
                (this.stopRrweb = void 0),
                (this.windowId = null),
                (this.sessionId = null),
                (this.receivedDecide = !1);
            }
            return (
              u(e, [
                {
                  key: "startRecordingIfEnabled",
                  value: function () {
                    this.isRecordingEnabled() ? this.startCaptureAndTrySendingQueuedSnapshots() : this.stopRecording();
                  }
                },
                {
                  key: "started",
                  value: function () {
                    return this.captureStarted;
                  }
                },
                {
                  key: "stopRecording",
                  value: function () {
                    this.captureStarted && this.stopRrweb && (this.stopRrweb(), (this.stopRrweb = void 0), (this.captureStarted = !1));
                  }
                },
                {
                  key: "isRecordingEnabled",
                  value: function () {
                    var e = !!this.instance.get_property(at),
                      t = !this.instance.get_config("disable_session_recording");
                    return e && t;
                  }
                },
                {
                  key: "isConsoleLogCaptureEnabled",
                  value: function () {
                    var e = !!this.instance.get_property(ct),
                      t = this.instance.get_config("enable_recording_console_log");
                    return null != t ? t : e;
                  }
                },
                {
                  key: "getRecordingVersion",
                  value: function () {
                    var e,
                      t = this.instance.get_property(ut);
                    return (
                      (null === (e = this.instance.get_config("session_recording")) || void 0 === e ? void 0 : e.recorderVersion) ||
                      t ||
                      "v1"
                    );
                  }
                },
                {
                  key: "afterDecideResponse",
                  value: function (e) {
                    var t, n, r, o, i, s;
                    (this.receivedDecide = !0),
                      this.instance.persistence &&
                        this.instance.persistence.register(
                          (l((i = {}), at, !!e.sessionRecording),
                          l(i, ct, null === (r = e.sessionRecording) || void 0 === r ? void 0 : r.consoleLogRecordingEnabled),
                          l(i, ut, null === (o = e.sessionRecording) || void 0 === o ? void 0 : o.recorderVersion),
                          i)
                        ),
                      null !== (t = e.sessionRecording) &&
                        void 0 !== t &&
                        t.endpoint &&
                        (this.endpoint = null === (s = e.sessionRecording) || void 0 === s ? void 0 : s.endpoint),
                      null !== (n = e.sessionRecording) &&
                        void 0 !== n &&
                        n.recorderVersion &&
                        (this.recorderVersion = e.sessionRecording.recorderVersion),
                      this.startRecordingIfEnabled();
                  }
                },
                {
                  key: "startCaptureAndTrySendingQueuedSnapshots",
                  value: function () {
                    var e = this;
                    this.receivedDecide &&
                      ((this.emit = !0),
                      this.snapshots.forEach(function (t) {
                        return e._captureSnapshot(t);
                      })),
                      this._startCapture();
                  }
                },
                {
                  key: "_startCapture",
                  value: function () {
                    if (void 0 !== Object.assign && !this.captureStarted && !this.instance.get_config("disable_session_recording")) {
                      var e = "v2" === this.getRecordingVersion() ? "recorder-v2.js" : "recorder.js";
                      (this.captureStarted = !0),
                        this.instance.__loaded_recorder_version !== this.getRecordingVersion() &&
                          Ee(
                            this.instance.get_config("api_host") + "/static/".concat(e, "?v=").concat(x.LIB_VERSION),
                            this._onScriptLoaded.bind(this)
                          ),
                        this._onScriptLoaded();
                    }
                  }
                },
                {
                  key: "_updateWindowAndSessionIds",
                  value: function (e) {
                    var t,
                      n,
                      r = 3 === e.type && 0 === (null === (t = e.data) || void 0 === t ? void 0 : t.source),
                      o = this.instance.sessionManager.checkAndGetSessionAndWindowId(r, e.timestamp),
                      i = o.windowId,
                      s = o.sessionId;
                    (this.windowId === i && this.sessionId === s) ||
                      -1 !== [gt, mt].indexOf(e.type) ||
                      null === (n = this.rrwebRecord) ||
                      void 0 === n ||
                      n.takeFullSnapshot(),
                      (this.windowId = i),
                      (this.sessionId = s);
                  }
                },
                {
                  key: "_onScriptLoaded",
                  value: function () {
                    var e,
                      t = this,
                      n = {
                        blockClass: "ph-no-capture",
                        blockSelector: void 0,
                        ignoreClass: "ph-ignore-input",
                        maskAllInputs: !0,
                        maskInputOptions: {},
                        maskInputFn: void 0,
                        slimDOMOptions: {},
                        collectFonts: !1,
                        inlineStylesheet: !0,
                        recordCanvas: !1
                      };
                    this.rrwebRecord = window.rrweb ? window.rrweb.record : window.rrwebRecord;
                    for (var r = this.instance.get_config("session_recording"), o = 0, a = Object.entries(r || {}); o < a.length; o++) {
                      var c = v(a[o], 2),
                        u = c[0],
                        l = c[1];
                      u in n && (n[u] = l);
                    }
                    (this.stopRrweb =
                      null === (e = this.rrwebRecord) || void 0 === e
                        ? void 0
                        : e.call(
                            this,
                            i(
                              {
                                emit: function (e) {
                                  (e = (function (e) {
                                    if (
                                      e &&
                                      "object" === s(e) &&
                                      6 === e.type &&
                                      "object" === s(e.data) &&
                                      "rrweb/console@1" === e.data.plugin
                                    ) {
                                      e.data.payload.payload.length > 10 &&
                                        ((e.data.payload.payload = e.data.payload.payload.slice(0, 10)),
                                        e.data.payload.payload.push("...[truncated]"));
                                      for (var t = [], n = 0; n < e.data.payload.payload.length; n++)
                                        e.data.payload.payload[n] && e.data.payload.payload[n].length > 2e3
                                          ? t.push(e.data.payload.payload[n].slice(0, 2e3) + "...[truncated]")
                                          : t.push(e.data.payload.payload[n]);
                                      return (e.data.payload.payload = t), e;
                                    }
                                    return e;
                                  })(
                                    (function (e) {
                                      if (e && "object" === s(e)) {
                                        var t = JSON.stringify(e);
                                        if (t.length > 5e6) {
                                          var n,
                                            r = w(t.matchAll(/data:([\w\/\-\.]+);(\w+),([^)"]*)/gim));
                                          try {
                                            for (r.s(); !(n = r.n()).done; ) {
                                              var o = n.value;
                                              t =
                                                "image/" === o[1].toLocaleLowerCase().slice(0, 6)
                                                  ? t.replace(
                                                      o[0],
                                                      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNOCAwSDE2TDAgMTZWOEw4IDBaIiBmaWxsPSIjMkQyRDJEIi8+CjxwYXRoIGQ9Ik0xNiA4VjE2SDhMMTYgOFoiIGZpbGw9IiMyRDJEMkQiLz4KPC9zdmc+Cg=="
                                                    )
                                                  : t.replace(o[0], "");
                                            }
                                          } catch (e) {
                                            r.e(e);
                                          } finally {
                                            r.f();
                                          }
                                        }
                                        return JSON.parse(t);
                                      }
                                      return e;
                                    })(e)
                                  )),
                                    t._updateWindowAndSessionIds(e);
                                  var n = { $snapshot_data: e, $session_id: t.sessionId, $window_id: t.windowId };
                                  t.instance._captureMetrics.incr("rrweb-record"),
                                    t.instance._captureMetrics.incr("rrweb-record-".concat(e.type)),
                                    t.emit ? t._captureSnapshot(n) : t.snapshots.push(n);
                                },
                                plugins:
                                  window.rrwebConsoleRecord && this.isConsoleLogCaptureEnabled()
                                    ? [window.rrwebConsoleRecord.getRecordConsolePlugin()]
                                    : []
                              },
                              n
                            )
                          )),
                      this.instance._addCaptureHook(function (e) {
                        var n;
                        "$pageview" === e &&
                          (null === (n = t.rrwebRecord) || void 0 === n || n.addCustomEvent("$pageview", { href: window.location.href }));
                      });
                  }
                },
                {
                  key: "_captureSnapshot",
                  value: function (e) {
                    this.instance.capture("$snapshot", e, {
                      transport: "XHR",
                      method: "POST",
                      endpoint: this.endpoint,
                      _noTruncate: !0,
                      _batchKey: "sessionRecording",
                      _metrics: { rrweb_full_snapshot: e.$snapshot_data.type === gt }
                    });
                  }
                }
              ]),
              e
            );
          })(),
          _t = {
            entryType: 0,
            timeOrigin: 1,
            name: 2,
            startTime: 3,
            redirectStart: 4,
            redirectEnd: 5,
            workerStart: 6,
            fetchStart: 7,
            domainLookupStart: 8,
            domainLookupEnd: 9,
            connectStart: 10,
            secureConnectionStart: 11,
            connectEnd: 12,
            requestStart: 13,
            responseStart: 14,
            responseEnd: 15,
            decodedBodySize: 16,
            encodedBodySize: 17,
            initiatorType: 18,
            nextHopProtocol: 19,
            renderBlockingStatus: 20,
            responseStatus: 21,
            transferSize: 22,
            element: 23,
            renderTime: 24,
            loadTime: 25,
            size: 26,
            id: 27,
            url: 28,
            domComplete: 29,
            domContentLoadedEvent: 30,
            domInteractive: 31,
            loadEventEnd: 32,
            loadEventStart: 33,
            redirectCount: 34,
            navigationType: 35,
            unloadEventEnd: 36,
            unloadEventStart: 37,
            duration: 39,
            timestamp: 40
          },
          yt = ["first-input", "navigation", "paint", "resource"],
          bt = ["/s/", "/e/"],
          wt = (function () {
            function e(t) {
              a(this, e), (this.instance = t);
            }
            return (
              u(e, [
                {
                  key: "startObservingIfEnabled",
                  value: function () {
                    this.isEnabled() ? this.startObserving() : this.stopObserving();
                  }
                },
                {
                  key: "startObserving",
                  value: function () {
                    var e = this;
                    if (!this.observer)
                      try {
                        this.observer = new PerformanceObserver(function (t) {
                          t.getEntries().forEach(function (t) {
                            e._capturePerformanceEvent(t);
                          });
                        });
                        var t = PerformanceObserver.supportedEntryTypes.filter(function (e) {
                          return yt.includes(e);
                        });
                        t.forEach(function (t) {
                          var n;
                          null === (n = e.observer) || void 0 === n || n.observe({ type: t, buffered: !0 });
                        });
                      } catch (e) {
                        console.error("PostHog failed to start performance observer", e), this.stopObserving();
                      }
                  }
                },
                {
                  key: "stopObserving",
                  value: function () {
                    this.observer && (this.observer.disconnect(), (this.observer = void 0));
                  }
                },
                {
                  key: "isObserving",
                  value: function () {
                    return !!this.observer;
                  }
                },
                {
                  key: "isEnabled",
                  value: function () {
                    var e, t;
                    return (
                      null !==
                        (e = null !== (t = this.instance.get_config("capture_performance")) && void 0 !== t ? t : this.remoteEnabled) &&
                      void 0 !== e &&
                      e
                    );
                  }
                },
                {
                  key: "afterDecideResponse",
                  value: function (e) {
                    (this.remoteEnabled = e.capturePerformance || !1), this.isEnabled() && this.startObserving();
                  }
                },
                {
                  key: "_capturePerformanceEvent",
                  value: function (e) {
                    if (e.name.startsWith(this.instance.get_config("api_host"))) {
                      var t = e.name.replace(this.instance.get_config("api_host"), "");
                      if (
                        bt.find(function (e) {
                          return t.startsWith(e);
                        })
                      )
                        return;
                    }
                    var n = e.toJSON(),
                      r = {},
                      o = Math.floor(Date.now() - performance.now());
                    for (var i in ((r[_t.timeOrigin] = o), (r[_t.timestamp] = Math.floor(o + e.startTime)), _t))
                      void 0 !== n[i] && (r[_t[i]] = n[i]);
                    if ((this.capturePerformanceEvent(r), St(e))) {
                      var s,
                        a = w(e.serverTiming || []);
                      try {
                        for (a.s(); !(s = a.n()).done; ) {
                          var c,
                            u = s.value;
                          this.capturePerformanceEvent(
                            (l((c = {}), _t.timeOrigin, o),
                            l(c, _t.timestamp, Math.floor(o + e.startTime)),
                            l(c, _t.name, u.name),
                            l(c, _t.duration, u.duration),
                            l(c, _t.entryType, "serverTiming"),
                            c)
                          );
                        }
                      } catch (e) {
                        a.e(e);
                      } finally {
                        a.f();
                      }
                    }
                  }
                },
                {
                  key: "capturePerformanceEvent",
                  value: function (e) {
                    this.instance.capture("$performance_event", e, {
                      transport: "XHR",
                      method: "POST",
                      endpoint: "/e/",
                      _noTruncate: !0,
                      _batchKey: "performanceEvent"
                    });
                  }
                }
              ]),
              e
            );
          })(),
          St = function (e) {
            return "navigation" === e.entryType || "resource" === e.entryType;
          },
          kt = (function () {
            function e(t) {
              a(this, e), (this.instance = t), (this.instance.decideEndpointWasHit = this.instance._hasBootstrappedFeatureFlags());
            }
            return (
              u(e, [
                {
                  key: "call",
                  value: function () {
                    var e = this,
                      t = se(
                        JSON.stringify({
                          token: this.instance.get_config("token"),
                          distinct_id: this.instance.get_distinct_id(),
                          groups: this.instance.getGroups()
                        })
                      );
                    this.instance._send_request(
                      "".concat(this.instance.get_config("api_host"), "/decide/?v=3"),
                      { data: t, verbose: !0 },
                      { method: "POST" },
                      function (t) {
                        return e.parseDecideResponse(t);
                      }
                    );
                  }
                },
                {
                  key: "parseDecideResponse",
                  value: function (e) {
                    var t,
                      n,
                      r = this;
                    if (0 !== (null == e ? void 0 : e.status)) {
                      if (((this.instance.decideEndpointWasHit = !0), !document || !document.body))
                        return (
                          console.log("document not ready yet, trying again in 500 milliseconds..."),
                          void setTimeout(function () {
                            r.parseDecideResponse(e);
                          }, 500)
                        );
                      if (
                        (this.instance.toolbar.afterDecideResponse(e),
                        null === (t = this.instance.sessionRecording) || void 0 === t || t.afterDecideResponse(e),
                        je.afterDecideResponse(e, this.instance),
                        null === (n = this.instance.webPerformance) || void 0 === n || n.afterDecideResponse(e),
                        this.instance.featureFlags.receivedFeatureFlags(e),
                        (this.instance.compression = {}),
                        e.supportedCompression && !this.instance.get_config("disable_compression"))
                      ) {
                        var o,
                          i = {},
                          s = w(e.supportedCompression);
                        try {
                          for (s.s(); !(o = s.n()).done; ) i[o.value] = !0;
                        } catch (e) {
                          s.e(e);
                        } finally {
                          s.f();
                        }
                        this.instance.compression = i;
                      }
                      if (e.siteApps)
                        if (this.instance.get_config("opt_in_site_apps")) {
                          var a,
                            c = this.instance.get_config("api_host"),
                            u = w(e.siteApps);
                          try {
                            var l = function () {
                              var e = a.value,
                                t = e.id,
                                n = e.url,
                                o = document.createElement("script");
                              (o.src = [c, "/" === c[c.length - 1] && "/" === n[0] ? n.substring(1) : n].join("")),
                                (o.onerror = function (e) {
                                  console.error("Error while initializing PostHog app with config id ".concat(t), e);
                                }),
                                (window["__$$ph_site_app_".concat(t)] = r.instance),
                                document.body.appendChild(o);
                            };
                            for (u.s(); !(a = u.n()).done; ) l();
                          } catch (e) {
                            u.e(e);
                          } finally {
                            u.f();
                          }
                        } else
                          e.siteApps.length > 0 &&
                            console.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
                    } else console.error("Failed to fetch feature flags from PostHog.");
                  }
                }
              ]),
              e
            );
          })(),
          Ot = ["https://app.posthog.com", "https://eu.posthog.com"],
          Et = ["source"],
          Tt = (function () {
            function e(t) {
              a(this, e), (this.instance = t);
            }
            return (
              u(e, [
                {
                  key: "afterDecideResponse",
                  value: function (e) {
                    var t = e.toolbarParams || e.editorParams || (e.toolbarVersion ? { toolbarVersion: e.toolbarVersion } : {});
                    e.isAuthenticated &&
                      t.toolbarVersion &&
                      0 === t.toolbarVersion.indexOf("toolbar") &&
                      this.loadToolbar(i(i({}, t), {}, { apiURL: this.instance.get_config("api_host") }));
                  }
                },
                {
                  key: "maybeLoadToolbar",
                  value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location,
                      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window.history;
                    try {
                      if (!t) {
                        try {
                          window.localStorage.setItem("test", "test"), window.localStorage.removeItem("test");
                        } catch (e) {
                          return !1;
                        }
                        t = window.localStorage;
                      }
                      var r,
                        o = fe(e.hash, "__posthog") || fe(e.hash, "state"),
                        i = o ? JSON.parse(decodeURIComponent(o)) : null;
                      return (
                        i && "ph_authorize" === i.action
                          ? (((r = i).source = "url"),
                            r &&
                              Object.keys(r).length > 0 &&
                              (i.desiredHash
                                ? (e.hash = i.desiredHash)
                                : n
                                ? n.replaceState("", document.title, e.pathname + e.search)
                                : (e.hash = "")))
                          : (((r = JSON.parse(t.getItem("_postHogToolbarParams") || "{}")).source = "localstorage"), delete r.userIntent),
                        r.apiURL || (r.apiURL = this.instance.get_config("api_host")),
                        !(!r.token || this.instance.get_config("token") !== r.token || (this.loadToolbar(r), 0))
                      );
                    } catch (e) {
                      return !1;
                    }
                  }
                },
                {
                  key: "loadToolbar",
                  value: function (e) {
                    var t = this;
                    if (window._postHogToolbarLoaded) return !1;
                    window._postHogToolbarLoaded = !0;
                    var n = (null == e ? void 0 : e.apiURL) || this.instance.get_config("api_host"),
                      r = 3e4 * Math.floor(Date.now() / 3e4),
                      o = ""
                        .concat(n)
                        .concat(n.endsWith("/") ? "" : "/", "static/toolbar.js?_ts=")
                        .concat(r),
                      s =
                        !Ot.includes(this.instance.get_config("api_host")) && this.instance.get_config("advanced_disable_toolbar_metrics"),
                      a = i(i({ apiURL: n, jsURL: n, token: this.instance.get_config("token") }, e), s ? { instrument: !1 } : {});
                    a.source;
                    var c = (function (e, t) {
                      if (null == e) return {};
                      var n,
                        r,
                        o = (function (e, t) {
                          if (null == e) return {};
                          var n,
                            r,
                            o = {},
                            i = Object.keys(e);
                          for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                          return o;
                        })(e, t);
                      if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < i.length; r++)
                          (n = i[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
                      }
                      return o;
                    })(a, Et);
                    return (
                      window.localStorage.setItem("_postHogToolbarParams", JSON.stringify(c)),
                      Ee(o, function () {
                        (window.ph_load_toolbar || window.ph_load_editor)(a, t.instance);
                      }),
                      pe(window, "turbolinks:load", function () {
                        (window._postHogToolbarLoaded = !1), t.loadToolbar(a);
                      }),
                      !0
                    );
                  }
                },
                {
                  key: "_loadEditor",
                  value: function (e) {
                    return this.loadToolbar(e);
                  }
                },
                {
                  key: "maybeLoadEditor",
                  value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location,
                      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window.history;
                    return this.maybeLoadToolbar(e, t, n);
                  }
                }
              ]),
              e
            );
          })(),
          Ct = (function () {
            function e() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e3;
              a(this, e),
                (this.isPolling = !0),
                (this._event_queue = []),
                (this._empty_queue_count = 0),
                (this._poller = void 0),
                (this._pollInterval = t);
            }
            return (
              u(e, [
                {
                  key: "setPollInterval",
                  value: function (e) {
                    (this._pollInterval = e), this.isPolling && this.poll();
                  }
                },
                { key: "poll", value: function () {} },
                { key: "unload", value: function () {} },
                {
                  key: "getTime",
                  value: function () {
                    return new Date().getTime();
                  }
                }
              ]),
              e
            );
          })(),
          xt = (function (e) {
            d(n, Ct);
            var t = g(n);
            function n(e, r) {
              var o,
                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3e3;
              return a(this, n), ((o = t.call(this, i)).handlePollRequest = r), (o.captureMetrics = e), o;
            }
            return (
              u(n, [
                {
                  key: "enqueue",
                  value: function (e, t, n) {
                    this.captureMetrics.incr("batch-enqueue"),
                      this._event_queue.push({ url: e, data: t, options: n }),
                      this.isPolling || ((this.isPolling = !0), this.poll());
                  }
                },
                {
                  key: "poll",
                  value: function () {
                    var e = this;
                    clearTimeout(this._poller),
                      (this._poller = setTimeout(function () {
                        if (e._event_queue.length > 0) {
                          var t = e.formatQueue(),
                            n = function (n) {
                              var r = t[n],
                                o = r.url,
                                i = r.data,
                                s = r.options;
                              z(i, function (t, n) {
                                (i[n].offset = Math.abs(i[n].timestamp - e.getTime())), delete i[n].timestamp;
                              }),
                                e.handlePollRequest(o, i, s),
                                e.captureMetrics.incr("batch-requests"),
                                e.captureMetrics.incr("batch-requests-".concat(o.slice(o.length - 2))),
                                e.captureMetrics.incr("batch-handle", i.length),
                                e.captureMetrics.incr("batch-handle-".concat(o.slice(o.length - 2)), i.length);
                            };
                          for (var r in t) n(r);
                          (e._event_queue.length = 0), (e._empty_queue_count = 0);
                        } else e._empty_queue_count++;
                        e._empty_queue_count > 4 && ((e.isPolling = !1), (e._empty_queue_count = 0)), e.isPolling && e.poll();
                      }, this._pollInterval));
                  }
                },
                {
                  key: "updateUnloadMetrics",
                  value: function () {
                    var e = this.formatQueue();
                    for (var t in e) {
                      var n = e[t],
                        r = n.url,
                        o = n.data;
                      this.captureMetrics.incr("batch-unload-requests"),
                        this.captureMetrics.incr("batch-unload-requests-".concat(r.slice(r.length - 2))),
                        this.captureMetrics.incr("batch-unload", o.length),
                        this.captureMetrics.incr("batch-unload-".concat(r.slice(r.length - 2)), o.length);
                    }
                  }
                },
                {
                  key: "unload",
                  value: function () {
                    var e = this;
                    clearTimeout(this._poller);
                    var t = this._event_queue.length > 0 ? this.formatQueue() : {};
                    this._event_queue.length = 0;
                    var n = Object.values(t);
                    []
                      .concat(
                        _(
                          n.filter(function (e) {
                            return 0 === e.url.indexOf("/e");
                          })
                        ),
                        _(
                          n.filter(function (e) {
                            return 0 !== e.url.indexOf("/e");
                          })
                        )
                      )
                      .map(function (t) {
                        var n = t.url,
                          r = t.data,
                          o = t.options;
                        e.handlePollRequest(n, r, i(i({}, o), {}, { transport: "sendBeacon" }));
                      });
                  }
                },
                {
                  key: "formatQueue",
                  value: function () {
                    var e = {};
                    return (
                      z(this._event_queue, function (t) {
                        var n = t.url,
                          r = t.data,
                          o = t.options,
                          i = (o ? o._batchKey : null) || n;
                        void 0 === e[i] && (e[i] = { data: [], url: n, options: o }),
                          o &&
                            e[i].options &&
                            e[i].options._metrics &&
                            !e[i].options._metrics.rrweb_full_snapshot &&
                            (e[i].options._metrics.rrweb_full_snapshot = o._metrics.rrweb_full_snapshot),
                          e[i].data.push(r);
                      }),
                      e
                    );
                  }
                }
              ]),
              n
            );
          })(),
          It = (function () {
            function e(t) {
              a(this, e), (this.enabled = t), (this.metrics = {});
            }
            return (
              u(e, [
                {
                  key: "incr",
                  value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                    this.enabled && ((e = "phjs-".concat(e)), (this.metrics[e] = (this.metrics[e] || 0) + t));
                  }
                },
                {
                  key: "decr",
                  value: function (e) {
                    this.enabled && ((e = "phjs-".concat(e)), (this.metrics[e] = (this.metrics[e] || 0) - 1));
                  }
                }
              ]),
              e
            );
          })(),
          jt = Uint8Array,
          At = Uint16Array,
          Pt = Uint32Array,
          Rt = new jt([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
          Mt = new jt([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
          Lt = new jt([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
          Nt = function (e, t) {
            for (var n = new At(31), r = 0; r < 31; ++r) n[r] = t += 1 << e[r - 1];
            var o = new Pt(n[30]);
            for (r = 1; r < 30; ++r) for (var i = n[r]; i < n[r + 1]; ++i) o[i] = ((i - n[r]) << 5) | r;
            return [n, o];
          },
          $t = Nt(Rt, 2),
          Dt = $t[0],
          Ft = $t[1];
        (Dt[28] = 258), (Ft[258] = 28);
        for (var Ut = Nt(Mt, 0)[1], Bt = new At(32768), Ht = 0; Ht < 32768; ++Ht) {
          var Vt = ((43690 & Ht) >>> 1) | ((21845 & Ht) << 1);
          (Vt = ((61680 & (Vt = ((52428 & Vt) >>> 2) | ((13107 & Vt) << 2))) >>> 4) | ((3855 & Vt) << 4)),
            (Bt[Ht] = (((65280 & Vt) >>> 8) | ((255 & Vt) << 8)) >>> 1);
        }
        var qt = function (e, t, n) {
            for (var r = e.length, o = 0, i = new At(t); o < r; ++o) ++i[e[o] - 1];
            var s,
              a = new At(t);
            for (o = 0; o < t; ++o) a[o] = (a[o - 1] + i[o - 1]) << 1;
            if (n) {
              s = new At(1 << t);
              var c = 15 - t;
              for (o = 0; o < r; ++o)
                if (e[o])
                  for (var u = (o << 4) | e[o], l = t - e[o], d = a[e[o] - 1]++ << l, f = d | ((1 << l) - 1); d <= f; ++d)
                    s[Bt[d] >>> c] = u;
            } else for (s = new At(r), o = 0; o < r; ++o) s[o] = Bt[a[e[o] - 1]++] >>> (15 - e[o]);
            return s;
          },
          zt = new jt(288);
        for (Ht = 0; Ht < 144; ++Ht) zt[Ht] = 8;
        for (Ht = 144; Ht < 256; ++Ht) zt[Ht] = 9;
        for (Ht = 256; Ht < 280; ++Ht) zt[Ht] = 7;
        for (Ht = 280; Ht < 288; ++Ht) zt[Ht] = 8;
        var Wt = new jt(32);
        for (Ht = 0; Ht < 32; ++Ht) Wt[Ht] = 5;
        var Zt,
          Gt = qt(zt, 9, 0),
          Jt = qt(Wt, 5, 0),
          Qt = function (e) {
            return ((e / 8) >> 0) + (7 & e && 1);
          },
          Yt = function (e, t, n) {
            (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length);
            var r = new (e instanceof At ? At : e instanceof Pt ? Pt : jt)(n - t);
            return r.set(e.subarray(t, n)), r;
          },
          Xt = function (e, t, n) {
            n <<= 7 & t;
            var r = (t / 8) >> 0;
            (e[r] |= n), (e[r + 1] |= n >>> 8);
          },
          Kt = function (e, t, n) {
            n <<= 7 & t;
            var r = (t / 8) >> 0;
            (e[r] |= n), (e[r + 1] |= n >>> 8), (e[r + 2] |= n >>> 16);
          },
          en = function (e, t) {
            for (var n = [], r = 0; r < e.length; ++r) e[r] && n.push({ s: r, f: e[r] });
            var o = n.length,
              i = n.slice();
            if (!o) return [new jt(0), 0];
            if (1 == o) {
              var s = new jt(n[0].s + 1);
              return (s[n[0].s] = 1), [s, 1];
            }
            n.sort(function (e, t) {
              return e.f - t.f;
            }),
              n.push({ s: -1, f: 25001 });
            var a = n[0],
              c = n[1],
              u = 0,
              l = 1,
              d = 2;
            for (n[0] = { s: -1, f: a.f + c.f, l: a, r: c }; l != o - 1; )
              (a = n[n[u].f < n[d].f ? u++ : d++]),
                (c = n[u != l && n[u].f < n[d].f ? u++ : d++]),
                (n[l++] = { s: -1, f: a.f + c.f, l: a, r: c });
            var f = i[0].s;
            for (r = 1; r < o; ++r) i[r].s > f && (f = i[r].s);
            var p = new At(f + 1),
              h = tn(n[l - 1], p, 0);
            if (h > t) {
              r = 0;
              var g = 0,
                m = h - t,
                v = 1 << m;
              for (
                i.sort(function (e, t) {
                  return p[t.s] - p[e.s] || e.f - t.f;
                });
                r < o;
                ++r
              ) {
                var _ = i[r].s;
                if (!(p[_] > t)) break;
                (g += v - (1 << (h - p[_]))), (p[_] = t);
              }
              for (g >>>= m; g > 0; ) {
                var y = i[r].s;
                p[y] < t ? (g -= 1 << (t - p[y]++ - 1)) : ++r;
              }
              for (; r >= 0 && g; --r) {
                var b = i[r].s;
                p[b] == t && (--p[b], ++g);
              }
              h = t;
            }
            return [new jt(p), h];
          },
          tn = function e(t, n, r) {
            return -1 == t.s ? Math.max(e(t.l, n, r + 1), e(t.r, n, r + 1)) : (n[t.s] = r);
          },
          nn = function (e) {
            for (var t = e.length; t && !e[--t]; );
            for (
              var n = new At(++t),
                r = 0,
                o = e[0],
                i = 1,
                s = function (e) {
                  n[r++] = e;
                },
                a = 1;
              a <= t;
              ++a
            )
              if (e[a] == o && a != t) ++i;
              else {
                if (!o && i > 2) {
                  for (; i > 138; i -= 138) s(32754);
                  i > 2 && (s(i > 10 ? ((i - 11) << 5) | 28690 : ((i - 3) << 5) | 12305), (i = 0));
                } else if (i > 3) {
                  for (s(o), --i; i > 6; i -= 6) s(8304);
                  i > 2 && (s(((i - 3) << 5) | 8208), (i = 0));
                }
                for (; i--; ) s(o);
                (i = 1), (o = e[a]);
              }
            return [n.subarray(0, r), t];
          },
          rn = function (e, t) {
            for (var n = 0, r = 0; r < t.length; ++r) n += e[r] * t[r];
            return n;
          },
          on = function (e, t, n) {
            var r = n.length,
              o = Qt(t + 2);
            (e[o] = 255 & r), (e[o + 1] = r >>> 8), (e[o + 2] = 255 ^ e[o]), (e[o + 3] = 255 ^ e[o + 1]);
            for (var i = 0; i < r; ++i) e[o + i + 4] = n[i];
            return 8 * (o + 4 + r);
          },
          sn = function (e, t, n, r, o, i, s, a, c, u, l) {
            Xt(t, l++, n), ++o[256];
            for (
              var d = en(o, 15),
                f = d[0],
                p = d[1],
                h = en(i, 15),
                g = h[0],
                m = h[1],
                v = nn(f),
                _ = v[0],
                y = v[1],
                b = nn(g),
                w = b[0],
                S = b[1],
                k = new At(19),
                O = 0;
              O < _.length;
              ++O
            )
              k[31 & _[O]]++;
            for (O = 0; O < w.length; ++O) k[31 & w[O]]++;
            for (var E = en(k, 7), T = E[0], C = E[1], x = 19; x > 4 && !T[Lt[x - 1]]; --x);
            var I,
              j,
              A,
              P,
              R = (u + 5) << 3,
              M = rn(o, zt) + rn(i, Wt) + s,
              L = rn(o, f) + rn(i, g) + s + 14 + 3 * x + rn(k, T) + (2 * k[16] + 3 * k[17] + 7 * k[18]);
            if (R <= M && R <= L) return on(t, l, e.subarray(c, c + u));
            if ((Xt(t, l, 1 + (L < M)), (l += 2), L < M)) {
              (I = qt(f, p, 0)), (j = f), (A = qt(g, m, 0)), (P = g);
              var N = qt(T, C, 0);
              for (Xt(t, l, y - 257), Xt(t, l + 5, S - 1), Xt(t, l + 10, x - 4), l += 14, O = 0; O < x; ++O) Xt(t, l + 3 * O, T[Lt[O]]);
              l += 3 * x;
              for (var $ = [_, w], D = 0; D < 2; ++D) {
                var F = $[D];
                for (O = 0; O < F.length; ++O) {
                  var U = 31 & F[O];
                  Xt(t, l, N[U]), (l += T[U]), U > 15 && (Xt(t, l, (F[O] >>> 5) & 127), (l += F[O] >>> 12));
                }
              }
            } else (I = Gt), (j = zt), (A = Jt), (P = Wt);
            for (O = 0; O < a; ++O)
              if (r[O] > 255) {
                (U = (r[O] >>> 18) & 31), Kt(t, l, I[U + 257]), (l += j[U + 257]), U > 7 && (Xt(t, l, (r[O] >>> 23) & 31), (l += Rt[U]));
                var B = 31 & r[O];
                Kt(t, l, A[B]), (l += P[B]), B > 3 && (Kt(t, l, (r[O] >>> 5) & 8191), (l += Mt[B]));
              } else Kt(t, l, I[r[O]]), (l += j[r[O]]);
            return Kt(t, l, I[256]), l + j[256];
          },
          an = new Pt([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
          cn =
            (new jt(0),
            (function () {
              for (var e = new Pt(256), t = 0; t < 256; ++t) {
                for (var n = t, r = 9; --r; ) n = (1 & n && 3988292384) ^ (n >>> 1);
                e[t] = n;
              }
              return e;
            })()),
          un = function (e, t, n) {
            for (; n; ++t) (e[t] = n), (n >>>= 8);
          };
        function ln(e, t) {
          void 0 === t && (t = {});
          var n = (function () {
              var e = 4294967295;
              return {
                p: function (t) {
                  for (var n = e, r = 0; r < t.length; ++r) n = cn[(255 & n) ^ t[r]] ^ (n >>> 8);
                  e = n;
                },
                d: function () {
                  return 4294967295 ^ e;
                }
              };
            })(),
            r = e.length;
          n.p(e);
          var o = (function (e, t, n, r, o) {
              return (function (e, t, n, r, o, i) {
                var s = e.length,
                  a = new jt(r + s + 5 * (1 + Math.floor(s / 7e3)) + 8),
                  c = a.subarray(r, a.length - 8),
                  u = 0;
                if (!t || s < 8)
                  for (var l = 0; l <= s; l += 65535) {
                    var d = l + 65535;
                    d < s ? (u = on(c, u, e.subarray(l, d))) : ((c[l] = i), (u = on(c, u, e.subarray(l, s))));
                  }
                else {
                  for (
                    var f = an[t - 1],
                      p = f >>> 13,
                      h = 8191 & f,
                      g = (1 << n) - 1,
                      m = new At(32768),
                      v = new At(g + 1),
                      _ = Math.ceil(n / 3),
                      y = 2 * _,
                      b = function (t) {
                        return (e[t] ^ (e[t + 1] << _) ^ (e[t + 2] << y)) & g;
                      },
                      w = new Pt(25e3),
                      S = new At(288),
                      k = new At(32),
                      O = 0,
                      E = 0,
                      T = ((l = 0), 0),
                      C = 0,
                      x = 0;
                    l < s;
                    ++l
                  ) {
                    var I = b(l),
                      j = 32767 & l,
                      A = v[I];
                    if (((m[j] = A), (v[I] = j), C <= l)) {
                      var P = s - l;
                      if ((O > 7e3 || T > 24576) && P > 423) {
                        (u = sn(e, c, 0, w, S, k, E, T, x, l - x, u)), (T = O = E = 0), (x = l);
                        for (var R = 0; R < 286; ++R) S[R] = 0;
                        for (R = 0; R < 30; ++R) k[R] = 0;
                      }
                      var M = 2,
                        L = 0,
                        N = h,
                        $ = (j - A) & 32767;
                      if (P > 2 && I == b(l - $))
                        for (var D = Math.min(p, P) - 1, F = Math.min(32767, l), U = Math.min(258, P); $ <= F && --N && j != A; ) {
                          if (e[l + M] == e[l + M - $]) {
                            for (var B = 0; B < U && e[l + B] == e[l + B - $]; ++B);
                            if (B > M) {
                              if (((M = B), (L = $), B > D)) break;
                              var H = Math.min($, B - 2),
                                V = 0;
                              for (R = 0; R < H; ++R) {
                                var q = (l - $ + R + 32768) & 32767,
                                  z = (q - m[q] + 32768) & 32767;
                                z > V && ((V = z), (A = q));
                              }
                            }
                          }
                          $ += ((j = A) - (A = m[j]) + 32768) & 32767;
                        }
                      if (L) {
                        w[T++] = 268435456 | (Ft[M] << 18) | Ut[L];
                        var W = 31 & Ft[M],
                          Z = 31 & Ut[L];
                        (E += Rt[W] + Mt[Z]), ++S[257 + W], ++k[Z], (C = l + M), ++O;
                      } else (w[T++] = e[l]), ++S[e[l]];
                    }
                  }
                  u = sn(e, c, i, w, S, k, E, T, x, l - x, u);
                }
                return Yt(a, 0, r + Qt(u) + 8);
              })(
                e,
                null == t.level ? 6 : t.level,
                null == t.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(e.length)))) : 12 + t.mem,
                n,
                0,
                !0
              );
            })(
              e,
              t,
              (function (e) {
                return 10 + ((e.filename && e.filename.length + 1) || 0);
              })(t)
            ),
            i = o.length;
          return (
            (function (e, t) {
              var n = t.filename;
              if (
                ((e[0] = 31),
                (e[1] = 139),
                (e[2] = 8),
                (e[8] = t.level < 2 ? 4 : 9 == t.level ? 2 : 0),
                (e[9] = 3),
                0 != t.mtime && un(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)),
                n)
              ) {
                e[3] = 8;
                for (var r = 0; r <= n.length; ++r) e[r + 10] = n.charCodeAt(r);
              }
            })(o, t),
            un(o, i - 8, n.d()),
            un(o, i - 4, r),
            o
          );
        }
        function dn(e, t) {
          var n = e.length;
          if (!t && "undefined" != typeof TextEncoder) return new TextEncoder().encode(e);
          for (
            var r = new jt(e.length + (e.length >>> 1)),
              o = 0,
              i = function (e) {
                r[o++] = e;
              },
              s = 0;
            s < n;
            ++s
          ) {
            if (o + 5 > r.length) {
              var a = new jt(o + 8 + ((n - s) << 1));
              a.set(r), (r = a);
            }
            var c = e.charCodeAt(s);
            c < 128 || t
              ? i(c)
              : c < 2048
              ? (i(192 | (c >>> 6)), i(128 | (63 & c)))
              : c > 55295 && c < 57344
              ? (i(240 | ((c = (65536 + (1047552 & c)) | (1023 & e.charCodeAt(++s))) >>> 18)),
                i(128 | ((c >>> 12) & 63)),
                i(128 | ((c >>> 6) & 63)),
                i(128 | (63 & c)))
              : (i(224 | (c >>> 12)), i(128 | ((c >>> 6) & 63)), i(128 | (63 & c)));
          }
          return Yt(r, 0, o);
        }
        !(function (e) {
          (e.GZipJS = "gzip-js"), (e.LZ64 = "lz64"), (e.Base64 = "base64");
        })(Zt || (Zt = {}));
        var fn,
          pn,
          hn,
          gn = function e(t, n) {
            if (n.blob && t.buffer) return new Blob([t.buffer], { type: "text/plain" });
            if (n.sendBeacon || n.blob) {
              var r = e(t, { method: "POST" });
              return new Blob([r], { type: "application/x-www-form-urlencoded" });
            }
            return "POST" !== n.method
              ? null
              : ((o =
                  Array.isArray(t) || ((i = t), "[object Uint8Array]" === Object.prototype.toString.call(i))
                    ? "data=" + encodeURIComponent(t)
                    : "data=" + encodeURIComponent(t.data)),
                "compression" in t && t.compression && (o += "&compression=" + t.compression),
                o);
            var o, i;
          },
          mn = function (e) {
            var t = e.url,
              n = e.data,
              r = e.headers,
              o = e.options,
              i = e.captureMetrics,
              s = e.callback,
              a = e.retriesPerformedSoFar,
              c = e.retryQueue,
              u = e.onXHRError,
              l = e.timeout,
              d = void 0 === l ? 1e4 : l,
              f = new XMLHttpRequest();
            f.open(o.method || "GET", t, !0);
            var p = gn(n, o);
            i.incr("_send_request"),
              i.incr("_send_request_inflight"),
              z(r, function (e, t) {
                f.setRequestHeader(t, e);
              }),
              "POST" !== o.method || o.blob || f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
              (f.timeout = d),
              (f.withCredentials = !0),
              (f.onreadystatechange = function () {
                if (4 === f.readyState)
                  if (
                    (i.incr("xhr-response"), i.incr("xhr-response-".concat(f.status)), i.decr("_send_request_inflight"), 200 === f.status)
                  ) {
                    if (s) {
                      var e;
                      try {
                        e = JSON.parse(f.responseText);
                      } catch (e) {
                        return void H(e);
                      }
                      s(e);
                    }
                  } else
                    "function" == typeof u && u(f),
                      [401, 403, 404, 500].indexOf(f.status) < 0 &&
                        c.enqueue({ url: t, data: n, options: o, headers: r, retriesPerformedSoFar: (a || 0) + 1, callback: s }),
                      s && s({ status: 0 });
              }),
              f.send(p);
          },
          vn = (function (e) {
            d(n, Ct);
            var t = g(n);
            function n(e, r) {
              var o;
              return (
                a(this, n),
                ((o = t.call(this)).captureMetrics = e),
                (o.isPolling = !1),
                (o.queue = []),
                (o.areWeOnline = !0),
                (o.onXHRError = r),
                "undefined" != typeof window &&
                  "onLine" in window.navigator &&
                  ((o.areWeOnline = window.navigator.onLine),
                  window.addEventListener("online", function () {
                    o._handleWeAreNowOnline();
                  }),
                  window.addEventListener("offline", function () {
                    o.areWeOnline = !1;
                  })),
                o
              );
            }
            return (
              u(n, [
                {
                  key: "enqueue",
                  value: function (e) {
                    var t = e.retriesPerformedSoFar || 0;
                    if (!(t >= 10)) {
                      var n = 3e3 * Math.pow(2, t),
                        r = new Date(Date.now() + n);
                      console.warn("Enqueued failed request for retry in ".concat(n)),
                        this.queue.push({ retryAt: r, requestData: e }),
                        this.isPolling || ((this.isPolling = !0), this.poll());
                    }
                  }
                },
                {
                  key: "poll",
                  value: function () {
                    var e = this;
                    this._poller && clearTimeout(this._poller),
                      (this._poller = setTimeout(function () {
                        e.areWeOnline && e.queue.length > 0 && e.flush(), e.poll();
                      }, this._pollInterval));
                  }
                },
                {
                  key: "flush",
                  value: function () {
                    var e = new Date(Date.now()),
                      t = this.queue.filter(function (t) {
                        return t.retryAt < e;
                      });
                    if (t.length > 0) {
                      this.queue = this.queue.filter(function (t) {
                        return t.retryAt >= e;
                      });
                      var n,
                        r = w(t);
                      try {
                        for (r.s(); !(n = r.n()).done; ) {
                          var o = n.value.requestData;
                          this._executeXhrRequest(o);
                        }
                      } catch (e) {
                        r.e(e);
                      } finally {
                        r.f();
                      }
                    }
                  }
                },
                {
                  key: "unload",
                  value: function () {
                    this._poller && (clearTimeout(this._poller), (this._poller = void 0));
                    var e,
                      t = w(this.queue);
                    try {
                      for (t.s(); !(e = t.n()).done; ) {
                        var n = e.value.requestData,
                          r = n.url,
                          o = n.data,
                          s = n.options;
                        try {
                          window.navigator.sendBeacon(r, gn(o, i(i({}, s), {}, { sendBeacon: !0 })));
                        } catch (e) {
                          x.DEBUG && console.error(e);
                        }
                      }
                    } catch (e) {
                      t.e(e);
                    } finally {
                      t.f();
                    }
                    this.queue = [];
                  }
                },
                {
                  key: "_executeXhrRequest",
                  value: function (e) {
                    var t = e.url,
                      n = e.data,
                      r = e.options,
                      o = e.headers,
                      i = e.callback,
                      s = e.retriesPerformedSoFar;
                    mn({
                      url: t,
                      data: n || {},
                      options: r || {},
                      headers: o || {},
                      retriesPerformedSoFar: s || 0,
                      callback: i,
                      captureMetrics: this.captureMetrics,
                      retryQueue: this,
                      onXHRError: this.onXHRError
                    });
                  }
                },
                {
                  key: "_handleWeAreNowOnline",
                  value: function () {
                    (this.areWeOnline = !0), this.flush();
                  }
                }
              ]),
              n
            );
          })(),
          _n = 18e5,
          yn = 864e5,
          bn = (function () {
            function e(t, n) {
              a(this, e),
                (this.persistence = n),
                (this._windowId = void 0),
                (this._sessionId = void 0),
                (this._sessionStartTimestamp = null),
                (this._sessionActivityTimestamp = null);
              var r = t.persistence_name || t.token;
              if (
                ((this.window_id_storage_key = "ph_" + r + "_window_id"),
                (this.primary_window_exists_storage_key = "ph_" + r + "_primary_window_exists"),
                !this.persistence.disabled && Fe.is_supported())
              ) {
                var o = Fe.parse(this.window_id_storage_key),
                  i = Fe.parse(this.primary_window_exists_storage_key);
                o && !i ? (this._windowId = o) : Fe.remove(this.window_id_storage_key), Fe.set(this.primary_window_exists_storage_key, !0);
              }
              this._listenToReloadWindow();
            }
            return (
              u(e, [
                {
                  key: "_setWindowId",
                  value: function (e) {
                    e !== this._windowId &&
                      ((this._windowId = e), !this.persistence.disabled && Fe.is_supported() && Fe.set(this.window_id_storage_key, e));
                  }
                },
                {
                  key: "_getWindowId",
                  value: function () {
                    return this._windowId
                      ? this._windowId
                      : !this.persistence.disabled && Fe.is_supported()
                      ? Fe.parse(this.window_id_storage_key)
                      : null;
                  }
                },
                {
                  key: "_setSessionId",
                  value: function (e, t, n) {
                    (e === this._sessionId && t === this._sessionActivityTimestamp && n === this._sessionStartTimestamp) ||
                      ((this._sessionStartTimestamp = n),
                      (this._sessionActivityTimestamp = t),
                      (this._sessionId = e),
                      this.persistence.register(l({}, lt, [t, e, n])));
                  }
                },
                {
                  key: "_getSessionId",
                  value: function () {
                    if (this._sessionId && this._sessionActivityTimestamp && this._sessionStartTimestamp)
                      return [this._sessionActivityTimestamp, this._sessionId, this._sessionStartTimestamp];
                    var e = this.persistence.props[lt];
                    return Array.isArray(e) && 2 === e.length && e.push(e[0]), e || [0, null, 0];
                  }
                },
                {
                  key: "resetSessionId",
                  value: function () {
                    this._setSessionId(null, null, null);
                  }
                },
                {
                  key: "_listenToReloadWindow",
                  value: function () {
                    var e = this;
                    window.addEventListener("beforeunload", function () {
                      !e.persistence.disabled && Fe.is_supported() && Fe.remove(e.primary_window_exists_storage_key);
                    });
                  }
                },
                {
                  key: "checkAndGetSessionAndWindowId",
                  value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                      t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || new Date().getTime(),
                      n = v(this._getSessionId(), 3),
                      r = n[0],
                      o = n[1],
                      i = n[2],
                      s = this._getWindowId(),
                      a = i && i > 0 && Math.abs(t - i) > yn;
                    !o || (!e && Math.abs(t - r) > _n) || a ? ((o = ue()), (s = ue()), (i = t)) : s || (s = ue());
                    var c = 0 === r || !e || a ? t : r,
                      u = 0 === i ? new Date().getTime() : i;
                    return this._setWindowId(s), this._setSessionId(o, c, u), { sessionId: o, windowId: s };
                  }
                }
              ]),
              e
            );
          })(),
          wn = u(function e(t, n, r, o) {
            a(this, e),
              (this.name = "posthog-js"),
              (this.setupOnce = function (e) {
                e(function (e) {
                  var i, s, a;
                  if ("error" !== e.level || !t.__loaded) return e;
                  e.tags || (e.tags = {});
                  var c = t.config.ui_host || t.config.api_host;
                  (e.tags["PostHog Person URL"] = c + "/person/" + t.get_distinct_id()),
                    t.sessionRecordingStarted() &&
                      (e.tags["PostHog Recording URL"] = c + "/recordings/" + t.sessionManager.checkAndGetSessionAndWindowId(!0).sessionId);
                  var u = (null === (i = e.exception) || void 0 === i ? void 0 : i.values) || [],
                    l = {
                      $sentry_event_id: e.event_id,
                      $sentry_exception: e.exception,
                      $sentry_exception_message: null === (s = u[0]) || void 0 === s ? void 0 : s.value,
                      $sentry_exception_type: null === (a = u[0]) || void 0 === a ? void 0 : a.type,
                      $sentry_tags: e.tags
                    };
                  return (
                    n &&
                      r &&
                      (l.$sentry_url = (o || "https://sentry.io/organizations/") + n + "/issues/?project=" + r + "&query=" + e.event_id),
                    t.capture("$exception", l),
                    e
                  );
                });
              });
          }),
          Sn = (function () {
            function e() {
              a(this, e), l(this, "_seenFirstPageView", !1);
            }
            return (
              u(e, [
                {
                  key: "onPageview",
                  value: function () {
                    this._seenFirstPageView && (this._pageViewId = ue()), (this._seenFirstPageView = !0);
                  }
                },
                {
                  key: "getPageViewId",
                  value: function () {
                    return this._pageViewId || (this._pageViewId = ue()), this._pageViewId;
                  }
                }
              ]),
              e
            );
          })();
        !(function (e) {
          (e[(e.INIT_MODULE = 0)] = "INIT_MODULE"), (e[(e.INIT_SNIPPET = 1)] = "INIT_SNIPPET");
        })(fn || (fn = {}));
        var kn = function () {},
          On = {},
          En = "posthog",
          Tn = R.XMLHttpRequest && "withCredentials" in new XMLHttpRequest(),
          Cn = !Tn && -1 === N.indexOf("MSIE") && -1 === N.indexOf("Mozilla"),
          xn = function () {
            var e, t, n;
            return {
              api_host: "https://app.posthog.com",
              api_method: "POST",
              api_transport: "XHR",
              ui_host: null,
              token: "",
              autocapture: !0,
              rageclick: !0,
              cross_subdomain_cookie:
                -1 ===
                (null == L || null === (e = L.location) || void 0 === e || null === (t = e.hostname) || void 0 === t
                  ? void 0
                  : t.indexOf("herokuapp.com")),
              persistence: "cookie",
              persistence_name: "",
              cookie_name: "",
              loaded: kn,
              store_google: !0,
              save_referrer: !0,
              test: !1,
              verbose: !1,
              img: !1,
              capture_pageview: !0,
              capture_pageleave: !0,
              debug: !1,
              cookie_expiration: 365,
              upgrade: !1,
              disable_session_recording: !1,
              disable_persistence: !1,
              disable_cookie: !1,
              enable_recording_console_log: void 0,
              secure_cookie: "https:" === (null == R || null === (n = R.location) || void 0 === n ? void 0 : n.protocol),
              ip: !0,
              opt_out_capturing_by_default: !1,
              opt_out_persistence_by_default: !1,
              opt_out_capturing_persistence_type: "localStorage",
              opt_out_capturing_cookie_prefix: null,
              opt_in_site_apps: !1,
              property_blacklist: [],
              respect_dnt: !1,
              sanitize_properties: null,
              xhr_headers: {},
              inapp_protocol: "//",
              inapp_link_new_window: !1,
              request_batching: !0,
              properties_string_max_length: 65535,
              session_recording: {
                blockClass: "ph-no-capture",
                blockSelector: null,
                ignoreClass: "ph-ignore-input",
                maskAllInputs: !0,
                maskInputOptions: {},
                maskInputFn: null,
                slimDOMOptions: {},
                collectFonts: !1,
                inlineStylesheet: !0
              },
              mask_all_element_attributes: !1,
              mask_all_text: !1,
              advanced_disable_decide: !1,
              advanced_disable_toolbar_metrics: !1,
              on_xhr_error: function (e) {
                var t = "Bad HTTP status: " + e.status + " " + e.statusText;
                console.error(t);
              },
              get_device_id: function (e) {
                return e;
              },
              _onCapture: kn,
              _capture_metrics: !1,
              capture_performance: void 0,
              name: "posthog",
              callback_fn: "posthog._jsc",
              bootstrap: {},
              disable_compression: !1
            };
          },
          In = function (e, t, n) {
            var r,
              o = n !== En && hn ? (n ? hn[n] : void 0) : hn;
            if (o && pn === fn.INIT_MODULE) r = o;
            else {
              if (o && !G(o)) return void console.error("You have already initialized " + n);
              r = new jn();
            }
            return (
              r._init(e, t, n),
              r.toolbar.maybeLoadToolbar(),
              (r.sessionRecording = new vt(r)),
              r.sessionRecording.startRecordingIfEnabled(),
              (r.webPerformance = new wt(r)),
              r.webPerformance.startObservingIfEnabled(),
              (r.__autocapture = r.get_config("autocapture")),
              r.get_config("autocapture") &&
                ((r.__autocapture = r.get_config("autocapture")),
                je.enabledForProject(r.get_config("token"), 100, 100)
                  ? je.isBrowserSupported()
                    ? je.init(r)
                    : ((r.__autocapture = !1), B("Disabling Automatic Event Collection because this browser is not supported"))
                  : ((r.__autocapture = !1), B("Not in active bucket: disabling Automatic Event Collection."))),
              (x.DEBUG = x.DEBUG || r.get_config("debug")),
              void 0 !== o && G(o) && (r._execute_array.call(r.people, o.people), r._execute_array(o)),
              r
            );
          },
          jn = (function () {
            function e() {
              var t = this;
              a(this, e),
                (this.config = xn()),
                (this.compression = {}),
                (this.decideEndpointWasHit = !1),
                (this.SentryIntegration = wn),
                (this.segmentIntegration = function () {
                  return (function (e) {
                    var t = function (t, n) {
                      t.event.userId || t.event.anonymousId === e.get_distinct_id() || e.reset(),
                        t.event.userId &&
                          t.event.userId !== e.get_distinct_id() &&
                          (e.register({ distinct_id: t.event.userId }), e.reloadFeatureFlags());
                      var r = e._calculate_event_properties(n, t.event.properties);
                      return (t.event.properties = Object.assign({}, r, t.event.properties)), t;
                    };
                    return {
                      name: "PostHog JS",
                      type: "enrichment",
                      version: "1.0.0",
                      isLoaded: function () {
                        return !0;
                      },
                      load: function () {
                        return Promise.resolve();
                      },
                      track: function (e) {
                        return t(e, e.event.event);
                      },
                      page: function (e) {
                        return t(e, "$pageview");
                      },
                      identify: function (e) {
                        return t(e, "$identify");
                      },
                      screen: function (e) {
                        return t(e, "$screen");
                      }
                    };
                  })(t);
                }),
                (this.__captureHooks = []),
                (this.__request_queue = []),
                (this.__loaded = !1),
                (this.__loaded_recorder_version = void 0),
                (this.__autocapture = void 0),
                (this._jsc = function () {}),
                (this.people = new Xe(this)),
                (this.featureFlags = new rt(this)),
                (this.feature_flags = this.featureFlags),
                (this.toolbar = new Tt(this)),
                (this.pageViewIdManager = new Sn()),
                (this._captureMetrics = void 0),
                (this._requestQueue = void 0),
                (this._retryQueue = void 0),
                (this.persistence = void 0),
                (this.sessionManager = void 0);
            }
            return (
              u(e, [
                {
                  key: "init",
                  value: function (e, t, n) {
                    if (X(n)) console.error("You must name your new library: init(token, config, name)");
                    else {
                      if (n !== En) {
                        var r = In(e, t, n);
                        return (hn[n] = r), r._loaded(), r;
                      }
                      console.error("You must initialize the main posthog object right after you include the PostHog js snippet");
                    }
                  }
                },
                {
                  key: "_init",
                  value: function (e) {
                    var t,
                      n,
                      r,
                      o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                      i = arguments.length > 2 ? arguments[2] : void 0;
                    if (
                      ((this.__loaded = !0),
                      (this.config = {}),
                      (this._triggered_notifs = []),
                      this.set_config(Z({}, xn(), o, { name: i, token: e, callback_fn: (i === En ? i : En + "." + i) + "._jsc" })),
                      (this._jsc = function () {}),
                      ((null != R && null !== (t = R.rrweb) && void 0 !== t && t.record) || (null != R && R.rrwebRecord)) &&
                        (this.__loaded_recorder_version = null == R || null === (r = R.rrweb) || void 0 === r ? void 0 : r.version),
                      (this._captureMetrics = new It(this.get_config("_capture_metrics"))),
                      (this._requestQueue = new xt(this._captureMetrics, this._handle_queued_event.bind(this))),
                      (this._retryQueue = new vn(this._captureMetrics, this.get_config("on_xhr_error"))),
                      (this.__captureHooks = []),
                      (this.__request_queue = []),
                      (this.persistence = new ht(this.config)),
                      (this.sessionManager = new bn(this.config, this.persistence)),
                      this._gdpr_init(),
                      o.segment &&
                        ((this.config.get_device_id = function () {
                          return o.segment.user().anonymousId();
                        }),
                        o.segment.user().id() &&
                          (this.register({ distinct_id: o.segment.user().id() }), this.persistence.set_user_state("identified")),
                        o.segment.register(this.segmentIntegration())),
                      void 0 !== (null === (n = o.bootstrap) || void 0 === n ? void 0 : n.distinctID))
                    ) {
                      var s,
                        a,
                        c = this.get_config("get_device_id")(ue()),
                        u = null !== (s = o.bootstrap) && void 0 !== s && s.isIdentifiedID ? c : o.bootstrap.distinctID;
                      this.persistence.set_user_state(
                        null !== (a = o.bootstrap) && void 0 !== a && a.isIdentifiedID ? "identified" : "anonymous"
                      ),
                        this.register({ distinct_id: o.bootstrap.distinctID, $device_id: u });
                    }
                    if (this._hasBootstrappedFeatureFlags()) {
                      var l,
                        d,
                        f = Object.keys((null === (l = o.bootstrap) || void 0 === l ? void 0 : l.featureFlags) || {})
                          .filter(function (e) {
                            var t, n;
                            return !(null === (t = o.bootstrap) || void 0 === t || null === (n = t.featureFlags) || void 0 === n || !n[e]);
                          })
                          .reduce(function (e, t) {
                            var n, r;
                            return (
                              (e[t] =
                                (null === (n = o.bootstrap) || void 0 === n || null === (r = n.featureFlags) || void 0 === r
                                  ? void 0
                                  : r[t]) || !1),
                              e
                            );
                          }, {}),
                        p = Object.keys((null === (d = o.bootstrap) || void 0 === d ? void 0 : d.featureFlagPayloads) || {})
                          .filter(function (e) {
                            return f[e];
                          })
                          .reduce(function (e, t) {
                            var n, r, i, s;
                            return (
                              null !== (n = o.bootstrap) &&
                                void 0 !== n &&
                                null !== (r = n.featureFlagPayloads) &&
                                void 0 !== r &&
                                r[t] &&
                                (e[t] =
                                  null === (i = o.bootstrap) || void 0 === i || null === (s = i.featureFlagPayloads) || void 0 === s
                                    ? void 0
                                    : s[t]),
                              e
                            );
                          }, {});
                      this.featureFlags.receivedFeatureFlags({ featureFlags: f, featureFlagPayloads: p });
                    }
                    if (!this.get_distinct_id()) {
                      var h = this.get_config("get_device_id")(ue());
                      this.register_once({ distinct_id: h, $device_id: h }, ""), this.persistence.set_user_state("anonymous");
                    }
                    R.addEventListener && R.addEventListener("onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this));
                  }
                },
                {
                  key: "_loaded",
                  value: function () {
                    this.featureFlags.setReloadingPaused(!0);
                    try {
                      this.get_config("loaded")(this);
                    } catch (e) {
                      console.error("`loaded` function failed", e);
                    }
                    this._start_queue_if_opted_in(),
                      this.get_config("capture_pageview") && this.capture("$pageview", {}, { send_instantly: !0 }),
                      this.get_config("advanced_disable_decide") || new kt(this).call(),
                      this.featureFlags.resetRequestQueue(),
                      this.featureFlags.setReloadingPaused(!1);
                  }
                },
                {
                  key: "_start_queue_if_opted_in",
                  value: function () {
                    this.has_opted_out_capturing() || (this.get_config("request_batching") && this._requestQueue.poll());
                  }
                },
                {
                  key: "_dom_loaded",
                  value: function () {
                    var e = this;
                    this.has_opted_out_capturing() ||
                      W(this.__request_queue, function (t) {
                        e._send_request.apply(e, _(t));
                      }),
                      (this.__request_queue = []),
                      this._start_queue_if_opted_in();
                  }
                },
                {
                  key: "_prepare_callback",
                  value: function (e, t) {
                    if (X(e)) return null;
                    if (Tn)
                      return function (n) {
                        e(n, t);
                      };
                    var n = this._jsc,
                      r = "" + Math.floor(1e8 * Math.random()),
                      o = this.get_config("callback_fn") + "[" + r + "]";
                    return (
                      (n[r] = function (o) {
                        delete n[r], e(o, t);
                      }),
                      o
                    );
                  }
                },
                {
                  key: "_handle_unload",
                  value: function () {
                    this.get_config("request_batching")
                      ? (this.get_config("capture_pageview") && this.get_config("capture_pageleave") && this.capture("$pageleave"),
                        this.get_config("_capture_metrics") &&
                          (this._requestQueue.updateUnloadMetrics(), this.capture("$capture_metrics", this._captureMetrics.metrics)),
                        this._requestQueue.unload(),
                        this._retryQueue.unload())
                      : this.get_config("capture_pageview") &&
                        this.get_config("capture_pageleave") &&
                        this.capture("$pageleave", null, { transport: "sendBeacon" });
                  }
                },
                {
                  key: "_handle_queued_event",
                  value: function (e, t, n) {
                    var r = JSON.stringify(t);
                    this.__compress_and_send_json_request(e, r, n || On, kn);
                  }
                },
                {
                  key: "__compress_and_send_json_request",
                  value: function (e, t, n, r) {
                    var o,
                      s = (function (e, t, n) {
                        return e === Zt.LZ64
                          ? [{ data: C.compressToBase64(t), compression: Zt.LZ64 }, n]
                          : e === Zt.GZipJS
                          ? [ln(dn(t), { mtime: 0 }), i(i({}, n), {}, { blob: !0, urlQueryArgs: { compression: Zt.GZipJS } })]
                          : [{ data: se(t) }, n];
                      })((o = this.compression)[Zt.GZipJS] ? Zt.GZipJS : o[Zt.LZ64] ? Zt.LZ64 : Zt.Base64, t, n),
                      a = v(s, 2),
                      c = a[0],
                      u = a[1];
                    this._send_request(e, c, u, r);
                  }
                },
                {
                  key: "_send_request",
                  value: function (e, t, n, r) {
                    if (Cn) this.__request_queue.push([e, t, n, r]);
                    else {
                      var o = {
                        method: this.get_config("api_method"),
                        transport: this.get_config("api_transport"),
                        verbose: this.get_config("verbose")
                      };
                      (n = Z(o, n || {})), Tn || (n.method = "GET");
                      var s = "sendBeacon" in R.navigator && "sendBeacon" === n.transport;
                      if (
                        ((e = (function (e, t, n) {
                          var r = t || {};
                          (r.ip = n.ip ? 1 : 0), (r._ = new Date().getTime().toString()), (r.ver = x.LIB_VERSION);
                          var o = e.split("?");
                          if (o.length > 1) {
                            var i,
                              s = w(o[1].split("&"));
                            try {
                              for (s.s(); !(i = s.n()).done; ) {
                                var a = i.value.split("=")[0];
                                r[a] && delete r[a];
                              }
                            } catch (e) {
                              s.e(e);
                            } finally {
                              s.f();
                            }
                          }
                          var c = e.indexOf("?") > -1 ? "&" : "?";
                          return (
                            e +
                            c +
                            (function (e) {
                              var t,
                                n,
                                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "&",
                                o = [];
                              return (
                                z(e, function (e, r) {
                                  (t = encodeURIComponent(e.toString())), (n = encodeURIComponent(r)), (o[o.length] = n + "=" + t);
                                }),
                                o.join(r)
                              );
                            })(r)
                          );
                        })(e, n.urlQueryArgs || {}, { ip: this.get_config("ip") })),
                        Y(t) && this.get_config("img"))
                      ) {
                        var a = L.createElement("img");
                        (a.src = e), L.body.appendChild(a);
                      } else if (s)
                        try {
                          R.navigator.sendBeacon(e, gn(t, i(i({}, n), {}, { sendBeacon: !0 })));
                        } catch (e) {
                          this.get_config("debug") && console.error(e);
                        }
                      else if (Tn)
                        try {
                          mn({
                            url: e,
                            data: t,
                            headers: this.get_config("xhr_headers"),
                            options: n,
                            captureMetrics: this._captureMetrics,
                            callback: r,
                            retriesPerformedSoFar: 0,
                            retryQueue: this._retryQueue,
                            onXHRError: this.get_config("on_xhr_error")
                          });
                        } catch (e) {
                          console.error(e);
                        }
                      else {
                        var c,
                          u = L.createElement("script");
                        (u.type = "text/javascript"), (u.async = !0), (u.defer = !0), (u.src = e);
                        var l = L.getElementsByTagName("script")[0];
                        null === (c = l.parentNode) || void 0 === c || c.insertBefore(u, l);
                      }
                    }
                  }
                },
                {
                  key: "_execute_array",
                  value: function (e) {
                    var t,
                      n = this,
                      r = [],
                      o = [],
                      i = [];
                    W(e, function (e) {
                      e &&
                        ((t = e[0]),
                        G(t)
                          ? i.push(e)
                          : "function" == typeof e
                          ? e.call(n)
                          : G(e) && "alias" === t
                          ? r.push(e)
                          : G(e) && -1 !== t.indexOf("capture") && "function" == typeof n[t]
                          ? i.push(e)
                          : o.push(e));
                    });
                    var s = function (e, t) {
                      W(
                        e,
                        function (e) {
                          if (G(e[0])) {
                            var n = t;
                            z(e, function (e) {
                              n = n[e[0]].apply(n, e.slice(1));
                            });
                          } else this[e[0]].apply(this, e.slice(1));
                        },
                        t
                      );
                    };
                    s(r, this), s(o, this), s(i, this);
                  }
                },
                {
                  key: "_hasBootstrappedFeatureFlags",
                  value: function () {
                    var e, t;
                    return (
                      ((null === (e = this.config.bootstrap) || void 0 === e ? void 0 : e.featureFlags) &&
                        Object.keys(null === (t = this.config.bootstrap) || void 0 === t ? void 0 : t.featureFlags).length > 0) ||
                      !1
                    );
                  }
                },
                {
                  key: "push",
                  value: function (e) {
                    this._execute_array([e]);
                  }
                },
                {
                  key: "capture",
                  value: function (e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : On;
                    if (this.__loaded && !Je(this, !1)) {
                      this._captureMetrics.incr("capture"), "$snapshot" === e && this._captureMetrics.incr("snapshot");
                      var r = (n = n || On).transport;
                      if ((r && (n.transport = r), X(e) || "string" != typeof e))
                        console.error("No event name provided to posthog.capture");
                      else if (!le(N)) {
                        this.persistence.update_search_keyword(L.referrer),
                          this.get_config("store_google") && this.persistence.update_campaign_params(),
                          this.get_config("save_referrer") && this.persistence.update_referrer_info(L.referrer);
                        var o = { event: e, properties: this._calculate_event_properties(e, t || {}) };
                        "$identify" === e && n.$set && (o.$set = n.$set),
                          ((o = ie(o, n._noTruncate ? null : this.get_config("properties_string_max_length"))).timestamp =
                            n.timestamp || new Date()),
                          this.get_config("debug") && B("PostHog.js send", o);
                        var i = JSON.stringify(o),
                          s = this.get_config("api_host") + (n.endpoint || "/e/"),
                          a = n !== On;
                        return (
                          !this.get_config("request_batching") || (a && !n._batchKey) || n.send_instantly
                            ? this.__compress_and_send_json_request(s, i, n)
                            : this._requestQueue.enqueue(s, o, n),
                          this._invokeCaptureHooks(e, o),
                          o
                        );
                      }
                    }
                  }
                },
                {
                  key: "_addCaptureHook",
                  value: function (e) {
                    this.__captureHooks.push(e);
                  }
                },
                {
                  key: "_invokeCaptureHooks",
                  value: function (e, t) {
                    this.config._onCapture(e, t),
                      z(this.__captureHooks, function (t) {
                        return t(e);
                      });
                  }
                },
                {
                  key: "_calculate_event_properties",
                  value: function (e, t) {
                    var n,
                      r = this.persistence.remove_event_timer(e),
                      o = i({}, t);
                    if (((o.token = this.get_config("token")), "$snapshot" === e)) {
                      var s = this.persistence.properties();
                      return (o.distinct_id = s.distinct_id), o;
                    }
                    var a = he.properties();
                    if (this.sessionManager) {
                      var c = this.sessionManager.checkAndGetSessionAndWindowId(),
                        u = c.sessionId,
                        l = c.windowId;
                      (o.$session_id = u), (o.$window_id = l);
                    }
                    if (
                      (null !== (n = this.webPerformance) &&
                        void 0 !== n &&
                        n.isEnabled &&
                        ("$pageview" === e && this.pageViewIdManager.onPageview(),
                        (o = Z(o, { $pageview_id: this.pageViewIdManager.getPageViewId() }))),
                      "$performance_event" === e)
                    ) {
                      var d = this.persistence.properties();
                      return (o.distinct_id = d.distinct_id), (o.$current_url = a.$current_url), o;
                    }
                    if (void 0 !== r) {
                      var f = new Date().getTime() - r;
                      o.$duration = parseFloat((f / 1e3).toFixed(3));
                    }
                    o = Z({}, a, this.persistence.properties(), o);
                    var p = this.get_config("property_blacklist");
                    G(p)
                      ? z(p, function (e) {
                          delete o[e];
                        })
                      : console.error("Invalid value for property_blacklist config: " + p);
                    var h = this.get_config("sanitize_properties");
                    return h && (o = h(o, e)), o;
                  }
                },
                {
                  key: "register",
                  value: function (e, t) {
                    this.persistence.register(e, t);
                  }
                },
                {
                  key: "register_once",
                  value: function (e, t, n) {
                    this.persistence.register_once(e, t, n);
                  }
                },
                {
                  key: "unregister",
                  value: function (e) {
                    this.persistence.unregister(e);
                  }
                },
                {
                  key: "_register_single",
                  value: function (e, t) {
                    this.register(l({}, e, t));
                  }
                },
                {
                  key: "getFeatureFlag",
                  value: function (e, t) {
                    return this.featureFlags.getFeatureFlag(e, t);
                  }
                },
                {
                  key: "getFeatureFlagPayload",
                  value: function (e) {
                    var t = this.featureFlags.getFeatureFlagPayload(e);
                    try {
                      return JSON.parse(t);
                    } catch (e) {
                      return t;
                    }
                  }
                },
                {
                  key: "isFeatureEnabled",
                  value: function (e, t) {
                    return this.featureFlags.isFeatureEnabled(e, t);
                  }
                },
                {
                  key: "reloadFeatureFlags",
                  value: function () {
                    this.featureFlags.reloadFeatureFlags();
                  }
                },
                {
                  key: "onFeatureFlags",
                  value: function (e) {
                    return this.featureFlags.onFeatureFlags(e);
                  }
                },
                {
                  key: "identify",
                  value: function (e, t, n) {
                    if (e) {
                      this._captureMetrics.incr("identify");
                      var r = this.get_distinct_id();
                      if ((this.register({ $user_id: e }), !this.get_property("$device_id"))) {
                        var o = r;
                        this.register_once({ $had_persisted_distinct_id: !0, $device_id: o }, "");
                      }
                      e !== r && e !== this.get_property(it) && (this.unregister(it), this.register({ distinct_id: e }));
                      var i = "anonymous" === this.persistence.get_user_state();
                      e !== r && i
                        ? (this.persistence.set_user_state("identified"),
                          this.capture("$identify", { distinct_id: e, $anon_distinct_id: r }, { $set: t || {}, $set_once: n || {} }),
                          this.featureFlags.setAnonymousDistinctId(r))
                        : (t && this.people.set(t), n && this.people.set_once(n)),
                        e !== r && this.reloadFeatureFlags();
                    } else console.error("Unique user id has not been set in posthog.identify");
                  }
                },
                {
                  key: "group",
                  value: function (e, t, n) {
                    if (e && t) {
                      this._captureMetrics.incr("group");
                      var r = this.getGroups();
                      this.register({ $groups: i(i({}, r), {}, l({}, e, t)) }),
                        n && this.capture("$groupidentify", { $group_type: e, $group_key: t, $group_set: n }),
                        r[e] !== t && this.reloadFeatureFlags();
                    } else console.error("posthog.group requires a group type and group key");
                  }
                },
                {
                  key: "resetGroups",
                  value: function () {
                    this.register({ $groups: {} }), this.reloadFeatureFlags();
                  }
                },
                {
                  key: "reset",
                  value: function (e) {
                    var t = this.get_property("$device_id");
                    this.persistence.clear(), this.persistence.set_user_state("anonymous"), this.sessionManager.resetSessionId();
                    var n = this.get_config("get_device_id")(ue());
                    this.register_once({ distinct_id: n, $device_id: e ? n : t }, "");
                  }
                },
                {
                  key: "get_distinct_id",
                  value: function () {
                    return this.get_property("distinct_id");
                  }
                },
                {
                  key: "getGroups",
                  value: function () {
                    return this.get_property("$groups") || {};
                  }
                },
                {
                  key: "alias",
                  value: function (e, t) {
                    return e === this.get_property(ot)
                      ? (V("Attempting to create alias for existing People user - aborting."), -2)
                      : (X(t) && (t = this.get_distinct_id()),
                        e !== t
                          ? (this._register_single(it, e), this.capture("$create_alias", { alias: e, distinct_id: t }))
                          : (console.error("alias matches current distinct_id - skipping api call."), this.identify(e), -1));
                  }
                },
                {
                  key: "set_config",
                  value: function (e) {
                    var t = i({}, this.config);
                    Y(e) &&
                      (Z(this.config, e),
                      this.get_config("persistence_name") || (this.config.persistence_name = this.config.cookie_name),
                      this.get_config("disable_persistence") || (this.config.disable_persistence = this.config.disable_cookie),
                      this.persistence && this.persistence.update_config(this.config),
                      Me.is_supported() && "true" === Me.get("ph_debug") && (this.config.debug = !0),
                      this.get_config("debug") && (x.DEBUG = !0),
                      this.sessionRecording &&
                        void 0 !== e.disable_session_recording &&
                        t.disable_session_recording !== e.disable_session_recording &&
                        (e.disable_session_recording
                          ? this.sessionRecording.stopRecording()
                          : this.sessionRecording.startRecordingIfEnabled()));
                  }
                },
                {
                  key: "startSessionRecording",
                  value: function () {
                    this.set_config({ disable_session_recording: !1 });
                  }
                },
                {
                  key: "stopSessionRecording",
                  value: function () {
                    this.set_config({ disable_session_recording: !0 });
                  }
                },
                {
                  key: "sessionRecordingStarted",
                  value: function () {
                    var e;
                    return !(null === (e = this.sessionRecording) || void 0 === e || !e.started());
                  }
                },
                {
                  key: "loadToolbar",
                  value: function (e) {
                    return this.toolbar.loadToolbar(e);
                  }
                },
                {
                  key: "get_config",
                  value: function (e) {
                    var t;
                    return null === (t = this.config) || void 0 === t ? void 0 : t[e];
                  }
                },
                {
                  key: "get_property",
                  value: function (e) {
                    return this.persistence.props[e];
                  }
                },
                {
                  key: "toString",
                  value: function () {
                    var e,
                      t = null !== (e = this.get_config("name")) && void 0 !== e ? e : En;
                    return t !== En && (t = En + "." + t), t;
                  }
                },
                {
                  key: "_gdpr_init",
                  value: function () {
                    "localStorage" === this.get_config("opt_out_capturing_persistence_type") &&
                      Me.is_supported() &&
                      (!this.has_opted_in_capturing() &&
                        this.has_opted_in_capturing({ persistence_type: "cookie" }) &&
                        this.opt_in_capturing({ enable_persistence: !1 }),
                      !this.has_opted_out_capturing() &&
                        this.has_opted_out_capturing({ persistence_type: "cookie" }) &&
                        this.opt_out_capturing({ clear_persistence: !1 }),
                      this.clear_opt_in_out_capturing({ persistence_type: "cookie", enable_persistence: !1 })),
                      this.has_opted_out_capturing()
                        ? this._gdpr_update_persistence({ clear_persistence: !0 })
                        : this.has_opted_in_capturing() ||
                          (!this.get_config("opt_out_capturing_by_default") && !Pe.get("ph_optout")) ||
                          (Pe.remove("ph_optout"),
                          this.opt_out_capturing({ clear_persistence: this.get_config("opt_out_persistence_by_default") }));
                  }
                },
                {
                  key: "_gdpr_update_persistence",
                  value: function (e) {
                    var t;
                    if (e && e.clear_persistence) t = !0;
                    else {
                      if (!e || !e.enable_persistence) return;
                      t = !1;
                    }
                    this.get_config("disable_persistence") || this.persistence.disabled === t || this.persistence.set_disabled(t);
                  }
                },
                {
                  key: "_gdpr_call_func",
                  value: function (e, t) {
                    return (
                      (t = Z(
                        {
                          capture: this.capture.bind(this),
                          persistence_type: this.get_config("opt_out_capturing_persistence_type"),
                          cookie_prefix: this.get_config("opt_out_capturing_cookie_prefix"),
                          cookie_expiration: this.get_config("cookie_expiration"),
                          cross_subdomain_cookie: this.get_config("cross_subdomain_cookie"),
                          secure_cookie: this.get_config("secure_cookie")
                        },
                        t || {}
                      )),
                      Me.is_supported() || "localStorage" !== t.persistence_type || (t.persistence_type = "cookie"),
                      e(this.get_config("token"), {
                        capture: t.capture,
                        captureEventName: t.capture_event_name,
                        captureProperties: t.capture_properties,
                        persistenceType: t.persistence_type,
                        persistencePrefix: t.cookie_prefix,
                        cookieExpiration: t.cookie_expiration,
                        crossSubdomainCookie: t.cross_subdomain_cookie,
                        secureCookie: t.secure_cookie
                      })
                    );
                  }
                },
                {
                  key: "opt_in_capturing",
                  value: function (e) {
                    (e = Z({ enable_persistence: !0 }, e || {})), this._gdpr_call_func(Ue, e), this._gdpr_update_persistence(e);
                  }
                },
                {
                  key: "opt_out_capturing",
                  value: function (e) {
                    var t = Z({ clear_persistence: !0 }, e || {});
                    this._gdpr_call_func(Be, t), this._gdpr_update_persistence(t);
                  }
                },
                {
                  key: "has_opted_in_capturing",
                  value: function (e) {
                    return this._gdpr_call_func(He, e);
                  }
                },
                {
                  key: "has_opted_out_capturing",
                  value: function (e) {
                    return this._gdpr_call_func(Ve, e);
                  }
                },
                {
                  key: "clear_opt_in_out_capturing",
                  value: function (e) {
                    var t = Z({ enable_persistence: !0 }, null != e ? e : {});
                    this._gdpr_call_func(qe, t), this._gdpr_update_persistence(t);
                  }
                },
                {
                  key: "debug",
                  value: function (e) {
                    !1 === e
                      ? (R.console.log("You've disabled debug mode."),
                        localStorage && localStorage.removeItem("ph_debug"),
                        this.set_config({ debug: !1 }))
                      : (R.console.log(
                          "You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."
                        ),
                        localStorage && localStorage.setItem("ph_debug", "true"),
                        this.set_config({ debug: !0 }));
                  }
                },
                {
                  key: "decodeLZ64",
                  value: function (e) {
                    return C.decompressFromBase64(e || null);
                  }
                }
              ]),
              e
            );
          })();
        !(function (e, t) {
          for (var n = 0; n < t.length; n++) e.prototype[t[n]] = ne(e.prototype[t[n]]);
        })(jn, ["identify"]);
        var An,
          Pn = {},
          Rn =
            ((pn = fn.INIT_MODULE),
            ((hn = new jn()).init = function (e, t, n) {
              if (n) return hn[n] || ((hn[n] = Pn[n] = In(e || "", t || {}, n)), hn[n]._loaded()), hn[n];
              var r = hn;
              return (
                Pn[En] ? (r = Pn[En]) : e && ((r = In(e, t || {}, En))._loaded(), (Pn[En] = r)),
                (hn = r),
                pn === fn.INIT_SNIPPET && (R[En] = hn),
                z(Pn, function (e, t) {
                  t !== En && (hn[t] = e);
                }),
                r
              );
            }),
            hn.init(),
            (function () {
              function e() {
                e.done ||
                  ((e.done = !0),
                  (Cn = !1),
                  z(Pn, function (e) {
                    e._dom_loaded();
                  }));
              }
              L.addEventListener && ("complete" === L.readyState ? e() : L.addEventListener("DOMContentLoaded", e, !1)),
                pe(R, "load", e, !0);
            })(),
            hn),
          Mn = n(52713),
          Ln = n(80809),
          Nn = n(96046),
          $n = n(92729);
        const Dn = "analytics:batchEventNames",
          Fn = !!localStorage.getItem("disableAnalytics"),
          Un = (null === (An = window.m) || void 0 === An ? void 0 : An.globals.isProduction) || !1;
        let Bn = null;
        class Hn {
          constructor(e = {}) {
            this.defaults = e;
          }
          static capture(e, t) {
            Gn(e, t);
          }
          static batchCapture(e, t) {
            zn(e, t);
          }
          static identify() {
            return Fn
              ? Promise.resolve()
              : (async function () {
                  const e = m.utils.uuidToByteArray(localStorage.getItem("userId")),
                    t = await crypto.subtle.digest("SHA-256", new Uint8Array(e));
                  return new Uint8Array(t).reduce((e, t) => e + t.toString(16).padStart(2, "0"), "");
                })().then((e) => {
                  e &&
                    (Rn.identify(e),
                    (function (e) {
                      if (!localStorage.getItem("posthog:marketingSite:identified")) {
                        function t(e) {
                          "posthog:identified" === e.data &&
                            (localStorage.setItem("posthog:marketingSite:identified", !0), window.removeEventListener("message", t));
                        }
                        window.addEventListener("message", t), qn("distinctId=" + e);
                      }
                    })(e));
                });
          }
          static sendBatchEventsIfNeeded() {
            !(function () {
              let e = localStorage.getObject(Dn) || [];
              e.forEach((t) => {
                const n = "analytics:" + Ln.Z.toCamelCase(t);
                let { count: r, firstLoad: o, date: i, properties: s } = Vn(n);
                Date.parse(i) >= Date.parse(m.utils.getDateString()) ||
                  (r > 0 && Gn(t, { ...s, $time: Math.round(o / 1e3), count: r }),
                  localStorage.removeItem(n),
                  (e = e.filter((e) => e !== t)));
              }),
                localStorage.setObject(Dn, e);
            })();
          }
          static reset() {
            return Fn
              ? Promise.resolve()
              : (Rn.reset(!0),
                new Promise((e) => {
                  function t(e) {
                    "posthog:reset" === e.data && n();
                  }
                  function n() {
                    window.removeEventListener("message", t), e();
                  }
                  window.addEventListener("message", t), setTimeout(n, 2e3), qn("reset=true");
                }));
          }
          static disableCaptureExceptFeatures(e) {
            Bn = e;
          }
          static enableCaptureForAllFeatures() {
            Bn = null;
          }
          capture(e, t) {
            Gn.call(this, e, Object.assign({}, this.defaults, t));
          }
          batchCapture(e, t) {
            zn(e, t);
          }
        }
        function Vn(e) {
          return localStorage.getObject(e) || { date: m.utils.getDateString(), count: 0, firstLoad: Date.now() };
        }
        function qn(e) {
          const t = $n.Ce.MARKETING_SITE;
          let n = document.getElementById("analytics-identify");
          n ||
            ((n = document.createElement("iframe")), n.setAttribute("id", "analytics-identify"), document.documentElement.appendChild(n)),
            n.setAttribute("src", t + "posthog?" + e);
        }
        function zn(e, t) {
          const n = "analytics:" + Ln.Z.toCamelCase(e);
          let r = Vn(n);
          Date.parse(r.date) < Date.parse(m.utils.getDateString()) &&
            console.warn(
              `This event (${e}) was dated for a previous day and has not been sent. Previous day's data needs to be sent before being captured for today`
            ),
            (r.properties = { ...r.properties, ...t }),
            (r.count += 1),
            localStorage.setObject(n, r);
          const o = localStorage.getObject(Dn) || [];
          o.includes(e) || (o.push(e), localStorage.setObject(Dn, o));
        }
        async function Wn() {
          let { started_trial_ever: e, paid_for_plus_ever: t, nextUpdate: n = 0 } = localStorage.getObject("analyticsSubscription") || {};
          if ("never" !== n && n < Date.now() && localStorage.getItem("token"))
            try {
              const { data: { subscriptionSummary: { trialEnd: n, trialing: o, active: i, subscriptionEnd: s } = {} } = {} } =
                await r.Z.get("user/profile?details=1");
              (e = !!n),
                (t = (!o && i) || !!s),
                localStorage.setObject("analyticsSubscription", {
                  nextUpdate: e && t ? "never" : Date.now() + 864e5,
                  started_trial_ever: e,
                  paid_for_plus_ever: t
                });
            } catch {
              return {};
            }
          return { started_trial_ever: e, paid_for_plus_ever: t };
        }
        function Zn() {
          const [e, t, n] = m.globals.version.split(".").map((e) => parseInt(e));
          let r = {};
          Object.values(Nn.Z.experiments).forEach((e) => {
            r[e.experimentName] = e.variantName;
          });
          let o = Object.keys(r).length > 0;
          return {
            extension_version: m.globals.version,
            extension_version_major: e,
            extension_version_minor: t,
            extension_version_patch: n,
            in_any_experiment: o,
            experiments: r
          };
        }
        function Gn(e, t = {}) {
          Fn ||
            (Bn && !Bn.includes(t.feature)) ||
            (async function () {
              const e = localStorage.getItem("email"),
                t = localStorage.getItem("token"),
                n = Ln.Z.getProduct();
              return {
                product: n,
                has_email: !!e && m.isLoggedIn(),
                has_token: !!t,
                is_internal: (null == e ? void 0 : e.includes("@momentumdash.com")) || !1,
                is_admin: ["Team", "Community"].includes(n) && m.models.teamInfo.get("team").userIsAdmin,
                organization_id: ["Team", "Community"].includes(n) ? m.models.teamInfo.get("id") : null,
                ...(await Wn()),
                ...Zn()
              };
            })().then((n) => {
              !(function (e, t) {
                m.devTools && m.devTools.getFeatureDebug("instrumentation") && console.log("📈 " + e, t);
              })(e, t),
                Rn.capture(e, Object.assign({ $set: n, source: "extension", is_paid_event: !1 }, Zn(), t));
            });
        }
        Fn ||
          Promise.all([
            (async function (e = Un) {
              if (!e) return $n.Ce.POSTHOG_DEV;
              try {
                const e = await (0, Mn.Z)("posthog.host");
                if (e) return `https://${e}`;
              } catch (e) {
                console.error(e);
              }
              return $n.Ce.POSTHOG_PROD;
            })(),
            (async function (e = Un) {
              return e
                ? (await (0, Mn.Z)("posthog.apiKey").catch(console.error)) || "phc_hzA3aWlsO64mFH1VodQTlYASVMJX0zz26GaiS8D7ye8"
                : "phc_7HcHlSAnyVvP4gAVlt8a9seYpsrDOWxAJK5UOb1KKai";
            })()
          ]).then(([e, t]) => {
            t &&
              e &&
              Rn.init(t, {
                api_host: e,
                disable_session_recording: !0,
                autocapture: !1,
                capture_pageview: !1,
                loaded() {
                  Hn.identify();
                }
              });
          });
      },
      64438: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => d });
        var r = n(3510),
          o = n(52713),
          i = n(41353);
        const s = r.Z.version,
          a = r.Z.environment,
          c = new URL(
            `https://browser-http-intake.logs.datadoghq.com/v1/input/pub18ef9128dd80db1a80dfc3f9180b55b5?ddsource=browser&ddtags=${encodeURIComponent(
              `env:${a},service:extension,version:${s}`
            )}`
          ).toString(),
          u = "chrome" === r.Z.platform;
        var l = n(42935);
        class d extends class {
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
            if (!u || !(await this._isEligibleForSubmission())) return;
            const [t, n, r] = this._parseArgs(e),
              o = { status: r, date: Date.now(), service: "extension", message: t, _logger: this.name, ...n };
            this.tabId && (o.tabId = this.tabId), await (0, i.Z)({ method: "POST", url: c, data: o });
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
            const { datadogLoggingSamplingRate: e } = await (0, o.Z)();
            return this.name.split(".").reduce((t, n, r, o) => {
              const i = o.slice(0, r + 1).join(".");
              return i in e ? e[i] : t;
            }, this.defaultSampleRate);
          }
        } {
          constructor(...e) {
            super(...e), (this.tabId = l.Z);
          }
        }
      },
      92729: (e, t, n) => {
        "use strict";
        n.d(t, {
          $x: () => p,
          Ce: () => a,
          Cg: () => f,
          Mu: () => r,
          Qj: () => u,
          Rx: () => l,
          bD: () => i,
          om: () => d,
          pv: () => s,
          zY: () => o
        });
        const r = { MANUAL: 0, URL: 1, INTEGRATION: 2 },
          o = { NONE: "none", DAILY: "daily", WEEKLY: "weekly", MONTHLY: "monthly", YEARLY: "yearly" },
          i = [
            { id: r.MANUAL, label: "Manual", description: "Track manually", title: "Manual" },
            { id: r.URL, label: "From a URL", description: "Update from a URL", title: "URL" },
            { id: r.INTEGRATION, label: "From an Integration", description: "Connect to a service", title: "Integration" }
          ],
          s = { TEAM: 1, COMMUNITY: 2 },
          a = {
            NETWORK_ERROR_HELP_ARTICLE: "https://get.momentumdash.help/hc/en-us/articles/4420582438167",
            MARKETING_SITE: "https://momentumdash.com/",
            POSTHOG_PROD: "https://posthog.momentumdash.com",
            POSTHOG_DEV: "https://dev.posthog.momentumdash.com"
          },
          c = "Oops! Something went wrong.",
          u = {
            ERROR_MESSAGE_PREFIX: c,
            MAX_INPUT_LENGTH_EXCEEDED: "This entry is too long. Please try something shorter.",
            SERVER_ERROR_BASIC: c,
            SERVER_ERROR_GENERAL: c + " Please try again, or contact help@momentumdash.com.",
            SERVER_ERROR_NETWORK: "There was a network error. Please check your connection and try again.",
            NAME_EMPTY: "Please let us know how to address you.",
            EMAIL_INVALID: "Sorry, {email} doesn't seem to be a valid email address. Please try again.",
            EMAIL_INVALID_SHORT: "Please enter a valid email.",
            EMAIL_EMPTY: "Please enter an email.",
            PASSWORD_INVALID: "Passwords need to be at least 6 characters long.",
            PASSWORD_EMPTY: "Please enter a password.",
            EMAIL_NO_SPACES: "Emails may not include spaces.",
            PASSWORD_INCORRECT: "The password you entered for<br>the email {email} isn't right.",
            PASSWORD_INCORRECT_SHORT: "The password you entered isn't right.",
            TOO_MANY_ATTEMPTS: "Your account has been locked due to too many incorrect password attempts. Please try again in 5 minutes.",
            NETWORK_ERROR_WHILE_ONLINE: `${c} <a href="${a.NETWORK_ERROR_HELP_ARTICLE}">Need help?</a>`,
            NETWORK_ERROR_WHILE_OFFLINE: c + "<br>Please check your internet connection and try again.",
            INVALID_URL: "Sorry, this URL doesn't seem to be valid. Please try again.",
            EXISTING_USER: "A user with that email already exists.",
            INCORRECT_COMBINATION: "Incorrect email & password combination.",
            SERVER_ERROR_429: "We are experiencing a high amount of traffic at this time. Please try again later.",
            PAYMENT_3DS_ERROR: "There was an error validating your card. Please try again.",
            PAYMENT_3DS_CONFIRM_ERROR: "We couldn't activate your features automatically, please check again in a few minutes"
          },
          l = { TOP: "position-top", RIGHT: "position-right", BOTTOM: "position-bottom", LEFT: "position-left" },
          d = {
            title: "Test Sale",
            percentOff: 10,
            endDate: new Date(Date.now() + 6048e5).toISOString(),
            friendlyMonthlyPrice: 2.99,
            friendlyPrice: 36,
            badgeText: "Test Badge"
          },
          f = {
            classInputLengthError: "invalid-length",
            msPerDay: 864e5,
            msPerHour: 36e5,
            dateRolloverHour: 4,
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            keyEscape: 27,
            keyReturn: 13,
            minMarginSmoothScroll: 50,
            monthNames: [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December"
            ],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            suggestIntegrationLink: "https://momentum.nolt.io/",
            timeContentItemAnimation: 200,
            timeSettingsFade: 150,
            timeSmoothScroll: 500,
            timeToggleClassTwice: 100,
            nippleDisplacementPx: 40,
            nippleWidthPx: 14,
            dashboardSidePaddingPx: 10,
            dashboardVerticalPaddingPx: 10,
            mobileMaxWidth: 450,
            mobileTopOrBottomClearance: 60,
            organizationTypes: s
          },
          p = [
            { name: "UTC/GMT", id: "Etc/UTC" },
            { name: "UTC-12:00", id: "Etc/GMT+12" },
            { name: "UTC-11:00", id: "Etc/GMT+11" },
            { name: "UTC-10:00", id: "Etc/GMT+10" },
            { name: "UTC-09:00", id: "Etc/GMT+9" },
            { name: "UTC-08:00", id: "Etc/GMT+8" },
            { name: "UTC-07:00", id: "Etc/GMT+7" },
            { name: "UTC-06:00", id: "Etc/GMT+6" },
            { name: "UTC-05:00", id: "Etc/GMT+5" },
            { name: "UTC-04:00", id: "Etc/GMT+4" },
            { name: "UTC-03:00", id: "Etc/GMT+3" },
            { name: "UTC-02:00", id: "Etc/GMT+2" },
            { name: "UTC-01:00", id: "Etc/GMT+1" },
            { name: "UTC+01:00", id: "Etc/GMT-1" },
            { name: "UTC+02:00", id: "Etc/GMT-2" },
            { name: "UTC+03:00", id: "Etc/GMT-3" },
            { name: "UTC+04:00", id: "Etc/GMT-4" },
            { name: "UTC+05:00", id: "Etc/GMT-5" },
            { name: "UTC+06:00", id: "Etc/GMT-6" },
            { name: "UTC+07:00", id: "Etc/GMT-7" },
            { name: "UTC+08:00", id: "Etc/GMT-8" },
            { name: "UTC+09:00", id: "Etc/GMT-9" },
            { name: "UTC+10:00", id: "Etc/GMT-10" },
            { name: "UTC+11:00", id: "Etc/GMT-11" },
            { name: "UTC+12:00", id: "Etc/GMT-12" },
            { name: "UTC+13:00", id: "Etc/GMT-13" },
            { name: "UTC+14:00", id: "Etc/GMT-14" }
          ];
      },
      35258: (e, t, n) => {
        "use strict";
        function r(e, t, n) {
          return e + ("string" == typeof n ? " " + n : "") + t;
        }
        n.r(t), n.d(t, { default: () => r });
      },
      57337: (e, t, n) => {
        "use strict";
        n.r(t), n.d(t, { default: () => o });
        var r = n(35258);
        function o(e) {
          switch (m.globals.platform) {
            case "Chrome":
              return (0, r.default)(
                '<svg class="icon-chrome-tab',
                '" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 497.401 497.401"><g><path d="M478.742 154.382H320.714c28.366 21.765 47.111 55.717 47.111 94.307 0 30.63-14.345 56.386-30.933 79.445-28.322 39.41-95.817 168.878-95.817 168.878 2.567.043 5.026.388 7.636.388 137.341 0 248.69-111.348 248.69-248.69-.022-33.412-6.709-65.229-18.659-94.328z"/><path d="M248.172 129.619c54.402-.388 217.628-2.049 217.628-2.049C423.24 51.511 342.069 0 248.69 0 170.819 0 101.361 35.829 55.782 91.848l75.972 134.925c10.268-55.113 58.349-96.744 116.418-97.154z"/><path d="M248.668 367.825c-51.964 0-91.568-35.117-111.974-79.855-20.535-45.018-98.061-171.984-98.061-171.984C14.301 154.425 0 199.832 0 248.69c0 124.744 91.935 227.744 211.696 245.648l77.288-134.019c-12.641 4.615-26.101 7.506-40.316 7.506z"/><circle cx="248.668" cy="248.711" r="80.416"/></g></svg>',
                e
              );
            case "Edge":
              return (0, r.default)(
                '<svg class="icon-edge-tab',
                '" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M4.667 3.764c2.918 0 5.282 1.864 5.325 4.174 0 .013.007.025.007.039V8c0 .029-.014.224-.024.292a1.989 1.989 0 01-.4.932 2.291 2.291 0 01-.165.19v.005a.285.285 0 00-.052.076.343.343 0 00-.046.162.6.6 0 00.295.452 1.425 1.425 0 00.173.109 4.882 4.882 0 002.2.435h.227a3.717 3.717 0 001.891-.524A3.838 3.838 0 0016 6.826a6.13 6.13 0 00-.15-1.338c-.011-.038-.021-.076-.032-.113a8.092 8.092 0 00-.526-1.295A8.016 8.016 0 008 0 8 8 0 00.415 5.467a5.851 5.851 0 014.252-1.703z"/><path d="M4.238 11.022a5.333 5.333 0 012.784-4.765h.007c.049-.027.1-.052.152-.075l.036-.018.048-.018a1.881 1.881 0 01.968-.124A5.294 5.294 0 004.68 4.734C2.107 4.734.013 6.335.013 8.3c0 .051 0 .1.005.153v.013a7.993 7.993 0 005.543 7.15 8.055 8.055 0 001.9.339 5.3 5.3 0 01-3.223-4.933z"/><path d="M4.905 11.022a4.532 4.532 0 004.4 4.645 5.787 5.787 0 001.753-.3 8.007 8.007 0 003.715-3.1.251.251 0 00-.334-.353 5.744 5.744 0 01-.658.294 6.371 6.371 0 01-2.244.4 6.305 6.305 0 01-2.666-.58c-.02-.009-.04-.021-.06-.031a4.68 4.68 0 01-2.79-3.723C6.012 8.169 6 8.065 6 7.959v-.008a4.8 4.8 0 00-1.095 3.071z"/></svg>',
                e
              );
            default:
              return;
          }
        }
      },
      13458: (e, t, n) => {
        "use strict";
        function r() {
          return m.globals.platform;
        }
        n.r(t), n.d(t, { default: () => r });
      },
      89281: (e, t, n) => {
        "use strict";
        n.r(t), n.d(t, { default: () => o });
        var r = n(35258);
        function o(e) {
          return (0, r.default)(
            '<svg class="icon icon-cancel',
            '" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212.982 212.982"><path d="M131.804 106.491l75.936-75.936c6.99-6.99 6.99-18.323 0-25.312-6.99-6.99-18.322-6.99-25.312 0L106.491 81.18 30.554 5.242c-6.99-6.99-18.322-6.99-25.312 0-6.989 6.99-6.989 18.323 0 25.312l75.937 75.936-75.937 75.937c-6.989 6.99-6.989 18.323 0 25.312 6.99 6.99 18.322 6.99 25.312 0l75.937-75.937 75.937 75.937c6.989 6.99 18.322 6.99 25.312 0 6.99-6.99 6.99-18.322 0-25.312l-75.936-75.936z"/></svg>',
            e
          );
        }
      },
      69023: (e, t, n) => {
        "use strict";
        n.r(t), n.d(t, { default: () => o });
        var r = n(35258);
        function o(e) {
          return (0, r.default)(
            '<svg class="icon icon-ellipsis',
            '" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><path d="M8 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM52 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zM30 22c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"/></svg>',
            e
          );
        }
      },
      12581: (e, t, n) => {
        "use strict";
        function r(e) {
          return m.utils.isChrome() ? e.fn(this) : e.inverse(this);
        }
        n.r(t), n.d(t, { default: () => r });
      },
      957: (e, t, n) => {
        "use strict";
        function r(e) {
          return m.utils.isChromium() ? e.fn(this) : e.inverse(this);
        }
        n.r(t), n.d(t, { default: () => r });
      },
      78241: (e, t, n) => {
        "use strict";
        function r(e) {
          return e && e.toLowerCase().trim().split(/[ -_]/).join("-");
        }
        n.r(t), n.d(t, { default: () => r });
      },
      8042: (e, t, n) => {
        "use strict";
        function r(e) {
          return e && e.toLowerCase();
        }
        n.r(t), n.d(t, { default: () => r });
      },
      57744: (e, t, n) => {
        "use strict";
        function r() {
          return '<path d="M291.5,281A22.5,22.5,0,1,1,269,303.5,22.52,22.52,0,0,1,291.5,281m0-1A23.5,23.5,0,1,0,315,303.5,23.5,23.5,0,0,0,291.5,280Z" transform="translate(-176 -194.88)"/><path class="arrow" d="M399,257.5a135.18,135.18,0,0,0-41.16-42.17c-22.7-14.74-49.38-21.92-75.15-20.2a108.71,108.71,0,0,0-65.16,27c-19.91,17.5-33.76,41.79-41.18,72.19a13.52,13.52,0,0,0,9.92,16.32,13.66,13.66,0,0,0,3.21.38,13.51,13.51,0,0,0,13.11-10.3c6.07-24.92,17.1-44.54,32.76-58.31a82,82,0,0,1,49.13-20.32c20-1.33,40.81,4.32,58.65,15.9A108.07,108.07,0,0,1,374,268.51l-30,13.2,72.43,40.36,8.6-76Z" transform="translate(-176 -194.88)"/>';
        }
        n.r(t), n.d(t, { default: () => r });
      },
      25723: (e) => {
        e.exports = [
          "xhrQueue",
          "idMap",
          "syncedDb:clocks",
          "syncedDb:countdowns",
          "syncedDb:metrics",
          "syncedDb:onboardingSteps",
          "syncedDb:links",
          "syncedDb:focus",
          "syncedDb:notes",
          "syncedDb:tabs",
          "analyticsQueue",
          "keyValueStorage",
          "keyValueDb:misc",
          "keyValueDb:timestamp"
        ];
      },
      72918: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => d });
        var r = n(7838),
          o = n(35174),
          i = n(64438),
          s = n(24749);
        const a = new i.Z("tab.dataSyncMigration", 0.01);
        Backbone.Events.listenToOnce(m, "appsReady", d), Backbone.Events.listenTo(m, "destroyWidget:quicklinks", d);
        const c = {
            notes: {
              shouldIgnore: ({ item: e }) => !e.body,
              shouldCreate: ({ item: e }) => !e._id,
              shouldDelete: () => !1,
              beforeUpdate: ({ item: e }) => (e.id = e._id),
              refresh: () => {
                Promise.all([n.e(8725), n.e(5757), n.e(2622), n.e(6781)])
                  .then(n.bind(n, 51545))
                  .then(({ useNotesStore: e }) => e().refresh());
              }
            },
            focus: { shouldIgnore: ({ item: e }) => !e.focus },
            links: {
              refresh: () => {
                Promise.all([n.e(3370), n.e(7652)])
                  .then(n.bind(n, 23370))
                  .then(({ useLinksStore: e }) => e().refresh());
              },
              processItems: async ({ items: e }) => {
                const t = { createParents: [], createLinks: [], reorderRoot: [] },
                  n = [];
                for (const n of e)
                  if (n.type === s.Un.LinkGroup && n.isRoot) {
                    if (!n.serverSetId) {
                      var r;
                      const e =
                        null === (r = (await o.Z.get("links")).data.find((e) => e.isRoot && !e.isTeamRoot)) || void 0 === r ? void 0 : r.id;
                      (n.csid = e),
                        (n.id = e),
                        (n.serverSetId = !0),
                        (n.linksOrderIds = n.linksOrder),
                        (n.changed_props = ["linksOrderIds"]);
                    }
                    t.reorderRoot.push(n);
                  } else n.type === s.Un.LinkGroup ? t.createParents.push(n) : n.type === s.Un.Link && t.createLinks.push(n);
                for (const e of Object.values(t)) n.push(await Promise.allSettled(e.map((e) => f(e, "links", "quicklinks"))));
                return n.flat();
              },
              localStorageCollectionName: () => "quicklinks"
            }
          },
          u = {
            shouldCreate: ({ item: e }) => !e.serverSetId,
            shouldDelete: () => !0,
            refresh: ({ itemType: e }) => r.Z.$emit(e + ":refresh"),
            processItems: ({ items: e, collectionName: t, itemType: n }) => Promise.allSettled(e.map((e) => f(e, n, t))),
            localStorageCollectionName: ({ collectionName: e }) => e
          };
        function l(e, { item: t, collectionName: n, itemType: r, items: o }) {
          var i, s;
          return null !== (i = c[n]) && void 0 !== i && i[e]
            ? c[n][e]({ item: t, items: o })
            : null == u || null === (s = u[e]) || void 0 === s
            ? void 0
            : s.call(u, { item: t, itemType: r, collectionName: n, items: o });
        }
        function d() {
          const e = new Date().getTime(),
            t = localStorage.getObject("syncedData:migration:successful") || [],
            n = ["focus", "links"],
            r = (m.conditionalFeatures.featureEnabled("plus") ? n.concat(["countdown", "metrics", "clocks", "notes"]) : n).filter(
              (e) => !t.includes(e)
            ),
            o = localStorage.getItem("syncedData:migration:lastAttempted");
          r.length &&
            (!o || o < e - 3e5) &&
            localStorage.getItem("token") &&
            (h(),
            Promise.allSettled(
              r.map(
                (e) =>
                  new Promise((t, n) => {
                    const r = "countdown" === e ? "countdowns" : e,
                      o = (function (e) {
                        return (function (e) {
                          const t = (function (e) {
                            const t = localStorage.getItem(e);
                            return t && t.split(",");
                          })(e);
                          return t ? t.map((t) => localStorage.getObject(`${e}-${t}`)) : [];
                        })(e).filter(
                          (t) =>
                            t &&
                            !t.migrated &&
                            !t.ignored &&
                            ((t.changed_props && t.changed_props.length) || l("shouldCreate", { item: t, collectionName: e }))
                        );
                      })(l("localStorageCollectionName", { collectionName: e }));
                    if (!o || !o.length) return g(e, o), void t();
                    l("processItems", { items: o, collectionName: e, itemType: r }).then((i) => {
                      if ((l("refresh", { collectionName: e, itemType: r }), !i.length || i.every((e) => "fulfilled" === e.status)))
                        g(e, o), t();
                      else {
                        const t = v(i);
                        console.error(r + " migration failed", t), n({ type: e, failures: t });
                      }
                    });
                  })
              )
            ).then((e) => {
              m.off("appsReady", d);
              const t = {};
              v(e).forEach((e) => (t[e.type] = e.failures)),
                Object.keys(t).length &&
                  (localStorage.setObject("syncedData:migration:failures", t), a.warn("Migration failed", { failures: _(t) }));
            }));
        }
        async function f(e, t, n) {
          h();
          try {
            if (l("shouldIgnore", { item: e, collectionName: n }))
              return void (function (e, t) {
                (t.ignored = !0), localStorage.setObject(`${e}-${t.id || t.csid}`, t);
              })(n, e);
            if (l("shouldCreate", { item: e, collectionName: n })) await o.Z.post(t, e), p(n, e);
            else if (e.changed_props && e.changed_props.length) {
              const r = {};
              e.changed_props.forEach((t) => (r[t] = e[t])),
                l("beforeUpdate", { item: e, collectionName: n }),
                r.deleted && l("shouldDelete", { item: e, collectionName: n })
                  ? await o.Z.delete(`${t}/${e.id}`)
                  : await o.Z.patch(`${t}/${e.id}`, r),
                p(n, e);
            }
          } catch (t) {
            throw { id: e.id || e.cid, error: t };
          }
        }
        function p(e, t) {
          (t.migrated = !0), localStorage.setObject(`${e}-${t.id || t.csid}`, t);
        }
        function h() {
          localStorage.setItem("syncedData:migration:lastAttempted", new Date().getTime());
        }
        function g(e, t) {
          const n = localStorage.getObject("syncedData:migration:successful") || [];
          n.push(e),
            localStorage.setObject("syncedData:migration:successful", n),
            t.length && console.log(t.length + " " + e + " migrated", t);
        }
        function v(e) {
          return e.filter((e) => "rejected" === e.status).map((e) => e.reason);
        }
        function _(e) {
          const t = {};
          return (
            Object.entries(e).forEach(([e, n]) => {
              (t[e] = {}),
                n.forEach((n) => {
                  var r, o;
                  t[e][n.id] = {
                    message: null === (r = n.error) || void 0 === r ? void 0 : r.message,
                    method: null === (o = n.error) || void 0 === o ? void 0 : o.config.method
                  };
                });
            }),
            t
          );
        }
      },
      15106: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => i, z: () => s });
        var r = n(20144);
        const o = new Proxy(
            {},
            {
              set: (e, t, n) => (r.ZP.set(e, t, n), m.models.customization.computeProperties(), !0),
              deleteProperty: (e, t) => (t in e && (r.ZP.delete(e, t), m.models.customization.computeProperties()), !0)
            }
          ),
          i = o;
        function s(e = {}) {
          Object.entries(e).forEach(([e, t]) => {
            null === t ? delete o[e] : (o[e] = t);
          });
        }
      },
      64398: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => s });
        var r = n(28692),
          o = n(30936);
        const i = (0, r.WB)();
        i.use(o.default);
        const s = i;
      },
      90248: (e, t, n) => {
        ((e) => {
          let t = e.keys(),
            n = t.map(e);
          t.forEach((e, t) => {
            const r = e.replace(/.*\//, "");
            r.startsWith("_") || r.endsWith(".js") || Handlebars.registerHelper(r, n[t].default);
          });
        })(n(95326));
      },
      42935: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => r });
        const r = (0, n(84315).uuidv4)();
      },
      80809: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => d });
        var r = n(92729),
          o = n(84315),
          i = n(25723),
          s = n.n(i),
          a = n(81405),
          c = n(35174);
        const u = [33, 34, 40, 41, 46, 63, 91, 93, 96, 123, 125, 8220, 8221, 8230],
          l = {
            ...o,
            ensureUrlScheme: function (e) {
              return (
                /^(((f|ht)tps?)|chrome|chrome-extension|chrome-search):\/\//i.test(e) ||
                  /^(file:\\|file:\/\/)+/i.test(e) ||
                  (e = "https://" + e),
                e
              );
            },
            mConst: function (e) {
              const t = r.Cg[e];
              return void 0 === t && console.warn("constant not found:", e), t;
            },
            dateToEpoch: function (e) {
              return "number" == typeof e ? e : "string" == typeof e ? Date.parse(e) : e instanceof Date ? e.getTime() : null;
            },
            loadOnboarding() {
              const e = () => m.trigger("onboarding:load");
              m.modals ? e() : m.once("modalContainer:created", e);
            },
            clearStorage() {
              l.clearLocalStorage();
              const e = [l.clearIndexedDb()];
              return localStorage.getItem("analyticsDisabled") || e.push(a.ZP.reset()), Promise.allSettled(e);
            },
            clearLocalStorage() {
              const e = {};
              [
                "api",
                "local-account",
                "client_uuid",
                "weather:forecast",
                "weather:location",
                "debugInstrumentation",
                "notification:safariUpdate:forceVersionCheck",
                "dev-panel:open",
                "dev-panel:active-tab"
              ].forEach((t) => {
                const n = localStorage.getItem(t);
                n && (e[t] = n);
              }),
                localStorage.clear(),
                localStorage.clear(),
                Object.entries(e).forEach(([e, t]) => {
                  localStorage.setItem(e, t);
                });
            },
            clearIndexedDb: () =>
              Promise.allSettled(
                s().map(
                  (e) =>
                    new Promise((t, n) => {
                      const r = indexedDB.deleteDatabase(e);
                      (r.onsuccess = t), (r.onerror = n);
                    })
                )
              ),
            hasClass: function (e, t) {
              return e.classList ? e.classList.contains(t) : new RegExp("\\b" + t + "\\b").test(e.className);
            },
            addClass: function (e, t) {
              e.classList ? e.classList.add(t) : l.hasClass(e, t) || (e.className += " " + t);
            },
            removeClass: function (e, t) {
              e.classList ? e.classList.remove(t) : (e.className = e.className.replace(new RegExp("\\b" + t + "\\b", "g"), ""));
            },
            setMomentumAuthHeader: function (e) {
              if (
                (localStorage.token && e.setRequestHeader("Authorization", "Bearer " + localStorage.token),
                localStorage.client_uuid && e.setRequestHeader("X-Momentum-ClientId", localStorage.client_uuid),
                e.setRequestHeader("X-Momentum-Version", m.globals.version),
                e.setRequestHeader("X-Momentum-ClientDate", l.getLocalDateTimeString()),
                m.conditionalFeatures.featureEnabled("allowoptions"))
              ) {
                let t = localStorage.getItem("X-Momentum-Options");
                t && e.setRequestHeader("X-Momentum-Options", t);
              }
              localStorage.activeTags && e.setRequestHeader("X-Momentum-Tags", localStorage.activeTags);
            },
            setToken: function (e, t) {
              var n, r, o;
              return e
                ? (localStorage.setItem("token", e),
                  t && localStorage.setItem("token_uuid", t),
                  l.isSafari() &&
                  null !== (n = window) &&
                  void 0 !== n &&
                  null !== (r = n.browser) &&
                  void 0 !== r &&
                  null !== (o = r.runtime) &&
                  void 0 !== o &&
                  o.sendNativeMessage
                    ? this.saveTokenToAppStorage()
                    : Promise.resolve({ message: "Conditions to save token in app storage not met." }))
                : Promise.reject("No token provided");
            },
            saveTokenToAppStorage() {
              var e, t, n;
              if (
                !l.isSafari() ||
                null === (e = window) ||
                void 0 === e ||
                null === (t = e.browser) ||
                void 0 === t ||
                null === (n = t.runtime) ||
                void 0 === n ||
                !n.sendNativeMessage
              )
                return Promise.reject("saveTokenToAppStorage only works on Safari");
              const r = localStorage.getItem("token");
              if (!r) return Promise.reject("No token in localStorage");
              const o = {
                token: r,
                tokenUuid: localStorage.getItem("token_uuid"),
                clientUuid: localStorage.getItem("client_uuid"),
                userUuid: localStorage.getItem("user_uuid"),
                email: localStorage.getItem("email")
              };
              return browser.runtime
                .sendNativeMessage("com.momentumdash.momentum.safari", { eventName: "setUserTokenInfo", userTokenInfo: JSON.stringify(o) })
                .catch((e) => {
                  throw (console.error(e), new Error("Error setting token in shared app storage"));
                });
            },
            getTokenFromAppStorage: () =>
              browser.runtime
                .sendNativeMessage("com.momentumdash.momentum.safari", { eventName: "getUserTokenInfo" })
                .then((e) => (null == e ? void 0 : e.userTokenInfo) && JSON.parse(e.userTokenInfo)),
            handleAuthResponse({ token: e, token_uuid: t, settings: n, user_uuid: r, features: o } = {}) {
              localStorage.removeItem("unregistered"),
                localStorage.removeItem("registrationStatePending"),
                e && l.setToken(e),
                t && localStorage.setItem("token_uuid", t),
                r && localStorage.setItem("user_uuid", r),
                n && m.syncCoordinator.loadSettings(n),
                o && m.conditionalFeatures.updateFeatures(o);
            },
            oneTimeLogin: function (e) {
              (m.oneTimeLoginInProgress = !0), $("body").addClass("blur show-otl"), m.widgetManager.showDashboard();
              const t = Date.now(),
                n = localStorage.getItem("oneTimeLoginStarted");
              return n && n > t - 1e4
                ? Promise.reject("Another login is currently being processed.")
                : (localStorage.setItem("oneTimeLoginStarted", t),
                  (function (e) {
                    const t = { type: "oneTimeLogin", payload: e, openNewTab: !0, updateSenderTab: !1 },
                      n = localStorage.getObject("pendingLoginState");
                    return n && !n.state
                      ? ((e.pendingState = n), Promise.reject("state passed in but no state in pendingLoginState"))
                      : (0, c.Z)(m.globals.urlRootApi + "user/authenticate", { method: "post", data: t }).then((e) => e.data);
                  })(e)
                    .then(async (e) => {
                      if (!e || !e.token) throw "no token in response";
                      (function () {
                        let e = localStorage.getItem("user_uuid");
                        if (e) return e;
                        const t = localStorage.getItem("token");
                        if (!t) return null;
                        const n = m.utils.parseJwt(t);
                        return n ? ((e = n.user_uuid || n.user_guid), e ? e.toLowerCase() : null) : null;
                      })() !== e.user_uuid && (m.utils.clearLocalStorage(), await m.utils.clearIndexedDb()),
                        (function ({ token: e, token_uuid: t, user_uuid: n, features: r } = {}) {
                          localStorage.setItem("token", e),
                            t && localStorage.setItem("token_uuid", t),
                            n && localStorage.setItem("user_uuid", n),
                            r && localStorage.setItem("f3t6b23d", r),
                            localStorage.setItem("processNewLogin", !0);
                        })(e),
                        setTimeout(m.widgetManager.checkWidgetTimeout.bind(m.widgetManager), 500),
                        m.listenToOnce(m.models.customization, "initialized", onSettingsInitialized),
                        m.trigger("user:successfulLogin"),
                        localStorage.removeItem("processNewLogin"),
                        localStorage.setItem("loggedIn", m.now()),
                        localStorage.removeItem("onetimeSent"),
                        chrome.runtime.sendMessage({ type: "oneTimeLogin:response", payload: { success: !0 } }),
                        (m.oneTimeLoginInProgress = !1);
                    })
                    .catch((e) => {
                      chrome.runtime.sendMessage({ type: "oneTimeLogin:response", payload: { success: !1, errorMessage: e } });
                      const t = $(".otl");
                      throw (
                        (t.find(".message").mHide(),
                        t.find(".error").addClass("show"),
                        t.find(".button.reload").attr({ href: m.globals.urlRootAccount }),
                        e)
                      );
                    })
                    .finally(() => {
                      localStorage.removeItem("oneTimeLoginStarted");
                      let e = new URL(window.location);
                      const t = e.searchParams;
                      t.delete("otp"),
                        t.delete("otpUuid"),
                        t.delete("email"),
                        (e = e.toString()),
                        history.pushState ? window.history.pushState({ path: e }, "", e) : (window.location = e);
                    }));
            },
            parseJwt(e) {
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
            },
            hasServiceWorker: () => location.host.includes("localhost:") || (!l.isFirefox() && !l.isSafari()),
            getUserState() {
              const e = localStorage.getItem("unregistered"),
                t = m.conditionalFeatures.featureEnabled("team"),
                n = t && m.models.teamInfo && m.models.teamInfo.get("team") && m.models.teamInfo.get("team").userIsAdmin,
                r = t && !n,
                o = m.conditionalFeatures.featureEnabled("plus") && !t,
                i = !(t || e || o);
              let s;
              return (
                e ? (s = "unregistered") : n ? (s = "teamAdmin") : r ? (s = "teamMember") : o ? (s = "plus") : i && (s = "free"),
                { state: s, isUnregistered: e, isTeam: t, isTeamAdmin: n, isPlus: o, isTeamMember: r, isFree: i }
              );
            },
            userIsLegacyUnregistered() {
              if (localStorage.getItem("token")) return !1;
              const e = localStorage.getObject("momentum-customization-1");
              return !(null == e || !e.displayname);
            },
            getProduct() {
              const e = m.models.teamInfo.get("team");
              return m.conditionalFeatures.featureEnabled("team") && e
                ? e.type === r.pv.TEAM
                  ? "Team"
                  : "Community"
                : m.conditionalFeatures.featureEnabled("plus")
                ? "Plus"
                : "Free";
            },
            openAppleUpgrade() {
              this.saveTokenToAppStorage().then(() => {
                window.location.href = "momentumdash://upgrade";
              });
            },
            arraysAreEqual: (e, t) => JSON.stringify(e) === JSON.stringify(t),
            async asyncFilter(e, t) {
              const n = Symbol();
              return (await Promise.all(e.map(async (e) => ((await t(e)) ? e : n)))).filter((e) => e !== n);
            },
            isDev: () => !m.globals.isProduction,
            domReady: function (e) {
              "complete" === document.readyState || "interactive" === document.readyState
                ? setTimeout(e, 1)
                : document.addEventListener("DOMContentLoaded", e);
            },
            validateEmail: function (e) {
              return /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(
                e
              );
            },
            getQueryParameter: function (e) {
              e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
              const t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(location.search);
              return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "));
            },
            access: (e, ...t) => ("function" == typeof e ? e.apply(null, [...t]) : e),
            getOppositePosition(e) {
              switch (e) {
                case "right":
                  return "left";
                case "left":
                  return "right";
                case "top":
                  return "bottom";
                case "bottom":
                  return "top";
                default:
                  return "";
              }
            },
            toggleLocalStorageBool: function (e) {
              const t = "true" === localStorage[e] ? "false" : "true";
              return (localStorage[e] = t), "true" === t;
            },
            getLocalStorageBool: function (e, t = !1) {
              const n = localStorage.getItem(e);
              return null === n ? t : "true" === n;
            },
            setEndOfContentEditable: function (e) {
              let t, n;
              document.createRange &&
                ((t = document.createRange()),
                t.selectNodeContents(e),
                t.collapse(!1),
                (n = window.getSelection()),
                n.removeAllRanges(),
                n.addRange(t));
            },
            bookmarksNotSupported: function () {
              let e = m.globals.platform;
              return ["Safari"].includes(e);
            },
            getMetaKeyName: function (e) {
              let t;
              return (t = l.isMacOs() ? "Cmd" : l.isLinuxOs() ? "Meta" : "Ctrl"), e && (t = t.toLowerCase()), t;
            },
            isWindowsOs: () => navigator.platform.includes("Win"),
            isMacOs: () => navigator.platform.includes("Mac"),
            isLinuxOs: () => navigator.platform.includes("Linux"),
            isEdge: function () {
              return navigator.userAgent.includes("Edg");
            },
            isChrome: function () {
              return "Chrome" === m.globals.platform;
            },
            isChromium: function () {
              return "Chrome" === m.globals.platform || "Edge" === m.globals.platform;
            },
            isChromiumExtension: function () {
              return !!l.isChromium() && !!chrome.extension;
            },
            isSafari: function () {
              return "Safari" === m.globals.platform;
            },
            isFirefox: function () {
              return "Firefox" === m.globals.platform;
            },
            isTouchDevice: function () {
              return (
                ["iPhone Simulator", "iPod Simulator", "iPhone", "iPod"].includes(navigator.platform) ||
                /iPhone|iPod|iPad|Android/.test(navigator.userAgent) ||
                (navigator.userAgent.includes("Mac") && "ontouchend" in document)
              );
            },
            useAppleAppPayment: () => l.isSafari(),
            getBrowserName: function () {
              return m.globals.platform;
            },
            getBrowserVersion: function () {
              const e = navigator.userAgent.match(new RegExp("rv:([0-9]+)"));
              return e && e.length ? parseInt(e[1]) : 0;
            },
            getBrowser: function () {
              return l.isChromium() ? chrome : browser;
            },
            getFavIcon: function (e) {
              try {
                const t = new URL(e);
                return "https://www.google.com/s2/favicons?sz=32&domain=" + t.origin + t.pathname;
              } catch (e) {
                return "/img/icon/links-fallback.svg";
              }
            },
            loadModuleDefault: (e) => e().then((e) => e.default),
            shortId: function () {
              let e = (46656 * Math.random()) | 0,
                t = (46656 * Math.random()) | 0;
              return (e = ("000" + e.toString(36)).slice(-3)), (t = ("000" + t.toString(36)).slice(-3)), e + t;
            },
            shouldShowIntroduction: () =>
              (!m.models.customization.get("displayname") && !m.isLoggedIn()) ||
              localStorage.getItem("doLoginOnNextLoad") ||
              localStorage.getItem("registrationStatePending") ||
              localStorage.getItem("loginParams") ||
              localStorage.getItem("pendingLoginState") ||
              (localStorage.getItem("tokenNeeded") && !localStorage.getItem("token")),
            getStackTrace() {
              if (!Error.captureStackTrace) return;
              let e = {};
              return Error.captureStackTrace(e, l.getStackTrace), e.stack;
            },
            _compareVersions(e, t) {
              (e = e.split(".").map(Number)), (t = t.split(".").map(Number));
              for (let n = 0; n < e.length; n++) {
                if (e[n] > t[n]) return 1;
                if (e[n] < t[n]) return -1;
              }
              return 0;
            },
            currentVersionIsNewerThan: (e) => 1 === l._compareVersions(m.globals.version, e),
            getDateString: function (e) {
              return (
                void 0 === e ? (e = new Date()) : e instanceof Date || (e = new Date(e)),
                e.getHours() < l.mConst("dateRolloverHour") && e.setDate(e.getDate() - 1),
                e.getFullYear().toString() + "-" + l.twoDigit(e.getMonth() + 1) + "-" + l.twoDigit(e.getDate())
              );
            },
            getDayPart: function (e) {
              const t = e.getHours();
              let n;
              return (n = t >= l.mConst("dateRolloverHour") && t < 12 ? "morning" : t >= 12 && t < 17 ? "afternoon" : "evening"), n;
            },
            getDayName: function (e, t) {
              return l.mConst("dayNames" + (t ? "Short" : ""))[e.getDay()];
            },
            getMonthName: function (e, t) {
              return l.mConst("monthNames" + (t ? "Short" : ""))[e.getMonth()];
            },
            getDaysInMonth: function (e, t) {
              return new Date(e, parseInt(t) + 1, 0).getDate();
            },
            dateDiffIntegerDays: function (e, t) {
              const n = new Date(e.valueOf());
              return (new Date(t.valueOf()).setHours(0, 0, 0, 0) - n.setHours(0, 0, 0, 0)) / l.mConst("msPerDay");
            },
            dateIsYesterday: function (e) {
              return -1 === l.dateDiffIntegerDays(m.date(), e);
            },
            dateIsToday: function (e) {
              return 0 === l.dateDiffIntegerDays(m.date(), e);
            },
            dateIsTomorrow: function (e) {
              return 1 === l.dateDiffIntegerDays(m.date(), e);
            },
            dateIsInLast7d: function (e) {
              const t = l.dateDiffIntegerDays(m.date(), e);
              return t > -7 && t <= 0;
            },
            getFriendlyDate: function (e) {
              const t = m.date();
              let n, r, o;
              return (
                (n = e instanceof Date ? e : l.parseIsoDatetime(e)),
                (r = n.getFullYear() === t.getFullYear() ? "" : ", " + n.getFullYear()),
                (o = l.mConst("monthNamesShort")[n.getMonth()] + " " + n.getDate() + r),
                o
              );
            },
            getFriendlyDateTime: function (e) {
              return l.getFriendlyDate(e).replace(",", "") + ", " + l.getHoursMinsStr(e).toLowerCase().replace(" ", "");
            },
            formatYearRelative: function (e) {
              const t = m.date(),
                n = e.getFullYear();
              return n === t.getFullYear() ? "" : ", " + n;
            },
            logViaDom(...e) {
              let t = document.querySelector(".dom-debug-container");
              t ||
                ((t = document.createElement("div")),
                t.classList.add("dom-debug-container"),
                Object.assign(t.style, { pointerEvents: "none", padding: "10px", maxHeight: "100vh", overflow: "auto" }),
                document.querySelector(".full").appendChild(t));
              const n = document.createElement("div");
              (n.innerText = e.map((e) => String(e)).join(" ")), t.appendChild(n);
            },
            formatMonthDayRelative: function (e, t) {
              let n;
              return (
                (n = l.dateIsTomorrow(e)
                  ? "Tomorrow"
                  : l.dateIsToday(e)
                  ? "Today"
                  : l.dateIsYesterday(e)
                  ? "Yesterday"
                  : l.getMonthName(e, t) + " " + e.getDate()),
                n
              );
            },
            getHoursMinsStr: function (e, t) {
              void 0 === t && (t = m.models.customization.get("hour12clock"));
              let n,
                r,
                o,
                i = e.getHours();
              return (
                t
                  ? ((r = " " + (i < 12 ? "AM" : "PM")), i > 12 && (i -= 12), 0 === i && (i = 12), (n = i))
                  : ((r = ""), (n = l.twoDigit(i))),
                (o = n + ":" + l.twoDigit(e.getMinutes()) + r),
                o
              );
            },
            parseIsoDatetime: function (e) {
              const t = e.split(/[: T-]/).map(parseFloat);
              return new Date(t[0], t[1] - 1, t[2], t[3] || 0, t[4] || 0, t[5] || 0, 0);
            },
            nightsBetween: function (e, t, n) {
              let r = e,
                o = t;
              const i = e.valueOf() >= t.valueOf();
              i && ((r = t), (o = e));
              const s = o.valueOf() - r.valueOf(),
                a = l.calcDayMs(r, n) + s;
              let c = Math.floor(a / l.mConst("msPerDay"));
              return 0 !== c && i && (c *= -1), c;
            },
            calcDayMs: function (e, t) {
              let n = e - new Date(e).setHours(0, 0, 0, 0) - t * l.mConst("msPerHour");
              return n < 0 && (n += l.mConst("msPerDay")), n;
            },
            dateAdd: function (e, t, n) {
              let r = new Date(e);
              function o() {
                r.getDate() !== e.getDate() && r.setDate(0);
              }
              switch (t.toLowerCase()) {
                case "year":
                  r.setFullYear(r.getFullYear() + n), o();
                  break;
                case "quarter":
                  r.setMonth(r.getMonth() + 3 * n), o();
                  break;
                case "month":
                  r.setMonth(r.getMonth() + n), o();
                  break;
                case "week":
                  r.setDate(r.getDate() + 7 * n);
                  break;
                case "day":
                  r.setDate(r.getDate() + n);
                  break;
                case "hour":
                  r.setTime(r.getTime() + 36e5 * n);
                  break;
                case "minute":
                  r.setTime(r.getTime() + 6e4 * n);
                  break;
                case "second":
                  r.setTime(r.getTime() + 1e3 * n);
                  break;
                default:
                  r = void 0;
              }
              return r;
            },
            formatRelativeDate(e) {
              let t;
              return (
                (t = l.dateIsToday(e)
                  ? l.formatTime(e)
                  : l.dateIsInLast7d(e)
                  ? l.getDayName(e, !0)
                  : l.getMonthName(e, !0) + " " + e.getDate() + l.formatYearRelative(e)),
                t
              );
            },
            formatTime(e) {
              const t = e.getHours(),
                n = l.twoDigit(e.getMinutes());
              let r;
              return (
                (r = m.models.customization.get("hour12clock")
                  ? (t % 12 || 12) + ":" + n + " " + (t >= 12 ? "PM" : "AM")
                  : l.twoDigit(t) + ":" + n),
                r
              );
            },
            doubleRaf: () =>
              new Promise((e) => {
                requestAnimationFrame(() => {
                  requestAnimationFrame(e);
                });
              }),
            delay: (e) => new Promise((t) => setTimeout(t, e)),
            getBaseEmail(e) {
              if (null != e && e.includes("+")) {
                const t = e.split(/[+@]/);
                return t.splice(1, 1), t.join("@");
              }
              return e;
            },
            isEndPunctuationChar: function (e) {
              return _.contains(u, e.charCodeAt(0));
            },
            endsWithEndPunctuation: function (e) {
              return !!e && l.isEndPunctuationChar(e.slice(-1));
            },
            getEndPunctuationString: function (e) {
              let t,
                n = "";
              for (let r = e.length - 1; r >= 0 && ((t = e.charAt(r)), l.isEndPunctuationChar(t)); r--) n = t + n;
              return n;
            },
            capitalizeWords: function (e) {
              const t = e.split(" ");
              return (
                t.forEach(function (e, n) {
                  t[n] = e.charAt(0).toUpperCase() + e.slice(1);
                }),
                t.join(" ")
              );
            },
            removeTags: function (e) {
              const t = "(?:[^\"'>]|\"[^\"]*\"|'[^']*')*",
                n = new RegExp(
                  "<(?:!--(?:(?:-*[^->])*--+|-?)|script\\b" +
                    t +
                    ">[\\s\\S]*?</script\\s*|style\\b" +
                    t +
                    ">[\\s\\S]*?</style\\s*|/?[a-z]" +
                    t +
                    ")>",
                  "gi"
                );
              let r;
              do {
                (r = e), (e = e.replace(n, ""));
              } while (e !== r);
              return e.replace(/</g, "&lt;");
            },
            lineBreakString: function (e, t) {
              function n(e, t, n, r, o, i) {
                let s,
                  a = 0,
                  c = t - 1;
                if (o) s = 0;
                else {
                  s = t - i;
                  const r = e.slice(0, s - 1);
                  n.push(" "), n.push(r), (a = s - 1), (c += s - 1);
                }
                for (let i = Math.round((e.length - s) / t); i >= 0; i--) {
                  const i = e.slice(a, c);
                  if (!i) break;
                  o ? (o = !1) : (n.push(0 === a ? "<br>" : "-<br>"), (r = n.length - 1)), n.push(i), (a += t - 1), (c += t - 1);
                }
                return r;
              }
              if (!e) return;
              if (e.length <= t) return e;
              const r = e.split(" "),
                o = [];
              let i = 0;
              return (
                r.forEach(function (e, r) {
                  const s = (function (e, t) {
                    let n = 0;
                    return (
                      t && (e = e.slice(t)),
                      e.forEach(function (e) {
                        n += e.length;
                      }),
                      n
                    );
                  })(o, i ? i + 1 : 0);
                  r
                    ? e.length + s > t
                      ? e.length > t && !e.includes("-")
                        ? (i = n(e, t, o, i, !1, s))
                        : (o.push("<br>"), (i = o.length - 1), o.push(e))
                      : (o.push(" "), o.push(e))
                    : e.length > t && !e.includes("-")
                    ? (i = n(e, t, o, i, !0))
                    : o.push(e);
                }),
                o.join("")
              );
            },
            isVowel(e, t) {
              if (!e) return !1;
              let n = ["a", "e", "i", "o", "u"];
              return t && n.push("y"), -1 !== n.indexOf(e.toLowerCase());
            },
            fuzzyFilter(e, t, n) {
              if (!e || !t.length) return t;
              const r = e.toUpperCase().split(" "),
                o = e.toUpperCase().split(""),
                i = {};
              o.forEach((e) => {
                " " !== e && (i.hasOwnProperty(e) ? i[e]++ : (i[e] = 1));
              });
              const s = (e) => {
                return (t = e), r.every((e) => t.toUpperCase().includes(e)) ? (e.toUpperCase().startsWith(r[0]) ? 2 : 1) : 0;
                var t;
              };
              return t
                .filter((e) => {
                  return (t = e[n]), (r = i), Object.keys(r).every((e) => t.toUpperCase().split(e).length - 1 >= r[e]);
                  var t, r;
                })
                .sort((e, t) => s(t[n]) - s(e[n]));
            },
            toCamelCase: (e) => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n),
            isNumber: (e) => (("string" == typeof e && "" !== e) || "number" == typeof e) && !isNaN(1 * e),
            getRandomBoolByFrequency: function (e) {
              return Math.random() < e;
            },
            getNextIndex: function (e, t) {
              return t === e.length - 1 || l.arrayIndexOutOfBounds(e, t) ? 0 : t + 1;
            },
            getPrevIndex: function (e, t) {
              return 0 === t || l.arrayIndexOutOfBounds(e, t) ? e.length - 1 : t - 1;
            },
            arrayIndexOutOfBounds: function (e, t) {
              return t < 0 || t >= e.length;
            },
            getRandomIntBetween: function (e, t) {
              return (e = Math.ceil(e)), (t = Math.floor(t)), Math.floor(Math.random() * (t - e + 1)) + e;
            },
            getRandomItem: function (e) {
              return e[Math.floor(Math.random() * e.length)];
            },
            betweenInclusive: function (e, t, n) {
              return e >= t && e <= n;
            },
            getPseudoRandomFromString: function (e) {
              return (
                (l
                  .uuidToByteArray(e)
                  .splice(0, 4)
                  .reverse()
                  .reduce((e, t) => 256 * e + t) %
                  10007) /
                10007
              );
            },
            uuidToByteArray: function (e) {
              let t = null == e ? void 0 : e.replaceAll("-", "");
              if (!t) return null;
              const n = [];
              for (; t.length > 0; ) {
                let e = t.slice(0, 2);
                (t = t.slice(2)), n.push(parseInt(e, 16));
              }
              return n;
            },
            rightPosition: function (e) {
              if (void 0 !== e && 0 !== e.length) return e.offset().left + e.width();
            },
            bottomPosition: function (e) {
              if (void 0 !== e && 0 !== e.length) return e.offset().top + e.outerHeight();
            },
            distanceBelow: function (e, t, n) {
              let r = l.bottomPosition(e) - l.bottomPosition(t);
              return n && (r += n), r;
            },
            removePulseClass: function (e) {
              ("pulse" !== e.originalEvent.animationName && "pulselight" !== e.originalEvent.animationName) ||
                $(e.target).removeClass("pulse");
            },
            scrollToBottom: function (e) {
              const t = e[0];
              t.scrollTop = t.scrollHeight;
            },
            toggleClassTwice: function (e, t) {
              e.toggleClass(t),
                setTimeout(function () {
                  e.toggleClass(t);
                }, l.mConst("timeToggleClassTwice"));
            },
            isTabOrEnter: function (e) {
              const t = e.originalEvent;
              return t.key
                ? "Enter" === t.key || "Tab" === t.key
                : t.code
                ? "Enter" === t.code || "Tab" === t.code || "NumpadEnter" === t.code
                : 13 === e.keyCode || 9 === e.keyCode;
            },
            newTabForFileLink: function (e) {
              l.getBrowser().tabs.create({ url: e });
            },
            isUrlLocalFileLink: function (e) {
              return /^(file:\\|file:\/\/)+/i.test(e);
            },
            isValidUrl: function (e) {
              try {
                return new URL(e), !0;
              } catch {
                return !1;
              }
            },
            captionFormatter: function (e) {
              return e;
            },
            mergeObjects: function (e, t, n) {
              e = e || {};
              for (let r in t) e[r] = (n && e[r]) || t[r];
              return e;
            },
            toTodaysTime: function (e) {
              const t = m.date(),
                n = e.indexOf(":");
              let r = e.substring(0, n);
              return (
                (r = 12 == r ? 0 : r),
                t.setHours(parseInt(r) + ("p" === e[e.length - 2].toLowerCase() ? 12 : 0)),
                t.setMinutes(parseInt(e.substring(n + 1, e.length - 2))),
                t
              );
            },
            isInputOrTextAreaActive: function () {
              return (
                "INPUT" === document.activeElement.tagName ||
                "TEXTAREA" === document.activeElement.tagName ||
                1 == document.activeElement.isContentEditable
              );
            },
            getOptionalNestedProperty: (e, t) => (t ? t.split(".").reduce((e, t) => (null == e ? void 0 : e[t]), e) : e)
          },
          d = l;
      },
      24960: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => d });
        var r = n(7838),
          o = n(64438);
        var i = n(80809);
        const s = new o.Z("tab.workers.updateFailure"),
          a = "dataServiceUpdating";
        class c {
          constructor() {
            (this.pendingMsgs = {}), (this.updateTimeoutId = null), (this.worker = null), (this.serviceWorkerVersionVerified = !1);
          }
          assignWorker(e) {
            (this.worker = e),
              navigator.serviceWorker.addEventListener("message", (e) => this._onMessage(e.data)),
              r.Z.$emit("serviceWorker:assigned"),
              this._verifyVersion();
          }
          sendRecurringCrossTabMessage({ msgId: e, handler: t, args: n = [], success: r, failure: o } = {}) {
            const i = { msgId: e, handler: t, args: n, recurringCrossTab: !0 };
            this.addRecurringCrossTabMessageListener({ msgId: e, success: r, failure: o }),
              this._setMessageTimeout(i),
              this._sendMessage(i);
          }
          addRecurringCrossTabMessageListener({ msgId: e, success: t, failure: n } = {}) {
            function r(e) {
              null == n || n(e);
            }
            this.pendingMsgs[e] = {
              resolve: function (e) {
                try {
                  null == t || t(e);
                } catch (e) {
                  r(e);
                }
              },
              reject: r,
              recurringCrossTab: !0
            };
          }
          sendMessage({ handler: e, args: t = [] } = {}) {
            const n = { msgId: m.utils.uuidv4(), handler: e, args: t };
            return new Promise((e, t) => {
              (this.pendingMsgs[n.msgId] = { resolve: e, reject: t }), this._setMessageTimeout(n), this._sendMessage(n);
            });
          }
          awaitWorkerReady() {
            if (this.serviceWorkerVersionVerified && this.worker) return Promise.resolve();
            const e = [];
            return (
              this.serviceWorkerVersionVerified || e.push(new Promise((e) => r.Z.$once("serviceWorker:versionVerified", e))),
              this.worker || e.push(new Promise((e) => r.Z.$once("serviceWorker:assigned", e))),
              Promise.all(e)
            );
          }
          _verifyVersion() {
            const e = { handler: "getVersion", msgId: m.utils.uuidv4() };
            return new Promise((t, n) => {
              (this.pendingMsgs[e.msgId] = { resolve: t, reject: n }), this._setMessageTimeout(e, 1e3), this.worker.postMessage(e);
            })
              .then((e) => {
                if (3 !== e) throw { message: `Service worker updating from version ${e} to 3.`, oldVersion: e };
                r.Z.$emit("serviceWorker:versionVerified"),
                  (this.serviceWorkerVersionVerified = !0),
                  r.Z.$emit("flashMessage:dismiss", a),
                  clearTimeout(this.updateTimeoutId);
              })
              .catch((e) => {
                console.warn(e.message || e),
                  e.oldVersion,
                  r.Z.$emit("flashMessage", { message: "Updating data service…", persist: !0, id: a }),
                  (this.updateTimeoutId = setTimeout(() => {
                    r.Z.$emit("flashMessage:dismiss", a),
                      r.Z.$emit("flashMessage", {
                        message: "Data service update failed. Please reload the extension.",
                        error: !0,
                        closeButtonEnabled: !1,
                        button: { text: "Reload", action: () => chrome.runtime.reload() },
                        id: "dataServiceUpdateFailed"
                      }),
                      s.warn("Service worker: major update failed", {
                        oldVersion: (null == e ? void 0 : e.version) || "unspecified",
                        newVersion: 3
                      }),
                      console.error("Service worker major update failed.");
                  }, 15e3));
              });
          }
          _sendMessage(e) {
            this.awaitWorkerReady().then(() => this.worker.postMessage(e));
          }
          _setMessageTimeout(e, t = 13e3) {
            const n = this.pendingMsgs[e.msgId];
            n &&
              (n.timeoutId = setTimeout(() => {
                delete this.pendingMsgs[e.msgId];
                const t = this._getTimeoutErrorMessage(e.handler);
                console.error(t, e), n.reject(new Error(t));
              }, t));
          }
          _onMessage(e) {
            const { msgId: t, response: n, error: r } = e;
            if (t in this.pendingMsgs) {
              const { resolve: e, reject: o, timeoutId: i, recurringCrossTab: s } = this.pendingMsgs[t];
              r ? o(r) : e(n), i && clearTimeout(i), s || delete this.pendingMsgs[t];
            }
          }
          _getTimeoutErrorMessage(e) {
            let t = "background script",
              n = "Message sent but no response received";
            return (
              i.Z.hasServiceWorker() &&
                ((t = "service worker"),
                this.worker ? this.serviceWorkerVersionVerified || (n = "Worker version not verified") : (n = "Worker not assigned")),
              `Message to ${t} timed out. Reason: ${n}. Handler: ${e}`
            );
          }
        }
        var u = n(42935);
        let l;
        new o.Z("tab.workers"),
          navigator.serviceWorker && i.Z.hasServiceWorker()
            ? ((l = new c()),
              navigator.serviceWorker.register("serviceWorker.js").then(() => {
                navigator.serviceWorker.ready.then(function (e) {
                  function t(n = e.active) {
                    return "activated" === n.state && (l.assignWorker(n), n.removeEventListener("statechange", t), !0);
                  }
                  e.addEventListener("updatefound", () => {
                    const n = e.installing;
                    n.addEventListener("statechange", () => {
                      t(n) && r.Z.$emit("serviceWorker:updated");
                    });
                  }),
                    e.active ? t() : e.installing.addEventListener("statechange", t);
                });
              }))
            : (l = new (class extends c {
                constructor() {
                  super(),
                    chrome.runtime.onMessage.addListener((e) => {
                      "bgScriptToTabs" === e.type && e.exemptedTabId !== u.Z && this._onMessage(e);
                    });
                }
                _sendMessage(e) {
                  (e.type = "tabToBgScript"), (e.tabId = u.Z), chrome.runtime.sendMessage(e);
                }
              })());
        const d = l;
        m.dataSync = l;
      },
      52713: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => c });
        var r = n(41353);
        const o = new (n(99150).ZP)("misc", 1);
        var i = n(3510);
        let s = null,
          a = null;
        async function c(e) {
          return (
            s ||
              (a
                ? await a
                : ((a = (0, r.Z)({ url: "https://api.momentumdash.com/config", headers: { "X-Momentum-Version": i.Z.version } })
                    .then(({ data: e }) => {
                      if (!e) throw "Request for config from API failed";
                      return e;
                    })
                    .catch((e) => (console.error(e), o.get("config").then((e) => e || {})))),
                  (s = await a),
                  s && (await o.set("config", s)))),
            (function (e, t) {
              return t ? t.split(".").reduce((e, t) => (null == e ? void 0 : e[t]), e) : e;
            })(s, e)
          );
        }
      },
      30495: () => {
        (Storage.prototype.setObject = function (e, t) {
          this.setItem(e, JSON.stringify(t));
        }),
          (Storage.prototype.getObject = function (e) {
            let t = this.getItem(e);
            return t && JSON.parse(t);
          });
      },
      41353: (e, t, n) => {
        "use strict";
        async function r({ method: e, url: t, data: n, headers: r }) {
          const o = await fetch(t, {
              method: e,
              headers: r,
              body: "Object" === (null == n ? void 0 : n.constructor.name) ? JSON.stringify(n) : n
            }).catch(() => ({ statusText: "No response from the server" })),
            { status: i, headers: s, statusText: a } = o,
            c = { status: i, headers: s, statusText: a };
          if (o.ok) {
            const e = await o.text();
            return e && (c.data = JSON.parse(e)), c;
          }
          {
            let r = "%c Request Error: " + (i || "");
            return (
              a && (r += (i ? " : " : "") + a),
              console.groupCollapsed(r, "color: #ff0505"),
              console.log("Request:", { method: e, url: t, data: n }),
              console.log("Response:", o),
              console.groupEnd(),
              c
            );
          }
        }
        n.d(t, { Z: () => r });
      },
      84315: (e, t, n) => {
        "use strict";
        function r(e) {
          const t = parseInt(e);
          return (t >= 10 ? t : "0" + t.toString()).toString();
        }
        function o(e) {
          return (
            void 0 === e ? (e = new Date()) : e instanceof Date || (e = new Date(e)),
            e.getFullYear().toString() +
              "-" +
              r(e.getMonth() + 1) +
              "-" +
              r(e.getDate()) +
              "T" +
              r(e.getHours()) +
              ":" +
              r(e.getMinutes()) +
              ":" +
              r(e.getSeconds())
          );
        }
        function i() {
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
        function s(e) {
          return null == e ? null : e.slice(0, 1).toUpperCase() + e.slice(1);
        }
        function a(e) {
          return s((e = e.replace(/([A-Z])/gm, (e) => " " + e.toLowerCase())));
        }
        function c(e) {
          return e.endsWith("s") ? e.substring(0, e.length - 1) : e;
        }
        function u(e) {
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
        function l(e) {
          return btoa(String.fromCharCode(...new Uint8Array(e)));
        }
        function d(e) {
          return new Uint8Array(Array.from(atob(e)).map((e) => e.charCodeAt())).buffer;
        }
        n.r(t),
          n.d(t, {
            arrayBufferToBase64: () => l,
            base64ToArrayBuffer: () => d,
            camelCaseToReadable: () => a,
            capitalizeFirstLetter: () => s,
            getLocalDateTimeString: () => o,
            parseJwt: () => u,
            singularize: () => c,
            twoDigit: () => r,
            uuidv4: () => i
          });
      },
      17755: (e, t, n) => {
        "use strict";
        n.r(t), n.d(t, { default: () => a });
        var r = n(8081),
          o = n.n(r),
          i = n(23645),
          s = n.n(i)()(o());
        s.push([
          e.id,
          "\n/* stylelint-disable */\n.three-col-layout[data-v-0b972818] { display: grid; align-items: center; grid-template-columns: minmax(var(--15a6c1ae), 1fr) minmax(0, auto) minmax(var(--15a6c1ae), 1fr);\n}\n.three-col-layout.grow-center[data-v-0b972818] { grid-template-columns: var(--15a6c1ae) minmax(auto, var(--6863c08e)) var(--15a6c1ae);\n}\n.three-col-layout--left[data-v-0b972818] { justify-self: end;\n}\n\t/* Width 100% largely so quote can fill the width and widening the window will trigger a resize when the text has wrapped */\n.three-col-layout.grow-center .three-col-layout--center[data-v-0b972818] { width: 100%;\n}\n.three-col-layout--right[data-v-0b972818] { justify-self: start;\n}\n.three-col-layout.align-sides-outside[data-v-0b972818] .three-col-layout--left { justify-self: start;\n}\n.three-col-layout.align-sides-outside[data-v-0b972818] .three-col-layout--right { justify-self: end;\n}\n\n",
          ""
        ]);
        const a = s;
      },
      24557: (e, t, n) => {
        "use strict";
        n.r(t), n.d(t, { default: () => a });
        var r = n(8081),
          o = n.n(r),
          i = n(23645),
          s = n.n(i)()(o());
        s.push([
          e.id,
          "\n/* stylelint-disable */\n.dashboard[data-v-45b98c80] { position: absolute; inset: 0; z-index: 3; display: grid; grid-template-columns: var(--e6aaf122) minmax(auto, 1fr) var(--e6aaf122); grid-template-rows: var(--460a0c20) minmax(0, var(--3452cacf)) auto minmax(auto, 1fr) auto; overflow: hidden; transition: opacity 0.3s var(--a-curve);\n}\n.full[data-v-45b98c80] { position: absolute; inset: 0;\n}\n\n/*\ntop-left and top-right should compete equally for space but will take up more if they have proportionally more content\nHowever, top-left has minmax(auto, max-content) so that it will never grow to more than its content. This allows base metric\nTo use as much room as possible once links has grown to the fullest extent.\n */\n.top-row[data-v-45b98c80] { grid-column: 1 / -1; grid-row: 1 / span 1; display: grid; grid-template-columns: minmax(auto, max-content) auto; grid-template-rows: auto auto;\n}\n\t/* Max width fixes blowout when bookmarks overflows. min-width: 0 causes top-left and top-right to lock to 50% width each which is not ideal */\n.top-bar[data-v-45b98c80] { max-width: var(--dash-width); grid-column: 1 / -1; grid-row: 1 / span 1;\n}\n.top-left[data-v-45b98c80] { height: fit-content; grid-column: 1 / span 1; grid-row: 2 / span 1; display: flex; align-items: flex-start; min-width: 0;\n} /* fit-content is used to ensure the top-left doesn't grow to the height of the top-right */\n.top-right[data-v-45b98c80] { grid-column: 2 / span 1; grid-row: 2 / span 1; min-width: 0; display: flex; flex-direction: row-reverse;\n}\n.top-right[data-v-45b98c80] .metric-item { padding: var(--dash-vertical-margin) var(--dash-metric-side-padding) 10px;\n}\n.sidebar-left[data-v-45b98c80] { grid-column: 1 / span 1; grid-row: 2 / span 3;\n}\n.sidebar-right[data-v-45b98c80] { grid-column: -2 / span 1; grid-row: 2 / span 3;\n}\n.sidebar-left[data-v-45b98c80], .sidebar-right[data-v-45b98c80] { display: flex; flex-direction: column; width: max-content;\n}\n.center-above[data-v-45b98c80] { grid-column: 2 / span 1; grid-row: 2 / span 1;\n}\n.center[data-v-45b98c80], .center-measure[data-v-45b98c80] { grid-column: 2 / span 1; grid-row: 3 / span 1;\n}\n[data-v-45b98c80] .center-below { align-self: center; grid-column: 2 / span 1; grid-row: 4 / span 1; text-align: center; display: flex; flex-direction: column; align-items: center;\n}\n.bottom-row[data-v-45b98c80] { grid-column: 1 / -1; grid-row: 5 / span 1; align-items: end;\n}\n.bottom-left[data-v-45b98c80], .bottom-center[data-v-45b98c80], .bottom-right[data-v-45b98c80] { display: flex; align-items: flex-end;\n}\n.bottom-center[data-v-45b98c80] { flex-grow: 1;\n}\n.dash-overlay[data-v-45b98c80] { position: absolute; inset: 0; z-index: 3; background-color: rgba(0,0,0, var(--opacity-stop-4));\n}\n@media screen and (max-width: 768px) {\n\t/* Modify the three-col-layout grid to move the quote above the left and right columns */\n.bottom-row[data-v-45b98c80] { grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) !important; grid-template-rows: auto auto !important;\n}\n.bottom-row[data-v-45b98c80] .three-col-layout--left { width: 100%; grid-column: 1 / span 1; grid-row: 2 / span 1;\n}\n.bottom-row[data-v-45b98c80] .three-col-layout--center { grid-column: 1 / -1; grid-row: 1 / span 1;\n}\n.bottom-row[data-v-45b98c80] .three-col-layout--right { grid-column: 2 / span 1; grid-row: 2 / span 1;\n}\n}\n@media screen and (max-width: 450px) {\n.dashboard[data-v-45b98c80] { grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);\n}\n\t/* The pomodoro needs to be centered, but the clock should be at the top */\n.center[data-v-45b98c80] { grid-row: 2 / span 2; display: flex; justify-content: center;\n}\n.center[data-v-45b98c80] .pomodoro { align-self: flex-end;\n}\n}\n\n/* .app-dash layout overrides */\n.top-right[data-v-45b98c80] > :first-child .app-dash, .bottom-right[data-v-45b98c80] > :last-child .app-dash { padding-right: var(--dash-side-margin);\n}\n.top-right > .base-metric[data-v-45b98c80]:first-child { padding-right: calc(var(--dash-side-margin) - var(--dash-metric-side-padding));\n}\n.top-right[data-v-45b98c80]:not(.app-hover):hover .needs-hover .app-dash { opacity: 1;\n}\n.bottom-left[data-v-45b98c80] > :first-child .app-dash { padding-left: var(--dash-side-margin);\n}\n\n/* Use negative margin so that app container matches the size of the app dash content for relative positioning of the popup while keeping the padding on the app-dash element for large clickable area. */\n/* TODO: set up for other regions as needed */\n.top-left[data-v-45b98c80] { padding-left: calc(var(--dash-side-margin) - var(--app-dash-padding));\n}\n.top-left[data-v-45b98c80] .app-container:first-child { margin: 0 var(--side-padding) 0 var(--dash-side-margin);\n}\n.top-left[data-v-45b98c80] .app-container:first-child >>> .app-dash { margin: 0 calc(var(--side-padding) * -1) 0 calc(var(--dash-side-margin) * -1); padding-left: var(--dash-side-margin);\n}\n[data-v-45b98c80] .needs-hover:not(.active) .app-dash { opacity: 0; transition: opacity 0.1s var(--a-curve);\n}\n",
          ""
        ]);
        const a = s;
      },
      23645: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, o, i) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var s = {};
              if (r)
                for (var a = 0; a < this.length; a++) {
                  var c = this[a][0];
                  null != c && (s[c] = !0);
                }
              for (var u = 0; u < e.length; u++) {
                var l = [].concat(e[u]);
                (r && s[l[0]]) ||
                  (void 0 !== i &&
                    (void 0 === l[5] || (l[1] = "@layer".concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {").concat(l[1], "}")),
                    (l[5] = i)),
                  n && (l[2] ? ((l[1] = "@media ".concat(l[2], " {").concat(l[1], "}")), (l[2] = n)) : (l[2] = n)),
                  o && (l[4] ? ((l[1] = "@supports (".concat(l[4], ") {").concat(l[1], "}")), (l[4] = o)) : (l[4] = "".concat(o))),
                  t.push(l));
              }
            }),
            t
          );
        };
      },
      8081: (e) => {
        "use strict";
        e.exports = function (e) {
          return e[1];
        };
      },
      24749: (e, t, n) => {
        "use strict";
        var r, o, i;
        n.d(t, { LS: () => o, Un: () => r, XO: () => c, hg: () => a, o1: () => s, od: () => i }),
          (function (e) {
            (e[(e.Legacy = 0)] = "Legacy"), (e[(e.LinkGroup = 1)] = "LinkGroup"), (e[(e.Link = 2)] = "Link");
          })(r || (r = {})),
          (function (e) {
            (e.Tile = "tile"), (e.List = "list");
          })(o || (o = {})),
          (function (e) {
            (e.List = "list"), (e.Form = "form");
          })(i || (i = {}));
        const s = { [o.List]: `links:dash:${o.List}:mounted`, [o.Tile]: `links:dash:${o.Tile}:mounted`, base: "links:main:mounted" },
          a = "links:open",
          c = { TITLE_EMPTY: "Please enter a title", URL_EMPTY: "Please enter a URL", URL_INVALID: "Please enter a valid URL" };
      },
      77140: (e, t, n) => {
        "use strict";
        n.d(t, { H: () => o });
        var r = n(80809);
        const o = {
          tabs: {
            query: (e) => new Promise((t) => chrome.tabs.query(e, t)),
            create: (e) => new Promise((t) => chrome.tabs.create(e, t)),
            update: (e, t) => new Promise((n) => chrome.tabs.update(e, t, n)),
            group: (e) => new Promise((t) => chrome.tabs.group(e, t)),
            move: (e, t) => new Promise((n) => chrome.tabs.move(e, t, n)),
            moveToWindow: async (e, t) => {
              e && t && (await o.tabs.move(e, { windowId: t, index: -1 }));
            },
            openUrl: (e, t = !1) => (t ? o.tabs.create({ url: e, active: !1 }) : new Promise((t) => chrome.tabs.update({ url: e }, t)))
          },
          windows: {
            create: (e) => new Promise((t) => chrome.windows.create(e, t)),
            remove: (e) =>
              new Promise((t) => {
                const n = () => {
                  chrome.sessions.onChanged.removeListener(n), t();
                };
                chrome.sessions.onChanged.addListener(n), chrome.windows.remove(e, () => {});
              }),
            update: (e, t) => new Promise((n) => chrome.windows.update(e, t, n)),
            get: (e) => new Promise((t) => chrome.windows.get(e, {}, t)),
            getAll: () => new Promise((e) => chrome.windows.getAll(e))
          },
          sessions: {
            restoreWindow: (e) =>
              new Promise((t) =>
                chrome.sessions.restore(e, (e) => {
                  (null == e ? void 0 : e.window)
                    ? t(null == e ? void 0 : e.window)
                    : (null == e ? void 0 : e.tab)
                    ? chrome.windows.get(e.tab.windowId || 0, {}, t)
                    : t(void 0);
                })
              ),
            getRecentlyClosedWindowSessionIds: () =>
              new Promise((e) =>
                chrome.sessions.getRecentlyClosed({}, (t) => {
                  const n = [];
                  t.forEach((e) => {
                    var t;
                    "window" in e && (null === (t = e.window) || void 0 === t ? void 0 : t.sessionId) && n.push(e.window.sessionId);
                  }),
                    e(n);
                })
              ),
            getLastClosedSessionId: () =>
              new Promise((e) =>
                chrome.sessions.getRecentlyClosed({ maxResults: 1 }, (t) => {
                  var n, r, o, i;
                  const s =
                    (null === (r = null === (n = t[0]) || void 0 === n ? void 0 : n.window) || void 0 === r ? void 0 : r.sessionId) ||
                    (null === (i = null === (o = t[0]) || void 0 === o ? void 0 : o.tab) || void 0 === i ? void 0 : i.sessionId);
                  if (!s) throw new Error("Could not get session ID from closed window");
                  e(s);
                })
              )
          },
          permissions: {
            request: (e) => {
              const t = r.Z.getBrowser();
              return r.Z.isFirefox() ? t.permissions.request({ ...e }) : new Promise((n) => t.permissions.request(e, n));
            },
            contains: (e) => {
              const t = r.Z.getBrowser();
              return r.Z.isFirefox() ? t.permissions.contains({ ...e }) : new Promise((n) => t.permissions.contains(e, n));
            }
          },
          topSites: { get: () => new Promise((e) => chrome.topSites.get(e)) }
        };
      },
      89608: (e, t, n) => {
        "use strict";
        n.d(t, { B: () => r });
        class r {
          constructor(e) {
            (this.message = e.message), (this.contact = !!e.contact), e.type && (this.type = e.type), e.input && (this.input = e.input);
          }
        }
      },
      25659: (e, t, n) => {
        "use strict";
        n.d(t, { eU: () => f, f2: () => h });
        var r = n(24960),
          o = n(7838),
          i = n(20144),
          s = n(84315),
          a = n(70444);
        const c = { messageText: "If the problem persists, please ", linkText: "contact us." };
        class u {
          constructor({
            message: e,
            id: t = (0, s.uuidv4)(),
            error: n = !1,
            button: r,
            persist: o = n,
            closeButtonEnabled: i = o,
            contact: u = !!n && c,
            icon: l = n ? a : void 0,
            onDismiss: d
          }) {
            (this.id = t),
              (this.message = e),
              (this.persist = o),
              (this.closeButtonEnabled = i),
              l && (this.icon = l),
              n && (this.error = n),
              r && (this.button = r),
              d && (this.onDismiss = d),
              u && (this.contact = !0 === u ? c : u);
          }
        }
        const l = r.Z,
          d = (0, i.iH)([]);
        function f() {
          return d.value[0];
        }
        function p(e) {
          d.value.push(new u(e));
        }
        function h(e) {
          o.Z.sendCrossTabMessage("flashMessage:dismiss", e), g(e);
        }
        function g(e) {
          var t, n;
          const r = d.value.findIndex((t) => t.id === e);
          null === (n = null === (t = d.value[r]) || void 0 === t ? void 0 : t.onDismiss) || void 0 === n || n.call(t),
            ~r && d.value.splice(r, 1);
        }
        o.Z.$on("flashMessage", p),
          o.Z.$on("flashMessage:dismiss", h),
          o.Z.addCrossTabMessageListener("flashMessage:dismiss", g),
          l.addRecurringCrossTabMessageListener({ msgId: "flashMessage", success: p });
      },
      94119: (e, t, n) => {
        "use strict";
        var r;
        function o(e, t) {
          const n = {};
          return (
            Object.keys(t).forEach((r) => {
              ("object" == typeof t[r] ? JSON.stringify(t[r]) : t[r]) !== ("object" == typeof e[r] ? JSON.stringify(e[r]) : e[r]) &&
                (n[r] = t[r]);
            }),
            n
          );
        }
        function i(e, t) {
          const n = [],
            i = new Set();
          return (
            null == t ||
              t.forEach((t) => {
                i.add(t.id);
                const s = null == e ? void 0 : e.find((e) => e.id === t.id);
                if (s) {
                  const e = o(s, t);
                  Object.keys(e).length && n.push({ method: r.Update, id: t.id, data: e });
                } else n.push({ method: r.Create, id: t.id, data: t });
              }),
            null == e ||
              e.forEach((e) => {
                i.has(e.id) || n.push({ method: r.Delete, id: e.id });
              }),
            n
          );
        }
        n.r(t),
          n.d(t, { MutationMethod: () => r, compare: () => o, compareObjects: () => i }),
          (function (e) {
            (e.Create = "create"), (e.Update = "update"), (e.Delete = "delete");
          })(r || (r = {}));
      },
      30936: (e, t, n) => {
        "use strict";
        n.r(t), n.d(t, { default: () => o });
        var r = n(20144);
        function o({ store: e }) {
          let t = {},
            n = !1;
          if (!e.addMockPlugin) return {};
          let o = () => {};
          if ("refresh" in e) {
            const t = e.refresh;
            "function" == typeof t && (o = t);
          }
          return {
            addMockData(r) {
              (t = e.data),
                e.$patch((e) => {
                  (e.data = r), (e.loaded = !0), (n = !0);
                });
            },
            clearMockData() {
              e.$patch((e) => {
                (e.data = t), (n = !1);
              });
            },
            refresh() {
              n
                ? (Object.values(t).forEach((e) => {
                    e.id && r.ZP.set(t, e.id, e);
                  }),
                  (e.loaded = !0),
                  (e.loading = !1))
                : o();
            }
          };
        }
      },
      68013: (e, t, n) => {
        "use strict";
        n.r(t);
      },
      96046: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => s });
        var r = n(20144),
          o = n(15106);
        const i = r.ZP.observable({
          experiments: [],
          visibilityOverride: o.Z,
          tabFocused: document.hasFocus(),
          tabVisible: "visible" === document.visibilityState,
          appsReady: !1,
          allowAwaitingAppsReadySmoothReflow: !1,
          dashboardOverlayActive: !1,
          windowDimensions: { height: window.innerHeight, width: window.innerWidth }
        });
        (0, r.YP)(
          () => i.appsReady,
          (e) => {
            e
              ? setTimeout(() => {
                  i.allowAwaitingAppsReadySmoothReflow = !0;
                }, 500)
              : (i.allowAwaitingAppsReadySmoothReflow = !1);
          }
        ),
          window.addEventListener("resize", () => {
            (i.windowDimensions.height = window.innerHeight), (i.windowDimensions.width = window.innerWidth);
          }),
          window.addEventListener("focus", () => {
            i.tabFocused = !0;
          }),
          window.addEventListener("blur", () => {
            i.tabFocused = !1;
          }),
          window.addEventListener("visibilitychange", () => {
            i.tabVisible = "visible" === document.visibilityState;
          });
        const s = i;
      },
      35597: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => o });
        var r = n(48626);
        const o = new (class {
          constructor(e) {
            (this.db = e), (this.listeners = {});
          }
          async saveServerTimestamps(e) {
            const t = {};
            Object.entries(e).forEach(([e, n]) => {
              t[e] = { server: n };
            });
            const n = await this.db.bulkPatch(t);
            Object.entries(n).forEach(([e, t]) => {
              var n, r;
              if (!t) return;
              const { newValue: o, previousValue: i } = t;
              (!(null == i ? void 0 : i.server) || ((null == o ? void 0 : o.server) && (null == o ? void 0 : o.server) > i.server)) &&
                (null === (r = (n = this.listeners)[e]) || void 0 === r || r.call(n));
            });
          }
          addUpdateListener(e, t) {
            this.listeners[e] = t;
          }
          async requiresSync(e) {
            const t = await r.Z.get(e);
            return !t || !t.cache || !t.server || t.cache < t.server;
          }
        })(r.Z);
      },
      63139: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => o });
        var r = n(20144);
        const o = new (class {
          constructor() {
            (this._stackRef = (0, r.iH)([])), (this._lockedRef = (0, r.iH)(""));
          }
          get stack() {
            return this._stackRef.value;
          }
          get locked() {
            return this._lockedRef.value;
          }
          set locked(e) {
            this._lockedRef.value = e;
          }
          add(e, t = !1) {
            this.remove(e), this.stack.push(e), t && (this.locked = e);
          }
          remove(e) {
            const t = this.stack.indexOf(e);
            -1 !== t && this.stack.splice(t, 1), e === this.locked && (this.locked = "");
          }
          isOnTop(e) {
            return this.locked ? this.locked === e : this.stack.indexOf(e) === this.stack.length - 1;
          }
        })();
      },
      99150: (e, t, n) => {
        "use strict";
        n.d(t, { ZP: () => a });
        const r = "store",
          o = "_key",
          i = "_value";
        function s(e) {
          return "object" == typeof e && null !== e && o in e && i in e;
        }
        class a {
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
                  n.result.createObjectStore(r, { keyPath: o });
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
              s = { [o]: e, [i]: r };
            return await this.transaction("readwrite", (e) => e.put(s)), { newValue: r, previousValue: n };
          }
          set(e, t) {
            const n = { [o]: e, [i]: t };
            return this.transaction("readwrite", (e) => e.put(n));
          }
          async get(e) {
            const t = await this.transaction("readonly", (t) => t.get(e));
            return t && s(t) ? t._value : null;
          }
          async transaction(e, t) {
            const n = await this.db;
            return new Promise((o, i) => {
              const a = n.transaction([r], e);
              a.onerror = () => i(c.error);
              const c = t(a.objectStore(r));
              c.onsuccess = () => {
                const e = c.result;
                if (
                  !(function (e) {
                    return void 0 === e || "string" == typeof e || s(e);
                  })(e)
                )
                  throw new Error("Transaction result does not match schema (does not contain a property matching _key)");
                o(e);
              };
            });
          }
        }
      },
      48626: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => r });
        const r = new (n(99150).ZP)("timestamp", 1);
      },
      35174: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => u, y: () => c });
        var r = n(52861),
          o = n(42935),
          i = n(80809),
          s = n(89608);
        const a = r.Z.create({ timeout: 1e5 });
        a.interceptors.request.use(
          function (e) {
            const t = {
                "X-Momentum-Version": m.globals.version,
                "X-Momentum-ClientDate": i.Z.getLocalDateTimeString(),
                "X-Momentum-TabId": o.Z
              },
              n = localStorage.getItem("token"),
              r = localStorage.getItem("client_uuid"),
              s = localStorage.getItem("activeTags");
            if (
              (n && (t.Authorization = "Bearer " + n),
              r && (t["X-Momentum-ClientId"] = r),
              s && (t["X-Momentum-Tags"] = s),
              m.conditionalFeatures.featureEnabled("allowoptions"))
            ) {
              const e = localStorage.getItem("X-Momentum-Options");
              e && (t["X-Momentum-Options"] = e);
            }
            return (e.baseURL = m.globals.urlRootApi), e.headers.set(t), e;
          },
          () => Promise.reject()
        );
        const c = (e, t) => {
            if (r.Z.isAxiosError(e)) {
              const { type: n, detail: r } = i.Z.getOptionalNestedProperty(e, "response.data") || {},
                o = i.Z.getOptionalNestedProperty(e, "response.status");
              if ([429, 504].includes(o) && t[429]) return new s.B({ message: t[429] });
              if (n && r) return new s.B({ type: n, message: r });
            }
            return new s.B({ message: t.default });
          },
          u = a;
      },
      84888: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => d });
        var r = function () {
          var e = this,
            t = e._self._c;
          return t(
            "div",
            {
              ref: "container",
              staticClass: "three-col-layout",
              class: { "grow-center": e.growCenter, "align-sides-outside": e.alignSidesOutside }
            },
            [
              t(
                "div",
                {
                  directives: [{ name: "resize-sensor", rawName: "v-resize-sensor", value: e.onResize, expression: "onResize" }],
                  ref: "left",
                  staticClass: "three-col-layout--left"
                },
                [e._t("left")],
                2
              ),
              e._v(" "),
              t("div", { ref: "center", staticClass: "three-col-layout--center" }, [e._t("center")], 2),
              e._v(" "),
              t(
                "div",
                {
                  directives: [{ name: "resize-sensor", rawName: "v-resize-sensor", value: e.onResize, expression: "onResize" }],
                  ref: "right",
                  staticClass: "three-col-layout--right"
                },
                [e._t("right")],
                2
              )
            ]
          );
        };
        r._withStripped = !0;
        var o = n(61706),
          i = n(20144);
        const s = { left: "left", right: "right", auto: "auto" },
          a = {
            name: "ThreeColLayout",
            doNotWaitForMount: !0,
            directives: { ResizeSensor: o.Z },
            props: {
              matchWidth: { type: String, default: s.auto, validator: (e) => Object.keys(s).some((t) => e === t) },
              growCenter: { type: Boolean, default: !1 },
              alignSidesOutside: { type: Boolean, default: !1 },
              maxCenterGrow: { type: String, default: "auto" }
            },
            unreactive: () => ({ mutationObserver: null }),
            data: () => ({ leftRightWidth: 0 }),
            methods: {
              onResize() {
                var e, t;
                const n = (null === (e = this.$refs.left) || void 0 === e ? void 0 : e.offsetWidth) ?? 0,
                  r = (null === (t = this.$refs.right) || void 0 === t ? void 0 : t.offsetWidth) ?? 0;
                this.matchWidth === s.left && (this.leftRightWidth = n),
                  this.matchWidth === s.right ? (this.leftRightWidth = r) : (this.leftRightWidth = n > r ? n : r);
              }
            }
          },
          c = () => {
            (0, i.sj)((e, t) => ({ "15a6c1ae": e.leftRightWidth + "px", "6863c08e": e.maxCenterGrow }));
          },
          u = a.setup;
        a.setup = u ? (e, t) => (c(), u(e, t)) : c;
        const l = a;
        n(13198);
        const d = (0, n(51900).Z)(l, r, [], !1, null, "0b972818", null).exports;
      },
      51900: (e, t, n) => {
        "use strict";
        function r(e, t, n, r, o, i, s, a) {
          var c,
            u = "function" == typeof e ? e.options : e;
          if (
            (t && ((u.render = t), (u.staticRenderFns = n), (u._compiled = !0)),
            r && (u.functional = !0),
            i && (u._scopeId = "data-v-" + i),
            s
              ? ((c = function (e) {
                  (e =
                    e || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                    "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                    (e = __VUE_SSR_CONTEXT__),
                    o && o.call(this, e),
                    e && e._registeredComponents && e._registeredComponents.add(s);
                }),
                (u._ssrRegister = c))
              : o &&
                (c = a
                  ? function () {
                      o.call(this, (u.functional ? this.parent : this).$root.$options.shadowRoot);
                    }
                  : o),
            c)
          )
            if (u.functional) {
              u._injectStyles = c;
              var l = u.render;
              u.render = function (e, t) {
                return c.call(t), l(e, t);
              };
            } else {
              var d = u.beforeCreate;
              u.beforeCreate = d ? [].concat(d, c) : [c];
            }
          return { exports: e, options: u };
        }
        n.d(t, { Z: () => r });
      },
      13198: (e, t, n) => {
        var r = n(17755);
        r.__esModule && (r = r.default),
          "string" == typeof r && (r = [[e.id, r, ""]]),
          r.locals && (e.exports = r.locals),
          (0, n(45346).Z)("7ba32201", r, !1, { ssrId: !0 });
      },
      34050: (e, t, n) => {
        var r = n(24557);
        r.__esModule && (r = r.default),
          "string" == typeof r && (r = [[e.id, r, ""]]),
          r.locals && (e.exports = r.locals),
          (0, n(45346).Z)("53aa786d", r, !1, { ssrId: !0 });
      },
      45346: (e, t, n) => {
        "use strict";
        function r(e, t) {
          for (var n = [], r = {}, o = 0; o < t.length; o++) {
            var i = t[o],
              s = i[0],
              a = { id: e + ":" + o, css: i[1], media: i[2], sourceMap: i[3] };
            r[s] ? r[s].parts.push(a) : n.push((r[s] = { id: s, parts: [a] }));
          }
          return n;
        }
        n.d(t, { Z: () => h });
        var o = "undefined" != typeof document;
        if ("undefined" != typeof DEBUG && DEBUG && !o)
          throw new Error(
            "vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
          );
        var i = {},
          s = o && (document.head || document.getElementsByTagName("head")[0]),
          a = null,
          c = 0,
          u = !1,
          l = function () {},
          d = null,
          f = "data-vue-ssr-id",
          p = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
        function h(e, t, n, o) {
          (u = n), (d = o || {});
          var s = r(e, t);
          return (
            g(s),
            function (t) {
              for (var n = [], o = 0; o < s.length; o++) {
                var a = s[o];
                (c = i[a.id]).refs--, n.push(c);
              }
              for (t ? g((s = r(e, t))) : (s = []), o = 0; o < n.length; o++) {
                var c;
                if (0 === (c = n[o]).refs) {
                  for (var u = 0; u < c.parts.length; u++) c.parts[u]();
                  delete i[c.id];
                }
              }
            }
          );
        }
        function g(e) {
          for (var t = 0; t < e.length; t++) {
            var n = e[t],
              r = i[n.id];
            if (r) {
              r.refs++;
              for (var o = 0; o < r.parts.length; o++) r.parts[o](n.parts[o]);
              for (; o < n.parts.length; o++) r.parts.push(v(n.parts[o]));
              r.parts.length > n.parts.length && (r.parts.length = n.parts.length);
            } else {
              var s = [];
              for (o = 0; o < n.parts.length; o++) s.push(v(n.parts[o]));
              i[n.id] = { id: n.id, refs: 1, parts: s };
            }
          }
        }
        function m() {
          var e = document.createElement("style");
          return (e.type = "text/css"), s.appendChild(e), e;
        }
        function v(e) {
          var t,
            n,
            r = document.querySelector("style[" + f + '~="' + e.id + '"]');
          if (r) {
            if (u) return l;
            r.parentNode.removeChild(r);
          }
          if (p) {
            var o = c++;
            (r = a || (a = m())), (t = b.bind(null, r, o, !1)), (n = b.bind(null, r, o, !0));
          } else
            (r = m()),
              (t = w.bind(null, r)),
              (n = function () {
                r.parentNode.removeChild(r);
              });
          return (
            t(e),
            function (r) {
              if (r) {
                if (r.css === e.css && r.media === e.media && r.sourceMap === e.sourceMap) return;
                t((e = r));
              } else n();
            }
          );
        }
        var _,
          y =
            ((_ = []),
            function (e, t) {
              return (_[e] = t), _.filter(Boolean).join("\n");
            });
        function b(e, t, n, r) {
          var o = n ? "" : r.css;
          if (e.styleSheet) e.styleSheet.cssText = y(t, o);
          else {
            var i = document.createTextNode(o),
              s = e.childNodes;
            s[t] && e.removeChild(s[t]), s.length ? e.insertBefore(i, s[t]) : e.appendChild(i);
          }
        }
        function w(e, t) {
          var n = t.css,
            r = t.media,
            o = t.sourceMap;
          if (
            (r && e.setAttribute("media", r),
            d.ssrId && e.setAttribute(f, t.id),
            o &&
              ((n += "\n/*# sourceURL=" + o.sources[0] + " */"),
              (n +=
                "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */")),
            e.styleSheet)
          )
            e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        }
      },
      20144: (e, t, n) => {
        "use strict";
        n.d(t, {
          Ah: () => dn,
          B: () => st,
          BK: () => Ge,
          EB: () => ct,
          FN: () => le,
          Fl: () => Qe,
          IU: () => Be,
          PG: () => De,
          SU: () => We,
          Vh: () => Je,
          Xl: () => He,
          Y3: () => an,
          YP: () => rt,
          ZP: () => br,
          aZ: () => fn,
          bv: () => ln,
          dq: () => qe,
          f3: () => ut,
          iH: () => ze,
          nZ: () => at,
          qj: () => Le,
          sj: () => cn,
          t8: () => Pe
        });
        var r = Object.freeze({}),
          o = Array.isArray;
        function i(e) {
          return null == e;
        }
        function s(e) {
          return null != e;
        }
        function a(e) {
          return !0 === e;
        }
        function c(e) {
          return "string" == typeof e || "number" == typeof e || "symbol" == typeof e || "boolean" == typeof e;
        }
        function u(e) {
          return "function" == typeof e;
        }
        function l(e) {
          return null !== e && "object" == typeof e;
        }
        var d = Object.prototype.toString;
        function f(e) {
          return "[object Object]" === d.call(e);
        }
        function p(e) {
          var t = parseFloat(String(e));
          return t >= 0 && Math.floor(t) === t && isFinite(e);
        }
        function h(e) {
          return s(e) && "function" == typeof e.then && "function" == typeof e.catch;
        }
        function g(e) {
          return null == e ? "" : Array.isArray(e) || (f(e) && e.toString === d) ? JSON.stringify(e, null, 2) : String(e);
        }
        function m(e) {
          var t = parseFloat(e);
          return isNaN(t) ? e : t;
        }
        function v(e, t) {
          for (var n = Object.create(null), r = e.split(","), o = 0; o < r.length; o++) n[r[o]] = !0;
          return t
            ? function (e) {
                return n[e.toLowerCase()];
              }
            : function (e) {
                return n[e];
              };
        }
        v("slot,component", !0);
        var _ = v("key,ref,slot,slot-scope,is");
        function y(e, t) {
          var n = e.length;
          if (n) {
            if (t === e[n - 1]) return void (e.length = n - 1);
            var r = e.indexOf(t);
            if (r > -1) return e.splice(r, 1);
          }
        }
        var b = Object.prototype.hasOwnProperty;
        function w(e, t) {
          return b.call(e, t);
        }
        function S(e) {
          var t = Object.create(null);
          return function (n) {
            return t[n] || (t[n] = e(n));
          };
        }
        var k = /-(\w)/g,
          O = S(function (e) {
            return e.replace(k, function (e, t) {
              return t ? t.toUpperCase() : "";
            });
          }),
          E = S(function (e) {
            return e.charAt(0).toUpperCase() + e.slice(1);
          }),
          T = /\B([A-Z])/g,
          C = S(function (e) {
            return e.replace(T, "-$1").toLowerCase();
          }),
          x = Function.prototype.bind
            ? function (e, t) {
                return e.bind(t);
              }
            : function (e, t) {
                function n(n) {
                  var r = arguments.length;
                  return r ? (r > 1 ? e.apply(t, arguments) : e.call(t, n)) : e.call(t);
                }
                return (n._length = e.length), n;
              };
        function I(e, t) {
          t = t || 0;
          for (var n = e.length - t, r = new Array(n); n--; ) r[n] = e[n + t];
          return r;
        }
        function j(e, t) {
          for (var n in t) e[n] = t[n];
          return e;
        }
        function A(e) {
          for (var t = {}, n = 0; n < e.length; n++) e[n] && j(t, e[n]);
          return t;
        }
        function P(e, t, n) {}
        var R = function (e, t, n) {
            return !1;
          },
          M = function (e) {
            return e;
          };
        function L(e, t) {
          if (e === t) return !0;
          var n = l(e),
            r = l(t);
          if (!n || !r) return !n && !r && String(e) === String(t);
          try {
            var o = Array.isArray(e),
              i = Array.isArray(t);
            if (o && i)
              return (
                e.length === t.length &&
                e.every(function (e, n) {
                  return L(e, t[n]);
                })
              );
            if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
            if (o || i) return !1;
            var s = Object.keys(e),
              a = Object.keys(t);
            return (
              s.length === a.length &&
              s.every(function (n) {
                return L(e[n], t[n]);
              })
            );
          } catch (e) {
            return !1;
          }
        }
        function N(e, t) {
          for (var n = 0; n < e.length; n++) if (L(e[n], t)) return n;
          return -1;
        }
        function $(e) {
          var t = !1;
          return function () {
            t || ((t = !0), e.apply(this, arguments));
          };
        }
        function D(e, t) {
          return e === t ? 0 === e && 1 / e != 1 / t : e == e || t == t;
        }
        var F = "data-server-rendered",
          U = ["component", "directive", "filter"],
          B = [
            "beforeCreate",
            "created",
            "beforeMount",
            "mounted",
            "beforeUpdate",
            "updated",
            "beforeDestroy",
            "destroyed",
            "activated",
            "deactivated",
            "errorCaptured",
            "serverPrefetch",
            "renderTracked",
            "renderTriggered"
          ],
          H = {
            optionMergeStrategies: Object.create(null),
            silent: !1,
            productionTip: !1,
            devtools: !1,
            performance: !1,
            errorHandler: null,
            warnHandler: null,
            ignoredElements: [],
            keyCodes: Object.create(null),
            isReservedTag: R,
            isReservedAttr: R,
            isUnknownElement: R,
            getTagNamespace: P,
            parsePlatformTagName: M,
            mustUseProp: R,
            async: !0,
            _lifecycleHooks: B
          };
        function V(e) {
          var t = (e + "").charCodeAt(0);
          return 36 === t || 95 === t;
        }
        function q(e, t, n, r) {
          Object.defineProperty(e, t, { value: n, enumerable: !!r, writable: !0, configurable: !0 });
        }
        var z = new RegExp(
            "[^".concat(
              /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/
                .source,
              ".$_\\d]"
            )
          ),
          W = "__proto__" in {},
          Z = "undefined" != typeof window,
          G = Z && window.navigator.userAgent.toLowerCase(),
          J = G && /msie|trident/.test(G),
          Q = G && G.indexOf("msie 9.0") > 0,
          Y = G && G.indexOf("edge/") > 0;
        G && G.indexOf("android");
        var X = G && /iphone|ipad|ipod|ios/.test(G);
        G && /chrome\/\d+/.test(G), G && /phantomjs/.test(G);
        var K,
          ee = G && G.match(/firefox\/(\d+)/),
          te = {}.watch,
          ne = !1;
        if (Z)
          try {
            var re = {};
            Object.defineProperty(re, "passive", {
              get: function () {
                ne = !0;
              }
            }),
              window.addEventListener("test-passive", null, re);
          } catch (e) {}
        var oe = function () {
            return void 0 === K && (K = !Z && "undefined" != typeof global && global.process && "server" === global.process.env.VUE_ENV), K;
          },
          ie = Z && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
        function se(e) {
          return "function" == typeof e && /native code/.test(e.toString());
        }
        var ae,
          ce = "undefined" != typeof Symbol && se(Symbol) && "undefined" != typeof Reflect && se(Reflect.ownKeys);
        ae =
          "undefined" != typeof Set && se(Set)
            ? Set
            : (function () {
                function e() {
                  this.set = Object.create(null);
                }
                return (
                  (e.prototype.has = function (e) {
                    return !0 === this.set[e];
                  }),
                  (e.prototype.add = function (e) {
                    this.set[e] = !0;
                  }),
                  (e.prototype.clear = function () {
                    this.set = Object.create(null);
                  }),
                  e
                );
              })();
        var ue = null;
        function le() {
          return ue && { proxy: ue };
        }
        function de(e) {
          void 0 === e && (e = null), e || (ue && ue._scope.off()), (ue = e), e && e._scope.on();
        }
        var fe = (function () {
            function e(e, t, n, r, o, i, s, a) {
              (this.tag = e),
                (this.data = t),
                (this.children = n),
                (this.text = r),
                (this.elm = o),
                (this.ns = void 0),
                (this.context = i),
                (this.fnContext = void 0),
                (this.fnOptions = void 0),
                (this.fnScopeId = void 0),
                (this.key = t && t.key),
                (this.componentOptions = s),
                (this.componentInstance = void 0),
                (this.parent = void 0),
                (this.raw = !1),
                (this.isStatic = !1),
                (this.isRootInsert = !0),
                (this.isComment = !1),
                (this.isCloned = !1),
                (this.isOnce = !1),
                (this.asyncFactory = a),
                (this.asyncMeta = void 0),
                (this.isAsyncPlaceholder = !1);
            }
            return (
              Object.defineProperty(e.prototype, "child", {
                get: function () {
                  return this.componentInstance;
                },
                enumerable: !1,
                configurable: !0
              }),
              e
            );
          })(),
          pe = function (e) {
            void 0 === e && (e = "");
            var t = new fe();
            return (t.text = e), (t.isComment = !0), t;
          };
        function he(e) {
          return new fe(void 0, void 0, void 0, String(e));
        }
        function ge(e) {
          var t = new fe(e.tag, e.data, e.children && e.children.slice(), e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
          return (
            (t.ns = e.ns),
            (t.isStatic = e.isStatic),
            (t.key = e.key),
            (t.isComment = e.isComment),
            (t.fnContext = e.fnContext),
            (t.fnOptions = e.fnOptions),
            (t.fnScopeId = e.fnScopeId),
            (t.asyncMeta = e.asyncMeta),
            (t.isCloned = !0),
            t
          );
        }
        var me = 0,
          ve = [],
          _e = (function () {
            function e() {
              (this._pending = !1), (this.id = me++), (this.subs = []);
            }
            return (
              (e.prototype.addSub = function (e) {
                this.subs.push(e);
              }),
              (e.prototype.removeSub = function (e) {
                (this.subs[this.subs.indexOf(e)] = null), this._pending || ((this._pending = !0), ve.push(this));
              }),
              (e.prototype.depend = function (t) {
                e.target && e.target.addDep(this);
              }),
              (e.prototype.notify = function (e) {
                for (
                  var t = this.subs.filter(function (e) {
                      return e;
                    }),
                    n = 0,
                    r = t.length;
                  n < r;
                  n++
                )
                  t[n].update();
              }),
              e
            );
          })();
        _e.target = null;
        var ye = [];
        function be(e) {
          ye.push(e), (_e.target = e);
        }
        function we() {
          ye.pop(), (_e.target = ye[ye.length - 1]);
        }
        var Se = Array.prototype,
          ke = Object.create(Se);
        ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (e) {
          var t = Se[e];
          q(ke, e, function () {
            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
            var o,
              i = t.apply(this, n),
              s = this.__ob__;
            switch (e) {
              case "push":
              case "unshift":
                o = n;
                break;
              case "splice":
                o = n.slice(2);
            }
            return o && s.observeArray(o), s.dep.notify(), i;
          });
        });
        var Oe = Object.getOwnPropertyNames(ke),
          Ee = {},
          Te = !0;
        function Ce(e) {
          Te = e;
        }
        var xe = { notify: P, depend: P, addSub: P, removeSub: P },
          Ie = (function () {
            function e(e, t, n) {
              if (
                (void 0 === t && (t = !1),
                void 0 === n && (n = !1),
                (this.value = e),
                (this.shallow = t),
                (this.mock = n),
                (this.dep = n ? xe : new _e()),
                (this.vmCount = 0),
                q(e, "__ob__", this),
                o(e))
              ) {
                if (!n)
                  if (W) e.__proto__ = ke;
                  else for (var r = 0, i = Oe.length; r < i; r++) q(e, (a = Oe[r]), ke[a]);
                t || this.observeArray(e);
              } else {
                var s = Object.keys(e);
                for (r = 0; r < s.length; r++) {
                  var a;
                  Ae(e, (a = s[r]), Ee, void 0, t, n);
                }
              }
            }
            return (
              (e.prototype.observeArray = function (e) {
                for (var t = 0, n = e.length; t < n; t++) je(e[t], !1, this.mock);
              }),
              e
            );
          })();
        function je(e, t, n) {
          return e && w(e, "__ob__") && e.__ob__ instanceof Ie
            ? e.__ob__
            : !Te || (!n && oe()) || (!o(e) && !f(e)) || !Object.isExtensible(e) || e.__v_skip || qe(e) || e instanceof fe
            ? void 0
            : new Ie(e, t, n);
        }
        function Ae(e, t, n, r, i, s) {
          var a = new _e(),
            c = Object.getOwnPropertyDescriptor(e, t);
          if (!c || !1 !== c.configurable) {
            var u = c && c.get,
              l = c && c.set;
            (u && !l) || (n !== Ee && 2 !== arguments.length) || (n = e[t]);
            var d = !i && je(n, !1, s);
            return (
              Object.defineProperty(e, t, {
                enumerable: !0,
                configurable: !0,
                get: function () {
                  var t = u ? u.call(e) : n;
                  return _e.target && (a.depend(), d && (d.dep.depend(), o(t) && Me(t))), qe(t) && !i ? t.value : t;
                },
                set: function (t) {
                  var r = u ? u.call(e) : n;
                  if (D(r, t)) {
                    if (l) l.call(e, t);
                    else {
                      if (u) return;
                      if (!i && qe(r) && !qe(t)) return void (r.value = t);
                      n = t;
                    }
                    (d = !i && je(t, !1, s)), a.notify();
                  }
                }
              }),
              a
            );
          }
        }
        function Pe(e, t, n) {
          if (!Ue(e)) {
            var r = e.__ob__;
            return o(e) && p(t)
              ? ((e.length = Math.max(e.length, t)), e.splice(t, 1, n), r && !r.shallow && r.mock && je(n, !1, !0), n)
              : t in e && !(t in Object.prototype)
              ? ((e[t] = n), n)
              : e._isVue || (r && r.vmCount)
              ? n
              : r
              ? (Ae(r.value, t, n, void 0, r.shallow, r.mock), r.dep.notify(), n)
              : ((e[t] = n), n);
          }
        }
        function Re(e, t) {
          if (o(e) && p(t)) e.splice(t, 1);
          else {
            var n = e.__ob__;
            e._isVue || (n && n.vmCount) || Ue(e) || (w(e, t) && (delete e[t], n && n.dep.notify()));
          }
        }
        function Me(e) {
          for (var t = void 0, n = 0, r = e.length; n < r; n++) (t = e[n]) && t.__ob__ && t.__ob__.dep.depend(), o(t) && Me(t);
        }
        function Le(e) {
          return $e(e, !1), e;
        }
        function Ne(e) {
          return $e(e, !0), q(e, "__v_isShallow", !0), e;
        }
        function $e(e, t) {
          Ue(e) || je(e, t, oe());
        }
        function De(e) {
          return Ue(e) ? De(e.__v_raw) : !(!e || !e.__ob__);
        }
        function Fe(e) {
          return !(!e || !e.__v_isShallow);
        }
        function Ue(e) {
          return !(!e || !e.__v_isReadonly);
        }
        function Be(e) {
          var t = e && e.__v_raw;
          return t ? Be(t) : e;
        }
        function He(e) {
          return Object.isExtensible(e) && q(e, "__v_skip", !0), e;
        }
        var Ve = "__v_isRef";
        function qe(e) {
          return !(!e || !0 !== e.__v_isRef);
        }
        function ze(e) {
          return (function (e, t) {
            if (qe(e)) return e;
            var n = {};
            return q(n, Ve, !0), q(n, "__v_isShallow", t), q(n, "dep", Ae(n, "value", e, null, t, oe())), n;
          })(e, !1);
        }
        function We(e) {
          return qe(e) ? e.value : e;
        }
        function Ze(e, t, n) {
          Object.defineProperty(e, n, {
            enumerable: !0,
            configurable: !0,
            get: function () {
              var e = t[n];
              if (qe(e)) return e.value;
              var r = e && e.__ob__;
              return r && r.dep.depend(), e;
            },
            set: function (e) {
              var r = t[n];
              qe(r) && !qe(e) ? (r.value = e) : (t[n] = e);
            }
          });
        }
        function Ge(e) {
          var t = o(e) ? new Array(e.length) : {};
          for (var n in e) t[n] = Je(e, n);
          return t;
        }
        function Je(e, t, n) {
          var r = e[t];
          if (qe(r)) return r;
          var o = {
            get value() {
              var r = e[t];
              return void 0 === r ? n : r;
            },
            set value(n) {
              e[t] = n;
            }
          };
          return q(o, Ve, !0), o;
        }
        function Qe(e, t) {
          var n,
            r,
            o = u(e);
          o ? ((n = e), (r = P)) : ((n = e.get), (r = e.set));
          var i = oe() ? null : new _n(ue, n, P, { lazy: !0 }),
            s = {
              effect: i,
              get value() {
                return i ? (i.dirty && i.evaluate(), _e.target && i.depend(), i.value) : n();
              },
              set value(e) {
                r(e);
              }
            };
          return q(s, Ve, !0), q(s, "__v_isReadonly", o), s;
        }
        var Ye,
          Xe = "watcher",
          Ke = "".concat(Xe, " callback"),
          et = "".concat(Xe, " getter"),
          tt = "".concat(Xe, " cleanup"),
          nt = {};
        function rt(e, t, n) {
          return ot(e, t, n);
        }
        function ot(e, t, n) {
          var i = void 0 === n ? r : n,
            s = i.immediate,
            a = i.deep,
            c = i.flush,
            l = void 0 === c ? "pre" : c;
          i.onTrack, i.onTrigger;
          var d,
            f,
            p = ue,
            h = function (e, t, n) {
              return void 0 === n && (n = null), Gt(e, null, n, p, t);
            },
            g = !1,
            m = !1;
          if (
            (qe(e)
              ? ((d = function () {
                  return e.value;
                }),
                (g = Fe(e)))
              : De(e)
              ? ((d = function () {
                  return e.__ob__.dep.depend(), e;
                }),
                (a = !0))
              : o(e)
              ? ((m = !0),
                (g = e.some(function (e) {
                  return De(e) || Fe(e);
                })),
                (d = function () {
                  return e.map(function (e) {
                    return qe(e) ? e.value : De(e) ? hn(e) : u(e) ? h(e, et) : void 0;
                  });
                }))
              : (d = u(e)
                  ? t
                    ? function () {
                        return h(e, et);
                      }
                    : function () {
                        if (!p || !p._isDestroyed) return f && f(), h(e, Xe, [_]);
                      }
                  : P),
            t && a)
          ) {
            var v = d;
            d = function () {
              return hn(v());
            };
          }
          var _ = function (e) {
            f = y.onStop = function () {
              h(e, tt);
            };
          };
          if (oe()) return (_ = P), t ? s && h(t, Ke, [d(), m ? [] : void 0, _]) : d(), P;
          var y = new _n(ue, d, P, { lazy: !0 });
          y.noRecurse = !t;
          var b = m ? [] : nt;
          return (
            (y.run = function () {
              if (y.active)
                if (t) {
                  var e = y.get();
                  (a ||
                    g ||
                    (m
                      ? e.some(function (e, t) {
                          return D(e, b[t]);
                        })
                      : D(e, b))) &&
                    (f && f(), h(t, Ke, [e, b === nt ? void 0 : b, _]), (b = e));
                } else y.get();
            }),
            "sync" === l
              ? (y.update = y.run)
              : "post" === l
              ? ((y.post = !0),
                (y.update = function () {
                  return Un(y);
                }))
              : (y.update = function () {
                  if (p && p === ue && !p._isMounted) {
                    var e = p._preWatchers || (p._preWatchers = []);
                    e.indexOf(y) < 0 && e.push(y);
                  } else Un(y);
                }),
            t
              ? s
                ? y.run()
                : (b = y.get())
              : "post" === l && p
              ? p.$once("hook:mounted", function () {
                  return y.get();
                })
              : y.get(),
            function () {
              y.teardown();
            }
          );
        }
        var it = (function () {
          function e(e) {
            void 0 === e && (e = !1),
              (this.detached = e),
              (this.active = !0),
              (this.effects = []),
              (this.cleanups = []),
              (this.parent = Ye),
              !e && Ye && (this.index = (Ye.scopes || (Ye.scopes = [])).push(this) - 1);
          }
          return (
            (e.prototype.run = function (e) {
              if (this.active) {
                var t = Ye;
                try {
                  return (Ye = this), e();
                } finally {
                  Ye = t;
                }
              }
            }),
            (e.prototype.on = function () {
              Ye = this;
            }),
            (e.prototype.off = function () {
              Ye = this.parent;
            }),
            (e.prototype.stop = function (e) {
              if (this.active) {
                var t = void 0,
                  n = void 0;
                for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].teardown();
                for (t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
                if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].stop(!0);
                if (!this.detached && this.parent && !e) {
                  var r = this.parent.scopes.pop();
                  r && r !== this && ((this.parent.scopes[this.index] = r), (r.index = this.index));
                }
                (this.parent = void 0), (this.active = !1);
              }
            }),
            e
          );
        })();
        function st(e) {
          return new it(e);
        }
        function at() {
          return Ye;
        }
        function ct(e) {
          Ye && Ye.cleanups.push(e);
        }
        function ut(e, t, n) {
          void 0 === n && (n = !1);
          var r = ue;
          if (r) {
            var o = r.$parent && r.$parent._provided;
            if (o && e in o) return o[e];
            if (arguments.length > 1) return n && u(t) ? t.call(r) : t;
          }
        }
        var lt = S(function (e) {
          var t = "&" === e.charAt(0),
            n = "~" === (e = t ? e.slice(1) : e).charAt(0),
            r = "!" === (e = n ? e.slice(1) : e).charAt(0);
          return { name: (e = r ? e.slice(1) : e), once: n, capture: r, passive: t };
        });
        function dt(e, t) {
          function n() {
            var e = n.fns;
            if (!o(e)) return Gt(e, null, arguments, t, "v-on handler");
            for (var r = e.slice(), i = 0; i < r.length; i++) Gt(r[i], null, arguments, t, "v-on handler");
          }
          return (n.fns = e), n;
        }
        function ft(e, t, n, r, o, s) {
          var c, u, l, d;
          for (c in e)
            (u = e[c]),
              (l = t[c]),
              (d = lt(c)),
              i(u) ||
                (i(l)
                  ? (i(u.fns) && (u = e[c] = dt(u, s)),
                    a(d.once) && (u = e[c] = o(d.name, u, d.capture)),
                    n(d.name, u, d.capture, d.passive, d.params))
                  : u !== l && ((l.fns = u), (e[c] = l)));
          for (c in t) i(e[c]) && r((d = lt(c)).name, t[c], d.capture);
        }
        function pt(e, t, n) {
          var r;
          e instanceof fe && (e = e.data.hook || (e.data.hook = {}));
          var o = e[t];
          function c() {
            n.apply(this, arguments), y(r.fns, c);
          }
          i(o) ? (r = dt([c])) : s(o.fns) && a(o.merged) ? (r = o).fns.push(c) : (r = dt([o, c])), (r.merged = !0), (e[t] = r);
        }
        function ht(e, t, n, r, o) {
          if (s(t)) {
            if (w(t, n)) return (e[n] = t[n]), o || delete t[n], !0;
            if (w(t, r)) return (e[n] = t[r]), o || delete t[r], !0;
          }
          return !1;
        }
        function gt(e) {
          return c(e) ? [he(e)] : o(e) ? vt(e) : void 0;
        }
        function mt(e) {
          return s(e) && s(e.text) && !1 === e.isComment;
        }
        function vt(e, t) {
          var n,
            r,
            u,
            l,
            d = [];
          for (n = 0; n < e.length; n++)
            i((r = e[n])) ||
              "boolean" == typeof r ||
              ((l = d[(u = d.length - 1)]),
              o(r)
                ? r.length > 0 &&
                  (mt((r = vt(r, "".concat(t || "", "_").concat(n)))[0]) && mt(l) && ((d[u] = he(l.text + r[0].text)), r.shift()),
                  d.push.apply(d, r))
                : c(r)
                ? mt(l)
                  ? (d[u] = he(l.text + r))
                  : "" !== r && d.push(he(r))
                : mt(r) && mt(l)
                ? (d[u] = he(l.text + r.text))
                : (a(e._isVList) && s(r.tag) && i(r.key) && s(t) && (r.key = "__vlist".concat(t, "_").concat(n, "__")), d.push(r)));
          return d;
        }
        function _t(e, t) {
          var n,
            r,
            i,
            a,
            c = null;
          if (o(e) || "string" == typeof e) for (c = new Array(e.length), n = 0, r = e.length; n < r; n++) c[n] = t(e[n], n);
          else if ("number" == typeof e) for (c = new Array(e), n = 0; n < e; n++) c[n] = t(n + 1, n);
          else if (l(e))
            if (ce && e[Symbol.iterator]) {
              c = [];
              for (var u = e[Symbol.iterator](), d = u.next(); !d.done; ) c.push(t(d.value, c.length)), (d = u.next());
            } else for (i = Object.keys(e), c = new Array(i.length), n = 0, r = i.length; n < r; n++) (a = i[n]), (c[n] = t(e[a], a, n));
          return s(c) || (c = []), (c._isVList = !0), c;
        }
        function yt(e, t, n, r) {
          var o,
            i = this.$scopedSlots[e];
          i ? ((n = n || {}), r && (n = j(j({}, r), n)), (o = i(n) || (u(t) ? t() : t))) : (o = this.$slots[e] || (u(t) ? t() : t));
          var s = n && n.slot;
          return s ? this.$createElement("template", { slot: s }, o) : o;
        }
        function bt(e) {
          return or(this.$options, "filters", e) || M;
        }
        function wt(e, t) {
          return o(e) ? -1 === e.indexOf(t) : e !== t;
        }
        function St(e, t, n, r, o) {
          var i = H.keyCodes[t] || n;
          return o && r && !H.keyCodes[t] ? wt(o, r) : i ? wt(i, e) : r ? C(r) !== t : void 0 === e;
        }
        function kt(e, t, n, r, i) {
          if (n && l(n)) {
            o(n) && (n = A(n));
            var s = void 0,
              a = function (o) {
                if ("class" === o || "style" === o || _(o)) s = e;
                else {
                  var a = e.attrs && e.attrs.type;
                  s = r || H.mustUseProp(t, a, o) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {});
                }
                var c = O(o),
                  u = C(o);
                c in s ||
                  u in s ||
                  ((s[o] = n[o]),
                  i &&
                    ((e.on || (e.on = {}))["update:".concat(o)] = function (e) {
                      n[o] = e;
                    }));
              };
            for (var c in n) a(c);
          }
          return e;
        }
        function Ot(e, t) {
          var n = this._staticTrees || (this._staticTrees = []),
            r = n[e];
          return (
            (r && !t) ||
              Tt((r = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, this._c, this)), "__static__".concat(e), !1),
            r
          );
        }
        function Et(e, t, n) {
          return Tt(e, "__once__".concat(t).concat(n ? "_".concat(n) : ""), !0), e;
        }
        function Tt(e, t, n) {
          if (o(e)) for (var r = 0; r < e.length; r++) e[r] && "string" != typeof e[r] && Ct(e[r], "".concat(t, "_").concat(r), n);
          else Ct(e, t, n);
        }
        function Ct(e, t, n) {
          (e.isStatic = !0), (e.key = t), (e.isOnce = n);
        }
        function xt(e, t) {
          if (t && f(t)) {
            var n = (e.on = e.on ? j({}, e.on) : {});
            for (var r in t) {
              var o = n[r],
                i = t[r];
              n[r] = o ? [].concat(o, i) : i;
            }
          }
          return e;
        }
        function It(e, t, n, r) {
          t = t || { $stable: !n };
          for (var i = 0; i < e.length; i++) {
            var s = e[i];
            o(s) ? It(s, t, n) : s && (s.proxy && (s.fn.proxy = !0), (t[s.key] = s.fn));
          }
          return r && (t.$key = r), t;
        }
        function jt(e, t) {
          for (var n = 0; n < t.length; n += 2) {
            var r = t[n];
            "string" == typeof r && r && (e[t[n]] = t[n + 1]);
          }
          return e;
        }
        function At(e, t) {
          return "string" == typeof e ? t + e : e;
        }
        function Pt(e) {
          (e._o = Et),
            (e._n = m),
            (e._s = g),
            (e._l = _t),
            (e._t = yt),
            (e._q = L),
            (e._i = N),
            (e._m = Ot),
            (e._f = bt),
            (e._k = St),
            (e._b = kt),
            (e._v = he),
            (e._e = pe),
            (e._u = It),
            (e._g = xt),
            (e._d = jt),
            (e._p = At);
        }
        function Rt(e, t) {
          if (!e || !e.length) return {};
          for (var n = {}, r = 0, o = e.length; r < o; r++) {
            var i = e[r],
              s = i.data;
            if ((s && s.attrs && s.attrs.slot && delete s.attrs.slot, (i.context !== t && i.fnContext !== t) || !s || null == s.slot))
              (n.default || (n.default = [])).push(i);
            else {
              var a = s.slot,
                c = n[a] || (n[a] = []);
              "template" === i.tag ? c.push.apply(c, i.children || []) : c.push(i);
            }
          }
          for (var u in n) n[u].every(Mt) && delete n[u];
          return n;
        }
        function Mt(e) {
          return (e.isComment && !e.asyncFactory) || " " === e.text;
        }
        function Lt(e) {
          return e.isComment && e.asyncFactory;
        }
        function Nt(e, t, n, o) {
          var i,
            s = Object.keys(n).length > 0,
            a = t ? !!t.$stable : !s,
            c = t && t.$key;
          if (t) {
            if (t._normalized) return t._normalized;
            if (a && o && o !== r && c === o.$key && !s && !o.$hasNormal) return o;
            for (var u in ((i = {}), t)) t[u] && "$" !== u[0] && (i[u] = $t(e, n, u, t[u]));
          } else i = {};
          for (var l in n) l in i || (i[l] = Dt(n, l));
          return t && Object.isExtensible(t) && (t._normalized = i), q(i, "$stable", a), q(i, "$key", c), q(i, "$hasNormal", s), i;
        }
        function $t(e, t, n, r) {
          var i = function () {
            var t = ue;
            de(e);
            var n = arguments.length ? r.apply(null, arguments) : r({}),
              i = (n = n && "object" == typeof n && !o(n) ? [n] : gt(n)) && n[0];
            return de(t), n && (!i || (1 === n.length && i.isComment && !Lt(i))) ? void 0 : n;
          };
          return r.proxy && Object.defineProperty(t, n, { get: i, enumerable: !0, configurable: !0 }), i;
        }
        function Dt(e, t) {
          return function () {
            return e[t];
          };
        }
        function Ft(e, t, n, r, o) {
          var i = !1;
          for (var s in t) s in e ? t[s] !== n[s] && (i = !0) : ((i = !0), Ut(e, s, r, o));
          for (var s in e) s in t || ((i = !0), delete e[s]);
          return i;
        }
        function Ut(e, t, n, r) {
          Object.defineProperty(e, t, {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return n[r][t];
            }
          });
        }
        function Bt(e, t) {
          for (var n in t) e[n] = t[n];
          for (var n in e) n in t || delete e[n];
        }
        var Ht = null;
        function Vt(e, t) {
          return (e.__esModule || (ce && "Module" === e[Symbol.toStringTag])) && (e = e.default), l(e) ? t.extend(e) : e;
        }
        function qt(e) {
          if (o(e))
            for (var t = 0; t < e.length; t++) {
              var n = e[t];
              if (s(n) && (s(n.componentOptions) || Lt(n))) return n;
            }
        }
        function zt(e, t, n, r, i, d) {
          return (
            (o(n) || c(n)) && ((i = r), (r = n), (n = void 0)),
            a(d) && (i = 2),
            (function (e, t, n, r, i) {
              if (s(n) && s(n.__ob__)) return pe();
              if ((s(n) && s(n.is) && (t = n.is), !t)) return pe();
              var a, c;
              if (
                (o(r) && u(r[0]) && (((n = n || {}).scopedSlots = { default: r[0] }), (r.length = 0)),
                2 === i
                  ? (r = gt(r))
                  : 1 === i &&
                    (r = (function (e) {
                      for (var t = 0; t < e.length; t++) if (o(e[t])) return Array.prototype.concat.apply([], e);
                      return e;
                    })(r)),
                "string" == typeof t)
              ) {
                var d = void 0;
                (c = (e.$vnode && e.$vnode.ns) || H.getTagNamespace(t)),
                  (a = H.isReservedTag(t)
                    ? new fe(H.parsePlatformTagName(t), n, r, void 0, void 0, e)
                    : (n && n.pre) || !s((d = or(e.$options, "components", t)))
                    ? new fe(t, n, r, void 0, void 0, e)
                    : Gn(d, n, e, r, t));
              } else a = Gn(t, n, e, r);
              return o(a)
                ? a
                : s(a)
                ? (s(c) && Wt(a, c),
                  s(n) &&
                    (function (e) {
                      l(e.style) && hn(e.style), l(e.class) && hn(e.class);
                    })(n),
                  a)
                : pe();
            })(e, t, n, r, i)
          );
        }
        function Wt(e, t, n) {
          if (((e.ns = t), "foreignObject" === e.tag && ((t = void 0), (n = !0)), s(e.children)))
            for (var r = 0, o = e.children.length; r < o; r++) {
              var c = e.children[r];
              s(c.tag) && (i(c.ns) || (a(n) && "svg" !== c.tag)) && Wt(c, t, n);
            }
        }
        function Zt(e, t, n) {
          be();
          try {
            if (t)
              for (var r = t; (r = r.$parent); ) {
                var o = r.$options.errorCaptured;
                if (o)
                  for (var i = 0; i < o.length; i++)
                    try {
                      if (!1 === o[i].call(r, e, t, n)) return;
                    } catch (e) {
                      Jt(e, r, "errorCaptured hook");
                    }
              }
            Jt(e, t, n);
          } finally {
            we();
          }
        }
        function Gt(e, t, n, r, o) {
          var i;
          try {
            (i = n ? e.apply(t, n) : e.call(t)) &&
              !i._isVue &&
              h(i) &&
              !i._handled &&
              (i.catch(function (e) {
                return Zt(e, r, o + " (Promise/async)");
              }),
              (i._handled = !0));
          } catch (e) {
            Zt(e, r, o);
          }
          return i;
        }
        function Jt(e, t, n) {
          if (H.errorHandler)
            try {
              return H.errorHandler.call(null, e, t, n);
            } catch (t) {
              t !== e && Qt(t);
            }
          Qt(e);
        }
        function Qt(e, t, n) {
          if (!Z || "undefined" == typeof console) throw e;
          console.error(e);
        }
        var Yt,
          Xt = !1,
          Kt = [],
          en = !1;
        function tn() {
          en = !1;
          var e = Kt.slice(0);
          Kt.length = 0;
          for (var t = 0; t < e.length; t++) e[t]();
        }
        if ("undefined" != typeof Promise && se(Promise)) {
          var nn = Promise.resolve();
          (Yt = function () {
            nn.then(tn), X && setTimeout(P);
          }),
            (Xt = !0);
        } else if (
          J ||
          "undefined" == typeof MutationObserver ||
          (!se(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString())
        )
          Yt =
            "undefined" != typeof setImmediate && se(setImmediate)
              ? function () {
                  setImmediate(tn);
                }
              : function () {
                  setTimeout(tn, 0);
                };
        else {
          var rn = 1,
            on = new MutationObserver(tn),
            sn = document.createTextNode(String(rn));
          on.observe(sn, { characterData: !0 }),
            (Yt = function () {
              (rn = (rn + 1) % 2), (sn.data = String(rn));
            }),
            (Xt = !0);
        }
        function an(e, t) {
          var n;
          if (
            (Kt.push(function () {
              if (e)
                try {
                  e.call(t);
                } catch (e) {
                  Zt(e, t, "nextTick");
                }
              else n && n(t);
            }),
            en || ((en = !0), Yt()),
            !e && "undefined" != typeof Promise)
          )
            return new Promise(function (e) {
              n = e;
            });
        }
        function cn(e) {
          if (Z) {
            var t,
              n = ue;
            n &&
              ((t = function () {
                var t = n.$el,
                  r = e(n, n._setupProxy);
                if (t && 1 === t.nodeType) {
                  var o = t.style;
                  for (var i in r) o.setProperty("--".concat(i), r[i]);
                }
              }),
              ot(t, null, { flush: "post" }));
          }
        }
        function un(e) {
          return function (t, n) {
            if ((void 0 === n && (n = ue), n))
              return (function (e, t, n) {
                var r = e.$options;
                r[t] = er(r[t], n);
              })(n, e, t);
          };
        }
        un("beforeMount");
        var ln = un("mounted"),
          dn = (un("beforeUpdate"), un("updated"), un("beforeDestroy"), un("destroyed"));
        function fn(e) {
          return e;
        }
        un("activated"), un("deactivated"), un("serverPrefetch"), un("renderTracked"), un("renderTriggered"), un("errorCaptured");
        var pn = new ae();
        function hn(e) {
          return gn(e, pn), pn.clear(), e;
        }
        function gn(e, t) {
          var n,
            r,
            i = o(e);
          if (!((!i && !l(e)) || e.__v_skip || Object.isFrozen(e) || e instanceof fe)) {
            if (e.__ob__) {
              var s = e.__ob__.dep.id;
              if (t.has(s)) return;
              t.add(s);
            }
            if (i) for (n = e.length; n--; ) gn(e[n], t);
            else if (qe(e)) gn(e.value, t);
            else for (n = (r = Object.keys(e)).length; n--; ) gn(e[r[n]], t);
          }
        }
        var mn,
          vn = 0,
          _n = (function () {
            function e(e, t, n, r, o) {
              var i;
              void 0 === (i = Ye && !Ye._vm ? Ye : e ? e._scope : void 0) && (i = Ye),
                i && i.active && i.effects.push(this),
                (this.vm = e) && o && (e._watcher = this),
                r
                  ? ((this.deep = !!r.deep),
                    (this.user = !!r.user),
                    (this.lazy = !!r.lazy),
                    (this.sync = !!r.sync),
                    (this.before = r.before))
                  : (this.deep = this.user = this.lazy = this.sync = !1),
                (this.cb = n),
                (this.id = ++vn),
                (this.active = !0),
                (this.post = !1),
                (this.dirty = this.lazy),
                (this.deps = []),
                (this.newDeps = []),
                (this.depIds = new ae()),
                (this.newDepIds = new ae()),
                (this.expression = ""),
                u(t)
                  ? (this.getter = t)
                  : ((this.getter = (function (e) {
                      if (!z.test(e)) {
                        var t = e.split(".");
                        return function (e) {
                          for (var n = 0; n < t.length; n++) {
                            if (!e) return;
                            e = e[t[n]];
                          }
                          return e;
                        };
                      }
                    })(t)),
                    this.getter || (this.getter = P)),
                (this.value = this.lazy ? void 0 : this.get());
            }
            return (
              (e.prototype.get = function () {
                var e;
                be(this);
                var t = this.vm;
                try {
                  e = this.getter.call(t, t);
                } catch (e) {
                  if (!this.user) throw e;
                  Zt(e, t, 'getter for watcher "'.concat(this.expression, '"'));
                } finally {
                  this.deep && hn(e), we(), this.cleanupDeps();
                }
                return e;
              }),
              (e.prototype.addDep = function (e) {
                var t = e.id;
                this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this));
              }),
              (e.prototype.cleanupDeps = function () {
                for (var e = this.deps.length; e--; ) {
                  var t = this.deps[e];
                  this.newDepIds.has(t.id) || t.removeSub(this);
                }
                var n = this.depIds;
                (this.depIds = this.newDepIds),
                  (this.newDepIds = n),
                  this.newDepIds.clear(),
                  (n = this.deps),
                  (this.deps = this.newDeps),
                  (this.newDeps = n),
                  (this.newDeps.length = 0);
              }),
              (e.prototype.update = function () {
                this.lazy ? (this.dirty = !0) : this.sync ? this.run() : Un(this);
              }),
              (e.prototype.run = function () {
                if (this.active) {
                  var e = this.get();
                  if (e !== this.value || l(e) || this.deep) {
                    var t = this.value;
                    if (((this.value = e), this.user)) {
                      var n = 'callback for watcher "'.concat(this.expression, '"');
                      Gt(this.cb, this.vm, [e, t], this.vm, n);
                    } else this.cb.call(this.vm, e, t);
                  }
                }
              }),
              (e.prototype.evaluate = function () {
                (this.value = this.get()), (this.dirty = !1);
              }),
              (e.prototype.depend = function () {
                for (var e = this.deps.length; e--; ) this.deps[e].depend();
              }),
              (e.prototype.teardown = function () {
                if ((this.vm && !this.vm._isBeingDestroyed && y(this.vm._scope.effects, this), this.active)) {
                  for (var e = this.deps.length; e--; ) this.deps[e].removeSub(this);
                  (this.active = !1), this.onStop && this.onStop();
                }
              }),
              e
            );
          })();
        function yn(e, t) {
          mn.$on(e, t);
        }
        function bn(e, t) {
          mn.$off(e, t);
        }
        function wn(e, t) {
          var n = mn;
          return function r() {
            var o = t.apply(null, arguments);
            null !== o && n.$off(e, r);
          };
        }
        function Sn(e, t, n) {
          (mn = e), ft(t, n || {}, yn, bn, wn, e), (mn = void 0);
        }
        var kn = null;
        function On(e) {
          var t = kn;
          return (
            (kn = e),
            function () {
              kn = t;
            }
          );
        }
        function En(e) {
          for (; e && (e = e.$parent); ) if (e._inactive) return !0;
          return !1;
        }
        function Tn(e, t) {
          if (t) {
            if (((e._directInactive = !1), En(e))) return;
          } else if (e._directInactive) return;
          if (e._inactive || null === e._inactive) {
            e._inactive = !1;
            for (var n = 0; n < e.$children.length; n++) Tn(e.$children[n]);
            xn(e, "activated");
          }
        }
        function Cn(e, t) {
          if (!((t && ((e._directInactive = !0), En(e))) || e._inactive)) {
            e._inactive = !0;
            for (var n = 0; n < e.$children.length; n++) Cn(e.$children[n]);
            xn(e, "deactivated");
          }
        }
        function xn(e, t, n, r) {
          void 0 === r && (r = !0), be();
          var o = ue;
          r && de(e);
          var i = e.$options[t],
            s = "".concat(t, " hook");
          if (i) for (var a = 0, c = i.length; a < c; a++) Gt(i[a], e, n || null, e, s);
          e._hasHookEvent && e.$emit("hook:" + t), r && de(o), we();
        }
        var In = [],
          jn = [],
          An = {},
          Pn = !1,
          Rn = !1,
          Mn = 0,
          Ln = 0,
          Nn = Date.now;
        if (Z && !J) {
          var $n = window.performance;
          $n &&
            "function" == typeof $n.now &&
            Nn() > document.createEvent("Event").timeStamp &&
            (Nn = function () {
              return $n.now();
            });
        }
        var Dn = function (e, t) {
          if (e.post) {
            if (!t.post) return 1;
          } else if (t.post) return -1;
          return e.id - t.id;
        };
        function Fn() {
          var e, t;
          for (Ln = Nn(), Rn = !0, In.sort(Dn), Mn = 0; Mn < In.length; Mn++)
            (e = In[Mn]).before && e.before(), (t = e.id), (An[t] = null), e.run();
          var n = jn.slice(),
            r = In.slice();
          (Mn = In.length = jn.length = 0),
            (An = {}),
            (Pn = Rn = !1),
            (function (e) {
              for (var t = 0; t < e.length; t++) (e[t]._inactive = !0), Tn(e[t], !0);
            })(n),
            (function (e) {
              for (var t = e.length; t--; ) {
                var n = e[t],
                  r = n.vm;
                r && r._watcher === n && r._isMounted && !r._isDestroyed && xn(r, "updated");
              }
            })(r),
            (function () {
              for (var e = 0; e < ve.length; e++) {
                var t = ve[e];
                (t.subs = t.subs.filter(function (e) {
                  return e;
                })),
                  (t._pending = !1);
              }
              ve.length = 0;
            })(),
            ie && H.devtools && ie.emit("flush");
        }
        function Un(e) {
          var t = e.id;
          if (null == An[t] && (e !== _e.target || !e.noRecurse)) {
            if (((An[t] = !0), Rn)) {
              for (var n = In.length - 1; n > Mn && In[n].id > e.id; ) n--;
              In.splice(n + 1, 0, e);
            } else In.push(e);
            Pn || ((Pn = !0), an(Fn));
          }
        }
        function Bn(e, t) {
          if (e) {
            for (var n = Object.create(null), r = ce ? Reflect.ownKeys(e) : Object.keys(e), o = 0; o < r.length; o++) {
              var i = r[o];
              if ("__ob__" !== i) {
                var s = e[i].from;
                if (s in t._provided) n[i] = t._provided[s];
                else if ("default" in e[i]) {
                  var a = e[i].default;
                  n[i] = u(a) ? a.call(t) : a;
                }
              }
            }
            return n;
          }
        }
        function Hn(e, t, n, i, s) {
          var c,
            u = this,
            l = s.options;
          w(i, "_uid") ? ((c = Object.create(i))._original = i) : ((c = i), (i = i._original));
          var d = a(l._compiled),
            f = !d;
          (this.data = e),
            (this.props = t),
            (this.children = n),
            (this.parent = i),
            (this.listeners = e.on || r),
            (this.injections = Bn(l.inject, i)),
            (this.slots = function () {
              return u.$slots || Nt(i, e.scopedSlots, (u.$slots = Rt(n, i))), u.$slots;
            }),
            Object.defineProperty(this, "scopedSlots", {
              enumerable: !0,
              get: function () {
                return Nt(i, e.scopedSlots, this.slots());
              }
            }),
            d && ((this.$options = l), (this.$slots = this.slots()), (this.$scopedSlots = Nt(i, e.scopedSlots, this.$slots))),
            l._scopeId
              ? (this._c = function (e, t, n, r) {
                  var s = zt(c, e, t, n, r, f);
                  return s && !o(s) && ((s.fnScopeId = l._scopeId), (s.fnContext = i)), s;
                })
              : (this._c = function (e, t, n, r) {
                  return zt(c, e, t, n, r, f);
                });
        }
        function Vn(e, t, n, r, o) {
          var i = ge(e);
          return (i.fnContext = n), (i.fnOptions = r), t.slot && ((i.data || (i.data = {})).slot = t.slot), i;
        }
        function qn(e, t) {
          for (var n in t) e[O(n)] = t[n];
        }
        function zn(e) {
          return e.name || e.__name || e._componentTag;
        }
        Pt(Hn.prototype);
        var Wn = {
            init: function (e, t) {
              if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
                var n = e;
                Wn.prepatch(n, n);
              } else
                (e.componentInstance = (function (e, t) {
                  var n = { _isComponent: !0, _parentVnode: e, parent: t },
                    r = e.data.inlineTemplate;
                  return s(r) && ((n.render = r.render), (n.staticRenderFns = r.staticRenderFns)), new e.componentOptions.Ctor(n);
                })(e, kn)).$mount(t ? e.elm : void 0, t);
            },
            prepatch: function (e, t) {
              var n = t.componentOptions;
              !(function (e, t, n, o, i) {
                var s = o.data.scopedSlots,
                  a = e.$scopedSlots,
                  c = !!(
                    (s && !s.$stable) ||
                    (a !== r && !a.$stable) ||
                    (s && e.$scopedSlots.$key !== s.$key) ||
                    (!s && e.$scopedSlots.$key)
                  ),
                  u = !!(i || e.$options._renderChildren || c),
                  l = e.$vnode;
                (e.$options._parentVnode = o), (e.$vnode = o), e._vnode && (e._vnode.parent = o), (e.$options._renderChildren = i);
                var d = o.data.attrs || r;
                e._attrsProxy && Ft(e._attrsProxy, d, (l.data && l.data.attrs) || r, e, "$attrs") && (u = !0), (e.$attrs = d), (n = n || r);
                var f = e.$options._parentListeners;
                if (
                  (e._listenersProxy && Ft(e._listenersProxy, n, f || r, e, "$listeners"),
                  (e.$listeners = e.$options._parentListeners = n),
                  Sn(e, n, f),
                  t && e.$options.props)
                ) {
                  Ce(!1);
                  for (var p = e._props, h = e.$options._propKeys || [], g = 0; g < h.length; g++) {
                    var m = h[g],
                      v = e.$options.props;
                    p[m] = ir(m, v, t, e);
                  }
                  Ce(!0), (e.$options.propsData = t);
                }
                u && ((e.$slots = Rt(i, o.context)), e.$forceUpdate());
              })((t.componentInstance = e.componentInstance), n.propsData, n.listeners, t, n.children);
            },
            insert: function (e) {
              var t,
                n = e.context,
                r = e.componentInstance;
              r._isMounted || ((r._isMounted = !0), xn(r, "mounted")),
                e.data.keepAlive && (n._isMounted ? (((t = r)._inactive = !1), jn.push(t)) : Tn(r, !0));
            },
            destroy: function (e) {
              var t = e.componentInstance;
              t._isDestroyed || (e.data.keepAlive ? Cn(t, !0) : t.$destroy());
            }
          },
          Zn = Object.keys(Wn);
        function Gn(e, t, n, c, u) {
          if (!i(e)) {
            var d = n.$options._base;
            if ((l(e) && (e = d.extend(e)), "function" == typeof e)) {
              var f;
              if (
                i(e.cid) &&
                ((e = (function (e, t) {
                  if (a(e.error) && s(e.errorComp)) return e.errorComp;
                  if (s(e.resolved)) return e.resolved;
                  var n = Ht;
                  if ((n && s(e.owners) && -1 === e.owners.indexOf(n) && e.owners.push(n), a(e.loading) && s(e.loadingComp)))
                    return e.loadingComp;
                  if (n && !s(e.owners)) {
                    var r = (e.owners = [n]),
                      o = !0,
                      c = null,
                      u = null;
                    n.$on("hook:destroyed", function () {
                      return y(r, n);
                    });
                    var d = function (e) {
                        for (var t = 0, n = r.length; t < n; t++) r[t].$forceUpdate();
                        e && ((r.length = 0), null !== c && (clearTimeout(c), (c = null)), null !== u && (clearTimeout(u), (u = null)));
                      },
                      f = $(function (n) {
                        (e.resolved = Vt(n, t)), o ? (r.length = 0) : d(!0);
                      }),
                      p = $(function (t) {
                        s(e.errorComp) && ((e.error = !0), d(!0));
                      }),
                      g = e(f, p);
                    return (
                      l(g) &&
                        (h(g)
                          ? i(e.resolved) && g.then(f, p)
                          : h(g.component) &&
                            (g.component.then(f, p),
                            s(g.error) && (e.errorComp = Vt(g.error, t)),
                            s(g.loading) &&
                              ((e.loadingComp = Vt(g.loading, t)),
                              0 === g.delay
                                ? (e.loading = !0)
                                : (c = setTimeout(function () {
                                    (c = null), i(e.resolved) && i(e.error) && ((e.loading = !0), d(!1));
                                  }, g.delay || 200))),
                            s(g.timeout) &&
                              (u = setTimeout(function () {
                                (u = null), i(e.resolved) && p(null);
                              }, g.timeout)))),
                      (o = !1),
                      e.loading ? e.loadingComp : e.resolved
                    );
                  }
                })((f = e), d)),
                void 0 === e)
              )
                return (function (e, t, n, r, o) {
                  var i = pe();
                  return (i.asyncFactory = e), (i.asyncMeta = { data: t, context: n, children: r, tag: o }), i;
                })(f, t, n, c, u);
              (t = t || {}),
                yr(e),
                s(t.model) &&
                  (function (e, t) {
                    var n = (e.model && e.model.prop) || "value",
                      r = (e.model && e.model.event) || "input";
                    (t.attrs || (t.attrs = {}))[n] = t.model.value;
                    var i = t.on || (t.on = {}),
                      a = i[r],
                      c = t.model.callback;
                    s(a) ? (o(a) ? -1 === a.indexOf(c) : a !== c) && (i[r] = [c].concat(a)) : (i[r] = c);
                  })(e.options, t);
              var p = (function (e, t, n) {
                var r = t.options.props;
                if (!i(r)) {
                  var o = {},
                    a = e.attrs,
                    c = e.props;
                  if (s(a) || s(c))
                    for (var u in r) {
                      var l = C(u);
                      ht(o, c, u, l, !0) || ht(o, a, u, l, !1);
                    }
                  return o;
                }
              })(t, e);
              if (a(e.options.functional))
                return (function (e, t, n, i, a) {
                  var c = e.options,
                    u = {},
                    l = c.props;
                  if (s(l)) for (var d in l) u[d] = ir(d, l, t || r);
                  else s(n.attrs) && qn(u, n.attrs), s(n.props) && qn(u, n.props);
                  var f = new Hn(n, u, a, i, e),
                    p = c.render.call(null, f._c, f);
                  if (p instanceof fe) return Vn(p, n, f.parent, c);
                  if (o(p)) {
                    for (var h = gt(p) || [], g = new Array(h.length), m = 0; m < h.length; m++) g[m] = Vn(h[m], n, f.parent, c);
                    return g;
                  }
                })(e, p, t, n, c);
              var g = t.on;
              if (((t.on = t.nativeOn), a(e.options.abstract))) {
                var m = t.slot;
                (t = {}), m && (t.slot = m);
              }
              !(function (e) {
                for (var t = e.hook || (e.hook = {}), n = 0; n < Zn.length; n++) {
                  var r = Zn[n],
                    o = t[r],
                    i = Wn[r];
                  o === i || (o && o._merged) || (t[r] = o ? Jn(i, o) : i);
                }
              })(t);
              var v = zn(e.options) || u;
              return new fe(
                "vue-component-".concat(e.cid).concat(v ? "-".concat(v) : ""),
                t,
                void 0,
                void 0,
                void 0,
                n,
                { Ctor: e, propsData: p, listeners: g, tag: u, children: c },
                f
              );
            }
          }
        }
        function Jn(e, t) {
          var n = function (n, r) {
            e(n, r), t(n, r);
          };
          return (n._merged = !0), n;
        }
        var Qn = P,
          Yn = H.optionMergeStrategies;
        function Xn(e, t, n) {
          if ((void 0 === n && (n = !0), !t)) return e;
          for (var r, o, i, s = ce ? Reflect.ownKeys(t) : Object.keys(t), a = 0; a < s.length; a++)
            "__ob__" !== (r = s[a]) && ((o = e[r]), (i = t[r]), n && w(e, r) ? o !== i && f(o) && f(i) && Xn(o, i) : Pe(e, r, i));
          return e;
        }
        function Kn(e, t, n) {
          return n
            ? function () {
                var r = u(t) ? t.call(n, n) : t,
                  o = u(e) ? e.call(n, n) : e;
                return r ? Xn(r, o) : o;
              }
            : t
            ? e
              ? function () {
                  return Xn(u(t) ? t.call(this, this) : t, u(e) ? e.call(this, this) : e);
                }
              : t
            : e;
        }
        function er(e, t) {
          var n = t ? (e ? e.concat(t) : o(t) ? t : [t]) : e;
          return n
            ? (function (e) {
                for (var t = [], n = 0; n < e.length; n++) -1 === t.indexOf(e[n]) && t.push(e[n]);
                return t;
              })(n)
            : n;
        }
        function tr(e, t, n, r) {
          var o = Object.create(e || null);
          return t ? j(o, t) : o;
        }
        (Yn.data = function (e, t, n) {
          return n ? Kn(e, t, n) : t && "function" != typeof t ? e : Kn(e, t);
        }),
          B.forEach(function (e) {
            Yn[e] = er;
          }),
          U.forEach(function (e) {
            Yn[e + "s"] = tr;
          }),
          (Yn.watch = function (e, t, n, r) {
            if ((e === te && (e = void 0), t === te && (t = void 0), !t)) return Object.create(e || null);
            if (!e) return t;
            var i = {};
            for (var s in (j(i, e), t)) {
              var a = i[s],
                c = t[s];
              a && !o(a) && (a = [a]), (i[s] = a ? a.concat(c) : o(c) ? c : [c]);
            }
            return i;
          }),
          (Yn.props =
            Yn.methods =
            Yn.inject =
            Yn.computed =
              function (e, t, n, r) {
                if (!e) return t;
                var o = Object.create(null);
                return j(o, e), t && j(o, t), o;
              }),
          (Yn.provide = function (e, t) {
            return e
              ? function () {
                  var n = Object.create(null);
                  return Xn(n, u(e) ? e.call(this) : e), t && Xn(n, u(t) ? t.call(this) : t, !1), n;
                }
              : t;
          });
        var nr = function (e, t) {
          return void 0 === t ? e : t;
        };
        function rr(e, t, n) {
          if (
            (u(t) && (t = t.options),
            (function (e, t) {
              var n = e.props;
              if (n) {
                var r,
                  i,
                  s = {};
                if (o(n)) for (r = n.length; r--; ) "string" == typeof (i = n[r]) && (s[O(i)] = { type: null });
                else if (f(n)) for (var a in n) (i = n[a]), (s[O(a)] = f(i) ? i : { type: i });
                e.props = s;
              }
            })(t),
            (function (e, t) {
              var n = e.inject;
              if (n) {
                var r = (e.inject = {});
                if (o(n)) for (var i = 0; i < n.length; i++) r[n[i]] = { from: n[i] };
                else if (f(n))
                  for (var s in n) {
                    var a = n[s];
                    r[s] = f(a) ? j({ from: s }, a) : { from: a };
                  }
              }
            })(t),
            (function (e) {
              var t = e.directives;
              if (t)
                for (var n in t) {
                  var r = t[n];
                  u(r) && (t[n] = { bind: r, update: r });
                }
            })(t),
            !t._base && (t.extends && (e = rr(e, t.extends, n)), t.mixins))
          )
            for (var r = 0, i = t.mixins.length; r < i; r++) e = rr(e, t.mixins[r], n);
          var s,
            a = {};
          for (s in e) c(s);
          for (s in t) w(e, s) || c(s);
          function c(r) {
            var o = Yn[r] || nr;
            a[r] = o(e[r], t[r], n, r);
          }
          return a;
        }
        function or(e, t, n, r) {
          if ("string" == typeof n) {
            var o = e[t];
            if (w(o, n)) return o[n];
            var i = O(n);
            if (w(o, i)) return o[i];
            var s = E(i);
            return w(o, s) ? o[s] : o[n] || o[i] || o[s];
          }
        }
        function ir(e, t, n, r) {
          var o = t[e],
            i = !w(n, e),
            s = n[e],
            a = ur(Boolean, o.type);
          if (a > -1)
            if (i && !w(o, "default")) s = !1;
            else if ("" === s || s === C(e)) {
              var c = ur(String, o.type);
              (c < 0 || a < c) && (s = !0);
            }
          if (void 0 === s) {
            s = (function (e, t, n) {
              if (w(t, "default")) {
                var r = t.default;
                return e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n]
                  ? e._props[n]
                  : u(r) && "Function" !== ar(t.type)
                  ? r.call(e)
                  : r;
              }
            })(r, o, e);
            var l = Te;
            Ce(!0), je(s), Ce(l);
          }
          return s;
        }
        var sr = /^\s*function (\w+)/;
        function ar(e) {
          var t = e && e.toString().match(sr);
          return t ? t[1] : "";
        }
        function cr(e, t) {
          return ar(e) === ar(t);
        }
        function ur(e, t) {
          if (!o(t)) return cr(t, e) ? 0 : -1;
          for (var n = 0, r = t.length; n < r; n++) if (cr(t[n], e)) return n;
          return -1;
        }
        var lr = { enumerable: !0, configurable: !0, get: P, set: P };
        function dr(e, t, n) {
          (lr.get = function () {
            return this[t][n];
          }),
            (lr.set = function (e) {
              this[t][n] = e;
            }),
            Object.defineProperty(e, n, lr);
        }
        function fr(e) {
          var t = e.$options;
          if (
            (t.props &&
              (function (e, t) {
                var n = e.$options.propsData || {},
                  r = (e._props = Ne({})),
                  o = (e.$options._propKeys = []);
                e.$parent && Ce(!1);
                var i = function (i) {
                  o.push(i);
                  var s = ir(i, t, n, e);
                  Ae(r, i, s), i in e || dr(e, "_props", i);
                };
                for (var s in t) i(s);
                Ce(!0);
              })(e, t.props),
            (function (e) {
              var t = e.$options,
                n = t.setup;
              if (n) {
                var o = (e._setupContext = (function (e) {
                  return {
                    get attrs() {
                      if (!e._attrsProxy) {
                        var t = (e._attrsProxy = {});
                        q(t, "_v_attr_proxy", !0), Ft(t, e.$attrs, r, e, "$attrs");
                      }
                      return e._attrsProxy;
                    },
                    get listeners() {
                      return e._listenersProxy || Ft((e._listenersProxy = {}), e.$listeners, r, e, "$listeners"), e._listenersProxy;
                    },
                    get slots() {
                      return (function (e) {
                        return e._slotsProxy || Bt((e._slotsProxy = {}), e.$scopedSlots), e._slotsProxy;
                      })(e);
                    },
                    emit: x(e.$emit, e),
                    expose: function (t) {
                      t &&
                        Object.keys(t).forEach(function (n) {
                          return Ze(e, t, n);
                        });
                    }
                  };
                })(e));
                de(e), be();
                var i = Gt(n, null, [e._props || Ne({}), o], e, "setup");
                if ((we(), de(), u(i))) t.render = i;
                else if (l(i))
                  if (((e._setupState = i), i.__sfc)) {
                    var s = (e._setupProxy = {});
                    for (var a in i) "__sfc" !== a && Ze(s, i, a);
                  } else for (var a in i) V(a) || Ze(e, i, a);
              }
            })(e),
            t.methods &&
              (function (e, t) {
                for (var n in (e.$options.props, t)) e[n] = "function" != typeof t[n] ? P : x(t[n], e);
              })(e, t.methods),
            t.data)
          )
            !(function (e) {
              var t = e.$options.data;
              f(
                (t = e._data =
                  u(t)
                    ? (function (e, t) {
                        be();
                        try {
                          return e.call(t, t);
                        } catch (e) {
                          return Zt(e, t, "data()"), {};
                        } finally {
                          we();
                        }
                      })(t, e)
                    : t || {})
              ) || (t = {});
              for (var n = Object.keys(t), r = e.$options.props, o = (e.$options.methods, n.length); o--; ) {
                var i = n[o];
                (r && w(r, i)) || V(i) || dr(e, "_data", i);
              }
              var s = je(t);
              s && s.vmCount++;
            })(e);
          else {
            var n = je((e._data = {}));
            n && n.vmCount++;
          }
          t.computed &&
            (function (e, t) {
              var n = (e._computedWatchers = Object.create(null)),
                r = oe();
              for (var o in t) {
                var i = t[o],
                  s = u(i) ? i : i.get;
                r || (n[o] = new _n(e, s || P, P, pr)), o in e || hr(e, o, i);
              }
            })(e, t.computed),
            t.watch &&
              t.watch !== te &&
              (function (e, t) {
                for (var n in t) {
                  var r = t[n];
                  if (o(r)) for (var i = 0; i < r.length; i++) vr(e, n, r[i]);
                  else vr(e, n, r);
                }
              })(e, t.watch);
        }
        var pr = { lazy: !0 };
        function hr(e, t, n) {
          var r = !oe();
          u(n)
            ? ((lr.get = r ? gr(t) : mr(n)), (lr.set = P))
            : ((lr.get = n.get ? (r && !1 !== n.cache ? gr(t) : mr(n.get)) : P), (lr.set = n.set || P)),
            Object.defineProperty(e, t, lr);
        }
        function gr(e) {
          return function () {
            var t = this._computedWatchers && this._computedWatchers[e];
            if (t) return t.dirty && t.evaluate(), _e.target && t.depend(), t.value;
          };
        }
        function mr(e) {
          return function () {
            return e.call(this, this);
          };
        }
        function vr(e, t, n, r) {
          return f(n) && ((r = n), (n = n.handler)), "string" == typeof n && (n = e[n]), e.$watch(t, n, r);
        }
        var _r = 0;
        function yr(e) {
          var t = e.options;
          if (e.super) {
            var n = yr(e.super);
            if (n !== e.superOptions) {
              e.superOptions = n;
              var r = (function (e) {
                var t,
                  n = e.options,
                  r = e.sealedOptions;
                for (var o in n) n[o] !== r[o] && (t || (t = {}), (t[o] = n[o]));
                return t;
              })(e);
              r && j(e.extendOptions, r), (t = e.options = rr(n, e.extendOptions)).name && (t.components[t.name] = e);
            }
          }
          return t;
        }
        function br(e) {
          this._init(e);
        }
        function wr(e) {
          return e && (zn(e.Ctor.options) || e.tag);
        }
        function Sr(e, t) {
          return o(e)
            ? e.indexOf(t) > -1
            : "string" == typeof e
            ? e.split(",").indexOf(t) > -1
            : ((n = e), !("[object RegExp]" !== d.call(n)) && e.test(t));
          var n;
        }
        function kr(e, t) {
          var n = e.cache,
            r = e.keys,
            o = e._vnode;
          for (var i in n) {
            var s = n[i];
            if (s) {
              var a = s.name;
              a && !t(a) && Or(n, i, r, o);
            }
          }
        }
        function Or(e, t, n, r) {
          var o = e[t];
          !o || (r && o.tag === r.tag) || o.componentInstance.$destroy(), (e[t] = null), y(n, t);
        }
        !(function (e) {
          e.prototype._init = function (e) {
            var t = this;
            (t._uid = _r++),
              (t._isVue = !0),
              (t.__v_skip = !0),
              (t._scope = new it(!0)),
              (t._scope._vm = !0),
              e && e._isComponent
                ? (function (e, t) {
                    var n = (e.$options = Object.create(e.constructor.options)),
                      r = t._parentVnode;
                    (n.parent = t.parent), (n._parentVnode = r);
                    var o = r.componentOptions;
                    (n.propsData = o.propsData),
                      (n._parentListeners = o.listeners),
                      (n._renderChildren = o.children),
                      (n._componentTag = o.tag),
                      t.render && ((n.render = t.render), (n.staticRenderFns = t.staticRenderFns));
                  })(t, e)
                : (t.$options = rr(yr(t.constructor), e || {}, t)),
              (t._renderProxy = t),
              (t._self = t),
              (function (e) {
                var t = e.$options,
                  n = t.parent;
                if (n && !t.abstract) {
                  for (; n.$options.abstract && n.$parent; ) n = n.$parent;
                  n.$children.push(e);
                }
                (e.$parent = n),
                  (e.$root = n ? n.$root : e),
                  (e.$children = []),
                  (e.$refs = {}),
                  (e._provided = n ? n._provided : Object.create(null)),
                  (e._watcher = null),
                  (e._inactive = null),
                  (e._directInactive = !1),
                  (e._isMounted = !1),
                  (e._isDestroyed = !1),
                  (e._isBeingDestroyed = !1);
              })(t),
              (function (e) {
                (e._events = Object.create(null)), (e._hasHookEvent = !1);
                var t = e.$options._parentListeners;
                t && Sn(e, t);
              })(t),
              (function (e) {
                (e._vnode = null), (e._staticTrees = null);
                var t = e.$options,
                  n = (e.$vnode = t._parentVnode),
                  o = n && n.context;
                (e.$slots = Rt(t._renderChildren, o)),
                  (e.$scopedSlots = n ? Nt(e.$parent, n.data.scopedSlots, e.$slots) : r),
                  (e._c = function (t, n, r, o) {
                    return zt(e, t, n, r, o, !1);
                  }),
                  (e.$createElement = function (t, n, r, o) {
                    return zt(e, t, n, r, o, !0);
                  });
                var i = n && n.data;
                Ae(e, "$attrs", (i && i.attrs) || r, null, !0), Ae(e, "$listeners", t._parentListeners || r, null, !0);
              })(t),
              xn(t, "beforeCreate", void 0, !1),
              (function (e) {
                var t = Bn(e.$options.inject, e);
                t &&
                  (Ce(!1),
                  Object.keys(t).forEach(function (n) {
                    Ae(e, n, t[n]);
                  }),
                  Ce(!0));
              })(t),
              fr(t),
              (function (e) {
                var t = e.$options.provide;
                if (t) {
                  var n = u(t) ? t.call(e) : t;
                  if (!l(n)) return;
                  for (
                    var r = (function (e) {
                        var t = e._provided,
                          n = e.$parent && e.$parent._provided;
                        return n === t ? (e._provided = Object.create(n)) : t;
                      })(e),
                      o = ce ? Reflect.ownKeys(n) : Object.keys(n),
                      i = 0;
                    i < o.length;
                    i++
                  ) {
                    var s = o[i];
                    Object.defineProperty(r, s, Object.getOwnPropertyDescriptor(n, s));
                  }
                }
              })(t),
              xn(t, "created"),
              t.$options.el && t.$mount(t.$options.el);
          };
        })(br),
          (function (e) {
            Object.defineProperty(e.prototype, "$data", {
              get: function () {
                return this._data;
              }
            }),
              Object.defineProperty(e.prototype, "$props", {
                get: function () {
                  return this._props;
                }
              }),
              (e.prototype.$set = Pe),
              (e.prototype.$delete = Re),
              (e.prototype.$watch = function (e, t, n) {
                var r = this;
                if (f(t)) return vr(r, e, t, n);
                (n = n || {}).user = !0;
                var o = new _n(r, e, t, n);
                if (n.immediate) {
                  var i = 'callback for immediate watcher "'.concat(o.expression, '"');
                  be(), Gt(t, r, [o.value], r, i), we();
                }
                return function () {
                  o.teardown();
                };
              });
          })(br),
          (function (e) {
            var t = /^hook:/;
            (e.prototype.$on = function (e, n) {
              var r = this;
              if (o(e)) for (var i = 0, s = e.length; i < s; i++) r.$on(e[i], n);
              else (r._events[e] || (r._events[e] = [])).push(n), t.test(e) && (r._hasHookEvent = !0);
              return r;
            }),
              (e.prototype.$once = function (e, t) {
                var n = this;
                function r() {
                  n.$off(e, r), t.apply(n, arguments);
                }
                return (r.fn = t), n.$on(e, r), n;
              }),
              (e.prototype.$off = function (e, t) {
                var n = this;
                if (!arguments.length) return (n._events = Object.create(null)), n;
                if (o(e)) {
                  for (var r = 0, i = e.length; r < i; r++) n.$off(e[r], t);
                  return n;
                }
                var s,
                  a = n._events[e];
                if (!a) return n;
                if (!t) return (n._events[e] = null), n;
                for (var c = a.length; c--; )
                  if ((s = a[c]) === t || s.fn === t) {
                    a.splice(c, 1);
                    break;
                  }
                return n;
              }),
              (e.prototype.$emit = function (e) {
                var t = this,
                  n = t._events[e];
                if (n) {
                  n = n.length > 1 ? I(n) : n;
                  for (var r = I(arguments, 1), o = 'event handler for "'.concat(e, '"'), i = 0, s = n.length; i < s; i++)
                    Gt(n[i], t, r, t, o);
                }
                return t;
              });
          })(br),
          (function (e) {
            (e.prototype._update = function (e, t) {
              var n = this,
                r = n.$el,
                o = n._vnode,
                i = On(n);
              (n._vnode = e),
                (n.$el = o ? n.__patch__(o, e) : n.__patch__(n.$el, e, t, !1)),
                i(),
                r && (r.__vue__ = null),
                n.$el && (n.$el.__vue__ = n);
              for (var s = n; s && s.$vnode && s.$parent && s.$vnode === s.$parent._vnode; ) (s.$parent.$el = s.$el), (s = s.$parent);
            }),
              (e.prototype.$forceUpdate = function () {
                this._watcher && this._watcher.update();
              }),
              (e.prototype.$destroy = function () {
                var e = this;
                if (!e._isBeingDestroyed) {
                  xn(e, "beforeDestroy"), (e._isBeingDestroyed = !0);
                  var t = e.$parent;
                  !t || t._isBeingDestroyed || e.$options.abstract || y(t.$children, e),
                    e._scope.stop(),
                    e._data.__ob__ && e._data.__ob__.vmCount--,
                    (e._isDestroyed = !0),
                    e.__patch__(e._vnode, null),
                    xn(e, "destroyed"),
                    e.$off(),
                    e.$el && (e.$el.__vue__ = null),
                    e.$vnode && (e.$vnode.parent = null);
                }
              });
          })(br),
          (function (e) {
            Pt(e.prototype),
              (e.prototype.$nextTick = function (e) {
                return an(e, this);
              }),
              (e.prototype._render = function () {
                var e,
                  t = this,
                  n = t.$options,
                  r = n.render,
                  i = n._parentVnode;
                i &&
                  t._isMounted &&
                  ((t.$scopedSlots = Nt(t.$parent, i.data.scopedSlots, t.$slots, t.$scopedSlots)),
                  t._slotsProxy && Bt(t._slotsProxy, t.$scopedSlots)),
                  (t.$vnode = i);
                try {
                  de(t), (Ht = t), (e = r.call(t._renderProxy, t.$createElement));
                } catch (n) {
                  Zt(n, t, "render"), (e = t._vnode);
                } finally {
                  (Ht = null), de();
                }
                return o(e) && 1 === e.length && (e = e[0]), e instanceof fe || (e = pe()), (e.parent = i), e;
              });
          })(br);
        var Er = [String, RegExp, Array],
          Tr = {
            KeepAlive: {
              name: "keep-alive",
              abstract: !0,
              props: { include: Er, exclude: Er, max: [String, Number] },
              methods: {
                cacheVNode: function () {
                  var e = this,
                    t = e.cache,
                    n = e.keys,
                    r = e.vnodeToCache,
                    o = e.keyToCache;
                  if (r) {
                    var i = r.tag,
                      s = r.componentInstance,
                      a = r.componentOptions;
                    (t[o] = { name: wr(a), tag: i, componentInstance: s }),
                      n.push(o),
                      this.max && n.length > parseInt(this.max) && Or(t, n[0], n, this._vnode),
                      (this.vnodeToCache = null);
                  }
                }
              },
              created: function () {
                (this.cache = Object.create(null)), (this.keys = []);
              },
              destroyed: function () {
                for (var e in this.cache) Or(this.cache, e, this.keys);
              },
              mounted: function () {
                var e = this;
                this.cacheVNode(),
                  this.$watch("include", function (t) {
                    kr(e, function (e) {
                      return Sr(t, e);
                    });
                  }),
                  this.$watch("exclude", function (t) {
                    kr(e, function (e) {
                      return !Sr(t, e);
                    });
                  });
              },
              updated: function () {
                this.cacheVNode();
              },
              render: function () {
                var e = this.$slots.default,
                  t = qt(e),
                  n = t && t.componentOptions;
                if (n) {
                  var r = wr(n),
                    o = this.include,
                    i = this.exclude;
                  if ((o && (!r || !Sr(o, r))) || (i && r && Sr(i, r))) return t;
                  var s = this.cache,
                    a = this.keys,
                    c = null == t.key ? n.Ctor.cid + (n.tag ? "::".concat(n.tag) : "") : t.key;
                  s[c]
                    ? ((t.componentInstance = s[c].componentInstance), y(a, c), a.push(c))
                    : ((this.vnodeToCache = t), (this.keyToCache = c)),
                    (t.data.keepAlive = !0);
                }
                return t || (e && e[0]);
              }
            }
          };
        !(function (e) {
          var t = {
            get: function () {
              return H;
            }
          };
          Object.defineProperty(e, "config", t),
            (e.util = { warn: Qn, extend: j, mergeOptions: rr, defineReactive: Ae }),
            (e.set = Pe),
            (e.delete = Re),
            (e.nextTick = an),
            (e.observable = function (e) {
              return je(e), e;
            }),
            (e.options = Object.create(null)),
            U.forEach(function (t) {
              e.options[t + "s"] = Object.create(null);
            }),
            (e.options._base = e),
            j(e.options.components, Tr),
            (function (e) {
              e.use = function (e) {
                var t = this._installedPlugins || (this._installedPlugins = []);
                if (t.indexOf(e) > -1) return this;
                var n = I(arguments, 1);
                return n.unshift(this), u(e.install) ? e.install.apply(e, n) : u(e) && e.apply(null, n), t.push(e), this;
              };
            })(e),
            (function (e) {
              e.mixin = function (e) {
                return (this.options = rr(this.options, e)), this;
              };
            })(e),
            (function (e) {
              e.cid = 0;
              var t = 1;
              e.extend = function (e) {
                e = e || {};
                var n = this,
                  r = n.cid,
                  o = e._Ctor || (e._Ctor = {});
                if (o[r]) return o[r];
                var i = zn(e) || zn(n.options),
                  s = function (e) {
                    this._init(e);
                  };
                return (
                  ((s.prototype = Object.create(n.prototype)).constructor = s),
                  (s.cid = t++),
                  (s.options = rr(n.options, e)),
                  (s.super = n),
                  s.options.props &&
                    (function (e) {
                      var t = e.options.props;
                      for (var n in t) dr(e.prototype, "_props", n);
                    })(s),
                  s.options.computed &&
                    (function (e) {
                      var t = e.options.computed;
                      for (var n in t) hr(e.prototype, n, t[n]);
                    })(s),
                  (s.extend = n.extend),
                  (s.mixin = n.mixin),
                  (s.use = n.use),
                  U.forEach(function (e) {
                    s[e] = n[e];
                  }),
                  i && (s.options.components[i] = s),
                  (s.superOptions = n.options),
                  (s.extendOptions = e),
                  (s.sealedOptions = j({}, s.options)),
                  (o[r] = s),
                  s
                );
              };
            })(e),
            (function (e) {
              U.forEach(function (t) {
                e[t] = function (e, n) {
                  return n
                    ? ("component" === t && f(n) && ((n.name = n.name || e), (n = this.options._base.extend(n))),
                      "directive" === t && u(n) && (n = { bind: n, update: n }),
                      (this.options[t + "s"][e] = n),
                      n)
                    : this.options[t + "s"][e];
                };
              });
            })(e);
        })(br),
          Object.defineProperty(br.prototype, "$isServer", { get: oe }),
          Object.defineProperty(br.prototype, "$ssrContext", {
            get: function () {
              return this.$vnode && this.$vnode.ssrContext;
            }
          }),
          Object.defineProperty(br, "FunctionalRenderContext", { value: Hn }),
          (br.version = "2.7.14");
        var Cr = v("style,class"),
          xr = v("input,textarea,option,select,progress"),
          Ir = v("contenteditable,draggable,spellcheck"),
          jr = v("events,caret,typing,plaintext-only"),
          Ar = v(
            "allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"
          ),
          Pr = "http://www.w3.org/1999/xlink",
          Rr = function (e) {
            return ":" === e.charAt(5) && "xlink" === e.slice(0, 5);
          },
          Mr = function (e) {
            return Rr(e) ? e.slice(6, e.length) : "";
          },
          Lr = function (e) {
            return null == e || !1 === e;
          };
        function Nr(e, t) {
          return { staticClass: $r(e.staticClass, t.staticClass), class: s(e.class) ? [e.class, t.class] : t.class };
        }
        function $r(e, t) {
          return e ? (t ? e + " " + t : e) : t || "";
        }
        function Dr(e) {
          return Array.isArray(e)
            ? (function (e) {
                for (var t, n = "", r = 0, o = e.length; r < o; r++) s((t = Dr(e[r]))) && "" !== t && (n && (n += " "), (n += t));
                return n;
              })(e)
            : l(e)
            ? (function (e) {
                var t = "";
                for (var n in e) e[n] && (t && (t += " "), (t += n));
                return t;
              })(e)
            : "string" == typeof e
            ? e
            : "";
        }
        var Fr = { svg: "http://www.w3.org/2000/svg", math: "http://www.w3.org/1998/Math/MathML" },
          Ur = v(
            "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"
          ),
          Br = v(
            "svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",
            !0
          ),
          Hr = function (e) {
            return Ur(e) || Br(e);
          },
          Vr = Object.create(null),
          qr = v("text,number,password,search,email,tel,url"),
          zr = Object.freeze({
            __proto__: null,
            createElement: function (e, t) {
              var n = document.createElement(e);
              return (
                "select" !== e || (t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple")), n
              );
            },
            createElementNS: function (e, t) {
              return document.createElementNS(Fr[e], t);
            },
            createTextNode: function (e) {
              return document.createTextNode(e);
            },
            createComment: function (e) {
              return document.createComment(e);
            },
            insertBefore: function (e, t, n) {
              e.insertBefore(t, n);
            },
            removeChild: function (e, t) {
              e.removeChild(t);
            },
            appendChild: function (e, t) {
              e.appendChild(t);
            },
            parentNode: function (e) {
              return e.parentNode;
            },
            nextSibling: function (e) {
              return e.nextSibling;
            },
            tagName: function (e) {
              return e.tagName;
            },
            setTextContent: function (e, t) {
              e.textContent = t;
            },
            setStyleScope: function (e, t) {
              e.setAttribute(t, "");
            }
          }),
          Wr = {
            create: function (e, t) {
              Zr(t);
            },
            update: function (e, t) {
              e.data.ref !== t.data.ref && (Zr(e, !0), Zr(t));
            },
            destroy: function (e) {
              Zr(e, !0);
            }
          };
        function Zr(e, t) {
          var n = e.data.ref;
          if (s(n)) {
            var r = e.context,
              i = e.componentInstance || e.elm,
              a = t ? null : i,
              c = t ? void 0 : i;
            if (u(n)) Gt(n, r, [a], r, "template ref function");
            else {
              var l = e.data.refInFor,
                d = "string" == typeof n || "number" == typeof n,
                f = qe(n),
                p = r.$refs;
              if (d || f)
                if (l) {
                  var h = d ? p[n] : n.value;
                  t ? o(h) && y(h, i) : o(h) ? h.includes(i) || h.push(i) : d ? ((p[n] = [i]), Gr(r, n, p[n])) : (n.value = [i]);
                } else if (d) {
                  if (t && p[n] !== i) return;
                  (p[n] = c), Gr(r, n, a);
                } else if (f) {
                  if (t && n.value !== i) return;
                  n.value = a;
                }
            }
          }
        }
        function Gr(e, t, n) {
          var r = e._setupState;
          r && w(r, t) && (qe(r[t]) ? (r[t].value = n) : (r[t] = n));
        }
        var Jr = new fe("", {}, []),
          Qr = ["create", "activate", "update", "remove", "destroy"];
        function Yr(e, t) {
          return (
            e.key === t.key &&
            e.asyncFactory === t.asyncFactory &&
            ((e.tag === t.tag &&
              e.isComment === t.isComment &&
              s(e.data) === s(t.data) &&
              (function (e, t) {
                if ("input" !== e.tag) return !0;
                var n,
                  r = s((n = e.data)) && s((n = n.attrs)) && n.type,
                  o = s((n = t.data)) && s((n = n.attrs)) && n.type;
                return r === o || (qr(r) && qr(o));
              })(e, t)) ||
              (a(e.isAsyncPlaceholder) && i(t.asyncFactory.error)))
          );
        }
        function Xr(e, t, n) {
          var r,
            o,
            i = {};
          for (r = t; r <= n; ++r) s((o = e[r].key)) && (i[o] = r);
          return i;
        }
        var Kr = {
          create: eo,
          update: eo,
          destroy: function (e) {
            eo(e, Jr);
          }
        };
        function eo(e, t) {
          (e.data.directives || t.data.directives) &&
            (function (e, t) {
              var n,
                r,
                o,
                i = e === Jr,
                s = t === Jr,
                a = no(e.data.directives, e.context),
                c = no(t.data.directives, t.context),
                u = [],
                l = [];
              for (n in c)
                (r = a[n]),
                  (o = c[n]),
                  r
                    ? ((o.oldValue = r.value), (o.oldArg = r.arg), oo(o, "update", t, e), o.def && o.def.componentUpdated && l.push(o))
                    : (oo(o, "bind", t, e), o.def && o.def.inserted && u.push(o));
              if (u.length) {
                var d = function () {
                  for (var n = 0; n < u.length; n++) oo(u[n], "inserted", t, e);
                };
                i ? pt(t, "insert", d) : d();
              }
              if (
                (l.length &&
                  pt(t, "postpatch", function () {
                    for (var n = 0; n < l.length; n++) oo(l[n], "componentUpdated", t, e);
                  }),
                !i)
              )
                for (n in a) c[n] || oo(a[n], "unbind", e, e, s);
            })(e, t);
        }
        var to = Object.create(null);
        function no(e, t) {
          var n,
            r,
            o = Object.create(null);
          if (!e) return o;
          for (n = 0; n < e.length; n++) {
            if (((r = e[n]).modifiers || (r.modifiers = to), (o[ro(r)] = r), t._setupState && t._setupState.__sfc)) {
              var i = r.def || or(t, "_setupState", "v-" + r.name);
              r.def = "function" == typeof i ? { bind: i, update: i } : i;
            }
            r.def = r.def || or(t.$options, "directives", r.name);
          }
          return o;
        }
        function ro(e) {
          return e.rawName || "".concat(e.name, ".").concat(Object.keys(e.modifiers || {}).join("."));
        }
        function oo(e, t, n, r, o) {
          var i = e.def && e.def[t];
          if (i)
            try {
              i(n.elm, e, n, r, o);
            } catch (r) {
              Zt(r, n.context, "directive ".concat(e.name, " ").concat(t, " hook"));
            }
        }
        var io = [Wr, Kr];
        function so(e, t) {
          var n = t.componentOptions;
          if (!((s(n) && !1 === n.Ctor.options.inheritAttrs) || (i(e.data.attrs) && i(t.data.attrs)))) {
            var r,
              o,
              c = t.elm,
              u = e.data.attrs || {},
              l = t.data.attrs || {};
            for (r in ((s(l.__ob__) || a(l._v_attr_proxy)) && (l = t.data.attrs = j({}, l)), l))
              (o = l[r]), u[r] !== o && ao(c, r, o, t.data.pre);
            for (r in ((J || Y) && l.value !== u.value && ao(c, "value", l.value), u))
              i(l[r]) && (Rr(r) ? c.removeAttributeNS(Pr, Mr(r)) : Ir(r) || c.removeAttribute(r));
          }
        }
        function ao(e, t, n, r) {
          r || e.tagName.indexOf("-") > -1
            ? co(e, t, n)
            : Ar(t)
            ? Lr(n)
              ? e.removeAttribute(t)
              : ((n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t), e.setAttribute(t, n))
            : Ir(t)
            ? e.setAttribute(
                t,
                (function (e, t) {
                  return Lr(t) || "false" === t ? "false" : "contenteditable" === e && jr(t) ? t : "true";
                })(t, n)
              )
            : Rr(t)
            ? Lr(n)
              ? e.removeAttributeNS(Pr, Mr(t))
              : e.setAttributeNS(Pr, t, n)
            : co(e, t, n);
        }
        function co(e, t, n) {
          if (Lr(n)) e.removeAttribute(t);
          else {
            if (J && !Q && "TEXTAREA" === e.tagName && "placeholder" === t && "" !== n && !e.__ieph) {
              var r = function (t) {
                t.stopImmediatePropagation(), e.removeEventListener("input", r);
              };
              e.addEventListener("input", r), (e.__ieph = !0);
            }
            e.setAttribute(t, n);
          }
        }
        var uo = { create: so, update: so };
        function lo(e, t) {
          var n = t.elm,
            r = t.data,
            o = e.data;
          if (!(i(r.staticClass) && i(r.class) && (i(o) || (i(o.staticClass) && i(o.class))))) {
            var a = (function (e) {
                for (var t = e.data, n = e, r = e; s(r.componentInstance); )
                  (r = r.componentInstance._vnode) && r.data && (t = Nr(r.data, t));
                for (; s((n = n.parent)); ) n && n.data && (t = Nr(t, n.data));
                return (o = t.staticClass), (i = t.class), s(o) || s(i) ? $r(o, Dr(i)) : "";
                var o, i;
              })(t),
              c = n._transitionClasses;
            s(c) && (a = $r(a, Dr(c))), a !== n._prevClass && (n.setAttribute("class", a), (n._prevClass = a));
          }
        }
        var fo,
          po = { create: lo, update: lo };
        function ho(e, t, n) {
          var r = fo;
          return function o() {
            var i = t.apply(null, arguments);
            null !== i && vo(e, o, n, r);
          };
        }
        var go = Xt && !(ee && Number(ee[1]) <= 53);
        function mo(e, t, n, r) {
          if (go) {
            var o = Ln,
              i = t;
            t = i._wrapper = function (e) {
              if (e.target === e.currentTarget || e.timeStamp >= o || e.timeStamp <= 0 || e.target.ownerDocument !== document)
                return i.apply(this, arguments);
            };
          }
          fo.addEventListener(e, t, ne ? { capture: n, passive: r } : n);
        }
        function vo(e, t, n, r) {
          (r || fo).removeEventListener(e, t._wrapper || t, n);
        }
        function _o(e, t) {
          if (!i(e.data.on) || !i(t.data.on)) {
            var n = t.data.on || {},
              r = e.data.on || {};
            (fo = t.elm || e.elm),
              (function (e) {
                if (s(e.__r)) {
                  var t = J ? "change" : "input";
                  (e[t] = [].concat(e.__r, e[t] || [])), delete e.__r;
                }
                s(e.__c) && ((e.change = [].concat(e.__c, e.change || [])), delete e.__c);
              })(n),
              ft(n, r, mo, vo, ho, t.context),
              (fo = void 0);
          }
        }
        var yo,
          bo = {
            create: _o,
            update: _o,
            destroy: function (e) {
              return _o(e, Jr);
            }
          };
        function wo(e, t) {
          if (!i(e.data.domProps) || !i(t.data.domProps)) {
            var n,
              r,
              o = t.elm,
              c = e.data.domProps || {},
              u = t.data.domProps || {};
            for (n in ((s(u.__ob__) || a(u._v_attr_proxy)) && (u = t.data.domProps = j({}, u)), c)) n in u || (o[n] = "");
            for (n in u) {
              if (((r = u[n]), "textContent" === n || "innerHTML" === n)) {
                if ((t.children && (t.children.length = 0), r === c[n])) continue;
                1 === o.childNodes.length && o.removeChild(o.childNodes[0]);
              }
              if ("value" === n && "PROGRESS" !== o.tagName) {
                o._value = r;
                var l = i(r) ? "" : String(r);
                So(o, l) && (o.value = l);
              } else if ("innerHTML" === n && Br(o.tagName) && i(o.innerHTML)) {
                (yo = yo || document.createElement("div")).innerHTML = "<svg>".concat(r, "</svg>");
                for (var d = yo.firstChild; o.firstChild; ) o.removeChild(o.firstChild);
                for (; d.firstChild; ) o.appendChild(d.firstChild);
              } else if (r !== c[n])
                try {
                  o[n] = r;
                } catch (e) {}
            }
          }
        }
        function So(e, t) {
          return (
            !e.composing &&
            ("OPTION" === e.tagName ||
              (function (e, t) {
                var n = !0;
                try {
                  n = document.activeElement !== e;
                } catch (e) {}
                return n && e.value !== t;
              })(e, t) ||
              (function (e, t) {
                var n = e.value,
                  r = e._vModifiers;
                if (s(r)) {
                  if (r.number) return m(n) !== m(t);
                  if (r.trim) return n.trim() !== t.trim();
                }
                return n !== t;
              })(e, t))
          );
        }
        var ko = { create: wo, update: wo },
          Oo = S(function (e) {
            var t = {},
              n = /:(.+)/;
            return (
              e.split(/;(?![^(]*\))/g).forEach(function (e) {
                if (e) {
                  var r = e.split(n);
                  r.length > 1 && (t[r[0].trim()] = r[1].trim());
                }
              }),
              t
            );
          });
        function Eo(e) {
          var t = To(e.style);
          return e.staticStyle ? j(e.staticStyle, t) : t;
        }
        function To(e) {
          return Array.isArray(e) ? A(e) : "string" == typeof e ? Oo(e) : e;
        }
        var Co,
          xo = /^--/,
          Io = /\s*!important$/,
          jo = function (e, t, n) {
            if (xo.test(t)) e.style.setProperty(t, n);
            else if (Io.test(n)) e.style.setProperty(C(t), n.replace(Io, ""), "important");
            else {
              var r = Po(t);
              if (Array.isArray(n)) for (var o = 0, i = n.length; o < i; o++) e.style[r] = n[o];
              else e.style[r] = n;
            }
          },
          Ao = ["Webkit", "Moz", "ms"],
          Po = S(function (e) {
            if (((Co = Co || document.createElement("div").style), "filter" !== (e = O(e)) && e in Co)) return e;
            for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < Ao.length; n++) {
              var r = Ao[n] + t;
              if (r in Co) return r;
            }
          });
        function Ro(e, t) {
          var n = t.data,
            r = e.data;
          if (!(i(n.staticStyle) && i(n.style) && i(r.staticStyle) && i(r.style))) {
            var o,
              a,
              c = t.elm,
              u = r.staticStyle,
              l = r.normalizedStyle || r.style || {},
              d = u || l,
              f = To(t.data.style) || {};
            t.data.normalizedStyle = s(f.__ob__) ? j({}, f) : f;
            var p = (function (e, t) {
              for (var n, r = {}, o = e; o.componentInstance; ) (o = o.componentInstance._vnode) && o.data && (n = Eo(o.data)) && j(r, n);
              (n = Eo(e.data)) && j(r, n);
              for (var i = e; (i = i.parent); ) i.data && (n = Eo(i.data)) && j(r, n);
              return r;
            })(t);
            for (a in d) i(p[a]) && jo(c, a, "");
            for (a in p) (o = p[a]) !== d[a] && jo(c, a, null == o ? "" : o);
          }
        }
        var Mo = { create: Ro, update: Ro },
          Lo = /\s+/;
        function No(e, t) {
          if (t && (t = t.trim()))
            if (e.classList)
              t.indexOf(" ") > -1
                ? t.split(Lo).forEach(function (t) {
                    return e.classList.add(t);
                  })
                : e.classList.add(t);
            else {
              var n = " ".concat(e.getAttribute("class") || "", " ");
              n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim());
            }
        }
        function $o(e, t) {
          if (t && (t = t.trim()))
            if (e.classList)
              t.indexOf(" ") > -1
                ? t.split(Lo).forEach(function (t) {
                    return e.classList.remove(t);
                  })
                : e.classList.remove(t),
                e.classList.length || e.removeAttribute("class");
            else {
              for (var n = " ".concat(e.getAttribute("class") || "", " "), r = " " + t + " "; n.indexOf(r) >= 0; ) n = n.replace(r, " ");
              (n = n.trim()) ? e.setAttribute("class", n) : e.removeAttribute("class");
            }
        }
        function Do(e) {
          if (e) {
            if ("object" == typeof e) {
              var t = {};
              return !1 !== e.css && j(t, Fo(e.name || "v")), j(t, e), t;
            }
            return "string" == typeof e ? Fo(e) : void 0;
          }
        }
        var Fo = S(function (e) {
            return {
              enterClass: "".concat(e, "-enter"),
              enterToClass: "".concat(e, "-enter-to"),
              enterActiveClass: "".concat(e, "-enter-active"),
              leaveClass: "".concat(e, "-leave"),
              leaveToClass: "".concat(e, "-leave-to"),
              leaveActiveClass: "".concat(e, "-leave-active")
            };
          }),
          Uo = Z && !Q,
          Bo = "transition",
          Ho = "animation",
          Vo = "transition",
          qo = "transitionend",
          zo = "animation",
          Wo = "animationend";
        Uo &&
          (void 0 === window.ontransitionend &&
            void 0 !== window.onwebkittransitionend &&
            ((Vo = "WebkitTransition"), (qo = "webkitTransitionEnd")),
          void 0 === window.onanimationend &&
            void 0 !== window.onwebkitanimationend &&
            ((zo = "WebkitAnimation"), (Wo = "webkitAnimationEnd")));
        var Zo = Z
          ? window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : setTimeout
          : function (e) {
              return e();
            };
        function Go(e) {
          Zo(function () {
            Zo(e);
          });
        }
        function Jo(e, t) {
          var n = e._transitionClasses || (e._transitionClasses = []);
          n.indexOf(t) < 0 && (n.push(t), No(e, t));
        }
        function Qo(e, t) {
          e._transitionClasses && y(e._transitionClasses, t), $o(e, t);
        }
        function Yo(e, t, n) {
          var r = Ko(e, t),
            o = r.type,
            i = r.timeout,
            s = r.propCount;
          if (!o) return n();
          var a = o === Bo ? qo : Wo,
            c = 0,
            u = function () {
              e.removeEventListener(a, l), n();
            },
            l = function (t) {
              t.target === e && ++c >= s && u();
            };
          setTimeout(function () {
            c < s && u();
          }, i + 1),
            e.addEventListener(a, l);
        }
        var Xo = /\b(transform|all)(,|$)/;
        function Ko(e, t) {
          var n,
            r = window.getComputedStyle(e),
            o = (r[Vo + "Delay"] || "").split(", "),
            i = (r[Vo + "Duration"] || "").split(", "),
            s = ei(o, i),
            a = (r[zo + "Delay"] || "").split(", "),
            c = (r[zo + "Duration"] || "").split(", "),
            u = ei(a, c),
            l = 0,
            d = 0;
          return (
            t === Bo
              ? s > 0 && ((n = Bo), (l = s), (d = i.length))
              : t === Ho
              ? u > 0 && ((n = Ho), (l = u), (d = c.length))
              : (d = (n = (l = Math.max(s, u)) > 0 ? (s > u ? Bo : Ho) : null) ? (n === Bo ? i.length : c.length) : 0),
            { type: n, timeout: l, propCount: d, hasTransform: n === Bo && Xo.test(r[Vo + "Property"]) }
          );
        }
        function ei(e, t) {
          for (; e.length < t.length; ) e = e.concat(e);
          return Math.max.apply(
            null,
            t.map(function (t, n) {
              return ti(t) + ti(e[n]);
            })
          );
        }
        function ti(e) {
          return 1e3 * Number(e.slice(0, -1).replace(",", "."));
        }
        function ni(e, t) {
          var n = e.elm;
          s(n._leaveCb) && ((n._leaveCb.cancelled = !0), n._leaveCb());
          var r = Do(e.data.transition);
          if (!i(r) && !s(n._enterCb) && 1 === n.nodeType) {
            for (
              var o = r.css,
                a = r.type,
                c = r.enterClass,
                d = r.enterToClass,
                f = r.enterActiveClass,
                p = r.appearClass,
                h = r.appearToClass,
                g = r.appearActiveClass,
                v = r.beforeEnter,
                _ = r.enter,
                y = r.afterEnter,
                b = r.enterCancelled,
                w = r.beforeAppear,
                S = r.appear,
                k = r.afterAppear,
                O = r.appearCancelled,
                E = r.duration,
                T = kn,
                C = kn.$vnode;
              C && C.parent;

            )
              (T = C.context), (C = C.parent);
            var x = !T._isMounted || !e.isRootInsert;
            if (!x || S || "" === S) {
              var I = x && p ? p : c,
                j = x && g ? g : f,
                A = x && h ? h : d,
                P = (x && w) || v,
                R = x && u(S) ? S : _,
                M = (x && k) || y,
                L = (x && O) || b,
                N = m(l(E) ? E.enter : E),
                D = !1 !== o && !Q,
                F = ii(R),
                U = (n._enterCb = $(function () {
                  D && (Qo(n, A), Qo(n, j)), U.cancelled ? (D && Qo(n, I), L && L(n)) : M && M(n), (n._enterCb = null);
                }));
              e.data.show ||
                pt(e, "insert", function () {
                  var t = n.parentNode,
                    r = t && t._pending && t._pending[e.key];
                  r && r.tag === e.tag && r.elm._leaveCb && r.elm._leaveCb(), R && R(n, U);
                }),
                P && P(n),
                D &&
                  (Jo(n, I),
                  Jo(n, j),
                  Go(function () {
                    Qo(n, I), U.cancelled || (Jo(n, A), F || (oi(N) ? setTimeout(U, N) : Yo(n, a, U)));
                  })),
                e.data.show && (t && t(), R && R(n, U)),
                D || F || U();
            }
          }
        }
        function ri(e, t) {
          var n = e.elm;
          s(n._enterCb) && ((n._enterCb.cancelled = !0), n._enterCb());
          var r = Do(e.data.transition);
          if (i(r) || 1 !== n.nodeType) return t();
          if (!s(n._leaveCb)) {
            var o = r.css,
              a = r.type,
              c = r.leaveClass,
              u = r.leaveToClass,
              d = r.leaveActiveClass,
              f = r.beforeLeave,
              p = r.leave,
              h = r.afterLeave,
              g = r.leaveCancelled,
              v = r.delayLeave,
              _ = r.duration,
              y = !1 !== o && !Q,
              b = ii(p),
              w = m(l(_) ? _.leave : _),
              S = (n._leaveCb = $(function () {
                n.parentNode && n.parentNode._pending && (n.parentNode._pending[e.key] = null),
                  y && (Qo(n, u), Qo(n, d)),
                  S.cancelled ? (y && Qo(n, c), g && g(n)) : (t(), h && h(n)),
                  (n._leaveCb = null);
              }));
            v ? v(k) : k();
          }
          function k() {
            S.cancelled ||
              (!e.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[e.key] = e),
              f && f(n),
              y &&
                (Jo(n, c),
                Jo(n, d),
                Go(function () {
                  Qo(n, c), S.cancelled || (Jo(n, u), b || (oi(w) ? setTimeout(S, w) : Yo(n, a, S)));
                })),
              p && p(n, S),
              y || b || S());
          }
        }
        function oi(e) {
          return "number" == typeof e && !isNaN(e);
        }
        function ii(e) {
          if (i(e)) return !1;
          var t = e.fns;
          return s(t) ? ii(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1;
        }
        function si(e, t) {
          !0 !== t.data.show && ni(t);
        }
        var ai = (function (e) {
          var t,
            n,
            r = {},
            u = e.modules,
            l = e.nodeOps;
          for (t = 0; t < Qr.length; ++t) for (r[Qr[t]] = [], n = 0; n < u.length; ++n) s(u[n][Qr[t]]) && r[Qr[t]].push(u[n][Qr[t]]);
          function d(e) {
            var t = l.parentNode(e);
            s(t) && l.removeChild(t, e);
          }
          function f(e, t, n, o, i, c, u) {
            if (
              (s(e.elm) && s(c) && (e = c[u] = ge(e)),
              (e.isRootInsert = !i),
              !(function (e, t, n, o) {
                var i = e.data;
                if (s(i)) {
                  var c = s(e.componentInstance) && i.keepAlive;
                  if ((s((i = i.hook)) && s((i = i.init)) && i(e, !1), s(e.componentInstance)))
                    return (
                      p(e, t),
                      h(n, e.elm, o),
                      a(c) &&
                        (function (e, t, n, o) {
                          for (var i, a = e; a.componentInstance; )
                            if (s((i = (a = a.componentInstance._vnode).data)) && s((i = i.transition))) {
                              for (i = 0; i < r.activate.length; ++i) r.activate[i](Jr, a);
                              t.push(a);
                              break;
                            }
                          h(n, e.elm, o);
                        })(e, t, n, o),
                      !0
                    );
                }
              })(e, t, n, o))
            ) {
              var d = e.data,
                f = e.children,
                m = e.tag;
              s(m)
                ? ((e.elm = e.ns ? l.createElementNS(e.ns, m) : l.createElement(m, e)), y(e), g(e, f, t), s(d) && _(e, t), h(n, e.elm, o))
                : a(e.isComment)
                ? ((e.elm = l.createComment(e.text)), h(n, e.elm, o))
                : ((e.elm = l.createTextNode(e.text)), h(n, e.elm, o));
            }
          }
          function p(e, t) {
            s(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), (e.data.pendingInsert = null)),
              (e.elm = e.componentInstance.$el),
              m(e) ? (_(e, t), y(e)) : (Zr(e), t.push(e));
          }
          function h(e, t, n) {
            s(e) && (s(n) ? l.parentNode(n) === e && l.insertBefore(e, t, n) : l.appendChild(e, t));
          }
          function g(e, t, n) {
            if (o(t)) for (var r = 0; r < t.length; ++r) f(t[r], n, e.elm, null, !0, t, r);
            else c(e.text) && l.appendChild(e.elm, l.createTextNode(String(e.text)));
          }
          function m(e) {
            for (; e.componentInstance; ) e = e.componentInstance._vnode;
            return s(e.tag);
          }
          function _(e, n) {
            for (var o = 0; o < r.create.length; ++o) r.create[o](Jr, e);
            s((t = e.data.hook)) && (s(t.create) && t.create(Jr, e), s(t.insert) && n.push(e));
          }
          function y(e) {
            var t;
            if (s((t = e.fnScopeId))) l.setStyleScope(e.elm, t);
            else for (var n = e; n; ) s((t = n.context)) && s((t = t.$options._scopeId)) && l.setStyleScope(e.elm, t), (n = n.parent);
            s((t = kn)) && t !== e.context && t !== e.fnContext && s((t = t.$options._scopeId)) && l.setStyleScope(e.elm, t);
          }
          function b(e, t, n, r, o, i) {
            for (; r <= o; ++r) f(n[r], i, e, t, !1, n, r);
          }
          function w(e) {
            var t,
              n,
              o = e.data;
            if (s(o)) for (s((t = o.hook)) && s((t = t.destroy)) && t(e), t = 0; t < r.destroy.length; ++t) r.destroy[t](e);
            if (s((t = e.children))) for (n = 0; n < e.children.length; ++n) w(e.children[n]);
          }
          function S(e, t, n) {
            for (; t <= n; ++t) {
              var r = e[t];
              s(r) && (s(r.tag) ? (k(r), w(r)) : d(r.elm));
            }
          }
          function k(e, t) {
            if (s(t) || s(e.data)) {
              var n,
                o = r.remove.length + 1;
              for (
                s(t)
                  ? (t.listeners += o)
                  : (t = (function (e, t) {
                      function n() {
                        0 == --n.listeners && d(e);
                      }
                      return (n.listeners = t), n;
                    })(e.elm, o)),
                  s((n = e.componentInstance)) && s((n = n._vnode)) && s(n.data) && k(n, t),
                  n = 0;
                n < r.remove.length;
                ++n
              )
                r.remove[n](e, t);
              s((n = e.data.hook)) && s((n = n.remove)) ? n(e, t) : t();
            } else d(e.elm);
          }
          function O(e, t, n, r) {
            for (var o = n; o < r; o++) {
              var i = t[o];
              if (s(i) && Yr(e, i)) return o;
            }
          }
          function E(e, t, n, o, c, u) {
            if (e !== t) {
              s(t.elm) && s(o) && (t = o[c] = ge(t));
              var d = (t.elm = e.elm);
              if (a(e.isAsyncPlaceholder)) s(t.asyncFactory.resolved) ? x(e.elm, t, n) : (t.isAsyncPlaceholder = !0);
              else if (a(t.isStatic) && a(e.isStatic) && t.key === e.key && (a(t.isCloned) || a(t.isOnce)))
                t.componentInstance = e.componentInstance;
              else {
                var p,
                  h = t.data;
                s(h) && s((p = h.hook)) && s((p = p.prepatch)) && p(e, t);
                var g = e.children,
                  v = t.children;
                if (s(h) && m(t)) {
                  for (p = 0; p < r.update.length; ++p) r.update[p](e, t);
                  s((p = h.hook)) && s((p = p.update)) && p(e, t);
                }
                i(t.text)
                  ? s(g) && s(v)
                    ? g !== v &&
                      (function (e, t, n, r, o) {
                        for (
                          var a, c, u, d = 0, p = 0, h = t.length - 1, g = t[0], m = t[h], v = n.length - 1, _ = n[0], y = n[v], w = !o;
                          d <= h && p <= v;

                        )
                          i(g)
                            ? (g = t[++d])
                            : i(m)
                            ? (m = t[--h])
                            : Yr(g, _)
                            ? (E(g, _, r, n, p), (g = t[++d]), (_ = n[++p]))
                            : Yr(m, y)
                            ? (E(m, y, r, n, v), (m = t[--h]), (y = n[--v]))
                            : Yr(g, y)
                            ? (E(g, y, r, n, v), w && l.insertBefore(e, g.elm, l.nextSibling(m.elm)), (g = t[++d]), (y = n[--v]))
                            : Yr(m, _)
                            ? (E(m, _, r, n, p), w && l.insertBefore(e, m.elm, g.elm), (m = t[--h]), (_ = n[++p]))
                            : (i(a) && (a = Xr(t, d, h)),
                              i((c = s(_.key) ? a[_.key] : O(_, t, d, h)))
                                ? f(_, r, e, g.elm, !1, n, p)
                                : Yr((u = t[c]), _)
                                ? (E(u, _, r, n, p), (t[c] = void 0), w && l.insertBefore(e, u.elm, g.elm))
                                : f(_, r, e, g.elm, !1, n, p),
                              (_ = n[++p]));
                        d > h ? b(e, i(n[v + 1]) ? null : n[v + 1].elm, n, p, v, r) : p > v && S(t, d, h);
                      })(d, g, v, n, u)
                    : s(v)
                    ? (s(e.text) && l.setTextContent(d, ""), b(d, null, v, 0, v.length - 1, n))
                    : s(g)
                    ? S(g, 0, g.length - 1)
                    : s(e.text) && l.setTextContent(d, "")
                  : e.text !== t.text && l.setTextContent(d, t.text),
                  s(h) && s((p = h.hook)) && s((p = p.postpatch)) && p(e, t);
              }
            }
          }
          function T(e, t, n) {
            if (a(n) && s(e.parent)) e.parent.data.pendingInsert = t;
            else for (var r = 0; r < t.length; ++r) t[r].data.hook.insert(t[r]);
          }
          var C = v("attrs,class,staticClass,staticStyle,key");
          function x(e, t, n, r) {
            var o,
              i = t.tag,
              c = t.data,
              u = t.children;
            if (((r = r || (c && c.pre)), (t.elm = e), a(t.isComment) && s(t.asyncFactory))) return (t.isAsyncPlaceholder = !0), !0;
            if (s(c) && (s((o = c.hook)) && s((o = o.init)) && o(t, !0), s((o = t.componentInstance)))) return p(t, n), !0;
            if (s(i)) {
              if (s(u))
                if (e.hasChildNodes())
                  if (s((o = c)) && s((o = o.domProps)) && s((o = o.innerHTML))) {
                    if (o !== e.innerHTML) return !1;
                  } else {
                    for (var l = !0, d = e.firstChild, f = 0; f < u.length; f++) {
                      if (!d || !x(d, u[f], n, r)) {
                        l = !1;
                        break;
                      }
                      d = d.nextSibling;
                    }
                    if (!l || d) return !1;
                  }
                else g(t, u, n);
              if (s(c)) {
                var h = !1;
                for (var m in c)
                  if (!C(m)) {
                    (h = !0), _(t, n);
                    break;
                  }
                !h && c.class && hn(c.class);
              }
            } else e.data !== t.text && (e.data = t.text);
            return !0;
          }
          return function (e, t, n, o) {
            if (!i(t)) {
              var c,
                u = !1,
                d = [];
              if (i(e)) (u = !0), f(t, d);
              else {
                var p = s(e.nodeType);
                if (!p && Yr(e, t)) E(e, t, d, null, null, o);
                else {
                  if (p) {
                    if ((1 === e.nodeType && e.hasAttribute(F) && (e.removeAttribute(F), (n = !0)), a(n) && x(e, t, d)))
                      return T(t, d, !0), e;
                    (c = e), (e = new fe(l.tagName(c).toLowerCase(), {}, [], void 0, c));
                  }
                  var h = e.elm,
                    g = l.parentNode(h);
                  if ((f(t, d, h._leaveCb ? null : g, l.nextSibling(h)), s(t.parent)))
                    for (var v = t.parent, _ = m(t); v; ) {
                      for (var y = 0; y < r.destroy.length; ++y) r.destroy[y](v);
                      if (((v.elm = t.elm), _)) {
                        for (var b = 0; b < r.create.length; ++b) r.create[b](Jr, v);
                        var k = v.data.hook.insert;
                        if (k.merged) for (var O = 1; O < k.fns.length; O++) k.fns[O]();
                      } else Zr(v);
                      v = v.parent;
                    }
                  s(g) ? S([e], 0, 0) : s(e.tag) && w(e);
                }
              }
              return T(t, d, u), t.elm;
            }
            s(e) && w(e);
          };
        })({
          nodeOps: zr,
          modules: [
            uo,
            po,
            bo,
            ko,
            Mo,
            Z
              ? {
                  create: si,
                  activate: si,
                  remove: function (e, t) {
                    !0 !== e.data.show ? ri(e, t) : t();
                  }
                }
              : {}
          ].concat(io)
        });
        Q &&
          document.addEventListener("selectionchange", function () {
            var e = document.activeElement;
            e && e.vmodel && gi(e, "input");
          });
        var ci = {
          inserted: function (e, t, n, r) {
            "select" === n.tag
              ? (r.elm && !r.elm._vOptions
                  ? pt(n, "postpatch", function () {
                      ci.componentUpdated(e, t, n);
                    })
                  : ui(e, t, n.context),
                (e._vOptions = [].map.call(e.options, fi)))
              : ("textarea" === n.tag || qr(e.type)) &&
                ((e._vModifiers = t.modifiers),
                t.modifiers.lazy ||
                  (e.addEventListener("compositionstart", pi),
                  e.addEventListener("compositionend", hi),
                  e.addEventListener("change", hi),
                  Q && (e.vmodel = !0)));
          },
          componentUpdated: function (e, t, n) {
            if ("select" === n.tag) {
              ui(e, t, n.context);
              var r = e._vOptions,
                o = (e._vOptions = [].map.call(e.options, fi));
              o.some(function (e, t) {
                return !L(e, r[t]);
              }) &&
                (e.multiple
                  ? t.value.some(function (e) {
                      return di(e, o);
                    })
                  : t.value !== t.oldValue && di(t.value, o)) &&
                gi(e, "change");
            }
          }
        };
        function ui(e, t, n) {
          li(e, t),
            (J || Y) &&
              setTimeout(function () {
                li(e, t);
              }, 0);
        }
        function li(e, t, n) {
          var r = t.value,
            o = e.multiple;
          if (!o || Array.isArray(r)) {
            for (var i, s, a = 0, c = e.options.length; a < c; a++)
              if (((s = e.options[a]), o)) (i = N(r, fi(s)) > -1), s.selected !== i && (s.selected = i);
              else if (L(fi(s), r)) return void (e.selectedIndex !== a && (e.selectedIndex = a));
            o || (e.selectedIndex = -1);
          }
        }
        function di(e, t) {
          return t.every(function (t) {
            return !L(t, e);
          });
        }
        function fi(e) {
          return "_value" in e ? e._value : e.value;
        }
        function pi(e) {
          e.target.composing = !0;
        }
        function hi(e) {
          e.target.composing && ((e.target.composing = !1), gi(e.target, "input"));
        }
        function gi(e, t) {
          var n = document.createEvent("HTMLEvents");
          n.initEvent(t, !0, !0), e.dispatchEvent(n);
        }
        function mi(e) {
          return !e.componentInstance || (e.data && e.data.transition) ? e : mi(e.componentInstance._vnode);
        }
        var vi = {
            model: ci,
            show: {
              bind: function (e, t, n) {
                var r = t.value,
                  o = (n = mi(n)).data && n.data.transition,
                  i = (e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display);
                r && o
                  ? ((n.data.show = !0),
                    ni(n, function () {
                      e.style.display = i;
                    }))
                  : (e.style.display = r ? i : "none");
              },
              update: function (e, t, n) {
                var r = t.value;
                !r != !t.oldValue &&
                  ((n = mi(n)).data && n.data.transition
                    ? ((n.data.show = !0),
                      r
                        ? ni(n, function () {
                            e.style.display = e.__vOriginalDisplay;
                          })
                        : ri(n, function () {
                            e.style.display = "none";
                          }))
                    : (e.style.display = r ? e.__vOriginalDisplay : "none"));
              },
              unbind: function (e, t, n, r, o) {
                o || (e.style.display = e.__vOriginalDisplay);
              }
            }
          },
          _i = {
            name: String,
            appear: Boolean,
            css: Boolean,
            mode: String,
            type: String,
            enterClass: String,
            leaveClass: String,
            enterToClass: String,
            leaveToClass: String,
            enterActiveClass: String,
            leaveActiveClass: String,
            appearClass: String,
            appearActiveClass: String,
            appearToClass: String,
            duration: [Number, String, Object]
          };
        function yi(e) {
          var t = e && e.componentOptions;
          return t && t.Ctor.options.abstract ? yi(qt(t.children)) : e;
        }
        function bi(e) {
          var t = {},
            n = e.$options;
          for (var r in n.propsData) t[r] = e[r];
          var o = n._parentListeners;
          for (var r in o) t[O(r)] = o[r];
          return t;
        }
        function wi(e, t) {
          if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", { props: t.componentOptions.propsData });
        }
        var Si = function (e) {
            return e.tag || Lt(e);
          },
          ki = function (e) {
            return "show" === e.name;
          },
          Oi = {
            name: "transition",
            props: _i,
            abstract: !0,
            render: function (e) {
              var t = this,
                n = this.$slots.default;
              if (n && (n = n.filter(Si)).length) {
                var r = this.mode,
                  o = n[0];
                if (
                  (function (e) {
                    for (; (e = e.parent); ) if (e.data.transition) return !0;
                  })(this.$vnode)
                )
                  return o;
                var i = yi(o);
                if (!i) return o;
                if (this._leaving) return wi(e, o);
                var s = "__transition-".concat(this._uid, "-");
                i.key =
                  null == i.key
                    ? i.isComment
                      ? s + "comment"
                      : s + i.tag
                    : c(i.key)
                    ? 0 === String(i.key).indexOf(s)
                      ? i.key
                      : s + i.key
                    : i.key;
                var a = ((i.data || (i.data = {})).transition = bi(this)),
                  u = this._vnode,
                  l = yi(u);
                if (
                  (i.data.directives && i.data.directives.some(ki) && (i.data.show = !0),
                  l &&
                    l.data &&
                    !(function (e, t) {
                      return t.key === e.key && t.tag === e.tag;
                    })(i, l) &&
                    !Lt(l) &&
                    (!l.componentInstance || !l.componentInstance._vnode.isComment))
                ) {
                  var d = (l.data.transition = j({}, a));
                  if ("out-in" === r)
                    return (
                      (this._leaving = !0),
                      pt(d, "afterLeave", function () {
                        (t._leaving = !1), t.$forceUpdate();
                      }),
                      wi(e, o)
                    );
                  if ("in-out" === r) {
                    if (Lt(i)) return u;
                    var f,
                      p = function () {
                        f();
                      };
                    pt(a, "afterEnter", p),
                      pt(a, "enterCancelled", p),
                      pt(d, "delayLeave", function (e) {
                        f = e;
                      });
                  }
                }
                return o;
              }
            }
          },
          Ei = j({ tag: String, moveClass: String }, _i);
        function Ti(e) {
          e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb();
        }
        function Ci(e) {
          e.data.newPos = e.elm.getBoundingClientRect();
        }
        function xi(e) {
          var t = e.data.pos,
            n = e.data.newPos,
            r = t.left - n.left,
            o = t.top - n.top;
          if (r || o) {
            e.data.moved = !0;
            var i = e.elm.style;
            (i.transform = i.WebkitTransform = "translate(".concat(r, "px,").concat(o, "px)")), (i.transitionDuration = "0s");
          }
        }
        delete Ei.mode;
        var Ii = {
          Transition: Oi,
          TransitionGroup: {
            props: Ei,
            beforeMount: function () {
              var e = this,
                t = this._update;
              this._update = function (n, r) {
                var o = On(e);
                e.__patch__(e._vnode, e.kept, !1, !0), (e._vnode = e.kept), o(), t.call(e, n, r);
              };
            },
            render: function (e) {
              for (
                var t = this.tag || this.$vnode.data.tag || "span",
                  n = Object.create(null),
                  r = (this.prevChildren = this.children),
                  o = this.$slots.default || [],
                  i = (this.children = []),
                  s = bi(this),
                  a = 0;
                a < o.length;
                a++
              )
                (l = o[a]).tag &&
                  null != l.key &&
                  0 !== String(l.key).indexOf("__vlist") &&
                  (i.push(l), (n[l.key] = l), ((l.data || (l.data = {})).transition = s));
              if (r) {
                var c = [],
                  u = [];
                for (a = 0; a < r.length; a++) {
                  var l;
                  ((l = r[a]).data.transition = s), (l.data.pos = l.elm.getBoundingClientRect()), n[l.key] ? c.push(l) : u.push(l);
                }
                (this.kept = e(t, null, c)), (this.removed = u);
              }
              return e(t, null, i);
            },
            updated: function () {
              var e = this.prevChildren,
                t = this.moveClass || (this.name || "v") + "-move";
              e.length &&
                this.hasMove(e[0].elm, t) &&
                (e.forEach(Ti),
                e.forEach(Ci),
                e.forEach(xi),
                (this._reflow = document.body.offsetHeight),
                e.forEach(function (e) {
                  if (e.data.moved) {
                    var n = e.elm,
                      r = n.style;
                    Jo(n, t),
                      (r.transform = r.WebkitTransform = r.transitionDuration = ""),
                      n.addEventListener(
                        qo,
                        (n._moveCb = function e(r) {
                          (r && r.target !== n) ||
                            (r && !/transform$/.test(r.propertyName)) ||
                            (n.removeEventListener(qo, e), (n._moveCb = null), Qo(n, t));
                        })
                      );
                  }
                }));
            },
            methods: {
              hasMove: function (e, t) {
                if (!Uo) return !1;
                if (this._hasMove) return this._hasMove;
                var n = e.cloneNode();
                e._transitionClasses &&
                  e._transitionClasses.forEach(function (e) {
                    $o(n, e);
                  }),
                  No(n, t),
                  (n.style.display = "none"),
                  this.$el.appendChild(n);
                var r = Ko(n);
                return this.$el.removeChild(n), (this._hasMove = r.hasTransform);
              }
            }
          }
        };
        (br.config.mustUseProp = function (e, t, n) {
          return (
            ("value" === n && xr(e) && "button" !== t) ||
            ("selected" === n && "option" === e) ||
            ("checked" === n && "input" === e) ||
            ("muted" === n && "video" === e)
          );
        }),
          (br.config.isReservedTag = Hr),
          (br.config.isReservedAttr = Cr),
          (br.config.getTagNamespace = function (e) {
            return Br(e) ? "svg" : "math" === e ? "math" : void 0;
          }),
          (br.config.isUnknownElement = function (e) {
            if (!Z) return !0;
            if (Hr(e)) return !1;
            if (((e = e.toLowerCase()), null != Vr[e])) return Vr[e];
            var t = document.createElement(e);
            return e.indexOf("-") > -1
              ? (Vr[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement)
              : (Vr[e] = /HTMLUnknownElement/.test(t.toString()));
          }),
          j(br.options.directives, vi),
          j(br.options.components, Ii),
          (br.prototype.__patch__ = Z ? ai : P),
          (br.prototype.$mount = function (e, t) {
            return (function (e, t, n) {
              var r;
              (e.$el = t),
                e.$options.render || (e.$options.render = pe),
                xn(e, "beforeMount"),
                (r = function () {
                  e._update(e._render(), n);
                }),
                new _n(
                  e,
                  r,
                  P,
                  {
                    before: function () {
                      e._isMounted && !e._isDestroyed && xn(e, "beforeUpdate");
                    }
                  },
                  !0
                ),
                (n = !1);
              var o = e._preWatchers;
              if (o) for (var i = 0; i < o.length; i++) o[i].run();
              return null == e.$vnode && ((e._isMounted = !0), xn(e, "mounted")), e;
            })(
              this,
              (e =
                e && Z
                  ? (function (e) {
                      return "string" == typeof e ? document.querySelector(e) || document.createElement("div") : e;
                    })(e)
                  : void 0),
              t
            );
          }),
          Z &&
            setTimeout(function () {
              H.devtools && ie && ie.emit("init", br);
            }, 0);
      },
      43325: (e, t, n) => {
        var r = {
          "./addMetric/main": [64164, 9, 4818, 8781, 4164],
          "./apps/main": [84141, 9, 4818, 3418, 4141],
          "./background-info/main": [16588, 9, 4818, 6588],
          "./background/main": [13661, 9, 4818, 3661],
          "./baseMetric/main": [84537, 9, 4818, 3064, 5645, 8781, 1103, 4537],
          "./bookmarks/main": [41455, 9, 4818, 1455],
          "./center-region/main": [6383, 9, 4818, 6383],
          "./chat/main": [56518, 9, 4818, 4317, 6518],
          "./colorPicker/main": [79980, 9, 4818, 1001, 654],
          "./dev_panel/main": [37734, 9, 4818, 7734],
          "./flashMessage/main": [89381, 9, 4818, 9381],
          "./focus/main": [80309, 7, 309],
          "./full-screen-portals/main": [84428, 9, 4818, 8725, 7744],
          "./introduction/main": [55777, 9, 4818, 5777],
          "./links/main": [43120, 9, 4818, 4317, 3370, 3272],
          "./mockTodo/main": [61266, 9, 4818, 1266],
          "./modal/main": [18955, 9, 4818, 3064, 7651, 6640, 8955],
          "./notes/main": [28544, 9, 4818, 4317, 8544],
          "./quicklinks/main": [11477, 9, 202, 1477],
          "./quote/main": [17886, 9, 4818, 7886],
          "./region-center-below/main": [68875, 9, 4818, 8875],
          "./search/main": [56345, 9, 4818, 3418, 9443, 1689, 4385],
          "./soundscapes/main": [68993, 9, 4818, 1766, 4317, 8993],
          "./tabs/main": [13581, 9, 4818, 4317, 3581],
          "./team-logo/main": [26838, 9, 4818, 6838],
          "./template-placeholder/main": [3137, 9, 4818, 3137],
          "./template/main": [60732, 9, 4818, 732],
          "./topics/main": [46011, 9, 4818, 6011],
          "./weather/main": [30141, 9, 4818, 4317, 4411, 141]
        };
        function o(e) {
          if (!n.o(r, e))
            return Promise.resolve().then(() => {
              var t = new Error("Cannot find module '" + e + "'");
              throw ((t.code = "MODULE_NOT_FOUND"), t);
            });
          var t = r[e],
            o = t[0];
          return Promise.all(t.slice(2).map(n.e)).then(() => n.t(o, 16 | t[1]));
        }
        (o.keys = () => Object.keys(r)), (o.id = 43325), (e.exports = o);
      },
      95326: (e, t, n) => {
        var r = {
          "./_addSvgClassList": 35258,
          "./_addSvgClassList.js": 35258,
          "./browserIcon": 57337,
          "./browserIcon.js": 57337,
          "./browserName": 13458,
          "./browserName.js": 13458,
          "./compareObjects": 94119,
          "./compareObjects.ts": 94119,
          "./iconCancel": 89281,
          "./iconCancel.js": 89281,
          "./iconEllipsis": 69023,
          "./iconEllipsis.js": 69023,
          "./isChrome": 12581,
          "./isChrome.js": 12581,
          "./isChromium": 957,
          "./isChromium.js": 957,
          "./kebab": 78241,
          "./kebab.js": 78241,
          "./lower": 8042,
          "./lower.js": 8042,
          "./mockStorePlugin": 30936,
          "./mockStorePlugin.ts": 30936,
          "./skipIconPath": 57744,
          "./skipIconPath.js": 57744,
          "./types": 68013,
          "./types.ts": 68013
        };
        function o(e) {
          var t = i(e);
          return n(t);
        }
        function i(e) {
          if (!n.o(r, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          }
          return r[e];
        }
        (o.keys = function () {
          return Object.keys(r);
        }),
          (o.resolve = i),
          (e.exports = o),
          (o.id = 95326);
      },
      70444: (e) => {
        "use strict";
        e.exports =
          "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNjQgMzJDNjQgNDkuNjczMSA0OS42NzMxIDY0IDMyIDY0QzE0LjMyNjkgNjQgMCA0OS42NzMxIDAgMzJDMCAxNC4zMjY5IDE0LjMyNjkgMCAzMiAwQzQ5LjY3MzEgMCA2NCAxNC4zMjY5IDY0IDMyWk0yOCA0NkMyOCA0My43OTA5IDI5Ljc5MDkgNDIgMzIgNDJDMzQuMjA5MSA0MiAzNiA0My43OTA5IDM2IDQ2QzM2IDQ4LjIwOTEgMzQuMjA5MSA1MCAzMiA1MEMyOS43OTA5IDUwIDI4IDQ4LjIwOTEgMjggNDZaTTMyIDE1QzI5Ljc5MDkgMTUgMjggMTYuNzkwOSAyOCAxOVYzM0MyOCAzNS4yMDkxIDI5Ljc5MDkgMzcgMzIgMzdDMzQuMjA5MSAzNyAzNiAzNS4yMDkxIDM2IDMzVjE5QzM2IDE2Ljc5MDkgMzQuMjA5MSAxNSAzMiAxNVoiIC8+Cjwvc3ZnPgo=";
      },
      52861: (e, t, n) => {
        "use strict";
        function r(e, t) {
          return function () {
            return e.apply(t, arguments);
          };
        }
        n.d(t, { Z: () => $e });
        const { toString: o } = Object.prototype,
          { getPrototypeOf: i } = Object,
          s =
            ((a = Object.create(null)),
            (e) => {
              const t = o.call(e);
              return a[t] || (a[t] = t.slice(8, -1).toLowerCase());
            });
        var a;
        const c = (e) => ((e = e.toLowerCase()), (t) => s(t) === e),
          u = (e) => (t) => typeof t === e,
          { isArray: l } = Array,
          d = u("undefined"),
          f = c("ArrayBuffer"),
          p = u("string"),
          h = u("function"),
          g = u("number"),
          m = (e) => null !== e && "object" == typeof e,
          v = (e) => {
            if ("object" !== s(e)) return !1;
            const t = i(e);
            return !(
              (null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t)) ||
              Symbol.toStringTag in e ||
              Symbol.iterator in e
            );
          },
          _ = c("Date"),
          y = c("File"),
          b = c("Blob"),
          w = c("FileList"),
          S = c("URLSearchParams");
        function k(e, t, { allOwnKeys: n = !1 } = {}) {
          if (null == e) return;
          let r, o;
          if (("object" != typeof e && (e = [e]), l(e))) for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
          else {
            const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
              i = o.length;
            let s;
            for (r = 0; r < i; r++) (s = o[r]), t.call(null, e[s], s, e);
          }
        }
        function O(e, t) {
          t = t.toLowerCase();
          const n = Object.keys(e);
          let r,
            o = n.length;
          for (; o-- > 0; ) if (((r = n[o]), t === r.toLowerCase())) return r;
          return null;
        }
        const E =
            "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : global,
          T = (e) => !d(e) && e !== E,
          C = ((x = "undefined" != typeof Uint8Array && i(Uint8Array)), (e) => x && e instanceof x);
        var x;
        const I = c("HTMLFormElement"),
          j = (
            ({ hasOwnProperty: e }) =>
            (t, n) =>
              e.call(t, n)
          )(Object.prototype),
          A = c("RegExp"),
          P = (e, t) => {
            const n = Object.getOwnPropertyDescriptors(e),
              r = {};
            k(n, (n, o) => {
              !1 !== t(n, o, e) && (r[o] = n);
            }),
              Object.defineProperties(e, r);
          },
          R = "abcdefghijklmnopqrstuvwxyz",
          M = "0123456789",
          L = { DIGIT: M, ALPHA: R, ALPHA_DIGIT: R + R.toUpperCase() + M },
          N = c("AsyncFunction"),
          $ = {
            isArray: l,
            isArrayBuffer: f,
            isBuffer: function (e) {
              return (
                null !== e && !d(e) && null !== e.constructor && !d(e.constructor) && h(e.constructor.isBuffer) && e.constructor.isBuffer(e)
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
              return (
                (t = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && f(e.buffer)), t
              );
            },
            isString: p,
            isNumber: g,
            isBoolean: (e) => !0 === e || !1 === e,
            isObject: m,
            isPlainObject: v,
            isUndefined: d,
            isDate: _,
            isFile: y,
            isBlob: b,
            isRegExp: A,
            isFunction: h,
            isStream: (e) => m(e) && h(e.pipe),
            isURLSearchParams: S,
            isTypedArray: C,
            isFileList: w,
            forEach: k,
            merge: function e() {
              const { caseless: t } = (T(this) && this) || {},
                n = {},
                r = (r, o) => {
                  const i = (t && O(n, o)) || o;
                  v(n[i]) && v(r) ? (n[i] = e(n[i], r)) : v(r) ? (n[i] = e({}, r)) : l(r) ? (n[i] = r.slice()) : (n[i] = r);
                };
              for (let e = 0, t = arguments.length; e < t; e++) arguments[e] && k(arguments[e], r);
              return n;
            },
            extend: (e, t, n, { allOwnKeys: o } = {}) => (
              k(
                t,
                (t, o) => {
                  n && h(t) ? (e[o] = r(t, n)) : (e[o] = t);
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
              let o, s, a;
              const c = {};
              if (((t = t || {}), null == e)) return t;
              do {
                for (o = Object.getOwnPropertyNames(e), s = o.length; s-- > 0; )
                  (a = o[s]), (r && !r(a, e, t)) || c[a] || ((t[a] = e[a]), (c[a] = !0));
                e = !1 !== n && i(e);
              } while (e && (!n || n(e, t)) && e !== Object.prototype);
              return t;
            },
            kindOf: s,
            kindOfTest: c,
            endsWith: (e, t, n) => {
              (e = String(e)), (void 0 === n || n > e.length) && (n = e.length), (n -= t.length);
              const r = e.indexOf(t, n);
              return -1 !== r && r === n;
            },
            toArray: (e) => {
              if (!e) return null;
              if (l(e)) return e;
              let t = e.length;
              if (!g(t)) return null;
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
            isHTMLForm: I,
            hasOwnProperty: j,
            hasOwnProp: j,
            reduceDescriptors: P,
            freezeMethods: (e) => {
              P(e, (t, n) => {
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
              return l(e) ? r(e) : r(String(e).split(t)), n;
            },
            toCamelCase: (e) =>
              e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
                return t.toUpperCase() + n;
              }),
            noop: () => {},
            toFiniteNumber: (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
            findKey: O,
            global: E,
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
                      const o = l(e) ? [] : {};
                      return (
                        k(e, (e, t) => {
                          const i = n(e, r + 1);
                          !d(i) && (o[t] = i);
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
            isAsyncFn: N,
            isThenable: (e) => e && (m(e) || h(e)) && h(e.then) && h(e.catch)
          };
        function D(e, t, n, r, o) {
          Error.call(this),
            Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : (this.stack = new Error().stack),
            (this.message = e),
            (this.name = "AxiosError"),
            t && (this.code = t),
            n && (this.config = n),
            r && (this.request = r),
            o && (this.response = o);
        }
        $.inherits(D, Error, {
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
              config: $.toJSONObject(this.config),
              code: this.code,
              status: this.response && this.response.status ? this.response.status : null
            };
          }
        });
        const F = D.prototype,
          U = {};
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
          U[e] = { value: e };
        }),
          Object.defineProperties(D, U),
          Object.defineProperty(F, "isAxiosError", { value: !0 }),
          (D.from = (e, t, n, r, o, i) => {
            const s = Object.create(F);
            return (
              $.toFlatObject(
                e,
                s,
                function (e) {
                  return e !== Error.prototype;
                },
                (e) => "isAxiosError" !== e
              ),
              D.call(s, e.message, t, n, r, o),
              (s.cause = e),
              (s.name = e.name),
              i && Object.assign(s, i),
              s
            );
          });
        const B = D;
        function H(e) {
          return $.isPlainObject(e) || $.isArray(e);
        }
        function V(e) {
          return $.endsWith(e, "[]") ? e.slice(0, -2) : e;
        }
        function q(e, t, n) {
          return e
            ? e
                .concat(t)
                .map(function (e, t) {
                  return (e = V(e)), !n && t ? "[" + e + "]" : e;
                })
                .join(n ? "." : "")
            : t;
        }
        const z = $.toFlatObject($, {}, null, function (e) {
            return /^is[A-Z]/.test(e);
          }),
          W = function (e, t, n) {
            if (!$.isObject(e)) throw new TypeError("target must be an object");
            t = t || new FormData();
            const r = (n = $.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (e, t) {
                return !$.isUndefined(t[e]);
              })).metaTokens,
              o = n.visitor || u,
              i = n.dots,
              s = n.indexes,
              a = (n.Blob || ("undefined" != typeof Blob && Blob)) && $.isSpecCompliantForm(t);
            if (!$.isFunction(o)) throw new TypeError("visitor must be a function");
            function c(e) {
              if (null === e) return "";
              if ($.isDate(e)) return e.toISOString();
              if (!a && $.isBlob(e)) throw new B("Blob is not supported. Use a Buffer instead.");
              return $.isArrayBuffer(e) || $.isTypedArray(e) ? (a && "function" == typeof Blob ? new Blob([e]) : Buffer.from(e)) : e;
            }
            function u(e, n, o) {
              let a = e;
              if (e && !o && "object" == typeof e)
                if ($.endsWith(n, "{}")) (n = r ? n : n.slice(0, -2)), (e = JSON.stringify(e));
                else if (
                  ($.isArray(e) &&
                    (function (e) {
                      return $.isArray(e) && !e.some(H);
                    })(e)) ||
                  (($.isFileList(e) || $.endsWith(n, "[]")) && (a = $.toArray(e)))
                )
                  return (
                    (n = V(n)),
                    a.forEach(function (e, r) {
                      !$.isUndefined(e) && null !== e && t.append(!0 === s ? q([n], r, i) : null === s ? n : n + "[]", c(e));
                    }),
                    !1
                  );
              return !!H(e) || (t.append(q(o, n, i), c(e)), !1);
            }
            const l = [],
              d = Object.assign(z, { defaultVisitor: u, convertValue: c, isVisitable: H });
            if (!$.isObject(e)) throw new TypeError("data must be an object");
            return (
              (function e(n, r) {
                if (!$.isUndefined(n)) {
                  if (-1 !== l.indexOf(n)) throw Error("Circular reference detected in " + r.join("."));
                  l.push(n),
                    $.forEach(n, function (n, i) {
                      !0 === (!($.isUndefined(n) || null === n) && o.call(t, n, $.isString(i) ? i.trim() : i, r, d)) &&
                        e(n, r ? r.concat(i) : [i]);
                    }),
                    l.pop();
                }
              })(e),
              t
            );
          };
        function Z(e) {
          const t = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" };
          return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
            return t[e];
          });
        }
        function G(e, t) {
          (this._pairs = []), e && W(e, this, t);
        }
        const J = G.prototype;
        (J.append = function (e, t) {
          this._pairs.push([e, t]);
        }),
          (J.toString = function (e) {
            const t = e
              ? function (t) {
                  return e.call(this, t, Z);
                }
              : Z;
            return this._pairs
              .map(function (e) {
                return t(e[0]) + "=" + t(e[1]);
              }, "")
              .join("&");
          });
        const Q = G;
        function Y(e) {
          return encodeURIComponent(e)
            .replace(/%3A/gi, ":")
            .replace(/%24/g, "$")
            .replace(/%2C/gi, ",")
            .replace(/%20/g, "+")
            .replace(/%5B/gi, "[")
            .replace(/%5D/gi, "]");
        }
        function X(e, t, n) {
          if (!t) return e;
          const r = (n && n.encode) || Y,
            o = n && n.serialize;
          let i;
          if (((i = o ? o(t, n) : $.isURLSearchParams(t) ? t.toString() : new Q(t, n).toString(r)), i)) {
            const t = e.indexOf("#");
            -1 !== t && (e = e.slice(0, t)), (e += (-1 === e.indexOf("?") ? "?" : "&") + i);
          }
          return e;
        }
        const K = class {
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
              $.forEach(this.handlers, function (t) {
                null !== t && e(t);
              });
            }
          },
          ee = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
          te = {
            isBrowser: !0,
            classes: {
              URLSearchParams: "undefined" != typeof URLSearchParams ? URLSearchParams : Q,
              FormData: "undefined" != typeof FormData ? FormData : null,
              Blob: "undefined" != typeof Blob ? Blob : null
            },
            isStandardBrowserEnv: (() => {
              let e;
              return (
                ("undefined" == typeof navigator || ("ReactNative" !== (e = navigator.product) && "NativeScript" !== e && "NS" !== e)) &&
                "undefined" != typeof window &&
                "undefined" != typeof document
              );
            })(),
            isStandardBrowserWebWorkerEnv:
              "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts,
            protocols: ["http", "https", "file", "blob", "url", "data"]
          },
          ne = function (e) {
            function t(e, n, r, o) {
              let i = e[o++];
              const s = Number.isFinite(+i),
                a = o >= e.length;
              return (
                (i = !i && $.isArray(r) ? r.length : i),
                a
                  ? ($.hasOwnProp(r, i) ? (r[i] = [r[i], n]) : (r[i] = n), !s)
                  : ((r[i] && $.isObject(r[i])) || (r[i] = []),
                    t(e, n, r[i], o) &&
                      $.isArray(r[i]) &&
                      (r[i] = (function (e) {
                        const t = {},
                          n = Object.keys(e);
                        let r;
                        const o = n.length;
                        let i;
                        for (r = 0; r < o; r++) (i = n[r]), (t[i] = e[i]);
                        return t;
                      })(r[i])),
                    !s)
              );
            }
            if ($.isFormData(e) && $.isFunction(e.entries)) {
              const n = {};
              return (
                $.forEachEntry(e, (e, r) => {
                  t(
                    (function (e) {
                      return $.matchAll(/\w+|\[(\w*)]/g, e).map((e) => ("[]" === e[0] ? "" : e[1] || e[0]));
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
          re = { "Content-Type": void 0 },
          oe = {
            transitional: ee,
            adapter: ["xhr", "http"],
            transformRequest: [
              function (e, t) {
                const n = t.getContentType() || "",
                  r = n.indexOf("application/json") > -1,
                  o = $.isObject(e);
                if ((o && $.isHTMLForm(e) && (e = new FormData(e)), $.isFormData(e))) return r && r ? JSON.stringify(ne(e)) : e;
                if ($.isArrayBuffer(e) || $.isBuffer(e) || $.isStream(e) || $.isFile(e) || $.isBlob(e)) return e;
                if ($.isArrayBufferView(e)) return e.buffer;
                if ($.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
                let i;
                if (o) {
                  if (n.indexOf("application/x-www-form-urlencoded") > -1)
                    return (function (e, t) {
                      return W(
                        e,
                        new te.classes.URLSearchParams(),
                        Object.assign(
                          {
                            visitor: function (e, t, n, r) {
                              return te.isNode && $.isBuffer(e)
                                ? (this.append(t, e.toString("base64")), !1)
                                : r.defaultVisitor.apply(this, arguments);
                            }
                          },
                          t
                        )
                      );
                    })(e, this.formSerializer).toString();
                  if ((i = $.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                    const t = this.env && this.env.FormData;
                    return W(i ? { "files[]": e } : e, t && new t(), this.formSerializer);
                  }
                }
                return o || r
                  ? (t.setContentType("application/json", !1),
                    (function (e, t, n) {
                      if ($.isString(e))
                        try {
                          return (0, JSON.parse)(e), $.trim(e);
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
                const t = this.transitional || oe.transitional,
                  n = t && t.forcedJSONParsing,
                  r = "json" === this.responseType;
                if (e && $.isString(e) && ((n && !this.responseType) || r)) {
                  const n = !(t && t.silentJSONParsing) && r;
                  try {
                    return JSON.parse(e);
                  } catch (e) {
                    if (n) {
                      if ("SyntaxError" === e.name) throw B.from(e, B.ERR_BAD_RESPONSE, this, null, this.response);
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
            env: { FormData: te.classes.FormData, Blob: te.classes.Blob },
            validateStatus: function (e) {
              return e >= 200 && e < 300;
            },
            headers: { common: { Accept: "application/json, text/plain, */*" } }
          };
        $.forEach(["delete", "get", "head"], function (e) {
          oe.headers[e] = {};
        }),
          $.forEach(["post", "put", "patch"], function (e) {
            oe.headers[e] = $.merge(re);
          });
        const ie = oe,
          se = $.toObjectSet([
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
          ae = Symbol("internals");
        function ce(e) {
          return e && String(e).trim().toLowerCase();
        }
        function ue(e) {
          return !1 === e || null == e ? e : $.isArray(e) ? e.map(ue) : String(e);
        }
        function le(e, t, n, r, o) {
          return $.isFunction(r)
            ? r.call(this, t, n)
            : (o && (t = n), $.isString(t) ? ($.isString(r) ? -1 !== t.indexOf(r) : $.isRegExp(r) ? r.test(t) : void 0) : void 0);
        }
        class de {
          constructor(e) {
            e && this.set(e);
          }
          set(e, t, n) {
            const r = this;
            function o(e, t, n) {
              const o = ce(t);
              if (!o) throw new Error("header name must be a non-empty string");
              const i = $.findKey(r, o);
              (!i || void 0 === r[i] || !0 === n || (void 0 === n && !1 !== r[i])) && (r[i || t] = ue(e));
            }
            const i = (e, t) => $.forEach(e, (e, n) => o(e, n, t));
            return (
              $.isPlainObject(e) || e instanceof this.constructor
                ? i(e, t)
                : $.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
                ? i(
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
                                (t[n] && se[n]) ||
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
            if ((e = ce(e))) {
              const n = $.findKey(this, e);
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
                if ($.isFunction(t)) return t.call(this, e, n);
                if ($.isRegExp(t)) return t.exec(e);
                throw new TypeError("parser must be boolean|regexp|function");
              }
            }
          }
          has(e, t) {
            if ((e = ce(e))) {
              const n = $.findKey(this, e);
              return !(!n || void 0 === this[n] || (t && !le(0, this[n], n, t)));
            }
            return !1;
          }
          delete(e, t) {
            const n = this;
            let r = !1;
            function o(e) {
              if ((e = ce(e))) {
                const o = $.findKey(n, e);
                !o || (t && !le(0, n[o], o, t)) || (delete n[o], (r = !0));
              }
            }
            return $.isArray(e) ? e.forEach(o) : o(e), r;
          }
          clear(e) {
            const t = Object.keys(this);
            let n = t.length,
              r = !1;
            for (; n--; ) {
              const o = t[n];
              (e && !le(0, this[o], o, e, !0)) || (delete this[o], (r = !0));
            }
            return r;
          }
          normalize(e) {
            const t = this,
              n = {};
            return (
              $.forEach(this, (r, o) => {
                const i = $.findKey(n, o);
                if (i) return (t[i] = ue(r)), void delete t[o];
                const s = e
                  ? (function (e) {
                      return e
                        .trim()
                        .toLowerCase()
                        .replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
                    })(o)
                  : String(o).trim();
                s !== o && delete t[o], (t[s] = ue(r)), (n[s] = !0);
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
              $.forEach(this, (n, r) => {
                null != n && !1 !== n && (t[r] = e && $.isArray(n) ? n.join(", ") : n);
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
            const t = (this[ae] = this[ae] = { accessors: {} }).accessors,
              n = this.prototype;
            function r(e) {
              const r = ce(e);
              t[r] ||
                ((function (e, t) {
                  const n = $.toCamelCase(" " + t);
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
            return $.isArray(e) ? e.forEach(r) : r(e), this;
          }
        }
        de.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]),
          $.freezeMethods(de.prototype),
          $.freezeMethods(de);
        const fe = de;
        function pe(e, t) {
          const n = this || ie,
            r = t || n,
            o = fe.from(r.headers);
          let i = r.data;
          return (
            $.forEach(e, function (e) {
              i = e.call(n, i, o.normalize(), t ? t.status : void 0);
            }),
            o.normalize(),
            i
          );
        }
        function he(e) {
          return !(!e || !e.__CANCEL__);
        }
        function ge(e, t, n) {
          B.call(this, null == e ? "canceled" : e, B.ERR_CANCELED, t, n), (this.name = "CanceledError");
        }
        $.inherits(ge, B, { __CANCEL__: !0 });
        const me = ge,
          ve = te.isStandardBrowserEnv
            ? {
                write: function (e, t, n, r, o, i) {
                  const s = [];
                  s.push(e + "=" + encodeURIComponent(t)),
                    $.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
                    $.isString(r) && s.push("path=" + r),
                    $.isString(o) && s.push("domain=" + o),
                    !0 === i && s.push("secure"),
                    (document.cookie = s.join("; "));
                },
                read: function (e) {
                  const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
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
        function _e(e, t) {
          return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
            ? (function (e, t) {
                return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
              })(e, t)
            : t;
        }
        const ye = te.isStandardBrowserEnv
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
                  const t = $.isString(e) ? r(e) : e;
                  return t.protocol === n.protocol && t.host === n.host;
                }
              );
            })()
          : function () {
              return !0;
            };
        function be(e, t) {
          let n = 0;
          const r = (function (e, t) {
            e = e || 10;
            const n = new Array(e),
              r = new Array(e);
            let o,
              i = 0,
              s = 0;
            return (
              (t = void 0 !== t ? t : 1e3),
              function (a) {
                const c = Date.now(),
                  u = r[s];
                o || (o = c), (n[i] = a), (r[i] = c);
                let l = s,
                  d = 0;
                for (; l !== i; ) (d += n[l++]), (l %= e);
                if (((i = (i + 1) % e), i === s && (s = (s + 1) % e), c - o < t)) return;
                const f = u && c - u;
                return f ? Math.round((1e3 * d) / f) : void 0;
              }
            );
          })(50, 250);
          return (o) => {
            const i = o.loaded,
              s = o.lengthComputable ? o.total : void 0,
              a = i - n,
              c = r(a);
            n = i;
            const u = {
              loaded: i,
              total: s,
              progress: s ? i / s : void 0,
              bytes: a,
              rate: c || void 0,
              estimated: c && s && i <= s ? (s - i) / c : void 0,
              event: o
            };
            (u[t ? "download" : "upload"] = !0), e(u);
          };
        }
        const we = {
          http: null,
          xhr:
            "undefined" != typeof XMLHttpRequest &&
            function (e) {
              return new Promise(function (t, n) {
                let r = e.data;
                const o = fe.from(e.headers).normalize(),
                  i = e.responseType;
                let s;
                function a() {
                  e.cancelToken && e.cancelToken.unsubscribe(s), e.signal && e.signal.removeEventListener("abort", s);
                }
                $.isFormData(r) &&
                  (te.isStandardBrowserEnv || te.isStandardBrowserWebWorkerEnv
                    ? o.setContentType(!1)
                    : o.setContentType("multipart/form-data;", !1));
                let c = new XMLHttpRequest();
                if (e.auth) {
                  const t = e.auth.username || "",
                    n = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                  o.set("Authorization", "Basic " + btoa(t + ":" + n));
                }
                const u = _e(e.baseURL, e.url);
                function l() {
                  if (!c) return;
                  const r = fe.from("getAllResponseHeaders" in c && c.getAllResponseHeaders());
                  !(function (e, t, n) {
                    const r = n.config.validateStatus;
                    n.status && r && !r(n.status)
                      ? t(
                          new B(
                            "Request failed with status code " + n.status,
                            [B.ERR_BAD_REQUEST, B.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
                            n.config,
                            n.request,
                            n
                          )
                        )
                      : e(n);
                  })(
                    function (e) {
                      t(e), a();
                    },
                    function (e) {
                      n(e), a();
                    },
                    {
                      data: i && "text" !== i && "json" !== i ? c.response : c.responseText,
                      status: c.status,
                      statusText: c.statusText,
                      headers: r,
                      config: e,
                      request: c
                    }
                  ),
                    (c = null);
                }
                if (
                  (c.open(e.method.toUpperCase(), X(u, e.params, e.paramsSerializer), !0),
                  (c.timeout = e.timeout),
                  "onloadend" in c
                    ? (c.onloadend = l)
                    : (c.onreadystatechange = function () {
                        c &&
                          4 === c.readyState &&
                          (0 !== c.status || (c.responseURL && 0 === c.responseURL.indexOf("file:"))) &&
                          setTimeout(l);
                      }),
                  (c.onabort = function () {
                    c && (n(new B("Request aborted", B.ECONNABORTED, e, c)), (c = null));
                  }),
                  (c.onerror = function () {
                    n(new B("Network Error", B.ERR_NETWORK, e, c)), (c = null);
                  }),
                  (c.ontimeout = function () {
                    let t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
                    const r = e.transitional || ee;
                    e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                      n(new B(t, r.clarifyTimeoutError ? B.ETIMEDOUT : B.ECONNABORTED, e, c)),
                      (c = null);
                  }),
                  te.isStandardBrowserEnv)
                ) {
                  const t = (e.withCredentials || ye(u)) && e.xsrfCookieName && ve.read(e.xsrfCookieName);
                  t && o.set(e.xsrfHeaderName, t);
                }
                void 0 === r && o.setContentType(null),
                  "setRequestHeader" in c &&
                    $.forEach(o.toJSON(), function (e, t) {
                      c.setRequestHeader(t, e);
                    }),
                  $.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials),
                  i && "json" !== i && (c.responseType = e.responseType),
                  "function" == typeof e.onDownloadProgress && c.addEventListener("progress", be(e.onDownloadProgress, !0)),
                  "function" == typeof e.onUploadProgress && c.upload && c.upload.addEventListener("progress", be(e.onUploadProgress)),
                  (e.cancelToken || e.signal) &&
                    ((s = (t) => {
                      c && (n(!t || t.type ? new me(null, e, c) : t), c.abort(), (c = null));
                    }),
                    e.cancelToken && e.cancelToken.subscribe(s),
                    e.signal && (e.signal.aborted ? s() : e.signal.addEventListener("abort", s)));
                const d = (function (e) {
                  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                  return (t && t[1]) || "";
                })(u);
                d && -1 === te.protocols.indexOf(d) ? n(new B("Unsupported protocol " + d + ":", B.ERR_BAD_REQUEST, e)) : c.send(r || null);
              });
            }
        };
        $.forEach(we, (e, t) => {
          if (e) {
            try {
              Object.defineProperty(e, "name", { value: t });
            } catch (e) {}
            Object.defineProperty(e, "adapterName", { value: t });
          }
        });
        function Se(e) {
          if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)) throw new me(null, e);
        }
        function ke(e) {
          return (
            Se(e),
            (e.headers = fe.from(e.headers)),
            (e.data = pe.call(e, e.transformRequest)),
            -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1),
            ((e) => {
              e = $.isArray(e) ? e : [e];
              const { length: t } = e;
              let n, r;
              for (let o = 0; o < t && ((n = e[o]), !(r = $.isString(n) ? we[n.toLowerCase()] : n)); o++);
              if (!r) {
                if (!1 === r) throw new B(`Adapter ${n} is not supported by the environment`, "ERR_NOT_SUPPORT");
                throw new Error($.hasOwnProp(we, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`);
              }
              if (!$.isFunction(r)) throw new TypeError("adapter is not a function");
              return r;
            })(e.adapter || ie.adapter)(e).then(
              function (t) {
                return Se(e), (t.data = pe.call(e, e.transformResponse, t)), (t.headers = fe.from(t.headers)), t;
              },
              function (t) {
                return (
                  he(t) ||
                    (Se(e),
                    t &&
                      t.response &&
                      ((t.response.data = pe.call(e, e.transformResponse, t.response)),
                      (t.response.headers = fe.from(t.response.headers)))),
                  Promise.reject(t)
                );
              }
            )
          );
        }
        const Oe = (e) => (e instanceof fe ? e.toJSON() : e);
        function Ee(e, t) {
          t = t || {};
          const n = {};
          function r(e, t, n) {
            return $.isPlainObject(e) && $.isPlainObject(t)
              ? $.merge.call({ caseless: n }, e, t)
              : $.isPlainObject(t)
              ? $.merge({}, t)
              : $.isArray(t)
              ? t.slice()
              : t;
          }
          function o(e, t, n) {
            return $.isUndefined(t) ? ($.isUndefined(e) ? void 0 : r(void 0, e, n)) : r(e, t, n);
          }
          function i(e, t) {
            if (!$.isUndefined(t)) return r(void 0, t);
          }
          function s(e, t) {
            return $.isUndefined(t) ? ($.isUndefined(e) ? void 0 : r(void 0, e)) : r(void 0, t);
          }
          function a(n, o, i) {
            return i in t ? r(n, o) : i in e ? r(void 0, n) : void 0;
          }
          const c = {
            url: i,
            method: i,
            data: i,
            baseURL: s,
            transformRequest: s,
            transformResponse: s,
            paramsSerializer: s,
            timeout: s,
            timeoutMessage: s,
            withCredentials: s,
            adapter: s,
            responseType: s,
            xsrfCookieName: s,
            xsrfHeaderName: s,
            onUploadProgress: s,
            onDownloadProgress: s,
            decompress: s,
            maxContentLength: s,
            maxBodyLength: s,
            beforeRedirect: s,
            transport: s,
            httpAgent: s,
            httpsAgent: s,
            cancelToken: s,
            socketPath: s,
            responseEncoding: s,
            validateStatus: a,
            headers: (e, t) => o(Oe(e), Oe(t), !0)
          };
          return (
            $.forEach(Object.keys(Object.assign({}, e, t)), function (r) {
              const i = c[r] || o,
                s = i(e[r], t[r], r);
              ($.isUndefined(s) && i !== a) || (n[r] = s);
            }),
            n
          );
        }
        const Te = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
          Te[e] = function (n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
          };
        });
        const Ce = {};
        Te.transitional = function (e, t, n) {
          function r(e, t) {
            return "[Axios v1.4.0] Transitional option '" + e + "'" + t + (n ? ". " + n : "");
          }
          return (n, o, i) => {
            if (!1 === e) throw new B(r(o, " has been removed" + (t ? " in " + t : "")), B.ERR_DEPRECATED);
            return (
              t &&
                !Ce[o] &&
                ((Ce[o] = !0), console.warn(r(o, " has been deprecated since v" + t + " and will be removed in the near future"))),
              !e || e(n, o, i)
            );
          };
        };
        const xe = {
            assertOptions: function (e, t, n) {
              if ("object" != typeof e) throw new B("options must be an object", B.ERR_BAD_OPTION_VALUE);
              const r = Object.keys(e);
              let o = r.length;
              for (; o-- > 0; ) {
                const i = r[o],
                  s = t[i];
                if (s) {
                  const t = e[i],
                    n = void 0 === t || s(t, i, e);
                  if (!0 !== n) throw new B("option " + i + " must be " + n, B.ERR_BAD_OPTION_VALUE);
                } else if (!0 !== n) throw new B("Unknown option " + i, B.ERR_BAD_OPTION);
              }
            },
            validators: Te
          },
          Ie = xe.validators;
        class je {
          constructor(e) {
            (this.defaults = e), (this.interceptors = { request: new K(), response: new K() });
          }
          request(e, t) {
            "string" == typeof e ? ((t = t || {}).url = e) : (t = e || {}), (t = Ee(this.defaults, t));
            const { transitional: n, paramsSerializer: r, headers: o } = t;
            let i;
            void 0 !== n &&
              xe.assertOptions(
                n,
                {
                  silentJSONParsing: Ie.transitional(Ie.boolean),
                  forcedJSONParsing: Ie.transitional(Ie.boolean),
                  clarifyTimeoutError: Ie.transitional(Ie.boolean)
                },
                !1
              ),
              null != r &&
                ($.isFunction(r)
                  ? (t.paramsSerializer = { serialize: r })
                  : xe.assertOptions(r, { encode: Ie.function, serialize: Ie.function }, !0)),
              (t.method = (t.method || this.defaults.method || "get").toLowerCase()),
              (i = o && $.merge(o.common, o[t.method])),
              i &&
                $.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (e) => {
                  delete o[e];
                }),
              (t.headers = fe.concat(i, o));
            const s = [];
            let a = !0;
            this.interceptors.request.forEach(function (e) {
              ("function" == typeof e.runWhen && !1 === e.runWhen(t)) || ((a = a && e.synchronous), s.unshift(e.fulfilled, e.rejected));
            });
            const c = [];
            let u;
            this.interceptors.response.forEach(function (e) {
              c.push(e.fulfilled, e.rejected);
            });
            let l,
              d = 0;
            if (!a) {
              const e = [ke.bind(this), void 0];
              for (e.unshift.apply(e, s), e.push.apply(e, c), l = e.length, u = Promise.resolve(t); d < l; ) u = u.then(e[d++], e[d++]);
              return u;
            }
            l = s.length;
            let f = t;
            for (d = 0; d < l; ) {
              const e = s[d++],
                t = s[d++];
              try {
                f = e(f);
              } catch (e) {
                t.call(this, e);
                break;
              }
            }
            try {
              u = ke.call(this, f);
            } catch (e) {
              return Promise.reject(e);
            }
            for (d = 0, l = c.length; d < l; ) u = u.then(c[d++], c[d++]);
            return u;
          }
          getUri(e) {
            return X(_e((e = Ee(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer);
          }
        }
        $.forEach(["delete", "get", "head", "options"], function (e) {
          je.prototype[e] = function (t, n) {
            return this.request(Ee(n || {}, { method: e, url: t, data: (n || {}).data }));
          };
        }),
          $.forEach(["post", "put", "patch"], function (e) {
            function t(t) {
              return function (n, r, o) {
                return this.request(
                  Ee(o || {}, { method: e, headers: t ? { "Content-Type": "multipart/form-data" } : {}, url: n, data: r })
                );
              };
            }
            (je.prototype[e] = t()), (je.prototype[e + "Form"] = t(!0));
          });
        const Ae = je;
        class Pe {
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
                n.reason || ((n.reason = new me(e, r, o)), t(n.reason));
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
              token: new Pe(function (t) {
                e = t;
              }),
              cancel: e
            };
          }
        }
        const Re = Pe,
          Me = {
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
        Object.entries(Me).forEach(([e, t]) => {
          Me[t] = e;
        });
        const Le = Me,
          Ne = (function e(t) {
            const n = new Ae(t),
              o = r(Ae.prototype.request, n);
            return (
              $.extend(o, Ae.prototype, n, { allOwnKeys: !0 }),
              $.extend(o, n, null, { allOwnKeys: !0 }),
              (o.create = function (n) {
                return e(Ee(t, n));
              }),
              o
            );
          })(ie);
        (Ne.Axios = Ae),
          (Ne.CanceledError = me),
          (Ne.CancelToken = Re),
          (Ne.isCancel = he),
          (Ne.VERSION = "1.4.0"),
          (Ne.toFormData = W),
          (Ne.AxiosError = B),
          (Ne.Cancel = Ne.CanceledError),
          (Ne.all = function (e) {
            return Promise.all(e);
          }),
          (Ne.spread = function (e) {
            return function (t) {
              return e.apply(null, t);
            };
          }),
          (Ne.isAxiosError = function (e) {
            return $.isObject(e) && !0 === e.isAxiosError;
          }),
          (Ne.mergeConfig = Ee),
          (Ne.AxiosHeaders = fe),
          (Ne.formToJSON = (e) => ne($.isHTMLForm(e) ? new FormData(e) : e)),
          (Ne.HttpStatusCode = Le),
          (Ne.default = Ne);
        const $e = Ne;
      },
      28692: (e, t, n) => {
        "use strict";
        n.d(t, { og: () => oe, WB: () => z, Q_: () => K, rn: () => te, Kc: () => ee, Ah: () => ne, Jk: () => re });
        var r = n(20144);
        function o() {
          return "undefined" != typeof navigator && "undefined" != typeof window ? window : "undefined" != typeof global ? global : {};
        }
        r.ZP, r.ZP.util.warn;
        const i = "function" == typeof Proxy;
        let s, a, c;
        class u {
          constructor(e, t) {
            (this.target = null), (this.targetQueue = []), (this.onQueue = []), (this.plugin = e), (this.hook = t);
            const n = {};
            if (e.settings)
              for (const t in e.settings) {
                const r = e.settings[t];
                n[t] = r.defaultValue;
              }
            const r = `__vue-devtools-plugin-settings__${e.id}`;
            let o = Object.assign({}, n);
            try {
              const e = localStorage.getItem(r),
                t = JSON.parse(e);
              Object.assign(o, t);
            } catch (e) {}
            (this.fallbacks = {
              getSettings: () => o,
              setSettings(e) {
                try {
                  localStorage.setItem(r, JSON.stringify(e));
                } catch (e) {}
                o = e;
              },
              now: () => {
                return (
                  void 0 !== s ||
                    ("undefined" != typeof window && window.performance
                      ? ((s = !0), (a = window.performance))
                      : "undefined" != typeof global && (null === (e = global.perf_hooks) || void 0 === e ? void 0 : e.performance)
                      ? ((s = !0), (a = global.perf_hooks.performance))
                      : (s = !1)),
                  s ? a.now() : Date.now()
                );
                var e;
              }
            }),
              t &&
                t.on("plugin:settings:set", (e, t) => {
                  e === this.plugin.id && this.fallbacks.setSettings(t);
                }),
              (this.proxiedOn = new Proxy(
                {},
                {
                  get: (e, t) =>
                    this.target
                      ? this.target.on[t]
                      : (...e) => {
                          this.onQueue.push({ method: t, args: e });
                        }
                }
              )),
              (this.proxiedTarget = new Proxy(
                {},
                {
                  get: (e, t) =>
                    this.target
                      ? this.target[t]
                      : "on" === t
                      ? this.proxiedOn
                      : Object.keys(this.fallbacks).includes(t)
                      ? (...e) => (this.targetQueue.push({ method: t, args: e, resolve: () => {} }), this.fallbacks[t](...e))
                      : (...e) =>
                          new Promise((n) => {
                            this.targetQueue.push({ method: t, args: e, resolve: n });
                          })
                }
              ));
          }
          async setRealTarget(e) {
            this.target = e;
            for (const e of this.onQueue) this.target.on[e.method](...e.args);
            for (const e of this.targetQueue) e.resolve(await this.target[e.method](...e.args));
          }
        }
        function l(e, t) {
          const n = e,
            r = o(),
            s = o().__VUE_DEVTOOLS_GLOBAL_HOOK__,
            a = i && n.enableEarlyProxy;
          if (!s || (!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ && a)) {
            const e = a ? new u(n, s) : null;
            (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({ pluginDescriptor: n, setupFn: t, proxy: e }),
              e && t(e.proxiedTarget);
          } else s.emit("devtools-plugin:setup", e, t);
        }
        const d = (e) => (c = e),
          f = Symbol();
        function p(e) {
          return e && "object" == typeof e && "[object Object]" === Object.prototype.toString.call(e) && "function" != typeof e.toJSON;
        }
        var h;
        !(function (e) {
          (e.direct = "direct"), (e.patchObject = "patch object"), (e.patchFunction = "patch function");
        })(h || (h = {}));
        const g = "undefined" != typeof window,
          m = "undefined" != typeof __VUE_PROD_DEVTOOLS__ && __VUE_PROD_DEVTOOLS__ && g,
          v = (() =>
            "object" == typeof window && window.window === window
              ? window
              : "object" == typeof self && self.self === self
              ? self
              : "object" == typeof global && global.global === global
              ? global
              : "object" == typeof globalThis
              ? globalThis
              : { HTMLElement: null })();
        function _(e, t, n) {
          const r = new XMLHttpRequest();
          r.open("GET", e),
            (r.responseType = "blob"),
            (r.onload = function () {
              k(r.response, t, n);
            }),
            (r.onerror = function () {
              console.error("could not download file");
            }),
            r.send();
        }
        function y(e) {
          const t = new XMLHttpRequest();
          t.open("HEAD", e, !1);
          try {
            t.send();
          } catch (e) {}
          return t.status >= 200 && t.status <= 299;
        }
        function b(e) {
          try {
            e.dispatchEvent(new MouseEvent("click"));
          } catch (t) {
            const n = document.createEvent("MouseEvents");
            n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
          }
        }
        const w = "object" == typeof navigator ? navigator : { userAgent: "" },
          S = (() => /Macintosh/.test(w.userAgent) && /AppleWebKit/.test(w.userAgent) && !/Safari/.test(w.userAgent))(),
          k = g
            ? "undefined" != typeof HTMLAnchorElement && "download" in HTMLAnchorElement.prototype && !S
              ? function (e, t = "download", n) {
                  const r = document.createElement("a");
                  (r.download = t),
                    (r.rel = "noopener"),
                    "string" == typeof e
                      ? ((r.href = e), r.origin !== location.origin ? (y(r.href) ? _(e, t, n) : ((r.target = "_blank"), b(r))) : b(r))
                      : ((r.href = URL.createObjectURL(e)),
                        setTimeout(function () {
                          URL.revokeObjectURL(r.href);
                        }, 4e4),
                        setTimeout(function () {
                          b(r);
                        }, 0));
                }
              : "msSaveOrOpenBlob" in w
              ? function (e, t = "download", n) {
                  if ("string" == typeof e)
                    if (y(e)) _(e, t, n);
                    else {
                      const t = document.createElement("a");
                      (t.href = e),
                        (t.target = "_blank"),
                        setTimeout(function () {
                          b(t);
                        });
                    }
                  else
                    navigator.msSaveOrOpenBlob(
                      (function (e, { autoBom: t = !1 } = {}) {
                        return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)
                          ? new Blob([String.fromCharCode(65279), e], { type: e.type })
                          : e;
                      })(e, n),
                      t
                    );
                }
              : function (e, t, n, r) {
                  if (
                    ((r = r || open("", "_blank")) && (r.document.title = r.document.body.innerText = "downloading..."),
                    "string" == typeof e)
                  )
                    return _(e, t, n);
                  const o = "application/octet-stream" === e.type,
                    i = /constructor/i.test(String(v.HTMLElement)) || "safari" in v,
                    s = /CriOS\/[\d]+/.test(navigator.userAgent);
                  if ((s || (o && i) || S) && "undefined" != typeof FileReader) {
                    const t = new FileReader();
                    (t.onloadend = function () {
                      let e = t.result;
                      if ("string" != typeof e) throw ((r = null), new Error("Wrong reader.result type"));
                      (e = s ? e : e.replace(/^data:[^;]*;/, "data:attachment/file;")),
                        r ? (r.location.href = e) : location.assign(e),
                        (r = null);
                    }),
                      t.readAsDataURL(e);
                  } else {
                    const t = URL.createObjectURL(e);
                    r ? r.location.assign(t) : (location.href = t),
                      (r = null),
                      setTimeout(function () {
                        URL.revokeObjectURL(t);
                      }, 4e4);
                  }
                }
            : () => {};
        function O(e, t) {
          const n = "🍍 " + e;
          "function" == typeof __VUE_DEVTOOLS_TOAST__
            ? __VUE_DEVTOOLS_TOAST__(n, t)
            : "error" === t
            ? console.error(n)
            : "warn" === t
            ? console.warn(n)
            : console.log(n);
        }
        function E(e) {
          return "_a" in e && "install" in e;
        }
        function T() {
          if (!("clipboard" in navigator)) return O("Your browser doesn't support the Clipboard API", "error"), !0;
        }
        function C(e) {
          return (
            !!(e instanceof Error && e.message.toLowerCase().includes("document is not focused")) &&
            (O('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0)
          );
        }
        let x;
        function I(e) {
          return { _custom: { display: e } };
        }
        const j = "🍍 Pinia (root)",
          A = "_root";
        function P(e) {
          return E(e) ? { id: A, label: j } : { id: e.$id, label: e.$id };
        }
        function R(e) {
          return e
            ? Array.isArray(e)
              ? e.reduce(
                  (e, t) => (
                    e.keys.push(t.key), e.operations.push(t.type), (e.oldValue[t.key] = t.oldValue), (e.newValue[t.key] = t.newValue), e
                  ),
                  { oldValue: {}, keys: [], operations: [], newValue: {} }
                )
              : { operation: I(e.type), key: I(e.key), oldValue: e.oldValue, newValue: e.newValue }
            : {};
        }
        function M(e) {
          switch (e) {
            case h.direct:
              return "mutation";
            case h.patchFunction:
            case h.patchObject:
              return "$patch";
            default:
              return "unknown";
          }
        }
        let L = !0;
        const N = [],
          $ = "pinia:mutations",
          D = "pinia",
          F = (e) => "🍍 " + e;
        function U(e, t) {
          l(
            {
              id: "dev.esm.pinia",
              label: "Pinia 🍍",
              logo: "https://pinia.vuejs.org/logo.svg",
              packageName: "pinia",
              homepage: "https://pinia.vuejs.org",
              componentStateTypes: N,
              app: e
            },
            (n) => {
              "function" != typeof n.now &&
                O(
                  "You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."
                ),
                n.addTimelineLayer({ id: $, label: "Pinia 🍍", color: 15064968 }),
                n.addInspector({
                  id: D,
                  label: "Pinia 🍍",
                  icon: "storage",
                  treeFilterPlaceholder: "Search stores",
                  actions: [
                    {
                      icon: "content_copy",
                      action: () => {
                        !(async function (e) {
                          if (!T())
                            try {
                              await navigator.clipboard.writeText(JSON.stringify(e.state.value)), O("Global state copied to clipboard.");
                            } catch (e) {
                              if (C(e)) return;
                              O("Failed to serialize the state. Check the console for more details.", "error"), console.error(e);
                            }
                        })(t);
                      },
                      tooltip: "Serialize and copy the state"
                    },
                    {
                      icon: "content_paste",
                      action: async () => {
                        await (async function (e) {
                          if (!T())
                            try {
                              (e.state.value = JSON.parse(await navigator.clipboard.readText())), O("Global state pasted from clipboard.");
                            } catch (e) {
                              if (C(e)) return;
                              O("Failed to deserialize the state from clipboard. Check the console for more details.", "error"),
                                console.error(e);
                            }
                        })(t),
                          n.sendInspectorTree(D),
                          n.sendInspectorState(D);
                      },
                      tooltip: "Replace the state with the content of your clipboard"
                    },
                    {
                      icon: "save",
                      action: () => {
                        !(async function (e) {
                          try {
                            k(new Blob([JSON.stringify(e.state.value)], { type: "text/plain;charset=utf-8" }), "pinia-state.json");
                          } catch (e) {
                            O("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(e);
                          }
                        })(t);
                      },
                      tooltip: "Save the state as a JSON file"
                    },
                    {
                      icon: "folder_open",
                      action: async () => {
                        await (async function (e) {
                          try {
                            const t = await (x || ((x = document.createElement("input")), (x.type = "file"), (x.accept = ".json")),
                              function () {
                                return new Promise((e, t) => {
                                  (x.onchange = async () => {
                                    const t = x.files;
                                    if (!t) return e(null);
                                    const n = t.item(0);
                                    return e(n ? { text: await n.text(), file: n } : null);
                                  }),
                                    (x.oncancel = () => e(null)),
                                    (x.onerror = t),
                                    x.click();
                                });
                              }),
                              n = await t();
                            if (!n) return;
                            const { text: r, file: o } = n;
                            (e.state.value = JSON.parse(r)), O(`Global state imported from "${o.name}".`);
                          } catch (e) {
                            O("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(e);
                          }
                        })(t),
                          n.sendInspectorTree(D),
                          n.sendInspectorState(D);
                      },
                      tooltip: "Import the state from a JSON file"
                    }
                  ],
                  nodeActions: [
                    {
                      icon: "restore",
                      tooltip: "Reset the state (option store only)",
                      action: (e) => {
                        const n = t._s.get(e);
                        n
                          ? n._isOptionsAPI
                            ? (n.$reset(), O(`Store "${e}" reset.`))
                            : O(`Cannot reset "${e}" store because it's a setup store.`, "warn")
                          : O(`Cannot reset "${e}" store because it wasn't found.`, "warn");
                      }
                    }
                  ]
                }),
                n.on.inspectComponent((e, t) => {
                  const n = e.componentInstance && e.componentInstance.proxy;
                  if (n && n._pStores) {
                    const t = e.componentInstance.proxy._pStores;
                    Object.values(t).forEach((t) => {
                      e.instanceData.state.push({
                        type: F(t.$id),
                        key: "state",
                        editable: !0,
                        value: t._isOptionsAPI
                          ? {
                              _custom: {
                                value: (0, r.IU)(t.$state),
                                actions: [{ icon: "restore", tooltip: "Reset the state of this store", action: () => t.$reset() }]
                              }
                            }
                          : Object.keys(t.$state).reduce((e, n) => ((e[n] = t.$state[n]), e), {})
                      }),
                        t._getters &&
                          t._getters.length &&
                          e.instanceData.state.push({
                            type: F(t.$id),
                            key: "getters",
                            editable: !1,
                            value: t._getters.reduce((e, n) => {
                              try {
                                e[n] = t[n];
                              } catch (t) {
                                e[n] = t;
                              }
                              return e;
                            }, {})
                          });
                    });
                  }
                }),
                n.on.getInspectorTree((n) => {
                  if (n.app === e && n.inspectorId === D) {
                    let e = [t];
                    (e = e.concat(Array.from(t._s.values()))),
                      (n.rootNodes = (
                        n.filter
                          ? e.filter((e) =>
                              "$id" in e
                                ? e.$id.toLowerCase().includes(n.filter.toLowerCase())
                                : j.toLowerCase().includes(n.filter.toLowerCase())
                            )
                          : e
                      ).map(P));
                  }
                }),
                n.on.getInspectorState((n) => {
                  if (n.app === e && n.inspectorId === D) {
                    const e = n.nodeId === A ? t : t._s.get(n.nodeId);
                    if (!e) return;
                    e &&
                      (n.state = (function (e) {
                        if (E(e)) {
                          const t = Array.from(e._s.keys()),
                            n = e._s,
                            r = {
                              state: t.map((t) => ({ editable: !0, key: t, value: e.state.value[t] })),
                              getters: t
                                .filter((e) => n.get(e)._getters)
                                .map((e) => {
                                  const t = n.get(e);
                                  return { editable: !1, key: e, value: t._getters.reduce((e, n) => ((e[n] = t[n]), e), {}) };
                                })
                            };
                          return r;
                        }
                        const t = { state: Object.keys(e.$state).map((t) => ({ editable: !0, key: t, value: e.$state[t] })) };
                        return (
                          e._getters && e._getters.length && (t.getters = e._getters.map((t) => ({ editable: !1, key: t, value: e[t] }))),
                          e._customProperties.size &&
                            (t.customProperties = Array.from(e._customProperties).map((t) => ({ editable: !0, key: t, value: e[t] }))),
                          t
                        );
                      })(e));
                  }
                }),
                n.on.editInspectorState((n, r) => {
                  if (n.app === e && n.inspectorId === D) {
                    const e = n.nodeId === A ? t : t._s.get(n.nodeId);
                    if (!e) return O(`store "${n.nodeId}" not found`, "error");
                    const { path: r } = n;
                    E(e)
                      ? r.unshift("state")
                      : (1 === r.length && e._customProperties.has(r[0]) && !(r[0] in e.$state)) || r.unshift("$state"),
                      (L = !1),
                      n.set(e, r, n.state.value),
                      (L = !0);
                  }
                }),
                n.on.editComponentState((e) => {
                  if (e.type.startsWith("🍍")) {
                    const n = e.type.replace(/^🍍\s*/, ""),
                      r = t._s.get(n);
                    if (!r) return O(`store "${n}" not found`, "error");
                    const { path: o } = e;
                    if ("state" !== o[0]) return O(`Invalid path for store "${n}":\n${o}\nOnly state can be modified.`);
                    (o[0] = "$state"), (L = !1), e.set(r, o, e.state.value), (L = !0);
                  }
                });
            }
          );
        }
        let B,
          H = 0;
        function V(e, t) {
          const n = t.reduce((t, n) => ((t[n] = (0, r.IU)(e)[n]), t), {});
          for (const t in n)
            e[t] = function () {
              const r = H,
                o = new Proxy(e, { get: (...e) => ((B = r), Reflect.get(...e)), set: (...e) => ((B = r), Reflect.set(...e)) });
              return n[t].apply(o, arguments);
            };
        }
        function q({ app: e, store: t, options: n }) {
          if (!t.$id.startsWith("__hot:")) {
            if ((n.state && (t._isOptionsAPI = !0), "function" == typeof n.state)) {
              V(t, Object.keys(n.actions));
              const e = t._hotUpdate;
              (0, r.IU)(t)._hotUpdate = function (n) {
                e.apply(this, arguments), V(t, Object.keys(n._hmrPayload.actions));
              };
            }
            !(function (e, t) {
              N.includes(F(t.$id)) || N.push(F(t.$id)),
                l(
                  {
                    id: "dev.esm.pinia",
                    label: "Pinia 🍍",
                    logo: "https://pinia.vuejs.org/logo.svg",
                    packageName: "pinia",
                    homepage: "https://pinia.vuejs.org",
                    componentStateTypes: N,
                    app: e,
                    settings: { logStoreChanges: { label: "Notify about new/deleted stores", type: "boolean", defaultValue: !0 } }
                  },
                  (e) => {
                    const n = "function" == typeof e.now ? e.now.bind(e) : Date.now;
                    t.$onAction(({ after: r, onError: o, name: i, args: s }) => {
                      const a = H++;
                      e.addTimelineEvent({
                        layerId: $,
                        event: {
                          time: n(),
                          title: "🛫 " + i,
                          subtitle: "start",
                          data: { store: I(t.$id), action: I(i), args: s },
                          groupId: a
                        }
                      }),
                        r((r) => {
                          (B = void 0),
                            e.addTimelineEvent({
                              layerId: $,
                              event: {
                                time: n(),
                                title: "🛬 " + i,
                                subtitle: "end",
                                data: { store: I(t.$id), action: I(i), args: s, result: r },
                                groupId: a
                              }
                            });
                        }),
                        o((r) => {
                          (B = void 0),
                            e.addTimelineEvent({
                              layerId: $,
                              event: {
                                time: n(),
                                logType: "error",
                                title: "💥 " + i,
                                subtitle: "end",
                                data: { store: I(t.$id), action: I(i), args: s, error: r },
                                groupId: a
                              }
                            });
                        });
                    }, !0),
                      t._customProperties.forEach((o) => {
                        (0, r.YP)(
                          () => (0, r.SU)(t[o]),
                          (t, r) => {
                            e.notifyComponentUpdate(),
                              e.sendInspectorState(D),
                              L &&
                                e.addTimelineEvent({
                                  layerId: $,
                                  event: { time: n(), title: "Change", subtitle: o, data: { newValue: t, oldValue: r }, groupId: B }
                                });
                          },
                          { deep: !0 }
                        );
                      }),
                      t.$subscribe(
                        ({ events: r, type: o }, i) => {
                          if ((e.notifyComponentUpdate(), e.sendInspectorState(D), !L)) return;
                          const s = { time: n(), title: M(o), data: { store: I(t.$id), ...R(r) }, groupId: B };
                          (B = void 0),
                            o === h.patchFunction
                              ? (s.subtitle = "⤵️")
                              : o === h.patchObject
                              ? (s.subtitle = "🧩")
                              : r && !Array.isArray(r) && (s.subtitle = r.type),
                            r &&
                              (s.data["rawEvent(s)"] = {
                                _custom: { display: "DebuggerEvent", type: "object", tooltip: "raw DebuggerEvent[]", value: r }
                              }),
                            e.addTimelineEvent({ layerId: $, event: s });
                        },
                        { detached: !0, flush: "sync" }
                      );
                    const o = t._hotUpdate;
                    t._hotUpdate = (0, r.Xl)((r) => {
                      o(r),
                        e.addTimelineEvent({
                          layerId: $,
                          event: {
                            time: n(),
                            title: "🔥 " + t.$id,
                            subtitle: "HMR update",
                            data: { store: I(t.$id), info: I("HMR update") }
                          }
                        }),
                        e.notifyComponentUpdate(),
                        e.sendInspectorTree(D),
                        e.sendInspectorState(D);
                    });
                    const { $dispose: i } = t;
                    (t.$dispose = () => {
                      i(),
                        e.notifyComponentUpdate(),
                        e.sendInspectorTree(D),
                        e.sendInspectorState(D),
                        e.getSettings().logStoreChanges && O(`Disposed "${t.$id}" store 🗑`);
                    }),
                      e.notifyComponentUpdate(),
                      e.sendInspectorTree(D),
                      e.sendInspectorState(D),
                      e.getSettings().logStoreChanges && O(`"${t.$id}" store installed 🆕`);
                  }
                );
            })(e, t);
          }
        }
        function z() {
          const e = (0, r.B)(!0),
            t = e.run(() => (0, r.iH)({}));
          let n = [];
          const o = (0, r.Xl)({
            install(e) {
              d(o);
            },
            use(e) {
              return this._a, n.push(e), this;
            },
            _p: n,
            _a: null,
            _e: e,
            _s: new Map(),
            state: t
          });
          return m && "undefined" != typeof Proxy && o.use(q), o;
        }
        const W = () => {};
        function Z(e, t, n, o = W) {
          e.push(t);
          const i = () => {
            const n = e.indexOf(t);
            n > -1 && (e.splice(n, 1), o());
          };
          return !n && (0, r.FN)() && (0, r.Ah)(i), i;
        }
        function G(e, ...t) {
          e.slice().forEach((e) => {
            e(...t);
          });
        }
        function J(e, t) {
          e instanceof Map && t instanceof Map && t.forEach((t, n) => e.set(n, t)),
            e instanceof Set && t instanceof Set && t.forEach(e.add, e);
          for (const n in t) {
            if (!t.hasOwnProperty(n)) continue;
            const o = t[n],
              i = e[n];
            p(i) && p(o) && e.hasOwnProperty(n) && !(0, r.dq)(o) && !(0, r.PG)(o) ? (e[n] = J(i, o)) : (e[n] = o);
          }
          return e;
        }
        Symbol();
        const Q = new WeakMap(),
          { assign: Y } = Object;
        function X(e, t, n = {}, o, i, s) {
          let a;
          const c = Y({ actions: {} }, n),
            u = { deep: !0 };
          let l,
            f,
            p,
            g = (0, r.Xl)([]),
            v = (0, r.Xl)([]);
          const _ = o.state.value[e];
          s || _ || (0, r.t8)(o.state.value, e, {});
          const y = (0, r.iH)({});
          let b;
          function w(t) {
            let n;
            (l = f = !1),
              "function" == typeof t
                ? (t(o.state.value[e]), (n = { type: h.patchFunction, storeId: e, events: p }))
                : (J(o.state.value[e], t), (n = { type: h.patchObject, payload: t, storeId: e, events: p }));
            const i = (b = Symbol());
            (0, r.Y3)().then(() => {
              b === i && (l = !0);
            }),
              (f = !0),
              G(g, n, o.state.value[e]);
          }
          const S = W;
          function k(t, n) {
            return function () {
              d(o);
              const r = Array.from(arguments),
                i = [],
                s = [];
              function a(e) {
                i.push(e);
              }
              function c(e) {
                s.push(e);
              }
              let u;
              G(v, { args: r, name: t, store: T, after: a, onError: c });
              try {
                u = n.apply(this && this.$id === e ? this : T, r);
              } catch (e) {
                throw (G(s, e), e);
              }
              return u instanceof Promise ? u.then((e) => (G(i, e), e)).catch((e) => (G(s, e), Promise.reject(e))) : (G(i, u), u);
            };
          }
          const O = (0, r.Xl)({ actions: {}, getters: {}, state: [], hotState: y }),
            E = {
              _p: o,
              $id: e,
              $onAction: Z.bind(null, v),
              $patch: w,
              $reset: S,
              $subscribe(t, n = {}) {
                const i = Z(g, t, n.detached, () => s()),
                  s = a.run(() =>
                    (0, r.YP)(
                      () => o.state.value[e],
                      (r) => {
                        ("sync" === n.flush ? f : l) && t({ storeId: e, type: h.direct, events: p }, r);
                      },
                      Y({}, u, n)
                    )
                  );
                return i;
              },
              $dispose: function () {
                a.stop(), (g = []), (v = []), o._s.delete(e);
              },
              _r: !1
            },
            T = (0, r.qj)(m ? Y({ _hmrPayload: O, _customProperties: (0, r.Xl)(new Set()) }, E) : E);
          o._s.set(e, T);
          const C = o._e.run(() => ((a = (0, r.B)()), a.run(() => t())));
          for (const t in C) {
            const n = C[t];
            if (((0, r.dq)(n) && ((I = n), !(0, r.dq)(I) || !I.effect)) || (0, r.PG)(n))
              s || (_ && ((x = n), !Q.has(x)) && ((0, r.dq)(n) ? (n.value = _[t]) : J(n, _[t])), (0, r.t8)(o.state.value[e], t, n));
            else if ("function" == typeof n) {
              const e = k(t, n);
              (0, r.t8)(C, t, e), (c.actions[t] = n);
            }
          }
          var x, I;
          if (
            (Object.keys(C).forEach((e) => {
              (0, r.t8)(T, e, C[e]);
            }),
            Object.defineProperty(T, "$state", {
              get: () => o.state.value[e],
              set: (e) => {
                w((t) => {
                  Y(t, e);
                });
              }
            }),
            m)
          ) {
            const e = { writable: !0, configurable: !0, enumerable: !1 };
            ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((t) => {
              Object.defineProperty(T, t, { value: T[t], ...e });
            });
          }
          return (
            (T._r = !0),
            o._p.forEach((e) => {
              if (m) {
                const t = a.run(() => e({ store: T, app: o._a, pinia: o, options: c }));
                Object.keys(t || {}).forEach((e) => T._customProperties.add(e)), Y(T, t);
              } else
                Y(
                  T,
                  a.run(() => e({ store: T, app: o._a, pinia: o, options: c }))
                );
            }),
            _ && s && n.hydrate && n.hydrate(T.$state, _),
            (l = !0),
            (f = !0),
            T
          );
        }
        function K(e, t, n) {
          let o, i;
          const s = "function" == typeof t;
          function a(e, n) {
            const a = (0, r.FN)();
            return (
              (e = e || (a && (0, r.f3)(f))) && d(e),
              (e = c)._s.has(o) ||
                (s
                  ? X(o, t, i, e)
                  : (function (e, t, n, o) {
                      const { state: i, actions: s, getters: a } = t,
                        c = n.state.value[e];
                      let u;
                      (u = X(
                        e,
                        function () {
                          c || (0, r.t8)(n.state.value, e, i ? i() : {});
                          const t = (0, r.BK)(n.state.value[e]);
                          return Y(
                            t,
                            s,
                            Object.keys(a || {}).reduce(
                              (t, o) => (
                                (t[o] = (0, r.Xl)(
                                  (0, r.Fl)(() => {
                                    d(n);
                                    const t = n._s.get(e);
                                    if (t._r) return a[o].call(t, t);
                                  })
                                )),
                                t
                              ),
                              {}
                            )
                          );
                        },
                        t,
                        n,
                        0,
                        !0
                      )),
                        (u.$reset = function () {
                          const e = i ? i() : {};
                          this.$patch((t) => {
                            Y(t, e);
                          });
                        });
                    })(o, i, e)),
              e._s.get(o)
            );
          }
          return "string" == typeof e ? ((o = e), (i = s ? n : t)) : ((i = e), (o = e.id)), (a.$id = o), a;
        }
        function ee(...e) {
          return e.reduce(
            (e, t) => (
              (e[t.$id + "Store"] = function () {
                return t(this.$pinia);
              }),
              e
            ),
            {}
          );
        }
        function te(e, t) {
          return Array.isArray(t)
            ? t.reduce(
                (t, n) => (
                  (t[n] = function () {
                    return e(this.$pinia)[n];
                  }),
                  t
                ),
                {}
              )
            : Object.keys(t).reduce(
                (n, r) => (
                  (n[r] = function () {
                    const n = e(this.$pinia),
                      o = t[r];
                    return "function" == typeof o ? o.call(this, n) : n[o];
                  }),
                  n
                ),
                {}
              );
        }
        function ne(e, t) {
          return Array.isArray(t)
            ? t.reduce(
                (t, n) => (
                  (t[n] = {
                    get() {
                      return e(this.$pinia)[n];
                    },
                    set(t) {
                      return (e(this.$pinia)[n] = t);
                    }
                  }),
                  t
                ),
                {}
              )
            : Object.keys(t).reduce(
                (n, r) => (
                  (n[r] = {
                    get() {
                      return e(this.$pinia)[t[r]];
                    },
                    set(n) {
                      return (e(this.$pinia)[t[r]] = n);
                    }
                  }),
                  n
                ),
                {}
              );
        }
        function re(e) {
          return (0, r.BK)(e);
        }
        const oe = function (e) {
          e.mixin({
            beforeCreate() {
              const e = this.$options;
              if (e.pinia) {
                const t = e.pinia;
                if (!this._provided) {
                  const e = {};
                  Object.defineProperty(this, "_provided", { get: () => e, set: (t) => Object.assign(e, t) });
                }
                (this._provided[f] = t), this.$pinia || (this.$pinia = t), (t._a = this), g && d(t), m && U(t._a, t);
              } else !this.$pinia && e.parent && e.parent.$pinia && (this.$pinia = e.parent.$pinia);
            },
            destroyed() {
              delete this._pStores;
            }
          });
        };
      }
    },
    i = {};
  function s(e) {
    var t = i[e];
    if (void 0 !== t) return t.exports;
    var n = (i[e] = { id: e, loaded: !1, exports: {} });
    return o[e].call(n.exports, n, n.exports, s), (n.loaded = !0), n.exports;
  }
  (s.m = o),
    (s.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return s.d(t, { a: t }), t;
    }),
    (t = Object.getPrototypeOf ? (e) => Object.getPrototypeOf(e) : (e) => e.__proto__),
    (s.t = function (n, r) {
      if ((1 & r && (n = this(n)), 8 & r)) return n;
      if ("object" == typeof n && n) {
        if (4 & r && n.__esModule) return n;
        if (16 & r && "function" == typeof n.then) return n;
      }
      var o = Object.create(null);
      s.r(o);
      var i = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var a = 2 & r && n; "object" == typeof a && !~e.indexOf(a); a = t(a))
        Object.getOwnPropertyNames(a).forEach((e) => (i[e] = () => n[e]));
      return (i.default = () => n), s.d(o, i), o;
    }),
    (s.d = (e, t) => {
      for (var n in t) s.o(t, n) && !s.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (s.f = {}),
    (s.e = (e) => Promise.all(Object.keys(s.f).reduce((t, n) => (s.f[n](e, t), t), []))),
    (s.u = (e) =>
      4818 === e
        ? "4818.js"
        : 3064 === e
        ? "3064.js"
        : 7651 === e
        ? "7651.js"
        : 9437 === e
        ? "9437.js"
        : 8725 === e
        ? "8725.js"
        : 5757 === e
        ? "5757.js"
        : 2622 === e
        ? "2622.js"
        : 6781 === e
        ? "6781.js"
        : 3370 === e
        ? "3370.js"
        : 7652 === e
        ? "7652.js"
        : 8781 === e
        ? "8781.js"
        : 4164 === e
        ? "4164.js"
        : 3418 === e
        ? "3418.js"
        : 4141 === e
        ? "4141.js"
        : 6588 === e
        ? "6588.js"
        : 3661 === e
        ? "3661.js"
        : 5645 === e
        ? "5645.js"
        : 1103 === e
        ? "1103.js"
        : 4537 === e
        ? "4537.js"
        : 1455 === e
        ? "1455.js"
        : 6383 === e
        ? "6383.js"
        : 4317 === e
        ? "4317.js"
        : 6518 === e
        ? "6518.js"
        : 1001 === e
        ? "1001.js"
        : 654 === e
        ? "654.js"
        : 7734 === e
        ? "7734.js"
        : 9381 === e
        ? "9381.js"
        : 309 === e
        ? "309.js"
        : 7744 === e
        ? "7744.js"
        : 5777 === e
        ? "5777.js"
        : 3272 === e
        ? "3272.js"
        : 1266 === e
        ? "1266.js"
        : 6640 === e
        ? "6640.js"
        : 8955 === e
        ? "8955.js"
        : 8544 === e
        ? "8544.js"
        : 202 === e
        ? "202.js"
        : 1477 === e
        ? "1477.js"
        : 7886 === e
        ? "7886.js"
        : 8875 === e
        ? "8875.js"
        : 9443 === e
        ? "9443.js"
        : 1689 === e
        ? "1689.js"
        : 4385 === e
        ? "4385.js"
        : 1766 === e
        ? "1766.js"
        : 8993 === e
        ? "8993.js"
        : 3581 === e
        ? "3581.js"
        : 6838 === e
        ? "6838.js"
        : 3137 === e
        ? "3137.js"
        : 732 === e
        ? "732.js"
        : 6011 === e
        ? "6011.js"
        : 4411 === e
        ? "4411.js"
        : 141 === e
        ? "141.js"
        : 9299 === e
        ? "9299.js"
        : 9933 === e
        ? "9933.js"
        : 7648 === e
        ? "7648.js"
        : 6744 === e
        ? "6744.js"
        : 4736 === e
        ? "4736.js"
        : 4719 === e
        ? "4719.js"
        : 5535 === e
        ? "5535.js"
        : 3990 === e
        ? "3990.js"
        : 1554 === e
        ? "1554.js"
        : 5711 === e
        ? "5711.js"
        : 9968 === e
        ? "9968.js"
        : 5140 === e
        ? "5140.js"
        : 3943 === e
        ? "3943.js"
        : 7900 === e
        ? "7900.js"
        : 6822 === e
        ? "6822.js"
        : 115 === e
        ? "115.js"
        : 6065 === e
        ? "6065.js"
        : 8215 === e
        ? "8215.js"
        : 3335 === e
        ? "3335.js"
        : 2425 === e
        ? "2425.js"
        : 9726 === e
        ? "9726.js"
        : 5962 === e
        ? "5962.js"
        : 7910 === e
        ? "7910.js"
        : 506 === e
        ? "506.js"
        : 1932 === e
        ? "1932.js"
        : 8212 === e
        ? "8212.js"
        : 8817 === e
        ? "8817.js"
        : 6247 === e
        ? "6247.js"
        : 9540 === e
        ? "9540.js"
        : 3516 === e
        ? "3516.js"
        : 2579 === e
        ? "2579.js"
        : 7094 === e
        ? "7094.js"
        : 531 === e
        ? "531.js"
        : 4496 === e
        ? "4496.js"
        : 6629 === e
        ? "6629.js"
        : 3327 === e
        ? "3327.js"
        : 8154 === e
        ? "8154.js"
        : 4817 === e
        ? "4817.js"
        : 2769 === e
        ? "2769.js"
        : 9727 === e
        ? "9727.js"
        : 6293 === e
        ? "6293.js"
        : 2552 === e
        ? "2552.js"
        : 2855 === e
        ? "2855.js"
        : 4442 === e
        ? "4442.js"
        : 3994 === e
        ? "3994.js"
        : 6048 === e
        ? "6048.js"
        : 2363 === e
        ? "2363.js"
        : 8085 === e
        ? "8085.js"
        : 3833 === e
        ? "3833.js"
        : 9395 === e
        ? "9395.js"
        : 5810 === e
        ? "5810.js"
        : 3554 === e
        ? "3554.js"
        : 6285 === e
        ? "6285.js"
        : 6878 === e
        ? "6878.js"
        : 5084 === e
        ? "5084.js"
        : 1961 === e
        ? "1961.js"
        : 7864 === e
        ? "7864.js"
        : 6425 === e
        ? "6425.js"
        : 8586 === e
        ? "8586.js"
        : 9509 === e
        ? "9509.js"
        : 6830 === e
        ? "6830.js"
        : 6908 === e
        ? "6908.js"
        : 6182 === e
        ? "6182.js"
        : 5273 === e
        ? "5273.js"
        : 9980 === e
        ? "9980.js"
        : 6970 === e
        ? "6970.js"
        : 5494 === e
        ? "5494.js"
        : 9159 === e
        ? "9159.js"
        : 3246 === e
        ? "3246.js"
        : 7769 === e
        ? "7769.js"
        : 5065 === e
        ? "5065.js"
        : 5774 === e
        ? "5774.js"
        : 5508 === e
        ? "5508.js"
        : 9581 === e
        ? "9581.js"
        : 3498 === e
        ? "3498.js"
        : 7198 === e
        ? "7198.js"
        : 9217 === e
        ? "9217.js"
        : 9761 === e
        ? "9761.js"
        : 1027 === e
        ? "1027.js"
        : 4493 === e
        ? "4493.js"
        : 5598 === e
        ? "5598.js"
        : 464 === e
        ? "464.js"
        : 4643 === e
        ? "4643.js"
        : 6283 === e
        ? "6283.js"
        : 2537 === e
        ? "2537.js"
        : 1532 === e
        ? "1532.js"
        : 9279 === e
        ? "9279.js"
        : 8334 === e
        ? "8334.js"
        : 5059 === e
        ? "5059.js"
        : 9594 === e
        ? "9594.js"
        : 6942 === e
        ? "6942.js"
        : 6088 === e
        ? "6088.js"
        : 7314 === e
        ? "7314.js"
        : 3691 === e
        ? "3691.js"
        : 3068 === e
        ? "3068.js"
        : 7449 === e
        ? "7449.js"
        : 9600 === e
        ? "9600.js"
        : 4541 === e
        ? "4541.js"
        : 8622 === e
        ? "8622.js"
        : 9650 === e
        ? "9650.js"
        : 508 === e
        ? "508.js"
        : 5756 === e
        ? "5756.js"
        : 3569 === e
        ? "3569.js"
        : 511 === e
        ? "511.js"
        : 1701 === e
        ? "1701.js"
        : 2225 === e
        ? "2225.js"
        : 2010 === e
        ? "2010.js"
        : 8128 === e
        ? "8128.js"
        : 3379 === e
        ? "3379.js"
        : 2846 === e
        ? "2846.js"
        : 5195 === e
        ? "5195.js"
        : void 0),
    (s.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n = {}),
    (r = "momentum:"),
    (s.l = (e, t, o, i) => {
      if (n[e]) n[e].push(t);
      else {
        var a, c;
        if (void 0 !== o)
          for (var u = document.getElementsByTagName("script"), l = 0; l < u.length; l++) {
            var d = u[l];
            if (d.getAttribute("src") == e || d.getAttribute("data-webpack") == r + o) {
              a = d;
              break;
            }
          }
        a ||
          ((c = !0),
          ((a = document.createElement("script")).charset = "utf-8"),
          (a.timeout = 120),
          s.nc && a.setAttribute("nonce", s.nc),
          a.setAttribute("data-webpack", r + o),
          (a.src = e)),
          (n[e] = [t]);
        var f = (t, r) => {
            (a.onerror = a.onload = null), clearTimeout(p);
            var o = n[e];
            if ((delete n[e], a.parentNode && a.parentNode.removeChild(a), o && o.forEach((e) => e(r)), t)) return t(r);
          },
          p = setTimeout(f.bind(null, void 0, { type: "timeout", target: a }), 12e4);
        (a.onerror = f.bind(null, a.onerror)), (a.onload = f.bind(null, a.onload)), c && document.head.appendChild(a);
      }
    }),
    (s.r = (e) => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (s.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      var e;
      s.g.importScripts && (e = s.g.location + "");
      var t = s.g.document;
      if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
        var n = t.getElementsByTagName("script");
        n.length && (e = n[n.length - 1].src);
      }
      if (!e) throw new Error("Automatic publicPath is not supported in this browser");
      (e = e
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (s.p = e);
    })(),
    (() => {
      s.b = document.baseURI || self.location.href;
      var e = { 5559: 0 };
      s.f.j = (t, n) => {
        var r = s.o(e, t) ? e[t] : void 0;
        if (0 !== r)
          if (r) n.push(r[2]);
          else {
            var o = new Promise((n, o) => (r = e[t] = [n, o]));
            n.push((r[2] = o));
            var i = s.p + s.u(t),
              a = new Error();
            s.l(
              i,
              (n) => {
                if (s.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                  var o = n && ("load" === n.type ? "missing" : n.type),
                    i = n && n.target && n.target.src;
                  (a.message = "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")"),
                    (a.name = "ChunkLoadError"),
                    (a.type = o),
                    (a.request = i),
                    r[1](a);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, n) => {
          var r,
            o,
            [i, a, c] = n,
            u = 0;
          if (i.some((t) => 0 !== e[t])) {
            for (r in a) s.o(a, r) && (s.m[r] = a[r]);
            c && c(s);
          }
          for (t && t(n); u < i.length; u++) (o = i[u]), s.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
        },
        n = (globalThis.webpackChunkmomentum = globalThis.webpackChunkmomentum || []);
      n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
    })(),
    (() => {
      "use strict";
      var e = s(64438);
      const t = new e.Z("tab.unhandledException");
      function n(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
      }
      function r(e, t) {
        return t && ":visible" === t ? n(e) : t && ":hidden" === t ? !n(e) : e.matches(t);
      }
      function o(e, t, n) {
        if ("string" == typeof e && n)
          this.each(function () {
            this.insertAdjacentHTML(n, e);
          });
        else {
          let n;
          "string" == typeof e
            ? (n = Object.values($(e)))
            : e instanceof HTMLElement || e instanceof SVGElement
            ? (n = [e])
            : e && e.jquery
            ? (n = e.toArray())
            : e instanceof $
            ? (n = Object.values(e))
            : Array.isArray(e)
            ? (n = e)
            : console.error("addNodes() passed value other than string, element, mQuery/jQuery Object, or array"),
            this.each(function (e) {
              n.forEach((n, r, o) => {
                t.call(this, n, r, o, e);
              });
            });
        }
        return this;
      }
      function i(e, t, n, r) {
        if (1 === n) return e;
        const o = t < n - 1 ? e.cloneNode(!0) : e;
        return r && r.push(o), o;
      }
      function a(e) {
        return isNaN(1 * e) ? e : e + "px";
      }
      function c(e, t, n, r, o) {
        n || (n = "root");
        let i = e;
        [t, n, r].forEach((e) => {
          e === r ? (i[e] || (i[e] = []), i[e].push(o)) : (i[e] || (i[e] = {}), (i = i[e]));
        });
      }
      window.addEventListener("error", (e) => {
        t.error("Unhandled Exception", e);
      });
      const u = /<\/?[a-z][\s\S]*>/;
      function l(e, t) {
        const n = document.createElement("div");
        n.innerHTML = e;
        const r = n.firstChild;
        return (
          t &&
            Object.keys(t).forEach((e) => {
              "text" === e ? (r.innerHtml = t[e]) : r.setAttribute(e, t[e]);
            }),
          r
        );
      }
      var d = s(52861),
        f = s(42935);
      let p = function () {
        (p.prototype.done = (e) => ((this.doneCallback = e), this)),
          (p.prototype.fail = (e) => ((this.failCallback = e), this)),
          (p.prototype.always = (e) => ((this.alwaysCallback = e), this));
      };
      function h(e, t = {}) {
        return t.addToPrototype ? this : new g(e, t);
      }
      function g(e, t) {
        const n = (e = []) => {
          (e = Array.from(e).filter((e, t) => {
            if (e) return (this[t] = e), e;
          })),
            Object.defineProperty(this, "length", { value: e.length });
        };
        if ("string" == typeof e)
          0 === e.indexOf("<") && ((r = e), u.test(r))
            ? n([l(e, t)])
            : n("window" === e ? [window] : "document" === e ? [document] : document.querySelectorAll(e));
        else {
          if (e instanceof h) return e;
          e && e.jquery
            ? e.length
              ? n(e.toArray())
              : n()
            : Array.isArray(e)
            ? n(e)
            : e instanceof HTMLElement || "object" == typeof e
            ? n([e])
            : null == e && n();
        }
        var r;
      }
      (h.contains = function (e, t) {
        return e.contains(t);
      }),
        (h.extend = function () {
          return Object.assign.apply(null, arguments);
        }),
        (h.ajax = function (e = {}) {
          const {
              type: t = "get",
              url: n = "",
              data: r,
              success: o,
              error: i,
              cancelToken: s,
              complete: a,
              modifyHeaders: c = (e) => e
            } = "string" == typeof e ? { url: e } : { ...e, type: e.type && e.type.toLowerCase() },
            u = new p();
          (u.doneCallback = o), (u.failCallback = i), (u.alwaysCallback = a);
          const l = { method: t, url: n, cancelToken: s };
          return (
            (function (e) {
              return (
                e &&
                [
                  m.globals.urlRoot,
                  m.globals.urlRootApi,
                  m.globals.urlRootStats,
                  m.globals.urlRootLogin,
                  m.globals.urlRootIntegration
                ].some((t) => e.startsWith(t))
              );
            })(n) &&
              (l.headers = c(
                (function () {
                  const e = {
                      "X-Momentum-Version": m.globals.version,
                      "X-Momentum-ClientDate": m.utils.getLocalDateTimeString(),
                      "X-Momentum-TabId": f.Z
                    },
                    t = localStorage.getItem("token"),
                    n = localStorage.getItem("client_uuid"),
                    r = localStorage.getItem("activeTags");
                  if (
                    (t && (e.Authorization = "Bearer " + t),
                    n && (e["X-Momentum-ClientId"] = n),
                    r && (e["X-Momentum-Tags"] = r),
                    m.conditionalFeatures.featureEnabled("allowoptions"))
                  ) {
                    const t = localStorage.getItem("X-Momentum-Options");
                    t && (e["X-Momentum-Options"] = t);
                  }
                  return e;
                })()
              )),
            r && ("get" === t ? (l.params = r) : (l.data = r)),
            (0, d.Z)(l)
              .then((e) => {
                u.doneCallback && u.doneCallback(e.data, "success");
              })
              .catch((e) => {
                console.error(e),
                  u.failCallback &&
                    (e.response &&
                      ((e.status = e.response.status),
                      e.response.data && (e.responseJSON = { message: e.response.data, msg: e.response.data })),
                    u.failCallback(e));
              })
              .finally(() => {
                u.alwaysCallback && u.alwaysCallback();
              }),
            u
          );
        }),
        (g.prototype = new h(null, { addToPrototype: !0 })),
        (function (e) {
          (e.prototype.each = function (e) {
            return Object.values(this).forEach((t, n) => e.call(t, n, t)), this;
          }),
            (e.prototype.addClass = function (e) {
              return (
                e &&
                  this.each(function () {
                    e.trim()
                      .split(" ")
                      .forEach((e) => e && this.classList.add(e));
                  }),
                this
              );
            }),
            (e.prototype.removeClass = function (e) {
              return (
                e &&
                  this.each(function () {
                    e.split(" ").forEach((e) => this.classList.remove(e));
                  }),
                this
              );
            }),
            (e.prototype.toggleClass = function (e, t) {
              const n = e.split(" ");
              return (
                this.each(function () {
                  n.forEach((e) => {
                    (!this.classList.contains(e) && !1 !== t) || !0 === t ? this.classList.add(e) : this.classList.remove(e);
                  });
                }),
                this
              );
            }),
            (e.prototype.hasClass = function (e) {
              return !(!e || !this.length) && Object.values(this).some((t) => e.split(" ").every((e) => t.classList.contains(e)));
            }),
            (e.prototype.hide = function () {
              return (
                this.each(function () {
                  this.style.display = "none";
                }),
                this
              );
            }),
            (e.prototype.height = function (e) {
              if (void 0 !== e)
                return (
                  this.each(function () {
                    this.style.height = a(e);
                  }),
                  this
                );
              {
                if (!this.length) return;
                if (this[0] === window) return window.innerHeight;
                let e = this[0].offsetHeight;
                return void 0 === e && (e = this[0].getBoundingClientRect && this[0].getBoundingClientRect().height), e;
              }
            }),
            (e.prototype.width = function (e) {
              if (void 0 !== e)
                return (
                  this.each(function () {
                    this.style.width = a(e);
                  }),
                  this
                );
              {
                if (!this.length) return;
                if (this[0] === window) return window.innerWidth;
                let e = this[0].offsetwidth;
                return void 0 === e && (e = this[0].getBoundingClientRect && this[0].getBoundingClientRect().width), e;
              }
            }),
            (e.prototype.offset = function () {
              if (!this.length) return;
              const e = this[0].getBoundingClientRect(),
                t = window.pageXOffset || document.documentElement.scrollLeft,
                n = window.pageYOffset || document.documentElement.scrollTop;
              return { top: e.top + n, left: e.left + t };
            }),
            (e.prototype.css = function (e, t) {
              if ("string" == typeof e && void 0 === t) {
                if (!this.length) return;
                return getComputedStyle(this[0])[e];
              }
              {
                let n = {};
                "string" == typeof e ? (n[e] = t) : "object" == typeof e && (n = e);
                const r = ["opacity", "z-index", "flex", "flex-grow", "flex-shrink", "order"];
                this.each(function () {
                  Object.keys(n).forEach((e) => {
                    n[e] || 0 === n[e]
                      ? r.includes(e)
                        ? (this.style[e] = n[e])
                        : (this.style[e] = a(n[e]))
                      : this.style.removeProperty(e);
                  });
                });
              }
              return this;
            }),
            (e.prototype.get = function (e) {
              return this.length ? (e >= 0 ? this[e] : this[this.length + e - 1]) : this;
            }),
            (e.prototype.eq = function (e) {
              return this.length ? v(e >= 0 ? this[e] : this[this.length + e - 1]) : this;
            }),
            (e.prototype.first = function () {
              return this.length ? v([this[0]]) : this;
            }),
            (e.prototype.last = function () {
              return this.length ? v([this[Object.keys(this).length - 1]]) : this;
            }),
            (e.prototype.next = function (e) {
              if (!this.length) return this;
              const t = [];
              return (
                this.each(function () {
                  const e = this.nextSibling;
                  e && t.push(e);
                }),
                e ? v(t).filter(e) : v(t)
              );
            }),
            (e.prototype.prev = function (e) {
              if (!this.length) return this;
              const t = [];
              return (
                this.each(function () {
                  const e = this.previousSibling;
                  e && t.push(e);
                }),
                e ? v(t).filter(e) : v(t)
              );
            }),
            (e.prototype.prevAll = function (e) {
              if (!this.length) return this;
              const t = [];
              return (
                this.each(function () {
                  !(function e(n) {
                    const r = n.previousSibling;
                    r && (t.push(r), e(r));
                  })(this);
                }),
                e ? v(t).filter(e) : v(t)
              );
            }),
            (e.prototype.nextAll = function (e) {
              if (!this.length) return this;
              const t = [];
              return (
                this.each(function () {
                  !(function e(n) {
                    const r = n.nextSibling;
                    r && (t.push(r), e(r));
                  })(this);
                }),
                e ? v(t).filter(e) : v(t)
              );
            }),
            (e.prototype.find = function (e) {
              let t = [];
              return (
                this.each(function () {
                  const n = this.querySelectorAll(e);
                  n.length && (t = t.concat(Array.from(n)));
                }),
                t.length ? v(t) : v()
              );
            }),
            (e.prototype.closest = function (e) {
              const t = [];
              return (
                this.each(function () {
                  if (this.matches(e)) t.push(this);
                  else {
                    const n = this.closest(e);
                    n && !t.includes(n) && t.push(n);
                  }
                }),
                t.length ? v(t) : v()
              );
            }),
            (e.prototype.parent = function (e) {
              const t = v(Object.values(this).map((e) => e.parentElement));
              return e ? t.filter(e) : t;
            }),
            (e.prototype.children = function (e) {
              let t = [];
              return (
                this.each(function () {
                  t = t.concat(Array.from(this.children));
                }),
                e ? v(t).filter(e) : v(t)
              );
            }),
            (e.prototype.siblings = function (e) {
              const t = [];
              return (
                this.each(function () {
                  const e = this.parentElement;
                  e &&
                    Array.from(e.children).forEach((e) => {
                      e === this || t.includes(e) || t.push(e);
                    });
                }),
                e ? v(t).filter(e) : v(t)
              );
            }),
            (e.prototype.filter = function (e) {
              return v(Object.values(this).filter((t) => r(t, e)));
            }),
            (e.prototype.not = function (e) {
              return v(Object.values(this).filter((t) => !r(t, e)));
            }),
            (e.prototype.is = function (e) {
              return Object.values(this).some((t) => r(t, e));
            }),
            (e.prototype.index = function (e) {
              if (this.length)
                return "string" == typeof e
                  ? Object.values(this).findIndex((t) => t.matches(e))
                  : e instanceof HTMLElement
                  ? Object.values(this).findIndex((t) => t === e)
                  : e instanceof v || (e && e.jquery)
                  ? Object.values(this).findIndex((t) => t === e[0])
                  : void 0;
            }),
            (e.prototype.contains = function (e) {
              if (e && this.length) return Object.values(this).some((t) => t.contains(e));
            }),
            (e.prototype.val = function (e) {
              return void 0 === e && this.length
                ? this[0].value || ""
                : (this.each(function () {
                    this.value = e;
                  }),
                  this);
            }),
            (e.prototype.text = function (e) {
              if (void 0 !== e)
                return (
                  this.each(function () {
                    this.textContent = e;
                  }),
                  this
                );
              if (this.length) {
                let e = "";
                return (
                  this.each(function () {
                    e += this.textContent;
                  }),
                  e
                );
              }
            }),
            (e.prototype.prop = function (e, t) {
              if (!this.length) return void 0 === t ? void 0 : this;
              if ("string" == typeof e && void 0 === t) return this[0][e];
              let n = {};
              return (
                "string" == typeof e ? (n[e] = t) : "object" == typeof e && (n = e),
                this.each(function () {
                  Object.keys(n).forEach((e) => (this[e] = n[e]));
                }),
                this
              );
            }),
            (e.prototype.attr = function (e, t) {
              if (!this.length) return void 0 === t ? void 0 : this;
              if ("string" == typeof e && void 0 === t) return this[0].getAttribute(e);
              let n = {};
              return (
                "string" == typeof e ? (n[e] = t) : "object" == typeof e && (n = e),
                this.each(function () {
                  Object.keys(n).forEach((e) => this.setAttribute(e, n[e]));
                }),
                this
              );
            }),
            (e.prototype.data = function (e, t) {
              if (!this.length) return void 0 === t ? void 0 : this;
              if ("string" == typeof e && void 0 === t) return this[0].getAttribute("data-" + e);
              if (void 0 === e && void 0 === t) {
                let e = {};
                return (
                  Array.from(this[0].attributes).forEach((t) => {
                    t.nodeName.includes("data") && (e[t.nodeName.split("data-")[1]] = t.value);
                  }),
                  e
                );
              }
              let n = {};
              return (
                "string" == typeof e ? (n[e] = t) : "object" == typeof e && (n = e),
                this.each(function () {
                  Object.keys(n).forEach((e) => this.setAttribute("data-" + e, n[e]));
                }),
                this
              );
            }),
            (e.prototype.html = function (e) {
              if (void 0 === e) {
                if (!this.length) return;
                return this.length > 1 ? "" : this[0].innerHTML;
              }
              return (
                this.each(function (t) {
                  "function" == typeof e
                    ? (this.innerHTML = e(t, this.innerHTML))
                    : "string" == typeof e
                    ? (this.innerHTML = e)
                    : e instanceof HTMLElement
                    ? ((this.innerHTML = ""), this.append(e))
                    : e instanceof v && ((this.innerHTML = ""), e.each((e, t) => this.append(t)));
                }),
                this
              );
            });
          let t = {};
          (e.prototype.on = function (e) {
            let n, r;
            3 === arguments.length ? ((n = arguments[1]), (r = arguments[2])) : (r = arguments[1]);
            const o = e.split(" ");
            return (
              this.each(function () {
                o.forEach((e) => {
                  let o,
                    [i, s] = e.split(".");
                  s
                    ? (n
                        ? ("blur" === i ? (i = "focusout") : "focus" === i && (i = "focusin"),
                          (o = (e) => {
                            e.originalEvent = e;
                            let t = e.target.closest(n);
                            if (t && this.contains(t)) return (e.delegatedTarget = t), r(e);
                          }))
                        : (o = (e) => ((e.originalEvent = e), (e.delegatedTarget = e.currentTarget), r(e))),
                      c(t, s, n, i, o),
                      this.addEventListener(i, o))
                    : this.addEventListener(i, r);
                });
              }),
              this
            );
          }),
            (e.prototype.once = function (e, t) {
              const n = e.split(" ");
              this.each(function () {
                n.forEach((e) => {
                  this.addEventListener(e, t, { once: !0 });
                });
              });
            }),
            (e.prototype.off = function (e, n) {
              const r = e.split(" ");
              return (
                this.each(function () {
                  r.forEach((e) => {
                    let [r, o] = e.split(".");
                    if (o)
                      if (r) {
                        "blur" === r ? (r = "focusout") : "focus" === r && (r = "focusin");
                        const e = t[o][r];
                        e &&
                          e.forEach((e) => {
                            this.removeEventListener(r, e), delete t[o][r];
                          });
                      } else
                        t[o] &&
                          (function (e, t, n) {
                            Object.values(t[n]).forEach((t) => {
                              Object.keys(t).forEach((n) => {
                                t[n].forEach((t) => {
                                  e.removeEventListener(n, t);
                                });
                              });
                            }),
                              delete t[n];
                          })(this, t, o);
                    else this.removeEventListener(r, n);
                  });
                }),
                this
              );
            }),
            (e.prototype.trigger = function (e) {
              return (
                ["click", "blur", "focus"].includes(e)
                  ? this.each(function () {
                      this[e]();
                    })
                  : this.each(function () {
                      this.dispatchEvent(new Event(e));
                    }),
                this
              );
            }),
            (e.prototype.focus = function () {
              this[0] && this[0].focus();
            }),
            (e.prototype.select = function () {
              if (this.length) return this[0].select && this[0].select(), this;
            }),
            (e.prototype.scrollTop = function (e) {
              return void 0 === e
                ? this[0].scrollTop
                : (this.each(function () {
                    this.scrollTop = e;
                  }),
                  this);
            }),
            (e.prototype.scrollLeft = function (e) {
              return void 0 === e
                ? this[0].scrollLeft
                : (this.each(function () {
                    this.scrollLeft = e;
                  }),
                  this);
            }),
            (e.prototype.append = function (e) {
              const t = this.length;
              return o.call(
                this,
                e,
                function (e, n, r, o) {
                  this.append(i(e, o, t));
                },
                "beforeend"
              );
            }),
            (e.prototype.prepend = function (e) {
              const t = this.length;
              return o.call(
                this,
                e,
                function (e, n, r, o) {
                  this.prepend(i(e, o, t));
                },
                "afterbegin"
              );
            }),
            (e.prototype.before = function (e) {
              const t = this.length;
              return o.call(
                this,
                e,
                function (e, n, r, o) {
                  const s = i(e, o, t);
                  this.parentElement.insertBefore(s, this);
                },
                "beforebegin"
              );
            }),
            (e.prototype.after = function (e) {
              const t = this.length;
              return o.call(
                this,
                e,
                function (e, n, r, o) {
                  const s = i(e, o, t);
                  this.nextSibling ? this.parentElement.insertBefore(s, this.nextSibling) : this.parentElement.append(s);
                },
                "afterend"
              );
            }),
            (e.prototype.appendTo = function (e) {
              const t = [];
              return (
                o.call(this, e, function (e, n, r) {
                  e.append(i(this, n, r.length, t));
                }),
                t.length ? v(t) : this
              );
            }),
            (e.prototype.prependTo = function (e) {
              const t = [];
              return (
                o.call(this, e, function (e, n, r) {
                  e.prepend(i(this, n, r.length, t));
                }),
                t.length ? v(t) : this
              );
            }),
            (e.prototype.remove = function () {
              return (
                this.each(function () {
                  this.remove();
                }),
                this
              );
            }),
            (e.prototype.empty = function () {
              return (
                this.each(function () {
                  this.innerHTML = "";
                }),
                this
              );
            }),
            (e.prototype.clone = function () {
              if (this.length) return v(Object.values(this).map((e) => e.cloneNode(!0)));
            }),
            (e.prototype.detach = function () {
              return (
                this.each(function () {
                  const e = this.parentElement;
                  e && e.removeChild(this);
                }),
                this
              );
            }),
            (e.prototype.mFadeIn = function (e, t) {
              return (
                this.each(function () {
                  const n = v(this);
                  (e = null != e ? e : 500),
                    n.timeouts &&
                      n.timeouts.forEach(function (e) {
                        clearTimeout(e);
                      }),
                    Object.defineProperty(n, "timeouts", { value: [] }),
                    n.addClass("m-hide"),
                    n.removeClass("m-hide-display m-hide-visibility"),
                    n.css("transition", "opacity " + e + "ms ease"),
                    n.timeouts.push(
                      setTimeout(function () {
                        n.removeClass("m-hide");
                      }, 10)
                    ),
                    n.timeouts.push(
                      setTimeout(function () {
                        n.css("transition", ""), t && t();
                      }, e + 10)
                    );
                }),
                this
              );
            }),
            (e.prototype.mFadeOut = function (e, t, n) {
              return (
                this.each(function () {
                  const r = v(this);
                  (e = null != e ? e : 500),
                    r.timeouts &&
                      r.timeouts.forEach(function (e) {
                        clearTimeout(e);
                      }),
                    Object.defineProperty(r, "timeouts", { value: [] }),
                    r.css("transition", "opacity " + e + "ms ease"),
                    r.addClass("m-hide"),
                    r.timeouts.push(
                      setTimeout(function () {
                        t ? r.addClass("m-hide-visibility") : r.addClass("m-hide-display"), r.css("transition", ""), n && n();
                      }, e)
                    );
                }),
                this
              );
            }),
            (e.prototype.mShow = function () {
              return (
                this.each(function () {
                  v(this).removeClass("m-hide m-hide-display m-hide-visibility");
                }),
                this
              );
            }),
            (e.prototype.mHide = function (e) {
              return (
                this.each(function () {
                  const t = v(this);
                  e ? t.addClass("m-hide-visibility") : t.addClass("m-hide-display");
                }),
                this
              );
            }),
            (e.prototype.mToggle = function (e, t) {
              return (
                this.each(function () {
                  const n = v(this);
                  "string" != typeof e &&
                    console.log(
                      "displayType must be a string and a valid display value that is not 'none'.\ne.g. 'block', 'inline-block', 'inline', 'flex', 'inline-flex', 'list-item', 'grid', etc."
                    ),
                    void 0 === t
                      ? n.length && ("none" === window.getComputedStyle(this).display ? n.css("display", e) : n.hide())
                      : t
                      ? n.css("display", e)
                      : n.hide();
                }),
                this
              );
            }),
            (e.prototype.pseudoHoverOn = function () {
              this.each(function () {
                v(this).addClass("pseudo-hover");
              });
            }),
            (e.prototype.pseudoHoverOff = function () {
              this.each(function () {
                v(this).removeClass("pseudo-hover");
              });
            });
          let n = {};
          (e.prototype.clickOutside = function (e, t) {
            return (
              this.each(function () {
                const r = v(this);
                let o;
                function i(e) {
                  o = e.target;
                }
                function s(n) {
                  r[0].contains(o) ||
                    r[0].contains(n.target) ||
                    r === o ||
                    r === n.target ||
                    !0 === r.data("justBoundClickOutsideHandler") ||
                    t.call(e, n);
                }
                r.data("justBoundClickOutsideHandler", !0),
                  setTimeout(function () {
                    r.data("justBoundClickOutsideHandler", !1);
                  }, 100),
                  r.data("clickOutsideMouseupHandlerId", Math.random().toString(36).substring(7)),
                  r.data("clickOutsideMousedownHandlerId", Math.random().toString(36).substring(7)),
                  (n[r.data("clickOutsideMouseupHandlerId")] = s),
                  (n[r.data("clickOutsideMousedownHandlerId")] = i),
                  document.addEventListener("mouseup", s),
                  document.addEventListener("mousedown", i);
              }),
              this
            );
          }),
            (e.prototype.unbindClickOutside = function () {
              return (
                this.each(function () {
                  var e, t, r;
                  const o = v(this);
                  document.removeEventListener("mouseup", n[o.data("clickOutsideMouseupHandlerId")]),
                    document.removeEventListener("mousedown", n[o.data("clickOutsideMousedownHandlerId")]),
                    delete n[o.data("clickOutsideMouseupHandlerId")],
                    delete n[o.data("clickOutsideMousedownHandlerId")],
                    null === (e = o.removeData) || void 0 === e || e.call(o, "clickOutsideMouseupHandlerId"),
                    null === (t = o.removeData) || void 0 === t || t.call(o, "clickOutsideMousedownHandlerId"),
                    null === (r = o.removeData) || void 0 === r || r.call(o, "justBoundClickOutsideHandler");
                }),
                this
              );
            });
        })(g),
        (window.$ = h);
      const v = h;
      var _ = s(92729),
        y = s(96046),
        b = s(80809),
        w = (s(30495), s(52713)),
        S = s(65238),
        k = s(35174);
      const O = { TIME: "user:migration:time", FOCUS: "user:migration:focus", ONBOARDING: "user:migration:onboarding" },
        E = "tab.legacyUserMigration",
        T = new (class {
          async migrateIfEligible() {
            if (this._meetsLockoutRestriction() && (await this._userIsRandomlySelected()))
              if ((localStorage.setItem(O.TIME, Date.now().toString()), await this._serviceWorkerIsResponsive())) await this._migrateAll();
              else {
                const t = "legacy user migration postponed due to worker not responding";
                new e.Z(E).warn(t), console.warn(t);
              }
          }
          _meetsLockoutRestriction() {
            const e = localStorage.getItem(O.TIME);
            return !(e && Number(e) + 6e4 > Date.now());
          }
          async _userIsRandomlySelected() {
            const e = await (0, w.Z)("legacyUserMigrationPortion");
            return !!e && m.utils.getPseudoRandomFromString(localStorage.getItem("client_uuid")) <= e;
          }
          async _serviceWorkerIsResponsive() {
            return (
              !m.utils.hasServiceWorker() ||
              new Promise((e) => {
                m.dataSync.awaitWorkerReady().then(() => e(!0)), setTimeout(() => e(!1), 100);
              })
            );
          }
          async _migrateAll() {
            m.migratingLegacyUser = !0;
            try {
              if ((localStorage.getItem("token") || (await this._migrateUser()), !localStorage.getItem(O.FOCUS)))
                try {
                  await this._migrateFocuses();
                } catch (e) {
                  this._logError(e, "focus");
                }
              if (!localStorage.getItem(O.ONBOARDING))
                try {
                  await this._saveOnboardingIntroAsComplete();
                } catch (e) {
                  this._logError(e, "onboarding");
                }
              this._cleanUp();
            } catch (e) {
              this._logError(e, "register");
            } finally {
              m.migratingLegacyUser = !1;
            }
          }
          async _migrateUser() {
            if (chrome && chrome.runtime) {
              const e = await new Promise((e) => {
                chrome.runtime.sendMessage({ type: "legacyUserMigration", data: { tabId: f.Z } }, e);
              });
              if (!e.success) return;
              m.syncCoordinator.loadSettings(e.settings);
            } else {
              const e = await (async function (e) {
                const t = localStorage.getObject("momentum-customization-1").displayname,
                  { data: n } = await e.post("user:migrateLegacy?canceled=true", { name: t });
                return (
                  localStorage.setItem("token", n.token),
                  localStorage.setItem("token_uuid", n.token_uuid),
                  localStorage.setItem("unregistered", !0),
                  n.settings
                );
              })(k.Z);
              m.syncCoordinator.loadSettings(e);
            }
          }
          async _migrateFocuses() {
            await m.dataSync.sendMessage({
              handler: "migrate",
              args: [
                "focus",
                {
                  env: {
                    token: localStorage.getItem("token"),
                    clientUuid: localStorage.getItem("client_uuid"),
                    apiUrl: m.globals.urlRootApi,
                    version: m.globals.version,
                    tabId: f.Z
                  }
                }
              ]
            }),
              localStorage.setItem(O.FOCUS, "true");
          }
          async _saveOnboardingIntroAsComplete() {
            const e = (await Promise.all([s.e(4818), s.e(3064), s.e(7651), s.e(9437)]).then(s.bind(s, 35746))).default,
              t = new e.Model();
            t.updateData({ name: S.os.FREE_INTRODUCTION, status: "complete" }), await e.add(t), localStorage.setItem(O.ONBOARDING, "true");
          }
          _logError(t, n) {
            var r;
            new e.Z(E).error("legacy user migration error", {
              errorMessage: t.message,
              stack: t.stack,
              errorName: t.name,
              errorType: typeof t,
              errorToString: null == t || null === (r = t.toString) || void 0 === r ? void 0 : r.call(t),
              phase: n
            }),
              console.error(t);
          }
          _cleanUp() {
            localStorage.removeItem(O.ONBOARDING), localStorage.removeItem(O.FOCUS), localStorage.removeItem(O.TIME);
          }
        })();
      var C = s(7838);
      s(24960), s(25659);
      const x = "versionWarning:lastDismissed",
        I = localStorage.getItem(x);
      function j(e) {
        C.Z.$emit("flashMessage", {
          message: e,
          error: !0,
          contact: { messageText: "If you need further assistance", linkText: "please contact our support team." },
          onDismiss: () => {
            localStorage.setItem(x, Date.now().toString());
          }
        });
      }
      var A;
      s(72918), s(95967);
      const P = localStorage.getItem("token");
      null !== (A = window.browser) &&
        void 0 !== A &&
        A.runtime &&
        b.Z.isSafari() &&
        (P
          ? localStorage.getItem("appStorageTokenMigration:successful") ||
            b.Z.saveTokenToAppStorage().then(() => {
              localStorage.setItem("appStorageTokenMigration:successful", !0);
            })
          : (async () => {
              const e = await b.Z.getTokenFromAppStorage();
              if (e) {
                const { token: n, tokenUuid: r, clientUuid: o, userUuid: i, email: s } = e;
                n && localStorage.setItem("token", n),
                  r && localStorage.setItem("token_uuid", r.toLowerCase()),
                  o && localStorage.setItem("client_uuid", o.toLowerCase()),
                  s && localStorage.setItem("email", s),
                  i && t(i);
                try {
                  if (!i || !s) {
                    const e = await k.Z.get("user/profile?details=1");
                    e && (i || t(e.user_uuid), s || localStorage.setItem("email", e.default_email));
                  }
                } finally {
                  window.location.reload();
                }
              }
              function t(e) {
                localStorage.setItem("user_uuid", e), localStorage.setItem("userId", e);
              }
            })()),
        s(90248);
      var R = s(81405),
        M = s(63139),
        L = s(20144),
        N = function () {
          var e = this,
            t = e._self._c;
          return t(
            "div",
            { ref: "dashboard", staticClass: "dashboard apps hide-apps" },
            [
              t("div", { staticClass: "region full" }),
              e._v(" "),
              t("div", { staticClass: "top-row" }, [
                t("div", {
                  directives: [
                    {
                      name: "resize-sensor",
                      rawName: "v-resize-sensor",
                      value: e.calculateGridRowHeights,
                      expression: "calculateGridRowHeights"
                    }
                  ],
                  ref: "topBar",
                  staticClass: "region top-bar"
                }),
                e._v(" "),
                t("div", {
                  directives: [
                    {
                      name: "resize-sensor",
                      rawName: "v-resize-sensor",
                      value: e.calculateGridRowHeights,
                      expression: "calculateGridRowHeights"
                    }
                  ],
                  ref: "topLeft",
                  staticClass: "region top-left",
                  attrs: { "data-test": "top-left" }
                }),
                e._v(" "),
                t("div", { staticClass: "region top-right" })
              ]),
              e._v(" "),
              t("div", {
                directives: [
                  {
                    name: "resize-sensor",
                    rawName: "v-resize-sensor",
                    value: e.calculateSidebarsWidth,
                    expression: "calculateSidebarsWidth"
                  }
                ],
                ref: "sidebarLeft",
                staticClass: "region sidebar-left"
              }),
              e._v(" "),
              t("div", { staticClass: "region center-above" }),
              e._v(" "),
              t("div", {
                directives: [
                  {
                    name: "resize-sensor",
                    rawName: "v-resize-sensor",
                    value: () => {
                      e.calculateGridRowHeights(), e.calculateSidebarsWidth();
                    },
                    expression: "() => { calculateGridRowHeights(); calculateSidebarsWidth() }"
                  }
                ],
                ref: "center",
                staticClass: "center-measure"
              }),
              e._v(" "),
              t("div", { staticClass: "region center", attrs: { "data-test": "region-center" } }),
              e._v(" "),
              t("div", { staticClass: "region center-below", attrs: { "data-test": "region-center-below" } }),
              e._v(" "),
              t("div", {
                directives: [
                  {
                    name: "resize-sensor",
                    rawName: "v-resize-sensor",
                    value: e.calculateSidebarsWidth,
                    expression: "calculateSidebarsWidth"
                  }
                ],
                ref: "sidebarRight",
                staticClass: "region sidebar-right"
              }),
              e._v(" "),
              t("three-col-layout", {
                staticClass: "bottom-row",
                attrs: { "grow-center": "", "align-sides-outside": "" },
                scopedSlots: e._u([
                  {
                    key: "left",
                    fn: function () {
                      return [t("div", { staticClass: "region bottom-left" })];
                    },
                    proxy: !0
                  },
                  {
                    key: "center",
                    fn: function () {
                      return [t("div", { staticClass: "region bottom-center" })];
                    },
                    proxy: !0
                  },
                  {
                    key: "right",
                    fn: function () {
                      return [t("div", { staticClass: "region bottom-right" })];
                    },
                    proxy: !0
                  }
                ])
              }),
              e._v(" "),
              t("transition", { attrs: { name: "fade" } }, [
                e.overlayActive ? t("div", { staticClass: "dash-overlay", attrs: { "data-test": "dash-overlay" } }) : e._e()
              ])
            ],
            1
          );
        };
      N._withStripped = !0;
      var D = s(61706);
      const F = {
          name: "Dashboard",
          components: { ThreeColLayout: s(84888).Z },
          directives: { ResizeSensor: D.Z },
          data: () => ({ topRowHeight: 0, centerAboveHeight: 0, sidebarsWidth: 0 }),
          computed: { windowHeight: () => y.Z.windowDimensions.height, overlayActive: () => y.Z.dashboardOverlayActive },
          watch: {
            windowHeight() {
              this.calculateGridRowHeights();
            }
          },
          methods: {
            calculateGridRowHeights() {
              var e, t, n;
              (null === (e = this.$refs.center) || void 0 === e ? void 0 : e.offsetHeight) < 0 ||
                ((this.topRowHeight =
                  ((null === (t = this.$refs.topBar) || void 0 === t ? void 0 : t.offsetHeight) ?? 0) +
                  ((null === (n = this.$refs.topLeft) || void 0 === n ? void 0 : n.offsetHeight) ?? 0)),
                (this.centerAboveHeight = this.windowHeight / 2 - (this.$refs.center.offsetHeight / 2 + this.topRowHeight)));
            },
            calculateSidebarsWidth() {
              const e = this.$refs.sidebarLeft.clientWidth,
                t = this.$refs.sidebarRight.clientWidth;
              this.sidebarsWidth = Math.max(e, t);
            }
          }
        },
        U = () => {
          (0, L.sj)((e, t) => ({
            e6aaf122: e.sidebarsWidth + "px",
            "460a0c20": e.topRowHeight + "px",
            "3452cacf": e.centerAboveHeight + "px"
          }));
        },
        B = F.setup;
      F.setup = B ? (e, t) => (U(), B(e, t)) : U;
      const H = F;
      s(34050);
      const V = (0, s(51900).Z)(H, N, [], !1, null, "45b98c80", null).exports;
      new L.ZP({ render: (e) => e(V) }).$mount(".dashboard"), s(64398);
      var q = s(77140),
        z = s(35597);
      (m.constants = _.Cg),
        (m.reactive = y.Z),
        (m.utils = b.Z),
        (m.$e = C.Z),
        (m.Analytics = R.ZP),
        (m.versionDeprecationWarningCheck = async function () {
          const e = m.globals.version,
            t = await (0, w.Z)("versions.deprecated"),
            n = await (0, w.Z)("versions.pendingDeprecation");
          parseInt(I) + 432e5 > Date.now() ||
            (t && !b.Z.currentVersionIsNewerThan(t)
              ? j(`Your version of Momentum (${e}) is no longer supported. Please restart your browser to update.`)
              : n &&
                !b.Z.currentVersionIsNewerThan(n) &&
                j(`Your version of Momentum (${e}) will soon be unsupported. Please restart your browser to update.`));
        }),
        (m.legacyUserMigration = T),
        (m.constants.LEGACY_USER_MIGRATION_KEYS = O),
        (m.appZStack = M.Z),
        (m.promisifiedChrome = q.H),
        (m.timestampService = z.Z);
    })();
})();
