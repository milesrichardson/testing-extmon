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
            if (!Object.prototype.hasOwnProperty.call(t, "value") || t.value) {
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
        const r = { version: "2.12.11", environment: "production", apiUrl: "https://api.momentumdash.com/", platform: "chrome" };
      },
      81405: (e, t, n) => {
        "use strict";
        n.d(t, { ZP: () => yr });
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
                  u(e, t, n[t]);
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
        function l(e, t, n) {
          return t && c(e.prototype, t), n && c(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
        }
        function u(e, t, n) {
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
        function h(e) {
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
            return (function (e, t) {
              if (t && ("object" == typeof t || "function" == typeof t)) return t;
              if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
              return (function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
              })(e);
            })(this, n);
          };
        }
        function g(e, t) {
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
            _(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function v(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return y(e);
            })(e) ||
            (function (e) {
              if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
            })(e) ||
            _(e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
              );
            })()
          );
        }
        function _(e, t) {
          if (e) {
            if ("string" == typeof e) return y(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return (
              "Object" === n && e.constructor && (n = e.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(e)
                : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? y(e, t)
                : void 0
            );
          }
        }
        function y(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        }
        function b(e, t) {
          var n = ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
          if (!n) {
            if (Array.isArray(e) || (n = _(e)) || (t && e && "number" == typeof e.length)) {
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
        var w = { DEBUG: !1, LIB_VERSION: "1.93.3" },
          S = Array.isArray,
          k = Object.prototype,
          O = k.hasOwnProperty,
          E = k.toString,
          C =
            S ||
            function (e) {
              return "[object Array]" === E.call(e);
            },
          T = function (e) {
            return "[object Uint8Array]" === E.call(e);
          },
          x = function (e) {
            return "function" == typeof e;
          },
          I = function (e) {
            return e === Object(e) && !C(e);
          },
          P = function (e) {
            return void 0 === e;
          },
          j = function (e) {
            return "[object String]" == E.call(e);
          },
          R = function (e) {
            return null === e;
          },
          A = function (e) {
            return "[object Number]" == E.call(e);
          },
          M = function (e) {
            return "[object Boolean]" === E.call(e);
          },
          L = Array.prototype,
          $ = L.forEach,
          N = L.indexOf,
          D = "undefined" != typeof window ? window : void 0,
          F = null == D ? void 0 : D.navigator,
          U = null == D ? void 0 : D.document,
          B = null == F ? void 0 : F.userAgent,
          H = null != D ? D : {},
          q = "[PostHog.js]",
          V = {
            _log: function (e) {
              if (D && (w.DEBUG || H.POSTHOG_DEBUG) && !P(D.console) && D.console) {
                for (
                  var t = ("__rrweb_original__" in D.console[e]) ? D.console[e].__rrweb_original__ : D.console[e],
                    n = arguments.length,
                    r = new Array(n > 1 ? n - 1 : 0),
                    o = 1;
                  o < n;
                  o++
                )
                  r[o - 1] = arguments[o];
                t.apply(void 0, [q].concat(r));
              }
            },
            info: function () {
              for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              V._log.apply(V, ["log"].concat(t));
            },
            warn: function () {
              for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              V._log.apply(V, ["warn"].concat(t));
            },
            error: function () {
              for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              V._log.apply(V, ["error"].concat(t));
            },
            critical: function () {
              for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
              (e = console).error.apply(e, [q].concat(n));
            },
            uninitializedWarning: function (e) {
              V.error("You must initialize PostHog before calling ".concat(e));
            }
          },
          z = {},
          W = function (e) {
            return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
          };
        function G(e, t, n) {
          if (C(e))
            if ($ && e.forEach === $) e.forEach(t, n);
            else if ("length" in e && e.length === +e.length)
              for (var r = 0, o = e.length; r < o; r++) if (r in e && t.call(n, e[r], r) === z) return;
        }
        function Z(e, t, n) {
          if (!R(e) && !P(e)) {
            if (C(e)) return G(e, t, n);
            for (var r in e) if (O.call(e, r) && t.call(n, e[r], r) === z) return;
          }
        }
        var J = function (e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
          return (
            G(n, function (t) {
              for (var n in t) void 0 !== t[n] && (e[n] = t[n]);
            }),
            e
          );
        };
        function Y(e, t) {
          return -1 !== e.indexOf(t);
        }
        function Q(e) {
          for (var t = Object.keys(e), n = t.length, r = new Array(n); n--; ) r[n] = [t[n], e[t[n]]];
          return r;
        }
        var X = function () {
            return (
              (Date.now =
                Date.now ||
                function () {
                  return +new Date();
                }),
              Date.now()
            );
          },
          K = function (e) {
            try {
              return e();
            } catch (e) {
              return;
            }
          },
          ee = function (e) {
            return function () {
              try {
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                return e.apply(this, n);
              } catch (e) {
                V.critical("Implementation error. Please turn on debug and contact support@posthog.com."), V.critical(e);
              }
            };
          },
          te = function (e) {
            var t = {};
            return (
              Z(e, function (e, n) {
                j(e) && e.length > 0 && (t[n] = e);
              }),
              t
            );
          },
          ne = ["$performance_raw"];
        function re(e) {
          var t,
            n,
            r,
            o,
            i,
            s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
            a = 0,
            c = 0,
            l = "",
            u = [];
          if (!e) return e;
          e = oe(e);
          do {
            (t = ((i = (e.charCodeAt(a++) << 16) | (e.charCodeAt(a++) << 8) | e.charCodeAt(a++)) >> 18) & 63),
              (n = (i >> 12) & 63),
              (r = (i >> 6) & 63),
              (o = 63 & i),
              (u[c++] = s.charAt(t) + s.charAt(n) + s.charAt(r) + s.charAt(o));
          } while (a < e.length);
          switch (((l = u.join("")), e.length % 3)) {
            case 1:
              l = l.slice(0, -2) + "==";
              break;
            case 2:
              l = l.slice(0, -1) + "=";
          }
          return l;
        }
        var oe = function (e) {
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
                R(a) || (n > t && (i += e.substring(t, n)), (i += a), (t = n = o + 1));
            }
            return n > t && (i += e.substring(t, e.length)), i;
          },
          ie = (function () {
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
                        if ((o = o || e(null == D ? void 0 : D.event))) {
                          var i,
                            s = !0;
                          x(r) && (i = r(o));
                          var a = n.call(t, o);
                          return (!1 !== i && !1 !== a) || (s = !1), s;
                        }
                      };
                    })(t, r, a);
                  }
                else V.error("No valid element provided to register_event");
              }
            );
          })();
        function se(e, t) {
          var n = function () {
            if (!U) return t("document not found");
            var n = U.createElement("script");
            (n.type = "text/javascript"),
              (n.src = e),
              (n.onload = function (e) {
                return t(void 0, e);
              }),
              (n.onerror = function (e) {
                return t(e);
              });
            var r,
              o = U.querySelectorAll("body > script");
            o.length > 0 ? null === (r = o[0].parentNode) || void 0 === r || r.insertBefore(n, o[0]) : U.body.appendChild(n);
          };
          null != U && U.body ? n() : null == U || U.addEventListener("DOMContentLoaded", n);
        }
        function ae(e) {
          switch (s(e.className)) {
            case "string":
              return e.className;
            case "object":
              return ("baseVal" in e.className ? e.className.baseVal : null) || e.getAttribute("class") || "";
            default:
              return "";
          }
        }
        function ce(e) {
          var t = "";
          return (
            he(e) &&
              !ge(e) &&
              e.childNodes &&
              e.childNodes.length &&
              Z(e.childNodes, function (e) {
                de(e) &&
                  e.textContent &&
                  (t += W(e.textContent)
                    .split(/(\s+)/)
                    .filter(ve)
                    .join("")
                    .replace(/[\r\n]/g, " ")
                    .replace(/[ ]+/g, " ")
                    .substring(0, 255));
              }),
            W(t)
          );
        }
        function le(e) {
          return !!e && 1 === e.nodeType;
        }
        function ue(e, t) {
          return !!e && !!e.tagName && e.tagName.toLowerCase() === t.toLowerCase();
        }
        function de(e) {
          return !!e && 3 === e.nodeType;
        }
        function fe(e) {
          return !!e && 11 === e.nodeType;
        }
        var pe = ["a", "button", "form", "input", "select", "textarea", "label"];
        function he(e) {
          for (var t = e; t.parentNode && !ue(t, "body"); t = t.parentNode) {
            var n = ae(t).split(" ");
            if (Y(n, "ph-sensitive") || Y(n, "ph-no-capture")) return !1;
          }
          if (Y(ae(e).split(" "), "ph-include")) return !0;
          var r = e.type || "";
          if (j(r))
            switch (r.toLowerCase()) {
              case "hidden":
              case "password":
                return !1;
            }
          var o = e.name || e.id || "";
          return (
            !j(o) ||
            !/^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(
              o.replace(/[^a-zA-Z0-9]/g, "")
            )
          );
        }
        function ge(e) {
          return !!(
            (ue(e, "input") && !["button", "checkbox", "submit", "reset"].includes(e.type)) ||
            ue(e, "select") ||
            ue(e, "textarea") ||
            "true" === e.getAttribute("contenteditable")
          );
        }
        function ve(e) {
          if (R(e) || P(e)) return !1;
          if (j(e)) {
            if (
              ((e = W(e)),
              /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test(
                (e || "").replace(/[- ]/g, "")
              ))
            )
              return !1;
            if (/(^\d{3}-?\d{2}-?\d{4}$)/.test(e)) return !1;
          }
          return !0;
        }
        function me(e) {
          var t = ce(e);
          return ve((t = "".concat(t, " ").concat(_e(e)).trim())) ? t : "";
        }
        function _e(e) {
          var t = "";
          return (
            e &&
              e.childNodes &&
              e.childNodes.length &&
              Z(e.childNodes, function (e) {
                var n;
                if (e && "span" === (null === (n = e.tagName) || void 0 === n ? void 0 : n.toLowerCase()))
                  try {
                    var r = ce(e);
                    (t = "".concat(t, " ").concat(r).trim()),
                      e.childNodes && e.childNodes.length && (t = "".concat(t, " ").concat(_e(e)).trim());
                  } catch (e) {
                    V.error(e);
                  }
              }),
            t
          );
        }
        function ye(e) {
          return (function (e) {
            var t = e.map(function (e) {
              var t,
                n,
                r = "";
              if ((e.tag_name && (r += e.tag_name), e.attr_class)) {
                e.attr_class.sort();
                var o,
                  s = b(e.attr_class);
                try {
                  for (s.s(); !(o = s.n()).done; ) {
                    var a = o.value;
                    r += ".".concat(a.replace(/"/g, ""));
                  }
                } catch (e) {
                  s.e(e);
                } finally {
                  s.f();
                }
              }
              var c = i(
                  i(
                    i(
                      i({}, e.text ? { text: e.text } : {}),
                      {},
                      {
                        "nth-child": null !== (t = e.nth_child) && void 0 !== t ? t : 0,
                        "nth-of-type": null !== (n = e.nth_of_type) && void 0 !== n ? n : 0
                      },
                      e.href ? { href: e.href } : {}
                    ),
                    e.attr_id ? { attr_id: e.attr_id } : {}
                  ),
                  e.attributes
                ),
                l = {};
              return (
                Q(c)
                  .sort(function (e, t) {
                    var n = g(e, 1)[0],
                      r = g(t, 1)[0];
                    return n.localeCompare(r);
                  })
                  .forEach(function (e) {
                    var t = g(e, 2),
                      n = t[0],
                      r = t[1];
                    return (l[be(n.toString())] = be(r.toString()));
                  }),
                (r += ":") +
                  Q(c)
                    .map(function (e) {
                      var t = g(e, 2),
                        n = t[0],
                        r = t[1];
                      return "".concat(n, '="').concat(r, '"');
                    })
                    .join("")
              );
            });
            return t.join(";");
          })(
            (function (e) {
              return e.map(function (e) {
                var t,
                  n,
                  r = {
                    text: null === (t = e.$el_text) || void 0 === t ? void 0 : t.slice(0, 400),
                    tag_name: e.tag_name,
                    href: null === (n = e.attr__href) || void 0 === n ? void 0 : n.slice(0, 2048),
                    attr_class: we(e),
                    attr_id: e.attr__id,
                    nth_child: e.nth_child,
                    nth_of_type: e.nth_of_type,
                    attributes: {}
                  };
                return (
                  Q(e)
                    .filter(function (e) {
                      return 0 === g(e, 1)[0].indexOf("attr__");
                    })
                    .forEach(function (e) {
                      var t = g(e, 2),
                        n = t[0],
                        o = t[1];
                      return (r.attributes[n] = o);
                    }),
                  r
                );
              });
            })(e)
          );
        }
        function be(e) {
          return e.replace(/"|\\"/g, '\\"');
        }
        function we(e) {
          var t = e.attr__class;
          return t ? (C(t) ? t : t.split(" ")) : void 0;
        }
        var Se = (function () {
            function e(t) {
              a(this, e), (this.clicks = []), (this.enabled = t);
            }
            return (
              l(e, [
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
          ke = "$people_distinct_id",
          Oe = "__alias",
          Ee = "__timers",
          Ce = "$autocapture_disabled_server_side",
          Te = "$session_recording_enabled_server_side",
          xe = "$console_log_recording_enabled_server_side",
          Ie = "$session_recording_recorder_version_server_side",
          Pe = "$session_recording_network_payload_capture",
          je = "$sesid",
          Re = "$session_is_sampled",
          Ae = "$enabled_feature_flags",
          Me = "$early_access_features",
          Le = "$stored_person_properties",
          $e = "$stored_group_properties",
          Ne = "$surveys",
          De = "$flag_call_reported",
          Fe = "$user_state",
          Ue = "$posthog_quota_limited",
          Be = "$client_session_props",
          He = [ke, Oe, "__cmpns", Ee, Te, je, Ae, Fe, Ue, Me, $e, Le, Ne, De, Be];
        function qe(e, t) {
          return t.length > e ? t.slice(0, e) + "..." : t;
        }
        var Ve = {
          _initializedTokens: [],
          _isDisabledServerSide: null,
          _isAutocaptureEnabled: !1,
          _setIsAutocaptureEnabled: function (e) {
            var t,
              n = R(this._isDisabledServerSide)
                ? !(null === (t = e.persistence) || void 0 === t || !t.props[Ce])
                : this._isDisabledServerSide,
              r = !!e.config.autocapture;
            this._isAutocaptureEnabled = r && !n;
          },
          _previousElementSibling: function (e) {
            if (e.previousElementSibling) return e.previousElementSibling;
            var t = e;
            do {
              t = t.previousSibling;
            } while (t && !le(t));
            return t;
          },
          _getAugmentPropertiesFromElement: function (e) {
            if (!he(e)) return {};
            var t = {};
            return (
              Z(e.attributes, function (e) {
                if (0 === e.name.indexOf("data-ph-capture-attribute")) {
                  var n = e.name.replace("data-ph-capture-attribute-", ""),
                    r = e.value;
                  n && r && ve(r) && (t[n] = r);
                }
              }),
              t
            );
          },
          _getPropertiesFromElement: function (e, t, n) {
            var r,
              o = e.tagName.toLowerCase(),
              i = { tag_name: o };
            pe.indexOf(o) > -1 &&
              !n &&
              ("a" === o.toLowerCase() || "button" === o.toLowerCase() ? (i.$el_text = qe(1024, me(e))) : (i.$el_text = qe(1024, ce(e))));
            var s = ae(e);
            s.length > 0 &&
              (i.classes = s.split(" ").filter(function (e) {
                return "" !== e;
              }));
            var a = null === (r = this.config) || void 0 === r ? void 0 : r.element_attribute_ignorelist;
            Z(e.attributes, function (n) {
              var r;
              (ge(e) && -1 === ["name", "id", "class"].indexOf(n.name)) ||
                (null != a && a.includes(n.name)) ||
                (!t &&
                  ve(n.value) &&
                  ((r = n.name), !j(r) || ("_ngcontent" !== r.substring(0, 10) && "_nghost" !== r.substring(0, 7))) &&
                  (i["attr__" + n.name] = qe(1024, n.value)));
            });
            for (var c = 1, l = 1, u = e; (u = this._previousElementSibling(u)); ) c++, u.tagName === e.tagName && l++;
            return (i.nth_child = c), (i.nth_of_type = l), i;
          },
          _getDefaultProperties: function (e) {
            return { $event_type: e, $ce_version: 1 };
          },
          _extractCustomPropertyValue: function (e) {
            var t = [];
            return (
              Z(null == U ? void 0 : U.querySelectorAll(e.css_selector), function (e) {
                var n;
                ["input", "select"].indexOf(e.tagName.toLowerCase()) > -1 ? (n = e.value) : e.textContent && (n = e.textContent),
                  ve(n) && t.push(n);
              }),
              t.join(", ")
            );
          },
          _getCustomProperties: function (e) {
            var t = this,
              n = {};
            return (
              Z(this._customProperties, function (r) {
                Z(r.event_selectors, function (o) {
                  Z(null == U ? void 0 : U.querySelectorAll(o), function (o) {
                    Y(e, o) && he(o) && (n[r.name] = t._extractCustomPropertyValue(r));
                  });
                });
              }),
              n
            );
          },
          _getEventTarget: function (e) {
            return P(e.target)
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
              (de(i) && (i = i.parentNode || null),
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
                  if (!D || !e || ue(e, "html") || !le(e)) return !1;
                  if (null != n && n.url_allowlist) {
                    var r = D.location.href,
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
                  for (var c = !1, l = [e], u = !0, d = e; d.parentNode && !ue(d, "body"); )
                    if (fe(d.parentNode)) l.push(d.parentNode.host), (d = d.parentNode.host);
                    else {
                      if (!(u = d.parentNode || !1)) break;
                      if (pe.indexOf(u.tagName.toLowerCase()) > -1) c = !0;
                      else {
                        var f = D.getComputedStyle(u);
                        f && "pointer" === f.getPropertyValue("cursor") && (c = !0);
                      }
                      l.push(u), (d = u);
                    }
                  var p = D.getComputedStyle(e);
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
                        : "click" === t.type && (pe.indexOf(h) > -1 || "true" === e.getAttribute("contenteditable"));
                  }
                })(i, e, this.config))
            ) {
              for (var s, a, c = [i], l = i; l.parentNode && !ue(l, "body"); )
                fe(l.parentNode) ? (c.push(l.parentNode.host), (l = l.parentNode.host)) : (c.push(l.parentNode), (l = l.parentNode));
              var u,
                d = [],
                f = {},
                p = !1;
              if (
                (Z(c, function (e) {
                  var n = he(e);
                  "a" === e.tagName.toLowerCase() && ((u = e.getAttribute("href")), (u = n && ve(u) && u)),
                    Y(ae(e).split(" "), "ph-no-capture") && (p = !0),
                    d.push(r._getPropertiesFromElement(e, t.config.mask_all_element_attributes, t.config.mask_all_text));
                  var o = r._getAugmentPropertiesFromElement(e);
                  J(f, o);
                }),
                t.config.mask_all_text ||
                  ("a" === i.tagName.toLowerCase() || "button" === i.tagName.toLowerCase()
                    ? (d[0].$el_text = me(i))
                    : (d[0].$el_text = ce(i))),
                u && (d[0].attr__href = u),
                p)
              )
                return !1;
              var h = J(
                this._getDefaultProperties(e.type),
                t.elementsChainAsString ? { $elements_chain: ye(d) } : { $elements: d },
                null !== (s = d[0]) && void 0 !== s && s.$el_text
                  ? { $el_text: null === (a = d[0]) || void 0 === a ? void 0 : a.$el_text }
                  : {},
                this._getCustomProperties(c),
                f
              );
              return t.capture(o, h), !0;
            }
          },
          _navigate: function (e) {
            D && (D.location.href = e);
          },
          _addDomEventHandlers: function (e) {
            var t = this;
            if (D && U) {
              var n = function (n) {
                (n = n || (null == D ? void 0 : D.event)), t._captureEvent(n, e);
              };
              ie(U, "submit", n, !1, !0), ie(U, "change", n, !1, !0), ie(U, "click", n, !1, !0);
            }
          },
          _customProperties: [],
          rageclicks: null,
          config: void 0,
          init: function (e) {
            var t;
            M(e.__autocapture) || (this.config = e.__autocapture),
              null !== (t = this.config) &&
                void 0 !== t &&
                t.url_allowlist &&
                (this.config.url_allowlist = this.config.url_allowlist.map(function (e) {
                  return new RegExp(e);
                })),
              (this.rageclicks = new Se(e.config.rageclick));
          },
          afterDecideResponse: function (e, t) {
            var n = t.config.token;
            this._initializedTokens.indexOf(n) > -1
              ? V.info('autocapture already initialized for token "' + n + '"')
              : (t.persistence && t.persistence.register(u({}, Ce, !!e.autocapture_opt_out)),
                (this._isDisabledServerSide = !!e.autocapture_opt_out),
                this._setIsAutocaptureEnabled(t),
                this._initializedTokens.push(n),
                e && e.config && e.config.enable_collect_everything && this._isAutocaptureEnabled
                  ? (e.custom_properties && (this._customProperties = e.custom_properties), this._addDomEventHandlers(t))
                  : (t.__autocapture = !1));
          },
          enabledForProject: function (e, t, n) {
            if (!e) return !0;
            (t = P(t) ? 10 : t), (n = P(n) ? 10 : n);
            for (var r = 0, o = 0; o < e.length; o++) r += e.charCodeAt(o);
            return r % t < n;
          },
          isBrowserSupported: function () {
            return x(null == U ? void 0 : U.querySelectorAll);
          }
        };
        !(function (e) {
          for (var t in e) x(e[t]) && (e[t] = e[t].bind(e));
        })(Ve),
          (function (e) {
            for (var t in e) x(e[t]) && (e[t] = ee(e[t]));
          })(Ve);
        var ze = "$active_feature_flags",
          We = "$override_feature_flags",
          Ge = "$feature_flag_payloads",
          Ze = function (e) {
            var t,
              n = {},
              r = b(Q(e || {}));
            try {
              for (r.s(); !(t = r.n()).done; ) {
                var o = g(t.value, 2),
                  i = o[0],
                  s = o[1];
                s && (n[i] = s);
              }
            } catch (e) {
              r.e(e);
            } finally {
              r.f();
            }
            return n;
          },
          Je = (function () {
            function e(t) {
              a(this, e),
                (this.instance = t),
                (this._override_warning = !1),
                (this.featureFlagEventHandlers = []),
                (this.reloadFeatureFlagsQueued = !1),
                (this.reloadFeatureFlagsInAction = !1);
            }
            return (
              l(e, [
                {
                  key: "getFlags",
                  value: function () {
                    return Object.keys(this.getFlagVariants());
                  }
                },
                {
                  key: "getFlagVariants",
                  value: function () {
                    var e = this.instance.get_property(Ae),
                      t = this.instance.get_property(We);
                    if (!t) return e || {};
                    for (var n = J({}, e), r = Object.keys(t), o = 0; o < r.length; o++)
                      !1 === t[r[o]] ? delete n[r[o]] : (n[r[o]] = t[r[o]]);
                    return (
                      this._override_warning ||
                        (V.warn(" Overriding feature flags!", { enabledFlags: e, overriddenFlags: t, finalFlags: n }),
                        (this._override_warning = !0)),
                      n
                    );
                  }
                },
                {
                  key: "getFlagPayloads",
                  value: function () {
                    return this.instance.get_property(Ge) || {};
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
                    if (!this.instance.config.advanced_disable_feature_flags) {
                      this.setReloadingPaused(!0);
                      var t = this.instance.config.token,
                        n = this.instance.get_property(Le),
                        r = this.instance.get_property($e),
                        o = re(
                          JSON.stringify({
                            token: t,
                            distinct_id: this.instance.get_distinct_id(),
                            groups: this.instance.getGroups(),
                            $anon_distinct_id: this.$anon_distinct_id,
                            person_properties: n,
                            group_properties: r,
                            disable_flags: this.instance.config.advanced_disable_feature_flags || void 0
                          })
                        );
                      this.instance._send_request(
                        this.instance.config.api_host + "/decide/?v=3",
                        { data: o },
                        { method: "POST" },
                        this.instance._prepare_callback(function (t) {
                          (e.$anon_distinct_id = void 0), e.receivedFeatureFlags(t), e.setReloadingPaused(!1), e._startReloadTimer();
                        })
                      );
                    }
                  }
                },
                {
                  key: "getFeatureFlag",
                  value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (this.instance.decideEndpointWasHit || (this.getFlags() && this.getFlags().length > 0)) {
                      var n,
                        r = this.getFlagVariants()[e],
                        o = "".concat(r),
                        i = this.instance.get_property(De) || {};
                      return (
                        (!t.send_event && "send_event" in t) ||
                          (e in i && i[e].includes(o)) ||
                          (C(i[e]) ? i[e].push(o) : (i[e] = [o]),
                          null === (n = this.instance.persistence) || void 0 === n || n.register(u({}, De, i)),
                          this.instance.capture("$feature_flag_called", { $feature_flag: e, $feature_flag_response: r })),
                        r
                      );
                    }
                    V.warn('getFeatureFlag for key "' + e + "\" failed. Feature flags didn't load in time.");
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
                    if (this.instance.decideEndpointWasHit || (this.getFlags() && this.getFlags().length > 0))
                      return !!this.getFeatureFlag(e, t);
                    V.warn('isFeatureEnabled for key "' + e + "\" failed. Feature flags didn't load in time.");
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
                    if (this.instance.persistence) {
                      this.instance.decideEndpointWasHit = !0;
                      var t = this.getFlagVariants(),
                        n = this.getFlagPayloads();
                      !(function (e, t) {
                        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                          r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                          o = e.featureFlags,
                          s = e.featureFlagPayloads;
                        if (o)
                          if (C(o)) {
                            var a,
                              c = {};
                            if (o) for (var l = 0; l < o.length; l++) c[o[l]] = !0;
                            t && t.register((u((a = {}), ze, o), u(a, Ae, c), a));
                          } else {
                            var d,
                              f = o,
                              p = s;
                            e.errorsWhileComputingFlags && ((f = i(i({}, n), f)), (p = i(i({}, r), p))),
                              t && t.register((u((d = {}), ze, Object.keys(Ze(f))), u(d, Ae, f || {}), u(d, Ge, p || {}), d));
                          }
                      })(e, this.instance.persistence, t, n),
                        this._fireFeatureFlagsCallbacks();
                    }
                  }
                },
                {
                  key: "override",
                  value: function (e) {
                    if (!this.instance.__loaded || !this.instance.persistence)
                      return V.uninitializedWarning("posthog.feature_flags.override");
                    if (((this._override_warning = !1), !1 === e)) this.instance.persistence.unregister(We);
                    else if (C(e)) {
                      for (var t = {}, n = 0; n < e.length; n++) t[e[n]] = !0;
                      this.instance.persistence.register(u({}, We, t));
                    } else this.instance.persistence.register(u({}, We, e));
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
                  key: "updateEarlyAccessFeatureEnrollment",
                  value: function (e, t) {
                    var n,
                      r,
                      o = u({}, "$feature_enrollment/".concat(e), t);
                    this.instance.capture("$feature_enrollment_update", { $feature_flag: e, $feature_enrollment: t, $set: o }),
                      this.setPersonPropertiesForFlags(o, !1);
                    var s = i(i({}, this.getFlagVariants()), {}, u({}, e, t));
                    null === (n = this.instance.persistence) ||
                      void 0 === n ||
                      n.register((u((r = {}), ze, Object.keys(Ze(s))), u(r, Ae, s), r)),
                      this._fireFeatureFlagsCallbacks();
                  }
                },
                {
                  key: "getEarlyAccessFeatures",
                  value: function (e) {
                    var t = this,
                      n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                      r = this.instance.get_property(Me);
                    if (r && !n) return e(r);
                    this.instance._send_request(
                      "".concat(this.instance.config.api_host, "/api/early_access_features/?token=").concat(this.instance.config.token),
                      {},
                      { method: "GET" },
                      function (n) {
                        var r,
                          o = n.earlyAccessFeatures;
                        return null === (r = t.instance.persistence) || void 0 === r || r.register(u({}, Me, o)), e(o);
                      }
                    );
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
                },
                {
                  key: "_fireFeatureFlagsCallbacks",
                  value: function () {
                    var e = this._prepareFeatureFlagsForCallbacks(),
                      t = e.flags,
                      n = e.flagVariants;
                    this.featureFlagEventHandlers.forEach(function (e) {
                      return e(t, n);
                    });
                  }
                },
                {
                  key: "setPersonPropertiesForFlags",
                  value: function (e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                      n = this.instance.get_property(Le) || {};
                    this.instance.register(u({}, Le, i(i({}, n), e))), t && this.instance.reloadFeatureFlags();
                  }
                },
                {
                  key: "resetPersonPropertiesForFlags",
                  value: function () {
                    this.instance.unregister(Le);
                  }
                },
                {
                  key: "setGroupPropertiesForFlags",
                  value: function (e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                      n = this.instance.get_property($e) || {};
                    0 !== Object.keys(n).length &&
                      Object.keys(n).forEach(function (t) {
                        (n[t] = i(i({}, n[t]), e[t])), delete e[t];
                      }),
                      this.instance.register(u({}, $e, i(i({}, n), e))),
                      t && this.instance.reloadFeatureFlags();
                  }
                },
                {
                  key: "resetGroupPropertiesForFlags",
                  value: function (e) {
                    if (e) {
                      var t = this.instance.get_property($e) || {};
                      this.instance.register(u({}, $e, i(i({}, t), {}, u({}, e, {}))));
                    } else this.instance.unregister($e);
                  }
                }
              ]),
              e
            );
          })();
        Math.trunc ||
          (Math.trunc = function (e) {
            return e < 0 ? Math.ceil(e) : Math.floor(e);
          }),
          Number.isInteger ||
            (Number.isInteger = function (e) {
              return A(e) && isFinite(e) && Math.floor(e) === e;
            });
        var Ye = "0123456789abcdef",
          Qe = (function () {
            function e(t) {
              if ((a(this, e), (this.bytes = t), 16 !== t.length)) throw new TypeError("not 128-bit length");
            }
            return (
              l(
                e,
                [
                  {
                    key: "toString",
                    value: function () {
                      for (var e = "", t = 0; t < this.bytes.length; t++)
                        (e = e + Ye.charAt(this.bytes[t] >>> 4) + Ye.charAt(15 & this.bytes[t])),
                          (3 !== t && 5 !== t && 7 !== t && 9 !== t) || (e += "-");
                      if (36 !== e.length) throw new Error("Invalid UUIDv7 was generated");
                      return e;
                    }
                  },
                  {
                    key: "clone",
                    value: function () {
                      return new e(this.bytes.slice(0));
                    }
                  },
                  {
                    key: "equals",
                    value: function (e) {
                      return 0 === this.compareTo(e);
                    }
                  },
                  {
                    key: "compareTo",
                    value: function (e) {
                      for (var t = 0; t < 16; t++) {
                        var n = this.bytes[t] - e.bytes[t];
                        if (0 !== n) return Math.sign(n);
                      }
                      return 0;
                    }
                  }
                ],
                [
                  {
                    key: "fromFieldsV7",
                    value: function (t, n, r, o) {
                      if (
                        !Number.isInteger(t) ||
                        !Number.isInteger(n) ||
                        !Number.isInteger(r) ||
                        !Number.isInteger(o) ||
                        t < 0 ||
                        n < 0 ||
                        r < 0 ||
                        o < 0 ||
                        t > 0xffffffffffff ||
                        n > 4095 ||
                        r > 1073741823 ||
                        o > 4294967295
                      )
                        throw new RangeError("invalid field value");
                      var i = new Uint8Array(16);
                      return (
                        (i[0] = t / Math.pow(2, 40)),
                        (i[1] = t / Math.pow(2, 32)),
                        (i[2] = t / Math.pow(2, 24)),
                        (i[3] = t / Math.pow(2, 16)),
                        (i[4] = t / Math.pow(2, 8)),
                        (i[5] = t),
                        (i[6] = 112 | (n >>> 8)),
                        (i[7] = n),
                        (i[8] = 128 | (r >>> 24)),
                        (i[9] = r >>> 16),
                        (i[10] = r >>> 8),
                        (i[11] = r),
                        (i[12] = o >>> 24),
                        (i[13] = o >>> 16),
                        (i[14] = o >>> 8),
                        (i[15] = o),
                        new e(i)
                      );
                    }
                  }
                ]
              ),
              e
            );
          })(),
          Xe = (function () {
            function e() {
              a(this, e), u(this, "timestamp", 0), u(this, "counter", 0), u(this, "random", new tt());
            }
            return (
              l(e, [
                {
                  key: "generate",
                  value: function () {
                    var e = this.generateOrAbort();
                    if (P(e)) {
                      this.timestamp = 0;
                      var t = this.generateOrAbort();
                      if (P(t)) throw new Error("Could not generate UUID after timestamp reset");
                      return t;
                    }
                    return e;
                  }
                },
                {
                  key: "generateOrAbort",
                  value: function () {
                    var e = Date.now();
                    if (e > this.timestamp) (this.timestamp = e), this.resetCounter();
                    else {
                      if (!(e + 1e4 > this.timestamp)) return;
                      this.counter++, this.counter > 4398046511103 && (this.timestamp++, this.resetCounter());
                    }
                    return Qe.fromFieldsV7(
                      this.timestamp,
                      Math.trunc(this.counter / Math.pow(2, 30)),
                      this.counter & (Math.pow(2, 30) - 1),
                      this.random.nextUint32()
                    );
                  }
                },
                {
                  key: "resetCounter",
                  value: function () {
                    this.counter = 1024 * this.random.nextUint32() + (1023 & this.random.nextUint32());
                  }
                }
              ]),
              e
            );
          })(),
          Ke = function (e) {
            if ("undefined" != typeof UUIDV7_DENY_WEAK_RNG && UUIDV7_DENY_WEAK_RNG)
              throw new Error("no cryptographically strong RNG available");
            for (var t = 0; t < e.length; t++) e[t] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random());
            return e;
          };
        D &&
          !P(D.crypto) &&
          crypto.getRandomValues &&
          (Ke = function (e) {
            return crypto.getRandomValues(e);
          });
        var et,
          tt = (function () {
            function e() {
              a(this, e), u(this, "buffer", new Uint32Array(8)), u(this, "cursor", 1 / 0);
            }
            return (
              l(e, [
                {
                  key: "nextUint32",
                  value: function () {
                    return this.cursor >= this.buffer.length && (Ke(this.buffer), (this.cursor = 0)), this.buffer[this.cursor++];
                  }
                }
              ]),
              e
            );
          })(),
          nt = function () {
            return rt().toString();
          },
          rt = function () {
            return (et || (et = new Xe())).generate();
          },
          ot = /[a-z0-9][a-z0-9-]+\.[a-z]{2,}$/i;
        var it = {
            is_supported: function () {
              return !!U;
            },
            error: function (e) {
              V.error("cookieStore error: " + e);
            },
            get: function (e) {
              if (U) {
                try {
                  for (
                    var t = e + "=",
                      n = U.cookie.split(";").filter(function (e) {
                        return e.length;
                      }),
                      r = 0;
                    r < n.length;
                    r++
                  ) {
                    for (var o = n[r]; " " == o.charAt(0); ) o = o.substring(1, o.length);
                    if (0 === o.indexOf(t)) return decodeURIComponent(o.substring(t.length, o.length));
                  }
                } catch (e) {}
                return null;
              }
            },
            parse: function (e) {
              var t;
              try {
                t = JSON.parse(it.get(e)) || {};
              } catch (e) {}
              return t;
            },
            set: function (e, t, n, r, o) {
              if (U)
                try {
                  var i = "",
                    s = "",
                    a = (function (e, t) {
                      if (t) {
                        var n = (function (e) {
                          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U;
                          if (!t) return "";
                          if (["localhost", "127.0.0.1"].includes(e)) return "";
                          for (var n = e.split("."), r = n.length, o = "dmn_chk_" + nt(), i = new RegExp("(^|;)\\s*" + o + "=1"); r--; ) {
                            var s = n.slice(r).join("."),
                              a = o + "=1;domain=." + s;
                            if (((t.cookie = a), i.test(t.cookie))) return (t.cookie = a + ";expires=Thu, 01 Jan 1970 00:00:00 GMT"), s;
                          }
                          return "";
                        })(e);
                        if (!n) {
                          var r = (function (e) {
                            var t = e.match(ot);
                            return t ? t[0] : "";
                          })(e);
                          r !== n && V.info("Warning: cookie subdomain discovery mismatch", r, n), (n = r);
                        }
                        return n ? "; domain=." + n : "";
                      }
                      return "";
                    })(U.location.hostname, r);
                  if (n) {
                    var c = new Date();
                    c.setTime(c.getTime() + 24 * n * 60 * 60 * 1e3), (i = "; expires=" + c.toUTCString());
                  }
                  o && (s = "; secure");
                  var l = e + "=" + encodeURIComponent(JSON.stringify(t)) + i + "; SameSite=Lax; path=/" + a + s;
                  return (U.cookie = l), l;
                } catch (e) {
                  return;
                }
            },
            remove: function (e, t) {
              try {
                it.set(e, "", -1, t);
              } catch (e) {
                return;
              }
            }
          },
          st = null,
          at = {
            is_supported: function () {
              if (!R(st)) return st;
              var e = !0;
              if (P(D)) e = !1;
              else
                try {
                  var t = "__mplssupport__";
                  at.set(t, "xyz"), '"xyz"' !== at.get(t) && (e = !1), at.remove(t);
                } catch (t) {
                  e = !1;
                }
              return e || V.error("localStorage unsupported; falling back to cookie store"), (st = e), e;
            },
            error: function (e) {
              V.error("localStorage error: " + e);
            },
            get: function (e) {
              try {
                return null == D ? void 0 : D.localStorage.getItem(e);
              } catch (e) {
                at.error(e);
              }
              return null;
            },
            parse: function (e) {
              try {
                return JSON.parse(at.get(e)) || {};
              } catch (e) {}
              return null;
            },
            set: function (e, t) {
              try {
                null == D || D.localStorage.setItem(e, JSON.stringify(t));
              } catch (e) {
                at.error(e);
              }
            },
            remove: function (e) {
              try {
                null == D || D.localStorage.removeItem(e);
              } catch (e) {
                at.error(e);
              }
            }
          },
          ct = ["distinct_id", je, Re],
          lt = i(
            i({}, at),
            {},
            {
              parse: function (e) {
                try {
                  var t = {};
                  try {
                    t = it.parse(e) || {};
                  } catch (e) {}
                  var n = J(t, JSON.parse(at.get(e) || "{}"));
                  return at.set(e, n), n;
                } catch (e) {}
                return null;
              },
              set: function (e, t, n, r, o) {
                try {
                  at.set(e, t);
                  var i = {};
                  ct.forEach(function (e) {
                    t[e] && (i[e] = t[e]);
                  }),
                    Object.keys(i).length && it.set(e, i, n, r, o);
                } catch (e) {
                  at.error(e);
                }
              },
              remove: function (e, t) {
                try {
                  null == D || D.localStorage.removeItem(e), it.remove(e, t);
                } catch (e) {
                  at.error(e);
                }
              }
            }
          ),
          ut = {},
          dt = {
            is_supported: function () {
              return !0;
            },
            error: function (e) {
              V.error("memoryStorage error: " + e);
            },
            get: function (e) {
              return ut[e] || null;
            },
            parse: function (e) {
              return ut[e] || null;
            },
            set: function (e, t) {
              ut[e] = t;
            },
            remove: function (e) {
              delete ut[e];
            }
          },
          ft = null,
          pt = {
            is_supported: function () {
              if (!R(ft)) return ft;
              if (((ft = !0), P(D))) ft = !1;
              else
                try {
                  var e = "__support__";
                  pt.set(e, "xyz"), '"xyz"' !== pt.get(e) && (ft = !1), pt.remove(e);
                } catch (e) {
                  ft = !1;
                }
              return ft;
            },
            error: function (e) {
              V.error("sessionStorage error: ", e);
            },
            get: function (e) {
              try {
                return null == D ? void 0 : D.sessionStorage.getItem(e);
              } catch (e) {
                pt.error(e);
              }
              return null;
            },
            parse: function (e) {
              try {
                return JSON.parse(pt.get(e)) || null;
              } catch (e) {}
              return null;
            },
            set: function (e, t) {
              try {
                null == D || D.sessionStorage.setItem(e, JSON.stringify(t));
              } catch (e) {
                pt.error(e);
              }
            },
            remove: function (e) {
              try {
                null == D || D.sessionStorage.removeItem(e);
              } catch (e) {
                pt.error(e);
              }
            }
          },
          ht = ["localhost", "127.0.0.1"],
          gt = function (e) {
            var t = null == U ? void 0 : U.createElement("a");
            return P(t) ? null : ((t.href = e), t);
          },
          vt = function (e, t) {
            for (var n, r = ((e.split("#")[0] || "").split("?")[1] || "").split("&"), o = 0; o < r.length; o++) {
              var i = r[o].split("=");
              if (i[0] === t) {
                n = i;
                break;
              }
            }
            if (!C(n) || n.length < 2) return "";
            var s = n[1];
            try {
              s = decodeURIComponent(s);
            } catch (e) {
              V.error("Skipping decoding for malformed query param: " + s);
            }
            return s.replace(/\+/g, " ");
          },
          mt = function (e, t) {
            var n = e.match(new RegExp(t + "=([^&]*)"));
            return n ? n[1] : null;
          },
          _t = {
            campaignParams: function (e) {
              var t = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "gclid", "fbclid", "msclkid"].concat(e || []),
                n = {};
              return (
                Z(t, function (e) {
                  var t = U ? vt(U.URL, e) : "";
                  t.length && (n[e] = t);
                }),
                n
              );
            },
            searchEngine: function () {
              var e = null == U ? void 0 : U.referrer;
              return e
                ? 0 === e.search("https?://(.*)google.([^/?]*)")
                  ? "google"
                  : 0 === e.search("https?://(.*)bing.com")
                  ? "bing"
                  : 0 === e.search("https?://(.*)yahoo.com")
                  ? "yahoo"
                  : 0 === e.search("https?://(.*)duckduckgo.com")
                  ? "duckduckgo"
                  : null
                : null;
            },
            searchInfo: function () {
              var e = _t.searchEngine(),
                t = "yahoo" != e ? "q" : "p",
                n = {};
              if (!R(e)) {
                n.$search_engine = e;
                var r = U ? vt(U.referrer, t) : "";
                r.length && (n.ph_keyword = r);
              }
              return n;
            },
            browser: function (e, t, n) {
              return (
                (t = t || ""),
                n || Y(e, " OPR/")
                  ? Y(e, "Mini")
                    ? "Opera Mini"
                    : "Opera"
                  : /(BlackBerry|PlayBook|BB10)/i.test(e)
                  ? "BlackBerry"
                  : Y(e, "IEMobile") || Y(e, "WPDesktop")
                  ? "Internet Explorer Mobile"
                  : Y(e, "SamsungBrowser/")
                  ? "Samsung Internet"
                  : Y(e, "Edge") || Y(e, "Edg/")
                  ? "Microsoft Edge"
                  : Y(e, "FBIOS")
                  ? "Facebook Mobile"
                  : Y(e, "Chrome")
                  ? "Chrome"
                  : Y(e, "CriOS")
                  ? "Chrome iOS"
                  : Y(e, "UCWEB") || Y(e, "UCBrowser")
                  ? "UC Browser"
                  : Y(e, "FxiOS")
                  ? "Firefox iOS"
                  : Y(t, "Apple") ||
                    (function (e) {
                      return Y(e, "Safari") && !Y(e, "Chrome") && !Y(e, "Android");
                    })(e)
                  ? Y(e, "Mobile")
                    ? "Mobile Safari"
                    : "Safari"
                  : Y(e, "Android")
                  ? "Android Mobile"
                  : Y(e, "Konqueror") || Y(e, "konqueror")
                  ? "Konqueror"
                  : Y(e, "Firefox")
                  ? "Firefox"
                  : Y(e, "MSIE") || Y(e, "Trident/")
                  ? "Internet Explorer"
                  : Y(e, "Gecko")
                  ? "Mozilla"
                  : ""
              );
            },
            browserVersion: function (e, t, n) {
              var r = {
                "Internet Explorer Mobile": [/rv:(\d+(\.\d+)?)/],
                "Microsoft Edge": [/Edge?\/(\d+(\.\d+)?)/],
                Chrome: [/Chrome\/(\d+(\.\d+)?)/],
                "Chrome iOS": [/CriOS\/(\d+(\.\d+)?)/],
                "UC Browser": [/(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/],
                Safari: [/Version\/(\d+(\.\d+)?)/],
                "Mobile Safari": [/Version\/(\d+(\.\d+)?)/],
                Opera: [/(Opera|OPR)\/(\d+(\.\d+)?)/],
                Firefox: [/Firefox\/(\d+(\.\d+)?)/],
                "Firefox iOS": [/FxiOS\/(\d+(\.\d+)?)/],
                Konqueror: [/Konqueror[:/]?(\d+(\.\d+)?)/i],
                BlackBerry: [/BlackBerry (\d+(\.\d+)?)/, /Version\/(\d+(\.\d+)?)/],
                "Android Mobile": [/android\s(\d+(\.\d+)?)/],
                "Samsung Internet": [/SamsungBrowser\/(\d+(\.\d+)?)/],
                "Internet Explorer": [/(rv:|MSIE )(\d+(\.\d+)?)/],
                Mozilla: [/rv:(\d+(\.\d+)?)/]
              }[_t.browser(e, t, n)];
              if (P(r)) return null;
              for (var o = 0; o < r.length; o++) {
                var i = r[o],
                  s = e.match(i);
                if (s) return parseFloat(s[s.length - 2]);
              }
              return null;
            },
            browserLanguage: function () {
              return navigator.language || navigator.userLanguage;
            },
            os: function (e) {
              if (/Windows/i.test(e)) {
                if (/Phone/.test(e) || /WPDesktop/.test(e)) return { os_name: "Windows Phone", os_version: "" };
                var t = /Windows NT ([0-9.]+)/i.exec(e);
                return t && t[1] ? { os_name: "Windows", os_version: t[1] } : { os_name: "Windows", os_version: "" };
              }
              if (/(iPhone|iPad|iPod)/.test(e)) {
                var n = /OS (\d+)_(\d+)_?(\d+)?/i.exec(e);
                return n && n[1] ? { os_name: "iOS", os_version: [n[1], n[2], n[3] || "0"].join(".") } : { os_name: "iOS", os_version: "" };
              }
              if (/Android/.test(e)) {
                var r = /Android (\d+)\.(\d+)\.?(\d+)?/i.exec(e);
                return r && r[1]
                  ? { os_name: "Android", os_version: [r[1], r[2], r[3] || "0"].join(".") }
                  : { os_name: "Android", os_version: "" };
              }
              if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return { os_name: "BlackBerry", os_version: "" };
              if (/Mac/i.test(e)) {
                var o = /Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i.exec(e);
                return o && o[1]
                  ? { os_name: "Mac OS X", os_version: [o[1], o[2], o[3] || "0"].join(".") }
                  : { os_name: "Mac OS X", os_version: "" };
              }
              return /Linux/.test(e)
                ? { os_name: "Linux", os_version: "" }
                : /CrOS/.test(e)
                ? { os_name: "Chrome OS", os_version: "" }
                : { os_name: "", os_version: "" };
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
            referrer: function () {
              return (null == U ? void 0 : U.referrer) || "$direct";
            },
            referringDomain: function () {
              var e;
              return (null != U && U.referrer && (null === (e = gt(U.referrer)) || void 0 === e ? void 0 : e.host)) || "$direct";
            },
            properties: function () {
              if (!B) return {};
              var e = _t.os(B),
                t = e.os_name,
                n = e.os_version;
              return J(
                te({
                  $os: t,
                  $os_version: n,
                  $browser: _t.browser(B, navigator.vendor, H.opera),
                  $device: _t.device(B),
                  $device_type: _t.deviceType(B)
                }),
                {
                  $current_url: null == D ? void 0 : D.location.href,
                  $host: null == D ? void 0 : D.location.host,
                  $pathname: null == D ? void 0 : D.location.pathname,
                  $raw_user_agent: B.length > 1e3 ? B.substring(0, 997) + "..." : B,
                  $browser_version: _t.browserVersion(B, navigator.vendor, H.opera),
                  $browser_language: _t.browserLanguage(),
                  $screen_height: null == D ? void 0 : D.screen.height,
                  $screen_width: null == D ? void 0 : D.screen.width,
                  $viewport_height: null == D ? void 0 : D.innerHeight,
                  $viewport_width: null == D ? void 0 : D.innerWidth,
                  $lib: "web",
                  $lib_version: w.LIB_VERSION,
                  $insert_id: Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10),
                  $time: X() / 1e3
                }
              );
            },
            people_properties: function () {
              if (!B) return {};
              var e = _t.os(B),
                t = e.os_name,
                n = e.os_version;
              return J(te({ $os: t, $os_version: n, $browser: _t.browser(B, navigator.vendor, H.opera) }), {
                $browser_version: _t.browserVersion(B, navigator.vendor, H.opera)
              });
            }
          },
          yt = ["cookie", "localstorage", "localstorage+cookie", "sessionstorage", "memory"],
          bt = (function () {
            function e(t) {
              a(this, e);
              var n = "";
              t.token && (n = t.token.replace(/\+/g, "PL").replace(/\//g, "SL").replace(/=/g, "EQ")),
                (this.props = {}),
                (this.campaign_params_saved = !1),
                (this.custom_campaign_params = t.custom_campaign_params || []),
                t.persistence_name ? (this.name = "ph_" + t.persistence_name) : (this.name = "ph_" + n + "_posthog"),
                -1 === yt.indexOf(t.persistence.toLowerCase()) &&
                  (V.critical("Unknown persistence type " + t.persistence + "; falling back to cookie"), (t.persistence = "cookie"));
              var r = t.persistence.toLowerCase();
              "localstorage" === r && at.is_supported()
                ? (this.storage = at)
                : "localstorage+cookie" === r && lt.is_supported()
                ? (this.storage = lt)
                : "sessionstorage" === r && pt.is_supported()
                ? (this.storage = pt)
                : (this.storage = "memory" === r ? dt : it),
                (this.user_state = "anonymous"),
                this.load(),
                this.update_config(t),
                this.save();
            }
            return (
              l(e, [
                {
                  key: "properties",
                  value: function () {
                    var e = {};
                    return (
                      Z(this.props, function (t, n) {
                        if (n === Ae && I(t)) for (var r = Object.keys(t), o = 0; o < r.length; o++) e["$feature/".concat(r[o])] = t[r[o]];
                        else
                          (s = n),
                            (a = !1),
                            (R((i = He))
                              ? a
                              : N && i.indexOf === N
                              ? -1 != i.indexOf(s)
                              : (Z(i, function (e) {
                                  if (a || (a = e === s)) return z;
                                }),
                                a)) || (e[n] = t);
                        var i, s, a;
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
                      e && (this.props = J({}, e));
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
                    if (I(e)) {
                      P(t) && (t = "None"), (this.expire_days = P(n) ? this.default_expiry : n);
                      var o = !1;
                      if (
                        (Z(e, function (e, n) {
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
                    if (I(e)) {
                      this.expire_days = P(t) ? this.default_expiry : t;
                      var r = !1;
                      if (
                        (Z(e, function (t, o) {
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
                    this.campaign_params_saved ||
                      (this.register(_t.campaignParams(this.custom_campaign_params)), (this.campaign_params_saved = !0));
                  }
                },
                {
                  key: "update_search_keyword",
                  value: function () {
                    this.register(_t.searchInfo());
                  }
                },
                {
                  key: "update_referrer_info",
                  value: function () {
                    this.register({
                      $referrer: this.props.$referrer || _t.referrer(),
                      $referring_domain: this.props.$referring_domain || _t.referringDomain()
                    });
                  }
                },
                {
                  key: "get_referrer_info",
                  value: function () {
                    return te({ $referrer: this.props.$referrer, $referring_domain: this.props.$referring_domain });
                  }
                },
                {
                  key: "safe_merge",
                  value: function (e) {
                    return (
                      Z(this.props, function (t, n) {
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
                    var n = this.props[Ee] || {};
                    (n[e] = t), (this.props[Ee] = n), this.save();
                  }
                },
                {
                  key: "remove_event_timer",
                  value: function (e) {
                    var t = (this.props[Ee] || {})[e];
                    return P(t) || (delete this.props[Ee][e], this.save()), t;
                  }
                },
                {
                  key: "get_user_state",
                  value: function () {
                    return this.props[Fe] || "anonymous";
                  }
                },
                {
                  key: "set_user_state",
                  value: function (e) {
                    (this.props[Fe] = e), this.save();
                  }
                },
                {
                  key: "get_quota_limits",
                  value: function () {
                    return this.props[Ue] || {};
                  }
                },
                {
                  key: "set_quota_limits",
                  value: function (e) {
                    (this.props[Ue] = e), this.save();
                  }
                }
              ]),
              e
            );
          })(),
          wt = 2,
          St = 4,
          kt = l(function e(t) {
            var n,
              r,
              o = this,
              i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            a(this, e),
              u(this, "bucketSize", 100),
              u(this, "refillRate", 10),
              u(this, "mutationBuckets", {}),
              u(this, "loggedTracker", {}),
              u(this, "refillBuckets", function () {
                Object.keys(o.mutationBuckets).forEach(function (e) {
                  (o.mutationBuckets[e] = o.mutationBuckets[e] + o.refillRate),
                    o.mutationBuckets[e] >= o.bucketSize && delete o.mutationBuckets[e];
                });
              }),
              u(this, "getNodeOrRelevantParent", function (e) {
                var t = o.rrweb.mirror.getNode(e);
                if ("svg" !== (null == t ? void 0 : t.nodeName) && t instanceof Element) {
                  var n = t.closest("svg");
                  if (n) return [o.rrweb.mirror.getId(n), n];
                }
                return [e, t];
              }),
              u(this, "numberOfChanges", function (e) {
                var t, n, r, o, i, s, a, c;
                return (
                  (null !== (t = null === (n = e.removes) || void 0 === n ? void 0 : n.length) && void 0 !== t ? t : 0) +
                  (null !== (r = null === (o = e.attributes) || void 0 === o ? void 0 : o.length) && void 0 !== r ? r : 0) +
                  (null !== (i = null === (s = e.texts) || void 0 === s ? void 0 : s.length) && void 0 !== i ? i : 0) +
                  (null !== (a = null === (c = e.adds) || void 0 === c ? void 0 : c.length) && void 0 !== a ? a : 0)
                );
              }),
              u(this, "throttleMutations", function (e) {
                if (3 !== e.type || 0 !== e.data.source) return e;
                var t = e.data,
                  n = o.numberOfChanges(t);
                t.attributes &&
                  (t.attributes = t.attributes.filter(function (e) {
                    var t,
                      n,
                      r,
                      i = g(o.getNodeOrRelevantParent(e.id), 2),
                      s = i[0],
                      a = i[1];
                    return (
                      0 !== o.mutationBuckets[s] &&
                      ((o.mutationBuckets[s] = null !== (t = o.mutationBuckets[s]) && void 0 !== t ? t : o.bucketSize),
                      (o.mutationBuckets[s] = Math.max(o.mutationBuckets[s] - 1, 0)),
                      0 === o.mutationBuckets[s] &&
                        (o.loggedTracker[s] ||
                          ((o.loggedTracker[s] = !0), null === (n = (r = o.options).onBlockedNode) || void 0 === n || n.call(r, s, a))),
                      e)
                    );
                  }));
                var r = o.numberOfChanges(t);
                return 0 !== r || n === r ? e : void 0;
              }),
              (this.rrweb = t),
              (this.options = i),
              (this.refillRate = null !== (n = this.options.refillRate) && void 0 !== n ? n : this.refillRate),
              (this.bucketSize = null !== (r = this.options.bucketSize) && void 0 !== r ? r : this.bucketSize),
              setInterval(function () {
                o.refillBuckets();
              }, 1e3);
          }),
          Ot = (function (e) {
            return (
              (e[(e.DomContentLoaded = 0)] = "DomContentLoaded"),
              (e[(e.Load = 1)] = "Load"),
              (e[(e.FullSnapshot = 2)] = "FullSnapshot"),
              (e[(e.IncrementalSnapshot = 3)] = "IncrementalSnapshot"),
              (e[(e.Meta = 4)] = "Meta"),
              (e[(e.Custom = 5)] = "Custom"),
              (e[(e.Plugin = 6)] = "Plugin"),
              e
            );
          })(Ot || {}),
          Et = {
            initiatorTypes: [
              "audio",
              "beacon",
              "body",
              "css",
              "early-hint",
              "embed",
              "fetch",
              "frame",
              "iframe",
              "icon",
              "image",
              "img",
              "input",
              "link",
              "navigation",
              "object",
              "ping",
              "script",
              "track",
              "video",
              "xmlhttprequest"
            ],
            maskRequestFn: function (e) {
              return e;
            },
            recordHeaders: !1,
            recordBody: !1,
            recordInitialRequests: !1,
            recordPerformance: !1,
            performanceEntryTypeToObserve: ["first-input", "navigation", "paint", "resource"],
            payloadSizeLimitBytes: 1e6
          },
          Ct = [
            "authorization",
            "x-forwarded-for",
            "authorization",
            "cookie",
            "set-cookie",
            "x-api-key",
            "x-real-ip",
            "remote-addr",
            "forwarded",
            "proxy-authorization",
            "x-csrf-token",
            "x-csrftoken",
            "x-xsrf-token"
          ],
          Tt = ["/s/", "/e/", "/i/vo/e/"];
        function xt(e, t, n, r) {
          var o = null == t ? void 0 : t["content-length"];
          return o && parseInt(o) > n ? "".concat(r, " body too large to record") : e;
        }
        var It,
          Pt = 3e5;
        !(function (e) {
          (e[(e.Mutation = 0)] = "Mutation"),
            (e[(e.MouseMove = 1)] = "MouseMove"),
            (e[(e.MouseInteraction = 2)] = "MouseInteraction"),
            (e[(e.Scroll = 3)] = "Scroll"),
            (e[(e.ViewportResize = 4)] = "ViewportResize"),
            (e[(e.Input = 5)] = "Input"),
            (e[(e.TouchMove = 6)] = "TouchMove"),
            (e[(e.MediaInteraction = 7)] = "MediaInteraction"),
            (e[(e.StyleSheetRule = 8)] = "StyleSheetRule"),
            (e[(e.CanvasMutation = 9)] = "CanvasMutation"),
            (e[(e.Font = 10)] = "Font"),
            (e[(e.Log = 11)] = "Log"),
            (e[(e.Drag = 12)] = "Drag"),
            (e[(e.StyleDeclaration = 13)] = "StyleDeclaration"),
            (e[(e.Selection = 14)] = "Selection"),
            (e[(e.AdoptedStyleSheet = 15)] = "AdoptedStyleSheet");
        })(It || (It = {}));
        var jt = [It.MouseMove, It.MouseInteraction, It.Scroll, It.ViewportResize, It.Input, It.TouchMove, It.MediaInteraction, It.Drag],
          Rt = (function () {
            function e(t) {
              var n = this;
              if (
                (a(this, e),
                u(this, "isIdle", !1),
                u(this, "_linkedFlagSeen", !1),
                u(this, "_lastActivityTimestamp", Date.now()),
                u(this, "windowId", null),
                u(this, "sessionId", null),
                u(this, "_linkedFlag", null),
                u(this, "_sampleRate", null),
                u(this, "_minimumDuration", null),
                u(this, "_forceAllowLocalhostNetworkCapture", !1),
                (this.instance = t),
                (this._captureStarted = !1),
                (this._endpoint = "/s/"),
                (this.stopRrweb = void 0),
                (this.receivedDecide = !1),
                null == D ||
                  D.addEventListener("beforeunload", function () {
                    n._flushBuffer();
                  }),
                !this.instance.sessionManager)
              )
                throw (
                  (V.error("Session recording started without valid sessionManager"),
                  new Error("Session recording started without valid sessionManager. This is a bug."))
                );
              this.buffer = this.clearBuffer();
            }
            return (
              l(e, [
                {
                  key: "started",
                  get: function () {
                    return this._captureStarted;
                  }
                },
                {
                  key: "sessionManager",
                  get: function () {
                    if (!this.instance.sessionManager)
                      throw (
                        (V.error("Session recording started without valid sessionManager"),
                        new Error("Session recording started without valid sessionManager. This is a bug."))
                      );
                    return this.instance.sessionManager;
                  }
                },
                {
                  key: "isSampled",
                  get: function () {
                    return A(this._sampleRate) ? this.instance.get_property(Re) : null;
                  }
                },
                {
                  key: "sessionDuration",
                  get: function () {
                    var e,
                      t,
                      n =
                        null === (e = this.buffer) || void 0 === e
                          ? void 0
                          : e.data[(null === (t = this.buffer) || void 0 === t ? void 0 : t.data.length) - 1],
                      r = this.sessionManager.checkAndGetSessionAndWindowId(!0).sessionStartTimestamp;
                    return n ? n.timestamp - r : null;
                  }
                },
                {
                  key: "isRecordingEnabled",
                  get: function () {
                    var e = !!this.instance.get_property(Te),
                      t = !this.instance.config.disable_session_recording;
                    return D && e && t;
                  }
                },
                {
                  key: "isConsoleLogCaptureEnabled",
                  get: function () {
                    var e = !!this.instance.get_property(xe),
                      t = this.instance.config.enable_recording_console_log;
                    return null != t ? t : e;
                  }
                },
                {
                  key: "recordingVersion",
                  get: function () {
                    var e,
                      t = this.instance.get_property(Ie);
                    return (
                      (null === (e = this.instance.config.session_recording) || void 0 === e ? void 0 : e.recorderVersion) || t || "v1"
                    );
                  }
                },
                {
                  key: "networkPayloadCapture",
                  get: function () {
                    var e,
                      t,
                      n = this.instance.get_property(Pe),
                      r = {
                        recordHeaders: null === (e = this.instance.config.session_recording) || void 0 === e ? void 0 : e.recordHeaders,
                        recordBody: null === (t = this.instance.config.session_recording) || void 0 === t ? void 0 : t.recordBody
                      },
                      o = (null == r ? void 0 : r.recordHeaders) || (null == n ? void 0 : n.recordHeaders),
                      i = (null == r ? void 0 : r.recordBody) || (null == n ? void 0 : n.recordBody),
                      s = this.instance.config.capture_performance || (null == n ? void 0 : n.capturePerformance);
                    return o || i || s ? { recordHeaders: o, recordBody: i, recordPerformance: s } : void 0;
                  }
                },
                {
                  key: "status",
                  get: function () {
                    return this.receivedDecide
                      ? this.isRecordingEnabled
                        ? j(this._linkedFlag) && !this._linkedFlagSeen
                          ? "buffering"
                          : M(this.isSampled)
                          ? this.isSampled
                            ? "sampled"
                            : "disabled"
                          : "active"
                        : "disabled"
                      : "buffering";
                  }
                },
                {
                  key: "startRecordingIfEnabled",
                  value: function () {
                    this.isRecordingEnabled ? this.startCaptureAndTrySendingQueuedSnapshots() : (this.stopRecording(), this.clearBuffer());
                  }
                },
                {
                  key: "stopRecording",
                  value: function () {
                    this._captureStarted && this.stopRrweb && (this.stopRrweb(), (this.stopRrweb = void 0), (this._captureStarted = !1));
                  }
                },
                {
                  key: "makeSamplingDecision",
                  value: function (e) {
                    var t,
                      n = this.sessionId !== e;
                    if (A(this._sampleRate)) {
                      var r,
                        o = this.isSampled;
                      (r = n || !M(o) ? Math.random() < this._sampleRate : o) ||
                        V.warn(
                          "[SessionSampling] Sample rate ("
                            .concat(this._sampleRate, ") has determined that this sessionId (")
                            .concat(e, ") will not be sent to the server.")
                        ),
                        null === (t = this.instance.persistence) || void 0 === t || t.register(u({}, Re, r));
                    } else {
                      var i;
                      null === (i = this.instance.persistence) || void 0 === i || i.register(u({}, Re, null));
                    }
                  }
                },
                {
                  key: "afterDecideResponse",
                  value: function (e) {
                    var t,
                      n,
                      r,
                      o,
                      s,
                      a,
                      c,
                      l,
                      d = this;
                    this.instance.persistence &&
                      this.instance.persistence.register(
                        (u((l = {}), Te, !!e.sessionRecording),
                        u(l, xe, null === (s = e.sessionRecording) || void 0 === s ? void 0 : s.consoleLogRecordingEnabled),
                        u(l, Ie, null === (a = e.sessionRecording) || void 0 === a ? void 0 : a.recorderVersion),
                        u(
                          l,
                          Pe,
                          i(
                            { capturePerformance: e.capturePerformance },
                            null === (c = e.sessionRecording) || void 0 === c ? void 0 : c.networkPayloadCapture
                          )
                        ),
                        l)
                      );
                    var f = null === (t = e.sessionRecording) || void 0 === t ? void 0 : t.sampleRate;
                    this._sampleRate = P(f) || R(f) ? null : parseFloat(f);
                    var p,
                      h = null === (n = e.sessionRecording) || void 0 === n ? void 0 : n.minimumDurationMilliseconds;
                    if (
                      ((this._minimumDuration = P(h) ? null : h),
                      (this._linkedFlag = (null === (r = e.sessionRecording) || void 0 === r ? void 0 : r.linkedFlag) || null),
                      null !== (o = e.sessionRecording) &&
                        void 0 !== o &&
                        o.endpoint &&
                        (this._endpoint = null === (p = e.sessionRecording) || void 0 === p ? void 0 : p.endpoint),
                      A(this._sampleRate) &&
                        this.sessionManager.onSessionId(function (e) {
                          d.makeSamplingDecision(e);
                        }),
                      j(this._linkedFlag))
                    ) {
                      var g = this._linkedFlag;
                      this.instance.onFeatureFlags(function (e) {
                        d._linkedFlagSeen = e.includes(g);
                      });
                    }
                    (this.receivedDecide = !0), this.startRecordingIfEnabled();
                  }
                },
                {
                  key: "log",
                  value: function (e) {
                    var t,
                      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "log";
                    null === (t = this.instance.sessionRecording) ||
                      void 0 === t ||
                      t.onRRwebEmit({
                        type: 6,
                        data: { plugin: "rrweb/console@1", payload: { level: n, trace: [], payload: [JSON.stringify(e)] } },
                        timestamp: X()
                      });
                  }
                },
                {
                  key: "startCaptureAndTrySendingQueuedSnapshots",
                  value: function () {
                    this._startCapture();
                  }
                },
                {
                  key: "_startCapture",
                  value: function () {
                    var e = this;
                    if (!P(Object.assign) && !this._captureStarted && !this.instance.config.disable_session_recording) {
                      (this._captureStarted = !0), this.sessionManager.checkAndGetSessionAndWindowId();
                      var t = "v2" === this.recordingVersion ? "recorder-v2.js" : "recorder.js";
                      this.instance.__loaded_recorder_version !== this.recordingVersion
                        ? se(this.instance.config.api_host + "/static/".concat(t, "?v=").concat(w.LIB_VERSION), function (n) {
                            if (n) return V.error("Could not load ".concat(t), n);
                            e._onScriptLoaded();
                          })
                        : this._onScriptLoaded();
                    }
                  }
                },
                {
                  key: "_isInteractiveEvent",
                  value: function (e) {
                    var t;
                    return 3 === e.type && -1 !== jt.indexOf(null === (t = e.data) || void 0 === t ? void 0 : t.source);
                  }
                },
                {
                  key: "_updateWindowAndSessionIds",
                  value: function (e) {
                    var t = this._isInteractiveEvent(e);
                    if (
                      (t ||
                        this.isIdle ||
                        (e.timestamp - this._lastActivityTimestamp > Pt &&
                          ((this.isIdle = !0),
                          this._tryAddCustomEvent("sessionIdle", {
                            reason: "user inactivity",
                            timeSinceLastActive: e.timestamp - this._lastActivityTimestamp,
                            threshold: Pt
                          }))),
                      t &&
                        ((this._lastActivityTimestamp = e.timestamp),
                        this.isIdle &&
                          ((this.isIdle = !1),
                          this._tryAddCustomEvent("sessionNoLongerIdle", { reason: "user activity", type: e.type }),
                          this._tryTakeFullSnapshot())),
                      !this.isIdle)
                    ) {
                      var n = this.sessionManager.checkAndGetSessionAndWindowId(!t, e.timestamp),
                        r = n.windowId,
                        o = n.sessionId,
                        i = this.sessionId !== o,
                        s = this.windowId !== r;
                      -1 === [wt, St].indexOf(e.type) && (s || i) && this._tryTakeFullSnapshot(), (this.windowId = r), (this.sessionId = o);
                    }
                  }
                },
                {
                  key: "_tryRRwebMethod",
                  value: function (e) {
                    if (!this._captureStarted) return !1;
                    try {
                      return e(), !0;
                    } catch (e) {
                      return V.error("[Session-Recording] using rrweb when not started.", e), !1;
                    }
                  }
                },
                {
                  key: "_tryAddCustomEvent",
                  value: function (e, t) {
                    var n = this;
                    return this._tryRRwebMethod(function () {
                      var r;
                      return null === (r = n.rrwebRecord) || void 0 === r ? void 0 : r.addCustomEvent(e, t);
                    });
                  }
                },
                {
                  key: "_tryTakeFullSnapshot",
                  value: function () {
                    var e = this;
                    return this._tryRRwebMethod(function () {
                      var t;
                      return null === (t = e.rrwebRecord) || void 0 === t ? void 0 : t.takeFullSnapshot();
                    });
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
                        maskTextClass: "ph-mask",
                        maskTextSelector: void 0,
                        maskTextFn: void 0,
                        maskAllInputs: !0,
                        maskInputOptions: {},
                        maskInputFn: void 0,
                        slimDOMOptions: {},
                        collectFonts: !1,
                        inlineStylesheet: !0,
                        recordCrossOriginIframes: !1
                      };
                    this.rrwebRecord = D.rrweb ? D.rrweb.record : D.rrwebRecord;
                    for (var r = this.instance.config.session_recording, o = 0, s = Object.entries(r || {}); o < s.length; o++) {
                      var a = g(s[o], 2),
                        c = a[0],
                        l = a[1];
                      c in n && (n[c] = l);
                    }
                    if (this.rrwebRecord) {
                      this.mutationRateLimiter =
                        null !== (e = this.mutationRateLimiter) && void 0 !== e
                          ? e
                          : new kt(this.rrwebRecord, {
                              onBlockedNode: function (e, n) {
                                var r = "Too many mutations on node '".concat(
                                  e,
                                  "'. Rate limiting. This could be due to SVG animations or something similar"
                                );
                                V.info(r, { node: n }), t.log("[PostHog Recorder] " + r, "warn");
                              }
                            });
                      var u = [];
                      if (
                        (H.rrwebConsoleRecord && this.isConsoleLogCaptureEnabled && u.push(H.rrwebConsoleRecord.getRecordConsolePlugin()),
                        this.networkPayloadCapture && x(H.getRecordNetworkPlugin))
                      ) {
                        if (ht.includes(location.hostname) && !this._forceAllowLocalhostNetworkCapture)
                          return void V.info("[SessionReplay-NetworkCapture] not started because we are on localhost.");
                        u.push(
                          H.getRecordNetworkPlugin(
                            (function (e, t) {
                              var n,
                                r,
                                o,
                                s = e.session_recording,
                                a = !1 !== s.recordHeaders && t.recordHeaders,
                                c = !1 !== s.recordBody && t.recordBody,
                                l = !1 !== s.recordPerformance && t.recordPerformance,
                                u =
                                  ((n = s),
                                  (o = Math.min(1e6, null !== (r = n.payloadSizeLimitBytes) && void 0 !== r ? r : 1e6)),
                                  function (e) {
                                    return (
                                      null != e && e.requestBody && (e.requestBody = xt(e.requestBody, e.requestHeaders, o, "Request")),
                                      null != e &&
                                        e.responseBody &&
                                        (e.responseBody = xt(e.responseBody, e.responseHeaders, o, "Response")),
                                      e
                                    );
                                  }),
                                d = function (e) {
                                  return u(
                                    (function (e) {
                                      var t = gt(e.name);
                                      if (!(t && t.pathname && Tt.includes(t.pathname))) return e;
                                    })(
                                      ((t = e),
                                      Object.keys(null !== (n = t.requestHeaders) && void 0 !== n ? n : {}).forEach(function (e) {
                                        var n;
                                        Ct.includes(e.toLowerCase()) && (null === (n = t.requestHeaders) || void 0 === n || delete n[e]);
                                      }),
                                      t)
                                    )
                                  );
                                  var t, n;
                                },
                                f = x(e.session_recording.maskNetworkRequestFn);
                              return (
                                f &&
                                  x(e.session_recording.maskCapturedNetworkRequestFn) &&
                                  V.warn(
                                    "Both `maskNetworkRequestFn` and `maskCapturedNetworkRequestFn` are defined. `maskNetworkRequestFn` will be ignored."
                                  ),
                                f &&
                                  (e.session_recording.maskCapturedNetworkRequestFn = function (t) {
                                    var n = e.session_recording.maskNetworkRequestFn({ url: t.name });
                                    return i(i({}, t), {}, { name: null == n ? void 0 : n.url });
                                  }),
                                (s.maskRequestFn = x(e.session_recording.maskCapturedNetworkRequestFn)
                                  ? function (t) {
                                      var n,
                                        r,
                                        o,
                                        i = d(t);
                                      return i &&
                                        null !==
                                          (n =
                                            null === (r = (o = e.session_recording).maskCapturedNetworkRequestFn) || void 0 === r
                                              ? void 0
                                              : r.call(o, i)) &&
                                        void 0 !== n
                                        ? n
                                        : void 0;
                                    }
                                  : void 0),
                                s.maskRequestFn || (s.maskRequestFn = d),
                                i(i(i({}, Et), s), {}, { recordHeaders: a, recordBody: c, recordPerformance: l, recordInitialRequests: l })
                              );
                            })(this.instance.config, this.networkPayloadCapture)
                          )
                        );
                      }
                      (this.stopRrweb = this.rrwebRecord(
                        i(
                          {
                            emit: function (e) {
                              t.onRRwebEmit(e);
                            },
                            plugins: u
                          },
                          n
                        )
                      )),
                        this.instance._addCaptureHook(function (e) {
                          try {
                            if ("$pageview" === e) {
                              var n = D ? t._maskUrl(D.location.href) : "";
                              if (!n) return;
                              t._tryAddCustomEvent("$pageview", { href: n });
                            }
                          } catch (e) {
                            V.error("Could not add $pageview to rrweb session", e);
                          }
                        }),
                        (this._lastActivityTimestamp = Date.now()),
                        (this.isIdle = !1);
                    } else V.error("onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.");
                  }
                },
                {
                  key: "onRRwebEmit",
                  value: function (e) {
                    if (e && I(e)) {
                      if (e.type === Ot.Meta) {
                        var t = this._maskUrl(e.data.href);
                        if (!t) return;
                        e.data.href = t;
                      }
                      var n = this.mutationRateLimiter ? this.mutationRateLimiter.throttleMutations(e) : e;
                      if (n) {
                        var r = (function (e) {
                            var t = e;
                            if (t && I(t) && 6 === t.type && I(t.data) && "rrweb/console@1" === t.data.plugin) {
                              t.data.payload.payload.length > 10 &&
                                ((t.data.payload.payload = t.data.payload.payload.slice(0, 10)),
                                t.data.payload.payload.push("...[truncated]"));
                              for (var n = [], r = 0; r < t.data.payload.payload.length; r++)
                                t.data.payload.payload[r] && t.data.payload.payload[r].length > 2e3
                                  ? n.push(t.data.payload.payload[r].slice(0, 2e3) + "...[truncated]")
                                  : n.push(t.data.payload.payload[r]);
                              return (t.data.payload.payload = n), e;
                            }
                            return e;
                          })(n),
                          o = JSON.stringify(r).length;
                        if ((this._updateWindowAndSessionIds(r), !this.isIdle)) {
                          var i = { $snapshot_bytes: o, $snapshot_data: r, $session_id: this.sessionId, $window_id: this.windowId };
                          "disabled" !== this.status ? this._captureSnapshotBuffered(i) : this.clearBuffer();
                        }
                      }
                    }
                  }
                },
                {
                  key: "_maskUrl",
                  value: function (e) {
                    var t = this.instance.config.session_recording;
                    if (t.maskNetworkRequestFn) {
                      var n,
                        r = { url: e };
                      return null === (n = r = t.maskNetworkRequestFn(r)) || void 0 === n ? void 0 : n.url;
                    }
                    return e;
                  }
                },
                {
                  key: "clearBuffer",
                  value: function () {
                    return (this.buffer = void 0), { size: 0, data: [], sessionId: this.sessionId, windowId: this.windowId };
                  }
                },
                {
                  key: "_flushBuffer",
                  value: function () {
                    var e = this;
                    this.flushBufferTimer && (clearTimeout(this.flushBufferTimer), (this.flushBufferTimer = void 0));
                    var t = this._minimumDuration,
                      n = this.sessionDuration,
                      r = A(n) && n >= 0,
                      o = A(t) && r && n < t;
                    return "buffering" === this.status || o
                      ? ((this.flushBufferTimer = setTimeout(function () {
                          e._flushBuffer();
                        }, 2e3)),
                        this.buffer || this.clearBuffer())
                      : this.buffer && 0 !== this.buffer.data.length
                      ? (this._captureSnapshot({
                          $snapshot_bytes: this.buffer.size,
                          $snapshot_data: this.buffer.data,
                          $session_id: this.buffer.sessionId,
                          $window_id: this.buffer.windowId
                        }),
                        this.clearBuffer())
                      : this.buffer || this.clearBuffer();
                  }
                },
                {
                  key: "_captureSnapshotBuffered",
                  value: function (e) {
                    var t,
                      n = this,
                      r = 2 + ((null === (t = this.buffer) || void 0 === t ? void 0 : t.data.length) || 0);
                    (!this.buffer ||
                      this.buffer.size + e.$snapshot_bytes + r > 943718.4 ||
                      (this.buffer.sessionId && this.buffer.sessionId !== this.sessionId)) &&
                      (this.buffer = this._flushBuffer()),
                      R(this.buffer.sessionId) &&
                        !R(this.sessionId) &&
                        ((this.buffer.sessionId = this.sessionId), (this.buffer.windowId = this.windowId)),
                      (this.buffer.size += e.$snapshot_bytes),
                      this.buffer.data.push(e.$snapshot_data),
                      this.flushBufferTimer ||
                        (this.flushBufferTimer = setTimeout(function () {
                          n._flushBuffer();
                        }, 2e3));
                  }
                },
                {
                  key: "_captureSnapshot",
                  value: function (e) {
                    this.instance.capture("$snapshot", e, {
                      transport: "XHR",
                      method: "POST",
                      endpoint: this._endpoint,
                      _noTruncate: !0,
                      _batchKey: "recordings",
                      _metrics: { rrweb_full_snapshot: e.$snapshot_data.type === wt }
                    });
                  }
                }
              ]),
              e
            );
          })(),
          At = (function () {
            function e(t) {
              a(this, e), (this.instance = t), (this.instance.decideEndpointWasHit = this.instance._hasBootstrappedFeatureFlags());
            }
            return (
              l(e, [
                {
                  key: "call",
                  value: function () {
                    var e = this,
                      t = re(
                        JSON.stringify({
                          token: this.instance.config.token,
                          distinct_id: this.instance.get_distinct_id(),
                          groups: this.instance.getGroups(),
                          person_properties: this.instance.get_property(Le),
                          group_properties: this.instance.get_property($e),
                          disable_flags:
                            this.instance.config.advanced_disable_feature_flags ||
                            this.instance.config.advanced_disable_feature_flags_on_first_load ||
                            void 0
                        })
                      );
                    this.instance._send_request(
                      "".concat(this.instance.config.api_host, "/decide/?v=3"),
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
                      n = this;
                    if (
                      (this.instance.featureFlags.setReloadingPaused(!1),
                      this.instance.featureFlags._startReloadTimer(),
                      0 !== (null == e ? void 0 : e.status))
                    ) {
                      if (!U || !U.body)
                        return (
                          V.info("document not ready yet, trying again in 500 milliseconds..."),
                          void setTimeout(function () {
                            n.parseDecideResponse(e);
                          }, 500)
                        );
                      this.instance.toolbar.afterDecideResponse(e),
                        null === (t = this.instance.sessionRecording) || void 0 === t || t.afterDecideResponse(e),
                        Ve.afterDecideResponse(e, this.instance),
                        this.instance._afterDecideResponse(e),
                        this.instance.config.advanced_disable_feature_flags_on_first_load ||
                          this.instance.config.advanced_disable_feature_flags ||
                          this.instance.featureFlags.receivedFeatureFlags(e);
                      var r = null == D ? void 0 : D.extendPostHogWithSurveys;
                      e.surveys &&
                        !r &&
                        se(this.instance.config.api_host + "/static/surveys.js", function (e) {
                          if (e) return V.error("Could not load surveys script", e);
                          D.extendPostHogWithSurveys(n.instance);
                        });
                      var o = null == D ? void 0 : D.extendPostHogWithExceptionAutoCapture;
                      if (
                        (e.autocaptureExceptions &&
                          e.autocaptureExceptions &&
                          P(o) &&
                          se(this.instance.config.api_host + "/static/exception-autocapture.js", function (t) {
                            if (t) return V.error("Could not load exception autocapture script", t);
                            D.extendPostHogWithExceptionAutocapture(n.instance, e);
                          }),
                        e.siteApps)
                      )
                        if (this.instance.config.opt_in_site_apps) {
                          var i,
                            s = this.instance.config.api_host,
                            a = b(e.siteApps);
                          try {
                            var c = function () {
                              var e = i.value,
                                t = e.id,
                                r = e.url,
                                o = [s, "/" === s[s.length - 1] && "/" === r[0] ? r.substring(1) : r].join("");
                              (H["__$$ph_site_app_".concat(t)] = n.instance),
                                se(o, function (e) {
                                  e && V.error("Error while initializing PostHog app with config id ".concat(t), e);
                                });
                            };
                            for (a.s(); !(i = a.n()).done; ) c();
                          } catch (e) {
                            a.e(e);
                          } finally {
                            a.f();
                          }
                        } else
                          e.siteApps.length > 0 &&
                            V.error('PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.');
                    } else V.error("Failed to fetch feature flags from PostHog.");
                  }
                }
              ]),
              e
            );
          })(),
          Mt = ["https://app.posthog.com", "https://eu.posthog.com"],
          Lt = ["source"],
          $t = null != D && D.location ? mt(D.location.hash, "__posthog") || mt(location.hash, "state") : null,
          Nt = (function () {
            function e(t) {
              a(this, e), (this.instance = t);
            }
            return (
              l(e, [
                {
                  key: "afterDecideResponse",
                  value: function (e) {
                    var t = e.toolbarParams || e.editorParams || (e.toolbarVersion ? { toolbarVersion: e.toolbarVersion } : {});
                    e.isAuthenticated && t.toolbarVersion && 0 === t.toolbarVersion.indexOf("toolbar") && this.loadToolbar(i({}, t));
                  }
                },
                {
                  key: "maybeLoadToolbar",
                  value: function () {
                    var e,
                      t,
                      n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                      r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                      o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                    if (!D || !U) return !1;
                    (n = null !== (e = n) && void 0 !== e ? e : D.location), (o = null !== (t = o) && void 0 !== t ? t : D.history);
                    try {
                      if (!r) {
                        try {
                          D.localStorage.setItem("test", "test"), D.localStorage.removeItem("test");
                        } catch (e) {
                          return !1;
                        }
                        r = null == D ? void 0 : D.localStorage;
                      }
                      var i,
                        s = $t || mt(n.hash, "__posthog") || mt(n.hash, "state"),
                        a = s
                          ? K(function () {
                              return JSON.parse(atob(decodeURIComponent(s)));
                            }) ||
                            K(function () {
                              return JSON.parse(decodeURIComponent(s));
                            })
                          : null;
                      return (
                        a && "ph_authorize" === a.action
                          ? (((i = a).source = "url"),
                            i &&
                              Object.keys(i).length > 0 &&
                              (a.desiredHash
                                ? (n.hash = a.desiredHash)
                                : o
                                ? o.replaceState("", U.title, n.pathname + n.search)
                                : (n.hash = "")))
                          : (((i = JSON.parse(r.getItem("_postHogToolbarParams") || "{}")).source = "localstorage"), delete i.userIntent),
                        !(!i.token || this.instance.config.token !== i.token || (this.loadToolbar(i), 0))
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
                    if (!D || H._postHogToolbarLoaded) return !1;
                    H._postHogToolbarLoaded = !0;
                    var n = this.instance.config.api_host,
                      r = 3e5,
                      o = Math.floor(Date.now() / r) * r,
                      s = ""
                        .concat(n)
                        .concat(n.endsWith("/") ? "" : "/", "static/toolbar.js?t=")
                        .concat(o),
                      a = !Mt.includes(this.instance.config.api_host) && this.instance.config.advanced_disable_toolbar_metrics,
                      c = i(i({ token: this.instance.config.token }, e), {}, { apiURL: n }, a ? { instrument: !1 } : {});
                    c.source;
                    var l = (function (e, t) {
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
                    })(c, Lt);
                    return (
                      D.localStorage.setItem("_postHogToolbarParams", JSON.stringify(l)),
                      se(s, function (e) {
                        e ? V.error("Failed to load toolbar", e) : (H.ph_load_toolbar || H.ph_load_editor)(c, t.instance);
                      }),
                      ie(D, "turbolinks:load", function () {
                        (H._postHogToolbarLoaded = !1), t.loadToolbar(c);
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
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0;
                    return this.maybeLoadToolbar(e, t, n);
                  }
                }
              ]),
              e
            );
          })(),
          Dt = "__ph_opt_in_out_";
        function Ft(e, t) {
          Gt(!0, e, t);
        }
        function Ut(e, t) {
          Gt(!1, e, t);
        }
        function Bt(e, t) {
          return "1" === Wt(e, t);
        }
        function Ht(e, t) {
          return (
            !!(function (e) {
              if (e && e.respectDnt) {
                var t = (e && e.window) || D,
                  n = null == t ? void 0 : t.navigator,
                  r = !1;
                return (
                  Z([null == n ? void 0 : n.doNotTrack, n.msDoNotTrack, t.doNotTrack], function (e) {
                    Y([!0, 1, "1", "yes"], e) && (r = !0);
                  }),
                  r
                );
              }
              return !1;
            })(t) || "0" === Wt(e, t)
          );
        }
        function qt(e, t) {
          Vt((t = t || {})).remove(zt(e, t), !!t.crossSubdomainCookie);
        }
        function Vt(e) {
          return "localStorage" === (e = e || {}).persistenceType ? at : "localStorage+cookie" === e.persistenceType ? lt : it;
        }
        function zt(e, t) {
          return ((t = t || {}).persistencePrefix || Dt) + e;
        }
        function Wt(e, t) {
          return Vt(t).get(zt(e, t));
        }
        function Gt(e, t, n) {
          j(t) && t.length
            ? (Vt((n = n || {})).set(
                zt(t, n),
                e ? 1 : 0,
                A(n.cookieExpiration) ? n.cookieExpiration : null,
                n.crossSubdomainCookie,
                n.secureCookie
              ),
              n.capture && e && n.capture(n.captureEventName || "$opt_in", n.captureProperties || {}, { send_instantly: !0 }))
            : V.error("gdpr." + (e ? "optIn" : "optOut") + " called with an invalid token");
        }
        var Zt = (function () {
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
              l(e, [
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
          Jt = (function (e) {
            d(n, Zt);
            var t = h(n);
            function n(e) {
              var r,
                o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3;
              return a(this, n), ((r = t.call(this, o)).handlePollRequest = e), r;
            }
            return (
              l(n, [
                {
                  key: "enqueue",
                  value: function (e, t, n) {
                    this._event_queue.push({ url: e, data: t, options: n }), this.isPolling || ((this.isPolling = !0), this.poll());
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
                              Z(i, function (t, n) {
                                (i[n].offset = Math.abs(i[n].timestamp - e.getTime())), delete i[n].timestamp;
                              }),
                                e.handlePollRequest(o, i, s);
                            };
                          for (var r in t) n(r);
                          (e._event_queue.length = 0), (e._empty_queue_count = 0);
                        } else e._empty_queue_count++;
                        e._empty_queue_count > 4 && ((e.isPolling = !1), (e._empty_queue_count = 0)), e.isPolling && e.poll();
                      }, this._pollInterval));
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
                        v(
                          n.filter(function (e) {
                            return 0 === e.url.indexOf("/e");
                          })
                        ),
                        v(
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
                      Z(this._event_queue, function (t) {
                        var n = t.url,
                          r = t.data,
                          o = t.options,
                          i = (o ? o._batchKey : null) || n;
                        P(e[i]) && (e[i] = { data: [], url: n, options: o }),
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
          Yt = Uint8Array,
          Qt = Uint16Array,
          Xt = Uint32Array,
          Kt = new Yt([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
          en = new Yt([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
          tn = new Yt([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
          nn = function (e, t) {
            for (var n = new Qt(31), r = 0; r < 31; ++r) n[r] = t += 1 << e[r - 1];
            var o = new Xt(n[30]);
            for (r = 1; r < 30; ++r) for (var i = n[r]; i < n[r + 1]; ++i) o[i] = ((i - n[r]) << 5) | r;
            return [n, o];
          },
          rn = nn(Kt, 2),
          on = rn[0],
          sn = rn[1];
        (on[28] = 258), (sn[258] = 28);
        for (var an = nn(en, 0)[1], cn = new Qt(32768), ln = 0; ln < 32768; ++ln) {
          var un = ((43690 & ln) >>> 1) | ((21845 & ln) << 1);
          (un = ((61680 & (un = ((52428 & un) >>> 2) | ((13107 & un) << 2))) >>> 4) | ((3855 & un) << 4)),
            (cn[ln] = (((65280 & un) >>> 8) | ((255 & un) << 8)) >>> 1);
        }
        var dn = function (e, t, n) {
            for (var r = e.length, o = 0, i = new Qt(t); o < r; ++o) ++i[e[o] - 1];
            var s,
              a = new Qt(t);
            for (o = 0; o < t; ++o) a[o] = (a[o - 1] + i[o - 1]) << 1;
            if (n) {
              s = new Qt(1 << t);
              var c = 15 - t;
              for (o = 0; o < r; ++o)
                if (e[o])
                  for (var l = (o << 4) | e[o], u = t - e[o], d = a[e[o] - 1]++ << u, f = d | ((1 << u) - 1); d <= f; ++d)
                    s[cn[d] >>> c] = l;
            } else for (s = new Qt(r), o = 0; o < r; ++o) s[o] = cn[a[e[o] - 1]++] >>> (15 - e[o]);
            return s;
          },
          fn = new Yt(288);
        for (ln = 0; ln < 144; ++ln) fn[ln] = 8;
        for (ln = 144; ln < 256; ++ln) fn[ln] = 9;
        for (ln = 256; ln < 280; ++ln) fn[ln] = 7;
        for (ln = 280; ln < 288; ++ln) fn[ln] = 8;
        var pn = new Yt(32);
        for (ln = 0; ln < 32; ++ln) pn[ln] = 5;
        var hn,
          gn = dn(fn, 9, 0),
          vn = dn(pn, 5, 0),
          mn = function (e) {
            return ((e / 8) >> 0) + (7 & e && 1);
          },
          _n = function (e, t, n) {
            (null == t || t < 0) && (t = 0), (null == n || n > e.length) && (n = e.length);
            var r = new (e instanceof Qt ? Qt : e instanceof Xt ? Xt : Yt)(n - t);
            return r.set(e.subarray(t, n)), r;
          },
          yn = function (e, t, n) {
            n <<= 7 & t;
            var r = (t / 8) >> 0;
            (e[r] |= n), (e[r + 1] |= n >>> 8);
          },
          bn = function (e, t, n) {
            n <<= 7 & t;
            var r = (t / 8) >> 0;
            (e[r] |= n), (e[r + 1] |= n >>> 8), (e[r + 2] |= n >>> 16);
          },
          wn = function (e, t) {
            for (var n = [], r = 0; r < e.length; ++r) e[r] && n.push({ s: r, f: e[r] });
            var o = n.length,
              i = n.slice();
            if (!o) return [new Yt(0), 0];
            if (1 == o) {
              var s = new Yt(n[0].s + 1);
              return (s[n[0].s] = 1), [s, 1];
            }
            n.sort(function (e, t) {
              return e.f - t.f;
            }),
              n.push({ s: -1, f: 25001 });
            var a = n[0],
              c = n[1],
              l = 0,
              u = 1,
              d = 2;
            for (n[0] = { s: -1, f: a.f + c.f, l: a, r: c }; u != o - 1; )
              (a = n[n[l].f < n[d].f ? l++ : d++]),
                (c = n[l != u && n[l].f < n[d].f ? l++ : d++]),
                (n[u++] = { s: -1, f: a.f + c.f, l: a, r: c });
            var f = i[0].s;
            for (r = 1; r < o; ++r) i[r].s > f && (f = i[r].s);
            var p = new Qt(f + 1),
              h = Sn(n[u - 1], p, 0);
            if (h > t) {
              r = 0;
              var g = 0,
                v = h - t,
                m = 1 << v;
              for (
                i.sort(function (e, t) {
                  return p[t.s] - p[e.s] || e.f - t.f;
                });
                r < o;
                ++r
              ) {
                var _ = i[r].s;
                if (!(p[_] > t)) break;
                (g += m - (1 << (h - p[_]))), (p[_] = t);
              }
              for (g >>>= v; g > 0; ) {
                var y = i[r].s;
                p[y] < t ? (g -= 1 << (t - p[y]++ - 1)) : ++r;
              }
              for (; r >= 0 && g; --r) {
                var b = i[r].s;
                p[b] == t && (--p[b], ++g);
              }
              h = t;
            }
            return [new Yt(p), h];
          },
          Sn = function e(t, n, r) {
            return -1 == t.s ? Math.max(e(t.l, n, r + 1), e(t.r, n, r + 1)) : (n[t.s] = r);
          },
          kn = function (e) {
            for (var t = e.length; t && !e[--t]; );
            for (
              var n = new Qt(++t),
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
          On = function (e, t) {
            for (var n = 0, r = 0; r < t.length; ++r) n += e[r] * t[r];
            return n;
          },
          En = function (e, t, n) {
            var r = n.length,
              o = mn(t + 2);
            (e[o] = 255 & r), (e[o + 1] = r >>> 8), (e[o + 2] = 255 ^ e[o]), (e[o + 3] = 255 ^ e[o + 1]);
            for (var i = 0; i < r; ++i) e[o + i + 4] = n[i];
            return 8 * (o + 4 + r);
          },
          Cn = function (e, t, n, r, o, i, s, a, c, l, u) {
            yn(t, u++, n), ++o[256];
            for (
              var d = wn(o, 15),
                f = d[0],
                p = d[1],
                h = wn(i, 15),
                g = h[0],
                v = h[1],
                m = kn(f),
                _ = m[0],
                y = m[1],
                b = kn(g),
                w = b[0],
                S = b[1],
                k = new Qt(19),
                O = 0;
              O < _.length;
              ++O
            )
              k[31 & _[O]]++;
            for (O = 0; O < w.length; ++O) k[31 & w[O]]++;
            for (var E = wn(k, 7), C = E[0], T = E[1], x = 19; x > 4 && !C[tn[x - 1]]; --x);
            var I,
              P,
              j,
              R,
              A = (l + 5) << 3,
              M = On(o, fn) + On(i, pn) + s,
              L = On(o, f) + On(i, g) + s + 14 + 3 * x + On(k, C) + (2 * k[16] + 3 * k[17] + 7 * k[18]);
            if (A <= M && A <= L) return En(t, u, e.subarray(c, c + l));
            if ((yn(t, u, 1 + (L < M)), (u += 2), L < M)) {
              (I = dn(f, p, 0)), (P = f), (j = dn(g, v, 0)), (R = g);
              var $ = dn(C, T, 0);
              for (yn(t, u, y - 257), yn(t, u + 5, S - 1), yn(t, u + 10, x - 4), u += 14, O = 0; O < x; ++O) yn(t, u + 3 * O, C[tn[O]]);
              u += 3 * x;
              for (var N = [_, w], D = 0; D < 2; ++D) {
                var F = N[D];
                for (O = 0; O < F.length; ++O) {
                  var U = 31 & F[O];
                  yn(t, u, $[U]), (u += C[U]), U > 15 && (yn(t, u, (F[O] >>> 5) & 127), (u += F[O] >>> 12));
                }
              }
            } else (I = gn), (P = fn), (j = vn), (R = pn);
            for (O = 0; O < a; ++O)
              if (r[O] > 255) {
                (U = (r[O] >>> 18) & 31), bn(t, u, I[U + 257]), (u += P[U + 257]), U > 7 && (yn(t, u, (r[O] >>> 23) & 31), (u += Kt[U]));
                var B = 31 & r[O];
                bn(t, u, j[B]), (u += R[B]), B > 3 && (bn(t, u, (r[O] >>> 5) & 8191), (u += en[B]));
              } else bn(t, u, I[r[O]]), (u += P[r[O]]);
            return bn(t, u, I[256]), u + P[256];
          },
          Tn = new Xt([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
          xn =
            (new Yt(0),
            (function () {
              for (var e = new Xt(256), t = 0; t < 256; ++t) {
                for (var n = t, r = 9; --r; ) n = (1 & n && 3988292384) ^ (n >>> 1);
                e[t] = n;
              }
              return e;
            })()),
          In = function (e, t, n) {
            for (; n; ++t) (e[t] = n), (n >>>= 8);
          };
        function Pn(e, t) {
          void 0 === t && (t = {});
          var n = (function () {
              var e = 4294967295;
              return {
                p: function (t) {
                  for (var n = e, r = 0; r < t.length; ++r) n = xn[(255 & n) ^ t[r]] ^ (n >>> 8);
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
                  a = new Yt(r + s + 5 * (1 + Math.floor(s / 7e3)) + 8),
                  c = a.subarray(r, a.length - 8),
                  l = 0;
                if (!t || s < 8)
                  for (var u = 0; u <= s; u += 65535) {
                    var d = u + 65535;
                    d < s ? (l = En(c, l, e.subarray(u, d))) : ((c[u] = i), (l = En(c, l, e.subarray(u, s))));
                  }
                else {
                  for (
                    var f = Tn[t - 1],
                      p = f >>> 13,
                      h = 8191 & f,
                      g = (1 << n) - 1,
                      v = new Qt(32768),
                      m = new Qt(g + 1),
                      _ = Math.ceil(n / 3),
                      y = 2 * _,
                      b = function (t) {
                        return (e[t] ^ (e[t + 1] << _) ^ (e[t + 2] << y)) & g;
                      },
                      w = new Xt(25e3),
                      S = new Qt(288),
                      k = new Qt(32),
                      O = 0,
                      E = 0,
                      C = ((u = 0), 0),
                      T = 0,
                      x = 0;
                    u < s;
                    ++u
                  ) {
                    var I = b(u),
                      P = 32767 & u,
                      j = m[I];
                    if (((v[P] = j), (m[I] = P), T <= u)) {
                      var R = s - u;
                      if ((O > 7e3 || C > 24576) && R > 423) {
                        (l = Cn(e, c, 0, w, S, k, E, C, x, u - x, l)), (C = O = E = 0), (x = u);
                        for (var A = 0; A < 286; ++A) S[A] = 0;
                        for (A = 0; A < 30; ++A) k[A] = 0;
                      }
                      var M = 2,
                        L = 0,
                        $ = h,
                        N = (P - j) & 32767;
                      if (R > 2 && I == b(u - N))
                        for (var D = Math.min(p, R) - 1, F = Math.min(32767, u), U = Math.min(258, R); N <= F && --$ && P != j; ) {
                          if (e[u + M] == e[u + M - N]) {
                            for (var B = 0; B < U && e[u + B] == e[u + B - N]; ++B);
                            if (B > M) {
                              if (((M = B), (L = N), B > D)) break;
                              var H = Math.min(N, B - 2),
                                q = 0;
                              for (A = 0; A < H; ++A) {
                                var V = (u - N + A + 32768) & 32767,
                                  z = (V - v[V] + 32768) & 32767;
                                z > q && ((q = z), (j = V));
                              }
                            }
                          }
                          N += ((P = j) - (j = v[P]) + 32768) & 32767;
                        }
                      if (L) {
                        w[C++] = 268435456 | (sn[M] << 18) | an[L];
                        var W = 31 & sn[M],
                          G = 31 & an[L];
                        (E += Kt[W] + en[G]), ++S[257 + W], ++k[G], (T = u + M), ++O;
                      } else (w[C++] = e[u]), ++S[e[u]];
                    }
                  }
                  l = Cn(e, c, i, w, S, k, E, C, x, u - x, l);
                }
                return _n(a, 0, r + mn(l) + 8);
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
                0 != t.mtime && In(e, 4, Math.floor(new Date(t.mtime || Date.now()) / 1e3)),
                n)
              ) {
                e[3] = 8;
                for (var r = 0; r <= n.length; ++r) e[r + 10] = n.charCodeAt(r);
              }
            })(o, t),
            In(o, i - 8, n.d()),
            In(o, i - 4, r),
            o
          );
        }
        function jn(e, t) {
          var n = e.length;
          if (!t && "undefined" != typeof TextEncoder) return new TextEncoder().encode(e);
          for (
            var r = new Yt(e.length + (e.length >>> 1)),
              o = 0,
              i = function (e) {
                r[o++] = e;
              },
              s = 0;
            s < n;
            ++s
          ) {
            if (o + 5 > r.length) {
              var a = new Yt(o + 8 + ((n - s) << 1));
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
          return _n(r, 0, o);
        }
        !(function (e) {
          (e.GZipJS = "gzip-js"), (e.Base64 = "base64");
        })(hn || (hn = {}));
        var Rn = function (e, t, n) {
            var r = t || {};
            (r.ip = n.ip ? 1 : 0), (r._ = new Date().getTime().toString()), (r.ver = w.LIB_VERSION);
            var o = e.split("?");
            if (o.length > 1) {
              var i,
                s = b(o[1].split("&"));
              try {
                for (s.s(); !(i = s.n()).done; ) {
                  var a = i.value.split("=")[0];
                  P(r[a]) || delete r[a];
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
                  Z(e, function (e, r) {
                    P(e) ||
                      P(r) ||
                      "undefined" === r ||
                      ((t = encodeURIComponent(e.toString())), (n = encodeURIComponent(r)), (o[o.length] = n + "=" + t));
                  }),
                  o.join(r)
                );
              })(r)
            );
          },
          An = function e(t, n) {
            if (n.blob && t.buffer) return new Blob([T(t) ? t : t.buffer], { type: "text/plain" });
            if (n.sendBeacon || n.blob) {
              var r = e(t, { method: "POST" });
              return new Blob([r], { type: "application/x-www-form-urlencoded" });
            }
            return "POST" !== n.method
              ? null
              : ((o = C(t) || T(t) ? "data=" + encodeURIComponent(t) : "data=" + encodeURIComponent(t.data)),
                "compression" in t && t.compression && (o += "&compression=" + t.compression),
                o);
            var o;
          },
          Mn = function (e) {
            var t = e.url,
              n = e.data,
              r = e.headers,
              o = e.options,
              i = e.callback,
              s = e.retriesPerformedSoFar,
              a = e.retryQueue,
              c = e.onXHRError,
              l = e.timeout,
              u = void 0 === l ? 6e4 : l,
              d = e.onResponse;
            A(s) && s > 0 && (t = Rn(t, { retry_count: s }, {}));
            var f = new XMLHttpRequest();
            f.open(o.method || "GET", t, !0);
            var p = An(n, o);
            Z(r, function (e, t) {
              f.setRequestHeader(t, e);
            }),
              "POST" !== o.method || o.blob || f.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
              (f.timeout = u),
              (f.withCredentials = !0),
              (f.onreadystatechange = function () {
                if (4 === f.readyState)
                  if ((null == d || d(f), 200 === f.status)) {
                    if (i) {
                      var e;
                      try {
                        e = JSON.parse(f.responseText);
                      } catch (e) {
                        return void V.error(e);
                      }
                      i(e);
                    }
                  } else
                    x(c) && c(f),
                      (f.status < 400 || f.status > 500) &&
                        a.enqueue({ url: t, data: n, options: o, headers: r, retriesPerformedSoFar: (s || 0) + 1, callback: i }),
                      null == i || i({ status: 0 });
              }),
              f.send(p);
          },
          Ln = (function (e) {
            d(n, Zt);
            var t = h(n);
            function n(e, r) {
              var o;
              return (
                a(this, n),
                ((o = t.call(this)).isPolling = !1),
                (o.queue = []),
                (o.areWeOnline = !0),
                (o.onXHRError = e),
                (o.rateLimiter = r),
                !P(D) &&
                  "onLine" in D.navigator &&
                  ((o.areWeOnline = D.navigator.onLine),
                  D.addEventListener("online", function () {
                    o._handleWeAreNowOnline();
                  }),
                  D.addEventListener("offline", function () {
                    o.areWeOnline = !1;
                  })),
                o
              );
            }
            return (
              l(n, [
                {
                  key: "enqueue",
                  value: function (e) {
                    var t = e.retriesPerformedSoFar || 0;
                    if (!(t >= 10)) {
                      var n = (function (e) {
                          var t = 3e3 * Math.pow(2, e),
                            n = t / 2,
                            r = Math.min(18e5, t),
                            o = (Math.random() - 0.5) * (r - n);
                          return Math.ceil(r + o);
                        })(t),
                        r = new Date(Date.now() + n);
                      this.queue.push({ retryAt: r, requestData: e });
                      var o = "Enqueued failed request for retry in ".concat(n);
                      navigator.onLine || (o += " (Browser is offline)"), V.warn(o), this.isPolling || ((this.isPolling = !0), this.poll());
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
                        r = b(t);
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
                      t = b(this.queue);
                    try {
                      for (t.s(); !(e = t.n()).done; ) {
                        var n = e.value.requestData,
                          r = n.url,
                          o = n.data,
                          s = n.options;
                        if (this.rateLimiter.isRateLimited(s._batchKey)) V.warn("[RetryQueue] is quota limited. Dropping request.");
                        else
                          try {
                            null == D || D.navigator.sendBeacon(r, An(o, i(i({}, s), {}, { sendBeacon: !0 })));
                          } catch (e) {
                            V.error(e);
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
                    this.rateLimiter.isRateLimited(r._batchKey) ||
                      Mn({
                        url: t,
                        data: n || {},
                        options: r || {},
                        headers: o || {},
                        retriesPerformedSoFar: s || 0,
                        callback: i,
                        retryQueue: this,
                        onXHRError: this.onXHRError,
                        onResponse: this.rateLimiter.checkForLimiting
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
          $n = 1800,
          Nn = (function () {
            function e(t, n, r, o) {
              a(this, e),
                u(this, "_sessionIdChangedHandlers", []),
                (this.config = t),
                (this.persistence = n),
                (this._windowId = void 0),
                (this._sessionId = void 0),
                (this._sessionStartTimestamp = null),
                (this._sessionActivityTimestamp = null),
                (this._sessionIdGenerator = r || nt),
                (this._windowIdGenerator = o || nt);
              var i = t.persistence_name || t.token,
                s = t.session_idle_timeout_seconds || $n;
              if (
                (A(s)
                  ? s > $n
                    ? V.warn("session_idle_timeout_seconds cannot be  greater than 30 minutes. Using 30 minutes instead.")
                    : s < 60 && V.warn("session_idle_timeout_seconds cannot be less than 60 seconds. Using 60 seconds instead.")
                  : (V.warn("session_idle_timeout_seconds must be a number. Defaulting to 30 minutes."), (s = $n)),
                (this._sessionTimeoutMs = 1e3 * Math.min(Math.max(s, 60), $n)),
                (this._window_id_storage_key = "ph_" + i + "_window_id"),
                (this._primary_window_exists_storage_key = "ph_" + i + "_primary_window_exists"),
                this._canUseSessionStorage())
              ) {
                var c = pt.parse(this._window_id_storage_key),
                  l = pt.parse(this._primary_window_exists_storage_key);
                c && !l ? (this._windowId = c) : pt.remove(this._window_id_storage_key),
                  pt.set(this._primary_window_exists_storage_key, !0);
              }
              this._listenToReloadWindow();
            }
            return (
              l(e, [
                {
                  key: "onSessionId",
                  value: function (e) {
                    var t = this;
                    return (
                      P(this._sessionIdChangedHandlers) && (this._sessionIdChangedHandlers = []),
                      this._sessionIdChangedHandlers.push(e),
                      this._sessionId && e(this._sessionId, this._windowId),
                      function () {
                        t._sessionIdChangedHandlers = t._sessionIdChangedHandlers.filter(function (t) {
                          return t !== e;
                        });
                      }
                    );
                  }
                },
                {
                  key: "_canUseSessionStorage",
                  value: function () {
                    return "memory" !== this.config.persistence && !this.persistence.disabled && pt.is_supported();
                  }
                },
                {
                  key: "_setWindowId",
                  value: function (e) {
                    e !== this._windowId && ((this._windowId = e), this._canUseSessionStorage() && pt.set(this._window_id_storage_key, e));
                  }
                },
                {
                  key: "_getWindowId",
                  value: function () {
                    return this._windowId ? this._windowId : this._canUseSessionStorage() ? pt.parse(this._window_id_storage_key) : null;
                  }
                },
                {
                  key: "_setSessionId",
                  value: function (e, t, n) {
                    (e === this._sessionId && t === this._sessionActivityTimestamp && n === this._sessionStartTimestamp) ||
                      ((this._sessionStartTimestamp = n),
                      (this._sessionActivityTimestamp = t),
                      (this._sessionId = e),
                      this.persistence.register(u({}, je, [t, e, n])));
                  }
                },
                {
                  key: "_getSessionId",
                  value: function () {
                    if (this._sessionId && this._sessionActivityTimestamp && this._sessionStartTimestamp)
                      return [this._sessionActivityTimestamp, this._sessionId, this._sessionStartTimestamp];
                    var e = this.persistence.props[je];
                    return C(e) && 2 === e.length && e.push(e[0]), e || [0, null, 0];
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
                    null == D ||
                      D.addEventListener("beforeunload", function () {
                        e._canUseSessionStorage() && pt.remove(e._primary_window_exists_storage_key);
                      });
                  }
                },
                {
                  key: "checkAndGetSessionAndWindowId",
                  value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                      t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null) || new Date().getTime(),
                      n = g(this._getSessionId(), 3),
                      r = n[0],
                      o = n[1],
                      i = n[2],
                      s = this._getWindowId(),
                      a = i && i > 0 && Math.abs(t - i) > 864e5,
                      c = !1,
                      l = !o,
                      u = !e && Math.abs(t - r) > this._sessionTimeoutMs;
                    l || u || a
                      ? ((o = this._sessionIdGenerator()), (s = this._windowIdGenerator()), (i = t), (c = !0))
                      : s || ((s = this._windowIdGenerator()), (c = !0));
                    var d = 0 === r || !e || a ? t : r,
                      f = 0 === i ? new Date().getTime() : i;
                    return (
                      this._setWindowId(s),
                      this._setSessionId(o, d, f),
                      c &&
                        this._sessionIdChangedHandlers.forEach(function (e) {
                          return e(o, s);
                        }),
                      { sessionId: o, windowId: s, sessionStartTimestamp: f }
                    );
                  }
                }
              ]),
              e
            );
          })(),
          Dn = l(function e(t, n, r, o) {
            a(this, e),
              (this.name = "posthog-js"),
              (this.setupOnce = function (e) {
                e(function (e) {
                  var i, s, a, c, l;
                  if ("error" !== e.level || !t.__loaded) return e;
                  e.tags || (e.tags = {});
                  var u = t.config.ui_host || t.config.api_host;
                  (e.tags["PostHog Person URL"] = u + "/person/" + t.get_distinct_id()),
                    t.sessionRecordingStarted() && (e.tags["PostHog Recording URL"] = t.get_session_replay_url({ withTimestamp: !0 }));
                  var d = (null === (i = e.exception) || void 0 === i ? void 0 : i.values) || [],
                    f = {
                      $exception_message: null === (s = d[0]) || void 0 === s ? void 0 : s.value,
                      $exception_type: null === (a = d[0]) || void 0 === a ? void 0 : a.type,
                      $exception_personURL: u + "/person/" + t.get_distinct_id(),
                      $sentry_event_id: e.event_id,
                      $sentry_exception: e.exception,
                      $sentry_exception_message: null === (c = d[0]) || void 0 === c ? void 0 : c.value,
                      $sentry_exception_type: null === (l = d[0]) || void 0 === l ? void 0 : l.type,
                      $sentry_tags: e.tags
                    };
                  return (
                    n &&
                      r &&
                      (f.$sentry_url = (o || "https://sentry.io/organizations/") + n + "/issues/?project=" + r + "&query=" + e.event_id),
                    t.capture("$exception", f),
                    e
                  );
                });
              });
          }),
          Fn = (function () {
            function e() {
              var t = this;
              a(this, e),
                u(this, "_hasSeenPageView", !1),
                u(this, "_updateScrollData", function () {
                  var e, n, r, o;
                  t._pageViewData || (t._pageViewData = t._createPageViewData());
                  var i = t._pageViewData,
                    s = t._scrollY(),
                    a = t._scrollHeight(),
                    c = t._contentY(),
                    l = t._contentHeight();
                  (i.lastScrollY = s),
                    (i.maxScrollY = Math.max(s, null !== (e = i.maxScrollY) && void 0 !== e ? e : 0)),
                    (i.maxScrollHeight = Math.max(a, null !== (n = i.maxScrollHeight) && void 0 !== n ? n : 0)),
                    (i.lastContentY = c),
                    (i.maxContentY = Math.max(c, null !== (r = i.maxContentY) && void 0 !== r ? r : 0)),
                    (i.maxContentHeight = Math.max(l, null !== (o = i.maxContentHeight) && void 0 !== o ? o : 0));
                });
            }
            return (
              l(e, [
                {
                  key: "_createPageViewData",
                  value: function () {
                    var e;
                    return { pathname: null !== (e = null == D ? void 0 : D.location.pathname) && void 0 !== e ? e : "" };
                  }
                },
                {
                  key: "doPageView",
                  value: function () {
                    var e, t;
                    return (
                      this._hasSeenPageView
                        ? ((t = this._pageViewData), (this._pageViewData = this._createPageViewData()))
                        : ((this._hasSeenPageView = !0),
                          (t = void 0),
                          this._pageViewData || (this._pageViewData = this._createPageViewData())),
                      setTimeout(this._updateScrollData, 0),
                      i(
                        { $prev_pageview_pathname: null === (e = t) || void 0 === e ? void 0 : e.pathname },
                        this._calculatePrevPageScrollProperties(t)
                      )
                    );
                  }
                },
                {
                  key: "doPageLeave",
                  value: function () {
                    var e = this._pageViewData;
                    return i({ $prev_pageview_pathname: null == e ? void 0 : e.pathname }, this._calculatePrevPageScrollProperties(e));
                  }
                },
                {
                  key: "_calculatePrevPageScrollProperties",
                  value: function (e) {
                    if (
                      !e ||
                      null == e.maxScrollHeight ||
                      null == e.lastScrollY ||
                      null == e.maxScrollY ||
                      null == e.maxContentHeight ||
                      null == e.lastContentY ||
                      null == e.maxContentY
                    )
                      return {};
                    var t = e.maxScrollHeight,
                      n = e.lastScrollY,
                      r = e.maxScrollY,
                      o = e.maxContentHeight,
                      i = e.lastContentY,
                      s = e.maxContentY;
                    return (
                      (t = Math.ceil(t)),
                      (n = Math.ceil(n)),
                      (r = Math.ceil(r)),
                      (o = Math.ceil(o)),
                      (i = Math.ceil(i)),
                      (s = Math.ceil(s)),
                      {
                        $prev_pageview_last_scroll: n,
                        $prev_pageview_last_scroll_percentage: t <= 1 ? 1 : Un(n / t, 0, 1),
                        $prev_pageview_max_scroll: r,
                        $prev_pageview_max_scroll_percentage: t <= 1 ? 1 : Un(r / t, 0, 1),
                        $prev_pageview_last_content: i,
                        $prev_pageview_last_content_percentage: o <= 1 ? 1 : Un(i / o, 0, 1),
                        $prev_pageview_max_content: s,
                        $prev_pageview_max_content_percentage: o <= 1 ? 1 : Un(s / o, 0, 1)
                      }
                    );
                  }
                },
                {
                  key: "startMeasuringScrollPosition",
                  value: function () {
                    null == D || D.addEventListener("scroll", this._updateScrollData),
                      null == D || D.addEventListener("scrollend", this._updateScrollData),
                      null == D || D.addEventListener("resize", this._updateScrollData);
                  }
                },
                {
                  key: "stopMeasuringScrollPosition",
                  value: function () {
                    null == D || D.removeEventListener("scroll", this._updateScrollData),
                      null == D || D.removeEventListener("scrollend", this._updateScrollData),
                      null == D || D.removeEventListener("resize", this._updateScrollData);
                  }
                },
                {
                  key: "_scrollHeight",
                  value: function () {
                    return D ? Math.max(0, D.document.documentElement.scrollHeight - D.document.documentElement.clientHeight) : 0;
                  }
                },
                {
                  key: "_scrollY",
                  value: function () {
                    return (D && (D.scrollY || D.pageYOffset || D.document.documentElement.scrollTop)) || 0;
                  }
                },
                {
                  key: "_contentHeight",
                  value: function () {
                    return (null == D ? void 0 : D.document.documentElement.scrollHeight) || 0;
                  }
                },
                {
                  key: "_contentY",
                  value: function () {
                    var e = (null == D ? void 0 : D.document.documentElement.clientHeight) || 0;
                    return this._scrollY() + e;
                  }
                }
              ]),
              e
            );
          })();
        function Un(e, t, n) {
          return Math.max(t, Math.min(e, n));
        }
        var Bn,
          Hn,
          qn,
          Vn = {
            icontains: function (e) {
              return !!D && D.location.href.toLowerCase().indexOf(e.toLowerCase()) > -1;
            },
            regex: function (e) {
              return (
                !!D &&
                (function (e, t) {
                  return (
                    !!(function (e) {
                      try {
                        new RegExp(e);
                      } catch (e) {
                        return !1;
                      }
                      return !0;
                    })(t) && new RegExp(t).test(e)
                  );
                })(D.location.href, e)
              );
            },
            exact: function (e) {
              return (null == D ? void 0 : D.location.href) === e;
            }
          },
          zn = (function () {
            function e(t) {
              a(this, e), (this.instance = t);
            }
            return (
              l(e, [
                {
                  key: "getSurveys",
                  value: function (e) {
                    var t = this,
                      n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                      r = this.instance.get_property(Ne);
                    if (r && !n) return e(r);
                    this.instance._send_request(
                      "".concat(this.instance.config.api_host, "/api/surveys/?token=").concat(this.instance.config.token),
                      {},
                      { method: "GET" },
                      function (n) {
                        var r,
                          o = n.surveys || [];
                        return null === (r = t.instance.persistence) || void 0 === r || r.register(u({}, Ne, o)), e(o);
                      }
                    );
                  }
                },
                {
                  key: "getActiveMatchingSurveys",
                  value: function (e) {
                    var t = this,
                      n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.getSurveys(function (n) {
                      var r = n
                        .filter(function (e) {
                          return !(!e.start_date || e.end_date);
                        })
                        .filter(function (e) {
                          var t, n, r, o;
                          if (!e.conditions) return !0;
                          var i =
                              null === (t = e.conditions) ||
                              void 0 === t ||
                              !t.url ||
                              Vn[
                                null !== (n = null === (r = e.conditions) || void 0 === r ? void 0 : r.urlMatchType) && void 0 !== n
                                  ? n
                                  : "icontains"
                              ](e.conditions.url),
                            s =
                              null === (o = e.conditions) ||
                              void 0 === o ||
                              !o.selector ||
                              (null == U ? void 0 : U.querySelector(e.conditions.selector));
                          return i && s;
                        })
                        .filter(function (e) {
                          if (!e.linked_flag_key && !e.targeting_flag_key) return !0;
                          var n = !e.linked_flag_key || t.instance.featureFlags.isFeatureEnabled(e.linked_flag_key),
                            r = !e.targeting_flag_key || t.instance.featureFlags.isFeatureEnabled(e.targeting_flag_key);
                          return n && r;
                        });
                      return e(r);
                    }, n);
                  }
                }
              ]),
              e
            );
          })(),
          Wn = (function () {
            function e() {
              var t = this;
              a(this, e),
                u(this, "limits", {}),
                u(this, "checkForLimiting", function (e) {
                  try {
                    var n = e.responseText;
                    if (!n || !n.length) return;
                    (JSON.parse(n).quota_limited || []).forEach(function (e) {
                      V.info("[RateLimiter] ".concat(e || "events", " is quota limited.")), (t.limits[e] = new Date().getTime() + 6e4);
                    });
                  } catch (e) {
                    return void V.error(e);
                  }
                });
            }
            return (
              l(e, [
                {
                  key: "isRateLimited",
                  value: function (e) {
                    var t = this.limits[e || "events"] || !1;
                    return !1 !== t && new Date().getTime() < t;
                  }
                }
              ]),
              e
            );
          })(),
          Gn = function () {
            return i(
              { initialPathName: (null == D ? void 0 : D.location.pathname) || "", referringDomain: _t.referringDomain() },
              _t.campaignParams()
            );
          },
          Zn = (function () {
            function e(t, n, r) {
              var o = this;
              a(this, e),
                u(this, "_onSessionIdCallback", function (e) {
                  var t = o._getStoredProps();
                  if (!t || t.sessionId !== e) {
                    var n = { sessionId: e, props: o._sessionSourceParamGenerator() };
                    o._persistence.register(u({}, Be, n));
                  }
                }),
                (this._sessionIdManager = t),
                (this._persistence = n),
                (this._sessionSourceParamGenerator = r || Gn),
                this._sessionIdManager.onSessionId(this._onSessionIdCallback);
            }
            return (
              l(e, [
                {
                  key: "_getStoredProps",
                  value: function () {
                    return this._persistence.props[Be];
                  }
                },
                {
                  key: "getSessionProps",
                  value: function () {
                    var e,
                      t = null === (e = this._getStoredProps()) || void 0 === e ? void 0 : e.props;
                    return t
                      ? {
                          $client_session_initial_referring_host: t.referringDomain,
                          $client_session_initial_pathname: t.initialPathName,
                          $client_session_initial_utm_source: t.utm_source,
                          $client_session_initial_utm_campaign: t.utm_campaign,
                          $client_session_initial_utm_medium: t.utm_medium,
                          $client_session_initial_utm_content: t.utm_content,
                          $client_session_initial_utm_term: t.utm_term
                        }
                      : {};
                  }
                }
              ]),
              e
            );
          })(),
          Jn = [
            "ahrefsbot",
            "applebot",
            "baiduspider",
            "bingbot",
            "bingpreview",
            "bot.htm",
            "bot.php",
            "crawler",
            "duckduckbot",
            "facebookexternal",
            "facebookcatalog",
            "gptbot",
            "hubspot",
            "linkedinbot",
            "mj12bot",
            "petalbot",
            "pinterest",
            "prerender",
            "rogerbot",
            "screaming frog",
            "semrushbot",
            "sitebulb",
            "twitterbot",
            "yahoo! slurp",
            "yandexbot",
            "adsbot-google",
            "apis-google",
            "duplexweb-google",
            "feedfetcher-google",
            "google favicon",
            "google web preview",
            "google-read-aloud",
            "googlebot",
            "googleweblight",
            "mediapartners-google",
            "storebot-google"
          ];
        !(function (e) {
          (e[(e.INIT_MODULE = 0)] = "INIT_MODULE"), (e[(e.INIT_SNIPPET = 1)] = "INIT_SNIPPET");
        })(Bn || (Bn = {}));
        var Yn = function () {},
          Qn = {},
          Xn = "posthog",
          Kn = (null == D ? void 0 : D.XMLHttpRequest) && "withCredentials" in new XMLHttpRequest(),
          er = !Kn && -1 === (null == B ? void 0 : B.indexOf("MSIE")) && -1 === (null == B ? void 0 : B.indexOf("Mozilla")),
          tr = function () {
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
                ((t = null == U ? void 0 : U.location),
                (n = null == t ? void 0 : t.hostname),
                !!j(n) && "herokuapp.com" !== n.split(".").slice(-2).join(".")),
              persistence: "cookie",
              persistence_name: "",
              cookie_name: "",
              loaded: Yn,
              store_google: !0,
              custom_campaign_params: [],
              custom_blocked_useragents: [],
              save_referrer: !0,
              capture_pageview: !0,
              capture_pageleave: !0,
              debug: !1,
              verbose: !1,
              cookie_expiration: 365,
              upgrade: !1,
              disable_session_recording: !1,
              disable_persistence: !1,
              disable_cookie: !1,
              enable_recording_console_log: void 0,
              secure_cookie: "https:" === (null == D || null === (e = D.location) || void 0 === e ? void 0 : e.protocol),
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
              session_recording: {},
              mask_all_element_attributes: !1,
              mask_all_text: !1,
              advanced_disable_decide: !1,
              advanced_disable_feature_flags: !1,
              advanced_disable_feature_flags_on_first_load: !1,
              advanced_disable_toolbar_metrics: !1,
              on_xhr_error: function (e) {
                var t = "Bad HTTP status: " + e.status + " " + e.statusText;
                V.error(t);
              },
              get_device_id: function (e) {
                return e;
              },
              _onCapture: Yn,
              capture_performance: void 0,
              name: "posthog",
              callback_fn: "posthog._jsc",
              bootstrap: {},
              disable_compression: !1,
              session_idle_timeout_seconds: 1800
            };
          },
          nr = function (e, t, n, r) {
            var o,
              i = n !== Xn && qn ? (n ? qn[n] : void 0) : qn,
              s = { initComplete: !1, syncCode: !1 },
              a = function (e) {
                return function (t) {
                  s[e] || ((s[e] = !0), s.initComplete && s.syncCode && (null == r || r(t)));
                };
              };
            if (i && Hn === Bn.INIT_MODULE) o = i;
            else {
              if (i && !C(i)) return void V.error("You have already initialized " + n);
              o = new or();
            }
            return (
              o._init(e, t, n, a("initComplete")),
              o.toolbar.maybeLoadToolbar(),
              (o.sessionRecording = new Rt(o)),
              o.sessionRecording.startRecordingIfEnabled(),
              o.config.__preview_measure_pageview_stats && o.pageViewManager.startMeasuringScrollPosition(),
              (o.__autocapture = o.config.autocapture),
              Ve._setIsAutocaptureEnabled(o),
              Ve._isAutocaptureEnabled &&
                ((o.__autocapture = o.config.autocapture),
                Ve.enabledForProject(o.config.token, 100, 100)
                  ? Ve.isBrowserSupported()
                    ? Ve.init(o)
                    : ((o.__autocapture = !1), V.info("Disabling Automatic Event Collection because this browser is not supported"))
                  : ((o.__autocapture = !1), V.info("Not in active bucket: disabling Automatic Event Collection."))),
              (w.DEBUG = w.DEBUG || o.config.debug),
              !P(i) && C(i) && (o._execute_array.call(o.people, i.people), o._execute_array(i)),
              a("syncCode")(o),
              o
            );
          },
          rr = (function () {
            function e() {
              a(this, e), u(this, "__forceAllowLocalhost", !1);
            }
            return (
              l(e, [
                {
                  key: "_forceAllowLocalhost",
                  get: function () {
                    return this.__forceAllowLocalhost;
                  },
                  set: function (e) {
                    V.error(
                      "WebPerformanceObserver is deprecated and has no impact on network capture. Use `_forceAllowLocalhostNetworkCapture` on `posthog.sessionRecording`"
                    ),
                      (this.__forceAllowLocalhost = e);
                  }
                }
              ]),
              e
            );
          })(),
          or = (function () {
            function e() {
              var t = this;
              a(this, e),
                u(this, "webPerformance", new rr()),
                (this.config = tr()),
                (this.compression = {}),
                (this.decideEndpointWasHit = !1),
                (this.SentryIntegration = Dn),
                (this.segmentIntegration = function () {
                  return (function (e) {
                    (Promise && Promise.resolve) ||
                      V.warn("This browser does not have Promise support, and can not use the segment integration");
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
                (this.analyticsDefaultEndpoint = "/e/"),
                (this.elementsChainAsString = !1),
                (this.featureFlags = new Je(this)),
                (this.toolbar = new Nt(this)),
                (this.pageViewManager = new Fn()),
                (this.surveys = new zn(this)),
                (this.rateLimiter = new Wn()),
                (this.people = {
                  set: function (e, n, r) {
                    var o = j(e) ? u({}, e, n) : e;
                    t.setPersonProperties(o), null == r || r({});
                  },
                  set_once: function (e, n, r) {
                    var o = j(e) ? u({}, e, n) : e;
                    t.setPersonProperties(void 0, o), null == r || r({});
                  }
                });
            }
            return (
              l(e, [
                {
                  key: "init",
                  value: function (e, t, n) {
                    if (P(n)) V.critical("You must name your new library: init(token, config, name)");
                    else {
                      if (n !== Xn) {
                        var r = nr(e, t, n, function (e) {
                          (qn[n] = e), e._loaded();
                        });
                        return (qn[n] = r), r;
                      }
                      V.critical("You must initialize the main posthog object right after you include the PostHog js snippet");
                    }
                  }
                },
                {
                  key: "_init",
                  value: function (e) {
                    var t,
                      n,
                      r,
                      o = this,
                      s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                      a = arguments.length > 2 ? arguments[2] : void 0,
                      c = arguments.length > 3 ? arguments[3] : void 0;
                    (this.__loaded = !0), (this.config = {}), (this._triggered_notifs = []);
                    var l,
                      u = { segmentRegister: !1, syncCode: !1 },
                      d = function (e) {
                        return function () {
                          u[e] || ((u[e] = !0), u.segmentRegister && u.syncCode && (null == c || c(o)));
                        };
                      };
                    if (
                      (this.set_config(J({}, tr(), s, { name: a, token: e, callback_fn: (a === Xn ? a : Xn + "." + a) + "._jsc" })),
                      (this._jsc = function () {}),
                      ((null != D && null !== (t = D.rrweb) && void 0 !== t && t.record) || (null != D && D.rrwebRecord)) &&
                        (this.__loaded_recorder_version = null == D || null === (l = D.rrweb) || void 0 === l ? void 0 : l.version),
                      (this.persistence = new bt(this.config)),
                      (this._requestQueue = new Jt(this._handle_queued_event.bind(this))),
                      (this._retryQueue = new Ln(this.config.on_xhr_error, this.rateLimiter)),
                      (this.__captureHooks = []),
                      (this.__request_queue = []),
                      (this.sessionManager = new Nn(this.config, this.persistence)),
                      (this.sessionPropsManager = new Zn(this.sessionManager, this.persistence)),
                      (this.sessionPersistence =
                        "sessionStorage" === this.config.persistence
                          ? this.persistence
                          : new bt(i(i({}, this.config), {}, { persistence: "sessionStorage" }))),
                      this._gdpr_init(),
                      s.segment
                        ? ((this.config.get_device_id = function () {
                            return s.segment.user().anonymousId();
                          }),
                          s.segment.user().id() &&
                            (this.register({ distinct_id: s.segment.user().id() }), this.persistence.set_user_state("identified")),
                          s.segment.register(this.segmentIntegration()).then(d("segmentRegister")))
                        : d("segmentRegister")(),
                      void 0 !== (null === (n = s.bootstrap) || void 0 === n ? void 0 : n.distinctID))
                    ) {
                      var f,
                        p,
                        h = this.config.get_device_id(nt()),
                        g = null !== (f = s.bootstrap) && void 0 !== f && f.isIdentifiedID ? h : s.bootstrap.distinctID;
                      this.persistence.set_user_state(
                        null !== (p = s.bootstrap) && void 0 !== p && p.isIdentifiedID ? "identified" : "anonymous"
                      ),
                        this.register({ distinct_id: s.bootstrap.distinctID, $device_id: g });
                    }
                    if (this._hasBootstrappedFeatureFlags()) {
                      var v,
                        m,
                        _ = Object.keys((null === (v = s.bootstrap) || void 0 === v ? void 0 : v.featureFlags) || {})
                          .filter(function (e) {
                            var t, n;
                            return !(null === (t = s.bootstrap) || void 0 === t || null === (n = t.featureFlags) || void 0 === n || !n[e]);
                          })
                          .reduce(function (e, t) {
                            var n, r;
                            return (
                              (e[t] =
                                (null === (n = s.bootstrap) || void 0 === n || null === (r = n.featureFlags) || void 0 === r
                                  ? void 0
                                  : r[t]) || !1),
                              e
                            );
                          }, {}),
                        y = Object.keys((null === (m = s.bootstrap) || void 0 === m ? void 0 : m.featureFlagPayloads) || {})
                          .filter(function (e) {
                            return _[e];
                          })
                          .reduce(function (e, t) {
                            var n, r, o, i;
                            return (
                              null !== (n = s.bootstrap) &&
                                void 0 !== n &&
                                null !== (r = n.featureFlagPayloads) &&
                                void 0 !== r &&
                                r[t] &&
                                (e[t] =
                                  null === (o = s.bootstrap) || void 0 === o || null === (i = o.featureFlagPayloads) || void 0 === i
                                    ? void 0
                                    : i[t]),
                              e
                            );
                          }, {});
                      this.featureFlags.receivedFeatureFlags({ featureFlags: _, featureFlagPayloads: y });
                    }
                    if (!this.get_distinct_id()) {
                      var b = this.config.get_device_id(nt());
                      this.register_once({ distinct_id: b, $device_id: b }, ""), this.persistence.set_user_state("anonymous");
                    }
                    null == D ||
                      null === (r = D.addEventListener) ||
                      void 0 === r ||
                      r.call(D, "onpagehide" in self ? "pagehide" : "unload", this._handle_unload.bind(this)),
                      d("syncCode")();
                  }
                },
                {
                  key: "_afterDecideResponse",
                  value: function (e) {
                    var t;
                    if (((this.compression = {}), e.supportedCompression && !this.config.disable_compression)) {
                      var n,
                        r = {},
                        o = b(e.supportedCompression);
                      try {
                        for (o.s(); !(n = o.n()).done; ) r[n.value] = !0;
                      } catch (e) {
                        o.e(e);
                      } finally {
                        o.f();
                      }
                      this.compression = r;
                    }
                    null !== (t = e.analytics) && void 0 !== t && t.endpoint && (this.analyticsDefaultEndpoint = e.analytics.endpoint),
                      e.elementsChainAsString && (this.elementsChainAsString = e.elementsChainAsString);
                  }
                },
                {
                  key: "_loaded",
                  value: function () {
                    var e = this.config.advanced_disable_decide;
                    e || this.featureFlags.setReloadingPaused(!0);
                    try {
                      this.config.loaded(this);
                    } catch (e) {
                      V.critical("`loaded` function failed", e);
                    }
                    this._start_queue_if_opted_in(),
                      this.config.capture_pageview && U && this.capture("$pageview", { title: U.title }, { send_instantly: !0 }),
                      e || (new At(this).call(), this.featureFlags.resetRequestQueue());
                  }
                },
                {
                  key: "_start_queue_if_opted_in",
                  value: function () {
                    var e;
                    this.has_opted_out_capturing() ||
                      (this.config.request_batching && (null === (e = this._requestQueue) || void 0 === e || e.poll()));
                  }
                },
                {
                  key: "_dom_loaded",
                  value: function () {
                    var e = this;
                    this.has_opted_out_capturing() ||
                      G(this.__request_queue, function (t) {
                        e._send_request.apply(e, v(t));
                      }),
                      (this.__request_queue = []),
                      this._start_queue_if_opted_in();
                  }
                },
                {
                  key: "_prepare_callback",
                  value: function (e, t) {
                    if (P(e)) return null;
                    if (Kn)
                      return function (n) {
                        e(n, t);
                      };
                    var n = this._jsc,
                      r = "" + Math.floor(1e8 * Math.random()),
                      o = this.config.callback_fn + "[" + r + "]";
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
                    var e, t;
                    this.config.request_batching
                      ? (this.config.capture_pageview && this.config.capture_pageleave && this.capture("$pageleave"),
                        null === (e = this._requestQueue) || void 0 === e || e.unload(),
                        null === (t = this._retryQueue) || void 0 === t || t.unload())
                      : this.config.capture_pageview &&
                        this.config.capture_pageleave &&
                        this.capture("$pageleave", null, { transport: "sendBeacon" });
                  }
                },
                {
                  key: "_handle_queued_event",
                  value: function (e, t, n) {
                    var r = JSON.stringify(t);
                    this.__compress_and_send_json_request(e, r, n || Qn, Yn);
                  }
                },
                {
                  key: "__compress_and_send_json_request",
                  value: function (e, t, n, r) {
                    var o = (function (e, t, n) {
                        return e === hn.GZipJS
                          ? [Pn(jn(t), { mtime: 0 }), i(i({}, n), {}, { blob: !0, urlQueryArgs: { compression: hn.GZipJS } })]
                          : [{ data: re(t) }, n];
                      })(this.compression[hn.GZipJS] ? hn.GZipJS : hn.Base64, t, n),
                      s = g(o, 2),
                      a = s[0],
                      c = s[1];
                    this._send_request(e, a, c, r);
                  }
                },
                {
                  key: "_send_request",
                  value: function (e, t, n, r) {
                    if (this.__loaded && this._retryQueue && !this.rateLimiter.isRateLimited(n._batchKey))
                      if (er) this.__request_queue.push([e, t, n, r]);
                      else {
                        var o = { method: this.config.api_method, transport: this.config.api_transport, verbose: this.config.verbose };
                        (n = J(o, n || {})), Kn || (n.method = "GET");
                        var s = D && "sendBeacon" in D.navigator && "sendBeacon" === n.transport;
                        if (((e = Rn(e, n.urlQueryArgs || {}, { ip: this.config.ip })), s))
                          try {
                            null == D || D.navigator.sendBeacon(e, An(t, i(i({}, n), {}, { sendBeacon: !0 })));
                          } catch (e) {}
                        else if (Kn || !U)
                          try {
                            Mn({
                              url: e,
                              data: t,
                              headers: this.config.xhr_headers,
                              options: n,
                              callback: r,
                              retriesPerformedSoFar: 0,
                              retryQueue: this._retryQueue,
                              onXHRError: this.config.on_xhr_error,
                              onResponse: this.rateLimiter.checkForLimiting
                            });
                          } catch (e) {
                            V.error(e);
                          }
                        else {
                          var a,
                            c = U.createElement("script");
                          (c.type = "text/javascript"), (c.async = !0), (c.defer = !0), (c.src = e);
                          var l = U.getElementsByTagName("script")[0];
                          null === (a = l.parentNode) || void 0 === a || a.insertBefore(c, l);
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
                    G(e, function (e) {
                      e &&
                        ((t = e[0]),
                        C(t)
                          ? i.push(e)
                          : x(e)
                          ? e.call(n)
                          : C(e) && "alias" === t
                          ? r.push(e)
                          : C(e) && -1 !== t.indexOf("capture") && x(n[t])
                          ? i.push(e)
                          : o.push(e));
                    });
                    var s = function (e, t) {
                      G(
                        e,
                        function (e) {
                          if (C(e[0])) {
                            var n = t;
                            Z(e, function (e) {
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
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Qn;
                    if (!this.__loaded || !this.sessionPersistence || !this._requestQueue) return V.uninitializedWarning("posthog.capture");
                    if (
                      !(function (e) {
                        var t = !1;
                        try {
                          var n = e.config.token,
                            r = e.config.respect_dnt,
                            o = e.config.opt_out_capturing_persistence_type,
                            i = e.config.opt_out_capturing_cookie_prefix || void 0,
                            s = e.config.window;
                          n && (t = Ht(n, { respectDnt: r, persistenceType: o, persistencePrefix: i, window: s }));
                        } catch (e) {
                          V.error("Unexpected error when checking capturing opt-out status: " + e);
                        }
                        return t;
                      })(this)
                    ) {
                      var r = (n = n || Qn).transport;
                      if ((r && (n.transport = r), !P(e) && j(e))) {
                        if (
                          !B ||
                          !(function (e, t) {
                            if (!e) return !1;
                            var n = e.toLowerCase();
                            return Jn.concat(t || []).some(function (e) {
                              var t = e.toLowerCase();
                              return n.includes ? n.includes(t) : -1 !== n.indexOf(t);
                            });
                          })(B, this.config.custom_blocked_useragents)
                        ) {
                          this.sessionPersistence.update_search_keyword(),
                            this.config.store_google && this.sessionPersistence.update_campaign_params(),
                            this.config.save_referrer && this.sessionPersistence.update_referrer_info();
                          var o = { uuid: nt(), event: e, properties: this._calculate_event_properties(e, t || {}) };
                          "$identify" === e && ((o.$set = n.$set), (o.$set_once = n.$set_once)),
                            ((o = (function (e, t) {
                              return (
                                (n = e),
                                (r = function (e, n) {
                                  return n && ne.indexOf(n) > -1 ? e : j(e) && !R(t) ? e.slice(0, t) : e;
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
                                      C(t)
                                        ? ((i = []),
                                          G(t, function (t) {
                                            i.push(e(t));
                                          }))
                                        : ((i = {}),
                                          Z(t, function (t, n) {
                                            o.has(t) || (i[n] = e(t, n));
                                          })),
                                      i);
                                  var i;
                                })(n)
                              );
                              var n, r, o;
                            })(o, n._noTruncate ? null : this.config.properties_string_max_length)).timestamp = n.timestamp || new Date());
                          var s = i(i({}, o.properties.$set), o.$set);
                          (function (e) {
                            if (I(e)) {
                              for (var t in e) if (O.call(e, t)) return !1;
                              return !0;
                            }
                            return !1;
                          })(s) || this.setPersonPropertiesForFlags(s),
                            V.info("send", o);
                          var a = JSON.stringify(o),
                            c = this.config.api_host + (n.endpoint || this.analyticsDefaultEndpoint),
                            l = n !== Qn;
                          return (
                            !this.config.request_batching || (l && !n._batchKey) || n.send_instantly
                              ? this.__compress_and_send_json_request(c, a, n)
                              : this._requestQueue.enqueue(c, o, n),
                            this._invokeCaptureHooks(e, o),
                            o
                          );
                        }
                      } else V.error("No event name provided to posthog.capture");
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
                      Z(this.__captureHooks, function (t) {
                        return t(e);
                      });
                  }
                },
                {
                  key: "_calculate_event_properties",
                  value: function (e, t) {
                    if (!this.persistence || !this.sessionPersistence) return t;
                    var n = this.persistence.remove_event_timer(e),
                      r = i({}, t);
                    if (((r.token = this.config.token), "$snapshot" === e)) {
                      var o = i(i({}, this.persistence.properties()), this.sessionPersistence.properties());
                      return (r.distinct_id = o.distinct_id), r;
                    }
                    var s = _t.properties();
                    if (this.sessionManager) {
                      var a = this.sessionManager.checkAndGetSessionAndWindowId(),
                        c = a.sessionId,
                        l = a.windowId;
                      (r.$session_id = c), (r.$window_id = l);
                    }
                    if (
                      this.sessionPropsManager &&
                      this.config.__preview_send_client_session_params &&
                      ("$pageview" === e || "$pageleave" === e || "$autocapture" === e)
                    ) {
                      var u = this.sessionPropsManager.getSessionProps();
                      r = J(r, u);
                    }
                    if (this.config.__preview_measure_pageview_stats) {
                      var d = {};
                      "$pageview" === e
                        ? (d = this.pageViewManager.doPageView())
                        : "$pageleave" === e && (d = this.pageViewManager.doPageLeave()),
                        (r = J(r, d));
                    }
                    if (("$pageview" === e && U && (r.title = U.title), "$performance_event" === e)) {
                      var f = this.persistence.properties();
                      return (r.distinct_id = f.distinct_id), (r.$current_url = s.$current_url), r;
                    }
                    if (!P(n)) {
                      var p = new Date().getTime() - n;
                      r.$duration = parseFloat((p / 1e3).toFixed(3));
                    }
                    r = J({}, _t.properties(), this.persistence.properties(), this.sessionPersistence.properties(), r);
                    var h = this.config.property_blacklist;
                    C(h)
                      ? Z(h, function (e) {
                          delete r[e];
                        })
                      : V.error("Invalid value for property_blacklist config: " + h);
                    var g = this.config.sanitize_properties;
                    return g && (r = g(r, e)), r;
                  }
                },
                {
                  key: "register",
                  value: function (e, t) {
                    var n;
                    null === (n = this.persistence) || void 0 === n || n.register(e, t);
                  }
                },
                {
                  key: "register_once",
                  value: function (e, t, n) {
                    var r;
                    null === (r = this.persistence) || void 0 === r || r.register_once(e, t, n);
                  }
                },
                {
                  key: "register_for_session",
                  value: function (e) {
                    var t;
                    null === (t = this.sessionPersistence) || void 0 === t || t.register(e);
                  }
                },
                {
                  key: "unregister",
                  value: function (e) {
                    var t;
                    null === (t = this.persistence) || void 0 === t || t.unregister(e);
                  }
                },
                {
                  key: "unregister_for_session",
                  value: function (e) {
                    var t;
                    null === (t = this.sessionPersistence) || void 0 === t || t.unregister(e);
                  }
                },
                {
                  key: "_register_single",
                  value: function (e, t) {
                    this.register(u({}, e, t));
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
                  key: "updateEarlyAccessFeatureEnrollment",
                  value: function (e, t) {
                    this.featureFlags.updateEarlyAccessFeatureEnrollment(e, t);
                  }
                },
                {
                  key: "getEarlyAccessFeatures",
                  value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return this.featureFlags.getEarlyAccessFeatures(e, t);
                  }
                },
                {
                  key: "onFeatureFlags",
                  value: function (e) {
                    return this.featureFlags.onFeatureFlags(e);
                  }
                },
                {
                  key: "onSessionId",
                  value: function (e) {
                    var t, n;
                    return null !== (t = null === (n = this.sessionManager) || void 0 === n ? void 0 : n.onSessionId(e)) && void 0 !== t
                      ? t
                      : function () {};
                  }
                },
                {
                  key: "getSurveys",
                  value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.surveys.getSurveys(e, t);
                  }
                },
                {
                  key: "getActiveMatchingSurveys",
                  value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.surveys.getActiveMatchingSurveys(e, t);
                  }
                },
                {
                  key: "identify",
                  value: function (e, t, n) {
                    if (!this.__loaded || !this.persistence) return V.uninitializedWarning("posthog.identify");
                    if (e) {
                      var r = this.get_distinct_id();
                      if ((this.register({ $user_id: e }), !this.get_property("$device_id"))) {
                        var o = r;
                        this.register_once({ $had_persisted_distinct_id: !0, $device_id: o }, "");
                      }
                      e !== r && e !== this.get_property(Oe) && (this.unregister(Oe), this.register({ distinct_id: e }));
                      var i = "anonymous" === this.persistence.get_user_state();
                      e !== r && i
                        ? (this.persistence.set_user_state("identified"),
                          this.setPersonPropertiesForFlags(t || {}, !1),
                          this.capture("$identify", { distinct_id: e, $anon_distinct_id: r }, { $set: t || {}, $set_once: n || {} }),
                          this.featureFlags.setAnonymousDistinctId(r))
                        : (t || n) && this.setPersonProperties(t, n),
                        e !== r && (this.reloadFeatureFlags(), this.unregister(De));
                    } else V.error("Unique user id has not been set in posthog.identify");
                  }
                },
                {
                  key: "setPersonProperties",
                  value: function (e, t) {
                    (e || t) && (this.setPersonPropertiesForFlags(e || {}), this.capture("$set", { $set: e || {}, $set_once: t || {} }));
                  }
                },
                {
                  key: "group",
                  value: function (e, t, n) {
                    if (e && t) {
                      var r = this.getGroups();
                      r[e] !== t && this.resetGroupPropertiesForFlags(e),
                        this.register({ $groups: i(i({}, r), {}, u({}, e, t)) }),
                        n &&
                          (this.capture("$groupidentify", { $group_type: e, $group_key: t, $group_set: n }),
                          this.setGroupPropertiesForFlags(u({}, e, n))),
                        r[e] === t || n || this.reloadFeatureFlags();
                    } else V.error("posthog.group requires a group type and group key");
                  }
                },
                {
                  key: "resetGroups",
                  value: function () {
                    this.register({ $groups: {} }), this.resetGroupPropertiesForFlags(), this.reloadFeatureFlags();
                  }
                },
                {
                  key: "setPersonPropertiesForFlags",
                  value: function (e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    this.featureFlags.setPersonPropertiesForFlags(e, t);
                  }
                },
                {
                  key: "resetPersonPropertiesForFlags",
                  value: function () {
                    this.featureFlags.resetPersonPropertiesForFlags();
                  }
                },
                {
                  key: "setGroupPropertiesForFlags",
                  value: function (e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    this.featureFlags.setGroupPropertiesForFlags(e, t);
                  }
                },
                {
                  key: "resetGroupPropertiesForFlags",
                  value: function (e) {
                    this.featureFlags.resetGroupPropertiesForFlags(e);
                  }
                },
                {
                  key: "reset",
                  value: function (e) {
                    var t, n, r, o;
                    if (!this.__loaded) return V.uninitializedWarning("posthog.reset");
                    var i = this.get_property("$device_id");
                    null === (t = this.persistence) || void 0 === t || t.clear(),
                      null === (n = this.sessionPersistence) || void 0 === n || n.clear(),
                      null === (r = this.persistence) || void 0 === r || r.set_user_state("anonymous"),
                      null === (o = this.sessionManager) || void 0 === o || o.resetSessionId();
                    var s = this.config.get_device_id(nt());
                    this.register_once({ distinct_id: s, $device_id: e ? s : i }, "");
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
                  key: "get_session_id",
                  value: function () {
                    var e, t;
                    return null !==
                      (e = null === (t = this.sessionManager) || void 0 === t ? void 0 : t.checkAndGetSessionAndWindowId(!0).sessionId) &&
                      void 0 !== e
                      ? e
                      : "";
                  }
                },
                {
                  key: "get_session_replay_url",
                  value: function (e) {
                    if (!this.sessionManager) return "";
                    var t = this.config.ui_host || this.config.api_host,
                      n = this.sessionManager.checkAndGetSessionAndWindowId(!0),
                      r = n.sessionId,
                      o = n.sessionStartTimestamp,
                      i = t + "/replay/" + r;
                    if (null != e && e.withTimestamp && o) {
                      var s,
                        a = null !== (s = e.timestampLookBack) && void 0 !== s ? s : 10;
                      if (!o) return i;
                      var c = Math.max(Math.floor((new Date().getTime() - o) / 1e3) - a, 0);
                      i += "?t=".concat(c);
                    }
                    return i;
                  }
                },
                {
                  key: "alias",
                  value: function (e, t) {
                    return e === this.get_property(ke)
                      ? (V.critical("Attempting to create alias for existing People user - aborting."), -2)
                      : (P(t) && (t = this.get_distinct_id()),
                        e !== t
                          ? (this._register_single(Oe, e), this.capture("$create_alias", { alias: e, distinct_id: t }))
                          : (V.warn("alias matches current distinct_id - skipping api call."), this.identify(e), -1));
                  }
                },
                {
                  key: "set_config",
                  value: function (e) {
                    var t,
                      n,
                      r = i({}, this.config);
                    I(e) &&
                      (J(this.config, e),
                      this.config.persistence_name || (this.config.persistence_name = this.config.cookie_name),
                      this.config.disable_persistence || (this.config.disable_persistence = this.config.disable_cookie),
                      null === (t = this.persistence) || void 0 === t || t.update_config(this.config),
                      null === (n = this.sessionPersistence) || void 0 === n || n.update_config(this.config),
                      at.is_supported() && "true" === at.get("ph_debug") && (this.config.debug = !0),
                      this.config.debug && (w.DEBUG = !0),
                      this.sessionRecording &&
                        !P(e.disable_session_recording) &&
                        r.disable_session_recording !== e.disable_session_recording &&
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
                    return !(null === (e = this.sessionRecording) || void 0 === e || !e.started);
                  }
                },
                {
                  key: "loadToolbar",
                  value: function (e) {
                    return this.toolbar.loadToolbar(e);
                  }
                },
                {
                  key: "get_property",
                  value: function (e) {
                    var t;
                    return null === (t = this.persistence) || void 0 === t ? void 0 : t.props[e];
                  }
                },
                {
                  key: "getSessionProperty",
                  value: function (e) {
                    var t;
                    return null === (t = this.sessionPersistence) || void 0 === t ? void 0 : t.props[e];
                  }
                },
                {
                  key: "toString",
                  value: function () {
                    var e,
                      t = null !== (e = this.config.name) && void 0 !== e ? e : Xn;
                    return t !== Xn && (t = Xn + "." + t), t;
                  }
                },
                {
                  key: "_gdpr_init",
                  value: function () {
                    "localStorage" === this.config.opt_out_capturing_persistence_type &&
                      at.is_supported() &&
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
                          (!this.config.opt_out_capturing_by_default && !it.get("ph_optout")) ||
                          (it.remove("ph_optout"),
                          this.opt_out_capturing({ clear_persistence: this.config.opt_out_persistence_by_default }));
                  }
                },
                {
                  key: "_gdpr_update_persistence",
                  value: function (e) {
                    var t, n, r, o, i;
                    if (e && e.clear_persistence) r = !0;
                    else {
                      if (!e || !e.enable_persistence) return;
                      r = !1;
                    }
                    this.config.disable_persistence ||
                      (null === (t = this.persistence) || void 0 === t ? void 0 : t.disabled) === r ||
                      null === (o = this.persistence) ||
                      void 0 === o ||
                      o.set_disabled(r),
                      this.config.disable_persistence ||
                        (null === (n = this.sessionPersistence) || void 0 === n ? void 0 : n.disabled) === r ||
                        null === (i = this.sessionPersistence) ||
                        void 0 === i ||
                        i.set_disabled(r);
                  }
                },
                {
                  key: "_gdpr_call_func",
                  value: function (e, t) {
                    return (
                      (t = J(
                        {
                          capture: this.capture.bind(this),
                          persistence_type: this.config.opt_out_capturing_persistence_type,
                          cookie_prefix: this.config.opt_out_capturing_cookie_prefix,
                          cookie_expiration: this.config.cookie_expiration,
                          cross_subdomain_cookie: this.config.cross_subdomain_cookie,
                          secure_cookie: this.config.secure_cookie
                        },
                        t || {}
                      )),
                      at.is_supported() || "localStorage" !== t.persistence_type || (t.persistence_type = "cookie"),
                      e(this.config.token, {
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
                    (e = J({ enable_persistence: !0 }, e || {})), this._gdpr_call_func(Ft, e), this._gdpr_update_persistence(e);
                  }
                },
                {
                  key: "opt_out_capturing",
                  value: function (e) {
                    var t = J({ clear_persistence: !0 }, e || {});
                    this._gdpr_call_func(Ut, t), this._gdpr_update_persistence(t);
                  }
                },
                {
                  key: "has_opted_in_capturing",
                  value: function (e) {
                    return this._gdpr_call_func(Bt, e);
                  }
                },
                {
                  key: "has_opted_out_capturing",
                  value: function (e) {
                    return this._gdpr_call_func(Ht, e);
                  }
                },
                {
                  key: "clear_opt_in_out_capturing",
                  value: function (e) {
                    var t = J({ enable_persistence: !0 }, null != e ? e : {});
                    this._gdpr_call_func(qt, t), this._gdpr_update_persistence(t);
                  }
                },
                {
                  key: "debug",
                  value: function (e) {
                    !1 === e
                      ? (null == D || D.console.log("You've disabled debug mode."),
                        localStorage && localStorage.removeItem("ph_debug"),
                        this.set_config({ debug: !1 }))
                      : (null == D ||
                          D.console.log(
                            "You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."
                          ),
                        localStorage && localStorage.setItem("ph_debug", "true"),
                        this.set_config({ debug: !0 }));
                  }
                }
              ]),
              e
            );
          })();
        !(function (e, t) {
          for (var n = 0; n < t.length; n++) e.prototype[t[n]] = ee(e.prototype[t[n]]);
        })(or, ["identify"]);
        var ir,
          sr,
          ar = {};
        !(function (e) {
          (e.Popover = "popover"), (e.API = "api");
        })(ir || (ir = {})),
          (function (e) {
            (e.Open = "open"),
              (e.MultipleChoice = "multiple_choice"),
              (e.SingleChoice = "single_choice"),
              (e.Rating = "rating"),
              (e.Link = "link");
          })(sr || (sr = {}));
        var cr,
          lr =
            ((Hn = Bn.INIT_MODULE),
            ((qn = new or()).init = function (e, t, n) {
              if (n)
                return (
                  qn[n] ||
                    (qn[n] = ar[n] =
                      nr(e || "", t || {}, n, function (e) {
                        (qn[n] = ar[n] = e), e._loaded();
                      })),
                  qn[n]
                );
              var r = qn;
              return (
                ar[Xn]
                  ? (r = ar[Xn])
                  : e &&
                    ((r = nr(e, t || {}, Xn, function (e) {
                      (ar[Xn] = e), e._loaded();
                    })),
                    (ar[Xn] = r)),
                (qn = r),
                Hn === Bn.INIT_SNIPPET && (H[Xn] = qn),
                Z(ar, function (e, t) {
                  t !== Xn && (qn[t] = e);
                }),
                r
              );
            }),
            qn.init(),
            (function () {
              function e() {
                e.done ||
                  ((e.done = !0),
                  (er = !1),
                  Z(ar, function (e) {
                    e._dom_loaded();
                  }));
              }
              null != U && U.addEventListener && ("complete" === U.readyState ? e() : U.addEventListener("DOMContentLoaded", e, !1)),
                D && ie(D, "load", e, !0);
            })(),
            qn),
          ur = n(52713),
          dr = n(80809),
          fr = n(96046),
          pr = n(92729);
        const hr = "analytics:batchEventNames",
          gr = 864e5,
          vr = !!localStorage.getItem("disableAnalytics"),
          mr = (null === (cr = window.m) || void 0 === cr ? void 0 : cr.globals.isProduction) || !1;
        let _r = null;
        class yr {
          constructor(e = {}) {
            this.defaults = e;
          }
          static capture(e, t) {
            Er(e, t);
          }
          static batchCapture(e, t) {
            Sr(e, t);
          }
          static identify() {
            return vr
              ? Promise.resolve()
              : (async function () {
                  const e = m.utils.uuidToByteArray(localStorage.getItem("userId")),
                    t = await crypto.subtle.digest("SHA-256", new Uint8Array(e));
                  return new Uint8Array(t).reduce((e, t) => e + t.toString(16).padStart(2, "0"), "");
                })().then((e) => {
                  e &&
                    (lr.identify(e),
                    (function (e) {
                      if (!localStorage.getItem("posthog:marketingSite:identified")) {
                        function t(e) {
                          "posthog:identified" === e.data &&
                            (localStorage.setItem("posthog:marketingSite:identified", !0), window.removeEventListener("message", t));
                        }
                        window.addEventListener("message", t), wr("distinctId=" + e);
                      }
                    })(e));
                });
          }
          static sendBatchEventsIfNeeded() {
            !(function () {
              let e = localStorage.getObject(hr) || [];
              e.forEach((t) => {
                const n = "analytics:" + dr.Z.toCamelCase(t);
                let { count: r, firstLoad: o, date: i, properties: s } = br(n);
                Date.parse(i) >= Date.parse(m.utils.getDateString()) ||
                  (r > 0 && Er(t, { ...s, $time: Math.round(o / 1e3), count: r }),
                  localStorage.removeItem(n),
                  (e = e.filter((e) => e !== t)));
              }),
                localStorage.setObject(hr, e);
            })();
          }
          static reset() {
            return vr
              ? Promise.resolve()
              : (lr.reset(!0),
                new Promise((e) => {
                  function t(e) {
                    "posthog:reset" === e.data && n();
                  }
                  function n() {
                    window.removeEventListener("message", t), e();
                  }
                  window.addEventListener("message", t), setTimeout(n, 2e3), wr("reset=true");
                }));
          }
          static disableCaptureExceptFeatures(e) {
            _r = e;
          }
          static enableCaptureForAllFeatures() {
            _r = null;
          }
          capture(e, t) {
            Er.call(this, e, Object.assign({}, this.defaults, t));
          }
          batchCapture(e, t) {
            Sr(e, t);
          }
        }
        function br(e) {
          return localStorage.getObject(e) || { date: m.utils.getDateString(), count: 0, firstLoad: Date.now() };
        }
        function wr(e) {
          const t = pr.Ce.MARKETING_SITE;
          let n = document.getElementById("analytics-identify");
          n ||
            ((n = document.createElement("iframe")), n.setAttribute("id", "analytics-identify"), document.documentElement.appendChild(n)),
            n.setAttribute("src", t + "posthog?" + e);
        }
        function Sr(e, t) {
          const n = "analytics:" + dr.Z.toCamelCase(e);
          let r = br(n);
          Date.parse(r.date) < Date.parse(m.utils.getDateString()) &&
            console.warn(
              `This event (${e}) was dated for a previous day and has not been sent. Previous day's data needs to be sent before being captured for today`
            ),
            (r.properties = { ...r.properties, ...t }),
            (r.count += 1),
            localStorage.setObject(n, r);
          const o = localStorage.getObject(hr) || [];
          o.includes(e) || (o.push(e), localStorage.setObject(hr, o));
        }
        async function kr() {
          let { started_trial_ever: e, paid_for_plus_ever: t, nextUpdate: n = 0 } = localStorage.getObject("analyticsSubscription") || {};
          if ("never" !== n && n < Date.now() && localStorage.getItem("token"))
            try {
              const { data: { subscriptionSummary: { trialEnd: n, trialing: o, active: i, subscriptionEnd: s } = {} } = {} } =
                await r.Z.get("user/profile?details=1");
              (e = !!n),
                (t = (!o && i) || !!s),
                localStorage.setObject("analyticsSubscription", {
                  nextUpdate: e && t ? "never" : Date.now() + gr,
                  started_trial_ever: e,
                  paid_for_plus_ever: t
                });
            } catch {
              return {};
            }
          return { started_trial_ever: e, paid_for_plus_ever: t };
        }
        function Or() {
          const [e, t, n] = m.globals.version.split(".").map((e) => parseInt(e));
          let r = {};
          Object.values(fr.Z.experiments).forEach((e) => {
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
        function Er(e, t = {}) {
          vr ||
            (_r && !_r.includes(t.feature)) ||
            (async function () {
              const e = localStorage.getItem("email"),
                t = localStorage.getItem("token"),
                n = dr.Z.getProduct();
              return {
                product: n,
                has_email: !!e && m.isLoggedIn(),
                has_token: !!t,
                is_internal: (null == e ? void 0 : e.includes("@momentumdash.com")) || !1,
                is_admin: ["Team", "Community"].includes(n) && m.models.teamInfo.get("team").userIsAdmin,
                organization_id: ["Team", "Community"].includes(n) ? m.models.teamInfo.get("id") : null,
                ...(await kr()),
                ...Or()
              };
            })().then((n) => {
              !(function (e, t) {
                m.devTools && m.devTools.getFeatureDebug("instrumentation") && console.log("📈 " + e, t);
              })(e, t),
                lr.capture(e, Object.assign({ $set: n, source: "extension", is_paid_event: !1 }, Or(), t));
            });
        }
        vr ||
          Promise.all([
            (async function (e = mr) {
              if (!e) return pr.Ce.POSTHOG_DEV;
              try {
                const e = await (0, ur.Z)("posthog.host");
                if (e) return `https://${e}`;
              } catch (e) {
                console.error(e);
              }
              return pr.Ce.POSTHOG_PROD;
            })(),
            (async function (e = mr) {
              return e
                ? (await (0, ur.Z)("posthog.apiKey").catch(console.error)) || "phc_hzA3aWlsO64mFH1VodQTlYASVMJX0zz26GaiS8D7ye8"
                : "phc_7HcHlSAnyVvP4gAVlt8a9seYpsrDOWxAJK5UOb1KKai";
            })()
          ]).then(([e, t]) => {
            t &&
              e &&
              lr.init(t, {
                api_host: e,
                disable_session_recording: !0,
                autocapture: !1,
                capture_pageview: !1,
                loaded() {
                  yr.identify();
                }
              });
          });
      },
      64438: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => p });
        var r = n(3510),
          o = n(52713),
          i = n(41353);
        const s = r.Z.version,
          a = r.Z.environment,
          c = "extension",
          l = new URL(
            `https://browser-http-intake.logs.datadoghq.com/v1/input/pub18ef9128dd80db1a80dfc3f9180b55b5?ddsource=browser&ddtags=${encodeURIComponent(
              `env:${a},service:${c},version:${s}`
            )}`
          ).toString(),
          u = "chrome" === r.Z.platform;
        class d {
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
              o = { status: r, date: Date.now(), service: c, message: t, _logger: this.name, ...n };
            this.tabId && (o.tabId = this.tabId), await (0, i.Z)({ method: "POST", url: l, data: o });
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
        }
        var f = n(42935);
        class p extends d {
          constructor(...e) {
            super(...e), (this.tabId = f.Z);
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
          Qj: () => l,
          Rx: () => u,
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
          l = {
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
          u = { TOP: "position-top", RIGHT: "position-right", BOTTOM: "position-bottom", LEFT: "position-left" },
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
                Promise.all([n.e(8725), n.e(5757), n.e(3608), n.e(6781)])
                  .then(n.bind(n, 51545))
                  .then(({ useNotesStore: e }) => e().refresh());
              }
            },
            focus: { shouldIgnore: ({ item: e }) => !e.focus },
            links: {
              refresh: () => {
                Promise.all([n.e(1886), n.e(7652)])
                  .then(n.bind(n, 71886))
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
          l = {
            shouldCreate: ({ item: e }) => !e.serverSetId,
            shouldDelete: () => !0,
            refresh: ({ itemType: e }) => r.Z.$emit(e + ":refresh"),
            processItems: ({ items: e, collectionName: t, itemType: n }) => Promise.allSettled(e.map((e) => f(e, n, t))),
            localStorageCollectionName: ({ collectionName: e }) => e
          };
        function u(e, { item: t, collectionName: n, itemType: r, items: o }) {
          var i, s;
          return null !== (i = c[n]) && void 0 !== i && i[e]
            ? c[n][e]({ item: t, items: o })
            : null == l || null === (s = l[e]) || void 0 === s
            ? void 0
            : s.call(l, { item: t, itemType: r, collectionName: n, items: o });
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
                            ((t.changed_props && t.changed_props.length) || u("shouldCreate", { item: t, collectionName: e }))
                        );
                      })(u("localStorageCollectionName", { collectionName: e }));
                    if (!o || !o.length) return g(e, o), void t();
                    u("processItems", { items: o, collectionName: e, itemType: r }).then((i) => {
                      if ((u("refresh", { collectionName: e, itemType: r }), !i.length || i.every((e) => "fulfilled" === e.status)))
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
            if (u("shouldIgnore", { item: e, collectionName: n }))
              return void (function (e, t) {
                (t.ignored = !0), localStorage.setObject(`${e}-${t.id || t.csid}`, t);
              })(n, e);
            if (u("shouldCreate", { item: e, collectionName: n })) await o.Z.post(t, e), p(n, e);
            else if (e.changed_props && e.changed_props.length) {
              const r = {};
              e.changed_props.forEach((t) => (r[t] = e[t])),
                u("beforeUpdate", { item: e, collectionName: n }),
                r.deleted && u("shouldDelete", { item: e, collectionName: n })
                  ? await o.Z.delete(`${t}/${e.id}`)
                  : await o.Z.patch(`${t}/${e.id}`, r),
                p(n, e);
            }
          } catch (t) {
            throw (console.error(t), { id: e.id || e.cid, error: t });
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
        var r = n(63420),
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
        const l = [33, 34, 40, 41, 46, 63, 91, 93, 96, 123, 125, 8220, 8221, 8230],
          u = {
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
              u.clearLocalStorage();
              const e = [u.clearIndexedDb()];
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
              e.classList ? e.classList.add(t) : u.hasClass(e, t) || (e.className += " " + t);
            },
            removeClass: function (e, t) {
              e.classList ? e.classList.remove(t) : (e.className = e.className.replace(new RegExp("\\b" + t + "\\b", "g"), ""));
            },
            setMomentumAuthHeader: function (e) {
              if (
                (localStorage.token && e.setRequestHeader("Authorization", "Bearer " + localStorage.token),
                localStorage.client_uuid && e.setRequestHeader("X-Momentum-ClientId", localStorage.client_uuid),
                e.setRequestHeader("X-Momentum-Version", m.globals.version),
                e.setRequestHeader("X-Momentum-ClientDate", u.getLocalDateTimeString()),
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
                  u.isSafari() &&
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
                !u.isSafari() ||
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
                e && u.setToken(e),
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
                        m.listenToOnce(m.models.customization, "initialized", m.onSettingsInitialized),
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
            hasServiceWorker: () => location.host.includes("localhost:") || (!u.isFirefox() && !u.isSafari()),
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
              return (t = u.isMacOs() ? "Cmd" : u.isLinuxOs() ? "Meta" : "Ctrl"), e && (t = t.toLowerCase()), t;
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
              return !!u.isChromium() && !!chrome.extension;
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
            useAppleAppPayment: () => u.isSafari(),
            getBrowserName: function () {
              return m.globals.platform;
            },
            getBrowserVersion: function () {
              const e = navigator.userAgent.match(new RegExp("rv:([0-9]+)"));
              return e && e.length ? parseInt(e[1]) : 0;
            },
            getBrowser: function () {
              return u.isChromium() ? chrome : browser;
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
              return Error.captureStackTrace(e, u.getStackTrace), e.stack;
            },
            _compareVersions(e, t) {
              (e = e.split(".").map(Number)), (t = t.split(".").map(Number));
              for (let n = 0; n < e.length; n++) {
                if (e[n] > t[n]) return 1;
                if (e[n] < t[n]) return -1;
              }
              return 0;
            },
            currentVersionIsNewerThan: (e) => 1 === u._compareVersions(m.globals.version, e),
            getDateString: function (e) {
              return (
                void 0 === e ? (e = new Date()) : e instanceof Date || (e = new Date(e)),
                e.getHours() < u.mConst("dateRolloverHour") && e.setDate(e.getDate() - 1),
                e.getFullYear().toString() + "-" + u.twoDigit(e.getMonth() + 1) + "-" + u.twoDigit(e.getDate())
              );
            },
            getDayPart: function (e) {
              const t = e.getHours();
              let n;
              return (n = t >= u.mConst("dateRolloverHour") && t < 12 ? "morning" : t >= 12 && t < 17 ? "afternoon" : "evening"), n;
            },
            getDayName: function (e, t) {
              return u.mConst("dayNames" + (t ? "Short" : ""))[e.getDay()];
            },
            getMonthName: function (e, t) {
              return u.mConst("monthNames" + (t ? "Short" : ""))[e.getMonth()];
            },
            getDaysInMonth: function (e, t) {
              return new Date(e, parseInt(t) + 1, 0).getDate();
            },
            dateDiffIntegerDays: function (e, t) {
              const n = new Date(e.valueOf());
              return (new Date(t.valueOf()).setHours(0, 0, 0, 0) - n.setHours(0, 0, 0, 0)) / u.mConst("msPerDay");
            },
            dateIsYesterday: function (e) {
              return -1 === u.dateDiffIntegerDays(m.date(), e);
            },
            dateIsToday: function (e) {
              return 0 === u.dateDiffIntegerDays(m.date(), e);
            },
            dateIsTomorrow: function (e) {
              return 1 === u.dateDiffIntegerDays(m.date(), e);
            },
            dateIsInLast7d: function (e) {
              const t = u.dateDiffIntegerDays(m.date(), e);
              return t > -7 && t <= 0;
            },
            getFriendlyDate: function (e) {
              const t = m.date();
              let n, r, o;
              return (
                (n = e instanceof Date ? e : u.parseIsoDatetime(e)),
                (r = n.getFullYear() === t.getFullYear() ? "" : ", " + n.getFullYear()),
                (o = u.mConst("monthNamesShort")[n.getMonth()] + " " + n.getDate() + r),
                o
              );
            },
            getFriendlyDateTime: function (e) {
              return u.getFriendlyDate(e).replace(",", "") + ", " + u.getHoursMinsStr(e).toLowerCase().replace(" ", "");
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
                (n = u.dateIsTomorrow(e)
                  ? "Tomorrow"
                  : u.dateIsToday(e)
                  ? "Today"
                  : u.dateIsYesterday(e)
                  ? "Yesterday"
                  : u.getMonthName(e, t) + " " + e.getDate()),
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
                  : ((r = ""), (n = u.twoDigit(i))),
                (o = n + ":" + u.twoDigit(e.getMinutes()) + r),
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
                a = u.calcDayMs(r, n) + s;
              let c = Math.floor(a / u.mConst("msPerDay"));
              return 0 !== c && i && (c *= -1), c;
            },
            calcDayMs: function (e, t) {
              let n = e - new Date(e).setHours(0, 0, 0, 0) - t * u.mConst("msPerHour");
              return n < 0 && (n += u.mConst("msPerDay")), n;
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
                (t = u.dateIsToday(e)
                  ? u.formatTime(e)
                  : u.dateIsInLast7d(e)
                  ? u.getDayName(e, !0)
                  : u.getMonthName(e, !0) + " " + e.getDate() + u.formatYearRelative(e)),
                t
              );
            },
            formatTime(e) {
              const t = e.getHours(),
                n = u.twoDigit(e.getMinutes());
              let r;
              return (
                (r = m.models.customization.get("hour12clock")
                  ? (t % 12 || 12) + ":" + n + " " + (t >= 12 ? "PM" : "AM")
                  : u.twoDigit(t) + ":" + n),
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
              return _.contains(l, e.charCodeAt(0));
            },
            endsWithEndPunctuation: function (e) {
              return !!e && u.isEndPunctuationChar(e.slice(-1));
            },
            getEndPunctuationString: function (e) {
              let t,
                n = "";
              for (let r = e.length - 1; r >= 0 && ((t = e.charAt(r)), u.isEndPunctuationChar(t)); r--) n = t + n;
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
                " " !== e && (Object.prototype.hasOwnProperty.call(i, e) ? i[e]++ : (i[e] = 1));
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
              return t === e.length - 1 || u.arrayIndexOutOfBounds(e, t) ? 0 : t + 1;
            },
            getPrevIndex: function (e, t) {
              return 0 === t || u.arrayIndexOutOfBounds(e, t) ? e.length - 1 : t - 1;
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
                (u
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
              let r = u.bottomPosition(e) - u.bottomPosition(t);
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
                }, u.mConst("timeToggleClassTwice"));
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
              u.getBrowser().tabs.create({ url: e });
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
          d = u;
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
        var l = n(42935);
        let u;
        new o.Z("tab.workers"),
          navigator.serviceWorker && i.Z.hasServiceWorker()
            ? ((u = new c()),
              navigator.serviceWorker.register("serviceWorker.js").then(() => {
                navigator.serviceWorker.ready.then(function (e) {
                  function t(n = e.active) {
                    return "activated" === n.state && (u.assignWorker(n), n.removeEventListener("statechange", t), !0);
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
            : (u = new (class extends c {
                constructor() {
                  super(),
                    chrome.runtime.onMessage.addListener((e) => {
                      "bgScriptToTabs" === e.type && e.exemptedTabId !== l.Z && this._onMessage(e);
                    });
                }
                _sendMessage(e) {
                  (e.type = "tabToBgScript"), (e.tabId = l.Z), chrome.runtime.sendMessage(e);
                }
              })());
        const d = u;
        m.dataSync = u;
      },
      52713: (e, t, n) => {
        "use strict";
        n.d(t, { Z: () => l });
        var r = n(41353);
        const o = new (n(99150).ZP)("misc", 1);
        var i = n(3510);
        const s = "https://api.momentumdash.com/";
        let a = null,
          c = null;
        async function l(e) {
          return (
            a ||
              (c
                ? await c
                : ((c = (0, r.Z)({ url: s + "config", headers: { "X-Momentum-Version": i.Z.version } })
                    .then(({ data: e }) => {
                      if (!e) throw "Request for config from API failed";
                      return e;
                    })
                    .catch((e) => (console.error(e), o.get("config").then((e) => e || {})))),
                  (a = await c),
                  a && (await o.set("config", a)))),
            (function (e, t) {
              return t ? t.split(".").reduce((e, t) => (null == e ? void 0 : e[t]), e) : e;
            })(a, e)
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
        function l(e) {
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
        function u(e) {
          return btoa(String.fromCharCode(...new Uint8Array(e)));
        }
        function d(e) {
          return new Uint8Array(Array.from(atob(e)).map((e) => e.charCodeAt())).buffer;
        }
        n.r(t),
          n.d(t, {
            arrayBufferToBase64: () => u,
            base64ToArrayBuffer: () => d,
            camelCaseToReadable: () => a,
            capitalizeFirstLetter: () => s,
            getLocalDateTimeString: () => o,
            parseJwt: () => l,
            singularize: () => c,
            twoDigit: () => r,
            uuidv4: () => i
          });
      },
      56312: (e, t, n) => {
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
      80936: (e, t, n) => {
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
              for (var l = 0; l < e.length; l++) {
                var u = [].concat(e[l]);
                (r && s[u[0]]) ||
                  (void 0 !== i &&
                    (void 0 === u[5] || (u[1] = "@layer".concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {").concat(u[1], "}")),
                    (u[5] = i)),
                  n && (u[2] ? ((u[1] = "@media ".concat(u[2], " {").concat(u[1], "}")), (u[2] = n)) : (u[2] = n)),
                  o && (u[4] ? ((u[1] = "@supports (".concat(u[4], ") {").concat(u[1], "}")), (u[4] = o)) : (u[4] = "".concat(o))),
                  t.push(u));
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
        class l {
          constructor({
            message: e,
            id: t = (0, s.uuidv4)(),
            error: n = !1,
            button: r,
            persist: o = n,
            closeButtonEnabled: i = o,
            contact: l = !!n && c,
            icon: u = n ? a : void 0,
            onDismiss: d
          }) {
            (this.id = t),
              (this.message = e),
              (this.persist = o),
              (this.closeButtonEnabled = i),
              u && (this.icon = u),
              n && (this.error = n),
              r && (this.button = r),
              d && (this.onDismiss = d),
              l && (this.contact = !0 === l ? c : l);
          }
        }
        const u = r.Z,
          d = (0, i.iH)([]);
        function f() {
          return d.value[0];
        }
        function p(e) {
          d.value.push(new l(e));
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
          u.addRecurringCrossTabMessageListener({ msgId: "flashMessage", success: p });
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
            return t && s(t) ? t[i] : null;
          }
          async transaction(e, t) {
            const n = await this.db;
            return new Promise((i, a) => {
              const c = n.transaction([r], e);
              c.onerror = () => a(l.error);
              const l = t(c.objectStore(r));
              l.onsuccess = () => {
                const e = l.result;
                if (
                  !(function (e) {
                    return void 0 === e || "string" == typeof e || s(e);
                  })(e)
                )
                  throw new Error(`Transaction result does not match schema (does not contain a property matching ${o})`);
                i(e);
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
        n.d(t, { Z: () => l, y: () => c });
        var r = n(71257),
          o = n(42935),
          i = n(80809),
          s = n(89608);
        const a = r.default.create({ timeout: 1e5 });
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
            if (r.default.isAxiosError(e)) {
              const { type: n, detail: r } = i.Z.getOptionalNestedProperty(e, "response.data") || {},
                o = i.Z.getOptionalNestedProperty(e, "response.status");
              if ([429, 504].includes(o) && t[429]) return new s.B({ message: t[429] });
              if (n && r) return new s.B({ type: n, message: r });
            }
            return new s.B({ message: t.default });
          },
          l = a;
      },
      3728: (e, t, n) => {
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
          l = a.setup;
        a.setup = l ? (e, t) => (c(), l(e, t)) : c;
        const u = a;
        n(90779);
        const d = (0, n(51900).Z)(u, r, [], !1, null, "0b972818", null).exports;
      },
      51900: (e, t, n) => {
        "use strict";
        function r(e, t, n, r, o, i, s, a) {
          var c,
            l = "function" == typeof e ? e.options : e;
          if (
            (t && ((l.render = t), (l.staticRenderFns = n), (l._compiled = !0)),
            r && (l.functional = !0),
            i && (l._scopeId = "data-v-" + i),
            s
              ? ((c = function (e) {
                  (e =
                    e || (this.$vnode && this.$vnode.ssrContext) || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext)) ||
                    "undefined" == typeof __VUE_SSR_CONTEXT__ ||
                    (e = __VUE_SSR_CONTEXT__),
                    o && o.call(this, e),
                    e && e._registeredComponents && e._registeredComponents.add(s);
                }),
                (l._ssrRegister = c))
              : o &&
                (c = a
                  ? function () {
                      o.call(this, (l.functional ? this.parent : this).$root.$options.shadowRoot);
                    }
                  : o),
            c)
          )
            if (l.functional) {
              l._injectStyles = c;
              var u = l.render;
              l.render = function (e, t) {
                return c.call(t), u(e, t);
              };
            } else {
              var d = l.beforeCreate;
              l.beforeCreate = d ? [].concat(d, c) : [c];
            }
          return { exports: e, options: l };
        }
        n.d(t, { Z: () => r });
      },
      90779: (e, t, n) => {
        var r = n(56312);
        r.__esModule && (r = r.default),
          "string" == typeof r && (r = [[e.id, r, ""]]),
          r.locals && (e.exports = r.locals),
          (0, n(45346).Z)("5d09632d", r, !1, { ssrId: !0 });
      },
      87953: (e, t, n) => {
        var r = n(80936);
        r.__esModule && (r = r.default),
          "string" == typeof r && (r = [[e.id, r, ""]]),
          r.locals && (e.exports = r.locals),
          (0, n(45346).Z)("0bf2b47d", r, !1, { ssrId: !0 });
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
          l = !1,
          u = function () {},
          d = null,
          f = "data-vue-ssr-id",
          p = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
        function h(e, t, n, o) {
          (l = n), (d = o || {});
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
                  for (var l = 0; l < c.parts.length; l++) c.parts[l]();
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
              for (; o < n.parts.length; o++) r.parts.push(m(n.parts[o]));
              r.parts.length > n.parts.length && (r.parts.length = n.parts.length);
            } else {
              var s = [];
              for (o = 0; o < n.parts.length; o++) s.push(m(n.parts[o]));
              i[n.id] = { id: n.id, refs: 1, parts: s };
            }
          }
        }
        function v() {
          var e = document.createElement("style");
          return (e.type = "text/css"), s.appendChild(e), e;
        }
        function m(e) {
          var t,
            n,
            r = document.querySelector("style[" + f + '~="' + e.id + '"]');
          if (r) {
            if (l) return u;
            r.parentNode.removeChild(r);
          }
          if (p) {
            var o = c++;
            (r = a || (a = v())), (t = b.bind(null, r, o, !1)), (n = b.bind(null, r, o, !0));
          } else
            (r = v()),
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
          B: () => at,
          BK: () => Je,
          EB: () => lt,
          FN: () => ue,
          Fl: () => Qe,
          IU: () => He,
          PG: () => Fe,
          SU: () => Ge,
          Vh: () => Ye,
          Xl: () => qe,
          Y3: () => un,
          YP: () => ot,
          ZP: () => Sr,
          aZ: () => hn,
          bv: () => pn,
          dq: () => ze,
          f3: () => ut,
          iH: () => We,
          nZ: () => ct,
          qj: () => $e,
          sj: () => dn,
          t8: () => Ae
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
        function l(e) {
          return "function" == typeof e;
        }
        function u(e) {
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
        function v(e) {
          var t = parseFloat(e);
          return isNaN(t) ? e : t;
        }
        function m(e, t) {
          for (var n = Object.create(null), r = e.split(","), o = 0; o < r.length; o++) n[r[o]] = !0;
          return t
            ? function (e) {
                return n[e.toLowerCase()];
              }
            : function (e) {
                return n[e];
              };
        }
        m("slot,component", !0);
        var _ = m("key,ref,slot,slot-scope,is");
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
          C = /\B([A-Z])/g,
          T = S(function (e) {
            return e.replace(C, "-$1").toLowerCase();
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
        function P(e, t) {
          for (var n in t) e[n] = t[n];
          return e;
        }
        function j(e) {
          for (var t = {}, n = 0; n < e.length; n++) e[n] && P(t, e[n]);
          return t;
        }
        function R(e, t, n) {}
        var A = function (e, t, n) {
            return !1;
          },
          M = function (e) {
            return e;
          };
        function L(e, t) {
          if (e === t) return !0;
          var n = u(e),
            r = u(t);
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
        function $(e, t) {
          for (var n = 0; n < e.length; n++) if (L(e[n], t)) return n;
          return -1;
        }
        function N(e) {
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
            isReservedTag: A,
            isReservedAttr: A,
            isUnknownElement: A,
            getTagNamespace: R,
            parsePlatformTagName: M,
            mustUseProp: A,
            async: !0,
            _lifecycleHooks: B
          };
        function q(e) {
          var t = (e + "").charCodeAt(0);
          return 36 === t || 95 === t;
        }
        function V(e, t, n, r) {
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
          G = "undefined" != typeof window,
          Z = G && window.navigator.userAgent.toLowerCase(),
          J = Z && /msie|trident/.test(Z),
          Y = Z && Z.indexOf("msie 9.0") > 0,
          Q = Z && Z.indexOf("edge/") > 0;
        Z && Z.indexOf("android");
        var X = Z && /iphone|ipad|ipod|ios/.test(Z);
        Z && /chrome\/\d+/.test(Z), Z && /phantomjs/.test(Z);
        var K,
          ee = Z && Z.match(/firefox\/(\d+)/),
          te = {}.watch,
          ne = !1;
        if (G)
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
            return void 0 === K && (K = !G && "undefined" != typeof global && global.process && "server" === global.process.env.VUE_ENV), K;
          },
          ie = G && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
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
        var le = null;
        function ue() {
          return le && { proxy: le };
        }
        function de(e) {
          void 0 === e && (e = null), e || (le && le._scope.off()), (le = e), e && e._scope.on();
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
        var ve = 0,
          me = [],
          _e = function () {
            for (var e = 0; e < me.length; e++) {
              var t = me[e];
              (t.subs = t.subs.filter(function (e) {
                return e;
              })),
                (t._pending = !1);
            }
            me.length = 0;
          },
          ye = (function () {
            function e() {
              (this._pending = !1), (this.id = ve++), (this.subs = []);
            }
            return (
              (e.prototype.addSub = function (e) {
                this.subs.push(e);
              }),
              (e.prototype.removeSub = function (e) {
                (this.subs[this.subs.indexOf(e)] = null), this._pending || ((this._pending = !0), me.push(this));
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
        ye.target = null;
        var be = [];
        function we(e) {
          be.push(e), (ye.target = e);
        }
        function Se() {
          be.pop(), (ye.target = be[be.length - 1]);
        }
        var ke = Array.prototype,
          Oe = Object.create(ke);
        ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (e) {
          var t = ke[e];
          V(Oe, e, function () {
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
        var Ee = Object.getOwnPropertyNames(Oe),
          Ce = {},
          Te = !0;
        function xe(e) {
          Te = e;
        }
        var Ie = { notify: R, depend: R, addSub: R, removeSub: R },
          Pe = (function () {
            function e(e, t, n) {
              if (
                (void 0 === t && (t = !1),
                void 0 === n && (n = !1),
                (this.value = e),
                (this.shallow = t),
                (this.mock = n),
                (this.dep = n ? Ie : new ye()),
                (this.vmCount = 0),
                V(e, "__ob__", this),
                o(e))
              ) {
                if (!n)
                  if (W) e.__proto__ = Oe;
                  else for (var r = 0, i = Ee.length; r < i; r++) V(e, (a = Ee[r]), Oe[a]);
                t || this.observeArray(e);
              } else {
                var s = Object.keys(e);
                for (r = 0; r < s.length; r++) {
                  var a;
                  Re(e, (a = s[r]), Ce, void 0, t, n);
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
          return e && w(e, "__ob__") && e.__ob__ instanceof Pe
            ? e.__ob__
            : !Te || (!n && oe()) || (!o(e) && !f(e)) || !Object.isExtensible(e) || e.__v_skip || ze(e) || e instanceof fe
            ? void 0
            : new Pe(e, t, n);
        }
        function Re(e, t, n, r, i, s) {
          var a = new ye(),
            c = Object.getOwnPropertyDescriptor(e, t);
          if (!c || !1 !== c.configurable) {
            var l = c && c.get,
              u = c && c.set;
            (l && !u) || (n !== Ce && 2 !== arguments.length) || (n = e[t]);
            var d = !i && je(n, !1, s);
            return (
              Object.defineProperty(e, t, {
                enumerable: !0,
                configurable: !0,
                get: function () {
                  var t = l ? l.call(e) : n;
                  return ye.target && (a.depend(), d && (d.dep.depend(), o(t) && Le(t))), ze(t) && !i ? t.value : t;
                },
                set: function (t) {
                  var r = l ? l.call(e) : n;
                  if (D(r, t)) {
                    if (u) u.call(e, t);
                    else {
                      if (l) return;
                      if (!i && ze(r) && !ze(t)) return void (r.value = t);
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
        function Ae(e, t, n) {
          if (!Be(e)) {
            var r = e.__ob__;
            return o(e) && p(t)
              ? ((e.length = Math.max(e.length, t)), e.splice(t, 1, n), r && !r.shallow && r.mock && je(n, !1, !0), n)
              : t in e && !(t in Object.prototype)
              ? ((e[t] = n), n)
              : e._isVue || (r && r.vmCount)
              ? n
              : r
              ? (Re(r.value, t, n, void 0, r.shallow, r.mock), r.dep.notify(), n)
              : ((e[t] = n), n);
          }
        }
        function Me(e, t) {
          if (o(e) && p(t)) e.splice(t, 1);
          else {
            var n = e.__ob__;
            e._isVue || (n && n.vmCount) || Be(e) || (w(e, t) && (delete e[t], n && n.dep.notify()));
          }
        }
        function Le(e) {
          for (var t = void 0, n = 0, r = e.length; n < r; n++) (t = e[n]) && t.__ob__ && t.__ob__.dep.depend(), o(t) && Le(t);
        }
        function $e(e) {
          return De(e, !1), e;
        }
        function Ne(e) {
          return De(e, !0), V(e, "__v_isShallow", !0), e;
        }
        function De(e, t) {
          Be(e) || je(e, t, oe());
        }
        function Fe(e) {
          return Be(e) ? Fe(e.__v_raw) : !(!e || !e.__ob__);
        }
        function Ue(e) {
          return !(!e || !e.__v_isShallow);
        }
        function Be(e) {
          return !(!e || !e.__v_isReadonly);
        }
        function He(e) {
          var t = e && e.__v_raw;
          return t ? He(t) : e;
        }
        function qe(e) {
          return Object.isExtensible(e) && V(e, "__v_skip", !0), e;
        }
        var Ve = "__v_isRef";
        function ze(e) {
          return !(!e || !0 !== e.__v_isRef);
        }
        function We(e) {
          return (function (e, t) {
            if (ze(e)) return e;
            var n = {};
            return V(n, Ve, !0), V(n, "__v_isShallow", t), V(n, "dep", Re(n, "value", e, null, t, oe())), n;
          })(e, !1);
        }
        function Ge(e) {
          return ze(e) ? e.value : e;
        }
        function Ze(e, t, n) {
          Object.defineProperty(e, n, {
            enumerable: !0,
            configurable: !0,
            get: function () {
              var e = t[n];
              if (ze(e)) return e.value;
              var r = e && e.__ob__;
              return r && r.dep.depend(), e;
            },
            set: function (e) {
              var r = t[n];
              ze(r) && !ze(e) ? (r.value = e) : (t[n] = e);
            }
          });
        }
        function Je(e) {
          var t = o(e) ? new Array(e.length) : {};
          for (var n in e) t[n] = Ye(e, n);
          return t;
        }
        function Ye(e, t, n) {
          var r = e[t];
          if (ze(r)) return r;
          var o = {
            get value() {
              var r = e[t];
              return void 0 === r ? n : r;
            },
            set value(n) {
              e[t] = n;
            }
          };
          return V(o, Ve, !0), o;
        }
        function Qe(e, t) {
          var n,
            r,
            o = l(e);
          o ? ((n = e), (r = R)) : ((n = e.get), (r = e.set));
          var i = oe() ? null : new bn(le, n, R, { lazy: !0 }),
            s = {
              effect: i,
              get value() {
                return i ? (i.dirty && i.evaluate(), ye.target && i.depend(), i.value) : n();
              },
              set value(e) {
                r(e);
              }
            };
          return V(s, Ve, !0), V(s, "__v_isReadonly", o), s;
        }
        var Xe,
          Ke = "watcher",
          et = "".concat(Ke, " callback"),
          tt = "".concat(Ke, " getter"),
          nt = "".concat(Ke, " cleanup"),
          rt = {};
        function ot(e, t, n) {
          return it(e, t, n);
        }
        function it(e, t, n) {
          var i = void 0 === n ? r : n,
            s = i.immediate,
            a = i.deep,
            c = i.flush,
            u = void 0 === c ? "pre" : c;
          i.onTrack, i.onTrigger;
          var d,
            f,
            p = le,
            h = function (e, t, n) {
              return void 0 === n && (n = null), Qt(e, null, n, p, t);
            },
            g = !1,
            v = !1;
          if (
            (ze(e)
              ? ((d = function () {
                  return e.value;
                }),
                (g = Ue(e)))
              : Fe(e)
              ? ((d = function () {
                  return e.__ob__.dep.depend(), e;
                }),
                (a = !0))
              : o(e)
              ? ((v = !0),
                (g = e.some(function (e) {
                  return Fe(e) || Ue(e);
                })),
                (d = function () {
                  return e.map(function (e) {
                    return ze(e) ? e.value : Fe(e) ? vn(e) : l(e) ? h(e, tt) : void 0;
                  });
                }))
              : (d = l(e)
                  ? t
                    ? function () {
                        return h(e, tt);
                      }
                    : function () {
                        if (!p || !p._isDestroyed) return f && f(), h(e, Ke, [_]);
                      }
                  : R),
            t && a)
          ) {
            var m = d;
            d = function () {
              return vn(m());
            };
          }
          var _ = function (e) {
            f = y.onStop = function () {
              h(e, nt);
            };
          };
          if (oe()) return (_ = R), t ? s && h(t, et, [d(), v ? [] : void 0, _]) : d(), R;
          var y = new bn(le, d, R, { lazy: !0 });
          y.noRecurse = !t;
          var b = v ? [] : rt;
          return (
            (y.run = function () {
              if (y.active)
                if (t) {
                  var e = y.get();
                  (a ||
                    g ||
                    (v
                      ? e.some(function (e, t) {
                          return D(e, b[t]);
                        })
                      : D(e, b))) &&
                    (f && f(), h(t, et, [e, b === rt ? void 0 : b, _]), (b = e));
                } else y.get();
            }),
            "sync" === u
              ? (y.update = y.run)
              : "post" === u
              ? ((y.post = !0),
                (y.update = function () {
                  return Hn(y);
                }))
              : (y.update = function () {
                  if (p && p === le && !p._isMounted) {
                    var e = p._preWatchers || (p._preWatchers = []);
                    e.indexOf(y) < 0 && e.push(y);
                  } else Hn(y);
                }),
            t
              ? s
                ? y.run()
                : (b = y.get())
              : "post" === u && p
              ? p.$once("hook:mounted", function () {
                  return y.get();
                })
              : y.get(),
            function () {
              y.teardown();
            }
          );
        }
        var st = (function () {
          function e(e) {
            void 0 === e && (e = !1),
              (this.detached = e),
              (this.active = !0),
              (this.effects = []),
              (this.cleanups = []),
              (this.parent = Xe),
              !e && Xe && (this.index = (Xe.scopes || (Xe.scopes = [])).push(this) - 1);
          }
          return (
            (e.prototype.run = function (e) {
              if (this.active) {
                var t = Xe;
                try {
                  return (Xe = this), e();
                } finally {
                  Xe = t;
                }
              }
            }),
            (e.prototype.on = function () {
              Xe = this;
            }),
            (e.prototype.off = function () {
              Xe = this.parent;
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
        function at(e) {
          return new st(e);
        }
        function ct() {
          return Xe;
        }
        function lt(e) {
          Xe && Xe.cleanups.push(e);
        }
        function ut(e, t, n) {
          void 0 === n && (n = !1);
          var r = le;
          if (r) {
            var o = r.$parent && r.$parent._provided;
            if (o && e in o) return o[e];
            if (arguments.length > 1) return n && l(t) ? t.call(r) : t;
          }
        }
        var dt = S(function (e) {
          var t = "&" === e.charAt(0),
            n = "~" === (e = t ? e.slice(1) : e).charAt(0),
            r = "!" === (e = n ? e.slice(1) : e).charAt(0);
          return { name: (e = r ? e.slice(1) : e), once: n, capture: r, passive: t };
        });
        function ft(e, t) {
          function n() {
            var e = n.fns;
            if (!o(e)) return Qt(e, null, arguments, t, "v-on handler");
            for (var r = e.slice(), i = 0; i < r.length; i++) Qt(r[i], null, arguments, t, "v-on handler");
          }
          return (n.fns = e), n;
        }
        function pt(e, t, n, r, o, s) {
          var c, l, u, d;
          for (c in e)
            (l = e[c]),
              (u = t[c]),
              (d = dt(c)),
              i(l) ||
                (i(u)
                  ? (i(l.fns) && (l = e[c] = ft(l, s)),
                    a(d.once) && (l = e[c] = o(d.name, l, d.capture)),
                    n(d.name, l, d.capture, d.passive, d.params))
                  : l !== u && ((u.fns = l), (e[c] = u)));
          for (c in t) i(e[c]) && r((d = dt(c)).name, t[c], d.capture);
        }
        function ht(e, t, n) {
          var r;
          e instanceof fe && (e = e.data.hook || (e.data.hook = {}));
          var o = e[t];
          function c() {
            n.apply(this, arguments), y(r.fns, c);
          }
          i(o) ? (r = ft([c])) : s(o.fns) && a(o.merged) ? (r = o).fns.push(c) : (r = ft([o, c])), (r.merged = !0), (e[t] = r);
        }
        function gt(e, t, n, r, o) {
          if (s(t)) {
            if (w(t, n)) return (e[n] = t[n]), o || delete t[n], !0;
            if (w(t, r)) return (e[n] = t[r]), o || delete t[r], !0;
          }
          return !1;
        }
        function vt(e) {
          return c(e) ? [he(e)] : o(e) ? _t(e) : void 0;
        }
        function mt(e) {
          return s(e) && s(e.text) && !1 === e.isComment;
        }
        function _t(e, t) {
          var n,
            r,
            l,
            u,
            d = [];
          for (n = 0; n < e.length; n++)
            i((r = e[n])) ||
              "boolean" == typeof r ||
              ((u = d[(l = d.length - 1)]),
              o(r)
                ? r.length > 0 &&
                  (mt((r = _t(r, "".concat(t || "", "_").concat(n)))[0]) && mt(u) && ((d[l] = he(u.text + r[0].text)), r.shift()),
                  d.push.apply(d, r))
                : c(r)
                ? mt(u)
                  ? (d[l] = he(u.text + r))
                  : "" !== r && d.push(he(r))
                : mt(r) && mt(u)
                ? (d[l] = he(u.text + r.text))
                : (a(e._isVList) && s(r.tag) && i(r.key) && s(t) && (r.key = "__vlist".concat(t, "_").concat(n, "__")), d.push(r)));
          return d;
        }
        function yt(e, t) {
          var n,
            r,
            i,
            a,
            c = null;
          if (o(e) || "string" == typeof e) for (c = new Array(e.length), n = 0, r = e.length; n < r; n++) c[n] = t(e[n], n);
          else if ("number" == typeof e) for (c = new Array(e), n = 0; n < e; n++) c[n] = t(n + 1, n);
          else if (u(e))
            if (ce && e[Symbol.iterator]) {
              c = [];
              for (var l = e[Symbol.iterator](), d = l.next(); !d.done; ) c.push(t(d.value, c.length)), (d = l.next());
            } else for (i = Object.keys(e), c = new Array(i.length), n = 0, r = i.length; n < r; n++) (a = i[n]), (c[n] = t(e[a], a, n));
          return s(c) || (c = []), (c._isVList = !0), c;
        }
        function bt(e, t, n, r) {
          var o,
            i = this.$scopedSlots[e];
          i ? ((n = n || {}), r && (n = P(P({}, r), n)), (o = i(n) || (l(t) ? t() : t))) : (o = this.$slots[e] || (l(t) ? t() : t));
          var s = n && n.slot;
          return s ? this.$createElement("template", { slot: s }, o) : o;
        }
        function wt(e) {
          return sr(this.$options, "filters", e) || M;
        }
        function St(e, t) {
          return o(e) ? -1 === e.indexOf(t) : e !== t;
        }
        function kt(e, t, n, r, o) {
          var i = H.keyCodes[t] || n;
          return o && r && !H.keyCodes[t] ? St(o, r) : i ? St(i, e) : r ? T(r) !== t : void 0 === e;
        }
        function Ot(e, t, n, r, i) {
          if (n && u(n)) {
            o(n) && (n = j(n));
            var s = void 0,
              a = function (o) {
                if ("class" === o || "style" === o || _(o)) s = e;
                else {
                  var a = e.attrs && e.attrs.type;
                  s = r || H.mustUseProp(t, a, o) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {});
                }
                var c = O(o),
                  l = T(o);
                c in s ||
                  l in s ||
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
        function Et(e, t) {
          var n = this._staticTrees || (this._staticTrees = []),
            r = n[e];
          return (
            (r && !t) ||
              Tt((r = n[e] = this.$options.staticRenderFns[e].call(this._renderProxy, this._c, this)), "__static__".concat(e), !1),
            r
          );
        }
        function Ct(e, t, n) {
          return Tt(e, "__once__".concat(t).concat(n ? "_".concat(n) : ""), !0), e;
        }
        function Tt(e, t, n) {
          if (o(e)) for (var r = 0; r < e.length; r++) e[r] && "string" != typeof e[r] && xt(e[r], "".concat(t, "_").concat(r), n);
          else xt(e, t, n);
        }
        function xt(e, t, n) {
          (e.isStatic = !0), (e.key = t), (e.isOnce = n);
        }
        function It(e, t) {
          if (t && f(t)) {
            var n = (e.on = e.on ? P({}, e.on) : {});
            for (var r in t) {
              var o = n[r],
                i = t[r];
              n[r] = o ? [].concat(o, i) : i;
            }
          }
          return e;
        }
        function Pt(e, t, n, r) {
          t = t || { $stable: !n };
          for (var i = 0; i < e.length; i++) {
            var s = e[i];
            o(s) ? Pt(s, t, n) : s && (s.proxy && (s.fn.proxy = !0), (t[s.key] = s.fn));
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
        function Rt(e, t) {
          return "string" == typeof e ? t + e : e;
        }
        function At(e) {
          (e._o = Ct),
            (e._n = v),
            (e._s = g),
            (e._l = yt),
            (e._t = bt),
            (e._q = L),
            (e._i = $),
            (e._m = Et),
            (e._f = wt),
            (e._k = kt),
            (e._b = Ot),
            (e._v = he),
            (e._e = pe),
            (e._u = Pt),
            (e._g = It),
            (e._d = jt),
            (e._p = Rt);
        }
        function Mt(e, t) {
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
          for (var l in n) n[l].every(Lt) && delete n[l];
          return n;
        }
        function Lt(e) {
          return (e.isComment && !e.asyncFactory) || " " === e.text;
        }
        function $t(e) {
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
            for (var l in ((i = {}), t)) t[l] && "$" !== l[0] && (i[l] = Dt(e, n, l, t[l]));
          } else i = {};
          for (var u in n) u in i || (i[u] = Ft(n, u));
          return t && Object.isExtensible(t) && (t._normalized = i), V(i, "$stable", a), V(i, "$key", c), V(i, "$hasNormal", s), i;
        }
        function Dt(e, t, n, r) {
          var i = function () {
            var t = le;
            de(e);
            var n = arguments.length ? r.apply(null, arguments) : r({}),
              i = (n = n && "object" == typeof n && !o(n) ? [n] : vt(n)) && n[0];
            return de(t), n && (!i || (1 === n.length && i.isComment && !$t(i))) ? void 0 : n;
          };
          return r.proxy && Object.defineProperty(t, n, { get: i, enumerable: !0, configurable: !0 }), i;
        }
        function Ft(e, t) {
          return function () {
            return e[t];
          };
        }
        function Ut(e, t, n, r, o) {
          var i = !1;
          for (var s in t) s in e ? t[s] !== n[s] && (i = !0) : ((i = !0), Bt(e, s, r, o));
          for (var s in e) s in t || ((i = !0), delete e[s]);
          return i;
        }
        function Bt(e, t, n, r) {
          Object.defineProperty(e, t, {
            enumerable: !0,
            configurable: !0,
            get: function () {
              return n[r][t];
            }
          });
        }
        function Ht(e, t) {
          for (var n in t) e[n] = t[n];
          for (var n in e) n in t || delete e[n];
        }
        var qt = null;
        function Vt(e, t) {
          return (e.__esModule || (ce && "Module" === e[Symbol.toStringTag])) && (e = e.default), u(e) ? t.extend(e) : e;
        }
        function zt(e) {
          if (o(e))
            for (var t = 0; t < e.length; t++) {
              var n = e[t];
              if (s(n) && (s(n.componentOptions) || $t(n))) return n;
            }
        }
        var Wt = 1,
          Gt = 2;
        function Zt(e, t, n, r, i, d) {
          return (
            (o(n) || c(n)) && ((i = r), (r = n), (n = void 0)),
            a(d) && (i = Gt),
            (function (e, t, n, r, i) {
              if (s(n) && s(n.__ob__)) return pe();
              if ((s(n) && s(n.is) && (t = n.is), !t)) return pe();
              var a, c;
              if (
                (o(r) && l(r[0]) && (((n = n || {}).scopedSlots = { default: r[0] }), (r.length = 0)),
                i === Gt
                  ? (r = vt(r))
                  : i === Wt &&
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
                    : (n && n.pre) || !s((d = sr(e.$options, "components", t)))
                    ? new fe(t, n, r, void 0, void 0, e)
                    : Yn(d, n, e, r, t));
              } else a = Yn(t, n, e, r);
              return o(a)
                ? a
                : s(a)
                ? (s(c) && Jt(a, c),
                  s(n) &&
                    (function (e) {
                      u(e.style) && vn(e.style), u(e.class) && vn(e.class);
                    })(n),
                  a)
                : pe();
            })(e, t, n, r, i)
          );
        }
        function Jt(e, t, n) {
          if (((e.ns = t), "foreignObject" === e.tag && ((t = void 0), (n = !0)), s(e.children)))
            for (var r = 0, o = e.children.length; r < o; r++) {
              var c = e.children[r];
              s(c.tag) && (i(c.ns) || (a(n) && "svg" !== c.tag)) && Jt(c, t, n);
            }
        }
        function Yt(e, t, n) {
          we();
          try {
            if (t)
              for (var r = t; (r = r.$parent); ) {
                var o = r.$options.errorCaptured;
                if (o)
                  for (var i = 0; i < o.length; i++)
                    try {
                      if (!1 === o[i].call(r, e, t, n)) return;
                    } catch (e) {
                      Xt(e, r, "errorCaptured hook");
                    }
              }
            Xt(e, t, n);
          } finally {
            Se();
          }
        }
        function Qt(e, t, n, r, o) {
          var i;
          try {
            (i = n ? e.apply(t, n) : e.call(t)) &&
              !i._isVue &&
              h(i) &&
              !i._handled &&
              (i.catch(function (e) {
                return Yt(e, r, o + " (Promise/async)");
              }),
              (i._handled = !0));
          } catch (e) {
            Yt(e, r, o);
          }
          return i;
        }
        function Xt(e, t, n) {
          if (H.errorHandler)
            try {
              return H.errorHandler.call(null, e, t, n);
            } catch (t) {
              t !== e && Kt(t);
            }
          Kt(e);
        }
        function Kt(e, t, n) {
          if (!G || "undefined" == typeof console) throw e;
          console.error(e);
        }
        var en,
          tn = !1,
          nn = [],
          rn = !1;
        function on() {
          rn = !1;
          var e = nn.slice(0);
          nn.length = 0;
          for (var t = 0; t < e.length; t++) e[t]();
        }
        if ("undefined" != typeof Promise && se(Promise)) {
          var sn = Promise.resolve();
          (en = function () {
            sn.then(on), X && setTimeout(R);
          }),
            (tn = !0);
        } else if (
          J ||
          "undefined" == typeof MutationObserver ||
          (!se(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString())
        )
          en =
            "undefined" != typeof setImmediate && se(setImmediate)
              ? function () {
                  setImmediate(on);
                }
              : function () {
                  setTimeout(on, 0);
                };
        else {
          var an = 1,
            cn = new MutationObserver(on),
            ln = document.createTextNode(String(an));
          cn.observe(ln, { characterData: !0 }),
            (en = function () {
              (an = (an + 1) % 2), (ln.data = String(an));
            }),
            (tn = !0);
        }
        function un(e, t) {
          var n;
          if (
            (nn.push(function () {
              if (e)
                try {
                  e.call(t);
                } catch (e) {
                  Yt(e, t, "nextTick");
                }
              else n && n(t);
            }),
            rn || ((rn = !0), en()),
            !e && "undefined" != typeof Promise)
          )
            return new Promise(function (e) {
              n = e;
            });
        }
        function dn(e) {
          if (G) {
            var t,
              n = le;
            n &&
              ((t = function () {
                var t = n.$el,
                  r = e(n, n._setupProxy);
                if (t && 1 === t.nodeType) {
                  var o = t.style;
                  for (var i in r) o.setProperty("--".concat(i), r[i]);
                }
              }),
              it(t, null, { flush: "post" }));
          }
        }
        function fn(e) {
          return function (t, n) {
            if ((void 0 === n && (n = le), n))
              return (function (e, t, n) {
                var r = e.$options;
                r[t] = nr(r[t], n);
              })(n, e, t);
          };
        }
        fn("beforeMount");
        var pn = fn("mounted");
        function hn(e) {
          return e;
        }
        fn("beforeUpdate"),
          fn("updated"),
          fn("beforeDestroy"),
          fn("destroyed"),
          fn("activated"),
          fn("deactivated"),
          fn("serverPrefetch"),
          fn("renderTracked"),
          fn("renderTriggered"),
          fn("errorCaptured");
        var gn = new ae();
        function vn(e) {
          return mn(e, gn), gn.clear(), e;
        }
        function mn(e, t) {
          var n,
            r,
            i = o(e);
          if (!((!i && !u(e)) || e.__v_skip || Object.isFrozen(e) || e instanceof fe)) {
            if (e.__ob__) {
              var s = e.__ob__.dep.id;
              if (t.has(s)) return;
              t.add(s);
            }
            if (i) for (n = e.length; n--; ) mn(e[n], t);
            else if (ze(e)) mn(e.value, t);
            else for (n = (r = Object.keys(e)).length; n--; ) mn(e[r[n]], t);
          }
        }
        var _n,
          yn = 0,
          bn = (function () {
            function e(e, t, n, r, o) {
              var i;
              void 0 === (i = Xe && !Xe._vm ? Xe : e ? e._scope : void 0) && (i = Xe),
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
                (this.id = ++yn),
                (this.active = !0),
                (this.post = !1),
                (this.dirty = this.lazy),
                (this.deps = []),
                (this.newDeps = []),
                (this.depIds = new ae()),
                (this.newDepIds = new ae()),
                (this.expression = ""),
                l(t)
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
                    this.getter || (this.getter = R)),
                (this.value = this.lazy ? void 0 : this.get());
            }
            return (
              (e.prototype.get = function () {
                var e;
                we(this);
                var t = this.vm;
                try {
                  e = this.getter.call(t, t);
                } catch (e) {
                  if (!this.user) throw e;
                  Yt(e, t, 'getter for watcher "'.concat(this.expression, '"'));
                } finally {
                  this.deep && vn(e), Se(), this.cleanupDeps();
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
                this.lazy ? (this.dirty = !0) : this.sync ? this.run() : Hn(this);
              }),
              (e.prototype.run = function () {
                if (this.active) {
                  var e = this.get();
                  if (e !== this.value || u(e) || this.deep) {
                    var t = this.value;
                    if (((this.value = e), this.user)) {
                      var n = 'callback for watcher "'.concat(this.expression, '"');
                      Qt(this.cb, this.vm, [e, t], this.vm, n);
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
        function wn(e, t) {
          _n.$on(e, t);
        }
        function Sn(e, t) {
          _n.$off(e, t);
        }
        function kn(e, t) {
          var n = _n;
          return function r() {
            null !== t.apply(null, arguments) && n.$off(e, r);
          };
        }
        function On(e, t, n) {
          (_n = e), pt(t, n || {}, wn, Sn, kn, e), (_n = void 0);
        }
        var En = null;
        function Cn(e) {
          var t = En;
          return (
            (En = e),
            function () {
              En = t;
            }
          );
        }
        function Tn(e) {
          for (; e && (e = e.$parent); ) if (e._inactive) return !0;
          return !1;
        }
        function xn(e, t) {
          if (t) {
            if (((e._directInactive = !1), Tn(e))) return;
          } else if (e._directInactive) return;
          if (e._inactive || null === e._inactive) {
            e._inactive = !1;
            for (var n = 0; n < e.$children.length; n++) xn(e.$children[n]);
            Pn(e, "activated");
          }
        }
        function In(e, t) {
          if (!((t && ((e._directInactive = !0), Tn(e))) || e._inactive)) {
            e._inactive = !0;
            for (var n = 0; n < e.$children.length; n++) In(e.$children[n]);
            Pn(e, "deactivated");
          }
        }
        function Pn(e, t, n, r) {
          void 0 === r && (r = !0), we();
          var o = le;
          r && de(e);
          var i = e.$options[t],
            s = "".concat(t, " hook");
          if (i) for (var a = 0, c = i.length; a < c; a++) Qt(i[a], e, n || null, e, s);
          e._hasHookEvent && e.$emit("hook:" + t), r && de(o), Se();
        }
        var jn = [],
          Rn = [],
          An = {},
          Mn = !1,
          Ln = !1,
          $n = 0,
          Nn = 0,
          Dn = Date.now;
        if (G && !J) {
          var Fn = window.performance;
          Fn &&
            "function" == typeof Fn.now &&
            Dn() > document.createEvent("Event").timeStamp &&
            (Dn = function () {
              return Fn.now();
            });
        }
        var Un = function (e, t) {
          if (e.post) {
            if (!t.post) return 1;
          } else if (t.post) return -1;
          return e.id - t.id;
        };
        function Bn() {
          var e, t;
          for (Nn = Dn(), Ln = !0, jn.sort(Un), $n = 0; $n < jn.length; $n++)
            (e = jn[$n]).before && e.before(), (t = e.id), (An[t] = null), e.run();
          var n = Rn.slice(),
            r = jn.slice();
          ($n = jn.length = Rn.length = 0),
            (An = {}),
            (Mn = Ln = !1),
            (function (e) {
              for (var t = 0; t < e.length; t++) (e[t]._inactive = !0), xn(e[t], !0);
            })(n),
            (function (e) {
              for (var t = e.length; t--; ) {
                var n = e[t],
                  r = n.vm;
                r && r._watcher === n && r._isMounted && !r._isDestroyed && Pn(r, "updated");
              }
            })(r),
            _e(),
            ie && H.devtools && ie.emit("flush");
        }
        function Hn(e) {
          var t = e.id;
          if (null == An[t] && (e !== ye.target || !e.noRecurse)) {
            if (((An[t] = !0), Ln)) {
              for (var n = jn.length - 1; n > $n && jn[n].id > e.id; ) n--;
              jn.splice(n + 1, 0, e);
            } else jn.push(e);
            Mn || ((Mn = !0), un(Bn));
          }
        }
        function qn(e, t) {
          if (e) {
            for (var n = Object.create(null), r = ce ? Reflect.ownKeys(e) : Object.keys(e), o = 0; o < r.length; o++) {
              var i = r[o];
              if ("__ob__" !== i) {
                var s = e[i].from;
                if (s in t._provided) n[i] = t._provided[s];
                else if ("default" in e[i]) {
                  var a = e[i].default;
                  n[i] = l(a) ? a.call(t) : a;
                }
              }
            }
            return n;
          }
        }
        function Vn(e, t, n, i, s) {
          var c,
            l = this,
            u = s.options;
          w(i, "_uid") ? ((c = Object.create(i))._original = i) : ((c = i), (i = i._original));
          var d = a(u._compiled),
            f = !d;
          (this.data = e),
            (this.props = t),
            (this.children = n),
            (this.parent = i),
            (this.listeners = e.on || r),
            (this.injections = qn(u.inject, i)),
            (this.slots = function () {
              return l.$slots || Nt(i, e.scopedSlots, (l.$slots = Mt(n, i))), l.$slots;
            }),
            Object.defineProperty(this, "scopedSlots", {
              enumerable: !0,
              get: function () {
                return Nt(i, e.scopedSlots, this.slots());
              }
            }),
            d && ((this.$options = u), (this.$slots = this.slots()), (this.$scopedSlots = Nt(i, e.scopedSlots, this.$slots))),
            u._scopeId
              ? (this._c = function (e, t, n, r) {
                  var s = Zt(c, e, t, n, r, f);
                  return s && !o(s) && ((s.fnScopeId = u._scopeId), (s.fnContext = i)), s;
                })
              : (this._c = function (e, t, n, r) {
                  return Zt(c, e, t, n, r, f);
                });
        }
        function zn(e, t, n, r, o) {
          var i = ge(e);
          return (i.fnContext = n), (i.fnOptions = r), t.slot && ((i.data || (i.data = {})).slot = t.slot), i;
        }
        function Wn(e, t) {
          for (var n in t) e[O(n)] = t[n];
        }
        function Gn(e) {
          return e.name || e.__name || e._componentTag;
        }
        At(Vn.prototype);
        var Zn = {
            init: function (e, t) {
              if (e.componentInstance && !e.componentInstance._isDestroyed && e.data.keepAlive) {
                var n = e;
                Zn.prepatch(n, n);
              } else
                (e.componentInstance = (function (e, t) {
                  var n = { _isComponent: !0, _parentVnode: e, parent: t },
                    r = e.data.inlineTemplate;
                  return s(r) && ((n.render = r.render), (n.staticRenderFns = r.staticRenderFns)), new e.componentOptions.Ctor(n);
                })(e, En)).$mount(t ? e.elm : void 0, t);
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
                  l = !!(i || e.$options._renderChildren || c),
                  u = e.$vnode;
                (e.$options._parentVnode = o), (e.$vnode = o), e._vnode && (e._vnode.parent = o), (e.$options._renderChildren = i);
                var d = o.data.attrs || r;
                e._attrsProxy && Ut(e._attrsProxy, d, (u.data && u.data.attrs) || r, e, "$attrs") && (l = !0), (e.$attrs = d), (n = n || r);
                var f = e.$options._parentListeners;
                if (
                  (e._listenersProxy && Ut(e._listenersProxy, n, f || r, e, "$listeners"),
                  (e.$listeners = e.$options._parentListeners = n),
                  On(e, n, f),
                  t && e.$options.props)
                ) {
                  xe(!1);
                  for (var p = e._props, h = e.$options._propKeys || [], g = 0; g < h.length; g++) {
                    var v = h[g],
                      m = e.$options.props;
                    p[v] = ar(v, m, t, e);
                  }
                  xe(!0), (e.$options.propsData = t);
                }
                l && ((e.$slots = Mt(i, o.context)), e.$forceUpdate());
              })((t.componentInstance = e.componentInstance), n.propsData, n.listeners, t, n.children);
            },
            insert: function (e) {
              var t,
                n = e.context,
                r = e.componentInstance;
              r._isMounted || ((r._isMounted = !0), Pn(r, "mounted")),
                e.data.keepAlive && (n._isMounted ? (((t = r)._inactive = !1), Rn.push(t)) : xn(r, !0));
            },
            destroy: function (e) {
              var t = e.componentInstance;
              t._isDestroyed || (e.data.keepAlive ? In(t, !0) : t.$destroy());
            }
          },
          Jn = Object.keys(Zn);
        function Yn(e, t, n, c, l) {
          if (!i(e)) {
            var d = n.$options._base;
            if ((u(e) && (e = d.extend(e)), "function" == typeof e)) {
              var f;
              if (
                i(e.cid) &&
                ((e = (function (e, t) {
                  if (a(e.error) && s(e.errorComp)) return e.errorComp;
                  if (s(e.resolved)) return e.resolved;
                  var n = qt;
                  if ((n && s(e.owners) && -1 === e.owners.indexOf(n) && e.owners.push(n), a(e.loading) && s(e.loadingComp)))
                    return e.loadingComp;
                  if (n && !s(e.owners)) {
                    var r = (e.owners = [n]),
                      o = !0,
                      c = null,
                      l = null;
                    n.$on("hook:destroyed", function () {
                      return y(r, n);
                    });
                    var d = function (e) {
                        for (var t = 0, n = r.length; t < n; t++) r[t].$forceUpdate();
                        e && ((r.length = 0), null !== c && (clearTimeout(c), (c = null)), null !== l && (clearTimeout(l), (l = null)));
                      },
                      f = N(function (n) {
                        (e.resolved = Vt(n, t)), o ? (r.length = 0) : d(!0);
                      }),
                      p = N(function (t) {
                        s(e.errorComp) && ((e.error = !0), d(!0));
                      }),
                      g = e(f, p);
                    return (
                      u(g) &&
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
                              (l = setTimeout(function () {
                                (l = null), i(e.resolved) && p(null);
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
                })(f, t, n, c, l);
              (t = t || {}),
                wr(e),
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
                    for (var l in r) {
                      var u = T(l);
                      gt(o, c, l, u, !0) || gt(o, a, l, u, !1);
                    }
                  return o;
                }
              })(t, e);
              if (a(e.options.functional))
                return (function (e, t, n, i, a) {
                  var c = e.options,
                    l = {},
                    u = c.props;
                  if (s(u)) for (var d in u) l[d] = ar(d, u, t || r);
                  else s(n.attrs) && Wn(l, n.attrs), s(n.props) && Wn(l, n.props);
                  var f = new Vn(n, l, a, i, e),
                    p = c.render.call(null, f._c, f);
                  if (p instanceof fe) return zn(p, n, f.parent, c);
                  if (o(p)) {
                    for (var h = vt(p) || [], g = new Array(h.length), v = 0; v < h.length; v++) g[v] = zn(h[v], n, f.parent, c);
                    return g;
                  }
                })(e, p, t, n, c);
              var g = t.on;
              if (((t.on = t.nativeOn), a(e.options.abstract))) {
                var v = t.slot;
                (t = {}), v && (t.slot = v);
              }
              !(function (e) {
                for (var t = e.hook || (e.hook = {}), n = 0; n < Jn.length; n++) {
                  var r = Jn[n],
                    o = t[r],
                    i = Zn[r];
                  o === i || (o && o._merged) || (t[r] = o ? Qn(i, o) : i);
                }
              })(t);
              var m = Gn(e.options) || l;
              return new fe(
                "vue-component-".concat(e.cid).concat(m ? "-".concat(m) : ""),
                t,
                void 0,
                void 0,
                void 0,
                n,
                { Ctor: e, propsData: p, listeners: g, tag: l, children: c },
                f
              );
            }
          }
        }
        function Qn(e, t) {
          var n = function (n, r) {
            e(n, r), t(n, r);
          };
          return (n._merged = !0), n;
        }
        var Xn = R,
          Kn = H.optionMergeStrategies;
        function er(e, t, n) {
          if ((void 0 === n && (n = !0), !t)) return e;
          for (var r, o, i, s = ce ? Reflect.ownKeys(t) : Object.keys(t), a = 0; a < s.length; a++)
            "__ob__" !== (r = s[a]) && ((o = e[r]), (i = t[r]), n && w(e, r) ? o !== i && f(o) && f(i) && er(o, i) : Ae(e, r, i));
          return e;
        }
        function tr(e, t, n) {
          return n
            ? function () {
                var r = l(t) ? t.call(n, n) : t,
                  o = l(e) ? e.call(n, n) : e;
                return r ? er(r, o) : o;
              }
            : t
            ? e
              ? function () {
                  return er(l(t) ? t.call(this, this) : t, l(e) ? e.call(this, this) : e);
                }
              : t
            : e;
        }
        function nr(e, t) {
          var n = t ? (e ? e.concat(t) : o(t) ? t : [t]) : e;
          return n
            ? (function (e) {
                for (var t = [], n = 0; n < e.length; n++) -1 === t.indexOf(e[n]) && t.push(e[n]);
                return t;
              })(n)
            : n;
        }
        function rr(e, t, n, r) {
          var o = Object.create(e || null);
          return t ? P(o, t) : o;
        }
        (Kn.data = function (e, t, n) {
          return n ? tr(e, t, n) : t && "function" != typeof t ? e : tr(e, t);
        }),
          B.forEach(function (e) {
            Kn[e] = nr;
          }),
          U.forEach(function (e) {
            Kn[e + "s"] = rr;
          }),
          (Kn.watch = function (e, t, n, r) {
            if ((e === te && (e = void 0), t === te && (t = void 0), !t)) return Object.create(e || null);
            if (!e) return t;
            var i = {};
            for (var s in (P(i, e), t)) {
              var a = i[s],
                c = t[s];
              a && !o(a) && (a = [a]), (i[s] = a ? a.concat(c) : o(c) ? c : [c]);
            }
            return i;
          }),
          (Kn.props =
            Kn.methods =
            Kn.inject =
            Kn.computed =
              function (e, t, n, r) {
                if (!e) return t;
                var o = Object.create(null);
                return P(o, e), t && P(o, t), o;
              }),
          (Kn.provide = function (e, t) {
            return e
              ? function () {
                  var n = Object.create(null);
                  return er(n, l(e) ? e.call(this) : e), t && er(n, l(t) ? t.call(this) : t, !1), n;
                }
              : t;
          });
        var or = function (e, t) {
          return void 0 === t ? e : t;
        };
        function ir(e, t, n) {
          if (
            (l(t) && (t = t.options),
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
                    r[s] = f(a) ? P({ from: s }, a) : { from: a };
                  }
              }
            })(t),
            (function (e) {
              var t = e.directives;
              if (t)
                for (var n in t) {
                  var r = t[n];
                  l(r) && (t[n] = { bind: r, update: r });
                }
            })(t),
            !t._base && (t.extends && (e = ir(e, t.extends, n)), t.mixins))
          )
            for (var r = 0, i = t.mixins.length; r < i; r++) e = ir(e, t.mixins[r], n);
          var s,
            a = {};
          for (s in e) c(s);
          for (s in t) w(e, s) || c(s);
          function c(r) {
            var o = Kn[r] || or;
            a[r] = o(e[r], t[r], n, r);
          }
          return a;
        }
        function sr(e, t, n, r) {
          if ("string" == typeof n) {
            var o = e[t];
            if (w(o, n)) return o[n];
            var i = O(n);
            if (w(o, i)) return o[i];
            var s = E(i);
            return w(o, s) ? o[s] : o[n] || o[i] || o[s];
          }
        }
        function ar(e, t, n, r) {
          var o = t[e],
            i = !w(n, e),
            s = n[e],
            a = dr(Boolean, o.type);
          if (a > -1)
            if (i && !w(o, "default")) s = !1;
            else if ("" === s || s === T(e)) {
              var c = dr(String, o.type);
              (c < 0 || a < c) && (s = !0);
            }
          if (void 0 === s) {
            s = (function (e, t, n) {
              if (w(t, "default")) {
                var r = t.default;
                return e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n]
                  ? e._props[n]
                  : l(r) && "Function" !== lr(t.type)
                  ? r.call(e)
                  : r;
              }
            })(r, o, e);
            var u = Te;
            xe(!0), je(s), xe(u);
          }
          return s;
        }
        var cr = /^\s*function (\w+)/;
        function lr(e) {
          var t = e && e.toString().match(cr);
          return t ? t[1] : "";
        }
        function ur(e, t) {
          return lr(e) === lr(t);
        }
        function dr(e, t) {
          if (!o(t)) return ur(t, e) ? 0 : -1;
          for (var n = 0, r = t.length; n < r; n++) if (ur(t[n], e)) return n;
          return -1;
        }
        var fr = { enumerable: !0, configurable: !0, get: R, set: R };
        function pr(e, t, n) {
          (fr.get = function () {
            return this[t][n];
          }),
            (fr.set = function (e) {
              this[t][n] = e;
            }),
            Object.defineProperty(e, n, fr);
        }
        function hr(e) {
          var t = e.$options;
          if (
            (t.props &&
              (function (e, t) {
                var n = e.$options.propsData || {},
                  r = (e._props = Ne({})),
                  o = (e.$options._propKeys = []);
                !e.$parent || xe(!1);
                var i = function (i) {
                  o.push(i);
                  var s = ar(i, t, n, e);
                  Re(r, i, s), i in e || pr(e, "_props", i);
                };
                for (var s in t) i(s);
                xe(!0);
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
                        V(t, "_v_attr_proxy", !0), Ut(t, e.$attrs, r, e, "$attrs");
                      }
                      return e._attrsProxy;
                    },
                    get listeners() {
                      return e._listenersProxy || Ut((e._listenersProxy = {}), e.$listeners, r, e, "$listeners"), e._listenersProxy;
                    },
                    get slots() {
                      return (function (e) {
                        return e._slotsProxy || Ht((e._slotsProxy = {}), e.$scopedSlots), e._slotsProxy;
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
                de(e), we();
                var i = Qt(n, null, [e._props || Ne({}), o], e, "setup");
                if ((Se(), de(), l(i))) t.render = i;
                else if (u(i))
                  if (((e._setupState = i), i.__sfc)) {
                    var s = (e._setupProxy = {});
                    for (var a in i) "__sfc" !== a && Ze(s, i, a);
                  } else for (var a in i) q(a) || Ze(e, i, a);
              }
            })(e),
            t.methods &&
              (function (e, t) {
                for (var n in (e.$options.props, t)) e[n] = "function" != typeof t[n] ? R : x(t[n], e);
              })(e, t.methods),
            t.data)
          )
            !(function (e) {
              var t = e.$options.data;
              f(
                (t = e._data =
                  l(t)
                    ? (function (e, t) {
                        we();
                        try {
                          return e.call(t, t);
                        } catch (e) {
                          return Yt(e, t, "data()"), {};
                        } finally {
                          Se();
                        }
                      })(t, e)
                    : t || {})
              ) || (t = {});
              for (var n = Object.keys(t), r = e.$options.props, o = (e.$options.methods, n.length); o--; ) {
                var i = n[o];
                (r && w(r, i)) || q(i) || pr(e, "_data", i);
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
                  s = l(i) ? i : i.get;
                r || (n[o] = new bn(e, s || R, R, gr)), o in e || vr(e, o, i);
              }
            })(e, t.computed),
            t.watch &&
              t.watch !== te &&
              (function (e, t) {
                for (var n in t) {
                  var r = t[n];
                  if (o(r)) for (var i = 0; i < r.length; i++) yr(e, n, r[i]);
                  else yr(e, n, r);
                }
              })(e, t.watch);
        }
        var gr = { lazy: !0 };
        function vr(e, t, n) {
          var r = !oe();
          l(n)
            ? ((fr.get = r ? mr(t) : _r(n)), (fr.set = R))
            : ((fr.get = n.get ? (r && !1 !== n.cache ? mr(t) : _r(n.get)) : R), (fr.set = n.set || R)),
            Object.defineProperty(e, t, fr);
        }
        function mr(e) {
          return function () {
            var t = this._computedWatchers && this._computedWatchers[e];
            if (t) return t.dirty && t.evaluate(), ye.target && t.depend(), t.value;
          };
        }
        function _r(e) {
          return function () {
            return e.call(this, this);
          };
        }
        function yr(e, t, n, r) {
          return f(n) && ((r = n), (n = n.handler)), "string" == typeof n && (n = e[n]), e.$watch(t, n, r);
        }
        var br = 0;
        function wr(e) {
          var t = e.options;
          if (e.super) {
            var n = wr(e.super);
            if (n !== e.superOptions) {
              e.superOptions = n;
              var r = (function (e) {
                var t,
                  n = e.options,
                  r = e.sealedOptions;
                for (var o in n) n[o] !== r[o] && (t || (t = {}), (t[o] = n[o]));
                return t;
              })(e);
              r && P(e.extendOptions, r), (t = e.options = ir(n, e.extendOptions)).name && (t.components[t.name] = e);
            }
          }
          return t;
        }
        function Sr(e) {
          this._init(e);
        }
        function kr(e) {
          return e && (Gn(e.Ctor.options) || e.tag);
        }
        function Or(e, t) {
          return o(e)
            ? e.indexOf(t) > -1
            : "string" == typeof e
            ? e.split(",").indexOf(t) > -1
            : ((n = e), !("[object RegExp]" !== d.call(n)) && e.test(t));
          var n;
        }
        function Er(e, t) {
          var n = e.cache,
            r = e.keys,
            o = e._vnode;
          for (var i in n) {
            var s = n[i];
            if (s) {
              var a = s.name;
              a && !t(a) && Cr(n, i, r, o);
            }
          }
        }
        function Cr(e, t, n, r) {
          var o = e[t];
          !o || (r && o.tag === r.tag) || o.componentInstance.$destroy(), (e[t] = null), y(n, t);
        }
        !(function (e) {
          e.prototype._init = function (e) {
            var t = this;
            (t._uid = br++),
              (t._isVue = !0),
              (t.__v_skip = !0),
              (t._scope = new st(!0)),
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
                : (t.$options = ir(wr(t.constructor), e || {}, t)),
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
                t && On(e, t);
              })(t),
              (function (e) {
                (e._vnode = null), (e._staticTrees = null);
                var t = e.$options,
                  n = (e.$vnode = t._parentVnode),
                  o = n && n.context;
                (e.$slots = Mt(t._renderChildren, o)),
                  (e.$scopedSlots = n ? Nt(e.$parent, n.data.scopedSlots, e.$slots) : r),
                  (e._c = function (t, n, r, o) {
                    return Zt(e, t, n, r, o, !1);
                  }),
                  (e.$createElement = function (t, n, r, o) {
                    return Zt(e, t, n, r, o, !0);
                  });
                var i = n && n.data;
                Re(e, "$attrs", (i && i.attrs) || r, null, !0), Re(e, "$listeners", t._parentListeners || r, null, !0);
              })(t),
              Pn(t, "beforeCreate", void 0, !1),
              (function (e) {
                var t = qn(e.$options.inject, e);
                t &&
                  (xe(!1),
                  Object.keys(t).forEach(function (n) {
                    Re(e, n, t[n]);
                  }),
                  xe(!0));
              })(t),
              hr(t),
              (function (e) {
                var t = e.$options.provide;
                if (t) {
                  var n = l(t) ? t.call(e) : t;
                  if (!u(n)) return;
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
              Pn(t, "created"),
              t.$options.el && t.$mount(t.$options.el);
          };
        })(Sr),
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
              (e.prototype.$set = Ae),
              (e.prototype.$delete = Me),
              (e.prototype.$watch = function (e, t, n) {
                var r = this;
                if (f(t)) return yr(r, e, t, n);
                (n = n || {}).user = !0;
                var o = new bn(r, e, t, n);
                if (n.immediate) {
                  var i = 'callback for immediate watcher "'.concat(o.expression, '"');
                  we(), Qt(t, r, [o.value], r, i), Se();
                }
                return function () {
                  o.teardown();
                };
              });
          })(Sr),
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
                    Qt(n[i], t, r, t, o);
                }
                return t;
              });
          })(Sr),
          (function (e) {
            (e.prototype._update = function (e, t) {
              var n = this,
                r = n.$el,
                o = n._vnode,
                i = Cn(n);
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
                  Pn(e, "beforeDestroy"), (e._isBeingDestroyed = !0);
                  var t = e.$parent;
                  !t || t._isBeingDestroyed || e.$options.abstract || y(t.$children, e),
                    e._scope.stop(),
                    e._data.__ob__ && e._data.__ob__.vmCount--,
                    (e._isDestroyed = !0),
                    e.__patch__(e._vnode, null),
                    Pn(e, "destroyed"),
                    e.$off(),
                    e.$el && (e.$el.__vue__ = null),
                    e.$vnode && (e.$vnode.parent = null);
                }
              });
          })(Sr),
          (function (e) {
            At(e.prototype),
              (e.prototype.$nextTick = function (e) {
                return un(e, this);
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
                  t._slotsProxy && Ht(t._slotsProxy, t.$scopedSlots)),
                  (t.$vnode = i);
                try {
                  de(t), (qt = t), (e = r.call(t._renderProxy, t.$createElement));
                } catch (n) {
                  Yt(n, t, "render"), (e = t._vnode);
                } finally {
                  (qt = null), de();
                }
                return o(e) && 1 === e.length && (e = e[0]), e instanceof fe || (e = pe()), (e.parent = i), e;
              });
          })(Sr);
        var Tr = [String, RegExp, Array],
          xr = {
            KeepAlive: {
              name: "keep-alive",
              abstract: !0,
              props: { include: Tr, exclude: Tr, max: [String, Number] },
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
                    (t[o] = { name: kr(a), tag: i, componentInstance: s }),
                      n.push(o),
                      this.max && n.length > parseInt(this.max) && Cr(t, n[0], n, this._vnode),
                      (this.vnodeToCache = null);
                  }
                }
              },
              created: function () {
                (this.cache = Object.create(null)), (this.keys = []);
              },
              destroyed: function () {
                for (var e in this.cache) Cr(this.cache, e, this.keys);
              },
              mounted: function () {
                var e = this;
                this.cacheVNode(),
                  this.$watch("include", function (t) {
                    Er(e, function (e) {
                      return Or(t, e);
                    });
                  }),
                  this.$watch("exclude", function (t) {
                    Er(e, function (e) {
                      return !Or(t, e);
                    });
                  });
              },
              updated: function () {
                this.cacheVNode();
              },
              render: function () {
                var e = this.$slots.default,
                  t = zt(e),
                  n = t && t.componentOptions;
                if (n) {
                  var r = kr(n),
                    o = this.include,
                    i = this.exclude;
                  if ((o && (!r || !Or(o, r))) || (i && r && Or(i, r))) return t;
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
            (e.util = { warn: Xn, extend: P, mergeOptions: ir, defineReactive: Re }),
            (e.set = Ae),
            (e.delete = Me),
            (e.nextTick = un),
            (e.observable = function (e) {
              return je(e), e;
            }),
            (e.options = Object.create(null)),
            U.forEach(function (t) {
              e.options[t + "s"] = Object.create(null);
            }),
            (e.options._base = e),
            P(e.options.components, xr),
            (function (e) {
              e.use = function (e) {
                var t = this._installedPlugins || (this._installedPlugins = []);
                if (t.indexOf(e) > -1) return this;
                var n = I(arguments, 1);
                return n.unshift(this), l(e.install) ? e.install.apply(e, n) : l(e) && e.apply(null, n), t.push(e), this;
              };
            })(e),
            (function (e) {
              e.mixin = function (e) {
                return (this.options = ir(this.options, e)), this;
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
                var i = Gn(e) || Gn(n.options),
                  s = function (e) {
                    this._init(e);
                  };
                return (
                  ((s.prototype = Object.create(n.prototype)).constructor = s),
                  (s.cid = t++),
                  (s.options = ir(n.options, e)),
                  (s.super = n),
                  s.options.props &&
                    (function (e) {
                      var t = e.options.props;
                      for (var n in t) pr(e.prototype, "_props", n);
                    })(s),
                  s.options.computed &&
                    (function (e) {
                      var t = e.options.computed;
                      for (var n in t) vr(e.prototype, n, t[n]);
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
                  (s.sealedOptions = P({}, s.options)),
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
                      "directive" === t && l(n) && (n = { bind: n, update: n }),
                      (this.options[t + "s"][e] = n),
                      n)
                    : this.options[t + "s"][e];
                };
              });
            })(e);
        })(Sr),
          Object.defineProperty(Sr.prototype, "$isServer", { get: oe }),
          Object.defineProperty(Sr.prototype, "$ssrContext", {
            get: function () {
              return this.$vnode && this.$vnode.ssrContext;
            }
          }),
          Object.defineProperty(Sr, "FunctionalRenderContext", { value: Vn }),
          (Sr.version = "2.7.14");
        var Ir = m("style,class"),
          Pr = m("input,textarea,option,select,progress"),
          jr = m("contenteditable,draggable,spellcheck"),
          Rr = m("events,caret,typing,plaintext-only"),
          Ar = function (e, t) {
            return Dr(t) || "false" === t ? "false" : "contenteditable" === e && Rr(t) ? t : "true";
          },
          Mr = m(
            "allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"
          ),
          Lr = "http://www.w3.org/1999/xlink",
          $r = function (e) {
            return ":" === e.charAt(5) && "xlink" === e.slice(0, 5);
          },
          Nr = function (e) {
            return $r(e) ? e.slice(6, e.length) : "";
          },
          Dr = function (e) {
            return null == e || !1 === e;
          };
        function Fr(e, t) {
          return { staticClass: Ur(e.staticClass, t.staticClass), class: s(e.class) ? [e.class, t.class] : t.class };
        }
        function Ur(e, t) {
          return e ? (t ? e + " " + t : e) : t || "";
        }
        function Br(e) {
          return Array.isArray(e)
            ? (function (e) {
                for (var t, n = "", r = 0, o = e.length; r < o; r++) s((t = Br(e[r]))) && "" !== t && (n && (n += " "), (n += t));
                return n;
              })(e)
            : u(e)
            ? (function (e) {
                var t = "";
                for (var n in e) e[n] && (t && (t += " "), (t += n));
                return t;
              })(e)
            : "string" == typeof e
            ? e
            : "";
        }
        var Hr = { svg: "http://www.w3.org/2000/svg", math: "http://www.w3.org/1998/Math/MathML" },
          qr = m(
            "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"
          ),
          Vr = m(
            "svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",
            !0
          ),
          zr = function (e) {
            return qr(e) || Vr(e);
          },
          Wr = Object.create(null),
          Gr = m("text,number,password,search,email,tel,url"),
          Zr = Object.freeze({
            __proto__: null,
            createElement: function (e, t) {
              var n = document.createElement(e);
              return (
                "select" !== e || (t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple")), n
              );
            },
            createElementNS: function (e, t) {
              return document.createElementNS(Hr[e], t);
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
          Jr = {
            create: function (e, t) {
              Yr(t);
            },
            update: function (e, t) {
              e.data.ref !== t.data.ref && (Yr(e, !0), Yr(t));
            },
            destroy: function (e) {
              Yr(e, !0);
            }
          };
        function Yr(e, t) {
          var n = e.data.ref;
          if (s(n)) {
            var r = e.context,
              i = e.componentInstance || e.elm,
              a = t ? null : i,
              c = t ? void 0 : i;
            if (l(n)) Qt(n, r, [a], r, "template ref function");
            else {
              var u = e.data.refInFor,
                d = "string" == typeof n || "number" == typeof n,
                f = ze(n),
                p = r.$refs;
              if (d || f)
                if (u) {
                  var h = d ? p[n] : n.value;
                  t ? o(h) && y(h, i) : o(h) ? h.includes(i) || h.push(i) : d ? ((p[n] = [i]), Qr(r, n, p[n])) : (n.value = [i]);
                } else if (d) {
                  if (t && p[n] !== i) return;
                  (p[n] = c), Qr(r, n, a);
                } else if (f) {
                  if (t && n.value !== i) return;
                  n.value = a;
                }
            }
          }
        }
        function Qr(e, t, n) {
          var r = e._setupState;
          r && w(r, t) && (ze(r[t]) ? (r[t].value = n) : (r[t] = n));
        }
        var Xr = new fe("", {}, []),
          Kr = ["create", "activate", "update", "remove", "destroy"];
        function eo(e, t) {
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
                return r === o || (Gr(r) && Gr(o));
              })(e, t)) ||
              (a(e.isAsyncPlaceholder) && i(t.asyncFactory.error)))
          );
        }
        function to(e, t, n) {
          var r,
            o,
            i = {};
          for (r = t; r <= n; ++r) s((o = e[r].key)) && (i[o] = r);
          return i;
        }
        var no = {
          create: ro,
          update: ro,
          destroy: function (e) {
            ro(e, Xr);
          }
        };
        function ro(e, t) {
          (e.data.directives || t.data.directives) &&
            (function (e, t) {
              var n,
                r,
                o,
                i = e === Xr,
                s = t === Xr,
                a = io(e.data.directives, e.context),
                c = io(t.data.directives, t.context),
                l = [],
                u = [];
              for (n in c)
                (r = a[n]),
                  (o = c[n]),
                  r
                    ? ((o.oldValue = r.value), (o.oldArg = r.arg), ao(o, "update", t, e), o.def && o.def.componentUpdated && u.push(o))
                    : (ao(o, "bind", t, e), o.def && o.def.inserted && l.push(o));
              if (l.length) {
                var d = function () {
                  for (var n = 0; n < l.length; n++) ao(l[n], "inserted", t, e);
                };
                i ? ht(t, "insert", d) : d();
              }
              if (
                (u.length &&
                  ht(t, "postpatch", function () {
                    for (var n = 0; n < u.length; n++) ao(u[n], "componentUpdated", t, e);
                  }),
                !i)
              )
                for (n in a) c[n] || ao(a[n], "unbind", e, e, s);
            })(e, t);
        }
        var oo = Object.create(null);
        function io(e, t) {
          var n,
            r,
            o = Object.create(null);
          if (!e) return o;
          for (n = 0; n < e.length; n++) {
            if (((r = e[n]).modifiers || (r.modifiers = oo), (o[so(r)] = r), t._setupState && t._setupState.__sfc)) {
              var i = r.def || sr(t, "_setupState", "v-" + r.name);
              r.def = "function" == typeof i ? { bind: i, update: i } : i;
            }
            r.def = r.def || sr(t.$options, "directives", r.name);
          }
          return o;
        }
        function so(e) {
          return e.rawName || "".concat(e.name, ".").concat(Object.keys(e.modifiers || {}).join("."));
        }
        function ao(e, t, n, r, o) {
          var i = e.def && e.def[t];
          if (i)
            try {
              i(n.elm, e, n, r, o);
            } catch (r) {
              Yt(r, n.context, "directive ".concat(e.name, " ").concat(t, " hook"));
            }
        }
        var co = [Jr, no];
        function lo(e, t) {
          var n = t.componentOptions;
          if (!((s(n) && !1 === n.Ctor.options.inheritAttrs) || (i(e.data.attrs) && i(t.data.attrs)))) {
            var r,
              o,
              c = t.elm,
              l = e.data.attrs || {},
              u = t.data.attrs || {};
            for (r in ((s(u.__ob__) || a(u._v_attr_proxy)) && (u = t.data.attrs = P({}, u)), u))
              (o = u[r]), l[r] !== o && uo(c, r, o, t.data.pre);
            for (r in ((J || Q) && u.value !== l.value && uo(c, "value", u.value), l))
              i(u[r]) && ($r(r) ? c.removeAttributeNS(Lr, Nr(r)) : jr(r) || c.removeAttribute(r));
          }
        }
        function uo(e, t, n, r) {
          r || e.tagName.indexOf("-") > -1
            ? fo(e, t, n)
            : Mr(t)
            ? Dr(n)
              ? e.removeAttribute(t)
              : ((n = "allowfullscreen" === t && "EMBED" === e.tagName ? "true" : t), e.setAttribute(t, n))
            : jr(t)
            ? e.setAttribute(t, Ar(t, n))
            : $r(t)
            ? Dr(n)
              ? e.removeAttributeNS(Lr, Nr(t))
              : e.setAttributeNS(Lr, t, n)
            : fo(e, t, n);
        }
        function fo(e, t, n) {
          if (Dr(n)) e.removeAttribute(t);
          else {
            if (J && !Y && "TEXTAREA" === e.tagName && "placeholder" === t && "" !== n && !e.__ieph) {
              var r = function (t) {
                t.stopImmediatePropagation(), e.removeEventListener("input", r);
              };
              e.addEventListener("input", r), (e.__ieph = !0);
            }
            e.setAttribute(t, n);
          }
        }
        var po = { create: lo, update: lo };
        function ho(e, t) {
          var n = t.elm,
            r = t.data,
            o = e.data;
          if (!(i(r.staticClass) && i(r.class) && (i(o) || (i(o.staticClass) && i(o.class))))) {
            var a = (function (e) {
                for (var t = e.data, n = e, r = e; s(r.componentInstance); )
                  (r = r.componentInstance._vnode) && r.data && (t = Fr(r.data, t));
                for (; s((n = n.parent)); ) n && n.data && (t = Fr(t, n.data));
                return (o = t.staticClass), (i = t.class), s(o) || s(i) ? Ur(o, Br(i)) : "";
                var o, i;
              })(t),
              c = n._transitionClasses;
            s(c) && (a = Ur(a, Br(c))), a !== n._prevClass && (n.setAttribute("class", a), (n._prevClass = a));
          }
        }
        var go,
          vo = { create: ho, update: ho },
          mo = "__r",
          _o = "__c";
        function yo(e, t, n) {
          var r = go;
          return function o() {
            null !== t.apply(null, arguments) && So(e, o, n, r);
          };
        }
        var bo = tn && !(ee && Number(ee[1]) <= 53);
        function wo(e, t, n, r) {
          if (bo) {
            var o = Nn,
              i = t;
            t = i._wrapper = function (e) {
              if (e.target === e.currentTarget || e.timeStamp >= o || e.timeStamp <= 0 || e.target.ownerDocument !== document)
                return i.apply(this, arguments);
            };
          }
          go.addEventListener(e, t, ne ? { capture: n, passive: r } : n);
        }
        function So(e, t, n, r) {
          (r || go).removeEventListener(e, t._wrapper || t, n);
        }
        function ko(e, t) {
          if (!i(e.data.on) || !i(t.data.on)) {
            var n = t.data.on || {},
              r = e.data.on || {};
            (go = t.elm || e.elm),
              (function (e) {
                if (s(e[mo])) {
                  var t = J ? "change" : "input";
                  (e[t] = [].concat(e[mo], e[t] || [])), delete e[mo];
                }
                s(e[_o]) && ((e.change = [].concat(e[_o], e.change || [])), delete e[_o]);
              })(n),
              pt(n, r, wo, So, yo, t.context),
              (go = void 0);
          }
        }
        var Oo,
          Eo = {
            create: ko,
            update: ko,
            destroy: function (e) {
              return ko(e, Xr);
            }
          };
        function Co(e, t) {
          if (!i(e.data.domProps) || !i(t.data.domProps)) {
            var n,
              r,
              o = t.elm,
              c = e.data.domProps || {},
              l = t.data.domProps || {};
            for (n in ((s(l.__ob__) || a(l._v_attr_proxy)) && (l = t.data.domProps = P({}, l)), c)) n in l || (o[n] = "");
            for (n in l) {
              if (((r = l[n]), "textContent" === n || "innerHTML" === n)) {
                if ((t.children && (t.children.length = 0), r === c[n])) continue;
                1 === o.childNodes.length && o.removeChild(o.childNodes[0]);
              }
              if ("value" === n && "PROGRESS" !== o.tagName) {
                o._value = r;
                var u = i(r) ? "" : String(r);
                To(o, u) && (o.value = u);
              } else if ("innerHTML" === n && Vr(o.tagName) && i(o.innerHTML)) {
                (Oo = Oo || document.createElement("div")).innerHTML = "<svg>".concat(r, "</svg>");
                for (var d = Oo.firstChild; o.firstChild; ) o.removeChild(o.firstChild);
                for (; d.firstChild; ) o.appendChild(d.firstChild);
              } else if (r !== c[n])
                try {
                  o[n] = r;
                } catch (e) {}
            }
          }
        }
        function To(e, t) {
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
                  if (r.number) return v(n) !== v(t);
                  if (r.trim) return n.trim() !== t.trim();
                }
                return n !== t;
              })(e, t))
          );
        }
        var xo = { create: Co, update: Co },
          Io = S(function (e) {
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
        function Po(e) {
          var t = jo(e.style);
          return e.staticStyle ? P(e.staticStyle, t) : t;
        }
        function jo(e) {
          return Array.isArray(e) ? j(e) : "string" == typeof e ? Io(e) : e;
        }
        var Ro,
          Ao = /^--/,
          Mo = /\s*!important$/,
          Lo = function (e, t, n) {
            if (Ao.test(t)) e.style.setProperty(t, n);
            else if (Mo.test(n)) e.style.setProperty(T(t), n.replace(Mo, ""), "important");
            else {
              var r = No(t);
              if (Array.isArray(n)) for (var o = 0, i = n.length; o < i; o++) e.style[r] = n[o];
              else e.style[r] = n;
            }
          },
          $o = ["Webkit", "Moz", "ms"],
          No = S(function (e) {
            if (((Ro = Ro || document.createElement("div").style), "filter" !== (e = O(e)) && e in Ro)) return e;
            for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < $o.length; n++) {
              var r = $o[n] + t;
              if (r in Ro) return r;
            }
          });
        function Do(e, t) {
          var n = t.data,
            r = e.data;
          if (!(i(n.staticStyle) && i(n.style) && i(r.staticStyle) && i(r.style))) {
            var o,
              a,
              c = t.elm,
              l = r.staticStyle,
              u = r.normalizedStyle || r.style || {},
              d = l || u,
              f = jo(t.data.style) || {};
            t.data.normalizedStyle = s(f.__ob__) ? P({}, f) : f;
            var p = (function (e, t) {
              for (var n, r = {}, o = e; o.componentInstance; ) (o = o.componentInstance._vnode) && o.data && (n = Po(o.data)) && P(r, n);
              (n = Po(e.data)) && P(r, n);
              for (var i = e; (i = i.parent); ) i.data && (n = Po(i.data)) && P(r, n);
              return r;
            })(t);
            for (a in d) i(p[a]) && Lo(c, a, "");
            for (a in p) (o = p[a]) !== d[a] && Lo(c, a, null == o ? "" : o);
          }
        }
        var Fo = { create: Do, update: Do },
          Uo = /\s+/;
        function Bo(e, t) {
          if (t && (t = t.trim()))
            if (e.classList)
              t.indexOf(" ") > -1
                ? t.split(Uo).forEach(function (t) {
                    return e.classList.add(t);
                  })
                : e.classList.add(t);
            else {
              var n = " ".concat(e.getAttribute("class") || "", " ");
              n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim());
            }
        }
        function Ho(e, t) {
          if (t && (t = t.trim()))
            if (e.classList)
              t.indexOf(" ") > -1
                ? t.split(Uo).forEach(function (t) {
                    return e.classList.remove(t);
                  })
                : e.classList.remove(t),
                e.classList.length || e.removeAttribute("class");
            else {
              for (var n = " ".concat(e.getAttribute("class") || "", " "), r = " " + t + " "; n.indexOf(r) >= 0; ) n = n.replace(r, " ");
              (n = n.trim()) ? e.setAttribute("class", n) : e.removeAttribute("class");
            }
        }
        function qo(e) {
          if (e) {
            if ("object" == typeof e) {
              var t = {};
              return !1 !== e.css && P(t, Vo(e.name || "v")), P(t, e), t;
            }
            return "string" == typeof e ? Vo(e) : void 0;
          }
        }
        var Vo = S(function (e) {
            return {
              enterClass: "".concat(e, "-enter"),
              enterToClass: "".concat(e, "-enter-to"),
              enterActiveClass: "".concat(e, "-enter-active"),
              leaveClass: "".concat(e, "-leave"),
              leaveToClass: "".concat(e, "-leave-to"),
              leaveActiveClass: "".concat(e, "-leave-active")
            };
          }),
          zo = G && !Y,
          Wo = "transition",
          Go = "animation",
          Zo = "transition",
          Jo = "transitionend",
          Yo = "animation",
          Qo = "animationend";
        zo &&
          (void 0 === window.ontransitionend &&
            void 0 !== window.onwebkittransitionend &&
            ((Zo = "WebkitTransition"), (Jo = "webkitTransitionEnd")),
          void 0 === window.onanimationend &&
            void 0 !== window.onwebkitanimationend &&
            ((Yo = "WebkitAnimation"), (Qo = "webkitAnimationEnd")));
        var Xo = G
          ? window.requestAnimationFrame
            ? window.requestAnimationFrame.bind(window)
            : setTimeout
          : function (e) {
              return e();
            };
        function Ko(e) {
          Xo(function () {
            Xo(e);
          });
        }
        function ei(e, t) {
          var n = e._transitionClasses || (e._transitionClasses = []);
          n.indexOf(t) < 0 && (n.push(t), Bo(e, t));
        }
        function ti(e, t) {
          e._transitionClasses && y(e._transitionClasses, t), Ho(e, t);
        }
        function ni(e, t, n) {
          var r = oi(e, t),
            o = r.type,
            i = r.timeout,
            s = r.propCount;
          if (!o) return n();
          var a = o === Wo ? Jo : Qo,
            c = 0,
            l = function () {
              e.removeEventListener(a, u), n();
            },
            u = function (t) {
              t.target === e && ++c >= s && l();
            };
          setTimeout(function () {
            c < s && l();
          }, i + 1),
            e.addEventListener(a, u);
        }
        var ri = /\b(transform|all)(,|$)/;
        function oi(e, t) {
          var n,
            r = window.getComputedStyle(e),
            o = (r[Zo + "Delay"] || "").split(", "),
            i = (r[Zo + "Duration"] || "").split(", "),
            s = ii(o, i),
            a = (r[Yo + "Delay"] || "").split(", "),
            c = (r[Yo + "Duration"] || "").split(", "),
            l = ii(a, c),
            u = 0,
            d = 0;
          return (
            t === Wo
              ? s > 0 && ((n = Wo), (u = s), (d = i.length))
              : t === Go
              ? l > 0 && ((n = Go), (u = l), (d = c.length))
              : (d = (n = (u = Math.max(s, l)) > 0 ? (s > l ? Wo : Go) : null) ? (n === Wo ? i.length : c.length) : 0),
            { type: n, timeout: u, propCount: d, hasTransform: n === Wo && ri.test(r[Zo + "Property"]) }
          );
        }
        function ii(e, t) {
          for (; e.length < t.length; ) e = e.concat(e);
          return Math.max.apply(
            null,
            t.map(function (t, n) {
              return si(t) + si(e[n]);
            })
          );
        }
        function si(e) {
          return 1e3 * Number(e.slice(0, -1).replace(",", "."));
        }
        function ai(e, t) {
          var n = e.elm;
          s(n._leaveCb) && ((n._leaveCb.cancelled = !0), n._leaveCb());
          var r = qo(e.data.transition);
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
                m = r.beforeEnter,
                _ = r.enter,
                y = r.afterEnter,
                b = r.enterCancelled,
                w = r.beforeAppear,
                S = r.appear,
                k = r.afterAppear,
                O = r.appearCancelled,
                E = r.duration,
                C = En,
                T = En.$vnode;
              T && T.parent;

            )
              (C = T.context), (T = T.parent);
            var x = !C._isMounted || !e.isRootInsert;
            if (!x || S || "" === S) {
              var I = x && p ? p : c,
                P = x && g ? g : f,
                j = x && h ? h : d,
                R = (x && w) || m,
                A = x && l(S) ? S : _,
                M = (x && k) || y,
                L = (x && O) || b,
                $ = v(u(E) ? E.enter : E),
                D = !1 !== o && !Y,
                F = ui(A),
                U = (n._enterCb = N(function () {
                  D && (ti(n, j), ti(n, P)), U.cancelled ? (D && ti(n, I), L && L(n)) : M && M(n), (n._enterCb = null);
                }));
              e.data.show ||
                ht(e, "insert", function () {
                  var t = n.parentNode,
                    r = t && t._pending && t._pending[e.key];
                  r && r.tag === e.tag && r.elm._leaveCb && r.elm._leaveCb(), A && A(n, U);
                }),
                R && R(n),
                D &&
                  (ei(n, I),
                  ei(n, P),
                  Ko(function () {
                    ti(n, I), U.cancelled || (ei(n, j), F || (li($) ? setTimeout(U, $) : ni(n, a, U)));
                  })),
                e.data.show && (t && t(), A && A(n, U)),
                D || F || U();
            }
          }
        }
        function ci(e, t) {
          var n = e.elm;
          s(n._enterCb) && ((n._enterCb.cancelled = !0), n._enterCb());
          var r = qo(e.data.transition);
          if (i(r) || 1 !== n.nodeType) return t();
          if (!s(n._leaveCb)) {
            var o = r.css,
              a = r.type,
              c = r.leaveClass,
              l = r.leaveToClass,
              d = r.leaveActiveClass,
              f = r.beforeLeave,
              p = r.leave,
              h = r.afterLeave,
              g = r.leaveCancelled,
              m = r.delayLeave,
              _ = r.duration,
              y = !1 !== o && !Y,
              b = ui(p),
              w = v(u(_) ? _.leave : _),
              S = (n._leaveCb = N(function () {
                n.parentNode && n.parentNode._pending && (n.parentNode._pending[e.key] = null),
                  y && (ti(n, l), ti(n, d)),
                  S.cancelled ? (y && ti(n, c), g && g(n)) : (t(), h && h(n)),
                  (n._leaveCb = null);
              }));
            m ? m(k) : k();
          }
          function k() {
            S.cancelled ||
              (!e.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[e.key] = e),
              f && f(n),
              y &&
                (ei(n, c),
                ei(n, d),
                Ko(function () {
                  ti(n, c), S.cancelled || (ei(n, l), b || (li(w) ? setTimeout(S, w) : ni(n, a, S)));
                })),
              p && p(n, S),
              y || b || S());
          }
        }
        function li(e) {
          return "number" == typeof e && !isNaN(e);
        }
        function ui(e) {
          if (i(e)) return !1;
          var t = e.fns;
          return s(t) ? ui(Array.isArray(t) ? t[0] : t) : (e._length || e.length) > 1;
        }
        function di(e, t) {
          !0 !== t.data.show && ai(t);
        }
        var fi = (function (e) {
          var t,
            n,
            r = {},
            l = e.modules,
            u = e.nodeOps;
          for (t = 0; t < Kr.length; ++t) for (r[Kr[t]] = [], n = 0; n < l.length; ++n) s(l[n][Kr[t]]) && r[Kr[t]].push(l[n][Kr[t]]);
          function d(e) {
            var t = u.parentNode(e);
            s(t) && u.removeChild(t, e);
          }
          function f(e, t, n, o, i, c, l) {
            if (
              (s(e.elm) && s(c) && (e = c[l] = ge(e)),
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
                              for (i = 0; i < r.activate.length; ++i) r.activate[i](Xr, a);
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
                v = e.tag;
              s(v)
                ? ((e.elm = e.ns ? u.createElementNS(e.ns, v) : u.createElement(v, e)), y(e), g(e, f, t), s(d) && _(e, t), h(n, e.elm, o))
                : a(e.isComment)
                ? ((e.elm = u.createComment(e.text)), h(n, e.elm, o))
                : ((e.elm = u.createTextNode(e.text)), h(n, e.elm, o));
            }
          }
          function p(e, t) {
            s(e.data.pendingInsert) && (t.push.apply(t, e.data.pendingInsert), (e.data.pendingInsert = null)),
              (e.elm = e.componentInstance.$el),
              v(e) ? (_(e, t), y(e)) : (Yr(e), t.push(e));
          }
          function h(e, t, n) {
            s(e) && (s(n) ? u.parentNode(n) === e && u.insertBefore(e, t, n) : u.appendChild(e, t));
          }
          function g(e, t, n) {
            if (o(t)) for (var r = 0; r < t.length; ++r) f(t[r], n, e.elm, null, !0, t, r);
            else c(e.text) && u.appendChild(e.elm, u.createTextNode(String(e.text)));
          }
          function v(e) {
            for (; e.componentInstance; ) e = e.componentInstance._vnode;
            return s(e.tag);
          }
          function _(e, n) {
            for (var o = 0; o < r.create.length; ++o) r.create[o](Xr, e);
            s((t = e.data.hook)) && (s(t.create) && t.create(Xr, e), s(t.insert) && n.push(e));
          }
          function y(e) {
            var t;
            if (s((t = e.fnScopeId))) u.setStyleScope(e.elm, t);
            else for (var n = e; n; ) s((t = n.context)) && s((t = t.$options._scopeId)) && u.setStyleScope(e.elm, t), (n = n.parent);
            s((t = En)) && t !== e.context && t !== e.fnContext && s((t = t.$options._scopeId)) && u.setStyleScope(e.elm, t);
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
              if (s(i) && eo(e, i)) return o;
            }
          }
          function E(e, t, n, o, c, l) {
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
                  m = t.children;
                if (s(h) && v(t)) {
                  for (p = 0; p < r.update.length; ++p) r.update[p](e, t);
                  s((p = h.hook)) && s((p = p.update)) && p(e, t);
                }
                i(t.text)
                  ? s(g) && s(m)
                    ? g !== m &&
                      (function (e, t, n, r, o) {
                        for (
                          var a, c, l, d = 0, p = 0, h = t.length - 1, g = t[0], v = t[h], m = n.length - 1, _ = n[0], y = n[m], w = !o;
                          d <= h && p <= m;

                        )
                          i(g)
                            ? (g = t[++d])
                            : i(v)
                            ? (v = t[--h])
                            : eo(g, _)
                            ? (E(g, _, r, n, p), (g = t[++d]), (_ = n[++p]))
                            : eo(v, y)
                            ? (E(v, y, r, n, m), (v = t[--h]), (y = n[--m]))
                            : eo(g, y)
                            ? (E(g, y, r, n, m), w && u.insertBefore(e, g.elm, u.nextSibling(v.elm)), (g = t[++d]), (y = n[--m]))
                            : eo(v, _)
                            ? (E(v, _, r, n, p), w && u.insertBefore(e, v.elm, g.elm), (v = t[--h]), (_ = n[++p]))
                            : (i(a) && (a = to(t, d, h)),
                              i((c = s(_.key) ? a[_.key] : O(_, t, d, h)))
                                ? f(_, r, e, g.elm, !1, n, p)
                                : eo((l = t[c]), _)
                                ? (E(l, _, r, n, p), (t[c] = void 0), w && u.insertBefore(e, l.elm, g.elm))
                                : f(_, r, e, g.elm, !1, n, p),
                              (_ = n[++p]));
                        d > h ? b(e, i(n[m + 1]) ? null : n[m + 1].elm, n, p, m, r) : p > m && S(t, d, h);
                      })(d, g, m, n, l)
                    : s(m)
                    ? (s(e.text) && u.setTextContent(d, ""), b(d, null, m, 0, m.length - 1, n))
                    : s(g)
                    ? S(g, 0, g.length - 1)
                    : s(e.text) && u.setTextContent(d, "")
                  : e.text !== t.text && u.setTextContent(d, t.text),
                  s(h) && s((p = h.hook)) && s((p = p.postpatch)) && p(e, t);
              }
            }
          }
          function C(e, t, n) {
            if (a(n) && s(e.parent)) e.parent.data.pendingInsert = t;
            else for (var r = 0; r < t.length; ++r) t[r].data.hook.insert(t[r]);
          }
          var T = m("attrs,class,staticClass,staticStyle,key");
          function x(e, t, n, r) {
            var o,
              i = t.tag,
              c = t.data,
              l = t.children;
            if (((r = r || (c && c.pre)), (t.elm = e), a(t.isComment) && s(t.asyncFactory))) return (t.isAsyncPlaceholder = !0), !0;
            if (s(c) && (s((o = c.hook)) && s((o = o.init)) && o(t, !0), s((o = t.componentInstance)))) return p(t, n), !0;
            if (s(i)) {
              if (s(l))
                if (e.hasChildNodes())
                  if (s((o = c)) && s((o = o.domProps)) && s((o = o.innerHTML))) {
                    if (o !== e.innerHTML) return !1;
                  } else {
                    for (var u = !0, d = e.firstChild, f = 0; f < l.length; f++) {
                      if (!d || !x(d, l[f], n, r)) {
                        u = !1;
                        break;
                      }
                      d = d.nextSibling;
                    }
                    if (!u || d) return !1;
                  }
                else g(t, l, n);
              if (s(c)) {
                var h = !1;
                for (var v in c)
                  if (!T(v)) {
                    (h = !0), _(t, n);
                    break;
                  }
                !h && c.class && vn(c.class);
              }
            } else e.data !== t.text && (e.data = t.text);
            return !0;
          }
          return function (e, t, n, o) {
            if (!i(t)) {
              var c,
                l = !1,
                d = [];
              if (i(e)) (l = !0), f(t, d);
              else {
                var p = s(e.nodeType);
                if (!p && eo(e, t)) E(e, t, d, null, null, o);
                else {
                  if (p) {
                    if ((1 === e.nodeType && e.hasAttribute(F) && (e.removeAttribute(F), (n = !0)), a(n) && x(e, t, d)))
                      return C(t, d, !0), e;
                    (c = e), (e = new fe(u.tagName(c).toLowerCase(), {}, [], void 0, c));
                  }
                  var h = e.elm,
                    g = u.parentNode(h);
                  if ((f(t, d, h._leaveCb ? null : g, u.nextSibling(h)), s(t.parent)))
                    for (var m = t.parent, _ = v(t); m; ) {
                      for (var y = 0; y < r.destroy.length; ++y) r.destroy[y](m);
                      if (((m.elm = t.elm), _)) {
                        for (var b = 0; b < r.create.length; ++b) r.create[b](Xr, m);
                        var k = m.data.hook.insert;
                        if (k.merged) for (var O = 1; O < k.fns.length; O++) k.fns[O]();
                      } else Yr(m);
                      m = m.parent;
                    }
                  s(g) ? S([e], 0, 0) : s(e.tag) && w(e);
                }
              }
              return C(t, d, l), t.elm;
            }
            s(e) && w(e);
          };
        })({
          nodeOps: Zr,
          modules: [
            po,
            vo,
            Eo,
            xo,
            Fo,
            G
              ? {
                  create: di,
                  activate: di,
                  remove: function (e, t) {
                    !0 !== e.data.show ? ci(e, t) : t();
                  }
                }
              : {}
          ].concat(co)
        });
        Y &&
          document.addEventListener("selectionchange", function () {
            var e = document.activeElement;
            e && e.vmodel && bi(e, "input");
          });
        var pi = {
          inserted: function (e, t, n, r) {
            "select" === n.tag
              ? (r.elm && !r.elm._vOptions
                  ? ht(n, "postpatch", function () {
                      pi.componentUpdated(e, t, n);
                    })
                  : hi(e, t, n.context),
                (e._vOptions = [].map.call(e.options, mi)))
              : ("textarea" === n.tag || Gr(e.type)) &&
                ((e._vModifiers = t.modifiers),
                t.modifiers.lazy ||
                  (e.addEventListener("compositionstart", _i),
                  e.addEventListener("compositionend", yi),
                  e.addEventListener("change", yi),
                  Y && (e.vmodel = !0)));
          },
          componentUpdated: function (e, t, n) {
            if ("select" === n.tag) {
              hi(e, t, n.context);
              var r = e._vOptions,
                o = (e._vOptions = [].map.call(e.options, mi));
              o.some(function (e, t) {
                return !L(e, r[t]);
              }) &&
                (e.multiple
                  ? t.value.some(function (e) {
                      return vi(e, o);
                    })
                  : t.value !== t.oldValue && vi(t.value, o)) &&
                bi(e, "change");
            }
          }
        };
        function hi(e, t, n) {
          gi(e, t),
            (J || Q) &&
              setTimeout(function () {
                gi(e, t);
              }, 0);
        }
        function gi(e, t, n) {
          var r = t.value,
            o = e.multiple;
          if (!o || Array.isArray(r)) {
            for (var i, s, a = 0, c = e.options.length; a < c; a++)
              if (((s = e.options[a]), o)) (i = $(r, mi(s)) > -1), s.selected !== i && (s.selected = i);
              else if (L(mi(s), r)) return void (e.selectedIndex !== a && (e.selectedIndex = a));
            o || (e.selectedIndex = -1);
          }
        }
        function vi(e, t) {
          return t.every(function (t) {
            return !L(t, e);
          });
        }
        function mi(e) {
          return "_value" in e ? e._value : e.value;
        }
        function _i(e) {
          e.target.composing = !0;
        }
        function yi(e) {
          e.target.composing && ((e.target.composing = !1), bi(e.target, "input"));
        }
        function bi(e, t) {
          var n = document.createEvent("HTMLEvents");
          n.initEvent(t, !0, !0), e.dispatchEvent(n);
        }
        function wi(e) {
          return !e.componentInstance || (e.data && e.data.transition) ? e : wi(e.componentInstance._vnode);
        }
        var Si = {
            model: pi,
            show: {
              bind: function (e, t, n) {
                var r = t.value,
                  o = (n = wi(n)).data && n.data.transition,
                  i = (e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display);
                r && o
                  ? ((n.data.show = !0),
                    ai(n, function () {
                      e.style.display = i;
                    }))
                  : (e.style.display = r ? i : "none");
              },
              update: function (e, t, n) {
                var r = t.value;
                !r != !t.oldValue &&
                  ((n = wi(n)).data && n.data.transition
                    ? ((n.data.show = !0),
                      r
                        ? ai(n, function () {
                            e.style.display = e.__vOriginalDisplay;
                          })
                        : ci(n, function () {
                            e.style.display = "none";
                          }))
                    : (e.style.display = r ? e.__vOriginalDisplay : "none"));
              },
              unbind: function (e, t, n, r, o) {
                o || (e.style.display = e.__vOriginalDisplay);
              }
            }
          },
          ki = {
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
        function Oi(e) {
          var t = e && e.componentOptions;
          return t && t.Ctor.options.abstract ? Oi(zt(t.children)) : e;
        }
        function Ei(e) {
          var t = {},
            n = e.$options;
          for (var r in n.propsData) t[r] = e[r];
          var o = n._parentListeners;
          for (var r in o) t[O(r)] = o[r];
          return t;
        }
        function Ci(e, t) {
          if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", { props: t.componentOptions.propsData });
        }
        var Ti = function (e) {
            return e.tag || $t(e);
          },
          xi = function (e) {
            return "show" === e.name;
          },
          Ii = {
            name: "transition",
            props: ki,
            abstract: !0,
            render: function (e) {
              var t = this,
                n = this.$slots.default;
              if (n && (n = n.filter(Ti)).length) {
                var r = this.mode,
                  o = n[0];
                if (
                  (function (e) {
                    for (; (e = e.parent); ) if (e.data.transition) return !0;
                  })(this.$vnode)
                )
                  return o;
                var i = Oi(o);
                if (!i) return o;
                if (this._leaving) return Ci(e, o);
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
                var a = ((i.data || (i.data = {})).transition = Ei(this)),
                  l = this._vnode,
                  u = Oi(l);
                if (
                  (i.data.directives && i.data.directives.some(xi) && (i.data.show = !0),
                  u &&
                    u.data &&
                    !(function (e, t) {
                      return t.key === e.key && t.tag === e.tag;
                    })(i, u) &&
                    !$t(u) &&
                    (!u.componentInstance || !u.componentInstance._vnode.isComment))
                ) {
                  var d = (u.data.transition = P({}, a));
                  if ("out-in" === r)
                    return (
                      (this._leaving = !0),
                      ht(d, "afterLeave", function () {
                        (t._leaving = !1), t.$forceUpdate();
                      }),
                      Ci(e, o)
                    );
                  if ("in-out" === r) {
                    if ($t(i)) return l;
                    var f,
                      p = function () {
                        f();
                      };
                    ht(a, "afterEnter", p),
                      ht(a, "enterCancelled", p),
                      ht(d, "delayLeave", function (e) {
                        f = e;
                      });
                  }
                }
                return o;
              }
            }
          },
          Pi = P({ tag: String, moveClass: String }, ki);
        function ji(e) {
          e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb();
        }
        function Ri(e) {
          e.data.newPos = e.elm.getBoundingClientRect();
        }
        function Ai(e) {
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
        delete Pi.mode;
        var Mi = {
          Transition: Ii,
          TransitionGroup: {
            props: Pi,
            beforeMount: function () {
              var e = this,
                t = this._update;
              this._update = function (n, r) {
                var o = Cn(e);
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
                  s = Ei(this),
                  a = 0;
                a < o.length;
                a++
              )
                (u = o[a]).tag &&
                  null != u.key &&
                  0 !== String(u.key).indexOf("__vlist") &&
                  (i.push(u), (n[u.key] = u), ((u.data || (u.data = {})).transition = s));
              if (r) {
                var c = [],
                  l = [];
                for (a = 0; a < r.length; a++) {
                  var u;
                  ((u = r[a]).data.transition = s), (u.data.pos = u.elm.getBoundingClientRect()), n[u.key] ? c.push(u) : l.push(u);
                }
                (this.kept = e(t, null, c)), (this.removed = l);
              }
              return e(t, null, i);
            },
            updated: function () {
              var e = this.prevChildren,
                t = this.moveClass || (this.name || "v") + "-move";
              e.length &&
                this.hasMove(e[0].elm, t) &&
                (e.forEach(ji),
                e.forEach(Ri),
                e.forEach(Ai),
                (this._reflow = document.body.offsetHeight),
                e.forEach(function (e) {
                  if (e.data.moved) {
                    var n = e.elm,
                      r = n.style;
                    ei(n, t),
                      (r.transform = r.WebkitTransform = r.transitionDuration = ""),
                      n.addEventListener(
                        Jo,
                        (n._moveCb = function e(r) {
                          (r && r.target !== n) ||
                            (r && !/transform$/.test(r.propertyName)) ||
                            (n.removeEventListener(Jo, e), (n._moveCb = null), ti(n, t));
                        })
                      );
                  }
                }));
            },
            methods: {
              hasMove: function (e, t) {
                if (!zo) return !1;
                if (this._hasMove) return this._hasMove;
                var n = e.cloneNode();
                e._transitionClasses &&
                  e._transitionClasses.forEach(function (e) {
                    Ho(n, e);
                  }),
                  Bo(n, t),
                  (n.style.display = "none"),
                  this.$el.appendChild(n);
                var r = oi(n);
                return this.$el.removeChild(n), (this._hasMove = r.hasTransform);
              }
            }
          }
        };
        (Sr.config.mustUseProp = function (e, t, n) {
          return (
            ("value" === n && Pr(e) && "button" !== t) ||
            ("selected" === n && "option" === e) ||
            ("checked" === n && "input" === e) ||
            ("muted" === n && "video" === e)
          );
        }),
          (Sr.config.isReservedTag = zr),
          (Sr.config.isReservedAttr = Ir),
          (Sr.config.getTagNamespace = function (e) {
            return Vr(e) ? "svg" : "math" === e ? "math" : void 0;
          }),
          (Sr.config.isUnknownElement = function (e) {
            if (!G) return !0;
            if (zr(e)) return !1;
            if (((e = e.toLowerCase()), null != Wr[e])) return Wr[e];
            var t = document.createElement(e);
            return e.indexOf("-") > -1
              ? (Wr[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement)
              : (Wr[e] = /HTMLUnknownElement/.test(t.toString()));
          }),
          P(Sr.options.directives, Si),
          P(Sr.options.components, Mi),
          (Sr.prototype.__patch__ = G ? fi : R),
          (Sr.prototype.$mount = function (e, t) {
            return (function (e, t, n) {
              var r;
              (e.$el = t),
                e.$options.render || (e.$options.render = pe),
                Pn(e, "beforeMount"),
                (r = function () {
                  e._update(e._render(), n);
                }),
                new bn(
                  e,
                  r,
                  R,
                  {
                    before: function () {
                      e._isMounted && !e._isDestroyed && Pn(e, "beforeUpdate");
                    }
                  },
                  !0
                ),
                (n = !1);
              var o = e._preWatchers;
              if (o) for (var i = 0; i < o.length; i++) o[i].run();
              return null == e.$vnode && ((e._isMounted = !0), Pn(e, "mounted")), e;
            })(
              this,
              (e =
                e && G
                  ? (function (e) {
                      return "string" == typeof e ? document.querySelector(e) || document.createElement("div") : e;
                    })(e)
                  : void 0),
              t
            );
          }),
          G &&
            setTimeout(function () {
              H.devtools && ie && ie.emit("init", Sr);
            }, 0);
      },
      43325: (e, t, n) => {
        var r = {
          "./addMetric/main": [64164, 9, 4773, 2066, 4164],
          "./apps/main": [60826, 9, 4773, 6179, 826],
          "./background-info/main": [39730, 9, 4773, 9730],
          "./background/main": [83814, 9, 4773, 3814],
          "./baseMetric/main": [84016, 9, 4773, 3064, 5645, 2066, 1103, 4016],
          "./bookmarks/main": [18343, 9, 4773, 8343],
          "./center-region/main": [8251, 9, 4773, 8251],
          "./chat/main": [78696, 9, 4773, 9209, 8696],
          "./colorPicker/main": [71587, 9, 4773, 1001, 1587],
          "./dev_panel/main": [37734, 9, 4773, 7734],
          "./flashMessage/main": [59016, 9, 4773, 9016],
          "./focus/main": [80309, 7, 309],
          "./full-screen-portals/main": [85442, 9, 4773, 8725, 5442],
          "./introduction/main": [48002, 9, 4773, 8002],
          "./links/main": [30245, 9, 4773, 9209, 1886, 6370],
          "./mockTodo/main": [54085, 9, 4773, 4085],
          "./modal/main": [18955, 9, 4773, 3064, 7651, 4139, 8955],
          "./notes/main": [47638, 9, 4773, 9209, 7638],
          "./quicklinks/main": [11477, 9, 202, 1477],
          "./quote/main": [62629, 9, 4773, 2629],
          "./region-center-below/main": [68342, 9, 4773, 8342],
          "./search/main": [79818, 9, 4773, 6179, 9443, 3313, 6786],
          "./soundscapes/main": [87085, 9, 4773, 1766, 9209, 7085],
          "./tabs/main": [5930, 9, 4773, 9209, 5930],
          "./team-logo/main": [23954, 9, 4773, 3954],
          "./template-placeholder/main": [19306, 9, 4773, 9306],
          "./template/main": [61073, 9, 4773, 1073],
          "./topics/main": [46988, 9, 4773, 6988],
          "./weather/main": [67091, 9, 4773, 9209, 4411, 7091]
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
      71257: (e, t, n) => {
        "use strict";
        n.d(t, { default: () => ze });
        var r = {};
        function o(e, t) {
          return function () {
            return e.apply(t, arguments);
          };
        }
        n.r(r), n.d(r, { hasBrowserEnv: () => re, hasStandardBrowserEnv: () => oe, hasStandardBrowserWebWorkerEnv: () => se });
        const { toString: i } = Object.prototype,
          { getPrototypeOf: s } = Object,
          a =
            ((c = Object.create(null)),
            (e) => {
              const t = i.call(e);
              return c[t] || (c[t] = t.slice(8, -1).toLowerCase());
            });
        var c;
        const l = (e) => ((e = e.toLowerCase()), (t) => a(t) === e),
          u = (e) => (t) => typeof t === e,
          { isArray: d } = Array,
          f = u("undefined"),
          p = l("ArrayBuffer"),
          h = u("string"),
          g = u("function"),
          v = u("number"),
          m = (e) => null !== e && "object" == typeof e,
          _ = (e) => {
            if ("object" !== a(e)) return !1;
            const t = s(e);
            return !(
              (null !== t && t !== Object.prototype && null !== Object.getPrototypeOf(t)) ||
              Symbol.toStringTag in e ||
              Symbol.iterator in e
            );
          },
          y = l("Date"),
          b = l("File"),
          w = l("Blob"),
          S = l("FileList"),
          k = l("URLSearchParams");
        function O(e, t, { allOwnKeys: n = !1 } = {}) {
          if (null == e) return;
          let r, o;
          if (("object" != typeof e && (e = [e]), d(e))) for (r = 0, o = e.length; r < o; r++) t.call(null, e[r], r, e);
          else {
            const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
              i = o.length;
            let s;
            for (r = 0; r < i; r++) (s = o[r]), t.call(null, e[s], s, e);
          }
        }
        function E(e, t) {
          t = t.toLowerCase();
          const n = Object.keys(e);
          let r,
            o = n.length;
          for (; o-- > 0; ) if (((r = n[o]), t === r.toLowerCase())) return r;
          return null;
        }
        const C =
            "undefined" != typeof globalThis
              ? globalThis
              : "undefined" != typeof self
              ? self
              : "undefined" != typeof window
              ? window
              : global,
          T = (e) => !f(e) && e !== C,
          x = ((I = "undefined" != typeof Uint8Array && s(Uint8Array)), (e) => I && e instanceof I);
        var I;
        const P = l("HTMLFormElement"),
          j = (
            ({ hasOwnProperty: e }) =>
            (t, n) =>
              e.call(t, n)
          )(Object.prototype),
          R = l("RegExp"),
          A = (e, t) => {
            const n = Object.getOwnPropertyDescriptors(e),
              r = {};
            O(n, (n, o) => {
              let i;
              !1 !== (i = t(n, o, e)) && (r[o] = i || n);
            }),
              Object.defineProperties(e, r);
          },
          M = "abcdefghijklmnopqrstuvwxyz",
          L = "0123456789",
          $ = { DIGIT: L, ALPHA: M, ALPHA_DIGIT: M + M.toUpperCase() + L },
          N = l("AsyncFunction"),
          D = {
            isArray: d,
            isArrayBuffer: p,
            isBuffer: function (e) {
              return (
                null !== e && !f(e) && null !== e.constructor && !f(e.constructor) && g(e.constructor.isBuffer) && e.constructor.isBuffer(e)
              );
            },
            isFormData: (e) => {
              let t;
              return (
                e &&
                (("function" == typeof FormData && e instanceof FormData) ||
                  (g(e.append) && ("formdata" === (t = a(e)) || ("object" === t && g(e.toString) && "[object FormData]" === e.toString()))))
              );
            },
            isArrayBufferView: function (e) {
              let t;
              return (
                (t = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && p(e.buffer)), t
              );
            },
            isString: h,
            isNumber: v,
            isBoolean: (e) => !0 === e || !1 === e,
            isObject: m,
            isPlainObject: _,
            isUndefined: f,
            isDate: y,
            isFile: b,
            isBlob: w,
            isRegExp: R,
            isFunction: g,
            isStream: (e) => m(e) && g(e.pipe),
            isURLSearchParams: k,
            isTypedArray: x,
            isFileList: S,
            forEach: O,
            merge: function e() {
              const { caseless: t } = (T(this) && this) || {},
                n = {},
                r = (r, o) => {
                  const i = (t && E(n, o)) || o;
                  _(n[i]) && _(r) ? (n[i] = e(n[i], r)) : _(r) ? (n[i] = e({}, r)) : d(r) ? (n[i] = r.slice()) : (n[i] = r);
                };
              for (let e = 0, t = arguments.length; e < t; e++) arguments[e] && O(arguments[e], r);
              return n;
            },
            extend: (e, t, n, { allOwnKeys: r } = {}) => (
              O(
                t,
                (t, r) => {
                  n && g(t) ? (e[r] = o(t, n)) : (e[r] = t);
                },
                { allOwnKeys: r }
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
              let o, i, a;
              const c = {};
              if (((t = t || {}), null == e)) return t;
              do {
                for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
                  (a = o[i]), (r && !r(a, e, t)) || c[a] || ((t[a] = e[a]), (c[a] = !0));
                e = !1 !== n && s(e);
              } while (e && (!n || n(e, t)) && e !== Object.prototype);
              return t;
            },
            kindOf: a,
            kindOfTest: l,
            endsWith: (e, t, n) => {
              (e = String(e)), (void 0 === n || n > e.length) && (n = e.length), (n -= t.length);
              const r = e.indexOf(t, n);
              return -1 !== r && r === n;
            },
            toArray: (e) => {
              if (!e) return null;
              if (d(e)) return e;
              let t = e.length;
              if (!v(t)) return null;
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
            hasOwnProperty: j,
            hasOwnProp: j,
            reduceDescriptors: A,
            freezeMethods: (e) => {
              A(e, (t, n) => {
                if (g(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n)) return !1;
                const r = e[n];
                g(r) &&
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
              return d(e) ? r(e) : r(String(e).split(t)), n;
            },
            toCamelCase: (e) =>
              e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
                return t.toUpperCase() + n;
              }),
            noop: () => {},
            toFiniteNumber: (e, t) => ((e = +e), Number.isFinite(e) ? e : t),
            findKey: E,
            global: C,
            isContextDefined: T,
            ALPHABET: $,
            generateString: (e = 16, t = $.ALPHA_DIGIT) => {
              let n = "";
              const { length: r } = t;
              for (; e--; ) n += t[(Math.random() * r) | 0];
              return n;
            },
            isSpecCompliantForm: function (e) {
              return !!(e && g(e.append) && "FormData" === e[Symbol.toStringTag] && e[Symbol.iterator]);
            },
            toJSONObject: (e) => {
              const t = new Array(10),
                n = (e, r) => {
                  if (m(e)) {
                    if (t.indexOf(e) >= 0) return;
                    if (!("toJSON" in e)) {
                      t[r] = e;
                      const o = d(e) ? [] : {};
                      return (
                        O(e, (e, t) => {
                          const i = n(e, r + 1);
                          !f(i) && (o[t] = i);
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
            isThenable: (e) => e && (m(e) || g(e)) && g(e.then) && g(e.catch)
          };
        function F(e, t, n, r, o) {
          Error.call(this),
            Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : (this.stack = new Error().stack),
            (this.message = e),
            (this.name = "AxiosError"),
            t && (this.code = t),
            n && (this.config = n),
            r && (this.request = r),
            o && (this.response = o);
        }
        D.inherits(F, Error, {
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
        const U = F.prototype,
          B = {};
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
          B[e] = { value: e };
        }),
          Object.defineProperties(F, B),
          Object.defineProperty(U, "isAxiosError", { value: !0 }),
          (F.from = (e, t, n, r, o, i) => {
            const s = Object.create(U);
            return (
              D.toFlatObject(
                e,
                s,
                function (e) {
                  return e !== Error.prototype;
                },
                (e) => "isAxiosError" !== e
              ),
              F.call(s, e.message, t, n, r, o),
              (s.cause = e),
              (s.name = e.name),
              i && Object.assign(s, i),
              s
            );
          });
        const H = F;
        function q(e) {
          return D.isPlainObject(e) || D.isArray(e);
        }
        function V(e) {
          return D.endsWith(e, "[]") ? e.slice(0, -2) : e;
        }
        function z(e, t, n) {
          return e
            ? e
                .concat(t)
                .map(function (e, t) {
                  return (e = V(e)), !n && t ? "[" + e + "]" : e;
                })
                .join(n ? "." : "")
            : t;
        }
        const W = D.toFlatObject(D, {}, null, function (e) {
            return /^is[A-Z]/.test(e);
          }),
          G = function (e, t, n) {
            if (!D.isObject(e)) throw new TypeError("target must be an object");
            t = t || new FormData();
            const r = (n = D.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (e, t) {
                return !D.isUndefined(t[e]);
              })).metaTokens,
              o = n.visitor || l,
              i = n.dots,
              s = n.indexes,
              a = (n.Blob || ("undefined" != typeof Blob && Blob)) && D.isSpecCompliantForm(t);
            if (!D.isFunction(o)) throw new TypeError("visitor must be a function");
            function c(e) {
              if (null === e) return "";
              if (D.isDate(e)) return e.toISOString();
              if (!a && D.isBlob(e)) throw new H("Blob is not supported. Use a Buffer instead.");
              return D.isArrayBuffer(e) || D.isTypedArray(e) ? (a && "function" == typeof Blob ? new Blob([e]) : Buffer.from(e)) : e;
            }
            function l(e, n, o) {
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
                    (n = V(n)),
                    a.forEach(function (e, r) {
                      !D.isUndefined(e) && null !== e && t.append(!0 === s ? z([n], r, i) : null === s ? n : n + "[]", c(e));
                    }),
                    !1
                  );
              return !!q(e) || (t.append(z(o, n, i), c(e)), !1);
            }
            const u = [],
              d = Object.assign(W, { defaultVisitor: l, convertValue: c, isVisitable: q });
            if (!D.isObject(e)) throw new TypeError("data must be an object");
            return (
              (function e(n, r) {
                if (!D.isUndefined(n)) {
                  if (-1 !== u.indexOf(n)) throw Error("Circular reference detected in " + r.join("."));
                  u.push(n),
                    D.forEach(n, function (n, i) {
                      !0 === (!(D.isUndefined(n) || null === n) && o.call(t, n, D.isString(i) ? i.trim() : i, r, d)) &&
                        e(n, r ? r.concat(i) : [i]);
                    }),
                    u.pop();
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
        function J(e, t) {
          (this._pairs = []), e && G(e, this, t);
        }
        const Y = J.prototype;
        (Y.append = function (e, t) {
          this._pairs.push([e, t]);
        }),
          (Y.toString = function (e) {
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
        const Q = J;
        function X(e) {
          return encodeURIComponent(e)
            .replace(/%3A/gi, ":")
            .replace(/%24/g, "$")
            .replace(/%2C/gi, ",")
            .replace(/%20/g, "+")
            .replace(/%5B/gi, "[")
            .replace(/%5D/gi, "]");
        }
        function K(e, t, n) {
          if (!t) return e;
          const r = (n && n.encode) || X,
            o = n && n.serialize;
          let i;
          if (((i = o ? o(t, n) : D.isURLSearchParams(t) ? t.toString() : new Q(t, n).toString(r)), i)) {
            const t = e.indexOf("#");
            -1 !== t && (e = e.slice(0, t)), (e += (-1 === e.indexOf("?") ? "?" : "&") + i);
          }
          return e;
        }
        const ee = class {
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
          te = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 },
          ne = {
            isBrowser: !0,
            classes: {
              URLSearchParams: "undefined" != typeof URLSearchParams ? URLSearchParams : Q,
              FormData: "undefined" != typeof FormData ? FormData : null,
              Blob: "undefined" != typeof Blob ? Blob : null
            },
            protocols: ["http", "https", "file", "blob", "url", "data"]
          },
          re = "undefined" != typeof window && "undefined" != typeof document,
          oe = ((ie = "undefined" != typeof navigator && navigator.product), re && ["ReactNative", "NativeScript", "NS"].indexOf(ie) < 0);
        var ie;
        const se = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts,
          ae = { ...r, ...ne },
          ce = function (e) {
            function t(e, n, r, o) {
              let i = e[o++];
              const s = Number.isFinite(+i),
                a = o >= e.length;
              return (
                (i = !i && D.isArray(r) ? r.length : i),
                a
                  ? (D.hasOwnProp(r, i) ? (r[i] = [r[i], n]) : (r[i] = n), !s)
                  : ((r[i] && D.isObject(r[i])) || (r[i] = []),
                    t(e, n, r[i], o) &&
                      D.isArray(r[i]) &&
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
          le = {
            transitional: te,
            adapter: ["xhr", "http"],
            transformRequest: [
              function (e, t) {
                const n = t.getContentType() || "",
                  r = n.indexOf("application/json") > -1,
                  o = D.isObject(e);
                if ((o && D.isHTMLForm(e) && (e = new FormData(e)), D.isFormData(e))) return r && r ? JSON.stringify(ce(e)) : e;
                if (D.isArrayBuffer(e) || D.isBuffer(e) || D.isStream(e) || D.isFile(e) || D.isBlob(e)) return e;
                if (D.isArrayBufferView(e)) return e.buffer;
                if (D.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
                let i;
                if (o) {
                  if (n.indexOf("application/x-www-form-urlencoded") > -1)
                    return (function (e, t) {
                      return G(
                        e,
                        new ae.classes.URLSearchParams(),
                        Object.assign(
                          {
                            visitor: function (e, t, n, r) {
                              return ae.isNode && D.isBuffer(e)
                                ? (this.append(t, e.toString("base64")), !1)
                                : r.defaultVisitor.apply(this, arguments);
                            }
                          },
                          t
                        )
                      );
                    })(e, this.formSerializer).toString();
                  if ((i = D.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                    const t = this.env && this.env.FormData;
                    return G(i ? { "files[]": e } : e, t && new t(), this.formSerializer);
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
                const t = this.transitional || le.transitional,
                  n = t && t.forcedJSONParsing,
                  r = "json" === this.responseType;
                if (e && D.isString(e) && ((n && !this.responseType) || r)) {
                  const n = !(t && t.silentJSONParsing) && r;
                  try {
                    return JSON.parse(e);
                  } catch (e) {
                    if (n) {
                      if ("SyntaxError" === e.name) throw H.from(e, H.ERR_BAD_RESPONSE, this, null, this.response);
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
            env: { FormData: ae.classes.FormData, Blob: ae.classes.Blob },
            validateStatus: function (e) {
              return e >= 200 && e < 300;
            },
            headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } }
          };
        D.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
          le.headers[e] = {};
        });
        const ue = le,
          de = D.toObjectSet([
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
          fe = Symbol("internals");
        function pe(e) {
          return e && String(e).trim().toLowerCase();
        }
        function he(e) {
          return !1 === e || null == e ? e : D.isArray(e) ? e.map(he) : String(e);
        }
        function ge(e, t, n, r, o) {
          return D.isFunction(r)
            ? r.call(this, t, n)
            : (o && (t = n), D.isString(t) ? (D.isString(r) ? -1 !== t.indexOf(r) : D.isRegExp(r) ? r.test(t) : void 0) : void 0);
        }
        class ve {
          constructor(e) {
            e && this.set(e);
          }
          set(e, t, n) {
            const r = this;
            function o(e, t, n) {
              const o = pe(t);
              if (!o) throw new Error("header name must be a non-empty string");
              const i = D.findKey(r, o);
              (!i || void 0 === r[i] || !0 === n || (void 0 === n && !1 !== r[i])) && (r[i || t] = he(e));
            }
            const i = (e, t) => D.forEach(e, (e, n) => o(e, n, t));
            return (
              D.isPlainObject(e) || e instanceof this.constructor
                ? i(e, t)
                : D.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())
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
                                (t[n] && de[n]) ||
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
            if ((e = pe(e))) {
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
            if ((e = pe(e))) {
              const n = D.findKey(this, e);
              return !(!n || void 0 === this[n] || (t && !ge(0, this[n], n, t)));
            }
            return !1;
          }
          delete(e, t) {
            const n = this;
            let r = !1;
            function o(e) {
              if ((e = pe(e))) {
                const o = D.findKey(n, e);
                !o || (t && !ge(0, n[o], o, t)) || (delete n[o], (r = !0));
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
              (e && !ge(0, this[o], o, e, !0)) || (delete this[o], (r = !0));
            }
            return r;
          }
          normalize(e) {
            const t = this,
              n = {};
            return (
              D.forEach(this, (r, o) => {
                const i = D.findKey(n, o);
                if (i) return (t[i] = he(r)), void delete t[o];
                const s = e
                  ? (function (e) {
                      return e
                        .trim()
                        .toLowerCase()
                        .replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
                    })(o)
                  : String(o).trim();
                s !== o && delete t[o], (t[s] = he(r)), (n[s] = !0);
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
            const t = (this[fe] = this[fe] = { accessors: {} }).accessors,
              n = this.prototype;
            function r(e) {
              const r = pe(e);
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
        ve.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]),
          D.reduceDescriptors(ve.prototype, ({ value: e }, t) => {
            let n = t[0].toUpperCase() + t.slice(1);
            return {
              get: () => e,
              set(e) {
                this[n] = e;
              }
            };
          }),
          D.freezeMethods(ve);
        const me = ve;
        function _e(e, t) {
          const n = this || ue,
            r = t || n,
            o = me.from(r.headers);
          let i = r.data;
          return (
            D.forEach(e, function (e) {
              i = e.call(n, i, o.normalize(), t ? t.status : void 0);
            }),
            o.normalize(),
            i
          );
        }
        function ye(e) {
          return !(!e || !e.__CANCEL__);
        }
        function be(e, t, n) {
          H.call(this, null == e ? "canceled" : e, H.ERR_CANCELED, t, n), (this.name = "CanceledError");
        }
        D.inherits(be, H, { __CANCEL__: !0 });
        const we = be,
          Se = ae.hasStandardBrowserEnv
            ? {
                write(e, t, n, r, o, i) {
                  const s = [e + "=" + encodeURIComponent(t)];
                  D.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()),
                    D.isString(r) && s.push("path=" + r),
                    D.isString(o) && s.push("domain=" + o),
                    !0 === i && s.push("secure"),
                    (document.cookie = s.join("; "));
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
        function ke(e, t) {
          return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)
            ? (function (e, t) {
                return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
              })(e, t)
            : t;
        }
        const Oe = ae.hasStandardBrowserEnv
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
        function Ee(e, t) {
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
                  l = r[s];
                o || (o = c), (n[i] = a), (r[i] = c);
                let u = s,
                  d = 0;
                for (; u !== i; ) (d += n[u++]), (u %= e);
                if (((i = (i + 1) % e), i === s && (s = (s + 1) % e), c - o < t)) return;
                const f = l && c - l;
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
            const l = {
              loaded: i,
              total: s,
              progress: s ? i / s : void 0,
              bytes: a,
              rate: c || void 0,
              estimated: c && s && i <= s ? (s - i) / c : void 0,
              event: o
            };
            (l[t ? "download" : "upload"] = !0), e(l);
          };
        }
        const Ce = {
          http: null,
          xhr:
            "undefined" != typeof XMLHttpRequest &&
            function (e) {
              return new Promise(function (t, n) {
                let r = e.data;
                const o = me.from(e.headers).normalize();
                let i,
                  s,
                  { responseType: a, withXSRFToken: c } = e;
                function l() {
                  e.cancelToken && e.cancelToken.unsubscribe(i), e.signal && e.signal.removeEventListener("abort", i);
                }
                if (D.isFormData(r))
                  if (ae.hasStandardBrowserEnv || ae.hasStandardBrowserWebWorkerEnv) o.setContentType(!1);
                  else if (!1 !== (s = o.getContentType())) {
                    const [e, ...t] = s
                      ? s
                          .split(";")
                          .map((e) => e.trim())
                          .filter(Boolean)
                      : [];
                    o.setContentType([e || "multipart/form-data", ...t].join("; "));
                  }
                let u = new XMLHttpRequest();
                if (e.auth) {
                  const t = e.auth.username || "",
                    n = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                  o.set("Authorization", "Basic " + btoa(t + ":" + n));
                }
                const d = ke(e.baseURL, e.url);
                function f() {
                  if (!u) return;
                  const r = me.from("getAllResponseHeaders" in u && u.getAllResponseHeaders());
                  !(function (e, t, n) {
                    const r = n.config.validateStatus;
                    n.status && r && !r(n.status)
                      ? t(
                          new H(
                            "Request failed with status code " + n.status,
                            [H.ERR_BAD_REQUEST, H.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
                            n.config,
                            n.request,
                            n
                          )
                        )
                      : e(n);
                  })(
                    function (e) {
                      t(e), l();
                    },
                    function (e) {
                      n(e), l();
                    },
                    {
                      data: a && "text" !== a && "json" !== a ? u.response : u.responseText,
                      status: u.status,
                      statusText: u.statusText,
                      headers: r,
                      config: e,
                      request: u
                    }
                  ),
                    (u = null);
                }
                if (
                  (u.open(e.method.toUpperCase(), K(d, e.params, e.paramsSerializer), !0),
                  (u.timeout = e.timeout),
                  "onloadend" in u
                    ? (u.onloadend = f)
                    : (u.onreadystatechange = function () {
                        u &&
                          4 === u.readyState &&
                          (0 !== u.status || (u.responseURL && 0 === u.responseURL.indexOf("file:"))) &&
                          setTimeout(f);
                      }),
                  (u.onabort = function () {
                    u && (n(new H("Request aborted", H.ECONNABORTED, e, u)), (u = null));
                  }),
                  (u.onerror = function () {
                    n(new H("Network Error", H.ERR_NETWORK, e, u)), (u = null);
                  }),
                  (u.ontimeout = function () {
                    let t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
                    const r = e.transitional || te;
                    e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                      n(new H(t, r.clarifyTimeoutError ? H.ETIMEDOUT : H.ECONNABORTED, e, u)),
                      (u = null);
                  }),
                  ae.hasStandardBrowserEnv && (c && D.isFunction(c) && (c = c(e)), c || (!1 !== c && Oe(d))))
                ) {
                  const t = e.xsrfHeaderName && e.xsrfCookieName && Se.read(e.xsrfCookieName);
                  t && o.set(e.xsrfHeaderName, t);
                }
                void 0 === r && o.setContentType(null),
                  "setRequestHeader" in u &&
                    D.forEach(o.toJSON(), function (e, t) {
                      u.setRequestHeader(t, e);
                    }),
                  D.isUndefined(e.withCredentials) || (u.withCredentials = !!e.withCredentials),
                  a && "json" !== a && (u.responseType = e.responseType),
                  "function" == typeof e.onDownloadProgress && u.addEventListener("progress", Ee(e.onDownloadProgress, !0)),
                  "function" == typeof e.onUploadProgress && u.upload && u.upload.addEventListener("progress", Ee(e.onUploadProgress)),
                  (e.cancelToken || e.signal) &&
                    ((i = (t) => {
                      u && (n(!t || t.type ? new we(null, e, u) : t), u.abort(), (u = null));
                    }),
                    e.cancelToken && e.cancelToken.subscribe(i),
                    e.signal && (e.signal.aborted ? i() : e.signal.addEventListener("abort", i)));
                const p = (function (e) {
                  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                  return (t && t[1]) || "";
                })(d);
                p && -1 === ae.protocols.indexOf(p) ? n(new H("Unsupported protocol " + p + ":", H.ERR_BAD_REQUEST, e)) : u.send(r || null);
              });
            }
        };
        D.forEach(Ce, (e, t) => {
          if (e) {
            try {
              Object.defineProperty(e, "name", { value: t });
            } catch (e) {}
            Object.defineProperty(e, "adapterName", { value: t });
          }
        });
        const Te = (e) => `- ${e}`,
          xe = (e) => D.isFunction(e) || null === e || !1 === e,
          Ie = (e) => {
            e = D.isArray(e) ? e : [e];
            const { length: t } = e;
            let n, r;
            const o = {};
            for (let i = 0; i < t; i++) {
              let t;
              if (((n = e[i]), (r = n), !xe(n) && ((r = Ce[(t = String(n)).toLowerCase()]), void 0 === r)))
                throw new H(`Unknown adapter '${t}'`);
              if (r) break;
              o[t || "#" + i] = r;
            }
            if (!r) {
              const e = Object.entries(o).map(
                ([e, t]) => `adapter ${e} ` + (!1 === t ? "is not supported by the environment" : "is not available in the build")
              );
              let n = t ? (e.length > 1 ? "since :\n" + e.map(Te).join("\n") : " " + Te(e[0])) : "as no adapter specified";
              throw new H("There is no suitable adapter to dispatch the request " + n, "ERR_NOT_SUPPORT");
            }
            return r;
          };
        function Pe(e) {
          if ((e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)) throw new we(null, e);
        }
        function je(e) {
          return (
            Pe(e),
            (e.headers = me.from(e.headers)),
            (e.data = _e.call(e, e.transformRequest)),
            -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1),
            Ie(e.adapter || ue.adapter)(e).then(
              function (t) {
                return Pe(e), (t.data = _e.call(e, e.transformResponse, t)), (t.headers = me.from(t.headers)), t;
              },
              function (t) {
                return (
                  ye(t) ||
                    (Pe(e),
                    t &&
                      t.response &&
                      ((t.response.data = _e.call(e, e.transformResponse, t.response)),
                      (t.response.headers = me.from(t.response.headers)))),
                  Promise.reject(t)
                );
              }
            )
          );
        }
        const Re = (e) => (e instanceof me ? e.toJSON() : e);
        function Ae(e, t) {
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
          function i(e, t) {
            if (!D.isUndefined(t)) return r(void 0, t);
          }
          function s(e, t) {
            return D.isUndefined(t) ? (D.isUndefined(e) ? void 0 : r(void 0, e)) : r(void 0, t);
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
            withXSRFToken: s,
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
            headers: (e, t) => o(Re(e), Re(t), !0)
          };
          return (
            D.forEach(Object.keys(Object.assign({}, e, t)), function (r) {
              const i = c[r] || o,
                s = i(e[r], t[r], r);
              (D.isUndefined(s) && i !== a) || (n[r] = s);
            }),
            n
          );
        }
        const Me = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
          Me[e] = function (n) {
            return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
          };
        });
        const Le = {};
        Me.transitional = function (e, t, n) {
          function r(e, t) {
            return "[Axios v1.6.2] Transitional option '" + e + "'" + t + (n ? ". " + n : "");
          }
          return (n, o, i) => {
            if (!1 === e) throw new H(r(o, " has been removed" + (t ? " in " + t : "")), H.ERR_DEPRECATED);
            return (
              t &&
                !Le[o] &&
                ((Le[o] = !0), console.warn(r(o, " has been deprecated since v" + t + " and will be removed in the near future"))),
              !e || e(n, o, i)
            );
          };
        };
        const $e = {
            assertOptions: function (e, t, n) {
              if ("object" != typeof e) throw new H("options must be an object", H.ERR_BAD_OPTION_VALUE);
              const r = Object.keys(e);
              let o = r.length;
              for (; o-- > 0; ) {
                const i = r[o],
                  s = t[i];
                if (s) {
                  const t = e[i],
                    n = void 0 === t || s(t, i, e);
                  if (!0 !== n) throw new H("option " + i + " must be " + n, H.ERR_BAD_OPTION_VALUE);
                } else if (!0 !== n) throw new H("Unknown option " + i, H.ERR_BAD_OPTION);
              }
            },
            validators: Me
          },
          Ne = $e.validators;
        class De {
          constructor(e) {
            (this.defaults = e), (this.interceptors = { request: new ee(), response: new ee() });
          }
          request(e, t) {
            "string" == typeof e ? ((t = t || {}).url = e) : (t = e || {}), (t = Ae(this.defaults, t));
            const { transitional: n, paramsSerializer: r, headers: o } = t;
            void 0 !== n &&
              $e.assertOptions(
                n,
                {
                  silentJSONParsing: Ne.transitional(Ne.boolean),
                  forcedJSONParsing: Ne.transitional(Ne.boolean),
                  clarifyTimeoutError: Ne.transitional(Ne.boolean)
                },
                !1
              ),
              null != r &&
                (D.isFunction(r)
                  ? (t.paramsSerializer = { serialize: r })
                  : $e.assertOptions(r, { encode: Ne.function, serialize: Ne.function }, !0)),
              (t.method = (t.method || this.defaults.method || "get").toLowerCase());
            let i = o && D.merge(o.common, o[t.method]);
            o &&
              D.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (e) => {
                delete o[e];
              }),
              (t.headers = me.concat(i, o));
            const s = [];
            let a = !0;
            this.interceptors.request.forEach(function (e) {
              ("function" == typeof e.runWhen && !1 === e.runWhen(t)) || ((a = a && e.synchronous), s.unshift(e.fulfilled, e.rejected));
            });
            const c = [];
            let l;
            this.interceptors.response.forEach(function (e) {
              c.push(e.fulfilled, e.rejected);
            });
            let u,
              d = 0;
            if (!a) {
              const e = [je.bind(this), void 0];
              for (e.unshift.apply(e, s), e.push.apply(e, c), u = e.length, l = Promise.resolve(t); d < u; ) l = l.then(e[d++], e[d++]);
              return l;
            }
            u = s.length;
            let f = t;
            for (d = 0; d < u; ) {
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
              l = je.call(this, f);
            } catch (e) {
              return Promise.reject(e);
            }
            for (d = 0, u = c.length; d < u; ) l = l.then(c[d++], c[d++]);
            return l;
          }
          getUri(e) {
            return K(ke((e = Ae(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer);
          }
        }
        D.forEach(["delete", "get", "head", "options"], function (e) {
          De.prototype[e] = function (t, n) {
            return this.request(Ae(n || {}, { method: e, url: t, data: (n || {}).data }));
          };
        }),
          D.forEach(["post", "put", "patch"], function (e) {
            function t(t) {
              return function (n, r, o) {
                return this.request(
                  Ae(o || {}, { method: e, headers: t ? { "Content-Type": "multipart/form-data" } : {}, url: n, data: r })
                );
              };
            }
            (De.prototype[e] = t()), (De.prototype[e + "Form"] = t(!0));
          });
        const Fe = De;
        class Ue {
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
              token: new Ue(function (t) {
                e = t;
              }),
              cancel: e
            };
          }
        }
        const Be = Ue,
          He = {
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
        Object.entries(He).forEach(([e, t]) => {
          He[t] = e;
        });
        const qe = He,
          Ve = (function e(t) {
            const n = new Fe(t),
              r = o(Fe.prototype.request, n);
            return (
              D.extend(r, Fe.prototype, n, { allOwnKeys: !0 }),
              D.extend(r, n, null, { allOwnKeys: !0 }),
              (r.create = function (n) {
                return e(Ae(t, n));
              }),
              r
            );
          })(ue);
        (Ve.Axios = Fe),
          (Ve.CanceledError = we),
          (Ve.CancelToken = Be),
          (Ve.isCancel = ye),
          (Ve.VERSION = "1.6.2"),
          (Ve.toFormData = G),
          (Ve.AxiosError = H),
          (Ve.Cancel = Ve.CanceledError),
          (Ve.all = function (e) {
            return Promise.all(e);
          }),
          (Ve.spread = function (e) {
            return function (t) {
              return e.apply(null, t);
            };
          }),
          (Ve.isAxiosError = function (e) {
            return D.isObject(e) && !0 === e.isAxiosError;
          }),
          (Ve.mergeConfig = Ae),
          (Ve.AxiosHeaders = me),
          (Ve.formToJSON = (e) => ce(D.isHTMLForm(e) ? new FormData(e) : e)),
          (Ve.getAdapter = Ie),
          (Ve.HttpStatusCode = qe),
          (Ve.default = Ve);
        const ze = Ve;
      },
      63420: (e, t, n) => {
        "use strict";
        n.d(t, { og: () => de, WB: () => J, Q_: () => ie, rn: () => ce, Kc: () => ae, Ah: () => le, Jk: () => ue });
        var r = n(20144),
          o = !0;
        function i() {
          return "undefined" != typeof navigator && "undefined" != typeof window ? window : "undefined" != typeof global ? global : {};
        }
        r.ZP.util.warn;
        const s = "function" == typeof Proxy,
          a = "devtools-plugin:setup";
        let c, l, u;
        class d {
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
                  void 0 !== c ||
                    ("undefined" != typeof window && window.performance
                      ? ((c = !0), (l = window.performance))
                      : "undefined" != typeof global && (null === (e = global.perf_hooks) || void 0 === e ? void 0 : e.performance)
                      ? ((c = !0), (l = global.perf_hooks.performance))
                      : (c = !1)),
                  c ? l.now() : Date.now()
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
        function f(e, t) {
          const n = e,
            r = i(),
            o = i().__VUE_DEVTOOLS_GLOBAL_HOOK__,
            c = s && n.enableEarlyProxy;
          if (!o || (!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ && c)) {
            const e = c ? new d(n, o) : null;
            (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({ pluginDescriptor: n, setupFn: t, proxy: e }),
              e && t(e.proxiedTarget);
          } else o.emit(a, e, t);
        }
        const p = (e) => (u = e),
          h = Symbol();
        function g(e) {
          return e && "object" == typeof e && "[object Object]" === Object.prototype.toString.call(e) && "function" != typeof e.toJSON;
        }
        var v;
        !(function (e) {
          (e.direct = "direct"), (e.patchObject = "patch object"), (e.patchFunction = "patch function");
        })(v || (v = {}));
        const m = "undefined" != typeof window,
          _ = "undefined" != typeof __VUE_PROD_DEVTOOLS__ && __VUE_PROD_DEVTOOLS__ && m,
          y = (() =>
            "object" == typeof window && window.window === window
              ? window
              : "object" == typeof self && self.self === self
              ? self
              : "object" == typeof global && global.global === global
              ? global
              : "object" == typeof globalThis
              ? globalThis
              : { HTMLElement: null })();
        function b(e, t, n) {
          const r = new XMLHttpRequest();
          r.open("GET", e),
            (r.responseType = "blob"),
            (r.onload = function () {
              E(r.response, t, n);
            }),
            (r.onerror = function () {
              console.error("could not download file");
            }),
            r.send();
        }
        function w(e) {
          const t = new XMLHttpRequest();
          t.open("HEAD", e, !1);
          try {
            t.send();
          } catch (e) {}
          return t.status >= 200 && t.status <= 299;
        }
        function S(e) {
          try {
            e.dispatchEvent(new MouseEvent("click"));
          } catch (t) {
            const n = document.createEvent("MouseEvents");
            n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
          }
        }
        const k = "object" == typeof navigator ? navigator : { userAgent: "" },
          O = (() => /Macintosh/.test(k.userAgent) && /AppleWebKit/.test(k.userAgent) && !/Safari/.test(k.userAgent))(),
          E = m
            ? "undefined" != typeof HTMLAnchorElement && "download" in HTMLAnchorElement.prototype && !O
              ? function (e, t = "download", n) {
                  const r = document.createElement("a");
                  (r.download = t),
                    (r.rel = "noopener"),
                    "string" == typeof e
                      ? ((r.href = e), r.origin !== location.origin ? (w(r.href) ? b(e, t, n) : ((r.target = "_blank"), S(r))) : S(r))
                      : ((r.href = URL.createObjectURL(e)),
                        setTimeout(function () {
                          URL.revokeObjectURL(r.href);
                        }, 4e4),
                        setTimeout(function () {
                          S(r);
                        }, 0));
                }
              : "msSaveOrOpenBlob" in k
              ? function (e, t = "download", n) {
                  if ("string" == typeof e)
                    if (w(e)) b(e, t, n);
                    else {
                      const t = document.createElement("a");
                      (t.href = e),
                        (t.target = "_blank"),
                        setTimeout(function () {
                          S(t);
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
                    return b(e, t, n);
                  const o = "application/octet-stream" === e.type,
                    i = /constructor/i.test(String(y.HTMLElement)) || "safari" in y,
                    s = /CriOS\/[\d]+/.test(navigator.userAgent);
                  if ((s || (o && i) || O) && "undefined" != typeof FileReader) {
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
        function C(e, t) {
          const n = "🍍 " + e;
          "function" == typeof __VUE_DEVTOOLS_TOAST__
            ? __VUE_DEVTOOLS_TOAST__(n, t)
            : "error" === t
            ? console.error(n)
            : "warn" === t
            ? console.warn(n)
            : console.log(n);
        }
        function T(e) {
          return "_a" in e && "install" in e;
        }
        function x() {
          if (!("clipboard" in navigator)) return C("Your browser doesn't support the Clipboard API", "error"), !0;
        }
        function I(e) {
          return (
            !!(e instanceof Error && e.message.toLowerCase().includes("document is not focused")) &&
            (C('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0)
          );
        }
        let P;
        function j(e, t) {
          for (const n in t) {
            const r = e.state.value[n];
            r ? Object.assign(r, t[n]) : (e.state.value[n] = t[n]);
          }
        }
        function R(e) {
          return { _custom: { display: e } };
        }
        const A = "🍍 Pinia (root)",
          M = "_root";
        function L(e) {
          return T(e) ? { id: M, label: A } : { id: e.$id, label: e.$id };
        }
        function $(e) {
          return e
            ? Array.isArray(e)
              ? e.reduce(
                  (e, t) => (
                    e.keys.push(t.key), e.operations.push(t.type), (e.oldValue[t.key] = t.oldValue), (e.newValue[t.key] = t.newValue), e
                  ),
                  { oldValue: {}, keys: [], operations: [], newValue: {} }
                )
              : { operation: R(e.type), key: R(e.key), oldValue: e.oldValue, newValue: e.newValue }
            : {};
        }
        function N(e) {
          switch (e) {
            case v.direct:
              return "mutation";
            case v.patchFunction:
            case v.patchObject:
              return "$patch";
            default:
              return "unknown";
          }
        }
        let D = !0;
        const F = [],
          U = "pinia:mutations",
          B = "pinia",
          { assign: H } = Object,
          q = (e) => "🍍 " + e;
        function V(e, t) {
          f(
            {
              id: "dev.esm.pinia",
              label: "Pinia 🍍",
              logo: "https://pinia.vuejs.org/logo.svg",
              packageName: "pinia",
              homepage: "https://pinia.vuejs.org",
              componentStateTypes: F,
              app: e
            },
            (n) => {
              "function" != typeof n.now &&
                C(
                  "You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."
                ),
                n.addTimelineLayer({ id: U, label: "Pinia 🍍", color: 15064968 }),
                n.addInspector({
                  id: B,
                  label: "Pinia 🍍",
                  icon: "storage",
                  treeFilterPlaceholder: "Search stores",
                  actions: [
                    {
                      icon: "content_copy",
                      action: () => {
                        !(async function (e) {
                          if (!x())
                            try {
                              await navigator.clipboard.writeText(JSON.stringify(e.state.value)), C("Global state copied to clipboard.");
                            } catch (e) {
                              if (I(e)) return;
                              C("Failed to serialize the state. Check the console for more details.", "error"), console.error(e);
                            }
                        })(t);
                      },
                      tooltip: "Serialize and copy the state"
                    },
                    {
                      icon: "content_paste",
                      action: async () => {
                        await (async function (e) {
                          if (!x())
                            try {
                              j(e, JSON.parse(await navigator.clipboard.readText())), C("Global state pasted from clipboard.");
                            } catch (e) {
                              if (I(e)) return;
                              C("Failed to deserialize the state from clipboard. Check the console for more details.", "error"),
                                console.error(e);
                            }
                        })(t),
                          n.sendInspectorTree(B),
                          n.sendInspectorState(B);
                      },
                      tooltip: "Replace the state with the content of your clipboard"
                    },
                    {
                      icon: "save",
                      action: () => {
                        !(async function (e) {
                          try {
                            E(new Blob([JSON.stringify(e.state.value)], { type: "text/plain;charset=utf-8" }), "pinia-state.json");
                          } catch (e) {
                            C("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(e);
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
                            const t =
                                (P || ((P = document.createElement("input")), (P.type = "file"), (P.accept = ".json")),
                                function () {
                                  return new Promise((e, t) => {
                                    (P.onchange = async () => {
                                      const t = P.files;
                                      if (!t) return e(null);
                                      const n = t.item(0);
                                      return e(n ? { text: await n.text(), file: n } : null);
                                    }),
                                      (P.oncancel = () => e(null)),
                                      (P.onerror = t),
                                      P.click();
                                  });
                                }),
                              n = await t();
                            if (!n) return;
                            const { text: r, file: o } = n;
                            j(e, JSON.parse(r)), C(`Global state imported from "${o.name}".`);
                          } catch (e) {
                            C("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(e);
                          }
                        })(t),
                          n.sendInspectorTree(B),
                          n.sendInspectorState(B);
                      },
                      tooltip: "Import the state from a JSON file"
                    }
                  ],
                  nodeActions: [
                    {
                      icon: "restore",
                      tooltip: 'Reset the state (with "$reset")',
                      action: (e) => {
                        const n = t._s.get(e);
                        n
                          ? "function" != typeof n.$reset
                            ? C(`Cannot reset "${e}" store because it doesn't have a "$reset" method implemented.`, "warn")
                            : (n.$reset(), C(`Store "${e}" reset.`))
                          : C(`Cannot reset "${e}" store because it wasn't found.`, "warn");
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
                        type: q(t.$id),
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
                            type: q(t.$id),
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
                  if (n.app === e && n.inspectorId === B) {
                    let e = [t];
                    (e = e.concat(Array.from(t._s.values()))),
                      (n.rootNodes = (
                        n.filter
                          ? e.filter((e) =>
                              "$id" in e
                                ? e.$id.toLowerCase().includes(n.filter.toLowerCase())
                                : A.toLowerCase().includes(n.filter.toLowerCase())
                            )
                          : e
                      ).map(L));
                  }
                }),
                n.on.getInspectorState((n) => {
                  if (n.app === e && n.inspectorId === B) {
                    const e = n.nodeId === M ? t : t._s.get(n.nodeId);
                    if (!e) return;
                    e &&
                      (n.state = (function (e) {
                        if (T(e)) {
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
                  if (n.app === e && n.inspectorId === B) {
                    const e = n.nodeId === M ? t : t._s.get(n.nodeId);
                    if (!e) return C(`store "${n.nodeId}" not found`, "error");
                    const { path: r } = n;
                    T(e)
                      ? r.unshift("state")
                      : (1 === r.length && e._customProperties.has(r[0]) && !(r[0] in e.$state)) || r.unshift("$state"),
                      (D = !1),
                      n.set(e, r, n.state.value),
                      (D = !0);
                  }
                }),
                n.on.editComponentState((e) => {
                  if (e.type.startsWith("🍍")) {
                    const n = e.type.replace(/^🍍\s*/, ""),
                      r = t._s.get(n);
                    if (!r) return C(`store "${n}" not found`, "error");
                    const { path: o } = e;
                    if ("state" !== o[0]) return C(`Invalid path for store "${n}":\n${o}\nOnly state can be modified.`);
                    (o[0] = "$state"), (D = !1), e.set(r, o, e.state.value), (D = !0);
                  }
                });
            }
          );
        }
        let z,
          W = 0;
        function G(e, t, n) {
          const o = t.reduce((t, n) => ((t[n] = (0, r.IU)(e)[n]), t), {});
          for (const t in o)
            e[t] = function () {
              const r = W,
                i = n ? new Proxy(e, { get: (...e) => ((z = r), Reflect.get(...e)), set: (...e) => ((z = r), Reflect.set(...e)) }) : e;
              z = r;
              const s = o[t].apply(i, arguments);
              return (z = void 0), s;
            };
        }
        function Z({ app: e, store: t, options: n }) {
          if (t.$id.startsWith("__hot:")) return;
          (t._isOptionsAPI = !!n.state), G(t, Object.keys(n.actions), t._isOptionsAPI);
          const o = t._hotUpdate;
          ((0, r.IU)(t)._hotUpdate = function (e) {
            o.apply(this, arguments), G(t, Object.keys(e._hmrPayload.actions), !!t._isOptionsAPI);
          }),
            (function (e, t) {
              F.includes(q(t.$id)) || F.push(q(t.$id)),
                f(
                  {
                    id: "dev.esm.pinia",
                    label: "Pinia 🍍",
                    logo: "https://pinia.vuejs.org/logo.svg",
                    packageName: "pinia",
                    homepage: "https://pinia.vuejs.org",
                    componentStateTypes: F,
                    app: e,
                    settings: { logStoreChanges: { label: "Notify about new/deleted stores", type: "boolean", defaultValue: !0 } }
                  },
                  (e) => {
                    const n = "function" == typeof e.now ? e.now.bind(e) : Date.now;
                    t.$onAction(({ after: r, onError: o, name: i, args: s }) => {
                      const a = W++;
                      e.addTimelineEvent({
                        layerId: U,
                        event: {
                          time: n(),
                          title: "🛫 " + i,
                          subtitle: "start",
                          data: { store: R(t.$id), action: R(i), args: s },
                          groupId: a
                        }
                      }),
                        r((r) => {
                          (z = void 0),
                            e.addTimelineEvent({
                              layerId: U,
                              event: {
                                time: n(),
                                title: "🛬 " + i,
                                subtitle: "end",
                                data: { store: R(t.$id), action: R(i), args: s, result: r },
                                groupId: a
                              }
                            });
                        }),
                        o((r) => {
                          (z = void 0),
                            e.addTimelineEvent({
                              layerId: U,
                              event: {
                                time: n(),
                                logType: "error",
                                title: "💥 " + i,
                                subtitle: "end",
                                data: { store: R(t.$id), action: R(i), args: s, error: r },
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
                              e.sendInspectorState(B),
                              D &&
                                e.addTimelineEvent({
                                  layerId: U,
                                  event: { time: n(), title: "Change", subtitle: o, data: { newValue: t, oldValue: r }, groupId: z }
                                });
                          },
                          { deep: !0 }
                        );
                      }),
                      t.$subscribe(
                        ({ events: r, type: o }, i) => {
                          if ((e.notifyComponentUpdate(), e.sendInspectorState(B), !D)) return;
                          const s = { time: n(), title: N(o), data: H({ store: R(t.$id) }, $(r)), groupId: z };
                          o === v.patchFunction
                            ? (s.subtitle = "⤵️")
                            : o === v.patchObject
                            ? (s.subtitle = "🧩")
                            : r && !Array.isArray(r) && (s.subtitle = r.type),
                            r &&
                              (s.data["rawEvent(s)"] = {
                                _custom: { display: "DebuggerEvent", type: "object", tooltip: "raw DebuggerEvent[]", value: r }
                              }),
                            e.addTimelineEvent({ layerId: U, event: s });
                        },
                        { detached: !0, flush: "sync" }
                      );
                    const o = t._hotUpdate;
                    t._hotUpdate = (0, r.Xl)((r) => {
                      o(r),
                        e.addTimelineEvent({
                          layerId: U,
                          event: {
                            time: n(),
                            title: "🔥 " + t.$id,
                            subtitle: "HMR update",
                            data: { store: R(t.$id), info: R("HMR update") }
                          }
                        }),
                        e.notifyComponentUpdate(),
                        e.sendInspectorTree(B),
                        e.sendInspectorState(B);
                    });
                    const { $dispose: i } = t;
                    (t.$dispose = () => {
                      i(),
                        e.notifyComponentUpdate(),
                        e.sendInspectorTree(B),
                        e.sendInspectorState(B),
                        e.getSettings().logStoreChanges && C(`Disposed "${t.$id}" store 🗑`);
                    }),
                      e.notifyComponentUpdate(),
                      e.sendInspectorTree(B),
                      e.sendInspectorState(B),
                      e.getSettings().logStoreChanges && C(`"${t.$id}" store installed 🆕`);
                  }
                );
            })(e, t);
        }
        function J() {
          const e = (0, r.B)(!0),
            t = e.run(() => (0, r.iH)({}));
          let n = [],
            i = [];
          const s = (0, r.Xl)({
            install(e) {
              p(s),
                o ||
                  ((s._a = e),
                  e.provide(h, s),
                  (e.config.globalProperties.$pinia = s),
                  _ && V(e, s),
                  i.forEach((e) => n.push(e)),
                  (i = []));
            },
            use(e) {
              return this._a || o ? n.push(e) : i.push(e), this;
            },
            _p: n,
            _a: null,
            _e: e,
            _s: new Map(),
            state: t
          });
          return _ && "undefined" != typeof Proxy && s.use(Z), s;
        }
        const Y = () => {};
        function Q(e, t, n, o = Y) {
          e.push(t);
          const i = () => {
            const n = e.indexOf(t);
            n > -1 && (e.splice(n, 1), o());
          };
          return !n && (0, r.nZ)() && (0, r.EB)(i), i;
        }
        function X(e, ...t) {
          e.slice().forEach((e) => {
            e(...t);
          });
        }
        const K = (e) => e();
        function ee(e, t) {
          e instanceof Map && t instanceof Map && t.forEach((t, n) => e.set(n, t)),
            e instanceof Set && t instanceof Set && t.forEach(e.add, e);
          for (const n in t) {
            if (!t.hasOwnProperty(n)) continue;
            const o = t[n],
              i = e[n];
            g(i) && g(o) && e.hasOwnProperty(n) && !(0, r.dq)(o) && !(0, r.PG)(o) ? (e[n] = ee(i, o)) : (e[n] = o);
          }
          return e;
        }
        const te = Symbol(),
          ne = new WeakMap(),
          { assign: re } = Object;
        function oe(e, t, n = {}, i, s, a) {
          let c;
          const l = re({ actions: {} }, n),
            u = { deep: !0 };
          let d,
            f,
            h,
            m = [],
            y = [];
          const b = i.state.value[e];
          a || b || (o ? (0, r.t8)(i.state.value, e, {}) : (i.state.value[e] = {}));
          const w = (0, r.iH)({});
          let S;
          function k(t) {
            let n;
            (d = f = !1),
              "function" == typeof t
                ? (t(i.state.value[e]), (n = { type: v.patchFunction, storeId: e, events: h }))
                : (ee(i.state.value[e], t), (n = { type: v.patchObject, payload: t, storeId: e, events: h }));
            const o = (S = Symbol());
            (0, r.Y3)().then(() => {
              S === o && (d = !0);
            }),
              (f = !0),
              X(m, n, i.state.value[e]);
          }
          const O = a
            ? function () {
                const { state: e } = n,
                  t = e ? e() : {};
                this.$patch((e) => {
                  re(e, t);
                });
              }
            : Y;
          function E(t, n) {
            return function () {
              p(i);
              const r = Array.from(arguments),
                o = [],
                s = [];
              let a;
              X(y, {
                args: r,
                name: t,
                store: x,
                after: function (e) {
                  o.push(e);
                },
                onError: function (e) {
                  s.push(e);
                }
              });
              try {
                a = n.apply(this && this.$id === e ? this : x, r);
              } catch (e) {
                throw (X(s, e), e);
              }
              return a instanceof Promise ? a.then((e) => (X(o, e), e)).catch((e) => (X(s, e), Promise.reject(e))) : (X(o, a), a);
            };
          }
          const C = (0, r.Xl)({ actions: {}, getters: {}, state: [], hotState: w }),
            T = {
              _p: i,
              $id: e,
              $onAction: Q.bind(null, y),
              $patch: k,
              $reset: O,
              $subscribe(t, n = {}) {
                const o = Q(m, t, n.detached, () => s()),
                  s = c.run(() =>
                    (0, r.YP)(
                      () => i.state.value[e],
                      (r) => {
                        ("sync" === n.flush ? f : d) && t({ storeId: e, type: v.direct, events: h }, r);
                      },
                      re({}, u, n)
                    )
                  );
                return o;
              },
              $dispose: function () {
                c.stop(), (m = []), (y = []), i._s.delete(e);
              }
            };
          o && (T._r = !1);
          const x = (0, r.qj)(_ ? re({ _hmrPayload: C, _customProperties: (0, r.Xl)(new Set()) }, T) : T);
          i._s.set(e, x);
          const I = ((i._a && i._a.runWithContext) || K)(() => i._e.run(() => (c = (0, r.B)()).run(t)));
          for (const t in I) {
            const n = I[t];
            if (((0, r.dq)(n) && ((j = n), !(0, r.dq)(j) || !j.effect)) || (0, r.PG)(n))
              a ||
                (!b || ((P = n), o ? ne.has(P) : g(P) && P.hasOwnProperty(te)) || ((0, r.dq)(n) ? (n.value = b[t]) : ee(n, b[t])),
                o ? (0, r.t8)(i.state.value[e], t, n) : (i.state.value[e][t] = n));
            else if ("function" == typeof n) {
              const e = E(t, n);
              o ? (0, r.t8)(I, t, e) : (I[t] = e), (l.actions[t] = n);
            }
          }
          var P, j;
          if (
            (o
              ? Object.keys(I).forEach((e) => {
                  (0, r.t8)(x, e, I[e]);
                })
              : (re(x, I), re((0, r.IU)(x), I)),
            Object.defineProperty(x, "$state", {
              get: () => i.state.value[e],
              set: (e) => {
                k((t) => {
                  re(t, e);
                });
              }
            }),
            _)
          ) {
            const e = { writable: !0, configurable: !0, enumerable: !1 };
            ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((t) => {
              Object.defineProperty(x, t, re({ value: x[t] }, e));
            });
          }
          return (
            o && (x._r = !0),
            i._p.forEach((e) => {
              if (_) {
                const t = c.run(() => e({ store: x, app: i._a, pinia: i, options: l }));
                Object.keys(t || {}).forEach((e) => x._customProperties.add(e)), re(x, t);
              } else
                re(
                  x,
                  c.run(() => e({ store: x, app: i._a, pinia: i, options: l }))
                );
            }),
            b && a && n.hydrate && n.hydrate(x.$state, b),
            (d = !0),
            (f = !0),
            x
          );
        }
        function ie(e, t, n) {
          let i, s;
          const a = "function" == typeof t;
          function c(e, n) {
            const c = !!(0, r.FN)();
            return (
              (e = e || (c ? (0, r.f3)(h, null) : null)) && p(e),
              (e = u)._s.has(i) ||
                (a
                  ? oe(i, t, s, e)
                  : (function (e, t, n, i) {
                      const { state: s, actions: a, getters: c } = t,
                        l = n.state.value[e];
                      let u;
                      u = oe(
                        e,
                        function () {
                          l || (o ? (0, r.t8)(n.state.value, e, s ? s() : {}) : (n.state.value[e] = s ? s() : {}));
                          const t = (0, r.BK)(n.state.value[e]);
                          return re(
                            t,
                            a,
                            Object.keys(c || {}).reduce(
                              (t, i) => (
                                (t[i] = (0, r.Xl)(
                                  (0, r.Fl)(() => {
                                    p(n);
                                    const t = n._s.get(e);
                                    if (!o || t._r) return c[i].call(t, t);
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
                      );
                    })(i, s, e)),
              e._s.get(i)
            );
          }
          return "string" == typeof e ? ((i = e), (s = a ? n : t)) : ((s = e), (i = e.id)), (c.$id = i), c;
        }
        let se = "Store";
        function ae(...e) {
          return e.reduce(
            (e, t) => (
              (e[t.$id + se] = function () {
                return t(this.$pinia);
              }),
              e
            ),
            {}
          );
        }
        function ce(e, t) {
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
        function le(e, t) {
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
        function ue(e) {
          if (o) return (0, r.BK)(e);
          {
            e = (0, r.IU)(e);
            const t = {};
            for (const n in e) {
              const o = e[n];
              ((0, r.dq)(o) || (0, r.PG)(o)) && (t[n] = (0, r.Vh)(e, n));
            }
            return t;
          }
        }
        const de = function (e) {
          e.mixin({
            beforeCreate() {
              const e = this.$options;
              if (e.pinia) {
                const t = e.pinia;
                if (!this._provided) {
                  const e = {};
                  Object.defineProperty(this, "_provided", { get: () => e, set: (t) => Object.assign(e, t) });
                }
                (this._provided[h] = t), this.$pinia || (this.$pinia = t), (t._a = this), m && p(t), _ && V(t._a, t);
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
      4773 === e
        ? "4773.js"
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
        : 3608 === e
        ? "3608.js"
        : 6781 === e
        ? "6781.js"
        : 1886 === e
        ? "1886.js"
        : 7652 === e
        ? "7652.js"
        : 2066 === e
        ? "2066.js"
        : 4164 === e
        ? "4164.js"
        : 6179 === e
        ? "6179.js"
        : 826 === e
        ? "826.js"
        : 9730 === e
        ? "9730.js"
        : 3814 === e
        ? "3814.js"
        : 5645 === e
        ? "5645.js"
        : 1103 === e
        ? "1103.js"
        : 4016 === e
        ? "4016.js"
        : 8343 === e
        ? "8343.js"
        : 8251 === e
        ? "8251.js"
        : 9209 === e
        ? "9209.js"
        : 8696 === e
        ? "8696.js"
        : 1001 === e
        ? "1001.js"
        : 1587 === e
        ? "1587.js"
        : 7734 === e
        ? "7734.js"
        : 9016 === e
        ? "9016.js"
        : 309 === e
        ? "309.js"
        : 5442 === e
        ? "5442.js"
        : 8002 === e
        ? "8002.js"
        : 6370 === e
        ? "6370.js"
        : 4085 === e
        ? "4085.js"
        : 4139 === e
        ? "4139.js"
        : 8955 === e
        ? "8955.js"
        : 7638 === e
        ? "7638.js"
        : 202 === e
        ? "202.js"
        : 1477 === e
        ? "1477.js"
        : 2629 === e
        ? "2629.js"
        : 8342 === e
        ? "8342.js"
        : 9443 === e
        ? "9443.js"
        : 3313 === e
        ? "3313.js"
        : 6786 === e
        ? "6786.js"
        : 1766 === e
        ? "1766.js"
        : 7085 === e
        ? "7085.js"
        : 5930 === e
        ? "5930.js"
        : 3954 === e
        ? "3954.js"
        : 9306 === e
        ? "9306.js"
        : 1073 === e
        ? "1073.js"
        : 6988 === e
        ? "6988.js"
        : 4411 === e
        ? "4411.js"
        : 7091 === e
        ? "7091.js"
        : 9253 === e
        ? "9253.js"
        : 3105 === e
        ? "3105.js"
        : 8971 === e
        ? "8971.js"
        : 9586 === e
        ? "9586.js"
        : 6691 === e
        ? "6691.js"
        : 3283 === e
        ? "3283.js"
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
        : 6856 === e
        ? "6856.js"
        : 102 === e
        ? "102.js"
        : 229 === e
        ? "229.js"
        : 1603 === e
        ? "1603.js"
        : 1994 === e
        ? "1994.js"
        : 13 === e
        ? "13.js"
        : 7032 === e
        ? "7032.js"
        : 2092 === e
        ? "2092.js"
        : 5195 === e
        ? "5195.js"
        : 4296 === e
        ? "4296.js"
        : 3946 === e
        ? "3946.js"
        : 604 === e
        ? "604.js"
        : 1396 === e
        ? "1396.js"
        : 827 === e
        ? "827.js"
        : 7424 === e
        ? "7424.js"
        : 6700 === e
        ? "6700.js"
        : 438 === e
        ? "438.js"
        : 8071 === e
        ? "8071.js"
        : 3491 === e
        ? "3491.js"
        : 1011 === e
        ? "1011.js"
        : 1976 === e
        ? "1976.js"
        : 2578 === e
        ? "2578.js"
        : 6498 === e
        ? "6498.js"
        : 7154 === e
        ? "7154.js"
        : 4817 === e
        ? "4817.js"
        : 962 === e
        ? "962.js"
        : 4566 === e
        ? "4566.js"
        : 1567 === e
        ? "1567.js"
        : 254 === e
        ? "254.js"
        : 1074 === e
        ? "1074.js"
        : 4442 === e
        ? "4442.js"
        : 8298 === e
        ? "8298.js"
        : 5926 === e
        ? "5926.js"
        : 7695 === e
        ? "7695.js"
        : 2938 === e
        ? "2938.js"
        : 9718 === e
        ? "9718.js"
        : 7896 === e
        ? "7896.js"
        : 2726 === e
        ? "2726.js"
        : 9965 === e
        ? "9965.js"
        : 9150 === e
        ? "9150.js"
        : 7490 === e
        ? "7490.js"
        : 4427 === e
        ? "4427.js"
        : 338 === e
        ? "338.js"
        : 940 === e
        ? "940.js"
        : 9152 === e
        ? "9152.js"
        : 159 === e
        ? "159.js"
        : 3636 === e
        ? "3636.js"
        : 9541 === e
        ? "9541.js"
        : 8294 === e
        ? "8294.js"
        : 5066 === e
        ? "5066.js"
        : 6399 === e
        ? "6399.js"
        : 9980 === e
        ? "9980.js"
        : 955 === e
        ? "955.js"
        : 842 === e
        ? "842.js"
        : 5096 === e
        ? "5096.js"
        : 3246 === e
        ? "3246.js"
        : 5852 === e
        ? "5852.js"
        : 7119 === e
        ? "7119.js"
        : 5774 === e
        ? "5774.js"
        : 5508 === e
        ? "5508.js"
        : 9537 === e
        ? "9537.js"
        : 4752 === e
        ? "4752.js"
        : 5415 === e
        ? "5415.js"
        : 1952 === e
        ? "1952.js"
        : 1841 === e
        ? "1841.js"
        : 4594 === e
        ? "4594.js"
        : 3509 === e
        ? "3509.js"
        : 5598 === e
        ? "5598.js"
        : 464 === e
        ? "464.js"
        : 856 === e
        ? "856.js"
        : 6283 === e
        ? "6283.js"
        : 3746 === e
        ? "3746.js"
        : 6686 === e
        ? "6686.js"
        : 1869 === e
        ? "1869.js"
        : 4320 === e
        ? "4320.js"
        : 8674 === e
        ? "8674.js"
        : 7168 === e
        ? "7168.js"
        : 3473 === e
        ? "3473.js"
        : 688 === e
        ? "688.js"
        : 7314 === e
        ? "7314.js"
        : 914 === e
        ? "914.js"
        : 7745 === e
        ? "7745.js"
        : 12 === e
        ? "12.js"
        : 6207 === e
        ? "6207.js"
        : 8117 === e
        ? "8117.js"
        : 1510 === e
        ? "1510.js"
        : 3268 === e
        ? "3268.js"
        : 893 === e
        ? "893.js"
        : 4197 === e
        ? "4197.js"
        : 7140 === e
        ? "7140.js"
        : 7645 === e
        ? "7645.js"
        : 6284 === e
        ? "6284.js"
        : 9538 === e
        ? "9538.js"
        : 851 === e
        ? "851.js"
        : 8619 === e
        ? "8619.js"
        : 7200 === e
        ? "7200.js"
        : 7259 === e
        ? "7259.js"
        : 599 === e
        ? "599.js"
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
          for (var l = document.getElementsByTagName("script"), u = 0; u < l.length; u++) {
            var d = l[u];
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
        if (n.length) for (var r = n.length - 1; r > -1 && !e; ) e = n[r--].src;
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
            l = 0;
          if (i.some((t) => 0 !== e[t])) {
            for (r in a) s.o(a, r) && (s.m[r] = a[r]);
            c && c(s);
          }
          for (t && t(n); l < i.length; l++) (o = i[l]), s.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
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
      window.addEventListener("error", (e) => {
        t.error("Unhandled Exception", e);
      });
      const c = /<\/?[a-z][\s\S]*>/;
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
      var u = s(71257),
        d = s(42935);
      let f = function () {
        (f.prototype.done = (e) => ((this.doneCallback = e), this)),
          (f.prototype.fail = (e) => ((this.failCallback = e), this)),
          (f.prototype.always = (e) => ((this.alwaysCallback = e), this));
      };
      function p(e, t = {}) {
        return t.addToPrototype ? this : new h(e, t);
      }
      function h(e, t) {
        const n = (e = []) => {
          (e = Array.from(e).filter((e, t) => {
            if (e) return (this[t] = e), e;
          })),
            Object.defineProperty(this, "length", { value: e.length });
        };
        if ("string" == typeof e)
          0 === e.indexOf("<") && ((r = e), c.test(r))
            ? n([l(e, t)])
            : n("window" === e ? [window] : "document" === e ? [document] : document.querySelectorAll(e));
        else {
          if (e instanceof p) return e;
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
      (p.contains = function (e, t) {
        return e.contains(t);
      }),
        (p.extend = function () {
          return Object.assign.apply(null, arguments);
        }),
        (p.ajax = function (e = {}) {
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
            l = new f();
          (l.doneCallback = o), (l.failCallback = i), (l.alwaysCallback = a);
          const p = { method: t, url: n, cancelToken: s };
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
              (p.headers = c(
                (function () {
                  const e = {
                      "X-Momentum-Version": m.globals.version,
                      "X-Momentum-ClientDate": m.utils.getLocalDateTimeString(),
                      "X-Momentum-TabId": d.Z
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
            r && ("get" === t ? (p.params = r) : (p.data = r)),
            (0, u.default)(p)
              .then((e) => {
                l.doneCallback && l.doneCallback(e.data, "success");
              })
              .catch((e) => {
                console.error(e),
                  l.failCallback &&
                    (e.response &&
                      ((e.status = e.response.status),
                      e.response.data && (e.responseJSON = { message: e.response.data, msg: e.response.data })),
                    l.failCallback(e));
              })
              .finally(() => {
                l.alwaysCallback && l.alwaysCallback();
              }),
            l
          );
        }),
        (h.prototype = new p(null, { addToPrototype: !0 })),
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
              return this.length ? g(e >= 0 ? this[e] : this[this.length + e - 1]) : this;
            }),
            (e.prototype.first = function () {
              return this.length ? g([this[0]]) : this;
            }),
            (e.prototype.last = function () {
              return this.length ? g([this[Object.keys(this).length - 1]]) : this;
            }),
            (e.prototype.next = function (e) {
              if (!this.length) return this;
              const t = [];
              return (
                this.each(function () {
                  const e = this.nextSibling;
                  e && t.push(e);
                }),
                e ? g(t).filter(e) : g(t)
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
                e ? g(t).filter(e) : g(t)
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
                e ? g(t).filter(e) : g(t)
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
                e ? g(t).filter(e) : g(t)
              );
            }),
            (e.prototype.find = function (e) {
              let t = [];
              return (
                this.each(function () {
                  const n = this.querySelectorAll(e);
                  n.length && (t = t.concat(Array.from(n)));
                }),
                t.length ? g(t) : g()
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
                t.length ? g(t) : g()
              );
            }),
            (e.prototype.parent = function (e) {
              const t = g(Object.values(this).map((e) => e.parentElement));
              return e ? t.filter(e) : t;
            }),
            (e.prototype.children = function (e) {
              let t = [];
              return (
                this.each(function () {
                  t = t.concat(Array.from(this.children));
                }),
                e ? g(t).filter(e) : g(t)
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
                e ? g(t).filter(e) : g(t)
              );
            }),
            (e.prototype.filter = function (e) {
              return g(Object.values(this).filter((t) => r(t, e)));
            }),
            (e.prototype.not = function (e) {
              return g(Object.values(this).filter((t) => !r(t, e)));
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
                  : e instanceof g || (e && e.jquery)
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
                    : e instanceof g && ((this.innerHTML = ""), e.each((e, t) => this.append(t)));
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
                      (function (e, t, n, r, o) {
                        n || (n = "root");
                        let i = e;
                        [t, n, r].forEach((e) => {
                          e === r ? (i[e] || (i[e] = []), i[e].push(o)) : (i[e] || (i[e] = {}), (i = i[e]));
                        });
                      })(t, s, n, i, o),
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
                t.length ? g(t) : this
              );
            }),
            (e.prototype.prependTo = function (e) {
              const t = [];
              return (
                o.call(this, e, function (e, n, r) {
                  e.prepend(i(this, n, r.length, t));
                }),
                t.length ? g(t) : this
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
              if (this.length) return g(Object.values(this).map((e) => e.cloneNode(!0)));
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
                  const n = g(this);
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
                  const r = g(this);
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
                  g(this).removeClass("m-hide m-hide-display m-hide-visibility");
                }),
                this
              );
            }),
            (e.prototype.mHide = function (e) {
              return (
                this.each(function () {
                  const t = g(this);
                  e ? t.addClass("m-hide-visibility") : t.addClass("m-hide-display");
                }),
                this
              );
            }),
            (e.prototype.mToggle = function (e, t) {
              return (
                this.each(function () {
                  const n = g(this);
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
                g(this).addClass("pseudo-hover");
              });
            }),
            (e.prototype.pseudoHoverOff = function () {
              this.each(function () {
                g(this).removeClass("pseudo-hover");
              });
            });
          let n = {};
          (e.prototype.clickOutside = function (e, t) {
            return (
              this.each(function () {
                const r = g(this);
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
                  const o = g(this);
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
        })(h),
        (window.$ = p);
      const g = p;
      var v = s(92729),
        _ = s(96046),
        y = s(80809),
        b = (s(30495), s(52713)),
        w = s(65238),
        S = s(35174);
      const k = "user:migration:",
        O = { TIME: k + "time", FOCUS: k + "focus", ONBOARDING: k + "onboarding" },
        E = "tab.legacyUserMigration",
        C = new (class {
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
            const e = await (0, b.Z)("legacyUserMigrationPortion");
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
                chrome.runtime.sendMessage({ type: "legacyUserMigration", data: { tabId: d.Z } }, e);
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
              })(S.Z);
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
                    tabId: d.Z
                  }
                }
              ]
            }),
              localStorage.setItem(O.FOCUS, "true");
          }
          async _saveOnboardingIntroAsComplete() {
            const e = (await Promise.all([s.e(4773), s.e(3064), s.e(7651), s.e(9437)]).then(s.bind(s, 35746))).default,
              t = new e.Model();
            t.updateData({ name: w.os.FREE_INTRODUCTION, status: "complete" }), await e.add(t), localStorage.setItem(O.ONBOARDING, "true");
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
      var T = s(7838);
      s(24960), s(25659);
      const x = "versionWarning:lastDismissed",
        I = localStorage.getItem(x);
      function P(e) {
        T.Z.$emit("flashMessage", {
          message: e,
          error: !0,
          contact: { messageText: "If you need further assistance", linkText: "please contact our support team." },
          onDismiss: () => {
            localStorage.setItem(x, Date.now().toString());
          }
        });
      }
      var j;
      s(72918), s(95967);
      const R = localStorage.getItem("token");
      null !== (j = window.browser) &&
        void 0 !== j &&
        j.runtime &&
        y.Z.isSafari() &&
        (R
          ? localStorage.getItem("appStorageTokenMigration:successful") ||
            y.Z.saveTokenToAppStorage().then(() => {
              localStorage.setItem("appStorageTokenMigration:successful", !0);
            })
          : (async () => {
              const e = await y.Z.getTokenFromAppStorage();
              if (e) {
                const { token: n, tokenUuid: r, clientUuid: o, userUuid: i, email: s } = e;
                n && localStorage.setItem("token", n),
                  r && localStorage.setItem("token_uuid", r.toLowerCase()),
                  o && localStorage.setItem("client_uuid", o.toLowerCase()),
                  s && localStorage.setItem("email", s),
                  i && t(i);
                try {
                  if (!i || !s) {
                    const e = await S.Z.get("user/profile?details=1");
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
      var A = s(81405),
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
          components: { ThreeColLayout: s(3728).Z },
          directives: { ResizeSensor: D.Z },
          data: () => ({ topRowHeight: 0, centerAboveHeight: 0, sidebarsWidth: 0 }),
          computed: { windowHeight: () => _.Z.windowDimensions.height, overlayActive: () => _.Z.dashboardOverlayActive },
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
      s(87953);
      const q = (0, s(51900).Z)(H, N, [], !1, null, "45b98c80", null).exports;
      new L.ZP({ render: (e) => e(q) }).$mount(".dashboard"), s(64398);
      var V = s(77140),
        z = s(35597);
      (m.constants = v.Cg),
        (m.reactive = _.Z),
        (m.utils = y.Z),
        (m.$e = T.Z),
        (m.Analytics = A.ZP),
        (m.versionDeprecationWarningCheck = async function () {
          const e = m.globals.version,
            t = await (0, b.Z)("versions.deprecated"),
            n = await (0, b.Z)("versions.pendingDeprecation");
          parseInt(I) + 432e5 > Date.now() ||
            (t && !y.Z.currentVersionIsNewerThan(t)
              ? P(`Your version of Momentum (${e}) is no longer supported. Please restart your browser to update.`)
              : n &&
                !y.Z.currentVersionIsNewerThan(n) &&
                P(`Your version of Momentum (${e}) will soon be unsupported. Please restart your browser to update.`));
        }),
        (m.legacyUserMigration = C),
        (m.constants.LEGACY_USER_MIGRATION_KEYS = O),
        (m.appZStack = M.Z),
        (m.promisifiedChrome = V.H),
        (m.timestampService = z.Z);
    })();
})();
