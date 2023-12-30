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
      class t {
        constructor(t, e, i) {
          (this.sender = t), (this.target = e), (this.type = i);
        }
      }
      class e extends t {
        constructor(t, e, i) {
          super(t, e, i), (this.type = i);
        }
      }
      var n;
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
      })(n || (n = {}));
      class s extends e {
        constructor(t, e, i) {
          super(t, e, n.LOG_EVENT), (this.data = i), (this.sender = t), (this.target = e);
        }
      }
      const u = "Service_Background",
        o = "Popup",
        r = "Content_Script",
        a = "Page_Controls";
      const c = chrome.runtime.id,
        D = "reactionContainerOpen",
        h = "https://sessions.teleparty.com",
        d = "https://redirect.teleparty.com",
        l = d,
        p = `${d}/sidebar`,
        g = ["heart", "angry", "fire", "laugh", "surprise", "cry"],
        v = ["heart", "angry", "fire", "laugh", "surprise", "cry"],
        F = "recentlyUsedEmojiMap",
        y = "redirectDataMap",
        f = 5e3,
        m = [
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
        C =
          /(?:\uD83D(?:\uDD73\uFE0F?|\uDC41(?:(?:\uFE0F(?:\u200D\uD83D\uDDE8\uFE0F?)?|\u200D\uD83D\uDDE8\uFE0F?))?|[\uDDE8\uDDEF]\uFE0F?|\uDC4B(?:\uD83C[\uDFFB-\uDFFF])?|\uDD90(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|[\uDD96\uDC4C\uDC48\uDC49\uDC46\uDD95\uDC47\uDC4D\uDC4E\uDC4A\uDC4F\uDE4C\uDC50\uDE4F\uDC85\uDCAA\uDC42\uDC43\uDC76\uDC66\uDC67](?:\uD83C[\uDFFB-\uDFFF])?|\uDC71(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2640\u2642]\uFE0F?))?)|\u200D(?:[\u2640\u2642]\uFE0F?)))?|\uDC68(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC68\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)|\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)))))?|\uDC69(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFC-\uDFFF]|\uDC68\uD83C[\uDFFC-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFE]|\uDC68\uD83C[\uDFFB-\uDFFE])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])|\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])))))?|[\uDC74\uDC75](?:\uD83C[\uDFFB-\uDFFF])?|[\uDE4D\uDE4E\uDE45\uDE46\uDC81\uDE4B\uDE47\uDC6E](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD75(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC82\uDC77](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDC78(?:\uD83C[\uDFFB-\uDFFF])?|\uDC73(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC72\uDC70\uDC7C](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC86\uDC87\uDEB6](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC83\uDD7A](?:\uD83C[\uDFFB-\uDFFF])?|\uDD74(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uDC6F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDEA3\uDEB4\uDEB5](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDEC0\uDECC\uDC6D\uDC6B\uDC6C](?:\uD83C[\uDFFB-\uDFFF])?|\uDDE3\uFE0F?|\uDC15(?:\u200D\uD83E\uDDBA)?|[\uDC3F\uDD4A\uDD77\uDD78\uDDFA\uDEE3\uDEE4\uDEE2\uDEF3\uDEE5\uDEE9\uDEF0\uDECE\uDD70\uDD79\uDDBC\uDD76\uDECD\uDDA5\uDDA8\uDDB1\uDDB2\uDCFD\uDD6F\uDDDE\uDDF3\uDD8B\uDD8A\uDD8C\uDD8D\uDDC2\uDDD2\uDDD3\uDD87\uDDC3\uDDC4\uDDD1\uDDDD\uDEE0\uDDE1\uDEE1\uDDDC\uDECF\uDECB\uDD49]\uFE0F?|[\uDE00\uDE03\uDE04\uDE01\uDE06\uDE05\uDE02\uDE42\uDE43\uDE09\uDE0A\uDE07\uDE0D\uDE18\uDE17\uDE1A\uDE19\uDE0B\uDE1B-\uDE1D\uDE10\uDE11\uDE36\uDE0F\uDE12\uDE44\uDE2C\uDE0C\uDE14\uDE2A\uDE34\uDE37\uDE35\uDE0E\uDE15\uDE1F\uDE41\uDE2E\uDE2F\uDE32\uDE33\uDE26-\uDE28\uDE30\uDE25\uDE22\uDE2D\uDE31\uDE16\uDE23\uDE1E\uDE13\uDE29\uDE2B\uDE24\uDE21\uDE20\uDE08\uDC7F\uDC80\uDCA9\uDC79-\uDC7B\uDC7D\uDC7E\uDE3A\uDE38\uDE39\uDE3B-\uDE3D\uDE40\uDE3F\uDE3E\uDE48-\uDE4A\uDC8B\uDC8C\uDC98\uDC9D\uDC96\uDC97\uDC93\uDC9E\uDC95\uDC9F\uDC94\uDC9B\uDC9A\uDC99\uDC9C\uDDA4\uDCAF\uDCA2\uDCA5\uDCAB\uDCA6\uDCA8\uDCA3\uDCAC\uDCAD\uDCA4\uDC40\uDC45\uDC44\uDC8F\uDC91\uDC6A\uDC64\uDC65\uDC63\uDC35\uDC12\uDC36\uDC29\uDC3A\uDC31\uDC08\uDC2F\uDC05\uDC06\uDC34\uDC0E\uDC2E\uDC02-\uDC04\uDC37\uDC16\uDC17\uDC3D\uDC0F\uDC11\uDC10\uDC2A\uDC2B\uDC18\uDC2D\uDC01\uDC00\uDC39\uDC30\uDC07\uDC3B\uDC28\uDC3C\uDC3E\uDC14\uDC13\uDC23-\uDC27\uDC38\uDC0A\uDC22\uDC0D\uDC32\uDC09\uDC33\uDC0B\uDC2C\uDC1F-\uDC21\uDC19\uDC1A\uDC0C\uDC1B-\uDC1E\uDC90\uDCAE\uDD2A\uDDFE\uDDFB\uDC92\uDDFC\uDDFD\uDD4C\uDED5\uDD4D\uDD4B\uDC88\uDE82-\uDE8A\uDE9D\uDE9E\uDE8B-\uDE8E\uDE90-\uDE9C\uDEF5\uDEFA\uDEB2\uDEF4\uDEF9\uDE8F\uDEA8\uDEA5\uDEA6\uDED1\uDEA7\uDEF6\uDEA4\uDEA2\uDEEB\uDEEC\uDCBA\uDE81\uDE9F-\uDEA1\uDE80\uDEF8\uDD5B\uDD67\uDD50\uDD5C\uDD51\uDD5D\uDD52\uDD5E\uDD53\uDD5F\uDD54\uDD60\uDD55\uDD61\uDD56\uDD62\uDD57\uDD63\uDD58\uDD64\uDD59\uDD65\uDD5A\uDD66\uDD25\uDCA7\uDEF7\uDD2E\uDC53-\uDC62\uDC51\uDC52\uDCFF\uDC84\uDC8D\uDC8E\uDD07-\uDD0A\uDCE2\uDCE3\uDCEF\uDD14\uDD15\uDCFB\uDCF1\uDCF2\uDCDE-\uDCE0\uDD0B\uDD0C\uDCBB\uDCBD-\uDCC0\uDCFA\uDCF7-\uDCF9\uDCFC\uDD0D\uDD0E\uDCA1\uDD26\uDCD4-\uDCDA\uDCD3\uDCD2\uDCC3\uDCDC\uDCC4\uDCF0\uDCD1\uDD16\uDCB0\uDCB4-\uDCB8\uDCB3\uDCB9\uDCB1\uDCB2\uDCE7-\uDCE9\uDCE4-\uDCE6\uDCEB\uDCEA\uDCEC-\uDCEE\uDCDD\uDCBC\uDCC1\uDCC2\uDCC5-\uDCD0\uDD12\uDD13\uDD0F-\uDD11\uDD28\uDD2B\uDD27\uDD29\uDD17\uDD2C\uDD2D\uDCE1\uDC89\uDC8A\uDEAA\uDEBD\uDEBF\uDEC1\uDED2\uDEAC\uDDFF\uDEAE\uDEB0\uDEB9-\uDEBC\uDEBE\uDEC2-\uDEC5\uDEB8\uDEAB\uDEB3\uDEAD\uDEAF\uDEB1\uDEB7\uDCF5\uDD1E\uDD03\uDD04\uDD19-\uDD1D\uDED0\uDD4E\uDD2F\uDD00-\uDD02\uDD3C\uDD3D\uDD05\uDD06\uDCF6\uDCF3\uDCF4\uDD31\uDCDB\uDD30\uDD1F-\uDD24\uDD34\uDFE0-\uDFE2\uDD35\uDFE3-\uDFE5\uDFE7-\uDFE9\uDFE6\uDFEA\uDFEB\uDD36-\uDD3B\uDCA0\uDD18\uDD33\uDD32\uDEA9])|\uD83E(?:[\uDD1A\uDD0F\uDD1E\uDD1F\uDD18\uDD19\uDD1B\uDD1C\uDD32\uDD33\uDDB5\uDDB6\uDDBB\uDDD2](?:\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?)))?|[\uDDD4\uDDD3](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDCF\uDD26\uDD37](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD34\uDDD5\uDD35\uDD30\uDD31\uDD36](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDB8\uDDB9\uDDD9-\uDDDD](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDDDE\uDDDF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDDCD\uDDCE\uDDD6\uDDD7\uDD38](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD3C(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDD3D\uDD3E\uDD39\uDDD8](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD23\uDD70\uDD29\uDD2A\uDD11\uDD17\uDD2D\uDD2B\uDD14\uDD10\uDD28\uDD25\uDD24\uDD12\uDD15\uDD22\uDD2E\uDD27\uDD75\uDD76\uDD74\uDD2F\uDD20\uDD73\uDD13\uDDD0\uDD7A\uDD71\uDD2C\uDD21\uDD16\uDDE1\uDD0E\uDD0D\uDD1D\uDDBE\uDDBF\uDDE0\uDDB7\uDDB4\uDD3A\uDDB0\uDDB1\uDDB3\uDDB2\uDD8D\uDDA7\uDDAE\uDD8A\uDD9D\uDD81\uDD84\uDD93\uDD8C\uDD99\uDD92\uDD8F\uDD9B\uDD94\uDD87\uDDA5\uDDA6\uDDA8\uDD98\uDDA1\uDD83\uDD85\uDD86\uDDA2\uDD89\uDDA9\uDD9A\uDD9C\uDD8E\uDD95\uDD96\uDD88\uDD8B\uDD97\uDD82\uDD9F\uDDA0\uDD40\uDD6D\uDD5D\uDD65\uDD51\uDD54\uDD55\uDD52\uDD6C\uDD66\uDDC4\uDDC5\uDD5C\uDD50\uDD56\uDD68\uDD6F\uDD5E\uDDC7\uDDC0\uDD69\uDD53\uDD6A\uDD59\uDDC6\uDD5A\uDD58\uDD63\uDD57\uDDC8\uDDC2\uDD6B\uDD6E\uDD5F-\uDD61\uDD80\uDD9E\uDD90\uDD91\uDDAA\uDDC1\uDD67\uDD5B\uDD42\uDD43\uDD64\uDDC3\uDDC9\uDDCA\uDD62\uDD44\uDDED\uDDF1\uDDBD\uDDBC\uDE82\uDDF3\uDE90\uDDE8\uDDE7\uDD47-\uDD49\uDD4E\uDD4F\uDD4D\uDD4A\uDD4B\uDD45\uDD3F\uDD4C\uDE80\uDE81\uDDFF\uDDE9\uDDF8\uDDF5\uDDF6\uDD7D\uDD7C\uDDBA\uDDE3-\uDDE6\uDD7B\uDE71-\uDE73\uDD7E\uDD7F\uDE70\uDDE2\uDE95\uDD41\uDDEE\uDE94\uDDFE\uDE93\uDDAF\uDDF0\uDDF2\uDDEA-\uDDEC\uDE78-\uDE7A\uDE91\uDE92\uDDF4\uDDF7\uDDF9-\uDDFD\uDDEF])|[\u263A\u2639\u2620\u2763\u2764]\uFE0F?|\u270B(?:\uD83C[\uDFFB-\uDFFF])?|[\u270C\u261D](?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\u270A(?:\uD83C[\uDFFB-\uDFFF])?|\u270D(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uD83C(?:\uDF85(?:\uD83C[\uDFFB-\uDFFF])?|\uDFC3(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC7\uDFC2](?:\uD83C[\uDFFB-\uDFFF])?|\uDFCC(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC4\uDFCA](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDFCB(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFF5\uDF36\uDF7D\uDFD4-\uDFD6\uDFDC-\uDFDF\uDFDB\uDFD7\uDFD8\uDFDA\uDFD9\uDFCE\uDFCD\uDF21\uDF24-\uDF2C\uDF97\uDF9F\uDF96\uDF99-\uDF9B\uDF9E\uDFF7\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37]\uFE0F?|\uDFF4(?:(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F|\uDC73\uDB40\uDC63\uDB40\uDC74\uDB40\uDC7F|\uDC77\uDB40\uDC6C\uDB40\uDC73\uDB40\uDC7F)))?|\uDFF3(?:(?:\uFE0F(?:\u200D\uD83C\uDF08)?|\u200D\uD83C\uDF08))?|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|[\uDFFB-\uDFFF\uDF38-\uDF3C\uDF37\uDF31-\uDF35\uDF3E-\uDF43\uDF47-\uDF53\uDF45\uDF46\uDF3D\uDF44\uDF30\uDF5E\uDF56\uDF57\uDF54\uDF5F\uDF55\uDF2D-\uDF2F\uDF73\uDF72\uDF7F\uDF71\uDF58-\uDF5D\uDF60\uDF62-\uDF65\uDF61\uDF66-\uDF6A\uDF82\uDF70\uDF6B-\uDF6F\uDF7C\uDF75\uDF76\uDF7E\uDF77-\uDF7B\uDF74\uDFFA\uDF0D-\uDF10\uDF0B\uDFE0-\uDFE6\uDFE8-\uDFED\uDFEF\uDFF0\uDF01\uDF03-\uDF07\uDF09\uDFA0-\uDFA2\uDFAA\uDF11-\uDF20\uDF0C\uDF00\uDF08\uDF02\uDF0A\uDF83\uDF84\uDF86-\uDF8B\uDF8D-\uDF91\uDF80\uDF81\uDFAB\uDFC6\uDFC5\uDFC0\uDFD0\uDFC8\uDFC9\uDFBE\uDFB3\uDFCF\uDFD1-\uDFD3\uDFF8\uDFA3\uDFBD\uDFBF\uDFAF\uDFB1\uDFAE\uDFB0\uDFB2\uDCCF\uDC04\uDFB4\uDFAD\uDFA8\uDF92\uDFA9\uDF93\uDFBC\uDFB5\uDFB6\uDFA4\uDFA7\uDFB7-\uDFBB\uDFA5\uDFAC\uDFEE\uDFF9\uDFE7\uDFA6\uDD8E\uDD91-\uDD9A\uDE01\uDE36\uDE2F\uDE50\uDE39\uDE1A\uDE32\uDE51\uDE38\uDE34\uDE33\uDE3A\uDE35\uDFC1\uDF8C])|\u26F7\uFE0F?|\u26F9(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\u2618\u26F0\u26E9\u2668\u26F4\u2708\u23F1\u23F2\u2600\u2601\u26C8\u2602\u26F1\u2744\u2603\u2604\u26F8\u2660\u2665\u2666\u2663\u265F\u26D1\u260E\u2328\u2709\u270F\u2712\u2702\u26CF\u2692\u2694\u2699\u2696\u26D3\u2697\u26B0\u26B1\u26A0\u2622\u2623\u2B06\u2197\u27A1\u2198\u2B07\u2199\u2B05\u2196\u2195\u2194\u21A9\u21AA\u2934\u2935\u269B\u2721\u2638\u262F\u271D\u2626\u262A\u262E\u25B6\u23ED\u23EF\u25C0\u23EE\u23F8-\u23FA\u23CF\u2640\u2642\u2695\u267E\u267B\u269C\u2611\u2714\u2716\u303D\u2733\u2734\u2747\u203C\u2049\u3030\u00A9\u00AE\u2122]\uFE0F?|[\u0023\u002A\u0030-\u0039](?:\uFE0F\u20E3|\u20E3)|[\u2139\u24C2\u3297\u3299\u25FC\u25FB\u25AA\u25AB]\uFE0F?|[\u2615\u26EA\u26F2\u26FA\u26FD\u2693\u26F5\u231B\u23F3\u231A\u23F0\u2B50\u26C5\u2614\u26A1\u26C4\u2728\u26BD\u26BE\u26F3\u267F\u26D4\u2648-\u2653\u26CE\u23E9-\u23EC\u2B55\u2705\u274C\u274E\u2795-\u2797\u27B0\u27BF\u2753-\u2755\u2757\u26AB\u26AA\u2B1B\u2B1C\u25FE\u25FD])/g;
      var w = console.log.bind(window.console),
        E = function (t, e, i, n) {
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
          return E(this, void 0, void 0, function* () {
            return new Promise((n, s) => {
              const u = setTimeout(() => {
                console.log("send timeout"), s("Message Timeout");
              }, i);
              try {
                chrome.tabs.sendMessage(e, t, (e) => {
                  chrome.runtime.lastError && w(chrome.runtime.lastError.message + JSON.stringify(t)), clearTimeout(u), n(e);
                });
              } catch (t) {
                clearTimeout(u), s(t);
              }
            });
          });
        }
        l(t, e) {
          return E(this, void 0, void 0, function* () {
            return new Promise((i, n) => {
              let s = null;
              e &&
                (s = setTimeout(() => {
                  n({ error: "Send Message Timeout" });
                }, e));
              try {
                chrome.runtime.sendMessage(c, t, (e) => {
                  chrome.runtime.lastError && console.log(chrome.runtime.lastError.message + JSON.stringify(t)), s && clearTimeout(s), i(e);
                });
              } catch (t) {
                s && clearTimeout(s), n(t);
              }
            });
          });
        }
      })();
      var _,
        j,
        B = function (t, e, i, n) {
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
        (t.LOADING = "loading"),
          (t.PLAYING = "playing"),
          (t.IDLE = "idle"),
          (t.AD_PLAYING = "ad_playing"),
          (t.PAUSED = "paused"),
          (t.NOT_READY = "not_ready");
      })(_ || (_ = {})),
        (function (t) {
          (t.EPISODE = "episode"),
            (t.FEATURE = "feature"),
            (t.LIVE = "live"),
            (t.EXTRA = "extra"),
            (t.EVENT = "event"),
            (t.OTHER = "other");
        })(j || (j = {}));
      var A, k, Q;
      function I(t) {
        return t.includes("urn:hbo:feature")
          ? j.FEATURE
          : t.includes("urn:hbo:episode") || (t.includes("urn:hbo:page:") && t.includes(":type:episode"))
          ? j.EPISODE
          : t.includes("urn:hbo:extra")
          ? j.EXTRA
          : j.OTHER;
      }
      function x(t) {
        return function () {
          return new Promise((e) => {
            setTimeout(() => {
              e();
            }, t);
          });
        };
      }
      function S(t, e, i = 250) {
        return function () {
          const n = new Date().getTime(),
            s = function () {
              return t()
                ? Promise.resolve()
                : null !== e && new Date().getTime() - n > e
                ? Promise.reject(new Error("delayUntil timed out: " + t))
                : x(i)().then(s);
            };
          return s();
        };
      }
      function T(t, e, i) {
        t.push(e), t.length > i && t.splice(0, t.length - i);
      }
      function M(t) {
        return t.concat().sort()[Math.floor(t.length / 2)];
      }
      function P(t) {
        const e = document.createElement("script");
        e.setAttribute("tpInjected", ""), (e.textContent = t), (document.head || document.documentElement).appendChild(e), e.remove();
      }
      !(function (t) {
        (t.REGISTER = "register"),
          (t.PARTY_START = "party_start"),
          (t.PARTY_JOIN = "party_join"),
          (t.PARTY_END = "party_end"),
          (t.PARTY_SHARE = "party_share");
      })(A || (A = {})),
        (function (t) {
          (t.PAUSED = "paused"), (t.PLAYING = "playing");
        })(k || (k = {}));
      class $ {
        constructor(t, e, i, n, s, u = []) {
          (this.requiredPermissions = t),
            (this.serverName = i),
            (this.name = n),
            (this.contentScripts = e),
            (this.syncFromEnd = s),
            (this.browseScripts = u);
        }
        urlWithSessionId(t) {
          return `${l}/join/${t}`;
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
      })(Q || (Q = {}));
      const R = new (class extends $ {
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
      })([], ["content_scripts/netflix/netflix_content_bundled.js"], "netflix", Q.NETFLIX, !1);
      Object.freeze(R);
      const G = R,
        N = "Failed to read chrome storage. Please refresh the page and try again",
        O = "Failed to connect to Script. Please refresh the page and try again",
        L = "Failed to load video in time. Please refresh the page and try again.",
        V = "An unexpected error occured. Please refresh the page and try again.";
      var U = i(1227),
        H = i.n(U);
      class W {
        constructor(t) {
          this.namespace = t;
        }
        debug(t) {
          const e = t.methodName ? `${this.namespace}:${t.methodName}` : this.namespace;
          t.message && H()(e)(t.message), t.object && H()(e)(t.object);
        }
      }
      var z = function (t, e, i, n) {
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
      class Y extends class {
        constructor() {
          (this.p = 0), (this.g = !1);
        }
        set hostOnly(t) {
          this.g = t;
        }
        get hostOnly() {
          return this.g;
        }
        get uiEventsHappening() {
          return this.p;
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
          const i = new s(r, u, { name: "video_error", action: { description: t, reason: e } });
          b.l(i);
        }
        doAdCheck() {
          return B(this, void 0, void 0, function* () {});
        }
      } {
        constructor() {
          super(),
            (this.v = new W("ext:ContentScripts:Hulu:HuluVideoApi")),
            (this.setInSession = (t) => {
              this.F = t;
            }),
            (this.forceAd = () =>
              z(this, void 0, void 0, function* () {
                try {
                  (this.p += 1), console.log("Try to force ad");
                  try {
                    yield S(() => (window.postMessage({ type: "GetState" }, "*"), this.m.paused), 5500)();
                  } catch (t) {}
                  if (
                    (this.m.paused && (this.v.debug({ methodName: "forceAd", message: "Triggering play" }), yield this.play()),
                    this.m.adState.watchingAds)
                  )
                    this.v.debug({ methodName: "forceAd", message: "In an ad" });
                  else {
                    try {
                      yield S(
                        () => (window.postMessage({ type: "GetState" }, "*"), this.m.adState.watchingAds || !this.checkForceAd()),
                        5500
                      )();
                    } catch (t) {}
                    this.m.adState.watchingAds
                      ? this.v.debug({ methodName: "forceAd", message: "Forced an Ad to Play :)" })
                      : this.v.debug({ methodName: "forceAd", message: "Failed to launch an ad, when we should have." });
                  }
                } finally {
                  this.p -= 1;
                }
              })),
            (this.checkForceAd = () => {
              const t = this.m.adState.nextAdBreak;
              if ((console.log(t), t)) {
                const e = t - this.m.time;
                return (
                  console.log("FORCE DIF: " + e),
                  this.v.debug({ methodName: "checkForceAd", message: `${e}ms until next ad` }),
                  e <= f && e > 0
                );
              }
              return !1;
            }),
            (this.p = 0),
            (this.C = 0),
            (this._ = 0),
            (this.B = 0),
            (this.A = 0),
            (this.k = 0),
            (this.m = { time: 0, paused: !0, loading: !1, adState: { watchingAds: !1, adDurationLeft: 0, nextAdBreak: void 0 } }),
            (this.F = !1);
        }
        get pageTitle() {
          return this.I;
        }
        skipIdle() {
          jQuery(".center-controls .nf-big-play-pause-secondary").length > 0
            ? jQuery(".center-controls .nf-big-play-pause-secondary").trigger("click")
            : jQuery(".watch-video--playback-restart button").length > 0 &&
              jQuery(".watch-video--playback-restart button").trigger("click");
        }
        getStreamingServiceName() {
          return Q.NETFLIX;
        }
        waitVideoDoneLoadingAsync() {
          return z(this, void 0, void 0, function* () {
            return new Promise((t) => {
              const e = () =>
                z(this, void 0, void 0, function* () {
                  yield this.waitUpdateAPIState(),
                    this.m.loading || this.getPlaybackState() === _.LOADING || this.getPlaybackState() === _.IDLE
                      ? setTimeout(() => {
                          e();
                        }, 100)
                      : t();
                });
              e();
            });
          });
        }
        waitVideoApiReadyAsync() {
          var t;
          return z(this, void 0, void 0, function* () {
            if (!this.S)
              try {
                yield S(() => {
                  const t = document.querySelector("video"),
                    e = void 0 !== jQuery("video").parent()[0] ? jQuery("video").parent()[0].id : null;
                  return t instanceof Element && t.readyState > 0 && null != e && "" != e;
                }, 1 / 0)(),
                  console.log("Got video"),
                  yield this.waitSkipSupplemental(),
                  (this.S = null !== (t = document.querySelector("video")) && void 0 !== t ? t : void 0);
              } catch (t) {
                throw (this.logError(L, t), new Error(L));
              }
          });
        }
        getVideoDataAsync() {
          return z(this, void 0, void 0, function* () {
            const t = yield this.getStateAsync();
            return (
              yield this.waitUpdatePageTitleAsync(),
              yield this.waitUpdateVideoType(),
              "Episode" == this.T && (yield this.waitUpdateEpisodeData()),
              new Promise((e, i) => {
                var n, s;
                const u = null !== (n = this.pageTitle) && void 0 !== n ? n : "",
                  o = this.T,
                  r = 1e3 * (null !== (s = this.M()) && void 0 !== s ? s : 1),
                  a = this.P(),
                  c = this.getScreenSize(),
                  D = this.getVideoContent(a, u, window.location.href, o, this.$);
                null !== u && null !== r && null !== a
                  ? e({ videoTitle: u, videoDuration: r, videoId: a, screen: c, content: D, videoState: t.playbackState })
                  : i(L);
              })
            );
          });
        }
        R() {
          if (jQuery(".WatchNext-still-hover-container").length > 0) return jQuery(".WatchNext-still-hover-container").click(), !0;
          if (jQuery(".button-nfplayerNextEpisode").length > 0) return jQuery(".button-nfplayerNextEpisode").click(), !0;
          if (!(jQuery(".nf-flat-button-text").length > 0)) {
            if (jQuery("[data-uia='next-episode-seamless-button']").length > 0)
              return jQuery("[data-uia='next-episode-seamless-button']")[0].click(), console.log("Clicking seamless button"), !0;
            {
              const t = document.querySelector("[data-uia='control-next']");
              return !!t && (t.click(), !0);
            }
          }
          return (
            !!jQuery(".nf-flat-button-text").text().toLowerCase().includes("next episode") &&
            (jQuery(".nf-flat-button-text")[0].click(), !0)
          );
        }
        jumpToNextEpisode(t) {
          return z(this, void 0, void 0, function* () {
            this.p += 1;
            const e = this.G();
            if (e != parseInt(t.videoId))
              if ((console.log(e), console.log(parseInt(t.videoId)), e && e + 1 === parseInt(t.videoId))) {
                w("Used Manual Click");
                this.R() || window.postMessage({ type: "NEXT_EPISODE", videoId: parseInt(t.videoId) }, "*");
              } else w("Used React Click"), window.postMessage({ type: "NEXT_EPISODE", videoId: parseInt(t.videoId) }, "*");
            this.p -= 1;
          });
        }
        G() {
          var t, e, i;
          return 0 !== (null !== (t = window.location.href.match(/^.*\/([0-9]+)\??.*/)) && void 0 !== t ? t : "").length
            ? parseInt(
                null !== (i = (null !== (e = window.location.href.match(/^.*\/([0-9]+)\??.*/)) && void 0 !== e ? e : [])[1]) && void 0 !== i
                  ? i
                  : null
              )
            : null;
        }
        freeze(t) {
          return (
            (this.p += 1),
            jQuery(".button-nfplayerPause").click(),
            x(t)()
              .then(() => {
                jQuery(".button-nfplayerPlay").click();
              })
              .then(this.N)
              .finally(() => {
                this.p -= 1;
              })
          );
        }
        pause() {
          return z(this, void 0, void 0, function* () {
            (this.p += 1), window.postMessage({ type: "PAUSE" }, "*"), yield this.waitUpdateAPIState(), yield x(500)();
            try {
              yield S(() => (window.postMessage({ type: "GetState" }, "*"), this.m.paused), 2500)(), yield this.N(), console.log("Paused");
            } catch (t) {
              this.logError("Video failed to pause", t), console.log("Didn't pause, but continuing.");
            } finally {
              this.p -= 1;
            }
          });
        }
        play() {
          return z(this, void 0, void 0, function* () {
            (this.p += 1), window.postMessage({ type: "PLAY" }, "*"), yield this.waitUpdateAPIState(), yield x(500)();
            try {
              yield S(() => (window.postMessage({ type: "GetState" }, "*"), !this.m.paused), 2500)(), yield this.N(), console.log("Played");
            } catch (t) {
              this.logError("video failed to play", t), console.log("Didn't play, but continuing.");
            } finally {
              this.p -= 1;
            }
          });
        }
        doAdCheck() {
          const t = Object.create(null, { doAdCheck: { get: () => super.doAdCheck } });
          return z(this, void 0, void 0, function* () {
            t.doAdCheck.call(this),
              this.v.debug({ methodName: "doAdCheck", message: "Checking for ads" }),
              yield this.waitUpdateAPIState(),
              this.m.adState.watchingAds
                ? this.v.debug({ methodName: "doAdCheck", message: "Already watching an ad" })
                : this.checkForceAd()
                ? (this.v.debug({ methodName: "doAdCheck", message: "Should force an ad" }), yield this.forceAd())
                : this.v.debug({ methodName: "doAdCheck", message: "Shouldn't force ad" });
          });
        }
        waitVideoDoneLoading() {
          return z(this, void 0, void 0, function* () {
            return new Promise((t, e) => {
              const i = performance.now(),
                n = () =>
                  z(this, void 0, void 0, function* () {
                    const s = yield this.getPlayerState(),
                      u = performance.now();
                    s.loading ? (u - i > 5e3 ? e(new Error("Video Didn't stop loading")) : setTimeout(n, 250)) : t();
                  });
              n();
            });
          });
        }
        setCurrentTime(t) {
          return z(this, void 0, void 0, function* () {
            w("Seek called with window post Message", !0), (this.p += 1), window.postMessage({ type: "SEEK", time: t }, "*");
            try {
              yield x(500)(), yield this.waitVideoDoneLoading(), yield this.N();
            } finally {
              this.p -= 1;
            }
          });
        }
        N() {
          var t, e, i, n, s, u, o, r;
          this.p += 1;
          const a = jQuery(".VideoContainer"),
            c = 100,
            D = 100,
            h = jQuery(window),
            d = {
              bubbles: !0,
              button: 0,
              screenX: c - (null !== (t = h.scrollLeft()) && void 0 !== t ? t : 0),
              screenY: D - (null !== (e = h.scrollTop()) && void 0 !== e ? e : 0),
              clientX: c - (null !== (i = h.scrollLeft()) && void 0 !== i ? i : 0),
              clientY: D - (null !== (n = h.scrollTop()) && void 0 !== n ? n : 0),
              offsetX: c - (null !== (u = null === (s = a.offset()) || void 0 === s ? void 0 : s.left) && void 0 !== u ? u : 0),
              offsetY: D - (null !== (r = null === (o = a.offset()) || void 0 === o ? void 0 : o.top) && void 0 !== r ? r : 0),
              pageX: c,
              pageY: D,
              currentTarget: a[0]
            };
          return (
            a.length > 0 ? a[0].dispatchEvent(new MouseEvent("mousemove", d)) : console.warn("Couldn't find player to hide controls"),
            x(1)().finally(() => {
              this.p -= 1;
            })
          );
        }
        getVideoElement() {
          return document.querySelector("video");
        }
        getPlaybackState() {
          return jQuery(".center-controls .nf-big-play-pause-secondary").length > 0 ||
            jQuery(".watch-video--playback-restart button").length > 0
            ? _.IDLE
            : this.m.adState.watchingAds
            ? _.AD_PLAYING
            : jQuery(".AkiraPlayerSpinner--container").length > 0
            ? _.LOADING
            : jQuery(".button-nfplayerPause").length > 0
            ? _.PLAYING
            : _.PAUSED;
        }
        getHTMLCurrentTime() {
          const t = this.getVideoElement();
          if (t) return Math.floor(1e3 * t.currentTime);
        }
        O() {
          return "";
        }
        M() {
          var t, e;
          return null !== (e = null === (t = this.getVideoElement()) || void 0 === t ? void 0 : t.duration) && void 0 !== e ? e : null;
        }
        P() {
          var t;
          const e = null !== (t = G.getVideoId(new URL(window.location.href))) && void 0 !== t ? t : "",
            i = void 0 !== jQuery("video").parent()[0] ? jQuery("video").parent()[0].id : null;
          let n = e;
          return (
            this.F ||
              null == i ||
              "" == i ||
              i == e ||
              (w("Replacing with dom id"),
              history.replaceState("data to be passed", "Title of the page", "/watch/" + jQuery(jQuery("video").parent())[0].id),
              (n = i)),
            n
          );
        }
        onNode(t) {
          const e = t.detail;
          "UpdateState" == e.type
            ? ((this.m = { paused: e.paused, time: e.time, loading: e.loading, adState: e.adState }),
              (this.L = e.metadata),
              (this.C = e.updatedAt))
            : "GetTitle" == e.type
            ? ((this.I = e.pageTitle), (this.B = e.updatedAt))
            : "GetType" == e.type
            ? ((this.T = e.VideoType), (this.A = e.updatedAt))
            : "GetEpData" == e.type
            ? ((this.$ = e.episodeData), (this.k = e.updatedAt))
            : "CheckSkipSupplemental" == e.type && (this._ = e.updatedAt);
        }
        waitUpdatePageTitleAsync() {
          return z(this, void 0, void 0, function* () {
            const t = Date.now();
            window.postMessage({ type: "GetPageTitle" }, "*");
            try {
              yield S(() => this.B >= t, 500, 10)();
            } catch (t) {
              this.I = void 0;
            }
          });
        }
        waitUpdateVideoType() {
          return z(this, void 0, void 0, function* () {
            const t = Date.now();
            window.postMessage({ type: "GetVideoType" }, "*");
            try {
              yield S(() => this.A >= t, 500, 10)();
            } catch (t) {
              this.logError("unable to update video type", t), (this.T = void 0);
            }
          });
        }
        waitUpdateEpisodeData() {
          return z(this, void 0, void 0, function* () {
            const t = Date.now();
            window.postMessage({ type: "GetEpisodeData" }, "*");
            try {
              yield S(() => this.k >= t, 500, 10)();
            } catch (t) {
              this.$ = void 0;
            }
          });
        }
        waitSkipSupplemental() {
          return z(this, void 0, void 0, function* () {
            try {
              const t = Date.now();
              window.postMessage({ type: "CheckSkipSupplemental" }, "*"), yield S(() => this._ >= t, 5e3, 100)();
            } catch (t) {
              window.postMessage({ type: "CheckSkipSupplemental" }, "*");
            }
          });
        }
        get playerMetaData() {
          return this.L;
        }
        waitUpdateAPIState() {
          var t, e, i, n;
          return z(this, void 0, void 0, function* () {
            const s = Date.now();
            window.postMessage({ type: "GetState" }, "*");
            try {
              yield S(() => this.C >= s, 500, 10)();
            } catch (s) {
              this.logError("unable to update API state", s),
                (this.m = {
                  paused: null !== (e = null === (t = this.getVideoElement()) || void 0 === t ? void 0 : t.paused) && void 0 !== e && e,
                  time:
                    null !== (n = null === (i = this.getVideoElement()) || void 0 === i ? void 0 : i.currentTime) && void 0 !== n ? n : 0,
                  loading: !1,
                  adState: this.m.adState
                }),
                (this.C = Date.now());
            }
          });
        }
        getUpdateSessionDataAsync() {
          return z(this, void 0, void 0, function* () {
            return (
              yield S(() => null != this.getVideoElement(), 5e3)(),
              yield this.waitUpdateAPIState(),
              {
                state: this.m.paused ? k.PAUSED : k.PLAYING,
                lastKnownTime: this.m.time,
                lastKnownTimeUpdatedAt: this.C,
                bufferingState: this.m.loading
              }
            );
          });
        }
        getPlayerState() {
          return z(this, void 0, void 0, function* () {
            return yield this.waitUpdateAPIState(), this.m;
          });
        }
        V() {
          const t = this.getVideoElement();
          if (t) {
            1 != t.playbackRate && (w("Resetting playback rate to 1"), (t.playbackRate = 1));
          }
        }
        getStateAsync() {
          return z(this, void 0, void 0, function* () {
            yield this.waitUpdateAPIState(), this.V();
            let t = this.getPlaybackState();
            (t !== _.PLAYING && t !== _.PAUSED) || (t = this.m.paused ? _.PAUSED : _.PLAYING);
            return { playbackState: t, playbackPositionMilliseconds: this.m.time };
          });
        }
      }
      var K = i(7206),
        J = i.n(K);
      const X = [
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
        q = [
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
        Z = [
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
        tt = {
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
      function et(t) {
        return t
          ? t
              .replace(/&/g, "&amp;")
              .replace(/"/g, "&quot;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/[\r\n]{3,}/gm, "\n\n")
              .replace(
                C,
                `<span style="font-size: ${(function (t) {
                  let e = 16;
                  const i = t.replace(C, "").replace(/[\uFE0F]/g, ""),
                    n = ((t || "").match(C) || []).length;
                  return 0 === i.length && n <= 3 && (e = 32), e;
                })(t)}px">$&</span>`
              )
          : t;
      }
      const it = {
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
      var nt = function (t, e, i, n) {
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
      const st = new (class {
        setItemsAsync(t) {
          return nt(this, void 0, void 0, function* () {
            return new Promise((e, i) => {
              chrome.storage.local.set(t, () => {
                chrome.runtime.lastError ? i(new Error("Failed to write to chrome storage. Please refresh the page and try again")) : e();
              });
            });
          });
        }
      })();
      Object.freeze(st);
      const ut = st;
      var ot,
        rt = function (t, e, i, n) {
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
      class at {
        constructor(t) {
          var e, i, n, s, u, o;
          (this.U = {
            userIcon: null !== (e = t.userIcon) && void 0 !== e ? e : "",
            userNickname: null !== (i = t.userNickname) && void 0 !== i ? i : "",
            nameColor: null !== (n = t.nameColor) && void 0 !== n ? n : "",
            badge: null !== (s = t.badge) && void 0 !== s ? s : "",
            reactions: null !== (u = t.reactions) && void 0 !== u ? u : v
          }),
            (this.H = null !== (o = t.userId) && void 0 !== o ? o : "");
        }
        saveUserIcon(t) {
          (t = et(t)),
            (this.U.userIcon = t),
            ut.setItemsAsync({ userIcon: t }),
            w("new user settings after set user icon: " + JSON.stringify(this.U));
        }
        saveUserNickname(t) {
          (this.U.userNickname = t),
            ut.setItemsAsync({ userNickname: t }),
            w("new user settings after set user nickname: " + JSON.stringify(this.U));
        }
        saveUserSettings(t) {
          return rt(this, void 0, void 0, function* () {
            const e = et(t.userIcon);
            (this.U = t),
              (this.U.userIcon = e),
              yield ut.setItemsAsync({
                userNickname: t.userNickname,
                userIcon: e,
                nameColor: t.nameColor,
                badge: t.badge,
                reactions: t.reactions
              }),
              w("new user settings after save: " + JSON.stringify(this.U));
          });
        }
        get userSettings() {
          return this.U;
        }
        get permId() {
          return this.H;
        }
        get userIcon() {
          return this.U.userIcon;
        }
        get userNickname() {
          return this.U.userNickname;
        }
      }
      class ct extends t {
        constructor(t, e, i) {
          super(t, e, i), (this.W = i);
        }
      }
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
      })(ot || (ot = {}));
      class Dt extends ct {
        constructor(t, e, i) {
          super(t, e, ot.SET_TYPING), (this.data = i);
        }
      }
      class ht extends ct {
        constructor(t, e, i) {
          super(t, e, ot.SEND_MESSAGE), (this.data = i);
        }
      }
      class dt extends ct {
        constructor(t, e, i) {
          super(t, e, ot.BROADCAST_USER_SETTINGS), (this.data = i);
        }
      }
      class lt extends e {
        constructor(t, e, i) {
          super(t, e, n.TEARDOWN), (this.data = i);
        }
      }
      class pt extends ct {
        constructor(t, e, i) {
          super(t, e, ot.SEND_REACTION), (this.data = i);
        }
      }
      class gt extends ct {
        constructor(t, e, i) {
          super(t, e, ot.SEND_GIF), (this.data = i);
        }
      }
      var vt = function (t, e, i, n) {
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
      class Ft {
        constructor() {
          this.resetTasks(), (this.Y = []), (this.K = 0), (this.J = Promise.resolve()), (this.X = !0);
        }
        createInstance() {
          return new Ft();
        }
        pushTask(t, e) {
          if (!this.X) return;
          const i = { action: t, name: e };
          0 === this.K && this.resetTasks(),
            (this.K = this.Y.push(i)),
            (this.J = this.J.then(() => {
              if (this.Y.includes(i) && this.X)
                return this.q(i)().then(() => {
                  this.Y.shift(), (this.K -= 1);
                });
            }));
        }
        disable() {
          (this.X = !1), this.resetTasks();
        }
        resetTasks() {
          (this.J = Promise.resolve()), (this.Y = []), (this.K = 0);
        }
        q(t) {
          return function () {
            return vt(this, void 0, void 0, function* () {
              try {
                yield t.action();
              } catch (t) {}
            });
          };
        }
        get tasksInFlight() {
          return this.K;
        }
        hasTaskInQueue(t) {
          return this.Y.some((e) => e.name === t);
        }
        removeTask(t) {
          console.log(this.Y),
            (this.Y = this.Y.filter((e, i) => (e.name === t && 0 == i ? (console.error("Cannot filter active task"), !0) : e.name !== t))),
            (this.K = this.Y.length),
            console.log(this.Y);
        }
      }
      const yt = new Ft();
      var ft = function (t, e, i, n) {
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
      const mt = new (class {
        getItemsAsync(t) {
          return ft(this, void 0, void 0, function* () {
            return new Promise((e, i) => {
              chrome.storage.local.get(t, (t) => {
                chrome.runtime.lastError ? (console.log(chrome.runtime.lastError), i(new Error(N))) : e(t);
              });
            });
          });
        }
        getAllItemsAsync() {
          return ft(this, void 0, void 0, function* () {
            return new Promise((t, e) => {
              chrome.storage.local.get(null, (i) => {
                chrome.runtime.lastError ? (console.log(chrome.runtime.lastError), e(new Error(N))) : t(i);
              });
            });
          });
        }
      })();
      Object.freeze(mt);
      const Ct = mt;
      var wt,
        Et = new Uint8Array(16);
      function bt() {
        if (
          !wt &&
          !(wt =
            ("undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
            ("undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
        )
          throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return wt(Et);
      }
      const _t = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      const jt = function (t) {
        return "string" == typeof t && _t.test(t);
      };
      for (var Bt = [], At = 0; At < 256; ++At) Bt.push((At + 256).toString(16).substr(1));
      const kt = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = (
            Bt[t[e + 0]] +
            Bt[t[e + 1]] +
            Bt[t[e + 2]] +
            Bt[t[e + 3]] +
            "-" +
            Bt[t[e + 4]] +
            Bt[t[e + 5]] +
            "-" +
            Bt[t[e + 6]] +
            Bt[t[e + 7]] +
            "-" +
            Bt[t[e + 8]] +
            Bt[t[e + 9]] +
            "-" +
            Bt[t[e + 10]] +
            Bt[t[e + 11]] +
            Bt[t[e + 12]] +
            Bt[t[e + 13]] +
            Bt[t[e + 14]] +
            Bt[t[e + 15]]
          ).toLowerCase();
        if (!jt(i)) throw TypeError("Stringified UUID is invalid");
        return i;
      };
      const Qt = function (t, e, i) {
        var n = (t = t || {}).random || (t.rng || bt)();
        if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), e)) {
          i = i || 0;
          for (var s = 0; s < 16; ++s) e[i + s] = n[s];
          return e;
        }
        return kt(n);
      };
      var It;
      !(function (t) {
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
      })(It || (It = {}));
      const xt = chrome.extension.getURL("img/x-circle.svg"),
        St = "with-chat",
        Tt = "tp-video";
      var Mt = function (t, e, i, n) {
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
      const Pt = new (class {
        isUserIconValid(t) {
          return (
            !!t &&
            (t.includes("?newIconUrl=") ? Z.includes(t.split("?newIconUrl=")[1]) && X.includes(t.split("?newIconUrl=")[0]) : Z.includes(t))
          );
        }
        isUserIdValid(t) {
          return "string" == typeof t && (16 === t.length || 36 === t.length);
        }
        isUserNickNameValid(t) {
          return t && "string" == typeof t && t.length < 20;
        }
        getDefaultUserIcon() {
          return q[Math.floor(Math.random() * q.length)];
        }
        getDefaultUserNickName() {
          return "";
        }
        Z(t) {
          return Mt(this, void 0, void 0, function* () {
            try {
              yield ut.setItemsAsync(t);
            } catch (t) {}
          });
        }
        getValidatedChromeStorageDataAsync() {
          return Mt(this, void 0, void 0, function* () {
            const t = yield Ct.getAllItemsAsync(),
              e = Pt.validateStorageData(t);
            return JSON.stringify(t) !== JSON.stringify(e) && this.Z(e), e;
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
      Object.freeze(Pt);
      const $t = Pt,
        Rt = 1e3,
        Gt = 72e5,
        Nt = 12e4,
        Ot = {
          title: "Teleparty | Disconnected from party",
          content:
            "Only the owner of this party can change the episode. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        },
        Lt = {
          title: "Teleparty | Are you still there?",
          content: "You will be removed from the party in 120 seconds for inactivity. Move your mouse to continue watching."
        },
        Vt = {
          title: "Teleparty | Disconnected from party",
          content:
            "It looks like someone changed the video and we weren't able to connect you. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        },
        Ut = {
          title: "Teleparty | Test Participation",
          content:
            "You are using an experimental Netflix video player which Teleparty does not support.\n\nPlease click the button below, disable your test participation and return to the party to continue using Teleparty.",
          buttonTitle: "Disable test participation"
        },
        Ht = {
          title: "Teleparty | Disconnected from party",
          content:
            "It looks like you lost connection to the extension. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        };
      function Wt(t, e) {
        zt();
        const i = e
          ? (function (t) {
              return `\n    <div id="alert-dialog-wrapper">\n      <div id="alert-dialog-container">\n        <div id="alert-title-wrapper">\n            <div class="alert-title">\n                <p id="alert-title-txt" class="extension-title">\n                    ${t.title}\n                </p>\n                <button id="alert-x-btn">\n                    <img src="${xt}" alt="close" />\n                </button>\n            </div>\n            <div class="extension-border-bot">\n                \n            </div>\n        </div>\n        <div id="alert-description">\n            <p id="alert-content-txt" class="extension-txt">\n              ${t.content}\n            </p>\n            <button id="alert-return-btn" class="extension-btn">${t.buttonTitle}</button>\n        </div>\n      </div>\n    </div>\n    `;
            })(t)
          : (function (t) {
              return `\n  <div id="alert-dialog-wrapper">\n    <div id="alert-dialog-container">\n      <div id="alert-title-wrapper">\n          <div class="alert-title">\n              <p id="alert-title-txt" class="extension-title">\n                  ${t.title}\n              </p>\n              <button id="alert-x-btn">\n                  <img src="${xt}" alt="close" />\n              </button>\n          </div>\n          <div class="extension-border-bot">\n              \n          </div>\n      </div>\n      <div id="alert-description">\n          <p id="alert-content-txt" class="extension-txt">\n            ${t.content}\n          </p>\n      </div>\n    </div>\n  </div>\n  `;
            })(t);
        document.body.insertAdjacentHTML("afterbegin", i),
          jQuery("#alert-x-btn").click(() => {
            zt();
          }),
          e &&
            jQuery("#alert-return-btn").click(() => {
              zt(), (window.location.href = e);
            });
      }
      function zt() {
        const t = document.querySelector("#alert-dialog-wrapper");
        t && t.remove();
      }
      function Yt(t, e = "") {
        return `\n\n      <style tpInjected>\n    \n\n      .with-chat {\n        left: 0px !important;\n        width: calc(100% - 340px) !important;\n      }\n\n      .tp-video {\n        transition: width 250ms linear 0.2s;\n      }\n\n      ${e}\n      \n    </style>\n\n    <link tpInjected rel="stylesheet" href="${chrome.runtime.getURL(
          "css/chat.css"
        )}">\n    <link rel="stylesheet" href="${chrome.runtime.getURL("css/alert.css")}">\n\n    ${t}\n  `;
      }
      const Kt = { showAlert: !1 },
        Jt = {
          showAlert: !0,
          alertModal: {
            title: "Teleparty | Disconnected from party",
            content: "You were removed from the party from inactivity. Click the button below rejoin the party.",
            buttonTitle: "Return to Party"
          }
        },
        Xt = {
          showAlert: !0,
          alertModal: {
            title: "Teleparty | Disconnected from party",
            content: "It looks like you left the party. You can click the button below to rejoin the party.",
            buttonTitle: "Return to Party"
          }
        };
      var qt;
      !(function (t) {
        (t.HEART = "heart"), (t.ANGRY = "angry"), (t.FIRE = "fire"), (t.LAUGH = "laugh"), (t.CRY = "cry"), (t.SURPRISE = "surprise");
      })(qt || (qt = {}));
      var Zt = function (t, e, i, n) {
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
      class te {
        constructor(t) {
          (this.tt = this.et.bind(this)),
            (this.it = this.resetIdleTimer.bind(this)),
            (this.nt = (t) => {
              "TP_EMOJI_REQ_RELOAD" === t.data && this.updateFrequentlyUsed(), t.data && "emoji-click" === t.data.type && this.st(t.data);
            }),
            (this.ut = (t) => {
              (t.target !== jQuery("#chat-input")[0] && t.target !== jQuery("#nickname-edit")[0]) || t.stopImmediatePropagation();
            }),
            (this.ot = (t) => {
              this.rt.onVideoClick();
              const e = t.target;
              let i = "" !== e.id ? e.id : e.className;
              i = e.getAttribute("data-tp-id") ? e.getAttribute("data-tp-id") : i;
              const n = { name: "user_click", component: { name: i, type: e.nodeName, origin: "other" } },
                o = new s(r, u, n);
              b.l(o),
                t.target !== jQuery("emoji-picker")[0] &&
                  t.target !== jQuery("#chat-input")[0] &&
                  jQuery("#emoji-picker-container") &&
                  !jQuery("#emoji-picker-container").is(":hidden") &&
                  this.rt.toggleEmojiClicker(),
                t.target instanceof HTMLElement &&
                  jQuery("#gif-picker-container").length &&
                  jQuery("#gif-picker-container")[0] &&
                  !jQuery("#gif-picker-container")[0].contains(t.target) &&
                  t.target !== jQuery("#chat-input")[0] &&
                  !jQuery("#gif-picker-container").is(":hidden") &&
                  "category-img" !== t.target.className &&
                  this.rt.toggleGIFs();
            }),
            (this.st = (t) => {
              console.log("on Emoji Click");
              const e = jQuery("#chat-input")[0],
                i = t.detail.unicode,
                n = new s(r, u, { name: "user_click", component: { name: "chat_input_container-emoji_picker-emoji", type: i } });
              b.l(n);
              const o = new s(r, u, { eventType: `emoji-click-${i}`, sessionId: this.rt.getSessionId() });
              b.l(o), yt.pushTask(() => this.updateFrequentlyUsed(t.detail.emoji));
              const a = window.getSelection();
              if (!jQuery("#chat-input").is(":focus") && e.lastChild) {
                const t = document.createRange();
                t.setStartAfter(e.lastChild), null == a || a.removeAllRanges(), null == a || a.addRange(t);
              }
              this.rt.focusChat(), this.ct(i);
              e.scrollHeight - e.scrollTop <= e.clientHeight + 40 && (e.scrollTop = e.scrollHeight), this.Dt(), this.rt.onInputChange();
            }),
            (this.rt = t);
        }
        ht() {
          w("Idle Warning called"), Wt(Lt);
          const t = new s(r, u, {
            name: "party_warning",
            action: { description: "user has been warned for being idle", reason: "user was idle for 120000 time in milliseconds." }
          });
          b.l(t);
          const e = new s(r, u, { eventType: "idle-warn-2hr", sessionId: this.rt.getSessionId() });
          b.l(e), (this.dt = setTimeout(this.lt.bind(this), Nt));
        }
        lt() {
          w("Idle kick called");
          const t = new s(r, u, {
              name: "party_kick",
              action: { description: "user has been kicked for being idle", reason: "user was idle for 7200000 time in milliseconds." }
            }),
            e = new lt(r, u, Jt);
          b.l(t), b.l(e);
        }
        resetIdleTimer() {
          this.gt && clearTimeout(this.gt), this.dt && (zt(), clearTimeout(this.dt)), (this.gt = setTimeout(this.ht.bind(this), Gt));
        }
        vt() {
          (this.gt = setTimeout(this.ht.bind(this), Gt)),
            (window.onmousemove = (t) => {
              t.isTrusted && this.it();
            }),
            (window.onfocus = () => this.it()),
            (window.onmousedown = () => this.it()),
            (window.ontouchstart = () => this.it()),
            (window.onkeydown = () => this.it());
        }
        Ft() {
          this.gt && clearTimeout(this.gt),
            this.dt && clearTimeout(this.dt),
            (window.onmousemove = null),
            (window.onmousedown = null),
            (window.ontouchstart = null),
            (window.onkeydown = null);
        }
        startListening() {
          w("Listening for chat events"), this.vt(), this.yt(), this.initWindowListeners();
        }
        stopListening() {
          this.ft(), this.Ft(), this.Ct();
        }
        et() {
          this.rt.clearUnreadCount();
        }
        wt(t) {
          if ((console.log("Pasting"), t.preventDefault(), t.clipboardData)) {
            const e = t.clipboardData.getData("text/plain");
            document.execCommand("insertHTML", !1, e);
          }
          this.rt.onInputChange();
        }
        initWindowListeners() {
          jQuery(window).on("focus", this.tt),
            window.addEventListener("message", this.nt),
            document.addEventListener("dragstart", this.Et.bind(this)),
            document.addEventListener("webkitfullscreenchange", this.rt.onFullScreen),
            document.addEventListener("fullscreenchange", this.rt.onFullScreen),
            document.addEventListener("keydown", this.ut, !0),
            document.addEventListener("emoji-click", this.st),
            document.addEventListener("click", this.ot);
        }
        yt() {
          jQuery(window).on("focus", this.tt),
            jQuery("#party-tab").on("click", this.rt.togglePartyTab.bind(this.rt)),
            jQuery("#friends-tab").on("click", this.rt.toggleFriendsTab.bind(this.rt)),
            jQuery(".user-icon").on("click", this.rt.toggleLargeUserIconButton.bind(this.rt)),
            jQuery("#user-icon").on("click", this.rt.toggleIconContainer.bind(this.rt)),
            jQuery("#link-icon").on("click", this.rt.linkIconListener.bind(this.rt)),
            jQuery("#reset-icon").on("click", this.rt.resetIconListener.bind(this.rt)),
            jQuery(".image-button").on("click", this.rt.userIconSelectorListener.bind(this.rt)),
            jQuery("#chat-input-container").on("keydown", this.rt.onChatKeyDown.bind(this.rt)),
            jQuery("#nickname-edit").on("keydown", this.rt.onChatKeyDown.bind(this.rt)),
            jQuery("#chat-input").on("keypress", this.rt.onChatKeyPress.bind(this.rt)),
            jQuery("#chat-input").on("input", this.rt.onInputChange.bind(this.rt)),
            jQuery("#gif-search").on("keyup", this.rt.onGifSearch.bind(this.rt)),
            jQuery("#saveChanges").on("click", this.rt.saveChangesListener.bind(this.rt)),
            jQuery("#cancelNickname").on("click", this.rt.cancelNicknameListener.bind(this.rt)),
            jQuery("#chat-wrapper").on("mouseup", this.rt.cancelEvent),
            jQuery("#chat-wrapper").on("mousedown", this.rt.cancelEvent),
            jQuery("#chat-wrapper").on("pointerup", this.rt.cancelEvent),
            jQuery("#chat-wrapper").on("pointerdown", this.rt.cancelEvent),
            jQuery("#chat-wrapper").on("mousemove", this.rt.cancelEvent),
            jQuery("#chat-wrapper").on("pointermove", this.rt.cancelEvent),
            jQuery("#chat-wrapper").on("keyup", this.rt.onChatKeyUp.bind(this.rt)),
            jQuery("#emoji-picker-btn").on("click", this.rt.addEmojiPicker.bind(this.rt)),
            jQuery("#gif-btn").on("click", this.rt.addGifPicker.bind(this.rt)),
            jQuery(".gif-img").on("click", this.rt.clickGif.bind(this.rt)),
            jQuery(".gif-results").on("click", "video, img", this.rt.clickGif.bind(this.rt)),
            jQuery("#category-container").on("click", "video", this.rt.clickGif.bind(this.rt)),
            jQuery("#gif-input-back").on("click", this.rt.resetGif.bind(this.rt)),
            jQuery("#reaction-btn").on("click", this.rt.addReactionTab.bind(this.rt)),
            jQuery("#chat-input-container").on("click", this.bt.bind(this)),
            jQuery("#chat-input").on("input", this.Dt.bind(this)),
            jQuery("#chat-input").on("drop", this._t.bind(this)),
            jQuery("#gif-results-wrapper").on("scroll", this.rt.onScrollToBottom.bind(this.rt)),
            this.jt(),
            document.addEventListener("keydown", this.ut.bind(this), !0),
            this.rt.initCustomListeners();
        }
        jt() {
          jQuery("#tp-heart-button").on("click", () => {
            this.rt.onReactionClicked(qt.HEART);
          }),
            jQuery("#tp-cry-button").on("click", () => {
              this.rt.onReactionClicked(qt.CRY);
            }),
            jQuery("#tp-angry-button").on("click", () => {
              this.rt.onReactionClicked(qt.ANGRY);
            }),
            jQuery("#tp-surprise-button").on("click", () => {
              this.rt.onReactionClicked(qt.SURPRISE);
            }),
            jQuery("#tp-laugh-button").on("click", () => {
              this.rt.onReactionClicked(qt.LAUGH);
            }),
            jQuery("#tp-fire-button").on("click", () => {
              this.rt.onReactionClicked(qt.FIRE);
            });
        }
        Dt() {
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
        _t(t) {
          t.preventDefault();
        }
        Et(t) {
          t.preventDefault();
        }
        bt(t) {
          t.target === jQuery("#chat-input")[0] && this.rt.focusChat();
        }
        ct(t) {
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
        Bt(t) {
          return "object" == typeof t && null != t && "unicode" in t;
        }
        At(t) {
          if (!Array.isArray(t)) return !1;
          if (0 === t.length) return !1;
          for (let e = 0; e < t.length; e++) {
            const i = t[e];
            if (!this.Bt(i)) return !1;
          }
          return !0;
        }
        updateFrequentlyUsed(t) {
          var e;
          return Zt(this, void 0, void 0, function* () {
            const i = yield Ct.getItemsAsync([F]);
            let n = null !== (e = i.recentlyUsedEmojiMap) && void 0 !== e ? e : m;
            this.At(n) || (n = m),
              Array.isArray(n) &&
                (t && ((n = n.filter((e) => e.unicode != t.unicode)), n.unshift(t), (n = n.slice(0, 24))),
                yield ut.setItemsAsync({ [F]: n }),
                window.postMessage({ type: "TP_FREQ_USED", data: n }, "*"));
          });
        }
        Ct() {
          jQuery(window).off("focus", this.tt),
            document.removeEventListener("emoji-click", this.st),
            document.removeEventListener("keydown", this.ut, !0),
            document.removeEventListener("click", this.ot),
            window.removeEventListener("message", this.nt),
            document.removeEventListener("webkitfullscreenchange", this.rt.onFullScreen),
            document.removeEventListener("fullscreenchange", this.rt.onFullScreen);
        }
        ft() {
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
      class ee {
        constructor(t) {
          (this.rt = t),
            (this.kt = []),
            (this.Qt = 0),
            (this.I = document.title),
            (this.It = 0),
            (this.xt = new Map()),
            (this.St = new Map()),
            (this.Tt = []),
            (this.Mt = []),
            (this.Pt = ""),
            w("Message Controller");
        }
        $t(t, e, i, n) {
          return jQuery(
            `\n            <div class="msg-container ${
              !n && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    <div class="icon">\n                    ${
              n ? `<img src="${et(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                    </div>\n                </div>\n                <div class="msg-txt message${
              i.isSystemMessage ? "-system" : "-txt"
            }">\n                    ${
              n ? `<h3 data-tp-id="chat_history_container-nickname">${e}</h3>` : ""
            }\n                    <p data-tp-id="chat_history_container-message">${et(
              i.body
            ).trim()}</p>\n                </div>\n            </div>\n          `
          );
        }
        Rt(t, e, i, n) {
          const s = 200 / (i.gifObject.media.full.dims[0] / i.gifObject.media.full.dims[1]),
            u = 200 / (i.gifObject.media.fullMobile.dims[0] / i.gifObject.media.fullMobile.dims[1]),
            o = this.rt.shouldUseVideoGIF();
          return jQuery(
            `\n            <div class="msg-container ${
              !n && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    <div class="icon" >\n                    ${
              n ? `<img src="${et(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                    </div>\n                </div>\n                <div class="msg-gif message-gif">\n                    ${
              n ? `<h3 data-tp-id="chat_history_container-nickname">${e}</h3>` : ""
            }  \n            ${
              o
                ? `<video src="${et(
                    i.gifObject.media.full.url
                  )}"  height="${s}" class="tp-video-gif" data-tp-id="chat_history_container-gif" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback>`
                : `<img src="${et(
                    i.gifObject.media.fullMobile.url
                  )}"  height="${u}" class="tp-video-gif" data-tp-id="chat_history_container-gif" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback>`
            }     \n                </div>\n            </div>\n          `
          );
        }
        Gt(t, e, i) {
          return jQuery(
            `\n            <div class="msg ${
              !i && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    ${
              i ? `<img src="${et(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                </div>\n                <div class="message${
              e.isSystemMessage ? "-system" : "-txt"
            }">\n                    <p class="msg-nickname"></p>\n                    <p data-tp-id="chat_history_container-message">${et(
              e.body
            ).trim()}</p>\n                </div>\n            </div>\n        `
          );
        }
        Nt(t, e, i) {
          const n = 200 / (e.gifObject.media.full.dims[0] / e.gifObject.media.full.dims[1]),
            s = 200 / (e.gifObject.media.fullMobile.dims[0] / e.gifObject.media.fullMobile.dims[1]),
            u = this.rt.shouldUseVideoGIF();
          return jQuery(
            `\n            <div class="msg-container ${
              !i && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    <div class="tp-icon-name">\n                    ${
              i ? `<img src="${et(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                    </div>\n                </div>\n                <div class="msg-gif message-gif">\n                    <p class="msg-nickname"></p>\n                    ${
              u
                ? `<video src="${et(
                    e.gifObject.media.full.url
                  )}" data-tp-id="chat_history_container-gif" height="${n}" class = "tp-video-gif" autoplay loop playsinline disablepictureinpicture disableremoteplayback>`
                : `<img src="${et(
                    e.gifObject.media.fullMobile.url
                  )}" data-tp-id="chat_history_container-gif" height="${s}" class = "tp-video-gif" autoplay loop playsinline disablepictureinpicture disableremoteplayback>`
            }\n                </div>\n            </div>\n          `
          );
        }
        Ot(t, e, i, n, s) {
          t.appendTo(jQuery("#chat-history"));
          const u = t[0];
          (u.H = e.permId), (u.Lt = i), (u.Vt = n), (u.Ut = e), (u.Ht = s);
        }
        reloadMessages() {
          this.rt.queueMessageForFrame(It.CLEAR_MESSAGES, "");
          const t = JSON.parse(JSON.stringify(this.kt));
          for (let e = 0; e < t.length; e++) {
            const i = t[e];
            "gifObject" in i ? this.addGif(i, e) : this.addMessage(i, !1, e);
          }
          this.kt = t;
        }
        Wt(t, e) {
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
            (void 0 === i && (i = this.kt.length),
            t.isSystemMessage && "left" === t.body && (console.log("trying to add left message"), !t.userIcon && !this.xt.has(t.permId)))
          )
            return;
          if (0 === i && t.isSystemMessage && t.body.includes("joined")) return;
          e &&
            t.isSystemMessage &&
            t.body.indexOf("updated their user icon") > -1 &&
            (t.userIcon && this.setUserIcon(t.permId, t.userIcon), t.userNickname && this.setUserNickname(t.permId, t.userNickname));
          const n = this.kt.slice(-1).pop(),
            s = !(void 0 !== n && i > 0) || !this.Wt(n, t);
          this.kt.push(t);
          const u = Object.assign({}, t),
            o = this.getUserIconURL(u.permId, u.userIcon),
            r = this.getUserNickname(u.permId, u.userNickname);
          this.rt.queueMessageForFrame(It.ADD_MESSAGE, { originalMessage: u, userIcon: o, userNickname: r });
          const a = "" === r ? this.Gt(o, u, s) : this.$t(o, r, u, s);
          this.Ot(a, u, o, r, s), this.scrollToBottom(), this.zt();
        }
        addGif(t, e) {
          void 0 === e && (e = this.kt.length);
          const i = this.kt.slice(-1).pop(),
            n = !(void 0 !== i && e > 0) || !this.Wt(i, t);
          this.kt.push(t);
          const s = t.userIcon ? this.getUserIconURL(t.permId, t.userIcon) : this.getUserIconURL(t.permId),
            u = t.userNickname ? this.getUserNickname(t.permId, t.userNickname) : "";
          this.rt.queueMessageForFrame(It.ADD_MESSAGE, { originalMessage: t, userIcon: s, userNickname: u });
          const o = "" === u ? this.Nt(s, t, n) : this.Rt(s, u, t, n);
          (o[0].Yt = !0), this.Ot(o, t, s, u, n), x(100)().then(this.scrollToBottom.bind(this)), this.zt();
        }
        scrollToBottom() {
          jQuery("#chat-history").scrollTop(jQuery("#chat-history").prop("scrollHeight"));
        }
        clearUnreadCount() {
          this.Qt > 0 && ((this.Qt = 0), (document.title = this.I));
        }
        zt() {
          (this.Qt += 1), (this.It += 1), document.hasFocus() || (document.title = "(" + String(this.Qt) + ") " + this.I);
        }
        getUserIconURL(t, e = "") {
          if (!this.xt.has(t)) {
            const i = this.parseIconSrc(e),
              n = void 0 !== i ? i : this.Kt();
            this.xt.set(t, n), this.Mt.push(n);
          }
          return this.xt.get(t);
        }
        parseIconSrc(t) {
          const e = t.includes("?newIconUrl=") ? t.split("?newIconUrl=")[1] : t,
            i = t.includes("?newIconUrl=") ? t.split("?newIconUrl=")[0] : t;
          return Z.includes(e)
            ? chrome.runtime.getURL("img/icons/" + t)
            : X.includes(i)
            ? chrome.runtime.getURL("img/icons/General/" + t)
            : void 0;
        }
        getUserNickname(t, e = "") {
          return this.St.has(t) || (this.St.set(t, e), this.Tt.push(e)), et(this.St.get(t));
        }
        Kt() {
          let t = chrome.runtime.getURL("img/icons/General/" + X[Math.floor(Math.random() * X.length)]);
          if (this.Mt.length < tt.General.length)
            for (; this.Mt.includes(t); ) t = chrome.runtime.getURL("img/icons/General/" + X[Math.floor(Math.random() * X.length)]);
          return t;
        }
        Jt(t) {
          const e = t[0],
            i = e.H;
          let n = e.Lt;
          i && this.getUserIconURL(i) !== n && ((n = this.getUserIconURL(i)), t.find("img").attr("src", n), (e.Lt = n));
          const s = e.Vt;
          if (i && n) {
            const u = this.getUserNickname(i);
            if (u !== s) {
              const s = e.Ut,
                o = e.Ht;
              let r;
              if (
                (e.Yt && s && "gifObject" in s && o && (r = "" == u ? this.Nt(n, s, o) : this.Rt(n, u, s, o)),
                !e.Yt && s && "isSystemMessage" in s && o && (r = "" == u ? this.Gt(n, s, o) : this.$t(n, u, s, o)),
                r)
              ) {
                t.replaceWith(r);
                const e = r[0];
                (e.H = i), (e.Lt = n), (e.Vt = u), (e.Ut = s), (e.Ht = o);
              }
            }
          }
        }
        setUserIconUrl(t) {
          (this.Pt = t), this.rt.queueMessageForFrame(It.SET_USER_ICON_URL, t);
        }
        renderSidebar() {
          jQuery("#user-icon img").attr("src", this.Pt), jQuery(".user-icon img").attr("src", this.Pt);
          const t = jQuery(".msg");
          for (let e = 0; e < t.length; e++) this.Jt(jQuery(t[e]));
          const e = jQuery(".msg-container");
          for (let t = 0; t < e.length; t++) this.Jt(jQuery(e[t]));
          this.rt.isChatFrameActive() && this.reloadMessages();
        }
        Xt(t) {
          let e = null;
          if (t)
            if (t.includes("?newIconUrl=")) {
              const i = t.split("?newIconUrl="),
                n = i[1],
                s = i[0];
              Z.includes(n)
                ? (e = chrome.runtime.getURL(`img/icons/${n}`))
                : X.includes(s) && (e = chrome.runtime.getURL(`img/icons/General/${s}`));
            } else
              Z.includes(t)
                ? (e = chrome.runtime.getURL(`img/icons/${t}`))
                : X.includes(t) && (e = chrome.runtime.getURL(`img/icons/General/${t}`));
          if (null === e) {
            let t = tt.General.filter((t) => !this.Mt.includes(t));
            0 === t.length && (t = tt.General);
            const i = t[Math.floor(Math.random() * t.length)];
            e = chrome.runtime.getURL(`/img/icons/General/${i}`);
          }
          return e;
        }
        setUserIcon(t, e) {
          const i = this.Xt(e);
          this.xt.set(t, i), this.Mt.push(i), this.renderSidebar();
        }
        setUserNickname(t, e) {
          const i = et(e);
          this.St.set(t, i), this.Tt.push(i), this.renderSidebar();
        }
        updateUserData(t, e, i) {
          const n = this.Xt(e);
          this.xt.set(t, n), this.Mt.push(n), this.St.set(t, i), this.Tt.push(i), this.renderSidebar();
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
          const t = new s(r, u, {
            name: "review-shown",
            action: { description: "review was shown on chrome", reason: "review was shown." }
          });
          b.l(t);
          const e = { eventType: "review-shown-chrome", sessionId: this.rt.getSessionId() },
            i = new s(r, u, e);
          b.l(i),
            jQuery("#reviewLink").click(() => {
              chrome.storage.local.set({ reviewClicked: !0 });
              const t = new s(r, u, {
                name: "review-clicked",
                action: { description: "review was clicked on chrome", reason: "review was clicked." }
              });
              b.l(t);
              const e = { eventType: "review-clicked-chrome", sessionId: this.rt.getSessionId() },
                i = new s(r, u, e);
              b.l(i);
            });
        }
      }
      class ie {
        constructor(t) {
          (this.qt = !1), (this.Zt = !1), (this.te = !1), (this.rt = t);
        }
        setupPresenceIndicator() {
          (this.qt = !1), (this.Zt = !1), (this.te = !1), this.ee();
        }
        ie() {
          return jQuery("#presence-indicator");
        }
        setTypingPresenceVisible(t) {
          (this.qt = t), this.ee();
        }
        setBufferingPresenceVisible(t) {
          (this.Zt = t), this.ee();
        }
        setWatchingAdsPresenceVisible(t) {
          (this.te = t), this.ee();
        }
        getWatchingAdsVisible() {
          return this.te;
        }
        ne() {
          return this.te
            ? "People are watching ads..."
            : this.qt && this.Zt
            ? "People are typing and buffering..."
            : this.qt
            ? "People are typing..."
            : this.Zt
            ? "People are buffering..."
            : "";
        }
        ee() {
          const t = this.ne();
          this.ie().text(t), this.rt.queueMessageForFrame(It.SET_PRESENCE_MESSAGE, { text: t });
        }
      }
      var ne = function (t, e, i, n) {
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
      var se,
        ue,
        oe = function (t, e, i, n) {
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
      class re extends class {
        constructor() {
          (this.se = !1),
            (this.ue = 1),
            (this.oe = ""),
            (this.re = ""),
            (this.ae = "0"),
            (this.ce = ""),
            (this.De = !0),
            (this.he = !1),
            (this.de = 0),
            (this.le = []),
            (this.pe = new Ft()),
            (this.ge = !1),
            (this.ve = void 0),
            (this.Fe = !0),
            (this.ye = this.fe()),
            (this.Ce = this.fe()),
            (this.we = !1),
            (this.Ee = !1),
            (this.be = []),
            (this.logEvent = (t) => {
              const e = new s(r, u, t);
              b.l(e);
            }),
            (this.checkInitReactionContainer = () => {
              Ct.getItemsAsync([D]).then((t) => {
                (!0 !== t.reactionContainerOpen && void 0 !== t.reactionContainerOpen) || this.showReactionHolder();
              });
            }),
            (this.onSidebarFocus = () => {
              var t;
              null === (t = this._e) || void 0 === t || t.hideMessageIndicator();
            }),
            (this.setReactionsActive = (t) => {
              this.pe.pushTask(() => ut.setItemsAsync({ [D]: t.active }));
            }),
            (this.onFullScreen = () => {
              var t;
              this.scrollToBottom(),
                document.fullscreenElement || document.webkitIsFullScreen
                  ? this.logEvent({ name: "fullscreen_enter" })
                  : this.logEvent({ name: "fullscreen_exit" }),
                null === (t = this._e) || void 0 === t || t.setChatButtons();
            }),
            (this.cancelEvent = (t) => {
              t.stopPropagation();
            }),
            (this.F = !1),
            (this.je = new te(this)),
            (this.Be = new ie(this)),
            (this.Ae = new ee(this)),
            (this.ke = void 0),
            (this.Qe = void 0),
            (this.Ie = !1);
        }
        setPageControls(t) {
          this._e = t;
        }
        fixPageControls() {
          var t, e;
          null === (t = this._e) || void 0 === t || t.enablePartyIcons(), null === (e = this._e) || void 0 === e || e.setChatButtons();
        }
        setChatVisible(t, e = !0) {
          return ne(this, void 0, void 0, function* () {
            if (this.isPartyWindowsActive()) throw new Error("Invalid Set Chat");
            e && (this.De = t), t && !this.xe() && this.reloadChat();
          });
        }
        Se(t, e) {
          const i = new s(r, u, { name: "error", action: { reason: e, description: t } });
          b.l(i);
        }
        getChatWindowVisible() {
          return this.Ce;
        }
        setChatWindowActive(t) {
          this.ye = t;
        }
        isChatFrameActive() {
          return this.Fe;
        }
        isPartyWindowsActive() {
          return this.ye;
        }
        shouldChatBeVisible() {
          return this.De;
        }
        incrementEmojiCount() {
          this.de++;
        }
        resetEmojiCount() {
          this.de = 0;
        }
        getEmojiCount() {
          return this.de;
        }
        setChatFrameReady(t) {
          this.ge && this.Te(), (this.ge = !0), (this.Me = t), console.log("setChatFrameReady");
        }
        queueMessageForFrame(t, e) {
          this.pe.pushTask(() =>
            ne(this, void 0, void 0, function* () {
              this.Pe(t, e);
            })
          );
        }
        Pe(t, e) {
          return ne(this, void 0, void 0, function* () {
            const i = this.Me,
              n = { type: t, data: e, target: "TP_Sidebar", tabId: i, sender: r };
            b.l(n);
          });
        }
        $e() {
          var t;
          return ne(this, void 0, void 0, function* () {
            try {
              console.log("Start delay"),
                yield S(() => this.ge && null != this.Me, 3e4)(),
                console.log("Chat Frame is Loaded"),
                this.ve && this.Re(this.ve),
                null === (t = this._e) || void 0 === t || t.setResetChatButton();
            } catch (t) {
              this.Se("Sidewindow didn't load in time", t);
            }
          });
        }
        fe() {
          return window.origin.includes(".crunchyroll.com"), window.origin.includes("tv.apple.com"), !1;
        }
        Ge() {
          return ne(this, void 0, void 0, function* () {
            yield b.l(new e(r, u, n.LOAD_CHAT_WINDOW)), console.log(this.Me);
          });
        }
        resetChatWindow(t = !1) {
          var i;
          return ne(this, void 0, void 0, function* () {
            yield b.l(new e(r, u, n.RESET_CHAT_WINDOW)),
              console.log(this.Me),
              (this.Ce = !0),
              (this.De = !0),
              top.postMessage({ type: "exitFullscreen" }, "*"),
              this.we && t && (this.resetIconListener(), null === (i = this._e) || void 0 === i || i.setResetChatButton());
          });
        }
        hideChatWindow() {
          return ne(this, void 0, void 0, function* () {
            yield b.l(new e(r, u, n.HIDE_CHAT_WINDOW)), (this.Ce = !1), (this.De = !1);
          });
        }
        Ne() {
          return ne(this, void 0, void 0, function* () {
            this.Ge(), this.pe.pushTask(this.$e.bind(this));
          });
        }
        loadInitData(t) {
          this.ve = t;
        }
        Re(t) {
          var e;
          return ne(this, void 0, void 0, function* () {
            const i = Object.assign({}, t);
            if (((i.iconMap = tt), (i.extensionBaseUrl = chrome.runtime.getURL("")), i.storageData)) {
              const t = yield $t.getValidatedChromeStorageDataAsync();
              i.storageData = t;
            }
            this.queueMessageForFrame(It.LOAD_INIT_DATA, i);
            const n = yield this.getVideoTitle();
            this.queueMessageForFrame(It.SET_PAGE_TITLE, { pageTitle: n }),
              this.queueMessageForFrame(It.SET_USER_LIST, this.be),
              this.queueMessageForFrame(It.UPDATE_SETTINGS, {
                userSettings: null === (e = this.Oe) || void 0 === e ? void 0 : e.userSettings
              });
          });
        }
        Te() {
          return ne(this, void 0, void 0, function* () {
            if ((console.log("Reloading chat Frame"), this.ve && (yield this.Re(this.ve)), this.Oe)) {
              const t = this.Ae.getUserIconURL(this.Oe.permId, this.Oe.userIcon);
              this.queueMessageForFrame(It.SET_USER_ICON_URL, t);
            }
            const t = yield this.getVideoTitle();
            this.queueMessageForFrame(It.SET_PAGE_TITLE, { pageTitle: t }), this.reloadMessages();
          });
        }
        Le() {
          return ne(this, void 0, void 0, function* () {
            this.Ve(),
              yield x(200)(),
              (jQuery("#tpChatFrame")[0].style.display = "block"),
              this.setChatVisible(!0),
              this.addIconSelector(),
              this.Ue(),
              this.Be.setupPresenceIndicator(),
              this.checkInitReactionContainer();
          });
        }
        He(t) {
          this.je.initWindowListeners(), this.fe() && this.Ne(), this.pe.pushTask(this.$e.bind(this)), zt(), (this.Oe = new at(t));
          const e = this.Ae.getUserIconURL(this.Oe.permId, this.Oe.userIcon);
          this.Ae.setUserIconUrl(e),
            this.Ae.renderSidebar(),
            this.xe() && this.removeChat(),
            (this.F = !0),
            this.We(),
            this.fe()
              ? jQuery("body").after(
                  `\n    <link rel="stylesheet" href="${chrome.runtime.getURL(
                    "css/alert.css"
                  )}">\n    <style tpInjected>\n      .on-screen-reaction {\n        position: absolute;\n        bottom: 0;\n        font-size: 100px;\n        z-index: 9999999999;\n      }\n      .on-screen-reaction-1 {\n        animation: 5s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-1;\n      }\n      .on-screen-reaction-2 {\n        animation: 6s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-2;\n      }\n      .on-screen-reaction-3 {\n        animation: 7s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-3;\n      }\n      @keyframes on-screen-reaction-slide {\n        0% {\n          opacity: 0;\n          transform: translateY(calc(0 - var(--reaction-size)));\n        }\n        20% {\n          opacity: 0.8;\n        }\n        30% {\n          opacity: 0.8;\n        }\n        90% {\n          opacity: 0;\n        }\n        100% {\n          transform: translateY(-100vh) translateX(-10px);\n          opacity: 0;\n        }\n      }\n      @keyframes on-screen-reaction-1 {\n        10% {\n          margin-left: -6px;\n        }\n        25% {\n          margin-left: 4px;\n        }\n        30% {\n          margin-left: -5px;\n        }\n        45% {\n          margin-left: 5px;\n        }\n        55% {\n          margin-left: -3px;\n        }\n        60% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        85% {\n          margin-left: 5px;\n        }\n        90% {\n          margin-left: -7px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n      @keyframes on-screen-reaction-2 {\n        15% {\n          margin-left: -2px;\n        }\n        20% {\n          margin-left: 5px;\n        }\n        35% {\n          margin-left: -6px;\n        }\n        40% {\n          margin-left: 5px;\n        }\n        50% {\n          margin-left: -5px;\n        }\n        65% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        80% {\n          margin-left: 4px;\n        }\n        95% {\n          margin-left: -5px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n      @keyframes on-screen-reaction-3 {\n        15% {\n          margin-left: -4px;\n        }\n        20% {\n          margin-left: 5px;\n        }\n        35% {\n          margin-left: -2px;\n        }\n        40% {\n          margin-left: 5px;\n        }\n        50% {\n          margin-left: -3px;\n        }\n        65% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        80% {\n          margin-left: 5px;\n        }\n        95% {\n          margin-left: -4px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n    </style>\n  `
                )
              : (this.Le(), this.checkAddYoutubePromo());
        }
        checkAddYoutubePromo() {
          return ne(this, void 0, void 0, function* () {
            "true" !== (yield Ct.getItemsAsync(["seenYoutubePromo"])).seenYoutubePromo &&
              (this.Ae.addYoutubePromo(), ut.setItemsAsync({ seenYoutubePromo: "true" }));
          });
        }
        sendInitDataToSidebar(t) {
          this.ve = t;
          const e = Object.assign({}, t);
          (e.iconMap = tt),
            (e.extensionBaseUrl = chrome.runtime.getURL("")),
            console.log(e),
            this.queueMessageForFrame(It.LOAD_INIT_DATA, e);
        }
        reloadChat() {
          return ne(this, void 0, void 0, function* () {
            console.log("Reload chat"),
              this.xe() ||
                this.isPartyWindowsActive() ||
                (this.Ve(),
                yield x(200)(),
                (jQuery("#tpChatFrame")[0].style.display = "block"),
                this.setChatVisible(this.De),
                this.addIconSelector(),
                this.ze(),
                this.Ue(),
                this.Be.setupPresenceIndicator(),
                this.reloadMessages(),
                this.scrollToBottom(),
                this.checkInitReactionContainer());
          });
        }
        sendTeardown(t) {
          const e = new lt(r, u, t);
          b.l(e);
        }
        xe() {
          return jQuery("#chat-wrapper").length > 0;
        }
        clearUnreadCount() {
          this.Ae.clearUnreadCount();
        }
        Ye() {
          return ne(this, void 0, void 0, function* () {
            try {
              yield S(() => null !== document.querySelector("#chat-history") || this.ye || (this.ge && this.Fe), 1e4)();
            } catch (t) {
              this.Se("Failed to find chat history", t);
            }
          });
        }
        addMessage(t, e = !1) {
          this.pe.pushTask(() =>
            ne(this, void 0, void 0, function* () {
              yield this.Ye(), this.Ae.addMessage(t, e);
            })
          );
        }
        addGif(t) {
          this.pe.pushTask(() =>
            ne(this, void 0, void 0, function* () {
              yield this.Ye(), this.Ae.addGif(t);
            })
          );
        }
        reloadMessages() {
          this.Ae.reloadMessages();
        }
        scrollToBottom() {
          this.Ae.scrollToBottom();
        }
        addReviewMessage() {
          this.Ae.addReviewMessage(), (this.Ie = !0);
        }
        get showingReveiwMessage() {
          return this.Ie;
        }
        set shouldReturnToVideo(t) {
          this.we = t;
        }
        onBufferingMessage(t) {
          this.pe.pushTask(() =>
            ne(this, void 0, void 0, function* () {
              yield this.Ye(), this.Be.setBufferingPresenceVisible(t.usersBuffering.length > 0);
            })
          );
        }
        onTypingMessage(t) {
          this.pe.pushTask(() =>
            ne(this, void 0, void 0, function* () {
              yield this.Ye(), this.Be.setTypingPresenceVisible(t.usersTyping.length > 0);
            })
          );
        }
        onWatchingAdsMessage(t) {
          this.pe.pushTask(() =>
            ne(this, void 0, void 0, function* () {
              console.log("Set Ad Presence: " + t), yield this.Ye(), this.Be.setWatchingAdsPresenceVisible(t.usersWatchingAds.length > 0);
            })
          );
        }
        getWatchingAds() {
          return this.Be.getWatchingAdsVisible();
        }
        doUpdateSettings(t) {
          var e;
          null === (e = this.Oe) || void 0 === e || e.saveUserSettings(t), t.shouldBroadcast && this.Ke(this.Je(t));
        }
        onUpdateSettingsMessage(t) {
          if ((this.Ae.updateUserData(t.permId, t.userSettings.userIcon, t.userSettings.userNickname), this.Oe)) {
            const t = this.Ae.getUserIconURL(this.Oe.permId, this.Oe.userIcon);
            this.Ae.setUserIconUrl(t), this.Ae.renderSidebar();
          }
        }
        Ue() {
          S(() => this.xe(), 1e4)().then(() => {
            this.je.startListening();
          });
        }
        ze() {
          this.je.stopListening(), this.Xe && (clearTimeout(this.Xe), (this.he = !1));
        }
        teardown() {
          (this.F = !1),
            (this.re = void 0),
            (this.qe = void 0),
            this.ze(),
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
            this.pe.pushTask(() => ut.setItemsAsync({ [D]: !1 }));
        }
        onOpenGifPicker() {
          var t, e;
          return ne(this, void 0, void 0, function* () {
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
              t ? this.hideReactionHolder() : this.showReactionHolder(), !t && e && this.Ae.scrollToBottom();
            });
        }
        onVideoClick() {
          this.queueMessageForFrame(It.ON_PAGE_CLICK);
        }
        toggleGIFs() {
          jQuery("#gif-picker-container").slideToggle(0, () => {
            jQuery("#gif-picker-container").is(":hidden") ? this.onCloseGifPicker() : this.onOpenGifPicker();
          });
        }
        addEmojiPicker(t) {
          t.stopPropagation();
          const e = new s(r, u, {
            name: "user_click",
            component: { name: "chat_input_container-emoji_picker", type: "button", origin: "tp" }
          });
          b.l(e), this.toggleEmojiClicker();
        }
        addGifPicker(t) {
          t.stopPropagation();
          const e = new s(r, u, {
            name: "user_click",
            component: { name: "chat_input_container-gif_popup", type: "button", origin: "tp" }
          });
          b.l(e), this.toggleGIFs();
        }
        addReactionTab(t) {
          t.stopPropagation();
          const e = new s(r, u, {
            name: "user_click",
            component: { name: "chat_input_container-reaction_pinner", type: "button", origin: "tp" }
          });
          b.l(e), this.toggleReactions();
        }
        We() {
          if (
            (w("Set Chat Html called"),
            (this.Ze = J()),
            (this.Ze = this.Ze.replace(/{EXTENSION_LOGO}/g, et(chrome.runtime.getURL("img/tp_logo.svg")))),
            void 0 === this.Oe)
          )
            throw new Error("Attempt to set chatHtml when _userSettings is undefined.");
          const t = chrome.runtime.getURL("");
          this.Ze = this.Ze.replace(/{CHAT_URL}/g, `${p}?t=${Date.now()}&id=${encodeURIComponent(t.substring(0, t.length - 1))}`);
          for (const t of g) {
            const e = new RegExp(`${t}_STATIC`.toUpperCase(), "g"),
              i = new RegExp(`${t}_GIF`.toUpperCase(), "g");
            (this.Ze = this.Ze.replace(e, chrome.runtime.getURL(`img/reactions/${t}/${t}_static.svg`))),
              (this.Ze = this.Ze.replace(i, chrome.runtime.getURL(`img/reactions/${t}/${t}.gif`)));
          }
          (this.Ze = this.Ze.replace(/{USER_NICKNAME}/g, this.Oe.userNickname ? et(this.Oe.userNickname) : "Add a nickname")),
            (this.Ze = this.Ze.replace(/{USER_ICON}/g, this.Ae.getUserIconURL(this.Oe.permId, this.Oe.userIcon))),
            (this.Ze = this.Ze.replace(/{LINK_SVG}/g, chrome.runtime.getURL("img/icon_link_active.svg"))),
            (this.Ze = this.Ze.replace(/{RESET_SGV}/g, chrome.runtime.getURL("img/reset_chat.svg"))),
            (this.Ze = this.Ze.replace(/{EMOJI_PICKER_ICON}/g, chrome.runtime.getURL("img/emoji_picker.svg"))),
            (this.Ze = this.Ze.replace(/{REACTION_PICKER_ICON}/g, chrome.runtime.getURL("img/reaction-popup.svg"))),
            (this.Ze = this.Ze.replace(/{GIF_PICKER_ICON}/g, chrome.runtime.getURL("img/gif_icon.svg"))),
            (this.Ze = this.Ze.replace(/{GIF_BACK_BUTTON}/g, chrome.runtime.getURL("img/icon_chevron.svg"))),
            (this.Ze = this.Ze.replace(/{EMOJI_LIB}/g, chrome.runtime.getURL("lib/tp_emoji/picker_bundled.js"))),
            (this.Ze = this.Ze.replace(/{EMOJI_FRAME}/g, chrome.runtime.getURL("web/emojiPicker.html"))),
            (this.Ze = this.Ze.replace(/{X_CIRCLE}/g, chrome.runtime.getURL("img/x-circle.svg")));
        }
        toggleIconContainer() {
          var t, e, i, n;
          jQuery("#chat-icon-container").data("active")
            ? (jQuery("#chat-icon-container").data("active", !1),
              jQuery("#chat-icon-container").slideUp(),
              jQuery(".chat-settings-container").slideUp(),
              jQuery("#sidebar-tabs-container").slideDown(),
              this.Ee ? jQuery("#chat-history-container").slideDown() : jQuery("#chat-friends-frame").slideDown(),
              this.he && jQuery("#chat-ad-holder").show(),
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
                null !== (e = null === (t = this.Oe) || void 0 === t ? void 0 : t.userNickname) && void 0 !== e ? e : ""
              ),
              (jQuery("#nickname-edit")[0].value =
                null !== (n = null === (i = this.Oe) || void 0 === i ? void 0 : i.userNickname) && void 0 !== n ? n : ""));
        }
        togglePartyTab() {
          jQuery("#friends-tab").toggleClass("sidebar-tab-inactive", !0),
            jQuery("#party-tab").toggleClass("sidebar-tab-inactive", !1),
            jQuery("#chat-history-container").show(),
            jQuery("#chat-friends-frame").slideUp(),
            jQuery("#chat-input-container").show(),
            (this.Ee = !0);
        }
        toggleFriendsTab() {
          jQuery("#friends-tab").toggleClass("sidebar-tab-inactive", !1),
            jQuery("#party-tab").toggleClass("sidebar-tab-inactive", !0),
            jQuery("#chat-friends-frame").removeClass("hidden"),
            jQuery("#chat-friends-frame").slideDown(),
            jQuery("#chat-history-container").slideUp(),
            jQuery("#chat-input-container").hide(),
            (this.Ee = !1);
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
          if (null === (t = this.ti) || void 0 === t ? void 0 : t.videoId) {
            const t = new CustomEvent("YoutubeVideoMessage", { detail: { type: "jumpToNextEpisode", nextVideoId: this.ti.videoId } });
            window.dispatchEvent(t);
          }
        }
        setPartyUrl(t) {
          this.oe = t;
        }
        setMessageForwarder(t) {
          this.ti = t;
        }
        setSessionId(t) {
          this.re = t;
        }
        onWebRTC(t) {
          this.queueMessageForFrame(It.ON_WEB_RTC, t);
        }
        setSocketConnectionId(t) {
          this.queueMessageForFrame(It.SET_CONNECTION_ID, t);
        }
        loadUserList(t) {
          t.forEach((t) => {
            if (void 0 !== t.userSettings && void 0 !== t.permId) {
              const e = t.userSettings,
                i = this.Ae.getUserIconURL(t.permId, e.userIcon),
                n = this.Ae.getUserNickname(t.permId, e.userNickname);
              t.parsedData = { userIconUrl: i, userNickname: n };
            }
          }),
            (this.be = t),
            jQuery("#user-count").text(t.length),
            this.queueMessageForFrame(It.SET_USER_LIST, t);
        }
        setSessionCreated(t) {
          this.qe = t;
        }
        getSessionCreated() {
          return this.qe;
        }
        getSessionId() {
          return this.re;
        }
        getPartyUrl() {
          return this.oe;
        }
        userIconSelectorListener(t) {
          const e = jQuery(t.currentTarget).data("icon");
          e &&
            (w("userIconSelector button clicked: " + e),
            this.Oe &&
              (this.Oe.saveUserIcon(e),
              this.queueMessageForFrame(It.UPDATE_SETTINGS, { userSettings: this.Oe.userSettings }),
              this.Ke(this.Je(this.Oe.userSettings)))),
            this.toggleIconContainer();
        }
        removeChat() {
          this.clearUnreadCount(), jQuery("#chat-container").remove(), jQuery("#chat-wrapper").remove();
        }
        Ke(t, e) {
          b.l(t).then(e);
        }
        ei(t) {
          return new pt(r, u, { reactionType: t });
        }
        ii(t) {
          return new gt(r, u, { gifObject: t });
        }
        ni(t) {
          return new ht(r, u, { body: t });
        }
        si(t) {
          return new Dt(r, u, { typing: t });
        }
        Je(t) {
          return new dt(r, u, { userSettings: t });
        }
        ui(t) {
          return chrome.runtime.getURL(`img/reactions/${t}/${t}.gif`);
        }
        showReaction(t) {
          if (!this.shouldShowReaction()) return;
          const e = t.reactionType,
            i = this.getReactionContainer();
          if (i) {
            const t = Math.floor(40 * Math.random()) + 40,
              n = i[0].offsetWidth - (this.shouldAddReactionSpace() ? 340 : 0) - t,
              s = Math.floor(Math.random() * n) + (this.shouldAddReactionSpace() ? 340 : 0),
              u = this.ui(e),
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
          console.log(t), this.Ke(this.ei(t));
          const e = new s(r, u, {
            name: "user_click",
            component: { name: "chat_input_container-reaction_holder-reaction", type: t, origin: "tp" }
          });
          b.l(e);
          const i = new s(r, u, { eventType: "reaction-" + t, sessionId: this.getSessionId() });
          b.l(i);
        }
        onChatKeyUp(t) {
          t.stopPropagation();
        }
        onChatKeyDown(t) {
          t.stopPropagation(), this.je.resetIdleTimer();
        }
        initCustomListeners() {}
        getClientLocale() {
          if ("undefined" != typeof Intl)
            try {
              return Intl.NumberFormat().resolvedOptions().locale;
            } catch (t) {
              console.error("Cannot get locale from Intl"), this.Se("Cannot get locale from Intl", t);
            }
        }
        clickGif(t) {
          console.log("GIF was clicked");
          let e = t.target.id;
          if (isNaN(e)) (e = "trending" === e ? "" : e), this.fetchGIFs(e), (jQuery("#gif-search")[0].value = e);
          else {
            const t = this.le.find((t) => t.id === e);
            if (!t) return;
            const i = { id: t.id, title: t.title, description: t.content_description, isSticker: !1, media: t.media };
            this.Ke(this.ii(i), () => {
              this.logShare(t.id, jQuery("#gif-search")[0].value);
              const e = {
                  name: "user_click",
                  action: { description: "gif clicked", source: t.media.full.url },
                  component: { name: "chat_input_container-gif_popup-gif", type: "video", origin: "tp" }
                },
                i = new s(r, u, e);
              b.l(i);
              const n = new s(r, u, { eventType: "gif-share", sessionId: this.getSessionId() });
              b.l(n);
            }),
              this.toggleGIFs();
          }
        }
        oi(t) {
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
        ri(t) {
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
            this.le.push(...t.results),
            (this.ae = t.next),
            t.results.forEach((t) => {
              const e = this.shouldUseVideoGIF() ? this.oi(t) : this.ri(t);
              (jQuery("#gif-results-left")[0].scrollHeight > jQuery("#gif-results-right")[0].scrollHeight
                ? jQuery("#gif-results-right")[0]
                : jQuery("#gif-results-left")[0]
              ).appendChild(e);
            }),
            this.ue < 6 && this.ai(),
            setTimeout(() => {
              this.se = !1;
            }, 100);
        }
        onScrollToBottom(t) {
          return ne(this, void 0, void 0, function* () {
            const e = t.target.scrollHeight - t.target.scrollTop <= t.target.clientHeight + 450;
            if (this.se) t.preventDefault();
            else if ("0" !== this.ae && e && this.ue < 6) {
              (this.ue += 1), (this.se = !0), t.preventDefault();
              const e = yield fetch(this.ce + `&pos=${this.ae}`),
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
        ci() {
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
        ai() {
          return ne(this, void 0, void 0, function* () {
            jQuery("#gif-results-left")[0].append(...this.ci()), jQuery("#gif-results-right")[0].append(...this.ci());
          });
        }
        logShare(t, e) {
          return ne(this, void 0, void 0, function* () {
            const i = this.getClientLocale(),
              n = i ? `&locale=${i}` : "",
              s = `&id=${t}`,
              u = e && e.length > 0 ? `q=${e}` : "";
            yield fetch(`${h}/register-share?${u}${n}${s}`);
          });
        }
        fetchGIFs(t) {
          return ne(this, void 0, void 0, function* () {
            const e = yield this.getVideoTitle(),
              i = null == e ? void 0 : e.replace(/[^\w\s]/g, "");
            (this.ue = 1),
              (this.se = !0),
              jQuery("#category-container").hide(),
              jQuery("#gif-columns-wrapper").show(),
              (jQuery("#gif-results-left")[0].innerHTML = ""),
              (jQuery("#gif-results-right")[0].innerHTML = ""),
              (this.le = []),
              this.ai();
            const n = this.getClientLocale(),
              s = n ? `&locale=${n}` : "";
            let u = i ? `search-gifs?q=${i}` : "trending-gifs?";
            (u = t ? `search-gifs?q=${t}` : u), (this.ce = `${h}/${u}${s}`);
            const o = yield fetch(`${h}/${u}${s}`),
              r = yield o.json();
            if (r.results && r.results.length > 0) this.loadGIFs(r);
            else if (!t) {
              const t = yield fetch(`${h}/trending_gifs?${s}`);
              this.ce = `${h}/trending_gifs?${s}`;
              const e = yield t.json();
              this.loadGIFs(e);
            }
          });
        }
        onGifSearch(t) {
          t.stopPropagation();
          const e = t.target.value;
          if ((void 0 !== this.Qe && clearTimeout(this.Qe), !e))
            return jQuery("#gif-input-back").hide(), jQuery("#gif-search").css("width", ""), void this.fetchGIFs();
          jQuery("#gif-input-back").show(),
            jQuery("#gif-search").css("width", "90%"),
            (this.Qe = setTimeout(() => {
              this.fetchGIFs(e);
            }, 500));
        }
        Di(t) {
          return "string" == typeof t && "" !== t.replace(/^\s+|\s+$/g, "");
        }
        onChatKeyPress(t) {
          if ((t.stopPropagation(), "Enter" !== t.key || t.shiftKey))
            void 0 === this.ke ? this.Ke(this.si(!0)) : clearTimeout(this.ke),
              (this.ke = setTimeout(() => {
                (this.ke = void 0), this.Ke(this.si(!1));
              }, 500));
          else {
            jQuery("#emoji-picker-container").is(":hidden") || this.toggleEmojiClicker();
            const e = jQuery("#chat-input"),
              i = e[0].textContent;
            if (i && this.Di(i)) {
              void 0 !== this.ke && (clearTimeout(this.ke), (this.ke = void 0), this.Ke(this.si(!1))),
                e.prop("contenteditable", !1),
                this.Ke(this.ni(i.substring(0, 1500)), () => {
                  (e[0].textContent = ""), e.prop("contenteditable", !0), this.focusChat(), this.onInputChange();
                });
              const t = {
                  name: "chat_send",
                  action: { description: "message was sent" },
                  message: {
                    id: (function () {
                      try {
                        return Qt();
                      } catch (t) {
                        return "";
                      }
                    })(),
                    text: i.trim()
                  }
                },
                n = new s(r, u, t);
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
          const e = t.replace(C, "").replace(/[\uFE0F]/g, ""),
            i = ((t || "").match(C) || []).length;
          return 0 === e.length && i <= 3 && i > 0;
        }
        saveChangesListener() {
          var t;
          const e = jQuery("#nickname-edit")
            .val()
            .slice(0, 25)
            .replace(/^\s+|\s+$/g, "");
          w("saveChanges button clicked: " + e),
            e !== (null === (t = this.Oe) || void 0 === t ? void 0 : t.userNickname) &&
              this.Oe &&
              (this.Oe.saveUserNickname(e),
              this.queueMessageForFrame(It.UPDATE_SETTINGS, { userSettings: this.Oe.userSettings }),
              this.Ke(this.Je(this.Oe.userSettings)),
              jQuery("#nickname-edit").attr("placeholder", e),
              jQuery("#nickname-edit").text(e)),
            this.toggleIconContainer();
        }
        cancelNicknameListener() {
          this.toggleIconContainer();
        }
        get inSession() {
          return this.F;
        }
        addIconSelector() {
          Object.keys(tt).forEach((t) => {
            if (it[t]()) {
              const e = tt[t],
                i = jQuery('\n                <ul id="icon-holder"></ul>\n            ');
              for (const n of e) this.hi(`${t}/${n}`, i, n);
              const n = jQuery(
                `\n                <div class="icon-holder-wrap">\n                  <p class="extension-txt-indicator" data-tp-id="chat_container-new_icon_selection-category_name>${t}</p>\n                </div>\n            `
              );
              i.appendTo(n), n.appendTo(jQuery("#icon-holder-template"));
            }
          }, this);
        }
        inputHeightCheck() {
          const t = jQuery("#chat-input").text(),
            e = ((t || "").match(C) || []).length,
            i = t.replace(C, "");
          e <= 3 || i
            ? jQuery(".inTextEmoji").css("font-size", "24px")
            : e > 0
            ? jQuery(".inTextEmoji").css("font-size", "20px")
            : jQuery(".inTextEmoji").css("font-size", "18px");
        }
        hi(t, e, i) {
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
            (this.di = !0),
            (this.li = !1),
            (this.pi = 0),
            (this.gi = 0),
            (this.vi = "forward"),
            (this.onClick = (t) => {
              t.target === jQuery("#chat-input")[0] || t.target === jQuery("#nickname-edit")[0] || t.target === jQuery("#gif-search")[0]
                ? (this.Fi(), (this.di = !0), t.target === jQuery("#gif-search")[0] ? (this.li = !0) : (this.li = !1))
                : ((this.di = !1), (this.li = !1));
            }),
            (this.yi = t);
        }
        shouldShowReaction() {
          return !0;
        }
        shouldUseVideoGIF() {
          return !0;
        }
        shouldAddReactionSpace() {
          return !1;
        }
        getVideoTitle() {
          return oe(this, void 0, void 0, function* () {
            return yield this.yi.waitUpdatePageTitleAsync(), this.yi.pageTitle;
          });
        }
        onBlur() {
          if (this.di)
            if (jQuery("#nickname-edit").is(":visible")) {
              const t = jQuery("#nickname-edit")[0];
              t && t.focus();
            } else if (jQuery("#gif-search").is(":visible") && this.li) {
              const t = jQuery("#gif-search")[0];
              t && t.focus();
            } else {
              const t = jQuery("#chat-input")[0];
              t && t.focus();
            }
        }
        Fi() {
          var t, e, i;
          const n = jQuery("#chat-input")[0];
          (this.pi = null !== (t = n.selectionStart) && void 0 !== t ? t : 0),
            (this.gi = null !== (e = n.selectionEnd) && void 0 !== e ? e : 0),
            (this.vi = null !== (i = n.selectionDirection) && void 0 !== i ? i : "forward");
        }
        initCustomListeners() {
          console.log("Init Custom Listeners"),
            jQuery("#chat-input").on("blur", this.onBlur.bind(this)),
            jQuery("#nickname-edit").on("blur", this.onBlur.bind(this)),
            jQuery("#gif-search").on("blur", this.onBlur.bind(this)),
            window.addEventListener("click", this.onClick.bind(this)),
            jQuery("#chat-input").on("select", () => {
              this.Fi();
            }),
            jQuery("#chat-input").on("keyup", () => {
              this.Fi();
            }),
            window.addEventListener("mousedown", this.onClick, !0);
        }
        removeCustomListeners() {
          window.removeEventListener("mousedown", this.onClick, !0);
        }
        onChatKeyDown(t) {
          super.onChatKeyDown(t),
            (this.di = !0),
            document.querySelector("[data-uia='controls-standard']") &&
              (console.log("Keep active"), window.postMessage({ type: "ShowControls" }, "*"));
        }
        getReactionContainer() {
          return jQuery(".watch-video--player-view");
        }
        Ve() {
          if (this.Ze) {
            const t = jQuery(".sizing-wrapper"),
              e = jQuery(".watch-video--player-view");
            if (t.length > 0) (this.fi = t), this.fi.after(Yt(this.Ze));
            else {
              if (!(e.length > 0)) {
                const t = { showAlert: !0, alertModal: Ut, buttonUrl: "https://www.netflix.com/donottest" };
                return (
                  document.body.after(`\n    <link rel="stylesheet" href="${chrome.runtime.getURL("css/alert.css")}">\n  `),
                  void this.sendTeardown(t)
                );
              }
              (this.fi = e), this.fi.append(Yt(this.Ze));
            }
            this.fi.addClass(St), this.fi.addClass(Tt);
          }
          this.mi();
        }
        mi() {
          const t = jQuery("[dir='rtl']");
          t.length && t.attr("dir", "ltr");
        }
        removeChat() {
          var t, e;
          super.removeChat(),
            null === (t = this.fi) || void 0 === t || t.removeClass(St),
            null === (e = this.fi) || void 0 === e || e.removeClass(Tt);
        }
        getChatVisible() {
          var t, e;
          return null !== (e = null === (t = this.fi) || void 0 === t ? void 0 : t.hasClass(St)) && void 0 !== e && e;
        }
        setChatVisible(t, e = !0) {
          const i = Object.create(null, { setChatVisible: { get: () => super.setChatVisible } });
          var n, s;
          return oe(this, void 0, void 0, function* () {
            try {
              yield i.setChatVisible.call(this, t, e);
            } catch (t) {
              return void window.dispatchEvent(new Event("resize"));
            }
            if ((this.mi(), t)) {
              jQuery("#chat-wrapper").length || this.isPartyWindowsActive() || this.reloadChat(),
                null === (n = this.fi) || void 0 === n || n.addClass(St),
                jQuery("#chat-wrapper").show(),
                document.hasFocus() || this.clearUnreadCount();
            } else jQuery("#chat-wrapper").hide(), null === (s = this.fi) || void 0 === s || s.removeClass(St);
            yield x(400)(), window.dispatchEvent(new Event("resize"));
          });
        }
      }
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
      })(se || (se = {}));
      class ae extends ct {
        constructor(t, e, i) {
          super(t, e, ot.GET_SESSION_DATA), (this.data = i);
        }
      }
      class ce {
        constructor() {
          (this.Ci = this.wi.bind(this)), (this.Ei = []), this.bi();
        }
        addMessageListener(t) {
          this.Ei.push(t);
        }
        removeMessageListener(t) {
          this.Ei = this.Ei.filter((t) => {});
        }
        bi() {
          b.addListener(this.Ci);
        }
        teardown() {
          (this.Ei = []), b.removeListener(this.Ci);
        }
        wi(t, e, i) {
          if (!this._i(t)) return !1;
          return !!this.ji(t, e, i) || (i({}), !1);
        }
        _i(t) {
          return t.target === r;
        }
        ji(t, e, i) {
          let n = !1;
          return (
            this.Ei.forEach((s) => {
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
      })(ue || (ue = {}));
      var De,
        he = function (t, e, i, n) {
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
      class de {
        constructor(t, e) {
          (this.rt = t), (this._e = e), w("Chat forwarder");
        }
        onMessage(t, e, i) {
          var s;
          switch (t.type) {
            case n.LOAD_SESSION: {
              const e = t;
              return this.Bi(e.data), !1;
            }
            case ue.ON_MESSAGE: {
              const e = t;
              return this.nt(e), this._e.onChatMessage(), !1;
            }
            case ue.ON_BUFFER: {
              const e = t;
              return this.Ai(e), !1;
            }
            case ue.ON_TYPING: {
              const e = t;
              return this.ki(e), !1;
            }
            case ue.ON_WATCHING_ADS: {
              const e = t;
              return this.Qi(e), !1;
            }
            case ue.UPDATE_SETTINGS: {
              const e = t;
              return this.Ii(e), !1;
            }
            case ue.ON_REACTION: {
              const e = t;
              return this.xi(e), !1;
            }
            case ue.ON_GIF: {
              const e = t;
              return this.Si(e), !1;
            }
            case ue.USER_LIST: {
              const e = t;
              return this.Ti(e), !1;
            }
            case ue.ON_WEB_RTC:
              return this.rt.onWebRTC(t.data), !0;
            case se.SET_CHAT_VISIBLE: {
              const e = t;
              return this.Mi(e.data), i(), !1;
            }
            case It.SIDEBAR_MESSAGING_READY: {
              console.log("Sidebar Ready");
              const t = null === (s = window.teleparty) || void 0 === s ? void 0 : s.tabId;
              return console.log(t), this.rt.setChatFrameReady(null != t ? t : 0), i(), !0;
            }
            case It.DISPLAY_MODAL: {
              const e = t.data;
              return console.log(e), !0;
            }
            case It.ON_UPDATE_SETTINGS: {
              const e = t.data;
              return this.rt.doUpdateSettings(e), i(), !0;
            }
            case It.ON_CHROME_STORAGE_UPDATE:
              try {
                chrome.storage.local.set(t.data);
              } catch (t) {
                console.log("Failed to update chrome storage");
              }
              return i(), !0;
            case It.SET_REACTIONS_ACTIVE: {
              const e = t.data;
              return this.rt.setReactionsActive(e), i(), !0;
            }
            case It.RESET_VIEW:
              return this.rt.resetChatWindow(!0), i(), !0;
            case It.ON_FOCUS:
              return this.rt.onSidebarFocus(), i(), !0;
            case It.PREVIEW_REACTION: {
              const e = t.data;
              return this.rt.showReaction(e), i(), !0;
            }
            case "onUpdateSettings": {
              const e = t.data;
              return this.rt.doUpdateSettings(e), i(), !0;
            }
            default:
              return !1;
          }
        }
        teardown() {
          this.rt.teardown();
        }
        Mi(t) {
          return he(this, void 0, void 0, function* () {
            this.rt.isPartyWindowsActive()
              ? t.visible
                ? yield this.rt.resetChatWindow()
                : yield this.rt.hideChatWindow()
              : (yield this.rt.setChatVisible(t.visible), this.rt.fixPageControls());
          });
        }
        Bi(t) {
          const e = t.sessionCallbackData.sessionId,
            i = `${l}/join/${e}`;
          if (
            (this.rt.loadInitData(t),
            this.rt.setPartyUrl(i),
            this.rt.setSessionId(e),
            this.rt.He(t.storageData),
            this._e.onInitChat(),
            this.rt.setSessionCreated(t.isCreate),
            this.rt.sendInitDataToSidebar(t),
            t.sessionCallbackData.userList && this.rt.loadUserList(t.sessionCallbackData.userList),
            t.showReviewMessage && this.rt.addReviewMessage(),
            !t.isCreate)
          )
            for (const e of t.sessionCallbackData.messages) "gifObject" in e ? this.rt.addGif(e) : this.rt.addMessage(e, !0);
        }
        nt(t) {
          this.rt.addMessage(t.data);
        }
        xi(t) {
          this.rt.showReaction(t.data);
        }
        Si(t) {
          this.rt.addGif(t.data);
        }
        Ai(t) {
          this.rt.onBufferingMessage(t.data);
        }
        ki(t) {
          this.rt.onTypingMessage(t.data);
        }
        Qi(t) {
          this.rt.onWatchingAdsMessage(t.data);
        }
        Ii(t) {
          this.rt.onUpdateSettingsMessage(t.data);
        }
        Ti(t) {
          this.rt.loadUserList(t.data.userList), this.rt.setSocketConnectionId(t.data.socketConnectionId);
        }
      }
      !(function (t) {
        (t.UPDATE_SESSION = "updateSession"),
          (t.NEXT_EPISODE = "nextEpisode"),
          (t.REBOOT_SESSION = "rebootSession"),
          (t.GET_SERVER_TIME = "getServerTime"),
          (t.RELOAD_PARTY = "reloadParty");
      })(De || (De = {}));
      class le extends ct {
        constructor(t, e, i) {
          super(t, e, ot.BROADCAST), (this.data = i);
        }
      }
      class pe extends t {
        constructor(t, e, i) {
          super(t, e, i), (this.type = i);
        }
      }
      class ge extends pe {
        constructor(t, e) {
          super(t, e, De.GET_SERVER_TIME);
        }
      }
      class ve extends ct {
        constructor(t, e, i) {
          super(t, e, ot.BROADCAST_NEXT_EPISODE), (this.data = i);
        }
      }
      class Fe extends ct {
        constructor(t, e, i) {
          super(t, e, ot.SET_BUFFERING), (this.data = i);
        }
      }
      class ye extends ct {
        constructor(t, e, i) {
          super(t, e, ot.SET_WATCHING_ADS), (this.data = i);
        }
      }
      const fe = "PING",
        me = "SYNC",
        Ce = "BROADCAST";
      class we extends e {
        constructor(t, e, i) {
          super(t, e, n.STAY_ALIVE), (this.data = i);
        }
      }
      var Ee = function (t, e, i, n) {
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
      const be = new (class {
        getRedirectDataForTabAsync(t) {
          return Ee(this, void 0, void 0, function* () {
            const e = (yield Ct.getItemsAsync([y])).redirectDataMap,
              i = this.Pi(t);
            if (e && e[i]) {
              const t = e[i];
              if (this.$i(t)) return t;
            }
          });
        }
        deleteRedirectDataForTabAsync(t) {
          return Ee(this, void 0, void 0, function* () {
            const e = (yield Ct.getItemsAsync([y])).redirectDataMap,
              i = this.Pi(t);
            e && e[i] && delete e[i], yield ut.setItemsAsync({ [y]: e });
          });
        }
        Pi(t) {
          return t;
        }
        storeRedirectDataForTabAsync(t, e) {
          return Ee(this, void 0, void 0, function* () {
            console.log("store data for tab " + t);
            const i = this.Pi(e);
            let n = yield Ct.getItemsAsync([y]);
            (n[i] = t), (n = this.Ri(n)), yield ut.setItemsAsync({ [y]: n });
          });
        }
        Ri(t) {
          return (function (t, e) {
            const i = {};
            let n;
            for (n in t) t.hasOwnProperty(n) && e(t[n]) && (i[n] = t[n]);
            return i;
          })(t, this.$i);
        }
        $i(t) {
          const e = t.date;
          return void 0 !== e && "number" == typeof e && e <= Date.now() && Date.now() - e < 108e5;
        }
      })();
      Object.freeze(be);
      const _e = be;
      var je = function (t, e, i, n) {
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
      class Be {
        constructor(t, e, i) {
          (this.Gi = []),
            (this.Ni = 0),
            (this.Oi = 0),
            (this.Li = []),
            (this.Vi = !1),
            (this.te = !1),
            (this.g = !1),
            (this.Ui = !1),
            (this.Hi = void 0),
            (this.Wi = () =>
              je(this, void 0, void 0, function* () {
                try {
                  yield fetch("https://www3.doubleclick.net", { method: "HEAD", mode: "no-cors", cache: "no-store" }), (this.Hi = !1);
                } catch (t) {
                  this.Hi = !0;
                }
              })),
            (this.zi = (t = !1, e = !1) =>
              je(this, void 0, void 0, function* () {
                if (this.Yi) return;
                if (this.g) return void this.forceSync();
                if (!this.Ui && !e) return;
                const i = yield this.Ki();
                if (yield this.Ji(i.data, e)) yield this.Xi(i);
                else if (t) {
                  if (yield this.qi(e)) {
                    const t = yield this.Ki();
                    yield this.Xi(t);
                  }
                }
              })),
            (this.Zi = () =>
              je(this, void 0, void 0, function* () {
                if (
                  (this.tn == k.PAUSED &&
                    this.en &&
                    (clearInterval(this.en),
                    (this.en = setInterval(() => {
                      this.nn();
                    }, 6e4))),
                  this.sn())
                )
                  return;
                if ((yield this.yi.waitVideoDoneLoadingAsync(), this.sn())) return;
                const t = yield this.yi.getStateAsync();
                this.tn == k.PAUSED ? yield this.un(t) : this.tn == k.PLAYING && (yield this.on(t)), !1 === this.Ui && (this.Ui = !0);
              })),
            (this.yi = t),
            (this.rt = e),
            (this.rn = i),
            this.rn.setMessageForwarder(this),
            (this.an = 0),
            (this.Yi = !1),
            (this.tn = k.PAUSED),
            (this.cn = 0),
            (this.Dn = 0),
            (this.hn = 0),
            (this.dn = this.yi.getStreamingServiceName()),
            w("Video forwarder"),
            this.Wi();
        }
        onMessage(t, e, i) {
          switch (t.type) {
            case n.GET_VIDEO_DATA:
              return this.ln(i), !0;
            case n.LOAD_SESSION: {
              const e = t;
              return this.pn(e.data), !1;
            }
            case De.UPDATE_SESSION: {
              const e = t;
              return this.gn(e.data), !1;
            }
            case De.NEXT_EPISODE: {
              const e = t;
              return this.vn(e.data), !1;
            }
            case De.REBOOT_SESSION: {
              const e = t;
              return this.Fn(e.data, i), !0;
            }
            case De.RELOAD_PARTY:
              return this.reloadPartyAsync().then(() => console.log("Party Reloaded")), !0;
            case ue.ON_WATCHING_ADS: {
              const e = t;
              return this.Qi(e), !1;
            }
            default:
              return !1;
          }
        }
        Qi(t) {
          t.data.anyoneWatchingAds && !this.te && (yt.pushTask(this.yi.doAdCheck.bind(this.yi)), this.forceSync()),
            (this.te = t.data.anyoneWatchingAds);
        }
        get videoId() {
          return this.yn;
        }
        set videoId(t) {
          this.yn = t;
        }
        sendTeardown(t) {
          const e = new lt(r, u, t);
          b.l(e);
        }
        teardown() {
          (this.re = void 0),
            this.mn && clearInterval(this.mn),
            this.en && clearInterval(this.en),
            this.yi.pause(),
            yt.disable(),
            this.rn.stopListening();
        }
        Fn(t, e) {
          yt.resetTasks(), this.yn == t.videoId && this.gn(t), e(this.yn == t.videoId);
          const i = new s(r, u, { eventType: "reboot", sessionId: this.re });
          b.l(i);
        }
        tryBroadcast(t = !1) {
          this.Vi ||
            (this.g
              ? this.forceSync()
              : 0 != this.yi.uiEventsHappening || this.Yi || !this.re || yt.hasTaskInQueue(Ce) || yt.pushTask(() => this.zi(t), Ce));
        }
        setBuffering(t) {
          if (this.re) {
            const e = new Fe(r, u, { buffering: t });
            b.l(e);
          }
        }
        isWatchingAds() {
          return this.Vi;
        }
        setWatchingAds(t, e) {
          if (this.re) {
            this.Vi = t;
            const i = new ye(r, u, { watchingAds: t, adDurationLeft: e });
            b.l(i);
          }
        }
        sendNextEpisodeAsync(t) {
          return je(this, void 0, void 0, function* () {
            if (this.re && t !== this.yn && t !== this.Cn) {
              (this.Cn = t), (this.Yi = !0);
              const e = new ve(r, u, { nextEpisode: t }),
                i = yield b.l(e);
              i && "Locked Session" === i.errorMessage && (yield this.wn(t));
            }
          });
        }
        wn(t) {
          return je(this, void 0, void 0, function* () {
            try {
              yield S(() => t == this.yn, 1e4)(), (this.Yi = !1);
            } catch (t) {
              this.Se("An error has occured when trying to wait till the episode changed videos");
              const e = { showAlert: !0, alertModal: Ot };
              this.sendTeardown(e);
            }
          });
        }
        Ji(t, e) {
          return je(this, void 0, void 0, function* () {
            if (null == t.lastKnownTime || null == t.lastKnownTimeUpdatedAt || null == t.state) return !1;
            if (e && t.state === k.PAUSED && t.lastKnownTime < Rt) return !1;
            const i = Math.abs(t.lastKnownTime - this.En());
            if (t.state == this.tn && i < Rt) return !1;
            if (i >= Rt) {
              const t = new s(r, u, { name: "video_seek", action: { source: "self" } });
              b.l(t), this.dn == Q.AMAZON || this.dn == Q.PARAMOUNT ? yield x(200)() : this.dn == Q.HBO_MAX && (yield x(500)());
            }
            return !0;
          });
        }
        Ki() {
          return je(this, void 0, void 0, function* () {
            const t = yield this.yi.getUpdateSessionDataAsync();
            (t.lastKnownTimeUpdatedAt -= this.Oi), (t.lastKnownTime = Math.round(t.lastKnownTime));
            return new le(r, u, t);
          });
        }
        forceSync() {
          yt.pushTask(this.Zi, me);
        }
        vn(t) {
          return je(this, void 0, void 0, function* () {
            (this.an = Date.now()), yt.pushTask(() => this.bn(t));
          });
        }
        bn(t) {
          return je(this, void 0, void 0, function* () {
            try {
              w("Continue next episode called"),
                (this.Yi = !0),
                yield this.yi.jumpToNextEpisode(t),
                yield this.rn.loadNewVideoAsync(t.videoId),
                w("After load new video"),
                this.rn.reloadListeners(),
                this.hn < this.an &&
                  ((this.tn = k.PAUSED),
                  (this.cn = 0),
                  (this.Dn = Date.now()),
                  w("Sending broadcast after next episode"),
                  yt.pushTask(() => this.zi(!0, !0), Ce),
                  yt.removeTask(me)),
                (this.yn = t.videoId),
                (this.Yi = !1);
              const e = new s(r, u, { name: "video_start", action: { description: "video session has begun" } });
              b.l(e);
            } catch (t) {
              this.Se("Error loading new video."), console.log("Error was", t), yield this.reloadPartyAsync();
            }
          });
        }
        persistExtension(t) {
          var e, i;
          return je(this, void 0, void 0, function* () {
            console.log("persist here");
            const n = null !== (i = null === (e = window.teleparty) || void 0 === e ? void 0 : e.tabId) && void 0 !== i ? i : 0,
              s = new we(r, u, { tabId: n, persist: t });
            b.l(s);
            const o = yield this._n();
            (o.date = Date.now()), _e.storeRedirectDataForTabAsync(o, n);
          });
        }
        reloadPartyAsync() {
          var t, e;
          return je(this, void 0, void 0, function* () {
            try {
              console.log("Reloading party");
              const i = yield this._n();
              i.date = Date.now();
              const n = yield this.jn(i),
                s = null !== (e = null === (t = window.teleparty) || void 0 === t ? void 0 : t.tabId) && void 0 !== e ? e : 0,
                o = new we(r, u, { tabId: s, persist: !1 });
              yield b.l(o), yield _e.storeRedirectDataForTabAsync(i, s), console.log("Redirect URL is", n), (window.location.href = n);
            } catch (t) {
              console.log("Error reloading party", t), this.Se("Failed to fix next episode.");
              const e = new lt(r, u, { showAlert: !0, alertModal: Vt });
              b.l(e);
            }
          });
        }
        _n() {
          return je(this, void 0, void 0, function* () {
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
                      e(t), this.Se("Unable to get video endpoint data to reload session");
                    }
                }),
                i.open("GET", "https://api.teleparty.com/video?session=" + this.re, !0),
                i.send(null);
            });
          });
        }
        mapToParamountType(t) {
          return "episode" === t ? "shows" : "feature" === t ? "movies" : "live" === t ? "live-tv" : "none";
        }
        jn(t) {
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
        gn(t) {
          (this.hn = Date.now()), yt.pushTask(this.Bn(t).bind(this));
        }
        Bn(t) {
          if (t.state === k.PAUSED && this.tn === k.PLAYING) {
            this.nn();
            const t = new s(r, u, {
              name: "video_pause",
              action: { description: "video was played from pause", reason: "Video was played" }
            });
            b.l(t);
          } else if (t.state === k.PLAYING && this.tn === k.PAUSED) {
            const t = new s(r, u, {
              name: "video_resume",
              action: { description: "video was played from pause", reason: "Video was played" }
            });
            b.l(t), this.nn();
          }
          return (this.tn = t.state), (this.cn = t.lastKnownTime), (this.Dn = t.lastKnownTimeUpdatedAt), this.Zi;
        }
        ln(t) {
          var e;
          return je(this, void 0, void 0, function* () {
            try {
              const e = yield this.yi.getVideoDataAsync(),
                i = yield this.yi.getStateAsync();
              (e.is_player_fullscreen = null != document.fullscreenElement || document.webkitIsFullScreen),
                (e.is_chat_visible = this.rt.getChatVisible()),
                (e.is_adblock_enabled = this.Hi),
                (e.video_ts_ms = Math.round(i.playbackPositionMilliseconds)),
                (e.party_ts_ms = this.cn),
                t(e);
            } catch (i) {
              this.Se(null !== (e = i.message) && void 0 !== e ? e : "Unable to send video data"), t({ error: i });
            }
          });
        }
        Se(t) {
          const e = new s(r, u, {
            name: "video_error",
            action: { description: t, reason: "An errors has occurred during video playback" }
          });
          b.l(e);
        }
        qi(t) {
          return je(this, void 0, void 0, function* () {
            return new Promise((e) => {
              const i = performance.now(),
                n = () =>
                  je(this, void 0, void 0, function* () {
                    if (performance.now() - i >= 2500) e(!1);
                    else {
                      const i = yield this.Ki();
                      (yield this.Ji(i.data, t))
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
        Xi(t) {
          return je(this, void 0, void 0, function* () {
            if (this.Yi || this.Vi) return;
            const e = this.tn;
            if (t.data.bufferingState) {
              (t.data.state = k.PAUSED), yield b.l(t, 1e3), yield this.yi.waitVideoDoneLoadingAsync();
              const i = yield this.Ki();
              (i.data.bufferingState = !0), e == k.PLAYING && (i.data.state = k.PLAYING), yield b.l(i, 1e3);
            } else yield b.l(t, 1e3);
          });
        }
        pn(t) {
          return je(this, void 0, void 0, function* () {
            const e = t.sessionCallbackData;
            (this.re = e.sessionId),
              (this.tn = e.state),
              (this.cn = Number(e.lastKnownTime)),
              (this.Dn = Number(e.lastKnownTimeUpdatedAt)),
              (this.yn = e.videoId),
              (this.te = !1),
              "true" == e.controlLock && (this.g = !0),
              t.isCreate ? ((this.Ui = !0), yt.pushTask(this.zi.bind(this), Ce)) : this.forceSync();
            const i = new s(r, u, { name: "video_start", action: { description: "video session has begun" } });
            b.l(i), this.rn.startListening(), this.An();
          });
        }
        kn() {
          return new Promise((t) => {
            const e = new ge(r, u),
              i = Date.now();
            b
              .l(e)
              .then((t) => {
                const e = Date.now();
                if (t) {
                  const n = t.serverTime;
                  n &&
                    (T(this.Gi, e - i, 5), (this.Ni = M(this.Gi)), T(this.Li, e - Math.round(this.Ni / 2) - n, 5), (this.Oi = M(this.Li)));
                }
              })
              .catch((t) => {
                w(t), this.Se(t);
              }),
              t();
          });
        }
        nn() {
          const t = new s(r, u, { name: "video_heartbeat", action: { description: "new heartbeat", reason: "Heartbeat session was due" } });
          b.l(t);
        }
        An() {
          this.mn && clearInterval(this.mn),
            this.en && clearInterval(this.en),
            (this.mn = setInterval(() => {
              yt.hasTaskInQueue(me) || yt.pushTask(this.Zi, me);
            }, 5e3)),
            (this.en = setInterval(() => {
              this.nn();
            }, 6e4)),
            (this.Qn = setInterval(() => {
              yt.hasTaskInQueue(fe) || yt.pushTask(this.kn.bind(this), fe);
            }, 12500)),
            this.kn();
        }
        sn() {
          return !this.re || this.yi.uiEventsHappening > 0 || this.Vi || this.Yi || !this.rn.shouldSync();
        }
        un(t) {
          return je(this, void 0, void 0, function* () {
            const { playbackState: e, playbackPositionMilliseconds: i } = t;
            if ((e !== _.PAUSED && (yield this.yi.pause()), Math.abs(this.cn - i) > 2500)) {
              yield this.yi.setCurrentTime(this.cn);
              const t = new s(r, u, { name: "video_seek", action: { source: "another user" } });
              b.l(t);
            }
          });
        }
        on(t) {
          return je(this, void 0, void 0, function* () {
            const { playbackState: e, playbackPositionMilliseconds: i } = t,
              n = this.En();
            if ((e == _.PAUSED && (yield this.yi.play()), Math.abs(n - i) > 2500)) {
              yield this.yi.setCurrentTime(n), yield this.yi.play();
              const t = new s(r, u, { name: "video_seek", action: { source: "another user" } });
              b.l(t);
            }
          });
        }
        In() {
          return this.tn === k.PLAYING ? Date.now() - (this.Dn + this.Oi) : 0;
        }
        En() {
          return this.cn + this.In();
        }
        get changingVideo() {
          return this.Yi;
        }
        set changingVideo(t) {
          this.Yi = t;
        }
      }
      i(5640);
      var Ae = function (t, e, i, n) {
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
      var ke = function (t, e, i, n) {
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
      var Qe = function (t, e, i, n) {
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
      class Ie extends class {
        constructor(t) {
          (this.yi = t), console.log("Video Event Listener");
        }
        getCurrentStatus() {
          return ke(this, void 0, void 0, function* () {
            return "";
          });
        }
        getStatusMetaData() {
          return ke(this, void 0, void 0, function* () {});
        }
        reloadNextEpisode() {
          var t;
          return ke(this, void 0, void 0, function* () {
            yield null === (t = this.ti) || void 0 === t ? void 0 : t.reloadPartyAsync();
          });
        }
        startListening() {
          this.xn();
        }
        stopListening() {
          this.Sn();
        }
        xn() {
          const t = navigator;
          t.mediaSession.setActionHandler("play", () =>
            ke(this, void 0, void 0, function* () {
              this.Tn(), this.yi.play(), console.log("Bluetooth device played the video");
            })
          ),
            t.mediaSession.setActionHandler("pause", () =>
              ke(this, void 0, void 0, function* () {
                this.Tn(), this.yi.pause(), console.log("Bluetooth device paused the video");
              })
            );
        }
        Sn() {
          const t = navigator;
          t.mediaSession.setActionHandler("play", null), t.mediaSession.setActionHandler("pause", null);
        }
        Mn() {
          var t;
          null === (t = this.ti) || void 0 === t || t.tryBroadcast(!1);
        }
        Tn() {
          var t;
          console.log("Going to wait for change"), null === (t = this.ti) || void 0 === t || t.tryBroadcast(!0);
        }
        Pn() {
          var t;
          null === (t = this.ti) || void 0 === t || t.setBuffering(!0);
        }
        $n(t) {
          var e;
          null === (e = this.ti) || void 0 === e || e.setWatchingAds(!0, t);
        }
        Rn() {
          var t, e;
          null === (t = this.ti) || void 0 === t || t.setWatchingAds(!1), null === (e = this.ti) || void 0 === e || e.forceSync();
        }
        Gn() {
          var t;
          null === (t = this.ti) || void 0 === t || t.setBuffering(!1);
        }
        Nn(t) {
          var e;
          null === (e = this.ti) || void 0 === e || e.sendNextEpisodeAsync(t);
        }
        On(t) {
          var e;
          null === (e = this.ti) || void 0 === e || e.sendTeardown(t);
        }
        setMessageForwarder(t) {
          this.ti = t;
        }
        shouldSync() {
          return !0;
        }
      } {
        constructor(t, e) {
          var i, n;
          super(t),
            (this.Ln = this.Vn.bind(this)),
            (this.Un = this.Hn.bind(this)),
            (this.yi = t),
            (this.rt = e),
            (null === (i = window.teleparty) || void 0 === i ? void 0 : i.replaceScriptLoaded) ||
              (w("injecting replace script"),
              P(
                '\n  console.log("Loaded Replace Script");\n    if(!window.replaceScriptLoaded) {\n      window.replaceScriptLoaded = true;\n      (function(history){\n        var replaceState = history.replaceState;\n        history.replaceState = function(state) {\n          if (typeof history.onreplacestate == "function") {\n            history.onreplacestate({state: state});\n          }\n          return replaceState.apply(history, arguments);\n        }\n        var pushState = history.pushState;\n        history.pushState = function(state) {\n            if (typeof history.onpushstate == "function") {\n                history.onpushstate({state: state});\n            }\n            return pushState.apply(history, arguments);\n        };\n      })(window.history);\n\n      var popInteraction = function(e) {\n        // send message to content script w next episode\n        window.postMessage({ type: "FROM_PAGE_POP", text: "next episode from the webpage!"}, "*");\n      }\n\n      var reloadInteraction = function(e) {\n        // send message to content script w next episode\n        window.postMessage({ type: "FROM_PAGE", text: "next episode from the webpage!"}, "*");\n      }\n      window.onpopstate = popInteraction;\n      history.onreplacestate = history.onpushstate = reloadInteraction;\n    }\n'
              )),
            (null === (n = window.teleparty) || void 0 === n ? void 0 : n.injectScriptLoaded) ||
              (function (t) {
                const e = document.createElement("script");
                e.setAttribute("tpInjected", ""), (e.src = t), (document.head || document.documentElement).appendChild(e), e.remove();
              })(chrome.extension.getURL("content_scripts/netflix/netflix_injected_bundled.js")),
            this.yi.waitVideoApiReadyAsync().then(() => {
              var t;
              P(G.getFullscreenScript()), null === (t = this.ti) || void 0 === t || t.forceSync();
            }),
            (this.Wn = this.yi.onNode.bind(this.yi)),
            window.addEventListener("FromNode", this.Wn, !1),
            this.yi.skipIdle();
        }
        getStatusMetaData() {
          return Qe(this, void 0, void 0, function* () {
            if (window.location.href.includes("/watch/")) {
              yield this.yi.waitUpdateAPIState();
              const t = this.yi.playerMetaData;
              if (t && t.synopsis && t.boxart && t.boxart.length > 0 && t.boxart[0].url) {
                return { image_url: t.boxart[0].url, description: t.synopsis };
              }
            }
          });
        }
        getCurrentStatus() {
          return Qe(this, void 0, void 0, function* () {
            if (window.location.href.includes("/watch/")) {
              yield this.yi.waitUpdateAPIState();
              const t = this.yi.playerMetaData;
              if (t) return `${t.title}`;
            }
            return "Browsing";
          });
        }
        zn() {
          var t;
          this.yi.getPlaybackState() == _.IDLE &&
            (w("Detected video idle. Removing."),
            this.yi.skipIdle(),
            yt.hasTaskInQueue("removeIdle") ||
              (yt.pushTask(this.Yn.bind(this), "removeIdle"), null === (t = this.ti) || void 0 === t || t.forceSync()));
          const e = this.Kn();
          e && e !== this.Jn && this.reloadListeners();
        }
        Yn() {
          var t, e;
          return Qe(this, void 0, void 0, function* () {
            try {
              yield x(1e3)(),
                yield this.loadNewVideoAsync(
                  null !== (e = null === (t = this.ti) || void 0 === t ? void 0 : t.videoId) && void 0 !== e ? e : ""
                ),
                this.reloadListeners(),
                this.rt.reloadChat(),
                w("Detected idle removed: succeeded");
            } catch (t) {
              this.On(Xt);
            }
          });
        }
        reloadListeners() {
          this.stopListening(), this.startListening(), P(G.getFullscreenScript());
        }
        Vn() {
          return Qe(this, void 0, void 0, function* () {
            yt.tasksInFlight < 5 && !yt.hasTaskInQueue("NETFLIX_WAIT_FOR_CHANGE") && this.Tn();
          });
        }
        Xn(t, e) {
          return (e.paused !== t.paused || Math.abs(e.time - t.time) > 2500) && (console.log("Change"), console.log(e), !0);
        }
        waitForVideoChange(t, e) {
          var i;
          return Qe(this, void 0, void 0, function* () {
            const n = null != t ? t : yield this.yi.getPlayerState(),
              s = null != e ? e : null !== (i = this.yi.getHTMLCurrentTime()) && void 0 !== i ? i : 0;
            console.log("Old State: " + s), console.log(t);
            const u = performance.now();
            return new Promise((t, e) => {
              console.log("New States ------");
              const i = () =>
                Qe(this, void 0, void 0, function* () {
                  const o = yield this.yi.getPlayerState();
                  performance.now() - u >= 2500
                    ? (console.log("Fail"), e(new Error("Wait for Video Change failed")))
                    : this.qn && this.Xn(this.qn, n)
                    ? (console.log("Detected Timer State Change"), t())
                    : this.Xn(n, o)
                    ? t()
                    : Math.abs(o.time - s) > 2500
                    ? (console.log("Change HTML"), console.log(o), t())
                    : setTimeout(() => {
                        i();
                      }, 50);
                });
              i();
            });
          });
        }
        startListening() {
          super.startListening(),
            this.yi.setInSession(!0),
            window.postMessage({ type: "FIX_POST_PLAY" }, "*"),
            (this.Zn = setInterval(this.zn.bind(this), 1e4));
          const t = () =>
            Qe(this, void 0, void 0, function* () {
              var e;
              try {
                const t = this.qn;
                if (
                  ((this.qn = yield this.yi.getPlayerState()),
                  ((null === (e = this.ti) || void 0 === e ? void 0 : e.isWatchingAds()) === this.qn.adState.watchingAds && void 0 !== t) ||
                    (console.log("Update Messsenger watching ads"), this.qn.adState.watchingAds ? this.$n() : this.Rn()),
                  t)
                ) {
                  const e = Math.abs(t.time - this.qn.time);
                  (t.paused != this.qn.paused || e > 2500) && this.Tn();
                }
                this.qn.loading != (null == t ? void 0 : t.loading) && (this.qn.loading ? this.Pn() : this.Gn());
              } catch (t) {}
              this.ts = setTimeout(t, 250);
            });
          t();
          const e = this.Kn();
          (this.Jn = e),
            window.addEventListener("mouseup", this.Ln),
            window.addEventListener("keyup", this.Ln),
            window.addEventListener("message", this.Un, !1);
        }
        Kn() {
          const t = jQuery("video");
          return t && t.length ? t[0] : void 0;
        }
        stopListening() {
          super.stopListening(),
            this.Zn && clearInterval(this.Zn),
            this.ts && clearTimeout(this.ts),
            window.removeEventListener("mouseup", this.Ln),
            window.removeEventListener("keyup", this.Ln),
            window.removeEventListener("message", this.Un, !1),
            this.yi.setInSession(!1);
        }
        loadNewVideoAsync(t) {
          return Qe(this, void 0, void 0, function* () {
            const e = performance.now();
            yield new Promise((i, n) => {
              const s = setInterval(() => {
                if (G.getVideoId(new URL(window.location.href)) === t) {
                  const e = document.querySelector("video");
                  if (e instanceof Element && e.parentElement && e.parentElement.id == t)
                    return w("Loaded new netflix video"), clearInterval(s), this.rt.reloadChat(), void i();
                }
                performance.now() - e >= 2e4 && (n(new Error("Could not load new video in time.")), clearInterval(s));
              }, 100);
            }),
              yield this.yi.waitVideoDoneLoadingAsync();
          });
        }
        Hn(t) {
          var e;
          if (t.source == window)
            if ("FROM_PAGE_POP" !== t.data.type) {
              if (t.data.type && "FROM_PAGE" == t.data.type) {
                if (window.location.href.match(/^.*\/(watch)\/.*/)) {
                  const t = G.getVideoId(new URL(window.location.href));
                  if (!t) return w("No video found. Tearing down"), void this.On(Kt);
                  t !== (null === (e = this.ti) || void 0 === e ? void 0 : e.videoId) && this.Nn(t);
                } else this.On(Kt);
              }
            } else this.On(Kt);
        }
      }
      var xe = i(4296),
        Se = i.n(xe);
      class Te extends t {
        constructor(t, e, i) {
          super(t, e, i), (this.type = i);
        }
      }
      class Me extends Te {
        constructor(t, e, i) {
          super(t, e, se.CREATE_SESSION), (this.data = i);
        }
      }
      const Pe = new (class extends $ {
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
      })([], ["content_scripts/hulu/hulu_content_bundled.js"], "hulu", Q.HULU, !1);
      Object.freeze(Pe);
      const $e = Pe;
      const Re = new (class extends $ {
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
      })([], ["content_scripts/disney/disney_content_bundled.js"], "disney", Q.DISNEY_PLUS, !1, [
        "browse_scripts/disney/disney_browse_bundled.js"
      ]);
      Object.freeze(Re);
      const Ge = Re;
      const Ne = new (class extends $ {
        isValidUrl(t) {
          return (function (t) {
            return (t.hostname.includes(".hbomax.") && "other" !== I(t.pathname)) || t.pathname.includes("urn:hbo:page");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".hbomax.");
        }
        getVideoId(t) {
          const e = "urn:hbo:" + I(t.pathname) + ":",
            i = t.pathname.split(e);
          let n = null != i && i.length > 1 && null != i[1] ? i[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : null;
          const s = null != n && 0 !== n.length ? i[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : void 0;
          let u = s && s.length > 0 ? s[1] : void 0;
          return u || ((n = t.pathname.match(/(page:)([a-zA-Z\-_0-9]+)\??.*/)), (u = null != n && 3 == n.length ? n[2] : void 0)), u;
        }
        getVideoType(t) {
          return I(t.pathname);
        }
      })([], ["content_scripts/hbo_max/hbo_max_content_bundled.js"], "hbomax", Q.HBO_MAX, !1);
      Object.freeze(Ne);
      const Oe = Ne;
      const Le = new (class extends $ {
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
      })([], ["content_scripts/amazon/amazon_content_bundled.js"], "amazon", Q.AMAZON, !1);
      Object.freeze(Le);
      const Ve = Le;
      const Ue = new (class extends $ {
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
      })([], ["content_scripts/crunchyroll/crunchyroll_content_bundled.js"], "crunchyroll", Q.CRUNCHYROLL, !1);
      Object.freeze(Ue);
      const He = Ue;
      const We = new (class extends $ {
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
      })([], ["content_scripts/youtube/youtube_content_bundled.js"], "youtube", Q.YOUTUBE, !1);
      Object.freeze(We);
      const ze = We;
      const Ye = new (class extends $ {
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
      })([], ["content_scripts/espn/espn_content_bundled.js"], "espn", Q.ESPN, !1);
      Object.freeze(Ye);
      const Ke = Ye;
      const Je = new (class extends $ {
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
      })([], ["content_scripts/paramount/paramount_content_bundled.js"], "paramount", Q.PARAMOUNT, !1);
      Object.freeze(Je);
      const Xe = Je;
      const qe = new (class extends $ {
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
      })([], ["content_scripts/hotstar/hotstar_content_bundled.js"], "hotstar", Q.HOTSTAR, !1);
      Object.freeze(qe);
      const Ze = qe;
      const ti = new (class extends $ {
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
      })([], ["content_scripts/peacock/peacock_content_bundled.js"], "peacock", Q.PEACOCK, !1);
      Object.freeze(ti);
      const ei = ti;
      const ii = new (class extends $ {
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
      })([], ["content_scripts/funimation/funimation_content_bundled.js"], "funimation", Q.FUNIMATION, !1);
      Object.freeze(ii);
      const ni = ii;
      const si = new (class extends $ {
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
      })([], ["content_scripts/max/max_content_bundled.js"], "max", Q.MAX, !1);
      Object.freeze(si);
      const ui = si;
      const oi = new (class extends $ {
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
      })([], ["content_scripts/starplus/starplus_content_bundled.js"], "starplus", Q.STAR_PLUS, !1);
      Object.freeze(oi);
      const ri = oi;
      const ai = new (class extends $ {
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
      })([], ["content_scripts/plutotv/plutotv_content_bundled.js"], "plutotv", Q.PLUTO_TV, !1);
      Object.freeze(ai);
      const ci = ai;
      const Di = new (class extends $ {
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
      })([], ["content_scripts/appletv/appletv_content_bundled.js"], "appletv", Q.APPLE_TV, !1);
      Object.freeze(Di);
      const hi = Di;
      const di = new (class extends $ {
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
      })([], ["content_scripts/jio_cinema/jio_cinema_content_bundled.js"], "jiocinema", Q.JIO_CINEMA, !1);
      Object.freeze(di);
      const li = di;
      const pi = new (class extends $ {
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
      })([], ["content_scripts/tubitv/tubitv_content_bundled.js"], "tubitv", Q.TUBI_TV, !1);
      Object.freeze(pi);
      const gi = pi;
      const vi = new (class extends $ {
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
      })([], ["content_scripts/crave/crave_content_bundled.js"], "crave", Q.CRAVE, !1);
      Object.freeze(vi);
      const Fi = vi;
      const yi = new (class extends $ {
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
      })([], ["content_scripts/mubi/mubi_content_bundled.js"], "mubi", Q.MUBI, !1);
      Object.freeze(yi);
      const fi = yi;
      const mi = new (class extends $ {
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
      })([], ["content_scripts/stan/stan_content_bundled.js"], "stan", Q.STAN, !1);
      Object.freeze(mi);
      const Ci = mi;
      const wi = new (class extends $ {
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
      })([], ["content_scripts/sling/sling_content_bundled.js"], "slingtv", Q.SLING, !1);
      Object.freeze(wi);
      const Ei = wi;
      const bi = new (class extends $ {
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
      })([], ["content_scripts/disneymena/disneymena_content_bundled.js"], "disneymena", Q.DISNEY_PLUS_MENA, !1);
      Object.freeze(bi);
      const _i = bi;
      class ji {
        constructor(t, e) {
          (this.isBrowsing = !1), (this.needsCSPBlock = !1), (this.id = e), this.videoId, (this.url = t);
          const i = [hi],
            n = [G, $e, Ge, Oe, Ve, ze, He, Ke, Xe, Ze, ei, ri, ui, ni, hi, ci, li, gi, fi, Ci, Fi, Ei, _i];
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
      class Bi extends Te {
        constructor(t, e, i) {
          super(t, e, se.RE_INJECT), (this.data = i);
        }
      }
      var Ai = function (t, e, i, n) {
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
      var ki,
        Qi = function (t, e, i, n) {
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
          var e, i, n;
          (this.es = !1),
            (this.ns = !1),
            (this.ss = !1),
            (this.us = 0),
            (this.os = !1),
            (this.rs = !1),
            (this.cs = !1),
            (this.checkShowMenu = () => {
              this.shouldMenuBeVisible() ? this.Ds() : this.hs();
            }),
            console.log("Teleparty Browse Loaded " + (null === (e = window.teleparty) || void 0 === e ? void 0 : e.tabId)),
            (this.ds = new ji(
              new URL(window.location.href),
              null !== (n = null === (i = window.teleparty) || void 0 === i ? void 0 : i.tabId) && void 0 !== n ? n : 0
            )),
            (this.ls = t),
            this.ls.setPageControls(this);
        }
        setChatApi(t) {
          (this.ls = t), this.ls.setPageControls(this);
        }
        ps() {
          jQuery("#tp-control-lock-button .tooltiptext").text(this.ss ? "Only I have control" : "Everyone has control"),
            this.ss
              ? (jQuery("#tp-unlocked-image").addClass("hidden"), jQuery("#tp-locked-image").removeClass("hidden"))
              : (jQuery("#tp-unlocked-image").removeClass("hidden"), jQuery("#tp-locked-image").addClass("hidden"));
        }
        gs() {
          this.ns || ((this.ss = !this.ss), this.ps());
        }
        setResetChatButton() {
          this.ls.getChatWindowVisible()
            ? (jQuery("#tp-chat-button .tooltiptext").text("Reset View"),
              this.ls.shouldReturnToVideo && jQuery("#tp-chat-button .tooltiptext").text("Return to Video"),
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
        vs() {
          jQuery("#tp-chat-hidden").addClass("hidden"),
            this.ls.isPartyWindowsActive()
              ? (this.setResetChatButton(), jQuery("#tp-message-indicator").removeClass("hidden"))
              : (jQuery("#tp-message-indicator").removeClass("hidden"),
                jQuery("#tp-chat-button .tooltiptext").text(`${this.us} unread ${1 == this.us ? "message" : "messages"}`),
                jQuery("#tp-chat-gray").removeClass("hidden"),
                jQuery("#tp-chat-reset").addClass("hidden"),
                jQuery("#tp-chat-button .tp-hover-image").removeClass("hidden"));
        }
        hideMessageIndicator() {
          jQuery("#tp-message-indicator").addClass("hidden"),
            this.ls.isPartyWindowsActive()
              ? this.setResetChatButton()
              : (jQuery("#tp-chat-button .tp-hover-image").removeClass("hidden"),
                jQuery("#tp-chat-button .tooltiptext").text("Show chat"),
                jQuery("#tp-chat-gray").addClass("hidden"),
                jQuery("#tp-chat-hidden").removeClass("hidden"),
                jQuery("#tp-chat-reset").addClass("hidden"));
        }
        onChatMessage() {
          this.ls.shouldChatBeVisible() ||
            this.ls.isPartyWindowsActive() ||
            (this.us++,
            this.vs(),
            (this.os = !0),
            this.Ds(),
            x(1e3)().then(() => {
              this.os = !1;
            }));
        }
        teardown() {
          this.Fs(), this.hs(), this.ys && clearInterval(this.ys);
        }
        fs() {
          var t;
          return Ai(this, void 0, void 0, function* () {
            if (this.ns || this.ls.inSession) return;
            if ((this.Cs(), (this.ns = !0), !(null === (t = window.teleparty) || void 0 === t ? void 0 : t.contentScriptInjected))) {
              console.log("Re injecting");
              const t = new Bi(a, u, { extensionTabData: this.ds });
              try {
                yield b.l(t);
              } catch (t) {
                return console.log(t), this.ws(), this.Se(t), this.Es(V), void (this.ns = !1);
              }
            }
            console.log("Sending create");
            const e = this.bs();
            try {
              const t = yield b.l(e);
              t.error ? (this.Es(t.error.message), this.Se(t.error.message)) : ((this.ns = !1), this._s(), this.enablePartyIcons());
            } catch (t) {
              console.log(t), this.Es(V), this.Se(t);
            }
            this.ws(), (this.ns = !1);
          });
        }
        enablePartyIcons() {
          this.hideError(),
            jQuery("#tp-party-active").removeClass("hidden"),
            jQuery("#tp-party-inactive").addClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").addClass("hidden"),
            jQuery("#tp-icon-container").attr("style", "cursor: auto");
        }
        Fs() {
          jQuery("#tp-party-active").addClass("hidden"),
            jQuery("#tp-party-inactive").removeClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").html("Open Teleparty"),
            jQuery("#tp-icon-container").removeClass("play-chat-active"),
            jQuery("#play-chat-icon").addClass("hidden"),
            jQuery("#tp-icon-white").removeClass("hidden");
        }
        Se(t) {
          const e = new s(o, u, { name: "error", action: { description: "an error has occured", reason: t } });
          b.l(e);
        }
        Es(t) {
          jQuery("#tp-controls-error-text").text(t),
            jQuery("#tp-error-box").removeClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").addClass("hidden");
        }
        hideError() {
          jQuery("#tp-error-box").addClass("hidden");
        }
        js(t) {
          return t
            .replace(/{EXTENSION_LOGO_WHITE}/g, et(chrome.runtime.getURL("img/icon_white.svg")))
            .replace(/{EXTENSION_LOGO_GRADIENT}/g, et(chrome.runtime.getURL("img/icon_gradient.svg")))
            .replace(/{PLAY_IMAGE}/g, et(chrome.runtime.getURL("img/play.svg")))
            .replace(/{UNLOCKED_IMAGE}/g, et(chrome.runtime.getURL("img/icon_remote_inactive.svg")))
            .replace(/{LOCKED_IMAGE}/g, et(chrome.runtime.getURL("img/icon_remote_active.svg")))
            .replace(/{ARROW_RIGHT}/g, et(chrome.runtime.getURL("img/arrow-right.svg")))
            .replace(/{LINK_IMAGE}/g, et(chrome.runtime.getURL("img/icon_link_active.svg")))
            .replace(/{LINK_ACTIVE_IMAGE}/g, et(chrome.runtime.getURL("img/icon_link_active.svg")))
            .replace(/{CHAT_HIDDEN_IMAGE}/g, et(chrome.runtime.getURL("img/icon_chat_inactive.svg")))
            .replace(/{CHAT_GRAY_IMAGE}/g, et(chrome.runtime.getURL("img/icon_chatgray_active.svg")))
            .replace(/{CHAT_ACTIVE_IMAGE}/g, et(chrome.runtime.getURL("img/icon_chat_active.svg")))
            .replace(/{DISCONNECT_IMAGE}/g, et(chrome.runtime.getURL("img/icon_logout_active.svg")))
            .replace(/{RESET_CHAT_IMAGE}/g, et(chrome.runtime.getURL("img/reset_chat.svg")));
        }
        hs() {
          this.os || (this.hideError(), jQuery("#tpIconContainer").addClass("hidden"));
        }
        Ds() {
          return Ai(this, void 0, void 0, function* () {
            if (!this.rs && (this.cs || this.ls.inSession)) {
              this.rs = !0;
              try {
                yield this.addTpIcon(),
                  this.ls.inSession ? this.enablePartyIcons() : this.Fs(),
                  jQuery("#tpIconContainer").removeClass("hidden"),
                  this.setChatButtons();
              } finally {
                this.rs = !1;
              }
            }
          });
        }
        startEventListener() {
          this.ys = setInterval(this.checkShowMenu, 200);
        }
        stopEventListener() {
          this.ys && clearInterval(this.ys);
        }
        Bs() {
          return "100px";
        }
        addTpIcon() {
          return Ai(this, void 0, void 0, function* () {
            if ((this.cs || this.ls.inSession) && 0 === jQuery("#tpIconContainer").length) {
              const t = this.js(Se()),
                e = yield this.getControlsRoot();
              e.length > 0 &&
                (e.append(
                  (function (t, e = "") {
                    return `\n    <link rel="stylesheet" href="${chrome.runtime.getURL(
                      "css/overlay.css"
                    )}">\n    <style>\n      ${e}\n    </style>\n    ${t}\n  `;
                  })(t)
                ),
                this.As());
            }
          });
        }
        As() {
          jQuery("#tp-control-lock-button").click(this.gs.bind(this)),
            jQuery("#tp-buttons-container").attr("style", `top:${this.Bs()}`),
            jQuery("#tp-chat-close-button").attr("style", `top:${this.Bs()}`),
            jQuery("#tp-error-box").attr("style", `top:${this.Bs()}`),
            jQuery("#tp-link-button").click(this.ks.bind(this)),
            jQuery("#tp-chat-button").on("click", (t) => (this.Qs(), t.stopImmediatePropagation(), t.stopPropagation(), !1)),
            jQuery("#tp-disconnect-button").on("click", () => {
              this.Is();
            });
        }
        Is() {
          const t = new lt(a, u, Kt);
          b.l(t), this.hs();
        }
        ks() {
          this.ls.linkIconListener(),
            jQuery("#tp-link-button .tooltiptext").text("Link copied"),
            setTimeout(() => {
              jQuery("#tp-link-button .tooltiptext").text("Copy join link");
            }, 1e3);
        }
        Qs() {
          return Ai(this, void 0, void 0, function* () {
            (this.us = 0),
              this.hideMessageIndicator(),
              this.ls.isPartyWindowsActive()
                ? this.ls.resetChatWindow(!0)
                : (this.ls.shouldChatBeVisible(), yield this.ls.setChatVisible(!this.ls.shouldChatBeVisible()), this.setChatButtons());
          });
        }
        onInitChat() {
          this.es && this.Ds();
        }
        setChatButtons() {
          this.ls.inSession && this.ls.getChatVisible() ? this._s() : this.xs(),
            this.ls.isPartyWindowsActive() ? this.setResetChatButton() : this.hideMessageIndicator();
        }
        _s() {
          return Ai(this, void 0, void 0, function* () {
            this.ls.inSession &&
              this.ls.shouldChatBeVisible() &&
              (jQuery("#tp-chat-close-button").removeClass("hidden"), jQuery("#tp-buttons-container").addClass("hidden"));
          });
        }
        xs() {
          jQuery("#tp-chat-close-button").addClass("hidden"), jQuery("#tp-buttons-container").removeClass("hidden");
        }
        bs() {
          return new Me(a, u, this.Ss());
        }
        Ss() {
          return { createSettings: { controlLock: this.ss }, streamingService: this.ds.streamingService, tabId: this.ds.id, source: "pc" };
        }
        Cs() {
          jQuery("#tp-icon-container .tooltiptext").html(
            'Loading <span class="ellipsis-anim"><span>.</span><span>.</span><span>.</span></span>'
          );
        }
        ws() {
          jQuery("#tp-icon-container .tooltiptext").html("Start a party");
        }
      } {
        getControlsRoot() {
          return Qi(this, void 0, void 0, function* () {
            return jQuery(".watch-video--player-view");
          });
        }
        shouldMenuBeVisible() {
          return null !== document.querySelector("[data-uia='control-back10']");
        }
        startEventListener() {
          super.startEventListener(),
            jQuery("#tp-buttons-container").hover(() => {
              window.postMessage({ type: "ShowControls" }, "*");
            });
        }
        getControlsHeight() {
          return "100px";
        }
        stopEventListener() {
          super.stopEventListener(), jQuery("#tp-buttons-container").off("hover");
        }
      }
      class xi extends class {
        constructor(t, e, i, n) {
          (this.rt = t),
            (this.yi = e),
            (this.rn = i),
            (this._e = n),
            window.teleparty && !window.teleparty.pageControls
              ? ((window.teleparty.pageControls = n), console.log("Setting Page COntrols"))
              : (n.setChatApi(this.rt), console.log("Resetting Chat Api for old controls")),
            (this.Ts = new de(this.rt, this._e)),
            (this.ti = new Be(this.yi, this.rt, this.rn)),
            (this.Ms = !1),
            (this.Ps = !1),
            (this.Ie = !1),
            (this.Ci = new ce()),
            this.Ci.addMessageListener(this.ti),
            this.Ci.addMessageListener(this.Ts),
            this.Ci.addMessageListener(this),
            (this.$s = !1),
            this.Rs();
        }
        Gs() {
          return Ae(this, void 0, void 0, function* () {
            yield this._e.addTpIcon(), this._e.startEventListener();
          });
        }
        loadBrowseButton() {
          return Ae(this, void 0, void 0, function* () {
            yield this._e.addTpIcon(), this._e.startEventListener();
          });
        }
        Rs() {
          const t = chrome.runtime.connect();
          t.onDisconnect.addListener(() => {
            console.log("Lost background script. Teardown");
            const t = { showAlert: this.rt.inSession, alertModal: Ht };
            this.Ns(t);
          }),
            t.onMessage.addListener(() => {
              w("Got background script"), (this.$s = !0);
            });
        }
        onMessage(t, e, i) {
          if (t.target == r) {
            if (t.type === se.IS_CONTENT_SCRIPT_READY) {
              if (this.Ms) {
                i({ ready: !0 });
              } else (this.Ps = !0), this.Os().then(i);
              return !0;
            }
            if (t.type === se.GET_INIT_DATA) {
              return i(this.Ls()), !0;
            }
            if (t.type === se.DISCONNECT && t.sender == o) {
              const t = new lt(r, u, Kt);
              b.l(t), i();
            } else {
              if (t.type == n.TEARDOWN) {
                const e = t;
                return this.Ns(e.data), i(), !0;
              }
              t.type === n.ON_NOTIF && this.Vs();
            }
          }
          return !1;
        }
        Vs() {
          console.log("Show Notification");
        }
        Ns(t) {
          var e, i, n;
          if (t.showAlert && t.alertModal) {
            const i = null !== (e = t.buttonUrl) && void 0 !== e ? e : this.rt.getPartyUrl();
            Wt(t.alertModal, i);
          }
          this._e.teardown(), this.ti.teardown(), this.Ts.teardown(), this.Ci.teardown();
          const o = {
              name: "error",
              action: {
                description: null === (i = t.alertModal) || void 0 === i ? void 0 : i.title,
                reason: null === (n = t.alertModal) || void 0 === n ? void 0 : n.content
              }
            },
            a = new s(r, u, o);
          b.l(a), window.teleparty && (window.teleparty.contentScriptInjected = !1) && (window.teleparty.contentScriptReady = !1);
        }
        Se(t) {
          if ("Please open a video on Amazon Prime Video then click on the Tp icon" === t) return;
          const e = new s(r, u, { name: "error", action: { reason: t } });
          b.l(e);
        }
        Us() {
          return Ae(this, void 0, void 0, function* () {
            return S(() => this.$s, 5e3)();
          });
        }
        Os() {
          return Ae(this, void 0, void 0, function* () {
            try {
              console.log("Waiting for content script ready"), yield this.Us();
              const t = yield this.Hs();
              return this.Gs(), t;
            } catch (t) {
              const e = { message: O, showButton: !1 };
              return this.Se(O), { ready: !1, error: e };
            } finally {
              this.Ps = !1;
            }
          });
        }
        Hs() {
          return Ae(this, void 0, void 0, function* () {
            let t;
            try {
              yield this.yi.waitVideoApiReadyAsync();
              const e = yield this.Ws();
              e && e.error
                ? (w("Error is:", e.error),
                  (t = { message: e.error, showButton: !0 }),
                  (this.Ms = !0),
                  window.teleparty && (window.teleparty.contentScriptReady = !0))
                : (e && e.showReviewMessage && (this.Ie = !0),
                  (this.Ms = !0),
                  window.teleparty && (window.teleparty.contentScriptReady = !0));
            } catch (e) {
              (t = { message: e.message, showButton: !1 }), this.Se(e.message);
            }
            return { ready: this.Ms, error: t };
          });
        }
        Ls() {
          return {
            inSession: this.rt.inSession,
            isChatVisible: this.rt.isPartyWindowsActive() ? this.rt.getChatWindowVisible() : this.rt.getChatVisible(),
            partyUrl: this.rt.getPartyUrl(),
            showReviewMessage: !1,
            partyWindowsActive: this.rt.isPartyWindowsActive()
          };
        }
        Ws() {
          return Ae(this, void 0, void 0, function* () {
            const t = yield this.zs();
            return b.l(t);
          });
        }
        zs() {
          return Ae(this, void 0, void 0, function* () {
            const t = { videoId: (yield this.yi.getVideoDataAsync()).videoId };
            return new ae(r, u, t);
          });
        }
      } {
        constructor() {
          const t = new Y(),
            e = new re(t),
            i = new Ie(t, e);
          let n;
          (n = window.teleparty && window.teleparty.pageControls ? window.teleparty.pageControls : new Ii(e)),
            super(e, t, i, n),
            (this.serviceName = "Netflix"),
            w("Netflix Content Script");
        }
      }
      (window.teleparty && (null === (ki = window.teleparty) || void 0 === ki ? void 0 : ki.contentScriptInjected)) ||
        (window.teleparty || (console.log("Set Teleparty"), (window.teleparty = {})),
        (window.teleparty.contentScriptInjected = !0),
        new xi(),
        w("Initialized content script"));
    })();
})();
