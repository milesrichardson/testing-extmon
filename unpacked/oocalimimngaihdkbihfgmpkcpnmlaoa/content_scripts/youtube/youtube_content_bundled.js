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
      var t,
        e = i(1227),
        n = i.n(e);
      class s {
        constructor(t) {
          this.namespace = t;
        }
        debug(t) {
          const e = t.methodName ? `${this.namespace}:${t.methodName}` : this.namespace;
          t.message && n()(e)(t.message), t.object && n()(e)(t.object);
        }
      }
      !(function (t) {
        (t.EPISODE = "episode"), (t.FEATURE = "feature"), (t.LIVE = "live"), (t.EXTRA = "extra"), (t.EVENT = "event"), (t.OTHER = "other");
      })(t || (t = {}));
      var u;
      function o(e) {
        return e.includes("urn:hbo:feature")
          ? t.FEATURE
          : e.includes("urn:hbo:episode") || (e.includes("urn:hbo:page:") && e.includes(":type:episode"))
          ? t.EPISODE
          : e.includes("urn:hbo:extra")
          ? t.EXTRA
          : t.OTHER;
      }
      function r(t) {
        return function () {
          return new Promise((e) => {
            setTimeout(() => {
              e();
            }, t);
          });
        };
      }
      function a(t, e, i = 250) {
        return function () {
          const n = new Date().getTime(),
            s = function () {
              return t()
                ? Promise.resolve()
                : null !== e && new Date().getTime() - n > e
                ? Promise.reject(new Error("delayUntil timed out: " + t))
                : r(i)().then(s);
            };
          return s();
        };
      }
      function c(t, e, i) {
        t.push(e), t.length > i && t.splice(0, t.length - i);
      }
      function D(t) {
        return t.concat().sort()[Math.floor(t.length / 2)];
      }
      !(function (t) {
        (t.REGISTER = "register"), (t.PARTY_START = "party_start"), (t.PARTY_JOIN = "party_join"), (t.PARTY_END = "party_end");
      })(u || (u = {}));
      const h = "Service_Background",
        d = "Popup",
        l = "Content_Script",
        p = "Page_Controls";
      var v;
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
      })(v || (v = {}));
      const g = 340,
        F = chrome.runtime.id,
        y = "reactionContainerOpen",
        m = "https://sessions.teleparty.com",
        f = "https://redirect.teleparty.com",
        C = f,
        w = `${f}/sidebar`,
        E = ["heart", "angry", "fire", "laugh", "surprise", "cry"],
        b = ["heart", "angry", "fire", "laugh", "surprise", "cry"],
        j = "recentlyUsedEmojiMap",
        _ = "redirectDataMap",
        B = [
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
        A =
          /(?:\uD83D(?:\uDD73\uFE0F?|\uDC41(?:(?:\uFE0F(?:\u200D\uD83D\uDDE8\uFE0F?)?|\u200D\uD83D\uDDE8\uFE0F?))?|[\uDDE8\uDDEF]\uFE0F?|\uDC4B(?:\uD83C[\uDFFB-\uDFFF])?|\uDD90(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|[\uDD96\uDC4C\uDC48\uDC49\uDC46\uDD95\uDC47\uDC4D\uDC4E\uDC4A\uDC4F\uDE4C\uDC50\uDE4F\uDC85\uDCAA\uDC42\uDC43\uDC76\uDC66\uDC67](?:\uD83C[\uDFFB-\uDFFF])?|\uDC71(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2640\u2642]\uFE0F?))?)|\u200D(?:[\u2640\u2642]\uFE0F?)))?|\uDC68(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC68\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)|\u200D\uD83D(?:\uDC8B\u200D\uD83D\uDC68|\uDC68)))))?|\uDC69(?:(?:\uD83C(?:\uDFFB(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFC-\uDFFF]|\uDC68\uD83C[\uDFFC-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFC(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFD-\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFD(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFE(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFD\uDFFF]|\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?|\uDFFF(?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83D(?:\uDC69\uD83C[\uDFFB-\uDFFE]|\uDC68\uD83C[\uDFFB-\uDFFE])|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD]|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D(?:\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92])|\u2708\uFE0F?|\u2764(?:\uFE0F\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])|\u200D\uD83D(?:\uDC8B\u200D\uD83D[\uDC68\uDC69]|[\uDC68\uDC69])))))?|[\uDC74\uDC75](?:\uD83C[\uDFFB-\uDFFF])?|[\uDE4D\uDE4E\uDE45\uDE46\uDC81\uDE4B\uDE47\uDC6E](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD75(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC82\uDC77](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDC78(?:\uD83C[\uDFFB-\uDFFF])?|\uDC73(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC72\uDC70\uDC7C](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC86\uDC87\uDEB6](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDC83\uDD7A](?:\uD83C[\uDFFB-\uDFFF])?|\uDD74(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uDC6F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDEA3\uDEB4\uDEB5](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDEC0\uDECC\uDC6D\uDC6B\uDC6C](?:\uD83C[\uDFFB-\uDFFF])?|\uDDE3\uFE0F?|\uDC15(?:\u200D\uD83E\uDDBA)?|[\uDC3F\uDD4A\uDD77\uDD78\uDDFA\uDEE3\uDEE4\uDEE2\uDEF3\uDEE5\uDEE9\uDEF0\uDECE\uDD70\uDD79\uDDBC\uDD76\uDECD\uDDA5\uDDA8\uDDB1\uDDB2\uDCFD\uDD6F\uDDDE\uDDF3\uDD8B\uDD8A\uDD8C\uDD8D\uDDC2\uDDD2\uDDD3\uDD87\uDDC3\uDDC4\uDDD1\uDDDD\uDEE0\uDDE1\uDEE1\uDDDC\uDECF\uDECB\uDD49]\uFE0F?|[\uDE00\uDE03\uDE04\uDE01\uDE06\uDE05\uDE02\uDE42\uDE43\uDE09\uDE0A\uDE07\uDE0D\uDE18\uDE17\uDE1A\uDE19\uDE0B\uDE1B-\uDE1D\uDE10\uDE11\uDE36\uDE0F\uDE12\uDE44\uDE2C\uDE0C\uDE14\uDE2A\uDE34\uDE37\uDE35\uDE0E\uDE15\uDE1F\uDE41\uDE2E\uDE2F\uDE32\uDE33\uDE26-\uDE28\uDE30\uDE25\uDE22\uDE2D\uDE31\uDE16\uDE23\uDE1E\uDE13\uDE29\uDE2B\uDE24\uDE21\uDE20\uDE08\uDC7F\uDC80\uDCA9\uDC79-\uDC7B\uDC7D\uDC7E\uDE3A\uDE38\uDE39\uDE3B-\uDE3D\uDE40\uDE3F\uDE3E\uDE48-\uDE4A\uDC8B\uDC8C\uDC98\uDC9D\uDC96\uDC97\uDC93\uDC9E\uDC95\uDC9F\uDC94\uDC9B\uDC9A\uDC99\uDC9C\uDDA4\uDCAF\uDCA2\uDCA5\uDCAB\uDCA6\uDCA8\uDCA3\uDCAC\uDCAD\uDCA4\uDC40\uDC45\uDC44\uDC8F\uDC91\uDC6A\uDC64\uDC65\uDC63\uDC35\uDC12\uDC36\uDC29\uDC3A\uDC31\uDC08\uDC2F\uDC05\uDC06\uDC34\uDC0E\uDC2E\uDC02-\uDC04\uDC37\uDC16\uDC17\uDC3D\uDC0F\uDC11\uDC10\uDC2A\uDC2B\uDC18\uDC2D\uDC01\uDC00\uDC39\uDC30\uDC07\uDC3B\uDC28\uDC3C\uDC3E\uDC14\uDC13\uDC23-\uDC27\uDC38\uDC0A\uDC22\uDC0D\uDC32\uDC09\uDC33\uDC0B\uDC2C\uDC1F-\uDC21\uDC19\uDC1A\uDC0C\uDC1B-\uDC1E\uDC90\uDCAE\uDD2A\uDDFE\uDDFB\uDC92\uDDFC\uDDFD\uDD4C\uDED5\uDD4D\uDD4B\uDC88\uDE82-\uDE8A\uDE9D\uDE9E\uDE8B-\uDE8E\uDE90-\uDE9C\uDEF5\uDEFA\uDEB2\uDEF4\uDEF9\uDE8F\uDEA8\uDEA5\uDEA6\uDED1\uDEA7\uDEF6\uDEA4\uDEA2\uDEEB\uDEEC\uDCBA\uDE81\uDE9F-\uDEA1\uDE80\uDEF8\uDD5B\uDD67\uDD50\uDD5C\uDD51\uDD5D\uDD52\uDD5E\uDD53\uDD5F\uDD54\uDD60\uDD55\uDD61\uDD56\uDD62\uDD57\uDD63\uDD58\uDD64\uDD59\uDD65\uDD5A\uDD66\uDD25\uDCA7\uDEF7\uDD2E\uDC53-\uDC62\uDC51\uDC52\uDCFF\uDC84\uDC8D\uDC8E\uDD07-\uDD0A\uDCE2\uDCE3\uDCEF\uDD14\uDD15\uDCFB\uDCF1\uDCF2\uDCDE-\uDCE0\uDD0B\uDD0C\uDCBB\uDCBD-\uDCC0\uDCFA\uDCF7-\uDCF9\uDCFC\uDD0D\uDD0E\uDCA1\uDD26\uDCD4-\uDCDA\uDCD3\uDCD2\uDCC3\uDCDC\uDCC4\uDCF0\uDCD1\uDD16\uDCB0\uDCB4-\uDCB8\uDCB3\uDCB9\uDCB1\uDCB2\uDCE7-\uDCE9\uDCE4-\uDCE6\uDCEB\uDCEA\uDCEC-\uDCEE\uDCDD\uDCBC\uDCC1\uDCC2\uDCC5-\uDCD0\uDD12\uDD13\uDD0F-\uDD11\uDD28\uDD2B\uDD27\uDD29\uDD17\uDD2C\uDD2D\uDCE1\uDC89\uDC8A\uDEAA\uDEBD\uDEBF\uDEC1\uDED2\uDEAC\uDDFF\uDEAE\uDEB0\uDEB9-\uDEBC\uDEBE\uDEC2-\uDEC5\uDEB8\uDEAB\uDEB3\uDEAD\uDEAF\uDEB1\uDEB7\uDCF5\uDD1E\uDD03\uDD04\uDD19-\uDD1D\uDED0\uDD4E\uDD2F\uDD00-\uDD02\uDD3C\uDD3D\uDD05\uDD06\uDCF6\uDCF3\uDCF4\uDD31\uDCDB\uDD30\uDD1F-\uDD24\uDD34\uDFE0-\uDFE2\uDD35\uDFE3-\uDFE5\uDFE7-\uDFE9\uDFE6\uDFEA\uDFEB\uDD36-\uDD3B\uDCA0\uDD18\uDD33\uDD32\uDEA9])|\uD83E(?:[\uDD1A\uDD0F\uDD1E\uDD1F\uDD18\uDD19\uDD1B\uDD1C\uDD32\uDD33\uDDB5\uDDB6\uDDBB\uDDD2](?:\uD83C[\uDFFB-\uDFFF])?|\uDDD1(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF]|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?))?)|\u200D(?:\uD83E(?:\uDD1D\u200D\uD83E\uDDD1|[\uDDB0\uDDB1\uDDB3\uDDB2\uDDAF\uDDBC\uDDBD])|\u2695\uFE0F?|\uD83C[\uDF93\uDFEB\uDF3E\uDF73\uDFED\uDFA4\uDFA8]|\u2696\uFE0F?|\uD83D[\uDD27\uDCBC\uDD2C\uDCBB\uDE80\uDE92]|\u2708\uFE0F?)))?|[\uDDD4\uDDD3](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDCF\uDD26\uDD37](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD34\uDDD5\uDD35\uDD30\uDD31\uDD36](?:\uD83C[\uDFFB-\uDFFF])?|[\uDDB8\uDDB9\uDDD9-\uDDDD](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDDDE\uDDDF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDDCD\uDDCE\uDDD6\uDDD7\uDD38](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDD3C(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|[\uDD3D\uDD3E\uDD39\uDDD8](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDD23\uDD70\uDD29\uDD2A\uDD11\uDD17\uDD2D\uDD2B\uDD14\uDD10\uDD28\uDD25\uDD24\uDD12\uDD15\uDD22\uDD2E\uDD27\uDD75\uDD76\uDD74\uDD2F\uDD20\uDD73\uDD13\uDDD0\uDD7A\uDD71\uDD2C\uDD21\uDD16\uDDE1\uDD0E\uDD0D\uDD1D\uDDBE\uDDBF\uDDE0\uDDB7\uDDB4\uDD3A\uDDB0\uDDB1\uDDB3\uDDB2\uDD8D\uDDA7\uDDAE\uDD8A\uDD9D\uDD81\uDD84\uDD93\uDD8C\uDD99\uDD92\uDD8F\uDD9B\uDD94\uDD87\uDDA5\uDDA6\uDDA8\uDD98\uDDA1\uDD83\uDD85\uDD86\uDDA2\uDD89\uDDA9\uDD9A\uDD9C\uDD8E\uDD95\uDD96\uDD88\uDD8B\uDD97\uDD82\uDD9F\uDDA0\uDD40\uDD6D\uDD5D\uDD65\uDD51\uDD54\uDD55\uDD52\uDD6C\uDD66\uDDC4\uDDC5\uDD5C\uDD50\uDD56\uDD68\uDD6F\uDD5E\uDDC7\uDDC0\uDD69\uDD53\uDD6A\uDD59\uDDC6\uDD5A\uDD58\uDD63\uDD57\uDDC8\uDDC2\uDD6B\uDD6E\uDD5F-\uDD61\uDD80\uDD9E\uDD90\uDD91\uDDAA\uDDC1\uDD67\uDD5B\uDD42\uDD43\uDD64\uDDC3\uDDC9\uDDCA\uDD62\uDD44\uDDED\uDDF1\uDDBD\uDDBC\uDE82\uDDF3\uDE90\uDDE8\uDDE7\uDD47-\uDD49\uDD4E\uDD4F\uDD4D\uDD4A\uDD4B\uDD45\uDD3F\uDD4C\uDE80\uDE81\uDDFF\uDDE9\uDDF8\uDDF5\uDDF6\uDD7D\uDD7C\uDDBA\uDDE3-\uDDE6\uDD7B\uDE71-\uDE73\uDD7E\uDD7F\uDE70\uDDE2\uDE95\uDD41\uDDEE\uDE94\uDDFE\uDE93\uDDAF\uDDF0\uDDF2\uDDEA-\uDDEC\uDE78-\uDE7A\uDE91\uDE92\uDDF4\uDDF7\uDDF9-\uDDFD\uDDEF])|[\u263A\u2639\u2620\u2763\u2764]\uFE0F?|\u270B(?:\uD83C[\uDFFB-\uDFFF])?|[\u270C\u261D](?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\u270A(?:\uD83C[\uDFFB-\uDFFF])?|\u270D(?:(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F))?|\uD83C(?:\uDF85(?:\uD83C[\uDFFB-\uDFFF])?|\uDFC3(?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC7\uDFC2](?:\uD83C[\uDFFB-\uDFFF])?|\uDFCC(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFC4\uDFCA](?:(?:\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|\uDFCB(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\uDFF5\uDF36\uDF7D\uDFD4-\uDFD6\uDFDC-\uDFDF\uDFDB\uDFD7\uDFD8\uDFDA\uDFD9\uDFCE\uDFCD\uDF21\uDF24-\uDF2C\uDF97\uDF9F\uDF96\uDF99-\uDF9B\uDF9E\uDFF7\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37]\uFE0F?|\uDFF4(?:(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67\uDB40\uDC7F|\uDC73\uDB40\uDC63\uDB40\uDC74\uDB40\uDC7F|\uDC77\uDB40\uDC6C\uDB40\uDC73\uDB40\uDC7F)))?|\uDFF3(?:(?:\uFE0F(?:\u200D\uD83C\uDF08)?|\u200D\uD83C\uDF08))?|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|[\uDFFB-\uDFFF\uDF38-\uDF3C\uDF37\uDF31-\uDF35\uDF3E-\uDF43\uDF47-\uDF53\uDF45\uDF46\uDF3D\uDF44\uDF30\uDF5E\uDF56\uDF57\uDF54\uDF5F\uDF55\uDF2D-\uDF2F\uDF73\uDF72\uDF7F\uDF71\uDF58-\uDF5D\uDF60\uDF62-\uDF65\uDF61\uDF66-\uDF6A\uDF82\uDF70\uDF6B-\uDF6F\uDF7C\uDF75\uDF76\uDF7E\uDF77-\uDF7B\uDF74\uDFFA\uDF0D-\uDF10\uDF0B\uDFE0-\uDFE6\uDFE8-\uDFED\uDFEF\uDFF0\uDF01\uDF03-\uDF07\uDF09\uDFA0-\uDFA2\uDFAA\uDF11-\uDF20\uDF0C\uDF00\uDF08\uDF02\uDF0A\uDF83\uDF84\uDF86-\uDF8B\uDF8D-\uDF91\uDF80\uDF81\uDFAB\uDFC6\uDFC5\uDFC0\uDFD0\uDFC8\uDFC9\uDFBE\uDFB3\uDFCF\uDFD1-\uDFD3\uDFF8\uDFA3\uDFBD\uDFBF\uDFAF\uDFB1\uDFAE\uDFB0\uDFB2\uDCCF\uDC04\uDFB4\uDFAD\uDFA8\uDF92\uDFA9\uDF93\uDFBC\uDFB5\uDFB6\uDFA4\uDFA7\uDFB7-\uDFBB\uDFA5\uDFAC\uDFEE\uDFF9\uDFE7\uDFA6\uDD8E\uDD91-\uDD9A\uDE01\uDE36\uDE2F\uDE50\uDE39\uDE1A\uDE32\uDE51\uDE38\uDE34\uDE33\uDE3A\uDE35\uDFC1\uDF8C])|\u26F7\uFE0F?|\u26F9(?:(?:\uFE0F(?:\u200D(?:[\u2642\u2640]\uFE0F?))?|\uD83C(?:[\uDFFB-\uDFFF](?:\u200D(?:[\u2642\u2640]\uFE0F?))?)|\u200D(?:[\u2642\u2640]\uFE0F?)))?|[\u2618\u26F0\u26E9\u2668\u26F4\u2708\u23F1\u23F2\u2600\u2601\u26C8\u2602\u26F1\u2744\u2603\u2604\u26F8\u2660\u2665\u2666\u2663\u265F\u26D1\u260E\u2328\u2709\u270F\u2712\u2702\u26CF\u2692\u2694\u2699\u2696\u26D3\u2697\u26B0\u26B1\u26A0\u2622\u2623\u2B06\u2197\u27A1\u2198\u2B07\u2199\u2B05\u2196\u2195\u2194\u21A9\u21AA\u2934\u2935\u269B\u2721\u2638\u262F\u271D\u2626\u262A\u262E\u25B6\u23ED\u23EF\u25C0\u23EE\u23F8-\u23FA\u23CF\u2640\u2642\u2695\u267E\u267B\u269C\u2611\u2714\u2716\u303D\u2733\u2734\u2747\u203C\u2049\u3030\u00A9\u00AE\u2122]\uFE0F?|[\u0023\u002A\u0030-\u0039](?:\uFE0F\u20E3|\u20E3)|[\u2139\u24C2\u3297\u3299\u25FC\u25FB\u25AA\u25AB]\uFE0F?|[\u2615\u26EA\u26F2\u26FA\u26FD\u2693\u26F5\u231B\u23F3\u231A\u23F0\u2B50\u26C5\u2614\u26A1\u26C4\u2728\u26BD\u26BE\u26F3\u267F\u26D4\u2648-\u2653\u26CE\u23E9-\u23EC\u2B55\u2705\u274C\u274E\u2795-\u2797\u27B0\u27BF\u2753-\u2755\u2757\u26AB\u26AA\u2B1B\u2B1C\u25FE\u25FD])/g;
      var Q = console.log.bind(window.console);
      const k = new (class {
        addListener(t) {
          chrome.runtime.onMessage.addListener(t);
        }
        removeListener(t) {
          chrome.runtime.onMessage.removeListener(t);
        }
        sendMessageToTabAsync(t, e, i = 2e4) {
          return new Promise((n, s) => {
            const u = setTimeout(() => {
              s();
            }, i);
            try {
              chrome.tabs.sendMessage(e, t, (e) => {
                chrome.runtime.lastError && Q(chrome.runtime.lastError.message + JSON.stringify(t)), clearTimeout(u), n(e);
              });
            } catch (t) {
              clearTimeout(u), s(t);
            }
          });
        }
        l(t, e) {
          return new Promise((i, n) => {
            let s = null;
            e &&
              (s = setTimeout(() => {
                n({ error: "Send Message Timeout" });
              }, e));
            try {
              chrome.runtime.sendMessage(F, t, (e) => {
                chrome.runtime.lastError && console.log(chrome.runtime.lastError.message + JSON.stringify(t)), s && clearTimeout(s), i(e);
              });
            } catch (t) {
              s && clearTimeout(s), n(t);
            }
          });
        }
      })();
      class I {
        constructor(t, e, i) {
          (this.sender = t), (this.target = e), (this.type = i);
        }
      }
      class x extends I {
        constructor(t, e, i) {
          super(t, e, i), (this.p = i);
        }
      }
      var T, S, M, P;
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
      })(T || (T = {}));
      class V extends x {
        constructor(t, e, i) {
          super(t, e, T.GET_SESSION_DATA), (this.data = i);
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
      })(S || (S = {}));
      class $ {
        constructor() {
          (this.v = this.g.bind(this)), (this.F = []), this.m();
        }
        addMessageListener(t) {
          this.F.push(t);
        }
        removeMessageListener(t) {
          this.F = this.F.filter((t) => {});
        }
        m() {
          k.addListener(this.v);
        }
        teardown() {
          (this.F = []), k.removeListener(this.v);
        }
        g(t, e, i) {
          if (!this.C(t)) return !1;
          return !!this._(t, e, i) || (i({}), !1);
        }
        C(t) {
          return t.target === l;
        }
        _(t, e, i) {
          let n = !1;
          return (
            this.F.forEach((s) => {
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
      })(M || (M = {})),
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
        })(P || (P = {}));
      var R,
        N,
        U,
        G = function (t, e, i, n) {
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
      class L {
        constructor(t, e) {
          (this.B = t), (this.A = e), Q("Chat forwarder");
        }
        onMessage(t, e, i) {
          var n;
          switch (t.type) {
            case S.LOAD_SESSION: {
              const e = t;
              return this.k(e.data), !1;
            }
            case M.ON_MESSAGE: {
              const e = t;
              return this.I(e), this.A.onChatMessage(), !1;
            }
            case M.ON_BUFFER: {
              const e = t;
              return this.T(e), !1;
            }
            case M.ON_TYPING: {
              const e = t;
              return this.S(e), !1;
            }
            case M.ON_WATCHING_ADS: {
              const e = t;
              return this.M(e), !1;
            }
            case M.UPDATE_SETTINGS: {
              const e = t;
              return this.P(e), !1;
            }
            case M.ON_REACTION: {
              const e = t;
              return this.V(e), !1;
            }
            case M.ON_GIF: {
              const e = t;
              return this.$(e), !1;
            }
            case M.USER_LIST: {
              const e = t;
              return this.R(e), !1;
            }
            case M.ON_WEB_RTC:
              return this.B.onWebRTC(t.data), !0;
            case v.SET_CHAT_VISIBLE: {
              const e = t;
              return this.N(e.data), i(), !1;
            }
            case P.SIDEBAR_MESSAGING_READY: {
              console.log("Sidebar Ready");
              const t = null === (n = window.teleparty) || void 0 === n ? void 0 : n.tabId;
              return console.log(t), this.B.setChatFrameReady(null != t ? t : 0), i(), !0;
            }
            case P.DISPLAY_MODAL: {
              const e = t.data;
              return console.log(e), !0;
            }
            case P.ON_UPDATE_SETTINGS: {
              const e = t.data;
              return this.B.doUpdateSettings(e), i(), !0;
            }
            case P.ON_CHROME_STORAGE_UPDATE:
              try {
                chrome.storage.local.set(t.data);
              } catch (t) {
                console.log("Failed to update chrome storage");
              }
              return i(), !0;
            case P.SET_REACTIONS_ACTIVE: {
              const e = t.data;
              return this.B.setReactionsActive(e), i(), !0;
            }
            case P.RESET_VIEW:
              return this.B.resetChatWindow(!0), i(), !0;
            case P.ON_FOCUS:
              return this.B.onSidebarFocus(), i(), !0;
            case P.PREVIEW_REACTION: {
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
        N(t) {
          return G(this, void 0, void 0, function* () {
            this.B.isPartyWindowsActive()
              ? t.visible
                ? yield this.B.resetChatWindow()
                : yield this.B.hideChatWindow()
              : (yield this.B.setChatVisible(t.visible), this.B.fixPageControls());
          });
        }
        k(t) {
          const e = t.sessionCallbackData.sessionId,
            i = `${C}/join/${e}`;
          if (
            (this.B.loadInitData(t),
            this.B.setPartyUrl(i),
            this.B.setSessionId(e),
            this.B.U(t.storageData),
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
        V(t) {
          this.B.showReaction(t.data);
        }
        $(t) {
          this.B.addGif(t.data);
        }
        T(t) {
          this.B.onBufferingMessage(t.data);
        }
        S(t) {
          this.B.onTypingMessage(t.data);
        }
        M(t) {
          this.B.onWatchingAdsMessage(t.data);
        }
        P(t) {
          this.B.onUpdateSettingsMessage(t.data);
        }
        R(t) {
          this.B.loadUserList(t.data.userList), this.B.setSocketConnectionId(t.data.socketConnectionId);
        }
      }
      !(function (t) {
        (t.PAUSED = "paused"), (t.PLAYING = "playing");
      })(R || (R = {})),
        (function (t) {
          (t.LOADING = "loading"),
            (t.PLAYING = "playing"),
            (t.IDLE = "idle"),
            (t.AD_PLAYING = "ad_playing"),
            (t.PAUSED = "paused"),
            (t.NOT_READY = "not_ready");
        })(N || (N = {})),
        (function (t) {
          (t.UPDATE_SESSION = "updateSession"),
            (t.NEXT_EPISODE = "nextEpisode"),
            (t.REBOOT_SESSION = "rebootSession"),
            (t.GET_SERVER_TIME = "getServerTime"),
            (t.RELOAD_PARTY = "reloadParty");
        })(U || (U = {}));
      class O {
        constructor() {
          this.resetTasks(), (this.G = []), (this.L = 0), (this.O = Promise.resolve()), (this.H = !0);
        }
        createInstance() {
          return new O();
        }
        pushTask(t, e) {
          if (!this.H) return;
          const i = { action: t, name: e };
          0 === this.L && this.resetTasks(),
            (this.L = this.G.push(i)),
            (this.O = this.O.then(() => {
              if (this.G.includes(i) && this.H)
                return this.W(i)().then(() => {
                  this.G.shift(), (this.L -= 1);
                });
            }));
        }
        disable() {
          (this.H = !1), this.resetTasks();
        }
        resetTasks() {
          (this.O = Promise.resolve()), (this.G = []), (this.L = 0);
        }
        W(t) {
          return function () {
            return t.action().catch(() => {});
          };
        }
        get tasksInFlight() {
          return this.L;
        }
        hasTaskInQueue(t) {
          return this.G.some((e) => e.name === t);
        }
        removeTask(t) {
          console.log(this.G),
            (this.G = this.G.filter((e, i) => (e.name === t && 0 == i ? (console.error("Cannot filter active task"), !0) : e.name !== t))),
            (this.L = this.G.length),
            console.log(this.G);
        }
      }
      const H = new O(),
        W = 1e3,
        z = 72e5,
        Y = 12e4;
      class K extends x {
        constructor(t, e, i) {
          super(t, e, T.BROADCAST), (this.data = i);
        }
      }
      const J = chrome.extension.getURL("img/x-circle.svg"),
        X = "with-chat",
        q = "with-chat-ads",
        Z = "with-chat-video",
        tt = {
          title: "Teleparty | Disconnected from party",
          content:
            "Only the owner of this party can change the episode. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        },
        et = {
          title: "Teleparty | Are you still there?",
          content: "You will be removed from the party in 120 seconds for inactivity. Move your mouse to continue watching."
        },
        it = {
          title: "Teleparty | Shorts not supported",
          content:
            "Unfortunately, we do not support YouTube shorts. You will remain in the party, but will be unable to share shorts across Teleparty."
        },
        nt = {
          title: "Teleparty | Disconnected from party",
          content: "You were removed from the party from inactivity. Click the button below rejoin the party.",
          buttonTitle: "Return to Party"
        },
        st = {
          title: "Teleparty | Disconnected from party",
          content:
            "It looks like someone changed the video and we weren't able to connect you. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        },
        ut = {
          title: "Teleparty | Disconnected from party",
          content:
            "It looks like you lost connection to the extension. Click the button below to be redirected to the party, then click on the red Tp icon to rejoin.",
          buttonTitle: "Return to Party"
        };
      function ot(t, e) {
        rt();
        const i = e
          ? (function (t) {
              return `\n    <div id="alert-dialog-wrapper">\n      <div id="alert-dialog-container">\n        <div id="alert-title-wrapper">\n            <div class="alert-title">\n                <p id="alert-title-txt" class="extension-title">\n                    ${t.title}\n                </p>\n                <button id="alert-x-btn">\n                    <img src="${J}" alt="close" />\n                </button>\n            </div>\n            <div class="extension-border-bot">\n                \n            </div>\n        </div>\n        <div id="alert-description">\n            <p id="alert-content-txt" class="extension-txt">\n              ${t.content}\n            </p>\n            <button id="alert-return-btn" class="extension-btn">${t.buttonTitle}</button>\n        </div>\n      </div>\n    </div>\n    `;
            })(t)
          : (function (t) {
              return `\n  <div id="alert-dialog-wrapper">\n    <div id="alert-dialog-container">\n      <div id="alert-title-wrapper">\n          <div class="alert-title">\n              <p id="alert-title-txt" class="extension-title">\n                  ${t.title}\n              </p>\n              <button id="alert-x-btn">\n                  <img src="${J}" alt="close" />\n              </button>\n          </div>\n          <div class="extension-border-bot">\n              \n          </div>\n      </div>\n      <div id="alert-description">\n          <p id="alert-content-txt" class="extension-txt">\n            ${t.content}\n          </p>\n      </div>\n    </div>\n  </div>\n  `;
            })(t);
        document.body.insertAdjacentHTML("afterbegin", i),
          jQuery("#alert-x-btn").click(() => {
            rt();
          }),
          e &&
            jQuery("#alert-return-btn").click(() => {
              rt(), (window.location.href = e);
            });
      }
      function rt() {
        const t = document.querySelector("#alert-dialog-wrapper");
        t && t.remove();
      }
      class at extends I {
        constructor(t, e, i) {
          super(t, e, i), (this.type = i);
        }
      }
      class ct extends at {
        constructor(t, e, i) {
          super(t, e, S.TEARDOWN), (this.data = i);
        }
      }
      class Dt extends I {
        constructor(t, e, i) {
          super(t, e, i), (this.type = i);
        }
      }
      class ht extends Dt {
        constructor(t, e) {
          super(t, e, U.GET_SERVER_TIME);
        }
      }
      class dt extends x {
        constructor(t, e, i) {
          super(t, e, T.BROADCAST_NEXT_EPISODE), (this.data = i);
        }
      }
      class lt extends x {
        constructor(t, e, i) {
          super(t, e, T.SET_BUFFERING), (this.data = i);
        }
      }
      class pt extends x {
        constructor(t, e, i) {
          super(t, e, T.SET_WATCHING_ADS), (this.data = i);
        }
      }
      var vt;
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
      })(vt || (vt = {}));
      class gt extends at {
        constructor(t, e, i) {
          super(t, e, S.LOG_EVENT), (this.data = i), (this.sender = t), (this.target = e);
        }
      }
      const Ft = "PING",
        yt = "SYNC",
        mt = "BROADCAST";
      class ft extends at {
        constructor(t, e, i) {
          super(t, e, S.STAY_ALIVE), (this.data = i);
        }
      }
      const Ct = "Failed to read chrome storage. Please refresh the page and try again",
        wt = "Failed to connect to Script. Please refresh the page and try again",
        Et = "An unexpected error occured. Please refresh the page and try again.",
        bt = "Video element not found.";
      var jt = function (t, e, i, n) {
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
      const _t = new (class {
        getItemsAsync(t) {
          return jt(this, void 0, void 0, function* () {
            return new Promise((e, i) => {
              chrome.storage.local.get(t, (t) => {
                chrome.runtime.lastError ? i(new Error(Ct)) : e(t);
              });
            });
          });
        }
        getAllItemsAsync() {
          return jt(this, void 0, void 0, function* () {
            return new Promise((t, e) => {
              chrome.storage.local.get(null, (i) => {
                chrome.runtime.lastError ? e(new Error(Ct)) : t(i);
              });
            });
          });
        }
      })();
      Object.freeze(_t);
      const Bt = _t;
      var At = function (t, e, i, n) {
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
      const Qt = new (class {
        setItemsAsync(t) {
          return At(this, void 0, void 0, function* () {
            return new Promise((e, i) => {
              chrome.storage.local.set(t, () => {
                chrome.runtime.lastError ? i(new Error("Failed to write to chrome storage. Please refresh the page and try again")) : e();
              });
            });
          });
        }
      })();
      Object.freeze(Qt);
      const kt = Qt;
      var It = function (t, e, i, n) {
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
      const xt = new (class {
        getRedirectDataForTabAsync(t) {
          return It(this, void 0, void 0, function* () {
            const e = (yield Bt.getItemsAsync([_])).redirectDataMap,
              i = this.Y(t);
            if (e && e[i]) {
              const t = e[i];
              if (this.K(t)) return t;
            }
          });
        }
        deleteRedirectDataForTabAsync(t) {
          return It(this, void 0, void 0, function* () {
            const e = (yield Bt.getItemsAsync([_])).redirectDataMap,
              i = this.Y(t);
            e && e[i] && delete e[i], yield kt.setItemsAsync({ [_]: e });
          });
        }
        Y(t) {
          return t;
        }
        storeRedirectDataForTabAsync(t, e) {
          return It(this, void 0, void 0, function* () {
            const i = this.Y(e);
            let n = yield Bt.getItemsAsync([_]);
            (n[i] = t), (n = this.J(n)), yield kt.setItemsAsync({ [_]: n });
          });
        }
        J(t) {
          return (function (t, e) {
            const i = {};
            let n;
            for (n in t) t.hasOwnProperty(n) && e(t[n]) && (i[n] = t[n]);
            return i;
          })(t, this.K);
        }
        K(t) {
          const e = t.date;
          return void 0 !== e && "number" == typeof e && e <= Date.now() && Date.now() - e < 108e5;
        }
      })();
      Object.freeze(xt);
      const Tt = xt;
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
      class Mt {
        constructor(t, e, i) {
          (this.X = []),
            (this.q = 0),
            (this.Z = 0),
            (this.tt = []),
            (this.et = !1),
            (this.it = !1),
            (this.nt = !1),
            (this.st = !1),
            (this.ut = void 0),
            (this.ot = () =>
              St(this, void 0, void 0, function* () {
                try {
                  yield fetch("https://www3.doubleclick.net", { method: "HEAD", mode: "no-cors", cache: "no-store" }), (this.ut = !1);
                } catch (t) {
                  this.ut = !0;
                }
              })),
            (this.rt = (t = !1, e = !1) =>
              St(this, void 0, void 0, function* () {
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
            (this.vt = () =>
              St(this, void 0, void 0, function* () {
                if (
                  (this.gt == R.PAUSED &&
                    this.Ft &&
                    (clearInterval(this.Ft),
                    (this.Ft = setInterval(() => {
                      this.yt();
                    }, 6e4))),
                  this.ft())
                )
                  return;
                if ((yield this.Ct.waitVideoDoneLoadingAsync(), this.ft())) return;
                const t = yield this.Ct.getStateAsync();
                this.gt == R.PAUSED ? yield this.wt(t) : this.gt == R.PLAYING && (yield this.Et(t)), !1 === this.st && (this.st = !0);
              })),
            (this.Ct = t),
            (this.B = e),
            (this.bt = i),
            this.bt.setMessageForwarder(this),
            (this.jt = 0),
            (this.ct = !1),
            (this.gt = R.PAUSED),
            (this._t = 0),
            (this.Bt = 0),
            (this.At = 0),
            (this.Qt = this.Ct.getStreamingServiceName()),
            Q("Video forwarder"),
            this.ot();
        }
        onMessage(t, e, i) {
          switch (t.type) {
            case S.GET_VIDEO_DATA:
              return this.kt(i), !0;
            case S.LOAD_SESSION: {
              const e = t;
              return this.It(e.data), !1;
            }
            case U.UPDATE_SESSION: {
              const e = t;
              return this.xt(e.data), !1;
            }
            case U.NEXT_EPISODE: {
              const e = t;
              return this.Tt(e.data), !1;
            }
            case U.REBOOT_SESSION: {
              const e = t;
              return this.St(e.data, i), !0;
            }
            case U.RELOAD_PARTY:
              return this.reloadPartyAsync().then(() => console.log("Party Reloaded")), !0;
            case M.ON_WATCHING_ADS: {
              const e = t;
              return this.M(e), !1;
            }
            default:
              return !1;
          }
        }
        M(t) {
          t.data.anyoneWatchingAds && !this.it && (H.pushTask(this.Ct.doAdCheck.bind(this.Ct)), this.forceSync()),
            (this.it = t.data.anyoneWatchingAds);
        }
        get videoId() {
          return this.Mt;
        }
        set videoId(t) {
          this.Mt = t;
        }
        sendTeardown(t) {
          const e = new ct(l, h, t);
          k.l(e);
        }
        teardown() {
          (this.Pt = void 0),
            this.Vt && clearInterval(this.Vt),
            this.Ft && clearInterval(this.Ft),
            this.Ct.pause(),
            H.disable(),
            this.bt.stopListening();
        }
        St(t, e) {
          H.resetTasks(), this.Mt == t.videoId && this.xt(t), e(this.Mt == t.videoId);
          const i = new gt(l, h, { eventType: "reboot", sessionId: this.Pt });
          k.l(i);
        }
        tryBroadcast(t = !1) {
          this.et ||
            (this.nt
              ? this.forceSync()
              : 0 != this.Ct.uiEventsHappening || this.ct || !this.Pt || H.hasTaskInQueue(mt) || H.pushTask(() => this.rt(t), mt));
        }
        setBuffering(t) {
          if (this.Pt) {
            const e = new lt(l, h, { buffering: t });
            k.l(e);
          }
        }
        isWatchingAds() {
          return this.et;
        }
        setWatchingAds(t, e) {
          if (this.Pt) {
            this.et = t;
            const i = new pt(l, h, { watchingAds: t, adDurationLeft: e });
            k.l(i);
          }
        }
        sendNextEpisodeAsync(t) {
          return St(this, void 0, void 0, function* () {
            if (this.Pt && t !== this.Mt && t !== this.$t) {
              (this.$t = t), (this.ct = !0);
              const e = new dt(l, h, { nextEpisode: t }),
                i = yield k.l(e);
              i && "Locked Session" === i.errorMessage && (yield this.Rt(t));
            }
          });
        }
        Rt(t) {
          return St(this, void 0, void 0, function* () {
            try {
              yield a(() => t == this.Mt, 1e4)(), (this.ct = !1);
            } catch (t) {
              this.Nt("An error has occured when trying to wait till the episode changed videos");
              const e = { showAlert: !0, alertModal: tt };
              this.sendTeardown(e);
            }
          });
        }
        ht(t, e) {
          return St(this, void 0, void 0, function* () {
            if (null == t.lastKnownTime || null == t.lastKnownTimeUpdatedAt || null == t.state) return !1;
            if (e && t.state === R.PAUSED && t.lastKnownTime < W) return !1;
            const i = Math.abs(t.lastKnownTime - this.Ut());
            if (t.state == this.gt && i < W) return !1;
            if (i >= W) {
              const t = new gt(l, h, { name: "video_seek", action: { source: "self" } });
              k.l(t), this.Qt == vt.AMAZON || this.Qt == vt.PARAMOUNT ? yield r(200)() : this.Qt == vt.HBO_MAX && (yield r(500)());
            }
            return !0;
          });
        }
        Dt() {
          return St(this, void 0, void 0, function* () {
            const t = yield this.Ct.getUpdateSessionDataAsync();
            (t.lastKnownTimeUpdatedAt -= this.Z), (t.lastKnownTime = Math.round(t.lastKnownTime));
            return new K(l, h, t);
          });
        }
        forceSync() {
          H.pushTask(this.vt, yt);
        }
        Tt(t) {
          return St(this, void 0, void 0, function* () {
            (this.jt = Date.now()), H.pushTask(() => this.Gt(t));
          });
        }
        Gt(t) {
          return St(this, void 0, void 0, function* () {
            try {
              Q("Continue next episode called"),
                (this.ct = !0),
                yield this.Ct.jumpToNextEpisode(t),
                yield this.bt.loadNewVideoAsync(t.videoId),
                Q("After load new video"),
                this.bt.reloadListeners(),
                this.At < this.jt &&
                  ((this.gt = R.PAUSED),
                  (this._t = 0),
                  (this.Bt = Date.now()),
                  Q("Sending broadcast after next episode"),
                  H.pushTask(() => this.rt(!0, !0), mt),
                  H.removeTask(yt)),
                (this.Mt = t.videoId),
                (this.ct = !1);
              const e = new gt(l, h, { name: "video_start", action: { description: "video session has begun" } });
              k.l(e);
            } catch (t) {
              this.Nt("Error loading new video."), console.log("Error was", t), yield this.reloadPartyAsync();
            }
          });
        }
        persistExtension(t) {
          var e, i;
          return St(this, void 0, void 0, function* () {
            console.log("persist here");
            const n = null !== (i = null === (e = window.teleparty) || void 0 === e ? void 0 : e.tabId) && void 0 !== i ? i : 0,
              s = new ft(l, h, { tabId: n, persist: t });
            k.l(s);
            const u = yield this.Lt();
            (u.date = Date.now()), Tt.storeRedirectDataForTabAsync(u, n);
          });
        }
        reloadPartyAsync() {
          var t, e;
          return St(this, void 0, void 0, function* () {
            try {
              const i = yield this.Lt();
              i.date = Date.now();
              const n = yield this.Ot(i),
                s = null !== (e = null === (t = window.teleparty) || void 0 === t ? void 0 : t.tabId) && void 0 !== e ? e : 0,
                u = new ft(l, h, { tabId: s, persist: !1 });
              yield k.l(u), yield Tt.storeRedirectDataForTabAsync(i, s), (window.location.href = n);
            } catch (t) {
              console.log("Error reloading party", t), this.Nt("Failed to fix next episode.");
              const e = new ct(l, h, { showAlert: !0, alertModal: st });
              k.l(e);
            }
          });
        }
        Lt() {
          return St(this, void 0, void 0, function* () {
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
                      e(t), this.Nt("Unable to get video endpoint data to reload session");
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
        Ot(t) {
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
        xt(t) {
          (this.At = Date.now()), H.pushTask(this.Ht(t).bind(this));
        }
        Ht(t) {
          if (t.state === R.PAUSED && this.gt === R.PLAYING) {
            this.yt();
            const t = new gt(l, h, {
              name: "video_pause",
              action: { description: "video was played from pause", reason: "Video was played" }
            });
            k.l(t);
          } else if (t.state === R.PLAYING && this.gt === R.PAUSED) {
            const t = new gt(l, h, {
              name: "video_resume",
              action: { description: "video was played from pause", reason: "Video was played" }
            });
            k.l(t), this.yt();
          }
          return (this.gt = t.state), (this._t = t.lastKnownTime), (this.Bt = t.lastKnownTimeUpdatedAt), this.vt;
        }
        kt(t) {
          var e;
          return St(this, void 0, void 0, function* () {
            try {
              const e = yield this.Ct.getVideoDataAsync(),
                i = yield this.Ct.getStateAsync();
              (e.is_player_fullscreen = null !== document.fullscreenElement),
                (e.is_chat_visible = this.B.getChatVisible()),
                (e.is_adblock_enabled = this.ut),
                (e.video_ts_ms = Math.round(i.playbackPositionMilliseconds)),
                (e.party_ts_ms = this._t),
                t(e);
            } catch (i) {
              this.Nt(null !== (e = i.message) && void 0 !== e ? e : "Unable to send video data"), t({ error: i });
            }
          });
        }
        Nt(t) {
          const e = new gt(l, h, {
            name: "video_error",
            action: { description: t, reason: "An errors has occurred during video playback" }
          });
          k.l(e);
        }
        lt(t) {
          return St(this, void 0, void 0, function* () {
            return new Promise((e) => {
              const i = performance.now(),
                n = () =>
                  St(this, void 0, void 0, function* () {
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
          return St(this, void 0, void 0, function* () {
            if (this.ct || this.et) return;
            const e = this.gt;
            if (t.data.bufferingState) {
              (t.data.state = R.PAUSED), yield k.l(t, 1e3), yield this.Ct.waitVideoDoneLoadingAsync();
              const i = yield this.Dt();
              (i.data.bufferingState = !0), e == R.PLAYING && (i.data.state = R.PLAYING), yield k.l(i, 1e3);
            } else yield k.l(t, 1e3);
          });
        }
        It(t) {
          return St(this, void 0, void 0, function* () {
            const e = t.sessionCallbackData;
            (this.Pt = e.sessionId),
              (this.gt = e.state),
              (this._t = Number(e.lastKnownTime)),
              (this.Bt = Number(e.lastKnownTimeUpdatedAt)),
              (this.Mt = e.videoId),
              (this.it = !1),
              "true" == e.controlLock && (this.nt = !0),
              t.isCreate ? ((this.st = !0), H.pushTask(this.rt.bind(this), mt)) : this.forceSync();
            const i = new gt(l, h, { name: "video_start", action: { description: "video session has begun" } });
            k.l(i), this.bt.startListening(), this.Wt();
          });
        }
        zt() {
          return new Promise((t) => {
            const e = new ht(l, h),
              i = Date.now();
            k
              .l(e)
              .then((t) => {
                const e = Date.now();
                if (t) {
                  const n = t.serverTime;
                  n && (c(this.X, e - i, 5), (this.q = D(this.X)), c(this.tt, e - Math.round(this.q / 2) - n, 5), (this.Z = D(this.tt)));
                }
              })
              .catch((t) => {
                Q(t), this.Nt(t);
              }),
              t();
          });
        }
        yt() {
          const t = new gt(l, h, {
            name: "video_heartbeat",
            action: { description: "new heartbeat", reason: "Heartbeat session was due" }
          });
          k.l(t);
        }
        Wt() {
          this.Vt && clearInterval(this.Vt),
            this.Ft && clearInterval(this.Ft),
            (this.Vt = setInterval(() => {
              H.hasTaskInQueue(yt) || H.pushTask(this.vt, yt);
            }, 5e3)),
            (this.Ft = setInterval(() => {
              this.yt();
            }, 6e4)),
            (this.Yt = setInterval(() => {
              H.hasTaskInQueue(Ft) || H.pushTask(this.zt.bind(this), Ft);
            }, 12500)),
            this.zt();
        }
        ft() {
          return !this.Pt || this.Ct.uiEventsHappening > 0 || this.et || this.ct || !this.bt.shouldSync();
        }
        wt(t) {
          return St(this, void 0, void 0, function* () {
            const { playbackState: e, playbackPositionMilliseconds: i } = t;
            if ((e !== N.PAUSED && (yield this.Ct.pause()), Math.abs(this._t - i) > 2500)) {
              yield this.Ct.setCurrentTime(this._t);
              const t = new gt(l, h, { name: "video_seek", action: { source: "another user" } });
              k.l(t);
            }
          });
        }
        Et(t) {
          return St(this, void 0, void 0, function* () {
            const { playbackState: e, playbackPositionMilliseconds: i } = t,
              n = this.Ut();
            if ((e == N.PAUSED && (yield this.Ct.play()), Math.abs(n - i) > 2500)) {
              yield this.Ct.setCurrentTime(n), yield this.Ct.play();
              const t = new gt(l, h, { name: "video_seek", action: { source: "another user" } });
              k.l(t);
            }
          });
        }
        Kt() {
          return this.gt === R.PLAYING ? Date.now() - (this.Bt + this.Z) : 0;
        }
        Ut() {
          return this._t + this.Kt();
        }
        get changingVideo() {
          return this.ct;
        }
        set changingVideo(t) {
          this.ct = t;
        }
      }
      const Pt = { showAlert: !1 },
        Vt = { showAlert: !0, alertModal: nt };
      i(5640);
      var $t = function (t, e, i, n) {
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
      function Rt(t, e = "") {
        return `\n\n      <style tpInjected>\n    \n\n      .with-chat {\n        left: 0px !important;\n        width: calc(100% - 340px) !important;\n      }\n\n      .tp-video {\n        transition: width 250ms linear 0.2s;\n      }\n\n      ${e}\n      \n    </style>\n\n    <link tpInjected rel="stylesheet" href="${chrome.runtime.getURL(
          "css/chat.css"
        )}">\n    <link rel="stylesheet" href="${chrome.runtime.getURL("css/alert.css")}">\n\n    ${t}\n  `;
      }
      var Nt = i(7206),
        Ut = i.n(Nt);
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
        Lt = [
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
        Ot = [
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
        Ht = {
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
      function Wt(t) {
        return t
          ? t
              .replace(/&/g, "&amp;")
              .replace(/"/g, "&quot;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
              .replace(/[\r\n]{3,}/gm, "\n\n")
              .replace(
                A,
                `<span style="font-size: ${(function (t) {
                  let e = 16;
                  const i = t.replace(A, "").replace(/[\uFE0F]/g, ""),
                    n = ((t || "").match(A) || []).length;
                  return 0 === i.length && n <= 3 && (e = 32), e;
                })(t)}px">$&</span>`
              )
          : t;
      }
      const zt = {
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
        Kt = function (t, e, i, n) {
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
      class Jt {
        constructor(t) {
          var e, i, n, s, u, o;
          (this.Jt = {
            userIcon: null !== (e = t.userIcon) && void 0 !== e ? e : "",
            userNickname: null !== (i = t.userNickname) && void 0 !== i ? i : "",
            nameColor: null !== (n = t.nameColor) && void 0 !== n ? n : "",
            badge: null !== (s = t.badge) && void 0 !== s ? s : "",
            reactions: null !== (u = t.reactions) && void 0 !== u ? u : b
          }),
            (this.Xt = null !== (o = t.userId) && void 0 !== o ? o : "");
        }
        saveUserIcon(t) {
          (t = Wt(t)),
            (this.Jt.userIcon = t),
            kt.setItemsAsync({ userIcon: t }),
            Q("new user settings after set user icon: " + JSON.stringify(this.Jt));
        }
        saveUserNickname(t) {
          (this.Jt.userNickname = t),
            kt.setItemsAsync({ userNickname: t }),
            Q("new user settings after set user nickname: " + JSON.stringify(this.Jt));
        }
        saveUserSettings(t) {
          return Kt(this, void 0, void 0, function* () {
            const e = Wt(t.userIcon);
            (this.Jt = t),
              (this.Jt.userIcon = e),
              yield kt.setItemsAsync({
                userNickname: t.userNickname,
                userIcon: e,
                nameColor: t.nameColor,
                badge: t.badge,
                reactions: t.reactions
              }),
              Q("new user settings after save: " + JSON.stringify(this.Jt));
          });
        }
        get userSettings() {
          return this.Jt;
        }
        get permId() {
          return this.Xt;
        }
        get userIcon() {
          return this.Jt.userIcon;
        }
        get userNickname() {
          return this.Jt.userNickname;
        }
      }
      class Xt extends x {
        constructor(t, e, i) {
          super(t, e, T.SET_TYPING), (this.data = i);
        }
      }
      class qt extends x {
        constructor(t, e, i) {
          super(t, e, T.SEND_MESSAGE), (this.data = i);
        }
      }
      class Zt extends x {
        constructor(t, e, i) {
          super(t, e, T.BROADCAST_USER_SETTINGS), (this.data = i);
        }
      }
      class te extends x {
        constructor(t, e, i) {
          super(t, e, T.SEND_REACTION), (this.data = i);
        }
      }
      class ee extends x {
        constructor(t, e, i) {
          super(t, e, T.SEND_GIF), (this.data = i);
        }
      }
      var ie = new Uint8Array(16);
      function ne() {
        if (
          !Yt &&
          !(Yt =
            ("undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
            ("undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
        )
          throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return Yt(ie);
      }
      const se = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      const ue = function (t) {
        return "string" == typeof t && se.test(t);
      };
      for (var oe = [], re = 0; re < 256; ++re) oe.push((re + 256).toString(16).substr(1));
      const ae = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = (
            oe[t[e + 0]] +
            oe[t[e + 1]] +
            oe[t[e + 2]] +
            oe[t[e + 3]] +
            "-" +
            oe[t[e + 4]] +
            oe[t[e + 5]] +
            "-" +
            oe[t[e + 6]] +
            oe[t[e + 7]] +
            "-" +
            oe[t[e + 8]] +
            oe[t[e + 9]] +
            "-" +
            oe[t[e + 10]] +
            oe[t[e + 11]] +
            oe[t[e + 12]] +
            oe[t[e + 13]] +
            oe[t[e + 14]] +
            oe[t[e + 15]]
          ).toLowerCase();
        if (!ue(i)) throw TypeError("Stringified UUID is invalid");
        return i;
      };
      const ce = function (t, e, i) {
        var n = (t = t || {}).random || (t.rng || ne)();
        if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), e)) {
          i = i || 0;
          for (var s = 0; s < 16; ++s) e[i + s] = n[s];
          return e;
        }
        return ae(n);
      };
      var De = function (t, e, i, n) {
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
      const he = new (class {
        isUserIconValid(t) {
          return (
            !!t &&
            (t.includes("?newIconUrl=")
              ? Ot.includes(t.split("?newIconUrl=")[1]) && Gt.includes(t.split("?newIconUrl=")[0])
              : Ot.includes(t))
          );
        }
        isUserIdValid(t) {
          return "string" == typeof t && (16 === t.length || 36 === t.length);
        }
        isUserNickNameValid(t) {
          return t && "string" == typeof t && t.length < 20;
        }
        getDefaultUserIcon() {
          return Lt[Math.floor(Math.random() * Lt.length)];
        }
        getDefaultUserNickName() {
          return "";
        }
        qt(t) {
          return De(this, void 0, void 0, function* () {
            try {
              yield kt.setItemsAsync(t);
            } catch (t) {}
          });
        }
        getValidatedChromeStorageDataAsync() {
          return De(this, void 0, void 0, function* () {
            const t = yield Bt.getAllItemsAsync(),
              e = he.validateStorageData(t);
            return JSON.stringify(t) !== JSON.stringify(e) && this.qt(e), e;
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
      Object.freeze(he);
      const de = he;
      var le;
      !(function (t) {
        (t.HEART = "heart"), (t.ANGRY = "angry"), (t.FIRE = "fire"), (t.LAUGH = "laugh"), (t.CRY = "cry"), (t.SURPRISE = "surprise");
      })(le || (le = {}));
      var pe = function (t, e, i, n) {
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
          (this.Zt = this.te.bind(this)),
            (this.ee = this.resetIdleTimer.bind(this)),
            (this.I = (t) => {
              "TP_EMOJI_REQ_RELOAD" === t.data && this.updateFrequentlyUsed(), t.data && "emoji-click" === t.data.type && this.ie(t.data);
            }),
            (this.ne = (t) => {
              (t.target !== jQuery("#chat-input")[0] && t.target !== jQuery("#nickname-edit")[0]) || t.stopImmediatePropagation();
            }),
            (this.se = (t) => {
              this.B.onVideoClick();
              const e = t.target;
              let i = "" !== e.id ? e.id : e.className;
              i = e.getAttribute("data-tp-id") ? e.getAttribute("data-tp-id") : i;
              const n = { name: "user_click", component: { name: i, type: e.nodeName, origin: "other" } },
                s = new gt(l, h, n);
              k.l(s),
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
            (this.ie = (t) => {
              console.log("on Emoji Click");
              const e = jQuery("#chat-input")[0],
                i = t.detail.unicode,
                n = new gt(l, h, { name: "user_click", component: { name: "chat_input_container-emoji_picker-emoji", type: i } });
              k.l(n);
              const s = new gt(l, h, { eventType: `emoji-click-${i}`, sessionId: this.B.getSessionId() });
              k.l(s), H.pushTask(() => this.updateFrequentlyUsed(t.detail.emoji));
              const u = window.getSelection();
              if (!jQuery("#chat-input").is(":focus") && e.lastChild) {
                const t = document.createRange();
                t.setStartAfter(e.lastChild), null == u || u.removeAllRanges(), null == u || u.addRange(t);
              }
              this.B.focusChat(), this.ue(i);
              e.scrollHeight - e.scrollTop <= e.clientHeight + 40 && (e.scrollTop = e.scrollHeight), this.oe(), this.B.onInputChange();
            }),
            (this.B = t);
        }
        re() {
          Q("Idle Warning called"), ot(et);
          const t = new gt(l, h, {
            name: "party_warning",
            action: { description: "user has been warned for being idle", reason: "user was idle for 120000 time in milliseconds." }
          });
          k.l(t);
          const e = new gt(l, h, { eventType: "idle-warn-2hr", sessionId: this.B.getSessionId() });
          k.l(e), (this.ae = setTimeout(this.ce.bind(this), Y));
        }
        ce() {
          Q("Idle kick called");
          const t = new gt(l, h, {
              name: "party_kick",
              action: { description: "user has been kicked for being idle", reason: "user was idle for 7200000 time in milliseconds." }
            }),
            e = new ct(l, h, Vt);
          k.l(t), k.l(e);
        }
        resetIdleTimer() {
          this.De && clearTimeout(this.De), this.ae && (rt(), clearTimeout(this.ae)), (this.De = setTimeout(this.re.bind(this), z));
        }
        he() {
          (this.De = setTimeout(this.re.bind(this), z)),
            (window.onmousemove = (t) => {
              t.isTrusted && this.ee();
            }),
            (window.onfocus = () => this.ee()),
            (window.onmousedown = () => this.ee()),
            (window.ontouchstart = () => this.ee()),
            (window.onkeydown = () => this.ee());
        }
        de() {
          this.De && clearTimeout(this.De),
            this.ae && clearTimeout(this.ae),
            (window.onmousemove = null),
            (window.onmousedown = null),
            (window.ontouchstart = null),
            (window.onkeydown = null);
        }
        startListening() {
          Q("Listening for chat events"), this.he(), this.le(), this.initWindowListeners();
        }
        stopListening() {
          this.pe(), this.de(), this.ve();
        }
        te() {
          this.B.clearUnreadCount();
        }
        ge(t) {
          if ((console.log("Pasting"), t.preventDefault(), t.clipboardData)) {
            const e = t.clipboardData.getData("text/plain");
            document.execCommand("insertHTML", !1, e);
          }
          this.B.onInputChange();
        }
        initWindowListeners() {
          jQuery(window).on("focus", this.Zt),
            window.addEventListener("message", this.I),
            document.addEventListener("dragstart", this.Fe.bind(this)),
            document.addEventListener("webkitfullscreenchange", this.B.onFullScreen),
            document.addEventListener("fullscreenchange", this.B.onFullScreen),
            document.addEventListener("keydown", this.ne, !0),
            document.addEventListener("emoji-click", this.ie),
            document.addEventListener("click", this.se);
        }
        le() {
          jQuery(window).on("focus", this.Zt),
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
            jQuery("#chat-input-container").on("click", this.ye.bind(this)),
            jQuery("#chat-input").on("input", this.oe.bind(this)),
            jQuery("#chat-input").on("drop", this.fe.bind(this)),
            jQuery("#gif-results-wrapper").on("scroll", this.B.onScrollToBottom.bind(this.B)),
            this.Ce(),
            document.addEventListener("keydown", this.ne.bind(this), !0),
            this.B.initCustomListeners();
        }
        Ce() {
          jQuery("#tp-heart-button").on("click", () => {
            this.B.onReactionClicked(le.HEART);
          }),
            jQuery("#tp-cry-button").on("click", () => {
              this.B.onReactionClicked(le.CRY);
            }),
            jQuery("#tp-angry-button").on("click", () => {
              this.B.onReactionClicked(le.ANGRY);
            }),
            jQuery("#tp-surprise-button").on("click", () => {
              this.B.onReactionClicked(le.SURPRISE);
            }),
            jQuery("#tp-laugh-button").on("click", () => {
              this.B.onReactionClicked(le.LAUGH);
            }),
            jQuery("#tp-fire-button").on("click", () => {
              this.B.onReactionClicked(le.FIRE);
            });
        }
        oe() {
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
        fe(t) {
          t.preventDefault();
        }
        Fe(t) {
          t.preventDefault();
        }
        ye(t) {
          t.target === jQuery("#chat-input")[0] && this.B.focusChat();
        }
        ue(t) {
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
        we(t) {
          return "object" == typeof t && null != t && "unicode" in t;
        }
        Ee(t) {
          if (!Array.isArray(t)) return !1;
          if (0 === t.length) return !1;
          for (let e = 0; e < t.length; e++) {
            const i = t[e];
            if (!this.we(i)) return !1;
          }
          return !0;
        }
        updateFrequentlyUsed(t) {
          var e;
          return pe(this, void 0, void 0, function* () {
            const i = yield Bt.getItemsAsync([j]);
            let n = null !== (e = i.recentlyUsedEmojiMap) && void 0 !== e ? e : B;
            this.Ee(n) || (n = B),
              Array.isArray(n) &&
                (t && ((n = n.filter((e) => e.unicode != t.unicode)), n.unshift(t), (n = n.slice(0, 24))),
                yield kt.setItemsAsync({ [j]: n }),
                window.postMessage({ type: "TP_FREQ_USED", data: n }, "*"));
          });
        }
        ve() {
          jQuery(window).off("focus", this.Zt),
            document.removeEventListener("emoji-click", this.ie),
            document.removeEventListener("keydown", this.ne, !0),
            document.removeEventListener("click", this.se),
            window.removeEventListener("message", this.I),
            document.removeEventListener("webkitfullscreenchange", this.B.onFullScreen),
            document.removeEventListener("fullscreenchange", this.B.onFullScreen);
        }
        pe() {
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
      class ge {
        constructor(t) {
          (this.B = t),
            (this.be = []),
            (this.je = 0),
            (this._e = document.title),
            (this.Be = 0),
            (this.Ae = new Map()),
            (this.Qe = new Map()),
            (this.ke = []),
            (this.Ie = []),
            (this.xe = ""),
            Q("Message Controller");
        }
        Te(t, e, i, n) {
          return jQuery(
            `\n            <div class="msg-container ${
              !n && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    <div class="icon">\n                    ${
              n ? `<img src="${Wt(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                    </div>\n                </div>\n                <div class="msg-txt message${
              i.isSystemMessage ? "-system" : "-txt"
            }">\n                    ${
              n ? `<h3 data-tp-id="chat_history_container-nickname">${e}</h3>` : ""
            }\n                    <p data-tp-id="chat_history_container-message">${Wt(
              i.body
            ).trim()}</p>\n                </div>\n            </div>\n          `
          );
        }
        Se(t, e, i, n) {
          const s = 200 / (i.gifObject.media.full.dims[0] / i.gifObject.media.full.dims[1]),
            u = 200 / (i.gifObject.media.fullMobile.dims[0] / i.gifObject.media.fullMobile.dims[1]),
            o = this.B.shouldUseVideoGIF();
          return jQuery(
            `\n            <div class="msg-container ${
              !n && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    <div class="icon" >\n                    ${
              n ? `<img src="${Wt(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                    </div>\n                </div>\n                <div class="msg-gif message-gif">\n                    ${
              n ? `<h3 data-tp-id="chat_history_container-nickname">${e}</h3>` : ""
            }  \n            ${
              o
                ? `<video src="${Wt(
                    i.gifObject.media.full.url
                  )}"  height="${s}" class="tp-video-gif" data-tp-id="chat_history_container-gif" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback>`
                : `<img src="${Wt(
                    i.gifObject.media.fullMobile.url
                  )}"  height="${u}" class="tp-video-gif" data-tp-id="chat_history_container-gif" autoplay muted loop playsinline disablepictureinpicture disableremoteplayback>`
            }     \n                </div>\n            </div>\n          `
          );
        }
        Me(t, e, i) {
          return jQuery(
            `\n            <div class="msg ${
              !i && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    ${
              i ? `<img src="${Wt(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                </div>\n                <div class="message${
              e.isSystemMessage ? "-system" : "-txt"
            }">\n                    <p class="msg-nickname"></p>\n                    <p data-tp-id="chat_history_container-message">${Wt(
              e.body
            ).trim()}</p>\n                </div>\n            </div>\n        `
          );
        }
        Pe(t, e, i) {
          const n = 200 / (e.gifObject.media.full.dims[0] / e.gifObject.media.full.dims[1]),
            s = 200 / (e.gifObject.media.fullMobile.dims[0] / e.gifObject.media.fullMobile.dims[1]),
            u = this.B.shouldUseVideoGIF();
          return jQuery(
            `\n            <div class="msg-container ${
              !i && "tp-msg-combined"
            }-message">\n                <div class="tp-icon-name">\n                    <div class="tp-icon-name">\n                    ${
              i ? `<img src="${Wt(t)}" data-tp-id="chat_history_container-user_icon"/>` : ""
            }\n                    </div>\n                </div>\n                <div class="msg-gif message-gif">\n                    <p class="msg-nickname"></p>\n                    ${
              u
                ? `<video src="${Wt(
                    e.gifObject.media.full.url
                  )}" data-tp-id="chat_history_container-gif" height="${n}" class = "tp-video-gif" autoplay loop playsinline disablepictureinpicture disableremoteplayback>`
                : `<img src="${Wt(
                    e.gifObject.media.fullMobile.url
                  )}" data-tp-id="chat_history_container-gif" height="${s}" class = "tp-video-gif" autoplay loop playsinline disablepictureinpicture disableremoteplayback>`
            }\n                </div>\n            </div>\n          `
          );
        }
        Ve(t, e, i, n, s) {
          t.appendTo(jQuery("#chat-history"));
          const u = t[0];
          (u.Xt = e.permId), (u.$e = i), (u.Re = n), (u.Ne = e), (u.Ue = s);
        }
        reloadMessages() {
          this.B.queueMessageForFrame(P.CLEAR_MESSAGES, "");
          const t = JSON.parse(JSON.stringify(this.be));
          for (let e = 0; e < t.length; e++) {
            const i = t[e];
            "gifObject" in i ? this.addGif(i, e) : this.addMessage(i, !1, e);
          }
          this.be = t;
        }
        Ge(t, e) {
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
            (void 0 === i && (i = this.be.length),
            t.isSystemMessage && "left" === t.body && (console.log("trying to add left message"), !t.userIcon && !this.Ae.has(t.permId)))
          )
            return;
          if (0 === i && t.isSystemMessage && t.body.includes("joined")) return;
          e &&
            t.isSystemMessage &&
            t.body.indexOf("updated their user icon") > -1 &&
            (t.userIcon && this.setUserIcon(t.permId, t.userIcon), t.userNickname && this.setUserNickname(t.permId, t.userNickname));
          const n = this.be.slice(-1).pop(),
            s = !(void 0 !== n && i > 0) || !this.Ge(n, t);
          this.be.push(t);
          const u = Object.assign({}, t),
            o = this.getUserIconURL(u.permId, u.userIcon),
            r = this.getUserNickname(u.permId, u.userNickname);
          this.B.queueMessageForFrame(P.ADD_MESSAGE, { originalMessage: u, userIcon: o, userNickname: r });
          const a = "" === r ? this.Me(o, u, s) : this.Te(o, r, u, s);
          this.Ve(a, u, o, r, s), this.scrollToBottom(), this.Le();
        }
        addGif(t, e) {
          void 0 === e && (e = this.be.length);
          const i = this.be.slice(-1).pop(),
            n = !(void 0 !== i && e > 0) || !this.Ge(i, t);
          this.be.push(t);
          const s = t.userIcon ? this.getUserIconURL(t.permId, t.userIcon) : this.getUserIconURL(t.permId),
            u = t.userNickname ? this.getUserNickname(t.permId, t.userNickname) : "";
          this.B.queueMessageForFrame(P.ADD_MESSAGE, { originalMessage: t, userIcon: s, userNickname: u });
          const o = "" === u ? this.Pe(s, t, n) : this.Se(s, u, t, n);
          (o[0].Oe = !0), this.Ve(o, t, s, u, n), r(100)().then(this.scrollToBottom.bind(this)), this.Le();
        }
        scrollToBottom() {
          jQuery("#chat-history").scrollTop(jQuery("#chat-history").prop("scrollHeight"));
        }
        clearUnreadCount() {
          this.je > 0 && ((this.je = 0), (document.title = this._e));
        }
        Le() {
          (this.je += 1), (this.Be += 1), document.hasFocus() || (document.title = "(" + String(this.je) + ") " + this._e);
        }
        getUserIconURL(t, e = "") {
          if (!this.Ae.has(t)) {
            const i = this.parseIconSrc(e),
              n = void 0 !== i ? i : this.He();
            this.Ae.set(t, n), this.Ie.push(n);
          }
          return this.Ae.get(t);
        }
        parseIconSrc(t) {
          const e = t.includes("?newIconUrl=") ? t.split("?newIconUrl=")[1] : t,
            i = t.includes("?newIconUrl=") ? t.split("?newIconUrl=")[0] : t;
          return Ot.includes(e)
            ? chrome.runtime.getURL("img/icons/" + t)
            : Gt.includes(i)
            ? chrome.runtime.getURL("img/icons/General/" + t)
            : void 0;
        }
        getUserNickname(t, e = "") {
          return this.Qe.has(t) || (this.Qe.set(t, e), this.ke.push(e)), Wt(this.Qe.get(t));
        }
        He() {
          let t = chrome.runtime.getURL("img/icons/General/" + Gt[Math.floor(Math.random() * Gt.length)]);
          if (this.Ie.length < Ht.General.length)
            for (; this.Ie.includes(t); ) t = chrome.runtime.getURL("img/icons/General/" + Gt[Math.floor(Math.random() * Gt.length)]);
          return t;
        }
        We(t) {
          const e = t[0],
            i = e.Xt;
          let n = e.$e;
          i && this.getUserIconURL(i) !== n && ((n = this.getUserIconURL(i)), t.find("img").attr("src", n), (e.$e = n));
          const s = e.Re;
          if (i && n) {
            const u = this.getUserNickname(i);
            if (u !== s) {
              const s = e.Ne,
                o = e.Ue;
              let r;
              if (
                (e.Oe && s && "gifObject" in s && o && (r = "" == u ? this.Pe(n, s, o) : this.Se(n, u, s, o)),
                !e.Oe && s && "isSystemMessage" in s && o && (r = "" == u ? this.Me(n, s, o) : this.Te(n, u, s, o)),
                r)
              ) {
                t.replaceWith(r);
                const e = r[0];
                (e.Xt = i), (e.$e = n), (e.Re = u), (e.Ne = s), (e.Ue = o);
              }
            }
          }
        }
        setUserIconUrl(t) {
          (this.xe = t), this.B.queueMessageForFrame(P.SET_USER_ICON_URL, t);
        }
        renderSidebar() {
          jQuery("#user-icon img").attr("src", this.xe), jQuery(".user-icon img").attr("src", this.xe);
          const t = jQuery(".msg");
          for (let e = 0; e < t.length; e++) this.We(jQuery(t[e]));
          const e = jQuery(".msg-container");
          for (let t = 0; t < e.length; t++) this.We(jQuery(e[t]));
          this.B.isChatFrameActive() && this.reloadMessages();
        }
        ze(t) {
          let e = null;
          if (t)
            if (t.includes("?newIconUrl=")) {
              const i = t.split("?newIconUrl="),
                n = i[1],
                s = i[0];
              Ot.includes(n)
                ? (e = chrome.runtime.getURL(`img/icons/${n}`))
                : Gt.includes(s) && (e = chrome.runtime.getURL(`img/icons/General/${s}`));
            } else
              Ot.includes(t)
                ? (e = chrome.runtime.getURL(`img/icons/${t}`))
                : Gt.includes(t) && (e = chrome.runtime.getURL(`img/icons/General/${t}`));
          if (null === e) {
            let t = Ht.General.filter((t) => !this.Ie.includes(t));
            0 === t.length && (t = Ht.General);
            const i = t[Math.floor(Math.random() * t.length)];
            e = chrome.runtime.getURL(`/img/icons/General/${i}`);
          }
          return e;
        }
        setUserIcon(t, e) {
          const i = this.ze(e);
          this.Ae.set(t, i), this.Ie.push(i), this.renderSidebar();
        }
        setUserNickname(t, e) {
          const i = Wt(e);
          this.Qe.set(t, i), this.ke.push(i), this.renderSidebar();
        }
        updateUserData(t, e, i) {
          const n = this.ze(e);
          this.Ae.set(t, n), this.Ie.push(n), this.Qe.set(t, i), this.ke.push(i), this.renderSidebar();
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
          const t = new gt(l, h, {
            name: "review-shown",
            action: { description: "review was shown on chrome", reason: "review was shown." }
          });
          k.l(t);
          const e = { eventType: "review-shown-chrome", sessionId: this.B.getSessionId() },
            i = new gt(l, h, e);
          k.l(i),
            jQuery("#reviewLink").click(() => {
              chrome.storage.local.set({ reviewClicked: !0 });
              const t = new gt(l, h, {
                name: "review-clicked",
                action: { description: "review was clicked on chrome", reason: "review was clicked." }
              });
              k.l(t);
              const e = { eventType: "review-clicked-chrome", sessionId: this.B.getSessionId() },
                i = new gt(l, h, e);
              k.l(i);
            });
        }
      }
      class Fe {
        constructor(t) {
          (this.Ye = !1), (this.Ke = !1), (this.it = !1), (this.B = t);
        }
        setupPresenceIndicator() {
          (this.Ye = !1), (this.Ke = !1), (this.it = !1), this.Je();
        }
        Xe() {
          return jQuery("#presence-indicator");
        }
        setTypingPresenceVisible(t) {
          (this.Ye = t), this.Je();
        }
        setBufferingPresenceVisible(t) {
          (this.Ke = t), this.Je();
        }
        setWatchingAdsPresenceVisible(t) {
          (this.it = t), this.Je();
        }
        getWatchingAdsVisible() {
          return this.it;
        }
        qe() {
          return this.it
            ? "People are watching ads..."
            : this.Ye && this.Ke
            ? "People are typing and buffering..."
            : this.Ye
            ? "People are typing..."
            : this.Ke
            ? "People are buffering..."
            : "";
        }
        Je() {
          const t = this.qe();
          this.Xe().text(t), this.B.queueMessageForFrame(P.SET_PRESENCE_MESSAGE, { text: t });
        }
      }
      var ye,
        me = function (t, e, i, n) {
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
        (t.YOUTUBE_VIDEO = "vod"), (t.YOUTUBE_SHORT = "short"), (t.YOUTUBE_LIVE = "livestream"), (t.YOUTUBE_TV = "tv"), (t.NONE = "none");
      })(ye || (ye = {}));
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
      class Ce extends class {
        constructor() {
          (this.Ze = !1),
            (this.ti = 1),
            (this.ei = ""),
            (this.Pt = ""),
            (this.ii = "0"),
            (this.ni = ""),
            (this.si = !0),
            (this.ui = !1),
            (this.oi = 0),
            (this.ri = []),
            (this.ai = new O()),
            (this.ci = !1),
            (this.Di = void 0),
            (this.hi = !0),
            (this.di = this.li()),
            (this.pi = this.li()),
            (this.vi = !1),
            (this.gi = !1),
            (this.Fi = []),
            (this.logEvent = (t) => {
              const e = new gt(l, h, t);
              k.l(e);
            }),
            (this.checkInitReactionContainer = () => {
              Bt.getItemsAsync([y]).then((t) => {
                (!0 !== t.reactionContainerOpen && void 0 !== t.reactionContainerOpen) || this.showReactionHolder();
              });
            }),
            (this.onSidebarFocus = () => {
              var t;
              null === (t = this.A) || void 0 === t || t.hideMessageIndicator();
            }),
            (this.setReactionsActive = (t) => {
              this.ai.pushTask(() => kt.setItemsAsync({ [y]: t.active }));
            }),
            (this.onFullScreen = () => {
              var t;
              this.scrollToBottom(),
                null != document.fullscreenElement
                  ? (this.logEvent({ name: "fullscreen_enter" }),
                    this.li() && ((this.di = !1), this.setChatVisible(this.shouldChatBeVisible())))
                  : (this.logEvent({ name: "fullscreen_exit" }),
                    this.li() && ((this.di = this.li()), jQuery("#chat-wrapper").hide(), this.setChatVisible(!1, !1), this.removeChat())),
                null === (t = this.A) || void 0 === t || t.setChatButtons();
            }),
            (this.cancelEvent = (t) => {
              t.stopPropagation();
            }),
            (this.yi = !1),
            (this.mi = new ve(this)),
            (this.fi = new Fe(this)),
            (this.Ci = new ge(this)),
            (this.wi = void 0),
            (this.Ei = void 0),
            (this.bi = !1);
        }
        setPageControls(t) {
          this.A = t;
        }
        fixPageControls() {
          var t, e;
          null === (t = this.A) || void 0 === t || t.enablePartyIcons(), null === (e = this.A) || void 0 === e || e.setChatButtons();
        }
        setChatVisible(t, e = !0) {
          return me(this, void 0, void 0, function* () {
            if (this.isPartyWindowsActive()) throw new Error("Invalid Set Chat");
            e && (this.si = t), t && !this.ji() && this.reloadChat();
          });
        }
        Nt(t, e) {
          const i = new gt(l, h, { name: "error", action: { reason: e, description: t } });
          k.l(i);
        }
        getChatWindowVisible() {
          return this.pi;
        }
        setChatWindowActive(t) {
          this.di = t;
        }
        isChatFrameActive() {
          return this.hi;
        }
        isPartyWindowsActive() {
          return this.di;
        }
        shouldChatBeVisible() {
          return this.si;
        }
        incrementEmojiCount() {
          this.oi++;
        }
        resetEmojiCount() {
          this.oi = 0;
        }
        getEmojiCount() {
          return this.oi;
        }
        setChatFrameReady(t) {
          this.ci && this._i(), (this.ci = !0), (this.Bi = t), console.log("setChatFrameReady");
        }
        queueMessageForFrame(t, e) {
          this.ai.pushTask(() =>
            me(this, void 0, void 0, function* () {
              this.Ai(t, e);
            })
          );
        }
        Ai(t, e) {
          return me(this, void 0, void 0, function* () {
            const i = this.Bi,
              n = { type: t, data: e, target: "TP_Sidebar", tabId: i, sender: l };
            k.l(n);
          });
        }
        Qi() {
          var t;
          return me(this, void 0, void 0, function* () {
            try {
              console.log("Start delay"),
                yield a(() => this.ci && null != this.Bi, 3e4)(),
                console.log("Chat Frame is Loaded"),
                this.Di && this.ki(this.Di),
                null === (t = this.A) || void 0 === t || t.setResetChatButton();
            } catch (t) {
              this.Nt("Sidewindow didn't load in time", t);
            }
          });
        }
        li() {
          return !1;
        }
        Ii() {
          return me(this, void 0, void 0, function* () {
            yield k.l(new at(l, h, S.LOAD_CHAT_WINDOW)), console.log(this.Bi);
          });
        }
        resetChatWindow(t = !1) {
          var e;
          return me(this, void 0, void 0, function* () {
            yield k.l(new at(l, h, S.RESET_CHAT_WINDOW)),
              console.log(this.Bi),
              (this.pi = !0),
              (this.si = !0),
              top.postMessage({ type: "exitFullscreen" }, "*"),
              this.vi && t && (this.resetIconListener(), null === (e = this.A) || void 0 === e || e.setResetChatButton());
          });
        }
        hideChatWindow() {
          return me(this, void 0, void 0, function* () {
            yield k.l(new at(l, h, S.HIDE_CHAT_WINDOW)), (this.pi = !1), (this.si = !1);
          });
        }
        xi() {
          return me(this, void 0, void 0, function* () {
            this.Ii(), this.ai.pushTask(this.Qi.bind(this));
          });
        }
        loadInitData(t) {
          this.Di = t;
        }
        ki(t) {
          var e;
          return me(this, void 0, void 0, function* () {
            const i = Object.assign({}, t);
            if (((i.iconMap = Ht), (i.extensionBaseUrl = chrome.runtime.getURL("")), i.storageData)) {
              const t = yield de.getValidatedChromeStorageDataAsync();
              i.storageData = t;
            }
            this.queueMessageForFrame(P.LOAD_INIT_DATA, i);
            const n = yield this.getVideoTitle();
            this.queueMessageForFrame(P.SET_PAGE_TITLE, { pageTitle: n }),
              this.queueMessageForFrame(P.SET_USER_LIST, this.Fi),
              this.queueMessageForFrame(P.UPDATE_SETTINGS, {
                userSettings: null === (e = this.Ti) || void 0 === e ? void 0 : e.userSettings
              });
          });
        }
        _i() {
          return me(this, void 0, void 0, function* () {
            if ((console.log("Reloading chat Frame"), this.Di && (yield this.ki(this.Di)), this.Ti)) {
              const t = this.Ci.getUserIconURL(this.Ti.permId, this.Ti.userIcon);
              this.queueMessageForFrame(P.SET_USER_ICON_URL, t);
            }
            const t = yield this.getVideoTitle();
            this.queueMessageForFrame(P.SET_PAGE_TITLE, { pageTitle: t }), this.reloadMessages();
          });
        }
        Si() {
          return me(this, void 0, void 0, function* () {
            this.Mi(),
              yield r(200)(),
              (jQuery("#tpChatFrame")[0].style.display = "block"),
              this.setChatVisible(!0),
              this.addIconSelector(),
              this.Pi(),
              this.fi.setupPresenceIndicator(),
              this.checkInitReactionContainer();
          });
        }
        U(t) {
          this.mi.initWindowListeners(), this.li() && this.xi(), this.ai.pushTask(this.Qi.bind(this)), rt(), (this.Ti = new Jt(t));
          const e = this.Ci.getUserIconURL(this.Ti.permId, this.Ti.userIcon);
          this.Ci.setUserIconUrl(e),
            this.Ci.renderSidebar(),
            this.ji() && this.removeChat(),
            (this.yi = !0),
            this.Vi(),
            this.li()
              ? jQuery("body").after(
                  `\n    <link rel="stylesheet" href="${chrome.runtime.getURL(
                    "css/alert.css"
                  )}">\n    <style tpInjected>\n      .on-screen-reaction {\n        position: absolute;\n        bottom: 0;\n        font-size: 100px;\n        z-index: 9999999999;\n      }\n      .on-screen-reaction-1 {\n        animation: 5s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-1;\n      }\n      .on-screen-reaction-2 {\n        animation: 6s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-2;\n      }\n      .on-screen-reaction-3 {\n        animation: 7s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-slide,\n          12s cubic-bezier(0.5, 1, 0.89, 1) forwards on-screen-reaction-3;\n      }\n      @keyframes on-screen-reaction-slide {\n        0% {\n          opacity: 0;\n          transform: translateY(calc(0 - var(--reaction-size)));\n        }\n        20% {\n          opacity: 0.8;\n        }\n        30% {\n          opacity: 0.8;\n        }\n        90% {\n          opacity: 0;\n        }\n        100% {\n          transform: translateY(-100vh) translateX(-10px);\n          opacity: 0;\n        }\n      }\n      @keyframes on-screen-reaction-1 {\n        10% {\n          margin-left: -6px;\n        }\n        25% {\n          margin-left: 4px;\n        }\n        30% {\n          margin-left: -5px;\n        }\n        45% {\n          margin-left: 5px;\n        }\n        55% {\n          margin-left: -3px;\n        }\n        60% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        85% {\n          margin-left: 5px;\n        }\n        90% {\n          margin-left: -7px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n      @keyframes on-screen-reaction-2 {\n        15% {\n          margin-left: -2px;\n        }\n        20% {\n          margin-left: 5px;\n        }\n        35% {\n          margin-left: -6px;\n        }\n        40% {\n          margin-left: 5px;\n        }\n        50% {\n          margin-left: -5px;\n        }\n        65% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        80% {\n          margin-left: 4px;\n        }\n        95% {\n          margin-left: -5px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n      @keyframes on-screen-reaction-3 {\n        15% {\n          margin-left: -4px;\n        }\n        20% {\n          margin-left: 5px;\n        }\n        35% {\n          margin-left: -2px;\n        }\n        40% {\n          margin-left: 5px;\n        }\n        50% {\n          margin-left: -3px;\n        }\n        65% {\n          margin-left: 5px;\n        }\n        70% {\n          margin-left: -5px;\n        }\n        80% {\n          margin-left: 5px;\n        }\n        95% {\n          margin-left: -4px;\n        }\n        100% {\n          margin-left: 5px;\n        }\n      }\n    </style>\n  `
                )
              : (this.Si(), this.checkAddYoutubePromo());
        }
        checkAddYoutubePromo() {
          return me(this, void 0, void 0, function* () {
            "true" !== (yield Bt.getItemsAsync(["seenYoutubePromo"])).seenYoutubePromo &&
              (this.Ci.addYoutubePromo(), kt.setItemsAsync({ seenYoutubePromo: "true" }));
          });
        }
        sendInitDataToSidebar(t) {
          this.Di = t;
          const e = Object.assign({}, t);
          (e.iconMap = Ht),
            (e.extensionBaseUrl = chrome.runtime.getURL("")),
            console.log(e),
            this.queueMessageForFrame(P.LOAD_INIT_DATA, e);
        }
        reloadChat() {
          return me(this, void 0, void 0, function* () {
            console.log("Reload chat"),
              this.ji() ||
                this.isPartyWindowsActive() ||
                (this.Mi(),
                yield r(200)(),
                (jQuery("#tpChatFrame")[0].style.display = "block"),
                this.setChatVisible(this.si),
                this.addIconSelector(),
                this.$i(),
                this.Pi(),
                this.fi.setupPresenceIndicator(),
                this.reloadMessages(),
                this.scrollToBottom(),
                this.checkInitReactionContainer());
          });
        }
        sendTeardown(t) {
          const e = new ct(l, h, t);
          k.l(e);
        }
        ji() {
          return jQuery("#chat-wrapper").length > 0;
        }
        clearUnreadCount() {
          this.Ci.clearUnreadCount();
        }
        Ri() {
          return me(this, void 0, void 0, function* () {
            try {
              yield a(() => null !== document.querySelector("#chat-history") || this.di || (this.ci && this.hi), 1e4)();
            } catch (t) {
              this.Nt("Failed to find chat history", t);
            }
          });
        }
        addMessage(t, e = !1) {
          this.ai.pushTask(() =>
            me(this, void 0, void 0, function* () {
              yield this.Ri(), this.Ci.addMessage(t, e);
            })
          );
        }
        addGif(t) {
          this.ai.pushTask(() =>
            me(this, void 0, void 0, function* () {
              yield this.Ri(), this.Ci.addGif(t);
            })
          );
        }
        reloadMessages() {
          this.Ci.reloadMessages();
        }
        scrollToBottom() {
          this.Ci.scrollToBottom();
        }
        addReviewMessage() {
          this.Ci.addReviewMessage(), (this.bi = !0);
        }
        get showingReveiwMessage() {
          return this.bi;
        }
        set shouldReturnToVideo(t) {
          this.vi = t;
        }
        onBufferingMessage(t) {
          this.ai.pushTask(() =>
            me(this, void 0, void 0, function* () {
              yield this.Ri(), this.fi.setBufferingPresenceVisible(t.usersBuffering.length > 0);
            })
          );
        }
        onTypingMessage(t) {
          this.ai.pushTask(() =>
            me(this, void 0, void 0, function* () {
              yield this.Ri(), this.fi.setTypingPresenceVisible(t.usersTyping.length > 0);
            })
          );
        }
        onWatchingAdsMessage(t) {
          this.ai.pushTask(() =>
            me(this, void 0, void 0, function* () {
              console.log("Set Ad Presence: " + t), yield this.Ri(), this.fi.setWatchingAdsPresenceVisible(t.usersWatchingAds.length > 0);
            })
          );
        }
        getWatchingAds() {
          return this.fi.getWatchingAdsVisible();
        }
        doUpdateSettings(t) {
          var e;
          null === (e = this.Ti) || void 0 === e || e.saveUserSettings(t), t.shouldBroadcast && this.Ni(this.Ui(t));
        }
        onUpdateSettingsMessage(t) {
          if ((this.Ci.updateUserData(t.permId, t.userSettings.userIcon, t.userSettings.userNickname), this.Ti)) {
            const t = this.Ci.getUserIconURL(this.Ti.permId, this.Ti.userIcon);
            this.Ci.setUserIconUrl(t), this.Ci.renderSidebar();
          }
        }
        Pi() {
          a(() => this.ji(), 1e4)().then(() => {
            this.mi.startListening();
          });
        }
        $i() {
          this.mi.stopListening(), this.Gi && (clearTimeout(this.Gi), (this.ui = !1));
        }
        teardown() {
          (this.yi = !1),
            (this.Pt = void 0),
            (this.Li = void 0),
            this.$i(),
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
            this.ai.pushTask(() => kt.setItemsAsync({ [y]: !1 }));
        }
        onOpenGifPicker() {
          var t, e;
          return me(this, void 0, void 0, function* () {
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
              t ? this.hideReactionHolder() : this.showReactionHolder(), !t && e && this.Ci.scrollToBottom();
            });
        }
        onVideoClick() {
          this.queueMessageForFrame(P.ON_PAGE_CLICK);
        }
        toggleGIFs() {
          jQuery("#gif-picker-container").slideToggle(0, () => {
            jQuery("#gif-picker-container").is(":hidden") ? this.onCloseGifPicker() : this.onOpenGifPicker();
          });
        }
        addEmojiPicker(t) {
          t.stopPropagation();
          const e = new gt(l, h, {
            name: "user_click",
            component: { name: "chat_input_container-emoji_picker", type: "button", origin: "tp" }
          });
          k.l(e), this.toggleEmojiClicker();
        }
        addGifPicker(t) {
          t.stopPropagation();
          const e = new gt(l, h, {
            name: "user_click",
            component: { name: "chat_input_container-gif_popup", type: "button", origin: "tp" }
          });
          k.l(e), this.toggleGIFs();
        }
        addReactionTab(t) {
          t.stopPropagation();
          const e = new gt(l, h, {
            name: "user_click",
            component: { name: "chat_input_container-reaction_pinner", type: "button", origin: "tp" }
          });
          k.l(e), this.toggleReactions();
        }
        Vi() {
          if (
            (Q("Set Chat Html called"),
            (this.Oi = Ut()),
            (this.Oi = this.Oi.replace(/{EXTENSION_LOGO}/g, Wt(chrome.runtime.getURL("img/tp_logo.svg")))),
            void 0 === this.Ti)
          )
            throw new Error("Attempt to set chatHtml when _userSettings is undefined.");
          this.Oi = this.Oi.replace(/{CHAT_URL}/g, `${w}?t=${Date.now()}`);
          for (const t of E) {
            const e = new RegExp(`${t}_STATIC`.toUpperCase(), "g"),
              i = new RegExp(`${t}_GIF`.toUpperCase(), "g");
            (this.Oi = this.Oi.replace(e, chrome.runtime.getURL(`img/reactions/${t}/${t}_static.svg`))),
              (this.Oi = this.Oi.replace(i, chrome.runtime.getURL(`img/reactions/${t}/${t}.gif`)));
          }
          (this.Oi = this.Oi.replace(/{USER_NICKNAME}/g, this.Ti.userNickname ? Wt(this.Ti.userNickname) : "Add a nickname")),
            (this.Oi = this.Oi.replace(/{USER_ICON}/g, this.Ci.getUserIconURL(this.Ti.permId, this.Ti.userIcon))),
            (this.Oi = this.Oi.replace(/{LINK_SVG}/g, chrome.runtime.getURL("img/icon_link_active.svg"))),
            (this.Oi = this.Oi.replace(/{RESET_SGV}/g, chrome.runtime.getURL("img/reset_chat.svg"))),
            (this.Oi = this.Oi.replace(/{EMOJI_PICKER_ICON}/g, chrome.runtime.getURL("img/emoji_picker.svg"))),
            (this.Oi = this.Oi.replace(/{REACTION_PICKER_ICON}/g, chrome.runtime.getURL("img/reaction-popup.svg"))),
            (this.Oi = this.Oi.replace(/{GIF_PICKER_ICON}/g, chrome.runtime.getURL("img/gif_icon.svg"))),
            (this.Oi = this.Oi.replace(/{GIF_BACK_BUTTON}/g, chrome.runtime.getURL("img/icon_chevron.svg"))),
            (this.Oi = this.Oi.replace(/{EMOJI_LIB}/g, chrome.runtime.getURL("lib/tp_emoji/picker_bundled.js"))),
            (this.Oi = this.Oi.replace(/{EMOJI_FRAME}/g, chrome.runtime.getURL("web/emojiPicker.html"))),
            (this.Oi = this.Oi.replace(/{X_CIRCLE}/g, chrome.runtime.getURL("img/x-circle.svg")));
        }
        toggleIconContainer() {
          var t, e, i, n;
          jQuery("#chat-icon-container").data("active")
            ? (jQuery("#chat-icon-container").data("active", !1),
              jQuery("#chat-icon-container").slideUp(),
              jQuery(".chat-settings-container").slideUp(),
              jQuery("#sidebar-tabs-container").slideDown(),
              this.gi ? jQuery("#chat-history-container").slideDown() : jQuery("#chat-friends-frame").slideDown(),
              this.ui && jQuery("#chat-ad-holder").show(),
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
                null !== (e = null === (t = this.Ti) || void 0 === t ? void 0 : t.userNickname) && void 0 !== e ? e : ""
              ),
              (jQuery("#nickname-edit")[0].value =
                null !== (n = null === (i = this.Ti) || void 0 === i ? void 0 : i.userNickname) && void 0 !== n ? n : ""));
        }
        togglePartyTab() {
          jQuery("#friends-tab").toggleClass("sidebar-tab-inactive", !0),
            jQuery("#party-tab").toggleClass("sidebar-tab-inactive", !1),
            jQuery("#chat-history-container").show(),
            jQuery("#chat-friends-frame").slideUp(),
            jQuery("#chat-input-container").show(),
            (this.gi = !0);
        }
        toggleFriendsTab() {
          jQuery("#friends-tab").toggleClass("sidebar-tab-inactive", !1),
            jQuery("#party-tab").toggleClass("sidebar-tab-inactive", !0),
            jQuery("#chat-friends-frame").removeClass("hidden"),
            jQuery("#chat-friends-frame").slideDown(),
            jQuery("#chat-history-container").slideUp(),
            jQuery("#chat-input-container").hide(),
            (this.gi = !1);
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
          if (null === (t = this.Hi) || void 0 === t ? void 0 : t.videoId) {
            const t = new CustomEvent("YoutubeVideoMessage", { detail: { type: "jumpToNextEpisode", nextVideoId: this.Hi.videoId } });
            window.dispatchEvent(t);
          }
        }
        setPartyUrl(t) {
          this.ei = t;
        }
        setMessageForwarder(t) {
          this.Hi = t;
        }
        setSessionId(t) {
          this.Pt = t;
        }
        onWebRTC(t) {
          this.queueMessageForFrame(P.ON_WEB_RTC, t);
        }
        setSocketConnectionId(t) {
          this.queueMessageForFrame(P.SET_CONNECTION_ID, t);
        }
        loadUserList(t) {
          t.forEach((t) => {
            if (void 0 !== t.userSettings && void 0 !== t.permId) {
              const e = t.userSettings,
                i = this.Ci.getUserIconURL(t.permId, e.userIcon),
                n = this.Ci.getUserNickname(t.permId, e.userNickname);
              t.parsedData = { userIconUrl: i, userNickname: n };
            }
          }),
            (this.Fi = t),
            jQuery("#user-count").text(t.length),
            this.queueMessageForFrame(P.SET_USER_LIST, t);
        }
        setSessionCreated(t) {
          this.Li = t;
        }
        getSessionCreated() {
          return this.Li;
        }
        getSessionId() {
          return this.Pt;
        }
        getPartyUrl() {
          return this.ei;
        }
        userIconSelectorListener(t) {
          const e = jQuery(t.currentTarget).data("icon");
          e &&
            (Q("userIconSelector button clicked: " + e),
            this.Ti &&
              (this.Ti.saveUserIcon(e),
              this.queueMessageForFrame(P.UPDATE_SETTINGS, { userSettings: this.Ti.userSettings }),
              this.Ni(this.Ui(this.Ti.userSettings)))),
            this.toggleIconContainer();
        }
        removeChat() {
          this.clearUnreadCount(), jQuery("#chat-container").remove(), jQuery("#chat-wrapper").remove();
        }
        Ni(t, e) {
          k.l(t).then(e);
        }
        Wi(t) {
          return new te(l, h, { reactionType: t });
        }
        zi(t) {
          return new ee(l, h, { gifObject: t });
        }
        Yi(t) {
          return new qt(l, h, { body: t });
        }
        Ki(t) {
          return new Xt(l, h, { typing: t });
        }
        Ui(t) {
          return new Zt(l, h, { userSettings: t });
        }
        Ji(t) {
          return chrome.runtime.getURL(`img/reactions/${t}/${t}.gif`);
        }
        showReaction(t) {
          if (!this.shouldShowReaction()) return;
          const e = t.reactionType,
            i = this.getReactionContainer();
          if (i) {
            const t = Math.floor(40 * Math.random()) + 40,
              n = i[0].offsetWidth - (this.shouldAddReactionSpace() ? g : 0) - t,
              s = Math.floor(Math.random() * n) + (this.shouldAddReactionSpace() ? g : 0),
              u = this.Ji(e),
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
          console.log(t), this.Ni(this.Wi(t));
          const e = new gt(l, h, {
            name: "user_click",
            component: { name: "chat_input_container-reaction_holder-reaction", type: t, origin: "tp" }
          });
          k.l(e);
          const i = new gt(l, h, { eventType: "reaction-" + t, sessionId: this.getSessionId() });
          k.l(i);
        }
        onChatKeyUp(t) {
          t.stopPropagation();
        }
        onChatKeyDown(t) {
          t.stopPropagation(), this.mi.resetIdleTimer();
        }
        initCustomListeners() {}
        getClientLocale() {
          if ("undefined" != typeof Intl)
            try {
              return Intl.NumberFormat().resolvedOptions().locale;
            } catch (t) {
              console.error("Cannot get locale from Intl"), this.Nt("Cannot get locale from Intl", t);
            }
        }
        clickGif(t) {
          console.log("GIF was clicked");
          let e = t.target.id;
          if (isNaN(e)) (e = "trending" === e ? "" : e), this.fetchGIFs(e), (jQuery("#gif-search")[0].value = e);
          else {
            const t = this.ri.find((t) => t.id === e);
            if (!t) return;
            const i = { id: t.id, title: t.title, description: t.content_description, isSticker: !1, media: t.media };
            this.Ni(this.zi(i), () => {
              this.logShare(t.id, jQuery("#gif-search")[0].value);
              const e = {
                  name: "user_click",
                  action: { description: "gif clicked", source: t.media.full.url },
                  component: { name: "chat_input_container-gif_popup-gif", type: "video", origin: "tp" }
                },
                i = new gt(l, h, e);
              k.l(i);
              const n = new gt(l, h, { eventType: "gif-share", sessionId: this.getSessionId() });
              k.l(n);
            }),
              this.toggleGIFs();
          }
        }
        Xi(t) {
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
        qi(t) {
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
            this.ri.push(...t.results),
            (this.ii = t.next),
            t.results.forEach((t) => {
              const e = this.shouldUseVideoGIF() ? this.Xi(t) : this.qi(t);
              (jQuery("#gif-results-left")[0].scrollHeight > jQuery("#gif-results-right")[0].scrollHeight
                ? jQuery("#gif-results-right")[0]
                : jQuery("#gif-results-left")[0]
              ).appendChild(e);
            }),
            this.ti < 6 && this.Zi(),
            setTimeout(() => {
              this.Ze = !1;
            }, 100);
        }
        onScrollToBottom(t) {
          return me(this, void 0, void 0, function* () {
            const e = t.target.scrollHeight - t.target.scrollTop <= t.target.clientHeight + 450;
            if (this.Ze) t.preventDefault();
            else if ("0" !== this.ii && e && this.ti < 6) {
              (this.ti += 1), (this.Ze = !0), t.preventDefault();
              const e = yield fetch(this.ni + `&pos=${this.ii}`),
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
        tn() {
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
        Zi() {
          return me(this, void 0, void 0, function* () {
            jQuery("#gif-results-left")[0].append(...this.tn()), jQuery("#gif-results-right")[0].append(...this.tn());
          });
        }
        logShare(t, e) {
          return me(this, void 0, void 0, function* () {
            const i = this.getClientLocale(),
              n = i ? `&locale=${i}` : "",
              s = `&id=${t}`,
              u = e && e.length > 0 ? `q=${e}` : "";
            yield fetch(`${m}/register-share?${u}${n}${s}`);
          });
        }
        fetchGIFs(t) {
          return me(this, void 0, void 0, function* () {
            const e = yield this.getVideoTitle(),
              i = null == e ? void 0 : e.replace(/[^\w\s]/g, "");
            (this.ti = 1),
              (this.Ze = !0),
              jQuery("#category-container").hide(),
              jQuery("#gif-columns-wrapper").show(),
              (jQuery("#gif-results-left")[0].innerHTML = ""),
              (jQuery("#gif-results-right")[0].innerHTML = ""),
              (this.ri = []),
              this.Zi();
            const n = this.getClientLocale(),
              s = n ? `&locale=${n}` : "";
            let u = i ? `search-gifs?q=${i}` : "trending-gifs?";
            (u = t ? `search-gifs?q=${t}` : u), (this.ni = `${m}/${u}${s}`);
            const o = yield fetch(`${m}/${u}${s}`),
              r = yield o.json();
            if (r.results && r.results.length > 0) this.loadGIFs(r);
            else if (!t) {
              const t = yield fetch(`${m}/trending_gifs?${s}`);
              this.ni = `${m}/trending_gifs?${s}`;
              const e = yield t.json();
              this.loadGIFs(e);
            }
          });
        }
        onGifSearch(t) {
          t.stopPropagation();
          const e = t.target.value;
          if ((void 0 !== this.Ei && clearTimeout(this.Ei), !e))
            return jQuery("#gif-input-back").hide(), jQuery("#gif-search").css("width", ""), void this.fetchGIFs();
          jQuery("#gif-input-back").show(),
            jQuery("#gif-search").css("width", "90%"),
            (this.Ei = setTimeout(() => {
              this.fetchGIFs(e);
            }, 500));
        }
        en(t) {
          return "string" == typeof t && "" !== t.replace(/^\s+|\s+$/g, "");
        }
        onChatKeyPress(t) {
          if ((t.stopPropagation(), "Enter" !== t.key || t.shiftKey))
            void 0 === this.wi ? this.Ni(this.Ki(!0)) : clearTimeout(this.wi),
              (this.wi = setTimeout(() => {
                (this.wi = void 0), this.Ni(this.Ki(!1));
              }, 500));
          else {
            jQuery("#emoji-picker-container").is(":hidden") || this.toggleEmojiClicker();
            const e = jQuery("#chat-input"),
              i = e[0].textContent;
            if (i && this.en(i)) {
              void 0 !== this.wi && (clearTimeout(this.wi), (this.wi = void 0), this.Ni(this.Ki(!1))),
                e.prop("contenteditable", !1),
                this.Ni(this.Yi(i.substring(0, 1500)), () => {
                  (e[0].textContent = ""), e.prop("contenteditable", !0), this.focusChat(), this.onInputChange();
                });
              const t = {
                  name: "chat_send",
                  action: { description: "message was sent" },
                  message: {
                    id: (function () {
                      try {
                        return ce();
                      } catch (t) {
                        return "";
                      }
                    })(),
                    text: i.trim()
                  }
                },
                n = new gt(l, h, t);
              k.l(n);
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
          const e = t.replace(A, "").replace(/[\uFE0F]/g, ""),
            i = ((t || "").match(A) || []).length;
          return 0 === e.length && i <= 3 && i > 0;
        }
        saveChangesListener() {
          var t;
          const e = jQuery("#nickname-edit")
            .val()
            .slice(0, 25)
            .replace(/^\s+|\s+$/g, "");
          Q("saveChanges button clicked: " + e),
            e !== (null === (t = this.Ti) || void 0 === t ? void 0 : t.userNickname) &&
              this.Ti &&
              (this.Ti.saveUserNickname(e),
              this.queueMessageForFrame(P.UPDATE_SETTINGS, { userSettings: this.Ti.userSettings }),
              this.Ni(this.Ui(this.Ti.userSettings)),
              jQuery("#nickname-edit").attr("placeholder", e),
              jQuery("#nickname-edit").text(e)),
            this.toggleIconContainer();
        }
        cancelNicknameListener() {
          this.toggleIconContainer();
        }
        get inSession() {
          return this.yi;
        }
        addIconSelector() {
          Object.keys(Ht).forEach((t) => {
            if (zt[t]()) {
              const e = Ht[t],
                i = jQuery('\n                <ul id="icon-holder"></ul>\n            ');
              for (const n of e) this.nn(`${t}/${n}`, i, n);
              const n = jQuery(
                `\n                <div class="icon-holder-wrap">\n                  <p class="extension-txt-indicator" data-tp-id="chat_container-new_icon_selection-category_name>${t}</p>\n                </div>\n            `
              );
              i.appendTo(n), n.appendTo(jQuery("#icon-holder-template"));
            }
          }, this);
        }
        inputHeightCheck() {
          const t = jQuery("#chat-input").text(),
            e = ((t || "").match(A) || []).length,
            i = t.replace(A, "");
          e <= 3 || i
            ? jQuery(".inTextEmoji").css("font-size", "24px")
            : e > 0
            ? jQuery(".inTextEmoji").css("font-size", "20px")
            : jQuery(".inTextEmoji").css("font-size", "18px");
        }
        nn(t, e, i) {
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
            (this.Ct = t),
            (this.sn =
              "\n\n            .with-chat-video {\n                object-fit: contain !important;\n            }\n\n            .with-fullscreen {\n                width: 99% !important;\n                top: 0px !important;\n                left: 50% !important;\n                transform: translateX(-50%);\n                position: relative !important;\n            }\n\n            .with-chat-thumbnail {\n                position: initial !important;\n            }\n\n            .with-vertical-center{\n                top: 50% !important;\n                transform: translateY(-50%);\n            }\n\n            .with-chat-ads {\n                right: 343px !important;\n            }\n\n            .fullscreen-clip {\n                transform: translateX(170px) !important;\n            }\n\n            .video-stream-full{\n                height: auto !important;\n            }\n\n            .with-video-stream {\n                left: 0px !important;\n            }\n\n            .bottom-with-chat {\n                width: 96% !important;\n            }\n\n            ytd-thumbnail #thumbnail.ytd-thumbnail yt-img-shadow.ytd-thumbnail {\n                position: relative !important;\n            }\n\n            #logo-icon {\n                display: initial !important\n            }\n        "),
            (this.un = this.on());
        }
        getReactionContainer() {
          return this.Ct.getVideoType() === ye.YOUTUBE_TV ? jQuery(Ce.TV_WRAPPER_SELECTOR) : jQuery(Ce.VIDEO_WRAPPER_SELECTOR).parent();
        }
        onFullScreenChatVisible() {
          var t;
          const e = null === (t = document.querySelector(".ytp-tooltip-text-wrapper")) || void 0 === t ? void 0 : t.parentElement,
            i = document.querySelector(".ytp-tooltip-title");
          jQuery(".video-stream").addClass("video-stream-full"),
            e && (e.style.transform = "translateX(-156px)"),
            i && (i.style.transform = "translateX(-156px)");
          const n = document.querySelector("#chat-wrapper");
          n && (n.style.transform = "translateX(-14px)");
          const s = document.querySelector("#tp-chat-close-button");
          s && (s.style.transform = "translateX(-14px)");
        }
        onExitFullScreen() {
          var t;
          const e = null === (t = document.querySelector(".ytp-tooltip-text-wrapper")) || void 0 === t ? void 0 : t.parentElement;
          jQuery(".video-stream").removeClass("video-stream-full"), e && (e.style.transform = "");
          const i = document.querySelector("#chat-wrapper");
          i && (i.style.transform = "");
          const n = document.querySelector("#tp-chat-close-button");
          n && (n.style.transform = "");
          const s = document.querySelector(".ytp-tooltip-title");
          s && (s.style.transform = "");
        }
        onFullScreenChange() {
          return fe(this, void 0, void 0, function* () {
            document.fullscreenElement && this.getChatVisible() && this.un !== Ce.TV_WRAPPER_SELECTOR
              ? this.onFullScreenChatVisible()
              : this.un !== Ce.TV_WRAPPER_SELECTOR && this.onExitFullScreen();
          });
        }
        rn() {
          this.un = this.on();
          const t = this.Ct.getVideoType();
          if (t === ye.YOUTUBE_VIDEO)
            jQuery(".video-stream").addClass("with-fullscreen"),
              jQuery(".html5-video-container").addClass("with-vertical-center"),
              document.fullscreenElement && this.onFullScreenChatVisible(),
              jQuery(".ytp-fit-cover-video, .html5-main-video").addClass(Z),
              jQuery(this.un).addClass(X);
          else if (t === ye.YOUTUBE_SHORT) jQuery("#masthead-container.ytd-app").addClass(X), jQuery("#shorts-container").addClass(X);
          else if (t === ye.YOUTUBE_TV)
            (document.querySelector(".video-stream").style.width = "auto"),
              jQuery(".video-stream").addClass(X),
              jQuery("ytu-player-controller.ytu-app").addClass(X),
              jQuery("ytu-player-controls").addClass(X);
          else {
            if (t !== ye.NONE) throw new Error("Page not recognized");
            a(
              () =>
                !!jQuery("#contents.ytd-section-list-renderer") &&
                !!jQuery("#secondary.ytd-two-column-browse-results-renderer") &&
                !!jQuery("ytd-rich-grid-renderer"),
              1 / 0
            )().then(() => {
              jQuery("#masthead-container.ytd-app").addClass(X),
                jQuery("#contents.ytd-section-list-renderer").addClass(X),
                jQuery("ytd-rich-grid-renderer").addClass(X),
                jQuery("#secondary.ytd-two-column-browse-results-renderer").addClass(q);
            });
          }
          jQuery("ytd-miniplayer").addClass(q);
        }
        an() {
          jQuery(".video-stream").removeClass("with-video-stream with-fullscreen"),
            jQuery(".ytp-chrome-bottom").removeClass("bottom-with-chat"),
            jQuery(".ytp-chrome-top").removeClass(X),
            jQuery(".video-stream").removeClass("with-video-stream"),
            jQuery(".video-stream").removeClass(X),
            jQuery(".ytp-fit-cover-video, .html5-main-video").removeClass(Z),
            jQuery(".ytp-ad-preview-container").removeClass(q),
            jQuery(".ytp-ad-skip-button-container").removeClass(q),
            jQuery(this.un).removeClass(X),
            jQuery("#masthead-container.ytd-app").removeClass(X),
            jQuery("#shorts-container").removeClass(X),
            jQuery("#contents.ytd-section-list-renderer").removeClass(X),
            jQuery("ytd-rich-grid-renderer").removeClass(X),
            jQuery("#secondary.ytd-two-column-browse-results-renderer").removeClass(q),
            jQuery("ytd-miniplayer").removeClass(q),
            jQuery(".html5-video-container").removeClass("with-vertical-center"),
            jQuery("#id-tv-container").removeClass(X),
            jQuery("ytu-player-controller.ytu-app").removeClass(X),
            jQuery("ytu-player-controls").removeClass(X),
            this.onExitFullScreen();
        }
        on() {
          const t = this.Ct.getVideoType();
          if (t === ye.YOUTUBE_VIDEO) return Ce.VIDEO_WRAPPER_SELECTOR;
          if (t === ye.YOUTUBE_SHORT) return Ce.SHORTS_WRAPPER_SELECTOR;
          if (t === ye.NONE) return Ce.NON_PAGE_WRAPPER_SELECTOR;
          if (t === ye.YOUTUBE_TV) return Ce.TV_WRAPPER_SELECTOR;
          throw new Error("Page not recognized");
        }
        Mi() {
          if (this.Oi) {
            const t = this.Ct.getVideoType();
            if (t === ye.YOUTUBE_VIDEO) this.Ct.setTheater(), this.cn(this.Oi);
            else if (t === ye.YOUTUBE_SHORT) this.Dn(this.Oi);
            else if (t === ye.NONE) this.hn(this.Oi);
            else {
              if (t !== ye.YOUTUBE_TV) throw new Error("Page not recognized");
              this.dn(this.Oi);
            }
          }
          this.Ct.noShortModal();
        }
        hn(t) {
          jQuery(Ce.NON_PAGE_WRAPPER_SELECTOR).before(Rt(t, this.sn));
        }
        cn(t) {
          jQuery(Ce.VIDEO_WRAPPER_SELECTOR).after(
            Rt(
              t,
              this.sn +
                "\n        #tp-chat-close-button, #chat-wrapper, #tp-buttons-container {\n            position: absolute !important;\n            z-index: 999 !important;\n        }"
            )
          );
        }
        dn(t) {
          jQuery(Ce.TV_WRAPPER_SELECTOR).prepend(
            Rt(
              t,
              this.sn +
                "\n        #tp-chat-close-button, #chat-wrapper, #tp-buttons-container {\n            position: absolute !important;\n            z-index: 999 !important;\n        }"
            )
          );
        }
        Dn(t) {
          jQuery(Ce.SHORTS_WRAPPER_SELECTOR).prepend(Rt(t, this.sn));
        }
        getChatVisible() {
          return jQuery("#chat-wrapper").is(":visible");
        }
        setChatVisible(t, e = !0) {
          const i = Object.create(null, { setChatVisible: { get: () => super.setChatVisible } });
          return fe(this, void 0, void 0, function* () {
            const n = new CustomEvent("YoutubeVideoMessage", { detail: { type: "SetChatVisible", visible: t } });
            t
              ? (jQuery("#chat-wrapper").show(), document.hasFocus() || this.clearUnreadCount(), yield this.rn())
              : (jQuery("#chat-wrapper").hide(), this.an()),
              this.Ct.isPlayerPage() ||
                (document.scrollingElement && ((document.scrollingElement.scrollTop += 1), (document.scrollingElement.scrollTop -= 1))),
              window.dispatchEvent(n);
            try {
              yield i.setChatVisible.call(this, t, e);
            } catch (t) {
              return;
            }
          });
        }
        getVideoTitle() {
          return fe(this, void 0, void 0, function* () {
            if (!this.Ct.isWatchPage()) return "";
            if (this.Ct.getRawVideoElement()) {
              return yield this.Ct.getVideoTitleAsync();
            }
            throw new Error(bt);
          });
        }
        shouldAddReactionSpace() {
          return this.getChatVisible();
        }
        shouldShowReaction() {
          return !this.Ct.currentlyWatchingAds && this.Ct.isWatchPage();
        }
        shouldUseVideoGIF() {
          return !0;
        }
      }
      (Ce.VIDEO_WRAPPER_SELECTOR = "#ytd-player"),
        (Ce.SHORTS_WRAPPER_SELECTOR = "ytd-app"),
        (Ce.NON_PAGE_WRAPPER_SELECTOR = "ytd-app"),
        (Ce.TV_WRAPPER_SELECTOR = "#id-tv-container");
      var we = i(4296),
        Ee = i.n(we);
      class be extends I {
        constructor(t, e, i) {
          super(t, e, i), (this.type = i);
        }
      }
      class je extends be {
        constructor(t, e, i) {
          super(t, e, v.CREATE_SESSION), (this.data = i);
        }
      }
      class _e {
        constructor(t, e, i, n, s) {
          (this.requiredPermissions = t), (this.serverName = i), (this.name = n), (this.contentScripts = e), (this.syncFromEnd = s);
        }
        urlWithSessionId(t) {
          return `${C}/join/${t}`;
        }
      }
      const Be = new (class extends _e {
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
      })([], ["content_scripts/netflix/netflix_content_bundled.js"], "netflix", vt.NETFLIX, !1);
      Object.freeze(Be);
      const Ae = Be;
      const Qe = new (class extends _e {
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
      })([], ["content_scripts/hulu/hulu_content_bundled.js"], "hulu", vt.HULU, !1);
      Object.freeze(Qe);
      const ke = Qe;
      const Ie = new (class extends _e {
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
      })([], ["content_scripts/disney/disney_content_bundled.js"], "disney", vt.DISNEY_PLUS, !1);
      Object.freeze(Ie);
      const xe = Ie;
      const Te = new (class extends _e {
        isValidUrl(t) {
          return (function (t) {
            return (t.hostname.includes(".hbomax.") && "other" !== o(t.pathname)) || t.pathname.includes("urn:hbo:page");
          })(t);
        }
        isBrowsing(t) {
          return t.hostname.includes(".hbomax.");
        }
        getVideoId(t) {
          const e = "urn:hbo:" + o(t.pathname) + ":",
            i = t.pathname.split(e);
          let n = null != i && i.length > 1 && null != i[1] ? i[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : null;
          const s = null != n && 0 !== n.length ? i[1].match(/^([a-zA-Z\-_0-9]+)\??.*/) : void 0;
          let u = s && s.length > 0 ? s[1] : void 0;
          return u || ((n = t.pathname.match(/(page:)([a-zA-Z\-_0-9]+)\??.*/)), (u = null != n && 3 == n.length ? n[2] : void 0)), u;
        }
        getVideoType(t) {
          return o(t.pathname);
        }
      })([], ["content_scripts/hbo_max/hbo_max_content_bundled.js"], "hbomax", vt.HBO_MAX, !1);
      Object.freeze(Te);
      const Se = Te;
      const Me = new (class extends _e {
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
      })([], ["content_scripts/amazon/amazon_content_bundled.js"], "amazon", vt.AMAZON, !1);
      Object.freeze(Me);
      const Pe = Me;
      const Ve = new (class extends _e {
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
      })([], ["content_scripts/crunchyroll/crunchyroll_content_bundled.js"], "crunchyroll", vt.CRUNCHYROLL, !1);
      Object.freeze(Ve);
      const $e = Ve;
      const Re = new (class extends _e {
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
      })([], ["content_scripts/youtube/youtube_content_bundled.js"], "youtube", vt.YOUTUBE, !1);
      Object.freeze(Re);
      const Ne = Re;
      const Ue = new (class extends _e {
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
      })([], ["content_scripts/espn/espn_content_bundled.js"], "espn", vt.ESPN, !1);
      Object.freeze(Ue);
      const Ge = Ue;
      const Le = new (class extends _e {
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
      })([], ["content_scripts/paramount/paramount_content_bundled.js"], "paramount", vt.PARAMOUNT, !1);
      Object.freeze(Le);
      const Oe = Le;
      const He = new (class extends _e {
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
      })([], ["content_scripts/hotstar/hotstar_content_bundled.js"], "hotstar", vt.HOTSTAR, !1);
      Object.freeze(He);
      const We = He;
      const ze = new (class extends _e {
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
      })([], ["content_scripts/peacock/peacock_content_bundled.js"], "peacock", vt.PEACOCK, !1);
      Object.freeze(ze);
      const Ye = ze;
      const Ke = new (class extends _e {
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
      })([], ["content_scripts/funimation/funimation_content_bundled.js"], "funimation", vt.FUNIMATION, !1);
      Object.freeze(Ke);
      const Je = Ke;
      const Xe = new (class extends _e {
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
      })([], ["content_scripts/max/max_content_bundled.js"], "max", vt.MAX, !1);
      Object.freeze(Xe);
      const qe = Xe;
      const Ze = new (class extends _e {
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
      })([], ["content_scripts/starplus/starplus_content_bundled.js"], "starplus", vt.STAR_PLUS, !1);
      Object.freeze(Ze);
      const ti = Ze;
      const ei = new (class extends _e {
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
      })([], ["content_scripts/plutotv/plutotv_content_bundled.js"], "plutotv", vt.PLUTO_TV, !1);
      Object.freeze(ei);
      const ii = ei;
      const ni = new (class extends _e {
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
      })([], ["content_scripts/appletv/appletv_content_bundled.js"], "appletv", vt.APPLE_TV, !1);
      Object.freeze(ni);
      const si = ni;
      const ui = new (class extends _e {
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
      })([], ["content_scripts/jio_cinema/jio_cinema_content_bundled.js"], "jiocinema", vt.JIO_CINEMA, !1);
      Object.freeze(ui);
      const oi = ui;
      const ri = new (class extends _e {
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
      })([], ["content_scripts/tubitv/tubitv_content_bundled.js"], "tubitv", vt.TUBI_TV, !1);
      Object.freeze(ri);
      const ai = ri;
      const ci = new (class extends _e {
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
      })([], ["content_scripts/crave/crave_content_bundled.js"], "crave", vt.CRAVE, !1);
      Object.freeze(ci);
      const Di = ci;
      const hi = new (class extends _e {
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
      })([], ["content_scripts/mubi/mubi_content_bundled.js"], "mubi", vt.MUBI, !1);
      Object.freeze(hi);
      const di = hi;
      const li = new (class extends _e {
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
      })([], ["content_scripts/stan/stan_content_bundled.js"], "stan", vt.STAN, !1);
      Object.freeze(li);
      const pi = li;
      class vi {
        constructor(t, e) {
          var i;
          (this.isBrowsing = !1), (this.id = e), this.videoId, (this.url = t);
          const n = [Ae, ke, xe, Se, Pe, Ne, $e, Ge, Oe, We, Ye, ti, qe, Je, si, ii, oi, ai, di, pi, Di];
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
      class gi extends be {
        constructor(t, e, i) {
          super(t, e, v.RE_INJECT), (this.data = i);
        }
      }
      var Fi = function (t, e, i, n) {
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
      var yi = function (t, e, i, n) {
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
      class mi extends class {
        constructor(t) {
          var e, i, n;
          (this.ln = !1),
            (this.pn = !1),
            (this.vn = !1),
            (this.gn = 0),
            (this.Fn = !1),
            (this.yn = !1),
            (this.mn = !1),
            (this.checkShowMenu = () => {
              this.shouldMenuBeVisible() ? this.Cn() : this.wn();
            }),
            console.log("Teleparty Browse Loaded " + (null === (e = window.teleparty) || void 0 === e ? void 0 : e.tabId)),
            (this.En = new vi(
              new URL(window.location.href),
              null !== (n = null === (i = window.teleparty) || void 0 === i ? void 0 : i.tabId) && void 0 !== n ? n : 0
            )),
            (this.bn = t),
            this.bn.setPageControls(this);
        }
        setChatApi(t) {
          (this.bn = t), this.bn.setPageControls(this);
        }
        jn() {
          jQuery("#tp-control-lock-button .tooltiptext").text(this.vn ? "Only I have control" : "Everyone has control"),
            this.vn
              ? (jQuery("#tp-unlocked-image").addClass("hidden"), jQuery("#tp-locked-image").removeClass("hidden"))
              : (jQuery("#tp-unlocked-image").removeClass("hidden"), jQuery("#tp-locked-image").addClass("hidden"));
        }
        _n() {
          this.pn || ((this.vn = !this.vn), this.jn());
        }
        setResetChatButton() {
          this.bn.getChatWindowVisible()
            ? (jQuery("#tp-chat-button .tooltiptext").text("Reset View"),
              this.bn.shouldReturnToVideo && jQuery("#tp-chat-button .tooltiptext").text("Return to Video"),
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
        Bn() {
          jQuery("#tp-chat-hidden").addClass("hidden"),
            this.bn.isPartyWindowsActive()
              ? (this.setResetChatButton(), jQuery("#tp-message-indicator").removeClass("hidden"))
              : (jQuery("#tp-message-indicator").removeClass("hidden"),
                jQuery("#tp-chat-button .tooltiptext").text(`${this.gn} unread ${1 == this.gn ? "message" : "messages"}`),
                jQuery("#tp-chat-gray").removeClass("hidden"),
                jQuery("#tp-chat-reset").addClass("hidden"),
                jQuery("#tp-chat-button .tp-hover-image").removeClass("hidden"));
        }
        hideMessageIndicator() {
          jQuery("#tp-message-indicator").addClass("hidden"),
            this.bn.isPartyWindowsActive()
              ? this.setResetChatButton()
              : (jQuery("#tp-chat-button .tp-hover-image").removeClass("hidden"),
                jQuery("#tp-chat-button .tooltiptext").text("Show chat"),
                jQuery("#tp-chat-gray").addClass("hidden"),
                jQuery("#tp-chat-hidden").removeClass("hidden"),
                jQuery("#tp-chat-reset").addClass("hidden"));
        }
        onChatMessage() {
          this.bn.shouldChatBeVisible() ||
            this.bn.isPartyWindowsActive() ||
            (this.gn++,
            this.Bn(),
            (this.Fn = !0),
            this.Cn(),
            r(1e3)().then(() => {
              this.Fn = !1;
            }));
        }
        teardown() {
          this.An(), this.wn(), this.Qn && clearInterval(this.Qn);
        }
        kn() {
          var t;
          return Fi(this, void 0, void 0, function* () {
            if (this.pn || this.bn.inSession) return;
            if ((this.In(), (this.pn = !0), !(null === (t = window.teleparty) || void 0 === t ? void 0 : t.contentScriptInjected))) {
              console.log("Re injecting");
              const t = new gi(p, h, { extensionTabData: this.En });
              try {
                yield k.l(t);
              } catch (t) {
                return console.log(t), this.xn(), this.Nt(t), this.Tn(Et), void (this.pn = !1);
              }
            }
            console.log("Sending create");
            const e = this.Sn();
            try {
              const t = yield k.l(e);
              t.error ? (this.Tn(t.error.message), this.Nt(t.error.message)) : ((this.pn = !1), this.Mn(), this.enablePartyIcons());
            } catch (t) {
              console.log(t), this.Tn(Et), this.Nt(t);
            }
            this.xn(), (this.pn = !1);
          });
        }
        enablePartyIcons() {
          this.hideError(),
            jQuery("#tp-party-active").removeClass("hidden"),
            jQuery("#tp-party-inactive").addClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").addClass("hidden"),
            jQuery("#tp-icon-container").attr("style", "cursor: auto");
        }
        An() {
          jQuery("#tp-party-active").addClass("hidden"),
            jQuery("#tp-party-inactive").removeClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").html("Open Teleparty"),
            jQuery("#tp-icon-container").removeClass("play-chat-active"),
            jQuery("#play-chat-icon").addClass("hidden"),
            jQuery("#tp-icon-white").removeClass("hidden");
        }
        Nt(t) {
          const e = new gt(d, h, { name: "error", action: { description: "an error has occured", reason: t } });
          k.l(e);
        }
        Tn(t) {
          jQuery("#tp-controls-error-text").text(t),
            jQuery("#tp-error-box").removeClass("hidden"),
            jQuery("#tp-icon-container .tooltiptext").addClass("hidden");
        }
        hideError() {
          jQuery("#tp-error-box").addClass("hidden");
        }
        Pn(t) {
          return t
            .replace(/{EXTENSION_LOGO_WHITE}/g, Wt(chrome.runtime.getURL("img/icon_white.svg")))
            .replace(/{EXTENSION_LOGO_GRADIENT}/g, Wt(chrome.runtime.getURL("img/icon_gradient.svg")))
            .replace(/{PLAY_IMAGE}/g, Wt(chrome.runtime.getURL("img/play.svg")))
            .replace(/{UNLOCKED_IMAGE}/g, Wt(chrome.runtime.getURL("img/icon_remote_inactive.svg")))
            .replace(/{LOCKED_IMAGE}/g, Wt(chrome.runtime.getURL("img/icon_remote_active.svg")))
            .replace(/{ARROW_RIGHT}/g, Wt(chrome.runtime.getURL("img/arrow-right.svg")))
            .replace(/{LINK_IMAGE}/g, Wt(chrome.runtime.getURL("img/icon_link_active.svg")))
            .replace(/{LINK_ACTIVE_IMAGE}/g, Wt(chrome.runtime.getURL("img/icon_link_active.svg")))
            .replace(/{CHAT_HIDDEN_IMAGE}/g, Wt(chrome.runtime.getURL("img/icon_chat_inactive.svg")))
            .replace(/{CHAT_GRAY_IMAGE}/g, Wt(chrome.runtime.getURL("img/icon_chatgray_active.svg")))
            .replace(/{CHAT_ACTIVE_IMAGE}/g, Wt(chrome.runtime.getURL("img/icon_chat_active.svg")))
            .replace(/{DISCONNECT_IMAGE}/g, Wt(chrome.runtime.getURL("img/icon_logout_active.svg")))
            .replace(/{RESET_CHAT_IMAGE}/g, Wt(chrome.runtime.getURL("img/reset_chat.svg")));
        }
        wn() {
          this.Fn || (this.hideError(), jQuery("#tpIconContainer").addClass("hidden"));
        }
        Cn() {
          return Fi(this, void 0, void 0, function* () {
            if (!this.yn && (this.mn || this.bn.inSession)) {
              this.yn = !0;
              try {
                yield this.addTpIcon(),
                  this.bn.inSession ? this.enablePartyIcons() : this.An(),
                  jQuery("#tpIconContainer").removeClass("hidden"),
                  this.setChatButtons();
              } finally {
                this.yn = !1;
              }
            }
          });
        }
        startEventListener() {
          this.Qn = setInterval(this.checkShowMenu, 200);
        }
        stopEventListener() {
          this.Qn && clearInterval(this.Qn);
        }
        Vn() {
          return "100px";
        }
        addTpIcon() {
          return Fi(this, void 0, void 0, function* () {
            if ((this.mn || this.bn.inSession) && 0 === jQuery("#tpIconContainer").length) {
              const t = this.Pn(Ee()),
                e = yield this.getControlsRoot();
              e.length > 0 &&
                (e.append(
                  (function (t, e = "") {
                    return `\n    <link rel="stylesheet" href="${chrome.runtime.getURL(
                      "css/overlay.css"
                    )}">\n    <style>\n      ${e}\n    </style>\n    ${t}\n  `;
                  })(t)
                ),
                this.$n());
            }
          });
        }
        $n() {
          jQuery("#tp-control-lock-button").click(this._n.bind(this)),
            jQuery("#tp-buttons-container").attr("style", `top:${this.Vn()}`),
            jQuery("#tp-chat-close-button").attr("style", `top:${this.Vn()}`),
            jQuery("#tp-error-box").attr("style", `top:${this.Vn()}`),
            jQuery("#tp-link-button").click(this.Rn.bind(this)),
            jQuery("#tp-chat-button").on("click", (t) => (this.Nn(), t.stopImmediatePropagation(), t.stopPropagation(), !1)),
            jQuery("#tp-disconnect-button").on("click", () => {
              this.Un();
            });
        }
        Un() {
          const t = new ct(p, h, Pt);
          k.l(t), this.wn();
        }
        Rn() {
          this.bn.linkIconListener(),
            jQuery("#tp-link-button .tooltiptext").text("Link copied"),
            setTimeout(() => {
              jQuery("#tp-link-button .tooltiptext").text("Copy join link");
            }, 1e3);
        }
        Nn() {
          return Fi(this, void 0, void 0, function* () {
            (this.gn = 0),
              this.hideMessageIndicator(),
              this.bn.isPartyWindowsActive()
                ? this.bn.resetChatWindow(!0)
                : (this.bn.shouldChatBeVisible(), yield this.bn.setChatVisible(!this.bn.shouldChatBeVisible()), this.setChatButtons());
          });
        }
        onInitChat() {
          this.ln && this.Cn();
        }
        setChatButtons() {
          this.bn.inSession && this.bn.getChatVisible() ? this.Mn() : this.Gn(),
            this.bn.isPartyWindowsActive() ? this.setResetChatButton() : this.hideMessageIndicator();
        }
        Mn() {
          return Fi(this, void 0, void 0, function* () {
            this.bn.inSession &&
              this.bn.shouldChatBeVisible() &&
              (jQuery("#tp-chat-close-button").removeClass("hidden"), jQuery("#tp-buttons-container").addClass("hidden"));
          });
        }
        Gn() {
          jQuery("#tp-chat-close-button").addClass("hidden"), jQuery("#tp-buttons-container").removeClass("hidden");
        }
        Sn() {
          return new je(p, h, this.Ln());
        }
        Ln() {
          return { createSettings: { controlLock: this.vn }, extensionTabData: this.En, source: "pc" };
        }
        In() {
          jQuery("#tp-icon-container .tooltiptext").html(
            'Loading <span class="ellipsis-anim"><span>.</span><span>.</span><span>.</span></span>'
          );
        }
        xn() {
          jQuery("#tp-icon-container .tooltiptext").html("Start a party");
        }
      } {
        constructor() {
          super(...arguments), (this.On = 2500);
        }
        shouldMenuBeVisible() {
          if (window.location.href.includes("tv.youtube.com")) return !0;
          const t = jQuery(".ytp-chrome-bottom");
          return (t.length > 0 && "0" !== t.css("opacity")) || !this.isWatchPage()
            ? (this.Hn && clearTimeout(this.Hn),
              (this.Hn = setTimeout(() => {
                this.Hn = void 0;
              }, this.On)),
              !0)
            : void 0 !== this.Hn;
        }
        isWatchPage() {
          return !!window.location.href.includes("/watch");
        }
        getControlsRoot() {
          return yi(this, void 0, void 0, function* () {
            return this.isWatchPage()
              ? jQuery("#ytd-player")
              : window.location.href.includes("tv.youtube.com")
              ? jQuery("#id-tv-container")
              : jQuery("ytd-app");
          });
        }
        isPlayerPage() {
          return !(!window.location.href.includes("/watch") && !window.location.href.includes("/shorts/"));
        }
        reloadListener() {
          jQuery("#tpIconContainer").remove(), this.stopEventListener(), this.startEventListener();
        }
      }
      var fi = function (t, e, i, n) {
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
      var Ci = function (t, e, i, n) {
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
      class wi extends class {
        constructor() {
          (this.Wn = 0), (this.nt = !1);
        }
        set hostOnly(t) {
          this.nt = t;
        }
        get hostOnly() {
          return this.nt;
        }
        get uiEventsHappening() {
          return this.Wn;
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
          const i = new gt(l, h, { name: "video_error", action: { description: t, reason: e } });
          k.l(i);
        }
        doAdCheck() {
          return fi(this, void 0, void 0, function* () {});
        }
      } {
        constructor() {
          super(),
            (this.zn = !1),
            (this.Yn = !1),
            (this.Kn = new s("ext:ContentScripts:Youtube:YoutubeVideoApi")),
            (this.isLive = () => !!this.Yn),
            (this.isWatchingAds = () => this.Jn),
            (this.Xn = () => document.querySelector(".ytp-ad-preview-container")),
            (this.waitNewVideoReadyAsync = () =>
              Ci(this, void 0, void 0, function* () {
                yield a(() => this.qn() !== N.LOADING && this.qn() !== N.NOT_READY, 1 / 0, 15)();
              })),
            (this.Wn = 0),
            (this.Zn = 0),
            (this.ts = 0),
            (this.es = 0),
            (this.ns = 0),
            (this.ss = !1),
            (this.Jn = !1);
        }
        get videoId() {
          return this.Mt;
        }
        set videoId(t) {
          this.Mt = t;
        }
        setVideoEventListener(t) {
          this.bt = t;
        }
        get videoTitle() {
          return this.us;
        }
        onNode(t) {
          var e;
          const i = t.detail;
          "VideoId" == i.type && ((this.Mt = i.videoId), (this.Yn = null !== (e = i.isLive) && void 0 !== e && e), (this.Zn = Date.now())),
            "VideoTitle" == i.type && ((this.us = i.title), (this.ts = Date.now())),
            "VideoTime" == i.type && ((this.os = i.videoTime), (this.es = Date.now())),
            "Navigated" == i.type && (this.ns = Date.now());
        }
        sendVideoIdEvent() {
          return Ci(this, void 0, void 0, function* () {
            this.Kn.debug({ methodName: "sendVideoIdEvent", message: "Trying to send video ID event" });
            try {
              yield a(
                () => {
                  const t = new CustomEvent("YoutubeVideoMessage", { detail: { type: "getVideoId" } });
                  return window.dispatchEvent(t), !0;
                },
                1e3,
                10
              )();
            } catch (t) {
              this.logError("Failed to load video Id", t);
            }
          });
        }
        sendVideoTitleEvent() {
          return Ci(this, void 0, void 0, function* () {
            this.Kn.debug({ methodName: "sendVideoTitleEvent", message: "Trying to send video title event" });
            try {
              yield a(
                () => {
                  const t = new CustomEvent("YoutubeVideoMessage", { detail: { type: "getVideoTitle" } });
                  return window.dispatchEvent(t), !0;
                },
                1e3,
                10
              )();
            } catch (t) {
              this.logError("Failed to load video title", t);
            }
          });
        }
        sendVideoTimeEvent() {
          return Ci(this, void 0, void 0, function* () {
            try {
              yield a(
                () => {
                  const t = new CustomEvent("YoutubeVideoMessage", { detail: { type: "getVideoTime" } });
                  return window.dispatchEvent(t), !0;
                },
                1e3,
                10
              )();
            } catch (t) {
              this.logError("Failed to load video title", t);
            }
          });
        }
        getVideoIdAsync() {
          var t, e;
          return Ci(this, void 0, void 0, function* () {
            try {
              if (!this.isPlayerPage()) return "browsing";
              const e = Date.now();
              return (
                yield this.sendVideoIdEvent(),
                yield a(() => this.Zn > e && null != this.Zn, 1e3, 10)(),
                null !== (t = this.Mt) && void 0 !== t ? t : ""
              );
            } catch (t) {
              return (
                console.log("unable to get videoID", t),
                null !== (e = Ne.getVideoId(new URL(window.location.href))) && void 0 !== e ? e : ""
              );
            }
          });
        }
        updateVideoId() {
          var t;
          return Ci(this, void 0, void 0, function* () {
            try {
              if (this.isPlayerPage()) {
                const t = Date.now();
                yield this.sendVideoIdEvent(), yield a(() => this.Zn > t && null != this.Zn, 1e3, 10)();
              } else this.Mt = "browsing";
            } catch (e) {
              console.log("unable to update videoID"),
                (this.Mt = null !== (t = Ne.getVideoId(new URL(window.location.href))) && void 0 !== t ? t : "");
            }
          });
        }
        getVideoTitleAsync() {
          var t, e;
          return Ci(this, void 0, void 0, function* () {
            try {
              if (!this.isPlayerPage()) return "";
              const e = Date.now();
              return (
                yield this.sendVideoTitleEvent(),
                yield a(() => this.ts > e && null != this.ts, 1e3, 10),
                null !== (t = this.us) && void 0 !== t ? t : ""
              );
            } catch (t) {
              return null !== (e = this.rs()) && void 0 !== e ? e : "";
            }
          });
        }
        getVideoElement() {
          let t = null;
          const e = window.location.href;
          if (this.isPlayerPage())
            if (e.includes("/watch")) t = document.querySelector("#movie_player");
            else if (e.includes("/shorts/")) t = document.querySelector("#shorts-player");
            else {
              if (!e.includes("tv.youtube.com")) throw new Error("Unknown Video Type");
              t = document.querySelector("#");
            }
          return t;
        }
        getRawVideoElement() {
          let t = null;
          const e = window.location.href;
          if (this.isPlayerPage())
            if (e.includes("/watch")) t = document.querySelector(".video-stream.html5-main-video");
            else {
              if (!e.includes("/shorts/")) throw new Error("Unknown Video Type");
              t = document.querySelector("#shorts-player > .html5-video-container > .video-stream.html5-main-video");
            }
          return t;
        }
        setCurrentTime(t) {
          return Ci(this, void 0, void 0, function* () {
            (this.Wn += 1),
              yield a(
                () => {
                  const e = new CustomEvent("YoutubeVideoMessage", { detail: { type: "seekTo", seekTo: t / 1e3 } });
                  return window.dispatchEvent(e), !0;
                },
                1e3,
                10
              )();
            try {
              yield r(500)(), yield this.waitVideoDoneLoadingAsync();
            } finally {
              this.Wn -= 1;
            }
          });
        }
        cs() {
          let t;
          const e = this.getRawVideoElement();
          return e && (t = Math.floor(1e3 * e.duration)), t;
        }
        isPlayerPage() {
          return !(!window.location.href.includes("/watch") && !window.location.href.includes("/shorts/"));
        }
        isWatchPage() {
          return this.getVideoType() === ye.YOUTUBE_VIDEO || this.getVideoType() === ye.YOUTUBE_TV;
        }
        getVideoType() {
          let t = ye.NONE;
          if (this.isPlayerPage()) {
            const e = window.location.href;
            e.includes("watch?")
              ? (t = ye.YOUTUBE_VIDEO)
              : e.includes("/shorts/")
              ? (t = ye.YOUTUBE_SHORT)
              : e.includes("tv.youtube.com") && (t = ye.YOUTUBE_TV);
          }
          return t;
        }
        Ds() {
          let t = ye.NONE;
          if (this.isPlayerPage()) {
            const e = window.location.href;
            e.includes("watch?")
              ? (t = ye.YOUTUBE_VIDEO)
              : e.includes("/shorts/")
              ? (t = ye.YOUTUBE_SHORT)
              : new URL(e).hostname.includes("tv.youtube") && (t = ye.YOUTUBE_TV),
              this.Yn && (t = ye.YOUTUBE_LIVE);
          }
          return t;
        }
        hs() {
          return Ci(this, void 0, void 0, function* () {
            this.isWatchPage() && ((this.Mt = yield this.getVideoIdAsync()), (this.us = yield this.getVideoTitleAsync()));
          });
        }
        noShortModal() {
          !this.isPlayerPage() || this.isWatchPage() || this.ss || (ot(it), (this.ss = !0));
        }
        waitVideoApiReadyAsync() {
          return Ci(this, void 0, void 0, function* () {
            yield this.hs();
          });
        }
        ds() {
          return Ne.getVideoId(new URL(window.location.href));
        }
        setTheater() {
          try {
            a(() => {
              const t = new CustomEvent("YoutubeVideoMessage", { detail: { type: "setTheater" } });
              return window.dispatchEvent(t), !0;
            }, 500)();
          } catch (t) {
            throw new Error("Couldn't set video to theater in time.");
          }
        }
        disableTheater() {
          try {
            a(() => {
              const t = new CustomEvent("YoutubeVideoMessage", { detail: { type: "disableTheater" } });
              return window.dispatchEvent(t), !0;
            }, 500)();
          } catch (t) {
            throw new Error("Couldn't disable video to theater in time.");
          }
        }
        get currentlyWatchingAds() {
          return this.Jn;
        }
        set currentlyWatchingAds(t) {
          this.Jn = t;
        }
        isVideoReady() {
          const t = this.qn();
          return "paused" === t || "playing" === t || "ad_playing" === t;
        }
        waitVideoDoneLoadingAsync() {
          return Ci(this, void 0, void 0, function* () {
            yield a(() => this.qn() !== N.LOADING && this.qn() !== N.NOT_READY, 1e3, 10)();
          });
        }
        getStateAsync() {
          return Ci(this, void 0, void 0, function* () {
            const t = yield this.ls();
            return new Promise((e, i) => {
              if (void 0 === t) return void i("Could not get current player time.");
              e({ playbackState: this.qn(), playbackPositionMilliseconds: t });
            });
          });
        }
        ls() {
          var t;
          return Ci(this, void 0, void 0, function* () {
            if (this.Yn)
              try {
                const e = Date.now();
                return (
                  yield this.sendVideoTimeEvent(),
                  yield a(() => this.es > e, 1e3, 10),
                  1e3 * (null !== (t = this.os) && void 0 !== t ? t : 0)
                );
              } catch (t) {
                const e = this.getRawVideoElement();
                if (e) return Math.floor(1e3 * e.currentTime);
              }
            else {
              const t = this.getRawVideoElement();
              if (t) return Math.floor(1e3 * t.currentTime);
            }
            return 0;
          });
        }
        getStreamingServiceName() {
          return this.getVideoType() === ye.YOUTUBE_TV ? vt.YOUTUBE_TV : vt.YOUTUBE;
        }
        getUpdateSessionDataAsync() {
          return Ci(this, void 0, void 0, function* () {
            const t = yield this.getStateAsync(),
              e = yield this.ls();
            if (null === e) throw new Error("Couldn't get update data");
            const i = Date.now();
            return {
              state: t.playbackState === N.PLAYING ? R.PLAYING : R.PAUSED,
              lastKnownTime: null != e ? e : -1,
              lastKnownTimeUpdatedAt: i,
              bufferingState: this.qn() == N.LOADING
            };
          });
        }
        rs() {
          var t;
          const e = window.location.href;
          let i;
          if (this.isPlayerPage()) {
            if (e.includes("watch?")) i = document.querySelector(".title.style-scope.ytd-video-primary-info-renderer");
            else if (e.includes("/shorts/")) {
              const e = document.querySelector("#shorts-player");
              i =
                null === (t = null == e ? void 0 : e.closest(".reel-video-in-sequence.style-scope.ytd-shorts")) || void 0 === t
                  ? void 0
                  : t.querySelector(".title > .style-scope");
            } else {
              if (!e.includes("tv.youtube.com")) throw new Error("Unknown Video Type");
              i = document.querySelector(".ypc-video-title-text");
            }
            return i ? i.innerText : void 0;
          }
          console.log("No video to return");
        }
        getVideoDataAsync() {
          var t;
          return Ci(this, void 0, void 0, function* () {
            const e = yield this.getVideoTitleAsync(),
              i = yield this.getVideoIdAsync(),
              n = null !== (t = this.cs()) && void 0 !== t ? t : 0,
              s = this.getScreenSize(),
              u = this.getVideoContent(i, e, window.location.href, this.Ds()),
              o = yield this.getStateAsync();
            return {
              videoId: i,
              videoTitle: e,
              videoDuration: n,
              serviceDomain: window.location.hostname,
              screen: s,
              content: u,
              videoState: o.playbackState
            };
          });
        }
        jumpToNextEpisode(t) {
          return Ci(this, void 0, void 0, function* () {
            if ((yield this.getVideoIdAsync()) !== t.videoId) {
              const e = Date.now();
              yield a(
                () => {
                  const e = new CustomEvent("YoutubeVideoMessage", { detail: { type: "jumpToNextEpisode", nextVideoId: t.videoId } });
                  return window.dispatchEvent(e), !0;
                },
                1e3,
                10
              )(),
                yield a(() => this.ns > e && null != this.ns, 1e3, 10)().catch(() =>
                  Ci(this, void 0, void 0, function* () {
                    var t;
                    try {
                      yield null === (t = this.bt) || void 0 === t ? void 0 : t.reloadNextEpisode();
                    } catch (t) {
                      console.log("Failed to jump to next episode:", t);
                    }
                  })
                );
            }
          });
        }
        freeze(t) {
          return Ci(this, void 0, void 0, function* () {
            this.Wn += 1;
            try {
              yield this.pause(), yield r(t)(), yield this.play();
            } finally {
              this.Wn -= 1;
            }
          });
        }
        play() {
          return Ci(this, void 0, void 0, function* () {
            if (this.isWatchPage()) {
              this.Kn.debug({ methodName: "play", message: "Attempting to play" }), (this.Wn += 1);
              try {
                const t = this.getRawVideoElement();
                if (null === t) throw new Error(bt);
                yield t.play(), yield a(() => this.qn() === N.PLAYING || this.qn() === N.AD_PLAYING, 1250, 10)();
              } finally {
                this.Wn -= 1;
              }
            }
          });
        }
        pause() {
          return Ci(this, void 0, void 0, function* () {
            if (this.isWatchPage()) {
              this.Kn.debug({ methodName: "pause", message: "Attempting to Pause" }), (this.Wn += 1);
              try {
                const t = this.getRawVideoElement();
                if (null === t) throw new Error(bt);
                t.pause(), yield r(250)(), yield a(() => this.qn() === N.PAUSED || this.qn() === N.AD_PLAYING, 1250, 10)();
              } finally {
                this.Wn -= 1;
              }
            }
          });
        }
        qn() {
          if (!this.isPlayerPage()) return N.IDLE;
          if (null !== this.Xn() || jQuery(".ytp-ad-preview-container").length > 0) return N.AD_PLAYING;
          const t = this.getRawVideoElement();
          let e;
          return (e = t ? (t.paused ? N.PAUSED : t.readyState < 4 ? N.LOADING : N.PLAYING) : N.NOT_READY), e;
        }
      }
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
      var bi = function (t, e, i, n) {
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
      class ji extends class {
        constructor(t) {
          (this.Ct = t), console.log("Video Event Listener");
        }
        getCurrentStatus() {
          return Ei(this, void 0, void 0, function* () {
            return "";
          });
        }
        getStatusMetaData() {
          return Ei(this, void 0, void 0, function* () {});
        }
        reloadNextEpisode() {
          var t;
          return Ei(this, void 0, void 0, function* () {
            yield null === (t = this.Hi) || void 0 === t ? void 0 : t.reloadPartyAsync();
          });
        }
        startListening() {
          this.ps();
        }
        stopListening() {
          this.vs();
        }
        ps() {
          const t = navigator;
          t.mediaSession.setActionHandler("play", () =>
            Ei(this, void 0, void 0, function* () {
              this.gs(), this.Ct.play(), console.log("Bluetooth device played the video");
            })
          ),
            t.mediaSession.setActionHandler("pause", () =>
              Ei(this, void 0, void 0, function* () {
                this.gs(), this.Ct.pause(), console.log("Bluetooth device paused the video");
              })
            );
        }
        vs() {
          const t = navigator;
          t.mediaSession.setActionHandler("play", null), t.mediaSession.setActionHandler("pause", null);
        }
        Fs() {
          var t;
          null === (t = this.Hi) || void 0 === t || t.tryBroadcast(!1);
        }
        gs() {
          var t;
          console.log("Going to wait for change"), null === (t = this.Hi) || void 0 === t || t.tryBroadcast(!0);
        }
        ys() {
          var t;
          null === (t = this.Hi) || void 0 === t || t.setBuffering(!0);
        }
        fs(t) {
          var e;
          null === (e = this.Hi) || void 0 === e || e.setWatchingAds(!0, t);
        }
        Cs() {
          var t, e;
          null === (t = this.Hi) || void 0 === t || t.setWatchingAds(!1), null === (e = this.Hi) || void 0 === e || e.forceSync();
        }
        ws() {
          var t;
          null === (t = this.Hi) || void 0 === t || t.setBuffering(!1);
        }
        Es(t) {
          var e;
          null === (e = this.Hi) || void 0 === e || e.sendNextEpisodeAsync(t);
        }
        bs(t) {
          var e;
          null === (e = this.Hi) || void 0 === e || e.sendTeardown(t);
        }
        setMessageForwarder(t) {
          this.Hi = t;
        }
        shouldSync() {
          return !0;
        }
      } {
        constructor(t, e, i) {
          var n;
          super(t),
            (this.js = this._s.bind(this)),
            (this.Bs = this.As.bind(this)),
            (this.Kn = new s("ext:ContentScripts:Youtube:YoutubeVideoEventListener")),
            (this.Qs = () =>
              bi(this, void 0, void 0, function* () {
                this.Ct.getVideoType() === ye.YOUTUBE_TV &&
                  setTimeout(
                    () =>
                      bi(this, void 0, void 0, function* () {
                        yield this.ks(), this.B.setChatVisible(this.B.shouldChatBeVisible());
                      }),
                    1e3
                  );
              })),
            (this.Is = () =>
              bi(this, void 0, void 0, function* () {
                const t = yield this.Ct.getStateAsync();
                this.Ct.setTheater(),
                  this.Ct.isPlayerPage() &&
                    t.playbackState === N.AD_PLAYING &&
                    (this.Kn.debug({ methodName: "_checkAdStart", message: "active ad class node added" }),
                    (this.Ct.currentlyWatchingAds = !0),
                    this.fs(),
                    yield this.xs());
              })),
            (this.shouldSync = () => !this.Ct.currentlyWatchingAds && this.Ct.isWatchPage()),
            (this.ks = () =>
              bi(this, void 0, void 0, function* () {
                var t, e, i;
                try {
                  if ((this.B.setMessageForwarder(this.Hi), !this.Ct.isWatchPage())) return;
                  if (null === (t = this.Hi) || void 0 === t ? void 0 : t.changingVideo) return;
                  this.Hi && (this.Hi.changingVideo = !0);
                  const n = yield this.Ct.getVideoIdAsync();
                  n && n != (null === (e = this.Hi) || void 0 === e ? void 0 : e.videoId)
                    ? this.Es(n)
                    : n == (null === (i = this.Hi) || void 0 === i ? void 0 : i.videoId) && (this.Hi.changingVideo = !1);
                } catch (t) {
                  this.Kn.debug({ methodName: "onVideoLoadStart", message: t });
                }
              })),
            (this.Ct = t),
            (this.B = e),
            (this.A = i),
            this.Ct.setVideoEventListener(this),
            (this.Ts = this.Ct.onNode.bind(this.Ct)),
            this.initListeners(),
            (null === (n = window.teleparty) || void 0 === n ? void 0 : n.injectScriptLoaded) ||
              (function (t) {
                const e = document.createElement("script");
                e.setAttribute("tpInjected", ""), (e.src = t), (document.head || document.documentElement).appendChild(e), e.remove();
              })(chrome.extension.getURL("content_scripts/youtube/youtube_injected_bundled.js"));
        }
        initListeners() {
          window.addEventListener("FromNode", this.Ts, !1);
        }
        As(t) {
          var e, i;
          return bi(this, void 0, void 0, function* () {
            const n = t.target;
            this.Ct.setTheater();
            const s = !(null ===
              (i = null !== (e = document.querySelector("#ytd-player")) && void 0 !== e ? e : document.querySelector("#id-tv-container")) ||
            void 0 === i
              ? void 0
              : i.contains(n));
            this.Kn.debug({ methodName: "onUserInteraction", message: `shouldNotInteract: ${s}` }),
              this.Kn.debug({ methodName: "onUserInteraction", message: `Event is a MouseEvent: ${t instanceof MouseEvent}` }),
              this.Ct.currentlyWatchingAds ||
                !this.Ct.isWatchPage() ||
                s ||
                (H.tasksInFlight < 5 && !H.hasTaskInQueue("NETFLIX_WAIT_FOR_CHANGE") && this.gs());
          });
        }
        startListening() {
          super.startListening(),
            (this.Ss = setInterval(() => {
              this.Is();
            }, 2e3)),
            window.addEventListener("mouseup", this.Bs),
            window.addEventListener("keyup", this.Bs),
            document.addEventListener("yt-navigate-finish", this.ks),
            document.addEventListener("yt-navigate", this.Qs),
            document.addEventListener("yt-page-type-changed", this.js),
            document.addEventListener("ytu-page-type-changed", this.js),
            document.addEventListener("yt-navigate-start", this.Ct.setTheater.bind(this.Ct), !1),
            document.addEventListener("fullscreenchange", this.B.onFullScreenChange.bind(this.B), !1);
        }
        stopListening() {
          super.stopListening(),
            document.removeEventListener("yt-navigate-finish", this.ks),
            document.removeEventListener("yt-navigate-start", this.Ct.setTheater.bind(this.Ct), !1),
            document.removeEventListener("yt-page-type-changed", this.js),
            document.removeEventListener("yt-navigate", this.Qs),
            document.removeEventListener("ytu-page-type-changed", this.js),
            document.removeEventListener("fullscreenchange", this.B.onFullScreenChange.bind(this.B), !1),
            window.removeEventListener("FromNode", this.Ts, !1),
            window.removeEventListener("mouseup", this.Bs),
            window.removeEventListener("keyup", this.Bs),
            this.Ss && clearInterval(this.Ss),
            this.Ct.disableTheater();
        }
        xs() {
          return bi(this, void 0, void 0, function* () {
            yield this.Ct.play(),
              yield a(
                () => (
                  document.querySelector(".ytp-ad-player-overlay") || ((this.Ct.currentlyWatchingAds = !1), this.Cs()),
                  !this.Ct.isWatchingAds()
                ),
                1 / 0
              )();
          });
        }
        _s() {
          var t;
          jQuery("#reset-icon").hide();
          const e = this.B.shouldChatBeVisible();
          this.B.setChatVisible(!1),
            this.B.removeChat(),
            jQuery("[tpInjected]").remove(),
            this.B.setChatVisible(e),
            this.B.reloadChat(),
            this.A.reloadListener(),
            (this.B.shouldReturnToVideo = !1),
            (null === (t = this.Hi) || void 0 === t ? void 0 : t.videoId) &&
              !this.Ct.isWatchPage() &&
              ((this.B.shouldReturnToVideo = !0), jQuery("#reset-icon").show());
        }
        reloadListeners() {
          this.stopListening(), this.initListeners(), this.startListening();
        }
        onFullScreen() {}
        loadNewVideoAsync(t) {
          return bi(this, void 0, void 0, function* () {
            yield new Promise((e, i) => {
              const n = performance.now(),
                s = setInterval(
                  () =>
                    bi(this, void 0, void 0, function* () {
                      if (((this.Ct.videoId = Ne.getVideoId(new URL(window.location.href))), this.Ct.videoId === t)) {
                        const t = this.Ct.getRawVideoElement();
                        t instanceof Element && t.src && (clearInterval(s), e());
                      }
                      performance.now() - n >= 2e4 && (clearInterval(s), i(new Error("Could not load new video in time.")));
                    }),
                  200
                );
            }),
              yield this.Ct.waitNewVideoReadyAsync(),
              yield this.Is();
          });
        }
      }
      class _i extends class {
        constructor(t, e, i, n) {
          (this.B = t),
            (this.Ct = e),
            (this.bt = i),
            (this.A = n),
            window.teleparty && !window.teleparty.pageControls
              ? ((window.teleparty.pageControls = n), console.log("Setting Page COntrols"))
              : (n.setChatApi(this.B), console.log("Resetting Chat Api for old controls")),
            (this.Ms = new L(this.B, this.A)),
            (this.Hi = new Mt(this.Ct, this.B, this.bt)),
            (this.Ps = !1),
            (this.Vs = !1),
            (this.bi = !1),
            (this.v = new $()),
            this.v.addMessageListener(this.Hi),
            this.v.addMessageListener(this.Ms),
            this.v.addMessageListener(this),
            (this.$s = !1),
            this.Rs();
        }
        Ns() {
          return $t(this, void 0, void 0, function* () {
            yield this.A.addTpIcon(), this.A.startEventListener();
          });
        }
        loadBrowseButton() {
          return $t(this, void 0, void 0, function* () {
            yield this.A.addTpIcon(), this.A.startEventListener();
          });
        }
        Rs() {
          const t = chrome.runtime.connect();
          t.onDisconnect.addListener(() => {
            console.log("Lost background script. Teardown");
            const t = { showAlert: this.B.inSession, alertModal: ut };
            this.Us(t);
          }),
            t.onMessage.addListener(() => {
              Q("Got background script"), (this.$s = !0);
            });
        }
        onMessage(t, e, i) {
          if (t.target == l) {
            if (t.type === v.IS_CONTENT_SCRIPT_READY) {
              if (this.Ps) {
                i({ ready: !0 });
              } else this.Vs || ((this.Vs = !0), this.Gs().then(i));
              return !0;
            }
            if (t.type === v.GET_INIT_DATA) {
              return i(this.Ls()), !0;
            }
            if (t.type === v.DISCONNECT && t.sender == d) {
              const t = new ct(l, h, Pt);
              k.l(t), i();
            } else {
              if (t.type == S.TEARDOWN) {
                const e = t;
                return this.Us(e.data), i(), !0;
              }
              t.type === S.ON_NOTIF && this.Os();
            }
          }
          return !1;
        }
        Os() {
          console.log("Show Notification");
        }
        Us(t) {
          var e, i, n;
          if (t.showAlert && t.alertModal) {
            const i = null !== (e = t.buttonUrl) && void 0 !== e ? e : this.B.getPartyUrl();
            ot(t.alertModal, i);
          }
          this.A.teardown(), this.Hi.teardown(), this.Ms.teardown(), this.v.teardown();
          const s = {
              name: "error",
              action: {
                description: null === (i = t.alertModal) || void 0 === i ? void 0 : i.title,
                reason: null === (n = t.alertModal) || void 0 === n ? void 0 : n.content
              }
            },
            u = new gt(l, h, s);
          k.l(u), window.teleparty && (window.teleparty.contentScriptInjected = !1) && (window.teleparty.contentScriptReady = !1);
        }
        Nt(t) {
          if ("Please open a video on Amazon Prime Video then click on the Tp icon" === t) return;
          const e = new gt(l, h, { name: "error", action: { reason: t } });
          k.l(e);
        }
        Hs() {
          return $t(this, void 0, void 0, function* () {
            return a(() => this.$s, 5e3)();
          });
        }
        Gs() {
          return $t(this, void 0, void 0, function* () {
            try {
              yield this.Hs();
              const t = yield this.Ws();
              return this.Ns(), t;
            } catch (t) {
              const e = { message: wt, showButton: !1 };
              return this.Nt(wt), { ready: !1, error: e };
            } finally {
              this.Vs = !1;
            }
          });
        }
        Ws() {
          return $t(this, void 0, void 0, function* () {
            let t;
            try {
              yield this.Ct.waitVideoApiReadyAsync();
              const e = yield this.zs();
              e && e.error
                ? (Q("Error is:", e.error),
                  (t = { message: e.error, showButton: !0 }),
                  (this.Ps = !0),
                  window.teleparty && (window.teleparty.contentScriptReady = !0))
                : (e && e.showReviewMessage && (this.bi = !0),
                  (this.Ps = !0),
                  window.teleparty && (window.teleparty.contentScriptReady = !0));
            } catch (e) {
              (t = { message: e.message, showButton: !1 }), this.Nt(e.message);
            }
            return { ready: this.Ps, error: t };
          });
        }
        Ls() {
          return {
            inSession: this.B.inSession,
            isChatVisible: this.B.isPartyWindowsActive() ? this.B.getChatWindowVisible() : this.B.getChatVisible(),
            partyUrl: this.B.getPartyUrl(),
            showReviewMessage: !1,
            partyWindowsActive: this.B.isPartyWindowsActive()
          };
        }
        zs() {
          return $t(this, void 0, void 0, function* () {
            const t = yield this.Ys();
            return k.l(t);
          });
        }
        Ys() {
          return $t(this, void 0, void 0, function* () {
            const t = { videoId: (yield this.Ct.getVideoDataAsync()).videoId };
            return new V(l, h, t);
          });
        }
      } {
        constructor() {
          const t = new wi(),
            e = new Ce(t),
            i = new s("ext:ContentScripts:Youtube:YoutubeContentScript");
          let n;
          window.teleparty && window.teleparty.pageControls
            ? ((n = window.teleparty.pageControls), console.log("Using Youtube Page Controls"))
            : (n = new mi(e));
          super(e, t, new ji(t, e, n), n), i.debug({ methodName: "constructor", message: "Initialize Youtube Content Script" });
        }
      }
      const Bi = new s("ext:ContentScripts:Youtube:YoutubeContent");
      var Ai;
      (window.teleparty && (null === (Ai = window.teleparty) || void 0 === Ai ? void 0 : Ai.contentScriptInjected)) ||
        (window.teleparty || (window.teleparty = {}),
        (window.teleparty.contentScriptInjected = !0),
        new _i(),
        Bi.debug({ message: "Initialized content script" }));
    })();
})();
