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
                  c = { fireOnAttributesModification: !1 };
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
                    e = u.mergeArrays(c, e);
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
              c = new (function () {
                var t = { fireOnAttributesModification: !1, onceOnly: !1, existing: !1 };
                function e(t, e, n) {
                  return (
                    !(!u.matchesSelector(t, e.selector) || (t.D === i && (t.D = s++), -1 != e.firedElems.indexOf(t.D))) &&
                    (e.firedElems.push(t.D), !0)
                  );
                }
                var n = (c = new r(
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
                  (c.bindEvent = function (e, i, s) {
                    void 0 === s ? ((s = i), (i = t)) : (i = u.mergeArrays(t, i));
                    var o = u.toElementsArray(this);
                    if (i.existing) {
                      for (var r = [], c = 0; c < o.length; c++)
                        for (var a = o[c].querySelectorAll(e), D = 0; D < a.length; D++) r.push({ callback: s, elem: a[D] });
                      if (i.onceOnly && r.length) return s.call(r[0].elem, r[0].elem);
                      setTimeout(u.callCallbacks, 1, r);
                    }
                    n.call(this, e, i, s);
                  }),
                  c
                );
              })(),
              a = new (function () {
                var t = {};
                function e(t, e) {
                  return u.matchesSelector(t, e.selector);
                }
                var i = (a = new r(
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
                  (a.bindEvent = function (e, n, s) {
                    void 0 === s ? ((s = n), (n = t)) : (n = u.mergeArrays(t, n)), i.call(this, e, n, s);
                  }),
                  a
                );
              })();
            e && d(e.fn),
              d(HTMLElement.prototype),
              d(NodeList.prototype),
              d(HTMLCollection.prototype),
              d(HTMLDocument.prototype),
              d(Window.prototype);
            var D = {};
            return h(c, D, "unbindAllArrive"), h(a, D, "unbindAllLeave"), D;
          }
          function h(t, e, i) {
            u.addMethod(e, i, t.unbindEvent),
              u.addMethod(e, i, t.unbindEventWithSelectorOrCallback),
              u.addMethod(e, i, t.unbindEventWithSelectorAndCallback);
          }
          function d(t) {
            (t.arrive = c.bindEvent), h(c, t, "unbindArrive"), (t.leave = a.bindEvent), h(a, t, "unbindLeave");
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
        t.exports = function (t, c) {
          c = c || {};
          var a = typeof t;
          if ("string" === a && t.length > 0)
            return (function (t) {
              if ((t = String(t)).length > 100) return;
              var r =
                /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
                  t
                );
              if (!r) return;
              var c = parseFloat(r[1]);
              switch ((r[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                  return c * o;
                case "weeks":
                case "week":
                case "w":
                  return c * u;
                case "days":
                case "day":
                case "d":
                  return c * s;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                  return c * n;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                  return c * i;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                  return c * e;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                  return c;
                default:
                  return;
              }
            })(t);
          if ("number" === a && isFinite(t))
            return c.long
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
      const t = chrome.runtime.id,
        e = "reactionContainerOpen",
        n = "https://sessions.teleparty.com",
        s = "https://redirect.teleparty.com",
        u = s,
        o = `${s}/sidebar`,
        r = ["heart", "angry", "fire", "laugh", "surprise", "cry"],
        c = ["heart", "angry", "fire", "laugh", "surprise", "cry"],
        a = "recentlyUsedEmojiMap",
        D = "redirectDataMap",
        h = [
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
        d =
          /(?:\uD83D(?:\uDD73\uFE0F?|\uDC41(?:(?:\uFE0F(?:\u200D\uD83D\uDDE8\uFE0F?)?|\u200D\uD83D\uDDE8\uFE0F?))?|[\uDDE8\uDDEF]\uFE0F?|\uDC4B(?:\uD83C[\uDFFB-\uDFFF])?|\uDD90(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|[\uDD96\uDC4C\uDC48\uDC49\uDC46\uDD95\uDC47\uDC4D\uDC4E\uDC4A\uDC4F\uDE4C\uDC50\uDE4F\uDC85\uDCAA\uDC42\uDC43\uDC76\uDC66\uDC67](?:\uD83C[\uDFFB-\uDFFF])?|\uDC71(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2640\u2642]\uFE0F?))?)|\u200D(?:[\u2640\u2642]\uFE0F?)))?|\uDC68(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC68\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)|\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)))))?|\uDC69(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFC-\uDFFF]|\uDC68\uD83C[\uDFFC-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFE]|\uDC68\uD83C[\uDFFB-\uDFFE])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])|\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])))))?|[\uDC74\uDC75](?:\uD83C[\uDFFB-\uDFFF])?|[\uDE4D\uDE4E\uDE45\uDE46\uDC81\uDE4B\uDE47\uDC6E](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD75(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC82\uDC77](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDC78(?:\uD83C[\uDFFB-\uDFFF])?|\uDC73(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC72\uDC70\uDC7C](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC86\uDC87\uDEB6](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC83\uDD7A](?:\uD83C[\uDFFB-\uDFFF])?|\uDD74(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uDC6F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDEA3\uDEB4\uDEB5](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDEC0\uDECC\uDC6D\uDC6B\uDC6C](?:\uD83C[\uDFFB-\uDFFF])?|\uDDE3\uFE0F?|\uDC15(?:\u200D\uD83E\uDDBA)?|[\uDC3F\uDD4A\uDD77\uDD78\uDDFA\uDEE3\uDEE4\uDEE2\uDEF3\uDEE5\uDEE9\uDEF0\uDECE\uDD70\uDD79\uDDBC\uDD76\uDECD\uDDA5\uDDA8\uDDB1\uDDB2\uDCFD\uDD6F\uDDDE\uDDF3\uDD8B\uDD8A\uDD8C\uDD8D\uDDC2\uDDD2\uDDD3\uDD87\uDDC3\uDDC4\uDDD1\uDDDD\uDEE0\uDDE1\uDEE1\uDDDC\uDECF\uDECB\uDD49]\uFE0F?|[\uDE00\uDE03\uDE04\uDE01\uDE06\uDE05\uDE02\uDE42\uDE43\uDE09\uDE0A\uDE07\uDE0D\uDE18\uDE17\uDE1A\uDE19\uDE0B\uDE1B-\uDE1D\uDE10\uDE11\uDE36\uDE0F\uDE12\uDE44\uDE2C\uDE0C\uDE14\uDE2A\uDE34\uDE37\uDE35\uDE0E\uDE15\uDE1F\uDE41\uDE2E\uDE2F\uDE32\uDE33\uDE26-\uDE28\uDE30\uDE25\uDE22\uDE2D\uDE31\uDE16\uDE23\uDE1E\uDE13\uDE29\uDE2B\uDE24\uDE21\uDE20\uDE08\uDC7F\uDC80\uDCA9\uDC79-\uDC7B\uDC7D\uDC7E\uDE3A\uDE38\uDE39\uDE3B-\uDE3D\uDE40\uDE3F\uDE3E\uDE48-\uDE4A\uDC8B\uDC8C\uDC98\uDC9D\uDC96\uDC97\uDC93\uDC9E\uDC95\uDC9F\uDC94\uDC9B\uDC9A\uDC99\uDC9C\uDDA4\uDCAF\uDCA2\uDCA5\uDCAB\uDCA6\uDCA8\uDCA3\uDCAC\uDCAD\uDCA4\uDC40\uDC45\uDC44\uDC8F\uDC91\uDC6A\uDC64\uDC65\uDC63\uDC35\uDC12\uDC36\uDC29\uDC3A\uDC31\uDC08\uDC2F\uDC05\uDC06\uDC34\uDC0E\uDC2E\uDC02-\uDC04\uDC37\uDC16\uDC17\uDC3D\uDC0F\uDC11\uDC10\uDC2A\uDC2B\uDC18\uDC2D\uDC01\uDC00\uDC39\uDC30\uDC07\uDC3B\uDC28\uDC3C\uDC3E\uDC14\uDC13\uDC23-\uDC27\uDC38\uDC0A\uDC22\uDC0D\uDC32\uDC09\uDC33\uDC0B\uDC2C\uDC1F-\uDC21\uDC19\uDC1A\uDC0C\uDC1B-\uDC1E\uDC90\uDCAE\uDD2A\uDDFE\uDDFB\uDC92\uDDFC\uDDFD\uDD4C\uDED5\uDD4D\uDD4B\uDC88\uDE82-\uDE8A\uDE9D\uDE9E\uDE8B-\uDE8E\uDE90-\uDE9C\uDEF5\uDEFA\uDEB2\uDEF4\uDEF9\uDE8F\uDEA8\uDEA5\uDEA6\uDED1\uDEA7\uDEF6\uDEA4\uDEA2\uDEEB\uDEEC\uDCBA\uDE81\uDE9F-\uDEA1\uDE80\uDEF8\uDD5B\uDD67\uDD50\uDD5C\uDD51\uDD5D\uDD52\uDD5E\uDD53\uDD5F\uDD54\uDD60\uDD55\uDD61\uDD56\uDD62\uDD57\uDD63\uDD58\uDD64\uDD59\uDD65\uDD5A\uDD66\uDD25\uDCA7\uDEF7\uDD2E\uDC53-\uDC62\uDC51\uDC52\uDCFF\uDC84\uDC8D\uDC8E\uDD07-\uDD0A\uDCE2\uDCE3\uDCEF\uDD14\uDD15\uDCFB\uDCF1\uDCF2\uDCDE-\uDCE0\uDD0B\uDD0C\uDCBB\uDCBD-\uDCC0\uDCFA\uDCF7-\uDCF9\uDCFC\uDD0D\uDD0E\uDCA1\uDD26\uDCD4-\uDCDA\uDCD3\uDCD2\uDCC3\uDCDC\uDCC4\uDCF0\uDCD1\uDD16\uDCB0\uDCB4-\uDCB8\uDCB3\uDCB9\uDCB1\uDCB2\uDCE7-\uDCE9\uDCE4-\uDCE6\uDCEB\uDCEA\uDCEC-\uDCEE\uDCDD\uDCBC\uDCC1\uDCC2\uDCC5-\uDCD0\uDD12\uDD13\uDD0F-\uDD11\uDD28\uDD2B\uDD27\uDD29\uDD17\uDD2C\uDD2D\uDCE1\uDC89\uDC8A\uDEAA\uDEBD\uDEBF\uDEC1\uDED2\uDEAC\uDDFF\uDEAE\uDEB0\uDEB9-\uDEBC\uDEBE\uDEC2-\uDEC5\uDEB8\uDEAB\uDEB3\uDEAD\uDEAF\uDEB1\uDEB7\uDCF5\uDD1E\uDD03\uDD04\uDD19-\uDD1D\uDED0\uDD4E\uDD2F\uDD00-\uDD02\uDD3C\uDD3D\uDD05\uDD06\uDCF6\uDCF3\uDCF4\uDD31\uDCDB\uDD30\uDD1F-\uDD24\uDD34\uDFE0-\uDFE2\uDD35\uDFE3-\uDFE5\uDFE7-\uDFE9\uDFE6\uDFEA\uDFEB\uDD36-\uDD3B\uDCA0\uDD18\uDD33\uDD32\uDEA9])|\uD83E(?:[\uDD1A\uDD0F\uDD1E\uDD1F\uDD18\uDD19\uDD1B\uDD1C\uDD32\uDD33\uDDB5\uDDB6\uDDBB\uDDD2](?:\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?)))?|[\uDDD4\uDDD3](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDCF\uDD26\uDD37](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD34\uDDD5\uDD35\uDD30\uDD31\uDD36](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDB8\uDDB9\uDDD9-\uDDDD](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDDDE\uDDDF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDDCD\uDDCE\uDDD6\uDDD7\uDD38](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD3C(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDD3D\uDD3E\uDD39\uDDD8](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD23\uDD70\uDD29\uDD2A\uDD11\uDD17\uDD2D\uDD2B\uDD14\uDD10\uDD28\uDD25\uDD24\uDD12\uDD15\uDD22\uDD2E\uDD27\uDD75\uDD76\uDD74\uDD2F\uDD20\uDD73\uDD13\uDDD0\uDD7A\uDD71\uDD2C\uDD21\uDD16\uDDE1\uDD0E\uDD0D\uDD1D\uDDBE\uDDBF\uDDE0\uDDB7\uDDB4\uDD3A\uDDB0\uDDB1\uDDB3\uDDB2\uDD8D\uDDA7\uDDAE\uDD8A\uDD9D\uDD81\uDD84\uDD93\uDD8C\uDD99\uDD92\uDD8F\uDD9B\uDD94\uDD87\uDDA5\uDDA6\uDDA8\uDD98\uDDA1\uDD83\uDD85\uDD86\uDDA2\uDD89\uDDA9\uDD9A\uDD9C\uDD8E\uDD95\uDD96\uDD88\uDD8B\uDD97\uDD82\uDD9F\uDDA0\uDD40\uDD6D\uDD5D\uDD65\uDD51\uDD54\uDD55\uDD52\uDD6C\uDD66\uDDC4\uDDC5\uDD5C\uDD50\uDD56\uDD68\uDD6F\uDD5E\uDDC7\uDDC0\uDD69\uDD53\uDD6A\uDD59\uDDC6\uDD5A\uDD58\uDD63\uDD57\uDDC8\uDDC2\uDD6B\uDD6E\uDD5F-\uDD61\uDD80\uDD9E\uDD90\uDD91\uDDAA\uDDC1\uDD67\uDD5B\uDD42\uDD43\uDD64\uDDC3\uDDC9\uDDCA\uDD62\uDD44\uDDED\uDDF1\uDDBD\uDDBC\uDE82\uDDF3\uDE90\uDDE8\uDDE7\uDD47-\uDD49\uDD4E\uDD4F\uDD4D\uDD4A\uDD4B\uDD45\uDD3F\uDD4C\uDE80\uDE81\uDDFF\uDDE9\uDDF8\uDDF5\uDDF6\uDD7D\uDD7C\uDDBA\uDDE3-\uDDE6\uDD7B\uDE71-\uDE73\uDD7E\uDD7F\uDE70\uDDE2\uDE95\uDD41\uDDEE\uDE94\uDDFE\uDE93\uDDAF\uDDF0\uDDF2\uDDEA-\uDDEC\uDE78-\uDE7A\uDE91\uDE92\uDDF4\uDDF7\uDDF9-\uDDFD\uDDEF])|[\u263A\u2639\u2620\u2763\u2764]\uFE0F?|\u270B(?:\uD83C[\uDFFB-\uDFFF])?|[\u270C\u261D](?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\u270A(?:\uD83C[\uDFFB-\uDFFF])?|\u270D(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uD83C(?:\uDF85(?:\uD83C[\uDFFB-\uDFFF])?|\uDFC3(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC7\uDFC2](?:\uD83C[\uDFFB-\uDFFF])?|\uDFCC(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC4\uDFCA](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDFCB(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFF5\uDF36\uDF7D\uDFD4-\uDFD6\uDFDC-\uDFDF\uDFDB\uDFD7\uDFD8\uDFDA\uDFD9\uDFCE\uDFCD\uDF21\uDF24-\uDF2C\uDF97\uDF9F\uDF96\uDF99-\uDF9B\uDF9E\uDFF7\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37]\uFE0F?|\uDFF4(?:(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F|\uDC73\uDB40\uDC63\uDB40\uDC74\uDB40\uDC7F|\uDC77\uDB40\uDC6C\uDB40\uDC73\uDB40\uDC7F)))?|\uDFF3(?:(?:\uFE0F(?:\u200D\uD83C\uDF08)?|\u200D\uD83C\uDF08))?|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|[\uDFFB-\uDFFF\uDF38-\uDF3C\uDF37\uDF31-\uDF35\uDF3E-\uDF43\uDF47-\uDF53\uDF45\uDF46\uDF3D\uDF44\uDF30\uDF5E\uDF56\uDF57\uDF54\uDF5F\uDF55\uDF2D-\uDF2F\uDF73\uDF72\uDF7F\uDF71\uDF58-\uDF5D\uDF60\uDF62-\uDF65\uDF61\uDF66-\uDF6A\uDF82\uDF70\uDF6B-\uDF6F\uDF7C\uDF75\uDF76\uDF7E\uDF77-\uDF7B\uDF74\uDFFA\uDF0D-\uDF10\uDF0B\uDFE0-\uDFE6\uDFE8-\uDFED\uDFEF\uDFF0\uDF01\uDF03-\uDF07\uDF09\uDFA0-\uDFA2\uDFAA\uDF11-\uDF20\uDF0C\uDF00\uDF08\uDF02\uDF0A\uDF83\uDF84\uDF86-\uDF8B\uDF8D-\uDF91\uDF80\uDF81\uDFAB\uDFC6\uDFC5\uDFC0\uDFD0\uDFC8\uDFC9\uDFBE\uDFB3\uDFCF\uDFD1-\uDFD3\uDFF8\uDFA3\uDFBD\uDFBF\uDFAF\uDFB1\uDFAE\uDFB0\uDFB2\uDCCF\uDC04\uDFB4\uDFAD\uDFA8\uDF92\uDFA9\uDF93\uDFBC\uDFB5\uDFB6\uDFA4\uDFA7\uDFB7-\uDFBB\uDFA5\uDFAC\uDFEE\uDFF9\uDFE7\uDFA6\uDD8E\uDD91-\uDD9A\uDE01\uDE36\uDE2F\uDE50\uDE39\uDE1A\uDE32\uDE51\uDE38\uDE34\uDE33\uDE3A\uDE35\uDFC1\uDF8C])|\u26F7\uFE0F?|\u26F9(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\u2618\u26F0\u26E9\u2668\u26F4\u2708\u23F1\u23F2\u2600\u2601\u26C8\u2602\u26F1\u2744\u2603\u2604\u26F8\u2660\u2665\u2666\u2663\u265F\u26D1\u260E\u2328\u2709\u270F\u2712\u2702\u26CF\u2692\u2694\u2699\u2696\u26D3\u2697\u26B0\u26B1\u26A0\u2622\u2623\u2B06\u2197\u27A1\u2198\u2B07\u2199\u2B05\u2196\u2195\u2194\u21A9\u21AA\u2934\u2935\u269B\u2721\u2638\u262F\u271D\u2626\u262A\u262E\u25B6\u23ED\u23EF\u25C0\u23EE\u23F8-\u23FA\u23CF\u2640\u2642\u2695\u267E\u267B\u269C\u2611\u2714\u2716\u303D\u2733\u2734\u2747\u203C\u2049\u3030\u00A9\u00AE\u2122]\uFE0F?|[\u0023\u002A\u0030-\u0039](?:\uFE0F\u20E3|\u20E3)|[\u2139\u24C2\u3297\u3299\u25FC\u25FB\u25AA\u25AB]\uFE0F?|[\u2615\u26EA\u26F2\u26FA\u26FD\u2693\u26F5\u231B\u23F3\u231A\u23F0\u2B50\u26C5\u2614\u26A1\u26C4\u2728\u26BD\u26BE\u26F3\u267F\u26D4\u2648-\u2653\u26CE\u23E9-\u23EC\u2B55\u2705\u274C\u274E\u2795-\u2797\u27B0\u27BF\u2753-\u2755\u2757\u26AB\u26AA\u2B1B\u2B1C\u25FE\u25FD])/g;
      var l, F, g, p;
      !(function (t) {
        (t.PAUSED = "paused"), (t.PLAYING = "playing");
      })(l || (l = {})),
        (function (t) {
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
        })(F || (F = {})),
        (function (t) {
          (t.LOADING = "loading"),
            (t.PLAYING = "playing"),
            (t.IDLE = "idle"),
            (t.AD_PLAYING = "ad_playing"),
            (t.PAUSED = "paused"),
            (t.NOT_READY = "not_ready");
        })(g || (g = {})),
        (function (t) {
          (t.EPISODE = "episode"),
            (t.FEATURE = "feature"),
            (t.LIVE = "live"),
            (t.EXTRA = "extra"),
            (t.EVENT = "event"),
            (t.OTHER = "other");
        })(p || (p = {}));
      var v, y;
      function f(t) {
        return t.includes("urn:hbo:feature")
          ? p.FEATURE
          : t.includes("urn:hbo:episode") || (t.includes("urn:hbo:page:") && t.includes(":type:episode"))
          ? p.EPISODE
          : t.includes("urn:hbo:extra")
          ? p.EXTRA
          : p.OTHER;
      }
      function m(t) {
        return function () {
          return new Promise((e) => {
            setTimeout(() => {
              e();
            }, t);
          });
        };
      }
      function C(t, e, i = 250) {
        return function () {
          const n = new Date().getTime(),
            s = function () {
              return t()
                ? Promise.resolve()
                : null !== e && new Date().getTime() - n > e
                ? Promise.reject(new Error("delayUntil timed out: " + t))
                : m(i)().then(s);
            };
          return s();
        };
      }
      function E(t, e, i) {
        t.push(e), t.length > i && t.splice(0, t.length - i);
      }
      function w(t) {
        return t.concat().sort()[Math.floor(t.length / 2)];
      }
      !(function (t) {
        (t.REGISTER = "register"),
          (t.PARTY_START = "party_start"),
          (t.PARTY_JOIN = "party_join"),
          (t.PARTY_END = "party_end"),
          (t.PARTY_SHARE = "party_share");
      })(v || (v = {}));
      class _ {
        constructor(t, e, i) {
          (this.sender = t), (this.target = e), (this.type = i);
        }
      }
      class b extends _ {
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
          (t.GET_EXPERIMENT_FLAG = "getExpFlag"),
          (t.USER_LIST = "userList"),
          (t.USER_AUTHENTICATED = "userAuthenticated"),
          (t.BLOCK_CSP = "blockCSP");
      })(y || (y = {}));
      class j extends b {
        constructor(t, e, i) {
          super(t, e, y.LOG_EVENT), (this.data = i), (this.sender = t), (this.target = e);
        }
      }
      const B = "Service_Background",
        A = "Popup",
        k = "Content_Script",
        Q = "Page_Controls";
      var I = console.log.bind(window.console),
        x = function (t, e, i, n) {
          return new (i || (i = Promise))(function (s, u) {
            function o(t) {
              try {
                c(n.next(t));
              } catch (t) {
                u(t);
              }
            }
            function r(t) {
              try {
                c(n.throw(t));
              } catch (t) {
                u(t);
              }
            }
            function c(t) {
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
            c((n = n.apply(t, e || [])).next());
          });
        };
      const S = new (class {
        addListener(t) {
          chrome.runtime.onMessage.addListener(t), chrome.runtime.onMessage.addListener(t);
        }
        removeListener(t) {
          chrome.runtime.onMessage.removeListener(t);
        }
        sendMessageToTabAsync(t, e, i = 2e4) {
          return x(this, void 0, void 0, function* () {
            return new Promise((n, s) => {
              const u = setTimeout(() => {
                console.log("send timeout"), s("Message Timeout");
              }, i);
              try {
                chrome.tabs.sendMessage(e, t, (e) => {
                  chrome.runtime.lastError && I(chrome.runtime.lastError.message + JSON.stringify(t)), clearTimeout(u), n(e);
                });
              } catch (t) {
                clearTimeout(u), s(t);
              }
            });
          });
        }
        l(e, i) {
          return x(this, void 0, void 0, function* () {
            return new Promise((n, s) => {
              let u = null;
              i &&
                (u = setTimeout(() => {
                  s({ error: "Send Message Timeout" });
                }, i));
              try {
                chrome.runtime.sendMessage(t, e, (t) => {
                  chrome.runtime.lastError && console.log(chrome.runtime.lastError.message + JSON.stringify(e)), u && clearTimeout(u), n(t);
                });
              } catch (t) {
                u && clearTimeout(u), s(t);
              }
            });
          });
        }
      })();
      var T = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              c(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              c(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function c(t) {
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
          c((n = n.apply(t, e || [])).next());
        });
      };
      const M = "Failed to read chrome storage. Please refresh the page and try again",
        P = "Failed to connect to Script. Please refresh the page and try again",
        $ = "An unexpected error occured. Please refresh the page and try again.";
      var R = i(1227),
        V = i.n(R);
      class O {
        constructor(t) {
          this.namespace = t;
        }
        debug(t) {
          const e = t.methodName ? `${this.namespace}:${t.methodName}` : this.namespace;
          t.message && V()(e)(t.message), t.object && V()(e)(t.object);
        }
      }
      var G = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              c(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              c(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function c(t) {
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
          c((n = n.apply(t, e || [])).next());
        });
      };
      class N extends class {
        constructor() {
          (this.F = 0), (this.g = !1);
        }
        set hostOnly(t) {
          this.g = t;
        }
        get hostOnly() {
          return this.g;
        }
        get uiEventsHappening() {
          return this.F;
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
          const i = new j(k, B, { name: "video_error", action: { description: t, reason: e } });
          S.l(i);
        }
        doAdCheck() {
          return T(this, void 0, void 0, function* () {});
        }
      } {
        constructor() {
          super(), (this.p = new O("ext:ContentScripts:AppleTV:AppleTVVideoApi")), (this.F = 0), (this.v = !0);
        }
        m() {
          const t = document.getElementById("video-player-title");
          if (t) return t.innerText;
        }
        C() {
          return document.querySelector(".playback-play__play");
        }
        _() {
          const t = document.querySelectorAll(".video-data-services-button");
          for (const e of t) {
            const t = JSON.parse(e.getAttribute("data-metrics-location") || "");
            if ("Play" == (null == t ? void 0 : t.actionType)) return e;
          }
        }
        setVideoEventListener(t) {
          this.B = t;
        }
        getVideoId() {
          var t, e;
          if (null === (t = this.B) || void 0 === t ? void 0 : t.getCachedVideoId()) return this.B.getCachedVideoId();
          {
            const t = document.getElementById("teleparty-appletv-id-container");
            if (t) {
              const i = t.getAttribute("data-canonical-id"),
                n = t.getAttribute("data-feature-reference-id");
              if (!i || !n) return;
              return `${null === (e = this.B) || void 0 === e ? void 0 : e.featureReferenceIdToShowType(n)}/${i}`;
            }
          }
        }
        A() {
          const t = this.getVideoElement();
          if (t) return Math.floor(1e3 * t.currentTime);
        }
        k() {
          return document.querySelector(".skip-control.button--forward.duration-10");
        }
        I() {
          return document.querySelector(".skip-control.button--back.duration-10");
        }
        S() {
          const t = document.querySelector(".time.remaining"),
            e = this.A();
          if (!t || !e) return;
          const i = t.innerText.match(/-(\d+):(\d+)/);
          if (!i) return;
          return 1e3 * (60 * parseInt(i[1]) + parseInt(i[2])) + e;
        }
        T() {
          const t = document.querySelector(".scrim-footer__info-subtitle-text");
          if (!t) return {};
          const e = t.innerText.match(/S(\d+),\s*E(\d+)\s*·\s*(.+)/);
          return e ? { seasonNum: parseInt(e[1]), episodeNum: parseInt(e[2]), title: e[3] } : {};
        }
        M() {
          const t = this.getVideoElement();
          return null == t || "" == t.src ? g.NOT_READY : t.readyState < t.HAVE_FUTURE_DATA ? g.LOADING : t.paused ? g.PAUSED : g.PLAYING;
        }
        waitVideoApiReadyAsync() {
          return G(this, void 0, void 0, function* () {
            try {
              yield C(() => {
                const t = this.getVideoElement();
                if (!t) {
                  const t = document.querySelector(".version-picker-modal__list-item");
                  t && t.click();
                  const e = this._();
                  e && !t && e.click();
                }
                return t instanceof Element && t.readyState > 0;
              }, 8e3)();
            } catch (t) {
              throw new Error("Failed to load video in time. Please refresh the page and try again.");
            }
          });
        }
        waitVideoDoneLoadingAsync() {
          return C(() => this.M() !== g.LOADING, 1e4)();
        }
        getStreamingServiceName() {
          return F.APPLE_TV;
        }
        setCurrentTime(t) {
          return G(this, void 0, void 0, function* () {
            const e = this.getVideoElement();
            e && (e.currentTime = t / 1e3), yield m(500)();
          });
        }
        getStateAsync() {
          return G(this, void 0, void 0, function* () {
            return new Promise((t, e) => {
              const i = this.M(),
                n = this.A();
              void 0 !== n ? t({ playbackState: i, playbackPositionMilliseconds: n }) : e();
            });
          });
        }
        getUpdateSessionDataAsync() {
          var t;
          return G(this, void 0, void 0, function* () {
            const e = this.A();
            if (void 0 === e) throw new Error();
            const i = this.getVideoElement(),
              n = i && !i.paused ? l.PLAYING : l.PAUSED,
              s = Date.now();
            null === (t = this.B) || void 0 === t || t.getLastSeekRequestedTime();
            return { state: n, lastKnownTime: e, lastKnownTimeUpdatedAt: s, bufferingState: this.M() === g.LOADING };
          });
        }
        getVideoDataAsync() {
          var t, e;
          return G(this, void 0, void 0, function* () {
            const i = null !== (t = this.getVideoId()) && void 0 !== t ? t : "",
              n = null !== (e = this.m()) && void 0 !== e ? e : "",
              s = this.getVideoContent(i, n, window.location.href, p.EPISODE, this.T());
            return { videoId: i, videoTitle: n, videoDuration: this.S(), content: s, screen: this.getScreenSize(), videoState: this.M() };
          });
        }
        getVideoElement() {
          return document.getElementById("apple-music-video-player");
        }
        jumpToNextEpisode(t) {
          return G(this, void 0, void 0, function* () {
            this.F += 1;
            this.getVideoId() !== t.videoId && (window.location.href = `https://tv.apple.com/${t.videoId}`), (this.F -= 1);
          });
        }
        freeze(t) {
          return G(this, void 0, void 0, function* () {
            this.F += 1;
            try {
              yield this.pause(), yield m(t)(), yield this.play();
            } finally {
              this.F -= 1;
            }
          });
        }
        P() {
          var t, e;
          return G(this, void 0, void 0, function* () {
            this.v &&
              (yield m(100)(),
              null === (t = this.k()) || void 0 === t || t.click(),
              yield m(10)(),
              null === (e = this.I()) || void 0 === e || e.click(),
              yield m(50)(),
              (this.v = !1));
          });
        }
        pause() {
          var t;
          return G(this, void 0, void 0, function* () {
            this.p.debug({ methodName: "pause", message: "enter" });
            const e = this.C();
            this.M() != g.PAUSED
              ? (this.p.debug({ methodName: "pause", message: this.M() }),
                e
                  ? (e.click(), this.p.debug({ methodName: "pause", message: "click play" }))
                  : (null === (t = this.getVideoElement()) || void 0 === t || t.pause(),
                    this.p.debug({ methodName: "pause", message: "video element pause" })),
                yield C(() => this.M() == g.PAUSED, 1e3)())
              : this.p.debug({ methodName: "pause", message: "already paused" });
          });
        }
        play() {
          var t;
          return G(this, void 0, void 0, function* () {
            this.p.debug({ methodName: "play", message: "enter" });
            const e = this.C();
            this.M() != g.PLAYING &&
              (e
                ? (e.click(), yield m(50)(), this.M() != g.PLAYING && (yield this.P()))
                : null === (t = this.getVideoElement()) || void 0 === t || t.play(),
              yield C(() => this.M() == g.PLAYING, 1e3)());
          });
        }
      }
      var U = i(7206),
        L = i.n(U);
      const H = [
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
        W = [
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
        z = [
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
        J = {
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
      function K(t) {
        return t
          ? t
              .replace(/&/g, "&amp;")
              .replace(/"/g, "&quot;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/[\r\n]{3,}/gm, "\n\n")
              .replace(
                d,
                `<span style="font-size: ${(function (t) {
                  let e = 16;
                  const i = t.replace(d, "").replace(/[\uFE0F]/g, ""),
                    n = ((t || "").match(d) || []).length;
                  return 0 === i.length && n <= 3 && (e = 32), e;
                })(t)}px">$&</span>`
              )
          : t;
      }
      const Y = {
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
      var q = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              c(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              c(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function c(t) {
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
          c((n = n.apply(t, e || [])).next());
        });
      };
      const X = new (class {
        setItemsAsync(t) {
          return q(this, void 0, void 0, function* () {
            return new Promise((e, i) => {
              chrome.storage.local.set(t, () => {
                chrome.runtime.lastError ? i(new Error("Failed to write to chrome storage. Please refresh the page and try again")) : e();
              });
            });
          });
        }
      })();
      Object.freeze(X);
      const Z = X;
      var tt,
        et = function (t, e, i, n) {
          return new (i || (i = Promise))(function (s, u) {
            function o(t) {
              try {
                c(n.next(t));
              } catch (t) {
                u(t);
              }
            }
            function r(t) {
              try {
                c(n.throw(t));
              } catch (t) {
                u(t);
              }
            }
            function c(t) {
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
            c((n = n.apply(t, e || [])).next());
          });
        };
      class it {
        constructor(t) {
          var e, i, n, s, u, o;
          (this.$ = {
            userIcon: null !== (e = t.userIcon) && void 0 !== e ? e : "",
            userNickname: null !== (i = t.userNickname) && void 0 !== i ? i : "",
            nameColor: null !== (n = t.nameColor) && void 0 !== n ? n : "",
            badge: null !== (s = t.badge) && void 0 !== s ? s : "",
            reactions: null !== (u = t.reactions) && void 0 !== u ? u : c
          }),
            (this.R = null !== (o = t.userId) && void 0 !== o ? o : "");
        }
        saveUserIcon(t) {
          (t = K(t)),
            (this.$.userIcon = t),
            Z.setItemsAsync({ userIcon: t }),
            I("new user settings after set user icon: " + JSON.stringify(this.$));
        }
        saveUserNickname(t) {
          (this.$.userNickname = t),
            Z.setItemsAsync({ userNickname: t }),
            I("new user settings after set user nickname: " + JSON.stringify(this.$));
        }
        saveUserSettings(t) {
          return et(this, void 0, void 0, function* () {
            const e = K(t.userIcon);
            (this.$ = t),
              (this.$.userIcon = e),
              yield Z.setItemsAsync({
                userNickname: t.userNickname,
                userIcon: e,
                nameColor: t.nameColor,
                badge: t.badge,
                reactions: t.reactions
              }),
              I("new user settings after save: " + JSON.stringify(this.$));
          });
        }
        get userSettings() {
          return this.$;
        }
        get permId() {
          return this.R;
        }
        get userIcon() {
          return this.$.userIcon;
        }
        get userNickname() {
          return this.$.userNickname;
        }
      }
      class nt extends _ {
        constructor(t, e, i) {
          super(t, e, i), (this.V = i);
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
      })(tt || (tt = {}));
      class st extends nt {
        constructor(t, e, i) {
          super(t, e, tt.SET_TYPING), (this.data = i);
        }
      }
      class ut extends nt {
        constructor(t, e, i) {
          super(t, e, tt.SEND_MESSAGE), (this.data = i);
        }
      }
      class ot extends nt {
        constructor(t, e, i) {
          super(t, e, tt.BROADCAST_USER_SETTINGS), (this.data = i);
        }
      }
      class rt extends b {
        constructor(t, e, i) {
          super(t, e, y.TEARDOWN), (this.data = i);
        }
      }
      class ct extends nt {
        constructor(t, e, i) {
          super(t, e, tt.SEND_REACTION), (this.data = i);
        }
      }
      class at extends nt {
        constructor(t, e, i) {
          super(t, e, tt.SEND_GIF), (this.data = i);
        }
      }
      var Dt = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              c(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              c(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function c(t) {
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
          c((n = n.apply(t, e || [])).next());
        });
      };
      class ht {
        constructor() {
          this.resetTasks(), (this.O = []), (this.G = 0), (this.N = Promise.resolve()), (this.U = !0);
        }
        createInstance() {
          return new ht();
        }
        pushTask(t, e) {
          if (!this.U) return;
          const i = { action: t, name: e };
          0 === this.G && this.resetTasks(),
            (this.G = this.O.push(i)),
            (this.N = this.N.then(() => {
              if (this.O.includes(i) && this.U)
                return this.L(i)().then(() => {
                  this.O.shift(), (this.G -= 1);
                });
            }));
        }
        disable() {
          (this.U = !1), this.resetTasks();
        }
        resetTasks() {
          (this.N = Promise.resolve()), (this.O = []), (this.G = 0);
        }
        L(t) {
          return function () {
            return Dt(this, void 0, void 0, function* () {
              try {
                yield t.action();
              } catch (t) {}
            });
          };
        }
        get tasksInFlight() {
          return this.G;
        }
        hasTaskInQueue(t) {
          return this.O.some((e) => e.name === t);
        }
        removeTask(t) {
          console.log(this.O),
            (this.O = this.O.filter((e, i) => (e.name === t && 0 == i ? (console.error("Cannot filter active task"), !0) : e.name !== t))),
            (this.G = this.O.length),
            console.log(this.O);
        }
      }
      const dt = new ht();
      var lt = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              c(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              c(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function c(t) {
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
          c((n = n.apply(t, e || [])).next());
        });
      };
      const Ft = new (class {
        getItemsAsync(t) {
          return lt(this, void 0, void 0, function* () {
            return new Promise((e, i) => {
              chrome.storage.local.get(t, (t) => {
                chrome.runtime.lastError ? (console.log(chrome.runtime.lastError), i(new Error(M))) : e(t);
              });
            });
          });
        }
        getAllItemsAsync() {
          return lt(this, void 0, void 0, function* () {
            return new Promise((t, e) => {
              chrome.storage.local.get(null, (i) => {
                chrome.runtime.lastError ? (console.log(chrome.runtime.lastError), e(new Error(M))) : t(i);
              });
            });
          });
        }
      })();
      Object.freeze(Ft);
      const gt = Ft;
      var pt,
        vt = new Uint8Array(16);
      function yt() {
        if (
          !pt &&
          !(pt =
            ("undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
            ("undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
        )
          throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return pt(vt);
      }
      const ft = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      const mt = function (t) {
        return "string" == typeof t && ft.test(t);
      };
      for (var Ct = [], Et = 0; Et < 256; ++Et) Ct.push((Et + 256).toString(16).substr(1));
      const wt = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = (
            Ct[t[e + 0]] +
            Ct[t[e + 1]] +
            Ct[t[e + 2]] +
            Ct[t[e + 3]] +
            "-" +
            Ct[t[e + 4]] +
            Ct[t[e + 5]] +
            "-" +
            Ct[t[e + 6]] +
            Ct[t[e + 7]] +
            "-" +
            Ct[t[e + 8]] +
            Ct[t[e + 9]] +
            "-" +
            Ct[t[e + 10]] +
            Ct[t[e + 11]] +
            Ct[t[e + 12]] +
            Ct[t[e + 13]] +
            Ct[t[e + 14]] +
            Ct[t[e + 15]]
          ).toLowerCase();
        if (!mt(i)) throw TypeError("Stringified UUID is invalid");
        return i;
      };
      const _t = function (t, e, i) {
        var n = (t = t || {}).random || (t.rng || yt)();
        if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), e)) {
          i = i || 0;
          for (var s = 0; s < 16; ++s) e[i + s] = n[s];
          return e;
        }
        return wt(n);
      };
      var bt;
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
      })(bt || (bt = {}));
      const jt = chrome.extension.getURL("img/x-circle.svg"),
        Bt = "with-chat";
      var At = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              c(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              c(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function c(t) {
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
          c((n = n.apply(t, e || [])).next());
        });
      };
      const kt = new (class {
        isUserIconValid(t) {
          return (
            !!t &&
            (t.includes("?newIconUrl=") ? z.includes(t.split("?newIconUrl=")[1]) && H.includes(t.split("?newIconUrl=")[0]) : z.includes(t))
          );
        }
        isUserIdValid(t) {
          return "string" == typeof t && (16 === t.length || 36 === t.length);
        }
        isUserNickNameValid(t) {
          return t && "string" == typeof t && t.length < 20;
        }
        getDefaultUserIcon() {
          return W[Math.floor(Math.random() * W.length)];
        }
        getDefaultUserNickName() {
          return "";
        }
        H(t) {
          return At(this, void 0, void 0, function* () {
            try {
              yield Z.setItemsAsync(t);
            } catch (t) {}
          });
        }
        getValidatedChromeStorageDataAsync() {
          return At(this, void 0, void 0, function* () {
            const t = yield gt.getAllItemsAsync(),
              e = kt.validateStorageData(t);
            return JSON.stringify(t) !== JSON.stringify(e) && this.H(e), e;
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
      Object.freeze(kt);
      const Qt = kt,
        It = 1e3,
        xt = 72e5,
        St = 12e4,
        Tt = {
          title: "Teleparty | Disconnected from party",
          content:
            "Only the owner of this party can change the episode. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        },
        Mt = {
          title: "Teleparty | Are you still there?",
          content: "You will be removed from the party in 120 seconds for inactivity. Move your mouse to continue watching."
        },
        Pt = {
          title: "Teleparty | Disconnected from party",
          content:
            "It looks like someone changed the video and we weren't able to connect you. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        },
        $t = {
          title: "Teleparty | Disconnected from party",
          content:
            "It looks like you lost connection to the extension. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        };
      function Rt(t, e) {
        Vt();
        const i = e
          ? (function (t) {
              return `\n    <div id="alert-dialog-wrapper">\n      <div id="alert-dialog-container">\n        <div id="alert-title-wrapper">\n            <div class="alert-title">\n                <p id="alert-title-txt" class="extension-title">\n                    ${t.title}\n                </p>\n                <button id="alert-x-btn">\n                    <img src="${jt}" alt="close" />\n                </button>\n            </div>\n            <div class="extension-border-bot">\n                \n            </div>\n        </div>\n        <div id="alert-description">\n            <p id="alert-content-txt" class="extension-txt">\n              ${t.content}\n            </p>\n            <button id="alert-return-btn" class="extension-btn">${t.buttonTitle}</button>\n        </div>\n      </div>\n    </div>\n    `;
            })(t)
          : (function (t) {
              return `\n  <div id="alert-dialog-wrapper">\n    <div id="alert-dialog-container">\n      <div id="alert-title-wrapper">\n          <div class="alert-title">\n              <p id="alert-title-txt" class="extension-title">\n                  ${t.title}\n              </p>\n              <button id="alert-x-btn">\n                  <img src="${jt}" alt="close" />\n              </button>\n          </div>\n          <div class="extension-border-bot">\n              \n          </div>\n      </div>\n      <div id="alert-description">\n          <p id="alert-content-txt" class="extension-txt">\n            ${t.content}\n          </p>\n      </div>\n    </div>\n  </div>\n  `;
            })(t);
        document.body.insertAdjacentHTML("afterbegin", i),
          jQuery("#alert-x-btn").click(() => {
            Vt();
          }),
          e &&
            jQuery("#alert-return-btn").click(() => {
              Vt(), (window.location.href = e);
            });
      }
      function Vt() {
        const t = document.querySelector("#alert-dialog-wrapper");
        t && t.remove();
      }
      const Ot = { showAlert: !1 },
        Gt = {
          showAlert: !0,
          alertModal: {
            title: "Teleparty | Disconnected from party",
            content: "You were removed from the party from inactivity. Click the button below rejoin the party.",
            buttonTitle: "Return to Party"
          }
        };
      var Nt;
      !(function (t) {
        (t.HEART = "heart"), (t.ANGRY = "angry"), (t.FIRE = "fire"), (t.LAUGH = "laugh"), (t.CRY = "cry"), (t.SURPRISE = "surprise");
      })(Nt || (Nt = {}));
      var Ut = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              c(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              c(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function c(t) {
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
          c((n = n.apply(t, e || [])).next());
        });
      };
      class Lt {
        constructor(t) {
          (this.W = this.J.bind(this)),
            (this.K = this.resetIdleTimer.bind(this)),
            (this.Y = (t) => {
              "TP_EMOJI_REQ_RELOAD" === t.data && this.updateFrequentlyUsed(), t.data && "emoji-click" === t.data.type && this.q(t.data);
            }),
            (this.X = (t) => {
              (t.target !== jQuery("#chat-input")[0] && t.target !== jQuery("#nickname-edit")[0]) || t.stopImmediatePropagation();
            }),
            (this.Z = (t) => {
              this.tt.onVideoClick();
              const e = t.target;
              let i = "" !== e.id ? e.id : e.className;
              i = e.getAttribute("data-tp-id") ? e.getAttribute("data-tp-id") : i;
              const n = { name: "user_click", component: { name: i, type: e.nodeName, origin: "other" } },
                s = new j(k, B, n);
              S.l(s),
                t.target !== jQuery("emoji-picker")[0] &&
                  t.target !== jQuery("#chat-input")[0] &&
                  jQuery("#emoji-picker-container") &&
                  !jQuery("#emoji-picker-container").is(":hidden") &&
                  this.tt.toggleEmojiClicker(),
                t.target instanceof HTMLElement &&
                  jQuery("#gif-picker-container").length &&
                  jQuery("#gif-picker-container")[0] &&
                  !jQuery("#gif-picker-container")[0].contains(t.target) &&
                  t.target !== jQuery("#chat-input")[0] &&
                  !jQuery("#gif-picker-container").is(":hidden") &&
                  "category-img" !== t.target.className &&
                  this.tt.toggleGIFs();
            }),
            (this.q = (t) => {
              console.log("on Emoji Click");
              const e = jQuery("#chat-input")[0],
                i = t.detail.unicode,
                n = new j(k, B, { name: "user_click", component: { name: "chat_input_container-emoji_picker-emoji", type: i } });
              S.l(n);
              const s = new j(k, B, { eventType: `emoji-click-${i}`, sessionId: this.tt.getSessionId() });
              S.l(s), dt.pushTask(() => this.updateFrequentlyUsed(t.detail.emoji));
              const u = window.getSelection();
              if (!jQuery("#chat-input").is(":focus") && e.lastChild) {
                const t = document.createRange();
                t.setStartAfter(e.lastChild), null == u || u.removeAllRanges(), null == u || u.addRange(t);
              }
              this.tt.focusChat(), this.et(i);
              e.scrollHeight - e.scrollTop <= e.clientHeight + 40 && (e.scrollTop = e.scrollHeight), this.it(), this.tt.onInputChange();
            }),
            (this.tt = t);
        }
        nt() {
          I("Idle Warning called"), Rt(Mt);
          const t = new j(k, B, {
            name: "party_warning",
            action: { description: "user has been warned for being idle", reason: "user was idle for 120000 time in milliseconds." }
          });
          S.l(t);
          const e = new j(k, B, { eventType: "idle-warn-2hr", sessionId: this.tt.getSessionId() });
          S.l(e), (this.st = setTimeout(this.ut.bind(this), St));
        }
        ut() {
          I("Idle kick called");
          const t = new j(k, B, {
              name: "party_kick",
              action: { description: "user has been kicked for being idle", reason: "user was idle for 7200000 time in milliseconds." }
            }),
            e = new rt(k, B, Gt);
          S.l(t), S.l(e);
        }
        resetIdleTimer() {
          this.ot && clearTimeout(this.ot), this.st && (Vt(), clearTimeout(this.st)), (this.ot = setTimeout(this.nt.bind(this), xt));
        }
        rt() {
          (this.ot = setTimeout(this.nt.bind(this), xt)),
            (window.onmousemove = (t) => {
              t.isTrusted && this.K();
            }),
            (window.onfocus = () => this.K()),
            (window.onmousedown = () => this.K()),
            (window.ontouchstart = () => this.K()),
            (window.onkeydown = () => this.K());
        }
        ct() {
          this.ot && clearTimeout(this.ot),
            this.st && clearTimeout(this.st),
            (window.onmousemove = null),
            (window.onmousedown = null),
            (window.ontouchstart = null),
            (window.onkeydown = null);
        }
        startListening() {
          I("Listening for chat events"), this.rt(), this.Dt(), this.initWindowListeners();
        }
        stopListening() {
          this.ht(), this.ct(), this.dt();
        }
        J() {
          this.tt.clearUnreadCount();
        }
        lt(t) {
          if ((console.log("Pasting"), t.preventDefault(), t.clipboardData)) {
            const e = t.clipboardData.getData("text/plain");
            document.execCommand("insertHTML", !1, e);
          }
          this.tt.onInputChange();
        }
        initWindowListeners() {
          jQuery(window).on("focus", this.W),
            window.addEventListener("message", this.Y),
            document.addEventListener("dragstart", this.Ft.bind(this)),
            document.addEventListener("webkitfullscreenchange", this.tt.onFullScreen),
            document.addEventListener("fullscreenchange", this.tt.onFullScreen),
            document.addEventListener("keydown", this.X, !0),
            document.addEventListener("emoji-click", this.q),
            document.addEventListener("click", this.Z);
        }
        Dt() {
          jQuery(window).on("focus", this.W),
            jQuery("#party-tab").on("click", this.tt.togglePartyTab.bind(this.tt)),
            jQuery("#friends-tab").on("click", this.tt.toggleFriendsTab.bind(this.tt)),
            jQuery(".user-icon").on("click", this.tt.toggleLargeUserIconButton.bind(this.tt)),
            jQuery("#user-icon").on("click", this.tt.toggleIconContainer.bind(this.tt)),
            jQuery("#link-icon").on("click", this.tt.linkIconListener.bind(this.tt)),
            jQuery("#reset-icon").on("click", this.tt.resetIconListener.bind(this.tt)),
            jQuery(".image-button").on("click", this.tt.userIconSelectorListener.bind(this.tt)),
            jQuery("#chat-input-container").on("keydown", this.tt.onChatKeyDown.bind(this.tt)),
            jQuery("#nickname-edit").on("keydown", this.tt.onChatKeyDown.bind(this.tt)),
            jQuery("#chat-input").on("keypress", this.tt.onChatKeyPress.bind(this.tt)),
            jQuery("#chat-input").on("input", this.tt.onInputChange.bind(this.tt)),
            jQuery("#gif-search").on("keyup", this.tt.onGifSearch.bind(this.tt)),
            jQuery("#saveChanges").on("click", this.tt.saveChangesListener.bind(this.tt)),
            jQuery("#cancelNickname").on("click", this.tt.cancelNicknameListener.bind(this.tt)),
            jQuery("#chat-wrapper").on("mouseup", this.tt.cancelEvent),
            jQuery("#chat-wrapper").on("mousedown", this.tt.cancelEvent),
            jQuery("#chat-wrapper").on("pointerup", this.tt.cancelEvent),
            jQuery("#chat-wrapper").on("pointerdown", this.tt.cancelEvent),
            jQuery("#chat-wrapper").on("mousemove", this.tt.cancelEvent),
            jQuery("#chat-wrapper").on("pointermove", this.tt.cancelEvent),
            jQuery("#chat-wrapper").on("keyup", this.tt.onChatKeyUp.bind(this.tt)),
            jQuery("#emoji-picker-btn").on("click", this.tt.addEmojiPicker.bind(this.tt)),
            jQuery("#gif-btn").on("click", this.tt.addGifPicker.bind(this.tt)),
            jQuery(".gif-img").on("click", this.tt.clickGif.bind(this.tt)),
            jQuery(".gif-results").on("click", "video, img", this.tt.clickGif.bind(this.tt)),
            jQuery("#category-container").on("click", "video", this.tt.clickGif.bind(this.tt)),
            jQuery("#gif-input-back").on("click", this.tt.resetGif.bind(this.tt)),
            jQuery("#reaction-btn").on("click", this.tt.addReactionTab.bind(this.tt)),
            jQuery("#chat-input-container").on("click", this.gt.bind(this)),
            jQuery("#chat-input").on("input", this.it.bind(this)),
            jQuery("#chat-input").on("drop", this.vt.bind(this)),
            jQuery("#gif-results-wrapper").on("scroll", this.tt.onScrollToBottom.bind(this.tt)),
            this.yt(),
            document.addEventListener("keydown", this.X.bind(this), !0),
            this.tt.initCustomListeners();
        }
        yt() {
          jQuery("#tp-heart-button").on("click", () => {
            this.tt.onReactionClicked(Nt.HEART);
          }),
            jQuery("#tp-cry-button").on("click", () => {
              this.tt.onReactionClicked(Nt.CRY);
            }),
            jQuery("#tp-angry-button").on("click", () => {
              this.tt.onReactionClicked(Nt.ANGRY);
            }),
            jQuery("#tp-surprise-button").on("click", () => {
              this.tt.onReactionClicked(Nt.SURPRISE);
            }),
            jQuery("#tp-laugh-button").on("click", () => {
              this.tt.onReactionClicked(Nt.LAUGH);
            }),
            jQuery("#tp-fire-button").on("click", () => {
              this.tt.onReactionClicked(Nt.FIRE);
            });
        }
        it() {
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
        vt(t) {
          t.preventDefault();
        }
        Ft(t) {
          t.preventDefault();
        }
        gt(t) {
          t.target === jQuery("#chat-input")[0] && this.tt.focusChat();
        }
        et(t) {
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
        ft(t) {
          return "object" == typeof t && null != t && "unicode" in t;
        }
        Ct(t) {
          if (!Array.isArray(t)) return !1;
          if (0 === t.length) return !1;
          for (let e = 0; e < t.length; e++) {
            const i = t[e];
            if (!this.ft(i)) return !1;
          }
          return !0;
        }
        updateFrequentlyUsed(t) {
          var e;
          return Ut(this, void 0, void 0, function* () {
            const i = yield gt.getItemsAsync([a]);
            let n = null !== (e = i.recentlyUsedEmojiMap) && void 0 !== e ? e : h;
            this.Ct(n) || (n = h),
              Array.isArray(n) &&
                (t && ((n = n.filter((e) => e.unicode != t.unicode)), n.unshift(t), (n = n.slice(0, 24))),
                yield Z.setItemsAsync({ [a]: n }),
                window.postMessage({ type: "TP_FREQ_USED", data: n }, "*"));
          });
        }
        dt() {
          jQuery(window).off("focus", this.W),
            document.removeEventListener("emoji-click", this.q),
            document.removeEventListener("keydown", this.X, !0),
            document.removeEventListener("click", this.Z),
            window.removeEventListener("message", this.Y),
            document.removeEventListener("webkitfullscreenchange", this.tt.onFullScreen),
            document.removeEventListener("fullscreenchange", this.tt.onFullScreen);
        }
        ht() {
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
      class Ht {
        constructor(t) {
          (this.tt = t),
            (this.Et = []),
            (this.wt = 0),
            (this._t = document.title),
            (this.bt = 0),
            (this.jt = new Map()),
            (this.Bt = new Map()),
            (this.At = []),
            (this.kt = []),
            (this.Qt = ""),
            I("Message Controller");
        }
        It(t, e, i, n) {
          return jQuery(
            `\n            <div class="msg-container ${
              !n && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    <div class="icon">\n                    ${
              n ? `<img src="${K(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                    </div>\n                </div>\n                <div class="msg-txt message${
              i.isSystemMessage ? "-system" : "-txt"
            }">\n                    ${
              n ? `<h3 data-tp-id="chat_history_container-nickname">${e}</h3>` : ""
            }\n                    <p data-tp-id="chat_history_container-message">${K(
              i.body
            ).trim()}</p>\n                </div>\n            </div>\n          `
          );
        }
        xt(t, e, i, n) {
          const s = 200 / (i.gifObject.media.full.dims[0] / i.gifObject.media.full.dims[1]),
            u = 200 / (i.gifObject.media.fullMobile.dims[0] / i.gifObject.media.fullMobile.dims[1]),
            o = this.tt.shouldUseVideoGIF();
          return jQuery(
            `\n            <div class="msg-container ${
              !n && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    <div class="icon" >\n                    ${
              n ? `<img src="${K(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                    </div>\n                </div>\n                <div class="msg-gif message-gif">\n                    ${
              n ? `<h3 data-tp-id="chat_history_container-nickname">${e}</h3>` : ""
            }  \n            ${
              o
                ? `<video src="${K(
                    i.gifObject.media.full.url
                  )}"  height="${s}" class="tp-video-gif" data-tp-id="chat_history_container-gif" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback>`
                : `<img src="${K(
                    i.gifObject.media.fullMobile.url
                  )}"  height="${u}" class="tp-video-gif" data-tp-id="chat_history_container-gif" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback>`
            }     \n                </div>\n            </div>\n          `
          );
        }
        St(t, e, i) {
          return jQuery(
            `\n            <div class="msg ${
              !i && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    ${
              i ? `<img src="${K(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                </div>\n                <div class="message${
              e.isSystemMessage ? "-system" : "-txt"
            }">\n                    <p class="msg-nickname"></p>\n                    <p data-tp-id="chat_history_container-message">${K(
              e.body
            ).trim()}</p>\n                </div>\n            </div>\n        `
          );
        }
        Tt(t, e, i) {
          const n = 200 / (e.gifObject.media.full.dims[0] / e.gifObject.media.full.dims[1]),
            s = 200 / (e.gifObject.media.fullMobile.dims[0] / e.gifObject.media.fullMobile.dims[1]),
            u = this.tt.shouldUseVideoGIF();
          return jQuery(
            `\n            <div class="msg-container ${
              !i && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    <div class="tp-icon-name">\n                    ${
              i ? `<img src="${K(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                    </div>\n                </div>\n                <div class="msg-gif message-gif">\n                    <p class="msg-nickname"></p>\n                    ${
              u
                ? `<video src="${K(
                    e.gifObject.media.full.url
                  )}" data-tp-id="chat_history_container-gif" height="${n}" class = "tp-video-gif" autoplay loop playsinline disablepictureinpicture disableremoteplayback>`
                : `<img src="${K(
                    e.gifObject.media.fullMobile.url
                  )}" data-tp-id="chat_history_container-gif" height="${s}" class = "tp-video-gif" autoplay loop playsinline disablepictureinpicture disableremoteplayback>`
            }\n                </div>\n            </div>\n          `
          );
        }
        Mt(t, e, i, n, s) {
          t.appendTo(jQuery("#chat-history"));
          const u = t[0];
          (u.R = e.permId), (u.Pt = i), (u.$t = n), (u.Rt = e), (u.Vt = s);
        }
        reloadMessages() {
          this.tt.queueMessageForFrame(bt.CLEAR_MESSAGES, "");
          const t = JSON.parse(JSON.stringify(this.Et));
          for (let e = 0; e < t.length; e++) {
            const i = t[e];
            "gifObject" in i ? this.addGif(i, e) : this.addMessage(i, !1, e);
          }
          this.Et = t;
        }
        Ot(t, e) {
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
            (void 0 === i && (i = this.Et.length),
            t.isSystemMessage && "left" === t.body && (console.log("trying to add left message"), !t.userIcon && !this.jt.has(t.permId)))
          )
            return;
          if (0 === i && t.isSystemMessage && t.body.includes("joined")) return;
          e &&
            t.isSystemMessage &&
            t.body.indexOf("updated their user icon") > -1 &&
            (t.userIcon && this.setUserIcon(t.permId, t.userIcon), t.userNickname && this.setUserNickname(t.permId, t.userNickname));
          const n = this.Et.slice(-1).pop(),
            s = !(void 0 !== n && i > 0) || !this.Ot(n, t);
          this.Et.push(t);
          const u = Object.assign({}, t),
            o = this.getUserIconURL(u.permId, u.userIcon),
            r = this.getUserNickname(u.permId, u.userNickname);
          this.tt.queueMessageForFrame(bt.ADD_MESSAGE, { originalMessage: u, userIcon: o, userNickname: r });
          const c = "" === r ? this.St(o, u, s) : this.It(o, r, u, s);
          this.Mt(c, u, o, r, s), this.scrollToBottom(), this.Gt();
        }
        addGif(t, e) {
          void 0 === e && (e = this.Et.length);
          const i = this.Et.slice(-1).pop(),
            n = !(void 0 !== i && e > 0) || !this.Ot(i, t);
          this.Et.push(t);
          const s = t.userIcon ? this.getUserIconURL(t.permId, t.userIcon) : this.getUserIconURL(t.permId),
            u = t.userNickname ? this.getUserNickname(t.permId, t.userNickname) : "";
          this.tt.queueMessageForFrame(bt.ADD_MESSAGE, { originalMessage: t, userIcon: s, userNickname: u });
          const o = "" === u ? this.Tt(s, t, n) : this.xt(s, u, t, n);
          (o[0].Nt = !0), this.Mt(o, t, s, u, n), m(100)().then(this.scrollToBottom.bind(this)), this.Gt();
        }
        scrollToBottom() {
          jQuery("#chat-history").scrollTop(jQuery("#chat-history").prop("scrollHeight"));
        }
        clearUnreadCount() {
          this.wt > 0 && ((this.wt = 0), (document.title = this._t));
        }
        Gt() {
          (this.wt += 1), (this.bt += 1), document.hasFocus() || (document.title = "(" + String(this.wt) + ") " + this._t);
        }
        getUserIconURL(t, e = "") {
          if (!this.jt.has(t)) {
            const i = this.parseIconSrc(e),
              n = void 0 !== i ? i : this.Ut();
            this.jt.set(t, n), this.kt.push(n);
          }
          return this.jt.get(t);
        }
        parseIconSrc(t) {
          const e = t.includes("?newIconUrl=") ? t.split("?newIconUrl=")[1] : t,
            i = t.includes("?newIconUrl=") ? t.split("?newIconUrl=")[0] : t;
          return z.includes(e)
            ? chrome.runtime.getURL("img/icons/" + t)
            : H.includes(i)
            ? chrome.runtime.getURL("img/icons/General/" + t)
            : void 0;
        }
        getUserNickname(t, e = "") {
          return this.Bt.has(t) || (this.Bt.set(t, e), this.At.push(e)), K(this.Bt.get(t));
        }
        Ut() {
          let t = chrome.runtime.getURL("img/icons/General/" + H[Math.floor(Math.random() * H.length)]);
          if (this.kt.length < J.General.length)
            for (; this.kt.includes(t); ) t = chrome.runtime.getURL("img/icons/General/" + H[Math.floor(Math.random() * H.length)]);
          return t;
        }
        Lt(t) {
          const e = t[0],
            i = e.R;
          let n = e.Pt;
          i && this.getUserIconURL(i) !== n && ((n = this.getUserIconURL(i)), t.find("img").attr("src", n), (e.Pt = n));
          const s = e.$t;
          if (i && n) {
            const u = this.getUserNickname(i);
            if (u !== s) {
              const s = e.Rt,
                o = e.Vt;
              let r;
              if (
                (e.Nt && s && "gifObject" in s && o && (r = "" == u ? this.Tt(n, s, o) : this.xt(n, u, s, o)),
                !e.Nt && s && "isSystemMessage" in s && o && (r = "" == u ? this.St(n, s, o) : this.It(n, u, s, o)),
                r)
              ) {
                t.replaceWith(r);
                const e = r[0];
                (e.R = i), (e.Pt = n), (e.$t = u), (e.Rt = s), (e.Vt = o);
              }
            }
          }
        }
        setUserIconUrl(t) {
          (this.Qt = t), this.tt.queueMessageForFrame(bt.SET_USER_ICON_URL, t);
        }
        renderSidebar() {
          jQuery("#user-icon img").attr("src", this.Qt), jQuery(".user-icon img").attr("src", this.Qt);
          const t = jQuery(".msg");
          for (let e = 0; e < t.length; e++) this.Lt(jQuery(t[e]));
          const e = jQuery(".msg-container");
          for (let t = 0; t < e.length; t++) this.Lt(jQuery(e[t]));
          this.tt.isChatFrameActive() && this.reloadMessages();
        }
        Ht(t) {
          let e = null;
          if (t)
            if (t.includes("?newIconUrl=")) {
              const i = t.split("?newIconUrl="),
                n = i[1],
                s = i[0];
              z.includes(n)
                ? (e = chrome.runtime.getURL(`img/icons/${n}`))
                : H.includes(s) && (e = chrome.runtime.getURL(`img/icons/General/${s}`));
            } else
              z.includes(t)
                ? (e = chrome.runtime.getURL(`img/icons/${t}`))
                : H.includes(t) && (e = chrome.runtime.getURL(`img/icons/General/${t}`));
          if (null === e) {
            let t = J.General.filter((t) => !this.kt.includes(t));
            0 === t.length && (t = J.General);
            const i = t[Math.floor(Math.random() * t.length)];
            e = chrome.runtime.getURL(`/img/icons/General/${i}`);
          }
          return e;
        }
        setUserIcon(t, e) {
          const i = this.Ht(e);
          this.jt.set(t, i), this.kt.push(i), this.renderSidebar();
        }
        setUserNickname(t, e) {
          const i = K(e);
          this.Bt.set(t, i), this.At.push(i), this.renderSidebar();
        }
        updateUserData(t, e, i) {
          const n = this.Ht(e);
          this.jt.set(t, n), this.kt.push(n), this.Bt.set(t, i), this.At.push(i), this.renderSidebar();
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
          const t = new j(k, B, {
            name: "review-shown",
            action: { description: "review was shown on chrome", reason: "review was shown." }
          });
          S.l(t);
          const e = { eventType: "review-shown-chrome", sessionId: this.tt.getSessionId() },
            i = new j(k, B, e);
          S.l(i),
            jQuery("#reviewLink").click(() => {
              chrome.storage.local.set({ reviewClicked: !0 });
              const t = new j(k, B, {
                name: "review-clicked",
                action: { description: "review was clicked on chrome", reason: "review was clicked." }
              });
              S.l(t);
              const e = { eventType: "review-clicked-chrome", sessionId: this.tt.getSessionId() },
                i = new j(k, B, e);
              S.l(i);
            });
        }
      }
      class Wt {
        constructor(t) {
          (this.Wt = !1), (this.zt = !1), (this.Jt = !1), (this.tt = t);
        }
        setupPresenceIndicator() {
          (this.Wt = !1), (this.zt = !1), (this.Jt = !1), this.Kt();
        }
        Yt() {
          return jQuery("#presence-indicator");
        }
        setTypingPresenceVisible(t) {
          (this.Wt = t), this.Kt();
        }
        setBufferingPresenceVisible(t) {
          (this.zt = t), this.Kt();
        }
        setWatchingAdsPresenceVisible(t) {
          (this.Jt = t), this.Kt();
        }
        getWatchingAdsVisible() {
          return this.Jt;
        }
        qt() {
          return this.Jt
            ? "People are watching ads..."
            : this.Wt && this.zt
            ? "People are typing and buffering..."
            : this.Wt
            ? "People are typing..."
            : this.zt
            ? "People are buffering..."
            : "";
        }
        Kt() {
          const t = this.qt();
          this.Yt().text(t), this.tt.queueMessageForFrame(bt.SET_PRESENCE_MESSAGE, { text: t });
        }
      }
      var zt = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              c(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              c(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function c(t) {
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
          c((n = n.apply(t, e || [])).next());
        });
      };
      var Jt,
        Kt,
        Yt = function (t, e, i, n) {
          return new (i || (i = Promise))(function (s, u) {
            function o(t) {
              try {
                c(n.next(t));
              } catch (t) {
                u(t);
              }
            }
            function r(t) {
              try {
                c(n.throw(t));
              } catch (t) {
                u(t);
              }
            }
            function c(t) {
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
            c((n = n.apply(t, e || [])).next());
          });
        };
      class qt extends class {
        constructor() {
          (this.Xt = !1),
            (this.Zt = 1),
            (this.te = ""),
            (this.ee = ""),
            (this.ie = "0"),
            (this.ne = ""),
            (this.se = !0),
            (this.ue = !1),
            (this.oe = 0),
            (this.re = []),
            (this.ce = new ht()),
            (this.ae = !1),
            (this.De = void 0),
            (this.he = !0),
            (this.de = this.le()),
            (this.Fe = this.le()),
            (this.ge = !1),
            (this.pe = !1),
            (this.ve = []),
            (this.logEvent = (t) => {
              const e = new j(k, B, t);
              S.l(e);
            }),
            (this.checkInitReactionContainer = () => {
              gt.getItemsAsync([e]).then((t) => {
                (!0 !== t.reactionContainerOpen && void 0 !== t.reactionContainerOpen) || this.showReactionHolder();
              });
            }),
            (this.onSidebarFocus = () => {
              var t;
              null === (t = this.ye) || void 0 === t || t.hideMessageIndicator();
            }),
            (this.setReactionsActive = (t) => {
              this.ce.pushTask(() => Z.setItemsAsync({ [e]: t.active }));
            }),
            (this.onFullScreen = () => {
              var t;
              this.scrollToBottom(),
                document.fullscreenElement || document.webkitIsFullScreen
                  ? this.logEvent({ name: "fullscreen_enter" })
                  : this.logEvent({ name: "fullscreen_exit" }),
                null === (t = this.ye) || void 0 === t || t.setChatButtons();
            }),
            (this.cancelEvent = (t) => {
              t.stopPropagation();
            }),
            (this.fe = !1),
            (this.Ce = new Lt(this)),
            (this.Ee = new Wt(this)),
            (this.we = new Ht(this)),
            (this._e = void 0),
            (this.be = void 0),
            (this.je = !1);
        }
        setPageControls(t) {
          this.ye = t;
        }
        fixPageControls() {
          var t, e;
          null === (t = this.ye) || void 0 === t || t.enablePartyIcons(), null === (e = this.ye) || void 0 === e || e.setChatButtons();
        }
        setChatVisible(t, e = !0) {
          return zt(this, void 0, void 0, function* () {
            if (this.isPartyWindowsActive()) throw new Error("Invalid Set Chat");
            e && (this.se = t), t && !this.Be() && this.reloadChat();
          });
        }
        Ae(t, e) {
          const i = new j(k, B, { name: "error", action: { reason: e, description: t } });
          S.l(i);
        }
        getChatWindowVisible() {
          return this.Fe;
        }
        setChatWindowActive(t) {
          this.de = t;
        }
        isChatFrameActive() {
          return this.he;
        }
        isPartyWindowsActive() {
          return this.de;
        }
        shouldChatBeVisible() {
          return this.se;
        }
        incrementEmojiCount() {
          this.oe++;
        }
        resetEmojiCount() {
          this.oe = 0;
        }
        getEmojiCount() {
          return this.oe;
        }
        setChatFrameReady(t) {
          this.ae && this.ke(), (this.ae = !0), (this.Qe = t), console.log("setChatFrameReady");
        }
        queueMessageForFrame(t, e) {
          this.ce.pushTask(() =>
            zt(this, void 0, void 0, function* () {
              this.Ie(t, e);
            })
          );
        }
        Ie(t, e) {
          return zt(this, void 0, void 0, function* () {
            const i = this.Qe,
              n = { type: t, data: e, target: "TP_Sidebar", tabId: i, sender: k };
            S.l(n);
          });
        }
        xe() {
          var t;
          return zt(this, void 0, void 0, function* () {
            try {
              console.log("Start delay"),
                yield C(() => this.ae && null != this.Qe, 3e4)(),
                console.log("Chat Frame is Loaded"),
                this.De && this.Se(this.De),
                null === (t = this.ye) || void 0 === t || t.setResetChatButton();
            } catch (t) {
              this.Ae("Sidewindow didn't load in time", t);
            }
          });
        }
        le() {
          return window.origin.includes(".crunchyroll.com"), window.origin.includes("tv.apple.com"), !1;
        }
        Te() {
          return zt(this, void 0, void 0, function* () {
            yield S.l(new b(k, B, y.LOAD_CHAT_WINDOW)), console.log(this.Qe);
          });
        }
        resetChatWindow(t = !1) {
          var e;
          return zt(this, void 0, void 0, function* () {
            yield S.l(new b(k, B, y.RESET_CHAT_WINDOW)),
              console.log(this.Qe),
              (this.Fe = !0),
              (this.se = !0),
              top.postMessage({ type: "exitFullscreen" }, "*"),
              this.ge && t && (this.resetIconListener(), null === (e = this.ye) || void 0 === e || e.setResetChatButton());
          });
        }
        hideChatWindow() {
          return zt(this, void 0, void 0, function* () {
            yield S.l(new b(k, B, y.HIDE_CHAT_WINDOW)), (this.Fe = !1), (this.se = !1);
          });
        }
        Me() {
          return zt(this, void 0, void 0, function* () {
            this.Te(), this.ce.pushTask(this.xe.bind(this));
          });
        }
        loadInitData(t) {
          this.De = t;
        }
        Se(t) {
          var e;
          return zt(this, void 0, void 0, function* () {
            const i = Object.assign({}, t);
            if (((i.iconMap = J), (i.extensionBaseUrl = chrome.runtime.getURL("")), i.storageData)) {
              const t = yield Qt.getValidatedChromeStorageDataAsync();
              i.storageData = t;
            }
            this.queueMessageForFrame(bt.LOAD_INIT_DATA, i);
            const n = yield this.getVideoTitle();
            this.queueMessageForFrame(bt.SET_PAGE_TITLE, { pageTitle: n }),
              this.queueMessageForFrame(bt.SET_USER_LIST, this.ve),
              this.queueMessageForFrame(bt.UPDATE_SETTINGS, {
                userSettings: null === (e = this.Pe) || void 0 === e ? void 0 : e.userSettings
              });
          });
        }
        ke() {
          return zt(this, void 0, void 0, function* () {
            if ((console.log("Reloading chat Frame"), this.De && (yield this.Se(this.De)), this.Pe)) {
              const t = this.we.getUserIconURL(this.Pe.permId, this.Pe.userIcon);
              this.queueMessageForFrame(bt.SET_USER_ICON_URL, t);
            }
            const t = yield this.getVideoTitle();
            this.queueMessageForFrame(bt.SET_PAGE_TITLE, { pageTitle: t }), this.reloadMessages();
          });
        }
        $e() {
          return zt(this, void 0, void 0, function* () {
            this.Re(),
              yield m(200)(),
              (jQuery("#tpChatFrame")[0].style.display = "block"),
              this.setChatVisible(!0),
              this.addIconSelector(),
              this.Ve(),
              this.Ee.setupPresenceIndicator(),
              this.checkInitReactionContainer();
          });
        }
        Oe(t) {
          this.Ce.initWindowListeners(), this.le() && this.Me(), this.ce.pushTask(this.xe.bind(this)), Vt(), (this.Pe = new it(t));
          const e = this.we.getUserIconURL(this.Pe.permId, this.Pe.userIcon);
          this.we.setUserIconUrl(e),
            this.we.renderSidebar(),
            this.Be() && this.removeChat(),
            (this.fe = !0),
            this.Ge(),
            this.le()
              ? jQuery("body").after(
                  `\n    <link rel="stylesheet" href="${chrome.runtime.getURL(
                    "css/alert.css"
                  )}">\n    <style tpInjected>\n      .on-screen-reaction {\n        position: absolute;\n        bottom: 0;\n        font-size: 100px;\n        z-index: 9999999999;\n      }\n      .on-screen-reaction-1 {\n        animation: 5s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-1;\n      }\n      .on-screen-reaction-2 {\n        animation: 6s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-2;\n      }\n      .on-screen-reaction-3 {\n        animation: 7s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-3;\n      }\n      @keyframes on-screen-reaction-slide {\n        0% {\n          opacity: 0;\n          transform: translateY(calc(0 - var(--reaction-size)));\n        }\n        20% {\n          opacity: 0.8;\n        }\n        30% {\n          opacity: 0.8;\n        }\n        90% {\n          opacity: 0;\n        }\n        100% {\n          transform: translateY(-100vh) translateX(-10px);\n          opacity: 0;\n        }\n      }\n      @keyframes on-screen-reaction-1 {\n        10% {\n          margin-left: -6px;\n        }\n        25% {\n          margin-left: 4px;\n        }\n        30% {\n          margin-left: -5px;\n        }\n        45% {\n          margin-left: 5px;\n        }\n        55% {\n          margin-left: -3px;\n        }\n        60% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        85% {\n          margin-left: 5px;\n        }\n        90% {\n          margin-left: -7px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n      @keyframes on-screen-reaction-2 {\n        15% {\n          margin-left: -2px;\n        }\n        20% {\n          margin-left: 5px;\n        }\n        35% {\n          margin-left: -6px;\n        }\n        40% {\n          margin-left: 5px;\n        }\n        50% {\n          margin-left: -5px;\n        }\n        65% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        80% {\n          margin-left: 4px;\n        }\n        95% {\n          margin-left: -5px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n      @keyframes on-screen-reaction-3 {\n        15% {\n          margin-left: -4px;\n        }\n        20% {\n          margin-left: 5px;\n        }\n        35% {\n          margin-left: -2px;\n        }\n        40% {\n          margin-left: 5px;\n        }\n        50% {\n          margin-left: -3px;\n        }\n        65% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        80% {\n          margin-left: 5px;\n        }\n        95% {\n          margin-left: -4px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n    </style>\n  `
                )
              : (this.$e(), this.checkAddYoutubePromo());
        }
        checkAddYoutubePromo() {
          return zt(this, void 0, void 0, function* () {
            "true" !== (yield gt.getItemsAsync(["seenYoutubePromo"])).seenYoutubePromo &&
              (this.we.addYoutubePromo(), Z.setItemsAsync({ seenYoutubePromo: "true" }));
          });
        }
        sendInitDataToSidebar(t) {
          this.De = t;
          const e = Object.assign({}, t);
          (e.iconMap = J),
            (e.extensionBaseUrl = chrome.runtime.getURL("")),
            console.log(e),
            this.queueMessageForFrame(bt.LOAD_INIT_DATA, e);
        }
        reloadChat() {
          return zt(this, void 0, void 0, function* () {
            console.log("Reload chat"),
              this.Be() ||
                this.isPartyWindowsActive() ||
                (this.Re(),
                yield m(200)(),
                (jQuery("#tpChatFrame")[0].style.display = "block"),
                this.setChatVisible(this.se),
                this.addIconSelector(),
                this.Ne(),
                this.Ve(),
                this.Ee.setupPresenceIndicator(),
                this.reloadMessages(),
                this.scrollToBottom(),
                this.checkInitReactionContainer());
          });
        }
        sendTeardown(t) {
          const e = new rt(k, B, t);
          S.l(e);
        }
        Be() {
          return jQuery("#chat-wrapper").length > 0;
        }
        clearUnreadCount() {
          this.we.clearUnreadCount();
        }
        Ue() {
          return zt(this, void 0, void 0, function* () {
            try {
              yield C(() => null !== document.querySelector("#chat-history") || this.de || (this.ae && this.he), 1e4)();
            } catch (t) {
              this.Ae("Failed to find chat history", t);
            }
          });
        }
        addMessage(t, e = !1) {
          this.ce.pushTask(() =>
            zt(this, void 0, void 0, function* () {
              yield this.Ue(), this.we.addMessage(t, e);
            })
          );
        }
        addGif(t) {
          this.ce.pushTask(() =>
            zt(this, void 0, void 0, function* () {
              yield this.Ue(), this.we.addGif(t);
            })
          );
        }
        reloadMessages() {
          this.we.reloadMessages();
        }
        scrollToBottom() {
          this.we.scrollToBottom();
        }
        addReviewMessage() {
          this.we.addReviewMessage(), (this.je = !0);
        }
        get showingReveiwMessage() {
          return this.je;
        }
        set shouldReturnToVideo(t) {
          this.ge = t;
        }
        onBufferingMessage(t) {
          this.ce.pushTask(() =>
            zt(this, void 0, void 0, function* () {
              yield this.Ue(), this.Ee.setBufferingPresenceVisible(t.usersBuffering.length > 0);
            })
          );
        }
        onTypingMessage(t) {
          this.ce.pushTask(() =>
            zt(this, void 0, void 0, function* () {
              yield this.Ue(), this.Ee.setTypingPresenceVisible(t.usersTyping.length > 0);
            })
          );
        }
        onWatchingAdsMessage(t) {
          this.ce.pushTask(() =>
            zt(this, void 0, void 0, function* () {
              console.log("Set Ad Presence: " + t), yield this.Ue(), this.Ee.setWatchingAdsPresenceVisible(t.usersWatchingAds.length > 0);
            })
          );
        }
        getWatchingAds() {
          return this.Ee.getWatchingAdsVisible();
        }
        doUpdateSettings(t) {
          var e;
          null === (e = this.Pe) || void 0 === e || e.saveUserSettings(t), t.shouldBroadcast && this.Le(this.He(t));
        }
        onUpdateSettingsMessage(t) {
          if ((this.we.updateUserData(t.permId, t.userSettings.userIcon, t.userSettings.userNickname), this.Pe)) {
            const t = this.we.getUserIconURL(this.Pe.permId, this.Pe.userIcon);
            this.we.setUserIconUrl(t), this.we.renderSidebar();
          }
        }
        Ve() {
          C(() => this.Be(), 1e4)().then(() => {
            this.Ce.startListening();
          });
        }
        Ne() {
          this.Ce.stopListening(), this.We && (clearTimeout(this.We), (this.ue = !1));
        }
        teardown() {
          (this.fe = !1),
            (this.ee = void 0),
            (this.ze = void 0),
            this.Ne(),
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
            this.ce.pushTask(() => Z.setItemsAsync({ [e]: !1 }));
        }
        onOpenGifPicker() {
          var t, e;
          return zt(this, void 0, void 0, function* () {
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
              t ? this.hideReactionHolder() : this.showReactionHolder(), !t && e && this.we.scrollToBottom();
            });
        }
        onVideoClick() {
          this.queueMessageForFrame(bt.ON_PAGE_CLICK);
        }
        toggleGIFs() {
          jQuery("#gif-picker-container").slideToggle(0, () => {
            jQuery("#gif-picker-container").is(":hidden") ? this.onCloseGifPicker() : this.onOpenGifPicker();
          });
        }
        addEmojiPicker(t) {
          t.stopPropagation();
          const e = new j(k, B, {
            name: "user_click",
            component: { name: "chat_input_container-emoji_picker", type: "button", origin: "tp" }
          });
          S.l(e), this.toggleEmojiClicker();
        }
        addGifPicker(t) {
          t.stopPropagation();
          const e = new j(k, B, {
            name: "user_click",
            component: { name: "chat_input_container-gif_popup", type: "button", origin: "tp" }
          });
          S.l(e), this.toggleGIFs();
        }
        addReactionTab(t) {
          t.stopPropagation();
          const e = new j(k, B, {
            name: "user_click",
            component: { name: "chat_input_container-reaction_pinner", type: "button", origin: "tp" }
          });
          S.l(e), this.toggleReactions();
        }
        Ge() {
          if (
            (I("Set Chat Html called"),
            (this.Je = L()),
            (this.Je = this.Je.replace(/{EXTENSION_LOGO}/g, K(chrome.runtime.getURL("img/tp_logo.svg")))),
            void 0 === this.Pe)
          )
            throw new Error("Attempt to set chatHtml when _userSettings is undefined.");
          const t = chrome.runtime.getURL("");
          this.Je = this.Je.replace(/{CHAT_URL}/g, `${o}?t=${Date.now()}&id=${encodeURIComponent(t.substring(0, t.length - 1))}`);
          for (const t of r) {
            const e = new RegExp(`${t}_STATIC`.toUpperCase(), "g"),
              i = new RegExp(`${t}_GIF`.toUpperCase(), "g");
            (this.Je = this.Je.replace(e, chrome.runtime.getURL(`img/reactions/${t}/${t}_static.svg`))),
              (this.Je = this.Je.replace(i, chrome.runtime.getURL(`img/reactions/${t}/${t}.gif`)));
          }
          (this.Je = this.Je.replace(/{USER_NICKNAME}/g, this.Pe.userNickname ? K(this.Pe.userNickname) : "Add a nickname")),
            (this.Je = this.Je.replace(/{USER_ICON}/g, this.we.getUserIconURL(this.Pe.permId, this.Pe.userIcon))),
            (this.Je = this.Je.replace(/{LINK_SVG}/g, chrome.runtime.getURL("img/icon_link_active.svg"))),
            (this.Je = this.Je.replace(/{RESET_SGV}/g, chrome.runtime.getURL("img/reset_chat.svg"))),
            (this.Je = this.Je.replace(/{EMOJI_PICKER_ICON}/g, chrome.runtime.getURL("img/emoji_picker.svg"))),
            (this.Je = this.Je.replace(/{REACTION_PICKER_ICON}/g, chrome.runtime.getURL("img/reaction-popup.svg"))),
            (this.Je = this.Je.replace(/{GIF_PICKER_ICON}/g, chrome.runtime.getURL("img/gif_icon.svg"))),
            (this.Je = this.Je.replace(/{GIF_BACK_BUTTON}/g, chrome.runtime.getURL("img/icon_chevron.svg"))),
            (this.Je = this.Je.replace(/{EMOJI_LIB}/g, chrome.runtime.getURL("lib/tp_emoji/picker_bundled.js"))),
            (this.Je = this.Je.replace(/{EMOJI_FRAME}/g, chrome.runtime.getURL("web/emojiPicker.html"))),
            (this.Je = this.Je.replace(/{X_CIRCLE}/g, chrome.runtime.getURL("img/x-circle.svg")));
        }
        toggleIconContainer() {
          var t, e, i, n;
          jQuery("#chat-icon-container").data("active")
            ? (jQuery("#chat-icon-container").data("active", !1),
              jQuery("#chat-icon-container").slideUp(),
              jQuery(".chat-settings-container").slideUp(),
              jQuery("#sidebar-tabs-container").slideDown(),
              this.pe ? jQuery("#chat-history-container").slideDown() : jQuery("#chat-friends-frame").slideDown(),
              this.ue && jQuery("#chat-ad-holder").show(),
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
                null !== (e = null === (t = this.Pe) || void 0 === t ? void 0 : t.userNickname) && void 0 !== e ? e : ""
              ),
              (jQuery("#nickname-edit")[0].value =
                null !== (n = null === (i = this.Pe) || void 0 === i ? void 0 : i.userNickname) && void 0 !== n ? n : ""));
        }
        togglePartyTab() {
          jQuery("#friends-tab").toggleClass("sidebar-tab-inactive", !0),
            jQuery("#party-tab").toggleClass("sidebar-tab-inactive", !1),
            jQuery("#chat-history-container").show(),
            jQuery("#chat-friends-frame").slideUp(),
            jQuery("#chat-input-container").show(),
            (this.pe = !0);
        }
        toggleFriendsTab() {
          jQuery("#friends-tab").toggleClass("sidebar-tab-inactive", !1),
            jQuery("#party-tab").toggleClass("sidebar-tab-inactive", !0),
            jQuery("#chat-friends-frame").removeClass("hidden"),
            jQuery("#chat-friends-frame").slideDown(),
            jQuery("#chat-history-container").slideUp(),
            jQuery("#chat-input-container").hide(),
            (this.pe = !1);
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
          if (null === (t = this.Ke) || void 0 === t ? void 0 : t.videoId) {
            const t = new CustomEvent("YoutubeVideoMessage", { detail: { type: "jumpToNextEpisode", nextVideoId: this.Ke.videoId } });
            window.dispatchEvent(t);
          }
        }
        setPartyUrl(t) {
          this.te = t;
        }
        setMessageForwarder(t) {
          this.Ke = t;
        }
        setSessionId(t) {
          this.ee = t;
        }
        onWebRTC(t) {
          this.queueMessageForFrame(bt.ON_WEB_RTC, t);
        }
        setSocketConnectionId(t) {
          this.queueMessageForFrame(bt.SET_CONNECTION_ID, t);
        }
        loadUserList(t) {
          t.forEach((t) => {
            if (void 0 !== t.userSettings && void 0 !== t.permId) {
              const e = t.userSettings,
                i = this.we.getUserIconURL(t.permId, e.userIcon),
                n = this.we.getUserNickname(t.permId, e.userNickname);
              t.parsedData = { userIconUrl: i, userNickname: n };
            }
          }),
            (this.ve = t),
            jQuery("#user-count").text(t.length),
            this.queueMessageForFrame(bt.SET_USER_LIST, t);
        }
        setSessionCreated(t) {
          this.ze = t;
        }
        getSessionCreated() {
          return this.ze;
        }
        getSessionId() {
          return this.ee;
        }
        getPartyUrl() {
          return this.te;
        }
        userIconSelectorListener(t) {
          const e = jQuery(t.currentTarget).data("icon");
          e &&
            (I("userIconSelector button clicked: " + e),
            this.Pe &&
              (this.Pe.saveUserIcon(e),
              this.queueMessageForFrame(bt.UPDATE_SETTINGS, { userSettings: this.Pe.userSettings }),
              this.Le(this.He(this.Pe.userSettings)))),
            this.toggleIconContainer();
        }
        removeChat() {
          this.clearUnreadCount(), jQuery("#chat-container").remove(), jQuery("#chat-wrapper").remove();
        }
        Le(t, e) {
          S.l(t).then(e);
        }
        Ye(t) {
          return new ct(k, B, { reactionType: t });
        }
        qe(t) {
          return new at(k, B, { gifObject: t });
        }
        Xe(t) {
          return new ut(k, B, { body: t });
        }
        Ze(t) {
          return new st(k, B, { typing: t });
        }
        He(t) {
          return new ot(k, B, { userSettings: t });
        }
        ti(t) {
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
              u = this.ti(e),
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
          console.log(t), this.Le(this.Ye(t));
          const e = new j(k, B, {
            name: "user_click",
            component: { name: "chat_input_container-reaction_holder-reaction", type: t, origin: "tp" }
          });
          S.l(e);
          const i = new j(k, B, { eventType: "reaction-" + t, sessionId: this.getSessionId() });
          S.l(i);
        }
        onChatKeyUp(t) {
          t.stopPropagation();
        }
        onChatKeyDown(t) {
          t.stopPropagation(), this.Ce.resetIdleTimer();
        }
        initCustomListeners() {}
        getClientLocale() {
          if ("undefined" != typeof Intl)
            try {
              return Intl.NumberFormat().resolvedOptions().locale;
            } catch (t) {
              console.error("Cannot get locale from Intl"), this.Ae("Cannot get locale from Intl", t);
            }
        }
        clickGif(t) {
          console.log("GIF was clicked");
          let e = t.target.id;
          if (isNaN(e)) (e = "trending" === e ? "" : e), this.fetchGIFs(e), (jQuery("#gif-search")[0].value = e);
          else {
            const t = this.re.find((t) => t.id === e);
            if (!t) return;
            const i = { id: t.id, title: t.title, description: t.content_description, isSticker: !1, media: t.media };
            this.Le(this.qe(i), () => {
              this.logShare(t.id, jQuery("#gif-search")[0].value);
              const e = {
                  name: "user_click",
                  action: { description: "gif clicked", source: t.media.full.url },
                  component: { name: "chat_input_container-gif_popup-gif", type: "video", origin: "tp" }
                },
                i = new j(k, B, e);
              S.l(i);
              const n = new j(k, B, { eventType: "gif-share", sessionId: this.getSessionId() });
              S.l(n);
            }),
              this.toggleGIFs();
          }
        }
        ei(t) {
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
        ii(t) {
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
            this.re.push(...t.results),
            (this.ie = t.next),
            t.results.forEach((t) => {
              const e = this.shouldUseVideoGIF() ? this.ei(t) : this.ii(t);
              (jQuery("#gif-results-left")[0].scrollHeight > jQuery("#gif-results-right")[0].scrollHeight
                ? jQuery("#gif-results-right")[0]
                : jQuery("#gif-results-left")[0]
              ).appendChild(e);
            }),
            this.Zt < 6 && this.ni(),
            setTimeout(() => {
              this.Xt = !1;
            }, 100);
        }
        onScrollToBottom(t) {
          return zt(this, void 0, void 0, function* () {
            const e = t.target.scrollHeight - t.target.scrollTop <= t.target.clientHeight + 450;
            if (this.Xt) t.preventDefault();
            else if ("0" !== this.ie && e && this.Zt < 6) {
              (this.Zt += 1), (this.Xt = !0), t.preventDefault();
              const e = yield fetch(this.ne + `&pos=${this.ie}`),
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
        si() {
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
        ni() {
          return zt(this, void 0, void 0, function* () {
            jQuery("#gif-results-left")[0].append(...this.si()), jQuery("#gif-results-right")[0].append(...this.si());
          });
        }
        logShare(t, e) {
          return zt(this, void 0, void 0, function* () {
            const i = this.getClientLocale(),
              s = i ? `&locale=${i}` : "",
              u = `&id=${t}`,
              o = e && e.length > 0 ? `q=${e}` : "";
            yield fetch(`${n}/register-share?${o}${s}${u}`);
          });
        }
        fetchGIFs(t) {
          return zt(this, void 0, void 0, function* () {
            const e = yield this.getVideoTitle(),
              i = null == e ? void 0 : e.replace(/[^\w\s]/g, "");
            (this.Zt = 1),
              (this.Xt = !0),
              jQuery("#category-container").hide(),
              jQuery("#gif-columns-wrapper").show(),
              (jQuery("#gif-results-left")[0].innerHTML = ""),
              (jQuery("#gif-results-right")[0].innerHTML = ""),
              (this.re = []),
              this.ni();
            const s = this.getClientLocale(),
              u = s ? `&locale=${s}` : "";
            let o = i ? `search-gifs?q=${i}` : "trending-gifs?";
            (o = t ? `search-gifs?q=${t}` : o), (this.ne = `${n}/${o}${u}`);
            const r = yield fetch(`${n}/${o}${u}`),
              c = yield r.json();
            if (c.results && c.results.length > 0) this.loadGIFs(c);
            else if (!t) {
              const t = yield fetch(`${n}/trending_gifs?${u}`);
              this.ne = `${n}/trending_gifs?${u}`;
              const e = yield t.json();
              this.loadGIFs(e);
            }
          });
        }
        onGifSearch(t) {
          t.stopPropagation();
          const e = t.target.value;
          if ((void 0 !== this.be && clearTimeout(this.be), !e))
            return jQuery("#gif-input-back").hide(), jQuery("#gif-search").css("width", ""), void this.fetchGIFs();
          jQuery("#gif-input-back").show(),
            jQuery("#gif-search").css("width", "90%"),
            (this.be = setTimeout(() => {
              this.fetchGIFs(e);
            }, 500));
        }
        ui(t) {
          return "string" == typeof t && "" !== t.replace(/^\s+|\s+$/g, "");
        }
        onChatKeyPress(t) {
          if ((t.stopPropagation(), "Enter" !== t.key || t.shiftKey))
            void 0 === this._e ? this.Le(this.Ze(!0)) : clearTimeout(this._e),
              (this._e = setTimeout(() => {
                (this._e = void 0), this.Le(this.Ze(!1));
              }, 500));
          else {
            jQuery("#emoji-picker-container").is(":hidden") || this.toggleEmojiClicker();
            const e = jQuery("#chat-input"),
              i = e[0].textContent;
            if (i && this.ui(i)) {
              void 0 !== this._e && (clearTimeout(this._e), (this._e = void 0), this.Le(this.Ze(!1))),
                e.prop("contenteditable", !1),
                this.Le(this.Xe(i.substring(0, 1500)), () => {
                  (e[0].textContent = ""), e.prop("contenteditable", !0), this.focusChat(), this.onInputChange();
                });
              const t = {
                  name: "chat_send",
                  action: { description: "message was sent" },
                  message: {
                    id: (function () {
                      try {
                        return _t();
                      } catch (t) {
                        return "";
                      }
                    })(),
                    text: i.trim()
                  }
                },
                n = new j(k, B, t);
              S.l(n);
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
          const e = t.replace(d, "").replace(/[\uFE0F]/g, ""),
            i = ((t || "").match(d) || []).length;
          return 0 === e.length && i <= 3 && i > 0;
        }
        saveChangesListener() {
          var t;
          const e = jQuery("#nickname-edit")
            .val()
            .slice(0, 25)
            .replace(/^\s+|\s+$/g, "");
          I("saveChanges button clicked: " + e),
            e !== (null === (t = this.Pe) || void 0 === t ? void 0 : t.userNickname) &&
              this.Pe &&
              (this.Pe.saveUserNickname(e),
              this.queueMessageForFrame(bt.UPDATE_SETTINGS, { userSettings: this.Pe.userSettings }),
              this.Le(this.He(this.Pe.userSettings)),
              jQuery("#nickname-edit").attr("placeholder", e),
              jQuery("#nickname-edit").text(e)),
            this.toggleIconContainer();
        }
        cancelNicknameListener() {
          this.toggleIconContainer();
        }
        get inSession() {
          return this.fe;
        }
        addIconSelector() {
          Object.keys(J).forEach((t) => {
            if (Y[t]()) {
              const e = J[t],
                i = jQuery('\n                <ul id="icon-holder"></ul>\n            ');
              for (const n of e) this.oi(`${t}/${n}`, i, n);
              const n = jQuery(
                `\n                <div class="icon-holder-wrap">\n                  <p class="extension-txt-indicator" data-tp-id="chat_container-new_icon_selection-category_name>${t}</p>\n                </div>\n            `
              );
              i.appendTo(n), n.appendTo(jQuery("#icon-holder-template"));
            }
          }, this);
        }
        inputHeightCheck() {
          const t = jQuery("#chat-input").text(),
            e = ((t || "").match(d) || []).length,
            i = t.replace(d, "");
          e <= 3 || i
            ? jQuery(".inTextEmoji").css("font-size", "24px")
            : e > 0
            ? jQuery(".inTextEmoji").css("font-size", "20px")
            : jQuery(".inTextEmoji").css("font-size", "18px");
        }
        oi(t, e, i) {
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
          super();
        }
        getReactionContainer() {
          return jQuery(qt.MAIN_WRAPPER_SELECTOR);
        }
        getChatVisible() {
          return jQuery(qt.MAIN_WRAPPER_SELECTOR).hasClass(Bt);
        }
        removeChat() {
          super.removeChat(), jQuery(qt.MAIN_WRAPPER_SELECTOR).removeClass(Bt);
        }
        setChatVisible(t, e = !0) {
          const i = Object.create(null, { setChatVisible: { get: () => super.setChatVisible } });
          return Yt(this, void 0, void 0, function* () {
            try {
              yield i.setChatVisible.call(this, t, e);
            } catch (t) {
              return;
            }
            t
              ? (jQuery("#chat-wrapper").show(),
                jQuery(qt.MAIN_WRAPPER_SELECTOR).addClass(Bt),
                document.hasFocus() || this.clearUnreadCount())
              : (jQuery("#chat-wrapper").hide(), jQuery(qt.MAIN_WRAPPER_SELECTOR).removeClass(Bt));
          });
        }
        getVideoTitle() {
          return Yt(this, void 0, void 0, function* () {
            const t = document.querySelector(".scrim-footer__info-subtitle-text");
            if (t) return t.innerText;
          });
        }
        shouldAddReactionSpace() {
          return !0;
        }
        shouldShowReaction() {
          return !0;
        }
        shouldUseVideoGIF() {
          return !1;
        }
        Re() {
          this.Je &&
            jQuery(qt.MAIN_WRAPPER_SELECTOR).after(
              (function (t, e = "") {
                return `\n\n      <style tpInjected>\n    \n\n      .with-chat {\n        left: 0px !important;\n        width: calc(100% - 340px) !important;\n      }\n\n      .tp-video {\n        transition: width 250ms linear 0.2s;\n      }\n\n      ${e}\n      \n    </style>\n\n    <link tpInjected rel="stylesheet" href="${chrome.runtime.getURL(
                  "css/chat.css"
                )}">\n    <link rel="stylesheet" href="${chrome.runtime.getURL("css/alert.css")}">\n\n    ${t}\n  `;
              })(this.Je)
            );
        }
      }
      (qt.MAIN_WRAPPER_SELECTOR = ".video-player "),
        (function (t) {
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
        })(Jt || (Jt = {}));
      class Xt extends nt {
        constructor(t, e, i) {
          super(t, e, tt.GET_SESSION_DATA), (this.data = i);
        }
      }
      class Zt {
        constructor() {
          (this.ri = this.ci.bind(this)), (this.ai = []), this.Di();
        }
        addMessageListener(t) {
          this.ai.push(t);
        }
        removeMessageListener(t) {
          this.ai = this.ai.filter((t) => {});
        }
        Di() {
          S.addListener(this.ri);
        }
        teardown() {
          (this.ai = []), S.removeListener(this.ri);
        }
        ci(t, e, i) {
          if (!this.hi(t)) return !1;
          return !!this.di(t, e, i) || (i({}), !1);
        }
        hi(t) {
          return t.target === k;
        }
        di(t, e, i) {
          let n = !1;
          return (
            this.ai.forEach((s) => {
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
      })(Kt || (Kt = {}));
      var te,
        ee = function (t, e, i, n) {
          return new (i || (i = Promise))(function (s, u) {
            function o(t) {
              try {
                c(n.next(t));
              } catch (t) {
                u(t);
              }
            }
            function r(t) {
              try {
                c(n.throw(t));
              } catch (t) {
                u(t);
              }
            }
            function c(t) {
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
            c((n = n.apply(t, e || [])).next());
          });
        };
      class ie {
        constructor(t, e) {
          (this.tt = t), (this.ye = e), I("Chat forwarder");
        }
        onMessage(t, e, i) {
          var n;
          switch (t.type) {
            case y.LOAD_SESSION: {
              const e = t;
              return this.li(e.data), !1;
            }
            case Kt.ON_MESSAGE: {
              const e = t;
              return this.Y(e), this.ye.onChatMessage(), !1;
            }
            case Kt.ON_BUFFER: {
              const e = t;
              return this.Fi(e), !1;
            }
            case Kt.ON_TYPING: {
              const e = t;
              return this.gi(e), !1;
            }
            case Kt.ON_WATCHING_ADS: {
              const e = t;
              return this.pi(e), !1;
            }
            case Kt.UPDATE_SETTINGS: {
              const e = t;
              return this.vi(e), !1;
            }
            case Kt.ON_REACTION: {
              const e = t;
              return this.yi(e), !1;
            }
            case Kt.ON_GIF: {
              const e = t;
              return this.fi(e), !1;
            }
            case Kt.USER_LIST: {
              const e = t;
              return this.mi(e), !1;
            }
            case Kt.ON_WEB_RTC:
              return this.tt.onWebRTC(t.data), !0;
            case Jt.SET_CHAT_VISIBLE: {
              const e = t;
              return this.Ci(e.data), i(), !1;
            }
            case bt.SIDEBAR_MESSAGING_READY: {
              console.log("Sidebar Ready");
              const t = null === (n = window.teleparty) || void 0 === n ? void 0 : n.tabId;
              return console.log(t), this.tt.setChatFrameReady(null != t ? t : 0), i(), !0;
            }
            case bt.DISPLAY_MODAL: {
              const e = t.data;
              return console.log(e), !0;
            }
            case bt.ON_UPDATE_SETTINGS: {
              const e = t.data;
              return this.tt.doUpdateSettings(e), i(), !0;
            }
            case bt.ON_CHROME_STORAGE_UPDATE:
              try {
                chrome.storage.local.set(t.data);
              } catch (t) {
                console.log("Failed to update chrome storage");
              }
              return i(), !0;
            case bt.SET_REACTIONS_ACTIVE: {
              const e = t.data;
              return this.tt.setReactionsActive(e), i(), !0;
            }
            case bt.RESET_VIEW:
              return this.tt.resetChatWindow(!0), i(), !0;
            case bt.ON_FOCUS:
              return this.tt.onSidebarFocus(), i(), !0;
            case bt.PREVIEW_REACTION: {
              const e = t.data;
              return this.tt.showReaction(e), i(), !0;
            }
            case "onUpdateSettings": {
              const e = t.data;
              return this.tt.doUpdateSettings(e), i(), !0;
            }
            default:
              return !1;
          }
        }
        teardown() {
          this.tt.teardown();
        }
        Ci(t) {
          return ee(this, void 0, void 0, function* () {
            this.tt.isPartyWindowsActive()
              ? t.visible
                ? yield this.tt.resetChatWindow()
                : yield this.tt.hideChatWindow()
              : (yield this.tt.setChatVisible(t.visible), this.tt.fixPageControls());
          });
        }
        li(t) {
          const e = t.sessionCallbackData.sessionId,
            i = `${u}/join/${e}`;
          if (
            (this.tt.loadInitData(t),
            this.tt.setPartyUrl(i),
            this.tt.setSessionId(e),
            this.tt.Oe(t.storageData),
            this.ye.onInitChat(),
            this.tt.setSessionCreated(t.isCreate),
            this.tt.sendInitDataToSidebar(t),
            t.sessionCallbackData.userList && this.tt.loadUserList(t.sessionCallbackData.userList),
            t.showReviewMessage && this.tt.addReviewMessage(),
            !t.isCreate)
          )
            for (const e of t.sessionCallbackData.messages) "gifObject" in e ? this.tt.addGif(e) : this.tt.addMessage(e, !0);
        }
        Y(t) {
          this.tt.addMessage(t.data);
        }
        yi(t) {
          this.tt.showReaction(t.data);
        }
        fi(t) {
          this.tt.addGif(t.data);
        }
        Fi(t) {
          this.tt.onBufferingMessage(t.data);
        }
        gi(t) {
          this.tt.onTypingMessage(t.data);
        }
        pi(t) {
          this.tt.onWatchingAdsMessage(t.data);
        }
        vi(t) {
          this.tt.onUpdateSettingsMessage(t.data);
        }
        mi(t) {
          this.tt.loadUserList(t.data.userList), this.tt.setSocketConnectionId(t.data.socketConnectionId);
        }
      }
      !(function (t) {
        (t.UPDATE_SESSION = "updateSession"),
          (t.NEXT_EPISODE = "nextEpisode"),
          (t.REBOOT_SESSION = "rebootSession"),
          (t.GET_SERVER_TIME = "getServerTime"),
          (t.RELOAD_PARTY = "reloadParty");
      })(te || (te = {}));
      class ne extends nt {
        constructor(t, e, i) {
          super(t, e, tt.BROADCAST), (this.data = i);
        }
      }
      class se extends _ {
        constructor(t, e, i) {
          super(t, e, i), (this.type = i);
        }
      }
      class ue extends se {
        constructor(t, e) {
          super(t, e, te.GET_SERVER_TIME);
        }
      }
      class oe extends nt {
        constructor(t, e, i) {
          super(t, e, tt.BROADCAST_NEXT_EPISODE), (this.data = i);
        }
      }
      class re extends nt {
        constructor(t, e, i) {
          super(t, e, tt.SET_BUFFERING), (this.data = i);
        }
      }
      class ce extends nt {
        constructor(t, e, i) {
          super(t, e, tt.SET_WATCHING_ADS), (this.data = i);
        }
      }
      const ae = "PING",
        De = "SYNC",
        he = "BROADCAST";
      class de extends b {
        constructor(t, e, i) {
          super(t, e, y.STAY_ALIVE), (this.data = i);
        }
      }
      var le = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              c(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              c(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function c(t) {
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
          c((n = n.apply(t, e || [])).next());
        });
      };
      const Fe = new (class {
        getRedirectDataForTabAsync(t) {
          return le(this, void 0, void 0, function* () {
            const e = (yield gt.getItemsAsync([D])).redirectDataMap,
              i = this.Ei(t);
            if (e && e[i]) {
              const t = e[i];
              if (this.wi(t)) return t;
            }
          });
        }
        deleteRedirectDataForTabAsync(t) {
          return le(this, void 0, void 0, function* () {
            const e = (yield gt.getItemsAsync([D])).redirectDataMap,
              i = this.Ei(t);
            e && e[i] && delete e[i], yield Z.setItemsAsync({ [D]: e });
          });
        }
        Ei(t) {
          return t;
        }
        storeRedirectDataForTabAsync(t, e) {
          return le(this, void 0, void 0, function* () {
            console.log("store data for tab " + t);
            const i = this.Ei(e);
            let n = yield gt.getItemsAsync([D]);
            (n[i] = t), (n = this._i(n)), yield Z.setItemsAsync({ [D]: n });
          });
        }
        _i(t) {
          return (function (t, e) {
            const i = {};
            let n;
            for (n in t) t.hasOwnProperty(n) && e(t[n]) && (i[n] = t[n]);
            return i;
          })(t, this.wi);
        }
        wi(t) {
          const e = t.date;
          return void 0 !== e && "number" == typeof e && e <= Date.now() && Date.now() - e < 108e5;
        }
      })();
      Object.freeze(Fe);
      const ge = Fe;
      var pe = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              c(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              c(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function c(t) {
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
          c((n = n.apply(t, e || [])).next());
        });
      };
      class ve {
        constructor(t, e, i) {
          (this.bi = []),
            (this.ji = 0),
            (this.Bi = 0),
            (this.Ai = []),
            (this.ki = !1),
            (this.Jt = !1),
            (this.g = !1),
            (this.Qi = !1),
            (this.Ii = void 0),
            (this.xi = () =>
              pe(this, void 0, void 0, function* () {
                try {
                  yield fetch("https://www3.doubleclick.net", { method: "HEAD", mode: "no-cors", cache: "no-store" }), (this.Ii = !1);
                } catch (t) {
                  this.Ii = !0;
                }
              })),
            (this.Si = (t = !1, e = !1) =>
              pe(this, void 0, void 0, function* () {
                if (this.Ti) return;
                if (this.g) return void this.forceSync();
                if (!this.Qi && !e) return;
                const i = yield this.Mi();
                if (yield this.Pi(i.data, e)) yield this.$i(i);
                else if (t) {
                  if (yield this.Ri(e)) {
                    const t = yield this.Mi();
                    yield this.$i(t);
                  }
                }
              })),
            (this.Vi = () =>
              pe(this, void 0, void 0, function* () {
                if (
                  (this.Oi == l.PAUSED &&
                    this.Gi &&
                    (clearInterval(this.Gi),
                    (this.Gi = setInterval(() => {
                      this.Ni();
                    }, 6e4))),
                  this.Ui())
                )
                  return;
                if ((yield this.Li.waitVideoDoneLoadingAsync(), this.Ui())) return;
                const t = yield this.Li.getStateAsync();
                this.Oi == l.PAUSED ? yield this.Hi(t) : this.Oi == l.PLAYING && (yield this.Wi(t)), !1 === this.Qi && (this.Qi = !0);
              })),
            (this.Li = t),
            (this.tt = e),
            (this.B = i),
            this.B.setMessageForwarder(this),
            (this.zi = 0),
            (this.Ti = !1),
            (this.Oi = l.PAUSED),
            (this.Ji = 0),
            (this.Ki = 0),
            (this.Yi = 0),
            (this.qi = this.Li.getStreamingServiceName()),
            I("Video forwarder"),
            this.xi();
        }
        onMessage(t, e, i) {
          switch (t.type) {
            case y.GET_VIDEO_DATA:
              return this.Xi(i), !0;
            case y.LOAD_SESSION: {
              const e = t;
              return this.Zi(e.data), !1;
            }
            case te.UPDATE_SESSION: {
              const e = t;
              return this.tn(e.data), !1;
            }
            case te.NEXT_EPISODE: {
              const e = t;
              return this.en(e.data), !1;
            }
            case te.REBOOT_SESSION: {
              const e = t;
              return this.nn(e.data, i), !0;
            }
            case te.RELOAD_PARTY:
              return this.reloadPartyAsync().then(() => console.log("Party Reloaded")), !0;
            case Kt.ON_WATCHING_ADS: {
              const e = t;
              return this.pi(e), !1;
            }
            default:
              return !1;
          }
        }
        pi(t) {
          t.data.anyoneWatchingAds && !this.Jt && (dt.pushTask(this.Li.doAdCheck.bind(this.Li)), this.forceSync()),
            (this.Jt = t.data.anyoneWatchingAds);
        }
        get videoId() {
          return this.sn;
        }
        set videoId(t) {
          this.sn = t;
        }
        sendTeardown(t) {
          const e = new rt(k, B, t);
          S.l(e);
        }
        teardown() {
          (this.ee = void 0),
            this.un && clearInterval(this.un),
            this.Gi && clearInterval(this.Gi),
            this.Li.pause(),
            dt.disable(),
            this.B.stopListening();
        }
        nn(t, e) {
          dt.resetTasks(), this.sn == t.videoId && this.tn(t), e(this.sn == t.videoId);
          const i = new j(k, B, { eventType: "reboot", sessionId: this.ee });
          S.l(i);
        }
        tryBroadcast(t = !1) {
          this.ki ||
            (this.g
              ? this.forceSync()
              : 0 != this.Li.uiEventsHappening || this.Ti || !this.ee || dt.hasTaskInQueue(he) || dt.pushTask(() => this.Si(t), he));
        }
        setBuffering(t) {
          if (this.ee) {
            const e = new re(k, B, { buffering: t });
            S.l(e);
          }
        }
        isWatchingAds() {
          return this.ki;
        }
        setWatchingAds(t, e) {
          if (this.ee) {
            this.ki = t;
            const i = new ce(k, B, { watchingAds: t, adDurationLeft: e });
            S.l(i);
          }
        }
        sendNextEpisodeAsync(t) {
          return pe(this, void 0, void 0, function* () {
            if (this.ee && t !== this.sn && t !== this.on) {
              (this.on = t), (this.Ti = !0);
              const e = new oe(k, B, { nextEpisode: t }),
                i = yield S.l(e);
              i && "Locked Session" === i.errorMessage && (yield this.rn(t));
            }
          });
        }
        rn(t) {
          return pe(this, void 0, void 0, function* () {
            try {
              yield C(() => t == this.sn, 1e4)(), (this.Ti = !1);
            } catch (t) {
              this.Ae("An error has occured when trying to wait till the episode changed videos");
              const e = { showAlert: !0, alertModal: Tt };
              this.sendTeardown(e);
            }
          });
        }
        Pi(t, e) {
          return pe(this, void 0, void 0, function* () {
            if (null == t.lastKnownTime || null == t.lastKnownTimeUpdatedAt || null == t.state) return !1;
            if (e && t.state === l.PAUSED && t.lastKnownTime < It) return !1;
            const i = Math.abs(t.lastKnownTime - this.cn());
            if (t.state == this.Oi && i < It) return !1;
            if (i >= It) {
              const t = new j(k, B, { name: "video_seek", action: { source: "self" } });
              S.l(t), this.qi == F.AMAZON || this.qi == F.PARAMOUNT ? yield m(200)() : this.qi == F.HBO_MAX && (yield m(500)());
            }
            return !0;
          });
        }
        Mi() {
          return pe(this, void 0, void 0, function* () {
            const t = yield this.Li.getUpdateSessionDataAsync();
            (t.lastKnownTimeUpdatedAt -= this.Bi), (t.lastKnownTime = Math.round(t.lastKnownTime));
            return new ne(k, B, t);
          });
        }
        forceSync() {
          dt.pushTask(this.Vi, De);
        }
        en(t) {
          return pe(this, void 0, void 0, function* () {
            (this.zi = Date.now()), dt.pushTask(() => this.an(t));
          });
        }
        an(t) {
          return pe(this, void 0, void 0, function* () {
            try {
              I("Continue next episode called"),
                (this.Ti = !0),
                yield this.Li.jumpToNextEpisode(t),
                yield this.B.loadNewVideoAsync(t.videoId),
                I("After load new video"),
                this.B.reloadListeners(),
                this.Yi < this.zi &&
                  ((this.Oi = l.PAUSED),
                  (this.Ji = 0),
                  (this.Ki = Date.now()),
                  I("Sending broadcast after next episode"),
                  dt.pushTask(() => this.Si(!0, !0), he),
                  dt.removeTask(De)),
                (this.sn = t.videoId),
                (this.Ti = !1);
              const e = new j(k, B, { name: "video_start", action: { description: "video session has begun" } });
              S.l(e);
            } catch (t) {
              this.Ae("Error loading new video."), console.log("Error was", t), yield this.reloadPartyAsync();
            }
          });
        }
        persistExtension(t) {
          var e, i;
          return pe(this, void 0, void 0, function* () {
            console.log("persist here");
            const n = null !== (i = null === (e = window.teleparty) || void 0 === e ? void 0 : e.tabId) && void 0 !== i ? i : 0,
              s = new de(k, B, { tabId: n, persist: t });
            S.l(s);
            const u = yield this.Dn();
            (u.date = Date.now()), ge.storeRedirectDataForTabAsync(u, n);
          });
        }
        reloadPartyAsync() {
          var t, e;
          return pe(this, void 0, void 0, function* () {
            try {
              console.log("Reloading party");
              const i = yield this.Dn();
              i.date = Date.now();
              const n = yield this.hn(i),
                s = null !== (e = null === (t = window.teleparty) || void 0 === t ? void 0 : t.tabId) && void 0 !== e ? e : 0,
                u = new de(k, B, { tabId: s, persist: !1 });
              yield S.l(u), yield ge.storeRedirectDataForTabAsync(i, s), console.log("Redirect URL is", n), (window.location.href = n);
            } catch (t) {
              console.log("Error reloading party", t), this.Ae("Failed to fix next episode.");
              const e = new rt(k, B, { showAlert: !0, alertModal: Pt });
              S.l(e);
            }
          });
        }
        Dn() {
          return pe(this, void 0, void 0, function* () {
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
                      e(t), this.Ae("Unable to get video endpoint data to reload session");
                    }
                }),
                i.open("GET", "https://api.teleparty.com/video?session=" + this.ee, !0),
                i.send(null);
            });
          });
        }
        mapToParamountType(t) {
          return "episode" === t ? "shows" : "feature" === t ? "movies" : "live" === t ? "live-tv" : "none";
        }
        hn(t) {
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
        tn(t) {
          (this.Yi = Date.now()), dt.pushTask(this.dn(t).bind(this));
        }
        dn(t) {
          if (t.state === l.PAUSED && this.Oi === l.PLAYING) {
            this.Ni();
            const t = new j(k, B, {
              name: "video_pause",
              action: { description: "video was played from pause", reason: "Video was played" }
            });
            S.l(t);
          } else if (t.state === l.PLAYING && this.Oi === l.PAUSED) {
            const t = new j(k, B, {
              name: "video_resume",
              action: { description: "video was played from pause", reason: "Video was played" }
            });
            S.l(t), this.Ni();
          }
          return (this.Oi = t.state), (this.Ji = t.lastKnownTime), (this.Ki = t.lastKnownTimeUpdatedAt), this.Vi;
        }
        Xi(t) {
          var e;
          return pe(this, void 0, void 0, function* () {
            try {
              const e = yield this.Li.getVideoDataAsync(),
                i = yield this.Li.getStateAsync();
              (e.is_player_fullscreen = null != document.fullscreenElement || document.webkitIsFullScreen),
                (e.is_chat_visible = this.tt.getChatVisible()),
                (e.is_adblock_enabled = this.Ii),
                (e.video_ts_ms = Math.round(i.playbackPositionMilliseconds)),
                (e.party_ts_ms = this.Ji),
                t(e);
            } catch (i) {
              this.Ae(null !== (e = i.message) && void 0 !== e ? e : "Unable to send video data"), t({ error: i });
            }
          });
        }
        Ae(t) {
          const e = new j(k, B, {
            name: "video_error",
            action: { description: t, reason: "An errors has occurred during video playback" }
          });
          S.l(e);
        }
        Ri(t) {
          return pe(this, void 0, void 0, function* () {
            return new Promise((e) => {
              const i = performance.now(),
                n = () =>
                  pe(this, void 0, void 0, function* () {
                    if (performance.now() - i >= 2500) e(!1);
                    else {
                      const i = yield this.Mi();
                      (yield this.Pi(i.data, t))
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
        $i(t) {
          return pe(this, void 0, void 0, function* () {
            if (this.Ti || this.ki) return;
            const e = this.Oi;
            if (t.data.bufferingState) {
              (t.data.state = l.PAUSED), yield S.l(t, 1e3), yield this.Li.waitVideoDoneLoadingAsync();
              const i = yield this.Mi();
              (i.data.bufferingState = !0), e == l.PLAYING && (i.data.state = l.PLAYING), yield S.l(i, 1e3);
            } else yield S.l(t, 1e3);
          });
        }
        Zi(t) {
          return pe(this, void 0, void 0, function* () {
            const e = t.sessionCallbackData;
            (this.ee = e.sessionId),
              (this.Oi = e.state),
              (this.Ji = Number(e.lastKnownTime)),
              (this.Ki = Number(e.lastKnownTimeUpdatedAt)),
              (this.sn = e.videoId),
              (this.Jt = !1),
              "true" == e.controlLock && (this.g = !0),
              t.isCreate ? ((this.Qi = !0), dt.pushTask(this.Si.bind(this), he)) : this.forceSync();
            const i = new j(k, B, { name: "video_start", action: { description: "video session has begun" } });
            S.l(i), this.B.startListening(), this.ln();
          });
        }
        Fn() {
          return new Promise((t) => {
            const e = new ue(k, B),
              i = Date.now();
            S.l(e)
              .then((t) => {
                const e = Date.now();
                if (t) {
                  const n = t.serverTime;
                  n &&
                    (E(this.bi, e - i, 5), (this.ji = w(this.bi)), E(this.Ai, e - Math.round(this.ji / 2) - n, 5), (this.Bi = w(this.Ai)));
                }
              })
              .catch((t) => {
                I(t), this.Ae(t);
              }),
              t();
          });
        }
        Ni() {
          const t = new j(k, B, { name: "video_heartbeat", action: { description: "new heartbeat", reason: "Heartbeat session was due" } });
          S.l(t);
        }
        ln() {
          this.un && clearInterval(this.un),
            this.Gi && clearInterval(this.Gi),
            (this.un = setInterval(() => {
              dt.hasTaskInQueue(De) || dt.pushTask(this.Vi, De);
            }, 5e3)),
            (this.Gi = setInterval(() => {
              this.Ni();
            }, 6e4)),
            (this.gn = setInterval(() => {
              dt.hasTaskInQueue(ae) || dt.pushTask(this.Fn.bind(this), ae);
            }, 12500)),
            this.Fn();
        }
        Ui() {
          return !this.ee || this.Li.uiEventsHappening > 0 || this.ki || this.Ti || !this.B.shouldSync();
        }
        Hi(t) {
          return pe(this, void 0, void 0, function* () {
            const { playbackState: e, playbackPositionMilliseconds: i } = t;
            if ((e !== g.PAUSED && (yield this.Li.pause()), Math.abs(this.Ji - i) > 2500)) {
              yield this.Li.setCurrentTime(this.Ji);
              const t = new j(k, B, { name: "video_seek", action: { source: "another user" } });
              S.l(t);
            }
          });
        }
        Wi(t) {
          return pe(this, void 0, void 0, function* () {
            const { playbackState: e, playbackPositionMilliseconds: i } = t,
              n = this.cn();
            if ((e == g.PAUSED && (yield this.Li.play()), Math.abs(n - i) > 2500)) {
              yield this.Li.setCurrentTime(n), yield this.Li.play();
              const t = new j(k, B, { name: "video_seek", action: { source: "another user" } });
              S.l(t);
            }
          });
        }
        pn() {
          return this.Oi === l.PLAYING ? Date.now() - (this.Ki + this.Bi) : 0;
        }
        cn() {
          return this.Ji + this.pn();
        }
        get changingVideo() {
          return this.Ti;
        }
        set changingVideo(t) {
          this.Ti = t;
        }
      }
      i(5640);
      var ye = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              c(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              c(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function c(t) {
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
          c((n = n.apply(t, e || [])).next());
        });
      };
      var fe = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              c(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              c(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function c(t) {
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
          c((n = n.apply(t, e || [])).next());
        });
      };
      var me = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              c(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              c(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function c(t) {
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
          c((n = n.apply(t, e || [])).next());
        });
      };
      class Ce extends class {
        constructor(t) {
          (this.Li = t), console.log("Video Event Listener");
        }
        getCurrentStatus() {
          return fe(this, void 0, void 0, function* () {
            return "";
          });
        }
        getStatusMetaData() {
          return fe(this, void 0, void 0, function* () {});
        }
        reloadNextEpisode() {
          var t;
          return fe(this, void 0, void 0, function* () {
            yield null === (t = this.Ke) || void 0 === t ? void 0 : t.reloadPartyAsync();
          });
        }
        startListening() {
          this.vn();
        }
        stopListening() {
          this.yn();
        }
        vn() {
          const t = navigator;
          t.mediaSession.setActionHandler("play", () =>
            fe(this, void 0, void 0, function* () {
              this.mn(), this.Li.play(), console.log("Bluetooth device played the video");
            })
          ),
            t.mediaSession.setActionHandler("pause", () =>
              fe(this, void 0, void 0, function* () {
                this.mn(), this.Li.pause(), console.log("Bluetooth device paused the video");
              })
            );
        }
        yn() {
          const t = navigator;
          t.mediaSession.setActionHandler("play", null), t.mediaSession.setActionHandler("pause", null);
        }
        Cn() {
          var t;
          null === (t = this.Ke) || void 0 === t || t.tryBroadcast(!1);
        }
        mn() {
          var t;
          console.log("Going to wait for change"), null === (t = this.Ke) || void 0 === t || t.tryBroadcast(!0);
        }
        En() {
          var t;
          null === (t = this.Ke) || void 0 === t || t.setBuffering(!0);
        }
        wn(t) {
          var e;
          null === (e = this.Ke) || void 0 === e || e.setWatchingAds(!0, t);
        }
        _n() {
          var t, e;
          null === (t = this.Ke) || void 0 === t || t.setWatchingAds(!1), null === (e = this.Ke) || void 0 === e || e.forceSync();
        }
        bn() {
          var t;
          null === (t = this.Ke) || void 0 === t || t.setBuffering(!1);
        }
        jn(t) {
          var e;
          null === (e = this.Ke) || void 0 === e || e.sendNextEpisodeAsync(t);
        }
        Bn(t) {
          var e;
          null === (e = this.Ke) || void 0 === e || e.sendTeardown(t);
        }
        setMessageForwarder(t) {
          this.Ke = t;
        }
        shouldSync() {
          return !0;
        }
      } {
        constructor(t, e) {
          var i;
          super(t),
            (this.An = this.Cn.bind(this)),
            (this.kn = this.Qn.bind(this)),
            (this.In = this.xn.bind(this)),
            (this.Sn = this.Tn.bind(this)),
            (this.Mn = this.Pn.bind(this)),
            (this.Li = t),
            (this.tt = e),
            (this.$n = 0),
            this.Li.setVideoEventListener(this),
            (null === (i = window.teleparty) || void 0 === i ? void 0 : i.injectScriptLoaded) ||
              (function (t) {
                const e = document.createElement("script");
                e.setAttribute("tpInjected", ""), (e.src = t), (document.head || document.documentElement).appendChild(e), e.remove();
              })(chrome.extension.getURL("content_scripts/appletv/appletv_injected_bundled.js"));
        }
        featureReferenceIdToShowType(t) {
          switch (t.split(".")[3]) {
            case "mv":
              return "movie";
            case "ep":
              return "episode";
            case "sp":
              return "sporting-event";
            default:
              return;
          }
        }
        Rn(t, e) {
          const i = this.featureReferenceIdToShowType(e),
            n = `${i}/${t}`,
            s = this.Vn;
          return console.log("Updating video ID to " + n), void 0 !== i && s !== n && ((this.Vn = n), void 0 !== s);
        }
        On() {
          return document.querySelector(".close-button.video-player__close");
        }
        Qn() {
          this.Bn(Ot);
        }
        Gn() {
          const t = document.getElementById("teleparty-appletv-id-container");
          if (t) {
            const e = t.getAttribute("data-canonical-id"),
              i = t.getAttribute("data-feature-reference-id");
            console.log("Updating video ID from injected element, canonicalId: " + e + ", featureReferenceId: " + i),
              e && i && this.Rn(e, i);
          }
        }
        xn(t) {
          if ((console.log("Received message"), t.source === window && "idDetected" === t.data.type)) {
            console.log("Detected video ID");
            const e = t.data.canonicalId,
              i = t.data.featureReferenceId;
            this.Rn(e, i) && (this.jn(this.Vn), (window.location.href = `https://tv.apple.com/${this.Vn}`));
          }
        }
        Pn() {
          (this.$n = Date.now()), this.An();
        }
        Tn() {
          this.An();
        }
        getCachedVideoId() {
          return this.Vn;
        }
        getLastSeekRequestedTime() {
          return this.$n;
        }
        reloadListeners() {
          this.stopListening(), this.startListening();
        }
        stopListening() {
          super.stopListening();
          const t = this.Li.getVideoElement(),
            e = this.On();
          t && (t.removeEventListener("play", this.Sn), t.removeEventListener("pause", this.Sn), t.removeEventListener("seeking", this.Mn)),
            e && e.removeEventListener("click", this.kn),
            window.removeEventListener("message", this.In, !1);
        }
        startListening() {
          var t;
          super.startListening(), this.Gn();
          const e = this.Li.getVideoElement();
          null === (t = this.Ke) || void 0 === t || t.persistExtension(!0);
          const i = this.On();
          e && (e.addEventListener("play", this.Sn), e.addEventListener("pause", this.Sn), e.addEventListener("seeking", this.Mn)),
            i && i.addEventListener("click", this.kn),
            window.addEventListener("message", this.In, !1);
        }
        loadNewVideoAsync(t) {
          return me(this, void 0, void 0, function* () {
            const e = performance.now();
            yield new Promise((i, n) => {
              const s = setInterval(() => {
                if (this.Li.getVideoId() === t) {
                  if (this.Li.getVideoElement() instanceof Element) return this.tt.reloadChat(), clearInterval(s), void i();
                }
                performance.now() - e >= 2e4 && (clearInterval(s), n(new Error("Could not load new video in time.")));
              }, 100);
            }),
              yield this.Li.waitVideoDoneLoadingAsync();
          });
        }
      }
      var Ee = i(4296),
        we = i.n(Ee);
      class _e extends _ {
        constructor(t, e, i) {
          super(t, e, i), (this.type = i);
        }
      }
      class be extends _e {
        constructor(t, e, i) {
          super(t, e, Jt.CREATE_SESSION), (this.data = i);
        }
      }
      class je {
        constructor(t, e, i, n, s, u = []) {
          (this.requiredPermissions = t),
            (this.serverName = i),
            (this.name = n),
            (this.contentScripts = e),
            (this.syncFromEnd = s),
            (this.browseScripts = u);
        }
        urlWithSessionId(t) {
          return `${u}/join/${t}`;
        }
      }
      const Be = new (class extends je {
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
      })([], ["content_scripts/netflix/netflix_content_bundled.js"], "netflix", F.NETFLIX, !1);
      Object.freeze(Be);
      const Ae = Be;
      const ke = new (class extends je {
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
      })([], ["content_scripts/hulu/hulu_content_bundled.js"], "hulu", F.HULU, !1);
      Object.freeze(ke);
      const Qe = ke;
      const Ie = new (class extends je {
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
      })([], ["content_scripts/disney/disney_content_bundled.js"], "disney", F.DISNEY_PLUS, !1, [
        "browse_scripts/disney/disney_browse_bundled.js"
      ]);
      Object.freeze(Ie);
      const xe = Ie;
      const Se = new (class extends je {
        isValidUrl(t) {
          return (function (t) {
            return (t.hostname.includes(".hbomax.") && "other" !== f(t.pathname)) || t.pathname.includes("urn:hbo:page");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".hbomax.");
        }
        getVideoId(t) {
          const e = "urn:hbo:" + f(t.pathname) + ":",
            i = t.pathname.split(e);
          let n = null != i && i.length > 1 && null != i[1] ? i[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : null;
          const s = null != n && 0 !== n.length ? i[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : void 0;
          let u = s && s.length > 0 ? s[1] : void 0;
          return u || ((n = t.pathname.match(/(page:)([a-zA-Z\-_0-9]+)\??.*/)), (u = null != n && 3 == n.length ? n[2] : void 0)), u;
        }
        getVideoType(t) {
          return f(t.pathname);
        }
      })([], ["content_scripts/hbo_max/hbo_max_content_bundled.js"], "hbomax", F.HBO_MAX, !1);
      Object.freeze(Se);
      const Te = Se;
      const Me = new (class extends je {
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
      })([], ["content_scripts/amazon/amazon_content_bundled.js"], "amazon", F.AMAZON, !1);
      Object.freeze(Me);
      const Pe = Me;
      const $e = new (class extends je {
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
      })([], ["content_scripts/crunchyroll/crunchyroll_content_bundled.js"], "crunchyroll", F.CRUNCHYROLL, !1);
      Object.freeze($e);
      const Re = $e;
      const Ve = new (class extends je {
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
      })([], ["content_scripts/youtube/youtube_content_bundled.js"], "youtube", F.YOUTUBE, !1);
      Object.freeze(Ve);
      const Oe = Ve;
      const Ge = new (class extends je {
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
      })([], ["content_scripts/espn/espn_content_bundled.js"], "espn", F.ESPN, !1);
      Object.freeze(Ge);
      const Ne = Ge;
      const Ue = new (class extends je {
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
      })([], ["content_scripts/paramount/paramount_content_bundled.js"], "paramount", F.PARAMOUNT, !1);
      Object.freeze(Ue);
      const Le = Ue;
      const He = new (class extends je {
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
      })([], ["content_scripts/hotstar/hotstar_content_bundled.js"], "hotstar", F.HOTSTAR, !1);
      Object.freeze(He);
      const We = He;
      const ze = new (class extends je {
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
      })([], ["content_scripts/peacock/peacock_content_bundled.js"], "peacock", F.PEACOCK, !1);
      Object.freeze(ze);
      const Je = ze;
      const Ke = new (class extends je {
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
      })([], ["content_scripts/funimation/funimation_content_bundled.js"], "funimation", F.FUNIMATION, !1);
      Object.freeze(Ke);
      const Ye = Ke;
      const qe = new (class extends je {
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
      })([], ["content_scripts/max/max_content_bundled.js"], "max", F.MAX, !1);
      Object.freeze(qe);
      const Xe = qe;
      const Ze = new (class extends je {
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
      })([], ["content_scripts/starplus/starplus_content_bundled.js"], "starplus", F.STAR_PLUS, !1);
      Object.freeze(Ze);
      const ti = Ze;
      const ei = new (class extends je {
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
      })([], ["content_scripts/plutotv/plutotv_content_bundled.js"], "plutotv", F.PLUTO_TV, !1);
      Object.freeze(ei);
      const ii = ei;
      const ni = new (class extends je {
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
      })([], ["content_scripts/appletv/appletv_content_bundled.js"], "appletv", F.APPLE_TV, !1);
      Object.freeze(ni);
      const si = ni;
      const ui = new (class extends je {
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
      })([], ["content_scripts/jio_cinema/jio_cinema_content_bundled.js"], "jiocinema", F.JIO_CINEMA, !1);
      Object.freeze(ui);
      const oi = ui;
      const ri = new (class extends je {
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
      })([], ["content_scripts/tubitv/tubitv_content_bundled.js"], "tubitv", F.TUBI_TV, !1);
      Object.freeze(ri);
      const ci = ri;
      const ai = new (class extends je {
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
      })([], ["content_scripts/crave/crave_content_bundled.js"], "crave", F.CRAVE, !1);
      Object.freeze(ai);
      const Di = ai;
      const hi = new (class extends je {
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
      })([], ["content_scripts/mubi/mubi_content_bundled.js"], "mubi", F.MUBI, !1);
      Object.freeze(hi);
      const di = hi;
      const li = new (class extends je {
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
      })([], ["content_scripts/stan/stan_content_bundled.js"], "stan", F.STAN, !1);
      Object.freeze(li);
      const Fi = li;
      const gi = new (class extends je {
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
      })([], ["content_scripts/sling/sling_content_bundled.js"], "slingtv", F.SLING, !1);
      Object.freeze(gi);
      const pi = gi;
      const vi = new (class extends je {
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
      })([], ["content_scripts/disneymena/disneymena_content_bundled.js"], "disneymena", F.DISNEY_PLUS_MENA, !1);
      Object.freeze(vi);
      const yi = vi;
      class fi {
        constructor(t, e) {
          (this.isBrowsing = !1), (this.needsCSPBlock = !1), (this.id = e), this.videoId, (this.url = t);
          const i = [si],
            n = [Ae, Qe, xe, Te, Pe, Oe, Re, Ne, Le, We, Je, ti, Xe, Ye, si, ii, oi, ci, di, Fi, Di, pi, yi];
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
      class mi extends _e {
        constructor(t, e, i) {
          super(t, e, Jt.RE_INJECT), (this.data = i);
        }
      }
      var Ci = function (t, e, i, n) {
        return new (i || (i = Promise))(function (s, u) {
          function o(t) {
            try {
              c(n.next(t));
            } catch (t) {
              u(t);
            }
          }
          function r(t) {
            try {
              c(n.throw(t));
            } catch (t) {
              u(t);
            }
          }
          function c(t) {
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
          c((n = n.apply(t, e || [])).next());
        });
      };
      var Ei,
        wi = function (t, e, i, n) {
          return new (i || (i = Promise))(function (s, u) {
            function o(t) {
              try {
                c(n.next(t));
              } catch (t) {
                u(t);
              }
            }
            function r(t) {
              try {
                c(n.throw(t));
              } catch (t) {
                u(t);
              }
            }
            function c(t) {
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
            c((n = n.apply(t, e || [])).next());
          });
        };
      class _i extends class {
        constructor(t) {
          var e, i, n;
          (this.Nn = !1),
            (this.Un = !1),
            (this.Ln = !1),
            (this.Hn = 0),
            (this.Wn = !1),
            (this.zn = !1),
            (this.Jn = !1),
            (this.checkShowMenu = () => {
              this.shouldMenuBeVisible() ? this.Kn() : this.Yn();
            }),
            console.log("Teleparty Browse Loaded " + (null === (e = window.teleparty) || void 0 === e ? void 0 : e.tabId)),
            (this.qn = new fi(
              new URL(window.location.href),
              null !== (n = null === (i = window.teleparty) || void 0 === i ? void 0 : i.tabId) && void 0 !== n ? n : 0
            )),
            (this.Xn = t),
            this.Xn.setPageControls(this);
        }
        setChatApi(t) {
          (this.Xn = t), this.Xn.setPageControls(this);
        }
        Zn() {
          jQuery("#tp-control-lock-button .tooltiptext").text(this.Ln ? "Only I have control" : "Everyone has control"),
            this.Ln
              ? (jQuery("#tp-unlocked-image").addClass("hidden"), jQuery("#tp-locked-image").removeClass("hidden"))
              : (jQuery("#tp-unlocked-image").removeClass("hidden"), jQuery("#tp-locked-image").addClass("hidden"));
        }
        ts() {
          this.Un || ((this.Ln = !this.Ln), this.Zn());
        }
        setResetChatButton() {
          this.Xn.getChatWindowVisible()
            ? (jQuery("#tp-chat-button .tooltiptext").text("Reset View"),
              this.Xn.shouldReturnToVideo && jQuery("#tp-chat-button .tooltiptext").text("Return to Video"),
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
        es() {
          jQuery("#tp-chat-hidden").addClass("hidden"),
            this.Xn.isPartyWindowsActive()
              ? (this.setResetChatButton(), jQuery("#tp-message-indicator").removeClass("hidden"))
              : (jQuery("#tp-message-indicator").removeClass("hidden"),
                jQuery("#tp-chat-button .tooltiptext").text(`${this.Hn} unread ${1 == this.Hn ? "message" : "messages"}`),
                jQuery("#tp-chat-gray").removeClass("hidden"),
                jQuery("#tp-chat-reset").addClass("hidden"),
                jQuery("#tp-chat-button .tp-hover-image").removeClass("hidden"));
        }
        hideMessageIndicator() {
          jQuery("#tp-message-indicator").addClass("hidden"),
            this.Xn.isPartyWindowsActive()
              ? this.setResetChatButton()
              : (jQuery("#tp-chat-button .tp-hover-image").removeClass("hidden"),
                jQuery("#tp-chat-button .tooltiptext").text("Show chat"),
                jQuery("#tp-chat-gray").addClass("hidden"),
                jQuery("#tp-chat-hidden").removeClass("hidden"),
                jQuery("#tp-chat-reset").addClass("hidden"));
        }
        onChatMessage() {
          this.Xn.shouldChatBeVisible() ||
            this.Xn.isPartyWindowsActive() ||
            (this.Hn++,
            this.es(),
            (this.Wn = !0),
            this.Kn(),
            m(1e3)().then(() => {
              this.Wn = !1;
            }));
        }
        teardown() {
          this.ns(), this.Yn(), this.ss && clearInterval(this.ss);
        }
        us() {
          var t;
          return Ci(this, void 0, void 0, function* () {
            if (this.Un || this.Xn.inSession) return;
            if ((this.os(), (this.Un = !0), !(null === (t = window.teleparty) || void 0 === t ? void 0 : t.contentScriptInjected))) {
              console.log("Re injecting");
              const t = new mi(Q, B, { extensionTabData: this.qn });
              try {
                yield S.l(t);
              } catch (t) {
                return console.log(t), this.rs(), this.Ae(t), this.cs($), void (this.Un = !1);
              }
            }
            console.log("Sending create");
            const e = this.Ds();
            try {
              const t = yield S.l(e);
              t.error ? (this.cs(t.error.message), this.Ae(t.error.message)) : ((this.Un = !1), this.hs(), this.enablePartyIcons());
            } catch (t) {
              console.log(t), this.cs($), this.Ae(t);
            }
            this.rs(), (this.Un = !1);
          });
        }
        enablePartyIcons() {
          this.hideError(),
            jQuery("#tp-party-active").removeClass("hidden"),
            jQuery("#tp-party-inactive").addClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").addClass("hidden"),
            jQuery("#tp-icon-container").attr("style", "cursor: auto");
        }
        ns() {
          jQuery("#tp-party-active").addClass("hidden"),
            jQuery("#tp-party-inactive").removeClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").html("Open Teleparty"),
            jQuery("#tp-icon-container").removeClass("play-chat-active"),
            jQuery("#play-chat-icon").addClass("hidden"),
            jQuery("#tp-icon-white").removeClass("hidden");
        }
        Ae(t) {
          const e = new j(A, B, { name: "error", action: { description: "an error has occured", reason: t } });
          S.l(e);
        }
        cs(t) {
          jQuery("#tp-controls-error-text").text(t),
            jQuery("#tp-error-box").removeClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").addClass("hidden");
        }
        hideError() {
          jQuery("#tp-error-box").addClass("hidden");
        }
        ds(t) {
          return t
            .replace(/{EXTENSION_LOGO_WHITE}/g, K(chrome.runtime.getURL("img/icon_white.svg")))
            .replace(/{EXTENSION_LOGO_GRADIENT}/g, K(chrome.runtime.getURL("img/icon_gradient.svg")))
            .replace(/{PLAY_IMAGE}/g, K(chrome.runtime.getURL("img/play.svg")))
            .replace(/{UNLOCKED_IMAGE}/g, K(chrome.runtime.getURL("img/icon_remote_inactive.svg")))
            .replace(/{LOCKED_IMAGE}/g, K(chrome.runtime.getURL("img/icon_remote_active.svg")))
            .replace(/{ARROW_RIGHT}/g, K(chrome.runtime.getURL("img/arrow-right.svg")))
            .replace(/{LINK_IMAGE}/g, K(chrome.runtime.getURL("img/icon_link_active.svg")))
            .replace(/{LINK_ACTIVE_IMAGE}/g, K(chrome.runtime.getURL("img/icon_link_active.svg")))
            .replace(/{CHAT_HIDDEN_IMAGE}/g, K(chrome.runtime.getURL("img/icon_chat_inactive.svg")))
            .replace(/{CHAT_GRAY_IMAGE}/g, K(chrome.runtime.getURL("img/icon_chatgray_active.svg")))
            .replace(/{CHAT_ACTIVE_IMAGE}/g, K(chrome.runtime.getURL("img/icon_chat_active.svg")))
            .replace(/{DISCONNECT_IMAGE}/g, K(chrome.runtime.getURL("img/icon_logout_active.svg")))
            .replace(/{RESET_CHAT_IMAGE}/g, K(chrome.runtime.getURL("img/reset_chat.svg")));
        }
        Yn() {
          this.Wn || (this.hideError(), jQuery("#tpIconContainer").addClass("hidden"));
        }
        Kn() {
          return Ci(this, void 0, void 0, function* () {
            if (!this.zn && (this.Jn || this.Xn.inSession)) {
              this.zn = !0;
              try {
                yield this.addTpIcon(),
                  this.Xn.inSession ? this.enablePartyIcons() : this.ns(),
                  jQuery("#tpIconContainer").removeClass("hidden"),
                  this.setChatButtons();
              } finally {
                this.zn = !1;
              }
            }
          });
        }
        startEventListener() {
          this.ss = setInterval(this.checkShowMenu, 200);
        }
        stopEventListener() {
          this.ss && clearInterval(this.ss);
        }
        ls() {
          return "100px";
        }
        addTpIcon() {
          return Ci(this, void 0, void 0, function* () {
            if ((this.Jn || this.Xn.inSession) && 0 === jQuery("#tpIconContainer").length) {
              const t = this.ds(we()),
                e = yield this.getControlsRoot();
              e.length > 0 &&
                (e.append(
                  (function (t, e = "") {
                    return `\n    <link rel="stylesheet" href="${chrome.runtime.getURL(
                      "css/overlay.css"
                    )}">\n    <style>\n      ${e}\n    </style>\n    ${t}\n  `;
                  })(t)
                ),
                this.Fs());
            }
          });
        }
        Fs() {
          jQuery("#tp-control-lock-button").click(this.ts.bind(this)),
            jQuery("#tp-buttons-container").attr("style", `top:${this.ls()}`),
            jQuery("#tp-chat-close-button").attr("style", `top:${this.ls()}`),
            jQuery("#tp-error-box").attr("style", `top:${this.ls()}`),
            jQuery("#tp-link-button").click(this.gs.bind(this)),
            jQuery("#tp-chat-button").on("click", (t) => (this.ps(), t.stopImmediatePropagation(), t.stopPropagation(), !1)),
            jQuery("#tp-disconnect-button").on("click", () => {
              this.vs();
            });
        }
        vs() {
          const t = new rt(Q, B, Ot);
          S.l(t), this.Yn();
        }
        gs() {
          this.Xn.linkIconListener(),
            jQuery("#tp-link-button .tooltiptext").text("Link copied"),
            setTimeout(() => {
              jQuery("#tp-link-button .tooltiptext").text("Copy join link");
            }, 1e3);
        }
        ps() {
          return Ci(this, void 0, void 0, function* () {
            (this.Hn = 0),
              this.hideMessageIndicator(),
              this.Xn.isPartyWindowsActive()
                ? this.Xn.resetChatWindow(!0)
                : (this.Xn.shouldChatBeVisible(), yield this.Xn.setChatVisible(!this.Xn.shouldChatBeVisible()), this.setChatButtons());
          });
        }
        onInitChat() {
          this.Nn && this.Kn();
        }
        setChatButtons() {
          this.Xn.inSession && this.Xn.getChatVisible() ? this.hs() : this.ys(),
            this.Xn.isPartyWindowsActive() ? this.setResetChatButton() : this.hideMessageIndicator();
        }
        hs() {
          return Ci(this, void 0, void 0, function* () {
            this.Xn.inSession &&
              this.Xn.shouldChatBeVisible() &&
              (jQuery("#tp-chat-close-button").removeClass("hidden"), jQuery("#tp-buttons-container").addClass("hidden"));
          });
        }
        ys() {
          jQuery("#tp-chat-close-button").addClass("hidden"), jQuery("#tp-buttons-container").removeClass("hidden");
        }
        Ds() {
          return new be(Q, B, this.fs());
        }
        fs() {
          return { createSettings: { controlLock: this.Ln }, streamingService: this.qn.streamingService, tabId: this.qn.id, source: "pc" };
        }
        os() {
          jQuery("#tp-icon-container .tooltiptext").html(
            'Loading <span class="ellipsis-anim"><span>.</span><span>.</span><span>.</span></span>'
          );
        }
        rs() {
          jQuery("#tp-icon-container .tooltiptext").html("Start a party");
        }
      } {
        Cs() {
          return document.querySelector(".scrim ");
        }
        shouldMenuBeVisible() {
          var t;
          return "false" === (null === (t = this.Cs()) || void 0 === t ? void 0 : t.getAttribute("aria-hidden"));
        }
        getControlsRoot() {
          return wi(this, void 0, void 0, function* () {
            return jQuery(".playback-modal.playback-modal--show");
          });
        }
        reloadListener() {
          this.stopEventListener(), this.startEventListener();
        }
      }
      class bi extends class {
        constructor(t, e, i, n) {
          (this.tt = t),
            (this.Li = e),
            (this.B = i),
            (this.ye = n),
            window.teleparty && !window.teleparty.pageControls
              ? ((window.teleparty.pageControls = n), console.log("Setting Page COntrols"))
              : (n.setChatApi(this.tt), console.log("Resetting Chat Api for old controls")),
            (this.Es = new ie(this.tt, this.ye)),
            (this.Ke = new ve(this.Li, this.tt, this.B)),
            (this.ws = !1),
            (this._s = !1),
            (this.je = !1),
            (this.ri = new Zt()),
            this.ri.addMessageListener(this.Ke),
            this.ri.addMessageListener(this.Es),
            this.ri.addMessageListener(this),
            (this.bs = !1),
            this.js();
        }
        Bs() {
          return ye(this, void 0, void 0, function* () {
            yield this.ye.addTpIcon(), this.ye.startEventListener();
          });
        }
        loadBrowseButton() {
          return ye(this, void 0, void 0, function* () {
            yield this.ye.addTpIcon(), this.ye.startEventListener();
          });
        }
        js() {
          const t = chrome.runtime.connect();
          t.onDisconnect.addListener(() => {
            console.log("Lost background script. Teardown");
            const t = { showAlert: this.tt.inSession, alertModal: $t };
            this.As(t);
          }),
            t.onMessage.addListener(() => {
              I("Got background script"), (this.bs = !0);
            });
        }
        onMessage(t, e, i) {
          if (t.target == k) {
            if (t.type === Jt.IS_CONTENT_SCRIPT_READY) {
              if (this.ws) {
                i({ ready: !0 });
              } else (this._s = !0), this.ks().then(i);
              return !0;
            }
            if (t.type === Jt.GET_INIT_DATA) {
              return i(this.Qs()), !0;
            }
            if (t.type === Jt.DISCONNECT && t.sender == A) {
              const t = new rt(k, B, Ot);
              S.l(t), i();
            } else {
              if (t.type == y.TEARDOWN) {
                const e = t;
                return this.As(e.data), i(), !0;
              }
              t.type === y.ON_NOTIF && this.Is();
            }
          }
          return !1;
        }
        Is() {
          console.log("Show Notification");
        }
        As(t) {
          var e, i, n;
          if (t.showAlert && t.alertModal) {
            const i = null !== (e = t.buttonUrl) && void 0 !== e ? e : this.tt.getPartyUrl();
            Rt(t.alertModal, i);
          }
          this.ye.teardown(), this.Ke.teardown(), this.Es.teardown(), this.ri.teardown();
          const s = {
              name: "error",
              action: {
                description: null === (i = t.alertModal) || void 0 === i ? void 0 : i.title,
                reason: null === (n = t.alertModal) || void 0 === n ? void 0 : n.content
              }
            },
            u = new j(k, B, s);
          S.l(u), window.teleparty && (window.teleparty.contentScriptInjected = !1) && (window.teleparty.contentScriptReady = !1);
        }
        Ae(t) {
          if ("Please open a video on Amazon Prime Video then click on the Tp icon" === t) return;
          const e = new j(k, B, { name: "error", action: { reason: t } });
          S.l(e);
        }
        xs() {
          return ye(this, void 0, void 0, function* () {
            return C(() => this.bs, 5e3)();
          });
        }
        ks() {
          return ye(this, void 0, void 0, function* () {
            try {
              console.log("Waiting for content script ready"), yield this.xs();
              const t = yield this.Ss();
              return this.Bs(), t;
            } catch (t) {
              const e = { message: P, showButton: !1 };
              return this.Ae(P), { ready: !1, error: e };
            } finally {
              this._s = !1;
            }
          });
        }
        Ss() {
          return ye(this, void 0, void 0, function* () {
            let t;
            try {
              yield this.Li.waitVideoApiReadyAsync();
              const e = yield this.Ts();
              e && e.error
                ? (I("Error is:", e.error),
                  (t = { message: e.error, showButton: !0 }),
                  (this.ws = !0),
                  window.teleparty && (window.teleparty.contentScriptReady = !0))
                : (e && e.showReviewMessage && (this.je = !0),
                  (this.ws = !0),
                  window.teleparty && (window.teleparty.contentScriptReady = !0));
            } catch (e) {
              (t = { message: e.message, showButton: !1 }), this.Ae(e.message);
            }
            return { ready: this.ws, error: t };
          });
        }
        Qs() {
          return {
            inSession: this.tt.inSession,
            isChatVisible: this.tt.isPartyWindowsActive() ? this.tt.getChatWindowVisible() : this.tt.getChatVisible(),
            partyUrl: this.tt.getPartyUrl(),
            showReviewMessage: !1,
            partyWindowsActive: this.tt.isPartyWindowsActive()
          };
        }
        Ts() {
          return ye(this, void 0, void 0, function* () {
            const t = yield this.Ms();
            return S.l(t);
          });
        }
        Ms() {
          return ye(this, void 0, void 0, function* () {
            const t = { videoId: (yield this.Li.getVideoDataAsync()).videoId };
            return new Xt(k, B, t);
          });
        }
      } {
        constructor() {
          const t = new N(),
            e = new qt(),
            i = new Ce(t, e);
          let n;
          (n = window.teleparty && window.teleparty.pageControls ? window.teleparty.pageControls : new _i(e)), super(e, t, i, n);
        }
      }
      (window.teleparty && (null === (Ei = window.teleparty) || void 0 === Ei ? void 0 : Ei.contentScriptInjected)) ||
        (window.teleparty || (console.log("Set Teleparty"), (window.teleparty = {})),
        (window.teleparty.contentScriptInjected = !0),
        new bi(),
        I("Initialized content script"));
    })();
})();
