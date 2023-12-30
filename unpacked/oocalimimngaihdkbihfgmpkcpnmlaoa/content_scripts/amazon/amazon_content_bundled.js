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
          '<div id="chat-wrapper" tpInjected>\r\n    <iframe style="display: none;" id="tpChatFrame" allow="autoplay; clipboard-read; clipboard-write; payment; camera; microphone;" src="{CHAT_URL}">\r\n\r\n    </iframe>\r\n</div>';
      },
      4296: (t) => {
        t.exports =
          '<style tpInjected>\r\n    .hidden {\r\n    display: none !important;\r\n}   \r\n</style>\r\n<div class="hidden" id="tpIconContainer" tpInjected>\r\n    <div class="hidden" id="tp-buttons-container">\r\n        <button id="tp-icon-container">\r\n            <img id="tp-icon-white" src=\'{EXTENSION_LOGO_GRADIENT}\' />\r\n            <img id="play-chat-icon" class="hidden" src=\'{PLAY_CHAT}\' />\r\n            <span class="tooltiptext extension-txt" style="width: 120px;">Open Teleparty</span>\r\n            <div class="hidden" id="tp-message-indicator"></div>\r\n        </button>\r\n        <div class="tp-seperator"></div>\r\n        \x3c!-- <button class="tp-control-button" id="tp-friends-button">\r\n            <img id="tp-friends-image" src=\'{FRIENDS_IMAGE}\' />\r\n            <span class="tooltiptext extension-txt" style="width: 120px;"> Friends List</span>\r\n        </button> --\x3e\r\n        <div class="hidden" id="tp-party-active">\r\n            <button class="tp-control-button" id="tp-link-button">\r\n                <img class="tp-button-image tp-center-image" data-tp-id="overlay-copy_link" src=\'{LINK_IMAGE}\' />\r\n                <img class="tp-hover-image tp-center-image" data-tp-id="overlay-copy_link" src=\'{LINK_ACTIVE_IMAGE}\' />\r\n                <span class="tooltiptext extension-txt" style="width: 120px;">Copy link</span>\r\n            </button>\r\n            <button class="tp-control-button" id="tp-chat-button">\r\n                <img id="tp-chat-reset" class="tp-center-image hidden" data-tp-id="overlay-reset_chat" src=\'{RESET_CHAT_IMAGE}\' />\r\n                <img id="tp-chat-hidden" class="tp-button-image tp-center-image" src=\'{CHAT_HIDDEN_IMAGE}\' />\r\n                <img id="tp-chat-gray" class="hidden tp-button-image tp-center-image" src=\'{CHAT_GRAY_IMAGE}\' />\r\n                <img class="tp-hover-image tp-center-image" data-tp-id="overlay-show_chat" src=\'{CHAT_ACTIVE_IMAGE}\' />\r\n                <div class="hidden" id="tp-message-indicator"></div>\r\n                <span class="tooltiptext extension-txt" style="width: 120px;">Show chat</span>\r\n            </button>\r\n            <button class="tp-control-button" id="tp-disconnect-button">\r\n                <img class="tp-button-image tp-center-image" data-tp-id="overlay-leave_party"\r\n                    src=\'{DISCONNECT_IMAGE}\' />\r\n                <img class="tp-hover-image tp-center-image" data-tp-id="overlay-leave_party" src=\'{DISCONNECT_IMAGE}\' />\r\n                <span class="tooltiptext extension-txt" style="width: 120px;">Leave Party</span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n    \x3c!-- <button class="hidden tp-control-button" id="tp-chat-close-button">\r\n        <img id="tp-start-image" data-tp-id="overlay-hide_chat" src=\'{ARROW_RIGHT}\' />\r\n        <span class="tooltiptext extension-txt" style="width: 100px;">Hide chat</span>\r\n    </button> --\x3e\r\n    <div id="tp-error-box" class="hidden">\r\n        <p class="extension-txt-indicator" id="tp-controls-error-text">\r\n            Failed to connect to background script. Please Try again later\r\n        </p>\r\n    </div>\r\n</div>';
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
      var t = console.log.bind(window.console),
        e = i(7206),
        n = i.n(e);
      const s = 340,
        u = chrome.runtime.id,
        o = "reactionContainerOpen",
        r = "https://sessions.teleparty.com",
        a = "https://redirect.teleparty.com",
        c = a,
        D = `${a}/sidebar`,
        h = ["heart", "angry", "fire", "laugh", "surprise", "cry"],
        d = ["heart", "angry", "fire", "laugh", "surprise", "cry"],
        l = "recentlyUsedEmojiMap",
        p = "redirectDataMap",
        g = [
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
        F =
          /(?:\uD83D(?:\uDD73\uFE0F?|\uDC41(?:(?:\uFE0F(?:\u200D\uD83D\uDDE8\uFE0F?)?|\u200D\uD83D\uDDE8\uFE0F?))?|[\uDDE8\uDDEF]\uFE0F?|\uDC4B(?:\uD83C[\uDFFB-\uDFFF])?|\uDD90(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|[\uDD96\uDC4C\uDC48\uDC49\uDC46\uDD95\uDC47\uDC4D\uDC4E\uDC4A\uDC4F\uDE4C\uDC50\uDE4F\uDC85\uDCAA\uDC42\uDC43\uDC76\uDC66\uDC67](?:\uD83C[\uDFFB-\uDFFF])?|\uDC71(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2640\u2642]\uFE0F?))?)|\u200D(?:[\u2640\u2642]\uFE0F?)))?|\uDC68(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC68\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)|\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)))))?|\uDC69(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFC-\uDFFF]|\uDC68\uD83C[\uDFFC-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFE]|\uDC68\uD83C[\uDFFB-\uDFFE])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])|\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])))))?|[\uDC74\uDC75](?:\uD83C[\uDFFB-\uDFFF])?|[\uDE4D\uDE4E\uDE45\uDE46\uDC81\uDE4B\uDE47\uDC6E](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD75(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC82\uDC77](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDC78(?:\uD83C[\uDFFB-\uDFFF])?|\uDC73(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC72\uDC70\uDC7C](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC86\uDC87\uDEB6](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC83\uDD7A](?:\uD83C[\uDFFB-\uDFFF])?|\uDD74(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uDC6F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDEA3\uDEB4\uDEB5](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDEC0\uDECC\uDC6D\uDC6B\uDC6C](?:\uD83C[\uDFFB-\uDFFF])?|\uDDE3\uFE0F?|\uDC15(?:\u200D\uD83E\uDDBA)?|[\uDC3F\uDD4A\uDD77\uDD78\uDDFA\uDEE3\uDEE4\uDEE2\uDEF3\uDEE5\uDEE9\uDEF0\uDECE\uDD70\uDD79\uDDBC\uDD76\uDECD\uDDA5\uDDA8\uDDB1\uDDB2\uDCFD\uDD6F\uDDDE\uDDF3\uDD8B\uDD8A\uDD8C\uDD8D\uDDC2\uDDD2\uDDD3\uDD87\uDDC3\uDDC4\uDDD1\uDDDD\uDEE0\uDDE1\uDEE1\uDDDC\uDECF\uDECB\uDD49]\uFE0F?|[\uDE00\uDE03\uDE04\uDE01\uDE06\uDE05\uDE02\uDE42\uDE43\uDE09\uDE0A\uDE07\uDE0D\uDE18\uDE17\uDE1A\uDE19\uDE0B\uDE1B-\uDE1D\uDE10\uDE11\uDE36\uDE0F\uDE12\uDE44\uDE2C\uDE0C\uDE14\uDE2A\uDE34\uDE37\uDE35\uDE0E\uDE15\uDE1F\uDE41\uDE2E\uDE2F\uDE32\uDE33\uDE26-\uDE28\uDE30\uDE25\uDE22\uDE2D\uDE31\uDE16\uDE23\uDE1E\uDE13\uDE29\uDE2B\uDE24\uDE21\uDE20\uDE08\uDC7F\uDC80\uDCA9\uDC79-\uDC7B\uDC7D\uDC7E\uDE3A\uDE38\uDE39\uDE3B-\uDE3D\uDE40\uDE3F\uDE3E\uDE48-\uDE4A\uDC8B\uDC8C\uDC98\uDC9D\uDC96\uDC97\uDC93\uDC9E\uDC95\uDC9F\uDC94\uDC9B\uDC9A\uDC99\uDC9C\uDDA4\uDCAF\uDCA2\uDCA5\uDCAB\uDCA6\uDCA8\uDCA3\uDCAC\uDCAD\uDCA4\uDC40\uDC45\uDC44\uDC8F\uDC91\uDC6A\uDC64\uDC65\uDC63\uDC35\uDC12\uDC36\uDC29\uDC3A\uDC31\uDC08\uDC2F\uDC05\uDC06\uDC34\uDC0E\uDC2E\uDC02-\uDC04\uDC37\uDC16\uDC17\uDC3D\uDC0F\uDC11\uDC10\uDC2A\uDC2B\uDC18\uDC2D\uDC01\uDC00\uDC39\uDC30\uDC07\uDC3B\uDC28\uDC3C\uDC3E\uDC14\uDC13\uDC23-\uDC27\uDC38\uDC0A\uDC22\uDC0D\uDC32\uDC09\uDC33\uDC0B\uDC2C\uDC1F-\uDC21\uDC19\uDC1A\uDC0C\uDC1B-\uDC1E\uDC90\uDCAE\uDD2A\uDDFE\uDDFB\uDC92\uDDFC\uDDFD\uDD4C\uDED5\uDD4D\uDD4B\uDC88\uDE82-\uDE8A\uDE9D\uDE9E\uDE8B-\uDE8E\uDE90-\uDE9C\uDEF5\uDEFA\uDEB2\uDEF4\uDEF9\uDE8F\uDEA8\uDEA5\uDEA6\uDED1\uDEA7\uDEF6\uDEA4\uDEA2\uDEEB\uDEEC\uDCBA\uDE81\uDE9F-\uDEA1\uDE80\uDEF8\uDD5B\uDD67\uDD50\uDD5C\uDD51\uDD5D\uDD52\uDD5E\uDD53\uDD5F\uDD54\uDD60\uDD55\uDD61\uDD56\uDD62\uDD57\uDD63\uDD58\uDD64\uDD59\uDD65\uDD5A\uDD66\uDD25\uDCA7\uDEF7\uDD2E\uDC53-\uDC62\uDC51\uDC52\uDCFF\uDC84\uDC8D\uDC8E\uDD07-\uDD0A\uDCE2\uDCE3\uDCEF\uDD14\uDD15\uDCFB\uDCF1\uDCF2\uDCDE-\uDCE0\uDD0B\uDD0C\uDCBB\uDCBD-\uDCC0\uDCFA\uDCF7-\uDCF9\uDCFC\uDD0D\uDD0E\uDCA1\uDD26\uDCD4-\uDCDA\uDCD3\uDCD2\uDCC3\uDCDC\uDCC4\uDCF0\uDCD1\uDD16\uDCB0\uDCB4-\uDCB8\uDCB3\uDCB9\uDCB1\uDCB2\uDCE7-\uDCE9\uDCE4-\uDCE6\uDCEB\uDCEA\uDCEC-\uDCEE\uDCDD\uDCBC\uDCC1\uDCC2\uDCC5-\uDCD0\uDD12\uDD13\uDD0F-\uDD11\uDD28\uDD2B\uDD27\uDD29\uDD17\uDD2C\uDD2D\uDCE1\uDC89\uDC8A\uDEAA\uDEBD\uDEBF\uDEC1\uDED2\uDEAC\uDDFF\uDEAE\uDEB0\uDEB9-\uDEBC\uDEBE\uDEC2-\uDEC5\uDEB8\uDEAB\uDEB3\uDEAD\uDEAF\uDEB1\uDEB7\uDCF5\uDD1E\uDD03\uDD04\uDD19-\uDD1D\uDED0\uDD4E\uDD2F\uDD00-\uDD02\uDD3C\uDD3D\uDD05\uDD06\uDCF6\uDCF3\uDCF4\uDD31\uDCDB\uDD30\uDD1F-\uDD24\uDD34\uDFE0-\uDFE2\uDD35\uDFE3-\uDFE5\uDFE7-\uDFE9\uDFE6\uDFEA\uDFEB\uDD36-\uDD3B\uDCA0\uDD18\uDD33\uDD32\uDEA9])|\uD83E(?:[\uDD1A\uDD0F\uDD1E\uDD1F\uDD18\uDD19\uDD1B\uDD1C\uDD32\uDD33\uDDB5\uDDB6\uDDBB\uDDD2](?:\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?)))?|[\uDDD4\uDDD3](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDCF\uDD26\uDD37](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD34\uDDD5\uDD35\uDD30\uDD31\uDD36](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDB8\uDDB9\uDDD9-\uDDDD](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDDDE\uDDDF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDDCD\uDDCE\uDDD6\uDDD7\uDD38](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD3C(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDD3D\uDD3E\uDD39\uDDD8](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD23\uDD70\uDD29\uDD2A\uDD11\uDD17\uDD2D\uDD2B\uDD14\uDD10\uDD28\uDD25\uDD24\uDD12\uDD15\uDD22\uDD2E\uDD27\uDD75\uDD76\uDD74\uDD2F\uDD20\uDD73\uDD13\uDDD0\uDD7A\uDD71\uDD2C\uDD21\uDD16\uDDE1\uDD0E\uDD0D\uDD1D\uDDBE\uDDBF\uDDE0\uDDB7\uDDB4\uDD3A\uDDB0\uDDB1\uDDB3\uDDB2\uDD8D\uDDA7\uDDAE\uDD8A\uDD9D\uDD81\uDD84\uDD93\uDD8C\uDD99\uDD92\uDD8F\uDD9B\uDD94\uDD87\uDDA5\uDDA6\uDDA8\uDD98\uDDA1\uDD83\uDD85\uDD86\uDDA2\uDD89\uDDA9\uDD9A\uDD9C\uDD8E\uDD95\uDD96\uDD88\uDD8B\uDD97\uDD82\uDD9F\uDDA0\uDD40\uDD6D\uDD5D\uDD65\uDD51\uDD54\uDD55\uDD52\uDD6C\uDD66\uDDC4\uDDC5\uDD5C\uDD50\uDD56\uDD68\uDD6F\uDD5E\uDDC7\uDDC0\uDD69\uDD53\uDD6A\uDD59\uDDC6\uDD5A\uDD58\uDD63\uDD57\uDDC8\uDDC2\uDD6B\uDD6E\uDD5F-\uDD61\uDD80\uDD9E\uDD90\uDD91\uDDAA\uDDC1\uDD67\uDD5B\uDD42\uDD43\uDD64\uDDC3\uDDC9\uDDCA\uDD62\uDD44\uDDED\uDDF1\uDDBD\uDDBC\uDE82\uDDF3\uDE90\uDDE8\uDDE7\uDD47-\uDD49\uDD4E\uDD4F\uDD4D\uDD4A\uDD4B\uDD45\uDD3F\uDD4C\uDE80\uDE81\uDDFF\uDDE9\uDDF8\uDDF5\uDDF6\uDD7D\uDD7C\uDDBA\uDDE3-\uDDE6\uDD7B\uDE71-\uDE73\uDD7E\uDD7F\uDE70\uDDE2\uDE95\uDD41\uDDEE\uDE94\uDDFE\uDE93\uDDAF\uDDF0\uDDF2\uDDEA-\uDDEC\uDE78-\uDE7A\uDE91\uDE92\uDDF4\uDDF7\uDDF9-\uDDFD\uDDEF])|[\u263A\u2639\u2620\u2763\u2764]\uFE0F?|\u270B(?:\uD83C[\uDFFB-\uDFFF])?|[\u270C\u261D](?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\u270A(?:\uD83C[\uDFFB-\uDFFF])?|\u270D(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uD83C(?:\uDF85(?:\uD83C[\uDFFB-\uDFFF])?|\uDFC3(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC7\uDFC2](?:\uD83C[\uDFFB-\uDFFF])?|\uDFCC(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC4\uDFCA](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDFCB(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFF5\uDF36\uDF7D\uDFD4-\uDFD6\uDFDC-\uDFDF\uDFDB\uDFD7\uDFD8\uDFDA\uDFD9\uDFCE\uDFCD\uDF21\uDF24-\uDF2C\uDF97\uDF9F\uDF96\uDF99-\uDF9B\uDF9E\uDFF7\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37]\uFE0F?|\uDFF4(?:(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F|\uDC73\uDB40\uDC63\uDB40\uDC74\uDB40\uDC7F|\uDC77\uDB40\uDC6C\uDB40\uDC73\uDB40\uDC7F)))?|\uDFF3(?:(?:\uFE0F(?:\u200D\uD83C\uDF08)?|\u200D\uD83C\uDF08))?|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|[\uDFFB-\uDFFF\uDF38-\uDF3C\uDF37\uDF31-\uDF35\uDF3E-\uDF43\uDF47-\uDF53\uDF45\uDF46\uDF3D\uDF44\uDF30\uDF5E\uDF56\uDF57\uDF54\uDF5F\uDF55\uDF2D-\uDF2F\uDF73\uDF72\uDF7F\uDF71\uDF58-\uDF5D\uDF60\uDF62-\uDF65\uDF61\uDF66-\uDF6A\uDF82\uDF70\uDF6B-\uDF6F\uDF7C\uDF75\uDF76\uDF7E\uDF77-\uDF7B\uDF74\uDFFA\uDF0D-\uDF10\uDF0B\uDFE0-\uDFE6\uDFE8-\uDFED\uDFEF\uDFF0\uDF01\uDF03-\uDF07\uDF09\uDFA0-\uDFA2\uDFAA\uDF11-\uDF20\uDF0C\uDF00\uDF08\uDF02\uDF0A\uDF83\uDF84\uDF86-\uDF8B\uDF8D-\uDF91\uDF80\uDF81\uDFAB\uDFC6\uDFC5\uDFC0\uDFD0\uDFC8\uDFC9\uDFBE\uDFB3\uDFCF\uDFD1-\uDFD3\uDFF8\uDFA3\uDFBD\uDFBF\uDFAF\uDFB1\uDFAE\uDFB0\uDFB2\uDCCF\uDC04\uDFB4\uDFAD\uDFA8\uDF92\uDFA9\uDF93\uDFBC\uDFB5\uDFB6\uDFA4\uDFA7\uDFB7-\uDFBB\uDFA5\uDFAC\uDFEE\uDFF9\uDFE7\uDFA6\uDD8E\uDD91-\uDD9A\uDE01\uDE36\uDE2F\uDE50\uDE39\uDE1A\uDE32\uDE51\uDE38\uDE34\uDE33\uDE3A\uDE35\uDFC1\uDF8C])|\u26F7\uFE0F?|\u26F9(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\u2618\u26F0\u26E9\u2668\u26F4\u2708\u23F1\u23F2\u2600\u2601\u26C8\u2602\u26F1\u2744\u2603\u2604\u26F8\u2660\u2665\u2666\u2663\u265F\u26D1\u260E\u2328\u2709\u270F\u2712\u2702\u26CF\u2692\u2694\u2699\u2696\u26D3\u2697\u26B0\u26B1\u26A0\u2622\u2623\u2B06\u2197\u27A1\u2198\u2B07\u2199\u2B05\u2196\u2195\u2194\u21A9\u21AA\u2934\u2935\u269B\u2721\u2638\u262F\u271D\u2626\u262A\u262E\u25B6\u23ED\u23EF\u25C0\u23EE\u23F8-\u23FA\u23CF\u2640\u2642\u2695\u267E\u267B\u269C\u2611\u2714\u2716\u303D\u2733\u2734\u2747\u203C\u2049\u3030\u00A9\u00AE\u2122]\uFE0F?|[\u0023\u002A\u0030-\u0039](?:\uFE0F\u20E3|\u20E3)|[\u2139\u24C2\u3297\u3299\u25FC\u25FB\u25AA\u25AB]\uFE0F?|[\u2615\u26EA\u26F2\u26FA\u26FD\u2693\u26F5\u231B\u23F3\u231A\u23F0\u2B50\u26C5\u2614\u26A1\u26C4\u2728\u26BD\u26BE\u26F3\u267F\u26D4\u2648-\u2653\u26CE\u23E9-\u23EC\u2B55\u2705\u274C\u274E\u2795-\u2797\u27B0\u27BF\u2753-\u2755\u2757\u26AB\u26AA\u2B1B\u2B1C\u25FE\u25FD])/g,
        v = [
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
        y = [
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
        m = [
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
        f = {
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
      function C(t) {
        return t
          ? t
              .replace(/&/g, "&amp;")
              .replace(/"/g, "&quot;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/[\r\n]{3,}/gm, "\n\n")
              .replace(
                F,
                `<span style="font-size: ${(function (t) {
                  let e = 16;
                  const i = t.replace(F, "").replace(/[\uFE0F]/g, ""),
                    n = ((t || "").match(F) || []).length;
                  return 0 === i.length && n <= 3 && (e = 32), e;
                })(t)}px">$&</span>`
              )
          : t;
      }
      const w = {
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
              (10 === t.getMonth() && t.getDate() >= 18 && t.getDate() <= 28) ||
              (9 === t.getMonth() && t.getDate() >= 8 && t.getDate() <= 14)
            );
          }
        },
        E = "Please open a video on Amazon Prime Video then click on the Tp icon",
        b = "Failed to read chrome storage. Please refresh the page and try again",
        _ = "Failed to connect to Script. Please refresh the page and try again",
        j = "An unexpected error occured. Please refresh the page and try again.",
        B = "Video element not found.";
      var A = function (t, e, i, n) {
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
      const k = new (class {
        setItemsAsync(t) {
          return A(this, void 0, void 0, function* () {
            return new Promise((e, i) => {
              chrome.storage.local.set(t, () => {
                chrome.runtime.lastError ? i(new Error("Failed to write to chrome storage. Please refresh the page and try again")) : e();
              });
            });
          });
        }
      })();
      Object.freeze(k);
      const Q = k;
      var I = function (t, e, i, n) {
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
      class x {
        constructor(t) {
          var e, i, n, s, u, o;
          (this.l = {
            userIcon: null !== (e = t.userIcon) && void 0 !== e ? e : "",
            userNickname: null !== (i = t.userNickname) && void 0 !== i ? i : "",
            nameColor: null !== (n = t.nameColor) && void 0 !== n ? n : "",
            badge: null !== (s = t.badge) && void 0 !== s ? s : "",
            reactions: null !== (u = t.reactions) && void 0 !== u ? u : d
          }),
            (this.p = null !== (o = t.userId) && void 0 !== o ? o : "");
        }
        saveUserIcon(e) {
          (e = C(e)),
            (this.l.userIcon = e),
            Q.setItemsAsync({ userIcon: e }),
            t("new user settings after set user icon: " + JSON.stringify(this.l));
        }
        saveUserNickname(e) {
          (this.l.userNickname = e),
            Q.setItemsAsync({ userNickname: e }),
            t("new user settings after set user nickname: " + JSON.stringify(this.l));
        }
        saveUserSettings(e) {
          return I(this, void 0, void 0, function* () {
            const i = C(e.userIcon);
            (this.l = e),
              (this.l.userIcon = i),
              yield Q.setItemsAsync({
                userNickname: e.userNickname,
                userIcon: i,
                nameColor: e.nameColor,
                badge: e.badge,
                reactions: e.reactions
              }),
              t("new user settings after save: " + JSON.stringify(this.l));
          });
        }
        get userSettings() {
          return this.l;
        }
        get permId() {
          return this.p;
        }
        get userIcon() {
          return this.l.userIcon;
        }
        get userNickname() {
          return this.l.userNickname;
        }
      }
      const S = "Service_Background",
        T = "Popup",
        M = "Content_Script",
        P = "Page_Controls";
      const $ = new (class {
        addListener(t) {
          chrome.runtime.onMessage.addListener(t);
        }
        removeListener(t) {
          chrome.runtime.onMessage.removeListener(t);
        }
        sendMessageToTabAsync(e, i, n = 2e4) {
          return new Promise((s, u) => {
            const o = setTimeout(() => {
              u();
            }, n);
            try {
              chrome.tabs.sendMessage(i, e, (i) => {
                chrome.runtime.lastError && t(chrome.runtime.lastError.message + JSON.stringify(e)), clearTimeout(o), s(i);
              });
            } catch (t) {
              clearTimeout(o), u(t);
            }
          });
        }
        g(t, e) {
          return new Promise((i, n) => {
            let s = null;
            e &&
              (s = setTimeout(() => {
                n({ error: "Send Message Timeout" });
              }, e));
            try {
              chrome.runtime.sendMessage(u, t, (e) => {
                chrome.runtime.lastError && console.log(chrome.runtime.lastError.message + JSON.stringify(t)), s && clearTimeout(s), i(e);
              });
            } catch (t) {
              s && clearTimeout(s), n(t);
            }
          });
        }
      })();
      class N {
        constructor(t, e, i) {
          (this.sender = t), (this.target = e), (this.type = i);
        }
      }
      class V extends N {
        constructor(t, e, i) {
          super(t, e, i), (this.F = i);
        }
      }
      var R, O;
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
      })(R || (R = {}));
      class U extends V {
        constructor(t, e, i) {
          super(t, e, R.SET_TYPING), (this.data = i);
        }
      }
      class G extends V {
        constructor(t, e, i) {
          super(t, e, R.SEND_MESSAGE), (this.data = i);
        }
      }
      class L extends V {
        constructor(t, e, i) {
          super(t, e, R.BROADCAST_USER_SETTINGS), (this.data = i);
        }
      }
      class H extends N {
        constructor(t, e, i) {
          super(t, e, i), (this.type = i);
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
          (t.GET_EXPERIMENT_FLAG = "getExpFlag");
      })(O || (O = {}));
      class z extends H {
        constructor(t, e, i) {
          super(t, e, O.TEARDOWN), (this.data = i);
        }
      }
      class W extends H {
        constructor(t, e, i) {
          super(t, e, O.LOG_EVENT), (this.data = i), (this.sender = t), (this.target = e);
        }
      }
      class K extends V {
        constructor(t, e, i) {
          super(t, e, R.SEND_REACTION), (this.data = i);
        }
      }
      class J extends V {
        constructor(t, e, i) {
          super(t, e, R.SEND_GIF), (this.data = i);
        }
      }
      class Y {
        constructor() {
          this.resetTasks(), (this.v = []), (this.m = 0), (this.C = Promise.resolve()), (this._ = !0);
        }
        createInstance() {
          return new Y();
        }
        pushTask(t, e) {
          if (!this._) return;
          const i = { action: t, name: e };
          0 === this.m && this.resetTasks(),
            (this.m = this.v.push(i)),
            (this.C = this.C.then(() => {
              if (this.v.includes(i) && this._)
                return this.B(i)().then(() => {
                  this.v.shift(), (this.m -= 1);
                });
            }));
        }
        disable() {
          (this._ = !1), this.resetTasks();
        }
        resetTasks() {
          (this.C = Promise.resolve()), (this.v = []), (this.m = 0);
        }
        B(t) {
          return function () {
            return t.action().catch(() => {});
          };
        }
        get tasksInFlight() {
          return this.m;
        }
        hasTaskInQueue(t) {
          return this.v.some((e) => e.name === t);
        }
        removeTask(t) {
          console.log(this.v),
            (this.v = this.v.filter((e, i) => (e.name === t && 0 == i ? (console.error("Cannot filter active task"), !0) : e.name !== t))),
            (this.m = this.v.length),
            console.log(this.v);
        }
      }
      const X = new Y();
      var q = function (t, e, i, n) {
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
      const Z = new (class {
        getItemsAsync(t) {
          return q(this, void 0, void 0, function* () {
            return new Promise((e, i) => {
              chrome.storage.local.get(t, (t) => {
                chrome.runtime.lastError ? i(new Error(b)) : e(t);
              });
            });
          });
        }
        getAllItemsAsync() {
          return q(this, void 0, void 0, function* () {
            return new Promise((t, e) => {
              chrome.storage.local.get(null, (i) => {
                chrome.runtime.lastError ? e(new Error(b)) : t(i);
              });
            });
          });
        }
      })();
      Object.freeze(Z);
      const tt = Z;
      var et,
        it = new Uint8Array(16);
      function nt() {
        if (
          !et &&
          !(et =
            ("undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
            ("undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
        )
          throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return et(it);
      }
      const st = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      const ut = function (t) {
        return "string" == typeof t && st.test(t);
      };
      for (var ot = [], rt = 0; rt < 256; ++rt) ot.push((rt + 256).toString(16).substr(1));
      const at = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = (
            ot[t[e + 0]] +
            ot[t[e + 1]] +
            ot[t[e + 2]] +
            ot[t[e + 3]] +
            "-" +
            ot[t[e + 4]] +
            ot[t[e + 5]] +
            "-" +
            ot[t[e + 6]] +
            ot[t[e + 7]] +
            "-" +
            ot[t[e + 8]] +
            ot[t[e + 9]] +
            "-" +
            ot[t[e + 10]] +
            ot[t[e + 11]] +
            ot[t[e + 12]] +
            ot[t[e + 13]] +
            ot[t[e + 14]] +
            ot[t[e + 15]]
          ).toLowerCase();
        if (!ut(i)) throw TypeError("Stringified UUID is invalid");
        return i;
      };
      const ct = function (t, e, i) {
        var n = (t = t || {}).random || (t.rng || nt)();
        if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), e)) {
          i = i || 0;
          for (var s = 0; s < 16; ++s) e[i + s] = n[s];
          return e;
        }
        return at(n);
      };
      var Dt;
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
      })(Dt || (Dt = {}));
      const ht = chrome.extension.getURL("img/x-circle.svg"),
        dt = "with-chat";
      var lt = function (t, e, i, n) {
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
      const pt = new (class {
        isUserIconValid(t) {
          return (
            !!t &&
            (t.includes("?newIconUrl=") ? m.includes(t.split("?newIconUrl=")[1]) && v.includes(t.split("?newIconUrl=")[0]) : m.includes(t))
          );
        }
        isUserIdValid(t) {
          return "string" == typeof t && (16 === t.length || 36 === t.length);
        }
        isUserNickNameValid(t) {
          return t && "string" == typeof t && t.length < 20;
        }
        getDefaultUserIcon() {
          return y[Math.floor(Math.random() * y.length)];
        }
        getDefaultUserNickName() {
          return "";
        }
        A(t) {
          return lt(this, void 0, void 0, function* () {
            try {
              yield Q.setItemsAsync(t);
            } catch (t) {}
          });
        }
        getValidatedChromeStorageDataAsync() {
          return lt(this, void 0, void 0, function* () {
            const t = yield tt.getAllItemsAsync(),
              e = pt.validateStorageData(t);
            return JSON.stringify(t) !== JSON.stringify(e) && this.A(e), e;
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
      Object.freeze(pt);
      const gt = pt,
        Ft = 1e3,
        vt = 72e5,
        yt = 12e4,
        mt = {
          title: "Teleparty | Disconnected from party",
          content:
            "Only the owner of this party can change the episode. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        },
        ft = {
          title: "Teleparty | Are you still there?",
          content: "You will be removed from the party in 120 seconds for inactivity. Move your mouse to continue watching."
        },
        Ct = {
          title: "Teleparty | Disconnected from party",
          content:
            "It looks like someone changed the video and we weren't able to connect you. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        },
        wt = {
          title: "Teleparty | Disconnected from party",
          content:
            "It looks like you lost connection to the extension. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        };
      function Et(t, e) {
        bt();
        const i = e
          ? (function (t) {
              return `\n    <div id="alert-dialog-wrapper">\n      <div id="alert-dialog-container">\n        <div id="alert-title-wrapper">\n            <div class="alert-title">\n                <p id="alert-title-txt" class="extension-title">\n                    ${t.title}\n                </p>\n                <button id="alert-x-btn">\n                    <img src="${ht}" alt="close" />\n                </button>\n            </div>\n            <div class="extension-border-bot">\n                \n            </div>\n        </div>\n        <div id="alert-description">\n            <p id="alert-content-txt" class="extension-txt">\n              ${t.content}\n            </p>\n            <button id="alert-return-btn" class="extension-btn">${t.buttonTitle}</button>\n        </div>\n      </div>\n    </div>\n    `;
            })(t)
          : (function (t) {
              return `\n  <div id="alert-dialog-wrapper">\n    <div id="alert-dialog-container">\n      <div id="alert-title-wrapper">\n          <div class="alert-title">\n              <p id="alert-title-txt" class="extension-title">\n                  ${t.title}\n              </p>\n              <button id="alert-x-btn">\n                  <img src="${ht}" alt="close" />\n              </button>\n          </div>\n          <div class="extension-border-bot">\n              \n          </div>\n      </div>\n      <div id="alert-description">\n          <p id="alert-content-txt" class="extension-txt">\n            ${t.content}\n          </p>\n      </div>\n    </div>\n  </div>\n  `;
            })(t);
        document.body.insertAdjacentHTML("afterbegin", i),
          jQuery("#alert-x-btn").click(() => {
            bt();
          }),
          e &&
            jQuery("#alert-return-btn").click(() => {
              bt(), (window.location.href = e);
            });
      }
      function bt() {
        const t = document.querySelector("#alert-dialog-wrapper");
        t && t.remove();
      }
      const _t = { showAlert: !1 },
        jt = {
          showAlert: !0,
          alertModal: {
            title: "Teleparty | Disconnected from party",
            content: "You were removed from the party from inactivity. Click the button below rejoin the party.",
            buttonTitle: "Return to Party"
          }
        },
        Bt = {
          showAlert: !0,
          alertModal: {
            title: "Teleparty | Disconnected from party",
            content:
              "Sorry, long parties only work for consecutive episodes for now. Please share a new Teleparty to continue watching together, or click the button below to rejoin the party.",
            buttonTitle: "Return to Party"
          }
        },
        At = { showAlert: !0, alertModal: Ct };
      var kt;
      !(function (t) {
        (t.HEART = "heart"), (t.ANGRY = "angry"), (t.FIRE = "fire"), (t.LAUGH = "laugh"), (t.CRY = "cry"), (t.SURPRISE = "surprise");
      })(kt || (kt = {}));
      var Qt,
        It = function (t, e, i, n) {
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
      class xt {
        constructor(t) {
          (this.k = this.I.bind(this)),
            (this.S = this.resetIdleTimer.bind(this)),
            (this.T = (t) => {
              "TP_EMOJI_REQ_RELOAD" === t.data && this.updateFrequentlyUsed(), t.data && "emoji-click" === t.data.type && this.M(t.data);
            }),
            (this.P = (t) => {
              (t.target !== jQuery("#chat-input")[0] && t.target !== jQuery("#nickname-edit")[0]) || t.stopImmediatePropagation();
            }),
            (this.$ = (t) => {
              this.N.onVideoClick();
              const e = t.target;
              let i = "" !== e.id ? e.id : e.className;
              i = e.getAttribute("data-tp-id") ? e.getAttribute("data-tp-id") : i;
              const n = { name: "user_click", component: { name: i, type: e.nodeName, origin: "other" } },
                s = new W(M, S, n);
              $.g(s),
                t.target !== jQuery("emoji-picker")[0] &&
                  t.target !== jQuery("#chat-input")[0] &&
                  jQuery("#emoji-picker-container") &&
                  !jQuery("#emoji-picker-container").is(":hidden") &&
                  this.N.toggleEmojiClicker(),
                t.target instanceof HTMLElement &&
                  jQuery("#gif-picker-container").length &&
                  jQuery("#gif-picker-container")[0] &&
                  !jQuery("#gif-picker-container")[0].contains(t.target) &&
                  t.target !== jQuery("#chat-input")[0] &&
                  !jQuery("#gif-picker-container").is(":hidden") &&
                  "category-img" !== t.target.className &&
                  this.N.toggleGIFs();
            }),
            (this.M = (t) => {
              console.log("on Emoji Click");
              const e = jQuery("#chat-input")[0],
                i = t.detail.unicode,
                n = new W(M, S, { name: "user_click", component: { name: "chat_input_container-emoji_picker-emoji", type: i } });
              $.g(n);
              const s = new W(M, S, { eventType: `emoji-click-${i}`, sessionId: this.N.getSessionId() });
              $.g(s), X.pushTask(() => this.updateFrequentlyUsed(t.detail.emoji));
              const u = window.getSelection();
              if (!jQuery("#chat-input").is(":focus") && e.lastChild) {
                const t = document.createRange();
                t.setStartAfter(e.lastChild), null == u || u.removeAllRanges(), null == u || u.addRange(t);
              }
              this.N.focusChat(), this.V(i);
              e.scrollHeight - e.scrollTop <= e.clientHeight + 40 && (e.scrollTop = e.scrollHeight), this.R(), this.N.onInputChange();
            }),
            (this.N = t);
        }
        O() {
          t("Idle Warning called"), Et(ft);
          const e = new W(M, S, {
            name: "party_warning",
            action: { description: "user has been warned for being idle", reason: "user was idle for 120000 time in milliseconds." }
          });
          $.g(e);
          const i = new W(M, S, { eventType: "idle-warn-2hr", sessionId: this.N.getSessionId() });
          $.g(i), (this.U = setTimeout(this.G.bind(this), yt));
        }
        G() {
          t("Idle kick called");
          const e = new W(M, S, {
              name: "party_kick",
              action: { description: "user has been kicked for being idle", reason: "user was idle for 7200000 time in milliseconds." }
            }),
            i = new z(M, S, jt);
          $.g(e), $.g(i);
        }
        resetIdleTimer() {
          this.L && clearTimeout(this.L), this.U && (bt(), clearTimeout(this.U)), (this.L = setTimeout(this.O.bind(this), vt));
        }
        H() {
          (this.L = setTimeout(this.O.bind(this), vt)),
            (window.onmousemove = (t) => {
              t.isTrusted && this.S();
            }),
            (window.onfocus = () => this.S()),
            (window.onmousedown = () => this.S()),
            (window.ontouchstart = () => this.S()),
            (window.onkeydown = () => this.S());
        }
        W() {
          this.L && clearTimeout(this.L),
            this.U && clearTimeout(this.U),
            (window.onmousemove = null),
            (window.onmousedown = null),
            (window.ontouchstart = null),
            (window.onkeydown = null);
        }
        startListening() {
          t("Listening for chat events"), this.H(), this.K(), this.initWindowListeners();
        }
        stopListening() {
          this.J(), this.W(), this.Y();
        }
        I() {
          this.N.clearUnreadCount();
        }
        X(t) {
          if ((console.log("Pasting"), t.preventDefault(), t.clipboardData)) {
            const e = t.clipboardData.getData("text/plain");
            document.execCommand("insertHTML", !1, e);
          }
          this.N.onInputChange();
        }
        initWindowListeners() {
          jQuery(window).on("focus", this.k),
            window.addEventListener("message", this.T),
            document.addEventListener("dragstart", this.q.bind(this)),
            document.addEventListener("webkitfullscreenchange", this.N.onFullScreen),
            document.addEventListener("fullscreenchange", this.N.onFullScreen),
            document.addEventListener("keydown", this.P, !0),
            document.addEventListener("emoji-click", this.M),
            document.addEventListener("click", this.$);
        }
        K() {
          jQuery(window).on("focus", this.k),
            jQuery("#party-tab").on("click", this.N.togglePartyTab.bind(this.N)),
            jQuery("#friends-tab").on("click", this.N.toggleFriendsTab.bind(this.N)),
            jQuery(".user-icon").on("click", this.N.toggleLargeUserIconButton.bind(this.N)),
            jQuery("#user-icon").on("click", this.N.toggleIconContainer.bind(this.N)),
            jQuery("#link-icon").on("click", this.N.linkIconListener.bind(this.N)),
            jQuery("#reset-icon").on("click", this.N.resetIconListener.bind(this.N)),
            jQuery(".image-button").on("click", this.N.userIconSelectorListener.bind(this.N)),
            jQuery("#chat-input-container").on("keydown", this.N.onChatKeyDown.bind(this.N)),
            jQuery("#nickname-edit").on("keydown", this.N.onChatKeyDown.bind(this.N)),
            jQuery("#chat-input").on("keypress", this.N.onChatKeyPress.bind(this.N)),
            jQuery("#chat-input").on("input", this.N.onInputChange.bind(this.N)),
            jQuery("#gif-search").on("keyup", this.N.onGifSearch.bind(this.N)),
            jQuery("#saveChanges").on("click", this.N.saveChangesListener.bind(this.N)),
            jQuery("#cancelNickname").on("click", this.N.cancelNicknameListener.bind(this.N)),
            jQuery("#chat-wrapper").on("mouseup", this.N.cancelEvent),
            jQuery("#chat-wrapper").on("mousedown", this.N.cancelEvent),
            jQuery("#chat-wrapper").on("pointerup", this.N.cancelEvent),
            jQuery("#chat-wrapper").on("pointerdown", this.N.cancelEvent),
            jQuery("#chat-wrapper").on("mousemove", this.N.cancelEvent),
            jQuery("#chat-wrapper").on("pointermove", this.N.cancelEvent),
            jQuery("#chat-wrapper").on("keyup", this.N.onChatKeyUp.bind(this.N)),
            jQuery("#emoji-picker-btn").on("click", this.N.addEmojiPicker.bind(this.N)),
            jQuery("#gif-btn").on("click", this.N.addGifPicker.bind(this.N)),
            jQuery(".gif-img").on("click", this.N.clickGif.bind(this.N)),
            jQuery(".gif-results").on("click", "video, img", this.N.clickGif.bind(this.N)),
            jQuery("#category-container").on("click", "video", this.N.clickGif.bind(this.N)),
            jQuery("#gif-input-back").on("click", this.N.resetGif.bind(this.N)),
            jQuery("#reaction-btn").on("click", this.N.addReactionTab.bind(this.N)),
            jQuery("#chat-input-container").on("click", this.Z.bind(this)),
            jQuery("#chat-input").on("input", this.R.bind(this)),
            jQuery("#chat-input").on("drop", this.tt.bind(this)),
            jQuery("#gif-results-wrapper").on("scroll", this.N.onScrollToBottom.bind(this.N)),
            this.et(),
            document.addEventListener("keydown", this.P.bind(this), !0),
            this.N.initCustomListeners();
        }
        et() {
          jQuery("#tp-heart-button").on("click", () => {
            this.N.onReactionClicked(kt.HEART);
          }),
            jQuery("#tp-cry-button").on("click", () => {
              this.N.onReactionClicked(kt.CRY);
            }),
            jQuery("#tp-angry-button").on("click", () => {
              this.N.onReactionClicked(kt.ANGRY);
            }),
            jQuery("#tp-surprise-button").on("click", () => {
              this.N.onReactionClicked(kt.SURPRISE);
            }),
            jQuery("#tp-laugh-button").on("click", () => {
              this.N.onReactionClicked(kt.LAUGH);
            }),
            jQuery("#tp-fire-button").on("click", () => {
              this.N.onReactionClicked(kt.FIRE);
            });
        }
        R() {
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
        tt(t) {
          t.preventDefault();
        }
        q(t) {
          t.preventDefault();
        }
        Z(t) {
          t.target === jQuery("#chat-input")[0] && this.N.focusChat();
        }
        V(t) {
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
        it(t) {
          return "object" == typeof t && null != t && "unicode" in t;
        }
        nt(t) {
          if (!Array.isArray(t)) return !1;
          if (0 === t.length) return !1;
          for (let e = 0; e < t.length; e++) {
            const i = t[e];
            if (!this.it(i)) return !1;
          }
          return !0;
        }
        updateFrequentlyUsed(t) {
          var e;
          return It(this, void 0, void 0, function* () {
            const i = yield tt.getItemsAsync([l]);
            let n = null !== (e = i.recentlyUsedEmojiMap) && void 0 !== e ? e : g;
            this.nt(n) || (n = g),
              Array.isArray(n) &&
                (t && ((n = n.filter((e) => e.unicode != t.unicode)), n.unshift(t), (n = n.slice(0, 24))),
                yield Q.setItemsAsync({ [l]: n }),
                window.postMessage({ type: "TP_FREQ_USED", data: n }, "*"));
          });
        }
        Y() {
          jQuery(window).off("focus", this.k),
            document.removeEventListener("emoji-click", this.M),
            document.removeEventListener("keydown", this.P, !0),
            document.removeEventListener("click", this.$),
            window.removeEventListener("message", this.T),
            document.removeEventListener("webkitfullscreenchange", this.N.onFullScreen),
            document.removeEventListener("fullscreenchange", this.N.onFullScreen);
        }
        J() {
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
      !(function (t) {
        (t.EPISODE = "episode"), (t.FEATURE = "feature"), (t.LIVE = "live"), (t.EXTRA = "extra"), (t.EVENT = "event"), (t.OTHER = "other");
      })(Qt || (Qt = {}));
      var St;
      function Tt(t) {
        return t.includes("urn:hbo:feature")
          ? Qt.FEATURE
          : t.includes("urn:hbo:episode") || (t.includes("urn:hbo:page:") && t.includes(":type:episode"))
          ? Qt.EPISODE
          : t.includes("urn:hbo:extra")
          ? Qt.EXTRA
          : Qt.OTHER;
      }
      function Mt(t) {
        return function () {
          return new Promise((e) => {
            setTimeout(() => {
              e();
            }, t);
          });
        };
      }
      function Pt(t, e, i = 250) {
        return function () {
          const n = new Date().getTime(),
            s = function () {
              return t()
                ? Promise.resolve()
                : null !== e && new Date().getTime() - n > e
                ? Promise.reject(new Error("delayUntil timed out: " + t))
                : Mt(i)().then(s);
            };
          return s();
        };
      }
      function $t(t, e, i) {
        t.push(e), t.length > i && t.splice(0, t.length - i);
      }
      function Nt(t) {
        var e;
        const i = t.split(":");
        let n = 0,
          s = 1;
        for (; i.length > 0; ) (n += s * parseInt(null !== (e = i.pop()) && void 0 !== e ? e : "0", 10)), (s *= 60);
        return n;
      }
      function Vt(t) {
        return t.concat().sort()[Math.floor(t.length / 2)];
      }
      !(function (t) {
        (t.REGISTER = "register"), (t.PARTY_START = "party_start"), (t.PARTY_JOIN = "party_join"), (t.PARTY_END = "party_end");
      })(St || (St = {}));
      class Rt {
        constructor(e) {
          (this.N = e),
            (this.st = []),
            (this.ut = 0),
            (this.ot = document.title),
            (this.rt = 0),
            (this.ct = new Map()),
            (this.Dt = new Map()),
            (this.ht = []),
            (this.dt = []),
            (this.lt = ""),
            t("Message Controller");
        }
        gt(t, e, i, n) {
          return jQuery(
            `\n            <div class="msg-container ${
              !n && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    <div class="icon">\n                    ${
              n ? `<img src="${C(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                    </div>\n                </div>\n                <div class="msg-txt message${
              i.isSystemMessage ? "-system" : "-txt"
            }">\n                    ${
              n ? `<h3 data-tp-id="chat_history_container-nickname">${e}</h3>` : ""
            }\n                    <p data-tp-id="chat_history_container-message">${C(
              i.body
            ).trim()}</p>\n                </div>\n            </div>\n          `
          );
        }
        Ft(t, e, i, n) {
          const s = 200 / (i.gifObject.media.full.dims[0] / i.gifObject.media.full.dims[1]),
            u = 200 / (i.gifObject.media.fullMobile.dims[0] / i.gifObject.media.fullMobile.dims[1]),
            o = this.N.shouldUseVideoGIF();
          return jQuery(
            `\n            <div class="msg-container ${
              !n && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    <div class="icon" >\n                    ${
              n ? `<img src="${C(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                    </div>\n                </div>\n                <div class="msg-gif message-gif">\n                    ${
              n ? `<h3 data-tp-id="chat_history_container-nickname">${e}</h3>` : ""
            }  \n            ${
              o
                ? `<video src="${C(
                    i.gifObject.media.full.url
                  )}"  height="${s}" class="tp-video-gif" data-tp-id="chat_history_container-gif" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback>`
                : `<img src="${C(
                    i.gifObject.media.fullMobile.url
                  )}"  height="${u}" class="tp-video-gif" data-tp-id="chat_history_container-gif" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback>`
            }     \n                </div>\n            </div>\n          `
          );
        }
        vt(t, e, i) {
          return jQuery(
            `\n            <div class="msg ${
              !i && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    ${
              i ? `<img src="${C(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                </div>\n                <div class="message${
              e.isSystemMessage ? "-system" : "-txt"
            }">\n                    <p class="msg-nickname"></p>\n                    <p data-tp-id="chat_history_container-message">${C(
              e.body
            ).trim()}</p>\n                </div>\n            </div>\n        `
          );
        }
        yt(t, e, i) {
          const n = 200 / (e.gifObject.media.full.dims[0] / e.gifObject.media.full.dims[1]),
            s = 200 / (e.gifObject.media.fullMobile.dims[0] / e.gifObject.media.fullMobile.dims[1]),
            u = this.N.shouldUseVideoGIF();
          return jQuery(
            `\n            <div class="msg-container ${
              !i && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    <div class="tp-icon-name">\n                    ${
              i ? `<img src="${C(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                    </div>\n                </div>\n                <div class="msg-gif message-gif">\n                    <p class="msg-nickname"></p>\n                    ${
              u
                ? `<video src="${C(
                    e.gifObject.media.full.url
                  )}" data-tp-id="chat_history_container-gif" height="${n}" class = "tp-video-gif" autoplay loop playsinline disablepictureinpicture disableremoteplayback>`
                : `<img src="${C(
                    e.gifObject.media.fullMobile.url
                  )}" data-tp-id="chat_history_container-gif" height="${s}" class = "tp-video-gif" autoplay loop playsinline disablepictureinpicture disableremoteplayback>`
            }\n                </div>\n            </div>\n          `
          );
        }
        ft(t, e, i, n, s) {
          t.appendTo(jQuery("#chat-history"));
          const u = t[0];
          (u.p = e.permId), (u.Ct = i), (u.wt = n), (u.Et = e), (u.bt = s);
        }
        reloadMessages() {
          this.N.queueMessageForFrame(Dt.CLEAR_MESSAGES, "");
          const t = JSON.parse(JSON.stringify(this.st));
          for (let e = 0; e < t.length; e++) {
            const i = t[e];
            "gifObject" in i ? this.addGif(i, e) : this.addMessage(i, !1, e);
          }
          this.st = t;
        }
        _t(t, e) {
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
            (void 0 === i && (i = this.st.length),
            t.isSystemMessage && "left" === t.body && (console.log("trying to add left message"), !t.userIcon && !this.ct.has(t.permId)))
          )
            return;
          if (0 === i && t.isSystemMessage && t.body.includes("joined")) return;
          e &&
            t.isSystemMessage &&
            t.body.indexOf("updated their user icon") > -1 &&
            (t.userIcon && this.setUserIcon(t.permId, t.userIcon), t.userNickname && this.setUserNickname(t.permId, t.userNickname));
          const n = this.st.slice(-1).pop(),
            s = !(void 0 !== n && i > 0) || !this._t(n, t);
          this.st.push(t);
          const u = Object.assign({}, t),
            o = this.getUserIconURL(u.permId, u.userIcon),
            r = this.getUserNickname(u.permId, u.userNickname);
          this.N.queueMessageForFrame(Dt.ADD_MESSAGE, { originalMessage: u, userIcon: o, userNickname: r });
          const a = "" === r ? this.vt(o, u, s) : this.gt(o, r, u, s);
          this.ft(a, u, o, r, s), this.scrollToBottom(), this.jt();
        }
        addGif(t, e) {
          void 0 === e && (e = this.st.length);
          const i = this.st.slice(-1).pop(),
            n = !(void 0 !== i && e > 0) || !this._t(i, t);
          this.st.push(t);
          const s = t.userIcon ? this.getUserIconURL(t.permId, t.userIcon) : this.getUserIconURL(t.permId),
            u = t.userNickname ? this.getUserNickname(t.permId, t.userNickname) : "";
          this.N.queueMessageForFrame(Dt.ADD_MESSAGE, { originalMessage: t, userIcon: s, userNickname: u });
          const o = "" === u ? this.yt(s, t, n) : this.Ft(s, u, t, n);
          (o[0].Bt = !0), this.ft(o, t, s, u, n), Mt(100)().then(this.scrollToBottom.bind(this)), this.jt();
        }
        scrollToBottom() {
          jQuery("#chat-history").scrollTop(jQuery("#chat-history").prop("scrollHeight"));
        }
        clearUnreadCount() {
          this.ut > 0 && ((this.ut = 0), (document.title = this.ot));
        }
        jt() {
          (this.ut += 1), (this.rt += 1), document.hasFocus() || (document.title = "(" + String(this.ut) + ") " + this.ot);
        }
        getUserIconURL(t, e = "") {
          if (!this.ct.has(t)) {
            const i = this.parseIconSrc(e),
              n = void 0 !== i ? i : this.At();
            this.ct.set(t, n), this.dt.push(n);
          }
          return this.ct.get(t);
        }
        parseIconSrc(t) {
          const e = t.includes("?newIconUrl=") ? t.split("?newIconUrl=")[1] : t,
            i = t.includes("?newIconUrl=") ? t.split("?newIconUrl=")[0] : t;
          return m.includes(e)
            ? chrome.runtime.getURL("img/icons/" + t)
            : v.includes(i)
            ? chrome.runtime.getURL("img/icons/General/" + t)
            : void 0;
        }
        getUserNickname(t, e = "") {
          return this.Dt.has(t) || (this.Dt.set(t, e), this.ht.push(e)), C(this.Dt.get(t));
        }
        At() {
          let t = chrome.runtime.getURL("img/icons/General/" + v[Math.floor(Math.random() * v.length)]);
          if (this.dt.length < f.General.length)
            for (; this.dt.includes(t); ) t = chrome.runtime.getURL("img/icons/General/" + v[Math.floor(Math.random() * v.length)]);
          return t;
        }
        kt(t) {
          const e = t[0],
            i = e.p;
          let n = e.Ct;
          i && this.getUserIconURL(i) !== n && ((n = this.getUserIconURL(i)), t.find("img").attr("src", n), (e.Ct = n));
          const s = e.wt;
          if (i && n) {
            const u = this.getUserNickname(i);
            if (u !== s) {
              const s = e.Et,
                o = e.bt;
              let r;
              if (
                (e.Bt && s && "gifObject" in s && o && (r = "" == u ? this.yt(n, s, o) : this.Ft(n, u, s, o)),
                !e.Bt && s && "isSystemMessage" in s && o && (r = "" == u ? this.vt(n, s, o) : this.gt(n, u, s, o)),
                r)
              ) {
                t.replaceWith(r);
                const e = r[0];
                (e.p = i), (e.Ct = n), (e.wt = u), (e.Et = s), (e.bt = o);
              }
            }
          }
        }
        setUserIconUrl(t) {
          (this.lt = t), this.N.queueMessageForFrame(Dt.SET_USER_ICON_URL, t);
        }
        renderSidebar() {
          jQuery("#user-icon img").attr("src", this.lt), jQuery(".user-icon img").attr("src", this.lt);
          const t = jQuery(".msg");
          for (let e = 0; e < t.length; e++) this.kt(jQuery(t[e]));
          const e = jQuery(".msg-container");
          for (let t = 0; t < e.length; t++) this.kt(jQuery(e[t]));
          this.N.isChatFrameActive() && this.reloadMessages();
        }
        Qt(t) {
          let e = null;
          if (t)
            if (t.includes("?newIconUrl=")) {
              const i = t.split("?newIconUrl="),
                n = i[1],
                s = i[0];
              m.includes(n)
                ? (e = chrome.runtime.getURL(`img/icons/${n}`))
                : v.includes(s) && (e = chrome.runtime.getURL(`img/icons/General/${s}`));
            } else
              m.includes(t)
                ? (e = chrome.runtime.getURL(`img/icons/${t}`))
                : v.includes(t) && (e = chrome.runtime.getURL(`img/icons/General/${t}`));
          if (null === e) {
            let t = f.General.filter((t) => !this.dt.includes(t));
            0 === t.length && (t = f.General);
            const i = t[Math.floor(Math.random() * t.length)];
            e = chrome.runtime.getURL(`/img/icons/General/${i}`);
          }
          return e;
        }
        setUserIcon(t, e) {
          const i = this.Qt(e);
          this.ct.set(t, i), this.dt.push(i), this.renderSidebar();
        }
        setUserNickname(t, e) {
          const i = C(e);
          this.Dt.set(t, i), this.ht.push(i), this.renderSidebar();
        }
        updateUserData(t, e, i) {
          const n = this.Qt(e);
          this.ct.set(t, n), this.dt.push(n), this.Dt.set(t, i), this.ht.push(i), this.renderSidebar();
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
          const t = new W(M, S, {
            name: "review-shown",
            action: { description: "review was shown on chrome", reason: "review was shown." }
          });
          $.g(t);
          const e = { eventType: "review-shown-chrome", sessionId: this.N.getSessionId() },
            i = new W(M, S, e);
          $.g(i),
            jQuery("#reviewLink").click(() => {
              chrome.storage.local.set({ reviewClicked: !0 });
              const t = new W(M, S, {
                name: "review-clicked",
                action: { description: "review was clicked on chrome", reason: "review was clicked." }
              });
              $.g(t);
              const e = { eventType: "review-clicked-chrome", sessionId: this.N.getSessionId() },
                i = new W(M, S, e);
              $.g(i);
            });
        }
      }
      class Ot {
        constructor(t) {
          (this.It = !1), (this.xt = !1), (this.St = !1), (this.N = t);
        }
        setupPresenceIndicator() {
          (this.It = !1), (this.xt = !1), (this.St = !1), this.Tt();
        }
        Mt() {
          return jQuery("#presence-indicator");
        }
        setTypingPresenceVisible(t) {
          (this.It = t), this.Tt();
        }
        setBufferingPresenceVisible(t) {
          (this.xt = t), this.Tt();
        }
        setWatchingAdsPresenceVisible(t) {
          (this.St = t), this.Tt();
        }
        getWatchingAdsVisible() {
          return this.St;
        }
        Pt() {
          return this.St
            ? "People are watching ads..."
            : this.It && this.xt
            ? "People are typing and buffering..."
            : this.It
            ? "People are typing..."
            : this.xt
            ? "People are buffering..."
            : "";
        }
        Tt() {
          const t = this.Pt();
          this.Mt().text(t), this.N.queueMessageForFrame(Dt.SET_PRESENCE_MESSAGE, { text: t });
        }
      }
      var Ut = function (t, e, i, n) {
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
      var Gt = function (t, e, i, n) {
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
        constructor() {
          (this.$t = !1),
            (this.Nt = 1),
            (this.Vt = ""),
            (this.Rt = ""),
            (this.Ot = "0"),
            (this.Ut = ""),
            (this.Gt = !0),
            (this.Lt = !1),
            (this.Ht = 0),
            (this.zt = []),
            (this.Wt = new Y()),
            (this.Kt = !1),
            (this.Jt = void 0),
            (this.Yt = !0),
            (this.Xt = this.qt()),
            (this.Zt = this.qt()),
            (this.te = !1),
            (this.ee = !1),
            (this.ie = []),
            (this.logEvent = (t) => {
              const e = new W(M, S, t);
              $.g(e);
            }),
            (this.checkInitReactionContainer = () => {
              tt.getItemsAsync([o]).then((t) => {
                (!0 !== t.reactionContainerOpen && void 0 !== t.reactionContainerOpen) || this.showReactionHolder();
              });
            }),
            (this.onSidebarFocus = () => {
              var t;
              null === (t = this.ne) || void 0 === t || t.hideMessageIndicator();
            }),
            (this.setReactionsActive = (t) => {
              this.Wt.pushTask(() => Q.setItemsAsync({ [o]: t.active }));
            }),
            (this.onFullScreen = () => {
              var t;
              this.scrollToBottom(),
                null != document.fullscreenElement
                  ? (this.logEvent({ name: "fullscreen_enter" }),
                    this.qt() && ((this.Xt = !1), this.setChatVisible(this.shouldChatBeVisible())))
                  : (this.logEvent({ name: "fullscreen_exit" }),
                    this.qt() && ((this.Xt = this.qt()), jQuery("#chat-wrapper").hide(), this.setChatVisible(!1, !1), this.removeChat())),
                null === (t = this.ne) || void 0 === t || t.setChatButtons();
            }),
            (this.cancelEvent = (t) => {
              t.stopPropagation();
            }),
            (this.se = !1),
            (this.ue = new xt(this)),
            (this.oe = new Ot(this)),
            (this.re = new Rt(this)),
            (this.ae = void 0),
            (this.ce = void 0),
            (this.De = !1);
        }
        setPageControls(t) {
          this.ne = t;
        }
        fixPageControls() {
          var t, e;
          null === (t = this.ne) || void 0 === t || t.enablePartyIcons(), null === (e = this.ne) || void 0 === e || e.setChatButtons();
        }
        setChatVisible(t, e = !0) {
          return Ut(this, void 0, void 0, function* () {
            if (this.isPartyWindowsActive()) throw new Error("Invalid Set Chat");
            e && (this.Gt = t), t && !this.he() && this.reloadChat();
          });
        }
        de(t, e) {
          const i = new W(M, S, { name: "error", action: { reason: e, description: t } });
          $.g(i);
        }
        getChatWindowVisible() {
          return this.Zt;
        }
        setChatWindowActive(t) {
          this.Xt = t;
        }
        isChatFrameActive() {
          return this.Yt;
        }
        isPartyWindowsActive() {
          return this.Xt;
        }
        shouldChatBeVisible() {
          return this.Gt;
        }
        incrementEmojiCount() {
          this.Ht++;
        }
        resetEmojiCount() {
          this.Ht = 0;
        }
        getEmojiCount() {
          return this.Ht;
        }
        setChatFrameReady(t) {
          this.Kt && this.le(), (this.Kt = !0), (this.pe = t), console.log("setChatFrameReady");
        }
        queueMessageForFrame(t, e) {
          this.Wt.pushTask(() =>
            Ut(this, void 0, void 0, function* () {
              this.ge(t, e);
            })
          );
        }
        ge(t, e) {
          return Ut(this, void 0, void 0, function* () {
            const i = this.pe,
              n = { type: t, data: e, target: "TP_Sidebar", tabId: i, sender: M };
            $.g(n);
          });
        }
        Fe() {
          var t;
          return Ut(this, void 0, void 0, function* () {
            try {
              console.log("Start delay"),
                yield Pt(() => this.Kt && null != this.pe, 3e4)(),
                console.log("Chat Frame is Loaded"),
                this.Jt && this.ve(this.Jt),
                null === (t = this.ne) || void 0 === t || t.setResetChatButton();
            } catch (t) {
              this.de("Sidewindow didn't load in time", t);
            }
          });
        }
        qt() {
          return !1;
        }
        ye() {
          return Ut(this, void 0, void 0, function* () {
            yield $.g(new H(M, S, O.LOAD_CHAT_WINDOW)), console.log(this.pe);
          });
        }
        resetChatWindow(t = !1) {
          var e;
          return Ut(this, void 0, void 0, function* () {
            yield $.g(new H(M, S, O.RESET_CHAT_WINDOW)),
              console.log(this.pe),
              (this.Zt = !0),
              (this.Gt = !0),
              top.postMessage({ type: "exitFullscreen" }, "*"),
              this.te && t && (this.resetIconListener(), null === (e = this.ne) || void 0 === e || e.setResetChatButton());
          });
        }
        hideChatWindow() {
          return Ut(this, void 0, void 0, function* () {
            yield $.g(new H(M, S, O.HIDE_CHAT_WINDOW)), (this.Zt = !1), (this.Gt = !1);
          });
        }
        fe() {
          return Ut(this, void 0, void 0, function* () {
            this.ye(), this.Wt.pushTask(this.Fe.bind(this));
          });
        }
        loadInitData(t) {
          this.Jt = t;
        }
        ve(t) {
          var e;
          return Ut(this, void 0, void 0, function* () {
            const i = Object.assign({}, t);
            if (((i.iconMap = f), (i.extensionBaseUrl = chrome.runtime.getURL("")), i.storageData)) {
              const t = yield gt.getValidatedChromeStorageDataAsync();
              i.storageData = t;
            }
            this.queueMessageForFrame(Dt.LOAD_INIT_DATA, i);
            const n = yield this.getVideoTitle();
            this.queueMessageForFrame(Dt.SET_PAGE_TITLE, { pageTitle: n }),
              this.queueMessageForFrame(Dt.SET_USER_LIST, this.ie),
              this.queueMessageForFrame(Dt.UPDATE_SETTINGS, {
                userSettings: null === (e = this.Ce) || void 0 === e ? void 0 : e.userSettings
              });
          });
        }
        le() {
          return Ut(this, void 0, void 0, function* () {
            if ((console.log("Reloading chat Frame"), this.Jt && (yield this.ve(this.Jt)), this.Ce)) {
              const t = this.re.getUserIconURL(this.Ce.permId, this.Ce.userIcon);
              this.queueMessageForFrame(Dt.SET_USER_ICON_URL, t);
            }
            const t = yield this.getVideoTitle();
            this.queueMessageForFrame(Dt.SET_PAGE_TITLE, { pageTitle: t }), this.reloadMessages();
          });
        }
        we() {
          return Ut(this, void 0, void 0, function* () {
            this.Ee(),
              yield Mt(200)(),
              (jQuery("#tpChatFrame")[0].style.display = "block"),
              this.setChatVisible(!0),
              this.addIconSelector(),
              this.be(),
              this.oe.setupPresenceIndicator(),
              this.checkInitReactionContainer();
          });
        }
        _e(t) {
          this.ue.initWindowListeners(), this.qt() && this.fe(), this.Wt.pushTask(this.Fe.bind(this)), bt(), (this.Ce = new x(t));
          const e = this.re.getUserIconURL(this.Ce.permId, this.Ce.userIcon);
          this.re.setUserIconUrl(e),
            this.re.renderSidebar(),
            this.he() && this.removeChat(),
            (this.se = !0),
            this.je(),
            this.qt()
              ? jQuery("body").after(
                  `\n    <link rel="stylesheet" href="${chrome.runtime.getURL(
                    "css/alert.css"
                  )}">\n    <style tpInjected>\n      .on-screen-reaction {\n        position: absolute;\n        bottom: 0;\n        font-size: 100px;\n        z-index: 9999999999;\n      }\n      .on-screen-reaction-1 {\n        animation: 5s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-1;\n      }\n      .on-screen-reaction-2 {\n        animation: 6s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-2;\n      }\n      .on-screen-reaction-3 {\n        animation: 7s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-3;\n      }\n      @keyframes on-screen-reaction-slide {\n        0% {\n          opacity: 0;\n          transform: translateY(calc(0 - var(--reaction-size)));\n        }\n        20% {\n          opacity: 0.8;\n        }\n        30% {\n          opacity: 0.8;\n        }\n        90% {\n          opacity: 0;\n        }\n        100% {\n          transform: translateY(-100vh) translateX(-10px);\n          opacity: 0;\n        }\n      }\n      @keyframes on-screen-reaction-1 {\n        10% {\n          margin-left: -6px;\n        }\n        25% {\n          margin-left: 4px;\n        }\n        30% {\n          margin-left: -5px;\n        }\n        45% {\n          margin-left: 5px;\n        }\n        55% {\n          margin-left: -3px;\n        }\n        60% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        85% {\n          margin-left: 5px;\n        }\n        90% {\n          margin-left: -7px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n      @keyframes on-screen-reaction-2 {\n        15% {\n          margin-left: -2px;\n        }\n        20% {\n          margin-left: 5px;\n        }\n        35% {\n          margin-left: -6px;\n        }\n        40% {\n          margin-left: 5px;\n        }\n        50% {\n          margin-left: -5px;\n        }\n        65% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        80% {\n          margin-left: 4px;\n        }\n        95% {\n          margin-left: -5px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n      @keyframes on-screen-reaction-3 {\n        15% {\n          margin-left: -4px;\n        }\n        20% {\n          margin-left: 5px;\n        }\n        35% {\n          margin-left: -2px;\n        }\n        40% {\n          margin-left: 5px;\n        }\n        50% {\n          margin-left: -3px;\n        }\n        65% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        80% {\n          margin-left: 5px;\n        }\n        95% {\n          margin-left: -4px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n    </style>\n  `
                )
              : (this.we(), this.checkAddYoutubePromo());
        }
        checkAddYoutubePromo() {
          return Ut(this, void 0, void 0, function* () {
            "true" !== (yield tt.getItemsAsync(["seenYoutubePromo"])).seenYoutubePromo &&
              (this.re.addYoutubePromo(), Q.setItemsAsync({ seenYoutubePromo: "true" }));
          });
        }
        sendInitDataToSidebar(t) {
          this.Jt = t;
          const e = Object.assign({}, t);
          (e.iconMap = f),
            (e.extensionBaseUrl = chrome.runtime.getURL("")),
            console.log(e),
            this.queueMessageForFrame(Dt.LOAD_INIT_DATA, e);
        }
        reloadChat() {
          return Ut(this, void 0, void 0, function* () {
            console.log("Reload chat"),
              this.he() ||
                this.isPartyWindowsActive() ||
                (this.Ee(),
                yield Mt(200)(),
                (jQuery("#tpChatFrame")[0].style.display = "block"),
                this.setChatVisible(this.Gt),
                this.addIconSelector(),
                this.Be(),
                this.be(),
                this.oe.setupPresenceIndicator(),
                this.reloadMessages(),
                this.scrollToBottom(),
                this.checkInitReactionContainer());
          });
        }
        sendTeardown(t) {
          const e = new z(M, S, t);
          $.g(e);
        }
        he() {
          return jQuery("#chat-wrapper").length > 0;
        }
        clearUnreadCount() {
          this.re.clearUnreadCount();
        }
        Ae() {
          return Ut(this, void 0, void 0, function* () {
            try {
              yield Pt(() => null !== document.querySelector("#chat-history") || this.Xt || (this.Kt && this.Yt), 1e4)();
            } catch (t) {
              this.de("Failed to find chat history", t);
            }
          });
        }
        addMessage(t, e = !1) {
          this.Wt.pushTask(() =>
            Ut(this, void 0, void 0, function* () {
              yield this.Ae(), this.re.addMessage(t, e);
            })
          );
        }
        addGif(t) {
          this.Wt.pushTask(() =>
            Ut(this, void 0, void 0, function* () {
              yield this.Ae(), this.re.addGif(t);
            })
          );
        }
        reloadMessages() {
          this.re.reloadMessages();
        }
        scrollToBottom() {
          this.re.scrollToBottom();
        }
        addReviewMessage() {
          this.re.addReviewMessage(), (this.De = !0);
        }
        get showingReveiwMessage() {
          return this.De;
        }
        set shouldReturnToVideo(t) {
          this.te = t;
        }
        onBufferingMessage(t) {
          this.Wt.pushTask(() =>
            Ut(this, void 0, void 0, function* () {
              yield this.Ae(), this.oe.setBufferingPresenceVisible(t.usersBuffering.length > 0);
            })
          );
        }
        onTypingMessage(t) {
          this.Wt.pushTask(() =>
            Ut(this, void 0, void 0, function* () {
              yield this.Ae(), this.oe.setTypingPresenceVisible(t.usersTyping.length > 0);
            })
          );
        }
        onWatchingAdsMessage(t) {
          this.Wt.pushTask(() =>
            Ut(this, void 0, void 0, function* () {
              console.log("Set Ad Presence: " + t), yield this.Ae(), this.oe.setWatchingAdsPresenceVisible(t.usersWatchingAds.length > 0);
            })
          );
        }
        getWatchingAds() {
          return this.oe.getWatchingAdsVisible();
        }
        doUpdateSettings(t) {
          var e;
          null === (e = this.Ce) || void 0 === e || e.saveUserSettings(t), t.shouldBroadcast && this.ke(this.Qe(t));
        }
        onUpdateSettingsMessage(t) {
          if ((this.re.updateUserData(t.permId, t.userSettings.userIcon, t.userSettings.userNickname), this.Ce)) {
            const t = this.re.getUserIconURL(this.Ce.permId, this.Ce.userIcon);
            this.re.setUserIconUrl(t), this.re.renderSidebar();
          }
        }
        be() {
          Pt(() => this.he(), 1e4)().then(() => {
            this.ue.startListening();
          });
        }
        Be() {
          this.ue.stopListening(), this.Ie && (clearTimeout(this.Ie), (this.Lt = !1));
        }
        teardown() {
          (this.se = !1),
            (this.Rt = void 0),
            (this.xe = void 0),
            this.Be(),
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
            this.Wt.pushTask(() => Q.setItemsAsync({ [o]: !1 }));
        }
        onOpenGifPicker() {
          var t, e;
          return Ut(this, void 0, void 0, function* () {
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
              t ? this.hideReactionHolder() : this.showReactionHolder(), !t && e && this.re.scrollToBottom();
            });
        }
        onVideoClick() {
          this.queueMessageForFrame(Dt.ON_PAGE_CLICK);
        }
        toggleGIFs() {
          jQuery("#gif-picker-container").slideToggle(0, () => {
            jQuery("#gif-picker-container").is(":hidden") ? this.onCloseGifPicker() : this.onOpenGifPicker();
          });
        }
        addEmojiPicker(t) {
          t.stopPropagation();
          const e = new W(M, S, {
            name: "user_click",
            component: { name: "chat_input_container-emoji_picker", type: "button", origin: "tp" }
          });
          $.g(e), this.toggleEmojiClicker();
        }
        addGifPicker(t) {
          t.stopPropagation();
          const e = new W(M, S, {
            name: "user_click",
            component: { name: "chat_input_container-gif_popup", type: "button", origin: "tp" }
          });
          $.g(e), this.toggleGIFs();
        }
        addReactionTab(t) {
          t.stopPropagation();
          const e = new W(M, S, {
            name: "user_click",
            component: { name: "chat_input_container-reaction_pinner", type: "button", origin: "tp" }
          });
          $.g(e), this.toggleReactions();
        }
        je() {
          if (
            (t("Set Chat Html called"),
            (this.Se = n()),
            (this.Se = this.Se.replace(/{EXTENSION_LOGO}/g, C(chrome.runtime.getURL("img/tp_logo.svg")))),
            void 0 === this.Ce)
          )
            throw new Error("Attempt to set chatHtml when _userSettings is undefined.");
          this.Se = this.Se.replace(/{CHAT_URL}/g, `${D}?t=${Date.now()}`);
          for (const t of h) {
            const e = new RegExp(`${t}_STATIC`.toUpperCase(), "g"),
              i = new RegExp(`${t}_GIF`.toUpperCase(), "g");
            (this.Se = this.Se.replace(e, chrome.runtime.getURL(`img/reactions/${t}/${t}_static.svg`))),
              (this.Se = this.Se.replace(i, chrome.runtime.getURL(`img/reactions/${t}/${t}.gif`)));
          }
          (this.Se = this.Se.replace(/{USER_NICKNAME}/g, this.Ce.userNickname ? C(this.Ce.userNickname) : "Add a nickname")),
            (this.Se = this.Se.replace(/{USER_ICON}/g, this.re.getUserIconURL(this.Ce.permId, this.Ce.userIcon))),
            (this.Se = this.Se.replace(/{LINK_SVG}/g, chrome.runtime.getURL("img/icon_link_active.svg"))),
            (this.Se = this.Se.replace(/{RESET_SGV}/g, chrome.runtime.getURL("img/reset_chat.svg"))),
            (this.Se = this.Se.replace(/{EMOJI_PICKER_ICON}/g, chrome.runtime.getURL("img/emoji_picker.svg"))),
            (this.Se = this.Se.replace(/{REACTION_PICKER_ICON}/g, chrome.runtime.getURL("img/reaction-popup.svg"))),
            (this.Se = this.Se.replace(/{GIF_PICKER_ICON}/g, chrome.runtime.getURL("img/gif_icon.svg"))),
            (this.Se = this.Se.replace(/{GIF_BACK_BUTTON}/g, chrome.runtime.getURL("img/icon_chevron.svg"))),
            (this.Se = this.Se.replace(/{EMOJI_LIB}/g, chrome.runtime.getURL("lib/tp_emoji/picker_bundled.js"))),
            (this.Se = this.Se.replace(/{EMOJI_FRAME}/g, chrome.runtime.getURL("web/emojiPicker.html"))),
            (this.Se = this.Se.replace(/{X_CIRCLE}/g, chrome.runtime.getURL("img/x-circle.svg")));
        }
        toggleIconContainer() {
          var t, e, i, n;
          jQuery("#chat-icon-container").data("active")
            ? (jQuery("#chat-icon-container").data("active", !1),
              jQuery("#chat-icon-container").slideUp(),
              jQuery(".chat-settings-container").slideUp(),
              jQuery("#sidebar-tabs-container").slideDown(),
              this.ee ? jQuery("#chat-history-container").slideDown() : jQuery("#chat-friends-frame").slideDown(),
              this.Lt && jQuery("#chat-ad-holder").show(),
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
                null !== (e = null === (t = this.Ce) || void 0 === t ? void 0 : t.userNickname) && void 0 !== e ? e : ""
              ),
              (jQuery("#nickname-edit")[0].value =
                null !== (n = null === (i = this.Ce) || void 0 === i ? void 0 : i.userNickname) && void 0 !== n ? n : ""));
        }
        togglePartyTab() {
          jQuery("#friends-tab").toggleClass("sidebar-tab-inactive", !0),
            jQuery("#party-tab").toggleClass("sidebar-tab-inactive", !1),
            jQuery("#chat-history-container").show(),
            jQuery("#chat-friends-frame").slideUp(),
            jQuery("#chat-input-container").show(),
            (this.ee = !0);
        }
        toggleFriendsTab() {
          jQuery("#friends-tab").toggleClass("sidebar-tab-inactive", !1),
            jQuery("#party-tab").toggleClass("sidebar-tab-inactive", !0),
            jQuery("#chat-friends-frame").removeClass("hidden"),
            jQuery("#chat-friends-frame").slideDown(),
            jQuery("#chat-history-container").slideUp(),
            jQuery("#chat-input-container").hide(),
            (this.ee = !1);
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
          if (null === (t = this.Te) || void 0 === t ? void 0 : t.videoId) {
            const t = new CustomEvent("YoutubeVideoMessage", { detail: { type: "jumpToNextEpisode", nextVideoId: this.Te.videoId } });
            window.dispatchEvent(t);
          }
        }
        setPartyUrl(t) {
          this.Vt = t;
        }
        setMessageForwarder(t) {
          this.Te = t;
        }
        setSessionId(t) {
          this.Rt = t;
        }
        onWebRTC(t) {
          this.queueMessageForFrame(Dt.ON_WEB_RTC, t);
        }
        setSocketConnectionId(t) {
          this.queueMessageForFrame(Dt.SET_CONNECTION_ID, t);
        }
        loadUserList(t) {
          t.forEach((t) => {
            if (void 0 !== t.userSettings && void 0 !== t.permId) {
              const e = t.userSettings,
                i = this.re.getUserIconURL(t.permId, e.userIcon),
                n = this.re.getUserNickname(t.permId, e.userNickname);
              t.parsedData = { userIconUrl: i, userNickname: n };
            }
          }),
            (this.ie = t),
            jQuery("#user-count").text(t.length),
            this.queueMessageForFrame(Dt.SET_USER_LIST, t);
        }
        setSessionCreated(t) {
          this.xe = t;
        }
        getSessionCreated() {
          return this.xe;
        }
        getSessionId() {
          return this.Rt;
        }
        getPartyUrl() {
          return this.Vt;
        }
        userIconSelectorListener(e) {
          const i = jQuery(e.currentTarget).data("icon");
          i &&
            (t("userIconSelector button clicked: " + i),
            this.Ce &&
              (this.Ce.saveUserIcon(i),
              this.queueMessageForFrame(Dt.UPDATE_SETTINGS, { userSettings: this.Ce.userSettings }),
              this.ke(this.Qe(this.Ce.userSettings)))),
            this.toggleIconContainer();
        }
        removeChat() {
          this.clearUnreadCount(), jQuery("#chat-container").remove(), jQuery("#chat-wrapper").remove();
        }
        ke(t, e) {
          $.g(t).then(e);
        }
        Me(t) {
          return new K(M, S, { reactionType: t });
        }
        Pe(t) {
          return new J(M, S, { gifObject: t });
        }
        $e(t) {
          return new G(M, S, { body: t });
        }
        Ne(t) {
          return new U(M, S, { typing: t });
        }
        Qe(t) {
          return new L(M, S, { userSettings: t });
        }
        Ve(t) {
          return chrome.runtime.getURL(`img/reactions/${t}/${t}.gif`);
        }
        showReaction(t) {
          if (!this.shouldShowReaction()) return;
          const e = t.reactionType,
            i = this.getReactionContainer();
          if (i) {
            const t = Math.floor(40 * Math.random()) + 40,
              n = i[0].offsetWidth - (this.shouldAddReactionSpace() ? s : 0) - t,
              u = Math.floor(Math.random() * n) + (this.shouldAddReactionSpace() ? s : 0),
              o = this.Ve(e),
              r = Math.ceil(3 * Math.random()),
              a = jQuery(`<img class="on-screen-reaction on-screen-reaction-${r}" src='${o}' />`);
            a.css("right", `${u}px`),
              a.css("width", `${t}px`),
              a.css("height", `${t}px`),
              i.append(a),
              setTimeout(() => {
                a.remove();
              }, 5e3);
          }
        }
        onReactionClicked(t) {
          console.log(t), this.ke(this.Me(t));
          const e = new W(M, S, {
            name: "user_click",
            component: { name: "chat_input_container-reaction_holder-reaction", type: t, origin: "tp" }
          });
          $.g(e);
          const i = new W(M, S, { eventType: "reaction-" + t, sessionId: this.getSessionId() });
          $.g(i);
        }
        onChatKeyUp(t) {
          t.stopPropagation();
        }
        onChatKeyDown(t) {
          t.stopPropagation(), this.ue.resetIdleTimer();
        }
        initCustomListeners() {}
        getClientLocale() {
          if ("undefined" != typeof Intl)
            try {
              return Intl.NumberFormat().resolvedOptions().locale;
            } catch (t) {
              console.error("Cannot get locale from Intl"), this.de("Cannot get locale from Intl", t);
            }
        }
        clickGif(t) {
          console.log("GIF was clicked");
          let e = t.target.id;
          if (isNaN(e)) (e = "trending" === e ? "" : e), this.fetchGIFs(e), (jQuery("#gif-search")[0].value = e);
          else {
            const t = this.zt.find((t) => t.id === e);
            if (!t) return;
            const i = { id: t.id, title: t.title, description: t.content_description, isSticker: !1, media: t.media };
            this.ke(this.Pe(i), () => {
              this.logShare(t.id, jQuery("#gif-search")[0].value);
              const e = {
                  name: "user_click",
                  action: { description: "gif clicked", source: t.media.full.url },
                  component: { name: "chat_input_container-gif_popup-gif", type: "video", origin: "tp" }
                },
                i = new W(M, S, e);
              $.g(i);
              const n = new W(M, S, { eventType: "gif-share", sessionId: this.getSessionId() });
              $.g(n);
            }),
              this.toggleGIFs();
          }
        }
        Re(t) {
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
        Oe(t) {
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
            this.zt.push(...t.results),
            (this.Ot = t.next),
            t.results.forEach((t) => {
              const e = this.shouldUseVideoGIF() ? this.Re(t) : this.Oe(t);
              (jQuery("#gif-results-left")[0].scrollHeight > jQuery("#gif-results-right")[0].scrollHeight
                ? jQuery("#gif-results-right")[0]
                : jQuery("#gif-results-left")[0]
              ).appendChild(e);
            }),
            this.Nt < 6 && this.Ue(),
            setTimeout(() => {
              this.$t = !1;
            }, 100);
        }
        onScrollToBottom(t) {
          return Ut(this, void 0, void 0, function* () {
            const e = t.target.scrollHeight - t.target.scrollTop <= t.target.clientHeight + 450;
            if (this.$t) t.preventDefault();
            else if ("0" !== this.Ot && e && this.Nt < 6) {
              (this.Nt += 1), (this.$t = !0), t.preventDefault();
              const e = yield fetch(this.Ut + `&pos=${this.Ot}`),
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
        Ge() {
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
        Ue() {
          return Ut(this, void 0, void 0, function* () {
            jQuery("#gif-results-left")[0].append(...this.Ge()), jQuery("#gif-results-right")[0].append(...this.Ge());
          });
        }
        logShare(t, e) {
          return Ut(this, void 0, void 0, function* () {
            const i = this.getClientLocale(),
              n = i ? `&locale=${i}` : "",
              s = `&id=${t}`,
              u = e && e.length > 0 ? `q=${e}` : "";
            yield fetch(`${r}/register-share?${u}${n}${s}`);
          });
        }
        fetchGIFs(t) {
          return Ut(this, void 0, void 0, function* () {
            const e = yield this.getVideoTitle(),
              i = null == e ? void 0 : e.replace(/[^\w\s]/g, "");
            (this.Nt = 1),
              (this.$t = !0),
              jQuery("#category-container").hide(),
              jQuery("#gif-columns-wrapper").show(),
              (jQuery("#gif-results-left")[0].innerHTML = ""),
              (jQuery("#gif-results-right")[0].innerHTML = ""),
              (this.zt = []),
              this.Ue();
            const n = this.getClientLocale(),
              s = n ? `&locale=${n}` : "";
            let u = i ? `search-gifs?q=${i}` : "trending-gifs?";
            (u = t ? `search-gifs?q=${t}` : u), (this.Ut = `${r}/${u}${s}`);
            const o = yield fetch(`${r}/${u}${s}`),
              a = yield o.json();
            if (a.results && a.results.length > 0) this.loadGIFs(a);
            else if (!t) {
              const t = yield fetch(`${r}/trending_gifs?${s}`);
              this.Ut = `${r}/trending_gifs?${s}`;
              const e = yield t.json();
              this.loadGIFs(e);
            }
          });
        }
        onGifSearch(t) {
          t.stopPropagation();
          const e = t.target.value;
          if ((void 0 !== this.ce && clearTimeout(this.ce), !e))
            return jQuery("#gif-input-back").hide(), jQuery("#gif-search").css("width", ""), void this.fetchGIFs();
          jQuery("#gif-input-back").show(),
            jQuery("#gif-search").css("width", "90%"),
            (this.ce = setTimeout(() => {
              this.fetchGIFs(e);
            }, 500));
        }
        Le(t) {
          return "string" == typeof t && "" !== t.replace(/^\s+|\s+$/g, "");
        }
        onChatKeyPress(t) {
          if ((t.stopPropagation(), "Enter" !== t.key || t.shiftKey))
            void 0 === this.ae ? this.ke(this.Ne(!0)) : clearTimeout(this.ae),
              (this.ae = setTimeout(() => {
                (this.ae = void 0), this.ke(this.Ne(!1));
              }, 500));
          else {
            jQuery("#emoji-picker-container").is(":hidden") || this.toggleEmojiClicker();
            const e = jQuery("#chat-input"),
              i = e[0].textContent;
            if (i && this.Le(i)) {
              void 0 !== this.ae && (clearTimeout(this.ae), (this.ae = void 0), this.ke(this.Ne(!1))),
                e.prop("contenteditable", !1),
                this.ke(this.$e(i.substring(0, 1500)), () => {
                  (e[0].textContent = ""), e.prop("contenteditable", !0), this.focusChat(), this.onInputChange();
                });
              const t = {
                  name: "chat_send",
                  action: { description: "message was sent" },
                  message: {
                    id: (function () {
                      try {
                        return ct();
                      } catch (t) {
                        return "";
                      }
                    })(),
                    text: i.trim()
                  }
                },
                n = new W(M, S, t);
              $.g(n);
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
          const e = t.replace(F, "").replace(/[\uFE0F]/g, ""),
            i = ((t || "").match(F) || []).length;
          return 0 === e.length && i <= 3 && i > 0;
        }
        saveChangesListener() {
          var e;
          const i = jQuery("#nickname-edit")
            .val()
            .slice(0, 25)
            .replace(/^\s+|\s+$/g, "");
          t("saveChanges button clicked: " + i),
            i !== (null === (e = this.Ce) || void 0 === e ? void 0 : e.userNickname) &&
              this.Ce &&
              (this.Ce.saveUserNickname(i),
              this.queueMessageForFrame(Dt.UPDATE_SETTINGS, { userSettings: this.Ce.userSettings }),
              this.ke(this.Qe(this.Ce.userSettings)),
              jQuery("#nickname-edit").attr("placeholder", i),
              jQuery("#nickname-edit").text(i)),
            this.toggleIconContainer();
        }
        cancelNicknameListener() {
          this.toggleIconContainer();
        }
        get inSession() {
          return this.se;
        }
        addIconSelector() {
          Object.keys(f).forEach((t) => {
            if (w[t]()) {
              const e = f[t],
                i = jQuery('\n                <ul id="icon-holder"></ul>\n            ');
              for (const n of e) this.He(`${t}/${n}`, i, n);
              const n = jQuery(
                `\n                <div class="icon-holder-wrap">\n                  <p class="extension-txt-indicator" data-tp-id="chat_container-new_icon_selection-category_name>${t}</p>\n                </div>\n            `
              );
              i.appendTo(n), n.appendTo(jQuery("#icon-holder-template"));
            }
          }, this);
        }
        inputHeightCheck() {
          const t = jQuery("#chat-input").text(),
            e = ((t || "").match(F) || []).length,
            i = t.replace(F, "");
          e <= 3 || i
            ? jQuery(".inTextEmoji").css("font-size", "24px")
            : e > 0
            ? jQuery(".inTextEmoji").css("font-size", "20px")
            : jQuery(".inTextEmoji").css("font-size", "18px");
        }
        He(t, e, i) {
          jQuery(
            `\n            <a class="image-button">\n                <img class="img-class" src='${chrome.runtime.getURL(
              "img/icons/" + t
            )}' data-tp-id="chat_container-new_icon_selection-${i}">\n            </a>\n        `
          )
            .appendTo(e)
            .data("icon", t);
        }
      } {
        constructor() {
          super(), (this.ze = "\n          .videoFullscreenWithChat {\n            width: calc(100% - 340px);\n          }\n        ");
        }
        getReactionContainer() {
          return jQuery(".webPlayerSDKContainer");
        }
        Ee() {
          this.Se &&
            jQuery(".webPlayerSDKContainer").append(
              (function (t, e = "") {
                return `\n\n      <style tpInjected>\n    \n\n      .with-chat {\n        left: 0px !important;\n        width: calc(100% - 340px) !important;\n      }\n\n      .tp-video {\n        transition: width 250ms linear 0.2s;\n      }\n\n      ${e}\n      \n    </style>\n\n    <link tpInjected rel="stylesheet" href="${chrome.runtime.getURL(
                  "css/chat.css"
                )}">\n    <link rel="stylesheet" href="${chrome.runtime.getURL("css/alert.css")}">\n\n    ${t}\n  `;
              })(this.Se, this.ze)
            );
        }
        getVideoTitle() {
          var t;
          return Gt(this, void 0, void 0, function* () {
            const e = document.querySelectorAll(".atvwebplayersdk-title-text")[0];
            return null !== (t = e.innerText) && void 0 !== t ? t : void 0;
          });
        }
        getChatVisible() {
          return jQuery("#chat-wrapper").is(":visible");
        }
        removeChat() {
          super.removeChat();
        }
        setChatVisible(t, e = !0) {
          const i = Object.create(null, { setChatVisible: { get: () => super.setChatVisible } });
          return Gt(this, void 0, void 0, function* () {
            try {
              yield i.setChatVisible.call(this, t, e);
            } catch (t) {
              return;
            }
            t
              ? (jQuery(".webPlayerSDKContainer").addClass(dt),
                jQuery("#chat-wrapper").show(),
                document.hasFocus() || this.clearUnreadCount())
              : (jQuery(".webPlayerSDKContainer").removeClass(dt), jQuery("#chat-wrapper").hide(), jQuery(window).trigger("resize")),
              this.We(t);
          });
        }
        We(t) {
          document.webkitIsFullScreen &&
            (t
              ? (jQuery("video").addClass("videoFullscreenWithChat"), jQuery(".webPlayerSDKUiContainer").addClass(dt))
              : (jQuery("video").removeClass("videoFullscreenWithChat"), jQuery(".webPlayerSDKUiContainer").removeClass(dt)));
        }
        shouldAddReactionSpace() {
          return !0;
        }
        shouldShowReaction() {
          return !0;
        }
        shouldUseVideoGIF() {
          return !0;
        }
        onVideoResize() {
          Mt(100)().then(() => {
            this.shouldChatBeVisible() &&
              (document.webkitIsFullScreen
                ? (jQuery("video").addClass("videoFullscreenWithChat"), jQuery(".webPlayerSDKUiContainer").addClass(dt))
                : (jQuery("video").removeClass("videoFullscreenWithChat"), jQuery(".webPlayerSDKUiContainer").removeClass(dt)));
          });
        }
      }
      var Ht,
        zt,
        Wt,
        Kt,
        Jt = function (t, e, i, n) {
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
      })(Ht || (Ht = {})),
        (function (t) {
          (t.PAUSED = "paused"), (t.PLAYING = "playing");
        })(zt || (zt = {})),
        (function (t) {
          (t.episode = "episode"), (t.movie = "movie");
        })(Wt || (Wt = {}));
      class Yt {
        constructor(t, e, i, n, s) {
          (this.requiredPermissions = t), (this.serverName = i), (this.name = n), (this.contentScripts = e), (this.syncFromEnd = s);
        }
        urlWithSessionId(t) {
          return `${c}/join/${t}`;
        }
      }
      !(function (t) {
        (t.NETFLIX = "Netflix"),
          (t.HULU = "Hulu"),
          (t.DISNEY_PLUS = "Disney"),
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
          (t.CRAVE = "Crave");
      })(Kt || (Kt = {}));
      const Xt = new (class extends Yt {
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
      })([], ["content_scripts/amazon/amazon_content_bundled.js"], "amazon", Kt.AMAZON, !1);
      Object.freeze(Xt);
      const qt = Xt;
      var Zt = i(1227),
        te = i.n(Zt);
      class ee {
        constructor(t) {
          this.namespace = t;
        }
        debug(t) {
          const e = t.methodName ? `${this.namespace}:${t.methodName}` : this.namespace;
          t.message && te()(e)(t.message), t.object && te()(e)(t.object);
        }
      }
      var ie = function (t, e, i, n) {
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
      class ne extends class {
        constructor() {
          (this.Ke = 0), (this.Je = !1);
        }
        set hostOnly(t) {
          this.Je = t;
        }
        get hostOnly() {
          return this.Je;
        }
        get uiEventsHappening() {
          return this.Ke;
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
          const i = new W(M, S, { name: "video_error", action: { description: t, reason: e } });
          $.g(i);
        }
        doAdCheck() {
          return Jt(this, void 0, void 0, function* () {});
        }
      } {
        constructor() {
          super(),
            (this.Ye = !1),
            (this.Xe = new ee("ext:ContentScripts:Amazon:AmazonVideoApi")),
            (this.qe = 6e4),
            (this.Ke = 0),
            (this.Ze = 0),
            (this.ti = []),
            (this.ei = this.getVideoType());
        }
        get videoId() {
          return this.ii;
        }
        set videoId(t) {
          this.ii = t;
        }
        get videoType() {
          return this.ei;
        }
        set videoType(t) {
          this.ei = t;
        }
        getVideoType() {
          const t = jQuery(".webPlayerContainer div:contains('Next Episode')");
          return t && t.length ? Wt.episode : Wt.movie;
        }
        setVideoEventListener(t) {
          this.ni = t;
        }
        tryUpdateVideoId() {
          return (
            this.si != this.videoId &&
            (this.Xe.debug({ methodName: "tryUpdateVideoId", message: `New video ID: ${this.si}` }), (this.videoId = this.si), !0)
          );
        }
        ui() {
          var t, e;
          return ie(this, void 0, void 0, function* () {
            try {
              const e = new Date().getTime();
              if (!this.getVideoElement()) throw new Error("Couldn't find video");
              return (
                yield this.updateVideoId(),
                yield Pt(() => null != this.Ze && this.Ze > e, 4e3)(),
                null !== (t = this.si) && void 0 !== t ? t : ""
              );
            } catch (t) {
              return null !== (e = this.si) && void 0 !== e ? e : "";
            }
          });
        }
        oi() {
          var t, e;
          return ie(this, void 0, void 0, function* () {
            try {
              if (null == this.ii && this.si)
                return this.Xe.debug({ methodName: "getCurrentVideoId", message: "Already have video Id" }), this.si;
              const e = new Date().getTime(),
                i = this.getVideoElement();
              if (!i) throw new Error("Couldn't find video");
              return (
                yield Pt(this.isVideoReady.bind(this), 5e3)(),
                (i.muted = !0),
                i.paused
                  ? (yield this.play(), yield Mt(250)(), yield this.pause())
                  : (yield this.pause(), yield Mt(250)(), yield this.play()),
                (i.muted = !1),
                this.Xe.debug({ methodName: "getCurrentVideoId", message: "Waiting for video id" }),
                yield this.updateVideoId(),
                yield Pt(() => null != this.Ze && this.Ze > e, 4e3)(),
                null !== (t = this.si) && void 0 !== t ? t : ""
              );
            } catch (t) {
              const i = this.getVideoElement();
              return (
                i && (i.muted = !1),
                this.Xe.debug({ methodName: "getCurrentVideoId", message: "Failed to load video id: " + t }),
                this.logError("Failed to load video id", t),
                null !== (e = qt.getVideoId(new URL(window.location.href))) && void 0 !== e ? e : ""
              );
            }
          });
        }
        ri() {
          return ie(this, void 0, void 0, function* () {
            void 0 === this.ii && (this.videoId = yield this.oi());
          });
        }
        waitVideoApiReadyAsync() {
          return ie(this, void 0, void 0, function* () {
            if (!this.isPlayerPage()) throw new Error(E);
            yield Pt(this.isVideoReady.bind(this), 1 / 0)(),
              yield this.skipPromo(),
              yield this.ri(),
              (this.videoType = this.getVideoType());
          });
        }
        waitVideoDoneLoadingAsync() {
          return ie(this, void 0, void 0, function* () {
            yield Pt(() => this.ai() !== Ht.LOADING, 1e4)();
          });
        }
        getStateAsync() {
          return new Promise((t, e) => {
            if (!this.isPlayerPage()) return void e("Not on player page.");
            const i = this.ci();
            if (-1 == i) return void e("Could not get current player time.");
            t({ playbackState: this.ai(), playbackPositionMilliseconds: i });
          });
        }
        checkUpdateId(t) {
          this.si == t && (this.videoId = this.si);
        }
        isTimeTextLoaded() {
          const t = document.querySelector(".atvwebplayersdk-timeindicator-text");
          return null != t && null != t.textContent;
        }
        skipPromo() {
          return ie(this, void 0, void 0, function* () {
            if (!this.Ye) {
              this.Ye = !0;
              try {
                let t = document.evaluate("//div[text()='Skip']", document, null, XPathResult.ANY_TYPE, null).iterateNext();
                t &&
                  t instanceof HTMLElement &&
                  (this.Xe.debug({ methodName: "skipPromo", message: "Skipped Ads" }),
                  t.click(),
                  yield Pt(
                    () => ((t = document.evaluate("//div[text()='Skip']", document, null, XPathResult.ANY_TYPE, null).iterateNext()), !t),
                    5e3
                  )(),
                  yield Mt(250)());
              } finally {
                this.Ye = !1;
              }
            }
          });
        }
        freeze(t) {
          return ie(this, void 0, void 0, function* () {
            this.Ke += 1;
            try {
              yield this.pause(), yield Mt(t)(), yield this.play();
            } finally {
              this.Ke -= 1;
            }
          });
        }
        isVideoReady() {
          const t = this.ai();
          return "paused" === t || "playing" === t;
        }
        episodeDataInteraction(t) {
          if (t.source == window && t.data.type && "EPISODE_ID" == t.data.type && t.data.videoIds)
            try {
              this.ti = JSON.parse(t.data.videoIds);
            } catch (t) {
              this.Xe.debug({ methodName: "episodeDataInteraction", message: "Parse error:" + t }),
                this.logError("Parse Error for episoeData Interaction function", t);
            }
        }
        getVideoDataAsync() {
          var t, e, i;
          return ie(this, void 0, void 0, function* () {
            yield this.updateVideoId();
            const n = null !== (t = this.Di()) && void 0 !== t ? t : "";
            this.videoType = this.getVideoType();
            const s = this.hi(),
              u = this.getScreenSize(),
              o = this.di(),
              r = this.getVideoContent(null !== (e = this.si) && void 0 !== e ? e : "", n, window.location.href, this.videoType, o),
              a = yield this.getStateAsync();
            return {
              videoId: null !== (i = this.si) && void 0 !== i ? i : "",
              videoTitle: n,
              videoDuration: s,
              serviceDomain: window.location.hostname,
              screen: u,
              content: r,
              videoState: a.playbackState
            };
          });
        }
        jumpToNextEpisode(t) {
          var e;
          return ie(this, void 0, void 0, function* () {
            this.Ke += 1;
            if ((yield this.li()) !== t.videoId)
              try {
                yield null === (e = this.ni) || void 0 === e ? void 0 : e.reloadNextEpisode();
              } catch (t) {
                console.log("Failed to jump to next episode:", t);
              }
            this.Ke -= 1;
          });
        }
        pi() {
          return new Promise((t, e) => {
            const i = document.evaluate("//div[text()='Next Episode']", document, null, XPathResult.ANY_TYPE, null).iterateNext();
            i instanceof HTMLElement ? (i.click(), t()) : e();
          });
        }
        pause() {
          return ie(this, void 0, void 0, function* () {
            this.Xe.debug({ methodName: "pause", message: "Attempting to Pause" }), (this.Ke += 1);
            try {
              const t = this.getVideoElement();
              if (null === t) throw new Error(B);
              t.pause(), yield Mt(250)(), yield Pt(() => this.ai() === Ht.PAUSED, 1250)();
            } finally {
              this.Ke -= 1;
            }
          });
        }
        getStreamingServiceName() {
          return Kt.AMAZON;
        }
        play() {
          return ie(this, void 0, void 0, function* () {
            this.Xe.debug({ methodName: "play", message: "Attempting to play" }), (this.Ke += 1);
            try {
              const t = this.getVideoElement();
              if (null === t) throw new Error(B);
              yield t.play(), yield Pt(() => this.ai() === Ht.PLAYING, 1250)();
            } finally {
              this.Ke -= 1;
            }
          });
        }
        setCurrentTime(t) {
          return ie(this, void 0, void 0, function* () {
            this.Ke += 1;
            try {
              if (null === this.getVideoElement()) throw new Error(B);
              const e = t / this.hi();
              this.gi(e),
                this.Xe.debug({ methodName: "setCurrentTime", message: "Manually clicked seek" }),
                yield Mt(500)(),
                yield Pt(() => this.ai() !== Ht.LOADING, 1 / 0)();
            } finally {
              this.Ke -= 1;
            }
          });
        }
        onNode(t) {
          const e = t.detail;
          "VideoId" == e.type && ((this.si = e.videoId), (this.Ze = Date.now()));
        }
        updateVideoId() {
          return ie(this, void 0, void 0, function* () {
            this.Xe.debug({ methodName: "updateVideoId", message: "Trying to update video ID" });
            try {
              yield Pt(() => {
                const t = new CustomEvent("AmazonVideoMessage", { detail: { type: "getVideoId" } });
                return window.dispatchEvent(t), !0;
              }, 1e4)();
            } catch (t) {
              throw new Error("Couldn't get new videoId in time.");
            }
          });
        }
        gi(t) {
          const e = document.querySelector(".atvwebplayersdk-seekbar-range");
          if (null !== e) {
            const i = this.Fi(t);
            null !== i && (this.vi(e, i, "mousedown"), this.vi(e, i, "mouseup"));
          }
        }
        Fi(t) {
          const e = document.querySelector(".atvwebplayersdk-seekbar-range");
          if (e instanceof HTMLElement) {
            const i = e.getBoundingClientRect();
            return t * e.offsetWidth + i.left;
          }
          return null;
        }
        vi(t, e, i) {
          const { height: n, top: s } = t.getBoundingClientRect(),
            u = s + n / 2;
          document.createEvent("MouseEvents").initMouseEvent(i, !0, !0, window, 0, 0, 0, e, u, !1, !1, !1, !1, 0, null);
          const o = new PointerEvent(i, { pointerId: 1, isPrimary: !0, view: window, bubbles: !0, cancelable: !0, clientX: e, clientY: u });
          t.dispatchEvent(o);
        }
        getVideoElement() {
          return this.isPlayerPage() ? document.querySelector(".rendererContainer video") : null;
        }
        isPlayerPage() {
          return (
            !!window.location.href.includes("?autoplay=1") ||
            (null != document.querySelector(".rendererContainer video") && null != document.querySelector(".dv-player-fullscreen"))
          );
        }
        ai() {
          const t = this.getVideoElement();
          let e;
          return (e = t && "" !== t.src ? (t.readyState < 4 ? Ht.LOADING : t.paused ? Ht.PAUSED : Ht.PLAYING) : Ht.NOT_READY), e;
        }
        yi() {
          const t = this.getVideoElement();
          if (t) {
            let e = Math.floor(t.duration - this.hi() / 1e3);
            return (e = e >= 0 ? e : 0), e;
          }
          return 0;
        }
        ci() {
          const t = this.getVideoElement();
          if (t) {
            const e = this.yi(),
              i = t.currentTime - e;
            return Math.floor(1e3 * i);
          }
          return 0;
        }
        hi() {
          try {
            const t = document.querySelector(".atvwebplayersdk-timeindicator-text");
            if (t instanceof Node) {
              const e = t.textContent.split(" / "),
                i = Nt(e[0]) + Nt(e[1]);
              this.qe = 1e3 * i;
            }
          } catch (t) {
            this.logError("Unable to get duration of episode", t);
          }
          return this.qe;
        }
        Di() {
          const t = document.querySelectorAll(".atvwebplayersdk-title-text")[0];
          return t ? t.innerHTML : null;
        }
        di() {
          var t, e, i, n;
          const s = document.querySelector(".atvwebplayersdk-subtitle-text"),
            u =
              null !== (e = null === (t = null == s ? void 0 : s.lastChild) || void 0 === t ? void 0 : t.textContent) && void 0 !== e
                ? e
                : void 0,
            o = null == s ? void 0 : s.firstChild;
          let r = {};
          if (o && o.textContent) {
            const t = null !== (i = o.textContent.match(/Season\s(\d*),/)) && void 0 !== i ? i : [""],
              e = null !== (n = o.textContent.match(/\.\s(\d)/)) && void 0 !== n ? n : [""];
            r = { episodeNum: Number(e[1]), seasonNum: Number(t[1]), title: u };
          }
          return r;
        }
        li() {
          return new Promise((t, e) => {
            Pt(this.mi.bind(this), 5e3)().then(() =>
              ie(this, void 0, void 0, function* () {
                var i;
                try {
                  this.Xe.debug({ methodName: "_getVideoIdAsync", message: "Attempting play/pause" });
                  const n = new Date().getTime(),
                    s = this.getVideoElement();
                  if (null === s) return void e();
                  s.paused ? (yield s.play(), yield Mt(250)(), s.pause()) : (s.pause(), yield Mt(250)(), yield s.play()),
                    null == this.videoId && this.si
                      ? (this.Xe.debug({ methodName: "_getVideoIdAsync", message: "Already have video Id" }), t(this.si))
                      : (this.Xe.debug({ methodName: "_getVideoIdAsync", message: "Waiting for video Id" }),
                        yield this.updateVideoId(),
                        yield Pt(() => null != this.Ze && this.Ze > n, 4e3)(),
                        t(null !== (i = this.si) && void 0 !== i ? i : ""));
                } catch (t) {
                  this.Xe.debug({ methodName: "_getVideoIdAsync", message: "Failed to load video id with error: " }),
                    this.logError("Failed to load video id", t),
                    e();
                }
              })
            );
          });
        }
        mi() {
          const t = this.ai();
          return t === Ht.PAUSED || t === Ht.PLAYING;
        }
        getUpdateSessionDataAsync() {
          return ie(this, void 0, void 0, function* () {
            const t = yield this.getStateAsync(),
              e = this.ci();
            if (null === e) throw new Error("Couldn't get update data");
            const i = Date.now();
            return {
              state: t.playbackState === Ht.PLAYING ? zt.PLAYING : zt.PAUSED,
              lastKnownTime: e,
              lastKnownTimeUpdatedAt: i,
              bufferingState: this.ai() == Ht.LOADING
            };
          });
        }
      }
      var se = function (t, e, i, n) {
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
      var ue,
        oe,
        re = function (t, e, i, n) {
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
      class ae extends class {
        constructor(t) {
          (this.fi = t), console.log("Video Event Listener");
        }
        getCurrentStatus() {
          return se(this, void 0, void 0, function* () {
            return "";
          });
        }
        getStatusMetaData() {
          return se(this, void 0, void 0, function* () {});
        }
        reloadNextEpisode() {
          var t;
          return se(this, void 0, void 0, function* () {
            yield null === (t = this.Te) || void 0 === t ? void 0 : t.reloadPartyAsync();
          });
        }
        startListening() {
          this.Ci();
        }
        stopListening() {
          this.wi();
        }
        Ci() {
          const t = navigator;
          t.mediaSession.setActionHandler("play", () =>
            se(this, void 0, void 0, function* () {
              this.Ei(), this.fi.play(), console.log("Bluetooth device played the video");
            })
          ),
            t.mediaSession.setActionHandler("pause", () =>
              se(this, void 0, void 0, function* () {
                this.Ei(), this.fi.pause(), console.log("Bluetooth device paused the video");
              })
            );
        }
        wi() {
          const t = navigator;
          t.mediaSession.setActionHandler("play", null), t.mediaSession.setActionHandler("pause", null);
        }
        bi() {
          var t;
          null === (t = this.Te) || void 0 === t || t.tryBroadcast(!1);
        }
        Ei() {
          var t;
          console.log("Going to wait for change"), null === (t = this.Te) || void 0 === t || t.tryBroadcast(!0);
        }
        _i() {
          var t;
          null === (t = this.Te) || void 0 === t || t.setBuffering(!0);
        }
        ji(t) {
          var e;
          null === (e = this.Te) || void 0 === e || e.setWatchingAds(!0, t);
        }
        Bi() {
          var t, e;
          null === (t = this.Te) || void 0 === t || t.setWatchingAds(!1), null === (e = this.Te) || void 0 === e || e.forceSync();
        }
        Ai() {
          var t;
          null === (t = this.Te) || void 0 === t || t.setBuffering(!1);
        }
        ki(t) {
          var e;
          null === (e = this.Te) || void 0 === e || e.sendNextEpisodeAsync(t);
        }
        Qi(t) {
          var e;
          null === (e = this.Te) || void 0 === e || e.sendTeardown(t);
        }
        setMessageForwarder(t) {
          this.Te = t;
        }
        shouldSync() {
          return !0;
        }
      } {
        constructor(t, e) {
          var i, n;
          super(t),
            (this.Ii = this.xi.bind(this)),
            (this.Si = this.onSeeking.bind(this)),
            (this.Ti = this._i.bind(this)),
            (this.Mi = this.Ai.bind(this)),
            (this.Pi = this.$i.bind(this)),
            (this.Xe = new ee("ext:ContentScripts:Amazon:AmazonVideoEventListener")),
            (this.Ni = () => {
              var t;
              this.fi.isPlayerPage()
                ? (null === (t = this.Te) || void 0 === t ? void 0 : t.changingVideo) ||
                  (this.Te && (this.Te.changingVideo = !0),
                  this.fi
                    .ui()
                    .then((t) => {
                      var e;
                      const i = t;
                      i != (null === (e = this.Te) || void 0 === e ? void 0 : e.videoId) && null != i
                        ? this.ki(i)
                        : this.Te && (this.Te.changingVideo = !1);
                    })
                    .catch((t) => {
                      var e, i;
                      this.Xe.debug({ methodName: "onVideoLoadStart", message: t }),
                        this.Te && (this.Te.changingVideo = !1),
                        this.fi.videoId !== (null === (e = this.Te) || void 0 === e ? void 0 : e.videoId) &&
                          ((null === (i = this.Te) || void 0 === i ? void 0 : i.changingVideo) ? this.Qi(At) : this.Qi(Bt));
                    }))
                : this.Qi(_t);
            }),
            (this.fi = t),
            (this.N = e),
            this.fi.setVideoEventListener(this),
            (this.Vi = this.N.onVideoResize.bind(this.N)),
            (this.Ri = this.fi.episodeDataInteraction.bind(this.fi)),
            (this.Oi = this.fi.onNode.bind(this.fi)),
            (null === (i = window.teleparty) || void 0 === i ? void 0 : i.injectScriptLoaded) ||
              (function (t) {
                const e = document.createElement("script");
                e.setAttribute("tpInjected", ""), (e.src = t), (document.head || document.documentElement).appendChild(e), e.remove();
              })(chrome.extension.getURL("content_scripts/amazon/amazon_injected_bundled.js")),
            (null === (n = window.teleparty) || void 0 === n ? void 0 : n.replaceScriptLoaded) ||
              (this.Xe.debug({ methodName: "constructor", message: "Injecting replace script" }),
              (function (t) {
                const e = document.createElement("script");
                e.setAttribute("tpInjected", ""),
                  (e.textContent = t),
                  (document.head || document.documentElement).appendChild(e),
                  e.remove();
              })(
                '\n  console.log("Loaded Replace Script");\n    if(!window.replaceScriptLoaded) {\n      window.replaceScriptLoaded = true;\n      (function(history){\n        var replaceState = history.replaceState;\n        history.replaceState = function(state) {\n          if (typeof history.onreplacestate == "function") {\n            history.onreplacestate({state: state});\n          }\n          return replaceState.apply(history, arguments);\n        }\n        var pushState = history.pushState;\n        history.pushState = function(state) {\n            if (typeof history.onpushstate == "function") {\n                history.onpushstate({state: state});\n            }\n            return pushState.apply(history, arguments);\n        };\n      })(window.history);\n\n      var popInteraction = function(e) {\n        // send message to content script w next episode\n        window.postMessage({ type: "FROM_PAGE_POP", text: "next episode from the webpage!"}, "*");\n      }\n\n      var reloadInteraction = function(e) {\n        // send message to content script w next episode\n        window.postMessage({ type: "FROM_PAGE", text: "next episode from the webpage!"}, "*");\n      }\n      window.onpopstate = popInteraction;\n      history.onreplacestate = history.onpushstate = reloadInteraction;\n    }\n'
              )),
            this.initListeners(),
            (this.Ui = new MutationObserver(this.Gi.bind(this)));
        }
        initListeners() {
          window.addEventListener("message", this.Ri, !1), window.addEventListener("FromNode", this.Oi, !1);
        }
        xi() {
          this.bi();
        }
        Gi() {
          if (!this.fi.isPlayerPage()) return this.Qi(_t), void this.stopListening();
        }
        onSeeking() {
          const t = this.fi.getVideoElement();
          t && t.readyState < 4 && this._i(), this.bi();
        }
        reloadListeners() {
          const t = this.fi.getVideoElement();
          t &&
            (t.addEventListener("waiting", this.Ti),
            t.addEventListener("canplay", this.Mi),
            t.addEventListener("play", this.Ii),
            t.addEventListener("pause", this.Ii),
            t.addEventListener("seeking", this.Si),
            t.addEventListener("loadstart", this.Ni));
        }
        startListening() {
          super.startListening();
          const t = this.fi.getVideoElement();
          t &&
            (t.addEventListener("waiting", this.Ti),
            t.addEventListener("canplay", this.Mi),
            t.addEventListener("play", this.Ii),
            t.addEventListener("pause", this.Ii),
            t.addEventListener("seeking", this.Si),
            t.addEventListener("loadstart", this.Ni));
          const e = document.querySelector("#dv-web-player");
          this.Ui.disconnect(),
            e && this.Ui.observe(e, { attributes: !0 }),
            window.addEventListener("resize", this.Vi),
            window.document.addEventListener("webkitfullscreenchange", this.Vi),
            window.document.addEventListener("MSFullScreenChange", this.Vi),
            jQuery(".atvwebplayersdk-fullscreen-button").on("click", this.Vi),
            window.addEventListener("message", this.Pi, !1);
        }
        stopListening() {
          super.stopListening();
          const t = this.fi.getVideoElement();
          t &&
            (t.removeEventListener("waiting", this.Ti),
            t.removeEventListener("canplay", this.Mi),
            t.removeEventListener("play", this.Ii),
            t.removeEventListener("pause", this.Ii),
            t.removeEventListener("seeking", this.Si),
            t.removeEventListener("loadstart", this.Ni)),
            this.Ui.disconnect(),
            window.removeEventListener("resize", this.Vi),
            window.document.removeEventListener("webkitfullscreenchange", this.Vi),
            window.document.removeEventListener("MSFullScreenChange", this.Vi),
            window.removeEventListener("message", this.Ri, !1),
            window.removeEventListener("message", this.Pi, !1);
        }
        $i(t) {
          t.source == window && (("FROM_PAGE_POP" !== t.data.type && this.fi.isPlayerPage()) || this.Qi(_t));
        }
        loadNewVideoAsync(t) {
          return re(this, void 0, void 0, function* () {
            yield this.fi.skipPromo(),
              yield new Promise((e, i) => {
                const n = performance.now(),
                  s = setInterval(() => {
                    if (this.fi.videoId === t) {
                      const t = this.fi.getVideoElement();
                      t instanceof Element && t.src && (clearInterval(s), e());
                    } else this.fi.checkUpdateId(t), this.fi.skipPromo();
                    performance.now() - n >= 2e4 && (clearInterval(s), i(new Error("Could not load new video in time.")));
                  }, 200);
              }),
              yield Pt(this.fi.isVideoReady.bind(this.fi), 1 / 0)(),
              yield Pt(this.fi.isTimeTextLoaded.bind(this.fi), 1 / 0)();
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
          (t.CREATE_SCHEDULED_EVENT = "createScheduledEvent"),
          (t.DELETE_SCHEDULED_EVENT = "deleteScheduledEvent"),
          (t.SET_USER_STATUS = "SET_USER_STATUS"),
          (t.SIGN_IN_CREATE = "SIGN_IN_CREATE");
      })(ue || (ue = {}));
      class ce extends V {
        constructor(t, e, i) {
          super(t, e, R.GET_SESSION_DATA), (this.data = i);
        }
      }
      class De {
        constructor() {
          (this.Li = this.Hi.bind(this)), (this.zi = []), this.Wi();
        }
        addMessageListener(t) {
          this.zi.push(t);
        }
        removeMessageListener(t) {
          this.zi = this.zi.filter((t) => {});
        }
        Wi() {
          $.addListener(this.Li);
        }
        teardown() {
          (this.zi = []), $.removeListener(this.Li);
        }
        Hi(t, e, i) {
          if (!this.Ki(t)) return !1;
          return !!this.Ji(t, e, i) || (i({}), !1);
        }
        Ki(t) {
          return t.target === M;
        }
        Ji(t, e, i) {
          let n = !1;
          return (
            this.zi.forEach((s) => {
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
      })(oe || (oe = {}));
      var he,
        de = function (t, e, i, n) {
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
      class le {
        constructor(e, i) {
          (this.N = e), (this.ne = i), t("Chat forwarder");
        }
        onMessage(t, e, i) {
          var n;
          switch (t.type) {
            case O.LOAD_SESSION: {
              const e = t;
              return this.Yi(e.data), !1;
            }
            case oe.ON_MESSAGE: {
              const e = t;
              return this.T(e), this.ne.onChatMessage(), !1;
            }
            case oe.ON_BUFFER: {
              const e = t;
              return this.Xi(e), !1;
            }
            case oe.ON_TYPING: {
              const e = t;
              return this.qi(e), !1;
            }
            case oe.ON_WATCHING_ADS: {
              const e = t;
              return this.Zi(e), !1;
            }
            case oe.UPDATE_SETTINGS: {
              const e = t;
              return this.tn(e), !1;
            }
            case oe.ON_REACTION: {
              const e = t;
              return this.en(e), !1;
            }
            case oe.ON_GIF: {
              const e = t;
              return this.nn(e), !1;
            }
            case oe.USER_LIST: {
              const e = t;
              return this.sn(e), !1;
            }
            case oe.ON_WEB_RTC:
              return this.N.onWebRTC(t.data), !0;
            case ue.SET_CHAT_VISIBLE: {
              const e = t;
              return this.un(e.data), i(), !1;
            }
            case Dt.SIDEBAR_MESSAGING_READY: {
              console.log("Sidebar Ready");
              const t = null === (n = window.teleparty) || void 0 === n ? void 0 : n.tabId;
              return console.log(t), this.N.setChatFrameReady(null != t ? t : 0), i(), !0;
            }
            case Dt.DISPLAY_MODAL: {
              const e = t.data;
              return console.log(e), !0;
            }
            case Dt.ON_UPDATE_SETTINGS: {
              const e = t.data;
              return this.N.doUpdateSettings(e), i(), !0;
            }
            case Dt.ON_CHROME_STORAGE_UPDATE:
              try {
                chrome.storage.local.set(t.data);
              } catch (t) {
                console.log("Failed to update chrome storage");
              }
              return i(), !0;
            case Dt.SET_REACTIONS_ACTIVE: {
              const e = t.data;
              return this.N.setReactionsActive(e), i(), !0;
            }
            case Dt.RESET_VIEW:
              return this.N.resetChatWindow(!0), i(), !0;
            case Dt.ON_FOCUS:
              return this.N.onSidebarFocus(), i(), !0;
            case Dt.PREVIEW_REACTION: {
              const e = t.data;
              return this.N.showReaction(e), i(), !0;
            }
            case "onUpdateSettings": {
              const e = t.data;
              return this.N.doUpdateSettings(e), i(), !0;
            }
            default:
              return !1;
          }
        }
        teardown() {
          this.N.teardown();
        }
        un(t) {
          return de(this, void 0, void 0, function* () {
            this.N.isPartyWindowsActive()
              ? t.visible
                ? yield this.N.resetChatWindow()
                : yield this.N.hideChatWindow()
              : (yield this.N.setChatVisible(t.visible), this.N.fixPageControls());
          });
        }
        Yi(t) {
          const e = t.sessionCallbackData.sessionId,
            i = `${c}/join/${e}`;
          if (
            (this.N.loadInitData(t),
            this.N.setPartyUrl(i),
            this.N.setSessionId(e),
            this.N._e(t.storageData),
            this.ne.onInitChat(),
            this.N.setSessionCreated(t.isCreate),
            this.N.sendInitDataToSidebar(t),
            t.sessionCallbackData.userList && this.N.loadUserList(t.sessionCallbackData.userList),
            t.showReviewMessage && this.N.addReviewMessage(),
            !t.isCreate)
          )
            for (const e of t.sessionCallbackData.messages) "gifObject" in e ? this.N.addGif(e) : this.N.addMessage(e, !0);
        }
        T(t) {
          this.N.addMessage(t.data);
        }
        en(t) {
          this.N.showReaction(t.data);
        }
        nn(t) {
          this.N.addGif(t.data);
        }
        Xi(t) {
          this.N.onBufferingMessage(t.data);
        }
        qi(t) {
          this.N.onTypingMessage(t.data);
        }
        Zi(t) {
          this.N.onWatchingAdsMessage(t.data);
        }
        tn(t) {
          this.N.onUpdateSettingsMessage(t.data);
        }
        sn(t) {
          this.N.loadUserList(t.data.userList), this.N.setSocketConnectionId(t.data.socketConnectionId);
        }
      }
      !(function (t) {
        (t.UPDATE_SESSION = "updateSession"),
          (t.NEXT_EPISODE = "nextEpisode"),
          (t.REBOOT_SESSION = "rebootSession"),
          (t.GET_SERVER_TIME = "getServerTime"),
          (t.RELOAD_PARTY = "reloadParty");
      })(he || (he = {}));
      class pe extends V {
        constructor(t, e, i) {
          super(t, e, R.BROADCAST), (this.data = i);
        }
      }
      class ge extends N {
        constructor(t, e, i) {
          super(t, e, i), (this.type = i);
        }
      }
      class Fe extends ge {
        constructor(t, e) {
          super(t, e, he.GET_SERVER_TIME);
        }
      }
      class ve extends V {
        constructor(t, e, i) {
          super(t, e, R.BROADCAST_NEXT_EPISODE), (this.data = i);
        }
      }
      class ye extends V {
        constructor(t, e, i) {
          super(t, e, R.SET_BUFFERING), (this.data = i);
        }
      }
      class me extends V {
        constructor(t, e, i) {
          super(t, e, R.SET_WATCHING_ADS), (this.data = i);
        }
      }
      const fe = "PING",
        Ce = "SYNC",
        we = "BROADCAST";
      class Ee extends H {
        constructor(t, e, i) {
          super(t, e, O.STAY_ALIVE), (this.data = i);
        }
      }
      var be = function (t, e, i, n) {
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
      const _e = new (class {
        getRedirectDataForTabAsync(t) {
          return be(this, void 0, void 0, function* () {
            const e = (yield tt.getItemsAsync([p])).redirectDataMap,
              i = this.on(t);
            if (e && e[i]) {
              const t = e[i];
              if (this.rn(t)) return t;
            }
          });
        }
        deleteRedirectDataForTabAsync(t) {
          return be(this, void 0, void 0, function* () {
            const e = (yield tt.getItemsAsync([p])).redirectDataMap,
              i = this.on(t);
            e && e[i] && delete e[i], yield Q.setItemsAsync({ [p]: e });
          });
        }
        on(t) {
          return t;
        }
        storeRedirectDataForTabAsync(t, e) {
          return be(this, void 0, void 0, function* () {
            const i = this.on(e);
            let n = yield tt.getItemsAsync([p]);
            (n[i] = t), (n = this.an(n)), yield Q.setItemsAsync({ [p]: n });
          });
        }
        an(t) {
          return (function (t, e) {
            const i = {};
            let n;
            for (n in t) t.hasOwnProperty(n) && e(t[n]) && (i[n] = t[n]);
            return i;
          })(t, this.rn);
        }
        rn(t) {
          const e = t.date;
          return void 0 !== e && "number" == typeof e && e <= Date.now() && Date.now() - e < 108e5;
        }
      })();
      Object.freeze(_e);
      const je = _e;
      var Be = function (t, e, i, n) {
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
      class Ae {
        constructor(e, i, n) {
          (this.cn = []),
            (this.Dn = 0),
            (this.hn = 0),
            (this.dn = []),
            (this.ln = !1),
            (this.St = !1),
            (this.Je = !1),
            (this.pn = !1),
            (this.gn = void 0),
            (this.Fn = () =>
              Be(this, void 0, void 0, function* () {
                try {
                  yield fetch("https://www3.doubleclick.net", { method: "HEAD", mode: "no-cors", cache: "no-store" }), (this.gn = !1);
                } catch (t) {
                  this.gn = !0;
                }
              })),
            (this.vn = (t = !1, e = !1) =>
              Be(this, void 0, void 0, function* () {
                if (this.yn) return;
                if (this.Je) return void this.forceSync();
                if (!this.pn && !e) return;
                const i = yield this.mn();
                if (yield this.Cn(i.data, e)) yield this.wn(i);
                else if (t) {
                  if (yield this.En(e)) {
                    const t = yield this.mn();
                    yield this.wn(t);
                  }
                }
              })),
            (this.bn = () =>
              Be(this, void 0, void 0, function* () {
                if (
                  (this._n == zt.PAUSED &&
                    this.jn &&
                    (clearInterval(this.jn),
                    (this.jn = setInterval(() => {
                      this.Bn();
                    }, 6e4))),
                  this.An())
                )
                  return;
                if ((yield this.fi.waitVideoDoneLoadingAsync(), this.An())) return;
                const t = yield this.fi.getStateAsync();
                this._n == zt.PAUSED ? yield this.kn(t) : this._n == zt.PLAYING && (yield this.Qn(t)), !1 === this.pn && (this.pn = !0);
              })),
            (this.fi = e),
            (this.N = i),
            (this.ni = n),
            this.ni.setMessageForwarder(this),
            (this.In = 0),
            (this.yn = !1),
            (this._n = zt.PAUSED),
            (this.xn = 0),
            (this.Sn = 0),
            (this.Tn = 0),
            (this.Mn = this.fi.getStreamingServiceName()),
            t("Video forwarder"),
            this.Fn();
        }
        onMessage(t, e, i) {
          switch (t.type) {
            case O.GET_VIDEO_DATA:
              return this.Pn(i), !0;
            case O.LOAD_SESSION: {
              const e = t;
              return this.$n(e.data), !1;
            }
            case he.UPDATE_SESSION: {
              const e = t;
              return this.Nn(e.data), !1;
            }
            case he.NEXT_EPISODE: {
              const e = t;
              return this.Vn(e.data), !1;
            }
            case he.REBOOT_SESSION: {
              const e = t;
              return this.Rn(e.data, i), !0;
            }
            case he.RELOAD_PARTY:
              return this.reloadPartyAsync().then(() => console.log("Party Reloaded")), !0;
            case oe.ON_WATCHING_ADS: {
              const e = t;
              return this.Zi(e), !1;
            }
            default:
              return !1;
          }
        }
        Zi(t) {
          t.data.anyoneWatchingAds && !this.St && (X.pushTask(this.fi.doAdCheck.bind(this.fi)), this.forceSync()),
            (this.St = t.data.anyoneWatchingAds);
        }
        get videoId() {
          return this.ii;
        }
        set videoId(t) {
          this.ii = t;
        }
        sendTeardown(t) {
          const e = new z(M, S, t);
          $.g(e);
        }
        teardown() {
          (this.Rt = void 0),
            this.On && clearInterval(this.On),
            this.jn && clearInterval(this.jn),
            this.fi.pause(),
            X.disable(),
            this.ni.stopListening();
        }
        Rn(t, e) {
          X.resetTasks(), this.ii == t.videoId && this.Nn(t), e(this.ii == t.videoId);
          const i = new W(M, S, { eventType: "reboot", sessionId: this.Rt });
          $.g(i);
        }
        tryBroadcast(t = !1) {
          this.ln ||
            (this.Je
              ? this.forceSync()
              : 0 != this.fi.uiEventsHappening || this.yn || !this.Rt || X.hasTaskInQueue(we) || X.pushTask(() => this.vn(t), we));
        }
        setBuffering(t) {
          if (this.Rt) {
            const e = new ye(M, S, { buffering: t });
            $.g(e);
          }
        }
        isWatchingAds() {
          return this.ln;
        }
        setWatchingAds(t, e) {
          if (this.Rt) {
            this.ln = t;
            const i = new me(M, S, { watchingAds: t, adDurationLeft: e });
            $.g(i);
          }
        }
        sendNextEpisodeAsync(t) {
          return Be(this, void 0, void 0, function* () {
            if (this.Rt && t !== this.ii && t !== this.Un) {
              (this.Un = t), (this.yn = !0);
              const e = new ve(M, S, { nextEpisode: t }),
                i = yield $.g(e);
              i && "Locked Session" === i.errorMessage && (yield this.Gn(t));
            }
          });
        }
        Gn(t) {
          return Be(this, void 0, void 0, function* () {
            try {
              yield Pt(() => t == this.ii, 1e4)(), (this.yn = !1);
            } catch (t) {
              this.de("An error has occured when trying to wait till the episode changed videos");
              const e = { showAlert: !0, alertModal: mt };
              this.sendTeardown(e);
            }
          });
        }
        Cn(t, e) {
          return Be(this, void 0, void 0, function* () {
            if (null == t.lastKnownTime || null == t.lastKnownTimeUpdatedAt || null == t.state) return !1;
            if (e && t.state === zt.PAUSED && t.lastKnownTime < Ft) return !1;
            const i = Math.abs(t.lastKnownTime - this.Ln());
            if (t.state == this._n && i < Ft) return !1;
            if (i >= Ft) {
              const t = new W(M, S, { name: "video_seek", action: { source: "self" } });
              $.g(t), this.Mn == Kt.AMAZON || this.Mn == Kt.PARAMOUNT ? yield Mt(200)() : this.Mn == Kt.HBO_MAX && (yield Mt(500)());
            }
            return !0;
          });
        }
        mn() {
          return Be(this, void 0, void 0, function* () {
            const t = yield this.fi.getUpdateSessionDataAsync();
            (t.lastKnownTimeUpdatedAt -= this.hn), (t.lastKnownTime = Math.round(t.lastKnownTime));
            return new pe(M, S, t);
          });
        }
        forceSync() {
          X.pushTask(this.bn, Ce);
        }
        Vn(t) {
          return Be(this, void 0, void 0, function* () {
            (this.In = Date.now()), X.pushTask(() => this.Hn(t));
          });
        }
        Hn(e) {
          return Be(this, void 0, void 0, function* () {
            try {
              t("Continue next episode called"),
                (this.yn = !0),
                yield this.fi.jumpToNextEpisode(e),
                yield this.ni.loadNewVideoAsync(e.videoId),
                t("After load new video"),
                this.ni.reloadListeners(),
                this.Tn < this.In &&
                  ((this._n = zt.PAUSED),
                  (this.xn = 0),
                  (this.Sn = Date.now()),
                  t("Sending broadcast after next episode"),
                  X.pushTask(() => this.vn(!0, !0), we),
                  X.removeTask(Ce)),
                (this.ii = e.videoId),
                (this.yn = !1);
              const i = new W(M, S, { name: "video_start", action: { description: "video session has begun" } });
              $.g(i);
            } catch (t) {
              this.de("Error loading new video."), console.log("Error was", t), yield this.reloadPartyAsync();
            }
          });
        }
        persistExtension(t) {
          var e, i;
          return Be(this, void 0, void 0, function* () {
            console.log("persist here");
            const n = null !== (i = null === (e = window.teleparty) || void 0 === e ? void 0 : e.tabId) && void 0 !== i ? i : 0,
              s = new Ee(M, S, { tabId: n, persist: t });
            $.g(s);
            const u = yield this.zn();
            (u.date = Date.now()), je.storeRedirectDataForTabAsync(u, n);
          });
        }
        reloadPartyAsync() {
          var t, e;
          return Be(this, void 0, void 0, function* () {
            try {
              const i = yield this.zn();
              i.date = Date.now();
              const n = yield this.Wn(i),
                s = null !== (e = null === (t = window.teleparty) || void 0 === t ? void 0 : t.tabId) && void 0 !== e ? e : 0,
                u = new Ee(M, S, { tabId: s, persist: !1 });
              yield $.g(u), yield je.storeRedirectDataForTabAsync(i, s), (window.location.href = n);
            } catch (t) {
              console.log("Error reloading party", t), this.de("Failed to fix next episode.");
              const e = new z(M, S, { showAlert: !0, alertModal: Ct });
              $.g(e);
            }
          });
        }
        zn() {
          return Be(this, void 0, void 0, function* () {
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
                      e(t), this.de("Unable to get video endpoint data to reload session");
                    }
                }),
                i.open("GET", "https://api.teleparty.com/video?session=" + this.Rt, !0),
                i.send(null);
            });
          });
        }
        mapToParamountType(t) {
          return "episode" === t ? "shows" : "feature" === t ? "movies" : "live" === t ? "live-tv" : "none";
        }
        Wn(t) {
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
              default:
                throw new Error();
            }
          }
          var e;
          throw new Error("Invalid Session Response");
        }
        Nn(t) {
          (this.Tn = Date.now()), X.pushTask(this.Kn(t).bind(this));
        }
        Kn(t) {
          if (t.state === zt.PAUSED && this._n === zt.PLAYING) {
            this.Bn();
            const t = new W(M, S, {
              name: "video_pause",
              action: { description: "video was played from pause", reason: "Video was played" }
            });
            $.g(t);
          } else if (t.state === zt.PLAYING && this._n === zt.PAUSED) {
            const t = new W(M, S, {
              name: "video_resume",
              action: { description: "video was played from pause", reason: "Video was played" }
            });
            $.g(t), this.Bn();
          }
          return (this._n = t.state), (this.xn = t.lastKnownTime), (this.Sn = t.lastKnownTimeUpdatedAt), this.bn;
        }
        Pn(t) {
          var e;
          return Be(this, void 0, void 0, function* () {
            try {
              const e = yield this.fi.getVideoDataAsync(),
                i = yield this.fi.getStateAsync();
              (e.is_player_fullscreen = null !== document.fullscreenElement),
                (e.is_chat_visible = this.N.getChatVisible()),
                (e.is_adblock_enabled = this.gn),
                (e.video_ts_ms = Math.round(i.playbackPositionMilliseconds)),
                (e.party_ts_ms = this.xn),
                t(e);
            } catch (i) {
              this.de(null !== (e = i.message) && void 0 !== e ? e : "Unable to send video data"), t({ error: i });
            }
          });
        }
        de(t) {
          const e = new W(M, S, {
            name: "video_error",
            action: { description: t, reason: "An errors has occurred during video playback" }
          });
          $.g(e);
        }
        En(t) {
          return Be(this, void 0, void 0, function* () {
            return new Promise((e) => {
              const i = performance.now(),
                n = () =>
                  Be(this, void 0, void 0, function* () {
                    if (performance.now() - i >= 2500) e(!1);
                    else {
                      const i = yield this.mn();
                      (yield this.Cn(i.data, t))
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
        wn(t) {
          return Be(this, void 0, void 0, function* () {
            if (this.yn || this.ln) return;
            const e = this._n;
            if (t.data.bufferingState) {
              (t.data.state = zt.PAUSED), yield $.g(t, 1e3), yield this.fi.waitVideoDoneLoadingAsync();
              const i = yield this.mn();
              (i.data.bufferingState = !0), e == zt.PLAYING && (i.data.state = zt.PLAYING), yield $.g(i, 1e3);
            } else yield $.g(t, 1e3);
          });
        }
        $n(t) {
          return Be(this, void 0, void 0, function* () {
            const e = t.sessionCallbackData;
            (this.Rt = e.sessionId),
              (this._n = e.state),
              (this.xn = Number(e.lastKnownTime)),
              (this.Sn = Number(e.lastKnownTimeUpdatedAt)),
              (this.ii = e.videoId),
              (this.St = !1),
              "true" == e.controlLock && (this.Je = !0),
              t.isCreate ? ((this.pn = !0), X.pushTask(this.vn.bind(this), we)) : this.forceSync();
            const i = new W(M, S, { name: "video_start", action: { description: "video session has begun" } });
            $.g(i), this.ni.startListening(), this.Jn();
          });
        }
        Yn() {
          return new Promise((e) => {
            const i = new Fe(M, S),
              n = Date.now();
            $.g(i)
              .then((t) => {
                const e = Date.now();
                if (t) {
                  const i = t.serverTime;
                  i &&
                    ($t(this.cn, e - n, 5),
                    (this.Dn = Vt(this.cn)),
                    $t(this.dn, e - Math.round(this.Dn / 2) - i, 5),
                    (this.hn = Vt(this.dn)));
                }
              })
              .catch((e) => {
                t(e), this.de(e);
              }),
              e();
          });
        }
        Bn() {
          const t = new W(M, S, { name: "video_heartbeat", action: { description: "new heartbeat", reason: "Heartbeat session was due" } });
          $.g(t);
        }
        Jn() {
          this.On && clearInterval(this.On),
            this.jn && clearInterval(this.jn),
            (this.On = setInterval(() => {
              X.hasTaskInQueue(Ce) || X.pushTask(this.bn, Ce);
            }, 5e3)),
            (this.jn = setInterval(() => {
              this.Bn();
            }, 6e4)),
            (this.Xn = setInterval(() => {
              X.hasTaskInQueue(fe) || X.pushTask(this.Yn.bind(this), fe);
            }, 12500)),
            this.Yn();
        }
        An() {
          return !this.Rt || this.fi.uiEventsHappening > 0 || this.ln || this.yn || !this.ni.shouldSync();
        }
        kn(t) {
          return Be(this, void 0, void 0, function* () {
            const { playbackState: e, playbackPositionMilliseconds: i } = t;
            if ((e !== Ht.PAUSED && (yield this.fi.pause()), Math.abs(this.xn - i) > 2500)) {
              yield this.fi.setCurrentTime(this.xn);
              const t = new W(M, S, { name: "video_seek", action: { source: "another user" } });
              $.g(t);
            }
          });
        }
        Qn(t) {
          return Be(this, void 0, void 0, function* () {
            const { playbackState: e, playbackPositionMilliseconds: i } = t,
              n = this.Ln();
            if ((e == Ht.PAUSED && (yield this.fi.play()), Math.abs(n - i) > 2500)) {
              yield this.fi.setCurrentTime(n), yield this.fi.play();
              const t = new W(M, S, { name: "video_seek", action: { source: "another user" } });
              $.g(t);
            }
          });
        }
        qn() {
          return this._n === zt.PLAYING ? Date.now() - (this.Sn + this.hn) : 0;
        }
        Ln() {
          return this.xn + this.qn();
        }
        get changingVideo() {
          return this.yn;
        }
        set changingVideo(t) {
          this.yn = t;
        }
      }
      i(5640);
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
      var Qe = i(4296),
        Ie = i.n(Qe);
      class xe extends N {
        constructor(t, e, i) {
          super(t, e, i), (this.type = i);
        }
      }
      class Se extends xe {
        constructor(t, e, i) {
          super(t, e, ue.CREATE_SESSION), (this.data = i);
        }
      }
      const Te = new (class extends Yt {
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
      })([], ["content_scripts/netflix/netflix_content_bundled.js"], "netflix", Kt.NETFLIX, !1);
      Object.freeze(Te);
      const Me = Te;
      const Pe = new (class extends Yt {
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
      })([], ["content_scripts/hulu/hulu_content_bundled.js"], "hulu", Kt.HULU, !1);
      Object.freeze(Pe);
      const $e = Pe;
      const Ne = new (class extends Yt {
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes(".disneyplus.") && t.pathname.includes("/video");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".disneyplus.");
        }
        getVideoId(t) {
          const e = t.pathname.match(/^.*\/([a-z\-0-9]+)\??.*/);
          return e && e.length > 0 ? e[1] : void 0;
        }
      })([], ["content_scripts/disney/disney_content_bundled.js"], "disney", Kt.DISNEY_PLUS, !1);
      Object.freeze(Ne);
      const Ve = Ne;
      const Re = new (class extends Yt {
        isValidUrl(t) {
          return (function (t) {
            return (t.hostname.includes(".hbomax.") && "other" !== Tt(t.pathname)) || t.pathname.includes("urn:hbo:page");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".hbomax.");
        }
        getVideoId(t) {
          const e = "urn:hbo:" + Tt(t.pathname) + ":",
            i = t.pathname.split(e);
          let n = null != i && i.length > 1 && null != i[1] ? i[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : null;
          const s = null != n && 0 !== n.length ? i[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : void 0;
          let u = s && s.length > 0 ? s[1] : void 0;
          return u || ((n = t.pathname.match(/(page:)([a-zA-Z\-_0-9]+)\??.*/)), (u = null != n && 3 == n.length ? n[2] : void 0)), u;
        }
        getVideoType(t) {
          return Tt(t.pathname);
        }
      })([], ["content_scripts/hbo_max/hbo_max_content_bundled.js"], "hbomax", Kt.HBO_MAX, !1);
      Object.freeze(Re);
      const Oe = Re;
      const Ue = new (class extends Yt {
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
      })([], ["content_scripts/crunchyroll/crunchyroll_content_bundled.js"], "crunchyroll", Kt.CRUNCHYROLL, !1);
      Object.freeze(Ue);
      const Ge = Ue;
      const Le = new (class extends Yt {
        isBrowsing(t) {
          return !(t.href.includes(".hotstar.") || !t.href.includes("watch?"));
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
      })([], ["content_scripts/youtube/youtube_content_bundled.js"], "youtube", Kt.YOUTUBE, !1);
      Object.freeze(Le);
      const He = Le;
      const ze = new (class extends Yt {
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
      })([], ["content_scripts/espn/espn_content_bundled.js"], "espn", Kt.ESPN, !1);
      Object.freeze(ze);
      const We = ze;
      const Ke = new (class extends Yt {
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
      })([], ["content_scripts/paramount/paramount_content_bundled.js"], "paramount", Kt.PARAMOUNT, !1);
      Object.freeze(Ke);
      const Je = Ke;
      const Ye = new (class extends Yt {
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
      })([], ["content_scripts/hotstar/hotstar_content_bundled.js"], "hotstar", Kt.HOTSTAR, !1);
      Object.freeze(Ye);
      const Xe = Ye;
      const qe = new (class extends Yt {
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
      })([], ["content_scripts/peacock/peacock_content_bundled.js"], "peacock", Kt.PEACOCK, !1);
      Object.freeze(qe);
      const Ze = qe;
      const ti = new (class extends Yt {
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
      })([], ["content_scripts/funimation/funimation_content_bundled.js"], "funimation", Kt.FUNIMATION, !1);
      Object.freeze(ti);
      const ei = ti;
      const ii = new (class extends Yt {
        isValidUrl(t) {
          return (function (t) {
            return t.hostname.includes(".max.") && t.pathname.includes("video/watch");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".play.max.");
        }
        getVideoId(t) {
          var e;
          const i = null === (e = t.pathname) || void 0 === e ? void 0 : e.match(/(watch\/)([a-zA-Z\-_0-9]+)\??/);
          return i ? i[2] : void 0;
        }
      })([], ["content_scripts/max/max_content_bundled.js"], "max", Kt.MAX, !1);
      Object.freeze(ii);
      const ni = ii;
      const si = new (class extends Yt {
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
      })([], ["content_scripts/starplus/starplus_content_bundled.js"], "starplus", Kt.STAR_PLUS, !1);
      Object.freeze(si);
      const ui = si;
      const oi = new (class extends Yt {
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
      })([], ["content_scripts/plutotv/plutotv_content_bundled.js"], "plutotv", Kt.PLUTO_TV, !1);
      Object.freeze(oi);
      const ri = oi;
      const ai = new (class extends Yt {
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
      })([], ["content_scripts/appletv/appletv_content_bundled.js"], "appletv", Kt.APPLE_TV, !1);
      Object.freeze(ai);
      const ci = ai;
      const Di = new (class extends Yt {
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
      })([], ["content_scripts/jio_cinema/jio_cinema_content_bundled.js"], "jiocinema", Kt.JIO_CINEMA, !1);
      Object.freeze(Di);
      const hi = Di;
      const di = new (class extends Yt {
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
      })([], ["content_scripts/tubitv/tubitv_content_bundled.js"], "tubitv", Kt.TUBI_TV, !1);
      Object.freeze(di);
      const li = di;
      const pi = new (class extends Yt {
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
      })([], ["content_scripts/crave/crave_content_bundled.js"], "crave", Kt.CRAVE, !1);
      Object.freeze(pi);
      const gi = pi;
      const Fi = new (class extends Yt {
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
      })([], ["content_scripts/mubi/mubi_content_bundled.js"], "mubi", Kt.MUBI, !1);
      Object.freeze(Fi);
      const vi = Fi;
      const yi = new (class extends Yt {
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
      })([], ["content_scripts/stan/stan_content_bundled.js"], "stan", Kt.STAN, !1);
      Object.freeze(yi);
      const mi = yi;
      class fi {
        constructor(t, e) {
          var i;
          (this.isBrowsing = !1), (this.id = e), this.videoId, (this.url = t);
          const n = [Me, $e, Ve, Oe, qt, He, Ge, We, Je, Xe, Ze, ui, ni, ei, ci, ri, hi, li, vi, mi, gi];
          for (const e of n) {
            if (e.isValidUrl(this.url)) {
              (this.streamingService = e), (this.serviceName = e.name), (this.videoId = e.getVideoId(t));
              break;
            }
            if (e.isBrowsing(this.url)) {
              (this.isBrowsing = !0), (this.streamingService = e), (this.serviceName = e.name);
              break;
            }
          }
          this.sessionIdFromUrl =
            null !==
              (i = (function (t, e, i) {
                const n = "?" + t.split("?")[i];
                if (void 0 === n) return;
                const s = e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"),
                  u = new RegExp("[?|&]" + s + "=([^&]*)(&|$)").exec(n);
                return null === u || u.length < 2 ? void 0 : decodeURIComponent(u[1]);
              })(this.url.href, "npSessionId", 1)) && void 0 !== i
              ? i
              : void 0;
        }
        urlWithSessionId(t) {
          return this.streamingService ? this.streamingService.urlWithSessionId(t) : void 0;
        }
      }
      class Ci extends xe {
        constructor(t, e, i) {
          super(t, e, ue.RE_INJECT), (this.data = i);
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
      class bi extends class {
        constructor(t) {
          var e, i, n;
          (this.Zn = !1),
            (this.ts = !1),
            (this.es = !1),
            (this.ns = 0),
            (this.ss = !1),
            (this.us = !1),
            (this.os = !1),
            (this.checkShowMenu = () => {
              this.shouldMenuBeVisible() ? this.rs() : this.cs();
            }),
            console.log("Teleparty Browse Loaded " + (null === (e = window.teleparty) || void 0 === e ? void 0 : e.tabId)),
            (this.Ds = new fi(
              new URL(window.location.href),
              null !== (n = null === (i = window.teleparty) || void 0 === i ? void 0 : i.tabId) && void 0 !== n ? n : 0
            )),
            (this.hs = t),
            this.hs.setPageControls(this);
        }
        setChatApi(t) {
          (this.hs = t), this.hs.setPageControls(this);
        }
        ds() {
          jQuery("#tp-control-lock-button .tooltiptext").text(this.es ? "Only I have control" : "Everyone has control"),
            this.es
              ? (jQuery("#tp-unlocked-image").addClass("hidden"), jQuery("#tp-locked-image").removeClass("hidden"))
              : (jQuery("#tp-unlocked-image").removeClass("hidden"), jQuery("#tp-locked-image").addClass("hidden"));
        }
        ls() {
          this.ts || ((this.es = !this.es), this.ds());
        }
        setResetChatButton() {
          this.hs.getChatWindowVisible()
            ? (jQuery("#tp-chat-button .tooltiptext").text("Reset View"),
              this.hs.shouldReturnToVideo && jQuery("#tp-chat-button .tooltiptext").text("Return to Video"),
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
        ps() {
          jQuery("#tp-chat-hidden").addClass("hidden"),
            this.hs.isPartyWindowsActive()
              ? (this.setResetChatButton(), jQuery("#tp-message-indicator").removeClass("hidden"))
              : (jQuery("#tp-message-indicator").removeClass("hidden"),
                jQuery("#tp-chat-button .tooltiptext").text(`${this.ns} unread ${1 == this.ns ? "message" : "messages"}`),
                jQuery("#tp-chat-gray").removeClass("hidden"),
                jQuery("#tp-chat-reset").addClass("hidden"),
                jQuery("#tp-chat-button .tp-hover-image").removeClass("hidden"));
        }
        hideMessageIndicator() {
          jQuery("#tp-message-indicator").addClass("hidden"),
            this.hs.isPartyWindowsActive()
              ? this.setResetChatButton()
              : (jQuery("#tp-chat-button .tp-hover-image").removeClass("hidden"),
                jQuery("#tp-chat-button .tooltiptext").text("Show chat"),
                jQuery("#tp-chat-gray").addClass("hidden"),
                jQuery("#tp-chat-hidden").removeClass("hidden"),
                jQuery("#tp-chat-reset").addClass("hidden"));
        }
        onChatMessage() {
          this.hs.shouldChatBeVisible() ||
            this.hs.isPartyWindowsActive() ||
            (this.ns++,
            this.ps(),
            (this.ss = !0),
            this.rs(),
            Mt(1e3)().then(() => {
              this.ss = !1;
            }));
        }
        teardown() {
          this.gs(), this.cs(), this.Fs && clearInterval(this.Fs);
        }
        vs() {
          var t;
          return wi(this, void 0, void 0, function* () {
            if (this.ts || this.hs.inSession) return;
            if ((this.ys(), (this.ts = !0), !(null === (t = window.teleparty) || void 0 === t ? void 0 : t.contentScriptInjected))) {
              console.log("Re injecting");
              const t = new Ci(P, S, { extensionTabData: this.Ds });
              try {
                yield $.g(t);
              } catch (t) {
                return console.log(t), this.fs(), this.de(t), this.Cs(j), void (this.ts = !1);
              }
            }
            console.log("Sending create");
            const e = this.ws();
            try {
              const t = yield $.g(e);
              t.error ? (this.Cs(t.error.message), this.de(t.error.message)) : ((this.ts = !1), this.Es(), this.enablePartyIcons());
            } catch (t) {
              console.log(t), this.Cs(j), this.de(t);
            }
            this.fs(), (this.ts = !1);
          });
        }
        enablePartyIcons() {
          this.hideError(),
            jQuery("#tp-party-active").removeClass("hidden"),
            jQuery("#tp-party-inactive").addClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").addClass("hidden"),
            jQuery("#tp-icon-container").attr("style", "cursor: auto");
        }
        gs() {
          jQuery("#tp-party-active").addClass("hidden"),
            jQuery("#tp-party-inactive").removeClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").html("Open Teleparty"),
            jQuery("#tp-icon-container").removeClass("play-chat-active"),
            jQuery("#play-chat-icon").addClass("hidden"),
            jQuery("#tp-icon-white").removeClass("hidden");
        }
        de(t) {
          const e = new W(T, S, { name: "error", action: { description: "an error has occured", reason: t } });
          $.g(e);
        }
        Cs(t) {
          jQuery("#tp-controls-error-text").text(t),
            jQuery("#tp-error-box").removeClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").addClass("hidden");
        }
        hideError() {
          jQuery("#tp-error-box").addClass("hidden");
        }
        bs(t) {
          return t
            .replace(/{EXTENSION_LOGO_WHITE}/g, C(chrome.runtime.getURL("img/icon_white.svg")))
            .replace(/{EXTENSION_LOGO_GRADIENT}/g, C(chrome.runtime.getURL("img/icon_gradient.svg")))
            .replace(/{PLAY_IMAGE}/g, C(chrome.runtime.getURL("img/play.svg")))
            .replace(/{UNLOCKED_IMAGE}/g, C(chrome.runtime.getURL("img/icon_remote_inactive.svg")))
            .replace(/{LOCKED_IMAGE}/g, C(chrome.runtime.getURL("img/icon_remote_active.svg")))
            .replace(/{ARROW_RIGHT}/g, C(chrome.runtime.getURL("img/arrow-right.svg")))
            .replace(/{LINK_IMAGE}/g, C(chrome.runtime.getURL("img/icon_link_active.svg")))
            .replace(/{LINK_ACTIVE_IMAGE}/g, C(chrome.runtime.getURL("img/icon_link_active.svg")))
            .replace(/{CHAT_HIDDEN_IMAGE}/g, C(chrome.runtime.getURL("img/icon_chat_inactive.svg")))
            .replace(/{CHAT_GRAY_IMAGE}/g, C(chrome.runtime.getURL("img/icon_chatgray_active.svg")))
            .replace(/{CHAT_ACTIVE_IMAGE}/g, C(chrome.runtime.getURL("img/icon_chat_active.svg")))
            .replace(/{DISCONNECT_IMAGE}/g, C(chrome.runtime.getURL("img/icon_logout_active.svg")))
            .replace(/{RESET_CHAT_IMAGE}/g, C(chrome.runtime.getURL("img/reset_chat.svg")));
        }
        cs() {
          this.ss || (this.hideError(), jQuery("#tpIconContainer").addClass("hidden"));
        }
        rs() {
          return wi(this, void 0, void 0, function* () {
            if (!this.us && (this.os || this.hs.inSession)) {
              this.us = !0;
              try {
                yield this.addTpIcon(),
                  this.hs.inSession ? this.enablePartyIcons() : this.gs(),
                  jQuery("#tpIconContainer").removeClass("hidden"),
                  this.setChatButtons();
              } finally {
                this.us = !1;
              }
            }
          });
        }
        startEventListener() {
          this.Fs = setInterval(this.checkShowMenu, 200);
        }
        stopEventListener() {
          this.Fs && clearInterval(this.Fs);
        }
        _s() {
          return "100px";
        }
        addTpIcon() {
          return wi(this, void 0, void 0, function* () {
            if ((this.os || this.hs.inSession) && 0 === jQuery("#tpIconContainer").length) {
              const t = this.bs(Ie()),
                e = yield this.getControlsRoot();
              e.length > 0 &&
                (e.append(
                  (function (t, e = "") {
                    return `\n    <link rel="stylesheet" href="${chrome.runtime.getURL(
                      "css/overlay.css"
                    )}">\n    <style>\n      ${e}\n    </style>\n    ${t}\n  `;
                  })(t)
                ),
                this.js());
            }
          });
        }
        js() {
          jQuery("#tp-control-lock-button").click(this.ls.bind(this)),
            jQuery("#tp-buttons-container").attr("style", `top:${this._s()}`),
            jQuery("#tp-chat-close-button").attr("style", `top:${this._s()}`),
            jQuery("#tp-error-box").attr("style", `top:${this._s()}`),
            jQuery("#tp-link-button").click(this.Bs.bind(this)),
            jQuery("#tp-chat-button").on("click", (t) => (this.As(), t.stopImmediatePropagation(), t.stopPropagation(), !1)),
            jQuery("#tp-disconnect-button").on("click", () => {
              this.ks();
            });
        }
        ks() {
          const t = new z(P, S, _t);
          $.g(t), this.cs();
        }
        Bs() {
          this.hs.linkIconListener(),
            jQuery("#tp-link-button .tooltiptext").text("Link copied"),
            setTimeout(() => {
              jQuery("#tp-link-button .tooltiptext").text("Copy join link");
            }, 1e3);
        }
        As() {
          return wi(this, void 0, void 0, function* () {
            (this.ns = 0),
              this.hideMessageIndicator(),
              this.hs.isPartyWindowsActive()
                ? this.hs.resetChatWindow(!0)
                : (this.hs.shouldChatBeVisible(), yield this.hs.setChatVisible(!this.hs.shouldChatBeVisible()), this.setChatButtons());
          });
        }
        onInitChat() {
          this.Zn && this.rs();
        }
        setChatButtons() {
          this.hs.inSession && this.hs.getChatVisible() ? this.Es() : this.Qs(),
            this.hs.isPartyWindowsActive() ? this.setResetChatButton() : this.hideMessageIndicator();
        }
        Es() {
          return wi(this, void 0, void 0, function* () {
            this.hs.inSession &&
              this.hs.shouldChatBeVisible() &&
              (jQuery("#tp-chat-close-button").removeClass("hidden"), jQuery("#tp-buttons-container").addClass("hidden"));
          });
        }
        Qs() {
          jQuery("#tp-chat-close-button").addClass("hidden"), jQuery("#tp-buttons-container").removeClass("hidden");
        }
        ws() {
          return new Se(P, S, this.Is());
        }
        Is() {
          return { createSettings: { controlLock: this.es }, extensionTabData: this.Ds, source: "pc" };
        }
        ys() {
          jQuery("#tp-icon-container .tooltiptext").html(
            'Loading <span class="ellipsis-anim"><span>.</span><span>.</span><span>.</span></span>'
          );
        }
        fs() {
          jQuery("#tp-icon-container .tooltiptext").html("Start a party");
        }
      } {
        constructor() {
          super(...arguments), (this.Xe = new ee("ext:ContentScripts:Amazon:AmazonPageControls"));
        }
        getControlsRoot() {
          return Ei(this, void 0, void 0, function* () {
            return (
              yield Pt(this.xs, 1 / 0)(),
              this.Xe.debug({ methodName: "getControlsRoot", message: "found player page" }),
              jQuery(".webPlayerSDKContainer")
            );
          });
        }
        shouldMenuBeVisible() {
          const t = document.querySelector(".atvwebplayersdk-hideabletopbuttons-container");
          return null != t && !t.classList.contains("hide");
        }
        xs() {
          return (
            !!window.location.href.includes("?autoplay=1") ||
            (null != document.querySelector(".rendererContainer video") && null != document.querySelector(".dv-player-fullscreen"))
          );
        }
      }
      class _i extends class {
        constructor(t, e, i, n) {
          (this.N = t),
            (this.fi = e),
            (this.ni = i),
            (this.ne = n),
            window.teleparty && !window.teleparty.pageControls
              ? ((window.teleparty.pageControls = n), console.log("Setting Page COntrols"))
              : (n.setChatApi(this.N), console.log("Resetting Chat Api for old controls")),
            (this.Ss = new le(this.N, this.ne)),
            (this.Te = new Ae(this.fi, this.N, this.ni)),
            (this.Ts = !1),
            (this.Ms = !1),
            (this.De = !1),
            (this.Li = new De()),
            this.Li.addMessageListener(this.Te),
            this.Li.addMessageListener(this.Ss),
            this.Li.addMessageListener(this),
            (this.Ps = !1),
            this.$s();
        }
        Ns() {
          return ke(this, void 0, void 0, function* () {
            yield this.ne.addTpIcon(), this.ne.startEventListener();
          });
        }
        loadBrowseButton() {
          return ke(this, void 0, void 0, function* () {
            yield this.ne.addTpIcon(), this.ne.startEventListener();
          });
        }
        $s() {
          const e = chrome.runtime.connect();
          e.onDisconnect.addListener(() => {
            console.log("Lost background script. Teardown");
            const t = { showAlert: this.N.inSession, alertModal: wt };
            this.Vs(t);
          }),
            e.onMessage.addListener(() => {
              t("Got background script"), (this.Ps = !0);
            });
        }
        onMessage(t, e, i) {
          if (t.target == M) {
            if (t.type === ue.IS_CONTENT_SCRIPT_READY) {
              if (this.Ts) {
                i({ ready: !0 });
              } else this.Ms || ((this.Ms = !0), this.Rs().then(i));
              return !0;
            }
            if (t.type === ue.GET_INIT_DATA) {
              return i(this.Os()), !0;
            }
            if (t.type === ue.DISCONNECT && t.sender == T) {
              const t = new z(M, S, _t);
              $.g(t), i();
            } else {
              if (t.type == O.TEARDOWN) {
                const e = t;
                return this.Vs(e.data), i(), !0;
              }
              t.type === O.ON_NOTIF && this.Us();
            }
          }
          return !1;
        }
        Us() {
          console.log("Show Notification");
        }
        Vs(t) {
          var e, i, n;
          if (t.showAlert && t.alertModal) {
            const i = null !== (e = t.buttonUrl) && void 0 !== e ? e : this.N.getPartyUrl();
            Et(t.alertModal, i);
          }
          this.ne.teardown(), this.Te.teardown(), this.Ss.teardown(), this.Li.teardown();
          const s = {
              name: "error",
              action: {
                description: null === (i = t.alertModal) || void 0 === i ? void 0 : i.title,
                reason: null === (n = t.alertModal) || void 0 === n ? void 0 : n.content
              }
            },
            u = new W(M, S, s);
          $.g(u), window.teleparty && (window.teleparty.contentScriptInjected = !1) && (window.teleparty.contentScriptReady = !1);
        }
        de(t) {
          if (t === E) return;
          const e = new W(M, S, { name: "error", action: { reason: t } });
          $.g(e);
        }
        Gs() {
          return ke(this, void 0, void 0, function* () {
            return Pt(() => this.Ps, 5e3)();
          });
        }
        Rs() {
          return ke(this, void 0, void 0, function* () {
            try {
              yield this.Gs();
              const t = yield this.Ls();
              return this.Ns(), t;
            } catch (t) {
              const e = { message: _, showButton: !1 };
              return this.de(_), { ready: !1, error: e };
            } finally {
              this.Ms = !1;
            }
          });
        }
        Ls() {
          return ke(this, void 0, void 0, function* () {
            let e;
            try {
              yield this.fi.waitVideoApiReadyAsync();
              const i = yield this.Hs();
              i && i.error
                ? (t("Error is:", i.error),
                  (e = { message: i.error, showButton: !0 }),
                  (this.Ts = !0),
                  window.teleparty && (window.teleparty.contentScriptReady = !0))
                : (i && i.showReviewMessage && (this.De = !0),
                  (this.Ts = !0),
                  window.teleparty && (window.teleparty.contentScriptReady = !0));
            } catch (t) {
              (e = { message: t.message, showButton: !1 }), this.de(t.message);
            }
            return { ready: this.Ts, error: e };
          });
        }
        Os() {
          return {
            inSession: this.N.inSession,
            isChatVisible: this.N.isPartyWindowsActive() ? this.N.getChatWindowVisible() : this.N.getChatVisible(),
            partyUrl: this.N.getPartyUrl(),
            showReviewMessage: !1,
            partyWindowsActive: this.N.isPartyWindowsActive()
          };
        }
        Hs() {
          return ke(this, void 0, void 0, function* () {
            const t = yield this.zs();
            return $.g(t);
          });
        }
        zs() {
          return ke(this, void 0, void 0, function* () {
            const t = { videoId: (yield this.fi.getVideoDataAsync()).videoId };
            return new ce(M, S, t);
          });
        }
      } {
        constructor() {
          const t = new Lt(),
            e = new ne(),
            i = new ae(e, t),
            n = new ee("ext:ContentScripts:Amazon:AmazonContentScript");
          let s;
          window.teleparty && window.teleparty.pageControls
            ? ((s = window.teleparty.pageControls), console.log("Using AmazonPageControls page controls"))
            : (s = new bi(t)),
            super(t, e, i, s),
            n.debug({ methodName: "constructor", message: "Initialize Amazon Content Script" });
        }
      }
      const ji = new ee("ext:ContentScripts:Amazon:AmazonContent");
      var Bi;
      (window.teleparty && (null === (Bi = window.teleparty) || void 0 === Bi ? void 0 : Bi.contentScriptInjected)) ||
        (window.teleparty || (window.teleparty = {}),
        (window.teleparty.contentScriptInjected = !0),
        new _i(),
        ji.debug({ message: "Initialized content script" }));
    })();
})();
