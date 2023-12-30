/*******************************************************
 * Copyright (C) 2018-2023 WP Interactive Media, Inc. - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 *******************************************************/
(() => {
  var t = {
      5640: () => {
        !(function (t, e, i) {
          "use strict";
          if (t.MutationObserver && "undefined" != typeof HTMLElement) {
            var n,
              s = 0,
              u =
                ((n =
                  HTMLElement.prototype.matches ||
                  HTMLElement.prototype.webkitMatchesSelector ||
                  HTMLElement.prototype.mozMatchesSelector ||
                  HTMLElement.prototype.msMatchesSelector),
                {
                  matchesSelector: function (t, e) {
                    return t instanceof HTMLElement && n.call(t, e);
                  },
                  addMethod: function (t, e, i) {
                    var n = t[e];
                    t[e] = function () {
                      return i.length == arguments.length
                        ? i.apply(this, arguments)
                        : "function" == typeof n
                        ? n.apply(this, arguments)
                        : void 0;
                    };
                  },
                  callCallbacks: function (t, e) {
                    e && e.options.onceOnly && 1 == e.firedElems.length && (t = [t[0]]);
                    for (var i, n = 0; (i = t[n]); n++) i && i.callback && i.callback.call(i.elem, i.elem);
                    e &&
                      e.options.onceOnly &&
                      1 == e.firedElems.length &&
                      e.me.unbindEventWithSelectorAndCallback.call(e.target, e.selector, e.callback);
                  },
                  checkChildNodesRecursively: function (t, e, i, n) {
                    for (var s, o = 0; (s = t[o]); o++)
                      i(s, e, n) && n.push({ callback: e.callback, elem: s }),
                        s.childNodes.length > 0 && u.checkChildNodesRecursively(s.childNodes, e, i, n);
                  },
                  mergeArrays: function (t, e) {
                    var i,
                      n = {};
                    for (i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
                    for (i in e) e.hasOwnProperty(i) && (n[i] = e[i]);
                    return n;
                  },
                  toElementsArray: function (e) {
                    return void 0 === e || ("number" == typeof e.length && e !== t) || (e = [e]), e;
                  }
                }),
              o = (function () {
                var t = function () {
                  (this.t = []), (this.i = null), (this.u = null);
                };
                return (
                  (t.prototype.addEvent = function (t, e, i, n) {
                    var s = { target: t, selector: e, options: i, callback: n, firedElems: [] };
                    return this.i && this.i(s), this.t.push(s), s;
                  }),
                  (t.prototype.removeEvent = function (t) {
                    for (var e, i = this.t.length - 1; (e = this.t[i]); i--)
                      if (t(e)) {
                        this.u && this.u(e);
                        var n = this.t.splice(i, 1);
                        n && n.length && (n[0].callback = null);
                      }
                  }),
                  (t.prototype.beforeAdding = function (t) {
                    this.i = t;
                  }),
                  (t.prototype.beforeRemoving = function (t) {
                    this.u = t;
                  }),
                  t
                );
              })(),
              r = function (e, n) {
                var s = new o(),
                  r = this,
                  a = { fireOnAttributesModification: !1 };
                return (
                  s.beforeAdding(function (i) {
                    var s,
                      u = i.target;
                    (u !== t.document && u !== t) || (u = document.getElementsByTagName("html")[0]),
                      (s = new MutationObserver(function (t) {
                        n.call(this, t, i);
                      }));
                    var o = e(i.options);
                    s.observe(u, o), (i.observer = s), (i.me = r);
                  }),
                  s.beforeRemoving(function (t) {
                    t.observer.disconnect();
                  }),
                  (this.bindEvent = function (t, e, i) {
                    e = u.mergeArrays(a, e);
                    for (var n = u.toElementsArray(this), o = 0; o < n.length; o++) s.addEvent(n[o], t, e, i);
                  }),
                  (this.unbindEvent = function () {
                    var t = u.toElementsArray(this);
                    s.removeEvent(function (e) {
                      for (var n = 0; n < t.length; n++) if (this === i || e.target === t[n]) return !0;
                      return !1;
                    });
                  }),
                  (this.unbindEventWithSelectorOrCallback = function (t) {
                    var e,
                      n = u.toElementsArray(this),
                      o = t;
                    (e =
                      "function" == typeof t
                        ? function (t) {
                            for (var e = 0; e < n.length; e++) if ((this === i || t.target === n[e]) && t.callback === o) return !0;
                            return !1;
                          }
                        : function (e) {
                            for (var s = 0; s < n.length; s++) if ((this === i || e.target === n[s]) && e.selector === t) return !0;
                            return !1;
                          }),
                      s.removeEvent(e);
                  }),
                  (this.unbindEventWithSelectorAndCallback = function (t, e) {
                    var n = u.toElementsArray(this);
                    s.removeEvent(function (s) {
                      for (var u = 0; u < n.length; u++)
                        if ((this === i || s.target === n[u]) && s.selector === t && s.callback === e) return !0;
                      return !1;
                    });
                  }),
                  this
                );
              },
              a = new (function () {
                var t = { fireOnAttributesModification: !1, onceOnly: !1, existing: !1 };
                function e(t, e, n) {
                  return (
                    !(!u.matchesSelector(t, e.selector) || (t.D === i && (t.D = s++), -1 != e.firedElems.indexOf(t.D))) &&
                    (e.firedElems.push(t.D), !0)
                  );
                }
                var n = (a = new r(
                  function (t) {
                    var e = { attributes: !1, childList: !0, subtree: !0 };
                    return t.fireOnAttributesModification && (e.attributes = !0), e;
                  },
                  function (t, i) {
                    t.forEach(function (t) {
                      var n = t.addedNodes,
                        s = t.target,
                        o = [];
                      null !== n && n.length > 0
                        ? u.checkChildNodesRecursively(n, i, e, o)
                        : "attributes" === t.type && e(s, i, o) && o.push({ callback: i.callback, elem: s }),
                        u.callCallbacks(o, i);
                    });
                  }
                )).bindEvent;
                return (
                  (a.bindEvent = function (e, i, s) {
                    void 0 === s ? ((s = i), (i = t)) : (i = u.mergeArrays(t, i));
                    var o = u.toElementsArray(this);
                    if (i.existing) {
                      for (var r = [], a = 0; a < o.length; a++)
                        for (var c = o[a].querySelectorAll(e), D = 0; D < c.length; D++) r.push({ callback: s, elem: c[D] });
                      if (i.onceOnly && r.length) return s.call(r[0].elem, r[0].elem);
                      setTimeout(u.callCallbacks, 1, r);
                    }
                    n.call(this, e, i, s);
                  }),
                  a
                );
              })(),
              c = new (function () {
                var t = {};
                function e(t, e) {
                  return u.matchesSelector(t, e.selector);
                }
                var i = (c = new r(
                  function () {
                    return { childList: !0, subtree: !0 };
                  },
                  function (t, i) {
                    t.forEach(function (t) {
                      var n = t.removedNodes,
                        s = [];
                      null !== n && n.length > 0 && u.checkChildNodesRecursively(n, i, e, s), u.callCallbacks(s, i);
                    });
                  }
                )).bindEvent;
                return (
                  (c.bindEvent = function (e, n, s) {
                    void 0 === s ? ((s = n), (n = t)) : (n = u.mergeArrays(t, n)), i.call(this, e, n, s);
                  }),
                  c
                );
              })();
            e && d(e.fn),
              d(HTMLElement.prototype),
              d(NodeList.prototype),
              d(HTMLCollection.prototype),
              d(HTMLDocument.prototype),
              d(Window.prototype);
            var D = {};
            return h(a, D, "unbindAllArrive"), h(c, D, "unbindAllLeave"), D;
          }
          function h(t, e, i) {
            u.addMethod(e, i, t.unbindEvent),
              u.addMethod(e, i, t.unbindEventWithSelectorOrCallback),
              u.addMethod(e, i, t.unbindEventWithSelectorAndCallback);
          }
          function d(t) {
            (t.arrive = a.bindEvent), h(a, t, "unbindArrive"), (t.leave = c.bindEvent), h(c, t, "unbindLeave");
          }
        })(window, "undefined" == typeof jQuery ? null : jQuery, void 0);
      },
      1227: (t, e, i) => {
        (e.formatArgs = function (e) {
          if (
            ((e[0] =
              (this.useColors ? "%c" : "") +
              this.namespace +
              (this.useColors ? " %c" : " ") +
              e[0] +
              (this.useColors ? "%c " : " ") +
              "+" +
              t.exports.humanize(this.diff)),
            !this.useColors)
          )
            return;
          const i = "color: " + this.color;
          e.splice(1, 0, i, "color: inherit");
          let n = 0,
            s = 0;
          e[0].replace(/%[a-zA-Z%]/g, (t) => {
            "%%" !== t && (n++, "%c" === t && (s = n));
          }),
            e.splice(s, 0, i);
        }),
          (e.save = function (t) {
            try {
              t ? e.storage.setItem("debug", t) : e.storage.removeItem("debug");
            } catch (t) {}
          }),
          (e.load = function () {
            let t;
            try {
              t = e.storage.getItem("debug");
            } catch (t) {}
            !t && "undefined" != typeof process && "env" in process && (t = process.env.DEBUG);
            return t;
          }),
          (e.useColors = function () {
            if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return !0;
            if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
              return !1;
            return (
              ("undefined" != typeof document &&
                document.documentElement &&
                document.documentElement.style &&
                document.documentElement.style.WebkitAppearance) ||
              ("undefined" != typeof window &&
                window.console &&
                (window.console.firebug || (window.console.exception && window.console.table))) ||
              ("undefined" != typeof navigator &&
                navigator.userAgent &&
                navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
                parseInt(RegExp.$1, 10) >= 31) ||
              ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
            );
          }),
          (e.storage = (function () {
            try {
              return localStorage;
            } catch (t) {}
          })()),
          (e.destroy = (() => {
            let t = !1;
            return () => {
              t ||
                ((t = !0),
                console.warn(
                  "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
                ));
            };
          })()),
          (e.colors = [
            "#0000CC",
            "#0000FF",
            "#0033CC",
            "#0033FF",
            "#0066CC",
            "#0066FF",
            "#0099CC",
            "#0099FF",
            "#00CC00",
            "#00CC33",
            "#00CC66",
            "#00CC99",
            "#00CCCC",
            "#00CCFF",
            "#3300CC",
            "#3300FF",
            "#3333CC",
            "#3333FF",
            "#3366CC",
            "#3366FF",
            "#3399CC",
            "#3399FF",
            "#33CC00",
            "#33CC33",
            "#33CC66",
            "#33CC99",
            "#33CCCC",
            "#33CCFF",
            "#6600CC",
            "#6600FF",
            "#6633CC",
            "#6633FF",
            "#66CC00",
            "#66CC33",
            "#9900CC",
            "#9900FF",
            "#9933CC",
            "#9933FF",
            "#99CC00",
            "#99CC33",
            "#CC0000",
            "#CC0033",
            "#CC0066",
            "#CC0099",
            "#CC00CC",
            "#CC00FF",
            "#CC3300",
            "#CC3333",
            "#CC3366",
            "#CC3399",
            "#CC33CC",
            "#CC33FF",
            "#CC6600",
            "#CC6633",
            "#CC9900",
            "#CC9933",
            "#CCCC00",
            "#CCCC33",
            "#FF0000",
            "#FF0033",
            "#FF0066",
            "#FF0099",
            "#FF00CC",
            "#FF00FF",
            "#FF3300",
            "#FF3333",
            "#FF3366",
            "#FF3399",
            "#FF33CC",
            "#FF33FF",
            "#FF6600",
            "#FF6633",
            "#FF9900",
            "#FF9933",
            "#FFCC00",
            "#FFCC33"
          ]),
          (e.log = console.debug || console.log || (() => {})),
          (t.exports = i(2447)(e));
        const { formatters: n } = t.exports;
        n.j = function (t) {
          try {
            return JSON.stringify(t);
          } catch (t) {
            return "[UnexpectedJSONParseError]: " + t.message;
          }
        };
      },
      2447: (t, e, i) => {
        t.exports = function (t) {
          function e(t) {
            let i,
              s,
              u,
              o = null;
            function r(...t) {
              if (!r.enabled) return;
              const n = r,
                s = Number(new Date()),
                u = s - (i || s);
              (n.diff = u), (n.prev = i), (n.curr = s), (i = s), (t[0] = e.coerce(t[0])), "string" != typeof t[0] && t.unshift("%O");
              let o = 0;
              (t[0] = t[0].replace(/%([a-zA-Z%])/g, (i, s) => {
                if ("%%" === i) return "%";
                o++;
                const u = e.formatters[s];
                if ("function" == typeof u) {
                  const e = t[o];
                  (i = u.call(n, e)), t.splice(o, 1), o--;
                }
                return i;
              })),
                e.formatArgs.call(n, t);
              (n.log || e.log).apply(n, t);
            }
            return (
              (r.namespace = t),
              (r.useColors = e.useColors()),
              (r.color = e.selectColor(t)),
              (r.extend = n),
              (r.destroy = e.destroy),
              Object.defineProperty(r, "enabled", {
                enumerable: !0,
                configurable: !1,
                get: () => (null !== o ? o : (s !== e.namespaces && ((s = e.namespaces), (u = e.enabled(t))), u)),
                set: (t) => {
                  o = t;
                }
              }),
              "function" == typeof e.init && e.init(r),
              r
            );
          }
          function n(t, i) {
            const n = e(this.namespace + (void 0 === i ? ":" : i) + t);
            return (n.log = this.log), n;
          }
          function s(t) {
            return t
              .toString()
              .substring(2, t.toString().length - 2)
              .replace(/\.\*\?$/, "*");
          }
          return (
            (e.debug = e),
            (e.default = e),
            (e.coerce = function (t) {
              if (t instanceof Error) return t.stack || t.message;
              return t;
            }),
            (e.disable = function () {
              const t = [...e.names.map(s), ...e.skips.map(s).map((t) => "-" + t)].join(",");
              return e.enable(""), t;
            }),
            (e.enable = function (t) {
              let i;
              e.save(t), (e.namespaces = t), (e.names = []), (e.skips = []);
              const n = ("string" == typeof t ? t : "").split(/[\s,]+/),
                s = n.length;
              for (i = 0; i < s; i++)
                n[i] &&
                  ("-" === (t = n[i].replace(/\*/g, ".*?"))[0]
                    ? e.skips.push(new RegExp("^" + t.slice(1) + "$"))
                    : e.names.push(new RegExp("^" + t + "$")));
            }),
            (e.enabled = function (t) {
              if ("*" === t[t.length - 1]) return !0;
              let i, n;
              for (i = 0, n = e.skips.length; i < n; i++) if (e.skips[i].test(t)) return !1;
              for (i = 0, n = e.names.length; i < n; i++) if (e.names[i].test(t)) return !0;
              return !1;
            }),
            (e.humanize = i(7824)),
            (e.destroy = function () {
              console.warn(
                "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
              );
            }),
            Object.keys(t).forEach((i) => {
              e[i] = t[i];
            }),
            (e.names = []),
            (e.skips = []),
            (e.formatters = {}),
            (e.selectColor = function (t) {
              let i = 0;
              for (let e = 0; e < t.length; e++) (i = (i << 5) - i + t.charCodeAt(e)), (i |= 0);
              return e.colors[Math.abs(i) % e.colors.length];
            }),
            e.enable(e.load()),
            e
          );
        };
      },
      7206: (t) => {
        t.exports =
          '<div id="chat-wrapper" tpInjected>\n    <iframe style="display: none;" id="tpChatFrame" allow="autoplay; clipboard-read; clipboard-write; payment; camera; microphone;" src="{CHAT_URL}">\n\n    </iframe>\n</div>';
      },
      4296: (t) => {
        t.exports =
          '<style tpInjected>\n    .hidden {\n    display: none !important;\n}   \n</style>\n<div class="hidden" id="tpIconContainer" tpInjected>\n    <div class="hidden" id="tp-buttons-container">\n        <button id="tp-icon-container">\n            <img id="tp-icon-white" src=\'{EXTENSION_LOGO_GRADIENT}\' />\n            <img id="play-chat-icon" class="hidden" src=\'{PLAY_CHAT}\' />\n            <span class="tooltiptext extension-txt" style="width: 120px;">Open Teleparty</span>\n            <div class="hidden" id="tp-message-indicator"></div>\n        </button>\n        <div class="tp-seperator"></div>\n        \x3c!-- <button class="tp-control-button" id="tp-friends-button">\n            <img id="tp-friends-image" src=\'{FRIENDS_IMAGE}\' />\n            <span class="tooltiptext extension-txt" style="width: 120px;"> Friends List</span>\n        </button> --\x3e\n        <div class="hidden" id="tp-party-active">\n            <button class="tp-control-button" id="tp-link-button">\n                <img class="tp-button-image tp-center-image" data-tp-id="overlay-copy_link" src=\'{LINK_IMAGE}\' />\n                <img class="tp-hover-image tp-center-image" data-tp-id="overlay-copy_link" src=\'{LINK_ACTIVE_IMAGE}\' />\n                <span class="tooltiptext extension-txt" style="width: 120px;">Copy link</span>\n            </button>\n            <button class="tp-control-button" id="tp-chat-button">\n                <img id="tp-chat-reset" class="tp-center-image hidden" data-tp-id="overlay-reset_chat" src=\'{RESET_CHAT_IMAGE}\' />\n                <img id="tp-chat-hidden" class="tp-button-image tp-center-image" src=\'{CHAT_HIDDEN_IMAGE}\' />\n                <img id="tp-chat-gray" class="hidden tp-button-image tp-center-image" src=\'{CHAT_GRAY_IMAGE}\' />\n                <img class="tp-hover-image tp-center-image" data-tp-id="overlay-show_chat" src=\'{CHAT_ACTIVE_IMAGE}\' />\n                <div class="hidden" id="tp-message-indicator"></div>\n                <span class="tooltiptext extension-txt" style="width: 120px;">Show chat</span>\n            </button>\n            <button class="tp-control-button" id="tp-disconnect-button">\n                <img class="tp-button-image tp-center-image" data-tp-id="overlay-leave_party"\n                    src=\'{DISCONNECT_IMAGE}\' />\n                <img class="tp-hover-image tp-center-image" data-tp-id="overlay-leave_party" src=\'{DISCONNECT_IMAGE}\' />\n                <span class="tooltiptext extension-txt" style="width: 120px;">Leave Party</span>\n            </button>\n        </div>\n    </div>\n    \x3c!-- <button class="hidden tp-control-button" id="tp-chat-close-button">\n        <img id="tp-start-image" data-tp-id="overlay-hide_chat" src=\'{ARROW_RIGHT}\' />\n        <span class="tooltiptext extension-txt" style="width: 100px;">Hide chat</span>\n    </button> --\x3e\n    <div id="tp-error-box" class="hidden">\n        <p class="extension-txt-indicator" id="tp-controls-error-text">\n            Failed to connect to background script. Please Try again later\n        </p>\n    </div>\n</div>';
      },
      7824: (t) => {
        var e = 1e3,
          i = 60 * e,
          n = 60 * i,
          s = 24 * n,
          u = 7 * s,
          o = 365.25 * s;
        function r(t, e, i, n) {
          var s = e >= 1.5 * i;
          return Math.round(t / i) + " " + n + (s ? "s" : "");
        }
        t.exports = function (t, a) {
          a = a || {};
          var c = typeof t;
          if ("string" === c && t.length > 0)
            return (function (t) {
              if ((t = String(t)).length > 100) return;
              var r =
                /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                  t
                );
              if (!r) return;
              var a = parseFloat(r[1]);
              switch ((r[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                  return a * o;
                case "weeks":
                case "week":
                case "w":
                  return a * u;
                case "days":
                case "day":
                case "d":
                  return a * s;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                  return a * n;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                  return a * i;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                  return a * e;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                  return a;
                default:
                  return;
              }
            })(t);
          if ("number" === c && isFinite(t))
            return a.long
              ? (function (t) {
                  var u = Math.abs(t);
                  if (u >= s) return r(t, u, s, "day");
                  if (u >= n) return r(t, u, n, "hour");
                  if (u >= i) return r(t, u, i, "minute");
                  if (u >= e) return r(t, u, e, "second");
                  return t + " ms";
                })(t)
              : (function (t) {
                  var u = Math.abs(t);
                  if (u >= s) return Math.round(t / s) + "d";
                  if (u >= n) return Math.round(t / n) + "h";
                  if (u >= i) return Math.round(t / i) + "m";
                  if (u >= e) return Math.round(t / e) + "s";
                  return t + "ms";
                })(t);
          throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t));
        };
      }
    },
    e = {};
  function i(n) {
    var s = e[n];
    if (void 0 !== s) return s.exports;
    var u = (e[n] = { exports: {} });
    return t[n](u, u.exports, i), u.exports;
  }
  (i.n = (t) => {
    var e = t && t.h ? () => t.default : () => t;
    return i.d(e, { a: e }), e;
  }),
    (i.d = (t, e) => {
      for (var n in e) i.o(e, n) && !i.o(t, n) && Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (() => {
      "use strict";
      var t = i(1227),
        e = i.n(t);
      class n {
        constructor(t) {
          this.namespace = t;
        }
        debug(t) {
          const i = t.methodName ? `${this.namespace}:${t.methodName}` : this.namespace;
          t.message && e()(i)(t.message), t.object && e()(i)(t.object);
        }
      }
      const s = "Service_Background",
        u = "Popup",
        o = "Content_Script",
        r = "Page_Controls";
      var a;
      !(function (t) {
        (t.CREATE_SESSION = "createSession"),
          (t.RE_INJECT = "reInject"),
          (t.GET_INIT_DATA = "getInitData"),
          (t.GET_INIT_USER_SESTTINGS = "getInitUserSettings"),
          (t.IS_CONTENT_SCRIPT_READY = "isContentScriptReady"),
          (t.SET_CHAT_VISIBLE = "setChatVisible"),
          (t.DISCONNECT = "teardown"),
          (t.CLOSE_POPUP = "closePopup"),
          (t.GET_SCHEDULED_EVENTS = "getScheduledEvents"),
          (t.GET_RECENT_SCHEDULED_EVENTS = "getRecentScheduledEvents"),
          (t.GOOGLE_SIGN_IN = "googleSignIn"),
          (t.EMAIL_SIGN_IN = "emailSignIn"),
          (t.FORGOT_PASSWORD = "forgotPassword"),
          (t.EMAIL_SIGN_UP = "emailSignUp"),
          (t.ON_GOOGLE_SIGN_IN = "OnGoogleSignIn"),
          (t.CREATE_SCHEDULED_EVENT = "createScheduledEvent"),
          (t.DELETE_SCHEDULED_EVENT = "deleteScheduledEvent"),
          (t.SET_USER_STATUS = "SET_USER_STATUS"),
          (t.SIGN_IN_CREATE = "SIGN_IN_CREATE");
      })(a || (a = {}));
      const c = 340,
        D = chrome.runtime.id,
        h = "reactionContainerOpen",
        d = "https://sessions.teleparty.com",
        l = "https://redirect.teleparty.com",
        p = l,
        g = `${l}/sidebar`,
        F = ["heart", "angry", "fire", "laugh", "surprise", "cry"],
        v = ["heart", "angry", "fire", "laugh", "surprise", "cry"],
        m = "recentlyUsedEmojiMap",
        y = "redirectDataMap",
        f = "AdUnitView",
        C = [
          {
            annotation: "face with tears of joy",
            group: 0,
            order: 8,
            tags: ["face", "joy", "laugh", "tear"],
            unicode: "😂",
            version: 0.6,
            emoticon: ":')",
            shortcodes: ["joy", "lmao", "tears_of_joy"]
          },
          {
            annotation: "smiling face with heart-eyes",
            group: 0,
            order: 16,
            tags: ["eye", "face", "love", "smile"],
            unicode: "😍",
            version: 0.6,
            shortcodes: ["heart_eyes", "smiling_face_with_heart_eyes"]
          },
          {
            shortcodes: ["loudly_crying_face", "sob"],
            annotation: "loudly crying face",
            tags: ["cry", "face", "sad", "sob", "tear"],
            unicode: "😭",
            order: 93,
            group: 0,
            version: 0.6,
            emoticon: ":'o"
          },
          {
            shortcodes: ["pleading", "pleading_face"],
            annotation: "pleading face",
            tags: ["begging", "mercy", "puppy eyes"],
            unicode: "🥺",
            order: 85,
            group: 0,
            version: 11
          },
          {
            shortcodes: ["rofl"],
            annotation: "rolling on the floor laughing",
            tags: ["face", "floor", "laugh", "rofl", "rolling", "rotfl"],
            unicode: "🤣",
            order: 7,
            group: 0,
            version: 3,
            emoticon: ":'D"
          },
          {
            annotation: "red heart",
            group: 0,
            order: 149,
            tags: ["heart"],
            unicode: "❤️",
            version: 0.6,
            emoticon: "<3",
            shortcodes: ["heart", "red_heart"]
          }
        ],
        w =
          /(?:\uD83D(?:\uDD73\uFE0F?|\uDC41(?:(?:\uFE0F(?:\u200D\uD83D\uDDE8\uFE0F?)?|\u200D\uD83D\uDDE8\uFE0F?))?|[\uDDE8\uDDEF]\uFE0F?|\uDC4B(?:\uD83C[\uDFFB-\uDFFF])?|\uDD90(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|[\uDD96\uDC4C\uDC48\uDC49\uDC46\uDD95\uDC47\uDC4D\uDC4E\uDC4A\uDC4F\uDE4C\uDC50\uDE4F\uDC85\uDCAA\uDC42\uDC43\uDC76\uDC66\uDC67](?:\uD83C[\uDFFB-\uDFFF])?|\uDC71(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2640\u2642]\uFE0F?))?)|\u200D(?:[\u2640\u2642]\uFE0F?)))?|\uDC68(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC68\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)|\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)))))?|\uDC69(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFC-\uDFFF]|\uDC68\uD83C[\uDFFC-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFE]|\uDC68\uD83C[\uDFFB-\uDFFE])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])|\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])))))?|[\uDC74\uDC75](?:\uD83C[\uDFFB-\uDFFF])?|[\uDE4D\uDE4E\uDE45\uDE46\uDC81\uDE4B\uDE47\uDC6E](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD75(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC82\uDC77](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDC78(?:\uD83C[\uDFFB-\uDFFF])?|\uDC73(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC72\uDC70\uDC7C](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC86\uDC87\uDEB6](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC83\uDD7A](?:\uD83C[\uDFFB-\uDFFF])?|\uDD74(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uDC6F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDEA3\uDEB4\uDEB5](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDEC0\uDECC\uDC6D\uDC6B\uDC6C](?:\uD83C[\uDFFB-\uDFFF])?|\uDDE3\uFE0F?|\uDC15(?:\u200D\uD83E\uDDBA)?|[\uDC3F\uDD4A\uDD77\uDD78\uDDFA\uDEE3\uDEE4\uDEE2\uDEF3\uDEE5\uDEE9\uDEF0\uDECE\uDD70\uDD79\uDDBC\uDD76\uDECD\uDDA5\uDDA8\uDDB1\uDDB2\uDCFD\uDD6F\uDDDE\uDDF3\uDD8B\uDD8A\uDD8C\uDD8D\uDDC2\uDDD2\uDDD3\uDD87\uDDC3\uDDC4\uDDD1\uDDDD\uDEE0\uDDE1\uDEE1\uDDDC\uDECF\uDECB\uDD49]\uFE0F?|[\uDE00\uDE03\uDE04\uDE01\uDE06\uDE05\uDE02\uDE42\uDE43\uDE09\uDE0A\uDE07\uDE0D\uDE18\uDE17\uDE1A\uDE19\uDE0B\uDE1B-\uDE1D\uDE10\uDE11\uDE36\uDE0F\uDE12\uDE44\uDE2C\uDE0C\uDE14\uDE2A\uDE34\uDE37\uDE35\uDE0E\uDE15\uDE1F\uDE41\uDE2E\uDE2F\uDE32\uDE33\uDE26-\uDE28\uDE30\uDE25\uDE22\uDE2D\uDE31\uDE16\uDE23\uDE1E\uDE13\uDE29\uDE2B\uDE24\uDE21\uDE20\uDE08\uDC7F\uDC80\uDCA9\uDC79-\uDC7B\uDC7D\uDC7E\uDE3A\uDE38\uDE39\uDE3B-\uDE3D\uDE40\uDE3F\uDE3E\uDE48-\uDE4A\uDC8B\uDC8C\uDC98\uDC9D\uDC96\uDC97\uDC93\uDC9E\uDC95\uDC9F\uDC94\uDC9B\uDC9A\uDC99\uDC9C\uDDA4\uDCAF\uDCA2\uDCA5\uDCAB\uDCA6\uDCA8\uDCA3\uDCAC\uDCAD\uDCA4\uDC40\uDC45\uDC44\uDC8F\uDC91\uDC6A\uDC64\uDC65\uDC63\uDC35\uDC12\uDC36\uDC29\uDC3A\uDC31\uDC08\uDC2F\uDC05\uDC06\uDC34\uDC0E\uDC2E\uDC02-\uDC04\uDC37\uDC16\uDC17\uDC3D\uDC0F\uDC11\uDC10\uDC2A\uDC2B\uDC18\uDC2D\uDC01\uDC00\uDC39\uDC30\uDC07\uDC3B\uDC28\uDC3C\uDC3E\uDC14\uDC13\uDC23-\uDC27\uDC38\uDC0A\uDC22\uDC0D\uDC32\uDC09\uDC33\uDC0B\uDC2C\uDC1F-\uDC21\uDC19\uDC1A\uDC0C\uDC1B-\uDC1E\uDC90\uDCAE\uDD2A\uDDFE\uDDFB\uDC92\uDDFC\uDDFD\uDD4C\uDED5\uDD4D\uDD4B\uDC88\uDE82-\uDE8A\uDE9D\uDE9E\uDE8B-\uDE8E\uDE90-\uDE9C\uDEF5\uDEFA\uDEB2\uDEF4\uDEF9\uDE8F\uDEA8\uDEA5\uDEA6\uDED1\uDEA7\uDEF6\uDEA4\uDEA2\uDEEB\uDEEC\uDCBA\uDE81\uDE9F-\uDEA1\uDE80\uDEF8\uDD5B\uDD67\uDD50\uDD5C\uDD51\uDD5D\uDD52\uDD5E\uDD53\uDD5F\uDD54\uDD60\uDD55\uDD61\uDD56\uDD62\uDD57\uDD63\uDD58\uDD64\uDD59\uDD65\uDD5A\uDD66\uDD25\uDCA7\uDEF7\uDD2E\uDC53-\uDC62\uDC51\uDC52\uDCFF\uDC84\uDC8D\uDC8E\uDD07-\uDD0A\uDCE2\uDCE3\uDCEF\uDD14\uDD15\uDCFB\uDCF1\uDCF2\uDCDE-\uDCE0\uDD0B\uDD0C\uDCBB\uDCBD-\uDCC0\uDCFA\uDCF7-\uDCF9\uDCFC\uDD0D\uDD0E\uDCA1\uDD26\uDCD4-\uDCDA\uDCD3\uDCD2\uDCC3\uDCDC\uDCC4\uDCF0\uDCD1\uDD16\uDCB0\uDCB4-\uDCB8\uDCB3\uDCB9\uDCB1\uDCB2\uDCE7-\uDCE9\uDCE4-\uDCE6\uDCEB\uDCEA\uDCEC-\uDCEE\uDCDD\uDCBC\uDCC1\uDCC2\uDCC5-\uDCD0\uDD12\uDD13\uDD0F-\uDD11\uDD28\uDD2B\uDD27\uDD29\uDD17\uDD2C\uDD2D\uDCE1\uDC89\uDC8A\uDEAA\uDEBD\uDEBF\uDEC1\uDED2\uDEAC\uDDFF\uDEAE\uDEB0\uDEB9-\uDEBC\uDEBE\uDEC2-\uDEC5\uDEB8\uDEAB\uDEB3\uDEAD\uDEAF\uDEB1\uDEB7\uDCF5\uDD1E\uDD03\uDD04\uDD19-\uDD1D\uDED0\uDD4E\uDD2F\uDD00-\uDD02\uDD3C\uDD3D\uDD05\uDD06\uDCF6\uDCF3\uDCF4\uDD31\uDCDB\uDD30\uDD1F-\uDD24\uDD34\uDFE0-\uDFE2\uDD35\uDFE3-\uDFE5\uDFE7-\uDFE9\uDFE6\uDFEA\uDFEB\uDD36-\uDD3B\uDCA0\uDD18\uDD33\uDD32\uDEA9])|\uD83E(?:[\uDD1A\uDD0F\uDD1E\uDD1F\uDD18\uDD19\uDD1B\uDD1C\uDD32\uDD33\uDDB5\uDDB6\uDDBB\uDDD2](?:\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?)))?|[\uDDD4\uDDD3](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDCF\uDD26\uDD37](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD34\uDDD5\uDD35\uDD30\uDD31\uDD36](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDB8\uDDB9\uDDD9-\uDDDD](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDDDE\uDDDF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDDCD\uDDCE\uDDD6\uDDD7\uDD38](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD3C(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDD3D\uDD3E\uDD39\uDDD8](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD23\uDD70\uDD29\uDD2A\uDD11\uDD17\uDD2D\uDD2B\uDD14\uDD10\uDD28\uDD25\uDD24\uDD12\uDD15\uDD22\uDD2E\uDD27\uDD75\uDD76\uDD74\uDD2F\uDD20\uDD73\uDD13\uDDD0\uDD7A\uDD71\uDD2C\uDD21\uDD16\uDDE1\uDD0E\uDD0D\uDD1D\uDDBE\uDDBF\uDDE0\uDDB7\uDDB4\uDD3A\uDDB0\uDDB1\uDDB3\uDDB2\uDD8D\uDDA7\uDDAE\uDD8A\uDD9D\uDD81\uDD84\uDD93\uDD8C\uDD99\uDD92\uDD8F\uDD9B\uDD94\uDD87\uDDA5\uDDA6\uDDA8\uDD98\uDDA1\uDD83\uDD85\uDD86\uDDA2\uDD89\uDDA9\uDD9A\uDD9C\uDD8E\uDD95\uDD96\uDD88\uDD8B\uDD97\uDD82\uDD9F\uDDA0\uDD40\uDD6D\uDD5D\uDD65\uDD51\uDD54\uDD55\uDD52\uDD6C\uDD66\uDDC4\uDDC5\uDD5C\uDD50\uDD56\uDD68\uDD6F\uDD5E\uDDC7\uDDC0\uDD69\uDD53\uDD6A\uDD59\uDDC6\uDD5A\uDD58\uDD63\uDD57\uDDC8\uDDC2\uDD6B\uDD6E\uDD5F-\uDD61\uDD80\uDD9E\uDD90\uDD91\uDDAA\uDDC1\uDD67\uDD5B\uDD42\uDD43\uDD64\uDDC3\uDDC9\uDDCA\uDD62\uDD44\uDDED\uDDF1\uDDBD\uDDBC\uDE82\uDDF3\uDE90\uDDE8\uDDE7\uDD47-\uDD49\uDD4E\uDD4F\uDD4D\uDD4A\uDD4B\uDD45\uDD3F\uDD4C\uDE80\uDE81\uDDFF\uDDE9\uDDF8\uDDF5\uDDF6\uDD7D\uDD7C\uDDBA\uDDE3-\uDDE6\uDD7B\uDE71-\uDE73\uDD7E\uDD7F\uDE70\uDDE2\uDE95\uDD41\uDDEE\uDE94\uDDFE\uDE93\uDDAF\uDDF0\uDDF2\uDDEA-\uDDEC\uDE78-\uDE7A\uDE91\uDE92\uDDF4\uDDF7\uDDF9-\uDDFD\uDDEF])|[\u263A\u2639\u2620\u2763\u2764]\uFE0F?|\u270B(?:\uD83C[\uDFFB-\uDFFF])?|[\u270C\u261D](?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\u270A(?:\uD83C[\uDFFB-\uDFFF])?|\u270D(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uD83C(?:\uDF85(?:\uD83C[\uDFFB-\uDFFF])?|\uDFC3(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC7\uDFC2](?:\uD83C[\uDFFB-\uDFFF])?|\uDFCC(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC4\uDFCA](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDFCB(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFF5\uDF36\uDF7D\uDFD4-\uDFD6\uDFDC-\uDFDF\uDFDB\uDFD7\uDFD8\uDFDA\uDFD9\uDFCE\uDFCD\uDF21\uDF24-\uDF2C\uDF97\uDF9F\uDF96\uDF99-\uDF9B\uDF9E\uDFF7\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37]\uFE0F?|\uDFF4(?:(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F|\uDC73\uDB40\uDC63\uDB40\uDC74\uDB40\uDC7F|\uDC77\uDB40\uDC6C\uDB40\uDC73\uDB40\uDC7F)))?|\uDFF3(?:(?:\uFE0F(?:\u200D\uD83C\uDF08)?|\u200D\uD83C\uDF08))?|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|[\uDFFB-\uDFFF\uDF38-\uDF3C\uDF37\uDF31-\uDF35\uDF3E-\uDF43\uDF47-\uDF53\uDF45\uDF46\uDF3D\uDF44\uDF30\uDF5E\uDF56\uDF57\uDF54\uDF5F\uDF55\uDF2D-\uDF2F\uDF73\uDF72\uDF7F\uDF71\uDF58-\uDF5D\uDF60\uDF62-\uDF65\uDF61\uDF66-\uDF6A\uDF82\uDF70\uDF6B-\uDF6F\uDF7C\uDF75\uDF76\uDF7E\uDF77-\uDF7B\uDF74\uDFFA\uDF0D-\uDF10\uDF0B\uDFE0-\uDFE6\uDFE8-\uDFED\uDFEF\uDFF0\uDF01\uDF03-\uDF07\uDF09\uDFA0-\uDFA2\uDFAA\uDF11-\uDF20\uDF0C\uDF00\uDF08\uDF02\uDF0A\uDF83\uDF84\uDF86-\uDF8B\uDF8D-\uDF91\uDF80\uDF81\uDFAB\uDFC6\uDFC5\uDFC0\uDFD0\uDFC8\uDFC9\uDFBE\uDFB3\uDFCF\uDFD1-\uDFD3\uDFF8\uDFA3\uDFBD\uDFBF\uDFAF\uDFB1\uDFAE\uDFB0\uDFB2\uDCCF\uDC04\uDFB4\uDFAD\uDFA8\uDF92\uDFA9\uDF93\uDFBC\uDFB5\uDFB6\uDFA4\uDFA7\uDFB7-\uDFBB\uDFA5\uDFAC\uDFEE\uDFF9\uDFE7\uDFA6\uDD8E\uDD91-\uDD9A\uDE01\uDE36\uDE2F\uDE50\uDE39\uDE1A\uDE32\uDE51\uDE38\uDE34\uDE33\uDE3A\uDE35\uDFC1\uDF8C])|\u26F7\uFE0F?|\u26F9(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\u2618\u26F0\u26E9\u2668\u26F4\u2708\u23F1\u23F2\u2600\u2601\u26C8\u2602\u26F1\u2744\u2603\u2604\u26F8\u2660\u2665\u2666\u2663\u265F\u26D1\u260E\u2328\u2709\u270F\u2712\u2702\u26CF\u2692\u2694\u2699\u2696\u26D3\u2697\u26B0\u26B1\u26A0\u2622\u2623\u2B06\u2197\u27A1\u2198\u2B07\u2199\u2B05\u2196\u2195\u2194\u21A9\u21AA\u2934\u2935\u269B\u2721\u2638\u262F\u271D\u2626\u262A\u262E\u25B6\u23ED\u23EF\u25C0\u23EE\u23F8-\u23FA\u23CF\u2640\u2642\u2695\u267E\u267B\u269C\u2611\u2714\u2716\u303D\u2733\u2734\u2747\u203C\u2049\u3030\u00A9\u00AE\u2122]\uFE0F?|[\u0023\u002A\u0030-\u0039](?:\uFE0F\u20E3|\u20E3)|[\u2139\u24C2\u3297\u3299\u25FC\u25FB\u25AA\u25AB]\uFE0F?|[\u2615\u26EA\u26F2\u26FA\u26FD\u2693\u26F5\u231B\u23F3\u231A\u23F0\u2B50\u26C5\u2614\u26A1\u26C4\u2728\u26BD\u26BE\u26F3\u267F\u26D4\u2648-\u2653\u26CE\u23E9-\u23EC\u2B55\u2705\u274C\u274E\u2795-\u2797\u27B0\u27BF\u2753-\u2755\u2757\u26AB\u26AA\u2B1B\u2B1C\u25FE\u25FD])/g;
      var E = console.log.bind(window.console),
        _ = function (t, e, i, n) {
          return new (i || (i = Promise))(function (s, u) {
            function o(t) {
              try {
                a(n.next(t));
              } catch (t) {
                u(t);
              }
            }
            function r(t) {
              try {
                a(n.throw(t));
              } catch (t) {
                u(t);
              }
            }
            function a(t) {
              var e;
              t.done
                ? s(t.value)
                : ((e = t.value),
                  e instanceof i
                    ? e
                    : new i(function (t) {
                        t(e);
                      })).then(o, r);
            }
            a((n = n.apply(t, e || [])).next());
          });
        };
      const b = new (class {
        addListener(t) {
          chrome.runtime.onMessage.addListener(t), chrome.runtime.onMessage.addListener(t);
        }
        removeListener(t) {
          chrome.runtime.onMessage.removeListener(t);
        }
        sendMessageToTabAsync(t, e, i = 2e4) {
          return _(this, void 0, void 0, function* () {
            return new Promise((n, s) => {
              const u = setTimeout(() => {
                console.log("send timeout"), s("Message Timeout");
              }, i);
              try {
                chrome.tabs.sendMessage(e, t, (e) => {
                  chrome.runtime.lastError && E(chrome.runtime.lastError.message + JSON.stringify(t)), clearTimeout(u), n(e);
                });
              } catch (t) {
                clearTimeout(u), s(t);
              }
            });
          });
        }
        l(t, e) {
          return _(this, void 0, void 0, function* () {
            return new Promise((i, n) => {
              let s = null;
              e &&
                (s = setTimeout(() => {
                  n({ error: "Send Message Timeout" });
                }, e));
              try {
                chrome.runtime.sendMessage(D, t, (e) => {
                  chrome.runtime.lastError && console.log(chrome.runtime.lastError.message + JSON.stringify(t)), s && clearTimeout(s), i(e);
                });
              } catch (t) {
                s && clearTimeout(s), n(t);
              }
            });
          });
        }
      })();
      class j {
        constructor(t, e, i) {
          (this.sender = t), (this.target = e), (this.type = i);
        }
      }
      class B extends j {
        constructor(t, e, i) {
          super(t, e, i), (this.p = i);
        }
      }
      var A, k, Q, I;
      !(function (t) {
        (t.BROADCAST = "brodadcast"),
          (t.BROADCAST_NEXT_EPISODE = "broadcastNextEpisode"),
          (t.SEND_MESSAGE = "sendMessage"),
          (t.CONTENT_SCRIPT_READY = "contentScriptReady"),
          (t.CONTENT_SCRIPT_ERROR = "contentScriptError"),
          (t.TEARDOWN = "teardown"),
          (t.GET_SESSION_DATA = "getSessionData"),
          (t.SET_TYPING = "setTyping"),
          (t.SET_BUFFERING = "setBuffering"),
          (t.SET_WATCHING_ADS = "setWatchingAds"),
          (t.BROADCAST_USER_SETTINGS = "brodadcastUserSettings"),
          (t.SEND_REACTION = "sendReaction"),
          (t.SEND_GIF = "sendGIF"),
          (t.WEB_RTC = "webRTC");
      })(A || (A = {}));
      class x extends B {
        constructor(t, e, i) {
          super(t, e, A.GET_SESSION_DATA), (this.data = i);
        }
      }
      !(function (t) {
        (t.JOIN_SESSION = "joinSession"),
          (t.ACCEPT_DROPIN = "acceptDropin"),
          (t.SET_STATUS_TYPE = "setStatusType"),
          (t.GET_STATUS_TYPE = "getStatusType"),
          (t.GET_VIDEO_DATA = "getVideoData"),
          (t.LOAD_SESSION = "loadSession"),
          (t.NO_SESSION_DATA = "noSessionData"),
          (t.ON_NOTIF = "onNotif"),
          (t.FORWARD_TO_SIDEBAR = "forwardToSidebar"),
          (t.TEARDOWN = "teardown"),
          (t.ON_VIDEO_UPDATE = "onVideoUpdate"),
          (t.SOCKET_LOST_CONNECTION = "socketLostConnection"),
          (t.REBOOT = "socketReconnect"),
          (t.LOG_EVENT = "logEvent"),
          (t.LOG_EXPERIMENT = "logExperiment"),
          (t.STAY_ALIVE = "stayAlive"),
          (t.LOAD_CHAT_WINDOW = "loadChatWindow"),
          (t.RESET_CHAT_WINDOW = "resetChatWindow"),
          (t.HIDE_CHAT_WINDOW = "hideChatWindow"),
          (t.SET_USER_PRESENCE = "setUserPresence"),
          (t.TOGGLE_OPEN_PARTY = "toggleOpenParty"),
          (t.GET_ACTIVE_PARTY = "getActiveParty"),
          (t.GET_TAB_ID = "getTabId"),
          (t.SET_ACTIVE_PARTY = "setActiveParty"),
          (t.FULLSCREEN_WINDOW = "fullscreenWindow"),
          (t.MAX_WINDOW = "maxWindow"),
          (t.GET_EXPERIMENT_FLAG = "getExpFlag"),
          (t.USER_LIST = "userList"),
          (t.USER_AUTHENTICATED = "userAuthenticated"),
          (t.BLOCK_CSP = "blockCSP");
      })(k || (k = {}));
      class S {
        constructor() {
          (this.g = this.F.bind(this)), (this.v = []), this.m();
        }
        addMessageListener(t) {
          this.v.push(t);
        }
        removeMessageListener(t) {
          this.v = this.v.filter((t) => {});
        }
        m() {
          b.addListener(this.g);
        }
        teardown() {
          (this.v = []), b.removeListener(this.g);
        }
        F(t, e, i) {
          if (!this.C(t)) return !1;
          return !!this._(t, e, i) || (i({}), !1);
        }
        C(t) {
          return t.target === o;
        }
        _(t, e, i) {
          let n = !1;
          return (
            this.v.forEach((s) => {
              s.onMessage(t, e, i) && (n = !0);
            }),
            n
          );
        }
      }
      !(function (t) {
        (t.INIT_CHAT = "initChat"),
          (t.ON_MESSAGE = "onMessage"),
          (t.ON_BUFFER = "onBuffer"),
          (t.ON_TYPING = "onTyping"),
          (t.ON_WATCHING_ADS = "onWatchingAds"),
          (t.UPDATE_SETTINGS = "updateSettings"),
          (t.ON_REACTION = "onReaction"),
          (t.ON_GIF = "onGif"),
          (t.ON_LOG_EVENT = "onLogEvent"),
          (t.USER_LIST = "userList"),
          (t.ON_WEB_RTC = "onWebRTC");
      })(Q || (Q = {})),
        (function (t) {
          (t.SET_USER_LIST = "setUserList"),
            (t.SET_CONNECTION_ID = "setConnectionId"),
            (t.LOAD_INIT_DATA = "loadInitData"),
            (t.SET_PAGE_TITLE = "setPageTitle"),
            (t.ADD_GIF_MESSAGE = "addGifMessage"),
            (t.SIDEBAR_MESSAGING_READY = "sidebarMessagingReady"),
            (t.RESET_VIEW = "resetView"),
            (t.HIDE_CHAT = "hideChat"),
            (t.ON_UPDATE_SETTINGS = "onUpdateSettings"),
            (t.PREVIEW_REACTION = "previewReaction"),
            (t.UPDATE_SETTINGS = "updateSettings"),
            (t.SET_REACTIONS_ACTIVE = "setReactionsActive"),
            (t.ON_FOCUS = "onSidebarFocus"),
            (t.SET_USER_ICON_URL = "setUserIconUrl"),
            (t.ADD_MESSAGE = "addMessage"),
            (t.CLEAR_MESSAGES = "clearMessages"),
            (t.SET_PRESENCE_MESSAGE = "setPresenceMessage"),
            (t.ON_PAGE_CLICK = "onPageClick"),
            (t.ON_PURCHASE = "onPurchase"),
            (t.DISPLAY_MODAL = "displayModal"),
            (t.OPEN_TAB = "openTab"),
            (t.ON_CHROME_STORAGE_UPDATE = "onChromeStorageUpdate"),
            (t.ON_WEB_RTC = "onWebRTC");
        })(I || (I = {}));
      var T,
        M,
        P,
        N = function (t, e, i, n) {
          return new (i || (i = Promise))(function (s, u) {
            function o(t) {
              try {
                a(n.next(t));
              } catch (t) {
                u(t);
              }
            }
            function r(t) {
              try {
                a(n.throw(t));
              } catch (t) {
                u(t);
              }
            }
            function a(t) {
              var e;
              t.done
                ? s(t.value)
                : ((e = t.value),
                  e instanceof i
                    ? e
                    : new i(function (t) {
                        t(e);
                      })).then(o, r);
            }
            a((n = n.apply(t, e || [])).next());
          });
        };
      class $ {
        constructor(t, e) {
          (this.B = t), (this.A = e), E("Chat forwarder");
        }
        onMessage(t, e, i) {
          var n;
          switch (t.type) {
            case k.LOAD_SESSION: {
              const e = t;
              return this.k(e.data), !1;
            }
            case Q.ON_MESSAGE: {
              const e = t;
              return this.I(e), this.A.onChatMessage(), !1;
            }
            case Q.ON_BUFFER: {
              const e = t;
              return this.S(e), !1;
            }
            case Q.ON_TYPING: {
              const e = t;
              return this.T(e), !1;
            }
            case Q.ON_WATCHING_ADS: {
              const e = t;
              return this.M(e), !1;
            }
            case Q.UPDATE_SETTINGS: {
              const e = t;
              return this.P(e), !1;
            }
            case Q.ON_REACTION: {
              const e = t;
              return this.N(e), !1;
            }
            case Q.ON_GIF: {
              const e = t;
              return this.$(e), !1;
            }
            case Q.USER_LIST: {
              const e = t;
              return this.O(e), !1;
            }
            case Q.ON_WEB_RTC:
              return this.B.onWebRTC(t.data), !0;
            case a.SET_CHAT_VISIBLE: {
              const e = t;
              return this.V(e.data), i(), !1;
            }
            case I.SIDEBAR_MESSAGING_READY: {
              console.log("Sidebar Ready");
              const t = null === (n = window.teleparty) || void 0 === n ? void 0 : n.tabId;
              return console.log(t), this.B.setChatFrameReady(null != t ? t : 0), i(), !0;
            }
            case I.DISPLAY_MODAL: {
              const e = t.data;
              return console.log(e), !0;
            }
            case I.ON_UPDATE_SETTINGS: {
              const e = t.data;
              return this.B.doUpdateSettings(e), i(), !0;
            }
            case I.ON_CHROME_STORAGE_UPDATE:
              try {
                chrome.storage.local.set(t.data);
              } catch (t) {
                console.log("Failed to update chrome storage");
              }
              return i(), !0;
            case I.SET_REACTIONS_ACTIVE: {
              const e = t.data;
              return this.B.setReactionsActive(e), i(), !0;
            }
            case I.RESET_VIEW:
              return this.B.resetChatWindow(!0), i(), !0;
            case I.ON_FOCUS:
              return this.B.onSidebarFocus(), i(), !0;
            case I.PREVIEW_REACTION: {
              const e = t.data;
              return this.B.showReaction(e), i(), !0;
            }
            case "onUpdateSettings": {
              const e = t.data;
              return this.B.doUpdateSettings(e), i(), !0;
            }
            default:
              return !1;
          }
        }
        teardown() {
          this.B.teardown();
        }
        V(t) {
          return N(this, void 0, void 0, function* () {
            this.B.isPartyWindowsActive()
              ? t.visible
                ? yield this.B.resetChatWindow()
                : yield this.B.hideChatWindow()
              : (yield this.B.setChatVisible(t.visible), this.B.fixPageControls());
          });
        }
        k(t) {
          const e = t.sessionCallbackData.sessionId,
            i = `${p}/join/${e}`;
          if (
            (this.B.loadInitData(t),
            this.B.setPartyUrl(i),
            this.B.setSessionId(e),
            this.B.L(t.storageData),
            this.A.onInitChat(),
            this.B.setSessionCreated(t.isCreate),
            this.B.sendInitDataToSidebar(t),
            t.sessionCallbackData.userList && this.B.loadUserList(t.sessionCallbackData.userList),
            t.showReviewMessage && this.B.addReviewMessage(),
            !t.isCreate)
          )
            for (const e of t.sessionCallbackData.messages) "gifObject" in e ? this.B.addGif(e) : this.B.addMessage(e, !0);
        }
        I(t) {
          this.B.addMessage(t.data);
        }
        N(t) {
          this.B.showReaction(t.data);
        }
        $(t) {
          this.B.addGif(t.data);
        }
        S(t) {
          this.B.onBufferingMessage(t.data);
        }
        T(t) {
          this.B.onTypingMessage(t.data);
        }
        M(t) {
          this.B.onWatchingAdsMessage(t.data);
        }
        P(t) {
          this.B.onUpdateSettingsMessage(t.data);
        }
        O(t) {
          this.B.loadUserList(t.data.userList), this.B.setSocketConnectionId(t.data.socketConnectionId);
        }
      }
      !(function (t) {
        (t.PAUSED = "paused"), (t.PLAYING = "playing");
      })(T || (T = {})),
        (function (t) {
          (t.LOADING = "loading"),
            (t.PLAYING = "playing"),
            (t.IDLE = "idle"),
            (t.AD_PLAYING = "ad_playing"),
            (t.PAUSED = "paused"),
            (t.NOT_READY = "not_ready");
        })(M || (M = {})),
        (function (t) {
          (t.UPDATE_SESSION = "updateSession"),
            (t.NEXT_EPISODE = "nextEpisode"),
            (t.REBOOT_SESSION = "rebootSession"),
            (t.GET_SERVER_TIME = "getServerTime"),
            (t.RELOAD_PARTY = "reloadParty");
        })(P || (P = {}));
      var O = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var e;
            t.done
              ? s(t.value)
              : ((e = t.value),
                e instanceof i
                  ? e
                  : new i(function (t) {
                      t(e);
                    })).then(o, r);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
      class V {
        constructor() {
          this.resetTasks(), (this.R = []), (this.U = 0), (this.G = Promise.resolve()), (this.H = !0);
        }
        createInstance() {
          return new V();
        }
        pushTask(t, e) {
          if (!this.H) return;
          const i = { action: t, name: e };
          0 === this.U && this.resetTasks(),
            (this.U = this.R.push(i)),
            (this.G = this.G.then(() => {
              if (this.R.includes(i) && this.H)
                return this.W(i)().then(() => {
                  this.R.shift(), (this.U -= 1);
                });
            }));
        }
        disable() {
          (this.H = !1), this.resetTasks();
        }
        resetTasks() {
          (this.G = Promise.resolve()), (this.R = []), (this.U = 0);
        }
        W(t) {
          return function () {
            return O(this, void 0, void 0, function* () {
              try {
                yield t.action();
              } catch (t) {}
            });
          };
        }
        get tasksInFlight() {
          return this.U;
        }
        hasTaskInQueue(t) {
          return this.R.some((e) => e.name === t);
        }
        removeTask(t) {
          console.log(this.R),
            (this.R = this.R.filter((e, i) => (e.name === t && 0 == i ? (console.error("Cannot filter active task"), !0) : e.name !== t))),
            (this.U = this.R.length),
            console.log(this.R);
        }
      }
      const L = new V(),
        R = 2500,
        U = 1e3,
        G = 72e5,
        H = 12e4;
      class W extends B {
        constructor(t, e, i) {
          super(t, e, A.BROADCAST), (this.data = i);
        }
      }
      const z = chrome.extension.getURL("img/x-circle.svg"),
        K = "with-chat",
        J = "with-chat-fs",
        Y = {
          title: "Teleparty | Disconnected from party",
          content:
            "Only the owner of this party can change the episode. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        },
        q = {
          title: "Teleparty | Are you still there?",
          content: "You will be removed from the party in 120 seconds for inactivity. Move your mouse to continue watching."
        },
        X = {
          title: "Teleparty | Disconnected from party",
          content: "You were removed from the party from inactivity. Click the button below rejoin the party.",
          buttonTitle: "Return to Party"
        },
        Z = {
          title: "Teleparty | Disconnected from party",
          content:
            "It looks like someone changed the video and we weren't able to connect you. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        },
        tt = {
          title: "Teleparty | Disconnected from party",
          content:
            "It looks like you lost connection to the extension. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        };
      function et(t, e) {
        it();
        const i = e
          ? (function (t) {
              return `\n    <div id="alert-dialog-wrapper">\n      <div id="alert-dialog-container">\n        <div id="alert-title-wrapper">\n            <div class="alert-title">\n                <p id="alert-title-txt" class="extension-title">\n                    ${t.title}\n                </p>\n                <button id="alert-x-btn">\n                    <img src="${z}" alt="close" />\n                </button>\n            </div>\n            <div class="extension-border-bot">\n                \n            </div>\n        </div>\n        <div id="alert-description">\n            <p id="alert-content-txt" class="extension-txt">\n              ${t.content}\n            </p>\n            <button id="alert-return-btn" class="extension-btn">${t.buttonTitle}</button>\n        </div>\n      </div>\n    </div>\n    `;
            })(t)
          : (function (t) {
              return `\n  <div id="alert-dialog-wrapper">\n    <div id="alert-dialog-container">\n      <div id="alert-title-wrapper">\n          <div class="alert-title">\n              <p id="alert-title-txt" class="extension-title">\n                  ${t.title}\n              </p>\n              <button id="alert-x-btn">\n                  <img src="${z}" alt="close" />\n              </button>\n          </div>\n          <div class="extension-border-bot">\n              \n          </div>\n      </div>\n      <div id="alert-description">\n          <p id="alert-content-txt" class="extension-txt">\n            ${t.content}\n          </p>\n      </div>\n    </div>\n  </div>\n  `;
            })(t);
        document.body.insertAdjacentHTML("afterbegin", i),
          jQuery("#alert-x-btn").click(() => {
            it();
          }),
          e &&
            jQuery("#alert-return-btn").click(() => {
              it(), (window.location.href = e);
            });
      }
      function it() {
        const t = document.querySelector("#alert-dialog-wrapper");
        t && t.remove();
      }
      class nt extends j {
        constructor(t, e, i) {
          super(t, e, i), (this.type = i);
        }
      }
      class st extends nt {
        constructor(t, e, i) {
          super(t, e, k.TEARDOWN), (this.data = i);
        }
      }
      class ut extends j {
        constructor(t, e, i) {
          super(t, e, i), (this.type = i);
        }
      }
      class ot extends ut {
        constructor(t, e) {
          super(t, e, P.GET_SERVER_TIME);
        }
      }
      var rt;
      !(function (t) {
        (t.EPISODE = "episode"), (t.FEATURE = "feature"), (t.LIVE = "live"), (t.EXTRA = "extra"), (t.EVENT = "event"), (t.OTHER = "other");
      })(rt || (rt = {}));
      var at, ct;
      function Dt(t) {
        return t.includes("urn:hbo:feature")
          ? rt.FEATURE
          : t.includes("urn:hbo:episode") || (t.includes("urn:hbo:page:") && t.includes(":type:episode"))
          ? rt.EPISODE
          : t.includes("urn:hbo:extra")
          ? rt.EXTRA
          : rt.OTHER;
      }
      function ht(t) {
        return function () {
          return new Promise((e) => {
            setTimeout(() => {
              e();
            }, t);
          });
        };
      }
      function dt(t, e, i = 250) {
        return function () {
          const n = new Date().getTime(),
            s = function () {
              return t()
                ? Promise.resolve()
                : null !== e && new Date().getTime() - n > e
                ? Promise.reject(new Error("delayUntil timed out: " + t))
                : ht(i)().then(s);
            };
          return s();
        };
      }
      function lt(t, e, i) {
        t.push(e), t.length > i && t.splice(0, t.length - i);
      }
      function pt(t) {
        return t.concat().sort()[Math.floor(t.length / 2)];
      }
      !(function (t) {
        (t.REGISTER = "register"),
          (t.PARTY_START = "party_start"),
          (t.PARTY_JOIN = "party_join"),
          (t.PARTY_END = "party_end"),
          (t.PARTY_SHARE = "party_share");
      })(at || (at = {}));
      class gt extends B {
        constructor(t, e, i) {
          super(t, e, A.BROADCAST_NEXT_EPISODE), (this.data = i);
        }
      }
      class Ft extends B {
        constructor(t, e, i) {
          super(t, e, A.SET_BUFFERING), (this.data = i);
        }
      }
      class vt extends B {
        constructor(t, e, i) {
          super(t, e, A.SET_WATCHING_ADS), (this.data = i);
        }
      }
      !(function (t) {
        (t.NETFLIX = "Netflix"),
          (t.HULU = "Hulu"),
          (t.DISNEY_PLUS = "Disney"),
          (t.DISNEY_PLUS_MENA = "DisneyMena"),
          (t.HBO_MAX = "HBOMax"),
          (t.MAX = "Max"),
          (t.YOUTUBE = "Youtube"),
          (t.YOUTUBE_TV = "YoutubeTV"),
          (t.AMAZON = "Amazon"),
          (t.CRUNCHYROLL = "Crunchyroll"),
          (t.ESPN = "ESPN+"),
          (t.PARAMOUNT = "Paramount+"),
          (t.FUNIMATION = "Funimation"),
          (t.HOTSTAR = "Hotstar"),
          (t.PEACOCK = "peacock"),
          (t.STAR_PLUS = "Starplus"),
          (t.PLUTO_TV = "PlutoTV"),
          (t.APPLE_TV = "AppleTV"),
          (t.JIO_CINEMA = "JioCinema"),
          (t.TUBI_TV = "TubiTV"),
          (t.MUBI = "Mubi"),
          (t.STAN = "Stan"),
          (t.CRAVE = "Crave"),
          (t.SLING = "slingtv");
      })(ct || (ct = {}));
      class mt extends nt {
        constructor(t, e, i) {
          super(t, e, k.LOG_EVENT), (this.data = i), (this.sender = t), (this.target = e);
        }
      }
      const yt = "PING",
        ft = "SYNC",
        Ct = "BROADCAST";
      class wt extends nt {
        constructor(t, e, i) {
          super(t, e, k.STAY_ALIVE), (this.data = i);
        }
      }
      const Et = "Failed to read chrome storage. Please refresh the page and try again",
        _t = "Failed to connect to Script. Please refresh the page and try again",
        bt = "Failed to load video in time. Please refresh the page and try again.",
        jt = "An unexpected error occured. Please refresh the page and try again.";
      var Bt = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var e;
            t.done
              ? s(t.value)
              : ((e = t.value),
                e instanceof i
                  ? e
                  : new i(function (t) {
                      t(e);
                    })).then(o, r);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
      const At = new (class {
        getItemsAsync(t) {
          return Bt(this, void 0, void 0, function* () {
            return new Promise((e, i) => {
              chrome.storage.local.get(t, (t) => {
                chrome.runtime.lastError ? (console.log(chrome.runtime.lastError), i(new Error(Et))) : e(t);
              });
            });
          });
        }
        getAllItemsAsync() {
          return Bt(this, void 0, void 0, function* () {
            return new Promise((t, e) => {
              chrome.storage.local.get(null, (i) => {
                chrome.runtime.lastError ? (console.log(chrome.runtime.lastError), e(new Error(Et))) : t(i);
              });
            });
          });
        }
      })();
      Object.freeze(At);
      const kt = At;
      var Qt = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var e;
            t.done
              ? s(t.value)
              : ((e = t.value),
                e instanceof i
                  ? e
                  : new i(function (t) {
                      t(e);
                    })).then(o, r);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
      const It = new (class {
        setItemsAsync(t) {
          return Qt(this, void 0, void 0, function* () {
            return new Promise((e, i) => {
              chrome.storage.local.set(t, () => {
                chrome.runtime.lastError ? i(new Error("Failed to write to chrome storage. Please refresh the page and try again")) : e();
              });
            });
          });
        }
      })();
      Object.freeze(It);
      const xt = It;
      var St = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var e;
            t.done
              ? s(t.value)
              : ((e = t.value),
                e instanceof i
                  ? e
                  : new i(function (t) {
                      t(e);
                    })).then(o, r);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
      const Tt = new (class {
        getRedirectDataForTabAsync(t) {
          return St(this, void 0, void 0, function* () {
            const e = (yield kt.getItemsAsync([y])).redirectDataMap,
              i = this.K(t);
            if (e && e[i]) {
              const t = e[i];
              if (this.J(t)) return t;
            }
          });
        }
        deleteRedirectDataForTabAsync(t) {
          return St(this, void 0, void 0, function* () {
            const e = (yield kt.getItemsAsync([y])).redirectDataMap,
              i = this.K(t);
            e && e[i] && delete e[i], yield xt.setItemsAsync({ [y]: e });
          });
        }
        K(t) {
          return t;
        }
        storeRedirectDataForTabAsync(t, e) {
          return St(this, void 0, void 0, function* () {
            console.log("store data for tab " + t);
            const i = this.K(e);
            let n = yield kt.getItemsAsync([y]);
            (n[i] = t), (n = this.Y(n)), yield xt.setItemsAsync({ [y]: n });
          });
        }
        Y(t) {
          return (function (t, e) {
            const i = {};
            let n;
            for (n in t) t.hasOwnProperty(n) && e(t[n]) && (i[n] = t[n]);
            return i;
          })(t, this.J);
        }
        J(t) {
          const e = t.date;
          return void 0 !== e && "number" == typeof e && e <= Date.now() && Date.now() - e < 108e5;
        }
      })();
      Object.freeze(Tt);
      const Mt = Tt;
      var Pt = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var e;
            t.done
              ? s(t.value)
              : ((e = t.value),
                e instanceof i
                  ? e
                  : new i(function (t) {
                      t(e);
                    })).then(o, r);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
      class Nt {
        constructor(t, e, i) {
          (this.q = []),
            (this.X = 0),
            (this.Z = 0),
            (this.tt = []),
            (this.et = !1),
            (this.it = !1),
            (this.nt = !1),
            (this.st = !1),
            (this.ut = void 0),
            (this.ot = () =>
              Pt(this, void 0, void 0, function* () {
                try {
                  yield fetch("https://www3.doubleclick.net", { method: "HEAD", mode: "no-cors", cache: "no-store" }), (this.ut = !1);
                } catch (t) {
                  this.ut = !0;
                }
              })),
            (this.rt = (t = !1, e = !1) =>
              Pt(this, void 0, void 0, function* () {
                if (this.ct) return;
                if (this.nt) return void this.forceSync();
                if (!this.st && !e) return;
                const i = yield this.Dt();
                if (yield this.ht(i.data, e)) yield this.dt(i);
                else if (t) {
                  if (yield this.lt(e)) {
                    const t = yield this.Dt();
                    yield this.dt(t);
                  }
                }
              })),
            (this.gt = () =>
              Pt(this, void 0, void 0, function* () {
                if (
                  (this.Ft == T.PAUSED &&
                    this.vt &&
                    (clearInterval(this.vt),
                    (this.vt = setInterval(() => {
                      this.yt();
                    }, 6e4))),
                  this.ft())
                )
                  return;
                if ((yield this.Ct.waitVideoDoneLoadingAsync(), this.ft())) return;
                const t = yield this.Ct.getStateAsync();
                this.Ft == T.PAUSED ? yield this.wt(t) : this.Ft == T.PLAYING && (yield this.Et(t)), !1 === this.st && (this.st = !0);
              })),
            (this.Ct = t),
            (this.B = e),
            (this._t = i),
            this._t.setMessageForwarder(this),
            (this.bt = 0),
            (this.ct = !1),
            (this.Ft = T.PAUSED),
            (this.jt = 0),
            (this.Bt = 0),
            (this.At = 0),
            (this.kt = this.Ct.getStreamingServiceName()),
            E("Video forwarder"),
            this.ot();
        }
        onMessage(t, e, i) {
          switch (t.type) {
            case k.GET_VIDEO_DATA:
              return this.Qt(i), !0;
            case k.LOAD_SESSION: {
              const e = t;
              return this.It(e.data), !1;
            }
            case P.UPDATE_SESSION: {
              const e = t;
              return this.xt(e.data), !1;
            }
            case P.NEXT_EPISODE: {
              const e = t;
              return this.St(e.data), !1;
            }
            case P.REBOOT_SESSION: {
              const e = t;
              return this.Tt(e.data, i), !0;
            }
            case P.RELOAD_PARTY:
              return this.reloadPartyAsync().then(() => console.log("Party Reloaded")), !0;
            case Q.ON_WATCHING_ADS: {
              const e = t;
              return this.M(e), !1;
            }
            default:
              return !1;
          }
        }
        M(t) {
          t.data.anyoneWatchingAds && !this.it && (L.pushTask(this.Ct.doAdCheck.bind(this.Ct)), this.forceSync()),
            (this.it = t.data.anyoneWatchingAds);
        }
        get videoId() {
          return this.Mt;
        }
        set videoId(t) {
          this.Mt = t;
        }
        sendTeardown(t) {
          const e = new st(o, s, t);
          b.l(e);
        }
        teardown() {
          (this.Pt = void 0),
            this.Nt && clearInterval(this.Nt),
            this.vt && clearInterval(this.vt),
            this.Ct.pause(),
            L.disable(),
            this._t.stopListening();
        }
        Tt(t, e) {
          L.resetTasks(), this.Mt == t.videoId && this.xt(t), e(this.Mt == t.videoId);
          const i = new mt(o, s, { eventType: "reboot", sessionId: this.Pt });
          b.l(i);
        }
        tryBroadcast(t = !1) {
          this.et ||
            (this.nt
              ? this.forceSync()
              : 0 != this.Ct.uiEventsHappening || this.ct || !this.Pt || L.hasTaskInQueue(Ct) || L.pushTask(() => this.rt(t), Ct));
        }
        setBuffering(t) {
          if (this.Pt) {
            const e = new Ft(o, s, { buffering: t });
            b.l(e);
          }
        }
        isWatchingAds() {
          return this.et;
        }
        setWatchingAds(t, e) {
          if (this.Pt) {
            this.et = t;
            const i = new vt(o, s, { watchingAds: t, adDurationLeft: e });
            b.l(i);
          }
        }
        sendNextEpisodeAsync(t) {
          return Pt(this, void 0, void 0, function* () {
            if (this.Pt && t !== this.Mt && t !== this.$t) {
              (this.$t = t), (this.ct = !0);
              const e = new gt(o, s, { nextEpisode: t }),
                i = yield b.l(e);
              i && "Locked Session" === i.errorMessage && (yield this.Ot(t));
            }
          });
        }
        Ot(t) {
          return Pt(this, void 0, void 0, function* () {
            try {
              yield dt(() => t == this.Mt, 1e4)(), (this.ct = !1);
            } catch (t) {
              this.Vt("An error has occured when trying to wait till the episode changed videos");
              const e = { showAlert: !0, alertModal: Y };
              this.sendTeardown(e);
            }
          });
        }
        ht(t, e) {
          return Pt(this, void 0, void 0, function* () {
            if (null == t.lastKnownTime || null == t.lastKnownTimeUpdatedAt || null == t.state) return !1;
            if (e && t.state === T.PAUSED && t.lastKnownTime < U) return !1;
            const i = Math.abs(t.lastKnownTime - this.Lt());
            if (t.state == this.Ft && i < U) return !1;
            if (i >= U) {
              const t = new mt(o, s, { name: "video_seek", action: { source: "self" } });
              b.l(t), this.kt == ct.AMAZON || this.kt == ct.PARAMOUNT ? yield ht(200)() : this.kt == ct.HBO_MAX && (yield ht(500)());
            }
            return !0;
          });
        }
        Dt() {
          return Pt(this, void 0, void 0, function* () {
            const t = yield this.Ct.getUpdateSessionDataAsync();
            (t.lastKnownTimeUpdatedAt -= this.Z), (t.lastKnownTime = Math.round(t.lastKnownTime));
            return new W(o, s, t);
          });
        }
        forceSync() {
          L.pushTask(this.gt, ft);
        }
        St(t) {
          return Pt(this, void 0, void 0, function* () {
            (this.bt = Date.now()), L.pushTask(() => this.Rt(t));
          });
        }
        Rt(t) {
          return Pt(this, void 0, void 0, function* () {
            try {
              E("Continue next episode called"),
                (this.ct = !0),
                yield this.Ct.jumpToNextEpisode(t),
                yield this._t.loadNewVideoAsync(t.videoId),
                E("After load new video"),
                this._t.reloadListeners(),
                this.At < this.bt &&
                  ((this.Ft = T.PAUSED),
                  (this.jt = 0),
                  (this.Bt = Date.now()),
                  E("Sending broadcast after next episode"),
                  L.pushTask(() => this.rt(!0, !0), Ct),
                  L.removeTask(ft)),
                (this.Mt = t.videoId),
                (this.ct = !1);
              const e = new mt(o, s, { name: "video_start", action: { description: "video session has begun" } });
              b.l(e);
            } catch (t) {
              this.Vt("Error loading new video."), console.log("Error was", t), yield this.reloadPartyAsync();
            }
          });
        }
        persistExtension(t) {
          var e, i;
          return Pt(this, void 0, void 0, function* () {
            console.log("persist here");
            const n = null !== (i = null === (e = window.teleparty) || void 0 === e ? void 0 : e.tabId) && void 0 !== i ? i : 0,
              u = new wt(o, s, { tabId: n, persist: t });
            b.l(u);
            const r = yield this.Ut();
            (r.date = Date.now()), Mt.storeRedirectDataForTabAsync(r, n);
          });
        }
        reloadPartyAsync() {
          var t, e;
          return Pt(this, void 0, void 0, function* () {
            try {
              console.log("Reloading party");
              const i = yield this.Ut();
              i.date = Date.now();
              const n = yield this.Gt(i),
                u = null !== (e = null === (t = window.teleparty) || void 0 === t ? void 0 : t.tabId) && void 0 !== e ? e : 0,
                r = new wt(o, s, { tabId: u, persist: !1 });
              yield b.l(r), yield Mt.storeRedirectDataForTabAsync(i, u), console.log("Redirect URL is", n), (window.location.href = n);
            } catch (t) {
              console.log("Error reloading party", t), this.Vt("Failed to fix next episode.");
              const e = new st(o, s, { showAlert: !0, alertModal: Z });
              b.l(e);
            }
          });
        }
        Ut() {
          return Pt(this, void 0, void 0, function* () {
            return new Promise((t, e) => {
              const i = new XMLHttpRequest();
              (i.timeout = 1e4),
                (i.ontimeout = () => {
                  e(new Error());
                }),
                (i.onreadystatechange = () => {
                  if (i.readyState === XMLHttpRequest.DONE)
                    try {
                      const e = JSON.parse(i.responseText);
                      t(e);
                    } catch (t) {
                      e(t), this.Vt("Unable to get video endpoint data to reload session");
                    }
                }),
                i.open("GET", "https://api.teleparty.com/video?session=" + this.Pt, !0),
                i.send(null);
            });
          });
        }
        mapToParamountType(t) {
          return "episode" === t ? "shows" : "feature" === t ? "movies" : "live" === t ? "live-tv" : "none";
        }
        Gt(t) {
          if ("object" == typeof (e = t) && null !== e && "videoService" in e && "videoId" in e) {
            switch (t.videoService.toLowerCase()) {
              case "crunchyroll":
                return `https://www.crunchyroll.com/watch/${t.videoId}`;
              case "netflix":
                return `https://www.netflix.com/watch/${t.videoId}`;
              case "hulu":
                return `https://www.hulu.com/watch/${t.videoId}`;
              case "disney":
                return `https://www.disneyplus.com/video/${t.videoId}`;
              case "starplus":
                return `https://www.starplus.com/video/${t.videoId}`;
              case "amazon": {
                const e = t.serviceDomain;
                if (e) return `https://${e}/gp/video/detail/${t.videoId}?autoplay=1`;
                throw new Error("No service Domain");
              }
              case "hbomax": {
                const e = t.videoType;
                if (e) {
                  return `https://play.hbomax.com/${e}/urn:hbo:${e}:${t.videoId}`;
                }
                throw new Error("No Video Type");
              }
              case "youtube": {
                const e = t.videoId,
                  i = t.serviceDomain;
                if (i) return e && "browsing" !== e ? `https://${i}/watch/${e}` : `https://${i}/`;
                throw new Error("No service Domain");
              }
              case "espn":
                return `https://www.espn.com/watch/player/_/id/${t.videoId}`;
              case "paramount":
                return `https://www.paramountplus.com/${this.mapToParamountType(t.videoType)}/video/${t.videoId}/`;
              case "hotstar":
                return `https://www.hotstar.com/${t.videoId}/watch`;
              case "disneymena":
                return `https://apps.disneyplus.com/${t.videoId}/watch`;
              case "max":
                return `https://play.max.com/video/watch/${t.videoId}`;
              case "plutotv":
                return `https://www.pluto.tv/${t.videoId}`;
              case "jiocinema":
                return `https://www.jiocinema.com/${t.videoId}`;
              case "tubitv":
                return `https://tubitv.com${t.videoId}`;
              case "crave":
                return `https://www.crave.ca/${t.videoId}`;
              case "mubi":
                return `https://mubi.com/${t.videoId}`;
              case "stan":
                return `https://play.stan.com.au/programs/${t.videoId}/play`;
              case "slingtv":
                return `https://watch.sling.com/1/asset/${t.videoId}/watch`;
              default:
                throw new Error();
            }
          }
          var e;
          throw new Error("Invalid Session Response");
        }
        xt(t) {
          (this.At = Date.now()), L.pushTask(this.Ht(t).bind(this));
        }
        Ht(t) {
          if (t.state === T.PAUSED && this.Ft === T.PLAYING) {
            this.yt();
            const t = new mt(o, s, {
              name: "video_pause",
              action: { description: "video was played from pause", reason: "Video was played" }
            });
            b.l(t);
          } else if (t.state === T.PLAYING && this.Ft === T.PAUSED) {
            const t = new mt(o, s, {
              name: "video_resume",
              action: { description: "video was played from pause", reason: "Video was played" }
            });
            b.l(t), this.yt();
          }
          return (this.Ft = t.state), (this.jt = t.lastKnownTime), (this.Bt = t.lastKnownTimeUpdatedAt), this.gt;
        }
        Qt(t) {
          var e;
          return Pt(this, void 0, void 0, function* () {
            try {
              const e = yield this.Ct.getVideoDataAsync(),
                i = yield this.Ct.getStateAsync();
              (e.is_player_fullscreen = null != document.fullscreenElement || document.webkitIsFullScreen),
                (e.is_chat_visible = this.B.getChatVisible()),
                (e.is_adblock_enabled = this.ut),
                (e.video_ts_ms = Math.round(i.playbackPositionMilliseconds)),
                (e.party_ts_ms = this.jt),
                t(e);
            } catch (i) {
              this.Vt(null !== (e = i.message) && void 0 !== e ? e : "Unable to send video data"), t({ error: i });
            }
          });
        }
        Vt(t) {
          const e = new mt(o, s, {
            name: "video_error",
            action: { description: t, reason: "An errors has occurred during video playback" }
          });
          b.l(e);
        }
        lt(t) {
          return Pt(this, void 0, void 0, function* () {
            return new Promise((e) => {
              const i = performance.now(),
                n = () =>
                  Pt(this, void 0, void 0, function* () {
                    if (performance.now() - i >= 2500) e(!1);
                    else {
                      const i = yield this.Dt();
                      (yield this.ht(i.data, t))
                        ? e(!0)
                        : setTimeout(() => {
                            n();
                          }, 50);
                    }
                  });
              n();
            });
          });
        }
        dt(t) {
          return Pt(this, void 0, void 0, function* () {
            if (this.ct || this.et) return;
            const e = this.Ft;
            if (t.data.bufferingState) {
              (t.data.state = T.PAUSED), yield b.l(t, 1e3), yield this.Ct.waitVideoDoneLoadingAsync();
              const i = yield this.Dt();
              (i.data.bufferingState = !0), e == T.PLAYING && (i.data.state = T.PLAYING), yield b.l(i, 1e3);
            } else yield b.l(t, 1e3);
          });
        }
        It(t) {
          return Pt(this, void 0, void 0, function* () {
            const e = t.sessionCallbackData;
            (this.Pt = e.sessionId),
              (this.Ft = e.state),
              (this.jt = Number(e.lastKnownTime)),
              (this.Bt = Number(e.lastKnownTimeUpdatedAt)),
              (this.Mt = e.videoId),
              (this.it = !1),
              "true" == e.controlLock && (this.nt = !0),
              t.isCreate ? ((this.st = !0), L.pushTask(this.rt.bind(this), Ct)) : this.forceSync();
            const i = new mt(o, s, { name: "video_start", action: { description: "video session has begun" } });
            b.l(i), this._t.startListening(), this.Wt();
          });
        }
        zt() {
          return new Promise((t) => {
            const e = new ot(o, s),
              i = Date.now();
            b
              .l(e)
              .then((t) => {
                const e = Date.now();
                if (t) {
                  const n = t.serverTime;
                  n &&
                    (lt(this.q, e - i, 5), (this.X = pt(this.q)), lt(this.tt, e - Math.round(this.X / 2) - n, 5), (this.Z = pt(this.tt)));
                }
              })
              .catch((t) => {
                E(t), this.Vt(t);
              }),
              t();
          });
        }
        yt() {
          const t = new mt(o, s, {
            name: "video_heartbeat",
            action: { description: "new heartbeat", reason: "Heartbeat session was due" }
          });
          b.l(t);
        }
        Wt() {
          this.Nt && clearInterval(this.Nt),
            this.vt && clearInterval(this.vt),
            (this.Nt = setInterval(() => {
              L.hasTaskInQueue(ft) || L.pushTask(this.gt, ft);
            }, 5e3)),
            (this.vt = setInterval(() => {
              this.yt();
            }, 6e4)),
            (this.Kt = setInterval(() => {
              L.hasTaskInQueue(yt) || L.pushTask(this.zt.bind(this), yt);
            }, 12500)),
            this.zt();
        }
        ft() {
          return !this.Pt || this.Ct.uiEventsHappening > 0 || this.et || this.ct || !this._t.shouldSync();
        }
        wt(t) {
          return Pt(this, void 0, void 0, function* () {
            const { playbackState: e, playbackPositionMilliseconds: i } = t;
            if ((e !== M.PAUSED && (yield this.Ct.pause()), Math.abs(this.jt - i) > R)) {
              yield this.Ct.setCurrentTime(this.jt);
              const t = new mt(o, s, { name: "video_seek", action: { source: "another user" } });
              b.l(t);
            }
          });
        }
        Et(t) {
          return Pt(this, void 0, void 0, function* () {
            const { playbackState: e, playbackPositionMilliseconds: i } = t,
              n = this.Lt();
            if ((e == M.PAUSED && (yield this.Ct.play()), Math.abs(n - i) > R)) {
              yield this.Ct.setCurrentTime(n), yield this.Ct.play();
              const t = new mt(o, s, { name: "video_seek", action: { source: "another user" } });
              b.l(t);
            }
          });
        }
        Jt() {
          return this.Ft === T.PLAYING ? Date.now() - (this.Bt + this.Z) : 0;
        }
        Lt() {
          return this.jt + this.Jt();
        }
        get changingVideo() {
          return this.ct;
        }
        set changingVideo(t) {
          this.ct = t;
        }
      }
      const $t = { showAlert: !1 },
        Ot = { showAlert: !0, alertModal: X };
      i(5640);
      var Vt = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var e;
            t.done
              ? s(t.value)
              : ((e = t.value),
                e instanceof i
                  ? e
                  : new i(function (t) {
                      t(e);
                    })).then(o, r);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
      class Lt extends class {
        constructor(t, e, i, n) {
          (this.B = t),
            (this.Ct = e),
            (this._t = i),
            (this.A = n),
            window.teleparty && !window.teleparty.pageControls
              ? ((window.teleparty.pageControls = n), console.log("Setting Page COntrols"))
              : (n.setChatApi(this.B), console.log("Resetting Chat Api for old controls")),
            (this.Yt = new $(this.B, this.A)),
            (this.qt = new Nt(this.Ct, this.B, this._t)),
            (this.Xt = !1),
            (this.Zt = !1),
            (this.te = !1),
            (this.g = new S()),
            this.g.addMessageListener(this.qt),
            this.g.addMessageListener(this.Yt),
            this.g.addMessageListener(this),
            (this.ee = !1),
            this.ie();
        }
        ne() {
          return Vt(this, void 0, void 0, function* () {
            yield this.A.addTpIcon(), this.A.startEventListener();
          });
        }
        loadBrowseButton() {
          return Vt(this, void 0, void 0, function* () {
            yield this.A.addTpIcon(), this.A.startEventListener();
          });
        }
        ie() {
          const t = chrome.runtime.connect();
          t.onDisconnect.addListener(() => {
            console.log("Lost background script. Teardown");
            const t = { showAlert: this.B.inSession, alertModal: tt };
            this.se(t);
          }),
            t.onMessage.addListener(() => {
              E("Got background script"), (this.ee = !0);
            });
        }
        onMessage(t, e, i) {
          if (t.target == o) {
            if (t.type === a.IS_CONTENT_SCRIPT_READY) {
              if (this.Xt) {
                i({ ready: !0 });
              } else (this.Zt = !0), this.ue().then(i);
              return !0;
            }
            if (t.type === a.GET_INIT_DATA) {
              return i(this.oe()), !0;
            }
            if (t.type === a.DISCONNECT && t.sender == u) {
              const t = new st(o, s, $t);
              b.l(t), i();
            } else {
              if (t.type == k.TEARDOWN) {
                const e = t;
                return this.se(e.data), i(), !0;
              }
              t.type === k.ON_NOTIF && this.re();
            }
          }
          return !1;
        }
        re() {
          console.log("Show Notification");
        }
        se(t) {
          var e, i, n;
          if (t.showAlert && t.alertModal) {
            const i = null !== (e = t.buttonUrl) && void 0 !== e ? e : this.B.getPartyUrl();
            et(t.alertModal, i);
          }
          this.A.teardown(), this.qt.teardown(), this.Yt.teardown(), this.g.teardown();
          const u = {
              name: "error",
              action: {
                description: null === (i = t.alertModal) || void 0 === i ? void 0 : i.title,
                reason: null === (n = t.alertModal) || void 0 === n ? void 0 : n.content
              }
            },
            r = new mt(o, s, u);
          b.l(r), window.teleparty && (window.teleparty.contentScriptInjected = !1) && (window.teleparty.contentScriptReady = !1);
        }
        Vt(t) {
          if ("Please open a video on Amazon Prime Video then click on the Tp icon" === t) return;
          const e = new mt(o, s, { name: "error", action: { reason: t } });
          b.l(e);
        }
        ae() {
          return Vt(this, void 0, void 0, function* () {
            return dt(() => this.ee, 5e3)();
          });
        }
        ue() {
          return Vt(this, void 0, void 0, function* () {
            try {
              console.log("Waiting for content script ready"), yield this.ae();
              const t = yield this.ce();
              return this.ne(), t;
            } catch (t) {
              const e = { message: _t, showButton: !1 };
              return this.Vt(_t), { ready: !1, error: e };
            } finally {
              this.Zt = !1;
            }
          });
        }
        ce() {
          return Vt(this, void 0, void 0, function* () {
            let t;
            try {
              yield this.Ct.waitVideoApiReadyAsync();
              const e = yield this.De();
              e && e.error
                ? (E("Error is:", e.error),
                  (t = { message: e.error, showButton: !0 }),
                  (this.Xt = !0),
                  window.teleparty && (window.teleparty.contentScriptReady = !0))
                : (e && e.showReviewMessage && (this.te = !0),
                  (this.Xt = !0),
                  window.teleparty && (window.teleparty.contentScriptReady = !0));
            } catch (e) {
              (t = { message: e.message, showButton: !1 }), this.Vt(e.message);
            }
            return { ready: this.Xt, error: t };
          });
        }
        oe() {
          return {
            inSession: this.B.inSession,
            isChatVisible: this.B.isPartyWindowsActive() ? this.B.getChatWindowVisible() : this.B.getChatVisible(),
            partyUrl: this.B.getPartyUrl(),
            showReviewMessage: !1,
            partyWindowsActive: this.B.isPartyWindowsActive()
          };
        }
        De() {
          return Vt(this, void 0, void 0, function* () {
            const t = yield this.he();
            return b.l(t);
          });
        }
        he() {
          return Vt(this, void 0, void 0, function* () {
            const t = { videoId: (yield this.Ct.getVideoDataAsync()).videoId };
            return new x(o, s, t);
          });
        }
      } {
        constructor(t, e, i, s) {
          super(t, e, i, s),
            (this.de = new n("ext:ContentScripts:Hulu:HuluContentScript")),
            this.de.debug({ methodName: "constructor", message: "Hulu Content Script" });
        }
      }
      var Rt = i(7206),
        Ut = i.n(Rt);
      const Gt = [
          "Batman.svg",
          "DeadPool.svg",
          "CptAmerica.svg",
          "Wolverine.svg",
          "IronMan.svg",
          "Goofy.svg",
          "Alien.svg",
          "Mulan.svg",
          "Snow-White.svg",
          "Poohbear.svg",
          "Sailormoon.svg",
          "Sailor Cat.svg",
          "Pizza.svg",
          "Cookie.svg",
          "Chocobar.svg",
          "hotdog.svg",
          "Hamburger.svg",
          "Popcorn.svg",
          "IceCream.svg",
          "ChickenLeg.svg"
        ],
        Ht = [
          "General/Alien.svg",
          "General/Batman.svg",
          "General/ChickenLeg.svg",
          "General/Chocobar.svg",
          "General/Cookie.svg",
          "General/CptAmerica.svg",
          "General/DeadPool.svg",
          "General/Goofy.svg",
          "General/Hamburger.svg",
          "General/hotdog.svg",
          "General/IceCream.svg",
          "General/IronMan.svg",
          "General/Mulan.svg",
          "General/Pizza.svg",
          "General/Poohbear.svg",
          "General/Popcorn.svg",
          "General/Sailor Cat.svg",
          "General/Sailormoon.svg",
          "General/Snow-White.svg",
          "General/Wolverine.svg"
        ],
        Wt = [
          "General/Alien.svg",
          "General/Batman.svg",
          "General/ChickenLeg.svg",
          "General/Chocobar.svg",
          "General/Cookie.svg",
          "General/CptAmerica.svg",
          "General/DeadPool.svg",
          "General/Goofy.svg",
          "General/Hamburger.svg",
          "General/hotdog.svg",
          "General/IceCream.svg",
          "General/IronMan.svg",
          "General/Mulan.svg",
          "General/Pizza.svg",
          "General/Poohbear.svg",
          "General/Popcorn.svg",
          "General/Sailor Cat.svg",
          "General/Sailormoon.svg",
          "General/Snow-White.svg",
          "General/Wolverine.svg",
          "Christmas/angel.svg",
          "Christmas/bell.svg",
          "Christmas/box.svg",
          "Christmas/cane.svg",
          "Christmas/flake.svg",
          "Christmas/gingerbread.svg",
          "Christmas/gingerbread_F.svg",
          "Christmas/gingerbread_M.svg",
          "Christmas/gloves_blue.svg",
          "Christmas/gloves_red.svg",
          "Christmas/hat.svg",
          "Christmas/ornament.svg",
          "Christmas/raindeer.svg",
          "Christmas/reef.svg",
          "Christmas/santa_F.svg",
          "Christmas/santa_M.svg",
          "Christmas/snowglobe.svg",
          "Christmas/snowman.svg",
          "Christmas/sock.svg",
          "Christmas/tree.svg",
          "Halloween/bats.svg",
          "Halloween/candy_corn.svg",
          "Halloween/cat_black.svg",
          "Halloween/cat_white.svg",
          "Halloween/coffin.svg",
          "Halloween/eye_ball.svg",
          "Halloween/face_angry.svg",
          "Halloween/face_evil.svg",
          "Halloween/face_silly.svg",
          "Halloween/face_smile.svg",
          "Halloween/frankenstein.svg",
          "Halloween/ghost_F.svg",
          "Halloween/ghost_M.svg",
          "Halloween/gravestone.svg",
          "Halloween/lollipop.svg",
          "Halloween/moon.svg",
          "Halloween/mummy.svg",
          "Halloween/potion.svg",
          "Halloween/pumpkin.svg",
          "Halloween/pumpkin_witch.svg",
          "Halloween/skull_brain.svg",
          "Halloween/skull_candy.svg",
          "Halloween/skull_girl.svg",
          "Halloween/witch_hat.svg",
          "Thanksgiving/acorn.svg",
          "Thanksgiving/bread.svg",
          "Thanksgiving/candles.svg",
          "Thanksgiving/corn.svg",
          "Thanksgiving/drinks.svg",
          "Thanksgiving/maple_leaf.svg",
          "Thanksgiving/plate_chicken.svg",
          "Thanksgiving/pumpkin.svg",
          "Thanksgiving/pumpkin_pie.svg",
          "Thanksgiving/slice_pie.svg",
          "Thanksgiving/sun_flower.svg",
          "Thanksgiving/turkey_face.svg"
        ],
        zt = {
          General: [
            "Alien.svg",
            "Batman.svg",
            "ChickenLeg.svg",
            "Chocobar.svg",
            "Cookie.svg",
            "CptAmerica.svg",
            "DeadPool.svg",
            "Goofy.svg",
            "Hamburger.svg",
            "hotdog.svg",
            "IceCream.svg",
            "IronMan.svg",
            "Mulan.svg",
            "Pizza.svg",
            "Poohbear.svg",
            "Popcorn.svg",
            "Sailor Cat.svg",
            "Sailormoon.svg",
            "Snow-White.svg",
            "Wolverine.svg"
          ],
          Christmas: [
            "angel.svg",
            "bell.svg",
            "box.svg",
            "cane.svg",
            "flake.svg",
            "gingerbread.svg",
            "gingerbread_F.svg",
            "gingerbread_M.svg",
            "gloves_blue.svg",
            "gloves_red.svg",
            "hat.svg",
            "ornament.svg",
            "raindeer.svg",
            "reef.svg",
            "santa_F.svg",
            "santa_M.svg",
            "snowglobe.svg",
            "snowman.svg",
            "sock.svg",
            "tree.svg"
          ],
          Halloween: [
            "bats.svg",
            "candy_corn.svg",
            "cat_black.svg",
            "cat_white.svg",
            "coffin.svg",
            "eye_ball.svg",
            "face_angry.svg",
            "face_evil.svg",
            "face_silly.svg",
            "face_smile.svg",
            "frankenstein.svg",
            "ghost_F.svg",
            "ghost_M.svg",
            "gravestone.svg",
            "lollipop.svg",
            "moon.svg",
            "mummy.svg",
            "potion.svg",
            "pumpkin.svg",
            "pumpkin_witch.svg",
            "skull_brain.svg",
            "skull_candy.svg",
            "skull_girl.svg",
            "witch_hat.svg"
          ],
          Thanksgiving: [
            "acorn.svg",
            "bread.svg",
            "candles.svg",
            "corn.svg",
            "drinks.svg",
            "maple_leaf.svg",
            "plate_chicken.svg",
            "pumpkin.svg",
            "pumpkin_pie.svg",
            "slice_pie.svg",
            "sun_flower.svg",
            "turkey_face.svg"
          ]
        };
      function Kt(t) {
        return t
          ? t
              .replace(/&/g, "&amp;")
              .replace(/"/g, "&quot;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/[\r\n]{3,}/gm, "\n\n")
              .replace(
                w,
                `<span style="font-size: ${(function (t) {
                  let e = 16;
                  const i = t.replace(w, "").replace(/[\uFE0F]/g, ""),
                    n = ((t || "").match(w) || []).length;
                  return 0 === i.length && n <= 3 && (e = 32), e;
                })(t)}px">$&</span>`
              )
          : t;
      }
      const Jt = {
        General: function () {
          return !0;
        },
        Christmas: function () {
          return 11 === new Date().getMonth();
        },
        Halloween: function () {
          const t = new Date();
          return 9 === t.getMonth() && t.getDate() >= 24;
        },
        Thanksgiving: function () {
          const t = new Date();
          return (
            (10 === t.getMonth() && t.getDate() >= 18 && t.getDate() <= 28) || (9 === t.getMonth() && t.getDate() >= 8 && t.getDate() <= 14)
          );
        }
      };
      var Yt,
        qt = function (t, e, i, n) {
          return new (i || (i = Promise))(function (s, u) {
            function o(t) {
              try {
                a(n.next(t));
              } catch (t) {
                u(t);
              }
            }
            function r(t) {
              try {
                a(n.throw(t));
              } catch (t) {
                u(t);
              }
            }
            function a(t) {
              var e;
              t.done
                ? s(t.value)
                : ((e = t.value),
                  e instanceof i
                    ? e
                    : new i(function (t) {
                        t(e);
                      })).then(o, r);
            }
            a((n = n.apply(t, e || [])).next());
          });
        };
      class Xt {
        constructor(t) {
          var e, i, n, s, u, o;
          (this.le = {
            userIcon: null !== (e = t.userIcon) && void 0 !== e ? e : "",
            userNickname: null !== (i = t.userNickname) && void 0 !== i ? i : "",
            nameColor: null !== (n = t.nameColor) && void 0 !== n ? n : "",
            badge: null !== (s = t.badge) && void 0 !== s ? s : "",
            reactions: null !== (u = t.reactions) && void 0 !== u ? u : v
          }),
            (this.pe = null !== (o = t.userId) && void 0 !== o ? o : "");
        }
        saveUserIcon(t) {
          (t = Kt(t)),
            (this.le.userIcon = t),
            xt.setItemsAsync({ userIcon: t }),
            E("new user settings after set user icon: " + JSON.stringify(this.le));
        }
        saveUserNickname(t) {
          (this.le.userNickname = t),
            xt.setItemsAsync({ userNickname: t }),
            E("new user settings after set user nickname: " + JSON.stringify(this.le));
        }
        saveUserSettings(t) {
          return qt(this, void 0, void 0, function* () {
            const e = Kt(t.userIcon);
            (this.le = t),
              (this.le.userIcon = e),
              yield xt.setItemsAsync({
                userNickname: t.userNickname,
                userIcon: e,
                nameColor: t.nameColor,
                badge: t.badge,
                reactions: t.reactions
              }),
              E("new user settings after save: " + JSON.stringify(this.le));
          });
        }
        get userSettings() {
          return this.le;
        }
        get permId() {
          return this.pe;
        }
        get userIcon() {
          return this.le.userIcon;
        }
        get userNickname() {
          return this.le.userNickname;
        }
      }
      class Zt extends B {
        constructor(t, e, i) {
          super(t, e, A.SET_TYPING), (this.data = i);
        }
      }
      class te extends B {
        constructor(t, e, i) {
          super(t, e, A.SEND_MESSAGE), (this.data = i);
        }
      }
      class ee extends B {
        constructor(t, e, i) {
          super(t, e, A.BROADCAST_USER_SETTINGS), (this.data = i);
        }
      }
      class ie extends B {
        constructor(t, e, i) {
          super(t, e, A.SEND_REACTION), (this.data = i);
        }
      }
      class ne extends B {
        constructor(t, e, i) {
          super(t, e, A.SEND_GIF), (this.data = i);
        }
      }
      var se = new Uint8Array(16);
      function ue() {
        if (
          !Yt &&
          !(Yt =
            ("undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
            ("undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
        )
          throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return Yt(se);
      }
      const oe = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      const re = function (t) {
        return "string" == typeof t && oe.test(t);
      };
      for (var ae = [], ce = 0; ce < 256; ++ce) ae.push((ce + 256).toString(16).substr(1));
      const De = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = (
            ae[t[e + 0]] +
            ae[t[e + 1]] +
            ae[t[e + 2]] +
            ae[t[e + 3]] +
            "-" +
            ae[t[e + 4]] +
            ae[t[e + 5]] +
            "-" +
            ae[t[e + 6]] +
            ae[t[e + 7]] +
            "-" +
            ae[t[e + 8]] +
            ae[t[e + 9]] +
            "-" +
            ae[t[e + 10]] +
            ae[t[e + 11]] +
            ae[t[e + 12]] +
            ae[t[e + 13]] +
            ae[t[e + 14]] +
            ae[t[e + 15]]
          ).toLowerCase();
        if (!re(i)) throw TypeError("Stringified UUID is invalid");
        return i;
      };
      const he = function (t, e, i) {
        var n = (t = t || {}).random || (t.rng || ue)();
        if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), e)) {
          i = i || 0;
          for (var s = 0; s < 16; ++s) e[i + s] = n[s];
          return e;
        }
        return De(n);
      };
      var de = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var e;
            t.done
              ? s(t.value)
              : ((e = t.value),
                e instanceof i
                  ? e
                  : new i(function (t) {
                      t(e);
                    })).then(o, r);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
      const le = new (class {
        isUserIconValid(t) {
          return (
            !!t &&
            (t.includes("?newIconUrl=")
              ? Wt.includes(t.split("?newIconUrl=")[1]) && Gt.includes(t.split("?newIconUrl=")[0])
              : Wt.includes(t))
          );
        }
        isUserIdValid(t) {
          return "string" == typeof t && (16 === t.length || 36 === t.length);
        }
        isUserNickNameValid(t) {
          return t && "string" == typeof t && t.length < 20;
        }
        getDefaultUserIcon() {
          return Ht[Math.floor(Math.random() * Ht.length)];
        }
        getDefaultUserNickName() {
          return "";
        }
        ge(t) {
          return de(this, void 0, void 0, function* () {
            try {
              yield xt.setItemsAsync(t);
            } catch (t) {}
          });
        }
        getValidatedChromeStorageDataAsync() {
          return de(this, void 0, void 0, function* () {
            const t = yield kt.getAllItemsAsync(),
              e = le.validateStorageData(t);
            return JSON.stringify(t) !== JSON.stringify(e) && this.ge(e), e;
          });
        }
        validateStorageData(t) {
          const e = "object" == typeof t ? Object.assign({}, t) : {};
          return (
            e.userIcon && e.userIcon.includes("?newIconUrl=") && (e.userIcon = e.userIcon.split("?newIconUrl=")[1]),
            this.isUserIconValid(e.userIcon) || (e.userIcon = this.getDefaultUserIcon()),
            this.isUserNickNameValid(e.userNickname) || (e.userNickname = this.getDefaultUserNickName()),
            e
          );
        }
      })();
      Object.freeze(le);
      const pe = le;
      var ge;
      !(function (t) {
        (t.HEART = "heart"), (t.ANGRY = "angry"), (t.FIRE = "fire"), (t.LAUGH = "laugh"), (t.CRY = "cry"), (t.SURPRISE = "surprise");
      })(ge || (ge = {}));
      var Fe = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var e;
            t.done
              ? s(t.value)
              : ((e = t.value),
                e instanceof i
                  ? e
                  : new i(function (t) {
                      t(e);
                    })).then(o, r);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
      class ve {
        constructor(t) {
          (this.Fe = this.ve.bind(this)),
            (this.ye = this.resetIdleTimer.bind(this)),
            (this.I = (t) => {
              "TP_EMOJI_REQ_RELOAD" === t.data && this.updateFrequentlyUsed(), t.data && "emoji-click" === t.data.type && this.fe(t.data);
            }),
            (this.Ce = (t) => {
              (t.target !== jQuery("#chat-input")[0] && t.target !== jQuery("#nickname-edit")[0]) || t.stopImmediatePropagation();
            }),
            (this.we = (t) => {
              this.B.onVideoClick();
              const e = t.target;
              let i = "" !== e.id ? e.id : e.className;
              i = e.getAttribute("data-tp-id") ? e.getAttribute("data-tp-id") : i;
              const n = { name: "user_click", component: { name: i, type: e.nodeName, origin: "other" } },
                u = new mt(o, s, n);
              b.l(u),
                t.target !== jQuery("emoji-picker")[0] &&
                  t.target !== jQuery("#chat-input")[0] &&
                  jQuery("#emoji-picker-container") &&
                  !jQuery("#emoji-picker-container").is(":hidden") &&
                  this.B.toggleEmojiClicker(),
                t.target instanceof HTMLElement &&
                  jQuery("#gif-picker-container").length &&
                  jQuery("#gif-picker-container")[0] &&
                  !jQuery("#gif-picker-container")[0].contains(t.target) &&
                  t.target !== jQuery("#chat-input")[0] &&
                  !jQuery("#gif-picker-container").is(":hidden") &&
                  "category-img" !== t.target.className &&
                  this.B.toggleGIFs();
            }),
            (this.fe = (t) => {
              console.log("on Emoji Click");
              const e = jQuery("#chat-input")[0],
                i = t.detail.unicode,
                n = new mt(o, s, { name: "user_click", component: { name: "chat_input_container-emoji_picker-emoji", type: i } });
              b.l(n);
              const u = new mt(o, s, { eventType: `emoji-click-${i}`, sessionId: this.B.getSessionId() });
              b.l(u), L.pushTask(() => this.updateFrequentlyUsed(t.detail.emoji));
              const r = window.getSelection();
              if (!jQuery("#chat-input").is(":focus") && e.lastChild) {
                const t = document.createRange();
                t.setStartAfter(e.lastChild), null == r || r.removeAllRanges(), null == r || r.addRange(t);
              }
              this.B.focusChat(), this.Ee(i);
              e.scrollHeight - e.scrollTop <= e.clientHeight + 40 && (e.scrollTop = e.scrollHeight), this._e(), this.B.onInputChange();
            }),
            (this.B = t);
        }
        be() {
          E("Idle Warning called"), et(q);
          const t = new mt(o, s, {
            name: "party_warning",
            action: { description: "user has been warned for being idle", reason: "user was idle for 120000 time in milliseconds." }
          });
          b.l(t);
          const e = new mt(o, s, { eventType: "idle-warn-2hr", sessionId: this.B.getSessionId() });
          b.l(e), (this.je = setTimeout(this.Be.bind(this), H));
        }
        Be() {
          E("Idle kick called");
          const t = new mt(o, s, {
              name: "party_kick",
              action: { description: "user has been kicked for being idle", reason: "user was idle for 7200000 time in milliseconds." }
            }),
            e = new st(o, s, Ot);
          b.l(t), b.l(e);
        }
        resetIdleTimer() {
          this.Ae && clearTimeout(this.Ae), this.je && (it(), clearTimeout(this.je)), (this.Ae = setTimeout(this.be.bind(this), G));
        }
        ke() {
          (this.Ae = setTimeout(this.be.bind(this), G)),
            (window.onmousemove = (t) => {
              t.isTrusted && this.ye();
            }),
            (window.onfocus = () => this.ye()),
            (window.onmousedown = () => this.ye()),
            (window.ontouchstart = () => this.ye()),
            (window.onkeydown = () => this.ye());
        }
        Qe() {
          this.Ae && clearTimeout(this.Ae),
            this.je && clearTimeout(this.je),
            (window.onmousemove = null),
            (window.onmousedown = null),
            (window.ontouchstart = null),
            (window.onkeydown = null);
        }
        startListening() {
          E("Listening for chat events"), this.ke(), this.Ie(), this.initWindowListeners();
        }
        stopListening() {
          this.xe(), this.Qe(), this.Se();
        }
        ve() {
          this.B.clearUnreadCount();
        }
        Te(t) {
          if ((console.log("Pasting"), t.preventDefault(), t.clipboardData)) {
            const e = t.clipboardData.getData("text/plain");
            document.execCommand("insertHTML", !1, e);
          }
          this.B.onInputChange();
        }
        initWindowListeners() {
          jQuery(window).on("focus", this.Fe),
            window.addEventListener("message", this.I),
            document.addEventListener("dragstart", this.Me.bind(this)),
            document.addEventListener("webkitfullscreenchange", this.B.onFullScreen),
            document.addEventListener("fullscreenchange", this.B.onFullScreen),
            document.addEventListener("keydown", this.Ce, !0),
            document.addEventListener("emoji-click", this.fe),
            document.addEventListener("click", this.we);
        }
        Ie() {
          jQuery(window).on("focus", this.Fe),
            jQuery("#party-tab").on("click", this.B.togglePartyTab.bind(this.B)),
            jQuery("#friends-tab").on("click", this.B.toggleFriendsTab.bind(this.B)),
            jQuery(".user-icon").on("click", this.B.toggleLargeUserIconButton.bind(this.B)),
            jQuery("#user-icon").on("click", this.B.toggleIconContainer.bind(this.B)),
            jQuery("#link-icon").on("click", this.B.linkIconListener.bind(this.B)),
            jQuery("#reset-icon").on("click", this.B.resetIconListener.bind(this.B)),
            jQuery(".image-button").on("click", this.B.userIconSelectorListener.bind(this.B)),
            jQuery("#chat-input-container").on("keydown", this.B.onChatKeyDown.bind(this.B)),
            jQuery("#nickname-edit").on("keydown", this.B.onChatKeyDown.bind(this.B)),
            jQuery("#chat-input").on("keypress", this.B.onChatKeyPress.bind(this.B)),
            jQuery("#chat-input").on("input", this.B.onInputChange.bind(this.B)),
            jQuery("#gif-search").on("keyup", this.B.onGifSearch.bind(this.B)),
            jQuery("#saveChanges").on("click", this.B.saveChangesListener.bind(this.B)),
            jQuery("#cancelNickname").on("click", this.B.cancelNicknameListener.bind(this.B)),
            jQuery("#chat-wrapper").on("mouseup", this.B.cancelEvent),
            jQuery("#chat-wrapper").on("mousedown", this.B.cancelEvent),
            jQuery("#chat-wrapper").on("pointerup", this.B.cancelEvent),
            jQuery("#chat-wrapper").on("pointerdown", this.B.cancelEvent),
            jQuery("#chat-wrapper").on("mousemove", this.B.cancelEvent),
            jQuery("#chat-wrapper").on("pointermove", this.B.cancelEvent),
            jQuery("#chat-wrapper").on("keyup", this.B.onChatKeyUp.bind(this.B)),
            jQuery("#emoji-picker-btn").on("click", this.B.addEmojiPicker.bind(this.B)),
            jQuery("#gif-btn").on("click", this.B.addGifPicker.bind(this.B)),
            jQuery(".gif-img").on("click", this.B.clickGif.bind(this.B)),
            jQuery(".gif-results").on("click", "video, img", this.B.clickGif.bind(this.B)),
            jQuery("#category-container").on("click", "video", this.B.clickGif.bind(this.B)),
            jQuery("#gif-input-back").on("click", this.B.resetGif.bind(this.B)),
            jQuery("#reaction-btn").on("click", this.B.addReactionTab.bind(this.B)),
            jQuery("#chat-input-container").on("click", this.Pe.bind(this)),
            jQuery("#chat-input").on("input", this._e.bind(this)),
            jQuery("#chat-input").on("drop", this.Ne.bind(this)),
            jQuery("#gif-results-wrapper").on("scroll", this.B.onScrollToBottom.bind(this.B)),
            this.$e(),
            document.addEventListener("keydown", this.Ce.bind(this), !0),
            this.B.initCustomListeners();
        }
        $e() {
          jQuery("#tp-heart-button").on("click", () => {
            this.B.onReactionClicked(ge.HEART);
          }),
            jQuery("#tp-cry-button").on("click", () => {
              this.B.onReactionClicked(ge.CRY);
            }),
            jQuery("#tp-angry-button").on("click", () => {
              this.B.onReactionClicked(ge.ANGRY);
            }),
            jQuery("#tp-surprise-button").on("click", () => {
              this.B.onReactionClicked(ge.SURPRISE);
            }),
            jQuery("#tp-laugh-button").on("click", () => {
              this.B.onReactionClicked(ge.LAUGH);
            }),
            jQuery("#tp-fire-button").on("click", () => {
              this.B.onReactionClicked(ge.FIRE);
            });
        }
        _e() {
          var t, e;
          const i =
              null !== (t = jQuery("#bottom-chat-controls").outerHeight(!0)) && void 0 !== t
                ? t
                : parseInt(jQuery("#bottom-chat-controls").css("height")),
            n = parseInt(jQuery("#chat-input-container").css("padding-bottom")),
            s =
              (null !== (e = jQuery("#chat-input").outerHeight(!0)) && void 0 !== e ? e : parseInt(jQuery("#chat-input").css("height"))) +
              i +
              n;
          jQuery("#emoji-picker-container").css({ bottom: s }), jQuery("#gif-picker-container").css({ bottom: s });
        }
        Ne(t) {
          t.preventDefault();
        }
        Me(t) {
          t.preventDefault();
        }
        Pe(t) {
          t.target === jQuery("#chat-input")[0] && this.B.focusChat();
        }
        Ee(t) {
          let e, i;
          if (window.getSelection && ((e = window.getSelection()), e && e.getRangeAt && e.rangeCount)) {
            (i = e.getRangeAt(0)), i.deleteContents();
            const n = document.createElement("span");
            (n.className = "inTextEmoji"), (n.innerHTML = t);
            const s = document.createDocumentFragment();
            let u, o;
            for (; (u = n.firstChild); ) o = s.appendChild(u);
            i.insertNode(s), o && ((i = i.cloneRange()), i.setStartAfter(o), i.collapse(!1), e.removeAllRanges(), e.addRange(i));
          }
        }
        Oe(t) {
          return "object" == typeof t && null != t && "unicode" in t;
        }
        Ve(t) {
          if (!Array.isArray(t)) return !1;
          if (0 === t.length) return !1;
          for (let e = 0; e < t.length; e++) {
            const i = t[e];
            if (!this.Oe(i)) return !1;
          }
          return !0;
        }
        updateFrequentlyUsed(t) {
          var e;
          return Fe(this, void 0, void 0, function* () {
            const i = yield kt.getItemsAsync([m]);
            let n = null !== (e = i.recentlyUsedEmojiMap) && void 0 !== e ? e : C;
            this.Ve(n) || (n = C),
              Array.isArray(n) &&
                (t && ((n = n.filter((e) => e.unicode != t.unicode)), n.unshift(t), (n = n.slice(0, 24))),
                yield xt.setItemsAsync({ [m]: n }),
                window.postMessage({ type: "TP_FREQ_USED", data: n }, "*"));
          });
        }
        Se() {
          jQuery(window).off("focus", this.Fe),
            document.removeEventListener("emoji-click", this.fe),
            document.removeEventListener("keydown", this.Ce, !0),
            document.removeEventListener("click", this.we),
            window.removeEventListener("message", this.I),
            document.removeEventListener("webkitfullscreenchange", this.B.onFullScreen),
            document.removeEventListener("fullscreenchange", this.B.onFullScreen);
        }
        xe() {
          jQuery(".user-icon").off(),
            jQuery("#user-icon").off(),
            jQuery("#link-icon").off(),
            jQuery(".image-button").off(),
            jQuery("#chat-input").off(),
            jQuery("#saveChanges").off(),
            jQuery("#cancelNickname").off(),
            jQuery("#chat-input-container").off(),
            jQuery("#chat-wrapper").off();
        }
      }
      class me {
        constructor(t) {
          (this.B = t),
            (this.Le = []),
            (this.Re = 0),
            (this.Ue = document.title),
            (this.Ge = 0),
            (this.He = new Map()),
            (this.We = new Map()),
            (this.ze = []),
            (this.Ke = []),
            (this.Je = ""),
            E("Message Controller");
        }
        Ye(t, e, i, n) {
          return jQuery(
            `\n            <div class="msg-container ${
              !n && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    <div class="icon">\n                    ${
              n ? `<img src="${Kt(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                    </div>\n                </div>\n                <div class="msg-txt message${
              i.isSystemMessage ? "-system" : "-txt"
            }">\n                    ${
              n ? `<h3 data-tp-id="chat_history_container-nickname">${e}</h3>` : ""
            }\n                    <p data-tp-id="chat_history_container-message">${Kt(
              i.body
            ).trim()}</p>\n                </div>\n            </div>\n          `
          );
        }
        qe(t, e, i, n) {
          const s = 200 / (i.gifObject.media.full.dims[0] / i.gifObject.media.full.dims[1]),
            u = 200 / (i.gifObject.media.fullMobile.dims[0] / i.gifObject.media.fullMobile.dims[1]),
            o = this.B.shouldUseVideoGIF();
          return jQuery(
            `\n            <div class="msg-container ${
              !n && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    <div class="icon" >\n                    ${
              n ? `<img src="${Kt(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                    </div>\n                </div>\n                <div class="msg-gif message-gif">\n                    ${
              n ? `<h3 data-tp-id="chat_history_container-nickname">${e}</h3>` : ""
            }  \n            ${
              o
                ? `<video src="${Kt(
                    i.gifObject.media.full.url
                  )}"  height="${s}" class="tp-video-gif" data-tp-id="chat_history_container-gif" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback>`
                : `<img src="${Kt(
                    i.gifObject.media.fullMobile.url
                  )}"  height="${u}" class="tp-video-gif" data-tp-id="chat_history_container-gif" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback>`
            }     \n                </div>\n            </div>\n          `
          );
        }
        Xe(t, e, i) {
          return jQuery(
            `\n            <div class="msg ${
              !i && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    ${
              i ? `<img src="${Kt(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                </div>\n                <div class="message${
              e.isSystemMessage ? "-system" : "-txt"
            }">\n                    <p class="msg-nickname"></p>\n                    <p data-tp-id="chat_history_container-message">${Kt(
              e.body
            ).trim()}</p>\n                </div>\n            </div>\n        `
          );
        }
        Ze(t, e, i) {
          const n = 200 / (e.gifObject.media.full.dims[0] / e.gifObject.media.full.dims[1]),
            s = 200 / (e.gifObject.media.fullMobile.dims[0] / e.gifObject.media.fullMobile.dims[1]),
            u = this.B.shouldUseVideoGIF();
          return jQuery(
            `\n            <div class="msg-container ${
              !i && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    <div class="tp-icon-name">\n                    ${
              i ? `<img src="${Kt(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                    </div>\n                </div>\n                <div class="msg-gif message-gif">\n                    <p class="msg-nickname"></p>\n                    ${
              u
                ? `<video src="${Kt(
                    e.gifObject.media.full.url
                  )}" data-tp-id="chat_history_container-gif" height="${n}" class = "tp-video-gif" autoplay loop playsinline disablepictureinpicture disableremoteplayback>`
                : `<img src="${Kt(
                    e.gifObject.media.fullMobile.url
                  )}" data-tp-id="chat_history_container-gif" height="${s}" class = "tp-video-gif" autoplay loop playsinline disablepictureinpicture disableremoteplayback>`
            }\n                </div>\n            </div>\n          `
          );
        }
        ti(t, e, i, n, s) {
          t.appendTo(jQuery("#chat-history"));
          const u = t[0];
          (u.pe = e.permId), (u.ei = i), (u.ii = n), (u.ni = e), (u.si = s);
        }
        reloadMessages() {
          this.B.queueMessageForFrame(I.CLEAR_MESSAGES, "");
          const t = JSON.parse(JSON.stringify(this.Le));
          for (let e = 0; e < t.length; e++) {
            const i = t[e];
            "gifObject" in i ? this.addGif(i, e) : this.addMessage(i, !1, e);
          }
          this.Le = t;
        }
        ui(t, e) {
          if (Math.abs(t.timestamp - e.timestamp) > 6e4) return !1;
          if (t.permId !== e.permId) return !1;
          if ("isSystemMessage" in e && e.isSystemMessage && (e.body.includes("joined") || e.body.includes("left"))) return !1;
          if ("gifObject" in t) {
            if ("isSystemMessage" in e && e.isSystemMessage) return !1;
          } else {
            if (t.isSystemMessage && (t.body.includes("joined") || t.body.includes("left"))) return !1;
            if ("gifObject" in e) {
              if (t.isSystemMessage) return !1;
            } else if (t.isSystemMessage !== e.isSystemMessage) return !1;
          }
          return !0;
        }
        addMessage(t, e, i) {
          if (
            (void 0 === i && (i = this.Le.length),
            t.isSystemMessage && "left" === t.body && (console.log("trying to add left message"), !t.userIcon && !this.He.has(t.permId)))
          )
            return;
          if (0 === i && t.isSystemMessage && t.body.includes("joined")) return;
          e &&
            t.isSystemMessage &&
            t.body.indexOf("updated their user icon") > -1 &&
            (t.userIcon && this.setUserIcon(t.permId, t.userIcon), t.userNickname && this.setUserNickname(t.permId, t.userNickname));
          const n = this.Le.slice(-1).pop(),
            s = !(void 0 !== n && i > 0) || !this.ui(n, t);
          this.Le.push(t);
          const u = Object.assign({}, t),
            o = this.getUserIconURL(u.permId, u.userIcon),
            r = this.getUserNickname(u.permId, u.userNickname);
          this.B.queueMessageForFrame(I.ADD_MESSAGE, { originalMessage: u, userIcon: o, userNickname: r });
          const a = "" === r ? this.Xe(o, u, s) : this.Ye(o, r, u, s);
          this.ti(a, u, o, r, s), this.scrollToBottom(), this.oi();
        }
        addGif(t, e) {
          void 0 === e && (e = this.Le.length);
          const i = this.Le.slice(-1).pop(),
            n = !(void 0 !== i && e > 0) || !this.ui(i, t);
          this.Le.push(t);
          const s = t.userIcon ? this.getUserIconURL(t.permId, t.userIcon) : this.getUserIconURL(t.permId),
            u = t.userNickname ? this.getUserNickname(t.permId, t.userNickname) : "";
          this.B.queueMessageForFrame(I.ADD_MESSAGE, { originalMessage: t, userIcon: s, userNickname: u });
          const o = "" === u ? this.Ze(s, t, n) : this.qe(s, u, t, n);
          (o[0].ri = !0), this.ti(o, t, s, u, n), ht(100)().then(this.scrollToBottom.bind(this)), this.oi();
        }
        scrollToBottom() {
          jQuery("#chat-history").scrollTop(jQuery("#chat-history").prop("scrollHeight"));
        }
        clearUnreadCount() {
          this.Re > 0 && ((this.Re = 0), (document.title = this.Ue));
        }
        oi() {
          (this.Re += 1), (this.Ge += 1), document.hasFocus() || (document.title = "(" + String(this.Re) + ") " + this.Ue);
        }
        getUserIconURL(t, e = "") {
          if (!this.He.has(t)) {
            const i = this.parseIconSrc(e),
              n = void 0 !== i ? i : this.ai();
            this.He.set(t, n), this.Ke.push(n);
          }
          return this.He.get(t);
        }
        parseIconSrc(t) {
          const e = t.includes("?newIconUrl=") ? t.split("?newIconUrl=")[1] : t,
            i = t.includes("?newIconUrl=") ? t.split("?newIconUrl=")[0] : t;
          return Wt.includes(e)
            ? chrome.runtime.getURL("img/icons/" + t)
            : Gt.includes(i)
            ? chrome.runtime.getURL("img/icons/General/" + t)
            : void 0;
        }
        getUserNickname(t, e = "") {
          return this.We.has(t) || (this.We.set(t, e), this.ze.push(e)), Kt(this.We.get(t));
        }
        ai() {
          let t = chrome.runtime.getURL("img/icons/General/" + Gt[Math.floor(Math.random() * Gt.length)]);
          if (this.Ke.length < zt.General.length)
            for (; this.Ke.includes(t); ) t = chrome.runtime.getURL("img/icons/General/" + Gt[Math.floor(Math.random() * Gt.length)]);
          return t;
        }
        ci(t) {
          const e = t[0],
            i = e.pe;
          let n = e.ei;
          i && this.getUserIconURL(i) !== n && ((n = this.getUserIconURL(i)), t.find("img").attr("src", n), (e.ei = n));
          const s = e.ii;
          if (i && n) {
            const u = this.getUserNickname(i);
            if (u !== s) {
              const s = e.ni,
                o = e.si;
              let r;
              if (
                (e.ri && s && "gifObject" in s && o && (r = "" == u ? this.Ze(n, s, o) : this.qe(n, u, s, o)),
                !e.ri && s && "isSystemMessage" in s && o && (r = "" == u ? this.Xe(n, s, o) : this.Ye(n, u, s, o)),
                r)
              ) {
                t.replaceWith(r);
                const e = r[0];
                (e.pe = i), (e.ei = n), (e.ii = u), (e.ni = s), (e.si = o);
              }
            }
          }
        }
        setUserIconUrl(t) {
          (this.Je = t), this.B.queueMessageForFrame(I.SET_USER_ICON_URL, t);
        }
        renderSidebar() {
          jQuery("#user-icon img").attr("src", this.Je), jQuery(".user-icon img").attr("src", this.Je);
          const t = jQuery(".msg");
          for (let e = 0; e < t.length; e++) this.ci(jQuery(t[e]));
          const e = jQuery(".msg-container");
          for (let t = 0; t < e.length; t++) this.ci(jQuery(e[t]));
          this.B.isChatFrameActive() && this.reloadMessages();
        }
        Di(t) {
          let e = null;
          if (t)
            if (t.includes("?newIconUrl=")) {
              const i = t.split("?newIconUrl="),
                n = i[1],
                s = i[0];
              Wt.includes(n)
                ? (e = chrome.runtime.getURL(`img/icons/${n}`))
                : Gt.includes(s) && (e = chrome.runtime.getURL(`img/icons/General/${s}`));
            } else
              Wt.includes(t)
                ? (e = chrome.runtime.getURL(`img/icons/${t}`))
                : Gt.includes(t) && (e = chrome.runtime.getURL(`img/icons/General/${t}`));
          if (null === e) {
            let t = zt.General.filter((t) => !this.Ke.includes(t));
            0 === t.length && (t = zt.General);
            const i = t[Math.floor(Math.random() * t.length)];
            e = chrome.runtime.getURL(`/img/icons/General/${i}`);
          }
          return e;
        }
        setUserIcon(t, e) {
          const i = this.Di(e);
          this.He.set(t, i), this.Ke.push(i), this.renderSidebar();
        }
        setUserNickname(t, e) {
          const i = Kt(e);
          this.We.set(t, i), this.ze.push(i), this.renderSidebar();
        }
        updateUserData(t, e, i) {
          const n = this.Di(e);
          this.He.set(t, n), this.Ke.push(n), this.We.set(t, i), this.ze.push(i), this.renderSidebar();
        }
        addYoutubePromo() {
          jQuery(
            `\n        <div class="msg-container">\n            <div class="msg-txt message-system">\n                <div style="width:100%; height: 100px">\n                    <img data-tp-id="tp_youtube_promo" style="width: 100%;height: 100%;object-fit: contain;cursor:pointer !important;" src="${chrome.runtime.getURL(
              "img/youtube_promo.jpg"
            )}" \n                    onclick="window.open('https://teleparty.com/youtube')"\n                    />\n                </div>\n            </div>\n        </div>\n        `
          ).prependTo(jQuery("#chat-history"));
        }
        addReviewMessage() {
          jQuery(
            '\n          <div class="msg-container">\n          <div class="msg-txt message-system" style="width:100%">\n          <p>\n          Thanks for using Teleparty! <br> \n          If you enjoy the extension, please leave a positive review \n          <a id="reviewLink" href="https://chrome.google.com/webstore/detail/netflix-party-is-now-tele/oocalimimngaihdkbihfgmpkcpnmlaoa/reviews" style="display:inline;color:red;text-decoration:underline;" target="none">here!</a>\n          </p>\n          </div>\n          </div>\n          '
          ).appendTo(jQuery("#chat-history"));
          const t = new mt(o, s, {
            name: "review-shown",
            action: { description: "review was shown on chrome", reason: "review was shown." }
          });
          b.l(t);
          const e = { eventType: "review-shown-chrome", sessionId: this.B.getSessionId() },
            i = new mt(o, s, e);
          b.l(i),
            jQuery("#reviewLink").click(() => {
              chrome.storage.local.set({ reviewClicked: !0 });
              const t = new mt(o, s, {
                name: "review-clicked",
                action: { description: "review was clicked on chrome", reason: "review was clicked." }
              });
              b.l(t);
              const e = { eventType: "review-clicked-chrome", sessionId: this.B.getSessionId() },
                i = new mt(o, s, e);
              b.l(i);
            });
        }
      }
      class ye {
        constructor(t) {
          (this.hi = !1), (this.di = !1), (this.it = !1), (this.B = t);
        }
        setupPresenceIndicator() {
          (this.hi = !1), (this.di = !1), (this.it = !1), this.li();
        }
        pi() {
          return jQuery("#presence-indicator");
        }
        setTypingPresenceVisible(t) {
          (this.hi = t), this.li();
        }
        setBufferingPresenceVisible(t) {
          (this.di = t), this.li();
        }
        setWatchingAdsPresenceVisible(t) {
          (this.it = t), this.li();
        }
        getWatchingAdsVisible() {
          return this.it;
        }
        gi() {
          return this.it
            ? "People are watching ads..."
            : this.hi && this.di
            ? "People are typing and buffering..."
            : this.hi
            ? "People are typing..."
            : this.di
            ? "People are buffering..."
            : "";
        }
        li() {
          const t = this.gi();
          this.pi().text(t), this.B.queueMessageForFrame(I.SET_PRESENCE_MESSAGE, { text: t });
        }
      }
      var fe = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var e;
            t.done
              ? s(t.value)
              : ((e = t.value),
                e instanceof i
                  ? e
                  : new i(function (t) {
                      t(e);
                    })).then(o, r);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
      var Ce = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var e;
            t.done
              ? s(t.value)
              : ((e = t.value),
                e instanceof i
                  ? e
                  : new i(function (t) {
                      t(e);
                    })).then(o, r);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
      class we extends class {
        constructor() {
          (this.Fi = !1),
            (this.vi = 1),
            (this.mi = ""),
            (this.Pt = ""),
            (this.yi = "0"),
            (this.fi = ""),
            (this.Ci = !0),
            (this.wi = !1),
            (this.Ei = 0),
            (this._i = []),
            (this.bi = new V()),
            (this.ji = !1),
            (this.Bi = void 0),
            (this.Ai = !0),
            (this.ki = this.Qi()),
            (this.Ii = this.Qi()),
            (this.xi = !1),
            (this.Si = !1),
            (this.Ti = []),
            (this.logEvent = (t) => {
              const e = new mt(o, s, t);
              b.l(e);
            }),
            (this.checkInitReactionContainer = () => {
              kt.getItemsAsync([h]).then((t) => {
                (!0 !== t.reactionContainerOpen && void 0 !== t.reactionContainerOpen) || this.showReactionHolder();
              });
            }),
            (this.onSidebarFocus = () => {
              var t;
              null === (t = this.A) || void 0 === t || t.hideMessageIndicator();
            }),
            (this.setReactionsActive = (t) => {
              this.bi.pushTask(() => xt.setItemsAsync({ [h]: t.active }));
            }),
            (this.onFullScreen = () => {
              var t;
              this.scrollToBottom(),
                document.fullscreenElement || document.webkitIsFullScreen
                  ? this.logEvent({ name: "fullscreen_enter" })
                  : this.logEvent({ name: "fullscreen_exit" }),
                null === (t = this.A) || void 0 === t || t.setChatButtons();
            }),
            (this.cancelEvent = (t) => {
              t.stopPropagation();
            }),
            (this.Mi = !1),
            (this.Pi = new ve(this)),
            (this.Ni = new ye(this)),
            (this.$i = new me(this)),
            (this.Oi = void 0),
            (this.Vi = void 0),
            (this.te = !1);
        }
        setPageControls(t) {
          this.A = t;
        }
        fixPageControls() {
          var t, e;
          null === (t = this.A) || void 0 === t || t.enablePartyIcons(), null === (e = this.A) || void 0 === e || e.setChatButtons();
        }
        setChatVisible(t, e = !0) {
          return fe(this, void 0, void 0, function* () {
            if (this.isPartyWindowsActive()) throw new Error("Invalid Set Chat");
            e && (this.Ci = t), t && !this.Li() && this.reloadChat();
          });
        }
        Vt(t, e) {
          const i = new mt(o, s, { name: "error", action: { reason: e, description: t } });
          b.l(i);
        }
        getChatWindowVisible() {
          return this.Ii;
        }
        setChatWindowActive(t) {
          this.ki = t;
        }
        isChatFrameActive() {
          return this.Ai;
        }
        isPartyWindowsActive() {
          return this.ki;
        }
        shouldChatBeVisible() {
          return this.Ci;
        }
        incrementEmojiCount() {
          this.Ei++;
        }
        resetEmojiCount() {
          this.Ei = 0;
        }
        getEmojiCount() {
          return this.Ei;
        }
        setChatFrameReady(t) {
          this.ji && this.Ri(), (this.ji = !0), (this.Ui = t), console.log("setChatFrameReady");
        }
        queueMessageForFrame(t, e) {
          this.bi.pushTask(() =>
            fe(this, void 0, void 0, function* () {
              this.Gi(t, e);
            })
          );
        }
        Gi(t, e) {
          return fe(this, void 0, void 0, function* () {
            const i = this.Ui,
              n = { type: t, data: e, target: "TP_Sidebar", tabId: i, sender: o };
            b.l(n);
          });
        }
        Hi() {
          var t;
          return fe(this, void 0, void 0, function* () {
            try {
              console.log("Start delay"),
                yield dt(() => this.ji && null != this.Ui, 3e4)(),
                console.log("Chat Frame is Loaded"),
                this.Bi && this.Wi(this.Bi),
                null === (t = this.A) || void 0 === t || t.setResetChatButton();
            } catch (t) {
              this.Vt("Sidewindow didn't load in time", t);
            }
          });
        }
        Qi() {
          return window.origin.includes(".crunchyroll.com"), window.origin.includes("tv.apple.com"), !1;
        }
        zi() {
          return fe(this, void 0, void 0, function* () {
            yield b.l(new nt(o, s, k.LOAD_CHAT_WINDOW)), console.log(this.Ui);
          });
        }
        resetChatWindow(t = !1) {
          var e;
          return fe(this, void 0, void 0, function* () {
            yield b.l(new nt(o, s, k.RESET_CHAT_WINDOW)),
              console.log(this.Ui),
              (this.Ii = !0),
              (this.Ci = !0),
              top.postMessage({ type: "exitFullscreen" }, "*"),
              this.xi && t && (this.resetIconListener(), null === (e = this.A) || void 0 === e || e.setResetChatButton());
          });
        }
        hideChatWindow() {
          return fe(this, void 0, void 0, function* () {
            yield b.l(new nt(o, s, k.HIDE_CHAT_WINDOW)), (this.Ii = !1), (this.Ci = !1);
          });
        }
        Ki() {
          return fe(this, void 0, void 0, function* () {
            this.zi(), this.bi.pushTask(this.Hi.bind(this));
          });
        }
        loadInitData(t) {
          this.Bi = t;
        }
        Wi(t) {
          var e;
          return fe(this, void 0, void 0, function* () {
            const i = Object.assign({}, t);
            if (((i.iconMap = zt), (i.extensionBaseUrl = chrome.runtime.getURL("")), i.storageData)) {
              const t = yield pe.getValidatedChromeStorageDataAsync();
              i.storageData = t;
            }
            this.queueMessageForFrame(I.LOAD_INIT_DATA, i);
            const n = yield this.getVideoTitle();
            this.queueMessageForFrame(I.SET_PAGE_TITLE, { pageTitle: n }),
              this.queueMessageForFrame(I.SET_USER_LIST, this.Ti),
              this.queueMessageForFrame(I.UPDATE_SETTINGS, {
                userSettings: null === (e = this.Ji) || void 0 === e ? void 0 : e.userSettings
              });
          });
        }
        Ri() {
          return fe(this, void 0, void 0, function* () {
            if ((console.log("Reloading chat Frame"), this.Bi && (yield this.Wi(this.Bi)), this.Ji)) {
              const t = this.$i.getUserIconURL(this.Ji.permId, this.Ji.userIcon);
              this.queueMessageForFrame(I.SET_USER_ICON_URL, t);
            }
            const t = yield this.getVideoTitle();
            this.queueMessageForFrame(I.SET_PAGE_TITLE, { pageTitle: t }), this.reloadMessages();
          });
        }
        Yi() {
          return fe(this, void 0, void 0, function* () {
            this.qi(),
              yield ht(200)(),
              (jQuery("#tpChatFrame")[0].style.display = "block"),
              this.setChatVisible(!0),
              this.addIconSelector(),
              this.Xi(),
              this.Ni.setupPresenceIndicator(),
              this.checkInitReactionContainer();
          });
        }
        L(t) {
          this.Pi.initWindowListeners(), this.Qi() && this.Ki(), this.bi.pushTask(this.Hi.bind(this)), it(), (this.Ji = new Xt(t));
          const e = this.$i.getUserIconURL(this.Ji.permId, this.Ji.userIcon);
          this.$i.setUserIconUrl(e),
            this.$i.renderSidebar(),
            this.Li() && this.removeChat(),
            (this.Mi = !0),
            this.Zi(),
            this.Qi()
              ? jQuery("body").after(
                  `\n    <link rel="stylesheet" href="${chrome.runtime.getURL(
                    "css/alert.css"
                  )}">\n    <style tpInjected>\n      .on-screen-reaction {\n        position: absolute;\n        bottom: 0;\n        font-size: 100px;\n        z-index: 9999999999;\n      }\n      .on-screen-reaction-1 {\n        animation: 5s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-1;\n      }\n      .on-screen-reaction-2 {\n        animation: 6s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-2;\n      }\n      .on-screen-reaction-3 {\n        animation: 7s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-3;\n      }\n      @keyframes on-screen-reaction-slide {\n        0% {\n          opacity: 0;\n          transform: translateY(calc(0 - var(--reaction-size)));\n        }\n        20% {\n          opacity: 0.8;\n        }\n        30% {\n          opacity: 0.8;\n        }\n        90% {\n          opacity: 0;\n        }\n        100% {\n          transform: translateY(-100vh) translateX(-10px);\n          opacity: 0;\n        }\n      }\n      @keyframes on-screen-reaction-1 {\n        10% {\n          margin-left: -6px;\n        }\n        25% {\n          margin-left: 4px;\n        }\n        30% {\n          margin-left: -5px;\n        }\n        45% {\n          margin-left: 5px;\n        }\n        55% {\n          margin-left: -3px;\n        }\n        60% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        85% {\n          margin-left: 5px;\n        }\n        90% {\n          margin-left: -7px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n      @keyframes on-screen-reaction-2 {\n        15% {\n          margin-left: -2px;\n        }\n        20% {\n          margin-left: 5px;\n        }\n        35% {\n          margin-left: -6px;\n        }\n        40% {\n          margin-left: 5px;\n        }\n        50% {\n          margin-left: -5px;\n        }\n        65% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        80% {\n          margin-left: 4px;\n        }\n        95% {\n          margin-left: -5px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n      @keyframes on-screen-reaction-3 {\n        15% {\n          margin-left: -4px;\n        }\n        20% {\n          margin-left: 5px;\n        }\n        35% {\n          margin-left: -2px;\n        }\n        40% {\n          margin-left: 5px;\n        }\n        50% {\n          margin-left: -3px;\n        }\n        65% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        80% {\n          margin-left: 5px;\n        }\n        95% {\n          margin-left: -4px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n    </style>\n  `
                )
              : (this.Yi(), this.checkAddYoutubePromo());
        }
        checkAddYoutubePromo() {
          return fe(this, void 0, void 0, function* () {
            "true" !== (yield kt.getItemsAsync(["seenYoutubePromo"])).seenYoutubePromo &&
              (this.$i.addYoutubePromo(), xt.setItemsAsync({ seenYoutubePromo: "true" }));
          });
        }
        sendInitDataToSidebar(t) {
          this.Bi = t;
          const e = Object.assign({}, t);
          (e.iconMap = zt),
            (e.extensionBaseUrl = chrome.runtime.getURL("")),
            console.log(e),
            this.queueMessageForFrame(I.LOAD_INIT_DATA, e);
        }
        reloadChat() {
          return fe(this, void 0, void 0, function* () {
            console.log("Reload chat"),
              this.Li() ||
                this.isPartyWindowsActive() ||
                (this.qi(),
                yield ht(200)(),
                (jQuery("#tpChatFrame")[0].style.display = "block"),
                this.setChatVisible(this.Ci),
                this.addIconSelector(),
                this.tn(),
                this.Xi(),
                this.Ni.setupPresenceIndicator(),
                this.reloadMessages(),
                this.scrollToBottom(),
                this.checkInitReactionContainer());
          });
        }
        sendTeardown(t) {
          const e = new st(o, s, t);
          b.l(e);
        }
        Li() {
          return jQuery("#chat-wrapper").length > 0;
        }
        clearUnreadCount() {
          this.$i.clearUnreadCount();
        }
        en() {
          return fe(this, void 0, void 0, function* () {
            try {
              yield dt(() => null !== document.querySelector("#chat-history") || this.ki || (this.ji && this.Ai), 1e4)();
            } catch (t) {
              this.Vt("Failed to find chat history", t);
            }
          });
        }
        addMessage(t, e = !1) {
          this.bi.pushTask(() =>
            fe(this, void 0, void 0, function* () {
              yield this.en(), this.$i.addMessage(t, e);
            })
          );
        }
        addGif(t) {
          this.bi.pushTask(() =>
            fe(this, void 0, void 0, function* () {
              yield this.en(), this.$i.addGif(t);
            })
          );
        }
        reloadMessages() {
          this.$i.reloadMessages();
        }
        scrollToBottom() {
          this.$i.scrollToBottom();
        }
        addReviewMessage() {
          this.$i.addReviewMessage(), (this.te = !0);
        }
        get showingReveiwMessage() {
          return this.te;
        }
        set shouldReturnToVideo(t) {
          this.xi = t;
        }
        onBufferingMessage(t) {
          this.bi.pushTask(() =>
            fe(this, void 0, void 0, function* () {
              yield this.en(), this.Ni.setBufferingPresenceVisible(t.usersBuffering.length > 0);
            })
          );
        }
        onTypingMessage(t) {
          this.bi.pushTask(() =>
            fe(this, void 0, void 0, function* () {
              yield this.en(), this.Ni.setTypingPresenceVisible(t.usersTyping.length > 0);
            })
          );
        }
        onWatchingAdsMessage(t) {
          this.bi.pushTask(() =>
            fe(this, void 0, void 0, function* () {
              console.log("Set Ad Presence: " + t), yield this.en(), this.Ni.setWatchingAdsPresenceVisible(t.usersWatchingAds.length > 0);
            })
          );
        }
        getWatchingAds() {
          return this.Ni.getWatchingAdsVisible();
        }
        doUpdateSettings(t) {
          var e;
          null === (e = this.Ji) || void 0 === e || e.saveUserSettings(t), t.shouldBroadcast && this.nn(this.sn(t));
        }
        onUpdateSettingsMessage(t) {
          if ((this.$i.updateUserData(t.permId, t.userSettings.userIcon, t.userSettings.userNickname), this.Ji)) {
            const t = this.$i.getUserIconURL(this.Ji.permId, this.Ji.userIcon);
            this.$i.setUserIconUrl(t), this.$i.renderSidebar();
          }
        }
        Xi() {
          dt(() => this.Li(), 1e4)().then(() => {
            this.Pi.startListening();
          });
        }
        tn() {
          this.Pi.stopListening(), this.un && (clearTimeout(this.un), (this.wi = !1));
        }
        teardown() {
          (this.Mi = !1),
            (this.Pt = void 0),
            (this.rn = void 0),
            this.tn(),
            jQuery("[tpInjected]").remove(),
            this.removeChat(),
            this.setChatVisible(!1),
            console.log("teardown");
        }
        focusChat() {
          jQuery("#chat-input")[0].focus();
        }
        showEmojiPicker() {
          var t, e;
          jQuery("#gif-picker-container").is(":hidden") || this.toggleGIFs(), jQuery("#emoji-picker-btn-icon").css({ opacity: "1" });
          const i =
              null !== (t = jQuery("#bottom-chat-controls").outerHeight(!0)) && void 0 !== t
                ? t
                : parseInt(jQuery("#bottom-chat-controls").css("height")),
            n = parseInt(jQuery("#chat-input-container").css("padding-bottom")),
            s =
              (null !== (e = jQuery("#chat-input").outerHeight(!0)) && void 0 !== e ? e : parseInt(jQuery("#chat-input").css("height"))) +
              i +
              n;
          jQuery("#emoji-picker-container").css({ bottom: s });
        }
        hideEmojiPicker() {
          jQuery("#emoji-picker-btn-icon").css({ opacity: "" }), jQuery("#emoji-picker-container").css("bottom", "");
        }
        showReactionHolder() {
          jQuery("#reaction-btn-icon").css({ opacity: "1" }),
            jQuery("#reaction-holder").css({ display: "flex" }),
            jQuery("#reaction-holder").css({ "padding-top": "8px" }),
            jQuery("#chat-input-container").css({ "padding-top": "0" });
        }
        hideReactionHolder() {
          jQuery("#reaction-btn-icon").css({ opacity: "" }),
            jQuery("#reaction-btn").css({ background: "", padding: "" }),
            jQuery("#reaction-holder").css({ "padding-top": "" }),
            jQuery("#chat-input-container").css({ "padding-top": "" }),
            this.bi.pushTask(() => xt.setItemsAsync({ [h]: !1 }));
        }
        onOpenGifPicker() {
          var t, e;
          return fe(this, void 0, void 0, function* () {
            jQuery("#emoji-picker-container").is(":hidden") || this.toggleEmojiClicker(),
              jQuery("#gif-results-left")[0].innerHTML || this.fetchGIFs(),
              jQuery("#gif-btn-icon").css({ opacity: "1" });
            const i =
                null !== (t = jQuery("#bottom-chat-controls").outerHeight(!0)) && void 0 !== t
                  ? t
                  : parseInt(jQuery("#bottom-chat-controls").css("height")),
              n = parseInt(jQuery("#chat-input-container").css("padding-bottom")),
              s =
                (null !== (e = jQuery("#chat-input").outerHeight(!0)) && void 0 !== e ? e : parseInt(jQuery("#chat-input").css("height"))) +
                i +
                n;
            jQuery("#gif-picker-container").css({ bottom: s });
          });
        }
        onCloseGifPicker() {
          jQuery("#gif-btn-icon").css({ opacity: "" }), jQuery("#gif-btn").css({ background: "", padding: "" });
        }
        toggleEmojiClicker() {
          jQuery("#emoji-picker-container").slideToggle(0, () => {
            jQuery("#emoji-picker-container").is(":hidden") ? this.hideEmojiPicker() : this.showEmojiPicker();
          });
        }
        toggleReactions() {
          const t = document.querySelector("#chat-history");
          let e = !1;
          t && Math.abs(t.scrollHeight - t.scrollTop - t.clientHeight) < 10 && (e = !0),
            jQuery("#reaction-holder").slideToggle(0, () => {
              const t = jQuery("#reaction-holder").is(":hidden");
              t ? this.hideReactionHolder() : this.showReactionHolder(), !t && e && this.$i.scrollToBottom();
            });
        }
        onVideoClick() {
          this.queueMessageForFrame(I.ON_PAGE_CLICK);
        }
        toggleGIFs() {
          jQuery("#gif-picker-container").slideToggle(0, () => {
            jQuery("#gif-picker-container").is(":hidden") ? this.onCloseGifPicker() : this.onOpenGifPicker();
          });
        }
        addEmojiPicker(t) {
          t.stopPropagation();
          const e = new mt(o, s, {
            name: "user_click",
            component: { name: "chat_input_container-emoji_picker", type: "button", origin: "tp" }
          });
          b.l(e), this.toggleEmojiClicker();
        }
        addGifPicker(t) {
          t.stopPropagation();
          const e = new mt(o, s, {
            name: "user_click",
            component: { name: "chat_input_container-gif_popup", type: "button", origin: "tp" }
          });
          b.l(e), this.toggleGIFs();
        }
        addReactionTab(t) {
          t.stopPropagation();
          const e = new mt(o, s, {
            name: "user_click",
            component: { name: "chat_input_container-reaction_pinner", type: "button", origin: "tp" }
          });
          b.l(e), this.toggleReactions();
        }
        Zi() {
          if (
            (E("Set Chat Html called"),
            (this.an = Ut()),
            (this.an = this.an.replace(/{EXTENSION_LOGO}/g, Kt(chrome.runtime.getURL("img/tp_logo.svg")))),
            void 0 === this.Ji)
          )
            throw new Error("Attempt to set chatHtml when _userSettings is undefined.");
          const t = chrome.runtime.getURL("");
          this.an = this.an.replace(/{CHAT_URL}/g, `${g}?t=${Date.now()}&id=${encodeURIComponent(t.substring(0, t.length - 1))}`);
          for (const t of F) {
            const e = new RegExp(`${t}_STATIC`.toUpperCase(), "g"),
              i = new RegExp(`${t}_GIF`.toUpperCase(), "g");
            (this.an = this.an.replace(e, chrome.runtime.getURL(`img/reactions/${t}/${t}_static.svg`))),
              (this.an = this.an.replace(i, chrome.runtime.getURL(`img/reactions/${t}/${t}.gif`)));
          }
          (this.an = this.an.replace(/{USER_NICKNAME}/g, this.Ji.userNickname ? Kt(this.Ji.userNickname) : "Add a nickname")),
            (this.an = this.an.replace(/{USER_ICON}/g, this.$i.getUserIconURL(this.Ji.permId, this.Ji.userIcon))),
            (this.an = this.an.replace(/{LINK_SVG}/g, chrome.runtime.getURL("img/icon_link_active.svg"))),
            (this.an = this.an.replace(/{RESET_SGV}/g, chrome.runtime.getURL("img/reset_chat.svg"))),
            (this.an = this.an.replace(/{EMOJI_PICKER_ICON}/g, chrome.runtime.getURL("img/emoji_picker.svg"))),
            (this.an = this.an.replace(/{REACTION_PICKER_ICON}/g, chrome.runtime.getURL("img/reaction-popup.svg"))),
            (this.an = this.an.replace(/{GIF_PICKER_ICON}/g, chrome.runtime.getURL("img/gif_icon.svg"))),
            (this.an = this.an.replace(/{GIF_BACK_BUTTON}/g, chrome.runtime.getURL("img/icon_chevron.svg"))),
            (this.an = this.an.replace(/{EMOJI_LIB}/g, chrome.runtime.getURL("lib/tp_emoji/picker_bundled.js"))),
            (this.an = this.an.replace(/{EMOJI_FRAME}/g, chrome.runtime.getURL("web/emojiPicker.html"))),
            (this.an = this.an.replace(/{X_CIRCLE}/g, chrome.runtime.getURL("img/x-circle.svg")));
        }
        toggleIconContainer() {
          var t, e, i, n;
          jQuery("#chat-icon-container").data("active")
            ? (jQuery("#chat-icon-container").data("active", !1),
              jQuery("#chat-icon-container").slideUp(),
              jQuery(".chat-settings-container").slideUp(),
              jQuery("#sidebar-tabs-container").slideDown(),
              this.Si ? jQuery("#chat-history-container").slideDown() : jQuery("#chat-friends-frame").slideDown(),
              this.wi && jQuery("#chat-ad-holder").show(),
              jQuery("#chat-input-container").show(),
              jQuery("#reaction-holder").hide(),
              this.hideReactionHolder(),
              jQuery("#teleparty-blog-container").show(),
              jQuery("#presence-indicator").show(),
              jQuery("#chat-header-container").removeClass("chat-header-container-active"))
            : (jQuery("#chat-icon-container").data("active", !0),
              jQuery(".chat-settings-container").show(),
              jQuery("#chat-icon-container").hide(),
              jQuery("#chat-link-container").hide(),
              jQuery("#chat-history-container").hide(),
              jQuery("#sidebar-tabs-container").hide(),
              jQuery("#chat-friends-frame").slideUp(),
              jQuery("#chat-ad-holder").hide(),
              jQuery("#chat-input-container").hide(),
              jQuery("#teleparty-blog-container").hide(),
              jQuery("#presence-indicator").hide(),
              jQuery("#reaction-holder").hide(),
              jQuery("#nickname-edit").attr(
                "placeholder",
                null !== (e = null === (t = this.Ji) || void 0 === t ? void 0 : t.userNickname) && void 0 !== e ? e : ""
              ),
              (jQuery("#nickname-edit")[0].value =
                null !== (n = null === (i = this.Ji) || void 0 === i ? void 0 : i.userNickname) && void 0 !== n ? n : ""));
        }
        togglePartyTab() {
          jQuery("#friends-tab").toggleClass("sidebar-tab-inactive", !0),
            jQuery("#party-tab").toggleClass("sidebar-tab-inactive", !1),
            jQuery("#chat-history-container").show(),
            jQuery("#chat-friends-frame").slideUp(),
            jQuery("#chat-input-container").show(),
            (this.Si = !0);
        }
        toggleFriendsTab() {
          jQuery("#friends-tab").toggleClass("sidebar-tab-inactive", !1),
            jQuery("#party-tab").toggleClass("sidebar-tab-inactive", !0),
            jQuery("#chat-friends-frame").removeClass("hidden"),
            jQuery("#chat-friends-frame").slideDown(),
            jQuery("#chat-history-container").slideUp(),
            jQuery("#chat-input-container").hide(),
            (this.Si = !1);
        }
        toggleLargeUserIconButton() {
          jQuery("#chat-icon-container").data("active") &&
            (jQuery("#chat-icon-container").show(),
            jQuery(".chat-settings-container").hide(),
            jQuery("#chat-header-container").addClass("chat-header-container-active"));
        }
        linkIconListener() {
          navigator.clipboard.writeText(this.getPartyUrl()),
            jQuery("#link-icon .tooltiptext").text("Link copied"),
            setTimeout(() => {
              jQuery("#link-icon .tooltiptext").text("Copy Link");
            }, 1e3);
        }
        resetIconListener() {
          var t;
          if (null === (t = this.qt) || void 0 === t ? void 0 : t.videoId) {
            const t = new CustomEvent("YoutubeVideoMessage", { detail: { type: "jumpToNextEpisode", nextVideoId: this.qt.videoId } });
            window.dispatchEvent(t);
          }
        }
        setPartyUrl(t) {
          this.mi = t;
        }
        setMessageForwarder(t) {
          this.qt = t;
        }
        setSessionId(t) {
          this.Pt = t;
        }
        onWebRTC(t) {
          this.queueMessageForFrame(I.ON_WEB_RTC, t);
        }
        setSocketConnectionId(t) {
          this.queueMessageForFrame(I.SET_CONNECTION_ID, t);
        }
        loadUserList(t) {
          t.forEach((t) => {
            if (void 0 !== t.userSettings && void 0 !== t.permId) {
              const e = t.userSettings,
                i = this.$i.getUserIconURL(t.permId, e.userIcon),
                n = this.$i.getUserNickname(t.permId, e.userNickname);
              t.parsedData = { userIconUrl: i, userNickname: n };
            }
          }),
            (this.Ti = t),
            jQuery("#user-count").text(t.length),
            this.queueMessageForFrame(I.SET_USER_LIST, t);
        }
        setSessionCreated(t) {
          this.rn = t;
        }
        getSessionCreated() {
          return this.rn;
        }
        getSessionId() {
          return this.Pt;
        }
        getPartyUrl() {
          return this.mi;
        }
        userIconSelectorListener(t) {
          const e = jQuery(t.currentTarget).data("icon");
          e &&
            (E("userIconSelector button clicked: " + e),
            this.Ji &&
              (this.Ji.saveUserIcon(e),
              this.queueMessageForFrame(I.UPDATE_SETTINGS, { userSettings: this.Ji.userSettings }),
              this.nn(this.sn(this.Ji.userSettings)))),
            this.toggleIconContainer();
        }
        removeChat() {
          this.clearUnreadCount(), jQuery("#chat-container").remove(), jQuery("#chat-wrapper").remove();
        }
        nn(t, e) {
          b.l(t).then(e);
        }
        cn(t) {
          return new ie(o, s, { reactionType: t });
        }
        Dn(t) {
          return new ne(o, s, { gifObject: t });
        }
        hn(t) {
          return new te(o, s, { body: t });
        }
        dn(t) {
          return new Zt(o, s, { typing: t });
        }
        sn(t) {
          return new ee(o, s, { userSettings: t });
        }
        ln(t) {
          return chrome.runtime.getURL(`img/reactions/${t}/${t}.gif`);
        }
        showReaction(t) {
          if (!this.shouldShowReaction()) return;
          const e = t.reactionType,
            i = this.getReactionContainer();
          if (i) {
            const t = Math.floor(40 * Math.random()) + 40,
              n = i[0].offsetWidth - (this.shouldAddReactionSpace() ? c : 0) - t,
              s = Math.floor(Math.random() * n) + (this.shouldAddReactionSpace() ? c : 0),
              u = this.ln(e),
              o = Math.ceil(3 * Math.random()),
              r = jQuery(`<img class="on-screen-reaction on-screen-reaction-${o}" src='${u}' />`);
            r.css("right", `${s}px`),
              r.css("width", `${t}px`),
              r.css("height", `${t}px`),
              i.append(r),
              setTimeout(() => {
                r.remove();
              }, 5e3);
          }
        }
        onReactionClicked(t) {
          console.log(t), this.nn(this.cn(t));
          const e = new mt(o, s, {
            name: "user_click",
            component: { name: "chat_input_container-reaction_holder-reaction", type: t, origin: "tp" }
          });
          b.l(e);
          const i = new mt(o, s, { eventType: "reaction-" + t, sessionId: this.getSessionId() });
          b.l(i);
        }
        onChatKeyUp(t) {
          t.stopPropagation();
        }
        onChatKeyDown(t) {
          t.stopPropagation(), this.Pi.resetIdleTimer();
        }
        initCustomListeners() {}
        getClientLocale() {
          if ("undefined" != typeof Intl)
            try {
              return Intl.NumberFormat().resolvedOptions().locale;
            } catch (t) {
              console.error("Cannot get locale from Intl"), this.Vt("Cannot get locale from Intl", t);
            }
        }
        clickGif(t) {
          console.log("GIF was clicked");
          let e = t.target.id;
          if (isNaN(e)) (e = "trending" === e ? "" : e), this.fetchGIFs(e), (jQuery("#gif-search")[0].value = e);
          else {
            const t = this._i.find((t) => t.id === e);
            if (!t) return;
            const i = { id: t.id, title: t.title, description: t.content_description, isSticker: !1, media: t.media };
            this.nn(this.Dn(i), () => {
              this.logShare(t.id, jQuery("#gif-search")[0].value);
              const e = {
                  name: "user_click",
                  action: { description: "gif clicked", source: t.media.full.url },
                  component: { name: "chat_input_container-gif_popup-gif", type: "video", origin: "tp" }
                },
                i = new mt(o, s, e);
              b.l(i);
              const n = new mt(o, s, { eventType: "gif-share", sessionId: this.getSessionId() });
              b.l(n);
            }),
              this.toggleGIFs();
          }
        }
        pn(t) {
          const e = document.createElement("video"),
            i = 124 / (t.media.preview.dims[0] / t.media.preview.dims[1]);
          return (
            (e.autoplay = !0),
            (e.loop = !0),
            (e.playsInline = !0),
            e.setAttribute("disablePictureInPicture", ""),
            e.setAttribute("disableRemotePlayback", ""),
            (e.src = t.media.preview.url),
            (e.muted = !0),
            (e.id = t.id),
            (e.height = i),
            (e.className = "gif-img"),
            e
          );
        }
        gn(t) {
          const e = document.createElement("img"),
            i = 124 / (t.media.previewMobile.dims[0] / t.media.previewMobile.dims[1]);
          return (
            e.setAttribute("disablePictureInPicture", ""),
            e.setAttribute("disableRemotePlayback", ""),
            (e.src = t.media.previewMobile.url),
            (e.id = t.id),
            (e.height = i),
            (e.className = "gif-img"),
            e
          );
        }
        loadGIFs(t) {
          jQuery(".gif-placeholder").remove(),
            this._i.push(...t.results),
            (this.yi = t.next),
            t.results.forEach((t) => {
              const e = this.shouldUseVideoGIF() ? this.pn(t) : this.gn(t);
              (jQuery("#gif-results-left")[0].scrollHeight > jQuery("#gif-results-right")[0].scrollHeight
                ? jQuery("#gif-results-right")[0]
                : jQuery("#gif-results-left")[0]
              ).appendChild(e);
            }),
            this.vi < 6 && this.Fn(),
            setTimeout(() => {
              this.Fi = !1;
            }, 100);
        }
        onScrollToBottom(t) {
          return fe(this, void 0, void 0, function* () {
            const e = t.target.scrollHeight - t.target.scrollTop <= t.target.clientHeight + 450;
            if (this.Fi) t.preventDefault();
            else if ("0" !== this.yi && e && this.vi < 6) {
              (this.vi += 1), (this.Fi = !0), t.preventDefault();
              const e = yield fetch(this.fi + `&pos=${this.yi}`),
                i = yield e.json();
              this.loadGIFs(i);
            }
          });
        }
        resetGif() {
          (jQuery("#gif-search")[0].value = ""), jQuery("#gif-input-back").hide(), jQuery("#gif-search").css("width", ""), this.fetchGIFs();
        }
        displayCategories() {
          (jQuery("#gif-search")[0].value = ""),
            jQuery("#category-container").show(),
            jQuery("#gif-results").hide(),
            jQuery("#gif-input-back").hide(),
            jQuery("#gif-search").css("width", "");
        }
        showCategories() {
          (jQuery("#gif-search")[0].value = ""), jQuery("#gif-input-back").hide(), jQuery("#gif-search").css("width", "");
          const t = document.createElement("div");
          ["trending", "dance", "annoyed", "omg", "crazy", "shrug", "smile", "awkward", "ew", "surprised", "why", "ouch "].forEach((e) => {
            const i = document.createElement("div"),
              n = document.createElement("span");
            (n.id = "category-txt"), (n.innerHTML = e), (i.className = "tp-category-div");
            const s = document.createElement("video");
            (s.autoplay = !0),
              (s.src = "https://media.tenor.com/videos/166d7d5a1be3b0755e7f9e29ebefe2c3/mp4"),
              (s.className = "category-img"),
              (s.id = e),
              (s.loop = !0),
              i.appendChild(n),
              i.appendChild(s),
              t.appendChild(i);
          }),
            (jQuery("#category-container")[0].innerHTML = t.innerHTML);
        }
        vn() {
          const t = [],
            e = [];
          for (let i = 0; i < 4; i++) {
            let i = Math.floor(4 * Math.random()) + 1;
            for (; e.includes(i); ) i = Math.floor(4 * Math.random()) + 1;
            e.push(i);
            const n = document.createElement("div");
            (n.className = `gif-placeholder gif-placeholder-${i} gif-img`), t.push(n);
          }
          return t;
        }
        Fn() {
          return fe(this, void 0, void 0, function* () {
            jQuery("#gif-results-left")[0].append(...this.vn()), jQuery("#gif-results-right")[0].append(...this.vn());
          });
        }
        logShare(t, e) {
          return fe(this, void 0, void 0, function* () {
            const i = this.getClientLocale(),
              n = i ? `&locale=${i}` : "",
              s = `&id=${t}`,
              u = e && e.length > 0 ? `q=${e}` : "";
            yield fetch(`${d}/register-share?${u}${n}${s}`);
          });
        }
        fetchGIFs(t) {
          return fe(this, void 0, void 0, function* () {
            const e = yield this.getVideoTitle(),
              i = null == e ? void 0 : e.replace(/[^\w\s]/g, "");
            (this.vi = 1),
              (this.Fi = !0),
              jQuery("#category-container").hide(),
              jQuery("#gif-columns-wrapper").show(),
              (jQuery("#gif-results-left")[0].innerHTML = ""),
              (jQuery("#gif-results-right")[0].innerHTML = ""),
              (this._i = []),
              this.Fn();
            const n = this.getClientLocale(),
              s = n ? `&locale=${n}` : "";
            let u = i ? `search-gifs?q=${i}` : "trending-gifs?";
            (u = t ? `search-gifs?q=${t}` : u), (this.fi = `${d}/${u}${s}`);
            const o = yield fetch(`${d}/${u}${s}`),
              r = yield o.json();
            if (r.results && r.results.length > 0) this.loadGIFs(r);
            else if (!t) {
              const t = yield fetch(`${d}/trending_gifs?${s}`);
              this.fi = `${d}/trending_gifs?${s}`;
              const e = yield t.json();
              this.loadGIFs(e);
            }
          });
        }
        onGifSearch(t) {
          t.stopPropagation();
          const e = t.target.value;
          if ((void 0 !== this.Vi && clearTimeout(this.Vi), !e))
            return jQuery("#gif-input-back").hide(), jQuery("#gif-search").css("width", ""), void this.fetchGIFs();
          jQuery("#gif-input-back").show(),
            jQuery("#gif-search").css("width", "90%"),
            (this.Vi = setTimeout(() => {
              this.fetchGIFs(e);
            }, 500));
        }
        mn(t) {
          return "string" == typeof t && "" !== t.replace(/^\s+|\s+$/g, "");
        }
        onChatKeyPress(t) {
          if ((t.stopPropagation(), "Enter" !== t.key || t.shiftKey))
            void 0 === this.Oi ? this.nn(this.dn(!0)) : clearTimeout(this.Oi),
              (this.Oi = setTimeout(() => {
                (this.Oi = void 0), this.nn(this.dn(!1));
              }, 500));
          else {
            jQuery("#emoji-picker-container").is(":hidden") || this.toggleEmojiClicker();
            const e = jQuery("#chat-input"),
              i = e[0].textContent;
            if (i && this.mn(i)) {
              void 0 !== this.Oi && (clearTimeout(this.Oi), (this.Oi = void 0), this.nn(this.dn(!1))),
                e.prop("contenteditable", !1),
                this.nn(this.hn(i.substring(0, 1500)), () => {
                  (e[0].textContent = ""), e.prop("contenteditable", !0), this.focusChat(), this.onInputChange();
                });
              const t = {
                  name: "chat_send",
                  action: { description: "message was sent" },
                  message: {
                    id: (function () {
                      try {
                        return he();
                      } catch (t) {
                        return "";
                      }
                    })(),
                    text: i.trim()
                  }
                },
                n = new mt(o, s, t);
              b.l(n);
            } else t.stopImmediatePropagation(), t.preventDefault(), (e[0].textContent = ""), this.onInputChange();
          }
        }
        onInputChange() {
          const t = jQuery("#chat-input");
          if (t.length > 0) {
            const e = t[0].textContent;
            e && this.shouldShowIncreasedSize(e) ? t.addClass("tp-emoji-large") : t.removeClass("tp-emoji-large");
          }
          jQuery("#emoji-picker-container").css("bottom").length > 0 &&
            (jQuery("#emoji-picker-container").is(":hidden") || this.showEmojiPicker());
        }
        shouldShowIncreasedSize(t) {
          const e = t.replace(w, "").replace(/[\uFE0F]/g, ""),
            i = ((t || "").match(w) || []).length;
          return 0 === e.length && i <= 3 && i > 0;
        }
        saveChangesListener() {
          var t;
          const e = jQuery("#nickname-edit")
            .val()
            .slice(0, 25)
            .replace(/^\s+|\s+$/g, "");
          E("saveChanges button clicked: " + e),
            e !== (null === (t = this.Ji) || void 0 === t ? void 0 : t.userNickname) &&
              this.Ji &&
              (this.Ji.saveUserNickname(e),
              this.queueMessageForFrame(I.UPDATE_SETTINGS, { userSettings: this.Ji.userSettings }),
              this.nn(this.sn(this.Ji.userSettings)),
              jQuery("#nickname-edit").attr("placeholder", e),
              jQuery("#nickname-edit").text(e)),
            this.toggleIconContainer();
        }
        cancelNicknameListener() {
          this.toggleIconContainer();
        }
        get inSession() {
          return this.Mi;
        }
        addIconSelector() {
          Object.keys(zt).forEach((t) => {
            if (Jt[t]()) {
              const e = zt[t],
                i = jQuery('\n                <ul id="icon-holder"></ul>\n            ');
              for (const n of e) this.yn(`${t}/${n}`, i, n);
              const n = jQuery(
                `\n                <div class="icon-holder-wrap">\n                  <p class="extension-txt-indicator" data-tp-id="chat_container-new_icon_selection-category_name>${t}</p>\n                </div>\n            `
              );
              i.appendTo(n), n.appendTo(jQuery("#icon-holder-template"));
            }
          }, this);
        }
        inputHeightCheck() {
          const t = jQuery("#chat-input").text(),
            e = ((t || "").match(w) || []).length,
            i = t.replace(w, "");
          e <= 3 || i
            ? jQuery(".inTextEmoji").css("font-size", "24px")
            : e > 0
            ? jQuery(".inTextEmoji").css("font-size", "20px")
            : jQuery(".inTextEmoji").css("font-size", "18px");
        }
        yn(t, e, i) {
          jQuery(
            `\n            <a class="image-button">\n                <img class="img-class" src='${chrome.runtime.getURL(
              "img/icons/" + t
            )}' data-tp-id="chat_container-new_icon_selection-${i}">\n            </a>\n        `
          )
            .appendTo(e)
            .data("icon", t);
        }
      } {
        constructor(t) {
          super(),
            (this.de = new n("ext:ContentScripts:Hulu:HuluChatApi")),
            (this.shouldShowReaction = () => !this.Ct.currentlyWatchingAds),
            (this.shouldUseVideoGIF = () => !0),
            (this.qi = () => {
              this.an &&
                jQuery("#web-player-app").prepend(
                  (function (t, e = "") {
                    return `\n\n      <style tpInjected>\n    \n\n      .with-chat {\n        left: 0px !important;\n        width: calc(100% - 340px) !important;\n      }\n\n      .tp-video {\n        transition: width 250ms linear 0.2s;\n      }\n\n      ${e}\n      \n    </style>\n\n    <link tpInjected rel="stylesheet" href="${chrome.runtime.getURL(
                      "css/chat.css"
                    )}">\n    <link rel="stylesheet" href="${chrome.runtime.getURL("css/alert.css")}">\n\n    ${t}\n  `;
                  })(this.an, this.customCss)
                );
            }),
            (this.getVideoTitle = () =>
              Ce(this, void 0, void 0, function* () {
                return document.querySelector(".PlayerMetadata__title").innerText;
              })),
            (this.Cn = () =>
              Ce(this, void 0, void 0, function* () {
                null != document.fullscreenElement || document.webkitIsFullScreen
                  ? this.onFullScreenChatVisible()
                  : this.onExitFullScreen();
              })),
            (this.onVideoChange = () => {
              this.de.debug({ methodName: "onVideoChange", message: "On video change called." }),
                this.getChatVisible() &&
                  !this.isPartyWindowsActive() &&
                  (this.de.debug({ methodName: "onVideoChange", message: "visible." }), this.Cn());
            }),
            (this.shouldAddReactionSpace = () => null != document.fullscreenElement || document.webkitIsFullScreen),
            (this.getChatVisible = () => jQuery("#dash-player-container").hasClass(K)),
            (this.removeChat = () => {
              super.removeChat(), jQuery("#dash-player-container").removeClass(K);
            }),
            (this.onFullScreenChatVisible = () => {
              this.de.debug({ methodName: "onFullScreenVisible", message: "Called" }),
                jQuery(".ViewModeControlBar").addClass("huluFullScreenControls"),
                jQuery(".ControlsContainer__panel").addClass(K),
                jQuery(".ContentPlayer").addClass(K),
                jQuery("#dash-player-container").addClass(J);
              window.innerWidth, window.innerWidth;
              const t = document.querySelector("#content-video-player");
              (null == t ? void 0 : t.classList.contains("ContentPlayer__item--stretched")) &&
                (console.log("video is stretched"),
                this.shouldChatBeVisible() ? void 0 === t.wn && (t.wn = t.style.transform) : t.wn && (t.style.transform = t.wn));
            }),
            (this.onExitFullScreen = () => {
              this.de.debug({ methodName: "onExitFullScreen", message: "exit" }),
                jQuery(".ViewModeControlBar").removeClass("huluFullScreenControls"),
                jQuery(".ControlsContainer__panel").removeClass(K),
                jQuery(".ContentPlayer").removeClass(K),
                jQuery("#dash-player-container").removeClass(J);
              const t = document.querySelector("#content-video-player");
              (null == t ? void 0 : t.classList.contains("ContentPlayer__item--stretched")) &&
                (void 0 !== t.wn || console.log("No transform"));
            }),
            (this.onWrapperMouseDown = (t) => {
              (this.En = t.pageX), (this._n = t.pageY);
            }),
            (this.onWrapperMouseClick = (t) => {
              (t.pageX - this.En) * (t.pageX - this.En) + (t.pageY - this._n) * (t.pageY - this._n) < 5 &&
                jQuery("#chat-input").trigger("focus"),
                t.stopPropagation();
            }),
            (this.En = 0),
            (this._n = 0),
            (this.customCss =
              "\n            .fix-ad-width {\n            min-width: fit-content;\n            }\n            \n            .AdUnitView__adBar__timer {\n            min-width: fit-content;\n            }\n            \n            .huluFullScreenControls {\n            right: calc(340px + 38px) !important;\n            }\n\n            .with-chat-fs .ContentPlayer {\n                left: 0px !important;\n                width: calc(100% - 340px) !important;\n            }\n        "),
            (this.Ct = t);
        }
        getReactionContainer() {
          return jQuery("#web-player-app");
        }
        setChatVisible(t, e = !0) {
          const i = Object.create(null, { setChatVisible: { get: () => super.setChatVisible } });
          return Ce(this, void 0, void 0, function* () {
            try {
              yield i.setChatVisible.call(this, t, e);
            } catch (t) {
              return;
            }
            t
              ? (jQuery("#dash-player-container").addClass(K),
                jQuery("#chat-wrapper").show(),
                document.hasFocus() || this.clearUnreadCount())
              : (jQuery("#chat-wrapper").hide(),
                jQuery("#dash-player-container").removeClass(K),
                jQuery("#dash-player-container").removeClass(J)),
              (document.fullscreenElement || document.webkitIsFullScreen) &&
                (jQuery("#dash-player-container").addClass(J), t ? this.onFullScreenChatVisible() : this.onExitFullScreen());
          });
        }
      }
      var Ee = i(4296),
        _e = i.n(Ee);
      class be extends j {
        constructor(t, e, i) {
          super(t, e, i), (this.type = i);
        }
      }
      class je extends be {
        constructor(t, e, i) {
          super(t, e, a.CREATE_SESSION), (this.data = i);
        }
      }
      class Be {
        constructor(t, e, i, n, s, u = []) {
          (this.requiredPermissions = t),
            (this.serverName = i),
            (this.name = n),
            (this.contentScripts = e),
            (this.syncFromEnd = s),
            (this.browseScripts = u);
        }
        urlWithSessionId(t) {
          return `${p}/join/${t}`;
        }
      }
      const Ae = new (class extends Be {
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes(".netflix.") && t.pathname.includes("/watch");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".netflix.");
        }
        getVideoId(t) {
          const e = t.pathname.match(/^.*\/([0-9]+)\??.*/);
          return e && e.length > 0 ? e[1] : void 0;
        }
        getFullscreenScript() {
          return '\n            (function() {\n                var sizingWrapper = document.getElementsByClassName("sizing-wrapper")[0];\n                    if (sizingWrapper) {\n                        sizingWrapper.requestFullscreen = function() {}\n                        document.getElementsByClassName(\'button-nfplayerFullscreen\')[0].onclick = function() {\n                            var fullScreenWrapper = document.getElementsByClassName("nf-kb-nav-wrapper")[0];\n                            fullScreenWrapper.webkitRequestFullScreen(fullScreenWrapper.ALLOW_KEYBOARD_INPUT);\n                        }\n                    }\n            })();\n        ';
        }
      })([], ["content_scripts/netflix/netflix_content_bundled.js"], "netflix", ct.NETFLIX, !1);
      Object.freeze(Ae);
      const ke = Ae;
      const Qe = new (class extends Be {
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes(".hulu.") && t.pathname.includes("/watch");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".hulu.");
        }
        getVideoId(t) {
          const e = t.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
          return e && e.length > 0 ? e[1] : void 0;
        }
      })([], ["content_scripts/hulu/hulu_content_bundled.js"], "hulu", ct.HULU, !1);
      Object.freeze(Qe);
      const Ie = Qe;
      const xe = new (class extends Be {
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes(".disneyplus.") && t.pathname.includes("/video");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".disneyplus.") && !t.hostname.includes("apps.disneyplus.");
        }
        getVideoId(t) {
          const e = t.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
          return e && e.length > 0 ? e[1] : void 0;
        }
      })([], ["content_scripts/disney/disney_content_bundled.js"], "disney", ct.DISNEY_PLUS, !1, [
        "browse_scripts/disney/disney_browse_bundled.js"
      ]);
      Object.freeze(xe);
      const Se = xe;
      const Te = new (class extends Be {
        isValidUrl(t) {
          return (function (t) {
            return (t.hostname.includes(".hbomax.") && "other" !== Dt(t.pathname)) || t.pathname.includes("urn:hbo:page");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".hbomax.");
        }
        getVideoId(t) {
          const e = "urn:hbo:" + Dt(t.pathname) + ":",
            i = t.pathname.split(e);
          let n = null != i && i.length > 1 && null != i[1] ? i[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : null;
          const s = null != n && 0 !== n.length ? i[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : void 0;
          let u = s && s.length > 0 ? s[1] : void 0;
          return u || ((n = t.pathname.match(/(page:)([a-zA-Z\-_0-9]+)\??.*/)), (u = null != n && 3 == n.length ? n[2] : void 0)), u;
        }
        getVideoType(t) {
          return Dt(t.pathname);
        }
      })([], ["content_scripts/hbo_max/hbo_max_content_bundled.js"], "hbomax", ct.HBO_MAX, !1);
      Object.freeze(Te);
      const Me = Te;
      const Pe = new (class extends Be {
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes(".amazon.") || t.hostname.includes(".primevideo.");
          })(t);
        }
        isBrowsing(t) {
          return !1;
        }
        getVideoId(t) {
          const e = t.pathname.split("ref")[0].match(/^.*\/([a-z\-0-9.A-Z]+)(\?|\/ref)?.*/);
          return null != e && e.length > 0 ? e[1] : void 0;
        }
      })([], ["content_scripts/amazon/amazon_content_bundled.js"], "amazon", ct.AMAZON, !1);
      Object.freeze(Pe);
      const Ne = Pe;
      const $e = new (class extends Be {
        isBrowsing(t) {
          return t.hostname.includes(".crunchyroll.");
        }
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes(".crunchyroll.");
          })(t);
        }
        getVideoId(t) {
          const e = t.pathname.match(/watch\/(.*)\//);
          return e && e.length > 0 ? e[1] : void 0;
        }
      })([], ["content_scripts/crunchyroll/crunchyroll_content_bundled.js"], "crunchyroll", ct.CRUNCHYROLL, !1);
      Object.freeze($e);
      const Oe = $e;
      const Ve = new (class extends Be {
        isBrowsing(t) {
          return !(t.href.includes(".hotstar.") || t.href.includes("apps.disneyplus.") || !t.href.includes("watch?"));
        }
        isValidUrl(t) {
          return (function (t) {
            return !(t.hostname.includes("tv.youtube.com") && !t.pathname.includes("/watch")) && t.hostname.includes(".youtube.");
          })(t);
        }
        getVideoId(t) {
          if (t.href.includes("/watch") || t.href.includes("/shorts/")) {
            const e = /(youtu.*be.*)\/(watch\?v=|embed\/|v|shorts|)(.*?((?=[&#?])|$))/gm.exec(t.href);
            return null != e && e.length > 3 && e[3] ? e[3] : void 0;
          }
          return "browsing";
        }
      })([], ["content_scripts/youtube/youtube_content_bundled.js"], "youtube", ct.YOUTUBE, !1);
      Object.freeze(Ve);
      const Le = Ve;
      const Re = new (class extends Be {
        isBrowsing(t) {
          return t.hostname.includes(".espn.");
        }
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes(".espn.") && t.pathname.includes("/player");
          })(t);
        }
        getVideoId(t) {
          const e = t.pathname;
          return e.substring(e.lastIndexOf("/") + 1);
        }
      })([], ["content_scripts/espn/espn_content_bundled.js"], "espn", ct.ESPN, !1);
      Object.freeze(Re);
      const Ue = Re;
      const Ge = new (class extends Be {
        isBrowsing(t) {
          return t.hostname.includes(".paramountplus.");
        }
        isValidUrl(t) {
          return (function (t) {
            return (
              t.hostname.includes(".paramountplus.") &&
              (t.pathname.includes("/video") || t.pathname.includes("/stream") || t.pathname.includes("/movie"))
            );
          })(t);
        }
        getVideoId(t) {
          var e;
          const i = null !== (e = t.pathname.match(/video\/([^/]+)/)) && void 0 !== e ? e : t.pathname.match(/stream\/([^/]+)/);
          return i && i.length > 1 ? i[1] : void 0;
        }
      })([], ["content_scripts/paramount/paramount_content_bundled.js"], "paramount", ct.PARAMOUNT, !1);
      Object.freeze(Ge);
      const He = Ge;
      const We = new (class extends Be {
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes(".hotstar.") && t.pathname.includes("/watch");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".hotstar.");
        }
        getVideoId(t) {
          const e = t.pathname.split("/");
          return e && e.length > 1 ? e[e.length - 2] : void 0;
        }
      })([], ["content_scripts/hotstar/hotstar_content_bundled.js"], "hotstar", ct.HOTSTAR, !1);
      Object.freeze(We);
      const ze = We;
      const Ke = new (class extends Be {
        isBrowsing(t) {
          return t.hostname.includes(".peacocktv.");
        }
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes(".peacocktv.") && t.pathname.includes("/watch") && t.pathname.includes("/playback");
          })(t);
        }
        getVideoId(t) {
          const e = t.pathname.match(/([^/?]+\/[^/?]+)(?=\?|$)/);
          return e && e.length > 0 ? e[1] : void 0;
        }
      })([], ["content_scripts/peacock/peacock_content_bundled.js"], "peacock", ct.PEACOCK, !1);
      Object.freeze(Ke);
      const Je = Ke;
      const Ye = new (class extends Be {
        isBrowsing(t) {
          return t.hostname.includes(".funimation.");
        }
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes(".funimation.") && t.pathname.includes("/v/");
          })(t);
        }
        getVideoId(t) {
          return t.pathname.split("/v/")[1];
        }
      })([], ["content_scripts/funimation/funimation_content_bundled.js"], "funimation", ct.FUNIMATION, !1);
      Object.freeze(Ye);
      const qe = Ye;
      const Xe = new (class extends Be {
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes(".max.") && t.pathname.includes("video/watch");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes("play.max.");
        }
        getVideoId(t) {
          var e;
          const i = null === (e = t.pathname) || void 0 === e ? void 0 : e.match(/(watch\/)([a-zA-Z\-_0-9]+)\??/);
          return i ? i[2] : void 0;
        }
      })([], ["content_scripts/max/max_content_bundled.js"], "max", ct.MAX, !1);
      Object.freeze(Xe);
      const Ze = Xe;
      const ti = new (class extends Be {
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes(".starplus.") && t.pathname.includes("/video");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".starplus.");
        }
        getVideoId(t) {
          const e = t.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
          return e && e.length > 0 ? e[1] : void 0;
        }
      })([], ["content_scripts/starplus/starplus_content_bundled.js"], "starplus", ct.STAR_PLUS, !1);
      Object.freeze(ti);
      const ei = ti;
      const ii = new (class extends Be {
        isBrowsing(t) {
          return (
            t.href.includes("/details") ||
            t.href.includes("/search") ||
            (t.href.includes("live-tv") && ("" == t.href.split("live-tv")[1] || "/" == t.href.split("live-tv")[1])) ||
            (t.href.includes("on-demand") && ("" == t.href.split("on-demand")[1] || "/" == t.href.split("on-demand")[1]))
          );
        }
        isValidUrl(t) {
          return (function (t) {
            return (
              console.log("Checking if PlutoTV Party"),
              t.hostname.includes("pluto.tv") && !t.pathname.includes("/details") && !t.pathname.includes("/search")
            );
          })(t);
        }
        getVideoId(t) {
          return t.href.split("pluto.tv/").pop();
        }
      })([], ["content_scripts/plutotv/plutotv_content_bundled.js"], "plutotv", ct.PLUTO_TV, !1);
      Object.freeze(ii);
      const ni = ii;
      const si = new (class extends Be {
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes("tv.apple.com");
          })(t);
        }
        isBrowsing(t) {
          return !1;
        }
        getVideoId(t) {
          return t.toString().split("https://tv.apple.com/")[1];
        }
      })([], ["content_scripts/appletv/appletv_content_bundled.js"], "appletv", ct.APPLE_TV, !1);
      Object.freeze(si);
      const ui = si;
      const oi = new (class extends Be {
        isValidUrl(t) {
          return (function (t) {
            const e = t.hostname.includes(".jiocinema."),
              i = t.pathname.includes("/watch") && t.pathname.includes("/movies/"),
              n = t.pathname.includes("/sports/"),
              s = t.pathname.includes("/tv-shows/"),
              u = t.pathname.includes("/news/");
            return e && (i || n || s || u);
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".jiocinema.");
        }
        getVideoId(t) {
          return t.pathname.substring(1);
        }
      })([], ["content_scripts/jio_cinema/jio_cinema_content_bundled.js"], "jiocinema", ct.JIO_CINEMA, !1);
      Object.freeze(oi);
      const ri = oi;
      const ai = new (class extends Be {
        isBrowsing(t) {
          return t.hostname.includes("tubitv.com");
        }
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes("tubitv.com") && ["tv-shows", "live", "movies"].some((e) => t.pathname.includes(e));
          })(t);
        }
        getVideoId(t) {
          return t.pathname;
        }
      })([], ["content_scripts/tubitv/tubitv_content_bundled.js"], "tubitv", ct.TUBI_TV, !1);
      Object.freeze(ai);
      const ci = ai;
      const Di = new (class extends Be {
        isValidUrl(t) {
          return (function (t) {
            const e = t.hostname.includes(".crave."),
              i = 5 === t.pathname.split("/").length;
            return e && i;
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".crave.");
        }
        getVideoId(t) {
          return t.pathname.substring(1);
        }
      })([], ["content_scripts/crave/crave_content_bundled.js"], "crave", ct.CRAVE, !1);
      Object.freeze(Di);
      const hi = Di;
      const di = new (class extends Be {
        isValidUrl(t) {
          return (function (t) {
            const e = t.hostname.includes("mubi."),
              i = t.pathname.includes("player");
            return e && i;
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes("mubi.");
        }
        getVideoId(t) {
          return t.pathname.substring(1);
        }
      })([], ["content_scripts/mubi/mubi_content_bundled.js"], "mubi", ct.MUBI, !1);
      Object.freeze(di);
      const li = di;
      const pi = new (class extends Be {
        isValidUrl(t) {
          return (function (t) {
            const e = t.hostname.includes("play.stan.com.au"),
              i = t.pathname.split("/");
            return e && 4 === i.length && "play" === i[3];
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".stan.com.au");
        }
        getVideoId(t) {
          return t.pathname.split("/")[2];
        }
      })([], ["content_scripts/stan/stan_content_bundled.js"], "stan", ct.STAN, !1);
      Object.freeze(pi);
      const gi = pi;
      const Fi = new (class extends Be {
        isValidUrl(t) {
          return (function (t) {
            const e = t.hostname.includes("watch.sling.com"),
              i = t.pathname.split("/");
            return e && i.length > 0 && "watch" === i[i.length - 1];
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".sling.com");
        }
        getVideoId(t) {
          const e = t.pathname.split("/");
          if (e.length > 3) return e[3];
        }
      })([], ["content_scripts/sling/sling_content_bundled.js"], "slingtv", ct.SLING, !1);
      Object.freeze(Fi);
      const vi = Fi;
      const mi = new (class extends Be {
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes("apps.disneyplus.") && t.pathname.includes("/watch");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes("apps.disneyplus.");
        }
        getVideoId(t) {
          const e = t.pathname.split("/");
          return e && e.length > 1 ? e[e.length - 2] : void 0;
        }
      })([], ["content_scripts/disneymena/disneymena_content_bundled.js"], "disneymena", ct.DISNEY_PLUS_MENA, !1);
      Object.freeze(mi);
      const yi = mi;
      class fi {
        constructor(t, e) {
          (this.isBrowsing = !1), (this.needsCSPBlock = !1), (this.id = e), this.videoId, (this.url = t);
          const i = [ui],
            n = [ke, Ie, Se, Me, Ne, Le, Oe, Ue, He, ze, Je, ei, Ze, qe, ui, ni, ri, ci, li, gi, hi, vi, yi];
          for (const e of n) {
            if (e.isValidUrl(this.url)) {
              (this.streamingService = e),
                (this.serviceName = e.name),
                (this.videoId = e.getVideoId(t)),
                i.includes(e) && (this.needsCSPBlock = !0);
              break;
            }
            if (e.isBrowsing(this.url)) {
              (this.isBrowsing = !0), (this.streamingService = e), (this.serviceName = e.name), i.includes(e) && (this.needsCSPBlock = !0);
              break;
            }
          }
        }
        urlWithSessionId(t) {
          return this.streamingService ? this.streamingService.urlWithSessionId(t) : void 0;
        }
      }
      class Ci extends be {
        constructor(t, e, i) {
          super(t, e, a.RE_INJECT), (this.data = i);
        }
      }
      var wi = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var e;
            t.done
              ? s(t.value)
              : ((e = t.value),
                e instanceof i
                  ? e
                  : new i(function (t) {
                      t(e);
                    })).then(o, r);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
      var Ei = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var e;
            t.done
              ? s(t.value)
              : ((e = t.value),
                e instanceof i
                  ? e
                  : new i(function (t) {
                      t(e);
                    })).then(o, r);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
      class _i extends class {
        constructor(t) {
          var e, i, n;
          (this.bn = !1),
            (this.jn = !1),
            (this.Bn = !1),
            (this.An = 0),
            (this.kn = !1),
            (this.Qn = !1),
            (this.In = !1),
            (this.checkShowMenu = () => {
              this.shouldMenuBeVisible() ? this.xn() : this.Sn();
            }),
            console.log("Teleparty Browse Loaded " + (null === (e = window.teleparty) || void 0 === e ? void 0 : e.tabId)),
            (this.Tn = new fi(
              new URL(window.location.href),
              null !== (n = null === (i = window.teleparty) || void 0 === i ? void 0 : i.tabId) && void 0 !== n ? n : 0
            )),
            (this.Mn = t),
            this.Mn.setPageControls(this);
        }
        setChatApi(t) {
          (this.Mn = t), this.Mn.setPageControls(this);
        }
        Pn() {
          jQuery("#tp-control-lock-button .tooltiptext").text(this.Bn ? "Only I have control" : "Everyone has control"),
            this.Bn
              ? (jQuery("#tp-unlocked-image").addClass("hidden"), jQuery("#tp-locked-image").removeClass("hidden"))
              : (jQuery("#tp-unlocked-image").removeClass("hidden"), jQuery("#tp-locked-image").addClass("hidden"));
        }
        Nn() {
          this.jn || ((this.Bn = !this.Bn), this.Pn());
        }
        setResetChatButton() {
          this.Mn.getChatWindowVisible()
            ? (jQuery("#tp-chat-button .tooltiptext").text("Reset View"),
              this.Mn.shouldReturnToVideo && jQuery("#tp-chat-button .tooltiptext").text("Return to Video"),
              jQuery("#tp-chat-reset").removeClass("hidden"),
              jQuery("#tp-chat-gray").addClass("hidden"),
              jQuery("#tp-chat-button .tp-hover-image").addClass("hidden"),
              jQuery("#tp-chat-hidden").addClass("hidden"))
            : (jQuery("#tp-chat-button .tooltiptext").text("Open Chat"),
              jQuery("#tp-chat-reset").addClass("hidden"),
              jQuery("#tp-chat-gray").removeClass("hidden"),
              jQuery("#tp-chat-button .tp-hover-image").removeClass("hidden"),
              jQuery("#tp-chat-hidden").removeClass("hidden"));
        }
        $n() {
          jQuery("#tp-chat-hidden").addClass("hidden"),
            this.Mn.isPartyWindowsActive()
              ? (this.setResetChatButton(), jQuery("#tp-message-indicator").removeClass("hidden"))
              : (jQuery("#tp-message-indicator").removeClass("hidden"),
                jQuery("#tp-chat-button .tooltiptext").text(`${this.An} unread ${1 == this.An ? "message" : "messages"}`),
                jQuery("#tp-chat-gray").removeClass("hidden"),
                jQuery("#tp-chat-reset").addClass("hidden"),
                jQuery("#tp-chat-button .tp-hover-image").removeClass("hidden"));
        }
        hideMessageIndicator() {
          jQuery("#tp-message-indicator").addClass("hidden"),
            this.Mn.isPartyWindowsActive()
              ? this.setResetChatButton()
              : (jQuery("#tp-chat-button .tp-hover-image").removeClass("hidden"),
                jQuery("#tp-chat-button .tooltiptext").text("Show chat"),
                jQuery("#tp-chat-gray").addClass("hidden"),
                jQuery("#tp-chat-hidden").removeClass("hidden"),
                jQuery("#tp-chat-reset").addClass("hidden"));
        }
        onChatMessage() {
          this.Mn.shouldChatBeVisible() ||
            this.Mn.isPartyWindowsActive() ||
            (this.An++,
            this.$n(),
            (this.kn = !0),
            this.xn(),
            ht(1e3)().then(() => {
              this.kn = !1;
            }));
        }
        teardown() {
          this.On(), this.Sn(), this.Vn && clearInterval(this.Vn);
        }
        Ln() {
          var t;
          return wi(this, void 0, void 0, function* () {
            if (this.jn || this.Mn.inSession) return;
            if ((this.Rn(), (this.jn = !0), !(null === (t = window.teleparty) || void 0 === t ? void 0 : t.contentScriptInjected))) {
              console.log("Re injecting");
              const t = new Ci(r, s, { extensionTabData: this.Tn });
              try {
                yield b.l(t);
              } catch (t) {
                return console.log(t), this.Un(), this.Vt(t), this.Gn(jt), void (this.jn = !1);
              }
            }
            console.log("Sending create");
            const e = this.Hn();
            try {
              const t = yield b.l(e);
              t.error ? (this.Gn(t.error.message), this.Vt(t.error.message)) : ((this.jn = !1), this.Wn(), this.enablePartyIcons());
            } catch (t) {
              console.log(t), this.Gn(jt), this.Vt(t);
            }
            this.Un(), (this.jn = !1);
          });
        }
        enablePartyIcons() {
          this.hideError(),
            jQuery("#tp-party-active").removeClass("hidden"),
            jQuery("#tp-party-inactive").addClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").addClass("hidden"),
            jQuery("#tp-icon-container").attr("style", "cursor: auto");
        }
        On() {
          jQuery("#tp-party-active").addClass("hidden"),
            jQuery("#tp-party-inactive").removeClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").html("Open Teleparty"),
            jQuery("#tp-icon-container").removeClass("play-chat-active"),
            jQuery("#play-chat-icon").addClass("hidden"),
            jQuery("#tp-icon-white").removeClass("hidden");
        }
        Vt(t) {
          const e = new mt(u, s, { name: "error", action: { description: "an error has occured", reason: t } });
          b.l(e);
        }
        Gn(t) {
          jQuery("#tp-controls-error-text").text(t),
            jQuery("#tp-error-box").removeClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").addClass("hidden");
        }
        hideError() {
          jQuery("#tp-error-box").addClass("hidden");
        }
        zn(t) {
          return t
            .replace(/{EXTENSION_LOGO_WHITE}/g, Kt(chrome.runtime.getURL("img/icon_white.svg")))
            .replace(/{EXTENSION_LOGO_GRADIENT}/g, Kt(chrome.runtime.getURL("img/icon_gradient.svg")))
            .replace(/{PLAY_IMAGE}/g, Kt(chrome.runtime.getURL("img/play.svg")))
            .replace(/{UNLOCKED_IMAGE}/g, Kt(chrome.runtime.getURL("img/icon_remote_inactive.svg")))
            .replace(/{LOCKED_IMAGE}/g, Kt(chrome.runtime.getURL("img/icon_remote_active.svg")))
            .replace(/{ARROW_RIGHT}/g, Kt(chrome.runtime.getURL("img/arrow-right.svg")))
            .replace(/{LINK_IMAGE}/g, Kt(chrome.runtime.getURL("img/icon_link_active.svg")))
            .replace(/{LINK_ACTIVE_IMAGE}/g, Kt(chrome.runtime.getURL("img/icon_link_active.svg")))
            .replace(/{CHAT_HIDDEN_IMAGE}/g, Kt(chrome.runtime.getURL("img/icon_chat_inactive.svg")))
            .replace(/{CHAT_GRAY_IMAGE}/g, Kt(chrome.runtime.getURL("img/icon_chatgray_active.svg")))
            .replace(/{CHAT_ACTIVE_IMAGE}/g, Kt(chrome.runtime.getURL("img/icon_chat_active.svg")))
            .replace(/{DISCONNECT_IMAGE}/g, Kt(chrome.runtime.getURL("img/icon_logout_active.svg")))
            .replace(/{RESET_CHAT_IMAGE}/g, Kt(chrome.runtime.getURL("img/reset_chat.svg")));
        }
        Sn() {
          this.kn || (this.hideError(), jQuery("#tpIconContainer").addClass("hidden"));
        }
        xn() {
          return wi(this, void 0, void 0, function* () {
            if (!this.Qn && (this.In || this.Mn.inSession)) {
              this.Qn = !0;
              try {
                yield this.addTpIcon(),
                  this.Mn.inSession ? this.enablePartyIcons() : this.On(),
                  jQuery("#tpIconContainer").removeClass("hidden"),
                  this.setChatButtons();
              } finally {
                this.Qn = !1;
              }
            }
          });
        }
        startEventListener() {
          this.Vn = setInterval(this.checkShowMenu, 200);
        }
        stopEventListener() {
          this.Vn && clearInterval(this.Vn);
        }
        Kn() {
          return "100px";
        }
        addTpIcon() {
          return wi(this, void 0, void 0, function* () {
            if ((this.In || this.Mn.inSession) && 0 === jQuery("#tpIconContainer").length) {
              const t = this.zn(_e()),
                e = yield this.getControlsRoot();
              e.length > 0 &&
                (e.append(
                  (function (t, e = "") {
                    return `\n    <link rel="stylesheet" href="${chrome.runtime.getURL(
                      "css/overlay.css"
                    )}">\n    <style>\n      ${e}\n    </style>\n    ${t}\n  `;
                  })(t)
                ),
                this.Jn());
            }
          });
        }
        Jn() {
          jQuery("#tp-control-lock-button").click(this.Nn.bind(this)),
            jQuery("#tp-buttons-container").attr("style", `top:${this.Kn()}`),
            jQuery("#tp-chat-close-button").attr("style", `top:${this.Kn()}`),
            jQuery("#tp-error-box").attr("style", `top:${this.Kn()}`),
            jQuery("#tp-link-button").click(this.Yn.bind(this)),
            jQuery("#tp-chat-button").on("click", (t) => (this.qn(), t.stopImmediatePropagation(), t.stopPropagation(), !1)),
            jQuery("#tp-disconnect-button").on("click", () => {
              this.Xn();
            });
        }
        Xn() {
          const t = new st(r, s, $t);
          b.l(t), this.Sn();
        }
        Yn() {
          this.Mn.linkIconListener(),
            jQuery("#tp-link-button .tooltiptext").text("Link copied"),
            setTimeout(() => {
              jQuery("#tp-link-button .tooltiptext").text("Copy join link");
            }, 1e3);
        }
        qn() {
          return wi(this, void 0, void 0, function* () {
            (this.An = 0),
              this.hideMessageIndicator(),
              this.Mn.isPartyWindowsActive()
                ? this.Mn.resetChatWindow(!0)
                : (this.Mn.shouldChatBeVisible(), yield this.Mn.setChatVisible(!this.Mn.shouldChatBeVisible()), this.setChatButtons());
          });
        }
        onInitChat() {
          this.bn && this.xn();
        }
        setChatButtons() {
          this.Mn.inSession && this.Mn.getChatVisible() ? this.Wn() : this.Zn(),
            this.Mn.isPartyWindowsActive() ? this.setResetChatButton() : this.hideMessageIndicator();
        }
        Wn() {
          return wi(this, void 0, void 0, function* () {
            this.Mn.inSession &&
              this.Mn.shouldChatBeVisible() &&
              (jQuery("#tp-chat-close-button").removeClass("hidden"), jQuery("#tp-buttons-container").addClass("hidden"));
          });
        }
        Zn() {
          jQuery("#tp-chat-close-button").addClass("hidden"), jQuery("#tp-buttons-container").removeClass("hidden");
        }
        Hn() {
          return new je(r, s, this.ts());
        }
        ts() {
          return { createSettings: { controlLock: this.Bn }, streamingService: this.Tn.streamingService, tabId: this.Tn.id, source: "pc" };
        }
        Rn() {
          jQuery("#tp-icon-container .tooltiptext").html(
            'Loading <span class="ellipsis-anim"><span>.</span><span>.</span><span>.</span></span>'
          );
        }
        Un() {
          jQuery("#tp-icon-container .tooltiptext").html("Start a party");
        }
      } {
        constructor() {
          super(...arguments),
            (this.getControlsRoot = () =>
              Ei(this, void 0, void 0, function* () {
                return jQuery("#web-player-app");
              }));
        }
        shouldMenuBeVisible() {
          const t = jQuery(".ViewModeControlBar").parent();
          return t.length > 0 && t.is(":visible") && "0" != t[0].style.opacity;
        }
      }
      var bi,
        ji = function (t, e, i, n) {
          return new (i || (i = Promise))(function (s, u) {
            function o(t) {
              try {
                a(n.next(t));
              } catch (t) {
                u(t);
              }
            }
            function r(t) {
              try {
                a(n.throw(t));
              } catch (t) {
                u(t);
              }
            }
            function a(t) {
              var e;
              t.done
                ? s(t.value)
                : ((e = t.value),
                  e instanceof i
                    ? e
                    : new i(function (t) {
                        t(e);
                      })).then(o, r);
            }
            a((n = n.apply(t, e || [])).next());
          });
        };
      !(function (t) {
        (t.episode = "episode"), (t.movie = "movie");
      })(bi || (bi = {}));
      var Bi = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var e;
            t.done
              ? s(t.value)
              : ((e = t.value),
                e instanceof i
                  ? e
                  : new i(function (t) {
                      t(e);
                    })).then(o, r);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
      class Ai extends class {
        constructor() {
          (this.es = 0), (this.nt = !1);
        }
        set hostOnly(t) {
          this.nt = t;
        }
        get hostOnly() {
          return this.nt;
        }
        get uiEventsHappening() {
          return this.es;
        }
        getScreenSize() {
          return { width: window.outerWidth, height: window.outerHeight };
        }
        getVideoContent(t, e, i, n, s) {
          let u, o, r;
          return (
            s &&
              (s.episodeNum && !isNaN(s.episodeNum) && (u = s.episodeNum),
              s.seasonNum && !isNaN(s.seasonNum) && (o = s.seasonNum),
              (r = s.title)),
            { id: t, type: n, name: e, url: i, episode: u, season: o, episode_name: r, service: this.getStreamingServiceName() }
          );
        }
        logError(t, e) {
          console.error("ERROR", t, e);
          const i = new mt(o, s, { name: "video_error", action: { description: t, reason: e } });
          b.l(i);
        }
        doAdCheck() {
          return ji(this, void 0, void 0, function* () {});
        }
      } {
        constructor() {
          super(),
            (this.de = new n("ext:ContentScripts:Hulu:HuluVideoApi")),
            (this.isWatchingAds = () => this.ns),
            (this.waitNewVideoReadyAsync = () =>
              Bi(this, void 0, void 0, function* () {
                yield dt(() => null != this.ss() && this.us() !== M.LOADING && this.us() !== M.AD_PLAYING, 1 / 0)();
              })),
            (this.waitVideoApiReadyAsync = () =>
              Bi(this, void 0, void 0, function* () {
                var t;
                if (!this.os)
                  try {
                    yield dt(() => document.querySelector("#content-video-player") instanceof Element, 8e3)(),
                      (this.os = null !== (t = document.querySelector("#content-video-player")) && void 0 !== t ? t : void 0);
                  } catch (t) {
                    throw (this.logError(bt, t), new Error(bt));
                  }
              })),
            (this.forceAd = () =>
              Bi(this, void 0, void 0, function* () {
                this.es += 1;
                try {
                  this.de.debug({ methodName: "forceAd", message: "Trying to force ad" }),
                    yield this.waitUpdateState(),
                    this.rs.paused && (this.de.debug({ methodName: "forceAd", message: "Triggering play" }), yield this.play()),
                    this.ns
                      ? this.de.debug({ methodName: "forceAd", message: "In an ad" })
                      : (yield dt(() => this.ns || !this.checkForceAd(), 3e3)(),
                        this.ns
                          ? this.de.debug({ methodName: "forceAd", message: "Forced an Ad to Play :)" })
                          : this.de.debug({ methodName: "forceAd", message: "Ad should be playing by now." }));
                } finally {
                  this.es -= 1;
                }
              })),
            (this.checkForceAd = () => {
              const t = this.cs(),
                e = this.ss();
              if (t && e) {
                document.querySelectorAll(".TimelineAdBreaks__adbreak").forEach((i) => {
                  const n = (parseFloat(i.style.left) / 100) * t * 1e3 - e;
                  if (n >= -500 && n <= R) return !0;
                });
              }
              return !1;
            }),
            (this.waitVideoDoneLoadingAsync = () =>
              Bi(this, void 0, void 0, function* () {
                yield dt(() => this.us() == M.PLAYING || this.us() == M.PAUSED, 1e4)();
              })),
            (this.getStateAsync = () =>
              Bi(this, void 0, void 0, function* () {
                yield this.waitUpdateState();
                const t = this.us(),
                  e = this.rs.currentTime;
                if (null === t || null == e) throw new Error("No playbackState or playbackposition Milliseconds");
                return { playbackState: t, playbackPositionMilliseconds: e };
              })),
            (this.getVideoDataAsync = () =>
              new Promise((t, e) => {
                var i, n;
                const s = this.videoType(),
                  u = null !== (i = this.Ds()) && void 0 !== i ? i : "",
                  o = this.cs(),
                  r = null !== (n = this.hs()) && void 0 !== n ? n : "",
                  a = this.getScreenSize(),
                  c = this.ds(),
                  D = this.getVideoContent(r, u, window.location.href, s, c),
                  h = this.us();
                null !== u && null !== o && null !== r
                  ? t({ videoTitle: u, videoDuration: o, videoId: r, screen: a, content: D, videoState: null != h ? h : M.NOT_READY })
                  : e();
              })),
            (this.jumpToNextEpisode = (t) =>
              new Promise((e) => {
                var i;
                this.es += 1;
                if ((null !== (i = window.location.href.match(/^.*\/([a-z\-0-9]+)\??.*/)) && void 0 !== i ? i : [])[1] != t.videoId) {
                  const e = t.videoId;
                  window.postMessage({ type: "nextEpisode", nextEpisodeId: e }, "*");
                }
                (this.es -= 1), e();
              })),
            (this.pause = () =>
              Bi(this, void 0, void 0, function* () {
                (this.es += 1), this.us() !== M.PAUSED && jQuery(".PauseButton").length > 0 && jQuery(".PauseButton")[0].click();
                try {
                  yield dt(() => this.us() === M.PAUSED, 1e3)();
                } finally {
                  this.es -= 1;
                }
              })),
            (this.play = () =>
              Bi(this, void 0, void 0, function* () {
                (this.es += 1), this.us() !== M.PLAYING && jQuery(".PlayButton").length > 0 && jQuery(".PlayButton")[0].click();
                try {
                  yield dt(() => this.us() === M.PLAYING, 2500)();
                } finally {
                  this.es -= 1;
                }
              })),
            (this.freeze = (t) =>
              Bi(this, void 0, void 0, function* () {
                this.es += 1;
                try {
                  yield this.pause(), yield ht(t)(), yield this.play();
                } finally {
                  this.es -= 1;
                }
              })),
            (this.setCurrentTime = (t) =>
              Bi(this, void 0, void 0, function* () {
                this.de.debug({ methodName: "setCurrentTime", message: "Seek called with window post Message" }),
                  (this.es += 1),
                  window.postMessage({ type: "SEEK", time: t }, "*");
                try {
                  yield ht(250)(), yield dt(() => this.us() !== M.LOADING, 1e4);
                } finally {
                  this.es -= 1;
                }
              })),
            (this.getVideoElement = () => document.querySelector("#content-video-player")),
            (this.videoType = () => {
              const t = document.querySelector(
                ".PlayerMetadata.OnNowMetadata > .PlayerMetadata__hitRegion > .PlayerMetadata__subTitle > .PlayerMetadata__seasonEpisodeText"
              );
              let e = "";
              return document.querySelector(".PlayerMetadata--live") && (e = "live-"), (e += t ? bi.episode : bi.movie), e;
            }),
            (this.ds = () => {
              var t, e, i, n, s;
              let u = {};
              const o = document.querySelector(".PlayerMetadata.OnNowMetadata > .PlayerMetadata__hitRegion > .PlayerMetadata__subTitle"),
                r =
                  null !==
                    (e =
                      null === (t = null == o ? void 0 : o.querySelector(".PlayerMetadata__subTitleText")) || void 0 === t
                        ? void 0
                        : t.textContent) && void 0 !== e
                    ? e
                    : void 0,
                a =
                  null === (i = null == o ? void 0 : o.querySelector(".PlayerMetadata__seasonEpisodeText")) || void 0 === i
                    ? void 0
                    : i.textContent;
              if (a) {
                const t = null !== (n = null == a ? void 0 : a.match(/S(\d*)/)) && void 0 !== n ? n : [""],
                  e = null !== (s = null == a ? void 0 : a.match(/E(\d*)/)) && void 0 !== s ? s : [""];
                u = { episodeNum: Number(e[1]), seasonNum: Number(t[1]), title: r };
              }
              return u;
            }),
            (this.ls = () => document.querySelector("#ad-video-player")),
            (this.us = () => {
              const t = this.getVideoElement();
              if (null === t || 0 === t.readyState) return M.NOT_READY;
              const e = jQuery(".loading-screen-container");
              if (1 === t.readyState || (e.length > 0 && "none" !== e[0].style.display)) return M.LOADING;
              const i = this.ls();
              return (null !== i && "" !== i.src) || jQuery(".AdUnitView__adBar__timer").length > 0 || !0 === this.ns
                ? M.AD_PLAYING
                : t.paused
                ? M.PAUSED
                : M.PLAYING;
            }),
            (this.cs = () => {
              var t, e;
              return null !== (e = null === (t = this.getVideoElement()) || void 0 === t ? void 0 : t.duration) && void 0 !== e ? e : null;
            }),
            (this.ss = () => {
              const t = this.getVideoElement();
              if (t) return Math.floor(1e3 * t.currentTime);
            }),
            (this.Ds = () => {
              const t = document.querySelector(".PlayerMetadata__title");
              return t ? t.innerText : null;
            }),
            (this.hs = () => {
              var t;
              return (null !== (t = window.location.href.match(/^.*\/([a-z\-0-9]+)\??.*/)) && void 0 !== t ? t : [])[1];
            }),
            (this.onNode = (t) => {
              const e = t.detail;
              "UpdateState" === e.type && (this.rs = { paused: e.paused, currentTime: e.currentTime, updatedAt: e.updatedAt });
            }),
            (this.getStreamingServiceName = () => ct.HULU),
            (this.waitUpdateState = () =>
              Bi(this, void 0, void 0, function* () {
                var t;
                const e = this.getVideoElement();
                if (!e) return;
                const i = Date.now();
                window.postMessage({ type: "UpdateState" }, "*");
                try {
                  yield dt(() => this.rs.updatedAt >= i, 500, 10)();
                } catch (i) {
                  console.log("Update error"),
                    (this.rs = {
                      paused: null === (t = null == e ? void 0 : e.paused) || void 0 === t || t,
                      currentTime: this.rs.currentTime,
                      updatedAt: Date.now()
                    });
                }
              })),
            (this.getUpdateSessionDataAsync = () =>
              Bi(this, void 0, void 0, function* () {
                yield this.waitUpdateState();
                return {
                  state: this.rs.paused ? T.PAUSED : T.PLAYING,
                  lastKnownTime: this.rs.currentTime,
                  lastKnownTimeUpdatedAt: this.rs.updatedAt
                };
              })),
            (this.es = 0),
            (this.ns = !1),
            (this.rs = { paused: !1, updatedAt: 0, currentTime: 0 });
        }
        doAdCheck() {
          const t = Object.create(null, { doAdCheck: { get: () => super.doAdCheck } });
          return Bi(this, void 0, void 0, function* () {
            t.doAdCheck.call(this),
              this.de.debug({ methodName: "doAdCheck", message: "Checking for ads" }),
              this.ns
                ? this.de.debug({ methodName: "doAdCheck", message: "Already watching an ad" })
                : this.checkForceAd()
                ? (this.de.debug({ methodName: "doAdCheck", message: "Should force an ad" }), yield this.forceAd())
                : this.de.debug({ methodName: "doAdCheck", message: "Shouldn't force ad" });
          });
        }
        get currentlyWatchingAds() {
          return this.ns;
        }
        set currentlyWatchingAds(t) {
          this.ns = t;
        }
      }
      var ki = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var e;
            t.done
              ? s(t.value)
              : ((e = t.value),
                e instanceof i
                  ? e
                  : new i(function (t) {
                      t(e);
                    })).then(o, r);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
      var Qi = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              a(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              a(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function a(t) {
            var e;
            t.done
              ? s(t.value)
              : ((e = t.value),
                e instanceof i
                  ? e
                  : new i(function (t) {
                      t(e);
                    })).then(o, r);
          }
          a((n = n.apply(t, e || [])).next());
        });
      };
      class Ii extends class {
        constructor(t) {
          (this.Ct = t), console.log("Video Event Listener");
        }
        getCurrentStatus() {
          return ki(this, void 0, void 0, function* () {
            return "";
          });
        }
        getStatusMetaData() {
          return ki(this, void 0, void 0, function* () {});
        }
        reloadNextEpisode() {
          var t;
          return ki(this, void 0, void 0, function* () {
            yield null === (t = this.qt) || void 0 === t ? void 0 : t.reloadPartyAsync();
          });
        }
        startListening() {
          this.ps();
        }
        stopListening() {
          this.gs();
        }
        ps() {
          const t = navigator;
          t.mediaSession.setActionHandler("play", () =>
            ki(this, void 0, void 0, function* () {
              this.Fs(), this.Ct.play(), console.log("Bluetooth device played the video");
            })
          ),
            t.mediaSession.setActionHandler("pause", () =>
              ki(this, void 0, void 0, function* () {
                this.Fs(), this.Ct.pause(), console.log("Bluetooth device paused the video");
              })
            );
        }
        gs() {
          const t = navigator;
          t.mediaSession.setActionHandler("play", null), t.mediaSession.setActionHandler("pause", null);
        }
        vs() {
          var t;
          null === (t = this.qt) || void 0 === t || t.tryBroadcast(!1);
        }
        Fs() {
          var t;
          console.log("Going to wait for change"), null === (t = this.qt) || void 0 === t || t.tryBroadcast(!0);
        }
        ys() {
          var t;
          null === (t = this.qt) || void 0 === t || t.setBuffering(!0);
        }
        fs(t) {
          var e;
          null === (e = this.qt) || void 0 === e || e.setWatchingAds(!0, t);
        }
        Cs() {
          var t, e;
          null === (t = this.qt) || void 0 === t || t.setWatchingAds(!1), null === (e = this.qt) || void 0 === e || e.forceSync();
        }
        ws() {
          var t;
          null === (t = this.qt) || void 0 === t || t.setBuffering(!1);
        }
        Es(t) {
          var e;
          null === (e = this.qt) || void 0 === e || e.sendNextEpisodeAsync(t);
        }
        _s(t) {
          var e;
          null === (e = this.qt) || void 0 === e || e.sendTeardown(t);
        }
        setMessageForwarder(t) {
          this.qt = t;
        }
        shouldSync() {
          return !0;
        }
      } {
        constructor(t, e) {
          var i, s;
          super(t),
            (this.de = new n("ext:ContentScripts:Hulu:HuluVideoEventListener")),
            (this.bs = () => document.querySelector(".loading-screen-container")),
            (this.reloadListeners = () => {
              this.de.debug({ methodName: "reloadListeners", message: "stopping listeners" }),
                this.stopListening(),
                this.de.debug({ methodName: "reloadListeners", message: "starting listeners" }),
                this.startListening(),
                this.de.debug({ methodName: "reloadListeners", message: "initialize listeners" }),
                this.initListeners();
            }),
            (this.initListeners = () => {
              window.addEventListener("FromNode", this.js, !1);
            }),
            (this.startListening = () => {
              super.startListening(),
                this.de.debug({ methodName: "startListening", message: "disconnecting listeners" }),
                this.Bs.disconnect(),
                this.As.disconnect(),
                this.ks.disconnect();
              const t = document.querySelector(".hulu-player-app");
              t &&
                (this.de.debug({ methodName: "startListening", message: "creating ad wrapper listener" }),
                this.Bs.observe(t, { childList: !0, subtree: !1 }));
              const e = document.querySelector("#content-video-player");
              e &&
                (this.de.debug({ methodName: "startListening", message: "creating video wrapper listener" }),
                this.As.observe(e, { attributes: !0 }));
              const i = this.bs();
              i &&
                (this.de.debug({ methodName: "startListening", message: "creating loading container listener" }),
                this.ks.observe(i, { attributes: !0 })),
                window.addEventListener("message", this.Qs, !1);
              const n = jQuery("#chat-wrapper");
              n.on("mousedown", this.Is), n.on("click", this.xs);
              const s = this.Ss();
              s &&
                (this.de.debug({ methodName: "startListening", message: "adding video event listeners" }),
                s.addEventListener("play", this.Ts),
                s.addEventListener("pause", this.Ts),
                s.addEventListener("seeking", this.Ts)),
                this.Ms(),
                this.Ps();
            }),
            (this.stopListening = () => {
              super.stopListening(),
                this.de.debug({ methodName: "stopListening", message: "disconnecting listeners" }),
                this.Bs.disconnect(),
                this.As.disconnect(),
                this.ks.disconnect();
              const t = this.Ss();
              t &&
                (this.de.debug({ methodName: "stopListening", message: "removing video event listeners" }),
                t.removeEventListener("play", this.Ts),
                t.removeEventListener("pause", this.Ts),
                t.removeEventListener("seeking", this.Ts)),
                this.Ns();
              const e = jQuery("#chat-wrapper");
              e.off("mousedown", this.Is),
                e.off("click", this.xs),
                window.removeEventListener("message", this.Qs, !1),
                window.removeEventListener("FromNode", this.js, !1);
            }),
            (this.$s = () => {
              this.Ct.currentlyWatchingAds || this.vs();
            }),
            (this.Ts = this.$s.bind(this)),
            (this.Ss = () => document.querySelector("video")),
            (this.Ms = () => {
              const t = document.querySelector("div.ViewModeControlBar__button.CloseButton");
              t
                ? t.addEventListener("click", this.Os)
                : this.de.debug({
                    methodName: "addVideoPlayerCloseButtonEventListener",
                    message: "unable to locate video player close button"
                  });
            }),
            (this.Ns = () => {
              const t = document.querySelector("div.ViewModeControlBar__button.CloseButton");
              t
                ? t.removeEventListener("click", this.Os)
                : this.de.debug({
                    methodName: "removeVideoPlayerCloseButtonEventListener",
                    message: "unable to locate video player close button"
                  });
            }),
            (this.Os = (t) => {
              this.de.debug({ methodName: "videoPlayerCloseButtonOnClickEventHandler", object: t }), this._s($t);
            }),
            (this.loadNewVideoAsync = (t) =>
              Qi(this, void 0, void 0, function* () {
                const e = performance.now();
                yield new Promise((i, n) => {
                  const s = setInterval(() => {
                    if (Ie.getVideoId(new URL(window.location.href)) === t) {
                      const t = this.Ct.getVideoElement();
                      if (null != t && t instanceof Element)
                        return this.de.debug({ methodName: "loadNewVideoAsync", object: t }), clearInterval(s), void i();
                    }
                    performance.now() - e >= 2e4 && (clearInterval(s), n(new Error("Could not load new video in time.")));
                  }, 100);
                }),
                  yield this.Ct.waitNewVideoReadyAsync();
              })),
            (this.Ps = () =>
              Qi(this, void 0, void 0, function* () {
                (yield this.Ct.getStateAsync()).playbackState === M.AD_PLAYING &&
                  (this.de.debug({ methodName: "_checkAdStart", message: "active ad class node added" }),
                  this.de.debug({ methodName: "_checkAdStart", message: "PEOPLE ARE WATCHING ADS" }),
                  this.fs(),
                  (this.Ct.currentlyWatchingAds = !0),
                  this.Vs());
              })),
            (this.shouldSync = () => !this.Ct.currentlyWatchingAds),
            (this.Vs = () => {
              dt(() => null != document.querySelector(".AdUnitView__adBar__timer"), 1e3)().then(() => {
                this.de.debug({ methodName: "_observeAdTimer", message: "trying to observe new ad Timer" });
                const t = document.querySelector(".AdUnitView__adBar__timer");
                t &&
                  (this.de.debug({ methodName: "_observeAdTimer", message: "observing new ad Timer" }),
                  this.Ls.disconnect(),
                  this.Ls.observe(t, { characterData: !0, characterDataOldValue: !0, attributes: !1, childList: !1, subtree: !0 }));
              });
            }),
            (this.Rs = () => !!document.querySelector(".Player__container--modal")),
            (this.Us = () => {
              dt(() => !document.querySelector(".AdUnitView"), 2500)().then(() => {
                this.de.debug({ methodName: "_checkAdFinished", message: "PEOPLE STOPPED WATCHING ADS" }),
                  (this.Ct.currentlyWatchingAds = !1),
                  this.Cs();
              });
            }),
            (this.Gs = (t) => {
              var e;
              if (t.source != window) return;
              const i = t.data.type;
              if ("FROM_PAGE_POP" === i) {
                if (this.Rs()) return;
                this._s($t);
              } else if ("FROM_PAGE" === i) {
                if (window.location.href.match(/^.*(entity=watch&id=).*/))
                  return void this.de.debug({ methodName: "replaceStateInteraction", message: "transition page detected" });
                if (window.location.href.match(/^.*\/(watch)\/.*/)) {
                  if (
                    (this.de.debug({ methodName: "replaceStateInteraction", message: "episode page detected" }),
                    null === (e = this.qt) || void 0 === e ? void 0 : e.changingVideo)
                  )
                    return;
                  this.Rs() || (this.B.shouldChatBeVisible() && this.B.setChatVisible(!0));
                  const t = Ie.getVideoId(new URL(window.location.href));
                  if (!t)
                    return (
                      this.de.debug({ methodName: "replaceStateInteraction", message: "No video found. Tearing down" }), void this._s($t)
                    );
                  this.Es(t);
                } else {
                  if ((this.de.debug({ methodName: "replaceStateInteraction", message: "non-episode page detected" }), this.Rs()))
                    return void this.B.setChatVisible(!1, !1).then(() => {
                      this.B.fixPageControls();
                    });
                  this._s($t);
                }
              }
            }),
            (this.Qs = this.Gs.bind(this)),
            (this.Ct = t),
            (this.B = e),
            (this.Is = this.B.onWrapperMouseDown.bind(this.B)),
            (this.xs = this.B.onWrapperMouseClick.bind(this.B)),
            (this.js = this.Ct.onNode.bind(this.Ct)),
            (this.ks = new MutationObserver((t) => {
              for (const e of t) "class" === e.attributeName && "none" == e.target.style.display ? this.ws() : this.ys();
            })),
            (this.Bs = new MutationObserver((t) => {
              for (const e of t)
                if ("childList" === e.type) {
                  this.de.debug({ methodName: "constructor", message: "A child node has been added or removed." });
                  for (let t = 0; t < e.addedNodes.length; t++) {
                    const i = e.addedNodes[t];
                    i.className && i.className.includes(f) && this.Ps();
                  }
                  for (let t = 0; t < e.removedNodes.length; t++) {
                    const i = e.removedNodes[t];
                    i.className && i.className.includes(f) && this.Us();
                  }
                }
            })),
            (this.As = new MutationObserver(this.B.onVideoChange.bind(this.B))),
            (this.Ls = new MutationObserver(() => {
              var t, e;
              document.querySelector(".AdUnitView__adBar__timer") &&
                !(null === (t = document.querySelector(".AdUnitView__adBar__timer")) || void 0 === t
                  ? void 0
                  : t.className.includes("fix-ad-width")) &&
                (null === (e = document.querySelector(".AdUnitView__adBar__timer")) || void 0 === e || e.classList.add("fix-ad-width"),
                this.de.debug({ methodName: "constructor", message: "trying to fix width of ad timer" }));
            })),
            (null === (i = window.teleparty) || void 0 === i ? void 0 : i.replaceScriptLoaded) ||
              (this.de.debug({ methodName: "constructor", message: "injecting replace script" }),
              (function (t) {
                const e = document.createElement("script");
                e.setAttribute("tpInjected", ""),
                  (e.textContent = t),
                  (document.head || document.documentElement).appendChild(e),
                  e.remove();
              })(
                '\n  console.log("Loaded Replace Script");\n    if(!window.replaceScriptLoaded) {\n      window.replaceScriptLoaded = true;\n      (function(history){\n        var replaceState = history.replaceState;\n        history.replaceState = function(state) {\n          if (typeof history.onreplacestate == "function") {\n            history.onreplacestate({state: state});\n          }\n          return replaceState.apply(history, arguments);\n        }\n        var pushState = history.pushState;\n        history.pushState = function(state) {\n            if (typeof history.onpushstate == "function") {\n                history.onpushstate({state: state});\n            }\n            return pushState.apply(history, arguments);\n        };\n      })(window.history);\n\n      var popInteraction = function(e) {\n        // send message to content script w next episode\n        window.postMessage({ type: "FROM_PAGE_POP", text: "next episode from the webpage!"}, "*");\n      }\n\n      var reloadInteraction = function(e) {\n        // send message to content script w next episode\n        window.postMessage({ type: "FROM_PAGE", text: "next episode from the webpage!"}, "*");\n      }\n      window.onpopstate = popInteraction;\n      history.onreplacestate = history.onpushstate = reloadInteraction;\n    }\n'
              )),
            (null === (s = window.teleparty) || void 0 === s ? void 0 : s.injectScriptLoaded) ||
              (function (t) {
                const e = document.createElement("script");
                e.setAttribute("tpInjected", ""), (e.src = t), (document.head || document.documentElement).appendChild(e), e.remove();
              })(chrome.extension.getURL("content_scripts/hulu/hulu_injected_bundled.js")),
            this.initListeners();
        }
      }
      const xi = new n("ext:ContentScripts:Hulu:HuluContent");
      if (!window.teleparty || !(null === (Si = window.teleparty) || void 0 === Si ? void 0 : Si.contentScriptInjected)) {
        window.teleparty || (window.teleparty = {}), (window.teleparty.contentScriptInjected = !0);
        const t = new Ai(),
          e = new we(t),
          i = new Ii(t, e);
        let n;
        window.teleparty && window.teleparty.pageControls
          ? ((n = window.teleparty.pageControls), console.log("Using HuluPageControls page controls"))
          : (n = new _i(e)),
          new Lt(e, t, i, n),
          xi.debug({ message: "Initialized content script" });
      }
      var Si;
    })();
})();
